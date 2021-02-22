import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { boardState, selectedSquareState, targetedSquareState } from '../atoms/boardAtoms';
import BoardRow from './BoardRow';
import { ChessBoard, ChessPiece } from '../board/interfaces';
import { calculateLegalSquares } from '../board/chessMoves';
import { getPieceOnSquare } from '../board/helper/pieceHelper';

const Chessboard: React.FC<{}> = () => {
  const [chessboard, setChessboard] = useRecoilState(boardState);
  const [selectedSquare, setSelectedSquare] = useRecoilState(selectedSquareState);
  const targetedSquare = useRecoilValue(targetedSquareState);
  const targetedSquarePiece = getPieceOnSquare(targetedSquare, chessboard);

  useEffect(() => {
    const piece = selectedSquare?.piece;
    if (piece) {
      handleMove(piece);
      setSelectedSquare(undefined);
    }
  }, [targetedSquare]);

  const handleMove = (piece: ChessPiece) => {
    if (!targetedSquarePiece) {
      const legalSquares = calculateLegalSquares(piece, selectedSquare, chessboard);
      console.log(legalSquares);
      const isMoveAllowed = legalSquares.some((legalSquare) => {
        return (
          legalSquare.location.number === targetedSquare.location.number &&
          legalSquare.location.letter === targetedSquare.location.letter
        );
      });
      if (isMoveAllowed) {
        let updatedBoard: ChessBoard = JSON.parse(JSON.stringify(chessboard));
        updatePiecePosition(updatedBoard, piece);
        removePieceFromOldPosition(updatedBoard);
        setChessboard(updatedBoard);
      }
    }
  };

  const updatePiecePosition = (updatedBoard: ChessBoard, piece: ChessPiece) => {
    const rowIndex = updatedBoard.rows.findIndex((row) => {
      return row.number === targetedSquare?.location.number;
    });
    if (rowIndex !== -1) {
      const squareIndex = updatedBoard.rows[rowIndex].squares.findIndex((square) => {
        return square.location.letter === targetedSquare?.location.letter;
      });
      if (squareIndex !== -1) {
        updatedBoard.rows[rowIndex].squares[squareIndex].piece = piece;
      }
    }
  };

  const removePieceFromOldPosition = (updatedBoard: ChessBoard) => {
    const rowIndex = updatedBoard.rows.findIndex((row) => {
      return row.number === selectedSquare?.location.number;
    });
    if (rowIndex !== -1) {
      const squareIndex = chessboard.rows[rowIndex].squares.findIndex((square) => {
        return square.location.letter === selectedSquare?.location.letter;
      });
      if (squareIndex !== -1) {
        const currentSquare = updatedBoard.rows[rowIndex].squares[squareIndex];
        updatedBoard.rows[rowIndex].squares[squareIndex] = { location: currentSquare.location };
      }
    }
  };

  return (
    <div className={'flex flex-wrap w-400 h-400'}>
      {chessboard.rows.map((row, rowIndex) => (
        <BoardRow row={row} key={rowIndex} />
      ))}
    </div>
  );
};

export default Chessboard;
