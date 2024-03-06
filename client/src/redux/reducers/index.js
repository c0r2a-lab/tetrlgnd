import { combineReducers } from "redux";
import { sockets } from "./sockets";
import { auths } from "./auths"


// import reducers
export default combineReducers({
	// reducers
	auths,
	sockets
});