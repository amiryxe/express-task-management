export default function AddTask() {
  const submitHandler = async (e) => {
    e.preventDefault()

    const data = {
      title: e.target.title.value,
      completed: Boolean(e.target.completed.value),
    }

    await fetch("http://localhost:5000/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data),
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
