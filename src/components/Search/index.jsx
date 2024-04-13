import React, { useState } from 'react';
import { TextField, Theme } from '@lumx/react';
import { mdiMagnify } from '@lumx/icons';

const Search = ({ onSearch }) => {
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(text);
  };
  return (
	<form onSubmit={handleSubmit}>
		<TextField
			theme={Theme.dark}
			placeholder="Search ..."
			icon={mdiMagnify}
			onChange={(value) => setText(value)}
			value={text}
		/>
		<input type="submit" hidden />
	</form>
  );
};

export default Search;
