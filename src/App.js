import React from 'react';
import Category from './components/Category';
import Pages from './pages/Pages';
import {BrowserRouter} from 'react-router-dom';
import Search from './components/Search';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
};

export default App;
