import VACContainer from './Components/VA/VACContainer'
import ConversationContextProvider from './Contexts/ConversationContext';
import GlobalStyle from "./Styles/GlobalStyles";
import VACContextProvider from "./Contexts/VACContext";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <VACContextProvider>
        <ConversationContextProvider>
          <VACContainer />
        </ConversationContextProvider>
      </VACContextProvider>
    </div>
  );
}

export default App;
