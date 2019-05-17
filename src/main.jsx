import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, useDialogState, Dialog, DialogDisclosure } from "reakit";
import * as system from "reakit-system-bootstrap";

function App() {
  const dialog = useDialogState();
  return (
    <Provider unstable_system={system}>
      <DialogDisclosure {...dialog}>Open dialog</DialogDisclosure>
      <Dialog aria-label="Welcome" {...dialog}>
        Welcome to Reakit!
      </Dialog>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
