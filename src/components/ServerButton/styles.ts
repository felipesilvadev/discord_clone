import styled from 'styled-components';

import { ButtonProps } from '.';

export const Button = styled.button<ButtonProps>`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  width: 48px;
  height: 48px;
  border-radius: 50%;

  margin-bottom: 8px;

  background-color: ${({ isHome }) => isHome ? 'var(--rocketseat)' : 'var(--primary)'};

  position: relative;

  > img {
    width: 24px;
    height: 24px;
  }

  &::before {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    
    position: absolute;
    left: -17px;
    top: calc(50% - 4.5px);

    background-color: var(--white);

    content: '';
    display: ${({ hasNotifications }) => hasNotifications ? 'inline' : 'none'};
  }

  &::after {
    width: auto;
    height: 16px;
    padding: 0 4px;
    border-radius: 12px;
    border: 4px solid var(--quaternary);
    
    position: absolute;
    bottom: -4px;
    right: -4px;
    
    background-color: var(--notification);
    
    text-align: right;
    font-size: 13px;
    font-weight: bold;
    color: var(--white);

    content: '${({ mentions }) => mentions && mentions}';
    display: ${({ mentions }) => mentions && mentions > 0 ? 'inline' : 'none'}
  }

  transition: border-radius 0.2s, background-color 0.2s;

  &.active, &:hover {
    border-radius: 16px;
    background-color: ${({ isHome }) => isHome ? 'var(--rocketseat)' : 'var(--discord)'}
  }
`;
