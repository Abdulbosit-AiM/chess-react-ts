import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";

export class Pawn extends Figure {
    isFirstStep: boolean = true;

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK 
            ? 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg' 
            : 'https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg';
        this.name = FigureNames.PAWN;
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target)) {
            return false;
        }

        const direction = this.color === Colors.BLACK ? 1 : -1;
        const firstStepDirection = this.color === Colors.BLACK ? 2 : -2;

        // Simple move forward
        if ((target.y === this.cell.y + direction)
            && target.x === this.cell.x
            && this.cell.board.getCell(target.x, target.y).isEmpty()) {
            return true;
        }

        // First move - can go 2 squares forward
        if (this.isFirstStep
            && (target.y === this.cell.y + firstStepDirection)
            && target.x === this.cell.x
            && this.cell.board.getCell(target.x, target.y).isEmpty()
            && this.cell.board.getCell(target.x, this.cell.y + direction).isEmpty()) {
            return true;
        }

        // Attacking diagonally
        if (target.y === this.cell.y + direction
            && (target.x === this.cell.x + 1 || target.x === this.cell.x - 1)
            && this.cell.isEnemy(target)) {
            return true;
        }

        return false;
    }

    moveFigure(target: Cell) {
        super.moveFigure(target);
        this.isFirstStep = false;
    }
}