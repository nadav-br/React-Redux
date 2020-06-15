import { COLOR_CHANGED } from "../action/color.action";

const reducer = (state = "Orange", action) => {
  switch (action.type) {
    case COLOR_CHANGED:
      return action.payload;
    default:
      return state;
  }
};
export default reducer;