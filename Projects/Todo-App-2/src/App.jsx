import AppName from './components/AppName';
import AddTodo from './components/AddTodo';
import TodoItem from './components/TodoItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
function App() {

  const todoitems = [
    {
      name: "Buy Dudh",
      date: "4/10/2023",
    },
    {
      name: "go to collage",
      date: "10:00 AM daily",
    },
    {
      name:"drink water",
      date:"daily after 1 hr"
    }
  ];
  return (
    <center className="todo-container">

      <AppName></AppName>
      <AddTodo></AddTodo>
      <div className="items-container">
        <TodoItem todoitems={todoitems}></TodoItem>

      </div>

    </center>
  )
}

export default App;
