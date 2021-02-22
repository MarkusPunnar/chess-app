import React from 'react';
import { ReactComponent as BlackRook } from '../../assets/black/rook.svg';
import { ReactComponent as WhiteRook } from '../../assets/white/rook.svg';
import { PieceColor } from '../../board/interfaces';

interface PieceProps {
  color: PieceColor;
}

const Rook: React.FC<PieceProps> = ({ color }) => {
  const piece = color === PieceColor.WHITE ? <WhiteRook /> : <BlackRook />;
  return <>{piece}</>;
};

export default Rook;
