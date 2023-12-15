import { serverUrl } from '../config';
import { Film } from '../entities/film';

export class FilmsRepo {
  apiUrl = serverUrl + '/films';
  constructor(public token: string) {}

  async getFilms(): Promise<Film[]> {
    const response = await fetch(this.apiUrl);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async createFilm(newFilm: FormData): Promise<Film> {
    const response = await fetch(this.apiUrl, {
      method: 'POST',
      body: newFilm,
      headers: { Authorization: 'Bearer ' + this.token },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }

  async updateFilm(id: string, updatedFilm: FormData): Promise<Film> {
    const finalUrl = `${this.apiUrl}/${id}`;
    const response = await fetch(finalUrl, {
      method: 'POST',
      body: updatedFilm,
      headers: {
        Authorization: 'Bearer ' + this.token,
      },
    });
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }
}

// async deleteFilm(id: Film['id']): Promise<Film[]> {
//   const finalUrl = `${this.apiUrl}/${id}`;
//   const response = await fetch(finalUrl, {
//     method: 'DELETE',
//     headers: { Authorization: 'Bearer' + this.token },
//   });
//   if (!response.ok)
//     throw new Error(response.status + ' ' + response.statusText);
//   return response.json();
// }
