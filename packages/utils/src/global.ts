import { UAParser } from 'ua-parser-js';

const _global = window as unknown as Window
const _weeSeek = (_global._weeSeek || {}) as WeeSeek
const uaResult = new UAParser().getResult();

_global._weeSeek = _weeSeek

_weeSeek.deviceInfo = {
    browserVersion: uaResult.browser.version || '', // // 浏览器版本号 107.0.0.0
    browser: uaResult.browser.name || '', // 浏览器类型 Chrome
    osVersion: uaResult.os.version || '', // 操作系统 电脑系统 10
    os: uaResult.os.name || '', // Windows
    ua: uaResult.ua,
    device: uaResult.device.model ? uaResult.device.model : 'Unknow',
    device_type: uaResult.device.type ? uaResult.device.type : 'Pc',
};

_weeSeek.hasError = false

_weeSeek.errorMap = new Map()

_weeSeek.flags = _weeSeek.flags || {};

export function setFlag(key: string, value: boolean) {
    if (_weeSeek.flags[key]) return
    _weeSeek.flags[key] = value;
}

export function getFlag(key: string) {
    return _weeSeek.flags[key];
}

export {
    _global,
    _weeSeek
}