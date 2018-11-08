import React from 'react';
import { SearchBar } from './styles';

export default ({ search, handleSearch }) => (
    <SearchBar>
        <input
            type="text"
            placeholder="Search by flight number"
            onChange={e => handleSearch(e.target.value)}
        />
        <span className="focus-border" />
    </SearchBar>
);
