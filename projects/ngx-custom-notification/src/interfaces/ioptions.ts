export interface IOptions {
    type?: 'success' | 'warning' | 'error' | 'info',
    title?: string,
    duration?: number,
    position?: 'top-end' | 'top-start' | 'bottom-end' | 'bottom-start',
    closeButton?: boolean,
}