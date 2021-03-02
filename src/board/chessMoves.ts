import { ChessBoard, ChessSquare, MoveDirection, ChessColor, PieceType, GameState } from './interfaces';
import {
  calculateLegalBackwardLeftDiagonalSquares,
  calculateLegalBackwardRightDiagonalSquares,
  calculateLegalBackwardSquares,
  calculateLegalCastles,
  calculateLegalForwardLeftDiagonalSquares,
  calculateLegalForwardRightDiagonalSquares,
  calculateLegalForwardSquares,
  calculateLegalKnightSquares,
  calculateLegalLeftSquares,
  calculateLegalPawnCaptures,
  calculateLegalRightSquares,
} from './helper/moveHelper';
import { getPieceOnSquare } from './helper/gameHelper';

export const calculateLegalSquares = (
  startingSquare: ChessSquare,
  board: ChessBoard,
  gameState: GameState,
): ChessSquare[] => {
  const piece = startingSquare.piece;
  switch (piece.type) {
    case PieceType.PAWN:
      return calculateLegalPawnMoves(startingSquare, board);
    case PieceType.ROOK:
      return calculateLegalRookMoves(startingSquare, board);
    case PieceType.BISHOP:
      return calculateLegalBishopMoves(startingSquare, board);
    case PieceType.QUEEN:
      return calculateLegalQueenMoves(startingSquare, board);
    case PieceType.KING:
      return calculateLegalKingMoves(gameState, startingSquare, board);
    case PieceType.KNIGHT:
      return calculateLegalKnightMoves(startingSquare, board);
    default:
      return [];
  }
};

const calculateLegalQueenMoves = (startingSquare: ChessSquare, board: ChessBoard): ChessSquare[] => {
  return [...calculateLegalRookMoves(startingSquare, board), ...calculateLegalBishopMoves(startingSquare, board)];
};

const calculateLegalKingMoves = (
  gameState: GameState,
  startingSquare: ChessSquare,
  board: ChessBoard,
): ChessSquare[] => {
  return [
    ...calculateLegalForwardSquares(startingSquare, board, 1),
    ...calculateLegalBackwardSquares(startingSquare, board, 1),
    ...calculateLegalLeftSquares(startingSquare, board, 1),
    ...calculateLegalRightSquares(startingSquare, board, 1),
    ...calculateLegalForwardRightDiagonalSquares(startingSquare, board, 1),
    ...calculateLegalForwardLeftDiagonalSquares(startingSquare, board, 1),
    ...calculateLegalBackwardLeftDiagonalSquares(startingSquare, board, 1),
    ...calculateLegalBackwardRightDiagonalSquares(startingSquare, board, 1),
    ...calculateLegalCastles(startingSquare, board, gameState),
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

const calculateLegalPawnMoves = (startingSquare: ChessSquare, board: ChessBoard): ChessSquare[] => {
  const pieceColor = startingSquare.piece.color;
  if (pieceColor === ChessColor.WHITE) {
    return calculateLegalWhitePawnMoves(startingSquare, board);
  } else {
    return calculateLegalBlackPawnMoves(startingSquare, board);
  }
};

const calculateLegalWhitePawnMoves = (startingSquare: ChessSquare, board: ChessBoard): ChessSquare[] => {
  const maxAllowedSteps = startingSquare.location.number === 2 ? 2 : 1;
  const legalSteps = calculateLegalForwardSquares(startingSquare, board, maxAllowedSteps).filter((square) => {
    return getPieceOnSquare(square, board) === undefined;
  });
  return [...legalSteps, ...calculateLegalPawnCaptures(startingSquare, board, MoveDirection.FORWARD)];
};

const calculateLegalBlackPawnMoves = (startingSquare: ChessSquare, board: ChessBoard): ChessSquare[] => {
  const maxAllowedSteps = startingSquare.location.number === 7 ? 2 : 1;
  const legalSteps = calculateLegalBackwardSquares(startingSquare, board, maxAllowedSteps).filter((square) => {
    return getPieceOnSquare(square, board) === undefined;
  });
  return [...legalSteps, ...calculateLegalPawnCaptures(startingSquare, board, MoveDirection.BACKWARD)];
};
