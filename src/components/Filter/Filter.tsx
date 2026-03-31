'use client';

import { IFilterProps, SortType } from '@/types';
import { useState } from 'react';
import { SearchBox } from './SearchBox';
import { SortButton } from './SortButton';
import { CompletedDropdown } from './CompletedDropdown';

export function Filter({ onFilterChanged }: IFilterProps) {
    const [searchText, setSearchText] = useState<string>('');
    const [completed, setCompleted] = useState<boolean | undefined>(undefined);
    const [sorting, setSorting] = useState<SortType>('none');

    function onSearchTextChanged(newSearchText: string): void {
        setSearchText(newSearchText);

        onFilterChanged(newSearchText, completed, sorting);
    }

    function onSortingChanged(newSorting: SortType): void {
        setSorting(newSorting);

        onFilterChanged(searchText, completed, newSorting);
    }

    function onCompletedChanged(newCompleted: boolean | undefined): void {
        if (newCompleted === completed) return;

        setCompleted(newCompleted);

        onFilterChanged(searchText, newCompleted, sorting);
    }

    return (
        <nav className="alx-level">
            <div className="alx-level-left"></div>
            <div className="alx-level-right alx-is-flex-direction-row">
                <div className="alx-level-item">
                    <div className="alx-field alx-has-addons">
                        <p className="alx-control alx-has-icons-right">
                            <SearchBox
                                searchText={searchText}
                                onSearchTextChanged={onSearchTextChanged}
                            />
                        </p>
                    </div>
                </div>
                <div className="alx-level-item">
                    <CompletedDropdown
                        completed={completed}
                        onCompletedChanged={onCompletedChanged}
                    />
                </div>
                <div className="alx-level-item">
                    <SortButton
                        sorting={sorting}
                        onSortingChanged={onSortingChanged}
                    />
                </div>
            </div>
        </nav>
    );
}
