import { atom } from 'recoil';
import initialBoard from '../board/initialBoard';
import { ChessBoard, ChessMove, ChessSquare } from '../board/interfaces';

export const boardState = atom<ChessBoard>({
  key: 'BoardState',
  default: initialBoard,
});

export const legalMovesState = atom<ChessSquare[]>({
  key: 'LegalMovesState',
  default: [],
});

export const selectedSquareState = atom<ChessSquare>({
  key: 'SelectedSquareState',
  default: undefined,
});

export const chessMoveState = atom<ChessMove>({
  key: 'ChessMoveState',
  default: undefined,
});
