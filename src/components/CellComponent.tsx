import React from "react";
import { Cell } from "../models/Cell";

interface CellProps {
  cell: Cell;
  selected: boolean;
  click: (cell: Cell) => void;
}

const CellComponent: React.FC<CellProps> = ({ cell, selected, click }) => {
  return (
    <div
      className={['cell', cell.color, selected ? 'selected' : '', cell.available && cell.figure ? 'available-attack' : '', cell.available && !cell.figure ? 'available' : ''].join(' ')}
      onClick={() => click(cell)}
    >
      {cell.available && !cell.figure && <div className="available-circle" />}
      {cell.figure?.logo && <img src={cell.figure.logo} alt={cell.figure.name} />}
    </div>
  );
};

export default CellComponent;