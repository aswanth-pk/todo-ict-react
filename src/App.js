import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoHome from './Components/TodoHome';
import Completed from './Components/Completed';
import Incomplete from './Components/Incomplete';
import AddTodo from './Components/AddTodo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<TodoHome />}/>
        <Route path='https://thriving-chimera-380e1e.netlify.app/addtodo' exact element={<AddTodo />} />
        <Route path='/completed' exact element={<Completed />} />
        <Route path='/incomplete' exact element={<Incomplete />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
