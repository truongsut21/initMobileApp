import React from 'react';
import store from './src/redux/store'; // Import store của bạn
import MyApp from './src/MyApp';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <MyApp />
    </Provider>
  );
};

export default App;
