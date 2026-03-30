import { ICompletedDropdownProps } from '@/types';
import { useState } from 'react';

export function CompletedDropdown({
  completed,
  onCompletedChanged,
}: ICompletedDropdownProps) {
  function onMenuItemClick(newCompleted: boolean | undefined): void {
    onCompletedChanged(newCompleted);

    setFilterDropDownVisible(false);
  }

  function renderDropdownLink(text: string, newCompleted: boolean | undefined) {
    return (
      <a
        data-testid={`filter-by-${text.toLowerCase()}`}
        className="alx-dropdown-item alx-icon-text"
        onClick={() => onMenuItemClick(newCompleted)}>
        <span>{text}</span>
        {newCompleted === completed && (
          <span className="alx-icon alx-has-text-success">
            <i className="fas fa-check"></i>
          </span>
        )}
      </a>
    );
  }

  function toggleDropdownVisibility(): void {
    setFilterDropDownVisible(!filterDropdownVisible);
  }

  const [filterDropdownVisible, setFilterDropDownVisible] =
    useState<boolean>(false);

  return (
    <div
      className={`alx-dropdown ${filterDropdownVisible ? 'alx-is-active' : ''}`}>
      <div className="alx-dropdown-trigger">
        <button
          data-testid="show-filter"
          className={`alx-button ${completed !== undefined ? 'alx-is-active' : ''}`}
          aria-haspopup="true"
          onClick={toggleDropdownVisibility}>
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
  );
}
