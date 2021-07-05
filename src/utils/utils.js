/**
 * @description local storage操作
 * @param {{name: string}} option 参数
 * @param {String} option.key 需要存储的数据名
 * @param {*} option.value 需要存储的数据
 * @param {String} option.type 操作类型 默认存值，读取需填read
 */
export const winLocalStorage = (option) => {
  const name = option.key,
    bIsRead = option.type && option.type === "read";
  let result;
  if (bIsRead) {
    //读
    result = localStorage.getItem(name);
    if (/^{.*}$/.test(result) || /^[.*]$/.test(result)) {
      //对象或者数组
      return JSON.parse(result);
    } else {
      return result;
    }
  } else {
    const value = option.value;
    //存
    switch (Object.prototype.toString.call(value)) {
      case "[object Object]": //对象
      case "[object Array]": //数组
        result = JSON.stringify(value);
        break;
      default:
        result = value;
    }
    localStorage.setItem(name, result);
  }
};
