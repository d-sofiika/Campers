import css from "./FormRequest.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Calendar from "../../DetailsCamper/Calendar/Calendar";

export default function FormRequest() {
  const FeedbackSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Must be a valid email!").required("Required"),
    date: Yup.date().nullable().required("Required"),
    comment: Yup.string()
      .min(3, "Too short")
      .max(256, "Too long")
      .notRequired(),
  });

  const initialValues = {
    username: "",
    email: "",
    date: null,
    comment: "",
  };

  const handleSubmit = (values, { resetForm, setFieldValue }) => {
    console.log(values);
    resetForm({
      values: { ...initialValues, date: null },
    });
    setFieldValue("date", null);
  };

  return (
    <div className={css.formContainer}>
      <h2 className={css.title}>Book your camper now</h2>
      <p className={css.descr}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={FeedbackSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values }) => (
          <Form className={css.form}>
            <Field
              className={css.input}
              type="text"
              placeholder="Name*"
              name="username"
            />
            <ErrorMessage
              name="username"
              className={css.error}
              component="span"
            />

            <Field
              className={css.input}
              type="email"
              placeholder="Email*"
              name="email"
            />
            <ErrorMessage name="email" className={css.error} component="span" />
            <Calendar
              selectedDate={values.date}
              onDateChange={(date) => setFieldValue("date", date)}
            />

            <ErrorMessage name="date" className={css.error} component="span" />

            <Field
              className={`${css.input} ${css.inputComment}`}
              as="textarea"
              rows="5"
              placeholder="Comment"
              name="comment"
            />
            <ErrorMessage
              name="comment"
              className={css.error}
              component="span"
            />

            <button className={css.btn} type="submit">
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
