import { ChessBoard, ChessPiece, ChessSquare, PieceColor, PieceType } from './interfaces';
import {
  calculateLegalBackwardLeftDiagonalSquares,
  calculateLegalBackwardRightDiagonalSquares,
  calculateLegalBackwardSquares,
  calculateLegalForwardLeftDiagonalSquares,
  calculateLegalForwardRightDiagonalSquares,
  calculateLegalForwardSquares,
  calculateLegalKnightSquares,
  calculateLegalLeftSquares,
  calculateLegalRightSquares,
} from './helper/moveHelper';

export const calculateLegalSquares = (
  piece: ChessPiece,
  startingSquare: ChessSquare,
  board: ChessBoard,
): ChessSquare[] => {
  switch (piece.type) {
    case PieceType.PAWN:
      return calculateLegalPawnMoves(piece.color, startingSquare, board);
    case PieceType.ROOK:
      return calculateLegalRookMoves(startingSquare, board);
    case PieceType.BISHOP:
      return calculateLegalBishopMoves(startingSquare, board);
    case PieceType.QUEEN:
      return calculateLegalQueenMoves(startingSquare, board);
    case PieceType.KING:
      return calculateLegalKingMoves(startingSquare, board);
    case PieceType.KNIGHT:
      return calculateLegalKnightMoves(startingSquare, board);
    default:
      return [];
  }
};

const calculateLegalQueenMoves = (startingSquare: ChessSquare, board: ChessBoard): ChessSquare[] => {
  return [...calculateLegalRookMoves(startingSquare, board), ...calculateLegalBishopMoves(startingSquare, board)];
};

const calculateLegalKingMoves = (startingSquare: ChessSquare, board: ChessBoard): ChessSquare[] => {
  return [
    ...calculateLegalForwardSquares(startingSquare, board, 1),
    ...calculateLegalBackwardSquares(startingSquare, board, 1),
    ...calculateLegalLeftSquares(startingSquare, board, 1),
    ...calculateLegalRightSquares(startingSquare, board, 1),
    ...calculateLegalForwardRightDiagonalSquares(startingSquare, board, 1),
    ...calculateLegalForwardLeftDiagonalSquares(startingSquare, board, 1),
    ...calculateLegalBackwardLeftDiagonalSquares(startingSquare, board, 1),
    ...calculateLegalBackwardRightDiagonalSquares(startingSquare, board, 1),
  ];
};

const calculateLegalKnightMoves = (startingSquare: ChessSquare, board: ChessBoard): ChessSquare[] => {
  return calculateLegalKnightSquares(startingSquare, board);
};

const calculateLegalRookMoves = (startingSquare: ChessSquare, board: ChessBoard): ChessSquare[] => {
  return [
    ...calculateLegalForwardSquares(startingSquare, board),
    ...calculateLegalBackwardSquares(startingSquare, board),
    ...calculateLegalLeftSquares(startingSquare, board),
    ...calculateLegalRightSquares(startingSquare, board),
  ];
};

const calculateLegalBishopMoves = (startingSquare: ChessSquare, board: ChessBoard): ChessSquare[] => {
  return [
    ...calculateLegalForwardRightDiagonalSquares(startingSquare, board),
    ...calculateLegalForwardLeftDiagonalSquares(startingSquare, board),
    ...calculateLegalBackwardLeftDiagonalSquares(startingSquare, board),
    ...calculateLegalBackwardRightDiagonalSquares(startingSquare, board),
  ];
};

const calculateLegalPawnMoves = (
  pieceColor: PieceColor,
  startingSquare: ChessSquare,
  board: ChessBoard,
): ChessSquare[] => {
  if (pieceColor === PieceColor.WHITE) {
    return calculateLegalWhitePawnMoves(startingSquare, board);
  } else {
    return calculateLegalBlackPawnMoves(startingSquare, board);
  }
};

const calculateLegalWhitePawnMoves = (startingSquare: ChessSquare, board: ChessBoard): ChessSquare[] => {
  const maxAllowedSteps = startingSquare.location.number === 2 ? 2 : 1;
  return calculateLegalForwardSquares(startingSquare, board, maxAllowedSteps);
};

const calculateLegalBlackPawnMoves = (startingSquare: ChessSquare, board: ChessBoard): ChessSquare[] => {
  const maxAllowedSteps = startingSquare.location.number === 7 ? 2 : 1;
  return calculateLegalBackwardSquares(startingSquare, board, maxAllowedSteps);
};
