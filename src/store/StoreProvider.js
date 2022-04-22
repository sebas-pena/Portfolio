import { createContext, useReducer } from "react"

export const StoreContext = createContext()
export const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, initialState)
  return (
    <StoreContext.Provider value={[store, dispatch]}>
      {children}
    </StoreContext.Provider>
  )
}
