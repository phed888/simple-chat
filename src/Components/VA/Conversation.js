import React, { useContext } from 'react'
import styled from 'styled-components'
import { ConversationContext } from '../../Contexts/ConversationContext'
import Message from './Message'
import Button from '../UI/Button/Button'

const ConversationStyles = styled.section`
	border: 0.1rem solid var(--Border);
	border-top: none;
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	margin: 0 auto;
	padding: 1.2rem;
	width: 40rem;
	.conv-messages {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		justify-content: ;
	}
	.conv-qrs {
		display: flex;
		flex-wrap: wrap;
		padding-top: 1.2rem;
	}
`

const Conversation = () => {

	const { messages } = useContext(ConversationContext);
	
	const convoElements = messages.map((message) => {
		return (
			<Message content={message.content} dir={message.msgDir} />
			)}
		)

	const msgLength = messages.length;

	const convoButtons = messages[msgLength - 1].buttons.map((button) => {
		return (
				<Button label={button.label} type={button.type} />
			)
	})

	return (
		<ConversationStyles >
			<div className="conv-messages">
				{ convoElements }
			</div>
			<div className="conv-qrs">
				{ convoButtons }
			</div>
		</ConversationStyles>
	)
}

export default Conversation
		