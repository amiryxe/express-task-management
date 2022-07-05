import CheckFill from "../../assets/images/check-fill.svg"
import CheckUnFill from "../../assets/images/check-unfill.svg"

export default function TaskItem(data) {
  const { id, title, completed } = data.data

  const updateStatusHandler = () => {
    console.log(id)
  }

  return (
    <div
      className={`tasks__item ${
        completed ? "tasks__item--done" : "tasks__item--inprogress"
      }`}
    >
      <button onClick={updateStatusHandler}>
        <img src={completed ? CheckFill : CheckUnFill} alt="" />
      </button>

      <h3>{title}</h3>
      <span>({completed ? "completed" : "in progress"})</span>
    </div>
  )
}
