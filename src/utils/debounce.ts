const DEFAULT_DEBOUNCE_DELAY = 200;

export function debounce<T extends (...args: any[]) => void>(
    callback: T,
    delay: number = DEFAULT_DEBOUNCE_DELAY,
) {
    let timeout: number | undefined;

    return (...args: Parameters<T>) => {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = window.setTimeout(() => {
            callback(...args);
        }, delay);
    };
}