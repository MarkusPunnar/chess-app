import React from 'react';
import { ReactComponent as BlackBishop } from '../../assets/black/bishop.svg';
import { ReactComponent as WhiteBishop } from '../../assets/white/bishop.svg';
import { ChessColor } from '../../board/interfaces';

interface PieceProps {
  color: ChessColor;
}

const Bishop: React.FC<PieceProps> = ({ color }) => {
  const piece = color === ChessColor.WHITE ? <WhiteBishop /> : <BlackBishop />;
  return <>{piece}</>;
};

export default Bishop;
