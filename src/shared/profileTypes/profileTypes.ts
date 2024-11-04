export type TProfile = {
  id: string;
  name?: string;
  email: string;
  signUpDate: string;
  commandId?: string;
};

export function isTProfile(rawAnswer: unknown): rawAnswer is TProfile {
  const rawAnswerTest = rawAnswer as TProfile;
  if (rawAnswerTest.hasOwnProperty('id') &&
    rawAnswerTest.hasOwnProperty('email') &&
    rawAnswerTest.hasOwnProperty('signUpDate')) {
    return true;
  } else {
    return false;
  }
}