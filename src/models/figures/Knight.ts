import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";

export class Knight extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK 
            ? 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg' 
            : 'https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg';
        this.name = FigureNames.KNIGHT;
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target)) {
            return false;
        }

        const dx = Math.abs(this.cell.x - target.x);
        const dy = Math.abs(this.cell.y - target.y);

        // Knight moves in an L-shape: 2 squares in one direction and 1 square perpendicular
        return (dx === 1 && dy === 2) || (dx === 2 && dy === 1);
    }
}