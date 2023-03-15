import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { createStore } from 'redux';

const initialState = {value: 0};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INC':
      return {
        ...state,
        value: state.value + 1,
      }
    case 'DEC':
      return {
        ...state,
        value: state.value - 1,
      }
    case 'RND':
      return {
        ...state,
        value: state.value * action.payload,
      }
    default:
      return state;
  }
};

const store = createStore(reducer);

const update = () => {
  document.getElementById('counter')
  .textContent = store.getState().value;
}

store.subscribe(update);

document.getElementById('inc').addEventListener('click',() => {
  store.dispatch({ type: 'INC' });
})

document.getElementById('dec').addEventListener('click',() => {
  store.dispatch({ type: 'DEC' });
})

document.getElementById('rnd').addEventListener('click',() => {
  const value = Math.floor(Math.random() * 10);
  store.dispatch({ type: 'RND', payload: value });
})




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
