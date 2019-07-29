import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
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

    it('validates form', () => {
      const nameInput = container.querySelector('input[name=name]');
      const ageInput = container.querySelector('input[name=age]');
      const submitButton = container.querySelector('button[type=submit]');

      expect(handleSubmit).toHaveBeenCalledTimes(0);

      fireEvent.change(nameInput as HTMLInputElement, {
        target: { value: 'Erhan Gundogan' }
      });
      fireEvent.change(ageInput as HTMLInputElement, {
        target: { value: '18' }
      });
      fireEvent.click(submitButton as HTMLButtonElement);

      expect(container.firstChild).toMatchSnapshot();
      expect(validate).toHaveBeenCalledTimes(1);
      expect(validate).toHaveBeenCalledWith({
        name: 'Erhan Gundogan',
        age: '18',
        country: null,
      });
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
