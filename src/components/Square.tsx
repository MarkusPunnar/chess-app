import React, { useEffect } from 'react';
import { ChessSquare, PieceType, SquareColor } from '../board/interfaces';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { boardState, legalMovesState, selectedSquareState, targetedSquareState } from '../atoms/boardAtoms';
import Pawn from './pieces/Pawn';
import Knight from './pieces/Knight';
import Bishop from './pieces/Bishop';
import Queen from './pieces/Queen';
import Rook from './pieces/Rook';
import King from './pieces/King';
import { currentGameState } from '../atoms/gameAtoms';
import { calculateLegalSquares } from '../board/chessMoves';

export interface SquareProps {
  color: SquareColor;
  square: ChessSquare;
}

const Square: React.FC<SquareProps> = ({ color, square }) => {
  const [selectedSquare, setSelectedSquare] = useRecoilState(selectedSquareState);
  const [legalMoves, setLegalMoves] = useRecoilState(legalMovesState);
  const gameState = useRecoilValue(currentGameState);
  const chessboard = useRecoilValue(boardState);
  const setTargetedSquare = useSetRecoilState(targetedSquareState);

  useEffect(() => {
    if (selectedSquare === square) {
      setLegalMoves(calculateLegalSquares(selectedSquare, chessboard));
    }
  }, [selectedSquare]);

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
        return <></>;
    }
  };

  const handleClick = () => {
    if (isSelected()) {
      setSelectedSquare(undefined);
      setLegalMoves([]);
    } else {
      if (selectedSquare) {
        handleMoveRequest();
      } else if (square.piece && gameState.currentTurn === square.piece.color) {
        setSelectedSquare(square);
      }
    }
  };

  const handleMoveRequest = () => {
    if (square.piece && selectedSquare.piece.color === square.piece.color) {
      setSelectedSquare(square);
    } else {
      setTargetedSquare(square);
    }
  };

  const canMoveToSquare = (): boolean => {
    return legalMoves.some((legalMove) => {
      return (
        legalMove.location.number === square.location.number && legalMove.location.letter === square.location.letter
      );
    });
  };

  const getBackgroundColor = (): string => {
    if (isSelected()) {
      return 'bg-yellow-200';
    }
    if (canMoveToSquare() && square.piece) {
      return 'bg-yellow-500';
    }
    return `bg-${color}`;
  };

  return (
    <div onClick={handleClick} className={`w-1/8 h-1/8 flex justify-center items-center ${getBackgroundColor()}`}>
      {canMoveToSquare() && !square.piece && (
        <div className={'w-15 h-15 bg-gray-700 flex justify-center items-center rounded-circle opacity-40'} />
      )}
      {getPieceComponent()}
    </div>
  );
};

export default Square;
