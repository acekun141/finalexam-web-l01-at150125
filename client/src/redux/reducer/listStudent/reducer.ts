import { GET_LIST_STUDENT } from "./actionTypes";

const initializeState: any = []

export default function reducer(state=initializeState, action: any) {
	switch (action.type) {
		case GET_LIST_STUDENT: {
            console.log(action.payload);
			return [ ...action.payload ];
		} default: {
      return state;
		}
  }
}

