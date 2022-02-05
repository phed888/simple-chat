import React, { useContext, useState } from 'react'
import {ConversationContext} from '../../Contexts/ConversationContext'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid';

const VAFooterStyles = styled.form`
  display: flex;
  justify-content: space-between;
  padding: 1.2rem 0;
  .attachButton,
  .sendButton {
    border: none;
    height: 4rem;
    width: 4rem;
    background-color: transparent;
    cursor: pointer;
  }
  .sendButton {
    opacity: ${ props => props.disabled ? .36 : 1 };
  }
  .attachButton {
    margin: 0 .4rem 0 .8rem;
  }
  .messageEntry {
    height: 4.4rem;
    padding: 1.2rem;
    border: .1rem solid #cccccc;
    border-radius: .8rem;
    flex-grow: 1;
    font-size: 1.4rem;
  }
`

export default function VAFooter(props) {

  const [disabled, setDisabled] = useState(true);
  const [msg, setMsg] = useState('');

  const { addMessage, messages } = useContext(ConversationContext);

  const handleMessage = (e) => {
    messages === '' ? setDisabled(true) : setDisabled(false);
    setMsg(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addMessage({
      index: uuidv4(),
      direction: "out",
      type: "message",
      utterances: [{content: e.target.value, index: uuidv4()}],
      buttons: []
    });
    setMsg('');
  }

  return (
      <VAFooterStyles onSubmit={ handleSubmit } disabled = {disabled}>
        <button className="attachButton">
          <svg width="11" height="22" viewBox="0 0 11 22" fill="none">
            <path d="M9.5 5V16.5C9.5 18.71 7.71 20.5 5.5 20.5C3.29 20.5 1.5 18.71 1.5 16.5V4C1.5 2.62 2.62 1.5 4 1.5C5.38 1.5 6.5 2.62 6.5 4V14.5C6.5 15.05 6.05 15.5 5.5 15.5C4.95 15.5 4.5 15.05 4.5 14.5V5H3V14.5C3 15.88 4.12 17 5.5 17C6.88 17 8 15.88 8 14.5V4C8 1.79 6.21 0 4 0C1.79 0 0 1.79 0 4V16.5C0 19.54 2.46 22 5.5 22C8.54 22 11 19.54 11 16.5V5H9.5Z" fill="#465280"/>
          </svg>
        </button>
        <input type="text" className="messageEntry" placeholder="Type a message..." onChange={handleMessage} value={msg} />
        <button className="sendButton">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M0.00999499 20L20 10.005L0.01999 0L0.00999499 7.0035L13.0035 10.005L0 12.9965L0.00999499 20Z" fill="#6B7499"/>
          </svg>
        </button>
      </VAFooterStyles>
  )
}
