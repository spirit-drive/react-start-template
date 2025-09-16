import { Profile } from "src/models/profile"

export interface AuthSuccess {
    token: string
    profile: Profile
}