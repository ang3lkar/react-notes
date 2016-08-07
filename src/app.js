import React from 'react';
import ReactDOM from 'react-dom';

class NotesArea extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <p>This is react rendered</p>
    );
	}
}

ReactDOM.render(
  <NotesArea />,
  document.getElementById('notes-area')
);
