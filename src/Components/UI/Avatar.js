import React from 'react'
import styled from 'styled-components'

const AvatarStyles = styled.div`
  height: 3.6rem;
  width: 3.6rem;
  flex-shrink: 0;
  background-color: ${props => props.brand === 'BEX' ? 'var(--AvatarExp)' : '#ff0000'};
  border-radius: 1.8rem;
  
  svg {
    transform: ${props => props.brand === 'BEX' ? 'translate(.2rem, .42rem) scale(1.1)' : 'none'};
  }
`

export default function Avatar({brand}) {
  return (
      <AvatarStyles brand={brand}  className="avatar">
        { brand === "BEX" &&
        <svg width="33" height="26" viewBox="0 0 33 26" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M0.450195 17.8599L14.1299 12.8198L19.5698 11.1699L18.8999 9.16016L13.2402 1.14014L14.2598 0.870117L24.02 9.81982L29.7598 8.08008C30.4298 7.89008 31.1998 7.84986 31.7798 7.85986H31.79C32.02 8.36986 32.2201 8.89994 32.3901 9.43994C31.8801 9.77994 31.1502 10.2402 30.4102 10.4902L24.6499 12.23L20.8101 25.3101L19.8198 25.6499L20.6299 15.6699L20.1699 13.5898L14.7798 15.23L0.660156 18.75C0.580156 18.46 0.510195 18.1599 0.450195 17.8599V17.8599Z" fill="#FFB900"/>
        </svg>
        }
      </AvatarStyles>
  )
}
