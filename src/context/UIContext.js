import React, { createContext, useState } from "react";

const UIContext = createContext();

const UIContextProvider = ({ children }) => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [farenheit, setFarenheit] = useState(false);

  function handleFarenheit() {
    setFarenheit((prev) => !prev);
  }

  function handleMenuOpened() {
    setMenuOpened((prev) => !prev);
  }

  const variables = {
    menuOpened,
    farenheit,
    handleMenuOpened,
    handleFarenheit,
  };

  return <UIContext.Provider value={variables}>{children}</UIContext.Provider>;
};

export { UIContext, UIContextProvider };
