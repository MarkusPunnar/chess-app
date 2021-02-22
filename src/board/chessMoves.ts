import { ChessBoard, ChessPiece, ChessSquare, PieceColor, PieceType } from './interfaces';
import { getPieceOnSquare } from './helper/pieceHelper';

export const calculateLegalSquares = (
  piece: ChessPiece,
  startingSquare: ChessSquare,
  board: ChessBoard,
): ChessSquare[] => {
  switch (piece.type) {
    case PieceType.PAWN:
      return calculateLegalPawnMoves(piece.color, startingSquare);
    case PieceType.ROOK:
      return calculateLegalRookMoves(startingSquare, board);
    default:
      return [];
  }
};

const calculateLegalRookMoves = (startingSquare: ChessSquare, board: ChessBoard): ChessSquare[] => {
  const legalSquares = [];
  for (let i = startingSquare.location.number - 1; i > 0; i--) {
    const squareCandidate: ChessSquare = {
      location: {
        letter: startingSquare.location.letter,
        number: i,
      },
    };
    const squareCandidatePiece = getPieceOnSquare(squareCandidate, board);
    if (squareCandidatePiece) {
      if (squareCandidatePiece.color === startingSquare.piece.color) {
        legalSquares.push(squareCandidate);
      }
      break;
    }
    legalSquares.push(squareCandidate);
  }
  for (let i = startingSquare.location.number + 1; i < 9; i++) {
    const squareCandidate: ChessSquare = {
      location: {
        letter: startingSquare.location.letter,
        number: i,
      },
    };
    const squareCandidatePiece = getPieceOnSquare(squareCandidate, board);
    if (squareCandidatePiece) {
      if (squareCandidatePiece.color === startingSquare.piece.color) {
        legalSquares.push(squareCandidate);
      }
      break;
    }
    legalSquares.push(squareCandidate);
  }
  return legalSquares;
};

const calculateLegalPawnMoves = (pieceColor: PieceColor, startingSquare: ChessSquare): ChessSquare[] => {
  if (pieceColor === PieceColor.WHITE) {
    return calculateLegalWhitePawnMoves(startingSquare);
  } else {
    return calculateLegalBlackPawnMoves(startingSquare);
  }
};

const calculateLegalWhitePawnMoves = (startingSquare: ChessSquare): ChessSquare[] => {
  const legalSquares: ChessSquare[] = [
    {
      location: {
        letter: startingSquare.location.letter,
        number: startingSquare.location.number + 1,
      },
    },
  ];
  if (startingSquare.location.number === 2) {
    legalSquares.push({
      location: {
        letter: startingSquare.location.letter,
        number: startingSquare.location.number + 2,
      },
    });
  }
  return legalSquares;
};

const calculateLegalBlackPawnMoves = (startingSquare: ChessSquare): ChessSquare[] => {
  const legalSquares = [
    {
      location: {
        letter: startingSquare.location.letter,
        number: startingSquare.location.number - 1,
      },
    },
  ];
  if (startingSquare.location.number === 7) {
    legalSquares.push({
      location: {
        letter: startingSquare.location.letter,
        number: startingSquare.location.number - 2,
      },
    });
  }
  return legalSquares;
};
