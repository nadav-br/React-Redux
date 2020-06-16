export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";

export const increment = n => ({
  type: INCREMENT,
  payload: n
});

export const decrement = () => ({
   type: DECREMENT 
});

export const reset = () => ({
  type: RESET 
});
