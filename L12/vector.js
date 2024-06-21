"use strict";
var L12_Ententeich;
(function (L12_Ententeich) {
    class Vector {
        x;
        y;
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        add(vector) {
            this.x += vector.x;
            this.y += vector.y;
        }
        scale(scalar) {
            this.x *= scalar;
            this.y *= scalar;
        }
        copy() {
            return new Vector(this.x, this.y);
        }
    }
    L12_Ententeich.Vector = Vector;
})(L12_Ententeich || (L12_Ententeich = {}));
//# sourceMappingURL=vector.js.map