const handleButtonActive = type => {
  switch (type) {
    case 'primary':
      return 'color: var(--TxtClrWhite); background-color: var(--BQuickReplyColor);';
    case 'secondary':
      return 'color: var(--QuickReplyColor); background-color: white; border: 1px solid #CCCFDB;';
    case 'tertiary':
      return 'fill: var(--TxtClrWhite); color: var(--TxtClrWhite); background-color: #0000ff; border: none;';
    default:
      return 'fill: var(--TxtClrWhite); color: var(--TxtClrWhite); background-color: var(--BQuickReplyColor);';
  }
}

export default handleButtonActive;