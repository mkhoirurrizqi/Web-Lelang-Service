import { Provider } from "react-redux";
import "./App.css";
import Router from "./Routers";
import store from "./components/redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
