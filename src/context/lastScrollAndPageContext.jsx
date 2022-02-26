// create a context for the last scroll and page

import { createContext, useState } from "react";

const LastScrollAndPageContext = createContext({
  lastPage: 1,
  updateLastPage: () => {},
});

export default LastScrollAndPageContext;

export const LastScrollAndPageProvider = ({ children }) => {
  const [lastPage, setLastPage] = useState(1);

  const updateLastPage = (page) => {
    setLastPage(page);
  };

  return (
    <LastScrollAndPageContext.Provider
      value={{
        lastPage,
        updateLastPage,
      }}
    >
      {children}
    </LastScrollAndPageContext.Provider>
  );
};
