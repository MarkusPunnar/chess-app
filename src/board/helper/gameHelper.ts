import { ChessBoard, ChessPiece, ChessSquare } from '../interfaces';
import { getColumnIndexFromString } from './conversionHelper';

export const getPieceOnSquare = (queriedSquare: ChessSquare, board: ChessBoard): ChessPiece => {
  const row = board.rows.find((row) => {
    return row.number === queriedSquare?.location.number;
  });
  if (row) {
    const square = row.squares.find((square) => {
      return square.location.letter === queriedSquare?.location.letter;
    });
    return square?.piece;
  }
  return null;
};

export const getHorizontalDistance = (startingSquare: ChessSquare, destinationSquare: ChessSquare): number => {
  return (
    getColumnIndexFromString(destinationSquare.location.letter) -
    getColumnIndexFromString(startingSquare.location.letter)
  );
};

export const getChessSquare = (board: ChessBoard, letter: string, number: number): ChessSquare => {
  const rowIndex = board.rows.findIndex((row) => {
    return row.number === number;
  });
  if (rowIndex !== -1) {
    const squareIndex = board.rows[rowIndex].squares.findIndex((square) => {
      return square.location.letter === letter;
    });
    if (squareIndex !== -1) {
      return board.rows[rowIndex].squares[squareIndex];
    }
  }
  return null;
};

export const getVerticalDistance = (startingSquare: ChessSquare, destinationSquare: ChessSquare): number => {
  return destinationSquare.location.number - startingSquare.location.number;
};
