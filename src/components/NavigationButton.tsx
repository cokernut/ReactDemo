import React from 'react';

interface NavigationButtonProps {
  onClick: () => void;
  text: string;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

export default NavigationButton;
