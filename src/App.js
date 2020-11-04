import './App.css';
import React from "react";
import {Provider} from 'react-redux';
import configureStore from './states';
import rootSaga from './states/sagas/rootSaga';
import {Home} from "./screens/Home";

const store = configureStore();
function App() {
  return (
      <Provider store={store}>
    <Home/>
      </Provider>
  );
}
store.runSaga(rootSaga);
export default App;
