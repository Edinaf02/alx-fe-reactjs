import React from 'react';
import FormikForm from './components/formikForm';
import RegistrationForm from './components/RegistrationForm';

function App() {
  return (
    <div>
      <h1>React Form Handling</h1>
      <h2>Controlled Components Form:</h2>
      <RegistrationForm />
      
      <h2>Formik Form:</h2>
      <FormikForm />
    </div>
  );
}

export default App;
