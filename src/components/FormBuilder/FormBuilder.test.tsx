import React from 'react';
import { render, fireEvent, wait, cleanup } from 'react-testing-library';
import FormBuilder from './FormBuilder';
import FormBuilderContext from '../../FormBuilderContext';
import * as yup from 'yup';

describe('FormBuilder component', () => {
  afterEach(cleanup);

  const createFormBuilderContext = (): FormBuilderContext => {
    const fields = [
      'name',
      'age'
    ];
    const fieldOptions = {
      name: {
        label: 'Name:',
        validation: yup.string().required()
      },
      age: {
        type: 'number',
        label: 'Your Age:',
        validation: yup.number().required().positive().integer().min(18)
      }
    };
    const handleSubmit = jest.fn();
    return new FormBuilderContext({ fields, fieldOptions, handleSubmit });
  };

  const setup = (formBuilderContext: FormBuilderContext) => {
    return render(
      <div>
        <FormBuilder context={ formBuilderContext } />
      </div>
    );
  };

  let context = createFormBuilderContext();
  let container: HTMLElement = setup(context).container;

  beforeEach(() => {
    context = createFormBuilderContext();
    container = setup(context).container;
  });

  describe('renders', () => {
    it('matches last snapshot', () => {
      expect(container.firstChild).toMatchSnapshot();
    });

    it('validated form', async () => {
      const nameInput = container.querySelector('input[name=name]');
      const ageInput = container.querySelector('input[name=age]');

      expect(context.handleSubmit).toHaveBeenCalledTimes(0);

      fireEvent.change(nameInput as HTMLInputElement, {
        target: { value: 'Erhan Gundogan' }
      });
      fireEvent.change(ageInput as HTMLInputElement, {
        target: { value: '18' }
      });

      await wait(() => {
        const formData = {
          name: 'Erhan Gundogan',
          age: '18'
        };
        expect(container.firstChild).toMatchSnapshot();
        expect(context.handleSubmit).toHaveBeenCalledTimes(1);
        expect(context.handleSubmit).toHaveBeenCalledWith(formData);
        expect(context.formData).toEqual(formData);
      });
    });

    describe('validation error', () => {
      it('on required', async () => {
        const nameInput = container.querySelector('input[name=name]');

        expect(context.handleSubmit).toHaveBeenCalledTimes(0);

        fireEvent.change(nameInput as HTMLInputElement, {
          target: { value: 'Erhan Gundogan' }
        });

        await wait(() => {
          expect(container.firstChild).toMatchSnapshot();
          expect(context.handleSubmit).toHaveBeenCalledTimes(0);
        });
      });

      it('on min', async () => {
        const nameInput = container.querySelector('input[name=name]');
        const ageInput = container.querySelector('input[name=age]');

        expect(context.handleSubmit).toHaveBeenCalledTimes(0);

        fireEvent.change(nameInput as HTMLInputElement, {
          target: { value: 'Erhan Gundogan' }
        });
        fireEvent.change(ageInput as HTMLInputElement, {
          target: { value: '17' }
        });

        await wait(() => {
          expect(container.firstChild).toMatchSnapshot();
          expect(context.handleSubmit).toHaveBeenCalledTimes(0);
        });
      });
    });
  });
});
