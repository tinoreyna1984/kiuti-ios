import Main from './Main';
import { Provider } from "react-redux";
import { store } from './redux/store';

/**
 * Ya que no hay un index.js, esta es una buena práctica.
 * Si necesito usar Redux, ayuda mucho.
 */

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
    
  );
}

