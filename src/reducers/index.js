import { WITHDRAW_MONEY, DEPOSIT_MONEY, SET_USER_PROFILE } from "../actions/types";

export default (state, action) => {
    switch (action.type) {
        case WITHDRAW_MONEY:
            console.log(action.amount);    
            return {
                ...state,
                totalAmount: state.totalAmount - action.payload
            };
        case DEPOSIT_MONEY:
            return {
                ...state,
                totalAmount: parseInt(state.totalAmount, 0) + parseInt(action.payload, 0)
            };
        case SET_USER_PROFILE:
            return {
                ...action.payload,
                isLoading: false
            }
        default:
            return state
    
    }
}