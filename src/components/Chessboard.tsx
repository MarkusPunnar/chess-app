import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { boardState, legalMovesState, selectedSquareState, targetedSquareState } from '../atoms/boardAtoms';
import BoardRow from './BoardRow';
import { ChessBoard, ChessColor, ChessPiece, PieceType } from '../board/interfaces';
import { getPieceOnSquare } from '../board/helper/pieceHelper';
import { currentGameState } from '../atoms/gameAtoms';

const Chessboard: React.FC<{}> = () => {
  const [chessboard, setChessboard] = useRecoilState(boardState);
  const [gameState, setGameState] = useRecoilState(currentGameState);
  const selectedSquare = useRecoilValue(selectedSquareState);
  const targetedSquare = useRecoilValue(targetedSquareState);
  const legalSquares = useRecoilValue(legalMovesState);
  const resetTargetedSquare = useResetRecoilState(targetedSquareState);
  const resetSelectedSquare = useResetRecoilState(selectedSquareState);
  const resetLegalSquares = useResetRecoilState(legalMovesState);

  useEffect(() => {
    const piece = selectedSquare?.piece;
    if (piece) {
      const didMove = handleMove(piece);
      resetLegalSquares();
      resetSelectedSquare();
      resetTargetedSquare();
      if (didMove) {
        setGameState({
          ...gameState,
          currentTurn: gameState.currentTurn === ChessColor.WHITE ? ChessColor.BLACK : ChessColor.WHITE,
        });
      }
    }
  }, [targetedSquare]);

  const handleMove = (piece: ChessPiece): boolean => {
    const targetedSquarePiece = getPieceOnSquare(targetedSquare, chessboard);
    if (!targetedSquarePiece || targetedSquarePiece.color !== piece.color) {
      const isMoveAllowed = legalSquares.some((legalSquare) => {
        return (
          legalSquare.location.number === targetedSquare.location.number &&
          legalSquare.location.letter === targetedSquare.location.letter
        );
      });
      if (isMoveAllowed) {
        let updatedBoard: ChessBoard = JSON.parse(JSON.stringify(chessboard));
        addPieceToNewPosition(updatedBoard, piece);
        removePieceFromOldPosition(updatedBoard);
        setChessboard(updatedBoard);
      }
      return isMoveAllowed;
    }
    return false;
  };

  const addPieceToNewPosition = (updatedBoard: ChessBoard, piece: ChessPiece) => {
    const rowIndex = updatedBoard.rows.findIndex((row) => {
      return row.number === targetedSquare?.location.number;
    });
    if (rowIndex !== -1) {
      const squareIndex = updatedBoard.rows[rowIndex].squares.findIndex((square) => {
        return square.location.letter === targetedSquare?.location.letter;
      });
      if (squareIndex !== -1) {
        updatedBoard.rows[rowIndex].squares[squareIndex].piece = piece;
      }
    }
  };

  const removePieceFromOldPosition = (updatedBoard: ChessBoard) => {
    const rowIndex = updatedBoard.rows.findIndex((row) => {
      return row.number === selectedSquare?.location.number;
    });
    if (rowIndex !== -1) {
      const squareIndex = chessboard.rows[rowIndex].squares.findIndex((square) => {
        return square.location.letter === selectedSquare?.location.letter;
      });
      if (squareIndex !== -1) {
        const currentSquare = updatedBoard.rows[rowIndex].squares[squareIndex];
        updatedBoard.rows[rowIndex].squares[squareIndex] = { location: currentSquare.location };
      }
    }
  };

  return (
    <div className={'flex flex-wrap w-400 h-400'}>
      {chessboard.rows.map((row, rowIndex) => (
        <BoardRow row={row} key={rowIndex} />
      ))}
    </div>
  );
};

export default Chessboard;
