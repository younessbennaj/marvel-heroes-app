import React from 'react';
import { FlexBox, Alignment } from '@lumx/react';
import Search from '../Search';

const Header = ({ onSearch }) => (
	<header className="lumx-spacing-padding-big header">
		<FlexBox vAlign={Alignment.right}>
			<Search onSearch={onSearch} />
		</FlexBox>
	</header>
);

export default Header;
