import PropTypes from 'prop-types';
import { useId } from 'react';
import { nanoid } from 'nanoid/non-secure';
import { Formik, Field, Form, ErrorMessage } from 'formik';

import * as yup from 'yup';
import css from './contactForm.module.css';

const ContactForm = ({ onAddContact }) => {
  const ContactFormSchema = yup.object().shape({
    id: yup.string(),
    name: yup
      .string()
      .min(3, 'At least 3 characters')
      .max(50, 'You`ve typed more than 50 characters')
      .required('This input is required'),
    number: yup
      .string()
      .matches(
        /^\d{1,10}-\d{1,10}-\d{1,10}$/,
        'Your phone number should have up to 10 digits between each hyphen, and it should not contain any other characters',
      )
      .required('This input is required'),
  });

  const values = {
    id: '',
    name: '',
    number: '',
  };

  const handleSubmit = (values, actions) => {
    const uniqId = nanoid();
    const newValues = { ...values, id: uniqId };
    onAddContact(newValues);
    actions.resetForm();

    actions.resetForm();
  };

  const nameId = useId();
  const phoneId = useId();
  return (
    <Formik
      validationSchema={ContactFormSchema}
      initialValues={values}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.wrapper}>
          <label className={css.label} htmlFor={nameId}>
            Name
          </label>
          <Field className={css.input} type="text" name="name" id={nameId} />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.wrapper}>
          {' '}
          <label className={css.label} htmlFor={phoneId}>
            Number
          </label>
          <Field className={css.input} type="text" name="number" id={phoneId} />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>

        <button className={css.btn} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = { onAddContact: PropTypes.func.isRequired };

export default ContactForm;
