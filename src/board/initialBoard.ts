import { ChessBoard, ChessColor, PieceType } from './interfaces';

const initialBoard: ChessBoard = {
  rows: [
    {
      squares: [
        {
          location: {
            letter: 'a',
            number: 8,
          },
          piece: {
            type: PieceType.ROOK,
            color: ChessColor.BLACK,
          },
        },
        {
          location: {
            letter: 'b',
            number: 8,
          },
          piece: {
            type: PieceType.KNIGHT,
            color: ChessColor.BLACK,
          },
        },
        {
          location: {
            letter: 'c',
            number: 8,
          },
          piece: {
            type: PieceType.BISHOP,
            color: ChessColor.BLACK,
          },
        },
        {
          location: {
            letter: 'd',
            number: 8,
          },
          piece: {
            type: PieceType.QUEEN,
            color: ChessColor.BLACK,
          },
        },
        {
          location: {
            letter: 'e',
            number: 8,
          },
          piece: {
            type: PieceType.KING,
            color: ChessColor.BLACK,
          },
        },
        {
          location: {
            letter: 'f',
            number: 8,
          },
          piece: {
            type: PieceType.BISHOP,
            color: ChessColor.BLACK,
          },
        },
        {
          location: {
            letter: 'g',
            number: 8,
          },
          piece: {
            type: PieceType.KNIGHT,
            color: ChessColor.BLACK,
          },
        },
        {
          location: {
            letter: 'h',
            number: 8,
          },
          piece: {
            type: PieceType.ROOK,
            color: ChessColor.BLACK,
          },
        },
      ],
      number: 8,
    },
    {
      squares: [
        {
          location: {
            letter: 'a',
            number: 7,
          },
          piece: {
            type: PieceType.PAWN,
            color: ChessColor.BLACK,
          },
        },
        {
          location: {
            letter: 'b',
            number: 7,
          },
          piece: {
            type: PieceType.PAWN,
            color: ChessColor.BLACK,
          },
        },
        {
          location: {
            letter: 'c',
            number: 7,
          },
          piece: {
            type: PieceType.PAWN,
            color: ChessColor.BLACK,
          },
        },
        {
          location: {
            letter: 'd',
            number: 7,
          },
          piece: {
            type: PieceType.PAWN,
            color: ChessColor.BLACK,
          },
        },
        {
          location: {
            letter: 'e',
            number: 7,
          },
          piece: {
            type: PieceType.PAWN,
            color: ChessColor.BLACK,
          },
        },
        {
          location: {
            letter: 'f',
            number: 7,
          },
          piece: {
            type: PieceType.PAWN,
            color: ChessColor.BLACK,
          },
        },
        {
          location: {
            letter: 'g',
            number: 7,
          },
          piece: {
            type: PieceType.PAWN,
            color: ChessColor.BLACK,
          },
        },
        {
          location: {
            letter: 'h',
            number: 7,
          },
          piece: {
            type: PieceType.PAWN,
            color: ChessColor.BLACK,
          },
        },
      ],
      number: 7,
    },
    {
      squares: [
        {
          location: {
            letter: 'a',
            number: 6,
          },
        },
        {
          location: {
            letter: 'b',
            number: 6,
          },
        },
        {
          location: {
            letter: 'c',
            number: 6,
          },
        },
        {
          location: {
            letter: 'd',
            number: 6,
          },
        },
        {
          location: {
            letter: 'e',
            number: 6,
          },
        },
        {
          location: {
            letter: 'f',
            number: 6,
          },
        },
        {
          location: {
            letter: 'g',
            number: 6,
          },
        },
        {
          location: {
            letter: 'h',
            number: 6,
          },
        },
      ],
      number: 6,
    },
    {
      squares: [
        {
          location: {
            letter: 'a',
            number: 5,
          },
        },
        {
          location: {
            letter: 'b',
            number: 5,
          },
        },
        {
          location: {
            letter: 'c',
            number: 5,
          },
        },
        {
          location: {
            letter: 'd',
            number: 5,
          },
        },
        {
          location: {
            letter: 'e',
            number: 5,
          },
        },
        {
          location: {
            letter: 'f',
            number: 5,
          },
        },
        {
          location: {
            letter: 'g',
            number: 5,
          },
        },
        {
          location: {
            letter: 'h',
            number: 5,
          },
        },
      ],
      number: 5,
    },
    {
      squares: [
        {
          location: {
            letter: 'a',
            number: 4,
          },
        },
        {
          location: {
            letter: 'b',
            number: 4,
          },
        },
        {
          location: {
            letter: 'c',
            number: 4,
          },
        },
        {
          location: {
            letter: 'd',
            number: 4,
          },
        },
        {
          location: {
            letter: 'e',
            number: 4,
          },
        },
        {
          location: {
            letter: 'f',
            number: 4,
          },
        },
        {
          location: {
            letter: 'g',
            number: 4,
          },
        },
        {
          location: {
            letter: 'h',
            number: 4,
          },
        },
      ],
      number: 4,
    },
    {
      squares: [
        {
          location: {
            letter: 'a',
            number: 3,
          },
        },
        {
          location: {
            letter: 'b',
            number: 3,
          },
        },
        {
          location: {
            letter: 'c',
            number: 3,
          },
        },
        {
          location: {
            letter: 'd',
            number: 3,
          },
        },
        {
          location: {
            letter: 'e',
            number: 3,
          },
        },
        {
          location: {
            letter: 'f',
            number: 3,
          },
        },
        {
          location: {
            letter: 'g',
            number: 3,
          },
        },
        {
          location: {
            letter: 'h',
            number: 3,
          },
        },
      ],
      number: 3,
    },
    {
      squares: [
        {
          location: {
            letter: 'a',
            number: 2,
          },
          piece: {
            type: PieceType.PAWN,
            color: ChessColor.WHITE,
          },
        },
        {
          location: {
            letter: 'b',
            number: 2,
          },
          piece: {
            type: PieceType.PAWN,
            color: ChessColor.WHITE,
          },
        },
        {
          location: {
            letter: 'c',
            number: 2,
          },
          piece: {
            type: PieceType.PAWN,
            color: ChessColor.WHITE,
          },
        },
        {
          location: {
            letter: 'd',
            number: 2,
          },
          piece: {
            type: PieceType.PAWN,
            color: ChessColor.WHITE,
          },
        },
        {
          location: {
            letter: 'e',
            number: 2,
          },
          piece: {
            type: PieceType.PAWN,
            color: ChessColor.WHITE,
          },
        },
        {
          location: {
            letter: 'f',
            number: 2,
          },
          piece: {
            type: PieceType.PAWN,
            color: ChessColor.WHITE,
          },
        },
        {
          location: {
            letter: 'g',
            number: 2,
          },
          piece: {
            type: PieceType.PAWN,
            color: ChessColor.WHITE,
          },
        },
        {
          location: {
            letter: 'h',
            number: 2,
          },
          piece: {
            type: PieceType.PAWN,
            color: ChessColor.WHITE,
          },
        },
      ],
      number: 2,
    },
    {
      squares: [
        {
          location: {
            letter: 'a',
            number: 1,
          },
          piece: {
            type: PieceType.ROOK,
            color: ChessColor.WHITE,
          },
        },
        {
          location: {
            letter: 'b',
            number: 1,
          },
          piece: {
            type: PieceType.KNIGHT,
            color: ChessColor.WHITE,
          },
        },
        {
          location: {
            letter: 'c',
            number: 1,
          },
          piece: {
            type: PieceType.BISHOP,
            color: ChessColor.WHITE,
          },
        },
        {
          location: {
            letter: 'd',
            number: 1,
          },
          piece: {
            type: PieceType.QUEEN,
            color: ChessColor.WHITE,
          },
        },
        {
          location: {
            letter: 'e',
            number: 1,
          },
          piece: {
            type: PieceType.KING,
            color: ChessColor.WHITE,
          },
        },
        {
          location: {
            letter: 'f',
            number: 1,
          },
          piece: {
            type: PieceType.BISHOP,
            color: ChessColor.WHITE,
          },
        },
        {
          location: {
            letter: 'g',
            number: 1,
          },
          piece: {
            type: PieceType.KNIGHT,
            color: ChessColor.WHITE,
          },
        },
        {
          location: {
            letter: 'h',
            number: 1,
          },
          piece: {
            type: PieceType.ROOK,
            color: ChessColor.WHITE,
          },
        },
      ],
      number: 1,
    },
  ],
};

export default initialBoard;
