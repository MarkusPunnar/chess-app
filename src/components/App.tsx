import React from 'react';
import Chessboard from './Chessboard';
import { RecoilRoot } from 'recoil';

const App: React.FC<{}> = () => (
  <RecoilRoot>
    <Chessboard />
  </RecoilRoot>
);

export default App;
