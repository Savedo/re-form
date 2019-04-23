import * as yup from 'yup';
import FormBuilderContext from './FormBuilderContext';

describe('FormBuilderContext class', () => {
  const setup = () => {
    const fields = [
      'name',
      'age',
      'email',
      'company'
    ];
    const fieldOptions = {
      name: {
        defaultValue: 'Erhan Gündoğan',
        label: 'Name:',
        type: 'text',
        validation: yup.string().required()
      },
      age: {
        element: 'input',
        type: 'number',
        defaultValue: 44,
        label: 'Your Age:',
        validation: yup.number().required().positive().integer().max(45)
      },
      email: {
        defaultValue: 'erhan.gundogan@savedo.de',
        label: 'E-mail:',
        validation: yup.string().required().email('__EMAIL_VALIDATION__')
      },
      company: {
        element: 'select',
        defaultValue: 'deposit_solutions',
        keyValues: {
          savedo: 'Savedo GmbH',
          deposit_solutions: 'Deposit Solutions GmbH'
        }
      }
    };
    const handleSubmit = jest.fn();
    return new FormBuilderContext({ fields, fieldOptions, handleSubmit });
  };

  describe('constructor', () => {
    it('returns instance of FormBuilderContext', () => {
      const formBuilderContext = setup();
      expect(formBuilderContext).toBeInstanceOf(FormBuilderContext);
    });

    it('sets up default properties', () => {
      const handleSubmit = jest.fn();
      const formBuilderContext = new FormBuilderContext({ handleSubmit });

      expect(Object.keys(formBuilderContext)).toEqual([
        'getDefaultValues',
        'getValidationSchema',
        'extractErrors',
        'validate',
        'fields',
        'fieldOptions',
        'validation',
        'handleSubmit',
        'formData',
        'formErrors'
      ]);

      expect(formBuilderContext.fields).toEqual([]);
      expect(formBuilderContext.fieldOptions).toEqual({});
      expect(formBuilderContext.formData).toEqual(null);
      expect(formBuilderContext.formErrors).toEqual(null);
      expect(formBuilderContext.validation).toEqual({
        isActive: true,
        yupSchema: null,
        yupOptions: { abortEarly: false }
      });
    });
  });

  describe('getDefaultValues', () => {
    it('gets default values properly', () => {
      const formBuilderContext = new FormBuilderContext({
        fields: ['name', 'age', 'company'],
        fieldOptions: {
          name: {
            defaultValue: 'Erhan Gündoğan'
          },
          company: {
            defaultValue: 'Savedo'
          }
        },
        handleSubmit: jest.fn()
      });

      expect(formBuilderContext.getDefaultValues()).toEqual({
        name: 'Erhan Gündoğan',
        company: 'Savedo'
      });
    });
  });

  describe('getValidationSchema', () => {
    it('returns yup schema', () => {
      const formBuilderContext = setup();
      const schema = formBuilderContext.getValidationSchema();
      expect(Object.keys(schema)).toEqual(
        expect.arrayContaining(['tests', 'transforms', 'fields']));
    });
  });

  describe('validate', () => {
    it('validates with isValid method', async () => {
      const formBuilderContext = setup();
      const schema = formBuilderContext.getValidationSchema();
      const defaultValues = formBuilderContext.getDefaultValues();
      expect(await schema.isValid(defaultValues)).toEqual(true);
    });

    it('validates with validate method', async () => {
      const formBuilderContext = setup();
      const schema = formBuilderContext.getValidationSchema();
      const defaultValues: any = formBuilderContext.getDefaultValues();
      defaultValues.email = 'this is no email';
      try {
        await schema.validate(defaultValues);
      } catch(error) {
        expect(error).toBeInstanceOf(yup.ValidationError);
        expect(error.message).toBe('__EMAIL_VALIDATION__');
      }
    });
  });
});
