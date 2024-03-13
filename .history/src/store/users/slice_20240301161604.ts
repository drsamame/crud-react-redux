import { createSlice } from '@reduxjs/toolkit'

export interface User {
    name: string
    email: string
    github: string
}

export interface UserWidthId extends User {
    id: string
}

export const userSlice = createSlice({
    name: 'users',
    initialState: ???,
    reducers: {}
})