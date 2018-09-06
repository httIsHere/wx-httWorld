const app = getApp();
const baseUrl = app.globalData.baseUrl;
export const getOpenIdUrl = baseUrl + '/server/wx_getOpenId';
export const postMessage = baseUrl + '/server/wx_postMessage';
export const getDetail = baseUrl + '/server/wx_msgDetail';
export const getAllMsg = baseUrl + '/server/wx_allMessage';