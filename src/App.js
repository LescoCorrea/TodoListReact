
import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodoAction, RemoveTodoAction } from './actions/TodoActions';

function App() {

  const [todo, setTodo] = useState();
  const dispatch = useDispatch();
  const Todo = useSelector((state) => state.Todo);
  const { todos } = Todo;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo));
  };

  const removeHandler = (t) => {
    dispatch(RemoveTodoAction(t));
  };


  return (
    <div className="App">
      <header className="App-header">
        <h2>Application de liste de tâches dans redux</h2>
        <form onSubmit={handleSubmit}>
          <input placeholder='Entrez une tâche' style={{ width: 350, padding: 10, borderRadius: 20, border: "none", fontSize: 20, }}
            onChange={(e) => setTodo(e.target.value)} />

          <button type='submit'
            style={{
              padding: 12,
              borderRadius: 25,
              fontSize: 15,
              marginLeft: 20,
              border: "none",
              cursor: 'pointer',
            }}>Validez</button>
        </form>
        <ul className='alltodo'>

          {
            todos && todos.map((t) => (

              <li key={t.id} className='singletodo'>
                <span className='todotext'>{t.todo}</span>

                <button style={{
                  borderRadius: 25,
                  padding: 10,
                  border: '1px solid white',
                  color: "white",
                  backgroundColor: "orangered",
                }}
                onClick={()=>removeHandler(t)}
                >
                  supprimer
                </button>
              </li>

            ))
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
