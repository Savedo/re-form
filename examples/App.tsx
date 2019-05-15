import React from 'react';
import SimpleForm from './SimpleForm/SimpleForm';
import BulmaForm from './BulmaForm/BulmaForm';

const App = () => {
  return (
    <>
      <div>
        <SimpleForm />
      </div>
      <div style={{marginTop:"100px"}}>
        <BulmaForm />
      </div>
    </>
  );
};

export default App;
