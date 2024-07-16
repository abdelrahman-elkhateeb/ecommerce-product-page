import { createContext, useContext } from "react";

const AppContext = createContext();

function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined)
    throw new Error("QuizContext was used outside the QuizProvider");
  return context;
}

export { useAppContext };
