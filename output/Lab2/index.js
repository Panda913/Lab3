import * as Data_List from "../Data.List/index.js";
import * as Data_List_Types from "../Data.List.Types/index.js";
import * as Data_Maybe from "../Data.Maybe/index.js";
import * as Data_Semiring from "../Data.Semiring/index.js";
import * as Data_Show from "../Data.Show/index.js";
import * as Data_Tuple from "../Data.Tuple/index.js";
import * as Effect_Console from "../Effect.Console/index.js";
var show = /* #__PURE__ */ Data_Show.show(/* #__PURE__ */ Data_List_Types.showList(Data_Show.showInt));
var semiringMaybe = /* #__PURE__ */ Data_Maybe.semiringMaybe(Data_Semiring.semiringInt);
var add = /* #__PURE__ */ Data_Semiring.add(semiringMaybe);
var mul = /* #__PURE__ */ Data_Semiring.mul(semiringMaybe);
var zip = function (v) {
    return function (v1) {
        if (v1 instanceof Data_List_Types.Nil) {
            return Data_List_Types.Nil.value;
        };
        if (v instanceof Data_List_Types.Nil) {
            return Data_List_Types.Nil.value;
        };
        if (v instanceof Data_List_Types.Cons && (v.value1 instanceof Data_List_Types.Nil && (v1 instanceof Data_List_Types.Cons && v1.value1 instanceof Data_List_Types.Nil))) {
            return new Data_List_Types.Cons(new Data_Tuple.Tuple(v.value0, v1.value0), Data_List_Types.Nil.value);
        };
        if (v instanceof Data_List_Types.Cons && (v.value1 instanceof Data_List_Types.Nil && v1 instanceof Data_List_Types.Cons)) {
            return new Data_List_Types.Cons(new Data_Tuple.Tuple(v.value0, v1.value0), Data_List_Types.Nil.value);
        };
        if (v instanceof Data_List_Types.Cons && (v1 instanceof Data_List_Types.Cons && v1.value1 instanceof Data_List_Types.Nil)) {
            return new Data_List_Types.Cons(new Data_Tuple.Tuple(v.value0, v1.value0), Data_List_Types.Nil.value);
        };
        if (v instanceof Data_List_Types.Cons && v1 instanceof Data_List_Types.Cons) {
            return new Data_List_Types.Cons(new Data_Tuple.Tuple(v.value0, v1.value0), zip(v.value1)(v1.value1));
        };
        throw new Error("Failed pattern match at Lab2 (line 30, column 1 - line 30, column 56): " + [ v.constructor.name, v1.constructor.name ]);
    };
};
var unzip = function (v) {
    if (v instanceof Data_List_Types.Nil) {
        return new Data_Tuple.Tuple(Data_List_Types.Nil.value, Data_List_Types.Nil.value);
    };
    if (v instanceof Data_List_Types.Cons && v.value1 instanceof Data_List_Types.Nil) {
        return new Data_Tuple.Tuple(new Data_List_Types.Cons(v.value0.value0, Data_List_Types.Nil.value), new Data_List_Types.Cons(v.value0.value1, Data_List_Types.Nil.value));
    };
    if (v instanceof Data_List_Types.Cons) {
        return new Data_Tuple.Tuple(new Data_List_Types.Cons(v.value0.value0, Data_Tuple.fst(unzip(v.value1))), new Data_List_Types.Cons(v.value0.value1, Data_Tuple.snd(unzip(v.value1))));
    };
    throw new Error("Failed pattern match at Lab2 (line 39, column 1 - line 39, column 65): " + [ v.constructor.name ]);
};
var take = function (v) {
    return function (v1) {
        if (v1 instanceof Data_List_Types.Nil) {
            return Data_List_Types.Nil.value;
        };
        if (v === 1 && v1 instanceof Data_List_Types.Cons) {
            return new Data_List_Types.Cons(v1.value0, Data_List_Types.Nil.value);
        };
        if (v1 instanceof Data_List_Types.Cons && v1.value1 instanceof Data_List_Types.Nil) {
            return new Data_List_Types.Cons(v1.value0, Data_List_Types.Nil.value);
        };
        if (v1 instanceof Data_List_Types.Cons) {
            return new Data_List_Types.Cons(v1.value0, take(v - 1 | 0)(v1.value1));
        };
        throw new Error("Failed pattern match at Lab2 (line 59, column 1 - line 59, column 42): " + [ v.constructor.name, v1.constructor.name ]);
    };
};
var tailRecursionTake = function ($copy_v) {
    return function ($copy_v1) {
        return function ($copy_v2) {
            var $tco_var_v = $copy_v;
            var $tco_var_v1 = $copy_v1;
            var $tco_done = false;
            var $tco_result;
            function $tco_loop(v, v1, v2) {
                if (v1 instanceof Data_List_Types.Nil) {
                    $tco_done = true;
                    return Data_List_Types.Nil.value;
                };
                if (v === 1 && v1 instanceof Data_List_Types.Cons) {
                    $tco_done = true;
                    return Data_List.reverse(new Data_List_Types.Cons(v1.value0, v2));
                };
                if (v1 instanceof Data_List_Types.Cons && v1.value1 instanceof Data_List_Types.Nil) {
                    $tco_done = true;
                    return Data_List.reverse(new Data_List_Types.Cons(v1.value0, v2));
                };
                if (v1 instanceof Data_List_Types.Cons) {
                    $tco_var_v = v - 1 | 0;
                    $tco_var_v1 = v1.value1;
                    $copy_v2 = new Data_List_Types.Cons(v1.value0, v2);
                    return;
                };
                throw new Error("Failed pattern match at Lab2 (line 65, column 1 - line 65, column 63): " + [ v.constructor.name, v1.constructor.name, v2.constructor.name ]);
            };
            while (!$tco_done) {
                $tco_result = $tco_loop($tco_var_v, $tco_var_v1, $copy_v2);
            };
            return $tco_result;
        };
    };
};
var tailRecursionFilter = function ($copy_v) {
    return function ($copy_v1) {
        return function ($copy_zs) {
            var $tco_var_v = $copy_v;
            var $tco_var_v1 = $copy_v1;
            var $tco_done = false;
            var $tco_result;
            function $tco_loop(v, v1, zs) {
                if (v1 instanceof Data_List_Types.Nil) {
                    $tco_done = true;
                    return Data_List.reverse(zs);
                };
                if (v1 instanceof Data_List_Types.Cons && (v1.value1 instanceof Data_List_Types.Nil && v(v1.value0))) {
                    $tco_done = true;
                    return Data_List.reverse(new Data_List_Types.Cons(v1.value0, zs));
                };
                if (v1 instanceof Data_List_Types.Cons && v(v1.value0)) {
                    $tco_var_v = v;
                    $tco_var_v1 = v1.value1;
                    $copy_zs = new Data_List_Types.Cons(v1.value0, zs);
                    return;
                };
                if (v1 instanceof Data_List_Types.Cons) {
                    $tco_var_v = v;
                    $tco_var_v1 = v1.value1;
                    $copy_zs = zs;
                    return;
                };
                throw new Error("Failed pattern match at Lab2 (line 53, column 1 - line 53, column 76): " + [ v.constructor.name, v1.constructor.name, zs.constructor.name ]);
            };
            while (!$tco_done) {
                $tco_result = $tco_loop($tco_var_v, $tco_var_v1, $copy_zs);
            };
            return $tco_result;
        };
    };
};
var test = function __do() {
    Effect_Console.log(show(tailRecursionTake(4)(new Data_List_Types.Cons(1, new Data_List_Types.Cons(2, new Data_List_Types.Cons(4, new Data_List_Types.Cons(3, new Data_List_Types.Cons(5, new Data_List_Types.Cons(6, new Data_List_Types.Cons(9, Data_List_Types.Nil.value))))))))(Data_List_Types.Nil.value)))();
    return Effect_Console.log(show(tailRecursionFilter(function (x) {
        return x > 5;
    })(new Data_List_Types.Cons(1, new Data_List_Types.Cons(2, new Data_List_Types.Cons(4, new Data_List_Types.Cons(3, new Data_List_Types.Cons(5, new Data_List_Types.Cons(6, new Data_List_Types.Cons(9, Data_List_Types.Nil.value))))))))(Data_List_Types.Nil.value)))();
};
var findIndex = function (v) {
    return function (v1) {
        if (v1 instanceof Data_List_Types.Nil) {
            return Data_Maybe.Nothing.value;
        };
        if (v1 instanceof Data_List_Types.Cons && v(v1.value0)) {
            return new Data_Maybe.Just(0);
        };
        if (v1 instanceof Data_List_Types.Cons) {
            var v2 = findIndex(v)(v1.value1);
            if (v2 instanceof Data_Maybe.Nothing) {
                return Data_Maybe.Nothing.value;
            };
            return add(v2)(new Data_Maybe.Just(1));
        };
        throw new Error("Failed pattern match at Lab2 (line 15, column 1 - line 15, column 61): " + [ v.constructor.name, v1.constructor.name ]);
    };
};
var findLastIndex = function (n) {
    return function (xs) {
        var v = findIndex(n)(Data_List.reverse(xs));
        if (v instanceof Data_Maybe.Nothing) {
            return Data_Maybe.Nothing.value;
        };
        return add(new Data_Maybe.Just(Data_List.length(xs) - 1 | 0))(mul(new Data_Maybe.Just(-1 | 0))(v));
    };
};
var filter = function (v) {
    return function (v1) {
        if (v1 instanceof Data_List_Types.Nil) {
            return Data_List_Types.Nil.value;
        };
        if (v1 instanceof Data_List_Types.Cons && (v1.value1 instanceof Data_List_Types.Nil && v(v1.value0))) {
            return new Data_List_Types.Cons(v1.value0, Data_List_Types.Nil.value);
        };
        if (v1 instanceof Data_List_Types.Cons && v1.value1 instanceof Data_List_Types.Nil) {
            return Data_List_Types.Nil.value;
        };
        if (v1 instanceof Data_List_Types.Cons && v(v1.value0)) {
            return new Data_List_Types.Cons(v1.value0, filter(v)(v1.value1));
        };
        if (v1 instanceof Data_List_Types.Cons) {
            return filter(v)(v1.value1);
        };
        throw new Error("Failed pattern match at Lab2 (line 46, column 1 - line 46, column 55): " + [ v.constructor.name, v1.constructor.name ]);
    };
};
export {
    test
};
