import React, { createContext, useState } from 'react'

export const VACContext = createContext();

const VACContextProvider = props => {
  const [isVisible, setIsVisible] = useState(true);
  const [isPresent, setIsPresent] = useState(true)

  const toggleVAC = () => {
    if(isVisible) {
      setIsVisible(false);
      setTimeout(() => {setIsPresent(false)}, 300);
    } else {
      setIsPresent(true);
      setTimeout(() => {setIsVisible(true)}, 300);
    }
  }

  return (
      <VACContext.Provider
          value={{
            isVisible,
            isPresent,
            toggleVAC
          }}
      >
        {props.children}
      </VACContext.Provider>
  );
};

export default VACContextProvider;