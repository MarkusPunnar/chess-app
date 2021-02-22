import React from 'react';
import { ChessBoardRow, SquareColor } from '../board/interfaces';
import Square from './Square';

interface RowProps {
  row: ChessBoardRow;
}

const BoardRow: React.FC<RowProps> = ({ row }) => {
  return (
    <>
      {row.squares.map((square, colIndex) => {
        let color: SquareColor;
        if ((row.number - 1 + colIndex) % 2 === 0) {
          color = SquareColor.LIGHT;
        } else {
          color = SquareColor.DARK;
        }
        return <Square key={`${square.location.letter}${square.location.number}`} color={color} square={square} />;
      })}
    </>
  );
};

export default BoardRow;
