import React from 'react';
import { ChessSquare, PieceType, SquareColor } from '../board/interfaces';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { selectedSquareState, targetedSquareState } from '../atoms/boardAtoms';
import Pawn from './pieces/Pawn';
import Knight from './pieces/Knight';
import Bishop from './pieces/Bishop';
import Queen from './pieces/Queen';
import Rook from './pieces/Rook';
import King from './pieces/King';

export interface SquareProps {
  color: SquareColor;
  square: ChessSquare;
}

const Square: React.FC<SquareProps> = ({ color, square }) => {
  const [selectedSquare, setSelectedSquare] = useRecoilState(selectedSquareState);
  const setTargetedSquare = useSetRecoilState(targetedSquareState);
  const isSelected = () => selectedSquare === square;

  const getPieceComponent = (): JSX.Element => {
    switch (square.piece?.type) {
      case PieceType.PAWN:
        return <Pawn color={square.piece.color} />;
      case PieceType.KNIGHT:
        return <Knight color={square.piece.color} />;
      case PieceType.ROOK:
        return <Rook color={square.piece.color} />;
      case PieceType.BISHOP:
        return <Bishop color={square.piece.color} />;
      case PieceType.QUEEN:
        return <Queen color={square.piece.color} />;
      case PieceType.KING:
        return <King color={square.piece.color} />;
      default:
        return <div className={'p-25'} />;
    }
  };

  const handleClick = () => {
    if (isSelected()) {
      setSelectedSquare(undefined);
    } else {
      if (selectedSquare) {
        setTargetedSquare(square);
      } else if (square.piece) {
        setSelectedSquare(square);
      }
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`w-1/8 h-1/8 flex justify-center items-center ${isSelected() ? 'bg-yellow-200' : `bg-${color}`}`}
    >
      {getPieceComponent()}
    </div>
  );
};

export default Square;
