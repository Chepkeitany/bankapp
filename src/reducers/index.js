export default (state, action) => {
    switch (action.type) {
        case 'WITHDRAW_MONEY':
            console.log(action.amount);    
            return {
                ...state,
                totalAmount: state.totalAmount - action.amount
            }     
        default:
            return state
    
    }
}