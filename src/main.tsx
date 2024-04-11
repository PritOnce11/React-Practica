import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { store } from './store/store';
import MainPage from './MainPage';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!);
root.render(
  <Provider store={store}>
    <Router>
      <MainPage />
    </Router>
  </Provider>
);