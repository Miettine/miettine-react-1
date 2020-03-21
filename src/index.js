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

const PropProgram = (props) => {

  return (
    <div>
      <p>Terve, ohjelma! Minä olen {props.name}. Olen {props.age} vuotias.</p>
    </div>
  )
}


const App = () => {
  const name = "Muuttuja";
  const age = 1;
  return (
    <div>
      <h1>Tervehdys</h1>
      <Hello />
      <Hello />
      <PropProgram name="Lauri" age={20+9}/>
      <PropProgram name={name} age={age}/>
      <PropProgram name="Error"/>
      <PropProgram age={999}/>
    </div>
  )
}

ReactDOM.render(
  React.createElement(App, null),
  document.getElementById('root')
)