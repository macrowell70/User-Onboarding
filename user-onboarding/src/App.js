import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import axios from 'axios';
import * as yup from 'yup';
import schema from './components/formSchema';

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

  const postNewUser = newUser => {
    axios.post("https://reqres.in/api/users", newUser)
      .then(res => {
        setUsers([ res.data, ...users ])
        setFormValues(initialFormValues)
      }).catch(err => console.error(err))
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormError({ ...formError, [name]: "" }))
      .catch((err) => setFormError({ ...formError, [name]: err.errors[0] }))
  };

  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({ ...formValues, [name]: value })
  }

  const formSubmit = () => {
    const newUser = {
      firstName: formValues.firstName.trim(),
      lastName: formValues.lastName.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    }
    postNewUser(newUser);
  }


  return (
    <div className="App">
      <header className="App-header">
        <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formError}
        />

        {users.map(user => {
          <div key={user.id}>
            <p>{user.firstName}</p>
            <p>{user.lasName}</p>
          </div>
        })}
      </header>
    </div>
  );
}

export default App;
