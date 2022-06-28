import { useAddTaskMutation } from "../../services/api"

export default function AddTask() {
  const [addTask, { isLoading, isSuccess, error }] = useAddTaskMutation()

  const submitHandler = async (e) => {
    e.preventDefault()

    const data = {
      title: e.target.title.value,
      completed: Boolean(e.target.completed.value),
    }

    addTask(data)

    e.target.reset()
  }

  return (
    <form className="tasks__add" onSubmit={submitHandler}>
      <input type="text" name="title" placeholder="Enter task title..." />

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
