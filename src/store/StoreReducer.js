import { templateConfig } from "../templateConfig"

export const initialStore = {
  folders: templateConfig.folders,
  display: [0, 0],
  activeFileRef: null,
  theme: "light",
}

export const StoreReducer = (state, action) => {
  switch (action.type) {
    case "SET_DISPLAY":
      return { ...state, display: action.payload }
    case "SET_ACTIVE_FILE":
      return { ...state, activeFileRef: action.payload }
    case "SET_THEME":
      return { ...state, theme: action.payload }

    default:
      return state
  }
}
