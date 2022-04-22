import { templateConfig } from "./templateConfig"

const initialStore = {
  folders: templateConfig.folders,
  display: [0, 0],
}

export const StoreReducer = (state, action) => {
  switch (action.type) {
    case "SET_DISPLAY":
      return { ...state, display: action.payload }
    default:
      return state
  }
}
