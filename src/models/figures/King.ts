import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";

export class King extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK 
            ? 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg' 
            : 'https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg';
        this.name = FigureNames.KING;
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target)) {
            return false;
        }

        // King can move only 1 square in any direction
        const dx = Math.abs(this.cell.x - target.x);
        const dy = Math.abs(this.cell.y - target.y);

        return (dx <= 1 && dy <= 1);
    }
}