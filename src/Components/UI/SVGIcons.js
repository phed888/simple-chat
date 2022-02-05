import React from 'react'
import Icons from '../../Data/iconList.json'


const SvgIcons = ({name, spot}) => {

  const myicon = Icons.filter(icon => icon.name === name)
  return (
      <div className={spot ? "iconSpot" : "iconPlain"}>
        <svg className="uitk-icon uitk-icon-medium" aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <svg >
            <path fillRule='evenodd' d={myicon[0].path}></path>
          </svg>
        </svg>
      </div>
  )
}

export default SvgIcons