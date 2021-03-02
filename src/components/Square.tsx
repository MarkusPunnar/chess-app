import React, { useEffect, useRef, useState } from 'react';
import { ChessColor, ChessMove, ChessSquare, PieceType, SquareColor } from '../board/interfaces';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { boardState, chessMoveState, legalMovesState, selectedSquareState } from '../atoms/boardAtoms';
import Pawn from './pieces/Pawn';
import Knight from './pieces/Knight';
import Bishop from './pieces/Bishop';
import Queen from './pieces/Queen';
import Rook from './pieces/Rook';
import King from './pieces/King';
import { currentGameState } from '../atoms/gameAtoms';
import { calculateLegalSquares } from '../board/chessMoves';
import { getChessSquare, getHorizontalDistance } from '../board/helper/gameHelper';
import { useWindowSize } from '../hooks/useWindowResize';

export interface SquareProps {
  color: SquareColor;
  square: ChessSquare;
}

const Square: React.FC<SquareProps> = ({ color, square }) => {
  const [selectedSquare, setSelectedSquare] = useRecoilState(selectedSquareState);
  const [legalMoves, setLegalMoves] = useRecoilState(legalMovesState);
  const [gameState, setGameState] = useRecoilState(currentGameState);
  const chessboard = useRecoilValue(boardState);
  const setChessMove = useSetRecoilState(chessMoveState);

  const [size, setSize] = useState<number>(0);

  const sizeRef = useRef(null);

  useEffect(() => {
    if (selectedSquare === square) {
      setLegalMoves(calculateLegalSquares(selectedSquare, chessboard, gameState));
    }
  }, [selectedSquare]);

  const [width, height] = useWindowSize();

  useEffect(() => {
    setSize(sizeRef.current.clientHeight);
  }, [width, height]);

  const isSelected = () => selectedSquare === square;

  const getPieceComponent = (): JSX.Element => {
    switch (square.piece?.type) {
      case PieceType.PAWN:
        return <Pawn color={square.piece.color} boardSize={size} />;
      case PieceType.KNIGHT:
        return <Knight color={square.piece.color} boardSize={size} />;
      case PieceType.ROOK:
        return <Rook color={square.piece.color} boardSize={size} />;
      case PieceType.BISHOP:
        return <Bishop color={square.piece.color} boardSize={size} />;
      case PieceType.QUEEN:
        return <Queen color={square.piece.color} boardSize={size} />;
      case PieceType.KING:
        return <King color={square.piece.color} boardSize={size} />;
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
      let chessMove: ChessMove = {
        startingSquare: selectedSquare,
        destinationSquare: square,
      };
      const { type, color } = selectedSquare.piece;
      if (type === PieceType.KING) {
        chessMove = processKingMoveRequest(color, chessMove);
      } else if (type === PieceType.ROOK) {
        processRookMoveRequest(color);
      }
      setChessMove(chessMove);
    }
  };

  const processKingMoveRequest = (color: ChessColor, chessMove: ChessMove): ChessMove => {
    if (color === ChessColor.WHITE) {
      setGameState((currVal) => {
        return {
          ...currVal,
          white: {
            isInCheck: currVal.white.isInCheck,
            castleQueenSide: false,
            castleKingSide: false,
          },
        };
      });
    } else {
      setGameState((currVal) => {
        return {
          ...currVal,
          black: {
            isInCheck: currVal.black.isInCheck,
            castleQueenSide: false,
            castleKingSide: false,
          },
        };
      });
    }
    return checkCastling(chessMove);
  };

  const processRookMoveRequest = (color: ChessColor) => {
    const isWhite = color === ChessColor.WHITE;
    if (selectedSquare.location.letter === 'a') {
      setGameState((currVal) => {
        return {
          ...currVal,
          black: isWhite
            ? { ...currVal.black }
            : {
                ...currVal.black,
                castleQueenSide: false,
              },
          white: isWhite
            ? {
                ...currVal.white,
                castleQueenSide: false,
              }
            : { ...currVal.white },
        };
      });
    } else if (selectedSquare.location.letter === 'h') {
      setGameState((currVal) => {
        return {
          ...currVal,
          white: isWhite
            ? {
                ...currVal.white,
                castleKingSide: false,
              }
            : { ...currVal.white },
          black: isWhite
            ? { ...currVal.black }
            : {
                ...currVal.black,
                castleKingSide: false,
              },
        };
      });
    }
  };

  const checkCastling = (currentMove: ChessMove): ChessMove => {
    const { number } = selectedSquare.location;
    if (getHorizontalDistance(selectedSquare, square) === 2) {
      return {
        ...currentMove,
        secondaryStartingSquare: getChessSquare(chessboard, 'h', number),
        secondaryDestinationSquare: getChessSquare(chessboard, 'f', number),
      };
    } else if (getHorizontalDistance(selectedSquare, square) === -2) {
      return {
        ...currentMove,
        secondaryStartingSquare: getChessSquare(chessboard, 'a', number),
        secondaryDestinationSquare: getChessSquare(chessboard, 'd', number),
      };
    }
    return currentMove;
  };

  const canMoveToSquare = (): boolean => {
    return legalMoves.some((legalMove) => {
      const { number, letter } = legalMove.location;
      return number === square.location.number && letter === square.location.letter;
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
    <div
      onClick={handleClick}
      className={`w-1/8 h-1/8 flex justify-center items-center ${getBackgroundColor()}`}
      ref={sizeRef}
    >
      {canMoveToSquare() && !square.piece && (
        <div className={'w-1/4 h-1/4 bg-gray-700 flex justify-center items-center rounded-circle opacity-40'} />
      )}
      {getPieceComponent()}
    </div>
  );
};

export default Square;
