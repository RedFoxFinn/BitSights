
// info.js
// tool collection to provide application information

import { appid, appname, version } from '../../package.json';

export const APPID = () => appid;

export const APPNAME = () => appname;

export const VERSION = () => version;