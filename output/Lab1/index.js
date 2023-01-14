// Generated by purs version 0.15.4
import * as Data_List_Types from "../Data.List.Types/index.js";
import * as Data_Show from "../Data.Show/index.js";
import * as Effect_Console from "../Effect.Console/index.js";
var show = /* #__PURE__ */ Data_Show.show(/* #__PURE__ */ Data_List_Types.showList(Data_Show.showInt));
var show1 = /* #__PURE__ */ Data_Show.show(Data_Show.showBoolean);
var show2 = /* #__PURE__ */ Data_Show.show(Data_Show.showInt);
var snoc = function (v) {
    return function (p) {
        if (v instanceof Data_List_Types.Nil) {
            return new Data_List_Types.Cons(p, Data_List_Types.Nil.value);
        };
        if (v instanceof Data_List_Types.Cons && v.value1 instanceof Data_List_Types.Nil) {
            return new Data_List_Types.Cons(v.value0, new Data_List_Types.Cons(p, Data_List_Types.Nil.value));
        };
        if (v instanceof Data_List_Types.Cons) {
            return new Data_List_Types.Cons(v.value0, snoc(v.value1)(p));
        };
        throw new Error("Failed pattern match at Lab1 (line 20, column 1 - line 20, column 40): " + [ v.constructor.name, p.constructor.name ]);
    };
};
var singleton = function (a) {
    return new Data_List_Types.Cons(a, Data_List_Types.Nil.value);
};
var $$null = function (v) {
    if (v instanceof Data_List_Types.Nil) {
        return true;
    };
    return false;
};
var length = function (v) {
    if (v instanceof Data_List_Types.Nil) {
        return 0;
    };
    if (v instanceof Data_List_Types.Cons) {
        return length(v.value1) + 1 | 0;
    };
    throw new Error("Failed pattern match at Lab1 (line 26, column 1 - line 26, column 34): " + [ v.constructor.name ]);
};
var test = function __do() {
    Effect_Console.log(show(singleton(4)))();
    Effect_Console.log(show1($$null(new Data_List_Types.Cons(4, new Data_List_Types.Cons(4, Data_List_Types.Nil.value)))))();
    Effect_Console.log(show1($$null(Data_List_Types.Nil.value)))();
    Effect_Console.log(show(snoc(new Data_List_Types.Cons(3, new Data_List_Types.Cons(4, new Data_List_Types.Cons(5, new Data_List_Types.Cons(6, new Data_List_Types.Cons(7, new Data_List_Types.Cons(8, new Data_List_Types.Cons(9, new Data_List_Types.Cons(10, Data_List_Types.Nil.value)))))))))(9)))();
    return Effect_Console.log(show2(length(new Data_List_Types.Cons(3, new Data_List_Types.Cons(4, new Data_List_Types.Cons(5, new Data_List_Types.Cons(6, new Data_List_Types.Cons(7, new Data_List_Types.Cons(8, new Data_List_Types.Cons(9, new Data_List_Types.Cons(10, Data_List_Types.Nil.value)))))))))))();
};
export {
    singleton,
    $$null as null,
    snoc,
    length,
    test
};