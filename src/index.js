import React, { useState } from 'react'
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

const PropProgram = ({ name, age }) => {

  const formattedBornYear = () => {
    const numberOfYears = new Date().getFullYear() - age;
    return numberOfYears >= 0 ? numberOfYears : -numberOfYears + " eKr.";
  }

  return (
    <div>
      <p>Terve, ohjelma! Minä olen {name}. Olen {age} vuotias. Synnyin vuonna {formattedBornYear()}</p>
    </div>
  )
}

const Props = ({ greeters }) => {

  let components = [];
  greeters.forEach( ({name, age}) => {
    components.push(<PropProgram name={name} age={age}/>)
  });
  return components;
}

const Header = ({title}) => {
  return ( <h1>{title}</h1> )
}

const Timer = ({counter}) => {
  return ( <div>Olet vieraillut sivulla {counter} sekuntia</div> )
}

const App = () => {
  const name = "Muuttuja";
  const age = 1;

  const greeters = [
    {
      name:"Lauri", 
      age: 20+9
    },
    {
      name:name, 
      age: age
    },
    {
      name:"Error", 
      age: 9999
    }
  ]

  const [ counter, setCounter ] = useState(0)

  setTimeout(
    () => setCounter(counter + 1),
    1000
  )

  return (<>
    <Header title="Tervehdys" />
    <Hello />
    <Props greeters={greeters}/>
    <Timer counter={counter}/>
    <Counter/>
    </>)
}

const Counter = () => {

  const [ counter, setCounter ] = useState(0);

  const setToValue = (value) => setCounter(value);
  
  return (<>
    <CounterDisplay counter = {counter}/>
    <CounterButton caption = {"Plussaa!"} onClick = {() => setToValue(counter + 1)}/>
    <CounterButton caption = {"Miinusta"} onClick = {() => setToValue(counter - 1)}/>
    <CounterButton caption = {"Nollaa"} onClick = {() => setToValue(0)}/>
  </>);
}

const CounterButton  = ({ caption, onClick }) => 
<button onClick={onClick}>
  {caption}
</button>;

const CounterDisplay = ({ counter }) => <div>{counter}</div>

ReactDOM.render(
  React.createElement(App, null),
  document.getElementById('root')
)