import React from 'react';
import { ReactComponent as BlackKnight } from '../../assets/black/knight.svg';
import { ReactComponent as WhiteKnight } from '../../assets/white/knight.svg';
import { ChessColor } from '../../board/interfaces';

interface PieceProps {
  color: ChessColor;
}

const Knight: React.FC<PieceProps> = ({ color }) => {
  const piece = color === ChessColor.WHITE ? <WhiteKnight /> : <BlackKnight />;
  return <>{piece}</>;
};

export default Knight;
