export default function TaskItem() {
    return (
        <div className="tasks__item tasks__item--done">
            <header>
                <h3>task title</h3>
                <span>(completed)</span>
            </header>
            
            <button>toggle</button>
        </div>
    )
}