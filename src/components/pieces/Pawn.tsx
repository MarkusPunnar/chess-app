import React from 'react';
import { ReactComponent as BlackPawn } from '../../assets/black/pawn.svg';
import { ReactComponent as WhitePawn } from '../../assets/white/pawn.svg';
import { ChessColor, SquareLocation } from '../../board/interfaces';

interface PieceProps {
  color: ChessColor;
}

const Pawn: React.FC<PieceProps> = ({ color }) => {
  const piece = color === ChessColor.WHITE ? <WhitePawn /> : <BlackPawn />;
  return <>{piece}</>;
};

export default Pawn;
