import { JSX } from 'react';

export function renderStatus(completed: boolean): JSX.Element {
    return (
        <span
            className={`alx-tag ${completed ? 'alx-is-success' : 'alx-is-warning'}`}
        >
            {completed ? 'completed' : 'in progress'}
        </span>
    );
}
