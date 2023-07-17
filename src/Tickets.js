import React from 'react'
import {useParams} from 'react-router-dom';

function Tickets() {
  const {id} = useParams();
  console.log(id);
  return (
    <div>
      <h1> Tickets {id}</h1>
    </div>
  )
}

export default Tickets
