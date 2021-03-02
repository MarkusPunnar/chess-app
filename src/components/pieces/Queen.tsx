import React from 'react';
import { ReactComponent as BlackQueen } from '../../assets/black/queen.svg';
import { ReactComponent as WhiteQueen } from '../../assets/white/queen.svg';
import { ChessColor, PieceProps } from '../../board/interfaces';

const Queen: React.FC<PieceProps> = ({ color, boardSize }) => {
  const piece =
    color === ChessColor.WHITE ? (
      <WhiteQueen transform={`scale(${(boardSize * 8) / 400})`} />
    ) : (
      <BlackQueen transform={`scale(${(boardSize * 8) / 400})`} />
    );
  return <>{piece}</>;
};

export default Queen;
