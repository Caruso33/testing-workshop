// Basic unit test
import React from 'react'
import ReactDOM from 'react-dom'
import Login from '../login'

test('calls onSubmit with the username and password when submitted', () => {
  const container = document.createElement('div')
  const loginProps = {onSubmit: jest.fn()}
  ReactDOM.render(<Login {...loginProps} />, container)

  const form = container.querySelector('form')
  const {username, password} = form.elements

  username.value = 'foo'
  password.value = 'bar'

  form.dispatchEvent(new window.Event('submit'))

  expect(loginProps.onSubmit).toBeCalledTimes(1)
  expect(loginProps.onSubmit).toBeCalledWith({
    username: 'foo',
    password: 'bar',
  })

  // Arrange
  // 🐨 create a fake object to hold the form field values (username and password)
  // 🐨 create a jest.fn() for your submit handler
  // 🐨 render the Login component to a div
  // 💰 const div = document.createElement('div')
  //
  // 🐨 get the field nodes
  // 💰 const inputs = div.querySelectorAll('input')
  // 💰 const form = div.querySelector('form')
  // 🐨 fill in the field values
  //
  // Act
  // 🐨 submit the form:
  // 💰 formNode.dispatchEvent(new window.Event('submit'))
  //
  // Assert
  // 🐨 ensure your submit handler was called properly
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=Testing&e=login.step-1&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
