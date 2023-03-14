import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { createStore } from 'redux';

// const initialState = 0;

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(reducer);

const update = () => {
  document.getElementById('counter')
  .textContent = store.getState();
}

store.subscribe(update);

document.getElementById('inc').addEventListener('click',() => {
  store.dispatch({ type: 'INC' });
})

document.getElementById('dec').addEventListener('click',() => {
  store.dispatch({ type: 'DEC' });
})




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
