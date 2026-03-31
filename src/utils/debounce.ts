const DEFAULT_DEBOUNCE_DELAY = 500;

export function debounce<Args extends unknown[]>(
    callback: (...args: Args) => void,
    delay: number = DEFAULT_DEBOUNCE_DELAY,
) {
    let timeout: number | undefined;

    return (...args: Args) => {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = window.setTimeout(() => {
            callback(...args);
        }, delay);
    };
}
