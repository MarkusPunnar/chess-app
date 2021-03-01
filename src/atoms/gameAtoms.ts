import { atom } from 'recoil';
import { ChessColor, GameState } from '../board/interfaces';

export const currentGameState = atom<GameState>({
  key: 'CurrentGameState',
  default: {
    currentTurn: ChessColor.WHITE,
    white: {
      isInCheck: false,
      castleKingSide: true,
      castleQueenSide: true,
    },
    black: {
      isInCheck: false,
      castleKingSide: true,
      castleQueenSide: true,
    },
  },
});
