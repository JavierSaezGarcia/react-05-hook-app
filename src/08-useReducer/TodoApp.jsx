
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodos } from '../hooks';

export const TodoApp = () => {

    const { todos, pendientes, completados,handleNewTodo, handleRemoveTodo, handleToggleTodo } = useTodos();
    

    return (
        <>
            <h1>TODO APP</h1>
            <ul className="list-group list-group-horizontal  gap-3">
                <h5><li className="list-group-item">Total&nbsp;&nbsp;&nbsp;<span className="badge bg-primary text-bg-primary">{todos.length}</span></li></h5>                
                <h5><li className="list-group-item ">Pendientes&nbsp;&nbsp;&nbsp;<span className="badge bg-primary text-bg-primary">{pendientes}</span></li></h5>
                <h5><li className="list-group-item">Completados&nbsp;&nbsp;&nbsp;<span className="badge bg-primary text-bg-primary">{completados}</span></li></h5>
            </ul>
            <hr />

            <div className="row">
                <div className="col-6">
                    <TodoList
                        todos={todos}
                        onDeleteTodo={handleRemoveTodo}
                        onToggleTodo={handleToggleTodo} />
                </div>
               
                
                <div className="col-5">

                    <h4>Agregar tarea</h4>
                    <hr />
                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>
            </div>
        </>
    )
}
