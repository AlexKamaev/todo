'use client';

import { IFilterProps, SortType } from '@/types';
import { useState } from 'react';
import { SearchBox } from './SearchBox';
import { SortButton } from './SortButton';

let currentSort: SortType = 'none';

export function Filter({ onFilterChanged }: IFilterProps) {
  const [searchText, setSearchText] = useState<string>('');
  const [completed, setCompleted] = useState<boolean | undefined>(undefined);
  const [sorting, setSorting] = useState<SortType>(currentSort);

  const [filterDropdownVisible, setFilterDropDownVisible] =
    useState<boolean>(false);

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

  function onFilterDropdownButtonClick(
    e: React.MouseEvent<HTMLButtonElement>,
  ): void {
    setFilterDropDownVisible(!filterDropdownVisible);
  }

  function onSetCompletedValue(newCompleted: boolean | undefined): void {
    if (newCompleted === completed) return;

    setCompleted(newCompleted);

    setFilterDropDownVisible(false);

    onFilterChanged(searchText, newCompleted, sorting);
  }

  function renderDropdownLink(text: string, newCompleted: boolean | undefined) {
    return (
      <a
        className="alx-dropdown-item alx-icon-text"
        onClick={() => onSetCompletedValue(newCompleted)}>
        <span>{text}</span>
        {newCompleted === completed && (
          <span className="alx-icon alx-has-text-success">
            <i className="fas fa-check"></i>
          </span>
        )}
      </a>
    );
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
              <span className="alx-icon alx-is-small alx-is-right">
                <i className="fas fa-magnifying-glass"></i>
              </span>
            </p>
          </div>
        </div>
        <div className="alx-level-item">
          <div
            className={`alx-dropdown ${filterDropdownVisible ? 'alx-is-active' : ''}`}>
            <div className="alx-dropdown-trigger">
              <button
                className={`alx-button ${completed !== undefined ? 'alx-is-active' : ''}`}
                aria-haspopup="true"
                onClick={onFilterDropdownButtonClick}>
                <span className="alx-icon-text">
                  <span className="alx-icon">
                    <i className="fas fa-filter"></i>
                  </span>
                </span>
              </button>
            </div>
            <div className="alx-dropdown-menu" role="menu">
              <div className="alx-dropdown-content">
                {renderDropdownLink('Completed', true)}
                {renderDropdownLink('Incompleted', false)}
                <hr className="alx-dropdown-divider" />
                {renderDropdownLink('All', undefined)}
              </div>
            </div>
          </div>
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
