import { useMutation, useQueryClient } from "react-query"
import { AuthData } from "src/models/auth";
import { BACK_URI, COMMAND_ID } from "./AuthConfig";
import { AuthSuccess } from "./AuthSuccess";
import { Profile } from "src/models/profile";


export const useSignIn = (onSuccess: (response: AuthSuccess) => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (auth: AuthData) => {
      const response = await fetch(`${BACK_URI}signin`,
        {
          method: 'POST',
          body: JSON.stringify(auth),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      );
      return await response.json();
    },
    onSuccess: (response) => {
        onSuccess(response)
    },
  })
}

export const useSignUp = (onSuccess: (response: AuthSuccess) => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (auth: AuthData) => {
      const response = await fetch(`${BACK_URI}signup`,
        {
          method: 'POST',
          body: JSON.stringify({
            email: auth.email,
            password: auth.password,
            commandId: COMMAND_ID
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      );
      return await response.json();
    },
    onSuccess: (response) => {
        onSuccess(response)
    },
  })
}

export const useProfile = (onSuccess: (response: Profile) => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (token: string) => {
      const response = await fetch(`${BACK_URI}profile`,
        {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      );
      return await response.json();
    },
    onSuccess: (response) => {
        onSuccess(response)
    },
  })
}