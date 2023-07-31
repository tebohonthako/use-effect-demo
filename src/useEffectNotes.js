//  D E F I N E     U S E - E F F E C T 

// useEffect() is a hook used to perform side effects on a functional component.

// Basically 'to do something' when a specific change we specify occurs in a component.

// useEffect replaces every lifecycle function

// Side effects are operations that interact with the world outside of the function they’re contained in. 
// e g .  changing the DOM directly.
//        fetching data from server 
//        setting up timers (setTimeOut)

// useEffect takes in 2 arguments - function & dependency array []
// function ====== contains operations u need to perform (side effects) 
// dependency array ===== tells React when to re-run our side-effect. 
// if no dependency array is passed , our side effect would run after every render, not just when count changes.
// empty array dependency === effect runs once, right after initial render 


// e x a m p l e    1   o f    u s e E f f e c t ( )

// useEffect( () => {
//     document.title = `I love react ${dependency} times `
// }, [dependency])


// e x a m p l e   2 

import React, { useState, useEffect } from 'react';       //imports React library & useEffect, useState Hooks

function WeatherApp() {
  const [weather, setWeather] = useState(null);           // declaring state variable (weather) initilized to null 
                                                          // useState hook returns array w/ 2 values  [current value of state variable , function updating state variable ]

  useEffect(() => {                                         // useEffect used to fetch weather data from an API by using side effect + stores the data in state variable  
    fetch('https://api.weatherapi.com/v1/current.json?key=YOUR_KEY&q=London')
      .then(response => response.json())                    // this function is the side effect 
      .then(data => setWeather(data));
  }, []); // Empty dependency array means this effect runs once, right after the initial render

  if (!weather) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{weather.location.name}</h1>
      <p>{weather.current.condition.text}</p>
      <p>{weather.current.temp_c}°C</p>
    </div>
  );
}

export default WeatherApp;