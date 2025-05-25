import { InitOptions } from "@weeseek/types";
import { setFlag } from "@weeseek/utils";
import { EventTypes } from "./constant/constant";

export function handleOptions(options: InitOptions) {
    // 全局flag，防止重复配置
    setProxyFlag(options)

    // 
    return options
}

function setProxyFlag({
    proxyXhr = true,
    proxyFetch = true,
    proxyClick = true,
    proxyError = true,
    proxyUnhandledrejection = true
}: InitOptions) {
    setFlag(EventTypes.Xhr, proxyXhr)
    setFlag(EventTypes.Fetch, proxyFetch)
    setFlag(EventTypes.Click, proxyClick)
    setFlag(EventTypes.Error, proxyError)
    setFlag(EventTypes.Unhandledrejection, proxyUnhandledrejection)
}