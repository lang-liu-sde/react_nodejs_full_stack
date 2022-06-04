import React from 'react';
import ReactDOM from 'react-dom';
//import { createRoot } from 'react-dom/client';

//const container = document.getElementById('app');
//const root = createRoot(container);

//const color = Math.random() > 0.5 ? 'green' : 'red';

const App = (props) => {
  return (
    <h2 className='text-center'>
      {props.headerMessage}
    </h2>
  );
};

App.propTypes = {
  headerMessage: React.PropTypes.string
};

ReactDOM.render(
  <App headerMessage={4} />,
  document.getElementById('root')
);
