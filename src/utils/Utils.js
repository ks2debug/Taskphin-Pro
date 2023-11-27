import { Constants } from './index';

class Utils {
  static disableAllConsoleSystemWide = () => {
    if (process.env.REACT_APP_ENVIRONMENT === Constants.ENUM_ENVIRONMENT.STAGING || process.env.REACT_APP_ENVIRONMENT === Constants.ENUM_ENVIRONMENT.PRODUCTION) {
      console.log = () => {};
      console.info = () => {};
      console.warn = () => {};
      console.error = () => {};
    }
  };
}

export default Utils;
