import { Provider } from "react-redux";
import "./App.css";
import Router from "./Routers";
import { PersistGate } from 'redux-persist/lib/integration/react';
import configureStore from "./components/redux/store";
const { store, persistor } = configureStore()
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Router />
      </PersistGate>
    </Provider>
  );
}

export default App;
