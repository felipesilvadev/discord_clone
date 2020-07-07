import React from 'react';

import { Button } from './styles';

import logo from '../../assets/logo.svg';

export interface ButtonProps {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}

const ServerButton: React.FC<ButtonProps> = ({ 
  selected,
  isHome,
  hasNotifications,
  mentions 
}) => {
  return (
    <Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? 'active' : ''}
    >
      {isHome && <img src={logo} alt="Rocketseat"/>}
    </Button>
  );
}

export default ServerButton;