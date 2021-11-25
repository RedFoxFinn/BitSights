
// info.js
// tool collection to provide application information

import { appid, appname } from '../../package.json';

export const APPID = () => {
  return appid;
};

export const APPNAME = () => {
  return appname;
};