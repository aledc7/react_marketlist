import logo from '../images/logo.svg';
import React from 'react';
import { TodoCounter } from './TodoCounter/TodoCounter.jsx';
import { TodoSearch } from './TodoSearch/TodoSearch.jsx';
import { TodoList } from './TodoList/TodoList.jsx';
import { TodoItem } from './TodoItem/TodoItem.jsx';
// import { CreateTodoButton } from './CreateTodoButton';
import './App.css';


// Creo un array para usar como prueba, por ahora no consulto a nunguna base de datos
const defaultTodos = [
  {id:1, text: 'Seguir Aprendiendo React', completed:true, priority:'alta'},
  {id:2,text: 'Aprender JSX', completed:false, priority:'media'},
  {id:3,text: 'Aprender MongoDB', completed:true, priority:'baja'},
]


// Este es el componente PADRE que contendrá a todos los demas
function App() {

  // creo los estados.
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  // cuento el total de tareas.
  const totalTodos = todos.length;

  // cuento las tareas completadas.
  const completedTodos = todos.filter(todo => todo.completed ).length;



  // filtro las tareas segun lo que vaya escribiendo el usuario.
  const todosFiltered = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));

  // Marcar una tarea como completa.
  // Al ejecutar esta función se prodicirá un Re Render
  const toggleCompleteTodo = (id) => {

    // Obtengo el id de la tarea a manipular
    const todoIndex = todos.findIndex(todo => todo.id == id);

    // me hago una copia del array de todos usando el spread operator
    const newTodos = [...todos]

    // finalmente cámbio el estado del id seleccionado, de false a true
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;

    // esta funcion es la  del estado todos, que se encarga de cambiar los todos.
    // entonces a esta funcion le paso el nuevo array modificado, 
    // para que re renderize, las todos, y en cualquier otro elemento que esté usando este estado también lo renderizará.
    //
    setTodos(newTodos);

  }

  const deleteTodo = (id) => {
    // Obtengo el id de la tarea a manipular
    const todoIndex = todos.findIndex(todo => todo.id == id);

    // me hago una copia del array de todos usando el spread operator
    const newTodos = [...todos];

    // con el metodo splice corto el todo que tenga el todoIndex asi lo remuevo
    newTodos.splice(todoIndex,1);

    // finalmente seteo el nuevo array de todos.
    setTodos(newTodos);
  }


  // version mejorada del eliminar
  function deleteTodov2(id){
    
    // filtro dejando las tareas que el id sea distinto del que se le hizo click.
    // es otra forma de borrar
    const newTodos = todos.filter(todo=>todo.id !== id)
    setTodos(newTodos)
  }


  return (
    <>


      <img src={logo} className="App-logo center" alt="logo" />

  
      <p className='icon-html'>&#128203; App de Tareas &#9997; </p>
      <p className='text-dc' title="Proximamente..." >𝓓𝓒 Software Factory</p>
      
      <TodoCounter
        total = {totalTodos}
        completed = {completedTodos}
      />
      
      <TodoSearch
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
      />



      {/* <CreateTodoButton/> */}
      
      <TodoList>

        {/* esto equivale a un foreach, necesita obligatoriamente un índice unico que se debe llamar `key`. */}

        {todosFiltered.map(todo => (
          <TodoItem 
            key={todo.id} 
            id={todo.id} 
            text={todo.text} 
            priority={todo.priority}
            completed={todo.completed}

            // le mando la funion que actualiza las tareas
            // le mando como parámetro el id de esa tarea
            onComplete={()=>toggleCompleteTodo(todo.id)}
            onDelete={()=>deleteTodov2(todo.id)}
          />
        ))}  
      </TodoList>
      
    </>
  );
}

// ya no se usa el export default, se debe indicar entre llaves, para forzar a importar el componente con ese mismo nombre
export  { App };
