import React, {useCallback, useState} from 'react';
import './App.css';
import Delete from './components/Delete';
import Form from './components/Form';
import Lists from './components/Lists';

export default function App() {
  console.log('App rendered');
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false
    };
    setTodoData((prev) => [...prev, newTodo]);
    setValue('');
  };
  // useCallback 함수를 통해 함수로 인해 re-rendering되는 것을 방지할 수 있다.
  const handleClick = useCallback((id) => {
    let newTodoData = todoData.filter(data => data.id !== id);
    setTodoData(newTodoData);
  }, [todoData]);

  return (
    <div className='flex items-center justify-center w-screen h-screen bg-blue-100'>
      <div className='w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg'>
        <div className='flex justify-between mb-3'>
          <h1 className='text-4xl font-bold'>To Do List</h1>
          <Delete setTodoData={setTodoData}/>
        </div>
        <Lists todoData={todoData} setTodoData={setTodoData} handleClick={handleClick}/>
        <Form handleSubmit={handleSubmit} value={value} setValue={setValue}/>
      </div>
    </div>
  )
}