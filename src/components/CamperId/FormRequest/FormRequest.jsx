import css from "./FormRequest.module.css"
import { Field, Form, Formik } from 'formik';
export default function FormRequest() {
  const initialValues = {
  username: "Name*",
        email: "Email*"
}
  return (
    <div className={css.formContainer} >
      <h2 className={css.title} >Book your camper now</h2>
      <p className={css.descr} >Stay connected! We are always ready to help you.</p>
   <Formik initialValues={{initialValues}} onSubmit={() => {}}>
     <Form className={css.form}> 
				
			<Field className={css.input} type="text" name="username" />
          <Field className={css.input} type="email" name="email" />
          <Field className={css.input} type="date" name="date" />
          <Field className={css.input} type="text" name="comment" />
          <button className={css.btn} type="submit">Send</button>
        </Form>
    </Formik>
    </div>
  );
}
