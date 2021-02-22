import React from 'react';
import { ReactComponent as BlackPawn } from '../../assets/black/pawn.svg';
import { ReactComponent as WhitePawn } from '../../assets/white/pawn.svg';
import { PieceColor, SquareLocation } from '../../board/interfaces';

interface PieceProps {
  color: PieceColor;
}

const Pawn: React.FC<PieceProps> = ({ color }) => {
  const piece = color === PieceColor.WHITE ? <WhitePawn /> : <BlackPawn />;
  return <>{piece}</>;
};

export default Pawn;
