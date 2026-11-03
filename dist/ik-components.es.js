var gI = Object.defineProperty;
var vI = (e, t, n) => t in e ? gI(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ll = (e, t, n) => vI(e, typeof t != "symbol" ? t + "" : t, n);
import { jsx as M, jsxs as de, Fragment as yo } from "react/jsx-runtime";
import * as L from "react";
import J, { Children as Xh, PureComponent as A1, Component as Vn, createRef as yr, isValidElement as yI, cloneElement as R1, createElement as lp, useState as at, useEffect as Kt, useRef as Dn, useCallback as jp, forwardRef as M1, useLayoutEffect as bI } from "react";
import * as zp from "react-dom";
import _I, { createPortal as D1 } from "react-dom";
import { connect as wI } from "react-redux";
var ts = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function lc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Hp = { exports: {} }, mu = { exports: {} }, Bt = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gy;
function EI() {
  if (Gy) return Bt;
  Gy = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, u = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, _ = e ? Symbol.for("react.block") : 60121, E = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, F = e ? Symbol.for("react.scope") : 60119;
  function C(O) {
    if (typeof O == "object" && O !== null) {
      var S = O.$$typeof;
      switch (S) {
        case t:
          switch (O = O.type, O) {
            case d:
            case p:
            case r:
            case s:
            case i:
            case m:
              return O;
            default:
              switch (O = O && O.$$typeof, O) {
                case l:
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
    return C(O) === p;
  }
  return Bt.AsyncMode = d, Bt.ConcurrentMode = p, Bt.ContextConsumer = l, Bt.ContextProvider = u, Bt.Element = t, Bt.ForwardRef = h, Bt.Fragment = r, Bt.Lazy = b, Bt.Memo = y, Bt.Portal = n, Bt.Profiler = s, Bt.StrictMode = i, Bt.Suspense = m, Bt.isAsyncMode = function(O) {
    return I(O) || C(O) === d;
  }, Bt.isConcurrentMode = I, Bt.isContextConsumer = function(O) {
    return C(O) === l;
  }, Bt.isContextProvider = function(O) {
    return C(O) === u;
  }, Bt.isElement = function(O) {
    return typeof O == "object" && O !== null && O.$$typeof === t;
  }, Bt.isForwardRef = function(O) {
    return C(O) === h;
  }, Bt.isFragment = function(O) {
    return C(O) === r;
  }, Bt.isLazy = function(O) {
    return C(O) === b;
  }, Bt.isMemo = function(O) {
    return C(O) === y;
  }, Bt.isPortal = function(O) {
    return C(O) === n;
  }, Bt.isProfiler = function(O) {
    return C(O) === s;
  }, Bt.isStrictMode = function(O) {
    return C(O) === i;
  }, Bt.isSuspense = function(O) {
    return C(O) === m;
  }, Bt.isValidElementType = function(O) {
    return typeof O == "string" || typeof O == "function" || O === r || O === p || O === s || O === i || O === m || O === v || typeof O == "object" && O !== null && (O.$$typeof === b || O.$$typeof === y || O.$$typeof === u || O.$$typeof === l || O.$$typeof === h || O.$$typeof === E || O.$$typeof === R || O.$$typeof === F || O.$$typeof === _);
  }, Bt.typeOf = C, Bt;
}
var Wt = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ky;
function xI() {
  return Ky || (Ky = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, u = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, _ = e ? Symbol.for("react.block") : 60121, E = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, F = e ? Symbol.for("react.scope") : 60119;
    function C(D) {
      return typeof D == "string" || typeof D == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      D === r || D === p || D === s || D === i || D === m || D === v || typeof D == "object" && D !== null && (D.$$typeof === b || D.$$typeof === y || D.$$typeof === u || D.$$typeof === l || D.$$typeof === h || D.$$typeof === E || D.$$typeof === R || D.$$typeof === F || D.$$typeof === _);
    }
    function I(D) {
      if (typeof D == "object" && D !== null) {
        var G = D.$$typeof;
        switch (G) {
          case t:
            var Z = D.type;
            switch (Z) {
              case d:
              case p:
              case r:
              case s:
              case i:
              case m:
                return Z;
              default:
                var le = Z && Z.$$typeof;
                switch (le) {
                  case l:
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
    var O = d, S = p, x = l, P = u, k = t, B = h, Y = r, ne = b, z = y, re = n, pe = s, ve = i, Oe = m, he = !1;
    function be(D) {
      return he || (he = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), ee(D) || I(D) === d;
    }
    function ee(D) {
      return I(D) === p;
    }
    function ie(D) {
      return I(D) === l;
    }
    function se(D) {
      return I(D) === u;
    }
    function Ce(D) {
      return typeof D == "object" && D !== null && D.$$typeof === t;
    }
    function Se(D) {
      return I(D) === h;
    }
    function Te(D) {
      return I(D) === r;
    }
    function ge(D) {
      return I(D) === b;
    }
    function Pe(D) {
      return I(D) === y;
    }
    function Me(D) {
      return I(D) === n;
    }
    function U(D) {
      return I(D) === s;
    }
    function j(D) {
      return I(D) === i;
    }
    function $(D) {
      return I(D) === m;
    }
    Wt.AsyncMode = O, Wt.ConcurrentMode = S, Wt.ContextConsumer = x, Wt.ContextProvider = P, Wt.Element = k, Wt.ForwardRef = B, Wt.Fragment = Y, Wt.Lazy = ne, Wt.Memo = z, Wt.Portal = re, Wt.Profiler = pe, Wt.StrictMode = ve, Wt.Suspense = Oe, Wt.isAsyncMode = be, Wt.isConcurrentMode = ee, Wt.isContextConsumer = ie, Wt.isContextProvider = se, Wt.isElement = Ce, Wt.isForwardRef = Se, Wt.isFragment = Te, Wt.isLazy = ge, Wt.isMemo = Pe, Wt.isPortal = Me, Wt.isProfiler = U, Wt.isStrictMode = j, Wt.isSuspense = $, Wt.isValidElementType = C, Wt.typeOf = I;
  }()), Wt;
}
var Zy;
function Qh() {
  return Zy || (Zy = 1, process.env.NODE_ENV === "production" ? mu.exports = EI() : mu.exports = xI()), mu.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var cp, Xy;
function CI() {
  if (Xy) return cp;
  Xy = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var u = {}, l = 0; l < 10; l++)
        u["_" + String.fromCharCode(l)] = l;
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
  return cp = i() ? Object.assign : function(s, u) {
    for (var l, d = r(s), p, h = 1; h < arguments.length; h++) {
      l = Object(arguments[h]);
      for (var m in l)
        t.call(l, m) && (d[m] = l[m]);
      if (e) {
        p = e(l);
        for (var v = 0; v < p.length; v++)
          n.call(l, p[v]) && (d[p[v]] = l[p[v]]);
      }
    }
    return d;
  }, cp;
}
var up, Qy;
function Jh() {
  if (Qy) return up;
  Qy = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return up = e, up;
}
var dp, Jy;
function L1() {
  return Jy || (Jy = 1, dp = Function.call.bind(Object.prototype.hasOwnProperty)), dp;
}
var fp, eb;
function OI() {
  if (eb) return fp;
  eb = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Jh(), n = {}, r = L1();
    e = function(s) {
      var u = "Warning: " + s;
      typeof console < "u" && console.error(u);
      try {
        throw new Error(u);
      } catch {
      }
    };
  }
  function i(s, u, l, d, p) {
    if (process.env.NODE_ENV !== "production") {
      for (var h in s)
        if (r(s, h)) {
          var m;
          try {
            if (typeof s[h] != "function") {
              var v = Error(
                (d || "React class") + ": " + l + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw v.name = "Invariant Violation", v;
            }
            m = s[h](u, h, d, l, null, t);
          } catch (b) {
            m = b;
          }
          if (m && !(m instanceof Error) && e(
            (d || "React class") + ": type specification of " + l + " `" + h + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in n)) {
            n[m.message] = !0;
            var y = p ? p() : "";
            e(
              "Failed " + l + " type: " + m.message + (y ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, fp = i, fp;
}
var pp, tb;
function SI() {
  if (tb) return pp;
  tb = 1;
  var e = Qh(), t = CI(), n = Jh(), r = L1(), i = OI(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(l) {
    var d = "Warning: " + l;
    typeof console < "u" && console.error(d);
    try {
      throw new Error(d);
    } catch {
    }
  });
  function u() {
    return null;
  }
  return pp = function(l, d) {
    var p = typeof Symbol == "function" && Symbol.iterator, h = "@@iterator";
    function m(ee) {
      var ie = ee && (p && ee[p] || ee[h]);
      if (typeof ie == "function")
        return ie;
    }
    var v = "<<anonymous>>", y = {
      array: R("array"),
      bigint: R("bigint"),
      bool: R("boolean"),
      func: R("function"),
      number: R("number"),
      object: R("object"),
      string: R("string"),
      symbol: R("symbol"),
      any: F(),
      arrayOf: C,
      element: I(),
      elementType: O(),
      instanceOf: S,
      node: B(),
      objectOf: P,
      oneOf: x,
      oneOfType: k,
      shape: ne,
      exact: z
    };
    function b(ee, ie) {
      return ee === ie ? ee !== 0 || 1 / ee === 1 / ie : ee !== ee && ie !== ie;
    }
    function _(ee, ie) {
      this.message = ee, this.data = ie && typeof ie == "object" ? ie : {}, this.stack = "";
    }
    _.prototype = Error.prototype;
    function E(ee) {
      if (process.env.NODE_ENV !== "production")
        var ie = {}, se = 0;
      function Ce(Te, ge, Pe, Me, U, j, $) {
        if (Me = Me || v, j = j || Pe, $ !== n) {
          if (d) {
            var D = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw D.name = "Invariant Violation", D;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var G = Me + ":" + Pe;
            !ie[G] && // Avoid spamming the console because they are often not actionable except for lib authors
            se < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + j + "` prop on `" + Me + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), ie[G] = !0, se++);
          }
        }
        return ge[Pe] == null ? Te ? ge[Pe] === null ? new _("The " + U + " `" + j + "` is marked as required " + ("in `" + Me + "`, but its value is `null`.")) : new _("The " + U + " `" + j + "` is marked as required in " + ("`" + Me + "`, but its value is `undefined`.")) : null : ee(ge, Pe, Me, U, j);
      }
      var Se = Ce.bind(null, !1);
      return Se.isRequired = Ce.bind(null, !0), Se;
    }
    function R(ee) {
      function ie(se, Ce, Se, Te, ge, Pe) {
        var Me = se[Ce], U = ve(Me);
        if (U !== ee) {
          var j = Oe(Me);
          return new _(
            "Invalid " + Te + " `" + ge + "` of type " + ("`" + j + "` supplied to `" + Se + "`, expected ") + ("`" + ee + "`."),
            { expectedType: ee }
          );
        }
        return null;
      }
      return E(ie);
    }
    function F() {
      return E(u);
    }
    function C(ee) {
      function ie(se, Ce, Se, Te, ge) {
        if (typeof ee != "function")
          return new _("Property `" + ge + "` of component `" + Se + "` has invalid PropType notation inside arrayOf.");
        var Pe = se[Ce];
        if (!Array.isArray(Pe)) {
          var Me = ve(Pe);
          return new _("Invalid " + Te + " `" + ge + "` of type " + ("`" + Me + "` supplied to `" + Se + "`, expected an array."));
        }
        for (var U = 0; U < Pe.length; U++) {
          var j = ee(Pe, U, Se, Te, ge + "[" + U + "]", n);
          if (j instanceof Error)
            return j;
        }
        return null;
      }
      return E(ie);
    }
    function I() {
      function ee(ie, se, Ce, Se, Te) {
        var ge = ie[se];
        if (!l(ge)) {
          var Pe = ve(ge);
          return new _("Invalid " + Se + " `" + Te + "` of type " + ("`" + Pe + "` supplied to `" + Ce + "`, expected a single ReactElement."));
        }
        return null;
      }
      return E(ee);
    }
    function O() {
      function ee(ie, se, Ce, Se, Te) {
        var ge = ie[se];
        if (!e.isValidElementType(ge)) {
          var Pe = ve(ge);
          return new _("Invalid " + Se + " `" + Te + "` of type " + ("`" + Pe + "` supplied to `" + Ce + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return E(ee);
    }
    function S(ee) {
      function ie(se, Ce, Se, Te, ge) {
        if (!(se[Ce] instanceof ee)) {
          var Pe = ee.name || v, Me = be(se[Ce]);
          return new _("Invalid " + Te + " `" + ge + "` of type " + ("`" + Me + "` supplied to `" + Se + "`, expected ") + ("instance of `" + Pe + "`."));
        }
        return null;
      }
      return E(ie);
    }
    function x(ee) {
      if (!Array.isArray(ee))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), u;
      function ie(se, Ce, Se, Te, ge) {
        for (var Pe = se[Ce], Me = 0; Me < ee.length; Me++)
          if (b(Pe, ee[Me]))
            return null;
        var U = JSON.stringify(ee, function($, D) {
          var G = Oe(D);
          return G === "symbol" ? String(D) : D;
        });
        return new _("Invalid " + Te + " `" + ge + "` of value `" + String(Pe) + "` " + ("supplied to `" + Se + "`, expected one of " + U + "."));
      }
      return E(ie);
    }
    function P(ee) {
      function ie(se, Ce, Se, Te, ge) {
        if (typeof ee != "function")
          return new _("Property `" + ge + "` of component `" + Se + "` has invalid PropType notation inside objectOf.");
        var Pe = se[Ce], Me = ve(Pe);
        if (Me !== "object")
          return new _("Invalid " + Te + " `" + ge + "` of type " + ("`" + Me + "` supplied to `" + Se + "`, expected an object."));
        for (var U in Pe)
          if (r(Pe, U)) {
            var j = ee(Pe, U, Se, Te, ge + "." + U, n);
            if (j instanceof Error)
              return j;
          }
        return null;
      }
      return E(ie);
    }
    function k(ee) {
      if (!Array.isArray(ee))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), u;
      for (var ie = 0; ie < ee.length; ie++) {
        var se = ee[ie];
        if (typeof se != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + he(se) + " at index " + ie + "."
          ), u;
      }
      function Ce(Se, Te, ge, Pe, Me) {
        for (var U = [], j = 0; j < ee.length; j++) {
          var $ = ee[j], D = $(Se, Te, ge, Pe, Me, n);
          if (D == null)
            return null;
          D.data && r(D.data, "expectedType") && U.push(D.data.expectedType);
        }
        var G = U.length > 0 ? ", expected one of type [" + U.join(", ") + "]" : "";
        return new _("Invalid " + Pe + " `" + Me + "` supplied to " + ("`" + ge + "`" + G + "."));
      }
      return E(Ce);
    }
    function B() {
      function ee(ie, se, Ce, Se, Te) {
        return re(ie[se]) ? null : new _("Invalid " + Se + " `" + Te + "` supplied to " + ("`" + Ce + "`, expected a ReactNode."));
      }
      return E(ee);
    }
    function Y(ee, ie, se, Ce, Se) {
      return new _(
        (ee || "React class") + ": " + ie + " type `" + se + "." + Ce + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + Se + "`."
      );
    }
    function ne(ee) {
      function ie(se, Ce, Se, Te, ge) {
        var Pe = se[Ce], Me = ve(Pe);
        if (Me !== "object")
          return new _("Invalid " + Te + " `" + ge + "` of type `" + Me + "` " + ("supplied to `" + Se + "`, expected `object`."));
        for (var U in ee) {
          var j = ee[U];
          if (typeof j != "function")
            return Y(Se, Te, ge, U, Oe(j));
          var $ = j(Pe, U, Se, Te, ge + "." + U, n);
          if ($)
            return $;
        }
        return null;
      }
      return E(ie);
    }
    function z(ee) {
      function ie(se, Ce, Se, Te, ge) {
        var Pe = se[Ce], Me = ve(Pe);
        if (Me !== "object")
          return new _("Invalid " + Te + " `" + ge + "` of type `" + Me + "` " + ("supplied to `" + Se + "`, expected `object`."));
        var U = t({}, se[Ce], ee);
        for (var j in U) {
          var $ = ee[j];
          if (r(ee, j) && typeof $ != "function")
            return Y(Se, Te, ge, j, Oe($));
          if (!$)
            return new _(
              "Invalid " + Te + " `" + ge + "` key `" + j + "` supplied to `" + Se + "`.\nBad object: " + JSON.stringify(se[Ce], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(ee), null, "  ")
            );
          var D = $(Pe, j, Se, Te, ge + "." + j, n);
          if (D)
            return D;
        }
        return null;
      }
      return E(ie);
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
          if (ee === null || l(ee))
            return !0;
          var ie = m(ee);
          if (ie) {
            var se = ie.call(ee), Ce;
            if (ie !== ee.entries) {
              for (; !(Ce = se.next()).done; )
                if (!re(Ce.value))
                  return !1;
            } else
              for (; !(Ce = se.next()).done; ) {
                var Se = Ce.value;
                if (Se && !re(Se[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function pe(ee, ie) {
      return ee === "symbol" ? !0 : ie ? ie["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && ie instanceof Symbol : !1;
    }
    function ve(ee) {
      var ie = typeof ee;
      return Array.isArray(ee) ? "array" : ee instanceof RegExp ? "object" : pe(ie, ee) ? "symbol" : ie;
    }
    function Oe(ee) {
      if (typeof ee > "u" || ee === null)
        return "" + ee;
      var ie = ve(ee);
      if (ie === "object") {
        if (ee instanceof Date)
          return "date";
        if (ee instanceof RegExp)
          return "regexp";
      }
      return ie;
    }
    function he(ee) {
      var ie = Oe(ee);
      switch (ie) {
        case "array":
        case "object":
          return "an " + ie;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + ie;
        default:
          return ie;
      }
    }
    function be(ee) {
      return !ee.constructor || !ee.constructor.name ? v : ee.constructor.name;
    }
    return y.checkPropTypes = i, y.resetWarningCache = i.resetWarningCache, y.PropTypes = y, y;
  }, pp;
}
var hp, nb;
function TI() {
  if (nb) return hp;
  nb = 1;
  var e = Jh();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, hp = function() {
    function r(u, l, d, p, h, m) {
      if (m !== e) {
        var v = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw v.name = "Invariant Violation", v;
      }
    }
    r.isRequired = r;
    function i() {
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
      arrayOf: i,
      element: r,
      elementType: r,
      instanceOf: i,
      node: r,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return s.PropTypes = s, s;
  }, hp;
}
if (process.env.NODE_ENV !== "production") {
  var PI = Qh(), kI = !0;
  Hp.exports = SI()(PI.isElement, kI);
} else
  Hp.exports = TI()();
var Jn = Hp.exports;
const c = /* @__PURE__ */ lc(Jn);
function NI(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
var II = Qh();
function Yp(e, t) {
  return Yp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Yp(e, t);
}
function Qt(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Yp(e, t);
}
var ma = function(t, n) {
  if (process.env.NODE_ENV !== "production" && typeof t == "string")
    throw new Error("We do not support refs as string, this is a legacy API and will be likely to be removed in one of the future releases of React.");
  if (typeof t == "function") {
    t(n);
    return;
  }
  t !== null && typeof t == "object" && (t.current = n);
}, Wu = function(t) {
  return (
    // https://github.com/facebook/react/blob/v16.8.2/packages/react-reconciler/src/ReactFiberCommitWork.js#L665
    t !== null && typeof t == "object" && t.hasOwnProperty("current")
  );
};
function rb(e) {
  return e === null || e instanceof Element || e instanceof Text ? !1 : !!(e.type && e.tag);
}
var AI = /* @__PURE__ */ function(e) {
  Qt(t, e);
  function t() {
    for (var r, i = arguments.length, s = new Array(i), u = 0; u < i; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.prevNode = void 0, r;
  }
  var n = t.prototype;
  return n.componentDidMount = function() {
    var i = zp.findDOMNode(this);
    process.env.NODE_ENV !== "production" && rb(i) && (i = null), this.prevNode = i, ma(this.props.innerRef, i);
  }, n.componentDidUpdate = function(i) {
    var s = zp.findDOMNode(this);
    process.env.NODE_ENV !== "production" && rb(s) && (s = null), this.prevNode !== s && (this.prevNode = s, ma(this.props.innerRef, s)), i.innerRef !== this.props.innerRef && ma(this.props.innerRef, s);
  }, n.componentWillUnmount = function() {
    ma(this.props.innerRef, null), delete this.prevNode;
  }, n.render = function() {
    var i = this.props.children;
    return i;
  }, t;
}(L.Component), RI = /* @__PURE__ */ function(e) {
  Qt(t, e);
  function t() {
    for (var r, i = arguments.length, s = new Array(i), u = 0; u < i; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.currentNode = void 0, r.handleRefOverride = function(l) {
      var d = r.props, p = d.children, h = d.innerRef;
      ma(p.ref, l), ma(h, l), r.currentNode = l;
    }, r;
  }
  var n = t.prototype;
  return n.componentDidUpdate = function(i) {
    i.innerRef !== this.props.innerRef && ma(this.props.innerRef, this.currentNode);
  }, n.componentWillUnmount = function() {
    delete this.currentNode;
  }, n.render = function() {
    var i = this.props.children;
    return /* @__PURE__ */ L.cloneElement(i, {
      ref: this.handleRefOverride
    });
  }, t;
}(L.Component), MI = ["children", "innerRef"], or = function(t) {
  var n = t.children, r = t.innerRef, i = NI(t, MI), s = L.Children.only(n), u = II.isForwardRef(s) ? RI : AI, l = s && i && Object.keys(i).length > 0 ? /* @__PURE__ */ L.cloneElement(s, i) : s;
  return /* @__PURE__ */ L.createElement(u, {
    innerRef: r
  }, l);
};
function ce() {
  return ce = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ce.apply(null, arguments);
}
var DI = Object.prototype, LI = DI.hasOwnProperty;
function FI(e, t) {
  return e != null && LI.call(e, t);
}
var gn = Array.isArray, F1 = typeof global == "object" && global && global.Object === Object && global, $I = typeof self == "object" && self && self.Object === Object && self, Ja = F1 || $I || Function("return this")(), wa = Ja.Symbol, $1 = Object.prototype, BI = $1.hasOwnProperty, WI = $1.toString, cl = wa ? wa.toStringTag : void 0;
function UI(e) {
  var t = BI.call(e, cl), n = e[cl];
  try {
    e[cl] = void 0;
    var r = !0;
  } catch {
  }
  var i = WI.call(e);
  return r && (t ? e[cl] = n : delete e[cl]), i;
}
var jI = Object.prototype, zI = jI.toString;
function HI(e) {
  return zI.call(e);
}
var YI = "[object Null]", qI = "[object Undefined]", ab = wa ? wa.toStringTag : void 0;
function Oa(e) {
  return e == null ? e === void 0 ? qI : YI : ab && ab in Object(e) ? UI(e) : HI(e);
}
function $r(e) {
  return e != null && typeof e == "object";
}
var VI = "[object Symbol]";
function bo(e) {
  return typeof e == "symbol" || $r(e) && Oa(e) == VI;
}
var GI = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, KI = /^\w*$/;
function em(e, t) {
  if (gn(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || bo(e) ? !0 : KI.test(e) || !GI.test(e) || t != null && e in Object(t);
}
function Va(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var ZI = "[object AsyncFunction]", XI = "[object Function]", QI = "[object GeneratorFunction]", JI = "[object Proxy]";
function hs(e) {
  if (!Va(e))
    return !1;
  var t = Oa(e);
  return t == XI || t == QI || t == ZI || t == JI;
}
var mp = Ja["__core-js_shared__"], ib = function() {
  var e = /[^.]+$/.exec(mp && mp.keys && mp.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function eA(e) {
  return !!ib && ib in e;
}
var tA = Function.prototype, nA = tA.toString;
function Io(e) {
  if (e != null) {
    try {
      return nA.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var rA = /[\\^$.*+?()[\]{}|]/g, aA = /^\[object .+?Constructor\]$/, iA = Function.prototype, oA = Object.prototype, sA = iA.toString, lA = oA.hasOwnProperty, cA = RegExp(
  "^" + sA.call(lA).replace(rA, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function uA(e) {
  if (!Va(e) || eA(e))
    return !1;
  var t = hs(e) ? cA : aA;
  return t.test(Io(e));
}
function dA(e, t) {
  return e == null ? void 0 : e[t];
}
function Ao(e, t) {
  var n = dA(e, t);
  return uA(n) ? n : void 0;
}
var Rl = Ao(Object, "create");
function fA() {
  this.__data__ = Rl ? Rl(null) : {}, this.size = 0;
}
function pA(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var hA = "__lodash_hash_undefined__", mA = Object.prototype, gA = mA.hasOwnProperty;
function vA(e) {
  var t = this.__data__;
  if (Rl) {
    var n = t[e];
    return n === hA ? void 0 : n;
  }
  return gA.call(t, e) ? t[e] : void 0;
}
var yA = Object.prototype, bA = yA.hasOwnProperty;
function _A(e) {
  var t = this.__data__;
  return Rl ? t[e] !== void 0 : bA.call(t, e);
}
var wA = "__lodash_hash_undefined__";
function EA(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Rl && t === void 0 ? wA : t, this;
}
function _o(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
_o.prototype.clear = fA;
_o.prototype.delete = pA;
_o.prototype.get = vA;
_o.prototype.has = _A;
_o.prototype.set = EA;
function xA() {
  this.__data__ = [], this.size = 0;
}
function ud(e, t) {
  return e === t || e !== e && t !== t;
}
function dd(e, t) {
  for (var n = e.length; n--; )
    if (ud(e[n][0], t))
      return n;
  return -1;
}
var CA = Array.prototype, OA = CA.splice;
function SA(e) {
  var t = this.__data__, n = dd(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : OA.call(t, n, 1), --this.size, !0;
}
function TA(e) {
  var t = this.__data__, n = dd(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function PA(e) {
  return dd(this.__data__, e) > -1;
}
function kA(e, t) {
  var n = this.__data__, r = dd(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function ei(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ei.prototype.clear = xA;
ei.prototype.delete = SA;
ei.prototype.get = TA;
ei.prototype.has = PA;
ei.prototype.set = kA;
var Ml = Ao(Ja, "Map");
function NA() {
  this.size = 0, this.__data__ = {
    hash: new _o(),
    map: new (Ml || ei)(),
    string: new _o()
  };
}
function IA(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function fd(e, t) {
  var n = e.__data__;
  return IA(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function AA(e) {
  var t = fd(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function RA(e) {
  return fd(this, e).get(e);
}
function MA(e) {
  return fd(this, e).has(e);
}
function DA(e, t) {
  var n = fd(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function ti(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ti.prototype.clear = NA;
ti.prototype.delete = AA;
ti.prototype.get = RA;
ti.prototype.has = MA;
ti.prototype.set = DA;
var LA = "Expected a function";
function cc(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(LA);
  var n = function() {
    var r = arguments, i = t ? t.apply(this, r) : r[0], s = n.cache;
    if (s.has(i))
      return s.get(i);
    var u = e.apply(this, r);
    return n.cache = s.set(i, u) || s, u;
  };
  return n.cache = new (cc.Cache || ti)(), n;
}
cc.Cache = ti;
var FA = 500;
function $A(e) {
  var t = cc(e, function(r) {
    return n.size === FA && n.clear(), r;
  }), n = t.cache;
  return t;
}
var BA = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, WA = /\\(\\)?/g, UA = $A(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(BA, function(n, r, i, s) {
    t.push(i ? s.replace(WA, "$1") : r || n);
  }), t;
});
function ho(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r; )
    i[n] = t(e[n], n, e);
  return i;
}
var ob = wa ? wa.prototype : void 0, sb = ob ? ob.toString : void 0;
function pd(e) {
  if (typeof e == "string")
    return e;
  if (gn(e))
    return ho(e, pd) + "";
  if (bo(e))
    return sb ? sb.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Ro(e) {
  return e == null ? "" : pd(e);
}
function uc(e, t) {
  return gn(e) ? e : em(e, t) ? [e] : UA(Ro(e));
}
var jA = "[object Arguments]";
function lb(e) {
  return $r(e) && Oa(e) == jA;
}
var B1 = Object.prototype, zA = B1.hasOwnProperty, HA = B1.propertyIsEnumerable, hd = lb(/* @__PURE__ */ function() {
  return arguments;
}()) ? lb : function(e) {
  return $r(e) && zA.call(e, "callee") && !HA.call(e, "callee");
}, YA = 9007199254740991, qA = /^(?:0|[1-9]\d*)$/;
function md(e, t) {
  var n = typeof e;
  return t = t ?? YA, !!t && (n == "number" || n != "symbol" && qA.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var VA = 9007199254740991;
function tm(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= VA;
}
function Ds(e) {
  if (typeof e == "string" || bo(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function W1(e, t, n) {
  t = uc(t, e);
  for (var r = -1, i = t.length, s = !1; ++r < i; ) {
    var u = Ds(t[r]);
    if (!(s = e != null && n(e, u)))
      break;
    e = e[u];
  }
  return s || ++r != i ? s : (i = e == null ? 0 : e.length, !!i && tm(i) && md(u, i) && (gn(e) || hd(e)));
}
function qp(e, t) {
  return e != null && W1(e, t, FI);
}
function U1(e, t, n) {
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
function GA(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function dc(e, t) {
  t = uc(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[Ds(t[n++])];
  return n && n == r ? e : void 0;
}
function gd(e, t, n) {
  var r = -1, i = e.length;
  t < 0 && (t = -t > i ? 0 : i + t), n = n > i ? i : n, n < 0 && (n += i), i = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var s = Array(i); ++r < i; )
    s[r] = e[r + t];
  return s;
}
function KA(e, t) {
  return t.length < 2 ? e : dc(e, gd(t, 0, -1));
}
function ZA(e, t, n) {
  t = uc(t, e), e = KA(e, t);
  var r = e == null ? e : e[Ds(GA(t))];
  return r == null ? void 0 : U1(r, e, n);
}
function Hi(e) {
  return e;
}
var cb = Math.max;
function j1(e, t, n) {
  return t = cb(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, i = -1, s = cb(r.length - t, 0), u = Array(s); ++i < s; )
      u[i] = r[t + i];
    i = -1;
    for (var l = Array(t + 1); ++i < t; )
      l[i] = r[i];
    return l[t] = n(u), U1(e, this, l);
  };
}
function z1(e) {
  return function() {
    return e;
  };
}
var Uu = function() {
  try {
    var e = Ao(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), XA = Uu ? function(e, t) {
  return Uu(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: z1(t),
    writable: !0
  });
} : Hi, QA = 800, JA = 16, e2 = Date.now;
function t2(e) {
  var t = 0, n = 0;
  return function() {
    var r = e2(), i = JA - (r - n);
    if (n = r, i > 0) {
      if (++t >= QA)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var H1 = t2(XA);
function Ls(e, t) {
  return H1(j1(e, t, Hi), e + "");
}
var Ie = Ls(ZA);
function n2(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ss(e) {
  return e === void 0;
}
function r2(e, t, n) {
  return e === e && (n !== void 0 && (e = e <= n ? e : n), e = e >= t ? e : t), e;
}
var a2 = /\s/;
function i2(e) {
  for (var t = e.length; t-- && a2.test(e.charAt(t)); )
    ;
  return t;
}
var o2 = /^\s+/;
function Y1(e) {
  return e && e.slice(0, i2(e) + 1).replace(o2, "");
}
var ub = NaN, s2 = /^[-+]0x[0-9a-f]+$/i, l2 = /^0b[01]+$/i, c2 = /^0o[0-7]+$/i, u2 = parseInt;
function q1(e) {
  if (typeof e == "number")
    return e;
  if (bo(e))
    return ub;
  if (Va(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Va(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Y1(e);
  var n = l2.test(e);
  return n || c2.test(e) ? u2(e.slice(2), n ? 2 : 8) : s2.test(e) ? ub : +e;
}
var db = 1 / 0, d2 = 17976931348623157e292;
function ls(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = q1(e), e === db || e === -db) {
    var t = e < 0 ? -1 : 1;
    return t * d2;
  }
  return e === e ? e : 0;
}
function fc(e) {
  var t = ls(e), n = t % 1;
  return t === t ? n ? t - n : t : 0;
}
function f2(e, t, n) {
  return e = Ro(e), n = n == null ? 0 : r2(fc(n), 0, e.length), t = pd(t), e.slice(n, n + t.length) == t;
}
function V1(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, i = 0, s = []; ++n < r; ) {
    var u = e[n];
    t(u, n, e) && (s[i++] = u);
  }
  return s;
}
function p2(e) {
  return function(t, n, r) {
    for (var i = -1, s = Object(t), u = r(t), l = u.length; l--; ) {
      var d = u[++i];
      if (n(s[d], d, s) === !1)
        break;
    }
    return t;
  };
}
var h2 = p2();
function m2(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
function g2() {
  return !1;
}
var G1 = typeof exports == "object" && exports && !exports.nodeType && exports, fb = G1 && typeof module == "object" && module && !module.nodeType && module, v2 = fb && fb.exports === G1, pb = v2 ? Ja.Buffer : void 0, y2 = pb ? pb.isBuffer : void 0, ju = y2 || g2, b2 = "[object Arguments]", _2 = "[object Array]", w2 = "[object Boolean]", E2 = "[object Date]", x2 = "[object Error]", C2 = "[object Function]", O2 = "[object Map]", S2 = "[object Number]", T2 = "[object Object]", P2 = "[object RegExp]", k2 = "[object Set]", N2 = "[object String]", I2 = "[object WeakMap]", A2 = "[object ArrayBuffer]", R2 = "[object DataView]", M2 = "[object Float32Array]", D2 = "[object Float64Array]", L2 = "[object Int8Array]", F2 = "[object Int16Array]", $2 = "[object Int32Array]", B2 = "[object Uint8Array]", W2 = "[object Uint8ClampedArray]", U2 = "[object Uint16Array]", j2 = "[object Uint32Array]", en = {};
en[M2] = en[D2] = en[L2] = en[F2] = en[$2] = en[B2] = en[W2] = en[U2] = en[j2] = !0;
en[b2] = en[_2] = en[A2] = en[w2] = en[R2] = en[E2] = en[x2] = en[C2] = en[O2] = en[S2] = en[T2] = en[P2] = en[k2] = en[N2] = en[I2] = !1;
function z2(e) {
  return $r(e) && tm(e.length) && !!en[Oa(e)];
}
function K1(e) {
  return function(t) {
    return e(t);
  };
}
var Z1 = typeof exports == "object" && exports && !exports.nodeType && exports, Cl = Z1 && typeof module == "object" && module && !module.nodeType && module, H2 = Cl && Cl.exports === Z1, gp = H2 && F1.process, hb = function() {
  try {
    var e = Cl && Cl.require && Cl.require("util").types;
    return e || gp && gp.binding && gp.binding("util");
  } catch {
  }
}(), mb = hb && hb.isTypedArray, nm = mb ? K1(mb) : z2, Y2 = Object.prototype, q2 = Y2.hasOwnProperty;
function V2(e, t) {
  var n = gn(e), r = !n && hd(e), i = !n && !r && ju(e), s = !n && !r && !i && nm(e), u = n || r || i || s, l = u ? m2(e.length, String) : [], d = l.length;
  for (var p in e)
    q2.call(e, p) && !(u && // Safari 9 has enumerable `arguments.length` in strict mode.
    (p == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (p == "offset" || p == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (p == "buffer" || p == "byteLength" || p == "byteOffset") || // Skip index properties.
    md(p, d))) && l.push(p);
  return l;
}
var G2 = Object.prototype;
function X1(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || G2;
  return e === n;
}
function Q1(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var K2 = Q1(Object.keys, Object), Z2 = Object.prototype, X2 = Z2.hasOwnProperty;
function rm(e) {
  if (!X1(e))
    return K2(e);
  var t = [];
  for (var n in Object(e))
    X2.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function ni(e) {
  return e != null && tm(e.length) && !hs(e);
}
function Dr(e) {
  return ni(e) ? V2(e) : rm(e);
}
function J1(e, t) {
  return e && h2(e, t, Dr);
}
function Q2(e, t) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!ni(n))
      return e(n, r);
    for (var i = n.length, s = -1, u = Object(n); ++s < i && r(u[s], s, u) !== !1; )
      ;
    return n;
  };
}
var Fs = Q2(J1);
function J2(e, t) {
  var n = [];
  return Fs(e, function(r, i, s) {
    t(r, i, s) && n.push(r);
  }), n;
}
function eR() {
  this.__data__ = new ei(), this.size = 0;
}
function tR(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function nR(e) {
  return this.__data__.get(e);
}
function rR(e) {
  return this.__data__.has(e);
}
var aR = 200;
function iR(e, t) {
  var n = this.__data__;
  if (n instanceof ei) {
    var r = n.__data__;
    if (!Ml || r.length < aR - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new ti(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Ha(e) {
  var t = this.__data__ = new ei(e);
  this.size = t.size;
}
Ha.prototype.clear = eR;
Ha.prototype.delete = tR;
Ha.prototype.get = nR;
Ha.prototype.has = rR;
Ha.prototype.set = iR;
var oR = "__lodash_hash_undefined__";
function sR(e) {
  return this.__data__.set(e, oR), this;
}
function lR(e) {
  return this.__data__.has(e);
}
function wo(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new ti(); ++t < n; )
    this.add(e[t]);
}
wo.prototype.add = wo.prototype.push = sR;
wo.prototype.has = lR;
function e_(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function Dl(e, t) {
  return e.has(t);
}
var cR = 1, uR = 2;
function t_(e, t, n, r, i, s) {
  var u = n & cR, l = e.length, d = t.length;
  if (l != d && !(u && d > l))
    return !1;
  var p = s.get(e), h = s.get(t);
  if (p && h)
    return p == t && h == e;
  var m = -1, v = !0, y = n & uR ? new wo() : void 0;
  for (s.set(e, t), s.set(t, e); ++m < l; ) {
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
      if (!e_(t, function(R, F) {
        if (!Dl(y, F) && (b === R || i(b, R, n, r, s)))
          return y.push(F);
      })) {
        v = !1;
        break;
      }
    } else if (!(b === _ || i(b, _, n, r, s))) {
      v = !1;
      break;
    }
  }
  return s.delete(e), s.delete(t), v;
}
var gb = Ja.Uint8Array;
function dR(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, i) {
    n[++t] = [i, r];
  }), n;
}
function am(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var fR = 1, pR = 2, hR = "[object Boolean]", mR = "[object Date]", gR = "[object Error]", vR = "[object Map]", yR = "[object Number]", bR = "[object RegExp]", _R = "[object Set]", wR = "[object String]", ER = "[object Symbol]", xR = "[object ArrayBuffer]", CR = "[object DataView]", vb = wa ? wa.prototype : void 0, vp = vb ? vb.valueOf : void 0;
function OR(e, t, n, r, i, s, u) {
  switch (n) {
    case CR:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case xR:
      return !(e.byteLength != t.byteLength || !s(new gb(e), new gb(t)));
    case hR:
    case mR:
    case yR:
      return ud(+e, +t);
    case gR:
      return e.name == t.name && e.message == t.message;
    case bR:
    case wR:
      return e == t + "";
    case vR:
      var l = dR;
    case _R:
      var d = r & fR;
      if (l || (l = am), e.size != t.size && !d)
        return !1;
      var p = u.get(e);
      if (p)
        return p == t;
      r |= pR, u.set(e, t);
      var h = t_(l(e), l(t), r, i, s, u);
      return u.delete(e), h;
    case ER:
      if (vp)
        return vp.call(e) == vp.call(t);
  }
  return !1;
}
function n_(e, t) {
  for (var n = -1, r = t.length, i = e.length; ++n < r; )
    e[i + n] = t[n];
  return e;
}
function SR(e, t, n) {
  var r = t(e);
  return gn(e) ? r : n_(r, n(e));
}
function TR() {
  return [];
}
var PR = Object.prototype, kR = PR.propertyIsEnumerable, yb = Object.getOwnPropertySymbols, NR = yb ? function(e) {
  return e == null ? [] : (e = Object(e), V1(yb(e), function(t) {
    return kR.call(e, t);
  }));
} : TR;
function bb(e) {
  return SR(e, Dr, NR);
}
var IR = 1, AR = Object.prototype, RR = AR.hasOwnProperty;
function MR(e, t, n, r, i, s) {
  var u = n & IR, l = bb(e), d = l.length, p = bb(t), h = p.length;
  if (d != h && !u)
    return !1;
  for (var m = d; m--; ) {
    var v = l[m];
    if (!(u ? v in t : RR.call(t, v)))
      return !1;
  }
  var y = s.get(e), b = s.get(t);
  if (y && b)
    return y == t && b == e;
  var _ = !0;
  s.set(e, t), s.set(t, e);
  for (var E = u; ++m < d; ) {
    v = l[m];
    var R = e[v], F = t[v];
    if (r)
      var C = u ? r(F, R, v, t, e, s) : r(R, F, v, e, t, s);
    if (!(C === void 0 ? R === F || i(R, F, n, r, s) : C)) {
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
var Vp = Ao(Ja, "DataView"), Gp = Ao(Ja, "Promise"), cs = Ao(Ja, "Set"), Kp = Ao(Ja, "WeakMap"), _b = "[object Map]", DR = "[object Object]", wb = "[object Promise]", Eb = "[object Set]", xb = "[object WeakMap]", Cb = "[object DataView]", LR = Io(Vp), FR = Io(Ml), $R = Io(Gp), BR = Io(cs), WR = Io(Kp), fa = Oa;
(Vp && fa(new Vp(new ArrayBuffer(1))) != Cb || Ml && fa(new Ml()) != _b || Gp && fa(Gp.resolve()) != wb || cs && fa(new cs()) != Eb || Kp && fa(new Kp()) != xb) && (fa = function(e) {
  var t = Oa(e), n = t == DR ? e.constructor : void 0, r = n ? Io(n) : "";
  if (r)
    switch (r) {
      case LR:
        return Cb;
      case FR:
        return _b;
      case $R:
        return wb;
      case BR:
        return Eb;
      case WR:
        return xb;
    }
  return t;
});
var UR = 1, Ob = "[object Arguments]", Sb = "[object Array]", gu = "[object Object]", jR = Object.prototype, Tb = jR.hasOwnProperty;
function zR(e, t, n, r, i, s) {
  var u = gn(e), l = gn(t), d = u ? Sb : fa(e), p = l ? Sb : fa(t);
  d = d == Ob ? gu : d, p = p == Ob ? gu : p;
  var h = d == gu, m = p == gu, v = d == p;
  if (v && ju(e)) {
    if (!ju(t))
      return !1;
    u = !0, h = !1;
  }
  if (v && !h)
    return s || (s = new Ha()), u || nm(e) ? t_(e, t, n, r, i, s) : OR(e, t, d, n, r, i, s);
  if (!(n & UR)) {
    var y = h && Tb.call(e, "__wrapped__"), b = m && Tb.call(t, "__wrapped__");
    if (y || b) {
      var _ = y ? e.value() : e, E = b ? t.value() : t;
      return s || (s = new Ha()), i(_, E, n, r, s);
    }
  }
  return v ? (s || (s = new Ha()), MR(e, t, n, r, i, s)) : !1;
}
function vd(e, t, n, r, i) {
  return e === t ? !0 : e == null || t == null || !$r(e) && !$r(t) ? e !== e && t !== t : zR(e, t, n, r, vd, i);
}
var HR = 1, YR = 2;
function qR(e, t, n, r) {
  var i = n.length, s = i;
  if (e == null)
    return !s;
  for (e = Object(e); i--; ) {
    var u = n[i];
    if (u[2] ? u[1] !== e[u[0]] : !(u[0] in e))
      return !1;
  }
  for (; ++i < s; ) {
    u = n[i];
    var l = u[0], d = e[l], p = u[1];
    if (u[2]) {
      if (d === void 0 && !(l in e))
        return !1;
    } else {
      var h = new Ha(), m;
      if (!(m === void 0 ? vd(p, d, HR | YR, r, h) : m))
        return !1;
    }
  }
  return !0;
}
function r_(e) {
  return e === e && !Va(e);
}
function VR(e) {
  for (var t = Dr(e), n = t.length; n--; ) {
    var r = t[n], i = e[r];
    t[n] = [r, i, r_(i)];
  }
  return t;
}
function a_(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function GR(e) {
  var t = VR(e);
  return t.length == 1 && t[0][2] ? a_(t[0][0], t[0][1]) : function(n) {
    return n === e || qR(n, e, t);
  };
}
function ga(e, t, n) {
  var r = e == null ? void 0 : dc(e, t);
  return r === void 0 ? n : r;
}
function KR(e, t) {
  return e != null && t in Object(e);
}
function i_(e, t) {
  return e != null && W1(e, t, KR);
}
var ZR = 1, XR = 2;
function QR(e, t) {
  return em(e) && r_(t) ? a_(Ds(e), t) : function(n) {
    var r = ga(n, e);
    return r === void 0 && r === t ? i_(n, e) : vd(t, r, ZR | XR);
  };
}
function o_(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function JR(e) {
  return function(t) {
    return dc(t, e);
  };
}
function eM(e) {
  return em(e) ? o_(Ds(e)) : JR(e);
}
function Yi(e) {
  return typeof e == "function" ? e : e == null ? Hi : typeof e == "object" ? gn(e) ? QR(e[0], e[1]) : GR(e) : eM(e);
}
function Zp(e, t) {
  var n = gn(e) ? V1 : J2;
  return n(e, Yi(t));
}
var tM = "[object Map]", nM = "[object Set]", rM = Object.prototype, aM = rM.hasOwnProperty;
function uo(e) {
  if (e == null)
    return !0;
  if (ni(e) && (gn(e) || typeof e == "string" || typeof e.splice == "function" || ju(e) || nm(e) || hd(e)))
    return !e.length;
  var t = fa(e);
  if (t == tM || t == nM)
    return !e.size;
  if (X1(e))
    return !rm(e).length;
  for (var n in e)
    if (aM.call(e, n))
      return !1;
  return !0;
}
function s_(e, t, n, r) {
  for (var i = e.length, s = n + -1; ++s < i; )
    if (t(e[s], s, e))
      return s;
  return -1;
}
function iM(e) {
  return e !== e;
}
function oM(e, t, n) {
  for (var r = n - 1, i = e.length; ++r < i; )
    if (e[r] === t)
      return r;
  return -1;
}
function yd(e, t, n) {
  return t === t ? oM(e, t, n) : s_(e, iM, n);
}
function im(e, t) {
  var n = e == null ? 0 : e.length;
  return !!n && yd(e, t, 0) > -1;
}
var sM = Math.min;
function lM(e, t, n) {
  for (var r = im, i = e[0].length, s = e.length, u = s, l = Array(s), d = 1 / 0, p = []; u--; ) {
    var h = e[u];
    d = sM(h.length, d), l[u] = i >= 120 && h.length >= 120 ? new wo(u && h) : void 0;
  }
  h = e[0];
  var m = -1, v = l[0];
  e:
    for (; ++m < i && p.length < d; ) {
      var y = h[m], b = y;
      if (y = y !== 0 ? y : 0, !(v ? Dl(v, b) : r(p, b))) {
        for (u = s; --u; ) {
          var _ = l[u];
          if (!(_ ? Dl(_, b) : r(e[u], b)))
            continue e;
        }
        v && v.push(b), p.push(y);
      }
    }
  return p;
}
function Ll(e) {
  return $r(e) && ni(e);
}
function cM(e) {
  return Ll(e) ? e : [];
}
var uM = Ls(function(e) {
  var t = ho(e, cM);
  return t.length && t[0] === e[0] ? lM(t) : [];
});
function dM(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
    ;
  return e;
}
function fM(e) {
  return typeof e == "function" ? e : Hi;
}
function l_(e, t) {
  var n = gn(e) ? dM : Fs;
  return n(e, fM(t));
}
var Xp = function(t) {
  return "default" + (t[0].toUpperCase() + t.slice(1));
}, pM = function(t, n, r, i) {
  var s = n[t];
  if (s !== void 0) return s;
  {
    var u = n[Xp(t)];
    if (u !== void 0) return u;
    if (r) {
      var l = r[t];
      if (l !== void 0) return l;
    }
  }
  if (t === "checked") return !1;
  if (t === "value") return n.multiple ? [] : "";
}, $s = /* @__PURE__ */ function(e) {
  Qt(t, e);
  function t() {
    for (var n, r = arguments.length, i = new Array(r), s = 0; s < r; s++)
      i[s] = arguments[s];
    n = e.call.apply(e, [this].concat(i)) || this;
    var u = n.constructor, l = u.autoControlledProps, d = u.getAutoControlledStateFromProps, p = Ie(n2(n), "getInitialAutoControlledState", n.props) || {};
    if (process.env.NODE_ENV !== "production") {
      var h = n.constructor, m = h.defaultProps, v = h.name, y = h.propTypes, b = h.getDerivedStateFromProps;
      b !== t.getDerivedStateFromProps && console.error("Auto controlled " + v + " must specify a static getAutoControlledStateFromProps() instead of getDerivedStateFromProps()."), l_(l, function(F) {
        var C = Xp(F);
        qp(y, C) || console.error(v + ' is missing "' + C + '" propTypes validation for auto controlled prop "' + F + '".'), qp(y, F) || console.error(v + ' is missing propTypes validation for auto controlled prop "' + F + '".');
      });
      var _ = uM(l, Dr(m));
      uo(_) || console.error(["Do not set defaultProps for autoControlledProps. You can set defaults by", "setting state in the constructor or using an ES7 property initializer", "(https://babeljs.io/blog/2015/06/07/react-on-es6-plus#property-initializers)", "See " + v + ' props: "' + _ + '".'].join(" "));
      var E = Zp(l, function(F) {
        return f2(F, "default");
      });
      uo(E) || console.error(["Do not add default props to autoControlledProps.", "Default props are automatically handled.", "See " + v + ' autoControlledProps: "' + E + '".'].join(" "));
    }
    var R = l.reduce(function(F, C) {
      if (F[C] = pM(C, n.props, p), process.env.NODE_ENV !== "production") {
        var I = Xp(C), O = n.constructor.name;
        !ss(n.props[I]) && !ss(n.props[C]) && console.error(O + ' prop "' + C + '" is auto controlled. Specify either ' + I + " or " + C + ", but not both.");
      }
      return F;
    }, {});
    return n.state = ce({}, p, R, {
      autoControlledProps: l,
      getAutoControlledStateFromProps: d
    }), n;
  }
  return t.getDerivedStateFromProps = function(r, i) {
    var s = i.autoControlledProps, u = i.getAutoControlledStateFromProps, l = s.reduce(function(p, h) {
      var m = !ss(r[h]);
      return m && (p[h] = r[h]), p;
    }, {});
    if (u) {
      var d = u(r, ce({}, i, l), i);
      return ce({}, l, d);
    }
    return l;
  }, t.getAutoControlledStateFromProps = function() {
    return null;
  }, t;
}(J.Component);
function hM(e) {
  return function(t, n, r) {
    var i = Object(t);
    if (!ni(t)) {
      var s = Yi(n);
      t = Dr(t), n = function(l) {
        return s(i[l], l, i);
      };
    }
    var u = e(t, n, r);
    return u > -1 ? i[s ? t[u] : u] : void 0;
  };
}
var mM = Math.max;
function Qp(e, t, n) {
  var r = e == null ? 0 : e.length;
  if (!r)
    return -1;
  var i = n == null ? 0 : fc(n);
  return i < 0 && (i = mM(r + i, 0)), s_(e, Yi(t), i);
}
var c_ = hM(Qp);
function gM(e, t) {
  var n;
  return Fs(e, function(r, i, s) {
    return n = t(r, i, s), !n;
  }), !!n;
}
function Jp(e, t, n) {
  if (!Va(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? ni(n) && md(t, n.length) : r == "string" && t in n) ? ud(n[t], e) : !1;
}
function Ol(e, t, n) {
  var r = gn(e) ? e_ : gM;
  return r(e, Yi(t));
}
var vM = function(t, n) {
  return Ol(Xh.toArray(t), {
    type: n
  });
}, it = function(t) {
  return t == null || Array.isArray(t) && t.length === 0;
}, Su = {
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
function Pb(e) {
  var t = typeof e;
  return t === "string" || t === "number" ? Su[e] || e : "";
}
var q = function(t, n) {
  return t && n;
}, qn = function(t, n) {
  return t && t !== !0 && t + " " + n;
}, tn = function(t, n) {
  return t && (t === !0 ? n : t + " " + n);
}, zu = function(t, n) {
  return !t || t === !0 ? null : t.replace("large screen", "large-screen").replace(/ vertically/g, "-vertically").split(" ").map(function(r) {
    return r.replace("-", " ") + " " + n;
  }).join(" ");
}, Mo = function(t) {
  return t === "justified" ? "justified" : qn(t, "aligned");
}, qi = function(t) {
  return qn(t, "aligned");
}, Hn = function(t, n, r) {
  if (n === void 0 && (n = ""), r === void 0 && (r = !1), r && t === "equal")
    return "equal width";
  var i = typeof t;
  return (i === "string" || i === "number") && n ? Pb(t) + " " + n : Pb(t);
}, yM = 200;
function u_(e, t, n, r) {
  var i = -1, s = im, u = !0, l = e.length, d = [], p = t.length;
  if (!l)
    return d;
  t.length >= yM && (s = Dl, u = !1, t = new wo(t));
  e:
    for (; ++i < l; ) {
      var h = e[i], m = h;
      if (h = h !== 0 ? h : 0, u && m === m) {
        for (var v = p; v--; )
          if (t[v] === m)
            continue e;
        d.push(h);
      } else s(t, m, r) || d.push(h);
    }
  return d;
}
var kb = wa ? wa.isConcatSpreadable : void 0;
function bM(e) {
  return gn(e) || hd(e) || !!(kb && e && e[kb]);
}
function bd(e, t, n, r, i) {
  var s = -1, u = e.length;
  for (n || (n = bM), i || (i = []); ++s < u; ) {
    var l = e[s];
    n(l) ? n_(i, l) : r || (i[i.length] = l);
  }
  return i;
}
var eh = Ls(function(e, t) {
  return Ll(e) ? u_(e, bd(t, 1, Ll, !0)) : [];
});
function d_(e, t, n) {
  var r = e.length;
  return n = n === void 0 ? r : n, !t && n >= r ? e : gd(e, t, n);
}
function _M(e, t) {
  for (var n = e.length; n-- && yd(t, e[n], 0) > -1; )
    ;
  return n;
}
function wM(e, t) {
  for (var n = -1, r = e.length; ++n < r && yd(t, e[n], 0) > -1; )
    ;
  return n;
}
function EM(e) {
  return e.split("");
}
var xM = "\\ud800-\\udfff", CM = "\\u0300-\\u036f", OM = "\\ufe20-\\ufe2f", SM = "\\u20d0-\\u20ff", TM = CM + OM + SM, PM = "\\ufe0e\\ufe0f", kM = "\\u200d", NM = RegExp("[" + kM + xM + TM + PM + "]");
function om(e) {
  return NM.test(e);
}
var f_ = "\\ud800-\\udfff", IM = "\\u0300-\\u036f", AM = "\\ufe20-\\ufe2f", RM = "\\u20d0-\\u20ff", MM = IM + AM + RM, DM = "\\ufe0e\\ufe0f", LM = "[" + f_ + "]", th = "[" + MM + "]", nh = "\\ud83c[\\udffb-\\udfff]", FM = "(?:" + th + "|" + nh + ")", p_ = "[^" + f_ + "]", h_ = "(?:\\ud83c[\\udde6-\\uddff]){2}", m_ = "[\\ud800-\\udbff][\\udc00-\\udfff]", $M = "\\u200d", g_ = FM + "?", v_ = "[" + DM + "]?", BM = "(?:" + $M + "(?:" + [p_, h_, m_].join("|") + ")" + v_ + g_ + ")*", WM = v_ + g_ + BM, UM = "(?:" + [p_ + th + "?", th, h_, m_, LM].join("|") + ")", jM = RegExp(nh + "(?=" + nh + ")|" + UM + WM, "g");
function zM(e) {
  return e.match(jM) || [];
}
function rh(e) {
  return om(e) ? zM(e) : EM(e);
}
function HM(e, t, n) {
  if (e = Ro(e), e && t === void 0)
    return Y1(e);
  if (!e || !(t = pd(t)))
    return e;
  var r = rh(e), i = rh(t), s = wM(r, i), u = _M(r, i) + 1;
  return d_(r, s, u).join("");
}
function YM(e, t, n) {
  t == "__proto__" && Uu ? Uu(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
var qM = Object.prototype, VM = qM.hasOwnProperty;
function GM(e, t, n) {
  var r = e[t];
  (!(VM.call(e, t) && ud(r, n)) || n === void 0 && !(t in e)) && YM(e, t, n);
}
function y_(e, t, n, r) {
  if (!Va(e))
    return e;
  t = uc(t, e);
  for (var i = -1, s = t.length, u = s - 1, l = e; l != null && ++i < s; ) {
    var d = Ds(t[i]), p = n;
    if (d === "__proto__" || d === "constructor" || d === "prototype")
      return e;
    if (i != u) {
      var h = l[d];
      p = void 0, p === void 0 && (p = Va(h) ? h : md(t[i + 1]) ? [] : {});
    }
    GM(l, d, p), l = l[d];
  }
  return e;
}
function KM(e, t, n) {
  for (var r = -1, i = t.length, s = {}; ++r < i; ) {
    var u = t[r], l = dc(e, u);
    n(l, u) && y_(s, uc(u, e), l);
  }
  return s;
}
function ZM(e, t) {
  return KM(e, t, function(n, r) {
    return i_(e, r);
  });
}
function XM(e) {
  var t = e == null ? 0 : e.length;
  return t ? bd(e) : [];
}
function QM(e) {
  return H1(j1(e, void 0, XM), e + "");
}
var _d = QM(function(e, t) {
  return e == null ? {} : ZM(e, t);
}), JM = Q1(Object.getPrototypeOf, Object), eD = "[object Object]", tD = Function.prototype, nD = Object.prototype, b_ = tD.toString, rD = nD.hasOwnProperty, aD = b_.call(Object);
function wd(e) {
  if (!$r(e) || Oa(e) != eD)
    return !1;
  var t = JM(e);
  if (t === null)
    return !0;
  var n = rD.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && b_.call(n) == aD;
}
function wt(e) {
  return e == null;
}
function iD(e, t, n) {
  for (var r = -1, i = e.length; ++r < i; ) {
    var s = e[r], u = t(s);
    if (u != null && (l === void 0 ? u === u && !bo(u) : n(u, l)))
      var l = u, d = s;
  }
  return d;
}
function oD(e, t) {
  return e < t;
}
function Nb(e) {
  return e && e.length ? iD(e, Hi, oD) : void 0;
}
function sD(e, t) {
  for (var n, r = -1, i = e.length; ++r < i; ) {
    var s = t(e[r]);
    s !== void 0 && (n = n === void 0 ? s : n + s);
  }
  return n;
}
function Ib(e) {
  return e && e.length ? sD(e, Hi) : 0;
}
function __(e, t) {
  var n = -1, r = ni(e) ? Array(e.length) : [];
  return Fs(e, function(i, s, u) {
    r[++n] = t(i, s, u);
  }), r;
}
function _n(e, t) {
  var n = gn(e) ? ho : __;
  return n(e, Yi(t));
}
function lD(e, t) {
  var n = e.length;
  for (e.sort(t); n--; )
    e[n] = e[n].value;
  return e;
}
function cD(e, t) {
  if (e !== t) {
    var n = e !== void 0, r = e === null, i = e === e, s = bo(e), u = t !== void 0, l = t === null, d = t === t, p = bo(t);
    if (!l && !p && !s && e > t || s && u && d && !l && !p || r && u && d || !n && d || !i)
      return 1;
    if (!r && !s && !p && e < t || p && n && i && !r && !s || l && n && i || !u && i || !d)
      return -1;
  }
  return 0;
}
function uD(e, t, n) {
  for (var r = -1, i = e.criteria, s = t.criteria, u = i.length, l = n.length; ++r < u; ) {
    var d = cD(i[r], s[r]);
    if (d) {
      if (r >= l)
        return d;
      var p = n[r];
      return d * (p == "desc" ? -1 : 1);
    }
  }
  return e.index - t.index;
}
function dD(e, t, n) {
  t.length ? t = ho(t, function(s) {
    return gn(s) ? function(u) {
      return dc(u, s.length === 1 ? s[0] : s);
    } : s;
  }) : t = [Hi];
  var r = -1;
  t = ho(t, K1(Yi));
  var i = __(e, function(s, u, l) {
    var d = ho(t, function(p) {
      return p(s);
    });
    return { criteria: d, index: ++r, value: s };
  });
  return lD(i, function(s, u) {
    return uD(s, u, n);
  });
}
var fD = Ls(function(e, t) {
  if (e == null)
    return [];
  var n = t.length;
  return n > 1 && Jp(e, t[0], t[1]) ? t = [] : n > 2 && Jp(t[0], t[1], t[2]) && (t = [t[0]]), dD(e, bd(t), []);
});
function pD(e, t, n) {
  return e && e.length ? (t = t === void 0 ? 1 : fc(t), gd(e, 0, t < 0 ? 0 : t)) : [];
}
var ah = function() {
  return 0;
};
if (process.env.NODE_ENV !== "production") {
  var yp = [], Ab = [];
  ah = function(t, n) {
    if (t === n) return 0;
    var r = t.length, i = n.length;
    if (r === 0) return i;
    if (i === 0) return r;
    for (var s, u, l, d, p = 0, h = 0; p < r; )
      Ab[p] = t.charCodeAt(p), yp[p] = ++p;
    for (; h < i; )
      for (s = n.charCodeAt(h), l = h++, u = h, p = 0; p < r; p++)
        d = s === Ab[p] ? l : l + 1, l = yp[p], u = yp[p] = l > u ? d > u ? u + 1 : d : d > l ? l + 1 : d;
    return u;
  };
}
var hD = function() {
  var t;
  return (t = Object.prototype.toString).call.apply(t, arguments);
}, mD = function(t, n) {
  if (t[n] !== void 0 && !(typeof Element > "u") && !(t[n] instanceof Element))
    return new Error('Invalid prop "' + n + '" supplied, expected a DOM node.');
}, w_ = function(t) {
  if (!Array.isArray(t))
    throw new Error("Invalid argument supplied to suggest, expected an instance of array.");
  var n = cc(function(i) {
    var s = i.split(" ");
    return pD(fD(_n(t, function(u) {
      var l = u.split(" "), d = Ib(_n(_n(s, function(h) {
        return _n(l, function(m) {
          return ah(h, m);
        });
      }), Nb)), p = Ib(_n(_n(l, function(h) {
        return _n(s, function(m) {
          return ah(h, m);
        });
      }), Nb));
      return {
        suggestion: u,
        score: d + p
      };
    }), ["score", "suggestion"]), 3);
  }), r = t.reduce(function(i, s) {
    return i[s.split(" ").sort().join(" ")] = !0, i;
  }, {});
  return function(i, s, u) {
    var l = i[s];
    if (!(!l || r[l])) {
      var d = l.split(" ").sort().join(" ");
      if (!r[d]) {
        var p = n(l);
        if (!p.some(function(h) {
          return h.score === 0;
        }))
          return new Error(["Invalid prop `" + s + "` of value `" + l + "` supplied to `" + u + "`.", `

Instead of \`` + l + "`, did you mean:", p.map(function(h) {
            return `
  - ` + h.suggestion;
          }).join(""), `
`].join(""));
      }
    }
  };
}, zt = function(t) {
  return function(n, r, i) {
    if (!Array.isArray(t))
      throw new Error(["Invalid argument supplied to disallow, expected an instance of array.", " See `" + r + "` prop in `" + i + "`."].join(""));
    if (!(wt(n[r]) || n[r] === !1)) {
      var s = t.reduce(function(u, l) {
        return !wt(n[l]) && n[l] !== !1 ? [].concat(u, [l]) : u;
      }, []);
      if (s.length > 0)
        return new Error(["Prop `" + r + "` in `" + i + "` conflicts with props: `" + s.join("`, `") + "`.", "They cannot be defined together, choose one or the other."].join(" "));
    }
  };
}, At = function(t) {
  return function(n, r, i) {
    for (var s = arguments.length, u = new Array(s > 3 ? s - 3 : 0), l = 3; l < s; l++)
      u[l - 3] = arguments[l];
    if (!Array.isArray(t))
      throw new Error(["Invalid argument supplied to every, expected an instance of array.", "See `" + r + "` prop in `" + i + "`."].join(" "));
    var d = [];
    return t.forEach(function(p) {
      if (typeof p != "function")
        throw new Error('every() argument "validators" should contain functions, found: ' + hD(p) + ".");
      var h = p.apply(void 0, [n, r, i].concat(u));
      h && d.push(h);
    }), d[0];
  };
}, E_ = function(t, n) {
  return function(r, i, s) {
    for (var u = arguments.length, l = new Array(u > 3 ? u - 3 : 0), d = 3; d < u; d++)
      l[d - 3] = arguments[d];
    if (!wd(t))
      throw new Error(["Invalid argument supplied to givenProps, expected an object.", "See `" + i + "` prop in `" + s + "`."].join(" "));
    if (typeof n != "function")
      throw new Error(["Invalid argument supplied to givenProps, expected a function.", "See `" + i + "` prop in `" + s + "`."].join(" "));
    var p = Dr(t).every(function(v) {
      var y = t[v];
      return typeof y == "function" ? !y.apply(void 0, [r, v, s].concat(l)) : y === r[i];
    });
    if (p) {
      var h = n.apply(void 0, [r, i, s].concat(l));
      if (h) {
        var m = "{ " + Dr(_d(Dr(t), r)).map(function(v) {
          var y = r[v], b = y;
          return typeof y == "string" ? b = '"' + y + '"' : Array.isArray(y) ? b = "[" + y.join(", ") + "]" : Va(y) && (b = "{...}"), v + ": " + b;
        }).join(", ") + " }";
        return h.message = "Given props " + m + ": " + h.message, h;
      }
    }
  };
}, wi = function(t) {
  return function(n, r, i) {
    if (!Array.isArray(t))
      throw new Error(["Invalid `requiredProps` argument supplied to require, expected an instance of array.", " See `" + r + "` prop in `" + i + "`."].join(""));
    if (n[r] !== void 0) {
      var s = t.filter(function(u) {
        return n[u] === void 0;
      });
      if (s.length > 0)
        return new Error("`" + r + "` prop in `" + i + "` requires props: `" + s.join("`, `") + "`.");
    }
  };
}, Hu = function(t) {
  return function(n, r, i) {
    if (!Array.isArray(t))
      throw new Error(["Invalid argument supplied to some, expected an instance of array.", "See `" + r + "` prop in `" + i + "`."].join(" "));
    var s = n[r];
    if (!(wt(s) || s === !1)) {
      var u = s.replace("large screen", "large-screen").replace(/ vertically/g, "-vertically").split(" ").map(function(d) {
        return HM(d).replace("-", " ");
      }), l = eh(u, t);
      if (l.length > 0)
        return new Error("`" + r + "` prop in `" + i + "` has invalid values: `" + l.join("`, `") + "`.");
    }
  };
}, Ot = function() {
  return At([zt(["children"]), c.node]).apply(void 0, arguments);
}, yt = function() {
  return At([zt(["children"]), c.oneOfType([c.func, c.node, c.object, c.arrayOf(c.oneOfType([c.node, c.object]))])]).apply(void 0, arguments);
}, pc = function() {
  return At([zt(["children"]), c.arrayOf(yt)]).apply(void 0, arguments);
}, sm = c.shape({
  current: c.object
}), x_ = c.oneOfType([c.func, sm]), lm = { exports: {} }, ul = {}, bp = { exports: {} };
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
var Rb;
function C_() {
  return Rb || (Rb = 1, function(e) {
    (function() {
      var t = !!(typeof window < "u" && window.document && window.document.createElement), n = {
        canUseDOM: t,
        canUseWorkers: typeof Worker < "u",
        canUseEventListeners: t && !!(window.addEventListener || window.attachEvent),
        canUseViewport: t && !!window.screen
      };
      e.exports ? e.exports = n : window.ExecutionEnvironment = n;
    })();
  }(bp)), bp.exports;
}
var Mb;
function gD() {
  if (Mb) return ul;
  Mb = 1, Object.defineProperty(ul, "__esModule", { value: !0 });
  var e = C_(), t = J;
  function n(S) {
    return (n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(x) {
      return typeof x;
    } : function(x) {
      return x && typeof Symbol == "function" && x.constructor === Symbol && x !== Symbol.prototype ? "symbol" : typeof x;
    })(S);
  }
  function r(S, x) {
    if (!(S instanceof x)) throw new TypeError("Cannot call a class as a function");
  }
  function i(S, x) {
    for (var P = 0; P < x.length; P++) {
      var k = x[P];
      k.enumerable = k.enumerable || !1, k.configurable = !0, "value" in k && (k.writable = !0), Object.defineProperty(S, k.key, k);
    }
  }
  function s(S, x, P) {
    return x && i(S.prototype, x), S;
  }
  function u(S, x, P) {
    return x in S ? Object.defineProperty(S, x, { value: P, enumerable: !0, configurable: !0, writable: !0 }) : S[x] = P, S;
  }
  function l(S, x) {
    if (typeof x != "function" && x !== null) throw new TypeError("Super expression must either be null or a function");
    S.prototype = Object.create(x && x.prototype, { constructor: { value: S, writable: !0, configurable: !0 } }), x && p(S, x);
  }
  function d(S) {
    return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(x) {
      return x.__proto__ || Object.getPrototypeOf(x);
    })(S);
  }
  function p(S, x) {
    return (p = Object.setPrototypeOf || function(P, k) {
      return P.__proto__ = k, P;
    })(S, x);
  }
  function h(S) {
    if (S === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return S;
  }
  function m(S, x) {
    return !x || typeof x != "object" && typeof x != "function" ? h(S) : x;
  }
  var v = function() {
    function S(x) {
      r(this, S), u(this, "handlers", void 0), this.handlers = x.slice(0);
    }
    return s(S, [{ key: "addHandlers", value: function(x) {
      for (var P = this.handlers.slice(0), k = x.length, B = 0; B < k; B += 1) P.push(x[B]);
      return new S(P);
    } }, { key: "dispatchEvent", value: function(x, P) {
      var k = this.handlers.length - 1;
      if (P) {
        for (var B = k; B >= 0; B -= 1) this.handlers[B].called || (this.handlers[B].called = !0, this.handlers[B](x));
        for (var Y = k; Y >= 0; Y -= 1) this.handlers[Y].called = !1;
      } else
        (0, this.handlers[k])(x);
    } }, { key: "hasHandlers", value: function() {
      return this.handlers.length > 0;
    } }, { key: "removeHandlers", value: function(x) {
      for (var P = [], k = this.handlers.length, B = 0; B < k; B += 1) {
        var Y = this.handlers[B];
        x.indexOf(Y) === -1 && P.push(Y);
      }
      return new S(P);
    } }]), S;
  }();
  function y(S) {
    var x = /* @__PURE__ */ new Map();
    return S.forEach(function(P, k) {
      x.set(k, P);
    }), x;
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
  var R = function() {
    function S(x, P) {
      r(this, S), u(this, "handlerSets", void 0), u(this, "poolName", void 0), this.handlerSets = P, this.poolName = x;
    }
    return s(S, [{ key: "addHandlers", value: function(x, P) {
      var k = y(this.handlerSets);
      if (k.has(x)) {
        var B = k.get(x);
        k.set(x, B.addHandlers(P));
      } else k.set(x, new v(P));
      return new S(this.poolName, k);
    } }, { key: "dispatchEvent", value: function(x, P) {
      var k = this.handlerSets.get(x), B = this.poolName === "default";
      k && k.dispatchEvent(P, B);
    } }, { key: "hasHandlers", value: function(x) {
      if (!x) return this.handlerSets.size > 0;
      var P = this.handlerSets.get(x);
      return !!P && P.hasHandlers();
    } }, { key: "removeHandlers", value: function(x, P) {
      var k = y(this.handlerSets);
      if (!k.has(x)) return new S(this.poolName, k);
      var B = k.get(x).removeHandlers(P);
      return B.hasHandlers() ? k.set(x, B) : k.delete(x), new S(this.poolName, k);
    } }]), S;
  }();
  u(R, "createByType", function(S, x, P) {
    var k = /* @__PURE__ */ new Map();
    return k.set(x, new v(P)), new R(S, k);
  });
  var F = function() {
    function S(x) {
      var P = this;
      r(this, S), u(this, "handlers", /* @__PURE__ */ new Map()), u(this, "pools", /* @__PURE__ */ new Map()), u(this, "target", void 0), u(this, "createEmitter", function(k) {
        return function(B) {
          P.pools.forEach(function(Y) {
            Y.dispatchEvent(k, B);
          });
        };
      }), this.target = x;
    }
    return s(S, [{ key: "addHandlers", value: function(x, P, k) {
      if (this.pools.has(x)) {
        var B = this.pools.get(x);
        this.pools.set(x, B.addHandlers(P, k));
      } else this.pools.set(x, R.createByType(x, P, k));
      this.handlers.has(P) || this.addTargetHandler(P);
    } }, { key: "hasHandlers", value: function() {
      return this.handlers.size > 0;
    } }, { key: "removeHandlers", value: function(x, P, k) {
      if (this.pools.has(x)) {
        var B = this.pools.get(x).removeHandlers(P, k);
        B.hasHandlers() ? this.pools.set(x, B) : this.pools.delete(x);
        var Y = !1;
        this.pools.forEach(function(ne) {
          return Y = Y || ne.hasHandlers(P);
        }), Y || this.removeTargetHandler(P);
      }
    } }, { key: "addTargetHandler", value: function(x) {
      var P = this.createEmitter(x);
      this.handlers.set(x, P), this.target.addEventListener(x, P, !0);
    } }, { key: "removeTargetHandler", value: function(x) {
      this.handlers.has(x) && (this.target.removeEventListener(x, this.handlers.get(x), !0), this.handlers.delete(x));
    } }]), S;
  }(), C = function() {
    function S() {
      var x = this;
      r(this, S), u(this, "targets", /* @__PURE__ */ new Map()), u(this, "getTarget", function(P) {
        var k = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], B = E(P);
        if (x.targets.has(B)) return x.targets.get(B);
        if (!k) return null;
        var Y = new F(B);
        return x.targets.set(B, Y), Y;
      }), u(this, "removeTarget", function(P) {
        x.targets.delete(E(P));
      });
    }
    return s(S, [{ key: "sub", value: function(x, P) {
      var k = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (e.canUseDOM) {
        var B = k.target, Y = B === void 0 ? document : B, ne = k.pool, z = ne === void 0 ? "default" : ne;
        this.getTarget(Y).addHandlers(z, x, b(P));
      }
    } }, { key: "unsub", value: function(x, P) {
      var k = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (e.canUseDOM) {
        var B = k.target, Y = B === void 0 ? document : B, ne = k.pool, z = ne === void 0 ? "default" : ne, re = this.getTarget(Y, !1);
        re && (re.removeHandlers(z, x, b(P)), re.hasHandlers() || this.removeTarget(Y));
      }
    } }]), S;
  }(), I = new C(), O = function(S) {
    function x() {
      return r(this, x), m(this, d(x).apply(this, arguments));
    }
    return l(x, t.PureComponent), s(x, [{ key: "componentDidMount", value: function() {
      this.subscribe(this.props);
    } }, { key: "componentDidUpdate", value: function(P) {
      this.unsubscribe(P), this.subscribe(this.props);
    } }, { key: "componentWillUnmount", value: function() {
      this.unsubscribe(this.props);
    } }, { key: "subscribe", value: function(P) {
      var k = P.name, B = P.on, Y = P.pool, ne = P.target;
      I.sub(k, B, { pool: Y, target: ne });
    } }, { key: "unsubscribe", value: function(P) {
      var k = P.name, B = P.on, Y = P.pool, ne = P.target;
      I.unsub(k, B, { pool: Y, target: ne });
    } }, { key: "render", value: function() {
      return null;
    } }]), x;
  }();
  return u(O, "defaultProps", { pool: "default", target: "document" }), O.propTypes = {}, ul.instance = I, ul.default = O, ul;
}
var dl = {}, Db;
function vD() {
  if (Db) return dl;
  Db = 1, Object.defineProperty(dl, "__esModule", { value: !0 });
  var e = C_(), t = Jn, n = J;
  function r(x) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? r = function(P) {
      return typeof P;
    } : r = function(P) {
      return P && typeof Symbol == "function" && P.constructor === Symbol && P !== Symbol.prototype ? "symbol" : typeof P;
    }, r(x);
  }
  function i(x, P) {
    if (!(x instanceof P))
      throw new TypeError("Cannot call a class as a function");
  }
  function s(x, P) {
    for (var k = 0; k < P.length; k++) {
      var B = P[k];
      B.enumerable = B.enumerable || !1, B.configurable = !0, "value" in B && (B.writable = !0), Object.defineProperty(x, B.key, B);
    }
  }
  function u(x, P, k) {
    return P && s(x.prototype, P), x;
  }
  function l(x, P, k) {
    return P in x ? Object.defineProperty(x, P, {
      value: k,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : x[P] = k, x;
  }
  function d(x, P) {
    if (typeof P != "function" && P !== null)
      throw new TypeError("Super expression must either be null or a function");
    x.prototype = Object.create(P && P.prototype, {
      constructor: {
        value: x,
        writable: !0,
        configurable: !0
      }
    }), P && h(x, P);
  }
  function p(x) {
    return p = Object.setPrototypeOf ? Object.getPrototypeOf : function(k) {
      return k.__proto__ || Object.getPrototypeOf(k);
    }, p(x);
  }
  function h(x, P) {
    return h = Object.setPrototypeOf || function(B, Y) {
      return B.__proto__ = Y, B;
    }, h(x, P);
  }
  function m(x) {
    if (x === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return x;
  }
  function v(x, P) {
    return P && (typeof P == "object" || typeof P == "function") ? P : m(x);
  }
  var y = /* @__PURE__ */ function() {
    function x(P) {
      i(this, x), l(this, "handlers", void 0), this.handlers = P.slice(0);
    }
    return u(x, [{
      key: "addHandlers",
      value: function(k) {
        for (var B = this.handlers.slice(0), Y = k.length, ne = 0; ne < Y; ne += 1)
          B.push(k[ne]);
        return new x(B);
      }
      /**
       * @see https://jsperf.com/suir-eventset-dispatchsingle
       * @see https://jsperf.com/suir-eventset-dispatchmultiple2
       */
    }, {
      key: "dispatchEvent",
      value: function(k, B) {
        var Y = this.handlers.length - 1;
        if (!B) {
          var ne = this.handlers[Y];
          ne(k);
          return;
        }
        for (var z = Y; z >= 0; z -= 1)
          this.handlers[z].called || (this.handlers[z].called = !0, this.handlers[z](k));
        for (var re = Y; re >= 0; re -= 1)
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
      value: function(k) {
        for (var B = [], Y = this.handlers.length, ne = 0; ne < Y; ne += 1) {
          var z = this.handlers[ne];
          k.indexOf(z) === -1 && B.push(z);
        }
        return new x(B);
      }
    }]), x;
  }();
  function b(x) {
    var P = /* @__PURE__ */ new Map();
    return x.forEach(function(k, B) {
      P.set(B, k);
    }), P;
  }
  function _(x) {
    return Array.isArray(x) ? x : [x];
  }
  var E = function(P) {
    return P !== null && r(P) === "object" && P.hasOwnProperty("current");
  };
  function R(x) {
    return x === "document" ? document : x === "window" ? window : E(x) ? x.current || document : x || document;
  }
  var F = /* @__PURE__ */ function() {
    function x(P, k) {
      i(this, x), l(this, "handlerSets", void 0), l(this, "poolName", void 0), this.handlerSets = k, this.poolName = P;
    }
    return u(x, [{
      key: "addHandlers",
      value: function(k, B) {
        var Y = b(this.handlerSets);
        if (Y.has(k)) {
          var ne = Y.get(k);
          Y.set(k, ne.addHandlers(B));
        } else
          Y.set(k, new y(B));
        return new x(this.poolName, Y);
      }
    }, {
      key: "dispatchEvent",
      value: function(k, B) {
        var Y = this.handlerSets.get(k), ne = this.poolName === "default";
        Y && Y.dispatchEvent(B, ne);
      }
    }, {
      key: "hasHandlers",
      value: function(k) {
        if (!k)
          return this.handlerSets.size > 0;
        var B = this.handlerSets.get(k);
        return B ? B.hasHandlers() : !1;
      }
    }, {
      key: "removeHandlers",
      value: function(k, B) {
        var Y = b(this.handlerSets);
        if (!Y.has(k))
          return new x(this.poolName, Y);
        var ne = Y.get(k), z = ne.removeHandlers(B);
        return z.hasHandlers() ? Y.set(k, z) : Y.delete(k), new x(this.poolName, Y);
      }
    }]), x;
  }();
  l(F, "createByType", function(x, P, k) {
    var B = /* @__PURE__ */ new Map();
    return B.set(P, new y(k)), new F(x, B);
  });
  var C = /* @__PURE__ */ function() {
    function x(P) {
      var k = this;
      i(this, x), l(this, "handlers", /* @__PURE__ */ new Map()), l(this, "pools", /* @__PURE__ */ new Map()), l(this, "target", void 0), l(this, "createEmitter", function(B) {
        return function(Y) {
          k.pools.forEach(function(ne) {
            ne.dispatchEvent(B, Y);
          });
        };
      }), this.target = P;
    }
    return u(x, [{
      key: "addHandlers",
      value: function(k, B, Y) {
        if (this.pools.has(k)) {
          var ne = this.pools.get(k);
          this.pools.set(k, ne.addHandlers(B, Y));
        } else
          this.pools.set(k, F.createByType(k, B, Y));
        this.handlers.has(B) || this.addTargetHandler(B);
      }
    }, {
      key: "hasHandlers",
      value: function() {
        return this.handlers.size > 0;
      }
    }, {
      key: "removeHandlers",
      value: function(k, B, Y) {
        if (this.pools.has(k)) {
          var ne = this.pools.get(k), z = ne.removeHandlers(B, Y);
          z.hasHandlers() ? this.pools.set(k, z) : this.pools.delete(k);
          var re = !1;
          this.pools.forEach(function(pe) {
            return re = re || pe.hasHandlers(B);
          }), re || this.removeTargetHandler(B);
        }
      }
    }, {
      key: "addTargetHandler",
      value: function(k) {
        var B = this.createEmitter(k);
        this.handlers.set(k, B), this.target.addEventListener(k, B, !0);
      }
    }, {
      key: "removeTargetHandler",
      value: function(k) {
        this.handlers.has(k) && (this.target.removeEventListener(k, this.handlers.get(k), !0), this.handlers.delete(k));
      }
    }]), x;
  }(), I = /* @__PURE__ */ function() {
    function x() {
      var P = this;
      i(this, x), l(this, "targets", /* @__PURE__ */ new Map()), l(this, "getTarget", function(k) {
        var B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, Y = R(k);
        if (P.targets.has(Y))
          return P.targets.get(Y);
        if (!B) return null;
        var ne = new C(Y);
        return P.targets.set(Y, ne), ne;
      }), l(this, "removeTarget", function(k) {
        P.targets.delete(R(k));
      });
    }
    return u(x, [{
      key: "sub",
      value: function(k, B) {
        var Y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (e.canUseDOM) {
          var ne = Y.target, z = ne === void 0 ? document : ne, re = Y.pool, pe = re === void 0 ? "default" : re, ve = this.getTarget(z);
          ve.addHandlers(pe, k, _(B));
        }
      }
    }, {
      key: "unsub",
      value: function(k, B) {
        var Y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (e.canUseDOM) {
          var ne = Y.target, z = ne === void 0 ? document : ne, re = Y.pool, pe = re === void 0 ? "default" : re, ve = this.getTarget(z, !1);
          ve && (ve.removeHandlers(pe, k, _(B)), ve.hasHandlers() || this.removeTarget(z));
        }
      }
    }]), x;
  }(), O = new I(), S = /* @__PURE__ */ function(x) {
    d(P, x);
    function P() {
      return i(this, P), v(this, p(P).apply(this, arguments));
    }
    return u(P, [{
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
        var Y = B.name, ne = B.on, z = B.pool, re = B.target;
        O.sub(Y, ne, {
          pool: z,
          target: re
        });
      }
    }, {
      key: "unsubscribe",
      value: function(B) {
        var Y = B.name, ne = B.on, z = B.pool, re = B.target;
        O.unsub(Y, ne, {
          pool: z,
          target: re
        });
      }
    }, {
      key: "render",
      value: function() {
        return null;
      }
    }]), P;
  }(n.PureComponent);
  return l(S, "defaultProps", {
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
  }, dl.instance = O, dl.default = S, dl;
}
var Yu;
process.env.NODE_ENV === "production" ? Yu = gD() : Yu = vD();
lm.exports = Yu.default;
var wl = lm.exports.instance = Yu.instance, yD = lm.exports;
const Ua = /* @__PURE__ */ lc(yD);
function O_() {
}
var bD = 1 / 0, _D = cs && 1 / am(new cs([, -0]))[1] == bD ? function(e) {
  return new cs(e);
} : O_, wD = 200;
function S_(e, t, n) {
  var r = -1, i = im, s = e.length, u = !0, l = [], d = l;
  if (s >= wD) {
    var p = _D(e);
    if (p)
      return am(p);
    u = !1, i = Dl, d = new wo();
  } else
    d = l;
  e:
    for (; ++r < s; ) {
      var h = e[r], m = h;
      if (h = h !== 0 ? h : 0, u && m === m) {
        for (var v = d.length; v--; )
          if (d[v] === m)
            continue e;
        l.push(h);
      } else i(d, m, n) || (d !== l && d.push(m), l.push(h));
    }
  return l;
}
function Ed(e) {
  return e && e.length ? S_(e) : [];
}
var ED = "[object Number]";
function xD(e) {
  return typeof e == "number" || $r(e) && Oa(e) == ED;
}
var CD = "[object String]";
function cm(e) {
  return typeof e == "string" || !gn(e) && $r(e) && Oa(e) == CD;
}
var OD = "[object Boolean]";
function SD(e) {
  return e === !0 || e === !1 || $r(e) && Oa(e) == OD;
}
function T_(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = T_(e[t])) && (r && (r += " "), r += n);
  else for (t in e) e[t] && (r && (r += " "), r += t);
  return r;
}
function ze() {
  for (var e, t, n = 0, r = ""; n < arguments.length; ) (e = arguments[n++]) && (t = T_(e)) && (r && (r += " "), r += t);
  return r;
}
var Lb = {};
function ih(e, t, n, r) {
  if (r === void 0 && (r = {}), typeof e != "function" && typeof e != "string")
    throw new Error("createShorthand() Component must be a string or function.");
  if (wt(n) || SD(n))
    return null;
  var i = cm(n), s = xD(n), u = hs(n), l = /* @__PURE__ */ L.isValidElement(n), d = wd(n), p = i || s || gn(n);
  if (!u && !l && !d && !p)
    return process.env.NODE_ENV !== "production" && console.error(["Shorthand value must be a string|number|array|object|ReactElement|function.", " Use null|undefined|boolean for none", " Received " + typeof n + "."].join("")), null;
  var h = r, m = h.defaultProps, v = m === void 0 ? {} : m, y = l && n.props || d && n || p && t(n), b = r, _ = b.overrideProps, E = _ === void 0 ? {} : _;
  E = hs(E) ? E(ce({}, v, y)) : E;
  var R = ce({}, v, y, E);
  if (v.className || E.className || y.className) {
    var F = ze(v.className, E.className, y.className);
    R.className = Ed(F.split(" ")).join(" ");
  }
  if ((v.style || E.style || y.style) && (R.style = ce({}, v.style, y.style, E.style)), wt(R.key)) {
    var C = R.childKey, I = r, O = I.autoGenerateKey, S = O === void 0 ? !0 : O;
    wt(C) ? S && (i || s) && (R.key = n) : (R.key = typeof C == "function" ? C(R) : C, delete R.childKey);
  }
  if (l)
    return /* @__PURE__ */ L.cloneElement(n, R);
  if (typeof R.children == "function")
    return R.children(e, ce({}, R, {
      children: void 0
    }));
  if (p || d)
    return /* @__PURE__ */ L.createElement(e, R);
  if (u)
    return process.env.NODE_ENV !== "production" && (Lb[e] || (Lb[e] = !0, console.warn('Warning: There is a deprecated shorthand function usage for "' + e + '". It is deprecated and will be removed in v3 release. Please follow our upgrade guide: https://github.com/Semantic-Org/Semantic-UI-React/pull/4029'))), n(e, R, R.children);
}
function Yt(e, t) {
  if (typeof e != "function" && typeof e != "string")
    throw new Error("createShorthandFactory() Component must be a string or function.");
  return function(n, r) {
    return ih(e, t, n, r);
  };
}
var TD = /* @__PURE__ */ Yt("div", function(e) {
  return {
    children: e
  };
}), PD = /* @__PURE__ */ Yt("input", function(e) {
  return {
    type: e
  };
}), oh = /* @__PURE__ */ Yt("label", function(e) {
  return {
    children: e
  };
}), Ue = function(t, n) {
  var r = t.handledProps, i = r === void 0 ? [] : r;
  return Object.keys(n).reduce(function(s, u) {
    return u === "childKey" || i.indexOf(u) === -1 && (s[u] = n[u]), s;
  }, {});
};
function He(e, t, n) {
  var r = e.defaultProps, i = r === void 0 ? {} : r;
  if (t.as && t.as !== i.as) return t.as;
  if (n) {
    var s = n();
    if (s) return s;
  }
  return t.href ? "a" : i.as || "div";
}
function kD(e, t) {
  return ho(t, function(n) {
    return e[n];
  });
}
function P_(e) {
  return e == null ? [] : kD(e, Dr(e));
}
var ND = Math.max;
function va(e, t, n, r) {
  e = ni(e) ? e : P_(e), n = n ? fc(n) : 0;
  var i = e.length;
  return n < 0 && (n = ND(i + n, 0)), cm(e) ? n <= i && e.indexOf(t, n) > -1 : !!i && yd(e, t, n) > -1;
}
var k_ = [
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
], ID = [
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
], AD = [].concat(k_, ID), RD = ["alt", "height", "src", "srcSet", "width", "loading"], um = function(t, n) {
  n === void 0 && (n = {});
  var r = n, i = r.htmlProps, s = i === void 0 ? AD : i, u = r.includeAria, l = u === void 0 ? !0 : u, d = {}, p = {};
  return l_(t, function(h, m) {
    var v = l && (/^aria-.*$/.test(m) || m === "role"), y = va(s, m) || v ? d : p;
    y[m] = h;
  }), [d, p];
}, MD = typeof document == "object" && document !== null, DD = typeof window == "object" && window !== null && window.self === window, mo = function e() {
  return wt(e.override) ? MD && DD : e.override;
}, LD = Math.max, FD = Math.min;
function $D(e, t, n) {
  return e >= FD(t, n) && e < LD(t, n);
}
function Fb(e, t, n) {
  return t = ls(t), n === void 0 ? (n = t, t = 0) : n = ls(n), e = q1(e), $D(e, t, n);
}
function BD(e) {
  return e && e.length ? e[0] : void 0;
}
var Ci = function(t, n) {
  if (Ol([n, t], wt)) return !1;
  if (n.target && (Ie(n.target, "setAttribute", "data-suir-click-target", !0), document.querySelector("[data-suir-click-target=true]")))
    return Ie(n.target, "removeAttribute", "data-suir-click-target"), t.contains(n.target);
  var r = n.clientX, i = n.clientY;
  if (Ol([r, i], wt)) return !1;
  var s = t.getClientRects();
  if (!t.offsetWidth || !t.offsetHeight || !s || !s.length) return !1;
  var u = BD(s), l = u.top, d = u.bottom, p = u.left, h = u.right;
  return Ol([l, d, p, h], wt) ? !1 : Fb(i, l, d + 1e-3) && Fb(r, p, h + 1e-3);
}, N_ = function(t) {
  return {
    active: !1,
    type: "ellipsisItem",
    value: t
  };
}, WD = function() {
  return {
    active: !1,
    type: "firstItem",
    value: 1
  };
}, UD = function(t) {
  return {
    active: !1,
    type: "prevItem",
    value: Math.max(1, t - 1)
  };
}, jD = function(t) {
  return function(n) {
    return {
      active: t === n,
      type: "pageItem",
      value: n
    };
  };
}, zD = function(t, n) {
  return {
    active: !1,
    type: "nextItem",
    value: Math.min(t + 1, n)
  };
}, HD = function(t) {
  return {
    active: !1,
    type: "lastItem",
    value: t
  };
}, YD = Math.ceil, qD = Math.max;
function VD(e, t, n, r) {
  for (var i = -1, s = qD(YD((t - e) / (n || 1)), 0), u = Array(s); s--; )
    u[++i] = e, e += n;
  return u;
}
function GD(e) {
  return function(t, n, r) {
    return r && typeof r != "number" && Jp(t, n, r) && (n = r = void 0), t = ls(t), n === void 0 ? (n = t, t = 0) : n = ls(n), r = r === void 0 ? t < n ? 1 : -1 : ls(r), VD(t, n, r);
  };
}
var KD = GD(), ZD = function(t, n, r) {
  var i = n - 1, s = i !== t + 1, u = s ? N_ : r;
  return u(i);
}, XD = function(t, n, r) {
  var i = t + 1, s = i !== n - 1, u = s ? N_ : r;
  return u(i);
}, Tu = function(t, n, r) {
  return _n(KD(t, n + 1), r);
}, QD = function(t, n) {
  var r = t.activePage, i = t.boundaryRange, s = t.hideEllipsis, u = t.siblingRange, l = t.totalPages, d = s ? 0 : 1, p = i, h = Tu(1, p, n), m = l + 1 - i, v = Tu(m, l, n), y = Math.min(Math.max(r - u, p + d + 1), m - d - 2 * u - 1), b = y + 2 * u, _ = Tu(y, b, n);
  return [].concat(h, [!s && ZD(p, y, n)], _, [!s && XD(b, m, n)], v).filter(Boolean);
}, JD = function(t) {
  var n = t.boundaryRange, r = t.hideEllipsis, i = t.siblingRange, s = t.totalPages, u = 2 * n, l = r ? 0 : 2, d = 2 * i;
  return 1 + l + d + u >= s;
}, eL = function(t) {
  var n = t.activePage, r = t.boundaryRange, i = t.hideEllipsis, s = t.siblingRange, u = t.totalPages;
  return {
    activePage: +n,
    boundaryRange: +r,
    hideEllipsis: !!i,
    siblingRange: +s,
    totalPages: +u
  };
}, tL = function(t) {
  var n = eL(t), r = n.activePage, i = n.totalPages, s = jD(r), u = JD(n) ? Tu(1, i, s) : QD(n, s);
  return [WD(), UD(r)].concat(u, [zD(r, i), HD(i)]);
}, na = ["red", "orange", "yellow", "olive", "green", "teal", "blue", "violet", "purple", "pink", "brown", "grey", "black"], hc = ["left", "right"], lr = ["mini", "tiny", "small", "medium", "large", "big", "huge", "massive"], Do = ["left", "center", "right", "justified"], Lo = ["bottom", "middle", "top"], I_ = ["mobile", "tablet", "computer", "large screen", "widescreen"], nr = [].concat(Dr(Su), Dr(Su).map(Number), P_(Su)), nL = ["american sign language interpreting", "assistive listening systems", "audio description", "blind", "braille", "closed captioning", "closed captioning outline", "deaf", "low vision", "phone volume", "question circle", "question circle outline", "sign language", "tty", "universal access", "wheelchair"], rL = ["angle double down", "angle double left", "angle double right", "angle double up", "angle down", "angle left", "angle right", "angle up", "arrow alternate circle down", "arrow alternate circle down outline", "arrow alternate circle left", "arrow alternate circle left outline", "arrow alternate circle right", "arrow alternate circle right outline", "arrow alternate circle up", "arrow alternate circle up outline", "arrow circle down", "arrow circle left", "arrow circle right", "arrow circle up", "arrow down", "arrow left", "arrow right", "arrow up", "arrows alternate", "arrows alternate horizontal", "arrows alternate vertical", "caret down", "caret left", "caret right", "caret square down", "caret square down outline", "caret square left", "caret square left outline", "caret square right", "caret square right outline", "caret square up", "caret square up outline", "caret up", "cart arrow down", "chart line", "chevron circle down", "chevron circle left", "chevron circle right", "chevron circle up", "chevron down", "chevron left", "chevron right", "chevron up", "cloud download", "cloud upload", "download", "exchange", "expand arrows alternate", "external alternate", "external square alternate", "hand point down", "hand point down outline", "hand point left", "hand point left outline", "hand point right", "hand point right outline", "hand point up", "hand point up outline", "hand pointer", "hand pointer outline", "history", "level down alternate", "level up alternate", "location arrow", "long arrow alternate down", "long arrow alternate left", "long arrow alternate right", "long arrow alternate up", "mouse pointer", "play", "random", "recycle", "redo", "redo alternate", "reply", "reply all", "retweet", "share", "share square", "share square outline", "sign-in", "sign-out", "sign-in alternate", "sign-out alternate", "sort", "sort alphabet down", "sort alphabet up", "sort amount down", "sort amount up", "sort down", "sort numeric down", "sort numeric up", "sort up", "sync", "sync alternate", "text height", "text width", "undo", "undo alternate", "upload", "zoom-in", "zoom-out"], aL = ["audio description", "backward", "circle", "circle outline", "closed captioning", "closed captioning outline", "compress", "eject", "expand", "expand arrows alternate", "fast backward", "fast forward", "file audio", "file audio outline", "file video", "file video outline", "film", "forward", "headphones", "microphone", "microphone slash", "music", "pause", "pause circle", "pause circle outline", "phone volume", "play", "play circle", "play circle outline", "podcast", "random", "redo", "redo alternate", "rss", "rss square", "step backward", "step forward", "stop", "stop circle", "stop circle outline", "sync", "sync alternate", "undo", "undo alternate", "video", "volume down", "volume off", "volume up"], iL = ["address book", "address book outline", "address card", "address card outline", "archive", "balance scale", "birthday cake", "book", "briefcase", "building", "building outline", "bullhorn", "bullseye", "calculator", "calendar", "calendar outline", "calendar alternate", "calendar alternate outline", "certificate", "chart area", "chart bar", "chart bar outline", "chart line", "chart pie", "clipboard", "clipboard outline", "coffee", "columns", "compass", "compass outline", "copy", "copy outline", "copyright", "copyright outline", "cut", "edit", "edit outline", "envelope", "envelope outline", "envelope open", "envelope open outline", "envelope square", "eraser", "fax", "file", "file outline", "file alternate", "file alternate outline", "folder", "folder outline", "folder open", "folder open outline", "globe", "industry", "paperclip", "paste", "pen square", "pencil alternate", "percent", "phone", "phone square", "phone volume", "registered", "registered outline", "save", "save outline", "sitemap", "sticky note", "sticky note outline", "suitcase", "table", "tag", "tags", "tasks", "thumbtack", "trademark"], oL = ["chess", "chess bishop", "chess board", "chess king", "chess knight", "chess pawn", "chess queen", "chess rook", "square full"], sL = ["archive", "barcode", "bath", "bug", "code", "code branch", "coffee", "file", "file outline", "file alternate", "file alternate outline", "file code", "file code outline", "filter", "fire extinguisher", "folder", "folder outline", "folder open", "folder open outline", "keyboard", "keyboard outline", "microchip", "qrcode", "shield alternate", "sitemap", "terminal", "user secret", "window close", "window close outline", "window maximize", "window maximize outline", "window minimize", "window minimize outline", "window restore", "window restore outline"], lL = ["address book", "address book outline", "address card", "address card outline", "american sign language interpreting", "assistive listening systems", "at", "bell", "bell outline", "bell slash", "bell slash outline", "bullhorn", "comment", "comment outline", "comment alternate", "comment alternate outline", "comments", "comments outline", "envelope", "envelope outline", "envelope open", "envelope open outline", "envelope square", "fax", "inbox", "language", "microphone", "microphone slash", "mobile", "mobile alternate", "paper plane", "paper plane outline", "phone", "phone square", "phone volume", "rss", "rss square", "tty", "wifi"], cL = ["desktop", "download", "hdd", "hdd outline", "headphones", "keyboard", "keyboard outline", "laptop", "microchip", "mobile", "mobile alternate", "plug", "power off", "print", "save", "save outline", "server", "tablet", "tablet alternate", "tv", "upload"], uL = ["dollar sign", "euro sign", "lira sign", "money bill alternate", "money bill alternate outline", "pound sign", "ruble sign", "rupee sign", "shekel sign", "won sign", "yen sign"], dL = ["bell", "bell outline", "bell slash", "bell slash outline", "calendar", "calendar outline", "calendar alternate", "calendar alternate outline", "calendar check", "calendar check outline", "calendar minus", "calendar minus outline", "calendar plus", "calendar plus outline", "calendar times", "calendar times outline", "clock", "clock outline", "hourglass", "hourglass outline", "hourglass end", "hourglass half", "hourglass start", "stopwatch"], fL = ["adjust", "clone", "clone outline", "copy", "copy outline", "crop", "crosshairs", "cut", "edit", "edit outline", "eraser", "eye", "eye dropper", "eye slash", "eye slash outline", "object group", "object group outline", "object ungroup", "object ungroup outline", "paint brush", "paste", "pencil alternate", "save", "save outline", "tint"], pL = ["align center", "align justify", "align left", "align right", "bold", "clipboard", "clipboard outline", "clone", "clone outline", "columns", "copy", "copy outline", "cut", "edit", "edit outline", "eraser", "file", "file outline", "file alternate", "file alternate outline", "font", "heading", "i cursor", "indent", "italic", "linkify", "list", "list alternate", "list alternate outline", "list ol", "list ul", "outdent", "paper plane", "paper plane outline", "paperclip", "paragraph", "paste", "pencil alternate", "print", "quote left", "quote right", "redo", "redo alternate", "reply", "reply all", "share", "strikethrough", "subscript", "superscript", "sync", "sync alternate", "table", "tasks", "text height", "text width", "th", "th large", "th list", "trash", "trash alternate", "trash alternate outline", "underline", "undo", "undo alternate", "unlink"], hL = ["archive", "clone", "clone outline", "copy", "copy outline", "cut", "file", "file outline", "file alternate", "file alternate outline", "file archive", "file archive outline", "file audio", "file audio outline", "file code", "file code outline", "file excel", "file excel outline", "file image", "file image outline", "file pdf", "file pdf outline", "file powerpoint", "file powerpoint outline", "file video", "file video outline", "file word", "file word outline", "folder", "folder outline", "folder open", "folder open outline", "paste", "save", "save outline", "sticky note", "sticky note outline"], mL = ["genderless", "mars", "mars double", "mars stroke", "mars stroke horizontal", "mars stroke vertical", "mercury", "neuter", "transgender", "transgender alternate", "venus", "venus double", "venus mars"], gL = ["hand lizard", "hand lizard outline", "hand paper", "hand paper outline", "hand peace", "hand peace outline", "hand point down", "hand point down outline", "hand point left", "hand point left outline", "hand point right", "hand point right outline", "hand point up", "hand point up outline", "hand pointer", "hand pointer outline", "hand rock", "hand rock outline", "hand scissors", "hand scissors outline", "hand spock", "hand spock outline", "handshake", "handshake outline", "thumbs down", "thumbs down outline", "thumbs up", "thumbs up outline"], vL = ["ambulance", "h square", "heart", "heart outline", "heartbeat", "hospital", "hospital outline", "medkit", "plus square", "plus square outline", "stethoscope", "user md", "wheelchair"], yL = ["adjust", "bolt", "camera", "camera retro", "clone", "clone outline", "compress", "expand", "eye", "eye dropper", "eye slash", "eye slash outline", "file image", "file image outline", "film", "id badge", "id badge outline", "id card", "id card outline", "image", "image outline", "images", "images outline", "sliders horizontal", "tint"], bL = ["ban", "barcode", "bars", "beer", "bell", "bell outline", "bell slash", "bell slash outline", "bug", "bullhorn", "bullseye", "calculator", "calendar", "calendar outline", "calendar alternate", "calendar alternate outline", "calendar check", "calendar check outline", "calendar minus", "calendar minus outline", "calendar plus", "calendar plus outline", "calendar times", "calendar times outline", "certificate", "check", "check circle", "check circle outline", "check square", "check square outline", "circle", "circle outline", "clipboard", "clipboard outline", "clone", "clone outline", "cloud", "cloud download", "cloud upload", "coffee", "cog", "cogs", "copy", "copy outline", "cut", "database", "dot circle", "dot circle outline", "download", "edit", "edit outline", "ellipsis horizontal", "ellipsis vertical", "envelope", "envelope outline", "envelope open", "envelope open outline", "eraser", "exclamation", "exclamation circle", "exclamation triangle", "external alternate", "external square alternate", "eye", "eye slash", "eye slash outline", "file", "file outline", "file alternate", "file alternate outline", "filter", "flag", "flag outline", "flag checkered", "folder", "folder outline", "folder open", "folder open outline", "frown", "frown outline", "hashtag", "heart", "heart outline", "history", "home", "i cursor", "info", "info circle", "language", "magic", "meh", "meh outline", "microphone", "microphone slash", "minus", "minus circle", "minus square", "minus square outline", "paste", "pencil alternate", "plus", "plus circle", "plus square", "plus square outline", "qrcode", "question", "question circle", "question circle outline", "quote left", "quote right", "redo", "redo alternate", "reply", "reply all", "rss", "rss square", "save", "save outline", "search", "search minus", "search plus", "share", "share alternate", "share alternate square", "share square", "share square outline", "shield alternate", "sign-in", "sign-out", "signal", "sitemap", "sliders horizontal", "smile", "smile outline", "sort", "sort alphabet down", "sort alphabet up", "sort amount down", "sort amount up", "sort down", "sort numeric down", "sort numeric up", "sort up", "star", "star outline", "star half", "star half outline", "sync", "sync alternate", "thumbs down", "thumbs down outline", "thumbs up", "thumbs up outline", "times", "times circle", "times circle outline", "toggle off", "toggle on", "trash", "trash alternate", "trash alternate outline", "trophy", "undo", "undo alternate", "upload", "user", "user outline", "user circle", "user circle outline", "wifi"], _L = ["box", "boxes", "clipboard check", "clipboard list", "dolly", "dolly flatbed", "pallet", "shipping fast", "truck", "warehouse"], wL = ["ambulance", "anchor", "balance scale", "bath", "bed", "beer", "bell", "bell outline", "bell slash", "bell slash outline", "bicycle", "binoculars", "birthday cake", "blind", "bomb", "book", "bookmark", "bookmark outline", "briefcase", "building", "building outline", "car", "coffee", "crosshairs", "dollar sign", "eye", "eye slash", "eye slash outline", "fighter jet", "fire", "fire extinguisher", "flag", "flag outline", "flag checkered", "flask", "gamepad", "gavel", "gift", "glass martini", "globe", "graduation cap", "h square", "heart", "heart outline", "heartbeat", "home", "hospital", "hospital outline", "image", "image outline", "images", "images outline", "industry", "info", "info circle", "key", "leaf", "lemon", "lemon outline", "life ring", "life ring outline", "lightbulb", "lightbulb outline", "location arrow", "low vision", "magnet", "male", "map", "map outline", "map marker", "map marker alternate", "map pin", "map signs", "medkit", "money bill alternate", "money bill alternate outline", "motorcycle", "music", "newspaper", "newspaper outline", "paw", "phone", "phone square", "phone volume", "plane", "plug", "plus", "plus square", "plus square outline", "print", "recycle", "road", "rocket", "search", "search minus", "search plus", "ship", "shopping bag", "shopping basket", "shopping cart", "shower", "street view", "subway", "suitcase", "tag", "tags", "taxi", "thumbtack", "ticket alternate", "tint", "train", "tree", "trophy", "truck", "tty", "umbrella", "university", "utensil spoon", "utensils", "wheelchair", "wifi", "wrench"], EL = ["ambulance", "band aid", "dna", "first aid", "heart", "heart outline", "heartbeat", "hospital", "hospital outline", "hospital symbol", "pills", "plus", "stethoscope", "syringe", "thermometer", "user md", "weight"], xL = ["ambulance", "anchor", "archive", "balance scale", "bath", "bed", "beer", "bell", "bell outline", "bicycle", "binoculars", "birthday cake", "bomb", "book", "bookmark", "bookmark outline", "briefcase", "bug", "building", "building outline", "bullhorn", "bullseye", "bus", "calculator", "calendar", "calendar outline", "calendar alternate", "calendar alternate outline", "camera", "camera retro", "car", "clipboard", "clipboard outline", "cloud", "coffee", "cog", "cogs", "compass", "compass outline", "copy", "copy outline", "cube", "cubes", "cut", "envelope", "envelope outline", "envelope open", "envelope open outline", "eraser", "eye", "eye dropper", "fax", "fighter jet", "file", "file outline", "file alternate", "file alternate outline", "film", "fire", "fire extinguisher", "flag", "flag outline", "flag checkered", "flask", "futbol", "futbol outline", "gamepad", "gavel", "gem", "gem outline", "gift", "glass martini", "globe", "graduation cap", "hdd", "hdd outline", "headphones", "heart", "heart outline", "home", "hospital", "hospital outline", "hourglass", "hourglass outline", "image", "image outline", "images", "images outline", "industry", "key", "keyboard", "keyboard outline", "laptop", "leaf", "lemon", "lemon outline", "life ring", "life ring outline", "lightbulb", "lightbulb outline", "lock", "lock open", "magic", "magnet", "map", "map outline", "map marker", "map marker alternate", "map pin", "map signs", "medkit", "microchip", "microphone", "mobile", "mobile alternate", "money bill alternate", "money bill alternate outline", "moon", "moon outline", "motorcycle", "newspaper", "newspaper outline", "paint brush", "paper plane", "paper plane outline", "paperclip", "paste", "paw", "pencil alternate", "phone", "plane", "plug", "print", "puzzle piece", "road", "rocket", "save", "save outline", "search", "shield alternate", "shopping bag", "shopping basket", "shopping cart", "shower", "snowflake", "snowflake outline", "space shuttle", "star", "star outline", "sticky note", "sticky note outline", "stopwatch", "subway", "suitcase", "sun", "sun outline", "tablet", "tablet alternate", "tachometer alternate", "tag", "tags", "taxi", "thumbtack", "ticket alternate", "train", "trash", "trash alternate", "trash alternate outline", "tree", "trophy", "truck", "tv", "umbrella", "university", "unlock", "unlock alternate", "utensil spoon", "utensils", "wheelchair", "wrench"], CL = ["bell", "bell outline", "bookmark", "bookmark outline", "bullhorn", "camera", "camera retro", "cart arrow down", "cart plus", "certificate", "credit card", "credit card outline", "gem", "gem outline", "gift", "handshake", "handshake outline", "heart", "heart outline", "key", "shopping bag", "shopping basket", "shopping cart", "star", "star outline", "tag", "tags", "thumbs down", "thumbs down outline", "thumbs up", "thumbs up outline", "trophy"], OL = ["bookmark", "bookmark outline", "calendar", "calendar outline", "certificate", "circle", "circle outline", "cloud", "comment", "comment outline", "file", "file outline", "folder", "folder outline", "heart", "heart outline", "map marker", "play", "square", "square outline", "star", "star outline"], SL = ["asterisk", "certificate", "circle notch", "cog", "compass", "compass outline", "crosshairs", "life ring", "life ring outline", "snowflake", "snowflake outline", "spinner", "sun", "sun outline", "sync"], TL = ["baseball ball", "basketball ball", "bowling ball", "football ball", "futbol", "futbol outline", "golf ball", "hockey puck", "quidditch", "table tennis", "volleyball ball"], PL = ["ban", "battery empty", "battery full", "battery half", "battery quarter", "battery three quarters", "bell", "bell outline", "bell slash", "bell slash outline", "calendar", "calendar outline", "calendar alternate", "calendar alternate outline", "calendar check", "calendar check outline", "calendar minus", "calendar minus outline", "calendar plus", "calendar plus outline", "calendar times", "calendar times outline", "cart arrow down", "cart plus", "exclamation", "exclamation circle", "exclamation triangle", "eye", "eye slash", "eye slash outline", "file", "file outline", "file alternate", "file alternate outline", "folder", "folder outline", "folder open", "folder open outline", "info", "info circle", "lock", "lock open", "minus", "minus circle", "minus square", "minus square outline", "plus", "plus circle", "plus square", "plus square outline", "question", "question circle", "question circle outline", "shield alternate", "shopping cart", "sign in alternate", "sign out alternate", "thermometer empty", "thermometer full", "thermometer half", "thermometer quarter", "thermometer three quarters", "thumbs down", "thumbs down outline", "thumbs up", "thumbs up outline", "toggle off", "toggle on", "unlock", "unlock alternate"], kL = ["address book", "address book outline", "address card", "address card outline", "bed", "blind", "child", "female", "frown", "frown outline", "id badge", "id badge outline", "id card", "id card outline", "male", "meh", "meh outline", "power off", "smile", "smile outline", "street view", "user", "user outline", "user circle", "user circle outline", "user md", "user plus", "user secret", "user times", "users", "wheelchair"], NL = ["ambulance", "bicycle", "bus", "car", "fighter jet", "motorcycle", "paper plane", "paper plane outline", "plane", "rocket", "ship", "shopping cart", "space shuttle", "subway", "taxi", "train", "truck", "wheelchair"], IL = ["archive", "book", "bookmark", "bookmark outline", "edit", "edit outline", "envelope", "envelope outline", "envelope open", "envelope open outline", "eraser", "file", "file outline", "file alternate", "file alternate outline", "folder", "folder outline", "folder open", "folder open outline", "keyboard", "keyboard outline", "newspaper", "newspaper outline", "paper plane", "paper plane outline", "paperclip", "paragraph", "pen square", "pencil alternate", "quote left", "quote right", "sticky note", "sticky note outline", "thumbtack"], AL = ["500px", "accessible", "accusoft", "adn", "adversal", "affiliatetheme", "algolia", "amazon", "amazon pay", "amilia", "android", "angellist", "angrycreative", "angular", "app store", "app store ios", "apper", "apple", "apple pay", "asymmetrik", "audible", "autoprefixer", "avianex", "aviato", "aws", "bandcamp", "behance", "behance square", "bimobject", "bitbucket", "bitcoin", "bity", "black tie", "blackberry", "blogger", "blogger b", "bluetooth", "bluetooth b", "btc", "buromobelexperte", "buysellads", "cc amazon pay", "cc amex", "cc apple pay", "cc diners club", "cc discover", "cc jcb", "cc mastercard", "cc paypal", "cc stripe", "cc visa", "centercode", "chrome", "cloudscale", "cloudsmith", "cloudversify", "codepen", "codiepie", "connectdevelop", "contao", "cpanel", "creative commons", "css3", "css3 alternate", "cuttlefish", "d and d", "dashcube", "delicious", "deploydog", "deskpro", "deviantart", "digg", "digital ocean", "discord", "discourse", "dochub", "docker", "draft2digital", "dribbble", "dribbble square", "dropbox", "drupal", "dyalog", "earlybirds", "edge", "elementor", "ember", "empire", "envira", "erlang", "ethereum", "etsy", "expeditedssl", "facebook", "facebook f", "facebook messenger", "facebook square", "firefox", "first order", "firstdraft", "flickr", "flipboard", "fly", "font awesome", "font awesome alternate", "font awesome flag", "fonticons", "fonticons fi", "fort awesome", "fort awesome alternate", "forumbee", "foursquare", "free code camp", "freebsd", "get pocket", "gg", "gg circle", "git", "git square", "github", "github alternate", "github square", "gitkraken", "gitlab", "gitter", "glide", "glide g", "gofore", "goodreads", "goodreads g", "google", "google drive", "google play", "google plus", "google plus g", "google plus square", "google wallet", "gratipay", "grav", "gripfire", "grunt", "gulp", "hacker news", "hacker news square", "hips", "hire a helper", "hooli", "hotjar", "houzz", "html5", "hubspot", "imdb", "instagram", "internet explorer", "ioxhost", "itunes", "itunes note", "jenkins", "joget", "joomla", "js", "js square", "jsfiddle", "keycdn", "kickstarter", "kickstarter k", "korvue", "laravel", "lastfm", "lastfm square", "leanpub", "less", "linechat", "linkedin", "linkedin alternate", "linode", "linux", "lyft", "magento", "maxcdn", "medapps", "medium", "medium m", "medrt", "meetup", "microsoft", "mix", "mixcloud", "mizuni", "modx", "monero", "napster", "nintendo switch", "node", "node js", "npm", "ns8", "nutritionix", "odnoklassniki", "odnoklassniki square", "opencart", "openid", "opera", "optin monster", "osi", "page4", "pagelines", "palfed", "patreon", "paypal", "periscope", "phabricator", "phoenix framework", "php", "pied piper", "pied piper alternate", "pied piper pp", "pinterest", "pinterest p", "pinterest square", "playstation", "product hunt", "pushed", "python", "qq", "quinscape", "quora", "ravelry", "react", "rebel", "redriver", "reddit", "reddit alien", "reddit square", "rendact", "renren", "replyd", "resolving", "rocketchat", "rockrms", "safari", "sass", "schlix", "scribd", "searchengin", "sellcast", "sellsy", "servicestack", "shirtsinbulk", "simplybuilt", "sistrix", "skyatlas", "skype", "slack", "slack hash", "slideshare", "snapchat", "snapchat ghost", "snapchat square", "soundcloud", "speakap", "spotify", "stack exchange", "stack overflow", "staylinked", "steam", "steam square", "steam symbol", "sticker mule", "strava", "stripe", "stripe s", "studiovinari", "stumbleupon", "stumbleupon circle", "superpowers", "supple", "telegram", "telegram plane", "tencent weibo", "themeisle", "trello", "tripadvisor", "tumblr", "tumblr square", "twitch", "twitter", "twitter square", "typo3", "uber", "uikit", "uniregistry", "untappd", "usb", "ussunnah", "vaadin", "viacoin", "viadeo", "viadeo square", "viber", "vimeo", "vimeo square", "vimeo v", "vine", "vk", "vnv", "vuejs", "wechat", "weibo", "weixin", "whatsapp", "whatsapp square", "whmcs", "wikipedia w", "windows", "wordpress", "wordpress simple", "wpbeginner", "wpexplorer", "wpforms", "xbox", "xing", "xing square", "y combinator", "yahoo", "yandex", "yandex international", "yelp", "yoast", "youtube", "youtube square"], RL = Ed([].concat(nL, rL, aL, iL, oL, sL, lL, cL, uL, dL, fL, pL, hL, mL, gL, vL, yL, bL, _L, wL, EL, xL, CL, OL, SL, TL, PL, kL, NL, IL, AL)), ML = ["chess rock", "ordered list", "unordered list", "user doctor", "shield", "puzzle", "add circle", "add square", "add to calendar", "add to cart", "add user", "add", "alarm mute", "alarm", "ald", "als", "announcement", "area chart", "area graph", "arrow down cart", "asexual", "asl interpreting", "asl", "assistive listening devices", "attach", "attention", "balance", "bar", "bathtub", "battery four", "battery high", "battery low", "battery one", "battery three", "battery two", "battery zero", "birthday", "block layout", "bluetooth alternative", "broken chain", "browser", "call square", "call", "cancel", "cart", "cc", "chain", "chat", "checked calendar", "checkmark", "circle notched", "close", "cny", "cocktail", "commenting", "computer", "configure", "content", "deafness", "delete calendar", "delete", "detective", "discussions", "doctor", "dollar", "dont", "drivers license", "dropdown", "emergency", "envira gallery", "erase", "eur", "euro", "eyedropper", "factory", "favorite", "feed", "female homosexual", "file text", "file text outline", "find", "first aid", "fork", "game", "gay", "gbp", "google plus circle", "google plus official", "grab", "graduation", "grid layout", "group", "h", "hand victory", "handicap", "hard of hearing", "header", "help circle", "help", "heterosexual", "hide", "hotel", "hourglass four", "hourglass full", "hourglass one", "hourglass three", "hourglass two", "idea", "ils", "in cart", "inr", "intergender", "intersex", "jpy", "krw", "lab", "law", "legal", "lesbian", "lightning", "like", "line graph", "linkedin square", "linkify", "lira", "list layout", "magnify", "mail forward", "mail outline", "mail square", "mail", "male homosexual", "man", "marker", "mars alternate", "mars horizontal", "mars vertical", "microsoft edge", "military", "ms edge", "mute", "new pied piper", "non binary transgender", "numbered list", "options", "other gender horizontal", "other gender vertical", "other gender", "payment", "paypal card", "pencil square", "photo", "picture", "pie chart", "pie graph", "pied piper hat", "pin", "plus cart", "point", "pointing down", "pointing left", "pointing right", "pointing up", "pound", "power cord", "power", "privacy", "r circle", "rain", "record", "refresh", "remove circle", "remove from calendar", "remove user", "remove", "repeat", "rmb", "rouble", "rub", "ruble", "rupee", "s15", "selected radio", "send", "setting", "settings", "shekel", "sheqel", "shipping", "shop", "shuffle", "shutdown", "sidebar", "signing", "signup", "sliders", "soccer", "sort alphabet ascending", "sort alphabet descending", "sort ascending", "sort content ascending", "sort content descending", "sort descending", "sort numeric ascending", "sort numeric descending", "sound", "spy", "stripe card", "student", "talk", "target", "teletype", "television", "text cursor", "text telephone", "theme", "thermometer", "thumb tack", "time", "tm", "toggle down", "toggle left", "toggle right", "toggle up", "translate", "travel", "treatment", "triangle down", "triangle left", "triangle right", "triangle up", "try", "unhide", "unlinkify", "unmute", "usd", "user cancel", "user close", "user delete", "user x", "vcard", "video camera", "video play", "volume control phone", "wait", "warning circle", "warning sign", "warning", "wi-fi", "winner", "wizard", "woman", "won", "wordpress beginner", "wordpress forms", "world", "write square", "x", "yen", "zip", "zoom in", "zoom out", "zoom", "bitbucket square", "checkmark box", "circle thin", "cloud download", "cloud upload", "compose", "conversation", "credit card alternative", "currency", "dashboard", "diamond", "disk", "exchange", "external share", "external square", "external", "facebook official", "food", "hourglass zero", "level down", "level up", "log out", "meanpath", "money", "move", "pencil", "protect", "radio", "remove bookmark", "resize horizontal", "resize vertical", "sign in", "sign out", "spoon", "star half empty", "star half full", "ticket", "times rectangle", "write", "youtube play"], DL = Ed([].concat(RL, ML)), LL = [
  "left dropdown"
  // nested dropdown menu direction icon
], FL = Ed([].concat(DL, LL));
function $L(e, t) {
  return vd(e, t);
}
var $b = mo() && process.env.NODE_ENV !== "test" ? J.useLayoutEffect : J.useEffect, BL = /\s+/;
function WL(e) {
  var t = [];
  return e ? (e.forEach(function(n) {
    if (typeof n.current == "string") {
      var r = n.current.split(BL);
      r.forEach(function(i) {
        t.push(i);
      });
    }
  }), t.filter(function(n, r, i) {
    return n.length > 0 && i.indexOf(n) === r;
  })) : [];
}
function UL(e, t) {
  return [t.filter(function(n) {
    return e.indexOf(n) === -1;
  }), e.filter(function(n) {
    return t.indexOf(n) === -1;
  })];
}
var Bb = /* @__PURE__ */ new Map(), _p = function(t, n) {
  var r = WL(n), i = UL(Bb.get(t) || [], r), s = i[0], u = i[1];
  t && (s.forEach(function(l) {
    return t.classList.add(l);
  }), u.forEach(function(l) {
    return t.classList.remove(l);
  })), Bb.set(t, r);
}, jL = function() {
  var t = this;
  this.add = function(n, r) {
    if (t.nodes.has(n)) {
      var i = t.nodes.get(n);
      i.add(r);
      return;
    }
    var s = /* @__PURE__ */ new Set();
    s.add(r), t.nodes.set(n, s);
  }, this.del = function(n, r) {
    if (t.nodes.has(n)) {
      var i = t.nodes.get(n);
      if (i.size === 1) {
        t.nodes.delete(n);
        return;
      }
      i.delete(r);
    }
  }, this.emit = function(n, r) {
    r(n, t.nodes.get(n));
  }, this.nodes = /* @__PURE__ */ new Map();
}, fl = new jL();
function zL(e, t) {
  var n = J.useRef(), r = J.useRef(!1);
  $b(function() {
    if (n.current = t, r.current) {
      var i = Wu(e) ? e.current : e;
      fl.emit(i, _p);
    }
    r.current = !0;
  }, [t]), $b(function() {
    var i = Wu(e) ? e.current : e;
    return fl.add(i, n), fl.emit(i, _p), function() {
      fl.del(i, n), fl.emit(i, _p);
    };
  }, [e]);
}
var Qr = Ls(function(e, t) {
  return Ll(e) ? u_(e, t) : [];
});
function ms(e) {
  var t = e.children, n = e.className, r = e.content, i = e.size, s = ze(i, "icons", n), u = Ue(ms, e), l = He(ms, e);
  return /* @__PURE__ */ J.createElement(l, ce({}, u, {
    className: s
  }), it(t) ? r : t);
}
ms.handledProps = ["as", "children", "className", "content", "size"];
ms.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** Primary content. */
  children: c.node,
  /** Additional classes. */
  className: c.string,
  /** Shorthand for primary content. */
  content: Ot,
  /** Size of the icon group. */
  size: c.oneOf(Qr(lr, "medium"))
} : {};
ms.defaultProps = {
  as: "i"
};
var We = /* @__PURE__ */ function(e) {
  Qt(t, e);
  function t() {
    for (var r, i = arguments.length, s = new Array(i), u = 0; u < i; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handleClick = function(l) {
      var d = r.props.disabled;
      if (d) {
        l.preventDefault();
        return;
      }
      Ie(r.props, "onClick", l, r.props);
    }, r;
  }
  var n = t.prototype;
  return n.getIconAriaOptions = function() {
    var i = {}, s = this.props, u = s["aria-label"], l = s["aria-hidden"];
    return wt(u) ? i["aria-hidden"] = "true" : i["aria-label"] = u, wt(l) || (i["aria-hidden"] = l), i;
  }, n.render = function() {
    var i = this.props, s = i.bordered, u = i.circular, l = i.className, d = i.color, p = i.corner, h = i.disabled, m = i.fitted, v = i.flipped, y = i.inverted, b = i.link, _ = i.loading, E = i.name, R = i.rotated, F = i.size, C = ze(d, E, F, q(s, "bordered"), q(u, "circular"), q(h, "disabled"), q(m, "fitted"), q(y, "inverted"), q(b, "link"), q(_, "loading"), tn(p, "corner"), qn(v, "flipped"), qn(R, "rotated"), "icon", l), I = Ue(t, this.props), O = He(t, this.props), S = this.getIconAriaOptions();
    return /* @__PURE__ */ J.createElement(O, ce({}, I, S, {
      className: C,
      onClick: this.handleClick
    }));
  }, t;
}(A1);
We.handledProps = ["aria-hidden", "aria-label", "as", "bordered", "circular", "className", "color", "corner", "disabled", "fitted", "flipped", "inverted", "link", "loading", "name", "rotated", "size"];
We.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** Formatted to appear bordered. */
  bordered: c.bool,
  /** Icon can formatted to appear circular. */
  circular: c.bool,
  /** Additional classes. */
  className: c.string,
  /** Color of the icon. */
  color: c.oneOf(na),
  /** Icons can display a smaller corner icon. */
  corner: c.oneOfType([c.bool, c.oneOf(["top left", "top right", "bottom left", "bottom right"])]),
  /** Show that the icon is inactive. */
  disabled: c.bool,
  /** Fitted, without space to left or right of Icon. */
  fitted: c.bool,
  /** Icon can be flipped. */
  flipped: c.oneOf(["horizontally", "vertically"]),
  /** Formatted to have its colors inverted for contrast. */
  inverted: c.bool,
  /** Icon can be formatted as a link. */
  link: c.bool,
  /** Icon can be used as a simple loader. */
  loading: c.bool,
  /** Name of the icon. */
  name: w_(FL),
  /** Icon can rotated. */
  rotated: c.oneOf(["clockwise", "counterclockwise"]),
  /** Size of the icon. */
  size: c.oneOf(Qr(lr, "medium")),
  /** Icon can have an aria label. */
  "aria-hidden": c.string,
  /** Icon can have an aria label. */
  "aria-label": c.string
} : {};
We.defaultProps = {
  as: "i"
};
We.Group = ms;
We.create = Yt(We, function(e) {
  return {
    name: e
  };
});
var Wb = function(t) {
  return t !== null && !Array.isArray(t) && typeof t == "object";
}, qu = {
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
for (var vu = 0; vu < 24; vu += 1)
  qu[112 + vu] = "F" + (vu + 1);
for (var wp = 0; wp < 26; wp += 1) {
  var Ep = wp + 65;
  qu[Ep] = [String.fromCharCode(Ep + 32), String.fromCharCode(Ep)];
}
var Ae = {
  codes: qu,
  /**
   * Get the `keyCode` or `which` value from a keyboard event or `key` name.
   * @param {string|object} eventOrKey A keyboard event-like object or `key` name.
   * @param {string} [eventOrKey.key] If object, it must have one of these keys.
   * @param {number} [eventOrKey.keyCode] If object, it must have one of these keys.
   * @param {number} [eventOrKey.which] If object, it must have one of these keys.
   * @returns {number|undefined}
   */
  getCode: function(t) {
    return Wb(t) ? t.keyCode || t.which || this[t.key] : this[t];
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
    var n = Wb(t);
    if (n && t.key)
      return t.key;
    var r = qu[n ? t.keyCode || t.which : t];
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
Ae.Spacebar = Ae[" "];
Ae.Digit0 = Ae[0];
Ae.Digit1 = Ae[1];
Ae.Digit2 = Ae[2];
Ae.Digit3 = Ae[3];
Ae.Digit4 = Ae[4];
Ae.Digit5 = Ae[5];
Ae.Digit6 = Ae[6];
Ae.Digit7 = Ae[7];
Ae.Digit8 = Ae[8];
Ae.Digit9 = Ae[9];
Ae.Tilde = Ae["~"];
Ae.GraveAccent = Ae["`"];
Ae.ExclamationPoint = Ae["!"];
Ae.AtSign = Ae["@"];
Ae.PoundSign = Ae["#"];
Ae.PercentSign = Ae["%"];
Ae.Caret = Ae["^"];
Ae.Ampersand = Ae["&"];
Ae.PlusSign = Ae["+"];
Ae.MinusSign = Ae["-"];
Ae.EqualsSign = Ae["="];
Ae.DivisionSign = Ae["/"];
Ae.MultiplicationSign = Ae["*"];
Ae.Comma = Ae[","];
Ae.Decimal = Ae["."];
Ae.Colon = Ae[":"];
Ae.Semicolon = Ae[";"];
Ae.Pipe = Ae["|"];
Ae.BackSlash = Ae["\\"];
Ae.QuestionMark = Ae["?"];
Ae.SingleQuote = Ae["'"];
Ae.DoubleQuote = Ae['"'];
Ae.LeftCurlyBrace = Ae["{"];
Ae.RightCurlyBrace = Ae["}"];
Ae.LeftParenthesis = Ae["("];
Ae.RightParenthesis = Ae[")"];
Ae.LeftAngleBracket = Ae["<"];
Ae.RightAngleBracket = Ae[">"];
Ae.LeftSquareBracket = Ae["["];
Ae.RightSquareBracket = Ae["]"];
var HL = Ae;
const vn = /* @__PURE__ */ lc(HL);
var sh = { exports: {} }, Ut = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ub;
function YL() {
  if (Ub) return Ut;
  Ub = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), u = Symbol.for("react.context"), l = Symbol.for("react.server_context"), d = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), b;
  b = Symbol.for("react.module.reference");
  function _(E) {
    if (typeof E == "object" && E !== null) {
      var R = E.$$typeof;
      switch (R) {
        case e:
          switch (E = E.type, E) {
            case n:
            case i:
            case r:
            case p:
            case h:
              return E;
            default:
              switch (E = E && E.$$typeof, E) {
                case l:
                case u:
                case d:
                case v:
                case m:
                case s:
                  return E;
                default:
                  return R;
              }
          }
        case t:
          return R;
      }
    }
  }
  return Ut.ContextConsumer = u, Ut.ContextProvider = s, Ut.Element = e, Ut.ForwardRef = d, Ut.Fragment = n, Ut.Lazy = v, Ut.Memo = m, Ut.Portal = t, Ut.Profiler = i, Ut.StrictMode = r, Ut.Suspense = p, Ut.SuspenseList = h, Ut.isAsyncMode = function() {
    return !1;
  }, Ut.isConcurrentMode = function() {
    return !1;
  }, Ut.isContextConsumer = function(E) {
    return _(E) === u;
  }, Ut.isContextProvider = function(E) {
    return _(E) === s;
  }, Ut.isElement = function(E) {
    return typeof E == "object" && E !== null && E.$$typeof === e;
  }, Ut.isForwardRef = function(E) {
    return _(E) === d;
  }, Ut.isFragment = function(E) {
    return _(E) === n;
  }, Ut.isLazy = function(E) {
    return _(E) === v;
  }, Ut.isMemo = function(E) {
    return _(E) === m;
  }, Ut.isPortal = function(E) {
    return _(E) === t;
  }, Ut.isProfiler = function(E) {
    return _(E) === i;
  }, Ut.isStrictMode = function(E) {
    return _(E) === r;
  }, Ut.isSuspense = function(E) {
    return _(E) === p;
  }, Ut.isSuspenseList = function(E) {
    return _(E) === h;
  }, Ut.isValidElementType = function(E) {
    return typeof E == "string" || typeof E == "function" || E === n || E === i || E === r || E === p || E === h || E === y || typeof E == "object" && E !== null && (E.$$typeof === v || E.$$typeof === m || E.$$typeof === s || E.$$typeof === u || E.$$typeof === d || E.$$typeof === b || E.getModuleId !== void 0);
  }, Ut.typeOf = _, Ut;
}
var jt = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jb;
function qL() {
  return jb || (jb = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), u = Symbol.for("react.context"), l = Symbol.for("react.server_context"), d = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), b = !1, _ = !1, E = !1, R = !1, F = !1, C;
    C = Symbol.for("react.module.reference");
    function I(Z) {
      return !!(typeof Z == "string" || typeof Z == "function" || Z === n || Z === i || F || Z === r || Z === p || Z === h || R || Z === y || b || _ || E || typeof Z == "object" && Z !== null && (Z.$$typeof === v || Z.$$typeof === m || Z.$$typeof === s || Z.$$typeof === u || Z.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      Z.$$typeof === C || Z.getModuleId !== void 0));
    }
    function O(Z) {
      if (typeof Z == "object" && Z !== null) {
        var le = Z.$$typeof;
        switch (le) {
          case e:
            var fe = Z.type;
            switch (fe) {
              case n:
              case i:
              case r:
              case p:
              case h:
                return fe;
              default:
                var Q = fe && fe.$$typeof;
                switch (Q) {
                  case l:
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
    var S = u, x = s, P = e, k = d, B = n, Y = v, ne = m, z = t, re = i, pe = r, ve = p, Oe = h, he = !1, be = !1;
    function ee(Z) {
      return he || (he = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ie(Z) {
      return be || (be = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function se(Z) {
      return O(Z) === u;
    }
    function Ce(Z) {
      return O(Z) === s;
    }
    function Se(Z) {
      return typeof Z == "object" && Z !== null && Z.$$typeof === e;
    }
    function Te(Z) {
      return O(Z) === d;
    }
    function ge(Z) {
      return O(Z) === n;
    }
    function Pe(Z) {
      return O(Z) === v;
    }
    function Me(Z) {
      return O(Z) === m;
    }
    function U(Z) {
      return O(Z) === t;
    }
    function j(Z) {
      return O(Z) === i;
    }
    function $(Z) {
      return O(Z) === r;
    }
    function D(Z) {
      return O(Z) === p;
    }
    function G(Z) {
      return O(Z) === h;
    }
    jt.ContextConsumer = S, jt.ContextProvider = x, jt.Element = P, jt.ForwardRef = k, jt.Fragment = B, jt.Lazy = Y, jt.Memo = ne, jt.Portal = z, jt.Profiler = re, jt.StrictMode = pe, jt.Suspense = ve, jt.SuspenseList = Oe, jt.isAsyncMode = ee, jt.isConcurrentMode = ie, jt.isContextConsumer = se, jt.isContextProvider = Ce, jt.isElement = Se, jt.isForwardRef = Te, jt.isFragment = ge, jt.isLazy = Pe, jt.isMemo = Me, jt.isPortal = U, jt.isProfiler = j, jt.isStrictMode = $, jt.isSuspense = D, jt.isSuspenseList = G, jt.isValidElementType = I, jt.typeOf = O;
  }()), jt;
}
process.env.NODE_ENV === "production" ? sh.exports = YL() : sh.exports = qL();
var VL = sh.exports;
function GL(e) {
  if (e && (J.Children.only(e), VL.isFragment(e)))
    throw new Error('An "React.Fragment" cannot be used as a `trigger`.');
}
var xd = /* @__PURE__ */ function(e) {
  Qt(t, e);
  function t() {
    for (var r, i = arguments.length, s = new Array(i), u = 0; u < i; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handleRef = function(l) {
      ma(r.props.innerRef, l);
    }, r;
  }
  var n = t.prototype;
  return n.componentDidMount = function() {
    Ie(this.props, "onMount", null, this.props);
  }, n.componentWillUnmount = function() {
    Ie(this.props, "onUnmount", null, this.props);
  }, n.render = function() {
    if (!mo()) return null;
    var i = this.props, s = i.children, u = i.mountNode, l = u === void 0 ? document.body : u;
    return /* @__PURE__ */ D1(/* @__PURE__ */ J.createElement(or, {
      innerRef: this.handleRef
    }, s), l);
  }, t;
}(Vn);
xd.handledProps = ["children", "innerRef", "mountNode", "onMount", "onUnmount"];
xd.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Primary content. */
  children: c.node.isRequired,
  /** Called with a ref to the inner node. */
  innerRef: x_,
  /** The node where the portal should mount. */
  mountNode: c.any,
  /**
   * Called when the portal is mounted on the DOM
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onMount: c.func,
  /**
   * Called when the portal is unmounted from the DOM
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onUnmount: c.func
} : {};
var Xr = /* @__PURE__ */ function(e) {
  Qt(t, e);
  function t() {
    for (var r, i = arguments.length, s = new Array(i), u = 0; u < i; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.contentRef = /* @__PURE__ */ J.createRef(), r.triggerRef = /* @__PURE__ */ J.createRef(), r.latestDocumentMouseDownEvent = null, r.handleDocumentMouseDown = function(l) {
      r.latestDocumentMouseDownEvent = l;
    }, r.handleDocumentClick = function(l) {
      var d = r.props.closeOnDocumentClick, p = r.latestDocumentMouseDownEvent;
      r.latestDocumentMouseDownEvent = null, !(!r.contentRef.current || // no portal
      Ci(r.triggerRef.current, l) || // event happened in trigger (delegate to trigger handlers)
      p && Ci(r.contentRef.current, p) || // event originated in the portal but was ended outside
      Ci(r.contentRef.current, l)) && d && r.close(l);
    }, r.handleEscape = function(l) {
      r.props.closeOnEscape && vn.getCode(l) === vn.Escape && r.close(l);
    }, r.handlePortalMouseLeave = function(l) {
      var d = r.props, p = d.closeOnPortalMouseLeave, h = d.mouseLeaveDelay;
      p && l.target === r.contentRef.current && (r.mouseLeaveTimer = r.closeWithTimeout(l, h));
    }, r.handlePortalMouseEnter = function() {
      var l = r.props.closeOnPortalMouseLeave;
      l && clearTimeout(r.mouseLeaveTimer);
    }, r.handleTriggerBlur = function(l) {
      for (var d = r.props, p = d.trigger, h = d.closeOnTriggerBlur, m = arguments.length, v = new Array(m > 1 ? m - 1 : 0), y = 1; y < m; y++)
        v[y - 1] = arguments[y];
      Ie.apply(void 0, [p, "props.onBlur", l].concat(v));
      var b = l.relatedTarget || document.activeElement, _ = Ie(r.contentRef.current, "contains", b);
      !h || _ || r.close(l);
    }, r.handleTriggerClick = function(l) {
      for (var d = r.props, p = d.trigger, h = d.closeOnTriggerClick, m = d.openOnTriggerClick, v = r.state.open, y = arguments.length, b = new Array(y > 1 ? y - 1 : 0), _ = 1; _ < y; _++)
        b[_ - 1] = arguments[_];
      Ie.apply(void 0, [p, "props.onClick", l].concat(b)), v && h ? r.close(l) : !v && m && r.open(l);
    }, r.handleTriggerFocus = function(l) {
      for (var d = r.props, p = d.trigger, h = d.openOnTriggerFocus, m = arguments.length, v = new Array(m > 1 ? m - 1 : 0), y = 1; y < m; y++)
        v[y - 1] = arguments[y];
      Ie.apply(void 0, [p, "props.onFocus", l].concat(v)), h && r.open(l);
    }, r.handleTriggerMouseLeave = function(l) {
      clearTimeout(r.mouseEnterTimer);
      for (var d = r.props, p = d.trigger, h = d.closeOnTriggerMouseLeave, m = d.mouseLeaveDelay, v = arguments.length, y = new Array(v > 1 ? v - 1 : 0), b = 1; b < v; b++)
        y[b - 1] = arguments[b];
      Ie.apply(void 0, [p, "props.onMouseLeave", l].concat(y)), h && (r.mouseLeaveTimer = r.closeWithTimeout(l, m));
    }, r.handleTriggerMouseEnter = function(l) {
      clearTimeout(r.mouseLeaveTimer);
      for (var d = r.props, p = d.trigger, h = d.mouseEnterDelay, m = d.openOnTriggerMouseEnter, v = arguments.length, y = new Array(v > 1 ? v - 1 : 0), b = 1; b < v; b++)
        y[b - 1] = arguments[b];
      Ie.apply(void 0, [p, "props.onMouseEnter", l].concat(y)), m && (r.mouseEnterTimer = r.openWithTimeout(l, h));
    }, r.open = function(l) {
      Ie(r.props, "onOpen", l, ce({}, r.props, {
        open: !0
      })), r.setState({
        open: !0
      });
    }, r.openWithTimeout = function(l, d) {
      var p = ce({}, l);
      return setTimeout(function() {
        return r.open(p);
      }, d || 0);
    }, r.close = function(l) {
      r.setState({
        open: !1
      }), Ie(r.props, "onClose", l, ce({}, r.props, {
        open: !1
      }));
    }, r.closeWithTimeout = function(l, d) {
      var p = ce({}, l);
      return setTimeout(function() {
        return r.close(p);
      }, d || 0);
    }, r.handleMount = function() {
      Ie(r.props, "onMount", null, r.props);
    }, r.handleUnmount = function() {
      Ie(r.props, "onUnmount", null, r.props);
    }, r.handleTriggerRef = function(l) {
      r.triggerRef.current = l, ma(r.props.triggerRef, l);
    }, r;
  }
  var n = t.prototype;
  return n.componentWillUnmount = function() {
    clearTimeout(this.mouseEnterTimer), clearTimeout(this.mouseLeaveTimer);
  }, n.render = function() {
    var i = this.props, s = i.children, u = i.eventPool, l = i.mountNode, d = i.trigger, p = this.state.open;
    return process.env.NODE_ENV !== "production" && GL(d), /* @__PURE__ */ J.createElement(J.Fragment, null, p && /* @__PURE__ */ J.createElement(J.Fragment, null, /* @__PURE__ */ J.createElement(xd, {
      innerRef: this.contentRef,
      mountNode: l,
      onMount: this.handleMount,
      onUnmount: this.handleUnmount
    }, s), /* @__PURE__ */ J.createElement(Ua, {
      name: "mouseleave",
      on: this.handlePortalMouseLeave,
      pool: u,
      target: this.contentRef
    }), /* @__PURE__ */ J.createElement(Ua, {
      name: "mouseenter",
      on: this.handlePortalMouseEnter,
      pool: u,
      target: this.contentRef
    }), /* @__PURE__ */ J.createElement(Ua, {
      name: "mousedown",
      on: this.handleDocumentMouseDown,
      pool: u
    }), /* @__PURE__ */ J.createElement(Ua, {
      name: "click",
      on: this.handleDocumentClick,
      pool: u
    }), /* @__PURE__ */ J.createElement(Ua, {
      name: "keydown",
      on: this.handleEscape,
      pool: u
    })), d && /* @__PURE__ */ J.createElement(or, {
      innerRef: this.handleTriggerRef
    }, /* @__PURE__ */ J.cloneElement(d, {
      onBlur: this.handleTriggerBlur,
      onClick: this.handleTriggerClick,
      onFocus: this.handleTriggerFocus,
      onMouseLeave: this.handleTriggerMouseLeave,
      onMouseEnter: this.handleTriggerMouseEnter
    })));
  }, t;
}($s);
Xr.handledProps = ["children", "closeOnDocumentClick", "closeOnEscape", "closeOnPortalMouseLeave", "closeOnTriggerBlur", "closeOnTriggerClick", "closeOnTriggerMouseLeave", "defaultOpen", "eventPool", "mountNode", "mouseEnterDelay", "mouseLeaveDelay", "onClose", "onMount", "onOpen", "onUnmount", "open", "openOnTriggerClick", "openOnTriggerFocus", "openOnTriggerMouseEnter", "trigger", "triggerRef"];
Xr.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Primary content. */
  children: c.node.isRequired,
  /** Controls whether or not the portal should close when the document is clicked. */
  closeOnDocumentClick: c.bool,
  /** Controls whether or not the portal should close when escape is pressed is displayed. */
  closeOnEscape: c.bool,
  /**
   * Controls whether or not the portal should close when mousing out of the portal.
   * NOTE: This will prevent `closeOnTriggerMouseLeave` when mousing over the
   * gap from the trigger to the portal.
   */
  closeOnPortalMouseLeave: c.bool,
  /** Controls whether or not the portal should close on blur of the trigger. */
  closeOnTriggerBlur: c.bool,
  /** Controls whether or not the portal should close on click of the trigger. */
  closeOnTriggerClick: c.bool,
  /** Controls whether or not the portal should close when mousing out of the trigger. */
  closeOnTriggerMouseLeave: c.bool,
  /** Initial value of open. */
  defaultOpen: c.bool,
  /** Event pool namespace that is used to handle component events */
  eventPool: c.string,
  /** The node where the portal should mount. */
  mountNode: c.any,
  /** Milliseconds to wait before opening on mouse over */
  mouseEnterDelay: c.number,
  /** Milliseconds to wait before closing on mouse leave */
  mouseLeaveDelay: c.number,
  /**
   * Called when a close event happens
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClose: c.func,
  /**
   * Called when the portal is mounted on the DOM.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onMount: c.func,
  /**
   * Called when an open event happens
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onOpen: c.func,
  /**
   * Called when the portal is unmounted from the DOM.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onUnmount: c.func,
  /** Controls whether or not the portal is displayed. */
  open: c.bool,
  /** Controls whether or not the portal should open when the trigger is clicked. */
  openOnTriggerClick: c.bool,
  /** Controls whether or not the portal should open on focus of the trigger. */
  openOnTriggerFocus: c.bool,
  /** Controls whether or not the portal should open when mousing over the trigger. */
  openOnTriggerMouseEnter: c.bool,
  /** Element to be rendered in-place where the portal is defined. */
  trigger: c.node,
  /** Called with a ref to the trigger node. */
  triggerRef: x_
} : {};
Xr.defaultProps = {
  closeOnDocumentClick: !0,
  closeOnEscape: !0,
  eventPool: "default",
  openOnTriggerClick: !0
};
Xr.autoControlledProps = ["open"];
Xr.Inner = xd;
function Fl(e) {
  var t = e.blurring, n = e.className, r = e.children, i = e.content, s = e.dimmed, u = ze(q(t, "blurring"), q(s, "dimmed"), "dimmable", n), l = Ue(Fl, e), d = He(Fl, e);
  return /* @__PURE__ */ J.createElement(d, ce({}, l, {
    className: u
  }), it(r) ? i : r);
}
Fl.handledProps = ["as", "blurring", "children", "className", "content", "dimmed"];
Fl.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** A dimmable element can blur its contents. */
  blurring: c.bool,
  /** Primary content. */
  children: c.node,
  /** Additional classes. */
  className: c.string,
  /** Shorthand for primary content. */
  content: Ot,
  /** Controls whether or not the dim is displayed. */
  dimmed: c.bool
} : {};
var $l = /* @__PURE__ */ function(e) {
  Qt(t, e);
  function t() {
    for (var r, i = arguments.length, s = new Array(i), u = 0; u < i; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.containerRef = /* @__PURE__ */ yr(), r.contentRef = /* @__PURE__ */ yr(), r.handleClick = function(l) {
      var d = r.contentRef.current;
      Ie(r.props, "onClick", l, r.props), !(d && d !== l.target && Ci(d, l)) && Ie(r.props, "onClickOutside", l, r.props);
    }, r;
  }
  var n = t.prototype;
  return n.componentDidMount = function() {
    var i = this.props.active;
    this.toggleStyles(i);
  }, n.componentDidUpdate = function(i) {
    var s = this.props.active, u = i.active;
    u !== s && this.toggleStyles(s);
  }, n.toggleStyles = function(i) {
    var s = this.containerRef.current;
    !s || !s.style || (i ? s.style.setProperty("display", "flex", "important") : s.style.removeProperty("display"));
  }, n.render = function() {
    var i = this.props, s = i.active, u = i.children, l = i.className, d = i.content, p = i.disabled, h = i.inverted, m = i.page, v = i.simple, y = i.verticalAlign, b = ze("ui", q(s, "active transition visible"), q(p, "disabled"), q(h, "inverted"), q(m, "page"), q(v, "simple"), qi(y), "dimmer", l), _ = Ue(t, this.props), E = He(t, this.props), R = it(u) ? d : u;
    return /* @__PURE__ */ J.createElement(or, {
      innerRef: this.containerRef
    }, /* @__PURE__ */ J.createElement(E, ce({}, _, {
      className: b,
      onClick: this.handleClick
    }), R && /* @__PURE__ */ J.createElement("div", {
      className: "content",
      ref: this.contentRef
    }, R)));
  }, t;
}(Vn);
$l.handledProps = ["active", "as", "children", "className", "content", "disabled", "inverted", "onClick", "onClickOutside", "page", "simple", "verticalAlign"];
$l.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** An active dimmer will dim its parent container. */
  active: c.bool,
  /** Primary content. */
  children: c.node,
  /** Additional classes. */
  className: c.string,
  /** Shorthand for primary content. */
  content: Ot,
  /** A disabled dimmer cannot be activated */
  disabled: c.bool,
  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: c.func,
  /**
   * Handles click outside Dimmer's content, but inside Dimmer area.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClickOutside: c.func,
  /** A dimmer can be formatted to have its colors inverted. */
  inverted: c.bool,
  /** A dimmer can be formatted to be fixed to the page. */
  page: c.bool,
  /** A dimmer can be controlled with simple prop. */
  simple: c.bool,
  /** A dimmer can have its content top or bottom aligned. */
  verticalAlign: c.oneOf(["bottom", "top"])
} : {};
var Ti = /* @__PURE__ */ function(e) {
  Qt(t, e);
  function t() {
    for (var r, i = arguments.length, s = new Array(i), u = 0; u < i; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handlePortalMount = function() {
      mo() && (document.body.classList.add("dimmed"), document.body.classList.add("dimmable"));
    }, r.handlePortalUnmount = function() {
      mo() && (document.body.classList.remove("dimmed"), document.body.classList.remove("dimmable"));
    }, r;
  }
  var n = t.prototype;
  return n.render = function() {
    var i = this.props, s = i.active, u = i.page, l = Ue(t, this.props);
    return u ? /* @__PURE__ */ J.createElement(Xr, {
      closeOnEscape: !1,
      closeOnDocumentClick: !1,
      onMount: this.handlePortalMount,
      onUnmount: this.handlePortalUnmount,
      open: s,
      openOnTriggerClick: !1
    }, /* @__PURE__ */ J.createElement($l, ce({}, l, {
      active: s,
      page: u
    }))) : /* @__PURE__ */ J.createElement($l, ce({}, l, {
      active: s,
      page: u
    }));
  }, t;
}(Vn);
Ti.handledProps = ["active", "page"];
Ti.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An active dimmer will dim its parent container. */
  active: c.bool,
  /** A dimmer can be formatted to be fixed to the page. */
  page: c.bool
} : {};
Ti.Dimmable = Fl;
Ti.Inner = $l;
Ti.create = Yt(Ti, function(e) {
  return {
    content: e
  };
});
function Bl(e) {
  var t = e.children, n = e.className, r = e.content, i = e.size, s = ze("ui", i, n, "images"), u = Ue(Bl, e), l = He(Bl, e);
  return /* @__PURE__ */ J.createElement(l, ce({}, u, {
    className: s
  }), it(t) ? r : t);
}
Bl.handledProps = ["as", "children", "className", "content", "size"];
Bl.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** Primary content. */
  children: c.node,
  /** Additional classes. */
  className: c.string,
  /** Shorthand for primary content. */
  content: Ot,
  /** A group of images can be formatted to have the same size. */
  size: c.oneOf(lr)
} : {};
function br(e) {
  var t = e.avatar, n = e.bordered, r = e.centered, i = e.children, s = e.circular, u = e.className, l = e.content, d = e.dimmer, p = e.disabled, h = e.floated, m = e.fluid, v = e.hidden, y = e.href, b = e.inline, _ = e.label, E = e.rounded, R = e.size, F = e.spaced, C = e.verticalAlign, I = e.wrapped, O = e.ui, S = ze(q(O, "ui"), R, q(t, "avatar"), q(n, "bordered"), q(s, "circular"), q(r, "centered"), q(p, "disabled"), q(m, "fluid"), q(v, "hidden"), q(b, "inline"), q(E, "rounded"), tn(F, "spaced"), qn(h, "floated"), qi(C), "image", u), x = Ue(br, e), P = um(x, {
    htmlProps: RD
  }), k = P[0], B = P[1], Y = He(br, e, function() {
    if (!wt(d) || !wt(_) || !wt(I) || !it(i))
      return "div";
  });
  return it(i) ? it(l) ? Y === "img" ? /* @__PURE__ */ J.createElement(Y, ce({}, B, k, {
    className: S
  })) : /* @__PURE__ */ J.createElement(Y, ce({}, B, {
    className: S,
    href: y
  }), Ti.create(d, {
    autoGenerateKey: !1
  }), sr.create(_, {
    autoGenerateKey: !1
  }), /* @__PURE__ */ J.createElement("img", k)) : /* @__PURE__ */ J.createElement(Y, ce({}, x, {
    className: S
  }), l) : /* @__PURE__ */ J.createElement(Y, ce({}, x, {
    className: S
  }), i);
}
br.handledProps = ["as", "avatar", "bordered", "centered", "children", "circular", "className", "content", "dimmer", "disabled", "floated", "fluid", "hidden", "href", "inline", "label", "rounded", "size", "spaced", "ui", "verticalAlign", "wrapped"];
br.Group = Bl;
br.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** An image may be formatted to appear inline with text as an avatar. */
  avatar: c.bool,
  /** An image may include a border to emphasize the edges of white or transparent content. */
  bordered: c.bool,
  /** An image can appear centered in a content block. */
  centered: c.bool,
  /** Primary content. */
  children: c.node,
  /** An image may appear circular. */
  circular: c.bool,
  /** Additional classes. */
  className: c.string,
  /** Shorthand for primary content. */
  content: Ot,
  /** An image can show that it is disabled and cannot be selected. */
  disabled: c.bool,
  /** Shorthand for Dimmer. */
  dimmer: yt,
  /** An image can sit to the left or right of other content. */
  floated: c.oneOf(hc),
  /** An image can take up the width of its container. */
  fluid: At([c.bool, zt(["size"])]),
  /** An image can be hidden. */
  hidden: c.bool,
  /** Renders the Image as an <a> tag with this href. */
  href: c.string,
  /** An image may appear inline. */
  inline: c.bool,
  /** Shorthand for Label. */
  label: yt,
  /** An image may appear rounded. */
  rounded: c.bool,
  /** An image may appear at different sizes. */
  size: c.oneOf(lr),
  /** An image can specify that it needs an additional spacing to separate it from nearby content. */
  spaced: c.oneOfType([c.bool, c.oneOf(["left", "right"])]),
  /** Whether or not to add the ui className. */
  ui: c.bool,
  /** An image can specify its vertical alignment. */
  verticalAlign: c.oneOf(Lo),
  /** An image can render wrapped in a `div.ui.image` as alternative HTML markup. */
  wrapped: c.bool
} : {};
br.defaultProps = {
  as: "img",
  ui: !0
};
br.create = Yt(br, function(e) {
  return {
    src: e
  };
});
function Pi(e) {
  var t = e.children, n = e.className, r = e.content, i = ze("detail", n), s = Ue(Pi, e), u = He(Pi, e);
  return /* @__PURE__ */ J.createElement(u, ce({}, s, {
    className: i
  }), it(t) ? r : t);
}
Pi.handledProps = ["as", "children", "className", "content"];
Pi.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** Primary content. */
  children: c.node,
  /** Additional classes. */
  className: c.string,
  /** Shorthand for primary content. */
  content: Ot
} : {};
Pi.create = Yt(Pi, function(e) {
  return {
    content: e
  };
});
function Wl(e) {
  var t = e.children, n = e.circular, r = e.className, i = e.color, s = e.content, u = e.size, l = e.tag, d = ze("ui", i, u, q(n, "circular"), q(l, "tag"), "labels", r), p = Ue(Wl, e), h = He(Wl, e);
  return /* @__PURE__ */ J.createElement(h, ce({}, p, {
    className: d
  }), it(t) ? s : t);
}
Wl.handledProps = ["as", "children", "circular", "className", "color", "content", "size", "tag"];
Wl.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** Primary content. */
  children: c.node,
  /** Labels can share shapes. */
  circular: c.bool,
  /** Additional classes. */
  className: c.string,
  /** Label group can share colors together. */
  color: c.oneOf(na),
  /** Shorthand for primary content. */
  content: Ot,
  /** Label group can share sizes together. */
  size: c.oneOf(lr),
  /** Label group can share tag formatting. */
  tag: c.bool
} : {};
var sr = /* @__PURE__ */ function(e) {
  Qt(t, e);
  function t() {
    for (var r, i = arguments.length, s = new Array(i), u = 0; u < i; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handleClick = function(l) {
      var d = r.props.onClick;
      d && d(l, r.props);
    }, r.handleIconOverrides = function(l) {
      return {
        onClick: function(p) {
          Ie(l, "onClick", p), Ie(r.props, "onRemove", p, r.props);
        }
      };
    }, r;
  }
  var n = t.prototype;
  return n.render = function() {
    var i = this.props, s = i.active, u = i.attached, l = i.basic, d = i.children, p = i.circular, h = i.className, m = i.color, v = i.content, y = i.corner, b = i.detail, _ = i.empty, E = i.floating, R = i.horizontal, F = i.icon, C = i.image, I = i.onRemove, O = i.pointing, S = i.prompt, x = i.removeIcon, P = i.ribbon, k = i.size, B = i.tag, Y = O === !0 && "pointing" || (O === "left" || O === "right") && O + " pointing" || (O === "above" || O === "below") && "pointing " + O, ne = ze("ui", m, Y, k, q(s, "active"), q(l, "basic"), q(p, "circular"), q(_, "empty"), q(E, "floating"), q(R, "horizontal"), q(C === !0, "image"), q(S, "prompt"), q(B, "tag"), tn(y, "corner"), tn(P, "ribbon"), qn(u, "attached"), "label", h), z = Ue(t, this.props), re = He(t, this.props);
    if (!it(d))
      return /* @__PURE__ */ J.createElement(re, ce({}, z, {
        className: ne,
        onClick: this.handleClick
      }), d);
    var pe = ss(x) ? "delete" : x;
    return /* @__PURE__ */ J.createElement(re, ce({
      className: ne,
      onClick: this.handleClick
    }, z), We.create(F, {
      autoGenerateKey: !1
    }), typeof C != "boolean" && br.create(C, {
      autoGenerateKey: !1
    }), v, Pi.create(b, {
      autoGenerateKey: !1
    }), I && We.create(pe, {
      autoGenerateKey: !1,
      overrideProps: this.handleIconOverrides
    }));
  }, t;
}(Vn);
sr.handledProps = ["active", "as", "attached", "basic", "children", "circular", "className", "color", "content", "corner", "detail", "empty", "floating", "horizontal", "icon", "image", "onClick", "onRemove", "pointing", "prompt", "removeIcon", "ribbon", "size", "tag"];
sr.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** A label can be active. */
  active: c.bool,
  /** A label can attach to a content segment. */
  attached: c.oneOf(["top", "bottom", "top right", "top left", "bottom left", "bottom right"]),
  /** A label can reduce its complexity. */
  basic: c.bool,
  /** Primary content. */
  children: c.node,
  /** A label can be circular. */
  circular: c.bool,
  /** Additional classes. */
  className: c.string,
  /** Color of the label. */
  color: c.oneOf(na),
  /** Shorthand for primary content. */
  content: Ot,
  /** A label can position itself in the corner of an element. */
  corner: c.oneOfType([c.bool, c.oneOf(["left", "right"])]),
  /** Shorthand for LabelDetail. */
  detail: yt,
  /** Formats the label as a dot. */
  empty: At([c.bool, wi(["circular"])]),
  /** Float above another element in the upper right corner. */
  floating: c.bool,
  /** A horizontal label is formatted to label content along-side it horizontally. */
  horizontal: c.bool,
  /** Shorthand for Icon. */
  icon: yt,
  /** A label can be formatted to emphasize an image or prop can be used as shorthand for Image. */
  image: c.oneOfType([c.bool, yt]),
  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: c.func,
  /**
   * Adds an "x" icon, called when "x" is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onRemove: c.func,
  /** A label can point to content next to it. */
  pointing: c.oneOfType([c.bool, c.oneOf(["above", "below", "left", "right"])]),
  /** A label can prompt for an error in your forms. */
  prompt: c.bool,
  /** Shorthand for Icon to appear as the last child and trigger onRemove. */
  removeIcon: yt,
  /** A label can appear as a ribbon attaching itself to an element. */
  ribbon: c.oneOfType([c.bool, c.oneOf(["right"])]),
  /** A label can have different sizes. */
  size: c.oneOf(lr),
  /** A label can appear as a tag. */
  tag: c.bool
} : {};
sr.Detail = Pi;
sr.Group = Wl;
sr.create = Yt(sr, function(e) {
  return {
    content: e
  };
});
function Ul(e) {
  var t = e.children, n = e.className, r = e.content, i = e.hidden, s = e.visible, u = ze(q(s, "visible"), q(i, "hidden"), "content", n), l = Ue(Ul, e), d = He(Ul, e);
  return /* @__PURE__ */ J.createElement(d, ce({}, l, {
    className: u
  }), it(t) ? r : t);
}
Ul.handledProps = ["as", "children", "className", "content", "hidden", "visible"];
Ul.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** Primary content. */
  children: c.node,
  /** Additional classes. */
  className: c.string,
  /** Shorthand for primary content. */
  content: Ot,
  /** Initially hidden, visible on hover. */
  hidden: c.bool,
  /** Initially visible, hidden on hover. */
  visible: c.bool
} : {};
function jl(e) {
  var t = e.attached, n = e.basic, r = e.buttons, i = e.children, s = e.className, u = e.color, l = e.compact, d = e.content, p = e.floated, h = e.fluid, m = e.icon, v = e.inverted, y = e.labeled, b = e.negative, _ = e.positive, E = e.primary, R = e.secondary, F = e.size, C = e.toggle, I = e.vertical, O = e.widths, S = ze("ui", u, F, q(n, "basic"), q(l, "compact"), q(h, "fluid"), q(m, "icon"), q(v, "inverted"), q(y, "labeled"), q(b, "negative"), q(_, "positive"), q(E, "primary"), q(R, "secondary"), q(C, "toggle"), q(I, "vertical"), tn(t, "attached"), qn(p, "floated"), Hn(O), "buttons", s), x = Ue(jl, e), P = He(jl, e);
  return wt(r) ? /* @__PURE__ */ J.createElement(P, ce({}, x, {
    className: S
  }), it(i) ? d : i) : /* @__PURE__ */ J.createElement(P, ce({}, x, {
    className: S
  }), _n(r, function(k) {
    return ut.create(k);
  }));
}
jl.handledProps = ["as", "attached", "basic", "buttons", "children", "className", "color", "compact", "content", "floated", "fluid", "icon", "inverted", "labeled", "negative", "positive", "primary", "secondary", "size", "toggle", "vertical", "widths"];
jl.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** Groups can be attached to other content. */
  attached: c.oneOfType([c.bool, c.oneOf(["left", "right", "top", "bottom"])]),
  /** Groups can be less pronounced. */
  basic: c.bool,
  /** Array of shorthand Button values. */
  buttons: pc,
  /** Primary content. */
  children: c.node,
  /** Additional classes. */
  className: c.string,
  /** Groups can have a shared color. */
  color: c.oneOf(na),
  /** Groups can reduce their padding to fit into tighter spaces. */
  compact: c.bool,
  /** Shorthand for primary content. */
  content: Ot,
  /** Groups can be aligned to the left or right of its container. */
  floated: c.oneOf(hc),
  /** Groups can take the width of their container. */
  fluid: c.bool,
  /** Groups can be formatted as icons. */
  icon: c.bool,
  /** Groups can be formatted to appear on dark backgrounds. */
  inverted: c.bool,
  /** Groups can be formatted as labeled icon buttons. */
  labeled: c.bool,
  /** Groups can hint towards a negative consequence. */
  negative: c.bool,
  /** Groups can hint towards a positive consequence. */
  positive: c.bool,
  /** Groups can be formatted to show different levels of emphasis. */
  primary: c.bool,
  /** Groups can be formatted to show different levels of emphasis. */
  secondary: c.bool,
  /** Groups can have different sizes. */
  size: c.oneOf(lr),
  /** Groups can be formatted to toggle on and off. */
  toggle: c.bool,
  /** Groups can be formatted to appear vertically. */
  vertical: c.bool,
  /** Groups can have their widths divided evenly. */
  widths: c.oneOf(nr)
} : {};
function zl(e) {
  var t = e.className, n = e.text, r = ze("or", t), i = Ue(zl, e), s = He(zl, e);
  return /* @__PURE__ */ J.createElement(s, ce({}, i, {
    className: r,
    "data-text": n
  }));
}
zl.handledProps = ["as", "className", "text"];
zl.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** Additional classes. */
  className: c.string,
  /** Or buttons can have their text localized, or adjusted by using the text prop. */
  text: c.oneOfType([c.number, c.string])
} : {};
var ut = /* @__PURE__ */ function(e) {
  Qt(t, e);
  function t() {
    for (var r, i = arguments.length, s = new Array(i), u = 0; u < i; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.ref = /* @__PURE__ */ yr(), r.computeElementType = function() {
      var l = r.props, d = l.attached, p = l.label;
      if (!wt(d) || !wt(p)) return "div";
    }, r.computeTabIndex = function(l) {
      var d = r.props, p = d.disabled, h = d.tabIndex;
      if (!wt(h)) return h;
      if (p) return -1;
      if (l === "div") return 0;
    }, r.focus = function(l) {
      return Ie(r.ref.current, "focus", l);
    }, r.handleClick = function(l) {
      var d = r.props.disabled;
      if (d) {
        l.preventDefault();
        return;
      }
      Ie(r.props, "onClick", l, r.props);
    }, r.hasIconClass = function() {
      var l = r.props, d = l.labelPosition, p = l.children, h = l.content, m = l.icon;
      return m === !0 ? !0 : m && (d || it(p) && wt(h));
    }, r;
  }
  var n = t.prototype;
  return n.computeButtonAriaRole = function(i) {
    var s = this.props.role;
    if (!wt(s)) return s;
    if (i !== "button") return "button";
  }, n.render = function() {
    var i = this.props, s = i.active, u = i.animated, l = i.attached, d = i.basic, p = i.children, h = i.circular, m = i.className, v = i.color, y = i.compact, b = i.content, _ = i.disabled, E = i.floated, R = i.fluid, F = i.icon, C = i.inverted, I = i.label, O = i.labelPosition, S = i.loading, x = i.negative, P = i.positive, k = i.primary, B = i.secondary, Y = i.size, ne = i.toggle, z = i.type, re = ze(v, Y, q(s, "active"), q(d, "basic"), q(h, "circular"), q(y, "compact"), q(R, "fluid"), q(this.hasIconClass(), "icon"), q(C, "inverted"), q(S, "loading"), q(x, "negative"), q(P, "positive"), q(k, "primary"), q(B, "secondary"), q(ne, "toggle"), tn(u, "animated"), tn(l, "attached")), pe = ze(tn(O || !!I, "labeled")), ve = ze(q(_, "disabled"), qn(E, "floated")), Oe = Ue(t, this.props), he = He(t, this.props, this.computeElementType), be = this.computeTabIndex(he);
    if (!wt(I)) {
      var ee = ze("ui", re, "button", m), ie = ze("ui", pe, "button", m, ve), se = sr.create(I, {
        defaultProps: {
          basic: !0,
          pointing: O === "left" ? "right" : "left"
        },
        autoGenerateKey: !1
      });
      return /* @__PURE__ */ J.createElement(he, ce({}, Oe, {
        className: ie,
        onClick: this.handleClick
      }), O === "left" && se, /* @__PURE__ */ J.createElement(or, {
        innerRef: this.ref
      }, /* @__PURE__ */ J.createElement("button", {
        className: ee,
        "aria-pressed": ne ? !!s : void 0,
        disabled: _,
        type: z,
        tabIndex: be
      }, We.create(F, {
        autoGenerateKey: !1
      }), " ", b)), (O === "right" || !O) && se);
    }
    var Ce = ze("ui", re, ve, pe, "button", m), Se = !it(p), Te = this.computeButtonAriaRole(he);
    return /* @__PURE__ */ J.createElement(or, {
      innerRef: this.ref
    }, /* @__PURE__ */ J.createElement(he, ce({}, Oe, {
      className: Ce,
      "aria-pressed": ne ? !!s : void 0,
      disabled: _ && he === "button" || void 0,
      onClick: this.handleClick,
      role: Te,
      type: z,
      tabIndex: be
    }), Se && p, !Se && We.create(F, {
      autoGenerateKey: !1
    }), !Se && b));
  }, t;
}(Vn);
ut.handledProps = ["active", "animated", "as", "attached", "basic", "children", "circular", "className", "color", "compact", "content", "disabled", "floated", "fluid", "icon", "inverted", "label", "labelPosition", "loading", "negative", "onClick", "positive", "primary", "role", "secondary", "size", "tabIndex", "toggle", "type"];
ut.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** A button can show it is currently the active user selection. */
  active: c.bool,
  /** A button can animate to show hidden content. */
  animated: c.oneOfType([c.bool, c.oneOf(["fade", "vertical"])]),
  /** A button can be attached to other content. */
  attached: c.oneOfType([c.bool, c.oneOf(["left", "right", "top", "bottom"])]),
  /** A basic button is less pronounced. */
  basic: c.bool,
  /** Primary content. */
  children: At([c.node, zt(["label"]), E_({
    icon: c.oneOfType([c.string.isRequired, c.object.isRequired, c.element.isRequired])
  }, zt(["icon"]))]),
  /** A button can be circular. */
  circular: c.bool,
  /** Additional classes. */
  className: c.string,
  /** A button can have different colors */
  color: c.oneOf([].concat(na, ["facebook", "google plus", "instagram", "linkedin", "twitter", "vk", "youtube"])),
  /** A button can reduce its padding to fit into tighter spaces. */
  compact: c.bool,
  /** Shorthand for primary content. */
  content: Ot,
  /** A button can show it is currently unable to be interacted with. */
  disabled: c.bool,
  /** A button can be aligned to the left or right of its container. */
  floated: c.oneOf(hc),
  /** A button can take the width of its container. */
  fluid: c.bool,
  /** Add an Icon by name, props object, or pass an <Icon />. */
  icon: c.oneOfType([c.bool, c.string, c.object, c.element]),
  /** A button can be formatted to appear on dark backgrounds. */
  inverted: c.bool,
  /** Add a Label by text, props object, or pass a <Label />. */
  label: c.oneOfType([c.string, c.object, c.element]),
  /** A labeled button can format a Label or Icon to appear on the left or right. */
  labelPosition: c.oneOf(["right", "left"]),
  /** A button can show a loading indicator. */
  loading: c.bool,
  /** A button can hint towards a negative consequence. */
  negative: c.bool,
  /**
   * Called after user's click.
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: c.func,
  /** A button can hint towards a positive consequence. */
  positive: c.bool,
  /** A button can be formatted to show different levels of emphasis. */
  primary: c.bool,
  /** The role of the HTML element. */
  role: c.string,
  /** A button can be formatted to show different levels of emphasis. */
  secondary: c.bool,
  /** A button can have different sizes. */
  size: c.oneOf(lr),
  /** A button can receive focus. */
  tabIndex: c.oneOfType([c.number, c.string]),
  /** A button can be formatted to toggle on and off. */
  toggle: c.bool,
  /** The type of the HTML element. */
  type: c.oneOf(["button", "submit", "reset"])
} : {};
ut.defaultProps = {
  as: "button"
};
ut.Content = Ul;
ut.Group = jl;
ut.Or = zl;
ut.create = Yt(ut, function(e) {
  return {
    content: e
  };
});
function A_(e, t, n, r) {
  var i = -1, s = e == null ? 0 : e.length;
  for (r && s && (n = e[++i]); ++i < s; )
    n = t(n, e[i], i, e);
  return n;
}
function KL(e, t, n, r, i) {
  return i(e, function(s, u, l) {
    n = r ? (r = !1, s) : t(n, s, u, l);
  }), n;
}
function dm(e, t, n) {
  var r = gn(e) ? A_ : KL, i = arguments.length < 3;
  return r(e, Yi(t), n, i, Fs);
}
var ZL = function(t, n, r, i) {
  var s = r ? r.call(i, t, n) : void 0;
  if (s !== void 0)
    return !!s;
  if (t === n)
    return !0;
  if (typeof t != "object" || !t || typeof n != "object" || !n)
    return !1;
  var u = Object.keys(t), l = Object.keys(n);
  if (u.length !== l.length)
    return !1;
  for (var d = Object.prototype.hasOwnProperty.bind(n), p = 0; p < u.length; p++) {
    var h = u[p];
    if (!d(h))
      return !1;
    var m = t[h], v = n[h];
    if (s = r ? r.call(i, m, v, h) : void 0, s === !1 || s === void 0 && m !== v)
      return !1;
  }
  return !0;
};
const Sl = /* @__PURE__ */ lc(ZL);
var gs = /* @__PURE__ */ function(e) {
  Qt(t, e);
  function t() {
    for (var r, i = arguments.length, s = new Array(i), u = 0; u < i; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handleButtonOverrides = function(l) {
      return {
        onClick: function(p, h) {
          Ie(l, "onClick", p, h), Ie(r.props, "onActionClick", p, h);
        }
      };
    }, r;
  }
  var n = t.prototype;
  return n.render = function() {
    var i = this, s = this.props, u = s.actions, l = s.children, d = s.className, p = s.content, h = ze("actions", d), m = Ue(t, this.props), v = He(t, this.props);
    return it(l) ? it(p) ? /* @__PURE__ */ J.createElement(v, ce({}, m, {
      className: h
    }), _n(u, function(y) {
      return ut.create(y, {
        overrideProps: i.handleButtonOverrides
      });
    })) : /* @__PURE__ */ J.createElement(v, ce({}, m, {
      className: h
    }), p) : /* @__PURE__ */ J.createElement(v, ce({}, m, {
      className: h
    }), l);
  }, t;
}(Vn);
gs.handledProps = ["actions", "as", "children", "className", "content", "onActionClick"];
gs.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** Array of shorthand buttons. */
  actions: pc,
  /** Primary content. */
  children: c.node,
  /** Additional classes. */
  className: c.string,
  /** Shorthand for primary content. */
  content: Ot,
  /**
   * Action onClick handler when using shorthand `actions`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props from the clicked action.
   */
  onActionClick: At([zt(["children"]), c.func])
} : {};
gs.create = Yt(gs, function(e) {
  return {
    actions: e
  };
});
function ki(e) {
  var t = e.children, n = e.className, r = e.content, i = e.image, s = e.scrolling, u = ze(n, q(i, "image"), q(s, "scrolling"), "content"), l = Ue(ki, e), d = He(ki, e);
  return /* @__PURE__ */ J.createElement(d, ce({}, l, {
    className: u
  }), it(t) ? r : t);
}
ki.handledProps = ["as", "children", "className", "content", "image", "scrolling"];
ki.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** Primary content. */
  children: c.node,
  /** Additional classes. */
  className: c.string,
  /** Shorthand for primary content. */
  content: Ot,
  /** A modal can contain image content. */
  image: c.bool,
  /** A modal can use the entire size of the screen. */
  scrolling: c.bool
} : {};
ki.create = Yt(ki, function(e) {
  return {
    content: e
  };
});
function Hl(e) {
  var t = e.children, n = e.className, r = e.content, i = ze("description", n), s = Ue(Hl, e), u = He(Hl, e);
  return /* @__PURE__ */ J.createElement(u, ce({}, s, {
    className: i
  }), it(t) ? r : t);
}
Hl.handledProps = ["as", "children", "className", "content"];
Hl.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** Primary content. */
  children: c.node,
  /** Additional classes. */
  className: c.string,
  /** Shorthand for primary content. */
  content: Ot
} : {};
function Ni(e) {
  var t = e.blurring, n = e.children, r = e.className, i = e.centered, s = e.content, u = e.inverted, l = e.mountNode, d = e.scrolling, p = J.useRef(), h = ze("ui", q(u, "inverted"), q(!i, "top aligned"), "page modals dimmer transition visible active", r), m = ze("dimmable dimmed", q(t, "blurring"), q(d, "scrolling")), v = Ue(Ni, e), y = He(Ni, e);
  return zL(l, m), J.useEffect(function() {
    p.current && p.current.style && p.current.style.setProperty("display", "flex", "important");
  }, []), /* @__PURE__ */ J.createElement(or, {
    innerRef: p
  }, /* @__PURE__ */ J.createElement(y, ce({}, v, {
    className: h
  }), it(n) ? s : n));
}
Ni.handledProps = ["as", "blurring", "centered", "children", "className", "content", "inverted", "mountNode", "scrolling"];
Ni.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** A dimmer can be blurred. */
  blurring: c.bool,
  /** Primary content. */
  children: c.node,
  /** Additional classes. */
  className: c.string,
  /** A dimmer can center its contents in the viewport. */
  centered: c.bool,
  /** Shorthand for primary content. */
  content: Ot,
  /** A dimmer can be inverted. */
  inverted: c.bool,
  /** The node where the modal should mount. Defaults to document.body. */
  mountNode: c.any,
  /** A dimmer can make body scrollable. */
  scrolling: c.bool
} : {};
Ni.create = Yt(Ni, function(e) {
  return {
    content: e
  };
});
function Ii(e) {
  var t = e.children, n = e.className, r = e.content, i = ze("header", n), s = Ue(Ii, e), u = He(Ii, e);
  return /* @__PURE__ */ J.createElement(u, ce({}, s, {
    className: i
  }), it(t) ? r : t);
}
Ii.handledProps = ["as", "children", "className", "content"];
Ii.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** Primary content. */
  children: c.node,
  /** Additional classes. */
  className: c.string,
  /** Shorthand for primary content. */
  content: Ot
} : {};
Ii.create = Yt(Ii, function(e) {
  return {
    content: e
  };
});
var zb = 0, XL = 50, QL = function(t) {
  var n = t.height + zb, r = t.height + zb, i = window.innerHeight, s = i / 2, u = -(r / 2), l = XL, d = s + u;
  return d + n + l < i;
}, JL = function(t, n, r) {
  var i = n && t ? -(r.height / 2) : 0, s = -(r.width / 2);
  return {
    marginLeft: s,
    marginTop: i
  };
}, eF = function() {
  return !window.ActiveXObject && "ActiveXObject" in window;
}, ln = /* @__PURE__ */ function(e) {
  Qt(t, e);
  function t() {
    for (var r, i = arguments.length, s = new Array(i), u = 0; u < i; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.legacy = mo() && eF(), r.ref = /* @__PURE__ */ yr(), r.dimmerRef = /* @__PURE__ */ yr(), r.latestDocumentMouseDownEvent = null, r.getMountNode = function() {
      return mo() ? r.props.mountNode || document.body : null;
    }, r.handleActionsOverrides = function(l) {
      return {
        onActionClick: function(p, h) {
          Ie(l, "onActionClick", p, h), Ie(r.props, "onActionClick", p, r.props), r.handleClose(p);
        }
      };
    }, r.handleClose = function(l) {
      r.setState({
        open: !1
      }), Ie(r.props, "onClose", l, ce({}, r.props, {
        open: !1
      }));
    }, r.handleDocumentMouseDown = function(l) {
      r.latestDocumentMouseDownEvent = l;
    }, r.handleDocumentClick = function(l) {
      var d = r.props.closeOnDimmerClick, p = r.latestDocumentMouseDownEvent;
      r.latestDocumentMouseDownEvent = null, !(!d || Ci(r.ref.current, p) || Ci(r.ref.current, l)) && (r.setState({
        open: !1
      }), Ie(r.props, "onClose", l, ce({}, r.props, {
        open: !1
      })));
    }, r.handleIconOverrides = function(l) {
      return {
        onClick: function(p) {
          Ie(l, "onClick", p), r.handleClose(p);
        }
      };
    }, r.handleOpen = function(l) {
      Ie(r.props, "onOpen", l, ce({}, r.props, {
        open: !0
      })), r.setState({
        open: !0
      });
    }, r.handlePortalMount = function(l) {
      var d = r.props.eventPool;
      r.setState({
        scrolling: !1
      }), r.setPositionAndClassNames(), wl.sub("mousedown", r.handleDocumentMouseDown, {
        pool: d,
        target: r.dimmerRef.current
      }), wl.sub("click", r.handleDocumentClick, {
        pool: d,
        target: r.dimmerRef.current
      }), Ie(r.props, "onMount", l, r.props);
    }, r.handlePortalUnmount = function(l) {
      var d = r.props.eventPool;
      cancelAnimationFrame(r.animationRequestId), wl.unsub("mousedown", r.handleDocumentMouseDown, {
        pool: d,
        target: r.dimmerRef.current
      }), wl.unsub("click", r.handleDocumentClick, {
        pool: d,
        target: r.dimmerRef.current
      }), Ie(r.props, "onUnmount", l, r.props);
    }, r.setPositionAndClassNames = function() {
      var l = r.props.centered, d, p = {};
      if (r.ref.current) {
        var h = r.ref.current.getBoundingClientRect(), m = QL(h);
        d = !m;
        var v = r.legacy ? JL(m, l, h) : {};
        Sl(r.state.legacyStyles, v) || (p.legacyStyles = v), r.state.scrolling !== d && (p.scrolling = d);
      }
      uo(p) || r.setState(p), r.animationRequestId = requestAnimationFrame(r.setPositionAndClassNames);
    }, r.renderContent = function(l) {
      var d = r.props, p = d.actions, h = d.basic, m = d.children, v = d.className, y = d.closeIcon, b = d.content, _ = d.header, E = d.size, R = d.style, F = r.state, C = F.legacyStyles, I = F.scrolling, O = ze("ui", E, q(h, "basic"), q(r.legacy, "legacy"), q(I, "scrolling"), "modal transition visible active", v), S = He(t, r.props), x = y === !0 ? "close" : y, P = We.create(x, {
        overrideProps: r.handleIconOverrides
      });
      return /* @__PURE__ */ J.createElement(or, {
        innerRef: r.ref
      }, /* @__PURE__ */ J.createElement(S, ce({}, l, {
        className: O,
        style: ce({}, C, R)
      }), P, it(m) ? /* @__PURE__ */ J.createElement(J.Fragment, null, Ii.create(_, {
        autoGenerateKey: !1
      }), ki.create(b, {
        autoGenerateKey: !1
      }), gs.create(p, {
        overrideProps: r.handleActionsOverrides
      })) : m));
    }, r;
  }
  var n = t.prototype;
  return n.componentWillUnmount = function() {
    this.handlePortalUnmount();
  }, n.render = function() {
    var i = this.props, s = i.centered, u = i.closeOnDocumentClick, l = i.dimmer, d = i.eventPool, p = i.trigger, h = this.state, m = h.open, v = h.scrolling, y = this.getMountNode();
    if (!mo())
      return /* @__PURE__ */ yI(p) ? p : null;
    var b = Ue(t, this.props), _ = Xr.handledProps, E = dm(b, function(F, C, I) {
      return va(_, I) || (F[I] = C), F;
    }, {}), R = _d(b, _);
    return /* @__PURE__ */ J.createElement(Xr, ce({
      closeOnDocumentClick: u
    }, R, {
      trigger: p,
      eventPool: d,
      mountNode: y,
      open: m,
      onClose: this.handleClose,
      onMount: this.handlePortalMount,
      onOpen: this.handleOpen,
      onUnmount: this.handlePortalUnmount
    }), /* @__PURE__ */ J.createElement(or, {
      innerRef: this.dimmerRef
    }, Ni.create(wd(l) ? l : {}, {
      autoGenerateKey: !1,
      defaultProps: {
        blurring: l === "blurring",
        inverted: l === "inverted"
      },
      overrideProps: {
        children: this.renderContent(E),
        centered: s,
        mountNode: y,
        scrolling: v
      }
    })));
  }, t;
}($s);
ln.handledProps = ["actions", "as", "basic", "centered", "children", "className", "closeIcon", "closeOnDimmerClick", "closeOnDocumentClick", "content", "defaultOpen", "dimmer", "eventPool", "header", "mountNode", "onActionClick", "onClose", "onMount", "onOpen", "onUnmount", "open", "size", "style", "trigger"];
ln.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** Shorthand for Modal.Actions. Typically an array of button shorthand. */
  actions: yt,
  /** A modal can reduce its complexity */
  basic: c.bool,
  /** A modal can be vertically centered in the viewport */
  centered: c.bool,
  /** Primary content. */
  children: c.node,
  /** Additional classes. */
  className: c.string,
  /** Shorthand for the close icon. Closes the modal on click. */
  closeIcon: c.oneOfType([c.node, c.object, c.bool]),
  /** Whether or not the Modal should close when the dimmer is clicked. */
  closeOnDimmerClick: c.bool,
  /** Whether or not the Modal should close when the document is clicked. */
  closeOnDocumentClick: c.bool,
  /** Simple text content for the Modal. */
  content: yt,
  /** Initial value of open. */
  defaultOpen: c.bool,
  /** A Modal can appear in a dimmer. */
  dimmer: c.oneOfType([c.bool, c.func, c.object, c.oneOf(["inverted", "blurring"])]),
  /** Event pool namespace that is used to handle component events */
  eventPool: c.string,
  /** Modal displayed above the content in bold. */
  header: yt,
  /** The node where the modal should mount. Defaults to document.body. */
  mountNode: c.any,
  /**
   * Action onClick handler when using shorthand `actions`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onActionClick: c.func,
  /**
   * Called when a close event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClose: c.func,
  /**
   * Called when the modal is mounted on the DOM.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onMount: c.func,
  /**
   * Called when an open event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onOpen: c.func,
  /**
   * Called when the modal is unmounted from the DOM.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onUnmount: c.func,
  /** Controls whether or not the Modal is displayed. */
  open: c.bool,
  /** A modal can vary in size */
  size: c.oneOf(["mini", "tiny", "small", "large", "fullscreen"]),
  /** Custom styles. */
  style: c.object,
  /** Element to be rendered in-place where the modal is defined. */
  trigger: c.node
  /**
   * NOTE: Any unhandled props that are defined in Modal are passed-through
   * to the inner Portal.
   */
} : {};
ln.defaultProps = {
  centered: !0,
  dimmer: !0,
  closeOnDimmerClick: !0,
  closeOnDocumentClick: !1,
  eventPool: "Modal"
};
ln.autoControlledProps = ["open"];
ln.Actions = gs;
ln.Content = ki;
ln.Description = Hl;
ln.Dimmer = Ni;
ln.Header = Ii;
function Yl(e) {
  var t = e.children, n = e.className, r = e.content, i = ze("header", n), s = Ue(Yl, e), u = He(Yl, e);
  return /* @__PURE__ */ J.createElement(u, ce({}, s, {
    className: i
  }), it(t) ? r : t);
}
Yl.handledProps = ["as", "children", "className", "content"];
Yl.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** Primary content. */
  children: c.node,
  /** Additional classes. */
  className: c.string,
  /** Shorthand for primary content. */
  content: Ot
} : {};
function tF(e) {
  return function(t) {
    return e == null ? void 0 : e[t];
  };
}
var nF = {
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
}, rF = tF(nF), aF = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, iF = "\\u0300-\\u036f", oF = "\\ufe20-\\ufe2f", sF = "\\u20d0-\\u20ff", lF = iF + oF + sF, cF = "[" + lF + "]", uF = RegExp(cF, "g");
function lh(e) {
  return e = Ro(e), e && e.replace(aF, rF).replace(uF, "");
}
var dF = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function fF(e) {
  return e.match(dF) || [];
}
var pF = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function hF(e) {
  return pF.test(e);
}
var R_ = "\\ud800-\\udfff", mF = "\\u0300-\\u036f", gF = "\\ufe20-\\ufe2f", vF = "\\u20d0-\\u20ff", yF = mF + gF + vF, M_ = "\\u2700-\\u27bf", D_ = "a-z\\xdf-\\xf6\\xf8-\\xff", bF = "\\xac\\xb1\\xd7\\xf7", _F = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", wF = "\\u2000-\\u206f", EF = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", L_ = "A-Z\\xc0-\\xd6\\xd8-\\xde", xF = "\\ufe0e\\ufe0f", F_ = bF + _F + wF + EF, $_ = "['’]", Hb = "[" + F_ + "]", CF = "[" + yF + "]", B_ = "\\d+", OF = "[" + M_ + "]", W_ = "[" + D_ + "]", U_ = "[^" + R_ + F_ + B_ + M_ + D_ + L_ + "]", SF = "\\ud83c[\\udffb-\\udfff]", TF = "(?:" + CF + "|" + SF + ")", PF = "[^" + R_ + "]", j_ = "(?:\\ud83c[\\udde6-\\uddff]){2}", z_ = "[\\ud800-\\udbff][\\udc00-\\udfff]", ns = "[" + L_ + "]", kF = "\\u200d", Yb = "(?:" + W_ + "|" + U_ + ")", NF = "(?:" + ns + "|" + U_ + ")", qb = "(?:" + $_ + "(?:d|ll|m|re|s|t|ve))?", Vb = "(?:" + $_ + "(?:D|LL|M|RE|S|T|VE))?", H_ = TF + "?", Y_ = "[" + xF + "]?", IF = "(?:" + kF + "(?:" + [PF, j_, z_].join("|") + ")" + Y_ + H_ + ")*", AF = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", RF = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", MF = Y_ + H_ + IF, DF = "(?:" + [OF, j_, z_].join("|") + ")" + MF, LF = RegExp([
  ns + "?" + W_ + "+" + qb + "(?=" + [Hb, ns, "$"].join("|") + ")",
  NF + "+" + Vb + "(?=" + [Hb, ns + Yb, "$"].join("|") + ")",
  ns + "?" + Yb + "+" + qb,
  ns + "+" + Vb,
  RF,
  AF,
  B_,
  DF
].join("|"), "g");
function FF(e) {
  return e.match(LF) || [];
}
function $F(e, t, n) {
  return e = Ro(e), t = t, t === void 0 ? hF(e) ? FF(e) : fF(e) : e.match(t) || [];
}
var BF = "['’]", WF = RegExp(BF, "g");
function UF(e) {
  return function(t) {
    return A_($F(lh(t).replace(WF, "")), e, "");
  };
}
function jF(e) {
  return function(t) {
    t = Ro(t);
    var n = om(t) ? rh(t) : void 0, r = n ? n[0] : t.charAt(0), i = n ? d_(n, 1).join("") : t.slice(1);
    return r[e]() + i;
  };
}
var zF = jF("toUpperCase"), HF = UF(function(e, t, n) {
  return e + (n ? " " : "") + zF(t);
}), Eo = /* @__PURE__ */ function(e) {
  Qt(t, e);
  function t() {
    for (var r, i = arguments.length, s = new Array(i), u = 0; u < i; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handleClick = function(l) {
      var d = r.props.disabled;
      d || Ie(r.props, "onClick", l, r.props);
    }, r;
  }
  var n = t.prototype;
  return n.render = function() {
    var i = this.props, s = i.active, u = i.children, l = i.className, d = i.color, p = i.content, h = i.disabled, m = i.fitted, v = i.header, y = i.icon, b = i.link, _ = i.name, E = i.onClick, R = i.position, F = ze(d, R, q(s, "active"), q(h, "disabled"), q(y === !0 || y && !(_ || p), "icon"), q(v, "header"), q(b, "link"), tn(m, "fitted"), "item", l), C = He(t, this.props, function() {
      if (E) return "a";
    }), I = Ue(t, this.props);
    return it(u) ? /* @__PURE__ */ J.createElement(C, ce({}, I, {
      className: F,
      onClick: this.handleClick
    }), We.create(y, {
      autoGenerateKey: !1
    }), it(p) ? HF(_) : p) : /* @__PURE__ */ J.createElement(C, ce({}, I, {
      className: F,
      onClick: this.handleClick
    }), u);
  }, t;
}(Vn);
Eo.handledProps = ["active", "as", "children", "className", "color", "content", "disabled", "fitted", "header", "icon", "index", "link", "name", "onClick", "position"];
Eo.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** A menu item can be active. */
  active: c.bool,
  /** Primary content. */
  children: c.node,
  /** Additional classes. */
  className: c.string,
  /** Additional colors can be specified. */
  color: c.oneOf(na),
  /** Shorthand for primary content. */
  content: Ot,
  /** A menu item can be disabled. */
  disabled: c.bool,
  /** A menu item or menu can remove element padding, vertically or horizontally. */
  fitted: c.oneOfType([c.bool, c.oneOf(["horizontally", "vertically"])]),
  /** A menu item may include a header or may itself be a header. */
  header: c.bool,
  /** MenuItem can be only icon. */
  icon: c.oneOfType([c.bool, yt]),
  /** MenuItem index inside Menu. */
  index: c.number,
  /** A menu item can be link. */
  link: c.bool,
  /** Internal name of the MenuItem. */
  name: c.string,
  /**
   * Called on click. When passed, the component will render as an `a`
   * tag by default instead of a `div`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: c.func,
  /** A menu item can take left or right position. */
  position: c.oneOf(["left", "right"])
} : {};
Eo.create = Yt(Eo, function(e) {
  return {
    content: e,
    name: e
  };
});
function ql(e) {
  var t = e.children, n = e.className, r = e.content, i = e.position, s = ze(i, "menu", n), u = Ue(ql, e), l = He(ql, e);
  return /* @__PURE__ */ J.createElement(l, ce({}, u, {
    className: s
  }), it(t) ? r : t);
}
ql.handledProps = ["as", "children", "className", "content", "position"];
ql.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** Primary content. */
  children: c.node,
  /** Additional classes. */
  className: c.string,
  /** Shorthand for primary content. */
  content: Ot,
  /** A sub menu can take left or right position. */
  position: c.oneOf(["left", "right"])
} : {};
var Tn = /* @__PURE__ */ function(e) {
  Qt(t, e);
  function t() {
    for (var r, i = arguments.length, s = new Array(i), u = 0; u < i; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handleItemOverrides = function(l) {
      return {
        onClick: function(p, h) {
          var m = h.index;
          r.setState({
            activeIndex: m
          }), Ie(l, "onClick", p, h), Ie(r.props, "onItemClick", p, h);
        }
      };
    }, r;
  }
  var n = t.prototype;
  return n.renderItems = function() {
    var i = this, s = this.props.items, u = this.state.activeIndex;
    return _n(s, function(l, d) {
      return Eo.create(l, {
        defaultProps: {
          active: parseInt(u, 10) === d,
          index: d
        },
        overrideProps: i.handleItemOverrides
      });
    });
  }, n.render = function() {
    var i = this.props, s = i.attached, u = i.borderless, l = i.children, d = i.className, p = i.color, h = i.compact, m = i.fixed, v = i.floated, y = i.fluid, b = i.icon, _ = i.inverted, E = i.pagination, R = i.pointing, F = i.secondary, C = i.size, I = i.stackable, O = i.tabular, S = i.text, x = i.vertical, P = i.widths, k = ze("ui", p, C, q(u, "borderless"), q(h, "compact"), q(y, "fluid"), q(_, "inverted"), q(E, "pagination"), q(R, "pointing"), q(F, "secondary"), q(I, "stackable"), q(S, "text"), q(x, "vertical"), tn(s, "attached"), tn(v, "floated"), tn(b, "icon"), tn(O, "tabular"), qn(m, "fixed"), Hn(P, "item"), d, "menu"), B = Ue(t, this.props), Y = He(t, this.props);
    return /* @__PURE__ */ J.createElement(Y, ce({}, B, {
      className: k
    }), it(l) ? this.renderItems() : l);
  }, t;
}($s);
Tn.handledProps = ["activeIndex", "as", "attached", "borderless", "children", "className", "color", "compact", "defaultActiveIndex", "fixed", "floated", "fluid", "icon", "inverted", "items", "onItemClick", "pagination", "pointing", "secondary", "size", "stackable", "tabular", "text", "vertical", "widths"];
Tn.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** Index of the currently active item. */
  activeIndex: c.oneOfType([c.number, c.string]),
  /** A menu may be attached to other content segments. */
  attached: c.oneOfType([c.bool, c.oneOf(["top", "bottom"])]),
  /** A menu item or menu can have no borders. */
  borderless: c.bool,
  /** Primary content. */
  children: c.node,
  /** Additional classes. */
  className: c.string,
  /** Additional colors can be specified. */
  color: c.oneOf(na),
  /** A menu can take up only the space necessary to fit its content. */
  compact: c.bool,
  /** Initial activeIndex value. */
  defaultActiveIndex: c.oneOfType([c.number, c.string]),
  /** A menu can be fixed to a side of its context. */
  fixed: c.oneOf(["left", "right", "bottom", "top"]),
  /** A menu can be floated. */
  floated: c.oneOfType([c.bool, c.oneOf(["right"])]),
  /** A vertical menu may take the size of its container. */
  fluid: c.bool,
  /** A menu may have just icons (bool) or labeled icons. */
  icon: c.oneOfType([c.bool, c.oneOf(["labeled"])]),
  /** A menu may have its colors inverted to show greater contrast. */
  inverted: c.bool,
  /** Shorthand array of props for Menu. */
  items: pc,
  /**
   * onClick handler for MenuItem. Mutually exclusive with children.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All item props.
   */
  onItemClick: At([zt(["children"]), c.func]),
  /** A pagination menu is specially formatted to present links to pages of content. */
  pagination: c.bool,
  /** A menu can point to show its relationship to nearby content. */
  pointing: c.bool,
  /** A menu can adjust its appearance to de-emphasize its contents. */
  secondary: c.bool,
  /** A menu can vary in size. */
  size: c.oneOf(Qr(lr, "medium", "big")),
  /** A menu can stack at mobile resolutions. */
  stackable: c.bool,
  /** A menu can be formatted to show tabs of information. */
  tabular: c.oneOfType([c.bool, c.oneOf(["right"])]),
  /** A menu can be formatted for text content. */
  text: c.bool,
  /** A vertical menu displays elements vertically. */
  vertical: c.bool,
  /** A menu can have its items divided evenly. */
  widths: c.oneOf(nr)
} : {};
Tn.autoControlledProps = ["activeIndex"];
Tn.Header = Yl;
Tn.Item = Eo;
Tn.Menu = ql;
Tn.create = Yt(Tn, function(e) {
  return {
    items: e
  };
});
var vs = /* @__PURE__ */ function(e) {
  Qt(t, e);
  function t() {
    for (var r, i = arguments.length, s = new Array(i), u = 0; u < i; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handleClick = function(l) {
      Ie(r.props, "onClick", l, r.props);
    }, r.handleKeyDown = function(l) {
      Ie(r.props, "onKeyDown", l, r.props), vn.getCode(l) === vn.Enter && Ie(r.props, "onClick", l, r.props);
    }, r.handleOverrides = function() {
      return {
        onClick: r.handleClick,
        onKeyDown: r.handleKeyDown
      };
    }, r;
  }
  var n = t.prototype;
  return n.render = function() {
    var i = this.props, s = i.active, u = i.type, l = this.props.disabled || u === "ellipsisItem";
    return Eo.create(this.props, {
      defaultProps: {
        active: s,
        "aria-current": s,
        "aria-disabled": l,
        disabled: l,
        onClick: this.handleClick,
        onKeyDown: this.handleKeyDown,
        tabIndex: l ? -1 : 0
      },
      overrideProps: this.handleOverrides
    });
  }, t;
}(Vn);
vs.handledProps = ["active", "disabled", "onClick", "onKeyDown", "type"];
vs.propTypes = process.env.NODE_ENV !== "production" ? {
  /** A pagination item can be active. */
  active: c.bool,
  /** A pagination item can be disabled. */
  disabled: c.bool,
  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: c.func,
  /**
   * Called on key down.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onKeyDown: c.func,
  /** A pagination should have a type. */
  type: c.oneOf(["ellipsisItem", "firstItem", "prevItem", "pageItem", "nextItem", "lastItem"])
} : {};
vs.create = Yt(vs, function(e) {
  return {
    content: e
  };
});
var Bs = /* @__PURE__ */ function(e) {
  Qt(t, e);
  function t() {
    for (var r, i = arguments.length, s = new Array(i), u = 0; u < i; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handleItemClick = function(l, d) {
      var p = d.value, h = r.state.activePage;
      +h != +p && (r.setState({
        activePage: p
      }), Ie(r.props, "onPageChange", l, ce({}, r.props, {
        activePage: p
      })));
    }, r.handleItemOverrides = function(l, d, p) {
      return function(h) {
        return {
          active: l,
          type: d,
          key: d + "-" + p,
          onClick: function(v, y) {
            Ie(h, "onClick", v, y), y.type !== "ellipsisItem" && r.handleItemClick(v, y);
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
    var i = this, s = this.props, u = s["aria-label"], l = s.boundaryRange, d = s.disabled, p = s.ellipsisItem, h = s.siblingRange, m = s.totalPages, v = this.state.activePage, y = tL({
      activePage: v,
      boundaryRange: l,
      hideEllipsis: wt(p),
      siblingRange: h,
      totalPages: m
    }), b = Ue(t, this.props);
    return /* @__PURE__ */ J.createElement(Tn, ce({}, b, {
      "aria-label": u,
      pagination: !0,
      role: "navigation"
    }), _n(y, function(_) {
      var E = _.active, R = _.type, F = _.value;
      return vs.create(i.props[R], {
        defaultProps: {
          content: F,
          disabled: d,
          value: F
        },
        overrideProps: i.handleItemOverrides(E, R, F)
      });
    }));
  }, t;
}($s);
Bs.handledProps = ["activePage", "aria-label", "boundaryRange", "defaultActivePage", "disabled", "ellipsisItem", "firstItem", "lastItem", "nextItem", "onPageChange", "pageItem", "prevItem", "siblingRange", "totalPages"];
Bs.propTypes = process.env.NODE_ENV !== "production" ? {
  /** A pagination item can have an aria label. */
  "aria-label": c.string,
  /** Initial activePage value. */
  defaultActivePage: c.oneOfType([c.number, c.string]),
  /** Index of the currently active page. */
  activePage: c.oneOfType([c.number, c.string]),
  /** Number of always visible pages at the beginning and end. */
  boundaryRange: c.oneOfType([c.number, c.string]),
  /** A pagination can be disabled. */
  disabled: c.bool,
  /** A shorthand for PaginationItem. */
  ellipsisItem: yt,
  /** A shorthand for PaginationItem. */
  firstItem: yt,
  /** A shorthand for PaginationItem. */
  lastItem: yt,
  /** A shorthand for PaginationItem. */
  nextItem: yt,
  /** A shorthand for PaginationItem. */
  pageItem: yt,
  /** A shorthand for PaginationItem. */
  prevItem: yt,
  /**
   * Called on change of an active page.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onPageChange: c.func,
  /** Number of always visible pages before and after the current one. */
  siblingRange: c.oneOfType([c.number, c.string]),
  /** Total number of pages. */
  totalPages: c.oneOfType([c.number, c.string]).isRequired
} : {};
Bs.autoControlledProps = ["activePage"];
Bs.defaultProps = {
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
Bs.Item = vs;
function YF(e, t, n) {
  return e == null ? e : y_(e, t, n);
}
var rr = /* @__PURE__ */ function(e) {
  Qt(t, e);
  function t() {
    for (var r, i = arguments.length, s = new Array(i), u = 0; u < i; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.inputRef = /* @__PURE__ */ yr(), r.labelRef = /* @__PURE__ */ yr(), r.canToggle = function() {
      var l = r.props, d = l.disabled, p = l.radio, h = l.readOnly, m = r.state.checked;
      return !d && !h && !(p && m);
    }, r.computeTabIndex = function() {
      var l = r.props, d = l.disabled, p = l.tabIndex;
      return wt(p) ? d ? -1 : 0 : p;
    }, r.handleClick = function(l) {
      var d = r.props.id, p = r.state, h = p.checked, m = p.indeterminate, v = Ie(r.inputRef.current, "contains", l.target), y = Ie(r.labelRef.current, "contains", l.target), b = !y && !v, _ = !wt(d), E = y && _;
      E || Ie(r.props, "onClick", l, ce({}, r.props, {
        checked: !h,
        indeterminate: !!m
      })), r.isClickFromMouse && (r.isClickFromMouse = !1, y && !_ && r.handleChange(l), b && r.handleChange(l), y && _ && l.stopPropagation());
    }, r.handleChange = function(l) {
      var d = r.state.checked;
      r.canToggle() && (Ie(r.props, "onChange", l, ce({}, r.props, {
        checked: !d,
        indeterminate: !1
      })), r.setState({
        checked: !d,
        indeterminate: !1
      }));
    }, r.handleMouseDown = function(l) {
      var d = r.state, p = d.checked, h = d.indeterminate;
      Ie(r.props, "onMouseDown", l, ce({}, r.props, {
        checked: !!p,
        indeterminate: !!h
      })), l.defaultPrevented || Ie(r.inputRef.current, "focus"), l.preventDefault();
    }, r.handleMouseUp = function(l) {
      var d = r.state, p = d.checked, h = d.indeterminate;
      r.isClickFromMouse = !0, Ie(r.props, "onMouseUp", l, ce({}, r.props, {
        checked: !!p,
        indeterminate: !!h
      }));
    }, r.setIndeterminate = function() {
      var l = r.state.indeterminate;
      YF(r.inputRef, "current.indeterminate", !!l);
    }, r;
  }
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.setIndeterminate();
  }, n.componentDidUpdate = function() {
    this.setIndeterminate();
  }, n.render = function() {
    var i = this.props, s = i.className, u = i.disabled, l = i.label, d = i.id, p = i.name, h = i.radio, m = i.readOnly, v = i.slider, y = i.toggle, b = i.type, _ = i.value, E = this.state, R = E.checked, F = E.indeterminate, C = ze(
      "ui",
      q(R, "checked"),
      q(u, "disabled"),
      q(F, "indeterminate"),
      // auto apply fitted class to compact white space when there is no label
      // https://semantic-ui.com/modules/checkbox.html#fitted
      q(wt(l), "fitted"),
      q(h, "radio"),
      q(m, "read-only"),
      q(v, "slider"),
      q(y, "toggle"),
      "checkbox",
      s
    ), I = Ue(t, this.props), O = He(t, this.props), S = um(I, {
      htmlProps: k_
    }), x = S[0], P = S[1], k = oh(l, {
      defaultProps: {
        htmlFor: d
      },
      autoGenerateKey: !1
    }) || /* @__PURE__ */ J.createElement("label", {
      htmlFor: d
    });
    return /* @__PURE__ */ J.createElement(O, ce({}, P, {
      className: C,
      onClick: this.handleClick,
      onChange: this.handleChange,
      onMouseDown: this.handleMouseDown,
      onMouseUp: this.handleMouseUp
    }), /* @__PURE__ */ J.createElement(or, {
      innerRef: this.inputRef
    }, /* @__PURE__ */ J.createElement("input", ce({}, x, {
      checked: R,
      className: "hidden",
      disabled: u,
      id: d,
      name: p,
      readOnly: !0,
      tabIndex: this.computeTabIndex(),
      type: b,
      value: _
    }))), /* @__PURE__ */ J.createElement(or, {
      innerRef: this.labelRef
    }, k));
  }, t;
}($s);
rr.handledProps = ["as", "checked", "className", "defaultChecked", "defaultIndeterminate", "disabled", "fitted", "id", "indeterminate", "label", "name", "onChange", "onClick", "onMouseDown", "onMouseUp", "radio", "readOnly", "slider", "tabIndex", "toggle", "type", "value"];
rr.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** Whether or not checkbox is checked. */
  checked: c.bool,
  /** Additional classes. */
  className: c.string,
  /** The initial value of checked. */
  defaultChecked: c.bool,
  /** Whether or not checkbox is indeterminate. */
  defaultIndeterminate: c.bool,
  /** A checkbox can appear disabled and be unable to change states */
  disabled: c.bool,
  /** Removes padding for a label. Auto applied when there is no label. */
  fitted: c.bool,
  /** A unique identifier. */
  id: c.oneOfType([c.number, c.string]),
  /** Whether or not checkbox is indeterminate. */
  indeterminate: c.bool,
  /** The text of the associated label element. */
  label: yt,
  /** The HTML input name. */
  name: c.string,
  /**
   * Called when the user attempts to change the checked state.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed checked/indeterminate state.
   */
  onChange: c.func,
  /**
   * Called when the checkbox or label is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and current checked/indeterminate state.
   */
  onClick: c.func,
  /**
   * Called when the user presses down on the mouse.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and current checked/indeterminate state.
   */
  onMouseDown: c.func,
  /**
   * Called when the user releases the mouse.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and current checked/indeterminate state.
   */
  onMouseUp: c.func,
  /** Format as a radio element. This means it is an exclusive option. */
  radio: At([c.bool, zt(["slider", "toggle"])]),
  /** A checkbox can be read-only and unable to change states. */
  readOnly: c.bool,
  /** Format to emphasize the current selection state. */
  slider: At([c.bool, zt(["radio", "toggle"])]),
  /** A checkbox can receive focus. */
  tabIndex: c.oneOfType([c.number, c.string]),
  /** Format to show an on or off choice. */
  toggle: At([c.bool, zt(["radio", "slider"])]),
  /** HTML input type, either checkbox or radio. */
  type: c.oneOf(["checkbox", "radio"]),
  /** The HTML input value. */
  value: c.oneOfType([c.string, c.number])
} : {};
rr.defaultProps = {
  type: "checkbox"
};
rr.autoControlledProps = ["checked", "indeterminate"];
function Ai(e) {
  var t = e.slider, n = e.toggle, r = e.type, i = Ue(Ai, e), s = !(t || n) || void 0;
  return /* @__PURE__ */ J.createElement(rr, ce({}, i, {
    type: r,
    radio: s,
    slider: t,
    toggle: n
  }));
}
Ai.handledProps = ["slider", "toggle", "type"];
Ai.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Format to emphasize the current selection state. */
  slider: rr.propTypes.slider,
  /** Format to show an on or off choice. */
  toggle: rr.propTypes.toggle,
  /** HTML input type, either checkbox or radio. */
  type: rr.propTypes.type
} : {};
Ai.defaultProps = {
  type: "radio"
};
function qF(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = 0, i = []; ++t < n; ) {
    var s = e[t];
    s && (i[r++] = s);
  }
  return i;
}
function VF(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (!t(e[n], n, e))
      return !1;
  return !0;
}
function GF(e, t) {
  var n = !0;
  return Fs(e, function(r, i, s) {
    return n = !!t(r, i, s), n;
  }), n;
}
function KF(e, t, n) {
  var r = gn(e) ? VF : GF;
  return r(e, Yi(t));
}
function ZF(e, t, n) {
  var r = e == null ? 0 : e.length;
  return r ? (t = t === void 0 ? 1 : fc(t), t = r - t, gd(e, 0, t < 0 ? 0 : t)) : [];
}
var XF = o_("length"), q_ = "\\ud800-\\udfff", QF = "\\u0300-\\u036f", JF = "\\ufe20-\\ufe2f", e3 = "\\u20d0-\\u20ff", t3 = QF + JF + e3, n3 = "\\ufe0e\\ufe0f", r3 = "[" + q_ + "]", ch = "[" + t3 + "]", uh = "\\ud83c[\\udffb-\\udfff]", a3 = "(?:" + ch + "|" + uh + ")", V_ = "[^" + q_ + "]", G_ = "(?:\\ud83c[\\udde6-\\uddff]){2}", K_ = "[\\ud800-\\udbff][\\udc00-\\udfff]", i3 = "\\u200d", Z_ = a3 + "?", X_ = "[" + n3 + "]?", o3 = "(?:" + i3 + "(?:" + [V_, G_, K_].join("|") + ")" + X_ + Z_ + ")*", s3 = X_ + Z_ + o3, l3 = "(?:" + [V_ + ch + "?", ch, G_, K_, r3].join("|") + ")", Gb = RegExp(uh + "(?=" + uh + ")|" + l3 + s3, "g");
function c3(e) {
  for (var t = Gb.lastIndex = 0; Gb.test(e); )
    ++t;
  return t;
}
function u3(e) {
  return om(e) ? c3(e) : XF(e);
}
var d3 = "[object Map]", f3 = "[object Set]";
function p3(e) {
  if (e == null)
    return 0;
  if (ni(e))
    return cm(e) ? u3(e) : e.length;
  var t = fa(e);
  return t == d3 || t == f3 ? e.size : rm(e).length;
}
var Kb = Ls(function(e) {
  return S_(bd(e, 1, Ll, !0));
}), h3 = ["ad", "andorra", "ae", "united arab emirates", "uae", "af", "afghanistan", "ag", "antigua", "ai", "anguilla", "al", "albania", "am", "armenia", "an", "netherlands antilles", "ao", "angola", "ar", "argentina", "as", "american samoa", "at", "austria", "au", "australia", "aw", "aruba", "ax", "aland islands", "az", "azerbaijan", "ba", "bosnia", "bb", "barbados", "bd", "bangladesh", "be", "belgium", "bf", "burkina faso", "bg", "bulgaria", "bh", "bahrain", "bi", "burundi", "bj", "benin", "bm", "bermuda", "bn", "brunei", "bo", "bolivia", "br", "brazil", "bs", "bahamas", "bt", "bhutan", "bv", "bouvet island", "bw", "botswana", "by", "belarus", "bz", "belize", "ca", "canada", "cc", "cocos islands", "cd", "congo", "cf", "central african republic", "cg", "congo brazzaville", "ch", "switzerland", "ci", "cote divoire", "ck", "cook islands", "cl", "chile", "cm", "cameroon", "cn", "china", "co", "colombia", "cr", "costa rica", "cs", "cu", "cuba", "cv", "cape verde", "cx", "christmas island", "cy", "cyprus", "cz", "czech republic", "de", "germany", "dj", "djibouti", "dk", "denmark", "dm", "dominica", "do", "dominican republic", "dz", "algeria", "ec", "ecuador", "england", "gb eng", "ee", "estonia", "eg", "egypt", "eh", "western sahara", "er", "eritrea", "es", "spain", "et", "ethiopia", "eu", "european union", "fi", "finland", "fj", "fiji", "fk", "falkland islands", "fm", "micronesia", "fo", "faroe islands", "fr", "france", "ga", "gabon", "gb", "uk", "united kingdom", "gd", "grenada", "ge", "georgia", "gf", "french guiana", "gh", "ghana", "gi", "gibraltar", "gl", "greenland", "gm", "gambia", "gn", "guinea", "gp", "guadeloupe", "gq", "equatorial guinea", "gr", "greece", "gs", "sandwich islands", "gt", "guatemala", "gu", "guam", "gw", "guinea-bissau", "gy", "guyana", "hk", "hong kong", "hm", "heard island", "hn", "honduras", "hr", "croatia", "ht", "haiti", "hu", "hungary", "id", "indonesia", "ie", "ireland", "il", "israel", "in", "india", "io", "indian ocean territory", "iq", "iraq", "ir", "iran", "is", "iceland", "it", "italy", "jm", "jamaica", "jo", "jordan", "jp", "japan", "ke", "kenya", "kg", "kyrgyzstan", "kh", "cambodia", "ki", "kiribati", "km", "comoros", "kn", "saint kitts and nevis", "kp", "north korea", "kr", "south korea", "kw", "kuwait", "ky", "cayman islands", "kz", "kazakhstan", "la", "laos", "lb", "lebanon", "lc", "saint lucia", "li", "liechtenstein", "lk", "sri lanka", "lr", "liberia", "ls", "lesotho", "lt", "lithuania", "lu", "luxembourg", "lv", "latvia", "ly", "libya", "ma", "morocco", "mc", "monaco", "md", "moldova", "me", "montenegro", "mg", "madagascar", "mh", "marshall islands", "mk", "macedonia", "ml", "mali", "mm", "myanmar", "burma", "mn", "mongolia", "mo", "macau", "mp", "northern mariana islands", "mq", "martinique", "mr", "mauritania", "ms", "montserrat", "mt", "malta", "mu", "mauritius", "mv", "maldives", "mw", "malawi", "mx", "mexico", "my", "malaysia", "mz", "mozambique", "na", "namibia", "nc", "new caledonia", "ne", "niger", "nf", "norfolk island", "ng", "nigeria", "ni", "nicaragua", "nl", "netherlands", "no", "norway", "np", "nepal", "nr", "nauru", "nu", "niue", "nz", "new zealand", "om", "oman", "pa", "panama", "pe", "peru", "pf", "french polynesia", "pg", "new guinea", "ph", "philippines", "pk", "pakistan", "pl", "poland", "pm", "saint pierre", "pn", "pitcairn islands", "pr", "puerto rico", "ps", "palestine", "pt", "portugal", "pw", "palau", "py", "paraguay", "qa", "qatar", "re", "reunion", "ro", "romania", "rs", "serbia", "ru", "russia", "rw", "rwanda", "sa", "saudi arabia", "sb", "solomon islands", "sc", "seychelles", "gb sct", "scotland", "sd", "sudan", "se", "sweden", "sg", "singapore", "sh", "saint helena", "si", "slovenia", "sj", "svalbard", "jan mayen", "sk", "slovakia", "sl", "sierra leone", "sm", "san marino", "sn", "senegal", "so", "somalia", "sr", "suriname", "st", "sao tome", "sv", "el salvador", "sy", "syria", "sz", "swaziland", "tc", "caicos islands", "td", "chad", "tf", "french territories", "tg", "togo", "th", "thailand", "tj", "tajikistan", "tk", "tokelau", "tl", "timorleste", "tm", "turkmenistan", "tn", "tunisia", "to", "tonga", "tr", "turkey", "tt", "trinidad", "tv", "tuvalu", "tw", "taiwan", "tz", "tanzania", "ua", "ukraine", "ug", "uganda", "um", "us minor islands", "us", "america", "united states", "uy", "uruguay", "uz", "uzbekistan", "va", "vatican city", "vc", "saint vincent", "ve", "venezuela", "vg", "british virgin islands", "vi", "us virgin islands", "vn", "vietnam", "vu", "vanuatu", "gb wls", "wales", "wf", "wallis and futuna", "ws", "samoa", "ye", "yemen", "yt", "mayotte", "za", "south africa", "zm", "zambia", "zw", "zimbabwe"], xo = /* @__PURE__ */ function(e) {
  Qt(t, e);
  function t() {
    return e.apply(this, arguments) || this;
  }
  var n = t.prototype;
  return n.render = function() {
    var i = this.props, s = i.className, u = i.name, l = ze(u, "flag", s), d = Ue(t, this.props), p = He(t, this.props);
    return /* @__PURE__ */ J.createElement(p, ce({}, d, {
      className: l
    }));
  }, t;
}(A1);
xo.handledProps = ["as", "className", "name"];
xo.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** Additional classes. */
  className: c.string,
  /** Flag name, can use the two digit country code, the full name, or a common alias. */
  name: w_(h3)
} : {};
xo.defaultProps = {
  as: "i"
};
xo.create = Yt(xo, function(e) {
  return {
    name: e
  };
});
function Vl(e) {
  var t = e.className, n = ze("divider", t), r = Ue(Vl, e), i = He(Vl, e);
  return /* @__PURE__ */ J.createElement(i, ce({}, r, {
    className: n
  }));
}
Vl.handledProps = ["as", "className"];
Vl.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** Additional classes. */
  className: c.string
} : {};
var Co = /* @__PURE__ */ function(e) {
  Qt(t, e);
  function t() {
    for (var r, i = arguments.length, s = new Array(i), u = 0; u < i; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handleClick = function(l) {
      Ie(r.props, "onClick", l, r.props);
    }, r;
  }
  var n = t.prototype;
  return n.render = function() {
    var i = this.props, s = i.active, u = i.children, l = i.className, d = i.content, p = i.disabled, h = i.description, m = i.flag, v = i.icon, y = i.image, b = i.label, _ = i.selected, E = i.text, R = ze(q(s, "active"), q(p, "disabled"), q(_, "selected"), "item", l), F = wt(v) ? vM(u, "DropdownMenu") && "dropdown" : v, C = Ue(t, this.props), I = He(t, this.props), O = {
      role: "option",
      "aria-disabled": p,
      "aria-checked": s,
      "aria-selected": _
    };
    if (!it(u))
      return /* @__PURE__ */ J.createElement(I, ce({}, C, O, {
        className: R,
        onClick: this.handleClick
      }), u);
    var S = xo.create(m, {
      autoGenerateKey: !1
    }), x = We.create(F, {
      autoGenerateKey: !1
    }), P = br.create(y, {
      autoGenerateKey: !1
    }), k = sr.create(b, {
      autoGenerateKey: !1
    }), B = ih("span", function(ne) {
      return {
        children: ne
      };
    }, h, {
      defaultProps: {
        className: "description"
      },
      autoGenerateKey: !1
    }), Y = ih("span", function(ne) {
      return {
        children: ne
      };
    }, it(d) ? E : d, {
      defaultProps: {
        className: "text"
      },
      autoGenerateKey: !1
    });
    return /* @__PURE__ */ J.createElement(I, ce({}, C, O, {
      className: R,
      onClick: this.handleClick
    }), P, x, S, k, B, Y);
  }, t;
}(Vn);
Co.handledProps = ["active", "as", "children", "className", "content", "description", "disabled", "flag", "icon", "image", "label", "onClick", "selected", "text", "value"];
Co.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** Style as the currently chosen item. */
  active: c.bool,
  /** Primary content. */
  children: c.node,
  /** Additional classes. */
  className: c.string,
  /** Shorthand for primary content. */
  content: Ot,
  /** Additional text with less emphasis. */
  description: yt,
  /** A dropdown item can be disabled. */
  disabled: c.bool,
  /** Shorthand for Flag. */
  flag: yt,
  /** Shorthand for Icon. */
  icon: yt,
  /** Shorthand for Image. */
  image: yt,
  /** Shorthand for Label. */
  label: yt,
  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: c.func,
  /**
   * The item currently selected by keyboard shortcut.
   * This is not the active item.
   */
  selected: c.bool,
  /** Display text. */
  text: Ot,
  /** Stored value. */
  value: c.oneOfType([c.bool, c.number, c.string])
} : {};
Co.create = Yt(Co, function(e) {
  return e;
});
function Ri(e) {
  var t = e.children, n = e.className, r = e.content, i = e.icon, s = ze("header", n), u = Ue(Ri, e), l = He(Ri, e);
  return it(t) ? /* @__PURE__ */ J.createElement(l, ce({}, u, {
    className: s
  }), We.create(i, {
    autoGenerateKey: !1
  }), r) : /* @__PURE__ */ J.createElement(l, ce({}, u, {
    className: s
  }), t);
}
Ri.handledProps = ["as", "children", "className", "content", "icon"];
Ri.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function) */
  as: c.elementType,
  /** Primary content. */
  children: c.node,
  /** Additional classes. */
  className: c.string,
  /** Shorthand for primary content. */
  content: Ot,
  /** Shorthand for Icon. */
  icon: yt
} : {};
Ri.create = Yt(Ri, function(e) {
  return {
    content: e
  };
});
function ys(e) {
  var t = e.children, n = e.className, r = e.content, i = e.direction, s = e.open, u = e.scrolling, l = ze(i, q(s, "visible"), q(u, "scrolling"), "menu transition", n), d = Ue(ys, e), p = He(ys, e);
  return /* @__PURE__ */ J.createElement(p, ce({}, d, {
    className: l
  }), it(t) ? r : t);
}
ys.handledProps = ["as", "children", "className", "content", "direction", "open", "scrolling"];
ys.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** Primary content. */
  children: c.node,
  /** Additional classes. */
  className: c.string,
  /** Shorthand for primary content. */
  content: Ot,
  /** A dropdown menu can open to the left or to the right. */
  direction: c.oneOf(["left", "right"]),
  /** Whether or not the dropdown menu is displayed. */
  open: c.bool,
  /** A dropdown menu can scroll. */
  scrolling: c.bool
} : {};
var Oo = /* @__PURE__ */ function(e) {
  Qt(t, e);
  function t() {
    for (var r, i = arguments.length, s = new Array(i), u = 0; u < i; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handleChange = function(l) {
      var d = ga(l, "target.value");
      Ie(r.props, "onChange", l, ce({}, r.props, {
        value: d
      }));
    }, r;
  }
  var n = t.prototype;
  return n.render = function() {
    var i = this.props, s = i.autoComplete, u = i.className, l = i.tabIndex, d = i.type, p = i.value, h = ze("search", u), m = Ue(t, this.props);
    return /* @__PURE__ */ J.createElement("input", ce({}, m, {
      "aria-autocomplete": "list",
      autoComplete: s,
      className: h,
      onChange: this.handleChange,
      tabIndex: l,
      type: d,
      value: p
    }));
  }, t;
}(Vn);
Oo.handledProps = ["as", "autoComplete", "className", "tabIndex", "type", "value"];
Oo.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** An input can have the auto complete. */
  autoComplete: c.string,
  /** Additional classes. */
  className: c.string,
  /** An input can receive focus. */
  tabIndex: c.oneOfType([c.number, c.string]),
  /** The HTML input type. */
  type: c.string,
  /** Stored value. */
  value: c.oneOfType([c.number, c.string])
} : {};
Oo.defaultProps = {
  autoComplete: "off",
  type: "text"
};
Oo.create = Yt(Oo, function(e) {
  return {
    type: e
  };
});
function Mi(e) {
  var t = e.children, n = e.className, r = e.content, i = ze("divider", n), s = Ue(Mi, e), u = He(Mi, e);
  return /* @__PURE__ */ J.createElement(u, ce({
    "aria-atomic": !0,
    "aria-live": "polite",
    role: "alert"
  }, s, {
    className: i
  }), it(t) ? r : t);
}
Mi.handledProps = ["as", "children", "className", "content"];
Mi.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** Primary content. */
  children: c.node,
  /** Additional classes. */
  className: c.string,
  /** Shorthand for primary content. */
  content: Ot
} : {};
Mi.create = Yt(Mi, function(e) {
  return {
    content: e
  };
});
var Q_ = /[\\^$.*+?()[\]{}|]/g, m3 = RegExp(Q_.source);
function g3(e) {
  return e = Ro(e), e && m3.test(e) ? e.replace(Q_, "\\$&") : e;
}
function as(e) {
  var t = e.additionLabel, n = e.additionPosition, r = e.allowAdditions, i = e.deburr, s = e.multiple, u = e.options, l = e.search, d = e.searchQuery, p = e.value, h = u;
  if (s && (h = Zp(h, function(_) {
    return !va(p, _.value);
  })), l && d)
    if (hs(l))
      h = l(h, d);
    else {
      var m = i ? lh(d) : d, v = new RegExp(g3(m), "i");
      h = Zp(h, function(_) {
        return v.test(i ? lh(_.text) : _.text);
      });
    }
  if (r && l && d && !Ol(h, {
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
as.handledProps = [];
function Zb(e) {
  var t = e.additionLabel, n = e.additionPosition, r = e.allowAdditions, i = e.deburr, s = e.multiple, u = e.options, l = e.search, d = e.searchQuery, p = e.selectedIndex, h = e.value, m = as({
    value: h,
    options: u,
    searchQuery: d,
    additionLabel: t,
    additionPosition: n,
    allowAdditions: r,
    deburr: i,
    multiple: s,
    search: l
  }), v = dm(m, function(E, R, F) {
    return R.disabled || E.push(F), E;
  }, []), y;
  if (!p || p < 0) {
    var b = v[0];
    y = s ? b : Qp(m, ["value", h]) || v[0];
  } else if (s)
    y = c_(v, function(E) {
      return E >= p;
    }), p >= m.length - 1 && (y = v[v.length - 1]);
  else {
    var _ = Qp(m, ["value", h]);
    y = va(v, _) ? _ : void 0;
  }
  return (!y || y < 0) && (y = v[0]), y;
}
var Xb = function(t, n) {
  return wt(t) ? n : t;
}, Qb = function(t) {
  return t && t.map(function(n) {
    return _d(n, ["key", "value"]);
  });
};
function J_(e) {
  var t = e.flag, n = e.image, r = e.text;
  return hs(r) ? r : {
    content: /* @__PURE__ */ J.createElement(J.Fragment, null, xo.create(t), br.create(n), r)
  };
}
var xn = /* @__PURE__ */ function(e) {
  Qt(t, e);
  function t() {
    for (var r, i = arguments.length, s = new Array(i), u = 0; u < i; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.searchRef = /* @__PURE__ */ yr(), r.sizerRef = /* @__PURE__ */ yr(), r.ref = /* @__PURE__ */ yr(), r.handleChange = function(l, d) {
      Ie(r.props, "onChange", l, ce({}, r.props, {
        value: d
      }));
    }, r.closeOnChange = function(l) {
      var d = r.props, p = d.closeOnChange, h = d.multiple, m = ss(p) ? !h : p;
      m && r.close(l, O_);
    }, r.closeOnEscape = function(l) {
      r.props.closeOnEscape && vn.getCode(l) === vn.Escape && (l.preventDefault(), r.close(l));
    }, r.moveSelectionOnKeyDown = function(l) {
      var d, p = r.props, h = p.multiple, m = p.selectOnNavigation, v = r.state.open;
      if (v) {
        var y = (d = {}, d[vn.ArrowDown] = 1, d[vn.ArrowUp] = -1, d), b = y[vn.getCode(l)];
        if (b !== void 0) {
          l.preventDefault();
          var _ = r.getSelectedIndexAfterMove(b);
          !h && m && r.makeSelectedItemActive(l, _), r.setState({
            selectedIndex: _
          });
        }
      }
    }, r.openOnSpace = function(l) {
      var d, p, h, m = r.state.focus && !r.state.open && vn.getCode(l) === vn.Spacebar, v = ((d = l.target) == null ? void 0 : d.tagName) !== "INPUT" && ((p = l.target) == null ? void 0 : p.tagName) !== "TEXTAREA" && ((h = l.target) == null ? void 0 : h.isContentEditable) !== !0;
      m && (v && l.preventDefault(), r.open(l));
    }, r.openOnArrow = function(l) {
      var d = r.state, p = d.focus, h = d.open;
      if (p && !h) {
        var m = vn.getCode(l);
        (m === vn.ArrowDown || m === vn.ArrowUp) && (l.preventDefault(), r.open(l));
      }
    }, r.makeSelectedItemActive = function(l, d) {
      var p = r.state, h = p.open, m = p.value, v = r.props.multiple, y = r.getSelectedItem(d), b = ga(y, "value"), _ = ga(y, "disabled");
      if (wt(b) || !h || _)
        return m;
      var E = v ? Kb(m, [b]) : b, R = v ? !!eh(E, m).length : E !== m;
      return R && (r.setState({
        value: E
      }), r.handleChange(l, E), y["data-additional"] && Ie(r.props, "onAddItem", l, ce({}, r.props, {
        value: b
      }))), m;
    }, r.selectItemOnEnter = function(l) {
      var d = r.props.search, p = r.state, h = p.open, m = p.selectedIndex;
      if (h) {
        var v = vn.getCode(l) === vn.Enter || // https://github.com/Semantic-Org/Semantic-UI-React/pull/3766
        !d && vn.getCode(l) === vn.Spacebar;
        if (v) {
          l.preventDefault();
          var y = p3(as({
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
            var b = r.makeSelectedItemActive(l, m);
            r.setState({
              selectedIndex: Zb({
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
            }), r.closeOnChange(l), r.clearSearchQuery(), d && Ie(r.searchRef.current, "focus");
          }
        }
      }
    }, r.removeItemOnBackspace = function(l) {
      var d = r.props, p = d.multiple, h = d.search, m = r.state, v = m.searchQuery, y = m.value;
      if (vn.getCode(l) === vn.Backspace && !(v || !h || !p || uo(y))) {
        l.preventDefault();
        var b = ZF(y);
        r.setState({
          value: b
        }), r.handleChange(l, b);
      }
    }, r.closeOnDocumentClick = function(l) {
      r.props.closeOnBlur && (r.ref.current && Ci(r.ref.current, l) || r.close());
    }, r.handleMouseDown = function(l) {
      r.isMouseDown = !0, Ie(r.props, "onMouseDown", l, r.props), document.addEventListener("mouseup", r.handleDocumentMouseUp);
    }, r.handleDocumentMouseUp = function() {
      r.isMouseDown = !1, document.removeEventListener("mouseup", r.handleDocumentMouseUp);
    }, r.handleClick = function(l) {
      var d = r.props, p = d.minCharacters, h = d.search, m = r.state, v = m.open, y = m.searchQuery;
      if (Ie(r.props, "onClick", l, r.props), l.stopPropagation(), !h) return r.toggle(l);
      if (v) {
        Ie(r.searchRef.current, "focus");
        return;
      }
      if (y.length >= p || p === 1) {
        r.open(l);
        return;
      }
      Ie(r.searchRef.current, "focus");
    }, r.handleIconClick = function(l) {
      var d = r.props.clearable, p = r.hasValue();
      Ie(r.props, "onClick", l, r.props), l.stopPropagation(), d && p ? r.clearValue(l) : r.toggle(l);
    }, r.handleItemClick = function(l, d) {
      var p = r.props, h = p.multiple, m = p.search, v = r.state.value, y = d.value;
      if (l.stopPropagation(), (h || d.disabled) && l.nativeEvent.stopImmediatePropagation(), !d.disabled) {
        var b = d["data-additional"], _ = h ? Kb(r.state.value, [y]) : y, E = h ? !!eh(_, v).length : _ !== v;
        E && (r.setState({
          value: _
        }), r.handleChange(l, _)), r.clearSearchQuery(), Ie(m ? r.searchRef.current : r.ref.current, "focus"), r.closeOnChange(l), b && Ie(r.props, "onAddItem", l, ce({}, r.props, {
          value: y
        }));
      }
    }, r.handleFocus = function(l) {
      var d = r.state.focus;
      d || (Ie(r.props, "onFocus", l, r.props), r.setState({
        focus: !0
      }));
    }, r.handleBlur = function(l) {
      var d = ga(l, "currentTarget");
      if (!(d && d.contains(document.activeElement))) {
        var p = r.props, h = p.closeOnBlur, m = p.multiple, v = p.selectOnBlur;
        r.isMouseDown || (Ie(r.props, "onBlur", l, r.props), v && !m && (r.makeSelectedItemActive(l, r.state.selectedIndex), h && r.close()), r.setState({
          focus: !1
        }), r.clearSearchQuery());
      }
    }, r.handleSearchChange = function(l, d) {
      var p = d.value;
      l.stopPropagation();
      var h = r.props.minCharacters, m = r.state.open, v = p;
      if (Ie(r.props, "onSearchChange", l, ce({}, r.props, {
        searchQuery: v
      })), r.setState({
        searchQuery: v,
        selectedIndex: 0
      }), !m && v.length >= h) {
        r.open();
        return;
      }
      m && h !== 1 && v.length < h && r.close();
    }, r.handleKeyDown = function(l) {
      r.moveSelectionOnKeyDown(l), r.openOnArrow(l), r.openOnSpace(l), r.selectItemOnEnter(l), Ie(r.props, "onKeyDown", l);
    }, r.getSelectedItem = function(l) {
      var d = as({
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
      return ga(d, "[" + l + "]");
    }, r.getItemByValue = function(l) {
      var d = r.props.options;
      return c_(d, {
        value: l
      });
    }, r.getDropdownAriaOptions = function() {
      var l = r.props, d = l.loading, p = l.disabled, h = l.search, m = l.multiple, v = r.state.open, y = {
        role: h ? "combobox" : "listbox",
        "aria-busy": d,
        "aria-disabled": p,
        "aria-expanded": !!v
      };
      return y.role === "listbox" && (y["aria-multiselectable"] = m), y;
    }, r.clearSearchQuery = function() {
      var l = r.state.searchQuery;
      l === void 0 || l === "" || r.setState({
        searchQuery: ""
      });
    }, r.handleLabelClick = function(l, d) {
      l.stopPropagation(), r.setState({
        selectedLabel: d.value
      }), Ie(r.props, "onLabelClick", l, d);
    }, r.handleLabelRemove = function(l, d) {
      l.stopPropagation();
      var p = r.state.value, h = Qr(p, d.value);
      r.setState({
        value: h
      }), r.handleChange(l, h);
    }, r.getSelectedIndexAfterMove = function(l, d) {
      d === void 0 && (d = r.state.selectedIndex);
      var p = as({
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
      if (!(p === void 0 || KF(p, "disabled"))) {
        var h = p.length - 1, m = r.props.wrapSelection, v = d + l;
        return !m && (v > h || v < 0) ? v = d : v > h ? v = 0 : v < 0 && (v = h), p[v].disabled ? r.getSelectedIndexAfterMove(l, v) : v;
      }
    }, r.handleIconOverrides = function(l) {
      var d = r.props.clearable, p = ze(d && r.hasValue() && "clear", l.className);
      return {
        className: p,
        onClick: function(m) {
          Ie(l, "onClick", m, l), r.handleIconClick(m);
        }
      };
    }, r.clearValue = function(l) {
      var d = r.props.multiple, p = d ? [] : "";
      r.setState({
        value: p
      }), r.handleChange(l, p);
    }, r.computeSearchInputTabIndex = function() {
      var l = r.props, d = l.disabled, p = l.tabIndex;
      return wt(p) ? d ? -1 : 0 : p;
    }, r.computeSearchInputWidth = function() {
      var l = r.state.searchQuery;
      if (r.sizerRef.current && l) {
        r.sizerRef.current.style.display = "inline", r.sizerRef.current.textContent = l;
        var d = Math.ceil(r.sizerRef.current.getBoundingClientRect().width);
        return r.sizerRef.current.style.removeProperty("display"), d;
      }
    }, r.computeTabIndex = function() {
      var l = r.props, d = l.disabled, p = l.search, h = l.tabIndex;
      if (!p)
        return d ? -1 : wt(h) ? 0 : h;
    }, r.handleSearchInputOverrides = function(l) {
      return {
        onChange: function(p, h) {
          Ie(l, "onChange", p, h), r.handleSearchChange(p, h);
        }
      };
    }, r.hasValue = function() {
      var l = r.props.multiple, d = r.state.value;
      return l ? !uo(d) : !wt(d) && d !== "";
    }, r.scrollSelectedItemIntoView = function() {
      if (r.ref.current) {
        var l = r.ref.current.querySelector(".menu.visible");
        if (l) {
          var d = l.querySelector(".item.selected");
          if (d) {
            var p = d.offsetTop < l.scrollTop, h = d.offsetTop + d.clientHeight > l.scrollTop + l.clientHeight;
            p ? l.scrollTop = d.offsetTop : h && (l.scrollTop = d.offsetTop + d.clientHeight - l.clientHeight);
          }
        }
      }
    }, r.setOpenDirection = function() {
      if (r.ref.current) {
        var l = r.ref.current.querySelector(".menu.visible");
        if (l) {
          var d = r.ref.current.getBoundingClientRect(), p = l.clientHeight, h = document.documentElement.clientHeight - d.top - d.height - p, m = d.top - p, v = h < 0 && m > h;
          !v != !r.state.upward && r.setState({
            upward: v
          });
        }
      }
    }, r.open = function(l, d) {
      l === void 0 && (l = null), d === void 0 && (d = !0);
      var p = r.props, h = p.disabled, m = p.search;
      h || (m && Ie(r.searchRef.current, "focus"), Ie(r.props, "onOpen", l, r.props), d && r.setState({
        open: !0
      }), r.scrollSelectedItemIntoView());
    }, r.close = function(l, d) {
      d === void 0 && (d = r.handleClose), r.state.open && (Ie(r.props, "onClose", l, r.props), r.setState({
        open: !1
      }, d));
    }, r.handleClose = function() {
      var l = document.activeElement === r.searchRef.current;
      !l && r.ref.current && r.ref.current.blur();
      var d = document.activeElement === r.ref.current, p = l || d;
      r.setState({
        focus: p
      });
    }, r.toggle = function(l) {
      return r.state.open ? r.close(l) : r.open(l);
    }, r.renderText = function() {
      var l = r.props, d = l.multiple, p = l.placeholder, h = l.search, m = l.text, v = r.state, y = v.searchQuery, b = v.selectedIndex, _ = v.value, E = v.open, R = r.hasValue(), F = ze(p && !R && "default", "text", h && y && "filtered"), C = p, I;
      return m ? C = m : E && !d ? I = r.getSelectedItem(b) : R && (I = r.getItemByValue(_)), Mi.create(I ? J_(I) : C, {
        defaultProps: {
          className: F
        }
      });
    }, r.renderSearchInput = function() {
      var l = r.props, d = l.search, p = l.searchInput, h = r.state.searchQuery;
      return d && /* @__PURE__ */ J.createElement(or, {
        innerRef: r.searchRef
      }, Oo.create(p, {
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
      var l = r.props, d = l.search, p = l.multiple;
      return d && p && /* @__PURE__ */ J.createElement("span", {
        className: "sizer",
        ref: r.sizerRef
      });
    }, r.renderLabels = function() {
      var l = r.props, d = l.multiple, p = l.renderLabel, h = r.state, m = h.selectedLabel, v = h.value;
      if (!(!d || uo(v))) {
        var y = _n(v, r.getItemByValue);
        return _n(qF(y), function(b, _) {
          var E = {
            active: b.value === m,
            as: "a",
            key: Xb(b.key, b.value),
            onClick: r.handleLabelClick,
            onRemove: r.handleLabelRemove,
            value: b.value
          };
          return sr.create(p(b, _, E), {
            defaultProps: E
          });
        });
      }
    }, r.renderOptions = function() {
      var l = r.props, d = l.lazyLoad, p = l.multiple, h = l.search, m = l.noResultsMessage, v = r.state, y = v.open, b = v.selectedIndex, _ = v.value;
      if (d && !y) return null;
      var E = as({
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
      if (m !== null && h && uo(E))
        return /* @__PURE__ */ J.createElement("div", {
          className: "message"
        }, m);
      var R = p ? function(F) {
        return va(_, F);
      } : function(F) {
        return F === _;
      };
      return _n(E, function(F, C) {
        return Co.create(ce({
          active: R(F.value),
          selected: b === C
        }, F, {
          key: Xb(F.key, F.value),
          // Needed for handling click events on disabled items
          style: ce({}, F.style, {
            pointerEvents: "all"
          })
        }), {
          generateKey: !1,
          overrideProps: function(O) {
            return {
              onClick: function(x, P) {
                O.onClick == null || O.onClick(x, P), r.handleItemClick(x, P);
              }
            };
          }
        });
      });
    }, r.renderMenu = function() {
      var l = r.props, d = l.children, p = l.direction, h = l.header, m = r.state.open, v = r.getDropdownMenuAriaOptions();
      if (!it(d)) {
        var y = Xh.only(d), b = ze(p, q(m, "visible"), y.props.className);
        return /* @__PURE__ */ R1(y, ce({
          className: b
        }, v));
      }
      return /* @__PURE__ */ J.createElement(ys, ce({}, v, {
        direction: p,
        open: m
      }), Ri.create(h, {
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
  }, t.getAutoControlledStateFromProps = function(i, s, u) {
    var l = {
      __options: i.options,
      __value: s.value
    }, d = (
      // On value change
      !Sl(u.__value, s.value) || // On option keys/values, we only check those properties to avoid recursive performance impacts.
      // https://github.com/Semantic-Org/Semantic-UI-React/issues/3000
      !$L(Qb(i.options), Qb(u.__options))
    );
    return d && (l.selectedIndex = Zb({
      additionLabel: i.additionLabel,
      additionPosition: i.additionPosition,
      allowAdditions: i.allowAdditions,
      deburr: i.deburr,
      multiple: i.multiple,
      search: i.search,
      selectedIndex: s.selectedIndex,
      value: s.value,
      options: i.options,
      searchQuery: s.searchQuery
    })), l;
  }, n.componentDidMount = function() {
    var i = this.state.open;
    i && this.open(null, !1);
  }, n.shouldComponentUpdate = function(i, s) {
    return !Sl(i, this.props) || !Sl(s, this.state);
  }, n.componentDidUpdate = function(i, s) {
    var u = this.props, l = u.closeOnBlur, d = u.minCharacters, p = u.openOnFocus, h = u.search;
    if (process.env.NODE_ENV !== "production") {
      var m = Array.isArray(this.props.value), v = qp(this.props, "value");
      v && this.props.multiple && !m ? console.error("Dropdown `value` must be an array when `multiple` is set." + (" Received type: `" + Object.prototype.toString.call(this.props.value) + "`.")) : v && !this.props.multiple && m && console.error("Dropdown `value` must not be an array when `multiple` is not set. Either set `multiple={true}` or use a string or number value.");
    }
    if (!s.focus && this.state.focus) {
      if (!this.isMouseDown) {
        var y = !h || h && d === 1 && !this.state.open;
        p && y && this.open();
      }
    } else s.focus && !this.state.focus && !this.isMouseDown && l && this.close();
    !s.open && this.state.open ? (this.setOpenDirection(), this.scrollSelectedItemIntoView()) : s.open && this.state.open, s.selectedIndex !== this.state.selectedIndex && this.scrollSelectedItemIntoView();
  }, n.getDropdownMenuAriaOptions = function() {
    var i = this.props, s = i.search, u = i.multiple, l = {};
    return s && (l["aria-multiselectable"] = u, l.role = "listbox"), l;
  }, n.render = function() {
    var i = this.props, s = i.basic, u = i.button, l = i.className, d = i.compact, p = i.disabled, h = i.error, m = i.fluid, v = i.floating, y = i.icon, b = i.inline, _ = i.item, E = i.labeled, R = i.loading, F = i.multiple, C = i.pointing, I = i.search, O = i.selection, S = i.scrolling, x = i.simple, P = i.trigger, k = this.state, B = k.focus, Y = k.open, ne = k.upward, z = ze(
      "ui",
      q(Y, "active visible"),
      q(p, "disabled"),
      q(h, "error"),
      q(R, "loading"),
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
      q(x, "simple"),
      q(S, "scrolling"),
      q(ne, "upward"),
      tn(C, "pointing"),
      "dropdown",
      l
    ), re = Ue(t, this.props), pe = He(t, this.props), ve = this.getDropdownAriaOptions(pe, this.props);
    return /* @__PURE__ */ J.createElement(or, {
      innerRef: this.ref
    }, /* @__PURE__ */ J.createElement(pe, ce({}, re, ve, {
      className: z,
      onBlur: this.handleBlur,
      onClick: this.handleClick,
      onKeyDown: this.handleKeyDown,
      onMouseDown: this.handleMouseDown,
      onFocus: this.handleFocus,
      onChange: this.handleChange,
      tabIndex: this.computeTabIndex()
    }), this.renderLabels(), this.renderSearchInput(), this.renderSearchSizer(), P || this.renderText(), We.create(y, {
      overrideProps: this.handleIconOverrides,
      autoGenerateKey: !1
    }), this.renderMenu(), Y && /* @__PURE__ */ J.createElement(Ua, {
      name: "keydown",
      on: this.closeOnEscape
    }), Y && /* @__PURE__ */ J.createElement(Ua, {
      name: "click",
      on: this.closeOnDocumentClick
    }), B && /* @__PURE__ */ J.createElement(Ua, {
      name: "keydown",
      on: this.removeItemOnBackspace
    })));
  }, t;
}($s);
xn.handledProps = ["additionLabel", "additionPosition", "allowAdditions", "as", "basic", "button", "children", "className", "clearable", "closeOnBlur", "closeOnChange", "closeOnEscape", "compact", "deburr", "defaultOpen", "defaultSearchQuery", "defaultSelectedLabel", "defaultUpward", "defaultValue", "direction", "disabled", "error", "floating", "fluid", "header", "icon", "inline", "item", "labeled", "lazyLoad", "loading", "minCharacters", "multiple", "noResultsMessage", "onAddItem", "onBlur", "onChange", "onClick", "onClose", "onFocus", "onLabelClick", "onMouseDown", "onOpen", "onSearchChange", "open", "openOnFocus", "options", "placeholder", "pointing", "renderLabel", "scrolling", "search", "searchInput", "searchQuery", "selectOnBlur", "selectOnNavigation", "selectedLabel", "selection", "simple", "tabIndex", "text", "trigger", "upward", "value", "wrapSelection"];
xn.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** Label prefixed to an option added by a user. */
  additionLabel: c.oneOfType([c.element, c.string]),
  /** Position of the `Add: ...` option in the dropdown list ('top' or 'bottom'). */
  additionPosition: c.oneOf(["top", "bottom"]),
  /**
   * Allow user additions to the list of options (boolean).
   * Requires the use of `selection`, `options` and `search`.
   */
  allowAdditions: At([wi(["options", "selection", "search"]), c.bool]),
  /** A Dropdown can reduce its complexity. */
  basic: c.bool,
  /** Format the Dropdown to appear as a button. */
  button: c.bool,
  /** Primary content. */
  children: At([zt(["options", "selection"]), E_({
    children: c.any.isRequired
  }, c.element.isRequired)]),
  /** Additional classes. */
  className: c.string,
  /** Using the clearable setting will let users remove their selection from a dropdown. */
  clearable: c.bool,
  /** Whether or not the menu should close when the dropdown is blurred. */
  closeOnBlur: c.bool,
  /** Whether or not the dropdown should close when the escape key is pressed. */
  closeOnEscape: c.bool,
  /**
   * Whether or not the menu should close when a value is selected from the dropdown.
   * By default, multiple selection dropdowns will remain open on change, while single
   * selection dropdowns will close on change.
   */
  closeOnChange: c.bool,
  /** A compact dropdown has no minimum width. */
  compact: c.bool,
  /** Whether or not the dropdown should strip diacritics in options and input search */
  deburr: c.bool,
  /** Initial value of open. */
  defaultOpen: c.bool,
  /** Initial value of searchQuery. */
  defaultSearchQuery: c.string,
  /** Currently selected label in multi-select. */
  defaultSelectedLabel: At([wi(["multiple"]), c.oneOfType([c.number, c.string])]),
  /** Initial value of upward. */
  defaultUpward: c.bool,
  /** Initial value or value array if multiple. */
  defaultValue: c.oneOfType([c.number, c.string, c.bool, c.arrayOf(c.oneOfType([c.string, c.number, c.bool]))]),
  /** A dropdown menu can open to the left or to the right. */
  direction: c.oneOf(["left", "right"]),
  /** A disabled dropdown menu or item does not allow user interaction. */
  disabled: c.bool,
  /** An errored dropdown can alert a user to a problem. */
  error: c.bool,
  /** A dropdown menu can contain floated content. */
  floating: c.bool,
  /** A dropdown can take the full width of its parent */
  fluid: c.bool,
  /** A dropdown menu can contain a header. */
  header: c.node,
  /** Shorthand for Icon. */
  icon: c.oneOfType([c.node, c.object]),
  /** A dropdown can be formatted to appear inline in other content. */
  inline: c.bool,
  /** A dropdown can be formatted as a Menu item. */
  item: c.bool,
  /** A dropdown can be labeled. */
  labeled: c.bool,
  /** A dropdown can defer rendering its options until it is open. */
  lazyLoad: c.bool,
  /** A dropdown can show that it is currently loading data. */
  loading: c.bool,
  /** The minimum characters for a search to begin showing results. */
  minCharacters: c.number,
  /** A selection dropdown can allow multiple selections. */
  multiple: c.bool,
  /** Message to display when there are no results. */
  noResultsMessage: c.node,
  /**
   * Called when a user adds a new item. Use this to update the options list.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and the new item's value.
   */
  onAddItem: c.func,
  /**
   * Called on blur.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onBlur: c.func,
  /**
   * Called when the user attempts to change the value.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed value.
   */
  onChange: c.func,
  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: c.func,
  /**
   * Called when a close event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClose: c.func,
  /**
   * Called on focus.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onFocus: c.func,
  /**
   * Called when a multi-select label is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All label props.
   */
  onLabelClick: c.func,
  /**
   * Called on mousedown.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onMouseDown: c.func,
  /**
   * Called when an open event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onOpen: c.func,
  /**
   * Called on search input change.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props, includes current value of searchQuery.
   */
  onSearchChange: c.func,
  /** Controls whether or not the dropdown menu is displayed. */
  open: c.bool,
  /** Whether or not the menu should open when the dropdown is focused. */
  openOnFocus: c.bool,
  /** Array of Dropdown.Item props e.g. `{ text: '', value: '' }` */
  options: At([zt(["children"]), c.arrayOf(c.shape(Co.propTypes))]),
  /** Placeholder text. */
  placeholder: c.string,
  /** A dropdown can be formatted so that its menu is pointing. */
  pointing: c.oneOfType([c.bool, c.oneOf(["left", "right", "top", "top left", "top right", "bottom", "bottom left", "bottom right"])]),
  /**
   * Mapped over the active items and returns shorthand for the active item Labels.
   * Only applies to `multiple` Dropdowns.
   *
   * @param {object} item - A currently active dropdown item.
   * @param {number} index - The current index.
   * @param {object} defaultLabelProps - The default props for an active item Label.
   * @returns {*} Shorthand for a Label.
   */
  renderLabel: c.func,
  /** A dropdown can have its menu scroll. */
  scrolling: c.bool,
  /**
   * A selection dropdown can allow a user to search through a large list of choices.
   * Pass a function here to replace the default search.
   */
  search: c.oneOfType([c.bool, c.func]),
  /** A shorthand for a search input. */
  searchInput: c.oneOfType([c.array, c.node, c.object]),
  /** Current value of searchQuery. Creates a controlled component. */
  searchQuery: c.string,
  // TODO 'searchInMenu' or 'search='in menu' or ???  How to handle this markup and functionality?
  /** Define whether the highlighted item should be selected on blur. */
  selectOnBlur: c.bool,
  /**
   * Whether or not to change the value when navigating the menu using arrow keys.
   * Setting to false will require enter or left click to confirm a choice.
   */
  selectOnNavigation: c.bool,
  /** Currently selected label in multi-select. */
  selectedLabel: At([wi(["multiple"]), c.oneOfType([c.string, c.number])]),
  /** A dropdown can be used to select between choices in a form. */
  selection: At([zt(["children"]), wi(["options"]), c.bool]),
  /** A simple dropdown can open without Javascript. */
  simple: c.bool,
  /** A dropdown can receive focus. */
  tabIndex: c.oneOfType([c.number, c.string]),
  /** The text displayed in the dropdown, usually for the active item. */
  text: c.string,
  /** Custom element to trigger the menu to become visible. Takes place of 'text'. */
  trigger: At([zt(["selection", "text"]), c.node]),
  /** Current value or value array if multiple. Creates a controlled component. */
  value: c.oneOfType([c.bool, c.string, c.number, c.arrayOf(c.oneOfType([c.bool, c.string, c.number]))]),
  /** Controls whether the dropdown will open upward. */
  upward: c.bool,
  /**
   * A dropdown will go to the last element when ArrowUp is pressed on the first,
   * or go to the first when ArrowDown is pressed on the last( aka infinite selection )
   */
  wrapSelection: c.bool
} : {};
xn.defaultProps = {
  additionLabel: "Add ",
  additionPosition: "top",
  closeOnBlur: !0,
  closeOnEscape: !0,
  deburr: !1,
  icon: "dropdown",
  minCharacters: 1,
  noResultsMessage: "No results found.",
  openOnFocus: !0,
  renderLabel: J_,
  searchInput: "text",
  selectOnBlur: !0,
  selectOnNavigation: !0,
  wrapSelection: !0
};
xn.autoControlledProps = ["open", "searchQuery", "selectedLabel", "value", "upward"];
xn.Divider = Vl;
xn.Header = Ri;
xn.Item = Co;
xn.Menu = ys;
xn.SearchInput = Oo;
xn.Text = Mi;
function Br(e) {
  return /* @__PURE__ */ J.createElement(xn, ce({}, e, {
    selection: !0
  }));
}
Br.handledProps = ["options"];
Br.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Array of Dropdown.Item props e.g. `{ text: '', value: '' }` */
  options: c.arrayOf(c.shape(xn.Item.propTypes)).isRequired
} : {};
Br.Divider = xn.Divider;
Br.Header = xn.Header;
Br.Item = xn.Item;
Br.Menu = xn.Menu;
var Cd = /* @__PURE__ */ function(e) {
  Qt(t, e);
  function t() {
    for (var r, i = arguments.length, s = new Array(i), u = 0; u < i; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.ref = /* @__PURE__ */ yr(), r.focus = function() {
      return r.ref.current.focus();
    }, r.handleChange = function(l) {
      var d = ga(l, "target.value");
      Ie(r.props, "onChange", l, ce({}, r.props, {
        value: d
      }));
    }, r.handleInput = function(l) {
      var d = ga(l, "target.value");
      Ie(r.props, "onInput", l, ce({}, r.props, {
        value: d
      }));
    }, r;
  }
  var n = t.prototype;
  return n.render = function() {
    var i = this.props, s = i.rows, u = i.value, l = Ue(t, this.props), d = He(t, this.props);
    return /* @__PURE__ */ J.createElement(or, {
      innerRef: this.ref
    }, /* @__PURE__ */ J.createElement(d, ce({}, l, {
      onChange: this.handleChange,
      onInput: this.handleInput,
      rows: s,
      value: u
    })));
  }, t;
}(Vn);
Cd.handledProps = ["as", "onChange", "onInput", "rows", "value"];
Cd.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /**
   * Called on change.
   * @param {SyntheticEvent} event - The React SyntheticEvent object
   * @param {object} data - All props and the event value.
   */
  onChange: c.func,
  /**
   * Called on input.
   * @param {SyntheticEvent} event - The React SyntheticEvent object
   * @param {object} data - All props and the event value.
   */
  onInput: c.func,
  /** Indicates row count for a TextArea. */
  rows: c.oneOfType([c.number, c.string]),
  /** The value of the textarea. */
  value: c.oneOfType([c.number, c.string])
} : {};
Cd.defaultProps = {
  as: "textarea",
  rows: 3
};
function En(e) {
  var t = e.children, n = e.className, r = e.content, i = e.control, s = e.disabled, u = e.error, l = e.inline, d = e.label, p = e.required, h = e.type, m = e.width, v = e.id, y = ze(q(s, "disabled"), q(u, "error"), q(l, "inline"), q(p, "required"), Hn(m, "wide"), "field", n), b = Ue(En, e), _ = He(En, e), E = ga(u, "pointing", "above"), R = sr.create(u, {
    autoGenerateKey: !1,
    defaultProps: {
      prompt: !0,
      pointing: E,
      id: v ? v + "-error-message" : void 0,
      role: "alert",
      "aria-atomic": !0
    }
  }), F = (E === "below" || E === "right") && R, C = (E === "above" || E === "left") && R;
  if (wt(i))
    return wt(d) ? /* @__PURE__ */ J.createElement(_, ce({}, b, {
      className: y,
      id: v
    }), it(t) ? r : t) : /* @__PURE__ */ J.createElement(_, ce({}, b, {
      className: y,
      id: v
    }), F, oh(d, {
      autoGenerateKey: !1
    }), C);
  var I = v && u ? v + "-error-message" : null, O = {
    "aria-describedby": I,
    "aria-invalid": u ? !0 : void 0
  }, S = ce({}, b, {
    content: r,
    children: t,
    disabled: s,
    required: p,
    type: h,
    id: v
  });
  return i === "input" && (h === "checkbox" || h === "radio") ? /* @__PURE__ */ J.createElement(_, {
    className: y
  }, /* @__PURE__ */ J.createElement("label", null, F, /* @__PURE__ */ lp(i, ce({}, O, S)), " ", d, C)) : i === rr || i === Ai ? /* @__PURE__ */ J.createElement(_, {
    className: y
  }, F, /* @__PURE__ */ lp(i, ce({}, O, S, {
    label: d
  })), C) : /* @__PURE__ */ J.createElement(_, {
    className: y
  }, oh(d, {
    defaultProps: {
      htmlFor: v
    },
    autoGenerateKey: !1
  }), F, /* @__PURE__ */ lp(i, ce({}, O, S)), C);
}
En.handledProps = ["as", "children", "className", "content", "control", "disabled", "error", "id", "inline", "label", "required", "type", "width"];
En.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** Primary content. */
  children: c.node,
  /** Additional classes. */
  className: c.string,
  /** Shorthand for primary content. */
  content: Ot,
  /**
   * A form control component (i.e. Dropdown) or HTML tagName (i.e. 'input').
   * Extra FormField props are passed to the control component.
   * Mutually exclusive with children.
   */
  control: c.oneOfType([c.elementType, c.oneOf(["button", "input", "select", "textarea"])]),
  /** Individual fields may be disabled. */
  disabled: c.bool,
  /** Individual fields may display an error state along with a message. */
  error: c.oneOfType([c.bool, yt]),
  /** The id of the control */
  id: c.string,
  /** A field can have its label next to instead of above it. */
  inline: c.bool,
  // Heads Up!
  // Do not disallow children with `label` shorthand
  // The `control` might accept a `label` prop and `children`
  /** Mutually exclusive with children. */
  label: c.oneOfType([c.node, c.object]),
  /** A field can show that input is mandatory. */
  required: c.bool,
  /** Passed to the control component (i.e. <input type='password' />) */
  type: At([
    wi(["control"])
    // don't strictly validate HTML types
    // a control might be passed that uses a `type` prop with unknown values
    // let the control validate if for us
  ]),
  /** A field can specify its width in grid columns */
  width: c.oneOf(nr)
} : {};
function bs(e) {
  var t = e.control, n = Ue(bs, e), r = He(bs, e);
  return /* @__PURE__ */ J.createElement(r, ce({}, n, {
    control: t
  }));
}
bs.handledProps = ["as", "control"];
bs.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** A FormField control prop. */
  control: En.propTypes.control
} : {};
bs.defaultProps = {
  as: En,
  control: ut
};
function _s(e) {
  var t = e.control, n = Ue(_s, e), r = He(_s, e);
  return /* @__PURE__ */ J.createElement(r, ce({}, n, {
    control: t
  }));
}
_s.handledProps = ["as", "control"];
_s.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** A FormField control prop. */
  control: En.propTypes.control
} : {};
_s.defaultProps = {
  as: En,
  control: rr
};
function ws(e) {
  var t = e.control, n = Ue(ws, e), r = He(ws, e);
  return /* @__PURE__ */ J.createElement(r, ce({}, n, {
    control: t
  }));
}
ws.handledProps = ["as", "control"];
ws.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** A FormField control prop. */
  control: En.propTypes.control
} : {};
ws.defaultProps = {
  as: En,
  control: xn
};
function Gl(e) {
  var t = e.children, n = e.className, r = e.grouped, i = e.inline, s = e.unstackable, u = e.widths, l = ze(q(r, "grouped"), q(i, "inline"), q(s, "unstackable"), Hn(u, null, !0), "fields", n), d = Ue(Gl, e), p = He(Gl, e);
  return /* @__PURE__ */ J.createElement(p, ce({}, d, {
    className: l
  }), t);
}
Gl.handledProps = ["as", "children", "className", "grouped", "inline", "unstackable", "widths"];
Gl.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** Primary content. */
  children: c.node,
  /** Additional classes. */
  className: c.string,
  /** Fields can show related choices. */
  grouped: At([zt(["inline"]), c.bool]),
  /** Multiple fields may be inline in a row. */
  inline: At([zt(["grouped"]), c.bool]),
  /** A form group can prevent itself from stacking on mobile. */
  unstackable: c.bool,
  /** Fields Groups can specify their width in grid columns or automatically divide fields to be equal width. */
  widths: c.oneOf([].concat(nr, ["equal"]))
} : {};
var Es = /* @__PURE__ */ function(e) {
  Qt(t, e);
  function t() {
    for (var r, i = arguments.length, s = new Array(i), u = 0; u < i; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.inputRef = /* @__PURE__ */ yr(), r.computeIcon = function() {
      var l = r.props, d = l.loading, p = l.icon;
      if (!wt(p)) return p;
      if (d) return "spinner";
    }, r.computeTabIndex = function() {
      var l = r.props, d = l.disabled, p = l.tabIndex;
      if (!wt(p)) return p;
      if (d) return -1;
    }, r.focus = function(l) {
      return r.inputRef.current.focus(l);
    }, r.select = function() {
      return r.inputRef.current.select();
    }, r.handleChange = function(l) {
      var d = ga(l, "target.value");
      Ie(r.props, "onChange", l, ce({}, r.props, {
        value: d
      }));
    }, r.handleChildOverrides = function(l, d) {
      return ce({}, d, l.props, {
        ref: function(h) {
          ma(l.ref, h), r.inputRef.current = h;
        }
      });
    }, r.partitionProps = function() {
      var l = r.props, d = l.disabled, p = l.type, h = r.computeTabIndex(), m = Ue(t, r.props), v = um(m), y = v[0], b = v[1];
      return [ce({}, y, {
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
    var i = this, s = this.props, u = s.action, l = s.actionPosition, d = s.children, p = s.className, h = s.disabled, m = s.error, v = s.fluid, y = s.focus, b = s.icon, _ = s.iconPosition, E = s.input, R = s.inverted, F = s.label, C = s.labelPosition, I = s.loading, O = s.size, S = s.transparent, x = s.type, P = ze("ui", O, q(h, "disabled"), q(m, "error"), q(v, "fluid"), q(y, "focus"), q(R, "inverted"), q(I, "loading"), q(S, "transparent"), qn(l, "action") || q(u, "action"), qn(_, "icon") || q(b || I, "icon"), qn(C, "labeled") || q(F, "labeled"), "input", p), k = He(t, this.props), B = this.partitionProps(), Y = B[0], ne = B[1];
    if (!it(d)) {
      var z = _n(Xh.toArray(d), function(ve) {
        return ve.type !== "input" ? ve : /* @__PURE__ */ R1(ve, i.handleChildOverrides(ve, Y));
      });
      return /* @__PURE__ */ J.createElement(k, ce({}, ne, {
        className: P
      }), z);
    }
    var re = ut.create(u, {
      autoGenerateKey: !1
    }), pe = sr.create(F, {
      defaultProps: {
        className: ze(
          "label",
          // add 'left|right corner'
          va(C, "corner") && C
        )
      },
      autoGenerateKey: !1
    });
    return /* @__PURE__ */ J.createElement(k, ce({}, ne, {
      className: P
    }), l === "left" && re, C !== "right" && pe, PD(E || x, {
      defaultProps: Y,
      autoGenerateKey: !1
    }), We.create(this.computeIcon(), {
      autoGenerateKey: !1
    }), l !== "left" && re, C === "right" && pe);
  }, t;
}(Vn);
Es.handledProps = ["action", "actionPosition", "as", "children", "className", "disabled", "error", "fluid", "focus", "icon", "iconPosition", "input", "inverted", "label", "labelPosition", "loading", "onChange", "size", "tabIndex", "transparent", "type"];
Es.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** An Input can be formatted to alert the user to an action they may perform. */
  action: c.oneOfType([c.bool, yt]),
  /** An action can appear along side an Input on the left or right. */
  actionPosition: c.oneOf(["left"]),
  /** Primary content. */
  children: c.node,
  /** Additional classes. */
  className: c.string,
  /** An Input field can show that it is disabled. */
  disabled: c.bool,
  /** An Input field can show the data contains errors. */
  error: c.bool,
  /** Take on the size of its container. */
  fluid: c.bool,
  /** An Input field can show a user is currently interacting with it. */
  focus: c.bool,
  /** Optional Icon to display inside the Input. */
  icon: c.oneOfType([c.bool, yt]),
  /** An Icon can appear inside an Input on the left or right. */
  iconPosition: c.oneOf(["left"]),
  /** Shorthand for creating the HTML Input. */
  input: yt,
  /** Format to appear on dark backgrounds. */
  inverted: c.bool,
  /** Optional Label to display along side the Input. */
  label: yt,
  /** A Label can appear outside an Input on the left or right. */
  labelPosition: c.oneOf(["left", "right", "left corner", "right corner"]),
  /** An Icon Input field can show that it is currently loading data. */
  loading: c.bool,
  /**
   * Called on change.
   *
   * @param {ChangeEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and a proposed value.
   */
  onChange: c.func,
  /** An Input can vary in size. */
  size: c.oneOf(["mini", "small", "large", "big", "huge", "massive"]),
  /** An Input can receive focus. */
  tabIndex: c.oneOfType([c.number, c.string]),
  /** Transparent Input has no background. */
  transparent: c.bool,
  /** The HTML input type. */
  type: c.string
} : {};
Es.defaultProps = {
  type: "text"
};
Es.create = Yt(Es, function(e) {
  return {
    type: e
  };
});
function xs(e) {
  var t = e.control, n = Ue(xs, e), r = He(xs, e);
  return /* @__PURE__ */ J.createElement(r, ce({}, n, {
    control: t
  }));
}
xs.handledProps = ["as", "control"];
xs.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** A FormField control prop. */
  control: En.propTypes.control
} : {};
xs.defaultProps = {
  as: En,
  control: Es
};
function Cs(e) {
  var t = e.control, n = Ue(Cs, e), r = He(Cs, e);
  return /* @__PURE__ */ J.createElement(r, ce({}, n, {
    control: t
  }));
}
Cs.handledProps = ["as", "control"];
Cs.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** A FormField control prop. */
  control: En.propTypes.control
} : {};
Cs.defaultProps = {
  as: En,
  control: Ai
};
function Os(e) {
  var t = e.control, n = e.options, r = Ue(Os, e), i = He(Os, e);
  return /* @__PURE__ */ J.createElement(i, ce({}, r, {
    control: t,
    options: n
  }));
}
Os.handledProps = ["as", "control", "options"];
Os.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** A FormField control prop. */
  control: En.propTypes.control,
  /** Array of Dropdown.Item props e.g. `{ text: '', value: '' }` */
  options: c.arrayOf(c.shape(xn.Item.propTypes)).isRequired
} : {};
Os.defaultProps = {
  as: En,
  control: Br
};
function Ss(e) {
  var t = e.control, n = Ue(Ss, e), r = He(Ss, e);
  return /* @__PURE__ */ J.createElement(r, ce({}, n, {
    control: t
  }));
}
Ss.handledProps = ["as", "control"];
Ss.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** A FormField control prop. */
  control: En.propTypes.control
} : {};
Ss.defaultProps = {
  as: En,
  control: Cd
};
var In = /* @__PURE__ */ function(e) {
  Qt(t, e);
  function t() {
    for (var r, i = arguments.length, s = new Array(i), u = 0; u < i; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handleSubmit = function(l) {
      var d = r.props.action;
      typeof d != "string" && Ie(l, "preventDefault");
      for (var p = arguments.length, h = new Array(p > 1 ? p - 1 : 0), m = 1; m < p; m++)
        h[m - 1] = arguments[m];
      Ie.apply(void 0, [r.props, "onSubmit", l, r.props].concat(h));
    }, r;
  }
  var n = t.prototype;
  return n.render = function() {
    var i = this.props, s = i.action, u = i.children, l = i.className, d = i.error, p = i.inverted, h = i.loading, m = i.reply, v = i.size, y = i.success, b = i.unstackable, _ = i.warning, E = i.widths, R = ze("ui", v, q(d, "error"), q(p, "inverted"), q(h, "loading"), q(m, "reply"), q(y, "success"), q(b, "unstackable"), q(_, "warning"), Hn(E, null, !0), "form", l), F = Ue(t, this.props), C = He(t, this.props);
    return /* @__PURE__ */ J.createElement(C, ce({}, F, {
      action: s,
      className: R,
      onSubmit: this.handleSubmit
    }), u);
  }, t;
}(Vn);
In.handledProps = ["action", "as", "children", "className", "error", "inverted", "loading", "onSubmit", "reply", "size", "success", "unstackable", "warning", "widths"];
In.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** The HTML form action */
  action: c.string,
  /** Primary content. */
  children: c.node,
  /** Additional classes. */
  className: c.string,
  /** Automatically show any error Message children. */
  error: c.bool,
  /** A form can have its color inverted for contrast. */
  inverted: c.bool,
  /** Automatically show a loading indicator. */
  loading: c.bool,
  /** The HTML form submit handler. */
  onSubmit: c.func,
  /** A comment can contain a form to reply to a comment. This may have arbitrary content. */
  reply: c.bool,
  /** A form can vary in size. */
  size: c.oneOf(Qr(lr, "medium")),
  /** Automatically show any success Message children. */
  success: c.bool,
  /** A form can prevent itself from stacking on mobile. */
  unstackable: c.bool,
  /** Automatically show any warning Message children. */
  warning: c.bool,
  /** Forms can automatically divide fields to be equal width. */
  widths: c.oneOf(["equal"])
} : {};
In.defaultProps = {
  as: "form"
};
In.Field = En;
In.Button = bs;
In.Checkbox = _s;
In.Dropdown = ws;
In.Group = Gl;
In.Input = xs;
In.Radio = Cs;
In.Select = Os;
In.TextArea = Ss;
function Ga(e) {
  var t = e.children, n = e.className, r = e.computer, i = e.color, s = e.floated, u = e.largeScreen, l = e.mobile, d = e.only, p = e.stretched, h = e.tablet, m = e.textAlign, v = e.verticalAlign, y = e.widescreen, b = e.width, _ = ze(i, q(p, "stretched"), zu(d, "only"), Mo(m), qn(s, "floated"), qi(v), Hn(r, "wide computer"), Hn(u, "wide large screen"), Hn(l, "wide mobile"), Hn(h, "wide tablet"), Hn(y, "wide widescreen"), Hn(b, "wide"), "column", n), E = Ue(Ga, e), R = He(Ga, e);
  return /* @__PURE__ */ J.createElement(R, ce({}, E, {
    className: _
  }), t);
}
Ga.handledProps = ["as", "children", "className", "color", "computer", "floated", "largeScreen", "mobile", "only", "stretched", "tablet", "textAlign", "verticalAlign", "widescreen", "width"];
Ga.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** Primary content. */
  children: c.node,
  /** Additional classes. */
  className: c.string,
  /** A grid column can be colored. */
  color: c.oneOf(na),
  /** A column can specify a width for a computer. */
  computer: At([zt(["width"]), c.oneOf(nr)]),
  /** A column can sit flush against the left or right edge of a row. */
  floated: c.oneOf(hc),
  /** A column can specify a width for a large screen device. */
  largeScreen: At([zt(["width"]), c.oneOf(nr)]),
  /** A column can specify a width for a mobile device. */
  mobile: At([zt(["width"]), c.oneOf(nr)]),
  /** A column can appear only for a specific device, or screen sizes. */
  only: Hu(I_),
  /** A column can stretch its contents to take up the entire grid or row height. */
  stretched: c.bool,
  /** A column can specify a width for a tablet device. */
  tablet: At([zt(["width"]), c.oneOf(nr)]),
  /** A column can specify its text alignment. */
  textAlign: c.oneOf(Do),
  /** A column can specify its vertical alignment to have all its columns vertically centered. */
  verticalAlign: c.oneOf(Lo),
  /** A column can specify a width for a wide screen device. */
  widescreen: At([zt(["width"]), c.oneOf(nr)]),
  /** Represents width of column. */
  width: At([zt(["computer", "largeScreen", "mobile", "tablet", "widescreen"]), c.oneOf(nr)])
} : {};
Ga.create = Yt(Ga, function(e) {
  return {
    children: e
  };
});
function Kl(e) {
  var t = e.centered, n = e.children, r = e.className, i = e.color, s = e.columns, u = e.divided, l = e.only, d = e.reversed, p = e.stretched, h = e.textAlign, m = e.verticalAlign, v = ze(i, q(t, "centered"), q(u, "divided"), q(p, "stretched"), zu(l, "only"), zu(d, "reversed"), Mo(h), qi(m), Hn(s, "column", !0), "row", r), y = Ue(Kl, e), b = He(Kl, e);
  return /* @__PURE__ */ J.createElement(b, ce({}, y, {
    className: v
  }), n);
}
Kl.handledProps = ["as", "centered", "children", "className", "color", "columns", "divided", "only", "reversed", "stretched", "textAlign", "verticalAlign"];
Kl.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** A row can have its columns centered. */
  centered: c.bool,
  /** Primary content. */
  children: c.node,
  /** Additional classes. */
  className: c.string,
  /** A grid row can be colored. */
  color: c.oneOf(na),
  /** Represents column count per line in Row. */
  columns: c.oneOf([].concat(nr, ["equal"])),
  /** A row can have dividers between its columns. */
  divided: c.bool,
  /** A row can appear only for a specific device, or screen sizes. */
  only: Hu(I_),
  /** A row can specify that its columns should reverse order at different device sizes. */
  reversed: Hu(["computer", "computer vertically", "mobile", "mobile vertically", "tablet", "tablet vertically"]),
  /** A row can stretch its contents to take up the entire column height. */
  stretched: c.bool,
  /** A row can specify its text alignment. */
  textAlign: c.oneOf(Do),
  /** A row can specify its vertical alignment to have all its columns vertically centered. */
  verticalAlign: c.oneOf(Lo)
} : {};
function So(e) {
  var t = e.celled, n = e.centered, r = e.children, i = e.className, s = e.columns, u = e.container, l = e.divided, d = e.doubling, p = e.inverted, h = e.padded, m = e.relaxed, v = e.reversed, y = e.stackable, b = e.stretched, _ = e.textAlign, E = e.verticalAlign, R = ze("ui", q(n, "centered"), q(u, "container"), q(d, "doubling"), q(p, "inverted"), q(y, "stackable"), q(b, "stretched"), tn(t, "celled"), tn(l, "divided"), tn(h, "padded"), tn(m, "relaxed"), zu(v, "reversed"), Mo(_), qi(E), Hn(s, "column", !0), "grid", i), F = Ue(So, e), C = He(So, e);
  return /* @__PURE__ */ J.createElement(C, ce({}, F, {
    className: R
  }), r);
}
So.handledProps = ["as", "celled", "centered", "children", "className", "columns", "container", "divided", "doubling", "inverted", "padded", "relaxed", "reversed", "stackable", "stretched", "textAlign", "verticalAlign"];
So.Column = Ga;
So.Row = Kl;
So.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** A grid can have rows divided into cells. */
  celled: c.oneOfType([c.bool, c.oneOf(["internally"])]),
  /** A grid can have its columns centered. */
  centered: c.bool,
  /** Primary content. */
  children: c.node,
  /** Additional classes. */
  className: c.string,
  /** Represents column count per row in Grid. */
  columns: c.oneOf([].concat(nr, ["equal"])),
  /** A grid can be combined with a container to use the available layout and alignment. */
  container: c.bool,
  /** A grid can have dividers between its columns. */
  divided: c.oneOfType([c.bool, c.oneOf(["vertically"])]),
  /** A grid can double its column width on tablet and mobile sizes. */
  doubling: c.bool,
  /** A grid's colors can be inverted. */
  inverted: c.bool,
  /** A grid can preserve its vertical and horizontal gutters on first and last columns. */
  padded: c.oneOfType([c.bool, c.oneOf(["horizontally", "vertically"])]),
  /** A grid can increase its gutters to allow for more negative space. */
  relaxed: c.oneOfType([c.bool, c.oneOf(["very"])]),
  /** A grid can specify that its columns should reverse order at different device sizes. */
  reversed: Hu(["computer", "computer vertically", "mobile", "mobile vertically", "tablet", "tablet vertically"]),
  /** A grid can have its columns stack on-top of each other after reaching mobile breakpoints. */
  stackable: c.bool,
  /** A grid can stretch its contents to take up the entire grid height. */
  stretched: c.bool,
  /** A grid can specify its text alignment. */
  textAlign: c.oneOf(Do),
  /** A grid can specify its vertical alignment to have all its columns vertically centered. */
  verticalAlign: c.oneOf(Lo)
} : {};
function To(e) {
  var t = e.children, n = e.className, r = ze(n), i = Ue(To, e), s = He(To, e);
  return /* @__PURE__ */ J.createElement(s, ce({}, i, {
    className: r
  }), t);
}
To.handledProps = ["as", "children", "className"];
To.defaultProps = {
  as: "tbody"
};
To.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** Primary content. */
  children: c.node,
  /** Additional classes. */
  className: c.string
} : {};
function Ea(e) {
  var t = e.active, n = e.children, r = e.className, i = e.collapsing, s = e.content, u = e.disabled, l = e.error, d = e.icon, p = e.negative, h = e.positive, m = e.selectable, v = e.singleLine, y = e.textAlign, b = e.verticalAlign, _ = e.warning, E = e.width, R = ze(q(t, "active"), q(i, "collapsing"), q(u, "disabled"), q(l, "error"), q(p, "negative"), q(h, "positive"), q(m, "selectable"), q(v, "single line"), q(_, "warning"), Mo(y), qi(b), Hn(E, "wide"), r), F = Ue(Ea, e), C = He(Ea, e);
  return it(n) ? /* @__PURE__ */ J.createElement(C, ce({}, F, {
    className: R
  }), We.create(d), s) : /* @__PURE__ */ J.createElement(C, ce({}, F, {
    className: R
  }), n);
}
Ea.handledProps = ["active", "as", "children", "className", "collapsing", "content", "disabled", "error", "icon", "negative", "positive", "selectable", "singleLine", "textAlign", "verticalAlign", "warning", "width"];
Ea.defaultProps = {
  as: "td"
};
Ea.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** A cell can be active or selected by a user. */
  active: c.bool,
  /** Primary content. */
  children: c.node,
  /** Additional classes. */
  className: c.string,
  /** A cell can be collapsing so that it only uses as much space as required. */
  collapsing: c.bool,
  /** Shorthand for primary content. */
  content: Ot,
  /** A cell can be disabled. */
  disabled: c.bool,
  /** A cell may call attention to an error or a negative value. */
  error: c.bool,
  /** Add an Icon by name, props object, or pass an <Icon /> */
  icon: yt,
  /** A cell may let a user know whether a value is bad. */
  negative: c.bool,
  /** A cell may let a user know whether a value is good. */
  positive: c.bool,
  /** A cell can be selectable. */
  selectable: c.bool,
  /** A cell can specify that its contents should remain on a single line and not wrap. */
  singleLine: c.bool,
  /** A table cell can adjust its text alignment. */
  textAlign: c.oneOf(Qr(Do, "justified")),
  /** A table cell can adjust its text alignment. */
  verticalAlign: c.oneOf(Lo),
  /** A cell may warn a user. */
  warning: c.bool,
  /** A table can specify the width of individual columns independently. */
  width: c.oneOf(nr)
} : {};
Ea.create = Yt(Ea, function(e) {
  return {
    content: e
  };
});
function Di(e) {
  var t = e.children, n = e.className, r = e.content, i = e.fullWidth, s = ze(q(i, "full-width"), n), u = Ue(Di, e), l = He(Di, e);
  return /* @__PURE__ */ J.createElement(l, ce({}, u, {
    className: s
  }), it(t) ? r : t);
}
Di.handledProps = ["as", "children", "className", "content", "fullWidth"];
Di.defaultProps = {
  as: "thead"
};
Di.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** Primary content. */
  children: c.node,
  /** Additional classes. */
  className: c.string,
  /** Shorthand for primary content. */
  content: Ot,
  /** A definition table can have a full width header or footer, filling in the gap left by the first column. */
  fullWidth: c.bool
} : {};
function Ws(e) {
  var t = e.as, n = Ue(Ws, e);
  return /* @__PURE__ */ J.createElement(Di, ce({}, n, {
    as: t
  }));
}
Ws.handledProps = ["as"];
Ws.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType
} : {};
Ws.defaultProps = {
  as: "tfoot"
};
function mc(e) {
  var t = e.as, n = e.className, r = e.sorted, i = ze(qn(r, "sorted"), n), s = Ue(mc, e);
  return /* @__PURE__ */ J.createElement(Ea, ce({}, s, {
    as: t,
    className: i
  }));
}
mc.handledProps = ["as", "className", "sorted"];
mc.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** Additional classes. */
  className: c.string,
  /** A header cell can be sorted in ascending or descending order. */
  sorted: c.oneOf(["ascending", "descending"])
} : {};
mc.defaultProps = {
  as: "th"
};
function Mr(e) {
  var t = e.active, n = e.cellAs, r = e.cells, i = e.children, s = e.className, u = e.disabled, l = e.error, d = e.negative, p = e.positive, h = e.textAlign, m = e.verticalAlign, v = e.warning, y = ze(q(t, "active"), q(u, "disabled"), q(l, "error"), q(d, "negative"), q(p, "positive"), q(v, "warning"), Mo(h), qi(m), s), b = Ue(Mr, e), _ = He(Mr, e);
  return it(i) ? /* @__PURE__ */ J.createElement(_, ce({}, b, {
    className: y
  }), _n(r, function(E) {
    return Ea.create(E, {
      defaultProps: {
        as: n
      }
    });
  })) : /* @__PURE__ */ J.createElement(_, ce({}, b, {
    className: y
  }), i);
}
Mr.handledProps = ["active", "as", "cellAs", "cells", "children", "className", "disabled", "error", "negative", "positive", "textAlign", "verticalAlign", "warning"];
Mr.defaultProps = {
  as: "tr",
  cellAs: "td"
};
Mr.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** A row can be active or selected by a user. */
  active: c.bool,
  /** An element type to render as (string or function). */
  cellAs: c.elementType,
  /** Shorthand array of props for TableCell. */
  cells: pc,
  /** Primary content. */
  children: c.node,
  /** Additional classes. */
  className: c.string,
  /** A row can be disabled. */
  disabled: c.bool,
  /** A row may call attention to an error or a negative value. */
  error: c.bool,
  /** A row may let a user know whether a value is bad. */
  negative: c.bool,
  /** A row may let a user know whether a value is good. */
  positive: c.bool,
  /** A table row can adjust its text alignment. */
  textAlign: c.oneOf(Qr(Do, "justified")),
  /** A table row can adjust its vertical alignment. */
  verticalAlign: c.oneOf(Lo),
  /** A row may warn a user. */
  warning: c.bool
} : {};
Mr.create = Yt(Mr, function(e) {
  return {
    cells: e
  };
});
function vt(e) {
  var t = e.attached, n = e.basic, r = e.celled, i = e.children, s = e.className, u = e.collapsing, l = e.color, d = e.columns, p = e.compact, h = e.definition, m = e.fixed, v = e.footerRow, y = e.headerRow, b = e.headerRows, _ = e.inverted, E = e.padded, R = e.renderBodyRow, F = e.selectable, C = e.singleLine, I = e.size, O = e.sortable, S = e.stackable, x = e.striped, P = e.structured, k = e.tableData, B = e.textAlign, Y = e.unstackable, ne = e.verticalAlign, z = ze("ui", l, I, q(r, "celled"), q(u, "collapsing"), q(h, "definition"), q(m, "fixed"), q(_, "inverted"), q(F, "selectable"), q(C, "single line"), q(O, "sortable"), q(S, "stackable"), q(x, "striped"), q(P, "structured"), q(Y, "unstackable"), tn(t, "attached"), tn(n, "basic"), tn(p, "compact"), tn(E, "padded"), Mo(B), qi(ne), Hn(d, "column"), "table", s), re = Ue(vt, e), pe = He(vt, e);
  if (!it(i))
    return /* @__PURE__ */ J.createElement(pe, ce({}, re, {
      className: z
    }), i);
  var ve = y || b, Oe = {
    defaultProps: {
      cellAs: "th"
    }
  }, he = ve && /* @__PURE__ */ J.createElement(Di, null, Mr.create(y, Oe), _n(b, function(be) {
    return Mr.create(be, Oe);
  }));
  return /* @__PURE__ */ J.createElement(pe, ce({}, re, {
    className: z
  }), he, /* @__PURE__ */ J.createElement(To, null, R && _n(k, function(be, ee) {
    return Mr.create(R(be, ee));
  })), v && /* @__PURE__ */ J.createElement(Ws, null, Mr.create(v)));
}
vt.handledProps = ["as", "attached", "basic", "celled", "children", "className", "collapsing", "color", "columns", "compact", "definition", "fixed", "footerRow", "headerRow", "headerRows", "inverted", "padded", "renderBodyRow", "selectable", "singleLine", "size", "sortable", "stackable", "striped", "structured", "tableData", "textAlign", "unstackable", "verticalAlign"];
vt.defaultProps = {
  as: "table"
};
vt.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** Attach table to other content */
  attached: c.oneOfType([c.bool, c.oneOf(["top", "bottom"])]),
  /** A table can reduce its complexity to increase readability. */
  basic: c.oneOfType([c.oneOf(["very"]), c.bool]),
  /** A table may be divided into individual cells. */
  celled: c.bool,
  /** Primary content. */
  children: c.node,
  /** Additional classes. */
  className: c.string,
  /** A table can be collapsing, taking up only as much space as its rows. */
  collapsing: c.bool,
  /** A table can be given a color to distinguish it from other tables. */
  color: c.oneOf(na),
  /** A table can specify its column count to divide its content evenly. */
  columns: c.oneOf(nr),
  /** A table may sometimes need to be more compact to make more rows visible at a time. */
  compact: c.oneOfType([c.bool, c.oneOf(["very"])]),
  /** A table may be formatted to emphasize a first column that defines a rows content. */
  definition: c.bool,
  /**
   * A table can use fixed a special faster form of table rendering that does not resize table cells based on content
   */
  fixed: c.bool,
  /** Shorthand for a TableRow to be placed within Table.Footer. */
  footerRow: yt,
  /** Shorthand for a TableRow to be placed within Table.Header. */
  headerRow: At([zt(["headerRows"]), yt]),
  /** Shorthand for multiple TableRows to be placed within Table.Header. */
  headerRows: At([zt(["headerRow"]), pc]),
  /** A table's colors can be inverted. */
  inverted: c.bool,
  /** A table may sometimes need to be more padded for legibility. */
  padded: c.oneOfType([c.bool, c.oneOf(["very"])]),
  /**
   * Mapped over `tableData` and should return shorthand for each Table.Row to be placed within Table.Body.
   *
   * @param {*} data - An element in the `tableData` array.
   * @param {number} index - The index of the current element in `tableData`.
   * @returns {*} Shorthand for a Table.Row.
   */
  renderBodyRow: At([zt(["children"]), wi(["tableData"]), c.func]),
  /** A table can have its rows appear selectable. */
  selectable: c.bool,
  /** A table can specify that its cell contents should remain on a single line and not wrap. */
  singleLine: c.bool,
  /** A table can also be small or large. */
  size: c.oneOf(Qr(lr, "mini", "tiny", "medium", "big", "huge", "massive")),
  /** A table may allow a user to sort contents by clicking on a table header. */
  sortable: c.bool,
  /** A table can specify how it stacks table content responsively. */
  stackable: c.bool,
  /** A table can stripe alternate rows of content with a darker color to increase contrast. */
  striped: c.bool,
  /** A table can be formatted to display complex structured data. */
  structured: c.bool,
  /** Data to be passed to the renderBodyRow function. */
  tableData: At([zt(["children"]), wi(["renderBodyRow"]), c.array]),
  /** A table can adjust its text alignment. */
  textAlign: c.oneOf(Qr(Do, "justified")),
  /** A table can specify how it stacks table content responsively. */
  unstackable: c.bool,
  /** A table can adjust its text alignment. */
  verticalAlign: c.oneOf(Lo)
} : {};
vt.Body = To;
vt.Cell = Ea;
vt.Footer = Ws;
vt.Header = Di;
vt.HeaderCell = mc;
vt.Row = Mr;
function Li(e) {
  var t = e.children, n = e.className, r = e.content, i = ze("sub header", n), s = Ue(Li, e), u = He(Li, e);
  return /* @__PURE__ */ J.createElement(u, ce({}, s, {
    className: i
  }), it(t) ? r : t);
}
Li.handledProps = ["as", "children", "className", "content"];
Li.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** Primary content. */
  children: c.node,
  /** Additional classes. */
  className: c.string,
  /** Shorthand for primary content. */
  content: Ot
} : {};
Li.create = Yt(Li, function(e) {
  return {
    content: e
  };
});
function Ts(e) {
  var t = e.children, n = e.className, r = e.content, i = ze("content", n), s = Ue(Ts, e), u = He(Ts, e);
  return /* @__PURE__ */ J.createElement(u, ce({}, s, {
    className: i
  }), it(t) ? r : t);
}
Ts.handledProps = ["as", "children", "className", "content"];
Ts.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** Primary content. */
  children: c.node,
  /** Additional classes. */
  className: c.string,
  /** Shorthand for primary content. */
  content: Ot
} : {};
function Yn(e) {
  var t = e.attached, n = e.block, r = e.children, i = e.className, s = e.color, u = e.content, l = e.disabled, d = e.dividing, p = e.floated, h = e.icon, m = e.image, v = e.inverted, y = e.size, b = e.sub, _ = e.subheader, E = e.textAlign, R = ze("ui", s, y, q(n, "block"), q(l, "disabled"), q(d, "dividing"), qn(p, "floated"), q(h === !0, "icon"), q(m === !0, "image"), q(v, "inverted"), q(b, "sub"), tn(t, "attached"), Mo(E), "header", i), F = Ue(Yn, e), C = He(Yn, e);
  if (!it(r))
    return /* @__PURE__ */ J.createElement(C, ce({}, F, {
      className: R
    }), r);
  var I = We.create(h, {
    autoGenerateKey: !1
  }), O = br.create(m, {
    autoGenerateKey: !1
  }), S = Li.create(_, {
    autoGenerateKey: !1
  });
  return I || O ? /* @__PURE__ */ J.createElement(C, ce({}, F, {
    className: R
  }), I || O, (u || S) && /* @__PURE__ */ J.createElement(Ts, null, u, S)) : /* @__PURE__ */ J.createElement(C, ce({}, F, {
    className: R
  }), u, S);
}
Yn.handledProps = ["as", "attached", "block", "children", "className", "color", "content", "disabled", "dividing", "floated", "icon", "image", "inverted", "size", "sub", "subheader", "textAlign"];
Yn.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** Attach header  to other content, like a segment. */
  attached: c.oneOfType([c.bool, c.oneOf(["top", "bottom"])]),
  /** Format header to appear inside a content block. */
  block: c.bool,
  /** Primary content. */
  children: c.node,
  /** Additional classes. */
  className: c.string,
  /** Color of the header. */
  color: c.oneOf(na),
  /** Shorthand for primary content. */
  content: Ot,
  /** Show that the header is inactive. */
  disabled: c.bool,
  /** Divide header from the content below it. */
  dividing: c.bool,
  /** Header can sit to the left or right of other content. */
  floated: c.oneOf(hc),
  /** Add an icon by icon name or pass an Icon. */
  icon: At([zt(["image"]), c.oneOfType([c.bool, yt])]),
  /** Add an image by img src or pass an Image. */
  image: At([zt(["icon"]), c.oneOfType([c.bool, yt])]),
  /** Inverts the color of the header for dark backgrounds. */
  inverted: c.bool,
  /** Content headings are sized with em and are based on the font-size of their container. */
  size: c.oneOf(Qr(lr, "big", "massive", "mini")),
  /** Headers may be formatted to label smaller or de-emphasized content. */
  sub: c.bool,
  /** Shorthand for Header.Subheader. */
  subheader: yt,
  /** Align header content. */
  textAlign: c.oneOf(Do)
} : {};
Yn.Content = Ts;
Yn.Subheader = Li;
function Zl(e) {
  var t = e.active, n = e.children, r = e.className, i = e.content, s = e.disabled, u = e.indeterminate, l = e.inline, d = e.inverted, p = e.size, h = ze("ui", p, q(t, "active"), q(s, "disabled"), q(u, "indeterminate"), q(d, "inverted"), q(n || i, "text"), tn(l, "inline"), "loader", r), m = Ue(Zl, e), v = He(Zl, e);
  return /* @__PURE__ */ J.createElement(v, ce({}, m, {
    className: h
  }), it(n) ? i : n);
}
Zl.handledProps = ["active", "as", "children", "className", "content", "disabled", "indeterminate", "inline", "inverted", "size"];
Zl.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** A loader can be active or visible. */
  active: c.bool,
  /** Primary content. */
  children: c.node,
  /** Additional classes. */
  className: c.string,
  /** Shorthand for primary content. */
  content: Ot,
  /** A loader can be disabled or hidden. */
  disabled: c.bool,
  /** A loader can show it's unsure of how long a task will take. */
  indeterminate: c.bool,
  /** Loaders can appear inline with content. */
  inline: c.oneOfType([c.bool, c.oneOf(["centered"])]),
  /** Loaders can have their colors inverted. */
  inverted: c.bool,
  /** Loaders can have different sizes. */
  size: c.oneOf(lr)
} : {};
function v3(e) {
  return $r(e) && e.nodeType === 1 && !wd(e);
}
var y3 = L.createContext();
L.createContext();
var b3 = function(t) {
  return Array.isArray(t) ? t[0] : t;
}, _3 = function(t) {
  if (typeof t == "function") {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
      r[i - 1] = arguments[i];
    return t.apply(void 0, r);
  }
}, w3 = function(t, n) {
  if (typeof t == "function")
    return _3(t, n);
  t != null && (t.current = n);
}, Jb = function(t) {
  return t.reduce(function(n, r) {
    var i = r[0], s = r[1];
    return n[i] = s, n;
  }, {});
}, e0 = typeof window < "u" && window.document && window.document.createElement ? L.useLayoutEffect : L.useEffect, ar = "top", Wr = "bottom", Ur = "right", ir = "left", fm = "auto", gc = [ar, Wr, Ur, ir], Ps = "start", Xl = "end", E3 = "clippingParents", ew = "viewport", pl = "popper", x3 = "reference", t0 = /* @__PURE__ */ gc.reduce(function(e, t) {
  return e.concat([t + "-" + Ps, t + "-" + Xl]);
}, []), tw = /* @__PURE__ */ [].concat(gc, [fm]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Ps, t + "-" + Xl]);
}, []), C3 = "beforeRead", O3 = "read", S3 = "afterRead", T3 = "beforeMain", P3 = "main", k3 = "afterMain", N3 = "beforeWrite", I3 = "write", A3 = "afterWrite", R3 = [C3, O3, S3, T3, P3, k3, N3, I3, A3];
function xa(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function _r(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Po(e) {
  var t = _r(e).Element;
  return e instanceof t || e instanceof Element;
}
function Lr(e) {
  var t = _r(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function pm(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = _r(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function M3(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, i = t.attributes[n] || {}, s = t.elements[n];
    !Lr(s) || !xa(s) || (Object.assign(s.style, r), Object.keys(i).forEach(function(u) {
      var l = i[u];
      l === !1 ? s.removeAttribute(u) : s.setAttribute(u, l === !0 ? "" : l);
    }));
  });
}
function D3(e) {
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
      var i = t.elements[r], s = t.attributes[r] || {}, u = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), l = u.reduce(function(d, p) {
        return d[p] = "", d;
      }, {});
      !Lr(i) || !xa(i) || (Object.assign(i.style, l), Object.keys(s).forEach(function(d) {
        i.removeAttribute(d);
      }));
    });
  };
}
const L3 = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: M3,
  effect: D3,
  requires: ["computeStyles"]
};
function _a(e) {
  return e.split("-")[0];
}
var go = Math.max, Vu = Math.min, ks = Math.round;
function dh() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function nw() {
  return !/^((?!chrome|android).)*safari/i.test(dh());
}
function Ns(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), i = 1, s = 1;
  t && Lr(e) && (i = e.offsetWidth > 0 && ks(r.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && ks(r.height) / e.offsetHeight || 1);
  var u = Po(e) ? _r(e) : window, l = u.visualViewport, d = !nw() && n, p = (r.left + (d && l ? l.offsetLeft : 0)) / i, h = (r.top + (d && l ? l.offsetTop : 0)) / s, m = r.width / i, v = r.height / s;
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
function hm(e) {
  var t = Ns(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function rw(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && pm(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Ka(e) {
  return _r(e).getComputedStyle(e);
}
function F3(e) {
  return ["table", "td", "th"].indexOf(xa(e)) >= 0;
}
function Vi(e) {
  return ((Po(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Od(e) {
  return xa(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (pm(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Vi(e)
  );
}
function n0(e) {
  return !Lr(e) || // https://github.com/popperjs/popper-core/issues/837
  Ka(e).position === "fixed" ? null : e.offsetParent;
}
function $3(e) {
  var t = /firefox/i.test(dh()), n = /Trident/i.test(dh());
  if (n && Lr(e)) {
    var r = Ka(e);
    if (r.position === "fixed")
      return null;
  }
  var i = Od(e);
  for (pm(i) && (i = i.host); Lr(i) && ["html", "body"].indexOf(xa(i)) < 0; ) {
    var s = Ka(i);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function vc(e) {
  for (var t = _r(e), n = n0(e); n && F3(n) && Ka(n).position === "static"; )
    n = n0(n);
  return n && (xa(n) === "html" || xa(n) === "body" && Ka(n).position === "static") ? t : n || $3(e) || t;
}
function mm(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Tl(e, t, n) {
  return go(e, Vu(t, n));
}
function B3(e, t, n) {
  var r = Tl(e, t, n);
  return r > n ? n : r;
}
function aw() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function iw(e) {
  return Object.assign({}, aw(), e);
}
function ow(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var W3 = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, iw(typeof t != "number" ? t : ow(t, gc));
};
function U3(e) {
  var t, n = e.state, r = e.name, i = e.options, s = n.elements.arrow, u = n.modifiersData.popperOffsets, l = _a(n.placement), d = mm(l), p = [ir, Ur].indexOf(l) >= 0, h = p ? "height" : "width";
  if (!(!s || !u)) {
    var m = W3(i.padding, n), v = hm(s), y = d === "y" ? ar : ir, b = d === "y" ? Wr : Ur, _ = n.rects.reference[h] + n.rects.reference[d] - u[d] - n.rects.popper[h], E = u[d] - n.rects.reference[d], R = vc(s), F = R ? d === "y" ? R.clientHeight || 0 : R.clientWidth || 0 : 0, C = _ / 2 - E / 2, I = m[y], O = F - v[h] - m[b], S = F / 2 - v[h] / 2 + C, x = Tl(I, S, O), P = d;
    n.modifiersData[r] = (t = {}, t[P] = x, t.centerOffset = x - S, t);
  }
}
function j3(e) {
  var t = e.state, n = e.options, r = n.element, i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || rw(t.elements.popper, i) && (t.elements.arrow = i));
}
const z3 = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: U3,
  effect: j3,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Is(e) {
  return e.split("-")[1];
}
var H3 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Y3(e, t) {
  var n = e.x, r = e.y, i = t.devicePixelRatio || 1;
  return {
    x: ks(n * i) / i || 0,
    y: ks(r * i) / i || 0
  };
}
function r0(e) {
  var t, n = e.popper, r = e.popperRect, i = e.placement, s = e.variation, u = e.offsets, l = e.position, d = e.gpuAcceleration, p = e.adaptive, h = e.roundOffsets, m = e.isFixed, v = u.x, y = v === void 0 ? 0 : v, b = u.y, _ = b === void 0 ? 0 : b, E = typeof h == "function" ? h({
    x: y,
    y: _
  }) : {
    x: y,
    y: _
  };
  y = E.x, _ = E.y;
  var R = u.hasOwnProperty("x"), F = u.hasOwnProperty("y"), C = ir, I = ar, O = window;
  if (p) {
    var S = vc(n), x = "clientHeight", P = "clientWidth";
    if (S === _r(n) && (S = Vi(n), Ka(S).position !== "static" && l === "absolute" && (x = "scrollHeight", P = "scrollWidth")), S = S, i === ar || (i === ir || i === Ur) && s === Xl) {
      I = Wr;
      var k = m && S === O && O.visualViewport ? O.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        S[x]
      );
      _ -= k - r.height, _ *= d ? 1 : -1;
    }
    if (i === ir || (i === ar || i === Wr) && s === Xl) {
      C = Ur;
      var B = m && S === O && O.visualViewport ? O.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        S[P]
      );
      y -= B - r.width, y *= d ? 1 : -1;
    }
  }
  var Y = Object.assign({
    position: l
  }, p && H3), ne = h === !0 ? Y3({
    x: y,
    y: _
  }, _r(n)) : {
    x: y,
    y: _
  };
  if (y = ne.x, _ = ne.y, d) {
    var z;
    return Object.assign({}, Y, (z = {}, z[I] = F ? "0" : "", z[C] = R ? "0" : "", z.transform = (O.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + _ + "px)" : "translate3d(" + y + "px, " + _ + "px, 0)", z));
  }
  return Object.assign({}, Y, (t = {}, t[I] = F ? _ + "px" : "", t[C] = R ? y + "px" : "", t.transform = "", t));
}
function q3(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, s = n.adaptive, u = s === void 0 ? !0 : s, l = n.roundOffsets, d = l === void 0 ? !0 : l, p = {
    placement: _a(t.placement),
    variation: Is(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, r0(Object.assign({}, p, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: u,
    roundOffsets: d
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, r0(Object.assign({}, p, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: d
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const V3 = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: q3,
  data: {}
};
var yu = {
  passive: !0
};
function G3(e) {
  var t = e.state, n = e.instance, r = e.options, i = r.scroll, s = i === void 0 ? !0 : i, u = r.resize, l = u === void 0 ? !0 : u, d = _r(t.elements.popper), p = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && p.forEach(function(h) {
    h.addEventListener("scroll", n.update, yu);
  }), l && d.addEventListener("resize", n.update, yu), function() {
    s && p.forEach(function(h) {
      h.removeEventListener("scroll", n.update, yu);
    }), l && d.removeEventListener("resize", n.update, yu);
  };
}
const K3 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: G3,
  data: {}
};
var Z3 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Pu(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Z3[t];
  });
}
var X3 = {
  start: "end",
  end: "start"
};
function a0(e) {
  return e.replace(/start|end/g, function(t) {
    return X3[t];
  });
}
function gm(e) {
  var t = _r(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function vm(e) {
  return Ns(Vi(e)).left + gm(e).scrollLeft;
}
function Q3(e, t) {
  var n = _r(e), r = Vi(e), i = n.visualViewport, s = r.clientWidth, u = r.clientHeight, l = 0, d = 0;
  if (i) {
    s = i.width, u = i.height;
    var p = nw();
    (p || !p && t === "fixed") && (l = i.offsetLeft, d = i.offsetTop);
  }
  return {
    width: s,
    height: u,
    x: l + vm(e),
    y: d
  };
}
function J3(e) {
  var t, n = Vi(e), r = gm(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, s = go(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), u = go(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), l = -r.scrollLeft + vm(e), d = -r.scrollTop;
  return Ka(i || n).direction === "rtl" && (l += go(n.clientWidth, i ? i.clientWidth : 0) - s), {
    width: s,
    height: u,
    x: l,
    y: d
  };
}
function ym(e) {
  var t = Ka(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function sw(e) {
  return ["html", "body", "#document"].indexOf(xa(e)) >= 0 ? e.ownerDocument.body : Lr(e) && ym(e) ? e : sw(Od(e));
}
function Pl(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = sw(e), i = r === ((n = e.ownerDocument) == null ? void 0 : n.body), s = _r(r), u = i ? [s].concat(s.visualViewport || [], ym(r) ? r : []) : r, l = t.concat(u);
  return i ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(Pl(Od(u)))
  );
}
function fh(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function e$(e, t) {
  var n = Ns(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function i0(e, t, n) {
  return t === ew ? fh(Q3(e, n)) : Po(t) ? e$(t, n) : fh(J3(Vi(e)));
}
function t$(e) {
  var t = Pl(Od(e)), n = ["absolute", "fixed"].indexOf(Ka(e).position) >= 0, r = n && Lr(e) ? vc(e) : e;
  return Po(r) ? t.filter(function(i) {
    return Po(i) && rw(i, r) && xa(i) !== "body";
  }) : [];
}
function n$(e, t, n, r) {
  var i = t === "clippingParents" ? t$(e) : [].concat(t), s = [].concat(i, [n]), u = s[0], l = s.reduce(function(d, p) {
    var h = i0(e, p, r);
    return d.top = go(h.top, d.top), d.right = Vu(h.right, d.right), d.bottom = Vu(h.bottom, d.bottom), d.left = go(h.left, d.left), d;
  }, i0(e, u, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function lw(e) {
  var t = e.reference, n = e.element, r = e.placement, i = r ? _a(r) : null, s = r ? Is(r) : null, u = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, d;
  switch (i) {
    case ar:
      d = {
        x: u,
        y: t.y - n.height
      };
      break;
    case Wr:
      d = {
        x: u,
        y: t.y + t.height
      };
      break;
    case Ur:
      d = {
        x: t.x + t.width,
        y: l
      };
      break;
    case ir:
      d = {
        x: t.x - n.width,
        y: l
      };
      break;
    default:
      d = {
        x: t.x,
        y: t.y
      };
  }
  var p = i ? mm(i) : null;
  if (p != null) {
    var h = p === "y" ? "height" : "width";
    switch (s) {
      case Ps:
        d[p] = d[p] - (t[h] / 2 - n[h] / 2);
        break;
      case Xl:
        d[p] = d[p] + (t[h] / 2 - n[h] / 2);
        break;
    }
  }
  return d;
}
function Ql(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = r === void 0 ? e.placement : r, s = n.strategy, u = s === void 0 ? e.strategy : s, l = n.boundary, d = l === void 0 ? E3 : l, p = n.rootBoundary, h = p === void 0 ? ew : p, m = n.elementContext, v = m === void 0 ? pl : m, y = n.altBoundary, b = y === void 0 ? !1 : y, _ = n.padding, E = _ === void 0 ? 0 : _, R = iw(typeof E != "number" ? E : ow(E, gc)), F = v === pl ? x3 : pl, C = e.rects.popper, I = e.elements[b ? F : v], O = n$(Po(I) ? I : I.contextElement || Vi(e.elements.popper), d, h, u), S = Ns(e.elements.reference), x = lw({
    reference: S,
    element: C,
    placement: i
  }), P = fh(Object.assign({}, C, x)), k = v === pl ? P : S, B = {
    top: O.top - k.top + R.top,
    bottom: k.bottom - O.bottom + R.bottom,
    left: O.left - k.left + R.left,
    right: k.right - O.right + R.right
  }, Y = e.modifiersData.offset;
  if (v === pl && Y) {
    var ne = Y[i];
    Object.keys(B).forEach(function(z) {
      var re = [Ur, Wr].indexOf(z) >= 0 ? 1 : -1, pe = [ar, Wr].indexOf(z) >= 0 ? "y" : "x";
      B[z] += ne[pe] * re;
    });
  }
  return B;
}
function r$(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = n.boundary, s = n.rootBoundary, u = n.padding, l = n.flipVariations, d = n.allowedAutoPlacements, p = d === void 0 ? tw : d, h = Is(r), m = h ? l ? t0 : t0.filter(function(b) {
    return Is(b) === h;
  }) : gc, v = m.filter(function(b) {
    return p.indexOf(b) >= 0;
  });
  v.length === 0 && (v = m);
  var y = v.reduce(function(b, _) {
    return b[_] = Ql(e, {
      placement: _,
      boundary: i,
      rootBoundary: s,
      padding: u
    })[_a(_)], b;
  }, {});
  return Object.keys(y).sort(function(b, _) {
    return y[b] - y[_];
  });
}
function a$(e) {
  if (_a(e) === fm)
    return [];
  var t = Pu(e);
  return [a0(e), t, a0(t)];
}
function i$(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var i = n.mainAxis, s = i === void 0 ? !0 : i, u = n.altAxis, l = u === void 0 ? !0 : u, d = n.fallbackPlacements, p = n.padding, h = n.boundary, m = n.rootBoundary, v = n.altBoundary, y = n.flipVariations, b = y === void 0 ? !0 : y, _ = n.allowedAutoPlacements, E = t.options.placement, R = _a(E), F = R === E, C = d || (F || !b ? [Pu(E)] : a$(E)), I = [E].concat(C).reduce(function(Se, Te) {
      return Se.concat(_a(Te) === fm ? r$(t, {
        placement: Te,
        boundary: h,
        rootBoundary: m,
        padding: p,
        flipVariations: b,
        allowedAutoPlacements: _
      }) : Te);
    }, []), O = t.rects.reference, S = t.rects.popper, x = /* @__PURE__ */ new Map(), P = !0, k = I[0], B = 0; B < I.length; B++) {
      var Y = I[B], ne = _a(Y), z = Is(Y) === Ps, re = [ar, Wr].indexOf(ne) >= 0, pe = re ? "width" : "height", ve = Ql(t, {
        placement: Y,
        boundary: h,
        rootBoundary: m,
        altBoundary: v,
        padding: p
      }), Oe = re ? z ? Ur : ir : z ? Wr : ar;
      O[pe] > S[pe] && (Oe = Pu(Oe));
      var he = Pu(Oe), be = [];
      if (s && be.push(ve[ne] <= 0), l && be.push(ve[Oe] <= 0, ve[he] <= 0), be.every(function(Se) {
        return Se;
      })) {
        k = Y, P = !1;
        break;
      }
      x.set(Y, be);
    }
    if (P)
      for (var ee = b ? 3 : 1, ie = function(Te) {
        var ge = I.find(function(Pe) {
          var Me = x.get(Pe);
          if (Me)
            return Me.slice(0, Te).every(function(U) {
              return U;
            });
        });
        if (ge)
          return k = ge, "break";
      }, se = ee; se > 0; se--) {
        var Ce = ie(se);
        if (Ce === "break") break;
      }
    t.placement !== k && (t.modifiersData[r]._skip = !0, t.placement = k, t.reset = !0);
  }
}
const o$ = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: i$,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function o0(e, t, n) {
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
function s0(e) {
  return [ar, Ur, Wr, ir].some(function(t) {
    return e[t] >= 0;
  });
}
function s$(e) {
  var t = e.state, n = e.name, r = t.rects.reference, i = t.rects.popper, s = t.modifiersData.preventOverflow, u = Ql(t, {
    elementContext: "reference"
  }), l = Ql(t, {
    altBoundary: !0
  }), d = o0(u, r), p = o0(l, i, s), h = s0(d), m = s0(p);
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
const l$ = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: s$
};
function c$(e, t, n) {
  var r = _a(e), i = [ir, ar].indexOf(r) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, u = s[0], l = s[1];
  return u = u || 0, l = (l || 0) * i, [ir, Ur].indexOf(r) >= 0 ? {
    x: l,
    y: u
  } : {
    x: u,
    y: l
  };
}
function u$(e) {
  var t = e.state, n = e.options, r = e.name, i = n.offset, s = i === void 0 ? [0, 0] : i, u = tw.reduce(function(h, m) {
    return h[m] = c$(m, t.rects, s), h;
  }, {}), l = u[t.placement], d = l.x, p = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += d, t.modifiersData.popperOffsets.y += p), t.modifiersData[r] = u;
}
const d$ = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: u$
};
function f$(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = lw({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const p$ = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: f$,
  data: {}
};
function h$(e) {
  return e === "x" ? "y" : "x";
}
function m$(e) {
  var t = e.state, n = e.options, r = e.name, i = n.mainAxis, s = i === void 0 ? !0 : i, u = n.altAxis, l = u === void 0 ? !1 : u, d = n.boundary, p = n.rootBoundary, h = n.altBoundary, m = n.padding, v = n.tether, y = v === void 0 ? !0 : v, b = n.tetherOffset, _ = b === void 0 ? 0 : b, E = Ql(t, {
    boundary: d,
    rootBoundary: p,
    padding: m,
    altBoundary: h
  }), R = _a(t.placement), F = Is(t.placement), C = !F, I = mm(R), O = h$(I), S = t.modifiersData.popperOffsets, x = t.rects.reference, P = t.rects.popper, k = typeof _ == "function" ? _(Object.assign({}, t.rects, {
    placement: t.placement
  })) : _, B = typeof k == "number" ? {
    mainAxis: k,
    altAxis: k
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, k), Y = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, ne = {
    x: 0,
    y: 0
  };
  if (S) {
    if (s) {
      var z, re = I === "y" ? ar : ir, pe = I === "y" ? Wr : Ur, ve = I === "y" ? "height" : "width", Oe = S[I], he = Oe + E[re], be = Oe - E[pe], ee = y ? -P[ve] / 2 : 0, ie = F === Ps ? x[ve] : P[ve], se = F === Ps ? -P[ve] : -x[ve], Ce = t.elements.arrow, Se = y && Ce ? hm(Ce) : {
        width: 0,
        height: 0
      }, Te = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : aw(), ge = Te[re], Pe = Te[pe], Me = Tl(0, x[ve], Se[ve]), U = C ? x[ve] / 2 - ee - Me - ge - B.mainAxis : ie - Me - ge - B.mainAxis, j = C ? -x[ve] / 2 + ee + Me + Pe + B.mainAxis : se + Me + Pe + B.mainAxis, $ = t.elements.arrow && vc(t.elements.arrow), D = $ ? I === "y" ? $.clientTop || 0 : $.clientLeft || 0 : 0, G = (z = Y == null ? void 0 : Y[I]) != null ? z : 0, Z = Oe + U - G - D, le = Oe + j - G, fe = Tl(y ? Vu(he, Z) : he, Oe, y ? go(be, le) : be);
      S[I] = fe, ne[I] = fe - Oe;
    }
    if (l) {
      var Q, ue = I === "x" ? ar : ir, te = I === "x" ? Wr : Ur, V = S[O], ae = O === "y" ? "height" : "width", Ee = V + E[ue], Le = V - E[te], Fe = [ar, ir].indexOf(R) !== -1, ot = (Q = Y == null ? void 0 : Y[O]) != null ? Q : 0, qe = Fe ? Ee : V - x[ae] - P[ae] - ot + B.altAxis, Et = Fe ? V + x[ae] + P[ae] - ot - B.altAxis : Le, nt = y && Fe ? B3(qe, V, Et) : Tl(y ? qe : Ee, V, y ? Et : Le);
      S[O] = nt, ne[O] = nt - V;
    }
    t.modifiersData[r] = ne;
  }
}
const g$ = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: m$,
  requiresIfExists: ["offset"]
};
function v$(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function y$(e) {
  return e === _r(e) || !Lr(e) ? gm(e) : v$(e);
}
function b$(e) {
  var t = e.getBoundingClientRect(), n = ks(t.width) / e.offsetWidth || 1, r = ks(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function _$(e, t, n) {
  n === void 0 && (n = !1);
  var r = Lr(t), i = Lr(t) && b$(t), s = Vi(t), u = Ns(e, i, n), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((xa(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  ym(s)) && (l = y$(t)), Lr(t) ? (d = Ns(t, !0), d.x += t.clientLeft, d.y += t.clientTop) : s && (d.x = vm(s))), {
    x: u.left + l.scrollLeft - d.x,
    y: u.top + l.scrollTop - d.y,
    width: u.width,
    height: u.height
  };
}
function w$(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(s) {
    t.set(s.name, s);
  });
  function i(s) {
    n.add(s.name);
    var u = [].concat(s.requires || [], s.requiresIfExists || []);
    u.forEach(function(l) {
      if (!n.has(l)) {
        var d = t.get(l);
        d && i(d);
      }
    }), r.push(s);
  }
  return e.forEach(function(s) {
    n.has(s.name) || i(s);
  }), r;
}
function E$(e) {
  var t = w$(e);
  return R3.reduce(function(n, r) {
    return n.concat(t.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function x$(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function C$(e) {
  var t = e.reduce(function(n, r) {
    var i = n[r.name];
    return n[r.name] = i ? Object.assign({}, i, r, {
      options: Object.assign({}, i.options, r.options),
      data: Object.assign({}, i.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var l0 = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function c0() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function O$(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, i = t.defaultOptions, s = i === void 0 ? l0 : i;
  return function(l, d, p) {
    p === void 0 && (p = s);
    var h = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, l0, s),
      modifiersData: {},
      elements: {
        reference: l,
        popper: d
      },
      attributes: {},
      styles: {}
    }, m = [], v = !1, y = {
      state: h,
      setOptions: function(R) {
        var F = typeof R == "function" ? R(h.options) : R;
        _(), h.options = Object.assign({}, s, h.options, F), h.scrollParents = {
          reference: Po(l) ? Pl(l) : l.contextElement ? Pl(l.contextElement) : [],
          popper: Pl(d)
        };
        var C = E$(C$([].concat(r, h.options.modifiers)));
        return h.orderedModifiers = C.filter(function(I) {
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
          var R = h.elements, F = R.reference, C = R.popper;
          if (c0(F, C)) {
            h.rects = {
              reference: _$(F, vc(C), h.options.strategy === "fixed"),
              popper: hm(C)
            }, h.reset = !1, h.placement = h.options.placement, h.orderedModifiers.forEach(function(B) {
              return h.modifiersData[B.name] = Object.assign({}, B.data);
            });
            for (var I = 0; I < h.orderedModifiers.length; I++) {
              if (h.reset === !0) {
                h.reset = !1, I = -1;
                continue;
              }
              var O = h.orderedModifiers[I], S = O.fn, x = O.options, P = x === void 0 ? {} : x, k = O.name;
              typeof S == "function" && (h = S({
                state: h,
                options: P,
                name: k,
                instance: y
              }) || h);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: x$(function() {
        return new Promise(function(E) {
          y.forceUpdate(), E(h);
        });
      }),
      destroy: function() {
        _(), v = !0;
      }
    };
    if (!c0(l, d))
      return y;
    y.setOptions(p).then(function(E) {
      !v && p.onFirstUpdate && p.onFirstUpdate(E);
    });
    function b() {
      h.orderedModifiers.forEach(function(E) {
        var R = E.name, F = E.options, C = F === void 0 ? {} : F, I = E.effect;
        if (typeof I == "function") {
          var O = I({
            state: h,
            name: R,
            instance: y,
            options: C
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
var S$ = [K3, p$, V3, L3, d$, o$, g$, z3, l$], T$ = /* @__PURE__ */ O$({
  defaultModifiers: S$
}), P$ = typeof Element < "u", k$ = typeof Map == "function", N$ = typeof Set == "function", I$ = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function ku(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var n, r, i;
    if (Array.isArray(e)) {
      if (n = e.length, n != t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!ku(e[r], t[r])) return !1;
      return !0;
    }
    var s;
    if (k$ && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (s = e.entries(); !(r = s.next()).done; )
        if (!t.has(r.value[0])) return !1;
      for (s = e.entries(); !(r = s.next()).done; )
        if (!ku(r.value[1], t.get(r.value[0]))) return !1;
      return !0;
    }
    if (N$ && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (s = e.entries(); !(r = s.next()).done; )
        if (!t.has(r.value[0])) return !1;
      return !0;
    }
    if (I$ && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (n = e.length, n != t.length) return !1;
      for (r = n; r-- !== 0; )
        if (e[r] !== t[r]) return !1;
      return !0;
    }
    if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof t.valueOf == "function") return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof t.toString == "function") return e.toString() === t.toString();
    if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length) return !1;
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, i[r])) return !1;
    if (P$ && e instanceof Element) return !1;
    for (r = n; r-- !== 0; )
      if (!((i[r] === "_owner" || i[r] === "__v" || i[r] === "__o") && e.$$typeof) && !ku(e[i[r]], t[i[r]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var A$ = function(t, n) {
  try {
    return ku(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
};
const R$ = /* @__PURE__ */ lc(A$);
var M$ = [], D$ = function(t, n, r) {
  r === void 0 && (r = {});
  var i = L.useRef(null), s = {
    onFirstUpdate: r.onFirstUpdate,
    placement: r.placement || "bottom",
    strategy: r.strategy || "absolute",
    modifiers: r.modifiers || M$
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
  }), l = u[0], d = u[1], p = L.useMemo(function() {
    return {
      name: "updateState",
      enabled: !0,
      phase: "write",
      fn: function(y) {
        var b = y.state, _ = Object.keys(b.elements);
        zp.flushSync(function() {
          d({
            styles: Jb(_.map(function(E) {
              return [E, b.styles[E] || {}];
            })),
            attributes: Jb(_.map(function(E) {
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
    return R$(i.current, v) ? i.current || v : (i.current = v, v);
  }, [s.onFirstUpdate, s.placement, s.strategy, s.modifiers, p]), m = L.useRef();
  return e0(function() {
    m.current && m.current.setOptions(h);
  }, [h]), e0(function() {
    if (!(t == null || n == null)) {
      var v = r.createPopper || T$, y = v(t, n, h);
      return m.current = y, function() {
        y.destroy(), m.current = null;
      };
    }
  }, [t, n, r.createPopper]), {
    state: m.current ? m.current.state : null,
    styles: l.styles,
    attributes: l.attributes,
    update: m.current ? m.current.update : null,
    forceUpdate: m.current ? m.current.forceUpdate : null
  };
}, L$ = function() {
}, F$ = function() {
  return Promise.resolve(null);
}, $$ = [];
function B$(e) {
  var t = e.placement, n = t === void 0 ? "bottom" : t, r = e.strategy, i = r === void 0 ? "absolute" : r, s = e.modifiers, u = s === void 0 ? $$ : s, l = e.referenceElement, d = e.onFirstUpdate, p = e.innerRef, h = e.children, m = L.useContext(y3), v = L.useState(null), y = v[0], b = v[1], _ = L.useState(null), E = _[0], R = _[1];
  L.useEffect(function() {
    w3(p, y);
  }, [p, y]);
  var F = L.useMemo(function() {
    return {
      placement: n,
      strategy: i,
      onFirstUpdate: d,
      modifiers: [].concat(u, [{
        name: "arrow",
        enabled: E != null,
        options: {
          element: E
        }
      }])
    };
  }, [n, i, d, u, E]), C = D$(l || m, y, F), I = C.state, O = C.styles, S = C.forceUpdate, x = C.update, P = L.useMemo(function() {
    return {
      ref: b,
      style: O.popper,
      placement: I ? I.placement : n,
      hasPopperEscaped: I && I.modifiersData.hide ? I.modifiersData.hide.hasPopperEscaped : null,
      isReferenceHidden: I && I.modifiersData.hide ? I.modifiersData.hide.isReferenceHidden : null,
      arrowProps: {
        style: O.arrow,
        ref: R
      },
      forceUpdate: S || L$,
      update: x || F$
    };
  }, [b, R, n, I, O, x, S]);
  return b3(h)(P);
}
function W$(e, t, n, r) {
  return J1(e, function(i, s, u) {
    t(r, n(i), s, u);
  }), r;
}
function U$(e, t) {
  return function(n, r) {
    return W$(n, e, t(r), {});
  };
}
var j$ = Object.prototype, z$ = j$.toString, H$ = U$(function(e, t, n) {
  t != null && typeof t.toString != "function" && (t = z$.call(t)), e[t] = n;
}, z1(Hi)), bm = {
  "top center": "top",
  "top left": "top-start",
  "top right": "top-end",
  "bottom center": "bottom",
  "bottom left": "bottom-start",
  "bottom right": "bottom-end",
  "right center": "right",
  "left center": "left"
}, Y$ = Dr(bm), q$ = H$(bm);
function Jl(e) {
  "@babel/helpers - typeof";
  return Jl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Jl(e);
}
function V$(e, t) {
  if (Jl(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Jl(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function G$(e) {
  var t = V$(e, "string");
  return Jl(t) == "symbol" ? t : t + "";
}
function K$(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, G$(r.key), r);
  }
}
function Z$(e, t, n) {
  return t && K$(e.prototype, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
var X$ = /* @__PURE__ */ function() {
  function e(n) {
    this.ref = n;
  }
  var t = e.prototype;
  return t.getBoundingClientRect = function() {
    return Ie(this.ref.current, "getBoundingClientRect") || {};
  }, Z$(e, [{
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
}(), Q$ = cc(function(e) {
  return new X$(Wu(e) ? e : {
    current: e
  });
});
function Fi(e) {
  var t = e.children, n = e.className, r = e.content, i = ze("content", n), s = Ue(Fi, e), u = He(Fi, e);
  return /* @__PURE__ */ J.createElement(u, ce({}, s, {
    className: i
  }), it(t) ? r : t);
}
Fi.handledProps = ["as", "children", "className", "content"];
Fi.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** The content of the Popup */
  children: c.node,
  /** Classes to add to the Popup content className. */
  className: c.string,
  /** Shorthand for primary content. */
  content: Ot
} : {};
Fi.create = Yt(Fi, function(e) {
  return {
    children: e
  };
});
function $i(e) {
  var t = e.children, n = e.className, r = e.content, i = ze("header", n), s = Ue($i, e), u = He($i, e);
  return /* @__PURE__ */ J.createElement(u, ce({}, s, {
    className: i
  }), it(t) ? r : t);
}
$i.handledProps = ["as", "children", "className", "content"];
$i.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** Primary content. */
  children: c.node,
  /** Additional classes. */
  className: c.string,
  /** Shorthand for primary content. */
  content: Ot
} : {};
$i.create = Yt($i, function(e) {
  return {
    children: e
  };
});
var wr = /* @__PURE__ */ function(e) {
  Qt(t, e);
  function t() {
    for (var r, i = arguments.length, s = new Array(i), u = 0; u < i; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.state = {}, r.open = !1, r.zIndexWasSynced = !1, r.triggerRef = /* @__PURE__ */ J.createRef(), r.elementRef = /* @__PURE__ */ J.createRef(), r.getPortalProps = function() {
      var l = {}, d = r.props, p = d.on, h = d.hoverable, m = gn(p) ? p : [p];
      return h && (l.closeOnPortalMouseLeave = !0, l.mouseLeaveDelay = 300), va(m, "hover") && (l.openOnTriggerClick = !1, l.closeOnTriggerClick = !1, l.openOnTriggerMouseEnter = !0, l.closeOnTriggerMouseLeave = !0, l.mouseLeaveDelay = 70, l.mouseEnterDelay = 50), va(m, "click") && (l.openOnTriggerClick = !0, l.closeOnTriggerClick = !0, l.closeOnDocumentClick = !0), va(m, "focus") && (l.openOnTriggerFocus = !0, l.closeOnTriggerBlur = !0), l;
    }, r.hideOnScroll = function(l) {
      v3(l.target) && r.elementRef.current.contains(l.target) || (r.setState({
        closed: !0
      }), wl.unsub("scroll", r.hideOnScroll, {
        target: window
      }), r.timeoutId = setTimeout(function() {
        r.setState({
          closed: !1
        });
      }, 50), r.handleClose(l));
    }, r.handleClose = function(l) {
      Ie(r.props, "onClose", l, ce({}, r.props, {
        open: !1
      }));
    }, r.handleOpen = function(l) {
      Ie(r.props, "onOpen", l, ce({}, r.props, {
        open: !0
      }));
    }, r.handlePortalMount = function(l) {
      Ie(r.props, "onMount", l, r.props);
    }, r.handlePortalUnmount = function(l) {
      r.positionUpdate = null, Ie(r.props, "onUnmount", l, r.props);
    }, r.renderContent = function(l) {
      var d = l.placement, p = l.ref, h = l.update, m = l.style, v = r.props, y = v.basic, b = v.children, _ = v.className, E = v.content, R = v.hideOnScroll, F = v.flowing, C = v.header, I = v.inverted, O = v.popper, S = v.size, x = v.style, P = v.wide, k = r.state.contentRestProps;
      r.positionUpdate = h;
      var B = ze("ui", q$[d], S, tn(P, "wide"), q(y, "basic"), q(F, "flowing"), q(I, "inverted"), "popup transition visible", _), Y = He(t, r.props), ne = ce({
        // Heads up! We need default styles to get working correctly `flowing`
        left: "auto",
        right: "auto",
        // This is required to be properly positioned inside wrapping `div`
        position: "initial"
      }, x), z = /* @__PURE__ */ J.createElement(Y, ce({}, k, {
        className: B,
        style: ne,
        ref: r.elementRef
      }), it(b) ? /* @__PURE__ */ J.createElement(J.Fragment, null, $i.create(C, {
        autoGenerateKey: !1
      }), Fi.create(E, {
        autoGenerateKey: !1
      })) : b, R && /* @__PURE__ */ J.createElement(Ua, {
        on: r.hideOnScroll,
        name: "scroll",
        target: "window"
      }));
      return TD(O || {}, {
        overrideProps: {
          children: z,
          ref: p,
          style: ce({
            // Fixes layout for floated elements
            // https://github.com/Semantic-Org/Semantic-UI-React/issues/4092
            display: "flex"
          }, m)
        }
      });
    }, r;
  }
  t.getDerivedStateFromProps = function(i, s) {
    if (s.closed || s.disabled) return {};
    var u = Ue(t, i), l = dm(u, function(p, h, m) {
      return va(Xr.handledProps, m) || (p[m] = h), p;
    }, {}), d = _d(u, Xr.handledProps);
    return {
      contentRestProps: l,
      portalRestProps: d
    };
  };
  var n = t.prototype;
  return n.componentDidUpdate = function(i) {
    var s = Sl(this.props.popperDependencies, i.popperDependencies);
    s || this.handleUpdate();
  }, n.componentWillUnmount = function() {
    clearTimeout(this.timeoutId);
  }, n.handleUpdate = function() {
    this.positionUpdate && this.positionUpdate();
  }, n.render = function() {
    var i = this, s = this.props, u = s.context, l = s.disabled, d = s.eventsEnabled, p = s.offset, h = s.pinned, m = s.popper, v = s.popperModifiers, y = s.position, b = s.positionFixed, _ = s.trigger, E = this.state, R = E.closed, F = E.portalRestProps;
    if (R || l)
      return _;
    var C = [{
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
        fn: function(x) {
          var P, k = x.state;
          if (!i.zIndexWasSynced) {
            var B = m == null || (P = m.style) == null ? void 0 : P.zIndex;
            ss(B) && (k.elements.popper.style.zIndex = window.getComputedStyle(k.elements.popper.firstChild).zIndex), i.zIndexWasSynced = !0;
          }
        },
        effect: function() {
          return function() {
            i.zIndexWasSynced = !1;
          };
        }
      }
    ]), I = Q$(wt(u) ? this.triggerRef : u), O = ce({}, this.getPortalProps(), F);
    return /* @__PURE__ */ J.createElement(Xr, ce({}, O, {
      onClose: this.handleClose,
      onMount: this.handlePortalMount,
      onOpen: this.handleOpen,
      onUnmount: this.handlePortalUnmount,
      trigger: _,
      triggerRef: this.triggerRef
    }), /* @__PURE__ */ J.createElement(B$, {
      modifiers: C,
      placement: bm[y],
      strategy: b ? "fixed" : null,
      referenceElement: I
    }, this.renderContent));
  }, t;
}(Vn);
wr.handledProps = ["as", "basic", "children", "className", "content", "context", "disabled", "eventsEnabled", "flowing", "header", "hideOnScroll", "hoverable", "inverted", "offset", "on", "onClose", "onMount", "onOpen", "onUnmount", "pinned", "popper", "popperDependencies", "popperModifiers", "position", "positionFixed", "size", "style", "trigger", "wide"];
wr.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** Display the popup without the pointing arrow. */
  basic: c.bool,
  /** Primary content. */
  children: c.node,
  /** Additional classes. */
  className: c.string,
  /** Simple text content for the popover. */
  content: yt,
  /** Existing element the pop-up should be bound to. */
  context: c.oneOfType([c.object, sm]),
  /** A disabled popup only renders its trigger. */
  disabled: c.bool,
  /** Enables the Popper.js event listeners. */
  eventsEnabled: c.bool,
  /** A flowing Popup has no maximum width and continues to flow to fit its content. */
  flowing: c.bool,
  /** Takes up the entire width of its offset container. */
  // TODO: implement the Popup fluid layout
  // fluid: PropTypes.bool,
  /** Header displayed above the content in bold. */
  header: yt,
  /** Hide the Popup when scrolling the window. */
  hideOnScroll: c.bool,
  /** Whether the popup should not close on hover. */
  hoverable: c.bool,
  /** Invert the colors of the Popup. */
  inverted: c.bool,
  /**
   * Offset values in px unit to apply to rendered popup. The basic offset accepts an
   * array with two numbers in the form [skidding, distance]:
   * - `skidding` displaces the Popup along the reference element
   * - `distance` displaces the Popup away from, or toward, the reference element in the direction of its placement. A positive number displaces it further away, while a negative number lets it overlap the reference.
   *
   * @see https://popper.js.org/docs/v2/modifiers/offset/
   */
  offset: c.oneOfType([c.func, c.arrayOf(c.number)]),
  /** Events triggering the popup. */
  on: c.oneOfType([c.oneOf(["hover", "click", "focus"]), c.arrayOf(c.oneOf(["hover", "click", "focus"]))]),
  /**
   * Called when a close event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClose: c.func,
  /**
   * Called when the portal is mounted on the DOM.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onMount: c.func,
  /**
   * Called when an open event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onOpen: c.func,
  /**
   * Called when the portal is unmounted from the DOM.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onUnmount: c.func,
  /** Disables automatic repositioning of the component, it will always be placed according to the position value. */
  pinned: c.bool,
  /** Position for the popover. */
  position: c.oneOf(Y$),
  /** Tells `Popper.js` to use the `position: fixed` strategy to position the popover. */
  positionFixed: c.bool,
  /** A wrapping element for an actual content that will be used for positioning. */
  popper: yt,
  /** An array containing custom settings for the Popper.js modifiers. */
  popperModifiers: c.array,
  /** A popup can have dependencies which update will schedule a position update. */
  popperDependencies: c.array,
  /** Popup size. */
  size: c.oneOf(Qr(lr, "medium", "big", "massive")),
  /** Custom Popup style. */
  style: c.object,
  /** Element to be rendered in-place where the popup is defined. */
  trigger: c.node,
  /** Popup width. */
  wide: c.oneOfType([c.bool, c.oneOf(["very"])])
} : {};
wr.defaultProps = {
  disabled: !1,
  eventsEnabled: !0,
  on: ["click", "hover"],
  pinned: !1,
  popperModifiers: [],
  position: "top left"
};
wr.Content = Fi;
wr.Header = $i;
var J$ = function(t) {
  if (t) {
    var n, r, i;
    return typeof t.window == "object" && t.window === t ? t.event : (n = (r = t.ownerDocument) == null || (i = r.defaultView) == null ? void 0 : i.event) != null ? n : void 0;
  }
}, u0 = function(t, n) {
  return t ? !!t[n] : !1;
}, e9 = function(t) {
  var n = t.capture, r = t.listener, i = t.type, s = t.target, u = t.targetRef, l = L.useRef(r);
  l.current = r;
  var d = L.useCallback(function(h) {
    return l.current(h);
  }, []), p = L.useRef(void 0);
  process.env.NODE_ENV !== "production" && L.useEffect(function() {
    if (typeof s < "u" && typeof u < "u")
      throw new Error("`target` and `targetRef` props are mutually exclusive, please use one of them.");
    if (typeof s > "u" && typeof u > "u")
      throw new Error("`target` and `targetRef` props are `undefined`, it' required to use one of them.");
  }, [s, u]), L.useEffect(function() {
    var h = typeof u > "u" ? s : u.current, m = J$(window), v = function(b) {
      if (b === m) {
        m = void 0;
        return;
      }
      d(b);
    };
    if (u0(h, "addEventListener"))
      h.addEventListener(i, v, n);
    else if (process.env.NODE_ENV !== "production")
      throw new Error("@fluentui/react-component-event-listener: Passed `element` is not valid or does not support `addEventListener()` method.");
    return p.current = setTimeout(function() {
      m = void 0;
    }, 1), function() {
      if (clearTimeout(p.current), m = void 0, u0(h, "removeEventListener"))
        h.removeEventListener(i, v, n);
      else if (process.env.NODE_ENV !== "production")
        throw new Error("@fluentui/react-component-event-listener: Passed `element` is not valid or does not support `removeEventListener()` method.");
    };
  }, [n, d, s, u, i]);
}, t9 = /* @__PURE__ */ function() {
  function e(t) {
    return e9(t), null;
  }
  return e.defaultProps = {
    capture: !1
  }, e;
}(), n9 = {
  current: typeof document > "u" ? null : document
};
function ec(e) {
  var t = e.className, n = e.children, r = e.content, i = ze("pushable", t), s = Ue(ec, e), u = He(ec, e);
  return /* @__PURE__ */ J.createElement(u, ce({}, s, {
    className: i
  }), it(n) ? r : n);
}
ec.handledProps = ["as", "children", "className", "content"];
ec.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** Primary content. */
  children: c.node,
  /** Additional classes. */
  className: c.string,
  /** Shorthand for primary content. */
  content: Ot
} : {};
function tc(e) {
  var t = e.className, n = e.dimmed, r = e.children, i = e.content, s = ze("pusher", q(n, "dimmed"), t), u = Ue(tc, e), l = He(tc, e);
  return /* @__PURE__ */ J.createElement(l, ce({}, u, {
    className: s
  }), it(r) ? i : r);
}
tc.handledProps = ["as", "children", "className", "content", "dimmed"];
tc.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** Primary content. */
  children: c.node,
  /** Additional classes. */
  className: c.string,
  /** Shorthand for primary content. */
  content: Ot,
  /** Controls whether or not the dim is displayed. */
  dimmed: c.bool
} : {};
var Gi = /* @__PURE__ */ function(e) {
  Qt(t, e);
  function t(r) {
    var i;
    return i = e.call(this, r) || this, i.ref = /* @__PURE__ */ yr(), i.handleAnimationStart = function() {
      var s = i.props.visible, u = s ? "onVisible" : "onHide";
      if (clearTimeout(i.animationTimer), i.animationTimer = setTimeout(i.handleAnimationEnd, t.animationDuration), i.skipNextCallback) {
        i.skipNextCallback = !1;
        return;
      }
      Ie(i.props, u, null, i.props);
    }, i.handleAnimationEnd = function() {
      var s = i.props.visible, u = s ? "onShow" : "onHidden";
      i.setState({
        animationTick: 0
      }), Ie(i.props, u, null, i.props);
    }, i.handleDocumentClick = function(s) {
      Ci(i.ref.current, s) || (i.skipNextCallback = !0, Ie(i.props, "onHide", s, ce({}, i.props, {
        visible: !1
      })));
    }, i.state = {
      animationTick: 0,
      visible: r.visible
    }, i;
  }
  t.getDerivedStateFromProps = function(i, s) {
    var u = !!i.visible == !!s.visible ? 0 : 1;
    return {
      animationTick: s.animationTick + u,
      visible: i.visible
    };
  };
  var n = t.prototype;
  return n.componentDidUpdate = function(i, s) {
    this.state.animationTick > s.animationTick && this.handleAnimationStart();
  }, n.componentWillUnmount = function() {
    clearTimeout(this.animationTimer);
  }, n.render = function() {
    var i = this.props, s = i.animation, u = i.className, l = i.children, d = i.content, p = i.direction, h = i.target, m = i.visible, v = i.width, y = this.state.animationTick, b = ze("ui", s, p, v, q(y > 0, "animating"), q(m, "visible"), "sidebar", u), _ = Ue(t, this.props), E = He(t, this.props), R = Wu(h) ? {
      targetRef: h
    } : {
      target: h
    };
    return /* @__PURE__ */ J.createElement(J.Fragment, null, /* @__PURE__ */ J.createElement(or, {
      innerRef: this.ref
    }, /* @__PURE__ */ J.createElement(E, ce({}, _, {
      className: b
    }), it(l) ? d : l)), m && /* @__PURE__ */ J.createElement(t9, ce({
      listener: this.handleDocumentClick,
      type: "click"
    }, R)));
  }, t;
}(Vn);
Gi.handledProps = ["animation", "as", "children", "className", "content", "direction", "onHidden", "onHide", "onShow", "onVisible", "target", "visible", "width"];
Gi.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: c.elementType,
  /** Animation style. */
  animation: c.oneOf(["overlay", "push", "scale down", "uncover", "slide out", "slide along"]),
  /** Primary content. */
  children: c.node,
  /** Additional classes. */
  className: c.string,
  /** Shorthand for primary content. */
  content: Ot,
  /** Direction the sidebar should appear on. */
  direction: c.oneOf(["top", "right", "bottom", "left"]),
  /**
   * Called before a sidebar begins to animate out.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onHide: c.func,
  /**
   * Called after a sidebar has finished animating out.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onHidden: c.func,
  /**
   * Called when a sidebar has finished animating in.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onShow: c.func,
  /**
   * Called when a sidebar begins animating in.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onVisible: c.func,
  /** A sidebar can handle clicks on the passed element. */
  target: c.oneOfType([mD, sm]),
  /** Controls whether or not the sidebar is visible on the page. */
  visible: c.bool,
  /** Sidebar width. */
  width: c.oneOf(["very thin", "thin", "wide", "very wide"])
} : {};
Gi.defaultProps = {
  direction: "left",
  target: n9,
  visible: !1
};
Gi.animationDuration = 500;
Gi.autoControlledProps = ["visible"];
Gi.Pushable = ec;
Gi.Pusher = tc;
var Gu = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
Gu.exports;
(function(e, t) {
  (function() {
    var n, r = "4.18.1", i = 200, s = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", u = "Expected a function", l = "Invalid `variable` option passed into `_.template`", d = "Invalid `imports` option passed into `_.template`", p = "__lodash_hash_undefined__", h = 500, m = "__lodash_placeholder__", v = 1, y = 2, b = 4, _ = 1, E = 2, R = 1, F = 2, C = 4, I = 8, O = 16, S = 32, x = 64, P = 128, k = 256, B = 512, Y = 30, ne = "...", z = 800, re = 16, pe = 1, ve = 2, Oe = 3, he = 1 / 0, be = 9007199254740991, ee = 17976931348623157e292, ie = NaN, se = 4294967295, Ce = se - 1, Se = se >>> 1, Te = [
      ["ary", P],
      ["bind", R],
      ["bindKey", F],
      ["curry", I],
      ["curryRight", O],
      ["flip", B],
      ["partial", S],
      ["partialRight", x],
      ["rearg", k]
    ], ge = "[object Arguments]", Pe = "[object Array]", Me = "[object AsyncFunction]", U = "[object Boolean]", j = "[object Date]", $ = "[object DOMException]", D = "[object Error]", G = "[object Function]", Z = "[object GeneratorFunction]", le = "[object Map]", fe = "[object Number]", Q = "[object Null]", ue = "[object Object]", te = "[object Promise]", V = "[object Proxy]", ae = "[object RegExp]", Ee = "[object Set]", Le = "[object String]", Fe = "[object Symbol]", ot = "[object Undefined]", qe = "[object WeakMap]", Et = "[object WeakSet]", nt = "[object ArrayBuffer]", Ge = "[object DataView]", Ze = "[object Float32Array]", kt = "[object Float64Array]", ye = "[object Int8Array]", Nt = "[object Int16Array]", It = "[object Int32Array]", dt = "[object Uint8Array]", Qe = "[object Uint8ClampedArray]", Vt = "[object Uint16Array]", $e = "[object Uint32Array]", Lt = /\b__p \+= '';/g, Xe = /\b(__p \+=) '' \+/g, cn = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Gn = /&(?:amp|lt|gt|quot|#39);/g, ia = /[&<>"']/g, Tc = RegExp(Gn.source), oa = RegExp(ia.source), Hx = /<%-([\s\S]+?)%>/g, Yx = /<%([\s\S]+?)%>/g, bg = /<%=([\s\S]+?)%>/g, qx = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Vx = /^\w*$/, Gx = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Gd = /[\\^$.*+?()[\]{}|]/g, Kx = RegExp(Gd.source), Kd = /^\s+/, Zx = /\s/, Xx = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Qx = /\{\n\/\* \[wrapped with (.+)\] \*/, Jx = /,? & /, eC = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, _g = /[()=,{}\[\]\/\s]/, tC = /\\(\\)?/g, nC = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, wg = /\w*$/, rC = /^[-+]0x[0-9a-f]+$/i, aC = /^0b[01]+$/i, iC = /^\[object .+?Constructor\]$/, oC = /^0o[0-7]+$/i, sC = /^(?:0|[1-9]\d*)$/, lC = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Pc = /($^)/, cC = /['\n\r\u2028\u2029\\]/g, kc = "\\ud800-\\udfff", uC = "\\u0300-\\u036f", dC = "\\ufe20-\\ufe2f", fC = "\\u20d0-\\u20ff", Eg = uC + dC + fC, xg = "\\u2700-\\u27bf", Cg = "a-z\\xdf-\\xf6\\xf8-\\xff", pC = "\\xac\\xb1\\xd7\\xf7", hC = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", mC = "\\u2000-\\u206f", gC = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Og = "A-Z\\xc0-\\xd6\\xd8-\\xde", Sg = "\\ufe0e\\ufe0f", Tg = pC + hC + mC + gC, Zd = "['’]", vC = "[" + kc + "]", Pg = "[" + Tg + "]", Nc = "[" + Eg + "]", kg = "\\d+", yC = "[" + xg + "]", Ng = "[" + Cg + "]", Ig = "[^" + kc + Tg + kg + xg + Cg + Og + "]", Xd = "\\ud83c[\\udffb-\\udfff]", bC = "(?:" + Nc + "|" + Xd + ")", Ag = "[^" + kc + "]", Qd = "(?:\\ud83c[\\udde6-\\uddff]){2}", Jd = "[\\ud800-\\udbff][\\udc00-\\udfff]", $o = "[" + Og + "]", Rg = "\\u200d", Mg = "(?:" + Ng + "|" + Ig + ")", _C = "(?:" + $o + "|" + Ig + ")", Dg = "(?:" + Zd + "(?:d|ll|m|re|s|t|ve))?", Lg = "(?:" + Zd + "(?:D|LL|M|RE|S|T|VE))?", Fg = bC + "?", $g = "[" + Sg + "]?", wC = "(?:" + Rg + "(?:" + [Ag, Qd, Jd].join("|") + ")" + $g + Fg + ")*", EC = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", xC = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Bg = $g + Fg + wC, CC = "(?:" + [yC, Qd, Jd].join("|") + ")" + Bg, OC = "(?:" + [Ag + Nc + "?", Nc, Qd, Jd, vC].join("|") + ")", SC = RegExp(Zd, "g"), TC = RegExp(Nc, "g"), ef = RegExp(Xd + "(?=" + Xd + ")|" + OC + Bg, "g"), PC = RegExp([
      $o + "?" + Ng + "+" + Dg + "(?=" + [Pg, $o, "$"].join("|") + ")",
      _C + "+" + Lg + "(?=" + [Pg, $o + Mg, "$"].join("|") + ")",
      $o + "?" + Mg + "+" + Dg,
      $o + "+" + Lg,
      xC,
      EC,
      kg,
      CC
    ].join("|"), "g"), kC = RegExp("[" + Rg + kc + Eg + Sg + "]"), NC = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, IC = [
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
    ], AC = -1, Jt = {};
    Jt[Ze] = Jt[kt] = Jt[ye] = Jt[Nt] = Jt[It] = Jt[dt] = Jt[Qe] = Jt[Vt] = Jt[$e] = !0, Jt[ge] = Jt[Pe] = Jt[nt] = Jt[U] = Jt[Ge] = Jt[j] = Jt[D] = Jt[G] = Jt[le] = Jt[fe] = Jt[ue] = Jt[ae] = Jt[Ee] = Jt[Le] = Jt[qe] = !1;
    var Zt = {};
    Zt[ge] = Zt[Pe] = Zt[nt] = Zt[Ge] = Zt[U] = Zt[j] = Zt[Ze] = Zt[kt] = Zt[ye] = Zt[Nt] = Zt[It] = Zt[le] = Zt[fe] = Zt[ue] = Zt[ae] = Zt[Ee] = Zt[Le] = Zt[Fe] = Zt[dt] = Zt[Qe] = Zt[Vt] = Zt[$e] = !0, Zt[D] = Zt[G] = Zt[qe] = !1;
    var RC = {
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
    }, MC = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, DC = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, LC = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, FC = parseFloat, $C = parseInt, Wg = typeof ts == "object" && ts && ts.Object === Object && ts, BC = typeof self == "object" && self && self.Object === Object && self, Pn = Wg || BC || Function("return this")(), tf = t && !t.nodeType && t, Ki = tf && !0 && e && !e.nodeType && e, Ug = Ki && Ki.exports === tf, nf = Ug && Wg.process, Cr = function() {
      try {
        var K = Ki && Ki.require && Ki.require("util").types;
        return K || nf && nf.binding && nf.binding("util");
      } catch {
      }
    }(), jg = Cr && Cr.isArrayBuffer, zg = Cr && Cr.isDate, Hg = Cr && Cr.isMap, Yg = Cr && Cr.isRegExp, qg = Cr && Cr.isSet, Vg = Cr && Cr.isTypedArray;
    function cr(K, me, oe) {
      switch (oe.length) {
        case 0:
          return K.call(me);
        case 1:
          return K.call(me, oe[0]);
        case 2:
          return K.call(me, oe[0], oe[1]);
        case 3:
          return K.call(me, oe[0], oe[1], oe[2]);
      }
      return K.apply(me, oe);
    }
    function WC(K, me, oe, Be) {
      for (var st = -1, Dt = K == null ? 0 : K.length; ++st < Dt; ) {
        var yn = K[st];
        me(Be, yn, oe(yn), K);
      }
      return Be;
    }
    function ur(K, me) {
      for (var oe = -1, Be = K == null ? 0 : K.length; ++oe < Be && me(K[oe], oe, K) !== !1; )
        ;
      return K;
    }
    function UC(K, me) {
      for (var oe = K == null ? 0 : K.length; oe-- && me(K[oe], oe, K) !== !1; )
        ;
      return K;
    }
    function Gg(K, me) {
      for (var oe = -1, Be = K == null ? 0 : K.length; ++oe < Be; )
        if (!me(K[oe], oe, K))
          return !1;
      return !0;
    }
    function ci(K, me) {
      for (var oe = -1, Be = K == null ? 0 : K.length, st = 0, Dt = []; ++oe < Be; ) {
        var yn = K[oe];
        me(yn, oe, K) && (Dt[st++] = yn);
      }
      return Dt;
    }
    function Ic(K, me) {
      var oe = K == null ? 0 : K.length;
      return !!oe && Bo(K, me, 0) > -1;
    }
    function rf(K, me, oe) {
      for (var Be = -1, st = K == null ? 0 : K.length; ++Be < st; )
        if (oe(me, K[Be]))
          return !0;
      return !1;
    }
    function on(K, me) {
      for (var oe = -1, Be = K == null ? 0 : K.length, st = Array(Be); ++oe < Be; )
        st[oe] = me(K[oe], oe, K);
      return st;
    }
    function ui(K, me) {
      for (var oe = -1, Be = me.length, st = K.length; ++oe < Be; )
        K[st + oe] = me[oe];
      return K;
    }
    function af(K, me, oe, Be) {
      var st = -1, Dt = K == null ? 0 : K.length;
      for (Be && Dt && (oe = K[++st]); ++st < Dt; )
        oe = me(oe, K[st], st, K);
      return oe;
    }
    function jC(K, me, oe, Be) {
      var st = K == null ? 0 : K.length;
      for (Be && st && (oe = K[--st]); st--; )
        oe = me(oe, K[st], st, K);
      return oe;
    }
    function of(K, me) {
      for (var oe = -1, Be = K == null ? 0 : K.length; ++oe < Be; )
        if (me(K[oe], oe, K))
          return !0;
      return !1;
    }
    var zC = sf("length");
    function HC(K) {
      return K.split("");
    }
    function YC(K) {
      return K.match(eC) || [];
    }
    function Kg(K, me, oe) {
      var Be;
      return oe(K, function(st, Dt, yn) {
        if (me(st, Dt, yn))
          return Be = Dt, !1;
      }), Be;
    }
    function Ac(K, me, oe, Be) {
      for (var st = K.length, Dt = oe + (Be ? 1 : -1); Be ? Dt-- : ++Dt < st; )
        if (me(K[Dt], Dt, K))
          return Dt;
      return -1;
    }
    function Bo(K, me, oe) {
      return me === me ? rO(K, me, oe) : Ac(K, Zg, oe);
    }
    function qC(K, me, oe, Be) {
      for (var st = oe - 1, Dt = K.length; ++st < Dt; )
        if (Be(K[st], me))
          return st;
      return -1;
    }
    function Zg(K) {
      return K !== K;
    }
    function Xg(K, me) {
      var oe = K == null ? 0 : K.length;
      return oe ? cf(K, me) / oe : ie;
    }
    function sf(K) {
      return function(me) {
        return me == null ? n : me[K];
      };
    }
    function lf(K) {
      return function(me) {
        return K == null ? n : K[me];
      };
    }
    function Qg(K, me, oe, Be, st) {
      return st(K, function(Dt, yn, Gt) {
        oe = Be ? (Be = !1, Dt) : me(oe, Dt, yn, Gt);
      }), oe;
    }
    function VC(K, me) {
      var oe = K.length;
      for (K.sort(me); oe--; )
        K[oe] = K[oe].value;
      return K;
    }
    function cf(K, me) {
      for (var oe, Be = -1, st = K.length; ++Be < st; ) {
        var Dt = me(K[Be]);
        Dt !== n && (oe = oe === n ? Dt : oe + Dt);
      }
      return oe;
    }
    function uf(K, me) {
      for (var oe = -1, Be = Array(K); ++oe < K; )
        Be[oe] = me(oe);
      return Be;
    }
    function GC(K, me) {
      return on(me, function(oe) {
        return [oe, K[oe]];
      });
    }
    function Jg(K) {
      return K && K.slice(0, rv(K) + 1).replace(Kd, "");
    }
    function dr(K) {
      return function(me) {
        return K(me);
      };
    }
    function df(K, me) {
      return on(me, function(oe) {
        return K[oe];
      });
    }
    function Vs(K, me) {
      return K.has(me);
    }
    function ev(K, me) {
      for (var oe = -1, Be = K.length; ++oe < Be && Bo(me, K[oe], 0) > -1; )
        ;
      return oe;
    }
    function tv(K, me) {
      for (var oe = K.length; oe-- && Bo(me, K[oe], 0) > -1; )
        ;
      return oe;
    }
    function KC(K, me) {
      for (var oe = K.length, Be = 0; oe--; )
        K[oe] === me && ++Be;
      return Be;
    }
    var ZC = lf(RC), XC = lf(MC);
    function QC(K) {
      return "\\" + LC[K];
    }
    function JC(K, me) {
      return K == null ? n : K[me];
    }
    function Wo(K) {
      return kC.test(K);
    }
    function eO(K) {
      return NC.test(K);
    }
    function tO(K) {
      for (var me, oe = []; !(me = K.next()).done; )
        oe.push(me.value);
      return oe;
    }
    function ff(K) {
      var me = -1, oe = Array(K.size);
      return K.forEach(function(Be, st) {
        oe[++me] = [st, Be];
      }), oe;
    }
    function nv(K, me) {
      return function(oe) {
        return K(me(oe));
      };
    }
    function di(K, me) {
      for (var oe = -1, Be = K.length, st = 0, Dt = []; ++oe < Be; ) {
        var yn = K[oe];
        (yn === me || yn === m) && (K[oe] = m, Dt[st++] = oe);
      }
      return Dt;
    }
    function Rc(K) {
      var me = -1, oe = Array(K.size);
      return K.forEach(function(Be) {
        oe[++me] = Be;
      }), oe;
    }
    function nO(K) {
      var me = -1, oe = Array(K.size);
      return K.forEach(function(Be) {
        oe[++me] = [Be, Be];
      }), oe;
    }
    function rO(K, me, oe) {
      for (var Be = oe - 1, st = K.length; ++Be < st; )
        if (K[Be] === me)
          return Be;
      return -1;
    }
    function aO(K, me, oe) {
      for (var Be = oe + 1; Be--; )
        if (K[Be] === me)
          return Be;
      return Be;
    }
    function Uo(K) {
      return Wo(K) ? oO(K) : zC(K);
    }
    function Hr(K) {
      return Wo(K) ? sO(K) : HC(K);
    }
    function rv(K) {
      for (var me = K.length; me-- && Zx.test(K.charAt(me)); )
        ;
      return me;
    }
    var iO = lf(DC);
    function oO(K) {
      for (var me = ef.lastIndex = 0; ef.test(K); )
        ++me;
      return me;
    }
    function sO(K) {
      return K.match(ef) || [];
    }
    function lO(K) {
      return K.match(PC) || [];
    }
    var cO = function K(me) {
      me = me == null ? Pn : jo.defaults(Pn.Object(), me, jo.pick(Pn, IC));
      var oe = me.Array, Be = me.Date, st = me.Error, Dt = me.Function, yn = me.Math, Gt = me.Object, pf = me.RegExp, uO = me.String, Or = me.TypeError, Mc = oe.prototype, dO = Dt.prototype, zo = Gt.prototype, Dc = me["__core-js_shared__"], Lc = dO.toString, Ft = zo.hasOwnProperty, fO = 0, av = function() {
        var a = /[^.]+$/.exec(Dc && Dc.keys && Dc.keys.IE_PROTO || "");
        return a ? "Symbol(src)_1." + a : "";
      }(), Fc = zo.toString, pO = Lc.call(Gt), hO = Pn._, mO = pf(
        "^" + Lc.call(Ft).replace(Gd, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), $c = Ug ? me.Buffer : n, fi = me.Symbol, Bc = me.Uint8Array, iv = $c ? $c.allocUnsafe : n, Wc = nv(Gt.getPrototypeOf, Gt), ov = Gt.create, sv = zo.propertyIsEnumerable, Uc = Mc.splice, lv = fi ? fi.isConcatSpreadable : n, Gs = fi ? fi.iterator : n, Zi = fi ? fi.toStringTag : n, jc = function() {
        try {
          var a = to(Gt, "defineProperty");
          return a({}, "", {}), a;
        } catch {
        }
      }(), gO = me.clearTimeout !== Pn.clearTimeout && me.clearTimeout, vO = Be && Be.now !== Pn.Date.now && Be.now, yO = me.setTimeout !== Pn.setTimeout && me.setTimeout, zc = yn.ceil, Hc = yn.floor, hf = Gt.getOwnPropertySymbols, bO = $c ? $c.isBuffer : n, cv = me.isFinite, _O = Mc.join, wO = nv(Gt.keys, Gt), bn = yn.max, An = yn.min, EO = Be.now, xO = me.parseInt, uv = yn.random, CO = Mc.reverse, mf = to(me, "DataView"), Ks = to(me, "Map"), gf = to(me, "Promise"), Ho = to(me, "Set"), Zs = to(me, "WeakMap"), Xs = to(Gt, "create"), Yc = Zs && new Zs(), Yo = {}, OO = no(mf), SO = no(Ks), TO = no(gf), PO = no(Ho), kO = no(Zs), qc = fi ? fi.prototype : n, Qs = qc ? qc.valueOf : n, dv = qc ? qc.toString : n;
      function T(a) {
        if (dn(a) && !ct(a) && !(a instanceof xt)) {
          if (a instanceof Sr)
            return a;
          if (Ft.call(a, "__wrapped__"))
            return fy(a);
        }
        return new Sr(a);
      }
      var qo = /* @__PURE__ */ function() {
        function a() {
        }
        return function(o) {
          if (!un(o))
            return {};
          if (ov)
            return ov(o);
          a.prototype = o;
          var f = new a();
          return a.prototype = n, f;
        };
      }();
      function Vc() {
      }
      function Sr(a, o) {
        this.__wrapped__ = a, this.__actions__ = [], this.__chain__ = !!o, this.__index__ = 0, this.__values__ = n;
      }
      T.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: Hx,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: Yx,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: bg,
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
          _: T
        }
      }, T.prototype = Vc.prototype, T.prototype.constructor = T, Sr.prototype = qo(Vc.prototype), Sr.prototype.constructor = Sr;
      function xt(a) {
        this.__wrapped__ = a, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = se, this.__views__ = [];
      }
      function NO() {
        var a = new xt(this.__wrapped__);
        return a.__actions__ = Kn(this.__actions__), a.__dir__ = this.__dir__, a.__filtered__ = this.__filtered__, a.__iteratees__ = Kn(this.__iteratees__), a.__takeCount__ = this.__takeCount__, a.__views__ = Kn(this.__views__), a;
      }
      function IO() {
        if (this.__filtered__) {
          var a = new xt(this);
          a.__dir__ = -1, a.__filtered__ = !0;
        } else
          a = this.clone(), a.__dir__ *= -1;
        return a;
      }
      function AO() {
        var a = this.__wrapped__.value(), o = this.__dir__, f = ct(a), g = o < 0, w = f ? a.length : 0, A = HS(0, w, this.__views__), W = A.start, H = A.end, X = H - W, _e = g ? H : W - 1, we = this.__iteratees__, xe = we.length, De = 0, Ye = An(X, this.__takeCount__);
        if (!f || !g && w == X && Ye == X)
          return Dv(a, this.__actions__);
        var tt = [];
        e:
          for (; X-- && De < Ye; ) {
            _e += o;
            for (var ht = -1, Je = a[_e]; ++ht < xe; ) {
              var bt = we[ht], St = bt.iteratee, hr = bt.type, Un = St(Je);
              if (hr == ve)
                Je = Un;
              else if (!Un) {
                if (hr == pe)
                  continue e;
                break e;
              }
            }
            tt[De++] = Je;
          }
        return tt;
      }
      xt.prototype = qo(Vc.prototype), xt.prototype.constructor = xt;
      function Xi(a) {
        var o = -1, f = a == null ? 0 : a.length;
        for (this.clear(); ++o < f; ) {
          var g = a[o];
          this.set(g[0], g[1]);
        }
      }
      function RO() {
        this.__data__ = Xs ? Xs(null) : {}, this.size = 0;
      }
      function MO(a) {
        var o = this.has(a) && delete this.__data__[a];
        return this.size -= o ? 1 : 0, o;
      }
      function DO(a) {
        var o = this.__data__;
        if (Xs) {
          var f = o[a];
          return f === p ? n : f;
        }
        return Ft.call(o, a) ? o[a] : n;
      }
      function LO(a) {
        var o = this.__data__;
        return Xs ? o[a] !== n : Ft.call(o, a);
      }
      function FO(a, o) {
        var f = this.__data__;
        return this.size += this.has(a) ? 0 : 1, f[a] = Xs && o === n ? p : o, this;
      }
      Xi.prototype.clear = RO, Xi.prototype.delete = MO, Xi.prototype.get = DO, Xi.prototype.has = LO, Xi.prototype.set = FO;
      function ka(a) {
        var o = -1, f = a == null ? 0 : a.length;
        for (this.clear(); ++o < f; ) {
          var g = a[o];
          this.set(g[0], g[1]);
        }
      }
      function $O() {
        this.__data__ = [], this.size = 0;
      }
      function BO(a) {
        var o = this.__data__, f = Gc(o, a);
        if (f < 0)
          return !1;
        var g = o.length - 1;
        return f == g ? o.pop() : Uc.call(o, f, 1), --this.size, !0;
      }
      function WO(a) {
        var o = this.__data__, f = Gc(o, a);
        return f < 0 ? n : o[f][1];
      }
      function UO(a) {
        return Gc(this.__data__, a) > -1;
      }
      function jO(a, o) {
        var f = this.__data__, g = Gc(f, a);
        return g < 0 ? (++this.size, f.push([a, o])) : f[g][1] = o, this;
      }
      ka.prototype.clear = $O, ka.prototype.delete = BO, ka.prototype.get = WO, ka.prototype.has = UO, ka.prototype.set = jO;
      function Na(a) {
        var o = -1, f = a == null ? 0 : a.length;
        for (this.clear(); ++o < f; ) {
          var g = a[o];
          this.set(g[0], g[1]);
        }
      }
      function zO() {
        this.size = 0, this.__data__ = {
          hash: new Xi(),
          map: new (Ks || ka)(),
          string: new Xi()
        };
      }
      function HO(a) {
        var o = ou(this, a).delete(a);
        return this.size -= o ? 1 : 0, o;
      }
      function YO(a) {
        return ou(this, a).get(a);
      }
      function qO(a) {
        return ou(this, a).has(a);
      }
      function VO(a, o) {
        var f = ou(this, a), g = f.size;
        return f.set(a, o), this.size += f.size == g ? 0 : 1, this;
      }
      Na.prototype.clear = zO, Na.prototype.delete = HO, Na.prototype.get = YO, Na.prototype.has = qO, Na.prototype.set = VO;
      function Qi(a) {
        var o = -1, f = a == null ? 0 : a.length;
        for (this.__data__ = new Na(); ++o < f; )
          this.add(a[o]);
      }
      function GO(a) {
        return this.__data__.set(a, p), this;
      }
      function KO(a) {
        return this.__data__.has(a);
      }
      Qi.prototype.add = Qi.prototype.push = GO, Qi.prototype.has = KO;
      function Yr(a) {
        var o = this.__data__ = new ka(a);
        this.size = o.size;
      }
      function ZO() {
        this.__data__ = new ka(), this.size = 0;
      }
      function XO(a) {
        var o = this.__data__, f = o.delete(a);
        return this.size = o.size, f;
      }
      function QO(a) {
        return this.__data__.get(a);
      }
      function JO(a) {
        return this.__data__.has(a);
      }
      function eS(a, o) {
        var f = this.__data__;
        if (f instanceof ka) {
          var g = f.__data__;
          if (!Ks || g.length < i - 1)
            return g.push([a, o]), this.size = ++f.size, this;
          f = this.__data__ = new Na(g);
        }
        return f.set(a, o), this.size = f.size, this;
      }
      Yr.prototype.clear = ZO, Yr.prototype.delete = XO, Yr.prototype.get = QO, Yr.prototype.has = JO, Yr.prototype.set = eS;
      function fv(a, o) {
        var f = ct(a), g = !f && ro(a), w = !f && !g && vi(a), A = !f && !g && !w && Zo(a), W = f || g || w || A, H = W ? uf(a.length, uO) : [], X = H.length;
        for (var _e in a)
          (o || Ft.call(a, _e)) && !(W && // Safari 9 has enumerable `arguments.length` in strict mode.
          (_e == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          w && (_e == "offset" || _e == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          A && (_e == "buffer" || _e == "byteLength" || _e == "byteOffset") || // Skip index properties.
          Ra(_e, X))) && H.push(_e);
        return H;
      }
      function pv(a) {
        var o = a.length;
        return o ? a[Tf(0, o - 1)] : n;
      }
      function tS(a, o) {
        return su(Kn(a), Ji(o, 0, a.length));
      }
      function nS(a) {
        return su(Kn(a));
      }
      function vf(a, o, f) {
        (f !== n && !Vr(a[o], f) || f === n && !(o in a)) && sa(a, o, f);
      }
      function Js(a, o, f) {
        var g = a[o];
        (!(Ft.call(a, o) && Vr(g, f)) || f === n && !(o in a)) && sa(a, o, f);
      }
      function Gc(a, o) {
        for (var f = a.length; f--; )
          if (Vr(a[f][0], o))
            return f;
        return -1;
      }
      function rS(a, o, f, g) {
        return pi(a, function(w, A, W) {
          o(g, w, f(w), W);
        }), g;
      }
      function hv(a, o) {
        return a && ca(o, Cn(o), a);
      }
      function aS(a, o) {
        return a && ca(o, Xn(o), a);
      }
      function sa(a, o, f) {
        o == "__proto__" && jc ? jc(a, o, {
          configurable: !0,
          enumerable: !0,
          value: f,
          writable: !0
        }) : a[o] = f;
      }
      function yf(a, o) {
        for (var f = -1, g = o.length, w = oe(g), A = a == null; ++f < g; )
          w[f] = A ? n : Jf(a, o[f]);
        return w;
      }
      function Ji(a, o, f) {
        return a === a && (f !== n && (a = a <= f ? a : f), o !== n && (a = a >= o ? a : o)), a;
      }
      function Tr(a, o, f, g, w, A) {
        var W, H = o & v, X = o & y, _e = o & b;
        if (f && (W = w ? f(a, g, w, A) : f(a)), W !== n)
          return W;
        if (!un(a))
          return a;
        var we = ct(a);
        if (we) {
          if (W = qS(a), !H)
            return Kn(a, W);
        } else {
          var xe = Rn(a), De = xe == G || xe == Z;
          if (vi(a))
            return $v(a, H);
          if (xe == ue || xe == ge || De && !w) {
            if (W = X || De ? {} : ry(a), !H)
              return X ? DS(a, aS(W, a)) : MS(a, hv(W, a));
          } else {
            if (!Zt[xe])
              return w ? a : {};
            W = VS(a, xe, H);
          }
        }
        A || (A = new Yr());
        var Ye = A.get(a);
        if (Ye)
          return Ye;
        A.set(a, W), Ay(a) ? a.forEach(function(Je) {
          W.add(Tr(Je, o, f, Je, a, A));
        }) : Ny(a) && a.forEach(function(Je, bt) {
          W.set(bt, Tr(Je, o, f, bt, a, A));
        });
        var tt = _e ? X ? $f : Ff : X ? Xn : Cn, ht = we ? n : tt(a);
        return ur(ht || a, function(Je, bt) {
          ht && (bt = Je, Je = a[bt]), Js(W, bt, Tr(Je, o, f, bt, a, A));
        }), W;
      }
      function iS(a) {
        var o = Cn(a);
        return function(f) {
          return mv(f, a, o);
        };
      }
      function mv(a, o, f) {
        var g = f.length;
        if (a == null)
          return !g;
        for (a = Gt(a); g--; ) {
          var w = f[g], A = o[w], W = a[w];
          if (W === n && !(w in a) || !A(W))
            return !1;
        }
        return !0;
      }
      function gv(a, o, f) {
        if (typeof a != "function")
          throw new Or(u);
        return ol(function() {
          a.apply(n, f);
        }, o);
      }
      function el(a, o, f, g) {
        var w = -1, A = Ic, W = !0, H = a.length, X = [], _e = o.length;
        if (!H)
          return X;
        f && (o = on(o, dr(f))), g ? (A = rf, W = !1) : o.length >= i && (A = Vs, W = !1, o = new Qi(o));
        e:
          for (; ++w < H; ) {
            var we = a[w], xe = f == null ? we : f(we);
            if (we = g || we !== 0 ? we : 0, W && xe === xe) {
              for (var De = _e; De--; )
                if (o[De] === xe)
                  continue e;
              X.push(we);
            } else A(o, xe, g) || X.push(we);
          }
        return X;
      }
      var pi = zv(la), vv = zv(_f, !0);
      function oS(a, o) {
        var f = !0;
        return pi(a, function(g, w, A) {
          return f = !!o(g, w, A), f;
        }), f;
      }
      function Kc(a, o, f) {
        for (var g = -1, w = a.length; ++g < w; ) {
          var A = a[g], W = o(A);
          if (W != null && (H === n ? W === W && !pr(W) : f(W, H)))
            var H = W, X = A;
        }
        return X;
      }
      function sS(a, o, f, g) {
        var w = a.length;
        for (f = ft(f), f < 0 && (f = -f > w ? 0 : w + f), g = g === n || g > w ? w : ft(g), g < 0 && (g += w), g = f > g ? 0 : My(g); f < g; )
          a[f++] = o;
        return a;
      }
      function yv(a, o) {
        var f = [];
        return pi(a, function(g, w, A) {
          o(g, w, A) && f.push(g);
        }), f;
      }
      function kn(a, o, f, g, w) {
        var A = -1, W = a.length;
        for (f || (f = KS), w || (w = []); ++A < W; ) {
          var H = a[A];
          o > 0 && f(H) ? o > 1 ? kn(H, o - 1, f, g, w) : ui(w, H) : g || (w[w.length] = H);
        }
        return w;
      }
      var bf = Hv(), bv = Hv(!0);
      function la(a, o) {
        return a && bf(a, o, Cn);
      }
      function _f(a, o) {
        return a && bv(a, o, Cn);
      }
      function Zc(a, o) {
        return ci(o, function(f) {
          return Ma(a[f]);
        });
      }
      function eo(a, o) {
        o = mi(o, a);
        for (var f = 0, g = o.length; a != null && f < g; )
          a = a[qr(o[f++])];
        return f && f == g ? a : n;
      }
      function _v(a, o, f) {
        var g = o(a);
        return ct(a) ? g : ui(g, f(a));
      }
      function Bn(a) {
        return a == null ? a === n ? ot : Q : Zi && Zi in Gt(a) ? zS(a) : nT(a);
      }
      function wf(a, o) {
        return a > o;
      }
      function lS(a, o) {
        return a != null && Ft.call(a, o);
      }
      function cS(a, o) {
        return a != null && o in Gt(a);
      }
      function uS(a, o, f) {
        return a >= An(o, f) && a < bn(o, f);
      }
      function Ef(a, o, f) {
        for (var g = f ? rf : Ic, w = a[0].length, A = a.length, W = A, H = oe(A), X = 1 / 0, _e = []; W--; ) {
          var we = a[W];
          W && o && (we = on(we, dr(o))), X = An(we.length, X), H[W] = !f && (o || w >= 120 && we.length >= 120) ? new Qi(W && we) : n;
        }
        we = a[0];
        var xe = -1, De = H[0];
        e:
          for (; ++xe < w && _e.length < X; ) {
            var Ye = we[xe], tt = o ? o(Ye) : Ye;
            if (Ye = f || Ye !== 0 ? Ye : 0, !(De ? Vs(De, tt) : g(_e, tt, f))) {
              for (W = A; --W; ) {
                var ht = H[W];
                if (!(ht ? Vs(ht, tt) : g(a[W], tt, f)))
                  continue e;
              }
              De && De.push(tt), _e.push(Ye);
            }
          }
        return _e;
      }
      function dS(a, o, f, g) {
        return la(a, function(w, A, W) {
          o(g, f(w), A, W);
        }), g;
      }
      function tl(a, o, f) {
        o = mi(o, a), a = sy(a, o);
        var g = a == null ? a : a[qr(kr(o))];
        return g == null ? n : cr(g, a, f);
      }
      function wv(a) {
        return dn(a) && Bn(a) == ge;
      }
      function fS(a) {
        return dn(a) && Bn(a) == nt;
      }
      function pS(a) {
        return dn(a) && Bn(a) == j;
      }
      function nl(a, o, f, g, w) {
        return a === o ? !0 : a == null || o == null || !dn(a) && !dn(o) ? a !== a && o !== o : hS(a, o, f, g, nl, w);
      }
      function hS(a, o, f, g, w, A) {
        var W = ct(a), H = ct(o), X = W ? Pe : Rn(a), _e = H ? Pe : Rn(o);
        X = X == ge ? ue : X, _e = _e == ge ? ue : _e;
        var we = X == ue, xe = _e == ue, De = X == _e;
        if (De && vi(a)) {
          if (!vi(o))
            return !1;
          W = !0, we = !1;
        }
        if (De && !we)
          return A || (A = new Yr()), W || Zo(a) ? ey(a, o, f, g, w, A) : US(a, o, X, f, g, w, A);
        if (!(f & _)) {
          var Ye = we && Ft.call(a, "__wrapped__"), tt = xe && Ft.call(o, "__wrapped__");
          if (Ye || tt) {
            var ht = Ye ? a.value() : a, Je = tt ? o.value() : o;
            return A || (A = new Yr()), w(ht, Je, f, g, A);
          }
        }
        return De ? (A || (A = new Yr()), jS(a, o, f, g, w, A)) : !1;
      }
      function mS(a) {
        return dn(a) && Rn(a) == le;
      }
      function xf(a, o, f, g) {
        var w = f.length, A = w, W = !g;
        if (a == null)
          return !A;
        for (a = Gt(a); w--; ) {
          var H = f[w];
          if (W && H[2] ? H[1] !== a[H[0]] : !(H[0] in a))
            return !1;
        }
        for (; ++w < A; ) {
          H = f[w];
          var X = H[0], _e = a[X], we = H[1];
          if (W && H[2]) {
            if (_e === n && !(X in a))
              return !1;
          } else {
            var xe = new Yr();
            if (g)
              var De = g(_e, we, X, a, o, xe);
            if (!(De === n ? nl(we, _e, _ | E, g, xe) : De))
              return !1;
          }
        }
        return !0;
      }
      function Ev(a) {
        if (!un(a) || XS(a))
          return !1;
        var o = Ma(a) ? mO : iC;
        return o.test(no(a));
      }
      function gS(a) {
        return dn(a) && Bn(a) == ae;
      }
      function vS(a) {
        return dn(a) && Rn(a) == Ee;
      }
      function yS(a) {
        return dn(a) && pu(a.length) && !!Jt[Bn(a)];
      }
      function xv(a) {
        return typeof a == "function" ? a : a == null ? Qn : typeof a == "object" ? ct(a) ? Sv(a[0], a[1]) : Ov(a) : qy(a);
      }
      function Cf(a) {
        if (!il(a))
          return wO(a);
        var o = [];
        for (var f in Gt(a))
          Ft.call(a, f) && f != "constructor" && o.push(f);
        return o;
      }
      function bS(a) {
        if (!un(a))
          return tT(a);
        var o = il(a), f = [];
        for (var g in a)
          g == "constructor" && (o || !Ft.call(a, g)) || f.push(g);
        return f;
      }
      function Of(a, o) {
        return a < o;
      }
      function Cv(a, o) {
        var f = -1, g = Zn(a) ? oe(a.length) : [];
        return pi(a, function(w, A, W) {
          g[++f] = o(w, A, W);
        }), g;
      }
      function Ov(a) {
        var o = Wf(a);
        return o.length == 1 && o[0][2] ? iy(o[0][0], o[0][1]) : function(f) {
          return f === a || xf(f, a, o);
        };
      }
      function Sv(a, o) {
        return jf(a) && ay(o) ? iy(qr(a), o) : function(f) {
          var g = Jf(f, a);
          return g === n && g === o ? ep(f, a) : nl(o, g, _ | E);
        };
      }
      function Xc(a, o, f, g, w) {
        a !== o && bf(o, function(A, W) {
          if (w || (w = new Yr()), un(A))
            _S(a, o, W, f, Xc, g, w);
          else {
            var H = g ? g(Hf(a, W), A, W + "", a, o, w) : n;
            H === n && (H = A), vf(a, W, H);
          }
        }, Xn);
      }
      function _S(a, o, f, g, w, A, W) {
        var H = Hf(a, f), X = Hf(o, f), _e = W.get(X);
        if (_e) {
          vf(a, f, _e);
          return;
        }
        var we = A ? A(H, X, f + "", a, o, W) : n, xe = we === n;
        if (xe) {
          var De = ct(X), Ye = !De && vi(X), tt = !De && !Ye && Zo(X);
          we = X, De || Ye || tt ? ct(H) ? we = H : pn(H) ? we = Kn(H) : Ye ? (xe = !1, we = $v(X, !0)) : tt ? (xe = !1, we = Bv(X, !0)) : we = [] : sl(X) || ro(X) ? (we = H, ro(H) ? we = Dy(H) : (!un(H) || Ma(H)) && (we = ry(X))) : xe = !1;
        }
        xe && (W.set(X, we), w(we, X, g, A, W), W.delete(X)), vf(a, f, we);
      }
      function Tv(a, o) {
        var f = a.length;
        if (f)
          return o += o < 0 ? f : 0, Ra(o, f) ? a[o] : n;
      }
      function Pv(a, o, f) {
        o.length ? o = on(o, function(A) {
          return ct(A) ? function(W) {
            return eo(W, A.length === 1 ? A[0] : A);
          } : A;
        }) : o = [Qn];
        var g = -1;
        o = on(o, dr(et()));
        var w = Cv(a, function(A, W, H) {
          var X = on(o, function(_e) {
            return _e(A);
          });
          return { criteria: X, index: ++g, value: A };
        });
        return VC(w, function(A, W) {
          return RS(A, W, f);
        });
      }
      function wS(a, o) {
        return kv(a, o, function(f, g) {
          return ep(a, g);
        });
      }
      function kv(a, o, f) {
        for (var g = -1, w = o.length, A = {}; ++g < w; ) {
          var W = o[g], H = eo(a, W);
          f(H, W) && rl(A, mi(W, a), H);
        }
        return A;
      }
      function ES(a) {
        return function(o) {
          return eo(o, a);
        };
      }
      function Sf(a, o, f, g) {
        var w = g ? qC : Bo, A = -1, W = o.length, H = a;
        for (a === o && (o = Kn(o)), f && (H = on(a, dr(f))); ++A < W; )
          for (var X = 0, _e = o[A], we = f ? f(_e) : _e; (X = w(H, we, X, g)) > -1; )
            H !== a && Uc.call(H, X, 1), Uc.call(a, X, 1);
        return a;
      }
      function Nv(a, o) {
        for (var f = a ? o.length : 0, g = f - 1; f--; ) {
          var w = o[f];
          if (f == g || w !== A) {
            var A = w;
            Ra(w) ? Uc.call(a, w, 1) : Nf(a, w);
          }
        }
        return a;
      }
      function Tf(a, o) {
        return a + Hc(uv() * (o - a + 1));
      }
      function xS(a, o, f, g) {
        for (var w = -1, A = bn(zc((o - a) / (f || 1)), 0), W = oe(A); A--; )
          W[g ? A : ++w] = a, a += f;
        return W;
      }
      function Pf(a, o) {
        var f = "";
        if (!a || o < 1 || o > be)
          return f;
        do
          o % 2 && (f += a), o = Hc(o / 2), o && (a += a);
        while (o);
        return f;
      }
      function mt(a, o) {
        return Yf(oy(a, o, Qn), a + "");
      }
      function CS(a) {
        return pv(Xo(a));
      }
      function OS(a, o) {
        var f = Xo(a);
        return su(f, Ji(o, 0, f.length));
      }
      function rl(a, o, f, g) {
        if (!un(a))
          return a;
        o = mi(o, a);
        for (var w = -1, A = o.length, W = A - 1, H = a; H != null && ++w < A; ) {
          var X = qr(o[w]), _e = f;
          if (X === "__proto__" || X === "constructor" || X === "prototype")
            return a;
          if (w != W) {
            var we = H[X];
            _e = g ? g(we, X, H) : n, _e === n && (_e = un(we) ? we : Ra(o[w + 1]) ? [] : {});
          }
          Js(H, X, _e), H = H[X];
        }
        return a;
      }
      var Iv = Yc ? function(a, o) {
        return Yc.set(a, o), a;
      } : Qn, SS = jc ? function(a, o) {
        return jc(a, "toString", {
          configurable: !0,
          enumerable: !1,
          value: np(o),
          writable: !0
        });
      } : Qn;
      function TS(a) {
        return su(Xo(a));
      }
      function Pr(a, o, f) {
        var g = -1, w = a.length;
        o < 0 && (o = -o > w ? 0 : w + o), f = f > w ? w : f, f < 0 && (f += w), w = o > f ? 0 : f - o >>> 0, o >>>= 0;
        for (var A = oe(w); ++g < w; )
          A[g] = a[g + o];
        return A;
      }
      function PS(a, o) {
        var f;
        return pi(a, function(g, w, A) {
          return f = o(g, w, A), !f;
        }), !!f;
      }
      function Qc(a, o, f) {
        var g = 0, w = a == null ? g : a.length;
        if (typeof o == "number" && o === o && w <= Se) {
          for (; g < w; ) {
            var A = g + w >>> 1, W = a[A];
            W !== null && !pr(W) && (f ? W <= o : W < o) ? g = A + 1 : w = A;
          }
          return w;
        }
        return kf(a, o, Qn, f);
      }
      function kf(a, o, f, g) {
        var w = 0, A = a == null ? 0 : a.length;
        if (A === 0)
          return 0;
        o = f(o);
        for (var W = o !== o, H = o === null, X = pr(o), _e = o === n; w < A; ) {
          var we = Hc((w + A) / 2), xe = f(a[we]), De = xe !== n, Ye = xe === null, tt = xe === xe, ht = pr(xe);
          if (W)
            var Je = g || tt;
          else _e ? Je = tt && (g || De) : H ? Je = tt && De && (g || !Ye) : X ? Je = tt && De && !Ye && (g || !ht) : Ye || ht ? Je = !1 : Je = g ? xe <= o : xe < o;
          Je ? w = we + 1 : A = we;
        }
        return An(A, Ce);
      }
      function Av(a, o) {
        for (var f = -1, g = a.length, w = 0, A = []; ++f < g; ) {
          var W = a[f], H = o ? o(W) : W;
          if (!f || !Vr(H, X)) {
            var X = H;
            A[w++] = W === 0 ? 0 : W;
          }
        }
        return A;
      }
      function Rv(a) {
        return typeof a == "number" ? a : pr(a) ? ie : +a;
      }
      function fr(a) {
        if (typeof a == "string")
          return a;
        if (ct(a))
          return on(a, fr) + "";
        if (pr(a))
          return dv ? dv.call(a) : "";
        var o = a + "";
        return o == "0" && 1 / a == -he ? "-0" : o;
      }
      function hi(a, o, f) {
        var g = -1, w = Ic, A = a.length, W = !0, H = [], X = H;
        if (f)
          W = !1, w = rf;
        else if (A >= i) {
          var _e = o ? null : BS(a);
          if (_e)
            return Rc(_e);
          W = !1, w = Vs, X = new Qi();
        } else
          X = o ? [] : H;
        e:
          for (; ++g < A; ) {
            var we = a[g], xe = o ? o(we) : we;
            if (we = f || we !== 0 ? we : 0, W && xe === xe) {
              for (var De = X.length; De--; )
                if (X[De] === xe)
                  continue e;
              o && X.push(xe), H.push(we);
            } else w(X, xe, f) || (X !== H && X.push(xe), H.push(we));
          }
        return H;
      }
      function Nf(a, o) {
        o = mi(o, a);
        var f = -1, g = o.length;
        if (!g)
          return !0;
        for (; ++f < g; ) {
          var w = qr(o[f]);
          if (w === "__proto__" && !Ft.call(a, "__proto__") || (w === "constructor" || w === "prototype") && f < g - 1)
            return !1;
        }
        var A = sy(a, o);
        return A == null || delete A[qr(kr(o))];
      }
      function Mv(a, o, f, g) {
        return rl(a, o, f(eo(a, o)), g);
      }
      function Jc(a, o, f, g) {
        for (var w = a.length, A = g ? w : -1; (g ? A-- : ++A < w) && o(a[A], A, a); )
          ;
        return f ? Pr(a, g ? 0 : A, g ? A + 1 : w) : Pr(a, g ? A + 1 : 0, g ? w : A);
      }
      function Dv(a, o) {
        var f = a;
        return f instanceof xt && (f = f.value()), af(o, function(g, w) {
          return w.func.apply(w.thisArg, ui([g], w.args));
        }, f);
      }
      function If(a, o, f) {
        var g = a.length;
        if (g < 2)
          return g ? hi(a[0]) : [];
        for (var w = -1, A = oe(g); ++w < g; )
          for (var W = a[w], H = -1; ++H < g; )
            H != w && (A[w] = el(A[w] || W, a[H], o, f));
        return hi(kn(A, 1), o, f);
      }
      function Lv(a, o, f) {
        for (var g = -1, w = a.length, A = o.length, W = {}; ++g < w; ) {
          var H = g < A ? o[g] : n;
          f(W, a[g], H);
        }
        return W;
      }
      function Af(a) {
        return pn(a) ? a : [];
      }
      function Rf(a) {
        return typeof a == "function" ? a : Qn;
      }
      function mi(a, o) {
        return ct(a) ? a : jf(a, o) ? [a] : dy($t(a));
      }
      var kS = mt;
      function gi(a, o, f) {
        var g = a.length;
        return f = f === n ? g : f, !o && f >= g ? a : Pr(a, o, f);
      }
      var Fv = gO || function(a) {
        return Pn.clearTimeout(a);
      };
      function $v(a, o) {
        if (o)
          return a.slice();
        var f = a.length, g = iv ? iv(f) : new a.constructor(f);
        return a.copy(g), g;
      }
      function Mf(a) {
        var o = new a.constructor(a.byteLength);
        return new Bc(o).set(new Bc(a)), o;
      }
      function NS(a, o) {
        var f = o ? Mf(a.buffer) : a.buffer;
        return new a.constructor(f, a.byteOffset, a.byteLength);
      }
      function IS(a) {
        var o = new a.constructor(a.source, wg.exec(a));
        return o.lastIndex = a.lastIndex, o;
      }
      function AS(a) {
        return Qs ? Gt(Qs.call(a)) : {};
      }
      function Bv(a, o) {
        var f = o ? Mf(a.buffer) : a.buffer;
        return new a.constructor(f, a.byteOffset, a.length);
      }
      function Wv(a, o) {
        if (a !== o) {
          var f = a !== n, g = a === null, w = a === a, A = pr(a), W = o !== n, H = o === null, X = o === o, _e = pr(o);
          if (!H && !_e && !A && a > o || A && W && X && !H && !_e || g && W && X || !f && X || !w)
            return 1;
          if (!g && !A && !_e && a < o || _e && f && w && !g && !A || H && f && w || !W && w || !X)
            return -1;
        }
        return 0;
      }
      function RS(a, o, f) {
        for (var g = -1, w = a.criteria, A = o.criteria, W = w.length, H = f.length; ++g < W; ) {
          var X = Wv(w[g], A[g]);
          if (X) {
            if (g >= H)
              return X;
            var _e = f[g];
            return X * (_e == "desc" ? -1 : 1);
          }
        }
        return a.index - o.index;
      }
      function Uv(a, o, f, g) {
        for (var w = -1, A = a.length, W = f.length, H = -1, X = o.length, _e = bn(A - W, 0), we = oe(X + _e), xe = !g; ++H < X; )
          we[H] = o[H];
        for (; ++w < W; )
          (xe || w < A) && (we[f[w]] = a[w]);
        for (; _e--; )
          we[H++] = a[w++];
        return we;
      }
      function jv(a, o, f, g) {
        for (var w = -1, A = a.length, W = -1, H = f.length, X = -1, _e = o.length, we = bn(A - H, 0), xe = oe(we + _e), De = !g; ++w < we; )
          xe[w] = a[w];
        for (var Ye = w; ++X < _e; )
          xe[Ye + X] = o[X];
        for (; ++W < H; )
          (De || w < A) && (xe[Ye + f[W]] = a[w++]);
        return xe;
      }
      function Kn(a, o) {
        var f = -1, g = a.length;
        for (o || (o = oe(g)); ++f < g; )
          o[f] = a[f];
        return o;
      }
      function ca(a, o, f, g) {
        var w = !f;
        f || (f = {});
        for (var A = -1, W = o.length; ++A < W; ) {
          var H = o[A], X = g ? g(f[H], a[H], H, f, a) : n;
          X === n && (X = a[H]), w ? sa(f, H, X) : Js(f, H, X);
        }
        return f;
      }
      function MS(a, o) {
        return ca(a, Uf(a), o);
      }
      function DS(a, o) {
        return ca(a, ty(a), o);
      }
      function eu(a, o) {
        return function(f, g) {
          var w = ct(f) ? WC : rS, A = o ? o() : {};
          return w(f, a, et(g, 2), A);
        };
      }
      function Vo(a) {
        return mt(function(o, f) {
          var g = -1, w = f.length, A = w > 1 ? f[w - 1] : n, W = w > 2 ? f[2] : n;
          for (A = a.length > 3 && typeof A == "function" ? (w--, A) : n, W && Wn(f[0], f[1], W) && (A = w < 3 ? n : A, w = 1), o = Gt(o); ++g < w; ) {
            var H = f[g];
            H && a(o, H, g, A);
          }
          return o;
        });
      }
      function zv(a, o) {
        return function(f, g) {
          if (f == null)
            return f;
          if (!Zn(f))
            return a(f, g);
          for (var w = f.length, A = o ? w : -1, W = Gt(f); (o ? A-- : ++A < w) && g(W[A], A, W) !== !1; )
            ;
          return f;
        };
      }
      function Hv(a) {
        return function(o, f, g) {
          for (var w = -1, A = Gt(o), W = g(o), H = W.length; H--; ) {
            var X = W[a ? H : ++w];
            if (f(A[X], X, A) === !1)
              break;
          }
          return o;
        };
      }
      function LS(a, o, f) {
        var g = o & R, w = al(a);
        function A() {
          var W = this && this !== Pn && this instanceof A ? w : a;
          return W.apply(g ? f : this, arguments);
        }
        return A;
      }
      function Yv(a) {
        return function(o) {
          o = $t(o);
          var f = Wo(o) ? Hr(o) : n, g = f ? f[0] : o.charAt(0), w = f ? gi(f, 1).join("") : o.slice(1);
          return g[a]() + w;
        };
      }
      function Go(a) {
        return function(o) {
          return af(Hy(zy(o).replace(SC, "")), a, "");
        };
      }
      function al(a) {
        return function() {
          var o = arguments;
          switch (o.length) {
            case 0:
              return new a();
            case 1:
              return new a(o[0]);
            case 2:
              return new a(o[0], o[1]);
            case 3:
              return new a(o[0], o[1], o[2]);
            case 4:
              return new a(o[0], o[1], o[2], o[3]);
            case 5:
              return new a(o[0], o[1], o[2], o[3], o[4]);
            case 6:
              return new a(o[0], o[1], o[2], o[3], o[4], o[5]);
            case 7:
              return new a(o[0], o[1], o[2], o[3], o[4], o[5], o[6]);
          }
          var f = qo(a.prototype), g = a.apply(f, o);
          return un(g) ? g : f;
        };
      }
      function FS(a, o, f) {
        var g = al(a);
        function w() {
          for (var A = arguments.length, W = oe(A), H = A, X = Ko(w); H--; )
            W[H] = arguments[H];
          var _e = A < 3 && W[0] !== X && W[A - 1] !== X ? [] : di(W, X);
          if (A -= _e.length, A < f)
            return Zv(
              a,
              o,
              tu,
              w.placeholder,
              n,
              W,
              _e,
              n,
              n,
              f - A
            );
          var we = this && this !== Pn && this instanceof w ? g : a;
          return cr(we, this, W);
        }
        return w;
      }
      function qv(a) {
        return function(o, f, g) {
          var w = Gt(o);
          if (!Zn(o)) {
            var A = et(f, 3);
            o = Cn(o), f = function(H) {
              return A(w[H], H, w);
            };
          }
          var W = a(o, f, g);
          return W > -1 ? w[A ? o[W] : W] : n;
        };
      }
      function Vv(a) {
        return Aa(function(o) {
          var f = o.length, g = f, w = Sr.prototype.thru;
          for (a && o.reverse(); g--; ) {
            var A = o[g];
            if (typeof A != "function")
              throw new Or(u);
            if (w && !W && iu(A) == "wrapper")
              var W = new Sr([], !0);
          }
          for (g = W ? g : f; ++g < f; ) {
            A = o[g];
            var H = iu(A), X = H == "wrapper" ? Bf(A) : n;
            X && zf(X[0]) && X[1] == (P | I | S | k) && !X[4].length && X[9] == 1 ? W = W[iu(X[0])].apply(W, X[3]) : W = A.length == 1 && zf(A) ? W[H]() : W.thru(A);
          }
          return function() {
            var _e = arguments, we = _e[0];
            if (W && _e.length == 1 && ct(we))
              return W.plant(we).value();
            for (var xe = 0, De = f ? o[xe].apply(this, _e) : we; ++xe < f; )
              De = o[xe].call(this, De);
            return De;
          };
        });
      }
      function tu(a, o, f, g, w, A, W, H, X, _e) {
        var we = o & P, xe = o & R, De = o & F, Ye = o & (I | O), tt = o & B, ht = De ? n : al(a);
        function Je() {
          for (var bt = arguments.length, St = oe(bt), hr = bt; hr--; )
            St[hr] = arguments[hr];
          if (Ye)
            var Un = Ko(Je), mr = KC(St, Un);
          if (g && (St = Uv(St, g, w, Ye)), A && (St = jv(St, A, W, Ye)), bt -= mr, Ye && bt < _e) {
            var hn = di(St, Un);
            return Zv(
              a,
              o,
              tu,
              Je.placeholder,
              f,
              St,
              hn,
              H,
              X,
              _e - bt
            );
          }
          var Gr = xe ? f : this, La = De ? Gr[a] : a;
          return bt = St.length, H ? St = rT(St, H) : tt && bt > 1 && St.reverse(), we && X < bt && (St.length = X), this && this !== Pn && this instanceof Je && (La = ht || al(La)), La.apply(Gr, St);
        }
        return Je;
      }
      function Gv(a, o) {
        return function(f, g) {
          return dS(f, a, o(g), {});
        };
      }
      function nu(a, o) {
        return function(f, g) {
          var w;
          if (f === n && g === n)
            return o;
          if (f !== n && (w = f), g !== n) {
            if (w === n)
              return g;
            typeof f == "string" || typeof g == "string" ? (f = fr(f), g = fr(g)) : (f = Rv(f), g = Rv(g)), w = a(f, g);
          }
          return w;
        };
      }
      function Df(a) {
        return Aa(function(o) {
          return o = on(o, dr(et())), mt(function(f) {
            var g = this;
            return a(o, function(w) {
              return cr(w, g, f);
            });
          });
        });
      }
      function ru(a, o) {
        o = o === n ? " " : fr(o);
        var f = o.length;
        if (f < 2)
          return f ? Pf(o, a) : o;
        var g = Pf(o, zc(a / Uo(o)));
        return Wo(o) ? gi(Hr(g), 0, a).join("") : g.slice(0, a);
      }
      function $S(a, o, f, g) {
        var w = o & R, A = al(a);
        function W() {
          for (var H = -1, X = arguments.length, _e = -1, we = g.length, xe = oe(we + X), De = this && this !== Pn && this instanceof W ? A : a; ++_e < we; )
            xe[_e] = g[_e];
          for (; X--; )
            xe[_e++] = arguments[++H];
          return cr(De, w ? f : this, xe);
        }
        return W;
      }
      function Kv(a) {
        return function(o, f, g) {
          return g && typeof g != "number" && Wn(o, f, g) && (f = g = n), o = Da(o), f === n ? (f = o, o = 0) : f = Da(f), g = g === n ? o < f ? 1 : -1 : Da(g), xS(o, f, g, a);
        };
      }
      function au(a) {
        return function(o, f) {
          return typeof o == "string" && typeof f == "string" || (o = Nr(o), f = Nr(f)), a(o, f);
        };
      }
      function Zv(a, o, f, g, w, A, W, H, X, _e) {
        var we = o & I, xe = we ? W : n, De = we ? n : W, Ye = we ? A : n, tt = we ? n : A;
        o |= we ? S : x, o &= ~(we ? x : S), o & C || (o &= -4);
        var ht = [
          a,
          o,
          w,
          Ye,
          xe,
          tt,
          De,
          H,
          X,
          _e
        ], Je = f.apply(n, ht);
        return zf(a) && ly(Je, ht), Je.placeholder = g, cy(Je, a, o);
      }
      function Lf(a) {
        var o = yn[a];
        return function(f, g) {
          if (f = Nr(f), g = g == null ? 0 : An(ft(g), 292), g && cv(f)) {
            var w = ($t(f) + "e").split("e"), A = o(w[0] + "e" + (+w[1] + g));
            return w = ($t(A) + "e").split("e"), +(w[0] + "e" + (+w[1] - g));
          }
          return o(f);
        };
      }
      var BS = Ho && 1 / Rc(new Ho([, -0]))[1] == he ? function(a) {
        return new Ho(a);
      } : ip;
      function Xv(a) {
        return function(o) {
          var f = Rn(o);
          return f == le ? ff(o) : f == Ee ? nO(o) : GC(o, a(o));
        };
      }
      function Ia(a, o, f, g, w, A, W, H) {
        var X = o & F;
        if (!X && typeof a != "function")
          throw new Or(u);
        var _e = g ? g.length : 0;
        if (_e || (o &= -97, g = w = n), W = W === n ? W : bn(ft(W), 0), H = H === n ? H : ft(H), _e -= w ? w.length : 0, o & x) {
          var we = g, xe = w;
          g = w = n;
        }
        var De = X ? n : Bf(a), Ye = [
          a,
          o,
          f,
          g,
          w,
          we,
          xe,
          A,
          W,
          H
        ];
        if (De && eT(Ye, De), a = Ye[0], o = Ye[1], f = Ye[2], g = Ye[3], w = Ye[4], H = Ye[9] = Ye[9] === n ? X ? 0 : a.length : bn(Ye[9] - _e, 0), !H && o & (I | O) && (o &= -25), !o || o == R)
          var tt = LS(a, o, f);
        else o == I || o == O ? tt = FS(a, o, H) : (o == S || o == (R | S)) && !w.length ? tt = $S(a, o, f, g) : tt = tu.apply(n, Ye);
        var ht = De ? Iv : ly;
        return cy(ht(tt, Ye), a, o);
      }
      function Qv(a, o, f, g) {
        return a === n || Vr(a, zo[f]) && !Ft.call(g, f) ? o : a;
      }
      function Jv(a, o, f, g, w, A) {
        return un(a) && un(o) && (A.set(o, a), Xc(a, o, n, Jv, A), A.delete(o)), a;
      }
      function WS(a) {
        return sl(a) ? n : a;
      }
      function ey(a, o, f, g, w, A) {
        var W = f & _, H = a.length, X = o.length;
        if (H != X && !(W && X > H))
          return !1;
        var _e = A.get(a), we = A.get(o);
        if (_e && we)
          return _e == o && we == a;
        var xe = -1, De = !0, Ye = f & E ? new Qi() : n;
        for (A.set(a, o), A.set(o, a); ++xe < H; ) {
          var tt = a[xe], ht = o[xe];
          if (g)
            var Je = W ? g(ht, tt, xe, o, a, A) : g(tt, ht, xe, a, o, A);
          if (Je !== n) {
            if (Je)
              continue;
            De = !1;
            break;
          }
          if (Ye) {
            if (!of(o, function(bt, St) {
              if (!Vs(Ye, St) && (tt === bt || w(tt, bt, f, g, A)))
                return Ye.push(St);
            })) {
              De = !1;
              break;
            }
          } else if (!(tt === ht || w(tt, ht, f, g, A))) {
            De = !1;
            break;
          }
        }
        return A.delete(a), A.delete(o), De;
      }
      function US(a, o, f, g, w, A, W) {
        switch (f) {
          case Ge:
            if (a.byteLength != o.byteLength || a.byteOffset != o.byteOffset)
              return !1;
            a = a.buffer, o = o.buffer;
          case nt:
            return !(a.byteLength != o.byteLength || !A(new Bc(a), new Bc(o)));
          case U:
          case j:
          case fe:
            return Vr(+a, +o);
          case D:
            return a.name == o.name && a.message == o.message;
          case ae:
          case Le:
            return a == o + "";
          case le:
            var H = ff;
          case Ee:
            var X = g & _;
            if (H || (H = Rc), a.size != o.size && !X)
              return !1;
            var _e = W.get(a);
            if (_e)
              return _e == o;
            g |= E, W.set(a, o);
            var we = ey(H(a), H(o), g, w, A, W);
            return W.delete(a), we;
          case Fe:
            if (Qs)
              return Qs.call(a) == Qs.call(o);
        }
        return !1;
      }
      function jS(a, o, f, g, w, A) {
        var W = f & _, H = Ff(a), X = H.length, _e = Ff(o), we = _e.length;
        if (X != we && !W)
          return !1;
        for (var xe = X; xe--; ) {
          var De = H[xe];
          if (!(W ? De in o : Ft.call(o, De)))
            return !1;
        }
        var Ye = A.get(a), tt = A.get(o);
        if (Ye && tt)
          return Ye == o && tt == a;
        var ht = !0;
        A.set(a, o), A.set(o, a);
        for (var Je = W; ++xe < X; ) {
          De = H[xe];
          var bt = a[De], St = o[De];
          if (g)
            var hr = W ? g(St, bt, De, o, a, A) : g(bt, St, De, a, o, A);
          if (!(hr === n ? bt === St || w(bt, St, f, g, A) : hr)) {
            ht = !1;
            break;
          }
          Je || (Je = De == "constructor");
        }
        if (ht && !Je) {
          var Un = a.constructor, mr = o.constructor;
          Un != mr && "constructor" in a && "constructor" in o && !(typeof Un == "function" && Un instanceof Un && typeof mr == "function" && mr instanceof mr) && (ht = !1);
        }
        return A.delete(a), A.delete(o), ht;
      }
      function Aa(a) {
        return Yf(oy(a, n, my), a + "");
      }
      function Ff(a) {
        return _v(a, Cn, Uf);
      }
      function $f(a) {
        return _v(a, Xn, ty);
      }
      var Bf = Yc ? function(a) {
        return Yc.get(a);
      } : ip;
      function iu(a) {
        for (var o = a.name + "", f = Yo[o], g = Ft.call(Yo, o) ? f.length : 0; g--; ) {
          var w = f[g], A = w.func;
          if (A == null || A == a)
            return w.name;
        }
        return o;
      }
      function Ko(a) {
        var o = Ft.call(T, "placeholder") ? T : a;
        return o.placeholder;
      }
      function et() {
        var a = T.iteratee || rp;
        return a = a === rp ? xv : a, arguments.length ? a(arguments[0], arguments[1]) : a;
      }
      function ou(a, o) {
        var f = a.__data__;
        return ZS(o) ? f[typeof o == "string" ? "string" : "hash"] : f.map;
      }
      function Wf(a) {
        for (var o = Cn(a), f = o.length; f--; ) {
          var g = o[f], w = a[g];
          o[f] = [g, w, ay(w)];
        }
        return o;
      }
      function to(a, o) {
        var f = JC(a, o);
        return Ev(f) ? f : n;
      }
      function zS(a) {
        var o = Ft.call(a, Zi), f = a[Zi];
        try {
          a[Zi] = n;
          var g = !0;
        } catch {
        }
        var w = Fc.call(a);
        return g && (o ? a[Zi] = f : delete a[Zi]), w;
      }
      var Uf = hf ? function(a) {
        return a == null ? [] : (a = Gt(a), ci(hf(a), function(o) {
          return sv.call(a, o);
        }));
      } : op, ty = hf ? function(a) {
        for (var o = []; a; )
          ui(o, Uf(a)), a = Wc(a);
        return o;
      } : op, Rn = Bn;
      (mf && Rn(new mf(new ArrayBuffer(1))) != Ge || Ks && Rn(new Ks()) != le || gf && Rn(gf.resolve()) != te || Ho && Rn(new Ho()) != Ee || Zs && Rn(new Zs()) != qe) && (Rn = function(a) {
        var o = Bn(a), f = o == ue ? a.constructor : n, g = f ? no(f) : "";
        if (g)
          switch (g) {
            case OO:
              return Ge;
            case SO:
              return le;
            case TO:
              return te;
            case PO:
              return Ee;
            case kO:
              return qe;
          }
        return o;
      });
      function HS(a, o, f) {
        for (var g = -1, w = f.length; ++g < w; ) {
          var A = f[g], W = A.size;
          switch (A.type) {
            case "drop":
              a += W;
              break;
            case "dropRight":
              o -= W;
              break;
            case "take":
              o = An(o, a + W);
              break;
            case "takeRight":
              a = bn(a, o - W);
              break;
          }
        }
        return { start: a, end: o };
      }
      function YS(a) {
        var o = a.match(Qx);
        return o ? o[1].split(Jx) : [];
      }
      function ny(a, o, f) {
        o = mi(o, a);
        for (var g = -1, w = o.length, A = !1; ++g < w; ) {
          var W = qr(o[g]);
          if (!(A = a != null && f(a, W)))
            break;
          a = a[W];
        }
        return A || ++g != w ? A : (w = a == null ? 0 : a.length, !!w && pu(w) && Ra(W, w) && (ct(a) || ro(a)));
      }
      function qS(a) {
        var o = a.length, f = new a.constructor(o);
        return o && typeof a[0] == "string" && Ft.call(a, "index") && (f.index = a.index, f.input = a.input), f;
      }
      function ry(a) {
        return typeof a.constructor == "function" && !il(a) ? qo(Wc(a)) : {};
      }
      function VS(a, o, f) {
        var g = a.constructor;
        switch (o) {
          case nt:
            return Mf(a);
          case U:
          case j:
            return new g(+a);
          case Ge:
            return NS(a, f);
          case Ze:
          case kt:
          case ye:
          case Nt:
          case It:
          case dt:
          case Qe:
          case Vt:
          case $e:
            return Bv(a, f);
          case le:
            return new g();
          case fe:
          case Le:
            return new g(a);
          case ae:
            return IS(a);
          case Ee:
            return new g();
          case Fe:
            return AS(a);
        }
      }
      function GS(a, o) {
        var f = o.length;
        if (!f)
          return a;
        var g = f - 1;
        return o[g] = (f > 1 ? "& " : "") + o[g], o = o.join(f > 2 ? ", " : " "), a.replace(Xx, `{
/* [wrapped with ` + o + `] */
`);
      }
      function KS(a) {
        return ct(a) || ro(a) || !!(lv && a && a[lv]);
      }
      function Ra(a, o) {
        var f = typeof a;
        return o = o ?? be, !!o && (f == "number" || f != "symbol" && sC.test(a)) && a > -1 && a % 1 == 0 && a < o;
      }
      function Wn(a, o, f) {
        if (!un(f))
          return !1;
        var g = typeof o;
        return (g == "number" ? Zn(f) && Ra(o, f.length) : g == "string" && o in f) ? Vr(f[o], a) : !1;
      }
      function jf(a, o) {
        if (ct(a))
          return !1;
        var f = typeof a;
        return f == "number" || f == "symbol" || f == "boolean" || a == null || pr(a) ? !0 : Vx.test(a) || !qx.test(a) || o != null && a in Gt(o);
      }
      function ZS(a) {
        var o = typeof a;
        return o == "string" || o == "number" || o == "symbol" || o == "boolean" ? a !== "__proto__" : a === null;
      }
      function zf(a) {
        var o = iu(a), f = T[o];
        if (typeof f != "function" || !(o in xt.prototype))
          return !1;
        if (a === f)
          return !0;
        var g = Bf(f);
        return !!g && a === g[0];
      }
      function XS(a) {
        return !!av && av in a;
      }
      var QS = Dc ? Ma : sp;
      function il(a) {
        var o = a && a.constructor, f = typeof o == "function" && o.prototype || zo;
        return a === f;
      }
      function ay(a) {
        return a === a && !un(a);
      }
      function iy(a, o) {
        return function(f) {
          return f == null ? !1 : f[a] === o && (o !== n || a in Gt(f));
        };
      }
      function JS(a) {
        var o = du(a, function(g) {
          return f.size === h && f.clear(), g;
        }), f = o.cache;
        return o;
      }
      function eT(a, o) {
        var f = a[1], g = o[1], w = f | g, A = w < (R | F | P), W = g == P && f == I || g == P && f == k && a[7].length <= o[8] || g == (P | k) && o[7].length <= o[8] && f == I;
        if (!(A || W))
          return a;
        g & R && (a[2] = o[2], w |= f & R ? 0 : C);
        var H = o[3];
        if (H) {
          var X = a[3];
          a[3] = X ? Uv(X, H, o[4]) : H, a[4] = X ? di(a[3], m) : o[4];
        }
        return H = o[5], H && (X = a[5], a[5] = X ? jv(X, H, o[6]) : H, a[6] = X ? di(a[5], m) : o[6]), H = o[7], H && (a[7] = H), g & P && (a[8] = a[8] == null ? o[8] : An(a[8], o[8])), a[9] == null && (a[9] = o[9]), a[0] = o[0], a[1] = w, a;
      }
      function tT(a) {
        var o = [];
        if (a != null)
          for (var f in Gt(a))
            o.push(f);
        return o;
      }
      function nT(a) {
        return Fc.call(a);
      }
      function oy(a, o, f) {
        return o = bn(o === n ? a.length - 1 : o, 0), function() {
          for (var g = arguments, w = -1, A = bn(g.length - o, 0), W = oe(A); ++w < A; )
            W[w] = g[o + w];
          w = -1;
          for (var H = oe(o + 1); ++w < o; )
            H[w] = g[w];
          return H[o] = f(W), cr(a, this, H);
        };
      }
      function sy(a, o) {
        return o.length < 2 ? a : eo(a, Pr(o, 0, -1));
      }
      function rT(a, o) {
        for (var f = a.length, g = An(o.length, f), w = Kn(a); g--; ) {
          var A = o[g];
          a[g] = Ra(A, f) ? w[A] : n;
        }
        return a;
      }
      function Hf(a, o) {
        if (!(o === "constructor" && typeof a[o] == "function") && o != "__proto__")
          return a[o];
      }
      var ly = uy(Iv), ol = yO || function(a, o) {
        return Pn.setTimeout(a, o);
      }, Yf = uy(SS);
      function cy(a, o, f) {
        var g = o + "";
        return Yf(a, GS(g, aT(YS(g), f)));
      }
      function uy(a) {
        var o = 0, f = 0;
        return function() {
          var g = EO(), w = re - (g - f);
          if (f = g, w > 0) {
            if (++o >= z)
              return arguments[0];
          } else
            o = 0;
          return a.apply(n, arguments);
        };
      }
      function su(a, o) {
        var f = -1, g = a.length, w = g - 1;
        for (o = o === n ? g : o; ++f < o; ) {
          var A = Tf(f, w), W = a[A];
          a[A] = a[f], a[f] = W;
        }
        return a.length = o, a;
      }
      var dy = JS(function(a) {
        var o = [];
        return a.charCodeAt(0) === 46 && o.push(""), a.replace(Gx, function(f, g, w, A) {
          o.push(w ? A.replace(tC, "$1") : g || f);
        }), o;
      });
      function qr(a) {
        if (typeof a == "string" || pr(a))
          return a;
        var o = a + "";
        return o == "0" && 1 / a == -he ? "-0" : o;
      }
      function no(a) {
        if (a != null) {
          try {
            return Lc.call(a);
          } catch {
          }
          try {
            return a + "";
          } catch {
          }
        }
        return "";
      }
      function aT(a, o) {
        return ur(Te, function(f) {
          var g = "_." + f[0];
          o & f[1] && !Ic(a, g) && a.push(g);
        }), a.sort();
      }
      function fy(a) {
        if (a instanceof xt)
          return a.clone();
        var o = new Sr(a.__wrapped__, a.__chain__);
        return o.__actions__ = Kn(a.__actions__), o.__index__ = a.__index__, o.__values__ = a.__values__, o;
      }
      function iT(a, o, f) {
        (f ? Wn(a, o, f) : o === n) ? o = 1 : o = bn(ft(o), 0);
        var g = a == null ? 0 : a.length;
        if (!g || o < 1)
          return [];
        for (var w = 0, A = 0, W = oe(zc(g / o)); w < g; )
          W[A++] = Pr(a, w, w += o);
        return W;
      }
      function oT(a) {
        for (var o = -1, f = a == null ? 0 : a.length, g = 0, w = []; ++o < f; ) {
          var A = a[o];
          A && (w[g++] = A);
        }
        return w;
      }
      function sT() {
        var a = arguments.length;
        if (!a)
          return [];
        for (var o = oe(a - 1), f = arguments[0], g = a; g--; )
          o[g - 1] = arguments[g];
        return ui(ct(f) ? Kn(f) : [f], kn(o, 1));
      }
      var lT = mt(function(a, o) {
        return pn(a) ? el(a, kn(o, 1, pn, !0)) : [];
      }), cT = mt(function(a, o) {
        var f = kr(o);
        return pn(f) && (f = n), pn(a) ? el(a, kn(o, 1, pn, !0), et(f, 2)) : [];
      }), uT = mt(function(a, o) {
        var f = kr(o);
        return pn(f) && (f = n), pn(a) ? el(a, kn(o, 1, pn, !0), n, f) : [];
      });
      function dT(a, o, f) {
        var g = a == null ? 0 : a.length;
        return g ? (o = f || o === n ? 1 : ft(o), Pr(a, o < 0 ? 0 : o, g)) : [];
      }
      function fT(a, o, f) {
        var g = a == null ? 0 : a.length;
        return g ? (o = f || o === n ? 1 : ft(o), o = g - o, Pr(a, 0, o < 0 ? 0 : o)) : [];
      }
      function pT(a, o) {
        return a && a.length ? Jc(a, et(o, 3), !0, !0) : [];
      }
      function hT(a, o) {
        return a && a.length ? Jc(a, et(o, 3), !0) : [];
      }
      function mT(a, o, f, g) {
        var w = a == null ? 0 : a.length;
        return w ? (f && typeof f != "number" && Wn(a, o, f) && (f = 0, g = w), sS(a, o, f, g)) : [];
      }
      function py(a, o, f) {
        var g = a == null ? 0 : a.length;
        if (!g)
          return -1;
        var w = f == null ? 0 : ft(f);
        return w < 0 && (w = bn(g + w, 0)), Ac(a, et(o, 3), w);
      }
      function hy(a, o, f) {
        var g = a == null ? 0 : a.length;
        if (!g)
          return -1;
        var w = g - 1;
        return f !== n && (w = ft(f), w = f < 0 ? bn(g + w, 0) : An(w, g - 1)), Ac(a, et(o, 3), w, !0);
      }
      function my(a) {
        var o = a == null ? 0 : a.length;
        return o ? kn(a, 1) : [];
      }
      function gT(a) {
        var o = a == null ? 0 : a.length;
        return o ? kn(a, he) : [];
      }
      function vT(a, o) {
        var f = a == null ? 0 : a.length;
        return f ? (o = o === n ? 1 : ft(o), kn(a, o)) : [];
      }
      function yT(a) {
        for (var o = -1, f = a == null ? 0 : a.length, g = {}; ++o < f; ) {
          var w = a[o];
          sa(g, w[0], w[1]);
        }
        return g;
      }
      function gy(a) {
        return a && a.length ? a[0] : n;
      }
      function bT(a, o, f) {
        var g = a == null ? 0 : a.length;
        if (!g)
          return -1;
        var w = f == null ? 0 : ft(f);
        return w < 0 && (w = bn(g + w, 0)), Bo(a, o, w);
      }
      function _T(a) {
        var o = a == null ? 0 : a.length;
        return o ? Pr(a, 0, -1) : [];
      }
      var wT = mt(function(a) {
        var o = on(a, Af);
        return o.length && o[0] === a[0] ? Ef(o) : [];
      }), ET = mt(function(a) {
        var o = kr(a), f = on(a, Af);
        return o === kr(f) ? o = n : f.pop(), f.length && f[0] === a[0] ? Ef(f, et(o, 2)) : [];
      }), xT = mt(function(a) {
        var o = kr(a), f = on(a, Af);
        return o = typeof o == "function" ? o : n, o && f.pop(), f.length && f[0] === a[0] ? Ef(f, n, o) : [];
      });
      function CT(a, o) {
        return a == null ? "" : _O.call(a, o);
      }
      function kr(a) {
        var o = a == null ? 0 : a.length;
        return o ? a[o - 1] : n;
      }
      function OT(a, o, f) {
        var g = a == null ? 0 : a.length;
        if (!g)
          return -1;
        var w = g;
        return f !== n && (w = ft(f), w = w < 0 ? bn(g + w, 0) : An(w, g - 1)), o === o ? aO(a, o, w) : Ac(a, Zg, w, !0);
      }
      function ST(a, o) {
        return a && a.length ? Tv(a, ft(o)) : n;
      }
      var TT = mt(vy);
      function vy(a, o) {
        return a && a.length && o && o.length ? Sf(a, o) : a;
      }
      function PT(a, o, f) {
        return a && a.length && o && o.length ? Sf(a, o, et(f, 2)) : a;
      }
      function kT(a, o, f) {
        return a && a.length && o && o.length ? Sf(a, o, n, f) : a;
      }
      var NT = Aa(function(a, o) {
        var f = a == null ? 0 : a.length, g = yf(a, o);
        return Nv(a, on(o, function(w) {
          return Ra(w, f) ? +w : w;
        }).sort(Wv)), g;
      });
      function IT(a, o) {
        var f = [];
        if (!(a && a.length))
          return f;
        var g = -1, w = [], A = a.length;
        for (o = et(o, 3); ++g < A; ) {
          var W = a[g];
          o(W, g, a) && (f.push(W), w.push(g));
        }
        return Nv(a, w), f;
      }
      function qf(a) {
        return a == null ? a : CO.call(a);
      }
      function AT(a, o, f) {
        var g = a == null ? 0 : a.length;
        return g ? (f && typeof f != "number" && Wn(a, o, f) ? (o = 0, f = g) : (o = o == null ? 0 : ft(o), f = f === n ? g : ft(f)), Pr(a, o, f)) : [];
      }
      function RT(a, o) {
        return Qc(a, o);
      }
      function MT(a, o, f) {
        return kf(a, o, et(f, 2));
      }
      function DT(a, o) {
        var f = a == null ? 0 : a.length;
        if (f) {
          var g = Qc(a, o);
          if (g < f && Vr(a[g], o))
            return g;
        }
        return -1;
      }
      function LT(a, o) {
        return Qc(a, o, !0);
      }
      function FT(a, o, f) {
        return kf(a, o, et(f, 2), !0);
      }
      function $T(a, o) {
        var f = a == null ? 0 : a.length;
        if (f) {
          var g = Qc(a, o, !0) - 1;
          if (Vr(a[g], o))
            return g;
        }
        return -1;
      }
      function BT(a) {
        return a && a.length ? Av(a) : [];
      }
      function WT(a, o) {
        return a && a.length ? Av(a, et(o, 2)) : [];
      }
      function UT(a) {
        var o = a == null ? 0 : a.length;
        return o ? Pr(a, 1, o) : [];
      }
      function jT(a, o, f) {
        return a && a.length ? (o = f || o === n ? 1 : ft(o), Pr(a, 0, o < 0 ? 0 : o)) : [];
      }
      function zT(a, o, f) {
        var g = a == null ? 0 : a.length;
        return g ? (o = f || o === n ? 1 : ft(o), o = g - o, Pr(a, o < 0 ? 0 : o, g)) : [];
      }
      function HT(a, o) {
        return a && a.length ? Jc(a, et(o, 3), !1, !0) : [];
      }
      function YT(a, o) {
        return a && a.length ? Jc(a, et(o, 3)) : [];
      }
      var qT = mt(function(a) {
        return hi(kn(a, 1, pn, !0));
      }), VT = mt(function(a) {
        var o = kr(a);
        return pn(o) && (o = n), hi(kn(a, 1, pn, !0), et(o, 2));
      }), GT = mt(function(a) {
        var o = kr(a);
        return o = typeof o == "function" ? o : n, hi(kn(a, 1, pn, !0), n, o);
      });
      function KT(a) {
        return a && a.length ? hi(a) : [];
      }
      function ZT(a, o) {
        return a && a.length ? hi(a, et(o, 2)) : [];
      }
      function XT(a, o) {
        return o = typeof o == "function" ? o : n, a && a.length ? hi(a, n, o) : [];
      }
      function Vf(a) {
        if (!(a && a.length))
          return [];
        var o = 0;
        return a = ci(a, function(f) {
          if (pn(f))
            return o = bn(f.length, o), !0;
        }), uf(o, function(f) {
          return on(a, sf(f));
        });
      }
      function yy(a, o) {
        if (!(a && a.length))
          return [];
        var f = Vf(a);
        return o == null ? f : on(f, function(g) {
          return cr(o, n, g);
        });
      }
      var QT = mt(function(a, o) {
        return pn(a) ? el(a, o) : [];
      }), JT = mt(function(a) {
        return If(ci(a, pn));
      }), eP = mt(function(a) {
        var o = kr(a);
        return pn(o) && (o = n), If(ci(a, pn), et(o, 2));
      }), tP = mt(function(a) {
        var o = kr(a);
        return o = typeof o == "function" ? o : n, If(ci(a, pn), n, o);
      }), nP = mt(Vf);
      function rP(a, o) {
        return Lv(a || [], o || [], Js);
      }
      function aP(a, o) {
        return Lv(a || [], o || [], rl);
      }
      var iP = mt(function(a) {
        var o = a.length, f = o > 1 ? a[o - 1] : n;
        return f = typeof f == "function" ? (a.pop(), f) : n, yy(a, f);
      });
      function by(a) {
        var o = T(a);
        return o.__chain__ = !0, o;
      }
      function oP(a, o) {
        return o(a), a;
      }
      function lu(a, o) {
        return o(a);
      }
      var sP = Aa(function(a) {
        var o = a.length, f = o ? a[0] : 0, g = this.__wrapped__, w = function(A) {
          return yf(A, a);
        };
        return o > 1 || this.__actions__.length || !(g instanceof xt) || !Ra(f) ? this.thru(w) : (g = g.slice(f, +f + (o ? 1 : 0)), g.__actions__.push({
          func: lu,
          args: [w],
          thisArg: n
        }), new Sr(g, this.__chain__).thru(function(A) {
          return o && !A.length && A.push(n), A;
        }));
      });
      function lP() {
        return by(this);
      }
      function cP() {
        return new Sr(this.value(), this.__chain__);
      }
      function uP() {
        this.__values__ === n && (this.__values__ = Ry(this.value()));
        var a = this.__index__ >= this.__values__.length, o = a ? n : this.__values__[this.__index__++];
        return { done: a, value: o };
      }
      function dP() {
        return this;
      }
      function fP(a) {
        for (var o, f = this; f instanceof Vc; ) {
          var g = fy(f);
          g.__index__ = 0, g.__values__ = n, o ? w.__wrapped__ = g : o = g;
          var w = g;
          f = f.__wrapped__;
        }
        return w.__wrapped__ = a, o;
      }
      function pP() {
        var a = this.__wrapped__;
        if (a instanceof xt) {
          var o = a;
          return this.__actions__.length && (o = new xt(this)), o = o.reverse(), o.__actions__.push({
            func: lu,
            args: [qf],
            thisArg: n
          }), new Sr(o, this.__chain__);
        }
        return this.thru(qf);
      }
      function hP() {
        return Dv(this.__wrapped__, this.__actions__);
      }
      var mP = eu(function(a, o, f) {
        Ft.call(a, f) ? ++a[f] : sa(a, f, 1);
      });
      function gP(a, o, f) {
        var g = ct(a) ? Gg : oS;
        return f && Wn(a, o, f) && (o = n), g(a, et(o, 3));
      }
      function vP(a, o) {
        var f = ct(a) ? ci : yv;
        return f(a, et(o, 3));
      }
      var yP = qv(py), bP = qv(hy);
      function _P(a, o) {
        return kn(cu(a, o), 1);
      }
      function wP(a, o) {
        return kn(cu(a, o), he);
      }
      function EP(a, o, f) {
        return f = f === n ? 1 : ft(f), kn(cu(a, o), f);
      }
      function _y(a, o) {
        var f = ct(a) ? ur : pi;
        return f(a, et(o, 3));
      }
      function wy(a, o) {
        var f = ct(a) ? UC : vv;
        return f(a, et(o, 3));
      }
      var xP = eu(function(a, o, f) {
        Ft.call(a, f) ? a[f].push(o) : sa(a, f, [o]);
      });
      function CP(a, o, f, g) {
        a = Zn(a) ? a : Xo(a), f = f && !g ? ft(f) : 0;
        var w = a.length;
        return f < 0 && (f = bn(w + f, 0)), hu(a) ? f <= w && a.indexOf(o, f) > -1 : !!w && Bo(a, o, f) > -1;
      }
      var OP = mt(function(a, o, f) {
        var g = -1, w = typeof o == "function", A = Zn(a) ? oe(a.length) : [];
        return pi(a, function(W) {
          A[++g] = w ? cr(o, W, f) : tl(W, o, f);
        }), A;
      }), SP = eu(function(a, o, f) {
        sa(a, f, o);
      });
      function cu(a, o) {
        var f = ct(a) ? on : Cv;
        return f(a, et(o, 3));
      }
      function TP(a, o, f, g) {
        return a == null ? [] : (ct(o) || (o = o == null ? [] : [o]), f = g ? n : f, ct(f) || (f = f == null ? [] : [f]), Pv(a, o, f));
      }
      var PP = eu(function(a, o, f) {
        a[f ? 0 : 1].push(o);
      }, function() {
        return [[], []];
      });
      function kP(a, o, f) {
        var g = ct(a) ? af : Qg, w = arguments.length < 3;
        return g(a, et(o, 4), f, w, pi);
      }
      function NP(a, o, f) {
        var g = ct(a) ? jC : Qg, w = arguments.length < 3;
        return g(a, et(o, 4), f, w, vv);
      }
      function IP(a, o) {
        var f = ct(a) ? ci : yv;
        return f(a, fu(et(o, 3)));
      }
      function AP(a) {
        var o = ct(a) ? pv : CS;
        return o(a);
      }
      function RP(a, o, f) {
        (f ? Wn(a, o, f) : o === n) ? o = 1 : o = ft(o);
        var g = ct(a) ? tS : OS;
        return g(a, o);
      }
      function MP(a) {
        var o = ct(a) ? nS : TS;
        return o(a);
      }
      function DP(a) {
        if (a == null)
          return 0;
        if (Zn(a))
          return hu(a) ? Uo(a) : a.length;
        var o = Rn(a);
        return o == le || o == Ee ? a.size : Cf(a).length;
      }
      function LP(a, o, f) {
        var g = ct(a) ? of : PS;
        return f && Wn(a, o, f) && (o = n), g(a, et(o, 3));
      }
      var FP = mt(function(a, o) {
        if (a == null)
          return [];
        var f = o.length;
        return f > 1 && Wn(a, o[0], o[1]) ? o = [] : f > 2 && Wn(o[0], o[1], o[2]) && (o = [o[0]]), Pv(a, kn(o, 1), []);
      }), uu = vO || function() {
        return Pn.Date.now();
      };
      function $P(a, o) {
        if (typeof o != "function")
          throw new Or(u);
        return a = ft(a), function() {
          if (--a < 1)
            return o.apply(this, arguments);
        };
      }
      function Ey(a, o, f) {
        return o = f ? n : o, o = a && o == null ? a.length : o, Ia(a, P, n, n, n, n, o);
      }
      function xy(a, o) {
        var f;
        if (typeof o != "function")
          throw new Or(u);
        return a = ft(a), function() {
          return --a > 0 && (f = o.apply(this, arguments)), a <= 1 && (o = n), f;
        };
      }
      var Gf = mt(function(a, o, f) {
        var g = R;
        if (f.length) {
          var w = di(f, Ko(Gf));
          g |= S;
        }
        return Ia(a, g, o, f, w);
      }), Cy = mt(function(a, o, f) {
        var g = R | F;
        if (f.length) {
          var w = di(f, Ko(Cy));
          g |= S;
        }
        return Ia(o, g, a, f, w);
      });
      function Oy(a, o, f) {
        o = f ? n : o;
        var g = Ia(a, I, n, n, n, n, n, o);
        return g.placeholder = Oy.placeholder, g;
      }
      function Sy(a, o, f) {
        o = f ? n : o;
        var g = Ia(a, O, n, n, n, n, n, o);
        return g.placeholder = Sy.placeholder, g;
      }
      function Ty(a, o, f) {
        var g, w, A, W, H, X, _e = 0, we = !1, xe = !1, De = !0;
        if (typeof a != "function")
          throw new Or(u);
        o = Nr(o) || 0, un(f) && (we = !!f.leading, xe = "maxWait" in f, A = xe ? bn(Nr(f.maxWait) || 0, o) : A, De = "trailing" in f ? !!f.trailing : De);
        function Ye(hn) {
          var Gr = g, La = w;
          return g = w = n, _e = hn, W = a.apply(La, Gr), W;
        }
        function tt(hn) {
          return _e = hn, H = ol(bt, o), we ? Ye(hn) : W;
        }
        function ht(hn) {
          var Gr = hn - X, La = hn - _e, Vy = o - Gr;
          return xe ? An(Vy, A - La) : Vy;
        }
        function Je(hn) {
          var Gr = hn - X, La = hn - _e;
          return X === n || Gr >= o || Gr < 0 || xe && La >= A;
        }
        function bt() {
          var hn = uu();
          if (Je(hn))
            return St(hn);
          H = ol(bt, ht(hn));
        }
        function St(hn) {
          return H = n, De && g ? Ye(hn) : (g = w = n, W);
        }
        function hr() {
          H !== n && Fv(H), _e = 0, g = X = w = H = n;
        }
        function Un() {
          return H === n ? W : St(uu());
        }
        function mr() {
          var hn = uu(), Gr = Je(hn);
          if (g = arguments, w = this, X = hn, Gr) {
            if (H === n)
              return tt(X);
            if (xe)
              return Fv(H), H = ol(bt, o), Ye(X);
          }
          return H === n && (H = ol(bt, o)), W;
        }
        return mr.cancel = hr, mr.flush = Un, mr;
      }
      var BP = mt(function(a, o) {
        return gv(a, 1, o);
      }), WP = mt(function(a, o, f) {
        return gv(a, Nr(o) || 0, f);
      });
      function UP(a) {
        return Ia(a, B);
      }
      function du(a, o) {
        if (typeof a != "function" || o != null && typeof o != "function")
          throw new Or(u);
        var f = function() {
          var g = arguments, w = o ? o.apply(this, g) : g[0], A = f.cache;
          if (A.has(w))
            return A.get(w);
          var W = a.apply(this, g);
          return f.cache = A.set(w, W) || A, W;
        };
        return f.cache = new (du.Cache || Na)(), f;
      }
      du.Cache = Na;
      function fu(a) {
        if (typeof a != "function")
          throw new Or(u);
        return function() {
          var o = arguments;
          switch (o.length) {
            case 0:
              return !a.call(this);
            case 1:
              return !a.call(this, o[0]);
            case 2:
              return !a.call(this, o[0], o[1]);
            case 3:
              return !a.call(this, o[0], o[1], o[2]);
          }
          return !a.apply(this, o);
        };
      }
      function jP(a) {
        return xy(2, a);
      }
      var zP = kS(function(a, o) {
        o = o.length == 1 && ct(o[0]) ? on(o[0], dr(et())) : on(kn(o, 1), dr(et()));
        var f = o.length;
        return mt(function(g) {
          for (var w = -1, A = An(g.length, f); ++w < A; )
            g[w] = o[w].call(this, g[w]);
          return cr(a, this, g);
        });
      }), Kf = mt(function(a, o) {
        var f = di(o, Ko(Kf));
        return Ia(a, S, n, o, f);
      }), Py = mt(function(a, o) {
        var f = di(o, Ko(Py));
        return Ia(a, x, n, o, f);
      }), HP = Aa(function(a, o) {
        return Ia(a, k, n, n, n, o);
      });
      function YP(a, o) {
        if (typeof a != "function")
          throw new Or(u);
        return o = o === n ? o : ft(o), mt(a, o);
      }
      function qP(a, o) {
        if (typeof a != "function")
          throw new Or(u);
        return o = o == null ? 0 : bn(ft(o), 0), mt(function(f) {
          var g = f[o], w = gi(f, 0, o);
          return g && ui(w, g), cr(a, this, w);
        });
      }
      function VP(a, o, f) {
        var g = !0, w = !0;
        if (typeof a != "function")
          throw new Or(u);
        return un(f) && (g = "leading" in f ? !!f.leading : g, w = "trailing" in f ? !!f.trailing : w), Ty(a, o, {
          leading: g,
          maxWait: o,
          trailing: w
        });
      }
      function GP(a) {
        return Ey(a, 1);
      }
      function KP(a, o) {
        return Kf(Rf(o), a);
      }
      function ZP() {
        if (!arguments.length)
          return [];
        var a = arguments[0];
        return ct(a) ? a : [a];
      }
      function XP(a) {
        return Tr(a, b);
      }
      function QP(a, o) {
        return o = typeof o == "function" ? o : n, Tr(a, b, o);
      }
      function JP(a) {
        return Tr(a, v | b);
      }
      function ek(a, o) {
        return o = typeof o == "function" ? o : n, Tr(a, v | b, o);
      }
      function tk(a, o) {
        return o == null || mv(a, o, Cn(o));
      }
      function Vr(a, o) {
        return a === o || a !== a && o !== o;
      }
      var nk = au(wf), rk = au(function(a, o) {
        return a >= o;
      }), ro = wv(/* @__PURE__ */ function() {
        return arguments;
      }()) ? wv : function(a) {
        return dn(a) && Ft.call(a, "callee") && !sv.call(a, "callee");
      }, ct = oe.isArray, ak = jg ? dr(jg) : fS;
      function Zn(a) {
        return a != null && pu(a.length) && !Ma(a);
      }
      function pn(a) {
        return dn(a) && Zn(a);
      }
      function ik(a) {
        return a === !0 || a === !1 || dn(a) && Bn(a) == U;
      }
      var vi = bO || sp, ok = zg ? dr(zg) : pS;
      function sk(a) {
        return dn(a) && a.nodeType === 1 && !sl(a);
      }
      function lk(a) {
        if (a == null)
          return !0;
        if (Zn(a) && (ct(a) || typeof a == "string" || typeof a.splice == "function" || vi(a) || Zo(a) || ro(a)))
          return !a.length;
        var o = Rn(a);
        if (o == le || o == Ee)
          return !a.size;
        if (il(a))
          return !Cf(a).length;
        for (var f in a)
          if (Ft.call(a, f))
            return !1;
        return !0;
      }
      function ck(a, o) {
        return nl(a, o);
      }
      function uk(a, o, f) {
        f = typeof f == "function" ? f : n;
        var g = f ? f(a, o) : n;
        return g === n ? nl(a, o, n, f) : !!g;
      }
      function Zf(a) {
        if (!dn(a))
          return !1;
        var o = Bn(a);
        return o == D || o == $ || typeof a.message == "string" && typeof a.name == "string" && !sl(a);
      }
      function dk(a) {
        return typeof a == "number" && cv(a);
      }
      function Ma(a) {
        if (!un(a))
          return !1;
        var o = Bn(a);
        return o == G || o == Z || o == Me || o == V;
      }
      function ky(a) {
        return typeof a == "number" && a == ft(a);
      }
      function pu(a) {
        return typeof a == "number" && a > -1 && a % 1 == 0 && a <= be;
      }
      function un(a) {
        var o = typeof a;
        return a != null && (o == "object" || o == "function");
      }
      function dn(a) {
        return a != null && typeof a == "object";
      }
      var Ny = Hg ? dr(Hg) : mS;
      function fk(a, o) {
        return a === o || xf(a, o, Wf(o));
      }
      function pk(a, o, f) {
        return f = typeof f == "function" ? f : n, xf(a, o, Wf(o), f);
      }
      function hk(a) {
        return Iy(a) && a != +a;
      }
      function mk(a) {
        if (QS(a))
          throw new st(s);
        return Ev(a);
      }
      function gk(a) {
        return a === null;
      }
      function vk(a) {
        return a == null;
      }
      function Iy(a) {
        return typeof a == "number" || dn(a) && Bn(a) == fe;
      }
      function sl(a) {
        if (!dn(a) || Bn(a) != ue)
          return !1;
        var o = Wc(a);
        if (o === null)
          return !0;
        var f = Ft.call(o, "constructor") && o.constructor;
        return typeof f == "function" && f instanceof f && Lc.call(f) == pO;
      }
      var Xf = Yg ? dr(Yg) : gS;
      function yk(a) {
        return ky(a) && a >= -be && a <= be;
      }
      var Ay = qg ? dr(qg) : vS;
      function hu(a) {
        return typeof a == "string" || !ct(a) && dn(a) && Bn(a) == Le;
      }
      function pr(a) {
        return typeof a == "symbol" || dn(a) && Bn(a) == Fe;
      }
      var Zo = Vg ? dr(Vg) : yS;
      function bk(a) {
        return a === n;
      }
      function _k(a) {
        return dn(a) && Rn(a) == qe;
      }
      function wk(a) {
        return dn(a) && Bn(a) == Et;
      }
      var Ek = au(Of), xk = au(function(a, o) {
        return a <= o;
      });
      function Ry(a) {
        if (!a)
          return [];
        if (Zn(a))
          return hu(a) ? Hr(a) : Kn(a);
        if (Gs && a[Gs])
          return tO(a[Gs]());
        var o = Rn(a), f = o == le ? ff : o == Ee ? Rc : Xo;
        return f(a);
      }
      function Da(a) {
        if (!a)
          return a === 0 ? a : 0;
        if (a = Nr(a), a === he || a === -he) {
          var o = a < 0 ? -1 : 1;
          return o * ee;
        }
        return a === a ? a : 0;
      }
      function ft(a) {
        var o = Da(a), f = o % 1;
        return o === o ? f ? o - f : o : 0;
      }
      function My(a) {
        return a ? Ji(ft(a), 0, se) : 0;
      }
      function Nr(a) {
        if (typeof a == "number")
          return a;
        if (pr(a))
          return ie;
        if (un(a)) {
          var o = typeof a.valueOf == "function" ? a.valueOf() : a;
          a = un(o) ? o + "" : o;
        }
        if (typeof a != "string")
          return a === 0 ? a : +a;
        a = Jg(a);
        var f = aC.test(a);
        return f || oC.test(a) ? $C(a.slice(2), f ? 2 : 8) : rC.test(a) ? ie : +a;
      }
      function Dy(a) {
        return ca(a, Xn(a));
      }
      function Ck(a) {
        return a ? Ji(ft(a), -be, be) : a === 0 ? a : 0;
      }
      function $t(a) {
        return a == null ? "" : fr(a);
      }
      var Ok = Vo(function(a, o) {
        if (il(o) || Zn(o)) {
          ca(o, Cn(o), a);
          return;
        }
        for (var f in o)
          Ft.call(o, f) && Js(a, f, o[f]);
      }), Ly = Vo(function(a, o) {
        ca(o, Xn(o), a);
      }), Fy = Vo(function(a, o, f, g) {
        ca(o, Xn(o), a, g);
      }), Qf = Vo(function(a, o, f, g) {
        ca(o, Cn(o), a, g);
      }), Sk = Aa(yf);
      function Tk(a, o) {
        var f = qo(a);
        return o == null ? f : hv(f, o);
      }
      var Pk = mt(function(a, o) {
        a = Gt(a);
        var f = -1, g = o.length, w = g > 2 ? o[2] : n;
        for (w && Wn(o[0], o[1], w) && (g = 1); ++f < g; )
          for (var A = o[f], W = Xn(A), H = -1, X = W.length; ++H < X; ) {
            var _e = W[H], we = a[_e];
            (we === n || Vr(we, zo[_e]) && !Ft.call(a, _e)) && (a[_e] = A[_e]);
          }
        return a;
      }), kk = mt(function(a) {
        return a.push(n, Jv), cr($y, n, a);
      });
      function Nk(a, o) {
        return Kg(a, et(o, 3), la);
      }
      function Ik(a, o) {
        return Kg(a, et(o, 3), _f);
      }
      function Ak(a, o) {
        return a == null ? a : bf(a, et(o, 3), Xn);
      }
      function Rk(a, o) {
        return a == null ? a : bv(a, et(o, 3), Xn);
      }
      function Mk(a, o) {
        return a && la(a, et(o, 3));
      }
      function Dk(a, o) {
        return a && _f(a, et(o, 3));
      }
      function Lk(a) {
        return a == null ? [] : Zc(a, Cn(a));
      }
      function Fk(a) {
        return a == null ? [] : Zc(a, Xn(a));
      }
      function Jf(a, o, f) {
        var g = a == null ? n : eo(a, o);
        return g === n ? f : g;
      }
      function $k(a, o) {
        return a != null && ny(a, o, lS);
      }
      function ep(a, o) {
        return a != null && ny(a, o, cS);
      }
      var Bk = Gv(function(a, o, f) {
        o != null && typeof o.toString != "function" && (o = Fc.call(o)), a[o] = f;
      }, np(Qn)), Wk = Gv(function(a, o, f) {
        o != null && typeof o.toString != "function" && (o = Fc.call(o)), Ft.call(a, o) ? a[o].push(f) : a[o] = [f];
      }, et), Uk = mt(tl);
      function Cn(a) {
        return Zn(a) ? fv(a) : Cf(a);
      }
      function Xn(a) {
        return Zn(a) ? fv(a, !0) : bS(a);
      }
      function jk(a, o) {
        var f = {};
        return o = et(o, 3), la(a, function(g, w, A) {
          sa(f, o(g, w, A), g);
        }), f;
      }
      function zk(a, o) {
        var f = {};
        return o = et(o, 3), la(a, function(g, w, A) {
          sa(f, w, o(g, w, A));
        }), f;
      }
      var Hk = Vo(function(a, o, f) {
        Xc(a, o, f);
      }), $y = Vo(function(a, o, f, g) {
        Xc(a, o, f, g);
      }), Yk = Aa(function(a, o) {
        var f = {};
        if (a == null)
          return f;
        var g = !1;
        o = on(o, function(A) {
          return A = mi(A, a), g || (g = A.length > 1), A;
        }), ca(a, $f(a), f), g && (f = Tr(f, v | y | b, WS));
        for (var w = o.length; w--; )
          Nf(f, o[w]);
        return f;
      });
      function qk(a, o) {
        return By(a, fu(et(o)));
      }
      var Vk = Aa(function(a, o) {
        return a == null ? {} : wS(a, o);
      });
      function By(a, o) {
        if (a == null)
          return {};
        var f = on($f(a), function(g) {
          return [g];
        });
        return o = et(o), kv(a, f, function(g, w) {
          return o(g, w[0]);
        });
      }
      function Gk(a, o, f) {
        o = mi(o, a);
        var g = -1, w = o.length;
        for (w || (w = 1, a = n); ++g < w; ) {
          var A = a == null ? n : a[qr(o[g])];
          A === n && (g = w, A = f), a = Ma(A) ? A.call(a) : A;
        }
        return a;
      }
      function Kk(a, o, f) {
        return a == null ? a : rl(a, o, f);
      }
      function Zk(a, o, f, g) {
        return g = typeof g == "function" ? g : n, a == null ? a : rl(a, o, f, g);
      }
      var Wy = Xv(Cn), Uy = Xv(Xn);
      function Xk(a, o, f) {
        var g = ct(a), w = g || vi(a) || Zo(a);
        if (o = et(o, 4), f == null) {
          var A = a && a.constructor;
          w ? f = g ? new A() : [] : un(a) ? f = Ma(A) ? qo(Wc(a)) : {} : f = {};
        }
        return (w ? ur : la)(a, function(W, H, X) {
          return o(f, W, H, X);
        }), f;
      }
      function Qk(a, o) {
        return a == null ? !0 : Nf(a, o);
      }
      function Jk(a, o, f) {
        return a == null ? a : Mv(a, o, Rf(f));
      }
      function eN(a, o, f, g) {
        return g = typeof g == "function" ? g : n, a == null ? a : Mv(a, o, Rf(f), g);
      }
      function Xo(a) {
        return a == null ? [] : df(a, Cn(a));
      }
      function tN(a) {
        return a == null ? [] : df(a, Xn(a));
      }
      function nN(a, o, f) {
        return f === n && (f = o, o = n), f !== n && (f = Nr(f), f = f === f ? f : 0), o !== n && (o = Nr(o), o = o === o ? o : 0), Ji(Nr(a), o, f);
      }
      function rN(a, o, f) {
        return o = Da(o), f === n ? (f = o, o = 0) : f = Da(f), a = Nr(a), uS(a, o, f);
      }
      function aN(a, o, f) {
        if (f && typeof f != "boolean" && Wn(a, o, f) && (o = f = n), f === n && (typeof o == "boolean" ? (f = o, o = n) : typeof a == "boolean" && (f = a, a = n)), a === n && o === n ? (a = 0, o = 1) : (a = Da(a), o === n ? (o = a, a = 0) : o = Da(o)), a > o) {
          var g = a;
          a = o, o = g;
        }
        if (f || a % 1 || o % 1) {
          var w = uv();
          return An(a + w * (o - a + FC("1e-" + ((w + "").length - 1))), o);
        }
        return Tf(a, o);
      }
      var iN = Go(function(a, o, f) {
        return o = o.toLowerCase(), a + (f ? jy(o) : o);
      });
      function jy(a) {
        return tp($t(a).toLowerCase());
      }
      function zy(a) {
        return a = $t(a), a && a.replace(lC, ZC).replace(TC, "");
      }
      function oN(a, o, f) {
        a = $t(a), o = fr(o);
        var g = a.length;
        f = f === n ? g : Ji(ft(f), 0, g);
        var w = f;
        return f -= o.length, f >= 0 && a.slice(f, w) == o;
      }
      function sN(a) {
        return a = $t(a), a && oa.test(a) ? a.replace(ia, XC) : a;
      }
      function lN(a) {
        return a = $t(a), a && Kx.test(a) ? a.replace(Gd, "\\$&") : a;
      }
      var cN = Go(function(a, o, f) {
        return a + (f ? "-" : "") + o.toLowerCase();
      }), uN = Go(function(a, o, f) {
        return a + (f ? " " : "") + o.toLowerCase();
      }), dN = Yv("toLowerCase");
      function fN(a, o, f) {
        a = $t(a), o = ft(o);
        var g = o ? Uo(a) : 0;
        if (!o || g >= o)
          return a;
        var w = (o - g) / 2;
        return ru(Hc(w), f) + a + ru(zc(w), f);
      }
      function pN(a, o, f) {
        a = $t(a), o = ft(o);
        var g = o ? Uo(a) : 0;
        return o && g < o ? a + ru(o - g, f) : a;
      }
      function hN(a, o, f) {
        a = $t(a), o = ft(o);
        var g = o ? Uo(a) : 0;
        return o && g < o ? ru(o - g, f) + a : a;
      }
      function mN(a, o, f) {
        return f || o == null ? o = 0 : o && (o = +o), xO($t(a).replace(Kd, ""), o || 0);
      }
      function gN(a, o, f) {
        return (f ? Wn(a, o, f) : o === n) ? o = 1 : o = ft(o), Pf($t(a), o);
      }
      function vN() {
        var a = arguments, o = $t(a[0]);
        return a.length < 3 ? o : o.replace(a[1], a[2]);
      }
      var yN = Go(function(a, o, f) {
        return a + (f ? "_" : "") + o.toLowerCase();
      });
      function bN(a, o, f) {
        return f && typeof f != "number" && Wn(a, o, f) && (o = f = n), f = f === n ? se : f >>> 0, f ? (a = $t(a), a && (typeof o == "string" || o != null && !Xf(o)) && (o = fr(o), !o && Wo(a)) ? gi(Hr(a), 0, f) : a.split(o, f)) : [];
      }
      var _N = Go(function(a, o, f) {
        return a + (f ? " " : "") + tp(o);
      });
      function wN(a, o, f) {
        return a = $t(a), f = f == null ? 0 : Ji(ft(f), 0, a.length), o = fr(o), a.slice(f, f + o.length) == o;
      }
      function EN(a, o, f) {
        var g = T.templateSettings;
        f && Wn(a, o, f) && (o = n), a = $t(a), o = Qf({}, o, g, Qv);
        var w = Qf({}, o.imports, g.imports, Qv), A = Cn(w), W = df(w, A);
        ur(A, function(Je) {
          if (_g.test(Je))
            throw new st(d);
        });
        var H, X, _e = 0, we = o.interpolate || Pc, xe = "__p += '", De = pf(
          (o.escape || Pc).source + "|" + we.source + "|" + (we === bg ? nC : Pc).source + "|" + (o.evaluate || Pc).source + "|$",
          "g"
        ), Ye = "//# sourceURL=" + (Ft.call(o, "sourceURL") ? (o.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++AC + "]") + `
`;
        a.replace(De, function(Je, bt, St, hr, Un, mr) {
          return St || (St = hr), xe += a.slice(_e, mr).replace(cC, QC), bt && (H = !0, xe += `' +
__e(` + bt + `) +
'`), Un && (X = !0, xe += `';
` + Un + `;
__p += '`), St && (xe += `' +
((__t = (` + St + `)) == null ? '' : __t) +
'`), _e = mr + Je.length, Je;
        }), xe += `';
`;
        var tt = Ft.call(o, "variable") && o.variable;
        if (!tt)
          xe = `with (obj) {
` + xe + `
}
`;
        else if (_g.test(tt))
          throw new st(l);
        xe = (X ? xe.replace(Lt, "") : xe).replace(Xe, "$1").replace(cn, "$1;"), xe = "function(" + (tt || "obj") + `) {
` + (tt ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (H ? ", __e = _.escape" : "") + (X ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + xe + `return __p
}`;
        var ht = Yy(function() {
          return Dt(A, Ye + "return " + xe).apply(n, W);
        });
        if (ht.source = xe, Zf(ht))
          throw ht;
        return ht;
      }
      function xN(a) {
        return $t(a).toLowerCase();
      }
      function CN(a) {
        return $t(a).toUpperCase();
      }
      function ON(a, o, f) {
        if (a = $t(a), a && (f || o === n))
          return Jg(a);
        if (!a || !(o = fr(o)))
          return a;
        var g = Hr(a), w = Hr(o), A = ev(g, w), W = tv(g, w) + 1;
        return gi(g, A, W).join("");
      }
      function SN(a, o, f) {
        if (a = $t(a), a && (f || o === n))
          return a.slice(0, rv(a) + 1);
        if (!a || !(o = fr(o)))
          return a;
        var g = Hr(a), w = tv(g, Hr(o)) + 1;
        return gi(g, 0, w).join("");
      }
      function TN(a, o, f) {
        if (a = $t(a), a && (f || o === n))
          return a.replace(Kd, "");
        if (!a || !(o = fr(o)))
          return a;
        var g = Hr(a), w = ev(g, Hr(o));
        return gi(g, w).join("");
      }
      function PN(a, o) {
        var f = Y, g = ne;
        if (un(o)) {
          var w = "separator" in o ? o.separator : w;
          f = "length" in o ? ft(o.length) : f, g = "omission" in o ? fr(o.omission) : g;
        }
        a = $t(a);
        var A = a.length;
        if (Wo(a)) {
          var W = Hr(a);
          A = W.length;
        }
        if (f >= A)
          return a;
        var H = f - Uo(g);
        if (H < 1)
          return g;
        var X = W ? gi(W, 0, H).join("") : a.slice(0, H);
        if (w === n)
          return X + g;
        if (W && (H += X.length - H), Xf(w)) {
          if (a.slice(H).search(w)) {
            var _e, we = X;
            for (w.global || (w = pf(w.source, $t(wg.exec(w)) + "g")), w.lastIndex = 0; _e = w.exec(we); )
              var xe = _e.index;
            X = X.slice(0, xe === n ? H : xe);
          }
        } else if (a.indexOf(fr(w), H) != H) {
          var De = X.lastIndexOf(w);
          De > -1 && (X = X.slice(0, De));
        }
        return X + g;
      }
      function kN(a) {
        return a = $t(a), a && Tc.test(a) ? a.replace(Gn, iO) : a;
      }
      var NN = Go(function(a, o, f) {
        return a + (f ? " " : "") + o.toUpperCase();
      }), tp = Yv("toUpperCase");
      function Hy(a, o, f) {
        return a = $t(a), o = f ? n : o, o === n ? eO(a) ? lO(a) : YC(a) : a.match(o) || [];
      }
      var Yy = mt(function(a, o) {
        try {
          return cr(a, n, o);
        } catch (f) {
          return Zf(f) ? f : new st(f);
        }
      }), IN = Aa(function(a, o) {
        return ur(o, function(f) {
          f = qr(f), sa(a, f, Gf(a[f], a));
        }), a;
      });
      function AN(a) {
        var o = a == null ? 0 : a.length, f = et();
        return a = o ? on(a, function(g) {
          if (typeof g[1] != "function")
            throw new Or(u);
          return [f(g[0]), g[1]];
        }) : [], mt(function(g) {
          for (var w = -1; ++w < o; ) {
            var A = a[w];
            if (cr(A[0], this, g))
              return cr(A[1], this, g);
          }
        });
      }
      function RN(a) {
        return iS(Tr(a, v));
      }
      function np(a) {
        return function() {
          return a;
        };
      }
      function MN(a, o) {
        return a == null || a !== a ? o : a;
      }
      var DN = Vv(), LN = Vv(!0);
      function Qn(a) {
        return a;
      }
      function rp(a) {
        return xv(typeof a == "function" ? a : Tr(a, v));
      }
      function FN(a) {
        return Ov(Tr(a, v));
      }
      function $N(a, o) {
        return Sv(a, Tr(o, v));
      }
      var BN = mt(function(a, o) {
        return function(f) {
          return tl(f, a, o);
        };
      }), WN = mt(function(a, o) {
        return function(f) {
          return tl(a, f, o);
        };
      });
      function ap(a, o, f) {
        var g = Cn(o), w = Zc(o, g);
        f == null && !(un(o) && (w.length || !g.length)) && (f = o, o = a, a = this, w = Zc(o, Cn(o)));
        var A = !(un(f) && "chain" in f) || !!f.chain, W = Ma(a);
        return ur(w, function(H) {
          var X = o[H];
          a[H] = X, W && (a.prototype[H] = function() {
            var _e = this.__chain__;
            if (A || _e) {
              var we = a(this.__wrapped__), xe = we.__actions__ = Kn(this.__actions__);
              return xe.push({ func: X, args: arguments, thisArg: a }), we.__chain__ = _e, we;
            }
            return X.apply(a, ui([this.value()], arguments));
          });
        }), a;
      }
      function UN() {
        return Pn._ === this && (Pn._ = hO), this;
      }
      function ip() {
      }
      function jN(a) {
        return a = ft(a), mt(function(o) {
          return Tv(o, a);
        });
      }
      var zN = Df(on), HN = Df(Gg), YN = Df(of);
      function qy(a) {
        return jf(a) ? sf(qr(a)) : ES(a);
      }
      function qN(a) {
        return function(o) {
          return a == null ? n : eo(a, o);
        };
      }
      var VN = Kv(), GN = Kv(!0);
      function op() {
        return [];
      }
      function sp() {
        return !1;
      }
      function KN() {
        return {};
      }
      function ZN() {
        return "";
      }
      function XN() {
        return !0;
      }
      function QN(a, o) {
        if (a = ft(a), a < 1 || a > be)
          return [];
        var f = se, g = An(a, se);
        o = et(o), a -= se;
        for (var w = uf(g, o); ++f < a; )
          o(f);
        return w;
      }
      function JN(a) {
        return ct(a) ? on(a, qr) : pr(a) ? [a] : Kn(dy($t(a)));
      }
      function eI(a) {
        var o = ++fO;
        return $t(a) + o;
      }
      var tI = nu(function(a, o) {
        return a + o;
      }, 0), nI = Lf("ceil"), rI = nu(function(a, o) {
        return a / o;
      }, 1), aI = Lf("floor");
      function iI(a) {
        return a && a.length ? Kc(a, Qn, wf) : n;
      }
      function oI(a, o) {
        return a && a.length ? Kc(a, et(o, 2), wf) : n;
      }
      function sI(a) {
        return Xg(a, Qn);
      }
      function lI(a, o) {
        return Xg(a, et(o, 2));
      }
      function cI(a) {
        return a && a.length ? Kc(a, Qn, Of) : n;
      }
      function uI(a, o) {
        return a && a.length ? Kc(a, et(o, 2), Of) : n;
      }
      var dI = nu(function(a, o) {
        return a * o;
      }, 1), fI = Lf("round"), pI = nu(function(a, o) {
        return a - o;
      }, 0);
      function hI(a) {
        return a && a.length ? cf(a, Qn) : 0;
      }
      function mI(a, o) {
        return a && a.length ? cf(a, et(o, 2)) : 0;
      }
      return T.after = $P, T.ary = Ey, T.assign = Ok, T.assignIn = Ly, T.assignInWith = Fy, T.assignWith = Qf, T.at = Sk, T.before = xy, T.bind = Gf, T.bindAll = IN, T.bindKey = Cy, T.castArray = ZP, T.chain = by, T.chunk = iT, T.compact = oT, T.concat = sT, T.cond = AN, T.conforms = RN, T.constant = np, T.countBy = mP, T.create = Tk, T.curry = Oy, T.curryRight = Sy, T.debounce = Ty, T.defaults = Pk, T.defaultsDeep = kk, T.defer = BP, T.delay = WP, T.difference = lT, T.differenceBy = cT, T.differenceWith = uT, T.drop = dT, T.dropRight = fT, T.dropRightWhile = pT, T.dropWhile = hT, T.fill = mT, T.filter = vP, T.flatMap = _P, T.flatMapDeep = wP, T.flatMapDepth = EP, T.flatten = my, T.flattenDeep = gT, T.flattenDepth = vT, T.flip = UP, T.flow = DN, T.flowRight = LN, T.fromPairs = yT, T.functions = Lk, T.functionsIn = Fk, T.groupBy = xP, T.initial = _T, T.intersection = wT, T.intersectionBy = ET, T.intersectionWith = xT, T.invert = Bk, T.invertBy = Wk, T.invokeMap = OP, T.iteratee = rp, T.keyBy = SP, T.keys = Cn, T.keysIn = Xn, T.map = cu, T.mapKeys = jk, T.mapValues = zk, T.matches = FN, T.matchesProperty = $N, T.memoize = du, T.merge = Hk, T.mergeWith = $y, T.method = BN, T.methodOf = WN, T.mixin = ap, T.negate = fu, T.nthArg = jN, T.omit = Yk, T.omitBy = qk, T.once = jP, T.orderBy = TP, T.over = zN, T.overArgs = zP, T.overEvery = HN, T.overSome = YN, T.partial = Kf, T.partialRight = Py, T.partition = PP, T.pick = Vk, T.pickBy = By, T.property = qy, T.propertyOf = qN, T.pull = TT, T.pullAll = vy, T.pullAllBy = PT, T.pullAllWith = kT, T.pullAt = NT, T.range = VN, T.rangeRight = GN, T.rearg = HP, T.reject = IP, T.remove = IT, T.rest = YP, T.reverse = qf, T.sampleSize = RP, T.set = Kk, T.setWith = Zk, T.shuffle = MP, T.slice = AT, T.sortBy = FP, T.sortedUniq = BT, T.sortedUniqBy = WT, T.split = bN, T.spread = qP, T.tail = UT, T.take = jT, T.takeRight = zT, T.takeRightWhile = HT, T.takeWhile = YT, T.tap = oP, T.throttle = VP, T.thru = lu, T.toArray = Ry, T.toPairs = Wy, T.toPairsIn = Uy, T.toPath = JN, T.toPlainObject = Dy, T.transform = Xk, T.unary = GP, T.union = qT, T.unionBy = VT, T.unionWith = GT, T.uniq = KT, T.uniqBy = ZT, T.uniqWith = XT, T.unset = Qk, T.unzip = Vf, T.unzipWith = yy, T.update = Jk, T.updateWith = eN, T.values = Xo, T.valuesIn = tN, T.without = QT, T.words = Hy, T.wrap = KP, T.xor = JT, T.xorBy = eP, T.xorWith = tP, T.zip = nP, T.zipObject = rP, T.zipObjectDeep = aP, T.zipWith = iP, T.entries = Wy, T.entriesIn = Uy, T.extend = Ly, T.extendWith = Fy, ap(T, T), T.add = tI, T.attempt = Yy, T.camelCase = iN, T.capitalize = jy, T.ceil = nI, T.clamp = nN, T.clone = XP, T.cloneDeep = JP, T.cloneDeepWith = ek, T.cloneWith = QP, T.conformsTo = tk, T.deburr = zy, T.defaultTo = MN, T.divide = rI, T.endsWith = oN, T.eq = Vr, T.escape = sN, T.escapeRegExp = lN, T.every = gP, T.find = yP, T.findIndex = py, T.findKey = Nk, T.findLast = bP, T.findLastIndex = hy, T.findLastKey = Ik, T.floor = aI, T.forEach = _y, T.forEachRight = wy, T.forIn = Ak, T.forInRight = Rk, T.forOwn = Mk, T.forOwnRight = Dk, T.get = Jf, T.gt = nk, T.gte = rk, T.has = $k, T.hasIn = ep, T.head = gy, T.identity = Qn, T.includes = CP, T.indexOf = bT, T.inRange = rN, T.invoke = Uk, T.isArguments = ro, T.isArray = ct, T.isArrayBuffer = ak, T.isArrayLike = Zn, T.isArrayLikeObject = pn, T.isBoolean = ik, T.isBuffer = vi, T.isDate = ok, T.isElement = sk, T.isEmpty = lk, T.isEqual = ck, T.isEqualWith = uk, T.isError = Zf, T.isFinite = dk, T.isFunction = Ma, T.isInteger = ky, T.isLength = pu, T.isMap = Ny, T.isMatch = fk, T.isMatchWith = pk, T.isNaN = hk, T.isNative = mk, T.isNil = vk, T.isNull = gk, T.isNumber = Iy, T.isObject = un, T.isObjectLike = dn, T.isPlainObject = sl, T.isRegExp = Xf, T.isSafeInteger = yk, T.isSet = Ay, T.isString = hu, T.isSymbol = pr, T.isTypedArray = Zo, T.isUndefined = bk, T.isWeakMap = _k, T.isWeakSet = wk, T.join = CT, T.kebabCase = cN, T.last = kr, T.lastIndexOf = OT, T.lowerCase = uN, T.lowerFirst = dN, T.lt = Ek, T.lte = xk, T.max = iI, T.maxBy = oI, T.mean = sI, T.meanBy = lI, T.min = cI, T.minBy = uI, T.stubArray = op, T.stubFalse = sp, T.stubObject = KN, T.stubString = ZN, T.stubTrue = XN, T.multiply = dI, T.nth = ST, T.noConflict = UN, T.noop = ip, T.now = uu, T.pad = fN, T.padEnd = pN, T.padStart = hN, T.parseInt = mN, T.random = aN, T.reduce = kP, T.reduceRight = NP, T.repeat = gN, T.replace = vN, T.result = Gk, T.round = fI, T.runInContext = K, T.sample = AP, T.size = DP, T.snakeCase = yN, T.some = LP, T.sortedIndex = RT, T.sortedIndexBy = MT, T.sortedIndexOf = DT, T.sortedLastIndex = LT, T.sortedLastIndexBy = FT, T.sortedLastIndexOf = $T, T.startCase = _N, T.startsWith = wN, T.subtract = pI, T.sum = hI, T.sumBy = mI, T.template = EN, T.times = QN, T.toFinite = Da, T.toInteger = ft, T.toLength = My, T.toLower = xN, T.toNumber = Nr, T.toSafeInteger = Ck, T.toString = $t, T.toUpper = CN, T.trim = ON, T.trimEnd = SN, T.trimStart = TN, T.truncate = PN, T.unescape = kN, T.uniqueId = eI, T.upperCase = NN, T.upperFirst = tp, T.each = _y, T.eachRight = wy, T.first = gy, ap(T, function() {
        var a = {};
        return la(T, function(o, f) {
          Ft.call(T.prototype, f) || (a[f] = o);
        }), a;
      }(), { chain: !1 }), T.VERSION = r, ur(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(a) {
        T[a].placeholder = T;
      }), ur(["drop", "take"], function(a, o) {
        xt.prototype[a] = function(f) {
          f = f === n ? 1 : bn(ft(f), 0);
          var g = this.__filtered__ && !o ? new xt(this) : this.clone();
          return g.__filtered__ ? g.__takeCount__ = An(f, g.__takeCount__) : g.__views__.push({
            size: An(f, se),
            type: a + (g.__dir__ < 0 ? "Right" : "")
          }), g;
        }, xt.prototype[a + "Right"] = function(f) {
          return this.reverse()[a](f).reverse();
        };
      }), ur(["filter", "map", "takeWhile"], function(a, o) {
        var f = o + 1, g = f == pe || f == Oe;
        xt.prototype[a] = function(w) {
          var A = this.clone();
          return A.__iteratees__.push({
            iteratee: et(w, 3),
            type: f
          }), A.__filtered__ = A.__filtered__ || g, A;
        };
      }), ur(["head", "last"], function(a, o) {
        var f = "take" + (o ? "Right" : "");
        xt.prototype[a] = function() {
          return this[f](1).value()[0];
        };
      }), ur(["initial", "tail"], function(a, o) {
        var f = "drop" + (o ? "" : "Right");
        xt.prototype[a] = function() {
          return this.__filtered__ ? new xt(this) : this[f](1);
        };
      }), xt.prototype.compact = function() {
        return this.filter(Qn);
      }, xt.prototype.find = function(a) {
        return this.filter(a).head();
      }, xt.prototype.findLast = function(a) {
        return this.reverse().find(a);
      }, xt.prototype.invokeMap = mt(function(a, o) {
        return typeof a == "function" ? new xt(this) : this.map(function(f) {
          return tl(f, a, o);
        });
      }), xt.prototype.reject = function(a) {
        return this.filter(fu(et(a)));
      }, xt.prototype.slice = function(a, o) {
        a = ft(a);
        var f = this;
        return f.__filtered__ && (a > 0 || o < 0) ? new xt(f) : (a < 0 ? f = f.takeRight(-a) : a && (f = f.drop(a)), o !== n && (o = ft(o), f = o < 0 ? f.dropRight(-o) : f.take(o - a)), f);
      }, xt.prototype.takeRightWhile = function(a) {
        return this.reverse().takeWhile(a).reverse();
      }, xt.prototype.toArray = function() {
        return this.take(se);
      }, la(xt.prototype, function(a, o) {
        var f = /^(?:filter|find|map|reject)|While$/.test(o), g = /^(?:head|last)$/.test(o), w = T[g ? "take" + (o == "last" ? "Right" : "") : o], A = g || /^find/.test(o);
        w && (T.prototype[o] = function() {
          var W = this.__wrapped__, H = g ? [1] : arguments, X = W instanceof xt, _e = H[0], we = X || ct(W), xe = function(bt) {
            var St = w.apply(T, ui([bt], H));
            return g && De ? St[0] : St;
          };
          we && f && typeof _e == "function" && _e.length != 1 && (X = we = !1);
          var De = this.__chain__, Ye = !!this.__actions__.length, tt = A && !De, ht = X && !Ye;
          if (!A && we) {
            W = ht ? W : new xt(this);
            var Je = a.apply(W, H);
            return Je.__actions__.push({ func: lu, args: [xe], thisArg: n }), new Sr(Je, De);
          }
          return tt && ht ? a.apply(this, H) : (Je = this.thru(xe), tt ? g ? Je.value()[0] : Je.value() : Je);
        });
      }), ur(["pop", "push", "shift", "sort", "splice", "unshift"], function(a) {
        var o = Mc[a], f = /^(?:push|sort|unshift)$/.test(a) ? "tap" : "thru", g = /^(?:pop|shift)$/.test(a);
        T.prototype[a] = function() {
          var w = arguments;
          if (g && !this.__chain__) {
            var A = this.value();
            return o.apply(ct(A) ? A : [], w);
          }
          return this[f](function(W) {
            return o.apply(ct(W) ? W : [], w);
          });
        };
      }), la(xt.prototype, function(a, o) {
        var f = T[o];
        if (f) {
          var g = f.name + "";
          Ft.call(Yo, g) || (Yo[g] = []), Yo[g].push({ name: o, func: f });
        }
      }), Yo[tu(n, F).name] = [{
        name: "wrapper",
        func: n
      }], xt.prototype.clone = NO, xt.prototype.reverse = IO, xt.prototype.value = AO, T.prototype.at = sP, T.prototype.chain = lP, T.prototype.commit = cP, T.prototype.next = uP, T.prototype.plant = fP, T.prototype.reverse = pP, T.prototype.toJSON = T.prototype.valueOf = T.prototype.value = hP, T.prototype.first = T.prototype.head, Gs && (T.prototype[Gs] = dP), T;
    }, jo = cO();
    Ki ? ((Ki.exports = jo)._ = jo, tf._ = jo) : Pn._ = jo;
  }).call(ts);
})(Gu, Gu.exports);
var N = Gu.exports;
//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var cw;
function Re() {
  return cw.apply(null, arguments);
}
function r9(e) {
  cw = e;
}
function Jr(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function vo(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function Rt(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function _m(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (Rt(e, t))
      return !1;
  return !0;
}
function er(e) {
  return e === void 0;
}
function Za(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function yc(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function uw(e, t) {
  var n = [], r, i = e.length;
  for (r = 0; r < i; ++r)
    n.push(t(e[r], r));
  return n;
}
function Ei(e, t) {
  for (var n in t)
    Rt(t, n) && (e[n] = t[n]);
  return Rt(t, "toString") && (e.toString = t.toString), Rt(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function Sa(e, t, n, r) {
  return Rw(e, t, n, r, !0).utc();
}
function a9() {
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
function pt(e) {
  return e._pf == null && (e._pf = a9()), e._pf;
}
var ph;
Array.prototype.some ? ph = Array.prototype.some : ph = function(e) {
  var t = Object(this), n = t.length >>> 0, r;
  for (r = 0; r < n; r++)
    if (r in t && e.call(this, t[r], r, t))
      return !0;
  return !1;
};
function wm(e) {
  var t = null, n = !1, r = e._d && !isNaN(e._d.getTime());
  if (r && (t = pt(e), n = ph.call(t.parsedDateParts, function(i) {
    return i != null;
  }), r = t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n), e._strict && (r = r && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(e))
    e._isValid = r;
  else
    return r;
  return e._isValid;
}
function Sd(e) {
  var t = Sa(NaN);
  return e != null ? Ei(pt(t), e) : pt(t).userInvalidated = !0, t;
}
var d0 = Re.momentProperties = [], xp = !1;
function Em(e, t) {
  var n, r, i, s = d0.length;
  if (er(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), er(t._i) || (e._i = t._i), er(t._f) || (e._f = t._f), er(t._l) || (e._l = t._l), er(t._strict) || (e._strict = t._strict), er(t._tzm) || (e._tzm = t._tzm), er(t._isUTC) || (e._isUTC = t._isUTC), er(t._offset) || (e._offset = t._offset), er(t._pf) || (e._pf = pt(t)), er(t._locale) || (e._locale = t._locale), s > 0)
    for (n = 0; n < s; n++)
      r = d0[n], i = t[r], er(i) || (e[r] = i);
  return e;
}
function bc(e) {
  Em(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), xp === !1 && (xp = !0, Re.updateOffset(this), xp = !1);
}
function ea(e) {
  return e instanceof bc || e != null && e._isAMomentObject != null;
}
function dw(e) {
  Re.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function jr(e, t) {
  var n = !0;
  return Ei(function() {
    if (Re.deprecationHandler != null && Re.deprecationHandler(null, e), n) {
      var r = [], i, s, u, l = arguments.length;
      for (s = 0; s < l; s++) {
        if (i = "", typeof arguments[s] == "object") {
          i += `
[` + s + "] ";
          for (u in arguments[0])
            Rt(arguments[0], u) && (i += u + ": " + arguments[0][u] + ", ");
          i = i.slice(0, -2);
        } else
          i = arguments[s];
        r.push(i);
      }
      dw(
        e + `
Arguments: ` + Array.prototype.slice.call(r).join("") + `
` + new Error().stack
      ), n = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var f0 = {};
function fw(e, t) {
  Re.deprecationHandler != null && Re.deprecationHandler(e, t), f0[e] || (dw(t), f0[e] = !0);
}
Re.suppressDeprecationWarnings = !1;
Re.deprecationHandler = null;
function Ta(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function i9(e) {
  var t, n;
  for (n in e)
    Rt(e, n) && (t = e[n], Ta(t) ? this[n] = t : this["_" + n] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function hh(e, t) {
  var n = Ei({}, e), r;
  for (r in t)
    Rt(t, r) && (vo(e[r]) && vo(t[r]) ? (n[r] = {}, Ei(n[r], e[r]), Ei(n[r], t[r])) : t[r] != null ? n[r] = t[r] : delete n[r]);
  for (r in e)
    Rt(e, r) && !Rt(t, r) && vo(e[r]) && (n[r] = Ei({}, n[r]));
  return n;
}
function xm(e) {
  e != null && this.set(e);
}
var mh;
Object.keys ? mh = Object.keys : mh = function(e) {
  var t, n = [];
  for (t in e)
    Rt(e, t) && n.push(t);
  return n;
};
var o9 = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function s9(e, t, n) {
  var r = this._calendar[e] || this._calendar.sameElse;
  return Ta(r) ? r.call(t, n) : r;
}
function Ca(e, t, n) {
  var r = "" + Math.abs(e), i = t - r.length, s = e >= 0;
  return (s ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + r;
}
var Cm = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, bu = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Cp = {}, us = {};
function Ke(e, t, n, r) {
  var i = r;
  typeof r == "string" && (i = function() {
    return this[r]();
  }), e && (us[e] = i), t && (us[t[0]] = function() {
    return Ca(i.apply(this, arguments), t[1], t[2]);
  }), n && (us[n] = function() {
    return this.localeData().ordinal(
      i.apply(this, arguments),
      e
    );
  });
}
function l9(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function c9(e) {
  var t = e.match(Cm), n, r;
  for (n = 0, r = t.length; n < r; n++)
    us[t[n]] ? t[n] = us[t[n]] : t[n] = l9(t[n]);
  return function(i) {
    var s = "", u;
    for (u = 0; u < r; u++)
      s += Ta(t[u]) ? t[u].call(i, e) : t[u];
    return s;
  };
}
function Nu(e, t) {
  return e.isValid() ? (t = pw(t, e.localeData()), Cp[t] = Cp[t] || c9(t), Cp[t](e)) : e.localeData().invalidDate();
}
function pw(e, t) {
  var n = 5;
  function r(i) {
    return t.longDateFormat(i) || i;
  }
  for (bu.lastIndex = 0; n >= 0 && bu.test(e); )
    e = e.replace(
      bu,
      r
    ), bu.lastIndex = 0, n -= 1;
  return e;
}
var u9 = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function d9(e) {
  var t = this._longDateFormat[e], n = this._longDateFormat[e.toUpperCase()];
  return t || !n ? t : (this._longDateFormat[e] = n.match(Cm).map(function(r) {
    return r === "MMMM" || r === "MM" || r === "DD" || r === "dddd" ? r.slice(1) : r;
  }).join(""), this._longDateFormat[e]);
}
var f9 = "Invalid date";
function p9() {
  return this._invalidDate;
}
var h9 = "%d", m9 = /\d{1,2}/;
function g9(e) {
  return this._ordinal.replace("%d", e);
}
var v9 = {
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
function y9(e, t, n, r) {
  var i = this._relativeTime[n];
  return Ta(i) ? i(e, t, n, r) : i.replace(/%d/i, e);
}
function b9(e, t) {
  var n = this._relativeTime[e > 0 ? "future" : "past"];
  return Ta(n) ? n(t) : n.replace(/%s/i, t);
}
var p0 = {
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
function zr(e) {
  return typeof e == "string" ? p0[e] || p0[e.toLowerCase()] : void 0;
}
function Om(e) {
  var t = {}, n, r;
  for (r in e)
    Rt(e, r) && (n = zr(r), n && (t[n] = e[r]));
  return t;
}
var _9 = {
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
function w9(e) {
  var t = [], n;
  for (n in e)
    Rt(e, n) && t.push({ unit: n, priority: _9[n] });
  return t.sort(function(r, i) {
    return r.priority - i.priority;
  }), t;
}
var hw = /\d/, Er = /\d\d/, mw = /\d{3}/, Sm = /\d{4}/, Td = /[+-]?\d{6}/, an = /\d\d?/, gw = /\d\d\d\d?/, vw = /\d\d\d\d\d\d?/, Pd = /\d{1,3}/, Tm = /\d{1,4}/, kd = /[+-]?\d{1,6}/, Us = /\d+/, Nd = /[+-]?\d+/, E9 = /Z|[+-]\d\d:?\d\d/gi, Id = /Z|[+-]\d\d(?::?\d\d)?/gi, x9 = /[+-]?\d+(\.\d{1,3})?/, _c = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, js = /^[1-9]\d?/, Pm = /^([1-9]\d|\d)/, Ku;
Ku = {};
function je(e, t, n) {
  Ku[e] = Ta(t) ? t : function(r, i) {
    return r && n ? n : t;
  };
}
function C9(e, t) {
  return Rt(Ku, e) ? Ku[e](t._strict, t._locale) : new RegExp(O9(e));
}
function O9(e) {
  return Ya(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, n, r, i, s) {
        return n || r || i || s;
      }
    )
  );
}
function Ya(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function Rr(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function Ct(e) {
  var t = +e, n = 0;
  return t !== 0 && isFinite(t) && (n = Rr(t)), n;
}
var gh = {};
function qt(e, t) {
  var n, r = t, i;
  for (typeof e == "string" && (e = [e]), Za(t) && (r = function(s, u) {
    u[t] = Ct(s);
  }), i = e.length, n = 0; n < i; n++)
    gh[e[n]] = r;
}
function wc(e, t) {
  qt(e, function(n, r, i, s) {
    i._w = i._w || {}, t(n, i._w, i, s);
  });
}
function S9(e, t, n) {
  t != null && Rt(gh, e) && gh[e](t, n._a, n, e);
}
function Ad(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
var Ln = 0, ja = 1, ha = 2, wn = 3, Zr = 4, za = 5, fo = 6, T9 = 7, P9 = 8;
Ke("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? Ca(e, 4) : "+" + e;
});
Ke(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
Ke(0, ["YYYY", 4], 0, "year");
Ke(0, ["YYYYY", 5], 0, "year");
Ke(0, ["YYYYYY", 6, !0], 0, "year");
je("Y", Nd);
je("YY", an, Er);
je("YYYY", Tm, Sm);
je("YYYYY", kd, Td);
je("YYYYYY", kd, Td);
qt(["YYYYY", "YYYYYY"], Ln);
qt("YYYY", function(e, t) {
  t[Ln] = e.length === 2 ? Re.parseTwoDigitYear(e) : Ct(e);
});
qt("YY", function(e, t) {
  t[Ln] = Re.parseTwoDigitYear(e);
});
qt("Y", function(e, t) {
  t[Ln] = parseInt(e, 10);
});
function kl(e) {
  return Ad(e) ? 366 : 365;
}
Re.parseTwoDigitYear = function(e) {
  return Ct(e) + (Ct(e) > 68 ? 1900 : 2e3);
};
var yw = zs("FullYear", !0);
function k9() {
  return Ad(this.year());
}
function zs(e, t) {
  return function(n) {
    return n != null ? (bw(this, e, n), Re.updateOffset(this, t), this) : nc(this, e);
  };
}
function nc(e, t) {
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
function bw(e, t, n) {
  var r, i, s, u, l;
  if (!(!e.isValid() || isNaN(n))) {
    switch (r = e._d, i = e._isUTC, t) {
      case "Milliseconds":
        return void (i ? r.setUTCMilliseconds(n) : r.setMilliseconds(n));
      case "Seconds":
        return void (i ? r.setUTCSeconds(n) : r.setSeconds(n));
      case "Minutes":
        return void (i ? r.setUTCMinutes(n) : r.setMinutes(n));
      case "Hours":
        return void (i ? r.setUTCHours(n) : r.setHours(n));
      case "Date":
        return void (i ? r.setUTCDate(n) : r.setDate(n));
      case "FullYear":
        break;
      default:
        return;
    }
    s = n, u = e.month(), l = e.date(), l = l === 29 && u === 1 && !Ad(s) ? 28 : l, i ? r.setUTCFullYear(s, u, l) : r.setFullYear(s, u, l);
  }
}
function N9(e) {
  return e = zr(e), Ta(this[e]) ? this[e]() : this;
}
function I9(e, t) {
  if (typeof e == "object") {
    e = Om(e);
    var n = w9(e), r, i = n.length;
    for (r = 0; r < i; r++)
      this[n[r].unit](e[n[r].unit]);
  } else if (e = zr(e), Ta(this[e]))
    return this[e](t);
  return this;
}
function A9(e, t) {
  return (e % t + t) % t;
}
var mn;
Array.prototype.indexOf ? mn = Array.prototype.indexOf : mn = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function km(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var n = A9(t, 12);
  return e += (t - n) / 12, n === 1 ? Ad(e) ? 29 : 28 : 31 - n % 7 % 2;
}
Ke("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
Ke("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
Ke("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
je("M", an, js);
je("MM", an, Er);
je("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
je("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
qt(["M", "MM"], function(e, t) {
  t[ja] = Ct(e) - 1;
});
qt(["MMM", "MMMM"], function(e, t, n, r) {
  var i = n._locale.monthsParse(e, r, n._strict);
  i != null ? t[ja] = i : pt(n).invalidMonth = e;
});
var R9 = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), _w = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), ww = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, M9 = _c, D9 = _c;
function L9(e, t) {
  return e ? Jr(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || ww).test(t) ? "format" : "standalone"][e.month()] : Jr(this._months) ? this._months : this._months.standalone;
}
function F9(e, t) {
  return e ? Jr(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[ww.test(t) ? "format" : "standalone"][e.month()] : Jr(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function $9(e, t, n) {
  var r, i, s, u = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r)
      s = Sa([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(
        s,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[r] = this.months(s, "").toLocaleLowerCase();
  return n ? t === "MMM" ? (i = mn.call(this._shortMonthsParse, u), i !== -1 ? i : null) : (i = mn.call(this._longMonthsParse, u), i !== -1 ? i : null) : t === "MMM" ? (i = mn.call(this._shortMonthsParse, u), i !== -1 ? i : (i = mn.call(this._longMonthsParse, u), i !== -1 ? i : null)) : (i = mn.call(this._longMonthsParse, u), i !== -1 ? i : (i = mn.call(this._shortMonthsParse, u), i !== -1 ? i : null));
}
function B9(e, t, n) {
  var r, i, s;
  if (this._monthsParseExact)
    return $9.call(this, e, t, n);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
    if (i = Sa([2e3, r]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp(
      "^" + this.months(i, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[r] = new RegExp(
      "^" + this.monthsShort(i, "").replace(".", "") + "$",
      "i"
    )), !n && !this._monthsParse[r] && (s = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[r] = new RegExp(s.replace(".", ""), "i")), n && t === "MMMM" && this._longMonthsParse[r].test(e))
      return r;
    if (n && t === "MMM" && this._shortMonthsParse[r].test(e))
      return r;
    if (!n && this._monthsParse[r].test(e))
      return r;
  }
}
function Ew(e, t) {
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = Ct(t);
    else if (t = e.localeData().monthsParse(t), !Za(t))
      return e;
  }
  var n = t, r = e.date();
  return r = r < 29 ? r : Math.min(r, km(e.year(), n)), e._isUTC ? e._d.setUTCMonth(n, r) : e._d.setMonth(n, r), e;
}
function xw(e) {
  return e != null ? (Ew(this, e), Re.updateOffset(this, !0), this) : nc(this, "Month");
}
function W9() {
  return km(this.year(), this.month());
}
function U9(e) {
  return this._monthsParseExact ? (Rt(this, "_monthsRegex") || Cw.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (Rt(this, "_monthsShortRegex") || (this._monthsShortRegex = M9), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function j9(e) {
  return this._monthsParseExact ? (Rt(this, "_monthsRegex") || Cw.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (Rt(this, "_monthsRegex") || (this._monthsRegex = D9), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function Cw() {
  function e(d, p) {
    return p.length - d.length;
  }
  var t = [], n = [], r = [], i, s, u, l;
  for (i = 0; i < 12; i++)
    s = Sa([2e3, i]), u = Ya(this.monthsShort(s, "")), l = Ya(this.months(s, "")), t.push(u), n.push(l), r.push(l), r.push(u);
  t.sort(e), n.sort(e), r.sort(e), this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function z9(e, t, n, r, i, s, u) {
  var l;
  return e < 100 && e >= 0 ? (l = new Date(e + 400, t, n, r, i, s, u), isFinite(l.getFullYear()) && l.setFullYear(e)) : l = new Date(e, t, n, r, i, s, u), l;
}
function rc(e) {
  var t, n;
  return e < 100 && e >= 0 ? (n = Array.prototype.slice.call(arguments), n[0] = e + 400, t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function Zu(e, t, n) {
  var r = 7 + t - n, i = (7 + rc(e, 0, r).getUTCDay() - t) % 7;
  return -i + r - 1;
}
function Ow(e, t, n, r, i) {
  var s = (7 + n - r) % 7, u = Zu(e, r, i), l = 1 + 7 * (t - 1) + s + u, d, p;
  return l <= 0 ? (d = e - 1, p = kl(d) + l) : l > kl(e) ? (d = e + 1, p = l - kl(e)) : (d = e, p = l), {
    year: d,
    dayOfYear: p
  };
}
function ac(e, t, n) {
  var r = Zu(e.year(), t, n), i = Math.floor((e.dayOfYear() - r - 1) / 7) + 1, s, u;
  return i < 1 ? (u = e.year() - 1, s = i + qa(u, t, n)) : i > qa(e.year(), t, n) ? (s = i - qa(e.year(), t, n), u = e.year() + 1) : (u = e.year(), s = i), {
    week: s,
    year: u
  };
}
function qa(e, t, n) {
  var r = Zu(e, t, n), i = Zu(e + 1, t, n);
  return (kl(e) - r + i) / 7;
}
Ke("w", ["ww", 2], "wo", "week");
Ke("W", ["WW", 2], "Wo", "isoWeek");
je("w", an, js);
je("ww", an, Er);
je("W", an, js);
je("WW", an, Er);
wc(
  ["w", "ww", "W", "WW"],
  function(e, t, n, r) {
    t[r.substr(0, 1)] = Ct(e);
  }
);
function H9(e) {
  return ac(e, this._week.dow, this._week.doy).week;
}
var Y9 = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function q9() {
  return this._week.dow;
}
function V9() {
  return this._week.doy;
}
function G9(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function K9(e) {
  var t = ac(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
Ke("d", 0, "do", "day");
Ke("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
Ke("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
Ke("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
Ke("e", 0, 0, "weekday");
Ke("E", 0, 0, "isoWeekday");
je("d", an);
je("e", an);
je("E", an);
je("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
je("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
je("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
wc(["dd", "ddd", "dddd"], function(e, t, n, r) {
  var i = n._locale.weekdaysParse(e, r, n._strict);
  i != null ? t.d = i : pt(n).invalidWeekday = e;
});
wc(["d", "e", "E"], function(e, t, n, r) {
  t[r] = Ct(e);
});
function Z9(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function X9(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function Nm(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var Q9 = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Sw = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), J9 = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), e5 = _c, t5 = _c, n5 = _c;
function r5(e, t) {
  var n = Jr(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? Nm(n, this._week.dow) : e ? n[e.day()] : n;
}
function a5(e) {
  return e === !0 ? Nm(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function i5(e) {
  return e === !0 ? Nm(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function o5(e, t, n) {
  var r, i, s, u = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r)
      s = Sa([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(
        s,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(
        s,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(s, "").toLocaleLowerCase();
  return n ? t === "dddd" ? (i = mn.call(this._weekdaysParse, u), i !== -1 ? i : null) : t === "ddd" ? (i = mn.call(this._shortWeekdaysParse, u), i !== -1 ? i : null) : (i = mn.call(this._minWeekdaysParse, u), i !== -1 ? i : null) : t === "dddd" ? (i = mn.call(this._weekdaysParse, u), i !== -1 || (i = mn.call(this._shortWeekdaysParse, u), i !== -1) ? i : (i = mn.call(this._minWeekdaysParse, u), i !== -1 ? i : null)) : t === "ddd" ? (i = mn.call(this._shortWeekdaysParse, u), i !== -1 || (i = mn.call(this._weekdaysParse, u), i !== -1) ? i : (i = mn.call(this._minWeekdaysParse, u), i !== -1 ? i : null)) : (i = mn.call(this._minWeekdaysParse, u), i !== -1 || (i = mn.call(this._weekdaysParse, u), i !== -1) ? i : (i = mn.call(this._shortWeekdaysParse, u), i !== -1 ? i : null));
}
function s5(e, t, n) {
  var r, i, s;
  if (this._weekdaysParseExact)
    return o5.call(this, e, t, n);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
    if (i = Sa([2e3, 1]).day(r), n && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp(
      "^" + this.weekdays(i, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[r] = new RegExp(
      "^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[r] = new RegExp(
      "^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[r] || (s = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), this._weekdaysParse[r] = new RegExp(s.replace(".", ""), "i")), n && t === "dddd" && this._fullWeekdaysParse[r].test(e))
      return r;
    if (n && t === "ddd" && this._shortWeekdaysParse[r].test(e))
      return r;
    if (n && t === "dd" && this._minWeekdaysParse[r].test(e))
      return r;
    if (!n && this._weekdaysParse[r].test(e))
      return r;
  }
}
function l5(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = nc(this, "Day");
  return e != null ? (e = Z9(e, this.localeData()), this.add(e - t, "d")) : t;
}
function c5(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function u5(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = X9(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function d5(e) {
  return this._weekdaysParseExact ? (Rt(this, "_weekdaysRegex") || Im.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (Rt(this, "_weekdaysRegex") || (this._weekdaysRegex = e5), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function f5(e) {
  return this._weekdaysParseExact ? (Rt(this, "_weekdaysRegex") || Im.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (Rt(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = t5), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function p5(e) {
  return this._weekdaysParseExact ? (Rt(this, "_weekdaysRegex") || Im.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (Rt(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = n5), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function Im() {
  function e(h, m) {
    return m.length - h.length;
  }
  var t = [], n = [], r = [], i = [], s, u, l, d, p;
  for (s = 0; s < 7; s++)
    u = Sa([2e3, 1]).day(s), l = Ya(this.weekdaysMin(u, "")), d = Ya(this.weekdaysShort(u, "")), p = Ya(this.weekdays(u, "")), t.push(l), n.push(d), r.push(p), i.push(l), i.push(d), i.push(p);
  t.sort(e), n.sort(e), r.sort(e), i.sort(e), this._weekdaysRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
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
function Am() {
  return this.hours() % 12 || 12;
}
function h5() {
  return this.hours() || 24;
}
Ke("H", ["HH", 2], 0, "hour");
Ke("h", ["hh", 2], 0, Am);
Ke("k", ["kk", 2], 0, h5);
Ke("hmm", 0, 0, function() {
  return "" + Am.apply(this) + Ca(this.minutes(), 2);
});
Ke("hmmss", 0, 0, function() {
  return "" + Am.apply(this) + Ca(this.minutes(), 2) + Ca(this.seconds(), 2);
});
Ke("Hmm", 0, 0, function() {
  return "" + this.hours() + Ca(this.minutes(), 2);
});
Ke("Hmmss", 0, 0, function() {
  return "" + this.hours() + Ca(this.minutes(), 2) + Ca(this.seconds(), 2);
});
function Tw(e, t) {
  Ke(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
Tw("a", !0);
Tw("A", !1);
function Pw(e, t) {
  return t._meridiemParse;
}
je("a", Pw);
je("A", Pw);
je("H", an, Pm);
je("h", an, js);
je("k", an, js);
je("HH", an, Er);
je("hh", an, Er);
je("kk", an, Er);
je("hmm", gw);
je("hmmss", vw);
je("Hmm", gw);
je("Hmmss", vw);
qt(["H", "HH"], wn);
qt(["k", "kk"], function(e, t, n) {
  var r = Ct(e);
  t[wn] = r === 24 ? 0 : r;
});
qt(["a", "A"], function(e, t, n) {
  n._isPm = n._locale.isPM(e), n._meridiem = e;
});
qt(["h", "hh"], function(e, t, n) {
  t[wn] = Ct(e), pt(n).bigHour = !0;
});
qt("hmm", function(e, t, n) {
  var r = e.length - 2;
  t[wn] = Ct(e.substr(0, r)), t[Zr] = Ct(e.substr(r)), pt(n).bigHour = !0;
});
qt("hmmss", function(e, t, n) {
  var r = e.length - 4, i = e.length - 2;
  t[wn] = Ct(e.substr(0, r)), t[Zr] = Ct(e.substr(r, 2)), t[za] = Ct(e.substr(i)), pt(n).bigHour = !0;
});
qt("Hmm", function(e, t, n) {
  var r = e.length - 2;
  t[wn] = Ct(e.substr(0, r)), t[Zr] = Ct(e.substr(r));
});
qt("Hmmss", function(e, t, n) {
  var r = e.length - 4, i = e.length - 2;
  t[wn] = Ct(e.substr(0, r)), t[Zr] = Ct(e.substr(r, 2)), t[za] = Ct(e.substr(i));
});
function m5(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var g5 = /[ap]\.?m?\.?/i, v5 = zs("Hours", !0);
function y5(e, t, n) {
  return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM";
}
var kw = {
  calendar: o9,
  longDateFormat: u9,
  invalidDate: f9,
  ordinal: h9,
  dayOfMonthOrdinalParse: m9,
  relativeTime: v9,
  months: R9,
  monthsShort: _w,
  week: Y9,
  weekdays: Q9,
  weekdaysMin: J9,
  weekdaysShort: Sw,
  meridiemParse: g5
}, sn = {}, hl = {}, ic;
function b5(e, t) {
  var n, r = Math.min(e.length, t.length);
  for (n = 0; n < r; n += 1)
    if (e[n] !== t[n])
      return n;
  return r;
}
function h0(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function _5(e) {
  for (var t = 0, n, r, i, s; t < e.length; ) {
    for (s = h0(e[t]).split("-"), n = s.length, r = h0(e[t + 1]), r = r ? r.split("-") : null; n > 0; ) {
      if (i = Rd(s.slice(0, n).join("-")), i)
        return i;
      if (r && r.length >= n && b5(s, r) >= n - 1)
        break;
      n--;
    }
    t++;
  }
  return ic;
}
function w5(e) {
  return !!(e && e.match("^[^/\\\\]*$"));
}
function Rd(e) {
  var t = null, n;
  if (sn[e] === void 0 && typeof module < "u" && module && module.exports && w5(e))
    try {
      t = ic._abbr, n = require, n("./locale/" + e), Oi(t);
    } catch {
      sn[e] = null;
    }
  return sn[e];
}
function Oi(e, t) {
  var n;
  return e && (er(t) ? n = ri(e) : n = Rm(e, t), n ? ic = n : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), ic._abbr;
}
function Rm(e, t) {
  if (t !== null) {
    var n, r = kw;
    if (t.abbr = e, sn[e] != null)
      fw(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), r = sn[e]._config;
    else if (t.parentLocale != null)
      if (sn[t.parentLocale] != null)
        r = sn[t.parentLocale]._config;
      else if (n = Rd(t.parentLocale), n != null)
        r = n._config;
      else
        return hl[t.parentLocale] || (hl[t.parentLocale] = []), hl[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return sn[e] = new xm(hh(r, t)), hl[e] && hl[e].forEach(function(i) {
      Rm(i.name, i.config);
    }), Oi(e), sn[e];
  } else
    return delete sn[e], null;
}
function E5(e, t) {
  if (t != null) {
    var n, r, i = kw;
    sn[e] != null && sn[e].parentLocale != null ? sn[e].set(hh(sn[e]._config, t)) : (r = Rd(e), r != null && (i = r._config), t = hh(i, t), r == null && (t.abbr = e), n = new xm(t), n.parentLocale = sn[e], sn[e] = n), Oi(e);
  } else
    sn[e] != null && (sn[e].parentLocale != null ? (sn[e] = sn[e].parentLocale, e === Oi() && Oi(e)) : sn[e] != null && delete sn[e]);
  return sn[e];
}
function ri(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return ic;
  if (!Jr(e)) {
    if (t = Rd(e), t)
      return t;
    e = [e];
  }
  return _5(e);
}
function x5() {
  return mh(sn);
}
function Mm(e) {
  var t, n = e._a;
  return n && pt(e).overflow === -2 && (t = n[ja] < 0 || n[ja] > 11 ? ja : n[ha] < 1 || n[ha] > km(n[Ln], n[ja]) ? ha : n[wn] < 0 || n[wn] > 24 || n[wn] === 24 && (n[Zr] !== 0 || n[za] !== 0 || n[fo] !== 0) ? wn : n[Zr] < 0 || n[Zr] > 59 ? Zr : n[za] < 0 || n[za] > 59 ? za : n[fo] < 0 || n[fo] > 999 ? fo : -1, pt(e)._overflowDayOfYear && (t < Ln || t > ha) && (t = ha), pt(e)._overflowWeeks && t === -1 && (t = T9), pt(e)._overflowWeekday && t === -1 && (t = P9), pt(e).overflow = t), e;
}
var C5 = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, O5 = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, S5 = /Z|[+-]\d\d(?::?\d\d)?/, _u = [
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
], Op = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], T5 = /^\/?Date\((-?\d+)/i, P5 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, k5 = {
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
function Nw(e) {
  var t, n, r = e._i, i = C5.exec(r) || O5.exec(r), s, u, l, d, p = _u.length, h = Op.length;
  if (i) {
    for (pt(e).iso = !0, t = 0, n = p; t < n; t++)
      if (_u[t][1].exec(i[1])) {
        u = _u[t][0], s = _u[t][2] !== !1;
        break;
      }
    if (u == null) {
      e._isValid = !1;
      return;
    }
    if (i[3]) {
      for (t = 0, n = h; t < n; t++)
        if (Op[t][1].exec(i[3])) {
          l = (i[2] || " ") + Op[t][0];
          break;
        }
      if (l == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!s && l != null) {
      e._isValid = !1;
      return;
    }
    if (i[4])
      if (S5.exec(i[4]))
        d = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = u + (l || "") + (d || ""), Lm(e);
  } else
    e._isValid = !1;
}
function N5(e, t, n, r, i, s) {
  var u = [
    I5(e),
    _w.indexOf(t),
    parseInt(n, 10),
    parseInt(r, 10),
    parseInt(i, 10)
  ];
  return s && u.push(parseInt(s, 10)), u;
}
function I5(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function A5(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function R5(e, t, n) {
  if (e) {
    var r = Sw.indexOf(e), i = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (r !== i)
      return pt(n).weekdayMismatch = !0, n._isValid = !1, !1;
  }
  return !0;
}
function M5(e, t, n) {
  if (e)
    return k5[e];
  if (t)
    return 0;
  var r = parseInt(n, 10), i = r % 100, s = (r - i) / 100;
  return s * 60 + i;
}
function Iw(e) {
  var t = P5.exec(A5(e._i)), n;
  if (t) {
    if (n = N5(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !R5(t[1], n, e))
      return;
    e._a = n, e._tzm = M5(t[8], t[9], t[10]), e._d = rc.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), pt(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function D5(e) {
  var t = T5.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (Nw(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (Iw(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : Re.createFromInputFallback(e);
}
Re.createFromInputFallback = jr(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function rs(e, t, n) {
  return e ?? t ?? n;
}
function L5(e) {
  var t = new Date(Re.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function Dm(e) {
  var t, n, r = [], i, s, u;
  if (!e._d) {
    for (i = L5(e), e._w && e._a[ha] == null && e._a[ja] == null && F5(e), e._dayOfYear != null && (u = rs(e._a[Ln], i[Ln]), (e._dayOfYear > kl(u) || e._dayOfYear === 0) && (pt(e)._overflowDayOfYear = !0), n = rc(u, 0, e._dayOfYear), e._a[ja] = n.getUTCMonth(), e._a[ha] = n.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = r[t] = i[t];
    for (; t < 7; t++)
      e._a[t] = r[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[wn] === 24 && e._a[Zr] === 0 && e._a[za] === 0 && e._a[fo] === 0 && (e._nextDay = !0, e._a[wn] = 0), e._d = (e._useUTC ? rc : z9).apply(
      null,
      r
    ), s = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[wn] = 24), e._w && typeof e._w.d < "u" && e._w.d !== s && (pt(e).weekdayMismatch = !0);
  }
}
function F5(e) {
  var t, n, r, i, s, u, l, d, p;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (s = 1, u = 4, n = rs(
    t.GG,
    e._a[Ln],
    ac(rn(), 1, 4).year
  ), r = rs(t.W, 1), i = rs(t.E, 1), (i < 1 || i > 7) && (d = !0)) : (s = e._locale._week.dow, u = e._locale._week.doy, p = ac(rn(), s, u), n = rs(t.gg, e._a[Ln], p.year), r = rs(t.w, p.week), t.d != null ? (i = t.d, (i < 0 || i > 6) && (d = !0)) : t.e != null ? (i = t.e + s, (t.e < 0 || t.e > 6) && (d = !0)) : i = s), r < 1 || r > qa(n, s, u) ? pt(e)._overflowWeeks = !0 : d != null ? pt(e)._overflowWeekday = !0 : (l = Ow(n, r, i, s, u), e._a[Ln] = l.year, e._dayOfYear = l.dayOfYear);
}
Re.ISO_8601 = function() {
};
Re.RFC_2822 = function() {
};
function Lm(e) {
  if (e._f === Re.ISO_8601) {
    Nw(e);
    return;
  }
  if (e._f === Re.RFC_2822) {
    Iw(e);
    return;
  }
  e._a = [], pt(e).empty = !0;
  var t = "" + e._i, n, r, i, s, u, l = t.length, d = 0, p, h;
  for (i = pw(e._f, e._locale).match(Cm) || [], h = i.length, n = 0; n < h; n++)
    s = i[n], r = (t.match(C9(s, e)) || [])[0], r && (u = t.substr(0, t.indexOf(r)), u.length > 0 && pt(e).unusedInput.push(u), t = t.slice(
      t.indexOf(r) + r.length
    ), d += r.length), us[s] ? (r ? pt(e).empty = !1 : pt(e).unusedTokens.push(s), S9(s, r, e)) : e._strict && !r && pt(e).unusedTokens.push(s);
  pt(e).charsLeftOver = l - d, t.length > 0 && pt(e).unusedInput.push(t), e._a[wn] <= 12 && pt(e).bigHour === !0 && e._a[wn] > 0 && (pt(e).bigHour = void 0), pt(e).parsedDateParts = e._a.slice(0), pt(e).meridiem = e._meridiem, e._a[wn] = $5(
    e._locale,
    e._a[wn],
    e._meridiem
  ), p = pt(e).era, p !== null && (e._a[Ln] = e._locale.erasConvertYear(p, e._a[Ln])), Dm(e), Mm(e);
}
function $5(e, t, n) {
  var r;
  return n == null ? t : e.meridiemHour != null ? e.meridiemHour(t, n) : (e.isPM != null && (r = e.isPM(n), r && t < 12 && (t += 12), !r && t === 12 && (t = 0)), t);
}
function B5(e) {
  var t, n, r, i, s, u, l = !1, d = e._f.length;
  if (d === 0) {
    pt(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (i = 0; i < d; i++)
    s = 0, u = !1, t = Em({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[i], Lm(t), wm(t) && (u = !0), s += pt(t).charsLeftOver, s += pt(t).unusedTokens.length * 10, pt(t).score = s, l ? s < r && (r = s, n = t) : (r == null || s < r || u) && (r = s, n = t, u && (l = !0));
  Ei(e, n || t);
}
function W5(e) {
  if (!e._d) {
    var t = Om(e._i), n = t.day === void 0 ? t.date : t.day;
    e._a = uw(
      [t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond],
      function(r) {
        return r && parseInt(r, 10);
      }
    ), Dm(e);
  }
}
function U5(e) {
  var t = new bc(Mm(Aw(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function Aw(e) {
  var t = e._i, n = e._f;
  return e._locale = e._locale || ri(e._l), t === null || n === void 0 && t === "" ? Sd({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), ea(t) ? new bc(Mm(t)) : (yc(t) ? e._d = t : Jr(n) ? B5(e) : n ? Lm(e) : j5(e), wm(e) || (e._d = null), e));
}
function j5(e) {
  var t = e._i;
  er(t) ? e._d = new Date(Re.now()) : yc(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? D5(e) : Jr(t) ? (e._a = uw(t.slice(0), function(n) {
    return parseInt(n, 10);
  }), Dm(e)) : vo(t) ? W5(e) : Za(t) ? e._d = new Date(t) : Re.createFromInputFallback(e);
}
function Rw(e, t, n, r, i) {
  var s = {};
  return (t === !0 || t === !1) && (r = t, t = void 0), (n === !0 || n === !1) && (r = n, n = void 0), (vo(e) && _m(e) || Jr(e) && e.length === 0) && (e = void 0), s._isAMomentObject = !0, s._useUTC = s._isUTC = i, s._l = n, s._i = e, s._f = t, s._strict = r, U5(s);
}
function rn(e, t, n, r) {
  return Rw(e, t, n, r, !1);
}
var z5 = jr(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = rn.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : Sd();
  }
), H5 = jr(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = rn.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : Sd();
  }
);
function Mw(e, t) {
  var n, r;
  if (t.length === 1 && Jr(t[0]) && (t = t[0]), !t.length)
    return rn();
  for (n = t[0], r = 1; r < t.length; ++r)
    (!t[r].isValid() || t[r][e](n)) && (n = t[r]);
  return n;
}
function Y5() {
  var e = [].slice.call(arguments, 0);
  return Mw("isBefore", e);
}
function q5() {
  var e = [].slice.call(arguments, 0);
  return Mw("isAfter", e);
}
var V5 = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, ml = [
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
function G5(e) {
  var t, n = !1, r, i = ml.length;
  for (t in e)
    if (Rt(e, t) && !(mn.call(ml, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (r = 0; r < i; ++r)
    if (e[ml[r]]) {
      if (n)
        return !1;
      parseFloat(e[ml[r]]) !== Ct(e[ml[r]]) && (n = !0);
    }
  return !0;
}
function K5() {
  return this._isValid;
}
function Z5() {
  return ra(NaN);
}
function Md(e) {
  var t = Om(e), n = t.year || 0, r = t.quarter || 0, i = t.month || 0, s = t.week || t.isoWeek || 0, u = t.day || 0, l = t.hour || 0, d = t.minute || 0, p = t.second || 0, h = t.millisecond || 0;
  this._isValid = G5(t), this._milliseconds = +h + p * 1e3 + // 1000
  d * 6e4 + // 1000 * 60
  l * 1e3 * 60 * 60, this._days = +u + s * 7, this._months = +i + r * 3 + n * 12, this._data = {}, this._locale = ri(), this._bubble();
}
function Iu(e) {
  return e instanceof Md;
}
function vh(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function X5(e, t, n) {
  var r = Math.min(e.length, t.length), i = Math.abs(e.length - t.length), s = 0, u;
  for (u = 0; u < r; u++)
    Ct(e[u]) !== Ct(t[u]) && s++;
  return s + i;
}
function Dw(e, t) {
  Ke(e, 0, 0, function() {
    var n = this.utcOffset(), r = "+";
    return n < 0 && (n = -n, r = "-"), r + Ca(~~(n / 60), 2) + t + Ca(~~n % 60, 2);
  });
}
Dw("Z", ":");
Dw("ZZ", "");
je("Z", Id);
je("ZZ", Id);
qt(["Z", "ZZ"], function(e, t, n) {
  n._useUTC = !0, n._tzm = Fm(Id, e);
});
var Q5 = /([\+\-]|\d\d)/gi;
function Fm(e, t) {
  var n = (t || "").match(e), r, i, s;
  return n === null ? null : (r = n[n.length - 1] || [], i = (r + "").match(Q5) || ["-", 0, 0], s = +(i[1] * 60) + Ct(i[2]), s === 0 ? 0 : i[0] === "+" ? s : -s);
}
function $m(e, t) {
  var n, r;
  return t._isUTC ? (n = t.clone(), r = (ea(e) || yc(e) ? e.valueOf() : rn(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + r), Re.updateOffset(n, !1), n) : rn(e).local();
}
function yh(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
Re.updateOffset = function() {
};
function J5(e, t, n) {
  var r = this._offset || 0, i;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = Fm(Id, e), e === null)
        return this;
    } else Math.abs(e) < 16 && !n && (e = e * 60);
    return !this._isUTC && t && (i = yh(this)), this._offset = e, this._isUTC = !0, i != null && this.add(i, "m"), r !== e && (!t || this._changeInProgress ? $w(
      this,
      ra(e - r, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, Re.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? r : yh(this);
}
function eB(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function tB(e) {
  return this.utcOffset(0, e);
}
function nB(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(yh(this), "m")), this;
}
function rB() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = Fm(E9, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function aB(e) {
  return this.isValid() ? (e = e ? rn(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function iB() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function oB() {
  if (!er(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return Em(e, this), e = Aw(e), e._a ? (t = e._isUTC ? Sa(e._a) : rn(e._a), this._isDSTShifted = this.isValid() && X5(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function sB() {
  return this.isValid() ? !this._isUTC : !1;
}
function lB() {
  return this.isValid() ? this._isUTC : !1;
}
function Lw() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var cB = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, uB = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function ra(e, t) {
  var n = e, r = null, i, s, u;
  return Iu(e) ? n = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : Za(e) || !isNaN(+e) ? (n = {}, t ? n[t] = +e : n.milliseconds = +e) : (r = cB.exec(e)) ? (i = r[1] === "-" ? -1 : 1, n = {
    y: 0,
    d: Ct(r[ha]) * i,
    h: Ct(r[wn]) * i,
    m: Ct(r[Zr]) * i,
    s: Ct(r[za]) * i,
    ms: Ct(vh(r[fo] * 1e3)) * i
    // the millisecond decimal point is included in the match
  }) : (r = uB.exec(e)) ? (i = r[1] === "-" ? -1 : 1, n = {
    y: ao(r[2], i),
    M: ao(r[3], i),
    w: ao(r[4], i),
    d: ao(r[5], i),
    h: ao(r[6], i),
    m: ao(r[7], i),
    s: ao(r[8], i)
  }) : n == null ? n = {} : typeof n == "object" && ("from" in n || "to" in n) && (u = dB(
    rn(n.from),
    rn(n.to)
  ), n = {}, n.ms = u.milliseconds, n.M = u.months), s = new Md(n), Iu(e) && Rt(e, "_locale") && (s._locale = e._locale), Iu(e) && Rt(e, "_isValid") && (s._isValid = e._isValid), s;
}
ra.fn = Md.prototype;
ra.invalid = Z5;
function ao(e, t) {
  var n = e && parseFloat(e.replace(",", "."));
  return (isNaN(n) ? 0 : n) * t;
}
function m0(e, t) {
  var n = {};
  return n.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n;
}
function dB(e, t) {
  var n;
  return e.isValid() && t.isValid() ? (t = $m(t, e), e.isBefore(t) ? n = m0(e, t) : (n = m0(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : { milliseconds: 0, months: 0 };
}
function Fw(e, t) {
  return function(n, r) {
    var i, s;
    return r !== null && !isNaN(+r) && (fw(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), s = n, n = r, r = s), i = ra(n, r), $w(this, i, e), this;
  };
}
function $w(e, t, n, r) {
  var i = t._milliseconds, s = vh(t._days), u = vh(t._months);
  e.isValid() && (r = r ?? !0, u && Ew(e, nc(e, "Month") + u * n), s && bw(e, "Date", nc(e, "Date") + s * n), i && e._d.setTime(e._d.valueOf() + i * n), r && Re.updateOffset(e, s || u));
}
var fB = Fw(1, "add"), pB = Fw(-1, "subtract");
function Bw(e) {
  return typeof e == "string" || e instanceof String;
}
function hB(e) {
  return ea(e) || yc(e) || Bw(e) || Za(e) || gB(e) || mB(e) || e === null || e === void 0;
}
function mB(e) {
  var t = vo(e) && !_m(e), n = !1, r = [
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
  ], i, s, u = r.length;
  for (i = 0; i < u; i += 1)
    s = r[i], n = n || Rt(e, s);
  return t && n;
}
function gB(e) {
  var t = Jr(e), n = !1;
  return t && (n = e.filter(function(r) {
    return !Za(r) && Bw(e);
  }).length === 0), t && n;
}
function vB(e) {
  var t = vo(e) && !_m(e), n = !1, r = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], i, s;
  for (i = 0; i < r.length; i += 1)
    s = r[i], n = n || Rt(e, s);
  return t && n;
}
function yB(e, t) {
  var n = e.diff(t, "days", !0);
  return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
}
function bB(e, t) {
  arguments.length === 1 && (arguments[0] ? hB(arguments[0]) ? (e = arguments[0], t = void 0) : vB(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var n = e || rn(), r = $m(n, this).startOf("day"), i = Re.calendarFormat(this, r) || "sameElse", s = t && (Ta(t[i]) ? t[i].call(this, n) : t[i]);
  return this.format(
    s || this.localeData().calendar(i, this, rn(n))
  );
}
function _B() {
  return new bc(this);
}
function wB(e, t) {
  var n = ea(e) ? e : rn(e);
  return this.isValid() && n.isValid() ? (t = zr(t) || "millisecond", t === "millisecond" ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function EB(e, t) {
  var n = ea(e) ? e : rn(e);
  return this.isValid() && n.isValid() ? (t = zr(t) || "millisecond", t === "millisecond" ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf()) : !1;
}
function xB(e, t, n, r) {
  var i = ea(e) ? e : rn(e), s = ea(t) ? t : rn(t);
  return this.isValid() && i.isValid() && s.isValid() ? (r = r || "()", (r[0] === "(" ? this.isAfter(i, n) : !this.isBefore(i, n)) && (r[1] === ")" ? this.isBefore(s, n) : !this.isAfter(s, n))) : !1;
}
function CB(e, t) {
  var n = ea(e) ? e : rn(e), r;
  return this.isValid() && n.isValid() ? (t = zr(t) || "millisecond", t === "millisecond" ? this.valueOf() === n.valueOf() : (r = n.valueOf(), this.clone().startOf(t).valueOf() <= r && r <= this.clone().endOf(t).valueOf())) : !1;
}
function OB(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function SB(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function TB(e, t, n) {
  var r, i, s;
  if (!this.isValid())
    return NaN;
  if (r = $m(e, this), !r.isValid())
    return NaN;
  switch (i = (r.utcOffset() - this.utcOffset()) * 6e4, t = zr(t), t) {
    case "year":
      s = Au(this, r) / 12;
      break;
    case "month":
      s = Au(this, r);
      break;
    case "quarter":
      s = Au(this, r) / 3;
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
      s = (this - r - i) / 864e5;
      break;
    case "week":
      s = (this - r - i) / 6048e5;
      break;
    default:
      s = this - r;
  }
  return n ? s : Rr(s);
}
function Au(e, t) {
  if (e.date() < t.date())
    return -Au(t, e);
  var n = (t.year() - e.year()) * 12 + (t.month() - e.month()), r = e.clone().add(n, "months"), i, s;
  return t - r < 0 ? (i = e.clone().add(n - 1, "months"), s = (t - r) / (r - i)) : (i = e.clone().add(n + 1, "months"), s = (t - r) / (i - r)), -(n + s) || 0;
}
Re.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
Re.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function PB() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function kB(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, n = t ? this.clone().utc() : this;
  return n.year() < 0 || n.year() > 9999 ? Nu(
    n,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : Ta(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", Nu(n, "Z")) : Nu(
    n,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function NB() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", n, r, i, s;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), n = "[" + e + '("]', r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", i = "-MM-DD[T]HH:mm:ss.SSS", s = t + '[")]', this.format(n + r + i + s);
}
function IB(e) {
  e || (e = this.isUtc() ? Re.defaultFormatUtc : Re.defaultFormat);
  var t = Nu(this, e);
  return this.localeData().postformat(t);
}
function AB(e, t) {
  return this.isValid() && (ea(e) && e.isValid() || rn(e).isValid()) ? ra({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function RB(e) {
  return this.from(rn(), e);
}
function MB(e, t) {
  return this.isValid() && (ea(e) && e.isValid() || rn(e).isValid()) ? ra({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function DB(e) {
  return this.to(rn(), e);
}
function Ww(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = ri(e), t != null && (this._locale = t), this);
}
var Uw = jr(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function jw() {
  return this._locale;
}
var Xu = 1e3, ds = 60 * Xu, Qu = 60 * ds, zw = (365 * 400 + 97) * 24 * Qu;
function fs(e, t) {
  return (e % t + t) % t;
}
function Hw(e, t, n) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, n) - zw : new Date(e, t, n).valueOf();
}
function Yw(e, t, n) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - zw : Date.UTC(e, t, n);
}
function LB(e) {
  var t, n;
  if (e = zr(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (n = this._isUTC ? Yw : Hw, e) {
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
      t = this._d.valueOf(), t -= fs(
        t + (this._isUTC ? 0 : this.utcOffset() * ds),
        Qu
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= fs(t, ds);
      break;
    case "second":
      t = this._d.valueOf(), t -= fs(t, Xu);
      break;
  }
  return this._d.setTime(t), Re.updateOffset(this, !0), this;
}
function FB(e) {
  var t, n;
  if (e = zr(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (n = this._isUTC ? Yw : Hw, e) {
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
      t = this._d.valueOf(), t += Qu - fs(
        t + (this._isUTC ? 0 : this.utcOffset() * ds),
        Qu
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += ds - fs(t, ds) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += Xu - fs(t, Xu) - 1;
      break;
  }
  return this._d.setTime(t), Re.updateOffset(this, !0), this;
}
function $B() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function BB() {
  return Math.floor(this.valueOf() / 1e3);
}
function WB() {
  return new Date(this.valueOf());
}
function UB() {
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
function jB() {
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
function zB() {
  return this.isValid() ? this.toISOString() : null;
}
function HB() {
  return wm(this);
}
function YB() {
  return Ei({}, pt(this));
}
function qB() {
  return pt(this).overflow;
}
function VB() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
Ke("N", 0, 0, "eraAbbr");
Ke("NN", 0, 0, "eraAbbr");
Ke("NNN", 0, 0, "eraAbbr");
Ke("NNNN", 0, 0, "eraName");
Ke("NNNNN", 0, 0, "eraNarrow");
Ke("y", ["y", 1], "yo", "eraYear");
Ke("y", ["yy", 2], 0, "eraYear");
Ke("y", ["yyy", 3], 0, "eraYear");
Ke("y", ["yyyy", 4], 0, "eraYear");
je("N", Bm);
je("NN", Bm);
je("NNN", Bm);
je("NNNN", a4);
je("NNNNN", i4);
qt(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, n, r) {
    var i = n._locale.erasParse(e, r, n._strict);
    i ? pt(n).era = i : pt(n).invalidEra = e;
  }
);
je("y", Us);
je("yy", Us);
je("yyy", Us);
je("yyyy", Us);
je("yo", o4);
qt(["y", "yy", "yyy", "yyyy"], Ln);
qt(["yo"], function(e, t, n, r) {
  var i;
  n._locale._eraYearOrdinalRegex && (i = e.match(n._locale._eraYearOrdinalRegex)), n._locale.eraYearOrdinalParse ? t[Ln] = n._locale.eraYearOrdinalParse(e, i) : t[Ln] = parseInt(e, 10);
});
function GB(e, t) {
  var n, r, i, s = this._eras || ri("en")._eras;
  for (n = 0, r = s.length; n < r; ++n) {
    switch (typeof s[n].since) {
      case "string":
        i = Re(s[n].since).startOf("day"), s[n].since = i.valueOf();
        break;
    }
    switch (typeof s[n].until) {
      case "undefined":
        s[n].until = 1 / 0;
        break;
      case "string":
        i = Re(s[n].until).startOf("day").valueOf(), s[n].until = i.valueOf();
        break;
    }
  }
  return s;
}
function KB(e, t, n) {
  var r, i, s = this.eras(), u, l, d;
  for (e = e.toUpperCase(), r = 0, i = s.length; r < i; ++r)
    if (u = s[r].name.toUpperCase(), l = s[r].abbr.toUpperCase(), d = s[r].narrow.toUpperCase(), n)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (l === e)
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
    else if ([u, l, d].indexOf(e) >= 0)
      return s[r];
}
function ZB(e, t) {
  var n = e.since <= e.until ? 1 : -1;
  return t === void 0 ? Re(e.since).year() : Re(e.since).year() + (t - e.offset) * n;
}
function XB() {
  var e, t, n, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
      return r[e].name;
  return "";
}
function QB() {
  var e, t, n, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
      return r[e].narrow;
  return "";
}
function JB() {
  var e, t, n, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
      return r[e].abbr;
  return "";
}
function e4() {
  var e, t, n, r, i = this.localeData().eras();
  for (e = 0, t = i.length; e < t; ++e)
    if (n = i[e].since <= i[e].until ? 1 : -1, r = this.clone().startOf("day").valueOf(), i[e].since <= r && r <= i[e].until || i[e].until <= r && r <= i[e].since)
      return (this.year() - Re(i[e].since).year()) * n + i[e].offset;
  return this.year();
}
function t4(e) {
  return Rt(this, "_erasNameRegex") || Wm.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function n4(e) {
  return Rt(this, "_erasAbbrRegex") || Wm.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function r4(e) {
  return Rt(this, "_erasNarrowRegex") || Wm.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function Bm(e, t) {
  return t.erasAbbrRegex(e);
}
function a4(e, t) {
  return t.erasNameRegex(e);
}
function i4(e, t) {
  return t.erasNarrowRegex(e);
}
function o4(e, t) {
  return t._eraYearOrdinalRegex || Us;
}
function Wm() {
  var e = [], t = [], n = [], r = [], i, s, u, l, d, p = this.eras();
  for (i = 0, s = p.length; i < s; ++i)
    u = Ya(p[i].name), l = Ya(p[i].abbr), d = Ya(p[i].narrow), t.push(u), e.push(l), n.push(d), r.push(u), r.push(l), r.push(d);
  this._erasRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  );
}
Ke(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
Ke(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function Dd(e, t) {
  Ke(0, [e, e.length], 0, t);
}
Dd("gggg", "weekYear");
Dd("ggggg", "weekYear");
Dd("GGGG", "isoWeekYear");
Dd("GGGGG", "isoWeekYear");
je("G", Nd);
je("g", Nd);
je("GG", an, Er);
je("gg", an, Er);
je("GGGG", Tm, Sm);
je("gggg", Tm, Sm);
je("GGGGG", kd, Td);
je("ggggg", kd, Td);
wc(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, n, r) {
    t[r.substr(0, 2)] = Ct(e);
  }
);
wc(["gg", "GG"], function(e, t, n, r) {
  t[r] = Re.parseTwoDigitYear(e);
});
function s4(e) {
  return qw.call(
    this,
    e,
    this.week(),
    this.weekday() + this.localeData()._week.dow,
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function l4(e) {
  return qw.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function c4() {
  return qa(this.year(), 1, 4);
}
function u4() {
  return qa(this.isoWeekYear(), 1, 4);
}
function d4() {
  var e = this.localeData()._week;
  return qa(this.year(), e.dow, e.doy);
}
function f4() {
  var e = this.localeData()._week;
  return qa(this.weekYear(), e.dow, e.doy);
}
function qw(e, t, n, r, i) {
  var s;
  return e == null ? ac(this, r, i).year : (s = qa(e, r, i), t > s && (t = s), p4.call(this, e, t, n, r, i));
}
function p4(e, t, n, r, i) {
  var s = Ow(e, t, n, r, i), u = rc(s.year, 0, s.dayOfYear);
  return this.year(u.getUTCFullYear()), this.month(u.getUTCMonth()), this.date(u.getUTCDate()), this;
}
Ke("Q", 0, "Qo", "quarter");
je("Q", hw);
qt("Q", function(e, t) {
  t[ja] = (Ct(e) - 1) * 3;
});
function h4(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
Ke("D", ["DD", 2], "Do", "date");
je("D", an, js);
je("DD", an, Er);
je("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
qt(["D", "DD"], ha);
qt("Do", function(e, t) {
  t[ha] = Ct(e.match(an)[0]);
});
var Vw = zs("Date", !0);
Ke("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
je("DDD", Pd);
je("DDDD", mw);
qt(["DDD", "DDDD"], function(e, t, n) {
  n._dayOfYear = Ct(e);
});
function m4(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
Ke("m", ["mm", 2], 0, "minute");
je("m", an, Pm);
je("mm", an, Er);
qt(["m", "mm"], Zr);
var g4 = zs("Minutes", !1);
Ke("s", ["ss", 2], 0, "second");
je("s", an, Pm);
je("ss", an, Er);
qt(["s", "ss"], za);
var v4 = zs("Seconds", !1);
Ke("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
Ke(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
Ke(0, ["SSS", 3], 0, "millisecond");
Ke(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
Ke(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
Ke(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
Ke(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
Ke(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
Ke(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
je("S", Pd, hw);
je("SS", Pd, Er);
je("SSS", Pd, mw);
var xi, Gw;
for (xi = "SSSS"; xi.length <= 9; xi += "S")
  je(xi, Us);
function y4(e, t) {
  t[fo] = Ct(("0." + e) * 1e3);
}
for (xi = "S"; xi.length <= 9; xi += "S")
  qt(xi, y4);
Gw = zs("Milliseconds", !1);
Ke("z", 0, 0, "zoneAbbr");
Ke("zz", 0, 0, "zoneName");
function b4() {
  return this._isUTC ? "UTC" : "";
}
function _4() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var Ne = bc.prototype;
Ne.add = fB;
Ne.calendar = bB;
Ne.clone = _B;
Ne.diff = TB;
Ne.endOf = FB;
Ne.format = IB;
Ne.from = AB;
Ne.fromNow = RB;
Ne.to = MB;
Ne.toNow = DB;
Ne.get = N9;
Ne.invalidAt = qB;
Ne.isAfter = wB;
Ne.isBefore = EB;
Ne.isBetween = xB;
Ne.isSame = CB;
Ne.isSameOrAfter = OB;
Ne.isSameOrBefore = SB;
Ne.isValid = HB;
Ne.lang = Uw;
Ne.locale = Ww;
Ne.localeData = jw;
Ne.max = H5;
Ne.min = z5;
Ne.parsingFlags = YB;
Ne.set = I9;
Ne.startOf = LB;
Ne.subtract = pB;
Ne.toArray = UB;
Ne.toObject = jB;
Ne.toDate = WB;
Ne.toISOString = kB;
Ne.inspect = NB;
typeof Symbol < "u" && Symbol.for != null && (Ne[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
Ne.toJSON = zB;
Ne.toString = PB;
Ne.unix = BB;
Ne.valueOf = $B;
Ne.creationData = VB;
Ne.eraName = XB;
Ne.eraNarrow = QB;
Ne.eraAbbr = JB;
Ne.eraYear = e4;
Ne.year = yw;
Ne.isLeapYear = k9;
Ne.weekYear = s4;
Ne.isoWeekYear = l4;
Ne.quarter = Ne.quarters = h4;
Ne.month = xw;
Ne.daysInMonth = W9;
Ne.week = Ne.weeks = G9;
Ne.isoWeek = Ne.isoWeeks = K9;
Ne.weeksInYear = d4;
Ne.weeksInWeekYear = f4;
Ne.isoWeeksInYear = c4;
Ne.isoWeeksInISOWeekYear = u4;
Ne.date = Vw;
Ne.day = Ne.days = l5;
Ne.weekday = c5;
Ne.isoWeekday = u5;
Ne.dayOfYear = m4;
Ne.hour = Ne.hours = v5;
Ne.minute = Ne.minutes = g4;
Ne.second = Ne.seconds = v4;
Ne.millisecond = Ne.milliseconds = Gw;
Ne.utcOffset = J5;
Ne.utc = tB;
Ne.local = nB;
Ne.parseZone = rB;
Ne.hasAlignedHourOffset = aB;
Ne.isDST = iB;
Ne.isLocal = sB;
Ne.isUtcOffset = lB;
Ne.isUtc = Lw;
Ne.isUTC = Lw;
Ne.zoneAbbr = b4;
Ne.zoneName = _4;
Ne.dates = jr(
  "dates accessor is deprecated. Use date instead.",
  Vw
);
Ne.months = jr(
  "months accessor is deprecated. Use month instead",
  xw
);
Ne.years = jr(
  "years accessor is deprecated. Use year instead",
  yw
);
Ne.zone = jr(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  eB
);
Ne.isDSTShifted = jr(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  oB
);
function w4(e) {
  return rn(e * 1e3);
}
function E4() {
  return rn.apply(null, arguments).parseZone();
}
function Kw(e) {
  return e;
}
var Mt = xm.prototype;
Mt.calendar = s9;
Mt.longDateFormat = d9;
Mt.invalidDate = p9;
Mt.ordinal = g9;
Mt.preparse = Kw;
Mt.postformat = Kw;
Mt.relativeTime = y9;
Mt.pastFuture = b9;
Mt.set = i9;
Mt.eras = GB;
Mt.erasParse = KB;
Mt.erasConvertYear = ZB;
Mt.erasAbbrRegex = n4;
Mt.erasNameRegex = t4;
Mt.erasNarrowRegex = r4;
Mt.months = L9;
Mt.monthsShort = F9;
Mt.monthsParse = B9;
Mt.monthsRegex = j9;
Mt.monthsShortRegex = U9;
Mt.week = H9;
Mt.firstDayOfYear = V9;
Mt.firstDayOfWeek = q9;
Mt.weekdays = r5;
Mt.weekdaysMin = i5;
Mt.weekdaysShort = a5;
Mt.weekdaysParse = s5;
Mt.weekdaysRegex = d5;
Mt.weekdaysShortRegex = f5;
Mt.weekdaysMinRegex = p5;
Mt.isPM = m5;
Mt.meridiem = y5;
function Ju(e, t, n, r) {
  var i = ri(), s = Sa().set(r, t);
  return i[n](s, e);
}
function Zw(e, t, n) {
  if (Za(e) && (t = e, e = void 0), e = e || "", t != null)
    return Ju(e, t, n, "month");
  var r, i = [];
  for (r = 0; r < 12; r++)
    i[r] = Ju(e, r, n, "month");
  return i;
}
function Um(e, t, n, r) {
  typeof e == "boolean" ? (Za(t) && (n = t, t = void 0), t = t || "") : (t = e, n = t, e = !1, Za(t) && (n = t, t = void 0), t = t || "");
  var i = ri(), s = e ? i._week.dow : 0, u, l = [];
  if (n != null)
    return Ju(t, (n + s) % 7, r, "day");
  for (u = 0; u < 7; u++)
    l[u] = Ju(t, (u + s) % 7, r, "day");
  return l;
}
function x4(e, t) {
  return Zw(e, t, "months");
}
function C4(e, t) {
  return Zw(e, t, "monthsShort");
}
function O4(e, t, n) {
  return Um(e, t, n, "weekdays");
}
function S4(e, t, n) {
  return Um(e, t, n, "weekdaysShort");
}
function T4(e, t, n) {
  return Um(e, t, n, "weekdaysMin");
}
Oi("en", {
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
    var t = e % 10, n = Ct(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + n;
  }
});
Re.lang = jr(
  "moment.lang is deprecated. Use moment.locale instead.",
  Oi
);
Re.langData = jr(
  "moment.langData is deprecated. Use moment.localeData instead.",
  ri
);
var Fa = Math.abs;
function P4() {
  var e = this._data;
  return this._milliseconds = Fa(this._milliseconds), this._days = Fa(this._days), this._months = Fa(this._months), e.milliseconds = Fa(e.milliseconds), e.seconds = Fa(e.seconds), e.minutes = Fa(e.minutes), e.hours = Fa(e.hours), e.months = Fa(e.months), e.years = Fa(e.years), this;
}
function Xw(e, t, n, r) {
  var i = ra(t, n);
  return e._milliseconds += r * i._milliseconds, e._days += r * i._days, e._months += r * i._months, e._bubble();
}
function k4(e, t) {
  return Xw(this, e, t, 1);
}
function N4(e, t) {
  return Xw(this, e, t, -1);
}
function g0(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function I4() {
  var e = this._milliseconds, t = this._days, n = this._months, r = this._data, i, s, u, l, d;
  return e >= 0 && t >= 0 && n >= 0 || e <= 0 && t <= 0 && n <= 0 || (e += g0(bh(n) + t) * 864e5, t = 0, n = 0), r.milliseconds = e % 1e3, i = Rr(e / 1e3), r.seconds = i % 60, s = Rr(i / 60), r.minutes = s % 60, u = Rr(s / 60), r.hours = u % 24, t += Rr(u / 24), d = Rr(Qw(t)), n += d, t -= g0(bh(d)), l = Rr(n / 12), n %= 12, r.days = t, r.months = n, r.years = l, this;
}
function Qw(e) {
  return e * 4800 / 146097;
}
function bh(e) {
  return e * 146097 / 4800;
}
function A4(e) {
  if (!this.isValid())
    return NaN;
  var t, n, r = this._milliseconds;
  if (e = zr(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + r / 864e5, n = this._months + Qw(t), e) {
      case "month":
        return n;
      case "quarter":
        return n / 3;
      case "year":
        return n / 12;
    }
  else
    switch (t = this._days + Math.round(bh(this._months)), e) {
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
function ai(e) {
  return function() {
    return this.as(e);
  };
}
var Jw = ai("ms"), R4 = ai("s"), M4 = ai("m"), D4 = ai("h"), L4 = ai("d"), F4 = ai("w"), $4 = ai("M"), B4 = ai("Q"), W4 = ai("y"), U4 = Jw;
function j4() {
  return ra(this);
}
function z4(e) {
  return e = zr(e), this.isValid() ? this[e + "s"]() : NaN;
}
function Fo(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var H4 = Fo("milliseconds"), Y4 = Fo("seconds"), q4 = Fo("minutes"), V4 = Fo("hours"), G4 = Fo("days"), K4 = Fo("months"), Z4 = Fo("years");
function X4() {
  return Rr(this.days() / 7);
}
var Wa = Math.round, is = {
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
function Q4(e, t, n, r, i) {
  return i.relativeTime(t || 1, !!n, e, r);
}
function J4(e, t, n, r) {
  var i = ra(e).abs(), s = Wa(i.as("s")), u = Wa(i.as("m")), l = Wa(i.as("h")), d = Wa(i.as("d")), p = Wa(i.as("M")), h = Wa(i.as("w")), m = Wa(i.as("y")), v = s <= n.ss && ["s", s] || s < n.s && ["ss", s] || u <= 1 && ["m"] || u < n.m && ["mm", u] || l <= 1 && ["h"] || l < n.h && ["hh", l] || d <= 1 && ["d"] || d < n.d && ["dd", d];
  return n.w != null && (v = v || h <= 1 && ["w"] || h < n.w && ["ww", h]), v = v || p <= 1 && ["M"] || p < n.M && ["MM", p] || m <= 1 && ["y"] || ["yy", m], v[2] = t, v[3] = +e > 0, v[4] = r, Q4.apply(null, v);
}
function eW(e) {
  return e === void 0 ? Wa : typeof e == "function" ? (Wa = e, !0) : !1;
}
function tW(e, t) {
  return is[e] === void 0 ? !1 : t === void 0 ? is[e] : (is[e] = t, e === "s" && (is.ss = t - 1), !0);
}
function nW(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var n = !1, r = is, i, s;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (n = e), typeof t == "object" && (r = Object.assign({}, is, t), t.s != null && t.ss == null && (r.ss = t.s - 1)), i = this.localeData(), s = J4(this, !n, r, i), n && (s = i.pastFuture(+this, s)), i.postformat(s);
}
var Sp = Math.abs;
function Qo(e) {
  return (e > 0) - (e < 0) || +e;
}
function Ld() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = Sp(this._milliseconds) / 1e3, t = Sp(this._days), n = Sp(this._months), r, i, s, u, l = this.asSeconds(), d, p, h, m;
  return l ? (r = Rr(e / 60), i = Rr(r / 60), e %= 60, r %= 60, s = Rr(n / 12), n %= 12, u = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", d = l < 0 ? "-" : "", p = Qo(this._months) !== Qo(l) ? "-" : "", h = Qo(this._days) !== Qo(l) ? "-" : "", m = Qo(this._milliseconds) !== Qo(l) ? "-" : "", d + "P" + (s ? p + s + "Y" : "") + (n ? p + n + "M" : "") + (t ? h + t + "D" : "") + (i || r || e ? "T" : "") + (i ? m + i + "H" : "") + (r ? m + r + "M" : "") + (e ? m + u + "S" : "")) : "P0D";
}
var Pt = Md.prototype;
Pt.isValid = K5;
Pt.abs = P4;
Pt.add = k4;
Pt.subtract = N4;
Pt.as = A4;
Pt.asMilliseconds = Jw;
Pt.asSeconds = R4;
Pt.asMinutes = M4;
Pt.asHours = D4;
Pt.asDays = L4;
Pt.asWeeks = F4;
Pt.asMonths = $4;
Pt.asQuarters = B4;
Pt.asYears = W4;
Pt.valueOf = U4;
Pt._bubble = I4;
Pt.clone = j4;
Pt.get = z4;
Pt.milliseconds = H4;
Pt.seconds = Y4;
Pt.minutes = q4;
Pt.hours = V4;
Pt.days = G4;
Pt.weeks = X4;
Pt.months = K4;
Pt.years = Z4;
Pt.humanize = nW;
Pt.toISOString = Ld;
Pt.toString = Ld;
Pt.toJSON = Ld;
Pt.locale = Ww;
Pt.localeData = jw;
Pt.toIsoString = jr(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  Ld
);
Pt.lang = Uw;
Ke("X", 0, 0, "unix");
Ke("x", 0, 0, "valueOf");
je("x", Nd);
je("X", x9);
qt("X", function(e, t, n) {
  n._d = new Date(parseFloat(e) * 1e3);
});
qt("x", function(e, t, n) {
  n._d = new Date(Ct(e));
});
//! moment.js
Re.version = "2.30.1";
r9(rn);
Re.fn = Ne;
Re.min = Y5;
Re.max = q5;
Re.now = V5;
Re.utc = Sa;
Re.unix = w4;
Re.months = x4;
Re.isDate = yc;
Re.locale = Oi;
Re.invalid = Sd;
Re.duration = ra;
Re.isMoment = ea;
Re.weekdays = O4;
Re.parseZone = E4;
Re.localeData = ri;
Re.isDuration = Iu;
Re.monthsShort = C4;
Re.weekdaysMin = T4;
Re.defineLocale = Rm;
Re.updateLocale = E5;
Re.locales = x5;
Re.weekdaysShort = S4;
Re.normalizeUnits = zr;
Re.relativeTimeRounding = eW;
Re.relativeTimeThreshold = tW;
Re.calendarFormat = yB;
Re.prototype = Ne;
Re.HTML5_FMT = {
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
function rW(e) {
  if (e != null) {
    const t = e.replace(/[^\d]/g, "");
    return t.length === 10 ? t.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3") : t.length === 11 ? t.replace(/(\d{1})(\d{3})(\d{3})(\d{4})/, "$1 ($2) $3-$4") : e;
  }
  return e;
}
function v0(e, t = !1, n = !1, r = !1) {
  const i = new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "dop"
  });
  if ([null, "", void 0].includes(e) && !r || !n && parseFloat(e || 0) === 0) return "";
  const s = i.format(e).replace("DOP", "");
  return t ? s.split(".")[0] : s;
}
function aW(e, t = !1, n = !1) {
  const r = new Intl.NumberFormat("ja-JP", {
    maximumSignificantDigits: 14,
    style: "currency",
    currency: "dop"
  });
  return [null, "", void 0].includes(e) && !n || !t && parseFloat(e || 0) === 0 ? "" : r.format(e).replace("DOP", "");
}
function eE(e, t) {
  const n = new Date(e);
  let r = /* @__PURE__ */ new Date();
  if (!N.isEmpty(e)) {
    N.isEmpty(t) || (r = new Date(t));
    const i = parseInt((r - n) / (1e3 * 60 * 60 * 24), 10), s = parseInt(Math.abs(n - r) / (1e3 * 60 * 60) % 24, 10), u = parseInt(Math.abs(r.getTime() - n.getTime()) / (1e3 * 60) % 60, 10), l = parseInt(Math.abs(r.getTime() - n.getTime()) / 1e3 % 60, 10);
    let d = "";
    return i === 0 ? s === 0 ? u === 0 ? d = `${String(l)}s` : d = `${String(u)}m ${String(l)}s` : d = `${String(s)}h ${String(u)}m ${String(l)}s` : d = `${String(i)}d ${String(s)}h ${String(u)}m ${String(l)}s`, d;
  }
  return "";
}
function iW(e) {
  if (e) {
    const t = new Date(e).getTime(), r = (/* @__PURE__ */ new Date()).getTime() - t, i = parseInt(r / (1e3 * 60 * 60 * 24), 10);
    return i === 0 ? null : i;
  }
  return null;
}
function Ar(e, t = !1, n = !1, r = !1, i = !1, s = !1, u = !1) {
  if (!N.isEmpty(e) && e !== null) {
    const l = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"], d = new Date(e);
    if (n)
      return d.toLocaleString("en-US", {
        hour12: !0,
        hour: "2-digit",
        minute: "2-digit"
      });
    if (i)
      return `${l[d.getUTCDay() - 1]} 
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
      return Re(e, "DD/MM/YYYY").format("DD/MM/YYYY");
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
    }) : Re(e).format("DD/MM/YYYY");
  }
  return e;
}
function El(e, t) {
  let n = e;
  return t && t.forEach((r) => {
    r.onName === e && (n = String(r.translate));
  }), n;
}
function oW(e, t, n) {
  return N.map(e, (i, s) => ({ key: s + 1, text: N.get(i, t, ""), value: N.get(i, n, "") }));
}
function Si(e) {
  let t = e.split(",").join(".");
  if (t.split(".").length > 2) {
    const n = t.split(".");
    t = `${n[0]}:${N.takeRight(n, n.length - 1).join(".")}`;
  }
  return t;
}
function gl(e, t = 768, n = 55, r = 10, i = 10) {
  if (e >= t)
    return n;
  const s = t - e, u = Math.floor(s / r), l = n - u;
  return Math.max(l, i);
}
const sW = "_headerTable_1sdq3_1", lW = "_tableCellHeader_1sdq3_13", vl = {
  headerTable: sW,
  tableCellHeader: lW
}, jm = ({
  columns: e = [],
  searchParams: t,
  setSearchParams: n,
  dataHandler: r,
  isPDF: i,
  concatAll: s,
  setConcatAll: u,
  totalRows: l,
  widthAuto: d
}) => {
  const [p, h] = at([]), [m, v] = at([]), [y, b] = at(""), [_, E] = at("");
  Kt(() => {
    C(), b(t.orderDir === "desc" ? "descending" : "ascending"), E(t.orderKey);
  }, [t, y, _]), Kt(() => {
    C();
  }, [s, e]);
  const R = (I) => {
    const O = y === "descending" ? "ascending" : "descending";
    let S;
    N.isEmpty(I) || (S = Si(I));
    const x = {
      ...t,
      page: 1,
      orderKey: S,
      orderDir: O === "descending" ? "desc" : "asc"
    };
    b(O), E(S), N.isEmpty(x) || (n(x), r(x));
  }, F = () => {
    const I = {
      ...t,
      rows: l
    };
    u(!s), r(I, !1, !s, !0);
  }, C = ({ subColumns: I = [], multStatus: O = !1 } = {}) => {
    let S = e;
    N.isEmpty(I) || (S = I);
    let x = !1, P = [];
    const k = S.map(
      ({
        key: B,
        label: Y,
        width: ne,
        headerPosition: z,
        multipleColumns: re = [],
        multiple: pe = !1,
        action: ve = [],
        canSort: Oe = !0,
        twoLines: he = !1,
        line1: be = {},
        line2: ee = {},
        hidden: ie = !1,
        color: se = "hsl(0, 0%, 80%)",
        style: Ce = {},
        orderKey: Se
      }, Te) => {
        let ge, Pe;
        return N.isEmpty(B) || (ge = Si(B)), Pe = ge, N.isEmpty(Se) || (Pe = Si(Se)), ie ? null : !N.isEmpty(re) && N.isEmpty(I) ? (x = !0, P = [...P, ...re], /* @__PURE__ */ M(
          vt.HeaderCell,
          {
            style: { backgroundColor: se },
            className: vl.tableCellHeader,
            colSpan: re.length,
            textAlign: z || "center",
            children: Y
          },
          Te
        )) : pe ? /* @__PURE__ */ M(
          vt.HeaderCell,
          {
            style: { backgroundColor: se, ...Ce },
            className: vl.tableCellHeader,
            textAlign: "center",
            onClick: F,
            children: /* @__PURE__ */ M(rr, { checked: s })
          },
          Te
        ) : he ? /* @__PURE__ */ de(
          vt.HeaderCell,
          {
            rowSpan: !N.isEmpty(re) && N.isEmpty(I) ? "1" : "2",
            style: { backgroundColor: se },
            className: vl.tableCellHeader,
            textAlign: z || "center",
            sorted: Oe && Pe === _ ? y : null,
            onClick: Oe ? () => {
              R(Pe);
            } : null,
            width: ne || 1,
            children: [
              /* @__PURE__ */ de("div", { children: [
                " ",
                N.get(be, "label", "")
              ] }),
              /* @__PURE__ */ de("div", { children: [
                " ",
                N.get(ee, "label", "")
              ] })
            ]
          },
          Te
        ) : !N.isEmpty(ve) && i ? null : /* @__PURE__ */ M(
          vt.HeaderCell,
          {
            rowSpan: !N.isEmpty(re) && N.isEmpty(I) ? "1" : "2",
            style: { backgroundColor: se, ...Ce },
            className: vl.tableCellHeader,
            textAlign: z || "center",
            sorted: Oe && Pe === _ ? y : null,
            onClick: Oe ? () => {
              R(Pe);
            } : null,
            width: d ? void 0 : ne || 1,
            children: Y
          },
          Te
        );
      }
    );
    O || h(/* @__PURE__ */ M(vt.Row, { children: k })), O && v(/* @__PURE__ */ M(vt.Row, { children: k })), x && C({
      subColumns: P,
      multStatus: x
    });
  };
  return /* @__PURE__ */ de(vt.Header, { className: vl.headerTable, children: [
    p,
    m
  ] });
};
jm.propTypes = {
  columns: c.array,
  setSearchParams: c.func,
  dataHandler: c.func,
  searchParams: c.object,
  isPDF: c.bool,
  concatAll: c.bool,
  setConcatAll: c.func,
  totalRows: c.number,
  widthAuto: c.bool
};
var tE = {};
Object.defineProperty(tE, "__esModule", { value: !0 });
var cW = J;
function uW(e) {
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
var yi = /* @__PURE__ */ uW(cW), _h = function() {
  return _h = Object.assign || function(t) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, _h.apply(this, arguments);
};
function dW(e) {
  var t = e.bgColor, n = t === void 0 ? "#6a1b9a" : t, r = e.height, i = r === void 0 ? "20px" : r, s = e.width, u = s === void 0 ? "100%" : s, l = e.borderRadius, d = l === void 0 ? "50px" : l, p = e.labelAlignment, h = p === void 0 ? "right" : p, m = e.baseBgColor, v = m === void 0 ? "#e0e0de" : m, y = e.labelColor, b = y === void 0 ? "#fff" : y, _ = e.labelSize, E = _ === void 0 ? "15px" : _, R = e.isLabelVisible, F = R === void 0 ? !0 : R, C = e.dir, I = C === void 0 ? "ltr" : C, O = e.ariaValuemin, S = O === void 0 ? 0 : O, x = e.ariaValuemax, P = x === void 0 ? 100 : x, k = e.ariaValuetext, B = k === void 0 ? null : k, Y = e.maxCompleted, ne = Y === void 0 ? 100 : Y, z = e.animateOnRender, re = z === void 0 ? !1 : z, pe = e.initCompletedOnAnimation, ve = pe === void 0 ? 0 : pe, Oe = e.isIndeterminate, he = Oe === void 0 ? !1 : Oe, be = e.completed, ee = e.margin, ie = e.padding, se = e.customLabelStyles, Ce = e.transitionDuration, Se = e.transitionTimingFunction, Te = e.className, ge = e.customLabel, Pe = e.barContainerClassName, Me = e.completedClassName, U = e.labelClassName, j = function(Fe) {
    return Fe === "left" ? "flex-start" : Fe === "center" ? "center" : Fe === "right" ? "flex-end" : null;
  }, $ = j(h), D = typeof ve == "number" ? "".concat(ve, "%") : ve, G = function(Fe, ot) {
    if (Fe) {
      var qe = Number(ot) / Fe;
      return qe > 1 ? "100%" : "".concat(qe * 100, "%");
    }
    return D;
  }, Z = G(ne, be), le = yi.useState(D), fe = le[0], Q = le[1], ue = {
    height: i,
    background: v,
    borderRadius: d,
    padding: ie,
    width: u,
    margin: ee,
    overflow: "hidden"
  }, te = {
    height: i,
    width: he ? "100%" : re ? fe : Z,
    background: n,
    transition: he ? "none" : "width ".concat(Ce || "1s", " ").concat(Se || "ease-in-out"),
    borderRadius: "inherit",
    display: "flex",
    alignItems: "center",
    justifyContent: h !== "outside" && $ ? $ : "normal",
    animation: he ? "indeterminate 1.5s infinite linear" : "none"
  }, V = _h({ padding: h === "outside" ? "0 0 0 5px" : "5px", color: b, fontWeight: "bold", fontSize: E, display: F ? "initial" : "none" }, se), ae = {
    display: h === "outside" ? "flex" : "initial",
    alignItems: h === "outside" ? "center" : "initial"
  }, Ee = typeof be == "number" ? "".concat(be, "%") : "".concat(be), Le = ge || Ee;
  return yi.useEffect(function() {
    re && !he && requestAnimationFrame(function() {
      return Q(Z);
    });
  }, [Z, re, he]), yi.createElement(
    "div",
    { style: Te ? void 0 : ae, className: Te, dir: I, role: "progressbar", "aria-valuenow": he ? void 0 : parseFloat(Le), "aria-valuemin": S, "aria-valuemax": P, "aria-valuetext": "".concat(B === null ? Le : B) },
    yi.createElement(
      "div",
      { style: Pe ? void 0 : ue, className: Pe },
      yi.createElement("div", { style: Me ? void 0 : te, className: Me }, h !== "outside" && yi.createElement("span", { style: U ? void 0 : V, className: U }, Le))
    ),
    h === "outside" && yi.createElement("span", { style: U ? void 0 : V, className: U }, Le),
    yi.createElement("style", null, `
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
var fW = tE.default = dW;
const Ru = (e, t, n) => {
  if (N.isEmpty(n))
    return e[t];
  if (e[t]) {
    const r = N.takeRight(n, n.length - 1);
    return Ru(e[t], n[0], r);
  }
  return "";
};
function Ht(e, t, n = !1, r) {
  if (e) {
    if (r)
      return Ru(t, e, null);
    let i = e.split(".");
    if (i.length < 2 && (i = e.split(","), i.length >= 2))
      return Ru(t, i[0], null);
    const s = N.takeRight(i, i.length - 1), u = Ru(t, i[0], s);
    return [null, "", void 0].includes(u) && n ? 0 : u;
  }
  return n ? 0 : null;
}
const pW = "_emptyChat_1ablf_3", hW = "_emptyDataIcon_1ablf_13", mW = "_groupHover_1ablf_29", gW = "_sumRow_1ablf_39", vW = "_cell_1ablf_51", yW = "_cellButton_1ablf_61", bW = "_ButtonIcon_1ablf_75", _W = "_ButtonLink_1ablf_95", wW = "_towLineRow_1ablf_117", EW = "_noWrap_1ablf_127", xW = "_progressBarLabel_1ablf_137", CW = "_cardsWrapper_1ablf_157", OW = "_popupContent_1ablf_225", Xt = {
  emptyChat: pW,
  emptyDataIcon: hW,
  groupHover: mW,
  sumRow: gW,
  cell: vW,
  cellButton: yW,
  ButtonIcon: bW,
  ButtonLink: _W,
  towLineRow: wW,
  noWrap: EW,
  progressBarLabel: xW,
  cardsWrapper: CW,
  popupContent: OW
}, SW = (e, t, n = {}) => {
  if (N.isEmpty(t))
    return e;
  if (N.isEmpty(e))
    return t;
  const { groupKey: r = "groupName", itemsKey: i = "tasks", idKey: s = "id" } = n, u = /* @__PURE__ */ new Map();
  e.forEach((p) => {
    u.set(p[r], p);
  });
  const l = [];
  e.forEach((p) => {
    const h = t.find((m) => m[r] === p[r]);
    if (h && h[i] && h[i].length > 0) {
      const m = new Set(
        (p[i] || []).map((y) => y[s])
      ), v = (h[i] || []).filter((y) => !m.has(y[s]));
      v.length > 0 ? l.push({
        ...p,
        [i]: [...p[i] || [], ...v]
      }) : l.push(p);
    } else
      l.push(p);
  }), t.forEach((p) => {
    u.has(p[r]) || l.push(p);
  });
  const d = /* @__PURE__ */ new Set();
  return l.map((p) => {
    if (!p[i] || p[i].length === 0)
      return p;
    const h = p[i].filter((m) => d.has(m[s]) ? !1 : (d.add(m[s]), !0));
    return {
      ...p,
      [i]: h
    };
  });
}, TW = "_cardsContainer_d29bq_1", PW = "_card_d29bq_1", kW = "_cardHeader_d29bq_43", NW = "_cardField_d29bq_61", IW = "_cardLabel_d29bq_89", AW = "_cardValue_d29bq_103", RW = "_cardActionsMenu_d29bq_133", MW = "_cardMenuIcon_d29bq_157", DW = "_cardMenu_d29bq_157", LW = "_cardMenuPopupContent_d29bq_287", FW = "_cardMenuItem_d29bq_295", $W = "_cardMenuIconItem_d29bq_315", BW = "_cardMenuText_d29bq_335", WW = "_cardActionsMenuPopup_d29bq_351", UW = "_emptyState_d29bq_363", jW = "_emptyIcon_d29bq_375", zW = "_cardLine1_d29bq_387", HW = "_cardLine2_d29bq_403", YW = "_cardLine3_d29bq_419", qW = "_cardLine4_d29bq_435", VW = "_cardLine1Item_d29bq_451", GW = "_cardLine2Item_d29bq_453", KW = "_cardLine3Item_d29bq_455", ZW = "_cardLine4Item_d29bq_457", XW = "_cardCheckbox_d29bq_467", QW = "_cardInlineField_d29bq_479", JW = "_cardInlineLabel_d29bq_491", e6 = "_cardInlineValue_d29bq_505", lt = {
  cardsContainer: TW,
  card: PW,
  cardHeader: kW,
  cardField: NW,
  cardLabel: IW,
  cardValue: AW,
  cardActionsMenu: RW,
  cardMenuIcon: MW,
  cardMenu: DW,
  cardMenuPopupContent: LW,
  cardMenuItem: FW,
  cardMenuIconItem: $W,
  cardMenuText: BW,
  cardActionsMenuPopup: WW,
  emptyState: UW,
  emptyIcon: jW,
  cardLine1: zW,
  cardLine2: HW,
  cardLine3: YW,
  cardLine4: qW,
  cardLine1Item: VW,
  cardLine2Item: GW,
  cardLine3Item: KW,
  cardLine4Item: ZW,
  cardCheckbox: XW,
  cardInlineField: QW,
  cardInlineLabel: JW,
  cardInlineValue: e6
}, nE = ({ rowData: e, columnsData: t, onHandlerTable: n, isPDF: r }) => {
  const [i, s] = at(!1), u = [];
  if (N.map(t, ({ action: d, key: p }) => {
    !N.isEmpty(d) && !r && N.map(d, (h) => {
      const { content: m, hidden: v, type: y, color: b = "hsl(0, 0%, 95%)", onClick: _, visible: E } = h;
      if (!v && !(typeof E == "function" && E(e) === !1) && (y === "icon" || y === "link")) {
        let R = m;
        y === "icon" && (m === "edit" ? R = "Editar" : m === "trash" || m === "delete" ? R = "Borrar" : m === "eye" ? R = "Ver" : m === "copy" && (R = "Copiar")), u.push({
          key: `${p}-${m}`,
          text: R,
          icon: y === "icon" ? m : null,
          color: y === "icon" ? b : null,
          onClick: () => {
            s(!1), n(_, e);
          }
        });
      }
    });
  }), N.isEmpty(u)) return null;
  const l = N.map(u, (d) => /* @__PURE__ */ de(
    Tn.Item,
    {
      className: lt.cardMenuItem,
      onClick: (p) => {
        p.stopPropagation(), d.onClick();
      },
      children: [
        d.icon && /* @__PURE__ */ M(
          We,
          {
            name: d.icon,
            className: lt.cardMenuIconItem,
            style: {
              color: d.color || "#6b7280"
            }
          }
        ),
        /* @__PURE__ */ M("span", { className: lt.cardMenuText, children: d.text })
      ]
    },
    d.key
  ));
  return /* @__PURE__ */ M(
    "div",
    {
      className: lt.cardActionsMenu,
      onDoubleClick: (d) => {
        d.stopPropagation();
      },
      children: /* @__PURE__ */ M(
        wr,
        {
          className: lt.cardActionsMenuPopup,
          trigger: /* @__PURE__ */ M(
            We,
            {
              name: "ellipsis vertical",
              size: "large",
              className: lt.cardMenuIcon,
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
          open: i,
          onOpen: () => {
            s(!0);
          },
          onClose: () => {
            s(!1);
          },
          children: /* @__PURE__ */ M(wr.Content, { className: lt.cardMenuPopupContent, children: /* @__PURE__ */ M(Tn, { vertical: !0, className: lt.cardMenu, children: l }) })
        }
      )
    }
  );
};
nE.propTypes = {
  rowData: c.object.isRequired,
  columnsData: c.array.isRequired,
  onHandlerTable: c.func.isRequired,
  isPDF: c.bool
};
const rE = ({
  data: e = [],
  columns: t = [],
  headerDetail: n = {},
  setRowStyle: r,
  clickedRowColors: i,
  onHandlerTable: s,
  handlerClick: u,
  formatData: l,
  clikedData: d,
  isPDF: p = !1,
  cardLine1: h = [],
  cardLine2: m = [],
  cardLine3: v = [],
  cardLine4: y = [],
  multipleHandler: b,
  concatKeys: _ = [],
  enableInfiniteScroll: E = !1,
  onLoadMore: R,
  isLoadingMore: F = !1,
  hasMore: C,
  // Props para manejo automático de scroll infinito
  dataHandler: I = null,
  searchParams: O = null,
  totalRows: S = 0,
  mergeConfig: x = null
}) => {
  const P = Dn(null), k = Dn(null), [B, Y] = at(!1), [ne, z] = at(e), [re, pe] = at(1), [ve, Oe] = at(!0), he = Dn(!1), be = Dn(O), ee = Dn(!1), ie = Dn(!1), se = Dn(0), [Ce, Se] = at(window.innerWidth);
  Kt(() => {
    const Q = () => {
      Se(window.innerWidth);
    };
    return window.addEventListener("resize", Q), () => {
      window.removeEventListener("resize", Q);
    };
  }, []), Kt(() => {
    JSON.stringify(be.current) !== JSON.stringify(O) ? (z(e), pe(1), be.current = O, ee.current = !1, se.current = 1, ie.current = !1, Oe(!0)) : ee.current && re > se.current ? (e && e.length > 0 ? (z((ue) => {
      if (x)
        return SW(ue, e, x);
      const te = "id";
      if (ue.length > 0 && ue[0][te] !== void 0) {
        const V = new Set(
          ue.map((Ee) => Ee[te])
        ), ae = e.filter((Ee) => !V.has(Ee[te]));
        return [...ue, ...ae];
      }
      return [...ue, ...e];
    }), se.current = re, ie.current = !1) : (se.current = re, ie.current = !0), ee.current = !1) : re === 1 && !ee.current && e && (z(e), se.current = 1);
  }, [e, O, x, re]), Kt(() => {
    if (e !== void 0 && ve && !he.current && !B && !ee.current) {
      if (e.length > 0) {
        const ue = setTimeout(() => {
          Oe(!1);
        }, 1e3);
        return () => {
          clearTimeout(ue);
        };
      }
      const Q = setTimeout(() => {
        Oe(!1);
      }, 1500);
      return () => {
        clearTimeout(Q);
      };
    }
  }, [e, ve, B]), Kt(() => {
    if (ve) {
      const Q = setTimeout(() => {
        Oe(!1);
      }, 3e3);
      return () => {
        clearTimeout(Q);
      };
    }
  }, [ve]);
  const Te = (Q, ue) => {
    if (N.isEmpty(Q))
      return null;
    const te = /* @__PURE__ */ M("span", { style: { marginLeft: "4px" }, children: /* @__PURE__ */ M(
      wr,
      {
        position: "bottom right",
        content: /* @__PURE__ */ M("div", { children: Q }),
        trigger: /* @__PURE__ */ M(We, { name: "comment alternate outline", style: { color: "#286b92" } })
      }
    ) }, 1);
    return ue >= Q.length ? Q : /* @__PURE__ */ de("span", { children: [
      `${Q.slice(0, ue)}...`,
      te
    ] });
  }, ge = (Q, ue, te = null) => {
    const {
      key: V,
      label: ae,
      format: Ee,
      endDateKey: Le = null,
      dataPosition: Fe = "left",
      stringLength: ot = 20,
      boolLabels: qe,
      translate: Et,
      colorLabel: nt,
      textColor: Ge = "#000000",
      stopDateHandler: Ze = () => {
      },
      onClick: kt,
      render: ye
    } = Q;
    if (ye && typeof ye == "function")
      return ye(ue);
    const Nt = Ht(V, ue, !1), It = N.isEmpty(Le) ? null : Ht(Le, ue), dt = gl(Ce, 768, ot, 10, 10), Qe = l({
      value: Nt,
      format: Ee,
      endDate: It,
      stringLength: dt,
      key: V,
      translate: Et,
      colorLabel: nt,
      onClick: kt,
      rowData: ue,
      textColor: Ge,
      boolLabels: qe,
      stopDateHandler: Ze
    });
    if (!(V === "id" || ae === "ID" || (V == null ? void 0 : V.toLowerCase().includes("id"))) && (N.isEmpty(Qe) || Qe === "-" || Qe === null || Qe === void 0))
      return null;
    const $e = te !== null ? te : ae;
    return /* @__PURE__ */ de("div", { className: lt.cardInlineField, children: [
      $e && /* @__PURE__ */ de("span", { className: lt.cardInlineLabel, children: [
        $e,
        ":"
      ] }),
      /* @__PURE__ */ M("span", { className: lt.cardInlineValue, style: { textAlign: Fe, color: Ge }, children: Qe })
    ] });
  }, Pe = (Q, ue) => /* @__PURE__ */ M(nE, { rowData: Q, columnsData: ue, onHandlerTable: s, isPDF: p }), Me = (Q, ue) => {
    let te = {};
    typeof r == "function" && (te = r(Q) || {});
    const ae = d === Q ? { backgroundColor: i, ...te } : te;
    if (!N.isEmpty(h) || !N.isEmpty(m) || !N.isEmpty(v) || !N.isEmpty(y)) {
      const Fe = N.find(t, { multiple: !0 }), ot = Fe == null ? void 0 : Fe.key, qe = ot ? N.includes(_, Q[ot]) : !1, Et = [];
      Fe && !N.isEmpty(h) && Et.push(
        /* @__PURE__ */ M("div", { className: lt.cardCheckbox, children: /* @__PURE__ */ M(
          rr,
          {
            checked: qe,
            onChange: () => {
              b && b(Q, ot);
            },
            onClick: (ye) => {
              ye.stopPropagation();
            }
          }
        ) }, "checkbox")
      ), N.map(h, (ye) => {
        const Nt = typeof ye == "string" ? ye : ye.key, It = typeof ye == "object" && ye.label !== void 0 ? ye.label : null, dt = typeof ye == "object" && ye.format !== void 0 ? ye.format : null, Qe = N.find(t, (Vt) => Vt.key === Nt && !Vt.multiple && !Vt.hidden);
        if (Qe && !Qe.hidden && !Qe.multiple) {
          const Vt = dt ? { ...Qe, format: dt } : Qe, $e = ge(Vt, Q, It);
          $e && Et.push(
            /* @__PURE__ */ M("div", { className: lt.cardLine1Item, children: $e }, Nt)
          );
        }
      });
      const nt = [];
      N.map(m, (ye) => {
        var Vt;
        if (typeof ye == "object" && typeof ye.render == "function") {
          const $e = ye.render(Q), Lt = typeof $e == "object" && $e.label !== void 0 ? $e.label : ye.label || null;
          let Xe = typeof $e == "object" && $e.value !== void 0 ? $e.value : $e;
          const cn = typeof ye == "object" && ye.format !== void 0 ? ye.format : null, Gn = typeof ye == "object" && ye.stringLength !== void 0 ? ye.stringLength : 20, ia = typeof $e == "object" && $e.shouldTruncate === !0;
          if (cn && typeof Xe == "string")
            if (cn === "truncate" && ia) {
              const oa = gl(Ce, 480, Gn, 1, 10);
              Xe = Te(Xe, oa);
            } else cn !== "truncate" && (Xe = l({
              value: Xe,
              format: cn,
              endDate: null,
              stringLength: Gn,
              key: ye.key || "",
              translate: null,
              colorLabel: null,
              onClick: null,
              rowData: Q,
              textColor: "#000000",
              boolLabels: null,
              stopDateHandler: () => {
              }
            }));
          ((ye.key === "id" || ye.label === "ID" || ((Vt = ye.key) == null ? void 0 : Vt.toLowerCase().includes("id"))) && !N.isEmpty(Xe) && Xe !== "-" && Xe !== null && Xe !== void 0 || !N.isEmpty(Xe) && Xe !== "-" && Xe !== null && Xe !== void 0) && nt.push(
            /* @__PURE__ */ M("div", { className: lt.cardLine2Item, children: /* @__PURE__ */ de("div", { className: lt.cardInlineField, children: [
              Lt && /* @__PURE__ */ de("span", { className: lt.cardInlineLabel, children: [
                Lt,
                ":"
              ] }),
              /* @__PURE__ */ M("span", { className: lt.cardInlineValue, children: Xe })
            ] }) }, ye.key || "render")
          );
          return;
        }
        const Nt = typeof ye == "string" ? ye : ye.key, It = typeof ye == "object" && ye.label !== void 0 ? ye.label : null, dt = typeof ye == "object" && ye.format !== void 0 ? ye.format : null, Qe = N.find(t, ($e) => $e.key === Nt && !$e.multiple && !$e.hidden);
        if (Qe && !Qe.hidden && !Qe.multiple) {
          const $e = dt ? { ...Qe, format: dt } : Qe, Lt = ge($e, Q, It);
          Lt && nt.push(
            /* @__PURE__ */ M("div", { className: lt.cardLine2Item, children: Lt }, Nt)
          );
        }
      });
      const Ge = [];
      N.map(v, (ye) => {
        var Vt;
        if (typeof ye == "object" && typeof ye.render == "function") {
          const $e = ye.render(Q), Lt = typeof $e == "object" && $e.label !== void 0 ? $e.label : ye.label || null;
          let Xe = typeof $e == "object" && $e.value !== void 0 ? $e.value : $e;
          const cn = typeof ye == "object" && ye.format !== void 0 ? ye.format : null, Gn = typeof ye == "object" && ye.stringLength !== void 0 ? ye.stringLength : 20, ia = typeof $e == "object" && $e.shouldTruncate === !0;
          if (cn && typeof Xe == "string")
            if (cn === "truncate" && ia) {
              const oa = gl(Ce, 480, Gn, 1, 10);
              Xe = Te(Xe, oa);
            } else cn !== "truncate" && (Xe = l({
              value: Xe,
              format: cn,
              endDate: null,
              stringLength: Gn,
              key: ye.key || "",
              translate: null,
              colorLabel: null,
              onClick: null,
              rowData: Q,
              textColor: "#000000",
              boolLabels: null,
              stopDateHandler: () => {
              }
            }));
          ((ye.key === "id" || ye.label === "ID" || ((Vt = ye.key) == null ? void 0 : Vt.toLowerCase().includes("id"))) && !N.isEmpty(Xe) && Xe !== "-" && Xe !== null && Xe !== void 0 || !N.isEmpty(Xe) && Xe !== "-" && Xe !== null && Xe !== void 0) && Ge.push(
            /* @__PURE__ */ M("div", { className: lt.cardLine3Item, children: /* @__PURE__ */ de("div", { className: lt.cardInlineField, children: [
              Lt && /* @__PURE__ */ de("span", { className: lt.cardInlineLabel, children: [
                Lt,
                ":"
              ] }),
              /* @__PURE__ */ M("span", { className: lt.cardInlineValue, children: Xe })
            ] }) }, ye.key || "render")
          );
          return;
        }
        const Nt = typeof ye == "string" ? ye : ye.key, It = typeof ye == "object" && ye.label !== void 0 ? ye.label : null, dt = typeof ye == "object" && ye.format !== void 0 ? ye.format : null, Qe = N.find(t, ($e) => $e.key === Nt && !$e.multiple && !$e.hidden);
        if (Qe && !Qe.hidden && !Qe.multiple) {
          const $e = dt ? { ...Qe, format: dt } : Qe, Lt = ge($e, Q, It);
          Lt && Ge.push(
            /* @__PURE__ */ M("div", { className: lt.cardLine3Item, children: Lt }, Nt)
          );
        }
      });
      const Ze = [];
      N.map(y, (ye) => {
        var Vt;
        if (typeof ye == "object" && typeof ye.render == "function") {
          const $e = ye.render(Q), Lt = typeof $e == "object" && $e.label !== void 0 ? $e.label : ye.label || null;
          let Xe = typeof $e == "object" && $e.value !== void 0 ? $e.value : $e;
          const cn = typeof ye == "object" && ye.format !== void 0 ? ye.format : null, Gn = typeof ye == "object" && ye.stringLength !== void 0 ? ye.stringLength : 20, ia = typeof $e == "object" && $e.shouldTruncate === !0;
          if (cn && typeof Xe == "string")
            if (cn === "truncate" && ia) {
              const oa = gl(Ce, 480, Gn, 1, 10);
              Xe = Te(Xe, oa);
            } else cn !== "truncate" && (Xe = l({
              value: Xe,
              format: cn,
              endDate: null,
              stringLength: Gn,
              key: ye.key || "",
              translate: null,
              colorLabel: null,
              onClick: null,
              rowData: Q,
              textColor: "#000000",
              boolLabels: null,
              stopDateHandler: () => {
              }
            }));
          ((ye.key === "id" || ye.label === "ID" || ((Vt = ye.key) == null ? void 0 : Vt.toLowerCase().includes("id"))) && !N.isEmpty(Xe) && Xe !== "-" && Xe !== null && Xe !== void 0 || !N.isEmpty(Xe) && Xe !== "-" && Xe !== null && Xe !== void 0) && Ze.push(
            /* @__PURE__ */ M("div", { className: lt.cardLine4Item, children: /* @__PURE__ */ de("div", { className: lt.cardInlineField, children: [
              Lt && /* @__PURE__ */ de("span", { className: lt.cardInlineLabel, children: [
                Lt,
                ":"
              ] }),
              /* @__PURE__ */ M("span", { className: lt.cardInlineValue, children: Xe })
            ] }) }, ye.key || "render")
          );
          return;
        }
        const Nt = typeof ye == "string" ? ye : ye.key, It = typeof ye == "object" && ye.label !== void 0 ? ye.label : null, dt = typeof ye == "object" && ye.format !== void 0 ? ye.format : null, Qe = N.find(t, ($e) => $e.key === Nt && !$e.multiple && !$e.hidden);
        if (Qe && !Qe.hidden && !Qe.multiple) {
          const $e = dt ? { ...Qe, format: dt } : Qe, Lt = ge($e, Q, It);
          Lt && Ze.push(
            /* @__PURE__ */ M("div", { className: lt.cardLine4Item, children: Lt }, Nt)
          );
        }
      });
      const kt = Pe(Q, t);
      return /* @__PURE__ */ de(
        "div",
        {
          className: lt.card,
          style: ae,
          role: "button",
          tabIndex: 0,
          onClick: () => {
            u(Q);
          },
          onDoubleClick: () => {
            s("Watch", Q);
          },
          onKeyPress: (ye) => {
            (ye.key === "Enter" || ye.key === " ") && u(Q);
          },
          children: [
            kt,
            !N.isEmpty(Et) && /* @__PURE__ */ M("div", { className: lt.cardLine1, children: Et }),
            !N.isEmpty(nt) && /* @__PURE__ */ M("div", { className: lt.cardLine2, children: nt }),
            !N.isEmpty(Ge) && /* @__PURE__ */ M("div", { className: lt.cardLine3, children: Ge }),
            !N.isEmpty(Ze) && /* @__PURE__ */ M("div", { className: lt.cardLine4, children: Ze })
          ]
        },
        ue
      );
    }
    const Ee = N.map(
      t,
      ({
        key: Fe,
        label: ot,
        format: qe,
        endDateKey: Et = null,
        dataPosition: nt = "left",
        hidden: Ge = !1,
        stringLength: Ze = 20,
        boolLabels: kt,
        translate: ye,
        colorLabel: Nt,
        textColor: It = "#000000",
        stopDateHandler: dt = () => {
        },
        onClick: Qe,
        render: Vt,
        multiple: $e = !1
      }) => {
        if (Ge || $e) return null;
        if (Vt && typeof Vt == "function")
          return /* @__PURE__ */ M("div", { className: lt.cardField, children: Vt(Q) }, Fe);
        const Lt = Ht(Fe, Q, !1), Xe = N.isEmpty(Et) ? null : Ht(Et, Q), cn = gl(Ce, 768, Ze, 10, 10), Gn = l({
          value: Lt,
          format: qe,
          endDate: Xe,
          stringLength: cn,
          key: Fe,
          translate: ye,
          colorLabel: Nt,
          onClick: Qe,
          rowData: Q,
          textColor: It,
          boolLabels: kt,
          stopDateHandler: dt
        });
        return /* @__PURE__ */ de("div", { className: lt.cardField, children: [
          /* @__PURE__ */ de("div", { className: lt.cardLabel, children: [
            ot,
            ":"
          ] }),
          /* @__PURE__ */ M("div", { className: lt.cardValue, style: { textAlign: nt, color: It }, children: Gn })
        ] }, Fe);
      }
    ), Le = Pe(Q, t);
    return /* @__PURE__ */ de(
      "div",
      {
        className: lt.card,
        style: ae,
        role: "button",
        tabIndex: 0,
        onClick: () => {
          u(Q);
        },
        onDoubleClick: () => {
          s("Watch", Q);
        },
        onKeyPress: (Fe) => {
          (Fe.key === "Enter" || Fe.key === " ") && u(Q);
        },
        children: [
          Le,
          Ee
        ]
      },
      ue
    );
  }, U = I ? ne : e, $ = jp(() => {
    if (N.isEmpty(U))
      return [];
    const Q = [];
    return N.map(U, (ue, te) => {
      if (N.isEmpty(n)) {
        const V = (ue == null ? void 0 : ue.id) !== void 0 ? ue.id : te;
        Q.push({
          type: "card",
          key: `card-${V}`,
          data: ue
        });
      } else {
        const V = Ht(n.headerTitle, ue, !1), ae = Ht(n.dataDetail, ue, !1);
        Q.push({
          type: "header",
          key: `header-${te}`,
          title: V
        }), N.map(ae, (Ee, Le) => {
          const Fe = (Ee == null ? void 0 : Ee.id) !== void 0 ? Ee.id : `${te}-${Le}`;
          Q.push({
            type: "card",
            key: `card-${Fe}`,
            data: Ee
          });
        });
      }
    }), Q;
  }, [U, n])(), D = jp(async () => {
    if (!I || !O || he.current || B || ie.current)
      return;
    const Q = re + 1, ue = N.isEmpty(n) ? ne.length : N.sumBy(ne, (te) => {
      const V = Ht(n.dataDetail, te, !1);
      return (V == null ? void 0 : V.length) || 0;
    });
    if (S && ue >= S) {
      ie.current = !0;
      return;
    }
    he.current = !0, Y(!0), ee.current = !0;
    try {
      await I({ ...O, page: Q }, !1, !1), pe(Q);
    } catch (te) {
      console.error("Error loading more data:", te), ee.current = !1;
    } finally {
      Y(!1), he.current = !1;
    }
  }, [I, O, re, ne, n, S, B]), G = I ? D : R, Z = I ? B : F, le = N.isEmpty(n) ? U.length : N.sumBy(U, (Q) => {
    const ue = Ht(n.dataDetail, Q, !1);
    return (ue == null ? void 0 : ue.length) || 0;
  }), fe = ie.current ? !1 : C ?? (S ? le < S : !0);
  return Kt(() => {
    pe(1), he.current = !1;
  }, [O]), Kt(() => {
    if (!E || !G || !k.current)
      return;
    let Q = null, ue = null;
    const te = () => {
      let ae = P.current;
      for (; ae && ae !== document.body; ) {
        const Ee = ae.className || "", Le = window.getComputedStyle(ae);
        if (Ee.includes("modalContent") || Ee.includes("scrolling") || Le.overflowY === "auto" || Le.overflowY === "scroll")
          return ae;
        ae = ae.parentElement;
      }
      return null;
    };
    return ue = setTimeout(() => {
      const ae = te(), Ee = k.current;
      !Ee || fe === !1 || $.length === 0 || "IntersectionObserver" in window && (Q = new IntersectionObserver(
        (Le) => {
          const [Fe] = Le;
          Fe.isIntersecting && fe !== !1 && !Z && !he.current && $.length > 0 && !ve && G();
        },
        {
          root: ae,
          rootMargin: "200px",
          threshold: 0
        }
      ), Q.observe(Ee));
    }, 300), () => {
      ue && clearTimeout(ue), Q && k.current && Q.unobserve(k.current);
    };
  }, [E, G, fe, Z, $.length, ve]), ve && N.isEmpty($) ? /* @__PURE__ */ M("div", { className: lt.cardsContainer, ref: P, children: /* @__PURE__ */ M("div", { className: lt.emptyState, children: /* @__PURE__ */ de(
    "div",
    {
      style: {
        textAlign: "center",
        padding: "40px 20px",
        color: "#666",
        fontSize: "1.1rem"
      },
      children: [
        /* @__PURE__ */ M(We, { loading: !0, name: "spinner", size: "big" }),
        /* @__PURE__ */ M("div", { style: { marginTop: "15px" }, children: "Cargando..." })
      ]
    }
  ) }) }) : N.isEmpty($) ? /* @__PURE__ */ M("div", { className: lt.cardsContainer, ref: P, children: /* @__PURE__ */ M("div", { className: lt.emptyState, children: /* @__PURE__ */ de(Yn, { as: "h3", color: "grey", children: [
    /* @__PURE__ */ M("div", { className: lt.emptyIcon, children: /* @__PURE__ */ de(We.Group, { size: "large", children: [
      /* @__PURE__ */ M(We, { name: "list alternate outline" }),
      /* @__PURE__ */ M(We, { corner: !0, name: "close", color: "red" })
    ] }) }),
    "No se ha encontrado ningun dato"
  ] }) }) }) : /* @__PURE__ */ de("div", { className: lt.cardsContainer, ref: P, children: [
    N.map($, (Q) => Q.type === "header" ? /* @__PURE__ */ M("div", { className: lt.cardHeader, children: Q.title }, Q.key) : Me(Q.data, Q.key)),
    E && fe !== !1 && /* @__PURE__ */ M("div", { ref: k, style: { height: "1px", width: "100%" } }),
    Z && !ve && /* @__PURE__ */ de(
      "div",
      {
        style: {
          textAlign: "center",
          padding: "20px",
          color: "#666",
          fontSize: "1rem"
        },
        children: [
          /* @__PURE__ */ M(We, { loading: !0, name: "spinner" }),
          "Cargando más resultados..."
        ]
      }
    )
  ] });
};
rE.propTypes = {
  data: c.array,
  columns: c.array,
  headerDetail: c.object,
  setRowStyle: c.func,
  clickedRowColors: c.string,
  onHandlerTable: c.func,
  handlerClick: c.func,
  formatData: c.func.isRequired,
  clikedData: c.object,
  isPDF: c.bool,
  cardLine1: c.array,
  cardLine2: c.array,
  cardLine3: c.array,
  cardLine4: c.array,
  multipleHandler: c.func,
  concatKeys: c.array,
  // Scroll infinito
  enableInfiniteScroll: c.bool,
  onLoadMore: c.func,
  // Opcional: handler manual
  isLoadingMore: c.bool,
  // Opcional: estado manual
  hasMore: c.bool,
  // Opcional: se calcula automáticamente si no se proporciona
  // Manejo automático
  dataHandler: c.func,
  // Función para cargar datos automáticamente
  searchParams: c.object,
  // Parámetros de búsqueda
  totalRows: c.number,
  // Total de registros disponibles
  mergeConfig: c.object
  // Configuración para merge automático { groupKey, itemsKey, idKey }
};
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function t6(e, t, n) {
  return (t = r6(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function y0(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ke(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? y0(Object(n), !0).forEach(function(r) {
      t6(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : y0(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function n6(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function r6(e) {
  var t = n6(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
const b0 = () => {
};
let zm = {}, aE = {}, iE = null, oE = {
  mark: b0,
  measure: b0
};
try {
  typeof window < "u" && (zm = window), typeof document < "u" && (aE = document), typeof MutationObserver < "u" && (iE = MutationObserver), typeof performance < "u" && (oE = performance);
} catch {
}
const {
  userAgent: _0 = ""
} = zm.navigator || {}, Bi = zm, nn = aE, w0 = iE, wu = oE;
Bi.document;
const ii = !!nn.documentElement && !!nn.head && typeof nn.addEventListener == "function" && typeof nn.createElement == "function", sE = ~_0.indexOf("MSIE") || ~_0.indexOf("Trident/");
var a6 = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, i6 = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, lE = {
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
}, o6 = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, cE = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], Fn = "classic", Fd = "duotone", s6 = "sharp", l6 = "sharp-duotone", uE = [Fn, Fd, s6, l6], c6 = {
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
}, u6 = {
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
}, d6 = /* @__PURE__ */ new Map([["classic", {
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
}]]), f6 = {
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
}, p6 = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], E0 = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, h6 = ["kit"], m6 = {
  kit: {
    "fa-kit": "fak"
  }
}, g6 = ["fak", "fakd"], v6 = {
  kit: {
    fak: "fa-kit"
  }
}, x0 = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
}, Eu = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, y6 = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], b6 = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], _6 = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, w6 = {
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
}, E6 = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
}, wh = {
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
}, x6 = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], Eh = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...y6, ...x6], C6 = ["solid", "regular", "light", "thin", "duotone", "brands"], dE = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], O6 = dE.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), S6 = [...Object.keys(E6), ...C6, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Eu.GROUP, Eu.SWAP_OPACITY, Eu.PRIMARY, Eu.SECONDARY].concat(dE.map((e) => "".concat(e, "x"))).concat(O6.map((e) => "w-".concat(e))), T6 = {
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
const Xa = "___FONT_AWESOME___", xh = 16, fE = "fa", pE = "svg-inline--fa", ko = "data-fa-i2svg", Ch = "data-fa-pseudo-element", P6 = "data-fa-pseudo-element-pending", Hm = "data-prefix", Ym = "data-icon", C0 = "fontawesome-i2svg", k6 = "async", N6 = ["HTML", "HEAD", "STYLE", "SCRIPT"], hE = (() => {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})();
function Ec(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[Fn];
    }
  });
}
const mE = ke({}, lE);
mE[Fn] = ke(ke(ke(ke({}, {
  "fa-duotone": "duotone"
}), lE[Fn]), E0.kit), E0["kit-duotone"]);
const I6 = Ec(mE), Oh = ke({}, f6);
Oh[Fn] = ke(ke(ke(ke({}, {
  duotone: "fad"
}), Oh[Fn]), x0.kit), x0["kit-duotone"]);
const O0 = Ec(Oh), Sh = ke({}, wh);
Sh[Fn] = ke(ke({}, Sh[Fn]), v6.kit);
const qm = Ec(Sh), Th = ke({}, w6);
Th[Fn] = ke(ke({}, Th[Fn]), m6.kit);
Ec(Th);
const A6 = a6, gE = "fa-layers-text", R6 = i6, M6 = ke({}, c6);
Ec(M6);
const D6 = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Tp = o6, L6 = [...h6, ...S6], Nl = Bi.FontAwesomeConfig || {};
function F6(e) {
  var t = nn.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function $6(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
nn && typeof nn.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [n, r] = t;
  const i = $6(F6(n));
  i != null && (Nl[r] = i);
});
const vE = {
  styleDefault: "solid",
  familyDefault: Fn,
  cssPrefix: fE,
  replacementClass: pE,
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
Nl.familyPrefix && (Nl.cssPrefix = Nl.familyPrefix);
const As = ke(ke({}, vE), Nl);
As.autoReplaceSvg || (As.observeMutations = !1);
const Ve = {};
Object.keys(vE).forEach((e) => {
  Object.defineProperty(Ve, e, {
    enumerable: !0,
    set: function(t) {
      As[e] = t, Il.forEach((n) => n(Ve));
    },
    get: function() {
      return As[e];
    }
  });
});
Object.defineProperty(Ve, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    As.cssPrefix = e, Il.forEach((t) => t(Ve));
  },
  get: function() {
    return As.cssPrefix;
  }
});
Bi.FontAwesomeConfig = Ve;
const Il = [];
function B6(e) {
  return Il.push(e), () => {
    Il.splice(Il.indexOf(e), 1);
  };
}
const bi = xh, ya = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function W6(e) {
  if (!e || !ii)
    return;
  const t = nn.createElement("style");
  t.setAttribute("type", "text/css"), t.innerHTML = e;
  const n = nn.head.childNodes;
  let r = null;
  for (let i = n.length - 1; i > -1; i--) {
    const s = n[i], u = (s.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(u) > -1 && (r = s);
  }
  return nn.head.insertBefore(t, r), e;
}
const U6 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function oc() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += U6[Math.random() * 62 | 0];
  return t;
}
function Hs(e) {
  const t = [];
  for (let n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function Vm(e) {
  return e.classList ? Hs(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function yE(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function j6(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(yE(e[n]), '" '), "").trim();
}
function $d(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function Gm(e) {
  return e.size !== ya.size || e.x !== ya.x || e.y !== ya.y || e.rotate !== ya.rotate || e.flipX || e.flipY;
}
function z6(e) {
  let {
    transform: t,
    containerWidth: n,
    iconWidth: r
  } = e;
  const i = {
    transform: "translate(".concat(n / 2, " 256)")
  }, s = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), u = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), l = "rotate(".concat(t.rotate, " 0 0)"), d = {
    transform: "".concat(s, " ").concat(u, " ").concat(l)
  }, p = {
    transform: "translate(".concat(r / 2 * -1, " -256)")
  };
  return {
    outer: i,
    inner: d,
    path: p
  };
}
function H6(e) {
  let {
    transform: t,
    width: n = xh,
    height: r = xh,
    startCentered: i = !1
  } = e, s = "";
  return i && sE ? s += "translate(".concat(t.x / bi - n / 2, "em, ").concat(t.y / bi - r / 2, "em) ") : i ? s += "translate(calc(-50% + ".concat(t.x / bi, "em), calc(-50% + ").concat(t.y / bi, "em)) ") : s += "translate(".concat(t.x / bi, "em, ").concat(t.y / bi, "em) "), s += "scale(".concat(t.size / bi * (t.flipX ? -1 : 1), ", ").concat(t.size / bi * (t.flipY ? -1 : 1), ") "), s += "rotate(".concat(t.rotate, "deg) "), s;
}
var Y6 = `:root, :host {
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
function bE() {
  const e = fE, t = pE, n = Ve.cssPrefix, r = Ve.replacementClass;
  let i = Y6;
  if (n !== e || r !== t) {
    const s = new RegExp("\\.".concat(e, "\\-"), "g"), u = new RegExp("\\--".concat(e, "\\-"), "g"), l = new RegExp("\\.".concat(t), "g");
    i = i.replace(s, ".".concat(n, "-")).replace(u, "--".concat(n, "-")).replace(l, ".".concat(r));
  }
  return i;
}
let S0 = !1;
function Pp() {
  Ve.autoAddCss && !S0 && (W6(bE()), S0 = !0);
}
var q6 = {
  mixout() {
    return {
      dom: {
        css: bE,
        insertCss: Pp
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        Pp();
      },
      beforeI2svg() {
        Pp();
      }
    };
  }
};
const Qa = Bi || {};
Qa[Xa] || (Qa[Xa] = {});
Qa[Xa].styles || (Qa[Xa].styles = {});
Qa[Xa].hooks || (Qa[Xa].hooks = {});
Qa[Xa].shims || (Qa[Xa].shims = []);
var ba = Qa[Xa];
const _E = [], wE = function() {
  nn.removeEventListener("DOMContentLoaded", wE), ed = 1, _E.map((e) => e());
};
let ed = !1;
ii && (ed = (nn.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(nn.readyState), ed || nn.addEventListener("DOMContentLoaded", wE));
function V6(e) {
  ii && (ed ? setTimeout(e, 0) : _E.push(e));
}
function xc(e) {
  const {
    tag: t,
    attributes: n = {},
    children: r = []
  } = e;
  return typeof e == "string" ? yE(e) : "<".concat(t, " ").concat(j6(n), ">").concat(r.map(xc).join(""), "</").concat(t, ">");
}
function T0(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var kp = function(t, n, r, i) {
  var s = Object.keys(t), u = s.length, l = n, d, p, h;
  for (r === void 0 ? (d = 1, h = t[s[0]]) : (d = 0, h = r); d < u; d++)
    p = s[d], h = l(h, t[p], p, t);
  return h;
};
function G6(e) {
  const t = [];
  let n = 0;
  const r = e.length;
  for (; n < r; ) {
    const i = e.charCodeAt(n++);
    if (i >= 55296 && i <= 56319 && n < r) {
      const s = e.charCodeAt(n++);
      (s & 64512) == 56320 ? t.push(((i & 1023) << 10) + (s & 1023) + 65536) : (t.push(i), n--);
    } else
      t.push(i);
  }
  return t;
}
function Ph(e) {
  const t = G6(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function K6(e, t) {
  const n = e.length;
  let r = e.charCodeAt(t), i;
  return r >= 55296 && r <= 56319 && n > t + 1 && (i = e.charCodeAt(t + 1), i >= 56320 && i <= 57343) ? (r - 55296) * 1024 + i - 56320 + 65536 : r;
}
function P0(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return !!r.icon ? t[r.iconName] = r.icon : t[n] = r, t;
  }, {});
}
function kh(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: r = !1
  } = n, i = P0(t);
  typeof ba.hooks.addPack == "function" && !r ? ba.hooks.addPack(e, P0(t)) : ba.styles[e] = ke(ke({}, ba.styles[e] || {}), i), e === "fas" && kh("fa", t);
}
const {
  styles: sc,
  shims: Z6
} = ba, EE = Object.keys(qm), X6 = EE.reduce((e, t) => (e[t] = Object.keys(qm[t]), e), {});
let Km = null, xE = {}, CE = {}, OE = {}, SE = {}, TE = {};
function Q6(e) {
  return ~L6.indexOf(e);
}
function J6(e, t) {
  const n = t.split("-"), r = n[0], i = n.slice(1).join("-");
  return r === e && i !== "" && !Q6(i) ? i : null;
}
const PE = () => {
  const e = (r) => kp(sc, (i, s, u) => (i[u] = kp(s, r, {}), i), {});
  xE = e((r, i, s) => (i[3] && (r[i[3]] = s), i[2] && i[2].filter((l) => typeof l == "number").forEach((l) => {
    r[l.toString(16)] = s;
  }), r)), CE = e((r, i, s) => (r[s] = s, i[2] && i[2].filter((l) => typeof l == "string").forEach((l) => {
    r[l] = s;
  }), r)), TE = e((r, i, s) => {
    const u = i[2];
    return r[s] = s, u.forEach((l) => {
      r[l] = s;
    }), r;
  });
  const t = "far" in sc || Ve.autoFetchSvg, n = kp(Z6, (r, i) => {
    const s = i[0];
    let u = i[1];
    const l = i[2];
    return u === "far" && !t && (u = "fas"), typeof s == "string" && (r.names[s] = {
      prefix: u,
      iconName: l
    }), typeof s == "number" && (r.unicodes[s.toString(16)] = {
      prefix: u,
      iconName: l
    }), r;
  }, {
    names: {},
    unicodes: {}
  });
  OE = n.names, SE = n.unicodes, Km = Bd(Ve.styleDefault, {
    family: Ve.familyDefault
  });
};
B6((e) => {
  Km = Bd(e.styleDefault, {
    family: Ve.familyDefault
  });
});
PE();
function Zm(e, t) {
  return (xE[e] || {})[t];
}
function eU(e, t) {
  return (CE[e] || {})[t];
}
function po(e, t) {
  return (TE[e] || {})[t];
}
function kE(e) {
  return OE[e] || {
    prefix: null,
    iconName: null
  };
}
function tU(e) {
  const t = SE[e], n = Zm("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function Wi() {
  return Km;
}
const NE = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function nU(e) {
  let t = Fn;
  const n = EE.reduce((r, i) => (r[i] = "".concat(Ve.cssPrefix, "-").concat(i), r), {});
  return uE.forEach((r) => {
    (e.includes(n[r]) || e.some((i) => X6[r].includes(i))) && (t = r);
  }), t;
}
function Bd(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = Fn
  } = t, r = I6[n][e];
  if (n === Fd && !e)
    return "fad";
  const i = O0[n][e] || O0[n][r], s = e in ba.styles ? e : null;
  return i || s || null;
}
function rU(e) {
  let t = [], n = null;
  return e.forEach((r) => {
    const i = J6(Ve.cssPrefix, r);
    i ? n = i : r && t.push(r);
  }), {
    iconName: n,
    rest: t
  };
}
function k0(e) {
  return e.sort().filter((t, n, r) => r.indexOf(t) === n);
}
function Wd(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = t;
  let r = null;
  const i = Eh.concat(b6), s = k0(e.filter((m) => i.includes(m))), u = k0(e.filter((m) => !Eh.includes(m))), l = s.filter((m) => (r = m, !cE.includes(m))), [d = null] = l, p = nU(s), h = ke(ke({}, rU(u)), {}, {
    prefix: Bd(d, {
      family: p
    })
  });
  return ke(ke(ke({}, h), sU({
    values: e,
    family: p,
    styles: sc,
    config: Ve,
    canonical: h,
    givenPrefix: r
  })), aU(n, r, h));
}
function aU(e, t, n) {
  let {
    prefix: r,
    iconName: i
  } = n;
  if (e || !r || !i)
    return {
      prefix: r,
      iconName: i
    };
  const s = t === "fa" ? kE(i) : {}, u = po(r, i);
  return i = s.iconName || u || i, r = s.prefix || r, r === "far" && !sc.far && sc.fas && !Ve.autoFetchSvg && (r = "fas"), {
    prefix: r,
    iconName: i
  };
}
const iU = uE.filter((e) => e !== Fn || e !== Fd), oU = Object.keys(wh).filter((e) => e !== Fn).map((e) => Object.keys(wh[e])).flat();
function sU(e) {
  const {
    values: t,
    family: n,
    canonical: r,
    givenPrefix: i = "",
    styles: s = {},
    config: u = {}
  } = e, l = n === Fd, d = t.includes("fa-duotone") || t.includes("fad"), p = u.familyDefault === "duotone", h = r.prefix === "fad" || r.prefix === "fa-duotone";
  if (!l && (d || p || h) && (r.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (r.prefix = "fab"), !r.prefix && iU.includes(n) && (Object.keys(s).find((v) => oU.includes(v)) || u.autoFetchSvg)) {
    const v = d6.get(n).defaultShortPrefixId;
    r.prefix = v, r.iconName = po(r.prefix, r.iconName) || r.iconName;
  }
  return (r.prefix === "fa" || i === "fa") && (r.prefix = Wi() || "fas"), r;
}
class lU {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    const i = n.reduce(this._pullDefinitions, {});
    Object.keys(i).forEach((s) => {
      this.definitions[s] = ke(ke({}, this.definitions[s] || {}), i[s]), kh(s, i[s]);
      const u = qm[Fn][s];
      u && kh(u, i[s]), PE();
    });
  }
  reset() {
    this.definitions = {};
  }
  _pullDefinitions(t, n) {
    const r = n.prefix && n.iconName && n.icon ? {
      0: n
    } : n;
    return Object.keys(r).map((i) => {
      const {
        prefix: s,
        iconName: u,
        icon: l
      } = r[i], d = l[2];
      t[s] || (t[s] = {}), d.length > 0 && d.forEach((p) => {
        typeof p == "string" && (t[s][p] = l);
      }), t[s][u] = l;
    }), t;
  }
}
let N0 = [], os = {};
const ps = {}, cU = Object.keys(ps);
function uU(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return N0 = e, os = {}, Object.keys(ps).forEach((r) => {
    cU.indexOf(r) === -1 && delete ps[r];
  }), N0.forEach((r) => {
    const i = r.mixout ? r.mixout() : {};
    if (Object.keys(i).forEach((s) => {
      typeof i[s] == "function" && (n[s] = i[s]), typeof i[s] == "object" && Object.keys(i[s]).forEach((u) => {
        n[s] || (n[s] = {}), n[s][u] = i[s][u];
      });
    }), r.hooks) {
      const s = r.hooks();
      Object.keys(s).forEach((u) => {
        os[u] || (os[u] = []), os[u].push(s[u]);
      });
    }
    r.provides && r.provides(ps);
  }), n;
}
function Nh(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
    r[i - 2] = arguments[i];
  return (os[e] || []).forEach((u) => {
    t = u.apply(null, [t, ...r]);
  }), t;
}
function No(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  (os[e] || []).forEach((s) => {
    s.apply(null, n);
  });
}
function Ui() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return ps[e] ? ps[e].apply(null, t) : void 0;
}
function Ih(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || Wi();
  if (t)
    return t = po(n, t) || t, T0(IE.definitions, n, t) || T0(ba.styles, n, t);
}
const IE = new lU(), dU = () => {
  Ve.autoReplaceSvg = !1, Ve.observeMutations = !1, No("noAuto");
}, fU = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return ii ? (No("beforeI2svg", e), Ui("pseudoElements2svg", e), Ui("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    Ve.autoReplaceSvg === !1 && (Ve.autoReplaceSvg = !0), Ve.observeMutations = !0, V6(() => {
      hU({
        autoReplaceSvgRoot: t
      }), No("watch", e);
    });
  }
}, pU = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: po(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = Bd(e[0]);
      return {
        prefix: n,
        iconName: po(n, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(Ve.cssPrefix, "-")) > -1 || e.match(A6))) {
      const t = Wd(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || Wi(),
        iconName: po(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = Wi();
      return {
        prefix: t,
        iconName: po(t, e) || e
      };
    }
  }
}, xr = {
  noAuto: dU,
  config: Ve,
  dom: fU,
  parse: pU,
  library: IE,
  findIconDefinition: Ih,
  toHtml: xc
}, hU = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = nn
  } = e;
  (Object.keys(ba.styles).length > 0 || Ve.autoFetchSvg) && ii && Ve.autoReplaceSvg && xr.dom.i2svg({
    node: t
  });
};
function Ud(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((n) => xc(n));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!ii) return;
      const n = nn.createElement("div");
      return n.innerHTML = e.html, n.children;
    }
  }), e;
}
function mU(e) {
  let {
    children: t,
    main: n,
    mask: r,
    attributes: i,
    styles: s,
    transform: u
  } = e;
  if (Gm(u) && n.found && !r.found) {
    const {
      width: l,
      height: d
    } = n, p = {
      x: l / d / 2,
      y: 0.5
    };
    i.style = $d(ke(ke({}, s), {}, {
      "transform-origin": "".concat(p.x + u.x / 16, "em ").concat(p.y + u.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: i,
    children: t
  }];
}
function gU(e) {
  let {
    prefix: t,
    iconName: n,
    children: r,
    attributes: i,
    symbol: s
  } = e;
  const u = s === !0 ? "".concat(t, "-").concat(Ve.cssPrefix, "-").concat(n) : s;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: ke(ke({}, i), {}, {
        id: u
      }),
      children: r
    }]
  }];
}
function Xm(e) {
  const {
    icons: {
      main: t,
      mask: n
    },
    prefix: r,
    iconName: i,
    transform: s,
    symbol: u,
    title: l,
    maskId: d,
    titleId: p,
    extra: h,
    watchable: m = !1
  } = e, {
    width: v,
    height: y
  } = n.found ? n : t, b = g6.includes(r), _ = [Ve.replacementClass, i ? "".concat(Ve.cssPrefix, "-").concat(i) : ""].filter((O) => h.classes.indexOf(O) === -1).filter((O) => O !== "" || !!O).concat(h.classes).join(" ");
  let E = {
    children: [],
    attributes: ke(ke({}, h.attributes), {}, {
      "data-prefix": r,
      "data-icon": i,
      class: _,
      role: h.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(v, " ").concat(y)
    })
  };
  const R = b && !~h.classes.indexOf("fa-fw") ? {
    width: "".concat(v / y * 16 * 0.0625, "em")
  } : {};
  m && (E.attributes[ko] = ""), l && (E.children.push({
    tag: "title",
    attributes: {
      id: E.attributes["aria-labelledby"] || "title-".concat(p || oc())
    },
    children: [l]
  }), delete E.attributes.title);
  const F = ke(ke({}, E), {}, {
    prefix: r,
    iconName: i,
    main: t,
    mask: n,
    maskId: d,
    transform: s,
    symbol: u,
    styles: ke(ke({}, R), h.styles)
  }), {
    children: C,
    attributes: I
  } = n.found && t.found ? Ui("generateAbstractMask", F) || {
    children: [],
    attributes: {}
  } : Ui("generateAbstractIcon", F) || {
    children: [],
    attributes: {}
  };
  return F.children = C, F.attributes = I, u ? gU(F) : mU(F);
}
function I0(e) {
  const {
    content: t,
    width: n,
    height: r,
    transform: i,
    title: s,
    extra: u,
    watchable: l = !1
  } = e, d = ke(ke(ke({}, u.attributes), s ? {
    title: s
  } : {}), {}, {
    class: u.classes.join(" ")
  });
  l && (d[ko] = "");
  const p = ke({}, u.styles);
  Gm(i) && (p.transform = H6({
    transform: i,
    startCentered: !0,
    width: n,
    height: r
  }), p["-webkit-transform"] = p.transform);
  const h = $d(p);
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
function vU(e) {
  const {
    content: t,
    title: n,
    extra: r
  } = e, i = ke(ke(ke({}, r.attributes), n ? {
    title: n
  } : {}), {}, {
    class: r.classes.join(" ")
  }), s = $d(r.styles);
  s.length > 0 && (i.style = s);
  const u = [];
  return u.push({
    tag: "span",
    attributes: i,
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
  styles: Np
} = ba;
function Ah(e) {
  const t = e[0], n = e[1], [r] = e.slice(4);
  let i = null;
  return Array.isArray(r) ? i = {
    tag: "g",
    attributes: {
      class: "".concat(Ve.cssPrefix, "-").concat(Tp.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(Ve.cssPrefix, "-").concat(Tp.SECONDARY),
        fill: "currentColor",
        d: r[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(Ve.cssPrefix, "-").concat(Tp.PRIMARY),
        fill: "currentColor",
        d: r[1]
      }
    }]
  } : i = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: r
    }
  }, {
    found: !0,
    width: t,
    height: n,
    icon: i
  };
}
const yU = {
  found: !1,
  width: 512,
  height: 512
};
function bU(e, t) {
  !hE && !Ve.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function Rh(e, t) {
  let n = t;
  return t === "fa" && Ve.styleDefault !== null && (t = Wi()), new Promise((r, i) => {
    if (n === "fa") {
      const s = kE(e) || {};
      e = s.iconName || e, t = s.prefix || t;
    }
    if (e && t && Np[t] && Np[t][e]) {
      const s = Np[t][e];
      return r(Ah(s));
    }
    bU(e, t), r(ke(ke({}, yU), {}, {
      icon: Ve.showMissingIcons && e ? Ui("missingIconAbstract") || {} : {}
    }));
  });
}
const A0 = () => {
}, Mh = Ve.measurePerformance && wu && wu.mark && wu.measure ? wu : {
  mark: A0,
  measure: A0
}, xl = 'FA "6.7.2"', _U = (e) => (Mh.mark("".concat(xl, " ").concat(e, " begins")), () => AE(e)), AE = (e) => {
  Mh.mark("".concat(xl, " ").concat(e, " ends")), Mh.measure("".concat(xl, " ").concat(e), "".concat(xl, " ").concat(e, " begins"), "".concat(xl, " ").concat(e, " ends"));
};
var Qm = {
  begin: _U,
  end: AE
};
const Mu = () => {
};
function R0(e) {
  return typeof (e.getAttribute ? e.getAttribute(ko) : null) == "string";
}
function wU(e) {
  const t = e.getAttribute ? e.getAttribute(Hm) : null, n = e.getAttribute ? e.getAttribute(Ym) : null;
  return t && n;
}
function EU(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(Ve.replacementClass);
}
function xU() {
  return Ve.autoReplaceSvg === !0 ? Du.replace : Du[Ve.autoReplaceSvg] || Du.replace;
}
function CU(e) {
  return nn.createElementNS("http://www.w3.org/2000/svg", e);
}
function OU(e) {
  return nn.createElement(e);
}
function RE(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? CU : OU
  } = t;
  if (typeof e == "string")
    return nn.createTextNode(e);
  const r = n(e.tag);
  return Object.keys(e.attributes || []).forEach(function(s) {
    r.setAttribute(s, e.attributes[s]);
  }), (e.children || []).forEach(function(s) {
    r.appendChild(RE(s, {
      ceFn: n
    }));
  }), r;
}
function SU(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const Du = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((n) => {
        t.parentNode.insertBefore(RE(n), t);
      }), t.getAttribute(ko) === null && Ve.keepOriginalSource) {
        let n = nn.createComment(SU(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], n = e[1];
    if (~Vm(t).indexOf(Ve.replacementClass))
      return Du.replace(e);
    const r = new RegExp("".concat(Ve.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const s = n[0].attributes.class.split(" ").reduce((u, l) => (l === Ve.replacementClass || l.match(r) ? u.toSvg.push(l) : u.toNode.push(l), u), {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = s.toSvg.join(" "), s.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", s.toNode.join(" "));
    }
    const i = n.map((s) => xc(s)).join(`
`);
    t.setAttribute(ko, ""), t.innerHTML = i;
  }
};
function M0(e) {
  e();
}
function ME(e, t) {
  const n = typeof t == "function" ? t : Mu;
  if (e.length === 0)
    n();
  else {
    let r = M0;
    Ve.mutateApproach === k6 && (r = Bi.requestAnimationFrame || M0), r(() => {
      const i = xU(), s = Qm.begin("mutate");
      e.map(i), s(), n();
    });
  }
}
let Jm = !1;
function DE() {
  Jm = !0;
}
function Dh() {
  Jm = !1;
}
let td = null;
function D0(e) {
  if (!w0 || !Ve.observeMutations)
    return;
  const {
    treeCallback: t = Mu,
    nodeCallback: n = Mu,
    pseudoElementsCallback: r = Mu,
    observeMutationsRoot: i = nn
  } = e;
  td = new w0((s) => {
    if (Jm) return;
    const u = Wi();
    Hs(s).forEach((l) => {
      if (l.type === "childList" && l.addedNodes.length > 0 && !R0(l.addedNodes[0]) && (Ve.searchPseudoElements && r(l.target), t(l.target)), l.type === "attributes" && l.target.parentNode && Ve.searchPseudoElements && r(l.target.parentNode), l.type === "attributes" && R0(l.target) && ~D6.indexOf(l.attributeName))
        if (l.attributeName === "class" && wU(l.target)) {
          const {
            prefix: d,
            iconName: p
          } = Wd(Vm(l.target));
          l.target.setAttribute(Hm, d || u), p && l.target.setAttribute(Ym, p);
        } else EU(l.target) && n(l.target);
    });
  }), ii && td.observe(i, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function TU() {
  td && td.disconnect();
}
function PU(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce((r, i) => {
    const s = i.split(":"), u = s[0], l = s.slice(1);
    return u && l.length > 0 && (r[u] = l.join(":").trim()), r;
  }, {})), n;
}
function kU(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "";
  let i = Wd(Vm(e));
  return i.prefix || (i.prefix = Wi()), t && n && (i.prefix = t, i.iconName = n), i.iconName && i.prefix || (i.prefix && r.length > 0 && (i.iconName = eU(i.prefix, e.innerText) || Zm(i.prefix, Ph(e.innerText))), !i.iconName && Ve.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (i.iconName = e.firstChild.data)), i;
}
function NU(e) {
  const t = Hs(e.attributes).reduce((i, s) => (i.name !== "class" && i.name !== "style" && (i[s.name] = s.value), i), {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return Ve.autoA11y && (n ? t["aria-labelledby"] = "".concat(Ve.replacementClass, "-title-").concat(r || oc()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function IU() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: ya,
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
function L0(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: n,
    prefix: r,
    rest: i
  } = kU(e), s = NU(e), u = Nh("parseNodeAttributes", {}, e);
  let l = t.styleParser ? PU(e) : [];
  return ke({
    iconName: n,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: r,
    transform: ya,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: i,
      styles: l,
      attributes: s
    }
  }, u);
}
const {
  styles: AU
} = ba;
function LE(e) {
  const t = Ve.autoReplaceSvg === "nest" ? L0(e, {
    styleParser: !1
  }) : L0(e);
  return ~t.extra.classes.indexOf(gE) ? Ui("generateLayersText", e, t) : Ui("generateSvgReplacementMutation", e, t);
}
function RU() {
  return [...p6, ...Eh];
}
function F0(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!ii) return Promise.resolve();
  const n = nn.documentElement.classList, r = (h) => n.add("".concat(C0, "-").concat(h)), i = (h) => n.remove("".concat(C0, "-").concat(h)), s = Ve.autoFetchSvg ? RU() : cE.concat(Object.keys(AU));
  s.includes("fa") || s.push("fa");
  const u = [".".concat(gE, ":not([").concat(ko, "])")].concat(s.map((h) => ".".concat(h, ":not([").concat(ko, "])"))).join(", ");
  if (u.length === 0)
    return Promise.resolve();
  let l = [];
  try {
    l = Hs(e.querySelectorAll(u));
  } catch {
  }
  if (l.length > 0)
    r("pending"), i("complete");
  else
    return Promise.resolve();
  const d = Qm.begin("onTree"), p = l.reduce((h, m) => {
    try {
      const v = LE(m);
      v && h.push(v);
    } catch (v) {
      hE || v.name === "MissingIcon" && console.error(v);
    }
    return h;
  }, []);
  return new Promise((h, m) => {
    Promise.all(p).then((v) => {
      ME(v, () => {
        r("active"), r("complete"), i("pending"), typeof t == "function" && t(), d(), h();
      });
    }).catch((v) => {
      d(), m(v);
    });
  });
}
function MU(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  LE(e).then((n) => {
    n && ME([n], t);
  });
}
function DU(e) {
  return function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = (t || {}).icon ? t : Ih(t || {});
    let {
      mask: i
    } = n;
    return i && (i = (i || {}).icon ? i : Ih(i || {})), e(r, ke(ke({}, n), {}, {
      mask: i
    }));
  };
}
const LU = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = ya,
    symbol: r = !1,
    mask: i = null,
    maskId: s = null,
    title: u = null,
    titleId: l = null,
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
  return Ud(ke({
    type: "icon"
  }, e), () => (No("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), Ve.autoA11y && (u ? p["aria-labelledby"] = "".concat(Ve.replacementClass, "-title-").concat(l || oc()) : (p["aria-hidden"] = "true", p.focusable = "false")), Xm({
    icons: {
      main: Ah(y),
      mask: i ? Ah(i.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: m,
    iconName: v,
    transform: ke(ke({}, ya), n),
    symbol: r,
    title: u,
    maskId: s,
    titleId: l,
    extra: {
      attributes: p,
      styles: h,
      classes: d
    }
  })));
};
var FU = {
  mixout() {
    return {
      icon: DU(LU)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = F0, e.nodeCallback = MU, e;
      }
    };
  },
  provides(e) {
    e.i2svg = function(t) {
      const {
        node: n = nn,
        callback: r = () => {
        }
      } = t;
      return F0(n, r);
    }, e.generateSvgReplacementMutation = function(t, n) {
      const {
        iconName: r,
        title: i,
        titleId: s,
        prefix: u,
        transform: l,
        symbol: d,
        mask: p,
        maskId: h,
        extra: m
      } = n;
      return new Promise((v, y) => {
        Promise.all([Rh(r, u), p.iconName ? Rh(p.iconName, p.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((b) => {
          let [_, E] = b;
          v([t, Xm({
            icons: {
              main: _,
              mask: E
            },
            prefix: u,
            iconName: r,
            transform: l,
            symbol: d,
            maskId: h,
            title: i,
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
        main: i,
        transform: s,
        styles: u
      } = t;
      const l = $d(u);
      l.length > 0 && (r.style = l);
      let d;
      return Gm(s) && (d = Ui("generateAbstractTransformGrouping", {
        main: i,
        transform: s,
        containerWidth: i.width,
        iconWidth: i.width
      })), n.push(d || i.icon), {
        children: n,
        attributes: r
      };
    };
  }
}, $U = {
  mixout() {
    return {
      layer(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: n = []
        } = t;
        return Ud({
          type: "layer"
        }, () => {
          No("beforeDOMElementCreation", {
            assembler: e,
            params: t
          });
          let r = [];
          return e((i) => {
            Array.isArray(i) ? i.map((s) => {
              r = r.concat(s.abstract);
            }) : r = r.concat(i.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(Ve.cssPrefix, "-layers"), ...n].join(" ")
            },
            children: r
          }];
        });
      }
    };
  }
}, BU = {
  mixout() {
    return {
      counter(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          title: n = null,
          classes: r = [],
          attributes: i = {},
          styles: s = {}
        } = t;
        return Ud({
          type: "counter",
          content: e
        }, () => (No("beforeDOMElementCreation", {
          content: e,
          params: t
        }), vU({
          content: e.toString(),
          title: n,
          extra: {
            attributes: i,
            styles: s,
            classes: ["".concat(Ve.cssPrefix, "-layers-counter"), ...r]
          }
        })));
      }
    };
  }
}, WU = {
  mixout() {
    return {
      text(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: n = ya,
          title: r = null,
          classes: i = [],
          attributes: s = {},
          styles: u = {}
        } = t;
        return Ud({
          type: "text",
          content: e
        }, () => (No("beforeDOMElementCreation", {
          content: e,
          params: t
        }), I0({
          content: e,
          transform: ke(ke({}, ya), n),
          title: r,
          extra: {
            attributes: s,
            styles: u,
            classes: ["".concat(Ve.cssPrefix, "-layers-text"), ...i]
          }
        })));
      }
    };
  },
  provides(e) {
    e.generateLayersText = function(t, n) {
      const {
        title: r,
        transform: i,
        extra: s
      } = n;
      let u = null, l = null;
      if (sE) {
        const d = parseInt(getComputedStyle(t).fontSize, 10), p = t.getBoundingClientRect();
        u = p.width / d, l = p.height / d;
      }
      return Ve.autoA11y && !r && (s.attributes["aria-hidden"] = "true"), Promise.resolve([t, I0({
        content: t.innerHTML,
        width: u,
        height: l,
        transform: i,
        title: r,
        extra: s,
        watchable: !0
      })]);
    };
  }
};
const UU = new RegExp('"', "ug"), $0 = [1105920, 1112319], B0 = ke(ke(ke(ke({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), u6), T6), _6), Lh = Object.keys(B0).reduce((e, t) => (e[t.toLowerCase()] = B0[t], e), {}), jU = Object.keys(Lh).reduce((e, t) => {
  const n = Lh[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function zU(e) {
  const t = e.replace(UU, ""), n = K6(t, 0), r = n >= $0[0] && n <= $0[1], i = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: Ph(i ? t[0] : t),
    isSecondary: r || i
  };
}
function HU(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(t), i = isNaN(r) ? "normal" : r;
  return (Lh[n] || {})[i] || jU[n];
}
function W0(e, t) {
  const n = "".concat(P6).concat(t.replace(":", "-"));
  return new Promise((r, i) => {
    if (e.getAttribute(n) !== null)
      return r();
    const u = Hs(e.children).filter((v) => v.getAttribute(Ch) === t)[0], l = Bi.getComputedStyle(e, t), d = l.getPropertyValue("font-family"), p = d.match(R6), h = l.getPropertyValue("font-weight"), m = l.getPropertyValue("content");
    if (u && !p)
      return e.removeChild(u), r();
    if (p && m !== "none" && m !== "") {
      const v = l.getPropertyValue("content");
      let y = HU(d, h);
      const {
        value: b,
        isSecondary: _
      } = zU(v), E = p[0].startsWith("FontAwesome");
      let R = Zm(y, b), F = R;
      if (E) {
        const C = tU(b);
        C.iconName && C.prefix && (R = C.iconName, y = C.prefix);
      }
      if (R && !_ && (!u || u.getAttribute(Hm) !== y || u.getAttribute(Ym) !== F)) {
        e.setAttribute(n, F), u && e.removeChild(u);
        const C = IU(), {
          extra: I
        } = C;
        I.attributes[Ch] = t, Rh(R, y).then((O) => {
          const S = Xm(ke(ke({}, C), {}, {
            icons: {
              main: O,
              mask: NE()
            },
            prefix: y,
            iconName: F,
            extra: I,
            watchable: !0
          })), x = nn.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(x, e.firstChild) : e.appendChild(x), x.outerHTML = S.map((P) => xc(P)).join(`
`), e.removeAttribute(n), r();
        }).catch(i);
      } else
        r();
    } else
      r();
  });
}
function YU(e) {
  return Promise.all([W0(e, "::before"), W0(e, "::after")]);
}
function qU(e) {
  return e.parentNode !== document.head && !~N6.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(Ch) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function U0(e) {
  if (ii)
    return new Promise((t, n) => {
      const r = Hs(e.querySelectorAll("*")).filter(qU).map(YU), i = Qm.begin("searchPseudoElements");
      DE(), Promise.all(r).then(() => {
        i(), Dh(), t();
      }).catch(() => {
        i(), Dh(), n();
      });
    });
}
var VU = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = U0, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: n = nn
      } = t;
      Ve.searchPseudoElements && U0(n);
    };
  }
};
let j0 = !1;
var GU = {
  mixout() {
    return {
      dom: {
        unwatch() {
          DE(), j0 = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        D0(Nh("mutationObserverCallbacks", {}));
      },
      noAuto() {
        TU();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        j0 ? Dh() : D0(Nh("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const z0 = (e) => {
  let t = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return e.toLowerCase().split(" ").reduce((n, r) => {
    const i = r.toLowerCase().split("-"), s = i[0];
    let u = i.slice(1).join("-");
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
var KU = {
  mixout() {
    return {
      parse: {
        transform: (e) => z0(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-transform");
        return n && (e.transform = z0(n)), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractTransformGrouping = function(t) {
      let {
        main: n,
        transform: r,
        containerWidth: i,
        iconWidth: s
      } = t;
      const u = {
        transform: "translate(".concat(i / 2, " 256)")
      }, l = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "), d = "scale(".concat(r.size / 16 * (r.flipX ? -1 : 1), ", ").concat(r.size / 16 * (r.flipY ? -1 : 1), ") "), p = "rotate(".concat(r.rotate, " 0 0)"), h = {
        transform: "".concat(l, " ").concat(d, " ").concat(p)
      }, m = {
        transform: "translate(".concat(s / 2 * -1, " -256)")
      }, v = {
        outer: u,
        inner: h,
        path: m
      };
      return {
        tag: "g",
        attributes: ke({}, v.outer),
        children: [{
          tag: "g",
          attributes: ke({}, v.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: ke(ke({}, n.icon.attributes), v.path)
          }]
        }]
      };
    };
  }
};
const Ip = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function H0(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function ZU(e) {
  return e.tag === "g" ? e.children : [e];
}
var XU = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-mask"), r = n ? Wd(n.split(" ").map((i) => i.trim())) : NE();
        return r.prefix || (r.prefix = Wi()), e.mask = r, e.maskId = t.getAttribute("data-fa-mask-id"), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractMask = function(t) {
      let {
        children: n,
        attributes: r,
        main: i,
        mask: s,
        maskId: u,
        transform: l
      } = t;
      const {
        width: d,
        icon: p
      } = i, {
        width: h,
        icon: m
      } = s, v = z6({
        transform: l,
        containerWidth: h,
        iconWidth: d
      }), y = {
        tag: "rect",
        attributes: ke(ke({}, Ip), {}, {
          fill: "white"
        })
      }, b = p.children ? {
        children: p.children.map(H0)
      } : {}, _ = {
        tag: "g",
        attributes: ke({}, v.inner),
        children: [H0(ke({
          tag: p.tag,
          attributes: ke(ke({}, p.attributes), v.path)
        }, b))]
      }, E = {
        tag: "g",
        attributes: ke({}, v.outer),
        children: [_]
      }, R = "mask-".concat(u || oc()), F = "clip-".concat(u || oc()), C = {
        tag: "mask",
        attributes: ke(ke({}, Ip), {}, {
          id: R,
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
          children: ZU(m)
        }, C]
      };
      return n.push(I, {
        tag: "rect",
        attributes: ke({
          fill: "currentColor",
          "clip-path": "url(#".concat(F, ")"),
          mask: "url(#".concat(R, ")")
        }, Ip)
      }), {
        children: n,
        attributes: r
      };
    };
  }
}, QU = {
  provides(e) {
    let t = !1;
    Bi.matchMedia && (t = Bi.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      const n = [], r = {
        fill: "currentColor"
      }, i = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      n.push({
        tag: "path",
        attributes: ke(ke({}, r), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      const s = ke(ke({}, i), {}, {
        attributeName: "opacity"
      }), u = {
        tag: "circle",
        attributes: ke(ke({}, r), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return t || u.children.push({
        tag: "animate",
        attributes: ke(ke({}, i), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: ke(ke({}, s), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), n.push(u), n.push({
        tag: "path",
        attributes: ke(ke({}, r), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: t ? [] : [{
          tag: "animate",
          attributes: ke(ke({}, s), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), t || n.push({
        tag: "path",
        attributes: ke(ke({}, r), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: ke(ke({}, s), {}, {
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
}, JU = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), r = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = r, e;
      }
    };
  }
}, ej = [q6, FU, $U, BU, WU, VU, GU, KU, XU, QU, JU];
uU(ej, {
  mixoutsTo: xr
});
xr.noAuto;
xr.config;
xr.library;
xr.dom;
const Fh = xr.parse;
xr.findIconDefinition;
xr.toHtml;
const tj = xr.icon;
xr.layer;
xr.text;
xr.counter;
function $h(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function nj(e) {
  if (Array.isArray(e)) return e;
}
function rj(e) {
  if (Array.isArray(e)) return $h(e);
}
function _i(e, t, n) {
  return (t = dj(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function aj(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function ij(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, i, s, u, l = [], d = !0, p = !1;
    try {
      if (s = (n = n.call(e)).next, t !== 0) for (; !(d = (r = s.call(n)).done) && (l.push(r.value), l.length !== t); d = !0) ;
    } catch (h) {
      p = !0, i = h;
    } finally {
      try {
        if (!d && n.return != null && (u = n.return(), Object(u) !== u)) return;
      } finally {
        if (p) throw i;
      }
    }
    return l;
  }
}
function oj() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function sj() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Y0(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function pa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Y0(Object(n), !0).forEach(function(r) {
      _i(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Y0(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function lj(e, t) {
  if (e == null) return {};
  var n, r, i = cj(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  }
  return i;
}
function cj(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function q0(e, t) {
  return nj(e) || ij(e, t) || FE(e, t) || oj();
}
function Bh(e) {
  return rj(e) || aj(e) || FE(e) || sj();
}
function uj(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function dj(e) {
  var t = uj(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function nd(e) {
  "@babel/helpers - typeof";
  return nd = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, nd(e);
}
function FE(e, t) {
  if (e) {
    if (typeof e == "string") return $h(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? $h(e, t) : void 0;
  }
}
var fj = "7.0.0", Wh;
try {
  var pj = require("@fortawesome/fontawesome-svg-core/package.json");
  Wh = pj.version;
} catch {
  Wh = typeof process < "u" && process.env.FA_VERSION || "7.0.0";
}
function hj(e) {
  var t = e.beat, n = e.fade, r = e.beatFade, i = e.bounce, s = e.shake, u = e.flash, l = e.spin, d = e.spinPulse, p = e.spinReverse, h = e.pulse, m = e.fixedWidth, v = e.inverse, y = e.border, b = e.listItem, _ = e.flip, E = e.size, R = e.rotation, F = e.pull, C = e.swapOpacity, I = e.rotateBy, O = e.widthAuto, S = mj(Wh, fj), x = _i(_i(_i(_i(_i(_i({
    "fa-beat": t,
    "fa-fade": n,
    "fa-beat-fade": r,
    "fa-bounce": i,
    "fa-shake": s,
    "fa-flash": u,
    "fa-spin": l,
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
  }, "fa-".concat(E), typeof E < "u" && E !== null), "fa-rotate-".concat(R), typeof R < "u" && R !== null && R !== 0), "fa-pull-".concat(F), typeof F < "u" && F !== null), "fa-swap-opacity", C), "fa-rotate-by", S && I), "fa-width-auto", S && O);
  return Object.keys(x).map(function(P) {
    return x[P] ? P : null;
  }).filter(function(P) {
    return P;
  });
}
function mj(e, t) {
  for (var n = e.split("-"), r = q0(n, 2), i = r[0], s = r[1], u = t.split("-"), l = q0(u, 2), d = l[0], p = l[1], h = i.split("."), m = d.split("."), v = 0; v < Math.max(h.length, m.length); v++) {
    var y = h[v] || "0", b = m[v] || "0", _ = parseInt(y, 10), E = parseInt(b, 10);
    if (_ !== E)
      return _ > E;
  }
  for (var R = 0; R < Math.max(h.length, m.length); R++) {
    var F = h[R] || "0", C = m[R] || "0";
    if (F !== C && F.length !== C.length)
      return F.length < C.length;
  }
  return !(s && !p);
}
function gj(e) {
  return e = e - 0, e === e;
}
function $E(e) {
  return gj(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var vj = ["style"];
function yj(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function bj(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), i = $E(n.slice(0, r)), s = n.slice(r + 1).trim();
    return i.startsWith("webkit") ? t[yj(i)] = s : t[i] = s, t;
  }, {});
}
function BE(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var r = (t.children || []).map(function(d) {
    return BE(e, d);
  }), i = Object.keys(t.attributes || {}).reduce(function(d, p) {
    var h = t.attributes[p];
    switch (p) {
      case "class":
        d.attrs.className = h, delete t.attributes.class;
        break;
      case "style":
        d.attrs.style = bj(h);
        break;
      default:
        p.indexOf("aria-") === 0 || p.indexOf("data-") === 0 ? d.attrs[p.toLowerCase()] = h : d.attrs[$E(p)] = h;
    }
    return d;
  }, {
    attrs: {}
  }), s = n.style, u = s === void 0 ? {} : s, l = lj(n, vj);
  return i.attrs.style = pa(pa({}, i.attrs.style), u), e.apply(void 0, [t.tag, pa(pa({}, i.attrs), l)].concat(Bh(r)));
}
var WE = !1;
try {
  WE = process.env.NODE_ENV === "production";
} catch {
}
function _j() {
  if (!WE && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function V0(e) {
  if (e && nd(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (Fh.icon)
    return Fh.icon(e);
  if (e === null)
    return null;
  if (e && nd(e) === "object" && e.prefix && e.iconName)
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
function Ap(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? _i({}, e, t) : {};
}
var G0 = {
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
}, rd = /* @__PURE__ */ J.forwardRef(function(e, t) {
  var n = pa(pa({}, G0), e), r = n.icon, i = n.mask, s = n.symbol, u = n.className, l = n.title, d = n.titleId, p = n.maskId, h = V0(r), m = Ap("classes", [].concat(Bh(hj(n)), Bh((u || "").split(" ")))), v = Ap("transform", typeof n.transform == "string" ? Fh.transform(n.transform) : n.transform), y = Ap("mask", V0(i)), b = tj(h, pa(pa(pa(pa({}, m), v), y), {}, {
    symbol: s,
    title: l,
    titleId: d,
    maskId: p
  }));
  if (!b)
    return _j("Could not find icon", h), null;
  var _ = b.abstract, E = {
    ref: t
  };
  return Object.keys(n).forEach(function(R) {
    G0.hasOwnProperty(R) || (E[R] = n[R]);
  }), wj(_[0], E);
});
rd.displayName = "FontAwesomeIcon";
rd.propTypes = {
  beat: c.bool,
  border: c.bool,
  beatFade: c.bool,
  bounce: c.bool,
  className: c.string,
  fade: c.bool,
  flash: c.bool,
  mask: c.oneOfType([c.object, c.array, c.string]),
  maskId: c.string,
  // the fixedWidth property has been deprecated as of version 7
  fixedWidth: c.bool,
  inverse: c.bool,
  flip: c.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: c.oneOfType([c.object, c.array, c.string]),
  listItem: c.bool,
  pull: c.oneOf(["right", "left"]),
  pulse: c.bool,
  rotation: c.oneOf([0, 90, 180, 270]),
  rotateBy: c.bool,
  shake: c.bool,
  size: c.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: c.bool,
  spinPulse: c.bool,
  spinReverse: c.bool,
  symbol: c.oneOfType([c.bool, c.string]),
  title: c.string,
  titleId: c.string,
  transform: c.oneOfType([c.string, c.object]),
  swapOpacity: c.bool,
  widthAuto: c.bool
};
var wj = BE.bind(null, J.createElement);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const Ej = {
  prefix: "fas",
  iconName: "rotate-left",
  icon: [512, 512, ["rotate-back", "rotate-backward", "undo-alt"], "f2ea", "M48.5 224L40 224c-13.3 0-24-10.7-24-24L16 72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8L48.5 224z"]
}, xj = {
  prefix: "fas",
  iconName: "rotate-right",
  icon: [512, 512, ["redo-alt", "rotate-forward"], "f2f9", "M463.5 224l8.5 0c13.3 0 24-10.7 24-24l0-128c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8l119.5 0z"]
}, UE = "carousel", eg = "controller", Cj = "navigation", Oj = "no-scroll", tg = "portal", Sj = "root", jE = "toolbar", Tj = "download", Uh = "fullscreen", K0 = "thumbnails", Z0 = "zoom", Lu = "loading", Pj = "playing", Rp = "error", Fu = "complete", kj = "placeholder", jd = (e) => `active-slide-${e}`, Nj = jd(Lu), Ij = jd(Pj), Aj = jd(Fu), zE = "fullsize", zd = "flex_center", Rj = "no_scroll", HE = "no_scroll_padding", ng = "slide", rg = "slide_wrapper", Mj = "slide_wrapper_interactive", lo = "prev", co = "next", X0 = "swipe", Rs = "close", YE = "onPointerDown", qE = "onPointerMove", VE = "onPointerUp", GE = "onPointerLeave", KE = "onPointerCancel", ag = "onKeyDown", Dj = "onKeyUp", ig = "onWheel", Lj = "Escape", Fj = "ArrowLeft", $j = "ArrowRight", Bj = "button", jh = "icon", ZE = "contain", Q0 = "cover", XE = "Unknown action type", QE = "yarl__";
function Fr(...e) {
  return e.filter(Boolean).join(" ");
}
function gt(e) {
  return `${QE}${e}`;
}
function tr(e) {
  return `--${QE}${e}`;
}
function Cc(e, t) {
  return `${e}${t ? `_${t}` : ""}`;
}
function og(e) {
  return (t) => Cc(e, t);
}
function Ms(e, t) {
  var n;
  return (n = e == null ? void 0 : e[t]) !== null && n !== void 0 ? n : t;
}
function Wj(e, t, n) {
  return Ms(e, "{index} of {total}").replace(/\{index}/g, `${ug(n, t.length) + 1}`).replace(/\{total}/g, `${t.length}`);
}
function Hd(...e) {
  return () => {
    e.forEach((t) => {
      t();
    });
  };
}
function aa(e, t, n) {
  return () => {
    const r = L.useContext(n);
    if (!r)
      throw new Error(`${e} must be used within a ${t}.Provider`);
    return r;
  };
}
function sg() {
  return typeof window < "u";
}
function lg(e, t = 0) {
  const n = 10 ** t;
  return Math.round((e + Number.EPSILON) * n) / n;
}
function ji(e) {
  return e.type === void 0 || e.type === "image";
}
function cg(e, t) {
  return e.imageFit === Q0 || e.imageFit !== ZE && t === Q0;
}
function Yd(e) {
  return typeof e == "string" ? Number.parseInt(e, 10) : e;
}
function ad(e) {
  if (typeof e == "number")
    return { pixel: e };
  if (typeof e == "string") {
    const t = Yd(e);
    return e.endsWith("%") ? { percent: t } : { pixel: t };
  }
  return { pixel: 0 };
}
function Uj(e, t) {
  const n = ad(t), r = n.percent !== void 0 ? e.width / 100 * n.percent : n.pixel;
  return {
    width: Math.max(e.width - 2 * r, 0),
    height: Math.max(e.height - 2 * r, 0)
  };
}
function jj() {
  return (sg() ? window == null ? void 0 : window.devicePixelRatio : void 0) || 1;
}
function ug(e, t) {
  return t > 0 ? (e % t + t) % t : 0;
}
function JE(e) {
  return e.length > 0;
}
function ex(e, t) {
  return e[ug(t, e.length)];
}
function zh(e, t) {
  return JE(e) ? ex(e, t) : void 0;
}
function zj(e) {
  return ji(e) ? e.src : void 0;
}
function dg(e, t, n) {
  if (!n)
    return e;
  const { buttons: r, ...i } = e, s = r.findIndex((l) => l === t), u = L.isValidElement(n) ? L.cloneElement(n, { key: t }, null) : n;
  if (s >= 0) {
    const l = [...r];
    return l.splice(s, 1, u), { buttons: l, ...i };
  }
  return { buttons: [u, ...r], ...i };
}
function Hj(e, t, n = 0) {
  return Math.min(e.preload, Math.max(e.finite ? t.length - 1 : Math.floor(t.length / 2), n));
}
const Yj = Number(L.version.split(".")[0]) >= 19;
function qj(e) {
  return { inert: Yj ? e : e ? "" : void 0 };
}
function tx(e) {
  e.scrollTop;
}
const Hh = {
  open: !1,
  close: () => {
  },
  index: 0,
  slides: [],
  render: {},
  plugins: [],
  toolbar: { buttons: [Rs] },
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
    imageFit: ZE,
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
function oi(e, t) {
  return { name: e, component: t };
}
function Sn(e, t) {
  return { module: e, children: t };
}
function nx(e, t, n) {
  return e.module.name === t ? n(e) : e.children ? [
    Sn(e.module, e.children.flatMap((r) => {
      var i;
      return (i = nx(r, t, n)) !== null && i !== void 0 ? i : [];
    }))
  ] : [e];
}
function Jo(e, t, n) {
  return e.flatMap((r) => {
    var i;
    return (i = nx(r, t, n)) !== null && i !== void 0 ? i : [];
  });
}
function Vj(e, t = [], n = []) {
  let r = e;
  const i = (y) => {
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
      r = [Sn(b, r)];
      return;
    }
    r = Jo(r, y, (_) => [Sn(b, [_])]);
  }, u = (y, b) => {
    r = Jo(r, y, (_) => [Sn(_.module, [Sn(b, _.children)])]);
  }, l = (y, b, _) => {
    r = Jo(r, y, (E) => {
      var R;
      return [
        Sn(E.module, [
          ..._ ? [Sn(b)] : [],
          ...(R = E.children) !== null && R !== void 0 ? R : [],
          ..._ ? [] : [Sn(b)]
        ])
      ];
    });
  }, d = (y, b, _) => {
    r = Jo(r, y, (E) => [
      ..._ ? [Sn(b)] : [],
      E,
      ..._ ? [] : [Sn(b)]
    ]);
  }, p = (y) => {
    u(eg, y);
  }, h = (y, b) => {
    r = Jo(r, y, (_) => [Sn(b, _.children)]);
  }, m = (y) => {
    r = Jo(r, y, (b) => b.children);
  }, v = (y) => {
    n.push(y);
  };
  return t.forEach((y) => {
    y({
      contains: i,
      addParent: s,
      append: u,
      addChild: l,
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
const rx = L.createContext(null), ax = aa("useA11yContext", "A11yContext", rx);
function Gj({ children: e }) {
  const [t, n] = L.useState(!1), [r, i] = L.useState(!1), s = L.useMemo(() => ({ focusWithin: t, trackFocusWithin: (l, d) => {
    const p = (h) => (m) => {
      var v;
      m.currentTarget.contains(m.relatedTarget) || n(h), (v = h ? l : d) === null || v === void 0 || v(m);
    };
    return {
      onFocus: p(!0),
      onBlur: p(!1)
    };
  }, autoPlaying: r, setAutoPlaying: i }), [t, r]);
  return L.createElement(rx.Provider, { value: s }, e);
}
const ix = L.createContext(null), Ys = aa("useDocument", "DocumentContext", ix);
function Kj({ nodeRef: e, children: t }) {
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
  return L.createElement(ix.Provider, { value: n }, t);
}
const ox = L.createContext(null), Oc = aa("useEvents", "EventsContext", ox);
function Zj({ children: e }) {
  const [t] = L.useState({});
  L.useEffect(() => () => {
    Object.keys(t).forEach((r) => delete t[r]);
  }, [t]);
  const n = L.useMemo(() => {
    const r = (u, l) => {
      var d;
      (d = t[u]) === null || d === void 0 || d.splice(0, t[u].length, ...t[u].filter((p) => p !== l));
    };
    return { publish: (...[u, l]) => {
      var d;
      (d = t[u]) === null || d === void 0 || d.forEach((p) => p(l));
    }, subscribe: (u, l) => (t[u] || (t[u] = []), t[u].push(l), () => r(u, l)), unsubscribe: r };
  }, [t]);
  return L.createElement(ox.Provider, { value: n }, e);
}
const sx = L.createContext(null), $n = aa("useLightboxProps", "LightboxPropsContext", sx);
function Xj({ children: e, ...t }) {
  return L.createElement(sx.Provider, { value: t }, e);
}
const lx = L.createContext(null), si = aa("useLightboxState", "LightboxStateContext", lx), cx = L.createContext(null), Qj = aa("useLightboxDispatch", "LightboxDispatchContext", cx);
function Jj(e, t) {
  switch (t.type) {
    case "swipe": {
      const { slides: n } = e, r = (t == null ? void 0 : t.increment) || 0, i = e.globalIndex + r, s = ug(i, n.length), u = zh(n, s), l = r || t.duration !== void 0 ? {
        increment: r,
        duration: t.duration,
        easing: t.easing
      } : void 0;
      return { slides: n, currentIndex: s, globalIndex: i, currentSlide: u, animation: l };
    }
    case "update":
      return t.slides !== e.slides || t.index !== e.currentIndex ? {
        slides: t.slides,
        currentIndex: t.index,
        globalIndex: t.index,
        currentSlide: zh(t.slides, t.index)
      } : e;
    default:
      throw new Error(XE);
  }
}
function ez({ slides: e, index: t, children: n }) {
  const [r, i] = L.useReducer(Jj, {
    slides: e,
    currentIndex: t,
    globalIndex: t,
    currentSlide: zh(e, t)
  }), [s, u] = L.useState(e), [l, d] = L.useState(t);
  (e !== s || t !== l) && (u(e), d(t), i({ type: "update", slides: e, index: t }));
  const p = L.useMemo(() => ({ ...r, state: r, dispatch: i }), [r, i]);
  return L.createElement(
    cx.Provider,
    { value: i },
    L.createElement(lx.Provider, { value: p }, n)
  );
}
const ux = L.createContext(null), tz = aa("useRTLContext", "RTLContext", ux);
function nz({ isRTL: e, children: t }) {
  const n = L.useMemo(() => ({ isRTL: e }), [e]);
  return L.createElement(ux.Provider, { value: n }, t);
}
const dx = L.createContext(null), qd = aa("useTimeouts", "TimeoutsContext", dx);
function rz({ children: e }) {
  const [t] = L.useState([]);
  L.useEffect(() => () => {
    t.forEach((r) => window.clearTimeout(r)), t.splice(0, t.length);
  }, [t]);
  const n = L.useMemo(() => {
    const r = (u) => {
      t.splice(0, t.length, ...t.filter((l) => l !== u));
    };
    return { setTimeout: (u, l) => {
      const d = window.setTimeout(() => {
        r(d), u();
      }, l);
      return t.push(d), d;
    }, clearTimeout: (u) => {
      u !== void 0 && (r(u), window.clearTimeout(u));
    } };
  }, [t]);
  return L.createElement(dx.Provider, { value: n }, e);
}
const Sc = L.forwardRef(function({ label: t, className: n, icon: r, renderIcon: i, onClick: s, style: u, ...l }, d) {
  const { styles: p, labels: h } = $n(), m = Ms(h, t);
  return L.createElement("button", { ref: d, type: "button", title: m, "aria-label": m, className: Fr(gt(Bj), n), onClick: s, style: { ...u, ...p.button }, ...l }, i ? i() : L.createElement(r, { className: gt(jh), style: p.icon }));
});
function az(e, t) {
  const n = (r) => L.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", "aria-hidden": "true", focusable: "false", ...r }, t);
  return n.displayName = e, n;
}
function Pa(e, t) {
  return az(e, L.createElement(
    "g",
    { fill: "currentColor" },
    L.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
    t
  ));
}
const iz = Pa("Close", L.createElement("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })), oz = Pa("Previous", L.createElement("path", { d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" })), sz = Pa("Next", L.createElement("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" })), lz = Pa("Loading", L.createElement(L.Fragment, null, Array.from({ length: 8 }).map((e, t, n) => L.createElement("line", { key: t, x1: "12", y1: "6.5", x2: "12", y2: "1.8", strokeLinecap: "round", strokeWidth: "2.6", stroke: "currentColor", strokeOpacity: 1 / n.length * (t + 1), transform: `rotate(${360 / n.length * t}, 12, 12)` })))), cz = Pa("Error", L.createElement("path", { d: "M21.9,21.9l-8.49-8.49l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31L21.9,21.9z M5,18 l3.5-4.5l2.5,3.01L12.17,15l3,3H5z M21,18.17L5.83,3H19c1.1,0,2,0.9,2,2V18.17z" })), ta = sg() ? L.useLayoutEffect : L.useEffect;
function fg() {
  const [e, t] = L.useState(!1);
  return L.useEffect(() => {
    var n, r;
    const i = (n = window.matchMedia) === null || n === void 0 ? void 0 : n.call(window, "(prefers-reduced-motion: reduce)");
    t(i == null ? void 0 : i.matches);
    const s = (u) => t(u.matches);
    return (r = i == null ? void 0 : i.addEventListener) === null || r === void 0 || r.call(i, "change", s), () => {
      var u;
      return (u = i == null ? void 0 : i.removeEventListener) === null || u === void 0 ? void 0 : u.call(i, "change", s);
    };
  }, []), e;
}
function uz(e) {
  let t = 0, n = 0, r = 0;
  const s = window.getComputedStyle(e).transform.match(/matrix.*\((.+)\)/);
  if (s) {
    const u = s[1].split(",").map(Yd);
    u.length === 6 ? (t = u[4], n = u[5]) : u.length === 16 && (t = u[12], n = u[13], r = u[14]);
  }
  return { x: t, y: n, z: r };
}
function J0(e, t) {
  const n = L.useRef(void 0), r = L.useRef(void 0), i = fg();
  return ta(() => {
    var s, u, l;
    if (e.current && n.current !== void 0 && !i) {
      const { keyframes: d, duration: p, easing: h, onfinish: m } = t(n.current, e.current.getBoundingClientRect(), uz(e.current)) || {};
      if (d && p) {
        (s = r.current) === null || s === void 0 || s.cancel(), r.current = void 0;
        try {
          r.current = (l = (u = e.current).animate) === null || l === void 0 ? void 0 : l.call(u, d, { duration: p, easing: h });
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
function pg() {
  const e = L.useRef(null), t = L.useRef(void 0), [n, r] = L.useState();
  return { setContainerRef: L.useCallback((s) => {
    e.current = s, t.current && (t.current.disconnect(), t.current = void 0);
    const u = () => {
      if (s) {
        const l = window.getComputedStyle(s), d = (p) => parseFloat(p) || 0;
        r({
          width: Math.round(s.clientWidth - d(l.paddingLeft) - d(l.paddingRight)),
          height: Math.round(s.clientHeight - d(l.paddingTop) - d(l.paddingBottom))
        });
      } else
        r(void 0);
    };
    u(), s && typeof ResizeObserver < "u" && (t.current = new ResizeObserver(u), t.current.observe(s));
  }, []), containerRef: e, containerRect: n };
}
function $u() {
  const e = L.useRef(void 0), { setTimeout: t, clearTimeout: n } = qd();
  return L.useCallback((r, i) => {
    n(e.current), e.current = t(r, i > 0 ? i : 0);
  }, [t, n]);
}
function Tt(e) {
  const t = L.useRef(e);
  return ta(() => {
    t.current = e;
  }), L.useCallback((...n) => {
    var r;
    return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
  }, []);
}
function e1(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function Yh(e, t) {
  return L.useMemo(() => e == null && t == null ? null : (n) => {
    e1(e, n), e1(t, n);
  }, [e, t]);
}
function dz(e, t = !1) {
  const n = L.useRef(!1);
  ta(() => {
    t && n.current && (n.current = !1, e());
  }, [t, e]);
  const r = L.useCallback(() => {
    n.current = !0;
  }, []), i = L.useCallback(() => {
    n.current = !1;
  }, []);
  return { onFocus: r, onBlur: i };
}
function hg() {
  return tz().isRTL;
}
function fz() {
  const [e] = L.useState({}), t = L.useCallback((i, s) => {
    var u;
    (u = e[i]) === null || u === void 0 || u.forEach((l) => {
      s.isPropagationStopped() || l(s);
    });
  }, [e]), n = L.useMemo(() => ({
    onPointerDown: (i) => t(YE, i),
    onPointerMove: (i) => t(qE, i),
    onPointerUp: (i) => t(VE, i),
    onPointerLeave: (i) => t(GE, i),
    onPointerCancel: (i) => t(KE, i),
    onKeyDown: (i) => t(ag, i),
    onKeyUp: (i) => t(Dj, i),
    onWheel: (i) => t(ig, i)
  }), [t]), r = L.useCallback((i, s) => (e[i] || (e[i] = []), e[i].unshift(s), () => {
    const u = e[i];
    u && u.splice(0, u.length, ...u.filter((l) => l !== s));
  }), [e]);
  return { registerSensors: n, subscribeSensors: r };
}
function t1(e, t) {
  const n = L.useRef(0), r = $u(), i = Tt((...s) => {
    n.current = Date.now(), e(...s);
  });
  return L.useCallback((...s) => {
    r(() => {
      i(...s);
    }, t - (Date.now() - n.current));
  }, [t, i, r]);
}
const Mp = og("slide"), Dp = og("slide_image");
function id({ slide: e, offset: t, render: n, rect: r, imageFit: i, imageProps: s, onClick: u, onLoad: l, onError: d, style: p }) {
  var h, m, v, y, b, _, E, R;
  const [F, C] = L.useState(Lu), { publish: I } = Oc(), { setTimeout: O } = qd(), S = L.useRef(null);
  L.useEffect(() => {
    t === 0 && I(jd(F));
  }, [t, F, I]);
  const x = Tt((se) => {
    ("decode" in se ? se.decode() : Promise.resolve()).catch(() => {
    }).then(() => {
      se.parentNode && (C(Fu), O(() => {
        l == null || l(se);
      }, 0));
    });
  }), P = L.useCallback((se) => {
    S.current = se, se != null && se.complete && x(se);
  }, [x]), k = L.useCallback((se) => {
    x(se.currentTarget);
  }, [x]), B = Tt(() => {
    C(Rp), d == null || d();
  }), Y = cg(e, i), ne = (se, Ce) => Number.isFinite(se) ? se : Ce, z = ne(Math.max(...((m = (h = e.srcSet) === null || h === void 0 ? void 0 : h.map((se) => se.width)) !== null && m !== void 0 ? m : []).concat(e.width ? [e.width] : []).filter(Boolean)), ((v = S.current) === null || v === void 0 ? void 0 : v.naturalWidth) || 0), re = ne(Math.max(...((b = (y = e.srcSet) === null || y === void 0 ? void 0 : y.map((se) => se.height)) !== null && b !== void 0 ? b : []).concat(e.height ? [e.height] : []).filter(Boolean)), ((_ = S.current) === null || _ === void 0 ? void 0 : _.naturalHeight) || 0), pe = z && re ? {
    maxWidth: `min(${z}px, 100%)`,
    maxHeight: `min(${re}px, 100%)`
  } : {
    maxWidth: "100%",
    maxHeight: "100%"
  }, ve = (E = e.srcSet) === null || E === void 0 ? void 0 : E.slice().sort((se, Ce) => se.width - Ce.width).map((se) => `${se.src} ${se.width}w`).join(", "), Oe = () => r && !Y && e.width && e.height ? r.height / e.height * e.width : Number.MAX_VALUE, he = ve && r && sg() ? `${Math.round(Math.min(Oe(), r.width))}px` : void 0, { style: be, className: ee, ...ie } = (typeof s == "function" ? s(e) : s) || {};
  return L.createElement(
    L.Fragment,
    null,
    L.createElement("img", { ref: P, onLoad: k, onError: B, onClick: u, draggable: !1, className: Fr(gt(Dp()), Y && gt(Dp("cover")), F !== Fu && gt(Dp("loading")), ee), style: { ...pe, ...p, ...be }, ...ie, alt: (R = e.alt) !== null && R !== void 0 ? R : "", sizes: he, srcSet: ve, src: e.src }),
    F !== Fu && L.createElement(
      "div",
      { className: gt(Mp(kj)) },
      F === Lu && (n != null && n.iconLoading ? n.iconLoading() : L.createElement(lz, { className: Fr(gt(jh), gt(Mp(Lu))) })),
      F === Rp && (n != null && n.iconError ? n.iconError() : L.createElement(cz, { className: Fr(gt(jh), gt(Mp(Rp))) }))
    )
  );
}
const pz = L.forwardRef(function({ className: t, children: n, onFocus: r, onBlur: i, ...s }, u) {
  const l = L.useRef(null), [d, p] = L.useState(!1), { trackFocusWithin: h } = ax(), m = Tt(() => {
    if (l.current) {
      const v = window.getComputedStyle(l.current).direction === "rtl";
      v !== d && p(v);
    }
  });
  return L.useEffect(m), L.createElement(
    Kj,
    { nodeRef: l },
    L.createElement(
      nz,
      { isRTL: d },
      L.createElement("div", { ref: Yh(u, l), className: Fr(gt("root"), t), ...h(r, i), ...s }, n)
    )
  );
});
var Mn;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.SWIPE = 1] = "SWIPE", e[e.PULL = 2] = "PULL", e[e.ANIMATION = 3] = "ANIMATION";
})(Mn || (Mn = {}));
function fx(e, t, n, r, i) {
  L.useEffect(() => i ? () => {
  } : Hd(e(YE, t), e(qE, n), e(VE, r), e(GE, r), e(KE, r)), [e, t, n, r, i]);
}
var Kr;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.SWIPE = 1] = "SWIPE", e[e.PULL = 2] = "PULL";
})(Kr || (Kr = {}));
const Lp = 30;
function hz({ disableSwipeNavigation: e, closeOnBackdropClick: t }, n, r, i, s, u, l, d, p, h, m, v, y, b, _, E) {
  const R = L.useRef(0), F = L.useRef([]), C = L.useRef(void 0), I = L.useRef(0), O = L.useRef(Kr.NONE), S = L.useCallback((z) => {
    C.current === z.pointerId && (C.current = void 0, O.current = Kr.NONE);
    const re = F.current;
    re.splice(0, re.length, ...re.filter((pe) => pe.pointerId !== z.pointerId));
  }, []), x = L.useCallback((z) => {
    S(z), z.persist(), F.current.push(z);
  }, [S]), P = L.useCallback((z) => F.current.find(({ pointerId: re }) => z.pointerId === re), []), k = Tt((z) => {
    x(z);
  }), B = (z, re) => m && z > re || h && z < -re, Y = Tt((z) => {
    const re = P(z);
    if (re)
      if (C.current === z.pointerId) {
        const pe = Date.now() - I.current, ve = R.current;
        O.current === Kr.SWIPE ? Math.abs(ve) > 0.3 * i || Math.abs(ve) > 5 && pe < s ? d(ve, pe) : p(ve) : O.current === Kr.PULL && (B(ve, 2 * Lp) ? b(ve, pe) : _(ve)), R.current = 0, O.current = Kr.NONE;
      } else {
        const { target: pe } = z;
        t && pe instanceof HTMLElement && pe === re.target && (pe.classList.contains(gt(ng)) || pe.classList.contains(gt(rg))) && E();
      }
    S(z);
  }), ne = Tt((z) => {
    const re = P(z);
    if (re) {
      const pe = C.current === z.pointerId;
      if (z.buttons === 0) {
        pe && R.current !== 0 ? Y(z) : S(re);
        return;
      }
      const ve = z.clientX - re.clientX, Oe = z.clientY - re.clientY;
      if (C.current === void 0) {
        const he = (be) => {
          x(z), C.current = z.pointerId, I.current = Date.now(), O.current = be;
        };
        Math.abs(ve) > Math.abs(Oe) && Math.abs(ve) > Lp && r(ve) ? e || (he(Kr.SWIPE), u()) : Math.abs(Oe) > Math.abs(ve) && B(Oe, Lp) && (he(Kr.PULL), v());
      } else pe && (O.current === Kr.SWIPE ? (R.current = ve, l(ve)) : O.current === Kr.PULL && (R.current = Oe, y(Oe)));
    }
  });
  fx(n, k, ne, Y);
}
function mz({ preventDefaultWheelX: e, preventDefaultWheelY: t }) {
  const n = L.useRef(null), r = Tt((i) => {
    const s = Math.abs(i.deltaX) > Math.abs(i.deltaY);
    (s && e || !s && t || i.ctrlKey) && i.preventDefault();
  });
  return L.useCallback((i) => {
    var s;
    i ? i.addEventListener("wheel", r, { passive: !1 }) : (s = n.current) === null || s === void 0 || s.removeEventListener("wheel", r), n.current = i;
  }, [r]);
}
function gz(e, t, n, r, i, s, u, l, d) {
  const p = L.useRef(0), h = L.useRef(0), m = L.useRef(void 0), v = L.useRef(void 0), y = L.useRef(0), b = L.useRef(void 0), _ = L.useRef(0), { setTimeout: E, clearTimeout: R } = qd(), F = L.useCallback(() => {
    m.current && (R(m.current), m.current = void 0);
  }, [R]), C = L.useCallback(() => {
    v.current && (R(v.current), v.current = void 0);
  }, [R]), I = Tt(() => {
    e !== Mn.SWIPE && (p.current = 0, _.current = 0, F(), C());
  });
  L.useEffect(I, [e, I]);
  const O = Tt((x) => {
    v.current = void 0, p.current === x && d(p.current);
  }), S = Tt((x) => {
    if (x.ctrlKey || Math.abs(x.deltaY) > Math.abs(x.deltaX))
      return;
    const P = (k) => {
      y.current = k, R(b.current), b.current = k > 0 ? E(() => {
        y.current = 0, b.current = void 0;
      }, 300) : void 0;
    };
    if (e === Mn.NONE) {
      if (Math.abs(x.deltaX) <= 1.2 * Math.abs(y.current)) {
        P(x.deltaX);
        return;
      }
      if (!n(-x.deltaX))
        return;
      if (h.current += x.deltaX, F(), Math.abs(h.current) > 30)
        h.current = 0, P(0), _.current = Date.now(), s();
      else {
        const k = h.current;
        m.current = E(() => {
          m.current = void 0, k === h.current && (h.current = 0);
        }, i);
      }
    } else if (e === Mn.SWIPE) {
      let k = p.current - x.deltaX;
      if (k = Math.min(Math.abs(k), r) * Math.sign(k), p.current = k, u(k), C(), Math.abs(k) > 0.2 * r) {
        P(x.deltaX), l(k, Date.now() - _.current);
        return;
      }
      v.current = E(() => O(k), 2 * i);
    } else
      P(x.deltaX);
  });
  L.useEffect(() => t(ig, S), [t, S]);
}
const n1 = og("container"), px = L.createContext(null), li = aa("useController", "ControllerContext", px);
function vz({ children: e, ...t }) {
  var n;
  const { carousel: r, animation: i, controller: s, on: u, styles: l, render: d } = t, { closeOnPullUp: p, closeOnPullDown: h, preventDefaultWheelX: m, preventDefaultWheelY: v } = s, [y, b] = L.useState(), _ = si(), E = Qj(), [R, F] = L.useState(Mn.NONE), C = L.useRef(0), I = L.useRef(0), O = L.useRef(1), { registerSensors: S, subscribeSensors: x } = fz(), { subscribe: P, publish: k } = Oc(), B = $u(), Y = $u(), ne = $u(), { containerRef: z, setContainerRef: re, containerRect: pe } = pg(), ve = Yh(mz({ preventDefaultWheelX: m, preventDefaultWheelY: v }), re), Oe = L.useRef(null), he = Yh(Oe, void 0), { getOwnerDocument: be } = Ys(), ee = hg(), ie = (ae) => (ee ? -1 : 1) * (typeof ae == "number" ? ae : 1), se = Tt(() => {
    var ae;
    return (ae = z.current) === null || ae === void 0 ? void 0 : ae.focus();
  }), Ce = Tt(() => t), Se = Tt(() => _), Te = L.useCallback((ae) => k(lo, ae), [k]), ge = L.useCallback((ae) => k(co, ae), [k]), Pe = L.useCallback(() => k(Rs), [k]), Me = (ae) => !(r.finite && (ie(ae) > 0 && _.currentIndex === 0 || ie(ae) < 0 && _.currentIndex === _.slides.length - 1)), U = (ae) => {
    var Ee;
    C.current = ae, (Ee = z.current) === null || Ee === void 0 || Ee.style.setProperty(tr("swipe_offset"), `${Math.round(ae)}px`);
  }, j = (ae) => {
    var Ee, Le;
    I.current = ae, O.current = (() => {
      const qe = h && ae > 0 ? ae : p && ae < 0 ? -ae : 0;
      return Math.min(Math.max(lg(1 - qe / 60 * (1 - 0.5), 2), 0.5), 1);
    })(), (Ee = z.current) === null || Ee === void 0 || Ee.style.setProperty(tr("pull_offset"), `${Math.round(ae)}px`), (Le = z.current) === null || Le === void 0 || Le.style.setProperty(tr("pull_opacity"), `${O.current}`);
  }, { prepareAnimation: $ } = J0(Oe, (ae, Ee, Le) => {
    if (Oe.current && pe)
      return {
        keyframes: [
          {
            transform: `translate(0, ${ae.rect.y - Ee.y + Le.y}px)`,
            opacity: ae.opacity
          },
          { transform: "translate(0, 0)", opacity: 1 }
        ],
        duration: ae.duration,
        easing: i.easing.fade
      };
  }), D = (ae, Ee) => {
    if (p || h) {
      j(ae);
      let Le = 0;
      Oe.current && (Le = i.fade * (Ee ? 2 : 1), $({
        rect: Oe.current.getBoundingClientRect(),
        opacity: O.current,
        duration: Le
      })), ne(() => {
        j(0), F(Mn.NONE);
      }, Le), F(Mn.ANIMATION), Ee || Pe();
    }
  }, { prepareAnimation: G, isAnimationPlaying: Z } = J0(Oe, (ae, Ee, Le) => {
    var Fe;
    if (Oe.current && pe && (!((Fe = _.animation) === null || Fe === void 0) && Fe.duration)) {
      const ot = ad(r.spacing), qe = (ot.percent ? ot.percent * pe.width / 100 : ot.pixel) || 0;
      return {
        keyframes: [
          {
            transform: `translate(${ie(_.globalIndex - ae.index) * (pe.width + qe) + ae.rect.x - Ee.x + Le.x}px, 0)`
          },
          { transform: "translate(0, 0)" }
        ],
        duration: _.animation.duration,
        easing: _.animation.easing
      };
    }
  }), le = Tt((ae) => {
    var Ee, Le;
    const Fe = ae.offset || 0, ot = Fe ? i.swipe : (Ee = i.navigation) !== null && Ee !== void 0 ? Ee : i.swipe, qe = !Fe && !Z() ? i.easing.navigation : i.easing.swipe;
    let { direction: Et } = ae;
    const nt = (Le = ae.count) !== null && Le !== void 0 ? Le : 1;
    let Ge = Mn.ANIMATION, Ze = ot * nt;
    if (!Et) {
      const ye = pe == null ? void 0 : pe.width, Nt = ae.duration || 0, It = ye ? ot / ye * Math.abs(Fe) : ot;
      nt !== 0 ? (Nt < It ? Ze = Ze / It * Math.max(Nt, It / 5) : ye && (Ze = ot / ye * (ye - Math.abs(Fe))), Et = ie(Fe) > 0 ? lo : co) : Ze = ot / 2;
    }
    let kt = 0;
    Et === lo ? Me(ie(1)) ? kt = -nt : (Ge = Mn.NONE, Ze = ot) : Et === co && (Me(ie(-1)) ? kt = nt : (Ge = Mn.NONE, Ze = ot)), Ze = Math.round(Ze), Y(() => {
      U(0), F(Mn.NONE);
    }, Ze), Oe.current && G({
      rect: Oe.current.getBoundingClientRect(),
      index: _.globalIndex
    }), F(Ge), k(X0, {
      type: "swipe",
      increment: kt,
      duration: Ze,
      easing: qe
    });
  });
  L.useEffect(() => {
    var ae, Ee;
    !((ae = _.animation) === null || ae === void 0) && ae.increment && (!((Ee = _.animation) === null || Ee === void 0) && Ee.duration) && B(() => E({ type: "swipe", increment: 0 }), _.animation.duration);
  }, [_.animation, E, B]);
  const fe = [
    x,
    Me,
    (pe == null ? void 0 : pe.width) || 0,
    i.swipe,
    () => F(Mn.SWIPE),
    (ae) => U(ae),
    (ae, Ee) => le({ offset: ae, duration: Ee, count: 1 }),
    (ae) => le({ offset: ae, count: 0 })
  ], Q = [
    () => {
      h && F(Mn.PULL);
    },
    (ae) => j(ae),
    (ae) => D(ae),
    (ae) => D(ae, !0)
  ];
  hz(s, ...fe, p, h, ...Q, Pe), gz(R, ...fe);
  const ue = Tt(() => {
    s.focus && be().querySelector(`.${gt(tg)} .${gt(n1())}`) && se();
  });
  L.useEffect(ue, [ue]);
  const te = Tt(() => {
    var ae;
    (ae = u.view) === null || ae === void 0 || ae.call(u, { index: _.currentIndex });
  });
  L.useEffect(te, [_.globalIndex, te]), L.useEffect(() => Hd(P(lo, (ae) => le({ direction: lo, ...ae })), P(co, (ae) => le({ direction: co, ...ae })), P(X0, (ae) => E(ae))), [P, le, E]);
  const V = L.useMemo(() => ({
    prev: Te,
    next: ge,
    close: Pe,
    focus: se,
    slideRect: pe ? Uj(pe, r.padding) : { width: 0, height: 0 },
    containerRect: pe || { width: 0, height: 0 },
    subscribeSensors: x,
    containerRef: z,
    setCarouselRef: he,
    toolbarWidth: y,
    setToolbarWidth: b
  }), [
    Te,
    ge,
    Pe,
    se,
    x,
    pe,
    z,
    he,
    y,
    b,
    r.padding
  ]);
  return L.useImperativeHandle(s.ref, () => ({
    prev: Te,
    next: ge,
    close: Pe,
    focus: se,
    getLightboxProps: Ce,
    getLightboxState: Se
  }), [Te, ge, Pe, se, Ce, Se]), L.createElement("div", { ref: ve, className: Fr(gt(n1()), gt(zd)), style: {
    ...R === Mn.SWIPE ? { [tr("swipe_offset")]: `${Math.round(C.current)}px` } : null,
    ...R === Mn.PULL ? {
      [tr("pull_offset")]: `${Math.round(I.current)}px`,
      [tr("pull_opacity")]: `${O.current}`
    } : null,
    ...s.touchAction !== "none" ? { [tr("controller_touch_action")]: s.touchAction } : null,
    ...l.container
  }, tabIndex: -1, ...S }, pe && L.createElement(
    px.Provider,
    { value: V },
    e,
    (n = d.controls) === null || n === void 0 ? void 0 : n.call(d)
  ));
}
const yz = oi(eg, vz);
function io(e) {
  return Cc(UE, e);
}
function r1(e) {
  return Cc(ng, e);
}
function bz({ slide: e, offset: t }) {
  const n = L.useRef(null), { currentIndex: r, slides: i } = si(), { slideRect: s, focus: u } = li(), { render: l, carousel: { imageFit: d, imageProps: p }, on: { click: h }, styles: { slide: m }, labels: v } = $n(), { getOwnerDocument: y } = Ys(), b = t !== 0;
  L.useEffect(() => {
    var E;
    b && (!((E = n.current) === null || E === void 0) && E.contains(y().activeElement)) && u();
  }, [b, u, y]);
  const _ = () => {
    var E, R, F, C;
    let I = (E = l.slide) === null || E === void 0 ? void 0 : E.call(l, { slide: e, offset: t, rect: s });
    return !I && ji(e) && (I = L.createElement(id, { slide: e, offset: t, render: l, rect: s, imageFit: d, imageProps: p, onClick: b ? void 0 : () => h == null ? void 0 : h({ index: r }) })), I ? L.createElement(
      L.Fragment,
      null,
      (R = l.slideHeader) === null || R === void 0 ? void 0 : R.call(l, { slide: e }),
      ((F = l.slideContainer) !== null && F !== void 0 ? F : ({ children: O }) => O)({ slide: e, children: I }),
      (C = l.slideFooter) === null || C === void 0 ? void 0 : C.call(l, { slide: e })
    ) : null;
  };
  return L.createElement("div", { ref: n, className: Fr(gt(r1()), !b && gt(r1("current")), gt(zd)), ...qj(b), style: m, role: "group", "aria-roledescription": Ms(v, "Slide"), "aria-label": Wj(v, i, r + t) }, _());
}
function _z() {
  const e = $n().styles.slide;
  return L.createElement("div", { className: gt(ng), style: e });
}
function wz({ carousel: e, labels: t }) {
  const { slides: n, currentIndex: r, globalIndex: i } = si(), { setCarouselRef: s } = li(), { autoPlaying: u, focusWithin: l } = ax(), d = ad(e.spacing), p = ad(e.padding), h = Hj(e, n, 1), m = [];
  if (JE(n))
    for (let v = r - h; v <= r + h; v += 1) {
      const y = ex(n, v), b = i - r + v, _ = e.finite && (v < 0 || v > n.length - 1);
      m.push(_ ? { key: b } : {
        key: [`${b}`, zj(y)].filter(Boolean).join("|"),
        offset: v - r,
        slide: y
      });
    }
  return L.createElement("div", { ref: s, className: Fr(gt(io()), m.length > 0 && gt(io("with_slides"))), style: {
    [`${tr(io("slides_count"))}`]: m.length,
    [`${tr(io("spacing_px"))}`]: d.pixel || 0,
    [`${tr(io("spacing_percent"))}`]: d.percent || 0,
    [`${tr(io("padding_px"))}`]: p.pixel || 0,
    [`${tr(io("padding_percent"))}`]: p.percent || 0
  }, role: "region", "aria-live": u && !l ? "off" : "polite", "aria-roledescription": Ms(t, "Carousel"), "aria-label": Ms(t, "Photo gallery") }, m.map(({ key: v, slide: y, offset: b }) => y ? L.createElement(bz, { key: v, slide: y, offset: b }) : L.createElement(_z, { key: v })));
}
const Ez = oi(UE, wz);
function hx() {
  const { carousel: e } = $n(), { slides: t, currentIndex: n } = si(), r = t.length === 0 || e.finite && n === 0, i = t.length === 0 || e.finite && n === t.length - 1;
  return { prevDisabled: r, nextDisabled: i };
}
function xz(e) {
  var t;
  const n = hg(), { publish: r } = Oc(), { animation: i, controller: s } = $n(), { prevDisabled: u, nextDisabled: l } = hx(), d = ((t = i.navigation) !== null && t !== void 0 ? t : i.swipe) / 2, p = t1(() => r(lo), d), h = t1(() => r(co), d), m = Tt((v) => {
    switch (v.key) {
      case Lj:
        if (!s.closeOnEscape)
          return;
        r(Rs);
        break;
      case Fj:
        (n ? l : u) || (n ? h : p)();
        break;
      case $j:
        (n ? u : l) || (n ? p : h)();
        break;
      default:
        return;
    }
    v.stopPropagation();
  });
  L.useEffect(() => e(ag, m), [e, m]);
}
function a1({ label: e, icon: t, renderIcon: n, action: r, onClick: i, disabled: s, style: u }) {
  return L.createElement(Sc, { label: e, icon: t, renderIcon: n, className: gt(`navigation_${r}`), disabled: s, onClick: i, style: u, ...dz(li().focus, s) });
}
function Cz({ render: { buttonPrev: e, buttonNext: t, iconPrev: n, iconNext: r }, styles: i }) {
  const { prev: s, next: u, subscribeSensors: l } = li(), { prevDisabled: d, nextDisabled: p } = hx();
  return xz(l), L.createElement(
    L.Fragment,
    null,
    e ? e() : L.createElement(a1, { label: "Previous", action: lo, icon: oz, renderIcon: n, style: i.navigationPrev, disabled: d, onClick: s }),
    t ? t() : L.createElement(a1, { label: "Next", action: co, icon: sz, renderIcon: r, style: i.navigationNext, disabled: p, onClick: u })
  );
}
const Oz = oi(Cj, Cz), i1 = gt(Rj), Sz = gt(HE);
function Tz(e) {
  return "style" in e;
}
function o1(e, t, n) {
  const r = window.getComputedStyle(e), i = n ? "padding-left" : "padding-right", s = n ? r.paddingLeft : r.paddingRight, u = e.style.getPropertyValue(i);
  return e.style.setProperty(i, `${(Yd(s) || 0) + t}px`), () => {
    u ? e.style.setProperty(i, u) : e.style.removeProperty(i);
  };
}
function Pz({ noScroll: { disabled: e }, children: t }) {
  const n = hg(), { getOwnerDocument: r, getOwnerWindow: i } = Ys();
  return L.useEffect(() => {
    if (e)
      return () => {
      };
    const s = [], u = i(), { body: l, documentElement: d } = r(), p = Math.round(u.innerWidth - d.clientWidth);
    if (p > 0) {
      s.push(o1(l, p, n));
      const h = l.getElementsByTagName("*");
      for (let m = 0; m < h.length; m += 1) {
        const v = h[m];
        Tz(v) && u.getComputedStyle(v).getPropertyValue("position") === "fixed" && !v.classList.contains(Sz) && s.push(o1(v, p, n));
      }
    }
    return l.classList.add(i1), () => {
      l.classList.remove(i1), s.forEach((h) => h());
    };
  }, [n, e, r, i]), L.createElement(L.Fragment, null, t);
}
const kz = oi(Oj, Pz);
function s1(e) {
  return Cc(tg, e);
}
function l1(e, t, n) {
  const r = e.getAttribute(t);
  return e.setAttribute(t, n), () => {
    r ? e.setAttribute(t, r) : e.removeAttribute(t);
  };
}
function Nz({ portal: { root: e, container: { className: t, style: n, ...r } = {} }, animation: i, styles: s, className: u, on: l, close: d, labels: p, children: h }) {
  const [m, v] = L.useState(!1), [y, b] = L.useState(!1), _ = L.useRef([]), E = L.useRef(null), { setTimeout: R } = qd(), { subscribe: F } = Oc(), I = fg() ? 0 : i.fade;
  L.useEffect(() => (v(!0), () => {
    v(!1), b(!1);
  }), []);
  const O = Tt(() => {
    _.current.forEach((k) => k()), _.current = [];
  }), S = Tt(() => {
    var k;
    b(!1), O(), (k = l.exiting) === null || k === void 0 || k.call(l), R(() => {
      var B;
      (B = l.exited) === null || B === void 0 || B.call(l), d();
    }, I);
  });
  L.useEffect(() => F(Rs, S), [F, S]);
  const x = Tt((k) => {
    var B, Y, ne;
    tx(k), b(!0), (B = l.entering) === null || B === void 0 || B.call(l);
    const z = (ne = (Y = k.parentNode) === null || Y === void 0 ? void 0 : Y.children) !== null && ne !== void 0 ? ne : [];
    for (let re = 0; re < z.length; re += 1) {
      const pe = z[re];
      ["TEMPLATE", "SCRIPT", "STYLE"].indexOf(pe.tagName) === -1 && pe !== k && (_.current.push(l1(pe, "inert", "")), _.current.push(l1(pe, "aria-hidden", "true")));
    }
    _.current.push(() => {
      var re, pe;
      (pe = (re = E.current) === null || re === void 0 ? void 0 : re.focus) === null || pe === void 0 || pe.call(re);
    }), R(() => {
      var re;
      (re = l.entered) === null || re === void 0 || re.call(l);
    }, I);
  }), P = L.useCallback((k) => {
    k ? x(k) : O();
  }, [x, O]);
  return m ? D1(L.createElement(pz, { ref: P, className: Fr(u, t, gt(s1()), gt(HE), y && gt(s1("open"))), "aria-modal": !0, role: "dialog", "aria-label": Ms(p, "Lightbox"), style: {
    ...i.fade !== Hh.animation.fade ? { [tr("fade_animation_duration")]: `${I}ms` } : null,
    ...i.easing.fade !== Hh.animation.easing.fade ? { [tr("fade_animation_timing_function")]: i.easing.fade } : null,
    ...s.root,
    ...n
  }, onFocus: (k) => {
    E.current || (E.current = k.relatedTarget);
  }, ...r }, h), (typeof e == "function" ? e() : e) || document.body) : null;
}
const Iz = oi(tg, Nz);
function Az({ children: e }) {
  return L.createElement(L.Fragment, null, e);
}
const Rz = oi(Sj, Az);
function Mz(e) {
  return Cc(jE, e);
}
function Dz({ toolbar: { buttons: e }, render: { buttonClose: t, iconClose: n }, styles: r }) {
  const { close: i, setToolbarWidth: s } = li(), { setContainerRef: u, containerRect: l } = pg();
  ta(() => {
    s(l == null ? void 0 : l.width);
  }, [s, l == null ? void 0 : l.width]);
  const d = () => t ? t() : L.createElement(Sc, { key: Rs, label: "Close", icon: iz, renderIcon: n, onClick: i });
  return L.createElement("div", { ref: u, style: r.toolbar, className: gt(Mz()) }, e == null ? void 0 : e.map((p) => p === Rs ? d() : p));
}
const Lz = oi(jE, Dz);
function mx(e, t) {
  var n;
  return L.createElement(e.module.component, { key: e.module.name, ...t }, (n = e.children) === null || n === void 0 ? void 0 : n.map((r) => mx(r, t)));
}
function Fz(e, t = {}) {
  const { easing: n, ...r } = e, { easing: i, ...s } = t;
  return {
    easing: { ...n, ...i },
    ...r,
    ...s
  };
}
function gx({ carousel: e, animation: t, render: n, toolbar: r, controller: i, noScroll: s, on: u, plugins: l, slides: d, index: p, ...h }) {
  const { animation: m, carousel: v, render: y, toolbar: b, controller: _, noScroll: E, on: R, slides: F, index: C, plugins: I, ...O } = Hh, { config: S, augmentation: x } = Vj([
    Sn(Iz, [
      Sn(kz, [
        Sn(yz, [
          Sn(Ez),
          Sn(Lz),
          Sn(Oz)
        ])
      ])
    ])
  ], l || I), P = x({
    animation: Fz(m, t),
    carousel: { ...v, ...e },
    render: { ...y, ...n },
    toolbar: { ...b, ...r },
    controller: { ..._, ...i },
    noScroll: { ...E, ...s },
    on: { ...R, ...u },
    ...O,
    ...h
  });
  return P.open ? L.createElement(
    Xj,
    { ...P },
    L.createElement(
      ez,
      { slides: d || F, index: Yd(p || C) },
      L.createElement(
        rz,
        null,
        L.createElement(
          Zj,
          null,
          L.createElement(Gj, null, mx(Sn(Rz, S), P))
        )
      )
    )
  ) : null;
}
const $z = {
  download: void 0
}, vx = (e) => ({
  ...$z,
  ...e
});
function Bz(e) {
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
function Wz(e) {
  var t, n;
  return (n = (t = /^content-disposition:(.*)$/im.exec(e.getAllResponseHeaders())) === null || t === void 0 ? void 0 : t[1]) !== null && n !== void 0 ? n : null;
}
function Uz(e, t) {
  const n = new XMLHttpRequest();
  n.open("GET", e), n.responseType = "blob", n.onload = () => {
    qh(n.response, t || Bz(Wz(n)));
  }, n.onerror = () => {
    console.error("Failed to download file");
  }, n.send();
}
function jz(e) {
  const t = new XMLHttpRequest();
  t.open("HEAD", e, !1);
  try {
    t.send();
  } catch {
  }
  return t.status >= 200 && t.status <= 299;
}
function Fp(e) {
  try {
    e.dispatchEvent(new MouseEvent("click"));
  } catch {
    const n = document.createEvent("MouseEvents");
    n.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), e.dispatchEvent(n);
  }
}
function qh(e, t) {
  const n = document.createElement("a");
  n.rel = "noopener", n.download = t || "", n.download || (n.target = "_blank"), typeof e == "string" ? (n.href = e, n.origin !== window.location.origin ? jz(n.href) ? Uz(e, t) : (n.target = "_blank", Fp(n)) : Fp(n)) : (n.href = URL.createObjectURL(e), setTimeout(() => URL.revokeObjectURL(n.href), 3e4), setTimeout(() => Fp(n), 0));
}
const zz = Pa("DownloadIcon", L.createElement("path", { d: "M18 15v3H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2zm-1-4-1.41-1.41L13 12.17V4h-2v8.17L8.41 9.59 7 11l5 5 5-5z" }));
function Hz() {
  const { render: e, on: t, download: n } = $n(), { download: r } = vx(n), { currentSlide: i, currentIndex: s } = si();
  if (e.buttonDownload)
    return L.createElement(L.Fragment, null, e.buttonDownload());
  const u = i && (i.downloadUrl || typeof i.download == "string" && i.download || typeof i.download == "object" && i.download.url || ji(i) && i.src) || void 0, l = r ? (i == null ? void 0 : i.download) !== !1 : !!u, d = () => {
    if (i && u) {
      const h = i.downloadFilename || typeof i.download == "object" && i.download.filename || void 0;
      qh(u, h);
    }
  }, p = () => {
    var h;
    i && ((r || d)({ slide: i, saveAs: qh }), (h = t.download) === null || h === void 0 || h.call(t, { index: s }));
  };
  return L.createElement(Sc, { label: "Download", icon: zz, renderIcon: e.iconDownload, disabled: !l, onClick: p });
}
function Vh({ augment: e }) {
  e(({ toolbar: t, download: n, ...r }) => ({
    toolbar: dg(t, Tj, L.createElement(Hz, null)),
    download: vx(n),
    ...r
  }));
}
const Yz = {
  auto: !1,
  ref: null
}, yx = (e) => ({
  ...Yz,
  ...e
}), bx = L.createContext(null), qz = aa("useFullscreen", "FullscreenContext", bx);
function Vz({ fullscreen: e, on: t, children: n }) {
  const { auto: r, ref: i } = yx(e), s = L.useRef(null), [u, l] = L.useState(), [d, p] = L.useState(!1), h = L.useRef(!1), { getOwnerDocument: m } = Ys();
  ta(() => {
    var C, I, O, S;
    const x = m();
    l(!((S = (O = (I = (C = x.fullscreenEnabled) !== null && C !== void 0 ? C : x.webkitFullscreenEnabled) !== null && I !== void 0 ? I : x.mozFullScreenEnabled) !== null && O !== void 0 ? O : x.msFullscreenEnabled) !== null && S !== void 0 && S));
  }, [m]);
  const v = L.useCallback(() => {
    var C;
    const I = m(), O = I.fullscreenElement || I.webkitFullscreenElement || I.mozFullScreenElement || I.msFullscreenElement;
    return ((C = O == null ? void 0 : O.shadowRoot) === null || C === void 0 ? void 0 : C.fullscreenElement) || O;
  }, [m]), y = L.useCallback(() => {
    const C = s.current;
    try {
      C.requestFullscreen ? C.requestFullscreen().catch(() => {
      }) : C.webkitRequestFullscreen ? C.webkitRequestFullscreen() : C.mozRequestFullScreen ? C.mozRequestFullScreen() : C.msRequestFullscreen && C.msRequestFullscreen();
    } catch {
    }
  }, []), b = L.useCallback(() => {
    if (!v())
      return;
    const C = m();
    try {
      C.exitFullscreen ? C.exitFullscreen().catch(() => {
      }) : C.webkitExitFullscreen ? C.webkitExitFullscreen() : C.mozCancelFullScreen ? C.mozCancelFullScreen() : C.msExitFullscreen && C.msExitFullscreen();
    } catch {
    }
  }, [v, m]);
  L.useEffect(() => {
    const C = m(), I = () => {
      p(v() === s.current);
    };
    return Hd(...["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"].map((O) => (C.addEventListener(O, I), () => C.removeEventListener(O, I))));
  }, [v, m]);
  const _ = Tt(() => {
    var C;
    return (C = t.enterFullscreen) === null || C === void 0 ? void 0 : C.call(t);
  }), E = Tt(() => {
    var C;
    return (C = t.exitFullscreen) === null || C === void 0 ? void 0 : C.call(t);
  });
  L.useEffect(() => {
    d && (h.current = !0), h.current && (d ? _ : E)();
  }, [d, _, E]);
  const R = Tt(() => {
    var C;
    return (C = r ? y : null) === null || C === void 0 || C(), b;
  });
  L.useEffect(R, [R]);
  const F = L.useMemo(() => ({ fullscreen: d, disabled: u, enter: y, exit: b }), [d, u, y, b]);
  return L.useImperativeHandle(i, () => F, [F]), L.createElement(
    "div",
    { ref: s, className: Fr(gt(Uh), gt(zE)) },
    L.createElement(bx.Provider, { value: F }, n)
  );
}
const Gz = Pa("EnterFullscreen", L.createElement("path", { d: "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" })), Kz = Pa("ExitFullscreen", L.createElement("path", { d: "M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" }));
function Zz() {
  var e;
  const { fullscreen: t, disabled: n, enter: r, exit: i } = qz(), { render: s } = $n();
  return n ? null : s.buttonFullscreen ? L.createElement(L.Fragment, null, (e = s.buttonFullscreen) === null || e === void 0 ? void 0 : e.call(s, { fullscreen: t, disabled: n, enter: r, exit: i })) : L.createElement(Sc, { disabled: n, label: t ? "Exit Fullscreen" : "Enter Fullscreen", icon: t ? Kz : Gz, renderIcon: t ? s.iconExitFullscreen : s.iconEnterFullscreen, onClick: t ? i : r });
}
function _x({ augment: e, contains: t, addParent: n }) {
  e(({ fullscreen: r, toolbar: i, ...s }) => ({
    toolbar: dg(i, Uh, L.createElement(Zz, null)),
    fullscreen: yx(r),
    ...s
  })), n(t(K0) ? K0 : eg, oi(Uh, Vz));
}
const Xz = {
  controls: !0,
  playsInline: !0
}, wx = (e) => ({
  ...Xz,
  ...e
});
function Qz() {
  const { video: e } = $n();
  return wx(e);
}
function Jz() {
  var e;
  return ((e = navigator.userAgentData) === null || e === void 0 ? void 0 : e.brands.some(({ brand: t }) => t === "Chromium")) || !!window.chrome;
}
function eH() {
  return /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent);
}
function tH({ slide: e, offset: t }) {
  const n = Qz(), { publish: r } = Oc(), { setContainerRef: i, containerRect: s, containerRef: u } = pg(), { getOwnerDocument: l } = Ys(), { animation: d } = $n(), p = L.useRef(null), h = L.useRef(!1);
  L.useEffect(() => {
    t !== 0 && p.current && !p.current.paused && p.current.pause();
  }, [t]), L.useEffect(() => {
    t === 0 && p.current && (e.autoPlay || n.autoPlay) && (r(Nj), p.current.play().catch(() => {
    }));
  }, [t, n.autoPlay, e.autoPlay, r]);
  const m = Tt(() => {
    const S = setTimeout(() => {
      if (u.current) {
        const x = u.current.style.border;
        u.current.style.border = "1px solid transparent", tx(u.current), u.current.style.border = x;
      }
    }, Math.max(d.swipe, d.navigation || 0) + 50);
    return () => clearTimeout(S);
  });
  L.useEffect(() => {
    if (Jz() && t === 0)
      return m();
  }, [t, m]);
  const v = Tt((S) => {
    t === 0 && (n.autoPlay || e.autoPlay) && S.paused && S.play().catch(() => {
    });
  }), y = L.useCallback((S) => {
    p.current = S, S && v(S);
  }, [v]);
  L.useEffect(() => {
    if (t === 0) {
      let S = !1;
      const x = () => {
        S = l().fullscreenElement === p.current, h.current = S;
      };
      return l().addEventListener("fullscreenchange", x), () => {
        l().removeEventListener("fullscreenchange", x), S && (h.current = !1, l().exitFullscreen().catch(() => {
        }));
      };
    }
  }, [t, l]), L.useEffect(() => {
    if (t === 0) {
      let S = !1;
      const x = (B) => (Y) => {
        Y.target === p.current && (S = B, h.current = S);
      }, P = x(!0), k = x(!1);
      return l().addEventListener("enterpictureinpicture", P), l().addEventListener("leavepictureinpicture", k), () => {
        l().removeEventListener("enterpictureinpicture", P), l().removeEventListener("leavepictureinpicture", k), S && (h.current = !1, l().exitPictureInPicture().catch(() => {
        }));
      };
    }
  }, [t, l]);
  const { width: b, height: _, poster: E, sources: R } = e, F = () => {
    const S = {};
    if (S.style = { maxWidth: "100%", maxHeight: "100%" }, b && _ && s) {
      const x = b / _ > s.width / s.height, P = x ? s.width : Math.round(s.height / _ * b), k = x ? Math.round(s.width / b * _) : s.height;
      S.width = P, S.height = k, S.style.width = P, S.style.height = k;
    }
    return S;
  }, C = (S) => e[S] === !1 ? null : e[S] === !0 ? { [S]: !0 } : n[S] === !1 ? null : n[S] === !0 ? { [S]: !0 } : null, I = (S) => n[S] || e[S] ? { [S]: e[S] || n[S] } : null, O = (S) => {
    h.current && S.stopPropagation();
  };
  return L.createElement(L.Fragment, null, R && L.createElement("div", { ref: i, style: {
    width: "100%",
    height: "100%",
    ...b ? { maxWidth: `${b}px` } : null
  }, className: Fr(gt("video_container"), gt(zd), gt(rg)) }, s && L.createElement("video", { ref: y, poster: E, ...F(), ...C("controls"), ...C("playsInline"), ...C("loop"), ...C("muted"), ...C("playsInline"), ...C("disablePictureInPicture"), ...C("disableRemotePlayback"), ...I("controlsList"), ...I("crossOrigin"), ...I("preload"), onPlay: () => {
    var S;
    if (t !== 0) {
      (S = p.current) === null || S === void 0 || S.pause();
      return;
    }
    r(Ij);
  }, onEnded: () => {
    r(Aj);
  }, onWheel: O, onKeyDown: O, onPointerDown: (S) => {
    O(S), eH() && p.current && p.current.getBoundingClientRect().bottom - S.clientY < 40 && S.stopPropagation();
  } }, R.map(({ src: S, type: x, media: P }) => L.createElement("source", { key: [S, x, P].filter(Boolean).join("|"), src: S, type: x, media: P })))));
}
function nH(e) {
  return e.type === "video";
}
function c1({ augment: e }) {
  e(({ render: { slide: t, ...n }, video: r, ...i }) => ({
    render: {
      slide: ({ slide: s, offset: u, rect: l }) => {
        var d;
        return nH(s) ? L.createElement(tH, { key: (d = s.sources) === null || d === void 0 ? void 0 : d.map((p) => p.src).join("|"), slide: s, offset: u }) : t == null ? void 0 : t({ slide: s, offset: u, rect: l });
      },
      ...n
    },
    video: wx(r),
    ...i
  }));
}
const Ex = {
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
function rH(e) {
  return Math.min(Math.max(e, Number.EPSILON), 1);
}
function xx(e) {
  const { minZoom: t, ...n } = { ...Ex, ...e };
  return { minZoom: rH(t), ...n };
}
function aH(e, t, n, r) {
  const i = L.useRef(void 0), s = L.useRef(void 0), { zoom: u } = $n().animation, l = fg(), d = Tt(() => {
    var p, h, m;
    if ((p = i.current) === null || p === void 0 || p.cancel(), i.current = void 0, s.current && (r != null && r.current)) {
      try {
        i.current = (m = (h = r.current).animate) === null || m === void 0 ? void 0 : m.call(h, [
          { transform: s.current },
          { transform: `scale(${e}) translateX(${t}px) translateY(${n}px)` }
        ], {
          duration: l ? 0 : u ?? 500,
          easing: i.current ? "ease-out" : "ease-in-out"
        });
      } catch (v) {
        console.error(v);
      }
      s.current = void 0, i.current && (i.current.onfinish = () => {
        i.current = void 0;
      });
    }
  });
  return ta(d, [e, t, n, d]), L.useCallback(() => {
    s.current = r != null && r.current ? window.getComputedStyle(r.current).transform : void 0;
  }, [r]);
}
function iH(e, t) {
  const { on: n } = $n(), r = Tt(() => {
    var i;
    t || (i = n.zoom) === null || i === void 0 || i.call(n, { zoom: e });
  });
  L.useEffect(r, [e, r]);
}
function Vd() {
  const { zoom: e } = $n();
  return xx(e);
}
function oH(e, t) {
  var n;
  const r = typeof e == "function" ? (n = e(t)) !== null && n !== void 0 ? n : Ex.maxZoom : e;
  return Math.max(r, 1);
}
function sH(e, t) {
  var n, r;
  let i = { width: 0, height: 0 }, s = { width: 0, height: 0 };
  const { currentSlide: u } = si(), { imageFit: l } = $n().carousel, { maxZoomPixelRatio: d, maxZoom: p } = Vd();
  if (e && u) {
    const m = { ...u, ...t };
    if (ji(m)) {
      const v = cg(m, l), y = Math.max(...(((n = m.srcSet) === null || n === void 0 ? void 0 : n.map((_) => _.width)) || []).concat(m.width ? [m.width] : [])), b = Math.max(...(((r = m.srcSet) === null || r === void 0 ? void 0 : r.map((_) => _.height)) || []).concat(m.height ? [m.height] : []));
      y > 0 && b > 0 && e.width > 0 && e.height > 0 && (s = v ? {
        width: Math.round(Math.min(y, e.width / e.height * b)),
        height: Math.round(Math.min(b, e.height / e.width * y))
      } : { width: y, height: b }, s = {
        width: s.width * d,
        height: s.height * d
      }, i = v ? {
        width: Math.min(e.width, s.width, y),
        height: Math.min(e.height, s.height, b)
      } : {
        width: Math.round(Math.min(e.width, e.height / b * y, y)),
        height: Math.round(Math.min(e.height, e.width / y * b, b))
      });
    } else e.width > 0 && e.height > 0 && (t && t.width > 0 && t.height > 0 ? i = {
      width: Math.min(e.width, t.width),
      height: Math.min(e.height, t.height)
    } : i = { width: e.width, height: e.height });
  }
  const h = u && i.width ? ji(u) ? Math.max(lg(s.width / i.width, 5), 1) : oH(p, u) : 1;
  return { imageRect: i, maxZoom: h };
}
function u1(e, t) {
  return Math.hypot(e.clientX - t.clientX, e.clientY - t.clientY);
}
function d1(e, t, n = 100, r = 2) {
  return e * Math.min(1 + Math.abs(t / n), r) ** Math.sign(t);
}
function lH(e, t, n, r, i, s, u, l, d) {
  const p = L.useRef([]), h = L.useRef(0), m = L.useRef(void 0), { globalIndex: v } = si(), { getOwnerWindow: y } = Ys(), { containerRef: b, subscribeSensors: _ } = li(), { keyboardMoveDistance: E, zoomInMultiplier: R, wheelZoomDistanceFactor: F, scrollToZoom: C, doubleTapDelay: I, doubleClickDelay: O, doubleClickMaxStops: S, pinchZoomDistanceFactor: x, pinchZoomV4: P } = Vd(), k = L.useCallback((he) => {
    if (b.current) {
      const { pageX: be, pageY: ee } = he, { scrollX: ie, scrollY: se } = y(), { left: Ce, top: Se, width: Te, height: ge } = b.current.getBoundingClientRect();
      return [be - Ce - ie - Te / 2, ee - Se - se - ge / 2];
    }
    return [];
  }, [b, y]), B = Tt((he) => {
    const { key: be, metaKey: ee, ctrlKey: ie } = he, se = ee || ie, Ce = () => {
      he.preventDefault(), he.stopPropagation();
    };
    if (e > 1) {
      const Se = (Te, ge) => {
        Ce(), l(Te, ge);
      };
      be === "ArrowDown" ? Se(0, E) : be === "ArrowUp" ? Se(0, -E) : be === "ArrowLeft" ? Se(-E, 0) : be === "ArrowRight" && Se(E, 0);
    }
    be === "+" || se && be === "=" ? (Ce(), i()) : be === "-" || se && be === "_" ? (Ce(), s()) : se && be === "0" && (Ce(), u(1));
  }), Y = Tt((he) => {
    if ((he.ctrlKey || C) && Math.abs(he.deltaY) > Math.abs(he.deltaX)) {
      he.stopPropagation(), u(d1(e, -he.deltaY, F), !0, ...k(he));
      return;
    }
    e > 1 && (he.stopPropagation(), C || l(he.deltaX, he.deltaY));
  }), ne = L.useCallback((he) => {
    const be = p.current;
    be.splice(0, be.length, ...be.filter((ee) => ee.pointerId !== he.pointerId));
  }, []), z = L.useCallback((he) => {
    ne(he), he.persist(), p.current.push(he);
  }, [ne]), re = Tt((he) => {
    var be;
    const ee = p.current;
    if (he.pointerType === "mouse" && he.buttons > 1 || !(!((be = d == null ? void 0 : d.current) === null || be === void 0) && be.contains(he.target)))
      return;
    e > 1 && he.stopPropagation();
    const { timeStamp: ie } = he;
    if (ee.length === 0 && ie - h.current < (he.pointerType === "touch" ? I : O)) {
      h.current = 0;
      const se = e >= 1 ? e !== n ? e * Math.max(n ** (1 / S), R) : 1 : e !== t ? e / Math.max(t ** (-1 / S), R) : 1;
      u(se, !1, ...k(he));
    } else
      h.current = ie;
    if (z(he), ee.length === 2) {
      const se = u1(ee[0], ee[1]);
      m.current = {
        previousDistance: se,
        initialDistance: Math.max(se, 1),
        initialZoom: e
      };
    }
  }), pe = Tt((he) => {
    const be = p.current, ee = be.find((ie) => ie.pointerId === he.pointerId);
    if (be.length === 2 && m.current) {
      he.stopPropagation(), z(he);
      const ie = u1(be[0], be[1]), se = P ? m.current.initialZoom / m.current.initialDistance * ie : d1(e, ie - m.current.previousDistance, x);
      u(se, !0, ...be.map((Ce) => k(Ce)).reduce((Ce, Se) => Se.map((Te, ge) => Ce[ge] + Te / 2))), m.current.previousDistance = ie;
      return;
    }
    e > 1 && (he.stopPropagation(), ee && (be.length === 1 && l((ee.clientX - he.clientX) / e, (ee.clientY - he.clientY) / e), z(he)));
  }), ve = L.useCallback((he) => {
    const be = p.current;
    be.length === 2 && be.find((ee) => ee.pointerId === he.pointerId) && (m.current = void 0), ne(he);
  }, [ne]), Oe = L.useCallback(() => {
    const he = p.current;
    he.splice(0, he.length), h.current = 0, m.current = void 0;
  }, []);
  fx(_, re, pe, ve, r), L.useEffect(Oe, [v, Oe]), L.useEffect(() => r ? () => {
  } : Hd(Oe, _(ag, B), _(ig, Y)), [r, _, Oe, B, Y]);
}
function cH(e, t, n) {
  const [r, i] = L.useState(1), [s, u] = L.useState(0), [l, d] = L.useState(0), p = aH(r, s, l, n), { currentSlide: h, globalIndex: m } = si(), { containerRect: v, slideRect: y } = li(), { minZoom: b, zoomInMultiplier: _ } = Vd(), E = h && ji(h) ? h.src : void 0, R = !(n != null && n.current);
  ta(() => {
    i(1), u(0), d(0);
  }, [m, E]);
  const F = L.useCallback((x, P, k) => {
    const B = k || r, Y = s - (x || 0), ne = l - (P || 0), z = (e.width * B - y.width) / 2 / B, re = (e.height * B - y.height) / 2 / B;
    u(Math.min(Math.abs(Y), Math.max(z, 0)) * Math.sign(Y)), d(Math.min(Math.abs(ne), Math.max(re, 0)) * Math.sign(ne));
  }, [r, s, l, y, e.width, e.height]), C = L.useCallback((x, P, k, B) => {
    const Y = lg(x + 0.01 < t ? x - 0.01 > b ? x : b : t, 5);
    P || p(), F(k ? k * (1 / r - 1 / Y) : 0, B ? B * (1 / r - 1 / Y) : 0, Y), i(Y);
  }, [r, b, t, F, p]), I = Tt(() => {
    r > 1 && (r > t && C(t, !0), F());
  });
  ta(I, [v.width, v.height, I]);
  const O = L.useCallback(() => {
    const x = r * _;
    C(r < 1 && x > 1 ? 1 : x);
  }, [r, _, C]), S = L.useCallback(() => {
    const x = r / _;
    C(r > 1 && x < 1 ? 1 : x);
  }, [r, _, C]);
  return { zoom: r, offsetX: s, offsetY: l, disabled: R, changeOffsets: F, changeZoom: C, zoomIn: O, zoomOut: S };
}
const Cx = L.createContext(null), mg = aa("useZoom", "ZoomControllerContext", Cx);
function uH({ children: e }) {
  const [t, n] = L.useState(), { slideRect: r } = li(), { ref: i, minZoom: s } = Vd(), { imageRect: u, maxZoom: l } = sH(r, t == null ? void 0 : t.imageDimensions), { zoom: d, offsetX: p, offsetY: h, disabled: m, changeZoom: v, changeOffsets: y, zoomIn: b, zoomOut: _ } = cH(u, l, t == null ? void 0 : t.zoomWrapperRef);
  iH(d, m), lH(d, s, l, m, b, _, v, y, t == null ? void 0 : t.zoomWrapperRef);
  const E = L.useMemo(() => ({ zoom: d, minZoom: s, maxZoom: l, offsetX: p, offsetY: h, disabled: m, zoomIn: b, zoomOut: _, changeZoom: v }), [d, s, l, p, h, m, b, _, v]);
  L.useImperativeHandle(i, () => E, [E]);
  const R = L.useMemo(() => ({ ...E, setZoomWrapper: n }), [E, n]);
  return L.createElement(Cx.Provider, { value: R }, e);
}
const dH = Pa("ZoomIn", L.createElement(
  L.Fragment,
  null,
  L.createElement("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" }),
  L.createElement("path", { d: "M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" })
)), fH = Pa("ZoomOut", L.createElement("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z" })), f1 = L.forwardRef(function({ zoomIn: t, onLoseFocus: n }, r) {
  const i = L.useRef(!1), s = L.useRef(!1), { zoom: u, minZoom: l, maxZoom: d, zoomIn: p, zoomOut: h, disabled: m } = mg(), { render: v } = $n(), y = m || (t ? u >= d : u <= l);
  return L.useEffect(() => {
    y && i.current && s.current && n(), y || (i.current = !0);
  }, [y, n]), L.createElement(Sc, { ref: r, disabled: y, label: t ? "Zoom in" : "Zoom out", icon: t ? dH : fH, renderIcon: t ? v.iconZoomIn : v.iconZoomOut, onClick: t ? p : h, onFocus: () => {
    s.current = !0;
  }, onBlur: () => {
    s.current = !1;
  } });
});
function pH() {
  const e = L.useRef(null), t = L.useRef(null), { focus: n } = li(), r = L.useCallback((u) => {
    var l, d;
    !((l = u.current) === null || l === void 0) && l.disabled ? n() : (d = u.current) === null || d === void 0 || d.focus();
  }, [n]), i = L.useCallback(() => r(e), [r]), s = L.useCallback(() => r(t), [r]);
  return L.createElement(
    L.Fragment,
    null,
    L.createElement(f1, { zoomIn: !0, ref: e, onLoseFocus: s }),
    L.createElement(f1, { ref: t, onLoseFocus: i })
  );
}
function hH() {
  const { render: e } = $n(), t = mg();
  return e.buttonZoom ? L.createElement(L.Fragment, null, e.buttonZoom(t)) : L.createElement(pH, null);
}
function mH(e) {
  var t;
  return (((t = e.srcSet) === null || t === void 0 ? void 0 : t.length) || 0) > 0;
}
function gH({ current: e, preload: t }, { type: n, source: r }) {
  switch (n) {
    case "fetch":
      return e ? { current: e, preload: r } : { current: r };
    case "done":
      return r === t ? { current: r } : { current: e, preload: t };
    default:
      throw new Error(XE);
  }
}
function vH(e) {
  var t, n;
  const [{ current: r, preload: i }, s] = L.useReducer(gH, {}), { slide: u, rect: l, imageFit: d, render: p, interactive: h } = e, m = u.srcSet.sort((O, S) => O.width - S.width), v = (t = u.width) !== null && t !== void 0 ? t : m[m.length - 1].width, y = (n = u.height) !== null && n !== void 0 ? n : m[m.length - 1].height, b = cg(u, d), _ = Math.max(...m.map((O) => O.width)), E = Math.min((b ? Math.max : Math.min)(l.width, v * (l.height / y)), _), R = jj(), F = Tt(() => {
    var O;
    const S = (O = m.find((x) => x.width >= E * R)) !== null && O !== void 0 ? O : m[m.length - 1];
    (!r || m.findIndex((x) => x.src === r) < m.findIndex((x) => x === S)) && s({ type: "fetch", source: S.src });
  });
  ta(F, [l.width, l.height, R, F]);
  const C = Tt((O) => s({ type: "done", source: O })), I = {
    WebkitTransform: h ? "initial" : "translateZ(0)"
  };
  return b || Object.assign(I, l.width / l.height < v / y ? { width: "100%", height: "auto" } : { width: "auto", height: "100%" }), L.createElement(
    L.Fragment,
    null,
    i && i !== r && L.createElement(id, { key: "preload", ...e, offset: void 0, slide: { ...u, src: i, srcSet: void 0 }, style: { position: "absolute", visibility: "hidden", ...I }, onLoad: () => C(i), render: {
      ...p,
      iconLoading: () => null,
      iconError: () => null
    } }),
    r && L.createElement(id, { key: "current", ...e, slide: { ...u, src: r, srcSet: void 0 }, style: I })
  );
}
function yH({ render: e, slide: t, offset: n, rect: r }) {
  var i;
  const [s, u] = L.useState(), l = L.useRef(null), d = ji(t), { zoom: p, maxZoom: h, offsetX: m, offsetY: v, setZoomWrapper: y } = mg(), b = p > 1, { carousel: _, on: E } = $n(), { currentIndex: R } = si();
  ta(() => {
    if (n !== 0 || d || !l.current)
      return () => {
      };
    const C = () => {
      const O = l.current;
      if (!O)
        return;
      let S = 0, x = 0;
      for (const P of O.children)
        P instanceof HTMLElement && (S = Math.max(S, P.offsetWidth), x = Math.max(x, P.offsetHeight));
      u((P) => P && P.width === S && P.height === x ? P : { width: S, height: x });
    };
    if (C(), typeof ResizeObserver > "u")
      return () => {
      };
    const I = new ResizeObserver(C);
    for (const O of l.current.children)
      I.observe(O);
    return () => I.disconnect();
  }, [n, d, r]), ta(() => n === 0 ? (y({ zoomWrapperRef: l, imageDimensions: s }), () => y(void 0)) : () => {
  }, [n, s, y]);
  let F = (i = e.slide) === null || i === void 0 ? void 0 : i.call(e, { slide: t, offset: n, rect: r, zoom: p, maxZoom: h });
  if (!F && d) {
    const C = {
      slide: t,
      offset: n,
      rect: r,
      render: e,
      imageFit: _.imageFit,
      imageProps: _.imageProps,
      onClick: n === 0 ? () => {
        var I;
        return (I = E.click) === null || I === void 0 ? void 0 : I.call(E, { index: R });
      } : void 0
    };
    F = mH(t) ? L.createElement(vH, { ...C, slide: t, interactive: b, rect: n === 0 ? { width: r.width * p, height: r.height * p } : r }) : L.createElement(id, { onLoad: (I) => u({ width: I.naturalWidth, height: I.naturalHeight }), ...C });
  }
  return F ? L.createElement("div", { ref: l, className: Fr(gt(zE), gt(zd), gt(rg), b && gt(Mj)), style: n === 0 ? { transform: `scale(${p}) translateX(${m}px) translateY(${v}px)` } : void 0 }, F) : null;
}
const Ox = ({ augment: e, addModule: t }) => {
  e(({ zoom: n, toolbar: r, render: i, controller: s, ...u }) => {
    const l = xx(n);
    return {
      zoom: l,
      toolbar: dg(r, Z0, L.createElement(hH, null)),
      render: {
        ...i,
        slide: (d) => {
          var p, h;
          return ji(d.slide) || d.slide.type != null && (!((p = l.supports) === null || p === void 0) && p.includes(d.slide.type)) ? L.createElement(yH, { render: i, ...d }) : (h = i.slide) === null || h === void 0 ? void 0 : h.call(i, d);
        }
      },
      controller: { ...s, preventDefaultWheelY: l.scrollToZoom },
      ...u
    };
  }), t(oi(Z0, uH));
}, Gh = ({ imageUrl: e, isOpen: t = !1, onClose: n = () => {
}, downloadFileFetcher: r }) => {
  const [i, s] = at(null), [u, l] = at(0);
  Kt(() => {
    (async () => {
      if (e)
        if (!String(e).startsWith("data:") && !N.includes(e, "localhost") && r) {
          const y = await r({ uri: e });
          y && s(y);
        } else
          s(e);
      else
        s(null);
    })();
  }, [e, r]);
  const d = () => {
    l((v) => v <= 0 ? 270 : v - 90);
  }, p = () => {
    l((v) => v >= 270 ? 0 : v + 90);
  };
  return /* @__PURE__ */ M(
    gx,
    {
      open: t,
      plugins: [_x, Vh, Ox],
      close: () => {
        l(0), n();
      },
      slides: ((v) => v ? [{ src: v }] : [])(i),
      zoom: {
        maxZoomPixelRatio: 5,
        zoomInMultiplier: 2
      },
      className: `rotated${u}`,
      toolbar: {
        buttons: [
          /* @__PURE__ */ M("button", { type: "button", className: "yarl__button", onClick: d, children: /* @__PURE__ */ M(rd, { icon: Ej, size: "xl" }) }, "rotate-left"),
          /* @__PURE__ */ M("button", { type: "button", className: "yarl__button", onClick: p, children: /* @__PURE__ */ M(rd, { icon: xj, size: "xl" }) }, "rotate-right"),
          "zoom",
          "download",
          "fullscreen",
          "close"
        ]
      }
    }
  );
};
Gh.propTypes = {
  imageUrl: c.string,
  isOpen: c.bool,
  onClose: c.func,
  downloadFileFetcher: c.func
};
const od = ({
  isPDF: e,
  columns: t,
  data: n,
  sumData: r,
  handlerTable: i,
  clickedRowColors: s = "hsl(215, 75%, 80%)",
  onChangeDeselect: u,
  handlerMultiple: l = () => {
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
  mobileCardView: R = !1,
  cardLine1: F = [],
  cardLine2: C = [],
  cardLine3: I = [],
  cardLine4: O = [],
  dataHandler: S = null,
  searchParams: x = null,
  onLoadMore: P = null,
  isLoadingMoreProp: k = !1,
  hasMore: B = null,
  mergeConfig: Y = null,
  downloadFileFetcher: ne
}) => {
  const [z, re] = at({}), [pe, ve] = at({ isOpen: !1, src: null });
  Kt(() => {
    re({}), p([]), m([]);
  }, [u]), Kt(() => {
    const $ = N.map(v, (D) => D[t[0].key]);
    l(v), p(v), m($);
  }, [v]);
  const Oe = ($, D) => {
    i && i($, D);
  }, he = ($, D) => {
    let G = [], Z = [];
    N.includes(h, $[D]) ? (G = N.reject(d, (le) => N.isEqual(le[D], $[D])), Z = N.reject(h, (le) => N.isEqual(le, $[D]))) : (G = [...d, $], Z = [...h, $[D]]), m(Z), p(G), l(G), y(G.length === E);
  }, be = ($) => {
    Oe("onClick", $), re($);
  }, ee = ($, D) => {
    if (N.isEmpty($))
      return null;
    if (e) {
      const Z = $.match(/.{1,60}/g) || [$];
      return N.map(Z, (le, fe) => /* @__PURE__ */ M("div", { children: le }, fe));
    }
    const G = /* @__PURE__ */ M("span", { className: Xt.icon, children: /* @__PURE__ */ M(
      wr,
      {
        position: "bottom right",
        content: /* @__PURE__ */ M("div", { className: Xt.popupContent, children: $ }),
        trigger: /* @__PURE__ */ M(We, { name: "comment alternate outline", style: { color: "#286b92" } })
      }
    ) }, 1);
    return D >= $.length ? $ : /* @__PURE__ */ M("div", { className: Xt.noWrap, children: [`${$.slice(0, D)}...`, G] });
  }, ie = ($, D) => {
    if (N.isEmpty($)) return null;
    let G = $;
    if (typeof $[0] == "object" && (G = N.map($, (fe) => fe[D.split(",")[1]])), e)
      return G.join(", ");
    const Z = N.map(G, (fe, Q) => /* @__PURE__ */ M("div", { className: Xt.arrayCell, children: fe }, Q)), le = /* @__PURE__ */ M("span", { className: Xt.icon, children: /* @__PURE__ */ M(
      wr,
      {
        position: "bottom right",
        content: /* @__PURE__ */ M("div", { className: Xt.popupContent, children: Z }),
        trigger: /* @__PURE__ */ M(We, { name: "comment alternate outline", style: { color: "#286b92" } })
      }
    ) }, 1);
    return G.length === 1 ? G : [`${G[0]}...`, le];
  }, se = ($, D, G = "") => {
    const Z = new Date($), le = new Date(D);
    let fe = /* @__PURE__ */ new Date();
    N.isEmpty(G) || (fe = new Date(G));
    const Q = le - Z, ue = fe - Z;
    if (Q <= 0 || ue >= Q)
      return 100;
    const te = ue / Q * 100;
    return parseInt(te.toFixed(0), 10);
  }, Ce = ($, D, G, Z, le, fe) => {
    let Q = "#2483bb";
    if (D) {
      const ue = D[0];
      if (ue)
        if (ue.colorKey)
          Z && (Q = Ht(ue.colorKey, Z));
        else
          for (const te of D)
            te.onName === $ ? Q = te.color : te.default && (Q = te.default);
    }
    return G ? /* @__PURE__ */ M(
      ut,
      {
        style: { backgroundColor: Q },
        className: Xt.ButtonLabel,
        onClick: () => typeof G == "function" ? G(Z) : Oe(G, Z),
        fluid: !0,
        children: N.isEmpty(le) ? String($) : El($, le)
      }
    ) : $ ? /* @__PURE__ */ M(ut, { style: { backgroundColor: Q, color: fe }, className: Xt.ButtonLabel, fluid: !0, children: N.isEmpty(le) ? String($) : El($, le) }) : null;
  }, Se = ($, D, G, Z) => {
    let le = se($, D);
    G(Z) !== void 0 && (le = se($, D, G(Z)));
    let fe = "#01C875";
    return le >= 90 && (fe = "#FDAB3D"), le === 100 && (fe = "#E2445B"), /* @__PURE__ */ de("div", { children: [
      /* @__PURE__ */ M("div", { className: Xt.progressBarLabel, children: `${Ar(D, !1, !1, !0)} ${le}%` }),
      /* @__PURE__ */ M(
        fW,
        {
          isLabelVisible: !1,
          animateOnRender: !0,
          width: "11rem",
          completed: le,
          maxCompleted: 100,
          baseBgColor: "silver",
          bgColor: fe
        }
      )
    ] });
  }, Te = ($, D) => {
    if (!N.includes($, "[]?")) return N.get(D, $);
    const [G, Z] = $.replace("[]?", "").split("."), le = N.get(D, G, []);
    return N.isArray(le) ? N.filter(
      N.map(le, (fe) => N.get(fe, Z)),
      Boolean
    ) : [];
  }, ge = ({
    format: $,
    value: D,
    key: G,
    endDate: Z,
    boolLabels: le,
    /* 	colorLabel, */
    translate: fe,
    /* onClick,
    labelData, */
    /* 	onKeyEndDate, */
    sum: Q,
    colorLabel: ue,
    onClick: te,
    widthZero: V,
    nullToZero: ae,
    stringLength: Ee,
    rowData: Le,
    textColor: Fe,
    stopDateHandler: ot
  }) => {
    switch ($) {
      case "timeBetween":
        return eE(D, Z);
      case "date":
        return Ar(D, !1, !1, !1);
      case "dateM":
        return Ar(D, !1, !1, !1);
      case "dateDMY":
        return Ar(D, !1, !1, !1, !1, !1, !0);
      case "time":
        return Ar(D, !1, !0, !1);
      case "dateTime":
        return Ar(D, !1, !1, !0);
      case "dateTimeBar":
        return Se(D, Z, ot, Le);
      case "dateTimeDay":
        return Ar(D, !1, !1, !1, !0);
      case "dateMonthYear":
        return Ar(D, !1, !1, !1, !1, !0);
      case "pastDays":
        return iW(D);
      case "phone":
        return rW(D);
      case "currency":
        return v0(D, !1, V, ae);
      case "decimal":
        return aW(D, V, ae);
      case "integerCurrency":
        return v0(D, !0, V, ae);
      case "number":
        return Number.isNaN(D) || D === null ? "" : Number(D).toLocaleString("en-US");
      case "blankZero": {
        if (N.isArray(D) || typeof D == "string") {
          const qe = D ? D.length : 0;
          return qe === 0 ? "" : qe;
        }
        return D === 0 ? "" : D;
      }
      case "count":
        return D ? D.length : 0;
      case "boolean":
        return Q ? D : le ? D ? le.true || "si" : le.false || "no" : D ? "si" : "no";
      case "translate":
        return El(D, fe);
      case "truncate":
        return ee(D, Ee);
      case "array":
        return N.map(D, (Et) => /* @__PURE__ */ M("div", { children: Ht(G.split(",")[1], Et) }));
      case "colorLabel":
        return Pe(D, Fe);
      case "arrayTruncate": {
        const qe = G.includes("[]?") ? Te(G, Le) : D;
        return ie(qe, G);
      }
      case "label":
        return Ce(D, ue, te, Le, fe, Fe);
      case "coloredText": {
        let qe = "inherit";
        if (ue)
          for (const nt of ue)
            nt.onName === D ? qe = nt.color : nt.default && qe === "inherit" && (qe = nt.default);
        const Et = N.isEmpty(fe) ? String(D) : El(D, fe);
        return /* @__PURE__ */ M("span", { style: { color: qe, fontWeight: 500 }, children: Et });
      }
      case "longText":
        return ee(D, Ee);
      case "image":
        return D ? /* @__PURE__ */ M(
          We,
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
  }, Pe = ($, D) => $ === "En Línea" && D !== "string" ? /* @__PURE__ */ M("div", { style: { color: "hsl(130, 92.00%, 34.10%)" }, children: $ }) : /* @__PURE__ */ M("div", { className: Xt.labelColor, style: { color: "#000000" }, children: $ }), Me = ($, D) => N.map($, ({ content: Z, hidden: le, type: fe, color: Q = "hsl(0, 0 %, 95 %)", onClick: ue, visible: te }, V) => {
    if (le || typeof te == "function" && te(D) === !1)
      return null;
    switch (fe) {
      case "icon":
        return /* @__PURE__ */ M(
          ut,
          {
            disabled: !1,
            className: Xt.ButtonIcon,
            style: {
              color: Q,
              border: `2px solid ${Q}`
            },
            onClick: () => Oe(ue, D),
            children: /* @__PURE__ */ M(We, { name: Z })
          },
          V
        );
      case "link":
        return /* @__PURE__ */ M(
          sr,
          {
            style: { color: Q },
            className: Xt.ButtonLink,
            onClick: () => Oe(ue, D),
            children: Z
          },
          V
        );
      default:
        return null;
    }
  }), U = ($, D = !1) => N.map(
    t,
    ({
      key: Z,
      format: le,
      endDateKey: fe = null,
      action: Q = [],
      multipleColumns: ue = [],
      dataPosition: te = "left",
      twoLines: V = !1,
      multiple: ae = !1,
      line1: Ee = {},
      line2: Le = {},
      stringLength: Fe = 20,
      hidden: ot = !1,
      translate: qe = {},
      colorLabel: Et,
      textColor: nt = "#000000",
      style: Ge = {},
      stopDateHandler: Ze = () => {
      },
      render: kt = null,
      valueGetter: ye = null,
      boolLabels: Nt = null
    }, It) => {
      let dt = {};
      _ !== void 0 && (dt = _($));
      const Qe = ye && typeof ye == "function" ? ye($) : Ht(Z, $, !1, D), Vt = N.isEmpty(fe) ? null : Ht(fe, $);
      if (ot)
        return null;
      if (kt && typeof kt == "function") {
        const $e = kt($, { setOpentImagePreview: ve });
        return /* @__PURE__ */ M(vt.Cell, { verticalAlign: "middle", textAlign: te, style: dt, className: Xt.cell, children: $e }, It);
      }
      if (!N.isEmpty(Q) && !e && !D)
        return /* @__PURE__ */ M(
          vt.Cell,
          {
            verticalAlign: "middle",
            textAlign: te,
            style: { ...dt, ...Ge },
            className: Xt.cellButton,
            children: Me(Q, $)
          },
          It
        );
      if (!N.isEmpty(Q) && e)
        return null;
      if (ae)
        return /* @__PURE__ */ M(
          vt.Cell,
          {
            verticalAlign: "middle",
            textAlign: "center",
            style: { ...dt, ...Ge },
            className: Xt.cellButton,
            onClick: () => {
              he($, Z);
            },
            children: /* @__PURE__ */ M(rr, { checked: N.includes(h, $[Z]) }, It)
          },
          It
        );
      if (V) {
        const $e = Ht(N.get(Ee, "key", null), $), Lt = Ht(N.get(Le, "key", null), $), Xe = Ht(N.get(Ee, "endDateKey", null), $), cn = Ht(N.get(Le, "endDateKey", null), $);
        return /* @__PURE__ */ de(
          vt.Cell,
          {
            verticalAlign: "middle",
            style: dt,
            onClick: () => be($),
            children: [
              /* @__PURE__ */ M("div", { className: Xt.towLineRow, style: { justifyContent: N.get(Ee, "dataPosition", "left"), ...dt }, children: ge({
                value: $e,
                format: le,
                endDate: Xe,
                stringLength: Fe,
                key: Z,
                translate: qe,
                colorLabel: Et,
                boolLabels: Nt,
                rowData: $
              }) }),
              /* @__PURE__ */ M("div", { className: Xt.towLineRow, style: { justifyContent: N.get(Le, "dataPosition", "left"), ...dt }, children: ge({
                value: Lt,
                format: le,
                endDate: cn,
                stringLength: Fe,
                key: Z,
                translate: qe,
                colorLabel: Et,
                boolLabels: Nt,
                rowData: $
              }) })
            ]
          },
          It
        );
      }
      return N.isEmpty(ue) ? /* @__PURE__ */ M(
        vt.Cell,
        {
          verticalAlign: "middle",
          className: Xt.cell,
          textAlign: te,
          style: { color: nt, ...dt },
          onClick: () => be($),
          children: ge({
            value: Qe,
            format: le,
            endDate: Vt,
            stringLength: Fe,
            key: Z,
            sum: D,
            translate: qe,
            colorLabel: Et,
            boolLabels: Nt,
            rowData: $,
            textColor: nt,
            stopDateHandler: Ze
          })
        },
        It
      ) : N.map(ue, (Lt, Xe) => {
        const cn = It + Xe;
        return /* @__PURE__ */ M(
          vt.Cell,
          {
            verticalAlign: "middle",
            style: dt,
            textAlign: N.get(Lt, "dataPosition", "left"),
            onClick: () => be($),
            children: ge({
              value: Ht(N.get(Lt, "key", null), $),
              format: N.get(Lt, "format", ""),
              endDate: N.get(Lt, "endDate", null),
              stringLength: Fe,
              key: Z,
              translate: qe,
              colorLabel: Et,
              boolLabels: Nt,
              rowData: $
            })
          },
          cn
        );
      });
    }
  ), j = () => {
    if (!N.isEmpty(n)) {
      const $ = N.map(n, (G, Z) => {
        if (!N.isEmpty(b)) {
          const le = Ht(b.headerTitle, G, !1), fe = Ht(b.dataDetail, G, !1);
          return [
            /* @__PURE__ */ M(vt.Row, { className: Xt.sumRow, as: "tr", children: /* @__PURE__ */ M(
              vt.Cell,
              {
                verticalAlign: "middle",
                className: Xt.cell,
                style: { backgroundColor: "#dddddd", color: "black" },
                colSpan: 16,
                children: le
              }
            ) }, `sumRow-${Z}`),
            N.map(fe, (Q, ue) => /* @__PURE__ */ M(
              vt.Row,
              {
                className: Xt.groupHover,
                style: z === Q ? { backgroundColor: s } : {},
                onDoubleClick: () => {
                  Oe("Watch", Q);
                },
                children: U(Q)
              },
              `detail-${Z}-${ue}`
            ))
          ];
        }
        return /* @__PURE__ */ M(
          vt.Row,
          {
            className: Xt.groupHover,
            style: z === G ? { backgroundColor: s } : {},
            onDoubleClick: () => {
              Oe("Watch", G);
            },
            children: U(G)
          },
          Z
        );
      });
      let D = [];
      return N.isEmpty(r) || (D = [
        /* @__PURE__ */ M(vt.Row, { className: Xt.sumRow, children: U(r, !0) }, "sumRow")
      ]), [...$, ...D];
    }
    return /* @__PURE__ */ M(vt.Row, { children: /* @__PURE__ */ M(vt.Cell, { colSpan: 34, children: /* @__PURE__ */ M("div", { className: Xt.emptyChat, children: /* @__PURE__ */ de(Yn, { as: "h3", color: "grey", children: [
      /* @__PURE__ */ M("div", { className: Xt.emptyDataIcon, children: /* @__PURE__ */ de(We.Group, { size: "large", children: [
        /* @__PURE__ */ M(We, { name: "list alternate outline" }),
        /* @__PURE__ */ M(We, { corner: !0, name: "close", color: "red" })
      ] }) }),
      "No se ha encontrado ningun dato"
    ] }) }) }) });
  };
  if (R) {
    const $ = S ? async (D, G = !1, Z = !1, le = !1) => S(D, G, Z, le, { withLoading: !(!G && !Z && !le) }) : null;
    return /* @__PURE__ */ de("div", { className: Xt.cardsWrapper, children: [
      /* @__PURE__ */ M(
        rE,
        {
          data: n,
          columns: t,
          headerDetail: b,
          setRowStyle: _,
          clickedRowColors: s,
          onHandlerTable: Oe,
          handlerClick: be,
          formatData: ge,
          clikedData: z,
          isPDF: e,
          cardLine1: F,
          enableInfiniteScroll: !!P || !!S,
          onLoadMore: P,
          isLoadingMore: k,
          hasMore: B,
          cardLine2: C,
          cardLine3: I,
          cardLine4: O,
          multipleHandler: he,
          concatKeys: h,
          dataHandler: $,
          searchParams: x,
          totalRows: E,
          mergeConfig: Y
        }
      ),
      /* @__PURE__ */ M(
        Gh,
        {
          imageUrl: pe.src,
          onClose: () => ve({ isOpen: !1, src: null }),
          isOpen: pe.isOpen,
          downloadFileFetcher: ne
        }
      )
    ] });
  }
  return /* @__PURE__ */ de(vt.Body, { children: [
    j(),
    /* @__PURE__ */ M(
      Gh,
      {
        imageUrl: pe.src,
        onClose: () => ve({ isOpen: !1, src: null }),
        isOpen: pe.isOpen,
        downloadFileFetcher: ne
      }
    )
  ] });
};
od.propTypes = {
  data: c.array,
  columns: c.array,
  clickedRowColors: c.string,
  handlerTable: c.func,
  handlerMultiple: c.func,
  setConcatAll: c.func,
  isPDF: c.bool,
  onChangeDeselect: c.bool,
  totalRows: c.number,
  concatValue: c.array,
  checkAllData: c.array,
  setConcatValue: c.func,
  concatKeys: c.array,
  setConcatKeys: c.func,
  setRowStyle: c.func,
  sumData: c.object,
  headerDetail: c.object,
  mobileCardView: c.bool,
  cardLine1: c.array,
  cardLine2: c.array,
  cardLine3: c.array,
  cardLine4: c.array,
  dataHandler: c.func,
  searchParams: c.object,
  onLoadMore: c.func,
  isLoadingMoreProp: c.bool,
  hasMore: c.bool,
  mergeConfig: c.object,
  downloadFileFetcher: c.func
};
const bH = "_paginationCell_1jms9_1", _H = "_rowSelector_1jms9_9", wH = "_rowSelectorContainer_1jms9_17", EH = "_paginationContainer_1jms9_29", xH = "_content_1jms9_43", CH = "_pagination_1jms9_1", OH = "_itemCount_1jms9_67", SH = "_span_1jms9_75", ua = {
  paginationCell: bH,
  rowSelector: _H,
  rowSelectorContainer: wH,
  paginationContainer: EH,
  content: xH,
  pagination: CH,
  itemCount: OH,
  span: SH
}, Sx = ({ searchParams: e, setSearchParams: t, dataHandler: n, totalRows: r, visiblePagination: i }) => {
  const s = (p) => {
    const h = { ...e, rows: p };
    t(h), n(h);
  }, u = (p, { activePage: h }) => {
    p.preventDefault();
    const m = { ...e, page: h };
    t(m), n(m);
  }, l = () => {
    if (r <= 1)
      return /* @__PURE__ */ de("span", { className: ua.itemCount, children: [
        "Elementos: 1-1 / ",
        r
      ] });
    const p = e.rows * e.page - e.rows + 1;
    let h = e.rows * e.page;
    return e.page === d() && (h = r), /* @__PURE__ */ M("span", { className: ua.itemCount, children: `Elementos: ${p}-${h}/ ${r}` }, 1);
  }, d = () => {
    const p = parseInt(r / e.rows, 10), h = r % e.rows;
    return p < 1 ? 1 : h > 0 ? p + 1 : p;
  };
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    /* @__PURE__ */ M(yo, { children: i && /* @__PURE__ */ M(vt.Footer, { className: ua.footerContainer, children: /* @__PURE__ */ M(vt.Row, { children: /* @__PURE__ */ M(vt.HeaderCell, { colSpan: "34", className: ua.paginationCell, children: /* @__PURE__ */ de("div", { className: ua.content, children: [
      /* @__PURE__ */ de("div", { className: ua.paginationContainer, children: [
        /* @__PURE__ */ M(
          Bs,
          {
            className: ua.pagination,
            activePage: e.page,
            ellipsisItem: {
              content: /* @__PURE__ */ M(We, { name: "ellipsis horizontal" }, 1),
              icon: !0
            },
            firstItem: { content: /* @__PURE__ */ M(We, { name: "angle double left" }, 2), icon: !0 },
            lastItem: { content: /* @__PURE__ */ M(We, { name: "angle double right" }, 3), icon: !0 },
            prevItem: { content: /* @__PURE__ */ M(We, { name: "angle left" }, 4), icon: !0 },
            nextItem: { content: /* @__PURE__ */ M(We, { name: "angle right" }, 5), icon: !0 },
            totalPages: String(d()),
            onPageChange: u
          }
        ),
        r >= 1 && l()
      ] }),
      /* @__PURE__ */ de("div", { className: ua.rowSelectorContainer, children: [
        /* @__PURE__ */ M("span", { className: ua.span, children: "Filas:" }),
        /* @__PURE__ */ M(
          Br,
          {
            className: ua.rowSelector,
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
Sx.propTypes = {
  searchParams: c.object,
  setSearchParams: c.func,
  dataHandler: c.func,
  totalRows: c.number,
  visiblePagination: c.bool
};
var Tx = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r(J, _I);
  })(typeof self < "u" ? self : ts, function(n, r) {
    return function() {
      var i = { 328: function(d, p, h) {
        Object.defineProperty(p, "__esModule", { value: !0 }), p.PrintContextConsumer = p.PrintContext = void 0;
        var m = h(496), v = Object.prototype.hasOwnProperty.call(m, "createContext");
        p.PrintContext = v ? m.createContext({}) : null, p.PrintContextConsumer = p.PrintContext ? p.PrintContext.Consumer : function() {
          return null;
        };
      }, 428: function(d, p, h) {
        Object.defineProperty(p, "__esModule", { value: !0 }), p.ReactToPrint = void 0;
        var m = h(316), v = h(496), y = h(190), b = h(328), _ = h(940), E = function(R) {
          function F() {
            var C = R.apply(this, m.__spreadArray([], m.__read(arguments), !1)) || this;
            return C.startPrint = function(I) {
              var O = C.props, S = O.onAfterPrint, x = O.onPrintError, P = O.print, k = O.documentTitle;
              setTimeout(function() {
                var B, Y;
                if (I.contentWindow) if (I.contentWindow.focus(), P) P(I).then(function() {
                  return S == null ? void 0 : S();
                }).then(function() {
                  return C.handleRemoveIframe();
                }).catch(function(re) {
                  x ? x("print", re) : C.logMessages(["An error was thrown by the specified `print` function"]);
                });
                else {
                  if (I.contentWindow.print) {
                    var ne = (Y = (B = I.contentDocument) === null || B === void 0 ? void 0 : B.title) !== null && Y !== void 0 ? Y : "", z = I.ownerDocument.title;
                    k && (I.ownerDocument.title = k, I.contentDocument && (I.contentDocument.title = k)), I.contentWindow.print(), k && (I.ownerDocument.title = z, I.contentDocument && (I.contentDocument.title = ne));
                  } else C.logMessages(["Printing for this browser is not currently possible: the browser does not have a `print` method available for iframes."]);
                  S == null || S(), C.handleRemoveIframe();
                }
                else C.logMessages(["Printing failed because the `contentWindow` of the print iframe did not load. This is possibly an error with `react-to-print`. Please file an issue: https://github.com/gregnb/react-to-print/issues/"]);
              }, 500);
            }, C.triggerPrint = function(I) {
              var O = C.props, S = O.onBeforePrint, x = O.onPrintError;
              if (S) {
                var P = S();
                P && typeof P.then == "function" ? P.then(function() {
                  C.startPrint(I);
                }).catch(function(k) {
                  x && x("onBeforePrint", k);
                }) : C.startPrint(I);
              } else C.startPrint(I);
            }, C.handlePrint = function(I) {
              var O = C.props, S = O.bodyClass, x = O.content, P = O.copyStyles, k = O.fonts, B = O.pageStyle, Y = O.nonce, ne = typeof I == "function" ? I() : null;
              if (ne && typeof x == "function" && C.logMessages(['"react-to-print" received a `content` prop and a content param passed the callback return by `useReactToPrint. The `content` prop will be ignored.'], "warning"), ne || typeof x != "function" || (ne = x()), ne !== void 0) if (ne !== null) {
                var z = document.createElement("iframe");
                z.width = "".concat(document.documentElement.clientWidth, "px"), z.height = "".concat(document.documentElement.clientHeight, "px"), z.style.position = "absolute", z.style.top = "-".concat(document.documentElement.clientHeight + 100, "px"), z.style.left = "-".concat(document.documentElement.clientWidth + 100, "px"), z.id = "printWindow", z.srcdoc = "<!DOCTYPE html>";
                var re = (0, y.findDOMNode)(ne);
                if (re) {
                  var pe = re.cloneNode(!0), ve = pe instanceof Text, Oe = document.querySelectorAll("link[rel~='stylesheet'], link[as='style']"), he = ve ? [] : pe.querySelectorAll("img"), be = ve ? [] : pe.querySelectorAll("video"), ee = k ? k.length : 0;
                  C.numResourcesToLoad = Oe.length + he.length + be.length + ee, C.resourcesLoaded = [], C.resourcesErrored = [];
                  var ie = function(se, Ce) {
                    C.resourcesLoaded.includes(se) ? C.logMessages(["Tried to mark a resource that has already been handled", se], "debug") : (Ce ? (C.logMessages(m.__spreadArray(['"react-to-print" was unable to load a resource but will continue attempting to print the page'], m.__read(Ce), !1)), C.resourcesErrored.push(se)) : C.resourcesLoaded.push(se), C.resourcesLoaded.length + C.resourcesErrored.length === C.numResourcesToLoad && C.triggerPrint(z));
                  };
                  z.onload = function() {
                    var se, Ce, Se, Te;
                    z.onload = null;
                    var ge = z.contentDocument || ((Ce = z.contentWindow) === null || Ce === void 0 ? void 0 : Ce.document);
                    if (ge) {
                      ge.body.appendChild(pe), k && (!((Se = z.contentDocument) === null || Se === void 0) && Se.fonts && (!((Te = z.contentWindow) === null || Te === void 0) && Te.FontFace) ? k.forEach(function(nt) {
                        var Ge = new FontFace(nt.family, nt.source, { weight: nt.weight, style: nt.style });
                        z.contentDocument.fonts.add(Ge), Ge.loaded.then(function() {
                          ie(Ge);
                        }).catch(function(Ze) {
                          ie(Ge, ["Failed loading the font:", Ge, "Load error:", Ze]);
                        });
                      }) : (k.forEach(function(nt) {
                        return ie(nt);
                      }), C.logMessages(['"react-to-print" is not able to load custom fonts because the browser does not support the FontFace API but will continue attempting to print the page'])));
                      var Pe = typeof B == "function" ? B() : B;
                      if (typeof Pe != "string") C.logMessages(['"react-to-print" expected a "string" from `pageStyle` but received "'.concat(typeof Pe, '". Styles from `pageStyle` will not be applied.')]);
                      else {
                        var Me = ge.createElement("style");
                        Y && (Me.setAttribute("nonce", Y), ge.head.setAttribute("nonce", Y)), Me.appendChild(ge.createTextNode(Pe)), ge.head.appendChild(Me);
                      }
                      if (S && (se = ge.body.classList).add.apply(se, m.__spreadArray([], m.__read(S.split(" ")), !1)), !ve) {
                        for (var U = ve ? [] : re.querySelectorAll("canvas"), j = ge.querySelectorAll("canvas"), $ = 0; $ < U.length; ++$) {
                          var D = U[$], G = j[$].getContext("2d");
                          G && G.drawImage(D, 0, 0);
                        }
                        var Z = function(nt) {
                          var Ge = he[nt], Ze = Ge.getAttribute("src");
                          if (Ze) {
                            var kt = new Image();
                            kt.onload = function() {
                              return ie(Ge);
                            }, kt.onerror = function(ye, Nt, It, dt, Qe) {
                              return ie(Ge, ["Error loading <img>", Ge, "Error", Qe]);
                            }, kt.src = Ze;
                          } else ie(Ge, ['Found an <img> tag with an empty "src" attribute. This prevents pre-loading it. The <img> is:', Ge]);
                        };
                        for ($ = 0; $ < he.length; $++) Z($);
                        var le = function(nt) {
                          var Ge = be[nt];
                          Ge.preload = "auto";
                          var Ze = Ge.getAttribute("poster");
                          if (Ze) {
                            var kt = new Image();
                            kt.onload = function() {
                              return ie(Ge);
                            }, kt.onerror = function(ye, Nt, It, dt, Qe) {
                              return ie(Ge, ["Error loading video poster", Ze, "for video", Ge, "Error:", Qe]);
                            }, kt.src = Ze;
                          } else Ge.readyState >= 2 ? ie(Ge) : (Ge.onloadeddata = function() {
                            return ie(Ge);
                          }, Ge.onerror = function(ye, Nt, It, dt, Qe) {
                            return ie(Ge, ["Error loading video", Ge, "Error", Qe]);
                          }, Ge.onstalled = function() {
                            return ie(Ge, ["Loading video stalled, skipping", Ge]);
                          });
                        };
                        for ($ = 0; $ < be.length; $++) le($);
                        var fe = "input", Q = re.querySelectorAll(fe), ue = ge.querySelectorAll(fe);
                        for ($ = 0; $ < Q.length; $++) ue[$].value = Q[$].value;
                        var te = "input[type=checkbox],input[type=radio]", V = re.querySelectorAll(te), ae = ge.querySelectorAll(te);
                        for ($ = 0; $ < V.length; $++) ae[$].checked = V[$].checked;
                        var Ee = "select", Le = re.querySelectorAll(Ee), Fe = ge.querySelectorAll(Ee);
                        for ($ = 0; $ < Le.length; $++) Fe[$].value = Le[$].value;
                      }
                      if (P) for (var ot = document.querySelectorAll("style, link[rel~='stylesheet'], link[as='style']"), qe = function(nt, Ge) {
                        var Ze = ot[nt];
                        if (Ze.tagName.toLowerCase() === "style") {
                          var kt = ge.createElement(Ze.tagName), ye = Ze.sheet;
                          if (ye) {
                            var Nt = "";
                            try {
                              for (var It = ye.cssRules.length, dt = 0; dt < It; ++dt) typeof ye.cssRules[dt].cssText == "string" && (Nt += "".concat(ye.cssRules[dt].cssText, `\r
`));
                            } catch {
                              C.logMessages(["A stylesheet could not be accessed. This is likely due to the stylesheet having cross-origin imports, and many browsers block script access to cross-origin stylesheets. See https://github.com/gregnb/react-to-print/issues/429 for details. You may be able to load the sheet by both marking the stylesheet with the cross `crossorigin` attribute, and setting the `Access-Control-Allow-Origin` header on the server serving the stylesheet. Alternatively, host the stylesheet on your domain to avoid this issue entirely.", Ze], "warning");
                            }
                            kt.setAttribute("id", "react-to-print-".concat(nt)), Y && kt.setAttribute("nonce", Y), kt.appendChild(ge.createTextNode(Nt)), ge.head.appendChild(kt);
                          }
                        } else if (Ze.getAttribute("href")) if (Ze.hasAttribute("disabled")) C.logMessages(["`react-to-print` encountered a <link> tag with a `disabled` attribute and will ignore it. Note that the `disabled` attribute is deprecated, and some browsers ignore it. You should stop using it. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link#attr-disabled. The <link> is:", Ze], "warning"), ie(Ze);
                        else {
                          for (var Qe = ge.createElement(Ze.tagName), Vt = (dt = 0, Ze.attributes.length); dt < Vt; ++dt) {
                            var $e = Ze.attributes[dt];
                            $e && Qe.setAttribute($e.nodeName, $e.nodeValue || "");
                          }
                          Qe.onload = function() {
                            return ie(Qe);
                          }, Qe.onerror = function(Lt, Xe, cn, Gn, ia) {
                            return ie(Qe, ["Failed to load", Qe, "Error:", ia]);
                          }, Y && Qe.setAttribute("nonce", Y), ge.head.appendChild(Qe);
                        }
                        else C.logMessages(["`react-to-print` encountered a <link> tag with an empty `href` attribute. In addition to being invalid HTML, this can cause problems in many browsers, and so the <link> was not loaded. The <link> is:", Ze], "warning"), ie(Ze);
                      }, Et = ($ = 0, ot.length); $ < Et; ++$) qe($);
                    }
                    C.numResourcesToLoad !== 0 && P || C.triggerPrint(z);
                  }, C.handleRemoveIframe(!0), document.body.appendChild(z);
                } else C.logMessages(['"react-to-print" could not locate the DOM node corresponding with the `content` prop']);
              } else C.logMessages(['There is nothing to print because the "content" prop returned "null". Please ensure "content" is renderable before allowing "react-to-print" to be called.']);
              else C.logMessages(["To print a functional component ensure it is wrapped with `React.forwardRef`, and ensure the forwarded ref is used. See the README for an example: https://github.com/gregnb/react-to-print#examples"]);
            }, C.handleRemoveIframe = function(I) {
              var O = C.props.removeAfterPrint;
              if (I || O) {
                var S = document.getElementById("printWindow");
                S && document.body.removeChild(S);
              }
            }, C.logMessages = function(I, O) {
              O === void 0 && (O = "error"), C.props.suppressErrors || (O === "error" ? console.error(I) : O === "warning" ? console.warn(I) : O === "debug" && console.debug(I));
            }, C;
          }
          return m.__extends(F, R), F.prototype.handleClick = function(C, I) {
            var O = this, S = this.props, x = S.onBeforeGetContent, P = S.onPrintError;
            if (x) {
              var k = x();
              k && typeof k.then == "function" ? k.then(function() {
                return O.handlePrint(I);
              }).catch(function(B) {
                P && P("onBeforeGetContent", B);
              }) : this.handlePrint(I);
            } else this.handlePrint(I);
          }, F.prototype.render = function() {
            var C = this.props, I = C.children, O = C.trigger;
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
        p.useReactToPrint = function(R) {
          if (!E) return R.suppressErrors || console.error('"react-to-print" requires React ^16.8.0 to be able to use "useReactToPrint"'), function() {
            throw new Error('"react-to-print" requires React ^16.8.0 to be able to use "useReactToPrint"');
          };
          var F = v.useMemo(function() {
            return new y.ReactToPrint(m.__assign(m.__assign({}, b.defaultProps), R));
          }, [R]);
          return v.useCallback(function(C, I) {
            return (0, _.wrapCallbackWithArgs)(F, F.handleClick, I)(C);
          }, [F]);
        };
      }, 860: function(d, p, h) {
        Object.defineProperty(p, "__esModule", { value: !0 }), p.wrapCallbackWithArgs = void 0;
        var m = h(316);
        p.wrapCallbackWithArgs = function(v, y) {
          for (var b = [], _ = 2; _ < arguments.length; _++) b[_ - 2] = arguments[_];
          return function() {
            for (var E = [], R = 0; R < arguments.length; R++) E[R] = arguments[R];
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
          return Oe;
        }, __asyncGenerator: function() {
          return ve;
        }, __asyncValues: function() {
          return he;
        }, __await: function() {
          return pe;
        }, __awaiter: function() {
          return S;
        }, __classPrivateFieldGet: function() {
          return Ce;
        }, __classPrivateFieldIn: function() {
          return Te;
        }, __classPrivateFieldSet: function() {
          return Se;
        }, __createBinding: function() {
          return P;
        }, __decorate: function() {
          return _;
        }, __disposeResources: function() {
          return Me;
        }, __esDecorate: function() {
          return R;
        }, __exportStar: function() {
          return k;
        }, __extends: function() {
          return v;
        }, __generator: function() {
          return x;
        }, __importDefault: function() {
          return se;
        }, __importStar: function() {
          return ie;
        }, __makeTemplateObject: function() {
          return be;
        }, __metadata: function() {
          return O;
        }, __param: function() {
          return E;
        }, __propKey: function() {
          return C;
        }, __read: function() {
          return Y;
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
          var G, Z = arguments.length, le = Z < 3 ? j : D === null ? D = Object.getOwnPropertyDescriptor(j, $) : D;
          if (typeof Reflect == "object" && typeof Reflect.decorate == "function") le = Reflect.decorate(U, j, $, D);
          else for (var fe = U.length - 1; fe >= 0; fe--) (G = U[fe]) && (le = (Z < 3 ? G(le) : Z > 3 ? G(j, $, le) : G(j, $)) || le);
          return Z > 3 && le && Object.defineProperty(j, $, le), le;
        }
        function E(U, j) {
          return function($, D) {
            j($, D, U);
          };
        }
        function R(U, j, $, D, G, Z) {
          function le(qe) {
            if (qe !== void 0 && typeof qe != "function") throw new TypeError("Function expected");
            return qe;
          }
          for (var fe, Q = D.kind, ue = Q === "getter" ? "get" : Q === "setter" ? "set" : "value", te = !j && U ? D.static ? U : U.prototype : null, V = j || (te ? Object.getOwnPropertyDescriptor(te, D.name) : {}), ae = !1, Ee = $.length - 1; Ee >= 0; Ee--) {
            var Le = {};
            for (var Fe in D) Le[Fe] = Fe === "access" ? {} : D[Fe];
            for (var Fe in D.access) Le.access[Fe] = D.access[Fe];
            Le.addInitializer = function(qe) {
              if (ae) throw new TypeError("Cannot add initializers after decoration has completed");
              Z.push(le(qe || null));
            };
            var ot = (0, $[Ee])(Q === "accessor" ? { get: V.get, set: V.set } : V[ue], Le);
            if (Q === "accessor") {
              if (ot === void 0) continue;
              if (ot === null || typeof ot != "object") throw new TypeError("Object expected");
              (fe = le(ot.get)) && (V.get = fe), (fe = le(ot.set)) && (V.set = fe), (fe = le(ot.init)) && G.unshift(fe);
            } else (fe = le(ot)) && (Q === "field" ? G.unshift(fe) : V[ue] = fe);
          }
          te && Object.defineProperty(te, D.name, V), ae = !0;
        }
        function F(U, j, $) {
          for (var D = arguments.length > 2, G = 0; G < j.length; G++) $ = D ? j[G].call(U, $) : j[G].call(U);
          return D ? $ : void 0;
        }
        function C(U) {
          return typeof U == "symbol" ? U : "".concat(U);
        }
        function I(U, j, $) {
          return typeof j == "symbol" && (j = j.description ? "[".concat(j.description, "]") : ""), Object.defineProperty(U, "name", { configurable: !0, value: $ ? "".concat($, " ", j) : j });
        }
        function O(U, j) {
          if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(U, j);
        }
        function S(U, j, $, D) {
          return new ($ || ($ = Promise))(function(G, Z) {
            function le(ue) {
              try {
                Q(D.next(ue));
              } catch (te) {
                Z(te);
              }
            }
            function fe(ue) {
              try {
                Q(D.throw(ue));
              } catch (te) {
                Z(te);
              }
            }
            function Q(ue) {
              var te;
              ue.done ? G(ue.value) : (te = ue.value, te instanceof $ ? te : new $(function(V) {
                V(te);
              })).then(le, fe);
            }
            Q((D = D.apply(U, j || [])).next());
          });
        }
        function x(U, j) {
          var $, D, G, Z, le = { label: 0, sent: function() {
            if (1 & G[0]) throw G[1];
            return G[1];
          }, trys: [], ops: [] };
          return Z = { next: fe(0), throw: fe(1), return: fe(2) }, typeof Symbol == "function" && (Z[Symbol.iterator] = function() {
            return this;
          }), Z;
          function fe(Q) {
            return function(ue) {
              return function(te) {
                if ($) throw new TypeError("Generator is already executing.");
                for (; Z && (Z = 0, te[0] && (le = 0)), le; ) try {
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
              }([Q, ue]);
            };
          }
        }
        var P = Object.create ? function(U, j, $, D) {
          D === void 0 && (D = $);
          var G = Object.getOwnPropertyDescriptor(j, $);
          G && !("get" in G ? !j.__esModule : G.writable || G.configurable) || (G = { enumerable: !0, get: function() {
            return j[$];
          } }), Object.defineProperty(U, D, G);
        } : function(U, j, $, D) {
          D === void 0 && (D = $), U[D] = j[$];
        };
        function k(U, j) {
          for (var $ in U) $ === "default" || Object.prototype.hasOwnProperty.call(j, $) || P(j, U, $);
        }
        function B(U) {
          var j = typeof Symbol == "function" && Symbol.iterator, $ = j && U[j], D = 0;
          if ($) return $.call(U);
          if (U && typeof U.length == "number") return { next: function() {
            return U && D >= U.length && (U = void 0), { value: U && U[D++], done: !U };
          } };
          throw new TypeError(j ? "Object is not iterable." : "Symbol.iterator is not defined.");
        }
        function Y(U, j) {
          var $ = typeof Symbol == "function" && U[Symbol.iterator];
          if (!$) return U;
          var D, G, Z = $.call(U), le = [];
          try {
            for (; (j === void 0 || j-- > 0) && !(D = Z.next()).done; ) le.push(D.value);
          } catch (fe) {
            G = { error: fe };
          } finally {
            try {
              D && !D.done && ($ = Z.return) && $.call(Z);
            } finally {
              if (G) throw G.error;
            }
          }
          return le;
        }
        function ne() {
          for (var U = [], j = 0; j < arguments.length; j++) U = U.concat(Y(arguments[j]));
          return U;
        }
        function z() {
          for (var U = 0, j = 0, $ = arguments.length; j < $; j++) U += arguments[j].length;
          var D = Array(U), G = 0;
          for (j = 0; j < $; j++) for (var Z = arguments[j], le = 0, fe = Z.length; le < fe; le++, G++) D[G] = Z[le];
          return D;
        }
        function re(U, j, $) {
          if ($ || arguments.length === 2) for (var D, G = 0, Z = j.length; G < Z; G++) !D && G in j || (D || (D = Array.prototype.slice.call(j, 0, G)), D[G] = j[G]);
          return U.concat(D || Array.prototype.slice.call(j));
        }
        function pe(U) {
          return this instanceof pe ? (this.v = U, this) : new pe(U);
        }
        function ve(U, j, $) {
          if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
          var D, G = $.apply(U, j || []), Z = [];
          return D = {}, le("next"), le("throw"), le("return"), D[Symbol.asyncIterator] = function() {
            return this;
          }, D;
          function le(V) {
            G[V] && (D[V] = function(ae) {
              return new Promise(function(Ee, Le) {
                Z.push([V, ae, Ee, Le]) > 1 || fe(V, ae);
              });
            });
          }
          function fe(V, ae) {
            try {
              (Ee = G[V](ae)).value instanceof pe ? Promise.resolve(Ee.value.v).then(Q, ue) : te(Z[0][2], Ee);
            } catch (Le) {
              te(Z[0][3], Le);
            }
            var Ee;
          }
          function Q(V) {
            fe("next", V);
          }
          function ue(V) {
            fe("throw", V);
          }
          function te(V, ae) {
            V(ae), Z.shift(), Z.length && fe(Z[0][0], Z[0][1]);
          }
        }
        function Oe(U) {
          var j, $;
          return j = {}, D("next"), D("throw", function(G) {
            throw G;
          }), D("return"), j[Symbol.iterator] = function() {
            return this;
          }, j;
          function D(G, Z) {
            j[G] = U[G] ? function(le) {
              return ($ = !$) ? { value: pe(U[G](le)), done: !1 } : Z ? Z(le) : le;
            } : Z;
          }
        }
        function he(U) {
          if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
          var j, $ = U[Symbol.asyncIterator];
          return $ ? $.call(U) : (U = B(U), j = {}, D("next"), D("throw"), D("return"), j[Symbol.asyncIterator] = function() {
            return this;
          }, j);
          function D(G) {
            j[G] = U[G] && function(Z) {
              return new Promise(function(le, fe) {
                (function(Q, ue, te, V) {
                  Promise.resolve(V).then(function(ae) {
                    Q({ value: ae, done: te });
                  }, ue);
                })(le, fe, (Z = U[G](Z)).done, Z.value);
              });
            };
          }
        }
        function be(U, j) {
          return Object.defineProperty ? Object.defineProperty(U, "raw", { value: j }) : U.raw = j, U;
        }
        var ee = Object.create ? function(U, j) {
          Object.defineProperty(U, "default", { enumerable: !0, value: j });
        } : function(U, j) {
          U.default = j;
        };
        function ie(U) {
          if (U && U.__esModule) return U;
          var j = {};
          if (U != null) for (var $ in U) $ !== "default" && Object.prototype.hasOwnProperty.call(U, $) && P(j, U, $);
          return ee(j, U), j;
        }
        function se(U) {
          return U && U.__esModule ? U : { default: U };
        }
        function Ce(U, j, $, D) {
          if ($ === "a" && !D) throw new TypeError("Private accessor was defined without a getter");
          if (typeof j == "function" ? U !== j || !D : !j.has(U)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return $ === "m" ? D : $ === "a" ? D.call(U) : D ? D.value : j.get(U);
        }
        function Se(U, j, $, D, G) {
          if (D === "m") throw new TypeError("Private method is not writable");
          if (D === "a" && !G) throw new TypeError("Private accessor was defined without a setter");
          if (typeof j == "function" ? U !== j || !G : !j.has(U)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
          return D === "a" ? G.call(U, $) : G ? G.value = $ : j.set(U, $), $;
        }
        function Te(U, j) {
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
        var Pe = typeof SuppressedError == "function" ? SuppressedError : function(U, j, $) {
          var D = new Error($);
          return D.name = "SuppressedError", D.error = U, D.suppressed = j, D;
        };
        function Me(U) {
          function j($) {
            U.error = U.hasError ? new Pe($, U.error, "An error was suppressed during disposal.") : $, U.hasError = !0;
          }
          return function $() {
            for (; U.stack.length; ) {
              var D = U.stack.pop();
              try {
                var G = D.dispose && D.dispose.call(D.value);
                if (D.async) return Promise.resolve(G).then($, function(Z) {
                  return j(Z), $();
                });
              } catch (Z) {
                j(Z);
              }
            }
            if (U.hasError) throw U.error;
          }();
        }
        p.default = { __extends: v, __assign: y, __rest: b, __decorate: _, __param: E, __metadata: O, __awaiter: S, __generator: x, __createBinding: P, __exportStar: k, __values: B, __read: Y, __spread: ne, __spreadArrays: z, __spreadArray: re, __await: pe, __asyncGenerator: ve, __asyncDelegator: Oe, __asyncValues: he, __makeTemplateObject: be, __importStar: ie, __importDefault: se, __classPrivateFieldGet: Ce, __classPrivateFieldSet: Se, __classPrivateFieldIn: Te, __addDisposableResource: ge, __disposeResources: Me };
      } }, s = {};
      function u(d) {
        var p = s[d];
        if (p !== void 0) return p.exports;
        var h = s[d] = { exports: {} };
        return i[d](h, h.exports, u), h.exports;
      }
      u.d = function(d, p) {
        for (var h in p) u.o(p, h) && !u.o(d, h) && Object.defineProperty(d, h, { enumerable: !0, get: p[h] });
      }, u.o = function(d, p) {
        return Object.prototype.hasOwnProperty.call(d, p);
      }, u.r = function(d) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(d, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(d, "__esModule", { value: !0 });
      };
      var l = {};
      return function() {
        var d = l;
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
      }(), l;
    }();
  });
})(Tx);
var gg = Tx.exports;
const TH = () => /^((?!chrome|android).)*safari/i.test(navigator.userAgent), Px = (e) => Array.isArray(e) && e.every(
  (t) => typeof t == "object" && !(t instanceof Array)
), PH = (e) => Array.isArray(e) && e.every(
  (t) => Array.isArray(t)
), kH = (e) => Array.from(
  e.map((t) => Object.keys(t)).reduce((t, n) => /* @__PURE__ */ new Set([...t, ...n]), [])
), NH = (e, t) => {
  t = t || kH(e);
  let n = t, r = t;
  Px(t) && (n = t.map((s) => s.label), r = t.map((s) => s.key));
  const i = e.map((s) => r.map((u) => IH(u, s)));
  return [n, ...i];
}, IH = (e, t) => {
  const n = e.replace(/\[([^\]]+)]/g, ".$1").split(".").reduce(function(r, i, s, u) {
    const l = r[i];
    if (l == null)
      u.splice(1);
    else
      return l;
  }, t);
  return n === void 0 ? e in t ? t[e] : "" : n;
}, AH = (e) => typeof e > "u" || e === null ? "" : e, kx = (e, t = ",", n = '"') => e.filter((r) => r).map(
  (r) => r.map((i) => AH(i)).map((i) => `${n}${i}${n}`).join(t)
).join(`
`), RH = (e, t, n, r) => kx(t ? [t, ...e] : e, n, r), MH = (e, t, n, r) => kx(NH(e, t), n, r), DH = (e, t, n, r) => t ? `${t.join(n)}
${e}` : e.replace(/"/g, '""'), Nx = (e, t, n, r) => {
  if (Px(e)) return MH(e, t, n, r);
  if (PH(e)) return RH(e, t, n, r);
  if (typeof e == "string") return DH(e, t, n);
  throw new TypeError('Data should be a "String", "Array of arrays" OR "Array of objects" ');
}, Ix = (e, t, n, r, i) => {
  const s = Nx(e, n, r, i), u = TH() ? "application/csv" : "text/csv", l = new Blob([t ? "\uFEFF" : "", s], { type: u }), d = `data:${u};charset=utf-8,${t ? "\uFEFF" : ""}${s}`, p = window.URL || window.webkitURL;
  return typeof p.createObjectURL > "u" ? d : p.createObjectURL(l);
}, Ax = {
  data: Jn.oneOfType([Jn.string, Jn.array, Jn.func]).isRequired,
  headers: Jn.array,
  target: Jn.string,
  separator: Jn.string,
  filename: Jn.string,
  uFEFF: Jn.bool,
  onClick: Jn.func,
  asyncOnClick: Jn.bool,
  enclosingCharacter: Jn.string
}, Rx = {
  separator: ",",
  filename: "generatedBy_react-csv.csv",
  uFEFF: !0,
  asyncOnClick: !1,
  enclosingCharacter: '"'
}, LH = {
  target: "_blank"
};
class p1 extends J.Component {
  constructor(t) {
    super(t), this.state = {};
  }
  buildURI() {
    return Ix(...arguments);
  }
  componentDidMount() {
    const { data: t, headers: n, separator: r, enclosingCharacter: i, uFEFF: s, target: u, specs: l, replace: d } = this.props;
    this.state.page = window.open(
      this.buildURI(t, s, n, r, i),
      u,
      l,
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
ll(p1, "defaultProps", Object.assign(
  Rx,
  LH
)), ll(p1, "propTypes", Ax);
var Ou;
let FH = (Ou = class extends J.Component {
  constructor(t) {
    super(t), this.buildURI = this.buildURI.bind(this);
  }
  buildURI() {
    return Ix(...arguments);
  }
  /**
   * In IE11 this method will trigger the file download
   */
  handleLegacy(t, n = !1) {
    if (window.navigator.msSaveOrOpenBlob) {
      t.preventDefault();
      const {
        data: r,
        headers: i,
        separator: s,
        filename: u,
        enclosingCharacter: l,
        uFEFF: d
      } = this.props, p = n && typeof r == "function" ? r() : r;
      let h = new Blob([d ? "\uFEFF" : "", Nx(p, i, s, l)]);
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
      filename: i,
      uFEFF: s,
      children: u,
      onClick: l,
      asyncOnClick: d,
      enclosingCharacter: p,
      ...h
    } = this.props, v = typeof window > "u" ? "" : this.buildURI(t, s, n, r, p);
    return /* @__PURE__ */ M(
      "a",
      {
        download: i,
        ...h,
        ref: (y) => this.link = y,
        target: "_self",
        href: v,
        onClick: this.handleClick(),
        children: u
      }
    );
  }
}, ll(Ou, "defaultProps", Rx), ll(Ou, "propTypes", Ax), Ou);
const $H = FH, BH = "_input_1q0yw_1", WH = "_clearIcon_1q0yw_9", UH = "_clearIconFocused_1q0yw_21", jH = "_clearIconLast_1q0yw_33", zH = "_clearIconLastFocused_1q0yw_47", HH = "_clearRoundedIconLast_1q0yw_61", YH = "_clearRoundedIconLastFocused_1q0yw_79", $a = {
  input: BH,
  clearIcon: WH,
  clearIconFocused: UH,
  clearIconLast: jH,
  clearIconLastFocused: zH,
  clearRoundedIconLast: HH,
  clearRoundedIconLastFocused: YH
}, sd = M1((e, t) => {
  const {
    isPassword: n = !1,
    name: r,
    value: i,
    className: s,
    icon: u,
    label: l,
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
    fluid: R = !0,
    type: F = "text"
  } = e, C = Dn(null), [I, O] = at(!1), [S, x] = at(n ? "password" : "text"), [P, k] = at("eye slash");
  Kt(() => {
    h ? N.isEmpty(i) || p ? ((t || C).current.style.removeProperty("border-top-left-radius"), (t || C).current.style.removeProperty("border-bottom-left-radius"), (t || C).current.style.removeProperty("border-top-right-radius"), (t || C).current.style.removeProperty("border-bottom-right-radius"), (t || C).current.style.removeProperty("border-right"), n ? ((t || C).current.style.setProperty("border-top-left-radius", "1rem", "important"), (t || C).current.style.setProperty("border-bottom-left-radius", "1rem", "important")) : ((t || C).current.style.setProperty("border-radius", "1rem", "important"), (t || C).current.style.setProperty(
      "border-right",
      `1px solid ${I ? "var(--inputFocus)" : "var(--inputShader)"}`,
      "important"
    ))) : ((t || C).current.style.removeProperty("border-radius"), (t || C).current.style.setProperty("border-top-left-radius", "1rem", "important"), (t || C).current.style.setProperty("border-bottom-left-radius", "1rem", "important"), (t || C).current.style.setProperty("border-top-right-radius", "0", "important"), (t || C).current.style.setProperty("border-bottom-right-radius", "0", "important"), (t || C).current.style.setProperty("border-right", "0", "important")) : N.isEmpty(i) || p ? ((t || C).current.style.setProperty("border-radius", "0.25rem", "important"), n ? ((t || C).current.style.setProperty("border-right", "0", "important"), (t || C).current.style.setProperty("border-top-right-radius", "0", "important"), (t || C).current.style.setProperty("border-bottom-right-radius", "0", "important")) : (t || C).current.style.setProperty(
      "border-right",
      `1px solid ${I ? "var(--inputFocus)" : "var(--inputShader)"}`,
      "important"
    )) : ((t || C).current.style.setProperty("border-right", "0", "important"), (t || C).current.style.setProperty("border-top-right-radius", "0", "important"), (t || C).current.style.setProperty("border-bottom-right-radius", "0", "important")), N.isEmpty(b) || (_ === "left" ? ((t || C).current.style.setProperty("border-top-left-radius", "0", "important"), (t || C).current.style.setProperty("border-bottom-left-radius", "0", "important"), (t || C).current.style.setProperty("border-left-color", "transparent", "important")) : _ === "right" && ((t || C).current.style.setProperty("border-top-right-radius", "0", "important"), (t || C).current.style.setProperty("border-bottom-right-radius", "0", "important"), (t || C).current.style.setProperty("border-right-color", "transparent", "important"), (t || C).current.style.setProperty("border-top-left-radius", "0.25rem", "important"), (t || C).current.style.setProperty("border-bottom-left-radius", "0.25rem", "important"), (t || C).current.style.setProperty(
      "border-left",
      `1px solid ${I ? "var(--inputFocus)" : "var(--inputShader)"}`,
      "important"
    )));
  }, [i, I, b, n, p, h, t, C]);
  const B = (be) => {
    if (!N.isEmpty(i)) {
      const ee = { name: r, value: i.trim() };
      m({ ...be, target: ee }, ee);
    }
  }, Y = (be) => {
    const { key: ee } = be;
    ee === "Enter" && (be.preventDefault(), B(be), v && v(be));
  }, ne = () => {
    const be = S === "password", ee = be ? "text" : "password", ie = be ? "eye" : "eye slash";
    x(ee), k(ie);
  }, z = (be) => {
    const ee = { name: r, value: "" };
    e.fieldIndex !== void 0 && (ee.fieldIndex = e.fieldIndex), e.id !== void 0 && (ee.id = e.id), m({ ...be, target: ee }, ee), y && y();
  }, re = () => {
    O(!0);
  }, pe = (be) => {
    B(be), O(!1);
  }, ve = () => n ? I ? $a.clearIconFocused : $a.clearIcon : h ? I ? $a.clearRoundedIconLastFocused : $a.clearRoundedIconLast : I ? $a.clearIconLastFocused : $a.clearIconLast, Oe = N.omit(e, [
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
  ]), he = n || !N.isEmpty(u);
  return /* @__PURE__ */ de(
    In.Input,
    {
      ...Oe,
      className: `${$a.input} ${s || ""}`,
      disabled: p,
      onChange: m,
      name: r,
      required: E,
      label: l,
      placeholder: N.isEmpty(d) ? l : d,
      value: i,
      type: n ? S : F,
      ...he ? { iconPosition: "left" } : {},
      autoComplete: "off",
      fluid: R,
      onFocus: re,
      onBlur: pe,
      onKeyPress: Y,
      action: !0,
      children: [
        _ === "left" && !N.isEmpty(b) && /* @__PURE__ */ M(Br, { labeled: !0, ...b }),
        he && /* @__PURE__ */ M(We, { name: n ? "lock" : u }),
        /* @__PURE__ */ M("input", { ref: t || C }),
        _ === "right" ? /* @__PURE__ */ de(yo, { children: [
          !N.isEmpty(i) && !p && /* @__PURE__ */ M(ut, { className: ve(), icon: "cancel", onClick: z, tabIndex: -1 }),
          !N.isEmpty(b) && /* @__PURE__ */ M(Br, { labeled: !0, ...b })
        ] }) : !N.isEmpty(i) && !p && /* @__PURE__ */ M(ut, { className: ve(), icon: "cancel", onClick: z, tabIndex: -1 }),
        n && /* @__PURE__ */ M(
          ut,
          {
            className: h ? $a.clearRoundedIconLast : $a.clearIconLast,
            icon: P,
            onClick: ne,
            tabIndex: -1
          }
        )
      ]
    }
  );
});
sd.propTypes = {
  onChange: c.func,
  onKeyPress: c.func,
  onClear: c.func,
  name: c.string,
  placeholder: c.string,
  label: c.string,
  value: c.string,
  className: c.string,
  disabled: c.bool,
  icon: c.string,
  children: c.node,
  rounded: c.bool,
  dropdown: c.object,
  dropdownPosition: c.oneOf(["left", "right"]),
  fluid: c.bool,
  isPassword: c.bool,
  required: c.bool,
  type: c.string,
  fieldIndex: c.oneOfType([c.number, c.string]),
  id: c.oneOfType([c.number, c.string])
};
const qH = "_container_1uh18_1", VH = "_containerUser_1uh18_11", GH = "_containerLeft_1uh18_19", KH = "_containerRight_1uh18_25", ZH = "_headerTitle_1uh18_39", XH = "_containerCenter_1uh18_49", QH = "_tableContainer_1uh18_61", Ba = {
  container: qH,
  containerUser: VH,
  containerLeft: GH,
  containerRight: KH,
  headerTitle: ZH,
  containerCenter: XH,
  tableContainer: QH
}, Mx = ({
  data: e,
  columns: t,
  clickedRowColor: n,
  handlerTable: r,
  printHeader: i,
  searchParams: s,
  setSearchParams: u,
  dataHandler: l,
  sumData: d,
  headerDetail: p,
  customPrintHeader: h = []
}) => {
  const m = () => "@page { margin: 20px 20px 20px 20px !important; }";
  return /* @__PURE__ */ de("div", { className: Ba.container, children: [
    /* @__PURE__ */ M("style", { children: m() }),
    /* @__PURE__ */ M("div", { className: Ba.containerCenter, children: N.isEmpty(h) ? /* @__PURE__ */ de(Yn, { as: "h2", icon: !0, children: [
      /* @__PURE__ */ M("span", { children: i.company }),
      /* @__PURE__ */ M(Yn.Subheader, { children: i.title })
    ] }) : h }),
    /* @__PURE__ */ de("div", { className: Ba.containerUser, children: [
      /* @__PURE__ */ de("div", { className: Ba.containerLeft, children: [
        /* @__PURE__ */ de("div", { children: [
          /* @__PURE__ */ M("span", { className: Ba.headerTitle, children: "Usuario:" }),
          i.user
        ] }),
        /* @__PURE__ */ de("div", { children: [
          /* @__PURE__ */ M("span", { className: Ba.headerTitle, children: "Fecha:" }),
          Ar(String(/* @__PURE__ */ new Date()), !1, !1, !0)
        ] })
      ] }),
      /* @__PURE__ */ de("div", { className: Ba.containerRight, children: [
        /* @__PURE__ */ M("span", { className: Ba.headerTitle, children: "Total de filas:" }),
        !N.isEmpty(e) && e.length
      ] })
    ] }),
    /* @__PURE__ */ M("div", { className: Ba.tableContainer, children: /* @__PURE__ */ de(vt, { sortable: !0, celled: !0, striped: !0, children: [
      /* @__PURE__ */ M(jm, { isPDF: !0, columns: t, searchParams: s, setSearchParams: u, dataHandler: l }),
      /* @__PURE__ */ M(
        od,
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
Mx.propTypes = {
  data: c.array,
  searchParams: c.object,
  printHeader: c.object,
  columns: c.array,
  customPrintHeader: c.array,
  handlerTable: c.func,
  setSearchParams: c.func,
  dataHandler: c.func,
  clickedRowColor: c.string,
  sumData: c.object,
  headerDetail: c.object
};
const JH = "_container_17awp_1", eY = "_input1_17awp_9", tY = "_input2_17awp_15", $p = {
  container: JH,
  input1: eY,
  input2: tY
}, Dx = ({ label: e, value: t, onChange: n }) => {
  const [r, i] = at(""), [s, u] = at("");
  Kt(() => {
    if (N.isEmpty(t))
      i(""), u("");
    else {
      const d = t.split(",");
      i(d[0]), u(d[1]);
    }
  }, [t]);
  const l = (d) => {
    const p = N.get(d, "target.value", ""), h = N.get(d, "target.name", "");
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
    (!N.isEmpty(m) || !N.isEmpty(v)) && (y = `${m},${v}`), n(y);
  };
  return /* @__PURE__ */ de("div", { className: $p.container, children: [
    /* @__PURE__ */ M("div", { className: $p.input1, children: /* @__PURE__ */ M(
      In.Input,
      {
        type: "date",
        name: "date1",
        label: e,
        required: !0,
        placeholder: "Filtrar...",
        value: r,
        fluid: !0,
        onChange: (d) => {
          l(d);
        }
      }
    ) }),
    /* @__PURE__ */ M("div", { className: $p.input2, children: /* @__PURE__ */ M(
      In.Input,
      {
        label: " ",
        type: "date",
        name: "date2",
        placeholder: "Filtrar...",
        value: s,
        fluid: !0,
        onChange: (d) => {
          l(d);
        }
      }
    ) })
  ] });
};
Dx.propTypes = {
  label: c.string,
  value: c.string,
  /* 	className: PropTypes.string, */
  onChange: c.func
};
const nY = "_modal_16365_1", rY = "_modalHeader_16365_45", aY = "_modalFooter_16365_59", iY = "_inputChannel_16365_77", oY = "_positiveButton_16365_111", sY = "_negativeButton_16365_141", lY = "_gridColumnLeft_16365_183", cY = "_gridColumnRight_16365_195", da = {
  modal: nY,
  modalHeader: rY,
  modalFooter: aY,
  inputChannel: iY,
  positiveButton: oY,
  negativeButton: sY,
  gridColumnLeft: lY,
  gridColumnRight: cY
}, Lx = ({
  onClose: e,
  searchableItems: t,
  searchParams: n,
  setSearchParams: r,
  dataHandler: i,
  formData: s,
  setFormData: u,
  setIsClearButton: l,
  clearFilter: d,
  customSearchKeys: p
}) => {
  const h = (_, E) => {
    const R = N.get(_, "target.value", "");
    u({
      ...s,
      [E]: R
    });
  }, m = (_, E) => {
    u({
      ...s,
      [E]: _
    });
  }, v = ({ key: _, label: E, format: R }) => {
    const F = _.split(",").join(".");
    switch (R) {
      case "dateTime":
      case "date":
        return /* @__PURE__ */ M(
          Dx,
          {
            label: E,
            value: N.get(s, `${F}`, ""),
            className: da.inputChannel,
            onChange: (C) => {
              m(C, F);
            }
          },
          F
        );
      default:
        return /* @__PURE__ */ M(
          sd,
          {
            icon: "filter",
            label: E,
            required: !0,
            placeholder: "Filtrar...",
            value: N.get(s, `${F}`, ""),
            fluid: !0,
            className: da.inputChannel,
            onChange: (C) => {
              h(C, F);
            }
          },
          F
        );
    }
  }, y = () => {
    let _ = 1, E = [], R = [], F = "", I = [...t, ...p].map((O) => {
      let S = [];
      return N.get(O, "multipleColumns", !1) ? (O.multipleColumns.forEach((x) => {
        F = Si(x.key), S = [...S, { ...x, key: F }];
      }), S) : (F = Si(O.key), { ...O, key: F });
    });
    return I = N.flatten(I), I.forEach((O) => {
      _ += 1, (_ + 1) % 2 === 0 ? R = [...R, v(O)] : E = [...E, v(O)];
    }), /* @__PURE__ */ de(So, { columns: 2, children: [
      /* @__PURE__ */ M(Ga, { className: da.gridColumnLeft, children: E }),
      /* @__PURE__ */ M(Ga, { className: da.gridColumnRight, children: R })
    ] });
  }, b = () => {
    let _ = !1, E = {};
    if (Object.entries(s).forEach(([R, F]) => {
      N.isEmpty(F) || (_ = !0, E = { ...E, [R]: F });
    }), _) {
      const F = { ...N.pick(n, ["rows", "orderKey", "orderDir"]), page: 1, ...E };
      l(!0), r(F), i(F), e();
    }
  };
  return /* @__PURE__ */ de(ln, { className: da.modal, open: !0, closeIcon: !0, onClose: e, children: [
    /* @__PURE__ */ M(ln.Header, { className: da.modalHeader, children: /* @__PURE__ */ de("div", { children: [
      /* @__PURE__ */ M(We, { name: "filter" }),
      "Filtro Avanzado"
    ] }) }),
    /* @__PURE__ */ M(ln.Content, { scrolling: !0, children: y() }),
    /* @__PURE__ */ de(ln.Actions, { className: da.modalFooter, children: [
      /* @__PURE__ */ de(ut, { className: da.negativeButton, onClick: d, children: [
        /* @__PURE__ */ M(We, { name: "filter" }),
        "Limpiar"
      ] }),
      /* @__PURE__ */ de("div", { children: [
        /* @__PURE__ */ M(ut, { className: da.negativeButton, onClick: e, children: "Atrás" }),
        /* @__PURE__ */ M(ut, { className: da.positiveButton, onClick: b, children: "Filtrar" })
      ] })
    ] })
  ] });
};
Lx.propTypes = {
  onClose: c.func,
  searchableItems: c.array,
  customSearchKeys: c.array,
  searchParams: c.object,
  formData: c.object,
  setFormData: c.func,
  setIsClearButton: c.func,
  setSearchParams: c.func,
  dataHandler: c.func,
  clearFilter: c.func
};
const Bp = (e, t, n, r, i, s, u, l) => {
  switch (e) {
    case "timeBetween":
      return eE(t, r);
    case "date":
      return Ar(t, !1, !1, !1);
    case "time":
      return Ar(t, !1, !0, !1);
    case "dateTimeBar":
    case "dateTime":
      return Ar(t, !1, !1, !0);
    case "count":
      return t ? t.length : 0;
    case "boolean":
      return u ? t ? u.true : u.false : t ? "si" : "no";
    case "translate":
      return El(t, s);
    case "arrayTruncate":
      if (l && typeof l.key == "string" && N.includes(l.key, "[]?")) {
        const [d, p] = N.replace(l.key, "[]?", "").split("."), h = Array.isArray(n[d]) ? n[d] : [], m = N.map(h, (v) => v && v[p]);
        return N.join(N.filter(m, Boolean), ", ");
      }
      return Array.isArray(t) ? N.join(N.filter(t, Boolean), ", ") : t;
    default:
      return t;
  }
}, h1 = (e) => e && e.key ? `${e.key.split(".").join("")}_${e.format || ""}_${e.label || ""}` : null;
function uY(e, t, n) {
  let r = e, i = t;
  if (!N.isEmpty(n)) {
    const d = N.map(e, (p) => {
      const h = { [n.headerTitle]: Ht(n.headerTitle, p) };
      return N.map(Ht(n.dataDetail, p), (v) => ({ ...h, ...v }));
    });
    r = N.flatten(d), i = [
      {
        label: n.columnName,
        key: n.headerTitle
      },
      ...t
    ];
  }
  let s = [], u = [], l = [];
  for (const d of i)
    if (!d.hidden)
      if (d.twoLines) {
        const p = d.line1, h = d.line2;
        l = [...l, p, h];
      } else
        l = [...l, d];
  for (const d of r) {
    let p = {};
    for (const h of l)
      if (h.key && N.get(h, "canExcel", !0)) {
        let m = h.endDate;
        h.format === "timeBetween" && h.endDateKey ? m = Ht(h.endDateKey, d) : m && typeof m == "string" && (m = Ht(m, d));
        let v = "";
        const y = h1(h), b = h.key.split(",");
        if (b.length === 1)
          v = Ht(h.key, d), h.format === "dateTimeBar" && (v = Ht(h.endDateKey, d)), v = Bp(
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
          const _ = Ht(b[0], d);
          for (const E of _)
            if (v === "")
              v = Ht(b[1], E), v = Bp(
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
              let R = Ht(b[1], E);
              R = Bp(
                h.format,
                R,
                E,
                m,
                h.onKeyEndDate,
                h.translate,
                h.boolLabels,
                h
              ), (R == null || R === "") && (R = "null"), v = `${v}, ${R}`;
            }
          p = { ...p, [y]: v };
        }
      }
    s = [...s, p];
  }
  for (const d of l)
    d.key && N.get(d, "canExcel", !0) && (u = [...u, d]);
  return u = N.map(u, (d) => ({ label: d.label, key: h1(d) })), { dataExel: s, columnExel: u };
}
const dY = "_mainContainer_4n1za_1", fY = "_searchContainer_4n1za_19", pY = "_searchInput_4n1za_89", hY = "_searchWrapper_4n1za_99", mY = "_filterButton_4n1za_129", gY = "_addButton_4n1za_159", vY = "_defaultTopButton_4n1za_191", yY = "_printButton_4n1za_205", bY = "_exelButton_4n1za_219", _Y = "_clearButton_4n1za_241", wY = "_defaultTopInputContainerStyle_4n1za_255", EY = "_defaultTopDropdownContainerStyle_4n1za_267", xY = "_defaultLabelContainerStyle_4n1za_277", CY = "_topInputLabel_4n1za_287", OY = "_renderTopButtonsContainer_4n1za_299", SY = "_inputLabelCheck_4n1za_313", TY = "_labelCheck_4n1za_321", PY = "_addButtonContainer_4n1za_331", kY = "_addButtonsContainer_4n1za_343", NY = "_topButtonsDesktop_4n1za_359", IY = "_secondLine_4n1za_373", AY = "_hidePrintButtonsMobile_4n1za_389", RY = "_addButtonIcon_4n1za_553", MY = "_hideOnMobile_4n1za_595", _t = {
  mainContainer: dY,
  searchContainer: fY,
  searchInput: pY,
  searchWrapper: hY,
  filterButton: mY,
  addButton: gY,
  defaultTopButton: vY,
  printButton: yY,
  exelButton: bY,
  clearButton: _Y,
  defaultTopInputContainerStyle: wY,
  defaultTopDropdownContainerStyle: EY,
  defaultLabelContainerStyle: xY,
  topInputLabel: CY,
  renderTopButtonsContainer: OY,
  inputLabelCheck: SY,
  labelCheck: TY,
  addButtonContainer: PY,
  addButtonsContainer: kY,
  topButtonsDesktop: NY,
  secondLine: IY,
  hidePrintButtonsMobile: AY,
  addButtonIcon: RY,
  hideOnMobile: MY
}, Fx = ({
  print: e,
  searcher: t,
  columns: n,
  addButton: r,
  extraAddButtons: i,
  onAddButtonClick: s,
  topButtons: u,
  handlerTable: l,
  searchParams: d,
  setSearchParams: p,
  dataHandler: h,
  filteredPrintData: m,
  totalRows: v,
  customSearchKeys: y,
  clickedRowColor: b,
  sumData: _,
  isClearButton: E,
  setIsClearButton: R,
  headerDetail: F,
  searchRefresh: C,
  topPlaceClassName: I,
  hidePrintButtons: O = !1
}) => {
  const [S, x] = at(""), [P, k] = at([]), [B, Y] = at("all"), [ne, z] = at(!1), [re, pe] = at([]), [ve, Oe] = at([]), [he, be] = at(!1), [ee, ie] = at(!1), [se, Ce] = at({}), [Se, Te] = at(!1), ge = Dn(), Pe = Dn();
  Kt(() => {
    if (ee) {
      const te = uY(m, n, F);
      pe(te.dataExel), Oe(te.columnExel);
    }
    he && setTimeout(() => {
      Me(), be(!1);
    });
  }, [m]), Kt(() => {
    !N.isEmpty(re) && !N.isEmpty(ve) && Pe.current && Pe.current.link && ee && setTimeout(() => {
      Pe.current.link.click(), ie(!1);
    });
  }, [re, ve]), Kt(() => {
    const te = D();
    Te([...te, ...y]);
    let V = oW([...te, ...y], "label", "key");
    t.allEnabled && (V = [{ key: 0, text: "Todos", value: "all" }, ...V]), k(V), N.isEmpty(t.searchString) || (x(t.searchString), $({
      newField: t.field || "all",
      searchableI: te,
      newSearchQuery: t.searchString
    })), N.isEmpty(t.field) || Y(t.field);
  }, [n, y]), Kt(() => {
    x(N.isEmpty(t.searchString) ? "" : t.searchString), Y(N.isEmpty(t.field) ? "all" : t.field);
  }, [C]);
  const Me = gg.useReactToPrint({
    content: () => ge.current
  }), U = () => {
    if (typeof N.get(e, "onPrint", null) == "function")
      return e.onPrint();
    h({ ...d, rows: v, page: 1 }, !0), be(!0);
  }, j = () => {
    h({ ...d, rows: v, page: 1 }, !0), ie(!0);
  }, $ = ({ value: te = d, newField: V = B, searchableI: ae = !1, newSearchQuery: Ee = S }) => {
    let Le = Se;
    ae && (Le = ae);
    const Fe = N.pick(d, ["rows", "orderKey", "orderDir"]), ot = Si(V);
    let qe = Le.map((nt) => {
      let Ge = [], Ze = "";
      return N.get(nt, "multipleColumns", !1) ? (nt.multipleColumns.forEach((kt) => {
        Ze = Si(kt.fieldKey || kt.key), Ge = [...Ge, Ze];
      }), Ge) : (Ze = Si(nt.fieldKey || nt.key), Ze);
    });
    qe = N.flatten(qe);
    let Et = {
      ...Fe,
      page: 1,
      fields: qe
    };
    N.isEmpty(Ee) || (Et = {
      ...Et,
      [ot]: Ee
    }), N.isEmpty(te) && (Et = { ...Fe, page: 1, fields: qe }), p(Et), h(Et);
  }, D = () => {
    let te = [];
    return n.forEach((V) => {
      !V.hidden && !V.action && !V.multiple && (V.twoLines ? (N.get(V.line1, "canFilter", !0) && (te = [...te, V.line1]), N.get(V.line2, "canFilter", !0) && (te = [...te, V.line2])) : N.get(V, "canFilter", !0) && (te = [...te, V]));
    }), te;
  }, G = () => {
    $({});
  }, Z = jp(N.debounce(G, 1e3), [S]), le = () => {
    let te = null;
    return N.isEmpty(u) || (te = N.map(u, (V, ae) => {
      switch (V.componentType) {
        case "input":
          return /* @__PURE__ */ de(
            "div",
            {
              className: N.isEmpty(V.inputContainerStyle) ? _t.defaultTopInputContainerStyle : V.inputContainerStyle,
              children: [
                /* @__PURE__ */ M("span", { className: _t.topInputLabel, children: V.label }),
                /* @__PURE__ */ M(
                  sd,
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
          return /* @__PURE__ */ de(
            "div",
            {
              className: N.isEmpty(V.inputContainerStyle) ? _t.defaultTopInputContainerStyle : V.inputContainerStyle,
              children: [
                /* @__PURE__ */ M("span", { className: _t.topInputLabel, children: V.label }),
                /* @__PURE__ */ M(
                  In.Input,
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
          return /* @__PURE__ */ de(
            "div",
            {
              className: N.isEmpty(V.checkContainerStyle) ? _t.defaultTopInputContainerStyle : V.checkContainerStyle,
              children: [
                /* @__PURE__ */ M("span", { className: _t.labelCheck, children: V.leftLabel }),
                /* @__PURE__ */ M(rr, { toggle: V.toggle !== !1, checked: V.checked, disabled: V.disabled, onChange: V.onChange }),
                /* @__PURE__ */ M("span", { className: _t.inputLabelCheck, children: V.rightLabel })
              ]
            },
            ae
          );
        case "radio":
          return /* @__PURE__ */ de(
            "div",
            {
              className: N.isEmpty(V.checkContainerStyle) ? _t.defaultTopInputContainerStyle : V.checkContainerStyle,
              children: [
                /* @__PURE__ */ de("div", { children: [
                  /* @__PURE__ */ M(
                    Ai,
                    {
                      checked: V.checkedR,
                      disabled: V.disabled,
                      onChange: V.onChange
                    }
                  ),
                  /* @__PURE__ */ M("span", { className: _t.inputLabelCheck, children: V.rightLabel })
                ] }),
                /* @__PURE__ */ de("div", { children: [
                  /* @__PURE__ */ M(
                    Ai,
                    {
                      checked: V.checkedL,
                      disabled: V.disabled,
                      onChange: V.onChange
                    }
                  ),
                  /* @__PURE__ */ M("span", { className: _t.inputLabelCheck, children: V.leftLabel })
                ] })
              ]
            },
            ae
          );
        case "DropDown":
          return !V.hidden && /* @__PURE__ */ de(
            "div",
            {
              className: N.isEmpty(V.inputContainerStyle) ? _t.defaultTopDropdownContainerStyle : V.inputContainerStyle,
              children: [
                /* @__PURE__ */ M("span", { className: _t.topInputLabel, children: V.label }),
                /* @__PURE__ */ M(
                  xn,
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
          return /* @__PURE__ */ de(
            "div",
            {
              className: N.isEmpty(V.inputContainerStyle) ? _t.defaultLabelContainerStyle : V.inputContainerStyle,
              children: [
                /* @__PURE__ */ M("span", { className: _t.labelTitle, children: V.title }),
                /* @__PURE__ */ M("span", { className: _t.labelValue, children: V.value })
              ]
            },
            ae
          );
        case "custom":
          return /* @__PURE__ */ M("div", { children: V.content }, ae);
        default:
          return /* @__PURE__ */ M(
            "div",
            {
              className: N.isEmpty(V.buttonContainerStyle) ? _t.defaultLabelContainerStyle : V.buttonContainerStyle,
              children: /* @__PURE__ */ de(
                ut,
                {
                  className: N.isEmpty(V.className) ? _t.defaultTopButton : V.className,
                  disabled: N.get(V, "disabled", !1),
                  onClick: V.onClick,
                  children: [
                    !N.isEmpty(V.icon) && /* @__PURE__ */ M(We, { className: _t.addButtonIcon, name: V.icon }),
                    N.get(V, "content", "")
                  ]
                },
                ae
              )
            },
            ae
          );
      }
    })), /* @__PURE__ */ M("div", { className: _t.renderTopButtonsContainer, children: te });
  }, fe = () => {
    G(), Ce({}), R(!1);
  }, Q = () => {
    $({ value: {} });
  }, ue = (te) => {
    Z.cancel(), x(te);
  };
  return /* @__PURE__ */ de(yo, { children: [
    /* @__PURE__ */ de("div", { className: I ? `${_t.mainContainer} ${I}` : _t.mainContainer, children: [
      N.get(t, "searchable", !0) && /* @__PURE__ */ M(
        "div",
        {
          className: _t.searchContainer,
          style: {
            justifyContent: N.get(t, "searchPosition", "flex-start"),
            width: N.get(t, "width", "100%")
          },
          children: /* @__PURE__ */ de("div", { className: _t.searchWrapper, children: [
            !E && /* @__PURE__ */ M(
              sd,
              {
                className: _t.searchInput,
                name: "searchString",
                disabled: N.get(t, "searchDisabled", !1),
                onKeyUp: Z,
                onChange: (te) => {
                  ue(te.target.value);
                },
                placeholder: "Buscar",
                value: S,
                onClear: Q,
                dropdown: {
                  disabled: N.get(t, "searchDisabled", !1),
                  options: P,
                  name: "searchField",
                  onChange: (te, { value: V }) => {
                    Y(V), N.isEmpty(S) || $({ newField: V });
                  },
                  value: B
                }
              }
            ),
            N.get(t, "filterButton", !0) && /* @__PURE__ */ M(
              ut,
              {
                disabled: N.get(t, "searchDisabled", !1),
                className: `${_t.filterButton} ${N.get(t, "hideOnMobile", !1) ? _t.hideOnMobile : ""}`,
                onClick: () => {
                  z(!0);
                },
                children: /* @__PURE__ */ M(We, { className: _t.addButtonIcon, name: "filter" })
              }
            ),
            E && /* @__PURE__ */ de(ut, { className: _t.clearButton, onClick: fe, children: [
              /* @__PURE__ */ M(We, { name: "filter" }),
              "Limpiar"
            ] })
          ] })
        }
      ),
      !N.isEmpty(u) && /* @__PURE__ */ M("div", { className: _t.topButtonsDesktop, children: le() }),
      /* @__PURE__ */ de("div", { className: _t.addButtonsContainer, children: [
        !N.isEmpty(r) && /* @__PURE__ */ M("div", { className: _t.addButtonContainer, children: /* @__PURE__ */ de(
          ut,
          {
            className: _t.addButton,
            disabled: N.get(r, "disabled", !1),
            onClick: s || (() => l("Add", null)),
            children: [
              /* @__PURE__ */ M(We, { className: _t.addButtonIcon, name: N.get(r, "icon", "plus") }),
              N.get(r, "label", "")
            ]
          }
        ) }),
        i,
        N.get(e, "printable", !0) && /* @__PURE__ */ de("div", { className: O ? _t.hidePrintButtonsMobile : "", children: [
          N.get(e, "visiblePDF", !0) && /* @__PURE__ */ M(ut, { onClick: U, className: _t.printButton, primary: !0, icon: "print" }),
          N.get(e, "visibleExcel", !0) && /* @__PURE__ */ M(ut, { className: _t.exelButton, icon: "file excel", onClick: j })
        ] })
      ] })
    ] }),
    !N.isEmpty(u) && /* @__PURE__ */ M("div", { className: _t.secondLine, children: le() }),
    he ? /* @__PURE__ */ M("div", { style: { display: "none" }, children: /* @__PURE__ */ M("div", { ref: ge, children: /* @__PURE__ */ M(
      Mx,
      {
        data: m,
        headerDetail: F,
        columns: n,
        sumData: _,
        clickedRowColor: b,
        handlerTable: l,
        printHeader: N.get(e, "printHeader", {
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
    ee ? /* @__PURE__ */ M($H, { data: re, headers: ve, filename: N.get(e, "printHeader.title", "Título"), ref: Pe }) : void 0,
    ne && /* @__PURE__ */ M(
      Lx,
      {
        onClose: () => {
          z(!1);
        },
        customSearchKeys: y,
        searchableItems: Se,
        searchParams: d,
        setSearchParams: p,
        dataHandler: h,
        formData: se,
        setFormData: Ce,
        setIsClearButton: R,
        clearFilter: fe
      }
    )
  ] });
};
Fx.propTypes = {
  addButton: c.object,
  searchParams: c.object,
  searcher: c.object,
  sumData: c.object,
  totalRows: c.number,
  print: c.object,
  customSearchKeys: c.array,
  columns: c.array,
  topButtons: c.array,
  customPrintHeader: c.array,
  handlerTable: c.func,
  setSearchParams: c.func,
  dataHandler: c.func,
  filteredPrintData: c.array,
  clickedRowColor: c.string,
  isClearButton: c.bool,
  setIsClearButton: c.func,
  headerDetail: c.object,
  searchRefresh: c.bool,
  onAddButtonClick: c.func,
  topPlaceClassName: c.string,
  hidePrintButtons: c.bool,
  extraAddButtons: c.node
};
const DY = "_tableDesktopOnly_11faq_1", LY = "_cardsContainerMobile_11faq_21", FY = "_tableScroll_11faq_85", $Y = "_tableScrollWrapper_11faq_97", BY = "_tableWidthAuto_11faq_107", WY = "_stickyFooterTable_11faq_117", oo = {
  tableDesktopOnly: DY,
  cardsContainerMobile: LY,
  tableScroll: FY,
  tableScrollWrapper: $Y,
  tableWidthAuto: BY,
  stickyFooterTable: WY
}, UY = ({
  data: e = [],
  columns: t = [],
  topButtons: n = [],
  customSearchKeys: r = [],
  headerDetail: i = {},
  clickedRowColor: s = "hsl(215, 75%, 80%)",
  searcher: u = {},
  searchRefresh: l = !1,
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
  onAddButtonClick: R,
  filteredPrintData: F,
  checkAllData: C,
  onChangeDeselect: I = !0,
  sumData: O = {},
  handlerTable: S,
  dataHandler: x,
  handlerMultiple: P = () => {
  },
  cafParams: k,
  cafClearButton: B = !1,
  widthAuto: Y = !1,
  mobileCardView: ne = !1,
  cardLine1: z = [],
  cardLine2: re = [],
  cardLine3: pe = [],
  cardLine4: ve = [],
  onLoadMore: Oe = null,
  // Handler personalizado para scroll infinito
  isLoadingMore: he = !1,
  // Estado de carga para scroll infinito
  hasMore: be = null,
  // Si hay más datos (si es null, se calcula automáticamente)
  mergeConfig: ee = null,
  // Configuración para merge automático en scroll infinito
  topPlaceClassName: ie = "",
  // Clase CSS personalizada para TopPlace
  hidePrintButtons: se = !1,
  // Oculta los botones de imprimir PDF y Excel
  scrollBody: Ce = !1,
  // Envuelve la tabla en un contenedor con scroll para que solo el body haga scroll
  downloadFileFetcher: Se
}) => {
  const [Te, ge] = at({ rows: 10, page: 1 }), [Pe, Me] = at(!1), [U, j] = at([]), [$, D] = at([]), [G, Z] = at(!1), le = {
    searchable: !0,
    searchPosition: "flex-start",
    searchDisabled: !1,
    filterButton: !0,
    searchString: "",
    field: "",
    allEnabled: !0,
    width: "100%"
  };
  return Kt(() => {
    ge({ ...Te, ...m });
  }, []), Kt(() => {
    Z(B);
  }, [B]), Kt(() => {
    N.isEmpty(k) || N.isEqual(Te, k) || ge(k);
  }, [k]), /* @__PURE__ */ de(yo, { children: [
    p && /* @__PURE__ */ M(
      Fx,
      {
        data: e,
        columns: t,
        topButtons: n,
        searcher: { ...le, ...u },
        searchRefresh: l,
        addButton: E ? b : null,
        extraAddButtons: _,
        onAddButtonClick: R,
        searchParams: Te,
        setSearchParams: ge,
        handlerTable: S,
        dataHandler: x,
        filteredPrintData: F,
        totalRows: v,
        print: d,
        headerDetail: i,
        defaultParams: m,
        customSearchKeys: r,
        sumData: O,
        isClearButton: G,
        setIsClearButton: Z,
        topPlaceClassName: ie,
        hidePrintButtons: se
      }
    ),
    ne && /* @__PURE__ */ M("div", { className: oo.cardsContainerMobile, children: /* @__PURE__ */ M(
      od,
      {
        data: e,
        columns: t,
        headerDetail: i,
        sumData: O,
        clickedRowColor: s,
        handlerTable: S,
        handlerMultiple: P,
        onChangeDeselect: I,
        concatValue: U,
        setConcatValue: j,
        concatKeys: $,
        setConcatKeys: D,
        concatAll: Pe,
        setConcatAll: Me,
        checkAllData: C,
        setRowStyle: y,
        totalRows: v,
        mobileCardView: ne,
        cardLine1: z,
        cardLine2: re,
        cardLine3: pe,
        cardLine4: ve,
        dataHandler: x,
        searchParams: Te,
        setSearchParams: ge,
        onLoadMore: Oe,
        isLoadingMoreProp: he,
        hasMore: be,
        mergeConfig: ee,
        downloadFileFetcher: Se
      }
    ) }),
    /* @__PURE__ */ M("div", { className: `${Ce ? oo.tableScroll : ""} ${oo.tableScrollWrapper}`, children: /* @__PURE__ */ de(
      vt,
      {
        sortable: !0,
        celled: !0,
        striped: !0,
        compact: "very",
        className: `${ne ? oo.tableDesktopOnly : ""} ${Y ? oo.tableWidthAuto : ""}`,
        children: [
          /* @__PURE__ */ M(
            jm,
            {
              columns: t,
              searchParams: Te,
              setSearchParams: ge,
              totalRows: v,
              dataHandler: x,
              concatValue: U,
              setConcatValue: j,
              concatKeys: $,
              setConcatKeys: D,
              concatAll: Pe,
              setConcatAll: Me,
              widthAuto: Y
            }
          ),
          /* @__PURE__ */ M(
            od,
            {
              data: e,
              columns: t,
              headerDetail: i,
              sumData: O,
              clickedRowColor: s,
              handlerTable: S,
              handlerMultiple: P,
              onChangeDeselect: I,
              concatValue: U,
              setConcatValue: j,
              concatKeys: $,
              setConcatKeys: D,
              concatAll: Pe,
              setConcatAll: Me,
              checkAllData: C,
              setRowStyle: y,
              totalRows: v,
              mobileCardView: !1,
              cardLine1: z,
              cardLine2: re,
              cardLine3: pe,
              cardLine4: ve,
              downloadFileFetcher: Se
            }
          )
        ]
      }
    ) }),
    h && /* @__PURE__ */ M(vt, { className: `${ne ? oo.tableDesktopOnly : ""} ${oo.stickyFooterTable}`, children: /* @__PURE__ */ M(
      Sx,
      {
        visiblePagination: h,
        searchParams: Te,
        setSearchParams: ge,
        dataHandler: x,
        totalRows: v
      }
    ) })
  ] });
};
UY.propTypes = {
  columns: c.array,
  data: c.array,
  filteredPrintData: c.array,
  checkAllData: c.array,
  topButtons: c.array,
  customSearchKeys: c.array,
  clickedRowColor: c.string,
  visibleTopPlace: c.bool,
  visiblePagination: c.bool,
  onChangeDeselect: c.bool,
  cafClearButton: c.bool,
  searchRefresh: c.bool,
  addButton: c.object,
  extraAddButtons: c.node,
  showAddButton: c.bool,
  onAddButtonClick: c.func,
  defaultParams: c.object,
  print: c.object,
  searcher: c.object,
  sumData: c.object,
  cafParams: c.object,
  headerDetail: c.object,
  totalRows: c.number,
  handlerTable: c.func,
  dataHandler: c.func,
  handlerMultiple: c.func,
  setRowStyle: c.func,
  widthAuto: c.bool,
  mobileCardView: c.bool,
  cardLine1: c.array,
  cardLine2: c.array,
  cardLine3: c.array,
  cardLine4: c.array,
  onLoadMore: c.func,
  isLoadingMore: c.bool,
  hasMore: c.bool,
  mergeConfig: c.object,
  topPlaceClassName: c.string,
  hidePrintButtons: c.bool,
  scrollBody: c.bool,
  downloadFileFetcher: c.func
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
function jY(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function m1(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, $x(r.key), r);
  }
}
function zY(e, t, n) {
  return t && m1(e.prototype, t), n && m1(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function HY(e, t, n) {
  return (t = $x(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function ld() {
  return ld = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ld.apply(null, arguments);
}
function g1(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function xu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? g1(Object(n), !0).forEach(function(r) {
      HY(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : g1(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function YY(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function $x(e) {
  var t = YY(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
var Bx = { exports: {} };
(function(e) {
  typeof window > "u" || function(t) {
    var n = t.HTMLCanvasElement && t.HTMLCanvasElement.prototype, r = t.Blob && function() {
      try {
        return !!new Blob();
      } catch {
        return !1;
      }
    }(), i = r && t.Uint8Array && function() {
      try {
        return new Blob([new Uint8Array(100)]).size === 100;
      } catch {
        return !1;
      }
    }(), s = t.BlobBuilder || t.WebKitBlobBuilder || t.MozBlobBuilder || t.MSBlobBuilder, u = /^data:((.*?)(;charset=.*?)?)(;base64)?,/, l = (r || s) && t.atob && t.ArrayBuffer && t.Uint8Array && function(d) {
      var p, h, m, v, y, b, _, E, R;
      if (p = d.match(u), !p)
        throw new Error("invalid data URI");
      for (h = p[2] ? p[1] : "text/plain" + (p[3] || ";charset=US-ASCII"), m = !!p[4], v = d.slice(p[0].length), m ? y = atob(v) : y = decodeURIComponent(v), b = new ArrayBuffer(y.length), _ = new Uint8Array(b), E = 0; E < y.length; E += 1)
        _[E] = y.charCodeAt(E);
      return r ? new Blob([i ? _ : b], {
        type: h
      }) : (R = new s(), R.append(b), R.getBlob(h));
    };
    t.HTMLCanvasElement && !n.toBlob && (n.mozGetAsFile ? n.toBlob = function(d, p, h) {
      var m = this;
      setTimeout(function() {
        h && n.toDataURL && l ? d(l(m.toDataURL(p, h))) : d(m.mozGetAsFile("blob", p));
      });
    } : n.toDataURL && l && (n.msToBlob ? n.toBlob = function(d, p, h) {
      var m = this;
      setTimeout(function() {
        (p && p !== "image/png" || h) && n.toDataURL && l ? d(l(m.toDataURL(p, h))) : d(m.msToBlob(p));
      });
    } : n.toBlob = function(d, p, h) {
      var m = this;
      setTimeout(function() {
        d(l(m.toDataURL(p, h)));
      });
    })), e.exports ? e.exports = l : t.dataURLtoBlob = l;
  }(window);
})(Bx);
var v1 = Bx.exports, qY = function(t) {
  return typeof Blob > "u" ? !1 : t instanceof Blob || Object.prototype.toString.call(t) === "[object Blob]";
}, y1 = {
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
}, VY = typeof window < "u" && typeof window.document < "u", zi = VY ? window : {}, cd = function(t) {
  return t > 0 && t < 1 / 0;
}, GY = Array.prototype.slice;
function vg(e) {
  return Array.from ? Array.from(e) : GY.call(e);
}
var KY = /^image\/.+$/;
function Kh(e) {
  return KY.test(e);
}
function ZY(e) {
  var t = Kh(e) ? e.substr(6) : "";
  return t === "jpeg" && (t = "jpg"), ".".concat(t);
}
var Wx = String.fromCharCode;
function XY(e, t, n) {
  var r = "", i;
  for (n += t, i = t; i < n; i += 1)
    r += Wx(e.getUint8(i));
  return r;
}
function QY() {
  try {
    var e = document.createElement("canvas");
    e.width = 2, e.height = 1;
    var t = e.getContext("2d");
    if (!t) return !1;
    var n = t.createImageData(2, 1);
    n.data[0] = 12, n.data[1] = 23, n.data[2] = 34, n.data[3] = 255, n.data[4] = 45, n.data[5] = 56, n.data[6] = 67, n.data[7] = 255, t.putImageData(n, 0, 0);
    var r = t.getImageData(0, 0, 2, 1), i = [12, 23, 34, 255, 45, 56, 67, 255];
    return r.data.every(function(s, u) {
      return s === i[u];
    });
  } catch {
    return !1;
  }
}
var JY = zi.btoa;
function b1(e, t) {
  for (var n = [], r = 8192, i = new Uint8Array(e); i.length > 0; )
    n.push(Wx.apply(null, vg(i.subarray(0, r)))), i = i.subarray(r);
  return "data:".concat(t, ";base64,").concat(JY(n.join("")));
}
function e7(e) {
  var t = new DataView(e), n;
  try {
    var r, i, s;
    if (t.getUint8(0) === 255 && t.getUint8(1) === 216)
      for (var u = t.byteLength, l = 2; l + 1 < u; ) {
        if (t.getUint8(l) === 255 && t.getUint8(l + 1) === 225) {
          i = l;
          break;
        }
        l += 1;
      }
    if (i) {
      var d = i + 4, p = i + 10;
      if (XY(t, d, 4) === "Exif") {
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
function t7(e) {
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
var n7 = /\.\d*(?:0|9){12}\d*$/;
function _1(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
  return n7.test(e) ? Math.round(e * t) / t : e;
}
function yl(e) {
  var t = e.aspectRatio, n = e.height, r = e.width, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "none", s = cd(r), u = cd(n);
  if (s && u) {
    var l = n * t;
    (i === "contain" || i === "none") && l > r || i === "cover" && l < r ? n = r / t : r = n * t;
  } else s ? n = r / t : u && (r = n * t);
  return {
    width: r,
    height: n
  };
}
function r7(e) {
  for (var t = vg(new Uint8Array(e)), n = t.length, r = [], i = 0; i + 3 < n; ) {
    var s = t[i], u = t[i + 1];
    if (s === 255 && u === 218)
      break;
    if (s === 255 && u === 216)
      i += 2;
    else {
      var l = t[i + 2] * 256 + t[i + 3], d = i + l + 2, p = t.slice(i, d);
      r.push(p), i = d;
    }
  }
  return r.reduce(function(h, m) {
    return m[0] === 255 && m[1] === 225 ? h.concat(m) : h;
  }, []);
}
function a7(e, t) {
  var n = vg(new Uint8Array(e));
  if (n[2] !== 255 || n[3] !== 224)
    return e;
  var r = n[4] * 256 + n[5], i = [255, 216].concat(t, n.slice(4 + r));
  return new Uint8Array(i);
}
var i7 = zi.ArrayBuffer, Wp = zi.FileReader, so = zi.URL || zi.webkitURL, o7 = /\.\w+$/, s7 = zi.Compressor, l7 = /* @__PURE__ */ function() {
  function e(t, n) {
    jY(this, e), this.file = t, this.exif = [], this.image = new Image(), this.options = xu(xu({}, y1), n), this.aborted = !1, this.result = null, this.init();
  }
  return zY(e, [{
    key: "init",
    value: function() {
      var n = this, r = this.file, i = this.options;
      if (!qY(r)) {
        this.fail(new Error("The first argument must be a File or Blob object."));
        return;
      }
      var s = r.type;
      if (!Kh(s)) {
        this.fail(new Error("The first argument must be an image File or Blob object."));
        return;
      }
      if (!so || !Wp) {
        this.fail(new Error("The current browser does not support image compression."));
        return;
      }
      i7 || (i.checkOrientation = !1, i.retainExif = !1);
      var u = s === "image/jpeg", l = u && i.checkOrientation, d = u && i.retainExif;
      if (so && !l && !d)
        this.load({
          url: so.createObjectURL(r)
        });
      else {
        var p = new Wp();
        this.reader = p, p.onload = function(h) {
          var m = h.target, v = m.result, y = {}, b = 1;
          l && (b = e7(v), b > 1 && ld(y, t7(b))), d && (n.exif = r7(v)), l || d ? !so || b > 1 ? y.url = b1(v, s) : y.url = so.createObjectURL(r) : y.url = v, n.load(y);
        }, p.onabort = function() {
          n.fail(new Error("Aborted to read the image with FileReader."));
        }, p.onerror = function() {
          n.fail(new Error("Failed to read the image with FileReader."));
        }, p.onloadend = function() {
          n.reader = null;
        }, l || d ? p.readAsArrayBuffer(r) : p.readAsDataURL(r);
      }
    }
  }, {
    key: "load",
    value: function(n) {
      var r = this, i = this.file, s = this.image;
      s.onload = function() {
        QY() ? r.draw(xu(xu({}, n), {}, {
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
      }, zi.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(zi.navigator.userAgent) && (s.crossOrigin = "anonymous"), s.alt = i.name, s.src = n.url;
    }
  }, {
    key: "draw",
    value: function(n) {
      var r = this, i = n.naturalWidth, s = n.naturalHeight, u = n.rotate, l = u === void 0 ? 0 : u, d = n.scaleX, p = d === void 0 ? 1 : d, h = n.scaleY, m = h === void 0 ? 1 : h, v = this.file, y = this.image, b = this.options, _ = document.createElement("canvas"), E = _.getContext("2d"), R = Math.abs(l) % 180 === 90, F = (b.resize === "contain" || b.resize === "cover") && cd(b.width) && cd(b.height), C = Math.max(b.maxWidth, 0) || 1 / 0, I = Math.max(b.maxHeight, 0) || 1 / 0, O = Math.max(b.minWidth, 0) || 0, S = Math.max(b.minHeight, 0) || 0, x = i / s, P = b.width, k = b.height;
      if (R) {
        var B = [I, C];
        C = B[0], I = B[1];
        var Y = [S, O];
        O = Y[0], S = Y[1];
        var ne = [k, P];
        P = ne[0], k = ne[1];
      }
      F && (x = P / k);
      var z = yl({
        aspectRatio: x,
        width: C,
        height: I
      }, "contain");
      C = z.width, I = z.height;
      var re = yl({
        aspectRatio: x,
        width: O,
        height: S
      }, "cover");
      if (O = re.width, S = re.height, F) {
        var pe = yl({
          aspectRatio: x,
          width: P,
          height: k
        }, b.resize);
        P = pe.width, k = pe.height;
      } else {
        var ve = yl({
          aspectRatio: x,
          width: P,
          height: k
        }), Oe = ve.width;
        P = Oe === void 0 ? i : Oe;
        var he = ve.height;
        k = he === void 0 ? s : he;
      }
      P = Math.floor(_1(Math.min(Math.max(P, O), C))), k = Math.floor(_1(Math.min(Math.max(k, S), I)));
      var be = -P / 2, ee = -k / 2, ie = P, se = k, Ce = [];
      if (F) {
        var Se = 0, Te = 0, ge = i, Pe = s, Me = yl({
          aspectRatio: x,
          width: i,
          height: s
        }, {
          contain: "cover",
          cover: "contain"
        }[b.resize]);
        ge = Me.width, Pe = Me.height, Se = (i - ge) / 2, Te = (s - Pe) / 2, Ce.push(Se, Te, ge, Pe);
      }
      if (Ce.push(be, ee, ie, se), R) {
        var U = [k, P];
        P = U[0], k = U[1];
      }
      _.width = P, _.height = k, Kh(b.mimeType) || (b.mimeType = v.type);
      var j = "transparent";
      v.size > b.convertSize && b.convertTypes.indexOf(b.mimeType) >= 0 && (b.mimeType = "image/jpeg");
      var $ = b.mimeType === "image/jpeg";
      if ($ && (j = "#fff"), E.fillStyle = j, E.fillRect(0, 0, P, k), b.beforeDraw && b.beforeDraw.call(this, E, _), !this.aborted && (E.save(), E.translate(P / 2, k / 2), E.rotate(l * Math.PI / 180), E.scale(p, m), E.drawImage.apply(E, [y].concat(Ce)), E.restore(), b.drew && b.drew.call(this, E, _), !this.aborted)) {
        var D = function(Z) {
          if (!r.aborted) {
            var le = function(te) {
              return r.done({
                naturalWidth: i,
                naturalHeight: s,
                result: te
              });
            };
            if (Z && $ && b.retainExif && r.exif && r.exif.length > 0) {
              var fe = function(te) {
                return le(v1(b1(a7(te, r.exif), b.mimeType)));
              };
              if (Z.arrayBuffer)
                Z.arrayBuffer().then(fe).catch(function() {
                  r.fail(new Error("Failed to read the compressed image with Blob.arrayBuffer()."));
                });
              else {
                var Q = new Wp();
                r.reader = Q, Q.onload = function(ue) {
                  var te = ue.target;
                  fe(te.result);
                }, Q.onabort = function() {
                  r.fail(new Error("Aborted to read the compressed image with FileReader."));
                }, Q.onerror = function() {
                  r.fail(new Error("Failed to read the compressed image with FileReader."));
                }, Q.onloadend = function() {
                  r.reader = null;
                }, Q.readAsArrayBuffer(Z);
              }
            } else
              le(Z);
          }
        };
        _.toBlob ? _.toBlob(D, b.mimeType, b.quality) : D(v1(_.toDataURL(b.mimeType, b.quality)));
      }
    }
  }, {
    key: "done",
    value: function(n) {
      var r = n.naturalWidth, i = n.naturalHeight, s = n.result, u = this.file, l = this.image, d = this.options;
      if (so && l.src.indexOf("blob:") === 0 && so.revokeObjectURL(l.src), s)
        if (d.strict && !d.retainExif && s.size > u.size && d.mimeType === u.type && !(d.width > r || d.height > i || d.minWidth > r || d.minHeight > i || d.maxWidth < r || d.maxHeight < i))
          s = u;
        else {
          var p = u.name;
          p && s.type !== u.type && (p = p.replace(o7, ZY(s.type)));
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
      return window.Compressor = s7, e;
    }
    /**
     * Change the default options.
     * @param {Object} options - The new default options.
     */
  }, {
    key: "setDefaults",
    value: function(n) {
      ld(y1, n);
    }
  }]);
}();
//! moment.js locale configuration
//! locale : Spanish [es]
//! author : Julio Napurí : https://github.com/julionc
var w1 = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split(
  "_"
), c7 = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), Up = [
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
], E1 = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
Re.defineLocale("es", {
  months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
    "_"
  ),
  monthsShort: function(e, t) {
    return e ? /-MMM-/.test(t) ? c7[e.month()] : w1[e.month()] : w1;
  },
  monthsRegex: E1,
  monthsShortRegex: E1,
  monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
  monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
  monthsParse: Up,
  longMonthsParse: Up,
  shortMonthsParse: Up,
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
Re.locale("es");
const u7 = (e) => new Promise((t, n) => {
  new l7(e, {
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
}), d7 = (e = "") => {
  const t = N.split(e, ".");
  return N.toLower(t.length > 1 ? t.pop() : "");
}, f7 = (e = "") => {
  const t = String(e).match(/^data:([^;]+);base64,/i), n = t ? N.toLower(t[1]) : "";
  return N.startsWith(n, "image/") ? "image" : N.startsWith(n, "audio/") ? "audio" : N.startsWith(n, "video/") ? "video" : n === "application/pdf" || N.includes(n, "pdf") ? "pdf" : N.includes(n, "word") || N.includes(n, "officedocument.wordprocessingml") ? "doc" : N.includes(n, "excel") || N.includes(n, "spreadsheetml") ? "xls" : N.includes(n, "powerpoint") || N.includes(n, "presentationml") ? "ppt" : N.includes(n, "zip") || N.includes(n, "x-7z-compressed") || N.includes(n, "x-rar-compressed") ? "zip" : N.includes(n, "text/") ? "txt" : "file";
}, qs = (e = []) => ` ${N.join(e, " ")} `, es = (e, t) => {
  const n = ` ${N.trim(N.toLower(t))} `;
  return N.includes(e, n);
}, p7 = qs(["doc", "docx"]), h7 = qs(["xls", "xlsx", "csv"]), m7 = qs(["ppt", "pptx"]), g7 = qs(["zip", "rar", "7z"]), v7 = qs(["txt", "md", "rtf"]), y7 = qs(["jpg", "jpeg", "png", "webp", "apng", "avif", "gif", "svg"]), x1 = (e = "", t = "") => {
  const n = N.toLower(t);
  if (n && N.startsWith(n, "image/")) return "image";
  if (n && N.startsWith(n, "audio/")) return "audio";
  if (n && N.startsWith(n, "video/")) return "video";
  const r = d7(e);
  return r === "pdf" ? "pdf" : es(p7, r) ? "doc" : es(h7, r) ? "xls" : es(m7, r) ? "ppt" : es(g7, r) ? "zip" : es(v7, r) ? "txt" : es(y7, r) ? "image" : "file";
}, Cu = (e, t) => {
  if (!e)
    return "-";
  const n = Re(e);
  return n.isValid() ? n.format(t) : "-";
};
function b7(e) {
  if (Number.isNaN(Number(e))) return "";
  const t = Math.floor(e / 60), n = Math.floor(t / 60), r = Math.floor(n / 24), i = n - r * 24, s = t - i * 60 - r * 24 * 60;
  return i < 1 ? `${s}m` : r < 1 ? `${i}h ${s}m` : `${r}d ${i}h ${s}m`;
}
const _7 = "_header_19o3d_3", w7 = "_inputSearch_19o3d_17", E7 = "_totalTime_19o3d_31", x7 = "_spaceClass_19o3d_43", C7 = "_nuevo_19o3d_51", O7 = "_atender_19o3d_61", S7 = "_cliente_19o3d_71", T7 = "_alertBadge_19o3d_81", P7 = "_icon_19o3d_99", k7 = "_headerTable_19o3d_107", N7 = "_headerFooter_19o3d_119", I7 = "_cell_19o3d_129", A7 = "_container_19o3d_143", R7 = "_containerCenter_19o3d_155", M7 = "_containerLeft_19o3d_167", D7 = "_containerUs_19o3d_181", L7 = "_containerPrincipa_19o3d_195", F7 = "_fixedUserInfo_19o3d_207", $7 = "_containerRightUserRow_19o3d_217", B7 = "_containerTell_19o3d_229", W7 = "_containerRightUserRowContainer_19o3d_245", U7 = "_headerLabel_19o3d_257", j7 = "_pDate_19o3d_269", z7 = "_headerTitlesss_19o3d_289", H7 = "_headerTitlesssDate_19o3d_299", Y7 = "_containerTelu_19o3d_311", q7 = "_containerRight_19o3d_217", V7 = "_containerBottom_19o3d_335", G7 = "_containerLeftUser_19o3d_343", K7 = "_containerLeftGroups_19o3d_357", Z7 = "_containerRightUser_19o3d_217", X7 = "_headerTitle_19o3d_289", Q7 = "_tableContainer_19o3d_391", J7 = "_containerCont_19o3d_401", e8 = "_arrayCellContainer_19o3d_409", t8 = "_arrayCell_19o3d_409", n8 = "_DesConectadoText_19o3d_445", r8 = "_conectadoText_19o3d_455", a8 = "_cellButton_19o3d_465", i8 = "_cellArrayButton_19o3d_479", o8 = "_tableCell_19o3d_497", s8 = "_headerMenu_19o3d_509", l8 = "_headerMenuItem_19o3d_517", c8 = "_tableCellHeader_19o3d_525", u8 = "_tableCellHeaderCheck_19o3d_537", d8 = "_tableCellHeaderIcon_19o3d_545", f8 = "_tableCellPag_19o3d_553", p8 = "_ColorActive_19o3d_561", h8 = "_groupHover_19o3d_569", m8 = "_emptyChat_19o3d_579", g8 = "_ButtonEraser_19o3d_589", v8 = "_ButtonRoute_19o3d_603", y8 = "_ButtonEdit_19o3d_617", b8 = "_ButtonIcon_19o3d_631", _8 = "_ButtonLabel_19o3d_643", w8 = "_ButtonLink_19o3d_651", E8 = "_ButtonPedidos_19o3d_667", x8 = "_ButtonResend_19o3d_691", C8 = "_linkMap_19o3d_705", O8 = "_ButtonMap_19o3d_731", S8 = "_weightText_19o3d_787", T8 = "_positiveButton_19o3d_795", P8 = "_multipleActions_19o3d_811", k8 = "_positiveAddButton_19o3d_821", N8 = "_positiveDesButton_19o3d_837", I8 = "_negativeButton_19o3d_855", A8 = "_menuTable_19o3d_879", R8 = "_iconTable_19o3d_887", M8 = "_detalleLabel_19o3d_911", D8 = "_modalHeader_19o3d_921", L8 = "_codeMap_19o3d_933", F8 = "_paginationLabel_19o3d_941", $8 = "_paginationCell_19o3d_949", B8 = "_pagination_19o3d_941", W8 = "_itemCount_19o3d_971", U8 = "_labelColor_19o3d_979", j8 = "_blockString_19o3d_993", z8 = "_emptyDataIcon_19o3d_1009", H8 = "_IconDataBase_19o3d_1025", Y8 = "_labelDropdown_19o3d_1033", q8 = "_searchContainer_19o3d_1055", V8 = "_rowMiddle_19o3d_1065", G8 = "_printButton_19o3d_1081", K8 = "_exelButton_19o3d_1091", Z8 = "_printableButtons_19o3d_1099", X8 = "_searchInputStyle_19o3d_1109", rt = {
  header: _7,
  inputSearch: w7,
  totalTime: E7,
  spaceClass: x7,
  nuevo: C7,
  atender: O7,
  cliente: S7,
  alertBadge: T7,
  icon: P7,
  headerTable: k7,
  headerFooter: N7,
  cell: I7,
  container: A7,
  containerCenter: R7,
  containerLeft: M7,
  containerUs: D7,
  containerPrincipa: L7,
  fixedUserInfo: F7,
  containerRightUserRow: $7,
  containerTell: B7,
  containerRightUserRowContainer: W7,
  headerLabel: U7,
  pDate: j7,
  headerTitlesss: z7,
  headerTitlesssDate: H7,
  containerTelu: Y7,
  containerRight: q7,
  containerBottom: V7,
  containerLeftUser: G7,
  containerLeftGroups: K7,
  containerRightUser: Z7,
  headerTitle: X7,
  tableContainer: Q7,
  containerCont: J7,
  arrayCellContainer: e8,
  arrayCell: t8,
  DesConectadoText: n8,
  conectadoText: r8,
  cellButton: a8,
  cellArrayButton: i8,
  tableCell: o8,
  headerMenu: s8,
  headerMenuItem: l8,
  tableCellHeader: c8,
  tableCellHeaderCheck: u8,
  tableCellHeaderIcon: d8,
  tableCellPag: f8,
  ColorActive: p8,
  groupHover: h8,
  emptyChat: m8,
  ButtonEraser: g8,
  ButtonRoute: v8,
  ButtonEdit: y8,
  ButtonIcon: b8,
  ButtonLabel: _8,
  ButtonLink: w8,
  ButtonPedidos: E8,
  ButtonResend: x8,
  linkMap: C8,
  ButtonMap: O8,
  weightText: S8,
  positiveButton: T8,
  multipleActions: P8,
  positiveAddButton: k8,
  positiveDesButton: N8,
  negativeButton: I8,
  menuTable: A8,
  iconTable: R8,
  detalleLabel: M8,
  modalHeader: D8,
  codeMap: L8,
  paginationLabel: F8,
  paginationCell: $8,
  pagination: B8,
  itemCount: W8,
  labelColor: U8,
  blockString: j8,
  emptyDataIcon: z8,
  IconDataBase: H8,
  labelDropdown: Y8,
  searchContainer: q8,
  rowMiddle: V8,
  printButton: G8,
  exelButton: K8,
  printableButtons: Z8,
  searchInputStyle: X8
}, Ux = ({
  renderData: e,
  printHeader: t,
  printAction: n,
  printActionRetry: r,
  hiddenButon: i,
  clientName: s,
  clientPhone: u,
  platform: l,
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
  const R = Dn(null), [F, C] = at(0), I = F === 0 ? null : b7(F), O = E || N.isEmpty(s) && N.isEmpty(u) && N.isEmpty(d) && N.isEmpty(p);
  Kt(() => {
    n && S();
  }, [n]);
  const S = gg.useReactToPrint({
    content: () => {
      if (!R.current || !e.current) return null;
      const x = document.createElement("div"), P = R.current.cloneNode(!0), k = e.current.cloneNode(!0), B = document.createElement("div");
      B.classList.add(rt.tableContainer);
      const Y = document.createElement("div");
      return Y.classList.add(rt.containerCont), B.appendChild(Y).appendChild(k), x.appendChild(P).appendChild(B), x;
    },
    onBeforeGetContent: async () => {
      if (_) {
        const x = Math.floor(Re.duration(Re().diff(Re(b))).asSeconds());
        C(x);
      }
      await new Promise((x) => setTimeout(x, 100));
    },
    onAfterPrint: () => {
      r();
    }
  });
  return /* @__PURE__ */ de("div", { children: [
    !i && /* @__PURE__ */ M(ut, { onClick: S, className: rt.printButton, primary: !0, icon: "print" }),
    /* @__PURE__ */ M("div", { style: { display: "none" }, children: /* @__PURE__ */ de("div", { className: rt.container, ref: R, children: [
      /* @__PURE__ */ M("div", { className: rt.containerCenter, children: /* @__PURE__ */ de(Yn, { as: "h2", icon: !0, children: [
        /* @__PURE__ */ M("span", { className: rt.titleText, children: t.company }),
        /* @__PURE__ */ M(Yn.Subheader, { children: t.title }),
        (I || h || v) && /* @__PURE__ */ de(Yn.Subheader, { className: rt.totalInfoRow, children: [
          /* @__PURE__ */ M("span", { className: `${rt.tag} ${rt[h.toLowerCase().replace(/\s+/g, "")]}`, children: "Tab " }),
          h && /* @__PURE__ */ M("span", { className: `${rt.tag} ${rt[h.toLowerCase().replace(/\s+/g, "")]}`, children: h }),
          I && /* @__PURE__ */ M("span", { className: rt.spaceClass, children: I }),
          v && /* @__PURE__ */ M("span", { className: rt.alertBadge, style: { backgroundColor: m }, children: v })
        ] }),
        !N.isEmpty(t.subTitle) && /* @__PURE__ */ M(Yn.Subheader, { children: t.subTitle })
      ] }) }),
      !y && /* @__PURE__ */ de("div", { className: rt.containerBottom, children: [
        /* @__PURE__ */ de("div", { className: rt.containerLeft, children: [
          /* @__PURE__ */ de("div", { children: [
            /* @__PURE__ */ M("span", { className: rt.headerTitle, children: "Cliente:" }),
            " ",
            s
          ] }),
          N.isEmpty(d) && N.isEmpty(u) && /* @__PURE__ */ de("div", { className: rt.pDate, children: [
            /* @__PURE__ */ M("span", { className: rt.headerTitlesss, children: "Usuario:" }),
            /* @__PURE__ */ M("span", { children: t.user })
          ] })
        ] }),
        /* @__PURE__ */ de("div", { className: rt.containerLeftUser, children: [
          /* @__PURE__ */ de("div", { children: [
            /* @__PURE__ */ M("span", { className: rt.headerTitle, children: "Canal:" }),
            " ",
            l
          ] }),
          !N.isEmpty(d) && N.isEmpty(u) && N.isEmpty(p) && /* @__PURE__ */ de("div", { className: rt.pDate, children: [
            /* @__PURE__ */ M("span", { className: rt.headerTitlesss, children: "Usuario:" }),
            /* @__PURE__ */ M("span", { children: t.user })
          ] }),
          N.isEmpty(d) && !N.isEmpty(u) && N.isEmpty(p) && /* @__PURE__ */ de("div", { className: rt.pDate, children: [
            /* @__PURE__ */ M("span", { className: rt.headerTitlesss, children: "Usuario:" }),
            /* @__PURE__ */ M("span", { children: t.user })
          ] }),
          N.isEmpty(d) && N.isEmpty(u) && N.isEmpty(p) && /* @__PURE__ */ de("div", { className: rt.pDate, children: [
            /* @__PURE__ */ M("span", { className: rt.headerTitlesssDate, children: "Fecha:" }),
            /* @__PURE__ */ M("span", { children: Cu(/* @__PURE__ */ new Date(), "DD/MM/YYYY, hh:mm A") })
          ] })
        ] }),
        !N.isEmpty(u) && /* @__PURE__ */ de("div", { className: rt.containerTelu, children: [
          /* @__PURE__ */ de("div", { children: [
            /* @__PURE__ */ M("span", { className: rt.headerTitle, children: "Teléfono:" }),
            " ",
            u
          ] }),
          N.isEmpty(d) && !N.isEmpty(p) ? /* @__PURE__ */ de("div", { className: rt.pDate, children: [
            /* @__PURE__ */ M("span", { className: rt.headerTitlesss, children: "Usuario:" }),
            /* @__PURE__ */ M("span", { children: t.user })
          ] }) : N.isEmpty(d) && N.isEmpty(p) ? /* @__PURE__ */ de("div", { className: rt.pDate, children: [
            /* @__PURE__ */ M("span", { className: rt.headerTitlesssDate, children: "Fecha:" }),
            /* @__PURE__ */ M("span", { children: Cu(/* @__PURE__ */ new Date(), "DD/MM/YYYY, hh:mm A") })
          ] }) : null
        ] }),
        !N.isEmpty(d) && /* @__PURE__ */ de("div", { className: rt.containerLeftUser, children: [
          /* @__PURE__ */ de("div", { children: [
            /* @__PURE__ */ M("span", { className: rt.headerTitle, children: "Etiquetas:" }),
            N.map(d, (x, P) => /* @__PURE__ */ de("span", { className: rt.tag, children: [
              x.name,
              P < d.length - 1 && /* @__PURE__ */ M("span", { children: ", " })
            ] }, P))
          ] }),
          !N.isEmpty(p) && /* @__PURE__ */ de("div", { className: rt.pDate, children: [
            /* @__PURE__ */ M("span", { className: rt.headerTitlesss, children: "Usuario:" }),
            /* @__PURE__ */ M("span", { children: t.user })
          ] })
        ] }),
        !N.isEmpty(p) && /* @__PURE__ */ de("div", { className: rt.containerLeftUser, children: [
          /* @__PURE__ */ de("div", { className: rt.containerLeftGroups, children: [
            /* @__PURE__ */ M("span", { className: rt.headerTitle, children: "Grupo:" }),
            " ",
            p
          ] }),
          /* @__PURE__ */ de("div", { className: rt.pDate, children: [
            /* @__PURE__ */ M("span", { className: rt.headerTitlesssDate, children: "Fecha:" }),
            /* @__PURE__ */ M("span", { children: Cu(/* @__PURE__ */ new Date(), "DD/MM/YYYY, hh:mm A") })
          ] })
        ] })
      ] }),
      y && /* @__PURE__ */ M("div", { className: `${rt.fixedUserInfo} ${O ? rt.containerLeftUser : ""}`, children: /* @__PURE__ */ de("div", { className: rt.containerRightUserRowContainer, children: [
        /* @__PURE__ */ de("div", { className: rt.containerRightUserRow, children: [
          /* @__PURE__ */ M("span", { className: rt.headerLabel, children: "Usuario:" }),
          " ",
          /* @__PURE__ */ M("span", { children: t.user })
        ] }),
        /* @__PURE__ */ de("div", { className: rt.containerRightUserRow, children: [
          /* @__PURE__ */ M("span", { className: rt.headerLabel, children: "Fecha:" }),
          " ",
          /* @__PURE__ */ M("span", { children: Cu(/* @__PURE__ */ new Date(), "DD/MM/YYYY, hh:mm A") })
        ] })
      ] }) })
    ] }) })
  ] });
};
Ux.propTypes = {
  renderData: c.any,
  printHeader: c.object,
  hiddenButon: c.bool,
  printAction: c.bool,
  printActionRetry: c.func,
  clientName: c.string,
  clientPhone: c.string,
  platform: c.string,
  tags: c.array,
  group: c.any,
  state: c.string,
  alertName: c.string,
  alertColor: c.string,
  hideClientInfo: c.bool,
  createdDate: c.string,
  handleBeforeGetContent: c.bool,
  forceLeftUserInfo: c.bool
};
const Q8 = "_attachmentsContainer_qhj1t_1", J8 = "_attachment_qhj1t_1", eq = "_noShowInput_qhj1t_71", tq = "_image_qhj1t_79", nq = "_icon_qhj1t_93", rq = "_fileButton_qhj1t_111", aq = "_fileButtonLabel_qhj1t_159", iq = "_fixedIcon_qhj1t_179", oq = "_stateIndicator_qhj1t_195", sq = "_rounded_qhj1t_241", lq = "_roundedImage_qhj1t_249", cq = "_printImageWrapper_qhj1t_259", uq = "_printImageOnly_qhj1t_283", On = {
  attachmentsContainer: Q8,
  attachment: J8,
  noShowInput: eq,
  image: tq,
  icon: nq,
  fileButton: rq,
  fileButtonLabel: aq,
  fixedIcon: iq,
  stateIndicator: oq,
  rounded: sq,
  roundedImage: lq,
  printImageWrapper: cq,
  printImageOnly: uq
}, C1 = {
  pdf: "file pdf",
  doc: "file word",
  xls: "file excel",
  ppt: "file powerpoint",
  zip: "file archive",
  txt: "file text",
  audio: "music",
  video: "video",
  file: "file outline"
}, O1 = {
  pdf: "red",
  doc: "blue",
  xls: "green",
  ppt: "orange",
  zip: "grey",
  txt: "grey",
  audio: "teal",
  video: "purple",
  file: "grey"
}, jx = ({
  downloadFileFetcher: e,
  images: t = [],
  setImages: n,
  imagesD: r = [],
  setImagesD: i = () => {
  },
  multiple: s = !1,
  disabled: u = !1,
  width: l = 3,
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
  emptyIcon: R = "image outline",
  companyName: F,
  userNames: C,
  clientName: I,
  clientPhone: O,
  platformName: S,
  tags: x = [],
  groupName: P
}) => {
  const [k, B] = at([]), [Y, ne] = at({ open: !1, selectedImage: null }), [z, re] = at(0), [pe, ve] = at(!1), Oe = Dn(null), he = Dn([]), be = Dn(null);
  Kt(() => {
    !N.isEmpty(t) && !N.isEqual(he.current, t) ? (async () => {
      const fe = await Promise.all(
        N.map(t, async (Q, ue) => {
          const te = String(Q).startsWith("data:"), V = String(Q).match(/^(http(?!s?:image)|image)/gi) === null && !te;
          let ae = Q;
          V && e && (ae = await e({ uri: Q }));
          let Ee = "file", Le = "archivo";
          if (te)
            Ee = f7(String(Q)), k[ue] && k[ue].name && k[ue].name !== "archivo" && (Le = k[ue].name);
          else if (typeof Q == "string") {
            const Fe = String(Q).split(/[?#]/)[0];
            Ee = Fe.match(/\.(jpg|jpeg|png|webp|apng|avif|gif|svg)$/i) ? "image" : x1(Fe);
            try {
              const qe = decodeURIComponent(Fe);
              qe.includes("/") && (Le = qe.substring(qe.lastIndexOf("/") + 1));
            } catch {
              Le = "archivo";
            }
          }
          return {
            link: ae,
            type: Ee,
            isLocal: te,
            name: Le || "archivo",
            mime: ""
          };
        })
      );
      B(fe), he.current = t;
    })() : N.isEmpty(t) && (B([]), he.current = []);
  }, [t, e]);
  const ee = () => {
    Oe.current.click();
  }, ie = (fe) => new Promise((Q) => {
    const ue = new FileReader();
    ue.onloadend = () => Q(ue.result), ue.readAsDataURL(fe);
  }), se = async (fe) => {
    fe.preventDefault();
    let Q = s ? [...t] : [], ue = s ? [...k] : [];
    for (const te of fe.target.files) {
      const V = te.type.startsWith("image/"), ae = (_ === "image" || _ === "file") && V;
      let Ee;
      if (ae) {
        const Fe = await u7(te);
        Ee = await ie(Fe);
      } else
        Ee = await ie(te);
      const Le = ae ? "image" : x1(te.name, te.type);
      Q = [...Q, Ee], ue = [
        ...ue,
        {
          link: URL.createObjectURL(te),
          type: Le,
          isLocal: !0,
          name: te.name,
          mime: te.type
        }
      ];
    }
    B(ue), n(Q), Oe.current.value = null;
  }, Ce = (fe) => {
    const Q = N.reject(k, (ae) => k.indexOf(ae) === fe), ue = N.find(t, (ae) => t.indexOf(ae) === fe), te = N.reject(t, (ae) => t.indexOf(ae) === fe);
    let V = [];
    s ? (ue == null ? void 0 : ue.length) > 100 ? V = [...r] : V = [...r, ue] : ue && ue.length > 100 ? V = [...r] : V = ue ? [ue] : [], B(Q), n(te), i(V);
  }, Se = (fe, Q, ue = "archivo") => {
    if (Q === "video" || Q === "audio") {
      ne({ selectedImage: fe, open: !0 });
      return;
    }
    if (typeof fe == "string" && fe.startsWith("data:") && Q === "pdf") {
      const te = window.open("", "_blank");
      te ? fetch(fe).then((V) => V.blob()).then((V) => {
        const ae = URL.createObjectURL(V);
        te.location.href = ae, setTimeout(() => {
          te.document && (te.document.title = ue);
        }, 100);
      }) : window.open(fe, "_blank");
    } else {
      const te = document.createElement("a");
      te.href = fe, te.download = ue, te.target = "_blank", document.body.appendChild(te), te.click(), document.body.removeChild(te);
    }
  }, Te = () => {
    ne({ open: !1, selectedImage: null }), re(0);
  }, ge = () => re((fe) => fe <= 0 ? 270 : fe - 90), Pe = () => re((fe) => fe >= 270 ? 0 : fe + 90), Me = gg.useReactToPrint({
    content: () => be.current,
    onAfterPrint: () => {
      ve(!1);
    }
  });
  Kt(() => {
    pe && Me();
  }, [pe]);
  const U = () => {
    ve(!0);
  }, j = (fe) => {
    if (!b || b.length === 0) return null;
    const Q = b.find((te) => fe.includes(te.path));
    return Q && { present: "#a6d7b0", late: "#f4b988" }[Q.markedAs] || null;
  }, $ = (fe) => {
    const Q = N.find(k, { link: fe }), ue = (Q == null ? void 0 : Q.type) === "video", te = (Q == null ? void 0 : Q.type) === "audio";
    let V;
    ue || te ? V = {
      type: "video",
      width: 1280,
      height: 720,
      autoPlay: !0,
      sources: [
        {
          src: fe,
          type: (Q == null ? void 0 : Q.mime) || (te ? "audio/mp3" : "video/mp4")
        }
      ],
      downloadUrl: fe,
      downloadFilename: (Q == null ? void 0 : Q.name) !== "archivo" ? Q == null ? void 0 : Q.name : te ? "audio.mp3" : "video.mp4"
    } : V = {
      src: fe,
      downloadFilename: Q && Q.name !== "archivo" ? Q.name : "imagen.png"
    };
    const ae = N.filter(k, (Ee) => Ee.type === "image" && Ee.link !== fe);
    return [
      V,
      ...N.map(ae, (Ee) => ({
        src: Ee.link,
        downloadFilename: Ee.name && Ee.name !== "archivo" ? Ee.name : "imagen.png"
      }))
    ];
  }, D = (fe) => {
    const Q = N.map(fe, (V, ae) => {
      const Ee = j(t[ae] || V.link), Le = !u && !(y && !V.isLocal);
      return /* @__PURE__ */ de(
        "div",
        {
          className: `${On.attachment} ${m ? On.rounded : ""}`,
          style: { width: `${l}rem`, height: `${d}rem` },
          children: [
            Le && /* @__PURE__ */ M(
              We,
              {
                className: On.fixedIcon,
                name: "close",
                onClick: () => Ce(ae)
              }
            ),
            Ee && /* @__PURE__ */ M("div", { className: On.stateIndicator, style: { backgroundColor: Ee } }),
            V.type === "image" ? /* @__PURE__ */ M(
              br,
              {
                className: `${On.image} ${m ? On.roundedImage : ""}`,
                src: V.link,
                alt: V.name || "",
                onClick: () => ne({ selectedImage: V.link, open: !0 })
              }
            ) : /* @__PURE__ */ de(
              "button",
              {
                type: "button",
                className: On.fileButton,
                onClick: () => Se(V.link, V.type, V.name),
                "aria-label": `Vista previa ${V.name || "archivo"}`,
                children: [
                  /* @__PURE__ */ M(
                    We,
                    {
                      className: On.icon,
                      name: C1[V.type] || C1.file,
                      color: O1[V.type] || O1.file,
                      size: h
                    }
                  ),
                  !!V.name && V.name !== "archivo" && V.type !== "pdf" && V.type !== "doc" && /* @__PURE__ */ M("div", { className: On.fileButtonLabel, children: V.name })
                ]
              }
            )
          ]
        },
        ae + 1
      );
    }), ue = /* @__PURE__ */ de(
      ut,
      {
        className: `${On.attachment} ${m ? On.rounded : ""}`,
        icon: !0,
        primary: !0,
        onClick: ee,
        style: { width: `${l}rem`, height: `${d}rem` },
        children: [
          /* @__PURE__ */ M(We, { name: p, size: h }),
          /* @__PURE__ */ M(
            "input",
            {
              className: On.noShowInput,
              ref: Oe,
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
    return [(v || u ? !1 : !(!s && !N.isEmpty(fe))) && ue, ...Q];
  }, G = u && N.isEmpty(k), Z = N.find(k, { link: Y.selectedImage }), le = (Z == null ? void 0 : Z.type) === "video" || (Z == null ? void 0 : Z.type) === "audio";
  return /* @__PURE__ */ de("div", { className: On.attachmentsContainer, style: { height: `${d}rem` }, children: [
    /* @__PURE__ */ M(
      gx,
      {
        open: Y.open,
        plugins: le ? [Vh, c1] : [Vh, _x, Ox, c1],
        close: Te,
        slides: $(Y.selectedImage),
        zoom: le ? void 0 : { maxScale: 50, maxZoomPixelRatio: 10 },
        className: `rotated${z}`,
        controller: { closeOnBackdropClick: !0 },
        render: {
          buttonPrev: () => null,
          buttonNext: () => null
        },
        toolbar: {
          buttons: le ? ["download", "close"] : [
            /* @__PURE__ */ M("button", { type: "button", className: "yarl__button", onClick: ge, children: /* @__PURE__ */ M(We, { name: "undo", size: "large" }) }, "rotate-left"),
            /* @__PURE__ */ M("button", { type: "button", className: "yarl__button", onClick: Pe, children: /* @__PURE__ */ M(We, { name: "redo", size: "large" }) }, "rotate-right"),
            /* @__PURE__ */ M("button", { type: "button", className: "yarl__button", onClick: U, children: /* @__PURE__ */ M(We, { name: "print", size: "large" }) }, "print"),
            "zoom",
            "download",
            "fullscreen",
            "close"
          ]
        }
      }
    ),
    G ? /* @__PURE__ */ M("div", { className: `${On.attachment} ${m ? On.rounded : ""}`, style: { width: `${l}rem`, height: `${d}rem` }, children: /* @__PURE__ */ M(We, { className: On.icon, name: R, size: h, color: "grey" }) }) : D(k),
    /* @__PURE__ */ M("div", { ref: be, className: On.printImageWrapper, children: !le && Y.selectedImage && /* @__PURE__ */ M(
      "img",
      {
        src: Y.selectedImage,
        alt: "Imagen para imprimir",
        className: On.printImageOnly,
        style: { transform: `rotate(${z}deg)` }
      }
    ) }),
    /* @__PURE__ */ M(
      Ux,
      {
        hiddenButon: !0,
        printAction: pe,
        printActionRetry: () => {
          ve(!1);
        },
        printHeader: {
          company: F,
          user: C,
          title: "Impresión de Imagen"
        },
        clientName: I,
        clientPhone: O,
        platform: S,
        tags: x,
        group: P,
        renderData: be,
        hideClientInfo: !1
      }
    )
  ] });
};
jx.propTypes = {
  downloadFileFetcher: c.func,
  images: c.array,
  setImages: c.func,
  imagesD: c.array,
  setImagesD: c.func,
  multiple: c.bool,
  disabled: c.bool,
  rounded: c.bool,
  width: c.number,
  height: c.number,
  icon: c.string,
  iconSize: c.string,
  showMode: c.bool,
  noremovesaved: c.bool,
  states: c.array,
  type: c.oneOf(["image", "file"]),
  accept: c.string,
  emptyIcon: c.string,
  companyName: c.string,
  userNames: c.string,
  clientName: c.string,
  clientPhone: c.string,
  platformName: c.string,
  tags: c.array,
  groupName: c.string
};
function dq({ chats: e, history: t, company: n, user: r }) {
  const i = e.currentChatId || t.currentChatId, s = [...e.chats, ...t.chats], u = N.find(s, (l) => l.id === i) || {};
  return {
    companyName: n.name,
    userNames: r.name,
    clientName: N.get(u, "contact.name", ""),
    clientPhone: N.get(u, "contact.phone", ""),
    platformName: N.get(u, "channel.label", ""),
    tags: N.get(u, "tags", []),
    groupName: N.get(u, "group.name", "")
  };
}
const kG = wI(dq)(jx), fq = "_text_vzm0k_1", pq = {
  text: fq
}, Al = ({ children: e = "", className: t, as: n, href: r, disabled: i = !1, style: s, withMarkdown: u = !1, onClick: l = () => {
} }) => {
  const d = (h) => {
    const m = /(\*[^*]+\*|_[^_]+_|~[^~]+~|`[^`]+`)/g;
    return h.split(m).map((y, b) => y.startsWith("*") && y.endsWith("*") ? /* @__PURE__ */ M("strong", { style: { fontWeight: "bolder" }, children: y.slice(1, -1) }, b) : y.startsWith("_") && y.endsWith("_") ? /* @__PURE__ */ M("em", { style: { fontStyle: "italic" }, children: y.slice(1, -1) }, b) : y.startsWith("~") && y.endsWith("~") ? /* @__PURE__ */ M("del", { style: { textDecoration: "line-through" }, children: y.slice(1, -1) }, b) : /* @__PURE__ */ M("span", { children: y }, b));
  }, p = () => typeof e == "string" && u ? d(e) : e;
  return /* @__PURE__ */ M(
    Yn,
    {
      as: n || "p",
      className: `${pq.text} ${t || ""}`.trim(),
      href: r,
      disabled: i,
      style: s,
      onClick: l,
      children: p()
    }
  );
};
Al.propTypes = {
  children: c.oneOfType([c.node, c.string]),
  className: c.oneOfType([c.string, c.array]),
  as: c.string,
  href: c.string,
  disabled: c.bool,
  withMarkdown: c.bool,
  onClick: c.func,
  style: c.oneOfType([c.string, c.object])
};
function Zh() {
  return Zh = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Zh.apply(null, arguments);
}
function hq(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
var mq = bI, gq = function(t) {
  var n = J.useRef(t);
  return mq(function() {
    n.current = t;
  }), n;
}, S1 = function(t, n) {
  if (typeof t == "function") {
    t(n);
    return;
  }
  t.current = n;
}, vq = function(t, n) {
  var r = J.useRef();
  return J.useCallback(function(i) {
    t.current = i, r.current && S1(r.current, null), r.current = n, n && S1(n, i);
  }, [n]);
}, T1 = {
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
}, yq = function(t) {
  Object.keys(T1).forEach(function(n) {
    t.style.setProperty(n, T1[n], "important");
  });
}, P1 = yq, jn = null, k1 = function(t, n) {
  var r = t.scrollHeight;
  return n.sizingStyle.boxSizing === "border-box" ? r + n.borderSize : r - n.paddingSize;
};
function bq(e, t, n, r) {
  n === void 0 && (n = 1), r === void 0 && (r = 1 / 0), jn || (jn = document.createElement("textarea"), jn.setAttribute("tabindex", "-1"), jn.setAttribute("aria-hidden", "true"), P1(jn)), jn.parentNode === null && document.body.appendChild(jn);
  var i = e.paddingSize, s = e.borderSize, u = e.sizingStyle, l = u.boxSizing;
  Object.keys(u).forEach(function(v) {
    var y = v;
    jn.style[y] = u[y];
  }), P1(jn), jn.value = t;
  var d = k1(jn, e);
  jn.value = t, d = k1(jn, e), jn.value = "x";
  var p = jn.scrollHeight - i, h = p * n;
  l === "border-box" && (h = h + i + s), d = Math.max(h, d);
  var m = p * r;
  return l === "border-box" && (m = m + i + s), d = Math.min(m, d), [d, p];
}
var N1 = function() {
}, _q = function(t, n) {
  return t.reduce(function(r, i) {
    return r[i] = n[i], r;
  }, {});
}, wq = [
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
], Eq = !!document.documentElement.currentStyle, xq = function(t) {
  var n = window.getComputedStyle(t);
  if (n === null)
    return null;
  var r = _q(wq, n), i = r.boxSizing;
  if (i === "")
    return null;
  Eq && i === "border-box" && (r.width = parseFloat(r.width) + parseFloat(r.borderRightWidth) + parseFloat(r.borderLeftWidth) + parseFloat(r.paddingRight) + parseFloat(r.paddingLeft) + "px");
  var s = parseFloat(r.paddingBottom) + parseFloat(r.paddingTop), u = parseFloat(r.borderBottomWidth) + parseFloat(r.borderTopWidth);
  return {
    sizingStyle: r,
    paddingSize: s,
    borderSize: u
  };
}, Cq = xq;
function yg(e, t, n) {
  var r = gq(n);
  L.useLayoutEffect(function() {
    var i = function(u) {
      return r.current(u);
    };
    if (e)
      return e.addEventListener(t, i), function() {
        return e.removeEventListener(t, i);
      };
  }, []);
}
var Oq = function(t, n) {
  yg(document.body, "reset", function(r) {
    t.current.form === r.target && n(r);
  });
}, Sq = function(t) {
  yg(window, "resize", t);
}, Tq = function(t) {
  yg(document.fonts, "loadingdone", t);
}, Pq = ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"], kq = function(t, n) {
  var r = t.cacheMeasurements, i = t.maxRows, s = t.minRows, u = t.onChange, l = u === void 0 ? N1 : u, d = t.onHeightChange, p = d === void 0 ? N1 : d, h = hq(t, Pq), m = h.value !== void 0, v = L.useRef(null), y = vq(v, n), b = L.useRef(0), _ = L.useRef(), E = function() {
    var C = v.current, I = r && _.current ? _.current : Cq(C);
    if (I) {
      _.current = I;
      var O = bq(I, C.value || C.placeholder || "x", s, i), S = O[0], x = O[1];
      b.current !== S && (b.current = S, C.style.setProperty("height", S + "px", "important"), p(S, {
        rowHeight: x
      }));
    }
  }, R = function(C) {
    m || E(), l(C);
  };
  return L.useLayoutEffect(E), Oq(v, function() {
    if (!m) {
      var F = v.current.value;
      requestAnimationFrame(function() {
        var C = v.current;
        C && F !== C.value && E();
      });
    }
  }), Sq(E), Tq(E), /* @__PURE__ */ L.createElement("textarea", Zh({}, h, {
    onChange: R,
    ref: y
  }));
}, Nq = /* @__PURE__ */ L.forwardRef(kq);
const Iq = "_wrapper_1pssv_1", Aq = "_label_1pssv_11", Rq = "_required_1pssv_23", Mq = "_inputWrapper_1pssv_33", Dq = "_textarea_1pssv_43", Lq = "_iconsContainer_1pssv_73", Fq = "_icon_1pssv_73", $q = "_labelActions_1pssv_111", Bq = "_labelIcon_1pssv_123", Wq = "_error_1pssv_147", Uq = "_errorLabel_1pssv_157", jq = "_labelRow_1pssv_169", zq = "_charCount_1pssv_181", gr = {
  wrapper: Iq,
  label: Aq,
  required: Rq,
  inputWrapper: Mq,
  textarea: Dq,
  iconsContainer: Lq,
  icon: Fq,
  labelActions: $q,
  labelIcon: Bq,
  error: Wq,
  errorLabel: Uq,
  labelRow: jq,
  charCount: zq
}, Hq = ({
  value: e,
  name: t,
  label: n,
  onChange: r,
  disabled: i = !1,
  error: s,
  isPassword: u = !1,
  minRows: l = 1,
  maxRows: d,
  showRequired: p = !1,
  placeholder: h = "Escribe aquí...",
  showCount: m = !1,
  maxLength: v,
  className: y = ""
}) => {
  const [b, _] = at(!1), E = N.defaultTo(e, ""), R = !!(u && !b && i && E), F = R ? String(E).replace(/[^\n]/g, "•") : E, C = u && !b && !R ? { WebkitTextSecurity: "disc" } : void 0;
  return /* @__PURE__ */ de("div", { className: gr.wrapper, children: [
    n && /* @__PURE__ */ de("div", { className: gr.labelRow, children: [
      /* @__PURE__ */ de("span", { className: gr.label, children: [
        /* @__PURE__ */ M("span", { children: n }),
        p ? /* @__PURE__ */ M("span", { className: gr.required, children: " *" }) : null,
        u && /* @__PURE__ */ M(
          We,
          {
            name: b ? "eye slash" : "eye",
            className: gr.labelIcon,
            link: !0,
            title: b ? "Ocultar token" : "Ver token",
            "aria-label": b ? "Ocultar token" : "Ver token",
            onClick: () => _(!b)
          }
        )
      ] }),
      /* @__PURE__ */ M("div", { className: gr.labelActions, children: m && v && /* @__PURE__ */ de("span", { className: gr.charCount, children: [
        N.size(e),
        "/",
        v
      ] }) })
    ] }),
    /* @__PURE__ */ de("div", { className: gr.inputWrapper, children: [
      /* @__PURE__ */ M(
        Nq,
        {
          minRows: l,
          maxRows: d,
          name: t,
          className: N.join(N.compact([gr.textarea, s && gr.error, y]), " "),
          value: F,
          onChange: r,
          disabled: i,
          placeholder: h,
          style: C
        }
      ),
      /* @__PURE__ */ M("div", { className: gr.iconsContainer, children: e && !i && /* @__PURE__ */ M(
        We,
        {
          name: "close",
          className: gr.icon,
          onClick: () => r({ target: { name: t, value: "" } })
        }
      ) })
    ] }),
    s && /* @__PURE__ */ M(sr, { basic: !0, color: "red", className: gr.errorLabel, children: s })
  ] });
};
Hq.propTypes = {
  value: c.string,
  name: c.string,
  label: c.string,
  onChange: c.func,
  disabled: c.bool,
  error: c.string,
  isPassword: c.bool,
  showRequired: c.bool,
  minRows: c.oneOfType([c.number, c.string]),
  maxRows: c.oneOfType([c.number, c.string]),
  placeholder: c.string,
  showCount: c.bool,
  maxLength: c.number,
  className: c.string
};
const Yq = "_input_wfvqa_1", qq = "_clearIcon_wfvqa_9", Vq = "_clearIconFocused_wfvqa_21", Gq = "_clearIconLast_wfvqa_33", Kq = "_clearIconLastFocused_wfvqa_47", Zq = "_clearRoundedIconLast_wfvqa_61", Xq = "_clearRoundedIconLastFocused_wfvqa_79", Qq = "_labelRoot_wfvqa_119", Jq = "_labelRequired_wfvqa_131", eV = "_infoIcon_wfvqa_139", vr = {
  input: Yq,
  clearIcon: qq,
  clearIconFocused: Vq,
  clearIconLast: Gq,
  clearIconLastFocused: Kq,
  clearRoundedIconLast: Zq,
  clearRoundedIconLastFocused: Xq,
  labelRoot: Qq,
  labelRequired: Jq,
  infoIcon: eV
}, tV = M1((e, t) => {
  const {
    isPassword: n = !1,
    name: r,
    value: i,
    className: s,
    icon: u,
    label: l,
    infoLabel: d,
    hint: p,
    hintWide: h = !1,
    popupPosition: m = "top center",
    labelClassName: v = "",
    placeholder: y,
    disabled: b,
    rounded: _,
    onChange: E,
    onKeyPress: R,
    onClear: F,
    dropdown: C,
    dropdownPosition: I = "left",
    required: O = !1,
    fluid: S = !0,
    type: x = "text",
    hideClear: P = !1,
    hideDropdown: k = !1,
    customBorderRadius: B
  } = e, Y = B || (_ ? "1rem" : "0.25rem"), ne = B || "1rem", z = Dn(null), [re, pe] = at(!1), [ve, Oe] = at(n ? "password" : "text"), [he, be] = at("eye slash");
  Kt(() => {
    b ? ((t || z).current.style.setProperty("background-color", "hsl(0, 0%, 90%)", "important"), (t || z).current.style.setProperty("color", "hsl(0, 0%, 0%)", "important")) : ((t || z).current.style.removeProperty("background-color"), (t || z).current.style.removeProperty("cursor")), _ ? N.isEmpty(i) || b ? ((t || z).current.style.removeProperty("border-top-left-radius"), (t || z).current.style.removeProperty("border-bottom-left-radius"), (t || z).current.style.removeProperty("border-top-right-radius"), (t || z).current.style.removeProperty("border-bottom-right-radius"), (t || z).current.style.removeProperty("border-right"), n ? ((t || z).current.style.setProperty("border-top-left-radius", ne, "important"), (t || z).current.style.setProperty("border-bottom-left-radius", ne, "important")) : ((t || z).current.style.setProperty("border-radius", ne, "important"), (t || z).current.style.setProperty(
      "border-right",
      `1px solid ${re ? "var(--inputFocus)" : "var(--inputShader)"}`,
      "important"
    ))) : P && !n ? ((t || z).current.style.setProperty("border-radius", ne, "important"), (t || z).current.style.setProperty(
      "border-right",
      `1px solid ${re ? "var(--inputFocus)" : "var(--inputShader)"}`,
      "important"
    )) : ((t || z).current.style.removeProperty("border-radius"), (t || z).current.style.setProperty("border-top-left-radius", ne, "important"), (t || z).current.style.setProperty("border-bottom-left-radius", ne, "important"), (t || z).current.style.setProperty("border-top-right-radius", "0", "important"), (t || z).current.style.setProperty("border-bottom-right-radius", "0", "important"), (t || z).current.style.setProperty("border-right", "0", "important")) : N.isEmpty(i) || b ? ((t || z).current.style.setProperty("border-radius", Y, "important"), n ? ((t || z).current.style.setProperty("border-right", "0", "important"), (t || z).current.style.setProperty("border-top-right-radius", "0", "important"), (t || z).current.style.setProperty("border-bottom-right-radius", "0", "important")) : (t || z).current.style.setProperty(
      "border-right",
      `1px solid ${re ? "var(--inputFocus)" : "var(--inputShader)"}`,
      "important"
    )) : P && !n ? ((t || z).current.style.setProperty("border-radius", Y, "important"), (t || z).current.style.setProperty(
      "border-right",
      `1px solid ${re ? "var(--inputFocus)" : "var(--inputShader)"}`,
      "important"
    ), (t || z).current.style.setProperty("border-top-right-radius", Y, "important"), (t || z).current.style.setProperty("border-bottom-right-radius", Y, "important")) : ((t || z).current.style.setProperty("border-right", "0", "important"), (t || z).current.style.setProperty("border-top-right-radius", "0", "important"), (t || z).current.style.setProperty("border-bottom-right-radius", "0", "important")), N.isEmpty(C) || (I === "left" ? ((t || z).current.style.setProperty("border-top-left-radius", "0", "important"), (t || z).current.style.setProperty("border-bottom-left-radius", "0", "important"), (t || z).current.style.setProperty("border-left-color", "transparent", "important")) : I === "right" && ((t || z).current.style.setProperty("border-top-right-radius", "0", "important"), (t || z).current.style.setProperty("border-bottom-right-radius", "0", "important"), (t || z).current.style.setProperty("border-right-color", "transparent", "important")));
  }, [i, re, C, n, b, _, P, B, Y, ne, t, z]);
  const ee = (j) => {
    if (!N.isEmpty(i)) {
      const $ = { name: r, value: i.trim() };
      E({ ...j, target: $ }, $);
    }
  }, ie = (j) => {
    const { key: $ } = j;
    $ === "Enter" && (j.preventDefault(), ee(j), R && R(j));
  }, se = () => {
    const j = ve === "password", $ = j ? "text" : "password", D = j ? "eye" : "eye slash";
    Oe($), be(D);
  }, Ce = (j) => {
    const $ = { name: r, value: "" };
    e.fieldIndex !== void 0 && ($.fieldIndex = e.fieldIndex), e.id !== void 0 && ($.id = e.id), E({ ...j, target: $ }, $), F && F();
  }, Se = () => {
    pe(!0);
  }, Te = (j) => {
    ee(j), pe(!1);
  }, ge = () => n ? re ? vr.clearIconFocused : vr.clearIcon : _ ? re ? vr.clearRoundedIconLastFocused : vr.clearRoundedIconLast : re ? vr.clearIconLastFocused : vr.clearIconLast, Pe = () => {
    if (!l) return;
    if (J.isValidElement(l)) return l;
    const j = d || p;
    return /* @__PURE__ */ de("span", { className: `${vr.labelRoot} ${v}`.trim(), children: [
      /* @__PURE__ */ M("span", { children: l }),
      O ? /* @__PURE__ */ M("span", { className: vr.labelRequired, children: " *" }) : null,
      j ? /* @__PURE__ */ M(
        wr,
        {
          wide: h ? "very" : !0,
          hoverable: h,
          position: m,
          content: j,
          trigger: /* @__PURE__ */ M(We, { name: "info circle", className: vr.infoIcon })
        }
      ) : null
    ] });
  }, Me = N.omit(e, [
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
  ]), U = n || !N.isEmpty(u);
  return /* @__PURE__ */ de(
    In.Input,
    {
      ...Me,
      className: `${vr.input} ${b ? vr.disabled : ""} ${s || ""}`,
      disabled: b,
      onChange: E,
      name: r,
      label: Pe(),
      placeholder: y === "" ? "" : N.isEmpty(y) ? typeof l == "string" ? l : "" : y,
      value: i,
      type: n ? ve : x,
      ...U ? { iconPosition: "left" } : {},
      autoComplete: "off",
      fluid: S,
      onFocus: Se,
      onBlur: Te,
      onKeyPress: ie,
      action: !0,
      children: [
        I === "left" && !N.isEmpty(C) && !k && /* @__PURE__ */ M(Br, { labeled: !0, ...C }),
        U && /* @__PURE__ */ M(We, { name: n ? "lock" : u }),
        /* @__PURE__ */ M("input", { ref: t || z, required: O }),
        I === "right" ? /* @__PURE__ */ de(yo, { children: [
          !N.isEmpty(i) && !b && !P && /* @__PURE__ */ M(ut, { className: ge(), icon: "cancel", onClick: Ce, tabIndex: -1 }),
          !k && /* @__PURE__ */ M(Br, { labeled: !0, ...C })
        ] }) : !P && !N.isEmpty(i) && !b && /* @__PURE__ */ M(ut, { className: ge(), icon: "cancel", onClick: Ce, tabIndex: -1 }),
        n && /* @__PURE__ */ M(
          ut,
          {
            className: _ ? vr.clearRoundedIconLast : vr.clearIconLast,
            icon: he,
            onClick: se,
            tabIndex: -1
          }
        )
      ]
    }
  );
});
tV.propTypes = {
  onChange: c.func,
  onKeyPress: c.func,
  onClear: c.func,
  name: c.string,
  placeholder: c.string,
  label: c.oneOfType([c.string, c.node]),
  infoLabel: c.oneOfType([c.string, c.node]),
  hint: c.oneOfType([c.string, c.node]),
  hintWide: c.bool,
  popupPosition: c.string,
  labelClassName: c.string,
  value: c.string,
  className: c.string,
  disabled: c.bool,
  icon: c.string,
  children: c.node,
  rounded: c.bool,
  dropdown: c.object,
  dropdownPosition: c.oneOf(["left", "right"]),
  fluid: c.bool,
  isPassword: c.bool,
  required: c.bool,
  type: c.string,
  fieldIndex: c.oneOfType([c.number, c.string]),
  id: c.oneOfType([c.number, c.string]),
  hideClear: c.bool,
  hideDropdown: c.bool,
  customBorderRadius: c.string
};
const I1 = 49, nV = "_activeItem_1ays7_1", rV = "_item_1ays7_15", aV = "_itemMultiple_1ays7_39", iV = "_itemSelect_1ays7_49", oV = "_itemSelectMultiple_1ays7_73", sV = "_menu_1ays7_85", lV = "_titleMenuItem_1ays7_99", cV = "_titleMenu_1ays7_99", uV = "_activeMenuItem_1ays7_133", dV = "_menuItem_1ays7_163", fV = "_titleText_1ays7_183", pV = "_text_1ays7_197", hV = "_subText_1ays7_211", mV = "_icon_1ays7_225", gV = "_subIcon_1ays7_235", fn = {
  activeItem: nV,
  item: rV,
  itemMultiple: aV,
  itemSelect: iV,
  itemSelectMultiple: oV,
  menu: sV,
  titleMenuItem: lV,
  titleMenu: cV,
  activeMenuItem: uV,
  menuItem: dV,
  titleText: fV,
  text: pV,
  subText: hV,
  icon: mV,
  subIcon: gV
}, Bu = ({
  isExtended: e = !1,
  name: t = "",
  icon: n = "",
  path: r = "",
  type: i = "",
  subMenu: s = [],
  isActive: u = !1,
  allowNavigation: l = !1,
  onClick: d
}) => {
  const [p, h] = at(u), m = N.isEmpty(s) ? r : `${r}${s[0].path}`, v = (F, C) => {
    l ? d(F, C) : d && d();
  }, y = () => {
    N.isEmpty(s) ? v(m, i) : h((F) => !F);
  }, b = ({ placement: F, popper: C, reference: I }) => {
    if (N.isEmpty(s))
      return [];
    if (F === "right") {
      const O = C.height - I1, S = O / 2, x = I.y + O;
      let P = S - (e ? 0 : I1);
      return typeof window < "u" && x > window.innerHeight && (P -= window.innerHeight - x), [P, 0];
    }
    return [];
  }, _ = () => {
    if (N.isEmpty(s)) return null;
    const F = typeof window < "u" ? window.location.pathname : "";
    return N.map(s, (I) => {
      const O = `${r}${I.path}`, S = F === O;
      return /* @__PURE__ */ de(
        Tn.Item,
        {
          className: S ? fn.activeMenuItem : fn.menuItem,
          onClick: () => v(O, i),
          children: [
            !N.isEmpty(I.icon) && /* @__PURE__ */ M(We, { className: fn.subIcon, name: I.icon }),
            /* @__PURE__ */ M("span", { className: fn.subText, children: I.name })
          ]
        },
        I.id
      );
    });
  }, E = () => e ? p ? /* @__PURE__ */ de("div", { className: fn.itemSelectMultiple, children: [
    /* @__PURE__ */ M(Tn.Item, { className: fn.itemMultiple, onClick: y, children: /* @__PURE__ */ de("div", { className: fn.activeItem, children: [
      !N.isEmpty(n) && /* @__PURE__ */ M(We, { className: fn.icon, name: n }),
      /* @__PURE__ */ M(Al, { className: fn.text, children: t })
    ] }) }),
    _()
  ] }) : /* @__PURE__ */ M(Tn.Item, { className: u ? fn.itemSelect : fn.item, onClick: y, children: /* @__PURE__ */ de("div", { className: fn.activeItem, children: [
    !N.isEmpty(n) && /* @__PURE__ */ M(We, { className: fn.icon, name: n }),
    /* @__PURE__ */ M(Al, { className: fn.text, children: t })
  ] }) }) : /* @__PURE__ */ M(
    Tn.Item,
    {
      className: u ? fn.itemSelect : fn.item,
      onClick: () => v(m, i),
      children: /* @__PURE__ */ M("div", { className: fn.activeItem, children: !N.isEmpty(n) && /* @__PURE__ */ M(We, { className: fn.icon, name: n }) })
    }
  ), R = () => {
    N.isEmpty(s) && v(r, i);
  };
  return /* @__PURE__ */ M(
    wr,
    {
      className: fn.menu,
      on: "hover",
      hoverable: !0,
      position: "right center",
      pinned: !0,
      basic: !0,
      disabled: e,
      offset: b,
      trigger: E(),
      children: /* @__PURE__ */ M(wr.Content, { children: /* @__PURE__ */ de(Tn, { vertical: !0, children: [
        !e && /* @__PURE__ */ M(Tn.Item, { className: N.isEmpty(s) ? fn.titleMenu : fn.titleMenuItem, onClick: R, children: /* @__PURE__ */ M(Al, { className: fn.titleText, children: t }) }),
        _()
      ] }) })
    }
  );
};
Bu.propTypes = {
  isExtended: c.bool,
  name: c.string,
  icon: c.string,
  path: c.string,
  type: c.string,
  subMenu: c.array,
  isActive: c.bool,
  allowNavigation: c.bool,
  onClick: c.func
};
const vV = "_sideBar_wxxzs_1", yV = "_collapsedSidebar_wxxzs_13", bV = "_menuItems_wxxzs_25", _V = "_mobileItems_wxxzs_37", wV = "_divider_wxxzs_49", bl = {
  sideBar: vV,
  collapsedSidebar: yV,
  menuItems: bV,
  mobileItems: _V,
  divider: wV
}, EV = ({
  handleToggle: e,
  isExtended: t = !1,
  menu: n = [],
  isMobileOrTablet: r = !1,
  isVisible: i = !0,
  companyName: s = "",
  onNavigate: u,
  currentPath: l,
  isMobile: d = !1
}) => {
  const p = (m, v) => {
    v === "link" ? window.open(m, "_blank") : u ? u(m, v) : v === "menu" && typeof window < "u" && (window.location.pathname = m);
  }, h = () => {
    if (N.isEmpty(n)) return null;
    const m = l || (typeof window < "u" ? window.location.pathname : "");
    return N.map(n, (y) => {
      if (y.type === "divider") return /* @__PURE__ */ M("div", { className: bl.divider }, y.id);
      let b = m === y.path;
      if (!N.isEmpty(y.subMenu)) {
        const _ = N.map(y.subMenu, (E) => `${y.path}${E.path}`);
        b = N.includes(_, m);
      }
      return /* @__PURE__ */ M(
        Bu,
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
  return /* @__PURE__ */ de(
    Gi,
    {
      className: t ? bl.sideBar : bl.collapsedSidebar,
      as: Tn,
      direction: "left",
      animation: r ? "overlay" : "push",
      visible: i,
      vertical: !0,
      icon: !0,
      width: "wide",
      children: [
        d && s && /* @__PURE__ */ M(Bu, { isExtended: r ? !0 : t, allowNavigation: !1, path: null, name: s }),
        /* @__PURE__ */ M("div", { className: r ? bl.mobileItems : bl.menuItems, children: h() }),
        /* @__PURE__ */ M(
          Bu,
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
EV.propTypes = {
  handleToggle: c.func,
  isExtended: c.bool,
  isMobileOrTablet: c.bool,
  isVisible: c.bool,
  companyName: c.string,
  menu: c.array,
  onNavigate: c.func,
  currentPath: c.string,
  isMobile: c.bool
};
const xV = "_fullScreen_1o9pr_3", CV = "_large_1o9pr_11", OV = "_small_1o9pr_19", SV = "_tiny_1o9pr_27", TV = "_mini_1o9pr_35", PV = "_modalHeader_1o9pr_43", kV = "_tabsContainer_1o9pr_63", NV = "_modalContent_1o9pr_73", IV = "_modalContentNoFlex_1o9pr_91", AV = "_modalFooter_1o9pr_131", RV = "_iconHeader_1o9pr_145", MV = "_topEditButton_1o9pr_153", DV = "_topWatchButton_1o9pr_171", LV = "_topPrintButton_1o9pr_189", FV = "_positiveButton_1o9pr_221", $V = "_negativeButton_1o9pr_251", BV = "_disabled_1o9pr_281", WV = "_rowButton_1o9pr_295", UV = "_modal_1o9pr_43", jV = "_modalHeaderTitle_1o9pr_401", Nn = {
  fullScreen: xV,
  large: CV,
  small: OV,
  tiny: SV,
  mini: TV,
  modalHeader: PV,
  tabsContainer: kV,
  modalContent: NV,
  modalContentNoFlex: IV,
  modalFooter: AV,
  iconHeader: RV,
  topEditButton: MV,
  topWatchButton: DV,
  topPrintButton: LV,
  positiveButton: FV,
  negativeButton: $V,
  disabled: BV,
  rowButton: WV,
  modal: UV,
  modalHeaderTitle: jV
}, zV = "_divHeaderNav_7mcz0_1", HV = "_navButton_7mcz0_23", YV = "_errorsButon_7mcz0_49", qV = "_volatileError_7mcz0_93", VV = "_buttonContainer_7mcz0_181", GV = "_redButton_7mcz0_195", KV = "_active_7mcz0_233", ZV = "_moreWrapper_7mcz0_263", XV = "_moreButton_7mcz0_275", QV = "_moreDropdown_7mcz0_293", Ir = {
  divHeaderNav: zV,
  navButton: HV,
  errorsButon: YV,
  volatileError: qV,
  buttonContainer: VV,
  redButton: GV,
  active: KV,
  moreWrapper: ZV,
  moreButton: XV,
  moreDropdown: QV
}, zx = ({ handleStateHeader: e, stateHeader: t, buttons: n }) => {
  const [r, i] = at([]), [s, u] = at([]), [l, d] = at(!1), p = Dn(null), h = (y, b = !1) => {
    if (!p.current) return 0;
    const _ = document.createElement("button");
    _.className = b ? Ir.moreButton : Ir.navButton, _.style.cssText = "visibility: hidden; position: absolute; font-size: 16px; padding: 12px 20px; white-space: nowrap;", _.innerHTML = y, p.current.appendChild(_);
    const E = _.offsetWidth;
    return p.current.removeChild(_), E;
  }, m = () => {
    if (!p.current) return;
    const y = p.current.clientWidth;
    if (y === 0) return;
    const b = h("...");
    let _ = 0;
    const E = [], R = [], F = N.orderBy(n, ["order"], ["asc"]), C = F.length;
    N.forEach(F, (I, O) => {
      const S = `<i class="icon ${I.icon}"></i> ${I.label} ${I.count ? `(${I.count})` : ""}`, x = h(S), k = O === C - 1 ? 0 : b;
      _ + x + k <= y - 10 ? (_ += x, E.push(I)) : R.push(I);
    }), i(E), u(R);
  };
  Kt(() => {
    const y = new ResizeObserver(m);
    return p.current && y.observe(p.current), () => y.disconnect();
  }, [n]), Kt(() => {
    const y = (b) => {
      p.current && !p.current.contains(b.target) && d(!1);
    };
    return document.addEventListener("mousedown", y), () => document.removeEventListener("mousedown", y);
  }, []);
  const v = (y, b = !1) => {
    const _ = N.filter([
      Ir.navButton,
      t === y.state && Ir.active,
      y.errors && Ir.errorsButon,
      y.color === "red" && Ir.redButton
    ]).join(" ");
    return /* @__PURE__ */ de("div", { className: Ir.buttonContainer, children: [
      /* @__PURE__ */ de(
        ut,
        {
          disabled: !!y.disabled,
          className: _,
          onClick: () => {
            y.disabled || (y.onClick ? y.onClick() : e(y.state), b && d(!1));
          },
          children: [
            /* @__PURE__ */ M(We, { name: y.icon }),
            y.label,
            " ",
            y.count !== void 0 && `(${y.count})`
          ]
        }
      ),
      !N.isEmpty(y.error) && /* @__PURE__ */ M("div", { className: Ir.volatileError, children: "Campos Requeridos" })
    ] }, y.key);
  };
  return /* @__PURE__ */ de("div", { className: Ir.divHeaderNav, ref: p, children: [
    N.map(r, (y) => v(y)),
    !N.isEmpty(s) && /* @__PURE__ */ de("div", { className: Ir.moreWrapper, children: [
      /* @__PURE__ */ M(
        ut,
        {
          className: Ir.moreButton,
          onClick: () => d(!l),
          children: "..."
        }
      ),
      l && /* @__PURE__ */ M("div", { className: Ir.moreDropdown, children: N.map(s, (y) => v(y, !0)) })
    ] })
  ] });
};
zx.propTypes = {
  handleStateHeader: c.func.isRequired,
  stateHeader: c.string.isRequired,
  buttons: c.arrayOf(
    c.shape({
      key: c.string.isRequired,
      state: c.string.isRequired,
      label: c.string.isRequired,
      count: c.number,
      icon: c.string,
      order: c.number.isRequired,
      errors: c.bool,
      onClick: c.func,
      color: c.string,
      disabled: c.bool
    })
  ).isRequired
};
const JV = ({
  children: e = "",
  iconName: t = "",
  mode: n = "Add",
  setMode: r = () => {
  },
  title: i = "Title",
  id: s = "",
  onClose: u = () => {
  },
  onSuccess: l = () => {
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
  saveDisabled: R = !1,
  className: F = "",
  ignoreContent: C = !1,
  hideEditButton: I = !1,
  tabs: O = [],
  activeTab: S = "",
  onTabChange: x = () => {
  },
  customHeight: P = "",
  closeOnDimmerClick: k = !0,
  contentStyle: B = {}
}) => {
  const [Y, ne] = at("list");
  Kt(() => {
    z();
  }, [n]);
  const z = () => {
    let Oe = t;
    if (N.isEmpty(t))
      switch (n) {
        case "Add":
          Oe = "plus";
          break;
        case "Edit":
          Oe = "edit";
          break;
        case "Watch":
          Oe = "eye";
          break;
        default:
          Oe = "list";
          break;
      }
    ne(Oe);
  }, re = () => {
    u();
  }, pe = () => {
    l();
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
  return /* @__PURE__ */ de(
    ln,
    {
      className: `${N.isEmpty(p) ? "" : Nn[p]} ${F} ${Nn.modal}`,
      style: ve,
      open: !0,
      closeIcon: !0,
      closeOnDimmerClick: k,
      onClose: re,
      children: [
        /* @__PURE__ */ de(ln.Header, { className: Nn.modalHeader, children: [
          /* @__PURE__ */ de("div", { className: Nn.modalHeaderTitle, children: [
            /* @__PURE__ */ M(We, { name: Y, className: Nn.iconHeader }),
            i,
            s && ` - Id: ${s}`
          ] }),
          !N.isEmpty(b) && b,
          /* @__PURE__ */ de("div", { className: Nn.rowButton, children: [
            n === "Watch" && !I && /* @__PURE__ */ M(
              ut,
              {
                onClick: () => {
                  r("Edit");
                },
                className: Nn.topEditButton,
                children: /* @__PURE__ */ M(We, { name: "edit" })
              }
            ),
            n === "Edit" && /* @__PURE__ */ M(
              ut,
              {
                onClick: () => {
                  r("Watch");
                },
                className: Nn.topWatchButton,
                children: /* @__PURE__ */ M(We, { name: "eye" })
              }
            ),
            E && /* @__PURE__ */ M(
              ut,
              {
                onClick: () => {
                  typeof E == "function" && E();
                },
                className: Nn.topPrintButton,
                title: "Imprimir",
                children: /* @__PURE__ */ M(We, { name: "print" })
              }
            )
          ] })
        ] }),
        !N.isEmpty(O) && /* @__PURE__ */ M("div", { className: Nn.tabsContainer, children: /* @__PURE__ */ M(zx, { buttons: O, stateHeader: S, handleStateHeader: x }) }),
        /* @__PURE__ */ M(
          ln.Content,
          {
            className: C ? Nn.modalContentNoFlex : Nn.modalContent,
            style: h ? { minHeight: "calc(95vh - 8rem)", ...B } : P ? { height: P, minHeight: P, ...B } : { ...B },
            scrolling: !0,
            children: e
          }
        ),
        /* @__PURE__ */ de(ln.Actions, { className: Nn.modalFooter, children: [
          !N.isEmpty(_) && _,
          n === "Watch" ? /* @__PURE__ */ M(ut, { className: Nn.negativeButton, onClick: re, children: "Cerrar" }) : /* @__PURE__ */ M(ut, { className: Nn.negativeButton, onClick: re, children: y }),
          n !== "Watch" && l && /* @__PURE__ */ M(
            ut,
            {
              className: `${Nn.positiveButton} ${R ? Nn.disabled : ""}`,
              onClick: pe,
              disabled: R,
              children: n === "Add" ? v : m
            }
          )
        ] })
      ]
    }
  );
};
JV.propTypes = {
  children: c.node,
  iconName: c.string,
  mode: c.string,
  setMode: c.func,
  title: c.string,
  id: c.string,
  saveLabel: c.string,
  modifyLabel: c.string,
  cancelLabel: c.string,
  size: c.string,
  onClose: c.func,
  onSuccess: c.func,
  style: c.object,
  fullHeight: c.bool,
  headerButtons: c.array,
  footerButtons: c.array,
  printAction: c.func,
  saveDisabled: c.bool,
  className: c.string,
  ignoreContent: c.bool,
  tabs: c.array,
  activeTab: c.string,
  onTabChange: c.func,
  hideEditButton: c.bool,
  customHeight: c.string,
  closeOnDimmerClick: c.bool,
  contentStyle: c.object
};
const eG = "_modal_3j9dd_1", tG = "_header_3j9dd_11", nG = "_actions_3j9dd_25", rG = "_leftActions_3j9dd_39", aG = "_rightActions_3j9dd_51", iG = "_positiveButton_3j9dd_63", oG = "_negativeButton_3j9dd_91", sG = "_content_3j9dd_121", lG = "_focus_3j9dd_129", cG = "_contactHeader_3j9dd_139", uG = "_contactPositiveButton_3j9dd_149", dG = "_centerModal_3j9dd_169", zn = {
  modal: eG,
  header: tG,
  actions: nG,
  leftActions: rG,
  rightActions: aG,
  positiveButton: iG,
  negativeButton: oG,
  content: sG,
  focus: lG,
  contactHeader: cG,
  contactPositiveButton: uG,
  centerModal: dG
}, fG = ({
  visible: e,
  content: t,
  fullContent: n,
  header: r,
  buttonLabel: i = "Salir",
  cancelLabel: s = "Atrás",
  focus: u,
  onConfirm: l,
  onDismiss: d,
  icon: p,
  extraButton: h,
  style: m = {},
  className: v = "",
  useContactStyles: y = !1,
  centerModal: b = !1,
  headerColor: _,
  hideConfirm: E = !1
}) => /* @__PURE__ */ de(
  ln,
  {
    open: e,
    size: "tiny",
    closeOnDimmerClick: !1,
    dimmer: "blurring",
    className: `${zn.modal} ${v} ${y ? zn.contact : ""} ${b ? zn.centerModal : ""}`,
    style: m,
    children: [
      /* @__PURE__ */ de(
        ln.Header,
        {
          className: `${zn.header} ${y ? zn.contactHeader : ""}`,
          style: _ ? { "--custom-header-color": _ } : {},
          children: [
            !N.isEmpty(p) && /* @__PURE__ */ M(We, { name: p }),
            ` ${r}`
          ]
        }
      ),
      /* @__PURE__ */ M(ln.Content, { className: zn.contentContainer, children: /* @__PURE__ */ M(Al, { className: zn.content, children: n || /* @__PURE__ */ de(yo, { children: [
        `¿${t}`,
        u ? /* @__PURE__ */ de(yo, { children: [
          /* @__PURE__ */ M("span", { className: zn.focus, children: u }),
          "?"
        ] }) : "?"
      ] }) }) }),
      /* @__PURE__ */ de(ln.Actions, { className: zn.actions, children: [
        /* @__PURE__ */ M("div", { className: zn.leftActions, children: h }),
        /* @__PURE__ */ de("div", { className: zn.rightActions, children: [
          /* @__PURE__ */ M(ut, { className: `${zn.negativeButton} ${y ? zn.contactNegativeButton : ""}`, onClick: d, children: s }),
          !E && /* @__PURE__ */ M(ut, { className: `${zn.positiveButton} ${y ? zn.contactPositiveButton : ""}`, onClick: l, children: i })
        ] })
      ] })
    ]
  }
);
fG.propTypes = {
  visible: c.bool,
  content: c.string,
  fullContent: c.string,
  header: c.string,
  buttonLabel: c.string,
  cancelLabel: c.string,
  focus: c.string,
  onConfirm: c.func,
  onDismiss: c.func,
  icon: c.string,
  extraButton: c.node,
  style: c.object,
  className: c.string,
  useContactStyles: c.bool,
  centerModal: c.bool,
  headerColor: c.string,
  hideConfirm: c.bool
};
const pG = "_modal_s72ln_1", hG = "_content_s72ln_13", mG = "_messageBody_s72ln_33", gG = "_actions_s72ln_73", vG = "_button_s72ln_81", _l = {
  modal: pG,
  content: hG,
  messageBody: mG,
  actions: gG,
  button: vG
}, yG = (e) => {
  if (e == null || e === "") return "";
  if (N.isString(e)) return e;
  if (e instanceof Error)
    return e.message || String(e);
  if (typeof e == "object") {
    const t = N.get(e, "response.data.message");
    if (N.isString(t) && t) return t;
    const n = N.get(e, "message");
    if (N.isString(n) && n) return n;
    try {
      return JSON.stringify(e, null, 2);
    } catch {
      return String(e);
    }
  }
  return String(e);
}, bG = ({ text: e = "", isVisible: t = !1, isError: n = !1, onDismiss: r }) => {
  const i = yG(e);
  return /* @__PURE__ */ de(ln, { open: t, closeOnDimmerClick: !1, className: _l.modal, size: "small", children: [
    /* @__PURE__ */ de(ln.Content, { className: _l.content, children: [
      /* @__PURE__ */ M(We, { name: n ? "warning sign" : "check circle", size: "big", color: n ? "red" : "green" }),
      /* @__PURE__ */ M("pre", { className: _l.messageBody, children: i })
    ] }),
    /* @__PURE__ */ M(ln.Actions, { className: _l.actions, children: /* @__PURE__ */ M(ut, { className: _l.button, onClick: r, color: n ? "red" : "green", fluid: !0, children: "Cerrar" }) })
  ] });
};
bG.propTypes = {
  text: c.oneOfType([c.string, c.object]),
  isVisible: c.bool,
  isError: c.bool,
  onDismiss: c.func
};
const _G = "_loading_5559w_1", wG = {
  loading: _G
}, EG = ({ isFetching: e }) => /* @__PURE__ */ M(Ti, { page: !0, active: e, children: /* @__PURE__ */ M(Zl, { className: wG.loading, size: "large", children: "Loading..." }) });
EG.propTypes = {
  isFetching: c.bool.isRequired
};
export {
  fG as ConfirmModal,
  kG as FileManager,
  JV as IkModal,
  UY as IkTable,
  tV as Input,
  EG as Loading,
  bG as NotificationDialog,
  EV as SideBar,
  Bu as SideBarMenu,
  Al as Text,
  Hq as TextArea
};
