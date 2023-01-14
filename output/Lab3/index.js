import * as Data_Eq from "../Data.Eq/index.js";
import * as Data_Ord from "../Data.Ord/index.js";
import * as Data_Ordering from "../Data.Ordering/index.js";
import * as Data_Show from "../Data.Show/index.js";
import * as Effect_Console from "../Effect.Console/index.js";
var show1 = /* #__PURE__ */ Data_Show.show(Data_Show.showBoolean);
var Nothing = /* #__PURE__ */ (function () {
    function Nothing() {

    };
    Nothing.value = new Nothing();
    return Nothing;
})();
var Just = /* #__PURE__ */ (function () {
    function Just(value0) {
        this.value0 = value0;
    };
    Just.create = function (value0) {
        return new Just(value0);
    };
    return Just;
})();
var show = function (dictShow) {
    var show4 = Data_Show.show(dictShow);
    return {
        show: function (v) {
            if (v instanceof Just) {
                return "(Just " + (show4(v.value0) + ")");
            };
            return "Nothing";
        }
    };
};
var show2 = /* #__PURE__ */ Data_Show.show(/* #__PURE__ */ show(Data_Show.showString));
var show3 = /* #__PURE__ */ Data_Show.show(/* #__PURE__ */ show(Data_Show.showUnit));
var eqMaybe = function (dictEq) {
    var eq2 = Data_Eq.eq(dictEq);
    return {
        eq: function (v) {
            return function (v1) {
                if (v instanceof Nothing && v1 instanceof Nothing) {
                    return true;
                };
                if (v instanceof Just && v1 instanceof Just) {
                    return eq2(v.value0)(v1.value0);
                };
                return false;
            };
        }
    };
};
var eq = /* #__PURE__ */ Data_Eq.eq(/* #__PURE__ */ eqMaybe(Data_Eq.eqInt));
var eq1 = /* #__PURE__ */ Data_Eq.eq(/* #__PURE__ */ eqMaybe(Data_Eq.eqUnit));
var compare = function (dictOrd) {
    var compare2 = Data_Ord.compare(dictOrd);
    var eqMaybe1 = eqMaybe(dictOrd.Eq0());
    return {
        compare: function (v) {
            return function (v1) {
                if (v instanceof Just && v1 instanceof Just) {
                    return compare2(v.value0)(v1.value0);
                };
                if (v instanceof Just && v1 instanceof Nothing) {
                    return Data_Ordering.GT.value;
                };
                if (v instanceof Nothing && v1 instanceof Just) {
                    return Data_Ordering.LT.value;
                };
                if (v instanceof Nothing && v1 instanceof Nothing) {
                    return Data_Ordering.EQ.value;
                };
                throw new Error("Failed pattern match at Lab3 (line 20, column 1 - line 24, column 31): " + [ v.constructor.name, v1.constructor.name ]);
            };
        },
        Eq0: function () {
            return eqMaybe1;
        }
    };
};
var compare1 = /* #__PURE__ */ compare(Data_Ord.ordInt);
var lessThan = /* #__PURE__ */ Data_Ord.lessThan(compare1);
var lessThanOrEq = /* #__PURE__ */ Data_Ord.lessThanOrEq(compare1);
var greaterThan = /* #__PURE__ */ Data_Ord.greaterThan(compare1);
var greaterThanOrEq = /* #__PURE__ */ Data_Ord.greaterThanOrEq(compare1);
var test = function __do() {
    Effect_Console.log(show1(eq(new Just(5))(new Just(5))))();
    Effect_Console.log(show1(eq(new Just(5))(new Just(2))))();
    Effect_Console.log(show1(eq(new Just(5))(Nothing.value)))();
    Effect_Console.log(show1(eq(Nothing.value)(new Just(5))))();
    Effect_Console.log(show1(eq1(Nothing.value)(Nothing.value)))();
    Effect_Console.log("------------------")();
    Effect_Console.log(show1(lessThan(new Just(1))(new Just(5))))();
    Effect_Console.log(show1(lessThanOrEq(new Just(5))(new Just(5))))();
    Effect_Console.log(show1(greaterThan(new Just(5))(new Just(10))))();
    Effect_Console.log(show1(greaterThanOrEq(new Just(10))(new Just(10))))();
    Effect_Console.log(show1(greaterThan(new Just(99))(Nothing.value)))();
    Effect_Console.log(show1(lessThan(new Just(99))(Nothing.value)))();
    Effect_Console.log(show2(new Just("abc")))();
    return Effect_Console.log(show3(Nothing.value))();
};
export {
    test
};
