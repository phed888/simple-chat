import React from 'react'
import Icons from '../../Data/iconList.json';
import styled from 'styled-components';

const SvgIconStyles = styled.div`
  .iconPlain {
    margin: 0;
    padding: 0;
    height: 2.4rem;
    width: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      margin: 0;
    }
  }
`


const SvgIcons = ({name, spot}) => {

  const myicon = Icons.filter(icon => icon.name === name)
  return (
      <SvgIconStyles className={spot ? "iconSpot" : "iconPlain"}>
        <svg className="uitk-icon uitk-icon-medium" aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <svg >
            <path fillRule='evenodd' d={myicon[0].path}></path>
          </svg>
        </svg>
      </SvgIconStyles>
  )
}

export default SvgIcons