import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import NavigationButton from '../components/NavigationButton';

function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const response = location.state?.response || 'No response received';

  const handleNavigate = () => {
    navigate('/about', { state: { message: 'Hello from Home!' } });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <p className="text-lg mb-4">Received response: {response}</p>
      <NavigationButton onClick={handleNavigate} text="Go to About" />
    </div>
  );
}

export default Home;
