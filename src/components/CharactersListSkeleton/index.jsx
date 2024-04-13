import React from 'react';
import {
  AspectRatio, FlexBox, SkeletonRectangle, SkeletonTypography, Orientation, Size, Typography, ThumbnailVariant,
} from '@lumx/react';

const CharactersListSkeleton = () => (
	<section className="lumx-spacing-padding-horizontal-huge">
		<FlexBox orientation="vertical" vAlign="space-between" gap="medium">
			{Array.from({ length: 4 }).map((_, index) => (
				<FlexBox className="lumx-spacing-padding-big" orientation={Orientation.horizontal} gap="huge">
					<SkeletonRectangle theme="light" width={Size.xl} aspectRatio={AspectRatio.square} variant={ThumbnailVariant.rounded} />
					<FlexBox fillSpace orientation="vertical" vAlign="space-between" gap="medium">
						<SkeletonTypography theme="light" typography={Typography.headline} />
						<SkeletonTypography theme="light" typography={Typography.body1} />
						<SkeletonTypography theme="light" typography={Typography.caption} width="60%" />
					</FlexBox>
				</FlexBox>
			))}
		</FlexBox>
	</section>
);

export default CharactersListSkeleton;
