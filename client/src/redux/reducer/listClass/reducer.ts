import { GET_LIST_CLASS } from "./actionTypes";

const initializeState: any = []

export default function reducer(state=initializeState, action: any) {
	switch (action.type) {
		case GET_LIST_CLASS: {
			return [ ...action.payload ];
		} default: {
      return state;
		}
  }
}
