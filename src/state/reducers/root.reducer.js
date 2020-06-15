import { combineReducers } from "redux";
import countReducer from "./counter.reducer";
import colorReducer from "./color.reducer";
import personReducer from './person.reducer'

const rootReducer = combineReducers({
    count: countReducer,
    person: personReducer,
    color: colorReducer
  });
  
  export default rootReducer;