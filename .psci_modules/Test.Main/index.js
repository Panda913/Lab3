import * as Effect_Class from "../Effect.Class/index.js";
import * as Effect_Class_Console from "../Effect.Class.Console/index.js";
var log = /* #__PURE__ */ Effect_Class_Console.log(Effect_Class.monadEffectEffect);
var main = function __do() {
    log("\ud83c\udf5d")();
    return log("You should add some tests.")();
};
export {
    main
};
