import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BACK_URI, COMMAND_ID } from './AuthConfig'
import { AuthData } from 'src/models/auth'
import { AuthSuccess } from './AuthSuccess'
import { RtkState } from 'src/store/store'
import { Profile } from 'src/models/profile'

export const authApi = createApi({
    reducerPath: 'auth',
    baseQuery: fetchBaseQuery({
        baseUrl: BACK_URI,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RtkState).token

            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            return headers
        },
    }),
    endpoints: (builder) => ({
        rtkGetProfile: builder.mutation<Profile, void>({
            query: () => '/profile',
        }),
        rtkSignIn: builder.mutation<AuthSuccess, AuthData>({
            query: (auth: AuthData) => ({
                url: '/signin',
                method: 'POST',
                body: auth
            }),
        }),
        rtkSignUp: builder.mutation({
            query: (auth: AuthData) => ({
                url: '/signup',
                method: 'POST',
                body: {
                    email: auth.email,
                    password: auth.password,
                    commandId: COMMAND_ID
                }
            }),
        }),
    }),
 })

 export const { useRtkGetProfileMutation, useRtkSignInMutation, useRtkSignUpMutation  } = authApi;

