import { useEffect } from 'react';

import { usersHook } from '../hooks/users/users.hook';
import { Card } from './card/card';
import { Film } from '../entities/film';
import { useFilms } from '../hooks/film/use.films';

export default function UserFilms() {
  const { films } = useFilms();

  const { loggedUser } = usersHook();

  const { loadFilms, filmUpdateState } = useFilms();

  useEffect(() => {
    loadFilms();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filmUpdateState]);
  console.log('film', films);

  const userFilms = films.filter(
    (item: Film) => item.author.id === loggedUser?.id
  );
  console.log(userFilms);
  console.log(loggedUser);

  return (
    <div>
      <h3 data-testid="films">{loggedUser?.name}'s films</h3>
      <div className="list-my-films">
        {userFilms.length > 0 ? (
          userFilms.map((item: Film) => <Card key={item.id} film={item}></Card>)
        ) : (
          <>
            <p>{loggedUser?.name} You dont have any film yet</p>
          </>
        )}
      </div>
    </div>
  );
}
