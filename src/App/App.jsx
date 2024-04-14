import React, { useState } from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from '../components/Header';
import CharactersList from '../components/CharactersList';

const queryClient = new QueryClient();

function App() {
  const [query, setQuery] = useState('');
  const onSearch = (text) => {
    setQuery(text);
  };
  return (
	<>
		<QueryClientProvider client={queryClient}>
			<Router>
				<Header onSearch={onSearch} />
				<Switch>
					<Route
						exact
						path="/"
					>
						<CharactersList key={query} query={query} />
					</Route>
				</Switch>
			</Router>
		</QueryClientProvider>
	</>
  );
}

export default App;
