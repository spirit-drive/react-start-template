export type TProfile = {
    _id: string;
    signUpDate: string;
    email: string,
    password: string,
}

export type TRegisterProfile = {
    token: string;
    profile: TProfile;
}

export function isTRegisterProfile(rawAnswer: unknown): rawAnswer is TRegisterProfile {
    const rawAnswerTest = rawAnswer as TRegisterProfile;
    if (rawAnswerTest.hasOwnProperty('token') && rawAnswerTest.hasOwnProperty('profile')) {
        if (rawAnswerTest.profile.hasOwnProperty('_id') &&
            rawAnswerTest.profile.hasOwnProperty('signUpDate') &&
            rawAnswerTest.profile.hasOwnProperty('email') &&
            rawAnswerTest.profile.hasOwnProperty('password')) {
                return true;
        } else{
            return false;
        }
    }
    return false;
}