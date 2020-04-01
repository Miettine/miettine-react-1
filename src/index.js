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
    <Feedback/>
    </>)
}

const Counter = () => {

  const [ counter, setCounter ] = useState(0);

  const setToValue = (value) => setCounter(value);
  
  return (<>
    <CounterDisplay counterValue = {counter}/>
    <Button caption = {"Plussaa!"} onClick = {() => setToValue(counter + 1)}/>
    <Button caption = {"Miinusta"} onClick = {() => setToValue(counter - 1)}/>
    <Button caption = {"Nollaa"} onClick = {() => setToValue(0)}/>
  </>);
}

const Button  = ({ caption, onClick }) => 
<button onClick={onClick}>
  {caption}
</button>;

const CounterDisplay = ({ caption, counterValue }) => <div>{caption} {counterValue}</div>

const Feedback = () =>{

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementGood = (value) => setGood(value);
  const incrementNeutral = (value) => setNeutral(value);
  const incrementBad = (value) => setBad(value);

  return (
    <div>
      <h2>Palaute</h2>
      <Button caption = {"Hyvä!"} onClick = {() => incrementGood(good + 1)}/>
      <Button caption = {"Ok."} onClick = {() => incrementNeutral(neutral + 1)}/>
      <Button caption = {"Huono! >:("} onClick = {() => incrementBad(bad + 1)}/>
      <h3>Yhteenveto</h3>
      <FeedbackDisplay good= {good} neutral={neutral} bad={bad}/>
      
     
    </div>
  )
}

const FeedbackDisplay = ({good, neutral, bad}) =>{

  const hasFeedback = good > 0 || neutral > 0 || bad > 0;

  if (!hasFeedback){
    return (<>No feedback yet</>)
  }

  return(<>
  <CounterDisplay caption = {"Hyvä: "} counterValue = {good}/>
  <CounterDisplay caption = {"Ok: "} counterValue = {neutral}/>
  <CounterDisplay caption = {"Huono: "} counterValue = {bad}/>
  </>);
}


ReactDOM.render(
  React.createElement(App, null),
  document.getElementById('root')
)