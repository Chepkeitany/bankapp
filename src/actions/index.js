import { WITHDRAW_MONEY, DEPOSIT_MONEY, FETCH_USER_PROFILE, SET_USER_PROFILE } from "./types";

// Action Creators
// Using ES6 arrow functions
export const withdrawMoney = payload => ({
        type: WITHDRAW_MONEY,
        payload
    });
export const depositMoney = payload => ({
        type: DEPOSIT_MONEY,
        payload
    });

export const fetchUserProfile = () => ({
    type: FETCH_USER_PROFILE
});

export const setUserProfile = data => ({
    type: SET_USER_PROFILE,
    payload: data
})