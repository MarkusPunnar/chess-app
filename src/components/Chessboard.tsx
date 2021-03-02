import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { boardState, legalMovesState, selectedSquareState, chessMoveState } from '../atoms/boardAtoms';
import BoardRow from './BoardRow';
import { ChessBoard, ChessColor, ChessPiece, ChessSquare } from '../board/interfaces';
import { getPieceOnSquare } from '../board/helper/gameHelper';
import { currentGameState } from '../atoms/gameAtoms';

const Chessboard: React.FC = () => {
  const [chessboard, setChessboard] = useRecoilState(boardState);
  const [gameState, setGameState] = useRecoilState(currentGameState);
  const selectedSquare = useRecoilValue(selectedSquareState);
  const chessMove = useRecoilValue(chessMoveState);
  const legalSquares = useRecoilValue(legalMovesState);
  const resetChessMove = useResetRecoilState(chessMoveState);
  const resetSelectedSquare = useResetRecoilState(selectedSquareState);
  const resetLegalSquares = useResetRecoilState(legalMovesState);

  useEffect(() => {
    const piece = selectedSquare?.piece;
    if (piece) {
      const didMove = handleMove(piece);
      resetLegalSquares();
      resetSelectedSquare();
      resetChessMove();
      if (didMove) {
        setGameState({
          ...gameState,
          currentTurn: gameState.currentTurn === ChessColor.WHITE ? ChessColor.BLACK : ChessColor.WHITE,
        });
      }
    }
  }, [chessMove]);

  const handleMove = (piece: ChessPiece): boolean => {
    const destinationSquare = chessMove.destinationSquare;
    const targetedSquarePiece = getPieceOnSquare(destinationSquare, chessboard);
    if (!targetedSquarePiece || targetedSquarePiece.color !== piece.color) {
      const isMoveAllowed = legalSquares.some((legalSquare) => {
        const { number, letter } = destinationSquare.location;
        return legalSquare.location.number === number && legalSquare.location.letter === letter;
      });
      if (isMoveAllowed) {
        let updatedBoard: ChessBoard = JSON.parse(JSON.stringify(chessboard));
        addPieceToSquare(updatedBoard, piece, chessMove.destinationSquare);
        removePieceFromSquare(updatedBoard, chessMove.startingSquare);
        if (chessMove.secondaryStartingSquare && chessMove.secondaryDestinationSquare) {
          addPieceToSquare(updatedBoard, chessMove.secondaryStartingSquare.piece, chessMove.secondaryDestinationSquare);
          removePieceFromSquare(updatedBoard, chessMove.secondaryStartingSquare);
        }
        setChessboard(updatedBoard);
      }
      return isMoveAllowed;
    }
    return false;
  };

  const addPieceToSquare = (updatedBoard: ChessBoard, piece: ChessPiece, newSquare: ChessSquare) => {
    const rowIndex = updatedBoard.rows.findIndex((row) => {
      return row.number === newSquare.location.number;
    });
    if (rowIndex !== -1) {
      const squareIndex = updatedBoard.rows[rowIndex].squares.findIndex((square) => {
        return square.location.letter === newSquare.location.letter;
      });
      if (squareIndex !== -1) {
        updatedBoard.rows[rowIndex].squares[squareIndex].piece = piece;
      }
    }
  };

  const removePieceFromSquare = (updatedBoard: ChessBoard, oldSquare: ChessSquare) => {
    const rowIndex = updatedBoard.rows.findIndex((row) => {
      return row.number === oldSquare.location.number;
    });
    if (rowIndex !== -1) {
      const squareIndex = chessboard.rows[rowIndex].squares.findIndex((square) => {
        return square.location.letter === oldSquare.location.letter;
      });
      if (squareIndex !== -1) {
        const currentSquare = updatedBoard.rows[rowIndex].squares[squareIndex];
        updatedBoard.rows[rowIndex].squares[squareIndex] = { location: currentSquare.location };
      }
    }
  };

  return (
    <div className={'flex flex-wrap w-resp h-resp'}>
      {chessboard.rows.map((row, rowIndex) => (
        <BoardRow row={row} key={rowIndex} />
      ))}
    </div>
  );
};

export default Chessboard;
