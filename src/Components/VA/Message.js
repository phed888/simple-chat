import React, { useContext } from 'react'
import styled from 'styled-components'
import {ConversationContext} from '../../Contexts/ConversationContext'

const MessageStyles = styled.div`
	background-color: ${(props) => props.dir === "in" ? "#f8f5f4" : "#202843"};
	justify-content: ${(props) => props.dir === "in" ? "flex-start" : "flex-end"};
	border-radius: .8rem;
	display: inline-block;
	flex-shrink: 1;
	font-size: 1.4rem;
	max-width: 75%;
	padding: 1.2rem 1.6rem;
	margin-bottom: ${(props) => props.dir === props.currentDir ? ".2rem" : "1.2rem"}
`

const Message = ({content, dir}) => {

const { currentDir } = useContext(ConversationContext);

	return (
		<MessageStyles dir={dir} currentDir={currentDir}>
			{content}
		</MessageStyles>
	)
}

export default Message
		