export const TOGGLE_SEARCH = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE":
      return !state;
    default:
      return state;
  }
};
