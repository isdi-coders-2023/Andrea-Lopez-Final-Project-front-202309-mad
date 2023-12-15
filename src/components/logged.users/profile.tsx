import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { List } from '../list/list';

export default function Profile() {
  const { loggedUser } = useSelector((state: RootState) => state.usersState);
  console.log(loggedUser);
  return (
    <>
      <h3>{loggedUser?.name}</h3>
      <List filmsToRender={loggedUser!.films}></List>
    </>
  );
}
