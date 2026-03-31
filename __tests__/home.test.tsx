import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { HomeClient } from '@/components/HomeClient';
import { HomeTestHelper } from './helpers/home.test-helper';

const mockTodos = [
    { id: 1, title: 'B', completed: false },
    { id: 2, title: 'C', completed: true },
    { id: 3, title: 'A', completed: false },
];

jest.mock('../src/services/DataService', () => ({
    DataService: {
        GetTodos: (completed?: boolean) => {
            if (completed !== undefined)
                return mockTodos.filter((todo) => todo.completed === completed);
            return mockTodos;
        },
    },
}));

jest.mock('../src/utils/delay', () => ({
    delay: jest.fn(() => Promise.resolve()),
}));

jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
}));

describe('HomeClient', () => {
    it('renders initial todos list', () => {
        render(<HomeClient todos={mockTodos} />);

        expect(HomeTestHelper.getTodos()).toHaveLength(3);
    });

    it('sorts todos by title when SortButton clicked', async () => {
        render(<HomeClient todos={mockTodos} />);

        const sortButton = screen.getByTestId('sort-button');

        fireEvent.click(sortButton);

        await waitFor(() => {
            expect(HomeTestHelper.getTodoPreviewTitleTexts()).toEqual([
                'A',
                'B',
                'C',
            ]);
        });

        fireEvent.click(sortButton);

        await waitFor(() => {
            expect(HomeTestHelper.getTodoPreviewTitleTexts()).toEqual([
                'C',
                'B',
                'A',
            ]);
        });

        fireEvent.click(sortButton);

        await waitFor(() => {
            expect(HomeTestHelper.getTodoPreviewTitleTexts()).toEqual([
                'B',
                'C',
                'A',
            ]);
        });
    });

    it('filters todos when filter is triggered', async () => {
        render(<HomeClient todos={mockTodos} />);

        fireEvent.click(HomeTestHelper.getFilterOption('completed'));

        await waitFor(() => {
            expect(HomeTestHelper.getTodos()).toHaveLength(1);
        });

        fireEvent.click(HomeTestHelper.getFilterOption('incompleted'));

        await waitFor(() => {
            expect(HomeTestHelper.getTodos()).toHaveLength(2);
        });

        fireEvent.click(HomeTestHelper.getFilterOption('all'));

        await waitFor(() => {
            expect(HomeTestHelper.getTodos()).toHaveLength(3);
        });
    });

    it('filters todos by searchText', async () => {
        render(<HomeClient todos={mockTodos} />);

        fireEvent.input(HomeTestHelper.getSearchInput(), {
            target: { value: 'C' },
        });

        await waitFor(() => {
            expect(HomeTestHelper.getTodos()).toHaveLength(1);
        });
    });
});
