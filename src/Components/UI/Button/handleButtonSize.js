const handleButtonSize = size => {
  switch (size) {
    case 'small':
      return `
        font-size: 1.2rem; 
        padding: .8rem 1.2rem; 
        border-radius: .6rem;
      `;  
    case 'normal':
      return `
        font-size: 1.4rem; 
        padding: 1rem 1.4rem; 
        border-radius: .8rem;
        `;
    case 'large':
      return `
        font-size: 1.6rem; 
        padding: 1.2rem 1.6rem; 
        border-radius: 1rem;
      `;
    default:
      return `
        font-size: 1.4rem; 
        padding: 1rem 1.4rem; 
        border-radius: .8rem;
      `;
  }
}

export default handleButtonSize;