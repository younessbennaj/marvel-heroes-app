import React from 'react';
import {
  Link,
  FlexBox,
} from '@lumx/react';

const Pagination = ({
  onChange, total, pageSize, currentPage,
}) => {
  const totalPages = Math.ceil(total / pageSize);

  const pageItemData = Array.from({ length: totalPages }).map((_, index) => ({
    id: index,
    page: index + 1,
    isActive: currentPage === index + 1,
  }));

  return (
	<FlexBox className="lumx-spacing-padding-big" orientation="horizontal" gap="huge" hAlign="center" vAlign="center" wrap>
		{pageItemData.map(({ id, page, isActive }) => (
			<Link isDisabled={isActive} color="primary" key={id} onClick={() => onChange(page)} type="button">{page}</Link>
		))}
	</FlexBox>
  );
};

export default Pagination;
