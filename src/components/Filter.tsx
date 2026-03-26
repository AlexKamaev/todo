'use client';

import { useState } from 'react';

export function Filter() {
  const [searchText, setSearchText] = useState<string>('');

  const [filterDropdownVisible, setFilterDropDownVisible] =
    useState<boolean>(false);

  function onSearchTextInput(e: React.InputEvent<HTMLInputElement>): void {
    setSearchText(e.currentTarget.value);
  }

  function onFilterDropdownButtonClick(
    e: React.MouseEvent<HTMLButtonElement>,
  ): void {
    setFilterDropDownVisible(!filterDropdownVisible);
  }

  return (
    <nav className="alx-level">
      <div className="alx-level-left"></div>
      <div className="alx-level-right alx-is-flex-direction-row">
        <div className="alx-level-item">
          <div className="alx-field alx-has-addons">
            <p className="alx-control alx-has-icons-right">
              <input
                className="alx-input"
                type="text"
                placeholder="Find a task..."
                value={searchText}
                onInput={onSearchTextInput}
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
                className="alx-button"
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
                <a href="#" className="alx-dropdown-item">
                  Completed
                </a>
                <a href="#" className="alx-dropdown-item">
                  Incompleted
                </a>
                <hr className="alx-dropdown-divider" />
                <a href="#" className="alx-dropdown-item">
                  All
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="alx-level-item">
          <button className="alx-button">
            <span className="alx-icon-text">
              <span className="alx-icon">
                <i className="fas fa-moon"></i>
              </span>
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
