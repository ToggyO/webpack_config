import React from 'react';
import { Formik } from 'formik';

const Form = () => {
    return (
      <div>
        <h1 className="text-center py-2 px-2">Anywhere in your app!</h1>
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => {
            debugger;
            let errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            if (!values.password) {
              errors.password = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.password = 'Invalid email password';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 2000);
          }}
        >
          {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form
                className="flex flex-col mx-auto w-1/6"
                onSubmit={handleSubmit}
              >
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className="rounded bg-gray-300 hover:bg-white py-2 px-2 my-2 mx-2"
                  placeholder="Enter email..."
                />
                <div className="h-6">{errors.email && touched.email && errors.email}</div>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className="rounded bg-gray-300 hover:bg-white py-2 px-2 my-2 mx-2"
                  placeholder="Enter password..."
                />
                <div className="h-6">{errors.password && touched.password && errors.password}</div>
                <button
                  className="btn bg-blue-500 active:bg-blue-700 rounded py-2 px-4 my-2 mx-2 text-white"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </form>
          )}
        </Formik>
      </div>
    );
};

export default {
  component: Form,
};
