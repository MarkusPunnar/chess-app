import { ChessBoard, ChessPiece, ChessSquare } from '../interfaces';

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
