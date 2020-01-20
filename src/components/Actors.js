import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
    <h1>Actors Page</h1>
      {actors.map(actor =>
        <div>
          <h1>{actor.name}</h1>
          <ul>{actor.movies.map(data =>
            <li>{data}</li>
          )}</ul>
        </div>)}
    </div>
  );
};

export default Actors;