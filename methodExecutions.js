var methodExecution1 = {"packageName":"ro.exceptionalbear.todoapp.todo","className":"TodoController","methodName":"createTodoPost","input":"username = andrei\ntodo = Todo [id=null, username=andrei, description=first todo qwqweqweqweqweq, targetDate=2007-12-03, done=false]","output":"Todo [id=1, username=andrei, description=first todo qwqweqweqweqweq, targetDate=2007-12-03, done=false]","children":[{"packageName":"ro.exceptionalbear.todoapp.todo","className":"TodoService","methodName":"save","input":"todo = Todo [id=null, username=andrei, description=first todo qwqweqweqweqweq, targetDate=2007-12-03, done=false]","output":"Todo [id=1, username=andrei, description=first todo qwqweqweqweqweq, targetDate=2007-12-03, done=false]","children":[{"packageName":"ro.exceptionalbear.todoapp.todo.repository","className":"TodoRepository","methodName":"save","input":"arg0 = Todo [id=null, username=andrei, description=first todo qwqweqweqweqweq, targetDate=2007-12-03, done=false]","output":"Todo [id=1, username=andrei, description=first todo qwqweqweqweqweq, targetDate=2007-12-03, done=false]","children":[],"id":"ro.exceptionalbear.todoapp.todo.repositoryTodoRepositorysave"}],"id":"ro.exceptionalbear.todoapp.todoTodoServicesave"}],"id":"ro.exceptionalbear.todoapp.todoTodoControllercreateTodoPost"}
var methodExecution2 = {"packageName":"ro.exceptionalbear.todoapp.todo","className":"TodoController","methodName":"createTodoPost","input":"username = andrei\ntodo = Todo [id=null, username=andrei, description=first todo qwqweqweqweqweq, targetDate=2007-12-03, done=false]","output":"Todo [id=2, username=andrei, description=first todo qwqweqweqweqweq, targetDate=2007-12-03, done=false]","children":[{"packageName":"ro.exceptionalbear.todoapp.todo","className":"TodoService","methodName":"save","input":"todo = Todo [id=null, username=andrei, description=first todo qwqweqweqweqweq, targetDate=2007-12-03, done=false]","output":"Todo [id=2, username=andrei, description=first todo qwqweqweqweqweq, targetDate=2007-12-03, done=false]","children":[{"packageName":"ro.exceptionalbear.todoapp.todo.repository","className":"TodoRepository","methodName":"save","input":"arg0 = Todo [id=null, username=andrei, description=first todo qwqweqweqweqweq, targetDate=2007-12-03, done=false]","output":"Todo [id=2, username=andrei, description=first todo qwqweqweqweqweq, targetDate=2007-12-03, done=false]","children":[],"id":"ro.exceptionalbear.todoapp.todo.repositoryTodoRepositorysave"}],"id":"ro.exceptionalbear.todoapp.todoTodoServicesave"}],"id":"ro.exceptionalbear.todoapp.todoTodoControllercreateTodoPost"}
var methodExecution3 = {"packageName":"ro.exceptionalbear.todoapp.todo","className":"TodoController","methodName":"retrieveTodos","input":"username = andrei","output":"[Todo [id=1, username=andrei, description=first todo qwqweqweqweqweq, targetDate=2007-12-03, done=false], Todo [id=2, username=andrei, description=first todo qwqweqweqweqweq, targetDate=2007-12-03, done=false]]","children":[{"packageName":"ro.exceptionalbear.todoapp.todo","className":"TodoService","methodName":"findByUsername","input":"username = andrei","output":"[Todo [id=1, username=andrei, description=first todo qwqweqweqweqweq, targetDate=2007-12-03, done=false], Todo [id=2, username=andrei, description=first todo qwqweqweqweqweq, targetDate=2007-12-03, done=false]]","children":[{"packageName":"ro.exceptionalbear.todoapp.todo.repository","className":"TodoRepository","methodName":"findByUsername","input":"arg0 = andrei","output":"[Todo [id=1, username=andrei, description=first todo qwqweqweqweqweq, targetDate=2007-12-03, done=false], Todo [id=2, username=andrei, description=first todo qwqweqweqweqweq, targetDate=2007-12-03, done=false]]","children":[],"id":"ro.exceptionalbear.todoapp.todo.repositoryTodoRepositoryfindByUsername"}],"id":"ro.exceptionalbear.todoapp.todoTodoServicefindByUsername"}],"id":"ro.exceptionalbear.todoapp.todoTodoControllerretrieveTodos"}
var methodExecution4 = {"packageName":"ro.exceptionalbear.todoapp.todo","className":"TodoController","methodName":"retrieveTodo","input":"username = andrei\nid = 1","output":"Todo [id=1, username=andrei, description=first todo qwqweqweqweqweq, targetDate=2007-12-03, done=false]","children":[{"packageName":"ro.exceptionalbear.todoapp.todo","className":"TodoService","methodName":"findById","input":"id = 1","output":"Todo [id=1, username=andrei, description=first todo qwqweqweqweqweq, targetDate=2007-12-03, done=false]","children":[{"packageName":"ro.exceptionalbear.todoapp.todo.repository","className":"TodoRepository","methodName":"findById","input":"arg0 = 1","output":"Optional[Todo [id=1, username=andrei, description=first todo qwqweqweqweqweq, targetDate=2007-12-03, done=false]]","children":[],"id":"ro.exceptionalbear.todoapp.todo.repositoryTodoRepositoryfindById"}],"id":"ro.exceptionalbear.todoapp.todoTodoServicefindById"}],"id":"ro.exceptionalbear.todoapp.todoTodoControllerretrieveTodo"}
var methodExecution5 = {"packageName":"ro.exceptionalbear.todoapp.todo","className":"TodoController","methodName":"deleteTodo","input":"username = andrei\nid = 1","output":"<204 NO_CONTENT No Content,[]>","children":[{"packageName":"ro.exceptionalbear.todoapp.todo","className":"TodoService","methodName":"deleteById","input":"id = 1","output":null,"children":[{"packageName":"ro.exceptionalbear.todoapp.todo.repository","className":"TodoRepository","methodName":"deleteById","input":"arg0 = 1","output":null,"children":[],"id":"ro.exceptionalbear.todoapp.todo.repositoryTodoRepositorydeleteById"}],"id":"ro.exceptionalbear.todoapp.todoTodoServicedeleteById"}],"id":"ro.exceptionalbear.todoapp.todoTodoControllerdeleteTodo"}
var methodExecution6 = {"packageName":"ro.exceptionalbear.todoapp.todo","className":"TodoController","methodName":"updateTodo","input":"username = andrei\nid = 2\ntodo = Todo [id=null, username=andrei, description=second todo   2222 3333, targetDate=2007-12-03, done=false]","output":"Todo [id=2, username=andrei, description=second todo   2222 3333, targetDate=2007-12-03, done=false]","children":[{"packageName":"ro.exceptionalbear.todoapp.todo","className":"TodoService","methodName":"updateTodo","input":"id = 2\ntodo = Todo [id=null, username=andrei, description=second todo   2222 3333, targetDate=2007-12-03, done=false]","output":"Todo [id=2, username=andrei, description=second todo   2222 3333, targetDate=2007-12-03, done=false]","children":[{"packageName":"ro.exceptionalbear.todoapp.todo","className":"Todo","methodName":"getDescription","input":null,"output":"second todo   2222 3333","children":[],"id":"ro.exceptionalbear.todoapp.todoTodogetDescription"},{"packageName":"ro.exceptionalbear.todoapp.todo","className":"Todo","methodName":"getUsername","input":null,"output":"andrei","children":[],"id":"ro.exceptionalbear.todoapp.todoTodogetUsername"},{"packageName":"ro.exceptionalbear.todoapp.todo","className":"Todo","methodName":"getTargetDate","input":null,"output":"2007-12-03","children":[],"id":"ro.exceptionalbear.todoapp.todoTodogetTargetDate"},{"packageName":"ro.exceptionalbear.todoapp.todo","className":"Todo","methodName":"isDone","input":null,"output":"false","children":[],"id":"ro.exceptionalbear.todoapp.todoTodoisDone"},{"packageName":"ro.exceptionalbear.todoapp.todo.repository","className":"TodoRepository","methodName":"updateTodo","input":"arg0 = second todo   2222 3333\narg1 = andrei\narg2 = 2007-12-03\narg3 = false\narg4 = 2","output":"1","children":[],"id":"ro.exceptionalbear.todoapp.todo.repositoryTodoRepositoryupdateTodo"},{"packageName":"ro.exceptionalbear.todoapp.todo","className":"TodoService","methodName":"findById","input":"id = 2","output":"Todo [id=2, username=andrei, description=second todo   2222 3333, targetDate=2007-12-03, done=false]","children":[{"packageName":"ro.exceptionalbear.todoapp.todo.repository","className":"TodoRepository","methodName":"findById","input":"arg0 = 2","output":"Optional[Todo [id=2, username=andrei, description=second todo   2222 3333, targetDate=2007-12-03, done=false]]","children":[],"id":"ro.exceptionalbear.todoapp.todo.repositoryTodoRepositoryfindById"}],"id":"ro.exceptionalbear.todoapp.todoTodoServicefindById"}],"id":"ro.exceptionalbear.todoapp.todoTodoServiceupdateTodo"}],"id":"ro.exceptionalbear.todoapp.todoTodoControllerupdateTodo"}
