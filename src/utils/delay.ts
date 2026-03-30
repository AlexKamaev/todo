const DEFAULT_DELAY = 200;

export function delay(ms: number = DEFAULT_DELAY): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}