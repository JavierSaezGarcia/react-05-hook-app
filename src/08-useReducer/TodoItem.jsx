export const TodoItem = ({ todo, onDeleteTodo,  onToggleTodo }) => {

  const deleteItem = (event) => {
    event.preventDefault()
    onDeleteTodo(todo.id)
  }
  return (
    <>
      <li key={todo.id} className="list-group-item d-flex justify-content-between">
        <h4 
          className={`align-self-center ${(todo.done) ? 'text-decoration-line-through' : ''} `}
          onClick={ () => onToggleTodo(todo.id) }
          style={{ cursor: 'pointer'}}
          >{todo.description}</h4>
        <button
          className="btn btn-outline-danger"
          onClick={deleteItem}>Borrar</button>
      </li>
    </>
  )
}
