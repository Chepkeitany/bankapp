// Action Creators

export default function withdrawMoney(amount) {
    return {
        type: 'WITHDRAW_MONEY',
        amount: amount
    }
}