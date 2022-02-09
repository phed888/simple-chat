const handleButtonDisabled = type => {
  switch (type) {
    case 'primary':
      return `
        opacity: 36%;
      `;
    case 'secondary':
      return `
        color: var(--TxtClrBlack); 
        background-color: var(--SecondaryActive); 
        border: 1px solid #CCCFDB;
      `;
    case 'tertiary':
      return `
        fill: var(--TxtClrBlack); 
        color: var(--TxtClrBlack); 
        background-color: var(--TertiaryActive); 
        border: none;
      `;
    case 'qr':
      return `
        background-color: var(--QRActive);
      `;
    default:
      return `
        fill: var(--TxtClrWhite); 
        color: var(--TxtClrWhite); 
        background-color: var(--TertiaryActive);
      `;
  }
}

export default handleButtonDisabled;