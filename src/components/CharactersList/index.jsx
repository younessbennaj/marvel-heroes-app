import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { mdiSearchWeb, mdiAlertCircle } from '@lumx/icons';
import {
  FlexBox, Heading, Icon, Size, Text,
} from '@lumx/react';
import CharactersListItem from '../CharactersListItem';
import CharactersListSkeleton from '../CharactersListSkeleton';
import EmptyStatePlaceholder from '../EmptyStatePlaceholder';

axios.defaults.baseURL = 'http://gateway.marvel.com/v1/public';
axios.defaults.params = {
  apikey: process.env.REACT_APP_MARVEL_API_KEY,
};

const fetchCharacters = async (query) => {
  const response = await axios.get('/characters', {
    params: {
      limit: 4,
      nameStartsWith: query,
      orderBy: '-modified',
      // offset: 4,
    },
  });
  return response.data.data.results;
};

const useCharactersQuery = ({ query }) => useQuery({
  enabled: !!query,
  queryKey: ['characters', query],
  queryFn: () => fetchCharacters(query),
});

const CharactersList = ({ query }) => {
  const { data: characters, isLoading, error } = useCharactersQuery({ query });

  if (isLoading) {
    return (<CharactersListSkeleton />);
  }
  if (error) {
    return (
	<EmptyStatePlaceholder
		icon={mdiAlertCircle}
		title="An error occurred"
		description="Please try again later"
	/>
    );
  }

  if (!characters) {
    return (
	<EmptyStatePlaceholder
		icon={mdiSearchWeb}
		title="Explore Marvel Comics Heroes universe"
		description="Dive into the dazzling domain of all the classic characters you love - and those you’ll soon discover!"
	/>
    );
  }

  if (characters.length === 0) {
    return (
	<EmptyStatePlaceholder
		icon={mdiAlertCircle}
		title="No results found"
		description="Try searching for another character"
	/>
    );
  }

  return (
	<section className="lumx-spacing-padding-horizontal-huge">
		<FlexBox orientation="vertical" vAlign="space-between" gap="medium">
			{characters && characters.map((character) => (
				<CharactersListItem
					comicsAvailable={character.comics.available}
					seriesAvailable={character.series.available}
					storiesAvailable={character.stories.available}
					description={character.description}
					key={character.id}
					image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
					name={character.name}
				/>
			))}
		</FlexBox>
	</section>
  );
};

export default CharactersList;
