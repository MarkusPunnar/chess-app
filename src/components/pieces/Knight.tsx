import React from 'react';
import { ReactComponent as BlackKnight } from '../../assets/black/knight.svg';
import { ReactComponent as WhiteKnight } from '../../assets/white/knight.svg';
import { ChessColor, PieceProps } from '../../board/interfaces';

const Knight: React.FC<PieceProps> = ({ color, boardSize }) => {
  const piece =
    color === ChessColor.WHITE ? (
      <WhiteKnight transform={`scale(${(boardSize * 8) / 400})`} />
    ) : (
      <BlackKnight transform={`scale(${(boardSize * 8) / 400})`} />
    );
  return <>{piece}</>;
};

export default Knight;
