import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import style from './ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
  // Валідація форми з використанням Yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Name must be at least 3 characters long')
      .max(50, 'Name cannot be longer than 50 characters')
      .required('Name is required'),
    number: Yup.string()
      .min(3, 'Number must be at least 3 characters long')
      .max(50, 'Number cannot be longer than 50 characters')
      .required('Number is required'),
  });

  // Початкові значення полів форми
  const initialValues = {
    name: '',
    number: '',
  };

  // Обробник відправки форми
  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(), // Генеруємо унікальний id для нового контакту
      name: values.name,
      number: values.number,
    };

    onSubmit(newContact); // Передаємо новий контакт до App через пропс onSubmit
    resetForm(); // Очищаємо форму після додавання контакту
  };

  return (
   
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={style.form}>
          <label htmlFor="name">Name</label>
          <Field
            id="name"
            name="name"
            type="text"
            className={style.input}
            placeholder="Enter contact name"
          />
          <ErrorMessage name="name" component="div" className={style.error} />

          <label htmlFor="number">Number</label>
          <Field
            id="number"
            name="number"
            type="text"
            className={style.input}
            placeholder="Enter contact number"
          />
          <ErrorMessage name="number" component="div" className={style.error} />

          <button type="submit" className={style.button} disabled={isSubmitting}>
            Add contact
          </button>
        </Form>
      )}
    </Formik>
   
  );
};

export default ContactForm;
