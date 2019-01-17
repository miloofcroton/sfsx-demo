const reduxDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

const chromeExtension = () => {
  if (
    process.env.NODE_ENV === 'development' &&
    typeof reduxDevToolsExtension === 'function'
  ) {
    return reduxDevToolsExtension();
  }
};

export default chromeExtension;
