import React from 'react';
import { ReactComponent as BlackBishop } from '../../assets/black/bishop.svg';
import { ReactComponent as WhiteBishop } from '../../assets/white/bishop.svg';
import { ChessColor, PieceProps } from '../../board/interfaces';

const Bishop: React.FC<PieceProps> = ({ color, boardSize }) => {
  const piece =
    color === ChessColor.WHITE ? (
      <WhiteBishop transform={`scale(${(boardSize * 8) / 400})`} />
    ) : (
      <BlackBishop transform={`scale(${(boardSize * 8) / 400})`} />
    );
  return <>{piece}</>;
};

export default Bishop;
