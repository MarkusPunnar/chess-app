import React from 'react';
import { ReactComponent as BlackQueen } from '../../assets/black/queen.svg';
import { ReactComponent as WhiteQueen } from '../../assets/white/queen.svg';
import { PieceColor } from '../../board/interfaces';

interface PieceProps {
  color: PieceColor;
}

const Queen: React.FC<PieceProps> = ({ color }) => {
  const piece = color === PieceColor.WHITE ? <WhiteQueen /> : <BlackQueen />;
  return <>{piece}</>;
};

export default Queen;
