import CheckFill from "../../assets/images/check-fill.svg"
import CheckUnFill from "../../assets/images/check-unfill.svg"

export default function TaskItem(data) {
  const { title, completed } = data.data

  return (
    <div
      className={`tasks__item ${
        completed ? "tasks__item--done" : "tasks__item--inprogress"
      }`}
    >
      <button>
        <img src={completed ? CheckFill : CheckUnFill} alt="" />
      </button>

      <h3>{title}</h3>
      <span>({completed ? "completed" : "in progress"})</span>
    </div>
  )
}
