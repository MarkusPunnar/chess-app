import { ChessBoard, ChessSquare, MoveDirection } from '../interfaces';
import { getPieceOnSquare } from './pieceHelper';
import { getColumnIndexFromString, getColumnStringFromIndex } from './conversionHelper';

export const calculateLegalForwardSquares = (
  startingSquare: ChessSquare,
  board: ChessBoard,
  maxSteps: number = 8,
): ChessSquare[] => {
  const legalSquares: ChessSquare[] = [];
  const startingRow = startingSquare.location.number;
  for (let i = startingRow + 1; i < Math.min(startingRow + maxSteps + 1, 9); i++) {
    const squareCandidate: ChessSquare = {
      location: {
        letter: startingSquare.location.letter,
        number: i,
      },
    };
    const squareCandidatePiece = getPieceOnSquare(squareCandidate, board);
    if (squareCandidatePiece) {
      if (squareCandidatePiece.color !== startingSquare.piece.color) {
        legalSquares.push(squareCandidate);
      }
      break;
    }
    legalSquares.push(squareCandidate);
  }
  return legalSquares;
};

export const calculateLegalBackwardSquares = (
  startingSquare: ChessSquare,
  board: ChessBoard,
  maxSteps: number = 8,
): ChessSquare[] => {
  const legalSquares: ChessSquare[] = [];
  const startingRow = startingSquare.location.number;
  for (let i = startingRow - 1; i > Math.max(startingRow - maxSteps - 1, 0); i--) {
    const squareCandidate: ChessSquare = {
      location: {
        letter: startingSquare.location.letter,
        number: i,
      },
    };
    const squareCandidatePiece = getPieceOnSquare(squareCandidate, board);
    if (squareCandidatePiece) {
      if (squareCandidatePiece.color !== startingSquare.piece.color) {
        legalSquares.push(squareCandidate);
      }
      break;
    }
    legalSquares.push(squareCandidate);
  }
  return legalSquares;
};

export const calculateLegalLeftSquares = (
  startingSquare: ChessSquare,
  board: ChessBoard,
  maxSteps: number = 8,
): ChessSquare[] => {
  const legalSquares: ChessSquare[] = [];
  const startingColumn = getColumnIndexFromString(startingSquare.location.letter);
  for (let i = startingColumn - 1; i > Math.max(startingColumn - maxSteps - 1, 0); i--) {
    const squareCandidate: ChessSquare = {
      location: {
        letter: getColumnStringFromIndex(i),
        number: startingSquare.location.number,
      },
    };
    const squareCandidatePiece = getPieceOnSquare(squareCandidate, board);
    if (squareCandidatePiece) {
      if (squareCandidatePiece.color !== startingSquare.piece.color) {
        legalSquares.push(squareCandidate);
      }
      break;
    }
    legalSquares.push(squareCandidate);
  }
  return legalSquares;
};

export const calculateLegalRightSquares = (
  startingSquare: ChessSquare,
  board: ChessBoard,
  maxSteps: number = 8,
): ChessSquare[] => {
  const legalSquares: ChessSquare[] = [];
  const startingColumn = getColumnIndexFromString(startingSquare.location.letter);
  for (let i = startingColumn + 1; i < Math.min(startingColumn + maxSteps + 1, 9); i++) {
    const squareCandidate: ChessSquare = {
      location: {
        letter: getColumnStringFromIndex(i),
        number: startingSquare.location.number,
      },
    };
    const squareCandidatePiece = getPieceOnSquare(squareCandidate, board);
    if (squareCandidatePiece) {
      if (squareCandidatePiece.color !== startingSquare.piece.color) {
        legalSquares.push(squareCandidate);
      }
      break;
    }
    legalSquares.push(squareCandidate);
  }
  return legalSquares;
};

export const calculateLegalForwardRightDiagonalSquares = (
  startingSquare: ChessSquare,
  board: ChessBoard,
  maxSteps: number = 8,
): ChessSquare[] => {
  const legalSquares = [];
  const startingRow = startingSquare.location.number;
  const startingColumn = getColumnIndexFromString(startingSquare.location.letter);
  for (let i = 1; i < 9 - Math.max(startingRow, startingColumn) && i <= maxSteps; i++) {
    const squareCandidate: ChessSquare = {
      location: {
        letter: getColumnStringFromIndex(startingColumn + i),
        number: startingRow + i,
      },
    };
    const squareCandidatePiece = getPieceOnSquare(squareCandidate, board);
    if (squareCandidatePiece) {
      if (squareCandidatePiece.color !== startingSquare.piece.color) {
        legalSquares.push(squareCandidate);
      }
      break;
    }
    legalSquares.push(squareCandidate);
  }
  return legalSquares;
};

