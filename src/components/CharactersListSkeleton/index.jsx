import React from 'react';
import {
  AspectRatio, FlexBox, SkeletonRectangle, SkeletonTypography, Orientation, Size, Typography, ThumbnailVariant,
} from '@lumx/react';

const CharactersListSkeleton = () => (
	<FlexBox style={{ flexGrow: 1 }} orientation="vertical" vAlign="space-between" gap="tiny">
		{[1, 2, 3, 4].map((id) => (
			<FlexBox key={id} className="lumx-spacing-padding-big" orientation={Orientation.horizontal} gap="huge">
				<SkeletonRectangle theme="light" width={Size.xl} aspectRatio={AspectRatio.square} variant={ThumbnailVariant.rounded} />
				<FlexBox fillSpace orientation="vertical" vAlign="space-between" gap="tiny">
					<SkeletonTypography theme="light" typography={Typography.headline} />
					<SkeletonTypography theme="light" typography={Typography.body1} />
					<SkeletonTypography theme="light" typography={Typography.caption} width="60%" />
				</FlexBox>
			</FlexBox>
		))}
	</FlexBox>
);

export default CharactersListSkeleton;
