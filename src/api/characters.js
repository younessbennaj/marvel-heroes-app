import { get } from '.';
import CHARACTERS_RESULT_LIMIT from '../constants';

const fetchCharacters = async ({ query, page }) => {
  const response = await get('characters', {
    limit: CHARACTERS_RESULT_LIMIT,
    nameStartsWith: query,
    orderBy: '-modified',
    offset: page > 1 ? (page - 1) * CHARACTERS_RESULT_LIMIT : 0,
  });
  return {
    characters: response.data.data?.results,
    total: response.data.data?.total,
  };
};

export default fetchCharacters;
