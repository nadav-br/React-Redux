export const COLOR_CHANGED = "COLOR_CHANGED";

export const RED = "RED";
export const GREEN = "GREEN";
export const BLUE = "BLUE";

export const changeColor = color => ({
  type: COLOR_CHANGED,
  payload: color
});