import React, { Component } from 'react';
import { Formik, Field, ErrorMessage, FieldArray } from 'formik'
import * as Yup from 'yup'


class App extends Component {


  onSubmit = (values) => {
    console.log(values)
  }

  form = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <Field name="name" placeholder="name" />
        <ErrorMessage name="name" />
        <br />
        <Field name="email" placeholder="email" type="email" />
        <br />
        <Field name="type" component="select">
          <option value="1">One</option>
          <option value="2" >Two</option>
        </Field>
        <br />
        <br />
        <label>Active</label>
        <Field name="active" type="checkbox" />
        <br />
        <br />
        <label>Category</label><br />
        <label>one</label>
        <Field name="category" type="radio" value="1" /><br />
        <label>two</label>
        <Field name="category" type="radio" value="2" /><br />
        <br />

        <Field name="social.facebook" placeholder="facebook" />
        <ErrorMessage name="social.facebook" />
        <br />

        <Field name="social.twitter" placeholder="twitter" />
        <ErrorMessage name="social.twitter" />
        <br />

        <FieldArray name="friends" placeholder="friends" render={arrayHelper => (
          <div>
            {
              props.values.friends.map((item, index) => (
                <div key={index}>
                  <Field name={`friends.${index}`} />
                </div>
              ))
            }
          </div>
        )} />

        <ErrorMessage name="friends" />
        <br />
        <button type="submit">click</button>
      </form>
    )
  }

  schema = () => {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required(),
      active: Yup.string().required(),
      category: Yup.string().required(),
      social: Yup.object().shape({
        facebook: Yup.string().required("facebook field required"),
        twitter: Yup.string().required(),
      })
    })
    return schema
  }

  render() {
    return (
      <div className="App">
        <Formik
          initialValues={{
            name: "",
            email: "",
            type: "",
            active: false,
            category: "",
            social: {
              facebook: "",
              twitter: ""
            },
            friends: [
              "hamada",
              "mahmoud"
            ]
          }}
          onSubmit={this.onSubmit}
          validationSchema={this.schema()}
          render={this.form}
        />
      </div>
    );
  }
}

export default App;
