import initState from '../state'

let user = (state = initState.user, action) => {
	switch (action.type) {
		case 'CHANGE_NAME':
			return {
				...state,
				name: action.data
			}
		default:
			return state
	}
}

export default user