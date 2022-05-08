import React from 'react';
import './index.css';
import logo from './assets/ic-delete.png';

const ListItem = ({ onChange, onDelete, value }) => {
  return (

      <form>
        <div className="submit-line">
          <input
            className="Item-field"
            value={value}
            onChange={onChange}
          />
          <button onClick={onDelete} class="submit-lente" type="submit">
            <img className="header_logo" src={logo} alt="" />
          </button>
        </div>
      </form>
   
  );
};

export default ListItem;

