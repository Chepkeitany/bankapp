import { WITHDRAW_MONEY, DEPOSIT_MONEY, FETCH_USER_PROFILE, SET_USER_PROFILE } from "./types";

// Action Creators
// Using ES6 arrow functions
export const withdrawMoney = (amount) => ({
        type: WITHDRAW_MONEY,
        amount: amount
    });
export const depositMoney = (amount) => ({
        type: DEPOSIT_MONEY,
        amount: amount
    });

export const fetchUserProfile = () => ({
    type: FETCH_USER_PROFILE
});

export const setUserProfile = data => ({
    type: SET_USER_PROFILE,
    payload: data
})