import React, { useCallback, useState } from 'react';
import { mdiSearchWeb, mdiAlertCircle } from '@lumx/icons';
import {
  FlexBox,
} from '@lumx/react';
import CharactersListItem from '../CharactersListItem';
import CharactersListSkeleton from '../CharactersListSkeleton';
import EmptyStatePlaceholder from '../EmptyStatePlaceholder';
import Pagination from '../Pagination';
import CHARACTERS_RESULT_LIMIT from '../../constants';
import useCharactersQuery from '../../queries';

const CharactersList = ({ query }) => {
  const [page, setPage] = useState(1);
  const {
    data, isLoading, error, isPlaceholderData,
  } = useCharactersQuery({ query, page });

  const onPageChange = useCallback((pageNumber) => {
    setPage(pageNumber);
  }, [setPage]);

  if (error) {
    return (
	<EmptyStatePlaceholder
		icon={mdiAlertCircle}
		title="An error occurred"
		description="Please try again later"
	/>
    );
  }

  if (!data?.characters && !isLoading) {
    return (
	<EmptyStatePlaceholder
		icon={mdiSearchWeb}
		title="Explore Marvel Comics Heroes universe"
		description="Dive into the dazzling domain of all the classic characters you love - and those you’ll soon discover!"
	/>
    );
  }

  if (data?.characters.length === 0 && !isLoading) {
    return (
	<EmptyStatePlaceholder
		icon={mdiAlertCircle}
		title="No results found"
		description="Try searching for another character"
	/>
    );
  }

  return (
	<section className="lumx-spacing-padding-horizontal-huge characters-list-container">
		{(isLoading || isPlaceholderData) && <CharactersListSkeleton />}

		{!isLoading && !isPlaceholderData && (
		<FlexBox className="characters-list" orientation="vertical" vAlign="space-between" gap="tiny">
			{data.characters.map((character) => (
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
		)}
		{data && data.total > CHARACTERS_RESULT_LIMIT && (
		<Pagination currentPage={page} onChange={onPageChange} total={data?.total} pageSize={CHARACTERS_RESULT_LIMIT} />
		)}
	</section>
  );
};

export default CharactersList;
