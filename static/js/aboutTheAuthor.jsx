"use strict";

function About() {
    return (
      <React.Fragment>
        <p>Hello! I'm a page about an author.</p>
      </React.Fragment>
    );
  }
  
  ReactDOM.render(<About />, document.querySelector('#about'));