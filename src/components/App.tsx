import React from 'react';
import Chessboard from './Chessboard';
import { RecoilRoot } from 'recoil';

const App: React.FC = () => (
  <RecoilRoot>
    <div className={'flex w-screen h-screen justify-center items-center'}>
      <Chessboard />
    </div>
  </RecoilRoot>
);

export default App;
