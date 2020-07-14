import React, { useEffect, useRef } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }

  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map(message => (
          <ChannelMessage 
            key={message}
            author="Mateus Silva"
            date="14/07/2020"
            content="Daily às 14:00h!"
          />
        ))}
      
        <ChannelMessage 
          author="Diego Fernandes"
          date="14/07/2020"
          content={
            <>
              <Mention>@Felipe Silva</Mention>, entra no link do Zoom
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  )
}

export default ChannelData;