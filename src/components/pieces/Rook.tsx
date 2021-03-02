import React from 'react';
import { ReactComponent as BlackRook } from '../../assets/black/rook.svg';
import { ReactComponent as WhiteRook } from '../../assets/white/rook.svg';
import { ChessColor, PieceProps } from '../../board/interfaces';

const Rook: React.FC<PieceProps> = ({ color, boardSize }) => {
  const piece =
    color === ChessColor.WHITE ? (
      <WhiteRook transform={`scale(${(boardSize * 8) / 400})`} />
    ) : (
      <BlackRook transform={`scale(${(boardSize * 8) / 400})`} />
    );
  return <>{piece}</>;
};

export default Rook;
