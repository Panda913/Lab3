import * as Effect_Class from "../Effect.Class/index.js";
import * as Effect_Console from "../Effect.Console/index.js";
var warnShow = function (dictMonadEffect) {
    var liftEffect = Effect_Class.liftEffect(dictMonadEffect);
    return function (dictShow) {
        var $39 = Effect_Console.warnShow(dictShow);
        return function ($40) {
            return liftEffect($39($40));
        };
    };
};
var warn = function (dictMonadEffect) {
    var $41 = Effect_Class.liftEffect(dictMonadEffect);
    return function ($42) {
        return $41(Effect_Console.warn($42));
    };
};
var timeLog = function (dictMonadEffect) {
    var $43 = Effect_Class.liftEffect(dictMonadEffect);
    return function ($44) {
        return $43(Effect_Console.timeLog($44));
    };
};
var timeEnd = function (dictMonadEffect) {
    var $45 = Effect_Class.liftEffect(dictMonadEffect);
    return function ($46) {
        return $45(Effect_Console.timeEnd($46));
    };
};
var time = function (dictMonadEffect) {
    var $47 = Effect_Class.liftEffect(dictMonadEffect);
    return function ($48) {
        return $47(Effect_Console.time($48));
    };
};
var logShow = function (dictMonadEffect) {
    var liftEffect = Effect_Class.liftEffect(dictMonadEffect);
    return function (dictShow) {
        var $49 = Effect_Console.logShow(dictShow);
        return function ($50) {
            return liftEffect($49($50));
        };
    };
};
var log = function (dictMonadEffect) {
    var $51 = Effect_Class.liftEffect(dictMonadEffect);
    return function ($52) {
        return $51(Effect_Console.log($52));
    };
};
var infoShow = function (dictMonadEffect) {
    var liftEffect = Effect_Class.liftEffect(dictMonadEffect);
    return function (dictShow) {
        var $53 = Effect_Console.infoShow(dictShow);
        return function ($54) {
            return liftEffect($53($54));
        };
    };
};
var info = function (dictMonadEffect) {
    var $55 = Effect_Class.liftEffect(dictMonadEffect);
    return function ($56) {
        return $55(Effect_Console.info($56));
    };
};
var errorShow = function (dictMonadEffect) {
    var liftEffect = Effect_Class.liftEffect(dictMonadEffect);
    return function (dictShow) {
        var $57 = Effect_Console.errorShow(dictShow);
        return function ($58) {
            return liftEffect($57($58));
        };
    };
};
var error = function (dictMonadEffect) {
    var $59 = Effect_Class.liftEffect(dictMonadEffect);
    return function ($60) {
        return $59(Effect_Console.error($60));
    };
};
var debugShow = function (dictMonadEffect) {
    var liftEffect = Effect_Class.liftEffect(dictMonadEffect);
    return function (dictShow) {
        var $61 = Effect_Console.debugShow(dictShow);
        return function ($62) {
            return liftEffect($61($62));
        };
    };
};
var debug = function (dictMonadEffect) {
    var $63 = Effect_Class.liftEffect(dictMonadEffect);
    return function ($64) {
        return $63(Effect_Console.debug($64));
    };
};
var clear = function (dictMonadEffect) {
    return Effect_Class.liftEffect(dictMonadEffect)(Effect_Console.clear);
};
export {
    log,
    logShow,
    warn,
    warnShow,
    error,
    errorShow,
    info,
    infoShow,
    debug,
    debugShow,
    time,
    timeLog,
    timeEnd,
    clear
};
