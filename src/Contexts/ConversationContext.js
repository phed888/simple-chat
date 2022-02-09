import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const ConversationContext = createContext();

const ConversationContextProvider = props => {
	const [currentDir, setCurrentDir] = useState("in")
	const [messages, setMessages] = useState([
		{
			id: uuidv4(),
			content: "Hi, I am your Virtual Agent 👋.",
			msgDir: "in",
			buttons: [],
		},
		{
			content: "I can help you change your booking, redeem airline credit, and more. What would you like to do?",
			msgDir: "in",
			buttons: [
				{ id: uuidv4(), label: "Cancel booking", type: "qr", size: "normal", btnAction: "CANCEL_BOOKING", },
				{ id: uuidv4(), type: "qr", label: "Change booking", btnAction: "CHANGE_BOOKING", },
				{ id: uuidv4(), type: "qr", label: "Get refund status", btnAction: "GET_REFUND_STATUS", },
				{ id: uuidv4(), type: "qr", label: "Use airline credit", btnAction: "USE_AIRLINE_CREDIT", },
				{ id: uuidv4(), type: "qr", label: "Do something else", btnAction: "DO_SOMETHING_ELSE", },
			]
		},
	])

	const addMessage = newMessage => {
		setMessages(prevMessages => [...prevMessages, newMessage])
		setCurrentDir(newMessage.direction);
	};

	return (
			<ConversationContext.Provider
					value={{
						currentDir,
						setCurrentDir,
						messages,
						setMessages,
						addMessage
					}}
			>
				{props.children}
			</ConversationContext.Provider>
	);
}


export default ConversationContextProvider;