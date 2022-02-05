import React, { useContext } from 'react'
import Avatar from '../UI/Avatar';
import Button from '../UI/Button/Button';
import { VACContext } from '../../Contexts/VACContext';
import styled from "styled-components";

const VAHeader2Styles = styled.header`
  height: 10rem;
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding: 2.4rem 1.2rem 1rem 1.2rem;
  border-bottom: .1rem solid #d7d4d2;
  position: relative;
  z-index: 10;
  .avatar {
    margin-bottom: 1.2rem;
  }
  .header-info {
    pointer-events: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    padding-left: 3.6rem;
    h5 {
      font-size: 1.4rem;
      font-weight: bold;
      margin: 0;
    }
  }
button {
  margin: -1.6rem -.4rem 0 0;

}
`

const VAHeader2 = ({ brand, name}) => {

  const { toggleVAC } = useContext(VACContext);

  const handleClose = (e) => {
    e.preventDefault();
    toggleVAC();
  }

  return (
      <VAHeader2Styles>
        <div className="header-info">
          <Avatar brand={brand} />
          <h5>{name}</h5>
        </div>
        {/* Need to pass the handleClose function to the button as a prop - onClick is located in the button component */}
        <Button icon="remove" type="tertiary" size="medium" btnAction={handleClose} />
      </VAHeader2Styles>
  )
}

export default VAHeader2