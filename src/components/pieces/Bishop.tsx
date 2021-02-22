import React from 'react';
import { ReactComponent as BlackBishop } from '../../assets/black/bishop.svg';
import { ReactComponent as WhiteBishop } from '../../assets/white/bishop.svg';
import { PieceColor } from '../../board/interfaces';

interface PieceProps {
  color: PieceColor;
}

const Bishop: React.FC<PieceProps> = ({ color }) => {
  const piece = color === PieceColor.WHITE ? <WhiteBishop /> : <BlackBishop />;
  return <>{piece}</>;
};

export default Bishop;
