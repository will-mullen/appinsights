import React from 'react';
import { useState, useEffect } from 'react';
import {appInsights} from './ApplicationInsights';

export default function FirstPage() {
const [data, setData] = useState([]);
const [isLoading, setIsLoading] = useState(true);


appInsights.addTelemetryInitializer((envelope) => {
  if (envelope.data.baseType === 'RemoteDependencyData'){
      const transaction = envelope.data; 
      console.log('End to End Transaction:', transaction);
  }
  return true;
  });

const fetchUrl = async() => {
  appInsights.trackEvent({ name: 'API CATS Tracking' })
  fetch(`https://catfact.ninja/fact`)
  .then((response) => response.json())
  .then((actualData) => 
  setData(actualData.fact)
  )
  .catch((err) => {
   console.log(err.message);
  });
}

useEffect(() => {
  fetchUrl();
}, []);

return(
  <p>Data: {data}</p>
)

}
