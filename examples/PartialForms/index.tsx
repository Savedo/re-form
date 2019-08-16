import React from 'react';
import './styles.css';

const PartialForms = () => {
  const inputClass = `shadow mb-2 appearance-none border rounded w-full py-2 px-3 \
    text-gray-700 leading-tight focus:outline-none focus:shadow-outline`;

  const onSubmit = (event: any) =>{
    console.log(event);
  };

  return (
    <div className="form-container">
      <div className="pure-form pure-form-stacked">
        <form onSubmit={ onSubmit } noValidate={ true }>
          <input type="text" name="name" className={ inputClass } autoComplete="off"  />
        </form>
      </div>
    </div>
  );
};

export default PartialForms;
