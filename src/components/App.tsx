import React from 'react';
import Chessboard from './Chessboard';
import { RecoilRoot } from 'recoil';

const App: React.FC<{}> = () => (
  <div>
    <RecoilRoot>
      <Chessboard />
    </RecoilRoot>
  </div>
);

export default App;
