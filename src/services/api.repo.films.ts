import { serverUrl } from '../config';
import { Film } from '../entities/film';

export class FilmsRepo {
  apiUrl = serverUrl + '/films';

  async getAll(): Promise<Film[]> {
    const response = await fetch(this.apiUrl);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }
}
