import React,{ useState } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import './AddTask.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Modal } from 'react-bootstrap';

const AddTask = (props) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [task,Settask] = useState("")

  const addTask=()=>{
    if(task.trim() === ''){
      return 
  } else {
     props.addTask({
       todoTask:task,
       isCompleted:false
     })
  }
  }

  return (
    <div className="addTodo" >
      <div  onClick={handleShow}>
      <BsPlusLg />
      </div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add todoTask</Modal.Title>
        </Modal.Header>
        <Modal.Body><input type='text' placeholder = 'Add Task . . .' value = {task} onChange = {event => Settask(event.target.value)} /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancle
          </Button>
          <div  onClick={handleClose} >
          <Button variant="primary" onClick={addTask}>
            Add
          </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddTask
