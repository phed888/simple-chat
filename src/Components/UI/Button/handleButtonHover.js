const handleButtonHover = type => {
  switch (type) {
    case 'primary':
      return `
        color: var(--White); 
        background-color: var(--PrimaryHover); 
        fill: var(--White);
      `;
    case 'secondary':
      return `
        color: var(--TxtClrBlack); 
        background-color: var(--SecondaryHover); 
        border: 1px solid #CCCFDB; 
        fill: var(--TxtClrBlack);
      `;
    case 'tertiary':
      return `
        color: var(--TxtClrBlack); 
        background-color: var(--SecondaryHover); 
        border: none; 
        fill: var(--TxtClrBlack);
      `;
    case 'qr':
      return `
        color: var(--QuickReplyColor); 
        border: .1rem solid var(--QuickReplyColor); 
        background-color: var(--QuickReplyHover);
      `;
    default:
      return `
        color: var(--White); 
        background-color: var(--BQuickReplyColor);
      `;
  }
}

export default handleButtonHover;