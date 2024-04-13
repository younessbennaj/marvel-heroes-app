import React from 'react';
import {
  GenericBlock, FlexBox, Heading, InlineList, Thumbnail, ThumbnailVariant, Size, Text,
} from '@lumx/react';

const CharactersListItem = ({
  comicsAvailable, image, description, name, seriesAvailable, storiesAvailable,
}) => (
	<GenericBlock as="div" className="lumx-spacing-padding-big" gap="huge" orientation="horizontal">
		<GenericBlock.Figure>
			<Thumbnail aspectRatio="square" image={image} alt="l" size={Size.xl} variant={ThumbnailVariant.rounded} />
		</GenericBlock.Figure>
		<GenericBlock.Content orientation="vertical">
			<FlexBox orientation="vertical" vAlign="space-between" gap="medium">
				<Heading as="h3">{name}</Heading>
				<Text as="p" typography="body1" color="dark" colorVariant="L2">
					{description || 'no description available'}
				</Text>
				<InlineList typography="body1" color="dark">
					<Text as="span">
						#comics
						{' '}
						{comicsAvailable}
					</Text>
					<Text as="span">
						#series
						{' '}
						{seriesAvailable}
					</Text>
					<Text as="span">
						#stories
						{' '}
						{storiesAvailable}
					</Text>
				</InlineList>
			</FlexBox>
		</GenericBlock.Content>
	</GenericBlock>
);

export default CharactersListItem;
