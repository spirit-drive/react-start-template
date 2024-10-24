import { gql } from '@apollo/client';

export interface SignupData {
  profile: {
    signin: {
      token: string;
    };
  };
}

export interface ProfileData {
  id: string;
  name: string;
  email: string;
  signUpDate: string;
  commandId: string;
}

export interface SigninData {
  profile: {
    signin: {
      token: string;
      profile: ProfileData;
    };
  };
}

export interface ChangePasswordData {
  profile: {
    password: {
      change: {
        success: boolean;
      };
    };
  };
}

export interface ChangePasswordInput {
  input: {
    password: string;
    newPassword: string;
  };
}

export type UpdateProfileInput = {
  input: {
    name: string;
  };
};

export type UpdateProfileData = {
  name: string;
};

export const SIGN_UP = gql`
  mutation Signup($email: String!, $password: String!, $commandId: String!) {
    profile {
      signup(email: $email, password: $password, commandId: $commandId) {
        token
        profile {
          id
          name
          email
          signUpDate
          commandId
        }
      }
    }
  }
`;

export const SIGN_IN = gql`
  mutation Signin($email: String!, $password: String!) {
    profile {
      signin(email: $email, password: $password) {
        token
        profile {
          id
          name
          email
          signUpDate
          commandId
        }
      }
    }
  }
`;

export const CHANGE_PASS = gql`
  mutation Change($input: ChangePasswordInput!) {
    profile {
      password {
        change(input: $input) {
          success
        }
      }
    }
  }
`;

export const GET_PROFILE = gql`
  query Profile {
    profile {
      id
      name
      email
      signUpDate
      commandId
    }
  }
`;

export const UPDATE_PROFILE = gql`
  mutation Update($input: UpdateProfileInput!) {
    profile {
      update(input: $input) {
        id
        name
        email
        signUpDate
        commandId
      }
    }
  }
`;
