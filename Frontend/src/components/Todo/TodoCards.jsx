
const TodoCards = ({title,Description}) => {
  return (
    <div className="p-3 todo-card">
      <div>
        <h1>{title}</h1>
        <p className="todo-card-para">
          {Description.split("",77)}...
        </p>
      </div>
    </div>
  )
}

export default TodoCards;