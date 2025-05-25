export interface InitOptions {
    apiUrl: string;
    apiKey: string;
    userId?: string;
    userName?: string;
    disabled?: boolean;
    proxyXhr?: boolean;
    proxyFetch?: boolean;
    proxyClick?: boolean;
    proxyError?: boolean;
    proxyUnhandledrejection?: boolean;
}