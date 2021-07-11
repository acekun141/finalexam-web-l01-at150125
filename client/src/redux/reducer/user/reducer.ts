import { GET_INFO } from "./actionTypes";

const initializeState = {
	username: "",
	id: "",
	role: "",
	first_name: "",
	last_name: "",
	phone_number: "",
	avatar: ""	
}

export default function reducer(state=initializeState, action: any) {
	switch (action.type) {
		case GET_INFO: {
			return { ...state, ...action.payload.user };
		} default: {
      return state;
		}
  }
}