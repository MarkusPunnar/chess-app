import React from 'react';
import { ReactComponent as BlackQueen } from '../../assets/black/queen.svg';
import { ReactComponent as WhiteQueen } from '../../assets/white/queen.svg';
import { ChessColor } from '../../board/interfaces';

interface PieceProps {
  color: ChessColor;
}

const Queen: React.FC<PieceProps> = ({ color }) => {
  const piece = color === ChessColor.WHITE ? <WhiteQueen /> : <BlackQueen />;
  return <>{piece}</>;
};

export default Queen;
