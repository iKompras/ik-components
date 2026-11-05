var kI = Object.defineProperty;
var NI = (e, t, n) => t in e ? kI(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ul = (e, t, n) => NI(e, typeof t != "symbol" ? t + "" : t, n);
import { jsxs as ce, jsx as k, Fragment as No } from "react/jsx-runtime";
import * as L from "react";
import J, { Children as nm, PureComponent as B_, Component as Gn, createRef as br, isValidElement as II, cloneElement as W_, createElement as dp, createContext as AI, useContext as RI, forwardRef as rm, useState as ot, useMemo as MI, useEffect as Zt, useRef as Ln, useCallback as Vp, useLayoutEffect as DI } from "react";
import * as Gp from "react-dom";
import LI, { createPortal as U_ } from "react-dom";
import { connect as FI } from "react-redux";
var rs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function uc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Kp = { exports: {} }, vu = { exports: {} }, Wt = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eb;
function $I() {
  if (eb) return Wt;
  eb = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, u = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, _ = e ? Symbol.for("react.block") : 60121, E = e ? Symbol.for("react.fundamental") : 60117, A = e ? Symbol.for("react.responder") : 60118, F = e ? Symbol.for("react.scope") : 60119;
  function x(O) {
    if (typeof O == "object" && O !== null) {
      var S = O.$$typeof;
      switch (S) {
        case t:
          switch (O = O.type, O) {
            case d:
            case p:
            case r:
            case s:
            case o:
            case m:
              return O;
            default:
              switch (O = O && O.$$typeof, O) {
                case c:
                case h:
                case b:
                case y:
                case u:
                  return O;
                default:
                  return S;
              }
          }
        case n:
          return S;
      }
    }
  }
  function I(O) {
    return x(O) === p;
  }
  return Wt.AsyncMode = d, Wt.ConcurrentMode = p, Wt.ContextConsumer = c, Wt.ContextProvider = u, Wt.Element = t, Wt.ForwardRef = h, Wt.Fragment = r, Wt.Lazy = b, Wt.Memo = y, Wt.Portal = n, Wt.Profiler = s, Wt.StrictMode = o, Wt.Suspense = m, Wt.isAsyncMode = function(O) {
    return I(O) || x(O) === d;
  }, Wt.isConcurrentMode = I, Wt.isContextConsumer = function(O) {
    return x(O) === c;
  }, Wt.isContextProvider = function(O) {
    return x(O) === u;
  }, Wt.isElement = function(O) {
    return typeof O == "object" && O !== null && O.$$typeof === t;
  }, Wt.isForwardRef = function(O) {
    return x(O) === h;
  }, Wt.isFragment = function(O) {
    return x(O) === r;
  }, Wt.isLazy = function(O) {
    return x(O) === b;
  }, Wt.isMemo = function(O) {
    return x(O) === y;
  }, Wt.isPortal = function(O) {
    return x(O) === n;
  }, Wt.isProfiler = function(O) {
    return x(O) === s;
  }, Wt.isStrictMode = function(O) {
    return x(O) === o;
  }, Wt.isSuspense = function(O) {
    return x(O) === m;
  }, Wt.isValidElementType = function(O) {
    return typeof O == "string" || typeof O == "function" || O === r || O === p || O === s || O === o || O === m || O === v || typeof O == "object" && O !== null && (O.$$typeof === b || O.$$typeof === y || O.$$typeof === u || O.$$typeof === c || O.$$typeof === h || O.$$typeof === E || O.$$typeof === A || O.$$typeof === F || O.$$typeof === _);
  }, Wt.typeOf = x, Wt;
}
var Ut = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tb;
function BI() {
  return tb || (tb = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, u = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, _ = e ? Symbol.for("react.block") : 60121, E = e ? Symbol.for("react.fundamental") : 60117, A = e ? Symbol.for("react.responder") : 60118, F = e ? Symbol.for("react.scope") : 60119;
    function x(D) {
      return typeof D == "string" || typeof D == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      D === r || D === p || D === s || D === o || D === m || D === v || typeof D == "object" && D !== null && (D.$$typeof === b || D.$$typeof === y || D.$$typeof === u || D.$$typeof === c || D.$$typeof === h || D.$$typeof === E || D.$$typeof === A || D.$$typeof === F || D.$$typeof === _);
    }
    function I(D) {
      if (typeof D == "object" && D !== null) {
        var G = D.$$typeof;
        switch (G) {
          case t:
            var K = D.type;
            switch (K) {
              case d:
              case p:
              case r:
              case s:
              case o:
              case m:
                return K;
              default:
                var le = K && K.$$typeof;
                switch (le) {
                  case c:
                  case h:
                  case b:
                  case y:
                  case u:
                    return le;
                  default:
                    return G;
                }
            }
          case n:
            return G;
        }
      }
    }
    var O = d, S = p, C = c, T = u, N = t, B = h, H = r, ne = b, z = y, re = n, he = s, ve = o, Te = m, de = !1;
    function ye(D) {
      return de || (de = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), ee(D) || I(D) === d;
    }
    function ee(D) {
      return I(D) === p;
    }
    function oe(D) {
      return I(D) === c;
    }
    function se(D) {
      return I(D) === u;
    }
    function Ee(D) {
      return typeof D == "object" && D !== null && D.$$typeof === t;
    }
    function Pe(D) {
      return I(D) === h;
    }
    function Se(D) {
      return I(D) === r;
    }
    function ge(D) {
      return I(D) === b;
    }
    function ke(D) {
      return I(D) === y;
    }
    function De(D) {
      return I(D) === n;
    }
    function U(D) {
      return I(D) === s;
    }
    function j(D) {
      return I(D) === o;
    }
    function $(D) {
      return I(D) === m;
    }
    Ut.AsyncMode = O, Ut.ConcurrentMode = S, Ut.ContextConsumer = C, Ut.ContextProvider = T, Ut.Element = N, Ut.ForwardRef = B, Ut.Fragment = H, Ut.Lazy = ne, Ut.Memo = z, Ut.Portal = re, Ut.Profiler = he, Ut.StrictMode = ve, Ut.Suspense = Te, Ut.isAsyncMode = ye, Ut.isConcurrentMode = ee, Ut.isContextConsumer = oe, Ut.isContextProvider = se, Ut.isElement = Ee, Ut.isForwardRef = Pe, Ut.isFragment = Se, Ut.isLazy = ge, Ut.isMemo = ke, Ut.isPortal = De, Ut.isProfiler = U, Ut.isStrictMode = j, Ut.isSuspense = $, Ut.isValidElementType = x, Ut.typeOf = I;
  }()), Ut;
}
var nb;
function am() {
  return nb || (nb = 1, process.env.NODE_ENV === "production" ? vu.exports = $I() : vu.exports = BI()), vu.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var fp, rb;
function WI() {
  if (rb) return fp;
  rb = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var u = {}, c = 0; c < 10; c++)
        u["_" + String.fromCharCode(c)] = c;
      var d = Object.getOwnPropertyNames(u).map(function(h) {
        return u[h];
      });
      if (d.join("") !== "0123456789")
        return !1;
      var p = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(h) {
        p[h] = h;
      }), Object.keys(Object.assign({}, p)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return fp = o() ? Object.assign : function(s, u) {
    for (var c, d = r(s), p, h = 1; h < arguments.length; h++) {
      c = Object(arguments[h]);
      for (var m in c)
        t.call(c, m) && (d[m] = c[m]);
      if (e) {
        p = e(c);
        for (var v = 0; v < p.length; v++)
          n.call(c, p[v]) && (d[p[v]] = c[p[v]]);
      }
    }
    return d;
  }, fp;
}
var pp, ab;
function om() {
  if (ab) return pp;
  ab = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return pp = e, pp;
}
var hp, ob;
function j_() {
  return ob || (ob = 1, hp = Function.call.bind(Object.prototype.hasOwnProperty)), hp;
}
var mp, ib;
function UI() {
  if (ib) return mp;
  ib = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = om(), n = {}, r = j_();
    e = function(s) {
      var u = "Warning: " + s;
      typeof console < "u" && console.error(u);
      try {
        throw new Error(u);
      } catch {
      }
    };
  }
  function o(s, u, c, d, p) {
    if (process.env.NODE_ENV !== "production") {
      for (var h in s)
        if (r(s, h)) {
          var m;
          try {
            if (typeof s[h] != "function") {
              var v = Error(
                (d || "React class") + ": " + c + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw v.name = "Invariant Violation", v;
            }
            m = s[h](u, h, d, c, null, t);
          } catch (b) {
            m = b;
          }
          if (m && !(m instanceof Error) && e(
            (d || "React class") + ": type specification of " + c + " `" + h + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in n)) {
            n[m.message] = !0;
            var y = p ? p() : "";
            e(
              "Failed " + c + " type: " + m.message + (y ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, mp = o, mp;
}
var gp, sb;
function jI() {
  if (sb) return gp;
  sb = 1;
  var e = am(), t = WI(), n = om(), r = j_(), o = UI(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(c) {
    var d = "Warning: " + c;
    typeof console < "u" && console.error(d);
    try {
      throw new Error(d);
    } catch {
    }
  });
  function u() {
    return null;
  }
  return gp = function(c, d) {
    var p = typeof Symbol == "function" && Symbol.iterator, h = "@@iterator";
    function m(ee) {
      var oe = ee && (p && ee[p] || ee[h]);
      if (typeof oe == "function")
        return oe;
    }
    var v = "<<anonymous>>", y = {
      array: A("array"),
      bigint: A("bigint"),
      bool: A("boolean"),
      func: A("function"),
      number: A("number"),
      object: A("object"),
      string: A("string"),
      symbol: A("symbol"),
      any: F(),
      arrayOf: x,
      element: I(),
      elementType: O(),
      instanceOf: S,
      node: B(),
      objectOf: T,
      oneOf: C,
      oneOfType: N,
      shape: ne,
      exact: z
    };
    function b(ee, oe) {
      return ee === oe ? ee !== 0 || 1 / ee === 1 / oe : ee !== ee && oe !== oe;
    }
    function _(ee, oe) {
      this.message = ee, this.data = oe && typeof oe == "object" ? oe : {}, this.stack = "";
    }
    _.prototype = Error.prototype;
    function E(ee) {
      if (process.env.NODE_ENV !== "production")
        var oe = {}, se = 0;
      function Ee(Se, ge, ke, De, U, j, $) {
        if (De = De || v, j = j || ke, $ !== n) {
          if (d) {
            var D = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw D.name = "Invariant Violation", D;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var G = De + ":" + ke;
            !oe[G] && // Avoid spamming the console because they are often not actionable except for lib authors
            se < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + j + "` prop on `" + De + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), oe[G] = !0, se++);
          }
        }
        return ge[ke] == null ? Se ? ge[ke] === null ? new _("The " + U + " `" + j + "` is marked as required " + ("in `" + De + "`, but its value is `null`.")) : new _("The " + U + " `" + j + "` is marked as required in " + ("`" + De + "`, but its value is `undefined`.")) : null : ee(ge, ke, De, U, j);
      }
      var Pe = Ee.bind(null, !1);
      return Pe.isRequired = Ee.bind(null, !0), Pe;
    }
    function A(ee) {
      function oe(se, Ee, Pe, Se, ge, ke) {
        var De = se[Ee], U = ve(De);
        if (U !== ee) {
          var j = Te(De);
          return new _(
            "Invalid " + Se + " `" + ge + "` of type " + ("`" + j + "` supplied to `" + Pe + "`, expected ") + ("`" + ee + "`."),
            { expectedType: ee }
          );
        }
        return null;
      }
      return E(oe);
    }
    function F() {
      return E(u);
    }
    function x(ee) {
      function oe(se, Ee, Pe, Se, ge) {
        if (typeof ee != "function")
          return new _("Property `" + ge + "` of component `" + Pe + "` has invalid PropType notation inside arrayOf.");
        var ke = se[Ee];
        if (!Array.isArray(ke)) {
          var De = ve(ke);
          return new _("Invalid " + Se + " `" + ge + "` of type " + ("`" + De + "` supplied to `" + Pe + "`, expected an array."));
        }
        for (var U = 0; U < ke.length; U++) {
          var j = ee(ke, U, Pe, Se, ge + "[" + U + "]", n);
          if (j instanceof Error)
            return j;
        }
        return null;
      }
      return E(oe);
    }
    function I() {
      function ee(oe, se, Ee, Pe, Se) {
        var ge = oe[se];
        if (!c(ge)) {
          var ke = ve(ge);
          return new _("Invalid " + Pe + " `" + Se + "` of type " + ("`" + ke + "` supplied to `" + Ee + "`, expected a single ReactElement."));
        }
        return null;
      }
      return E(ee);
    }
    function O() {
      function ee(oe, se, Ee, Pe, Se) {
        var ge = oe[se];
        if (!e.isValidElementType(ge)) {
          var ke = ve(ge);
          return new _("Invalid " + Pe + " `" + Se + "` of type " + ("`" + ke + "` supplied to `" + Ee + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return E(ee);
    }
    function S(ee) {
      function oe(se, Ee, Pe, Se, ge) {
        if (!(se[Ee] instanceof ee)) {
          var ke = ee.name || v, De = ye(se[Ee]);
          return new _("Invalid " + Se + " `" + ge + "` of type " + ("`" + De + "` supplied to `" + Pe + "`, expected ") + ("instance of `" + ke + "`."));
        }
        return null;
      }
      return E(oe);
    }
    function C(ee) {
      if (!Array.isArray(ee))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), u;
      function oe(se, Ee, Pe, Se, ge) {
        for (var ke = se[Ee], De = 0; De < ee.length; De++)
          if (b(ke, ee[De]))
            return null;
        var U = JSON.stringify(ee, function($, D) {
          var G = Te(D);
          return G === "symbol" ? String(D) : D;
        });
        return new _("Invalid " + Se + " `" + ge + "` of value `" + String(ke) + "` " + ("supplied to `" + Pe + "`, expected one of " + U + "."));
      }
      return E(oe);
    }
    function T(ee) {
      function oe(se, Ee, Pe, Se, ge) {
        if (typeof ee != "function")
          return new _("Property `" + ge + "` of component `" + Pe + "` has invalid PropType notation inside objectOf.");
        var ke = se[Ee], De = ve(ke);
        if (De !== "object")
          return new _("Invalid " + Se + " `" + ge + "` of type " + ("`" + De + "` supplied to `" + Pe + "`, expected an object."));
        for (var U in ke)
          if (r(ke, U)) {
            var j = ee(ke, U, Pe, Se, ge + "." + U, n);
            if (j instanceof Error)
              return j;
          }
        return null;
      }
      return E(oe);
    }
    function N(ee) {
      if (!Array.isArray(ee))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), u;
      for (var oe = 0; oe < ee.length; oe++) {
        var se = ee[oe];
        if (typeof se != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + de(se) + " at index " + oe + "."
          ), u;
      }
      function Ee(Pe, Se, ge, ke, De) {
        for (var U = [], j = 0; j < ee.length; j++) {
          var $ = ee[j], D = $(Pe, Se, ge, ke, De, n);
          if (D == null)
            return null;
          D.data && r(D.data, "expectedType") && U.push(D.data.expectedType);
        }
        var G = U.length > 0 ? ", expected one of type [" + U.join(", ") + "]" : "";
        return new _("Invalid " + ke + " `" + De + "` supplied to " + ("`" + ge + "`" + G + "."));
      }
      return E(Ee);
    }
    function B() {
      function ee(oe, se, Ee, Pe, Se) {
        return re(oe[se]) ? null : new _("Invalid " + Pe + " `" + Se + "` supplied to " + ("`" + Ee + "`, expected a ReactNode."));
      }
      return E(ee);
    }
    function H(ee, oe, se, Ee, Pe) {
      return new _(
        (ee || "React class") + ": " + oe + " type `" + se + "." + Ee + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + Pe + "`."
      );
    }
    function ne(ee) {
      function oe(se, Ee, Pe, Se, ge) {
        var ke = se[Ee], De = ve(ke);
        if (De !== "object")
          return new _("Invalid " + Se + " `" + ge + "` of type `" + De + "` " + ("supplied to `" + Pe + "`, expected `object`."));
        for (var U in ee) {
          var j = ee[U];
          if (typeof j != "function")
            return H(Pe, Se, ge, U, Te(j));
          var $ = j(ke, U, Pe, Se, ge + "." + U, n);
          if ($)
            return $;
        }
        return null;
      }
      return E(oe);
    }
    function z(ee) {
      function oe(se, Ee, Pe, Se, ge) {
        var ke = se[Ee], De = ve(ke);
        if (De !== "object")
          return new _("Invalid " + Se + " `" + ge + "` of type `" + De + "` " + ("supplied to `" + Pe + "`, expected `object`."));
        var U = t({}, se[Ee], ee);
        for (var j in U) {
          var $ = ee[j];
          if (r(ee, j) && typeof $ != "function")
            return H(Pe, Se, ge, j, Te($));
          if (!$)
            return new _(
              "Invalid " + Se + " `" + ge + "` key `" + j + "` supplied to `" + Pe + "`.\nBad object: " + JSON.stringify(se[Ee], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(ee), null, "  ")
            );
          var D = $(ke, j, Pe, Se, ge + "." + j, n);
          if (D)
            return D;
        }
        return null;
      }
      return E(oe);
    }
    function re(ee) {
      switch (typeof ee) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !ee;
        case "object":
          if (Array.isArray(ee))
            return ee.every(re);
          if (ee === null || c(ee))
            return !0;
          var oe = m(ee);
          if (oe) {
            var se = oe.call(ee), Ee;
            if (oe !== ee.entries) {
              for (; !(Ee = se.next()).done; )
                if (!re(Ee.value))
                  return !1;
            } else
              for (; !(Ee = se.next()).done; ) {
                var Pe = Ee.value;
                if (Pe && !re(Pe[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function he(ee, oe) {
      return ee === "symbol" ? !0 : oe ? oe["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && oe instanceof Symbol : !1;
    }
    function ve(ee) {
      var oe = typeof ee;
      return Array.isArray(ee) ? "array" : ee instanceof RegExp ? "object" : he(oe, ee) ? "symbol" : oe;
    }
    function Te(ee) {
      if (typeof ee > "u" || ee === null)
        return "" + ee;
      var oe = ve(ee);
      if (oe === "object") {
        if (ee instanceof Date)
          return "date";
        if (ee instanceof RegExp)
          return "regexp";
      }
      return oe;
    }
    function de(ee) {
      var oe = Te(ee);
      switch (oe) {
        case "array":
        case "object":
          return "an " + oe;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + oe;
        default:
          return oe;
      }
    }
    function ye(ee) {
      return !ee.constructor || !ee.constructor.name ? v : ee.constructor.name;
    }
    return y.checkPropTypes = o, y.resetWarningCache = o.resetWarningCache, y.PropTypes = y, y;
  }, gp;
}
var vp, lb;
function zI() {
  if (lb) return vp;
  lb = 1;
  var e = om();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, vp = function() {
    function r(u, c, d, p, h, m) {
      if (m !== e) {
        var v = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw v.name = "Invariant Violation", v;
      }
    }
    r.isRequired = r;
    function o() {
      return r;
    }
    var s = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: o,
      element: r,
      elementType: r,
      instanceOf: o,
      node: r,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return s.PropTypes = s, s;
  }, vp;
}
if (process.env.NODE_ENV !== "production") {
  var HI = am(), YI = !0;
  Kp.exports = jI()(HI.isElement, YI);
} else
  Kp.exports = zI()();
var er = Kp.exports;
const l = /* @__PURE__ */ uc(er);
function qI(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
var VI = am();
function Zp(e, t) {
  return Zp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Zp(e, t);
}
function Jt(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Zp(e, t);
}
var ga = function(t, n) {
  if (process.env.NODE_ENV !== "production" && typeof t == "string")
    throw new Error("We do not support refs as string, this is a legacy API and will be likely to be removed in one of the future releases of React.");
  if (typeof t == "function") {
    t(n);
    return;
  }
  t !== null && typeof t == "object" && (t.current = n);
}, ju = function(t) {
  return (
    // https://github.com/facebook/react/blob/v16.8.2/packages/react-reconciler/src/ReactFiberCommitWork.js#L665
    t !== null && typeof t == "object" && t.hasOwnProperty("current")
  );
};
function cb(e) {
  return e === null || e instanceof Element || e instanceof Text ? !1 : !!(e.type && e.tag);
}
var GI = /* @__PURE__ */ function(e) {
  Jt(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.prevNode = void 0, r;
  }
  var n = t.prototype;
  return n.componentDidMount = function() {
    var o = Gp.findDOMNode(this);
    process.env.NODE_ENV !== "production" && cb(o) && (o = null), this.prevNode = o, ga(this.props.innerRef, o);
  }, n.componentDidUpdate = function(o) {
    var s = Gp.findDOMNode(this);
    process.env.NODE_ENV !== "production" && cb(s) && (s = null), this.prevNode !== s && (this.prevNode = s, ga(this.props.innerRef, s)), o.innerRef !== this.props.innerRef && ga(this.props.innerRef, s);
  }, n.componentWillUnmount = function() {
    ga(this.props.innerRef, null), delete this.prevNode;
  }, n.render = function() {
    var o = this.props.children;
    return o;
  }, t;
}(L.Component), KI = /* @__PURE__ */ function(e) {
  Jt(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.currentNode = void 0, r.handleRefOverride = function(c) {
      var d = r.props, p = d.children, h = d.innerRef;
      ga(p.ref, c), ga(h, c), r.currentNode = c;
    }, r;
  }
  var n = t.prototype;
  return n.componentDidUpdate = function(o) {
    o.innerRef !== this.props.innerRef && ga(this.props.innerRef, this.currentNode);
  }, n.componentWillUnmount = function() {
    delete this.currentNode;
  }, n.render = function() {
    var o = this.props.children;
    return /* @__PURE__ */ L.cloneElement(o, {
      ref: this.handleRefOverride
    });
  }, t;
}(L.Component), ZI = ["children", "innerRef"], sr = function(t) {
  var n = t.children, r = t.innerRef, o = qI(t, ZI), s = L.Children.only(n), u = VI.isForwardRef(s) ? KI : GI, c = s && o && Object.keys(o).length > 0 ? /* @__PURE__ */ L.cloneElement(s, o) : s;
  return /* @__PURE__ */ L.createElement(u, {
    innerRef: r
  }, c);
};
function ue() {
  return ue = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ue.apply(null, arguments);
}
var XI = Object.prototype, QI = XI.hasOwnProperty;
function JI(e, t) {
  return e != null && QI.call(e, t);
}
var vn = Array.isArray, z_ = typeof global == "object" && global && global.Object === Object && global, e2 = typeof self == "object" && self && self.Object === Object && self, eo = z_ || e2 || Function("return this")(), Ea = eo.Symbol, H_ = Object.prototype, t2 = H_.hasOwnProperty, n2 = H_.toString, dl = Ea ? Ea.toStringTag : void 0;
function r2(e) {
  var t = t2.call(e, dl), n = e[dl];
  try {
    e[dl] = void 0;
    var r = !0;
  } catch {
  }
  var o = n2.call(e);
  return r && (t ? e[dl] = n : delete e[dl]), o;
}
var a2 = Object.prototype, o2 = a2.toString;
function i2(e) {
  return o2.call(e);
}
var s2 = "[object Null]", l2 = "[object Undefined]", ub = Ea ? Ea.toStringTag : void 0;
function Sa(e) {
  return e == null ? e === void 0 ? l2 : s2 : ub && ub in Object(e) ? r2(e) : i2(e);
}
function Br(e) {
  return e != null && typeof e == "object";
}
var c2 = "[object Symbol]";
function wi(e) {
  return typeof e == "symbol" || Br(e) && Sa(e) == c2;
}
var u2 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, d2 = /^\w*$/;
function im(e, t) {
  if (vn(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || wi(e) ? !0 : d2.test(e) || !u2.test(e) || t != null && e in Object(t);
}
function Ga(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var f2 = "[object AsyncFunction]", p2 = "[object Function]", h2 = "[object GeneratorFunction]", m2 = "[object Proxy]";
function gs(e) {
  if (!Ga(e))
    return !1;
  var t = Sa(e);
  return t == p2 || t == h2 || t == f2 || t == m2;
}
var yp = eo["__core-js_shared__"], db = function() {
  var e = /[^.]+$/.exec(yp && yp.keys && yp.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function g2(e) {
  return !!db && db in e;
}
var v2 = Function.prototype, y2 = v2.toString;
function Ri(e) {
  if (e != null) {
    try {
      return y2.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var b2 = /[\\^$.*+?()[\]{}|]/g, _2 = /^\[object .+?Constructor\]$/, w2 = Function.prototype, E2 = Object.prototype, x2 = w2.toString, C2 = E2.hasOwnProperty, O2 = RegExp(
  "^" + x2.call(C2).replace(b2, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function S2(e) {
  if (!Ga(e) || g2(e))
    return !1;
  var t = gs(e) ? O2 : _2;
  return t.test(Ri(e));
}
function T2(e, t) {
  return e == null ? void 0 : e[t];
}
function Mi(e, t) {
  var n = T2(e, t);
  return S2(n) ? n : void 0;
}
var Dl = Mi(Object, "create");
function P2() {
  this.__data__ = Dl ? Dl(null) : {}, this.size = 0;
}
function k2(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var N2 = "__lodash_hash_undefined__", I2 = Object.prototype, A2 = I2.hasOwnProperty;
function R2(e) {
  var t = this.__data__;
  if (Dl) {
    var n = t[e];
    return n === N2 ? void 0 : n;
  }
  return A2.call(t, e) ? t[e] : void 0;
}
var M2 = Object.prototype, D2 = M2.hasOwnProperty;
function L2(e) {
  var t = this.__data__;
  return Dl ? t[e] !== void 0 : D2.call(t, e);
}
var F2 = "__lodash_hash_undefined__";
function $2(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Dl && t === void 0 ? F2 : t, this;
}
function Ei(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Ei.prototype.clear = P2;
Ei.prototype.delete = k2;
Ei.prototype.get = R2;
Ei.prototype.has = L2;
Ei.prototype.set = $2;
function B2() {
  this.__data__ = [], this.size = 0;
}
function fd(e, t) {
  return e === t || e !== e && t !== t;
}
function pd(e, t) {
  for (var n = e.length; n--; )
    if (fd(e[n][0], t))
      return n;
  return -1;
}
var W2 = Array.prototype, U2 = W2.splice;
function j2(e) {
  var t = this.__data__, n = pd(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : U2.call(t, n, 1), --this.size, !0;
}
function z2(e) {
  var t = this.__data__, n = pd(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function H2(e) {
  return pd(this.__data__, e) > -1;
}
function Y2(e, t) {
  var n = this.__data__, r = pd(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function to(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
to.prototype.clear = B2;
to.prototype.delete = j2;
to.prototype.get = z2;
to.prototype.has = H2;
to.prototype.set = Y2;
var Ll = Mi(eo, "Map");
function q2() {
  this.size = 0, this.__data__ = {
    hash: new Ei(),
    map: new (Ll || to)(),
    string: new Ei()
  };
}
function V2(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function hd(e, t) {
  var n = e.__data__;
  return V2(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function G2(e) {
  var t = hd(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function K2(e) {
  return hd(this, e).get(e);
}
function Z2(e) {
  return hd(this, e).has(e);
}
function X2(e, t) {
  var n = hd(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function no(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
no.prototype.clear = q2;
no.prototype.delete = G2;
no.prototype.get = K2;
no.prototype.has = Z2;
no.prototype.set = X2;
var Q2 = "Expected a function";
function dc(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Q2);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], s = n.cache;
    if (s.has(o))
      return s.get(o);
    var u = e.apply(this, r);
    return n.cache = s.set(o, u) || s, u;
  };
  return n.cache = new (dc.Cache || no)(), n;
}
dc.Cache = no;
var J2 = 500;
function eA(e) {
  var t = dc(e, function(r) {
    return n.size === J2 && n.clear(), r;
  }), n = t.cache;
  return t;
}
var tA = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, nA = /\\(\\)?/g, rA = eA(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(tA, function(n, r, o, s) {
    t.push(o ? s.replace(nA, "$1") : r || n);
  }), t;
});
function vi(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var fb = Ea ? Ea.prototype : void 0, pb = fb ? fb.toString : void 0;
function md(e) {
  if (typeof e == "string")
    return e;
  if (vn(e))
    return vi(e, md) + "";
  if (wi(e))
    return pb ? pb.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Di(e) {
  return e == null ? "" : md(e);
}
function fc(e, t) {
  return vn(e) ? e : im(e, t) ? [e] : rA(Di(e));
}
var aA = "[object Arguments]";
function hb(e) {
  return Br(e) && Sa(e) == aA;
}
var Y_ = Object.prototype, oA = Y_.hasOwnProperty, iA = Y_.propertyIsEnumerable, gd = hb(/* @__PURE__ */ function() {
  return arguments;
}()) ? hb : function(e) {
  return Br(e) && oA.call(e, "callee") && !iA.call(e, "callee");
}, sA = 9007199254740991, lA = /^(?:0|[1-9]\d*)$/;
function vd(e, t) {
  var n = typeof e;
  return t = t ?? sA, !!t && (n == "number" || n != "symbol" && lA.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var cA = 9007199254740991;
function sm(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= cA;
}
function Fs(e) {
  if (typeof e == "string" || wi(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function q_(e, t, n) {
  t = fc(t, e);
  for (var r = -1, o = t.length, s = !1; ++r < o; ) {
    var u = Fs(t[r]);
    if (!(s = e != null && n(e, u)))
      break;
    e = e[u];
  }
  return s || ++r != o ? s : (o = e == null ? 0 : e.length, !!o && sm(o) && vd(u, o) && (vn(e) || gd(e)));
}
function Xp(e, t) {
  return e != null && q_(e, t, JI);
}
function V_(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
function uA(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function pc(e, t) {
  t = fc(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[Fs(t[n++])];
  return n && n == r ? e : void 0;
}
function yd(e, t, n) {
  var r = -1, o = e.length;
  t < 0 && (t = -t > o ? 0 : o + t), n = n > o ? o : n, n < 0 && (n += o), o = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var s = Array(o); ++r < o; )
    s[r] = e[r + t];
  return s;
}
function dA(e, t) {
  return t.length < 2 ? e : pc(e, yd(t, 0, -1));
}
function fA(e, t, n) {
  t = fc(t, e), e = dA(e, t);
  var r = e == null ? e : e[Fs(uA(t))];
  return r == null ? void 0 : V_(r, e, n);
}
function Go(e) {
  return e;
}
var mb = Math.max;
function G_(e, t, n) {
  return t = mb(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, s = mb(r.length - t, 0), u = Array(s); ++o < s; )
      u[o] = r[t + o];
    o = -1;
    for (var c = Array(t + 1); ++o < t; )
      c[o] = r[o];
    return c[t] = n(u), V_(e, this, c);
  };
}
function K_(e) {
  return function() {
    return e;
  };
}
var zu = function() {
  try {
    var e = Mi(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), pA = zu ? function(e, t) {
  return zu(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: K_(t),
    writable: !0
  });
} : Go, hA = 800, mA = 16, gA = Date.now;
function vA(e) {
  var t = 0, n = 0;
  return function() {
    var r = gA(), o = mA - (r - n);
    if (n = r, o > 0) {
      if (++t >= hA)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var Z_ = vA(pA);
function $s(e, t) {
  return Z_(G_(e, t, Go), e + "");
}
var Ae = $s(fA);
function yA(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function cs(e) {
  return e === void 0;
}
function bA(e, t, n) {
  return e === e && (n !== void 0 && (e = e <= n ? e : n), e = e >= t ? e : t), e;
}
var _A = /\s/;
function wA(e) {
  for (var t = e.length; t-- && _A.test(e.charAt(t)); )
    ;
  return t;
}
var EA = /^\s+/;
function X_(e) {
  return e && e.slice(0, wA(e) + 1).replace(EA, "");
}
var gb = NaN, xA = /^[-+]0x[0-9a-f]+$/i, CA = /^0b[01]+$/i, OA = /^0o[0-7]+$/i, SA = parseInt;
function Q_(e) {
  if (typeof e == "number")
    return e;
  if (wi(e))
    return gb;
  if (Ga(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Ga(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = X_(e);
  var n = CA.test(e);
  return n || OA.test(e) ? SA(e.slice(2), n ? 2 : 8) : xA.test(e) ? gb : +e;
}
var vb = 1 / 0, TA = 17976931348623157e292;
function us(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = Q_(e), e === vb || e === -vb) {
    var t = e < 0 ? -1 : 1;
    return t * TA;
  }
  return e === e ? e : 0;
}
function hc(e) {
  var t = us(e), n = t % 1;
  return t === t ? n ? t - n : t : 0;
}
function PA(e, t, n) {
  return e = Di(e), n = n == null ? 0 : bA(hc(n), 0, e.length), t = md(t), e.slice(n, n + t.length) == t;
}
function J_(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, s = []; ++n < r; ) {
    var u = e[n];
    t(u, n, e) && (s[o++] = u);
  }
  return s;
}
function kA(e) {
  return function(t, n, r) {
    for (var o = -1, s = Object(t), u = r(t), c = u.length; c--; ) {
      var d = u[++o];
      if (n(s[d], d, s) === !1)
        break;
    }
    return t;
  };
}
var NA = kA();
function IA(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
function AA() {
  return !1;
}
var e1 = typeof exports == "object" && exports && !exports.nodeType && exports, yb = e1 && typeof module == "object" && module && !module.nodeType && module, RA = yb && yb.exports === e1, bb = RA ? eo.Buffer : void 0, MA = bb ? bb.isBuffer : void 0, Hu = MA || AA, DA = "[object Arguments]", LA = "[object Array]", FA = "[object Boolean]", $A = "[object Date]", BA = "[object Error]", WA = "[object Function]", UA = "[object Map]", jA = "[object Number]", zA = "[object Object]", HA = "[object RegExp]", YA = "[object Set]", qA = "[object String]", VA = "[object WeakMap]", GA = "[object ArrayBuffer]", KA = "[object DataView]", ZA = "[object Float32Array]", XA = "[object Float64Array]", QA = "[object Int8Array]", JA = "[object Int16Array]", eR = "[object Int32Array]", tR = "[object Uint8Array]", nR = "[object Uint8ClampedArray]", rR = "[object Uint16Array]", aR = "[object Uint32Array]", tn = {};
tn[ZA] = tn[XA] = tn[QA] = tn[JA] = tn[eR] = tn[tR] = tn[nR] = tn[rR] = tn[aR] = !0;
tn[DA] = tn[LA] = tn[GA] = tn[FA] = tn[KA] = tn[$A] = tn[BA] = tn[WA] = tn[UA] = tn[jA] = tn[zA] = tn[HA] = tn[YA] = tn[qA] = tn[VA] = !1;
function oR(e) {
  return Br(e) && sm(e.length) && !!tn[Sa(e)];
}
function t1(e) {
  return function(t) {
    return e(t);
  };
}
var n1 = typeof exports == "object" && exports && !exports.nodeType && exports, Sl = n1 && typeof module == "object" && module && !module.nodeType && module, iR = Sl && Sl.exports === n1, bp = iR && z_.process, _b = function() {
  try {
    var e = Sl && Sl.require && Sl.require("util").types;
    return e || bp && bp.binding && bp.binding("util");
  } catch {
  }
}(), wb = _b && _b.isTypedArray, lm = wb ? t1(wb) : oR, sR = Object.prototype, lR = sR.hasOwnProperty;
function cR(e, t) {
  var n = vn(e), r = !n && gd(e), o = !n && !r && Hu(e), s = !n && !r && !o && lm(e), u = n || r || o || s, c = u ? IA(e.length, String) : [], d = c.length;
  for (var p in e)
    lR.call(e, p) && !(u && // Safari 9 has enumerable `arguments.length` in strict mode.
    (p == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (p == "offset" || p == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (p == "buffer" || p == "byteLength" || p == "byteOffset") || // Skip index properties.
    vd(p, d))) && c.push(p);
  return c;
}
var uR = Object.prototype;
function r1(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || uR;
  return e === n;
}
function a1(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var dR = a1(Object.keys, Object), fR = Object.prototype, pR = fR.hasOwnProperty;
function cm(e) {
  if (!r1(e))
    return dR(e);
  var t = [];
  for (var n in Object(e))
    pR.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function ro(e) {
  return e != null && sm(e.length) && !gs(e);
}
function Lr(e) {
  return ro(e) ? cR(e) : cm(e);
}
function o1(e, t) {
  return e && NA(e, t, Lr);
}
function hR(e, t) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!ro(n))
      return e(n, r);
    for (var o = n.length, s = -1, u = Object(n); ++s < o && r(u[s], s, u) !== !1; )
      ;
    return n;
  };
}
var Bs = hR(o1);
function mR(e, t) {
  var n = [];
  return Bs(e, function(r, o, s) {
    t(r, o, s) && n.push(r);
  }), n;
}
function gR() {
  this.__data__ = new to(), this.size = 0;
}
function vR(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function yR(e) {
  return this.__data__.get(e);
}
function bR(e) {
  return this.__data__.has(e);
}
var _R = 200;
function wR(e, t) {
  var n = this.__data__;
  if (n instanceof to) {
    var r = n.__data__;
    if (!Ll || r.length < _R - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new no(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Ya(e) {
  var t = this.__data__ = new to(e);
  this.size = t.size;
}
Ya.prototype.clear = gR;
Ya.prototype.delete = vR;
Ya.prototype.get = yR;
Ya.prototype.has = bR;
Ya.prototype.set = wR;
var ER = "__lodash_hash_undefined__";
function xR(e) {
  return this.__data__.set(e, ER), this;
}
function CR(e) {
  return this.__data__.has(e);
}
function xi(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new no(); ++t < n; )
    this.add(e[t]);
}
xi.prototype.add = xi.prototype.push = xR;
xi.prototype.has = CR;
function i1(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function Fl(e, t) {
  return e.has(t);
}
var OR = 1, SR = 2;
function s1(e, t, n, r, o, s) {
  var u = n & OR, c = e.length, d = t.length;
  if (c != d && !(u && d > c))
    return !1;
  var p = s.get(e), h = s.get(t);
  if (p && h)
    return p == t && h == e;
  var m = -1, v = !0, y = n & SR ? new xi() : void 0;
  for (s.set(e, t), s.set(t, e); ++m < c; ) {
    var b = e[m], _ = t[m];
    if (r)
      var E = u ? r(_, b, m, t, e, s) : r(b, _, m, e, t, s);
    if (E !== void 0) {
      if (E)
        continue;
      v = !1;
      break;
    }
    if (y) {
      if (!i1(t, function(A, F) {
        if (!Fl(y, F) && (b === A || o(b, A, n, r, s)))
          return y.push(F);
      })) {
        v = !1;
        break;
      }
    } else if (!(b === _ || o(b, _, n, r, s))) {
      v = !1;
      break;
    }
  }
  return s.delete(e), s.delete(t), v;
}
var Eb = eo.Uint8Array;
function TR(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
function um(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var PR = 1, kR = 2, NR = "[object Boolean]", IR = "[object Date]", AR = "[object Error]", RR = "[object Map]", MR = "[object Number]", DR = "[object RegExp]", LR = "[object Set]", FR = "[object String]", $R = "[object Symbol]", BR = "[object ArrayBuffer]", WR = "[object DataView]", xb = Ea ? Ea.prototype : void 0, _p = xb ? xb.valueOf : void 0;
function UR(e, t, n, r, o, s, u) {
  switch (n) {
    case WR:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case BR:
      return !(e.byteLength != t.byteLength || !s(new Eb(e), new Eb(t)));
    case NR:
    case IR:
    case MR:
      return fd(+e, +t);
    case AR:
      return e.name == t.name && e.message == t.message;
    case DR:
    case FR:
      return e == t + "";
    case RR:
      var c = TR;
    case LR:
      var d = r & PR;
      if (c || (c = um), e.size != t.size && !d)
        return !1;
      var p = u.get(e);
      if (p)
        return p == t;
      r |= kR, u.set(e, t);
      var h = s1(c(e), c(t), r, o, s, u);
      return u.delete(e), h;
    case $R:
      if (_p)
        return _p.call(e) == _p.call(t);
  }
  return !1;
}
function l1(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
function jR(e, t, n) {
  var r = t(e);
  return vn(e) ? r : l1(r, n(e));
}
function zR() {
  return [];
}
var HR = Object.prototype, YR = HR.propertyIsEnumerable, Cb = Object.getOwnPropertySymbols, qR = Cb ? function(e) {
  return e == null ? [] : (e = Object(e), J_(Cb(e), function(t) {
    return YR.call(e, t);
  }));
} : zR;
function Ob(e) {
  return jR(e, Lr, qR);
}
var VR = 1, GR = Object.prototype, KR = GR.hasOwnProperty;
function ZR(e, t, n, r, o, s) {
  var u = n & VR, c = Ob(e), d = c.length, p = Ob(t), h = p.length;
  if (d != h && !u)
    return !1;
  for (var m = d; m--; ) {
    var v = c[m];
    if (!(u ? v in t : KR.call(t, v)))
      return !1;
  }
  var y = s.get(e), b = s.get(t);
  if (y && b)
    return y == t && b == e;
  var _ = !0;
  s.set(e, t), s.set(t, e);
  for (var E = u; ++m < d; ) {
    v = c[m];
    var A = e[v], F = t[v];
    if (r)
      var x = u ? r(F, A, v, t, e, s) : r(A, F, v, e, t, s);
    if (!(x === void 0 ? A === F || o(A, F, n, r, s) : x)) {
      _ = !1;
      break;
    }
    E || (E = v == "constructor");
  }
  if (_ && !E) {
    var I = e.constructor, O = t.constructor;
    I != O && "constructor" in e && "constructor" in t && !(typeof I == "function" && I instanceof I && typeof O == "function" && O instanceof O) && (_ = !1);
  }
  return s.delete(e), s.delete(t), _;
}
var Qp = Mi(eo, "DataView"), Jp = Mi(eo, "Promise"), ds = Mi(eo, "Set"), eh = Mi(eo, "WeakMap"), Sb = "[object Map]", XR = "[object Object]", Tb = "[object Promise]", Pb = "[object Set]", kb = "[object WeakMap]", Nb = "[object DataView]", QR = Ri(Qp), JR = Ri(Ll), eM = Ri(Jp), tM = Ri(ds), nM = Ri(eh), pa = Sa;
(Qp && pa(new Qp(new ArrayBuffer(1))) != Nb || Ll && pa(new Ll()) != Sb || Jp && pa(Jp.resolve()) != Tb || ds && pa(new ds()) != Pb || eh && pa(new eh()) != kb) && (pa = function(e) {
  var t = Sa(e), n = t == XR ? e.constructor : void 0, r = n ? Ri(n) : "";
  if (r)
    switch (r) {
      case QR:
        return Nb;
      case JR:
        return Sb;
      case eM:
        return Tb;
      case tM:
        return Pb;
      case nM:
        return kb;
    }
  return t;
});
var rM = 1, Ib = "[object Arguments]", Ab = "[object Array]", yu = "[object Object]", aM = Object.prototype, Rb = aM.hasOwnProperty;
function oM(e, t, n, r, o, s) {
  var u = vn(e), c = vn(t), d = u ? Ab : pa(e), p = c ? Ab : pa(t);
  d = d == Ib ? yu : d, p = p == Ib ? yu : p;
  var h = d == yu, m = p == yu, v = d == p;
  if (v && Hu(e)) {
    if (!Hu(t))
      return !1;
    u = !0, h = !1;
  }
  if (v && !h)
    return s || (s = new Ya()), u || lm(e) ? s1(e, t, n, r, o, s) : UR(e, t, d, n, r, o, s);
  if (!(n & rM)) {
    var y = h && Rb.call(e, "__wrapped__"), b = m && Rb.call(t, "__wrapped__");
    if (y || b) {
      var _ = y ? e.value() : e, E = b ? t.value() : t;
      return s || (s = new Ya()), o(_, E, n, r, s);
    }
  }
  return v ? (s || (s = new Ya()), ZR(e, t, n, r, o, s)) : !1;
}
function bd(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !Br(e) && !Br(t) ? e !== e && t !== t : oM(e, t, n, r, bd, o);
}
var iM = 1, sM = 2;
function lM(e, t, n, r) {
  var o = n.length, s = o;
  if (e == null)
    return !s;
  for (e = Object(e); o--; ) {
    var u = n[o];
    if (u[2] ? u[1] !== e[u[0]] : !(u[0] in e))
      return !1;
  }
  for (; ++o < s; ) {
    u = n[o];
    var c = u[0], d = e[c], p = u[1];
    if (u[2]) {
      if (d === void 0 && !(c in e))
        return !1;
    } else {
      var h = new Ya(), m;
      if (!(m === void 0 ? bd(p, d, iM | sM, r, h) : m))
        return !1;
    }
  }
  return !0;
}
function c1(e) {
  return e === e && !Ga(e);
}
function cM(e) {
  for (var t = Lr(e), n = t.length; n--; ) {
    var r = t[n], o = e[r];
    t[n] = [r, o, c1(o)];
  }
  return t;
}
function u1(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function uM(e) {
  var t = cM(e);
  return t.length == 1 && t[0][2] ? u1(t[0][0], t[0][1]) : function(n) {
    return n === e || lM(n, e, t);
  };
}
function va(e, t, n) {
  var r = e == null ? void 0 : pc(e, t);
  return r === void 0 ? n : r;
}
function dM(e, t) {
  return e != null && t in Object(e);
}
function d1(e, t) {
  return e != null && q_(e, t, dM);
}
var fM = 1, pM = 2;
function hM(e, t) {
  return im(e) && c1(t) ? u1(Fs(e), t) : function(n) {
    var r = va(n, e);
    return r === void 0 && r === t ? d1(n, e) : bd(t, r, fM | pM);
  };
}
function f1(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function mM(e) {
  return function(t) {
    return pc(t, e);
  };
}
function gM(e) {
  return im(e) ? f1(Fs(e)) : mM(e);
}
function Ko(e) {
  return typeof e == "function" ? e : e == null ? Go : typeof e == "object" ? vn(e) ? hM(e[0], e[1]) : uM(e) : gM(e);
}
function th(e, t) {
  var n = vn(e) ? J_ : mR;
  return n(e, Ko(t));
}
var vM = "[object Map]", yM = "[object Set]", bM = Object.prototype, _M = bM.hasOwnProperty;
function hi(e) {
  if (e == null)
    return !0;
  if (ro(e) && (vn(e) || typeof e == "string" || typeof e.splice == "function" || Hu(e) || lm(e) || gd(e)))
    return !e.length;
  var t = pa(e);
  if (t == vM || t == yM)
    return !e.size;
  if (r1(e))
    return !cm(e).length;
  for (var n in e)
    if (_M.call(e, n))
      return !1;
  return !0;
}
function p1(e, t, n, r) {
  for (var o = e.length, s = n + -1; ++s < o; )
    if (t(e[s], s, e))
      return s;
  return -1;
}
function wM(e) {
  return e !== e;
}
function EM(e, t, n) {
  for (var r = n - 1, o = e.length; ++r < o; )
    if (e[r] === t)
      return r;
  return -1;
}
function _d(e, t, n) {
  return t === t ? EM(e, t, n) : p1(e, wM, n);
}
function dm(e, t) {
  var n = e == null ? 0 : e.length;
  return !!n && _d(e, t, 0) > -1;
}
var xM = Math.min;
function CM(e, t, n) {
  for (var r = dm, o = e[0].length, s = e.length, u = s, c = Array(s), d = 1 / 0, p = []; u--; ) {
    var h = e[u];
    d = xM(h.length, d), c[u] = o >= 120 && h.length >= 120 ? new xi(u && h) : void 0;
  }
  h = e[0];
  var m = -1, v = c[0];
  e:
    for (; ++m < o && p.length < d; ) {
      var y = h[m], b = y;
      if (y = y !== 0 ? y : 0, !(v ? Fl(v, b) : r(p, b))) {
        for (u = s; --u; ) {
          var _ = c[u];
          if (!(_ ? Fl(_, b) : r(e[u], b)))
            continue e;
        }
        v && v.push(b), p.push(y);
      }
    }
  return p;
}
function $l(e) {
  return Br(e) && ro(e);
}
function OM(e) {
  return $l(e) ? e : [];
}
var SM = $s(function(e) {
  var t = vi(e, OM);
  return t.length && t[0] === e[0] ? CM(t) : [];
});
function TM(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
    ;
  return e;
}
function PM(e) {
  return typeof e == "function" ? e : Go;
}
function h1(e, t) {
  var n = vn(e) ? TM : Bs;
  return n(e, PM(t));
}
var nh = function(t) {
  return "default" + (t[0].toUpperCase() + t.slice(1));
}, kM = function(t, n, r, o) {
  var s = n[t];
  if (s !== void 0) return s;
  {
    var u = n[nh(t)];
    if (u !== void 0) return u;
    if (r) {
      var c = r[t];
      if (c !== void 0) return c;
    }
  }
  if (t === "checked") return !1;
  if (t === "value") return n.multiple ? [] : "";
}, Ws = /* @__PURE__ */ function(e) {
  Jt(t, e);
  function t() {
    for (var n, r = arguments.length, o = new Array(r), s = 0; s < r; s++)
      o[s] = arguments[s];
    n = e.call.apply(e, [this].concat(o)) || this;
    var u = n.constructor, c = u.autoControlledProps, d = u.getAutoControlledStateFromProps, p = Ae(yA(n), "getInitialAutoControlledState", n.props) || {};
    if (process.env.NODE_ENV !== "production") {
      var h = n.constructor, m = h.defaultProps, v = h.name, y = h.propTypes, b = h.getDerivedStateFromProps;
      b !== t.getDerivedStateFromProps && console.error("Auto controlled " + v + " must specify a static getAutoControlledStateFromProps() instead of getDerivedStateFromProps()."), h1(c, function(F) {
        var x = nh(F);
        Xp(y, x) || console.error(v + ' is missing "' + x + '" propTypes validation for auto controlled prop "' + F + '".'), Xp(y, F) || console.error(v + ' is missing propTypes validation for auto controlled prop "' + F + '".');
      });
      var _ = SM(c, Lr(m));
      hi(_) || console.error(["Do not set defaultProps for autoControlledProps. You can set defaults by", "setting state in the constructor or using an ES7 property initializer", "(https://babeljs.io/blog/2015/06/07/react-on-es6-plus#property-initializers)", "See " + v + ' props: "' + _ + '".'].join(" "));
      var E = th(c, function(F) {
        return PA(F, "default");
      });
      hi(E) || console.error(["Do not add default props to autoControlledProps.", "Default props are automatically handled.", "See " + v + ' autoControlledProps: "' + E + '".'].join(" "));
    }
    var A = c.reduce(function(F, x) {
      if (F[x] = kM(x, n.props, p), process.env.NODE_ENV !== "production") {
        var I = nh(x), O = n.constructor.name;
        !cs(n.props[I]) && !cs(n.props[x]) && console.error(O + ' prop "' + x + '" is auto controlled. Specify either ' + I + " or " + x + ", but not both.");
      }
      return F;
    }, {});
    return n.state = ue({}, p, A, {
      autoControlledProps: c,
      getAutoControlledStateFromProps: d
    }), n;
  }
  return t.getDerivedStateFromProps = function(r, o) {
    var s = o.autoControlledProps, u = o.getAutoControlledStateFromProps, c = s.reduce(function(p, h) {
      var m = !cs(r[h]);
      return m && (p[h] = r[h]), p;
    }, {});
    if (u) {
      var d = u(r, ue({}, o, c), o);
      return ue({}, c, d);
    }
    return c;
  }, t.getAutoControlledStateFromProps = function() {
    return null;
  }, t;
}(J.Component);
function NM(e) {
  return function(t, n, r) {
    var o = Object(t);
    if (!ro(t)) {
      var s = Ko(n);
      t = Lr(t), n = function(c) {
        return s(o[c], c, o);
      };
    }
    var u = e(t, n, r);
    return u > -1 ? o[s ? t[u] : u] : void 0;
  };
}
var IM = Math.max;
function rh(e, t, n) {
  var r = e == null ? 0 : e.length;
  if (!r)
    return -1;
  var o = n == null ? 0 : hc(n);
  return o < 0 && (o = IM(r + o, 0)), p1(e, Ko(t), o);
}
var m1 = NM(rh);
function AM(e, t) {
  var n;
  return Bs(e, function(r, o, s) {
    return n = t(r, o, s), !n;
  }), !!n;
}
function ah(e, t, n) {
  if (!Ga(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? ro(n) && vd(t, n.length) : r == "string" && t in n) ? fd(n[t], e) : !1;
}
function Tl(e, t, n) {
  var r = vn(e) ? i1 : AM;
  return r(e, Ko(t));
}
var RM = function(t, n) {
  return Tl(nm.toArray(t), {
    type: n
  });
}, it = function(t) {
  return t == null || Array.isArray(t) && t.length === 0;
}, Pu = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen"
};
function Mb(e) {
  var t = typeof e;
  return t === "string" || t === "number" ? Pu[e] || e : "";
}
var q = function(t, n) {
  return t && n;
}, Vn = function(t, n) {
  return t && t !== !0 && t + " " + n;
}, nn = function(t, n) {
  return t && (t === !0 ? n : t + " " + n);
}, Yu = function(t, n) {
  return !t || t === !0 ? null : t.replace("large screen", "large-screen").replace(/ vertically/g, "-vertically").split(" ").map(function(r) {
    return r.replace("-", " ") + " " + n;
  }).join(" ");
}, Li = function(t) {
  return t === "justified" ? "justified" : Vn(t, "aligned");
}, Zo = function(t) {
  return Vn(t, "aligned");
}, Yn = function(t, n, r) {
  if (n === void 0 && (n = ""), r === void 0 && (r = !1), r && t === "equal")
    return "equal width";
  var o = typeof t;
  return (o === "string" || o === "number") && n ? Mb(t) + " " + n : Mb(t);
}, MM = 200;
function g1(e, t, n, r) {
  var o = -1, s = dm, u = !0, c = e.length, d = [], p = t.length;
  if (!c)
    return d;
  t.length >= MM && (s = Fl, u = !1, t = new xi(t));
  e:
    for (; ++o < c; ) {
      var h = e[o], m = h;
      if (h = h !== 0 ? h : 0, u && m === m) {
        for (var v = p; v--; )
          if (t[v] === m)
            continue e;
        d.push(h);
      } else s(t, m, r) || d.push(h);
    }
  return d;
}
var Db = Ea ? Ea.isConcatSpreadable : void 0;
function DM(e) {
  return vn(e) || gd(e) || !!(Db && e && e[Db]);
}
function wd(e, t, n, r, o) {
  var s = -1, u = e.length;
  for (n || (n = DM), o || (o = []); ++s < u; ) {
    var c = e[s];
    n(c) ? l1(o, c) : r || (o[o.length] = c);
  }
  return o;
}
var oh = $s(function(e, t) {
  return $l(e) ? g1(e, wd(t, 1, $l, !0)) : [];
});
function v1(e, t, n) {
  var r = e.length;
  return n = n === void 0 ? r : n, !t && n >= r ? e : yd(e, t, n);
}
function LM(e, t) {
  for (var n = e.length; n-- && _d(t, e[n], 0) > -1; )
    ;
  return n;
}
function FM(e, t) {
  for (var n = -1, r = e.length; ++n < r && _d(t, e[n], 0) > -1; )
    ;
  return n;
}
function $M(e) {
  return e.split("");
}
var BM = "\\ud800-\\udfff", WM = "\\u0300-\\u036f", UM = "\\ufe20-\\ufe2f", jM = "\\u20d0-\\u20ff", zM = WM + UM + jM, HM = "\\ufe0e\\ufe0f", YM = "\\u200d", qM = RegExp("[" + YM + BM + zM + HM + "]");
function fm(e) {
  return qM.test(e);
}
var y1 = "\\ud800-\\udfff", VM = "\\u0300-\\u036f", GM = "\\ufe20-\\ufe2f", KM = "\\u20d0-\\u20ff", ZM = VM + GM + KM, XM = "\\ufe0e\\ufe0f", QM = "[" + y1 + "]", ih = "[" + ZM + "]", sh = "\\ud83c[\\udffb-\\udfff]", JM = "(?:" + ih + "|" + sh + ")", b1 = "[^" + y1 + "]", _1 = "(?:\\ud83c[\\udde6-\\uddff]){2}", w1 = "[\\ud800-\\udbff][\\udc00-\\udfff]", eD = "\\u200d", E1 = JM + "?", x1 = "[" + XM + "]?", tD = "(?:" + eD + "(?:" + [b1, _1, w1].join("|") + ")" + x1 + E1 + ")*", nD = x1 + E1 + tD, rD = "(?:" + [b1 + ih + "?", ih, _1, w1, QM].join("|") + ")", aD = RegExp(sh + "(?=" + sh + ")|" + rD + nD, "g");
function oD(e) {
  return e.match(aD) || [];
}
function lh(e) {
  return fm(e) ? oD(e) : $M(e);
}
function iD(e, t, n) {
  if (e = Di(e), e && t === void 0)
    return X_(e);
  if (!e || !(t = md(t)))
    return e;
  var r = lh(e), o = lh(t), s = FM(r, o), u = LM(r, o) + 1;
  return v1(r, s, u).join("");
}
function sD(e, t, n) {
  t == "__proto__" && zu ? zu(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
var lD = Object.prototype, cD = lD.hasOwnProperty;
function uD(e, t, n) {
  var r = e[t];
  (!(cD.call(e, t) && fd(r, n)) || n === void 0 && !(t in e)) && sD(e, t, n);
}
function C1(e, t, n, r) {
  if (!Ga(e))
    return e;
  t = fc(t, e);
  for (var o = -1, s = t.length, u = s - 1, c = e; c != null && ++o < s; ) {
    var d = Fs(t[o]), p = n;
    if (d === "__proto__" || d === "constructor" || d === "prototype")
      return e;
    if (o != u) {
      var h = c[d];
      p = void 0, p === void 0 && (p = Ga(h) ? h : vd(t[o + 1]) ? [] : {});
    }
    uD(c, d, p), c = c[d];
  }
  return e;
}
function dD(e, t, n) {
  for (var r = -1, o = t.length, s = {}; ++r < o; ) {
    var u = t[r], c = pc(e, u);
    n(c, u) && C1(s, fc(u, e), c);
  }
  return s;
}
function fD(e, t) {
  return dD(e, t, function(n, r) {
    return d1(e, r);
  });
}
function pD(e) {
  var t = e == null ? 0 : e.length;
  return t ? wd(e) : [];
}
function hD(e) {
  return Z_(G_(e, void 0, pD), e + "");
}
var Ed = hD(function(e, t) {
  return e == null ? {} : fD(e, t);
}), mD = a1(Object.getPrototypeOf, Object), gD = "[object Object]", vD = Function.prototype, yD = Object.prototype, O1 = vD.toString, bD = yD.hasOwnProperty, _D = O1.call(Object);
function xd(e) {
  if (!Br(e) || Sa(e) != gD)
    return !1;
  var t = mD(e);
  if (t === null)
    return !0;
  var n = bD.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && O1.call(n) == _D;
}
function Et(e) {
  return e == null;
}
function wD(e, t, n) {
  for (var r = -1, o = e.length; ++r < o; ) {
    var s = e[r], u = t(s);
    if (u != null && (c === void 0 ? u === u && !wi(u) : n(u, c)))
      var c = u, d = s;
  }
  return d;
}
function ED(e, t) {
  return e < t;
}
function Lb(e) {
  return e && e.length ? wD(e, Go, ED) : void 0;
}
function xD(e, t) {
  for (var n, r = -1, o = e.length; ++r < o; ) {
    var s = t(e[r]);
    s !== void 0 && (n = n === void 0 ? s : n + s);
  }
  return n;
}
function Fb(e) {
  return e && e.length ? xD(e, Go) : 0;
}
function S1(e, t) {
  var n = -1, r = ro(e) ? Array(e.length) : [];
  return Bs(e, function(o, s, u) {
    r[++n] = t(o, s, u);
  }), r;
}
function wn(e, t) {
  var n = vn(e) ? vi : S1;
  return n(e, Ko(t));
}
function CD(e, t) {
  var n = e.length;
  for (e.sort(t); n--; )
    e[n] = e[n].value;
  return e;
}
function OD(e, t) {
  if (e !== t) {
    var n = e !== void 0, r = e === null, o = e === e, s = wi(e), u = t !== void 0, c = t === null, d = t === t, p = wi(t);
    if (!c && !p && !s && e > t || s && u && d && !c && !p || r && u && d || !n && d || !o)
      return 1;
    if (!r && !s && !p && e < t || p && n && o && !r && !s || c && n && o || !u && o || !d)
      return -1;
  }
  return 0;
}
function SD(e, t, n) {
  for (var r = -1, o = e.criteria, s = t.criteria, u = o.length, c = n.length; ++r < u; ) {
    var d = OD(o[r], s[r]);
    if (d) {
      if (r >= c)
        return d;
      var p = n[r];
      return d * (p == "desc" ? -1 : 1);
    }
  }
  return e.index - t.index;
}
function TD(e, t, n) {
  t.length ? t = vi(t, function(s) {
    return vn(s) ? function(u) {
      return pc(u, s.length === 1 ? s[0] : s);
    } : s;
  }) : t = [Go];
  var r = -1;
  t = vi(t, t1(Ko));
  var o = S1(e, function(s, u, c) {
    var d = vi(t, function(p) {
      return p(s);
    });
    return { criteria: d, index: ++r, value: s };
  });
  return CD(o, function(s, u) {
    return SD(s, u, n);
  });
}
var PD = $s(function(e, t) {
  if (e == null)
    return [];
  var n = t.length;
  return n > 1 && ah(e, t[0], t[1]) ? t = [] : n > 2 && ah(t[0], t[1], t[2]) && (t = [t[0]]), TD(e, wd(t), []);
});
function kD(e, t, n) {
  return e && e.length ? (t = t === void 0 ? 1 : hc(t), yd(e, 0, t < 0 ? 0 : t)) : [];
}
var ch = function() {
  return 0;
};
if (process.env.NODE_ENV !== "production") {
  var wp = [], $b = [];
  ch = function(t, n) {
    if (t === n) return 0;
    var r = t.length, o = n.length;
    if (r === 0) return o;
    if (o === 0) return r;
    for (var s, u, c, d, p = 0, h = 0; p < r; )
      $b[p] = t.charCodeAt(p), wp[p] = ++p;
    for (; h < o; )
      for (s = n.charCodeAt(h), c = h++, u = h, p = 0; p < r; p++)
        d = s === $b[p] ? c : c + 1, c = wp[p], u = wp[p] = c > u ? d > u ? u + 1 : d : d > c ? c + 1 : d;
    return u;
  };
}
var ND = function() {
  var t;
  return (t = Object.prototype.toString).call.apply(t, arguments);
}, ID = function(t, n) {
  if (t[n] !== void 0 && !(typeof Element > "u") && !(t[n] instanceof Element))
    return new Error('Invalid prop "' + n + '" supplied, expected a DOM node.');
}, T1 = function(t) {
  if (!Array.isArray(t))
    throw new Error("Invalid argument supplied to suggest, expected an instance of array.");
  var n = dc(function(o) {
    var s = o.split(" ");
    return kD(PD(wn(t, function(u) {
      var c = u.split(" "), d = Fb(wn(wn(s, function(h) {
        return wn(c, function(m) {
          return ch(h, m);
        });
      }), Lb)), p = Fb(wn(wn(c, function(h) {
        return wn(s, function(m) {
          return ch(h, m);
        });
      }), Lb));
      return {
        suggestion: u,
        score: d + p
      };
    }), ["score", "suggestion"]), 3);
  }), r = t.reduce(function(o, s) {
    return o[s.split(" ").sort().join(" ")] = !0, o;
  }, {});
  return function(o, s, u) {
    var c = o[s];
    if (!(!c || r[c])) {
      var d = c.split(" ").sort().join(" ");
      if (!r[d]) {
        var p = n(c);
        if (!p.some(function(h) {
          return h.score === 0;
        }))
          return new Error(["Invalid prop `" + s + "` of value `" + c + "` supplied to `" + u + "`.", `

Instead of \`` + c + "`, did you mean:", p.map(function(h) {
            return `
  - ` + h.suggestion;
          }).join(""), `
`].join(""));
      }
    }
  };
}, Ht = function(t) {
  return function(n, r, o) {
    if (!Array.isArray(t))
      throw new Error(["Invalid argument supplied to disallow, expected an instance of array.", " See `" + r + "` prop in `" + o + "`."].join(""));
    if (!(Et(n[r]) || n[r] === !1)) {
      var s = t.reduce(function(u, c) {
        return !Et(n[c]) && n[c] !== !1 ? [].concat(u, [c]) : u;
      }, []);
      if (s.length > 0)
        return new Error(["Prop `" + r + "` in `" + o + "` conflicts with props: `" + s.join("`, `") + "`.", "They cannot be defined together, choose one or the other."].join(" "));
    }
  };
}, Rt = function(t) {
  return function(n, r, o) {
    for (var s = arguments.length, u = new Array(s > 3 ? s - 3 : 0), c = 3; c < s; c++)
      u[c - 3] = arguments[c];
    if (!Array.isArray(t))
      throw new Error(["Invalid argument supplied to every, expected an instance of array.", "See `" + r + "` prop in `" + o + "`."].join(" "));
    var d = [];
    return t.forEach(function(p) {
      if (typeof p != "function")
        throw new Error('every() argument "validators" should contain functions, found: ' + ND(p) + ".");
      var h = p.apply(void 0, [n, r, o].concat(u));
      h && d.push(h);
    }), d[0];
  };
}, P1 = function(t, n) {
  return function(r, o, s) {
    for (var u = arguments.length, c = new Array(u > 3 ? u - 3 : 0), d = 3; d < u; d++)
      c[d - 3] = arguments[d];
    if (!xd(t))
      throw new Error(["Invalid argument supplied to givenProps, expected an object.", "See `" + o + "` prop in `" + s + "`."].join(" "));
    if (typeof n != "function")
      throw new Error(["Invalid argument supplied to givenProps, expected a function.", "See `" + o + "` prop in `" + s + "`."].join(" "));
    var p = Lr(t).every(function(v) {
      var y = t[v];
      return typeof y == "function" ? !y.apply(void 0, [r, v, s].concat(c)) : y === r[o];
    });
    if (p) {
      var h = n.apply(void 0, [r, o, s].concat(c));
      if (h) {
        var m = "{ " + Lr(Ed(Lr(t), r)).map(function(v) {
          var y = r[v], b = y;
          return typeof y == "string" ? b = '"' + y + '"' : Array.isArray(y) ? b = "[" + y.join(", ") + "]" : Ga(y) && (b = "{...}"), v + ": " + b;
        }).join(", ") + " }";
        return h.message = "Given props " + m + ": " + h.message, h;
      }
    }
  };
}, Co = function(t) {
  return function(n, r, o) {
    if (!Array.isArray(t))
      throw new Error(["Invalid `requiredProps` argument supplied to require, expected an instance of array.", " See `" + r + "` prop in `" + o + "`."].join(""));
    if (n[r] !== void 0) {
      var s = t.filter(function(u) {
        return n[u] === void 0;
      });
      if (s.length > 0)
        return new Error("`" + r + "` prop in `" + o + "` requires props: `" + s.join("`, `") + "`.");
    }
  };
}, qu = function(t) {
  return function(n, r, o) {
    if (!Array.isArray(t))
      throw new Error(["Invalid argument supplied to some, expected an instance of array.", "See `" + r + "` prop in `" + o + "`."].join(" "));
    var s = n[r];
    if (!(Et(s) || s === !1)) {
      var u = s.replace("large screen", "large-screen").replace(/ vertically/g, "-vertically").split(" ").map(function(d) {
        return iD(d).replace("-", " ");
      }), c = oh(u, t);
      if (c.length > 0)
        return new Error("`" + r + "` prop in `" + o + "` has invalid values: `" + c.join("`, `") + "`.");
    }
  };
}, St = function() {
  return Rt([Ht(["children"]), l.node]).apply(void 0, arguments);
}, bt = function() {
  return Rt([Ht(["children"]), l.oneOfType([l.func, l.node, l.object, l.arrayOf(l.oneOfType([l.node, l.object]))])]).apply(void 0, arguments);
}, mc = function() {
  return Rt([Ht(["children"]), l.arrayOf(bt)]).apply(void 0, arguments);
}, pm = l.shape({
  current: l.object
}), k1 = l.oneOfType([l.func, pm]), hm = { exports: {} }, fl = {}, Ep = { exports: {} };
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
var Bb;
function N1() {
  return Bb || (Bb = 1, function(e) {
    (function() {
      var t = !!(typeof window < "u" && window.document && window.document.createElement), n = {
        canUseDOM: t,
        canUseWorkers: typeof Worker < "u",
        canUseEventListeners: t && !!(window.addEventListener || window.attachEvent),
        canUseViewport: t && !!window.screen
      };
      e.exports ? e.exports = n : window.ExecutionEnvironment = n;
    })();
  }(Ep)), Ep.exports;
}
var Wb;
function AD() {
  if (Wb) return fl;
  Wb = 1, Object.defineProperty(fl, "__esModule", { value: !0 });
  var e = N1(), t = J;
  function n(S) {
    return (n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(C) {
      return typeof C;
    } : function(C) {
      return C && typeof Symbol == "function" && C.constructor === Symbol && C !== Symbol.prototype ? "symbol" : typeof C;
    })(S);
  }
  function r(S, C) {
    if (!(S instanceof C)) throw new TypeError("Cannot call a class as a function");
  }
  function o(S, C) {
    for (var T = 0; T < C.length; T++) {
      var N = C[T];
      N.enumerable = N.enumerable || !1, N.configurable = !0, "value" in N && (N.writable = !0), Object.defineProperty(S, N.key, N);
    }
  }
  function s(S, C, T) {
    return C && o(S.prototype, C), S;
  }
  function u(S, C, T) {
    return C in S ? Object.defineProperty(S, C, { value: T, enumerable: !0, configurable: !0, writable: !0 }) : S[C] = T, S;
  }
  function c(S, C) {
    if (typeof C != "function" && C !== null) throw new TypeError("Super expression must either be null or a function");
    S.prototype = Object.create(C && C.prototype, { constructor: { value: S, writable: !0, configurable: !0 } }), C && p(S, C);
  }
  function d(S) {
    return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(C) {
      return C.__proto__ || Object.getPrototypeOf(C);
    })(S);
  }
  function p(S, C) {
    return (p = Object.setPrototypeOf || function(T, N) {
      return T.__proto__ = N, T;
    })(S, C);
  }
  function h(S) {
    if (S === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return S;
  }
  function m(S, C) {
    return !C || typeof C != "object" && typeof C != "function" ? h(S) : C;
  }
  var v = function() {
    function S(C) {
      r(this, S), u(this, "handlers", void 0), this.handlers = C.slice(0);
    }
    return s(S, [{ key: "addHandlers", value: function(C) {
      for (var T = this.handlers.slice(0), N = C.length, B = 0; B < N; B += 1) T.push(C[B]);
      return new S(T);
    } }, { key: "dispatchEvent", value: function(C, T) {
      var N = this.handlers.length - 1;
      if (T) {
        for (var B = N; B >= 0; B -= 1) this.handlers[B].called || (this.handlers[B].called = !0, this.handlers[B](C));
        for (var H = N; H >= 0; H -= 1) this.handlers[H].called = !1;
      } else
        (0, this.handlers[N])(C);
    } }, { key: "hasHandlers", value: function() {
      return this.handlers.length > 0;
    } }, { key: "removeHandlers", value: function(C) {
      for (var T = [], N = this.handlers.length, B = 0; B < N; B += 1) {
        var H = this.handlers[B];
        C.indexOf(H) === -1 && T.push(H);
      }
      return new S(T);
    } }]), S;
  }();
  function y(S) {
    var C = /* @__PURE__ */ new Map();
    return S.forEach(function(T, N) {
      C.set(N, T);
    }), C;
  }
  function b(S) {
    return Array.isArray(S) ? S : [S];
  }
  var _ = function(S) {
    return S !== null && n(S) === "object" && S.hasOwnProperty("current");
  };
  function E(S) {
    return S === "document" ? document : S === "window" ? window : _(S) ? S.current || document : S || document;
  }
  var A = function() {
    function S(C, T) {
      r(this, S), u(this, "handlerSets", void 0), u(this, "poolName", void 0), this.handlerSets = T, this.poolName = C;
    }
    return s(S, [{ key: "addHandlers", value: function(C, T) {
      var N = y(this.handlerSets);
      if (N.has(C)) {
        var B = N.get(C);
        N.set(C, B.addHandlers(T));
      } else N.set(C, new v(T));
      return new S(this.poolName, N);
    } }, { key: "dispatchEvent", value: function(C, T) {
      var N = this.handlerSets.get(C), B = this.poolName === "default";
      N && N.dispatchEvent(T, B);
    } }, { key: "hasHandlers", value: function(C) {
      if (!C) return this.handlerSets.size > 0;
      var T = this.handlerSets.get(C);
      return !!T && T.hasHandlers();
    } }, { key: "removeHandlers", value: function(C, T) {
      var N = y(this.handlerSets);
      if (!N.has(C)) return new S(this.poolName, N);
      var B = N.get(C).removeHandlers(T);
      return B.hasHandlers() ? N.set(C, B) : N.delete(C), new S(this.poolName, N);
    } }]), S;
  }();
  u(A, "createByType", function(S, C, T) {
    var N = /* @__PURE__ */ new Map();
    return N.set(C, new v(T)), new A(S, N);
  });
  var F = function() {
    function S(C) {
      var T = this;
      r(this, S), u(this, "handlers", /* @__PURE__ */ new Map()), u(this, "pools", /* @__PURE__ */ new Map()), u(this, "target", void 0), u(this, "createEmitter", function(N) {
        return function(B) {
          T.pools.forEach(function(H) {
            H.dispatchEvent(N, B);
          });
        };
      }), this.target = C;
    }
    return s(S, [{ key: "addHandlers", value: function(C, T, N) {
      if (this.pools.has(C)) {
        var B = this.pools.get(C);
        this.pools.set(C, B.addHandlers(T, N));
      } else this.pools.set(C, A.createByType(C, T, N));
      this.handlers.has(T) || this.addTargetHandler(T);
    } }, { key: "hasHandlers", value: function() {
      return this.handlers.size > 0;
    } }, { key: "removeHandlers", value: function(C, T, N) {
      if (this.pools.has(C)) {
        var B = this.pools.get(C).removeHandlers(T, N);
        B.hasHandlers() ? this.pools.set(C, B) : this.pools.delete(C);
        var H = !1;
        this.pools.forEach(function(ne) {
          return H = H || ne.hasHandlers(T);
        }), H || this.removeTargetHandler(T);
      }
    } }, { key: "addTargetHandler", value: function(C) {
      var T = this.createEmitter(C);
      this.handlers.set(C, T), this.target.addEventListener(C, T, !0);
    } }, { key: "removeTargetHandler", value: function(C) {
      this.handlers.has(C) && (this.target.removeEventListener(C, this.handlers.get(C), !0), this.handlers.delete(C));
    } }]), S;
  }(), x = function() {
    function S() {
      var C = this;
      r(this, S), u(this, "targets", /* @__PURE__ */ new Map()), u(this, "getTarget", function(T) {
        var N = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], B = E(T);
        if (C.targets.has(B)) return C.targets.get(B);
        if (!N) return null;
        var H = new F(B);
        return C.targets.set(B, H), H;
      }), u(this, "removeTarget", function(T) {
        C.targets.delete(E(T));
      });
    }
    return s(S, [{ key: "sub", value: function(C, T) {
      var N = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (e.canUseDOM) {
        var B = N.target, H = B === void 0 ? document : B, ne = N.pool, z = ne === void 0 ? "default" : ne;
        this.getTarget(H).addHandlers(z, C, b(T));
      }
    } }, { key: "unsub", value: function(C, T) {
      var N = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (e.canUseDOM) {
        var B = N.target, H = B === void 0 ? document : B, ne = N.pool, z = ne === void 0 ? "default" : ne, re = this.getTarget(H, !1);
        re && (re.removeHandlers(z, C, b(T)), re.hasHandlers() || this.removeTarget(H));
      }
    } }]), S;
  }(), I = new x(), O = function(S) {
    function C() {
      return r(this, C), m(this, d(C).apply(this, arguments));
    }
    return c(C, t.PureComponent), s(C, [{ key: "componentDidMount", value: function() {
      this.subscribe(this.props);
    } }, { key: "componentDidUpdate", value: function(T) {
      this.unsubscribe(T), this.subscribe(this.props);
    } }, { key: "componentWillUnmount", value: function() {
      this.unsubscribe(this.props);
    } }, { key: "subscribe", value: function(T) {
      var N = T.name, B = T.on, H = T.pool, ne = T.target;
      I.sub(N, B, { pool: H, target: ne });
    } }, { key: "unsubscribe", value: function(T) {
      var N = T.name, B = T.on, H = T.pool, ne = T.target;
      I.unsub(N, B, { pool: H, target: ne });
    } }, { key: "render", value: function() {
      return null;
    } }]), C;
  }();
  return u(O, "defaultProps", { pool: "default", target: "document" }), O.propTypes = {}, fl.instance = I, fl.default = O, fl;
}
var pl = {}, Ub;
function RD() {
  if (Ub) return pl;
  Ub = 1, Object.defineProperty(pl, "__esModule", { value: !0 });
  var e = N1(), t = er, n = J;
  function r(C) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? r = function(T) {
      return typeof T;
    } : r = function(T) {
      return T && typeof Symbol == "function" && T.constructor === Symbol && T !== Symbol.prototype ? "symbol" : typeof T;
    }, r(C);
  }
  function o(C, T) {
    if (!(C instanceof T))
      throw new TypeError("Cannot call a class as a function");
  }
  function s(C, T) {
    for (var N = 0; N < T.length; N++) {
      var B = T[N];
      B.enumerable = B.enumerable || !1, B.configurable = !0, "value" in B && (B.writable = !0), Object.defineProperty(C, B.key, B);
    }
  }
  function u(C, T, N) {
    return T && s(C.prototype, T), C;
  }
  function c(C, T, N) {
    return T in C ? Object.defineProperty(C, T, {
      value: N,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : C[T] = N, C;
  }
  function d(C, T) {
    if (typeof T != "function" && T !== null)
      throw new TypeError("Super expression must either be null or a function");
    C.prototype = Object.create(T && T.prototype, {
      constructor: {
        value: C,
        writable: !0,
        configurable: !0
      }
    }), T && h(C, T);
  }
  function p(C) {
    return p = Object.setPrototypeOf ? Object.getPrototypeOf : function(N) {
      return N.__proto__ || Object.getPrototypeOf(N);
    }, p(C);
  }
  function h(C, T) {
    return h = Object.setPrototypeOf || function(B, H) {
      return B.__proto__ = H, B;
    }, h(C, T);
  }
  function m(C) {
    if (C === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return C;
  }
  function v(C, T) {
    return T && (typeof T == "object" || typeof T == "function") ? T : m(C);
  }
  var y = /* @__PURE__ */ function() {
    function C(T) {
      o(this, C), c(this, "handlers", void 0), this.handlers = T.slice(0);
    }
    return u(C, [{
      key: "addHandlers",
      value: function(N) {
        for (var B = this.handlers.slice(0), H = N.length, ne = 0; ne < H; ne += 1)
          B.push(N[ne]);
        return new C(B);
      }
      /**
       * @see https://jsperf.com/suir-eventset-dispatchsingle
       * @see https://jsperf.com/suir-eventset-dispatchmultiple2
       */
    }, {
      key: "dispatchEvent",
      value: function(N, B) {
        var H = this.handlers.length - 1;
        if (!B) {
          var ne = this.handlers[H];
          ne(N);
          return;
        }
        for (var z = H; z >= 0; z -= 1)
          this.handlers[z].called || (this.handlers[z].called = !0, this.handlers[z](N));
        for (var re = H; re >= 0; re -= 1)
          this.handlers[re].called = !1;
      }
    }, {
      key: "hasHandlers",
      value: function() {
        return this.handlers.length > 0;
      }
      /**
       * @see https://jsperf.com/suir-eventset-removehandlers
       */
    }, {
      key: "removeHandlers",
      value: function(N) {
        for (var B = [], H = this.handlers.length, ne = 0; ne < H; ne += 1) {
          var z = this.handlers[ne];
          N.indexOf(z) === -1 && B.push(z);
        }
        return new C(B);
      }
    }]), C;
  }();
  function b(C) {
    var T = /* @__PURE__ */ new Map();
    return C.forEach(function(N, B) {
      T.set(B, N);
    }), T;
  }
  function _(C) {
    return Array.isArray(C) ? C : [C];
  }
  var E = function(T) {
    return T !== null && r(T) === "object" && T.hasOwnProperty("current");
  };
  function A(C) {
    return C === "document" ? document : C === "window" ? window : E(C) ? C.current || document : C || document;
  }
  var F = /* @__PURE__ */ function() {
    function C(T, N) {
      o(this, C), c(this, "handlerSets", void 0), c(this, "poolName", void 0), this.handlerSets = N, this.poolName = T;
    }
    return u(C, [{
      key: "addHandlers",
      value: function(N, B) {
        var H = b(this.handlerSets);
        if (H.has(N)) {
          var ne = H.get(N);
          H.set(N, ne.addHandlers(B));
        } else
          H.set(N, new y(B));
        return new C(this.poolName, H);
      }
    }, {
      key: "dispatchEvent",
      value: function(N, B) {
        var H = this.handlerSets.get(N), ne = this.poolName === "default";
        H && H.dispatchEvent(B, ne);
      }
    }, {
      key: "hasHandlers",
      value: function(N) {
        if (!N)
          return this.handlerSets.size > 0;
        var B = this.handlerSets.get(N);
        return B ? B.hasHandlers() : !1;
      }
    }, {
      key: "removeHandlers",
      value: function(N, B) {
        var H = b(this.handlerSets);
        if (!H.has(N))
          return new C(this.poolName, H);
        var ne = H.get(N), z = ne.removeHandlers(B);
        return z.hasHandlers() ? H.set(N, z) : H.delete(N), new C(this.poolName, H);
      }
    }]), C;
  }();
  c(F, "createByType", function(C, T, N) {
    var B = /* @__PURE__ */ new Map();
    return B.set(T, new y(N)), new F(C, B);
  });
  var x = /* @__PURE__ */ function() {
    function C(T) {
      var N = this;
      o(this, C), c(this, "handlers", /* @__PURE__ */ new Map()), c(this, "pools", /* @__PURE__ */ new Map()), c(this, "target", void 0), c(this, "createEmitter", function(B) {
        return function(H) {
          N.pools.forEach(function(ne) {
            ne.dispatchEvent(B, H);
          });
        };
      }), this.target = T;
    }
    return u(C, [{
      key: "addHandlers",
      value: function(N, B, H) {
        if (this.pools.has(N)) {
          var ne = this.pools.get(N);
          this.pools.set(N, ne.addHandlers(B, H));
        } else
          this.pools.set(N, F.createByType(N, B, H));
        this.handlers.has(B) || this.addTargetHandler(B);
      }
    }, {
      key: "hasHandlers",
      value: function() {
        return this.handlers.size > 0;
      }
    }, {
      key: "removeHandlers",
      value: function(N, B, H) {
        if (this.pools.has(N)) {
          var ne = this.pools.get(N), z = ne.removeHandlers(B, H);
          z.hasHandlers() ? this.pools.set(N, z) : this.pools.delete(N);
          var re = !1;
          this.pools.forEach(function(he) {
            return re = re || he.hasHandlers(B);
          }), re || this.removeTargetHandler(B);
        }
      }
    }, {
      key: "addTargetHandler",
      value: function(N) {
        var B = this.createEmitter(N);
        this.handlers.set(N, B), this.target.addEventListener(N, B, !0);
      }
    }, {
      key: "removeTargetHandler",
      value: function(N) {
        this.handlers.has(N) && (this.target.removeEventListener(N, this.handlers.get(N), !0), this.handlers.delete(N));
      }
    }]), C;
  }(), I = /* @__PURE__ */ function() {
    function C() {
      var T = this;
      o(this, C), c(this, "targets", /* @__PURE__ */ new Map()), c(this, "getTarget", function(N) {
        var B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, H = A(N);
        if (T.targets.has(H))
          return T.targets.get(H);
        if (!B) return null;
        var ne = new x(H);
        return T.targets.set(H, ne), ne;
      }), c(this, "removeTarget", function(N) {
        T.targets.delete(A(N));
      });
    }
    return u(C, [{
      key: "sub",
      value: function(N, B) {
        var H = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (e.canUseDOM) {
          var ne = H.target, z = ne === void 0 ? document : ne, re = H.pool, he = re === void 0 ? "default" : re, ve = this.getTarget(z);
          ve.addHandlers(he, N, _(B));
        }
      }
    }, {
      key: "unsub",
      value: function(N, B) {
        var H = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (e.canUseDOM) {
          var ne = H.target, z = ne === void 0 ? document : ne, re = H.pool, he = re === void 0 ? "default" : re, ve = this.getTarget(z, !1);
          ve && (ve.removeHandlers(he, N, _(B)), ve.hasHandlers() || this.removeTarget(z));
        }
      }
    }]), C;
  }(), O = new I(), S = /* @__PURE__ */ function(C) {
    d(T, C);
    function T() {
      return o(this, T), v(this, p(T).apply(this, arguments));
    }
    return u(T, [{
      key: "componentDidMount",
      value: function() {
        this.subscribe(this.props);
      }
    }, {
      key: "componentDidUpdate",
      value: function(B) {
        this.unsubscribe(B), this.subscribe(this.props);
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.unsubscribe(this.props);
      }
    }, {
      key: "subscribe",
      value: function(B) {
        var H = B.name, ne = B.on, z = B.pool, re = B.target;
        O.sub(H, ne, {
          pool: z,
          target: re
        });
      }
    }, {
      key: "unsubscribe",
      value: function(B) {
        var H = B.name, ne = B.on, z = B.pool, re = B.target;
        O.unsub(H, ne, {
          pool: z,
          target: re
        });
      }
    }, {
      key: "render",
      value: function() {
        return null;
      }
    }]), T;
  }(n.PureComponent);
  return c(S, "defaultProps", {
    pool: "default",
    target: "document"
  }), S.propTypes = {
    /** An event name on which we will subscribe. */
    name: t.string.isRequired,
    /** An event handler or array of event handlers. */
    on: t.oneOfType([t.func, t.arrayOf(t.func)]).isRequired,
    /** A name of pool. */
    pool: t.string,
    /** A DOM element on which we will subscribe. */
    target: t.oneOfType([
      t.oneOf(["document", "window"]),
      // Heads up!
      // This condition for SSR safety.
      t.instanceOf(e.canUseDOM ? HTMLElement : Object),
      t.shape({
        current: t.object
      })
    ])
  }, pl.instance = O, pl.default = S, pl;
}
var Vu;
process.env.NODE_ENV === "production" ? Vu = AD() : Vu = RD();
hm.exports = Vu.default;
var xl = hm.exports.instance = Vu.instance, MD = hm.exports;
const ja = /* @__PURE__ */ uc(MD);
function I1() {
}
var DD = 1 / 0, LD = ds && 1 / um(new ds([, -0]))[1] == DD ? function(e) {
  return new ds(e);
} : I1, FD = 200;
function A1(e, t, n) {
  var r = -1, o = dm, s = e.length, u = !0, c = [], d = c;
  if (s >= FD) {
    var p = LD(e);
    if (p)
      return um(p);
    u = !1, o = Fl, d = new xi();
  } else
    d = c;
  e:
    for (; ++r < s; ) {
      var h = e[r], m = h;
      if (h = h !== 0 ? h : 0, u && m === m) {
        for (var v = d.length; v--; )
          if (d[v] === m)
            continue e;
        c.push(h);
      } else o(d, m, n) || (d !== c && d.push(m), c.push(h));
    }
  return c;
}
function Cd(e) {
  return e && e.length ? A1(e) : [];
}
var $D = "[object Number]";
function BD(e) {
  return typeof e == "number" || Br(e) && Sa(e) == $D;
}
var WD = "[object String]";
function mm(e) {
  return typeof e == "string" || !vn(e) && Br(e) && Sa(e) == WD;
}
var UD = "[object Boolean]";
function jD(e) {
  return e === !0 || e === !1 || Br(e) && Sa(e) == UD;
}
function R1(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = R1(e[t])) && (r && (r += " "), r += n);
  else for (t in e) e[t] && (r && (r += " "), r += t);
  return r;
}
function He() {
  for (var e, t, n = 0, r = ""; n < arguments.length; ) (e = arguments[n++]) && (t = R1(e)) && (r && (r += " "), r += t);
  return r;
}
var jb = {};
function uh(e, t, n, r) {
  if (r === void 0 && (r = {}), typeof e != "function" && typeof e != "string")
    throw new Error("createShorthand() Component must be a string or function.");
  if (Et(n) || jD(n))
    return null;
  var o = mm(n), s = BD(n), u = gs(n), c = /* @__PURE__ */ L.isValidElement(n), d = xd(n), p = o || s || vn(n);
  if (!u && !c && !d && !p)
    return process.env.NODE_ENV !== "production" && console.error(["Shorthand value must be a string|number|array|object|ReactElement|function.", " Use null|undefined|boolean for none", " Received " + typeof n + "."].join("")), null;
  var h = r, m = h.defaultProps, v = m === void 0 ? {} : m, y = c && n.props || d && n || p && t(n), b = r, _ = b.overrideProps, E = _ === void 0 ? {} : _;
  E = gs(E) ? E(ue({}, v, y)) : E;
  var A = ue({}, v, y, E);
  if (v.className || E.className || y.className) {
    var F = He(v.className, E.className, y.className);
    A.className = Cd(F.split(" ")).join(" ");
  }
  if ((v.style || E.style || y.style) && (A.style = ue({}, v.style, y.style, E.style)), Et(A.key)) {
    var x = A.childKey, I = r, O = I.autoGenerateKey, S = O === void 0 ? !0 : O;
    Et(x) ? S && (o || s) && (A.key = n) : (A.key = typeof x == "function" ? x(A) : x, delete A.childKey);
  }
  if (c)
    return /* @__PURE__ */ L.cloneElement(n, A);
  if (typeof A.children == "function")
    return A.children(e, ue({}, A, {
      children: void 0
    }));
  if (p || d)
    return /* @__PURE__ */ L.createElement(e, A);
  if (u)
    return process.env.NODE_ENV !== "production" && (jb[e] || (jb[e] = !0, console.warn('Warning: There is a deprecated shorthand function usage for "' + e + '". It is deprecated and will be removed in v3 release. Please follow our upgrade guide: https://github.com/Semantic-Org/Semantic-UI-React/pull/4029'))), n(e, A, A.children);
}
function qt(e, t) {
  if (typeof e != "function" && typeof e != "string")
    throw new Error("createShorthandFactory() Component must be a string or function.");
  return function(n, r) {
    return uh(e, t, n, r);
  };
}
var zD = /* @__PURE__ */ qt("div", function(e) {
  return {
    children: e
  };
}), HD = /* @__PURE__ */ qt("input", function(e) {
  return {
    type: e
  };
}), dh = /* @__PURE__ */ qt("label", function(e) {
  return {
    children: e
  };
}), je = function(t, n) {
  var r = t.handledProps, o = r === void 0 ? [] : r;
  return Object.keys(n).reduce(function(s, u) {
    return u === "childKey" || o.indexOf(u) === -1 && (s[u] = n[u]), s;
  }, {});
};
function Ye(e, t, n) {
  var r = e.defaultProps, o = r === void 0 ? {} : r;
  if (t.as && t.as !== o.as) return t.as;
  if (n) {
    var s = n();
    if (s) return s;
  }
  return t.href ? "a" : o.as || "div";
}
function YD(e, t) {
  return vi(t, function(n) {
    return e[n];
  });
}
function M1(e) {
  return e == null ? [] : YD(e, Lr(e));
}
var qD = Math.max;
function ya(e, t, n, r) {
  e = ro(e) ? e : M1(e), n = n ? hc(n) : 0;
  var o = e.length;
  return n < 0 && (n = qD(o + n, 0)), mm(e) ? n <= o && e.indexOf(t, n) > -1 : !!o && _d(e, t, n) > -1;
}
var D1 = [
  // REACT
  "selected",
  "defaultValue",
  "defaultChecked",
  // LIMITED HTML PROPS
  "accept",
  "autoCapitalize",
  "autoComplete",
  "autoCorrect",
  "autoFocus",
  "checked",
  "disabled",
  "enterKeyHint",
  "form",
  "id",
  "inputMode",
  "lang",
  "list",
  "max",
  "maxLength",
  "min",
  "minLength",
  "multiple",
  "name",
  "pattern",
  "placeholder",
  "readOnly",
  "required",
  "step",
  "title",
  "type",
  "value"
], VD = [
  // EVENTS
  // keyboard
  "onKeyDown",
  "onKeyPress",
  "onKeyUp",
  // focus
  "onFocus",
  "onBlur",
  // form
  "onChange",
  "onInput",
  // mouse
  "onClick",
  "onContextMenu",
  "onDrag",
  "onDragEnd",
  "onDragEnter",
  "onDragExit",
  "onDragLeave",
  "onDragOver",
  "onDragStart",
  "onDrop",
  "onMouseDown",
  "onMouseEnter",
  "onMouseLeave",
  "onMouseMove",
  "onMouseOut",
  "onMouseOver",
  "onMouseUp",
  // selection
  "onSelect",
  // touch
  "onTouchCancel",
  "onTouchEnd",
  "onTouchMove",
  "onTouchStart"
], GD = [].concat(D1, VD), KD = ["alt", "height", "src", "srcSet", "width", "loading"], gm = function(t, n) {
  n === void 0 && (n = {});
  var r = n, o = r.htmlProps, s = o === void 0 ? GD : o, u = r.includeAria, c = u === void 0 ? !0 : u, d = {}, p = {};
  return h1(t, function(h, m) {
    var v = c && (/^aria-.*$/.test(m) || m === "role"), y = ya(s, m) || v ? d : p;
    y[m] = h;
  }), [d, p];
}, ZD = typeof document == "object" && document !== null, XD = typeof window == "object" && window !== null && window.self === window, yi = function e() {
  return Et(e.override) ? ZD && XD : e.override;
}, QD = Math.max, JD = Math.min;
function eL(e, t, n) {
  return e >= JD(t, n) && e < QD(t, n);
}
function zb(e, t, n) {
  return t = us(t), n === void 0 ? (n = t, t = 0) : n = us(n), e = Q_(e), eL(e, t, n);
}
function tL(e) {
  return e && e.length ? e[0] : void 0;
}
var To = function(t, n) {
  if (Tl([n, t], Et)) return !1;
  if (n.target && (Ae(n.target, "setAttribute", "data-suir-click-target", !0), document.querySelector("[data-suir-click-target=true]")))
    return Ae(n.target, "removeAttribute", "data-suir-click-target"), t.contains(n.target);
  var r = n.clientX, o = n.clientY;
  if (Tl([r, o], Et)) return !1;
  var s = t.getClientRects();
  if (!t.offsetWidth || !t.offsetHeight || !s || !s.length) return !1;
  var u = tL(s), c = u.top, d = u.bottom, p = u.left, h = u.right;
  return Tl([c, d, p, h], Et) ? !1 : zb(o, c, d + 1e-3) && zb(r, p, h + 1e-3);
}, L1 = function(t) {
  return {
    active: !1,
    type: "ellipsisItem",
    value: t
  };
}, nL = function() {
  return {
    active: !1,
    type: "firstItem",
    value: 1
  };
}, rL = function(t) {
  return {
    active: !1,
    type: "prevItem",
    value: Math.max(1, t - 1)
  };
}, aL = function(t) {
  return function(n) {
    return {
      active: t === n,
      type: "pageItem",
      value: n
    };
  };
}, oL = function(t, n) {
  return {
    active: !1,
    type: "nextItem",
    value: Math.min(t + 1, n)
  };
}, iL = function(t) {
  return {
    active: !1,
    type: "lastItem",
    value: t
  };
}, sL = Math.ceil, lL = Math.max;
function cL(e, t, n, r) {
  for (var o = -1, s = lL(sL((t - e) / (n || 1)), 0), u = Array(s); s--; )
    u[++o] = e, e += n;
  return u;
}
function uL(e) {
  return function(t, n, r) {
    return r && typeof r != "number" && ah(t, n, r) && (n = r = void 0), t = us(t), n === void 0 ? (n = t, t = 0) : n = us(n), r = r === void 0 ? t < n ? 1 : -1 : us(r), cL(t, n, r);
  };
}
var dL = uL(), fL = function(t, n, r) {
  var o = n - 1, s = o !== t + 1, u = s ? L1 : r;
  return u(o);
}, pL = function(t, n, r) {
  var o = t + 1, s = o !== n - 1, u = s ? L1 : r;
  return u(o);
}, ku = function(t, n, r) {
  return wn(dL(t, n + 1), r);
}, hL = function(t, n) {
  var r = t.activePage, o = t.boundaryRange, s = t.hideEllipsis, u = t.siblingRange, c = t.totalPages, d = s ? 0 : 1, p = o, h = ku(1, p, n), m = c + 1 - o, v = ku(m, c, n), y = Math.min(Math.max(r - u, p + d + 1), m - d - 2 * u - 1), b = y + 2 * u, _ = ku(y, b, n);
  return [].concat(h, [!s && fL(p, y, n)], _, [!s && pL(b, m, n)], v).filter(Boolean);
}, mL = function(t) {
  var n = t.boundaryRange, r = t.hideEllipsis, o = t.siblingRange, s = t.totalPages, u = 2 * n, c = r ? 0 : 2, d = 2 * o;
  return 1 + c + d + u >= s;
}, gL = function(t) {
  var n = t.activePage, r = t.boundaryRange, o = t.hideEllipsis, s = t.siblingRange, u = t.totalPages;
  return {
    activePage: +n,
    boundaryRange: +r,
    hideEllipsis: !!o,
    siblingRange: +s,
    totalPages: +u
  };
}, vL = function(t) {
  var n = gL(t), r = n.activePage, o = n.totalPages, s = aL(r), u = mL(n) ? ku(1, o, s) : hL(n, s);
  return [nL(), rL(r)].concat(u, [oL(r, o), iL(o)]);
}, ra = ["red", "orange", "yellow", "olive", "green", "teal", "blue", "violet", "purple", "pink", "brown", "grey", "black"], gc = ["left", "right"], cr = ["mini", "tiny", "small", "medium", "large", "big", "huge", "massive"], Fi = ["left", "center", "right", "justified"], $i = ["bottom", "middle", "top"], F1 = ["mobile", "tablet", "computer", "large screen", "widescreen"], rr = [].concat(Lr(Pu), Lr(Pu).map(Number), M1(Pu)), yL = ["american sign language interpreting", "assistive listening systems", "audio description", "blind", "braille", "closed captioning", "closed captioning outline", "deaf", "low vision", "phone volume", "question circle", "question circle outline", "sign language", "tty", "universal access", "wheelchair"], bL = ["angle double down", "angle double left", "angle double right", "angle double up", "angle down", "angle left", "angle right", "angle up", "arrow alternate circle down", "arrow alternate circle down outline", "arrow alternate circle left", "arrow alternate circle left outline", "arrow alternate circle right", "arrow alternate circle right outline", "arrow alternate circle up", "arrow alternate circle up outline", "arrow circle down", "arrow circle left", "arrow circle right", "arrow circle up", "arrow down", "arrow left", "arrow right", "arrow up", "arrows alternate", "arrows alternate horizontal", "arrows alternate vertical", "caret down", "caret left", "caret right", "caret square down", "caret square down outline", "caret square left", "caret square left outline", "caret square right", "caret square right outline", "caret square up", "caret square up outline", "caret up", "cart arrow down", "chart line", "chevron circle down", "chevron circle left", "chevron circle right", "chevron circle up", "chevron down", "chevron left", "chevron right", "chevron up", "cloud download", "cloud upload", "download", "exchange", "expand arrows alternate", "external alternate", "external square alternate", "hand point down", "hand point down outline", "hand point left", "hand point left outline", "hand point right", "hand point right outline", "hand point up", "hand point up outline", "hand pointer", "hand pointer outline", "history", "level down alternate", "level up alternate", "location arrow", "long arrow alternate down", "long arrow alternate left", "long arrow alternate right", "long arrow alternate up", "mouse pointer", "play", "random", "recycle", "redo", "redo alternate", "reply", "reply all", "retweet", "share", "share square", "share square outline", "sign-in", "sign-out", "sign-in alternate", "sign-out alternate", "sort", "sort alphabet down", "sort alphabet up", "sort amount down", "sort amount up", "sort down", "sort numeric down", "sort numeric up", "sort up", "sync", "sync alternate", "text height", "text width", "undo", "undo alternate", "upload", "zoom-in", "zoom-out"], _L = ["audio description", "backward", "circle", "circle outline", "closed captioning", "closed captioning outline", "compress", "eject", "expand", "expand arrows alternate", "fast backward", "fast forward", "file audio", "file audio outline", "file video", "file video outline", "film", "forward", "headphones", "microphone", "microphone slash", "music", "pause", "pause circle", "pause circle outline", "phone volume", "play", "play circle", "play circle outline", "podcast", "random", "redo", "redo alternate", "rss", "rss square", "step backward", "step forward", "stop", "stop circle", "stop circle outline", "sync", "sync alternate", "undo", "undo alternate", "video", "volume down", "volume off", "volume up"], wL = ["address book", "address book outline", "address card", "address card outline", "archive", "balance scale", "birthday cake", "book", "briefcase", "building", "building outline", "bullhorn", "bullseye", "calculator", "calendar", "calendar outline", "calendar alternate", "calendar alternate outline", "certificate", "chart area", "chart bar", "chart bar outline", "chart line", "chart pie", "clipboard", "clipboard outline", "coffee", "columns", "compass", "compass outline", "copy", "copy outline", "copyright", "copyright outline", "cut", "edit", "edit outline", "envelope", "envelope outline", "envelope open", "envelope open outline", "envelope square", "eraser", "fax", "file", "file outline", "file alternate", "file alternate outline", "folder", "folder outline", "folder open", "folder open outline", "globe", "industry", "paperclip", "paste", "pen square", "pencil alternate", "percent", "phone", "phone square", "phone volume", "registered", "registered outline", "save", "save outline", "sitemap", "sticky note", "sticky note outline", "suitcase", "table", "tag", "tags", "tasks", "thumbtack", "trademark"], EL = ["chess", "chess bishop", "chess board", "chess king", "chess knight", "chess pawn", "chess queen", "chess rook", "square full"], xL = ["archive", "barcode", "bath", "bug", "code", "code branch", "coffee", "file", "file outline", "file alternate", "file alternate outline", "file code", "file code outline", "filter", "fire extinguisher", "folder", "folder outline", "folder open", "folder open outline", "keyboard", "keyboard outline", "microchip", "qrcode", "shield alternate", "sitemap", "terminal", "user secret", "window close", "window close outline", "window maximize", "window maximize outline", "window minimize", "window minimize outline", "window restore", "window restore outline"], CL = ["address book", "address book outline", "address card", "address card outline", "american sign language interpreting", "assistive listening systems", "at", "bell", "bell outline", "bell slash", "bell slash outline", "bullhorn", "comment", "comment outline", "comment alternate", "comment alternate outline", "comments", "comments outline", "envelope", "envelope outline", "envelope open", "envelope open outline", "envelope square", "fax", "inbox", "language", "microphone", "microphone slash", "mobile", "mobile alternate", "paper plane", "paper plane outline", "phone", "phone square", "phone volume", "rss", "rss square", "tty", "wifi"], OL = ["desktop", "download", "hdd", "hdd outline", "headphones", "keyboard", "keyboard outline", "laptop", "microchip", "mobile", "mobile alternate", "plug", "power off", "print", "save", "save outline", "server", "tablet", "tablet alternate", "tv", "upload"], SL = ["dollar sign", "euro sign", "lira sign", "money bill alternate", "money bill alternate outline", "pound sign", "ruble sign", "rupee sign", "shekel sign", "won sign", "yen sign"], TL = ["bell", "bell outline", "bell slash", "bell slash outline", "calendar", "calendar outline", "calendar alternate", "calendar alternate outline", "calendar check", "calendar check outline", "calendar minus", "calendar minus outline", "calendar plus", "calendar plus outline", "calendar times", "calendar times outline", "clock", "clock outline", "hourglass", "hourglass outline", "hourglass end", "hourglass half", "hourglass start", "stopwatch"], PL = ["adjust", "clone", "clone outline", "copy", "copy outline", "crop", "crosshairs", "cut", "edit", "edit outline", "eraser", "eye", "eye dropper", "eye slash", "eye slash outline", "object group", "object group outline", "object ungroup", "object ungroup outline", "paint brush", "paste", "pencil alternate", "save", "save outline", "tint"], kL = ["align center", "align justify", "align left", "align right", "bold", "clipboard", "clipboard outline", "clone", "clone outline", "columns", "copy", "copy outline", "cut", "edit", "edit outline", "eraser", "file", "file outline", "file alternate", "file alternate outline", "font", "heading", "i cursor", "indent", "italic", "linkify", "list", "list alternate", "list alternate outline", "list ol", "list ul", "outdent", "paper plane", "paper plane outline", "paperclip", "paragraph", "paste", "pencil alternate", "print", "quote left", "quote right", "redo", "redo alternate", "reply", "reply all", "share", "strikethrough", "subscript", "superscript", "sync", "sync alternate", "table", "tasks", "text height", "text width", "th", "th large", "th list", "trash", "trash alternate", "trash alternate outline", "underline", "undo", "undo alternate", "unlink"], NL = ["archive", "clone", "clone outline", "copy", "copy outline", "cut", "file", "file outline", "file alternate", "file alternate outline", "file archive", "file archive outline", "file audio", "file audio outline", "file code", "file code outline", "file excel", "file excel outline", "file image", "file image outline", "file pdf", "file pdf outline", "file powerpoint", "file powerpoint outline", "file video", "file video outline", "file word", "file word outline", "folder", "folder outline", "folder open", "folder open outline", "paste", "save", "save outline", "sticky note", "sticky note outline"], IL = ["genderless", "mars", "mars double", "mars stroke", "mars stroke horizontal", "mars stroke vertical", "mercury", "neuter", "transgender", "transgender alternate", "venus", "venus double", "venus mars"], AL = ["hand lizard", "hand lizard outline", "hand paper", "hand paper outline", "hand peace", "hand peace outline", "hand point down", "hand point down outline", "hand point left", "hand point left outline", "hand point right", "hand point right outline", "hand point up", "hand point up outline", "hand pointer", "hand pointer outline", "hand rock", "hand rock outline", "hand scissors", "hand scissors outline", "hand spock", "hand spock outline", "handshake", "handshake outline", "thumbs down", "thumbs down outline", "thumbs up", "thumbs up outline"], RL = ["ambulance", "h square", "heart", "heart outline", "heartbeat", "hospital", "hospital outline", "medkit", "plus square", "plus square outline", "stethoscope", "user md", "wheelchair"], ML = ["adjust", "bolt", "camera", "camera retro", "clone", "clone outline", "compress", "expand", "eye", "eye dropper", "eye slash", "eye slash outline", "file image", "file image outline", "film", "id badge", "id badge outline", "id card", "id card outline", "image", "image outline", "images", "images outline", "sliders horizontal", "tint"], DL = ["ban", "barcode", "bars", "beer", "bell", "bell outline", "bell slash", "bell slash outline", "bug", "bullhorn", "bullseye", "calculator", "calendar", "calendar outline", "calendar alternate", "calendar alternate outline", "calendar check", "calendar check outline", "calendar minus", "calendar minus outline", "calendar plus", "calendar plus outline", "calendar times", "calendar times outline", "certificate", "check", "check circle", "check circle outline", "check square", "check square outline", "circle", "circle outline", "clipboard", "clipboard outline", "clone", "clone outline", "cloud", "cloud download", "cloud upload", "coffee", "cog", "cogs", "copy", "copy outline", "cut", "database", "dot circle", "dot circle outline", "download", "edit", "edit outline", "ellipsis horizontal", "ellipsis vertical", "envelope", "envelope outline", "envelope open", "envelope open outline", "eraser", "exclamation", "exclamation circle", "exclamation triangle", "external alternate", "external square alternate", "eye", "eye slash", "eye slash outline", "file", "file outline", "file alternate", "file alternate outline", "filter", "flag", "flag outline", "flag checkered", "folder", "folder outline", "folder open", "folder open outline", "frown", "frown outline", "hashtag", "heart", "heart outline", "history", "home", "i cursor", "info", "info circle", "language", "magic", "meh", "meh outline", "microphone", "microphone slash", "minus", "minus circle", "minus square", "minus square outline", "paste", "pencil alternate", "plus", "plus circle", "plus square", "plus square outline", "qrcode", "question", "question circle", "question circle outline", "quote left", "quote right", "redo", "redo alternate", "reply", "reply all", "rss", "rss square", "save", "save outline", "search", "search minus", "search plus", "share", "share alternate", "share alternate square", "share square", "share square outline", "shield alternate", "sign-in", "sign-out", "signal", "sitemap", "sliders horizontal", "smile", "smile outline", "sort", "sort alphabet down", "sort alphabet up", "sort amount down", "sort amount up", "sort down", "sort numeric down", "sort numeric up", "sort up", "star", "star outline", "star half", "star half outline", "sync", "sync alternate", "thumbs down", "thumbs down outline", "thumbs up", "thumbs up outline", "times", "times circle", "times circle outline", "toggle off", "toggle on", "trash", "trash alternate", "trash alternate outline", "trophy", "undo", "undo alternate", "upload", "user", "user outline", "user circle", "user circle outline", "wifi"], LL = ["box", "boxes", "clipboard check", "clipboard list", "dolly", "dolly flatbed", "pallet", "shipping fast", "truck", "warehouse"], FL = ["ambulance", "anchor", "balance scale", "bath", "bed", "beer", "bell", "bell outline", "bell slash", "bell slash outline", "bicycle", "binoculars", "birthday cake", "blind", "bomb", "book", "bookmark", "bookmark outline", "briefcase", "building", "building outline", "car", "coffee", "crosshairs", "dollar sign", "eye", "eye slash", "eye slash outline", "fighter jet", "fire", "fire extinguisher", "flag", "flag outline", "flag checkered", "flask", "gamepad", "gavel", "gift", "glass martini", "globe", "graduation cap", "h square", "heart", "heart outline", "heartbeat", "home", "hospital", "hospital outline", "image", "image outline", "images", "images outline", "industry", "info", "info circle", "key", "leaf", "lemon", "lemon outline", "life ring", "life ring outline", "lightbulb", "lightbulb outline", "location arrow", "low vision", "magnet", "male", "map", "map outline", "map marker", "map marker alternate", "map pin", "map signs", "medkit", "money bill alternate", "money bill alternate outline", "motorcycle", "music", "newspaper", "newspaper outline", "paw", "phone", "phone square", "phone volume", "plane", "plug", "plus", "plus square", "plus square outline", "print", "recycle", "road", "rocket", "search", "search minus", "search plus", "ship", "shopping bag", "shopping basket", "shopping cart", "shower", "street view", "subway", "suitcase", "tag", "tags", "taxi", "thumbtack", "ticket alternate", "tint", "train", "tree", "trophy", "truck", "tty", "umbrella", "university", "utensil spoon", "utensils", "wheelchair", "wifi", "wrench"], $L = ["ambulance", "band aid", "dna", "first aid", "heart", "heart outline", "heartbeat", "hospital", "hospital outline", "hospital symbol", "pills", "plus", "stethoscope", "syringe", "thermometer", "user md", "weight"], BL = ["ambulance", "anchor", "archive", "balance scale", "bath", "bed", "beer", "bell", "bell outline", "bicycle", "binoculars", "birthday cake", "bomb", "book", "bookmark", "bookmark outline", "briefcase", "bug", "building", "building outline", "bullhorn", "bullseye", "bus", "calculator", "calendar", "calendar outline", "calendar alternate", "calendar alternate outline", "camera", "camera retro", "car", "clipboard", "clipboard outline", "cloud", "coffee", "cog", "cogs", "compass", "compass outline", "copy", "copy outline", "cube", "cubes", "cut", "envelope", "envelope outline", "envelope open", "envelope open outline", "eraser", "eye", "eye dropper", "fax", "fighter jet", "file", "file outline", "file alternate", "file alternate outline", "film", "fire", "fire extinguisher", "flag", "flag outline", "flag checkered", "flask", "futbol", "futbol outline", "gamepad", "gavel", "gem", "gem outline", "gift", "glass martini", "globe", "graduation cap", "hdd", "hdd outline", "headphones", "heart", "heart outline", "home", "hospital", "hospital outline", "hourglass", "hourglass outline", "image", "image outline", "images", "images outline", "industry", "key", "keyboard", "keyboard outline", "laptop", "leaf", "lemon", "lemon outline", "life ring", "life ring outline", "lightbulb", "lightbulb outline", "lock", "lock open", "magic", "magnet", "map", "map outline", "map marker", "map marker alternate", "map pin", "map signs", "medkit", "microchip", "microphone", "mobile", "mobile alternate", "money bill alternate", "money bill alternate outline", "moon", "moon outline", "motorcycle", "newspaper", "newspaper outline", "paint brush", "paper plane", "paper plane outline", "paperclip", "paste", "paw", "pencil alternate", "phone", "plane", "plug", "print", "puzzle piece", "road", "rocket", "save", "save outline", "search", "shield alternate", "shopping bag", "shopping basket", "shopping cart", "shower", "snowflake", "snowflake outline", "space shuttle", "star", "star outline", "sticky note", "sticky note outline", "stopwatch", "subway", "suitcase", "sun", "sun outline", "tablet", "tablet alternate", "tachometer alternate", "tag", "tags", "taxi", "thumbtack", "ticket alternate", "train", "trash", "trash alternate", "trash alternate outline", "tree", "trophy", "truck", "tv", "umbrella", "university", "unlock", "unlock alternate", "utensil spoon", "utensils", "wheelchair", "wrench"], WL = ["bell", "bell outline", "bookmark", "bookmark outline", "bullhorn", "camera", "camera retro", "cart arrow down", "cart plus", "certificate", "credit card", "credit card outline", "gem", "gem outline", "gift", "handshake", "handshake outline", "heart", "heart outline", "key", "shopping bag", "shopping basket", "shopping cart", "star", "star outline", "tag", "tags", "thumbs down", "thumbs down outline", "thumbs up", "thumbs up outline", "trophy"], UL = ["bookmark", "bookmark outline", "calendar", "calendar outline", "certificate", "circle", "circle outline", "cloud", "comment", "comment outline", "file", "file outline", "folder", "folder outline", "heart", "heart outline", "map marker", "play", "square", "square outline", "star", "star outline"], jL = ["asterisk", "certificate", "circle notch", "cog", "compass", "compass outline", "crosshairs", "life ring", "life ring outline", "snowflake", "snowflake outline", "spinner", "sun", "sun outline", "sync"], zL = ["baseball ball", "basketball ball", "bowling ball", "football ball", "futbol", "futbol outline", "golf ball", "hockey puck", "quidditch", "table tennis", "volleyball ball"], HL = ["ban", "battery empty", "battery full", "battery half", "battery quarter", "battery three quarters", "bell", "bell outline", "bell slash", "bell slash outline", "calendar", "calendar outline", "calendar alternate", "calendar alternate outline", "calendar check", "calendar check outline", "calendar minus", "calendar minus outline", "calendar plus", "calendar plus outline", "calendar times", "calendar times outline", "cart arrow down", "cart plus", "exclamation", "exclamation circle", "exclamation triangle", "eye", "eye slash", "eye slash outline", "file", "file outline", "file alternate", "file alternate outline", "folder", "folder outline", "folder open", "folder open outline", "info", "info circle", "lock", "lock open", "minus", "minus circle", "minus square", "minus square outline", "plus", "plus circle", "plus square", "plus square outline", "question", "question circle", "question circle outline", "shield alternate", "shopping cart", "sign in alternate", "sign out alternate", "thermometer empty", "thermometer full", "thermometer half", "thermometer quarter", "thermometer three quarters", "thumbs down", "thumbs down outline", "thumbs up", "thumbs up outline", "toggle off", "toggle on", "unlock", "unlock alternate"], YL = ["address book", "address book outline", "address card", "address card outline", "bed", "blind", "child", "female", "frown", "frown outline", "id badge", "id badge outline", "id card", "id card outline", "male", "meh", "meh outline", "power off", "smile", "smile outline", "street view", "user", "user outline", "user circle", "user circle outline", "user md", "user plus", "user secret", "user times", "users", "wheelchair"], qL = ["ambulance", "bicycle", "bus", "car", "fighter jet", "motorcycle", "paper plane", "paper plane outline", "plane", "rocket", "ship", "shopping cart", "space shuttle", "subway", "taxi", "train", "truck", "wheelchair"], VL = ["archive", "book", "bookmark", "bookmark outline", "edit", "edit outline", "envelope", "envelope outline", "envelope open", "envelope open outline", "eraser", "file", "file outline", "file alternate", "file alternate outline", "folder", "folder outline", "folder open", "folder open outline", "keyboard", "keyboard outline", "newspaper", "newspaper outline", "paper plane", "paper plane outline", "paperclip", "paragraph", "pen square", "pencil alternate", "quote left", "quote right", "sticky note", "sticky note outline", "thumbtack"], GL = ["500px", "accessible", "accusoft", "adn", "adversal", "affiliatetheme", "algolia", "amazon", "amazon pay", "amilia", "android", "angellist", "angrycreative", "angular", "app store", "app store ios", "apper", "apple", "apple pay", "asymmetrik", "audible", "autoprefixer", "avianex", "aviato", "aws", "bandcamp", "behance", "behance square", "bimobject", "bitbucket", "bitcoin", "bity", "black tie", "blackberry", "blogger", "blogger b", "bluetooth", "bluetooth b", "btc", "buromobelexperte", "buysellads", "cc amazon pay", "cc amex", "cc apple pay", "cc diners club", "cc discover", "cc jcb", "cc mastercard", "cc paypal", "cc stripe", "cc visa", "centercode", "chrome", "cloudscale", "cloudsmith", "cloudversify", "codepen", "codiepie", "connectdevelop", "contao", "cpanel", "creative commons", "css3", "css3 alternate", "cuttlefish", "d and d", "dashcube", "delicious", "deploydog", "deskpro", "deviantart", "digg", "digital ocean", "discord", "discourse", "dochub", "docker", "draft2digital", "dribbble", "dribbble square", "dropbox", "drupal", "dyalog", "earlybirds", "edge", "elementor", "ember", "empire", "envira", "erlang", "ethereum", "etsy", "expeditedssl", "facebook", "facebook f", "facebook messenger", "facebook square", "firefox", "first order", "firstdraft", "flickr", "flipboard", "fly", "font awesome", "font awesome alternate", "font awesome flag", "fonticons", "fonticons fi", "fort awesome", "fort awesome alternate", "forumbee", "foursquare", "free code camp", "freebsd", "get pocket", "gg", "gg circle", "git", "git square", "github", "github alternate", "github square", "gitkraken", "gitlab", "gitter", "glide", "glide g", "gofore", "goodreads", "goodreads g", "google", "google drive", "google play", "google plus", "google plus g", "google plus square", "google wallet", "gratipay", "grav", "gripfire", "grunt", "gulp", "hacker news", "hacker news square", "hips", "hire a helper", "hooli", "hotjar", "houzz", "html5", "hubspot", "imdb", "instagram", "internet explorer", "ioxhost", "itunes", "itunes note", "jenkins", "joget", "joomla", "js", "js square", "jsfiddle", "keycdn", "kickstarter", "kickstarter k", "korvue", "laravel", "lastfm", "lastfm square", "leanpub", "less", "linechat", "linkedin", "linkedin alternate", "linode", "linux", "lyft", "magento", "maxcdn", "medapps", "medium", "medium m", "medrt", "meetup", "microsoft", "mix", "mixcloud", "mizuni", "modx", "monero", "napster", "nintendo switch", "node", "node js", "npm", "ns8", "nutritionix", "odnoklassniki", "odnoklassniki square", "opencart", "openid", "opera", "optin monster", "osi", "page4", "pagelines", "palfed", "patreon", "paypal", "periscope", "phabricator", "phoenix framework", "php", "pied piper", "pied piper alternate", "pied piper pp", "pinterest", "pinterest p", "pinterest square", "playstation", "product hunt", "pushed", "python", "qq", "quinscape", "quora", "ravelry", "react", "rebel", "redriver", "reddit", "reddit alien", "reddit square", "rendact", "renren", "replyd", "resolving", "rocketchat", "rockrms", "safari", "sass", "schlix", "scribd", "searchengin", "sellcast", "sellsy", "servicestack", "shirtsinbulk", "simplybuilt", "sistrix", "skyatlas", "skype", "slack", "slack hash", "slideshare", "snapchat", "snapchat ghost", "snapchat square", "soundcloud", "speakap", "spotify", "stack exchange", "stack overflow", "staylinked", "steam", "steam square", "steam symbol", "sticker mule", "strava", "stripe", "stripe s", "studiovinari", "stumbleupon", "stumbleupon circle", "superpowers", "supple", "telegram", "telegram plane", "tencent weibo", "themeisle", "trello", "tripadvisor", "tumblr", "tumblr square", "twitch", "twitter", "twitter square", "typo3", "uber", "uikit", "uniregistry", "untappd", "usb", "ussunnah", "vaadin", "viacoin", "viadeo", "viadeo square", "viber", "vimeo", "vimeo square", "vimeo v", "vine", "vk", "vnv", "vuejs", "wechat", "weibo", "weixin", "whatsapp", "whatsapp square", "whmcs", "wikipedia w", "windows", "wordpress", "wordpress simple", "wpbeginner", "wpexplorer", "wpforms", "xbox", "xing", "xing square", "y combinator", "yahoo", "yandex", "yandex international", "yelp", "yoast", "youtube", "youtube square"], KL = Cd([].concat(yL, bL, _L, wL, EL, xL, CL, OL, SL, TL, PL, kL, NL, IL, AL, RL, ML, DL, LL, FL, $L, BL, WL, UL, jL, zL, HL, YL, qL, VL, GL)), ZL = ["chess rock", "ordered list", "unordered list", "user doctor", "shield", "puzzle", "add circle", "add square", "add to calendar", "add to cart", "add user", "add", "alarm mute", "alarm", "ald", "als", "announcement", "area chart", "area graph", "arrow down cart", "asexual", "asl interpreting", "asl", "assistive listening devices", "attach", "attention", "balance", "bar", "bathtub", "battery four", "battery high", "battery low", "battery one", "battery three", "battery two", "battery zero", "birthday", "block layout", "bluetooth alternative", "broken chain", "browser", "call square", "call", "cancel", "cart", "cc", "chain", "chat", "checked calendar", "checkmark", "circle notched", "close", "cny", "cocktail", "commenting", "computer", "configure", "content", "deafness", "delete calendar", "delete", "detective", "discussions", "doctor", "dollar", "dont", "drivers license", "dropdown", "emergency", "envira gallery", "erase", "eur", "euro", "eyedropper", "factory", "favorite", "feed", "female homosexual", "file text", "file text outline", "find", "first aid", "fork", "game", "gay", "gbp", "google plus circle", "google plus official", "grab", "graduation", "grid layout", "group", "h", "hand victory", "handicap", "hard of hearing", "header", "help circle", "help", "heterosexual", "hide", "hotel", "hourglass four", "hourglass full", "hourglass one", "hourglass three", "hourglass two", "idea", "ils", "in cart", "inr", "intergender", "intersex", "jpy", "krw", "lab", "law", "legal", "lesbian", "lightning", "like", "line graph", "linkedin square", "linkify", "lira", "list layout", "magnify", "mail forward", "mail outline", "mail square", "mail", "male homosexual", "man", "marker", "mars alternate", "mars horizontal", "mars vertical", "microsoft edge", "military", "ms edge", "mute", "new pied piper", "non binary transgender", "numbered list", "options", "other gender horizontal", "other gender vertical", "other gender", "payment", "paypal card", "pencil square", "photo", "picture", "pie chart", "pie graph", "pied piper hat", "pin", "plus cart", "point", "pointing down", "pointing left", "pointing right", "pointing up", "pound", "power cord", "power", "privacy", "r circle", "rain", "record", "refresh", "remove circle", "remove from calendar", "remove user", "remove", "repeat", "rmb", "rouble", "rub", "ruble", "rupee", "s15", "selected radio", "send", "setting", "settings", "shekel", "sheqel", "shipping", "shop", "shuffle", "shutdown", "sidebar", "signing", "signup", "sliders", "soccer", "sort alphabet ascending", "sort alphabet descending", "sort ascending", "sort content ascending", "sort content descending", "sort descending", "sort numeric ascending", "sort numeric descending", "sound", "spy", "stripe card", "student", "talk", "target", "teletype", "television", "text cursor", "text telephone", "theme", "thermometer", "thumb tack", "time", "tm", "toggle down", "toggle left", "toggle right", "toggle up", "translate", "travel", "treatment", "triangle down", "triangle left", "triangle right", "triangle up", "try", "unhide", "unlinkify", "unmute", "usd", "user cancel", "user close", "user delete", "user x", "vcard", "video camera", "video play", "volume control phone", "wait", "warning circle", "warning sign", "warning", "wi-fi", "winner", "wizard", "woman", "won", "wordpress beginner", "wordpress forms", "world", "write square", "x", "yen", "zip", "zoom in", "zoom out", "zoom", "bitbucket square", "checkmark box", "circle thin", "cloud download", "cloud upload", "compose", "conversation", "credit card alternative", "currency", "dashboard", "diamond", "disk", "exchange", "external share", "external square", "external", "facebook official", "food", "hourglass zero", "level down", "level up", "log out", "meanpath", "money", "move", "pencil", "protect", "radio", "remove bookmark", "resize horizontal", "resize vertical", "sign in", "sign out", "spoon", "star half empty", "star half full", "ticket", "times rectangle", "write", "youtube play"], XL = Cd([].concat(KL, ZL)), QL = [
  "left dropdown"
  // nested dropdown menu direction icon
], JL = Cd([].concat(XL, QL));
function e3(e, t) {
  return bd(e, t);
}
var Hb = yi() && process.env.NODE_ENV !== "test" ? J.useLayoutEffect : J.useEffect, t3 = /\s+/;
function n3(e) {
  var t = [];
  return e ? (e.forEach(function(n) {
    if (typeof n.current == "string") {
      var r = n.current.split(t3);
      r.forEach(function(o) {
        t.push(o);
      });
    }
  }), t.filter(function(n, r, o) {
    return n.length > 0 && o.indexOf(n) === r;
  })) : [];
}
function r3(e, t) {
  return [t.filter(function(n) {
    return e.indexOf(n) === -1;
  }), e.filter(function(n) {
    return t.indexOf(n) === -1;
  })];
}
var Yb = /* @__PURE__ */ new Map(), xp = function(t, n) {
  var r = n3(n), o = r3(Yb.get(t) || [], r), s = o[0], u = o[1];
  t && (s.forEach(function(c) {
    return t.classList.add(c);
  }), u.forEach(function(c) {
    return t.classList.remove(c);
  })), Yb.set(t, r);
}, a3 = function() {
  var t = this;
  this.add = function(n, r) {
    if (t.nodes.has(n)) {
      var o = t.nodes.get(n);
      o.add(r);
      return;
    }
    var s = /* @__PURE__ */ new Set();
    s.add(r), t.nodes.set(n, s);
  }, this.del = function(n, r) {
    if (t.nodes.has(n)) {
      var o = t.nodes.get(n);
      if (o.size === 1) {
        t.nodes.delete(n);
        return;
      }
      o.delete(r);
    }
  }, this.emit = function(n, r) {
    r(n, t.nodes.get(n));
  }, this.nodes = /* @__PURE__ */ new Map();
}, hl = new a3();
function o3(e, t) {
  var n = J.useRef(), r = J.useRef(!1);
  Hb(function() {
    if (n.current = t, r.current) {
      var o = ju(e) ? e.current : e;
      hl.emit(o, xp);
    }
    r.current = !0;
  }, [t]), Hb(function() {
    var o = ju(e) ? e.current : e;
    return hl.add(o, n), hl.emit(o, xp), function() {
      hl.del(o, n), hl.emit(o, xp);
    };
  }, [e]);
}
var Jr = $s(function(e, t) {
  return $l(e) ? g1(e, t) : [];
});
function vs(e) {
  var t = e.children, n = e.className, r = e.content, o = e.size, s = He(o, "icons", n), u = je(vs, e), c = Ye(vs, e);
  return /* @__PURE__ */ J.createElement(c, ue({}, u, {
    className: s
  }), it(t) ? r : t);
}
vs.handledProps = ["as", "children", "className", "content", "size"];
vs.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: St,
  /** Size of the icon group. */
  size: l.oneOf(Jr(cr, "medium"))
} : {};
vs.defaultProps = {
  as: "i"
};
var Be = /* @__PURE__ */ function(e) {
  Jt(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handleClick = function(c) {
      var d = r.props.disabled;
      if (d) {
        c.preventDefault();
        return;
      }
      Ae(r.props, "onClick", c, r.props);
    }, r;
  }
  var n = t.prototype;
  return n.getIconAriaOptions = function() {
    var o = {}, s = this.props, u = s["aria-label"], c = s["aria-hidden"];
    return Et(u) ? o["aria-hidden"] = "true" : o["aria-label"] = u, Et(c) || (o["aria-hidden"] = c), o;
  }, n.render = function() {
    var o = this.props, s = o.bordered, u = o.circular, c = o.className, d = o.color, p = o.corner, h = o.disabled, m = o.fitted, v = o.flipped, y = o.inverted, b = o.link, _ = o.loading, E = o.name, A = o.rotated, F = o.size, x = He(d, E, F, q(s, "bordered"), q(u, "circular"), q(h, "disabled"), q(m, "fitted"), q(y, "inverted"), q(b, "link"), q(_, "loading"), nn(p, "corner"), Vn(v, "flipped"), Vn(A, "rotated"), "icon", c), I = je(t, this.props), O = Ye(t, this.props), S = this.getIconAriaOptions();
    return /* @__PURE__ */ J.createElement(O, ue({}, I, S, {
      className: x,
      onClick: this.handleClick
    }));
  }, t;
}(B_);
Be.handledProps = ["aria-hidden", "aria-label", "as", "bordered", "circular", "className", "color", "corner", "disabled", "fitted", "flipped", "inverted", "link", "loading", "name", "rotated", "size"];
Be.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Formatted to appear bordered. */
  bordered: l.bool,
  /** Icon can formatted to appear circular. */
  circular: l.bool,
  /** Additional classes. */
  className: l.string,
  /** Color of the icon. */
  color: l.oneOf(ra),
  /** Icons can display a smaller corner icon. */
  corner: l.oneOfType([l.bool, l.oneOf(["top left", "top right", "bottom left", "bottom right"])]),
  /** Show that the icon is inactive. */
  disabled: l.bool,
  /** Fitted, without space to left or right of Icon. */
  fitted: l.bool,
  /** Icon can be flipped. */
  flipped: l.oneOf(["horizontally", "vertically"]),
  /** Formatted to have its colors inverted for contrast. */
  inverted: l.bool,
  /** Icon can be formatted as a link. */
  link: l.bool,
  /** Icon can be used as a simple loader. */
  loading: l.bool,
  /** Name of the icon. */
  name: T1(JL),
  /** Icon can rotated. */
  rotated: l.oneOf(["clockwise", "counterclockwise"]),
  /** Size of the icon. */
  size: l.oneOf(Jr(cr, "medium")),
  /** Icon can have an aria label. */
  "aria-hidden": l.string,
  /** Icon can have an aria label. */
  "aria-label": l.string
} : {};
Be.defaultProps = {
  as: "i"
};
Be.Group = vs;
Be.create = qt(Be, function(e) {
  return {
    name: e
  };
});
var qb = function(t) {
  return t !== null && !Array.isArray(t) && typeof t == "object";
}, Gu = {
  // ----------------------------------------
  // By Code
  // ----------------------------------------
  3: "Cancel",
  6: "Help",
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  28: "Convert",
  29: "NonConvert",
  30: "Accept",
  31: "ModeChange",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  41: "Select",
  42: "Print",
  43: "Execute",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  48: ["0", ")"],
  49: ["1", "!"],
  50: ["2", "@"],
  51: ["3", "#"],
  52: ["4", "$"],
  53: ["5", "%"],
  54: ["6", "^"],
  55: ["7", "&"],
  56: ["8", "*"],
  57: ["9", "("],
  91: "OS",
  93: "ContextMenu",
  144: "NumLock",
  145: "ScrollLock",
  181: "VolumeMute",
  182: "VolumeDown",
  183: "VolumeUp",
  186: [";", ":"],
  187: ["=", "+"],
  188: [",", "<"],
  189: ["-", "_"],
  190: [".", ">"],
  191: ["/", "?"],
  192: ["`", "~"],
  219: ["[", "{"],
  220: ["\\", "|"],
  221: ["]", "}"],
  222: ["'", '"'],
  224: "Meta",
  225: "AltGraph",
  246: "Attn",
  247: "CrSel",
  248: "ExSel",
  249: "EraseEof",
  250: "Play",
  251: "ZoomOut"
};
for (var bu = 0; bu < 24; bu += 1)
  Gu[112 + bu] = "F" + (bu + 1);
for (var Cp = 0; Cp < 26; Cp += 1) {
  var Op = Cp + 65;
  Gu[Op] = [String.fromCharCode(Op + 32), String.fromCharCode(Op)];
}
var Re = {
  codes: Gu,
  /**
   * Get the `keyCode` or `which` value from a keyboard event or `key` name.
   * @param {string|object} eventOrKey A keyboard event-like object or `key` name.
   * @param {string} [eventOrKey.key] If object, it must have one of these keys.
   * @param {number} [eventOrKey.keyCode] If object, it must have one of these keys.
   * @param {number} [eventOrKey.which] If object, it must have one of these keys.
   * @returns {number|undefined}
   */
  getCode: function(t) {
    return qb(t) ? t.keyCode || t.which || this[t.key] : this[t];
  },
  /**
   * Get the key name from a keyboard event, `keyCode`, or `which` value.
   * @param {number|object} eventOrCode A keyboard event-like object or key code.
   * @param {string} [eventOrCode.key] If object with a `key` name, it will be returned.
   * @param {number} [eventOrCode.keyCode] If object, it must have one of these keys.
   * @param {number} [eventOrCode.which] If object, it must have one of these keys.
   * @param {boolean} [eventOrCode.shiftKey] If object, it must have one of these keys.
   * @returns {string|undefined}
   */
  getKey: function(t) {
    var n = qb(t);
    if (n && t.key)
      return t.key;
    var r = Gu[n ? t.keyCode || t.which : t];
    return Array.isArray(r) && (n ? r = r[t.shiftKey ? 1 : 0] : r = r[0]), r;
  },
  // ----------------------------------------
  // By Name
  // ----------------------------------------
  // declare these manually for static analysis
  Cancel: 3,
  Help: 6,
  Backspace: 8,
  Tab: 9,
  Clear: 12,
  Enter: 13,
  Shift: 16,
  Control: 17,
  Alt: 18,
  Pause: 19,
  CapsLock: 20,
  Escape: 27,
  Convert: 28,
  NonConvert: 29,
  Accept: 30,
  ModeChange: 31,
  " ": 32,
  PageUp: 33,
  PageDown: 34,
  End: 35,
  Home: 36,
  ArrowLeft: 37,
  ArrowUp: 38,
  ArrowRight: 39,
  ArrowDown: 40,
  Select: 41,
  Print: 42,
  Execute: 43,
  PrintScreen: 44,
  Insert: 45,
  Delete: 46,
  0: 48,
  ")": 48,
  1: 49,
  "!": 49,
  2: 50,
  "@": 50,
  3: 51,
  "#": 51,
  4: 52,
  $: 52,
  5: 53,
  "%": 53,
  6: 54,
  "^": 54,
  7: 55,
  "&": 55,
  8: 56,
  "*": 56,
  9: 57,
  "(": 57,
  a: 65,
  A: 65,
  b: 66,
  B: 66,
  c: 67,
  C: 67,
  d: 68,
  D: 68,
  e: 69,
  E: 69,
  f: 70,
  F: 70,
  g: 71,
  G: 71,
  h: 72,
  H: 72,
  i: 73,
  I: 73,
  j: 74,
  J: 74,
  k: 75,
  K: 75,
  l: 76,
  L: 76,
  m: 77,
  M: 77,
  n: 78,
  N: 78,
  o: 79,
  O: 79,
  p: 80,
  P: 80,
  q: 81,
  Q: 81,
  r: 82,
  R: 82,
  s: 83,
  S: 83,
  t: 84,
  T: 84,
  u: 85,
  U: 85,
  v: 86,
  V: 86,
  w: 87,
  W: 87,
  x: 88,
  X: 88,
  y: 89,
  Y: 89,
  z: 90,
  Z: 90,
  OS: 91,
  ContextMenu: 93,
  F1: 112,
  F2: 113,
  F3: 114,
  F4: 115,
  F5: 116,
  F6: 117,
  F7: 118,
  F8: 119,
  F9: 120,
  F10: 121,
  F11: 122,
  F12: 123,
  F13: 124,
  F14: 125,
  F15: 126,
  F16: 127,
  F17: 128,
  F18: 129,
  F19: 130,
  F20: 131,
  F21: 132,
  F22: 133,
  F23: 134,
  F24: 135,
  NumLock: 144,
  ScrollLock: 145,
  VolumeMute: 181,
  VolumeDown: 182,
  VolumeUp: 183,
  ";": 186,
  ":": 186,
  "=": 187,
  "+": 187,
  ",": 188,
  "<": 188,
  "-": 189,
  _: 189,
  ".": 190,
  ">": 190,
  "/": 191,
  "?": 191,
  "`": 192,
  "~": 192,
  "[": 219,
  "{": 219,
  "\\": 220,
  "|": 220,
  "]": 221,
  "}": 221,
  "'": 222,
  '"': 222,
  Meta: 224,
  AltGraph: 225,
  Attn: 246,
  CrSel: 247,
  ExSel: 248,
  EraseEof: 249,
  Play: 250,
  ZoomOut: 251
};
Re.Spacebar = Re[" "];
Re.Digit0 = Re[0];
Re.Digit1 = Re[1];
Re.Digit2 = Re[2];
Re.Digit3 = Re[3];
Re.Digit4 = Re[4];
Re.Digit5 = Re[5];
Re.Digit6 = Re[6];
Re.Digit7 = Re[7];
Re.Digit8 = Re[8];
Re.Digit9 = Re[9];
Re.Tilde = Re["~"];
Re.GraveAccent = Re["`"];
Re.ExclamationPoint = Re["!"];
Re.AtSign = Re["@"];
Re.PoundSign = Re["#"];
Re.PercentSign = Re["%"];
Re.Caret = Re["^"];
Re.Ampersand = Re["&"];
Re.PlusSign = Re["+"];
Re.MinusSign = Re["-"];
Re.EqualsSign = Re["="];
Re.DivisionSign = Re["/"];
Re.MultiplicationSign = Re["*"];
Re.Comma = Re[","];
Re.Decimal = Re["."];
Re.Colon = Re[":"];
Re.Semicolon = Re[";"];
Re.Pipe = Re["|"];
Re.BackSlash = Re["\\"];
Re.QuestionMark = Re["?"];
Re.SingleQuote = Re["'"];
Re.DoubleQuote = Re['"'];
Re.LeftCurlyBrace = Re["{"];
Re.RightCurlyBrace = Re["}"];
Re.LeftParenthesis = Re["("];
Re.RightParenthesis = Re[")"];
Re.LeftAngleBracket = Re["<"];
Re.RightAngleBracket = Re[">"];
Re.LeftSquareBracket = Re["["];
Re.RightSquareBracket = Re["]"];
var i3 = Re;
const yn = /* @__PURE__ */ uc(i3);
var fh = { exports: {} }, jt = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vb;
function s3() {
  if (Vb) return jt;
  Vb = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), u = Symbol.for("react.context"), c = Symbol.for("react.server_context"), d = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), b;
  b = Symbol.for("react.module.reference");
  function _(E) {
    if (typeof E == "object" && E !== null) {
      var A = E.$$typeof;
      switch (A) {
        case e:
          switch (E = E.type, E) {
            case n:
            case o:
            case r:
            case p:
            case h:
              return E;
            default:
              switch (E = E && E.$$typeof, E) {
                case c:
                case u:
                case d:
                case v:
                case m:
                case s:
                  return E;
                default:
                  return A;
              }
          }
        case t:
          return A;
      }
    }
  }
  return jt.ContextConsumer = u, jt.ContextProvider = s, jt.Element = e, jt.ForwardRef = d, jt.Fragment = n, jt.Lazy = v, jt.Memo = m, jt.Portal = t, jt.Profiler = o, jt.StrictMode = r, jt.Suspense = p, jt.SuspenseList = h, jt.isAsyncMode = function() {
    return !1;
  }, jt.isConcurrentMode = function() {
    return !1;
  }, jt.isContextConsumer = function(E) {
    return _(E) === u;
  }, jt.isContextProvider = function(E) {
    return _(E) === s;
  }, jt.isElement = function(E) {
    return typeof E == "object" && E !== null && E.$$typeof === e;
  }, jt.isForwardRef = function(E) {
    return _(E) === d;
  }, jt.isFragment = function(E) {
    return _(E) === n;
  }, jt.isLazy = function(E) {
    return _(E) === v;
  }, jt.isMemo = function(E) {
    return _(E) === m;
  }, jt.isPortal = function(E) {
    return _(E) === t;
  }, jt.isProfiler = function(E) {
    return _(E) === o;
  }, jt.isStrictMode = function(E) {
    return _(E) === r;
  }, jt.isSuspense = function(E) {
    return _(E) === p;
  }, jt.isSuspenseList = function(E) {
    return _(E) === h;
  }, jt.isValidElementType = function(E) {
    return typeof E == "string" || typeof E == "function" || E === n || E === o || E === r || E === p || E === h || E === y || typeof E == "object" && E !== null && (E.$$typeof === v || E.$$typeof === m || E.$$typeof === s || E.$$typeof === u || E.$$typeof === d || E.$$typeof === b || E.getModuleId !== void 0);
  }, jt.typeOf = _, jt;
}
var zt = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gb;
function l3() {
  return Gb || (Gb = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), u = Symbol.for("react.context"), c = Symbol.for("react.server_context"), d = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), b = !1, _ = !1, E = !1, A = !1, F = !1, x;
    x = Symbol.for("react.module.reference");
    function I(K) {
      return !!(typeof K == "string" || typeof K == "function" || K === n || K === o || F || K === r || K === p || K === h || A || K === y || b || _ || E || typeof K == "object" && K !== null && (K.$$typeof === v || K.$$typeof === m || K.$$typeof === s || K.$$typeof === u || K.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      K.$$typeof === x || K.getModuleId !== void 0));
    }
    function O(K) {
      if (typeof K == "object" && K !== null) {
        var le = K.$$typeof;
        switch (le) {
          case e:
            var pe = K.type;
            switch (pe) {
              case n:
              case o:
              case r:
              case p:
              case h:
                return pe;
              default:
                var Q = pe && pe.$$typeof;
                switch (Q) {
                  case c:
                  case u:
                  case d:
                  case v:
                  case m:
                  case s:
                    return Q;
                  default:
                    return le;
                }
            }
          case t:
            return le;
        }
      }
    }
    var S = u, C = s, T = e, N = d, B = n, H = v, ne = m, z = t, re = o, he = r, ve = p, Te = h, de = !1, ye = !1;
    function ee(K) {
      return de || (de = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function oe(K) {
      return ye || (ye = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function se(K) {
      return O(K) === u;
    }
    function Ee(K) {
      return O(K) === s;
    }
    function Pe(K) {
      return typeof K == "object" && K !== null && K.$$typeof === e;
    }
    function Se(K) {
      return O(K) === d;
    }
    function ge(K) {
      return O(K) === n;
    }
    function ke(K) {
      return O(K) === v;
    }
    function De(K) {
      return O(K) === m;
    }
    function U(K) {
      return O(K) === t;
    }
    function j(K) {
      return O(K) === o;
    }
    function $(K) {
      return O(K) === r;
    }
    function D(K) {
      return O(K) === p;
    }
    function G(K) {
      return O(K) === h;
    }
    zt.ContextConsumer = S, zt.ContextProvider = C, zt.Element = T, zt.ForwardRef = N, zt.Fragment = B, zt.Lazy = H, zt.Memo = ne, zt.Portal = z, zt.Profiler = re, zt.StrictMode = he, zt.Suspense = ve, zt.SuspenseList = Te, zt.isAsyncMode = ee, zt.isConcurrentMode = oe, zt.isContextConsumer = se, zt.isContextProvider = Ee, zt.isElement = Pe, zt.isForwardRef = Se, zt.isFragment = ge, zt.isLazy = ke, zt.isMemo = De, zt.isPortal = U, zt.isProfiler = j, zt.isStrictMode = $, zt.isSuspense = D, zt.isSuspenseList = G, zt.isValidElementType = I, zt.typeOf = O;
  }()), zt;
}
process.env.NODE_ENV === "production" ? fh.exports = s3() : fh.exports = l3();
var c3 = fh.exports;
function u3(e) {
  if (e && (J.Children.only(e), c3.isFragment(e)))
    throw new Error('An "React.Fragment" cannot be used as a `trigger`.');
}
var Od = /* @__PURE__ */ function(e) {
  Jt(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handleRef = function(c) {
      ga(r.props.innerRef, c);
    }, r;
  }
  var n = t.prototype;
  return n.componentDidMount = function() {
    Ae(this.props, "onMount", null, this.props);
  }, n.componentWillUnmount = function() {
    Ae(this.props, "onUnmount", null, this.props);
  }, n.render = function() {
    if (!yi()) return null;
    var o = this.props, s = o.children, u = o.mountNode, c = u === void 0 ? document.body : u;
    return /* @__PURE__ */ U_(/* @__PURE__ */ J.createElement(sr, {
      innerRef: this.handleRef
    }, s), c);
  }, t;
}(Gn);
Od.handledProps = ["children", "innerRef", "mountNode", "onMount", "onUnmount"];
Od.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Primary content. */
  children: l.node.isRequired,
  /** Called with a ref to the inner node. */
  innerRef: k1,
  /** The node where the portal should mount. */
  mountNode: l.any,
  /**
   * Called when the portal is mounted on the DOM
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onMount: l.func,
  /**
   * Called when the portal is unmounted from the DOM
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onUnmount: l.func
} : {};
var Qr = /* @__PURE__ */ function(e) {
  Jt(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.contentRef = /* @__PURE__ */ J.createRef(), r.triggerRef = /* @__PURE__ */ J.createRef(), r.latestDocumentMouseDownEvent = null, r.handleDocumentMouseDown = function(c) {
      r.latestDocumentMouseDownEvent = c;
    }, r.handleDocumentClick = function(c) {
      var d = r.props.closeOnDocumentClick, p = r.latestDocumentMouseDownEvent;
      r.latestDocumentMouseDownEvent = null, !(!r.contentRef.current || // no portal
      To(r.triggerRef.current, c) || // event happened in trigger (delegate to trigger handlers)
      p && To(r.contentRef.current, p) || // event originated in the portal but was ended outside
      To(r.contentRef.current, c)) && d && r.close(c);
    }, r.handleEscape = function(c) {
      r.props.closeOnEscape && yn.getCode(c) === yn.Escape && r.close(c);
    }, r.handlePortalMouseLeave = function(c) {
      var d = r.props, p = d.closeOnPortalMouseLeave, h = d.mouseLeaveDelay;
      p && c.target === r.contentRef.current && (r.mouseLeaveTimer = r.closeWithTimeout(c, h));
    }, r.handlePortalMouseEnter = function() {
      var c = r.props.closeOnPortalMouseLeave;
      c && clearTimeout(r.mouseLeaveTimer);
    }, r.handleTriggerBlur = function(c) {
      for (var d = r.props, p = d.trigger, h = d.closeOnTriggerBlur, m = arguments.length, v = new Array(m > 1 ? m - 1 : 0), y = 1; y < m; y++)
        v[y - 1] = arguments[y];
      Ae.apply(void 0, [p, "props.onBlur", c].concat(v));
      var b = c.relatedTarget || document.activeElement, _ = Ae(r.contentRef.current, "contains", b);
      !h || _ || r.close(c);
    }, r.handleTriggerClick = function(c) {
      for (var d = r.props, p = d.trigger, h = d.closeOnTriggerClick, m = d.openOnTriggerClick, v = r.state.open, y = arguments.length, b = new Array(y > 1 ? y - 1 : 0), _ = 1; _ < y; _++)
        b[_ - 1] = arguments[_];
      Ae.apply(void 0, [p, "props.onClick", c].concat(b)), v && h ? r.close(c) : !v && m && r.open(c);
    }, r.handleTriggerFocus = function(c) {
      for (var d = r.props, p = d.trigger, h = d.openOnTriggerFocus, m = arguments.length, v = new Array(m > 1 ? m - 1 : 0), y = 1; y < m; y++)
        v[y - 1] = arguments[y];
      Ae.apply(void 0, [p, "props.onFocus", c].concat(v)), h && r.open(c);
    }, r.handleTriggerMouseLeave = function(c) {
      clearTimeout(r.mouseEnterTimer);
      for (var d = r.props, p = d.trigger, h = d.closeOnTriggerMouseLeave, m = d.mouseLeaveDelay, v = arguments.length, y = new Array(v > 1 ? v - 1 : 0), b = 1; b < v; b++)
        y[b - 1] = arguments[b];
      Ae.apply(void 0, [p, "props.onMouseLeave", c].concat(y)), h && (r.mouseLeaveTimer = r.closeWithTimeout(c, m));
    }, r.handleTriggerMouseEnter = function(c) {
      clearTimeout(r.mouseLeaveTimer);
      for (var d = r.props, p = d.trigger, h = d.mouseEnterDelay, m = d.openOnTriggerMouseEnter, v = arguments.length, y = new Array(v > 1 ? v - 1 : 0), b = 1; b < v; b++)
        y[b - 1] = arguments[b];
      Ae.apply(void 0, [p, "props.onMouseEnter", c].concat(y)), m && (r.mouseEnterTimer = r.openWithTimeout(c, h));
    }, r.open = function(c) {
      Ae(r.props, "onOpen", c, ue({}, r.props, {
        open: !0
      })), r.setState({
        open: !0
      });
    }, r.openWithTimeout = function(c, d) {
      var p = ue({}, c);
      return setTimeout(function() {
        return r.open(p);
      }, d || 0);
    }, r.close = function(c) {
      r.setState({
        open: !1
      }), Ae(r.props, "onClose", c, ue({}, r.props, {
        open: !1
      }));
    }, r.closeWithTimeout = function(c, d) {
      var p = ue({}, c);
      return setTimeout(function() {
        return r.close(p);
      }, d || 0);
    }, r.handleMount = function() {
      Ae(r.props, "onMount", null, r.props);
    }, r.handleUnmount = function() {
      Ae(r.props, "onUnmount", null, r.props);
    }, r.handleTriggerRef = function(c) {
      r.triggerRef.current = c, ga(r.props.triggerRef, c);
    }, r;
  }
  var n = t.prototype;
  return n.componentWillUnmount = function() {
    clearTimeout(this.mouseEnterTimer), clearTimeout(this.mouseLeaveTimer);
  }, n.render = function() {
    var o = this.props, s = o.children, u = o.eventPool, c = o.mountNode, d = o.trigger, p = this.state.open;
    return process.env.NODE_ENV !== "production" && u3(d), /* @__PURE__ */ J.createElement(J.Fragment, null, p && /* @__PURE__ */ J.createElement(J.Fragment, null, /* @__PURE__ */ J.createElement(Od, {
      innerRef: this.contentRef,
      mountNode: c,
      onMount: this.handleMount,
      onUnmount: this.handleUnmount
    }, s), /* @__PURE__ */ J.createElement(ja, {
      name: "mouseleave",
      on: this.handlePortalMouseLeave,
      pool: u,
      target: this.contentRef
    }), /* @__PURE__ */ J.createElement(ja, {
      name: "mouseenter",
      on: this.handlePortalMouseEnter,
      pool: u,
      target: this.contentRef
    }), /* @__PURE__ */ J.createElement(ja, {
      name: "mousedown",
      on: this.handleDocumentMouseDown,
      pool: u
    }), /* @__PURE__ */ J.createElement(ja, {
      name: "click",
      on: this.handleDocumentClick,
      pool: u
    }), /* @__PURE__ */ J.createElement(ja, {
      name: "keydown",
      on: this.handleEscape,
      pool: u
    })), d && /* @__PURE__ */ J.createElement(sr, {
      innerRef: this.handleTriggerRef
    }, /* @__PURE__ */ J.cloneElement(d, {
      onBlur: this.handleTriggerBlur,
      onClick: this.handleTriggerClick,
      onFocus: this.handleTriggerFocus,
      onMouseLeave: this.handleTriggerMouseLeave,
      onMouseEnter: this.handleTriggerMouseEnter
    })));
  }, t;
}(Ws);
Qr.handledProps = ["children", "closeOnDocumentClick", "closeOnEscape", "closeOnPortalMouseLeave", "closeOnTriggerBlur", "closeOnTriggerClick", "closeOnTriggerMouseLeave", "defaultOpen", "eventPool", "mountNode", "mouseEnterDelay", "mouseLeaveDelay", "onClose", "onMount", "onOpen", "onUnmount", "open", "openOnTriggerClick", "openOnTriggerFocus", "openOnTriggerMouseEnter", "trigger", "triggerRef"];
Qr.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Primary content. */
  children: l.node.isRequired,
  /** Controls whether or not the portal should close when the document is clicked. */
  closeOnDocumentClick: l.bool,
  /** Controls whether or not the portal should close when escape is pressed is displayed. */
  closeOnEscape: l.bool,
  /**
   * Controls whether or not the portal should close when mousing out of the portal.
   * NOTE: This will prevent `closeOnTriggerMouseLeave` when mousing over the
   * gap from the trigger to the portal.
   */
  closeOnPortalMouseLeave: l.bool,
  /** Controls whether or not the portal should close on blur of the trigger. */
  closeOnTriggerBlur: l.bool,
  /** Controls whether or not the portal should close on click of the trigger. */
  closeOnTriggerClick: l.bool,
  /** Controls whether or not the portal should close when mousing out of the trigger. */
  closeOnTriggerMouseLeave: l.bool,
  /** Initial value of open. */
  defaultOpen: l.bool,
  /** Event pool namespace that is used to handle component events */
  eventPool: l.string,
  /** The node where the portal should mount. */
  mountNode: l.any,
  /** Milliseconds to wait before opening on mouse over */
  mouseEnterDelay: l.number,
  /** Milliseconds to wait before closing on mouse leave */
  mouseLeaveDelay: l.number,
  /**
   * Called when a close event happens
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClose: l.func,
  /**
   * Called when the portal is mounted on the DOM.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onMount: l.func,
  /**
   * Called when an open event happens
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onOpen: l.func,
  /**
   * Called when the portal is unmounted from the DOM.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onUnmount: l.func,
  /** Controls whether or not the portal is displayed. */
  open: l.bool,
  /** Controls whether or not the portal should open when the trigger is clicked. */
  openOnTriggerClick: l.bool,
  /** Controls whether or not the portal should open on focus of the trigger. */
  openOnTriggerFocus: l.bool,
  /** Controls whether or not the portal should open when mousing over the trigger. */
  openOnTriggerMouseEnter: l.bool,
  /** Element to be rendered in-place where the portal is defined. */
  trigger: l.node,
  /** Called with a ref to the trigger node. */
  triggerRef: k1
} : {};
Qr.defaultProps = {
  closeOnDocumentClick: !0,
  closeOnEscape: !0,
  eventPool: "default",
  openOnTriggerClick: !0
};
Qr.autoControlledProps = ["open"];
Qr.Inner = Od;
function Bl(e) {
  var t = e.blurring, n = e.className, r = e.children, o = e.content, s = e.dimmed, u = He(q(t, "blurring"), q(s, "dimmed"), "dimmable", n), c = je(Bl, e), d = Ye(Bl, e);
  return /* @__PURE__ */ J.createElement(d, ue({}, c, {
    className: u
  }), it(r) ? o : r);
}
Bl.handledProps = ["as", "blurring", "children", "className", "content", "dimmed"];
Bl.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** A dimmable element can blur its contents. */
  blurring: l.bool,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: St,
  /** Controls whether or not the dim is displayed. */
  dimmed: l.bool
} : {};
var Wl = /* @__PURE__ */ function(e) {
  Jt(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.containerRef = /* @__PURE__ */ br(), r.contentRef = /* @__PURE__ */ br(), r.handleClick = function(c) {
      var d = r.contentRef.current;
      Ae(r.props, "onClick", c, r.props), !(d && d !== c.target && To(d, c)) && Ae(r.props, "onClickOutside", c, r.props);
    }, r;
  }
  var n = t.prototype;
  return n.componentDidMount = function() {
    var o = this.props.active;
    this.toggleStyles(o);
  }, n.componentDidUpdate = function(o) {
    var s = this.props.active, u = o.active;
    u !== s && this.toggleStyles(s);
  }, n.toggleStyles = function(o) {
    var s = this.containerRef.current;
    !s || !s.style || (o ? s.style.setProperty("display", "flex", "important") : s.style.removeProperty("display"));
  }, n.render = function() {
    var o = this.props, s = o.active, u = o.children, c = o.className, d = o.content, p = o.disabled, h = o.inverted, m = o.page, v = o.simple, y = o.verticalAlign, b = He("ui", q(s, "active transition visible"), q(p, "disabled"), q(h, "inverted"), q(m, "page"), q(v, "simple"), Zo(y), "dimmer", c), _ = je(t, this.props), E = Ye(t, this.props), A = it(u) ? d : u;
    return /* @__PURE__ */ J.createElement(sr, {
      innerRef: this.containerRef
    }, /* @__PURE__ */ J.createElement(E, ue({}, _, {
      className: b,
      onClick: this.handleClick
    }), A && /* @__PURE__ */ J.createElement("div", {
      className: "content",
      ref: this.contentRef
    }, A)));
  }, t;
}(Gn);
Wl.handledProps = ["active", "as", "children", "className", "content", "disabled", "inverted", "onClick", "onClickOutside", "page", "simple", "verticalAlign"];
Wl.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** An active dimmer will dim its parent container. */
  active: l.bool,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: St,
  /** A disabled dimmer cannot be activated */
  disabled: l.bool,
  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: l.func,
  /**
   * Handles click outside Dimmer's content, but inside Dimmer area.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClickOutside: l.func,
  /** A dimmer can be formatted to have its colors inverted. */
  inverted: l.bool,
  /** A dimmer can be formatted to be fixed to the page. */
  page: l.bool,
  /** A dimmer can be controlled with simple prop. */
  simple: l.bool,
  /** A dimmer can have its content top or bottom aligned. */
  verticalAlign: l.oneOf(["bottom", "top"])
} : {};
var Io = /* @__PURE__ */ function(e) {
  Jt(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handlePortalMount = function() {
      yi() && (document.body.classList.add("dimmed"), document.body.classList.add("dimmable"));
    }, r.handlePortalUnmount = function() {
      yi() && (document.body.classList.remove("dimmed"), document.body.classList.remove("dimmable"));
    }, r;
  }
  var n = t.prototype;
  return n.render = function() {
    var o = this.props, s = o.active, u = o.page, c = je(t, this.props);
    return u ? /* @__PURE__ */ J.createElement(Qr, {
      closeOnEscape: !1,
      closeOnDocumentClick: !1,
      onMount: this.handlePortalMount,
      onUnmount: this.handlePortalUnmount,
      open: s,
      openOnTriggerClick: !1
    }, /* @__PURE__ */ J.createElement(Wl, ue({}, c, {
      active: s,
      page: u
    }))) : /* @__PURE__ */ J.createElement(Wl, ue({}, c, {
      active: s,
      page: u
    }));
  }, t;
}(Gn);
Io.handledProps = ["active", "page"];
Io.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An active dimmer will dim its parent container. */
  active: l.bool,
  /** A dimmer can be formatted to be fixed to the page. */
  page: l.bool
} : {};
Io.Dimmable = Bl;
Io.Inner = Wl;
Io.create = qt(Io, function(e) {
  return {
    content: e
  };
});
function Ul(e) {
  var t = e.children, n = e.className, r = e.content, o = e.size, s = He("ui", o, n, "images"), u = je(Ul, e), c = Ye(Ul, e);
  return /* @__PURE__ */ J.createElement(c, ue({}, u, {
    className: s
  }), it(t) ? r : t);
}
Ul.handledProps = ["as", "children", "className", "content", "size"];
Ul.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: St,
  /** A group of images can be formatted to have the same size. */
  size: l.oneOf(cr)
} : {};
function _r(e) {
  var t = e.avatar, n = e.bordered, r = e.centered, o = e.children, s = e.circular, u = e.className, c = e.content, d = e.dimmer, p = e.disabled, h = e.floated, m = e.fluid, v = e.hidden, y = e.href, b = e.inline, _ = e.label, E = e.rounded, A = e.size, F = e.spaced, x = e.verticalAlign, I = e.wrapped, O = e.ui, S = He(q(O, "ui"), A, q(t, "avatar"), q(n, "bordered"), q(s, "circular"), q(r, "centered"), q(p, "disabled"), q(m, "fluid"), q(v, "hidden"), q(b, "inline"), q(E, "rounded"), nn(F, "spaced"), Vn(h, "floated"), Zo(x), "image", u), C = je(_r, e), T = gm(C, {
    htmlProps: KD
  }), N = T[0], B = T[1], H = Ye(_r, e, function() {
    if (!Et(d) || !Et(_) || !Et(I) || !it(o))
      return "div";
  });
  return it(o) ? it(c) ? H === "img" ? /* @__PURE__ */ J.createElement(H, ue({}, B, N, {
    className: S
  })) : /* @__PURE__ */ J.createElement(H, ue({}, B, {
    className: S,
    href: y
  }), Io.create(d, {
    autoGenerateKey: !1
  }), lr.create(_, {
    autoGenerateKey: !1
  }), /* @__PURE__ */ J.createElement("img", N)) : /* @__PURE__ */ J.createElement(H, ue({}, C, {
    className: S
  }), c) : /* @__PURE__ */ J.createElement(H, ue({}, C, {
    className: S
  }), o);
}
_r.handledProps = ["as", "avatar", "bordered", "centered", "children", "circular", "className", "content", "dimmer", "disabled", "floated", "fluid", "hidden", "href", "inline", "label", "rounded", "size", "spaced", "ui", "verticalAlign", "wrapped"];
_r.Group = Ul;
_r.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** An image may be formatted to appear inline with text as an avatar. */
  avatar: l.bool,
  /** An image may include a border to emphasize the edges of white or transparent content. */
  bordered: l.bool,
  /** An image can appear centered in a content block. */
  centered: l.bool,
  /** Primary content. */
  children: l.node,
  /** An image may appear circular. */
  circular: l.bool,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: St,
  /** An image can show that it is disabled and cannot be selected. */
  disabled: l.bool,
  /** Shorthand for Dimmer. */
  dimmer: bt,
  /** An image can sit to the left or right of other content. */
  floated: l.oneOf(gc),
  /** An image can take up the width of its container. */
  fluid: Rt([l.bool, Ht(["size"])]),
  /** An image can be hidden. */
  hidden: l.bool,
  /** Renders the Image as an <a> tag with this href. */
  href: l.string,
  /** An image may appear inline. */
  inline: l.bool,
  /** Shorthand for Label. */
  label: bt,
  /** An image may appear rounded. */
  rounded: l.bool,
  /** An image may appear at different sizes. */
  size: l.oneOf(cr),
  /** An image can specify that it needs an additional spacing to separate it from nearby content. */
  spaced: l.oneOfType([l.bool, l.oneOf(["left", "right"])]),
  /** Whether or not to add the ui className. */
  ui: l.bool,
  /** An image can specify its vertical alignment. */
  verticalAlign: l.oneOf($i),
  /** An image can render wrapped in a `div.ui.image` as alternative HTML markup. */
  wrapped: l.bool
} : {};
_r.defaultProps = {
  as: "img",
  ui: !0
};
_r.create = qt(_r, function(e) {
  return {
    src: e
  };
});
function Ao(e) {
  var t = e.children, n = e.className, r = e.content, o = He("detail", n), s = je(Ao, e), u = Ye(Ao, e);
  return /* @__PURE__ */ J.createElement(u, ue({}, s, {
    className: o
  }), it(t) ? r : t);
}
Ao.handledProps = ["as", "children", "className", "content"];
Ao.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: St
} : {};
Ao.create = qt(Ao, function(e) {
  return {
    content: e
  };
});
function jl(e) {
  var t = e.children, n = e.circular, r = e.className, o = e.color, s = e.content, u = e.size, c = e.tag, d = He("ui", o, u, q(n, "circular"), q(c, "tag"), "labels", r), p = je(jl, e), h = Ye(jl, e);
  return /* @__PURE__ */ J.createElement(h, ue({}, p, {
    className: d
  }), it(t) ? s : t);
}
jl.handledProps = ["as", "children", "circular", "className", "color", "content", "size", "tag"];
jl.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Labels can share shapes. */
  circular: l.bool,
  /** Additional classes. */
  className: l.string,
  /** Label group can share colors together. */
  color: l.oneOf(ra),
  /** Shorthand for primary content. */
  content: St,
  /** Label group can share sizes together. */
  size: l.oneOf(cr),
  /** Label group can share tag formatting. */
  tag: l.bool
} : {};
var lr = /* @__PURE__ */ function(e) {
  Jt(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handleClick = function(c) {
      var d = r.props.onClick;
      d && d(c, r.props);
    }, r.handleIconOverrides = function(c) {
      return {
        onClick: function(p) {
          Ae(c, "onClick", p), Ae(r.props, "onRemove", p, r.props);
        }
      };
    }, r;
  }
  var n = t.prototype;
  return n.render = function() {
    var o = this.props, s = o.active, u = o.attached, c = o.basic, d = o.children, p = o.circular, h = o.className, m = o.color, v = o.content, y = o.corner, b = o.detail, _ = o.empty, E = o.floating, A = o.horizontal, F = o.icon, x = o.image, I = o.onRemove, O = o.pointing, S = o.prompt, C = o.removeIcon, T = o.ribbon, N = o.size, B = o.tag, H = O === !0 && "pointing" || (O === "left" || O === "right") && O + " pointing" || (O === "above" || O === "below") && "pointing " + O, ne = He("ui", m, H, N, q(s, "active"), q(c, "basic"), q(p, "circular"), q(_, "empty"), q(E, "floating"), q(A, "horizontal"), q(x === !0, "image"), q(S, "prompt"), q(B, "tag"), nn(y, "corner"), nn(T, "ribbon"), Vn(u, "attached"), "label", h), z = je(t, this.props), re = Ye(t, this.props);
    if (!it(d))
      return /* @__PURE__ */ J.createElement(re, ue({}, z, {
        className: ne,
        onClick: this.handleClick
      }), d);
    var he = cs(C) ? "delete" : C;
    return /* @__PURE__ */ J.createElement(re, ue({
      className: ne,
      onClick: this.handleClick
    }, z), Be.create(F, {
      autoGenerateKey: !1
    }), typeof x != "boolean" && _r.create(x, {
      autoGenerateKey: !1
    }), v, Ao.create(b, {
      autoGenerateKey: !1
    }), I && Be.create(he, {
      autoGenerateKey: !1,
      overrideProps: this.handleIconOverrides
    }));
  }, t;
}(Gn);
lr.handledProps = ["active", "as", "attached", "basic", "children", "circular", "className", "color", "content", "corner", "detail", "empty", "floating", "horizontal", "icon", "image", "onClick", "onRemove", "pointing", "prompt", "removeIcon", "ribbon", "size", "tag"];
lr.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** A label can be active. */
  active: l.bool,
  /** A label can attach to a content segment. */
  attached: l.oneOf(["top", "bottom", "top right", "top left", "bottom left", "bottom right"]),
  /** A label can reduce its complexity. */
  basic: l.bool,
  /** Primary content. */
  children: l.node,
  /** A label can be circular. */
  circular: l.bool,
  /** Additional classes. */
  className: l.string,
  /** Color of the label. */
  color: l.oneOf(ra),
  /** Shorthand for primary content. */
  content: St,
  /** A label can position itself in the corner of an element. */
  corner: l.oneOfType([l.bool, l.oneOf(["left", "right"])]),
  /** Shorthand for LabelDetail. */
  detail: bt,
  /** Formats the label as a dot. */
  empty: Rt([l.bool, Co(["circular"])]),
  /** Float above another element in the upper right corner. */
  floating: l.bool,
  /** A horizontal label is formatted to label content along-side it horizontally. */
  horizontal: l.bool,
  /** Shorthand for Icon. */
  icon: bt,
  /** A label can be formatted to emphasize an image or prop can be used as shorthand for Image. */
  image: l.oneOfType([l.bool, bt]),
  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: l.func,
  /**
   * Adds an "x" icon, called when "x" is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onRemove: l.func,
  /** A label can point to content next to it. */
  pointing: l.oneOfType([l.bool, l.oneOf(["above", "below", "left", "right"])]),
  /** A label can prompt for an error in your forms. */
  prompt: l.bool,
  /** Shorthand for Icon to appear as the last child and trigger onRemove. */
  removeIcon: bt,
  /** A label can appear as a ribbon attaching itself to an element. */
  ribbon: l.oneOfType([l.bool, l.oneOf(["right"])]),
  /** A label can have different sizes. */
  size: l.oneOf(cr),
  /** A label can appear as a tag. */
  tag: l.bool
} : {};
lr.Detail = Ao;
lr.Group = jl;
lr.create = qt(lr, function(e) {
  return {
    content: e
  };
});
function zl(e) {
  var t = e.children, n = e.className, r = e.content, o = e.hidden, s = e.visible, u = He(q(s, "visible"), q(o, "hidden"), "content", n), c = je(zl, e), d = Ye(zl, e);
  return /* @__PURE__ */ J.createElement(d, ue({}, c, {
    className: u
  }), it(t) ? r : t);
}
zl.handledProps = ["as", "children", "className", "content", "hidden", "visible"];
zl.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: St,
  /** Initially hidden, visible on hover. */
  hidden: l.bool,
  /** Initially visible, hidden on hover. */
  visible: l.bool
} : {};
function Hl(e) {
  var t = e.attached, n = e.basic, r = e.buttons, o = e.children, s = e.className, u = e.color, c = e.compact, d = e.content, p = e.floated, h = e.fluid, m = e.icon, v = e.inverted, y = e.labeled, b = e.negative, _ = e.positive, E = e.primary, A = e.secondary, F = e.size, x = e.toggle, I = e.vertical, O = e.widths, S = He("ui", u, F, q(n, "basic"), q(c, "compact"), q(h, "fluid"), q(m, "icon"), q(v, "inverted"), q(y, "labeled"), q(b, "negative"), q(_, "positive"), q(E, "primary"), q(A, "secondary"), q(x, "toggle"), q(I, "vertical"), nn(t, "attached"), Vn(p, "floated"), Yn(O), "buttons", s), C = je(Hl, e), T = Ye(Hl, e);
  return Et(r) ? /* @__PURE__ */ J.createElement(T, ue({}, C, {
    className: S
  }), it(o) ? d : o) : /* @__PURE__ */ J.createElement(T, ue({}, C, {
    className: S
  }), wn(r, function(N) {
    return dt.create(N);
  }));
}
Hl.handledProps = ["as", "attached", "basic", "buttons", "children", "className", "color", "compact", "content", "floated", "fluid", "icon", "inverted", "labeled", "negative", "positive", "primary", "secondary", "size", "toggle", "vertical", "widths"];
Hl.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Groups can be attached to other content. */
  attached: l.oneOfType([l.bool, l.oneOf(["left", "right", "top", "bottom"])]),
  /** Groups can be less pronounced. */
  basic: l.bool,
  /** Array of shorthand Button values. */
  buttons: mc,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Groups can have a shared color. */
  color: l.oneOf(ra),
  /** Groups can reduce their padding to fit into tighter spaces. */
  compact: l.bool,
  /** Shorthand for primary content. */
  content: St,
  /** Groups can be aligned to the left or right of its container. */
  floated: l.oneOf(gc),
  /** Groups can take the width of their container. */
  fluid: l.bool,
  /** Groups can be formatted as icons. */
  icon: l.bool,
  /** Groups can be formatted to appear on dark backgrounds. */
  inverted: l.bool,
  /** Groups can be formatted as labeled icon buttons. */
  labeled: l.bool,
  /** Groups can hint towards a negative consequence. */
  negative: l.bool,
  /** Groups can hint towards a positive consequence. */
  positive: l.bool,
  /** Groups can be formatted to show different levels of emphasis. */
  primary: l.bool,
  /** Groups can be formatted to show different levels of emphasis. */
  secondary: l.bool,
  /** Groups can have different sizes. */
  size: l.oneOf(cr),
  /** Groups can be formatted to toggle on and off. */
  toggle: l.bool,
  /** Groups can be formatted to appear vertically. */
  vertical: l.bool,
  /** Groups can have their widths divided evenly. */
  widths: l.oneOf(rr)
} : {};
function Yl(e) {
  var t = e.className, n = e.text, r = He("or", t), o = je(Yl, e), s = Ye(Yl, e);
  return /* @__PURE__ */ J.createElement(s, ue({}, o, {
    className: r,
    "data-text": n
  }));
}
Yl.handledProps = ["as", "className", "text"];
Yl.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Additional classes. */
  className: l.string,
  /** Or buttons can have their text localized, or adjusted by using the text prop. */
  text: l.oneOfType([l.number, l.string])
} : {};
var dt = /* @__PURE__ */ function(e) {
  Jt(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.ref = /* @__PURE__ */ br(), r.computeElementType = function() {
      var c = r.props, d = c.attached, p = c.label;
      if (!Et(d) || !Et(p)) return "div";
    }, r.computeTabIndex = function(c) {
      var d = r.props, p = d.disabled, h = d.tabIndex;
      if (!Et(h)) return h;
      if (p) return -1;
      if (c === "div") return 0;
    }, r.focus = function(c) {
      return Ae(r.ref.current, "focus", c);
    }, r.handleClick = function(c) {
      var d = r.props.disabled;
      if (d) {
        c.preventDefault();
        return;
      }
      Ae(r.props, "onClick", c, r.props);
    }, r.hasIconClass = function() {
      var c = r.props, d = c.labelPosition, p = c.children, h = c.content, m = c.icon;
      return m === !0 ? !0 : m && (d || it(p) && Et(h));
    }, r;
  }
  var n = t.prototype;
  return n.computeButtonAriaRole = function(o) {
    var s = this.props.role;
    if (!Et(s)) return s;
    if (o !== "button") return "button";
  }, n.render = function() {
    var o = this.props, s = o.active, u = o.animated, c = o.attached, d = o.basic, p = o.children, h = o.circular, m = o.className, v = o.color, y = o.compact, b = o.content, _ = o.disabled, E = o.floated, A = o.fluid, F = o.icon, x = o.inverted, I = o.label, O = o.labelPosition, S = o.loading, C = o.negative, T = o.positive, N = o.primary, B = o.secondary, H = o.size, ne = o.toggle, z = o.type, re = He(v, H, q(s, "active"), q(d, "basic"), q(h, "circular"), q(y, "compact"), q(A, "fluid"), q(this.hasIconClass(), "icon"), q(x, "inverted"), q(S, "loading"), q(C, "negative"), q(T, "positive"), q(N, "primary"), q(B, "secondary"), q(ne, "toggle"), nn(u, "animated"), nn(c, "attached")), he = He(nn(O || !!I, "labeled")), ve = He(q(_, "disabled"), Vn(E, "floated")), Te = je(t, this.props), de = Ye(t, this.props, this.computeElementType), ye = this.computeTabIndex(de);
    if (!Et(I)) {
      var ee = He("ui", re, "button", m), oe = He("ui", he, "button", m, ve), se = lr.create(I, {
        defaultProps: {
          basic: !0,
          pointing: O === "left" ? "right" : "left"
        },
        autoGenerateKey: !1
      });
      return /* @__PURE__ */ J.createElement(de, ue({}, Te, {
        className: oe,
        onClick: this.handleClick
      }), O === "left" && se, /* @__PURE__ */ J.createElement(sr, {
        innerRef: this.ref
      }, /* @__PURE__ */ J.createElement("button", {
        className: ee,
        "aria-pressed": ne ? !!s : void 0,
        disabled: _,
        type: z,
        tabIndex: ye
      }, Be.create(F, {
        autoGenerateKey: !1
      }), " ", b)), (O === "right" || !O) && se);
    }
    var Ee = He("ui", re, ve, he, "button", m), Pe = !it(p), Se = this.computeButtonAriaRole(de);
    return /* @__PURE__ */ J.createElement(sr, {
      innerRef: this.ref
    }, /* @__PURE__ */ J.createElement(de, ue({}, Te, {
      className: Ee,
      "aria-pressed": ne ? !!s : void 0,
      disabled: _ && de === "button" || void 0,
      onClick: this.handleClick,
      role: Se,
      type: z,
      tabIndex: ye
    }), Pe && p, !Pe && Be.create(F, {
      autoGenerateKey: !1
    }), !Pe && b));
  }, t;
}(Gn);
dt.handledProps = ["active", "animated", "as", "attached", "basic", "children", "circular", "className", "color", "compact", "content", "disabled", "floated", "fluid", "icon", "inverted", "label", "labelPosition", "loading", "negative", "onClick", "positive", "primary", "role", "secondary", "size", "tabIndex", "toggle", "type"];
dt.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** A button can show it is currently the active user selection. */
  active: l.bool,
  /** A button can animate to show hidden content. */
  animated: l.oneOfType([l.bool, l.oneOf(["fade", "vertical"])]),
  /** A button can be attached to other content. */
  attached: l.oneOfType([l.bool, l.oneOf(["left", "right", "top", "bottom"])]),
  /** A basic button is less pronounced. */
  basic: l.bool,
  /** Primary content. */
  children: Rt([l.node, Ht(["label"]), P1({
    icon: l.oneOfType([l.string.isRequired, l.object.isRequired, l.element.isRequired])
  }, Ht(["icon"]))]),
  /** A button can be circular. */
  circular: l.bool,
  /** Additional classes. */
  className: l.string,
  /** A button can have different colors */
  color: l.oneOf([].concat(ra, ["facebook", "google plus", "instagram", "linkedin", "twitter", "vk", "youtube"])),
  /** A button can reduce its padding to fit into tighter spaces. */
  compact: l.bool,
  /** Shorthand for primary content. */
  content: St,
  /** A button can show it is currently unable to be interacted with. */
  disabled: l.bool,
  /** A button can be aligned to the left or right of its container. */
  floated: l.oneOf(gc),
  /** A button can take the width of its container. */
  fluid: l.bool,
  /** Add an Icon by name, props object, or pass an <Icon />. */
  icon: l.oneOfType([l.bool, l.string, l.object, l.element]),
  /** A button can be formatted to appear on dark backgrounds. */
  inverted: l.bool,
  /** Add a Label by text, props object, or pass a <Label />. */
  label: l.oneOfType([l.string, l.object, l.element]),
  /** A labeled button can format a Label or Icon to appear on the left or right. */
  labelPosition: l.oneOf(["right", "left"]),
  /** A button can show a loading indicator. */
  loading: l.bool,
  /** A button can hint towards a negative consequence. */
  negative: l.bool,
  /**
   * Called after user's click.
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: l.func,
  /** A button can hint towards a positive consequence. */
  positive: l.bool,
  /** A button can be formatted to show different levels of emphasis. */
  primary: l.bool,
  /** The role of the HTML element. */
  role: l.string,
  /** A button can be formatted to show different levels of emphasis. */
  secondary: l.bool,
  /** A button can have different sizes. */
  size: l.oneOf(cr),
  /** A button can receive focus. */
  tabIndex: l.oneOfType([l.number, l.string]),
  /** A button can be formatted to toggle on and off. */
  toggle: l.bool,
  /** The type of the HTML element. */
  type: l.oneOf(["button", "submit", "reset"])
} : {};
dt.defaultProps = {
  as: "button"
};
dt.Content = zl;
dt.Group = Hl;
dt.Or = Yl;
dt.create = qt(dt, function(e) {
  return {
    content: e
  };
});
function $1(e, t, n, r) {
  var o = -1, s = e == null ? 0 : e.length;
  for (r && s && (n = e[++o]); ++o < s; )
    n = t(n, e[o], o, e);
  return n;
}
function d3(e, t, n, r, o) {
  return o(e, function(s, u, c) {
    n = r ? (r = !1, s) : t(n, s, u, c);
  }), n;
}
function vm(e, t, n) {
  var r = vn(e) ? $1 : d3, o = arguments.length < 3;
  return r(e, Ko(t), n, o, Bs);
}
var f3 = function(t, n, r, o) {
  var s = r ? r.call(o, t, n) : void 0;
  if (s !== void 0)
    return !!s;
  if (t === n)
    return !0;
  if (typeof t != "object" || !t || typeof n != "object" || !n)
    return !1;
  var u = Object.keys(t), c = Object.keys(n);
  if (u.length !== c.length)
    return !1;
  for (var d = Object.prototype.hasOwnProperty.bind(n), p = 0; p < u.length; p++) {
    var h = u[p];
    if (!d(h))
      return !1;
    var m = t[h], v = n[h];
    if (s = r ? r.call(o, m, v, h) : void 0, s === !1 || s === void 0 && m !== v)
      return !1;
  }
  return !0;
};
const Pl = /* @__PURE__ */ uc(f3);
var ys = /* @__PURE__ */ function(e) {
  Jt(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handleButtonOverrides = function(c) {
      return {
        onClick: function(p, h) {
          Ae(c, "onClick", p, h), Ae(r.props, "onActionClick", p, h);
        }
      };
    }, r;
  }
  var n = t.prototype;
  return n.render = function() {
    var o = this, s = this.props, u = s.actions, c = s.children, d = s.className, p = s.content, h = He("actions", d), m = je(t, this.props), v = Ye(t, this.props);
    return it(c) ? it(p) ? /* @__PURE__ */ J.createElement(v, ue({}, m, {
      className: h
    }), wn(u, function(y) {
      return dt.create(y, {
        overrideProps: o.handleButtonOverrides
      });
    })) : /* @__PURE__ */ J.createElement(v, ue({}, m, {
      className: h
    }), p) : /* @__PURE__ */ J.createElement(v, ue({}, m, {
      className: h
    }), c);
  }, t;
}(Gn);
ys.handledProps = ["actions", "as", "children", "className", "content", "onActionClick"];
ys.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Array of shorthand buttons. */
  actions: mc,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: St,
  /**
   * Action onClick handler when using shorthand `actions`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props from the clicked action.
   */
  onActionClick: Rt([Ht(["children"]), l.func])
} : {};
ys.create = qt(ys, function(e) {
  return {
    actions: e
  };
});
function Ro(e) {
  var t = e.children, n = e.className, r = e.content, o = e.image, s = e.scrolling, u = He(n, q(o, "image"), q(s, "scrolling"), "content"), c = je(Ro, e), d = Ye(Ro, e);
  return /* @__PURE__ */ J.createElement(d, ue({}, c, {
    className: u
  }), it(t) ? r : t);
}
Ro.handledProps = ["as", "children", "className", "content", "image", "scrolling"];
Ro.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: St,
  /** A modal can contain image content. */
  image: l.bool,
  /** A modal can use the entire size of the screen. */
  scrolling: l.bool
} : {};
Ro.create = qt(Ro, function(e) {
  return {
    content: e
  };
});
function ql(e) {
  var t = e.children, n = e.className, r = e.content, o = He("description", n), s = je(ql, e), u = Ye(ql, e);
  return /* @__PURE__ */ J.createElement(u, ue({}, s, {
    className: o
  }), it(t) ? r : t);
}
ql.handledProps = ["as", "children", "className", "content"];
ql.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: St
} : {};
function Mo(e) {
  var t = e.blurring, n = e.children, r = e.className, o = e.centered, s = e.content, u = e.inverted, c = e.mountNode, d = e.scrolling, p = J.useRef(), h = He("ui", q(u, "inverted"), q(!o, "top aligned"), "page modals dimmer transition visible active", r), m = He("dimmable dimmed", q(t, "blurring"), q(d, "scrolling")), v = je(Mo, e), y = Ye(Mo, e);
  return o3(c, m), J.useEffect(function() {
    p.current && p.current.style && p.current.style.setProperty("display", "flex", "important");
  }, []), /* @__PURE__ */ J.createElement(sr, {
    innerRef: p
  }, /* @__PURE__ */ J.createElement(y, ue({}, v, {
    className: h
  }), it(n) ? s : n));
}
Mo.handledProps = ["as", "blurring", "centered", "children", "className", "content", "inverted", "mountNode", "scrolling"];
Mo.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** A dimmer can be blurred. */
  blurring: l.bool,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** A dimmer can center its contents in the viewport. */
  centered: l.bool,
  /** Shorthand for primary content. */
  content: St,
  /** A dimmer can be inverted. */
  inverted: l.bool,
  /** The node where the modal should mount. Defaults to document.body. */
  mountNode: l.any,
  /** A dimmer can make body scrollable. */
  scrolling: l.bool
} : {};
Mo.create = qt(Mo, function(e) {
  return {
    content: e
  };
});
function Do(e) {
  var t = e.children, n = e.className, r = e.content, o = He("header", n), s = je(Do, e), u = Ye(Do, e);
  return /* @__PURE__ */ J.createElement(u, ue({}, s, {
    className: o
  }), it(t) ? r : t);
}
Do.handledProps = ["as", "children", "className", "content"];
Do.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: St
} : {};
Do.create = qt(Do, function(e) {
  return {
    content: e
  };
});
var Kb = 0, p3 = 50, h3 = function(t) {
  var n = t.height + Kb, r = t.height + Kb, o = window.innerHeight, s = o / 2, u = -(r / 2), c = p3, d = s + u;
  return d + n + c < o;
}, m3 = function(t, n, r) {
  var o = n && t ? -(r.height / 2) : 0, s = -(r.width / 2);
  return {
    marginLeft: s,
    marginTop: o
  };
}, g3 = function() {
  return !window.ActiveXObject && "ActiveXObject" in window;
}, cn = /* @__PURE__ */ function(e) {
  Jt(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.legacy = yi() && g3(), r.ref = /* @__PURE__ */ br(), r.dimmerRef = /* @__PURE__ */ br(), r.latestDocumentMouseDownEvent = null, r.getMountNode = function() {
      return yi() ? r.props.mountNode || document.body : null;
    }, r.handleActionsOverrides = function(c) {
      return {
        onActionClick: function(p, h) {
          Ae(c, "onActionClick", p, h), Ae(r.props, "onActionClick", p, r.props), r.handleClose(p);
        }
      };
    }, r.handleClose = function(c) {
      r.setState({
        open: !1
      }), Ae(r.props, "onClose", c, ue({}, r.props, {
        open: !1
      }));
    }, r.handleDocumentMouseDown = function(c) {
      r.latestDocumentMouseDownEvent = c;
    }, r.handleDocumentClick = function(c) {
      var d = r.props.closeOnDimmerClick, p = r.latestDocumentMouseDownEvent;
      r.latestDocumentMouseDownEvent = null, !(!d || To(r.ref.current, p) || To(r.ref.current, c)) && (r.setState({
        open: !1
      }), Ae(r.props, "onClose", c, ue({}, r.props, {
        open: !1
      })));
    }, r.handleIconOverrides = function(c) {
      return {
        onClick: function(p) {
          Ae(c, "onClick", p), r.handleClose(p);
        }
      };
    }, r.handleOpen = function(c) {
      Ae(r.props, "onOpen", c, ue({}, r.props, {
        open: !0
      })), r.setState({
        open: !0
      });
    }, r.handlePortalMount = function(c) {
      var d = r.props.eventPool;
      r.setState({
        scrolling: !1
      }), r.setPositionAndClassNames(), xl.sub("mousedown", r.handleDocumentMouseDown, {
        pool: d,
        target: r.dimmerRef.current
      }), xl.sub("click", r.handleDocumentClick, {
        pool: d,
        target: r.dimmerRef.current
      }), Ae(r.props, "onMount", c, r.props);
    }, r.handlePortalUnmount = function(c) {
      var d = r.props.eventPool;
      cancelAnimationFrame(r.animationRequestId), xl.unsub("mousedown", r.handleDocumentMouseDown, {
        pool: d,
        target: r.dimmerRef.current
      }), xl.unsub("click", r.handleDocumentClick, {
        pool: d,
        target: r.dimmerRef.current
      }), Ae(r.props, "onUnmount", c, r.props);
    }, r.setPositionAndClassNames = function() {
      var c = r.props.centered, d, p = {};
      if (r.ref.current) {
        var h = r.ref.current.getBoundingClientRect(), m = h3(h);
        d = !m;
        var v = r.legacy ? m3(m, c, h) : {};
        Pl(r.state.legacyStyles, v) || (p.legacyStyles = v), r.state.scrolling !== d && (p.scrolling = d);
      }
      hi(p) || r.setState(p), r.animationRequestId = requestAnimationFrame(r.setPositionAndClassNames);
    }, r.renderContent = function(c) {
      var d = r.props, p = d.actions, h = d.basic, m = d.children, v = d.className, y = d.closeIcon, b = d.content, _ = d.header, E = d.size, A = d.style, F = r.state, x = F.legacyStyles, I = F.scrolling, O = He("ui", E, q(h, "basic"), q(r.legacy, "legacy"), q(I, "scrolling"), "modal transition visible active", v), S = Ye(t, r.props), C = y === !0 ? "close" : y, T = Be.create(C, {
        overrideProps: r.handleIconOverrides
      });
      return /* @__PURE__ */ J.createElement(sr, {
        innerRef: r.ref
      }, /* @__PURE__ */ J.createElement(S, ue({}, c, {
        className: O,
        style: ue({}, x, A)
      }), T, it(m) ? /* @__PURE__ */ J.createElement(J.Fragment, null, Do.create(_, {
        autoGenerateKey: !1
      }), Ro.create(b, {
        autoGenerateKey: !1
      }), ys.create(p, {
        overrideProps: r.handleActionsOverrides
      })) : m));
    }, r;
  }
  var n = t.prototype;
  return n.componentWillUnmount = function() {
    this.handlePortalUnmount();
  }, n.render = function() {
    var o = this.props, s = o.centered, u = o.closeOnDocumentClick, c = o.dimmer, d = o.eventPool, p = o.trigger, h = this.state, m = h.open, v = h.scrolling, y = this.getMountNode();
    if (!yi())
      return /* @__PURE__ */ II(p) ? p : null;
    var b = je(t, this.props), _ = Qr.handledProps, E = vm(b, function(F, x, I) {
      return ya(_, I) || (F[I] = x), F;
    }, {}), A = Ed(b, _);
    return /* @__PURE__ */ J.createElement(Qr, ue({
      closeOnDocumentClick: u
    }, A, {
      trigger: p,
      eventPool: d,
      mountNode: y,
      open: m,
      onClose: this.handleClose,
      onMount: this.handlePortalMount,
      onOpen: this.handleOpen,
      onUnmount: this.handlePortalUnmount
    }), /* @__PURE__ */ J.createElement(sr, {
      innerRef: this.dimmerRef
    }, Mo.create(xd(c) ? c : {}, {
      autoGenerateKey: !1,
      defaultProps: {
        blurring: c === "blurring",
        inverted: c === "inverted"
      },
      overrideProps: {
        children: this.renderContent(E),
        centered: s,
        mountNode: y,
        scrolling: v
      }
    })));
  }, t;
}(Ws);
cn.handledProps = ["actions", "as", "basic", "centered", "children", "className", "closeIcon", "closeOnDimmerClick", "closeOnDocumentClick", "content", "defaultOpen", "dimmer", "eventPool", "header", "mountNode", "onActionClick", "onClose", "onMount", "onOpen", "onUnmount", "open", "size", "style", "trigger"];
cn.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Shorthand for Modal.Actions. Typically an array of button shorthand. */
  actions: bt,
  /** A modal can reduce its complexity */
  basic: l.bool,
  /** A modal can be vertically centered in the viewport */
  centered: l.bool,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for the close icon. Closes the modal on click. */
  closeIcon: l.oneOfType([l.node, l.object, l.bool]),
  /** Whether or not the Modal should close when the dimmer is clicked. */
  closeOnDimmerClick: l.bool,
  /** Whether or not the Modal should close when the document is clicked. */
  closeOnDocumentClick: l.bool,
  /** Simple text content for the Modal. */
  content: bt,
  /** Initial value of open. */
  defaultOpen: l.bool,
  /** A Modal can appear in a dimmer. */
  dimmer: l.oneOfType([l.bool, l.func, l.object, l.oneOf(["inverted", "blurring"])]),
  /** Event pool namespace that is used to handle component events */
  eventPool: l.string,
  /** Modal displayed above the content in bold. */
  header: bt,
  /** The node where the modal should mount. Defaults to document.body. */
  mountNode: l.any,
  /**
   * Action onClick handler when using shorthand `actions`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onActionClick: l.func,
  /**
   * Called when a close event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClose: l.func,
  /**
   * Called when the modal is mounted on the DOM.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onMount: l.func,
  /**
   * Called when an open event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onOpen: l.func,
  /**
   * Called when the modal is unmounted from the DOM.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onUnmount: l.func,
  /** Controls whether or not the Modal is displayed. */
  open: l.bool,
  /** A modal can vary in size */
  size: l.oneOf(["mini", "tiny", "small", "large", "fullscreen"]),
  /** Custom styles. */
  style: l.object,
  /** Element to be rendered in-place where the modal is defined. */
  trigger: l.node
  /**
   * NOTE: Any unhandled props that are defined in Modal are passed-through
   * to the inner Portal.
   */
} : {};
cn.defaultProps = {
  centered: !0,
  dimmer: !0,
  closeOnDimmerClick: !0,
  closeOnDocumentClick: !1,
  eventPool: "Modal"
};
cn.autoControlledProps = ["open"];
cn.Actions = ys;
cn.Content = Ro;
cn.Description = ql;
cn.Dimmer = Mo;
cn.Header = Do;
function Vl(e) {
  var t = e.children, n = e.className, r = e.content, o = He("header", n), s = je(Vl, e), u = Ye(Vl, e);
  return /* @__PURE__ */ J.createElement(u, ue({}, s, {
    className: o
  }), it(t) ? r : t);
}
Vl.handledProps = ["as", "children", "className", "content"];
Vl.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: St
} : {};
function v3(e) {
  return function(t) {
    return e == null ? void 0 : e[t];
  };
}
var y3 = {
  // Latin-1 Supplement block.
  À: "A",
  Á: "A",
  Â: "A",
  Ã: "A",
  Ä: "A",
  Å: "A",
  à: "a",
  á: "a",
  â: "a",
  ã: "a",
  ä: "a",
  å: "a",
  Ç: "C",
  ç: "c",
  Ð: "D",
  ð: "d",
  È: "E",
  É: "E",
  Ê: "E",
  Ë: "E",
  è: "e",
  é: "e",
  ê: "e",
  ë: "e",
  Ì: "I",
  Í: "I",
  Î: "I",
  Ï: "I",
  ì: "i",
  í: "i",
  î: "i",
  ï: "i",
  Ñ: "N",
  ñ: "n",
  Ò: "O",
  Ó: "O",
  Ô: "O",
  Õ: "O",
  Ö: "O",
  Ø: "O",
  ò: "o",
  ó: "o",
  ô: "o",
  õ: "o",
  ö: "o",
  ø: "o",
  Ù: "U",
  Ú: "U",
  Û: "U",
  Ü: "U",
  ù: "u",
  ú: "u",
  û: "u",
  ü: "u",
  Ý: "Y",
  ý: "y",
  ÿ: "y",
  Æ: "Ae",
  æ: "ae",
  Þ: "Th",
  þ: "th",
  ß: "ss",
  // Latin Extended-A block.
  Ā: "A",
  Ă: "A",
  Ą: "A",
  ā: "a",
  ă: "a",
  ą: "a",
  Ć: "C",
  Ĉ: "C",
  Ċ: "C",
  Č: "C",
  ć: "c",
  ĉ: "c",
  ċ: "c",
  č: "c",
  Ď: "D",
  Đ: "D",
  ď: "d",
  đ: "d",
  Ē: "E",
  Ĕ: "E",
  Ė: "E",
  Ę: "E",
  Ě: "E",
  ē: "e",
  ĕ: "e",
  ė: "e",
  ę: "e",
  ě: "e",
  Ĝ: "G",
  Ğ: "G",
  Ġ: "G",
  Ģ: "G",
  ĝ: "g",
  ğ: "g",
  ġ: "g",
  ģ: "g",
  Ĥ: "H",
  Ħ: "H",
  ĥ: "h",
  ħ: "h",
  Ĩ: "I",
  Ī: "I",
  Ĭ: "I",
  Į: "I",
  İ: "I",
  ĩ: "i",
  ī: "i",
  ĭ: "i",
  į: "i",
  ı: "i",
  Ĵ: "J",
  ĵ: "j",
  Ķ: "K",
  ķ: "k",
  ĸ: "k",
  Ĺ: "L",
  Ļ: "L",
  Ľ: "L",
  Ŀ: "L",
  Ł: "L",
  ĺ: "l",
  ļ: "l",
  ľ: "l",
  ŀ: "l",
  ł: "l",
  Ń: "N",
  Ņ: "N",
  Ň: "N",
  Ŋ: "N",
  ń: "n",
  ņ: "n",
  ň: "n",
  ŋ: "n",
  Ō: "O",
  Ŏ: "O",
  Ő: "O",
  ō: "o",
  ŏ: "o",
  ő: "o",
  Ŕ: "R",
  Ŗ: "R",
  Ř: "R",
  ŕ: "r",
  ŗ: "r",
  ř: "r",
  Ś: "S",
  Ŝ: "S",
  Ş: "S",
  Š: "S",
  ś: "s",
  ŝ: "s",
  ş: "s",
  š: "s",
  Ţ: "T",
  Ť: "T",
  Ŧ: "T",
  ţ: "t",
  ť: "t",
  ŧ: "t",
  Ũ: "U",
  Ū: "U",
  Ŭ: "U",
  Ů: "U",
  Ű: "U",
  Ų: "U",
  ũ: "u",
  ū: "u",
  ŭ: "u",
  ů: "u",
  ű: "u",
  ų: "u",
  Ŵ: "W",
  ŵ: "w",
  Ŷ: "Y",
  ŷ: "y",
  Ÿ: "Y",
  Ź: "Z",
  Ż: "Z",
  Ž: "Z",
  ź: "z",
  ż: "z",
  ž: "z",
  Ĳ: "IJ",
  ĳ: "ij",
  Œ: "Oe",
  œ: "oe",
  ŉ: "'n",
  ſ: "s"
}, b3 = v3(y3), _3 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, w3 = "\\u0300-\\u036f", E3 = "\\ufe20-\\ufe2f", x3 = "\\u20d0-\\u20ff", C3 = w3 + E3 + x3, O3 = "[" + C3 + "]", S3 = RegExp(O3, "g");
function ph(e) {
  return e = Di(e), e && e.replace(_3, b3).replace(S3, "");
}
var T3 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function P3(e) {
  return e.match(T3) || [];
}
var k3 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function N3(e) {
  return k3.test(e);
}
var B1 = "\\ud800-\\udfff", I3 = "\\u0300-\\u036f", A3 = "\\ufe20-\\ufe2f", R3 = "\\u20d0-\\u20ff", M3 = I3 + A3 + R3, W1 = "\\u2700-\\u27bf", U1 = "a-z\\xdf-\\xf6\\xf8-\\xff", D3 = "\\xac\\xb1\\xd7\\xf7", L3 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", F3 = "\\u2000-\\u206f", $3 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", j1 = "A-Z\\xc0-\\xd6\\xd8-\\xde", B3 = "\\ufe0e\\ufe0f", z1 = D3 + L3 + F3 + $3, H1 = "['’]", Zb = "[" + z1 + "]", W3 = "[" + M3 + "]", Y1 = "\\d+", U3 = "[" + W1 + "]", q1 = "[" + U1 + "]", V1 = "[^" + B1 + z1 + Y1 + W1 + U1 + j1 + "]", j3 = "\\ud83c[\\udffb-\\udfff]", z3 = "(?:" + W3 + "|" + j3 + ")", H3 = "[^" + B1 + "]", G1 = "(?:\\ud83c[\\udde6-\\uddff]){2}", K1 = "[\\ud800-\\udbff][\\udc00-\\udfff]", as = "[" + j1 + "]", Y3 = "\\u200d", Xb = "(?:" + q1 + "|" + V1 + ")", q3 = "(?:" + as + "|" + V1 + ")", Qb = "(?:" + H1 + "(?:d|ll|m|re|s|t|ve))?", Jb = "(?:" + H1 + "(?:D|LL|M|RE|S|T|VE))?", Z1 = z3 + "?", X1 = "[" + B3 + "]?", V3 = "(?:" + Y3 + "(?:" + [H3, G1, K1].join("|") + ")" + X1 + Z1 + ")*", G3 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", K3 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Z3 = X1 + Z1 + V3, X3 = "(?:" + [U3, G1, K1].join("|") + ")" + Z3, Q3 = RegExp([
  as + "?" + q1 + "+" + Qb + "(?=" + [Zb, as, "$"].join("|") + ")",
  q3 + "+" + Jb + "(?=" + [Zb, as + Xb, "$"].join("|") + ")",
  as + "?" + Xb + "+" + Qb,
  as + "+" + Jb,
  K3,
  G3,
  Y1,
  X3
].join("|"), "g");
function J3(e) {
  return e.match(Q3) || [];
}
function eF(e, t, n) {
  return e = Di(e), t = t, t === void 0 ? N3(e) ? J3(e) : P3(e) : e.match(t) || [];
}
var tF = "['’]", nF = RegExp(tF, "g");
function rF(e) {
  return function(t) {
    return $1(eF(ph(t).replace(nF, "")), e, "");
  };
}
function aF(e) {
  return function(t) {
    t = Di(t);
    var n = fm(t) ? lh(t) : void 0, r = n ? n[0] : t.charAt(0), o = n ? v1(n, 1).join("") : t.slice(1);
    return r[e]() + o;
  };
}
var oF = aF("toUpperCase"), iF = rF(function(e, t, n) {
  return e + (n ? " " : "") + oF(t);
}), Ci = /* @__PURE__ */ function(e) {
  Jt(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handleClick = function(c) {
      var d = r.props.disabled;
      d || Ae(r.props, "onClick", c, r.props);
    }, r;
  }
  var n = t.prototype;
  return n.render = function() {
    var o = this.props, s = o.active, u = o.children, c = o.className, d = o.color, p = o.content, h = o.disabled, m = o.fitted, v = o.header, y = o.icon, b = o.link, _ = o.name, E = o.onClick, A = o.position, F = He(d, A, q(s, "active"), q(h, "disabled"), q(y === !0 || y && !(_ || p), "icon"), q(v, "header"), q(b, "link"), nn(m, "fitted"), "item", c), x = Ye(t, this.props, function() {
      if (E) return "a";
    }), I = je(t, this.props);
    return it(u) ? /* @__PURE__ */ J.createElement(x, ue({}, I, {
      className: F,
      onClick: this.handleClick
    }), Be.create(y, {
      autoGenerateKey: !1
    }), it(p) ? iF(_) : p) : /* @__PURE__ */ J.createElement(x, ue({}, I, {
      className: F,
      onClick: this.handleClick
    }), u);
  }, t;
}(Gn);
Ci.handledProps = ["active", "as", "children", "className", "color", "content", "disabled", "fitted", "header", "icon", "index", "link", "name", "onClick", "position"];
Ci.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** A menu item can be active. */
  active: l.bool,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Additional colors can be specified. */
  color: l.oneOf(ra),
  /** Shorthand for primary content. */
  content: St,
  /** A menu item can be disabled. */
  disabled: l.bool,
  /** A menu item or menu can remove element padding, vertically or horizontally. */
  fitted: l.oneOfType([l.bool, l.oneOf(["horizontally", "vertically"])]),
  /** A menu item may include a header or may itself be a header. */
  header: l.bool,
  /** MenuItem can be only icon. */
  icon: l.oneOfType([l.bool, bt]),
  /** MenuItem index inside Menu. */
  index: l.number,
  /** A menu item can be link. */
  link: l.bool,
  /** Internal name of the MenuItem. */
  name: l.string,
  /**
   * Called on click. When passed, the component will render as an `a`
   * tag by default instead of a `div`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: l.func,
  /** A menu item can take left or right position. */
  position: l.oneOf(["left", "right"])
} : {};
Ci.create = qt(Ci, function(e) {
  return {
    content: e,
    name: e
  };
});
function Gl(e) {
  var t = e.children, n = e.className, r = e.content, o = e.position, s = He(o, "menu", n), u = je(Gl, e), c = Ye(Gl, e);
  return /* @__PURE__ */ J.createElement(c, ue({}, u, {
    className: s
  }), it(t) ? r : t);
}
Gl.handledProps = ["as", "children", "className", "content", "position"];
Gl.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: St,
  /** A sub menu can take left or right position. */
  position: l.oneOf(["left", "right"])
} : {};
var Pn = /* @__PURE__ */ function(e) {
  Jt(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handleItemOverrides = function(c) {
      return {
        onClick: function(p, h) {
          var m = h.index;
          r.setState({
            activeIndex: m
          }), Ae(c, "onClick", p, h), Ae(r.props, "onItemClick", p, h);
        }
      };
    }, r;
  }
  var n = t.prototype;
  return n.renderItems = function() {
    var o = this, s = this.props.items, u = this.state.activeIndex;
    return wn(s, function(c, d) {
      return Ci.create(c, {
        defaultProps: {
          active: parseInt(u, 10) === d,
          index: d
        },
        overrideProps: o.handleItemOverrides
      });
    });
  }, n.render = function() {
    var o = this.props, s = o.attached, u = o.borderless, c = o.children, d = o.className, p = o.color, h = o.compact, m = o.fixed, v = o.floated, y = o.fluid, b = o.icon, _ = o.inverted, E = o.pagination, A = o.pointing, F = o.secondary, x = o.size, I = o.stackable, O = o.tabular, S = o.text, C = o.vertical, T = o.widths, N = He("ui", p, x, q(u, "borderless"), q(h, "compact"), q(y, "fluid"), q(_, "inverted"), q(E, "pagination"), q(A, "pointing"), q(F, "secondary"), q(I, "stackable"), q(S, "text"), q(C, "vertical"), nn(s, "attached"), nn(v, "floated"), nn(b, "icon"), nn(O, "tabular"), Vn(m, "fixed"), Yn(T, "item"), d, "menu"), B = je(t, this.props), H = Ye(t, this.props);
    return /* @__PURE__ */ J.createElement(H, ue({}, B, {
      className: N
    }), it(c) ? this.renderItems() : c);
  }, t;
}(Ws);
Pn.handledProps = ["activeIndex", "as", "attached", "borderless", "children", "className", "color", "compact", "defaultActiveIndex", "fixed", "floated", "fluid", "icon", "inverted", "items", "onItemClick", "pagination", "pointing", "secondary", "size", "stackable", "tabular", "text", "vertical", "widths"];
Pn.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Index of the currently active item. */
  activeIndex: l.oneOfType([l.number, l.string]),
  /** A menu may be attached to other content segments. */
  attached: l.oneOfType([l.bool, l.oneOf(["top", "bottom"])]),
  /** A menu item or menu can have no borders. */
  borderless: l.bool,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Additional colors can be specified. */
  color: l.oneOf(ra),
  /** A menu can take up only the space necessary to fit its content. */
  compact: l.bool,
  /** Initial activeIndex value. */
  defaultActiveIndex: l.oneOfType([l.number, l.string]),
  /** A menu can be fixed to a side of its context. */
  fixed: l.oneOf(["left", "right", "bottom", "top"]),
  /** A menu can be floated. */
  floated: l.oneOfType([l.bool, l.oneOf(["right"])]),
  /** A vertical menu may take the size of its container. */
  fluid: l.bool,
  /** A menu may have just icons (bool) or labeled icons. */
  icon: l.oneOfType([l.bool, l.oneOf(["labeled"])]),
  /** A menu may have its colors inverted to show greater contrast. */
  inverted: l.bool,
  /** Shorthand array of props for Menu. */
  items: mc,
  /**
   * onClick handler for MenuItem. Mutually exclusive with children.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All item props.
   */
  onItemClick: Rt([Ht(["children"]), l.func]),
  /** A pagination menu is specially formatted to present links to pages of content. */
  pagination: l.bool,
  /** A menu can point to show its relationship to nearby content. */
  pointing: l.bool,
  /** A menu can adjust its appearance to de-emphasize its contents. */
  secondary: l.bool,
  /** A menu can vary in size. */
  size: l.oneOf(Jr(cr, "medium", "big")),
  /** A menu can stack at mobile resolutions. */
  stackable: l.bool,
  /** A menu can be formatted to show tabs of information. */
  tabular: l.oneOfType([l.bool, l.oneOf(["right"])]),
  /** A menu can be formatted for text content. */
  text: l.bool,
  /** A vertical menu displays elements vertically. */
  vertical: l.bool,
  /** A menu can have its items divided evenly. */
  widths: l.oneOf(rr)
} : {};
Pn.autoControlledProps = ["activeIndex"];
Pn.Header = Vl;
Pn.Item = Ci;
Pn.Menu = Gl;
Pn.create = qt(Pn, function(e) {
  return {
    items: e
  };
});
var bs = /* @__PURE__ */ function(e) {
  Jt(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handleClick = function(c) {
      Ae(r.props, "onClick", c, r.props);
    }, r.handleKeyDown = function(c) {
      Ae(r.props, "onKeyDown", c, r.props), yn.getCode(c) === yn.Enter && Ae(r.props, "onClick", c, r.props);
    }, r.handleOverrides = function() {
      return {
        onClick: r.handleClick,
        onKeyDown: r.handleKeyDown
      };
    }, r;
  }
  var n = t.prototype;
  return n.render = function() {
    var o = this.props, s = o.active, u = o.type, c = this.props.disabled || u === "ellipsisItem";
    return Ci.create(this.props, {
      defaultProps: {
        active: s,
        "aria-current": s,
        "aria-disabled": c,
        disabled: c,
        onClick: this.handleClick,
        onKeyDown: this.handleKeyDown,
        tabIndex: c ? -1 : 0
      },
      overrideProps: this.handleOverrides
    });
  }, t;
}(Gn);
bs.handledProps = ["active", "disabled", "onClick", "onKeyDown", "type"];
bs.propTypes = process.env.NODE_ENV !== "production" ? {
  /** A pagination item can be active. */
  active: l.bool,
  /** A pagination item can be disabled. */
  disabled: l.bool,
  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: l.func,
  /**
   * Called on key down.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onKeyDown: l.func,
  /** A pagination should have a type. */
  type: l.oneOf(["ellipsisItem", "firstItem", "prevItem", "pageItem", "nextItem", "lastItem"])
} : {};
bs.create = qt(bs, function(e) {
  return {
    content: e
  };
});
var Us = /* @__PURE__ */ function(e) {
  Jt(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handleItemClick = function(c, d) {
      var p = d.value, h = r.state.activePage;
      +h != +p && (r.setState({
        activePage: p
      }), Ae(r.props, "onPageChange", c, ue({}, r.props, {
        activePage: p
      })));
    }, r.handleItemOverrides = function(c, d, p) {
      return function(h) {
        return {
          active: c,
          type: d,
          key: d + "-" + p,
          onClick: function(v, y) {
            Ae(h, "onClick", v, y), y.type !== "ellipsisItem" && r.handleItemClick(v, y);
          }
        };
      };
    }, r;
  }
  var n = t.prototype;
  return n.getInitialAutoControlledState = function() {
    return {
      activePage: 1
    };
  }, n.render = function() {
    var o = this, s = this.props, u = s["aria-label"], c = s.boundaryRange, d = s.disabled, p = s.ellipsisItem, h = s.siblingRange, m = s.totalPages, v = this.state.activePage, y = vL({
      activePage: v,
      boundaryRange: c,
      hideEllipsis: Et(p),
      siblingRange: h,
      totalPages: m
    }), b = je(t, this.props);
    return /* @__PURE__ */ J.createElement(Pn, ue({}, b, {
      "aria-label": u,
      pagination: !0,
      role: "navigation"
    }), wn(y, function(_) {
      var E = _.active, A = _.type, F = _.value;
      return bs.create(o.props[A], {
        defaultProps: {
          content: F,
          disabled: d,
          value: F
        },
        overrideProps: o.handleItemOverrides(E, A, F)
      });
    }));
  }, t;
}(Ws);
Us.handledProps = ["activePage", "aria-label", "boundaryRange", "defaultActivePage", "disabled", "ellipsisItem", "firstItem", "lastItem", "nextItem", "onPageChange", "pageItem", "prevItem", "siblingRange", "totalPages"];
Us.propTypes = process.env.NODE_ENV !== "production" ? {
  /** A pagination item can have an aria label. */
  "aria-label": l.string,
  /** Initial activePage value. */
  defaultActivePage: l.oneOfType([l.number, l.string]),
  /** Index of the currently active page. */
  activePage: l.oneOfType([l.number, l.string]),
  /** Number of always visible pages at the beginning and end. */
  boundaryRange: l.oneOfType([l.number, l.string]),
  /** A pagination can be disabled. */
  disabled: l.bool,
  /** A shorthand for PaginationItem. */
  ellipsisItem: bt,
  /** A shorthand for PaginationItem. */
  firstItem: bt,
  /** A shorthand for PaginationItem. */
  lastItem: bt,
  /** A shorthand for PaginationItem. */
  nextItem: bt,
  /** A shorthand for PaginationItem. */
  pageItem: bt,
  /** A shorthand for PaginationItem. */
  prevItem: bt,
  /**
   * Called on change of an active page.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onPageChange: l.func,
  /** Number of always visible pages before and after the current one. */
  siblingRange: l.oneOfType([l.number, l.string]),
  /** Total number of pages. */
  totalPages: l.oneOfType([l.number, l.string]).isRequired
} : {};
Us.autoControlledProps = ["activePage"];
Us.defaultProps = {
  "aria-label": "Pagination Navigation",
  boundaryRange: 1,
  ellipsisItem: "...",
  firstItem: {
    "aria-label": "First item",
    content: "«"
  },
  lastItem: {
    "aria-label": "Last item",
    content: "»"
  },
  nextItem: {
    "aria-label": "Next item",
    content: "⟩"
  },
  pageItem: {},
  prevItem: {
    "aria-label": "Previous item",
    content: "⟨"
  },
  siblingRange: 1
};
Us.Item = bs;
function sF(e, t, n) {
  return e == null ? e : C1(e, t, n);
}
var ar = /* @__PURE__ */ function(e) {
  Jt(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.inputRef = /* @__PURE__ */ br(), r.labelRef = /* @__PURE__ */ br(), r.canToggle = function() {
      var c = r.props, d = c.disabled, p = c.radio, h = c.readOnly, m = r.state.checked;
      return !d && !h && !(p && m);
    }, r.computeTabIndex = function() {
      var c = r.props, d = c.disabled, p = c.tabIndex;
      return Et(p) ? d ? -1 : 0 : p;
    }, r.handleClick = function(c) {
      var d = r.props.id, p = r.state, h = p.checked, m = p.indeterminate, v = Ae(r.inputRef.current, "contains", c.target), y = Ae(r.labelRef.current, "contains", c.target), b = !y && !v, _ = !Et(d), E = y && _;
      E || Ae(r.props, "onClick", c, ue({}, r.props, {
        checked: !h,
        indeterminate: !!m
      })), r.isClickFromMouse && (r.isClickFromMouse = !1, y && !_ && r.handleChange(c), b && r.handleChange(c), y && _ && c.stopPropagation());
    }, r.handleChange = function(c) {
      var d = r.state.checked;
      r.canToggle() && (Ae(r.props, "onChange", c, ue({}, r.props, {
        checked: !d,
        indeterminate: !1
      })), r.setState({
        checked: !d,
        indeterminate: !1
      }));
    }, r.handleMouseDown = function(c) {
      var d = r.state, p = d.checked, h = d.indeterminate;
      Ae(r.props, "onMouseDown", c, ue({}, r.props, {
        checked: !!p,
        indeterminate: !!h
      })), c.defaultPrevented || Ae(r.inputRef.current, "focus"), c.preventDefault();
    }, r.handleMouseUp = function(c) {
      var d = r.state, p = d.checked, h = d.indeterminate;
      r.isClickFromMouse = !0, Ae(r.props, "onMouseUp", c, ue({}, r.props, {
        checked: !!p,
        indeterminate: !!h
      }));
    }, r.setIndeterminate = function() {
      var c = r.state.indeterminate;
      sF(r.inputRef, "current.indeterminate", !!c);
    }, r;
  }
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.setIndeterminate();
  }, n.componentDidUpdate = function() {
    this.setIndeterminate();
  }, n.render = function() {
    var o = this.props, s = o.className, u = o.disabled, c = o.label, d = o.id, p = o.name, h = o.radio, m = o.readOnly, v = o.slider, y = o.toggle, b = o.type, _ = o.value, E = this.state, A = E.checked, F = E.indeterminate, x = He(
      "ui",
      q(A, "checked"),
      q(u, "disabled"),
      q(F, "indeterminate"),
      // auto apply fitted class to compact white space when there is no label
      // https://semantic-ui.com/modules/checkbox.html#fitted
      q(Et(c), "fitted"),
      q(h, "radio"),
      q(m, "read-only"),
      q(v, "slider"),
      q(y, "toggle"),
      "checkbox",
      s
    ), I = je(t, this.props), O = Ye(t, this.props), S = gm(I, {
      htmlProps: D1
    }), C = S[0], T = S[1], N = dh(c, {
      defaultProps: {
        htmlFor: d
      },
      autoGenerateKey: !1
    }) || /* @__PURE__ */ J.createElement("label", {
      htmlFor: d
    });
    return /* @__PURE__ */ J.createElement(O, ue({}, T, {
      className: x,
      onClick: this.handleClick,
      onChange: this.handleChange,
      onMouseDown: this.handleMouseDown,
      onMouseUp: this.handleMouseUp
    }), /* @__PURE__ */ J.createElement(sr, {
      innerRef: this.inputRef
    }, /* @__PURE__ */ J.createElement("input", ue({}, C, {
      checked: A,
      className: "hidden",
      disabled: u,
      id: d,
      name: p,
      readOnly: !0,
      tabIndex: this.computeTabIndex(),
      type: b,
      value: _
    }))), /* @__PURE__ */ J.createElement(sr, {
      innerRef: this.labelRef
    }, N));
  }, t;
}(Ws);
ar.handledProps = ["as", "checked", "className", "defaultChecked", "defaultIndeterminate", "disabled", "fitted", "id", "indeterminate", "label", "name", "onChange", "onClick", "onMouseDown", "onMouseUp", "radio", "readOnly", "slider", "tabIndex", "toggle", "type", "value"];
ar.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Whether or not checkbox is checked. */
  checked: l.bool,
  /** Additional classes. */
  className: l.string,
  /** The initial value of checked. */
  defaultChecked: l.bool,
  /** Whether or not checkbox is indeterminate. */
  defaultIndeterminate: l.bool,
  /** A checkbox can appear disabled and be unable to change states */
  disabled: l.bool,
  /** Removes padding for a label. Auto applied when there is no label. */
  fitted: l.bool,
  /** A unique identifier. */
  id: l.oneOfType([l.number, l.string]),
  /** Whether or not checkbox is indeterminate. */
  indeterminate: l.bool,
  /** The text of the associated label element. */
  label: bt,
  /** The HTML input name. */
  name: l.string,
  /**
   * Called when the user attempts to change the checked state.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed checked/indeterminate state.
   */
  onChange: l.func,
  /**
   * Called when the checkbox or label is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and current checked/indeterminate state.
   */
  onClick: l.func,
  /**
   * Called when the user presses down on the mouse.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and current checked/indeterminate state.
   */
  onMouseDown: l.func,
  /**
   * Called when the user releases the mouse.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and current checked/indeterminate state.
   */
  onMouseUp: l.func,
  /** Format as a radio element. This means it is an exclusive option. */
  radio: Rt([l.bool, Ht(["slider", "toggle"])]),
  /** A checkbox can be read-only and unable to change states. */
  readOnly: l.bool,
  /** Format to emphasize the current selection state. */
  slider: Rt([l.bool, Ht(["radio", "toggle"])]),
  /** A checkbox can receive focus. */
  tabIndex: l.oneOfType([l.number, l.string]),
  /** Format to show an on or off choice. */
  toggle: Rt([l.bool, Ht(["radio", "slider"])]),
  /** HTML input type, either checkbox or radio. */
  type: l.oneOf(["checkbox", "radio"]),
  /** The HTML input value. */
  value: l.oneOfType([l.string, l.number])
} : {};
ar.defaultProps = {
  type: "checkbox"
};
ar.autoControlledProps = ["checked", "indeterminate"];
function Lo(e) {
  var t = e.slider, n = e.toggle, r = e.type, o = je(Lo, e), s = !(t || n) || void 0;
  return /* @__PURE__ */ J.createElement(ar, ue({}, o, {
    type: r,
    radio: s,
    slider: t,
    toggle: n
  }));
}
Lo.handledProps = ["slider", "toggle", "type"];
Lo.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Format to emphasize the current selection state. */
  slider: ar.propTypes.slider,
  /** Format to show an on or off choice. */
  toggle: ar.propTypes.toggle,
  /** HTML input type, either checkbox or radio. */
  type: ar.propTypes.type
} : {};
Lo.defaultProps = {
  type: "radio"
};
function lF(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = 0, o = []; ++t < n; ) {
    var s = e[t];
    s && (o[r++] = s);
  }
  return o;
}
function cF(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (!t(e[n], n, e))
      return !1;
  return !0;
}
function uF(e, t) {
  var n = !0;
  return Bs(e, function(r, o, s) {
    return n = !!t(r, o, s), n;
  }), n;
}
function dF(e, t, n) {
  var r = vn(e) ? cF : uF;
  return r(e, Ko(t));
}
function fF(e, t, n) {
  var r = e == null ? 0 : e.length;
  return r ? (t = t === void 0 ? 1 : hc(t), t = r - t, yd(e, 0, t < 0 ? 0 : t)) : [];
}
var pF = f1("length"), Q1 = "\\ud800-\\udfff", hF = "\\u0300-\\u036f", mF = "\\ufe20-\\ufe2f", gF = "\\u20d0-\\u20ff", vF = hF + mF + gF, yF = "\\ufe0e\\ufe0f", bF = "[" + Q1 + "]", hh = "[" + vF + "]", mh = "\\ud83c[\\udffb-\\udfff]", _F = "(?:" + hh + "|" + mh + ")", J1 = "[^" + Q1 + "]", ew = "(?:\\ud83c[\\udde6-\\uddff]){2}", tw = "[\\ud800-\\udbff][\\udc00-\\udfff]", wF = "\\u200d", nw = _F + "?", rw = "[" + yF + "]?", EF = "(?:" + wF + "(?:" + [J1, ew, tw].join("|") + ")" + rw + nw + ")*", xF = rw + nw + EF, CF = "(?:" + [J1 + hh + "?", hh, ew, tw, bF].join("|") + ")", e0 = RegExp(mh + "(?=" + mh + ")|" + CF + xF, "g");
function OF(e) {
  for (var t = e0.lastIndex = 0; e0.test(e); )
    ++t;
  return t;
}
function SF(e) {
  return fm(e) ? OF(e) : pF(e);
}
var TF = "[object Map]", PF = "[object Set]";
function kF(e) {
  if (e == null)
    return 0;
  if (ro(e))
    return mm(e) ? SF(e) : e.length;
  var t = pa(e);
  return t == TF || t == PF ? e.size : cm(e).length;
}
var t0 = $s(function(e) {
  return A1(wd(e, 1, $l, !0));
}), NF = ["ad", "andorra", "ae", "united arab emirates", "uae", "af", "afghanistan", "ag", "antigua", "ai", "anguilla", "al", "albania", "am", "armenia", "an", "netherlands antilles", "ao", "angola", "ar", "argentina", "as", "american samoa", "at", "austria", "au", "australia", "aw", "aruba", "ax", "aland islands", "az", "azerbaijan", "ba", "bosnia", "bb", "barbados", "bd", "bangladesh", "be", "belgium", "bf", "burkina faso", "bg", "bulgaria", "bh", "bahrain", "bi", "burundi", "bj", "benin", "bm", "bermuda", "bn", "brunei", "bo", "bolivia", "br", "brazil", "bs", "bahamas", "bt", "bhutan", "bv", "bouvet island", "bw", "botswana", "by", "belarus", "bz", "belize", "ca", "canada", "cc", "cocos islands", "cd", "congo", "cf", "central african republic", "cg", "congo brazzaville", "ch", "switzerland", "ci", "cote divoire", "ck", "cook islands", "cl", "chile", "cm", "cameroon", "cn", "china", "co", "colombia", "cr", "costa rica", "cs", "cu", "cuba", "cv", "cape verde", "cx", "christmas island", "cy", "cyprus", "cz", "czech republic", "de", "germany", "dj", "djibouti", "dk", "denmark", "dm", "dominica", "do", "dominican republic", "dz", "algeria", "ec", "ecuador", "england", "gb eng", "ee", "estonia", "eg", "egypt", "eh", "western sahara", "er", "eritrea", "es", "spain", "et", "ethiopia", "eu", "european union", "fi", "finland", "fj", "fiji", "fk", "falkland islands", "fm", "micronesia", "fo", "faroe islands", "fr", "france", "ga", "gabon", "gb", "uk", "united kingdom", "gd", "grenada", "ge", "georgia", "gf", "french guiana", "gh", "ghana", "gi", "gibraltar", "gl", "greenland", "gm", "gambia", "gn", "guinea", "gp", "guadeloupe", "gq", "equatorial guinea", "gr", "greece", "gs", "sandwich islands", "gt", "guatemala", "gu", "guam", "gw", "guinea-bissau", "gy", "guyana", "hk", "hong kong", "hm", "heard island", "hn", "honduras", "hr", "croatia", "ht", "haiti", "hu", "hungary", "id", "indonesia", "ie", "ireland", "il", "israel", "in", "india", "io", "indian ocean territory", "iq", "iraq", "ir", "iran", "is", "iceland", "it", "italy", "jm", "jamaica", "jo", "jordan", "jp", "japan", "ke", "kenya", "kg", "kyrgyzstan", "kh", "cambodia", "ki", "kiribati", "km", "comoros", "kn", "saint kitts and nevis", "kp", "north korea", "kr", "south korea", "kw", "kuwait", "ky", "cayman islands", "kz", "kazakhstan", "la", "laos", "lb", "lebanon", "lc", "saint lucia", "li", "liechtenstein", "lk", "sri lanka", "lr", "liberia", "ls", "lesotho", "lt", "lithuania", "lu", "luxembourg", "lv", "latvia", "ly", "libya", "ma", "morocco", "mc", "monaco", "md", "moldova", "me", "montenegro", "mg", "madagascar", "mh", "marshall islands", "mk", "macedonia", "ml", "mali", "mm", "myanmar", "burma", "mn", "mongolia", "mo", "macau", "mp", "northern mariana islands", "mq", "martinique", "mr", "mauritania", "ms", "montserrat", "mt", "malta", "mu", "mauritius", "mv", "maldives", "mw", "malawi", "mx", "mexico", "my", "malaysia", "mz", "mozambique", "na", "namibia", "nc", "new caledonia", "ne", "niger", "nf", "norfolk island", "ng", "nigeria", "ni", "nicaragua", "nl", "netherlands", "no", "norway", "np", "nepal", "nr", "nauru", "nu", "niue", "nz", "new zealand", "om", "oman", "pa", "panama", "pe", "peru", "pf", "french polynesia", "pg", "new guinea", "ph", "philippines", "pk", "pakistan", "pl", "poland", "pm", "saint pierre", "pn", "pitcairn islands", "pr", "puerto rico", "ps", "palestine", "pt", "portugal", "pw", "palau", "py", "paraguay", "qa", "qatar", "re", "reunion", "ro", "romania", "rs", "serbia", "ru", "russia", "rw", "rwanda", "sa", "saudi arabia", "sb", "solomon islands", "sc", "seychelles", "gb sct", "scotland", "sd", "sudan", "se", "sweden", "sg", "singapore", "sh", "saint helena", "si", "slovenia", "sj", "svalbard", "jan mayen", "sk", "slovakia", "sl", "sierra leone", "sm", "san marino", "sn", "senegal", "so", "somalia", "sr", "suriname", "st", "sao tome", "sv", "el salvador", "sy", "syria", "sz", "swaziland", "tc", "caicos islands", "td", "chad", "tf", "french territories", "tg", "togo", "th", "thailand", "tj", "tajikistan", "tk", "tokelau", "tl", "timorleste", "tm", "turkmenistan", "tn", "tunisia", "to", "tonga", "tr", "turkey", "tt", "trinidad", "tv", "tuvalu", "tw", "taiwan", "tz", "tanzania", "ua", "ukraine", "ug", "uganda", "um", "us minor islands", "us", "america", "united states", "uy", "uruguay", "uz", "uzbekistan", "va", "vatican city", "vc", "saint vincent", "ve", "venezuela", "vg", "british virgin islands", "vi", "us virgin islands", "vn", "vietnam", "vu", "vanuatu", "gb wls", "wales", "wf", "wallis and futuna", "ws", "samoa", "ye", "yemen", "yt", "mayotte", "za", "south africa", "zm", "zambia", "zw", "zimbabwe"], Oi = /* @__PURE__ */ function(e) {
  Jt(t, e);
  function t() {
    return e.apply(this, arguments) || this;
  }
  var n = t.prototype;
  return n.render = function() {
    var o = this.props, s = o.className, u = o.name, c = He(u, "flag", s), d = je(t, this.props), p = Ye(t, this.props);
    return /* @__PURE__ */ J.createElement(p, ue({}, d, {
      className: c
    }));
  }, t;
}(B_);
Oi.handledProps = ["as", "className", "name"];
Oi.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Additional classes. */
  className: l.string,
  /** Flag name, can use the two digit country code, the full name, or a common alias. */
  name: T1(NF)
} : {};
Oi.defaultProps = {
  as: "i"
};
Oi.create = qt(Oi, function(e) {
  return {
    name: e
  };
});
function Kl(e) {
  var t = e.className, n = He("divider", t), r = je(Kl, e), o = Ye(Kl, e);
  return /* @__PURE__ */ J.createElement(o, ue({}, r, {
    className: n
  }));
}
Kl.handledProps = ["as", "className"];
Kl.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Additional classes. */
  className: l.string
} : {};
var Si = /* @__PURE__ */ function(e) {
  Jt(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handleClick = function(c) {
      Ae(r.props, "onClick", c, r.props);
    }, r;
  }
  var n = t.prototype;
  return n.render = function() {
    var o = this.props, s = o.active, u = o.children, c = o.className, d = o.content, p = o.disabled, h = o.description, m = o.flag, v = o.icon, y = o.image, b = o.label, _ = o.selected, E = o.text, A = He(q(s, "active"), q(p, "disabled"), q(_, "selected"), "item", c), F = Et(v) ? RM(u, "DropdownMenu") && "dropdown" : v, x = je(t, this.props), I = Ye(t, this.props), O = {
      role: "option",
      "aria-disabled": p,
      "aria-checked": s,
      "aria-selected": _
    };
    if (!it(u))
      return /* @__PURE__ */ J.createElement(I, ue({}, x, O, {
        className: A,
        onClick: this.handleClick
      }), u);
    var S = Oi.create(m, {
      autoGenerateKey: !1
    }), C = Be.create(F, {
      autoGenerateKey: !1
    }), T = _r.create(y, {
      autoGenerateKey: !1
    }), N = lr.create(b, {
      autoGenerateKey: !1
    }), B = uh("span", function(ne) {
      return {
        children: ne
      };
    }, h, {
      defaultProps: {
        className: "description"
      },
      autoGenerateKey: !1
    }), H = uh("span", function(ne) {
      return {
        children: ne
      };
    }, it(d) ? E : d, {
      defaultProps: {
        className: "text"
      },
      autoGenerateKey: !1
    });
    return /* @__PURE__ */ J.createElement(I, ue({}, x, O, {
      className: A,
      onClick: this.handleClick
    }), T, C, S, N, B, H);
  }, t;
}(Gn);
Si.handledProps = ["active", "as", "children", "className", "content", "description", "disabled", "flag", "icon", "image", "label", "onClick", "selected", "text", "value"];
Si.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Style as the currently chosen item. */
  active: l.bool,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: St,
  /** Additional text with less emphasis. */
  description: bt,
  /** A dropdown item can be disabled. */
  disabled: l.bool,
  /** Shorthand for Flag. */
  flag: bt,
  /** Shorthand for Icon. */
  icon: bt,
  /** Shorthand for Image. */
  image: bt,
  /** Shorthand for Label. */
  label: bt,
  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: l.func,
  /**
   * The item currently selected by keyboard shortcut.
   * This is not the active item.
   */
  selected: l.bool,
  /** Display text. */
  text: St,
  /** Stored value. */
  value: l.oneOfType([l.bool, l.number, l.string])
} : {};
Si.create = qt(Si, function(e) {
  return e;
});
function Fo(e) {
  var t = e.children, n = e.className, r = e.content, o = e.icon, s = He("header", n), u = je(Fo, e), c = Ye(Fo, e);
  return it(t) ? /* @__PURE__ */ J.createElement(c, ue({}, u, {
    className: s
  }), Be.create(o, {
    autoGenerateKey: !1
  }), r) : /* @__PURE__ */ J.createElement(c, ue({}, u, {
    className: s
  }), t);
}
Fo.handledProps = ["as", "children", "className", "content", "icon"];
Fo.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function) */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: St,
  /** Shorthand for Icon. */
  icon: bt
} : {};
Fo.create = qt(Fo, function(e) {
  return {
    content: e
  };
});
function _s(e) {
  var t = e.children, n = e.className, r = e.content, o = e.direction, s = e.open, u = e.scrolling, c = He(o, q(s, "visible"), q(u, "scrolling"), "menu transition", n), d = je(_s, e), p = Ye(_s, e);
  return /* @__PURE__ */ J.createElement(p, ue({}, d, {
    className: c
  }), it(t) ? r : t);
}
_s.handledProps = ["as", "children", "className", "content", "direction", "open", "scrolling"];
_s.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: St,
  /** A dropdown menu can open to the left or to the right. */
  direction: l.oneOf(["left", "right"]),
  /** Whether or not the dropdown menu is displayed. */
  open: l.bool,
  /** A dropdown menu can scroll. */
  scrolling: l.bool
} : {};
var Ti = /* @__PURE__ */ function(e) {
  Jt(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handleChange = function(c) {
      var d = va(c, "target.value");
      Ae(r.props, "onChange", c, ue({}, r.props, {
        value: d
      }));
    }, r;
  }
  var n = t.prototype;
  return n.render = function() {
    var o = this.props, s = o.autoComplete, u = o.className, c = o.tabIndex, d = o.type, p = o.value, h = He("search", u), m = je(t, this.props);
    return /* @__PURE__ */ J.createElement("input", ue({}, m, {
      "aria-autocomplete": "list",
      autoComplete: s,
      className: h,
      onChange: this.handleChange,
      tabIndex: c,
      type: d,
      value: p
    }));
  }, t;
}(Gn);
Ti.handledProps = ["as", "autoComplete", "className", "tabIndex", "type", "value"];
Ti.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** An input can have the auto complete. */
  autoComplete: l.string,
  /** Additional classes. */
  className: l.string,
  /** An input can receive focus. */
  tabIndex: l.oneOfType([l.number, l.string]),
  /** The HTML input type. */
  type: l.string,
  /** Stored value. */
  value: l.oneOfType([l.number, l.string])
} : {};
Ti.defaultProps = {
  autoComplete: "off",
  type: "text"
};
Ti.create = qt(Ti, function(e) {
  return {
    type: e
  };
});
function $o(e) {
  var t = e.children, n = e.className, r = e.content, o = He("divider", n), s = je($o, e), u = Ye($o, e);
  return /* @__PURE__ */ J.createElement(u, ue({
    "aria-atomic": !0,
    "aria-live": "polite",
    role: "alert"
  }, s, {
    className: o
  }), it(t) ? r : t);
}
$o.handledProps = ["as", "children", "className", "content"];
$o.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: St
} : {};
$o.create = qt($o, function(e) {
  return {
    content: e
  };
});
var aw = /[\\^$.*+?()[\]{}|]/g, IF = RegExp(aw.source);
function AF(e) {
  return e = Di(e), e && IF.test(e) ? e.replace(aw, "\\$&") : e;
}
function is(e) {
  var t = e.additionLabel, n = e.additionPosition, r = e.allowAdditions, o = e.deburr, s = e.multiple, u = e.options, c = e.search, d = e.searchQuery, p = e.value, h = u;
  if (s && (h = th(h, function(_) {
    return !ya(p, _.value);
  })), c && d)
    if (gs(c))
      h = c(h, d);
    else {
      var m = o ? ph(d) : d, v = new RegExp(AF(m), "i");
      h = th(h, function(_) {
        return v.test(o ? ph(_.text) : _.text);
      });
    }
  if (r && c && d && !Tl(h, {
    text: d
  })) {
    var y = /* @__PURE__ */ J.isValidElement(t) ? /* @__PURE__ */ J.cloneElement(t, {
      key: "addition-label"
    }) : t || "", b = {
      key: "addition",
      // by using an array, we can pass multiple elements, but when doing so
      // we must specify a `key` for React to know which one is which
      text: [y, /* @__PURE__ */ J.createElement("b", {
        key: "addition-query"
      }, d)],
      value: d,
      className: "addition",
      "data-additional": !0
    };
    n === "top" ? h.unshift(b) : h.push(b);
  }
  return h;
}
is.handledProps = [];
function n0(e) {
  var t = e.additionLabel, n = e.additionPosition, r = e.allowAdditions, o = e.deburr, s = e.multiple, u = e.options, c = e.search, d = e.searchQuery, p = e.selectedIndex, h = e.value, m = is({
    value: h,
    options: u,
    searchQuery: d,
    additionLabel: t,
    additionPosition: n,
    allowAdditions: r,
    deburr: o,
    multiple: s,
    search: c
  }), v = vm(m, function(E, A, F) {
    return A.disabled || E.push(F), E;
  }, []), y;
  if (!p || p < 0) {
    var b = v[0];
    y = s ? b : rh(m, ["value", h]) || v[0];
  } else if (s)
    y = m1(v, function(E) {
      return E >= p;
    }), p >= m.length - 1 && (y = v[v.length - 1]);
  else {
    var _ = rh(m, ["value", h]);
    y = ya(v, _) ? _ : void 0;
  }
  return (!y || y < 0) && (y = v[0]), y;
}
var r0 = function(t, n) {
  return Et(t) ? n : t;
}, a0 = function(t) {
  return t && t.map(function(n) {
    return Ed(n, ["key", "value"]);
  });
};
function ow(e) {
  var t = e.flag, n = e.image, r = e.text;
  return gs(r) ? r : {
    content: /* @__PURE__ */ J.createElement(J.Fragment, null, Oi.create(t), _r.create(n), r)
  };
}
var Cn = /* @__PURE__ */ function(e) {
  Jt(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.searchRef = /* @__PURE__ */ br(), r.sizerRef = /* @__PURE__ */ br(), r.ref = /* @__PURE__ */ br(), r.handleChange = function(c, d) {
      Ae(r.props, "onChange", c, ue({}, r.props, {
        value: d
      }));
    }, r.closeOnChange = function(c) {
      var d = r.props, p = d.closeOnChange, h = d.multiple, m = cs(p) ? !h : p;
      m && r.close(c, I1);
    }, r.closeOnEscape = function(c) {
      r.props.closeOnEscape && yn.getCode(c) === yn.Escape && (c.preventDefault(), r.close(c));
    }, r.moveSelectionOnKeyDown = function(c) {
      var d, p = r.props, h = p.multiple, m = p.selectOnNavigation, v = r.state.open;
      if (v) {
        var y = (d = {}, d[yn.ArrowDown] = 1, d[yn.ArrowUp] = -1, d), b = y[yn.getCode(c)];
        if (b !== void 0) {
          c.preventDefault();
          var _ = r.getSelectedIndexAfterMove(b);
          !h && m && r.makeSelectedItemActive(c, _), r.setState({
            selectedIndex: _
          });
        }
      }
    }, r.openOnSpace = function(c) {
      var d, p, h, m = r.state.focus && !r.state.open && yn.getCode(c) === yn.Spacebar, v = ((d = c.target) == null ? void 0 : d.tagName) !== "INPUT" && ((p = c.target) == null ? void 0 : p.tagName) !== "TEXTAREA" && ((h = c.target) == null ? void 0 : h.isContentEditable) !== !0;
      m && (v && c.preventDefault(), r.open(c));
    }, r.openOnArrow = function(c) {
      var d = r.state, p = d.focus, h = d.open;
      if (p && !h) {
        var m = yn.getCode(c);
        (m === yn.ArrowDown || m === yn.ArrowUp) && (c.preventDefault(), r.open(c));
      }
    }, r.makeSelectedItemActive = function(c, d) {
      var p = r.state, h = p.open, m = p.value, v = r.props.multiple, y = r.getSelectedItem(d), b = va(y, "value"), _ = va(y, "disabled");
      if (Et(b) || !h || _)
        return m;
      var E = v ? t0(m, [b]) : b, A = v ? !!oh(E, m).length : E !== m;
      return A && (r.setState({
        value: E
      }), r.handleChange(c, E), y["data-additional"] && Ae(r.props, "onAddItem", c, ue({}, r.props, {
        value: b
      }))), m;
    }, r.selectItemOnEnter = function(c) {
      var d = r.props.search, p = r.state, h = p.open, m = p.selectedIndex;
      if (h) {
        var v = yn.getCode(c) === yn.Enter || // https://github.com/Semantic-Org/Semantic-UI-React/pull/3766
        !d && yn.getCode(c) === yn.Spacebar;
        if (v) {
          c.preventDefault();
          var y = kF(is({
            value: r.state.value,
            options: r.props.options,
            searchQuery: r.state.searchQuery,
            additionLabel: r.props.additionLabel,
            additionPosition: r.props.additionPosition,
            allowAdditions: r.props.allowAdditions,
            deburr: r.props.deburr,
            multiple: r.props.multiple,
            search: r.props.search
          }));
          if (!(d && y === 0)) {
            var b = r.makeSelectedItemActive(c, m);
            r.setState({
              selectedIndex: n0({
                additionLabel: r.props.additionLabel,
                additionPosition: r.props.additionPosition,
                allowAdditions: r.props.allowAdditions,
                deburr: r.props.deburr,
                multiple: r.props.multiple,
                search: r.props.search,
                selectedIndex: m,
                value: b,
                options: r.props.options,
                searchQuery: ""
              })
            }), r.closeOnChange(c), r.clearSearchQuery(), d && Ae(r.searchRef.current, "focus");
          }
        }
      }
    }, r.removeItemOnBackspace = function(c) {
      var d = r.props, p = d.multiple, h = d.search, m = r.state, v = m.searchQuery, y = m.value;
      if (yn.getCode(c) === yn.Backspace && !(v || !h || !p || hi(y))) {
        c.preventDefault();
        var b = fF(y);
        r.setState({
          value: b
        }), r.handleChange(c, b);
      }
    }, r.closeOnDocumentClick = function(c) {
      r.props.closeOnBlur && (r.ref.current && To(r.ref.current, c) || r.close());
    }, r.handleMouseDown = function(c) {
      r.isMouseDown = !0, Ae(r.props, "onMouseDown", c, r.props), document.addEventListener("mouseup", r.handleDocumentMouseUp);
    }, r.handleDocumentMouseUp = function() {
      r.isMouseDown = !1, document.removeEventListener("mouseup", r.handleDocumentMouseUp);
    }, r.handleClick = function(c) {
      var d = r.props, p = d.minCharacters, h = d.search, m = r.state, v = m.open, y = m.searchQuery;
      if (Ae(r.props, "onClick", c, r.props), c.stopPropagation(), !h) return r.toggle(c);
      if (v) {
        Ae(r.searchRef.current, "focus");
        return;
      }
      if (y.length >= p || p === 1) {
        r.open(c);
        return;
      }
      Ae(r.searchRef.current, "focus");
    }, r.handleIconClick = function(c) {
      var d = r.props.clearable, p = r.hasValue();
      Ae(r.props, "onClick", c, r.props), c.stopPropagation(), d && p ? r.clearValue(c) : r.toggle(c);
    }, r.handleItemClick = function(c, d) {
      var p = r.props, h = p.multiple, m = p.search, v = r.state.value, y = d.value;
      if (c.stopPropagation(), (h || d.disabled) && c.nativeEvent.stopImmediatePropagation(), !d.disabled) {
        var b = d["data-additional"], _ = h ? t0(r.state.value, [y]) : y, E = h ? !!oh(_, v).length : _ !== v;
        E && (r.setState({
          value: _
        }), r.handleChange(c, _)), r.clearSearchQuery(), Ae(m ? r.searchRef.current : r.ref.current, "focus"), r.closeOnChange(c), b && Ae(r.props, "onAddItem", c, ue({}, r.props, {
          value: y
        }));
      }
    }, r.handleFocus = function(c) {
      var d = r.state.focus;
      d || (Ae(r.props, "onFocus", c, r.props), r.setState({
        focus: !0
      }));
    }, r.handleBlur = function(c) {
      var d = va(c, "currentTarget");
      if (!(d && d.contains(document.activeElement))) {
        var p = r.props, h = p.closeOnBlur, m = p.multiple, v = p.selectOnBlur;
        r.isMouseDown || (Ae(r.props, "onBlur", c, r.props), v && !m && (r.makeSelectedItemActive(c, r.state.selectedIndex), h && r.close()), r.setState({
          focus: !1
        }), r.clearSearchQuery());
      }
    }, r.handleSearchChange = function(c, d) {
      var p = d.value;
      c.stopPropagation();
      var h = r.props.minCharacters, m = r.state.open, v = p;
      if (Ae(r.props, "onSearchChange", c, ue({}, r.props, {
        searchQuery: v
      })), r.setState({
        searchQuery: v,
        selectedIndex: 0
      }), !m && v.length >= h) {
        r.open();
        return;
      }
      m && h !== 1 && v.length < h && r.close();
    }, r.handleKeyDown = function(c) {
      r.moveSelectionOnKeyDown(c), r.openOnArrow(c), r.openOnSpace(c), r.selectItemOnEnter(c), Ae(r.props, "onKeyDown", c);
    }, r.getSelectedItem = function(c) {
      var d = is({
        value: r.state.value,
        options: r.props.options,
        searchQuery: r.state.searchQuery,
        additionLabel: r.props.additionLabel,
        additionPosition: r.props.additionPosition,
        allowAdditions: r.props.allowAdditions,
        deburr: r.props.deburr,
        multiple: r.props.multiple,
        search: r.props.search
      });
      return va(d, "[" + c + "]");
    }, r.getItemByValue = function(c) {
      var d = r.props.options;
      return m1(d, {
        value: c
      });
    }, r.getDropdownAriaOptions = function() {
      var c = r.props, d = c.loading, p = c.disabled, h = c.search, m = c.multiple, v = r.state.open, y = {
        role: h ? "combobox" : "listbox",
        "aria-busy": d,
        "aria-disabled": p,
        "aria-expanded": !!v
      };
      return y.role === "listbox" && (y["aria-multiselectable"] = m), y;
    }, r.clearSearchQuery = function() {
      var c = r.state.searchQuery;
      c === void 0 || c === "" || r.setState({
        searchQuery: ""
      });
    }, r.handleLabelClick = function(c, d) {
      c.stopPropagation(), r.setState({
        selectedLabel: d.value
      }), Ae(r.props, "onLabelClick", c, d);
    }, r.handleLabelRemove = function(c, d) {
      c.stopPropagation();
      var p = r.state.value, h = Jr(p, d.value);
      r.setState({
        value: h
      }), r.handleChange(c, h);
    }, r.getSelectedIndexAfterMove = function(c, d) {
      d === void 0 && (d = r.state.selectedIndex);
      var p = is({
        value: r.state.value,
        options: r.props.options,
        searchQuery: r.state.searchQuery,
        additionLabel: r.props.additionLabel,
        additionPosition: r.props.additionPosition,
        allowAdditions: r.props.allowAdditions,
        deburr: r.props.deburr,
        multiple: r.props.multiple,
        search: r.props.search
      });
      if (!(p === void 0 || dF(p, "disabled"))) {
        var h = p.length - 1, m = r.props.wrapSelection, v = d + c;
        return !m && (v > h || v < 0) ? v = d : v > h ? v = 0 : v < 0 && (v = h), p[v].disabled ? r.getSelectedIndexAfterMove(c, v) : v;
      }
    }, r.handleIconOverrides = function(c) {
      var d = r.props.clearable, p = He(d && r.hasValue() && "clear", c.className);
      return {
        className: p,
        onClick: function(m) {
          Ae(c, "onClick", m, c), r.handleIconClick(m);
        }
      };
    }, r.clearValue = function(c) {
      var d = r.props.multiple, p = d ? [] : "";
      r.setState({
        value: p
      }), r.handleChange(c, p);
    }, r.computeSearchInputTabIndex = function() {
      var c = r.props, d = c.disabled, p = c.tabIndex;
      return Et(p) ? d ? -1 : 0 : p;
    }, r.computeSearchInputWidth = function() {
      var c = r.state.searchQuery;
      if (r.sizerRef.current && c) {
        r.sizerRef.current.style.display = "inline", r.sizerRef.current.textContent = c;
        var d = Math.ceil(r.sizerRef.current.getBoundingClientRect().width);
        return r.sizerRef.current.style.removeProperty("display"), d;
      }
    }, r.computeTabIndex = function() {
      var c = r.props, d = c.disabled, p = c.search, h = c.tabIndex;
      if (!p)
        return d ? -1 : Et(h) ? 0 : h;
    }, r.handleSearchInputOverrides = function(c) {
      return {
        onChange: function(p, h) {
          Ae(c, "onChange", p, h), r.handleSearchChange(p, h);
        }
      };
    }, r.hasValue = function() {
      var c = r.props.multiple, d = r.state.value;
      return c ? !hi(d) : !Et(d) && d !== "";
    }, r.scrollSelectedItemIntoView = function() {
      if (r.ref.current) {
        var c = r.ref.current.querySelector(".menu.visible");
        if (c) {
          var d = c.querySelector(".item.selected");
          if (d) {
            var p = d.offsetTop < c.scrollTop, h = d.offsetTop + d.clientHeight > c.scrollTop + c.clientHeight;
            p ? c.scrollTop = d.offsetTop : h && (c.scrollTop = d.offsetTop + d.clientHeight - c.clientHeight);
          }
        }
      }
    }, r.setOpenDirection = function() {
      if (r.ref.current) {
        var c = r.ref.current.querySelector(".menu.visible");
        if (c) {
          var d = r.ref.current.getBoundingClientRect(), p = c.clientHeight, h = document.documentElement.clientHeight - d.top - d.height - p, m = d.top - p, v = h < 0 && m > h;
          !v != !r.state.upward && r.setState({
            upward: v
          });
        }
      }
    }, r.open = function(c, d) {
      c === void 0 && (c = null), d === void 0 && (d = !0);
      var p = r.props, h = p.disabled, m = p.search;
      h || (m && Ae(r.searchRef.current, "focus"), Ae(r.props, "onOpen", c, r.props), d && r.setState({
        open: !0
      }), r.scrollSelectedItemIntoView());
    }, r.close = function(c, d) {
      d === void 0 && (d = r.handleClose), r.state.open && (Ae(r.props, "onClose", c, r.props), r.setState({
        open: !1
      }, d));
    }, r.handleClose = function() {
      var c = document.activeElement === r.searchRef.current;
      !c && r.ref.current && r.ref.current.blur();
      var d = document.activeElement === r.ref.current, p = c || d;
      r.setState({
        focus: p
      });
    }, r.toggle = function(c) {
      return r.state.open ? r.close(c) : r.open(c);
    }, r.renderText = function() {
      var c = r.props, d = c.multiple, p = c.placeholder, h = c.search, m = c.text, v = r.state, y = v.searchQuery, b = v.selectedIndex, _ = v.value, E = v.open, A = r.hasValue(), F = He(p && !A && "default", "text", h && y && "filtered"), x = p, I;
      return m ? x = m : E && !d ? I = r.getSelectedItem(b) : A && (I = r.getItemByValue(_)), $o.create(I ? ow(I) : x, {
        defaultProps: {
          className: F
        }
      });
    }, r.renderSearchInput = function() {
      var c = r.props, d = c.search, p = c.searchInput, h = r.state.searchQuery;
      return d && /* @__PURE__ */ J.createElement(sr, {
        innerRef: r.searchRef
      }, Ti.create(p, {
        defaultProps: {
          style: {
            width: r.computeSearchInputWidth()
          },
          tabIndex: r.computeSearchInputTabIndex(),
          value: h
        },
        overrideProps: r.handleSearchInputOverrides
      }));
    }, r.renderSearchSizer = function() {
      var c = r.props, d = c.search, p = c.multiple;
      return d && p && /* @__PURE__ */ J.createElement("span", {
        className: "sizer",
        ref: r.sizerRef
      });
    }, r.renderLabels = function() {
      var c = r.props, d = c.multiple, p = c.renderLabel, h = r.state, m = h.selectedLabel, v = h.value;
      if (!(!d || hi(v))) {
        var y = wn(v, r.getItemByValue);
        return wn(lF(y), function(b, _) {
          var E = {
            active: b.value === m,
            as: "a",
            key: r0(b.key, b.value),
            onClick: r.handleLabelClick,
            onRemove: r.handleLabelRemove,
            value: b.value
          };
          return lr.create(p(b, _, E), {
            defaultProps: E
          });
        });
      }
    }, r.renderOptions = function() {
      var c = r.props, d = c.lazyLoad, p = c.multiple, h = c.search, m = c.noResultsMessage, v = r.state, y = v.open, b = v.selectedIndex, _ = v.value;
      if (d && !y) return null;
      var E = is({
        value: r.state.value,
        options: r.props.options,
        searchQuery: r.state.searchQuery,
        additionLabel: r.props.additionLabel,
        additionPosition: r.props.additionPosition,
        allowAdditions: r.props.allowAdditions,
        deburr: r.props.deburr,
        multiple: r.props.multiple,
        search: r.props.search
      });
      if (m !== null && h && hi(E))
        return /* @__PURE__ */ J.createElement("div", {
          className: "message"
        }, m);
      var A = p ? function(F) {
        return ya(_, F);
      } : function(F) {
        return F === _;
      };
      return wn(E, function(F, x) {
        return Si.create(ue({
          active: A(F.value),
          selected: b === x
        }, F, {
          key: r0(F.key, F.value),
          // Needed for handling click events on disabled items
          style: ue({}, F.style, {
            pointerEvents: "all"
          })
        }), {
          generateKey: !1,
          overrideProps: function(O) {
            return {
              onClick: function(C, T) {
                O.onClick == null || O.onClick(C, T), r.handleItemClick(C, T);
              }
            };
          }
        });
      });
    }, r.renderMenu = function() {
      var c = r.props, d = c.children, p = c.direction, h = c.header, m = r.state.open, v = r.getDropdownMenuAriaOptions();
      if (!it(d)) {
        var y = nm.only(d), b = He(p, q(m, "visible"), y.props.className);
        return /* @__PURE__ */ W_(y, ue({
          className: b
        }, v));
      }
      return /* @__PURE__ */ J.createElement(_s, ue({}, v, {
        direction: p,
        open: m
      }), Fo.create(h, {
        autoGenerateKey: !1
      }), r.renderOptions());
    }, r;
  }
  var n = t.prototype;
  return n.getInitialAutoControlledState = function() {
    return {
      focus: !1,
      searchQuery: ""
    };
  }, t.getAutoControlledStateFromProps = function(o, s, u) {
    var c = {
      __options: o.options,
      __value: s.value
    }, d = (
      // On value change
      !Pl(u.__value, s.value) || // On option keys/values, we only check those properties to avoid recursive performance impacts.
      // https://github.com/Semantic-Org/Semantic-UI-React/issues/3000
      !e3(a0(o.options), a0(u.__options))
    );
    return d && (c.selectedIndex = n0({
      additionLabel: o.additionLabel,
      additionPosition: o.additionPosition,
      allowAdditions: o.allowAdditions,
      deburr: o.deburr,
      multiple: o.multiple,
      search: o.search,
      selectedIndex: s.selectedIndex,
      value: s.value,
      options: o.options,
      searchQuery: s.searchQuery
    })), c;
  }, n.componentDidMount = function() {
    var o = this.state.open;
    o && this.open(null, !1);
  }, n.shouldComponentUpdate = function(o, s) {
    return !Pl(o, this.props) || !Pl(s, this.state);
  }, n.componentDidUpdate = function(o, s) {
    var u = this.props, c = u.closeOnBlur, d = u.minCharacters, p = u.openOnFocus, h = u.search;
    if (process.env.NODE_ENV !== "production") {
      var m = Array.isArray(this.props.value), v = Xp(this.props, "value");
      v && this.props.multiple && !m ? console.error("Dropdown `value` must be an array when `multiple` is set." + (" Received type: `" + Object.prototype.toString.call(this.props.value) + "`.")) : v && !this.props.multiple && m && console.error("Dropdown `value` must not be an array when `multiple` is not set. Either set `multiple={true}` or use a string or number value.");
    }
    if (!s.focus && this.state.focus) {
      if (!this.isMouseDown) {
        var y = !h || h && d === 1 && !this.state.open;
        p && y && this.open();
      }
    } else s.focus && !this.state.focus && !this.isMouseDown && c && this.close();
    !s.open && this.state.open ? (this.setOpenDirection(), this.scrollSelectedItemIntoView()) : s.open && this.state.open, s.selectedIndex !== this.state.selectedIndex && this.scrollSelectedItemIntoView();
  }, n.getDropdownMenuAriaOptions = function() {
    var o = this.props, s = o.search, u = o.multiple, c = {};
    return s && (c["aria-multiselectable"] = u, c.role = "listbox"), c;
  }, n.render = function() {
    var o = this.props, s = o.basic, u = o.button, c = o.className, d = o.compact, p = o.disabled, h = o.error, m = o.fluid, v = o.floating, y = o.icon, b = o.inline, _ = o.item, E = o.labeled, A = o.loading, F = o.multiple, x = o.pointing, I = o.search, O = o.selection, S = o.scrolling, C = o.simple, T = o.trigger, N = this.state, B = N.focus, H = N.open, ne = N.upward, z = He(
      "ui",
      q(H, "active visible"),
      q(p, "disabled"),
      q(h, "error"),
      q(A, "loading"),
      q(s, "basic"),
      q(u, "button"),
      q(d, "compact"),
      q(m, "fluid"),
      q(v, "floating"),
      q(b, "inline"),
      // TODO: consider augmentation to render Dropdowns as Button/Menu, solves icon/link item issues
      // https://github.com/Semantic-Org/Semantic-UI-React/issues/401#issuecomment-240487229
      // TODO: the icon class is only required when a dropdown is a button
      // useKeyOnly(icon, 'icon'),
      q(E, "labeled"),
      q(_, "item"),
      q(F, "multiple"),
      q(I, "search"),
      q(O, "selection"),
      q(C, "simple"),
      q(S, "scrolling"),
      q(ne, "upward"),
      nn(x, "pointing"),
      "dropdown",
      c
    ), re = je(t, this.props), he = Ye(t, this.props), ve = this.getDropdownAriaOptions(he, this.props);
    return /* @__PURE__ */ J.createElement(sr, {
      innerRef: this.ref
    }, /* @__PURE__ */ J.createElement(he, ue({}, re, ve, {
      className: z,
      onBlur: this.handleBlur,
      onClick: this.handleClick,
      onKeyDown: this.handleKeyDown,
      onMouseDown: this.handleMouseDown,
      onFocus: this.handleFocus,
      onChange: this.handleChange,
      tabIndex: this.computeTabIndex()
    }), this.renderLabels(), this.renderSearchInput(), this.renderSearchSizer(), T || this.renderText(), Be.create(y, {
      overrideProps: this.handleIconOverrides,
      autoGenerateKey: !1
    }), this.renderMenu(), H && /* @__PURE__ */ J.createElement(ja, {
      name: "keydown",
      on: this.closeOnEscape
    }), H && /* @__PURE__ */ J.createElement(ja, {
      name: "click",
      on: this.closeOnDocumentClick
    }), B && /* @__PURE__ */ J.createElement(ja, {
      name: "keydown",
      on: this.removeItemOnBackspace
    })));
  }, t;
}(Ws);
Cn.handledProps = ["additionLabel", "additionPosition", "allowAdditions", "as", "basic", "button", "children", "className", "clearable", "closeOnBlur", "closeOnChange", "closeOnEscape", "compact", "deburr", "defaultOpen", "defaultSearchQuery", "defaultSelectedLabel", "defaultUpward", "defaultValue", "direction", "disabled", "error", "floating", "fluid", "header", "icon", "inline", "item", "labeled", "lazyLoad", "loading", "minCharacters", "multiple", "noResultsMessage", "onAddItem", "onBlur", "onChange", "onClick", "onClose", "onFocus", "onLabelClick", "onMouseDown", "onOpen", "onSearchChange", "open", "openOnFocus", "options", "placeholder", "pointing", "renderLabel", "scrolling", "search", "searchInput", "searchQuery", "selectOnBlur", "selectOnNavigation", "selectedLabel", "selection", "simple", "tabIndex", "text", "trigger", "upward", "value", "wrapSelection"];
Cn.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Label prefixed to an option added by a user. */
  additionLabel: l.oneOfType([l.element, l.string]),
  /** Position of the `Add: ...` option in the dropdown list ('top' or 'bottom'). */
  additionPosition: l.oneOf(["top", "bottom"]),
  /**
   * Allow user additions to the list of options (boolean).
   * Requires the use of `selection`, `options` and `search`.
   */
  allowAdditions: Rt([Co(["options", "selection", "search"]), l.bool]),
  /** A Dropdown can reduce its complexity. */
  basic: l.bool,
  /** Format the Dropdown to appear as a button. */
  button: l.bool,
  /** Primary content. */
  children: Rt([Ht(["options", "selection"]), P1({
    children: l.any.isRequired
  }, l.element.isRequired)]),
  /** Additional classes. */
  className: l.string,
  /** Using the clearable setting will let users remove their selection from a dropdown. */
  clearable: l.bool,
  /** Whether or not the menu should close when the dropdown is blurred. */
  closeOnBlur: l.bool,
  /** Whether or not the dropdown should close when the escape key is pressed. */
  closeOnEscape: l.bool,
  /**
   * Whether or not the menu should close when a value is selected from the dropdown.
   * By default, multiple selection dropdowns will remain open on change, while single
   * selection dropdowns will close on change.
   */
  closeOnChange: l.bool,
  /** A compact dropdown has no minimum width. */
  compact: l.bool,
  /** Whether or not the dropdown should strip diacritics in options and input search */
  deburr: l.bool,
  /** Initial value of open. */
  defaultOpen: l.bool,
  /** Initial value of searchQuery. */
  defaultSearchQuery: l.string,
  /** Currently selected label in multi-select. */
  defaultSelectedLabel: Rt([Co(["multiple"]), l.oneOfType([l.number, l.string])]),
  /** Initial value of upward. */
  defaultUpward: l.bool,
  /** Initial value or value array if multiple. */
  defaultValue: l.oneOfType([l.number, l.string, l.bool, l.arrayOf(l.oneOfType([l.string, l.number, l.bool]))]),
  /** A dropdown menu can open to the left or to the right. */
  direction: l.oneOf(["left", "right"]),
  /** A disabled dropdown menu or item does not allow user interaction. */
  disabled: l.bool,
  /** An errored dropdown can alert a user to a problem. */
  error: l.bool,
  /** A dropdown menu can contain floated content. */
  floating: l.bool,
  /** A dropdown can take the full width of its parent */
  fluid: l.bool,
  /** A dropdown menu can contain a header. */
  header: l.node,
  /** Shorthand for Icon. */
  icon: l.oneOfType([l.node, l.object]),
  /** A dropdown can be formatted to appear inline in other content. */
  inline: l.bool,
  /** A dropdown can be formatted as a Menu item. */
  item: l.bool,
  /** A dropdown can be labeled. */
  labeled: l.bool,
  /** A dropdown can defer rendering its options until it is open. */
  lazyLoad: l.bool,
  /** A dropdown can show that it is currently loading data. */
  loading: l.bool,
  /** The minimum characters for a search to begin showing results. */
  minCharacters: l.number,
  /** A selection dropdown can allow multiple selections. */
  multiple: l.bool,
  /** Message to display when there are no results. */
  noResultsMessage: l.node,
  /**
   * Called when a user adds a new item. Use this to update the options list.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and the new item's value.
   */
  onAddItem: l.func,
  /**
   * Called on blur.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onBlur: l.func,
  /**
   * Called when the user attempts to change the value.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed value.
   */
  onChange: l.func,
  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: l.func,
  /**
   * Called when a close event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClose: l.func,
  /**
   * Called on focus.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onFocus: l.func,
  /**
   * Called when a multi-select label is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All label props.
   */
  onLabelClick: l.func,
  /**
   * Called on mousedown.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onMouseDown: l.func,
  /**
   * Called when an open event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onOpen: l.func,
  /**
   * Called on search input change.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props, includes current value of searchQuery.
   */
  onSearchChange: l.func,
  /** Controls whether or not the dropdown menu is displayed. */
  open: l.bool,
  /** Whether or not the menu should open when the dropdown is focused. */
  openOnFocus: l.bool,
  /** Array of Dropdown.Item props e.g. `{ text: '', value: '' }` */
  options: Rt([Ht(["children"]), l.arrayOf(l.shape(Si.propTypes))]),
  /** Placeholder text. */
  placeholder: l.string,
  /** A dropdown can be formatted so that its menu is pointing. */
  pointing: l.oneOfType([l.bool, l.oneOf(["left", "right", "top", "top left", "top right", "bottom", "bottom left", "bottom right"])]),
  /**
   * Mapped over the active items and returns shorthand for the active item Labels.
   * Only applies to `multiple` Dropdowns.
   *
   * @param {object} item - A currently active dropdown item.
   * @param {number} index - The current index.
   * @param {object} defaultLabelProps - The default props for an active item Label.
   * @returns {*} Shorthand for a Label.
   */
  renderLabel: l.func,
  /** A dropdown can have its menu scroll. */
  scrolling: l.bool,
  /**
   * A selection dropdown can allow a user to search through a large list of choices.
   * Pass a function here to replace the default search.
   */
  search: l.oneOfType([l.bool, l.func]),
  /** A shorthand for a search input. */
  searchInput: l.oneOfType([l.array, l.node, l.object]),
  /** Current value of searchQuery. Creates a controlled component. */
  searchQuery: l.string,
  // TODO 'searchInMenu' or 'search='in menu' or ???  How to handle this markup and functionality?
  /** Define whether the highlighted item should be selected on blur. */
  selectOnBlur: l.bool,
  /**
   * Whether or not to change the value when navigating the menu using arrow keys.
   * Setting to false will require enter or left click to confirm a choice.
   */
  selectOnNavigation: l.bool,
  /** Currently selected label in multi-select. */
  selectedLabel: Rt([Co(["multiple"]), l.oneOfType([l.string, l.number])]),
  /** A dropdown can be used to select between choices in a form. */
  selection: Rt([Ht(["children"]), Co(["options"]), l.bool]),
  /** A simple dropdown can open without Javascript. */
  simple: l.bool,
  /** A dropdown can receive focus. */
  tabIndex: l.oneOfType([l.number, l.string]),
  /** The text displayed in the dropdown, usually for the active item. */
  text: l.string,
  /** Custom element to trigger the menu to become visible. Takes place of 'text'. */
  trigger: Rt([Ht(["selection", "text"]), l.node]),
  /** Current value or value array if multiple. Creates a controlled component. */
  value: l.oneOfType([l.bool, l.string, l.number, l.arrayOf(l.oneOfType([l.bool, l.string, l.number]))]),
  /** Controls whether the dropdown will open upward. */
  upward: l.bool,
  /**
   * A dropdown will go to the last element when ArrowUp is pressed on the first,
   * or go to the first when ArrowDown is pressed on the last( aka infinite selection )
   */
  wrapSelection: l.bool
} : {};
Cn.defaultProps = {
  additionLabel: "Add ",
  additionPosition: "top",
  closeOnBlur: !0,
  closeOnEscape: !0,
  deburr: !1,
  icon: "dropdown",
  minCharacters: 1,
  noResultsMessage: "No results found.",
  openOnFocus: !0,
  renderLabel: ow,
  searchInput: "text",
  selectOnBlur: !0,
  selectOnNavigation: !0,
  wrapSelection: !0
};
Cn.autoControlledProps = ["open", "searchQuery", "selectedLabel", "value", "upward"];
Cn.Divider = Kl;
Cn.Header = Fo;
Cn.Item = Si;
Cn.Menu = _s;
Cn.SearchInput = Ti;
Cn.Text = $o;
function Wr(e) {
  return /* @__PURE__ */ J.createElement(Cn, ue({}, e, {
    selection: !0
  }));
}
Wr.handledProps = ["options"];
Wr.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Array of Dropdown.Item props e.g. `{ text: '', value: '' }` */
  options: l.arrayOf(l.shape(Cn.Item.propTypes)).isRequired
} : {};
Wr.Divider = Cn.Divider;
Wr.Header = Cn.Header;
Wr.Item = Cn.Item;
Wr.Menu = Cn.Menu;
var Sd = /* @__PURE__ */ function(e) {
  Jt(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.ref = /* @__PURE__ */ br(), r.focus = function() {
      return r.ref.current.focus();
    }, r.handleChange = function(c) {
      var d = va(c, "target.value");
      Ae(r.props, "onChange", c, ue({}, r.props, {
        value: d
      }));
    }, r.handleInput = function(c) {
      var d = va(c, "target.value");
      Ae(r.props, "onInput", c, ue({}, r.props, {
        value: d
      }));
    }, r;
  }
  var n = t.prototype;
  return n.render = function() {
    var o = this.props, s = o.rows, u = o.value, c = je(t, this.props), d = Ye(t, this.props);
    return /* @__PURE__ */ J.createElement(sr, {
      innerRef: this.ref
    }, /* @__PURE__ */ J.createElement(d, ue({}, c, {
      onChange: this.handleChange,
      onInput: this.handleInput,
      rows: s,
      value: u
    })));
  }, t;
}(Gn);
Sd.handledProps = ["as", "onChange", "onInput", "rows", "value"];
Sd.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /**
   * Called on change.
   * @param {SyntheticEvent} event - The React SyntheticEvent object
   * @param {object} data - All props and the event value.
   */
  onChange: l.func,
  /**
   * Called on input.
   * @param {SyntheticEvent} event - The React SyntheticEvent object
   * @param {object} data - All props and the event value.
   */
  onInput: l.func,
  /** Indicates row count for a TextArea. */
  rows: l.oneOfType([l.number, l.string]),
  /** The value of the textarea. */
  value: l.oneOfType([l.number, l.string])
} : {};
Sd.defaultProps = {
  as: "textarea",
  rows: 3
};
function xn(e) {
  var t = e.children, n = e.className, r = e.content, o = e.control, s = e.disabled, u = e.error, c = e.inline, d = e.label, p = e.required, h = e.type, m = e.width, v = e.id, y = He(q(s, "disabled"), q(u, "error"), q(c, "inline"), q(p, "required"), Yn(m, "wide"), "field", n), b = je(xn, e), _ = Ye(xn, e), E = va(u, "pointing", "above"), A = lr.create(u, {
    autoGenerateKey: !1,
    defaultProps: {
      prompt: !0,
      pointing: E,
      id: v ? v + "-error-message" : void 0,
      role: "alert",
      "aria-atomic": !0
    }
  }), F = (E === "below" || E === "right") && A, x = (E === "above" || E === "left") && A;
  if (Et(o))
    return Et(d) ? /* @__PURE__ */ J.createElement(_, ue({}, b, {
      className: y,
      id: v
    }), it(t) ? r : t) : /* @__PURE__ */ J.createElement(_, ue({}, b, {
      className: y,
      id: v
    }), F, dh(d, {
      autoGenerateKey: !1
    }), x);
  var I = v && u ? v + "-error-message" : null, O = {
    "aria-describedby": I,
    "aria-invalid": u ? !0 : void 0
  }, S = ue({}, b, {
    content: r,
    children: t,
    disabled: s,
    required: p,
    type: h,
    id: v
  });
  return o === "input" && (h === "checkbox" || h === "radio") ? /* @__PURE__ */ J.createElement(_, {
    className: y
  }, /* @__PURE__ */ J.createElement("label", null, F, /* @__PURE__ */ dp(o, ue({}, O, S)), " ", d, x)) : o === ar || o === Lo ? /* @__PURE__ */ J.createElement(_, {
    className: y
  }, F, /* @__PURE__ */ dp(o, ue({}, O, S, {
    label: d
  })), x) : /* @__PURE__ */ J.createElement(_, {
    className: y
  }, dh(d, {
    defaultProps: {
      htmlFor: v
    },
    autoGenerateKey: !1
  }), F, /* @__PURE__ */ dp(o, ue({}, O, S)), x);
}
xn.handledProps = ["as", "children", "className", "content", "control", "disabled", "error", "id", "inline", "label", "required", "type", "width"];
xn.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: St,
  /**
   * A form control component (i.e. Dropdown) or HTML tagName (i.e. 'input').
   * Extra FormField props are passed to the control component.
   * Mutually exclusive with children.
   */
  control: l.oneOfType([l.elementType, l.oneOf(["button", "input", "select", "textarea"])]),
  /** Individual fields may be disabled. */
  disabled: l.bool,
  /** Individual fields may display an error state along with a message. */
  error: l.oneOfType([l.bool, bt]),
  /** The id of the control */
  id: l.string,
  /** A field can have its label next to instead of above it. */
  inline: l.bool,
  // Heads Up!
  // Do not disallow children with `label` shorthand
  // The `control` might accept a `label` prop and `children`
  /** Mutually exclusive with children. */
  label: l.oneOfType([l.node, l.object]),
  /** A field can show that input is mandatory. */
  required: l.bool,
  /** Passed to the control component (i.e. <input type='password' />) */
  type: Rt([
    Co(["control"])
    // don't strictly validate HTML types
    // a control might be passed that uses a `type` prop with unknown values
    // let the control validate if for us
  ]),
  /** A field can specify its width in grid columns */
  width: l.oneOf(rr)
} : {};
function ws(e) {
  var t = e.control, n = je(ws, e), r = Ye(ws, e);
  return /* @__PURE__ */ J.createElement(r, ue({}, n, {
    control: t
  }));
}
ws.handledProps = ["as", "control"];
ws.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** A FormField control prop. */
  control: xn.propTypes.control
} : {};
ws.defaultProps = {
  as: xn,
  control: dt
};
function Es(e) {
  var t = e.control, n = je(Es, e), r = Ye(Es, e);
  return /* @__PURE__ */ J.createElement(r, ue({}, n, {
    control: t
  }));
}
Es.handledProps = ["as", "control"];
Es.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** A FormField control prop. */
  control: xn.propTypes.control
} : {};
Es.defaultProps = {
  as: xn,
  control: ar
};
function xs(e) {
  var t = e.control, n = je(xs, e), r = Ye(xs, e);
  return /* @__PURE__ */ J.createElement(r, ue({}, n, {
    control: t
  }));
}
xs.handledProps = ["as", "control"];
xs.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** A FormField control prop. */
  control: xn.propTypes.control
} : {};
xs.defaultProps = {
  as: xn,
  control: Cn
};
function Zl(e) {
  var t = e.children, n = e.className, r = e.grouped, o = e.inline, s = e.unstackable, u = e.widths, c = He(q(r, "grouped"), q(o, "inline"), q(s, "unstackable"), Yn(u, null, !0), "fields", n), d = je(Zl, e), p = Ye(Zl, e);
  return /* @__PURE__ */ J.createElement(p, ue({}, d, {
    className: c
  }), t);
}
Zl.handledProps = ["as", "children", "className", "grouped", "inline", "unstackable", "widths"];
Zl.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Fields can show related choices. */
  grouped: Rt([Ht(["inline"]), l.bool]),
  /** Multiple fields may be inline in a row. */
  inline: Rt([Ht(["grouped"]), l.bool]),
  /** A form group can prevent itself from stacking on mobile. */
  unstackable: l.bool,
  /** Fields Groups can specify their width in grid columns or automatically divide fields to be equal width. */
  widths: l.oneOf([].concat(rr, ["equal"]))
} : {};
var Cs = /* @__PURE__ */ function(e) {
  Jt(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.inputRef = /* @__PURE__ */ br(), r.computeIcon = function() {
      var c = r.props, d = c.loading, p = c.icon;
      if (!Et(p)) return p;
      if (d) return "spinner";
    }, r.computeTabIndex = function() {
      var c = r.props, d = c.disabled, p = c.tabIndex;
      if (!Et(p)) return p;
      if (d) return -1;
    }, r.focus = function(c) {
      return r.inputRef.current.focus(c);
    }, r.select = function() {
      return r.inputRef.current.select();
    }, r.handleChange = function(c) {
      var d = va(c, "target.value");
      Ae(r.props, "onChange", c, ue({}, r.props, {
        value: d
      }));
    }, r.handleChildOverrides = function(c, d) {
      return ue({}, d, c.props, {
        ref: function(h) {
          ga(c.ref, h), r.inputRef.current = h;
        }
      });
    }, r.partitionProps = function() {
      var c = r.props, d = c.disabled, p = c.type, h = r.computeTabIndex(), m = je(t, r.props), v = gm(m), y = v[0], b = v[1];
      return [ue({}, y, {
        disabled: d,
        type: p,
        tabIndex: h,
        onChange: r.handleChange,
        ref: r.inputRef
      }), b];
    }, r;
  }
  var n = t.prototype;
  return n.render = function() {
    var o = this, s = this.props, u = s.action, c = s.actionPosition, d = s.children, p = s.className, h = s.disabled, m = s.error, v = s.fluid, y = s.focus, b = s.icon, _ = s.iconPosition, E = s.input, A = s.inverted, F = s.label, x = s.labelPosition, I = s.loading, O = s.size, S = s.transparent, C = s.type, T = He("ui", O, q(h, "disabled"), q(m, "error"), q(v, "fluid"), q(y, "focus"), q(A, "inverted"), q(I, "loading"), q(S, "transparent"), Vn(c, "action") || q(u, "action"), Vn(_, "icon") || q(b || I, "icon"), Vn(x, "labeled") || q(F, "labeled"), "input", p), N = Ye(t, this.props), B = this.partitionProps(), H = B[0], ne = B[1];
    if (!it(d)) {
      var z = wn(nm.toArray(d), function(ve) {
        return ve.type !== "input" ? ve : /* @__PURE__ */ W_(ve, o.handleChildOverrides(ve, H));
      });
      return /* @__PURE__ */ J.createElement(N, ue({}, ne, {
        className: T
      }), z);
    }
    var re = dt.create(u, {
      autoGenerateKey: !1
    }), he = lr.create(F, {
      defaultProps: {
        className: He(
          "label",
          // add 'left|right corner'
          ya(x, "corner") && x
        )
      },
      autoGenerateKey: !1
    });
    return /* @__PURE__ */ J.createElement(N, ue({}, ne, {
      className: T
    }), c === "left" && re, x !== "right" && he, HD(E || C, {
      defaultProps: H,
      autoGenerateKey: !1
    }), Be.create(this.computeIcon(), {
      autoGenerateKey: !1
    }), c !== "left" && re, x === "right" && he);
  }, t;
}(Gn);
Cs.handledProps = ["action", "actionPosition", "as", "children", "className", "disabled", "error", "fluid", "focus", "icon", "iconPosition", "input", "inverted", "label", "labelPosition", "loading", "onChange", "size", "tabIndex", "transparent", "type"];
Cs.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** An Input can be formatted to alert the user to an action they may perform. */
  action: l.oneOfType([l.bool, bt]),
  /** An action can appear along side an Input on the left or right. */
  actionPosition: l.oneOf(["left"]),
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** An Input field can show that it is disabled. */
  disabled: l.bool,
  /** An Input field can show the data contains errors. */
  error: l.bool,
  /** Take on the size of its container. */
  fluid: l.bool,
  /** An Input field can show a user is currently interacting with it. */
  focus: l.bool,
  /** Optional Icon to display inside the Input. */
  icon: l.oneOfType([l.bool, bt]),
  /** An Icon can appear inside an Input on the left or right. */
  iconPosition: l.oneOf(["left"]),
  /** Shorthand for creating the HTML Input. */
  input: bt,
  /** Format to appear on dark backgrounds. */
  inverted: l.bool,
  /** Optional Label to display along side the Input. */
  label: bt,
  /** A Label can appear outside an Input on the left or right. */
  labelPosition: l.oneOf(["left", "right", "left corner", "right corner"]),
  /** An Icon Input field can show that it is currently loading data. */
  loading: l.bool,
  /**
   * Called on change.
   *
   * @param {ChangeEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and a proposed value.
   */
  onChange: l.func,
  /** An Input can vary in size. */
  size: l.oneOf(["mini", "small", "large", "big", "huge", "massive"]),
  /** An Input can receive focus. */
  tabIndex: l.oneOfType([l.number, l.string]),
  /** Transparent Input has no background. */
  transparent: l.bool,
  /** The HTML input type. */
  type: l.string
} : {};
Cs.defaultProps = {
  type: "text"
};
Cs.create = qt(Cs, function(e) {
  return {
    type: e
  };
});
function Os(e) {
  var t = e.control, n = je(Os, e), r = Ye(Os, e);
  return /* @__PURE__ */ J.createElement(r, ue({}, n, {
    control: t
  }));
}
Os.handledProps = ["as", "control"];
Os.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** A FormField control prop. */
  control: xn.propTypes.control
} : {};
Os.defaultProps = {
  as: xn,
  control: Cs
};
function Ss(e) {
  var t = e.control, n = je(Ss, e), r = Ye(Ss, e);
  return /* @__PURE__ */ J.createElement(r, ue({}, n, {
    control: t
  }));
}
Ss.handledProps = ["as", "control"];
Ss.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** A FormField control prop. */
  control: xn.propTypes.control
} : {};
Ss.defaultProps = {
  as: xn,
  control: Lo
};
function Ts(e) {
  var t = e.control, n = e.options, r = je(Ts, e), o = Ye(Ts, e);
  return /* @__PURE__ */ J.createElement(o, ue({}, r, {
    control: t,
    options: n
  }));
}
Ts.handledProps = ["as", "control", "options"];
Ts.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** A FormField control prop. */
  control: xn.propTypes.control,
  /** Array of Dropdown.Item props e.g. `{ text: '', value: '' }` */
  options: l.arrayOf(l.shape(Cn.Item.propTypes)).isRequired
} : {};
Ts.defaultProps = {
  as: xn,
  control: Wr
};
function Ps(e) {
  var t = e.control, n = je(Ps, e), r = Ye(Ps, e);
  return /* @__PURE__ */ J.createElement(r, ue({}, n, {
    control: t
  }));
}
Ps.handledProps = ["as", "control"];
Ps.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** A FormField control prop. */
  control: xn.propTypes.control
} : {};
Ps.defaultProps = {
  as: xn,
  control: Sd
};
var An = /* @__PURE__ */ function(e) {
  Jt(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handleSubmit = function(c) {
      var d = r.props.action;
      typeof d != "string" && Ae(c, "preventDefault");
      for (var p = arguments.length, h = new Array(p > 1 ? p - 1 : 0), m = 1; m < p; m++)
        h[m - 1] = arguments[m];
      Ae.apply(void 0, [r.props, "onSubmit", c, r.props].concat(h));
    }, r;
  }
  var n = t.prototype;
  return n.render = function() {
    var o = this.props, s = o.action, u = o.children, c = o.className, d = o.error, p = o.inverted, h = o.loading, m = o.reply, v = o.size, y = o.success, b = o.unstackable, _ = o.warning, E = o.widths, A = He("ui", v, q(d, "error"), q(p, "inverted"), q(h, "loading"), q(m, "reply"), q(y, "success"), q(b, "unstackable"), q(_, "warning"), Yn(E, null, !0), "form", c), F = je(t, this.props), x = Ye(t, this.props);
    return /* @__PURE__ */ J.createElement(x, ue({}, F, {
      action: s,
      className: A,
      onSubmit: this.handleSubmit
    }), u);
  }, t;
}(Gn);
An.handledProps = ["action", "as", "children", "className", "error", "inverted", "loading", "onSubmit", "reply", "size", "success", "unstackable", "warning", "widths"];
An.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** The HTML form action */
  action: l.string,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Automatically show any error Message children. */
  error: l.bool,
  /** A form can have its color inverted for contrast. */
  inverted: l.bool,
  /** Automatically show a loading indicator. */
  loading: l.bool,
  /** The HTML form submit handler. */
  onSubmit: l.func,
  /** A comment can contain a form to reply to a comment. This may have arbitrary content. */
  reply: l.bool,
  /** A form can vary in size. */
  size: l.oneOf(Jr(cr, "medium")),
  /** Automatically show any success Message children. */
  success: l.bool,
  /** A form can prevent itself from stacking on mobile. */
  unstackable: l.bool,
  /** Automatically show any warning Message children. */
  warning: l.bool,
  /** Forms can automatically divide fields to be equal width. */
  widths: l.oneOf(["equal"])
} : {};
An.defaultProps = {
  as: "form"
};
An.Field = xn;
An.Button = ws;
An.Checkbox = Es;
An.Dropdown = xs;
An.Group = Zl;
An.Input = Os;
An.Radio = Ss;
An.Select = Ts;
An.TextArea = Ps;
function Ka(e) {
  var t = e.children, n = e.className, r = e.computer, o = e.color, s = e.floated, u = e.largeScreen, c = e.mobile, d = e.only, p = e.stretched, h = e.tablet, m = e.textAlign, v = e.verticalAlign, y = e.widescreen, b = e.width, _ = He(o, q(p, "stretched"), Yu(d, "only"), Li(m), Vn(s, "floated"), Zo(v), Yn(r, "wide computer"), Yn(u, "wide large screen"), Yn(c, "wide mobile"), Yn(h, "wide tablet"), Yn(y, "wide widescreen"), Yn(b, "wide"), "column", n), E = je(Ka, e), A = Ye(Ka, e);
  return /* @__PURE__ */ J.createElement(A, ue({}, E, {
    className: _
  }), t);
}
Ka.handledProps = ["as", "children", "className", "color", "computer", "floated", "largeScreen", "mobile", "only", "stretched", "tablet", "textAlign", "verticalAlign", "widescreen", "width"];
Ka.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** A grid column can be colored. */
  color: l.oneOf(ra),
  /** A column can specify a width for a computer. */
  computer: Rt([Ht(["width"]), l.oneOf(rr)]),
  /** A column can sit flush against the left or right edge of a row. */
  floated: l.oneOf(gc),
  /** A column can specify a width for a large screen device. */
  largeScreen: Rt([Ht(["width"]), l.oneOf(rr)]),
  /** A column can specify a width for a mobile device. */
  mobile: Rt([Ht(["width"]), l.oneOf(rr)]),
  /** A column can appear only for a specific device, or screen sizes. */
  only: qu(F1),
  /** A column can stretch its contents to take up the entire grid or row height. */
  stretched: l.bool,
  /** A column can specify a width for a tablet device. */
  tablet: Rt([Ht(["width"]), l.oneOf(rr)]),
  /** A column can specify its text alignment. */
  textAlign: l.oneOf(Fi),
  /** A column can specify its vertical alignment to have all its columns vertically centered. */
  verticalAlign: l.oneOf($i),
  /** A column can specify a width for a wide screen device. */
  widescreen: Rt([Ht(["width"]), l.oneOf(rr)]),
  /** Represents width of column. */
  width: Rt([Ht(["computer", "largeScreen", "mobile", "tablet", "widescreen"]), l.oneOf(rr)])
} : {};
Ka.create = qt(Ka, function(e) {
  return {
    children: e
  };
});
function Xl(e) {
  var t = e.centered, n = e.children, r = e.className, o = e.color, s = e.columns, u = e.divided, c = e.only, d = e.reversed, p = e.stretched, h = e.textAlign, m = e.verticalAlign, v = He(o, q(t, "centered"), q(u, "divided"), q(p, "stretched"), Yu(c, "only"), Yu(d, "reversed"), Li(h), Zo(m), Yn(s, "column", !0), "row", r), y = je(Xl, e), b = Ye(Xl, e);
  return /* @__PURE__ */ J.createElement(b, ue({}, y, {
    className: v
  }), n);
}
Xl.handledProps = ["as", "centered", "children", "className", "color", "columns", "divided", "only", "reversed", "stretched", "textAlign", "verticalAlign"];
Xl.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** A row can have its columns centered. */
  centered: l.bool,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** A grid row can be colored. */
  color: l.oneOf(ra),
  /** Represents column count per line in Row. */
  columns: l.oneOf([].concat(rr, ["equal"])),
  /** A row can have dividers between its columns. */
  divided: l.bool,
  /** A row can appear only for a specific device, or screen sizes. */
  only: qu(F1),
  /** A row can specify that its columns should reverse order at different device sizes. */
  reversed: qu(["computer", "computer vertically", "mobile", "mobile vertically", "tablet", "tablet vertically"]),
  /** A row can stretch its contents to take up the entire column height. */
  stretched: l.bool,
  /** A row can specify its text alignment. */
  textAlign: l.oneOf(Fi),
  /** A row can specify its vertical alignment to have all its columns vertically centered. */
  verticalAlign: l.oneOf($i)
} : {};
function Pi(e) {
  var t = e.celled, n = e.centered, r = e.children, o = e.className, s = e.columns, u = e.container, c = e.divided, d = e.doubling, p = e.inverted, h = e.padded, m = e.relaxed, v = e.reversed, y = e.stackable, b = e.stretched, _ = e.textAlign, E = e.verticalAlign, A = He("ui", q(n, "centered"), q(u, "container"), q(d, "doubling"), q(p, "inverted"), q(y, "stackable"), q(b, "stretched"), nn(t, "celled"), nn(c, "divided"), nn(h, "padded"), nn(m, "relaxed"), Yu(v, "reversed"), Li(_), Zo(E), Yn(s, "column", !0), "grid", o), F = je(Pi, e), x = Ye(Pi, e);
  return /* @__PURE__ */ J.createElement(x, ue({}, F, {
    className: A
  }), r);
}
Pi.handledProps = ["as", "celled", "centered", "children", "className", "columns", "container", "divided", "doubling", "inverted", "padded", "relaxed", "reversed", "stackable", "stretched", "textAlign", "verticalAlign"];
Pi.Column = Ka;
Pi.Row = Xl;
Pi.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** A grid can have rows divided into cells. */
  celled: l.oneOfType([l.bool, l.oneOf(["internally"])]),
  /** A grid can have its columns centered. */
  centered: l.bool,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Represents column count per row in Grid. */
  columns: l.oneOf([].concat(rr, ["equal"])),
  /** A grid can be combined with a container to use the available layout and alignment. */
  container: l.bool,
  /** A grid can have dividers between its columns. */
  divided: l.oneOfType([l.bool, l.oneOf(["vertically"])]),
  /** A grid can double its column width on tablet and mobile sizes. */
  doubling: l.bool,
  /** A grid's colors can be inverted. */
  inverted: l.bool,
  /** A grid can preserve its vertical and horizontal gutters on first and last columns. */
  padded: l.oneOfType([l.bool, l.oneOf(["horizontally", "vertically"])]),
  /** A grid can increase its gutters to allow for more negative space. */
  relaxed: l.oneOfType([l.bool, l.oneOf(["very"])]),
  /** A grid can specify that its columns should reverse order at different device sizes. */
  reversed: qu(["computer", "computer vertically", "mobile", "mobile vertically", "tablet", "tablet vertically"]),
  /** A grid can have its columns stack on-top of each other after reaching mobile breakpoints. */
  stackable: l.bool,
  /** A grid can stretch its contents to take up the entire grid height. */
  stretched: l.bool,
  /** A grid can specify its text alignment. */
  textAlign: l.oneOf(Fi),
  /** A grid can specify its vertical alignment to have all its columns vertically centered. */
  verticalAlign: l.oneOf($i)
} : {};
function ki(e) {
  var t = e.children, n = e.className, r = He(n), o = je(ki, e), s = Ye(ki, e);
  return /* @__PURE__ */ J.createElement(s, ue({}, o, {
    className: r
  }), t);
}
ki.handledProps = ["as", "children", "className"];
ki.defaultProps = {
  as: "tbody"
};
ki.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string
} : {};
function xa(e) {
  var t = e.active, n = e.children, r = e.className, o = e.collapsing, s = e.content, u = e.disabled, c = e.error, d = e.icon, p = e.negative, h = e.positive, m = e.selectable, v = e.singleLine, y = e.textAlign, b = e.verticalAlign, _ = e.warning, E = e.width, A = He(q(t, "active"), q(o, "collapsing"), q(u, "disabled"), q(c, "error"), q(p, "negative"), q(h, "positive"), q(m, "selectable"), q(v, "single line"), q(_, "warning"), Li(y), Zo(b), Yn(E, "wide"), r), F = je(xa, e), x = Ye(xa, e);
  return it(n) ? /* @__PURE__ */ J.createElement(x, ue({}, F, {
    className: A
  }), Be.create(d), s) : /* @__PURE__ */ J.createElement(x, ue({}, F, {
    className: A
  }), n);
}
xa.handledProps = ["active", "as", "children", "className", "collapsing", "content", "disabled", "error", "icon", "negative", "positive", "selectable", "singleLine", "textAlign", "verticalAlign", "warning", "width"];
xa.defaultProps = {
  as: "td"
};
xa.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** A cell can be active or selected by a user. */
  active: l.bool,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** A cell can be collapsing so that it only uses as much space as required. */
  collapsing: l.bool,
  /** Shorthand for primary content. */
  content: St,
  /** A cell can be disabled. */
  disabled: l.bool,
  /** A cell may call attention to an error or a negative value. */
  error: l.bool,
  /** Add an Icon by name, props object, or pass an <Icon /> */
  icon: bt,
  /** A cell may let a user know whether a value is bad. */
  negative: l.bool,
  /** A cell may let a user know whether a value is good. */
  positive: l.bool,
  /** A cell can be selectable. */
  selectable: l.bool,
  /** A cell can specify that its contents should remain on a single line and not wrap. */
  singleLine: l.bool,
  /** A table cell can adjust its text alignment. */
  textAlign: l.oneOf(Jr(Fi, "justified")),
  /** A table cell can adjust its text alignment. */
  verticalAlign: l.oneOf($i),
  /** A cell may warn a user. */
  warning: l.bool,
  /** A table can specify the width of individual columns independently. */
  width: l.oneOf(rr)
} : {};
xa.create = qt(xa, function(e) {
  return {
    content: e
  };
});
function Bo(e) {
  var t = e.children, n = e.className, r = e.content, o = e.fullWidth, s = He(q(o, "full-width"), n), u = je(Bo, e), c = Ye(Bo, e);
  return /* @__PURE__ */ J.createElement(c, ue({}, u, {
    className: s
  }), it(t) ? r : t);
}
Bo.handledProps = ["as", "children", "className", "content", "fullWidth"];
Bo.defaultProps = {
  as: "thead"
};
Bo.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: St,
  /** A definition table can have a full width header or footer, filling in the gap left by the first column. */
  fullWidth: l.bool
} : {};
function js(e) {
  var t = e.as, n = je(js, e);
  return /* @__PURE__ */ J.createElement(Bo, ue({}, n, {
    as: t
  }));
}
js.handledProps = ["as"];
js.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType
} : {};
js.defaultProps = {
  as: "tfoot"
};
function vc(e) {
  var t = e.as, n = e.className, r = e.sorted, o = He(Vn(r, "sorted"), n), s = je(vc, e);
  return /* @__PURE__ */ J.createElement(xa, ue({}, s, {
    as: t,
    className: o
  }));
}
vc.handledProps = ["as", "className", "sorted"];
vc.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Additional classes. */
  className: l.string,
  /** A header cell can be sorted in ascending or descending order. */
  sorted: l.oneOf(["ascending", "descending"])
} : {};
vc.defaultProps = {
  as: "th"
};
function Dr(e) {
  var t = e.active, n = e.cellAs, r = e.cells, o = e.children, s = e.className, u = e.disabled, c = e.error, d = e.negative, p = e.positive, h = e.textAlign, m = e.verticalAlign, v = e.warning, y = He(q(t, "active"), q(u, "disabled"), q(c, "error"), q(d, "negative"), q(p, "positive"), q(v, "warning"), Li(h), Zo(m), s), b = je(Dr, e), _ = Ye(Dr, e);
  return it(o) ? /* @__PURE__ */ J.createElement(_, ue({}, b, {
    className: y
  }), wn(r, function(E) {
    return xa.create(E, {
      defaultProps: {
        as: n
      }
    });
  })) : /* @__PURE__ */ J.createElement(_, ue({}, b, {
    className: y
  }), o);
}
Dr.handledProps = ["active", "as", "cellAs", "cells", "children", "className", "disabled", "error", "negative", "positive", "textAlign", "verticalAlign", "warning"];
Dr.defaultProps = {
  as: "tr",
  cellAs: "td"
};
Dr.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** A row can be active or selected by a user. */
  active: l.bool,
  /** An element type to render as (string or function). */
  cellAs: l.elementType,
  /** Shorthand array of props for TableCell. */
  cells: mc,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** A row can be disabled. */
  disabled: l.bool,
  /** A row may call attention to an error or a negative value. */
  error: l.bool,
  /** A row may let a user know whether a value is bad. */
  negative: l.bool,
  /** A row may let a user know whether a value is good. */
  positive: l.bool,
  /** A table row can adjust its text alignment. */
  textAlign: l.oneOf(Jr(Fi, "justified")),
  /** A table row can adjust its vertical alignment. */
  verticalAlign: l.oneOf($i),
  /** A row may warn a user. */
  warning: l.bool
} : {};
Dr.create = qt(Dr, function(e) {
  return {
    cells: e
  };
});
function yt(e) {
  var t = e.attached, n = e.basic, r = e.celled, o = e.children, s = e.className, u = e.collapsing, c = e.color, d = e.columns, p = e.compact, h = e.definition, m = e.fixed, v = e.footerRow, y = e.headerRow, b = e.headerRows, _ = e.inverted, E = e.padded, A = e.renderBodyRow, F = e.selectable, x = e.singleLine, I = e.size, O = e.sortable, S = e.stackable, C = e.striped, T = e.structured, N = e.tableData, B = e.textAlign, H = e.unstackable, ne = e.verticalAlign, z = He("ui", c, I, q(r, "celled"), q(u, "collapsing"), q(h, "definition"), q(m, "fixed"), q(_, "inverted"), q(F, "selectable"), q(x, "single line"), q(O, "sortable"), q(S, "stackable"), q(C, "striped"), q(T, "structured"), q(H, "unstackable"), nn(t, "attached"), nn(n, "basic"), nn(p, "compact"), nn(E, "padded"), Li(B), Zo(ne), Yn(d, "column"), "table", s), re = je(yt, e), he = Ye(yt, e);
  if (!it(o))
    return /* @__PURE__ */ J.createElement(he, ue({}, re, {
      className: z
    }), o);
  var ve = y || b, Te = {
    defaultProps: {
      cellAs: "th"
    }
  }, de = ve && /* @__PURE__ */ J.createElement(Bo, null, Dr.create(y, Te), wn(b, function(ye) {
    return Dr.create(ye, Te);
  }));
  return /* @__PURE__ */ J.createElement(he, ue({}, re, {
    className: z
  }), de, /* @__PURE__ */ J.createElement(ki, null, A && wn(N, function(ye, ee) {
    return Dr.create(A(ye, ee));
  })), v && /* @__PURE__ */ J.createElement(js, null, Dr.create(v)));
}
yt.handledProps = ["as", "attached", "basic", "celled", "children", "className", "collapsing", "color", "columns", "compact", "definition", "fixed", "footerRow", "headerRow", "headerRows", "inverted", "padded", "renderBodyRow", "selectable", "singleLine", "size", "sortable", "stackable", "striped", "structured", "tableData", "textAlign", "unstackable", "verticalAlign"];
yt.defaultProps = {
  as: "table"
};
yt.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Attach table to other content */
  attached: l.oneOfType([l.bool, l.oneOf(["top", "bottom"])]),
  /** A table can reduce its complexity to increase readability. */
  basic: l.oneOfType([l.oneOf(["very"]), l.bool]),
  /** A table may be divided into individual cells. */
  celled: l.bool,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** A table can be collapsing, taking up only as much space as its rows. */
  collapsing: l.bool,
  /** A table can be given a color to distinguish it from other tables. */
  color: l.oneOf(ra),
  /** A table can specify its column count to divide its content evenly. */
  columns: l.oneOf(rr),
  /** A table may sometimes need to be more compact to make more rows visible at a time. */
  compact: l.oneOfType([l.bool, l.oneOf(["very"])]),
  /** A table may be formatted to emphasize a first column that defines a rows content. */
  definition: l.bool,
  /**
   * A table can use fixed a special faster form of table rendering that does not resize table cells based on content
   */
  fixed: l.bool,
  /** Shorthand for a TableRow to be placed within Table.Footer. */
  footerRow: bt,
  /** Shorthand for a TableRow to be placed within Table.Header. */
  headerRow: Rt([Ht(["headerRows"]), bt]),
  /** Shorthand for multiple TableRows to be placed within Table.Header. */
  headerRows: Rt([Ht(["headerRow"]), mc]),
  /** A table's colors can be inverted. */
  inverted: l.bool,
  /** A table may sometimes need to be more padded for legibility. */
  padded: l.oneOfType([l.bool, l.oneOf(["very"])]),
  /**
   * Mapped over `tableData` and should return shorthand for each Table.Row to be placed within Table.Body.
   *
   * @param {*} data - An element in the `tableData` array.
   * @param {number} index - The index of the current element in `tableData`.
   * @returns {*} Shorthand for a Table.Row.
   */
  renderBodyRow: Rt([Ht(["children"]), Co(["tableData"]), l.func]),
  /** A table can have its rows appear selectable. */
  selectable: l.bool,
  /** A table can specify that its cell contents should remain on a single line and not wrap. */
  singleLine: l.bool,
  /** A table can also be small or large. */
  size: l.oneOf(Jr(cr, "mini", "tiny", "medium", "big", "huge", "massive")),
  /** A table may allow a user to sort contents by clicking on a table header. */
  sortable: l.bool,
  /** A table can specify how it stacks table content responsively. */
  stackable: l.bool,
  /** A table can stripe alternate rows of content with a darker color to increase contrast. */
  striped: l.bool,
  /** A table can be formatted to display complex structured data. */
  structured: l.bool,
  /** Data to be passed to the renderBodyRow function. */
  tableData: Rt([Ht(["children"]), Co(["renderBodyRow"]), l.array]),
  /** A table can adjust its text alignment. */
  textAlign: l.oneOf(Jr(Fi, "justified")),
  /** A table can specify how it stacks table content responsively. */
  unstackable: l.bool,
  /** A table can adjust its text alignment. */
  verticalAlign: l.oneOf($i)
} : {};
yt.Body = ki;
yt.Cell = xa;
yt.Footer = js;
yt.Header = Bo;
yt.HeaderCell = vc;
yt.Row = Dr;
function Wo(e) {
  var t = e.children, n = e.className, r = e.content, o = He("sub header", n), s = je(Wo, e), u = Ye(Wo, e);
  return /* @__PURE__ */ J.createElement(u, ue({}, s, {
    className: o
  }), it(t) ? r : t);
}
Wo.handledProps = ["as", "children", "className", "content"];
Wo.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: St
} : {};
Wo.create = qt(Wo, function(e) {
  return {
    content: e
  };
});
function ks(e) {
  var t = e.children, n = e.className, r = e.content, o = He("content", n), s = je(ks, e), u = Ye(ks, e);
  return /* @__PURE__ */ J.createElement(u, ue({}, s, {
    className: o
  }), it(t) ? r : t);
}
ks.handledProps = ["as", "children", "className", "content"];
ks.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: St
} : {};
function qn(e) {
  var t = e.attached, n = e.block, r = e.children, o = e.className, s = e.color, u = e.content, c = e.disabled, d = e.dividing, p = e.floated, h = e.icon, m = e.image, v = e.inverted, y = e.size, b = e.sub, _ = e.subheader, E = e.textAlign, A = He("ui", s, y, q(n, "block"), q(c, "disabled"), q(d, "dividing"), Vn(p, "floated"), q(h === !0, "icon"), q(m === !0, "image"), q(v, "inverted"), q(b, "sub"), nn(t, "attached"), Li(E), "header", o), F = je(qn, e), x = Ye(qn, e);
  if (!it(r))
    return /* @__PURE__ */ J.createElement(x, ue({}, F, {
      className: A
    }), r);
  var I = Be.create(h, {
    autoGenerateKey: !1
  }), O = _r.create(m, {
    autoGenerateKey: !1
  }), S = Wo.create(_, {
    autoGenerateKey: !1
  });
  return I || O ? /* @__PURE__ */ J.createElement(x, ue({}, F, {
    className: A
  }), I || O, (u || S) && /* @__PURE__ */ J.createElement(ks, null, u, S)) : /* @__PURE__ */ J.createElement(x, ue({}, F, {
    className: A
  }), u, S);
}
qn.handledProps = ["as", "attached", "block", "children", "className", "color", "content", "disabled", "dividing", "floated", "icon", "image", "inverted", "size", "sub", "subheader", "textAlign"];
qn.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Attach header  to other content, like a segment. */
  attached: l.oneOfType([l.bool, l.oneOf(["top", "bottom"])]),
  /** Format header to appear inside a content block. */
  block: l.bool,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Color of the header. */
  color: l.oneOf(ra),
  /** Shorthand for primary content. */
  content: St,
  /** Show that the header is inactive. */
  disabled: l.bool,
  /** Divide header from the content below it. */
  dividing: l.bool,
  /** Header can sit to the left or right of other content. */
  floated: l.oneOf(gc),
  /** Add an icon by icon name or pass an Icon. */
  icon: Rt([Ht(["image"]), l.oneOfType([l.bool, bt])]),
  /** Add an image by img src or pass an Image. */
  image: Rt([Ht(["icon"]), l.oneOfType([l.bool, bt])]),
  /** Inverts the color of the header for dark backgrounds. */
  inverted: l.bool,
  /** Content headings are sized with em and are based on the font-size of their container. */
  size: l.oneOf(Jr(cr, "big", "massive", "mini")),
  /** Headers may be formatted to label smaller or de-emphasized content. */
  sub: l.bool,
  /** Shorthand for Header.Subheader. */
  subheader: bt,
  /** Align header content. */
  textAlign: l.oneOf(Fi)
} : {};
qn.Content = ks;
qn.Subheader = Wo;
function Ql(e) {
  var t = e.active, n = e.children, r = e.className, o = e.content, s = e.disabled, u = e.indeterminate, c = e.inline, d = e.inverted, p = e.size, h = He("ui", p, q(t, "active"), q(s, "disabled"), q(u, "indeterminate"), q(d, "inverted"), q(n || o, "text"), nn(c, "inline"), "loader", r), m = je(Ql, e), v = Ye(Ql, e);
  return /* @__PURE__ */ J.createElement(v, ue({}, m, {
    className: h
  }), it(n) ? o : n);
}
Ql.handledProps = ["active", "as", "children", "className", "content", "disabled", "indeterminate", "inline", "inverted", "size"];
Ql.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** A loader can be active or visible. */
  active: l.bool,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: St,
  /** A loader can be disabled or hidden. */
  disabled: l.bool,
  /** A loader can show it's unsure of how long a task will take. */
  indeterminate: l.bool,
  /** Loaders can appear inline with content. */
  inline: l.oneOfType([l.bool, l.oneOf(["centered"])]),
  /** Loaders can have their colors inverted. */
  inverted: l.bool,
  /** Loaders can have different sizes. */
  size: l.oneOf(cr)
} : {};
function RF(e) {
  return Br(e) && e.nodeType === 1 && !xd(e);
}
var MF = L.createContext();
L.createContext();
var DF = function(t) {
  return Array.isArray(t) ? t[0] : t;
}, LF = function(t) {
  if (typeof t == "function") {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      r[o - 1] = arguments[o];
    return t.apply(void 0, r);
  }
}, FF = function(t, n) {
  if (typeof t == "function")
    return LF(t, n);
  t != null && (t.current = n);
}, o0 = function(t) {
  return t.reduce(function(n, r) {
    var o = r[0], s = r[1];
    return n[o] = s, n;
  }, {});
}, i0 = typeof window < "u" && window.document && window.document.createElement ? L.useLayoutEffect : L.useEffect, or = "top", Ur = "bottom", jr = "right", ir = "left", ym = "auto", yc = [or, Ur, jr, ir], Ns = "start", Jl = "end", $F = "clippingParents", iw = "viewport", ml = "popper", BF = "reference", s0 = /* @__PURE__ */ yc.reduce(function(e, t) {
  return e.concat([t + "-" + Ns, t + "-" + Jl]);
}, []), sw = /* @__PURE__ */ [].concat(yc, [ym]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Ns, t + "-" + Jl]);
}, []), WF = "beforeRead", UF = "read", jF = "afterRead", zF = "beforeMain", HF = "main", YF = "afterMain", qF = "beforeWrite", VF = "write", GF = "afterWrite", KF = [WF, UF, jF, zF, HF, YF, qF, VF, GF];
function Ca(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function wr(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Ni(e) {
  var t = wr(e).Element;
  return e instanceof t || e instanceof Element;
}
function Fr(e) {
  var t = wr(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function bm(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = wr(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function ZF(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, s = t.elements[n];
    !Fr(s) || !Ca(s) || (Object.assign(s.style, r), Object.keys(o).forEach(function(u) {
      var c = o[u];
      c === !1 ? s.removeAttribute(u) : s.setAttribute(u, c === !0 ? "" : c);
    }));
  });
}
function XF(e) {
  var t = e.state, n = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var o = t.elements[r], s = t.attributes[r] || {}, u = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), c = u.reduce(function(d, p) {
        return d[p] = "", d;
      }, {});
      !Fr(o) || !Ca(o) || (Object.assign(o.style, c), Object.keys(s).forEach(function(d) {
        o.removeAttribute(d);
      }));
    });
  };
}
const QF = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: ZF,
  effect: XF,
  requires: ["computeStyles"]
};
function wa(e) {
  return e.split("-")[0];
}
var bi = Math.max, Ku = Math.min, Is = Math.round;
function gh() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function lw() {
  return !/^((?!chrome|android).)*safari/i.test(gh());
}
function As(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, s = 1;
  t && Fr(e) && (o = e.offsetWidth > 0 && Is(r.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && Is(r.height) / e.offsetHeight || 1);
  var u = Ni(e) ? wr(e) : window, c = u.visualViewport, d = !lw() && n, p = (r.left + (d && c ? c.offsetLeft : 0)) / o, h = (r.top + (d && c ? c.offsetTop : 0)) / s, m = r.width / o, v = r.height / s;
  return {
    width: m,
    height: v,
    top: h,
    right: p + m,
    bottom: h + v,
    left: p,
    x: p,
    y: h
  };
}
function _m(e) {
  var t = As(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function cw(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && bm(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Za(e) {
  return wr(e).getComputedStyle(e);
}
function JF(e) {
  return ["table", "td", "th"].indexOf(Ca(e)) >= 0;
}
function Xo(e) {
  return ((Ni(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Td(e) {
  return Ca(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (bm(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Xo(e)
  );
}
function l0(e) {
  return !Fr(e) || // https://github.com/popperjs/popper-core/issues/837
  Za(e).position === "fixed" ? null : e.offsetParent;
}
function e$(e) {
  var t = /firefox/i.test(gh()), n = /Trident/i.test(gh());
  if (n && Fr(e)) {
    var r = Za(e);
    if (r.position === "fixed")
      return null;
  }
  var o = Td(e);
  for (bm(o) && (o = o.host); Fr(o) && ["html", "body"].indexOf(Ca(o)) < 0; ) {
    var s = Za(o);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function bc(e) {
  for (var t = wr(e), n = l0(e); n && JF(n) && Za(n).position === "static"; )
    n = l0(n);
  return n && (Ca(n) === "html" || Ca(n) === "body" && Za(n).position === "static") ? t : n || e$(e) || t;
}
function wm(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function kl(e, t, n) {
  return bi(e, Ku(t, n));
}
function t$(e, t, n) {
  var r = kl(e, t, n);
  return r > n ? n : r;
}
function uw() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function dw(e) {
  return Object.assign({}, uw(), e);
}
function fw(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var n$ = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, dw(typeof t != "number" ? t : fw(t, yc));
};
function r$(e) {
  var t, n = e.state, r = e.name, o = e.options, s = n.elements.arrow, u = n.modifiersData.popperOffsets, c = wa(n.placement), d = wm(c), p = [ir, jr].indexOf(c) >= 0, h = p ? "height" : "width";
  if (!(!s || !u)) {
    var m = n$(o.padding, n), v = _m(s), y = d === "y" ? or : ir, b = d === "y" ? Ur : jr, _ = n.rects.reference[h] + n.rects.reference[d] - u[d] - n.rects.popper[h], E = u[d] - n.rects.reference[d], A = bc(s), F = A ? d === "y" ? A.clientHeight || 0 : A.clientWidth || 0 : 0, x = _ / 2 - E / 2, I = m[y], O = F - v[h] - m[b], S = F / 2 - v[h] / 2 + x, C = kl(I, S, O), T = d;
    n.modifiersData[r] = (t = {}, t[T] = C, t.centerOffset = C - S, t);
  }
}
function a$(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || cw(t.elements.popper, o) && (t.elements.arrow = o));
}
const o$ = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: r$,
  effect: a$,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Rs(e) {
  return e.split("-")[1];
}
var i$ = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function s$(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return {
    x: Is(n * o) / o || 0,
    y: Is(r * o) / o || 0
  };
}
function c0(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, s = e.variation, u = e.offsets, c = e.position, d = e.gpuAcceleration, p = e.adaptive, h = e.roundOffsets, m = e.isFixed, v = u.x, y = v === void 0 ? 0 : v, b = u.y, _ = b === void 0 ? 0 : b, E = typeof h == "function" ? h({
    x: y,
    y: _
  }) : {
    x: y,
    y: _
  };
  y = E.x, _ = E.y;
  var A = u.hasOwnProperty("x"), F = u.hasOwnProperty("y"), x = ir, I = or, O = window;
  if (p) {
    var S = bc(n), C = "clientHeight", T = "clientWidth";
    if (S === wr(n) && (S = Xo(n), Za(S).position !== "static" && c === "absolute" && (C = "scrollHeight", T = "scrollWidth")), S = S, o === or || (o === ir || o === jr) && s === Jl) {
      I = Ur;
      var N = m && S === O && O.visualViewport ? O.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        S[C]
      );
      _ -= N - r.height, _ *= d ? 1 : -1;
    }
    if (o === ir || (o === or || o === Ur) && s === Jl) {
      x = jr;
      var B = m && S === O && O.visualViewport ? O.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        S[T]
      );
      y -= B - r.width, y *= d ? 1 : -1;
    }
  }
  var H = Object.assign({
    position: c
  }, p && i$), ne = h === !0 ? s$({
    x: y,
    y: _
  }, wr(n)) : {
    x: y,
    y: _
  };
  if (y = ne.x, _ = ne.y, d) {
    var z;
    return Object.assign({}, H, (z = {}, z[I] = F ? "0" : "", z[x] = A ? "0" : "", z.transform = (O.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + _ + "px)" : "translate3d(" + y + "px, " + _ + "px, 0)", z));
  }
  return Object.assign({}, H, (t = {}, t[I] = F ? _ + "px" : "", t[x] = A ? y + "px" : "", t.transform = "", t));
}
function l$(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, s = n.adaptive, u = s === void 0 ? !0 : s, c = n.roundOffsets, d = c === void 0 ? !0 : c, p = {
    placement: wa(t.placement),
    variation: Rs(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, c0(Object.assign({}, p, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: u,
    roundOffsets: d
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, c0(Object.assign({}, p, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: d
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const c$ = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: l$,
  data: {}
};
var _u = {
  passive: !0
};
function u$(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, s = o === void 0 ? !0 : o, u = r.resize, c = u === void 0 ? !0 : u, d = wr(t.elements.popper), p = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && p.forEach(function(h) {
    h.addEventListener("scroll", n.update, _u);
  }), c && d.addEventListener("resize", n.update, _u), function() {
    s && p.forEach(function(h) {
      h.removeEventListener("scroll", n.update, _u);
    }), c && d.removeEventListener("resize", n.update, _u);
  };
}
const d$ = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: u$,
  data: {}
};
var f$ = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Nu(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return f$[t];
  });
}
var p$ = {
  start: "end",
  end: "start"
};
function u0(e) {
  return e.replace(/start|end/g, function(t) {
    return p$[t];
  });
}
function Em(e) {
  var t = wr(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function xm(e) {
  return As(Xo(e)).left + Em(e).scrollLeft;
}
function h$(e, t) {
  var n = wr(e), r = Xo(e), o = n.visualViewport, s = r.clientWidth, u = r.clientHeight, c = 0, d = 0;
  if (o) {
    s = o.width, u = o.height;
    var p = lw();
    (p || !p && t === "fixed") && (c = o.offsetLeft, d = o.offsetTop);
  }
  return {
    width: s,
    height: u,
    x: c + xm(e),
    y: d
  };
}
function m$(e) {
  var t, n = Xo(e), r = Em(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, s = bi(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), u = bi(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), c = -r.scrollLeft + xm(e), d = -r.scrollTop;
  return Za(o || n).direction === "rtl" && (c += bi(n.clientWidth, o ? o.clientWidth : 0) - s), {
    width: s,
    height: u,
    x: c,
    y: d
  };
}
function Cm(e) {
  var t = Za(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function pw(e) {
  return ["html", "body", "#document"].indexOf(Ca(e)) >= 0 ? e.ownerDocument.body : Fr(e) && Cm(e) ? e : pw(Td(e));
}
function Nl(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = pw(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), s = wr(r), u = o ? [s].concat(s.visualViewport || [], Cm(r) ? r : []) : r, c = t.concat(u);
  return o ? c : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    c.concat(Nl(Td(u)))
  );
}
function vh(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function g$(e, t) {
  var n = As(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function d0(e, t, n) {
  return t === iw ? vh(h$(e, n)) : Ni(t) ? g$(t, n) : vh(m$(Xo(e)));
}
function v$(e) {
  var t = Nl(Td(e)), n = ["absolute", "fixed"].indexOf(Za(e).position) >= 0, r = n && Fr(e) ? bc(e) : e;
  return Ni(r) ? t.filter(function(o) {
    return Ni(o) && cw(o, r) && Ca(o) !== "body";
  }) : [];
}
function y$(e, t, n, r) {
  var o = t === "clippingParents" ? v$(e) : [].concat(t), s = [].concat(o, [n]), u = s[0], c = s.reduce(function(d, p) {
    var h = d0(e, p, r);
    return d.top = bi(h.top, d.top), d.right = Ku(h.right, d.right), d.bottom = Ku(h.bottom, d.bottom), d.left = bi(h.left, d.left), d;
  }, d0(e, u, r));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function hw(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? wa(r) : null, s = r ? Rs(r) : null, u = t.x + t.width / 2 - n.width / 2, c = t.y + t.height / 2 - n.height / 2, d;
  switch (o) {
    case or:
      d = {
        x: u,
        y: t.y - n.height
      };
      break;
    case Ur:
      d = {
        x: u,
        y: t.y + t.height
      };
      break;
    case jr:
      d = {
        x: t.x + t.width,
        y: c
      };
      break;
    case ir:
      d = {
        x: t.x - n.width,
        y: c
      };
      break;
    default:
      d = {
        x: t.x,
        y: t.y
      };
  }
  var p = o ? wm(o) : null;
  if (p != null) {
    var h = p === "y" ? "height" : "width";
    switch (s) {
      case Ns:
        d[p] = d[p] - (t[h] / 2 - n[h] / 2);
        break;
      case Jl:
        d[p] = d[p] + (t[h] / 2 - n[h] / 2);
        break;
    }
  }
  return d;
}
function ec(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, s = n.strategy, u = s === void 0 ? e.strategy : s, c = n.boundary, d = c === void 0 ? $F : c, p = n.rootBoundary, h = p === void 0 ? iw : p, m = n.elementContext, v = m === void 0 ? ml : m, y = n.altBoundary, b = y === void 0 ? !1 : y, _ = n.padding, E = _ === void 0 ? 0 : _, A = dw(typeof E != "number" ? E : fw(E, yc)), F = v === ml ? BF : ml, x = e.rects.popper, I = e.elements[b ? F : v], O = y$(Ni(I) ? I : I.contextElement || Xo(e.elements.popper), d, h, u), S = As(e.elements.reference), C = hw({
    reference: S,
    element: x,
    placement: o
  }), T = vh(Object.assign({}, x, C)), N = v === ml ? T : S, B = {
    top: O.top - N.top + A.top,
    bottom: N.bottom - O.bottom + A.bottom,
    left: O.left - N.left + A.left,
    right: N.right - O.right + A.right
  }, H = e.modifiersData.offset;
  if (v === ml && H) {
    var ne = H[o];
    Object.keys(B).forEach(function(z) {
      var re = [jr, Ur].indexOf(z) >= 0 ? 1 : -1, he = [or, Ur].indexOf(z) >= 0 ? "y" : "x";
      B[z] += ne[he] * re;
    });
  }
  return B;
}
function b$(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, s = n.rootBoundary, u = n.padding, c = n.flipVariations, d = n.allowedAutoPlacements, p = d === void 0 ? sw : d, h = Rs(r), m = h ? c ? s0 : s0.filter(function(b) {
    return Rs(b) === h;
  }) : yc, v = m.filter(function(b) {
    return p.indexOf(b) >= 0;
  });
  v.length === 0 && (v = m);
  var y = v.reduce(function(b, _) {
    return b[_] = ec(e, {
      placement: _,
      boundary: o,
      rootBoundary: s,
      padding: u
    })[wa(_)], b;
  }, {});
  return Object.keys(y).sort(function(b, _) {
    return y[b] - y[_];
  });
}
function _$(e) {
  if (wa(e) === ym)
    return [];
  var t = Nu(e);
  return [u0(e), t, u0(t)];
}
function w$(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, s = o === void 0 ? !0 : o, u = n.altAxis, c = u === void 0 ? !0 : u, d = n.fallbackPlacements, p = n.padding, h = n.boundary, m = n.rootBoundary, v = n.altBoundary, y = n.flipVariations, b = y === void 0 ? !0 : y, _ = n.allowedAutoPlacements, E = t.options.placement, A = wa(E), F = A === E, x = d || (F || !b ? [Nu(E)] : _$(E)), I = [E].concat(x).reduce(function(Pe, Se) {
      return Pe.concat(wa(Se) === ym ? b$(t, {
        placement: Se,
        boundary: h,
        rootBoundary: m,
        padding: p,
        flipVariations: b,
        allowedAutoPlacements: _
      }) : Se);
    }, []), O = t.rects.reference, S = t.rects.popper, C = /* @__PURE__ */ new Map(), T = !0, N = I[0], B = 0; B < I.length; B++) {
      var H = I[B], ne = wa(H), z = Rs(H) === Ns, re = [or, Ur].indexOf(ne) >= 0, he = re ? "width" : "height", ve = ec(t, {
        placement: H,
        boundary: h,
        rootBoundary: m,
        altBoundary: v,
        padding: p
      }), Te = re ? z ? jr : ir : z ? Ur : or;
      O[he] > S[he] && (Te = Nu(Te));
      var de = Nu(Te), ye = [];
      if (s && ye.push(ve[ne] <= 0), c && ye.push(ve[Te] <= 0, ve[de] <= 0), ye.every(function(Pe) {
        return Pe;
      })) {
        N = H, T = !1;
        break;
      }
      C.set(H, ye);
    }
    if (T)
      for (var ee = b ? 3 : 1, oe = function(Se) {
        var ge = I.find(function(ke) {
          var De = C.get(ke);
          if (De)
            return De.slice(0, Se).every(function(U) {
              return U;
            });
        });
        if (ge)
          return N = ge, "break";
      }, se = ee; se > 0; se--) {
        var Ee = oe(se);
        if (Ee === "break") break;
      }
    t.placement !== N && (t.modifiersData[r]._skip = !0, t.placement = N, t.reset = !0);
  }
}
const E$ = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: w$,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function f0(e, t, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - n.y,
    right: e.right - t.width + n.x,
    bottom: e.bottom - t.height + n.y,
    left: e.left - t.width - n.x
  };
}
function p0(e) {
  return [or, jr, Ur, ir].some(function(t) {
    return e[t] >= 0;
  });
}
function x$(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, s = t.modifiersData.preventOverflow, u = ec(t, {
    elementContext: "reference"
  }), c = ec(t, {
    altBoundary: !0
  }), d = f0(u, r), p = f0(c, o, s), h = p0(d), m = p0(p);
  t.modifiersData[n] = {
    referenceClippingOffsets: d,
    popperEscapeOffsets: p,
    isReferenceHidden: h,
    hasPopperEscaped: m
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": h,
    "data-popper-escaped": m
  });
}
const C$ = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: x$
};
function O$(e, t, n) {
  var r = wa(e), o = [ir, or].indexOf(r) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, u = s[0], c = s[1];
  return u = u || 0, c = (c || 0) * o, [ir, jr].indexOf(r) >= 0 ? {
    x: c,
    y: u
  } : {
    x: u,
    y: c
  };
}
function S$(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, s = o === void 0 ? [0, 0] : o, u = sw.reduce(function(h, m) {
    return h[m] = O$(m, t.rects, s), h;
  }, {}), c = u[t.placement], d = c.x, p = c.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += d, t.modifiersData.popperOffsets.y += p), t.modifiersData[r] = u;
}
const T$ = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: S$
};
function P$(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = hw({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const k$ = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: P$,
  data: {}
};
function N$(e) {
  return e === "x" ? "y" : "x";
}
function I$(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, s = o === void 0 ? !0 : o, u = n.altAxis, c = u === void 0 ? !1 : u, d = n.boundary, p = n.rootBoundary, h = n.altBoundary, m = n.padding, v = n.tether, y = v === void 0 ? !0 : v, b = n.tetherOffset, _ = b === void 0 ? 0 : b, E = ec(t, {
    boundary: d,
    rootBoundary: p,
    padding: m,
    altBoundary: h
  }), A = wa(t.placement), F = Rs(t.placement), x = !F, I = wm(A), O = N$(I), S = t.modifiersData.popperOffsets, C = t.rects.reference, T = t.rects.popper, N = typeof _ == "function" ? _(Object.assign({}, t.rects, {
    placement: t.placement
  })) : _, B = typeof N == "number" ? {
    mainAxis: N,
    altAxis: N
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, N), H = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, ne = {
    x: 0,
    y: 0
  };
  if (S) {
    if (s) {
      var z, re = I === "y" ? or : ir, he = I === "y" ? Ur : jr, ve = I === "y" ? "height" : "width", Te = S[I], de = Te + E[re], ye = Te - E[he], ee = y ? -T[ve] / 2 : 0, oe = F === Ns ? C[ve] : T[ve], se = F === Ns ? -T[ve] : -C[ve], Ee = t.elements.arrow, Pe = y && Ee ? _m(Ee) : {
        width: 0,
        height: 0
      }, Se = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : uw(), ge = Se[re], ke = Se[he], De = kl(0, C[ve], Pe[ve]), U = x ? C[ve] / 2 - ee - De - ge - B.mainAxis : oe - De - ge - B.mainAxis, j = x ? -C[ve] / 2 + ee + De + ke + B.mainAxis : se + De + ke + B.mainAxis, $ = t.elements.arrow && bc(t.elements.arrow), D = $ ? I === "y" ? $.clientTop || 0 : $.clientLeft || 0 : 0, G = (z = H == null ? void 0 : H[I]) != null ? z : 0, K = Te + U - G - D, le = Te + j - G, pe = kl(y ? Ku(de, K) : de, Te, y ? bi(ye, le) : ye);
      S[I] = pe, ne[I] = pe - Te;
    }
    if (c) {
      var Q, fe = I === "x" ? or : ir, te = I === "x" ? Ur : jr, V = S[O], ae = O === "y" ? "height" : "width", Ce = V + E[fe], Fe = V - E[te], $e = [or, ir].indexOf(A) !== -1, st = (Q = H == null ? void 0 : H[O]) != null ? Q : 0, Ve = $e ? Ce : V - C[ae] - T[ae] - st + B.altAxis, xt = $e ? V + C[ae] + T[ae] - st - B.altAxis : Fe, rt = y && $e ? t$(Ve, V, xt) : kl(y ? Ve : Ce, V, y ? xt : Fe);
      S[O] = rt, ne[O] = rt - V;
    }
    t.modifiersData[r] = ne;
  }
}
const A$ = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: I$,
  requiresIfExists: ["offset"]
};
function R$(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function M$(e) {
  return e === wr(e) || !Fr(e) ? Em(e) : R$(e);
}
function D$(e) {
  var t = e.getBoundingClientRect(), n = Is(t.width) / e.offsetWidth || 1, r = Is(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function L$(e, t, n) {
  n === void 0 && (n = !1);
  var r = Fr(t), o = Fr(t) && D$(t), s = Xo(t), u = As(e, o, n), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Ca(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Cm(s)) && (c = M$(t)), Fr(t) ? (d = As(t, !0), d.x += t.clientLeft, d.y += t.clientTop) : s && (d.x = xm(s))), {
    x: u.left + c.scrollLeft - d.x,
    y: u.top + c.scrollTop - d.y,
    width: u.width,
    height: u.height
  };
}
function F$(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(s) {
    t.set(s.name, s);
  });
  function o(s) {
    n.add(s.name);
    var u = [].concat(s.requires || [], s.requiresIfExists || []);
    u.forEach(function(c) {
      if (!n.has(c)) {
        var d = t.get(c);
        d && o(d);
      }
    }), r.push(s);
  }
  return e.forEach(function(s) {
    n.has(s.name) || o(s);
  }), r;
}
function $$(e) {
  var t = F$(e);
  return KF.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function B$(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function W$(e) {
  var t = e.reduce(function(n, r) {
    var o = n[r.name];
    return n[r.name] = o ? Object.assign({}, o, r, {
      options: Object.assign({}, o.options, r.options),
      data: Object.assign({}, o.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var h0 = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function m0() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function U$(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, s = o === void 0 ? h0 : o;
  return function(c, d, p) {
    p === void 0 && (p = s);
    var h = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, h0, s),
      modifiersData: {},
      elements: {
        reference: c,
        popper: d
      },
      attributes: {},
      styles: {}
    }, m = [], v = !1, y = {
      state: h,
      setOptions: function(A) {
        var F = typeof A == "function" ? A(h.options) : A;
        _(), h.options = Object.assign({}, s, h.options, F), h.scrollParents = {
          reference: Ni(c) ? Nl(c) : c.contextElement ? Nl(c.contextElement) : [],
          popper: Nl(d)
        };
        var x = $$(W$([].concat(r, h.options.modifiers)));
        return h.orderedModifiers = x.filter(function(I) {
          return I.enabled;
        }), b(), y.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!v) {
          var A = h.elements, F = A.reference, x = A.popper;
          if (m0(F, x)) {
            h.rects = {
              reference: L$(F, bc(x), h.options.strategy === "fixed"),
              popper: _m(x)
            }, h.reset = !1, h.placement = h.options.placement, h.orderedModifiers.forEach(function(B) {
              return h.modifiersData[B.name] = Object.assign({}, B.data);
            });
            for (var I = 0; I < h.orderedModifiers.length; I++) {
              if (h.reset === !0) {
                h.reset = !1, I = -1;
                continue;
              }
              var O = h.orderedModifiers[I], S = O.fn, C = O.options, T = C === void 0 ? {} : C, N = O.name;
              typeof S == "function" && (h = S({
                state: h,
                options: T,
                name: N,
                instance: y
              }) || h);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: B$(function() {
        return new Promise(function(E) {
          y.forceUpdate(), E(h);
        });
      }),
      destroy: function() {
        _(), v = !0;
      }
    };
    if (!m0(c, d))
      return y;
    y.setOptions(p).then(function(E) {
      !v && p.onFirstUpdate && p.onFirstUpdate(E);
    });
    function b() {
      h.orderedModifiers.forEach(function(E) {
        var A = E.name, F = E.options, x = F === void 0 ? {} : F, I = E.effect;
        if (typeof I == "function") {
          var O = I({
            state: h,
            name: A,
            instance: y,
            options: x
          }), S = function() {
          };
          m.push(O || S);
        }
      });
    }
    function _() {
      m.forEach(function(E) {
        return E();
      }), m = [];
    }
    return y;
  };
}
var j$ = [d$, k$, c$, QF, T$, E$, A$, o$, C$], z$ = /* @__PURE__ */ U$({
  defaultModifiers: j$
}), H$ = typeof Element < "u", Y$ = typeof Map == "function", q$ = typeof Set == "function", V$ = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Iu(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var n, r, o;
    if (Array.isArray(e)) {
      if (n = e.length, n != t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!Iu(e[r], t[r])) return !1;
      return !0;
    }
    var s;
    if (Y$ && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (s = e.entries(); !(r = s.next()).done; )
        if (!t.has(r.value[0])) return !1;
      for (s = e.entries(); !(r = s.next()).done; )
        if (!Iu(r.value[1], t.get(r.value[0]))) return !1;
      return !0;
    }
    if (q$ && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (s = e.entries(); !(r = s.next()).done; )
        if (!t.has(r.value[0])) return !1;
      return !0;
    }
    if (V$ && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (n = e.length, n != t.length) return !1;
      for (r = n; r-- !== 0; )
        if (e[r] !== t[r]) return !1;
      return !0;
    }
    if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof t.valueOf == "function") return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof t.toString == "function") return e.toString() === t.toString();
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return !1;
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, o[r])) return !1;
    if (H$ && e instanceof Element) return !1;
    for (r = n; r-- !== 0; )
      if (!((o[r] === "_owner" || o[r] === "__v" || o[r] === "__o") && e.$$typeof) && !Iu(e[o[r]], t[o[r]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var G$ = function(t, n) {
  try {
    return Iu(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
};
const K$ = /* @__PURE__ */ uc(G$);
var Z$ = [], X$ = function(t, n, r) {
  r === void 0 && (r = {});
  var o = L.useRef(null), s = {
    onFirstUpdate: r.onFirstUpdate,
    placement: r.placement || "bottom",
    strategy: r.strategy || "absolute",
    modifiers: r.modifiers || Z$
  }, u = L.useState({
    styles: {
      popper: {
        position: s.strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), c = u[0], d = u[1], p = L.useMemo(function() {
    return {
      name: "updateState",
      enabled: !0,
      phase: "write",
      fn: function(y) {
        var b = y.state, _ = Object.keys(b.elements);
        Gp.flushSync(function() {
          d({
            styles: o0(_.map(function(E) {
              return [E, b.styles[E] || {}];
            })),
            attributes: o0(_.map(function(E) {
              return [E, b.attributes[E]];
            }))
          });
        });
      },
      requires: ["computeStyles"]
    };
  }, []), h = L.useMemo(function() {
    var v = {
      onFirstUpdate: s.onFirstUpdate,
      placement: s.placement,
      strategy: s.strategy,
      modifiers: [].concat(s.modifiers, [p, {
        name: "applyStyles",
        enabled: !1
      }])
    };
    return K$(o.current, v) ? o.current || v : (o.current = v, v);
  }, [s.onFirstUpdate, s.placement, s.strategy, s.modifiers, p]), m = L.useRef();
  return i0(function() {
    m.current && m.current.setOptions(h);
  }, [h]), i0(function() {
    if (!(t == null || n == null)) {
      var v = r.createPopper || z$, y = v(t, n, h);
      return m.current = y, function() {
        y.destroy(), m.current = null;
      };
    }
  }, [t, n, r.createPopper]), {
    state: m.current ? m.current.state : null,
    styles: c.styles,
    attributes: c.attributes,
    update: m.current ? m.current.update : null,
    forceUpdate: m.current ? m.current.forceUpdate : null
  };
}, Q$ = function() {
}, J$ = function() {
  return Promise.resolve(null);
}, e9 = [];
function t9(e) {
  var t = e.placement, n = t === void 0 ? "bottom" : t, r = e.strategy, o = r === void 0 ? "absolute" : r, s = e.modifiers, u = s === void 0 ? e9 : s, c = e.referenceElement, d = e.onFirstUpdate, p = e.innerRef, h = e.children, m = L.useContext(MF), v = L.useState(null), y = v[0], b = v[1], _ = L.useState(null), E = _[0], A = _[1];
  L.useEffect(function() {
    FF(p, y);
  }, [p, y]);
  var F = L.useMemo(function() {
    return {
      placement: n,
      strategy: o,
      onFirstUpdate: d,
      modifiers: [].concat(u, [{
        name: "arrow",
        enabled: E != null,
        options: {
          element: E
        }
      }])
    };
  }, [n, o, d, u, E]), x = X$(c || m, y, F), I = x.state, O = x.styles, S = x.forceUpdate, C = x.update, T = L.useMemo(function() {
    return {
      ref: b,
      style: O.popper,
      placement: I ? I.placement : n,
      hasPopperEscaped: I && I.modifiersData.hide ? I.modifiersData.hide.hasPopperEscaped : null,
      isReferenceHidden: I && I.modifiersData.hide ? I.modifiersData.hide.isReferenceHidden : null,
      arrowProps: {
        style: O.arrow,
        ref: A
      },
      forceUpdate: S || Q$,
      update: C || J$
    };
  }, [b, A, n, I, O, C, S]);
  return DF(h)(T);
}
function n9(e, t, n, r) {
  return o1(e, function(o, s, u) {
    t(r, n(o), s, u);
  }), r;
}
function r9(e, t) {
  return function(n, r) {
    return n9(n, e, t(r), {});
  };
}
var a9 = Object.prototype, o9 = a9.toString, i9 = r9(function(e, t, n) {
  t != null && typeof t.toString != "function" && (t = o9.call(t)), e[t] = n;
}, K_(Go)), Om = {
  "top center": "top",
  "top left": "top-start",
  "top right": "top-end",
  "bottom center": "bottom",
  "bottom left": "bottom-start",
  "bottom right": "bottom-end",
  "right center": "right",
  "left center": "left"
}, s9 = Lr(Om), l9 = i9(Om);
function tc(e) {
  "@babel/helpers - typeof";
  return tc = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, tc(e);
}
function c9(e, t) {
  if (tc(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (tc(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function u9(e) {
  var t = c9(e, "string");
  return tc(t) == "symbol" ? t : t + "";
}
function d9(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, u9(r.key), r);
  }
}
function f9(e, t, n) {
  return t && d9(e.prototype, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
var p9 = /* @__PURE__ */ function() {
  function e(n) {
    this.ref = n;
  }
  var t = e.prototype;
  return t.getBoundingClientRect = function() {
    return Ae(this.ref.current, "getBoundingClientRect") || {};
  }, f9(e, [{
    key: "clientWidth",
    get: function() {
      return this.getBoundingClientRect().width;
    }
  }, {
    key: "clientHeight",
    get: function() {
      return this.getBoundingClientRect().height;
    }
  }, {
    key: "parentNode",
    get: function() {
      return this.ref.current ? this.ref.current.parentNode : void 0;
    }
  }, {
    key: "contextElement",
    get: function() {
      return this.ref.current;
    }
  }]), e;
}(), h9 = dc(function(e) {
  return new p9(ju(e) ? e : {
    current: e
  });
});
function Uo(e) {
  var t = e.children, n = e.className, r = e.content, o = He("content", n), s = je(Uo, e), u = Ye(Uo, e);
  return /* @__PURE__ */ J.createElement(u, ue({}, s, {
    className: o
  }), it(t) ? r : t);
}
Uo.handledProps = ["as", "children", "className", "content"];
Uo.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** The content of the Popup */
  children: l.node,
  /** Classes to add to the Popup content className. */
  className: l.string,
  /** Shorthand for primary content. */
  content: St
} : {};
Uo.create = qt(Uo, function(e) {
  return {
    children: e
  };
});
function jo(e) {
  var t = e.children, n = e.className, r = e.content, o = He("header", n), s = je(jo, e), u = Ye(jo, e);
  return /* @__PURE__ */ J.createElement(u, ue({}, s, {
    className: o
  }), it(t) ? r : t);
}
jo.handledProps = ["as", "children", "className", "content"];
jo.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: St
} : {};
jo.create = qt(jo, function(e) {
  return {
    children: e
  };
});
var Er = /* @__PURE__ */ function(e) {
  Jt(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.state = {}, r.open = !1, r.zIndexWasSynced = !1, r.triggerRef = /* @__PURE__ */ J.createRef(), r.elementRef = /* @__PURE__ */ J.createRef(), r.getPortalProps = function() {
      var c = {}, d = r.props, p = d.on, h = d.hoverable, m = vn(p) ? p : [p];
      return h && (c.closeOnPortalMouseLeave = !0, c.mouseLeaveDelay = 300), ya(m, "hover") && (c.openOnTriggerClick = !1, c.closeOnTriggerClick = !1, c.openOnTriggerMouseEnter = !0, c.closeOnTriggerMouseLeave = !0, c.mouseLeaveDelay = 70, c.mouseEnterDelay = 50), ya(m, "click") && (c.openOnTriggerClick = !0, c.closeOnTriggerClick = !0, c.closeOnDocumentClick = !0), ya(m, "focus") && (c.openOnTriggerFocus = !0, c.closeOnTriggerBlur = !0), c;
    }, r.hideOnScroll = function(c) {
      RF(c.target) && r.elementRef.current.contains(c.target) || (r.setState({
        closed: !0
      }), xl.unsub("scroll", r.hideOnScroll, {
        target: window
      }), r.timeoutId = setTimeout(function() {
        r.setState({
          closed: !1
        });
      }, 50), r.handleClose(c));
    }, r.handleClose = function(c) {
      Ae(r.props, "onClose", c, ue({}, r.props, {
        open: !1
      }));
    }, r.handleOpen = function(c) {
      Ae(r.props, "onOpen", c, ue({}, r.props, {
        open: !0
      }));
    }, r.handlePortalMount = function(c) {
      Ae(r.props, "onMount", c, r.props);
    }, r.handlePortalUnmount = function(c) {
      r.positionUpdate = null, Ae(r.props, "onUnmount", c, r.props);
    }, r.renderContent = function(c) {
      var d = c.placement, p = c.ref, h = c.update, m = c.style, v = r.props, y = v.basic, b = v.children, _ = v.className, E = v.content, A = v.hideOnScroll, F = v.flowing, x = v.header, I = v.inverted, O = v.popper, S = v.size, C = v.style, T = v.wide, N = r.state.contentRestProps;
      r.positionUpdate = h;
      var B = He("ui", l9[d], S, nn(T, "wide"), q(y, "basic"), q(F, "flowing"), q(I, "inverted"), "popup transition visible", _), H = Ye(t, r.props), ne = ue({
        // Heads up! We need default styles to get working correctly `flowing`
        left: "auto",
        right: "auto",
        // This is required to be properly positioned inside wrapping `div`
        position: "initial"
      }, C), z = /* @__PURE__ */ J.createElement(H, ue({}, N, {
        className: B,
        style: ne,
        ref: r.elementRef
      }), it(b) ? /* @__PURE__ */ J.createElement(J.Fragment, null, jo.create(x, {
        autoGenerateKey: !1
      }), Uo.create(E, {
        autoGenerateKey: !1
      })) : b, A && /* @__PURE__ */ J.createElement(ja, {
        on: r.hideOnScroll,
        name: "scroll",
        target: "window"
      }));
      return zD(O || {}, {
        overrideProps: {
          children: z,
          ref: p,
          style: ue({
            // Fixes layout for floated elements
            // https://github.com/Semantic-Org/Semantic-UI-React/issues/4092
            display: "flex"
          }, m)
        }
      });
    }, r;
  }
  t.getDerivedStateFromProps = function(o, s) {
    if (s.closed || s.disabled) return {};
    var u = je(t, o), c = vm(u, function(p, h, m) {
      return ya(Qr.handledProps, m) || (p[m] = h), p;
    }, {}), d = Ed(u, Qr.handledProps);
    return {
      contentRestProps: c,
      portalRestProps: d
    };
  };
  var n = t.prototype;
  return n.componentDidUpdate = function(o) {
    var s = Pl(this.props.popperDependencies, o.popperDependencies);
    s || this.handleUpdate();
  }, n.componentWillUnmount = function() {
    clearTimeout(this.timeoutId);
  }, n.handleUpdate = function() {
    this.positionUpdate && this.positionUpdate();
  }, n.render = function() {
    var o = this, s = this.props, u = s.context, c = s.disabled, d = s.eventsEnabled, p = s.offset, h = s.pinned, m = s.popper, v = s.popperModifiers, y = s.position, b = s.positionFixed, _ = s.trigger, E = this.state, A = E.closed, F = E.portalRestProps;
    if (A || c)
      return _;
    var x = [{
      name: "arrow",
      enabled: !1
    }, {
      name: "eventListeners",
      options: {
        scroll: !!d,
        resize: !!d
      }
    }, {
      name: "flip",
      enabled: !h
    }, {
      name: "preventOverflow",
      enabled: !!p
    }, {
      name: "offset",
      enabled: !!p,
      options: {
        offset: p
      }
    }].concat(v, [
      // We are syncing zIndex from `.ui.popup.content` to avoid layering issues as in SUIR we are using an additional
      // `div` for Popper.js
      // https://github.com/Semantic-Org/Semantic-UI-React/issues/4083
      {
        name: "syncZIndex",
        enabled: !0,
        phase: "beforeRead",
        fn: function(C) {
          var T, N = C.state;
          if (!o.zIndexWasSynced) {
            var B = m == null || (T = m.style) == null ? void 0 : T.zIndex;
            cs(B) && (N.elements.popper.style.zIndex = window.getComputedStyle(N.elements.popper.firstChild).zIndex), o.zIndexWasSynced = !0;
          }
        },
        effect: function() {
          return function() {
            o.zIndexWasSynced = !1;
          };
        }
      }
    ]), I = h9(Et(u) ? this.triggerRef : u), O = ue({}, this.getPortalProps(), F);
    return /* @__PURE__ */ J.createElement(Qr, ue({}, O, {
      onClose: this.handleClose,
      onMount: this.handlePortalMount,
      onOpen: this.handleOpen,
      onUnmount: this.handlePortalUnmount,
      trigger: _,
      triggerRef: this.triggerRef
    }), /* @__PURE__ */ J.createElement(t9, {
      modifiers: x,
      placement: Om[y],
      strategy: b ? "fixed" : null,
      referenceElement: I
    }, this.renderContent));
  }, t;
}(Gn);
Er.handledProps = ["as", "basic", "children", "className", "content", "context", "disabled", "eventsEnabled", "flowing", "header", "hideOnScroll", "hoverable", "inverted", "offset", "on", "onClose", "onMount", "onOpen", "onUnmount", "pinned", "popper", "popperDependencies", "popperModifiers", "position", "positionFixed", "size", "style", "trigger", "wide"];
Er.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Display the popup without the pointing arrow. */
  basic: l.bool,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Simple text content for the popover. */
  content: bt,
  /** Existing element the pop-up should be bound to. */
  context: l.oneOfType([l.object, pm]),
  /** A disabled popup only renders its trigger. */
  disabled: l.bool,
  /** Enables the Popper.js event listeners. */
  eventsEnabled: l.bool,
  /** A flowing Popup has no maximum width and continues to flow to fit its content. */
  flowing: l.bool,
  /** Takes up the entire width of its offset container. */
  // TODO: implement the Popup fluid layout
  // fluid: PropTypes.bool,
  /** Header displayed above the content in bold. */
  header: bt,
  /** Hide the Popup when scrolling the window. */
  hideOnScroll: l.bool,
  /** Whether the popup should not close on hover. */
  hoverable: l.bool,
  /** Invert the colors of the Popup. */
  inverted: l.bool,
  /**
   * Offset values in px unit to apply to rendered popup. The basic offset accepts an
   * array with two numbers in the form [skidding, distance]:
   * - `skidding` displaces the Popup along the reference element
   * - `distance` displaces the Popup away from, or toward, the reference element in the direction of its placement. A positive number displaces it further away, while a negative number lets it overlap the reference.
   *
   * @see https://popper.js.org/docs/v2/modifiers/offset/
   */
  offset: l.oneOfType([l.func, l.arrayOf(l.number)]),
  /** Events triggering the popup. */
  on: l.oneOfType([l.oneOf(["hover", "click", "focus"]), l.arrayOf(l.oneOf(["hover", "click", "focus"]))]),
  /**
   * Called when a close event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClose: l.func,
  /**
   * Called when the portal is mounted on the DOM.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onMount: l.func,
  /**
   * Called when an open event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onOpen: l.func,
  /**
   * Called when the portal is unmounted from the DOM.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onUnmount: l.func,
  /** Disables automatic repositioning of the component, it will always be placed according to the position value. */
  pinned: l.bool,
  /** Position for the popover. */
  position: l.oneOf(s9),
  /** Tells `Popper.js` to use the `position: fixed` strategy to position the popover. */
  positionFixed: l.bool,
  /** A wrapping element for an actual content that will be used for positioning. */
  popper: bt,
  /** An array containing custom settings for the Popper.js modifiers. */
  popperModifiers: l.array,
  /** A popup can have dependencies which update will schedule a position update. */
  popperDependencies: l.array,
  /** Popup size. */
  size: l.oneOf(Jr(cr, "medium", "big", "massive")),
  /** Custom Popup style. */
  style: l.object,
  /** Element to be rendered in-place where the popup is defined. */
  trigger: l.node,
  /** Popup width. */
  wide: l.oneOfType([l.bool, l.oneOf(["very"])])
} : {};
Er.defaultProps = {
  disabled: !1,
  eventsEnabled: !0,
  on: ["click", "hover"],
  pinned: !1,
  popperModifiers: [],
  position: "top left"
};
Er.Content = Uo;
Er.Header = jo;
var m9 = function(t) {
  if (t) {
    var n, r, o;
    return typeof t.window == "object" && t.window === t ? t.event : (n = (r = t.ownerDocument) == null || (o = r.defaultView) == null ? void 0 : o.event) != null ? n : void 0;
  }
}, g0 = function(t, n) {
  return t ? !!t[n] : !1;
}, g9 = function(t) {
  var n = t.capture, r = t.listener, o = t.type, s = t.target, u = t.targetRef, c = L.useRef(r);
  c.current = r;
  var d = L.useCallback(function(h) {
    return c.current(h);
  }, []), p = L.useRef(void 0);
  process.env.NODE_ENV !== "production" && L.useEffect(function() {
    if (typeof s < "u" && typeof u < "u")
      throw new Error("`target` and `targetRef` props are mutually exclusive, please use one of them.");
    if (typeof s > "u" && typeof u > "u")
      throw new Error("`target` and `targetRef` props are `undefined`, it' required to use one of them.");
  }, [s, u]), L.useEffect(function() {
    var h = typeof u > "u" ? s : u.current, m = m9(window), v = function(b) {
      if (b === m) {
        m = void 0;
        return;
      }
      d(b);
    };
    if (g0(h, "addEventListener"))
      h.addEventListener(o, v, n);
    else if (process.env.NODE_ENV !== "production")
      throw new Error("@fluentui/react-component-event-listener: Passed `element` is not valid or does not support `addEventListener()` method.");
    return p.current = setTimeout(function() {
      m = void 0;
    }, 1), function() {
      if (clearTimeout(p.current), m = void 0, g0(h, "removeEventListener"))
        h.removeEventListener(o, v, n);
      else if (process.env.NODE_ENV !== "production")
        throw new Error("@fluentui/react-component-event-listener: Passed `element` is not valid or does not support `removeEventListener()` method.");
    };
  }, [n, d, s, u, o]);
}, v9 = /* @__PURE__ */ function() {
  function e(t) {
    return g9(t), null;
  }
  return e.defaultProps = {
    capture: !1
  }, e;
}(), y9 = {
  current: typeof document > "u" ? null : document
};
function nc(e) {
  var t = e.className, n = e.children, r = e.content, o = He("pushable", t), s = je(nc, e), u = Ye(nc, e);
  return /* @__PURE__ */ J.createElement(u, ue({}, s, {
    className: o
  }), it(n) ? r : n);
}
nc.handledProps = ["as", "children", "className", "content"];
nc.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: St
} : {};
function rc(e) {
  var t = e.className, n = e.dimmed, r = e.children, o = e.content, s = He("pusher", q(n, "dimmed"), t), u = je(rc, e), c = Ye(rc, e);
  return /* @__PURE__ */ J.createElement(c, ue({}, u, {
    className: s
  }), it(r) ? o : r);
}
rc.handledProps = ["as", "children", "className", "content", "dimmed"];
rc.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: St,
  /** Controls whether or not the dim is displayed. */
  dimmed: l.bool
} : {};
var Qo = /* @__PURE__ */ function(e) {
  Jt(t, e);
  function t(r) {
    var o;
    return o = e.call(this, r) || this, o.ref = /* @__PURE__ */ br(), o.handleAnimationStart = function() {
      var s = o.props.visible, u = s ? "onVisible" : "onHide";
      if (clearTimeout(o.animationTimer), o.animationTimer = setTimeout(o.handleAnimationEnd, t.animationDuration), o.skipNextCallback) {
        o.skipNextCallback = !1;
        return;
      }
      Ae(o.props, u, null, o.props);
    }, o.handleAnimationEnd = function() {
      var s = o.props.visible, u = s ? "onShow" : "onHidden";
      o.setState({
        animationTick: 0
      }), Ae(o.props, u, null, o.props);
    }, o.handleDocumentClick = function(s) {
      To(o.ref.current, s) || (o.skipNextCallback = !0, Ae(o.props, "onHide", s, ue({}, o.props, {
        visible: !1
      })));
    }, o.state = {
      animationTick: 0,
      visible: r.visible
    }, o;
  }
  t.getDerivedStateFromProps = function(o, s) {
    var u = !!o.visible == !!s.visible ? 0 : 1;
    return {
      animationTick: s.animationTick + u,
      visible: o.visible
    };
  };
  var n = t.prototype;
  return n.componentDidUpdate = function(o, s) {
    this.state.animationTick > s.animationTick && this.handleAnimationStart();
  }, n.componentWillUnmount = function() {
    clearTimeout(this.animationTimer);
  }, n.render = function() {
    var o = this.props, s = o.animation, u = o.className, c = o.children, d = o.content, p = o.direction, h = o.target, m = o.visible, v = o.width, y = this.state.animationTick, b = He("ui", s, p, v, q(y > 0, "animating"), q(m, "visible"), "sidebar", u), _ = je(t, this.props), E = Ye(t, this.props), A = ju(h) ? {
      targetRef: h
    } : {
      target: h
    };
    return /* @__PURE__ */ J.createElement(J.Fragment, null, /* @__PURE__ */ J.createElement(sr, {
      innerRef: this.ref
    }, /* @__PURE__ */ J.createElement(E, ue({}, _, {
      className: b
    }), it(c) ? d : c)), m && /* @__PURE__ */ J.createElement(v9, ue({
      listener: this.handleDocumentClick,
      type: "click"
    }, A)));
  }, t;
}(Gn);
Qo.handledProps = ["animation", "as", "children", "className", "content", "direction", "onHidden", "onHide", "onShow", "onVisible", "target", "visible", "width"];
Qo.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Animation style. */
  animation: l.oneOf(["overlay", "push", "scale down", "uncover", "slide out", "slide along"]),
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: St,
  /** Direction the sidebar should appear on. */
  direction: l.oneOf(["top", "right", "bottom", "left"]),
  /**
   * Called before a sidebar begins to animate out.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onHide: l.func,
  /**
   * Called after a sidebar has finished animating out.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onHidden: l.func,
  /**
   * Called when a sidebar has finished animating in.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onShow: l.func,
  /**
   * Called when a sidebar begins animating in.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onVisible: l.func,
  /** A sidebar can handle clicks on the passed element. */
  target: l.oneOfType([ID, pm]),
  /** Controls whether or not the sidebar is visible on the page. */
  visible: l.bool,
  /** Sidebar width. */
  width: l.oneOf(["very thin", "thin", "wide", "very wide"])
} : {};
Qo.defaultProps = {
  direction: "left",
  target: y9,
  visible: !1
};
Qo.animationDuration = 500;
Qo.autoControlledProps = ["visible"];
Qo.Pushable = nc;
Qo.Pusher = rc;
const mw = AI({
  collapsible: !1,
  isCollapsed: !1,
  toggleCollapse: () => {
  },
  collapseTrigger: "button"
}), b9 = () => RI(mw), _9 = "_card_1g3ak_9", w9 = "_fluid_1g3ak_45", E9 = "_notFluid_1g3ak_53", x9 = "_elevated_1g3ak_71", C9 = "_outlined_1g3ak_81", O9 = "_flat_1g3ak_93", S9 = "_soft_1g3ak_107", T9 = "_glass_1g3ak_121", P9 = "_gradient_1g3ak_137", k9 = "_themePrimary_1g3ak_157", N9 = "_themeSecondary_1g3ak_179", I9 = "_themeSuccess_1g3ak_201", A9 = "_themeWarning_1g3ak_223", R9 = "_themeDanger_1g3ak_245", M9 = "_themeInfo_1g3ak_267", D9 = "_themeDark_1g3ak_289", L9 = "_radiusNone_1g3ak_323", F9 = "_radiusSm_1g3ak_331", $9 = "_radiusMd_1g3ak_339", B9 = "_radiusLg_1g3ak_347", W9 = "_radiusXl_1g3ak_355", U9 = "_radiusFull_1g3ak_363", j9 = "_padNone_1g3ak_379", z9 = "_padSm_1g3ak_387", H9 = "_padMd_1g3ak_395", Y9 = "_padLg_1g3ak_403", q9 = "_accentTop_1g3ak_419", V9 = "_accentLeft_1g3ak_429", G9 = "_accentBottom_1g3ak_439", K9 = "_accentRight_1g3ak_449", Z9 = "_hoverable_1g3ak_467", X9 = "_hoverGlow_1g3ak_479", Q9 = "_clickable_1g3ak_487", J9 = "_horizontal_1g3ak_523", e5 = "_vertical_1g3ak_533", t5 = "_responsiveHorizontal_1g3ak_543", n5 = "_mediaLeft_1g3ak_567", r5 = "_collapseGrid_1g3ak_587", a5 = "_collapseGridCollapsed_1g3ak_601", o5 = "_collapseContent_1g3ak_609", i5 = "_collapseButton_1g3ak_623", s5 = "_chevronIcon_1g3ak_657", l5 = "_chevronRotated_1g3ak_669", c5 = "_headerClickable_1g3ak_677", u5 = "_header_1g3ak_677", d5 = "_headerWithDivider_1g3ak_721", f5 = "_headerLeading_1g3ak_729", p5 = "_headerAvatar_1g3ak_745", h5 = "_headerTextGroup_1g3ak_759", m5 = "_title_1g3ak_771", g5 = "_subtitle_1g3ak_793", v5 = "_headerExtra_1g3ak_807", y5 = "_body_1g3ak_829", b5 = "_bodyPaddedSm_1g3ak_847", _5 = "_bodyPaddedMd_1g3ak_855", w5 = "_bodyPaddedLg_1g3ak_863", E5 = "_bodyPaddedNone_1g3ak_871", x5 = "_footer_1g3ak_887", C5 = "_footerWithDivider_1g3ak_903", O5 = "_alignLeft_1g3ak_913", S5 = "_alignCenter_1g3ak_921", T5 = "_alignRight_1g3ak_929", P5 = "_alignBetween_1g3ak_937", k5 = "_mediaContainer_1g3ak_953", N5 = "_mediaImg_1g3ak_973", I5 = "_mediaZoomOnHover_1g3ak_989", A5 = "_mediaOverlay_1g3ak_997", R5 = "_mediaBadgeSlot_1g3ak_1027", M5 = "_ratio16x9_1g3ak_1043", D5 = "_ratio4x3_1g3ak_1051", L5 = "_ratio1x1_1g3ak_1059", F5 = "_ratio21x9_1g3ak_1067", $5 = "_ratioAuto_1g3ak_1075", B5 = "_iconBadge_1g3ak_1107", W5 = "_iconBadgeCircle_1g3ak_1135", U5 = "_iconBadgeSm_1g3ak_1143", j5 = "_iconBadgeLg_1g3ak_1155", z5 = "_badge_1g3ak_1175", H5 = "_badgeDefault_1g3ak_1201", Y5 = "_badgePrimary_1g3ak_1211", q5 = "_badgeSuccess_1g3ak_1221", V5 = "_badgeWarning_1g3ak_1231", G5 = "_badgeDanger_1g3ak_1241", K5 = "_badgeGlass_1g3ak_1261", Z5 = "_divider_1g3ak_1297", X5 = "_loadingOverlay_1g3ak_1321", Q5 = "_spinner_1g3ak_1359", xe = {
  card: _9,
  fluid: w9,
  notFluid: E9,
  elevated: x9,
  outlined: C9,
  flat: O9,
  soft: S9,
  glass: T9,
  gradient: P9,
  themePrimary: k9,
  themeSecondary: N9,
  themeSuccess: I9,
  themeWarning: A9,
  themeDanger: R9,
  themeInfo: M9,
  themeDark: D9,
  radiusNone: L9,
  radiusSm: F9,
  radiusMd: $9,
  radiusLg: B9,
  radiusXl: W9,
  radiusFull: U9,
  padNone: j9,
  padSm: z9,
  padMd: H9,
  padLg: Y9,
  accentTop: q9,
  accentLeft: V9,
  accentBottom: G9,
  accentRight: K9,
  hoverable: Z9,
  hoverGlow: X9,
  clickable: Q9,
  horizontal: J9,
  vertical: e5,
  responsiveHorizontal: t5,
  mediaLeft: n5,
  collapseGrid: r5,
  collapseGridCollapsed: a5,
  collapseContent: o5,
  collapseButton: i5,
  chevronIcon: s5,
  chevronRotated: l5,
  headerClickable: c5,
  header: u5,
  headerWithDivider: d5,
  headerLeading: f5,
  headerAvatar: p5,
  headerTextGroup: h5,
  title: m5,
  subtitle: g5,
  headerExtra: v5,
  body: y5,
  bodyPaddedSm: b5,
  bodyPaddedMd: _5,
  bodyPaddedLg: w5,
  bodyPaddedNone: E5,
  footer: x5,
  footerWithDivider: C5,
  alignLeft: O5,
  alignCenter: S5,
  alignRight: T5,
  alignBetween: P5,
  mediaContainer: k5,
  mediaImg: N5,
  mediaZoomOnHover: I5,
  mediaOverlay: A5,
  mediaBadgeSlot: R5,
  ratio16x9: M5,
  ratio4x3: D5,
  ratio1x1: L5,
  ratio21x9: F5,
  ratioAuto: $5,
  iconBadge: B5,
  iconBadgeCircle: W5,
  iconBadgeSm: U5,
  iconBadgeLg: j5,
  badge: z5,
  badgeDefault: H5,
  badgePrimary: Y5,
  badgeSuccess: q5,
  badgeWarning: V5,
  badgeDanger: G5,
  badgeGlass: K5,
  divider: Z5,
  loadingOverlay: X5,
  spinner: Q5
}, Pd = ({
  title: e,
  subtitle: t,
  avatar: n,
  action: r,
  divider: o = !1,
  showCollapseButton: s = !0,
  collapseButton: u,
  className: c = "",
  style: d = {},
  onClick: p,
  children: h
}) => {
  const m = b9(), v = m.collapsible, { isCollapsed: y } = m, b = v && m.collapseTrigger === "header", _ = (x) => {
    p && p(x), b && m.toggleCollapse && m.toggleCollapse();
  }, E = (x) => {
    x.stopPropagation(), m.toggleCollapse && m.toggleCollapse();
  }, A = [xe.header, o ? xe.headerWithDivider : "", b ? xe.headerClickable : "", c].filter(Boolean).join(" "), F = () => !v || !s ? null : u ? /* @__PURE__ */ k(
    "span",
    {
      onClick: E,
      role: "button",
      tabIndex: 0,
      onKeyDown: (x) => {
        (x.key === "Enter" || x.key === " ") && (x.preventDefault(), E(x));
      },
      children: u
    }
  ) : /* @__PURE__ */ k(
    "button",
    {
      type: "button",
      className: xe.collapseButton,
      onClick: E,
      "aria-label": y ? "Expandir tarjeta" : "Colapsar tarjeta",
      children: /* @__PURE__ */ k(Be, { name: "chevron up", className: `${xe.chevronIcon} ${y ? xe.chevronRotated : ""}`, style: { margin: 0 } })
    }
  );
  return h ? /* @__PURE__ */ ce(
    "header",
    {
      className: A,
      style: d,
      onClick: _,
      role: b ? "button" : void 0,
      tabIndex: b ? 0 : void 0,
      onKeyDown: (x) => {
        b && (x.key === "Enter" || x.key === " ") && (x.preventDefault(), _(x));
      },
      children: [
        h,
        F()
      ]
    }
  ) : /* @__PURE__ */ ce(
    "header",
    {
      className: A,
      style: d,
      onClick: _,
      role: b ? "button" : void 0,
      tabIndex: b ? 0 : void 0,
      onKeyDown: (x) => {
        b && (x.key === "Enter" || x.key === " ") && (x.preventDefault(), _(x));
      },
      children: [
        /* @__PURE__ */ ce("div", { className: xe.headerLeading, children: [
          n && /* @__PURE__ */ k("div", { className: xe.headerAvatar, children: n }),
          (e || t) && /* @__PURE__ */ ce("div", { className: xe.headerTextGroup, children: [
            e && (typeof e == "string" ? /* @__PURE__ */ k("h3", { className: xe.title, children: e }) : e),
            t && (typeof t == "string" ? /* @__PURE__ */ k("p", { className: xe.subtitle, children: t }) : t)
          ] })
        ] }),
        /* @__PURE__ */ ce("div", { className: xe.headerExtra, children: [
          r,
          F()
        ] })
      ]
    }
  );
};
Pd.propTypes = {
  title: l.node,
  subtitle: l.node,
  avatar: l.node,
  action: l.node,
  divider: l.bool,
  showCollapseButton: l.bool,
  collapseButton: l.node,
  className: l.string,
  style: l.object,
  onClick: l.func,
  children: l.node
};
Pd.displayName = "CardHeader";
const J5 = {
  none: xe.bodyPaddedNone,
  small: xe.bodyPaddedSm,
  medium: xe.bodyPaddedMd,
  large: xe.bodyPaddedLg
}, gw = ({ children: e, padding: t = "medium", className: n = "", style: r = {} }) => {
  const o = [xe.body, J5[t] || xe.bodyPaddedMd, n].filter(Boolean).join(" ");
  return /* @__PURE__ */ k("div", { className: o, style: r, children: e });
};
gw.propTypes = {
  children: l.node,
  padding: l.oneOf(["none", "small", "medium", "large"]),
  className: l.string,
  style: l.object
};
const eB = {
  left: xe.alignLeft,
  center: xe.alignCenter,
  right: xe.alignRight,
  between: xe.alignBetween
}, vw = ({ children: e, align: t = "right", divider: n = !1, className: r = "", style: o = {} }) => {
  const s = [xe.footer, eB[t] || xe.alignRight, n ? xe.footerWithDivider : "", r].filter(Boolean).join(" ");
  return /* @__PURE__ */ k("footer", { className: s, style: o, children: e });
};
vw.propTypes = {
  children: l.node,
  align: l.oneOf(["left", "center", "right", "between"]),
  divider: l.bool,
  className: l.string,
  style: l.object
};
const tB = {
  "16/9": xe.ratio16x9,
  "4/3": xe.ratio4x3,
  "1/1": xe.ratio1x1,
  "21/9": xe.ratio21x9,
  auto: xe.ratioAuto
}, yw = ({
  src: e,
  alt: t = "",
  aspectRatio: n = "16/9",
  position: r = "top",
  overlay: o,
  badge: s,
  zoomOnHover: u = !0,
  className: c = "",
  style: d = {},
  children: p
}) => {
  const h = [
    xe.mediaContainer,
    r === "left" ? xe.mediaLeft : "",
    tB[n] || xe.ratio16x9,
    u ? xe.mediaZoomOnHover : "",
    c
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ ce("div", { className: h, style: d, children: [
    s && /* @__PURE__ */ k("div", { className: xe.mediaBadgeSlot, children: s }),
    p || e && /* @__PURE__ */ k("img", { src: e, alt: t, className: xe.mediaImg }),
    o && /* @__PURE__ */ k("div", { className: xe.mediaOverlay, children: typeof o == "boolean" ? null : o })
  ] });
};
yw.propTypes = {
  src: l.string,
  alt: l.string,
  aspectRatio: l.oneOf(["16/9", "4/3", "1/1", "21/9", "auto"]),
  position: l.oneOf(["top", "cover", "left"]),
  overlay: l.oneOfType([l.node, l.bool]),
  badge: l.node,
  zoomOnHover: l.bool,
  className: l.string,
  style: l.object,
  children: l.node
};
const nB = {
  default: xe.badgeDefault,
  primary: xe.badgePrimary,
  success: xe.badgeSuccess,
  warning: xe.badgeWarning,
  danger: xe.badgeDanger,
  glass: xe.badgeGlass
}, bw = ({ children: e, variant: t = "default", color: n, textColor: r, icon: o, className: s = "", style: u = {} }) => {
  const c = [xe.badge, nB[t] || xe.badgeDefault, s].filter(Boolean).join(" "), d = {
    ...u,
    ...n ? { backgroundColor: n } : {},
    ...r ? { color: r } : {}
  };
  return /* @__PURE__ */ ce("span", { className: c, style: d, children: [
    o && /* @__PURE__ */ k("span", { style: { display: "inline-flex" }, children: o }),
    e
  ] });
};
bw.propTypes = {
  children: l.node,
  variant: l.oneOf(["default", "primary", "success", "warning", "danger", "glass"]),
  color: l.string,
  textColor: l.string,
  icon: l.node,
  className: l.string,
  style: l.object
};
const _w = ({ className: e = "", color: t, style: n = {} }) => {
  const r = [xe.divider, e].filter(Boolean).join(" "), o = {
    ...n,
    ...t ? { backgroundColor: t } : {}
  };
  return /* @__PURE__ */ k("hr", { className: r, style: o });
};
_w.propTypes = {
  className: l.string,
  color: l.string,
  style: l.object
};
const Sp = {
  primary: xe.themePrimary,
  secondary: xe.themeSecondary,
  success: xe.themeSuccess,
  warning: xe.themeWarning,
  danger: xe.themeDanger,
  info: xe.themeInfo
}, rB = {
  small: xe.iconBadgeSm,
  medium: "",
  large: xe.iconBadgeLg
}, ww = ({ name: e, color: t, shape: n = "circle", size: r = "medium", bgColor: o, iconColor: s, className: u = "", style: c = {}, children: d }) => {
  const p = [
    xe.iconBadge,
    n === "circle" ? xe.iconBadgeCircle : "",
    rB[r] || "",
    t && Sp[t] ? Sp[t] : "",
    u
  ].filter(Boolean).join(" "), h = {
    ...c,
    ...o ? { "--ik-icon-bg": o } : {},
    ...s ? { "--ik-icon-color": s } : {}
  };
  return t && !Sp[t] && (h["--ik-icon-color"] || (h["--ik-icon-color"] = t)), /* @__PURE__ */ k("div", { className: p, style: h, children: d || e && /* @__PURE__ */ k(Be, { name: e, style: { margin: 0 } }) });
};
ww.propTypes = {
  name: l.string,
  color: l.string,
  shape: l.oneOf(["circle", "rounded"]),
  size: l.oneOf(["small", "medium", "large"]),
  bgColor: l.string,
  iconColor: l.string,
  className: l.string,
  style: l.object,
  children: l.node
};
const Tp = {
  primary: xe.themePrimary,
  secondary: xe.themeSecondary,
  success: xe.themeSuccess,
  warning: xe.themeWarning,
  danger: xe.themeDanger,
  info: xe.themeInfo,
  dark: xe.themeDark
}, v0 = {
  none: xe.radiusNone,
  small: xe.radiusSm,
  sm: xe.radiusSm,
  medium: xe.radiusMd,
  md: xe.radiusMd,
  large: xe.radiusLg,
  lg: xe.radiusLg,
  xl: xe.radiusXl,
  full: xe.radiusFull
}, aB = {
  none: xe.padNone,
  small: xe.padSm,
  medium: xe.padMd,
  large: xe.padLg
}, oB = {
  top: xe.accentTop,
  left: xe.accentLeft,
  bottom: xe.accentBottom,
  right: xe.accentRight
}, iB = {
  elevated: xe.elevated,
  outlined: xe.outlined,
  flat: xe.flat,
  soft: xe.soft,
  glass: xe.glass,
  gradient: xe.gradient
}, ao = rm((e, t) => {
  const {
    children: n,
    variant: r = "elevated",
    color: o,
    bgColor: s,
    textColor: u,
    borderColor: c,
    accentColor: d,
    glowColor: p,
    accent: h = "none",
    direction: m = "vertical",
    responsive: v = !0,
    hoverable: y = !1,
    glow: b = !1,
    clickable: _ = !1,
    fluid: E = !0,
    radius: A = "large",
    padding: F,
    loading: x = !1,
    collapsible: I = !1,
    collapsed: O,
    defaultCollapsed: S = !1,
    onCollapseChange: C,
    collapseTrigger: T = "button",
    className: N = "",
    style: B = {},
    onClick: H,
    onKeyDown: ne,
    tabIndex: z,
    role: re
  } = e, he = O !== void 0, [ve, Te] = ot(S), de = he ? O : ve, ye = () => {
    const U = !de;
    he || Te(U), C && C(U);
  }, ee = MI(() => ({
    collapsible: I,
    isCollapsed: de,
    toggleCollapse: ye,
    collapseTrigger: T
  }), [I, de, T]), oe = o && Tp[o], se = o && !Tp[o], Ee = {
    ...B
  };
  s && (Ee["--ik-card-bg"] = s), u && (Ee["--ik-card-text"] = u), c && (Ee["--ik-card-border"] = c), d && (Ee["--ik-card-accent"] = d), p && (Ee["--ik-card-glow"] = p), se && (Ee["--ik-card-accent"] = o, p || (Ee["--ik-card-glow"] = o), r === "soft" && (Ee["--ik-card-border-soft"] = o)), A && !v0[A] && (Ee["--ik-card-radius"] = A);
  let Pe = xe.vertical;
  m === "horizontal" && (Pe = v ? xe.responsiveHorizontal : xe.horizontal);
  const Se = _ || typeof H == "function" && !I, ge = [
    xe.card,
    iB[r] || xe.elevated,
    oe ? Tp[o] : "",
    E ? xe.fluid : xe.notFluid,
    v0[A] || "",
    F ? aB[F] : "",
    oB[h] || "",
    y ? xe.hoverable : "",
    b ? xe.hoverGlow : "",
    Se ? xe.clickable : "",
    Pe,
    N
  ].filter(Boolean).join(" "), ke = (U) => {
    ne && ne(U), Se && (U.key === "Enter" || U.key === " ") && (U.preventDefault(), H && H(U));
  }, De = () => {
    if (!I)
      return n;
    const U = J.Children.toArray(n), j = U.findIndex((G) => {
      var K, le;
      return J.isValidElement(G) && (G.type === Pd || ((K = G.type) == null ? void 0 : K.displayName) === "CardHeader" || ((le = G.props) == null ? void 0 : le.displayName) === "CardHeader");
    });
    if (j === -1)
      return /* @__PURE__ */ k("div", { className: `${xe.collapseGrid} ${de ? xe.collapseGridCollapsed : ""}`, children: /* @__PURE__ */ k("div", { className: xe.collapseContent, children: n }) });
    const $ = U[j], D = U.filter((G, K) => K !== j);
    return /* @__PURE__ */ ce(No, { children: [
      $,
      /* @__PURE__ */ k("div", { className: `${xe.collapseGrid} ${de ? xe.collapseGridCollapsed : ""}`, children: /* @__PURE__ */ k("div", { className: xe.collapseContent, children: D }) })
    ] });
  };
  return /* @__PURE__ */ k(mw.Provider, { value: ee, children: /* @__PURE__ */ ce(
    "div",
    {
      ref: t,
      className: ge,
      style: Ee,
      onClick: Se ? H : void 0,
      onKeyDown: Se ? ke : ne,
      role: re || (Se ? "button" : void 0),
      tabIndex: z !== void 0 ? z : Se ? 0 : void 0,
      children: [
        De(),
        x && /* @__PURE__ */ ce("div", { className: xe.loadingOverlay, children: [
          /* @__PURE__ */ k("div", { className: xe.spinner }),
          /* @__PURE__ */ k("span", { children: "Cargando..." })
        ] })
      ]
    }
  ) });
});
ao.displayName = "Card";
ao.Header = Pd;
ao.Body = gw;
ao.Footer = vw;
ao.Media = yw;
ao.Badge = bw;
ao.Divider = _w;
ao.Icon = ww;
ao.propTypes = {
  children: l.node,
  variant: l.oneOf(["elevated", "outlined", "flat", "soft", "glass", "gradient"]),
  color: l.string,
  bgColor: l.string,
  textColor: l.string,
  borderColor: l.string,
  accentColor: l.string,
  glowColor: l.string,
  accent: l.oneOf(["none", "top", "left", "bottom", "right"]),
  direction: l.oneOf(["vertical", "horizontal"]),
  responsive: l.bool,
  hoverable: l.bool,
  glow: l.bool,
  clickable: l.bool,
  fluid: l.bool,
  radius: l.string,
  padding: l.oneOf(["none", "small", "medium", "large"]),
  loading: l.bool,
  collapsible: l.bool,
  collapsed: l.bool,
  defaultCollapsed: l.bool,
  onCollapseChange: l.func,
  collapseTrigger: l.oneOf(["header", "button"]),
  className: l.string,
  style: l.object,
  onClick: l.func,
  onKeyDown: l.func,
  tabIndex: l.number,
  role: l.string
};
var Zu = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
Zu.exports;
(function(e, t) {
  (function() {
    var n, r = "4.18.1", o = 200, s = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", u = "Expected a function", c = "Invalid `variable` option passed into `_.template`", d = "Invalid `imports` option passed into `_.template`", p = "__lodash_hash_undefined__", h = 500, m = "__lodash_placeholder__", v = 1, y = 2, b = 4, _ = 1, E = 2, A = 1, F = 2, x = 4, I = 8, O = 16, S = 32, C = 64, T = 128, N = 256, B = 512, H = 30, ne = "...", z = 800, re = 16, he = 1, ve = 2, Te = 3, de = 1 / 0, ye = 9007199254740991, ee = 17976931348623157e292, oe = NaN, se = 4294967295, Ee = se - 1, Pe = se >>> 1, Se = [
      ["ary", T],
      ["bind", A],
      ["bindKey", F],
      ["curry", I],
      ["curryRight", O],
      ["flip", B],
      ["partial", S],
      ["partialRight", C],
      ["rearg", N]
    ], ge = "[object Arguments]", ke = "[object Array]", De = "[object AsyncFunction]", U = "[object Boolean]", j = "[object Date]", $ = "[object DOMException]", D = "[object Error]", G = "[object Function]", K = "[object GeneratorFunction]", le = "[object Map]", pe = "[object Number]", Q = "[object Null]", fe = "[object Object]", te = "[object Promise]", V = "[object Proxy]", ae = "[object RegExp]", Ce = "[object Set]", Fe = "[object String]", $e = "[object Symbol]", st = "[object Undefined]", Ve = "[object WeakMap]", xt = "[object WeakSet]", rt = "[object ArrayBuffer]", Ke = "[object DataView]", Xe = "[object Float32Array]", Nt = "[object Float64Array]", be = "[object Int8Array]", It = "[object Int16Array]", At = "[object Int32Array]", ft = "[object Uint8Array]", Je = "[object Uint8ClampedArray]", Gt = "[object Uint16Array]", We = "[object Uint32Array]", Ft = /\b__p \+= '';/g, Qe = /\b(__p \+=) '' \+/g, un = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Kn = /&(?:amp|lt|gt|quot|#39);/g, ia = /[&<>"']/g, kc = RegExp(Kn.source), sa = RegExp(ia.source), rC = /<%-([\s\S]+?)%>/g, aC = /<%([\s\S]+?)%>/g, Og = /<%=([\s\S]+?)%>/g, oC = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, iC = /^\w*$/, sC = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Xd = /[\\^$.*+?()[\]{}|]/g, lC = RegExp(Xd.source), Qd = /^\s+/, cC = /\s/, uC = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, dC = /\{\n\/\* \[wrapped with (.+)\] \*/, fC = /,? & /, pC = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Sg = /[()=,{}\[\]\/\s]/, hC = /\\(\\)?/g, mC = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Tg = /\w*$/, gC = /^[-+]0x[0-9a-f]+$/i, vC = /^0b[01]+$/i, yC = /^\[object .+?Constructor\]$/, bC = /^0o[0-7]+$/i, _C = /^(?:0|[1-9]\d*)$/, wC = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Nc = /($^)/, EC = /['\n\r\u2028\u2029\\]/g, Ic = "\\ud800-\\udfff", xC = "\\u0300-\\u036f", CC = "\\ufe20-\\ufe2f", OC = "\\u20d0-\\u20ff", Pg = xC + CC + OC, kg = "\\u2700-\\u27bf", Ng = "a-z\\xdf-\\xf6\\xf8-\\xff", SC = "\\xac\\xb1\\xd7\\xf7", TC = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", PC = "\\u2000-\\u206f", kC = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Ig = "A-Z\\xc0-\\xd6\\xd8-\\xde", Ag = "\\ufe0e\\ufe0f", Rg = SC + TC + PC + kC, Jd = "['’]", NC = "[" + Ic + "]", Mg = "[" + Rg + "]", Ac = "[" + Pg + "]", Dg = "\\d+", IC = "[" + kg + "]", Lg = "[" + Ng + "]", Fg = "[^" + Ic + Rg + Dg + kg + Ng + Ig + "]", ef = "\\ud83c[\\udffb-\\udfff]", AC = "(?:" + Ac + "|" + ef + ")", $g = "[^" + Ic + "]", tf = "(?:\\ud83c[\\udde6-\\uddff]){2}", nf = "[\\ud800-\\udbff][\\udc00-\\udfff]", Wi = "[" + Ig + "]", Bg = "\\u200d", Wg = "(?:" + Lg + "|" + Fg + ")", RC = "(?:" + Wi + "|" + Fg + ")", Ug = "(?:" + Jd + "(?:d|ll|m|re|s|t|ve))?", jg = "(?:" + Jd + "(?:D|LL|M|RE|S|T|VE))?", zg = AC + "?", Hg = "[" + Ag + "]?", MC = "(?:" + Bg + "(?:" + [$g, tf, nf].join("|") + ")" + Hg + zg + ")*", DC = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", LC = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Yg = Hg + zg + MC, FC = "(?:" + [IC, tf, nf].join("|") + ")" + Yg, $C = "(?:" + [$g + Ac + "?", Ac, tf, nf, NC].join("|") + ")", BC = RegExp(Jd, "g"), WC = RegExp(Ac, "g"), rf = RegExp(ef + "(?=" + ef + ")|" + $C + Yg, "g"), UC = RegExp([
      Wi + "?" + Lg + "+" + Ug + "(?=" + [Mg, Wi, "$"].join("|") + ")",
      RC + "+" + jg + "(?=" + [Mg, Wi + Wg, "$"].join("|") + ")",
      Wi + "?" + Wg + "+" + Ug,
      Wi + "+" + jg,
      LC,
      DC,
      Dg,
      FC
    ].join("|"), "g"), jC = RegExp("[" + Bg + Ic + Pg + Ag + "]"), zC = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, HC = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], YC = -1, en = {};
    en[Xe] = en[Nt] = en[be] = en[It] = en[At] = en[ft] = en[Je] = en[Gt] = en[We] = !0, en[ge] = en[ke] = en[rt] = en[U] = en[Ke] = en[j] = en[D] = en[G] = en[le] = en[pe] = en[fe] = en[ae] = en[Ce] = en[Fe] = en[Ve] = !1;
    var Xt = {};
    Xt[ge] = Xt[ke] = Xt[rt] = Xt[Ke] = Xt[U] = Xt[j] = Xt[Xe] = Xt[Nt] = Xt[be] = Xt[It] = Xt[At] = Xt[le] = Xt[pe] = Xt[fe] = Xt[ae] = Xt[Ce] = Xt[Fe] = Xt[$e] = Xt[ft] = Xt[Je] = Xt[Gt] = Xt[We] = !0, Xt[D] = Xt[G] = Xt[Ve] = !1;
    var qC = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, VC = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, GC = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, KC = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, ZC = parseFloat, XC = parseInt, qg = typeof rs == "object" && rs && rs.Object === Object && rs, QC = typeof self == "object" && self && self.Object === Object && self, kn = qg || QC || Function("return this")(), af = t && !t.nodeType && t, Jo = af && !0 && e && !e.nodeType && e, Vg = Jo && Jo.exports === af, of = Vg && qg.process, Or = function() {
      try {
        var Z = Jo && Jo.require && Jo.require("util").types;
        return Z || of && of.binding && of.binding("util");
      } catch {
      }
    }(), Gg = Or && Or.isArrayBuffer, Kg = Or && Or.isDate, Zg = Or && Or.isMap, Xg = Or && Or.isRegExp, Qg = Or && Or.isSet, Jg = Or && Or.isTypedArray;
    function ur(Z, me, ie) {
      switch (ie.length) {
        case 0:
          return Z.call(me);
        case 1:
          return Z.call(me, ie[0]);
        case 2:
          return Z.call(me, ie[0], ie[1]);
        case 3:
          return Z.call(me, ie[0], ie[1], ie[2]);
      }
      return Z.apply(me, ie);
    }
    function JC(Z, me, ie, Ue) {
      for (var lt = -1, Lt = Z == null ? 0 : Z.length; ++lt < Lt; ) {
        var bn = Z[lt];
        me(Ue, bn, ie(bn), Z);
      }
      return Ue;
    }
    function dr(Z, me) {
      for (var ie = -1, Ue = Z == null ? 0 : Z.length; ++ie < Ue && me(Z[ie], ie, Z) !== !1; )
        ;
      return Z;
    }
    function eO(Z, me) {
      for (var ie = Z == null ? 0 : Z.length; ie-- && me(Z[ie], ie, Z) !== !1; )
        ;
      return Z;
    }
    function ev(Z, me) {
      for (var ie = -1, Ue = Z == null ? 0 : Z.length; ++ie < Ue; )
        if (!me(Z[ie], ie, Z))
          return !1;
      return !0;
    }
    function fo(Z, me) {
      for (var ie = -1, Ue = Z == null ? 0 : Z.length, lt = 0, Lt = []; ++ie < Ue; ) {
        var bn = Z[ie];
        me(bn, ie, Z) && (Lt[lt++] = bn);
      }
      return Lt;
    }
    function Rc(Z, me) {
      var ie = Z == null ? 0 : Z.length;
      return !!ie && Ui(Z, me, 0) > -1;
    }
    function sf(Z, me, ie) {
      for (var Ue = -1, lt = Z == null ? 0 : Z.length; ++Ue < lt; )
        if (ie(me, Z[Ue]))
          return !0;
      return !1;
    }
    function sn(Z, me) {
      for (var ie = -1, Ue = Z == null ? 0 : Z.length, lt = Array(Ue); ++ie < Ue; )
        lt[ie] = me(Z[ie], ie, Z);
      return lt;
    }
    function po(Z, me) {
      for (var ie = -1, Ue = me.length, lt = Z.length; ++ie < Ue; )
        Z[lt + ie] = me[ie];
      return Z;
    }
    function lf(Z, me, ie, Ue) {
      var lt = -1, Lt = Z == null ? 0 : Z.length;
      for (Ue && Lt && (ie = Z[++lt]); ++lt < Lt; )
        ie = me(ie, Z[lt], lt, Z);
      return ie;
    }
    function tO(Z, me, ie, Ue) {
      var lt = Z == null ? 0 : Z.length;
      for (Ue && lt && (ie = Z[--lt]); lt--; )
        ie = me(ie, Z[lt], lt, Z);
      return ie;
    }
    function cf(Z, me) {
      for (var ie = -1, Ue = Z == null ? 0 : Z.length; ++ie < Ue; )
        if (me(Z[ie], ie, Z))
          return !0;
      return !1;
    }
    var nO = uf("length");
    function rO(Z) {
      return Z.split("");
    }
    function aO(Z) {
      return Z.match(pC) || [];
    }
    function tv(Z, me, ie) {
      var Ue;
      return ie(Z, function(lt, Lt, bn) {
        if (me(lt, Lt, bn))
          return Ue = Lt, !1;
      }), Ue;
    }
    function Mc(Z, me, ie, Ue) {
      for (var lt = Z.length, Lt = ie + (Ue ? 1 : -1); Ue ? Lt-- : ++Lt < lt; )
        if (me(Z[Lt], Lt, Z))
          return Lt;
      return -1;
    }
    function Ui(Z, me, ie) {
      return me === me ? gO(Z, me, ie) : Mc(Z, nv, ie);
    }
    function oO(Z, me, ie, Ue) {
      for (var lt = ie - 1, Lt = Z.length; ++lt < Lt; )
        if (Ue(Z[lt], me))
          return lt;
      return -1;
    }
    function nv(Z) {
      return Z !== Z;
    }
    function rv(Z, me) {
      var ie = Z == null ? 0 : Z.length;
      return ie ? ff(Z, me) / ie : oe;
    }
    function uf(Z) {
      return function(me) {
        return me == null ? n : me[Z];
      };
    }
    function df(Z) {
      return function(me) {
        return Z == null ? n : Z[me];
      };
    }
    function av(Z, me, ie, Ue, lt) {
      return lt(Z, function(Lt, bn, Kt) {
        ie = Ue ? (Ue = !1, Lt) : me(ie, Lt, bn, Kt);
      }), ie;
    }
    function iO(Z, me) {
      var ie = Z.length;
      for (Z.sort(me); ie--; )
        Z[ie] = Z[ie].value;
      return Z;
    }
    function ff(Z, me) {
      for (var ie, Ue = -1, lt = Z.length; ++Ue < lt; ) {
        var Lt = me(Z[Ue]);
        Lt !== n && (ie = ie === n ? Lt : ie + Lt);
      }
      return ie;
    }
    function pf(Z, me) {
      for (var ie = -1, Ue = Array(Z); ++ie < Z; )
        Ue[ie] = me(ie);
      return Ue;
    }
    function sO(Z, me) {
      return sn(me, function(ie) {
        return [ie, Z[ie]];
      });
    }
    function ov(Z) {
      return Z && Z.slice(0, cv(Z) + 1).replace(Qd, "");
    }
    function fr(Z) {
      return function(me) {
        return Z(me);
      };
    }
    function hf(Z, me) {
      return sn(me, function(ie) {
        return Z[ie];
      });
    }
    function Ks(Z, me) {
      return Z.has(me);
    }
    function iv(Z, me) {
      for (var ie = -1, Ue = Z.length; ++ie < Ue && Ui(me, Z[ie], 0) > -1; )
        ;
      return ie;
    }
    function sv(Z, me) {
      for (var ie = Z.length; ie-- && Ui(me, Z[ie], 0) > -1; )
        ;
      return ie;
    }
    function lO(Z, me) {
      for (var ie = Z.length, Ue = 0; ie--; )
        Z[ie] === me && ++Ue;
      return Ue;
    }
    var cO = df(qC), uO = df(VC);
    function dO(Z) {
      return "\\" + KC[Z];
    }
    function fO(Z, me) {
      return Z == null ? n : Z[me];
    }
    function ji(Z) {
      return jC.test(Z);
    }
    function pO(Z) {
      return zC.test(Z);
    }
    function hO(Z) {
      for (var me, ie = []; !(me = Z.next()).done; )
        ie.push(me.value);
      return ie;
    }
    function mf(Z) {
      var me = -1, ie = Array(Z.size);
      return Z.forEach(function(Ue, lt) {
        ie[++me] = [lt, Ue];
      }), ie;
    }
    function lv(Z, me) {
      return function(ie) {
        return Z(me(ie));
      };
    }
    function ho(Z, me) {
      for (var ie = -1, Ue = Z.length, lt = 0, Lt = []; ++ie < Ue; ) {
        var bn = Z[ie];
        (bn === me || bn === m) && (Z[ie] = m, Lt[lt++] = ie);
      }
      return Lt;
    }
    function Dc(Z) {
      var me = -1, ie = Array(Z.size);
      return Z.forEach(function(Ue) {
        ie[++me] = Ue;
      }), ie;
    }
    function mO(Z) {
      var me = -1, ie = Array(Z.size);
      return Z.forEach(function(Ue) {
        ie[++me] = [Ue, Ue];
      }), ie;
    }
    function gO(Z, me, ie) {
      for (var Ue = ie - 1, lt = Z.length; ++Ue < lt; )
        if (Z[Ue] === me)
          return Ue;
      return -1;
    }
    function vO(Z, me, ie) {
      for (var Ue = ie + 1; Ue--; )
        if (Z[Ue] === me)
          return Ue;
      return Ue;
    }
    function zi(Z) {
      return ji(Z) ? bO(Z) : nO(Z);
    }
    function Yr(Z) {
      return ji(Z) ? _O(Z) : rO(Z);
    }
    function cv(Z) {
      for (var me = Z.length; me-- && cC.test(Z.charAt(me)); )
        ;
      return me;
    }
    var yO = df(GC);
    function bO(Z) {
      for (var me = rf.lastIndex = 0; rf.test(Z); )
        ++me;
      return me;
    }
    function _O(Z) {
      return Z.match(rf) || [];
    }
    function wO(Z) {
      return Z.match(UC) || [];
    }
    var EO = function Z(me) {
      me = me == null ? kn : Hi.defaults(kn.Object(), me, Hi.pick(kn, HC));
      var ie = me.Array, Ue = me.Date, lt = me.Error, Lt = me.Function, bn = me.Math, Kt = me.Object, gf = me.RegExp, xO = me.String, Sr = me.TypeError, Lc = ie.prototype, CO = Lt.prototype, Yi = Kt.prototype, Fc = me["__core-js_shared__"], $c = CO.toString, $t = Yi.hasOwnProperty, OO = 0, uv = function() {
        var a = /[^.]+$/.exec(Fc && Fc.keys && Fc.keys.IE_PROTO || "");
        return a ? "Symbol(src)_1." + a : "";
      }(), Bc = Yi.toString, SO = $c.call(Kt), TO = kn._, PO = gf(
        "^" + $c.call($t).replace(Xd, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Wc = Vg ? me.Buffer : n, mo = me.Symbol, Uc = me.Uint8Array, dv = Wc ? Wc.allocUnsafe : n, jc = lv(Kt.getPrototypeOf, Kt), fv = Kt.create, pv = Yi.propertyIsEnumerable, zc = Lc.splice, hv = mo ? mo.isConcatSpreadable : n, Zs = mo ? mo.iterator : n, ei = mo ? mo.toStringTag : n, Hc = function() {
        try {
          var a = oi(Kt, "defineProperty");
          return a({}, "", {}), a;
        } catch {
        }
      }(), kO = me.clearTimeout !== kn.clearTimeout && me.clearTimeout, NO = Ue && Ue.now !== kn.Date.now && Ue.now, IO = me.setTimeout !== kn.setTimeout && me.setTimeout, Yc = bn.ceil, qc = bn.floor, vf = Kt.getOwnPropertySymbols, AO = Wc ? Wc.isBuffer : n, mv = me.isFinite, RO = Lc.join, MO = lv(Kt.keys, Kt), _n = bn.max, Rn = bn.min, DO = Ue.now, LO = me.parseInt, gv = bn.random, FO = Lc.reverse, yf = oi(me, "DataView"), Xs = oi(me, "Map"), bf = oi(me, "Promise"), qi = oi(me, "Set"), Qs = oi(me, "WeakMap"), Js = oi(Kt, "create"), Vc = Qs && new Qs(), Vi = {}, $O = ii(yf), BO = ii(Xs), WO = ii(bf), UO = ii(qi), jO = ii(Qs), Gc = mo ? mo.prototype : n, el = Gc ? Gc.valueOf : n, vv = Gc ? Gc.toString : n;
      function P(a) {
        if (fn(a) && !ut(a) && !(a instanceof Ct)) {
          if (a instanceof Tr)
            return a;
          if ($t.call(a, "__wrapped__"))
            return yy(a);
        }
        return new Tr(a);
      }
      var Gi = /* @__PURE__ */ function() {
        function a() {
        }
        return function(i) {
          if (!dn(i))
            return {};
          if (fv)
            return fv(i);
          a.prototype = i;
          var f = new a();
          return a.prototype = n, f;
        };
      }();
      function Kc() {
      }
      function Tr(a, i) {
        this.__wrapped__ = a, this.__actions__ = [], this.__chain__ = !!i, this.__index__ = 0, this.__values__ = n;
      }
      P.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: rC,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: aC,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: Og,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: P
        }
      }, P.prototype = Kc.prototype, P.prototype.constructor = P, Tr.prototype = Gi(Kc.prototype), Tr.prototype.constructor = Tr;
      function Ct(a) {
        this.__wrapped__ = a, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = se, this.__views__ = [];
      }
      function zO() {
        var a = new Ct(this.__wrapped__);
        return a.__actions__ = Zn(this.__actions__), a.__dir__ = this.__dir__, a.__filtered__ = this.__filtered__, a.__iteratees__ = Zn(this.__iteratees__), a.__takeCount__ = this.__takeCount__, a.__views__ = Zn(this.__views__), a;
      }
      function HO() {
        if (this.__filtered__) {
          var a = new Ct(this);
          a.__dir__ = -1, a.__filtered__ = !0;
        } else
          a = this.clone(), a.__dir__ *= -1;
        return a;
      }
      function YO() {
        var a = this.__wrapped__.value(), i = this.__dir__, f = ut(a), g = i < 0, w = f ? a.length : 0, M = rT(0, w, this.__views__), W = M.start, Y = M.end, X = Y - W, _e = g ? Y : W - 1, we = this.__iteratees__, Oe = we.length, Le = 0, qe = Rn(X, this.__takeCount__);
        if (!f || !g && w == X && qe == X)
          return Uv(a, this.__actions__);
        var nt = [];
        e:
          for (; X-- && Le < qe; ) {
            _e += i;
            for (var mt = -1, et = a[_e]; ++mt < Oe; ) {
              var _t = we[mt], Tt = _t.iteratee, mr = _t.type, jn = Tt(et);
              if (mr == ve)
                et = jn;
              else if (!jn) {
                if (mr == he)
                  continue e;
                break e;
              }
            }
            nt[Le++] = et;
          }
        return nt;
      }
      Ct.prototype = Gi(Kc.prototype), Ct.prototype.constructor = Ct;
      function ti(a) {
        var i = -1, f = a == null ? 0 : a.length;
        for (this.clear(); ++i < f; ) {
          var g = a[i];
          this.set(g[0], g[1]);
        }
      }
      function qO() {
        this.__data__ = Js ? Js(null) : {}, this.size = 0;
      }
      function VO(a) {
        var i = this.has(a) && delete this.__data__[a];
        return this.size -= i ? 1 : 0, i;
      }
      function GO(a) {
        var i = this.__data__;
        if (Js) {
          var f = i[a];
          return f === p ? n : f;
        }
        return $t.call(i, a) ? i[a] : n;
      }
      function KO(a) {
        var i = this.__data__;
        return Js ? i[a] !== n : $t.call(i, a);
      }
      function ZO(a, i) {
        var f = this.__data__;
        return this.size += this.has(a) ? 0 : 1, f[a] = Js && i === n ? p : i, this;
      }
      ti.prototype.clear = qO, ti.prototype.delete = VO, ti.prototype.get = GO, ti.prototype.has = KO, ti.prototype.set = ZO;
      function Na(a) {
        var i = -1, f = a == null ? 0 : a.length;
        for (this.clear(); ++i < f; ) {
          var g = a[i];
          this.set(g[0], g[1]);
        }
      }
      function XO() {
        this.__data__ = [], this.size = 0;
      }
      function QO(a) {
        var i = this.__data__, f = Zc(i, a);
        if (f < 0)
          return !1;
        var g = i.length - 1;
        return f == g ? i.pop() : zc.call(i, f, 1), --this.size, !0;
      }
      function JO(a) {
        var i = this.__data__, f = Zc(i, a);
        return f < 0 ? n : i[f][1];
      }
      function eS(a) {
        return Zc(this.__data__, a) > -1;
      }
      function tS(a, i) {
        var f = this.__data__, g = Zc(f, a);
        return g < 0 ? (++this.size, f.push([a, i])) : f[g][1] = i, this;
      }
      Na.prototype.clear = XO, Na.prototype.delete = QO, Na.prototype.get = JO, Na.prototype.has = eS, Na.prototype.set = tS;
      function Ia(a) {
        var i = -1, f = a == null ? 0 : a.length;
        for (this.clear(); ++i < f; ) {
          var g = a[i];
          this.set(g[0], g[1]);
        }
      }
      function nS() {
        this.size = 0, this.__data__ = {
          hash: new ti(),
          map: new (Xs || Na)(),
          string: new ti()
        };
      }
      function rS(a) {
        var i = lu(this, a).delete(a);
        return this.size -= i ? 1 : 0, i;
      }
      function aS(a) {
        return lu(this, a).get(a);
      }
      function oS(a) {
        return lu(this, a).has(a);
      }
      function iS(a, i) {
        var f = lu(this, a), g = f.size;
        return f.set(a, i), this.size += f.size == g ? 0 : 1, this;
      }
      Ia.prototype.clear = nS, Ia.prototype.delete = rS, Ia.prototype.get = aS, Ia.prototype.has = oS, Ia.prototype.set = iS;
      function ni(a) {
        var i = -1, f = a == null ? 0 : a.length;
        for (this.__data__ = new Ia(); ++i < f; )
          this.add(a[i]);
      }
      function sS(a) {
        return this.__data__.set(a, p), this;
      }
      function lS(a) {
        return this.__data__.has(a);
      }
      ni.prototype.add = ni.prototype.push = sS, ni.prototype.has = lS;
      function qr(a) {
        var i = this.__data__ = new Na(a);
        this.size = i.size;
      }
      function cS() {
        this.__data__ = new Na(), this.size = 0;
      }
      function uS(a) {
        var i = this.__data__, f = i.delete(a);
        return this.size = i.size, f;
      }
      function dS(a) {
        return this.__data__.get(a);
      }
      function fS(a) {
        return this.__data__.has(a);
      }
      function pS(a, i) {
        var f = this.__data__;
        if (f instanceof Na) {
          var g = f.__data__;
          if (!Xs || g.length < o - 1)
            return g.push([a, i]), this.size = ++f.size, this;
          f = this.__data__ = new Ia(g);
        }
        return f.set(a, i), this.size = f.size, this;
      }
      qr.prototype.clear = cS, qr.prototype.delete = uS, qr.prototype.get = dS, qr.prototype.has = fS, qr.prototype.set = pS;
      function yv(a, i) {
        var f = ut(a), g = !f && si(a), w = !f && !g && _o(a), M = !f && !g && !w && Qi(a), W = f || g || w || M, Y = W ? pf(a.length, xO) : [], X = Y.length;
        for (var _e in a)
          (i || $t.call(a, _e)) && !(W && // Safari 9 has enumerable `arguments.length` in strict mode.
          (_e == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          w && (_e == "offset" || _e == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          M && (_e == "buffer" || _e == "byteLength" || _e == "byteOffset") || // Skip index properties.
          Ma(_e, X))) && Y.push(_e);
        return Y;
      }
      function bv(a) {
        var i = a.length;
        return i ? a[Nf(0, i - 1)] : n;
      }
      function hS(a, i) {
        return cu(Zn(a), ri(i, 0, a.length));
      }
      function mS(a) {
        return cu(Zn(a));
      }
      function _f(a, i, f) {
        (f !== n && !Gr(a[i], f) || f === n && !(i in a)) && la(a, i, f);
      }
      function tl(a, i, f) {
        var g = a[i];
        (!($t.call(a, i) && Gr(g, f)) || f === n && !(i in a)) && la(a, i, f);
      }
      function Zc(a, i) {
        for (var f = a.length; f--; )
          if (Gr(a[f][0], i))
            return f;
        return -1;
      }
      function gS(a, i, f, g) {
        return go(a, function(w, M, W) {
          i(g, w, f(w), W);
        }), g;
      }
      function _v(a, i) {
        return a && ua(i, On(i), a);
      }
      function vS(a, i) {
        return a && ua(i, Qn(i), a);
      }
      function la(a, i, f) {
        i == "__proto__" && Hc ? Hc(a, i, {
          configurable: !0,
          enumerable: !0,
          value: f,
          writable: !0
        }) : a[i] = f;
      }
      function wf(a, i) {
        for (var f = -1, g = i.length, w = ie(g), M = a == null; ++f < g; )
          w[f] = M ? n : np(a, i[f]);
        return w;
      }
      function ri(a, i, f) {
        return a === a && (f !== n && (a = a <= f ? a : f), i !== n && (a = a >= i ? a : i)), a;
      }
      function Pr(a, i, f, g, w, M) {
        var W, Y = i & v, X = i & y, _e = i & b;
        if (f && (W = w ? f(a, g, w, M) : f(a)), W !== n)
          return W;
        if (!dn(a))
          return a;
        var we = ut(a);
        if (we) {
          if (W = oT(a), !Y)
            return Zn(a, W);
        } else {
          var Oe = Mn(a), Le = Oe == G || Oe == K;
          if (_o(a))
            return Hv(a, Y);
          if (Oe == fe || Oe == ge || Le && !w) {
            if (W = X || Le ? {} : cy(a), !Y)
              return X ? GS(a, vS(W, a)) : VS(a, _v(W, a));
          } else {
            if (!Xt[Oe])
              return w ? a : {};
            W = iT(a, Oe, Y);
          }
        }
        M || (M = new qr());
        var qe = M.get(a);
        if (qe)
          return qe;
        M.set(a, W), $y(a) ? a.forEach(function(et) {
          W.add(Pr(et, i, f, et, a, M));
        }) : Ly(a) && a.forEach(function(et, _t) {
          W.set(_t, Pr(et, i, f, _t, a, M));
        });
        var nt = _e ? X ? Uf : Wf : X ? Qn : On, mt = we ? n : nt(a);
        return dr(mt || a, function(et, _t) {
          mt && (_t = et, et = a[_t]), tl(W, _t, Pr(et, i, f, _t, a, M));
        }), W;
      }
      function yS(a) {
        var i = On(a);
        return function(f) {
          return wv(f, a, i);
        };
      }
      function wv(a, i, f) {
        var g = f.length;
        if (a == null)
          return !g;
        for (a = Kt(a); g--; ) {
          var w = f[g], M = i[w], W = a[w];
          if (W === n && !(w in a) || !M(W))
            return !1;
        }
        return !0;
      }
      function Ev(a, i, f) {
        if (typeof a != "function")
          throw new Sr(u);
        return ll(function() {
          a.apply(n, f);
        }, i);
      }
      function nl(a, i, f, g) {
        var w = -1, M = Rc, W = !0, Y = a.length, X = [], _e = i.length;
        if (!Y)
          return X;
        f && (i = sn(i, fr(f))), g ? (M = sf, W = !1) : i.length >= o && (M = Ks, W = !1, i = new ni(i));
        e:
          for (; ++w < Y; ) {
            var we = a[w], Oe = f == null ? we : f(we);
            if (we = g || we !== 0 ? we : 0, W && Oe === Oe) {
              for (var Le = _e; Le--; )
                if (i[Le] === Oe)
                  continue e;
              X.push(we);
            } else M(i, Oe, g) || X.push(we);
          }
        return X;
      }
      var go = Kv(ca), xv = Kv(xf, !0);
      function bS(a, i) {
        var f = !0;
        return go(a, function(g, w, M) {
          return f = !!i(g, w, M), f;
        }), f;
      }
      function Xc(a, i, f) {
        for (var g = -1, w = a.length; ++g < w; ) {
          var M = a[g], W = i(M);
          if (W != null && (Y === n ? W === W && !hr(W) : f(W, Y)))
            var Y = W, X = M;
        }
        return X;
      }
      function _S(a, i, f, g) {
        var w = a.length;
        for (f = pt(f), f < 0 && (f = -f > w ? 0 : w + f), g = g === n || g > w ? w : pt(g), g < 0 && (g += w), g = f > g ? 0 : Wy(g); f < g; )
          a[f++] = i;
        return a;
      }
      function Cv(a, i) {
        var f = [];
        return go(a, function(g, w, M) {
          i(g, w, M) && f.push(g);
        }), f;
      }
      function Nn(a, i, f, g, w) {
        var M = -1, W = a.length;
        for (f || (f = lT), w || (w = []); ++M < W; ) {
          var Y = a[M];
          i > 0 && f(Y) ? i > 1 ? Nn(Y, i - 1, f, g, w) : po(w, Y) : g || (w[w.length] = Y);
        }
        return w;
      }
      var Ef = Zv(), Ov = Zv(!0);
      function ca(a, i) {
        return a && Ef(a, i, On);
      }
      function xf(a, i) {
        return a && Ov(a, i, On);
      }
      function Qc(a, i) {
        return fo(i, function(f) {
          return Da(a[f]);
        });
      }
      function ai(a, i) {
        i = yo(i, a);
        for (var f = 0, g = i.length; a != null && f < g; )
          a = a[Vr(i[f++])];
        return f && f == g ? a : n;
      }
      function Sv(a, i, f) {
        var g = i(a);
        return ut(a) ? g : po(g, f(a));
      }
      function Wn(a) {
        return a == null ? a === n ? st : Q : ei && ei in Kt(a) ? nT(a) : mT(a);
      }
      function Cf(a, i) {
        return a > i;
      }
      function wS(a, i) {
        return a != null && $t.call(a, i);
      }
      function ES(a, i) {
        return a != null && i in Kt(a);
      }
      function xS(a, i, f) {
        return a >= Rn(i, f) && a < _n(i, f);
      }
      function Of(a, i, f) {
        for (var g = f ? sf : Rc, w = a[0].length, M = a.length, W = M, Y = ie(M), X = 1 / 0, _e = []; W--; ) {
          var we = a[W];
          W && i && (we = sn(we, fr(i))), X = Rn(we.length, X), Y[W] = !f && (i || w >= 120 && we.length >= 120) ? new ni(W && we) : n;
        }
        we = a[0];
        var Oe = -1, Le = Y[0];
        e:
          for (; ++Oe < w && _e.length < X; ) {
            var qe = we[Oe], nt = i ? i(qe) : qe;
            if (qe = f || qe !== 0 ? qe : 0, !(Le ? Ks(Le, nt) : g(_e, nt, f))) {
              for (W = M; --W; ) {
                var mt = Y[W];
                if (!(mt ? Ks(mt, nt) : g(a[W], nt, f)))
                  continue e;
              }
              Le && Le.push(nt), _e.push(qe);
            }
          }
        return _e;
      }
      function CS(a, i, f, g) {
        return ca(a, function(w, M, W) {
          i(g, f(w), M, W);
        }), g;
      }
      function rl(a, i, f) {
        i = yo(i, a), a = py(a, i);
        var g = a == null ? a : a[Vr(Nr(i))];
        return g == null ? n : ur(g, a, f);
      }
      function Tv(a) {
        return fn(a) && Wn(a) == ge;
      }
      function OS(a) {
        return fn(a) && Wn(a) == rt;
      }
      function SS(a) {
        return fn(a) && Wn(a) == j;
      }
      function al(a, i, f, g, w) {
        return a === i ? !0 : a == null || i == null || !fn(a) && !fn(i) ? a !== a && i !== i : TS(a, i, f, g, al, w);
      }
      function TS(a, i, f, g, w, M) {
        var W = ut(a), Y = ut(i), X = W ? ke : Mn(a), _e = Y ? ke : Mn(i);
        X = X == ge ? fe : X, _e = _e == ge ? fe : _e;
        var we = X == fe, Oe = _e == fe, Le = X == _e;
        if (Le && _o(a)) {
          if (!_o(i))
            return !1;
          W = !0, we = !1;
        }
        if (Le && !we)
          return M || (M = new qr()), W || Qi(a) ? iy(a, i, f, g, w, M) : eT(a, i, X, f, g, w, M);
        if (!(f & _)) {
          var qe = we && $t.call(a, "__wrapped__"), nt = Oe && $t.call(i, "__wrapped__");
          if (qe || nt) {
            var mt = qe ? a.value() : a, et = nt ? i.value() : i;
            return M || (M = new qr()), w(mt, et, f, g, M);
          }
        }
        return Le ? (M || (M = new qr()), tT(a, i, f, g, w, M)) : !1;
      }
      function PS(a) {
        return fn(a) && Mn(a) == le;
      }
      function Sf(a, i, f, g) {
        var w = f.length, M = w, W = !g;
        if (a == null)
          return !M;
        for (a = Kt(a); w--; ) {
          var Y = f[w];
          if (W && Y[2] ? Y[1] !== a[Y[0]] : !(Y[0] in a))
            return !1;
        }
        for (; ++w < M; ) {
          Y = f[w];
          var X = Y[0], _e = a[X], we = Y[1];
          if (W && Y[2]) {
            if (_e === n && !(X in a))
              return !1;
          } else {
            var Oe = new qr();
            if (g)
              var Le = g(_e, we, X, a, i, Oe);
            if (!(Le === n ? al(we, _e, _ | E, g, Oe) : Le))
              return !1;
          }
        }
        return !0;
      }
      function Pv(a) {
        if (!dn(a) || uT(a))
          return !1;
        var i = Da(a) ? PO : yC;
        return i.test(ii(a));
      }
      function kS(a) {
        return fn(a) && Wn(a) == ae;
      }
      function NS(a) {
        return fn(a) && Mn(a) == Ce;
      }
      function IS(a) {
        return fn(a) && mu(a.length) && !!en[Wn(a)];
      }
      function kv(a) {
        return typeof a == "function" ? a : a == null ? Jn : typeof a == "object" ? ut(a) ? Av(a[0], a[1]) : Iv(a) : Qy(a);
      }
      function Tf(a) {
        if (!sl(a))
          return MO(a);
        var i = [];
        for (var f in Kt(a))
          $t.call(a, f) && f != "constructor" && i.push(f);
        return i;
      }
      function AS(a) {
        if (!dn(a))
          return hT(a);
        var i = sl(a), f = [];
        for (var g in a)
          g == "constructor" && (i || !$t.call(a, g)) || f.push(g);
        return f;
      }
      function Pf(a, i) {
        return a < i;
      }
      function Nv(a, i) {
        var f = -1, g = Xn(a) ? ie(a.length) : [];
        return go(a, function(w, M, W) {
          g[++f] = i(w, M, W);
        }), g;
      }
      function Iv(a) {
        var i = zf(a);
        return i.length == 1 && i[0][2] ? dy(i[0][0], i[0][1]) : function(f) {
          return f === a || Sf(f, a, i);
        };
      }
      function Av(a, i) {
        return Yf(a) && uy(i) ? dy(Vr(a), i) : function(f) {
          var g = np(f, a);
          return g === n && g === i ? rp(f, a) : al(i, g, _ | E);
        };
      }
      function Jc(a, i, f, g, w) {
        a !== i && Ef(i, function(M, W) {
          if (w || (w = new qr()), dn(M))
            RS(a, i, W, f, Jc, g, w);
          else {
            var Y = g ? g(Vf(a, W), M, W + "", a, i, w) : n;
            Y === n && (Y = M), _f(a, W, Y);
          }
        }, Qn);
      }
      function RS(a, i, f, g, w, M, W) {
        var Y = Vf(a, f), X = Vf(i, f), _e = W.get(X);
        if (_e) {
          _f(a, f, _e);
          return;
        }
        var we = M ? M(Y, X, f + "", a, i, W) : n, Oe = we === n;
        if (Oe) {
          var Le = ut(X), qe = !Le && _o(X), nt = !Le && !qe && Qi(X);
          we = X, Le || qe || nt ? ut(Y) ? we = Y : hn(Y) ? we = Zn(Y) : qe ? (Oe = !1, we = Hv(X, !0)) : nt ? (Oe = !1, we = Yv(X, !0)) : we = [] : cl(X) || si(X) ? (we = Y, si(Y) ? we = Uy(Y) : (!dn(Y) || Da(Y)) && (we = cy(X))) : Oe = !1;
        }
        Oe && (W.set(X, we), w(we, X, g, M, W), W.delete(X)), _f(a, f, we);
      }
      function Rv(a, i) {
        var f = a.length;
        if (f)
          return i += i < 0 ? f : 0, Ma(i, f) ? a[i] : n;
      }
      function Mv(a, i, f) {
        i.length ? i = sn(i, function(M) {
          return ut(M) ? function(W) {
            return ai(W, M.length === 1 ? M[0] : M);
          } : M;
        }) : i = [Jn];
        var g = -1;
        i = sn(i, fr(tt()));
        var w = Nv(a, function(M, W, Y) {
          var X = sn(i, function(_e) {
            return _e(M);
          });
          return { criteria: X, index: ++g, value: M };
        });
        return iO(w, function(M, W) {
          return qS(M, W, f);
        });
      }
      function MS(a, i) {
        return Dv(a, i, function(f, g) {
          return rp(a, g);
        });
      }
      function Dv(a, i, f) {
        for (var g = -1, w = i.length, M = {}; ++g < w; ) {
          var W = i[g], Y = ai(a, W);
          f(Y, W) && ol(M, yo(W, a), Y);
        }
        return M;
      }
      function DS(a) {
        return function(i) {
          return ai(i, a);
        };
      }
      function kf(a, i, f, g) {
        var w = g ? oO : Ui, M = -1, W = i.length, Y = a;
        for (a === i && (i = Zn(i)), f && (Y = sn(a, fr(f))); ++M < W; )
          for (var X = 0, _e = i[M], we = f ? f(_e) : _e; (X = w(Y, we, X, g)) > -1; )
            Y !== a && zc.call(Y, X, 1), zc.call(a, X, 1);
        return a;
      }
      function Lv(a, i) {
        for (var f = a ? i.length : 0, g = f - 1; f--; ) {
          var w = i[f];
          if (f == g || w !== M) {
            var M = w;
            Ma(w) ? zc.call(a, w, 1) : Rf(a, w);
          }
        }
        return a;
      }
      function Nf(a, i) {
        return a + qc(gv() * (i - a + 1));
      }
      function LS(a, i, f, g) {
        for (var w = -1, M = _n(Yc((i - a) / (f || 1)), 0), W = ie(M); M--; )
          W[g ? M : ++w] = a, a += f;
        return W;
      }
      function If(a, i) {
        var f = "";
        if (!a || i < 1 || i > ye)
          return f;
        do
          i % 2 && (f += a), i = qc(i / 2), i && (a += a);
        while (i);
        return f;
      }
      function gt(a, i) {
        return Gf(fy(a, i, Jn), a + "");
      }
      function FS(a) {
        return bv(Ji(a));
      }
      function $S(a, i) {
        var f = Ji(a);
        return cu(f, ri(i, 0, f.length));
      }
      function ol(a, i, f, g) {
        if (!dn(a))
          return a;
        i = yo(i, a);
        for (var w = -1, M = i.length, W = M - 1, Y = a; Y != null && ++w < M; ) {
          var X = Vr(i[w]), _e = f;
          if (X === "__proto__" || X === "constructor" || X === "prototype")
            return a;
          if (w != W) {
            var we = Y[X];
            _e = g ? g(we, X, Y) : n, _e === n && (_e = dn(we) ? we : Ma(i[w + 1]) ? [] : {});
          }
          tl(Y, X, _e), Y = Y[X];
        }
        return a;
      }
      var Fv = Vc ? function(a, i) {
        return Vc.set(a, i), a;
      } : Jn, BS = Hc ? function(a, i) {
        return Hc(a, "toString", {
          configurable: !0,
          enumerable: !1,
          value: op(i),
          writable: !0
        });
      } : Jn;
      function WS(a) {
        return cu(Ji(a));
      }
      function kr(a, i, f) {
        var g = -1, w = a.length;
        i < 0 && (i = -i > w ? 0 : w + i), f = f > w ? w : f, f < 0 && (f += w), w = i > f ? 0 : f - i >>> 0, i >>>= 0;
        for (var M = ie(w); ++g < w; )
          M[g] = a[g + i];
        return M;
      }
      function US(a, i) {
        var f;
        return go(a, function(g, w, M) {
          return f = i(g, w, M), !f;
        }), !!f;
      }
      function eu(a, i, f) {
        var g = 0, w = a == null ? g : a.length;
        if (typeof i == "number" && i === i && w <= Pe) {
          for (; g < w; ) {
            var M = g + w >>> 1, W = a[M];
            W !== null && !hr(W) && (f ? W <= i : W < i) ? g = M + 1 : w = M;
          }
          return w;
        }
        return Af(a, i, Jn, f);
      }
      function Af(a, i, f, g) {
        var w = 0, M = a == null ? 0 : a.length;
        if (M === 0)
          return 0;
        i = f(i);
        for (var W = i !== i, Y = i === null, X = hr(i), _e = i === n; w < M; ) {
          var we = qc((w + M) / 2), Oe = f(a[we]), Le = Oe !== n, qe = Oe === null, nt = Oe === Oe, mt = hr(Oe);
          if (W)
            var et = g || nt;
          else _e ? et = nt && (g || Le) : Y ? et = nt && Le && (g || !qe) : X ? et = nt && Le && !qe && (g || !mt) : qe || mt ? et = !1 : et = g ? Oe <= i : Oe < i;
          et ? w = we + 1 : M = we;
        }
        return Rn(M, Ee);
      }
      function $v(a, i) {
        for (var f = -1, g = a.length, w = 0, M = []; ++f < g; ) {
          var W = a[f], Y = i ? i(W) : W;
          if (!f || !Gr(Y, X)) {
            var X = Y;
            M[w++] = W === 0 ? 0 : W;
          }
        }
        return M;
      }
      function Bv(a) {
        return typeof a == "number" ? a : hr(a) ? oe : +a;
      }
      function pr(a) {
        if (typeof a == "string")
          return a;
        if (ut(a))
          return sn(a, pr) + "";
        if (hr(a))
          return vv ? vv.call(a) : "";
        var i = a + "";
        return i == "0" && 1 / a == -de ? "-0" : i;
      }
      function vo(a, i, f) {
        var g = -1, w = Rc, M = a.length, W = !0, Y = [], X = Y;
        if (f)
          W = !1, w = sf;
        else if (M >= o) {
          var _e = i ? null : QS(a);
          if (_e)
            return Dc(_e);
          W = !1, w = Ks, X = new ni();
        } else
          X = i ? [] : Y;
        e:
          for (; ++g < M; ) {
            var we = a[g], Oe = i ? i(we) : we;
            if (we = f || we !== 0 ? we : 0, W && Oe === Oe) {
              for (var Le = X.length; Le--; )
                if (X[Le] === Oe)
                  continue e;
              i && X.push(Oe), Y.push(we);
            } else w(X, Oe, f) || (X !== Y && X.push(Oe), Y.push(we));
          }
        return Y;
      }
      function Rf(a, i) {
        i = yo(i, a);
        var f = -1, g = i.length;
        if (!g)
          return !0;
        for (; ++f < g; ) {
          var w = Vr(i[f]);
          if (w === "__proto__" && !$t.call(a, "__proto__") || (w === "constructor" || w === "prototype") && f < g - 1)
            return !1;
        }
        var M = py(a, i);
        return M == null || delete M[Vr(Nr(i))];
      }
      function Wv(a, i, f, g) {
        return ol(a, i, f(ai(a, i)), g);
      }
      function tu(a, i, f, g) {
        for (var w = a.length, M = g ? w : -1; (g ? M-- : ++M < w) && i(a[M], M, a); )
          ;
        return f ? kr(a, g ? 0 : M, g ? M + 1 : w) : kr(a, g ? M + 1 : 0, g ? w : M);
      }
      function Uv(a, i) {
        var f = a;
        return f instanceof Ct && (f = f.value()), lf(i, function(g, w) {
          return w.func.apply(w.thisArg, po([g], w.args));
        }, f);
      }
      function Mf(a, i, f) {
        var g = a.length;
        if (g < 2)
          return g ? vo(a[0]) : [];
        for (var w = -1, M = ie(g); ++w < g; )
          for (var W = a[w], Y = -1; ++Y < g; )
            Y != w && (M[w] = nl(M[w] || W, a[Y], i, f));
        return vo(Nn(M, 1), i, f);
      }
      function jv(a, i, f) {
        for (var g = -1, w = a.length, M = i.length, W = {}; ++g < w; ) {
          var Y = g < M ? i[g] : n;
          f(W, a[g], Y);
        }
        return W;
      }
      function Df(a) {
        return hn(a) ? a : [];
      }
      function Lf(a) {
        return typeof a == "function" ? a : Jn;
      }
      function yo(a, i) {
        return ut(a) ? a : Yf(a, i) ? [a] : vy(Bt(a));
      }
      var jS = gt;
      function bo(a, i, f) {
        var g = a.length;
        return f = f === n ? g : f, !i && f >= g ? a : kr(a, i, f);
      }
      var zv = kO || function(a) {
        return kn.clearTimeout(a);
      };
      function Hv(a, i) {
        if (i)
          return a.slice();
        var f = a.length, g = dv ? dv(f) : new a.constructor(f);
        return a.copy(g), g;
      }
      function Ff(a) {
        var i = new a.constructor(a.byteLength);
        return new Uc(i).set(new Uc(a)), i;
      }
      function zS(a, i) {
        var f = i ? Ff(a.buffer) : a.buffer;
        return new a.constructor(f, a.byteOffset, a.byteLength);
      }
      function HS(a) {
        var i = new a.constructor(a.source, Tg.exec(a));
        return i.lastIndex = a.lastIndex, i;
      }
      function YS(a) {
        return el ? Kt(el.call(a)) : {};
      }
      function Yv(a, i) {
        var f = i ? Ff(a.buffer) : a.buffer;
        return new a.constructor(f, a.byteOffset, a.length);
      }
      function qv(a, i) {
        if (a !== i) {
          var f = a !== n, g = a === null, w = a === a, M = hr(a), W = i !== n, Y = i === null, X = i === i, _e = hr(i);
          if (!Y && !_e && !M && a > i || M && W && X && !Y && !_e || g && W && X || !f && X || !w)
            return 1;
          if (!g && !M && !_e && a < i || _e && f && w && !g && !M || Y && f && w || !W && w || !X)
            return -1;
        }
        return 0;
      }
      function qS(a, i, f) {
        for (var g = -1, w = a.criteria, M = i.criteria, W = w.length, Y = f.length; ++g < W; ) {
          var X = qv(w[g], M[g]);
          if (X) {
            if (g >= Y)
              return X;
            var _e = f[g];
            return X * (_e == "desc" ? -1 : 1);
          }
        }
        return a.index - i.index;
      }
      function Vv(a, i, f, g) {
        for (var w = -1, M = a.length, W = f.length, Y = -1, X = i.length, _e = _n(M - W, 0), we = ie(X + _e), Oe = !g; ++Y < X; )
          we[Y] = i[Y];
        for (; ++w < W; )
          (Oe || w < M) && (we[f[w]] = a[w]);
        for (; _e--; )
          we[Y++] = a[w++];
        return we;
      }
      function Gv(a, i, f, g) {
        for (var w = -1, M = a.length, W = -1, Y = f.length, X = -1, _e = i.length, we = _n(M - Y, 0), Oe = ie(we + _e), Le = !g; ++w < we; )
          Oe[w] = a[w];
        for (var qe = w; ++X < _e; )
          Oe[qe + X] = i[X];
        for (; ++W < Y; )
          (Le || w < M) && (Oe[qe + f[W]] = a[w++]);
        return Oe;
      }
      function Zn(a, i) {
        var f = -1, g = a.length;
        for (i || (i = ie(g)); ++f < g; )
          i[f] = a[f];
        return i;
      }
      function ua(a, i, f, g) {
        var w = !f;
        f || (f = {});
        for (var M = -1, W = i.length; ++M < W; ) {
          var Y = i[M], X = g ? g(f[Y], a[Y], Y, f, a) : n;
          X === n && (X = a[Y]), w ? la(f, Y, X) : tl(f, Y, X);
        }
        return f;
      }
      function VS(a, i) {
        return ua(a, Hf(a), i);
      }
      function GS(a, i) {
        return ua(a, sy(a), i);
      }
      function nu(a, i) {
        return function(f, g) {
          var w = ut(f) ? JC : gS, M = i ? i() : {};
          return w(f, a, tt(g, 2), M);
        };
      }
      function Ki(a) {
        return gt(function(i, f) {
          var g = -1, w = f.length, M = w > 1 ? f[w - 1] : n, W = w > 2 ? f[2] : n;
          for (M = a.length > 3 && typeof M == "function" ? (w--, M) : n, W && Un(f[0], f[1], W) && (M = w < 3 ? n : M, w = 1), i = Kt(i); ++g < w; ) {
            var Y = f[g];
            Y && a(i, Y, g, M);
          }
          return i;
        });
      }
      function Kv(a, i) {
        return function(f, g) {
          if (f == null)
            return f;
          if (!Xn(f))
            return a(f, g);
          for (var w = f.length, M = i ? w : -1, W = Kt(f); (i ? M-- : ++M < w) && g(W[M], M, W) !== !1; )
            ;
          return f;
        };
      }
      function Zv(a) {
        return function(i, f, g) {
          for (var w = -1, M = Kt(i), W = g(i), Y = W.length; Y--; ) {
            var X = W[a ? Y : ++w];
            if (f(M[X], X, M) === !1)
              break;
          }
          return i;
        };
      }
      function KS(a, i, f) {
        var g = i & A, w = il(a);
        function M() {
          var W = this && this !== kn && this instanceof M ? w : a;
          return W.apply(g ? f : this, arguments);
        }
        return M;
      }
      function Xv(a) {
        return function(i) {
          i = Bt(i);
          var f = ji(i) ? Yr(i) : n, g = f ? f[0] : i.charAt(0), w = f ? bo(f, 1).join("") : i.slice(1);
          return g[a]() + w;
        };
      }
      function Zi(a) {
        return function(i) {
          return lf(Zy(Ky(i).replace(BC, "")), a, "");
        };
      }
      function il(a) {
        return function() {
          var i = arguments;
          switch (i.length) {
            case 0:
              return new a();
            case 1:
              return new a(i[0]);
            case 2:
              return new a(i[0], i[1]);
            case 3:
              return new a(i[0], i[1], i[2]);
            case 4:
              return new a(i[0], i[1], i[2], i[3]);
            case 5:
              return new a(i[0], i[1], i[2], i[3], i[4]);
            case 6:
              return new a(i[0], i[1], i[2], i[3], i[4], i[5]);
            case 7:
              return new a(i[0], i[1], i[2], i[3], i[4], i[5], i[6]);
          }
          var f = Gi(a.prototype), g = a.apply(f, i);
          return dn(g) ? g : f;
        };
      }
      function ZS(a, i, f) {
        var g = il(a);
        function w() {
          for (var M = arguments.length, W = ie(M), Y = M, X = Xi(w); Y--; )
            W[Y] = arguments[Y];
          var _e = M < 3 && W[0] !== X && W[M - 1] !== X ? [] : ho(W, X);
          if (M -= _e.length, M < f)
            return ny(
              a,
              i,
              ru,
              w.placeholder,
              n,
              W,
              _e,
              n,
              n,
              f - M
            );
          var we = this && this !== kn && this instanceof w ? g : a;
          return ur(we, this, W);
        }
        return w;
      }
      function Qv(a) {
        return function(i, f, g) {
          var w = Kt(i);
          if (!Xn(i)) {
            var M = tt(f, 3);
            i = On(i), f = function(Y) {
              return M(w[Y], Y, w);
            };
          }
          var W = a(i, f, g);
          return W > -1 ? w[M ? i[W] : W] : n;
        };
      }
      function Jv(a) {
        return Ra(function(i) {
          var f = i.length, g = f, w = Tr.prototype.thru;
          for (a && i.reverse(); g--; ) {
            var M = i[g];
            if (typeof M != "function")
              throw new Sr(u);
            if (w && !W && su(M) == "wrapper")
              var W = new Tr([], !0);
          }
          for (g = W ? g : f; ++g < f; ) {
            M = i[g];
            var Y = su(M), X = Y == "wrapper" ? jf(M) : n;
            X && qf(X[0]) && X[1] == (T | I | S | N) && !X[4].length && X[9] == 1 ? W = W[su(X[0])].apply(W, X[3]) : W = M.length == 1 && qf(M) ? W[Y]() : W.thru(M);
          }
          return function() {
            var _e = arguments, we = _e[0];
            if (W && _e.length == 1 && ut(we))
              return W.plant(we).value();
            for (var Oe = 0, Le = f ? i[Oe].apply(this, _e) : we; ++Oe < f; )
              Le = i[Oe].call(this, Le);
            return Le;
          };
        });
      }
      function ru(a, i, f, g, w, M, W, Y, X, _e) {
        var we = i & T, Oe = i & A, Le = i & F, qe = i & (I | O), nt = i & B, mt = Le ? n : il(a);
        function et() {
          for (var _t = arguments.length, Tt = ie(_t), mr = _t; mr--; )
            Tt[mr] = arguments[mr];
          if (qe)
            var jn = Xi(et), gr = lO(Tt, jn);
          if (g && (Tt = Vv(Tt, g, w, qe)), M && (Tt = Gv(Tt, M, W, qe)), _t -= gr, qe && _t < _e) {
            var mn = ho(Tt, jn);
            return ny(
              a,
              i,
              ru,
              et.placeholder,
              f,
              Tt,
              mn,
              Y,
              X,
              _e - _t
            );
          }
          var Kr = Oe ? f : this, Fa = Le ? Kr[a] : a;
          return _t = Tt.length, Y ? Tt = gT(Tt, Y) : nt && _t > 1 && Tt.reverse(), we && X < _t && (Tt.length = X), this && this !== kn && this instanceof et && (Fa = mt || il(Fa)), Fa.apply(Kr, Tt);
        }
        return et;
      }
      function ey(a, i) {
        return function(f, g) {
          return CS(f, a, i(g), {});
        };
      }
      function au(a, i) {
        return function(f, g) {
          var w;
          if (f === n && g === n)
            return i;
          if (f !== n && (w = f), g !== n) {
            if (w === n)
              return g;
            typeof f == "string" || typeof g == "string" ? (f = pr(f), g = pr(g)) : (f = Bv(f), g = Bv(g)), w = a(f, g);
          }
          return w;
        };
      }
      function $f(a) {
        return Ra(function(i) {
          return i = sn(i, fr(tt())), gt(function(f) {
            var g = this;
            return a(i, function(w) {
              return ur(w, g, f);
            });
          });
        });
      }
      function ou(a, i) {
        i = i === n ? " " : pr(i);
        var f = i.length;
        if (f < 2)
          return f ? If(i, a) : i;
        var g = If(i, Yc(a / zi(i)));
        return ji(i) ? bo(Yr(g), 0, a).join("") : g.slice(0, a);
      }
      function XS(a, i, f, g) {
        var w = i & A, M = il(a);
        function W() {
          for (var Y = -1, X = arguments.length, _e = -1, we = g.length, Oe = ie(we + X), Le = this && this !== kn && this instanceof W ? M : a; ++_e < we; )
            Oe[_e] = g[_e];
          for (; X--; )
            Oe[_e++] = arguments[++Y];
          return ur(Le, w ? f : this, Oe);
        }
        return W;
      }
      function ty(a) {
        return function(i, f, g) {
          return g && typeof g != "number" && Un(i, f, g) && (f = g = n), i = La(i), f === n ? (f = i, i = 0) : f = La(f), g = g === n ? i < f ? 1 : -1 : La(g), LS(i, f, g, a);
        };
      }
      function iu(a) {
        return function(i, f) {
          return typeof i == "string" && typeof f == "string" || (i = Ir(i), f = Ir(f)), a(i, f);
        };
      }
      function ny(a, i, f, g, w, M, W, Y, X, _e) {
        var we = i & I, Oe = we ? W : n, Le = we ? n : W, qe = we ? M : n, nt = we ? n : M;
        i |= we ? S : C, i &= ~(we ? C : S), i & x || (i &= -4);
        var mt = [
          a,
          i,
          w,
          qe,
          Oe,
          nt,
          Le,
          Y,
          X,
          _e
        ], et = f.apply(n, mt);
        return qf(a) && hy(et, mt), et.placeholder = g, my(et, a, i);
      }
      function Bf(a) {
        var i = bn[a];
        return function(f, g) {
          if (f = Ir(f), g = g == null ? 0 : Rn(pt(g), 292), g && mv(f)) {
            var w = (Bt(f) + "e").split("e"), M = i(w[0] + "e" + (+w[1] + g));
            return w = (Bt(M) + "e").split("e"), +(w[0] + "e" + (+w[1] - g));
          }
          return i(f);
        };
      }
      var QS = qi && 1 / Dc(new qi([, -0]))[1] == de ? function(a) {
        return new qi(a);
      } : lp;
      function ry(a) {
        return function(i) {
          var f = Mn(i);
          return f == le ? mf(i) : f == Ce ? mO(i) : sO(i, a(i));
        };
      }
      function Aa(a, i, f, g, w, M, W, Y) {
        var X = i & F;
        if (!X && typeof a != "function")
          throw new Sr(u);
        var _e = g ? g.length : 0;
        if (_e || (i &= -97, g = w = n), W = W === n ? W : _n(pt(W), 0), Y = Y === n ? Y : pt(Y), _e -= w ? w.length : 0, i & C) {
          var we = g, Oe = w;
          g = w = n;
        }
        var Le = X ? n : jf(a), qe = [
          a,
          i,
          f,
          g,
          w,
          we,
          Oe,
          M,
          W,
          Y
        ];
        if (Le && pT(qe, Le), a = qe[0], i = qe[1], f = qe[2], g = qe[3], w = qe[4], Y = qe[9] = qe[9] === n ? X ? 0 : a.length : _n(qe[9] - _e, 0), !Y && i & (I | O) && (i &= -25), !i || i == A)
          var nt = KS(a, i, f);
        else i == I || i == O ? nt = ZS(a, i, Y) : (i == S || i == (A | S)) && !w.length ? nt = XS(a, i, f, g) : nt = ru.apply(n, qe);
        var mt = Le ? Fv : hy;
        return my(mt(nt, qe), a, i);
      }
      function ay(a, i, f, g) {
        return a === n || Gr(a, Yi[f]) && !$t.call(g, f) ? i : a;
      }
      function oy(a, i, f, g, w, M) {
        return dn(a) && dn(i) && (M.set(i, a), Jc(a, i, n, oy, M), M.delete(i)), a;
      }
      function JS(a) {
        return cl(a) ? n : a;
      }
      function iy(a, i, f, g, w, M) {
        var W = f & _, Y = a.length, X = i.length;
        if (Y != X && !(W && X > Y))
          return !1;
        var _e = M.get(a), we = M.get(i);
        if (_e && we)
          return _e == i && we == a;
        var Oe = -1, Le = !0, qe = f & E ? new ni() : n;
        for (M.set(a, i), M.set(i, a); ++Oe < Y; ) {
          var nt = a[Oe], mt = i[Oe];
          if (g)
            var et = W ? g(mt, nt, Oe, i, a, M) : g(nt, mt, Oe, a, i, M);
          if (et !== n) {
            if (et)
              continue;
            Le = !1;
            break;
          }
          if (qe) {
            if (!cf(i, function(_t, Tt) {
              if (!Ks(qe, Tt) && (nt === _t || w(nt, _t, f, g, M)))
                return qe.push(Tt);
            })) {
              Le = !1;
              break;
            }
          } else if (!(nt === mt || w(nt, mt, f, g, M))) {
            Le = !1;
            break;
          }
        }
        return M.delete(a), M.delete(i), Le;
      }
      function eT(a, i, f, g, w, M, W) {
        switch (f) {
          case Ke:
            if (a.byteLength != i.byteLength || a.byteOffset != i.byteOffset)
              return !1;
            a = a.buffer, i = i.buffer;
          case rt:
            return !(a.byteLength != i.byteLength || !M(new Uc(a), new Uc(i)));
          case U:
          case j:
          case pe:
            return Gr(+a, +i);
          case D:
            return a.name == i.name && a.message == i.message;
          case ae:
          case Fe:
            return a == i + "";
          case le:
            var Y = mf;
          case Ce:
            var X = g & _;
            if (Y || (Y = Dc), a.size != i.size && !X)
              return !1;
            var _e = W.get(a);
            if (_e)
              return _e == i;
            g |= E, W.set(a, i);
            var we = iy(Y(a), Y(i), g, w, M, W);
            return W.delete(a), we;
          case $e:
            if (el)
              return el.call(a) == el.call(i);
        }
        return !1;
      }
      function tT(a, i, f, g, w, M) {
        var W = f & _, Y = Wf(a), X = Y.length, _e = Wf(i), we = _e.length;
        if (X != we && !W)
          return !1;
        for (var Oe = X; Oe--; ) {
          var Le = Y[Oe];
          if (!(W ? Le in i : $t.call(i, Le)))
            return !1;
        }
        var qe = M.get(a), nt = M.get(i);
        if (qe && nt)
          return qe == i && nt == a;
        var mt = !0;
        M.set(a, i), M.set(i, a);
        for (var et = W; ++Oe < X; ) {
          Le = Y[Oe];
          var _t = a[Le], Tt = i[Le];
          if (g)
            var mr = W ? g(Tt, _t, Le, i, a, M) : g(_t, Tt, Le, a, i, M);
          if (!(mr === n ? _t === Tt || w(_t, Tt, f, g, M) : mr)) {
            mt = !1;
            break;
          }
          et || (et = Le == "constructor");
        }
        if (mt && !et) {
          var jn = a.constructor, gr = i.constructor;
          jn != gr && "constructor" in a && "constructor" in i && !(typeof jn == "function" && jn instanceof jn && typeof gr == "function" && gr instanceof gr) && (mt = !1);
        }
        return M.delete(a), M.delete(i), mt;
      }
      function Ra(a) {
        return Gf(fy(a, n, wy), a + "");
      }
      function Wf(a) {
        return Sv(a, On, Hf);
      }
      function Uf(a) {
        return Sv(a, Qn, sy);
      }
      var jf = Vc ? function(a) {
        return Vc.get(a);
      } : lp;
      function su(a) {
        for (var i = a.name + "", f = Vi[i], g = $t.call(Vi, i) ? f.length : 0; g--; ) {
          var w = f[g], M = w.func;
          if (M == null || M == a)
            return w.name;
        }
        return i;
      }
      function Xi(a) {
        var i = $t.call(P, "placeholder") ? P : a;
        return i.placeholder;
      }
      function tt() {
        var a = P.iteratee || ip;
        return a = a === ip ? kv : a, arguments.length ? a(arguments[0], arguments[1]) : a;
      }
      function lu(a, i) {
        var f = a.__data__;
        return cT(i) ? f[typeof i == "string" ? "string" : "hash"] : f.map;
      }
      function zf(a) {
        for (var i = On(a), f = i.length; f--; ) {
          var g = i[f], w = a[g];
          i[f] = [g, w, uy(w)];
        }
        return i;
      }
      function oi(a, i) {
        var f = fO(a, i);
        return Pv(f) ? f : n;
      }
      function nT(a) {
        var i = $t.call(a, ei), f = a[ei];
        try {
          a[ei] = n;
          var g = !0;
        } catch {
        }
        var w = Bc.call(a);
        return g && (i ? a[ei] = f : delete a[ei]), w;
      }
      var Hf = vf ? function(a) {
        return a == null ? [] : (a = Kt(a), fo(vf(a), function(i) {
          return pv.call(a, i);
        }));
      } : cp, sy = vf ? function(a) {
        for (var i = []; a; )
          po(i, Hf(a)), a = jc(a);
        return i;
      } : cp, Mn = Wn;
      (yf && Mn(new yf(new ArrayBuffer(1))) != Ke || Xs && Mn(new Xs()) != le || bf && Mn(bf.resolve()) != te || qi && Mn(new qi()) != Ce || Qs && Mn(new Qs()) != Ve) && (Mn = function(a) {
        var i = Wn(a), f = i == fe ? a.constructor : n, g = f ? ii(f) : "";
        if (g)
          switch (g) {
            case $O:
              return Ke;
            case BO:
              return le;
            case WO:
              return te;
            case UO:
              return Ce;
            case jO:
              return Ve;
          }
        return i;
      });
      function rT(a, i, f) {
        for (var g = -1, w = f.length; ++g < w; ) {
          var M = f[g], W = M.size;
          switch (M.type) {
            case "drop":
              a += W;
              break;
            case "dropRight":
              i -= W;
              break;
            case "take":
              i = Rn(i, a + W);
              break;
            case "takeRight":
              a = _n(a, i - W);
              break;
          }
        }
        return { start: a, end: i };
      }
      function aT(a) {
        var i = a.match(dC);
        return i ? i[1].split(fC) : [];
      }
      function ly(a, i, f) {
        i = yo(i, a);
        for (var g = -1, w = i.length, M = !1; ++g < w; ) {
          var W = Vr(i[g]);
          if (!(M = a != null && f(a, W)))
            break;
          a = a[W];
        }
        return M || ++g != w ? M : (w = a == null ? 0 : a.length, !!w && mu(w) && Ma(W, w) && (ut(a) || si(a)));
      }
      function oT(a) {
        var i = a.length, f = new a.constructor(i);
        return i && typeof a[0] == "string" && $t.call(a, "index") && (f.index = a.index, f.input = a.input), f;
      }
      function cy(a) {
        return typeof a.constructor == "function" && !sl(a) ? Gi(jc(a)) : {};
      }
      function iT(a, i, f) {
        var g = a.constructor;
        switch (i) {
          case rt:
            return Ff(a);
          case U:
          case j:
            return new g(+a);
          case Ke:
            return zS(a, f);
          case Xe:
          case Nt:
          case be:
          case It:
          case At:
          case ft:
          case Je:
          case Gt:
          case We:
            return Yv(a, f);
          case le:
            return new g();
          case pe:
          case Fe:
            return new g(a);
          case ae:
            return HS(a);
          case Ce:
            return new g();
          case $e:
            return YS(a);
        }
      }
      function sT(a, i) {
        var f = i.length;
        if (!f)
          return a;
        var g = f - 1;
        return i[g] = (f > 1 ? "& " : "") + i[g], i = i.join(f > 2 ? ", " : " "), a.replace(uC, `{
/* [wrapped with ` + i + `] */
`);
      }
      function lT(a) {
        return ut(a) || si(a) || !!(hv && a && a[hv]);
      }
      function Ma(a, i) {
        var f = typeof a;
        return i = i ?? ye, !!i && (f == "number" || f != "symbol" && _C.test(a)) && a > -1 && a % 1 == 0 && a < i;
      }
      function Un(a, i, f) {
        if (!dn(f))
          return !1;
        var g = typeof i;
        return (g == "number" ? Xn(f) && Ma(i, f.length) : g == "string" && i in f) ? Gr(f[i], a) : !1;
      }
      function Yf(a, i) {
        if (ut(a))
          return !1;
        var f = typeof a;
        return f == "number" || f == "symbol" || f == "boolean" || a == null || hr(a) ? !0 : iC.test(a) || !oC.test(a) || i != null && a in Kt(i);
      }
      function cT(a) {
        var i = typeof a;
        return i == "string" || i == "number" || i == "symbol" || i == "boolean" ? a !== "__proto__" : a === null;
      }
      function qf(a) {
        var i = su(a), f = P[i];
        if (typeof f != "function" || !(i in Ct.prototype))
          return !1;
        if (a === f)
          return !0;
        var g = jf(f);
        return !!g && a === g[0];
      }
      function uT(a) {
        return !!uv && uv in a;
      }
      var dT = Fc ? Da : up;
      function sl(a) {
        var i = a && a.constructor, f = typeof i == "function" && i.prototype || Yi;
        return a === f;
      }
      function uy(a) {
        return a === a && !dn(a);
      }
      function dy(a, i) {
        return function(f) {
          return f == null ? !1 : f[a] === i && (i !== n || a in Kt(f));
        };
      }
      function fT(a) {
        var i = pu(a, function(g) {
          return f.size === h && f.clear(), g;
        }), f = i.cache;
        return i;
      }
      function pT(a, i) {
        var f = a[1], g = i[1], w = f | g, M = w < (A | F | T), W = g == T && f == I || g == T && f == N && a[7].length <= i[8] || g == (T | N) && i[7].length <= i[8] && f == I;
        if (!(M || W))
          return a;
        g & A && (a[2] = i[2], w |= f & A ? 0 : x);
        var Y = i[3];
        if (Y) {
          var X = a[3];
          a[3] = X ? Vv(X, Y, i[4]) : Y, a[4] = X ? ho(a[3], m) : i[4];
        }
        return Y = i[5], Y && (X = a[5], a[5] = X ? Gv(X, Y, i[6]) : Y, a[6] = X ? ho(a[5], m) : i[6]), Y = i[7], Y && (a[7] = Y), g & T && (a[8] = a[8] == null ? i[8] : Rn(a[8], i[8])), a[9] == null && (a[9] = i[9]), a[0] = i[0], a[1] = w, a;
      }
      function hT(a) {
        var i = [];
        if (a != null)
          for (var f in Kt(a))
            i.push(f);
        return i;
      }
      function mT(a) {
        return Bc.call(a);
      }
      function fy(a, i, f) {
        return i = _n(i === n ? a.length - 1 : i, 0), function() {
          for (var g = arguments, w = -1, M = _n(g.length - i, 0), W = ie(M); ++w < M; )
            W[w] = g[i + w];
          w = -1;
          for (var Y = ie(i + 1); ++w < i; )
            Y[w] = g[w];
          return Y[i] = f(W), ur(a, this, Y);
        };
      }
      function py(a, i) {
        return i.length < 2 ? a : ai(a, kr(i, 0, -1));
      }
      function gT(a, i) {
        for (var f = a.length, g = Rn(i.length, f), w = Zn(a); g--; ) {
          var M = i[g];
          a[g] = Ma(M, f) ? w[M] : n;
        }
        return a;
      }
      function Vf(a, i) {
        if (!(i === "constructor" && typeof a[i] == "function") && i != "__proto__")
          return a[i];
      }
      var hy = gy(Fv), ll = IO || function(a, i) {
        return kn.setTimeout(a, i);
      }, Gf = gy(BS);
      function my(a, i, f) {
        var g = i + "";
        return Gf(a, sT(g, vT(aT(g), f)));
      }
      function gy(a) {
        var i = 0, f = 0;
        return function() {
          var g = DO(), w = re - (g - f);
          if (f = g, w > 0) {
            if (++i >= z)
              return arguments[0];
          } else
            i = 0;
          return a.apply(n, arguments);
        };
      }
      function cu(a, i) {
        var f = -1, g = a.length, w = g - 1;
        for (i = i === n ? g : i; ++f < i; ) {
          var M = Nf(f, w), W = a[M];
          a[M] = a[f], a[f] = W;
        }
        return a.length = i, a;
      }
      var vy = fT(function(a) {
        var i = [];
        return a.charCodeAt(0) === 46 && i.push(""), a.replace(sC, function(f, g, w, M) {
          i.push(w ? M.replace(hC, "$1") : g || f);
        }), i;
      });
      function Vr(a) {
        if (typeof a == "string" || hr(a))
          return a;
        var i = a + "";
        return i == "0" && 1 / a == -de ? "-0" : i;
      }
      function ii(a) {
        if (a != null) {
          try {
            return $c.call(a);
          } catch {
          }
          try {
            return a + "";
          } catch {
          }
        }
        return "";
      }
      function vT(a, i) {
        return dr(Se, function(f) {
          var g = "_." + f[0];
          i & f[1] && !Rc(a, g) && a.push(g);
        }), a.sort();
      }
      function yy(a) {
        if (a instanceof Ct)
          return a.clone();
        var i = new Tr(a.__wrapped__, a.__chain__);
        return i.__actions__ = Zn(a.__actions__), i.__index__ = a.__index__, i.__values__ = a.__values__, i;
      }
      function yT(a, i, f) {
        (f ? Un(a, i, f) : i === n) ? i = 1 : i = _n(pt(i), 0);
        var g = a == null ? 0 : a.length;
        if (!g || i < 1)
          return [];
        for (var w = 0, M = 0, W = ie(Yc(g / i)); w < g; )
          W[M++] = kr(a, w, w += i);
        return W;
      }
      function bT(a) {
        for (var i = -1, f = a == null ? 0 : a.length, g = 0, w = []; ++i < f; ) {
          var M = a[i];
          M && (w[g++] = M);
        }
        return w;
      }
      function _T() {
        var a = arguments.length;
        if (!a)
          return [];
        for (var i = ie(a - 1), f = arguments[0], g = a; g--; )
          i[g - 1] = arguments[g];
        return po(ut(f) ? Zn(f) : [f], Nn(i, 1));
      }
      var wT = gt(function(a, i) {
        return hn(a) ? nl(a, Nn(i, 1, hn, !0)) : [];
      }), ET = gt(function(a, i) {
        var f = Nr(i);
        return hn(f) && (f = n), hn(a) ? nl(a, Nn(i, 1, hn, !0), tt(f, 2)) : [];
      }), xT = gt(function(a, i) {
        var f = Nr(i);
        return hn(f) && (f = n), hn(a) ? nl(a, Nn(i, 1, hn, !0), n, f) : [];
      });
      function CT(a, i, f) {
        var g = a == null ? 0 : a.length;
        return g ? (i = f || i === n ? 1 : pt(i), kr(a, i < 0 ? 0 : i, g)) : [];
      }
      function OT(a, i, f) {
        var g = a == null ? 0 : a.length;
        return g ? (i = f || i === n ? 1 : pt(i), i = g - i, kr(a, 0, i < 0 ? 0 : i)) : [];
      }
      function ST(a, i) {
        return a && a.length ? tu(a, tt(i, 3), !0, !0) : [];
      }
      function TT(a, i) {
        return a && a.length ? tu(a, tt(i, 3), !0) : [];
      }
      function PT(a, i, f, g) {
        var w = a == null ? 0 : a.length;
        return w ? (f && typeof f != "number" && Un(a, i, f) && (f = 0, g = w), _S(a, i, f, g)) : [];
      }
      function by(a, i, f) {
        var g = a == null ? 0 : a.length;
        if (!g)
          return -1;
        var w = f == null ? 0 : pt(f);
        return w < 0 && (w = _n(g + w, 0)), Mc(a, tt(i, 3), w);
      }
      function _y(a, i, f) {
        var g = a == null ? 0 : a.length;
        if (!g)
          return -1;
        var w = g - 1;
        return f !== n && (w = pt(f), w = f < 0 ? _n(g + w, 0) : Rn(w, g - 1)), Mc(a, tt(i, 3), w, !0);
      }
      function wy(a) {
        var i = a == null ? 0 : a.length;
        return i ? Nn(a, 1) : [];
      }
      function kT(a) {
        var i = a == null ? 0 : a.length;
        return i ? Nn(a, de) : [];
      }
      function NT(a, i) {
        var f = a == null ? 0 : a.length;
        return f ? (i = i === n ? 1 : pt(i), Nn(a, i)) : [];
      }
      function IT(a) {
        for (var i = -1, f = a == null ? 0 : a.length, g = {}; ++i < f; ) {
          var w = a[i];
          la(g, w[0], w[1]);
        }
        return g;
      }
      function Ey(a) {
        return a && a.length ? a[0] : n;
      }
      function AT(a, i, f) {
        var g = a == null ? 0 : a.length;
        if (!g)
          return -1;
        var w = f == null ? 0 : pt(f);
        return w < 0 && (w = _n(g + w, 0)), Ui(a, i, w);
      }
      function RT(a) {
        var i = a == null ? 0 : a.length;
        return i ? kr(a, 0, -1) : [];
      }
      var MT = gt(function(a) {
        var i = sn(a, Df);
        return i.length && i[0] === a[0] ? Of(i) : [];
      }), DT = gt(function(a) {
        var i = Nr(a), f = sn(a, Df);
        return i === Nr(f) ? i = n : f.pop(), f.length && f[0] === a[0] ? Of(f, tt(i, 2)) : [];
      }), LT = gt(function(a) {
        var i = Nr(a), f = sn(a, Df);
        return i = typeof i == "function" ? i : n, i && f.pop(), f.length && f[0] === a[0] ? Of(f, n, i) : [];
      });
      function FT(a, i) {
        return a == null ? "" : RO.call(a, i);
      }
      function Nr(a) {
        var i = a == null ? 0 : a.length;
        return i ? a[i - 1] : n;
      }
      function $T(a, i, f) {
        var g = a == null ? 0 : a.length;
        if (!g)
          return -1;
        var w = g;
        return f !== n && (w = pt(f), w = w < 0 ? _n(g + w, 0) : Rn(w, g - 1)), i === i ? vO(a, i, w) : Mc(a, nv, w, !0);
      }
      function BT(a, i) {
        return a && a.length ? Rv(a, pt(i)) : n;
      }
      var WT = gt(xy);
      function xy(a, i) {
        return a && a.length && i && i.length ? kf(a, i) : a;
      }
      function UT(a, i, f) {
        return a && a.length && i && i.length ? kf(a, i, tt(f, 2)) : a;
      }
      function jT(a, i, f) {
        return a && a.length && i && i.length ? kf(a, i, n, f) : a;
      }
      var zT = Ra(function(a, i) {
        var f = a == null ? 0 : a.length, g = wf(a, i);
        return Lv(a, sn(i, function(w) {
          return Ma(w, f) ? +w : w;
        }).sort(qv)), g;
      });
      function HT(a, i) {
        var f = [];
        if (!(a && a.length))
          return f;
        var g = -1, w = [], M = a.length;
        for (i = tt(i, 3); ++g < M; ) {
          var W = a[g];
          i(W, g, a) && (f.push(W), w.push(g));
        }
        return Lv(a, w), f;
      }
      function Kf(a) {
        return a == null ? a : FO.call(a);
      }
      function YT(a, i, f) {
        var g = a == null ? 0 : a.length;
        return g ? (f && typeof f != "number" && Un(a, i, f) ? (i = 0, f = g) : (i = i == null ? 0 : pt(i), f = f === n ? g : pt(f)), kr(a, i, f)) : [];
      }
      function qT(a, i) {
        return eu(a, i);
      }
      function VT(a, i, f) {
        return Af(a, i, tt(f, 2));
      }
      function GT(a, i) {
        var f = a == null ? 0 : a.length;
        if (f) {
          var g = eu(a, i);
          if (g < f && Gr(a[g], i))
            return g;
        }
        return -1;
      }
      function KT(a, i) {
        return eu(a, i, !0);
      }
      function ZT(a, i, f) {
        return Af(a, i, tt(f, 2), !0);
      }
      function XT(a, i) {
        var f = a == null ? 0 : a.length;
        if (f) {
          var g = eu(a, i, !0) - 1;
          if (Gr(a[g], i))
            return g;
        }
        return -1;
      }
      function QT(a) {
        return a && a.length ? $v(a) : [];
      }
      function JT(a, i) {
        return a && a.length ? $v(a, tt(i, 2)) : [];
      }
      function eP(a) {
        var i = a == null ? 0 : a.length;
        return i ? kr(a, 1, i) : [];
      }
      function tP(a, i, f) {
        return a && a.length ? (i = f || i === n ? 1 : pt(i), kr(a, 0, i < 0 ? 0 : i)) : [];
      }
      function nP(a, i, f) {
        var g = a == null ? 0 : a.length;
        return g ? (i = f || i === n ? 1 : pt(i), i = g - i, kr(a, i < 0 ? 0 : i, g)) : [];
      }
      function rP(a, i) {
        return a && a.length ? tu(a, tt(i, 3), !1, !0) : [];
      }
      function aP(a, i) {
        return a && a.length ? tu(a, tt(i, 3)) : [];
      }
      var oP = gt(function(a) {
        return vo(Nn(a, 1, hn, !0));
      }), iP = gt(function(a) {
        var i = Nr(a);
        return hn(i) && (i = n), vo(Nn(a, 1, hn, !0), tt(i, 2));
      }), sP = gt(function(a) {
        var i = Nr(a);
        return i = typeof i == "function" ? i : n, vo(Nn(a, 1, hn, !0), n, i);
      });
      function lP(a) {
        return a && a.length ? vo(a) : [];
      }
      function cP(a, i) {
        return a && a.length ? vo(a, tt(i, 2)) : [];
      }
      function uP(a, i) {
        return i = typeof i == "function" ? i : n, a && a.length ? vo(a, n, i) : [];
      }
      function Zf(a) {
        if (!(a && a.length))
          return [];
        var i = 0;
        return a = fo(a, function(f) {
          if (hn(f))
            return i = _n(f.length, i), !0;
        }), pf(i, function(f) {
          return sn(a, uf(f));
        });
      }
      function Cy(a, i) {
        if (!(a && a.length))
          return [];
        var f = Zf(a);
        return i == null ? f : sn(f, function(g) {
          return ur(i, n, g);
        });
      }
      var dP = gt(function(a, i) {
        return hn(a) ? nl(a, i) : [];
      }), fP = gt(function(a) {
        return Mf(fo(a, hn));
      }), pP = gt(function(a) {
        var i = Nr(a);
        return hn(i) && (i = n), Mf(fo(a, hn), tt(i, 2));
      }), hP = gt(function(a) {
        var i = Nr(a);
        return i = typeof i == "function" ? i : n, Mf(fo(a, hn), n, i);
      }), mP = gt(Zf);
      function gP(a, i) {
        return jv(a || [], i || [], tl);
      }
      function vP(a, i) {
        return jv(a || [], i || [], ol);
      }
      var yP = gt(function(a) {
        var i = a.length, f = i > 1 ? a[i - 1] : n;
        return f = typeof f == "function" ? (a.pop(), f) : n, Cy(a, f);
      });
      function Oy(a) {
        var i = P(a);
        return i.__chain__ = !0, i;
      }
      function bP(a, i) {
        return i(a), a;
      }
      function uu(a, i) {
        return i(a);
      }
      var _P = Ra(function(a) {
        var i = a.length, f = i ? a[0] : 0, g = this.__wrapped__, w = function(M) {
          return wf(M, a);
        };
        return i > 1 || this.__actions__.length || !(g instanceof Ct) || !Ma(f) ? this.thru(w) : (g = g.slice(f, +f + (i ? 1 : 0)), g.__actions__.push({
          func: uu,
          args: [w],
          thisArg: n
        }), new Tr(g, this.__chain__).thru(function(M) {
          return i && !M.length && M.push(n), M;
        }));
      });
      function wP() {
        return Oy(this);
      }
      function EP() {
        return new Tr(this.value(), this.__chain__);
      }
      function xP() {
        this.__values__ === n && (this.__values__ = By(this.value()));
        var a = this.__index__ >= this.__values__.length, i = a ? n : this.__values__[this.__index__++];
        return { done: a, value: i };
      }
      function CP() {
        return this;
      }
      function OP(a) {
        for (var i, f = this; f instanceof Kc; ) {
          var g = yy(f);
          g.__index__ = 0, g.__values__ = n, i ? w.__wrapped__ = g : i = g;
          var w = g;
          f = f.__wrapped__;
        }
        return w.__wrapped__ = a, i;
      }
      function SP() {
        var a = this.__wrapped__;
        if (a instanceof Ct) {
          var i = a;
          return this.__actions__.length && (i = new Ct(this)), i = i.reverse(), i.__actions__.push({
            func: uu,
            args: [Kf],
            thisArg: n
          }), new Tr(i, this.__chain__);
        }
        return this.thru(Kf);
      }
      function TP() {
        return Uv(this.__wrapped__, this.__actions__);
      }
      var PP = nu(function(a, i, f) {
        $t.call(a, f) ? ++a[f] : la(a, f, 1);
      });
      function kP(a, i, f) {
        var g = ut(a) ? ev : bS;
        return f && Un(a, i, f) && (i = n), g(a, tt(i, 3));
      }
      function NP(a, i) {
        var f = ut(a) ? fo : Cv;
        return f(a, tt(i, 3));
      }
      var IP = Qv(by), AP = Qv(_y);
      function RP(a, i) {
        return Nn(du(a, i), 1);
      }
      function MP(a, i) {
        return Nn(du(a, i), de);
      }
      function DP(a, i, f) {
        return f = f === n ? 1 : pt(f), Nn(du(a, i), f);
      }
      function Sy(a, i) {
        var f = ut(a) ? dr : go;
        return f(a, tt(i, 3));
      }
      function Ty(a, i) {
        var f = ut(a) ? eO : xv;
        return f(a, tt(i, 3));
      }
      var LP = nu(function(a, i, f) {
        $t.call(a, f) ? a[f].push(i) : la(a, f, [i]);
      });
      function FP(a, i, f, g) {
        a = Xn(a) ? a : Ji(a), f = f && !g ? pt(f) : 0;
        var w = a.length;
        return f < 0 && (f = _n(w + f, 0)), gu(a) ? f <= w && a.indexOf(i, f) > -1 : !!w && Ui(a, i, f) > -1;
      }
      var $P = gt(function(a, i, f) {
        var g = -1, w = typeof i == "function", M = Xn(a) ? ie(a.length) : [];
        return go(a, function(W) {
          M[++g] = w ? ur(i, W, f) : rl(W, i, f);
        }), M;
      }), BP = nu(function(a, i, f) {
        la(a, f, i);
      });
      function du(a, i) {
        var f = ut(a) ? sn : Nv;
        return f(a, tt(i, 3));
      }
      function WP(a, i, f, g) {
        return a == null ? [] : (ut(i) || (i = i == null ? [] : [i]), f = g ? n : f, ut(f) || (f = f == null ? [] : [f]), Mv(a, i, f));
      }
      var UP = nu(function(a, i, f) {
        a[f ? 0 : 1].push(i);
      }, function() {
        return [[], []];
      });
      function jP(a, i, f) {
        var g = ut(a) ? lf : av, w = arguments.length < 3;
        return g(a, tt(i, 4), f, w, go);
      }
      function zP(a, i, f) {
        var g = ut(a) ? tO : av, w = arguments.length < 3;
        return g(a, tt(i, 4), f, w, xv);
      }
      function HP(a, i) {
        var f = ut(a) ? fo : Cv;
        return f(a, hu(tt(i, 3)));
      }
      function YP(a) {
        var i = ut(a) ? bv : FS;
        return i(a);
      }
      function qP(a, i, f) {
        (f ? Un(a, i, f) : i === n) ? i = 1 : i = pt(i);
        var g = ut(a) ? hS : $S;
        return g(a, i);
      }
      function VP(a) {
        var i = ut(a) ? mS : WS;
        return i(a);
      }
      function GP(a) {
        if (a == null)
          return 0;
        if (Xn(a))
          return gu(a) ? zi(a) : a.length;
        var i = Mn(a);
        return i == le || i == Ce ? a.size : Tf(a).length;
      }
      function KP(a, i, f) {
        var g = ut(a) ? cf : US;
        return f && Un(a, i, f) && (i = n), g(a, tt(i, 3));
      }
      var ZP = gt(function(a, i) {
        if (a == null)
          return [];
        var f = i.length;
        return f > 1 && Un(a, i[0], i[1]) ? i = [] : f > 2 && Un(i[0], i[1], i[2]) && (i = [i[0]]), Mv(a, Nn(i, 1), []);
      }), fu = NO || function() {
        return kn.Date.now();
      };
      function XP(a, i) {
        if (typeof i != "function")
          throw new Sr(u);
        return a = pt(a), function() {
          if (--a < 1)
            return i.apply(this, arguments);
        };
      }
      function Py(a, i, f) {
        return i = f ? n : i, i = a && i == null ? a.length : i, Aa(a, T, n, n, n, n, i);
      }
      function ky(a, i) {
        var f;
        if (typeof i != "function")
          throw new Sr(u);
        return a = pt(a), function() {
          return --a > 0 && (f = i.apply(this, arguments)), a <= 1 && (i = n), f;
        };
      }
      var Xf = gt(function(a, i, f) {
        var g = A;
        if (f.length) {
          var w = ho(f, Xi(Xf));
          g |= S;
        }
        return Aa(a, g, i, f, w);
      }), Ny = gt(function(a, i, f) {
        var g = A | F;
        if (f.length) {
          var w = ho(f, Xi(Ny));
          g |= S;
        }
        return Aa(i, g, a, f, w);
      });
      function Iy(a, i, f) {
        i = f ? n : i;
        var g = Aa(a, I, n, n, n, n, n, i);
        return g.placeholder = Iy.placeholder, g;
      }
      function Ay(a, i, f) {
        i = f ? n : i;
        var g = Aa(a, O, n, n, n, n, n, i);
        return g.placeholder = Ay.placeholder, g;
      }
      function Ry(a, i, f) {
        var g, w, M, W, Y, X, _e = 0, we = !1, Oe = !1, Le = !0;
        if (typeof a != "function")
          throw new Sr(u);
        i = Ir(i) || 0, dn(f) && (we = !!f.leading, Oe = "maxWait" in f, M = Oe ? _n(Ir(f.maxWait) || 0, i) : M, Le = "trailing" in f ? !!f.trailing : Le);
        function qe(mn) {
          var Kr = g, Fa = w;
          return g = w = n, _e = mn, W = a.apply(Fa, Kr), W;
        }
        function nt(mn) {
          return _e = mn, Y = ll(_t, i), we ? qe(mn) : W;
        }
        function mt(mn) {
          var Kr = mn - X, Fa = mn - _e, Jy = i - Kr;
          return Oe ? Rn(Jy, M - Fa) : Jy;
        }
        function et(mn) {
          var Kr = mn - X, Fa = mn - _e;
          return X === n || Kr >= i || Kr < 0 || Oe && Fa >= M;
        }
        function _t() {
          var mn = fu();
          if (et(mn))
            return Tt(mn);
          Y = ll(_t, mt(mn));
        }
        function Tt(mn) {
          return Y = n, Le && g ? qe(mn) : (g = w = n, W);
        }
        function mr() {
          Y !== n && zv(Y), _e = 0, g = X = w = Y = n;
        }
        function jn() {
          return Y === n ? W : Tt(fu());
        }
        function gr() {
          var mn = fu(), Kr = et(mn);
          if (g = arguments, w = this, X = mn, Kr) {
            if (Y === n)
              return nt(X);
            if (Oe)
              return zv(Y), Y = ll(_t, i), qe(X);
          }
          return Y === n && (Y = ll(_t, i)), W;
        }
        return gr.cancel = mr, gr.flush = jn, gr;
      }
      var QP = gt(function(a, i) {
        return Ev(a, 1, i);
      }), JP = gt(function(a, i, f) {
        return Ev(a, Ir(i) || 0, f);
      });
      function ek(a) {
        return Aa(a, B);
      }
      function pu(a, i) {
        if (typeof a != "function" || i != null && typeof i != "function")
          throw new Sr(u);
        var f = function() {
          var g = arguments, w = i ? i.apply(this, g) : g[0], M = f.cache;
          if (M.has(w))
            return M.get(w);
          var W = a.apply(this, g);
          return f.cache = M.set(w, W) || M, W;
        };
        return f.cache = new (pu.Cache || Ia)(), f;
      }
      pu.Cache = Ia;
      function hu(a) {
        if (typeof a != "function")
          throw new Sr(u);
        return function() {
          var i = arguments;
          switch (i.length) {
            case 0:
              return !a.call(this);
            case 1:
              return !a.call(this, i[0]);
            case 2:
              return !a.call(this, i[0], i[1]);
            case 3:
              return !a.call(this, i[0], i[1], i[2]);
          }
          return !a.apply(this, i);
        };
      }
      function tk(a) {
        return ky(2, a);
      }
      var nk = jS(function(a, i) {
        i = i.length == 1 && ut(i[0]) ? sn(i[0], fr(tt())) : sn(Nn(i, 1), fr(tt()));
        var f = i.length;
        return gt(function(g) {
          for (var w = -1, M = Rn(g.length, f); ++w < M; )
            g[w] = i[w].call(this, g[w]);
          return ur(a, this, g);
        });
      }), Qf = gt(function(a, i) {
        var f = ho(i, Xi(Qf));
        return Aa(a, S, n, i, f);
      }), My = gt(function(a, i) {
        var f = ho(i, Xi(My));
        return Aa(a, C, n, i, f);
      }), rk = Ra(function(a, i) {
        return Aa(a, N, n, n, n, i);
      });
      function ak(a, i) {
        if (typeof a != "function")
          throw new Sr(u);
        return i = i === n ? i : pt(i), gt(a, i);
      }
      function ok(a, i) {
        if (typeof a != "function")
          throw new Sr(u);
        return i = i == null ? 0 : _n(pt(i), 0), gt(function(f) {
          var g = f[i], w = bo(f, 0, i);
          return g && po(w, g), ur(a, this, w);
        });
      }
      function ik(a, i, f) {
        var g = !0, w = !0;
        if (typeof a != "function")
          throw new Sr(u);
        return dn(f) && (g = "leading" in f ? !!f.leading : g, w = "trailing" in f ? !!f.trailing : w), Ry(a, i, {
          leading: g,
          maxWait: i,
          trailing: w
        });
      }
      function sk(a) {
        return Py(a, 1);
      }
      function lk(a, i) {
        return Qf(Lf(i), a);
      }
      function ck() {
        if (!arguments.length)
          return [];
        var a = arguments[0];
        return ut(a) ? a : [a];
      }
      function uk(a) {
        return Pr(a, b);
      }
      function dk(a, i) {
        return i = typeof i == "function" ? i : n, Pr(a, b, i);
      }
      function fk(a) {
        return Pr(a, v | b);
      }
      function pk(a, i) {
        return i = typeof i == "function" ? i : n, Pr(a, v | b, i);
      }
      function hk(a, i) {
        return i == null || wv(a, i, On(i));
      }
      function Gr(a, i) {
        return a === i || a !== a && i !== i;
      }
      var mk = iu(Cf), gk = iu(function(a, i) {
        return a >= i;
      }), si = Tv(/* @__PURE__ */ function() {
        return arguments;
      }()) ? Tv : function(a) {
        return fn(a) && $t.call(a, "callee") && !pv.call(a, "callee");
      }, ut = ie.isArray, vk = Gg ? fr(Gg) : OS;
      function Xn(a) {
        return a != null && mu(a.length) && !Da(a);
      }
      function hn(a) {
        return fn(a) && Xn(a);
      }
      function yk(a) {
        return a === !0 || a === !1 || fn(a) && Wn(a) == U;
      }
      var _o = AO || up, bk = Kg ? fr(Kg) : SS;
      function _k(a) {
        return fn(a) && a.nodeType === 1 && !cl(a);
      }
      function wk(a) {
        if (a == null)
          return !0;
        if (Xn(a) && (ut(a) || typeof a == "string" || typeof a.splice == "function" || _o(a) || Qi(a) || si(a)))
          return !a.length;
        var i = Mn(a);
        if (i == le || i == Ce)
          return !a.size;
        if (sl(a))
          return !Tf(a).length;
        for (var f in a)
          if ($t.call(a, f))
            return !1;
        return !0;
      }
      function Ek(a, i) {
        return al(a, i);
      }
      function xk(a, i, f) {
        f = typeof f == "function" ? f : n;
        var g = f ? f(a, i) : n;
        return g === n ? al(a, i, n, f) : !!g;
      }
      function Jf(a) {
        if (!fn(a))
          return !1;
        var i = Wn(a);
        return i == D || i == $ || typeof a.message == "string" && typeof a.name == "string" && !cl(a);
      }
      function Ck(a) {
        return typeof a == "number" && mv(a);
      }
      function Da(a) {
        if (!dn(a))
          return !1;
        var i = Wn(a);
        return i == G || i == K || i == De || i == V;
      }
      function Dy(a) {
        return typeof a == "number" && a == pt(a);
      }
      function mu(a) {
        return typeof a == "number" && a > -1 && a % 1 == 0 && a <= ye;
      }
      function dn(a) {
        var i = typeof a;
        return a != null && (i == "object" || i == "function");
      }
      function fn(a) {
        return a != null && typeof a == "object";
      }
      var Ly = Zg ? fr(Zg) : PS;
      function Ok(a, i) {
        return a === i || Sf(a, i, zf(i));
      }
      function Sk(a, i, f) {
        return f = typeof f == "function" ? f : n, Sf(a, i, zf(i), f);
      }
      function Tk(a) {
        return Fy(a) && a != +a;
      }
      function Pk(a) {
        if (dT(a))
          throw new lt(s);
        return Pv(a);
      }
      function kk(a) {
        return a === null;
      }
      function Nk(a) {
        return a == null;
      }
      function Fy(a) {
        return typeof a == "number" || fn(a) && Wn(a) == pe;
      }
      function cl(a) {
        if (!fn(a) || Wn(a) != fe)
          return !1;
        var i = jc(a);
        if (i === null)
          return !0;
        var f = $t.call(i, "constructor") && i.constructor;
        return typeof f == "function" && f instanceof f && $c.call(f) == SO;
      }
      var ep = Xg ? fr(Xg) : kS;
      function Ik(a) {
        return Dy(a) && a >= -ye && a <= ye;
      }
      var $y = Qg ? fr(Qg) : NS;
      function gu(a) {
        return typeof a == "string" || !ut(a) && fn(a) && Wn(a) == Fe;
      }
      function hr(a) {
        return typeof a == "symbol" || fn(a) && Wn(a) == $e;
      }
      var Qi = Jg ? fr(Jg) : IS;
      function Ak(a) {
        return a === n;
      }
      function Rk(a) {
        return fn(a) && Mn(a) == Ve;
      }
      function Mk(a) {
        return fn(a) && Wn(a) == xt;
      }
      var Dk = iu(Pf), Lk = iu(function(a, i) {
        return a <= i;
      });
      function By(a) {
        if (!a)
          return [];
        if (Xn(a))
          return gu(a) ? Yr(a) : Zn(a);
        if (Zs && a[Zs])
          return hO(a[Zs]());
        var i = Mn(a), f = i == le ? mf : i == Ce ? Dc : Ji;
        return f(a);
      }
      function La(a) {
        if (!a)
          return a === 0 ? a : 0;
        if (a = Ir(a), a === de || a === -de) {
          var i = a < 0 ? -1 : 1;
          return i * ee;
        }
        return a === a ? a : 0;
      }
      function pt(a) {
        var i = La(a), f = i % 1;
        return i === i ? f ? i - f : i : 0;
      }
      function Wy(a) {
        return a ? ri(pt(a), 0, se) : 0;
      }
      function Ir(a) {
        if (typeof a == "number")
          return a;
        if (hr(a))
          return oe;
        if (dn(a)) {
          var i = typeof a.valueOf == "function" ? a.valueOf() : a;
          a = dn(i) ? i + "" : i;
        }
        if (typeof a != "string")
          return a === 0 ? a : +a;
        a = ov(a);
        var f = vC.test(a);
        return f || bC.test(a) ? XC(a.slice(2), f ? 2 : 8) : gC.test(a) ? oe : +a;
      }
      function Uy(a) {
        return ua(a, Qn(a));
      }
      function Fk(a) {
        return a ? ri(pt(a), -ye, ye) : a === 0 ? a : 0;
      }
      function Bt(a) {
        return a == null ? "" : pr(a);
      }
      var $k = Ki(function(a, i) {
        if (sl(i) || Xn(i)) {
          ua(i, On(i), a);
          return;
        }
        for (var f in i)
          $t.call(i, f) && tl(a, f, i[f]);
      }), jy = Ki(function(a, i) {
        ua(i, Qn(i), a);
      }), zy = Ki(function(a, i, f, g) {
        ua(i, Qn(i), a, g);
      }), tp = Ki(function(a, i, f, g) {
        ua(i, On(i), a, g);
      }), Bk = Ra(wf);
      function Wk(a, i) {
        var f = Gi(a);
        return i == null ? f : _v(f, i);
      }
      var Uk = gt(function(a, i) {
        a = Kt(a);
        var f = -1, g = i.length, w = g > 2 ? i[2] : n;
        for (w && Un(i[0], i[1], w) && (g = 1); ++f < g; )
          for (var M = i[f], W = Qn(M), Y = -1, X = W.length; ++Y < X; ) {
            var _e = W[Y], we = a[_e];
            (we === n || Gr(we, Yi[_e]) && !$t.call(a, _e)) && (a[_e] = M[_e]);
          }
        return a;
      }), jk = gt(function(a) {
        return a.push(n, oy), ur(Hy, n, a);
      });
      function zk(a, i) {
        return tv(a, tt(i, 3), ca);
      }
      function Hk(a, i) {
        return tv(a, tt(i, 3), xf);
      }
      function Yk(a, i) {
        return a == null ? a : Ef(a, tt(i, 3), Qn);
      }
      function qk(a, i) {
        return a == null ? a : Ov(a, tt(i, 3), Qn);
      }
      function Vk(a, i) {
        return a && ca(a, tt(i, 3));
      }
      function Gk(a, i) {
        return a && xf(a, tt(i, 3));
      }
      function Kk(a) {
        return a == null ? [] : Qc(a, On(a));
      }
      function Zk(a) {
        return a == null ? [] : Qc(a, Qn(a));
      }
      function np(a, i, f) {
        var g = a == null ? n : ai(a, i);
        return g === n ? f : g;
      }
      function Xk(a, i) {
        return a != null && ly(a, i, wS);
      }
      function rp(a, i) {
        return a != null && ly(a, i, ES);
      }
      var Qk = ey(function(a, i, f) {
        i != null && typeof i.toString != "function" && (i = Bc.call(i)), a[i] = f;
      }, op(Jn)), Jk = ey(function(a, i, f) {
        i != null && typeof i.toString != "function" && (i = Bc.call(i)), $t.call(a, i) ? a[i].push(f) : a[i] = [f];
      }, tt), eN = gt(rl);
      function On(a) {
        return Xn(a) ? yv(a) : Tf(a);
      }
      function Qn(a) {
        return Xn(a) ? yv(a, !0) : AS(a);
      }
      function tN(a, i) {
        var f = {};
        return i = tt(i, 3), ca(a, function(g, w, M) {
          la(f, i(g, w, M), g);
        }), f;
      }
      function nN(a, i) {
        var f = {};
        return i = tt(i, 3), ca(a, function(g, w, M) {
          la(f, w, i(g, w, M));
        }), f;
      }
      var rN = Ki(function(a, i, f) {
        Jc(a, i, f);
      }), Hy = Ki(function(a, i, f, g) {
        Jc(a, i, f, g);
      }), aN = Ra(function(a, i) {
        var f = {};
        if (a == null)
          return f;
        var g = !1;
        i = sn(i, function(M) {
          return M = yo(M, a), g || (g = M.length > 1), M;
        }), ua(a, Uf(a), f), g && (f = Pr(f, v | y | b, JS));
        for (var w = i.length; w--; )
          Rf(f, i[w]);
        return f;
      });
      function oN(a, i) {
        return Yy(a, hu(tt(i)));
      }
      var iN = Ra(function(a, i) {
        return a == null ? {} : MS(a, i);
      });
      function Yy(a, i) {
        if (a == null)
          return {};
        var f = sn(Uf(a), function(g) {
          return [g];
        });
        return i = tt(i), Dv(a, f, function(g, w) {
          return i(g, w[0]);
        });
      }
      function sN(a, i, f) {
        i = yo(i, a);
        var g = -1, w = i.length;
        for (w || (w = 1, a = n); ++g < w; ) {
          var M = a == null ? n : a[Vr(i[g])];
          M === n && (g = w, M = f), a = Da(M) ? M.call(a) : M;
        }
        return a;
      }
      function lN(a, i, f) {
        return a == null ? a : ol(a, i, f);
      }
      function cN(a, i, f, g) {
        return g = typeof g == "function" ? g : n, a == null ? a : ol(a, i, f, g);
      }
      var qy = ry(On), Vy = ry(Qn);
      function uN(a, i, f) {
        var g = ut(a), w = g || _o(a) || Qi(a);
        if (i = tt(i, 4), f == null) {
          var M = a && a.constructor;
          w ? f = g ? new M() : [] : dn(a) ? f = Da(M) ? Gi(jc(a)) : {} : f = {};
        }
        return (w ? dr : ca)(a, function(W, Y, X) {
          return i(f, W, Y, X);
        }), f;
      }
      function dN(a, i) {
        return a == null ? !0 : Rf(a, i);
      }
      function fN(a, i, f) {
        return a == null ? a : Wv(a, i, Lf(f));
      }
      function pN(a, i, f, g) {
        return g = typeof g == "function" ? g : n, a == null ? a : Wv(a, i, Lf(f), g);
      }
      function Ji(a) {
        return a == null ? [] : hf(a, On(a));
      }
      function hN(a) {
        return a == null ? [] : hf(a, Qn(a));
      }
      function mN(a, i, f) {
        return f === n && (f = i, i = n), f !== n && (f = Ir(f), f = f === f ? f : 0), i !== n && (i = Ir(i), i = i === i ? i : 0), ri(Ir(a), i, f);
      }
      function gN(a, i, f) {
        return i = La(i), f === n ? (f = i, i = 0) : f = La(f), a = Ir(a), xS(a, i, f);
      }
      function vN(a, i, f) {
        if (f && typeof f != "boolean" && Un(a, i, f) && (i = f = n), f === n && (typeof i == "boolean" ? (f = i, i = n) : typeof a == "boolean" && (f = a, a = n)), a === n && i === n ? (a = 0, i = 1) : (a = La(a), i === n ? (i = a, a = 0) : i = La(i)), a > i) {
          var g = a;
          a = i, i = g;
        }
        if (f || a % 1 || i % 1) {
          var w = gv();
          return Rn(a + w * (i - a + ZC("1e-" + ((w + "").length - 1))), i);
        }
        return Nf(a, i);
      }
      var yN = Zi(function(a, i, f) {
        return i = i.toLowerCase(), a + (f ? Gy(i) : i);
      });
      function Gy(a) {
        return ap(Bt(a).toLowerCase());
      }
      function Ky(a) {
        return a = Bt(a), a && a.replace(wC, cO).replace(WC, "");
      }
      function bN(a, i, f) {
        a = Bt(a), i = pr(i);
        var g = a.length;
        f = f === n ? g : ri(pt(f), 0, g);
        var w = f;
        return f -= i.length, f >= 0 && a.slice(f, w) == i;
      }
      function _N(a) {
        return a = Bt(a), a && sa.test(a) ? a.replace(ia, uO) : a;
      }
      function wN(a) {
        return a = Bt(a), a && lC.test(a) ? a.replace(Xd, "\\$&") : a;
      }
      var EN = Zi(function(a, i, f) {
        return a + (f ? "-" : "") + i.toLowerCase();
      }), xN = Zi(function(a, i, f) {
        return a + (f ? " " : "") + i.toLowerCase();
      }), CN = Xv("toLowerCase");
      function ON(a, i, f) {
        a = Bt(a), i = pt(i);
        var g = i ? zi(a) : 0;
        if (!i || g >= i)
          return a;
        var w = (i - g) / 2;
        return ou(qc(w), f) + a + ou(Yc(w), f);
      }
      function SN(a, i, f) {
        a = Bt(a), i = pt(i);
        var g = i ? zi(a) : 0;
        return i && g < i ? a + ou(i - g, f) : a;
      }
      function TN(a, i, f) {
        a = Bt(a), i = pt(i);
        var g = i ? zi(a) : 0;
        return i && g < i ? ou(i - g, f) + a : a;
      }
      function PN(a, i, f) {
        return f || i == null ? i = 0 : i && (i = +i), LO(Bt(a).replace(Qd, ""), i || 0);
      }
      function kN(a, i, f) {
        return (f ? Un(a, i, f) : i === n) ? i = 1 : i = pt(i), If(Bt(a), i);
      }
      function NN() {
        var a = arguments, i = Bt(a[0]);
        return a.length < 3 ? i : i.replace(a[1], a[2]);
      }
      var IN = Zi(function(a, i, f) {
        return a + (f ? "_" : "") + i.toLowerCase();
      });
      function AN(a, i, f) {
        return f && typeof f != "number" && Un(a, i, f) && (i = f = n), f = f === n ? se : f >>> 0, f ? (a = Bt(a), a && (typeof i == "string" || i != null && !ep(i)) && (i = pr(i), !i && ji(a)) ? bo(Yr(a), 0, f) : a.split(i, f)) : [];
      }
      var RN = Zi(function(a, i, f) {
        return a + (f ? " " : "") + ap(i);
      });
      function MN(a, i, f) {
        return a = Bt(a), f = f == null ? 0 : ri(pt(f), 0, a.length), i = pr(i), a.slice(f, f + i.length) == i;
      }
      function DN(a, i, f) {
        var g = P.templateSettings;
        f && Un(a, i, f) && (i = n), a = Bt(a), i = tp({}, i, g, ay);
        var w = tp({}, i.imports, g.imports, ay), M = On(w), W = hf(w, M);
        dr(M, function(et) {
          if (Sg.test(et))
            throw new lt(d);
        });
        var Y, X, _e = 0, we = i.interpolate || Nc, Oe = "__p += '", Le = gf(
          (i.escape || Nc).source + "|" + we.source + "|" + (we === Og ? mC : Nc).source + "|" + (i.evaluate || Nc).source + "|$",
          "g"
        ), qe = "//# sourceURL=" + ($t.call(i, "sourceURL") ? (i.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++YC + "]") + `
`;
        a.replace(Le, function(et, _t, Tt, mr, jn, gr) {
          return Tt || (Tt = mr), Oe += a.slice(_e, gr).replace(EC, dO), _t && (Y = !0, Oe += `' +
__e(` + _t + `) +
'`), jn && (X = !0, Oe += `';
` + jn + `;
__p += '`), Tt && (Oe += `' +
((__t = (` + Tt + `)) == null ? '' : __t) +
'`), _e = gr + et.length, et;
        }), Oe += `';
`;
        var nt = $t.call(i, "variable") && i.variable;
        if (!nt)
          Oe = `with (obj) {
` + Oe + `
}
`;
        else if (Sg.test(nt))
          throw new lt(c);
        Oe = (X ? Oe.replace(Ft, "") : Oe).replace(Qe, "$1").replace(un, "$1;"), Oe = "function(" + (nt || "obj") + `) {
` + (nt ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (Y ? ", __e = _.escape" : "") + (X ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + Oe + `return __p
}`;
        var mt = Xy(function() {
          return Lt(M, qe + "return " + Oe).apply(n, W);
        });
        if (mt.source = Oe, Jf(mt))
          throw mt;
        return mt;
      }
      function LN(a) {
        return Bt(a).toLowerCase();
      }
      function FN(a) {
        return Bt(a).toUpperCase();
      }
      function $N(a, i, f) {
        if (a = Bt(a), a && (f || i === n))
          return ov(a);
        if (!a || !(i = pr(i)))
          return a;
        var g = Yr(a), w = Yr(i), M = iv(g, w), W = sv(g, w) + 1;
        return bo(g, M, W).join("");
      }
      function BN(a, i, f) {
        if (a = Bt(a), a && (f || i === n))
          return a.slice(0, cv(a) + 1);
        if (!a || !(i = pr(i)))
          return a;
        var g = Yr(a), w = sv(g, Yr(i)) + 1;
        return bo(g, 0, w).join("");
      }
      function WN(a, i, f) {
        if (a = Bt(a), a && (f || i === n))
          return a.replace(Qd, "");
        if (!a || !(i = pr(i)))
          return a;
        var g = Yr(a), w = iv(g, Yr(i));
        return bo(g, w).join("");
      }
      function UN(a, i) {
        var f = H, g = ne;
        if (dn(i)) {
          var w = "separator" in i ? i.separator : w;
          f = "length" in i ? pt(i.length) : f, g = "omission" in i ? pr(i.omission) : g;
        }
        a = Bt(a);
        var M = a.length;
        if (ji(a)) {
          var W = Yr(a);
          M = W.length;
        }
        if (f >= M)
          return a;
        var Y = f - zi(g);
        if (Y < 1)
          return g;
        var X = W ? bo(W, 0, Y).join("") : a.slice(0, Y);
        if (w === n)
          return X + g;
        if (W && (Y += X.length - Y), ep(w)) {
          if (a.slice(Y).search(w)) {
            var _e, we = X;
            for (w.global || (w = gf(w.source, Bt(Tg.exec(w)) + "g")), w.lastIndex = 0; _e = w.exec(we); )
              var Oe = _e.index;
            X = X.slice(0, Oe === n ? Y : Oe);
          }
        } else if (a.indexOf(pr(w), Y) != Y) {
          var Le = X.lastIndexOf(w);
          Le > -1 && (X = X.slice(0, Le));
        }
        return X + g;
      }
      function jN(a) {
        return a = Bt(a), a && kc.test(a) ? a.replace(Kn, yO) : a;
      }
      var zN = Zi(function(a, i, f) {
        return a + (f ? " " : "") + i.toUpperCase();
      }), ap = Xv("toUpperCase");
      function Zy(a, i, f) {
        return a = Bt(a), i = f ? n : i, i === n ? pO(a) ? wO(a) : aO(a) : a.match(i) || [];
      }
      var Xy = gt(function(a, i) {
        try {
          return ur(a, n, i);
        } catch (f) {
          return Jf(f) ? f : new lt(f);
        }
      }), HN = Ra(function(a, i) {
        return dr(i, function(f) {
          f = Vr(f), la(a, f, Xf(a[f], a));
        }), a;
      });
      function YN(a) {
        var i = a == null ? 0 : a.length, f = tt();
        return a = i ? sn(a, function(g) {
          if (typeof g[1] != "function")
            throw new Sr(u);
          return [f(g[0]), g[1]];
        }) : [], gt(function(g) {
          for (var w = -1; ++w < i; ) {
            var M = a[w];
            if (ur(M[0], this, g))
              return ur(M[1], this, g);
          }
        });
      }
      function qN(a) {
        return yS(Pr(a, v));
      }
      function op(a) {
        return function() {
          return a;
        };
      }
      function VN(a, i) {
        return a == null || a !== a ? i : a;
      }
      var GN = Jv(), KN = Jv(!0);
      function Jn(a) {
        return a;
      }
      function ip(a) {
        return kv(typeof a == "function" ? a : Pr(a, v));
      }
      function ZN(a) {
        return Iv(Pr(a, v));
      }
      function XN(a, i) {
        return Av(a, Pr(i, v));
      }
      var QN = gt(function(a, i) {
        return function(f) {
          return rl(f, a, i);
        };
      }), JN = gt(function(a, i) {
        return function(f) {
          return rl(a, f, i);
        };
      });
      function sp(a, i, f) {
        var g = On(i), w = Qc(i, g);
        f == null && !(dn(i) && (w.length || !g.length)) && (f = i, i = a, a = this, w = Qc(i, On(i)));
        var M = !(dn(f) && "chain" in f) || !!f.chain, W = Da(a);
        return dr(w, function(Y) {
          var X = i[Y];
          a[Y] = X, W && (a.prototype[Y] = function() {
            var _e = this.__chain__;
            if (M || _e) {
              var we = a(this.__wrapped__), Oe = we.__actions__ = Zn(this.__actions__);
              return Oe.push({ func: X, args: arguments, thisArg: a }), we.__chain__ = _e, we;
            }
            return X.apply(a, po([this.value()], arguments));
          });
        }), a;
      }
      function eI() {
        return kn._ === this && (kn._ = TO), this;
      }
      function lp() {
      }
      function tI(a) {
        return a = pt(a), gt(function(i) {
          return Rv(i, a);
        });
      }
      var nI = $f(sn), rI = $f(ev), aI = $f(cf);
      function Qy(a) {
        return Yf(a) ? uf(Vr(a)) : DS(a);
      }
      function oI(a) {
        return function(i) {
          return a == null ? n : ai(a, i);
        };
      }
      var iI = ty(), sI = ty(!0);
      function cp() {
        return [];
      }
      function up() {
        return !1;
      }
      function lI() {
        return {};
      }
      function cI() {
        return "";
      }
      function uI() {
        return !0;
      }
      function dI(a, i) {
        if (a = pt(a), a < 1 || a > ye)
          return [];
        var f = se, g = Rn(a, se);
        i = tt(i), a -= se;
        for (var w = pf(g, i); ++f < a; )
          i(f);
        return w;
      }
      function fI(a) {
        return ut(a) ? sn(a, Vr) : hr(a) ? [a] : Zn(vy(Bt(a)));
      }
      function pI(a) {
        var i = ++OO;
        return Bt(a) + i;
      }
      var hI = au(function(a, i) {
        return a + i;
      }, 0), mI = Bf("ceil"), gI = au(function(a, i) {
        return a / i;
      }, 1), vI = Bf("floor");
      function yI(a) {
        return a && a.length ? Xc(a, Jn, Cf) : n;
      }
      function bI(a, i) {
        return a && a.length ? Xc(a, tt(i, 2), Cf) : n;
      }
      function _I(a) {
        return rv(a, Jn);
      }
      function wI(a, i) {
        return rv(a, tt(i, 2));
      }
      function EI(a) {
        return a && a.length ? Xc(a, Jn, Pf) : n;
      }
      function xI(a, i) {
        return a && a.length ? Xc(a, tt(i, 2), Pf) : n;
      }
      var CI = au(function(a, i) {
        return a * i;
      }, 1), OI = Bf("round"), SI = au(function(a, i) {
        return a - i;
      }, 0);
      function TI(a) {
        return a && a.length ? ff(a, Jn) : 0;
      }
      function PI(a, i) {
        return a && a.length ? ff(a, tt(i, 2)) : 0;
      }
      return P.after = XP, P.ary = Py, P.assign = $k, P.assignIn = jy, P.assignInWith = zy, P.assignWith = tp, P.at = Bk, P.before = ky, P.bind = Xf, P.bindAll = HN, P.bindKey = Ny, P.castArray = ck, P.chain = Oy, P.chunk = yT, P.compact = bT, P.concat = _T, P.cond = YN, P.conforms = qN, P.constant = op, P.countBy = PP, P.create = Wk, P.curry = Iy, P.curryRight = Ay, P.debounce = Ry, P.defaults = Uk, P.defaultsDeep = jk, P.defer = QP, P.delay = JP, P.difference = wT, P.differenceBy = ET, P.differenceWith = xT, P.drop = CT, P.dropRight = OT, P.dropRightWhile = ST, P.dropWhile = TT, P.fill = PT, P.filter = NP, P.flatMap = RP, P.flatMapDeep = MP, P.flatMapDepth = DP, P.flatten = wy, P.flattenDeep = kT, P.flattenDepth = NT, P.flip = ek, P.flow = GN, P.flowRight = KN, P.fromPairs = IT, P.functions = Kk, P.functionsIn = Zk, P.groupBy = LP, P.initial = RT, P.intersection = MT, P.intersectionBy = DT, P.intersectionWith = LT, P.invert = Qk, P.invertBy = Jk, P.invokeMap = $P, P.iteratee = ip, P.keyBy = BP, P.keys = On, P.keysIn = Qn, P.map = du, P.mapKeys = tN, P.mapValues = nN, P.matches = ZN, P.matchesProperty = XN, P.memoize = pu, P.merge = rN, P.mergeWith = Hy, P.method = QN, P.methodOf = JN, P.mixin = sp, P.negate = hu, P.nthArg = tI, P.omit = aN, P.omitBy = oN, P.once = tk, P.orderBy = WP, P.over = nI, P.overArgs = nk, P.overEvery = rI, P.overSome = aI, P.partial = Qf, P.partialRight = My, P.partition = UP, P.pick = iN, P.pickBy = Yy, P.property = Qy, P.propertyOf = oI, P.pull = WT, P.pullAll = xy, P.pullAllBy = UT, P.pullAllWith = jT, P.pullAt = zT, P.range = iI, P.rangeRight = sI, P.rearg = rk, P.reject = HP, P.remove = HT, P.rest = ak, P.reverse = Kf, P.sampleSize = qP, P.set = lN, P.setWith = cN, P.shuffle = VP, P.slice = YT, P.sortBy = ZP, P.sortedUniq = QT, P.sortedUniqBy = JT, P.split = AN, P.spread = ok, P.tail = eP, P.take = tP, P.takeRight = nP, P.takeRightWhile = rP, P.takeWhile = aP, P.tap = bP, P.throttle = ik, P.thru = uu, P.toArray = By, P.toPairs = qy, P.toPairsIn = Vy, P.toPath = fI, P.toPlainObject = Uy, P.transform = uN, P.unary = sk, P.union = oP, P.unionBy = iP, P.unionWith = sP, P.uniq = lP, P.uniqBy = cP, P.uniqWith = uP, P.unset = dN, P.unzip = Zf, P.unzipWith = Cy, P.update = fN, P.updateWith = pN, P.values = Ji, P.valuesIn = hN, P.without = dP, P.words = Zy, P.wrap = lk, P.xor = fP, P.xorBy = pP, P.xorWith = hP, P.zip = mP, P.zipObject = gP, P.zipObjectDeep = vP, P.zipWith = yP, P.entries = qy, P.entriesIn = Vy, P.extend = jy, P.extendWith = zy, sp(P, P), P.add = hI, P.attempt = Xy, P.camelCase = yN, P.capitalize = Gy, P.ceil = mI, P.clamp = mN, P.clone = uk, P.cloneDeep = fk, P.cloneDeepWith = pk, P.cloneWith = dk, P.conformsTo = hk, P.deburr = Ky, P.defaultTo = VN, P.divide = gI, P.endsWith = bN, P.eq = Gr, P.escape = _N, P.escapeRegExp = wN, P.every = kP, P.find = IP, P.findIndex = by, P.findKey = zk, P.findLast = AP, P.findLastIndex = _y, P.findLastKey = Hk, P.floor = vI, P.forEach = Sy, P.forEachRight = Ty, P.forIn = Yk, P.forInRight = qk, P.forOwn = Vk, P.forOwnRight = Gk, P.get = np, P.gt = mk, P.gte = gk, P.has = Xk, P.hasIn = rp, P.head = Ey, P.identity = Jn, P.includes = FP, P.indexOf = AT, P.inRange = gN, P.invoke = eN, P.isArguments = si, P.isArray = ut, P.isArrayBuffer = vk, P.isArrayLike = Xn, P.isArrayLikeObject = hn, P.isBoolean = yk, P.isBuffer = _o, P.isDate = bk, P.isElement = _k, P.isEmpty = wk, P.isEqual = Ek, P.isEqualWith = xk, P.isError = Jf, P.isFinite = Ck, P.isFunction = Da, P.isInteger = Dy, P.isLength = mu, P.isMap = Ly, P.isMatch = Ok, P.isMatchWith = Sk, P.isNaN = Tk, P.isNative = Pk, P.isNil = Nk, P.isNull = kk, P.isNumber = Fy, P.isObject = dn, P.isObjectLike = fn, P.isPlainObject = cl, P.isRegExp = ep, P.isSafeInteger = Ik, P.isSet = $y, P.isString = gu, P.isSymbol = hr, P.isTypedArray = Qi, P.isUndefined = Ak, P.isWeakMap = Rk, P.isWeakSet = Mk, P.join = FT, P.kebabCase = EN, P.last = Nr, P.lastIndexOf = $T, P.lowerCase = xN, P.lowerFirst = CN, P.lt = Dk, P.lte = Lk, P.max = yI, P.maxBy = bI, P.mean = _I, P.meanBy = wI, P.min = EI, P.minBy = xI, P.stubArray = cp, P.stubFalse = up, P.stubObject = lI, P.stubString = cI, P.stubTrue = uI, P.multiply = CI, P.nth = BT, P.noConflict = eI, P.noop = lp, P.now = fu, P.pad = ON, P.padEnd = SN, P.padStart = TN, P.parseInt = PN, P.random = vN, P.reduce = jP, P.reduceRight = zP, P.repeat = kN, P.replace = NN, P.result = sN, P.round = OI, P.runInContext = Z, P.sample = YP, P.size = GP, P.snakeCase = IN, P.some = KP, P.sortedIndex = qT, P.sortedIndexBy = VT, P.sortedIndexOf = GT, P.sortedLastIndex = KT, P.sortedLastIndexBy = ZT, P.sortedLastIndexOf = XT, P.startCase = RN, P.startsWith = MN, P.subtract = SI, P.sum = TI, P.sumBy = PI, P.template = DN, P.times = dI, P.toFinite = La, P.toInteger = pt, P.toLength = Wy, P.toLower = LN, P.toNumber = Ir, P.toSafeInteger = Fk, P.toString = Bt, P.toUpper = FN, P.trim = $N, P.trimEnd = BN, P.trimStart = WN, P.truncate = UN, P.unescape = jN, P.uniqueId = pI, P.upperCase = zN, P.upperFirst = ap, P.each = Sy, P.eachRight = Ty, P.first = Ey, sp(P, function() {
        var a = {};
        return ca(P, function(i, f) {
          $t.call(P.prototype, f) || (a[f] = i);
        }), a;
      }(), { chain: !1 }), P.VERSION = r, dr(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(a) {
        P[a].placeholder = P;
      }), dr(["drop", "take"], function(a, i) {
        Ct.prototype[a] = function(f) {
          f = f === n ? 1 : _n(pt(f), 0);
          var g = this.__filtered__ && !i ? new Ct(this) : this.clone();
          return g.__filtered__ ? g.__takeCount__ = Rn(f, g.__takeCount__) : g.__views__.push({
            size: Rn(f, se),
            type: a + (g.__dir__ < 0 ? "Right" : "")
          }), g;
        }, Ct.prototype[a + "Right"] = function(f) {
          return this.reverse()[a](f).reverse();
        };
      }), dr(["filter", "map", "takeWhile"], function(a, i) {
        var f = i + 1, g = f == he || f == Te;
        Ct.prototype[a] = function(w) {
          var M = this.clone();
          return M.__iteratees__.push({
            iteratee: tt(w, 3),
            type: f
          }), M.__filtered__ = M.__filtered__ || g, M;
        };
      }), dr(["head", "last"], function(a, i) {
        var f = "take" + (i ? "Right" : "");
        Ct.prototype[a] = function() {
          return this[f](1).value()[0];
        };
      }), dr(["initial", "tail"], function(a, i) {
        var f = "drop" + (i ? "" : "Right");
        Ct.prototype[a] = function() {
          return this.__filtered__ ? new Ct(this) : this[f](1);
        };
      }), Ct.prototype.compact = function() {
        return this.filter(Jn);
      }, Ct.prototype.find = function(a) {
        return this.filter(a).head();
      }, Ct.prototype.findLast = function(a) {
        return this.reverse().find(a);
      }, Ct.prototype.invokeMap = gt(function(a, i) {
        return typeof a == "function" ? new Ct(this) : this.map(function(f) {
          return rl(f, a, i);
        });
      }), Ct.prototype.reject = function(a) {
        return this.filter(hu(tt(a)));
      }, Ct.prototype.slice = function(a, i) {
        a = pt(a);
        var f = this;
        return f.__filtered__ && (a > 0 || i < 0) ? new Ct(f) : (a < 0 ? f = f.takeRight(-a) : a && (f = f.drop(a)), i !== n && (i = pt(i), f = i < 0 ? f.dropRight(-i) : f.take(i - a)), f);
      }, Ct.prototype.takeRightWhile = function(a) {
        return this.reverse().takeWhile(a).reverse();
      }, Ct.prototype.toArray = function() {
        return this.take(se);
      }, ca(Ct.prototype, function(a, i) {
        var f = /^(?:filter|find|map|reject)|While$/.test(i), g = /^(?:head|last)$/.test(i), w = P[g ? "take" + (i == "last" ? "Right" : "") : i], M = g || /^find/.test(i);
        w && (P.prototype[i] = function() {
          var W = this.__wrapped__, Y = g ? [1] : arguments, X = W instanceof Ct, _e = Y[0], we = X || ut(W), Oe = function(_t) {
            var Tt = w.apply(P, po([_t], Y));
            return g && Le ? Tt[0] : Tt;
          };
          we && f && typeof _e == "function" && _e.length != 1 && (X = we = !1);
          var Le = this.__chain__, qe = !!this.__actions__.length, nt = M && !Le, mt = X && !qe;
          if (!M && we) {
            W = mt ? W : new Ct(this);
            var et = a.apply(W, Y);
            return et.__actions__.push({ func: uu, args: [Oe], thisArg: n }), new Tr(et, Le);
          }
          return nt && mt ? a.apply(this, Y) : (et = this.thru(Oe), nt ? g ? et.value()[0] : et.value() : et);
        });
      }), dr(["pop", "push", "shift", "sort", "splice", "unshift"], function(a) {
        var i = Lc[a], f = /^(?:push|sort|unshift)$/.test(a) ? "tap" : "thru", g = /^(?:pop|shift)$/.test(a);
        P.prototype[a] = function() {
          var w = arguments;
          if (g && !this.__chain__) {
            var M = this.value();
            return i.apply(ut(M) ? M : [], w);
          }
          return this[f](function(W) {
            return i.apply(ut(W) ? W : [], w);
          });
        };
      }), ca(Ct.prototype, function(a, i) {
        var f = P[i];
        if (f) {
          var g = f.name + "";
          $t.call(Vi, g) || (Vi[g] = []), Vi[g].push({ name: i, func: f });
        }
      }), Vi[ru(n, F).name] = [{
        name: "wrapper",
        func: n
      }], Ct.prototype.clone = zO, Ct.prototype.reverse = HO, Ct.prototype.value = YO, P.prototype.at = _P, P.prototype.chain = wP, P.prototype.commit = EP, P.prototype.next = xP, P.prototype.plant = OP, P.prototype.reverse = SP, P.prototype.toJSON = P.prototype.valueOf = P.prototype.value = TP, P.prototype.first = P.prototype.head, Zs && (P.prototype[Zs] = CP), P;
    }, Hi = EO();
    Jo ? ((Jo.exports = Hi)._ = Hi, af._ = Hi) : kn._ = Hi;
  }).call(rs);
})(Zu, Zu.exports);
var R = Zu.exports;
//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Ew;
function Me() {
  return Ew.apply(null, arguments);
}
function sB(e) {
  Ew = e;
}
function ea(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function _i(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function Mt(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Sm(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (Mt(e, t))
      return !1;
  return !0;
}
function tr(e) {
  return e === void 0;
}
function Xa(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function _c(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function xw(e, t) {
  var n = [], r, o = e.length;
  for (r = 0; r < o; ++r)
    n.push(t(e[r], r));
  return n;
}
function Oo(e, t) {
  for (var n in t)
    Mt(t, n) && (e[n] = t[n]);
  return Mt(t, "toString") && (e.toString = t.toString), Mt(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function Ta(e, t, n, r) {
  return qw(e, t, n, r, !0).utc();
}
function lB() {
  return {
    empty: !1,
    unusedTokens: [],
    unusedInput: [],
    overflow: -2,
    charsLeftOver: 0,
    nullInput: !1,
    invalidEra: null,
    invalidMonth: null,
    invalidFormat: !1,
    userInvalidated: !1,
    iso: !1,
    parsedDateParts: [],
    era: null,
    meridiem: null,
    rfc2822: !1,
    weekdayMismatch: !1
  };
}
function ht(e) {
  return e._pf == null && (e._pf = lB()), e._pf;
}
var yh;
Array.prototype.some ? yh = Array.prototype.some : yh = function(e) {
  var t = Object(this), n = t.length >>> 0, r;
  for (r = 0; r < n; r++)
    if (r in t && e.call(this, t[r], r, t))
      return !0;
  return !1;
};
function Tm(e) {
  var t = null, n = !1, r = e._d && !isNaN(e._d.getTime());
  if (r && (t = ht(e), n = yh.call(t.parsedDateParts, function(o) {
    return o != null;
  }), r = t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n), e._strict && (r = r && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(e))
    e._isValid = r;
  else
    return r;
  return e._isValid;
}
function kd(e) {
  var t = Ta(NaN);
  return e != null ? Oo(ht(t), e) : ht(t).userInvalidated = !0, t;
}
var y0 = Me.momentProperties = [], Pp = !1;
function Pm(e, t) {
  var n, r, o, s = y0.length;
  if (tr(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), tr(t._i) || (e._i = t._i), tr(t._f) || (e._f = t._f), tr(t._l) || (e._l = t._l), tr(t._strict) || (e._strict = t._strict), tr(t._tzm) || (e._tzm = t._tzm), tr(t._isUTC) || (e._isUTC = t._isUTC), tr(t._offset) || (e._offset = t._offset), tr(t._pf) || (e._pf = ht(t)), tr(t._locale) || (e._locale = t._locale), s > 0)
    for (n = 0; n < s; n++)
      r = y0[n], o = t[r], tr(o) || (e[r] = o);
  return e;
}
function wc(e) {
  Pm(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), Pp === !1 && (Pp = !0, Me.updateOffset(this), Pp = !1);
}
function ta(e) {
  return e instanceof wc || e != null && e._isAMomentObject != null;
}
function Cw(e) {
  Me.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function zr(e, t) {
  var n = !0;
  return Oo(function() {
    if (Me.deprecationHandler != null && Me.deprecationHandler(null, e), n) {
      var r = [], o, s, u, c = arguments.length;
      for (s = 0; s < c; s++) {
        if (o = "", typeof arguments[s] == "object") {
          o += `
[` + s + "] ";
          for (u in arguments[0])
            Mt(arguments[0], u) && (o += u + ": " + arguments[0][u] + ", ");
          o = o.slice(0, -2);
        } else
          o = arguments[s];
        r.push(o);
      }
      Cw(
        e + `
Arguments: ` + Array.prototype.slice.call(r).join("") + `
` + new Error().stack
      ), n = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var b0 = {};
function Ow(e, t) {
  Me.deprecationHandler != null && Me.deprecationHandler(e, t), b0[e] || (Cw(t), b0[e] = !0);
}
Me.suppressDeprecationWarnings = !1;
Me.deprecationHandler = null;
function Pa(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function cB(e) {
  var t, n;
  for (n in e)
    Mt(e, n) && (t = e[n], Pa(t) ? this[n] = t : this["_" + n] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function bh(e, t) {
  var n = Oo({}, e), r;
  for (r in t)
    Mt(t, r) && (_i(e[r]) && _i(t[r]) ? (n[r] = {}, Oo(n[r], e[r]), Oo(n[r], t[r])) : t[r] != null ? n[r] = t[r] : delete n[r]);
  for (r in e)
    Mt(e, r) && !Mt(t, r) && _i(e[r]) && (n[r] = Oo({}, n[r]));
  return n;
}
function km(e) {
  e != null && this.set(e);
}
var _h;
Object.keys ? _h = Object.keys : _h = function(e) {
  var t, n = [];
  for (t in e)
    Mt(e, t) && n.push(t);
  return n;
};
var uB = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function dB(e, t, n) {
  var r = this._calendar[e] || this._calendar.sameElse;
  return Pa(r) ? r.call(t, n) : r;
}
function Oa(e, t, n) {
  var r = "" + Math.abs(e), o = t - r.length, s = e >= 0;
  return (s ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, o)).toString().substr(1) + r;
}
var Nm = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, wu = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, kp = {}, fs = {};
function Ze(e, t, n, r) {
  var o = r;
  typeof r == "string" && (o = function() {
    return this[r]();
  }), e && (fs[e] = o), t && (fs[t[0]] = function() {
    return Oa(o.apply(this, arguments), t[1], t[2]);
  }), n && (fs[n] = function() {
    return this.localeData().ordinal(
      o.apply(this, arguments),
      e
    );
  });
}
function fB(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function pB(e) {
  var t = e.match(Nm), n, r;
  for (n = 0, r = t.length; n < r; n++)
    fs[t[n]] ? t[n] = fs[t[n]] : t[n] = fB(t[n]);
  return function(o) {
    var s = "", u;
    for (u = 0; u < r; u++)
      s += Pa(t[u]) ? t[u].call(o, e) : t[u];
    return s;
  };
}
function Au(e, t) {
  return e.isValid() ? (t = Sw(t, e.localeData()), kp[t] = kp[t] || pB(t), kp[t](e)) : e.localeData().invalidDate();
}
function Sw(e, t) {
  var n = 5;
  function r(o) {
    return t.longDateFormat(o) || o;
  }
  for (wu.lastIndex = 0; n >= 0 && wu.test(e); )
    e = e.replace(
      wu,
      r
    ), wu.lastIndex = 0, n -= 1;
  return e;
}
var hB = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function mB(e) {
  var t = this._longDateFormat[e], n = this._longDateFormat[e.toUpperCase()];
  return t || !n ? t : (this._longDateFormat[e] = n.match(Nm).map(function(r) {
    return r === "MMMM" || r === "MM" || r === "DD" || r === "dddd" ? r.slice(1) : r;
  }).join(""), this._longDateFormat[e]);
}
var gB = "Invalid date";
function vB() {
  return this._invalidDate;
}
var yB = "%d", bB = /\d{1,2}/;
function _B(e) {
  return this._ordinal.replace("%d", e);
}
var wB = {
  future: "in %s",
  past: "%s ago",
  s: "a few seconds",
  ss: "%d seconds",
  m: "a minute",
  mm: "%d minutes",
  h: "an hour",
  hh: "%d hours",
  d: "a day",
  dd: "%d days",
  w: "a week",
  ww: "%d weeks",
  M: "a month",
  MM: "%d months",
  y: "a year",
  yy: "%d years"
};
function EB(e, t, n, r) {
  var o = this._relativeTime[n];
  return Pa(o) ? o(e, t, n, r) : o.replace(/%d/i, e);
}
function xB(e, t) {
  var n = this._relativeTime[e > 0 ? "future" : "past"];
  return Pa(n) ? n(t) : n.replace(/%s/i, t);
}
var _0 = {
  D: "date",
  dates: "date",
  date: "date",
  d: "day",
  days: "day",
  day: "day",
  e: "weekday",
  weekdays: "weekday",
  weekday: "weekday",
  E: "isoWeekday",
  isoweekdays: "isoWeekday",
  isoweekday: "isoWeekday",
  DDD: "dayOfYear",
  dayofyears: "dayOfYear",
  dayofyear: "dayOfYear",
  h: "hour",
  hours: "hour",
  hour: "hour",
  ms: "millisecond",
  milliseconds: "millisecond",
  millisecond: "millisecond",
  m: "minute",
  minutes: "minute",
  minute: "minute",
  M: "month",
  months: "month",
  month: "month",
  Q: "quarter",
  quarters: "quarter",
  quarter: "quarter",
  s: "second",
  seconds: "second",
  second: "second",
  gg: "weekYear",
  weekyears: "weekYear",
  weekyear: "weekYear",
  GG: "isoWeekYear",
  isoweekyears: "isoWeekYear",
  isoweekyear: "isoWeekYear",
  w: "week",
  weeks: "week",
  week: "week",
  W: "isoWeek",
  isoweeks: "isoWeek",
  isoweek: "isoWeek",
  y: "year",
  years: "year",
  year: "year"
};
function Hr(e) {
  return typeof e == "string" ? _0[e] || _0[e.toLowerCase()] : void 0;
}
function Im(e) {
  var t = {}, n, r;
  for (r in e)
    Mt(e, r) && (n = Hr(r), n && (t[n] = e[r]));
  return t;
}
var CB = {
  date: 9,
  day: 11,
  weekday: 11,
  isoWeekday: 11,
  dayOfYear: 4,
  hour: 13,
  millisecond: 16,
  minute: 14,
  month: 8,
  quarter: 7,
  second: 15,
  weekYear: 1,
  isoWeekYear: 1,
  week: 5,
  isoWeek: 5,
  year: 1
};
function OB(e) {
  var t = [], n;
  for (n in e)
    Mt(e, n) && t.push({ unit: n, priority: CB[n] });
  return t.sort(function(r, o) {
    return r.priority - o.priority;
  }), t;
}
var Tw = /\d/, xr = /\d\d/, Pw = /\d{3}/, Am = /\d{4}/, Nd = /[+-]?\d{6}/, on = /\d\d?/, kw = /\d\d\d\d?/, Nw = /\d\d\d\d\d\d?/, Id = /\d{1,3}/, Rm = /\d{1,4}/, Ad = /[+-]?\d{1,6}/, zs = /\d+/, Rd = /[+-]?\d+/, SB = /Z|[+-]\d\d:?\d\d/gi, Md = /Z|[+-]\d\d(?::?\d\d)?/gi, TB = /[+-]?\d+(\.\d{1,3})?/, Ec = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, Hs = /^[1-9]\d?/, Mm = /^([1-9]\d|\d)/, Xu;
Xu = {};
function ze(e, t, n) {
  Xu[e] = Pa(t) ? t : function(r, o) {
    return r && n ? n : t;
  };
}
function PB(e, t) {
  return Mt(Xu, e) ? Xu[e](t._strict, t._locale) : new RegExp(kB(e));
}
function kB(e) {
  return qa(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, n, r, o, s) {
        return n || r || o || s;
      }
    )
  );
}
function qa(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function Mr(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function Ot(e) {
  var t = +e, n = 0;
  return t !== 0 && isFinite(t) && (n = Mr(t)), n;
}
var wh = {};
function Vt(e, t) {
  var n, r = t, o;
  for (typeof e == "string" && (e = [e]), Xa(t) && (r = function(s, u) {
    u[t] = Ot(s);
  }), o = e.length, n = 0; n < o; n++)
    wh[e[n]] = r;
}
function xc(e, t) {
  Vt(e, function(n, r, o, s) {
    o._w = o._w || {}, t(n, o._w, o, s);
  });
}
function NB(e, t, n) {
  t != null && Mt(wh, e) && wh[e](t, n._a, n, e);
}
function Dd(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
var Fn = 0, za = 1, ma = 2, En = 3, Xr = 4, Ha = 5, mi = 6, IB = 7, AB = 8;
Ze("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? Oa(e, 4) : "+" + e;
});
Ze(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
Ze(0, ["YYYY", 4], 0, "year");
Ze(0, ["YYYYY", 5], 0, "year");
Ze(0, ["YYYYYY", 6, !0], 0, "year");
ze("Y", Rd);
ze("YY", on, xr);
ze("YYYY", Rm, Am);
ze("YYYYY", Ad, Nd);
ze("YYYYYY", Ad, Nd);
Vt(["YYYYY", "YYYYYY"], Fn);
Vt("YYYY", function(e, t) {
  t[Fn] = e.length === 2 ? Me.parseTwoDigitYear(e) : Ot(e);
});
Vt("YY", function(e, t) {
  t[Fn] = Me.parseTwoDigitYear(e);
});
Vt("Y", function(e, t) {
  t[Fn] = parseInt(e, 10);
});
function Il(e) {
  return Dd(e) ? 366 : 365;
}
Me.parseTwoDigitYear = function(e) {
  return Ot(e) + (Ot(e) > 68 ? 1900 : 2e3);
};
var Iw = Ys("FullYear", !0);
function RB() {
  return Dd(this.year());
}
function Ys(e, t) {
  return function(n) {
    return n != null ? (Aw(this, e, n), Me.updateOffset(this, t), this) : ac(this, e);
  };
}
function ac(e, t) {
  if (!e.isValid())
    return NaN;
  var n = e._d, r = e._isUTC;
  switch (t) {
    case "Milliseconds":
      return r ? n.getUTCMilliseconds() : n.getMilliseconds();
    case "Seconds":
      return r ? n.getUTCSeconds() : n.getSeconds();
    case "Minutes":
      return r ? n.getUTCMinutes() : n.getMinutes();
    case "Hours":
      return r ? n.getUTCHours() : n.getHours();
    case "Date":
      return r ? n.getUTCDate() : n.getDate();
    case "Day":
      return r ? n.getUTCDay() : n.getDay();
    case "Month":
      return r ? n.getUTCMonth() : n.getMonth();
    case "FullYear":
      return r ? n.getUTCFullYear() : n.getFullYear();
    default:
      return NaN;
  }
}
function Aw(e, t, n) {
  var r, o, s, u, c;
  if (!(!e.isValid() || isNaN(n))) {
    switch (r = e._d, o = e._isUTC, t) {
      case "Milliseconds":
        return void (o ? r.setUTCMilliseconds(n) : r.setMilliseconds(n));
      case "Seconds":
        return void (o ? r.setUTCSeconds(n) : r.setSeconds(n));
      case "Minutes":
        return void (o ? r.setUTCMinutes(n) : r.setMinutes(n));
      case "Hours":
        return void (o ? r.setUTCHours(n) : r.setHours(n));
      case "Date":
        return void (o ? r.setUTCDate(n) : r.setDate(n));
      case "FullYear":
        break;
      default:
        return;
    }
    s = n, u = e.month(), c = e.date(), c = c === 29 && u === 1 && !Dd(s) ? 28 : c, o ? r.setUTCFullYear(s, u, c) : r.setFullYear(s, u, c);
  }
}
function MB(e) {
  return e = Hr(e), Pa(this[e]) ? this[e]() : this;
}
function DB(e, t) {
  if (typeof e == "object") {
    e = Im(e);
    var n = OB(e), r, o = n.length;
    for (r = 0; r < o; r++)
      this[n[r].unit](e[n[r].unit]);
  } else if (e = Hr(e), Pa(this[e]))
    return this[e](t);
  return this;
}
function LB(e, t) {
  return (e % t + t) % t;
}
var gn;
Array.prototype.indexOf ? gn = Array.prototype.indexOf : gn = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function Dm(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var n = LB(t, 12);
  return e += (t - n) / 12, n === 1 ? Dd(e) ? 29 : 28 : 31 - n % 7 % 2;
}
Ze("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
Ze("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
Ze("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
ze("M", on, Hs);
ze("MM", on, xr);
ze("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
ze("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
Vt(["M", "MM"], function(e, t) {
  t[za] = Ot(e) - 1;
});
Vt(["MMM", "MMMM"], function(e, t, n, r) {
  var o = n._locale.monthsParse(e, r, n._strict);
  o != null ? t[za] = o : ht(n).invalidMonth = e;
});
var FB = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), Rw = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Mw = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, $B = Ec, BB = Ec;
function WB(e, t) {
  return e ? ea(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Mw).test(t) ? "format" : "standalone"][e.month()] : ea(this._months) ? this._months : this._months.standalone;
}
function UB(e, t) {
  return e ? ea(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Mw.test(t) ? "format" : "standalone"][e.month()] : ea(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function jB(e, t, n) {
  var r, o, s, u = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r)
      s = Ta([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(
        s,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[r] = this.months(s, "").toLocaleLowerCase();
  return n ? t === "MMM" ? (o = gn.call(this._shortMonthsParse, u), o !== -1 ? o : null) : (o = gn.call(this._longMonthsParse, u), o !== -1 ? o : null) : t === "MMM" ? (o = gn.call(this._shortMonthsParse, u), o !== -1 ? o : (o = gn.call(this._longMonthsParse, u), o !== -1 ? o : null)) : (o = gn.call(this._longMonthsParse, u), o !== -1 ? o : (o = gn.call(this._shortMonthsParse, u), o !== -1 ? o : null));
}
function zB(e, t, n) {
  var r, o, s;
  if (this._monthsParseExact)
    return jB.call(this, e, t, n);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
    if (o = Ta([2e3, r]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp(
      "^" + this.months(o, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[r] = new RegExp(
      "^" + this.monthsShort(o, "").replace(".", "") + "$",
      "i"
    )), !n && !this._monthsParse[r] && (s = "^" + this.months(o, "") + "|^" + this.monthsShort(o, ""), this._monthsParse[r] = new RegExp(s.replace(".", ""), "i")), n && t === "MMMM" && this._longMonthsParse[r].test(e))
      return r;
    if (n && t === "MMM" && this._shortMonthsParse[r].test(e))
      return r;
    if (!n && this._monthsParse[r].test(e))
      return r;
  }
}
function Dw(e, t) {
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = Ot(t);
    else if (t = e.localeData().monthsParse(t), !Xa(t))
      return e;
  }
  var n = t, r = e.date();
  return r = r < 29 ? r : Math.min(r, Dm(e.year(), n)), e._isUTC ? e._d.setUTCMonth(n, r) : e._d.setMonth(n, r), e;
}
function Lw(e) {
  return e != null ? (Dw(this, e), Me.updateOffset(this, !0), this) : ac(this, "Month");
}
function HB() {
  return Dm(this.year(), this.month());
}
function YB(e) {
  return this._monthsParseExact ? (Mt(this, "_monthsRegex") || Fw.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (Mt(this, "_monthsShortRegex") || (this._monthsShortRegex = $B), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function qB(e) {
  return this._monthsParseExact ? (Mt(this, "_monthsRegex") || Fw.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (Mt(this, "_monthsRegex") || (this._monthsRegex = BB), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function Fw() {
  function e(d, p) {
    return p.length - d.length;
  }
  var t = [], n = [], r = [], o, s, u, c;
  for (o = 0; o < 12; o++)
    s = Ta([2e3, o]), u = qa(this.monthsShort(s, "")), c = qa(this.months(s, "")), t.push(u), n.push(c), r.push(c), r.push(u);
  t.sort(e), n.sort(e), r.sort(e), this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function VB(e, t, n, r, o, s, u) {
  var c;
  return e < 100 && e >= 0 ? (c = new Date(e + 400, t, n, r, o, s, u), isFinite(c.getFullYear()) && c.setFullYear(e)) : c = new Date(e, t, n, r, o, s, u), c;
}
function oc(e) {
  var t, n;
  return e < 100 && e >= 0 ? (n = Array.prototype.slice.call(arguments), n[0] = e + 400, t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function Qu(e, t, n) {
  var r = 7 + t - n, o = (7 + oc(e, 0, r).getUTCDay() - t) % 7;
  return -o + r - 1;
}
function $w(e, t, n, r, o) {
  var s = (7 + n - r) % 7, u = Qu(e, r, o), c = 1 + 7 * (t - 1) + s + u, d, p;
  return c <= 0 ? (d = e - 1, p = Il(d) + c) : c > Il(e) ? (d = e + 1, p = c - Il(e)) : (d = e, p = c), {
    year: d,
    dayOfYear: p
  };
}
function ic(e, t, n) {
  var r = Qu(e.year(), t, n), o = Math.floor((e.dayOfYear() - r - 1) / 7) + 1, s, u;
  return o < 1 ? (u = e.year() - 1, s = o + Va(u, t, n)) : o > Va(e.year(), t, n) ? (s = o - Va(e.year(), t, n), u = e.year() + 1) : (u = e.year(), s = o), {
    week: s,
    year: u
  };
}
function Va(e, t, n) {
  var r = Qu(e, t, n), o = Qu(e + 1, t, n);
  return (Il(e) - r + o) / 7;
}
Ze("w", ["ww", 2], "wo", "week");
Ze("W", ["WW", 2], "Wo", "isoWeek");
ze("w", on, Hs);
ze("ww", on, xr);
ze("W", on, Hs);
ze("WW", on, xr);
xc(
  ["w", "ww", "W", "WW"],
  function(e, t, n, r) {
    t[r.substr(0, 1)] = Ot(e);
  }
);
function GB(e) {
  return ic(e, this._week.dow, this._week.doy).week;
}
var KB = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function ZB() {
  return this._week.dow;
}
function XB() {
  return this._week.doy;
}
function QB(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function JB(e) {
  var t = ic(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
Ze("d", 0, "do", "day");
Ze("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
Ze("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
Ze("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
Ze("e", 0, 0, "weekday");
Ze("E", 0, 0, "isoWeekday");
ze("d", on);
ze("e", on);
ze("E", on);
ze("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
ze("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
ze("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
xc(["dd", "ddd", "dddd"], function(e, t, n, r) {
  var o = n._locale.weekdaysParse(e, r, n._strict);
  o != null ? t.d = o : ht(n).invalidWeekday = e;
});
xc(["d", "e", "E"], function(e, t, n, r) {
  t[r] = Ot(e);
});
function e4(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function t4(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function Lm(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var n4 = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Bw = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), r4 = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), a4 = Ec, o4 = Ec, i4 = Ec;
function s4(e, t) {
  var n = ea(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? Lm(n, this._week.dow) : e ? n[e.day()] : n;
}
function l4(e) {
  return e === !0 ? Lm(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function c4(e) {
  return e === !0 ? Lm(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function u4(e, t, n) {
  var r, o, s, u = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r)
      s = Ta([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(
        s,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(
        s,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(s, "").toLocaleLowerCase();
  return n ? t === "dddd" ? (o = gn.call(this._weekdaysParse, u), o !== -1 ? o : null) : t === "ddd" ? (o = gn.call(this._shortWeekdaysParse, u), o !== -1 ? o : null) : (o = gn.call(this._minWeekdaysParse, u), o !== -1 ? o : null) : t === "dddd" ? (o = gn.call(this._weekdaysParse, u), o !== -1 || (o = gn.call(this._shortWeekdaysParse, u), o !== -1) ? o : (o = gn.call(this._minWeekdaysParse, u), o !== -1 ? o : null)) : t === "ddd" ? (o = gn.call(this._shortWeekdaysParse, u), o !== -1 || (o = gn.call(this._weekdaysParse, u), o !== -1) ? o : (o = gn.call(this._minWeekdaysParse, u), o !== -1 ? o : null)) : (o = gn.call(this._minWeekdaysParse, u), o !== -1 || (o = gn.call(this._weekdaysParse, u), o !== -1) ? o : (o = gn.call(this._shortWeekdaysParse, u), o !== -1 ? o : null));
}
function d4(e, t, n) {
  var r, o, s;
  if (this._weekdaysParseExact)
    return u4.call(this, e, t, n);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
    if (o = Ta([2e3, 1]).day(r), n && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp(
      "^" + this.weekdays(o, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[r] = new RegExp(
      "^" + this.weekdaysShort(o, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[r] = new RegExp(
      "^" + this.weekdaysMin(o, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[r] || (s = "^" + this.weekdays(o, "") + "|^" + this.weekdaysShort(o, "") + "|^" + this.weekdaysMin(o, ""), this._weekdaysParse[r] = new RegExp(s.replace(".", ""), "i")), n && t === "dddd" && this._fullWeekdaysParse[r].test(e))
      return r;
    if (n && t === "ddd" && this._shortWeekdaysParse[r].test(e))
      return r;
    if (n && t === "dd" && this._minWeekdaysParse[r].test(e))
      return r;
    if (!n && this._weekdaysParse[r].test(e))
      return r;
  }
}
function f4(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = ac(this, "Day");
  return e != null ? (e = e4(e, this.localeData()), this.add(e - t, "d")) : t;
}
function p4(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function h4(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = t4(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function m4(e) {
  return this._weekdaysParseExact ? (Mt(this, "_weekdaysRegex") || Fm.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (Mt(this, "_weekdaysRegex") || (this._weekdaysRegex = a4), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function g4(e) {
  return this._weekdaysParseExact ? (Mt(this, "_weekdaysRegex") || Fm.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (Mt(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = o4), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function v4(e) {
  return this._weekdaysParseExact ? (Mt(this, "_weekdaysRegex") || Fm.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (Mt(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = i4), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function Fm() {
  function e(h, m) {
    return m.length - h.length;
  }
  var t = [], n = [], r = [], o = [], s, u, c, d, p;
  for (s = 0; s < 7; s++)
    u = Ta([2e3, 1]).day(s), c = qa(this.weekdaysMin(u, "")), d = qa(this.weekdaysShort(u, "")), p = qa(this.weekdays(u, "")), t.push(c), n.push(d), r.push(p), o.push(c), o.push(d), o.push(p);
  t.sort(e), n.sort(e), r.sort(e), o.sort(e), this._weekdaysRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function $m() {
  return this.hours() % 12 || 12;
}
function y4() {
  return this.hours() || 24;
}
Ze("H", ["HH", 2], 0, "hour");
Ze("h", ["hh", 2], 0, $m);
Ze("k", ["kk", 2], 0, y4);
Ze("hmm", 0, 0, function() {
  return "" + $m.apply(this) + Oa(this.minutes(), 2);
});
Ze("hmmss", 0, 0, function() {
  return "" + $m.apply(this) + Oa(this.minutes(), 2) + Oa(this.seconds(), 2);
});
Ze("Hmm", 0, 0, function() {
  return "" + this.hours() + Oa(this.minutes(), 2);
});
Ze("Hmmss", 0, 0, function() {
  return "" + this.hours() + Oa(this.minutes(), 2) + Oa(this.seconds(), 2);
});
function Ww(e, t) {
  Ze(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
Ww("a", !0);
Ww("A", !1);
function Uw(e, t) {
  return t._meridiemParse;
}
ze("a", Uw);
ze("A", Uw);
ze("H", on, Mm);
ze("h", on, Hs);
ze("k", on, Hs);
ze("HH", on, xr);
ze("hh", on, xr);
ze("kk", on, xr);
ze("hmm", kw);
ze("hmmss", Nw);
ze("Hmm", kw);
ze("Hmmss", Nw);
Vt(["H", "HH"], En);
Vt(["k", "kk"], function(e, t, n) {
  var r = Ot(e);
  t[En] = r === 24 ? 0 : r;
});
Vt(["a", "A"], function(e, t, n) {
  n._isPm = n._locale.isPM(e), n._meridiem = e;
});
Vt(["h", "hh"], function(e, t, n) {
  t[En] = Ot(e), ht(n).bigHour = !0;
});
Vt("hmm", function(e, t, n) {
  var r = e.length - 2;
  t[En] = Ot(e.substr(0, r)), t[Xr] = Ot(e.substr(r)), ht(n).bigHour = !0;
});
Vt("hmmss", function(e, t, n) {
  var r = e.length - 4, o = e.length - 2;
  t[En] = Ot(e.substr(0, r)), t[Xr] = Ot(e.substr(r, 2)), t[Ha] = Ot(e.substr(o)), ht(n).bigHour = !0;
});
Vt("Hmm", function(e, t, n) {
  var r = e.length - 2;
  t[En] = Ot(e.substr(0, r)), t[Xr] = Ot(e.substr(r));
});
Vt("Hmmss", function(e, t, n) {
  var r = e.length - 4, o = e.length - 2;
  t[En] = Ot(e.substr(0, r)), t[Xr] = Ot(e.substr(r, 2)), t[Ha] = Ot(e.substr(o));
});
function b4(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var _4 = /[ap]\.?m?\.?/i, w4 = Ys("Hours", !0);
function E4(e, t, n) {
  return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM";
}
var jw = {
  calendar: uB,
  longDateFormat: hB,
  invalidDate: gB,
  ordinal: yB,
  dayOfMonthOrdinalParse: bB,
  relativeTime: wB,
  months: FB,
  monthsShort: Rw,
  week: KB,
  weekdays: n4,
  weekdaysMin: r4,
  weekdaysShort: Bw,
  meridiemParse: _4
}, ln = {}, gl = {}, sc;
function x4(e, t) {
  var n, r = Math.min(e.length, t.length);
  for (n = 0; n < r; n += 1)
    if (e[n] !== t[n])
      return n;
  return r;
}
function w0(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function C4(e) {
  for (var t = 0, n, r, o, s; t < e.length; ) {
    for (s = w0(e[t]).split("-"), n = s.length, r = w0(e[t + 1]), r = r ? r.split("-") : null; n > 0; ) {
      if (o = Ld(s.slice(0, n).join("-")), o)
        return o;
      if (r && r.length >= n && x4(s, r) >= n - 1)
        break;
      n--;
    }
    t++;
  }
  return sc;
}
function O4(e) {
  return !!(e && e.match("^[^/\\\\]*$"));
}
function Ld(e) {
  var t = null, n;
  if (ln[e] === void 0 && typeof module < "u" && module && module.exports && O4(e))
    try {
      t = sc._abbr, n = require, n("./locale/" + e), Po(t);
    } catch {
      ln[e] = null;
    }
  return ln[e];
}
function Po(e, t) {
  var n;
  return e && (tr(t) ? n = oo(e) : n = Bm(e, t), n ? sc = n : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), sc._abbr;
}
function Bm(e, t) {
  if (t !== null) {
    var n, r = jw;
    if (t.abbr = e, ln[e] != null)
      Ow(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), r = ln[e]._config;
    else if (t.parentLocale != null)
      if (ln[t.parentLocale] != null)
        r = ln[t.parentLocale]._config;
      else if (n = Ld(t.parentLocale), n != null)
        r = n._config;
      else
        return gl[t.parentLocale] || (gl[t.parentLocale] = []), gl[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return ln[e] = new km(bh(r, t)), gl[e] && gl[e].forEach(function(o) {
      Bm(o.name, o.config);
    }), Po(e), ln[e];
  } else
    return delete ln[e], null;
}
function S4(e, t) {
  if (t != null) {
    var n, r, o = jw;
    ln[e] != null && ln[e].parentLocale != null ? ln[e].set(bh(ln[e]._config, t)) : (r = Ld(e), r != null && (o = r._config), t = bh(o, t), r == null && (t.abbr = e), n = new km(t), n.parentLocale = ln[e], ln[e] = n), Po(e);
  } else
    ln[e] != null && (ln[e].parentLocale != null ? (ln[e] = ln[e].parentLocale, e === Po() && Po(e)) : ln[e] != null && delete ln[e]);
  return ln[e];
}
function oo(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return sc;
  if (!ea(e)) {
    if (t = Ld(e), t)
      return t;
    e = [e];
  }
  return C4(e);
}
function T4() {
  return _h(ln);
}
function Wm(e) {
  var t, n = e._a;
  return n && ht(e).overflow === -2 && (t = n[za] < 0 || n[za] > 11 ? za : n[ma] < 1 || n[ma] > Dm(n[Fn], n[za]) ? ma : n[En] < 0 || n[En] > 24 || n[En] === 24 && (n[Xr] !== 0 || n[Ha] !== 0 || n[mi] !== 0) ? En : n[Xr] < 0 || n[Xr] > 59 ? Xr : n[Ha] < 0 || n[Ha] > 59 ? Ha : n[mi] < 0 || n[mi] > 999 ? mi : -1, ht(e)._overflowDayOfYear && (t < Fn || t > ma) && (t = ma), ht(e)._overflowWeeks && t === -1 && (t = IB), ht(e)._overflowWeekday && t === -1 && (t = AB), ht(e).overflow = t), e;
}
var P4 = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, k4 = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, N4 = /Z|[+-]\d\d(?::?\d\d)?/, Eu = [
  ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
  ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
  ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
  ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
  ["YYYY-DDD", /\d{4}-\d{3}/],
  ["YYYY-MM", /\d{4}-\d\d/, !1],
  ["YYYYYYMMDD", /[+-]\d{10}/],
  ["YYYYMMDD", /\d{8}/],
  ["GGGG[W]WWE", /\d{4}W\d{3}/],
  ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
  ["YYYYDDD", /\d{7}/],
  ["YYYYMM", /\d{6}/, !1],
  ["YYYY", /\d{4}/, !1]
], Np = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], I4 = /^\/?Date\((-?\d+)/i, A4 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, R4 = {
  UT: 0,
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function zw(e) {
  var t, n, r = e._i, o = P4.exec(r) || k4.exec(r), s, u, c, d, p = Eu.length, h = Np.length;
  if (o) {
    for (ht(e).iso = !0, t = 0, n = p; t < n; t++)
      if (Eu[t][1].exec(o[1])) {
        u = Eu[t][0], s = Eu[t][2] !== !1;
        break;
      }
    if (u == null) {
      e._isValid = !1;
      return;
    }
    if (o[3]) {
      for (t = 0, n = h; t < n; t++)
        if (Np[t][1].exec(o[3])) {
          c = (o[2] || " ") + Np[t][0];
          break;
        }
      if (c == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!s && c != null) {
      e._isValid = !1;
      return;
    }
    if (o[4])
      if (N4.exec(o[4]))
        d = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = u + (c || "") + (d || ""), jm(e);
  } else
    e._isValid = !1;
}
function M4(e, t, n, r, o, s) {
  var u = [
    D4(e),
    Rw.indexOf(t),
    parseInt(n, 10),
    parseInt(r, 10),
    parseInt(o, 10)
  ];
  return s && u.push(parseInt(s, 10)), u;
}
function D4(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function L4(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function F4(e, t, n) {
  if (e) {
    var r = Bw.indexOf(e), o = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (r !== o)
      return ht(n).weekdayMismatch = !0, n._isValid = !1, !1;
  }
  return !0;
}
function $4(e, t, n) {
  if (e)
    return R4[e];
  if (t)
    return 0;
  var r = parseInt(n, 10), o = r % 100, s = (r - o) / 100;
  return s * 60 + o;
}
function Hw(e) {
  var t = A4.exec(L4(e._i)), n;
  if (t) {
    if (n = M4(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !F4(t[1], n, e))
      return;
    e._a = n, e._tzm = $4(t[8], t[9], t[10]), e._d = oc.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), ht(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function B4(e) {
  var t = I4.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (zw(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (Hw(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : Me.createFromInputFallback(e);
}
Me.createFromInputFallback = zr(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function os(e, t, n) {
  return e ?? t ?? n;
}
function W4(e) {
  var t = new Date(Me.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function Um(e) {
  var t, n, r = [], o, s, u;
  if (!e._d) {
    for (o = W4(e), e._w && e._a[ma] == null && e._a[za] == null && U4(e), e._dayOfYear != null && (u = os(e._a[Fn], o[Fn]), (e._dayOfYear > Il(u) || e._dayOfYear === 0) && (ht(e)._overflowDayOfYear = !0), n = oc(u, 0, e._dayOfYear), e._a[za] = n.getUTCMonth(), e._a[ma] = n.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = r[t] = o[t];
    for (; t < 7; t++)
      e._a[t] = r[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[En] === 24 && e._a[Xr] === 0 && e._a[Ha] === 0 && e._a[mi] === 0 && (e._nextDay = !0, e._a[En] = 0), e._d = (e._useUTC ? oc : VB).apply(
      null,
      r
    ), s = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[En] = 24), e._w && typeof e._w.d < "u" && e._w.d !== s && (ht(e).weekdayMismatch = !0);
  }
}
function U4(e) {
  var t, n, r, o, s, u, c, d, p;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (s = 1, u = 4, n = os(
    t.GG,
    e._a[Fn],
    ic(an(), 1, 4).year
  ), r = os(t.W, 1), o = os(t.E, 1), (o < 1 || o > 7) && (d = !0)) : (s = e._locale._week.dow, u = e._locale._week.doy, p = ic(an(), s, u), n = os(t.gg, e._a[Fn], p.year), r = os(t.w, p.week), t.d != null ? (o = t.d, (o < 0 || o > 6) && (d = !0)) : t.e != null ? (o = t.e + s, (t.e < 0 || t.e > 6) && (d = !0)) : o = s), r < 1 || r > Va(n, s, u) ? ht(e)._overflowWeeks = !0 : d != null ? ht(e)._overflowWeekday = !0 : (c = $w(n, r, o, s, u), e._a[Fn] = c.year, e._dayOfYear = c.dayOfYear);
}
Me.ISO_8601 = function() {
};
Me.RFC_2822 = function() {
};
function jm(e) {
  if (e._f === Me.ISO_8601) {
    zw(e);
    return;
  }
  if (e._f === Me.RFC_2822) {
    Hw(e);
    return;
  }
  e._a = [], ht(e).empty = !0;
  var t = "" + e._i, n, r, o, s, u, c = t.length, d = 0, p, h;
  for (o = Sw(e._f, e._locale).match(Nm) || [], h = o.length, n = 0; n < h; n++)
    s = o[n], r = (t.match(PB(s, e)) || [])[0], r && (u = t.substr(0, t.indexOf(r)), u.length > 0 && ht(e).unusedInput.push(u), t = t.slice(
      t.indexOf(r) + r.length
    ), d += r.length), fs[s] ? (r ? ht(e).empty = !1 : ht(e).unusedTokens.push(s), NB(s, r, e)) : e._strict && !r && ht(e).unusedTokens.push(s);
  ht(e).charsLeftOver = c - d, t.length > 0 && ht(e).unusedInput.push(t), e._a[En] <= 12 && ht(e).bigHour === !0 && e._a[En] > 0 && (ht(e).bigHour = void 0), ht(e).parsedDateParts = e._a.slice(0), ht(e).meridiem = e._meridiem, e._a[En] = j4(
    e._locale,
    e._a[En],
    e._meridiem
  ), p = ht(e).era, p !== null && (e._a[Fn] = e._locale.erasConvertYear(p, e._a[Fn])), Um(e), Wm(e);
}
function j4(e, t, n) {
  var r;
  return n == null ? t : e.meridiemHour != null ? e.meridiemHour(t, n) : (e.isPM != null && (r = e.isPM(n), r && t < 12 && (t += 12), !r && t === 12 && (t = 0)), t);
}
function z4(e) {
  var t, n, r, o, s, u, c = !1, d = e._f.length;
  if (d === 0) {
    ht(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (o = 0; o < d; o++)
    s = 0, u = !1, t = Pm({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[o], jm(t), Tm(t) && (u = !0), s += ht(t).charsLeftOver, s += ht(t).unusedTokens.length * 10, ht(t).score = s, c ? s < r && (r = s, n = t) : (r == null || s < r || u) && (r = s, n = t, u && (c = !0));
  Oo(e, n || t);
}
function H4(e) {
  if (!e._d) {
    var t = Im(e._i), n = t.day === void 0 ? t.date : t.day;
    e._a = xw(
      [t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond],
      function(r) {
        return r && parseInt(r, 10);
      }
    ), Um(e);
  }
}
function Y4(e) {
  var t = new wc(Wm(Yw(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function Yw(e) {
  var t = e._i, n = e._f;
  return e._locale = e._locale || oo(e._l), t === null || n === void 0 && t === "" ? kd({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), ta(t) ? new wc(Wm(t)) : (_c(t) ? e._d = t : ea(n) ? z4(e) : n ? jm(e) : q4(e), Tm(e) || (e._d = null), e));
}
function q4(e) {
  var t = e._i;
  tr(t) ? e._d = new Date(Me.now()) : _c(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? B4(e) : ea(t) ? (e._a = xw(t.slice(0), function(n) {
    return parseInt(n, 10);
  }), Um(e)) : _i(t) ? H4(e) : Xa(t) ? e._d = new Date(t) : Me.createFromInputFallback(e);
}
function qw(e, t, n, r, o) {
  var s = {};
  return (t === !0 || t === !1) && (r = t, t = void 0), (n === !0 || n === !1) && (r = n, n = void 0), (_i(e) && Sm(e) || ea(e) && e.length === 0) && (e = void 0), s._isAMomentObject = !0, s._useUTC = s._isUTC = o, s._l = n, s._i = e, s._f = t, s._strict = r, Y4(s);
}
function an(e, t, n, r) {
  return qw(e, t, n, r, !1);
}
var V4 = zr(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = an.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : kd();
  }
), G4 = zr(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = an.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : kd();
  }
);
function Vw(e, t) {
  var n, r;
  if (t.length === 1 && ea(t[0]) && (t = t[0]), !t.length)
    return an();
  for (n = t[0], r = 1; r < t.length; ++r)
    (!t[r].isValid() || t[r][e](n)) && (n = t[r]);
  return n;
}
function K4() {
  var e = [].slice.call(arguments, 0);
  return Vw("isBefore", e);
}
function Z4() {
  var e = [].slice.call(arguments, 0);
  return Vw("isAfter", e);
}
var X4 = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, vl = [
  "year",
  "quarter",
  "month",
  "week",
  "day",
  "hour",
  "minute",
  "second",
  "millisecond"
];
function Q4(e) {
  var t, n = !1, r, o = vl.length;
  for (t in e)
    if (Mt(e, t) && !(gn.call(vl, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (r = 0; r < o; ++r)
    if (e[vl[r]]) {
      if (n)
        return !1;
      parseFloat(e[vl[r]]) !== Ot(e[vl[r]]) && (n = !0);
    }
  return !0;
}
function J4() {
  return this._isValid;
}
function eW() {
  return aa(NaN);
}
function Fd(e) {
  var t = Im(e), n = t.year || 0, r = t.quarter || 0, o = t.month || 0, s = t.week || t.isoWeek || 0, u = t.day || 0, c = t.hour || 0, d = t.minute || 0, p = t.second || 0, h = t.millisecond || 0;
  this._isValid = Q4(t), this._milliseconds = +h + p * 1e3 + // 1000
  d * 6e4 + // 1000 * 60
  c * 1e3 * 60 * 60, this._days = +u + s * 7, this._months = +o + r * 3 + n * 12, this._data = {}, this._locale = oo(), this._bubble();
}
function Ru(e) {
  return e instanceof Fd;
}
function Eh(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function tW(e, t, n) {
  var r = Math.min(e.length, t.length), o = Math.abs(e.length - t.length), s = 0, u;
  for (u = 0; u < r; u++)
    Ot(e[u]) !== Ot(t[u]) && s++;
  return s + o;
}
function Gw(e, t) {
  Ze(e, 0, 0, function() {
    var n = this.utcOffset(), r = "+";
    return n < 0 && (n = -n, r = "-"), r + Oa(~~(n / 60), 2) + t + Oa(~~n % 60, 2);
  });
}
Gw("Z", ":");
Gw("ZZ", "");
ze("Z", Md);
ze("ZZ", Md);
Vt(["Z", "ZZ"], function(e, t, n) {
  n._useUTC = !0, n._tzm = zm(Md, e);
});
var nW = /([\+\-]|\d\d)/gi;
function zm(e, t) {
  var n = (t || "").match(e), r, o, s;
  return n === null ? null : (r = n[n.length - 1] || [], o = (r + "").match(nW) || ["-", 0, 0], s = +(o[1] * 60) + Ot(o[2]), s === 0 ? 0 : o[0] === "+" ? s : -s);
}
function Hm(e, t) {
  var n, r;
  return t._isUTC ? (n = t.clone(), r = (ta(e) || _c(e) ? e.valueOf() : an(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + r), Me.updateOffset(n, !1), n) : an(e).local();
}
function xh(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
Me.updateOffset = function() {
};
function rW(e, t, n) {
  var r = this._offset || 0, o;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = zm(Md, e), e === null)
        return this;
    } else Math.abs(e) < 16 && !n && (e = e * 60);
    return !this._isUTC && t && (o = xh(this)), this._offset = e, this._isUTC = !0, o != null && this.add(o, "m"), r !== e && (!t || this._changeInProgress ? Xw(
      this,
      aa(e - r, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, Me.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? r : xh(this);
}
function aW(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function oW(e) {
  return this.utcOffset(0, e);
}
function iW(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(xh(this), "m")), this;
}
function sW() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = zm(SB, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function lW(e) {
  return this.isValid() ? (e = e ? an(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function cW() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function uW() {
  if (!tr(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return Pm(e, this), e = Yw(e), e._a ? (t = e._isUTC ? Ta(e._a) : an(e._a), this._isDSTShifted = this.isValid() && tW(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function dW() {
  return this.isValid() ? !this._isUTC : !1;
}
function fW() {
  return this.isValid() ? this._isUTC : !1;
}
function Kw() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var pW = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, hW = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function aa(e, t) {
  var n = e, r = null, o, s, u;
  return Ru(e) ? n = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : Xa(e) || !isNaN(+e) ? (n = {}, t ? n[t] = +e : n.milliseconds = +e) : (r = pW.exec(e)) ? (o = r[1] === "-" ? -1 : 1, n = {
    y: 0,
    d: Ot(r[ma]) * o,
    h: Ot(r[En]) * o,
    m: Ot(r[Xr]) * o,
    s: Ot(r[Ha]) * o,
    ms: Ot(Eh(r[mi] * 1e3)) * o
    // the millisecond decimal point is included in the match
  }) : (r = hW.exec(e)) ? (o = r[1] === "-" ? -1 : 1, n = {
    y: li(r[2], o),
    M: li(r[3], o),
    w: li(r[4], o),
    d: li(r[5], o),
    h: li(r[6], o),
    m: li(r[7], o),
    s: li(r[8], o)
  }) : n == null ? n = {} : typeof n == "object" && ("from" in n || "to" in n) && (u = mW(
    an(n.from),
    an(n.to)
  ), n = {}, n.ms = u.milliseconds, n.M = u.months), s = new Fd(n), Ru(e) && Mt(e, "_locale") && (s._locale = e._locale), Ru(e) && Mt(e, "_isValid") && (s._isValid = e._isValid), s;
}
aa.fn = Fd.prototype;
aa.invalid = eW;
function li(e, t) {
  var n = e && parseFloat(e.replace(",", "."));
  return (isNaN(n) ? 0 : n) * t;
}
function E0(e, t) {
  var n = {};
  return n.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n;
}
function mW(e, t) {
  var n;
  return e.isValid() && t.isValid() ? (t = Hm(t, e), e.isBefore(t) ? n = E0(e, t) : (n = E0(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : { milliseconds: 0, months: 0 };
}
function Zw(e, t) {
  return function(n, r) {
    var o, s;
    return r !== null && !isNaN(+r) && (Ow(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), s = n, n = r, r = s), o = aa(n, r), Xw(this, o, e), this;
  };
}
function Xw(e, t, n, r) {
  var o = t._milliseconds, s = Eh(t._days), u = Eh(t._months);
  e.isValid() && (r = r ?? !0, u && Dw(e, ac(e, "Month") + u * n), s && Aw(e, "Date", ac(e, "Date") + s * n), o && e._d.setTime(e._d.valueOf() + o * n), r && Me.updateOffset(e, s || u));
}
var gW = Zw(1, "add"), vW = Zw(-1, "subtract");
function Qw(e) {
  return typeof e == "string" || e instanceof String;
}
function yW(e) {
  return ta(e) || _c(e) || Qw(e) || Xa(e) || _W(e) || bW(e) || e === null || e === void 0;
}
function bW(e) {
  var t = _i(e) && !Sm(e), n = !1, r = [
    "years",
    "year",
    "y",
    "months",
    "month",
    "M",
    "days",
    "day",
    "d",
    "dates",
    "date",
    "D",
    "hours",
    "hour",
    "h",
    "minutes",
    "minute",
    "m",
    "seconds",
    "second",
    "s",
    "milliseconds",
    "millisecond",
    "ms"
  ], o, s, u = r.length;
  for (o = 0; o < u; o += 1)
    s = r[o], n = n || Mt(e, s);
  return t && n;
}
function _W(e) {
  var t = ea(e), n = !1;
  return t && (n = e.filter(function(r) {
    return !Xa(r) && Qw(e);
  }).length === 0), t && n;
}
function wW(e) {
  var t = _i(e) && !Sm(e), n = !1, r = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], o, s;
  for (o = 0; o < r.length; o += 1)
    s = r[o], n = n || Mt(e, s);
  return t && n;
}
function EW(e, t) {
  var n = e.diff(t, "days", !0);
  return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
}
function xW(e, t) {
  arguments.length === 1 && (arguments[0] ? yW(arguments[0]) ? (e = arguments[0], t = void 0) : wW(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var n = e || an(), r = Hm(n, this).startOf("day"), o = Me.calendarFormat(this, r) || "sameElse", s = t && (Pa(t[o]) ? t[o].call(this, n) : t[o]);
  return this.format(
    s || this.localeData().calendar(o, this, an(n))
  );
}
function CW() {
  return new wc(this);
}
function OW(e, t) {
  var n = ta(e) ? e : an(e);
  return this.isValid() && n.isValid() ? (t = Hr(t) || "millisecond", t === "millisecond" ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function SW(e, t) {
  var n = ta(e) ? e : an(e);
  return this.isValid() && n.isValid() ? (t = Hr(t) || "millisecond", t === "millisecond" ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf()) : !1;
}
function TW(e, t, n, r) {
  var o = ta(e) ? e : an(e), s = ta(t) ? t : an(t);
  return this.isValid() && o.isValid() && s.isValid() ? (r = r || "()", (r[0] === "(" ? this.isAfter(o, n) : !this.isBefore(o, n)) && (r[1] === ")" ? this.isBefore(s, n) : !this.isAfter(s, n))) : !1;
}
function PW(e, t) {
  var n = ta(e) ? e : an(e), r;
  return this.isValid() && n.isValid() ? (t = Hr(t) || "millisecond", t === "millisecond" ? this.valueOf() === n.valueOf() : (r = n.valueOf(), this.clone().startOf(t).valueOf() <= r && r <= this.clone().endOf(t).valueOf())) : !1;
}
function kW(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function NW(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function IW(e, t, n) {
  var r, o, s;
  if (!this.isValid())
    return NaN;
  if (r = Hm(e, this), !r.isValid())
    return NaN;
  switch (o = (r.utcOffset() - this.utcOffset()) * 6e4, t = Hr(t), t) {
    case "year":
      s = Mu(this, r) / 12;
      break;
    case "month":
      s = Mu(this, r);
      break;
    case "quarter":
      s = Mu(this, r) / 3;
      break;
    case "second":
      s = (this - r) / 1e3;
      break;
    case "minute":
      s = (this - r) / 6e4;
      break;
    case "hour":
      s = (this - r) / 36e5;
      break;
    case "day":
      s = (this - r - o) / 864e5;
      break;
    case "week":
      s = (this - r - o) / 6048e5;
      break;
    default:
      s = this - r;
  }
  return n ? s : Mr(s);
}
function Mu(e, t) {
  if (e.date() < t.date())
    return -Mu(t, e);
  var n = (t.year() - e.year()) * 12 + (t.month() - e.month()), r = e.clone().add(n, "months"), o, s;
  return t - r < 0 ? (o = e.clone().add(n - 1, "months"), s = (t - r) / (r - o)) : (o = e.clone().add(n + 1, "months"), s = (t - r) / (o - r)), -(n + s) || 0;
}
Me.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
Me.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function AW() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function RW(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, n = t ? this.clone().utc() : this;
  return n.year() < 0 || n.year() > 9999 ? Au(
    n,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : Pa(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", Au(n, "Z")) : Au(
    n,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function MW() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", n, r, o, s;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), n = "[" + e + '("]', r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", o = "-MM-DD[T]HH:mm:ss.SSS", s = t + '[")]', this.format(n + r + o + s);
}
function DW(e) {
  e || (e = this.isUtc() ? Me.defaultFormatUtc : Me.defaultFormat);
  var t = Au(this, e);
  return this.localeData().postformat(t);
}
function LW(e, t) {
  return this.isValid() && (ta(e) && e.isValid() || an(e).isValid()) ? aa({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function FW(e) {
  return this.from(an(), e);
}
function $W(e, t) {
  return this.isValid() && (ta(e) && e.isValid() || an(e).isValid()) ? aa({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function BW(e) {
  return this.to(an(), e);
}
function Jw(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = oo(e), t != null && (this._locale = t), this);
}
var eE = zr(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function tE() {
  return this._locale;
}
var Ju = 1e3, ps = 60 * Ju, ed = 60 * ps, nE = (365 * 400 + 97) * 24 * ed;
function hs(e, t) {
  return (e % t + t) % t;
}
function rE(e, t, n) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, n) - nE : new Date(e, t, n).valueOf();
}
function aE(e, t, n) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - nE : Date.UTC(e, t, n);
}
function WW(e) {
  var t, n;
  if (e = Hr(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (n = this._isUTC ? aE : rE, e) {
    case "year":
      t = n(this.year(), 0, 1);
      break;
    case "quarter":
      t = n(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      t = n(this.year(), this.month(), 1);
      break;
    case "week":
      t = n(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      t = n(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      t = n(this.year(), this.month(), this.date());
      break;
    case "hour":
      t = this._d.valueOf(), t -= hs(
        t + (this._isUTC ? 0 : this.utcOffset() * ps),
        ed
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= hs(t, ps);
      break;
    case "second":
      t = this._d.valueOf(), t -= hs(t, Ju);
      break;
  }
  return this._d.setTime(t), Me.updateOffset(this, !0), this;
}
function UW(e) {
  var t, n;
  if (e = Hr(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (n = this._isUTC ? aE : rE, e) {
    case "year":
      t = n(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      t = n(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      t = n(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      t = n(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      t = n(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      t = n(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      t = this._d.valueOf(), t += ed - hs(
        t + (this._isUTC ? 0 : this.utcOffset() * ps),
        ed
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += ps - hs(t, ps) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += Ju - hs(t, Ju) - 1;
      break;
  }
  return this._d.setTime(t), Me.updateOffset(this, !0), this;
}
function jW() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function zW() {
  return Math.floor(this.valueOf() / 1e3);
}
function HW() {
  return new Date(this.valueOf());
}
function YW() {
  var e = this;
  return [
    e.year(),
    e.month(),
    e.date(),
    e.hour(),
    e.minute(),
    e.second(),
    e.millisecond()
  ];
}
function qW() {
  var e = this;
  return {
    years: e.year(),
    months: e.month(),
    date: e.date(),
    hours: e.hours(),
    minutes: e.minutes(),
    seconds: e.seconds(),
    milliseconds: e.milliseconds()
  };
}
function VW() {
  return this.isValid() ? this.toISOString() : null;
}
function GW() {
  return Tm(this);
}
function KW() {
  return Oo({}, ht(this));
}
function ZW() {
  return ht(this).overflow;
}
function XW() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
Ze("N", 0, 0, "eraAbbr");
Ze("NN", 0, 0, "eraAbbr");
Ze("NNN", 0, 0, "eraAbbr");
Ze("NNNN", 0, 0, "eraName");
Ze("NNNNN", 0, 0, "eraNarrow");
Ze("y", ["y", 1], "yo", "eraYear");
Ze("y", ["yy", 2], 0, "eraYear");
Ze("y", ["yyy", 3], 0, "eraYear");
Ze("y", ["yyyy", 4], 0, "eraYear");
ze("N", Ym);
ze("NN", Ym);
ze("NNN", Ym);
ze("NNNN", l6);
ze("NNNNN", c6);
Vt(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, n, r) {
    var o = n._locale.erasParse(e, r, n._strict);
    o ? ht(n).era = o : ht(n).invalidEra = e;
  }
);
ze("y", zs);
ze("yy", zs);
ze("yyy", zs);
ze("yyyy", zs);
ze("yo", u6);
Vt(["y", "yy", "yyy", "yyyy"], Fn);
Vt(["yo"], function(e, t, n, r) {
  var o;
  n._locale._eraYearOrdinalRegex && (o = e.match(n._locale._eraYearOrdinalRegex)), n._locale.eraYearOrdinalParse ? t[Fn] = n._locale.eraYearOrdinalParse(e, o) : t[Fn] = parseInt(e, 10);
});
function QW(e, t) {
  var n, r, o, s = this._eras || oo("en")._eras;
  for (n = 0, r = s.length; n < r; ++n) {
    switch (typeof s[n].since) {
      case "string":
        o = Me(s[n].since).startOf("day"), s[n].since = o.valueOf();
        break;
    }
    switch (typeof s[n].until) {
      case "undefined":
        s[n].until = 1 / 0;
        break;
      case "string":
        o = Me(s[n].until).startOf("day").valueOf(), s[n].until = o.valueOf();
        break;
    }
  }
  return s;
}
function JW(e, t, n) {
  var r, o, s = this.eras(), u, c, d;
  for (e = e.toUpperCase(), r = 0, o = s.length; r < o; ++r)
    if (u = s[r].name.toUpperCase(), c = s[r].abbr.toUpperCase(), d = s[r].narrow.toUpperCase(), n)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (c === e)
            return s[r];
          break;
        case "NNNN":
          if (u === e)
            return s[r];
          break;
        case "NNNNN":
          if (d === e)
            return s[r];
          break;
      }
    else if ([u, c, d].indexOf(e) >= 0)
      return s[r];
}
function e6(e, t) {
  var n = e.since <= e.until ? 1 : -1;
  return t === void 0 ? Me(e.since).year() : Me(e.since).year() + (t - e.offset) * n;
}
function t6() {
  var e, t, n, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
      return r[e].name;
  return "";
}
function n6() {
  var e, t, n, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
      return r[e].narrow;
  return "";
}
function r6() {
  var e, t, n, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
      return r[e].abbr;
  return "";
}
function a6() {
  var e, t, n, r, o = this.localeData().eras();
  for (e = 0, t = o.length; e < t; ++e)
    if (n = o[e].since <= o[e].until ? 1 : -1, r = this.clone().startOf("day").valueOf(), o[e].since <= r && r <= o[e].until || o[e].until <= r && r <= o[e].since)
      return (this.year() - Me(o[e].since).year()) * n + o[e].offset;
  return this.year();
}
function o6(e) {
  return Mt(this, "_erasNameRegex") || qm.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function i6(e) {
  return Mt(this, "_erasAbbrRegex") || qm.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function s6(e) {
  return Mt(this, "_erasNarrowRegex") || qm.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function Ym(e, t) {
  return t.erasAbbrRegex(e);
}
function l6(e, t) {
  return t.erasNameRegex(e);
}
function c6(e, t) {
  return t.erasNarrowRegex(e);
}
function u6(e, t) {
  return t._eraYearOrdinalRegex || zs;
}
function qm() {
  var e = [], t = [], n = [], r = [], o, s, u, c, d, p = this.eras();
  for (o = 0, s = p.length; o < s; ++o)
    u = qa(p[o].name), c = qa(p[o].abbr), d = qa(p[o].narrow), t.push(u), e.push(c), n.push(d), r.push(u), r.push(c), r.push(d);
  this._erasRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  );
}
Ze(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
Ze(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function $d(e, t) {
  Ze(0, [e, e.length], 0, t);
}
$d("gggg", "weekYear");
$d("ggggg", "weekYear");
$d("GGGG", "isoWeekYear");
$d("GGGGG", "isoWeekYear");
ze("G", Rd);
ze("g", Rd);
ze("GG", on, xr);
ze("gg", on, xr);
ze("GGGG", Rm, Am);
ze("gggg", Rm, Am);
ze("GGGGG", Ad, Nd);
ze("ggggg", Ad, Nd);
xc(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, n, r) {
    t[r.substr(0, 2)] = Ot(e);
  }
);
xc(["gg", "GG"], function(e, t, n, r) {
  t[r] = Me.parseTwoDigitYear(e);
});
function d6(e) {
  return oE.call(
    this,
    e,
    this.week(),
    this.weekday() + this.localeData()._week.dow,
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function f6(e) {
  return oE.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function p6() {
  return Va(this.year(), 1, 4);
}
function h6() {
  return Va(this.isoWeekYear(), 1, 4);
}
function m6() {
  var e = this.localeData()._week;
  return Va(this.year(), e.dow, e.doy);
}
function g6() {
  var e = this.localeData()._week;
  return Va(this.weekYear(), e.dow, e.doy);
}
function oE(e, t, n, r, o) {
  var s;
  return e == null ? ic(this, r, o).year : (s = Va(e, r, o), t > s && (t = s), v6.call(this, e, t, n, r, o));
}
function v6(e, t, n, r, o) {
  var s = $w(e, t, n, r, o), u = oc(s.year, 0, s.dayOfYear);
  return this.year(u.getUTCFullYear()), this.month(u.getUTCMonth()), this.date(u.getUTCDate()), this;
}
Ze("Q", 0, "Qo", "quarter");
ze("Q", Tw);
Vt("Q", function(e, t) {
  t[za] = (Ot(e) - 1) * 3;
});
function y6(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
Ze("D", ["DD", 2], "Do", "date");
ze("D", on, Hs);
ze("DD", on, xr);
ze("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
Vt(["D", "DD"], ma);
Vt("Do", function(e, t) {
  t[ma] = Ot(e.match(on)[0]);
});
var iE = Ys("Date", !0);
Ze("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
ze("DDD", Id);
ze("DDDD", Pw);
Vt(["DDD", "DDDD"], function(e, t, n) {
  n._dayOfYear = Ot(e);
});
function b6(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
Ze("m", ["mm", 2], 0, "minute");
ze("m", on, Mm);
ze("mm", on, xr);
Vt(["m", "mm"], Xr);
var _6 = Ys("Minutes", !1);
Ze("s", ["ss", 2], 0, "second");
ze("s", on, Mm);
ze("ss", on, xr);
Vt(["s", "ss"], Ha);
var w6 = Ys("Seconds", !1);
Ze("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
Ze(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
Ze(0, ["SSS", 3], 0, "millisecond");
Ze(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
Ze(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
Ze(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
Ze(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
Ze(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
Ze(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
ze("S", Id, Tw);
ze("SS", Id, xr);
ze("SSS", Id, Pw);
var So, sE;
for (So = "SSSS"; So.length <= 9; So += "S")
  ze(So, zs);
function E6(e, t) {
  t[mi] = Ot(("0." + e) * 1e3);
}
for (So = "S"; So.length <= 9; So += "S")
  Vt(So, E6);
sE = Ys("Milliseconds", !1);
Ze("z", 0, 0, "zoneAbbr");
Ze("zz", 0, 0, "zoneName");
function x6() {
  return this._isUTC ? "UTC" : "";
}
function C6() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var Ie = wc.prototype;
Ie.add = gW;
Ie.calendar = xW;
Ie.clone = CW;
Ie.diff = IW;
Ie.endOf = UW;
Ie.format = DW;
Ie.from = LW;
Ie.fromNow = FW;
Ie.to = $W;
Ie.toNow = BW;
Ie.get = MB;
Ie.invalidAt = ZW;
Ie.isAfter = OW;
Ie.isBefore = SW;
Ie.isBetween = TW;
Ie.isSame = PW;
Ie.isSameOrAfter = kW;
Ie.isSameOrBefore = NW;
Ie.isValid = GW;
Ie.lang = eE;
Ie.locale = Jw;
Ie.localeData = tE;
Ie.max = G4;
Ie.min = V4;
Ie.parsingFlags = KW;
Ie.set = DB;
Ie.startOf = WW;
Ie.subtract = vW;
Ie.toArray = YW;
Ie.toObject = qW;
Ie.toDate = HW;
Ie.toISOString = RW;
Ie.inspect = MW;
typeof Symbol < "u" && Symbol.for != null && (Ie[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
Ie.toJSON = VW;
Ie.toString = AW;
Ie.unix = zW;
Ie.valueOf = jW;
Ie.creationData = XW;
Ie.eraName = t6;
Ie.eraNarrow = n6;
Ie.eraAbbr = r6;
Ie.eraYear = a6;
Ie.year = Iw;
Ie.isLeapYear = RB;
Ie.weekYear = d6;
Ie.isoWeekYear = f6;
Ie.quarter = Ie.quarters = y6;
Ie.month = Lw;
Ie.daysInMonth = HB;
Ie.week = Ie.weeks = QB;
Ie.isoWeek = Ie.isoWeeks = JB;
Ie.weeksInYear = m6;
Ie.weeksInWeekYear = g6;
Ie.isoWeeksInYear = p6;
Ie.isoWeeksInISOWeekYear = h6;
Ie.date = iE;
Ie.day = Ie.days = f4;
Ie.weekday = p4;
Ie.isoWeekday = h4;
Ie.dayOfYear = b6;
Ie.hour = Ie.hours = w4;
Ie.minute = Ie.minutes = _6;
Ie.second = Ie.seconds = w6;
Ie.millisecond = Ie.milliseconds = sE;
Ie.utcOffset = rW;
Ie.utc = oW;
Ie.local = iW;
Ie.parseZone = sW;
Ie.hasAlignedHourOffset = lW;
Ie.isDST = cW;
Ie.isLocal = dW;
Ie.isUtcOffset = fW;
Ie.isUtc = Kw;
Ie.isUTC = Kw;
Ie.zoneAbbr = x6;
Ie.zoneName = C6;
Ie.dates = zr(
  "dates accessor is deprecated. Use date instead.",
  iE
);
Ie.months = zr(
  "months accessor is deprecated. Use month instead",
  Lw
);
Ie.years = zr(
  "years accessor is deprecated. Use year instead",
  Iw
);
Ie.zone = zr(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  aW
);
Ie.isDSTShifted = zr(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  uW
);
function O6(e) {
  return an(e * 1e3);
}
function S6() {
  return an.apply(null, arguments).parseZone();
}
function lE(e) {
  return e;
}
var Dt = km.prototype;
Dt.calendar = dB;
Dt.longDateFormat = mB;
Dt.invalidDate = vB;
Dt.ordinal = _B;
Dt.preparse = lE;
Dt.postformat = lE;
Dt.relativeTime = EB;
Dt.pastFuture = xB;
Dt.set = cB;
Dt.eras = QW;
Dt.erasParse = JW;
Dt.erasConvertYear = e6;
Dt.erasAbbrRegex = i6;
Dt.erasNameRegex = o6;
Dt.erasNarrowRegex = s6;
Dt.months = WB;
Dt.monthsShort = UB;
Dt.monthsParse = zB;
Dt.monthsRegex = qB;
Dt.monthsShortRegex = YB;
Dt.week = GB;
Dt.firstDayOfYear = XB;
Dt.firstDayOfWeek = ZB;
Dt.weekdays = s4;
Dt.weekdaysMin = c4;
Dt.weekdaysShort = l4;
Dt.weekdaysParse = d4;
Dt.weekdaysRegex = m4;
Dt.weekdaysShortRegex = g4;
Dt.weekdaysMinRegex = v4;
Dt.isPM = b4;
Dt.meridiem = E4;
function td(e, t, n, r) {
  var o = oo(), s = Ta().set(r, t);
  return o[n](s, e);
}
function cE(e, t, n) {
  if (Xa(e) && (t = e, e = void 0), e = e || "", t != null)
    return td(e, t, n, "month");
  var r, o = [];
  for (r = 0; r < 12; r++)
    o[r] = td(e, r, n, "month");
  return o;
}
function Vm(e, t, n, r) {
  typeof e == "boolean" ? (Xa(t) && (n = t, t = void 0), t = t || "") : (t = e, n = t, e = !1, Xa(t) && (n = t, t = void 0), t = t || "");
  var o = oo(), s = e ? o._week.dow : 0, u, c = [];
  if (n != null)
    return td(t, (n + s) % 7, r, "day");
  for (u = 0; u < 7; u++)
    c[u] = td(t, (u + s) % 7, r, "day");
  return c;
}
function T6(e, t) {
  return cE(e, t, "months");
}
function P6(e, t) {
  return cE(e, t, "monthsShort");
}
function k6(e, t, n) {
  return Vm(e, t, n, "weekdays");
}
function N6(e, t, n) {
  return Vm(e, t, n, "weekdaysShort");
}
function I6(e, t, n) {
  return Vm(e, t, n, "weekdaysMin");
}
Po("en", {
  eras: [
    {
      since: "0001-01-01",
      until: 1 / 0,
      offset: 1,
      name: "Anno Domini",
      narrow: "AD",
      abbr: "AD"
    },
    {
      since: "0000-12-31",
      until: -1 / 0,
      offset: 1,
      name: "Before Christ",
      narrow: "BC",
      abbr: "BC"
    }
  ],
  dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
  ordinal: function(e) {
    var t = e % 10, n = Ot(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + n;
  }
});
Me.lang = zr(
  "moment.lang is deprecated. Use moment.locale instead.",
  Po
);
Me.langData = zr(
  "moment.langData is deprecated. Use moment.localeData instead.",
  oo
);
var $a = Math.abs;
function A6() {
  var e = this._data;
  return this._milliseconds = $a(this._milliseconds), this._days = $a(this._days), this._months = $a(this._months), e.milliseconds = $a(e.milliseconds), e.seconds = $a(e.seconds), e.minutes = $a(e.minutes), e.hours = $a(e.hours), e.months = $a(e.months), e.years = $a(e.years), this;
}
function uE(e, t, n, r) {
  var o = aa(t, n);
  return e._milliseconds += r * o._milliseconds, e._days += r * o._days, e._months += r * o._months, e._bubble();
}
function R6(e, t) {
  return uE(this, e, t, 1);
}
function M6(e, t) {
  return uE(this, e, t, -1);
}
function x0(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function D6() {
  var e = this._milliseconds, t = this._days, n = this._months, r = this._data, o, s, u, c, d;
  return e >= 0 && t >= 0 && n >= 0 || e <= 0 && t <= 0 && n <= 0 || (e += x0(Ch(n) + t) * 864e5, t = 0, n = 0), r.milliseconds = e % 1e3, o = Mr(e / 1e3), r.seconds = o % 60, s = Mr(o / 60), r.minutes = s % 60, u = Mr(s / 60), r.hours = u % 24, t += Mr(u / 24), d = Mr(dE(t)), n += d, t -= x0(Ch(d)), c = Mr(n / 12), n %= 12, r.days = t, r.months = n, r.years = c, this;
}
function dE(e) {
  return e * 4800 / 146097;
}
function Ch(e) {
  return e * 146097 / 4800;
}
function L6(e) {
  if (!this.isValid())
    return NaN;
  var t, n, r = this._milliseconds;
  if (e = Hr(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + r / 864e5, n = this._months + dE(t), e) {
      case "month":
        return n;
      case "quarter":
        return n / 3;
      case "year":
        return n / 12;
    }
  else
    switch (t = this._days + Math.round(Ch(this._months)), e) {
      case "week":
        return t / 7 + r / 6048e5;
      case "day":
        return t + r / 864e5;
      case "hour":
        return t * 24 + r / 36e5;
      case "minute":
        return t * 1440 + r / 6e4;
      case "second":
        return t * 86400 + r / 1e3;
      case "millisecond":
        return Math.floor(t * 864e5) + r;
      default:
        throw new Error("Unknown unit " + e);
    }
}
function io(e) {
  return function() {
    return this.as(e);
  };
}
var fE = io("ms"), F6 = io("s"), $6 = io("m"), B6 = io("h"), W6 = io("d"), U6 = io("w"), j6 = io("M"), z6 = io("Q"), H6 = io("y"), Y6 = fE;
function q6() {
  return aa(this);
}
function V6(e) {
  return e = Hr(e), this.isValid() ? this[e + "s"]() : NaN;
}
function Bi(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var G6 = Bi("milliseconds"), K6 = Bi("seconds"), Z6 = Bi("minutes"), X6 = Bi("hours"), Q6 = Bi("days"), J6 = Bi("months"), eU = Bi("years");
function tU() {
  return Mr(this.days() / 7);
}
var Ua = Math.round, ss = {
  ss: 44,
  // a few seconds to seconds
  s: 45,
  // seconds to minute
  m: 45,
  // minutes to hour
  h: 22,
  // hours to day
  d: 26,
  // days to month/week
  w: null,
  // weeks to month
  M: 11
  // months to year
};
function nU(e, t, n, r, o) {
  return o.relativeTime(t || 1, !!n, e, r);
}
function rU(e, t, n, r) {
  var o = aa(e).abs(), s = Ua(o.as("s")), u = Ua(o.as("m")), c = Ua(o.as("h")), d = Ua(o.as("d")), p = Ua(o.as("M")), h = Ua(o.as("w")), m = Ua(o.as("y")), v = s <= n.ss && ["s", s] || s < n.s && ["ss", s] || u <= 1 && ["m"] || u < n.m && ["mm", u] || c <= 1 && ["h"] || c < n.h && ["hh", c] || d <= 1 && ["d"] || d < n.d && ["dd", d];
  return n.w != null && (v = v || h <= 1 && ["w"] || h < n.w && ["ww", h]), v = v || p <= 1 && ["M"] || p < n.M && ["MM", p] || m <= 1 && ["y"] || ["yy", m], v[2] = t, v[3] = +e > 0, v[4] = r, nU.apply(null, v);
}
function aU(e) {
  return e === void 0 ? Ua : typeof e == "function" ? (Ua = e, !0) : !1;
}
function oU(e, t) {
  return ss[e] === void 0 ? !1 : t === void 0 ? ss[e] : (ss[e] = t, e === "s" && (ss.ss = t - 1), !0);
}
function iU(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var n = !1, r = ss, o, s;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (n = e), typeof t == "object" && (r = Object.assign({}, ss, t), t.s != null && t.ss == null && (r.ss = t.s - 1)), o = this.localeData(), s = rU(this, !n, r, o), n && (s = o.pastFuture(+this, s)), o.postformat(s);
}
var Ip = Math.abs;
function es(e) {
  return (e > 0) - (e < 0) || +e;
}
function Bd() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = Ip(this._milliseconds) / 1e3, t = Ip(this._days), n = Ip(this._months), r, o, s, u, c = this.asSeconds(), d, p, h, m;
  return c ? (r = Mr(e / 60), o = Mr(r / 60), e %= 60, r %= 60, s = Mr(n / 12), n %= 12, u = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", d = c < 0 ? "-" : "", p = es(this._months) !== es(c) ? "-" : "", h = es(this._days) !== es(c) ? "-" : "", m = es(this._milliseconds) !== es(c) ? "-" : "", d + "P" + (s ? p + s + "Y" : "") + (n ? p + n + "M" : "") + (t ? h + t + "D" : "") + (o || r || e ? "T" : "") + (o ? m + o + "H" : "") + (r ? m + r + "M" : "") + (e ? m + u + "S" : "")) : "P0D";
}
var kt = Fd.prototype;
kt.isValid = J4;
kt.abs = A6;
kt.add = R6;
kt.subtract = M6;
kt.as = L6;
kt.asMilliseconds = fE;
kt.asSeconds = F6;
kt.asMinutes = $6;
kt.asHours = B6;
kt.asDays = W6;
kt.asWeeks = U6;
kt.asMonths = j6;
kt.asQuarters = z6;
kt.asYears = H6;
kt.valueOf = Y6;
kt._bubble = D6;
kt.clone = q6;
kt.get = V6;
kt.milliseconds = G6;
kt.seconds = K6;
kt.minutes = Z6;
kt.hours = X6;
kt.days = Q6;
kt.weeks = tU;
kt.months = J6;
kt.years = eU;
kt.humanize = iU;
kt.toISOString = Bd;
kt.toString = Bd;
kt.toJSON = Bd;
kt.locale = Jw;
kt.localeData = tE;
kt.toIsoString = zr(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  Bd
);
kt.lang = eE;
Ze("X", 0, 0, "unix");
Ze("x", 0, 0, "valueOf");
ze("x", Rd);
ze("X", TB);
Vt("X", function(e, t, n) {
  n._d = new Date(parseFloat(e) * 1e3);
});
Vt("x", function(e, t, n) {
  n._d = new Date(Ot(e));
});
//! moment.js
Me.version = "2.30.1";
sB(an);
Me.fn = Ie;
Me.min = K4;
Me.max = Z4;
Me.now = X4;
Me.utc = Ta;
Me.unix = O6;
Me.months = T6;
Me.isDate = _c;
Me.locale = Po;
Me.invalid = kd;
Me.duration = aa;
Me.isMoment = ta;
Me.weekdays = k6;
Me.parseZone = S6;
Me.localeData = oo;
Me.isDuration = Ru;
Me.monthsShort = P6;
Me.weekdaysMin = I6;
Me.defineLocale = Bm;
Me.updateLocale = S4;
Me.locales = T4;
Me.weekdaysShort = N6;
Me.normalizeUnits = Hr;
Me.relativeTimeRounding = aU;
Me.relativeTimeThreshold = oU;
Me.calendarFormat = EW;
Me.prototype = Ie;
Me.HTML5_FMT = {
  DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
  // <input type="datetime-local" />
  DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
  // <input type="datetime-local" step="1" />
  DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
  // <input type="datetime-local" step="0.001" />
  DATE: "YYYY-MM-DD",
  // <input type="date" />
  TIME: "HH:mm",
  // <input type="time" />
  TIME_SECONDS: "HH:mm:ss",
  // <input type="time" step="1" />
  TIME_MS: "HH:mm:ss.SSS",
  // <input type="time" step="0.001" />
  WEEK: "GGGG-[W]WW",
  // <input type="week" />
  MONTH: "YYYY-MM"
  // <input type="month" />
};
function sU(e) {
  if (e != null) {
    const t = e.replace(/[^\d]/g, "");
    return t.length === 10 ? t.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3") : t.length === 11 ? t.replace(/(\d{1})(\d{3})(\d{3})(\d{4})/, "$1 ($2) $3-$4") : e;
  }
  return e;
}
function C0(e, t = !1, n = !1, r = !1) {
  const o = new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "dop"
  });
  if ([null, "", void 0].includes(e) && !r || !n && parseFloat(e || 0) === 0) return "";
  const s = o.format(e).replace("DOP", "");
  return t ? s.split(".")[0] : s;
}
function lU(e, t = !1, n = !1) {
  const r = new Intl.NumberFormat("ja-JP", {
    maximumSignificantDigits: 14,
    style: "currency",
    currency: "dop"
  });
  return [null, "", void 0].includes(e) && !n || !t && parseFloat(e || 0) === 0 ? "" : r.format(e).replace("DOP", "");
}
function pE(e, t) {
  const n = new Date(e);
  let r = /* @__PURE__ */ new Date();
  if (!R.isEmpty(e)) {
    R.isEmpty(t) || (r = new Date(t));
    const o = parseInt((r - n) / (1e3 * 60 * 60 * 24), 10), s = parseInt(Math.abs(n - r) / (1e3 * 60 * 60) % 24, 10), u = parseInt(Math.abs(r.getTime() - n.getTime()) / (1e3 * 60) % 60, 10), c = parseInt(Math.abs(r.getTime() - n.getTime()) / 1e3 % 60, 10);
    let d = "";
    return o === 0 ? s === 0 ? u === 0 ? d = `${String(c)}s` : d = `${String(u)}m ${String(c)}s` : d = `${String(s)}h ${String(u)}m ${String(c)}s` : d = `${String(o)}d ${String(s)}h ${String(u)}m ${String(c)}s`, d;
  }
  return "";
}
function cU(e) {
  if (e) {
    const t = new Date(e).getTime(), r = (/* @__PURE__ */ new Date()).getTime() - t, o = parseInt(r / (1e3 * 60 * 60 * 24), 10);
    return o === 0 ? null : o;
  }
  return null;
}
function Rr(e, t = !1, n = !1, r = !1, o = !1, s = !1, u = !1) {
  if (!R.isEmpty(e) && e !== null) {
    const c = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"], d = new Date(e);
    if (n)
      return d.toLocaleString("en-US", {
        hour12: !0,
        hour: "2-digit",
        minute: "2-digit"
      });
    if (o)
      return `${c[d.getUTCDay() - 1]} 
				${d.toLocaleString("es-US", {
        hour12: !0,
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      })}`;
    if (t)
      return d.toLocaleString("es-US", {
        hour12: !0,
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      });
    if (u)
      return Me(e, "DD/MM/YYYY").format("DD/MM/YYYY");
    if (s) {
      if (e.length === 7) {
        const p = e.split("-");
        return p.length > 1 ? `${p[1]}/${p[0].slice(2, 4)}` : `${e.slice(0, 3)}${e.slice(5, 7)}`;
      }
      return d.toLocaleString("es-US", {
        month: "2-digit",
        year: "2-digit"
      });
    }
    return r ? d.toLocaleString("es-US", {
      hour12: !0,
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    }) : Me(e).format("DD/MM/YYYY");
  }
  return e;
}
function Cl(e, t) {
  let n = e;
  return t && t.forEach((r) => {
    r.onName === e && (n = String(r.translate));
  }), n;
}
function uU(e, t, n) {
  return R.map(e, (o, s) => ({ key: s + 1, text: R.get(o, t, ""), value: R.get(o, n, "") }));
}
function ko(e) {
  let t = e.split(",").join(".");
  if (t.split(".").length > 2) {
    const n = t.split(".");
    t = `${n[0]}:${R.takeRight(n, n.length - 1).join(".")}`;
  }
  return t;
}
function yl(e, t = 768, n = 55, r = 10, o = 10) {
  if (e >= t)
    return n;
  const s = t - e, u = Math.floor(s / r), c = n - u;
  return Math.max(c, o);
}
const dU = "_headerTable_1sdq3_1", fU = "_tableCellHeader_1sdq3_13", bl = {
  headerTable: dU,
  tableCellHeader: fU
}, Gm = ({
  columns: e = [],
  searchParams: t,
  setSearchParams: n,
  dataHandler: r,
  isPDF: o,
  concatAll: s,
  setConcatAll: u,
  totalRows: c,
  widthAuto: d
}) => {
  const [p, h] = ot([]), [m, v] = ot([]), [y, b] = ot(""), [_, E] = ot("");
  Zt(() => {
    x(), b(t.orderDir === "desc" ? "descending" : "ascending"), E(t.orderKey);
  }, [t, y, _]), Zt(() => {
    x();
  }, [s, e]);
  const A = (I) => {
    const O = y === "descending" ? "ascending" : "descending";
    let S;
    R.isEmpty(I) || (S = ko(I));
    const C = {
      ...t,
      page: 1,
      orderKey: S,
      orderDir: O === "descending" ? "desc" : "asc"
    };
    b(O), E(S), R.isEmpty(C) || (n(C), r(C));
  }, F = () => {
    const I = {
      ...t,
      rows: c
    };
    u(!s), r(I, !1, !s, !0);
  }, x = ({ subColumns: I = [], multStatus: O = !1 } = {}) => {
    let S = e;
    R.isEmpty(I) || (S = I);
    let C = !1, T = [];
    const N = S.map(
      ({
        key: B,
        label: H,
        width: ne,
        headerPosition: z,
        multipleColumns: re = [],
        multiple: he = !1,
        action: ve = [],
        canSort: Te = !0,
        twoLines: de = !1,
        line1: ye = {},
        line2: ee = {},
        hidden: oe = !1,
        color: se = "hsl(0, 0%, 80%)",
        style: Ee = {},
        orderKey: Pe
      }, Se) => {
        let ge, ke;
        return R.isEmpty(B) || (ge = ko(B)), ke = ge, R.isEmpty(Pe) || (ke = ko(Pe)), oe ? null : !R.isEmpty(re) && R.isEmpty(I) ? (C = !0, T = [...T, ...re], /* @__PURE__ */ k(
          yt.HeaderCell,
          {
            style: { backgroundColor: se },
            className: bl.tableCellHeader,
            colSpan: re.length,
            textAlign: z || "center",
            children: H
          },
          Se
        )) : he ? /* @__PURE__ */ k(
          yt.HeaderCell,
          {
            style: { backgroundColor: se, ...Ee },
            className: bl.tableCellHeader,
            textAlign: "center",
            onClick: F,
            children: /* @__PURE__ */ k(ar, { checked: s })
          },
          Se
        ) : de ? /* @__PURE__ */ ce(
          yt.HeaderCell,
          {
            rowSpan: !R.isEmpty(re) && R.isEmpty(I) ? "1" : "2",
            style: { backgroundColor: se },
            className: bl.tableCellHeader,
            textAlign: z || "center",
            sorted: Te && ke === _ ? y : null,
            onClick: Te ? () => {
              A(ke);
            } : null,
            width: ne || 1,
            children: [
              /* @__PURE__ */ ce("div", { children: [
                " ",
                R.get(ye, "label", "")
              ] }),
              /* @__PURE__ */ ce("div", { children: [
                " ",
                R.get(ee, "label", "")
              ] })
            ]
          },
          Se
        ) : !R.isEmpty(ve) && o ? null : /* @__PURE__ */ k(
          yt.HeaderCell,
          {
            rowSpan: !R.isEmpty(re) && R.isEmpty(I) ? "1" : "2",
            style: { backgroundColor: se, ...Ee },
            className: bl.tableCellHeader,
            textAlign: z || "center",
            sorted: Te && ke === _ ? y : null,
            onClick: Te ? () => {
              A(ke);
            } : null,
            width: d ? void 0 : ne || 1,
            children: H
          },
          Se
        );
      }
    );
    O || h(/* @__PURE__ */ k(yt.Row, { children: N })), O && v(/* @__PURE__ */ k(yt.Row, { children: N })), C && x({
      subColumns: T,
      multStatus: C
    });
  };
  return /* @__PURE__ */ ce(yt.Header, { className: bl.headerTable, children: [
    p,
    m
  ] });
};
Gm.propTypes = {
  columns: l.array,
  setSearchParams: l.func,
  dataHandler: l.func,
  searchParams: l.object,
  isPDF: l.bool,
  concatAll: l.bool,
  setConcatAll: l.func,
  totalRows: l.number,
  widthAuto: l.bool
};
var hE = {};
Object.defineProperty(hE, "__esModule", { value: !0 });
var pU = J;
function hU(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return e && Object.keys(e).forEach(function(n) {
    if (n !== "default") {
      var r = Object.getOwnPropertyDescriptor(e, n);
      Object.defineProperty(t, n, r.get ? r : {
        enumerable: !0,
        get: function() {
          return e[n];
        }
      });
    }
  }), t.default = e, Object.freeze(t);
}
var wo = /* @__PURE__ */ hU(pU), Oh = function() {
  return Oh = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, Oh.apply(this, arguments);
};
function mU(e) {
  var t = e.bgColor, n = t === void 0 ? "#6a1b9a" : t, r = e.height, o = r === void 0 ? "20px" : r, s = e.width, u = s === void 0 ? "100%" : s, c = e.borderRadius, d = c === void 0 ? "50px" : c, p = e.labelAlignment, h = p === void 0 ? "right" : p, m = e.baseBgColor, v = m === void 0 ? "#e0e0de" : m, y = e.labelColor, b = y === void 0 ? "#fff" : y, _ = e.labelSize, E = _ === void 0 ? "15px" : _, A = e.isLabelVisible, F = A === void 0 ? !0 : A, x = e.dir, I = x === void 0 ? "ltr" : x, O = e.ariaValuemin, S = O === void 0 ? 0 : O, C = e.ariaValuemax, T = C === void 0 ? 100 : C, N = e.ariaValuetext, B = N === void 0 ? null : N, H = e.maxCompleted, ne = H === void 0 ? 100 : H, z = e.animateOnRender, re = z === void 0 ? !1 : z, he = e.initCompletedOnAnimation, ve = he === void 0 ? 0 : he, Te = e.isIndeterminate, de = Te === void 0 ? !1 : Te, ye = e.completed, ee = e.margin, oe = e.padding, se = e.customLabelStyles, Ee = e.transitionDuration, Pe = e.transitionTimingFunction, Se = e.className, ge = e.customLabel, ke = e.barContainerClassName, De = e.completedClassName, U = e.labelClassName, j = function($e) {
    return $e === "left" ? "flex-start" : $e === "center" ? "center" : $e === "right" ? "flex-end" : null;
  }, $ = j(h), D = typeof ve == "number" ? "".concat(ve, "%") : ve, G = function($e, st) {
    if ($e) {
      var Ve = Number(st) / $e;
      return Ve > 1 ? "100%" : "".concat(Ve * 100, "%");
    }
    return D;
  }, K = G(ne, ye), le = wo.useState(D), pe = le[0], Q = le[1], fe = {
    height: o,
    background: v,
    borderRadius: d,
    padding: oe,
    width: u,
    margin: ee,
    overflow: "hidden"
  }, te = {
    height: o,
    width: de ? "100%" : re ? pe : K,
    background: n,
    transition: de ? "none" : "width ".concat(Ee || "1s", " ").concat(Pe || "ease-in-out"),
    borderRadius: "inherit",
    display: "flex",
    alignItems: "center",
    justifyContent: h !== "outside" && $ ? $ : "normal",
    animation: de ? "indeterminate 1.5s infinite linear" : "none"
  }, V = Oh({ padding: h === "outside" ? "0 0 0 5px" : "5px", color: b, fontWeight: "bold", fontSize: E, display: F ? "initial" : "none" }, se), ae = {
    display: h === "outside" ? "flex" : "initial",
    alignItems: h === "outside" ? "center" : "initial"
  }, Ce = typeof ye == "number" ? "".concat(ye, "%") : "".concat(ye), Fe = ge || Ce;
  return wo.useEffect(function() {
    re && !de && requestAnimationFrame(function() {
      return Q(K);
    });
  }, [K, re, de]), wo.createElement(
    "div",
    { style: Se ? void 0 : ae, className: Se, dir: I, role: "progressbar", "aria-valuenow": de ? void 0 : parseFloat(Fe), "aria-valuemin": S, "aria-valuemax": T, "aria-valuetext": "".concat(B === null ? Fe : B) },
    wo.createElement(
      "div",
      { style: ke ? void 0 : fe, className: ke },
      wo.createElement("div", { style: De ? void 0 : te, className: De }, h !== "outside" && wo.createElement("span", { style: U ? void 0 : V, className: U }, Fe))
    ),
    h === "outside" && wo.createElement("span", { style: U ? void 0 : V, className: U }, Fe),
    wo.createElement("style", null, `
          @keyframes indeterminate {
            0% {
              width: 30%;
              transform: translateX(-50%);
            }
            50% {
              width: 30%;
              transform: translateX(250%);
            }
            100% {
              width: 30%;
              transform: translateX(-50%);
            }
          }
        `)
  );
}
var gU = hE.default = mU;
const Du = (e, t, n) => {
  if (R.isEmpty(n))
    return e[t];
  if (e[t]) {
    const r = R.takeRight(n, n.length - 1);
    return Du(e[t], n[0], r);
  }
  return "";
};
function Yt(e, t, n = !1, r) {
  if (e) {
    if (r)
      return Du(t, e, null);
    let o = e.split(".");
    if (o.length < 2 && (o = e.split(","), o.length >= 2))
      return Du(t, o[0], null);
    const s = R.takeRight(o, o.length - 1), u = Du(t, o[0], s);
    return [null, "", void 0].includes(u) && n ? 0 : u;
  }
  return n ? 0 : null;
}
const vU = "_emptyChat_1ablf_3", yU = "_emptyDataIcon_1ablf_13", bU = "_groupHover_1ablf_29", _U = "_sumRow_1ablf_39", wU = "_cell_1ablf_51", EU = "_cellButton_1ablf_61", xU = "_ButtonIcon_1ablf_75", CU = "_ButtonLink_1ablf_95", OU = "_towLineRow_1ablf_117", SU = "_noWrap_1ablf_127", TU = "_progressBarLabel_1ablf_137", PU = "_cardsWrapper_1ablf_157", kU = "_popupContent_1ablf_225", Qt = {
  emptyChat: vU,
  emptyDataIcon: yU,
  groupHover: bU,
  sumRow: _U,
  cell: wU,
  cellButton: EU,
  ButtonIcon: xU,
  ButtonLink: CU,
  towLineRow: OU,
  noWrap: SU,
  progressBarLabel: TU,
  cardsWrapper: PU,
  popupContent: kU
}, NU = (e, t, n = {}) => {
  if (R.isEmpty(t))
    return e;
  if (R.isEmpty(e))
    return t;
  const { groupKey: r = "groupName", itemsKey: o = "tasks", idKey: s = "id" } = n, u = /* @__PURE__ */ new Map();
  e.forEach((p) => {
    u.set(p[r], p);
  });
  const c = [];
  e.forEach((p) => {
    const h = t.find((m) => m[r] === p[r]);
    if (h && h[o] && h[o].length > 0) {
      const m = new Set(
        (p[o] || []).map((y) => y[s])
      ), v = (h[o] || []).filter((y) => !m.has(y[s]));
      v.length > 0 ? c.push({
        ...p,
        [o]: [...p[o] || [], ...v]
      }) : c.push(p);
    } else
      c.push(p);
  }), t.forEach((p) => {
    u.has(p[r]) || c.push(p);
  });
  const d = /* @__PURE__ */ new Set();
  return c.map((p) => {
    if (!p[o] || p[o].length === 0)
      return p;
    const h = p[o].filter((m) => d.has(m[s]) ? !1 : (d.add(m[s]), !0));
    return {
      ...p,
      [o]: h
    };
  });
}, IU = "_cardsContainer_d29bq_1", AU = "_card_d29bq_1", RU = "_cardHeader_d29bq_43", MU = "_cardField_d29bq_61", DU = "_cardLabel_d29bq_89", LU = "_cardValue_d29bq_103", FU = "_cardActionsMenu_d29bq_133", $U = "_cardMenuIcon_d29bq_157", BU = "_cardMenu_d29bq_157", WU = "_cardMenuPopupContent_d29bq_287", UU = "_cardMenuItem_d29bq_295", jU = "_cardMenuIconItem_d29bq_315", zU = "_cardMenuText_d29bq_335", HU = "_cardActionsMenuPopup_d29bq_351", YU = "_emptyState_d29bq_363", qU = "_emptyIcon_d29bq_375", VU = "_cardLine1_d29bq_387", GU = "_cardLine2_d29bq_403", KU = "_cardLine3_d29bq_419", ZU = "_cardLine4_d29bq_435", XU = "_cardLine1Item_d29bq_451", QU = "_cardLine2Item_d29bq_453", JU = "_cardLine3Item_d29bq_455", ej = "_cardLine4Item_d29bq_457", tj = "_cardCheckbox_d29bq_467", nj = "_cardInlineField_d29bq_479", rj = "_cardInlineLabel_d29bq_491", aj = "_cardInlineValue_d29bq_505", ct = {
  cardsContainer: IU,
  card: AU,
  cardHeader: RU,
  cardField: MU,
  cardLabel: DU,
  cardValue: LU,
  cardActionsMenu: FU,
  cardMenuIcon: $U,
  cardMenu: BU,
  cardMenuPopupContent: WU,
  cardMenuItem: UU,
  cardMenuIconItem: jU,
  cardMenuText: zU,
  cardActionsMenuPopup: HU,
  emptyState: YU,
  emptyIcon: qU,
  cardLine1: VU,
  cardLine2: GU,
  cardLine3: KU,
  cardLine4: ZU,
  cardLine1Item: XU,
  cardLine2Item: QU,
  cardLine3Item: JU,
  cardLine4Item: ej,
  cardCheckbox: tj,
  cardInlineField: nj,
  cardInlineLabel: rj,
  cardInlineValue: aj
}, mE = ({ rowData: e, columnsData: t, onHandlerTable: n, isPDF: r }) => {
  const [o, s] = ot(!1), u = [];
  if (R.map(t, ({ action: d, key: p }) => {
    !R.isEmpty(d) && !r && R.map(d, (h) => {
      const { content: m, hidden: v, type: y, color: b = "hsl(0, 0%, 95%)", onClick: _, visible: E } = h;
      if (!v && !(typeof E == "function" && E(e) === !1) && (y === "icon" || y === "link")) {
        let A = m;
        y === "icon" && (m === "edit" ? A = "Editar" : m === "trash" || m === "delete" ? A = "Borrar" : m === "eye" ? A = "Ver" : m === "copy" && (A = "Copiar")), u.push({
          key: `${p}-${m}`,
          text: A,
          icon: y === "icon" ? m : null,
          color: y === "icon" ? b : null,
          onClick: () => {
            s(!1), n(_, e);
          }
        });
      }
    });
  }), R.isEmpty(u)) return null;
  const c = R.map(u, (d) => /* @__PURE__ */ ce(
    Pn.Item,
    {
      className: ct.cardMenuItem,
      onClick: (p) => {
        p.stopPropagation(), d.onClick();
      },
      children: [
        d.icon && /* @__PURE__ */ k(
          Be,
          {
            name: d.icon,
            className: ct.cardMenuIconItem,
            style: {
              color: d.color || "#6b7280"
            }
          }
        ),
        /* @__PURE__ */ k("span", { className: ct.cardMenuText, children: d.text })
      ]
    },
    d.key
  ));
  return /* @__PURE__ */ k(
    "div",
    {
      className: ct.cardActionsMenu,
      onDoubleClick: (d) => {
        d.stopPropagation();
      },
      children: /* @__PURE__ */ k(
        Er,
        {
          className: ct.cardActionsMenuPopup,
          trigger: /* @__PURE__ */ k(
            Be,
            {
              name: "ellipsis vertical",
              size: "large",
              className: ct.cardMenuIcon,
              onClick: (d) => {
                d.stopPropagation();
              },
              onDoubleClick: (d) => {
                d.stopPropagation();
              },
              onMouseDown: (d) => {
                d.stopPropagation();
              }
            }
          ),
          on: "click",
          position: "top right",
          open: o,
          onOpen: () => {
            s(!0);
          },
          onClose: () => {
            s(!1);
          },
          children: /* @__PURE__ */ k(Er.Content, { className: ct.cardMenuPopupContent, children: /* @__PURE__ */ k(Pn, { vertical: !0, className: ct.cardMenu, children: c }) })
        }
      )
    }
  );
};
mE.propTypes = {
  rowData: l.object.isRequired,
  columnsData: l.array.isRequired,
  onHandlerTable: l.func.isRequired,
  isPDF: l.bool
};
const gE = ({
  data: e = [],
  columns: t = [],
  headerDetail: n = {},
  setRowStyle: r,
  clickedRowColors: o,
  onHandlerTable: s,
  handlerClick: u,
  formatData: c,
  clikedData: d,
  isPDF: p = !1,
  cardLine1: h = [],
  cardLine2: m = [],
  cardLine3: v = [],
  cardLine4: y = [],
  multipleHandler: b,
  concatKeys: _ = [],
  enableInfiniteScroll: E = !1,
  onLoadMore: A,
  isLoadingMore: F = !1,
  hasMore: x,
  // Props para manejo automático de scroll infinito
  dataHandler: I = null,
  searchParams: O = null,
  totalRows: S = 0,
  mergeConfig: C = null
}) => {
  const T = Ln(null), N = Ln(null), [B, H] = ot(!1), [ne, z] = ot(e), [re, he] = ot(1), [ve, Te] = ot(!0), de = Ln(!1), ye = Ln(O), ee = Ln(!1), oe = Ln(!1), se = Ln(0), [Ee, Pe] = ot(window.innerWidth);
  Zt(() => {
    const Q = () => {
      Pe(window.innerWidth);
    };
    return window.addEventListener("resize", Q), () => {
      window.removeEventListener("resize", Q);
    };
  }, []), Zt(() => {
    JSON.stringify(ye.current) !== JSON.stringify(O) ? (z(e), he(1), ye.current = O, ee.current = !1, se.current = 1, oe.current = !1, Te(!0)) : ee.current && re > se.current ? (e && e.length > 0 ? (z((fe) => {
      if (C)
        return NU(fe, e, C);
      const te = "id";
      if (fe.length > 0 && fe[0][te] !== void 0) {
        const V = new Set(
          fe.map((Ce) => Ce[te])
        ), ae = e.filter((Ce) => !V.has(Ce[te]));
        return [...fe, ...ae];
      }
      return [...fe, ...e];
    }), se.current = re, oe.current = !1) : (se.current = re, oe.current = !0), ee.current = !1) : re === 1 && !ee.current && e && (z(e), se.current = 1);
  }, [e, O, C, re]), Zt(() => {
    if (e !== void 0 && ve && !de.current && !B && !ee.current) {
      if (e.length > 0) {
        const fe = setTimeout(() => {
          Te(!1);
        }, 1e3);
        return () => {
          clearTimeout(fe);
        };
      }
      const Q = setTimeout(() => {
        Te(!1);
      }, 1500);
      return () => {
        clearTimeout(Q);
      };
    }
  }, [e, ve, B]), Zt(() => {
    if (ve) {
      const Q = setTimeout(() => {
        Te(!1);
      }, 3e3);
      return () => {
        clearTimeout(Q);
      };
    }
  }, [ve]);
  const Se = (Q, fe) => {
    if (R.isEmpty(Q))
      return null;
    const te = /* @__PURE__ */ k("span", { style: { marginLeft: "4px" }, children: /* @__PURE__ */ k(
      Er,
      {
        position: "bottom right",
        content: /* @__PURE__ */ k("div", { children: Q }),
        trigger: /* @__PURE__ */ k(Be, { name: "comment alternate outline", style: { color: "#286b92" } })
      }
    ) }, 1);
    return fe >= Q.length ? Q : /* @__PURE__ */ ce("span", { children: [
      `${Q.slice(0, fe)}...`,
      te
    ] });
  }, ge = (Q, fe, te = null) => {
    const {
      key: V,
      label: ae,
      format: Ce,
      endDateKey: Fe = null,
      dataPosition: $e = "left",
      stringLength: st = 20,
      boolLabels: Ve,
      translate: xt,
      colorLabel: rt,
      textColor: Ke = "#000000",
      stopDateHandler: Xe = () => {
      },
      onClick: Nt,
      render: be
    } = Q;
    if (be && typeof be == "function")
      return be(fe);
    const It = Yt(V, fe, !1), At = R.isEmpty(Fe) ? null : Yt(Fe, fe), ft = yl(Ee, 768, st, 10, 10), Je = c({
      value: It,
      format: Ce,
      endDate: At,
      stringLength: ft,
      key: V,
      translate: xt,
      colorLabel: rt,
      onClick: Nt,
      rowData: fe,
      textColor: Ke,
      boolLabels: Ve,
      stopDateHandler: Xe
    });
    if (!(V === "id" || ae === "ID" || (V == null ? void 0 : V.toLowerCase().includes("id"))) && (R.isEmpty(Je) || Je === "-" || Je === null || Je === void 0))
      return null;
    const We = te !== null ? te : ae;
    return /* @__PURE__ */ ce("div", { className: ct.cardInlineField, children: [
      We && /* @__PURE__ */ ce("span", { className: ct.cardInlineLabel, children: [
        We,
        ":"
      ] }),
      /* @__PURE__ */ k("span", { className: ct.cardInlineValue, style: { textAlign: $e, color: Ke }, children: Je })
    ] });
  }, ke = (Q, fe) => /* @__PURE__ */ k(mE, { rowData: Q, columnsData: fe, onHandlerTable: s, isPDF: p }), De = (Q, fe) => {
    let te = {};
    typeof r == "function" && (te = r(Q) || {});
    const ae = d === Q ? { backgroundColor: o, ...te } : te;
    if (!R.isEmpty(h) || !R.isEmpty(m) || !R.isEmpty(v) || !R.isEmpty(y)) {
      const $e = R.find(t, { multiple: !0 }), st = $e == null ? void 0 : $e.key, Ve = st ? R.includes(_, Q[st]) : !1, xt = [];
      $e && !R.isEmpty(h) && xt.push(
        /* @__PURE__ */ k("div", { className: ct.cardCheckbox, children: /* @__PURE__ */ k(
          ar,
          {
            checked: Ve,
            onChange: () => {
              b && b(Q, st);
            },
            onClick: (be) => {
              be.stopPropagation();
            }
          }
        ) }, "checkbox")
      ), R.map(h, (be) => {
        const It = typeof be == "string" ? be : be.key, At = typeof be == "object" && be.label !== void 0 ? be.label : null, ft = typeof be == "object" && be.format !== void 0 ? be.format : null, Je = R.find(t, (Gt) => Gt.key === It && !Gt.multiple && !Gt.hidden);
        if (Je && !Je.hidden && !Je.multiple) {
          const Gt = ft ? { ...Je, format: ft } : Je, We = ge(Gt, Q, At);
          We && xt.push(
            /* @__PURE__ */ k("div", { className: ct.cardLine1Item, children: We }, It)
          );
        }
      });
      const rt = [];
      R.map(m, (be) => {
        var Gt;
        if (typeof be == "object" && typeof be.render == "function") {
          const We = be.render(Q), Ft = typeof We == "object" && We.label !== void 0 ? We.label : be.label || null;
          let Qe = typeof We == "object" && We.value !== void 0 ? We.value : We;
          const un = typeof be == "object" && be.format !== void 0 ? be.format : null, Kn = typeof be == "object" && be.stringLength !== void 0 ? be.stringLength : 20, ia = typeof We == "object" && We.shouldTruncate === !0;
          if (un && typeof Qe == "string")
            if (un === "truncate" && ia) {
              const sa = yl(Ee, 480, Kn, 1, 10);
              Qe = Se(Qe, sa);
            } else un !== "truncate" && (Qe = c({
              value: Qe,
              format: un,
              endDate: null,
              stringLength: Kn,
              key: be.key || "",
              translate: null,
              colorLabel: null,
              onClick: null,
              rowData: Q,
              textColor: "#000000",
              boolLabels: null,
              stopDateHandler: () => {
              }
            }));
          ((be.key === "id" || be.label === "ID" || ((Gt = be.key) == null ? void 0 : Gt.toLowerCase().includes("id"))) && !R.isEmpty(Qe) && Qe !== "-" && Qe !== null && Qe !== void 0 || !R.isEmpty(Qe) && Qe !== "-" && Qe !== null && Qe !== void 0) && rt.push(
            /* @__PURE__ */ k("div", { className: ct.cardLine2Item, children: /* @__PURE__ */ ce("div", { className: ct.cardInlineField, children: [
              Ft && /* @__PURE__ */ ce("span", { className: ct.cardInlineLabel, children: [
                Ft,
                ":"
              ] }),
              /* @__PURE__ */ k("span", { className: ct.cardInlineValue, children: Qe })
            ] }) }, be.key || "render")
          );
          return;
        }
        const It = typeof be == "string" ? be : be.key, At = typeof be == "object" && be.label !== void 0 ? be.label : null, ft = typeof be == "object" && be.format !== void 0 ? be.format : null, Je = R.find(t, (We) => We.key === It && !We.multiple && !We.hidden);
        if (Je && !Je.hidden && !Je.multiple) {
          const We = ft ? { ...Je, format: ft } : Je, Ft = ge(We, Q, At);
          Ft && rt.push(
            /* @__PURE__ */ k("div", { className: ct.cardLine2Item, children: Ft }, It)
          );
        }
      });
      const Ke = [];
      R.map(v, (be) => {
        var Gt;
        if (typeof be == "object" && typeof be.render == "function") {
          const We = be.render(Q), Ft = typeof We == "object" && We.label !== void 0 ? We.label : be.label || null;
          let Qe = typeof We == "object" && We.value !== void 0 ? We.value : We;
          const un = typeof be == "object" && be.format !== void 0 ? be.format : null, Kn = typeof be == "object" && be.stringLength !== void 0 ? be.stringLength : 20, ia = typeof We == "object" && We.shouldTruncate === !0;
          if (un && typeof Qe == "string")
            if (un === "truncate" && ia) {
              const sa = yl(Ee, 480, Kn, 1, 10);
              Qe = Se(Qe, sa);
            } else un !== "truncate" && (Qe = c({
              value: Qe,
              format: un,
              endDate: null,
              stringLength: Kn,
              key: be.key || "",
              translate: null,
              colorLabel: null,
              onClick: null,
              rowData: Q,
              textColor: "#000000",
              boolLabels: null,
              stopDateHandler: () => {
              }
            }));
          ((be.key === "id" || be.label === "ID" || ((Gt = be.key) == null ? void 0 : Gt.toLowerCase().includes("id"))) && !R.isEmpty(Qe) && Qe !== "-" && Qe !== null && Qe !== void 0 || !R.isEmpty(Qe) && Qe !== "-" && Qe !== null && Qe !== void 0) && Ke.push(
            /* @__PURE__ */ k("div", { className: ct.cardLine3Item, children: /* @__PURE__ */ ce("div", { className: ct.cardInlineField, children: [
              Ft && /* @__PURE__ */ ce("span", { className: ct.cardInlineLabel, children: [
                Ft,
                ":"
              ] }),
              /* @__PURE__ */ k("span", { className: ct.cardInlineValue, children: Qe })
            ] }) }, be.key || "render")
          );
          return;
        }
        const It = typeof be == "string" ? be : be.key, At = typeof be == "object" && be.label !== void 0 ? be.label : null, ft = typeof be == "object" && be.format !== void 0 ? be.format : null, Je = R.find(t, (We) => We.key === It && !We.multiple && !We.hidden);
        if (Je && !Je.hidden && !Je.multiple) {
          const We = ft ? { ...Je, format: ft } : Je, Ft = ge(We, Q, At);
          Ft && Ke.push(
            /* @__PURE__ */ k("div", { className: ct.cardLine3Item, children: Ft }, It)
          );
        }
      });
      const Xe = [];
      R.map(y, (be) => {
        var Gt;
        if (typeof be == "object" && typeof be.render == "function") {
          const We = be.render(Q), Ft = typeof We == "object" && We.label !== void 0 ? We.label : be.label || null;
          let Qe = typeof We == "object" && We.value !== void 0 ? We.value : We;
          const un = typeof be == "object" && be.format !== void 0 ? be.format : null, Kn = typeof be == "object" && be.stringLength !== void 0 ? be.stringLength : 20, ia = typeof We == "object" && We.shouldTruncate === !0;
          if (un && typeof Qe == "string")
            if (un === "truncate" && ia) {
              const sa = yl(Ee, 480, Kn, 1, 10);
              Qe = Se(Qe, sa);
            } else un !== "truncate" && (Qe = c({
              value: Qe,
              format: un,
              endDate: null,
              stringLength: Kn,
              key: be.key || "",
              translate: null,
              colorLabel: null,
              onClick: null,
              rowData: Q,
              textColor: "#000000",
              boolLabels: null,
              stopDateHandler: () => {
              }
            }));
          ((be.key === "id" || be.label === "ID" || ((Gt = be.key) == null ? void 0 : Gt.toLowerCase().includes("id"))) && !R.isEmpty(Qe) && Qe !== "-" && Qe !== null && Qe !== void 0 || !R.isEmpty(Qe) && Qe !== "-" && Qe !== null && Qe !== void 0) && Xe.push(
            /* @__PURE__ */ k("div", { className: ct.cardLine4Item, children: /* @__PURE__ */ ce("div", { className: ct.cardInlineField, children: [
              Ft && /* @__PURE__ */ ce("span", { className: ct.cardInlineLabel, children: [
                Ft,
                ":"
              ] }),
              /* @__PURE__ */ k("span", { className: ct.cardInlineValue, children: Qe })
            ] }) }, be.key || "render")
          );
          return;
        }
        const It = typeof be == "string" ? be : be.key, At = typeof be == "object" && be.label !== void 0 ? be.label : null, ft = typeof be == "object" && be.format !== void 0 ? be.format : null, Je = R.find(t, (We) => We.key === It && !We.multiple && !We.hidden);
        if (Je && !Je.hidden && !Je.multiple) {
          const We = ft ? { ...Je, format: ft } : Je, Ft = ge(We, Q, At);
          Ft && Xe.push(
            /* @__PURE__ */ k("div", { className: ct.cardLine4Item, children: Ft }, It)
          );
        }
      });
      const Nt = ke(Q, t);
      return /* @__PURE__ */ ce(
        "div",
        {
          className: ct.card,
          style: ae,
          role: "button",
          tabIndex: 0,
          onClick: () => {
            u(Q);
          },
          onDoubleClick: () => {
            s("Watch", Q);
          },
          onKeyPress: (be) => {
            (be.key === "Enter" || be.key === " ") && u(Q);
          },
          children: [
            Nt,
            !R.isEmpty(xt) && /* @__PURE__ */ k("div", { className: ct.cardLine1, children: xt }),
            !R.isEmpty(rt) && /* @__PURE__ */ k("div", { className: ct.cardLine2, children: rt }),
            !R.isEmpty(Ke) && /* @__PURE__ */ k("div", { className: ct.cardLine3, children: Ke }),
            !R.isEmpty(Xe) && /* @__PURE__ */ k("div", { className: ct.cardLine4, children: Xe })
          ]
        },
        fe
      );
    }
    const Ce = R.map(
      t,
      ({
        key: $e,
        label: st,
        format: Ve,
        endDateKey: xt = null,
        dataPosition: rt = "left",
        hidden: Ke = !1,
        stringLength: Xe = 20,
        boolLabels: Nt,
        translate: be,
        colorLabel: It,
        textColor: At = "#000000",
        stopDateHandler: ft = () => {
        },
        onClick: Je,
        render: Gt,
        multiple: We = !1
      }) => {
        if (Ke || We) return null;
        if (Gt && typeof Gt == "function")
          return /* @__PURE__ */ k("div", { className: ct.cardField, children: Gt(Q) }, $e);
        const Ft = Yt($e, Q, !1), Qe = R.isEmpty(xt) ? null : Yt(xt, Q), un = yl(Ee, 768, Xe, 10, 10), Kn = c({
          value: Ft,
          format: Ve,
          endDate: Qe,
          stringLength: un,
          key: $e,
          translate: be,
          colorLabel: It,
          onClick: Je,
          rowData: Q,
          textColor: At,
          boolLabels: Nt,
          stopDateHandler: ft
        });
        return /* @__PURE__ */ ce("div", { className: ct.cardField, children: [
          /* @__PURE__ */ ce("div", { className: ct.cardLabel, children: [
            st,
            ":"
          ] }),
          /* @__PURE__ */ k("div", { className: ct.cardValue, style: { textAlign: rt, color: At }, children: Kn })
        ] }, $e);
      }
    ), Fe = ke(Q, t);
    return /* @__PURE__ */ ce(
      "div",
      {
        className: ct.card,
        style: ae,
        role: "button",
        tabIndex: 0,
        onClick: () => {
          u(Q);
        },
        onDoubleClick: () => {
          s("Watch", Q);
        },
        onKeyPress: ($e) => {
          ($e.key === "Enter" || $e.key === " ") && u(Q);
        },
        children: [
          Fe,
          Ce
        ]
      },
      fe
    );
  }, U = I ? ne : e, $ = Vp(() => {
    if (R.isEmpty(U))
      return [];
    const Q = [];
    return R.map(U, (fe, te) => {
      if (R.isEmpty(n)) {
        const V = (fe == null ? void 0 : fe.id) !== void 0 ? fe.id : te;
        Q.push({
          type: "card",
          key: `card-${V}`,
          data: fe
        });
      } else {
        const V = Yt(n.headerTitle, fe, !1), ae = Yt(n.dataDetail, fe, !1);
        Q.push({
          type: "header",
          key: `header-${te}`,
          title: V
        }), R.map(ae, (Ce, Fe) => {
          const $e = (Ce == null ? void 0 : Ce.id) !== void 0 ? Ce.id : `${te}-${Fe}`;
          Q.push({
            type: "card",
            key: `card-${$e}`,
            data: Ce
          });
        });
      }
    }), Q;
  }, [U, n])(), D = Vp(async () => {
    if (!I || !O || de.current || B || oe.current)
      return;
    const Q = re + 1, fe = R.isEmpty(n) ? ne.length : R.sumBy(ne, (te) => {
      const V = Yt(n.dataDetail, te, !1);
      return (V == null ? void 0 : V.length) || 0;
    });
    if (S && fe >= S) {
      oe.current = !0;
      return;
    }
    de.current = !0, H(!0), ee.current = !0;
    try {
      await I({ ...O, page: Q }, !1, !1), he(Q);
    } catch (te) {
      console.error("Error loading more data:", te), ee.current = !1;
    } finally {
      H(!1), de.current = !1;
    }
  }, [I, O, re, ne, n, S, B]), G = I ? D : A, K = I ? B : F, le = R.isEmpty(n) ? U.length : R.sumBy(U, (Q) => {
    const fe = Yt(n.dataDetail, Q, !1);
    return (fe == null ? void 0 : fe.length) || 0;
  }), pe = oe.current ? !1 : x ?? (S ? le < S : !0);
  return Zt(() => {
    he(1), de.current = !1;
  }, [O]), Zt(() => {
    if (!E || !G || !N.current)
      return;
    let Q = null, fe = null;
    const te = () => {
      let ae = T.current;
      for (; ae && ae !== document.body; ) {
        const Ce = ae.className || "", Fe = window.getComputedStyle(ae);
        if (Ce.includes("modalContent") || Ce.includes("scrolling") || Fe.overflowY === "auto" || Fe.overflowY === "scroll")
          return ae;
        ae = ae.parentElement;
      }
      return null;
    };
    return fe = setTimeout(() => {
      const ae = te(), Ce = N.current;
      !Ce || pe === !1 || $.length === 0 || "IntersectionObserver" in window && (Q = new IntersectionObserver(
        (Fe) => {
          const [$e] = Fe;
          $e.isIntersecting && pe !== !1 && !K && !de.current && $.length > 0 && !ve && G();
        },
        {
          root: ae,
          rootMargin: "200px",
          threshold: 0
        }
      ), Q.observe(Ce));
    }, 300), () => {
      fe && clearTimeout(fe), Q && N.current && Q.unobserve(N.current);
    };
  }, [E, G, pe, K, $.length, ve]), ve && R.isEmpty($) ? /* @__PURE__ */ k("div", { className: ct.cardsContainer, ref: T, children: /* @__PURE__ */ k("div", { className: ct.emptyState, children: /* @__PURE__ */ ce(
    "div",
    {
      style: {
        textAlign: "center",
        padding: "40px 20px",
        color: "#666",
        fontSize: "1.1rem"
      },
      children: [
        /* @__PURE__ */ k(Be, { loading: !0, name: "spinner", size: "big" }),
        /* @__PURE__ */ k("div", { style: { marginTop: "15px" }, children: "Cargando..." })
      ]
    }
  ) }) }) : R.isEmpty($) ? /* @__PURE__ */ k("div", { className: ct.cardsContainer, ref: T, children: /* @__PURE__ */ k("div", { className: ct.emptyState, children: /* @__PURE__ */ ce(qn, { as: "h3", color: "grey", children: [
    /* @__PURE__ */ k("div", { className: ct.emptyIcon, children: /* @__PURE__ */ ce(Be.Group, { size: "large", children: [
      /* @__PURE__ */ k(Be, { name: "list alternate outline" }),
      /* @__PURE__ */ k(Be, { corner: !0, name: "close", color: "red" })
    ] }) }),
    "No se ha encontrado ningun dato"
  ] }) }) }) : /* @__PURE__ */ ce("div", { className: ct.cardsContainer, ref: T, children: [
    R.map($, (Q) => Q.type === "header" ? /* @__PURE__ */ k("div", { className: ct.cardHeader, children: Q.title }, Q.key) : De(Q.data, Q.key)),
    E && pe !== !1 && /* @__PURE__ */ k("div", { ref: N, style: { height: "1px", width: "100%" } }),
    K && !ve && /* @__PURE__ */ ce(
      "div",
      {
        style: {
          textAlign: "center",
          padding: "20px",
          color: "#666",
          fontSize: "1rem"
        },
        children: [
          /* @__PURE__ */ k(Be, { loading: !0, name: "spinner" }),
          "Cargando más resultados..."
        ]
      }
    )
  ] });
};
gE.propTypes = {
  data: l.array,
  columns: l.array,
  headerDetail: l.object,
  setRowStyle: l.func,
  clickedRowColors: l.string,
  onHandlerTable: l.func,
  handlerClick: l.func,
  formatData: l.func.isRequired,
  clikedData: l.object,
  isPDF: l.bool,
  cardLine1: l.array,
  cardLine2: l.array,
  cardLine3: l.array,
  cardLine4: l.array,
  multipleHandler: l.func,
  concatKeys: l.array,
  // Scroll infinito
  enableInfiniteScroll: l.bool,
  onLoadMore: l.func,
  // Opcional: handler manual
  isLoadingMore: l.bool,
  // Opcional: estado manual
  hasMore: l.bool,
  // Opcional: se calcula automáticamente si no se proporciona
  // Manejo automático
  dataHandler: l.func,
  // Función para cargar datos automáticamente
  searchParams: l.object,
  // Parámetros de búsqueda
  totalRows: l.number,
  // Total de registros disponibles
  mergeConfig: l.object
  // Configuración para merge automático { groupKey, itemsKey, idKey }
};
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function oj(e, t, n) {
  return (t = sj(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function O0(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ne(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? O0(Object(n), !0).forEach(function(r) {
      oj(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : O0(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function ij(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function sj(e) {
  var t = ij(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
const S0 = () => {
};
let Km = {}, vE = {}, yE = null, bE = {
  mark: S0,
  measure: S0
};
try {
  typeof window < "u" && (Km = window), typeof document < "u" && (vE = document), typeof MutationObserver < "u" && (yE = MutationObserver), typeof performance < "u" && (bE = performance);
} catch {
}
const {
  userAgent: T0 = ""
} = Km.navigator || {}, zo = Km, rn = vE, P0 = yE, xu = bE;
zo.document;
const so = !!rn.documentElement && !!rn.head && typeof rn.addEventListener == "function" && typeof rn.createElement == "function", _E = ~T0.indexOf("MSIE") || ~T0.indexOf("Trident/");
var lj = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, cj = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, wE = {
  classic: {
    fa: "solid",
    fas: "solid",
    "fa-solid": "solid",
    far: "regular",
    "fa-regular": "regular",
    fal: "light",
    "fa-light": "light",
    fat: "thin",
    "fa-thin": "thin",
    fab: "brands",
    "fa-brands": "brands"
  },
  duotone: {
    fa: "solid",
    fad: "solid",
    "fa-solid": "solid",
    "fa-duotone": "solid",
    fadr: "regular",
    "fa-regular": "regular",
    fadl: "light",
    "fa-light": "light",
    fadt: "thin",
    "fa-thin": "thin"
  },
  sharp: {
    fa: "solid",
    fass: "solid",
    "fa-solid": "solid",
    fasr: "regular",
    "fa-regular": "regular",
    fasl: "light",
    "fa-light": "light",
    fast: "thin",
    "fa-thin": "thin"
  },
  "sharp-duotone": {
    fa: "solid",
    fasds: "solid",
    "fa-solid": "solid",
    fasdr: "regular",
    "fa-regular": "regular",
    fasdl: "light",
    "fa-light": "light",
    fasdt: "thin",
    "fa-thin": "thin"
  }
}, uj = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, EE = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], $n = "classic", Wd = "duotone", dj = "sharp", fj = "sharp-duotone", xE = [$n, Wd, dj, fj], pj = {
  classic: {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  duotone: {
    900: "fad",
    400: "fadr",
    300: "fadl",
    100: "fadt"
  },
  sharp: {
    900: "fass",
    400: "fasr",
    300: "fasl",
    100: "fast"
  },
  "sharp-duotone": {
    900: "fasds",
    400: "fasdr",
    300: "fasdl",
    100: "fasdt"
  }
}, hj = {
  "Font Awesome 6 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 6 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  "Font Awesome 6 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 6 Duotone": {
    900: "fad",
    400: "fadr",
    normal: "fadr",
    300: "fadl",
    100: "fadt"
  },
  "Font Awesome 6 Sharp": {
    900: "fass",
    400: "fasr",
    normal: "fasr",
    300: "fasl",
    100: "fast"
  },
  "Font Awesome 6 Sharp Duotone": {
    900: "fasds",
    400: "fasdr",
    normal: "fasdr",
    300: "fasdl",
    100: "fasdt"
  }
}, mj = /* @__PURE__ */ new Map([["classic", {
  defaultShortPrefixId: "fas",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin", "brands"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp", {
  defaultShortPrefixId: "fass",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["duotone", {
  defaultShortPrefixId: "fad",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp-duotone", {
  defaultShortPrefixId: "fasds",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}]]), gj = {
  classic: {
    solid: "fas",
    regular: "far",
    light: "fal",
    thin: "fat",
    brands: "fab"
  },
  duotone: {
    solid: "fad",
    regular: "fadr",
    light: "fadl",
    thin: "fadt"
  },
  sharp: {
    solid: "fass",
    regular: "fasr",
    light: "fasl",
    thin: "fast"
  },
  "sharp-duotone": {
    solid: "fasds",
    regular: "fasdr",
    light: "fasdl",
    thin: "fasdt"
  }
}, vj = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], k0 = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, yj = ["kit"], bj = {
  kit: {
    "fa-kit": "fak"
  }
}, _j = ["fak", "fakd"], wj = {
  kit: {
    fak: "fa-kit"
  }
}, N0 = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
}, Cu = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Ej = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], xj = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], Cj = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, Oj = {
  classic: {
    "fa-brands": "fab",
    "fa-duotone": "fad",
    "fa-light": "fal",
    "fa-regular": "far",
    "fa-solid": "fas",
    "fa-thin": "fat"
  },
  duotone: {
    "fa-regular": "fadr",
    "fa-light": "fadl",
    "fa-thin": "fadt"
  },
  sharp: {
    "fa-solid": "fass",
    "fa-regular": "fasr",
    "fa-light": "fasl",
    "fa-thin": "fast"
  },
  "sharp-duotone": {
    "fa-solid": "fasds",
    "fa-regular": "fasdr",
    "fa-light": "fasdl",
    "fa-thin": "fasdt"
  }
}, Sj = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
}, Sh = {
  classic: {
    fab: "fa-brands",
    fad: "fa-duotone",
    fal: "fa-light",
    far: "fa-regular",
    fas: "fa-solid",
    fat: "fa-thin"
  },
  duotone: {
    fadr: "fa-regular",
    fadl: "fa-light",
    fadt: "fa-thin"
  },
  sharp: {
    fass: "fa-solid",
    fasr: "fa-regular",
    fasl: "fa-light",
    fast: "fa-thin"
  },
  "sharp-duotone": {
    fasds: "fa-solid",
    fasdr: "fa-regular",
    fasdl: "fa-light",
    fasdt: "fa-thin"
  }
}, Tj = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], Th = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...Ej, ...Tj], Pj = ["solid", "regular", "light", "thin", "duotone", "brands"], CE = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], kj = CE.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), Nj = [...Object.keys(Sj), ...Pj, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Cu.GROUP, Cu.SWAP_OPACITY, Cu.PRIMARY, Cu.SECONDARY].concat(CE.map((e) => "".concat(e, "x"))).concat(kj.map((e) => "w-".concat(e))), Ij = {
  "Font Awesome 5 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 5 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal"
  },
  "Font Awesome 5 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 5 Duotone": {
    900: "fad"
  }
};
const Qa = "___FONT_AWESOME___", Ph = 16, OE = "fa", SE = "svg-inline--fa", Ii = "data-fa-i2svg", kh = "data-fa-pseudo-element", Aj = "data-fa-pseudo-element-pending", Zm = "data-prefix", Xm = "data-icon", I0 = "fontawesome-i2svg", Rj = "async", Mj = ["HTML", "HEAD", "STYLE", "SCRIPT"], TE = (() => {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})();
function Cc(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[$n];
    }
  });
}
const PE = Ne({}, wE);
PE[$n] = Ne(Ne(Ne(Ne({}, {
  "fa-duotone": "duotone"
}), wE[$n]), k0.kit), k0["kit-duotone"]);
const Dj = Cc(PE), Nh = Ne({}, gj);
Nh[$n] = Ne(Ne(Ne(Ne({}, {
  duotone: "fad"
}), Nh[$n]), N0.kit), N0["kit-duotone"]);
const A0 = Cc(Nh), Ih = Ne({}, Sh);
Ih[$n] = Ne(Ne({}, Ih[$n]), wj.kit);
const Qm = Cc(Ih), Ah = Ne({}, Oj);
Ah[$n] = Ne(Ne({}, Ah[$n]), bj.kit);
Cc(Ah);
const Lj = lj, kE = "fa-layers-text", Fj = cj, $j = Ne({}, pj);
Cc($j);
const Bj = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Ap = uj, Wj = [...yj, ...Nj], Al = zo.FontAwesomeConfig || {};
function Uj(e) {
  var t = rn.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function jj(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
rn && typeof rn.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [n, r] = t;
  const o = jj(Uj(n));
  o != null && (Al[r] = o);
});
const NE = {
  styleDefault: "solid",
  familyDefault: $n,
  cssPrefix: OE,
  replacementClass: SE,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
};
Al.familyPrefix && (Al.cssPrefix = Al.familyPrefix);
const Ms = Ne(Ne({}, NE), Al);
Ms.autoReplaceSvg || (Ms.observeMutations = !1);
const Ge = {};
Object.keys(NE).forEach((e) => {
  Object.defineProperty(Ge, e, {
    enumerable: !0,
    set: function(t) {
      Ms[e] = t, Rl.forEach((n) => n(Ge));
    },
    get: function() {
      return Ms[e];
    }
  });
});
Object.defineProperty(Ge, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    Ms.cssPrefix = e, Rl.forEach((t) => t(Ge));
  },
  get: function() {
    return Ms.cssPrefix;
  }
});
zo.FontAwesomeConfig = Ge;
const Rl = [];
function zj(e) {
  return Rl.push(e), () => {
    Rl.splice(Rl.indexOf(e), 1);
  };
}
const Eo = Ph, ba = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function Hj(e) {
  if (!e || !so)
    return;
  const t = rn.createElement("style");
  t.setAttribute("type", "text/css"), t.innerHTML = e;
  const n = rn.head.childNodes;
  let r = null;
  for (let o = n.length - 1; o > -1; o--) {
    const s = n[o], u = (s.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(u) > -1 && (r = s);
  }
  return rn.head.insertBefore(t, r), e;
}
const Yj = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function lc() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += Yj[Math.random() * 62 | 0];
  return t;
}
function qs(e) {
  const t = [];
  for (let n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function Jm(e) {
  return e.classList ? qs(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function IE(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function qj(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(IE(e[n]), '" '), "").trim();
}
function Ud(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function eg(e) {
  return e.size !== ba.size || e.x !== ba.x || e.y !== ba.y || e.rotate !== ba.rotate || e.flipX || e.flipY;
}
function Vj(e) {
  let {
    transform: t,
    containerWidth: n,
    iconWidth: r
  } = e;
  const o = {
    transform: "translate(".concat(n / 2, " 256)")
  }, s = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), u = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), c = "rotate(".concat(t.rotate, " 0 0)"), d = {
    transform: "".concat(s, " ").concat(u, " ").concat(c)
  }, p = {
    transform: "translate(".concat(r / 2 * -1, " -256)")
  };
  return {
    outer: o,
    inner: d,
    path: p
  };
}
function Gj(e) {
  let {
    transform: t,
    width: n = Ph,
    height: r = Ph,
    startCentered: o = !1
  } = e, s = "";
  return o && _E ? s += "translate(".concat(t.x / Eo - n / 2, "em, ").concat(t.y / Eo - r / 2, "em) ") : o ? s += "translate(calc(-50% + ".concat(t.x / Eo, "em), calc(-50% + ").concat(t.y / Eo, "em)) ") : s += "translate(".concat(t.x / Eo, "em, ").concat(t.y / Eo, "em) "), s += "scale(".concat(t.size / Eo * (t.flipX ? -1 : 1), ", ").concat(t.size / Eo * (t.flipY ? -1 : 1), ") "), s += "rotate(".concat(t.rotate, "deg) "), s;
}
var Kj = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;
function AE() {
  const e = OE, t = SE, n = Ge.cssPrefix, r = Ge.replacementClass;
  let o = Kj;
  if (n !== e || r !== t) {
    const s = new RegExp("\\.".concat(e, "\\-"), "g"), u = new RegExp("\\--".concat(e, "\\-"), "g"), c = new RegExp("\\.".concat(t), "g");
    o = o.replace(s, ".".concat(n, "-")).replace(u, "--".concat(n, "-")).replace(c, ".".concat(r));
  }
  return o;
}
let R0 = !1;
function Rp() {
  Ge.autoAddCss && !R0 && (Hj(AE()), R0 = !0);
}
var Zj = {
  mixout() {
    return {
      dom: {
        css: AE,
        insertCss: Rp
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        Rp();
      },
      beforeI2svg() {
        Rp();
      }
    };
  }
};
const Ja = zo || {};
Ja[Qa] || (Ja[Qa] = {});
Ja[Qa].styles || (Ja[Qa].styles = {});
Ja[Qa].hooks || (Ja[Qa].hooks = {});
Ja[Qa].shims || (Ja[Qa].shims = []);
var _a = Ja[Qa];
const RE = [], ME = function() {
  rn.removeEventListener("DOMContentLoaded", ME), nd = 1, RE.map((e) => e());
};
let nd = !1;
so && (nd = (rn.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(rn.readyState), nd || rn.addEventListener("DOMContentLoaded", ME));
function Xj(e) {
  so && (nd ? setTimeout(e, 0) : RE.push(e));
}
function Oc(e) {
  const {
    tag: t,
    attributes: n = {},
    children: r = []
  } = e;
  return typeof e == "string" ? IE(e) : "<".concat(t, " ").concat(qj(n), ">").concat(r.map(Oc).join(""), "</").concat(t, ">");
}
function M0(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var Mp = function(t, n, r, o) {
  var s = Object.keys(t), u = s.length, c = n, d, p, h;
  for (r === void 0 ? (d = 1, h = t[s[0]]) : (d = 0, h = r); d < u; d++)
    p = s[d], h = c(h, t[p], p, t);
  return h;
};
function Qj(e) {
  const t = [];
  let n = 0;
  const r = e.length;
  for (; n < r; ) {
    const o = e.charCodeAt(n++);
    if (o >= 55296 && o <= 56319 && n < r) {
      const s = e.charCodeAt(n++);
      (s & 64512) == 56320 ? t.push(((o & 1023) << 10) + (s & 1023) + 65536) : (t.push(o), n--);
    } else
      t.push(o);
  }
  return t;
}
function Rh(e) {
  const t = Qj(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function Jj(e, t) {
  const n = e.length;
  let r = e.charCodeAt(t), o;
  return r >= 55296 && r <= 56319 && n > t + 1 && (o = e.charCodeAt(t + 1), o >= 56320 && o <= 57343) ? (r - 55296) * 1024 + o - 56320 + 65536 : r;
}
function D0(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return !!r.icon ? t[r.iconName] = r.icon : t[n] = r, t;
  }, {});
}
function Mh(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: r = !1
  } = n, o = D0(t);
  typeof _a.hooks.addPack == "function" && !r ? _a.hooks.addPack(e, D0(t)) : _a.styles[e] = Ne(Ne({}, _a.styles[e] || {}), o), e === "fas" && Mh("fa", t);
}
const {
  styles: cc,
  shims: ez
} = _a, DE = Object.keys(Qm), tz = DE.reduce((e, t) => (e[t] = Object.keys(Qm[t]), e), {});
let tg = null, LE = {}, FE = {}, $E = {}, BE = {}, WE = {};
function nz(e) {
  return ~Wj.indexOf(e);
}
function rz(e, t) {
  const n = t.split("-"), r = n[0], o = n.slice(1).join("-");
  return r === e && o !== "" && !nz(o) ? o : null;
}
const UE = () => {
  const e = (r) => Mp(cc, (o, s, u) => (o[u] = Mp(s, r, {}), o), {});
  LE = e((r, o, s) => (o[3] && (r[o[3]] = s), o[2] && o[2].filter((c) => typeof c == "number").forEach((c) => {
    r[c.toString(16)] = s;
  }), r)), FE = e((r, o, s) => (r[s] = s, o[2] && o[2].filter((c) => typeof c == "string").forEach((c) => {
    r[c] = s;
  }), r)), WE = e((r, o, s) => {
    const u = o[2];
    return r[s] = s, u.forEach((c) => {
      r[c] = s;
    }), r;
  });
  const t = "far" in cc || Ge.autoFetchSvg, n = Mp(ez, (r, o) => {
    const s = o[0];
    let u = o[1];
    const c = o[2];
    return u === "far" && !t && (u = "fas"), typeof s == "string" && (r.names[s] = {
      prefix: u,
      iconName: c
    }), typeof s == "number" && (r.unicodes[s.toString(16)] = {
      prefix: u,
      iconName: c
    }), r;
  }, {
    names: {},
    unicodes: {}
  });
  $E = n.names, BE = n.unicodes, tg = jd(Ge.styleDefault, {
    family: Ge.familyDefault
  });
};
zj((e) => {
  tg = jd(e.styleDefault, {
    family: Ge.familyDefault
  });
});
UE();
function ng(e, t) {
  return (LE[e] || {})[t];
}
function az(e, t) {
  return (FE[e] || {})[t];
}
function gi(e, t) {
  return (WE[e] || {})[t];
}
function jE(e) {
  return $E[e] || {
    prefix: null,
    iconName: null
  };
}
function oz(e) {
  const t = BE[e], n = ng("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function Ho() {
  return tg;
}
const zE = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function iz(e) {
  let t = $n;
  const n = DE.reduce((r, o) => (r[o] = "".concat(Ge.cssPrefix, "-").concat(o), r), {});
  return xE.forEach((r) => {
    (e.includes(n[r]) || e.some((o) => tz[r].includes(o))) && (t = r);
  }), t;
}
function jd(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = $n
  } = t, r = Dj[n][e];
  if (n === Wd && !e)
    return "fad";
  const o = A0[n][e] || A0[n][r], s = e in _a.styles ? e : null;
  return o || s || null;
}
function sz(e) {
  let t = [], n = null;
  return e.forEach((r) => {
    const o = rz(Ge.cssPrefix, r);
    o ? n = o : r && t.push(r);
  }), {
    iconName: n,
    rest: t
  };
}
function L0(e) {
  return e.sort().filter((t, n, r) => r.indexOf(t) === n);
}
function zd(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = t;
  let r = null;
  const o = Th.concat(xj), s = L0(e.filter((m) => o.includes(m))), u = L0(e.filter((m) => !Th.includes(m))), c = s.filter((m) => (r = m, !EE.includes(m))), [d = null] = c, p = iz(s), h = Ne(Ne({}, sz(u)), {}, {
    prefix: jd(d, {
      family: p
    })
  });
  return Ne(Ne(Ne({}, h), dz({
    values: e,
    family: p,
    styles: cc,
    config: Ge,
    canonical: h,
    givenPrefix: r
  })), lz(n, r, h));
}
function lz(e, t, n) {
  let {
    prefix: r,
    iconName: o
  } = n;
  if (e || !r || !o)
    return {
      prefix: r,
      iconName: o
    };
  const s = t === "fa" ? jE(o) : {}, u = gi(r, o);
  return o = s.iconName || u || o, r = s.prefix || r, r === "far" && !cc.far && cc.fas && !Ge.autoFetchSvg && (r = "fas"), {
    prefix: r,
    iconName: o
  };
}
const cz = xE.filter((e) => e !== $n || e !== Wd), uz = Object.keys(Sh).filter((e) => e !== $n).map((e) => Object.keys(Sh[e])).flat();
function dz(e) {
  const {
    values: t,
    family: n,
    canonical: r,
    givenPrefix: o = "",
    styles: s = {},
    config: u = {}
  } = e, c = n === Wd, d = t.includes("fa-duotone") || t.includes("fad"), p = u.familyDefault === "duotone", h = r.prefix === "fad" || r.prefix === "fa-duotone";
  if (!c && (d || p || h) && (r.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (r.prefix = "fab"), !r.prefix && cz.includes(n) && (Object.keys(s).find((v) => uz.includes(v)) || u.autoFetchSvg)) {
    const v = mj.get(n).defaultShortPrefixId;
    r.prefix = v, r.iconName = gi(r.prefix, r.iconName) || r.iconName;
  }
  return (r.prefix === "fa" || o === "fa") && (r.prefix = Ho() || "fas"), r;
}
class fz {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    const o = n.reduce(this._pullDefinitions, {});
    Object.keys(o).forEach((s) => {
      this.definitions[s] = Ne(Ne({}, this.definitions[s] || {}), o[s]), Mh(s, o[s]);
      const u = Qm[$n][s];
      u && Mh(u, o[s]), UE();
    });
  }
  reset() {
    this.definitions = {};
  }
  _pullDefinitions(t, n) {
    const r = n.prefix && n.iconName && n.icon ? {
      0: n
    } : n;
    return Object.keys(r).map((o) => {
      const {
        prefix: s,
        iconName: u,
        icon: c
      } = r[o], d = c[2];
      t[s] || (t[s] = {}), d.length > 0 && d.forEach((p) => {
        typeof p == "string" && (t[s][p] = c);
      }), t[s][u] = c;
    }), t;
  }
}
let F0 = [], ls = {};
const ms = {}, pz = Object.keys(ms);
function hz(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return F0 = e, ls = {}, Object.keys(ms).forEach((r) => {
    pz.indexOf(r) === -1 && delete ms[r];
  }), F0.forEach((r) => {
    const o = r.mixout ? r.mixout() : {};
    if (Object.keys(o).forEach((s) => {
      typeof o[s] == "function" && (n[s] = o[s]), typeof o[s] == "object" && Object.keys(o[s]).forEach((u) => {
        n[s] || (n[s] = {}), n[s][u] = o[s][u];
      });
    }), r.hooks) {
      const s = r.hooks();
      Object.keys(s).forEach((u) => {
        ls[u] || (ls[u] = []), ls[u].push(s[u]);
      });
    }
    r.provides && r.provides(ms);
  }), n;
}
function Dh(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
    r[o - 2] = arguments[o];
  return (ls[e] || []).forEach((u) => {
    t = u.apply(null, [t, ...r]);
  }), t;
}
function Ai(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  (ls[e] || []).forEach((s) => {
    s.apply(null, n);
  });
}
function Yo() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return ms[e] ? ms[e].apply(null, t) : void 0;
}
function Lh(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || Ho();
  if (t)
    return t = gi(n, t) || t, M0(HE.definitions, n, t) || M0(_a.styles, n, t);
}
const HE = new fz(), mz = () => {
  Ge.autoReplaceSvg = !1, Ge.observeMutations = !1, Ai("noAuto");
}, gz = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return so ? (Ai("beforeI2svg", e), Yo("pseudoElements2svg", e), Yo("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    Ge.autoReplaceSvg === !1 && (Ge.autoReplaceSvg = !0), Ge.observeMutations = !0, Xj(() => {
      yz({
        autoReplaceSvgRoot: t
      }), Ai("watch", e);
    });
  }
}, vz = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: gi(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = jd(e[0]);
      return {
        prefix: n,
        iconName: gi(n, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(Ge.cssPrefix, "-")) > -1 || e.match(Lj))) {
      const t = zd(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || Ho(),
        iconName: gi(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = Ho();
      return {
        prefix: t,
        iconName: gi(t, e) || e
      };
    }
  }
}, Cr = {
  noAuto: mz,
  config: Ge,
  dom: gz,
  parse: vz,
  library: HE,
  findIconDefinition: Lh,
  toHtml: Oc
}, yz = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = rn
  } = e;
  (Object.keys(_a.styles).length > 0 || Ge.autoFetchSvg) && so && Ge.autoReplaceSvg && Cr.dom.i2svg({
    node: t
  });
};
function Hd(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((n) => Oc(n));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!so) return;
      const n = rn.createElement("div");
      return n.innerHTML = e.html, n.children;
    }
  }), e;
}
function bz(e) {
  let {
    children: t,
    main: n,
    mask: r,
    attributes: o,
    styles: s,
    transform: u
  } = e;
  if (eg(u) && n.found && !r.found) {
    const {
      width: c,
      height: d
    } = n, p = {
      x: c / d / 2,
      y: 0.5
    };
    o.style = Ud(Ne(Ne({}, s), {}, {
      "transform-origin": "".concat(p.x + u.x / 16, "em ").concat(p.y + u.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: o,
    children: t
  }];
}
function _z(e) {
  let {
    prefix: t,
    iconName: n,
    children: r,
    attributes: o,
    symbol: s
  } = e;
  const u = s === !0 ? "".concat(t, "-").concat(Ge.cssPrefix, "-").concat(n) : s;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: Ne(Ne({}, o), {}, {
        id: u
      }),
      children: r
    }]
  }];
}
function rg(e) {
  const {
    icons: {
      main: t,
      mask: n
    },
    prefix: r,
    iconName: o,
    transform: s,
    symbol: u,
    title: c,
    maskId: d,
    titleId: p,
    extra: h,
    watchable: m = !1
  } = e, {
    width: v,
    height: y
  } = n.found ? n : t, b = _j.includes(r), _ = [Ge.replacementClass, o ? "".concat(Ge.cssPrefix, "-").concat(o) : ""].filter((O) => h.classes.indexOf(O) === -1).filter((O) => O !== "" || !!O).concat(h.classes).join(" ");
  let E = {
    children: [],
    attributes: Ne(Ne({}, h.attributes), {}, {
      "data-prefix": r,
      "data-icon": o,
      class: _,
      role: h.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(v, " ").concat(y)
    })
  };
  const A = b && !~h.classes.indexOf("fa-fw") ? {
    width: "".concat(v / y * 16 * 0.0625, "em")
  } : {};
  m && (E.attributes[Ii] = ""), c && (E.children.push({
    tag: "title",
    attributes: {
      id: E.attributes["aria-labelledby"] || "title-".concat(p || lc())
    },
    children: [c]
  }), delete E.attributes.title);
  const F = Ne(Ne({}, E), {}, {
    prefix: r,
    iconName: o,
    main: t,
    mask: n,
    maskId: d,
    transform: s,
    symbol: u,
    styles: Ne(Ne({}, A), h.styles)
  }), {
    children: x,
    attributes: I
  } = n.found && t.found ? Yo("generateAbstractMask", F) || {
    children: [],
    attributes: {}
  } : Yo("generateAbstractIcon", F) || {
    children: [],
    attributes: {}
  };
  return F.children = x, F.attributes = I, u ? _z(F) : bz(F);
}
function $0(e) {
  const {
    content: t,
    width: n,
    height: r,
    transform: o,
    title: s,
    extra: u,
    watchable: c = !1
  } = e, d = Ne(Ne(Ne({}, u.attributes), s ? {
    title: s
  } : {}), {}, {
    class: u.classes.join(" ")
  });
  c && (d[Ii] = "");
  const p = Ne({}, u.styles);
  eg(o) && (p.transform = Gj({
    transform: o,
    startCentered: !0,
    width: n,
    height: r
  }), p["-webkit-transform"] = p.transform);
  const h = Ud(p);
  h.length > 0 && (d.style = h);
  const m = [];
  return m.push({
    tag: "span",
    attributes: d,
    children: [t]
  }), s && m.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [s]
  }), m;
}
function wz(e) {
  const {
    content: t,
    title: n,
    extra: r
  } = e, o = Ne(Ne(Ne({}, r.attributes), n ? {
    title: n
  } : {}), {}, {
    class: r.classes.join(" ")
  }), s = Ud(r.styles);
  s.length > 0 && (o.style = s);
  const u = [];
  return u.push({
    tag: "span",
    attributes: o,
    children: [t]
  }), n && u.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [n]
  }), u;
}
const {
  styles: Dp
} = _a;
function Fh(e) {
  const t = e[0], n = e[1], [r] = e.slice(4);
  let o = null;
  return Array.isArray(r) ? o = {
    tag: "g",
    attributes: {
      class: "".concat(Ge.cssPrefix, "-").concat(Ap.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(Ge.cssPrefix, "-").concat(Ap.SECONDARY),
        fill: "currentColor",
        d: r[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(Ge.cssPrefix, "-").concat(Ap.PRIMARY),
        fill: "currentColor",
        d: r[1]
      }
    }]
  } : o = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: r
    }
  }, {
    found: !0,
    width: t,
    height: n,
    icon: o
  };
}
const Ez = {
  found: !1,
  width: 512,
  height: 512
};
function xz(e, t) {
  !TE && !Ge.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function $h(e, t) {
  let n = t;
  return t === "fa" && Ge.styleDefault !== null && (t = Ho()), new Promise((r, o) => {
    if (n === "fa") {
      const s = jE(e) || {};
      e = s.iconName || e, t = s.prefix || t;
    }
    if (e && t && Dp[t] && Dp[t][e]) {
      const s = Dp[t][e];
      return r(Fh(s));
    }
    xz(e, t), r(Ne(Ne({}, Ez), {}, {
      icon: Ge.showMissingIcons && e ? Yo("missingIconAbstract") || {} : {}
    }));
  });
}
const B0 = () => {
}, Bh = Ge.measurePerformance && xu && xu.mark && xu.measure ? xu : {
  mark: B0,
  measure: B0
}, Ol = 'FA "6.7.2"', Cz = (e) => (Bh.mark("".concat(Ol, " ").concat(e, " begins")), () => YE(e)), YE = (e) => {
  Bh.mark("".concat(Ol, " ").concat(e, " ends")), Bh.measure("".concat(Ol, " ").concat(e), "".concat(Ol, " ").concat(e, " begins"), "".concat(Ol, " ").concat(e, " ends"));
};
var ag = {
  begin: Cz,
  end: YE
};
const Lu = () => {
};
function W0(e) {
  return typeof (e.getAttribute ? e.getAttribute(Ii) : null) == "string";
}
function Oz(e) {
  const t = e.getAttribute ? e.getAttribute(Zm) : null, n = e.getAttribute ? e.getAttribute(Xm) : null;
  return t && n;
}
function Sz(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(Ge.replacementClass);
}
function Tz() {
  return Ge.autoReplaceSvg === !0 ? Fu.replace : Fu[Ge.autoReplaceSvg] || Fu.replace;
}
function Pz(e) {
  return rn.createElementNS("http://www.w3.org/2000/svg", e);
}
function kz(e) {
  return rn.createElement(e);
}
function qE(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? Pz : kz
  } = t;
  if (typeof e == "string")
    return rn.createTextNode(e);
  const r = n(e.tag);
  return Object.keys(e.attributes || []).forEach(function(s) {
    r.setAttribute(s, e.attributes[s]);
  }), (e.children || []).forEach(function(s) {
    r.appendChild(qE(s, {
      ceFn: n
    }));
  }), r;
}
function Nz(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const Fu = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((n) => {
        t.parentNode.insertBefore(qE(n), t);
      }), t.getAttribute(Ii) === null && Ge.keepOriginalSource) {
        let n = rn.createComment(Nz(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], n = e[1];
    if (~Jm(t).indexOf(Ge.replacementClass))
      return Fu.replace(e);
    const r = new RegExp("".concat(Ge.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const s = n[0].attributes.class.split(" ").reduce((u, c) => (c === Ge.replacementClass || c.match(r) ? u.toSvg.push(c) : u.toNode.push(c), u), {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = s.toSvg.join(" "), s.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", s.toNode.join(" "));
    }
    const o = n.map((s) => Oc(s)).join(`
`);
    t.setAttribute(Ii, ""), t.innerHTML = o;
  }
};
function U0(e) {
  e();
}
function VE(e, t) {
  const n = typeof t == "function" ? t : Lu;
  if (e.length === 0)
    n();
  else {
    let r = U0;
    Ge.mutateApproach === Rj && (r = zo.requestAnimationFrame || U0), r(() => {
      const o = Tz(), s = ag.begin("mutate");
      e.map(o), s(), n();
    });
  }
}
let og = !1;
function GE() {
  og = !0;
}
function Wh() {
  og = !1;
}
let rd = null;
function j0(e) {
  if (!P0 || !Ge.observeMutations)
    return;
  const {
    treeCallback: t = Lu,
    nodeCallback: n = Lu,
    pseudoElementsCallback: r = Lu,
    observeMutationsRoot: o = rn
  } = e;
  rd = new P0((s) => {
    if (og) return;
    const u = Ho();
    qs(s).forEach((c) => {
      if (c.type === "childList" && c.addedNodes.length > 0 && !W0(c.addedNodes[0]) && (Ge.searchPseudoElements && r(c.target), t(c.target)), c.type === "attributes" && c.target.parentNode && Ge.searchPseudoElements && r(c.target.parentNode), c.type === "attributes" && W0(c.target) && ~Bj.indexOf(c.attributeName))
        if (c.attributeName === "class" && Oz(c.target)) {
          const {
            prefix: d,
            iconName: p
          } = zd(Jm(c.target));
          c.target.setAttribute(Zm, d || u), p && c.target.setAttribute(Xm, p);
        } else Sz(c.target) && n(c.target);
    });
  }), so && rd.observe(o, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function Iz() {
  rd && rd.disconnect();
}
function Az(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce((r, o) => {
    const s = o.split(":"), u = s[0], c = s.slice(1);
    return u && c.length > 0 && (r[u] = c.join(":").trim()), r;
  }, {})), n;
}
function Rz(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "";
  let o = zd(Jm(e));
  return o.prefix || (o.prefix = Ho()), t && n && (o.prefix = t, o.iconName = n), o.iconName && o.prefix || (o.prefix && r.length > 0 && (o.iconName = az(o.prefix, e.innerText) || ng(o.prefix, Rh(e.innerText))), !o.iconName && Ge.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (o.iconName = e.firstChild.data)), o;
}
function Mz(e) {
  const t = qs(e.attributes).reduce((o, s) => (o.name !== "class" && o.name !== "style" && (o[s.name] = s.value), o), {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return Ge.autoA11y && (n ? t["aria-labelledby"] = "".concat(Ge.replacementClass, "-title-").concat(r || lc()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function Dz() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: ba,
    symbol: !1,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function z0(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: n,
    prefix: r,
    rest: o
  } = Rz(e), s = Mz(e), u = Dh("parseNodeAttributes", {}, e);
  let c = t.styleParser ? Az(e) : [];
  return Ne({
    iconName: n,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: r,
    transform: ba,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: o,
      styles: c,
      attributes: s
    }
  }, u);
}
const {
  styles: Lz
} = _a;
function KE(e) {
  const t = Ge.autoReplaceSvg === "nest" ? z0(e, {
    styleParser: !1
  }) : z0(e);
  return ~t.extra.classes.indexOf(kE) ? Yo("generateLayersText", e, t) : Yo("generateSvgReplacementMutation", e, t);
}
function Fz() {
  return [...vj, ...Th];
}
function H0(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!so) return Promise.resolve();
  const n = rn.documentElement.classList, r = (h) => n.add("".concat(I0, "-").concat(h)), o = (h) => n.remove("".concat(I0, "-").concat(h)), s = Ge.autoFetchSvg ? Fz() : EE.concat(Object.keys(Lz));
  s.includes("fa") || s.push("fa");
  const u = [".".concat(kE, ":not([").concat(Ii, "])")].concat(s.map((h) => ".".concat(h, ":not([").concat(Ii, "])"))).join(", ");
  if (u.length === 0)
    return Promise.resolve();
  let c = [];
  try {
    c = qs(e.querySelectorAll(u));
  } catch {
  }
  if (c.length > 0)
    r("pending"), o("complete");
  else
    return Promise.resolve();
  const d = ag.begin("onTree"), p = c.reduce((h, m) => {
    try {
      const v = KE(m);
      v && h.push(v);
    } catch (v) {
      TE || v.name === "MissingIcon" && console.error(v);
    }
    return h;
  }, []);
  return new Promise((h, m) => {
    Promise.all(p).then((v) => {
      VE(v, () => {
        r("active"), r("complete"), o("pending"), typeof t == "function" && t(), d(), h();
      });
    }).catch((v) => {
      d(), m(v);
    });
  });
}
function $z(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  KE(e).then((n) => {
    n && VE([n], t);
  });
}
function Bz(e) {
  return function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = (t || {}).icon ? t : Lh(t || {});
    let {
      mask: o
    } = n;
    return o && (o = (o || {}).icon ? o : Lh(o || {})), e(r, Ne(Ne({}, n), {}, {
      mask: o
    }));
  };
}
const Wz = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = ba,
    symbol: r = !1,
    mask: o = null,
    maskId: s = null,
    title: u = null,
    titleId: c = null,
    classes: d = [],
    attributes: p = {},
    styles: h = {}
  } = t;
  if (!e) return;
  const {
    prefix: m,
    iconName: v,
    icon: y
  } = e;
  return Hd(Ne({
    type: "icon"
  }, e), () => (Ai("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), Ge.autoA11y && (u ? p["aria-labelledby"] = "".concat(Ge.replacementClass, "-title-").concat(c || lc()) : (p["aria-hidden"] = "true", p.focusable = "false")), rg({
    icons: {
      main: Fh(y),
      mask: o ? Fh(o.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: m,
    iconName: v,
    transform: Ne(Ne({}, ba), n),
    symbol: r,
    title: u,
    maskId: s,
    titleId: c,
    extra: {
      attributes: p,
      styles: h,
      classes: d
    }
  })));
};
var Uz = {
  mixout() {
    return {
      icon: Bz(Wz)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = H0, e.nodeCallback = $z, e;
      }
    };
  },
  provides(e) {
    e.i2svg = function(t) {
      const {
        node: n = rn,
        callback: r = () => {
        }
      } = t;
      return H0(n, r);
    }, e.generateSvgReplacementMutation = function(t, n) {
      const {
        iconName: r,
        title: o,
        titleId: s,
        prefix: u,
        transform: c,
        symbol: d,
        mask: p,
        maskId: h,
        extra: m
      } = n;
      return new Promise((v, y) => {
        Promise.all([$h(r, u), p.iconName ? $h(p.iconName, p.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((b) => {
          let [_, E] = b;
          v([t, rg({
            icons: {
              main: _,
              mask: E
            },
            prefix: u,
            iconName: r,
            transform: c,
            symbol: d,
            maskId: h,
            title: o,
            titleId: s,
            extra: m,
            watchable: !0
          })]);
        }).catch(y);
      });
    }, e.generateAbstractIcon = function(t) {
      let {
        children: n,
        attributes: r,
        main: o,
        transform: s,
        styles: u
      } = t;
      const c = Ud(u);
      c.length > 0 && (r.style = c);
      let d;
      return eg(s) && (d = Yo("generateAbstractTransformGrouping", {
        main: o,
        transform: s,
        containerWidth: o.width,
        iconWidth: o.width
      })), n.push(d || o.icon), {
        children: n,
        attributes: r
      };
    };
  }
}, jz = {
  mixout() {
    return {
      layer(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: n = []
        } = t;
        return Hd({
          type: "layer"
        }, () => {
          Ai("beforeDOMElementCreation", {
            assembler: e,
            params: t
          });
          let r = [];
          return e((o) => {
            Array.isArray(o) ? o.map((s) => {
              r = r.concat(s.abstract);
            }) : r = r.concat(o.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(Ge.cssPrefix, "-layers"), ...n].join(" ")
            },
            children: r
          }];
        });
      }
    };
  }
}, zz = {
  mixout() {
    return {
      counter(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          title: n = null,
          classes: r = [],
          attributes: o = {},
          styles: s = {}
        } = t;
        return Hd({
          type: "counter",
          content: e
        }, () => (Ai("beforeDOMElementCreation", {
          content: e,
          params: t
        }), wz({
          content: e.toString(),
          title: n,
          extra: {
            attributes: o,
            styles: s,
            classes: ["".concat(Ge.cssPrefix, "-layers-counter"), ...r]
          }
        })));
      }
    };
  }
}, Hz = {
  mixout() {
    return {
      text(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: n = ba,
          title: r = null,
          classes: o = [],
          attributes: s = {},
          styles: u = {}
        } = t;
        return Hd({
          type: "text",
          content: e
        }, () => (Ai("beforeDOMElementCreation", {
          content: e,
          params: t
        }), $0({
          content: e,
          transform: Ne(Ne({}, ba), n),
          title: r,
          extra: {
            attributes: s,
            styles: u,
            classes: ["".concat(Ge.cssPrefix, "-layers-text"), ...o]
          }
        })));
      }
    };
  },
  provides(e) {
    e.generateLayersText = function(t, n) {
      const {
        title: r,
        transform: o,
        extra: s
      } = n;
      let u = null, c = null;
      if (_E) {
        const d = parseInt(getComputedStyle(t).fontSize, 10), p = t.getBoundingClientRect();
        u = p.width / d, c = p.height / d;
      }
      return Ge.autoA11y && !r && (s.attributes["aria-hidden"] = "true"), Promise.resolve([t, $0({
        content: t.innerHTML,
        width: u,
        height: c,
        transform: o,
        title: r,
        extra: s,
        watchable: !0
      })]);
    };
  }
};
const Yz = new RegExp('"', "ug"), Y0 = [1105920, 1112319], q0 = Ne(Ne(Ne(Ne({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), hj), Ij), Cj), Uh = Object.keys(q0).reduce((e, t) => (e[t.toLowerCase()] = q0[t], e), {}), qz = Object.keys(Uh).reduce((e, t) => {
  const n = Uh[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function Vz(e) {
  const t = e.replace(Yz, ""), n = Jj(t, 0), r = n >= Y0[0] && n <= Y0[1], o = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: Rh(o ? t[0] : t),
    isSecondary: r || o
  };
}
function Gz(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(t), o = isNaN(r) ? "normal" : r;
  return (Uh[n] || {})[o] || qz[n];
}
function V0(e, t) {
  const n = "".concat(Aj).concat(t.replace(":", "-"));
  return new Promise((r, o) => {
    if (e.getAttribute(n) !== null)
      return r();
    const u = qs(e.children).filter((v) => v.getAttribute(kh) === t)[0], c = zo.getComputedStyle(e, t), d = c.getPropertyValue("font-family"), p = d.match(Fj), h = c.getPropertyValue("font-weight"), m = c.getPropertyValue("content");
    if (u && !p)
      return e.removeChild(u), r();
    if (p && m !== "none" && m !== "") {
      const v = c.getPropertyValue("content");
      let y = Gz(d, h);
      const {
        value: b,
        isSecondary: _
      } = Vz(v), E = p[0].startsWith("FontAwesome");
      let A = ng(y, b), F = A;
      if (E) {
        const x = oz(b);
        x.iconName && x.prefix && (A = x.iconName, y = x.prefix);
      }
      if (A && !_ && (!u || u.getAttribute(Zm) !== y || u.getAttribute(Xm) !== F)) {
        e.setAttribute(n, F), u && e.removeChild(u);
        const x = Dz(), {
          extra: I
        } = x;
        I.attributes[kh] = t, $h(A, y).then((O) => {
          const S = rg(Ne(Ne({}, x), {}, {
            icons: {
              main: O,
              mask: zE()
            },
            prefix: y,
            iconName: F,
            extra: I,
            watchable: !0
          })), C = rn.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(C, e.firstChild) : e.appendChild(C), C.outerHTML = S.map((T) => Oc(T)).join(`
`), e.removeAttribute(n), r();
        }).catch(o);
      } else
        r();
    } else
      r();
  });
}
function Kz(e) {
  return Promise.all([V0(e, "::before"), V0(e, "::after")]);
}
function Zz(e) {
  return e.parentNode !== document.head && !~Mj.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(kh) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function G0(e) {
  if (so)
    return new Promise((t, n) => {
      const r = qs(e.querySelectorAll("*")).filter(Zz).map(Kz), o = ag.begin("searchPseudoElements");
      GE(), Promise.all(r).then(() => {
        o(), Wh(), t();
      }).catch(() => {
        o(), Wh(), n();
      });
    });
}
var Xz = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = G0, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: n = rn
      } = t;
      Ge.searchPseudoElements && G0(n);
    };
  }
};
let K0 = !1;
var Qz = {
  mixout() {
    return {
      dom: {
        unwatch() {
          GE(), K0 = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        j0(Dh("mutationObserverCallbacks", {}));
      },
      noAuto() {
        Iz();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        K0 ? Wh() : j0(Dh("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const Z0 = (e) => {
  let t = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return e.toLowerCase().split(" ").reduce((n, r) => {
    const o = r.toLowerCase().split("-"), s = o[0];
    let u = o.slice(1).join("-");
    if (s && u === "h")
      return n.flipX = !0, n;
    if (s && u === "v")
      return n.flipY = !0, n;
    if (u = parseFloat(u), isNaN(u))
      return n;
    switch (s) {
      case "grow":
        n.size = n.size + u;
        break;
      case "shrink":
        n.size = n.size - u;
        break;
      case "left":
        n.x = n.x - u;
        break;
      case "right":
        n.x = n.x + u;
        break;
      case "up":
        n.y = n.y - u;
        break;
      case "down":
        n.y = n.y + u;
        break;
      case "rotate":
        n.rotate = n.rotate + u;
        break;
    }
    return n;
  }, t);
};
var Jz = {
  mixout() {
    return {
      parse: {
        transform: (e) => Z0(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-transform");
        return n && (e.transform = Z0(n)), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractTransformGrouping = function(t) {
      let {
        main: n,
        transform: r,
        containerWidth: o,
        iconWidth: s
      } = t;
      const u = {
        transform: "translate(".concat(o / 2, " 256)")
      }, c = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "), d = "scale(".concat(r.size / 16 * (r.flipX ? -1 : 1), ", ").concat(r.size / 16 * (r.flipY ? -1 : 1), ") "), p = "rotate(".concat(r.rotate, " 0 0)"), h = {
        transform: "".concat(c, " ").concat(d, " ").concat(p)
      }, m = {
        transform: "translate(".concat(s / 2 * -1, " -256)")
      }, v = {
        outer: u,
        inner: h,
        path: m
      };
      return {
        tag: "g",
        attributes: Ne({}, v.outer),
        children: [{
          tag: "g",
          attributes: Ne({}, v.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: Ne(Ne({}, n.icon.attributes), v.path)
          }]
        }]
      };
    };
  }
};
const Lp = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function X0(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function e7(e) {
  return e.tag === "g" ? e.children : [e];
}
var t7 = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-mask"), r = n ? zd(n.split(" ").map((o) => o.trim())) : zE();
        return r.prefix || (r.prefix = Ho()), e.mask = r, e.maskId = t.getAttribute("data-fa-mask-id"), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractMask = function(t) {
      let {
        children: n,
        attributes: r,
        main: o,
        mask: s,
        maskId: u,
        transform: c
      } = t;
      const {
        width: d,
        icon: p
      } = o, {
        width: h,
        icon: m
      } = s, v = Vj({
        transform: c,
        containerWidth: h,
        iconWidth: d
      }), y = {
        tag: "rect",
        attributes: Ne(Ne({}, Lp), {}, {
          fill: "white"
        })
      }, b = p.children ? {
        children: p.children.map(X0)
      } : {}, _ = {
        tag: "g",
        attributes: Ne({}, v.inner),
        children: [X0(Ne({
          tag: p.tag,
          attributes: Ne(Ne({}, p.attributes), v.path)
        }, b))]
      }, E = {
        tag: "g",
        attributes: Ne({}, v.outer),
        children: [_]
      }, A = "mask-".concat(u || lc()), F = "clip-".concat(u || lc()), x = {
        tag: "mask",
        attributes: Ne(Ne({}, Lp), {}, {
          id: A,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [y, E]
      }, I = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: F
          },
          children: e7(m)
        }, x]
      };
      return n.push(I, {
        tag: "rect",
        attributes: Ne({
          fill: "currentColor",
          "clip-path": "url(#".concat(F, ")"),
          mask: "url(#".concat(A, ")")
        }, Lp)
      }), {
        children: n,
        attributes: r
      };
    };
  }
}, n7 = {
  provides(e) {
    let t = !1;
    zo.matchMedia && (t = zo.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      const n = [], r = {
        fill: "currentColor"
      }, o = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      n.push({
        tag: "path",
        attributes: Ne(Ne({}, r), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      const s = Ne(Ne({}, o), {}, {
        attributeName: "opacity"
      }), u = {
        tag: "circle",
        attributes: Ne(Ne({}, r), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return t || u.children.push({
        tag: "animate",
        attributes: Ne(Ne({}, o), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: Ne(Ne({}, s), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), n.push(u), n.push({
        tag: "path",
        attributes: Ne(Ne({}, r), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: t ? [] : [{
          tag: "animate",
          attributes: Ne(Ne({}, s), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), t || n.push({
        tag: "path",
        attributes: Ne(Ne({}, r), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: Ne(Ne({}, s), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: n
      };
    };
  }
}, r7 = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), r = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = r, e;
      }
    };
  }
}, a7 = [Zj, Uz, jz, zz, Hz, Xz, Qz, Jz, t7, n7, r7];
hz(a7, {
  mixoutsTo: Cr
});
Cr.noAuto;
Cr.config;
Cr.library;
Cr.dom;
const jh = Cr.parse;
Cr.findIconDefinition;
Cr.toHtml;
const o7 = Cr.icon;
Cr.layer;
Cr.text;
Cr.counter;
function zh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function i7(e) {
  if (Array.isArray(e)) return e;
}
function s7(e) {
  if (Array.isArray(e)) return zh(e);
}
function xo(e, t, n) {
  return (t = m7(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function l7(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function c7(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, s, u, c = [], d = !0, p = !1;
    try {
      if (s = (n = n.call(e)).next, t !== 0) for (; !(d = (r = s.call(n)).done) && (c.push(r.value), c.length !== t); d = !0) ;
    } catch (h) {
      p = !0, o = h;
    } finally {
      try {
        if (!d && n.return != null && (u = n.return(), Object(u) !== u)) return;
      } finally {
        if (p) throw o;
      }
    }
    return c;
  }
}
function u7() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function d7() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Q0(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ha(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Q0(Object(n), !0).forEach(function(r) {
      xo(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Q0(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function f7(e, t) {
  if (e == null) return {};
  var n, r, o = p7(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}
function p7(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function J0(e, t) {
  return i7(e) || c7(e, t) || ZE(e, t) || u7();
}
function Hh(e) {
  return s7(e) || l7(e) || ZE(e) || d7();
}
function h7(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function m7(e) {
  var t = h7(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function ad(e) {
  "@babel/helpers - typeof";
  return ad = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ad(e);
}
function ZE(e, t) {
  if (e) {
    if (typeof e == "string") return zh(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? zh(e, t) : void 0;
  }
}
var g7 = "7.0.0", Yh;
try {
  var v7 = require("@fortawesome/fontawesome-svg-core/package.json");
  Yh = v7.version;
} catch {
  Yh = typeof process < "u" && process.env.FA_VERSION || "7.0.0";
}
function y7(e) {
  var t = e.beat, n = e.fade, r = e.beatFade, o = e.bounce, s = e.shake, u = e.flash, c = e.spin, d = e.spinPulse, p = e.spinReverse, h = e.pulse, m = e.fixedWidth, v = e.inverse, y = e.border, b = e.listItem, _ = e.flip, E = e.size, A = e.rotation, F = e.pull, x = e.swapOpacity, I = e.rotateBy, O = e.widthAuto, S = b7(Yh, g7), C = xo(xo(xo(xo(xo(xo({
    "fa-beat": t,
    "fa-fade": n,
    "fa-beat-fade": r,
    "fa-bounce": o,
    "fa-shake": s,
    "fa-flash": u,
    "fa-spin": c,
    "fa-spin-reverse": p,
    "fa-spin-pulse": d,
    "fa-pulse": h,
    "fa-fw": m,
    "fa-inverse": v,
    "fa-border": y,
    "fa-li": b,
    "fa-flip": _ === !0,
    "fa-flip-horizontal": _ === "horizontal" || _ === "both",
    "fa-flip-vertical": _ === "vertical" || _ === "both"
  }, "fa-".concat(E), typeof E < "u" && E !== null), "fa-rotate-".concat(A), typeof A < "u" && A !== null && A !== 0), "fa-pull-".concat(F), typeof F < "u" && F !== null), "fa-swap-opacity", x), "fa-rotate-by", S && I), "fa-width-auto", S && O);
  return Object.keys(C).map(function(T) {
    return C[T] ? T : null;
  }).filter(function(T) {
    return T;
  });
}
function b7(e, t) {
  for (var n = e.split("-"), r = J0(n, 2), o = r[0], s = r[1], u = t.split("-"), c = J0(u, 2), d = c[0], p = c[1], h = o.split("."), m = d.split("."), v = 0; v < Math.max(h.length, m.length); v++) {
    var y = h[v] || "0", b = m[v] || "0", _ = parseInt(y, 10), E = parseInt(b, 10);
    if (_ !== E)
      return _ > E;
  }
  for (var A = 0; A < Math.max(h.length, m.length); A++) {
    var F = h[A] || "0", x = m[A] || "0";
    if (F !== x && F.length !== x.length)
      return F.length < x.length;
  }
  return !(s && !p);
}
function _7(e) {
  return e = e - 0, e === e;
}
function XE(e) {
  return _7(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var w7 = ["style"];
function E7(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function x7(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), o = XE(n.slice(0, r)), s = n.slice(r + 1).trim();
    return o.startsWith("webkit") ? t[E7(o)] = s : t[o] = s, t;
  }, {});
}
function QE(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var r = (t.children || []).map(function(d) {
    return QE(e, d);
  }), o = Object.keys(t.attributes || {}).reduce(function(d, p) {
    var h = t.attributes[p];
    switch (p) {
      case "class":
        d.attrs.className = h, delete t.attributes.class;
        break;
      case "style":
        d.attrs.style = x7(h);
        break;
      default:
        p.indexOf("aria-") === 0 || p.indexOf("data-") === 0 ? d.attrs[p.toLowerCase()] = h : d.attrs[XE(p)] = h;
    }
    return d;
  }, {
    attrs: {}
  }), s = n.style, u = s === void 0 ? {} : s, c = f7(n, w7);
  return o.attrs.style = ha(ha({}, o.attrs.style), u), e.apply(void 0, [t.tag, ha(ha({}, o.attrs), c)].concat(Hh(r)));
}
var JE = !1;
try {
  JE = process.env.NODE_ENV === "production";
} catch {
}
function C7() {
  if (!JE && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function e_(e) {
  if (e && ad(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (jh.icon)
    return jh.icon(e);
  if (e === null)
    return null;
  if (e && ad(e) === "object" && e.prefix && e.iconName)
    return e;
  if (Array.isArray(e) && e.length === 2)
    return {
      prefix: e[0],
      iconName: e[1]
    };
  if (typeof e == "string")
    return {
      prefix: "fas",
      iconName: e
    };
}
function Fp(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? xo({}, e, t) : {};
}
var t_ = {
  border: !1,
  className: "",
  mask: null,
  maskId: null,
  // the fixedWidth property has been deprecated as of version 7
  fixedWidth: !1,
  inverse: !1,
  flip: !1,
  icon: null,
  listItem: !1,
  pull: null,
  pulse: !1,
  rotation: null,
  rotateBy: !1,
  size: null,
  spin: !1,
  spinPulse: !1,
  spinReverse: !1,
  beat: !1,
  fade: !1,
  beatFade: !1,
  bounce: !1,
  shake: !1,
  symbol: !1,
  title: "",
  titleId: null,
  transform: null,
  swapOpacity: !1,
  widthAuto: !1
}, od = /* @__PURE__ */ J.forwardRef(function(e, t) {
  var n = ha(ha({}, t_), e), r = n.icon, o = n.mask, s = n.symbol, u = n.className, c = n.title, d = n.titleId, p = n.maskId, h = e_(r), m = Fp("classes", [].concat(Hh(y7(n)), Hh((u || "").split(" ")))), v = Fp("transform", typeof n.transform == "string" ? jh.transform(n.transform) : n.transform), y = Fp("mask", e_(o)), b = o7(h, ha(ha(ha(ha({}, m), v), y), {}, {
    symbol: s,
    title: c,
    titleId: d,
    maskId: p
  }));
  if (!b)
    return C7("Could not find icon", h), null;
  var _ = b.abstract, E = {
    ref: t
  };
  return Object.keys(n).forEach(function(A) {
    t_.hasOwnProperty(A) || (E[A] = n[A]);
  }), O7(_[0], E);
});
od.displayName = "FontAwesomeIcon";
od.propTypes = {
  beat: l.bool,
  border: l.bool,
  beatFade: l.bool,
  bounce: l.bool,
  className: l.string,
  fade: l.bool,
  flash: l.bool,
  mask: l.oneOfType([l.object, l.array, l.string]),
  maskId: l.string,
  // the fixedWidth property has been deprecated as of version 7
  fixedWidth: l.bool,
  inverse: l.bool,
  flip: l.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: l.oneOfType([l.object, l.array, l.string]),
  listItem: l.bool,
  pull: l.oneOf(["right", "left"]),
  pulse: l.bool,
  rotation: l.oneOf([0, 90, 180, 270]),
  rotateBy: l.bool,
  shake: l.bool,
  size: l.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: l.bool,
  spinPulse: l.bool,
  spinReverse: l.bool,
  symbol: l.oneOfType([l.bool, l.string]),
  title: l.string,
  titleId: l.string,
  transform: l.oneOfType([l.string, l.object]),
  swapOpacity: l.bool,
  widthAuto: l.bool
};
var O7 = QE.bind(null, J.createElement);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const S7 = {
  prefix: "fas",
  iconName: "rotate-left",
  icon: [512, 512, ["rotate-back", "rotate-backward", "undo-alt"], "f2ea", "M48.5 224L40 224c-13.3 0-24-10.7-24-24L16 72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8L48.5 224z"]
}, T7 = {
  prefix: "fas",
  iconName: "rotate-right",
  icon: [512, 512, ["redo-alt", "rotate-forward"], "f2f9", "M463.5 224l8.5 0c13.3 0 24-10.7 24-24l0-128c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8l119.5 0z"]
}, ex = "carousel", ig = "controller", P7 = "navigation", k7 = "no-scroll", sg = "portal", N7 = "root", tx = "toolbar", I7 = "download", qh = "fullscreen", n_ = "thumbnails", r_ = "zoom", $u = "loading", A7 = "playing", $p = "error", Bu = "complete", R7 = "placeholder", Yd = (e) => `active-slide-${e}`, M7 = Yd($u), D7 = Yd(A7), L7 = Yd(Bu), nx = "fullsize", qd = "flex_center", F7 = "no_scroll", rx = "no_scroll_padding", lg = "slide", cg = "slide_wrapper", $7 = "slide_wrapper_interactive", fi = "prev", pi = "next", a_ = "swipe", Ds = "close", ax = "onPointerDown", ox = "onPointerMove", ix = "onPointerUp", sx = "onPointerLeave", lx = "onPointerCancel", ug = "onKeyDown", B7 = "onKeyUp", dg = "onWheel", W7 = "Escape", U7 = "ArrowLeft", j7 = "ArrowRight", z7 = "button", Vh = "icon", cx = "contain", o_ = "cover", ux = "Unknown action type", dx = "yarl__";
function $r(...e) {
  return e.filter(Boolean).join(" ");
}
function vt(e) {
  return `${dx}${e}`;
}
function nr(e) {
  return `--${dx}${e}`;
}
function Sc(e, t) {
  return `${e}${t ? `_${t}` : ""}`;
}
function fg(e) {
  return (t) => Sc(e, t);
}
function Ls(e, t) {
  var n;
  return (n = e == null ? void 0 : e[t]) !== null && n !== void 0 ? n : t;
}
function H7(e, t, n) {
  return Ls(e, "{index} of {total}").replace(/\{index}/g, `${gg(n, t.length) + 1}`).replace(/\{total}/g, `${t.length}`);
}
function Vd(...e) {
  return () => {
    e.forEach((t) => {
      t();
    });
  };
}
function oa(e, t, n) {
  return () => {
    const r = L.useContext(n);
    if (!r)
      throw new Error(`${e} must be used within a ${t}.Provider`);
    return r;
  };
}
function pg() {
  return typeof window < "u";
}
function hg(e, t = 0) {
  const n = 10 ** t;
  return Math.round((e + Number.EPSILON) * n) / n;
}
function qo(e) {
  return e.type === void 0 || e.type === "image";
}
function mg(e, t) {
  return e.imageFit === o_ || e.imageFit !== cx && t === o_;
}
function Gd(e) {
  return typeof e == "string" ? Number.parseInt(e, 10) : e;
}
function id(e) {
  if (typeof e == "number")
    return { pixel: e };
  if (typeof e == "string") {
    const t = Gd(e);
    return e.endsWith("%") ? { percent: t } : { pixel: t };
  }
  return { pixel: 0 };
}
function Y7(e, t) {
  const n = id(t), r = n.percent !== void 0 ? e.width / 100 * n.percent : n.pixel;
  return {
    width: Math.max(e.width - 2 * r, 0),
    height: Math.max(e.height - 2 * r, 0)
  };
}
function q7() {
  return (pg() ? window == null ? void 0 : window.devicePixelRatio : void 0) || 1;
}
function gg(e, t) {
  return t > 0 ? (e % t + t) % t : 0;
}
function fx(e) {
  return e.length > 0;
}
function px(e, t) {
  return e[gg(t, e.length)];
}
function Gh(e, t) {
  return fx(e) ? px(e, t) : void 0;
}
function V7(e) {
  return qo(e) ? e.src : void 0;
}
function vg(e, t, n) {
  if (!n)
    return e;
  const { buttons: r, ...o } = e, s = r.findIndex((c) => c === t), u = L.isValidElement(n) ? L.cloneElement(n, { key: t }, null) : n;
  if (s >= 0) {
    const c = [...r];
    return c.splice(s, 1, u), { buttons: c, ...o };
  }
  return { buttons: [u, ...r], ...o };
}
function G7(e, t, n = 0) {
  return Math.min(e.preload, Math.max(e.finite ? t.length - 1 : Math.floor(t.length / 2), n));
}
const K7 = Number(L.version.split(".")[0]) >= 19;
function Z7(e) {
  return { inert: K7 ? e : e ? "" : void 0 };
}
function hx(e) {
  e.scrollTop;
}
const Kh = {
  open: !1,
  close: () => {
  },
  index: 0,
  slides: [],
  render: {},
  plugins: [],
  toolbar: { buttons: [Ds] },
  labels: {},
  animation: {
    fade: 250,
    swipe: 500,
    easing: {
      fade: "ease",
      swipe: "ease-out",
      navigation: "ease-in-out"
    }
  },
  carousel: {
    finite: !1,
    preload: 2,
    padding: "16px",
    spacing: "30%",
    imageFit: cx,
    imageProps: {}
  },
  controller: {
    ref: null,
    focus: !0,
    aria: !1,
    touchAction: "none",
    closeOnPullUp: !1,
    closeOnPullDown: !1,
    closeOnBackdropClick: !1,
    closeOnEscape: !0,
    preventDefaultWheelX: !0,
    preventDefaultWheelY: !1,
    disableSwipeNavigation: !1
  },
  portal: {},
  noScroll: {
    disabled: !1
  },
  on: {},
  styles: {},
  className: ""
};
function lo(e, t) {
  return { name: e, component: t };
}
function Tn(e, t) {
  return { module: e, children: t };
}
function mx(e, t, n) {
  return e.module.name === t ? n(e) : e.children ? [
    Tn(e.module, e.children.flatMap((r) => {
      var o;
      return (o = mx(r, t, n)) !== null && o !== void 0 ? o : [];
    }))
  ] : [e];
}
function ts(e, t, n) {
  return e.flatMap((r) => {
    var o;
    return (o = mx(r, t, n)) !== null && o !== void 0 ? o : [];
  });
}
function X7(e, t = [], n = []) {
  let r = e;
  const o = (y) => {
    const b = [...r];
    for (; b.length > 0; ) {
      const _ = b.pop();
      if ((_ == null ? void 0 : _.module.name) === y)
        return !0;
      _ != null && _.children && b.push(..._.children);
    }
    return !1;
  }, s = (y, b) => {
    if (y === "") {
      r = [Tn(b, r)];
      return;
    }
    r = ts(r, y, (_) => [Tn(b, [_])]);
  }, u = (y, b) => {
    r = ts(r, y, (_) => [Tn(_.module, [Tn(b, _.children)])]);
  }, c = (y, b, _) => {
    r = ts(r, y, (E) => {
      var A;
      return [
        Tn(E.module, [
          ..._ ? [Tn(b)] : [],
          ...(A = E.children) !== null && A !== void 0 ? A : [],
          ..._ ? [] : [Tn(b)]
        ])
      ];
    });
  }, d = (y, b, _) => {
    r = ts(r, y, (E) => [
      ..._ ? [Tn(b)] : [],
      E,
      ..._ ? [] : [Tn(b)]
    ]);
  }, p = (y) => {
    u(ig, y);
  }, h = (y, b) => {
    r = ts(r, y, (_) => [Tn(b, _.children)]);
  }, m = (y) => {
    r = ts(r, y, (b) => b.children);
  }, v = (y) => {
    n.push(y);
  };
  return t.forEach((y) => {
    y({
      contains: o,
      addParent: s,
      append: u,
      addChild: c,
      addSibling: d,
      addModule: p,
      replace: h,
      remove: m,
      augment: v
    });
  }), {
    config: r,
    augmentation: (y) => n.reduce((b, _) => _(b), y)
  };
}
const gx = L.createContext(null), vx = oa("useA11yContext", "A11yContext", gx);
function Q7({ children: e }) {
  const [t, n] = L.useState(!1), [r, o] = L.useState(!1), s = L.useMemo(() => ({ focusWithin: t, trackFocusWithin: (c, d) => {
    const p = (h) => (m) => {
      var v;
      m.currentTarget.contains(m.relatedTarget) || n(h), (v = h ? c : d) === null || v === void 0 || v(m);
    };
    return {
      onFocus: p(!0),
      onBlur: p(!1)
    };
  }, autoPlaying: r, setAutoPlaying: o }), [t, r]);
  return L.createElement(gx.Provider, { value: s }, e);
}
const yx = L.createContext(null), Vs = oa("useDocument", "DocumentContext", yx);
function J7({ nodeRef: e, children: t }) {
  const n = L.useMemo(() => {
    const r = (s) => {
      var u;
      return ((u = s || e.current) === null || u === void 0 ? void 0 : u.ownerDocument) || document;
    };
    return { getOwnerDocument: r, getOwnerWindow: (s) => {
      var u;
      return ((u = r(s)) === null || u === void 0 ? void 0 : u.defaultView) || window;
    } };
  }, [e]);
  return L.createElement(yx.Provider, { value: n }, t);
}
const bx = L.createContext(null), Tc = oa("useEvents", "EventsContext", bx);
function eH({ children: e }) {
  const [t] = L.useState({});
  L.useEffect(() => () => {
    Object.keys(t).forEach((r) => delete t[r]);
  }, [t]);
  const n = L.useMemo(() => {
    const r = (u, c) => {
      var d;
      (d = t[u]) === null || d === void 0 || d.splice(0, t[u].length, ...t[u].filter((p) => p !== c));
    };
    return { publish: (...[u, c]) => {
      var d;
      (d = t[u]) === null || d === void 0 || d.forEach((p) => p(c));
    }, subscribe: (u, c) => (t[u] || (t[u] = []), t[u].push(c), () => r(u, c)), unsubscribe: r };
  }, [t]);
  return L.createElement(bx.Provider, { value: n }, e);
}
const _x = L.createContext(null), Bn = oa("useLightboxProps", "LightboxPropsContext", _x);
function tH({ children: e, ...t }) {
  return L.createElement(_x.Provider, { value: t }, e);
}
const wx = L.createContext(null), co = oa("useLightboxState", "LightboxStateContext", wx), Ex = L.createContext(null), nH = oa("useLightboxDispatch", "LightboxDispatchContext", Ex);
function rH(e, t) {
  switch (t.type) {
    case "swipe": {
      const { slides: n } = e, r = (t == null ? void 0 : t.increment) || 0, o = e.globalIndex + r, s = gg(o, n.length), u = Gh(n, s), c = r || t.duration !== void 0 ? {
        increment: r,
        duration: t.duration,
        easing: t.easing
      } : void 0;
      return { slides: n, currentIndex: s, globalIndex: o, currentSlide: u, animation: c };
    }
    case "update":
      return t.slides !== e.slides || t.index !== e.currentIndex ? {
        slides: t.slides,
        currentIndex: t.index,
        globalIndex: t.index,
        currentSlide: Gh(t.slides, t.index)
      } : e;
    default:
      throw new Error(ux);
  }
}
function aH({ slides: e, index: t, children: n }) {
  const [r, o] = L.useReducer(rH, {
    slides: e,
    currentIndex: t,
    globalIndex: t,
    currentSlide: Gh(e, t)
  }), [s, u] = L.useState(e), [c, d] = L.useState(t);
  (e !== s || t !== c) && (u(e), d(t), o({ type: "update", slides: e, index: t }));
  const p = L.useMemo(() => ({ ...r, state: r, dispatch: o }), [r, o]);
  return L.createElement(
    Ex.Provider,
    { value: o },
    L.createElement(wx.Provider, { value: p }, n)
  );
}
const xx = L.createContext(null), oH = oa("useRTLContext", "RTLContext", xx);
function iH({ isRTL: e, children: t }) {
  const n = L.useMemo(() => ({ isRTL: e }), [e]);
  return L.createElement(xx.Provider, { value: n }, t);
}
const Cx = L.createContext(null), Kd = oa("useTimeouts", "TimeoutsContext", Cx);
function sH({ children: e }) {
  const [t] = L.useState([]);
  L.useEffect(() => () => {
    t.forEach((r) => window.clearTimeout(r)), t.splice(0, t.length);
  }, [t]);
  const n = L.useMemo(() => {
    const r = (u) => {
      t.splice(0, t.length, ...t.filter((c) => c !== u));
    };
    return { setTimeout: (u, c) => {
      const d = window.setTimeout(() => {
        r(d), u();
      }, c);
      return t.push(d), d;
    }, clearTimeout: (u) => {
      u !== void 0 && (r(u), window.clearTimeout(u));
    } };
  }, [t]);
  return L.createElement(Cx.Provider, { value: n }, e);
}
const Pc = L.forwardRef(function({ label: t, className: n, icon: r, renderIcon: o, onClick: s, style: u, ...c }, d) {
  const { styles: p, labels: h } = Bn(), m = Ls(h, t);
  return L.createElement("button", { ref: d, type: "button", title: m, "aria-label": m, className: $r(vt(z7), n), onClick: s, style: { ...u, ...p.button }, ...c }, o ? o() : L.createElement(r, { className: vt(Vh), style: p.icon }));
});
function lH(e, t) {
  const n = (r) => L.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", "aria-hidden": "true", focusable: "false", ...r }, t);
  return n.displayName = e, n;
}
function ka(e, t) {
  return lH(e, L.createElement(
    "g",
    { fill: "currentColor" },
    L.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
    t
  ));
}
const cH = ka("Close", L.createElement("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })), uH = ka("Previous", L.createElement("path", { d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" })), dH = ka("Next", L.createElement("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" })), fH = ka("Loading", L.createElement(L.Fragment, null, Array.from({ length: 8 }).map((e, t, n) => L.createElement("line", { key: t, x1: "12", y1: "6.5", x2: "12", y2: "1.8", strokeLinecap: "round", strokeWidth: "2.6", stroke: "currentColor", strokeOpacity: 1 / n.length * (t + 1), transform: `rotate(${360 / n.length * t}, 12, 12)` })))), pH = ka("Error", L.createElement("path", { d: "M21.9,21.9l-8.49-8.49l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31L21.9,21.9z M5,18 l3.5-4.5l2.5,3.01L12.17,15l3,3H5z M21,18.17L5.83,3H19c1.1,0,2,0.9,2,2V18.17z" })), na = pg() ? L.useLayoutEffect : L.useEffect;
function yg() {
  const [e, t] = L.useState(!1);
  return L.useEffect(() => {
    var n, r;
    const o = (n = window.matchMedia) === null || n === void 0 ? void 0 : n.call(window, "(prefers-reduced-motion: reduce)");
    t(o == null ? void 0 : o.matches);
    const s = (u) => t(u.matches);
    return (r = o == null ? void 0 : o.addEventListener) === null || r === void 0 || r.call(o, "change", s), () => {
      var u;
      return (u = o == null ? void 0 : o.removeEventListener) === null || u === void 0 ? void 0 : u.call(o, "change", s);
    };
  }, []), e;
}
function hH(e) {
  let t = 0, n = 0, r = 0;
  const s = window.getComputedStyle(e).transform.match(/matrix.*\((.+)\)/);
  if (s) {
    const u = s[1].split(",").map(Gd);
    u.length === 6 ? (t = u[4], n = u[5]) : u.length === 16 && (t = u[12], n = u[13], r = u[14]);
  }
  return { x: t, y: n, z: r };
}
function i_(e, t) {
  const n = L.useRef(void 0), r = L.useRef(void 0), o = yg();
  return na(() => {
    var s, u, c;
    if (e.current && n.current !== void 0 && !o) {
      const { keyframes: d, duration: p, easing: h, onfinish: m } = t(n.current, e.current.getBoundingClientRect(), hH(e.current)) || {};
      if (d && p) {
        (s = r.current) === null || s === void 0 || s.cancel(), r.current = void 0;
        try {
          r.current = (c = (u = e.current).animate) === null || c === void 0 ? void 0 : c.call(u, d, { duration: p, easing: h });
        } catch (v) {
          console.error(v);
        }
        r.current && (r.current.onfinish = () => {
          r.current = void 0, m == null || m();
        });
      }
    }
    n.current = void 0;
  }), {
    prepareAnimation: (s) => {
      n.current = s;
    },
    isAnimationPlaying: () => {
      var s;
      return ((s = r.current) === null || s === void 0 ? void 0 : s.playState) === "running";
    }
  };
}
function bg() {
  const e = L.useRef(null), t = L.useRef(void 0), [n, r] = L.useState();
  return { setContainerRef: L.useCallback((s) => {
    e.current = s, t.current && (t.current.disconnect(), t.current = void 0);
    const u = () => {
      if (s) {
        const c = window.getComputedStyle(s), d = (p) => parseFloat(p) || 0;
        r({
          width: Math.round(s.clientWidth - d(c.paddingLeft) - d(c.paddingRight)),
          height: Math.round(s.clientHeight - d(c.paddingTop) - d(c.paddingBottom))
        });
      } else
        r(void 0);
    };
    u(), s && typeof ResizeObserver < "u" && (t.current = new ResizeObserver(u), t.current.observe(s));
  }, []), containerRef: e, containerRect: n };
}
function Wu() {
  const e = L.useRef(void 0), { setTimeout: t, clearTimeout: n } = Kd();
  return L.useCallback((r, o) => {
    n(e.current), e.current = t(r, o > 0 ? o : 0);
  }, [t, n]);
}
function Pt(e) {
  const t = L.useRef(e);
  return na(() => {
    t.current = e;
  }), L.useCallback((...n) => {
    var r;
    return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
  }, []);
}
function s_(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function Zh(e, t) {
  return L.useMemo(() => e == null && t == null ? null : (n) => {
    s_(e, n), s_(t, n);
  }, [e, t]);
}
function mH(e, t = !1) {
  const n = L.useRef(!1);
  na(() => {
    t && n.current && (n.current = !1, e());
  }, [t, e]);
  const r = L.useCallback(() => {
    n.current = !0;
  }, []), o = L.useCallback(() => {
    n.current = !1;
  }, []);
  return { onFocus: r, onBlur: o };
}
function _g() {
  return oH().isRTL;
}
function gH() {
  const [e] = L.useState({}), t = L.useCallback((o, s) => {
    var u;
    (u = e[o]) === null || u === void 0 || u.forEach((c) => {
      s.isPropagationStopped() || c(s);
    });
  }, [e]), n = L.useMemo(() => ({
    onPointerDown: (o) => t(ax, o),
    onPointerMove: (o) => t(ox, o),
    onPointerUp: (o) => t(ix, o),
    onPointerLeave: (o) => t(sx, o),
    onPointerCancel: (o) => t(lx, o),
    onKeyDown: (o) => t(ug, o),
    onKeyUp: (o) => t(B7, o),
    onWheel: (o) => t(dg, o)
  }), [t]), r = L.useCallback((o, s) => (e[o] || (e[o] = []), e[o].unshift(s), () => {
    const u = e[o];
    u && u.splice(0, u.length, ...u.filter((c) => c !== s));
  }), [e]);
  return { registerSensors: n, subscribeSensors: r };
}
function l_(e, t) {
  const n = L.useRef(0), r = Wu(), o = Pt((...s) => {
    n.current = Date.now(), e(...s);
  });
  return L.useCallback((...s) => {
    r(() => {
      o(...s);
    }, t - (Date.now() - n.current));
  }, [t, o, r]);
}
const Bp = fg("slide"), Wp = fg("slide_image");
function sd({ slide: e, offset: t, render: n, rect: r, imageFit: o, imageProps: s, onClick: u, onLoad: c, onError: d, style: p }) {
  var h, m, v, y, b, _, E, A;
  const [F, x] = L.useState($u), { publish: I } = Tc(), { setTimeout: O } = Kd(), S = L.useRef(null);
  L.useEffect(() => {
    t === 0 && I(Yd(F));
  }, [t, F, I]);
  const C = Pt((se) => {
    ("decode" in se ? se.decode() : Promise.resolve()).catch(() => {
    }).then(() => {
      se.parentNode && (x(Bu), O(() => {
        c == null || c(se);
      }, 0));
    });
  }), T = L.useCallback((se) => {
    S.current = se, se != null && se.complete && C(se);
  }, [C]), N = L.useCallback((se) => {
    C(se.currentTarget);
  }, [C]), B = Pt(() => {
    x($p), d == null || d();
  }), H = mg(e, o), ne = (se, Ee) => Number.isFinite(se) ? se : Ee, z = ne(Math.max(...((m = (h = e.srcSet) === null || h === void 0 ? void 0 : h.map((se) => se.width)) !== null && m !== void 0 ? m : []).concat(e.width ? [e.width] : []).filter(Boolean)), ((v = S.current) === null || v === void 0 ? void 0 : v.naturalWidth) || 0), re = ne(Math.max(...((b = (y = e.srcSet) === null || y === void 0 ? void 0 : y.map((se) => se.height)) !== null && b !== void 0 ? b : []).concat(e.height ? [e.height] : []).filter(Boolean)), ((_ = S.current) === null || _ === void 0 ? void 0 : _.naturalHeight) || 0), he = z && re ? {
    maxWidth: `min(${z}px, 100%)`,
    maxHeight: `min(${re}px, 100%)`
  } : {
    maxWidth: "100%",
    maxHeight: "100%"
  }, ve = (E = e.srcSet) === null || E === void 0 ? void 0 : E.slice().sort((se, Ee) => se.width - Ee.width).map((se) => `${se.src} ${se.width}w`).join(", "), Te = () => r && !H && e.width && e.height ? r.height / e.height * e.width : Number.MAX_VALUE, de = ve && r && pg() ? `${Math.round(Math.min(Te(), r.width))}px` : void 0, { style: ye, className: ee, ...oe } = (typeof s == "function" ? s(e) : s) || {};
  return L.createElement(
    L.Fragment,
    null,
    L.createElement("img", { ref: T, onLoad: N, onError: B, onClick: u, draggable: !1, className: $r(vt(Wp()), H && vt(Wp("cover")), F !== Bu && vt(Wp("loading")), ee), style: { ...he, ...p, ...ye }, ...oe, alt: (A = e.alt) !== null && A !== void 0 ? A : "", sizes: de, srcSet: ve, src: e.src }),
    F !== Bu && L.createElement(
      "div",
      { className: vt(Bp(R7)) },
      F === $u && (n != null && n.iconLoading ? n.iconLoading() : L.createElement(fH, { className: $r(vt(Vh), vt(Bp($u))) })),
      F === $p && (n != null && n.iconError ? n.iconError() : L.createElement(pH, { className: $r(vt(Vh), vt(Bp($p))) }))
    )
  );
}
const vH = L.forwardRef(function({ className: t, children: n, onFocus: r, onBlur: o, ...s }, u) {
  const c = L.useRef(null), [d, p] = L.useState(!1), { trackFocusWithin: h } = vx(), m = Pt(() => {
    if (c.current) {
      const v = window.getComputedStyle(c.current).direction === "rtl";
      v !== d && p(v);
    }
  });
  return L.useEffect(m), L.createElement(
    J7,
    { nodeRef: c },
    L.createElement(
      iH,
      { isRTL: d },
      L.createElement("div", { ref: Zh(u, c), className: $r(vt("root"), t), ...h(r, o), ...s }, n)
    )
  );
});
var Dn;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.SWIPE = 1] = "SWIPE", e[e.PULL = 2] = "PULL", e[e.ANIMATION = 3] = "ANIMATION";
})(Dn || (Dn = {}));
function Ox(e, t, n, r, o) {
  L.useEffect(() => o ? () => {
  } : Vd(e(ax, t), e(ox, n), e(ix, r), e(sx, r), e(lx, r)), [e, t, n, r, o]);
}
var Zr;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.SWIPE = 1] = "SWIPE", e[e.PULL = 2] = "PULL";
})(Zr || (Zr = {}));
const Up = 30;
function yH({ disableSwipeNavigation: e, closeOnBackdropClick: t }, n, r, o, s, u, c, d, p, h, m, v, y, b, _, E) {
  const A = L.useRef(0), F = L.useRef([]), x = L.useRef(void 0), I = L.useRef(0), O = L.useRef(Zr.NONE), S = L.useCallback((z) => {
    x.current === z.pointerId && (x.current = void 0, O.current = Zr.NONE);
    const re = F.current;
    re.splice(0, re.length, ...re.filter((he) => he.pointerId !== z.pointerId));
  }, []), C = L.useCallback((z) => {
    S(z), z.persist(), F.current.push(z);
  }, [S]), T = L.useCallback((z) => F.current.find(({ pointerId: re }) => z.pointerId === re), []), N = Pt((z) => {
    C(z);
  }), B = (z, re) => m && z > re || h && z < -re, H = Pt((z) => {
    const re = T(z);
    if (re)
      if (x.current === z.pointerId) {
        const he = Date.now() - I.current, ve = A.current;
        O.current === Zr.SWIPE ? Math.abs(ve) > 0.3 * o || Math.abs(ve) > 5 && he < s ? d(ve, he) : p(ve) : O.current === Zr.PULL && (B(ve, 2 * Up) ? b(ve, he) : _(ve)), A.current = 0, O.current = Zr.NONE;
      } else {
        const { target: he } = z;
        t && he instanceof HTMLElement && he === re.target && (he.classList.contains(vt(lg)) || he.classList.contains(vt(cg))) && E();
      }
    S(z);
  }), ne = Pt((z) => {
    const re = T(z);
    if (re) {
      const he = x.current === z.pointerId;
      if (z.buttons === 0) {
        he && A.current !== 0 ? H(z) : S(re);
        return;
      }
      const ve = z.clientX - re.clientX, Te = z.clientY - re.clientY;
      if (x.current === void 0) {
        const de = (ye) => {
          C(z), x.current = z.pointerId, I.current = Date.now(), O.current = ye;
        };
        Math.abs(ve) > Math.abs(Te) && Math.abs(ve) > Up && r(ve) ? e || (de(Zr.SWIPE), u()) : Math.abs(Te) > Math.abs(ve) && B(Te, Up) && (de(Zr.PULL), v());
      } else he && (O.current === Zr.SWIPE ? (A.current = ve, c(ve)) : O.current === Zr.PULL && (A.current = Te, y(Te)));
    }
  });
  Ox(n, N, ne, H);
}
function bH({ preventDefaultWheelX: e, preventDefaultWheelY: t }) {
  const n = L.useRef(null), r = Pt((o) => {
    const s = Math.abs(o.deltaX) > Math.abs(o.deltaY);
    (s && e || !s && t || o.ctrlKey) && o.preventDefault();
  });
  return L.useCallback((o) => {
    var s;
    o ? o.addEventListener("wheel", r, { passive: !1 }) : (s = n.current) === null || s === void 0 || s.removeEventListener("wheel", r), n.current = o;
  }, [r]);
}
function _H(e, t, n, r, o, s, u, c, d) {
  const p = L.useRef(0), h = L.useRef(0), m = L.useRef(void 0), v = L.useRef(void 0), y = L.useRef(0), b = L.useRef(void 0), _ = L.useRef(0), { setTimeout: E, clearTimeout: A } = Kd(), F = L.useCallback(() => {
    m.current && (A(m.current), m.current = void 0);
  }, [A]), x = L.useCallback(() => {
    v.current && (A(v.current), v.current = void 0);
  }, [A]), I = Pt(() => {
    e !== Dn.SWIPE && (p.current = 0, _.current = 0, F(), x());
  });
  L.useEffect(I, [e, I]);
  const O = Pt((C) => {
    v.current = void 0, p.current === C && d(p.current);
  }), S = Pt((C) => {
    if (C.ctrlKey || Math.abs(C.deltaY) > Math.abs(C.deltaX))
      return;
    const T = (N) => {
      y.current = N, A(b.current), b.current = N > 0 ? E(() => {
        y.current = 0, b.current = void 0;
      }, 300) : void 0;
    };
    if (e === Dn.NONE) {
      if (Math.abs(C.deltaX) <= 1.2 * Math.abs(y.current)) {
        T(C.deltaX);
        return;
      }
      if (!n(-C.deltaX))
        return;
      if (h.current += C.deltaX, F(), Math.abs(h.current) > 30)
        h.current = 0, T(0), _.current = Date.now(), s();
      else {
        const N = h.current;
        m.current = E(() => {
          m.current = void 0, N === h.current && (h.current = 0);
        }, o);
      }
    } else if (e === Dn.SWIPE) {
      let N = p.current - C.deltaX;
      if (N = Math.min(Math.abs(N), r) * Math.sign(N), p.current = N, u(N), x(), Math.abs(N) > 0.2 * r) {
        T(C.deltaX), c(N, Date.now() - _.current);
        return;
      }
      v.current = E(() => O(N), 2 * o);
    } else
      T(C.deltaX);
  });
  L.useEffect(() => t(dg, S), [t, S]);
}
const c_ = fg("container"), Sx = L.createContext(null), uo = oa("useController", "ControllerContext", Sx);
function wH({ children: e, ...t }) {
  var n;
  const { carousel: r, animation: o, controller: s, on: u, styles: c, render: d } = t, { closeOnPullUp: p, closeOnPullDown: h, preventDefaultWheelX: m, preventDefaultWheelY: v } = s, [y, b] = L.useState(), _ = co(), E = nH(), [A, F] = L.useState(Dn.NONE), x = L.useRef(0), I = L.useRef(0), O = L.useRef(1), { registerSensors: S, subscribeSensors: C } = gH(), { subscribe: T, publish: N } = Tc(), B = Wu(), H = Wu(), ne = Wu(), { containerRef: z, setContainerRef: re, containerRect: he } = bg(), ve = Zh(bH({ preventDefaultWheelX: m, preventDefaultWheelY: v }), re), Te = L.useRef(null), de = Zh(Te, void 0), { getOwnerDocument: ye } = Vs(), ee = _g(), oe = (ae) => (ee ? -1 : 1) * (typeof ae == "number" ? ae : 1), se = Pt(() => {
    var ae;
    return (ae = z.current) === null || ae === void 0 ? void 0 : ae.focus();
  }), Ee = Pt(() => t), Pe = Pt(() => _), Se = L.useCallback((ae) => N(fi, ae), [N]), ge = L.useCallback((ae) => N(pi, ae), [N]), ke = L.useCallback(() => N(Ds), [N]), De = (ae) => !(r.finite && (oe(ae) > 0 && _.currentIndex === 0 || oe(ae) < 0 && _.currentIndex === _.slides.length - 1)), U = (ae) => {
    var Ce;
    x.current = ae, (Ce = z.current) === null || Ce === void 0 || Ce.style.setProperty(nr("swipe_offset"), `${Math.round(ae)}px`);
  }, j = (ae) => {
    var Ce, Fe;
    I.current = ae, O.current = (() => {
      const Ve = h && ae > 0 ? ae : p && ae < 0 ? -ae : 0;
      return Math.min(Math.max(hg(1 - Ve / 60 * (1 - 0.5), 2), 0.5), 1);
    })(), (Ce = z.current) === null || Ce === void 0 || Ce.style.setProperty(nr("pull_offset"), `${Math.round(ae)}px`), (Fe = z.current) === null || Fe === void 0 || Fe.style.setProperty(nr("pull_opacity"), `${O.current}`);
  }, { prepareAnimation: $ } = i_(Te, (ae, Ce, Fe) => {
    if (Te.current && he)
      return {
        keyframes: [
          {
            transform: `translate(0, ${ae.rect.y - Ce.y + Fe.y}px)`,
            opacity: ae.opacity
          },
          { transform: "translate(0, 0)", opacity: 1 }
        ],
        duration: ae.duration,
        easing: o.easing.fade
      };
  }), D = (ae, Ce) => {
    if (p || h) {
      j(ae);
      let Fe = 0;
      Te.current && (Fe = o.fade * (Ce ? 2 : 1), $({
        rect: Te.current.getBoundingClientRect(),
        opacity: O.current,
        duration: Fe
      })), ne(() => {
        j(0), F(Dn.NONE);
      }, Fe), F(Dn.ANIMATION), Ce || ke();
    }
  }, { prepareAnimation: G, isAnimationPlaying: K } = i_(Te, (ae, Ce, Fe) => {
    var $e;
    if (Te.current && he && (!(($e = _.animation) === null || $e === void 0) && $e.duration)) {
      const st = id(r.spacing), Ve = (st.percent ? st.percent * he.width / 100 : st.pixel) || 0;
      return {
        keyframes: [
          {
            transform: `translate(${oe(_.globalIndex - ae.index) * (he.width + Ve) + ae.rect.x - Ce.x + Fe.x}px, 0)`
          },
          { transform: "translate(0, 0)" }
        ],
        duration: _.animation.duration,
        easing: _.animation.easing
      };
    }
  }), le = Pt((ae) => {
    var Ce, Fe;
    const $e = ae.offset || 0, st = $e ? o.swipe : (Ce = o.navigation) !== null && Ce !== void 0 ? Ce : o.swipe, Ve = !$e && !K() ? o.easing.navigation : o.easing.swipe;
    let { direction: xt } = ae;
    const rt = (Fe = ae.count) !== null && Fe !== void 0 ? Fe : 1;
    let Ke = Dn.ANIMATION, Xe = st * rt;
    if (!xt) {
      const be = he == null ? void 0 : he.width, It = ae.duration || 0, At = be ? st / be * Math.abs($e) : st;
      rt !== 0 ? (It < At ? Xe = Xe / At * Math.max(It, At / 5) : be && (Xe = st / be * (be - Math.abs($e))), xt = oe($e) > 0 ? fi : pi) : Xe = st / 2;
    }
    let Nt = 0;
    xt === fi ? De(oe(1)) ? Nt = -rt : (Ke = Dn.NONE, Xe = st) : xt === pi && (De(oe(-1)) ? Nt = rt : (Ke = Dn.NONE, Xe = st)), Xe = Math.round(Xe), H(() => {
      U(0), F(Dn.NONE);
    }, Xe), Te.current && G({
      rect: Te.current.getBoundingClientRect(),
      index: _.globalIndex
    }), F(Ke), N(a_, {
      type: "swipe",
      increment: Nt,
      duration: Xe,
      easing: Ve
    });
  });
  L.useEffect(() => {
    var ae, Ce;
    !((ae = _.animation) === null || ae === void 0) && ae.increment && (!((Ce = _.animation) === null || Ce === void 0) && Ce.duration) && B(() => E({ type: "swipe", increment: 0 }), _.animation.duration);
  }, [_.animation, E, B]);
  const pe = [
    C,
    De,
    (he == null ? void 0 : he.width) || 0,
    o.swipe,
    () => F(Dn.SWIPE),
    (ae) => U(ae),
    (ae, Ce) => le({ offset: ae, duration: Ce, count: 1 }),
    (ae) => le({ offset: ae, count: 0 })
  ], Q = [
    () => {
      h && F(Dn.PULL);
    },
    (ae) => j(ae),
    (ae) => D(ae),
    (ae) => D(ae, !0)
  ];
  yH(s, ...pe, p, h, ...Q, ke), _H(A, ...pe);
  const fe = Pt(() => {
    s.focus && ye().querySelector(`.${vt(sg)} .${vt(c_())}`) && se();
  });
  L.useEffect(fe, [fe]);
  const te = Pt(() => {
    var ae;
    (ae = u.view) === null || ae === void 0 || ae.call(u, { index: _.currentIndex });
  });
  L.useEffect(te, [_.globalIndex, te]), L.useEffect(() => Vd(T(fi, (ae) => le({ direction: fi, ...ae })), T(pi, (ae) => le({ direction: pi, ...ae })), T(a_, (ae) => E(ae))), [T, le, E]);
  const V = L.useMemo(() => ({
    prev: Se,
    next: ge,
    close: ke,
    focus: se,
    slideRect: he ? Y7(he, r.padding) : { width: 0, height: 0 },
    containerRect: he || { width: 0, height: 0 },
    subscribeSensors: C,
    containerRef: z,
    setCarouselRef: de,
    toolbarWidth: y,
    setToolbarWidth: b
  }), [
    Se,
    ge,
    ke,
    se,
    C,
    he,
    z,
    de,
    y,
    b,
    r.padding
  ]);
  return L.useImperativeHandle(s.ref, () => ({
    prev: Se,
    next: ge,
    close: ke,
    focus: se,
    getLightboxProps: Ee,
    getLightboxState: Pe
  }), [Se, ge, ke, se, Ee, Pe]), L.createElement("div", { ref: ve, className: $r(vt(c_()), vt(qd)), style: {
    ...A === Dn.SWIPE ? { [nr("swipe_offset")]: `${Math.round(x.current)}px` } : null,
    ...A === Dn.PULL ? {
      [nr("pull_offset")]: `${Math.round(I.current)}px`,
      [nr("pull_opacity")]: `${O.current}`
    } : null,
    ...s.touchAction !== "none" ? { [nr("controller_touch_action")]: s.touchAction } : null,
    ...c.container
  }, tabIndex: -1, ...S }, he && L.createElement(
    Sx.Provider,
    { value: V },
    e,
    (n = d.controls) === null || n === void 0 ? void 0 : n.call(d)
  ));
}
const EH = lo(ig, wH);
function ci(e) {
  return Sc(ex, e);
}
function u_(e) {
  return Sc(lg, e);
}
function xH({ slide: e, offset: t }) {
  const n = L.useRef(null), { currentIndex: r, slides: o } = co(), { slideRect: s, focus: u } = uo(), { render: c, carousel: { imageFit: d, imageProps: p }, on: { click: h }, styles: { slide: m }, labels: v } = Bn(), { getOwnerDocument: y } = Vs(), b = t !== 0;
  L.useEffect(() => {
    var E;
    b && (!((E = n.current) === null || E === void 0) && E.contains(y().activeElement)) && u();
  }, [b, u, y]);
  const _ = () => {
    var E, A, F, x;
    let I = (E = c.slide) === null || E === void 0 ? void 0 : E.call(c, { slide: e, offset: t, rect: s });
    return !I && qo(e) && (I = L.createElement(sd, { slide: e, offset: t, render: c, rect: s, imageFit: d, imageProps: p, onClick: b ? void 0 : () => h == null ? void 0 : h({ index: r }) })), I ? L.createElement(
      L.Fragment,
      null,
      (A = c.slideHeader) === null || A === void 0 ? void 0 : A.call(c, { slide: e }),
      ((F = c.slideContainer) !== null && F !== void 0 ? F : ({ children: O }) => O)({ slide: e, children: I }),
      (x = c.slideFooter) === null || x === void 0 ? void 0 : x.call(c, { slide: e })
    ) : null;
  };
  return L.createElement("div", { ref: n, className: $r(vt(u_()), !b && vt(u_("current")), vt(qd)), ...Z7(b), style: m, role: "group", "aria-roledescription": Ls(v, "Slide"), "aria-label": H7(v, o, r + t) }, _());
}
function CH() {
  const e = Bn().styles.slide;
  return L.createElement("div", { className: vt(lg), style: e });
}
function OH({ carousel: e, labels: t }) {
  const { slides: n, currentIndex: r, globalIndex: o } = co(), { setCarouselRef: s } = uo(), { autoPlaying: u, focusWithin: c } = vx(), d = id(e.spacing), p = id(e.padding), h = G7(e, n, 1), m = [];
  if (fx(n))
    for (let v = r - h; v <= r + h; v += 1) {
      const y = px(n, v), b = o - r + v, _ = e.finite && (v < 0 || v > n.length - 1);
      m.push(_ ? { key: b } : {
        key: [`${b}`, V7(y)].filter(Boolean).join("|"),
        offset: v - r,
        slide: y
      });
    }
  return L.createElement("div", { ref: s, className: $r(vt(ci()), m.length > 0 && vt(ci("with_slides"))), style: {
    [`${nr(ci("slides_count"))}`]: m.length,
    [`${nr(ci("spacing_px"))}`]: d.pixel || 0,
    [`${nr(ci("spacing_percent"))}`]: d.percent || 0,
    [`${nr(ci("padding_px"))}`]: p.pixel || 0,
    [`${nr(ci("padding_percent"))}`]: p.percent || 0
  }, role: "region", "aria-live": u && !c ? "off" : "polite", "aria-roledescription": Ls(t, "Carousel"), "aria-label": Ls(t, "Photo gallery") }, m.map(({ key: v, slide: y, offset: b }) => y ? L.createElement(xH, { key: v, slide: y, offset: b }) : L.createElement(CH, { key: v })));
}
const SH = lo(ex, OH);
function Tx() {
  const { carousel: e } = Bn(), { slides: t, currentIndex: n } = co(), r = t.length === 0 || e.finite && n === 0, o = t.length === 0 || e.finite && n === t.length - 1;
  return { prevDisabled: r, nextDisabled: o };
}
function TH(e) {
  var t;
  const n = _g(), { publish: r } = Tc(), { animation: o, controller: s } = Bn(), { prevDisabled: u, nextDisabled: c } = Tx(), d = ((t = o.navigation) !== null && t !== void 0 ? t : o.swipe) / 2, p = l_(() => r(fi), d), h = l_(() => r(pi), d), m = Pt((v) => {
    switch (v.key) {
      case W7:
        if (!s.closeOnEscape)
          return;
        r(Ds);
        break;
      case U7:
        (n ? c : u) || (n ? h : p)();
        break;
      case j7:
        (n ? u : c) || (n ? p : h)();
        break;
      default:
        return;
    }
    v.stopPropagation();
  });
  L.useEffect(() => e(ug, m), [e, m]);
}
function d_({ label: e, icon: t, renderIcon: n, action: r, onClick: o, disabled: s, style: u }) {
  return L.createElement(Pc, { label: e, icon: t, renderIcon: n, className: vt(`navigation_${r}`), disabled: s, onClick: o, style: u, ...mH(uo().focus, s) });
}
function PH({ render: { buttonPrev: e, buttonNext: t, iconPrev: n, iconNext: r }, styles: o }) {
  const { prev: s, next: u, subscribeSensors: c } = uo(), { prevDisabled: d, nextDisabled: p } = Tx();
  return TH(c), L.createElement(
    L.Fragment,
    null,
    e ? e() : L.createElement(d_, { label: "Previous", action: fi, icon: uH, renderIcon: n, style: o.navigationPrev, disabled: d, onClick: s }),
    t ? t() : L.createElement(d_, { label: "Next", action: pi, icon: dH, renderIcon: r, style: o.navigationNext, disabled: p, onClick: u })
  );
}
const kH = lo(P7, PH), f_ = vt(F7), NH = vt(rx);
function IH(e) {
  return "style" in e;
}
function p_(e, t, n) {
  const r = window.getComputedStyle(e), o = n ? "padding-left" : "padding-right", s = n ? r.paddingLeft : r.paddingRight, u = e.style.getPropertyValue(o);
  return e.style.setProperty(o, `${(Gd(s) || 0) + t}px`), () => {
    u ? e.style.setProperty(o, u) : e.style.removeProperty(o);
  };
}
function AH({ noScroll: { disabled: e }, children: t }) {
  const n = _g(), { getOwnerDocument: r, getOwnerWindow: o } = Vs();
  return L.useEffect(() => {
    if (e)
      return () => {
      };
    const s = [], u = o(), { body: c, documentElement: d } = r(), p = Math.round(u.innerWidth - d.clientWidth);
    if (p > 0) {
      s.push(p_(c, p, n));
      const h = c.getElementsByTagName("*");
      for (let m = 0; m < h.length; m += 1) {
        const v = h[m];
        IH(v) && u.getComputedStyle(v).getPropertyValue("position") === "fixed" && !v.classList.contains(NH) && s.push(p_(v, p, n));
      }
    }
    return c.classList.add(f_), () => {
      c.classList.remove(f_), s.forEach((h) => h());
    };
  }, [n, e, r, o]), L.createElement(L.Fragment, null, t);
}
const RH = lo(k7, AH);
function h_(e) {
  return Sc(sg, e);
}
function m_(e, t, n) {
  const r = e.getAttribute(t);
  return e.setAttribute(t, n), () => {
    r ? e.setAttribute(t, r) : e.removeAttribute(t);
  };
}
function MH({ portal: { root: e, container: { className: t, style: n, ...r } = {} }, animation: o, styles: s, className: u, on: c, close: d, labels: p, children: h }) {
  const [m, v] = L.useState(!1), [y, b] = L.useState(!1), _ = L.useRef([]), E = L.useRef(null), { setTimeout: A } = Kd(), { subscribe: F } = Tc(), I = yg() ? 0 : o.fade;
  L.useEffect(() => (v(!0), () => {
    v(!1), b(!1);
  }), []);
  const O = Pt(() => {
    _.current.forEach((N) => N()), _.current = [];
  }), S = Pt(() => {
    var N;
    b(!1), O(), (N = c.exiting) === null || N === void 0 || N.call(c), A(() => {
      var B;
      (B = c.exited) === null || B === void 0 || B.call(c), d();
    }, I);
  });
  L.useEffect(() => F(Ds, S), [F, S]);
  const C = Pt((N) => {
    var B, H, ne;
    hx(N), b(!0), (B = c.entering) === null || B === void 0 || B.call(c);
    const z = (ne = (H = N.parentNode) === null || H === void 0 ? void 0 : H.children) !== null && ne !== void 0 ? ne : [];
    for (let re = 0; re < z.length; re += 1) {
      const he = z[re];
      ["TEMPLATE", "SCRIPT", "STYLE"].indexOf(he.tagName) === -1 && he !== N && (_.current.push(m_(he, "inert", "")), _.current.push(m_(he, "aria-hidden", "true")));
    }
    _.current.push(() => {
      var re, he;
      (he = (re = E.current) === null || re === void 0 ? void 0 : re.focus) === null || he === void 0 || he.call(re);
    }), A(() => {
      var re;
      (re = c.entered) === null || re === void 0 || re.call(c);
    }, I);
  }), T = L.useCallback((N) => {
    N ? C(N) : O();
  }, [C, O]);
  return m ? U_(L.createElement(vH, { ref: T, className: $r(u, t, vt(h_()), vt(rx), y && vt(h_("open"))), "aria-modal": !0, role: "dialog", "aria-label": Ls(p, "Lightbox"), style: {
    ...o.fade !== Kh.animation.fade ? { [nr("fade_animation_duration")]: `${I}ms` } : null,
    ...o.easing.fade !== Kh.animation.easing.fade ? { [nr("fade_animation_timing_function")]: o.easing.fade } : null,
    ...s.root,
    ...n
  }, onFocus: (N) => {
    E.current || (E.current = N.relatedTarget);
  }, ...r }, h), (typeof e == "function" ? e() : e) || document.body) : null;
}
const DH = lo(sg, MH);
function LH({ children: e }) {
  return L.createElement(L.Fragment, null, e);
}
const FH = lo(N7, LH);
function $H(e) {
  return Sc(tx, e);
}
function BH({ toolbar: { buttons: e }, render: { buttonClose: t, iconClose: n }, styles: r }) {
  const { close: o, setToolbarWidth: s } = uo(), { setContainerRef: u, containerRect: c } = bg();
  na(() => {
    s(c == null ? void 0 : c.width);
  }, [s, c == null ? void 0 : c.width]);
  const d = () => t ? t() : L.createElement(Pc, { key: Ds, label: "Close", icon: cH, renderIcon: n, onClick: o });
  return L.createElement("div", { ref: u, style: r.toolbar, className: vt($H()) }, e == null ? void 0 : e.map((p) => p === Ds ? d() : p));
}
const WH = lo(tx, BH);
function Px(e, t) {
  var n;
  return L.createElement(e.module.component, { key: e.module.name, ...t }, (n = e.children) === null || n === void 0 ? void 0 : n.map((r) => Px(r, t)));
}
function UH(e, t = {}) {
  const { easing: n, ...r } = e, { easing: o, ...s } = t;
  return {
    easing: { ...n, ...o },
    ...r,
    ...s
  };
}
function kx({ carousel: e, animation: t, render: n, toolbar: r, controller: o, noScroll: s, on: u, plugins: c, slides: d, index: p, ...h }) {
  const { animation: m, carousel: v, render: y, toolbar: b, controller: _, noScroll: E, on: A, slides: F, index: x, plugins: I, ...O } = Kh, { config: S, augmentation: C } = X7([
    Tn(DH, [
      Tn(RH, [
        Tn(EH, [
          Tn(SH),
          Tn(WH),
          Tn(kH)
        ])
      ])
    ])
  ], c || I), T = C({
    animation: UH(m, t),
    carousel: { ...v, ...e },
    render: { ...y, ...n },
    toolbar: { ...b, ...r },
    controller: { ..._, ...o },
    noScroll: { ...E, ...s },
    on: { ...A, ...u },
    ...O,
    ...h
  });
  return T.open ? L.createElement(
    tH,
    { ...T },
    L.createElement(
      aH,
      { slides: d || F, index: Gd(p || x) },
      L.createElement(
        sH,
        null,
        L.createElement(
          eH,
          null,
          L.createElement(Q7, null, Px(Tn(FH, S), T))
        )
      )
    )
  ) : null;
}
const jH = {
  download: void 0
}, Nx = (e) => ({
  ...jH,
  ...e
});
function zH(e) {
  if (!e)
    return;
  const t = /filename\*\s*=\s*UTF-8''([^;]+)/i.exec(e);
  if (t)
    try {
      const r = decodeURIComponent(t[1].trim());
      if (r)
        return r;
    } catch {
    }
  const n = /filename\s*=\s*("[^"]*"|[^;]+)/i.exec(e);
  return (n == null ? void 0 : n[1].trim().replace(/^"(.*)"$/, "$1")) || void 0;
}
function HH(e) {
  var t, n;
  return (n = (t = /^content-disposition:(.*)$/im.exec(e.getAllResponseHeaders())) === null || t === void 0 ? void 0 : t[1]) !== null && n !== void 0 ? n : null;
}
function YH(e, t) {
  const n = new XMLHttpRequest();
  n.open("GET", e), n.responseType = "blob", n.onload = () => {
    Xh(n.response, t || zH(HH(n)));
  }, n.onerror = () => {
    console.error("Failed to download file");
  }, n.send();
}
function qH(e) {
  const t = new XMLHttpRequest();
  t.open("HEAD", e, !1);
  try {
    t.send();
  } catch {
  }
  return t.status >= 200 && t.status <= 299;
}
function jp(e) {
  try {
    e.dispatchEvent(new MouseEvent("click"));
  } catch {
    const n = document.createEvent("MouseEvents");
    n.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), e.dispatchEvent(n);
  }
}
function Xh(e, t) {
  const n = document.createElement("a");
  n.rel = "noopener", n.download = t || "", n.download || (n.target = "_blank"), typeof e == "string" ? (n.href = e, n.origin !== window.location.origin ? qH(n.href) ? YH(e, t) : (n.target = "_blank", jp(n)) : jp(n)) : (n.href = URL.createObjectURL(e), setTimeout(() => URL.revokeObjectURL(n.href), 3e4), setTimeout(() => jp(n), 0));
}
const VH = ka("DownloadIcon", L.createElement("path", { d: "M18 15v3H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2zm-1-4-1.41-1.41L13 12.17V4h-2v8.17L8.41 9.59 7 11l5 5 5-5z" }));
function GH() {
  const { render: e, on: t, download: n } = Bn(), { download: r } = Nx(n), { currentSlide: o, currentIndex: s } = co();
  if (e.buttonDownload)
    return L.createElement(L.Fragment, null, e.buttonDownload());
  const u = o && (o.downloadUrl || typeof o.download == "string" && o.download || typeof o.download == "object" && o.download.url || qo(o) && o.src) || void 0, c = r ? (o == null ? void 0 : o.download) !== !1 : !!u, d = () => {
    if (o && u) {
      const h = o.downloadFilename || typeof o.download == "object" && o.download.filename || void 0;
      Xh(u, h);
    }
  }, p = () => {
    var h;
    o && ((r || d)({ slide: o, saveAs: Xh }), (h = t.download) === null || h === void 0 || h.call(t, { index: s }));
  };
  return L.createElement(Pc, { label: "Download", icon: VH, renderIcon: e.iconDownload, disabled: !c, onClick: p });
}
function Qh({ augment: e }) {
  e(({ toolbar: t, download: n, ...r }) => ({
    toolbar: vg(t, I7, L.createElement(GH, null)),
    download: Nx(n),
    ...r
  }));
}
const KH = {
  auto: !1,
  ref: null
}, Ix = (e) => ({
  ...KH,
  ...e
}), Ax = L.createContext(null), ZH = oa("useFullscreen", "FullscreenContext", Ax);
function XH({ fullscreen: e, on: t, children: n }) {
  const { auto: r, ref: o } = Ix(e), s = L.useRef(null), [u, c] = L.useState(), [d, p] = L.useState(!1), h = L.useRef(!1), { getOwnerDocument: m } = Vs();
  na(() => {
    var x, I, O, S;
    const C = m();
    c(!((S = (O = (I = (x = C.fullscreenEnabled) !== null && x !== void 0 ? x : C.webkitFullscreenEnabled) !== null && I !== void 0 ? I : C.mozFullScreenEnabled) !== null && O !== void 0 ? O : C.msFullscreenEnabled) !== null && S !== void 0 && S));
  }, [m]);
  const v = L.useCallback(() => {
    var x;
    const I = m(), O = I.fullscreenElement || I.webkitFullscreenElement || I.mozFullScreenElement || I.msFullscreenElement;
    return ((x = O == null ? void 0 : O.shadowRoot) === null || x === void 0 ? void 0 : x.fullscreenElement) || O;
  }, [m]), y = L.useCallback(() => {
    const x = s.current;
    try {
      x.requestFullscreen ? x.requestFullscreen().catch(() => {
      }) : x.webkitRequestFullscreen ? x.webkitRequestFullscreen() : x.mozRequestFullScreen ? x.mozRequestFullScreen() : x.msRequestFullscreen && x.msRequestFullscreen();
    } catch {
    }
  }, []), b = L.useCallback(() => {
    if (!v())
      return;
    const x = m();
    try {
      x.exitFullscreen ? x.exitFullscreen().catch(() => {
      }) : x.webkitExitFullscreen ? x.webkitExitFullscreen() : x.mozCancelFullScreen ? x.mozCancelFullScreen() : x.msExitFullscreen && x.msExitFullscreen();
    } catch {
    }
  }, [v, m]);
  L.useEffect(() => {
    const x = m(), I = () => {
      p(v() === s.current);
    };
    return Vd(...["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"].map((O) => (x.addEventListener(O, I), () => x.removeEventListener(O, I))));
  }, [v, m]);
  const _ = Pt(() => {
    var x;
    return (x = t.enterFullscreen) === null || x === void 0 ? void 0 : x.call(t);
  }), E = Pt(() => {
    var x;
    return (x = t.exitFullscreen) === null || x === void 0 ? void 0 : x.call(t);
  });
  L.useEffect(() => {
    d && (h.current = !0), h.current && (d ? _ : E)();
  }, [d, _, E]);
  const A = Pt(() => {
    var x;
    return (x = r ? y : null) === null || x === void 0 || x(), b;
  });
  L.useEffect(A, [A]);
  const F = L.useMemo(() => ({ fullscreen: d, disabled: u, enter: y, exit: b }), [d, u, y, b]);
  return L.useImperativeHandle(o, () => F, [F]), L.createElement(
    "div",
    { ref: s, className: $r(vt(qh), vt(nx)) },
    L.createElement(Ax.Provider, { value: F }, n)
  );
}
const QH = ka("EnterFullscreen", L.createElement("path", { d: "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" })), JH = ka("ExitFullscreen", L.createElement("path", { d: "M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" }));
function eY() {
  var e;
  const { fullscreen: t, disabled: n, enter: r, exit: o } = ZH(), { render: s } = Bn();
  return n ? null : s.buttonFullscreen ? L.createElement(L.Fragment, null, (e = s.buttonFullscreen) === null || e === void 0 ? void 0 : e.call(s, { fullscreen: t, disabled: n, enter: r, exit: o })) : L.createElement(Pc, { disabled: n, label: t ? "Exit Fullscreen" : "Enter Fullscreen", icon: t ? JH : QH, renderIcon: t ? s.iconExitFullscreen : s.iconEnterFullscreen, onClick: t ? o : r });
}
function Rx({ augment: e, contains: t, addParent: n }) {
  e(({ fullscreen: r, toolbar: o, ...s }) => ({
    toolbar: vg(o, qh, L.createElement(eY, null)),
    fullscreen: Ix(r),
    ...s
  })), n(t(n_) ? n_ : ig, lo(qh, XH));
}
const tY = {
  controls: !0,
  playsInline: !0
}, Mx = (e) => ({
  ...tY,
  ...e
});
function nY() {
  const { video: e } = Bn();
  return Mx(e);
}
function rY() {
  var e;
  return ((e = navigator.userAgentData) === null || e === void 0 ? void 0 : e.brands.some(({ brand: t }) => t === "Chromium")) || !!window.chrome;
}
function aY() {
  return /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent);
}
function oY({ slide: e, offset: t }) {
  const n = nY(), { publish: r } = Tc(), { setContainerRef: o, containerRect: s, containerRef: u } = bg(), { getOwnerDocument: c } = Vs(), { animation: d } = Bn(), p = L.useRef(null), h = L.useRef(!1);
  L.useEffect(() => {
    t !== 0 && p.current && !p.current.paused && p.current.pause();
  }, [t]), L.useEffect(() => {
    t === 0 && p.current && (e.autoPlay || n.autoPlay) && (r(M7), p.current.play().catch(() => {
    }));
  }, [t, n.autoPlay, e.autoPlay, r]);
  const m = Pt(() => {
    const S = setTimeout(() => {
      if (u.current) {
        const C = u.current.style.border;
        u.current.style.border = "1px solid transparent", hx(u.current), u.current.style.border = C;
      }
    }, Math.max(d.swipe, d.navigation || 0) + 50);
    return () => clearTimeout(S);
  });
  L.useEffect(() => {
    if (rY() && t === 0)
      return m();
  }, [t, m]);
  const v = Pt((S) => {
    t === 0 && (n.autoPlay || e.autoPlay) && S.paused && S.play().catch(() => {
    });
  }), y = L.useCallback((S) => {
    p.current = S, S && v(S);
  }, [v]);
  L.useEffect(() => {
    if (t === 0) {
      let S = !1;
      const C = () => {
        S = c().fullscreenElement === p.current, h.current = S;
      };
      return c().addEventListener("fullscreenchange", C), () => {
        c().removeEventListener("fullscreenchange", C), S && (h.current = !1, c().exitFullscreen().catch(() => {
        }));
      };
    }
  }, [t, c]), L.useEffect(() => {
    if (t === 0) {
      let S = !1;
      const C = (B) => (H) => {
        H.target === p.current && (S = B, h.current = S);
      }, T = C(!0), N = C(!1);
      return c().addEventListener("enterpictureinpicture", T), c().addEventListener("leavepictureinpicture", N), () => {
        c().removeEventListener("enterpictureinpicture", T), c().removeEventListener("leavepictureinpicture", N), S && (h.current = !1, c().exitPictureInPicture().catch(() => {
        }));
      };
    }
  }, [t, c]);
  const { width: b, height: _, poster: E, sources: A } = e, F = () => {
    const S = {};
    if (S.style = { maxWidth: "100%", maxHeight: "100%" }, b && _ && s) {
      const C = b / _ > s.width / s.height, T = C ? s.width : Math.round(s.height / _ * b), N = C ? Math.round(s.width / b * _) : s.height;
      S.width = T, S.height = N, S.style.width = T, S.style.height = N;
    }
    return S;
  }, x = (S) => e[S] === !1 ? null : e[S] === !0 ? { [S]: !0 } : n[S] === !1 ? null : n[S] === !0 ? { [S]: !0 } : null, I = (S) => n[S] || e[S] ? { [S]: e[S] || n[S] } : null, O = (S) => {
    h.current && S.stopPropagation();
  };
  return L.createElement(L.Fragment, null, A && L.createElement("div", { ref: o, style: {
    width: "100%",
    height: "100%",
    ...b ? { maxWidth: `${b}px` } : null
  }, className: $r(vt("video_container"), vt(qd), vt(cg)) }, s && L.createElement("video", { ref: y, poster: E, ...F(), ...x("controls"), ...x("playsInline"), ...x("loop"), ...x("muted"), ...x("playsInline"), ...x("disablePictureInPicture"), ...x("disableRemotePlayback"), ...I("controlsList"), ...I("crossOrigin"), ...I("preload"), onPlay: () => {
    var S;
    if (t !== 0) {
      (S = p.current) === null || S === void 0 || S.pause();
      return;
    }
    r(D7);
  }, onEnded: () => {
    r(L7);
  }, onWheel: O, onKeyDown: O, onPointerDown: (S) => {
    O(S), aY() && p.current && p.current.getBoundingClientRect().bottom - S.clientY < 40 && S.stopPropagation();
  } }, A.map(({ src: S, type: C, media: T }) => L.createElement("source", { key: [S, C, T].filter(Boolean).join("|"), src: S, type: C, media: T })))));
}
function iY(e) {
  return e.type === "video";
}
function g_({ augment: e }) {
  e(({ render: { slide: t, ...n }, video: r, ...o }) => ({
    render: {
      slide: ({ slide: s, offset: u, rect: c }) => {
        var d;
        return iY(s) ? L.createElement(oY, { key: (d = s.sources) === null || d === void 0 ? void 0 : d.map((p) => p.src).join("|"), slide: s, offset: u }) : t == null ? void 0 : t({ slide: s, offset: u, rect: c });
      },
      ...n
    },
    video: Mx(r),
    ...o
  }));
}
const Dx = {
  minZoom: 1,
  maxZoomPixelRatio: 1,
  zoomInMultiplier: 2,
  doubleTapDelay: 300,
  doubleClickDelay: 500,
  doubleClickMaxStops: 2,
  keyboardMoveDistance: 50,
  wheelZoomDistanceFactor: 100,
  pinchZoomDistanceFactor: 100,
  pinchZoomV4: !1,
  scrollToZoom: !1,
  maxZoom: 8
};
function sY(e) {
  return Math.min(Math.max(e, Number.EPSILON), 1);
}
function Lx(e) {
  const { minZoom: t, ...n } = { ...Dx, ...e };
  return { minZoom: sY(t), ...n };
}
function lY(e, t, n, r) {
  const o = L.useRef(void 0), s = L.useRef(void 0), { zoom: u } = Bn().animation, c = yg(), d = Pt(() => {
    var p, h, m;
    if ((p = o.current) === null || p === void 0 || p.cancel(), o.current = void 0, s.current && (r != null && r.current)) {
      try {
        o.current = (m = (h = r.current).animate) === null || m === void 0 ? void 0 : m.call(h, [
          { transform: s.current },
          { transform: `scale(${e}) translateX(${t}px) translateY(${n}px)` }
        ], {
          duration: c ? 0 : u ?? 500,
          easing: o.current ? "ease-out" : "ease-in-out"
        });
      } catch (v) {
        console.error(v);
      }
      s.current = void 0, o.current && (o.current.onfinish = () => {
        o.current = void 0;
      });
    }
  });
  return na(d, [e, t, n, d]), L.useCallback(() => {
    s.current = r != null && r.current ? window.getComputedStyle(r.current).transform : void 0;
  }, [r]);
}
function cY(e, t) {
  const { on: n } = Bn(), r = Pt(() => {
    var o;
    t || (o = n.zoom) === null || o === void 0 || o.call(n, { zoom: e });
  });
  L.useEffect(r, [e, r]);
}
function Zd() {
  const { zoom: e } = Bn();
  return Lx(e);
}
function uY(e, t) {
  var n;
  const r = typeof e == "function" ? (n = e(t)) !== null && n !== void 0 ? n : Dx.maxZoom : e;
  return Math.max(r, 1);
}
function dY(e, t) {
  var n, r;
  let o = { width: 0, height: 0 }, s = { width: 0, height: 0 };
  const { currentSlide: u } = co(), { imageFit: c } = Bn().carousel, { maxZoomPixelRatio: d, maxZoom: p } = Zd();
  if (e && u) {
    const m = { ...u, ...t };
    if (qo(m)) {
      const v = mg(m, c), y = Math.max(...(((n = m.srcSet) === null || n === void 0 ? void 0 : n.map((_) => _.width)) || []).concat(m.width ? [m.width] : [])), b = Math.max(...(((r = m.srcSet) === null || r === void 0 ? void 0 : r.map((_) => _.height)) || []).concat(m.height ? [m.height] : []));
      y > 0 && b > 0 && e.width > 0 && e.height > 0 && (s = v ? {
        width: Math.round(Math.min(y, e.width / e.height * b)),
        height: Math.round(Math.min(b, e.height / e.width * y))
      } : { width: y, height: b }, s = {
        width: s.width * d,
        height: s.height * d
      }, o = v ? {
        width: Math.min(e.width, s.width, y),
        height: Math.min(e.height, s.height, b)
      } : {
        width: Math.round(Math.min(e.width, e.height / b * y, y)),
        height: Math.round(Math.min(e.height, e.width / y * b, b))
      });
    } else e.width > 0 && e.height > 0 && (t && t.width > 0 && t.height > 0 ? o = {
      width: Math.min(e.width, t.width),
      height: Math.min(e.height, t.height)
    } : o = { width: e.width, height: e.height });
  }
  const h = u && o.width ? qo(u) ? Math.max(hg(s.width / o.width, 5), 1) : uY(p, u) : 1;
  return { imageRect: o, maxZoom: h };
}
function v_(e, t) {
  return Math.hypot(e.clientX - t.clientX, e.clientY - t.clientY);
}
function y_(e, t, n = 100, r = 2) {
  return e * Math.min(1 + Math.abs(t / n), r) ** Math.sign(t);
}
function fY(e, t, n, r, o, s, u, c, d) {
  const p = L.useRef([]), h = L.useRef(0), m = L.useRef(void 0), { globalIndex: v } = co(), { getOwnerWindow: y } = Vs(), { containerRef: b, subscribeSensors: _ } = uo(), { keyboardMoveDistance: E, zoomInMultiplier: A, wheelZoomDistanceFactor: F, scrollToZoom: x, doubleTapDelay: I, doubleClickDelay: O, doubleClickMaxStops: S, pinchZoomDistanceFactor: C, pinchZoomV4: T } = Zd(), N = L.useCallback((de) => {
    if (b.current) {
      const { pageX: ye, pageY: ee } = de, { scrollX: oe, scrollY: se } = y(), { left: Ee, top: Pe, width: Se, height: ge } = b.current.getBoundingClientRect();
      return [ye - Ee - oe - Se / 2, ee - Pe - se - ge / 2];
    }
    return [];
  }, [b, y]), B = Pt((de) => {
    const { key: ye, metaKey: ee, ctrlKey: oe } = de, se = ee || oe, Ee = () => {
      de.preventDefault(), de.stopPropagation();
    };
    if (e > 1) {
      const Pe = (Se, ge) => {
        Ee(), c(Se, ge);
      };
      ye === "ArrowDown" ? Pe(0, E) : ye === "ArrowUp" ? Pe(0, -E) : ye === "ArrowLeft" ? Pe(-E, 0) : ye === "ArrowRight" && Pe(E, 0);
    }
    ye === "+" || se && ye === "=" ? (Ee(), o()) : ye === "-" || se && ye === "_" ? (Ee(), s()) : se && ye === "0" && (Ee(), u(1));
  }), H = Pt((de) => {
    if ((de.ctrlKey || x) && Math.abs(de.deltaY) > Math.abs(de.deltaX)) {
      de.stopPropagation(), u(y_(e, -de.deltaY, F), !0, ...N(de));
      return;
    }
    e > 1 && (de.stopPropagation(), x || c(de.deltaX, de.deltaY));
  }), ne = L.useCallback((de) => {
    const ye = p.current;
    ye.splice(0, ye.length, ...ye.filter((ee) => ee.pointerId !== de.pointerId));
  }, []), z = L.useCallback((de) => {
    ne(de), de.persist(), p.current.push(de);
  }, [ne]), re = Pt((de) => {
    var ye;
    const ee = p.current;
    if (de.pointerType === "mouse" && de.buttons > 1 || !(!((ye = d == null ? void 0 : d.current) === null || ye === void 0) && ye.contains(de.target)))
      return;
    e > 1 && de.stopPropagation();
    const { timeStamp: oe } = de;
    if (ee.length === 0 && oe - h.current < (de.pointerType === "touch" ? I : O)) {
      h.current = 0;
      const se = e >= 1 ? e !== n ? e * Math.max(n ** (1 / S), A) : 1 : e !== t ? e / Math.max(t ** (-1 / S), A) : 1;
      u(se, !1, ...N(de));
    } else
      h.current = oe;
    if (z(de), ee.length === 2) {
      const se = v_(ee[0], ee[1]);
      m.current = {
        previousDistance: se,
        initialDistance: Math.max(se, 1),
        initialZoom: e
      };
    }
  }), he = Pt((de) => {
    const ye = p.current, ee = ye.find((oe) => oe.pointerId === de.pointerId);
    if (ye.length === 2 && m.current) {
      de.stopPropagation(), z(de);
      const oe = v_(ye[0], ye[1]), se = T ? m.current.initialZoom / m.current.initialDistance * oe : y_(e, oe - m.current.previousDistance, C);
      u(se, !0, ...ye.map((Ee) => N(Ee)).reduce((Ee, Pe) => Pe.map((Se, ge) => Ee[ge] + Se / 2))), m.current.previousDistance = oe;
      return;
    }
    e > 1 && (de.stopPropagation(), ee && (ye.length === 1 && c((ee.clientX - de.clientX) / e, (ee.clientY - de.clientY) / e), z(de)));
  }), ve = L.useCallback((de) => {
    const ye = p.current;
    ye.length === 2 && ye.find((ee) => ee.pointerId === de.pointerId) && (m.current = void 0), ne(de);
  }, [ne]), Te = L.useCallback(() => {
    const de = p.current;
    de.splice(0, de.length), h.current = 0, m.current = void 0;
  }, []);
  Ox(_, re, he, ve, r), L.useEffect(Te, [v, Te]), L.useEffect(() => r ? () => {
  } : Vd(Te, _(ug, B), _(dg, H)), [r, _, Te, B, H]);
}
function pY(e, t, n) {
  const [r, o] = L.useState(1), [s, u] = L.useState(0), [c, d] = L.useState(0), p = lY(r, s, c, n), { currentSlide: h, globalIndex: m } = co(), { containerRect: v, slideRect: y } = uo(), { minZoom: b, zoomInMultiplier: _ } = Zd(), E = h && qo(h) ? h.src : void 0, A = !(n != null && n.current);
  na(() => {
    o(1), u(0), d(0);
  }, [m, E]);
  const F = L.useCallback((C, T, N) => {
    const B = N || r, H = s - (C || 0), ne = c - (T || 0), z = (e.width * B - y.width) / 2 / B, re = (e.height * B - y.height) / 2 / B;
    u(Math.min(Math.abs(H), Math.max(z, 0)) * Math.sign(H)), d(Math.min(Math.abs(ne), Math.max(re, 0)) * Math.sign(ne));
  }, [r, s, c, y, e.width, e.height]), x = L.useCallback((C, T, N, B) => {
    const H = hg(C + 0.01 < t ? C - 0.01 > b ? C : b : t, 5);
    T || p(), F(N ? N * (1 / r - 1 / H) : 0, B ? B * (1 / r - 1 / H) : 0, H), o(H);
  }, [r, b, t, F, p]), I = Pt(() => {
    r > 1 && (r > t && x(t, !0), F());
  });
  na(I, [v.width, v.height, I]);
  const O = L.useCallback(() => {
    const C = r * _;
    x(r < 1 && C > 1 ? 1 : C);
  }, [r, _, x]), S = L.useCallback(() => {
    const C = r / _;
    x(r > 1 && C < 1 ? 1 : C);
  }, [r, _, x]);
  return { zoom: r, offsetX: s, offsetY: c, disabled: A, changeOffsets: F, changeZoom: x, zoomIn: O, zoomOut: S };
}
const Fx = L.createContext(null), wg = oa("useZoom", "ZoomControllerContext", Fx);
function hY({ children: e }) {
  const [t, n] = L.useState(), { slideRect: r } = uo(), { ref: o, minZoom: s } = Zd(), { imageRect: u, maxZoom: c } = dY(r, t == null ? void 0 : t.imageDimensions), { zoom: d, offsetX: p, offsetY: h, disabled: m, changeZoom: v, changeOffsets: y, zoomIn: b, zoomOut: _ } = pY(u, c, t == null ? void 0 : t.zoomWrapperRef);
  cY(d, m), fY(d, s, c, m, b, _, v, y, t == null ? void 0 : t.zoomWrapperRef);
  const E = L.useMemo(() => ({ zoom: d, minZoom: s, maxZoom: c, offsetX: p, offsetY: h, disabled: m, zoomIn: b, zoomOut: _, changeZoom: v }), [d, s, c, p, h, m, b, _, v]);
  L.useImperativeHandle(o, () => E, [E]);
  const A = L.useMemo(() => ({ ...E, setZoomWrapper: n }), [E, n]);
  return L.createElement(Fx.Provider, { value: A }, e);
}
const mY = ka("ZoomIn", L.createElement(
  L.Fragment,
  null,
  L.createElement("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" }),
  L.createElement("path", { d: "M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" })
)), gY = ka("ZoomOut", L.createElement("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z" })), b_ = L.forwardRef(function({ zoomIn: t, onLoseFocus: n }, r) {
  const o = L.useRef(!1), s = L.useRef(!1), { zoom: u, minZoom: c, maxZoom: d, zoomIn: p, zoomOut: h, disabled: m } = wg(), { render: v } = Bn(), y = m || (t ? u >= d : u <= c);
  return L.useEffect(() => {
    y && o.current && s.current && n(), y || (o.current = !0);
  }, [y, n]), L.createElement(Pc, { ref: r, disabled: y, label: t ? "Zoom in" : "Zoom out", icon: t ? mY : gY, renderIcon: t ? v.iconZoomIn : v.iconZoomOut, onClick: t ? p : h, onFocus: () => {
    s.current = !0;
  }, onBlur: () => {
    s.current = !1;
  } });
});
function vY() {
  const e = L.useRef(null), t = L.useRef(null), { focus: n } = uo(), r = L.useCallback((u) => {
    var c, d;
    !((c = u.current) === null || c === void 0) && c.disabled ? n() : (d = u.current) === null || d === void 0 || d.focus();
  }, [n]), o = L.useCallback(() => r(e), [r]), s = L.useCallback(() => r(t), [r]);
  return L.createElement(
    L.Fragment,
    null,
    L.createElement(b_, { zoomIn: !0, ref: e, onLoseFocus: s }),
    L.createElement(b_, { ref: t, onLoseFocus: o })
  );
}
function yY() {
  const { render: e } = Bn(), t = wg();
  return e.buttonZoom ? L.createElement(L.Fragment, null, e.buttonZoom(t)) : L.createElement(vY, null);
}
function bY(e) {
  var t;
  return (((t = e.srcSet) === null || t === void 0 ? void 0 : t.length) || 0) > 0;
}
function _Y({ current: e, preload: t }, { type: n, source: r }) {
  switch (n) {
    case "fetch":
      return e ? { current: e, preload: r } : { current: r };
    case "done":
      return r === t ? { current: r } : { current: e, preload: t };
    default:
      throw new Error(ux);
  }
}
function wY(e) {
  var t, n;
  const [{ current: r, preload: o }, s] = L.useReducer(_Y, {}), { slide: u, rect: c, imageFit: d, render: p, interactive: h } = e, m = u.srcSet.sort((O, S) => O.width - S.width), v = (t = u.width) !== null && t !== void 0 ? t : m[m.length - 1].width, y = (n = u.height) !== null && n !== void 0 ? n : m[m.length - 1].height, b = mg(u, d), _ = Math.max(...m.map((O) => O.width)), E = Math.min((b ? Math.max : Math.min)(c.width, v * (c.height / y)), _), A = q7(), F = Pt(() => {
    var O;
    const S = (O = m.find((C) => C.width >= E * A)) !== null && O !== void 0 ? O : m[m.length - 1];
    (!r || m.findIndex((C) => C.src === r) < m.findIndex((C) => C === S)) && s({ type: "fetch", source: S.src });
  });
  na(F, [c.width, c.height, A, F]);
  const x = Pt((O) => s({ type: "done", source: O })), I = {
    WebkitTransform: h ? "initial" : "translateZ(0)"
  };
  return b || Object.assign(I, c.width / c.height < v / y ? { width: "100%", height: "auto" } : { width: "auto", height: "100%" }), L.createElement(
    L.Fragment,
    null,
    o && o !== r && L.createElement(sd, { key: "preload", ...e, offset: void 0, slide: { ...u, src: o, srcSet: void 0 }, style: { position: "absolute", visibility: "hidden", ...I }, onLoad: () => x(o), render: {
      ...p,
      iconLoading: () => null,
      iconError: () => null
    } }),
    r && L.createElement(sd, { key: "current", ...e, slide: { ...u, src: r, srcSet: void 0 }, style: I })
  );
}
function EY({ render: e, slide: t, offset: n, rect: r }) {
  var o;
  const [s, u] = L.useState(), c = L.useRef(null), d = qo(t), { zoom: p, maxZoom: h, offsetX: m, offsetY: v, setZoomWrapper: y } = wg(), b = p > 1, { carousel: _, on: E } = Bn(), { currentIndex: A } = co();
  na(() => {
    if (n !== 0 || d || !c.current)
      return () => {
      };
    const x = () => {
      const O = c.current;
      if (!O)
        return;
      let S = 0, C = 0;
      for (const T of O.children)
        T instanceof HTMLElement && (S = Math.max(S, T.offsetWidth), C = Math.max(C, T.offsetHeight));
      u((T) => T && T.width === S && T.height === C ? T : { width: S, height: C });
    };
    if (x(), typeof ResizeObserver > "u")
      return () => {
      };
    const I = new ResizeObserver(x);
    for (const O of c.current.children)
      I.observe(O);
    return () => I.disconnect();
  }, [n, d, r]), na(() => n === 0 ? (y({ zoomWrapperRef: c, imageDimensions: s }), () => y(void 0)) : () => {
  }, [n, s, y]);
  let F = (o = e.slide) === null || o === void 0 ? void 0 : o.call(e, { slide: t, offset: n, rect: r, zoom: p, maxZoom: h });
  if (!F && d) {
    const x = {
      slide: t,
      offset: n,
      rect: r,
      render: e,
      imageFit: _.imageFit,
      imageProps: _.imageProps,
      onClick: n === 0 ? () => {
        var I;
        return (I = E.click) === null || I === void 0 ? void 0 : I.call(E, { index: A });
      } : void 0
    };
    F = bY(t) ? L.createElement(wY, { ...x, slide: t, interactive: b, rect: n === 0 ? { width: r.width * p, height: r.height * p } : r }) : L.createElement(sd, { onLoad: (I) => u({ width: I.naturalWidth, height: I.naturalHeight }), ...x });
  }
  return F ? L.createElement("div", { ref: c, className: $r(vt(nx), vt(qd), vt(cg), b && vt($7)), style: n === 0 ? { transform: `scale(${p}) translateX(${m}px) translateY(${v}px)` } : void 0 }, F) : null;
}
const $x = ({ augment: e, addModule: t }) => {
  e(({ zoom: n, toolbar: r, render: o, controller: s, ...u }) => {
    const c = Lx(n);
    return {
      zoom: c,
      toolbar: vg(r, r_, L.createElement(yY, null)),
      render: {
        ...o,
        slide: (d) => {
          var p, h;
          return qo(d.slide) || d.slide.type != null && (!((p = c.supports) === null || p === void 0) && p.includes(d.slide.type)) ? L.createElement(EY, { render: o, ...d }) : (h = o.slide) === null || h === void 0 ? void 0 : h.call(o, d);
        }
      },
      controller: { ...s, preventDefaultWheelY: c.scrollToZoom },
      ...u
    };
  }), t(lo(r_, hY));
}, Jh = ({ imageUrl: e, isOpen: t = !1, onClose: n = () => {
}, downloadFileFetcher: r }) => {
  const [o, s] = ot(null), [u, c] = ot(0);
  Zt(() => {
    (async () => {
      if (e)
        if (!String(e).startsWith("data:") && !R.includes(e, "localhost") && r) {
          const y = await r({ uri: e });
          y && s(y);
        } else
          s(e);
      else
        s(null);
    })();
  }, [e, r]);
  const d = () => {
    c((v) => v <= 0 ? 270 : v - 90);
  }, p = () => {
    c((v) => v >= 270 ? 0 : v + 90);
  };
  return /* @__PURE__ */ k(
    kx,
    {
      open: t,
      plugins: [Rx, Qh, $x],
      close: () => {
        c(0), n();
      },
      slides: ((v) => v ? [{ src: v }] : [])(o),
      zoom: {
        maxZoomPixelRatio: 5,
        zoomInMultiplier: 2
      },
      className: `rotated${u}`,
      toolbar: {
        buttons: [
          /* @__PURE__ */ k("button", { type: "button", className: "yarl__button", onClick: d, children: /* @__PURE__ */ k(od, { icon: S7, size: "xl" }) }, "rotate-left"),
          /* @__PURE__ */ k("button", { type: "button", className: "yarl__button", onClick: p, children: /* @__PURE__ */ k(od, { icon: T7, size: "xl" }) }, "rotate-right"),
          "zoom",
          "download",
          "fullscreen",
          "close"
        ]
      }
    }
  );
};
Jh.propTypes = {
  imageUrl: l.string,
  isOpen: l.bool,
  onClose: l.func,
  downloadFileFetcher: l.func
};
const ld = ({
  isPDF: e,
  columns: t,
  data: n,
  sumData: r,
  handlerTable: o,
  clickedRowColors: s = "hsl(215, 75%, 80%)",
  onChangeDeselect: u,
  handlerMultiple: c = () => {
  },
  concatValue: d = [],
  setConcatValue: p = () => {
  },
  concatKeys: h,
  setConcatKeys: m = () => {
  },
  checkAllData: v,
  setConcatAll: y,
  headerDetail: b,
  setRowStyle: _,
  totalRows: E = 0,
  mobileCardView: A = !1,
  cardLine1: F = [],
  cardLine2: x = [],
  cardLine3: I = [],
  cardLine4: O = [],
  dataHandler: S = null,
  searchParams: C = null,
  onLoadMore: T = null,
  isLoadingMoreProp: N = !1,
  hasMore: B = null,
  mergeConfig: H = null,
  downloadFileFetcher: ne
}) => {
  const [z, re] = ot({}), [he, ve] = ot({ isOpen: !1, src: null });
  Zt(() => {
    re({}), p([]), m([]);
  }, [u]), Zt(() => {
    const $ = R.map(v, (D) => D[t[0].key]);
    c(v), p(v), m($);
  }, [v]);
  const Te = ($, D) => {
    o && o($, D);
  }, de = ($, D) => {
    let G = [], K = [];
    R.includes(h, $[D]) ? (G = R.reject(d, (le) => R.isEqual(le[D], $[D])), K = R.reject(h, (le) => R.isEqual(le, $[D]))) : (G = [...d, $], K = [...h, $[D]]), m(K), p(G), c(G), y(G.length === E);
  }, ye = ($) => {
    Te("onClick", $), re($);
  }, ee = ($, D) => {
    if (R.isEmpty($))
      return null;
    if (e) {
      const K = $.match(/.{1,60}/g) || [$];
      return R.map(K, (le, pe) => /* @__PURE__ */ k("div", { children: le }, pe));
    }
    const G = /* @__PURE__ */ k("span", { className: Qt.icon, children: /* @__PURE__ */ k(
      Er,
      {
        position: "bottom right",
        content: /* @__PURE__ */ k("div", { className: Qt.popupContent, children: $ }),
        trigger: /* @__PURE__ */ k(Be, { name: "comment alternate outline", style: { color: "#286b92" } })
      }
    ) }, 1);
    return D >= $.length ? $ : /* @__PURE__ */ k("div", { className: Qt.noWrap, children: [`${$.slice(0, D)}...`, G] });
  }, oe = ($, D) => {
    if (R.isEmpty($)) return null;
    let G = $;
    if (typeof $[0] == "object" && (G = R.map($, (pe) => pe[D.split(",")[1]])), e)
      return G.join(", ");
    const K = R.map(G, (pe, Q) => /* @__PURE__ */ k("div", { className: Qt.arrayCell, children: pe }, Q)), le = /* @__PURE__ */ k("span", { className: Qt.icon, children: /* @__PURE__ */ k(
      Er,
      {
        position: "bottom right",
        content: /* @__PURE__ */ k("div", { className: Qt.popupContent, children: K }),
        trigger: /* @__PURE__ */ k(Be, { name: "comment alternate outline", style: { color: "#286b92" } })
      }
    ) }, 1);
    return G.length === 1 ? G : [`${G[0]}...`, le];
  }, se = ($, D, G = "") => {
    const K = new Date($), le = new Date(D);
    let pe = /* @__PURE__ */ new Date();
    R.isEmpty(G) || (pe = new Date(G));
    const Q = le - K, fe = pe - K;
    if (Q <= 0 || fe >= Q)
      return 100;
    const te = fe / Q * 100;
    return parseInt(te.toFixed(0), 10);
  }, Ee = ($, D, G, K, le, pe) => {
    let Q = "#2483bb";
    if (D) {
      const fe = D[0];
      if (fe)
        if (fe.colorKey)
          K && (Q = Yt(fe.colorKey, K));
        else
          for (const te of D)
            te.onName === $ ? Q = te.color : te.default && (Q = te.default);
    }
    return G ? /* @__PURE__ */ k(
      dt,
      {
        style: { backgroundColor: Q },
        className: Qt.ButtonLabel,
        onClick: () => typeof G == "function" ? G(K) : Te(G, K),
        fluid: !0,
        children: R.isEmpty(le) ? String($) : Cl($, le)
      }
    ) : $ ? /* @__PURE__ */ k(dt, { style: { backgroundColor: Q, color: pe }, className: Qt.ButtonLabel, fluid: !0, children: R.isEmpty(le) ? String($) : Cl($, le) }) : null;
  }, Pe = ($, D, G, K) => {
    let le = se($, D);
    G(K) !== void 0 && (le = se($, D, G(K)));
    let pe = "#01C875";
    return le >= 90 && (pe = "#FDAB3D"), le === 100 && (pe = "#E2445B"), /* @__PURE__ */ ce("div", { children: [
      /* @__PURE__ */ k("div", { className: Qt.progressBarLabel, children: `${Rr(D, !1, !1, !0)} ${le}%` }),
      /* @__PURE__ */ k(
        gU,
        {
          isLabelVisible: !1,
          animateOnRender: !0,
          width: "11rem",
          completed: le,
          maxCompleted: 100,
          baseBgColor: "silver",
          bgColor: pe
        }
      )
    ] });
  }, Se = ($, D) => {
    if (!R.includes($, "[]?")) return R.get(D, $);
    const [G, K] = $.replace("[]?", "").split("."), le = R.get(D, G, []);
    return R.isArray(le) ? R.filter(
      R.map(le, (pe) => R.get(pe, K)),
      Boolean
    ) : [];
  }, ge = ({
    format: $,
    value: D,
    key: G,
    endDate: K,
    boolLabels: le,
    /* 	colorLabel, */
    translate: pe,
    /* onClick,
    labelData, */
    /* 	onKeyEndDate, */
    sum: Q,
    colorLabel: fe,
    onClick: te,
    widthZero: V,
    nullToZero: ae,
    stringLength: Ce,
    rowData: Fe,
    textColor: $e,
    stopDateHandler: st
  }) => {
    switch ($) {
      case "timeBetween":
        return pE(D, K);
      case "date":
        return Rr(D, !1, !1, !1);
      case "dateM":
        return Rr(D, !1, !1, !1);
      case "dateDMY":
        return Rr(D, !1, !1, !1, !1, !1, !0);
      case "time":
        return Rr(D, !1, !0, !1);
      case "dateTime":
        return Rr(D, !1, !1, !0);
      case "dateTimeBar":
        return Pe(D, K, st, Fe);
      case "dateTimeDay":
        return Rr(D, !1, !1, !1, !0);
      case "dateMonthYear":
        return Rr(D, !1, !1, !1, !1, !0);
      case "pastDays":
        return cU(D);
      case "phone":
        return sU(D);
      case "currency":
        return C0(D, !1, V, ae);
      case "decimal":
        return lU(D, V, ae);
      case "integerCurrency":
        return C0(D, !0, V, ae);
      case "number":
        return Number.isNaN(D) || D === null ? "" : Number(D).toLocaleString("en-US");
      case "blankZero": {
        if (R.isArray(D) || typeof D == "string") {
          const Ve = D ? D.length : 0;
          return Ve === 0 ? "" : Ve;
        }
        return D === 0 ? "" : D;
      }
      case "count":
        return D ? D.length : 0;
      case "boolean":
        return Q ? D : le ? D ? le.true || "si" : le.false || "no" : D ? "si" : "no";
      case "translate":
        return Cl(D, pe);
      case "truncate":
        return ee(D, Ce);
      case "array":
        return R.map(D, (xt) => /* @__PURE__ */ k("div", { children: Yt(G.split(",")[1], xt) }));
      case "colorLabel":
        return ke(D, $e);
      case "arrayTruncate": {
        const Ve = G.includes("[]?") ? Se(G, Fe) : D;
        return oe(Ve, G);
      }
      case "label":
        return Ee(D, fe, te, Fe, pe, $e);
      case "coloredText": {
        let Ve = "inherit";
        if (fe)
          for (const rt of fe)
            rt.onName === D ? Ve = rt.color : rt.default && Ve === "inherit" && (Ve = rt.default);
        const xt = R.isEmpty(pe) ? String(D) : Cl(D, pe);
        return /* @__PURE__ */ k("span", { style: { color: Ve, fontWeight: 500 }, children: xt });
      }
      case "longText":
        return ee(D, Ce);
      case "image":
        return D ? /* @__PURE__ */ k(
          Be,
          {
            name: "image",
            size: "small",
            style: { maxWidth: "50px", maxHeight: "50px", cursor: "pointer" },
            onClick: () => {
              ve({
                isOpen: !0,
                src: D
              });
            }
          }
        ) : null;
      default:
        return D;
    }
  }, ke = ($, D) => $ === "En Línea" && D !== "string" ? /* @__PURE__ */ k("div", { style: { color: "hsl(130, 92.00%, 34.10%)" }, children: $ }) : /* @__PURE__ */ k("div", { className: Qt.labelColor, style: { color: "#000000" }, children: $ }), De = ($, D) => R.map($, ({ content: K, hidden: le, type: pe, color: Q = "hsl(0, 0 %, 95 %)", onClick: fe, visible: te }, V) => {
    if (le || typeof te == "function" && te(D) === !1)
      return null;
    switch (pe) {
      case "icon":
        return /* @__PURE__ */ k(
          dt,
          {
            disabled: !1,
            className: Qt.ButtonIcon,
            style: {
              color: Q,
              border: `2px solid ${Q}`
            },
            onClick: () => Te(fe, D),
            children: /* @__PURE__ */ k(Be, { name: K })
          },
          V
        );
      case "link":
        return /* @__PURE__ */ k(
          lr,
          {
            style: { color: Q },
            className: Qt.ButtonLink,
            onClick: () => Te(fe, D),
            children: K
          },
          V
        );
      default:
        return null;
    }
  }), U = ($, D = !1) => R.map(
    t,
    ({
      key: K,
      format: le,
      endDateKey: pe = null,
      action: Q = [],
      multipleColumns: fe = [],
      dataPosition: te = "left",
      twoLines: V = !1,
      multiple: ae = !1,
      line1: Ce = {},
      line2: Fe = {},
      stringLength: $e = 20,
      hidden: st = !1,
      translate: Ve = {},
      colorLabel: xt,
      textColor: rt = "#000000",
      style: Ke = {},
      stopDateHandler: Xe = () => {
      },
      render: Nt = null,
      valueGetter: be = null,
      boolLabels: It = null
    }, At) => {
      let ft = {};
      _ !== void 0 && (ft = _($));
      const Je = be && typeof be == "function" ? be($) : Yt(K, $, !1, D), Gt = R.isEmpty(pe) ? null : Yt(pe, $);
      if (st)
        return null;
      if (Nt && typeof Nt == "function") {
        const We = Nt($, { setOpentImagePreview: ve });
        return /* @__PURE__ */ k(yt.Cell, { verticalAlign: "middle", textAlign: te, style: ft, className: Qt.cell, children: We }, At);
      }
      if (!R.isEmpty(Q) && !e && !D)
        return /* @__PURE__ */ k(
          yt.Cell,
          {
            verticalAlign: "middle",
            textAlign: te,
            style: { ...ft, ...Ke },
            className: Qt.cellButton,
            children: De(Q, $)
          },
          At
        );
      if (!R.isEmpty(Q) && e)
        return null;
      if (ae)
        return /* @__PURE__ */ k(
          yt.Cell,
          {
            verticalAlign: "middle",
            textAlign: "center",
            style: { ...ft, ...Ke },
            className: Qt.cellButton,
            onClick: () => {
              de($, K);
            },
            children: /* @__PURE__ */ k(ar, { checked: R.includes(h, $[K]) }, At)
          },
          At
        );
      if (V) {
        const We = Yt(R.get(Ce, "key", null), $), Ft = Yt(R.get(Fe, "key", null), $), Qe = Yt(R.get(Ce, "endDateKey", null), $), un = Yt(R.get(Fe, "endDateKey", null), $);
        return /* @__PURE__ */ ce(
          yt.Cell,
          {
            verticalAlign: "middle",
            style: ft,
            onClick: () => ye($),
            children: [
              /* @__PURE__ */ k("div", { className: Qt.towLineRow, style: { justifyContent: R.get(Ce, "dataPosition", "left"), ...ft }, children: ge({
                value: We,
                format: le,
                endDate: Qe,
                stringLength: $e,
                key: K,
                translate: Ve,
                colorLabel: xt,
                boolLabels: It,
                rowData: $
              }) }),
              /* @__PURE__ */ k("div", { className: Qt.towLineRow, style: { justifyContent: R.get(Fe, "dataPosition", "left"), ...ft }, children: ge({
                value: Ft,
                format: le,
                endDate: un,
                stringLength: $e,
                key: K,
                translate: Ve,
                colorLabel: xt,
                boolLabels: It,
                rowData: $
              }) })
            ]
          },
          At
        );
      }
      return R.isEmpty(fe) ? /* @__PURE__ */ k(
        yt.Cell,
        {
          verticalAlign: "middle",
          className: Qt.cell,
          textAlign: te,
          style: { color: rt, ...ft },
          onClick: () => ye($),
          children: ge({
            value: Je,
            format: le,
            endDate: Gt,
            stringLength: $e,
            key: K,
            sum: D,
            translate: Ve,
            colorLabel: xt,
            boolLabels: It,
            rowData: $,
            textColor: rt,
            stopDateHandler: Xe
          })
        },
        At
      ) : R.map(fe, (Ft, Qe) => {
        const un = At + Qe;
        return /* @__PURE__ */ k(
          yt.Cell,
          {
            verticalAlign: "middle",
            style: ft,
            textAlign: R.get(Ft, "dataPosition", "left"),
            onClick: () => ye($),
            children: ge({
              value: Yt(R.get(Ft, "key", null), $),
              format: R.get(Ft, "format", ""),
              endDate: R.get(Ft, "endDate", null),
              stringLength: $e,
              key: K,
              translate: Ve,
              colorLabel: xt,
              boolLabels: It,
              rowData: $
            })
          },
          un
        );
      });
    }
  ), j = () => {
    if (!R.isEmpty(n)) {
      const $ = R.map(n, (G, K) => {
        if (!R.isEmpty(b)) {
          const le = Yt(b.headerTitle, G, !1), pe = Yt(b.dataDetail, G, !1);
          return [
            /* @__PURE__ */ k(yt.Row, { className: Qt.sumRow, as: "tr", children: /* @__PURE__ */ k(
              yt.Cell,
              {
                verticalAlign: "middle",
                className: Qt.cell,
                style: { backgroundColor: "#dddddd", color: "black" },
                colSpan: 16,
                children: le
              }
            ) }, `sumRow-${K}`),
            R.map(pe, (Q, fe) => /* @__PURE__ */ k(
              yt.Row,
              {
                className: Qt.groupHover,
                style: z === Q ? { backgroundColor: s } : {},
                onDoubleClick: () => {
                  Te("Watch", Q);
                },
                children: U(Q)
              },
              `detail-${K}-${fe}`
            ))
          ];
        }
        return /* @__PURE__ */ k(
          yt.Row,
          {
            className: Qt.groupHover,
            style: z === G ? { backgroundColor: s } : {},
            onDoubleClick: () => {
              Te("Watch", G);
            },
            children: U(G)
          },
          K
        );
      });
      let D = [];
      return R.isEmpty(r) || (D = [
        /* @__PURE__ */ k(yt.Row, { className: Qt.sumRow, children: U(r, !0) }, "sumRow")
      ]), [...$, ...D];
    }
    return /* @__PURE__ */ k(yt.Row, { children: /* @__PURE__ */ k(yt.Cell, { colSpan: 34, children: /* @__PURE__ */ k("div", { className: Qt.emptyChat, children: /* @__PURE__ */ ce(qn, { as: "h3", color: "grey", children: [
      /* @__PURE__ */ k("div", { className: Qt.emptyDataIcon, children: /* @__PURE__ */ ce(Be.Group, { size: "large", children: [
        /* @__PURE__ */ k(Be, { name: "list alternate outline" }),
        /* @__PURE__ */ k(Be, { corner: !0, name: "close", color: "red" })
      ] }) }),
      "No se ha encontrado ningun dato"
    ] }) }) }) });
  };
  if (A) {
    const $ = S ? async (D, G = !1, K = !1, le = !1) => S(D, G, K, le, { withLoading: !(!G && !K && !le) }) : null;
    return /* @__PURE__ */ ce("div", { className: Qt.cardsWrapper, children: [
      /* @__PURE__ */ k(
        gE,
        {
          data: n,
          columns: t,
          headerDetail: b,
          setRowStyle: _,
          clickedRowColors: s,
          onHandlerTable: Te,
          handlerClick: ye,
          formatData: ge,
          clikedData: z,
          isPDF: e,
          cardLine1: F,
          enableInfiniteScroll: !!T || !!S,
          onLoadMore: T,
          isLoadingMore: N,
          hasMore: B,
          cardLine2: x,
          cardLine3: I,
          cardLine4: O,
          multipleHandler: de,
          concatKeys: h,
          dataHandler: $,
          searchParams: C,
          totalRows: E,
          mergeConfig: H
        }
      ),
      /* @__PURE__ */ k(
        Jh,
        {
          imageUrl: he.src,
          onClose: () => ve({ isOpen: !1, src: null }),
          isOpen: he.isOpen,
          downloadFileFetcher: ne
        }
      )
    ] });
  }
  return /* @__PURE__ */ ce(yt.Body, { children: [
    j(),
    /* @__PURE__ */ k(
      Jh,
      {
        imageUrl: he.src,
        onClose: () => ve({ isOpen: !1, src: null }),
        isOpen: he.isOpen,
        downloadFileFetcher: ne
      }
    )
  ] });
};
ld.propTypes = {
  data: l.array,
  columns: l.array,
  clickedRowColors: l.string,
  handlerTable: l.func,
  handlerMultiple: l.func,
  setConcatAll: l.func,
  isPDF: l.bool,
  onChangeDeselect: l.bool,
  totalRows: l.number,
  concatValue: l.array,
  checkAllData: l.array,
  setConcatValue: l.func,
  concatKeys: l.array,
  setConcatKeys: l.func,
  setRowStyle: l.func,
  sumData: l.object,
  headerDetail: l.object,
  mobileCardView: l.bool,
  cardLine1: l.array,
  cardLine2: l.array,
  cardLine3: l.array,
  cardLine4: l.array,
  dataHandler: l.func,
  searchParams: l.object,
  onLoadMore: l.func,
  isLoadingMoreProp: l.bool,
  hasMore: l.bool,
  mergeConfig: l.object,
  downloadFileFetcher: l.func
};
const xY = "_paginationCell_1jms9_1", CY = "_rowSelector_1jms9_9", OY = "_rowSelectorContainer_1jms9_17", SY = "_paginationContainer_1jms9_29", TY = "_content_1jms9_43", PY = "_pagination_1jms9_1", kY = "_itemCount_1jms9_67", NY = "_span_1jms9_75", da = {
  paginationCell: xY,
  rowSelector: CY,
  rowSelectorContainer: OY,
  paginationContainer: SY,
  content: TY,
  pagination: PY,
  itemCount: kY,
  span: NY
}, Bx = ({ searchParams: e, setSearchParams: t, dataHandler: n, totalRows: r, visiblePagination: o }) => {
  const s = (p) => {
    const h = { ...e, rows: p };
    t(h), n(h);
  }, u = (p, { activePage: h }) => {
    p.preventDefault();
    const m = { ...e, page: h };
    t(m), n(m);
  }, c = () => {
    if (r <= 1)
      return /* @__PURE__ */ ce("span", { className: da.itemCount, children: [
        "Elementos: 1-1 / ",
        r
      ] });
    const p = e.rows * e.page - e.rows + 1;
    let h = e.rows * e.page;
    return e.page === d() && (h = r), /* @__PURE__ */ k("span", { className: da.itemCount, children: `Elementos: ${p}-${h}/ ${r}` }, 1);
  }, d = () => {
    const p = parseInt(r / e.rows, 10), h = r % e.rows;
    return p < 1 ? 1 : h > 0 ? p + 1 : p;
  };
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    /* @__PURE__ */ k(No, { children: o && /* @__PURE__ */ k(yt.Footer, { className: da.footerContainer, children: /* @__PURE__ */ k(yt.Row, { children: /* @__PURE__ */ k(yt.HeaderCell, { colSpan: "34", className: da.paginationCell, children: /* @__PURE__ */ ce("div", { className: da.content, children: [
      /* @__PURE__ */ ce("div", { className: da.paginationContainer, children: [
        /* @__PURE__ */ k(
          Us,
          {
            className: da.pagination,
            activePage: e.page,
            ellipsisItem: {
              content: /* @__PURE__ */ k(Be, { name: "ellipsis horizontal" }, 1),
              icon: !0
            },
            firstItem: { content: /* @__PURE__ */ k(Be, { name: "angle double left" }, 2), icon: !0 },
            lastItem: { content: /* @__PURE__ */ k(Be, { name: "angle double right" }, 3), icon: !0 },
            prevItem: { content: /* @__PURE__ */ k(Be, { name: "angle left" }, 4), icon: !0 },
            nextItem: { content: /* @__PURE__ */ k(Be, { name: "angle right" }, 5), icon: !0 },
            totalPages: String(d()),
            onPageChange: u
          }
        ),
        r >= 1 && c()
      ] }),
      /* @__PURE__ */ ce("div", { className: da.rowSelectorContainer, children: [
        /* @__PURE__ */ k("span", { className: da.span, children: "Filas:" }),
        /* @__PURE__ */ k(
          Wr,
          {
            className: da.rowSelector,
            value: e.rows,
            onChange: (p, { value: h }) => {
              s(h);
            },
            options: [
              { key: "1", value: 5, text: "5" },
              { key: "2", value: 10, text: "10" },
              { key: "3", value: 15, text: "15" },
              { key: "4", value: 20, text: "20" },
              { key: "5", value: 25, text: "25" },
              { key: "6", value: 50, text: "50" }
            ]
          }
        )
      ] })
    ] }) }) }) }) })
  );
};
Bx.propTypes = {
  searchParams: l.object,
  setSearchParams: l.func,
  dataHandler: l.func,
  totalRows: l.number,
  visiblePagination: l.bool
};
var Wx = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r(J, LI);
  })(typeof self < "u" ? self : rs, function(n, r) {
    return function() {
      var o = { 328: function(d, p, h) {
        Object.defineProperty(p, "__esModule", { value: !0 }), p.PrintContextConsumer = p.PrintContext = void 0;
        var m = h(496), v = Object.prototype.hasOwnProperty.call(m, "createContext");
        p.PrintContext = v ? m.createContext({}) : null, p.PrintContextConsumer = p.PrintContext ? p.PrintContext.Consumer : function() {
          return null;
        };
      }, 428: function(d, p, h) {
        Object.defineProperty(p, "__esModule", { value: !0 }), p.ReactToPrint = void 0;
        var m = h(316), v = h(496), y = h(190), b = h(328), _ = h(940), E = function(A) {
          function F() {
            var x = A.apply(this, m.__spreadArray([], m.__read(arguments), !1)) || this;
            return x.startPrint = function(I) {
              var O = x.props, S = O.onAfterPrint, C = O.onPrintError, T = O.print, N = O.documentTitle;
              setTimeout(function() {
                var B, H;
                if (I.contentWindow) if (I.contentWindow.focus(), T) T(I).then(function() {
                  return S == null ? void 0 : S();
                }).then(function() {
                  return x.handleRemoveIframe();
                }).catch(function(re) {
                  C ? C("print", re) : x.logMessages(["An error was thrown by the specified `print` function"]);
                });
                else {
                  if (I.contentWindow.print) {
                    var ne = (H = (B = I.contentDocument) === null || B === void 0 ? void 0 : B.title) !== null && H !== void 0 ? H : "", z = I.ownerDocument.title;
                    N && (I.ownerDocument.title = N, I.contentDocument && (I.contentDocument.title = N)), I.contentWindow.print(), N && (I.ownerDocument.title = z, I.contentDocument && (I.contentDocument.title = ne));
                  } else x.logMessages(["Printing for this browser is not currently possible: the browser does not have a `print` method available for iframes."]);
                  S == null || S(), x.handleRemoveIframe();
                }
                else x.logMessages(["Printing failed because the `contentWindow` of the print iframe did not load. This is possibly an error with `react-to-print`. Please file an issue: https://github.com/gregnb/react-to-print/issues/"]);
              }, 500);
            }, x.triggerPrint = function(I) {
              var O = x.props, S = O.onBeforePrint, C = O.onPrintError;
              if (S) {
                var T = S();
                T && typeof T.then == "function" ? T.then(function() {
                  x.startPrint(I);
                }).catch(function(N) {
                  C && C("onBeforePrint", N);
                }) : x.startPrint(I);
              } else x.startPrint(I);
            }, x.handlePrint = function(I) {
              var O = x.props, S = O.bodyClass, C = O.content, T = O.copyStyles, N = O.fonts, B = O.pageStyle, H = O.nonce, ne = typeof I == "function" ? I() : null;
              if (ne && typeof C == "function" && x.logMessages(['"react-to-print" received a `content` prop and a content param passed the callback return by `useReactToPrint. The `content` prop will be ignored.'], "warning"), ne || typeof C != "function" || (ne = C()), ne !== void 0) if (ne !== null) {
                var z = document.createElement("iframe");
                z.width = "".concat(document.documentElement.clientWidth, "px"), z.height = "".concat(document.documentElement.clientHeight, "px"), z.style.position = "absolute", z.style.top = "-".concat(document.documentElement.clientHeight + 100, "px"), z.style.left = "-".concat(document.documentElement.clientWidth + 100, "px"), z.id = "printWindow", z.srcdoc = "<!DOCTYPE html>";
                var re = (0, y.findDOMNode)(ne);
                if (re) {
                  var he = re.cloneNode(!0), ve = he instanceof Text, Te = document.querySelectorAll("link[rel~='stylesheet'], link[as='style']"), de = ve ? [] : he.querySelectorAll("img"), ye = ve ? [] : he.querySelectorAll("video"), ee = N ? N.length : 0;
                  x.numResourcesToLoad = Te.length + de.length + ye.length + ee, x.resourcesLoaded = [], x.resourcesErrored = [];
                  var oe = function(se, Ee) {
                    x.resourcesLoaded.includes(se) ? x.logMessages(["Tried to mark a resource that has already been handled", se], "debug") : (Ee ? (x.logMessages(m.__spreadArray(['"react-to-print" was unable to load a resource but will continue attempting to print the page'], m.__read(Ee), !1)), x.resourcesErrored.push(se)) : x.resourcesLoaded.push(se), x.resourcesLoaded.length + x.resourcesErrored.length === x.numResourcesToLoad && x.triggerPrint(z));
                  };
                  z.onload = function() {
                    var se, Ee, Pe, Se;
                    z.onload = null;
                    var ge = z.contentDocument || ((Ee = z.contentWindow) === null || Ee === void 0 ? void 0 : Ee.document);
                    if (ge) {
                      ge.body.appendChild(he), N && (!((Pe = z.contentDocument) === null || Pe === void 0) && Pe.fonts && (!((Se = z.contentWindow) === null || Se === void 0) && Se.FontFace) ? N.forEach(function(rt) {
                        var Ke = new FontFace(rt.family, rt.source, { weight: rt.weight, style: rt.style });
                        z.contentDocument.fonts.add(Ke), Ke.loaded.then(function() {
                          oe(Ke);
                        }).catch(function(Xe) {
                          oe(Ke, ["Failed loading the font:", Ke, "Load error:", Xe]);
                        });
                      }) : (N.forEach(function(rt) {
                        return oe(rt);
                      }), x.logMessages(['"react-to-print" is not able to load custom fonts because the browser does not support the FontFace API but will continue attempting to print the page'])));
                      var ke = typeof B == "function" ? B() : B;
                      if (typeof ke != "string") x.logMessages(['"react-to-print" expected a "string" from `pageStyle` but received "'.concat(typeof ke, '". Styles from `pageStyle` will not be applied.')]);
                      else {
                        var De = ge.createElement("style");
                        H && (De.setAttribute("nonce", H), ge.head.setAttribute("nonce", H)), De.appendChild(ge.createTextNode(ke)), ge.head.appendChild(De);
                      }
                      if (S && (se = ge.body.classList).add.apply(se, m.__spreadArray([], m.__read(S.split(" ")), !1)), !ve) {
                        for (var U = ve ? [] : re.querySelectorAll("canvas"), j = ge.querySelectorAll("canvas"), $ = 0; $ < U.length; ++$) {
                          var D = U[$], G = j[$].getContext("2d");
                          G && G.drawImage(D, 0, 0);
                        }
                        var K = function(rt) {
                          var Ke = de[rt], Xe = Ke.getAttribute("src");
                          if (Xe) {
                            var Nt = new Image();
                            Nt.onload = function() {
                              return oe(Ke);
                            }, Nt.onerror = function(be, It, At, ft, Je) {
                              return oe(Ke, ["Error loading <img>", Ke, "Error", Je]);
                            }, Nt.src = Xe;
                          } else oe(Ke, ['Found an <img> tag with an empty "src" attribute. This prevents pre-loading it. The <img> is:', Ke]);
                        };
                        for ($ = 0; $ < de.length; $++) K($);
                        var le = function(rt) {
                          var Ke = ye[rt];
                          Ke.preload = "auto";
                          var Xe = Ke.getAttribute("poster");
                          if (Xe) {
                            var Nt = new Image();
                            Nt.onload = function() {
                              return oe(Ke);
                            }, Nt.onerror = function(be, It, At, ft, Je) {
                              return oe(Ke, ["Error loading video poster", Xe, "for video", Ke, "Error:", Je]);
                            }, Nt.src = Xe;
                          } else Ke.readyState >= 2 ? oe(Ke) : (Ke.onloadeddata = function() {
                            return oe(Ke);
                          }, Ke.onerror = function(be, It, At, ft, Je) {
                            return oe(Ke, ["Error loading video", Ke, "Error", Je]);
                          }, Ke.onstalled = function() {
                            return oe(Ke, ["Loading video stalled, skipping", Ke]);
                          });
                        };
                        for ($ = 0; $ < ye.length; $++) le($);
                        var pe = "input", Q = re.querySelectorAll(pe), fe = ge.querySelectorAll(pe);
                        for ($ = 0; $ < Q.length; $++) fe[$].value = Q[$].value;
                        var te = "input[type=checkbox],input[type=radio]", V = re.querySelectorAll(te), ae = ge.querySelectorAll(te);
                        for ($ = 0; $ < V.length; $++) ae[$].checked = V[$].checked;
                        var Ce = "select", Fe = re.querySelectorAll(Ce), $e = ge.querySelectorAll(Ce);
                        for ($ = 0; $ < Fe.length; $++) $e[$].value = Fe[$].value;
                      }
                      if (T) for (var st = document.querySelectorAll("style, link[rel~='stylesheet'], link[as='style']"), Ve = function(rt, Ke) {
                        var Xe = st[rt];
                        if (Xe.tagName.toLowerCase() === "style") {
                          var Nt = ge.createElement(Xe.tagName), be = Xe.sheet;
                          if (be) {
                            var It = "";
                            try {
                              for (var At = be.cssRules.length, ft = 0; ft < At; ++ft) typeof be.cssRules[ft].cssText == "string" && (It += "".concat(be.cssRules[ft].cssText, `\r
`));
                            } catch {
                              x.logMessages(["A stylesheet could not be accessed. This is likely due to the stylesheet having cross-origin imports, and many browsers block script access to cross-origin stylesheets. See https://github.com/gregnb/react-to-print/issues/429 for details. You may be able to load the sheet by both marking the stylesheet with the cross `crossorigin` attribute, and setting the `Access-Control-Allow-Origin` header on the server serving the stylesheet. Alternatively, host the stylesheet on your domain to avoid this issue entirely.", Xe], "warning");
                            }
                            Nt.setAttribute("id", "react-to-print-".concat(rt)), H && Nt.setAttribute("nonce", H), Nt.appendChild(ge.createTextNode(It)), ge.head.appendChild(Nt);
                          }
                        } else if (Xe.getAttribute("href")) if (Xe.hasAttribute("disabled")) x.logMessages(["`react-to-print` encountered a <link> tag with a `disabled` attribute and will ignore it. Note that the `disabled` attribute is deprecated, and some browsers ignore it. You should stop using it. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link#attr-disabled. The <link> is:", Xe], "warning"), oe(Xe);
                        else {
                          for (var Je = ge.createElement(Xe.tagName), Gt = (ft = 0, Xe.attributes.length); ft < Gt; ++ft) {
                            var We = Xe.attributes[ft];
                            We && Je.setAttribute(We.nodeName, We.nodeValue || "");
                          }
                          Je.onload = function() {
                            return oe(Je);
                          }, Je.onerror = function(Ft, Qe, un, Kn, ia) {
                            return oe(Je, ["Failed to load", Je, "Error:", ia]);
                          }, H && Je.setAttribute("nonce", H), ge.head.appendChild(Je);
                        }
                        else x.logMessages(["`react-to-print` encountered a <link> tag with an empty `href` attribute. In addition to being invalid HTML, this can cause problems in many browsers, and so the <link> was not loaded. The <link> is:", Xe], "warning"), oe(Xe);
                      }, xt = ($ = 0, st.length); $ < xt; ++$) Ve($);
                    }
                    x.numResourcesToLoad !== 0 && T || x.triggerPrint(z);
                  }, x.handleRemoveIframe(!0), document.body.appendChild(z);
                } else x.logMessages(['"react-to-print" could not locate the DOM node corresponding with the `content` prop']);
              } else x.logMessages(['There is nothing to print because the "content" prop returned "null". Please ensure "content" is renderable before allowing "react-to-print" to be called.']);
              else x.logMessages(["To print a functional component ensure it is wrapped with `React.forwardRef`, and ensure the forwarded ref is used. See the README for an example: https://github.com/gregnb/react-to-print#examples"]);
            }, x.handleRemoveIframe = function(I) {
              var O = x.props.removeAfterPrint;
              if (I || O) {
                var S = document.getElementById("printWindow");
                S && document.body.removeChild(S);
              }
            }, x.logMessages = function(I, O) {
              O === void 0 && (O = "error"), x.props.suppressErrors || (O === "error" ? console.error(I) : O === "warning" ? console.warn(I) : O === "debug" && console.debug(I));
            }, x;
          }
          return m.__extends(F, A), F.prototype.handleClick = function(x, I) {
            var O = this, S = this.props, C = S.onBeforeGetContent, T = S.onPrintError;
            if (C) {
              var N = C();
              N && typeof N.then == "function" ? N.then(function() {
                return O.handlePrint(I);
              }).catch(function(B) {
                T && T("onBeforeGetContent", B);
              }) : this.handlePrint(I);
            } else this.handlePrint(I);
          }, F.prototype.render = function() {
            var x = this.props, I = x.children, O = x.trigger;
            if (O) return v.cloneElement(O(), { onClick: this.handleClick.bind(this) });
            if (!b.PrintContext) return this.logMessages(['"react-to-print" requires React ^16.3.0 to be able to use "PrintContext"']), null;
            var S = { handlePrint: this.handleClick.bind(this) };
            return v.createElement(b.PrintContext.Provider, { value: S }, I);
          }, F.defaultProps = _.defaultProps, F;
        }(v.Component);
        p.ReactToPrint = E;
      }, 940: function(d, p) {
        Object.defineProperty(p, "__esModule", { value: !0 }), p.defaultProps = void 0, p.defaultProps = { copyStyles: !0, pageStyle: `
        @page {
            /* Remove browser default header (title) and footer (url) */
            margin: 0;
        }
        @media print {
            body {
                /* Tell browsers to print background colors */
                -webkit-print-color-adjust: exact; /* Chrome/Safari/Edge/Opera */
                color-adjust: exact; /* Firefox */
            }
        }
    `, removeAfterPrint: !1, suppressErrors: !1 };
      }, 892: function(d, p, h) {
        Object.defineProperty(p, "__esModule", { value: !0 }), p.useReactToPrint = void 0;
        var m = h(316), v = h(496), y = h(428), b = h(940), _ = h(860), E = Object.prototype.hasOwnProperty.call(v, "useMemo") && Object.prototype.hasOwnProperty.call(v, "useCallback");
        p.useReactToPrint = function(A) {
          if (!E) return A.suppressErrors || console.error('"react-to-print" requires React ^16.8.0 to be able to use "useReactToPrint"'), function() {
            throw new Error('"react-to-print" requires React ^16.8.0 to be able to use "useReactToPrint"');
          };
          var F = v.useMemo(function() {
            return new y.ReactToPrint(m.__assign(m.__assign({}, b.defaultProps), A));
          }, [A]);
          return v.useCallback(function(x, I) {
            return (0, _.wrapCallbackWithArgs)(F, F.handleClick, I)(x);
          }, [F]);
        };
      }, 860: function(d, p, h) {
        Object.defineProperty(p, "__esModule", { value: !0 }), p.wrapCallbackWithArgs = void 0;
        var m = h(316);
        p.wrapCallbackWithArgs = function(v, y) {
          for (var b = [], _ = 2; _ < arguments.length; _++) b[_ - 2] = arguments[_];
          return function() {
            for (var E = [], A = 0; A < arguments.length; A++) E[A] = arguments[A];
            return y.apply(v, m.__spreadArray(m.__spreadArray([], m.__read(E), !1), m.__read(b), !1));
          };
        };
      }, 496: function(d) {
        d.exports = n;
      }, 190: function(d) {
        d.exports = r;
      }, 316: function(d, p, h) {
        h.r(p), h.d(p, { __addDisposableResource: function() {
          return ge;
        }, __assign: function() {
          return y;
        }, __asyncDelegator: function() {
          return Te;
        }, __asyncGenerator: function() {
          return ve;
        }, __asyncValues: function() {
          return de;
        }, __await: function() {
          return he;
        }, __awaiter: function() {
          return S;
        }, __classPrivateFieldGet: function() {
          return Ee;
        }, __classPrivateFieldIn: function() {
          return Se;
        }, __classPrivateFieldSet: function() {
          return Pe;
        }, __createBinding: function() {
          return T;
        }, __decorate: function() {
          return _;
        }, __disposeResources: function() {
          return De;
        }, __esDecorate: function() {
          return A;
        }, __exportStar: function() {
          return N;
        }, __extends: function() {
          return v;
        }, __generator: function() {
          return C;
        }, __importDefault: function() {
          return se;
        }, __importStar: function() {
          return oe;
        }, __makeTemplateObject: function() {
          return ye;
        }, __metadata: function() {
          return O;
        }, __param: function() {
          return E;
        }, __propKey: function() {
          return x;
        }, __read: function() {
          return H;
        }, __rest: function() {
          return b;
        }, __runInitializers: function() {
          return F;
        }, __setFunctionName: function() {
          return I;
        }, __spread: function() {
          return ne;
        }, __spreadArray: function() {
          return re;
        }, __spreadArrays: function() {
          return z;
        }, __values: function() {
          return B;
        } });
        var m = function(U, j) {
          return m = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function($, D) {
            $.__proto__ = D;
          } || function($, D) {
            for (var G in D) Object.prototype.hasOwnProperty.call(D, G) && ($[G] = D[G]);
          }, m(U, j);
        };
        function v(U, j) {
          if (typeof j != "function" && j !== null) throw new TypeError("Class extends value " + String(j) + " is not a constructor or null");
          function $() {
            this.constructor = U;
          }
          m(U, j), U.prototype = j === null ? Object.create(j) : ($.prototype = j.prototype, new $());
        }
        var y = function() {
          return y = Object.assign || function(U) {
            for (var j, $ = 1, D = arguments.length; $ < D; $++) for (var G in j = arguments[$]) Object.prototype.hasOwnProperty.call(j, G) && (U[G] = j[G]);
            return U;
          }, y.apply(this, arguments);
        };
        function b(U, j) {
          var $ = {};
          for (var D in U) Object.prototype.hasOwnProperty.call(U, D) && j.indexOf(D) < 0 && ($[D] = U[D]);
          if (U != null && typeof Object.getOwnPropertySymbols == "function") {
            var G = 0;
            for (D = Object.getOwnPropertySymbols(U); G < D.length; G++) j.indexOf(D[G]) < 0 && Object.prototype.propertyIsEnumerable.call(U, D[G]) && ($[D[G]] = U[D[G]]);
          }
          return $;
        }
        function _(U, j, $, D) {
          var G, K = arguments.length, le = K < 3 ? j : D === null ? D = Object.getOwnPropertyDescriptor(j, $) : D;
          if (typeof Reflect == "object" && typeof Reflect.decorate == "function") le = Reflect.decorate(U, j, $, D);
          else for (var pe = U.length - 1; pe >= 0; pe--) (G = U[pe]) && (le = (K < 3 ? G(le) : K > 3 ? G(j, $, le) : G(j, $)) || le);
          return K > 3 && le && Object.defineProperty(j, $, le), le;
        }
        function E(U, j) {
          return function($, D) {
            j($, D, U);
          };
        }
        function A(U, j, $, D, G, K) {
          function le(Ve) {
            if (Ve !== void 0 && typeof Ve != "function") throw new TypeError("Function expected");
            return Ve;
          }
          for (var pe, Q = D.kind, fe = Q === "getter" ? "get" : Q === "setter" ? "set" : "value", te = !j && U ? D.static ? U : U.prototype : null, V = j || (te ? Object.getOwnPropertyDescriptor(te, D.name) : {}), ae = !1, Ce = $.length - 1; Ce >= 0; Ce--) {
            var Fe = {};
            for (var $e in D) Fe[$e] = $e === "access" ? {} : D[$e];
            for (var $e in D.access) Fe.access[$e] = D.access[$e];
            Fe.addInitializer = function(Ve) {
              if (ae) throw new TypeError("Cannot add initializers after decoration has completed");
              K.push(le(Ve || null));
            };
            var st = (0, $[Ce])(Q === "accessor" ? { get: V.get, set: V.set } : V[fe], Fe);
            if (Q === "accessor") {
              if (st === void 0) continue;
              if (st === null || typeof st != "object") throw new TypeError("Object expected");
              (pe = le(st.get)) && (V.get = pe), (pe = le(st.set)) && (V.set = pe), (pe = le(st.init)) && G.unshift(pe);
            } else (pe = le(st)) && (Q === "field" ? G.unshift(pe) : V[fe] = pe);
          }
          te && Object.defineProperty(te, D.name, V), ae = !0;
        }
        function F(U, j, $) {
          for (var D = arguments.length > 2, G = 0; G < j.length; G++) $ = D ? j[G].call(U, $) : j[G].call(U);
          return D ? $ : void 0;
        }
        function x(U) {
          return typeof U == "symbol" ? U : "".concat(U);
        }
        function I(U, j, $) {
          return typeof j == "symbol" && (j = j.description ? "[".concat(j.description, "]") : ""), Object.defineProperty(U, "name", { configurable: !0, value: $ ? "".concat($, " ", j) : j });
        }
        function O(U, j) {
          if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(U, j);
        }
        function S(U, j, $, D) {
          return new ($ || ($ = Promise))(function(G, K) {
            function le(fe) {
              try {
                Q(D.next(fe));
              } catch (te) {
                K(te);
              }
            }
            function pe(fe) {
              try {
                Q(D.throw(fe));
              } catch (te) {
                K(te);
              }
            }
            function Q(fe) {
              var te;
              fe.done ? G(fe.value) : (te = fe.value, te instanceof $ ? te : new $(function(V) {
                V(te);
              })).then(le, pe);
            }
            Q((D = D.apply(U, j || [])).next());
          });
        }
        function C(U, j) {
          var $, D, G, K, le = { label: 0, sent: function() {
            if (1 & G[0]) throw G[1];
            return G[1];
          }, trys: [], ops: [] };
          return K = { next: pe(0), throw: pe(1), return: pe(2) }, typeof Symbol == "function" && (K[Symbol.iterator] = function() {
            return this;
          }), K;
          function pe(Q) {
            return function(fe) {
              return function(te) {
                if ($) throw new TypeError("Generator is already executing.");
                for (; K && (K = 0, te[0] && (le = 0)), le; ) try {
                  if ($ = 1, D && (G = 2 & te[0] ? D.return : te[0] ? D.throw || ((G = D.return) && G.call(D), 0) : D.next) && !(G = G.call(D, te[1])).done) return G;
                  switch (D = 0, G && (te = [2 & te[0], G.value]), te[0]) {
                    case 0:
                    case 1:
                      G = te;
                      break;
                    case 4:
                      return le.label++, { value: te[1], done: !1 };
                    case 5:
                      le.label++, D = te[1], te = [0];
                      continue;
                    case 7:
                      te = le.ops.pop(), le.trys.pop();
                      continue;
                    default:
                      if (!((G = (G = le.trys).length > 0 && G[G.length - 1]) || te[0] !== 6 && te[0] !== 2)) {
                        le = 0;
                        continue;
                      }
                      if (te[0] === 3 && (!G || te[1] > G[0] && te[1] < G[3])) {
                        le.label = te[1];
                        break;
                      }
                      if (te[0] === 6 && le.label < G[1]) {
                        le.label = G[1], G = te;
                        break;
                      }
                      if (G && le.label < G[2]) {
                        le.label = G[2], le.ops.push(te);
                        break;
                      }
                      G[2] && le.ops.pop(), le.trys.pop();
                      continue;
                  }
                  te = j.call(U, le);
                } catch (V) {
                  te = [6, V], D = 0;
                } finally {
                  $ = G = 0;
                }
                if (5 & te[0]) throw te[1];
                return { value: te[0] ? te[1] : void 0, done: !0 };
              }([Q, fe]);
            };
          }
        }
        var T = Object.create ? function(U, j, $, D) {
          D === void 0 && (D = $);
          var G = Object.getOwnPropertyDescriptor(j, $);
          G && !("get" in G ? !j.__esModule : G.writable || G.configurable) || (G = { enumerable: !0, get: function() {
            return j[$];
          } }), Object.defineProperty(U, D, G);
        } : function(U, j, $, D) {
          D === void 0 && (D = $), U[D] = j[$];
        };
        function N(U, j) {
          for (var $ in U) $ === "default" || Object.prototype.hasOwnProperty.call(j, $) || T(j, U, $);
        }
        function B(U) {
          var j = typeof Symbol == "function" && Symbol.iterator, $ = j && U[j], D = 0;
          if ($) return $.call(U);
          if (U && typeof U.length == "number") return { next: function() {
            return U && D >= U.length && (U = void 0), { value: U && U[D++], done: !U };
          } };
          throw new TypeError(j ? "Object is not iterable." : "Symbol.iterator is not defined.");
        }
        function H(U, j) {
          var $ = typeof Symbol == "function" && U[Symbol.iterator];
          if (!$) return U;
          var D, G, K = $.call(U), le = [];
          try {
            for (; (j === void 0 || j-- > 0) && !(D = K.next()).done; ) le.push(D.value);
          } catch (pe) {
            G = { error: pe };
          } finally {
            try {
              D && !D.done && ($ = K.return) && $.call(K);
            } finally {
              if (G) throw G.error;
            }
          }
          return le;
        }
        function ne() {
          for (var U = [], j = 0; j < arguments.length; j++) U = U.concat(H(arguments[j]));
          return U;
        }
        function z() {
          for (var U = 0, j = 0, $ = arguments.length; j < $; j++) U += arguments[j].length;
          var D = Array(U), G = 0;
          for (j = 0; j < $; j++) for (var K = arguments[j], le = 0, pe = K.length; le < pe; le++, G++) D[G] = K[le];
          return D;
        }
        function re(U, j, $) {
          if ($ || arguments.length === 2) for (var D, G = 0, K = j.length; G < K; G++) !D && G in j || (D || (D = Array.prototype.slice.call(j, 0, G)), D[G] = j[G]);
          return U.concat(D || Array.prototype.slice.call(j));
        }
        function he(U) {
          return this instanceof he ? (this.v = U, this) : new he(U);
        }
        function ve(U, j, $) {
          if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
          var D, G = $.apply(U, j || []), K = [];
          return D = {}, le("next"), le("throw"), le("return"), D[Symbol.asyncIterator] = function() {
            return this;
          }, D;
          function le(V) {
            G[V] && (D[V] = function(ae) {
              return new Promise(function(Ce, Fe) {
                K.push([V, ae, Ce, Fe]) > 1 || pe(V, ae);
              });
            });
          }
          function pe(V, ae) {
            try {
              (Ce = G[V](ae)).value instanceof he ? Promise.resolve(Ce.value.v).then(Q, fe) : te(K[0][2], Ce);
            } catch (Fe) {
              te(K[0][3], Fe);
            }
            var Ce;
          }
          function Q(V) {
            pe("next", V);
          }
          function fe(V) {
            pe("throw", V);
          }
          function te(V, ae) {
            V(ae), K.shift(), K.length && pe(K[0][0], K[0][1]);
          }
        }
        function Te(U) {
          var j, $;
          return j = {}, D("next"), D("throw", function(G) {
            throw G;
          }), D("return"), j[Symbol.iterator] = function() {
            return this;
          }, j;
          function D(G, K) {
            j[G] = U[G] ? function(le) {
              return ($ = !$) ? { value: he(U[G](le)), done: !1 } : K ? K(le) : le;
            } : K;
          }
        }
        function de(U) {
          if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
          var j, $ = U[Symbol.asyncIterator];
          return $ ? $.call(U) : (U = B(U), j = {}, D("next"), D("throw"), D("return"), j[Symbol.asyncIterator] = function() {
            return this;
          }, j);
          function D(G) {
            j[G] = U[G] && function(K) {
              return new Promise(function(le, pe) {
                (function(Q, fe, te, V) {
                  Promise.resolve(V).then(function(ae) {
                    Q({ value: ae, done: te });
                  }, fe);
                })(le, pe, (K = U[G](K)).done, K.value);
              });
            };
          }
        }
        function ye(U, j) {
          return Object.defineProperty ? Object.defineProperty(U, "raw", { value: j }) : U.raw = j, U;
        }
        var ee = Object.create ? function(U, j) {
          Object.defineProperty(U, "default", { enumerable: !0, value: j });
        } : function(U, j) {
          U.default = j;
        };
        function oe(U) {
          if (U && U.__esModule) return U;
          var j = {};
          if (U != null) for (var $ in U) $ !== "default" && Object.prototype.hasOwnProperty.call(U, $) && T(j, U, $);
          return ee(j, U), j;
        }
        function se(U) {
          return U && U.__esModule ? U : { default: U };
        }
        function Ee(U, j, $, D) {
          if ($ === "a" && !D) throw new TypeError("Private accessor was defined without a getter");
          if (typeof j == "function" ? U !== j || !D : !j.has(U)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return $ === "m" ? D : $ === "a" ? D.call(U) : D ? D.value : j.get(U);
        }
        function Pe(U, j, $, D, G) {
          if (D === "m") throw new TypeError("Private method is not writable");
          if (D === "a" && !G) throw new TypeError("Private accessor was defined without a setter");
          if (typeof j == "function" ? U !== j || !G : !j.has(U)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
          return D === "a" ? G.call(U, $) : G ? G.value = $ : j.set(U, $), $;
        }
        function Se(U, j) {
          if (j === null || typeof j != "object" && typeof j != "function") throw new TypeError("Cannot use 'in' operator on non-object");
          return typeof U == "function" ? j === U : U.has(j);
        }
        function ge(U, j, $) {
          if (j != null) {
            if (typeof j != "object" && typeof j != "function") throw new TypeError("Object expected.");
            var D;
            if ($) {
              if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
              D = j[Symbol.asyncDispose];
            }
            if (D === void 0) {
              if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
              D = j[Symbol.dispose];
            }
            if (typeof D != "function") throw new TypeError("Object not disposable.");
            U.stack.push({ value: j, dispose: D, async: $ });
          } else $ && U.stack.push({ async: !0 });
          return j;
        }
        var ke = typeof SuppressedError == "function" ? SuppressedError : function(U, j, $) {
          var D = new Error($);
          return D.name = "SuppressedError", D.error = U, D.suppressed = j, D;
        };
        function De(U) {
          function j($) {
            U.error = U.hasError ? new ke($, U.error, "An error was suppressed during disposal.") : $, U.hasError = !0;
          }
          return function $() {
            for (; U.stack.length; ) {
              var D = U.stack.pop();
              try {
                var G = D.dispose && D.dispose.call(D.value);
                if (D.async) return Promise.resolve(G).then($, function(K) {
                  return j(K), $();
                });
              } catch (K) {
                j(K);
              }
            }
            if (U.hasError) throw U.error;
          }();
        }
        p.default = { __extends: v, __assign: y, __rest: b, __decorate: _, __param: E, __metadata: O, __awaiter: S, __generator: C, __createBinding: T, __exportStar: N, __values: B, __read: H, __spread: ne, __spreadArrays: z, __spreadArray: re, __await: he, __asyncGenerator: ve, __asyncDelegator: Te, __asyncValues: de, __makeTemplateObject: ye, __importStar: oe, __importDefault: se, __classPrivateFieldGet: Ee, __classPrivateFieldSet: Pe, __classPrivateFieldIn: Se, __addDisposableResource: ge, __disposeResources: De };
      } }, s = {};
      function u(d) {
        var p = s[d];
        if (p !== void 0) return p.exports;
        var h = s[d] = { exports: {} };
        return o[d](h, h.exports, u), h.exports;
      }
      u.d = function(d, p) {
        for (var h in p) u.o(p, h) && !u.o(d, h) && Object.defineProperty(d, h, { enumerable: !0, get: p[h] });
      }, u.o = function(d, p) {
        return Object.prototype.hasOwnProperty.call(d, p);
      }, u.r = function(d) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(d, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(d, "__esModule", { value: !0 });
      };
      var c = {};
      return function() {
        var d = c;
        Object.defineProperty(d, "__esModule", { value: !0 }), d.useReactToPrint = d.ReactToPrint = d.PrintContextConsumer = void 0;
        var p = u(328);
        Object.defineProperty(d, "PrintContextConsumer", { enumerable: !0, get: function() {
          return p.PrintContextConsumer;
        } });
        var h = u(428);
        Object.defineProperty(d, "ReactToPrint", { enumerable: !0, get: function() {
          return h.ReactToPrint;
        } });
        var m = u(892);
        Object.defineProperty(d, "useReactToPrint", { enumerable: !0, get: function() {
          return m.useReactToPrint;
        } });
        var v = u(428);
        d.default = v.ReactToPrint;
      }(), c;
    }();
  });
})(Wx);
var Eg = Wx.exports;
const IY = () => /^((?!chrome|android).)*safari/i.test(navigator.userAgent), Ux = (e) => Array.isArray(e) && e.every(
  (t) => typeof t == "object" && !(t instanceof Array)
), AY = (e) => Array.isArray(e) && e.every(
  (t) => Array.isArray(t)
), RY = (e) => Array.from(
  e.map((t) => Object.keys(t)).reduce((t, n) => /* @__PURE__ */ new Set([...t, ...n]), [])
), MY = (e, t) => {
  t = t || RY(e);
  let n = t, r = t;
  Ux(t) && (n = t.map((s) => s.label), r = t.map((s) => s.key));
  const o = e.map((s) => r.map((u) => DY(u, s)));
  return [n, ...o];
}, DY = (e, t) => {
  const n = e.replace(/\[([^\]]+)]/g, ".$1").split(".").reduce(function(r, o, s, u) {
    const c = r[o];
    if (c == null)
      u.splice(1);
    else
      return c;
  }, t);
  return n === void 0 ? e in t ? t[e] : "" : n;
}, LY = (e) => typeof e > "u" || e === null ? "" : e, jx = (e, t = ",", n = '"') => e.filter((r) => r).map(
  (r) => r.map((o) => LY(o)).map((o) => `${n}${o}${n}`).join(t)
).join(`
`), FY = (e, t, n, r) => jx(t ? [t, ...e] : e, n, r), $Y = (e, t, n, r) => jx(MY(e, t), n, r), BY = (e, t, n, r) => t ? `${t.join(n)}
${e}` : e.replace(/"/g, '""'), zx = (e, t, n, r) => {
  if (Ux(e)) return $Y(e, t, n, r);
  if (AY(e)) return FY(e, t, n, r);
  if (typeof e == "string") return BY(e, t, n);
  throw new TypeError('Data should be a "String", "Array of arrays" OR "Array of objects" ');
}, Hx = (e, t, n, r, o) => {
  const s = zx(e, n, r, o), u = IY() ? "application/csv" : "text/csv", c = new Blob([t ? "\uFEFF" : "", s], { type: u }), d = `data:${u};charset=utf-8,${t ? "\uFEFF" : ""}${s}`, p = window.URL || window.webkitURL;
  return typeof p.createObjectURL > "u" ? d : p.createObjectURL(c);
}, Yx = {
  data: er.oneOfType([er.string, er.array, er.func]).isRequired,
  headers: er.array,
  target: er.string,
  separator: er.string,
  filename: er.string,
  uFEFF: er.bool,
  onClick: er.func,
  asyncOnClick: er.bool,
  enclosingCharacter: er.string
}, qx = {
  separator: ",",
  filename: "generatedBy_react-csv.csv",
  uFEFF: !0,
  asyncOnClick: !1,
  enclosingCharacter: '"'
}, WY = {
  target: "_blank"
};
class __ extends J.Component {
  constructor(t) {
    super(t), this.state = {};
  }
  buildURI() {
    return Hx(...arguments);
  }
  componentDidMount() {
    const { data: t, headers: n, separator: r, enclosingCharacter: o, uFEFF: s, target: u, specs: c, replace: d } = this.props;
    this.state.page = window.open(
      this.buildURI(t, s, n, r, o),
      u,
      c,
      d
    );
  }
  getWindow() {
    return this.state.page;
  }
  render() {
    return null;
  }
}
ul(__, "defaultProps", Object.assign(
  qx,
  WY
)), ul(__, "propTypes", Yx);
var Tu;
let UY = (Tu = class extends J.Component {
  constructor(t) {
    super(t), this.buildURI = this.buildURI.bind(this);
  }
  buildURI() {
    return Hx(...arguments);
  }
  /**
   * In IE11 this method will trigger the file download
   */
  handleLegacy(t, n = !1) {
    if (window.navigator.msSaveOrOpenBlob) {
      t.preventDefault();
      const {
        data: r,
        headers: o,
        separator: s,
        filename: u,
        enclosingCharacter: c,
        uFEFF: d
      } = this.props, p = n && typeof r == "function" ? r() : r;
      let h = new Blob([d ? "\uFEFF" : "", zx(p, o, s, c)]);
      return window.navigator.msSaveBlob(h, u), !1;
    }
  }
  handleAsyncClick(t) {
    const n = (r) => {
      if (r === !1) {
        t.preventDefault();
        return;
      }
      this.handleLegacy(t, !0);
    };
    this.props.onClick(t, n);
  }
  handleSyncClick(t) {
    if (this.props.onClick(t) === !1) {
      t.preventDefault();
      return;
    }
    this.handleLegacy(t);
  }
  handleClick() {
    return (t) => {
      if (typeof this.props.onClick == "function")
        return this.props.asyncOnClick ? this.handleAsyncClick(t) : this.handleSyncClick(t);
      this.handleLegacy(t);
    };
  }
  render() {
    const {
      data: t,
      headers: n,
      separator: r,
      filename: o,
      uFEFF: s,
      children: u,
      onClick: c,
      asyncOnClick: d,
      enclosingCharacter: p,
      ...h
    } = this.props, v = typeof window > "u" ? "" : this.buildURI(t, s, n, r, p);
    return /* @__PURE__ */ k(
      "a",
      {
        download: o,
        ...h,
        ref: (y) => this.link = y,
        target: "_self",
        href: v,
        onClick: this.handleClick(),
        children: u
      }
    );
  }
}, ul(Tu, "defaultProps", qx), ul(Tu, "propTypes", Yx), Tu);
const jY = UY, zY = "_input_1q0yw_1", HY = "_clearIcon_1q0yw_9", YY = "_clearIconFocused_1q0yw_21", qY = "_clearIconLast_1q0yw_33", VY = "_clearIconLastFocused_1q0yw_47", GY = "_clearRoundedIconLast_1q0yw_61", KY = "_clearRoundedIconLastFocused_1q0yw_79", Ba = {
  input: zY,
  clearIcon: HY,
  clearIconFocused: YY,
  clearIconLast: qY,
  clearIconLastFocused: VY,
  clearRoundedIconLast: GY,
  clearRoundedIconLastFocused: KY
}, cd = rm((e, t) => {
  const {
    isPassword: n = !1,
    name: r,
    value: o,
    className: s,
    icon: u,
    label: c,
    placeholder: d,
    disabled: p,
    rounded: h,
    onChange: m,
    onKeyPress: v,
    onClear: y,
    dropdown: b,
    dropdownPosition: _ = "left",
    // nueva prop (default left)
    required: E = !1,
    fluid: A = !0,
    type: F = "text"
  } = e, x = Ln(null), [I, O] = ot(!1), [S, C] = ot(n ? "password" : "text"), [T, N] = ot("eye slash");
  Zt(() => {
    h ? R.isEmpty(o) || p ? ((t || x).current.style.removeProperty("border-top-left-radius"), (t || x).current.style.removeProperty("border-bottom-left-radius"), (t || x).current.style.removeProperty("border-top-right-radius"), (t || x).current.style.removeProperty("border-bottom-right-radius"), (t || x).current.style.removeProperty("border-right"), n ? ((t || x).current.style.setProperty("border-top-left-radius", "1rem", "important"), (t || x).current.style.setProperty("border-bottom-left-radius", "1rem", "important")) : ((t || x).current.style.setProperty("border-radius", "1rem", "important"), (t || x).current.style.setProperty(
      "border-right",
      `1px solid ${I ? "var(--inputFocus)" : "var(--inputShader)"}`,
      "important"
    ))) : ((t || x).current.style.removeProperty("border-radius"), (t || x).current.style.setProperty("border-top-left-radius", "1rem", "important"), (t || x).current.style.setProperty("border-bottom-left-radius", "1rem", "important"), (t || x).current.style.setProperty("border-top-right-radius", "0", "important"), (t || x).current.style.setProperty("border-bottom-right-radius", "0", "important"), (t || x).current.style.setProperty("border-right", "0", "important")) : R.isEmpty(o) || p ? ((t || x).current.style.setProperty("border-radius", "0.25rem", "important"), n ? ((t || x).current.style.setProperty("border-right", "0", "important"), (t || x).current.style.setProperty("border-top-right-radius", "0", "important"), (t || x).current.style.setProperty("border-bottom-right-radius", "0", "important")) : (t || x).current.style.setProperty(
      "border-right",
      `1px solid ${I ? "var(--inputFocus)" : "var(--inputShader)"}`,
      "important"
    )) : ((t || x).current.style.setProperty("border-right", "0", "important"), (t || x).current.style.setProperty("border-top-right-radius", "0", "important"), (t || x).current.style.setProperty("border-bottom-right-radius", "0", "important")), R.isEmpty(b) || (_ === "left" ? ((t || x).current.style.setProperty("border-top-left-radius", "0", "important"), (t || x).current.style.setProperty("border-bottom-left-radius", "0", "important"), (t || x).current.style.setProperty("border-left-color", "transparent", "important")) : _ === "right" && ((t || x).current.style.setProperty("border-top-right-radius", "0", "important"), (t || x).current.style.setProperty("border-bottom-right-radius", "0", "important"), (t || x).current.style.setProperty("border-right-color", "transparent", "important"), (t || x).current.style.setProperty("border-top-left-radius", "0.25rem", "important"), (t || x).current.style.setProperty("border-bottom-left-radius", "0.25rem", "important"), (t || x).current.style.setProperty(
      "border-left",
      `1px solid ${I ? "var(--inputFocus)" : "var(--inputShader)"}`,
      "important"
    )));
  }, [o, I, b, n, p, h, t, x]);
  const B = (ye) => {
    if (!R.isEmpty(o)) {
      const ee = { name: r, value: o.trim() };
      m({ ...ye, target: ee }, ee);
    }
  }, H = (ye) => {
    const { key: ee } = ye;
    ee === "Enter" && (ye.preventDefault(), B(ye), v && v(ye));
  }, ne = () => {
    const ye = S === "password", ee = ye ? "text" : "password", oe = ye ? "eye" : "eye slash";
    C(ee), N(oe);
  }, z = (ye) => {
    const ee = { name: r, value: "" };
    e.fieldIndex !== void 0 && (ee.fieldIndex = e.fieldIndex), e.id !== void 0 && (ee.id = e.id), m({ ...ye, target: ee }, ee), y && y();
  }, re = () => {
    O(!0);
  }, he = (ye) => {
    B(ye), O(!1);
  }, ve = () => n ? I ? Ba.clearIconFocused : Ba.clearIcon : h ? I ? Ba.clearRoundedIconLastFocused : Ba.clearRoundedIconLast : I ? Ba.clearIconLastFocused : Ba.clearIconLast, Te = R.omit(e, [
    "ref",
    "icon",
    "children",
    "onKeyPress",
    "name",
    "value",
    "onChange",
    "onClear",
    "disabled",
    "className",
    "rounded",
    "isPassword",
    "required",
    "type",
    "dropdown",
    "dropdownPosition"
  ]), de = n || !R.isEmpty(u);
  return /* @__PURE__ */ ce(
    An.Input,
    {
      ...Te,
      className: `${Ba.input} ${s || ""}`,
      disabled: p,
      onChange: m,
      name: r,
      required: E,
      label: c,
      placeholder: R.isEmpty(d) ? c : d,
      value: o,
      type: n ? S : F,
      ...de ? { iconPosition: "left" } : {},
      autoComplete: "off",
      fluid: A,
      onFocus: re,
      onBlur: he,
      onKeyPress: H,
      action: !0,
      children: [
        _ === "left" && !R.isEmpty(b) && /* @__PURE__ */ k(Wr, { labeled: !0, ...b }),
        de && /* @__PURE__ */ k(Be, { name: n ? "lock" : u }),
        /* @__PURE__ */ k("input", { ref: t || x }),
        _ === "right" ? /* @__PURE__ */ ce(No, { children: [
          !R.isEmpty(o) && !p && /* @__PURE__ */ k(dt, { className: ve(), icon: "cancel", onClick: z, tabIndex: -1 }),
          !R.isEmpty(b) && /* @__PURE__ */ k(Wr, { labeled: !0, ...b })
        ] }) : !R.isEmpty(o) && !p && /* @__PURE__ */ k(dt, { className: ve(), icon: "cancel", onClick: z, tabIndex: -1 }),
        n && /* @__PURE__ */ k(
          dt,
          {
            className: h ? Ba.clearRoundedIconLast : Ba.clearIconLast,
            icon: T,
            onClick: ne,
            tabIndex: -1
          }
        )
      ]
    }
  );
});
cd.propTypes = {
  onChange: l.func,
  onKeyPress: l.func,
  onClear: l.func,
  name: l.string,
  placeholder: l.string,
  label: l.string,
  value: l.string,
  className: l.string,
  disabled: l.bool,
  icon: l.string,
  children: l.node,
  rounded: l.bool,
  dropdown: l.object,
  dropdownPosition: l.oneOf(["left", "right"]),
  fluid: l.bool,
  isPassword: l.bool,
  required: l.bool,
  type: l.string,
  fieldIndex: l.oneOfType([l.number, l.string]),
  id: l.oneOfType([l.number, l.string])
};
const ZY = "_container_1uh18_1", XY = "_containerUser_1uh18_11", QY = "_containerLeft_1uh18_19", JY = "_containerRight_1uh18_25", e8 = "_headerTitle_1uh18_39", t8 = "_containerCenter_1uh18_49", n8 = "_tableContainer_1uh18_61", Wa = {
  container: ZY,
  containerUser: XY,
  containerLeft: QY,
  containerRight: JY,
  headerTitle: e8,
  containerCenter: t8,
  tableContainer: n8
}, Vx = ({
  data: e,
  columns: t,
  clickedRowColor: n,
  handlerTable: r,
  printHeader: o,
  searchParams: s,
  setSearchParams: u,
  dataHandler: c,
  sumData: d,
  headerDetail: p,
  customPrintHeader: h = []
}) => {
  const m = () => "@page { margin: 20px 20px 20px 20px !important; }";
  return /* @__PURE__ */ ce("div", { className: Wa.container, children: [
    /* @__PURE__ */ k("style", { children: m() }),
    /* @__PURE__ */ k("div", { className: Wa.containerCenter, children: R.isEmpty(h) ? /* @__PURE__ */ ce(qn, { as: "h2", icon: !0, children: [
      /* @__PURE__ */ k("span", { children: o.company }),
      /* @__PURE__ */ k(qn.Subheader, { children: o.title })
    ] }) : h }),
    /* @__PURE__ */ ce("div", { className: Wa.containerUser, children: [
      /* @__PURE__ */ ce("div", { className: Wa.containerLeft, children: [
        /* @__PURE__ */ ce("div", { children: [
          /* @__PURE__ */ k("span", { className: Wa.headerTitle, children: "Usuario:" }),
          o.user
        ] }),
        /* @__PURE__ */ ce("div", { children: [
          /* @__PURE__ */ k("span", { className: Wa.headerTitle, children: "Fecha:" }),
          Rr(String(/* @__PURE__ */ new Date()), !1, !1, !0)
        ] })
      ] }),
      /* @__PURE__ */ ce("div", { className: Wa.containerRight, children: [
        /* @__PURE__ */ k("span", { className: Wa.headerTitle, children: "Total de filas:" }),
        !R.isEmpty(e) && e.length
      ] })
    ] }),
    /* @__PURE__ */ k("div", { className: Wa.tableContainer, children: /* @__PURE__ */ ce(yt, { sortable: !0, celled: !0, striped: !0, children: [
      /* @__PURE__ */ k(Gm, { isPDF: !0, columns: t, searchParams: s, setSearchParams: u, dataHandler: c }),
      /* @__PURE__ */ k(
        ld,
        {
          isPDF: !0,
          data: e,
          headerDetail: p,
          columns: t,
          clickedRowColor: n,
          handlerTable: r,
          sumData: d
        }
      )
    ] }) })
  ] });
};
Vx.propTypes = {
  data: l.array,
  searchParams: l.object,
  printHeader: l.object,
  columns: l.array,
  customPrintHeader: l.array,
  handlerTable: l.func,
  setSearchParams: l.func,
  dataHandler: l.func,
  clickedRowColor: l.string,
  sumData: l.object,
  headerDetail: l.object
};
const r8 = "_container_17awp_1", a8 = "_input1_17awp_9", o8 = "_input2_17awp_15", zp = {
  container: r8,
  input1: a8,
  input2: o8
}, Gx = ({ label: e, value: t, onChange: n }) => {
  const [r, o] = ot(""), [s, u] = ot("");
  Zt(() => {
    if (R.isEmpty(t))
      o(""), u("");
    else {
      const d = t.split(",");
      o(d[0]), u(d[1]);
    }
  }, [t]);
  const c = (d) => {
    const p = R.get(d, "target.value", ""), h = R.get(d, "target.name", "");
    let m = r, v = s;
    switch (h) {
      case "date1":
        m = p;
        break;
      case "date2":
        v = p;
        break;
    }
    let y = "";
    (!R.isEmpty(m) || !R.isEmpty(v)) && (y = `${m},${v}`), n(y);
  };
  return /* @__PURE__ */ ce("div", { className: zp.container, children: [
    /* @__PURE__ */ k("div", { className: zp.input1, children: /* @__PURE__ */ k(
      An.Input,
      {
        type: "date",
        name: "date1",
        label: e,
        required: !0,
        placeholder: "Filtrar...",
        value: r,
        fluid: !0,
        onChange: (d) => {
          c(d);
        }
      }
    ) }),
    /* @__PURE__ */ k("div", { className: zp.input2, children: /* @__PURE__ */ k(
      An.Input,
      {
        label: " ",
        type: "date",
        name: "date2",
        placeholder: "Filtrar...",
        value: s,
        fluid: !0,
        onChange: (d) => {
          c(d);
        }
      }
    ) })
  ] });
};
Gx.propTypes = {
  label: l.string,
  value: l.string,
  /* 	className: PropTypes.string, */
  onChange: l.func
};
const i8 = "_modal_16365_1", s8 = "_modalHeader_16365_45", l8 = "_modalFooter_16365_59", c8 = "_inputChannel_16365_77", u8 = "_positiveButton_16365_111", d8 = "_negativeButton_16365_141", f8 = "_gridColumnLeft_16365_183", p8 = "_gridColumnRight_16365_195", fa = {
  modal: i8,
  modalHeader: s8,
  modalFooter: l8,
  inputChannel: c8,
  positiveButton: u8,
  negativeButton: d8,
  gridColumnLeft: f8,
  gridColumnRight: p8
}, Kx = ({
  onClose: e,
  searchableItems: t,
  searchParams: n,
  setSearchParams: r,
  dataHandler: o,
  formData: s,
  setFormData: u,
  setIsClearButton: c,
  clearFilter: d,
  customSearchKeys: p
}) => {
  const h = (_, E) => {
    const A = R.get(_, "target.value", "");
    u({
      ...s,
      [E]: A
    });
  }, m = (_, E) => {
    u({
      ...s,
      [E]: _
    });
  }, v = ({ key: _, label: E, format: A }) => {
    const F = _.split(",").join(".");
    switch (A) {
      case "dateTime":
      case "date":
        return /* @__PURE__ */ k(
          Gx,
          {
            label: E,
            value: R.get(s, `${F}`, ""),
            className: fa.inputChannel,
            onChange: (x) => {
              m(x, F);
            }
          },
          F
        );
      default:
        return /* @__PURE__ */ k(
          cd,
          {
            icon: "filter",
            label: E,
            required: !0,
            placeholder: "Filtrar...",
            value: R.get(s, `${F}`, ""),
            fluid: !0,
            className: fa.inputChannel,
            onChange: (x) => {
              h(x, F);
            }
          },
          F
        );
    }
  }, y = () => {
    let _ = 1, E = [], A = [], F = "", I = [...t, ...p].map((O) => {
      let S = [];
      return R.get(O, "multipleColumns", !1) ? (O.multipleColumns.forEach((C) => {
        F = ko(C.key), S = [...S, { ...C, key: F }];
      }), S) : (F = ko(O.key), { ...O, key: F });
    });
    return I = R.flatten(I), I.forEach((O) => {
      _ += 1, (_ + 1) % 2 === 0 ? A = [...A, v(O)] : E = [...E, v(O)];
    }), /* @__PURE__ */ ce(Pi, { columns: 2, children: [
      /* @__PURE__ */ k(Ka, { className: fa.gridColumnLeft, children: E }),
      /* @__PURE__ */ k(Ka, { className: fa.gridColumnRight, children: A })
    ] });
  }, b = () => {
    let _ = !1, E = {};
    if (Object.entries(s).forEach(([A, F]) => {
      R.isEmpty(F) || (_ = !0, E = { ...E, [A]: F });
    }), _) {
      const F = { ...R.pick(n, ["rows", "orderKey", "orderDir"]), page: 1, ...E };
      c(!0), r(F), o(F), e();
    }
  };
  return /* @__PURE__ */ ce(cn, { className: fa.modal, open: !0, closeIcon: !0, onClose: e, children: [
    /* @__PURE__ */ k(cn.Header, { className: fa.modalHeader, children: /* @__PURE__ */ ce("div", { children: [
      /* @__PURE__ */ k(Be, { name: "filter" }),
      "Filtro Avanzado"
    ] }) }),
    /* @__PURE__ */ k(cn.Content, { scrolling: !0, children: y() }),
    /* @__PURE__ */ ce(cn.Actions, { className: fa.modalFooter, children: [
      /* @__PURE__ */ ce(dt, { className: fa.negativeButton, onClick: d, children: [
        /* @__PURE__ */ k(Be, { name: "filter" }),
        "Limpiar"
      ] }),
      /* @__PURE__ */ ce("div", { children: [
        /* @__PURE__ */ k(dt, { className: fa.negativeButton, onClick: e, children: "Atrás" }),
        /* @__PURE__ */ k(dt, { className: fa.positiveButton, onClick: b, children: "Filtrar" })
      ] })
    ] })
  ] });
};
Kx.propTypes = {
  onClose: l.func,
  searchableItems: l.array,
  customSearchKeys: l.array,
  searchParams: l.object,
  formData: l.object,
  setFormData: l.func,
  setIsClearButton: l.func,
  setSearchParams: l.func,
  dataHandler: l.func,
  clearFilter: l.func
};
const Hp = (e, t, n, r, o, s, u, c) => {
  switch (e) {
    case "timeBetween":
      return pE(t, r);
    case "date":
      return Rr(t, !1, !1, !1);
    case "time":
      return Rr(t, !1, !0, !1);
    case "dateTimeBar":
    case "dateTime":
      return Rr(t, !1, !1, !0);
    case "count":
      return t ? t.length : 0;
    case "boolean":
      return u ? t ? u.true : u.false : t ? "si" : "no";
    case "translate":
      return Cl(t, s);
    case "arrayTruncate":
      if (c && typeof c.key == "string" && R.includes(c.key, "[]?")) {
        const [d, p] = R.replace(c.key, "[]?", "").split("."), h = Array.isArray(n[d]) ? n[d] : [], m = R.map(h, (v) => v && v[p]);
        return R.join(R.filter(m, Boolean), ", ");
      }
      return Array.isArray(t) ? R.join(R.filter(t, Boolean), ", ") : t;
    default:
      return t;
  }
}, w_ = (e) => e && e.key ? `${e.key.split(".").join("")}_${e.format || ""}_${e.label || ""}` : null;
function h8(e, t, n) {
  let r = e, o = t;
  if (!R.isEmpty(n)) {
    const d = R.map(e, (p) => {
      const h = { [n.headerTitle]: Yt(n.headerTitle, p) };
      return R.map(Yt(n.dataDetail, p), (v) => ({ ...h, ...v }));
    });
    r = R.flatten(d), o = [
      {
        label: n.columnName,
        key: n.headerTitle
      },
      ...t
    ];
  }
  let s = [], u = [], c = [];
  for (const d of o)
    if (!d.hidden)
      if (d.twoLines) {
        const p = d.line1, h = d.line2;
        c = [...c, p, h];
      } else
        c = [...c, d];
  for (const d of r) {
    let p = {};
    for (const h of c)
      if (h.key && R.get(h, "canExcel", !0)) {
        let m = h.endDate;
        h.format === "timeBetween" && h.endDateKey ? m = Yt(h.endDateKey, d) : m && typeof m == "string" && (m = Yt(m, d));
        let v = "";
        const y = w_(h), b = h.key.split(",");
        if (b.length === 1)
          v = Yt(h.key, d), h.format === "dateTimeBar" && (v = Yt(h.endDateKey, d)), v = Hp(
            h.format,
            v,
            d,
            m,
            h.onKeyEndDate,
            h.translate,
            h.boolLabels,
            h
          ), p = { ...p, [y]: v };
        else {
          const _ = Yt(b[0], d);
          for (const E of _)
            if (v === "")
              v = Yt(b[1], E), v = Hp(
                h.format,
                v,
                E,
                m,
                h.onKeyEndDate,
                h.translate,
                h.boolLabels,
                h
              ), (v == null || v === "") && (v = "null");
            else {
              let A = Yt(b[1], E);
              A = Hp(
                h.format,
                A,
                E,
                m,
                h.onKeyEndDate,
                h.translate,
                h.boolLabels,
                h
              ), (A == null || A === "") && (A = "null"), v = `${v}, ${A}`;
            }
          p = { ...p, [y]: v };
        }
      }
    s = [...s, p];
  }
  for (const d of c)
    d.key && R.get(d, "canExcel", !0) && (u = [...u, d]);
  return u = R.map(u, (d) => ({ label: d.label, key: w_(d) })), { dataExel: s, columnExel: u };
}
const m8 = "_mainContainer_4n1za_1", g8 = "_searchContainer_4n1za_19", v8 = "_searchInput_4n1za_89", y8 = "_searchWrapper_4n1za_99", b8 = "_filterButton_4n1za_129", _8 = "_addButton_4n1za_159", w8 = "_defaultTopButton_4n1za_191", E8 = "_printButton_4n1za_205", x8 = "_exelButton_4n1za_219", C8 = "_clearButton_4n1za_241", O8 = "_defaultTopInputContainerStyle_4n1za_255", S8 = "_defaultTopDropdownContainerStyle_4n1za_267", T8 = "_defaultLabelContainerStyle_4n1za_277", P8 = "_topInputLabel_4n1za_287", k8 = "_renderTopButtonsContainer_4n1za_299", N8 = "_inputLabelCheck_4n1za_313", I8 = "_labelCheck_4n1za_321", A8 = "_addButtonContainer_4n1za_331", R8 = "_addButtonsContainer_4n1za_343", M8 = "_topButtonsDesktop_4n1za_359", D8 = "_secondLine_4n1za_373", L8 = "_hidePrintButtonsMobile_4n1za_389", F8 = "_addButtonIcon_4n1za_553", $8 = "_hideOnMobile_4n1za_595", wt = {
  mainContainer: m8,
  searchContainer: g8,
  searchInput: v8,
  searchWrapper: y8,
  filterButton: b8,
  addButton: _8,
  defaultTopButton: w8,
  printButton: E8,
  exelButton: x8,
  clearButton: C8,
  defaultTopInputContainerStyle: O8,
  defaultTopDropdownContainerStyle: S8,
  defaultLabelContainerStyle: T8,
  topInputLabel: P8,
  renderTopButtonsContainer: k8,
  inputLabelCheck: N8,
  labelCheck: I8,
  addButtonContainer: A8,
  addButtonsContainer: R8,
  topButtonsDesktop: M8,
  secondLine: D8,
  hidePrintButtonsMobile: L8,
  addButtonIcon: F8,
  hideOnMobile: $8
}, Zx = ({
  print: e,
  searcher: t,
  columns: n,
  addButton: r,
  extraAddButtons: o,
  onAddButtonClick: s,
  topButtons: u,
  handlerTable: c,
  searchParams: d,
  setSearchParams: p,
  dataHandler: h,
  filteredPrintData: m,
  totalRows: v,
  customSearchKeys: y,
  clickedRowColor: b,
  sumData: _,
  isClearButton: E,
  setIsClearButton: A,
  headerDetail: F,
  searchRefresh: x,
  topPlaceClassName: I,
  hidePrintButtons: O = !1
}) => {
  const [S, C] = ot(""), [T, N] = ot([]), [B, H] = ot("all"), [ne, z] = ot(!1), [re, he] = ot([]), [ve, Te] = ot([]), [de, ye] = ot(!1), [ee, oe] = ot(!1), [se, Ee] = ot({}), [Pe, Se] = ot(!1), ge = Ln(), ke = Ln();
  Zt(() => {
    if (ee) {
      const te = h8(m, n, F);
      he(te.dataExel), Te(te.columnExel);
    }
    de && setTimeout(() => {
      De(), ye(!1);
    });
  }, [m]), Zt(() => {
    !R.isEmpty(re) && !R.isEmpty(ve) && ke.current && ke.current.link && ee && setTimeout(() => {
      ke.current.link.click(), oe(!1);
    });
  }, [re, ve]), Zt(() => {
    const te = D();
    Se([...te, ...y]);
    let V = uU([...te, ...y], "label", "key");
    t.allEnabled && (V = [{ key: 0, text: "Todos", value: "all" }, ...V]), N(V), R.isEmpty(t.searchString) || (C(t.searchString), $({
      newField: t.field || "all",
      searchableI: te,
      newSearchQuery: t.searchString
    })), R.isEmpty(t.field) || H(t.field);
  }, [n, y]), Zt(() => {
    C(R.isEmpty(t.searchString) ? "" : t.searchString), H(R.isEmpty(t.field) ? "all" : t.field);
  }, [x]);
  const De = Eg.useReactToPrint({
    content: () => ge.current
  }), U = () => {
    if (typeof R.get(e, "onPrint", null) == "function")
      return e.onPrint();
    h({ ...d, rows: v, page: 1 }, !0), ye(!0);
  }, j = () => {
    h({ ...d, rows: v, page: 1 }, !0), oe(!0);
  }, $ = ({ value: te = d, newField: V = B, searchableI: ae = !1, newSearchQuery: Ce = S }) => {
    let Fe = Pe;
    ae && (Fe = ae);
    const $e = R.pick(d, ["rows", "orderKey", "orderDir"]), st = ko(V);
    let Ve = Fe.map((rt) => {
      let Ke = [], Xe = "";
      return R.get(rt, "multipleColumns", !1) ? (rt.multipleColumns.forEach((Nt) => {
        Xe = ko(Nt.fieldKey || Nt.key), Ke = [...Ke, Xe];
      }), Ke) : (Xe = ko(rt.fieldKey || rt.key), Xe);
    });
    Ve = R.flatten(Ve);
    let xt = {
      ...$e,
      page: 1,
      fields: Ve
    };
    R.isEmpty(Ce) || (xt = {
      ...xt,
      [st]: Ce
    }), R.isEmpty(te) && (xt = { ...$e, page: 1, fields: Ve }), p(xt), h(xt);
  }, D = () => {
    let te = [];
    return n.forEach((V) => {
      !V.hidden && !V.action && !V.multiple && (V.twoLines ? (R.get(V.line1, "canFilter", !0) && (te = [...te, V.line1]), R.get(V.line2, "canFilter", !0) && (te = [...te, V.line2])) : R.get(V, "canFilter", !0) && (te = [...te, V]));
    }), te;
  }, G = () => {
    $({});
  }, K = Vp(R.debounce(G, 1e3), [S]), le = () => {
    let te = null;
    return R.isEmpty(u) || (te = R.map(u, (V, ae) => {
      switch (V.componentType) {
        case "input":
          return /* @__PURE__ */ ce(
            "div",
            {
              className: R.isEmpty(V.inputContainerStyle) ? wt.defaultTopInputContainerStyle : V.inputContainerStyle,
              children: [
                /* @__PURE__ */ k("span", { className: wt.topInputLabel, children: V.label }),
                /* @__PURE__ */ k(
                  cd,
                  {
                    className: V.className,
                    type: V.type,
                    value: V.value,
                    icon: V.icon,
                    disabled: V.disabled,
                    fluid: V.fluid,
                    onChange: V.onChange
                  }
                )
              ]
            },
            ae
          );
        case "inputMonth":
          return /* @__PURE__ */ ce(
            "div",
            {
              className: R.isEmpty(V.inputContainerStyle) ? wt.defaultTopInputContainerStyle : V.inputContainerStyle,
              children: [
                /* @__PURE__ */ k("span", { className: wt.topInputLabel, children: V.label }),
                /* @__PURE__ */ k(
                  An.Input,
                  {
                    className: V.className,
                    type: V.type,
                    value: V.value,
                    icon: V.icon,
                    disabled: V.disabled,
                    fluid: V.fluid,
                    onChange: V.onChange
                  }
                )
              ]
            },
            ae
          );
        case "check":
          return /* @__PURE__ */ ce(
            "div",
            {
              className: R.isEmpty(V.checkContainerStyle) ? wt.defaultTopInputContainerStyle : V.checkContainerStyle,
              children: [
                /* @__PURE__ */ k("span", { className: wt.labelCheck, children: V.leftLabel }),
                /* @__PURE__ */ k(ar, { toggle: V.toggle !== !1, checked: V.checked, disabled: V.disabled, onChange: V.onChange }),
                /* @__PURE__ */ k("span", { className: wt.inputLabelCheck, children: V.rightLabel })
              ]
            },
            ae
          );
        case "radio":
          return /* @__PURE__ */ ce(
            "div",
            {
              className: R.isEmpty(V.checkContainerStyle) ? wt.defaultTopInputContainerStyle : V.checkContainerStyle,
              children: [
                /* @__PURE__ */ ce("div", { children: [
                  /* @__PURE__ */ k(
                    Lo,
                    {
                      checked: V.checkedR,
                      disabled: V.disabled,
                      onChange: V.onChange
                    }
                  ),
                  /* @__PURE__ */ k("span", { className: wt.inputLabelCheck, children: V.rightLabel })
                ] }),
                /* @__PURE__ */ ce("div", { children: [
                  /* @__PURE__ */ k(
                    Lo,
                    {
                      checked: V.checkedL,
                      disabled: V.disabled,
                      onChange: V.onChange
                    }
                  ),
                  /* @__PURE__ */ k("span", { className: wt.inputLabelCheck, children: V.leftLabel })
                ] })
              ]
            },
            ae
          );
        case "DropDown":
          return !V.hidden && /* @__PURE__ */ ce(
            "div",
            {
              className: R.isEmpty(V.inputContainerStyle) ? wt.defaultTopDropdownContainerStyle : V.inputContainerStyle,
              children: [
                /* @__PURE__ */ k("span", { className: wt.topInputLabel, children: V.label }),
                /* @__PURE__ */ k(
                  Cn,
                  {
                    className: V.className,
                    selection: !0,
                    fluid: !0,
                    value: V.value,
                    multiple: V.multiple,
                    disabled: V.disabled,
                    onChange: V.onChange,
                    required: V.required,
                    search: V.search,
                    clearable: V.clearable,
                    placeholder: V.placeholder,
                    options: V.options
                  }
                )
              ]
            },
            ae
          );
        case "Label":
          return /* @__PURE__ */ ce(
            "div",
            {
              className: R.isEmpty(V.inputContainerStyle) ? wt.defaultLabelContainerStyle : V.inputContainerStyle,
              children: [
                /* @__PURE__ */ k("span", { className: wt.labelTitle, children: V.title }),
                /* @__PURE__ */ k("span", { className: wt.labelValue, children: V.value })
              ]
            },
            ae
          );
        case "custom":
          return /* @__PURE__ */ k("div", { children: V.content }, ae);
        default:
          return /* @__PURE__ */ k(
            "div",
            {
              className: R.isEmpty(V.buttonContainerStyle) ? wt.defaultLabelContainerStyle : V.buttonContainerStyle,
              children: /* @__PURE__ */ ce(
                dt,
                {
                  className: R.isEmpty(V.className) ? wt.defaultTopButton : V.className,
                  disabled: R.get(V, "disabled", !1),
                  onClick: V.onClick,
                  children: [
                    !R.isEmpty(V.icon) && /* @__PURE__ */ k(Be, { className: wt.addButtonIcon, name: V.icon }),
                    R.get(V, "content", "")
                  ]
                },
                ae
              )
            },
            ae
          );
      }
    })), /* @__PURE__ */ k("div", { className: wt.renderTopButtonsContainer, children: te });
  }, pe = () => {
    G(), Ee({}), A(!1);
  }, Q = () => {
    $({ value: {} });
  }, fe = (te) => {
    K.cancel(), C(te);
  };
  return /* @__PURE__ */ ce(No, { children: [
    /* @__PURE__ */ ce("div", { className: I ? `${wt.mainContainer} ${I}` : wt.mainContainer, children: [
      R.get(t, "searchable", !0) && /* @__PURE__ */ k(
        "div",
        {
          className: wt.searchContainer,
          style: {
            justifyContent: R.get(t, "searchPosition", "flex-start"),
            width: R.get(t, "width", "100%")
          },
          children: /* @__PURE__ */ ce("div", { className: wt.searchWrapper, children: [
            !E && /* @__PURE__ */ k(
              cd,
              {
                className: wt.searchInput,
                name: "searchString",
                disabled: R.get(t, "searchDisabled", !1),
                onKeyUp: K,
                onChange: (te) => {
                  fe(te.target.value);
                },
                placeholder: "Buscar",
                value: S,
                onClear: Q,
                dropdown: {
                  disabled: R.get(t, "searchDisabled", !1),
                  options: T,
                  name: "searchField",
                  onChange: (te, { value: V }) => {
                    H(V), R.isEmpty(S) || $({ newField: V });
                  },
                  value: B
                }
              }
            ),
            R.get(t, "filterButton", !0) && /* @__PURE__ */ k(
              dt,
              {
                disabled: R.get(t, "searchDisabled", !1),
                className: `${wt.filterButton} ${R.get(t, "hideOnMobile", !1) ? wt.hideOnMobile : ""}`,
                onClick: () => {
                  z(!0);
                },
                children: /* @__PURE__ */ k(Be, { className: wt.addButtonIcon, name: "filter" })
              }
            ),
            E && /* @__PURE__ */ ce(dt, { className: wt.clearButton, onClick: pe, children: [
              /* @__PURE__ */ k(Be, { name: "filter" }),
              "Limpiar"
            ] })
          ] })
        }
      ),
      !R.isEmpty(u) && /* @__PURE__ */ k("div", { className: wt.topButtonsDesktop, children: le() }),
      /* @__PURE__ */ ce("div", { className: wt.addButtonsContainer, children: [
        !R.isEmpty(r) && /* @__PURE__ */ k("div", { className: wt.addButtonContainer, children: /* @__PURE__ */ ce(
          dt,
          {
            className: wt.addButton,
            disabled: R.get(r, "disabled", !1),
            onClick: s || (() => c("Add", null)),
            children: [
              /* @__PURE__ */ k(Be, { className: wt.addButtonIcon, name: R.get(r, "icon", "plus") }),
              R.get(r, "label", "")
            ]
          }
        ) }),
        o,
        R.get(e, "printable", !0) && /* @__PURE__ */ ce("div", { className: O ? wt.hidePrintButtonsMobile : "", children: [
          R.get(e, "visiblePDF", !0) && /* @__PURE__ */ k(dt, { onClick: U, className: wt.printButton, primary: !0, icon: "print" }),
          R.get(e, "visibleExcel", !0) && /* @__PURE__ */ k(dt, { className: wt.exelButton, icon: "file excel", onClick: j })
        ] })
      ] })
    ] }),
    !R.isEmpty(u) && /* @__PURE__ */ k("div", { className: wt.secondLine, children: le() }),
    de ? /* @__PURE__ */ k("div", { style: { display: "none" }, children: /* @__PURE__ */ k("div", { ref: ge, children: /* @__PURE__ */ k(
      Vx,
      {
        data: m,
        headerDetail: F,
        columns: n,
        sumData: _,
        clickedRowColor: b,
        handlerTable: c,
        printHeader: R.get(e, "printHeader", {
          company: "Compañía",
          title: "Título",
          user: "Usuario"
        }),
        customPrintHeader: e.customPrintHeader,
        searchParams: d,
        setSearchParams: p,
        dataHandler: h
      }
    ) }) }) : void 0,
    ee ? /* @__PURE__ */ k(jY, { data: re, headers: ve, filename: R.get(e, "printHeader.title", "Título"), ref: ke }) : void 0,
    ne && /* @__PURE__ */ k(
      Kx,
      {
        onClose: () => {
          z(!1);
        },
        customSearchKeys: y,
        searchableItems: Pe,
        searchParams: d,
        setSearchParams: p,
        dataHandler: h,
        formData: se,
        setFormData: Ee,
        setIsClearButton: A,
        clearFilter: pe
      }
    )
  ] });
};
Zx.propTypes = {
  addButton: l.object,
  searchParams: l.object,
  searcher: l.object,
  sumData: l.object,
  totalRows: l.number,
  print: l.object,
  customSearchKeys: l.array,
  columns: l.array,
  topButtons: l.array,
  customPrintHeader: l.array,
  handlerTable: l.func,
  setSearchParams: l.func,
  dataHandler: l.func,
  filteredPrintData: l.array,
  clickedRowColor: l.string,
  isClearButton: l.bool,
  setIsClearButton: l.func,
  headerDetail: l.object,
  searchRefresh: l.bool,
  onAddButtonClick: l.func,
  topPlaceClassName: l.string,
  hidePrintButtons: l.bool,
  extraAddButtons: l.node
};
const B8 = "_tableDesktopOnly_11faq_1", W8 = "_cardsContainerMobile_11faq_21", U8 = "_tableScroll_11faq_85", j8 = "_tableScrollWrapper_11faq_97", z8 = "_tableWidthAuto_11faq_107", H8 = "_stickyFooterTable_11faq_117", ui = {
  tableDesktopOnly: B8,
  cardsContainerMobile: W8,
  tableScroll: U8,
  tableScrollWrapper: j8,
  tableWidthAuto: z8,
  stickyFooterTable: H8
}, Y8 = ({
  data: e = [],
  columns: t = [],
  topButtons: n = [],
  customSearchKeys: r = [],
  headerDetail: o = {},
  clickedRowColor: s = "hsl(215, 75%, 80%)",
  searcher: u = {},
  searchRefresh: c = !1,
  print: d = {
    printHeader: { company: "Compañía", title: "Título", user: "Usuario" },
    visiblePDF: !1,
    visibleExcel: !1,
    printable: !1
  },
  visibleTopPlace: p = !0,
  visiblePagination: h = !0,
  defaultParams: m = { rows: 10, page: 1 },
  totalRows: v = 0,
  setRowStyle: y,
  addButton: b = {},
  extraAddButtons: _ = null,
  showAddButton: E = !0,
  onAddButtonClick: A,
  filteredPrintData: F,
  checkAllData: x,
  onChangeDeselect: I = !0,
  sumData: O = {},
  handlerTable: S,
  dataHandler: C,
  handlerMultiple: T = () => {
  },
  cafParams: N,
  cafClearButton: B = !1,
  widthAuto: H = !1,
  mobileCardView: ne = !1,
  cardLine1: z = [],
  cardLine2: re = [],
  cardLine3: he = [],
  cardLine4: ve = [],
  onLoadMore: Te = null,
  // Handler personalizado para scroll infinito
  isLoadingMore: de = !1,
  // Estado de carga para scroll infinito
  hasMore: ye = null,
  // Si hay más datos (si es null, se calcula automáticamente)
  mergeConfig: ee = null,
  // Configuración para merge automático en scroll infinito
  topPlaceClassName: oe = "",
  // Clase CSS personalizada para TopPlace
  hidePrintButtons: se = !1,
  // Oculta los botones de imprimir PDF y Excel
  scrollBody: Ee = !1,
  // Envuelve la tabla en un contenedor con scroll para que solo el body haga scroll
  downloadFileFetcher: Pe
}) => {
  const [Se, ge] = ot({ rows: 10, page: 1 }), [ke, De] = ot(!1), [U, j] = ot([]), [$, D] = ot([]), [G, K] = ot(!1), le = {
    searchable: !0,
    searchPosition: "flex-start",
    searchDisabled: !1,
    filterButton: !0,
    searchString: "",
    field: "",
    allEnabled: !0,
    width: "100%"
  };
  return Zt(() => {
    ge({ ...Se, ...m });
  }, []), Zt(() => {
    K(B);
  }, [B]), Zt(() => {
    R.isEmpty(N) || R.isEqual(Se, N) || ge(N);
  }, [N]), /* @__PURE__ */ ce(No, { children: [
    p && /* @__PURE__ */ k(
      Zx,
      {
        data: e,
        columns: t,
        topButtons: n,
        searcher: { ...le, ...u },
        searchRefresh: c,
        addButton: E ? b : null,
        extraAddButtons: _,
        onAddButtonClick: A,
        searchParams: Se,
        setSearchParams: ge,
        handlerTable: S,
        dataHandler: C,
        filteredPrintData: F,
        totalRows: v,
        print: d,
        headerDetail: o,
        defaultParams: m,
        customSearchKeys: r,
        sumData: O,
        isClearButton: G,
        setIsClearButton: K,
        topPlaceClassName: oe,
        hidePrintButtons: se
      }
    ),
    ne && /* @__PURE__ */ k("div", { className: ui.cardsContainerMobile, children: /* @__PURE__ */ k(
      ld,
      {
        data: e,
        columns: t,
        headerDetail: o,
        sumData: O,
        clickedRowColor: s,
        handlerTable: S,
        handlerMultiple: T,
        onChangeDeselect: I,
        concatValue: U,
        setConcatValue: j,
        concatKeys: $,
        setConcatKeys: D,
        concatAll: ke,
        setConcatAll: De,
        checkAllData: x,
        setRowStyle: y,
        totalRows: v,
        mobileCardView: ne,
        cardLine1: z,
        cardLine2: re,
        cardLine3: he,
        cardLine4: ve,
        dataHandler: C,
        searchParams: Se,
        setSearchParams: ge,
        onLoadMore: Te,
        isLoadingMoreProp: de,
        hasMore: ye,
        mergeConfig: ee,
        downloadFileFetcher: Pe
      }
    ) }),
    /* @__PURE__ */ k("div", { className: `${Ee ? ui.tableScroll : ""} ${ui.tableScrollWrapper}`, children: /* @__PURE__ */ ce(
      yt,
      {
        sortable: !0,
        celled: !0,
        striped: !0,
        compact: "very",
        className: `${ne ? ui.tableDesktopOnly : ""} ${H ? ui.tableWidthAuto : ""}`,
        children: [
          /* @__PURE__ */ k(
            Gm,
            {
              columns: t,
              searchParams: Se,
              setSearchParams: ge,
              totalRows: v,
              dataHandler: C,
              concatValue: U,
              setConcatValue: j,
              concatKeys: $,
              setConcatKeys: D,
              concatAll: ke,
              setConcatAll: De,
              widthAuto: H
            }
          ),
          /* @__PURE__ */ k(
            ld,
            {
              data: e,
              columns: t,
              headerDetail: o,
              sumData: O,
              clickedRowColor: s,
              handlerTable: S,
              handlerMultiple: T,
              onChangeDeselect: I,
              concatValue: U,
              setConcatValue: j,
              concatKeys: $,
              setConcatKeys: D,
              concatAll: ke,
              setConcatAll: De,
              checkAllData: x,
              setRowStyle: y,
              totalRows: v,
              mobileCardView: !1,
              cardLine1: z,
              cardLine2: re,
              cardLine3: he,
              cardLine4: ve,
              downloadFileFetcher: Pe
            }
          )
        ]
      }
    ) }),
    h && /* @__PURE__ */ k(yt, { className: `${ne ? ui.tableDesktopOnly : ""} ${ui.stickyFooterTable}`, children: /* @__PURE__ */ k(
      Bx,
      {
        visiblePagination: h,
        searchParams: Se,
        setSearchParams: ge,
        dataHandler: C,
        totalRows: v
      }
    ) })
  ] });
};
Y8.propTypes = {
  columns: l.array,
  data: l.array,
  filteredPrintData: l.array,
  checkAllData: l.array,
  topButtons: l.array,
  customSearchKeys: l.array,
  clickedRowColor: l.string,
  visibleTopPlace: l.bool,
  visiblePagination: l.bool,
  onChangeDeselect: l.bool,
  cafClearButton: l.bool,
  searchRefresh: l.bool,
  addButton: l.object,
  extraAddButtons: l.node,
  showAddButton: l.bool,
  onAddButtonClick: l.func,
  defaultParams: l.object,
  print: l.object,
  searcher: l.object,
  sumData: l.object,
  cafParams: l.object,
  headerDetail: l.object,
  totalRows: l.number,
  handlerTable: l.func,
  dataHandler: l.func,
  handlerMultiple: l.func,
  setRowStyle: l.func,
  widthAuto: l.bool,
  mobileCardView: l.bool,
  cardLine1: l.array,
  cardLine2: l.array,
  cardLine3: l.array,
  cardLine4: l.array,
  onLoadMore: l.func,
  isLoadingMore: l.bool,
  hasMore: l.bool,
  mergeConfig: l.object,
  topPlaceClassName: l.string,
  hidePrintButtons: l.bool,
  scrollBody: l.bool,
  downloadFileFetcher: l.func
};
/*!
 * Compressor.js v1.3.0
 * https://fengyuanchen.github.io/compressorjs
 *
 * Copyright 2018-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2026-04-06T07:12:45.816Z
 */
function q8(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function E_(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Xx(r.key), r);
  }
}
function V8(e, t, n) {
  return t && E_(e.prototype, t), n && E_(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function G8(e, t, n) {
  return (t = Xx(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function ud() {
  return ud = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ud.apply(null, arguments);
}
function x_(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ou(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? x_(Object(n), !0).forEach(function(r) {
      G8(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : x_(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function K8(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Xx(e) {
  var t = K8(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
var Qx = { exports: {} };
(function(e) {
  typeof window > "u" || function(t) {
    var n = t.HTMLCanvasElement && t.HTMLCanvasElement.prototype, r = t.Blob && function() {
      try {
        return !!new Blob();
      } catch {
        return !1;
      }
    }(), o = r && t.Uint8Array && function() {
      try {
        return new Blob([new Uint8Array(100)]).size === 100;
      } catch {
        return !1;
      }
    }(), s = t.BlobBuilder || t.WebKitBlobBuilder || t.MozBlobBuilder || t.MSBlobBuilder, u = /^data:((.*?)(;charset=.*?)?)(;base64)?,/, c = (r || s) && t.atob && t.ArrayBuffer && t.Uint8Array && function(d) {
      var p, h, m, v, y, b, _, E, A;
      if (p = d.match(u), !p)
        throw new Error("invalid data URI");
      for (h = p[2] ? p[1] : "text/plain" + (p[3] || ";charset=US-ASCII"), m = !!p[4], v = d.slice(p[0].length), m ? y = atob(v) : y = decodeURIComponent(v), b = new ArrayBuffer(y.length), _ = new Uint8Array(b), E = 0; E < y.length; E += 1)
        _[E] = y.charCodeAt(E);
      return r ? new Blob([o ? _ : b], {
        type: h
      }) : (A = new s(), A.append(b), A.getBlob(h));
    };
    t.HTMLCanvasElement && !n.toBlob && (n.mozGetAsFile ? n.toBlob = function(d, p, h) {
      var m = this;
      setTimeout(function() {
        h && n.toDataURL && c ? d(c(m.toDataURL(p, h))) : d(m.mozGetAsFile("blob", p));
      });
    } : n.toDataURL && c && (n.msToBlob ? n.toBlob = function(d, p, h) {
      var m = this;
      setTimeout(function() {
        (p && p !== "image/png" || h) && n.toDataURL && c ? d(c(m.toDataURL(p, h))) : d(m.msToBlob(p));
      });
    } : n.toBlob = function(d, p, h) {
      var m = this;
      setTimeout(function() {
        d(c(m.toDataURL(p, h)));
      });
    })), e.exports ? e.exports = c : t.dataURLtoBlob = c;
  }(window);
})(Qx);
var C_ = Qx.exports, Z8 = function(t) {
  return typeof Blob > "u" ? !1 : t instanceof Blob || Object.prototype.toString.call(t) === "[object Blob]";
}, O_ = {
  /**
   * Indicates if output the original image instead of the compressed one
   * when the size of the compressed image is greater than the original one's
   * @type {boolean}
   */
  strict: !0,
  /**
   * Indicates if read the image's Exif Orientation information,
   * and then rotate or flip the image automatically.
   * @type {boolean}
   */
  checkOrientation: !0,
  /**
   * Indicates if retain the image's Exif information after compressed.
   * @type {boolean}
  */
  retainExif: !1,
  /**
   * The max width of the output image.
   * @type {number}
   */
  maxWidth: 1 / 0,
  /**
   * The max height of the output image.
   * @type {number}
   */
  maxHeight: 1 / 0,
  /**
   * The min width of the output image.
   * @type {number}
   */
  minWidth: 0,
  /**
   * The min height of the output image.
   * @type {number}
   */
  minHeight: 0,
  /**
   * The width of the output image.
   * If not specified, the natural width of the source image will be used.
   * @type {number}
   */
  width: void 0,
  /**
   * The height of the output image.
   * If not specified, the natural height of the source image will be used.
   * @type {number}
   */
  height: void 0,
  /**
   * Sets how the size of the image should be resized to the container
   * specified by the `width` and `height` options.
   * @type {string}
   */
  resize: "none",
  /**
   * The quality of the output image.
   * It must be a number between `0` and `1`,
   * and only available for `image/jpeg` and `image/webp` images.
   * Check out {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob canvas.toBlob}.
   * @type {number}
   */
  quality: 0.8,
  /**
   * The mime type of the output image.
   * By default, the original mime type of the source image file will be used.
   * @type {string}
   */
  mimeType: "auto",
  /**
   * Files whose file type is included in this list,
   * and whose file size exceeds the `convertSize` value will be converted to JPEGs.
   * @type {string｜Array}
   */
  convertTypes: ["image/png"],
  /**
   * PNG files over this size (5 MB by default) will be converted to JPEGs.
   * To disable this, just set the value to `Infinity`.
   * @type {number}
   */
  convertSize: 5e6,
  /**
   * The hook function to execute before draw the image into the canvas for compression.
   * @type {Function}
   * @param {CanvasRenderingContext2D} context - The 2d rendering context of the canvas.
   * @param {HTMLCanvasElement} canvas - The canvas for compression.
   * @example
   * function (context, canvas) {
   *   context.fillStyle = '#fff';
   * }
   */
  beforeDraw: null,
  /**
   * The hook function to execute after drew the image into the canvas for compression.
   * @type {Function}
   * @param {CanvasRenderingContext2D} context - The 2d rendering context of the canvas.
   * @param {HTMLCanvasElement} canvas - The canvas for compression.
   * @example
   * function (context, canvas) {
   *   context.filter = 'grayscale(100%)';
   * }
   */
  drew: null,
  /**
   * The hook function to execute when success to compress the image.
   * @type {Function}
   * @param {File} file - The compressed image File object.
   * @example
   * function (file) {
   *   console.log(file);
   * }
   */
  success: null,
  /**
   * The hook function to execute when fail to compress the image.
   * @type {Function}
   * @param {Error} err - An Error object.
   * @example
   * function (err) {
   *   console.log(err.message);
   * }
   */
  error: null
}, X8 = typeof window < "u" && typeof window.document < "u", Vo = X8 ? window : {}, dd = function(t) {
  return t > 0 && t < 1 / 0;
}, Q8 = Array.prototype.slice;
function xg(e) {
  return Array.from ? Array.from(e) : Q8.call(e);
}
var J8 = /^image\/.+$/;
function em(e) {
  return J8.test(e);
}
function eq(e) {
  var t = em(e) ? e.substr(6) : "";
  return t === "jpeg" && (t = "jpg"), ".".concat(t);
}
var Jx = String.fromCharCode;
function tq(e, t, n) {
  var r = "", o;
  for (n += t, o = t; o < n; o += 1)
    r += Jx(e.getUint8(o));
  return r;
}
function nq() {
  try {
    var e = document.createElement("canvas");
    e.width = 2, e.height = 1;
    var t = e.getContext("2d");
    if (!t) return !1;
    var n = t.createImageData(2, 1);
    n.data[0] = 12, n.data[1] = 23, n.data[2] = 34, n.data[3] = 255, n.data[4] = 45, n.data[5] = 56, n.data[6] = 67, n.data[7] = 255, t.putImageData(n, 0, 0);
    var r = t.getImageData(0, 0, 2, 1), o = [12, 23, 34, 255, 45, 56, 67, 255];
    return r.data.every(function(s, u) {
      return s === o[u];
    });
  } catch {
    return !1;
  }
}
var rq = Vo.btoa;
function S_(e, t) {
  for (var n = [], r = 8192, o = new Uint8Array(e); o.length > 0; )
    n.push(Jx.apply(null, xg(o.subarray(0, r)))), o = o.subarray(r);
  return "data:".concat(t, ";base64,").concat(rq(n.join("")));
}
function aq(e) {
  var t = new DataView(e), n;
  try {
    var r, o, s;
    if (t.getUint8(0) === 255 && t.getUint8(1) === 216)
      for (var u = t.byteLength, c = 2; c + 1 < u; ) {
        if (t.getUint8(c) === 255 && t.getUint8(c + 1) === 225) {
          o = c;
          break;
        }
        c += 1;
      }
    if (o) {
      var d = o + 4, p = o + 10;
      if (tq(t, d, 4) === "Exif") {
        var h = t.getUint16(p);
        if (r = h === 18761, (r || h === 19789) && t.getUint16(p + 2, r) === 42) {
          var m = t.getUint32(p + 4, r);
          m >= 8 && (s = p + m);
        }
      }
    }
    if (s) {
      var v = t.getUint16(s, r), y, b;
      for (b = 0; b < v; b += 1)
        if (y = s + b * 12 + 2, t.getUint16(y, r) === 274) {
          y += 8, n = t.getUint16(y, r), t.setUint16(y, 1, r);
          break;
        }
    }
  } catch {
    n = 1;
  }
  return n;
}
function oq(e) {
  var t = 0, n = 1, r = 1;
  switch (e) {
    case 2:
      n = -1;
      break;
    case 3:
      t = -180;
      break;
    case 4:
      r = -1;
      break;
    case 5:
      t = 90, r = -1;
      break;
    case 6:
      t = 90;
      break;
    case 7:
      t = 90, n = -1;
      break;
    case 8:
      t = -90;
      break;
  }
  return {
    rotate: t,
    scaleX: n,
    scaleY: r
  };
}
var iq = /\.\d*(?:0|9){12}\d*$/;
function T_(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
  return iq.test(e) ? Math.round(e * t) / t : e;
}
function _l(e) {
  var t = e.aspectRatio, n = e.height, r = e.width, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "none", s = dd(r), u = dd(n);
  if (s && u) {
    var c = n * t;
    (o === "contain" || o === "none") && c > r || o === "cover" && c < r ? n = r / t : r = n * t;
  } else s ? n = r / t : u && (r = n * t);
  return {
    width: r,
    height: n
  };
}
function sq(e) {
  for (var t = xg(new Uint8Array(e)), n = t.length, r = [], o = 0; o + 3 < n; ) {
    var s = t[o], u = t[o + 1];
    if (s === 255 && u === 218)
      break;
    if (s === 255 && u === 216)
      o += 2;
    else {
      var c = t[o + 2] * 256 + t[o + 3], d = o + c + 2, p = t.slice(o, d);
      r.push(p), o = d;
    }
  }
  return r.reduce(function(h, m) {
    return m[0] === 255 && m[1] === 225 ? h.concat(m) : h;
  }, []);
}
function lq(e, t) {
  var n = xg(new Uint8Array(e));
  if (n[2] !== 255 || n[3] !== 224)
    return e;
  var r = n[4] * 256 + n[5], o = [255, 216].concat(t, n.slice(4 + r));
  return new Uint8Array(o);
}
var cq = Vo.ArrayBuffer, Yp = Vo.FileReader, di = Vo.URL || Vo.webkitURL, uq = /\.\w+$/, dq = Vo.Compressor, fq = /* @__PURE__ */ function() {
  function e(t, n) {
    q8(this, e), this.file = t, this.exif = [], this.image = new Image(), this.options = Ou(Ou({}, O_), n), this.aborted = !1, this.result = null, this.init();
  }
  return V8(e, [{
    key: "init",
    value: function() {
      var n = this, r = this.file, o = this.options;
      if (!Z8(r)) {
        this.fail(new Error("The first argument must be a File or Blob object."));
        return;
      }
      var s = r.type;
      if (!em(s)) {
        this.fail(new Error("The first argument must be an image File or Blob object."));
        return;
      }
      if (!di || !Yp) {
        this.fail(new Error("The current browser does not support image compression."));
        return;
      }
      cq || (o.checkOrientation = !1, o.retainExif = !1);
      var u = s === "image/jpeg", c = u && o.checkOrientation, d = u && o.retainExif;
      if (di && !c && !d)
        this.load({
          url: di.createObjectURL(r)
        });
      else {
        var p = new Yp();
        this.reader = p, p.onload = function(h) {
          var m = h.target, v = m.result, y = {}, b = 1;
          c && (b = aq(v), b > 1 && ud(y, oq(b))), d && (n.exif = sq(v)), c || d ? !di || b > 1 ? y.url = S_(v, s) : y.url = di.createObjectURL(r) : y.url = v, n.load(y);
        }, p.onabort = function() {
          n.fail(new Error("Aborted to read the image with FileReader."));
        }, p.onerror = function() {
          n.fail(new Error("Failed to read the image with FileReader."));
        }, p.onloadend = function() {
          n.reader = null;
        }, c || d ? p.readAsArrayBuffer(r) : p.readAsDataURL(r);
      }
    }
  }, {
    key: "load",
    value: function(n) {
      var r = this, o = this.file, s = this.image;
      s.onload = function() {
        nq() ? r.draw(Ou(Ou({}, n), {}, {
          naturalWidth: s.naturalWidth,
          naturalHeight: s.naturalHeight
        })) : r.done({
          naturalWidth: s.naturalWidth,
          naturalHeight: s.naturalHeight,
          result: null
        });
      }, s.onabort = function() {
        r.fail(new Error("Aborted to load the image."));
      }, s.onerror = function() {
        r.fail(new Error("Failed to load the image."));
      }, Vo.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(Vo.navigator.userAgent) && (s.crossOrigin = "anonymous"), s.alt = o.name, s.src = n.url;
    }
  }, {
    key: "draw",
    value: function(n) {
      var r = this, o = n.naturalWidth, s = n.naturalHeight, u = n.rotate, c = u === void 0 ? 0 : u, d = n.scaleX, p = d === void 0 ? 1 : d, h = n.scaleY, m = h === void 0 ? 1 : h, v = this.file, y = this.image, b = this.options, _ = document.createElement("canvas"), E = _.getContext("2d"), A = Math.abs(c) % 180 === 90, F = (b.resize === "contain" || b.resize === "cover") && dd(b.width) && dd(b.height), x = Math.max(b.maxWidth, 0) || 1 / 0, I = Math.max(b.maxHeight, 0) || 1 / 0, O = Math.max(b.minWidth, 0) || 0, S = Math.max(b.minHeight, 0) || 0, C = o / s, T = b.width, N = b.height;
      if (A) {
        var B = [I, x];
        x = B[0], I = B[1];
        var H = [S, O];
        O = H[0], S = H[1];
        var ne = [N, T];
        T = ne[0], N = ne[1];
      }
      F && (C = T / N);
      var z = _l({
        aspectRatio: C,
        width: x,
        height: I
      }, "contain");
      x = z.width, I = z.height;
      var re = _l({
        aspectRatio: C,
        width: O,
        height: S
      }, "cover");
      if (O = re.width, S = re.height, F) {
        var he = _l({
          aspectRatio: C,
          width: T,
          height: N
        }, b.resize);
        T = he.width, N = he.height;
      } else {
        var ve = _l({
          aspectRatio: C,
          width: T,
          height: N
        }), Te = ve.width;
        T = Te === void 0 ? o : Te;
        var de = ve.height;
        N = de === void 0 ? s : de;
      }
      T = Math.floor(T_(Math.min(Math.max(T, O), x))), N = Math.floor(T_(Math.min(Math.max(N, S), I)));
      var ye = -T / 2, ee = -N / 2, oe = T, se = N, Ee = [];
      if (F) {
        var Pe = 0, Se = 0, ge = o, ke = s, De = _l({
          aspectRatio: C,
          width: o,
          height: s
        }, {
          contain: "cover",
          cover: "contain"
        }[b.resize]);
        ge = De.width, ke = De.height, Pe = (o - ge) / 2, Se = (s - ke) / 2, Ee.push(Pe, Se, ge, ke);
      }
      if (Ee.push(ye, ee, oe, se), A) {
        var U = [N, T];
        T = U[0], N = U[1];
      }
      _.width = T, _.height = N, em(b.mimeType) || (b.mimeType = v.type);
      var j = "transparent";
      v.size > b.convertSize && b.convertTypes.indexOf(b.mimeType) >= 0 && (b.mimeType = "image/jpeg");
      var $ = b.mimeType === "image/jpeg";
      if ($ && (j = "#fff"), E.fillStyle = j, E.fillRect(0, 0, T, N), b.beforeDraw && b.beforeDraw.call(this, E, _), !this.aborted && (E.save(), E.translate(T / 2, N / 2), E.rotate(c * Math.PI / 180), E.scale(p, m), E.drawImage.apply(E, [y].concat(Ee)), E.restore(), b.drew && b.drew.call(this, E, _), !this.aborted)) {
        var D = function(K) {
          if (!r.aborted) {
            var le = function(te) {
              return r.done({
                naturalWidth: o,
                naturalHeight: s,
                result: te
              });
            };
            if (K && $ && b.retainExif && r.exif && r.exif.length > 0) {
              var pe = function(te) {
                return le(C_(S_(lq(te, r.exif), b.mimeType)));
              };
              if (K.arrayBuffer)
                K.arrayBuffer().then(pe).catch(function() {
                  r.fail(new Error("Failed to read the compressed image with Blob.arrayBuffer()."));
                });
              else {
                var Q = new Yp();
                r.reader = Q, Q.onload = function(fe) {
                  var te = fe.target;
                  pe(te.result);
                }, Q.onabort = function() {
                  r.fail(new Error("Aborted to read the compressed image with FileReader."));
                }, Q.onerror = function() {
                  r.fail(new Error("Failed to read the compressed image with FileReader."));
                }, Q.onloadend = function() {
                  r.reader = null;
                }, Q.readAsArrayBuffer(K);
              }
            } else
              le(K);
          }
        };
        _.toBlob ? _.toBlob(D, b.mimeType, b.quality) : D(C_(_.toDataURL(b.mimeType, b.quality)));
      }
    }
  }, {
    key: "done",
    value: function(n) {
      var r = n.naturalWidth, o = n.naturalHeight, s = n.result, u = this.file, c = this.image, d = this.options;
      if (di && c.src.indexOf("blob:") === 0 && di.revokeObjectURL(c.src), s)
        if (d.strict && !d.retainExif && s.size > u.size && d.mimeType === u.type && !(d.width > r || d.height > o || d.minWidth > r || d.minHeight > o || d.maxWidth < r || d.maxHeight < o))
          s = u;
        else {
          var p = u.name;
          p && s.type !== u.type && (p = p.replace(uq, eq(s.type)));
          try {
            s = new File([s], p, {
              type: s.type
            });
          } catch {
            var h = /* @__PURE__ */ new Date();
            s.name = p, s.lastModified = h.getTime(), s.lastModifiedDate = h;
          }
        }
      else
        s = u;
      this.result = s, d.success && d.success.call(this, s);
    }
  }, {
    key: "fail",
    value: function(n) {
      var r = this.options;
      if (r.error)
        r.error.call(this, n);
      else
        throw n;
    }
  }, {
    key: "abort",
    value: function() {
      this.aborted || (this.aborted = !0, this.reader ? this.reader.abort() : this.image.complete ? this.fail(new Error("The compression process has been aborted.")) : (this.image.onload = null, this.image.onabort()));
    }
    /**
     * Get the no conflict compressor class.
     * @returns {Compressor} The compressor class.
     */
  }], [{
    key: "noConflict",
    value: function() {
      return window.Compressor = dq, e;
    }
    /**
     * Change the default options.
     * @param {Object} options - The new default options.
     */
  }, {
    key: "setDefaults",
    value: function(n) {
      ud(O_, n);
    }
  }]);
}();
//! moment.js locale configuration
//! locale : Spanish [es]
//! author : Julio Napurí : https://github.com/julionc
var P_ = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split(
  "_"
), pq = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), qp = [
  /^ene/i,
  /^feb/i,
  /^mar/i,
  /^abr/i,
  /^may/i,
  /^jun/i,
  /^jul/i,
  /^ago/i,
  /^sep/i,
  /^oct/i,
  /^nov/i,
  /^dic/i
], k_ = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
Me.defineLocale("es", {
  months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
    "_"
  ),
  monthsShort: function(e, t) {
    return e ? /-MMM-/.test(t) ? pq[e.month()] : P_[e.month()] : P_;
  },
  monthsRegex: k_,
  monthsShortRegex: k_,
  monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
  monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
  monthsParse: qp,
  longMonthsParse: qp,
  shortMonthsParse: qp,
  weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
  weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
  weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
  weekdaysParseExact: !0,
  longDateFormat: {
    LT: "H:mm",
    LTS: "H:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D [de] MMMM [de] YYYY",
    LLL: "D [de] MMMM [de] YYYY H:mm",
    LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
  },
  calendar: {
    sameDay: function() {
      return "[hoy a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
    },
    nextDay: function() {
      return "[mañana a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
    },
    nextWeek: function() {
      return "dddd [a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
    },
    lastDay: function() {
      return "[ayer a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
    },
    lastWeek: function() {
      return "[el] dddd [pasado a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
    },
    sameElse: "L"
  },
  relativeTime: {
    future: "en %s",
    past: "hace %s",
    s: "unos segundos",
    ss: "%d segundos",
    m: "un minuto",
    mm: "%d minutos",
    h: "una hora",
    hh: "%d horas",
    d: "un día",
    dd: "%d días",
    w: "una semana",
    ww: "%d semanas",
    M: "un mes",
    MM: "%d meses",
    y: "un año",
    yy: "%d años"
  },
  dayOfMonthOrdinalParse: /\d{1,2}º/,
  ordinal: "%dº",
  week: {
    dow: 1,
    // Monday is the first day of the week.
    doy: 4
    // The week that contains Jan 4th is the first week of the year.
  },
  invalidDate: "Fecha inválida"
});
Me.locale("es");
const hq = (e) => new Promise((t, n) => {
  new fq(e, {
    quality: 0.6,
    maxHeight: 1024,
    maxWidth: 1024,
    success(r) {
      t(r);
    },
    error(r) {
      n(r);
    }
  });
}), mq = (e = "") => {
  const t = R.split(e, ".");
  return R.toLower(t.length > 1 ? t.pop() : "");
}, gq = (e = "") => {
  const t = String(e).match(/^data:([^;]+);base64,/i), n = t ? R.toLower(t[1]) : "";
  return R.startsWith(n, "image/") ? "image" : R.startsWith(n, "audio/") ? "audio" : R.startsWith(n, "video/") ? "video" : n === "application/pdf" || R.includes(n, "pdf") ? "pdf" : R.includes(n, "word") || R.includes(n, "officedocument.wordprocessingml") ? "doc" : R.includes(n, "excel") || R.includes(n, "spreadsheetml") ? "xls" : R.includes(n, "powerpoint") || R.includes(n, "presentationml") ? "ppt" : R.includes(n, "zip") || R.includes(n, "x-7z-compressed") || R.includes(n, "x-rar-compressed") ? "zip" : R.includes(n, "text/") ? "txt" : "file";
}, Gs = (e = []) => ` ${R.join(e, " ")} `, ns = (e, t) => {
  const n = ` ${R.trim(R.toLower(t))} `;
  return R.includes(e, n);
}, vq = Gs(["doc", "docx"]), yq = Gs(["xls", "xlsx", "csv"]), bq = Gs(["ppt", "pptx"]), _q = Gs(["zip", "rar", "7z"]), wq = Gs(["txt", "md", "rtf"]), Eq = Gs(["jpg", "jpeg", "png", "webp", "apng", "avif", "gif", "svg"]), N_ = (e = "", t = "") => {
  const n = R.toLower(t);
  if (n && R.startsWith(n, "image/")) return "image";
  if (n && R.startsWith(n, "audio/")) return "audio";
  if (n && R.startsWith(n, "video/")) return "video";
  const r = mq(e);
  return r === "pdf" ? "pdf" : ns(vq, r) ? "doc" : ns(yq, r) ? "xls" : ns(bq, r) ? "ppt" : ns(_q, r) ? "zip" : ns(wq, r) ? "txt" : ns(Eq, r) ? "image" : "file";
}, Su = (e, t) => {
  if (!e)
    return "-";
  const n = Me(e);
  return n.isValid() ? n.format(t) : "-";
};
function xq(e) {
  if (Number.isNaN(Number(e))) return "";
  const t = Math.floor(e / 60), n = Math.floor(t / 60), r = Math.floor(n / 24), o = n - r * 24, s = t - o * 60 - r * 24 * 60;
  return o < 1 ? `${s}m` : r < 1 ? `${o}h ${s}m` : `${r}d ${o}h ${s}m`;
}
const Cq = "_header_19o3d_3", Oq = "_inputSearch_19o3d_17", Sq = "_totalTime_19o3d_31", Tq = "_spaceClass_19o3d_43", Pq = "_nuevo_19o3d_51", kq = "_atender_19o3d_61", Nq = "_cliente_19o3d_71", Iq = "_alertBadge_19o3d_81", Aq = "_icon_19o3d_99", Rq = "_headerTable_19o3d_107", Mq = "_headerFooter_19o3d_119", Dq = "_cell_19o3d_129", Lq = "_container_19o3d_143", Fq = "_containerCenter_19o3d_155", $q = "_containerLeft_19o3d_167", Bq = "_containerUs_19o3d_181", Wq = "_containerPrincipa_19o3d_195", Uq = "_fixedUserInfo_19o3d_207", jq = "_containerRightUserRow_19o3d_217", zq = "_containerTell_19o3d_229", Hq = "_containerRightUserRowContainer_19o3d_245", Yq = "_headerLabel_19o3d_257", qq = "_pDate_19o3d_269", Vq = "_headerTitlesss_19o3d_289", Gq = "_headerTitlesssDate_19o3d_299", Kq = "_containerTelu_19o3d_311", Zq = "_containerRight_19o3d_217", Xq = "_containerBottom_19o3d_335", Qq = "_containerLeftUser_19o3d_343", Jq = "_containerLeftGroups_19o3d_357", eV = "_containerRightUser_19o3d_217", tV = "_headerTitle_19o3d_289", nV = "_tableContainer_19o3d_391", rV = "_containerCont_19o3d_401", aV = "_arrayCellContainer_19o3d_409", oV = "_arrayCell_19o3d_409", iV = "_DesConectadoText_19o3d_445", sV = "_conectadoText_19o3d_455", lV = "_cellButton_19o3d_465", cV = "_cellArrayButton_19o3d_479", uV = "_tableCell_19o3d_497", dV = "_headerMenu_19o3d_509", fV = "_headerMenuItem_19o3d_517", pV = "_tableCellHeader_19o3d_525", hV = "_tableCellHeaderCheck_19o3d_537", mV = "_tableCellHeaderIcon_19o3d_545", gV = "_tableCellPag_19o3d_553", vV = "_ColorActive_19o3d_561", yV = "_groupHover_19o3d_569", bV = "_emptyChat_19o3d_579", _V = "_ButtonEraser_19o3d_589", wV = "_ButtonRoute_19o3d_603", EV = "_ButtonEdit_19o3d_617", xV = "_ButtonIcon_19o3d_631", CV = "_ButtonLabel_19o3d_643", OV = "_ButtonLink_19o3d_651", SV = "_ButtonPedidos_19o3d_667", TV = "_ButtonResend_19o3d_691", PV = "_linkMap_19o3d_705", kV = "_ButtonMap_19o3d_731", NV = "_weightText_19o3d_787", IV = "_positiveButton_19o3d_795", AV = "_multipleActions_19o3d_811", RV = "_positiveAddButton_19o3d_821", MV = "_positiveDesButton_19o3d_837", DV = "_negativeButton_19o3d_855", LV = "_menuTable_19o3d_879", FV = "_iconTable_19o3d_887", $V = "_detalleLabel_19o3d_911", BV = "_modalHeader_19o3d_921", WV = "_codeMap_19o3d_933", UV = "_paginationLabel_19o3d_941", jV = "_paginationCell_19o3d_949", zV = "_pagination_19o3d_941", HV = "_itemCount_19o3d_971", YV = "_labelColor_19o3d_979", qV = "_blockString_19o3d_993", VV = "_emptyDataIcon_19o3d_1009", GV = "_IconDataBase_19o3d_1025", KV = "_labelDropdown_19o3d_1033", ZV = "_searchContainer_19o3d_1055", XV = "_rowMiddle_19o3d_1065", QV = "_printButton_19o3d_1081", JV = "_exelButton_19o3d_1091", eG = "_printableButtons_19o3d_1099", tG = "_searchInputStyle_19o3d_1109", at = {
  header: Cq,
  inputSearch: Oq,
  totalTime: Sq,
  spaceClass: Tq,
  nuevo: Pq,
  atender: kq,
  cliente: Nq,
  alertBadge: Iq,
  icon: Aq,
  headerTable: Rq,
  headerFooter: Mq,
  cell: Dq,
  container: Lq,
  containerCenter: Fq,
  containerLeft: $q,
  containerUs: Bq,
  containerPrincipa: Wq,
  fixedUserInfo: Uq,
  containerRightUserRow: jq,
  containerTell: zq,
  containerRightUserRowContainer: Hq,
  headerLabel: Yq,
  pDate: qq,
  headerTitlesss: Vq,
  headerTitlesssDate: Gq,
  containerTelu: Kq,
  containerRight: Zq,
  containerBottom: Xq,
  containerLeftUser: Qq,
  containerLeftGroups: Jq,
  containerRightUser: eV,
  headerTitle: tV,
  tableContainer: nV,
  containerCont: rV,
  arrayCellContainer: aV,
  arrayCell: oV,
  DesConectadoText: iV,
  conectadoText: sV,
  cellButton: lV,
  cellArrayButton: cV,
  tableCell: uV,
  headerMenu: dV,
  headerMenuItem: fV,
  tableCellHeader: pV,
  tableCellHeaderCheck: hV,
  tableCellHeaderIcon: mV,
  tableCellPag: gV,
  ColorActive: vV,
  groupHover: yV,
  emptyChat: bV,
  ButtonEraser: _V,
  ButtonRoute: wV,
  ButtonEdit: EV,
  ButtonIcon: xV,
  ButtonLabel: CV,
  ButtonLink: OV,
  ButtonPedidos: SV,
  ButtonResend: TV,
  linkMap: PV,
  ButtonMap: kV,
  weightText: NV,
  positiveButton: IV,
  multipleActions: AV,
  positiveAddButton: RV,
  positiveDesButton: MV,
  negativeButton: DV,
  menuTable: LV,
  iconTable: FV,
  detalleLabel: $V,
  modalHeader: BV,
  codeMap: WV,
  paginationLabel: UV,
  paginationCell: jV,
  pagination: zV,
  itemCount: HV,
  labelColor: YV,
  blockString: qV,
  emptyDataIcon: VV,
  IconDataBase: GV,
  labelDropdown: KV,
  searchContainer: ZV,
  rowMiddle: XV,
  printButton: QV,
  exelButton: JV,
  printableButtons: eG,
  searchInputStyle: tG
}, eC = ({
  renderData: e,
  printHeader: t,
  printAction: n,
  printActionRetry: r,
  hiddenButon: o,
  clientName: s,
  clientPhone: u,
  platform: c,
  tags: d = [],
  group: p,
  state: h,
  alertColor: m,
  alertName: v,
  hideClientInfo: y = !1,
  createdDate: b,
  handleBeforeGetContent: _ = !1,
  forceLeftUserInfo: E = !0
}) => {
  const A = Ln(null), [F, x] = ot(0), I = F === 0 ? null : xq(F), O = E || R.isEmpty(s) && R.isEmpty(u) && R.isEmpty(d) && R.isEmpty(p);
  Zt(() => {
    n && S();
  }, [n]);
  const S = Eg.useReactToPrint({
    content: () => {
      if (!A.current || !e.current) return null;
      const C = document.createElement("div"), T = A.current.cloneNode(!0), N = e.current.cloneNode(!0), B = document.createElement("div");
      B.classList.add(at.tableContainer);
      const H = document.createElement("div");
      return H.classList.add(at.containerCont), B.appendChild(H).appendChild(N), C.appendChild(T).appendChild(B), C;
    },
    onBeforeGetContent: async () => {
      if (_) {
        const C = Math.floor(Me.duration(Me().diff(Me(b))).asSeconds());
        x(C);
      }
      await new Promise((C) => setTimeout(C, 100));
    },
    onAfterPrint: () => {
      r();
    }
  });
  return /* @__PURE__ */ ce("div", { children: [
    !o && /* @__PURE__ */ k(dt, { onClick: S, className: at.printButton, primary: !0, icon: "print" }),
    /* @__PURE__ */ k("div", { style: { display: "none" }, children: /* @__PURE__ */ ce("div", { className: at.container, ref: A, children: [
      /* @__PURE__ */ k("div", { className: at.containerCenter, children: /* @__PURE__ */ ce(qn, { as: "h2", icon: !0, children: [
        /* @__PURE__ */ k("span", { className: at.titleText, children: t.company }),
        /* @__PURE__ */ k(qn.Subheader, { children: t.title }),
        (I || h || v) && /* @__PURE__ */ ce(qn.Subheader, { className: at.totalInfoRow, children: [
          /* @__PURE__ */ k("span", { className: `${at.tag} ${at[h.toLowerCase().replace(/\s+/g, "")]}`, children: "Tab " }),
          h && /* @__PURE__ */ k("span", { className: `${at.tag} ${at[h.toLowerCase().replace(/\s+/g, "")]}`, children: h }),
          I && /* @__PURE__ */ k("span", { className: at.spaceClass, children: I }),
          v && /* @__PURE__ */ k("span", { className: at.alertBadge, style: { backgroundColor: m }, children: v })
        ] }),
        !R.isEmpty(t.subTitle) && /* @__PURE__ */ k(qn.Subheader, { children: t.subTitle })
      ] }) }),
      !y && /* @__PURE__ */ ce("div", { className: at.containerBottom, children: [
        /* @__PURE__ */ ce("div", { className: at.containerLeft, children: [
          /* @__PURE__ */ ce("div", { children: [
            /* @__PURE__ */ k("span", { className: at.headerTitle, children: "Cliente:" }),
            " ",
            s
          ] }),
          R.isEmpty(d) && R.isEmpty(u) && /* @__PURE__ */ ce("div", { className: at.pDate, children: [
            /* @__PURE__ */ k("span", { className: at.headerTitlesss, children: "Usuario:" }),
            /* @__PURE__ */ k("span", { children: t.user })
          ] })
        ] }),
        /* @__PURE__ */ ce("div", { className: at.containerLeftUser, children: [
          /* @__PURE__ */ ce("div", { children: [
            /* @__PURE__ */ k("span", { className: at.headerTitle, children: "Canal:" }),
            " ",
            c
          ] }),
          !R.isEmpty(d) && R.isEmpty(u) && R.isEmpty(p) && /* @__PURE__ */ ce("div", { className: at.pDate, children: [
            /* @__PURE__ */ k("span", { className: at.headerTitlesss, children: "Usuario:" }),
            /* @__PURE__ */ k("span", { children: t.user })
          ] }),
          R.isEmpty(d) && !R.isEmpty(u) && R.isEmpty(p) && /* @__PURE__ */ ce("div", { className: at.pDate, children: [
            /* @__PURE__ */ k("span", { className: at.headerTitlesss, children: "Usuario:" }),
            /* @__PURE__ */ k("span", { children: t.user })
          ] }),
          R.isEmpty(d) && R.isEmpty(u) && R.isEmpty(p) && /* @__PURE__ */ ce("div", { className: at.pDate, children: [
            /* @__PURE__ */ k("span", { className: at.headerTitlesssDate, children: "Fecha:" }),
            /* @__PURE__ */ k("span", { children: Su(/* @__PURE__ */ new Date(), "DD/MM/YYYY, hh:mm A") })
          ] })
        ] }),
        !R.isEmpty(u) && /* @__PURE__ */ ce("div", { className: at.containerTelu, children: [
          /* @__PURE__ */ ce("div", { children: [
            /* @__PURE__ */ k("span", { className: at.headerTitle, children: "Teléfono:" }),
            " ",
            u
          ] }),
          R.isEmpty(d) && !R.isEmpty(p) ? /* @__PURE__ */ ce("div", { className: at.pDate, children: [
            /* @__PURE__ */ k("span", { className: at.headerTitlesss, children: "Usuario:" }),
            /* @__PURE__ */ k("span", { children: t.user })
          ] }) : R.isEmpty(d) && R.isEmpty(p) ? /* @__PURE__ */ ce("div", { className: at.pDate, children: [
            /* @__PURE__ */ k("span", { className: at.headerTitlesssDate, children: "Fecha:" }),
            /* @__PURE__ */ k("span", { children: Su(/* @__PURE__ */ new Date(), "DD/MM/YYYY, hh:mm A") })
          ] }) : null
        ] }),
        !R.isEmpty(d) && /* @__PURE__ */ ce("div", { className: at.containerLeftUser, children: [
          /* @__PURE__ */ ce("div", { children: [
            /* @__PURE__ */ k("span", { className: at.headerTitle, children: "Etiquetas:" }),
            R.map(d, (C, T) => /* @__PURE__ */ ce("span", { className: at.tag, children: [
              C.name,
              T < d.length - 1 && /* @__PURE__ */ k("span", { children: ", " })
            ] }, T))
          ] }),
          !R.isEmpty(p) && /* @__PURE__ */ ce("div", { className: at.pDate, children: [
            /* @__PURE__ */ k("span", { className: at.headerTitlesss, children: "Usuario:" }),
            /* @__PURE__ */ k("span", { children: t.user })
          ] })
        ] }),
        !R.isEmpty(p) && /* @__PURE__ */ ce("div", { className: at.containerLeftUser, children: [
          /* @__PURE__ */ ce("div", { className: at.containerLeftGroups, children: [
            /* @__PURE__ */ k("span", { className: at.headerTitle, children: "Grupo:" }),
            " ",
            p
          ] }),
          /* @__PURE__ */ ce("div", { className: at.pDate, children: [
            /* @__PURE__ */ k("span", { className: at.headerTitlesssDate, children: "Fecha:" }),
            /* @__PURE__ */ k("span", { children: Su(/* @__PURE__ */ new Date(), "DD/MM/YYYY, hh:mm A") })
          ] })
        ] })
      ] }),
      y && /* @__PURE__ */ k("div", { className: `${at.fixedUserInfo} ${O ? at.containerLeftUser : ""}`, children: /* @__PURE__ */ ce("div", { className: at.containerRightUserRowContainer, children: [
        /* @__PURE__ */ ce("div", { className: at.containerRightUserRow, children: [
          /* @__PURE__ */ k("span", { className: at.headerLabel, children: "Usuario:" }),
          " ",
          /* @__PURE__ */ k("span", { children: t.user })
        ] }),
        /* @__PURE__ */ ce("div", { className: at.containerRightUserRow, children: [
          /* @__PURE__ */ k("span", { className: at.headerLabel, children: "Fecha:" }),
          " ",
          /* @__PURE__ */ k("span", { children: Su(/* @__PURE__ */ new Date(), "DD/MM/YYYY, hh:mm A") })
        ] })
      ] }) })
    ] }) })
  ] });
};
eC.propTypes = {
  renderData: l.any,
  printHeader: l.object,
  hiddenButon: l.bool,
  printAction: l.bool,
  printActionRetry: l.func,
  clientName: l.string,
  clientPhone: l.string,
  platform: l.string,
  tags: l.array,
  group: l.any,
  state: l.string,
  alertName: l.string,
  alertColor: l.string,
  hideClientInfo: l.bool,
  createdDate: l.string,
  handleBeforeGetContent: l.bool,
  forceLeftUserInfo: l.bool
};
const nG = "_attachmentsContainer_qhj1t_1", rG = "_attachment_qhj1t_1", aG = "_noShowInput_qhj1t_71", oG = "_image_qhj1t_79", iG = "_icon_qhj1t_93", sG = "_fileButton_qhj1t_111", lG = "_fileButtonLabel_qhj1t_159", cG = "_fixedIcon_qhj1t_179", uG = "_stateIndicator_qhj1t_195", dG = "_rounded_qhj1t_241", fG = "_roundedImage_qhj1t_249", pG = "_printImageWrapper_qhj1t_259", hG = "_printImageOnly_qhj1t_283", Sn = {
  attachmentsContainer: nG,
  attachment: rG,
  noShowInput: aG,
  image: oG,
  icon: iG,
  fileButton: sG,
  fileButtonLabel: lG,
  fixedIcon: cG,
  stateIndicator: uG,
  rounded: dG,
  roundedImage: fG,
  printImageWrapper: pG,
  printImageOnly: hG
}, I_ = {
  pdf: "file pdf",
  doc: "file word",
  xls: "file excel",
  ppt: "file powerpoint",
  zip: "file archive",
  txt: "file text",
  audio: "music",
  video: "video",
  file: "file outline"
}, A_ = {
  pdf: "red",
  doc: "blue",
  xls: "green",
  ppt: "orange",
  zip: "grey",
  txt: "grey",
  audio: "teal",
  video: "purple",
  file: "grey"
}, tC = ({
  downloadFileFetcher: e,
  images: t = [],
  setImages: n,
  imagesD: r = [],
  setImagesD: o = () => {
  },
  multiple: s = !1,
  disabled: u = !1,
  width: c = 3,
  height: d = 3,
  icon: p = "paperclip",
  iconSize: h = "large",
  // mini, tiny, small, large, big, huge, massive
  rounded: m = !1,
  showMode: v = !1,
  noremovesaved: y = !1,
  states: b = [],
  type: _ = "image",
  accept: E = null,
  emptyIcon: A = "image outline",
  companyName: F,
  userNames: x,
  clientName: I,
  clientPhone: O,
  platformName: S,
  tags: C = [],
  groupName: T
}) => {
  const [N, B] = ot([]), [H, ne] = ot({ open: !1, selectedImage: null }), [z, re] = ot(0), [he, ve] = ot(!1), Te = Ln(null), de = Ln([]), ye = Ln(null);
  Zt(() => {
    !R.isEmpty(t) && !R.isEqual(de.current, t) ? (async () => {
      const pe = await Promise.all(
        R.map(t, async (Q, fe) => {
          const te = String(Q).startsWith("data:"), V = String(Q).match(/^(http(?!s?:image)|image)/gi) === null && !te;
          let ae = Q;
          V && e && (ae = await e({ uri: Q }));
          let Ce = "file", Fe = "archivo";
          if (te)
            Ce = gq(String(Q)), N[fe] && N[fe].name && N[fe].name !== "archivo" && (Fe = N[fe].name);
          else if (typeof Q == "string") {
            const $e = String(Q).split(/[?#]/)[0];
            Ce = $e.match(/\.(jpg|jpeg|png|webp|apng|avif|gif|svg)$/i) ? "image" : N_($e);
            try {
              const Ve = decodeURIComponent($e);
              Ve.includes("/") && (Fe = Ve.substring(Ve.lastIndexOf("/") + 1));
            } catch {
              Fe = "archivo";
            }
          }
          return {
            link: ae,
            type: Ce,
            isLocal: te,
            name: Fe || "archivo",
            mime: ""
          };
        })
      );
      B(pe), de.current = t;
    })() : R.isEmpty(t) && (B([]), de.current = []);
  }, [t, e]);
  const ee = () => {
    Te.current.click();
  }, oe = (pe) => new Promise((Q) => {
    const fe = new FileReader();
    fe.onloadend = () => Q(fe.result), fe.readAsDataURL(pe);
  }), se = async (pe) => {
    pe.preventDefault();
    let Q = s ? [...t] : [], fe = s ? [...N] : [];
    for (const te of pe.target.files) {
      const V = te.type.startsWith("image/"), ae = (_ === "image" || _ === "file") && V;
      let Ce;
      if (ae) {
        const $e = await hq(te);
        Ce = await oe($e);
      } else
        Ce = await oe(te);
      const Fe = ae ? "image" : N_(te.name, te.type);
      Q = [...Q, Ce], fe = [
        ...fe,
        {
          link: URL.createObjectURL(te),
          type: Fe,
          isLocal: !0,
          name: te.name,
          mime: te.type
        }
      ];
    }
    B(fe), n(Q), Te.current.value = null;
  }, Ee = (pe) => {
    const Q = R.reject(N, (ae) => N.indexOf(ae) === pe), fe = R.find(t, (ae) => t.indexOf(ae) === pe), te = R.reject(t, (ae) => t.indexOf(ae) === pe);
    let V = [];
    s ? (fe == null ? void 0 : fe.length) > 100 ? V = [...r] : V = [...r, fe] : fe && fe.length > 100 ? V = [...r] : V = fe ? [fe] : [], B(Q), n(te), o(V);
  }, Pe = (pe, Q, fe = "archivo") => {
    if (Q === "video" || Q === "audio") {
      ne({ selectedImage: pe, open: !0 });
      return;
    }
    if (typeof pe == "string" && pe.startsWith("data:") && Q === "pdf") {
      const te = window.open("", "_blank");
      te ? fetch(pe).then((V) => V.blob()).then((V) => {
        const ae = URL.createObjectURL(V);
        te.location.href = ae, setTimeout(() => {
          te.document && (te.document.title = fe);
        }, 100);
      }) : window.open(pe, "_blank");
    } else {
      const te = document.createElement("a");
      te.href = pe, te.download = fe, te.target = "_blank", document.body.appendChild(te), te.click(), document.body.removeChild(te);
    }
  }, Se = () => {
    ne({ open: !1, selectedImage: null }), re(0);
  }, ge = () => re((pe) => pe <= 0 ? 270 : pe - 90), ke = () => re((pe) => pe >= 270 ? 0 : pe + 90), De = Eg.useReactToPrint({
    content: () => ye.current,
    onAfterPrint: () => {
      ve(!1);
    }
  });
  Zt(() => {
    he && De();
  }, [he]);
  const U = () => {
    ve(!0);
  }, j = (pe) => {
    if (!b || b.length === 0) return null;
    const Q = b.find((te) => pe.includes(te.path));
    return Q && { present: "#a6d7b0", late: "#f4b988" }[Q.markedAs] || null;
  }, $ = (pe) => {
    const Q = R.find(N, { link: pe }), fe = (Q == null ? void 0 : Q.type) === "video", te = (Q == null ? void 0 : Q.type) === "audio";
    let V;
    fe || te ? V = {
      type: "video",
      width: 1280,
      height: 720,
      autoPlay: !0,
      sources: [
        {
          src: pe,
          type: (Q == null ? void 0 : Q.mime) || (te ? "audio/mp3" : "video/mp4")
        }
      ],
      downloadUrl: pe,
      downloadFilename: (Q == null ? void 0 : Q.name) !== "archivo" ? Q == null ? void 0 : Q.name : te ? "audio.mp3" : "video.mp4"
    } : V = {
      src: pe,
      downloadFilename: Q && Q.name !== "archivo" ? Q.name : "imagen.png"
    };
    const ae = R.filter(N, (Ce) => Ce.type === "image" && Ce.link !== pe);
    return [
      V,
      ...R.map(ae, (Ce) => ({
        src: Ce.link,
        downloadFilename: Ce.name && Ce.name !== "archivo" ? Ce.name : "imagen.png"
      }))
    ];
  }, D = (pe) => {
    const Q = R.map(pe, (V, ae) => {
      const Ce = j(t[ae] || V.link), Fe = !u && !(y && !V.isLocal);
      return /* @__PURE__ */ ce(
        "div",
        {
          className: `${Sn.attachment} ${m ? Sn.rounded : ""}`,
          style: { width: `${c}rem`, height: `${d}rem` },
          children: [
            Fe && /* @__PURE__ */ k(
              Be,
              {
                className: Sn.fixedIcon,
                name: "close",
                onClick: () => Ee(ae)
              }
            ),
            Ce && /* @__PURE__ */ k("div", { className: Sn.stateIndicator, style: { backgroundColor: Ce } }),
            V.type === "image" ? /* @__PURE__ */ k(
              _r,
              {
                className: `${Sn.image} ${m ? Sn.roundedImage : ""}`,
                src: V.link,
                alt: V.name || "",
                onClick: () => ne({ selectedImage: V.link, open: !0 })
              }
            ) : /* @__PURE__ */ ce(
              "button",
              {
                type: "button",
                className: Sn.fileButton,
                onClick: () => Pe(V.link, V.type, V.name),
                "aria-label": `Vista previa ${V.name || "archivo"}`,
                children: [
                  /* @__PURE__ */ k(
                    Be,
                    {
                      className: Sn.icon,
                      name: I_[V.type] || I_.file,
                      color: A_[V.type] || A_.file,
                      size: h
                    }
                  ),
                  !!V.name && V.name !== "archivo" && V.type !== "pdf" && V.type !== "doc" && /* @__PURE__ */ k("div", { className: Sn.fileButtonLabel, children: V.name })
                ]
              }
            )
          ]
        },
        ae + 1
      );
    }), fe = /* @__PURE__ */ ce(
      dt,
      {
        className: `${Sn.attachment} ${m ? Sn.rounded : ""}`,
        icon: !0,
        primary: !0,
        onClick: ee,
        style: { width: `${c}rem`, height: `${d}rem` },
        children: [
          /* @__PURE__ */ k(Be, { name: p, size: h }),
          /* @__PURE__ */ k(
            "input",
            {
              className: Sn.noShowInput,
              ref: Te,
              type: "file",
              accept: E || (_ === "image" ? "image/*" : "*/*"),
              multiple: s,
              onChange: se
            }
          )
        ]
      },
      0
    );
    return [(v || u ? !1 : !(!s && !R.isEmpty(pe))) && fe, ...Q];
  }, G = u && R.isEmpty(N), K = R.find(N, { link: H.selectedImage }), le = (K == null ? void 0 : K.type) === "video" || (K == null ? void 0 : K.type) === "audio";
  return /* @__PURE__ */ ce("div", { className: Sn.attachmentsContainer, style: { height: `${d}rem` }, children: [
    /* @__PURE__ */ k(
      kx,
      {
        open: H.open,
        plugins: le ? [Qh, g_] : [Qh, Rx, $x, g_],
        close: Se,
        slides: $(H.selectedImage),
        zoom: le ? void 0 : { maxScale: 50, maxZoomPixelRatio: 10 },
        className: `rotated${z}`,
        controller: { closeOnBackdropClick: !0 },
        render: {
          buttonPrev: () => null,
          buttonNext: () => null
        },
        toolbar: {
          buttons: le ? ["download", "close"] : [
            /* @__PURE__ */ k("button", { type: "button", className: "yarl__button", onClick: ge, children: /* @__PURE__ */ k(Be, { name: "undo", size: "large" }) }, "rotate-left"),
            /* @__PURE__ */ k("button", { type: "button", className: "yarl__button", onClick: ke, children: /* @__PURE__ */ k(Be, { name: "redo", size: "large" }) }, "rotate-right"),
            /* @__PURE__ */ k("button", { type: "button", className: "yarl__button", onClick: U, children: /* @__PURE__ */ k(Be, { name: "print", size: "large" }) }, "print"),
            "zoom",
            "download",
            "fullscreen",
            "close"
          ]
        }
      }
    ),
    G ? /* @__PURE__ */ k("div", { className: `${Sn.attachment} ${m ? Sn.rounded : ""}`, style: { width: `${c}rem`, height: `${d}rem` }, children: /* @__PURE__ */ k(Be, { className: Sn.icon, name: A, size: h, color: "grey" }) }) : D(N),
    /* @__PURE__ */ k("div", { ref: ye, className: Sn.printImageWrapper, children: !le && H.selectedImage && /* @__PURE__ */ k(
      "img",
      {
        src: H.selectedImage,
        alt: "Imagen para imprimir",
        className: Sn.printImageOnly,
        style: { transform: `rotate(${z}deg)` }
      }
    ) }),
    /* @__PURE__ */ k(
      eC,
      {
        hiddenButon: !0,
        printAction: he,
        printActionRetry: () => {
          ve(!1);
        },
        printHeader: {
          company: F,
          user: x,
          title: "Impresión de Imagen"
        },
        clientName: I,
        clientPhone: O,
        platform: S,
        tags: C,
        group: T,
        renderData: ye,
        hideClientInfo: !1
      }
    )
  ] });
};
tC.propTypes = {
  downloadFileFetcher: l.func,
  images: l.array,
  setImages: l.func,
  imagesD: l.array,
  setImagesD: l.func,
  multiple: l.bool,
  disabled: l.bool,
  rounded: l.bool,
  width: l.number,
  height: l.number,
  icon: l.string,
  iconSize: l.string,
  showMode: l.bool,
  noremovesaved: l.bool,
  states: l.array,
  type: l.oneOf(["image", "file"]),
  accept: l.string,
  emptyIcon: l.string,
  companyName: l.string,
  userNames: l.string,
  clientName: l.string,
  clientPhone: l.string,
  platformName: l.string,
  tags: l.array,
  groupName: l.string
};
function mG({ chats: e, history: t, company: n, user: r }) {
  const o = e.currentChatId || t.currentChatId, s = [...e.chats, ...t.chats], u = R.find(s, (c) => c.id === o) || {};
  return {
    companyName: n.name,
    userNames: r.name,
    clientName: R.get(u, "contact.name", ""),
    clientPhone: R.get(u, "contact.phone", ""),
    platformName: R.get(u, "channel.label", ""),
    tags: R.get(u, "tags", []),
    groupName: R.get(u, "group.name", "")
  };
}
const RZ = FI(mG)(tC), gG = "_text_vzm0k_1", vG = {
  text: gG
}, Ml = ({ children: e = "", className: t, as: n, href: r, disabled: o = !1, style: s, withMarkdown: u = !1, onClick: c = () => {
} }) => {
  const d = (h) => {
    const m = /(\*[^*]+\*|_[^_]+_|~[^~]+~|`[^`]+`)/g;
    return h.split(m).map((y, b) => y.startsWith("*") && y.endsWith("*") ? /* @__PURE__ */ k("strong", { style: { fontWeight: "bolder" }, children: y.slice(1, -1) }, b) : y.startsWith("_") && y.endsWith("_") ? /* @__PURE__ */ k("em", { style: { fontStyle: "italic" }, children: y.slice(1, -1) }, b) : y.startsWith("~") && y.endsWith("~") ? /* @__PURE__ */ k("del", { style: { textDecoration: "line-through" }, children: y.slice(1, -1) }, b) : /* @__PURE__ */ k("span", { children: y }, b));
  }, p = () => typeof e == "string" && u ? d(e) : e;
  return /* @__PURE__ */ k(
    qn,
    {
      as: n || "p",
      className: `${vG.text} ${t || ""}`.trim(),
      href: r,
      disabled: o,
      style: s,
      onClick: c,
      children: p()
    }
  );
};
Ml.propTypes = {
  children: l.oneOfType([l.node, l.string]),
  className: l.oneOfType([l.string, l.array]),
  as: l.string,
  href: l.string,
  disabled: l.bool,
  withMarkdown: l.bool,
  onClick: l.func,
  style: l.oneOfType([l.string, l.object])
};
function tm() {
  return tm = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, tm.apply(null, arguments);
}
function yG(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
var bG = DI, _G = function(t) {
  var n = J.useRef(t);
  return bG(function() {
    n.current = t;
  }), n;
}, R_ = function(t, n) {
  if (typeof t == "function") {
    t(n);
    return;
  }
  t.current = n;
}, wG = function(t, n) {
  var r = J.useRef();
  return J.useCallback(function(o) {
    t.current = o, r.current && R_(r.current, null), r.current = n, n && R_(n, o);
  }, [n]);
}, M_ = {
  "min-height": "0",
  "max-height": "none",
  height: "0",
  visibility: "hidden",
  overflow: "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0",
  display: "block"
}, EG = function(t) {
  Object.keys(M_).forEach(function(n) {
    t.style.setProperty(n, M_[n], "important");
  });
}, D_ = EG, zn = null, L_ = function(t, n) {
  var r = t.scrollHeight;
  return n.sizingStyle.boxSizing === "border-box" ? r + n.borderSize : r - n.paddingSize;
};
function xG(e, t, n, r) {
  n === void 0 && (n = 1), r === void 0 && (r = 1 / 0), zn || (zn = document.createElement("textarea"), zn.setAttribute("tabindex", "-1"), zn.setAttribute("aria-hidden", "true"), D_(zn)), zn.parentNode === null && document.body.appendChild(zn);
  var o = e.paddingSize, s = e.borderSize, u = e.sizingStyle, c = u.boxSizing;
  Object.keys(u).forEach(function(v) {
    var y = v;
    zn.style[y] = u[y];
  }), D_(zn), zn.value = t;
  var d = L_(zn, e);
  zn.value = t, d = L_(zn, e), zn.value = "x";
  var p = zn.scrollHeight - o, h = p * n;
  c === "border-box" && (h = h + o + s), d = Math.max(h, d);
  var m = p * r;
  return c === "border-box" && (m = m + o + s), d = Math.min(m, d), [d, p];
}
var F_ = function() {
}, CG = function(t, n) {
  return t.reduce(function(r, o) {
    return r[o] = n[o], r;
  }, {});
}, OG = [
  "borderBottomWidth",
  "borderLeftWidth",
  "borderRightWidth",
  "borderTopWidth",
  "boxSizing",
  "fontFamily",
  "fontSize",
  "fontStyle",
  "fontWeight",
  "letterSpacing",
  "lineHeight",
  "paddingBottom",
  "paddingLeft",
  "paddingRight",
  "paddingTop",
  // non-standard
  "tabSize",
  "textIndent",
  // non-standard
  "textRendering",
  "textTransform",
  "width",
  "wordBreak",
  "wordSpacing",
  "scrollbarGutter"
], SG = !!document.documentElement.currentStyle, TG = function(t) {
  var n = window.getComputedStyle(t);
  if (n === null)
    return null;
  var r = CG(OG, n), o = r.boxSizing;
  if (o === "")
    return null;
  SG && o === "border-box" && (r.width = parseFloat(r.width) + parseFloat(r.borderRightWidth) + parseFloat(r.borderLeftWidth) + parseFloat(r.paddingRight) + parseFloat(r.paddingLeft) + "px");
  var s = parseFloat(r.paddingBottom) + parseFloat(r.paddingTop), u = parseFloat(r.borderBottomWidth) + parseFloat(r.borderTopWidth);
  return {
    sizingStyle: r,
    paddingSize: s,
    borderSize: u
  };
}, PG = TG;
function Cg(e, t, n) {
  var r = _G(n);
  L.useLayoutEffect(function() {
    var o = function(u) {
      return r.current(u);
    };
    if (e)
      return e.addEventListener(t, o), function() {
        return e.removeEventListener(t, o);
      };
  }, []);
}
var kG = function(t, n) {
  Cg(document.body, "reset", function(r) {
    t.current.form === r.target && n(r);
  });
}, NG = function(t) {
  Cg(window, "resize", t);
}, IG = function(t) {
  Cg(document.fonts, "loadingdone", t);
}, AG = ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"], RG = function(t, n) {
  var r = t.cacheMeasurements, o = t.maxRows, s = t.minRows, u = t.onChange, c = u === void 0 ? F_ : u, d = t.onHeightChange, p = d === void 0 ? F_ : d, h = yG(t, AG), m = h.value !== void 0, v = L.useRef(null), y = wG(v, n), b = L.useRef(0), _ = L.useRef(), E = function() {
    var x = v.current, I = r && _.current ? _.current : PG(x);
    if (I) {
      _.current = I;
      var O = xG(I, x.value || x.placeholder || "x", s, o), S = O[0], C = O[1];
      b.current !== S && (b.current = S, x.style.setProperty("height", S + "px", "important"), p(S, {
        rowHeight: C
      }));
    }
  }, A = function(x) {
    m || E(), c(x);
  };
  return L.useLayoutEffect(E), kG(v, function() {
    if (!m) {
      var F = v.current.value;
      requestAnimationFrame(function() {
        var x = v.current;
        x && F !== x.value && E();
      });
    }
  }), NG(E), IG(E), /* @__PURE__ */ L.createElement("textarea", tm({}, h, {
    onChange: A,
    ref: y
  }));
}, MG = /* @__PURE__ */ L.forwardRef(RG);
const DG = "_wrapper_1pssv_1", LG = "_label_1pssv_11", FG = "_required_1pssv_23", $G = "_inputWrapper_1pssv_33", BG = "_textarea_1pssv_43", WG = "_iconsContainer_1pssv_73", UG = "_icon_1pssv_73", jG = "_labelActions_1pssv_111", zG = "_labelIcon_1pssv_123", HG = "_error_1pssv_147", YG = "_errorLabel_1pssv_157", qG = "_labelRow_1pssv_169", VG = "_charCount_1pssv_181", vr = {
  wrapper: DG,
  label: LG,
  required: FG,
  inputWrapper: $G,
  textarea: BG,
  iconsContainer: WG,
  icon: UG,
  labelActions: jG,
  labelIcon: zG,
  error: HG,
  errorLabel: YG,
  labelRow: qG,
  charCount: VG
}, GG = ({
  value: e,
  name: t,
  label: n,
  onChange: r,
  disabled: o = !1,
  error: s,
  isPassword: u = !1,
  minRows: c = 1,
  maxRows: d,
  showRequired: p = !1,
  placeholder: h = "Escribe aquí...",
  showCount: m = !1,
  maxLength: v,
  className: y = ""
}) => {
  const [b, _] = ot(!1), E = R.defaultTo(e, ""), A = !!(u && !b && o && E), F = A ? String(E).replace(/[^\n]/g, "•") : E, x = u && !b && !A ? { WebkitTextSecurity: "disc" } : void 0;
  return /* @__PURE__ */ ce("div", { className: vr.wrapper, children: [
    n && /* @__PURE__ */ ce("div", { className: vr.labelRow, children: [
      /* @__PURE__ */ ce("span", { className: vr.label, children: [
        /* @__PURE__ */ k("span", { children: n }),
        p ? /* @__PURE__ */ k("span", { className: vr.required, children: " *" }) : null,
        u && /* @__PURE__ */ k(
          Be,
          {
            name: b ? "eye slash" : "eye",
            className: vr.labelIcon,
            link: !0,
            title: b ? "Ocultar token" : "Ver token",
            "aria-label": b ? "Ocultar token" : "Ver token",
            onClick: () => _(!b)
          }
        )
      ] }),
      /* @__PURE__ */ k("div", { className: vr.labelActions, children: m && v && /* @__PURE__ */ ce("span", { className: vr.charCount, children: [
        R.size(e),
        "/",
        v
      ] }) })
    ] }),
    /* @__PURE__ */ ce("div", { className: vr.inputWrapper, children: [
      /* @__PURE__ */ k(
        MG,
        {
          minRows: c,
          maxRows: d,
          name: t,
          className: R.join(R.compact([vr.textarea, s && vr.error, y]), " "),
          value: F,
          onChange: r,
          disabled: o,
          placeholder: h,
          style: x
        }
      ),
      /* @__PURE__ */ k("div", { className: vr.iconsContainer, children: e && !o && /* @__PURE__ */ k(
        Be,
        {
          name: "close",
          className: vr.icon,
          onClick: () => r({ target: { name: t, value: "" } })
        }
      ) })
    ] }),
    s && /* @__PURE__ */ k(lr, { basic: !0, color: "red", className: vr.errorLabel, children: s })
  ] });
};
GG.propTypes = {
  value: l.string,
  name: l.string,
  label: l.string,
  onChange: l.func,
  disabled: l.bool,
  error: l.string,
  isPassword: l.bool,
  showRequired: l.bool,
  minRows: l.oneOfType([l.number, l.string]),
  maxRows: l.oneOfType([l.number, l.string]),
  placeholder: l.string,
  showCount: l.bool,
  maxLength: l.number,
  className: l.string
};
const KG = "_input_wfvqa_1", ZG = "_clearIcon_wfvqa_9", XG = "_clearIconFocused_wfvqa_21", QG = "_clearIconLast_wfvqa_33", JG = "_clearIconLastFocused_wfvqa_47", eK = "_clearRoundedIconLast_wfvqa_61", tK = "_clearRoundedIconLastFocused_wfvqa_79", nK = "_labelRoot_wfvqa_119", rK = "_labelRequired_wfvqa_131", aK = "_infoIcon_wfvqa_139", yr = {
  input: KG,
  clearIcon: ZG,
  clearIconFocused: XG,
  clearIconLast: QG,
  clearIconLastFocused: JG,
  clearRoundedIconLast: eK,
  clearRoundedIconLastFocused: tK,
  labelRoot: nK,
  labelRequired: rK,
  infoIcon: aK
}, oK = rm((e, t) => {
  const {
    isPassword: n = !1,
    name: r,
    value: o,
    className: s,
    icon: u,
    label: c,
    infoLabel: d,
    hint: p,
    hintWide: h = !1,
    popupPosition: m = "top center",
    labelClassName: v = "",
    placeholder: y,
    disabled: b,
    rounded: _,
    onChange: E,
    onKeyPress: A,
    onClear: F,
    dropdown: x,
    dropdownPosition: I = "left",
    required: O = !1,
    fluid: S = !0,
    type: C = "text",
    hideClear: T = !1,
    hideDropdown: N = !1,
    customBorderRadius: B
  } = e, H = B || (_ ? "1rem" : "0.25rem"), ne = B || "1rem", z = Ln(null), [re, he] = ot(!1), [ve, Te] = ot(n ? "password" : "text"), [de, ye] = ot("eye slash");
  Zt(() => {
    b ? ((t || z).current.style.setProperty("background-color", "hsl(0, 0%, 90%)", "important"), (t || z).current.style.setProperty("color", "hsl(0, 0%, 0%)", "important")) : ((t || z).current.style.removeProperty("background-color"), (t || z).current.style.removeProperty("cursor")), _ ? R.isEmpty(o) || b ? ((t || z).current.style.removeProperty("border-top-left-radius"), (t || z).current.style.removeProperty("border-bottom-left-radius"), (t || z).current.style.removeProperty("border-top-right-radius"), (t || z).current.style.removeProperty("border-bottom-right-radius"), (t || z).current.style.removeProperty("border-right"), n ? ((t || z).current.style.setProperty("border-top-left-radius", ne, "important"), (t || z).current.style.setProperty("border-bottom-left-radius", ne, "important")) : ((t || z).current.style.setProperty("border-radius", ne, "important"), (t || z).current.style.setProperty(
      "border-right",
      `1px solid ${re ? "var(--inputFocus)" : "var(--inputShader)"}`,
      "important"
    ))) : T && !n ? ((t || z).current.style.setProperty("border-radius", ne, "important"), (t || z).current.style.setProperty(
      "border-right",
      `1px solid ${re ? "var(--inputFocus)" : "var(--inputShader)"}`,
      "important"
    )) : ((t || z).current.style.removeProperty("border-radius"), (t || z).current.style.setProperty("border-top-left-radius", ne, "important"), (t || z).current.style.setProperty("border-bottom-left-radius", ne, "important"), (t || z).current.style.setProperty("border-top-right-radius", "0", "important"), (t || z).current.style.setProperty("border-bottom-right-radius", "0", "important"), (t || z).current.style.setProperty("border-right", "0", "important")) : R.isEmpty(o) || b ? ((t || z).current.style.setProperty("border-radius", H, "important"), n ? ((t || z).current.style.setProperty("border-right", "0", "important"), (t || z).current.style.setProperty("border-top-right-radius", "0", "important"), (t || z).current.style.setProperty("border-bottom-right-radius", "0", "important")) : (t || z).current.style.setProperty(
      "border-right",
      `1px solid ${re ? "var(--inputFocus)" : "var(--inputShader)"}`,
      "important"
    )) : T && !n ? ((t || z).current.style.setProperty("border-radius", H, "important"), (t || z).current.style.setProperty(
      "border-right",
      `1px solid ${re ? "var(--inputFocus)" : "var(--inputShader)"}`,
      "important"
    ), (t || z).current.style.setProperty("border-top-right-radius", H, "important"), (t || z).current.style.setProperty("border-bottom-right-radius", H, "important")) : ((t || z).current.style.setProperty("border-right", "0", "important"), (t || z).current.style.setProperty("border-top-right-radius", "0", "important"), (t || z).current.style.setProperty("border-bottom-right-radius", "0", "important")), R.isEmpty(x) || (I === "left" ? ((t || z).current.style.setProperty("border-top-left-radius", "0", "important"), (t || z).current.style.setProperty("border-bottom-left-radius", "0", "important"), (t || z).current.style.setProperty("border-left-color", "transparent", "important")) : I === "right" && ((t || z).current.style.setProperty("border-top-right-radius", "0", "important"), (t || z).current.style.setProperty("border-bottom-right-radius", "0", "important"), (t || z).current.style.setProperty("border-right-color", "transparent", "important")));
  }, [o, re, x, n, b, _, T, B, H, ne, t, z]);
  const ee = (j) => {
    if (!R.isEmpty(o)) {
      const $ = { name: r, value: o.trim() };
      E({ ...j, target: $ }, $);
    }
  }, oe = (j) => {
    const { key: $ } = j;
    $ === "Enter" && (j.preventDefault(), ee(j), A && A(j));
  }, se = () => {
    const j = ve === "password", $ = j ? "text" : "password", D = j ? "eye" : "eye slash";
    Te($), ye(D);
  }, Ee = (j) => {
    const $ = { name: r, value: "" };
    e.fieldIndex !== void 0 && ($.fieldIndex = e.fieldIndex), e.id !== void 0 && ($.id = e.id), E({ ...j, target: $ }, $), F && F();
  }, Pe = () => {
    he(!0);
  }, Se = (j) => {
    ee(j), he(!1);
  }, ge = () => n ? re ? yr.clearIconFocused : yr.clearIcon : _ ? re ? yr.clearRoundedIconLastFocused : yr.clearRoundedIconLast : re ? yr.clearIconLastFocused : yr.clearIconLast, ke = () => {
    if (!c) return;
    if (J.isValidElement(c)) return c;
    const j = d || p;
    return /* @__PURE__ */ ce("span", { className: `${yr.labelRoot} ${v}`.trim(), children: [
      /* @__PURE__ */ k("span", { children: c }),
      O ? /* @__PURE__ */ k("span", { className: yr.labelRequired, children: " *" }) : null,
      j ? /* @__PURE__ */ k(
        Er,
        {
          wide: h ? "very" : !0,
          hoverable: h,
          position: m,
          content: j,
          trigger: /* @__PURE__ */ k(Be, { name: "info circle", className: yr.infoIcon })
        }
      ) : null
    ] });
  }, De = R.omit(e, [
    "ref",
    "icon",
    "children",
    "onKeyPress",
    "name",
    "value",
    "onChange",
    "onClear",
    "disabled",
    "className",
    "rounded",
    "isPassword",
    "required",
    "type",
    "dropdown",
    "dropdownPosition",
    "hideClear",
    "hideDropdown",
    "customBorderRadius",
    "infoLabel",
    "hint",
    "hintWide",
    "popupPosition",
    "labelClassName"
  ]), U = n || !R.isEmpty(u);
  return /* @__PURE__ */ ce(
    An.Input,
    {
      ...De,
      className: `${yr.input} ${b ? yr.disabled : ""} ${s || ""}`,
      disabled: b,
      onChange: E,
      name: r,
      label: ke(),
      placeholder: y === "" ? "" : R.isEmpty(y) ? typeof c == "string" ? c : "" : y,
      value: o,
      type: n ? ve : C,
      ...U ? { iconPosition: "left" } : {},
      autoComplete: "off",
      fluid: S,
      onFocus: Pe,
      onBlur: Se,
      onKeyPress: oe,
      action: !0,
      children: [
        I === "left" && !R.isEmpty(x) && !N && /* @__PURE__ */ k(Wr, { labeled: !0, ...x }),
        U && /* @__PURE__ */ k(Be, { name: n ? "lock" : u }),
        /* @__PURE__ */ k("input", { ref: t || z, required: O }),
        I === "right" ? /* @__PURE__ */ ce(No, { children: [
          !R.isEmpty(o) && !b && !T && /* @__PURE__ */ k(dt, { className: ge(), icon: "cancel", onClick: Ee, tabIndex: -1 }),
          !N && /* @__PURE__ */ k(Wr, { labeled: !0, ...x })
        ] }) : !T && !R.isEmpty(o) && !b && /* @__PURE__ */ k(dt, { className: ge(), icon: "cancel", onClick: Ee, tabIndex: -1 }),
        n && /* @__PURE__ */ k(
          dt,
          {
            className: _ ? yr.clearRoundedIconLast : yr.clearIconLast,
            icon: de,
            onClick: se,
            tabIndex: -1
          }
        )
      ]
    }
  );
});
oK.propTypes = {
  onChange: l.func,
  onKeyPress: l.func,
  onClear: l.func,
  name: l.string,
  placeholder: l.string,
  label: l.oneOfType([l.string, l.node]),
  infoLabel: l.oneOfType([l.string, l.node]),
  hint: l.oneOfType([l.string, l.node]),
  hintWide: l.bool,
  popupPosition: l.string,
  labelClassName: l.string,
  value: l.string,
  className: l.string,
  disabled: l.bool,
  icon: l.string,
  children: l.node,
  rounded: l.bool,
  dropdown: l.object,
  dropdownPosition: l.oneOf(["left", "right"]),
  fluid: l.bool,
  isPassword: l.bool,
  required: l.bool,
  type: l.string,
  fieldIndex: l.oneOfType([l.number, l.string]),
  id: l.oneOfType([l.number, l.string]),
  hideClear: l.bool,
  hideDropdown: l.bool,
  customBorderRadius: l.string
};
const $_ = 49, iK = "_activeItem_1ays7_1", sK = "_item_1ays7_15", lK = "_itemMultiple_1ays7_39", cK = "_itemSelect_1ays7_49", uK = "_itemSelectMultiple_1ays7_73", dK = "_menu_1ays7_85", fK = "_titleMenuItem_1ays7_99", pK = "_titleMenu_1ays7_99", hK = "_activeMenuItem_1ays7_133", mK = "_menuItem_1ays7_163", gK = "_titleText_1ays7_183", vK = "_text_1ays7_197", yK = "_subText_1ays7_211", bK = "_icon_1ays7_225", _K = "_subIcon_1ays7_235", pn = {
  activeItem: iK,
  item: sK,
  itemMultiple: lK,
  itemSelect: cK,
  itemSelectMultiple: uK,
  menu: dK,
  titleMenuItem: fK,
  titleMenu: pK,
  activeMenuItem: hK,
  menuItem: mK,
  titleText: gK,
  text: vK,
  subText: yK,
  icon: bK,
  subIcon: _K
}, Uu = ({
  isExtended: e = !1,
  name: t = "",
  icon: n = "",
  path: r = "",
  type: o = "",
  subMenu: s = [],
  isActive: u = !1,
  allowNavigation: c = !1,
  onClick: d
}) => {
  const [p, h] = ot(u), m = R.isEmpty(s) ? r : `${r}${s[0].path}`, v = (F, x) => {
    c ? d(F, x) : d && d();
  }, y = () => {
    R.isEmpty(s) ? v(m, o) : h((F) => !F);
  }, b = ({ placement: F, popper: x, reference: I }) => {
    if (R.isEmpty(s))
      return [];
    if (F === "right") {
      const O = x.height - $_, S = O / 2, C = I.y + O;
      let T = S - (e ? 0 : $_);
      return typeof window < "u" && C > window.innerHeight && (T -= window.innerHeight - C), [T, 0];
    }
    return [];
  }, _ = () => {
    if (R.isEmpty(s)) return null;
    const F = typeof window < "u" ? window.location.pathname : "";
    return R.map(s, (I) => {
      const O = `${r}${I.path}`, S = F === O;
      return /* @__PURE__ */ ce(
        Pn.Item,
        {
          className: S ? pn.activeMenuItem : pn.menuItem,
          onClick: () => v(O, o),
          children: [
            !R.isEmpty(I.icon) && /* @__PURE__ */ k(Be, { className: pn.subIcon, name: I.icon }),
            /* @__PURE__ */ k("span", { className: pn.subText, children: I.name })
          ]
        },
        I.id
      );
    });
  }, E = () => e ? p ? /* @__PURE__ */ ce("div", { className: pn.itemSelectMultiple, children: [
    /* @__PURE__ */ k(Pn.Item, { className: pn.itemMultiple, onClick: y, children: /* @__PURE__ */ ce("div", { className: pn.activeItem, children: [
      !R.isEmpty(n) && /* @__PURE__ */ k(Be, { className: pn.icon, name: n }),
      /* @__PURE__ */ k(Ml, { className: pn.text, children: t })
    ] }) }),
    _()
  ] }) : /* @__PURE__ */ k(Pn.Item, { className: u ? pn.itemSelect : pn.item, onClick: y, children: /* @__PURE__ */ ce("div", { className: pn.activeItem, children: [
    !R.isEmpty(n) && /* @__PURE__ */ k(Be, { className: pn.icon, name: n }),
    /* @__PURE__ */ k(Ml, { className: pn.text, children: t })
  ] }) }) : /* @__PURE__ */ k(
    Pn.Item,
    {
      className: u ? pn.itemSelect : pn.item,
      onClick: () => v(m, o),
      children: /* @__PURE__ */ k("div", { className: pn.activeItem, children: !R.isEmpty(n) && /* @__PURE__ */ k(Be, { className: pn.icon, name: n }) })
    }
  ), A = () => {
    R.isEmpty(s) && v(r, o);
  };
  return /* @__PURE__ */ k(
    Er,
    {
      className: pn.menu,
      on: "hover",
      hoverable: !0,
      position: "right center",
      pinned: !0,
      basic: !0,
      disabled: e,
      offset: b,
      trigger: E(),
      children: /* @__PURE__ */ k(Er.Content, { children: /* @__PURE__ */ ce(Pn, { vertical: !0, children: [
        !e && /* @__PURE__ */ k(Pn.Item, { className: R.isEmpty(s) ? pn.titleMenu : pn.titleMenuItem, onClick: A, children: /* @__PURE__ */ k(Ml, { className: pn.titleText, children: t }) }),
        _()
      ] }) })
    }
  );
};
Uu.propTypes = {
  isExtended: l.bool,
  name: l.string,
  icon: l.string,
  path: l.string,
  type: l.string,
  subMenu: l.array,
  isActive: l.bool,
  allowNavigation: l.bool,
  onClick: l.func
};
const wK = "_sideBar_wxxzs_1", EK = "_collapsedSidebar_wxxzs_13", xK = "_menuItems_wxxzs_25", CK = "_mobileItems_wxxzs_37", OK = "_divider_wxxzs_49", wl = {
  sideBar: wK,
  collapsedSidebar: EK,
  menuItems: xK,
  mobileItems: CK,
  divider: OK
}, SK = ({
  handleToggle: e,
  isExtended: t = !1,
  menu: n = [],
  isMobileOrTablet: r = !1,
  isVisible: o = !0,
  companyName: s = "",
  onNavigate: u,
  currentPath: c,
  isMobile: d = !1
}) => {
  const p = (m, v) => {
    v === "link" ? window.open(m, "_blank") : u ? u(m, v) : v === "menu" && typeof window < "u" && (window.location.pathname = m);
  }, h = () => {
    if (R.isEmpty(n)) return null;
    const m = c || (typeof window < "u" ? window.location.pathname : "");
    return R.map(n, (y) => {
      if (y.type === "divider") return /* @__PURE__ */ k("div", { className: wl.divider }, y.id);
      let b = m === y.path;
      if (!R.isEmpty(y.subMenu)) {
        const _ = R.map(y.subMenu, (E) => `${y.path}${E.path}`);
        b = R.includes(_, m);
      }
      return /* @__PURE__ */ k(
        Uu,
        {
          isExtended: r ? !0 : t,
          allowNavigation: !0,
          name: y.name,
          icon: y.icon,
          type: y.type,
          path: y.path,
          subMenu: y.subMenu,
          isActive: b,
          onClick: p
        },
        y.id
      );
    });
  };
  return /* @__PURE__ */ ce(
    Qo,
    {
      className: t ? wl.sideBar : wl.collapsedSidebar,
      as: Pn,
      direction: "left",
      animation: r ? "overlay" : "push",
      visible: o,
      vertical: !0,
      icon: !0,
      width: "wide",
      children: [
        d && s && /* @__PURE__ */ k(Uu, { isExtended: r ? !0 : t, allowNavigation: !1, path: null, name: s }),
        /* @__PURE__ */ k("div", { className: r ? wl.mobileItems : wl.menuItems, children: h() }),
        /* @__PURE__ */ k(
          Uu,
          {
            isExtended: r ? !0 : t,
            allowNavigation: !1,
            path: null,
            name: t ? "Colapsar" : "Expandir",
            icon: t ? "angle double left" : "angle double right",
            onClick: e
          }
        )
      ]
    }
  );
};
SK.propTypes = {
  handleToggle: l.func,
  isExtended: l.bool,
  isMobileOrTablet: l.bool,
  isVisible: l.bool,
  companyName: l.string,
  menu: l.array,
  onNavigate: l.func,
  currentPath: l.string,
  isMobile: l.bool
};
const TK = "_fullScreen_1o9pr_3", PK = "_large_1o9pr_11", kK = "_small_1o9pr_19", NK = "_tiny_1o9pr_27", IK = "_mini_1o9pr_35", AK = "_modalHeader_1o9pr_43", RK = "_tabsContainer_1o9pr_63", MK = "_modalContent_1o9pr_73", DK = "_modalContentNoFlex_1o9pr_91", LK = "_modalFooter_1o9pr_131", FK = "_iconHeader_1o9pr_145", $K = "_topEditButton_1o9pr_153", BK = "_topWatchButton_1o9pr_171", WK = "_topPrintButton_1o9pr_189", UK = "_positiveButton_1o9pr_221", jK = "_negativeButton_1o9pr_251", zK = "_disabled_1o9pr_281", HK = "_rowButton_1o9pr_295", YK = "_modal_1o9pr_43", qK = "_modalHeaderTitle_1o9pr_401", In = {
  fullScreen: TK,
  large: PK,
  small: kK,
  tiny: NK,
  mini: IK,
  modalHeader: AK,
  tabsContainer: RK,
  modalContent: MK,
  modalContentNoFlex: DK,
  modalFooter: LK,
  iconHeader: FK,
  topEditButton: $K,
  topWatchButton: BK,
  topPrintButton: WK,
  positiveButton: UK,
  negativeButton: jK,
  disabled: zK,
  rowButton: HK,
  modal: YK,
  modalHeaderTitle: qK
}, VK = "_divHeaderNav_7mcz0_1", GK = "_navButton_7mcz0_23", KK = "_errorsButon_7mcz0_49", ZK = "_volatileError_7mcz0_93", XK = "_buttonContainer_7mcz0_181", QK = "_redButton_7mcz0_195", JK = "_active_7mcz0_233", eZ = "_moreWrapper_7mcz0_263", tZ = "_moreButton_7mcz0_275", nZ = "_moreDropdown_7mcz0_293", Ar = {
  divHeaderNav: VK,
  navButton: GK,
  errorsButon: KK,
  volatileError: ZK,
  buttonContainer: XK,
  redButton: QK,
  active: JK,
  moreWrapper: eZ,
  moreButton: tZ,
  moreDropdown: nZ
}, nC = ({ handleStateHeader: e, stateHeader: t, buttons: n }) => {
  const [r, o] = ot([]), [s, u] = ot([]), [c, d] = ot(!1), p = Ln(null), h = (y, b = !1) => {
    if (!p.current) return 0;
    const _ = document.createElement("button");
    _.className = b ? Ar.moreButton : Ar.navButton, _.style.cssText = "visibility: hidden; position: absolute; font-size: 16px; padding: 12px 20px; white-space: nowrap;", _.innerHTML = y, p.current.appendChild(_);
    const E = _.offsetWidth;
    return p.current.removeChild(_), E;
  }, m = () => {
    if (!p.current) return;
    const y = p.current.clientWidth;
    if (y === 0) return;
    const b = h("...");
    let _ = 0;
    const E = [], A = [], F = R.orderBy(n, ["order"], ["asc"]), x = F.length;
    R.forEach(F, (I, O) => {
      const S = `<i class="icon ${I.icon}"></i> ${I.label} ${I.count ? `(${I.count})` : ""}`, C = h(S), N = O === x - 1 ? 0 : b;
      _ + C + N <= y - 10 ? (_ += C, E.push(I)) : A.push(I);
    }), o(E), u(A);
  };
  Zt(() => {
    const y = new ResizeObserver(m);
    return p.current && y.observe(p.current), () => y.disconnect();
  }, [n]), Zt(() => {
    const y = (b) => {
      p.current && !p.current.contains(b.target) && d(!1);
    };
    return document.addEventListener("mousedown", y), () => document.removeEventListener("mousedown", y);
  }, []);
  const v = (y, b = !1) => {
    const _ = R.filter([
      Ar.navButton,
      t === y.state && Ar.active,
      y.errors && Ar.errorsButon,
      y.color === "red" && Ar.redButton
    ]).join(" ");
    return /* @__PURE__ */ ce("div", { className: Ar.buttonContainer, children: [
      /* @__PURE__ */ ce(
        dt,
        {
          disabled: !!y.disabled,
          className: _,
          onClick: () => {
            y.disabled || (y.onClick ? y.onClick() : e(y.state), b && d(!1));
          },
          children: [
            /* @__PURE__ */ k(Be, { name: y.icon }),
            y.label,
            " ",
            y.count !== void 0 && `(${y.count})`
          ]
        }
      ),
      !R.isEmpty(y.error) && /* @__PURE__ */ k("div", { className: Ar.volatileError, children: "Campos Requeridos" })
    ] }, y.key);
  };
  return /* @__PURE__ */ ce("div", { className: Ar.divHeaderNav, ref: p, children: [
    R.map(r, (y) => v(y)),
    !R.isEmpty(s) && /* @__PURE__ */ ce("div", { className: Ar.moreWrapper, children: [
      /* @__PURE__ */ k(
        dt,
        {
          className: Ar.moreButton,
          onClick: () => d(!c),
          children: "..."
        }
      ),
      c && /* @__PURE__ */ k("div", { className: Ar.moreDropdown, children: R.map(s, (y) => v(y, !0)) })
    ] })
  ] });
};
nC.propTypes = {
  handleStateHeader: l.func.isRequired,
  stateHeader: l.string.isRequired,
  buttons: l.arrayOf(
    l.shape({
      key: l.string.isRequired,
      state: l.string.isRequired,
      label: l.string.isRequired,
      count: l.number,
      icon: l.string,
      order: l.number.isRequired,
      errors: l.bool,
      onClick: l.func,
      color: l.string,
      disabled: l.bool
    })
  ).isRequired
};
const rZ = ({
  children: e = "",
  iconName: t = "",
  mode: n = "Add",
  setMode: r = () => {
  },
  title: o = "Title",
  id: s = "",
  onClose: u = () => {
  },
  onSuccess: c = () => {
  },
  style: d = {},
  size: p = "",
  fullHeight: h = !1,
  modifyLabel: m = "Modificar",
  saveLabel: v = "Guardar",
  cancelLabel: y = "Atrás",
  headerButtons: b = [],
  footerButtons: _ = [],
  printAction: E = null,
  saveDisabled: A = !1,
  className: F = "",
  ignoreContent: x = !1,
  hideEditButton: I = !1,
  tabs: O = [],
  activeTab: S = "",
  onTabChange: C = () => {
  },
  customHeight: T = "",
  closeOnDimmerClick: N = !0,
  contentStyle: B = {}
}) => {
  const [H, ne] = ot("list");
  Zt(() => {
    z();
  }, [n]);
  const z = () => {
    let Te = t;
    if (R.isEmpty(t))
      switch (n) {
        case "Add":
          Te = "plus";
          break;
        case "Edit":
          Te = "edit";
          break;
        case "Watch":
          Te = "eye";
          break;
        default:
          Te = "list";
          break;
      }
    ne(Te);
  }, re = () => {
    u();
  }, he = () => {
    c();
  }, ve = h ? {
    maxHeight: "calc(100vh - 2.5rem)",
    ...d
  } : p === "tiny" || p === "mini" ? {
    marginTop: 0,
    top: "50%",
    transform: "translateY(-50%)",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    textRendering: "optimizeLegibility",
    ...d
  } : { ...d };
  return /* @__PURE__ */ ce(
    cn,
    {
      className: `${R.isEmpty(p) ? "" : In[p]} ${F} ${In.modal}`,
      style: ve,
      open: !0,
      closeIcon: !0,
      closeOnDimmerClick: N,
      onClose: re,
      children: [
        /* @__PURE__ */ ce(cn.Header, { className: In.modalHeader, children: [
          /* @__PURE__ */ ce("div", { className: In.modalHeaderTitle, children: [
            /* @__PURE__ */ k(Be, { name: H, className: In.iconHeader }),
            o,
            s && ` - Id: ${s}`
          ] }),
          !R.isEmpty(b) && b,
          /* @__PURE__ */ ce("div", { className: In.rowButton, children: [
            n === "Watch" && !I && /* @__PURE__ */ k(
              dt,
              {
                onClick: () => {
                  r("Edit");
                },
                className: In.topEditButton,
                children: /* @__PURE__ */ k(Be, { name: "edit" })
              }
            ),
            n === "Edit" && /* @__PURE__ */ k(
              dt,
              {
                onClick: () => {
                  r("Watch");
                },
                className: In.topWatchButton,
                children: /* @__PURE__ */ k(Be, { name: "eye" })
              }
            ),
            E && /* @__PURE__ */ k(
              dt,
              {
                onClick: () => {
                  typeof E == "function" && E();
                },
                className: In.topPrintButton,
                title: "Imprimir",
                children: /* @__PURE__ */ k(Be, { name: "print" })
              }
            )
          ] })
        ] }),
        !R.isEmpty(O) && /* @__PURE__ */ k("div", { className: In.tabsContainer, children: /* @__PURE__ */ k(nC, { buttons: O, stateHeader: S, handleStateHeader: C }) }),
        /* @__PURE__ */ k(
          cn.Content,
          {
            className: x ? In.modalContentNoFlex : In.modalContent,
            style: h ? { minHeight: "calc(95vh - 8rem)", ...B } : T ? { height: T, minHeight: T, ...B } : { ...B },
            scrolling: !0,
            children: e
          }
        ),
        /* @__PURE__ */ ce(cn.Actions, { className: In.modalFooter, children: [
          !R.isEmpty(_) && _,
          n === "Watch" ? /* @__PURE__ */ k(dt, { className: In.negativeButton, onClick: re, children: "Cerrar" }) : /* @__PURE__ */ k(dt, { className: In.negativeButton, onClick: re, children: y }),
          n !== "Watch" && c && /* @__PURE__ */ k(
            dt,
            {
              className: `${In.positiveButton} ${A ? In.disabled : ""}`,
              onClick: he,
              disabled: A,
              children: n === "Add" ? v : m
            }
          )
        ] })
      ]
    }
  );
};
rZ.propTypes = {
  children: l.node,
  iconName: l.string,
  mode: l.string,
  setMode: l.func,
  title: l.string,
  id: l.string,
  saveLabel: l.string,
  modifyLabel: l.string,
  cancelLabel: l.string,
  size: l.string,
  onClose: l.func,
  onSuccess: l.func,
  style: l.object,
  fullHeight: l.bool,
  headerButtons: l.array,
  footerButtons: l.array,
  printAction: l.func,
  saveDisabled: l.bool,
  className: l.string,
  ignoreContent: l.bool,
  tabs: l.array,
  activeTab: l.string,
  onTabChange: l.func,
  hideEditButton: l.bool,
  customHeight: l.string,
  closeOnDimmerClick: l.bool,
  contentStyle: l.object
};
const aZ = "_modal_3j9dd_1", oZ = "_header_3j9dd_11", iZ = "_actions_3j9dd_25", sZ = "_leftActions_3j9dd_39", lZ = "_rightActions_3j9dd_51", cZ = "_positiveButton_3j9dd_63", uZ = "_negativeButton_3j9dd_91", dZ = "_content_3j9dd_121", fZ = "_focus_3j9dd_129", pZ = "_contactHeader_3j9dd_139", hZ = "_contactPositiveButton_3j9dd_149", mZ = "_centerModal_3j9dd_169", Hn = {
  modal: aZ,
  header: oZ,
  actions: iZ,
  leftActions: sZ,
  rightActions: lZ,
  positiveButton: cZ,
  negativeButton: uZ,
  content: dZ,
  focus: fZ,
  contactHeader: pZ,
  contactPositiveButton: hZ,
  centerModal: mZ
}, gZ = ({
  visible: e,
  content: t,
  fullContent: n,
  header: r,
  buttonLabel: o = "Salir",
  cancelLabel: s = "Atrás",
  focus: u,
  onConfirm: c,
  onDismiss: d,
  icon: p,
  extraButton: h,
  style: m = {},
  className: v = "",
  useContactStyles: y = !1,
  centerModal: b = !1,
  headerColor: _,
  hideConfirm: E = !1
}) => /* @__PURE__ */ ce(
  cn,
  {
    open: e,
    size: "tiny",
    closeOnDimmerClick: !1,
    dimmer: "blurring",
    className: `${Hn.modal} ${v} ${y ? Hn.contact : ""} ${b ? Hn.centerModal : ""}`,
    style: m,
    children: [
      /* @__PURE__ */ ce(
        cn.Header,
        {
          className: `${Hn.header} ${y ? Hn.contactHeader : ""}`,
          style: _ ? { "--custom-header-color": _ } : {},
          children: [
            !R.isEmpty(p) && /* @__PURE__ */ k(Be, { name: p }),
            ` ${r}`
          ]
        }
      ),
      /* @__PURE__ */ k(cn.Content, { className: Hn.contentContainer, children: /* @__PURE__ */ k(Ml, { className: Hn.content, children: n || /* @__PURE__ */ ce(No, { children: [
        `¿${t}`,
        u ? /* @__PURE__ */ ce(No, { children: [
          /* @__PURE__ */ k("span", { className: Hn.focus, children: u }),
          "?"
        ] }) : "?"
      ] }) }) }),
      /* @__PURE__ */ ce(cn.Actions, { className: Hn.actions, children: [
        /* @__PURE__ */ k("div", { className: Hn.leftActions, children: h }),
        /* @__PURE__ */ ce("div", { className: Hn.rightActions, children: [
          /* @__PURE__ */ k(dt, { className: `${Hn.negativeButton} ${y ? Hn.contactNegativeButton : ""}`, onClick: d, children: s }),
          !E && /* @__PURE__ */ k(dt, { className: `${Hn.positiveButton} ${y ? Hn.contactPositiveButton : ""}`, onClick: c, children: o })
        ] })
      ] })
    ]
  }
);
gZ.propTypes = {
  visible: l.bool,
  content: l.string,
  fullContent: l.string,
  header: l.string,
  buttonLabel: l.string,
  cancelLabel: l.string,
  focus: l.string,
  onConfirm: l.func,
  onDismiss: l.func,
  icon: l.string,
  extraButton: l.node,
  style: l.object,
  className: l.string,
  useContactStyles: l.bool,
  centerModal: l.bool,
  headerColor: l.string,
  hideConfirm: l.bool
};
const vZ = "_modal_s72ln_1", yZ = "_content_s72ln_13", bZ = "_messageBody_s72ln_33", _Z = "_actions_s72ln_73", wZ = "_button_s72ln_81", El = {
  modal: vZ,
  content: yZ,
  messageBody: bZ,
  actions: _Z,
  button: wZ
}, EZ = (e) => {
  if (e == null || e === "") return "";
  if (R.isString(e)) return e;
  if (e instanceof Error)
    return e.message || String(e);
  if (typeof e == "object") {
    const t = R.get(e, "response.data.message");
    if (R.isString(t) && t) return t;
    const n = R.get(e, "message");
    if (R.isString(n) && n) return n;
    try {
      return JSON.stringify(e, null, 2);
    } catch {
      return String(e);
    }
  }
  return String(e);
}, xZ = ({ text: e = "", isVisible: t = !1, isError: n = !1, onDismiss: r }) => {
  const o = EZ(e);
  return /* @__PURE__ */ ce(cn, { open: t, closeOnDimmerClick: !1, className: El.modal, size: "small", children: [
    /* @__PURE__ */ ce(cn.Content, { className: El.content, children: [
      /* @__PURE__ */ k(Be, { name: n ? "warning sign" : "check circle", size: "big", color: n ? "red" : "green" }),
      /* @__PURE__ */ k("pre", { className: El.messageBody, children: o })
    ] }),
    /* @__PURE__ */ k(cn.Actions, { className: El.actions, children: /* @__PURE__ */ k(dt, { className: El.button, onClick: r, color: n ? "red" : "green", fluid: !0, children: "Cerrar" }) })
  ] });
};
xZ.propTypes = {
  text: l.oneOfType([l.string, l.object]),
  isVisible: l.bool,
  isError: l.bool,
  onDismiss: l.func
};
const CZ = "_loading_5559w_1", OZ = {
  loading: CZ
}, SZ = ({ isFetching: e }) => /* @__PURE__ */ k(Io, { page: !0, active: e, children: /* @__PURE__ */ k(Ql, { className: OZ.loading, size: "large", children: "Loading..." }) });
SZ.propTypes = {
  isFetching: l.bool.isRequired
};
export {
  ao as Card,
  gZ as ConfirmModal,
  RZ as FileManager,
  rZ as IkModal,
  Y8 as IkTable,
  oK as Input,
  SZ as Loading,
  xZ as NotificationDialog,
  SK as SideBar,
  Uu as SideBarMenu,
  Ml as Text,
  GG as TextArea
};
