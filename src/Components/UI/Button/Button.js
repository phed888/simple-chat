import React from 'react'
import styled from 'styled-components'
import SvgIcons from "../SVGIcons";
import handleButtonType from './handleButtonType';
import handleButtonSize from './handleButtonSize';
import handleButtonHover from './handleButtonHover';
import handleButtonActive from './handleButtonActive';
import handleButtonDisabled from './handleButtonDisabled';

const ButtonStyles = styled.button`
  appearance: none;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin: 0 .8rem .8rem 0;
  user-select: none;
  ${({size}) => handleButtonSize(size)};
  ${({type}) => handleButtonType(type)};
  &:hover {
    ${({type}) => handleButtonHover(type)};
  }
  &:active {
    ${({type}) => handleButtonActive(type)};
  }
  &:disabled {
    ${({type}) => handleButtonDisabled(type)};
  }
  .btnContents {
    display: flex;
    align-items: center;
    justify-content: ${ (props) => props.icon ? "flex-start" : "center"}
    padding: 0;
    margin: 0;
    white-space: nowrap;
    height: ${props => props.size === "small" ? "1.5rem" : props.size === "normal" ? "1.7rem" : "1.8rem"};
     svg {
      margin: ${(props) => props.iconLeading ? "0 .4rem 0 0" : "0 0 0 .4rem"};
      height: ${props => props.size === "small" ? "1.6rem" : props.size === "normal" ? "2rem" : "2.4rem"};
    }
  }
`

const Button = ({ label, type, size, icon, iconLeading, btnAction, disabled }) => {
    const handleClick = () => console.log(btnAction)
    return (
      <ButtonStyles type={type} size={size} iconLeading={iconLeading} icon={icon} onClick={ handleClick } disabled={disabled}>
        {icon && iconLeading ? <div className="btnContents"><SvgIcons name={icon} /><p>{ label }</p></div> : icon ? <div className="btnContents">{ label }<SvgIcons name={icon} /></div> : <div className="btnContents">{ label }</div> }
      </ButtonStyles>
    )
}

export default Button
		