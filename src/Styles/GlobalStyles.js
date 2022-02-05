import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --VACbg: #ffffff;
    --MsgInBg: #ebecf0;
    --MsgOutBg: #1F3366;
    --White: #ffffff;
    --TxtClrBlack: #141D38;
    --AvatarExp: #202843;
    --QuickReplyColor: #005aeb;
    --QuickReplyHover: #e7edfd;
    --FABBg: #ffffff;
    --AvatarBg: #2950b8;
    --Border: #D7D4D2
  }
  *,
  *::before,
  *::after {
  	box-sizing: border-box;
  }
  html {
  	font-family: Arial;
  	font-size: 10px;
  	background-color: #eeeeee;
  }
  html,
  body {
  	height: 100%;
  }
  body {
  	background-color: #ffffff;
  	margin: 0 auto;
  	max-width: 120rem;
    position: relative;
  }
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

export default GlobalStyle;