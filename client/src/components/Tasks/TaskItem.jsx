import CheckFill from '../../assets/images/check-fill.svg'

export default function TaskItem() {
    return (
        <div className="tasks__item tasks__item--done">
            <button>
                <img src={CheckFill} alt="" />
            </button>

            <h3>task title</h3>
            <span>(completed)</span>
        </div>
    )
}