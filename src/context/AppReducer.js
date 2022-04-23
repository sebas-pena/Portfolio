import { useReducer } from "react"

export const AppReducer = (reducer, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return [state, dispatch]
}
