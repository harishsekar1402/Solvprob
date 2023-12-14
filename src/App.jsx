import React, { useState, useEffect } from "react";
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Registerform from "./Components/Registerform";
import Search from "./Components/Search";
import Workers from "./Components/Workers";
import './App.css'

const App = () => {
  const [persons, setpersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newnumber, setnewnumber] = useState('');
  const [newlocation, setnewlocation] = useState('');
  const [newdomain, setnewdomain] = useState('');
  const [checkdom, setcheckdom] = useState('');
  const [location, setlocation] = useState('');
  const [results, setresults] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/persons/')
      .then(res => setpersons(res.data));
  }, []);

  const addName = (event) => {
    event.preventDefault();
    const found = persons.some(array => array.name === newName);
    if (!found) {
      const newObject = {
        name: newName,
        number: newnumber,
        location: newlocation,
        domain: newdomain
      };
      axios
        .post('http://localhost:3001/persons/', newObject)
        .then(res => {
          setpersons(persons.concat(res.data));
          setNewName('');
          setnewlocation('');
          setnewnumber('');
          setnewdomain('');
        });
      console.log(newObject);
      setpersons(persons.concat(newObject));
      setNewName('');
    } else {
      alert(newName + " is already added to the phonebook");
    }
  };

  return (
    <div>
      <Router>
        <div>
          <nav className="navbar">
          
            <ul className="links">
            <li><Link className="textwhite-title" to="/">Solvprob</Link></li>
              <li><Link className="textwhite" to="/Registration">Register As a Professional</Link></li>
              <li><Link className="textwhite" to="/workers">People we have</Link></li>
            </ul>
          </nav>
          <Routes>
  <Route path="/" element={<Search
    persons={persons}
    location={location}
    checkdom={checkdom}
    setcheckdom={setcheckdom}
    setlocation={setlocation}
  />} />
  <Route path="/Registration" element={<Registerform
    addName={addName}
    setNewName={setNewName}
    setnewlocation={setnewlocation}
    setnewdomain={setnewdomain}
    setnewnumber={setnewnumber}
  />} />
  <Route path="/workers" element={<Workers persons={persons} />} />
</Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
