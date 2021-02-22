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

export enum PieceColor {
  BLACK,
  WHITE,
}

export interface ChessPiece {
  type: PieceType;
  color: PieceColor;
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
