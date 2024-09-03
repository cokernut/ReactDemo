import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function About() {
  const location = useLocation();
  const navigate = useNavigate();
  const message = location.state?.message || 'No message received';

  const handleGoBack = () => {
    navigate('/', { state: { response: 'Hello from About!' } });
  };

  return (
    <div>
      <h1>About Page</h1>
      <p>Received message: {message}</p>
      <button onClick={handleGoBack}>Go Back to Home</button>
    </div>
  );
}

export default About;
