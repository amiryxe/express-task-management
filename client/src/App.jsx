import './App.scss'

import Header from './components/layouts/Header'
import TaskList from './components/Tasks/TaskList'

function App() {
  return (
    <div className="container">
      <Header />
      <TaskList />
    </div>
  )
}

export default App
