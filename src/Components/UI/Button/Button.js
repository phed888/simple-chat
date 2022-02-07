import React from 'react'
import styled from 'styled-components'
import SvgIcons from "../SVGIcons";
import handleButtonType from './handleButtonType';
import handleButtonSize from './handleButtonSize';
import handleButtonHover from './handleButtonHover';
import handleButtonActive from './handleButtonActive';

const ButtonStyles = styled.button`
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
  svg {
    margin: ${(props) => props.iconLeading ? "0 .4rem 0 0" : "0 0 0 .4rem"};
  }
  .btnContents {
    display: flex;
    align-items: center;
    justify-content: ${ (props) => props.icon ? "flex-start" : "center"}
    padding: 0;
    margin: 0;
    height: 1.6rem;
  }
`

const Button = ({ label, type, size, icon, iconLeading, btnAction }) => {
    const handleClick = () => console.log(btnAction)
    return (
      <ButtonStyles type={type} size={size} iconLeading={iconLeading} icon={icon} onClick={ handleClick }>
        {icon && iconLeading ? <div className="btnContents"><SvgIcons name={icon} />{ label }</div> : icon ? <div className="btnContents">{ label }<SvgIcons name={icon} /></div> : <div className="btnContents">{ label }</div> }
      </ButtonStyles>
    )
}

export default Button
		