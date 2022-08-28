import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    surName: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const ContactFormFormik = () => {

  const initialValues = {
    name: '',
    surName: '',
    email: '',
    connected: false
  }

  return (
    <div>
      <h1>Formulario de contacto!</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={ContactSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
      {({ isSubmitting }) => (
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field type="text" name="name" placeholder="Your name" />
          <ErrorMessage name="name" component="div" />

          <label htmlFor="surName">Surname</label>
          <Field type="text" name="surName" placeholder="Your surname" />
          <ErrorMessage name="surName" component="div" />

          <label htmlFor="email">Email</label>
          <Field type="email" name="email" placeholder="Your email" />
          <ErrorMessage name="email" component="div" />

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}

      </Formik>
    </div>
  )
}

export default ContactFormFormik
