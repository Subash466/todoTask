import React,{ useState,useEffect} from 'react'
import Header from '../Header/Header'
import { v4 as uuidv4 } from 'uuid';
import { BsCheck2Circle } from 'react-icons/bs';
import './TodoList.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTask from '../AddTask/AddTask';
const TodoList = () => {
  const [todoList,setTodoList]=useState([])


  //sample api format
const data=[ {
  _id:uuidv4(),
  todoTask:"Make Breakfast",
  isCompleted:true
},{
  _id:uuidv4(),
  todoTask:"Go store",
  isCompleted:true
},{
  _id:uuidv4(),
  todoTask:"Make Launch",
  isCompleted:false
},{
  _id:uuidv4(),
  todoTask:"Go gym",
  isCompleted:false
}]

  //To check completed task
const checkCompleted=(taskId)=>{
  const newList=[...todoList]
 function check(item){
   if(item._id === taskId){
     item.isCompleted=!item.isCompleted
    }
 }
 newList.filter(check)
  setTodoList(newList)
 }
//To delete task
 const deleteTask=(index)=>{
   console.log('clicked')
  const newTask=[...todoList]
    
      newTask.splice(index,1)
      setTodoList(newTask)
   
}

//addTask
const addTask=(newTask)=>{
  setTodoList([...todoList,newTask])
}

useEffect(() => {
  setTodoList(data)
},[])

  return (
      <div className="todo-container">
        <div> 
         <Header />
         {todoList.map((task,index)=>{  //map list value
          return(
          <div className="show-list" key={task._id}>
            <span  className={task.isCompleted ?"checked completed" :"checked"} onClick={()=>deleteTask(index)} >
             {task.todoTask}
            </span>
            <div  className="check-complete" onClick={()=>checkCompleted(task._id)}>
            <div className={task.isCompleted?"completed-true":"hide"}>
             <span ><BsCheck2Circle /></span>
            </div>
            </div>
          </div>
         )})}
         </div>
         <AddTask addTask={addTask}/>
        </div>
  )
}

export default TodoList
