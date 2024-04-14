import { useQuery, keepPreviousData } from '@tanstack/react-query';
import fetchCharacters from '../api/characters';

const useCharactersQuery = ({ query, page }) => useQuery({
  enabled: !!query,
  queryKey: ['characters', query, page],
  queryFn: () => fetchCharacters({ query, page }),
  placeholderData: keepPreviousData,
});

export default useCharactersQuery;
