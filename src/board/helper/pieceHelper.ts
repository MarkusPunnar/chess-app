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
  return undefined;
};

export const getDistanceBetweenSquares = (startingSquare: ChessSquare, destinationSquare: ChessSquare): number => {
  return (
    destinationSquare.location.number -
    startingSquare.location.number +
    (getColumnIndexFromString(destinationSquare.location.letter) -
      getColumnIndexFromString(destinationSquare.location.letter))
  );
};
