import React from 'react';

import './App.css';
import { Formik, Form} from "formik";
import * as Yup from "yup";
import FormField from './component/FormField/FormField';

interface FormValues {
  password: String
  name: String

}

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name must have at least 3 characters')
    .required('Name is required'),
    password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Please enter your passcode')



});
const initialValues: FormValues = {
  name: "",
  password: ""

}

function App() {
  const forSubmit = (values: FormValues): void => {
    (JSON.stringify(values));


  }
  return (
    <div className="App">
      <h1>Register</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={forSubmit}
        validationSchema={RegisterSchema}
      >

        {
          ({ dirty, isValid }) => {
            return (
              <Form>
                <FormField label="Name" name="name" password="password" passlabel="Password"  />
                <button disabled={!dirty || !isValid} type="submit" >Sign UP</button>
              </Form>
              
            )

          }
        }

      </Formik>
    </div>

  );
}

export default App;
