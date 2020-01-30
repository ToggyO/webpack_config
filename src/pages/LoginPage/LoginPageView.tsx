import React, { useEffect, useRef } from 'react';
import {
	Field,
	Form,
	Formik,
	FieldProps, FormikProps,
} from 'formik';

import { ERROR_CODES } from '@config';
import { responseFormikError } from '@utils';
import s from './style.module.sass';
import { FormProps, FormValues } from './intefaces';


const LoginPageView: React.FC<FormProps> = ({ isAuth, login, errorsFromBackend }) => {
	const formikRef: any = useRef(null);
	const initialValues: FormValues = { email: '', password: '' };
	useEffect(() => {
		formikRef.current.setErrors(responseFormikError(errorsFromBackend, ERROR_CODES));
	}, [errorsFromBackend]);

	return (
  <div className={`${s.login_form} ${isAuth ? s.authorized : ''}`}>
    <Formik
      innerRef={formikRef}
      initialValues={initialValues}
      onSubmit={(values: FormValues): void => login(values)}
    >
      {({ errors, touched }: FormikProps<FormValues>) => (
        <Form className={s.form_block}>
          <div className={s.login_header}>
            <h1>React + Redux + Typescript</h1>
          </div>
          <Field
            name="email"
          >
            {({ field }: FieldProps) => (
              <div className={`${s.login_input_container} input-field`}>
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className={s.login_input}
                  autoComplete="off"
                  {...field}
                />
              </div>
						)}
          </Field>
          {errors.email && touched.email && <div className="formik-error error-label">{errors.email}</div>}
          <Field
            name="password"
          >
            {({ field }: FieldProps) => (
              <div className={`${s.login_input_container} input-field`}>
                <input
                  type="password"
                  placeholder="Enter your password..."
                  className={s.login_input}
                  autoComplete="off"
                  {...field}
                />
              </div>
						)}
          </Field>
          {errors.password && touched.password && <div className="formik-error error-label">{errors.password}</div>}
          <button
            className={`${s.submit} btn waves-effect light-blue`}
            type="submit"
            name="action"
          >
						Login
          </button>
        </Form>
			)}
    </Formik>
  </div>
	);
};

export default LoginPageView;

// import React, { useEffect, useRef } from 'react';
// import {
// 	Field,
// 	Form,
// 	Formik,
// 	FieldProps,
// } from 'formik';
//
// import { ERROR_CODES } from '@config';
// import { responseFormikError } from '@utils';
// import s from './style.module.sass';
// import { FormProps } from './intefaces';
//
//
// const LoginPageView: React.FC<FormProps> = ({ login, errorsFromBackend }) => {
// 	const formikRef: any = useRef(null);
//
// 	useEffect(() => {
// 		formikRef.current.setErrors(responseFormikError(errorsFromBackend, ERROR_CODES));
// 	}, [errorsFromBackend]);
//
// 	return (
// 		<div className={s.login_form}>
// 			<Formik
// 				innerRef={formikRef}
// 				initialValues={{ email: '', password: '' }}
// 				onSubmit={(values): void => login(values)}
// 			>
// 				{({ errors, touched }) => (
// 					<Form className={s.form_block}>
// 						<div className={s.login_header}>
// 							<h1>React + Redux + Typescript</h1>
// 						</div>
// 						<Field
// 							name="email"
// 						>
// 							{({ field }: FieldProps) => (
// 								<div className={`${s.login_input_container} input-field`}>
// 									<input
// 										type="email"
// 										placeholder="Enter your email..."
// 										className={s.login_input}
// 										autoComplete="off"
// 										{...field}
// 									/>
// 								</div>
// 							)}
// 						</Field>
// 						{errors.email && touched.email && <div className="formik-error error-label">{errors.email}</div>}
// 						<Field
// 							name="password"
// 						>
// 							{({ field }: FieldProps) => (
// 								<div className={`${s.login_input_container} input-field`}>
// 									<input
// 										type="password"
// 										placeholder="Enter your password..."
// 										className={s.login_input}
// 										autoComplete="off"
// 										{...field}
// 									/>
// 								</div>
// 							)}
// 						</Field>
// 						{errors.password && touched.password && <div className="formik-error error-label">{errors.password}</div>}
// 						<button
// 							className={`${s.submit} btn waves-effect light-blue`}
// 							type="submit"
// 							name="action"
// 						>
// 							Login
// 						</button>
// 					</Form>
// 				)}
// 			</Formik>
// 		</div>
// 	);
// };
//
// export default LoginPageView;