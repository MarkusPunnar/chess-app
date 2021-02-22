import React from 'react';
import { ReactComponent as BlackKing } from '../../assets/black/king.svg';
import { ReactComponent as WhiteKing } from '../../assets/white/king.svg';
import { PieceColor } from '../../board/interfaces';

interface PieceProps {
  color: PieceColor;
}

const King: React.FC<PieceProps> = ({ color }) => {
  const piece = color === PieceColor.WHITE ? <WhiteKing /> : <BlackKing />;
  return <>{piece}</>;
};

export default King;
