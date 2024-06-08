"use strict";
var L10_Ententeich;
(function (L10_Ententeich) {
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
    L10_Ententeich.Vector = Vector;
})(L10_Ententeich || (L10_Ententeich = {}));
//# sourceMappingURL=vector.js.map