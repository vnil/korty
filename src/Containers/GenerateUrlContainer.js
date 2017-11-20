import React from 'react'
import { connect } from 'react-redux'
import { updateValue, setValid } from '../Redux/ducks/form'
import { generateUrl, resetNewlyGenerated } from '../Redux/ducks/redirectObjects'
import GenerateUrl from '../Components/GenerateUrl'

const GenerateUrlContainer = ({value, updateValue, generateUrl, setValid, valid, newlyGenerated, resetNewlyGenerated}) => (
  <GenerateUrl
    value={value}
    updateValue={updateValue}
    generateUrl={generateUrl}
    setValid={setValid}
    valid={valid}
    newlyGenerated={newlyGenerated}
    resetNewlyGenerated={resetNewlyGenerated}
  />
)

export default connect(state => ({
  value: state.form.value,
  valid: state.form.valid,
  newlyGenerated: state.redirectObjects.newlyGenerated,
}), dispatch => ({
  updateValue: (value) => dispatch(updateValue(value)),
  generateUrl: (targetUrl) => dispatch(generateUrl(targetUrl)),
  setValid: (isValid) => dispatch(setValid(isValid)),
  resetNewlyGenerated: () => dispatch(resetNewlyGenerated()),
}))(GenerateUrlContainer)
