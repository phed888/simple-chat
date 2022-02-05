const handleButtonType = type => {
  switch (type) {
    case 'primary':
      return `
        fill: #ffffff; 
        color: #ffffff; 
        background-color: var(--QuickReplyColor);
      `;
    case 'secondary':
      return `
        fill: var(--QuickReplyColor); 
        color: var(--QuickReplyColor); 
        background-color: white; 
        border: 1px solid #CCCFDB;
      `;
    case 'tertiary':
      return `
        fill: var(--QuickReplyColor); 
        color: var(--QuickReplyColor); 
        background-color: none; 
        border: none;
      `;
    case 'qr':
      return `
        fill: var(--QuickReplyColor); 
        border: .1rem solid var(--QuickReplyColor); 
        color: var(--QuickReplyColor); 
        white-space: nowrap; 
        border-radius: 1.7rem; 
        padding: .9rem 1.2rem;
      `;
    default:
      return `
        fill: var(--TxtClrWhite); 
        color: var(--TxtClrWhite); 
        background-color: var(--BQuickReplyColor);`;
  }
}

export default handleButtonType;