import * as React from 'react';

const Popup = () => {
  React.useEffect(() => {
    // Example of how to send a message to eventPage.ts.
    chrome.runtime.sendMessage({ popupMounted: true });
  });

  return <div>Hello, world!</div>;
};

export default Popup;
