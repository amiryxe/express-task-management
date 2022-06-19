import TaskItem from "./TaskItem"
import { useGetTasksQuery } from "../../services/api"

export default function TaskList() {
    const {data = [], isFetching} = useGetTasksQuery()

    return (
        <>
            {
                isFetching ? 'loading' :
                data.map(item => <TaskItem key={item.id} data={item} />)
            }
        </>
    )
}