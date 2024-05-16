import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
const TitleContext = createContext();

TitleProvider.propTypes = {
  children: PropTypes.any,
};

function TitleProvider({ children }) {
  const [appTitle, setAppTitle] = useState("My React Workshop");
  useEffect(
    function () {
      document.title = appTitle;
    },
    [appTitle]
  );

  return (
    <TitleContext.Provider
      value={{
        setAppTitle,
      }}
    >
      {children}
    </TitleContext.Provider>
  );
}

function useTitle() {
  const context = useContext(TitleContext);
  if (context === undefined)
    throw new Error("TitleContext was called outside of the TitleProvider");
  return context;
}
export { TitleProvider, useTitle };
