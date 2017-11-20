import React from 'react'
import { connect } from 'react-redux'
import Input from '../Components/Input'
import { updateValue } from '../Redux/form'

const GenerateUrlContainer = ({value, onChange}) => (
  <Input
    type="text"
    value={value}
    onChange={({target: {value}}) => onChange(value)}
    placeholder="http://www.your-long-url.com/"
  />
)

export default connect(state => ({
  value: state.form.value,
}), dispatch => ({
  onChange: (value) => dispatch(updateValue(value)),
}))(GenerateUrlContainer)
