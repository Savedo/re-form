import React from 'react';
import { render, cleanup } from 'react-testing-library';
import FormBuilder from './FormBuilder';

describe('FormBuilder component', () => {
  afterEach(cleanup);

  const validate = jest.fn();
  const handleSubmit = jest.fn();

  const setup = (disabled?: boolean, placeholder?: string, defaultValue?:string ) => {
    const fields = [
      'name',
      'age',
      'country'
    ];
    const fieldOptions = {
      name: {
        label: 'Name:'
      },
      age: {
        type: 'number',
        label: 'Your Age:'
      },
      country: {
        label: 'Country:',
        type:'text',
        disabled: disabled,
        placeholder: placeholder,
        defaultValue: defaultValue
      }
    };
    const values = {
      name: 'Erhan',
      age: 44
    };

    return render(
      <div>
        <FormBuilder { ...{ fields, fieldOptions, values, validate, handleSubmit } } />
      </div>
    );
  };

  let container: HTMLElement = setup().container;

  beforeEach(() => {
    container = setup().container;
  });

  describe('renders', () => {
    it('matches last snapshot', () => {
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('renders optional props', () => {
    container = setup(true, 'placeholder text', 'default country').container;
    const country = container.querySelector('input[name=country]');

    it('displays input as disabled',() => {
      expect(country).toHaveProperty('disabled', true);
    });

    it('displays a placeholder', () => {
      expect(country).toHaveProperty('placeholder', 'placeholder text');
    });

    it('displays a default Value', () => {
      expect(country).toHaveProperty('value', 'default country');
    });
  });
});
