import { screen } from '@testing-library/react';

export class HomeTestHelper {
    public static getTodos() {
        return screen.getAllByTestId('todo-preview');
    }

    public static getTodoPreviewTitles() {
        return screen.getAllByTestId('todo-preview-title');
    }

    public static getTodoPreviewTitleTexts() {
        const titles = this.getTodoPreviewTitles();

        return titles.map((el) => el.textContent);
    }

    public static getSortButton() {
        return screen.getByTestId('sort-button');
    }

    public static getFilterButton() {
        return screen.getByTestId('show-filter');
    }

    public static getFilterOption(
        filterType: 'completed' | 'incompleted' | 'all'
    ) {
        return screen.getByTestId(`filter-by-${filterType}`);
    }

    public static getSearchInput() {
        return screen.getByTestId('search-input');
    }
}