export const calculateLegalForwardLeftDiagonalSquares = (
  startingSquare: ChessSquare,
  board: ChessBoard,
  maxSteps: number = 8,
): ChessSquare[] => {
  const legalSquares = [];
  const startingRow = startingSquare.location.number;
  const startingColumn = getColumnIndexFromString(startingSquare.location.letter);
  for (let i = 1; i + startingRow < 9 && startingColumn - i > 0 && i <= maxSteps; i++) {
    const squareCandidate: ChessSquare = {
      location: {
        letter: getColumnStringFromIndex(startingColumn - i),
        number: startingRow + i,
      },
    };
    const squareCandidatePiece = getPieceOnSquare(squareCandidate, board);
    if (squareCandidatePiece) {
      if (squareCandidatePiece.color !== startingSquare.piece.color) {
        legalSquares.push(squareCandidate);
      }
      break;
    }
    legalSquares.push(squareCandidate);
  }
  return legalSquares;
};

export const calculateLegalBackwardLeftDiagonalSquares = (
  startingSquare: ChessSquare,
  board: ChessBoard,
  maxSteps: number = 8,
): ChessSquare[] => {
  const legalSquares = [];
  const startingRow = startingSquare.location.number;
  const startingColumn = getColumnIndexFromString(startingSquare.location.letter);
  for (let i = 1; startingRow - i > 0 && startingColumn - i > 0 && i <= maxSteps; i++) {
    const squareCandidate: ChessSquare = {
      location: {
        letter: getColumnStringFromIndex(startingColumn - i),
        number: startingRow - i,
      },
    };
    const squareCandidatePiece = getPieceOnSquare(squareCandidate, board);
    if (squareCandidatePiece) {
      if (squareCandidatePiece.color !== startingSquare.piece.color) {
        legalSquares.push(squareCandidate);
      }
      break;
    }
    legalSquares.push(squareCandidate);
  }
  return legalSquares;
};

export const calculateLegalBackwardRightDiagonalSquares = (
  startingSquare: ChessSquare,
  board: ChessBoard,
  maxSteps: number = 8,
): ChessSquare[] => {
  const legalSquares = [];
  const startingRow = startingSquare.location.number;
  const startingColumn = getColumnIndexFromString(startingSquare.location.letter);
  for (let i = 1; startingRow - i > 0 && i + startingColumn < 9 && i <= maxSteps; i++) {
    const squareCandidate: ChessSquare = {
      location: {
        letter: getColumnStringFromIndex(i + startingColumn),
        number: startingRow - i,
      },
    };
    const squareCandidatePiece = getPieceOnSquare(squareCandidate, board);
    if (squareCandidatePiece) {
      if (squareCandidatePiece.color !== startingSquare.piece.color) {
        legalSquares.push(squareCandidate);
      }
      break;
    }
    legalSquares.push(squareCandidate);
  }
  return legalSquares;
};

export const calculateLegalKnightSquares = (startingSquare: ChessSquare, board: ChessBoard): ChessSquare[] => {
  const legalSquares = [];
  const startingRow = startingSquare.location.number;
  const startingColumn = getColumnIndexFromString(startingSquare.location.letter);
  const possibleMoveDirections = [
    [-2, -1],
    [-2, 1],
    [-1, 2],
    [-1, -2],
    [2, 1],
    [2, -1],
    [1, 2],
    [1, -2],
  ];
  possibleMoveDirections.forEach((moveDirection) => {
    if (isOnBoard(startingRow + moveDirection[0], startingColumn + moveDirection[1])) {
      const squareCandidate: ChessSquare = {
        location: {
          letter: getColumnStringFromIndex(startingColumn + moveDirection[1]),
          number: startingRow + moveDirection[0],
        },
      };
      const squareCandidatePiece = getPieceOnSquare(squareCandidate, board);
      if (squareCandidatePiece) {
        if (squareCandidatePiece.color !== startingSquare.piece.color) {
          legalSquares.push(squareCandidate);
        }
      } else {
        legalSquares.push(squareCandidate);
      }
    }
  });
  return legalSquares;
};

export const calculateLegalPawnCaptures = (
  startingSquare: ChessSquare,
  board: ChessBoard,
  moveDirection: MoveDirection,
): ChessSquare[] => {
  const legalCaptures = [];
  const startingColumn = getColumnIndexFromString(startingSquare.location.letter);
  if (startingColumn !== 8) {
    const captureCandidate: ChessSquare = {
      location: {
        letter: getColumnStringFromIndex(startingColumn + 1),
        number: startingSquare.location.number + moveDirection - 1,
      },
    };
    const captureCandidatePiece = getPieceOnSquare(captureCandidate, board);
    if (captureCandidatePiece && captureCandidatePiece.color !== startingSquare.piece.color) {
      legalCaptures.push(captureCandidate);
    }
  }
  if (startingColumn !== 1) {
    const captureCandidate: ChessSquare = {
      location: {
        letter: getColumnStringFromIndex(startingColumn - 1),
        number: startingSquare.location.number + moveDirection - 1,
      },
    };
    const captureCandidatePiece = getPieceOnSquare(captureCandidate, board);
    if (captureCandidatePiece && captureCandidatePiece.color !== startingSquare.piece.color) {
      legalCaptures.push(captureCandidate);
    }
  }
  return legalCaptures;
};

const isOnBoard = (row: number, column: number): boolean => {
  return row > 0 && row < 9 && column > 0 && column < 9;
};
