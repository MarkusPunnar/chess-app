import React from 'react';
import { ReactComponent as BlackKing } from '../../assets/black/king.svg';
import { ReactComponent as WhiteKing } from '../../assets/white/king.svg';
import { ChessColor, PieceProps } from '../../board/interfaces';

const King: React.FC<PieceProps> = ({ color, boardSize }) => {
  const piece =
    color === ChessColor.WHITE ? (
      <WhiteKing transform={`scale(${(boardSize * 8) / 400})`} />
    ) : (
      <BlackKing transform={`scale(${(boardSize * 8) / 400})`} />
    );
  return <>{piece}</>;
};

export default King;
