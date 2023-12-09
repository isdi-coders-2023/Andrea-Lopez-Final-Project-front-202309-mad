import { useDispatch, useSelector } from 'react-redux';
import { UserApiRepo } from '../services/api.repo.users';
import { AppDispach, RootState } from '../store/store';
import { User, UserLogin } from '../entities/user';
import { loginThunk } from '../slice/users.thunk';
import { actions } from '../slice/users.slice';
export function usersHook() {
  const dispatch = useDispatch<AppDispach>();
  const repo = new UserApiRepo();
  const { loggedUser } = useSelector((state: RootState) => state.usersState);

  const register = (newUser: Partial<User>) => {
    repo.createUser(newUser);
  };

  const login = (userLogin: UserLogin) => {
    dispatch(loginThunk({ userLogin, repo }));
  };

  const logout = () => {
    dispatch(actions.logout());
  };

  return {
    logout,
    login,
    register,
    loggedUser,
  };
}
