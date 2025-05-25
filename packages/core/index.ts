import { InitOptions } from '@weeseek/types'
import { setFlag, getFlag } from '@weeseek/utils'

import HandleEvents from './src/handleEvents';
import { version } from './package.json';
import { EventTypes } from './src/constant/constant';
import { handleOptions } from './src/handleOptions';

function init(options: InitOptions = { apiUrl: '', apiKey: '' }) {
    if (!options.apiUrl || !options.apiKey) {
        return console.error('weeseek 缺少配置项', options.apiKey ? 'apiUrl' : 'apiKey');
    }

    if (options.disabled) {
        return console.warn('当前插件已禁用');
    }

    handleOptions(options);

    console.log(options);


}

/**
 * 安装函数，用于在 Vue 中安装插件
 * @param Vue Vue 实例，允许插件在 Vue 中添加功能
 * @param options 初始化选项，包含插件的配置信息
 */
function install(Vue: any, options: InitOptions) {
    if (getFlag(EventTypes.Vue)) return
    setFlag(EventTypes.Vue, true);

    const handler = Vue.config.errorHandler;
    Vue.config.errorHandler = (err: Error, vm: any, info: string) => {
        HandleEvents.handleError(err);
        handler && handler(err, vm, info);
    };

    init(options);
}

export default {
    version,
    init,
    install
}