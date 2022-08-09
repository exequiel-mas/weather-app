import React, { createContext, useState } from "react";

const UIContext = createContext();

const UIContextProvider = ({ children }) => {
  const [menuOpened, setMenuOpened] = useState(false);

  function handleMenuOpened() {
    setMenuOpened((prev) => !prev);
  }

  const variables = {
    menuOpened,
    handleMenuOpened,
  };

  return <UIContext.Provider value={variables}>{children}</UIContext.Provider>;
};

export { UIContext, UIContextProvider };
