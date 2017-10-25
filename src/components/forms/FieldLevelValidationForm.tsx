import { h } from 'preact'
import { Field, reduxForm, WrappedFieldProps, BaseFieldsProps, InjectedFormProps } from 'redux-form'

import * as validators from './validators'

type RenderFieldProps = WrappedFieldProps
const renderField = ({ input, label, type, meta: { touched, error, warning } }: RenderFieldProps) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

type Props = InjectedFormProps<{}>
const FieldLevelValidationForm = (props: Props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="username"
        type="text"
        component={renderField}
        label="Username"
        validate={[validators.required, validators.maxLength15, validators.minLength2]}
        warn={validators.alphaNumeric}
      />
      <Field
        name="email"
        type="email"
        component={renderField}
        label="Email"
        validate={validators.email}
        warn={validators.aol}
      />
      <Field
        name="age"
        type="number"
        component={renderField}
        label="Age"
        validate={[validators.required, validators.number, validators.minValue18]}
        warn={validators.tooOld}
      />
      <Field
        name="phone"
        type="number"
        component={renderField}
        label="Phone number"
        validate={[validators.required, validators.phoneNumber]}
      />
      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

const enhance = reduxForm({
  form: 'fieldLevelValidation', // a unique identifier for this form
})

export default enhance(FieldLevelValidationForm)
