export interface Profile {
  id: string;
  name?: string;
  email: string;
  signUpDate: string;
  commandId: string;
}

export interface UpdateProfile {
  name: string;
}
