"use client";
import { persistor, store } from "../redux/store";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
export default function AuthProvider({ children }) {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SessionProvider>{children}</SessionProvider>
        </PersistGate>
      </Provider>
    </>
  );
}
