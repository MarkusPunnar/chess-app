import React from 'react';
import { ReactComponent as BlackPawn } from '../../assets/black/pawn.svg';
import { ReactComponent as WhitePawn } from '../../assets/white/pawn.svg';
import { ChessColor, PieceProps } from '../../board/interfaces';

const Pawn: React.FC<PieceProps> = ({ color, boardSize }) => {
  const piece =
    color === ChessColor.WHITE ? (
      <WhitePawn transform={`scale(${(boardSize * 8) / 400})`} />
    ) : (
      <BlackPawn transform={`scale(${(boardSize * 8) / 400})`} />
    );
  return <>{piece}</>;
};

export default Pawn;
