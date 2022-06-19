import TaskItem from "./TaskItem"
import { useGetTasksQuery } from "../../services/api"

export default function TaskList() {
    const {data, isFetching} = useGetTasksQuery()
    console.log(data);

    return (
        <>
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
        </>
    )
}