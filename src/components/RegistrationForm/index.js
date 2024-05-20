// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    showErrorFirstName: false,
    showErrorLastName: false,
    formSubmitted: false,
  }

  submitForm = event => {
    const {firstName, lastName} = this.state
    event.preventDefault()

    if (firstName === '') {
      this.setState({showErrorFirstName: true})
    } else {
      this.setState({showErrorFirstName: false})
    }

    if (lastName === '') {
      this.setState({showErrorLastName: true})
    } else {
      this.setState({showErrorLastName: false})
    }

    if (firstName !== '' && lastName !== '') {
      this.setState({formSubmitted: true})
    }
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onBlurEvent = () => {
    const {firstName, lastName} = this.state

    if (firstName === '') {
      this.setState({showErrorFirstName: true})
    } else {
      this.setState({showErrorFirstName: false})
    }

    if (lastName === '') {
      this.setState({showErrorLastName: true})
    } else {
      this.setState({showErrorLastName: false})
    }
  }

  renderForm = () => {
    const {
      firstName,
      lastName,
      showErrorFirstName,
      showErrorLastName,
    } = this.state

    const ErrorFirstNameClass = showErrorFirstName ? 'colorInputField' : ''
    const ErrorLastNameClass = showErrorLastName ? 'colorInputField' : ''
    const ErrorFirstName = showErrorFirstName
      ? 'display-element'
      : 'hide-element'
    const ErrorLastName = showErrorLastName ? 'display-element' : 'hide-element'

    return (
      <form className="form-container" onSubmit={this.submitForm}>
        <label className="label" htmlFor="firstName">
          FIRST NAME
        </label>
        <input
          type="text"
          id="firstName"
          className={`input ${ErrorFirstNameClass}`}
          value={firstName}
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurEvent}
        />
        <p className={`paragraph ${ErrorFirstName}`}>Required</p>
        <label className="label" htmlFor="lastName">
          LAST NAME
        </label>
        <input
          type="text"
          id="lastName"
          className={`input ${ErrorLastNameClass}`}
          value={lastName}
          onChange={this.onChangeLastName}
          onBlur={this.onBlurEvent}
        />
        <p className={`paragraph ${ErrorLastName}`}>Required</p>
        <div className="button-container">
          <button type="submit" className="button">
            submit
          </button>
        </div>
      </form>
    )
  }

  renderSubmittedForm = () => {
    const submitAnother = () => {
      this.setState({
        firstName: '',
        lastName: '',
        showErrorFirstName: false,
        showErrorLastName: false,
        formSubmitted: false,
      })
    }

    return (
      <div className="submitted-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          alt="success"
          className="image"
        />
        <p className="submit-name">Submitted Successfully</p>
        <button type="submit" className="button-submit" onClick={submitAnother}>
          Submit Another Response
        </button>
      </div>
    )
  }

  render() {
    const {formSubmitted} = this.state

    return (
      <div className="app-container">
        <h1 className="header">Registration</h1>
        {formSubmitted ? this.renderSubmittedForm() : this.renderForm()}
      </div>
    )
  }
}

export default RegistrationForm
