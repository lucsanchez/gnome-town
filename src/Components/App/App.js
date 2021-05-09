import React, { Suspense } from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import { ItemList } from '../itemList';
import { Loader } from '../Loading';
import { TownProvider } from '../Provider/gnomeTownProvider';
import { LoadingProvider } from '../Provider/loadingProvider';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <LoadingProvider>
          <TownProvider>
            <Switch>
              <Route exact path="/"><ItemList /></Route>
            </Switch>
          </TownProvider>
      </LoadingProvider>
    </BrowserRouter >)
}


export default App;
