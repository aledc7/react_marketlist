import logo from '../images/logo.svg';
import React from 'react';
import { TodoCounter } from './TodoCounter/TodoCounter.jsx';
import { TodoSearch } from './TodoSearch/TodoSearch.jsx';
import { TodoList } from './TodoList/TodoList.jsx';
import { TodoItem } from './TodoItem/TodoItem.jsx';
// import { CreateTodoButton } from './CreateTodoButton';
import './App.css';
import { useLocalStorage } from '../customHooks/useLocalStorage.jsx'


// Creo un array para usar como prueba, por ahora no consulto a nunguna base de datos
// const defaultTodos = [
//   {id:1, text: 'Seguir Aprendiendo React', completed:true, priority:'alta'},
//   {id:2,text: 'Aprender JSX', completed:false, priority:'media'},
//   {id:3,text: 'Sacar a Shiba', completed:true, priority:'baja'},
//   {id:4,text: 'Comprar Crypto', completed:true, priority:'baja'},
//   {id:5,text: 'Practicar Ingles', completed:true, priority:'baja'},
//   {id:6,text: 'Entrenar', completed:true, priority:'baja'},
//   {id:7,text: 'Ir al Rio', completed:true, priority:'baja'},
//   {id:8,text: 'Armar la tabla de paddle', completed:true, priority:'baja'},
//   {id:9,text: 'Descansar', completed:true, priority:'baja'},
//   {id:10,text: 'Meditar', completed:true, priority:'baja'},
// ]




// // creo un Custom HOOK Personalizado, que guarda en el local storage.   
// // Esta funcion se puede re utilizar a gusto.   
// function useLocalStorage(itemName, initalValue){

//   // traemos desde local storage lo que recibamos como parametro en esta funcion
//   const localStorageItem = localStorage.getItem(itemName);

//   let parseItem;

//   if (!localStorageItem) {
//     localStorage.setItem(itemName, JSON.stringify(initalValue));
//     parseItem = [];
//   } else{
//     parseItem = JSON.parse(localStorageItem);
//   }


//   const [item, setItem] = React.useState(parseItem);


//   const saveItem = (newItem) =>{
//     const stringifiedItem = JSON.stringify(newItem);
//     localStorage.setItem(itemName,stringifiedItem );
//     setItem(newItem);
//   }

//   return [
//     item, saveItem
//   ];


  
// }


function App() {

  const [todos, saveTodos] = useLocalStorage('TODOS_V1',[]);
  
  // creo un estado que se usará para las busquedas del usuario.
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
    saveTodos(newTodos);

  }

  const deleteTodo = (id) => {
    // Obtengo el id de la tarea a manipular
    const todoIndex = todos.findIndex(todo => todo.id == id);

    // me hago una copia del array de todos usando el spread operator
    const newTodos = [...todos];

    // con el metodo splice corto el todo que tenga el todoIndex asi lo remuevo
    newTodos.splice(todoIndex,1);

    // finalmente seteo el nuevo array de todos.
    saveTodos(newTodos);
  }


  // version mejorada del eliminar
  function deleteTodov2(id){
    
    // filtro dejando las tareas que el id sea distinto del que se le hizo click.
    // es otra forma de borrar
    const newTodos = todos.filter(todo=>todo.id !== id)
    saveTodos(newTodos)
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
