import React, { useContext } from 'react'
import { VACContext } from '../../Contexts/VACContext'
import styled from 'styled-components'
import VAHeader from './VACHeader'
import Conversation from './Conversation'
import VAFooter from './VACFooter'

const VACContainerStyles = styled.div`
  position: absolute;
  bottom: 2.4rem;
  right: 2.4rem;
  width: 40rem;
  height: 70rem;
  background-color: var(--VACbg);
  border-radius: .8rem;
  box-shadow: 0 .8rem 1.2rem 0 rgba(0,0,0,0.24);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform .3s ease-out;
  ${ props => props.visible ? `transform: translateY(0);` : `transform: translateY(72rem);` };
  ${ props => props.present ? `display: flex;` : `display: none;` }
`

export default function VACContainer() {

  const { isVisible, isPresent, toggleVAC } = useContext(VACContext);

  return (
      <VACContainerStyles visible={isVisible} present={isPresent} >
        <VAHeader brand={"BEX"} name={"Virtual Agent"} />
        <Conversation />
        <VAFooter />
      </VACContainerStyles>
  )
}
