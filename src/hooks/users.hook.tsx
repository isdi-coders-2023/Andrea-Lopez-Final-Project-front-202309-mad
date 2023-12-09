import { useDispatch, useSelector } from 'react-redux';
import { AppDispach, RootState } from '../store/store';
import { UserLogin } from '../entities/user';
import { loginThunk } from '../slice/users.thunk';
import { actions } from '../slice/users.slice';
import { UsersRepo } from '../services/api.repo.users';
export function usersHook() {
  const dispatch = useDispatch<AppDispach>();
  const repo = new UsersRepo();
  const { loggedUser } = useSelector((state: RootState) => state.usersState);

  const register = (newUser: FormData) => {
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
