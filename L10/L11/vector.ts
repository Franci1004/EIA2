namespace L10_Ententeich{
    export class Vector {
        x: number;
        y: number;

        constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
        }

        add(vector: Vector): void {
            this.x += vector.x;
            this.y += vector.y;
        }

        scale(scalar: number): void {
            this.x *= scalar;
            this.y *= scalar;
        }

        copy(): Vector {
            return new Vector(this.x, this.y);
        }
    }
}
