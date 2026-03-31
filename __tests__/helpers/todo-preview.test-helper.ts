import { screen } from '@testing-library/react';

export class TodoPreviewTestHelper {
    public static getTodo() {
        return screen.getByTestId('todo-preview');
    }

    public static getId() {
        return screen.getByTestId('todo-preview-id');
    }

    public static getTitle() {
        return screen.getByTestId('todo-preview-title');
    }

    public static getStatus() {
        return screen.getByLabelText('status-text');
    }
}
