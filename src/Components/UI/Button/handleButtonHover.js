const handleButtonHover = type => {
  switch (type) {
    case 'primary':
      return 'color: var(--TxtClrWhite); background-color: var(--BQuickReplyColor);';
    case 'secondary':
      return 'color: var(--QuickReplyColor); background-color: white; border: 1px solid #CCCFDB;';
    case 'tertiary':
      return 'color: var(--TxtClrBlack); background-color: var(--TertiaryButtonHover); border: none;';
    case 'qr':
      return 'color: var(--QuickReplyColor); border: .1rem solid var(--QuickReplyColor); background-color: var(--QuickReplyHover);'
    default:
      return 'color: var(--TxtClrWhite); background-color: var(--BQuickReplyColor);';
  }
}

export default handleButtonHover;