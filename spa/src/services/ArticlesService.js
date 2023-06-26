import { HOST } from './FetchConfig'

const ArticlesService = {
  get: () => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(`${HOST}/articles`);
        const data = await response.json();
        resolve(data);
      } catch(error) {
        reject(error);
      }
    });
  },

  show: (id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(`${HOST}/articles/${id}`);
        const data = await response.json();
        resolve(data);
      } catch(error) {
        reject(error);
      }
    });
  }
}

export default ArticlesService
