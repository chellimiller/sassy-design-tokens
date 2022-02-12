import * as React from 'react';
import { hot } from 'react-hot-loader/root';
// @ts-expect-error
import docs from '../../src/index.scss';

const App: React.FC = () => {
  console.log(docs);
  return (
    <div id="app">
      <h1>Hello</h1>
      <pre>{JSON.stringify(docs, null, 2)}</pre>
    </div>
  );
};

export default hot(App);
