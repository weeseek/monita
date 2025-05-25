declare interface Window {
    _weeSeek: {
        [key: string]: any;
    };
}

declare interface WeeSeek {
    deviceInfo: {
        browserVersion: string;
        browser: string;
        osVersion: string;
        os: string;
        ua: string;
        device: string;
        device_type: string;
    };
    hasError: boolean;
    errorMap: Map<string, any>;
    flags: {
        [key: string]: any;
    };
}