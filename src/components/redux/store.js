import { createStore } from "redux";
import { reduceridtokenrole } from "./reducer";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2
  }

const persistedReducer = persistReducer(persistConfig, reduceridtokenrole)

export default () => {
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);
  return {  persistor,store }
}
// const storeState = createStore(reduceridtoken);
// export default storeState;
