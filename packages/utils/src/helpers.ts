export function typeofAny(target: any): string {
    return Object.prototype.toString.call(target).slice(8, -1).toLowerCase();
}
export function toStringAny(target: any, type: string): boolean {
    return Object.prototype.toString.call(target) === type;
}

/**
 * 验证给定选项的类型是否符合预期
 * 
 * @param target 待验证的目标对象
 * @param targetName 目标对象的名称，用于错误信息中
 * @param expectType 预期的目标对象类型
 * @returns 如果目标对象的类型符合预期，则返回true；否则返回false，并在控制台输出错误信息
 */
export function validateOption(target: any, targetName: string, expectType: string): any {
    // 如果目标对象为空或undefined，则直接返回false
    if (!target) return false;

    // 使用typeofAny自定义类型检查函数判断目标对象的类型是否与预期相符
    // 如果类型相符，则返回true
    if (typeofAny(target) === expectType) return true;

    // 如果类型不相符，则在控制台输出错误信息，并返回false
    console.error(`weeseek: ${targetName}期望传入${expectType}类型，目前是${typeofAny(target)}类型`);
}