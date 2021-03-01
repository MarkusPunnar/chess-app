import React from 'react';
import { ReactComponent as BlackKing } from '../../assets/black/king.svg';
import { ReactComponent as WhiteKing } from '../../assets/white/king.svg';
import { ChessColor } from '../../board/interfaces';

interface PieceProps {
  color: ChessColor;
}

const King: React.FC<PieceProps> = ({ color }) => {
  const piece = color === ChessColor.WHITE ? <WhiteKing /> : <BlackKing />;
  return <>{piece}</>;
};

export default King;
