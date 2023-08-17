
import Homepage from './components/Homepage';
import { BrowserRouter} from 'react-router-dom';
import Header from './components/Header';
import GlobalStyles from './components/GlobalStyles';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Homepage />
    </BrowserRouter>
  );
}

export default App;
