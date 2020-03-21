import React from 'react'
import ReactDOM from 'react-dom'

const Hello = () => {
  const now = new Date();
  const a = 10;
  const b = 20;
  return React.createElement(
    'div',
    null,
    React.createElement(
      'p', null, 'Terve, maailma. Kello on: ', now.toString()
    ),
    React.createElement(
      'p', null, a, ' + ', b, ' = ', a + b
    )
  )
}

const App = () => {
  return (
    <div>
      <h1>Tervehdys</h1>
      <Hello />
      <Hello />
      <Hello />
    </div>
  )
}

ReactDOM.render(
  React.createElement(App, null),
  document.getElementById('root')
)