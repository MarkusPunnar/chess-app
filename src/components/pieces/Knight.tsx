import React from 'react';
import { ReactComponent as BlackKnight } from '../../assets/black/knight.svg';
import { ReactComponent as WhiteKnight } from '../../assets/white/knight.svg';
import { PieceColor } from '../../board/interfaces';

interface PieceProps {
  color: PieceColor;
}

const Knight: React.FC<PieceProps> = ({ color }) => {
  const piece = color === PieceColor.WHITE ? <WhiteKnight /> : <BlackKnight />;
  return <>{piece}</>;
};

export default Knight;
