import * as React from 'react'
import * as ReduxForm from 'redux-form'

declare module 'redux-form' {
  interface CustomFieldProps {
    label: string
  }

  // type foo = ReduxForm.FieldsProps<{}>
  // interface BaseFieldsProps<P = {}> extends CustomFieldProps {}
  // interface BaseFieldProps<P = {}> extends Partial<CustomFieldProps> {}
  // interface GenericField<P> extends React.Component<CustomFieldProps & P> {}

  // interface Field<P = {}> extends React.Component<CustomFieldProps & P> {}
  // class Field<P = {}> extends React.Component<CustomFieldProps & P> {}

  export interface WrappedFieldProps /* extends CustomFieldProps  */ {
    label: string
  }

  // export = ReduxForm
}
