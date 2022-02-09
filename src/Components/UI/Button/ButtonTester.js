import React from 'react'
import Button from './Button'
 import SvgIcons from '../SVGIcons';
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid';

const buttonRange = [
	{
		id: uuidv4(), label: "Primary small", type: "primary", size: "small", btnAction: "CANCEL_BOOKING", disabled: true,
	},
	{
		id: uuidv4(), label: "Primary normal", type: "primary", size: "normal", btnAction: "CANCEL_BOOKING", disabled: false,
	},
	{
		id: uuidv4(), label: "Primary large", type: "primary", size: "large", btnAction: "CANCEL_BOOKING", disabled: false,
	},
	{
		id: uuidv4(), label: "Primary small", type: "primary", size: "small", btnAction: "CANCEL_BOOKING", icon: "ac_unit", iconLeading: true, disabled: false,
	},
	{
		id: uuidv4(), label: "Primary normal", type: "primary", size: "normal", btnAction: "CANCEL_BOOKING", icon: "ac_unit", iconLeading: true, disabled: false,
	},
	{
		id: uuidv4(), label: "Primary large", type: "primary", size: "large", btnAction: "CANCEL_BOOKING", icon: "ac_unit", iconLeading: true, disabled: false,
	},
	{
		id: uuidv4(), label: "Secondary small", type: "secondary", size: "small", btnAction: "CANCEL_BOOKING", disabled: false,
	},
	{
		id: uuidv4(), label: "Secondary normal", type: "secondary", size: "normal", btnAction: "CANCEL_BOOKING", disabled: false,
	},
	{
		id: uuidv4(), label: "Secondary large", type: "secondary", size: "large", btnAction: "CANCEL_BOOKING", disabled: false,
	},
	{
		id: uuidv4(), label: "Secondary small", type: "secondary", size: "small", btnAction: "CANCEL_BOOKING", icon: "ac_unit", iconLeading: true, disabled: false,
	},
	{
		id: uuidv4(), label: "Secondary normal", type: "secondary", size: "normal", btnAction: "CANCEL_BOOKING", icon: "ac_unit", iconLeading: true, disabled: false,
	},
	{
		id: uuidv4(), label: "Secondary large", type: "secondary", size: "large", btnAction: "CANCEL_BOOKING", icon: "ac_unit", iconLeading: true, disabled: false,
	},
	{
		id: uuidv4(), label: "Tertiary small", type: "tertiary", size: "small", btnAction: "CANCEL_BOOKING", disabled: false,
	},
	{
		id: uuidv4(), label: "Tertiary normal", type: "tertiary", size: "normal", btnAction: "CANCEL_BOOKING", disabled: false,
	},
	{
		id: uuidv4(), label: "Tertiary small", type: "tertiary", size: "large", btnAction: "CANCEL_BOOKING", disabled: false,
	},
	{
		id: uuidv4(), label: "Tertiary small", type: "tertiary", size: "small", btnAction: "CANCEL_BOOKING", icon: "ac_unit", iconLeading: true, disabled: false,
	},
	{
		id: uuidv4(), label: "Tertiary normal", type: "tertiary", size: "normal", btnAction: "CANCEL_BOOKING", icon: "ac_unit", iconLeading: true, disabled: false,
	},
	{
		id: uuidv4(), label: "Tertiary small", type: "tertiary", size: "large", btnAction: "CANCEL_BOOKING", icon: "ac_unit", iconLeading: true, disabled: false,
	},
	{
		id: uuidv4(), label: "QR small", type: "qr", size: "small", btnAction: "CANCEL_BOOKING", disabled: false,
	},
	{
		id: uuidv4(), label: "QR normal", type: "qr", size: "normal", btnAction: "CANCEL_BOOKING", disabled: false,
	},
	{
		id: uuidv4(), label: "QR large", type: "qr", size: "large", btnAction: "CANCEL_BOOKING", disabled: false,
	},
	{
		id: uuidv4(), label: "QR small", type: "qr", size: "small", btnAction: "CANCEL_BOOKING", icon: "ac_unit", iconLeading: true, disabled: false,
	},
	{
		id: uuidv4(), label: "QR normal", type: "qr", size: "normal", btnAction: "CANCEL_BOOKING", icon: "ac_unit", iconLeading: true, disabled: false,
	},
	{
		id: uuidv4(), label: "QR large", type: "qr", size: "large", btnAction: "CANCEL_BOOKING", icon: "ac_unit", iconLeading: true, disabled: false,
	},
]

const ButtonTesterStyles = styled.section`
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	gap: 2rem;
	grid-auto-rows: minmax(5rem, auto);
	justify-items: start;
	align-items: start;
	width: 101.2rem;
	margin: 0 auto;
	padding: 5rem 0;
	button {
		display: inline;
		width: auto;
	}
`

const ButtonTester = () => {

	const buttons = buttonRange.map((btn) => 
		<Button key={btn.id} label={btn.label} type={btn.type} size={btn.size} icon={btn.icon} iconLeading={btn.iconLeading} action={btn.btnAction} disabled={btn.disabled}>
			 {btn.icon && btn.iconLeading ? <div className="btnContents"><SvgIcons name={btn.icon} />{ btn.label }</div> : btn.icon ? <div className="btnContents">{ btn.label }<SvgIcons name={btn.icon} /></div> : <div className="btnContents">{ btn.label }</div> }
		</Button>)

	return (
		<ButtonTesterStyles>
			{ buttons }
		</ButtonTesterStyles>
	)
}

export default ButtonTester
		