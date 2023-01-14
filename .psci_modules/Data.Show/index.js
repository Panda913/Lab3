import * as $foreign from "./foreign.js";
import * as Data_Symbol from "../Data.Symbol/index.js";
import * as Data_Void from "../Data.Void/index.js";
import * as Record_Unsafe from "../Record.Unsafe/index.js";
import * as Type_Proxy from "../Type.Proxy/index.js";
var showVoid = {
    show: Data_Void.absurd
};
var showUnit = {
    show: function (v) {
        return "unit";
    }
};
var showString = {
    show: $foreign.showStringImpl
};
var showRecordFieldsNil = {
    showRecordFields: function (v) {
        return function (v1) {
            return "";
        };
    }
};
var showRecordFields = function (dict) {
    return dict.showRecordFields;
};
var showRecord = function () {
    return function () {
        return function (dictShowRecordFields) {
            var showRecordFields1 = showRecordFields(dictShowRecordFields);
            return {
                show: function (record) {
                    return "{" + (showRecordFields1(Type_Proxy["Proxy"].value)(record) + "}");
                }
            };
        };
    };
};
var showProxy = {
    show: function (v) {
        return "Proxy";
    }
};
var showNumber = {
    show: $foreign.showNumberImpl
};
var showInt = {
    show: $foreign.showIntImpl
};
var showChar = {
    show: $foreign.showCharImpl
};
var showBoolean = {
    show: function (v) {
        if (v) {
            return "true";
        };
        if (!v) {
            return "false";
        };
        throw new Error("Failed pattern match at Data.Show (line 29, column 1 - line 31, column 23): " + [ v.constructor.name ]);
    }
};
var show = function (dict) {
    return dict.show;
};
var showArray = function (dictShow) {
    return {
        show: $foreign.showArrayImpl(show(dictShow))
    };
};
var showRecordFieldsCons = function (dictIsSymbol) {
    var reflectSymbol = Data_Symbol.reflectSymbol(dictIsSymbol);
    return function (dictShowRecordFields) {
        var showRecordFields1 = showRecordFields(dictShowRecordFields);
        return function (dictShow) {
            var show1 = show(dictShow);
            return {
                showRecordFields: function (v) {
                    return function (record) {
                        var tail = showRecordFields1(Type_Proxy["Proxy"].value)(record);
                        var key = reflectSymbol(Type_Proxy["Proxy"].value);
                        var focus = Record_Unsafe.unsafeGet(key)(record);
                        return " " + (key + (": " + (show1(focus) + ("," + tail))));
                    };
                }
            };
        };
    };
};
var showRecordFieldsConsNil = function (dictIsSymbol) {
    var reflectSymbol = Data_Symbol.reflectSymbol(dictIsSymbol);
    return function (dictShow) {
        var show1 = show(dictShow);
        return {
            showRecordFields: function (v) {
                return function (record) {
                    var key = reflectSymbol(Type_Proxy["Proxy"].value);
                    var focus = Record_Unsafe.unsafeGet(key)(record);
                    return " " + (key + (": " + (show1(focus) + " ")));
                };
            }
        };
    };
};
export {
    show,
    showRecordFields,
    showUnit,
    showBoolean,
    showInt,
    showNumber,
    showChar,
    showString,
    showArray,
    showProxy,
    showVoid,
    showRecord,
    showRecordFieldsNil,
    showRecordFieldsConsNil,
    showRecordFieldsCons
};
