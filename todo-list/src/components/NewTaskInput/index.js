import React, { useEffect, useState } from 'react';
import './index.css';
import logo from './assets/logo.png';


const NewTaskInput = ({ onSubmit }) => {

  const [newItem, setNewItem] = useState('');


  function setNewTask({ target }) {
    setNewItem(target.value);
  }

  function submit(e) {
    e.preventDefault();
    onSubmit(newItem);
  }

  return (
    
      <div className="col-auto">
        <form onSubmit={submit}>
          <input type="text" placeholder="Digite" onChange={setNewTask} />
          <button type="submit" class="btn btn-light">
            <img className="header_logo" src={logo} alt="" />
          </button>
        </form>
      </div>
    

  )
};

export default NewTaskInput;




