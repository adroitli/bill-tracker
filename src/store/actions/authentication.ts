import { action } from 'typesafe-actions';

export const authActions = {
  authenticate: (user: {email: string; password: string;}) => {
    return action("AUTHENTICATE", user);
  },
  unauthenticate: () => {
    return action("UNAUTHENTICATE");
  }
}