import { Provider } from ‘react-redux’
import storeConfig from ‘./storeConfig/store’

const store = storeConfig()

const root = ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
    document.getElementById(‘app’)
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
