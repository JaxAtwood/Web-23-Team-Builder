import React, { useState } from 'react';
import data from "./Components/Data";
import BandSubForm from "./Components/Form";
import BandList from "./Components/List";
import './App.css';

function App() {
  const [param, setParam] = useState(data);
  const addNewSubmission = subForm => {
    setParam([...param, subForm]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Favorite Band Submission Form</h1>
        <h3>Add your favorite band to the list!</h3>
        <BandSubForm addNewSubmission= {addNewSubmission} />
        <div className="sample">
        <h4>Sample Submission Entry: </h4> 
        <BandList bandList={param} />
        </div>
      </header>
    </div>
  );
}

export default App;
