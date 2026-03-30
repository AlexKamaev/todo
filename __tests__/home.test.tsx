import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { HomeClient } from '@/components/HomeClient';

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

    const todos = screen.getAllByTestId('todo-preview');

    expect(todos).toHaveLength(3);
  });

  it('sorts todos by title when SortButton clicked', async () => {
    render(<HomeClient todos={mockTodos} />);

    const sortButton = screen.getByTestId('sort-button');

    fireEvent.click(sortButton);

    await waitFor(() => {
      const previews = screen.getAllByTestId('todo-preview-title');
      const titles = previews.map((el) => el.textContent);

      expect(titles).toEqual(['A', 'B', 'C']);
    });

    fireEvent.click(sortButton);

    await waitFor(() => {
      const previews = screen.getAllByTestId('todo-preview-title');
      const titles = previews.map((el) => el.textContent);

      expect(titles).toEqual(['C', 'B', 'A']);
    });

    fireEvent.click(sortButton);

    await waitFor(() => {
      const previews = screen.getAllByTestId('todo-preview-title');
      const titles = previews.map((el) => el.textContent);

      expect(titles).toEqual(['B', 'C', 'A']);
    });
  });

  it('filters todos when filter is triggered', async () => {
    render(<HomeClient todos={mockTodos} />);

    const filterButton = screen.getByTestId('show-filter');

    fireEvent.click(filterButton);

    const completedFilter = screen.getByTestId('filter-by-completed');
    fireEvent.click(completedFilter);

    await waitFor(() => {
      const todos = screen.getAllByTestId('todo-preview');

      expect(todos).toHaveLength(1);
    });

    fireEvent.click(filterButton);

    const incompletedFilter = screen.getByTestId('filter-by-incompleted');
    fireEvent.click(incompletedFilter);

    await waitFor(() => {
      const todos = screen.getAllByTestId('todo-preview');

      expect(todos).toHaveLength(2);
    });

    const allFilter = screen.getByTestId('filter-by-all');
    fireEvent.click(allFilter);

    await waitFor(() => {
      const todos = screen.getAllByTestId('todo-preview');

      expect(todos).toHaveLength(3);
    });
  });

  it('filters todos by searchText', async () => {
    render(<HomeClient todos={mockTodos} />);

    const searchInput = screen.getByTestId('search-input');
    fireEvent.input(searchInput, { target: { value: 'C' } });

    await waitFor(() => {
      const todos = screen.getAllByTestId('todo-preview');

      expect(todos).toHaveLength(1);
    });
  });
});
