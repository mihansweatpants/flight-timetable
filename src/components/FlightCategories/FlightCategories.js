import React from 'react';
import { Options, OptionTab } from './styles';
import { capitalize } from 'helpers';

const categories = ['departures', 'arrivals', 'delayed'];

export default ({ activeCategory, handleChangeCategory }) => (
    <Options>
        {categories.map(category => (
            <OptionTab
                isActive={category === activeCategory}
                onClick={() => handleChangeCategory(category)}
                key={category}
            >
                {capitalize(category)}
            </OptionTab>
        ))}
    </Options>
);
