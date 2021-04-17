interface IUserState {
  isLogged: boolean;
  userId: string | null;
  userToken: string | null;
  userEmail: string | null;
  userName: string | null;
}

export const userInitialState: IUserState = {
  isLogged: false,
  userId: null,
  userEmail: null,
  userName: null,
  userToken: null,
};