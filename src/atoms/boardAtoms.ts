import { atom } from 'recoil';
import initialBoard from '../board/initialBoard';
import { ChessBoard, ChessSquare } from '../board/interfaces';

export const boardState = atom<ChessBoard>({
  key: 'BoardState',
  default: initialBoard,
});

export const selectedSquareState = atom<ChessSquare>({
  key: 'SelectedSquareState',
  default: undefined,
});

export const targetedSquareState = atom<ChessSquare>({
  key: 'TargetedSquareState',
  default: undefined,
});
