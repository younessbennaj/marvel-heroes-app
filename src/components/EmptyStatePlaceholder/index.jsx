import React from 'react';
import {
  FlexBox, Heading, Icon, Size, Text,
} from '@lumx/react';

const EmptyStatePlaceholder = ({
  icon, title, description,
}) => (
	<FlexBox orientation="vertical" hAlign="center" vAlign="center" style={{ height: '500px' }} gap="huge">
		<Icon icon={icon} size={Size.l} />
		<Heading as="h4">{title}</Heading>
		<Text as="p">{description}</Text>
	</FlexBox>
);

export default EmptyStatePlaceholder;
