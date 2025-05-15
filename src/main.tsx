import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { AnimatePresence } from "framer-motion";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
import { store } from "./store/redux/store.ts";

const persistor = persistStore(store);

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={<p>Loading...</p>} persistor={persistor}>
        <AnimatePresence>
          <App />
        </AnimatePresence>
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
