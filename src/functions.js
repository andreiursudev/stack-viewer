var getKeysByPattern = function (obj, pattern) {
    return Object.keys(obj).filter((key) => pattern.test(key)).reduce((cur, key) => {
        return Object.assign(cur, {[key]: obj[key]})
    }, {});
}

function hasMethodAlreadyBeenAddedToArray(methodsTree, methodName) {
    return methodsTree.some(m => m['methodName'] === methodName);
}

function findExistingMethod(methodsTree, methodName) {
    return methodsTree.find(method => method['methodName'] === methodName);
}

function getUniqueListBy(arr, key) {
    return [...new Map(arr.map(item => [item[key], item])).values()]
}

function flatMethodsToTreeStructure(methods, existingMethods) {
    if (methods.length > 0) {
        for (innerMethod of methods) {
            let innerMethodName = innerMethod["methodName"];
            if (!hasMethodAlreadyBeenAddedToArray(existingMethods, innerMethodName)) {
                existingMethods.push(innerMethod);
            } else {
                let innerExistingMethod = findExistingMethod(existingMethods, innerMethodName);
                flatMethodsToTreeStructure(innerMethod.children, innerExistingMethod.children);
            }
        }
    }
}

var flatMethodExecutionsToTreeStructure = function (methodExecutions) {
    var methodsTree = [];
    flatMethodsToTreeStructure(methodExecutions, methodsTree);
    return methodsTree[0];
}

function getInputOutput(method) {
    return {"input": method["input"], "output": method["output"]};
}

function getInputOutputToMethods(methods) {
    var inputOutputToMethod = {}
    for (method of methods) {
        inputOutputToMethod[method["methodName"]] = getInputOutput(method);
        if (method["children"].length > 0) {
            inputOutputToMethod = {...inputOutputToMethod, ...getInputOutputToMethods(method["children"])};
        }
    }
    return inputOutputToMethod;
}

function getInputOutputToMethodsIncludingChildren(method) {
    return {...{[method["methodName"]]: getInputOutput(method)}, ...getInputOutputToMethods(method["children"])};
}

function doesMethodAlreadyHasATestCase(testCasesToMethod, methodName) {
    return testCasesToMethod.hasOwnProperty(methodName);
}

function getAlreadyExistingTestCasesOrNewForMethodName(testCasesToMethod, methodName) {
    let testCases = {};
    if (doesMethodAlreadyHasATestCase(testCasesToMethod, methodName)) {
        testCases = testCasesToMethod[methodName];
    }
    return testCases;
}

var getTestCasesToMethod = function (localTestCases) {
    var testCasesToMethod = {};

    for (const [key, testCase] of Object.entries(localTestCases)) {
        let method = testCase["methodExecution"];
        var methodName = method["methodName"];
        var testCaseName = testCase["testCaseName"];

        let testCases = getAlreadyExistingTestCasesOrNewForMethodName(testCasesToMethod, methodName);

        testCases[testCaseName] = getInputOutputToMethodsIncludingChildren(method);
        testCasesToMethod[methodName] = testCases;
    }
    return testCasesToMethod;
}

var groupMethodExecutionsByPackageAndClass = function (methodExecutions) {
    var result = {};
    for (var i in methodExecutions) {
        var methodExecution = methodExecutions[i];
        var packageName = methodExecution.packageName;
        var className = methodExecution.className;
        var id = packageName + className;
        if (result[id] == null) {
            result[id] = {
                packageName: methodExecution["packageName"],
                className: methodExecution["className"],
                methodNames: [methodExecution["methodName"]]
            };
        } else {
            result[id].methodNames.push(methodExecution["methodName"]);
        }
    }
    return Object.values(result);
}

function getChildren(methodNames) {
    return methodNames.map(methodName => ({"name": methodName}));
}

function exists(zNodes, name) {
    return zNodes.some(zNode => zNode['name'] === name);
}

function getZNode(directories, index, lastChild, zNodes, zNode) {
    if (index < directories.length) {
        let directory = directories[index];
        if (exists(zNodes, directory)) {
            let existingZNode = zNodes.find(n => n['name'] === directory);
            getZNode(directories, index + 1, lastChild, existingZNode.children, existingZNode)
        } else {
            let zNode = {
                name: directory,
                open: true,
                children: []
            };
            zNodes.push(zNode)
            getZNode(directories, index + 1, lastChild, zNode.children, zNode)
        }
    } else {
        if (!exists(zNode.children, lastChild.name)) {
            zNode.children.push(lastChild);
        } else {
            let existingZNode = zNode.children.find(n => n["name"] === lastChild.name);
            existingZNode.open = true;
            if(existingZNode.children == null){
                existingZNode.children = [];
                existingZNode.children.push({name: 0});
            }
            existingZNode.children.push({name: existingZNode.children.length})
        }
    }
}

var getZNodes = function (methodExecutions) {
    var result = [];
    for (const [key, methodExecution] of Object.entries(methodExecutions)) {
        var lastChild = {name: methodExecution["methodName"]}

        let directories = methodExecution.packageName.split(".").concat(methodExecution["className"]);

        getZNode(directories, 0, lastChild, result, {});
    }
    return result;
}

function getPath(methodExecution) {
    return [methodExecution["packageName"], methodExecution["className"], methodExecution["methodName"]].join(".");
}

function getPathAsId(methodExecution) {
    return getPath(methodExecution).replaceAll(".", "");
}

var getMethodExecutions = function (nodePath, methodExecutions) {
    let path = nodePath.map(path => path.name).join(".");
    return Object.values(methodExecutions).filter(function (methodExecution) {
        return path === getPath(methodExecution)
    });
}

function getMethodElement(node) {
    let method = $('<div class="method">');
    method.prop('id', getPathAsId(node))
    method.append(node.className + " " + node.methodName);
    return method;
}

function appendToElement(element, node) {
    return $('<tr>')
        .append($('<td class="methodTd">')
            .append(getMethodElement(node)));
}

function appendTo(element, node) {
    let tr = appendToElement(element, node);
    element.append(tr);
    tippy("#" + getPathAsId(node), {
        placement: 'bottom',
        content: Handlebars.compile($('#inputOutputToolTip').html())({input: node.input, output: node.output}),
        trigger: 'click',
        interactive: true,
        allowHTML: true,
        maxWidth: 'none'
    });
    if (node.children != null) {
        let td = $('<td>');
        tr.append(td);
        $.each(node.children, function (i, node) {
            appendTo(td, node)
        })
    }
}

function select(child) {
    child.selected = true;
}

function addSelectFlagToChildren(children) {
    for (child of children) {
        select(child);
        addSelectFlagToChildren(child.children);
    }
}

var addSelectFlag = function (methodExecution) {
    select(methodExecution);
    addSelectFlagToChildren(methodExecution.children);
}
