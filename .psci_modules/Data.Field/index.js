import * as Data_CommutativeRing from "../Data.CommutativeRing/index.js";
import * as Data_DivisionRing from "../Data.DivisionRing/index.js";
import * as Data_EuclideanRing from "../Data.EuclideanRing/index.js";
import * as Data_Ring from "../Data.Ring/index.js";
import * as Data_Semiring from "../Data.Semiring/index.js";
var field = function (dictEuclideanRing) {
    return function (dictDivisionRing) {
        return {
            EuclideanRing0: function () {
                return dictEuclideanRing;
            },
            DivisionRing1: function () {
                return dictDivisionRing;
            }
        };
    };
};
export {
    field
};
export {
    recip
} from "../Data.DivisionRing/index.js";
export {
    degree,
    div,
    gcd,
    lcm,
    mod
} from "../Data.EuclideanRing/index.js";
export {
    negate,
    sub
} from "../Data.Ring/index.js";
export {
    add,
    mul,
    one,
    zero
} from "../Data.Semiring/index.js";
