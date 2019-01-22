export default (state, action) => {
    switch (action.type) {
        case 'WITHDRAW_MONEY':
            console.log(action.amount);    
            return {
                ...state,
                totalAmount: state.totalAmount - action.amount
            };
        case 'DEPOSIT_MONEY':
            return {
                ...state,
                totalAmount: parseInt(state.totalAmount, 0) + parseInt(action.amount, 0)
            };
        default:
            return state
    
    }
}