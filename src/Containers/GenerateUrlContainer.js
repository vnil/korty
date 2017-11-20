import React from 'react'
import { connect } from 'react-redux'
import { updateValue, setValid } from '../Redux/form' //TODO maybe name urlForm?
import { generateUrl } from '../Redux/redirectObjects'
import GenerateUrl from '../Components/GenerateUrl'

const GenerateUrlContainer = ({value, updateValue, generateUrl, setValid, valid}) => (
  <GenerateUrl
    value={value}
    updateValue={updateValue}
    generateUrl={generateUrl}
    setValid={setValid}
    valid={valid}
  />
)

export default connect(state => ({
  value: state.form.value,
  valid: state.form.valid,
}), dispatch => ({
  updateValue: (value) => dispatch(updateValue(value)),
  generateUrl: (targetUrl) => dispatch(generateUrl(targetUrl)),
  setValid: (isValid) => dispatch(setValid(isValid)),
}))(GenerateUrlContainer)
