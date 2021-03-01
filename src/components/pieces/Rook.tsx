import React from 'react';
import { ReactComponent as BlackRook } from '../../assets/black/rook.svg';
import { ReactComponent as WhiteRook } from '../../assets/white/rook.svg';
import { ChessColor } from '../../board/interfaces';

interface PieceProps {
  color: ChessColor;
}

const Rook: React.FC<PieceProps> = ({ color }) => {
  const piece = color === ChessColor.WHITE ? <WhiteRook /> : <BlackRook />;
  return <>{piece}</>;
};

export default Rook;
