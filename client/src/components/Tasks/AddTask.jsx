export default function AddTask() {
  const submitHandler = (e) => {
    e.preventDefault()

    console.log({
      title: e.target.title.value,
      completed: Boolean(e.target.completed.value),
    })

    e.target.reset()
  }

  return (
    <form className="tasks__add" onSubmit={submitHandler}>
      <input type="text" name="title" />

      <label>
        <input type="radio" name="completed" value="1" id="" />
        Completed
      </label>

      <label>
        <input type="radio" name="completed" value="" id="" />
        in progress
      </label>

      <button>Add task</button>
    </form>
  )
}
