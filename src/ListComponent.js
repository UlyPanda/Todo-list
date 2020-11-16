import React from 'react';

const ListComponent = (props) => {
    return(
      <div>
        <h1> To-Do List </h1>
        <ul>
        {props.items.map((item) => {
        return (
        <div key={item.id}>
          <li>{item.name}</li>
          <button onClick={ () => props.onDelete(item.id)}>Done</button>
        </div>
        )
    })}
        </ul>
       </div>
    )
}

export default ListComponent;