import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import axios from 'axios';
import * as yup from 'yup';

const initialFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  termsAndConditions: false
}
const initialFormError = {
  firstName: "",
  lastNaem: "",
  email: "",
  password: ""
}
const initialUsers = [];
const initialDisabled = true;

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formError, setFormError] = useState(initialFormError);
  const [disabled, setDisabled] = useState(initialDisabled);


  return (
    <div className="App">
      <header className="App-header">
        <Form />
      </header>
    </div>
  );
}

export default App;
