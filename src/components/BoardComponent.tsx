import React  from "react";
import { Board } from "../models/Board";
import type { Cell } from "../models/Cell";
import CellComponent from "./CellComponent";

interface BoardProps {
    board: Board
    setBoard: (board: Board) => void
}

const BoardComponent = () => {
    return (
        <div className="board">
            {Board.cells.map((row: Cell, index: number) => 
                <React.Fragment key={index}>

                    {row.map(cell => 
                        <CellComponent 

                        />
                    )}
            
                </React.Fragment>
            )}
        </div>
    )
}

export default BoardComponent