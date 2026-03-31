import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { TodoPreview } from '@/components/Todo/TodoPreview';

const mockTodo = {
  id: 1,
  title: 'Buy milk and bread',
  completed: false,
};

describe('TodoPreview', () => {
  it('renders todo title without searchText', () => {
    render(
      <TodoPreview
        todo={mockTodo}
        searchText={undefined}
        onClick={jest.fn()}
      />,
    );

    expect(screen.getByText(/Buy milk and bread/i)).toBeInTheDocument();
  });

  it('highlights searchText in title', () => {
    render(
      <TodoPreview todo={mockTodo} searchText="milk" onClick={jest.fn()} />,
    );

    const highlighted = screen.getByText(/milk/i);
    expect(highlighted).toHaveClass('alx-has-background-warning');
  });

  it('renders task id in header', () => {
    render(
      <TodoPreview
        todo={mockTodo}
        searchText={undefined}
        onClick={jest.fn()}
      />,
    );

    expect(screen.getByText(/Task #1/i)).toBeInTheDocument();
  });

  it('calls onClick with todo id when clicked', () => {
    const handleClick = jest.fn();

    render(
      <TodoPreview
        todo={mockTodo}
        searchText={undefined}
        onClick={handleClick}
      />,
    );

    fireEvent.click(screen.getByTestId('todo-preview'));
    expect(handleClick).toHaveBeenCalledWith(1);
  });

  it('renders status when todo is not completed', () => {
    render(
      <TodoPreview
        todo={mockTodo}
        searchText={undefined}
        onClick={jest.fn()}
      />,
    );

    const statusIcon = screen.getByLabelText('status-text');

    expect(statusIcon).toHaveTextContent('in progress');
  });

  it('renders status when todo is completed', () => {
    render(
      <TodoPreview
        todo={{ ...mockTodo, completed: true }}
        searchText={undefined}
        onClick={jest.fn()}
      />,
    );

    const statusIcon = screen.getByLabelText('status-text');

    expect(statusIcon).toHaveTextContent('completed');
  });
});
