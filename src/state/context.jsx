import { createContext, useState, useEffect } from "react";
import filter from "../utils/filter";

const initialDisplayState = {
  grouping: "status",
  ordering: "priority",
};

export const AppContext = createContext({
  data: null,
  setData: () => null,
  dataToRender: null,
  setDataToRender: () => null,
  displayState: initialDisplayState,
  setDisplayState: () => null,
});

const LOCAL_STORAGE_KEY = "displayState";

const AppProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [dataToRender, setDataToRender] = useState(null);
  const [displayState, setDisplayState] = useState(() => {
    const storedDisplayState = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedDisplayState
      ? JSON.parse(storedDisplayState)
      : initialDisplayState;
  });

  const value = {
    data,
    setData,
    dataToRender,
    setDataToRender,
    displayState,
    setDisplayState,
  };

  useEffect(() => {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(displayState));
  }, [displayState]);

  useEffect(() => {
    setDataToRender(data && filter(data, displayState));
  }, [data, displayState]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
