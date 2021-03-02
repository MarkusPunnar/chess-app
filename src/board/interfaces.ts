export enum PieceType {
  KING,
  ROOK,
  BISHOP,
  QUEEN,
  KNIGHT,
  PAWN,
}

export enum SquareColor {
  LIGHT = 'light',
  DARK = 'dark',
}

export enum ChessColor {
  BLACK,
  WHITE,
}

export enum MoveDirection {
  BACKWARD = 0,
  FORWARD = 2,
}

export interface GameState {
  currentTurn: ChessColor;
  white: PlayerState;
  black: PlayerState;
}

export interface PlayerState {
  isInCheck: boolean;
  castleQueenSide: boolean;
  castleKingSide: boolean;
}

export interface ChessMove {
  startingSquare: ChessSquare;
  destinationSquare: ChessSquare;
  secondaryStartingSquare?: ChessSquare;
  secondaryDestinationSquare?: ChessSquare;
}

export interface ChessPiece {
  type: PieceType;
  color: ChessColor;
}

export interface SquareLocation {
  letter: string;
  number: number;
}

export interface ChessSquare {
  location: SquareLocation;
  piece?: ChessPiece;
}

export interface ChessBoardRow {
  squares: ChessSquare[];
  number: number;
}

export interface ChessBoard {
  rows: ChessBoardRow[];
}

export interface PieceProps {
  color: ChessColor;
  boardSize: number;
}
