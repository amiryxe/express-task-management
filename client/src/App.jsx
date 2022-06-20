import './App.scss'

import Header from './components/layouts/Header'
import AddTask from './components/Tasks/AddTask'
import TaskList from './components/Tasks/TaskList'

function App() {
  return (
    <div className="container">
      <Header />
      <AddTask />
      <TaskList />
    </div>
  )
}

export default App
