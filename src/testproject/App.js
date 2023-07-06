import React, { useState } from 'react';
import './App.css';

  function App() {
      const [person, setPerson] = useState({firstname: '', age: ''});

      const inputChanged = (event) => {
        setPerson((prevState) =>{
        return {...prevState, [event.target.name]: event.target.value};
      });
};
      const showAlert = (event) => {
         event.preventDefault();
        if (person.age >= 18)
         {
         alert ('Hello ' + person.firstname)}
         else {
          alert('You are too young');
         }
         //setPerson({name: '', age: ''});
        };

      return (
        <div className="App">
          Name: {person.firstname} <br />
          <input placeholder="First name" name="firstname" value={person.firstname} onChange={inputChanged} />
          <input placeholder="age" name="age" value={person.age} onChange={inputChanged} />
          <button onClick={showAlert}>checkAge</button>
        </div>
      );
    }
export default App;