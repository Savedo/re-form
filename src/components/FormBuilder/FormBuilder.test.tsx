import React from 'react';
import { render } from 'react-testing-library';
import FormBuilder from './FormBuilder';
import FormBuilderContext from '../../FormBuilderContext';
import * as yup from 'yup';

describe('FormBuilder component', () => {
  const setup = () => {
    const fields = [
      'name',
      'age'
    ];
    const fieldOptions = {
      name: {
        defaultValue: 'Erhan Gündoğan',
        label: 'Name:',
        validation: yup.string().required()
      },
      age: {
        element: 'input',
        type: 'number',
        defaultValue: 44,
        label: 'Your Age:',
        validation: yup.number().required().positive().integer().max(45)
      }
    };
    const formBuilderContext = new FormBuilderContext({ fields, fieldOptions });

    return render(
      <div>
        <FormBuilder context={ formBuilderContext } />
      </div>
    );
  };

  describe('render', () => {
    it('matches last snapshot', () => {
      const { container } = setup();
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
