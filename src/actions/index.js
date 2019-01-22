// Action Creators
// Using ES6 arrow functions
export const withdrawMoney = (amount) => ({
        type: 'WITHDRAW_MONEY',
        amount: amount
    });
export const depositMoney = (amount) => ({
        type: 'DEPOSIT_MONEY',
        amount: amount
    });
