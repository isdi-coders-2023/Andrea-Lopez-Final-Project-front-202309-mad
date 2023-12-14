import { useSelector } from 'react-redux';
import { List } from '../components/list/list';
import { RootState } from '../store/store';

export default function HomePage() {
  const { films } = useSelector((state: RootState) => state.filmsState);
  return (
    <>
      <List filmsToRender={films}></List>
    </>
  );
}
