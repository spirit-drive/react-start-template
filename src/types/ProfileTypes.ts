export interface Profile {
  id: string;
  name?: string;
  email: string;
  signUpDate: string;
  commandId: string;
}

export interface UpdateProfileBody {
  name: string;
}
