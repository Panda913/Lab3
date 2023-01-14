import * as $foreign from "./foreign.js";
import * as Data_CommutativeRing from "../Data.CommutativeRing/index.js";
import * as Data_Eq from "../Data.Eq/index.js";
import * as Data_Ring from "../Data.Ring/index.js";
import * as Data_Semiring from "../Data.Semiring/index.js";
var mod = function (dict) {
    return dict.mod;
};

// | The *greatest common divisor* of two values.
var gcd = function (dictEq) {
    var eq = Data_Eq.eq(dictEq);
    return function (dictEuclideanRing) {
        var zero = Data_Semiring.zero(((dictEuclideanRing.CommutativeRing0()).Ring0()).Semiring0());
        var mod1 = mod(dictEuclideanRing);
        return function (a) {
            return function (b) {
                var $24 = eq(b)(zero);
                if ($24) {
                    return a;
                };
                return gcd(dictEq)(dictEuclideanRing)(b)(mod1(a)(b));
            };
        };
    };
};
var euclideanRingNumber = {
    degree: function (v) {
        return 1;
    },
    div: $foreign.numDiv,
    mod: function (v) {
        return function (v1) {
            return 0.0;
        };
    },
    CommutativeRing0: function () {
        return Data_CommutativeRing.commutativeRingNumber;
    }
};
var euclideanRingInt = {
    degree: $foreign.intDegree,
    div: $foreign.intDiv,
    mod: $foreign.intMod,
    CommutativeRing0: function () {
        return Data_CommutativeRing.commutativeRingInt;
    }
};
var div = function (dict) {
    return dict.div;
};

// | The *least common multiple* of two values.
var lcm = function (dictEq) {
    var eq = Data_Eq.eq(dictEq);
    var gcd1 = gcd(dictEq);
    return function (dictEuclideanRing) {
        var Semiring0 = ((dictEuclideanRing.CommutativeRing0()).Ring0()).Semiring0();
        var zero = Data_Semiring.zero(Semiring0);
        var div1 = div(dictEuclideanRing);
        var mul = Data_Semiring.mul(Semiring0);
        var gcd2 = gcd1(dictEuclideanRing);
        return function (a) {
            return function (b) {
                var $26 = eq(a)(zero) || eq(b)(zero);
                if ($26) {
                    return zero;
                };
                return div1(mul(a)(b))(gcd2(a)(b));
            };
        };
    };
};
var degree = function (dict) {
    return dict.degree;
};
export {
    degree,
    div,
    mod,
    gcd,
    lcm,
    euclideanRingInt,
    euclideanRingNumber
};
export {
    sub
} from "../Data.Ring/index.js";
export {
    add,
    mul,
    one,
    zero
} from "../Data.Semiring/index.js";
