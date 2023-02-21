import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Shop() {
    const location = useLocation();
    console.log(location);
  return (
    <h2>{location.state.x}</h2>
  )
}
