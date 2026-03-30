'use client';

import { IFilterProps, SortType } from '@/types';
import { useState } from 'react';
import { SearchBox } from './SearchBox';
import { SortButton } from './SortButton';
import { CompletedDropdown } from './CompletedDropdown';

let currentSort: SortType = 'none';

export function Filter({ onFilterChanged }: IFilterProps) {
  const [searchText, setSearchText] = useState<string>('');
  const [completed, setCompleted] = useState<boolean | undefined>(undefined);
  const [sorting, setSorting] = useState<SortType>(currentSort);

  function onSearchTextChanged(e: React.InputEvent<HTMLInputElement>): void {
    const newSearchText = e.currentTarget.value;

    setSearchText(newSearchText);

    onFilterChanged(newSearchText, completed, sorting);
  }

  function onSortingButtonClick(): void {
    let newSorting: SortType = 'none';

    if (sorting === 'none') {
      newSorting = 'asc';
    } else if (sorting === 'asc') {
      newSorting = 'desc';
    } else if (sorting === 'desc') {
      newSorting = 'none';
    }

    setSorting(newSorting);

    onFilterChanged(searchText, completed, newSorting);
  }

  function onSetCompletedValue(newCompleted: boolean | undefined): void {
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
            onCompletedChanged={onSetCompletedValue}
          />
        </div>
        <div className="alx-level-item">
          <SortButton
            sorting={sorting}
            onSortingChanged={onSortingButtonClick}
          />
        </div>
      </div>
    </nav>
  );
}
