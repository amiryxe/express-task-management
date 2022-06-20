export default function AddTask() {
    return (
        <form className="tasks__add">
            <input type="text" />

            <label>
                <input type="radio" name="status" value={true} id="" />
                Completed
            </label>

            <label>
                <input type="radio" name="status" value={false} id="" />
                in progress
            </label>
            
            <button>Add task</button>
        </form>
    )
}