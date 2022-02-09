import VACContainer from './Components/VA/VACContainer'
import ConversationContextProvider from './Contexts/ConversationContext';
import GlobalStyle from "./Styles/GlobalStyles";
import VACContextProvider from "./Contexts/VACContext";
import ButtonTester from './Components/UI/Button/ButtonTester'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <VACContextProvider>
        <ConversationContextProvider>
{/*          <VACContainer />
*/}          <ButtonTester />
        </ConversationContextProvider>
      </VACContextProvider>
    </div>
  );
}

export default App;
