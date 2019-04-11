import React from 'react';
import { render } from 'react-testing-library';
import FormBuilder from './FormBuilder';

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
      },
      age: {
        element: 'input',
        type: 'number',
        defaultValue: 44,
        label: 'Your Age:',
      }
    };
    const onDataChange = jest.fn();

    return render(
      <div>
        <FormBuilder { ...{ fields, fieldOptions, onDataChange } } />
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
