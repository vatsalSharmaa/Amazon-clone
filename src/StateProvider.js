import { createContext, useContext, useReducer } from "react";

//prepares the data layer, add to basket karne pe datalayer/context api/ redux me bejh rhe products wha se checkout jaega

export const StateContext = createContext();

//wrap our app and providing datalayer to every component in our app

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//pull info from data layer

export const useStateValue = () => useContext(StateContext);
