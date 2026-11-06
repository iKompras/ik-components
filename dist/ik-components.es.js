var BI = Object.defineProperty;
var jI = (e, t, n) => t in e ? BI(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var pl = (e, t, n) => jI(e, typeof t != "symbol" ? t + "" : t, n);
import { jsxs as ae, jsx as O, Fragment as Ca } from "react/jsx-runtime";
import * as L from "react";
import J, { Children as lm, PureComponent as q_, Component as Zn, createRef as wr, isValidElement as WI, cloneElement as V_, createElement as gp, createContext as zI, useContext as UI, forwardRef as pc, useState as ot, useMemo as HI, useRef as Nn, useImperativeHandle as YI, useEffect as Vt, useCallback as Jp, useLayoutEffect as qI } from "react";
import * as eh from "react-dom";
import VI, { createPortal as G_ } from "react-dom";
var is = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function hc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var th = { exports: {} }, wu = { exports: {} }, Wt = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ob;
function GI() {
  if (ob) return Wt;
  ob = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, u = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, _ = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, k = e ? Symbol.for("react.responder") : 60118, F = e ? Symbol.for("react.scope") : 60119;
  function E(S) {
    if (typeof S == "object" && S !== null) {
      var P = S.$$typeof;
      switch (P) {
        case t:
          switch (S = S.type, S) {
            case d:
            case p:
            case r:
            case s:
            case o:
            case m:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case c:
                case h:
                case b:
                case y:
                case u:
                  return S;
                default:
                  return P;
              }
          }
        case n:
          return P;
      }
    }
  }
  function I(S) {
    return E(S) === p;
  }
  return Wt.AsyncMode = d, Wt.ConcurrentMode = p, Wt.ContextConsumer = c, Wt.ContextProvider = u, Wt.Element = t, Wt.ForwardRef = h, Wt.Fragment = r, Wt.Lazy = b, Wt.Memo = y, Wt.Portal = n, Wt.Profiler = s, Wt.StrictMode = o, Wt.Suspense = m, Wt.isAsyncMode = function(S) {
    return I(S) || E(S) === d;
  }, Wt.isConcurrentMode = I, Wt.isContextConsumer = function(S) {
    return E(S) === c;
  }, Wt.isContextProvider = function(S) {
    return E(S) === u;
  }, Wt.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === t;
  }, Wt.isForwardRef = function(S) {
    return E(S) === h;
  }, Wt.isFragment = function(S) {
    return E(S) === r;
  }, Wt.isLazy = function(S) {
    return E(S) === b;
  }, Wt.isMemo = function(S) {
    return E(S) === y;
  }, Wt.isPortal = function(S) {
    return E(S) === n;
  }, Wt.isProfiler = function(S) {
    return E(S) === s;
  }, Wt.isStrictMode = function(S) {
    return E(S) === o;
  }, Wt.isSuspense = function(S) {
    return E(S) === m;
  }, Wt.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === r || S === p || S === s || S === o || S === m || S === g || typeof S == "object" && S !== null && (S.$$typeof === b || S.$$typeof === y || S.$$typeof === u || S.$$typeof === c || S.$$typeof === h || S.$$typeof === w || S.$$typeof === k || S.$$typeof === F || S.$$typeof === _);
  }, Wt.typeOf = E, Wt;
}
var zt = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ib;
function KI() {
  return ib || (ib = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, u = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, _ = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, k = e ? Symbol.for("react.responder") : 60118, F = e ? Symbol.for("react.scope") : 60119;
    function E(D) {
      return typeof D == "string" || typeof D == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      D === r || D === p || D === s || D === o || D === m || D === g || typeof D == "object" && D !== null && (D.$$typeof === b || D.$$typeof === y || D.$$typeof === u || D.$$typeof === c || D.$$typeof === h || D.$$typeof === w || D.$$typeof === k || D.$$typeof === F || D.$$typeof === _);
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
                var se = K && K.$$typeof;
                switch (se) {
                  case c:
                  case h:
                  case b:
                  case y:
                  case u:
                    return se;
                  default:
                    return G;
                }
            }
          case n:
            return G;
        }
      }
    }
    var S = d, P = p, C = c, T = u, A = t, B = h, H = r, ne = b, U = y, re = n, he = s, ge = o, Ne = m, le = !1;
    function me(D) {
      return le || (le = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), X(D) || I(D) === d;
    }
    function X(D) {
      return I(D) === p;
    }
    function te(D) {
      return I(D) === c;
    }
    function oe(D) {
      return I(D) === u;
    }
    function be(D) {
      return typeof D == "object" && D !== null && D.$$typeof === t;
    }
    function Se(D) {
      return I(D) === h;
    }
    function ye(D) {
      return I(D) === r;
    }
    function fe(D) {
      return I(D) === b;
    }
    function Ce(D) {
      return I(D) === y;
    }
    function De(D) {
      return I(D) === n;
    }
    function W(D) {
      return I(D) === s;
    }
    function z(D) {
      return I(D) === o;
    }
    function $(D) {
      return I(D) === m;
    }
    zt.AsyncMode = S, zt.ConcurrentMode = P, zt.ContextConsumer = C, zt.ContextProvider = T, zt.Element = A, zt.ForwardRef = B, zt.Fragment = H, zt.Lazy = ne, zt.Memo = U, zt.Portal = re, zt.Profiler = he, zt.StrictMode = ge, zt.Suspense = Ne, zt.isAsyncMode = me, zt.isConcurrentMode = X, zt.isContextConsumer = te, zt.isContextProvider = oe, zt.isElement = be, zt.isForwardRef = Se, zt.isFragment = ye, zt.isLazy = fe, zt.isMemo = Ce, zt.isPortal = De, zt.isProfiler = W, zt.isStrictMode = z, zt.isSuspense = $, zt.isValidElementType = E, zt.typeOf = I;
  }()), zt;
}
var sb;
function cm() {
  return sb || (sb = 1, process.env.NODE_ENV === "production" ? wu.exports = GI() : wu.exports = KI()), wu.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var vp, lb;
function ZI() {
  if (lb) return vp;
  lb = 1;
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
  return vp = o() ? Object.assign : function(s, u) {
    for (var c, d = r(s), p, h = 1; h < arguments.length; h++) {
      c = Object(arguments[h]);
      for (var m in c)
        t.call(c, m) && (d[m] = c[m]);
      if (e) {
        p = e(c);
        for (var g = 0; g < p.length; g++)
          n.call(c, p[g]) && (d[p[g]] = c[p[g]]);
      }
    }
    return d;
  }, vp;
}
var yp, cb;
function um() {
  if (cb) return yp;
  cb = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return yp = e, yp;
}
var bp, ub;
function K_() {
  return ub || (ub = 1, bp = Function.call.bind(Object.prototype.hasOwnProperty)), bp;
}
var _p, db;
function XI() {
  if (db) return _p;
  db = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = um(), n = {}, r = K_();
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
              var g = Error(
                (d || "React class") + ": " + c + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw g.name = "Invariant Violation", g;
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
  }, _p = o, _p;
}
var wp, fb;
function QI() {
  if (fb) return wp;
  fb = 1;
  var e = cm(), t = ZI(), n = um(), r = K_(), o = XI(), s = function() {
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
  return wp = function(c, d) {
    var p = typeof Symbol == "function" && Symbol.iterator, h = "@@iterator";
    function m(X) {
      var te = X && (p && X[p] || X[h]);
      if (typeof te == "function")
        return te;
    }
    var g = "<<anonymous>>", y = {
      array: k("array"),
      bigint: k("bigint"),
      bool: k("boolean"),
      func: k("function"),
      number: k("number"),
      object: k("object"),
      string: k("string"),
      symbol: k("symbol"),
      any: F(),
      arrayOf: E,
      element: I(),
      elementType: S(),
      instanceOf: P,
      node: B(),
      objectOf: T,
      oneOf: C,
      oneOfType: A,
      shape: ne,
      exact: U
    };
    function b(X, te) {
      return X === te ? X !== 0 || 1 / X === 1 / te : X !== X && te !== te;
    }
    function _(X, te) {
      this.message = X, this.data = te && typeof te == "object" ? te : {}, this.stack = "";
    }
    _.prototype = Error.prototype;
    function w(X) {
      if (process.env.NODE_ENV !== "production")
        var te = {}, oe = 0;
      function be(ye, fe, Ce, De, W, z, $) {
        if (De = De || g, z = z || Ce, $ !== n) {
          if (d) {
            var D = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw D.name = "Invariant Violation", D;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var G = De + ":" + Ce;
            !te[G] && // Avoid spamming the console because they are often not actionable except for lib authors
            oe < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + z + "` prop on `" + De + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), te[G] = !0, oe++);
          }
        }
        return fe[Ce] == null ? ye ? fe[Ce] === null ? new _("The " + W + " `" + z + "` is marked as required " + ("in `" + De + "`, but its value is `null`.")) : new _("The " + W + " `" + z + "` is marked as required in " + ("`" + De + "`, but its value is `undefined`.")) : null : X(fe, Ce, De, W, z);
      }
      var Se = be.bind(null, !1);
      return Se.isRequired = be.bind(null, !0), Se;
    }
    function k(X) {
      function te(oe, be, Se, ye, fe, Ce) {
        var De = oe[be], W = ge(De);
        if (W !== X) {
          var z = Ne(De);
          return new _(
            "Invalid " + ye + " `" + fe + "` of type " + ("`" + z + "` supplied to `" + Se + "`, expected ") + ("`" + X + "`."),
            { expectedType: X }
          );
        }
        return null;
      }
      return w(te);
    }
    function F() {
      return w(u);
    }
    function E(X) {
      function te(oe, be, Se, ye, fe) {
        if (typeof X != "function")
          return new _("Property `" + fe + "` of component `" + Se + "` has invalid PropType notation inside arrayOf.");
        var Ce = oe[be];
        if (!Array.isArray(Ce)) {
          var De = ge(Ce);
          return new _("Invalid " + ye + " `" + fe + "` of type " + ("`" + De + "` supplied to `" + Se + "`, expected an array."));
        }
        for (var W = 0; W < Ce.length; W++) {
          var z = X(Ce, W, Se, ye, fe + "[" + W + "]", n);
          if (z instanceof Error)
            return z;
        }
        return null;
      }
      return w(te);
    }
    function I() {
      function X(te, oe, be, Se, ye) {
        var fe = te[oe];
        if (!c(fe)) {
          var Ce = ge(fe);
          return new _("Invalid " + Se + " `" + ye + "` of type " + ("`" + Ce + "` supplied to `" + be + "`, expected a single ReactElement."));
        }
        return null;
      }
      return w(X);
    }
    function S() {
      function X(te, oe, be, Se, ye) {
        var fe = te[oe];
        if (!e.isValidElementType(fe)) {
          var Ce = ge(fe);
          return new _("Invalid " + Se + " `" + ye + "` of type " + ("`" + Ce + "` supplied to `" + be + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return w(X);
    }
    function P(X) {
      function te(oe, be, Se, ye, fe) {
        if (!(oe[be] instanceof X)) {
          var Ce = X.name || g, De = me(oe[be]);
          return new _("Invalid " + ye + " `" + fe + "` of type " + ("`" + De + "` supplied to `" + Se + "`, expected ") + ("instance of `" + Ce + "`."));
        }
        return null;
      }
      return w(te);
    }
    function C(X) {
      if (!Array.isArray(X))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), u;
      function te(oe, be, Se, ye, fe) {
        for (var Ce = oe[be], De = 0; De < X.length; De++)
          if (b(Ce, X[De]))
            return null;
        var W = JSON.stringify(X, function($, D) {
          var G = Ne(D);
          return G === "symbol" ? String(D) : D;
        });
        return new _("Invalid " + ye + " `" + fe + "` of value `" + String(Ce) + "` " + ("supplied to `" + Se + "`, expected one of " + W + "."));
      }
      return w(te);
    }
    function T(X) {
      function te(oe, be, Se, ye, fe) {
        if (typeof X != "function")
          return new _("Property `" + fe + "` of component `" + Se + "` has invalid PropType notation inside objectOf.");
        var Ce = oe[be], De = ge(Ce);
        if (De !== "object")
          return new _("Invalid " + ye + " `" + fe + "` of type " + ("`" + De + "` supplied to `" + Se + "`, expected an object."));
        for (var W in Ce)
          if (r(Ce, W)) {
            var z = X(Ce, W, Se, ye, fe + "." + W, n);
            if (z instanceof Error)
              return z;
          }
        return null;
      }
      return w(te);
    }
    function A(X) {
      if (!Array.isArray(X))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), u;
      for (var te = 0; te < X.length; te++) {
        var oe = X[te];
        if (typeof oe != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + le(oe) + " at index " + te + "."
          ), u;
      }
      function be(Se, ye, fe, Ce, De) {
        for (var W = [], z = 0; z < X.length; z++) {
          var $ = X[z], D = $(Se, ye, fe, Ce, De, n);
          if (D == null)
            return null;
          D.data && r(D.data, "expectedType") && W.push(D.data.expectedType);
        }
        var G = W.length > 0 ? ", expected one of type [" + W.join(", ") + "]" : "";
        return new _("Invalid " + Ce + " `" + De + "` supplied to " + ("`" + fe + "`" + G + "."));
      }
      return w(be);
    }
    function B() {
      function X(te, oe, be, Se, ye) {
        return re(te[oe]) ? null : new _("Invalid " + Se + " `" + ye + "` supplied to " + ("`" + be + "`, expected a ReactNode."));
      }
      return w(X);
    }
    function H(X, te, oe, be, Se) {
      return new _(
        (X || "React class") + ": " + te + " type `" + oe + "." + be + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + Se + "`."
      );
    }
    function ne(X) {
      function te(oe, be, Se, ye, fe) {
        var Ce = oe[be], De = ge(Ce);
        if (De !== "object")
          return new _("Invalid " + ye + " `" + fe + "` of type `" + De + "` " + ("supplied to `" + Se + "`, expected `object`."));
        for (var W in X) {
          var z = X[W];
          if (typeof z != "function")
            return H(Se, ye, fe, W, Ne(z));
          var $ = z(Ce, W, Se, ye, fe + "." + W, n);
          if ($)
            return $;
        }
        return null;
      }
      return w(te);
    }
    function U(X) {
      function te(oe, be, Se, ye, fe) {
        var Ce = oe[be], De = ge(Ce);
        if (De !== "object")
          return new _("Invalid " + ye + " `" + fe + "` of type `" + De + "` " + ("supplied to `" + Se + "`, expected `object`."));
        var W = t({}, oe[be], X);
        for (var z in W) {
          var $ = X[z];
          if (r(X, z) && typeof $ != "function")
            return H(Se, ye, fe, z, Ne($));
          if (!$)
            return new _(
              "Invalid " + ye + " `" + fe + "` key `" + z + "` supplied to `" + Se + "`.\nBad object: " + JSON.stringify(oe[be], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(X), null, "  ")
            );
          var D = $(Ce, z, Se, ye, fe + "." + z, n);
          if (D)
            return D;
        }
        return null;
      }
      return w(te);
    }
    function re(X) {
      switch (typeof X) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !X;
        case "object":
          if (Array.isArray(X))
            return X.every(re);
          if (X === null || c(X))
            return !0;
          var te = m(X);
          if (te) {
            var oe = te.call(X), be;
            if (te !== X.entries) {
              for (; !(be = oe.next()).done; )
                if (!re(be.value))
                  return !1;
            } else
              for (; !(be = oe.next()).done; ) {
                var Se = be.value;
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
    function he(X, te) {
      return X === "symbol" ? !0 : te ? te["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && te instanceof Symbol : !1;
    }
    function ge(X) {
      var te = typeof X;
      return Array.isArray(X) ? "array" : X instanceof RegExp ? "object" : he(te, X) ? "symbol" : te;
    }
    function Ne(X) {
      if (typeof X > "u" || X === null)
        return "" + X;
      var te = ge(X);
      if (te === "object") {
        if (X instanceof Date)
          return "date";
        if (X instanceof RegExp)
          return "regexp";
      }
      return te;
    }
    function le(X) {
      var te = Ne(X);
      switch (te) {
        case "array":
        case "object":
          return "an " + te;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + te;
        default:
          return te;
      }
    }
    function me(X) {
      return !X.constructor || !X.constructor.name ? g : X.constructor.name;
    }
    return y.checkPropTypes = o, y.resetWarningCache = o.resetWarningCache, y.PropTypes = y, y;
  }, wp;
}
var xp, pb;
function JI() {
  if (pb) return xp;
  pb = 1;
  var e = um();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, xp = function() {
    function r(u, c, d, p, h, m) {
      if (m !== e) {
        var g = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw g.name = "Invariant Violation", g;
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
  }, xp;
}
if (process.env.NODE_ENV !== "production") {
  var eA = cm(), tA = !0;
  th.exports = QI()(eA.isElement, tA);
} else
  th.exports = JI()();
var nr = th.exports;
const l = /* @__PURE__ */ hc(nr);
function nA(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
var rA = cm();
function nh(e, t) {
  return nh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, nh(e, t);
}
function en(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, nh(e, t);
}
var ya = function(t, n) {
  if (process.env.NODE_ENV !== "production" && typeof t == "string")
    throw new Error("We do not support refs as string, this is a legacy API and will be likely to be removed in one of the future releases of React.");
  if (typeof t == "function") {
    t(n);
    return;
  }
  t !== null && typeof t == "object" && (t.current = n);
}, Vu = function(t) {
  return (
    // https://github.com/facebook/react/blob/v16.8.2/packages/react-reconciler/src/ReactFiberCommitWork.js#L665
    t !== null && typeof t == "object" && t.hasOwnProperty("current")
  );
};
function hb(e) {
  return e === null || e instanceof Element || e instanceof Text ? !1 : !!(e.type && e.tag);
}
var aA = /* @__PURE__ */ function(e) {
  en(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.prevNode = void 0, r;
  }
  var n = t.prototype;
  return n.componentDidMount = function() {
    var o = eh.findDOMNode(this);
    process.env.NODE_ENV !== "production" && hb(o) && (o = null), this.prevNode = o, ya(this.props.innerRef, o);
  }, n.componentDidUpdate = function(o) {
    var s = eh.findDOMNode(this);
    process.env.NODE_ENV !== "production" && hb(s) && (s = null), this.prevNode !== s && (this.prevNode = s, ya(this.props.innerRef, s)), o.innerRef !== this.props.innerRef && ya(this.props.innerRef, s);
  }, n.componentWillUnmount = function() {
    ya(this.props.innerRef, null), delete this.prevNode;
  }, n.render = function() {
    var o = this.props.children;
    return o;
  }, t;
}(L.Component), oA = /* @__PURE__ */ function(e) {
  en(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.currentNode = void 0, r.handleRefOverride = function(c) {
      var d = r.props, p = d.children, h = d.innerRef;
      ya(p.ref, c), ya(h, c), r.currentNode = c;
    }, r;
  }
  var n = t.prototype;
  return n.componentDidUpdate = function(o) {
    o.innerRef !== this.props.innerRef && ya(this.props.innerRef, this.currentNode);
  }, n.componentWillUnmount = function() {
    delete this.currentNode;
  }, n.render = function() {
    var o = this.props.children;
    return /* @__PURE__ */ L.cloneElement(o, {
      ref: this.handleRefOverride
    });
  }, t;
}(L.Component), iA = ["children", "innerRef"], lr = function(t) {
  var n = t.children, r = t.innerRef, o = nA(t, iA), s = L.Children.only(n), u = rA.isForwardRef(s) ? oA : aA, c = s && o && Object.keys(o).length > 0 ? /* @__PURE__ */ L.cloneElement(s, o) : s;
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
var sA = Object.prototype, lA = sA.hasOwnProperty;
function cA(e, t) {
  return e != null && lA.call(e, t);
}
var yn = Array.isArray, Z_ = typeof global == "object" && global && global.Object === Object && global, uA = typeof self == "object" && self && self.Object === Object && self, ro = Z_ || uA || Function("return this")(), Oa = ro.Symbol, X_ = Object.prototype, dA = X_.hasOwnProperty, fA = X_.toString, hl = Oa ? Oa.toStringTag : void 0;
function pA(e) {
  var t = dA.call(e, hl), n = e[hl];
  try {
    e[hl] = void 0;
    var r = !0;
  } catch {
  }
  var o = fA.call(e);
  return r && (t ? e[hl] = n : delete e[hl]), o;
}
var hA = Object.prototype, mA = hA.toString;
function gA(e) {
  return mA.call(e);
}
var vA = "[object Null]", yA = "[object Undefined]", mb = Oa ? Oa.toStringTag : void 0;
function ka(e) {
  return e == null ? e === void 0 ? yA : vA : mb && mb in Object(e) ? pA(e) : gA(e);
}
function jr(e) {
  return e != null && typeof e == "object";
}
var bA = "[object Symbol]";
function Oi(e) {
  return typeof e == "symbol" || jr(e) && ka(e) == bA;
}
var _A = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, wA = /^\w*$/;
function dm(e, t) {
  if (yn(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Oi(e) ? !0 : wA.test(e) || !_A.test(e) || t != null && e in Object(t);
}
function Xa(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var xA = "[object AsyncFunction]", EA = "[object Function]", CA = "[object GeneratorFunction]", OA = "[object Proxy]";
function bs(e) {
  if (!Xa(e))
    return !1;
  var t = ka(e);
  return t == EA || t == CA || t == xA || t == OA;
}
var Ep = ro["__core-js_shared__"], gb = function() {
  var e = /[^.]+$/.exec(Ep && Ep.keys && Ep.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function SA(e) {
  return !!gb && gb in e;
}
var TA = Function.prototype, PA = TA.toString;
function Fi(e) {
  if (e != null) {
    try {
      return PA.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var kA = /[\\^$.*+?()[\]{}|]/g, NA = /^\[object .+?Constructor\]$/, IA = Function.prototype, AA = Object.prototype, RA = IA.toString, MA = AA.hasOwnProperty, DA = RegExp(
  "^" + RA.call(MA).replace(kA, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function LA(e) {
  if (!Xa(e) || SA(e))
    return !1;
  var t = bs(e) ? DA : NA;
  return t.test(Fi(e));
}
function FA(e, t) {
  return e == null ? void 0 : e[t];
}
function $i(e, t) {
  var n = FA(e, t);
  return LA(n) ? n : void 0;
}
var $l = $i(Object, "create");
function $A() {
  this.__data__ = $l ? $l(null) : {}, this.size = 0;
}
function BA(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var jA = "__lodash_hash_undefined__", WA = Object.prototype, zA = WA.hasOwnProperty;
function UA(e) {
  var t = this.__data__;
  if ($l) {
    var n = t[e];
    return n === jA ? void 0 : n;
  }
  return zA.call(t, e) ? t[e] : void 0;
}
var HA = Object.prototype, YA = HA.hasOwnProperty;
function qA(e) {
  var t = this.__data__;
  return $l ? t[e] !== void 0 : YA.call(t, e);
}
var VA = "__lodash_hash_undefined__";
function GA(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = $l && t === void 0 ? VA : t, this;
}
function Si(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Si.prototype.clear = $A;
Si.prototype.delete = BA;
Si.prototype.get = UA;
Si.prototype.has = qA;
Si.prototype.set = GA;
function KA() {
  this.__data__ = [], this.size = 0;
}
function vd(e, t) {
  return e === t || e !== e && t !== t;
}
function yd(e, t) {
  for (var n = e.length; n--; )
    if (vd(e[n][0], t))
      return n;
  return -1;
}
var ZA = Array.prototype, XA = ZA.splice;
function QA(e) {
  var t = this.__data__, n = yd(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : XA.call(t, n, 1), --this.size, !0;
}
function JA(e) {
  var t = this.__data__, n = yd(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function e2(e) {
  return yd(this.__data__, e) > -1;
}
function t2(e, t) {
  var n = this.__data__, r = yd(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function ao(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ao.prototype.clear = KA;
ao.prototype.delete = QA;
ao.prototype.get = JA;
ao.prototype.has = e2;
ao.prototype.set = t2;
var Bl = $i(ro, "Map");
function n2() {
  this.size = 0, this.__data__ = {
    hash: new Si(),
    map: new (Bl || ao)(),
    string: new Si()
  };
}
function r2(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function bd(e, t) {
  var n = e.__data__;
  return r2(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function a2(e) {
  var t = bd(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function o2(e) {
  return bd(this, e).get(e);
}
function i2(e) {
  return bd(this, e).has(e);
}
function s2(e, t) {
  var n = bd(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function oo(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
oo.prototype.clear = n2;
oo.prototype.delete = a2;
oo.prototype.get = o2;
oo.prototype.has = i2;
oo.prototype.set = s2;
var l2 = "Expected a function";
function mc(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(l2);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], s = n.cache;
    if (s.has(o))
      return s.get(o);
    var u = e.apply(this, r);
    return n.cache = s.set(o, u) || s, u;
  };
  return n.cache = new (mc.Cache || oo)(), n;
}
mc.Cache = oo;
var c2 = 500;
function u2(e) {
  var t = mc(e, function(r) {
    return n.size === c2 && n.clear(), r;
  }), n = t.cache;
  return t;
}
var d2 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, f2 = /\\(\\)?/g, p2 = u2(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(d2, function(n, r, o, s) {
    t.push(o ? s.replace(f2, "$1") : r || n);
  }), t;
});
function wi(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var vb = Oa ? Oa.prototype : void 0, yb = vb ? vb.toString : void 0;
function _d(e) {
  if (typeof e == "string")
    return e;
  if (yn(e))
    return wi(e, _d) + "";
  if (Oi(e))
    return yb ? yb.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Bi(e) {
  return e == null ? "" : _d(e);
}
function gc(e, t) {
  return yn(e) ? e : dm(e, t) ? [e] : p2(Bi(e));
}
var h2 = "[object Arguments]";
function bb(e) {
  return jr(e) && ka(e) == h2;
}
var Q_ = Object.prototype, m2 = Q_.hasOwnProperty, g2 = Q_.propertyIsEnumerable, wd = bb(/* @__PURE__ */ function() {
  return arguments;
}()) ? bb : function(e) {
  return jr(e) && m2.call(e, "callee") && !g2.call(e, "callee");
}, v2 = 9007199254740991, y2 = /^(?:0|[1-9]\d*)$/;
function xd(e, t) {
  var n = typeof e;
  return t = t ?? v2, !!t && (n == "number" || n != "symbol" && y2.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var b2 = 9007199254740991;
function fm(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= b2;
}
function js(e) {
  if (typeof e == "string" || Oi(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function J_(e, t, n) {
  t = gc(t, e);
  for (var r = -1, o = t.length, s = !1; ++r < o; ) {
    var u = js(t[r]);
    if (!(s = e != null && n(e, u)))
      break;
    e = e[u];
  }
  return s || ++r != o ? s : (o = e == null ? 0 : e.length, !!o && fm(o) && xd(u, o) && (yn(e) || wd(e)));
}
function rh(e, t) {
  return e != null && J_(e, t, cA);
}
function e1(e, t, n) {
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
function _2(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function vc(e, t) {
  t = gc(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[js(t[n++])];
  return n && n == r ? e : void 0;
}
function Ed(e, t, n) {
  var r = -1, o = e.length;
  t < 0 && (t = -t > o ? 0 : o + t), n = n > o ? o : n, n < 0 && (n += o), o = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var s = Array(o); ++r < o; )
    s[r] = e[r + t];
  return s;
}
function w2(e, t) {
  return t.length < 2 ? e : vc(e, Ed(t, 0, -1));
}
function x2(e, t, n) {
  t = gc(t, e), e = w2(e, t);
  var r = e == null ? e : e[js(_2(t))];
  return r == null ? void 0 : e1(r, e, n);
}
function Xo(e) {
  return e;
}
var _b = Math.max;
function t1(e, t, n) {
  return t = _b(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, s = _b(r.length - t, 0), u = Array(s); ++o < s; )
      u[o] = r[t + o];
    o = -1;
    for (var c = Array(t + 1); ++o < t; )
      c[o] = r[o];
    return c[t] = n(u), e1(e, this, c);
  };
}
function n1(e) {
  return function() {
    return e;
  };
}
var Gu = function() {
  try {
    var e = $i(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), E2 = Gu ? function(e, t) {
  return Gu(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: n1(t),
    writable: !0
  });
} : Xo, C2 = 800, O2 = 16, S2 = Date.now;
function T2(e) {
  var t = 0, n = 0;
  return function() {
    var r = S2(), o = O2 - (r - n);
    if (n = r, o > 0) {
      if (++t >= C2)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var r1 = T2(E2);
function Ws(e, t) {
  return r1(t1(e, t, Xo), e + "");
}
var Le = Ws(x2);
function P2(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function fs(e) {
  return e === void 0;
}
function k2(e, t, n) {
  return e === e && (n !== void 0 && (e = e <= n ? e : n), e = e >= t ? e : t), e;
}
var N2 = /\s/;
function I2(e) {
  for (var t = e.length; t-- && N2.test(e.charAt(t)); )
    ;
  return t;
}
var A2 = /^\s+/;
function a1(e) {
  return e && e.slice(0, I2(e) + 1).replace(A2, "");
}
var wb = NaN, R2 = /^[-+]0x[0-9a-f]+$/i, M2 = /^0b[01]+$/i, D2 = /^0o[0-7]+$/i, L2 = parseInt;
function o1(e) {
  if (typeof e == "number")
    return e;
  if (Oi(e))
    return wb;
  if (Xa(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Xa(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = a1(e);
  var n = M2.test(e);
  return n || D2.test(e) ? L2(e.slice(2), n ? 2 : 8) : R2.test(e) ? wb : +e;
}
var xb = 1 / 0, F2 = 17976931348623157e292;
function ps(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = o1(e), e === xb || e === -xb) {
    var t = e < 0 ? -1 : 1;
    return t * F2;
  }
  return e === e ? e : 0;
}
function yc(e) {
  var t = ps(e), n = t % 1;
  return t === t ? n ? t - n : t : 0;
}
function $2(e, t, n) {
  return e = Bi(e), n = n == null ? 0 : k2(yc(n), 0, e.length), t = _d(t), e.slice(n, n + t.length) == t;
}
function i1(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, s = []; ++n < r; ) {
    var u = e[n];
    t(u, n, e) && (s[o++] = u);
  }
  return s;
}
function B2(e) {
  return function(t, n, r) {
    for (var o = -1, s = Object(t), u = r(t), c = u.length; c--; ) {
      var d = u[++o];
      if (n(s[d], d, s) === !1)
        break;
    }
    return t;
  };
}
var j2 = B2();
function W2(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
function z2() {
  return !1;
}
var s1 = typeof exports == "object" && exports && !exports.nodeType && exports, Eb = s1 && typeof module == "object" && module && !module.nodeType && module, U2 = Eb && Eb.exports === s1, Cb = U2 ? ro.Buffer : void 0, H2 = Cb ? Cb.isBuffer : void 0, Ku = H2 || z2, Y2 = "[object Arguments]", q2 = "[object Array]", V2 = "[object Boolean]", G2 = "[object Date]", K2 = "[object Error]", Z2 = "[object Function]", X2 = "[object Map]", Q2 = "[object Number]", J2 = "[object Object]", eR = "[object RegExp]", tR = "[object Set]", nR = "[object String]", rR = "[object WeakMap]", aR = "[object ArrayBuffer]", oR = "[object DataView]", iR = "[object Float32Array]", sR = "[object Float64Array]", lR = "[object Int8Array]", cR = "[object Int16Array]", uR = "[object Int32Array]", dR = "[object Uint8Array]", fR = "[object Uint8ClampedArray]", pR = "[object Uint16Array]", hR = "[object Uint32Array]", nn = {};
nn[iR] = nn[sR] = nn[lR] = nn[cR] = nn[uR] = nn[dR] = nn[fR] = nn[pR] = nn[hR] = !0;
nn[Y2] = nn[q2] = nn[aR] = nn[V2] = nn[oR] = nn[G2] = nn[K2] = nn[Z2] = nn[X2] = nn[Q2] = nn[J2] = nn[eR] = nn[tR] = nn[nR] = nn[rR] = !1;
function mR(e) {
  return jr(e) && fm(e.length) && !!nn[ka(e)];
}
function l1(e) {
  return function(t) {
    return e(t);
  };
}
var c1 = typeof exports == "object" && exports && !exports.nodeType && exports, kl = c1 && typeof module == "object" && module && !module.nodeType && module, gR = kl && kl.exports === c1, Cp = gR && Z_.process, Ob = function() {
  try {
    var e = kl && kl.require && kl.require("util").types;
    return e || Cp && Cp.binding && Cp.binding("util");
  } catch {
  }
}(), Sb = Ob && Ob.isTypedArray, pm = Sb ? l1(Sb) : mR, vR = Object.prototype, yR = vR.hasOwnProperty;
function bR(e, t) {
  var n = yn(e), r = !n && wd(e), o = !n && !r && Ku(e), s = !n && !r && !o && pm(e), u = n || r || o || s, c = u ? W2(e.length, String) : [], d = c.length;
  for (var p in e)
    yR.call(e, p) && !(u && // Safari 9 has enumerable `arguments.length` in strict mode.
    (p == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (p == "offset" || p == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (p == "buffer" || p == "byteLength" || p == "byteOffset") || // Skip index properties.
    xd(p, d))) && c.push(p);
  return c;
}
var _R = Object.prototype;
function u1(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || _R;
  return e === n;
}
function d1(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var wR = d1(Object.keys, Object), xR = Object.prototype, ER = xR.hasOwnProperty;
function hm(e) {
  if (!u1(e))
    return wR(e);
  var t = [];
  for (var n in Object(e))
    ER.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function io(e) {
  return e != null && fm(e.length) && !bs(e);
}
function Fr(e) {
  return io(e) ? bR(e) : hm(e);
}
function f1(e, t) {
  return e && j2(e, t, Fr);
}
function CR(e, t) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!io(n))
      return e(n, r);
    for (var o = n.length, s = -1, u = Object(n); ++s < o && r(u[s], s, u) !== !1; )
      ;
    return n;
  };
}
var zs = CR(f1);
function OR(e, t) {
  var n = [];
  return zs(e, function(r, o, s) {
    t(r, o, s) && n.push(r);
  }), n;
}
function SR() {
  this.__data__ = new ao(), this.size = 0;
}
function TR(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function PR(e) {
  return this.__data__.get(e);
}
function kR(e) {
  return this.__data__.has(e);
}
var NR = 200;
function IR(e, t) {
  var n = this.__data__;
  if (n instanceof ao) {
    var r = n.__data__;
    if (!Bl || r.length < NR - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new oo(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Ga(e) {
  var t = this.__data__ = new ao(e);
  this.size = t.size;
}
Ga.prototype.clear = SR;
Ga.prototype.delete = TR;
Ga.prototype.get = PR;
Ga.prototype.has = kR;
Ga.prototype.set = IR;
var AR = "__lodash_hash_undefined__";
function RR(e) {
  return this.__data__.set(e, AR), this;
}
function MR(e) {
  return this.__data__.has(e);
}
function Ti(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new oo(); ++t < n; )
    this.add(e[t]);
}
Ti.prototype.add = Ti.prototype.push = RR;
Ti.prototype.has = MR;
function p1(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function jl(e, t) {
  return e.has(t);
}
var DR = 1, LR = 2;
function h1(e, t, n, r, o, s) {
  var u = n & DR, c = e.length, d = t.length;
  if (c != d && !(u && d > c))
    return !1;
  var p = s.get(e), h = s.get(t);
  if (p && h)
    return p == t && h == e;
  var m = -1, g = !0, y = n & LR ? new Ti() : void 0;
  for (s.set(e, t), s.set(t, e); ++m < c; ) {
    var b = e[m], _ = t[m];
    if (r)
      var w = u ? r(_, b, m, t, e, s) : r(b, _, m, e, t, s);
    if (w !== void 0) {
      if (w)
        continue;
      g = !1;
      break;
    }
    if (y) {
      if (!p1(t, function(k, F) {
        if (!jl(y, F) && (b === k || o(b, k, n, r, s)))
          return y.push(F);
      })) {
        g = !1;
        break;
      }
    } else if (!(b === _ || o(b, _, n, r, s))) {
      g = !1;
      break;
    }
  }
  return s.delete(e), s.delete(t), g;
}
var Tb = ro.Uint8Array;
function FR(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
function mm(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var $R = 1, BR = 2, jR = "[object Boolean]", WR = "[object Date]", zR = "[object Error]", UR = "[object Map]", HR = "[object Number]", YR = "[object RegExp]", qR = "[object Set]", VR = "[object String]", GR = "[object Symbol]", KR = "[object ArrayBuffer]", ZR = "[object DataView]", Pb = Oa ? Oa.prototype : void 0, Op = Pb ? Pb.valueOf : void 0;
function XR(e, t, n, r, o, s, u) {
  switch (n) {
    case ZR:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case KR:
      return !(e.byteLength != t.byteLength || !s(new Tb(e), new Tb(t)));
    case jR:
    case WR:
    case HR:
      return vd(+e, +t);
    case zR:
      return e.name == t.name && e.message == t.message;
    case YR:
    case VR:
      return e == t + "";
    case UR:
      var c = FR;
    case qR:
      var d = r & $R;
      if (c || (c = mm), e.size != t.size && !d)
        return !1;
      var p = u.get(e);
      if (p)
        return p == t;
      r |= BR, u.set(e, t);
      var h = h1(c(e), c(t), r, o, s, u);
      return u.delete(e), h;
    case GR:
      if (Op)
        return Op.call(e) == Op.call(t);
  }
  return !1;
}
function m1(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
function QR(e, t, n) {
  var r = t(e);
  return yn(e) ? r : m1(r, n(e));
}
function JR() {
  return [];
}
var eM = Object.prototype, tM = eM.propertyIsEnumerable, kb = Object.getOwnPropertySymbols, nM = kb ? function(e) {
  return e == null ? [] : (e = Object(e), i1(kb(e), function(t) {
    return tM.call(e, t);
  }));
} : JR;
function Nb(e) {
  return QR(e, Fr, nM);
}
var rM = 1, aM = Object.prototype, oM = aM.hasOwnProperty;
function iM(e, t, n, r, o, s) {
  var u = n & rM, c = Nb(e), d = c.length, p = Nb(t), h = p.length;
  if (d != h && !u)
    return !1;
  for (var m = d; m--; ) {
    var g = c[m];
    if (!(u ? g in t : oM.call(t, g)))
      return !1;
  }
  var y = s.get(e), b = s.get(t);
  if (y && b)
    return y == t && b == e;
  var _ = !0;
  s.set(e, t), s.set(t, e);
  for (var w = u; ++m < d; ) {
    g = c[m];
    var k = e[g], F = t[g];
    if (r)
      var E = u ? r(F, k, g, t, e, s) : r(k, F, g, e, t, s);
    if (!(E === void 0 ? k === F || o(k, F, n, r, s) : E)) {
      _ = !1;
      break;
    }
    w || (w = g == "constructor");
  }
  if (_ && !w) {
    var I = e.constructor, S = t.constructor;
    I != S && "constructor" in e && "constructor" in t && !(typeof I == "function" && I instanceof I && typeof S == "function" && S instanceof S) && (_ = !1);
  }
  return s.delete(e), s.delete(t), _;
}
var ah = $i(ro, "DataView"), oh = $i(ro, "Promise"), hs = $i(ro, "Set"), ih = $i(ro, "WeakMap"), Ib = "[object Map]", sM = "[object Object]", Ab = "[object Promise]", Rb = "[object Set]", Mb = "[object WeakMap]", Db = "[object DataView]", lM = Fi(ah), cM = Fi(Bl), uM = Fi(oh), dM = Fi(hs), fM = Fi(ih), ma = ka;
(ah && ma(new ah(new ArrayBuffer(1))) != Db || Bl && ma(new Bl()) != Ib || oh && ma(oh.resolve()) != Ab || hs && ma(new hs()) != Rb || ih && ma(new ih()) != Mb) && (ma = function(e) {
  var t = ka(e), n = t == sM ? e.constructor : void 0, r = n ? Fi(n) : "";
  if (r)
    switch (r) {
      case lM:
        return Db;
      case cM:
        return Ib;
      case uM:
        return Ab;
      case dM:
        return Rb;
      case fM:
        return Mb;
    }
  return t;
});
var pM = 1, Lb = "[object Arguments]", Fb = "[object Array]", xu = "[object Object]", hM = Object.prototype, $b = hM.hasOwnProperty;
function mM(e, t, n, r, o, s) {
  var u = yn(e), c = yn(t), d = u ? Fb : ma(e), p = c ? Fb : ma(t);
  d = d == Lb ? xu : d, p = p == Lb ? xu : p;
  var h = d == xu, m = p == xu, g = d == p;
  if (g && Ku(e)) {
    if (!Ku(t))
      return !1;
    u = !0, h = !1;
  }
  if (g && !h)
    return s || (s = new Ga()), u || pm(e) ? h1(e, t, n, r, o, s) : XR(e, t, d, n, r, o, s);
  if (!(n & pM)) {
    var y = h && $b.call(e, "__wrapped__"), b = m && $b.call(t, "__wrapped__");
    if (y || b) {
      var _ = y ? e.value() : e, w = b ? t.value() : t;
      return s || (s = new Ga()), o(_, w, n, r, s);
    }
  }
  return g ? (s || (s = new Ga()), iM(e, t, n, r, o, s)) : !1;
}
function Cd(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !jr(e) && !jr(t) ? e !== e && t !== t : mM(e, t, n, r, Cd, o);
}
var gM = 1, vM = 2;
function yM(e, t, n, r) {
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
      var h = new Ga(), m;
      if (!(m === void 0 ? Cd(p, d, gM | vM, r, h) : m))
        return !1;
    }
  }
  return !0;
}
function g1(e) {
  return e === e && !Xa(e);
}
function bM(e) {
  for (var t = Fr(e), n = t.length; n--; ) {
    var r = t[n], o = e[r];
    t[n] = [r, o, g1(o)];
  }
  return t;
}
function v1(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function _M(e) {
  var t = bM(e);
  return t.length == 1 && t[0][2] ? v1(t[0][0], t[0][1]) : function(n) {
    return n === e || yM(n, e, t);
  };
}
function ba(e, t, n) {
  var r = e == null ? void 0 : vc(e, t);
  return r === void 0 ? n : r;
}
function wM(e, t) {
  return e != null && t in Object(e);
}
function y1(e, t) {
  return e != null && J_(e, t, wM);
}
var xM = 1, EM = 2;
function CM(e, t) {
  return dm(e) && g1(t) ? v1(js(e), t) : function(n) {
    var r = ba(n, e);
    return r === void 0 && r === t ? y1(n, e) : Cd(t, r, xM | EM);
  };
}
function b1(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function OM(e) {
  return function(t) {
    return vc(t, e);
  };
}
function SM(e) {
  return dm(e) ? b1(js(e)) : OM(e);
}
function Qo(e) {
  return typeof e == "function" ? e : e == null ? Xo : typeof e == "object" ? yn(e) ? CM(e[0], e[1]) : _M(e) : SM(e);
}
function sh(e, t) {
  var n = yn(e) ? i1 : OR;
  return n(e, Qo(t));
}
var TM = "[object Map]", PM = "[object Set]", kM = Object.prototype, NM = kM.hasOwnProperty;
function yi(e) {
  if (e == null)
    return !0;
  if (io(e) && (yn(e) || typeof e == "string" || typeof e.splice == "function" || Ku(e) || pm(e) || wd(e)))
    return !e.length;
  var t = ma(e);
  if (t == TM || t == PM)
    return !e.size;
  if (u1(e))
    return !hm(e).length;
  for (var n in e)
    if (NM.call(e, n))
      return !1;
  return !0;
}
function _1(e, t, n, r) {
  for (var o = e.length, s = n + -1; ++s < o; )
    if (t(e[s], s, e))
      return s;
  return -1;
}
function IM(e) {
  return e !== e;
}
function AM(e, t, n) {
  for (var r = n - 1, o = e.length; ++r < o; )
    if (e[r] === t)
      return r;
  return -1;
}
function Od(e, t, n) {
  return t === t ? AM(e, t, n) : _1(e, IM, n);
}
function gm(e, t) {
  var n = e == null ? 0 : e.length;
  return !!n && Od(e, t, 0) > -1;
}
var RM = Math.min;
function MM(e, t, n) {
  for (var r = gm, o = e[0].length, s = e.length, u = s, c = Array(s), d = 1 / 0, p = []; u--; ) {
    var h = e[u];
    d = RM(h.length, d), c[u] = o >= 120 && h.length >= 120 ? new Ti(u && h) : void 0;
  }
  h = e[0];
  var m = -1, g = c[0];
  e:
    for (; ++m < o && p.length < d; ) {
      var y = h[m], b = y;
      if (y = y !== 0 ? y : 0, !(g ? jl(g, b) : r(p, b))) {
        for (u = s; --u; ) {
          var _ = c[u];
          if (!(_ ? jl(_, b) : r(e[u], b)))
            continue e;
        }
        g && g.push(b), p.push(y);
      }
    }
  return p;
}
function Wl(e) {
  return jr(e) && io(e);
}
function DM(e) {
  return Wl(e) ? e : [];
}
var LM = Ws(function(e) {
  var t = wi(e, DM);
  return t.length && t[0] === e[0] ? MM(t) : [];
});
function FM(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
    ;
  return e;
}
function $M(e) {
  return typeof e == "function" ? e : Xo;
}
function w1(e, t) {
  var n = yn(e) ? FM : zs;
  return n(e, $M(t));
}
var lh = function(t) {
  return "default" + (t[0].toUpperCase() + t.slice(1));
}, BM = function(t, n, r, o) {
  var s = n[t];
  if (s !== void 0) return s;
  {
    var u = n[lh(t)];
    if (u !== void 0) return u;
    if (r) {
      var c = r[t];
      if (c !== void 0) return c;
    }
  }
  if (t === "checked") return !1;
  if (t === "value") return n.multiple ? [] : "";
}, Us = /* @__PURE__ */ function(e) {
  en(t, e);
  function t() {
    for (var n, r = arguments.length, o = new Array(r), s = 0; s < r; s++)
      o[s] = arguments[s];
    n = e.call.apply(e, [this].concat(o)) || this;
    var u = n.constructor, c = u.autoControlledProps, d = u.getAutoControlledStateFromProps, p = Le(P2(n), "getInitialAutoControlledState", n.props) || {};
    if (process.env.NODE_ENV !== "production") {
      var h = n.constructor, m = h.defaultProps, g = h.name, y = h.propTypes, b = h.getDerivedStateFromProps;
      b !== t.getDerivedStateFromProps && console.error("Auto controlled " + g + " must specify a static getAutoControlledStateFromProps() instead of getDerivedStateFromProps()."), w1(c, function(F) {
        var E = lh(F);
        rh(y, E) || console.error(g + ' is missing "' + E + '" propTypes validation for auto controlled prop "' + F + '".'), rh(y, F) || console.error(g + ' is missing propTypes validation for auto controlled prop "' + F + '".');
      });
      var _ = LM(c, Fr(m));
      yi(_) || console.error(["Do not set defaultProps for autoControlledProps. You can set defaults by", "setting state in the constructor or using an ES7 property initializer", "(https://babeljs.io/blog/2015/06/07/react-on-es6-plus#property-initializers)", "See " + g + ' props: "' + _ + '".'].join(" "));
      var w = sh(c, function(F) {
        return $2(F, "default");
      });
      yi(w) || console.error(["Do not add default props to autoControlledProps.", "Default props are automatically handled.", "See " + g + ' autoControlledProps: "' + w + '".'].join(" "));
    }
    var k = c.reduce(function(F, E) {
      if (F[E] = BM(E, n.props, p), process.env.NODE_ENV !== "production") {
        var I = lh(E), S = n.constructor.name;
        !fs(n.props[I]) && !fs(n.props[E]) && console.error(S + ' prop "' + E + '" is auto controlled. Specify either ' + I + " or " + E + ", but not both.");
      }
      return F;
    }, {});
    return n.state = ue({}, p, k, {
      autoControlledProps: c,
      getAutoControlledStateFromProps: d
    }), n;
  }
  return t.getDerivedStateFromProps = function(r, o) {
    var s = o.autoControlledProps, u = o.getAutoControlledStateFromProps, c = s.reduce(function(p, h) {
      var m = !fs(r[h]);
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
function jM(e) {
  return function(t, n, r) {
    var o = Object(t);
    if (!io(t)) {
      var s = Qo(n);
      t = Fr(t), n = function(c) {
        return s(o[c], c, o);
      };
    }
    var u = e(t, n, r);
    return u > -1 ? o[s ? t[u] : u] : void 0;
  };
}
var WM = Math.max;
function ch(e, t, n) {
  var r = e == null ? 0 : e.length;
  if (!r)
    return -1;
  var o = n == null ? 0 : yc(n);
  return o < 0 && (o = WM(r + o, 0)), _1(e, Qo(t), o);
}
var x1 = jM(ch);
function zM(e, t) {
  var n;
  return zs(e, function(r, o, s) {
    return n = t(r, o, s), !n;
  }), !!n;
}
function uh(e, t, n) {
  if (!Xa(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? io(n) && xd(t, n.length) : r == "string" && t in n) ? vd(n[t], e) : !1;
}
function Nl(e, t, n) {
  var r = yn(e) ? p1 : zM;
  return r(e, Qo(t));
}
var UM = function(t, n) {
  return Nl(lm.toArray(t), {
    type: n
  });
}, dt = function(t) {
  return t == null || Array.isArray(t) && t.length === 0;
}, Ru = {
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
function Bb(e) {
  var t = typeof e;
  return t === "string" || t === "number" ? Ru[e] || e : "";
}
var V = function(t, n) {
  return t && n;
}, Gn = function(t, n) {
  return t && t !== !0 && t + " " + n;
}, rn = function(t, n) {
  return t && (t === !0 ? n : t + " " + n);
}, Zu = function(t, n) {
  return !t || t === !0 ? null : t.replace("large screen", "large-screen").replace(/ vertically/g, "-vertically").split(" ").map(function(r) {
    return r.replace("-", " ") + " " + n;
  }).join(" ");
}, ji = function(t) {
  return t === "justified" ? "justified" : Gn(t, "aligned");
}, Jo = function(t) {
  return Gn(t, "aligned");
}, qn = function(t, n, r) {
  if (n === void 0 && (n = ""), r === void 0 && (r = !1), r && t === "equal")
    return "equal width";
  var o = typeof t;
  return (o === "string" || o === "number") && n ? Bb(t) + " " + n : Bb(t);
}, HM = 200;
function E1(e, t, n, r) {
  var o = -1, s = gm, u = !0, c = e.length, d = [], p = t.length;
  if (!c)
    return d;
  t.length >= HM && (s = jl, u = !1, t = new Ti(t));
  e:
    for (; ++o < c; ) {
      var h = e[o], m = h;
      if (h = h !== 0 ? h : 0, u && m === m) {
        for (var g = p; g--; )
          if (t[g] === m)
            continue e;
        d.push(h);
      } else s(t, m, r) || d.push(h);
    }
  return d;
}
var jb = Oa ? Oa.isConcatSpreadable : void 0;
function YM(e) {
  return yn(e) || wd(e) || !!(jb && e && e[jb]);
}
function Sd(e, t, n, r, o) {
  var s = -1, u = e.length;
  for (n || (n = YM), o || (o = []); ++s < u; ) {
    var c = e[s];
    n(c) ? m1(o, c) : r || (o[o.length] = c);
  }
  return o;
}
var dh = Ws(function(e, t) {
  return Wl(e) ? E1(e, Sd(t, 1, Wl, !0)) : [];
});
function C1(e, t, n) {
  var r = e.length;
  return n = n === void 0 ? r : n, !t && n >= r ? e : Ed(e, t, n);
}
function qM(e, t) {
  for (var n = e.length; n-- && Od(t, e[n], 0) > -1; )
    ;
  return n;
}
function VM(e, t) {
  for (var n = -1, r = e.length; ++n < r && Od(t, e[n], 0) > -1; )
    ;
  return n;
}
function GM(e) {
  return e.split("");
}
var KM = "\\ud800-\\udfff", ZM = "\\u0300-\\u036f", XM = "\\ufe20-\\ufe2f", QM = "\\u20d0-\\u20ff", JM = ZM + XM + QM, eD = "\\ufe0e\\ufe0f", tD = "\\u200d", nD = RegExp("[" + tD + KM + JM + eD + "]");
function vm(e) {
  return nD.test(e);
}
var O1 = "\\ud800-\\udfff", rD = "\\u0300-\\u036f", aD = "\\ufe20-\\ufe2f", oD = "\\u20d0-\\u20ff", iD = rD + aD + oD, sD = "\\ufe0e\\ufe0f", lD = "[" + O1 + "]", fh = "[" + iD + "]", ph = "\\ud83c[\\udffb-\\udfff]", cD = "(?:" + fh + "|" + ph + ")", S1 = "[^" + O1 + "]", T1 = "(?:\\ud83c[\\udde6-\\uddff]){2}", P1 = "[\\ud800-\\udbff][\\udc00-\\udfff]", uD = "\\u200d", k1 = cD + "?", N1 = "[" + sD + "]?", dD = "(?:" + uD + "(?:" + [S1, T1, P1].join("|") + ")" + N1 + k1 + ")*", fD = N1 + k1 + dD, pD = "(?:" + [S1 + fh + "?", fh, T1, P1, lD].join("|") + ")", hD = RegExp(ph + "(?=" + ph + ")|" + pD + fD, "g");
function mD(e) {
  return e.match(hD) || [];
}
function hh(e) {
  return vm(e) ? mD(e) : GM(e);
}
function gD(e, t, n) {
  if (e = Bi(e), e && t === void 0)
    return a1(e);
  if (!e || !(t = _d(t)))
    return e;
  var r = hh(e), o = hh(t), s = VM(r, o), u = qM(r, o) + 1;
  return C1(r, s, u).join("");
}
function vD(e, t, n) {
  t == "__proto__" && Gu ? Gu(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
var yD = Object.prototype, bD = yD.hasOwnProperty;
function _D(e, t, n) {
  var r = e[t];
  (!(bD.call(e, t) && vd(r, n)) || n === void 0 && !(t in e)) && vD(e, t, n);
}
function I1(e, t, n, r) {
  if (!Xa(e))
    return e;
  t = gc(t, e);
  for (var o = -1, s = t.length, u = s - 1, c = e; c != null && ++o < s; ) {
    var d = js(t[o]), p = n;
    if (d === "__proto__" || d === "constructor" || d === "prototype")
      return e;
    if (o != u) {
      var h = c[d];
      p = void 0, p === void 0 && (p = Xa(h) ? h : xd(t[o + 1]) ? [] : {});
    }
    _D(c, d, p), c = c[d];
  }
  return e;
}
function wD(e, t, n) {
  for (var r = -1, o = t.length, s = {}; ++r < o; ) {
    var u = t[r], c = vc(e, u);
    n(c, u) && I1(s, gc(u, e), c);
  }
  return s;
}
function xD(e, t) {
  return wD(e, t, function(n, r) {
    return y1(e, r);
  });
}
function ED(e) {
  var t = e == null ? 0 : e.length;
  return t ? Sd(e) : [];
}
function CD(e) {
  return r1(t1(e, void 0, ED), e + "");
}
var Td = CD(function(e, t) {
  return e == null ? {} : xD(e, t);
}), OD = d1(Object.getPrototypeOf, Object), SD = "[object Object]", TD = Function.prototype, PD = Object.prototype, A1 = TD.toString, kD = PD.hasOwnProperty, ND = A1.call(Object);
function Pd(e) {
  if (!jr(e) || ka(e) != SD)
    return !1;
  var t = OD(e);
  if (t === null)
    return !0;
  var n = kD.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && A1.call(n) == ND;
}
function Tt(e) {
  return e == null;
}
function ID(e, t, n) {
  for (var r = -1, o = e.length; ++r < o; ) {
    var s = e[r], u = t(s);
    if (u != null && (c === void 0 ? u === u && !Oi(u) : n(u, c)))
      var c = u, d = s;
  }
  return d;
}
function AD(e, t) {
  return e < t;
}
function Wb(e) {
  return e && e.length ? ID(e, Xo, AD) : void 0;
}
function RD(e, t) {
  for (var n, r = -1, o = e.length; ++r < o; ) {
    var s = t(e[r]);
    s !== void 0 && (n = n === void 0 ? s : n + s);
  }
  return n;
}
function zb(e) {
  return e && e.length ? RD(e, Xo) : 0;
}
function R1(e, t) {
  var n = -1, r = io(e) ? Array(e.length) : [];
  return zs(e, function(o, s, u) {
    r[++n] = t(o, s, u);
  }), r;
}
function xn(e, t) {
  var n = yn(e) ? wi : R1;
  return n(e, Qo(t));
}
function MD(e, t) {
  var n = e.length;
  for (e.sort(t); n--; )
    e[n] = e[n].value;
  return e;
}
function DD(e, t) {
  if (e !== t) {
    var n = e !== void 0, r = e === null, o = e === e, s = Oi(e), u = t !== void 0, c = t === null, d = t === t, p = Oi(t);
    if (!c && !p && !s && e > t || s && u && d && !c && !p || r && u && d || !n && d || !o)
      return 1;
    if (!r && !s && !p && e < t || p && n && o && !r && !s || c && n && o || !u && o || !d)
      return -1;
  }
  return 0;
}
function LD(e, t, n) {
  for (var r = -1, o = e.criteria, s = t.criteria, u = o.length, c = n.length; ++r < u; ) {
    var d = DD(o[r], s[r]);
    if (d) {
      if (r >= c)
        return d;
      var p = n[r];
      return d * (p == "desc" ? -1 : 1);
    }
  }
  return e.index - t.index;
}
function FD(e, t, n) {
  t.length ? t = wi(t, function(s) {
    return yn(s) ? function(u) {
      return vc(u, s.length === 1 ? s[0] : s);
    } : s;
  }) : t = [Xo];
  var r = -1;
  t = wi(t, l1(Qo));
  var o = R1(e, function(s, u, c) {
    var d = wi(t, function(p) {
      return p(s);
    });
    return { criteria: d, index: ++r, value: s };
  });
  return MD(o, function(s, u) {
    return LD(s, u, n);
  });
}
var $D = Ws(function(e, t) {
  if (e == null)
    return [];
  var n = t.length;
  return n > 1 && uh(e, t[0], t[1]) ? t = [] : n > 2 && uh(t[0], t[1], t[2]) && (t = [t[0]]), FD(e, Sd(t), []);
});
function BD(e, t, n) {
  return e && e.length ? (t = t === void 0 ? 1 : yc(t), Ed(e, 0, t < 0 ? 0 : t)) : [];
}
var mh = function() {
  return 0;
};
if (process.env.NODE_ENV !== "production") {
  var Sp = [], Ub = [];
  mh = function(t, n) {
    if (t === n) return 0;
    var r = t.length, o = n.length;
    if (r === 0) return o;
    if (o === 0) return r;
    for (var s, u, c, d, p = 0, h = 0; p < r; )
      Ub[p] = t.charCodeAt(p), Sp[p] = ++p;
    for (; h < o; )
      for (s = n.charCodeAt(h), c = h++, u = h, p = 0; p < r; p++)
        d = s === Ub[p] ? c : c + 1, c = Sp[p], u = Sp[p] = c > u ? d > u ? u + 1 : d : d > c ? c + 1 : d;
    return u;
  };
}
var jD = function() {
  var t;
  return (t = Object.prototype.toString).call.apply(t, arguments);
}, WD = function(t, n) {
  if (t[n] !== void 0 && !(typeof Element > "u") && !(t[n] instanceof Element))
    return new Error('Invalid prop "' + n + '" supplied, expected a DOM node.');
}, M1 = function(t) {
  if (!Array.isArray(t))
    throw new Error("Invalid argument supplied to suggest, expected an instance of array.");
  var n = mc(function(o) {
    var s = o.split(" ");
    return BD($D(xn(t, function(u) {
      var c = u.split(" "), d = zb(xn(xn(s, function(h) {
        return xn(c, function(m) {
          return mh(h, m);
        });
      }), Wb)), p = zb(xn(xn(c, function(h) {
        return xn(s, function(m) {
          return mh(h, m);
        });
      }), Wb));
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
}, Yt = function(t) {
  return function(n, r, o) {
    if (!Array.isArray(t))
      throw new Error(["Invalid argument supplied to disallow, expected an instance of array.", " See `" + r + "` prop in `" + o + "`."].join(""));
    if (!(Tt(n[r]) || n[r] === !1)) {
      var s = t.reduce(function(u, c) {
        return !Tt(n[c]) && n[c] !== !1 ? [].concat(u, [c]) : u;
      }, []);
      if (s.length > 0)
        return new Error(["Prop `" + r + "` in `" + o + "` conflicts with props: `" + s.join("`, `") + "`.", "They cannot be defined together, choose one or the other."].join(" "));
    }
  };
}, Mt = function(t) {
  return function(n, r, o) {
    for (var s = arguments.length, u = new Array(s > 3 ? s - 3 : 0), c = 3; c < s; c++)
      u[c - 3] = arguments[c];
    if (!Array.isArray(t))
      throw new Error(["Invalid argument supplied to every, expected an instance of array.", "See `" + r + "` prop in `" + o + "`."].join(" "));
    var d = [];
    return t.forEach(function(p) {
      if (typeof p != "function")
        throw new Error('every() argument "validators" should contain functions, found: ' + jD(p) + ".");
      var h = p.apply(void 0, [n, r, o].concat(u));
      h && d.push(h);
    }), d[0];
  };
}, D1 = function(t, n) {
  return function(r, o, s) {
    for (var u = arguments.length, c = new Array(u > 3 ? u - 3 : 0), d = 3; d < u; d++)
      c[d - 3] = arguments[d];
    if (!Pd(t))
      throw new Error(["Invalid argument supplied to givenProps, expected an object.", "See `" + o + "` prop in `" + s + "`."].join(" "));
    if (typeof n != "function")
      throw new Error(["Invalid argument supplied to givenProps, expected a function.", "See `" + o + "` prop in `" + s + "`."].join(" "));
    var p = Fr(t).every(function(g) {
      var y = t[g];
      return typeof y == "function" ? !y.apply(void 0, [r, g, s].concat(c)) : y === r[o];
    });
    if (p) {
      var h = n.apply(void 0, [r, o, s].concat(c));
      if (h) {
        var m = "{ " + Fr(Td(Fr(t), r)).map(function(g) {
          var y = r[g], b = y;
          return typeof y == "string" ? b = '"' + y + '"' : Array.isArray(y) ? b = "[" + y.join(", ") + "]" : Xa(y) && (b = "{...}"), g + ": " + b;
        }).join(", ") + " }";
        return h.message = "Given props " + m + ": " + h.message, h;
      }
    }
  };
}, Po = function(t) {
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
}, Xu = function(t) {
  return function(n, r, o) {
    if (!Array.isArray(t))
      throw new Error(["Invalid argument supplied to some, expected an instance of array.", "See `" + r + "` prop in `" + o + "`."].join(" "));
    var s = n[r];
    if (!(Tt(s) || s === !1)) {
      var u = s.replace("large screen", "large-screen").replace(/ vertically/g, "-vertically").split(" ").map(function(d) {
        return gD(d).replace("-", " ");
      }), c = dh(u, t);
      if (c.length > 0)
        return new Error("`" + r + "` prop in `" + o + "` has invalid values: `" + c.join("`, `") + "`.");
    }
  };
}, Nt = function() {
  return Mt([Yt(["children"]), l.node]).apply(void 0, arguments);
}, Ct = function() {
  return Mt([Yt(["children"]), l.oneOfType([l.func, l.node, l.object, l.arrayOf(l.oneOfType([l.node, l.object]))])]).apply(void 0, arguments);
}, bc = function() {
  return Mt([Yt(["children"]), l.arrayOf(Ct)]).apply(void 0, arguments);
}, ym = l.shape({
  current: l.object
}), L1 = l.oneOfType([l.func, ym]), bm = { exports: {} }, ml = {}, Tp = { exports: {} };
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
var Hb;
function F1() {
  return Hb || (Hb = 1, function(e) {
    (function() {
      var t = !!(typeof window < "u" && window.document && window.document.createElement), n = {
        canUseDOM: t,
        canUseWorkers: typeof Worker < "u",
        canUseEventListeners: t && !!(window.addEventListener || window.attachEvent),
        canUseViewport: t && !!window.screen
      };
      e.exports ? e.exports = n : window.ExecutionEnvironment = n;
    })();
  }(Tp)), Tp.exports;
}
var Yb;
function zD() {
  if (Yb) return ml;
  Yb = 1, Object.defineProperty(ml, "__esModule", { value: !0 });
  var e = F1(), t = J;
  function n(P) {
    return (n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(C) {
      return typeof C;
    } : function(C) {
      return C && typeof Symbol == "function" && C.constructor === Symbol && C !== Symbol.prototype ? "symbol" : typeof C;
    })(P);
  }
  function r(P, C) {
    if (!(P instanceof C)) throw new TypeError("Cannot call a class as a function");
  }
  function o(P, C) {
    for (var T = 0; T < C.length; T++) {
      var A = C[T];
      A.enumerable = A.enumerable || !1, A.configurable = !0, "value" in A && (A.writable = !0), Object.defineProperty(P, A.key, A);
    }
  }
  function s(P, C, T) {
    return C && o(P.prototype, C), P;
  }
  function u(P, C, T) {
    return C in P ? Object.defineProperty(P, C, { value: T, enumerable: !0, configurable: !0, writable: !0 }) : P[C] = T, P;
  }
  function c(P, C) {
    if (typeof C != "function" && C !== null) throw new TypeError("Super expression must either be null or a function");
    P.prototype = Object.create(C && C.prototype, { constructor: { value: P, writable: !0, configurable: !0 } }), C && p(P, C);
  }
  function d(P) {
    return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(C) {
      return C.__proto__ || Object.getPrototypeOf(C);
    })(P);
  }
  function p(P, C) {
    return (p = Object.setPrototypeOf || function(T, A) {
      return T.__proto__ = A, T;
    })(P, C);
  }
  function h(P) {
    if (P === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return P;
  }
  function m(P, C) {
    return !C || typeof C != "object" && typeof C != "function" ? h(P) : C;
  }
  var g = function() {
    function P(C) {
      r(this, P), u(this, "handlers", void 0), this.handlers = C.slice(0);
    }
    return s(P, [{ key: "addHandlers", value: function(C) {
      for (var T = this.handlers.slice(0), A = C.length, B = 0; B < A; B += 1) T.push(C[B]);
      return new P(T);
    } }, { key: "dispatchEvent", value: function(C, T) {
      var A = this.handlers.length - 1;
      if (T) {
        for (var B = A; B >= 0; B -= 1) this.handlers[B].called || (this.handlers[B].called = !0, this.handlers[B](C));
        for (var H = A; H >= 0; H -= 1) this.handlers[H].called = !1;
      } else
        (0, this.handlers[A])(C);
    } }, { key: "hasHandlers", value: function() {
      return this.handlers.length > 0;
    } }, { key: "removeHandlers", value: function(C) {
      for (var T = [], A = this.handlers.length, B = 0; B < A; B += 1) {
        var H = this.handlers[B];
        C.indexOf(H) === -1 && T.push(H);
      }
      return new P(T);
    } }]), P;
  }();
  function y(P) {
    var C = /* @__PURE__ */ new Map();
    return P.forEach(function(T, A) {
      C.set(A, T);
    }), C;
  }
  function b(P) {
    return Array.isArray(P) ? P : [P];
  }
  var _ = function(P) {
    return P !== null && n(P) === "object" && P.hasOwnProperty("current");
  };
  function w(P) {
    return P === "document" ? document : P === "window" ? window : _(P) ? P.current || document : P || document;
  }
  var k = function() {
    function P(C, T) {
      r(this, P), u(this, "handlerSets", void 0), u(this, "poolName", void 0), this.handlerSets = T, this.poolName = C;
    }
    return s(P, [{ key: "addHandlers", value: function(C, T) {
      var A = y(this.handlerSets);
      if (A.has(C)) {
        var B = A.get(C);
        A.set(C, B.addHandlers(T));
      } else A.set(C, new g(T));
      return new P(this.poolName, A);
    } }, { key: "dispatchEvent", value: function(C, T) {
      var A = this.handlerSets.get(C), B = this.poolName === "default";
      A && A.dispatchEvent(T, B);
    } }, { key: "hasHandlers", value: function(C) {
      if (!C) return this.handlerSets.size > 0;
      var T = this.handlerSets.get(C);
      return !!T && T.hasHandlers();
    } }, { key: "removeHandlers", value: function(C, T) {
      var A = y(this.handlerSets);
      if (!A.has(C)) return new P(this.poolName, A);
      var B = A.get(C).removeHandlers(T);
      return B.hasHandlers() ? A.set(C, B) : A.delete(C), new P(this.poolName, A);
    } }]), P;
  }();
  u(k, "createByType", function(P, C, T) {
    var A = /* @__PURE__ */ new Map();
    return A.set(C, new g(T)), new k(P, A);
  });
  var F = function() {
    function P(C) {
      var T = this;
      r(this, P), u(this, "handlers", /* @__PURE__ */ new Map()), u(this, "pools", /* @__PURE__ */ new Map()), u(this, "target", void 0), u(this, "createEmitter", function(A) {
        return function(B) {
          T.pools.forEach(function(H) {
            H.dispatchEvent(A, B);
          });
        };
      }), this.target = C;
    }
    return s(P, [{ key: "addHandlers", value: function(C, T, A) {
      if (this.pools.has(C)) {
        var B = this.pools.get(C);
        this.pools.set(C, B.addHandlers(T, A));
      } else this.pools.set(C, k.createByType(C, T, A));
      this.handlers.has(T) || this.addTargetHandler(T);
    } }, { key: "hasHandlers", value: function() {
      return this.handlers.size > 0;
    } }, { key: "removeHandlers", value: function(C, T, A) {
      if (this.pools.has(C)) {
        var B = this.pools.get(C).removeHandlers(T, A);
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
    } }]), P;
  }(), E = function() {
    function P() {
      var C = this;
      r(this, P), u(this, "targets", /* @__PURE__ */ new Map()), u(this, "getTarget", function(T) {
        var A = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], B = w(T);
        if (C.targets.has(B)) return C.targets.get(B);
        if (!A) return null;
        var H = new F(B);
        return C.targets.set(B, H), H;
      }), u(this, "removeTarget", function(T) {
        C.targets.delete(w(T));
      });
    }
    return s(P, [{ key: "sub", value: function(C, T) {
      var A = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (e.canUseDOM) {
        var B = A.target, H = B === void 0 ? document : B, ne = A.pool, U = ne === void 0 ? "default" : ne;
        this.getTarget(H).addHandlers(U, C, b(T));
      }
    } }, { key: "unsub", value: function(C, T) {
      var A = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (e.canUseDOM) {
        var B = A.target, H = B === void 0 ? document : B, ne = A.pool, U = ne === void 0 ? "default" : ne, re = this.getTarget(H, !1);
        re && (re.removeHandlers(U, C, b(T)), re.hasHandlers() || this.removeTarget(H));
      }
    } }]), P;
  }(), I = new E(), S = function(P) {
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
      var A = T.name, B = T.on, H = T.pool, ne = T.target;
      I.sub(A, B, { pool: H, target: ne });
    } }, { key: "unsubscribe", value: function(T) {
      var A = T.name, B = T.on, H = T.pool, ne = T.target;
      I.unsub(A, B, { pool: H, target: ne });
    } }, { key: "render", value: function() {
      return null;
    } }]), C;
  }();
  return u(S, "defaultProps", { pool: "default", target: "document" }), S.propTypes = {}, ml.instance = I, ml.default = S, ml;
}
var gl = {}, qb;
function UD() {
  if (qb) return gl;
  qb = 1, Object.defineProperty(gl, "__esModule", { value: !0 });
  var e = F1(), t = nr, n = J;
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
    for (var A = 0; A < T.length; A++) {
      var B = T[A];
      B.enumerable = B.enumerable || !1, B.configurable = !0, "value" in B && (B.writable = !0), Object.defineProperty(C, B.key, B);
    }
  }
  function u(C, T, A) {
    return T && s(C.prototype, T), C;
  }
  function c(C, T, A) {
    return T in C ? Object.defineProperty(C, T, {
      value: A,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : C[T] = A, C;
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
    return p = Object.setPrototypeOf ? Object.getPrototypeOf : function(A) {
      return A.__proto__ || Object.getPrototypeOf(A);
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
  function g(C, T) {
    return T && (typeof T == "object" || typeof T == "function") ? T : m(C);
  }
  var y = /* @__PURE__ */ function() {
    function C(T) {
      o(this, C), c(this, "handlers", void 0), this.handlers = T.slice(0);
    }
    return u(C, [{
      key: "addHandlers",
      value: function(A) {
        for (var B = this.handlers.slice(0), H = A.length, ne = 0; ne < H; ne += 1)
          B.push(A[ne]);
        return new C(B);
      }
      /**
       * @see https://jsperf.com/suir-eventset-dispatchsingle
       * @see https://jsperf.com/suir-eventset-dispatchmultiple2
       */
    }, {
      key: "dispatchEvent",
      value: function(A, B) {
        var H = this.handlers.length - 1;
        if (!B) {
          var ne = this.handlers[H];
          ne(A);
          return;
        }
        for (var U = H; U >= 0; U -= 1)
          this.handlers[U].called || (this.handlers[U].called = !0, this.handlers[U](A));
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
      value: function(A) {
        for (var B = [], H = this.handlers.length, ne = 0; ne < H; ne += 1) {
          var U = this.handlers[ne];
          A.indexOf(U) === -1 && B.push(U);
        }
        return new C(B);
      }
    }]), C;
  }();
  function b(C) {
    var T = /* @__PURE__ */ new Map();
    return C.forEach(function(A, B) {
      T.set(B, A);
    }), T;
  }
  function _(C) {
    return Array.isArray(C) ? C : [C];
  }
  var w = function(T) {
    return T !== null && r(T) === "object" && T.hasOwnProperty("current");
  };
  function k(C) {
    return C === "document" ? document : C === "window" ? window : w(C) ? C.current || document : C || document;
  }
  var F = /* @__PURE__ */ function() {
    function C(T, A) {
      o(this, C), c(this, "handlerSets", void 0), c(this, "poolName", void 0), this.handlerSets = A, this.poolName = T;
    }
    return u(C, [{
      key: "addHandlers",
      value: function(A, B) {
        var H = b(this.handlerSets);
        if (H.has(A)) {
          var ne = H.get(A);
          H.set(A, ne.addHandlers(B));
        } else
          H.set(A, new y(B));
        return new C(this.poolName, H);
      }
    }, {
      key: "dispatchEvent",
      value: function(A, B) {
        var H = this.handlerSets.get(A), ne = this.poolName === "default";
        H && H.dispatchEvent(B, ne);
      }
    }, {
      key: "hasHandlers",
      value: function(A) {
        if (!A)
          return this.handlerSets.size > 0;
        var B = this.handlerSets.get(A);
        return B ? B.hasHandlers() : !1;
      }
    }, {
      key: "removeHandlers",
      value: function(A, B) {
        var H = b(this.handlerSets);
        if (!H.has(A))
          return new C(this.poolName, H);
        var ne = H.get(A), U = ne.removeHandlers(B);
        return U.hasHandlers() ? H.set(A, U) : H.delete(A), new C(this.poolName, H);
      }
    }]), C;
  }();
  c(F, "createByType", function(C, T, A) {
    var B = /* @__PURE__ */ new Map();
    return B.set(T, new y(A)), new F(C, B);
  });
  var E = /* @__PURE__ */ function() {
    function C(T) {
      var A = this;
      o(this, C), c(this, "handlers", /* @__PURE__ */ new Map()), c(this, "pools", /* @__PURE__ */ new Map()), c(this, "target", void 0), c(this, "createEmitter", function(B) {
        return function(H) {
          A.pools.forEach(function(ne) {
            ne.dispatchEvent(B, H);
          });
        };
      }), this.target = T;
    }
    return u(C, [{
      key: "addHandlers",
      value: function(A, B, H) {
        if (this.pools.has(A)) {
          var ne = this.pools.get(A);
          this.pools.set(A, ne.addHandlers(B, H));
        } else
          this.pools.set(A, F.createByType(A, B, H));
        this.handlers.has(B) || this.addTargetHandler(B);
      }
    }, {
      key: "hasHandlers",
      value: function() {
        return this.handlers.size > 0;
      }
    }, {
      key: "removeHandlers",
      value: function(A, B, H) {
        if (this.pools.has(A)) {
          var ne = this.pools.get(A), U = ne.removeHandlers(B, H);
          U.hasHandlers() ? this.pools.set(A, U) : this.pools.delete(A);
          var re = !1;
          this.pools.forEach(function(he) {
            return re = re || he.hasHandlers(B);
          }), re || this.removeTargetHandler(B);
        }
      }
    }, {
      key: "addTargetHandler",
      value: function(A) {
        var B = this.createEmitter(A);
        this.handlers.set(A, B), this.target.addEventListener(A, B, !0);
      }
    }, {
      key: "removeTargetHandler",
      value: function(A) {
        this.handlers.has(A) && (this.target.removeEventListener(A, this.handlers.get(A), !0), this.handlers.delete(A));
      }
    }]), C;
  }(), I = /* @__PURE__ */ function() {
    function C() {
      var T = this;
      o(this, C), c(this, "targets", /* @__PURE__ */ new Map()), c(this, "getTarget", function(A) {
        var B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, H = k(A);
        if (T.targets.has(H))
          return T.targets.get(H);
        if (!B) return null;
        var ne = new E(H);
        return T.targets.set(H, ne), ne;
      }), c(this, "removeTarget", function(A) {
        T.targets.delete(k(A));
      });
    }
    return u(C, [{
      key: "sub",
      value: function(A, B) {
        var H = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (e.canUseDOM) {
          var ne = H.target, U = ne === void 0 ? document : ne, re = H.pool, he = re === void 0 ? "default" : re, ge = this.getTarget(U);
          ge.addHandlers(he, A, _(B));
        }
      }
    }, {
      key: "unsub",
      value: function(A, B) {
        var H = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (e.canUseDOM) {
          var ne = H.target, U = ne === void 0 ? document : ne, re = H.pool, he = re === void 0 ? "default" : re, ge = this.getTarget(U, !1);
          ge && (ge.removeHandlers(he, A, _(B)), ge.hasHandlers() || this.removeTarget(U));
        }
      }
    }]), C;
  }(), S = new I(), P = /* @__PURE__ */ function(C) {
    d(T, C);
    function T() {
      return o(this, T), g(this, p(T).apply(this, arguments));
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
        var H = B.name, ne = B.on, U = B.pool, re = B.target;
        S.sub(H, ne, {
          pool: U,
          target: re
        });
      }
    }, {
      key: "unsubscribe",
      value: function(B) {
        var H = B.name, ne = B.on, U = B.pool, re = B.target;
        S.unsub(H, ne, {
          pool: U,
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
  return c(P, "defaultProps", {
    pool: "default",
    target: "document"
  }), P.propTypes = {
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
  }, gl.instance = S, gl.default = P, gl;
}
var Qu;
process.env.NODE_ENV === "production" ? Qu = zD() : Qu = UD();
bm.exports = Qu.default;
var Sl = bm.exports.instance = Qu.instance, HD = bm.exports;
const Ya = /* @__PURE__ */ hc(HD);
function $1() {
}
var YD = 1 / 0, qD = hs && 1 / mm(new hs([, -0]))[1] == YD ? function(e) {
  return new hs(e);
} : $1, VD = 200;
function B1(e, t, n) {
  var r = -1, o = gm, s = e.length, u = !0, c = [], d = c;
  if (s >= VD) {
    var p = qD(e);
    if (p)
      return mm(p);
    u = !1, o = jl, d = new Ti();
  } else
    d = c;
  e:
    for (; ++r < s; ) {
      var h = e[r], m = h;
      if (h = h !== 0 ? h : 0, u && m === m) {
        for (var g = d.length; g--; )
          if (d[g] === m)
            continue e;
        c.push(h);
      } else o(d, m, n) || (d !== c && d.push(m), c.push(h));
    }
  return c;
}
function kd(e) {
  return e && e.length ? B1(e) : [];
}
var GD = "[object Number]";
function KD(e) {
  return typeof e == "number" || jr(e) && ka(e) == GD;
}
var ZD = "[object String]";
function _m(e) {
  return typeof e == "string" || !yn(e) && jr(e) && ka(e) == ZD;
}
var XD = "[object Boolean]";
function QD(e) {
  return e === !0 || e === !1 || jr(e) && ka(e) == XD;
}
function j1(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = j1(e[t])) && (r && (r += " "), r += n);
  else for (t in e) e[t] && (r && (r += " "), r += t);
  return r;
}
function Ge() {
  for (var e, t, n = 0, r = ""; n < arguments.length; ) (e = arguments[n++]) && (t = j1(e)) && (r && (r += " "), r += t);
  return r;
}
var Vb = {};
function gh(e, t, n, r) {
  if (r === void 0 && (r = {}), typeof e != "function" && typeof e != "string")
    throw new Error("createShorthand() Component must be a string or function.");
  if (Tt(n) || QD(n))
    return null;
  var o = _m(n), s = KD(n), u = bs(n), c = /* @__PURE__ */ L.isValidElement(n), d = Pd(n), p = o || s || yn(n);
  if (!u && !c && !d && !p)
    return process.env.NODE_ENV !== "production" && console.error(["Shorthand value must be a string|number|array|object|ReactElement|function.", " Use null|undefined|boolean for none", " Received " + typeof n + "."].join("")), null;
  var h = r, m = h.defaultProps, g = m === void 0 ? {} : m, y = c && n.props || d && n || p && t(n), b = r, _ = b.overrideProps, w = _ === void 0 ? {} : _;
  w = bs(w) ? w(ue({}, g, y)) : w;
  var k = ue({}, g, y, w);
  if (g.className || w.className || y.className) {
    var F = Ge(g.className, w.className, y.className);
    k.className = kd(F.split(" ")).join(" ");
  }
  if ((g.style || w.style || y.style) && (k.style = ue({}, g.style, y.style, w.style)), Tt(k.key)) {
    var E = k.childKey, I = r, S = I.autoGenerateKey, P = S === void 0 ? !0 : S;
    Tt(E) ? P && (o || s) && (k.key = n) : (k.key = typeof E == "function" ? E(k) : E, delete k.childKey);
  }
  if (c)
    return /* @__PURE__ */ L.cloneElement(n, k);
  if (typeof k.children == "function")
    return k.children(e, ue({}, k, {
      children: void 0
    }));
  if (p || d)
    return /* @__PURE__ */ L.createElement(e, k);
  if (u)
    return process.env.NODE_ENV !== "production" && (Vb[e] || (Vb[e] = !0, console.warn('Warning: There is a deprecated shorthand function usage for "' + e + '". It is deprecated and will be removed in v3 release. Please follow our upgrade guide: https://github.com/Semantic-Org/Semantic-UI-React/pull/4029'))), n(e, k, k.children);
}
function Gt(e, t) {
  if (typeof e != "function" && typeof e != "string")
    throw new Error("createShorthandFactory() Component must be a string or function.");
  return function(n, r) {
    return gh(e, t, n, r);
  };
}
var JD = /* @__PURE__ */ Gt("div", function(e) {
  return {
    children: e
  };
}), eL = /* @__PURE__ */ Gt("input", function(e) {
  return {
    type: e
  };
}), vh = /* @__PURE__ */ Gt("label", function(e) {
  return {
    children: e
  };
}), Ye = function(t, n) {
  var r = t.handledProps, o = r === void 0 ? [] : r;
  return Object.keys(n).reduce(function(s, u) {
    return u === "childKey" || o.indexOf(u) === -1 && (s[u] = n[u]), s;
  }, {});
};
function Xe(e, t, n) {
  var r = e.defaultProps, o = r === void 0 ? {} : r;
  if (t.as && t.as !== o.as) return t.as;
  if (n) {
    var s = n();
    if (s) return s;
  }
  return t.href ? "a" : o.as || "div";
}
function tL(e, t) {
  return wi(t, function(n) {
    return e[n];
  });
}
function W1(e) {
  return e == null ? [] : tL(e, Fr(e));
}
var nL = Math.max;
function _a(e, t, n, r) {
  e = io(e) ? e : W1(e), n = n ? yc(n) : 0;
  var o = e.length;
  return n < 0 && (n = nL(o + n, 0)), _m(e) ? n <= o && e.indexOf(t, n) > -1 : !!o && Od(e, t, n) > -1;
}
var z1 = [
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
], rL = [
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
], aL = [].concat(z1, rL), oL = ["alt", "height", "src", "srcSet", "width", "loading"], wm = function(t, n) {
  n === void 0 && (n = {});
  var r = n, o = r.htmlProps, s = o === void 0 ? aL : o, u = r.includeAria, c = u === void 0 ? !0 : u, d = {}, p = {};
  return w1(t, function(h, m) {
    var g = c && (/^aria-.*$/.test(m) || m === "role"), y = _a(s, m) || g ? d : p;
    y[m] = h;
  }), [d, p];
}, iL = typeof document == "object" && document !== null, sL = typeof window == "object" && window !== null && window.self === window, xi = function e() {
  return Tt(e.override) ? iL && sL : e.override;
}, lL = Math.max, cL = Math.min;
function uL(e, t, n) {
  return e >= cL(t, n) && e < lL(t, n);
}
function Gb(e, t, n) {
  return t = ps(t), n === void 0 ? (n = t, t = 0) : n = ps(n), e = o1(e), uL(e, t, n);
}
function dL(e) {
  return e && e.length ? e[0] : void 0;
}
var Io = function(t, n) {
  if (Nl([n, t], Tt)) return !1;
  if (n.target && (Le(n.target, "setAttribute", "data-suir-click-target", !0), document.querySelector("[data-suir-click-target=true]")))
    return Le(n.target, "removeAttribute", "data-suir-click-target"), t.contains(n.target);
  var r = n.clientX, o = n.clientY;
  if (Nl([r, o], Tt)) return !1;
  var s = t.getClientRects();
  if (!t.offsetWidth || !t.offsetHeight || !s || !s.length) return !1;
  var u = dL(s), c = u.top, d = u.bottom, p = u.left, h = u.right;
  return Nl([c, d, p, h], Tt) ? !1 : Gb(o, c, d + 1e-3) && Gb(r, p, h + 1e-3);
}, U1 = function(t) {
  return {
    active: !1,
    type: "ellipsisItem",
    value: t
  };
}, fL = function() {
  return {
    active: !1,
    type: "firstItem",
    value: 1
  };
}, pL = function(t) {
  return {
    active: !1,
    type: "prevItem",
    value: Math.max(1, t - 1)
  };
}, hL = function(t) {
  return function(n) {
    return {
      active: t === n,
      type: "pageItem",
      value: n
    };
  };
}, mL = function(t, n) {
  return {
    active: !1,
    type: "nextItem",
    value: Math.min(t + 1, n)
  };
}, gL = function(t) {
  return {
    active: !1,
    type: "lastItem",
    value: t
  };
}, vL = Math.ceil, yL = Math.max;
function bL(e, t, n, r) {
  for (var o = -1, s = yL(vL((t - e) / (n || 1)), 0), u = Array(s); s--; )
    u[++o] = e, e += n;
  return u;
}
function _L(e) {
  return function(t, n, r) {
    return r && typeof r != "number" && uh(t, n, r) && (n = r = void 0), t = ps(t), n === void 0 ? (n = t, t = 0) : n = ps(n), r = r === void 0 ? t < n ? 1 : -1 : ps(r), bL(t, n, r);
  };
}
var wL = _L(), xL = function(t, n, r) {
  var o = n - 1, s = o !== t + 1, u = s ? U1 : r;
  return u(o);
}, EL = function(t, n, r) {
  var o = t + 1, s = o !== n - 1, u = s ? U1 : r;
  return u(o);
}, Mu = function(t, n, r) {
  return xn(wL(t, n + 1), r);
}, CL = function(t, n) {
  var r = t.activePage, o = t.boundaryRange, s = t.hideEllipsis, u = t.siblingRange, c = t.totalPages, d = s ? 0 : 1, p = o, h = Mu(1, p, n), m = c + 1 - o, g = Mu(m, c, n), y = Math.min(Math.max(r - u, p + d + 1), m - d - 2 * u - 1), b = y + 2 * u, _ = Mu(y, b, n);
  return [].concat(h, [!s && xL(p, y, n)], _, [!s && EL(b, m, n)], g).filter(Boolean);
}, OL = function(t) {
  var n = t.boundaryRange, r = t.hideEllipsis, o = t.siblingRange, s = t.totalPages, u = 2 * n, c = r ? 0 : 2, d = 2 * o;
  return 1 + c + d + u >= s;
}, SL = function(t) {
  var n = t.activePage, r = t.boundaryRange, o = t.hideEllipsis, s = t.siblingRange, u = t.totalPages;
  return {
    activePage: +n,
    boundaryRange: +r,
    hideEllipsis: !!o,
    siblingRange: +s,
    totalPages: +u
  };
}, TL = function(t) {
  var n = SL(t), r = n.activePage, o = n.totalPages, s = hL(r), u = OL(n) ? Mu(1, o, s) : CL(n, s);
  return [fL(), pL(r)].concat(u, [mL(r, o), gL(o)]);
}, oa = ["red", "orange", "yellow", "olive", "green", "teal", "blue", "violet", "purple", "pink", "brown", "grey", "black"], _c = ["left", "right"], dr = ["mini", "tiny", "small", "medium", "large", "big", "huge", "massive"], Wi = ["left", "center", "right", "justified"], zi = ["bottom", "middle", "top"], H1 = ["mobile", "tablet", "computer", "large screen", "widescreen"], or = [].concat(Fr(Ru), Fr(Ru).map(Number), W1(Ru)), PL = ["american sign language interpreting", "assistive listening systems", "audio description", "blind", "braille", "closed captioning", "closed captioning outline", "deaf", "low vision", "phone volume", "question circle", "question circle outline", "sign language", "tty", "universal access", "wheelchair"], kL = ["angle double down", "angle double left", "angle double right", "angle double up", "angle down", "angle left", "angle right", "angle up", "arrow alternate circle down", "arrow alternate circle down outline", "arrow alternate circle left", "arrow alternate circle left outline", "arrow alternate circle right", "arrow alternate circle right outline", "arrow alternate circle up", "arrow alternate circle up outline", "arrow circle down", "arrow circle left", "arrow circle right", "arrow circle up", "arrow down", "arrow left", "arrow right", "arrow up", "arrows alternate", "arrows alternate horizontal", "arrows alternate vertical", "caret down", "caret left", "caret right", "caret square down", "caret square down outline", "caret square left", "caret square left outline", "caret square right", "caret square right outline", "caret square up", "caret square up outline", "caret up", "cart arrow down", "chart line", "chevron circle down", "chevron circle left", "chevron circle right", "chevron circle up", "chevron down", "chevron left", "chevron right", "chevron up", "cloud download", "cloud upload", "download", "exchange", "expand arrows alternate", "external alternate", "external square alternate", "hand point down", "hand point down outline", "hand point left", "hand point left outline", "hand point right", "hand point right outline", "hand point up", "hand point up outline", "hand pointer", "hand pointer outline", "history", "level down alternate", "level up alternate", "location arrow", "long arrow alternate down", "long arrow alternate left", "long arrow alternate right", "long arrow alternate up", "mouse pointer", "play", "random", "recycle", "redo", "redo alternate", "reply", "reply all", "retweet", "share", "share square", "share square outline", "sign-in", "sign-out", "sign-in alternate", "sign-out alternate", "sort", "sort alphabet down", "sort alphabet up", "sort amount down", "sort amount up", "sort down", "sort numeric down", "sort numeric up", "sort up", "sync", "sync alternate", "text height", "text width", "undo", "undo alternate", "upload", "zoom-in", "zoom-out"], NL = ["audio description", "backward", "circle", "circle outline", "closed captioning", "closed captioning outline", "compress", "eject", "expand", "expand arrows alternate", "fast backward", "fast forward", "file audio", "file audio outline", "file video", "file video outline", "film", "forward", "headphones", "microphone", "microphone slash", "music", "pause", "pause circle", "pause circle outline", "phone volume", "play", "play circle", "play circle outline", "podcast", "random", "redo", "redo alternate", "rss", "rss square", "step backward", "step forward", "stop", "stop circle", "stop circle outline", "sync", "sync alternate", "undo", "undo alternate", "video", "volume down", "volume off", "volume up"], IL = ["address book", "address book outline", "address card", "address card outline", "archive", "balance scale", "birthday cake", "book", "briefcase", "building", "building outline", "bullhorn", "bullseye", "calculator", "calendar", "calendar outline", "calendar alternate", "calendar alternate outline", "certificate", "chart area", "chart bar", "chart bar outline", "chart line", "chart pie", "clipboard", "clipboard outline", "coffee", "columns", "compass", "compass outline", "copy", "copy outline", "copyright", "copyright outline", "cut", "edit", "edit outline", "envelope", "envelope outline", "envelope open", "envelope open outline", "envelope square", "eraser", "fax", "file", "file outline", "file alternate", "file alternate outline", "folder", "folder outline", "folder open", "folder open outline", "globe", "industry", "paperclip", "paste", "pen square", "pencil alternate", "percent", "phone", "phone square", "phone volume", "registered", "registered outline", "save", "save outline", "sitemap", "sticky note", "sticky note outline", "suitcase", "table", "tag", "tags", "tasks", "thumbtack", "trademark"], AL = ["chess", "chess bishop", "chess board", "chess king", "chess knight", "chess pawn", "chess queen", "chess rook", "square full"], RL = ["archive", "barcode", "bath", "bug", "code", "code branch", "coffee", "file", "file outline", "file alternate", "file alternate outline", "file code", "file code outline", "filter", "fire extinguisher", "folder", "folder outline", "folder open", "folder open outline", "keyboard", "keyboard outline", "microchip", "qrcode", "shield alternate", "sitemap", "terminal", "user secret", "window close", "window close outline", "window maximize", "window maximize outline", "window minimize", "window minimize outline", "window restore", "window restore outline"], ML = ["address book", "address book outline", "address card", "address card outline", "american sign language interpreting", "assistive listening systems", "at", "bell", "bell outline", "bell slash", "bell slash outline", "bullhorn", "comment", "comment outline", "comment alternate", "comment alternate outline", "comments", "comments outline", "envelope", "envelope outline", "envelope open", "envelope open outline", "envelope square", "fax", "inbox", "language", "microphone", "microphone slash", "mobile", "mobile alternate", "paper plane", "paper plane outline", "phone", "phone square", "phone volume", "rss", "rss square", "tty", "wifi"], DL = ["desktop", "download", "hdd", "hdd outline", "headphones", "keyboard", "keyboard outline", "laptop", "microchip", "mobile", "mobile alternate", "plug", "power off", "print", "save", "save outline", "server", "tablet", "tablet alternate", "tv", "upload"], LL = ["dollar sign", "euro sign", "lira sign", "money bill alternate", "money bill alternate outline", "pound sign", "ruble sign", "rupee sign", "shekel sign", "won sign", "yen sign"], FL = ["bell", "bell outline", "bell slash", "bell slash outline", "calendar", "calendar outline", "calendar alternate", "calendar alternate outline", "calendar check", "calendar check outline", "calendar minus", "calendar minus outline", "calendar plus", "calendar plus outline", "calendar times", "calendar times outline", "clock", "clock outline", "hourglass", "hourglass outline", "hourglass end", "hourglass half", "hourglass start", "stopwatch"], $L = ["adjust", "clone", "clone outline", "copy", "copy outline", "crop", "crosshairs", "cut", "edit", "edit outline", "eraser", "eye", "eye dropper", "eye slash", "eye slash outline", "object group", "object group outline", "object ungroup", "object ungroup outline", "paint brush", "paste", "pencil alternate", "save", "save outline", "tint"], BL = ["align center", "align justify", "align left", "align right", "bold", "clipboard", "clipboard outline", "clone", "clone outline", "columns", "copy", "copy outline", "cut", "edit", "edit outline", "eraser", "file", "file outline", "file alternate", "file alternate outline", "font", "heading", "i cursor", "indent", "italic", "linkify", "list", "list alternate", "list alternate outline", "list ol", "list ul", "outdent", "paper plane", "paper plane outline", "paperclip", "paragraph", "paste", "pencil alternate", "print", "quote left", "quote right", "redo", "redo alternate", "reply", "reply all", "share", "strikethrough", "subscript", "superscript", "sync", "sync alternate", "table", "tasks", "text height", "text width", "th", "th large", "th list", "trash", "trash alternate", "trash alternate outline", "underline", "undo", "undo alternate", "unlink"], jL = ["archive", "clone", "clone outline", "copy", "copy outline", "cut", "file", "file outline", "file alternate", "file alternate outline", "file archive", "file archive outline", "file audio", "file audio outline", "file code", "file code outline", "file excel", "file excel outline", "file image", "file image outline", "file pdf", "file pdf outline", "file powerpoint", "file powerpoint outline", "file video", "file video outline", "file word", "file word outline", "folder", "folder outline", "folder open", "folder open outline", "paste", "save", "save outline", "sticky note", "sticky note outline"], WL = ["genderless", "mars", "mars double", "mars stroke", "mars stroke horizontal", "mars stroke vertical", "mercury", "neuter", "transgender", "transgender alternate", "venus", "venus double", "venus mars"], zL = ["hand lizard", "hand lizard outline", "hand paper", "hand paper outline", "hand peace", "hand peace outline", "hand point down", "hand point down outline", "hand point left", "hand point left outline", "hand point right", "hand point right outline", "hand point up", "hand point up outline", "hand pointer", "hand pointer outline", "hand rock", "hand rock outline", "hand scissors", "hand scissors outline", "hand spock", "hand spock outline", "handshake", "handshake outline", "thumbs down", "thumbs down outline", "thumbs up", "thumbs up outline"], UL = ["ambulance", "h square", "heart", "heart outline", "heartbeat", "hospital", "hospital outline", "medkit", "plus square", "plus square outline", "stethoscope", "user md", "wheelchair"], HL = ["adjust", "bolt", "camera", "camera retro", "clone", "clone outline", "compress", "expand", "eye", "eye dropper", "eye slash", "eye slash outline", "file image", "file image outline", "film", "id badge", "id badge outline", "id card", "id card outline", "image", "image outline", "images", "images outline", "sliders horizontal", "tint"], YL = ["ban", "barcode", "bars", "beer", "bell", "bell outline", "bell slash", "bell slash outline", "bug", "bullhorn", "bullseye", "calculator", "calendar", "calendar outline", "calendar alternate", "calendar alternate outline", "calendar check", "calendar check outline", "calendar minus", "calendar minus outline", "calendar plus", "calendar plus outline", "calendar times", "calendar times outline", "certificate", "check", "check circle", "check circle outline", "check square", "check square outline", "circle", "circle outline", "clipboard", "clipboard outline", "clone", "clone outline", "cloud", "cloud download", "cloud upload", "coffee", "cog", "cogs", "copy", "copy outline", "cut", "database", "dot circle", "dot circle outline", "download", "edit", "edit outline", "ellipsis horizontal", "ellipsis vertical", "envelope", "envelope outline", "envelope open", "envelope open outline", "eraser", "exclamation", "exclamation circle", "exclamation triangle", "external alternate", "external square alternate", "eye", "eye slash", "eye slash outline", "file", "file outline", "file alternate", "file alternate outline", "filter", "flag", "flag outline", "flag checkered", "folder", "folder outline", "folder open", "folder open outline", "frown", "frown outline", "hashtag", "heart", "heart outline", "history", "home", "i cursor", "info", "info circle", "language", "magic", "meh", "meh outline", "microphone", "microphone slash", "minus", "minus circle", "minus square", "minus square outline", "paste", "pencil alternate", "plus", "plus circle", "plus square", "plus square outline", "qrcode", "question", "question circle", "question circle outline", "quote left", "quote right", "redo", "redo alternate", "reply", "reply all", "rss", "rss square", "save", "save outline", "search", "search minus", "search plus", "share", "share alternate", "share alternate square", "share square", "share square outline", "shield alternate", "sign-in", "sign-out", "signal", "sitemap", "sliders horizontal", "smile", "smile outline", "sort", "sort alphabet down", "sort alphabet up", "sort amount down", "sort amount up", "sort down", "sort numeric down", "sort numeric up", "sort up", "star", "star outline", "star half", "star half outline", "sync", "sync alternate", "thumbs down", "thumbs down outline", "thumbs up", "thumbs up outline", "times", "times circle", "times circle outline", "toggle off", "toggle on", "trash", "trash alternate", "trash alternate outline", "trophy", "undo", "undo alternate", "upload", "user", "user outline", "user circle", "user circle outline", "wifi"], qL = ["box", "boxes", "clipboard check", "clipboard list", "dolly", "dolly flatbed", "pallet", "shipping fast", "truck", "warehouse"], VL = ["ambulance", "anchor", "balance scale", "bath", "bed", "beer", "bell", "bell outline", "bell slash", "bell slash outline", "bicycle", "binoculars", "birthday cake", "blind", "bomb", "book", "bookmark", "bookmark outline", "briefcase", "building", "building outline", "car", "coffee", "crosshairs", "dollar sign", "eye", "eye slash", "eye slash outline", "fighter jet", "fire", "fire extinguisher", "flag", "flag outline", "flag checkered", "flask", "gamepad", "gavel", "gift", "glass martini", "globe", "graduation cap", "h square", "heart", "heart outline", "heartbeat", "home", "hospital", "hospital outline", "image", "image outline", "images", "images outline", "industry", "info", "info circle", "key", "leaf", "lemon", "lemon outline", "life ring", "life ring outline", "lightbulb", "lightbulb outline", "location arrow", "low vision", "magnet", "male", "map", "map outline", "map marker", "map marker alternate", "map pin", "map signs", "medkit", "money bill alternate", "money bill alternate outline", "motorcycle", "music", "newspaper", "newspaper outline", "paw", "phone", "phone square", "phone volume", "plane", "plug", "plus", "plus square", "plus square outline", "print", "recycle", "road", "rocket", "search", "search minus", "search plus", "ship", "shopping bag", "shopping basket", "shopping cart", "shower", "street view", "subway", "suitcase", "tag", "tags", "taxi", "thumbtack", "ticket alternate", "tint", "train", "tree", "trophy", "truck", "tty", "umbrella", "university", "utensil spoon", "utensils", "wheelchair", "wifi", "wrench"], GL = ["ambulance", "band aid", "dna", "first aid", "heart", "heart outline", "heartbeat", "hospital", "hospital outline", "hospital symbol", "pills", "plus", "stethoscope", "syringe", "thermometer", "user md", "weight"], KL = ["ambulance", "anchor", "archive", "balance scale", "bath", "bed", "beer", "bell", "bell outline", "bicycle", "binoculars", "birthday cake", "bomb", "book", "bookmark", "bookmark outline", "briefcase", "bug", "building", "building outline", "bullhorn", "bullseye", "bus", "calculator", "calendar", "calendar outline", "calendar alternate", "calendar alternate outline", "camera", "camera retro", "car", "clipboard", "clipboard outline", "cloud", "coffee", "cog", "cogs", "compass", "compass outline", "copy", "copy outline", "cube", "cubes", "cut", "envelope", "envelope outline", "envelope open", "envelope open outline", "eraser", "eye", "eye dropper", "fax", "fighter jet", "file", "file outline", "file alternate", "file alternate outline", "film", "fire", "fire extinguisher", "flag", "flag outline", "flag checkered", "flask", "futbol", "futbol outline", "gamepad", "gavel", "gem", "gem outline", "gift", "glass martini", "globe", "graduation cap", "hdd", "hdd outline", "headphones", "heart", "heart outline", "home", "hospital", "hospital outline", "hourglass", "hourglass outline", "image", "image outline", "images", "images outline", "industry", "key", "keyboard", "keyboard outline", "laptop", "leaf", "lemon", "lemon outline", "life ring", "life ring outline", "lightbulb", "lightbulb outline", "lock", "lock open", "magic", "magnet", "map", "map outline", "map marker", "map marker alternate", "map pin", "map signs", "medkit", "microchip", "microphone", "mobile", "mobile alternate", "money bill alternate", "money bill alternate outline", "moon", "moon outline", "motorcycle", "newspaper", "newspaper outline", "paint brush", "paper plane", "paper plane outline", "paperclip", "paste", "paw", "pencil alternate", "phone", "plane", "plug", "print", "puzzle piece", "road", "rocket", "save", "save outline", "search", "shield alternate", "shopping bag", "shopping basket", "shopping cart", "shower", "snowflake", "snowflake outline", "space shuttle", "star", "star outline", "sticky note", "sticky note outline", "stopwatch", "subway", "suitcase", "sun", "sun outline", "tablet", "tablet alternate", "tachometer alternate", "tag", "tags", "taxi", "thumbtack", "ticket alternate", "train", "trash", "trash alternate", "trash alternate outline", "tree", "trophy", "truck", "tv", "umbrella", "university", "unlock", "unlock alternate", "utensil spoon", "utensils", "wheelchair", "wrench"], ZL = ["bell", "bell outline", "bookmark", "bookmark outline", "bullhorn", "camera", "camera retro", "cart arrow down", "cart plus", "certificate", "credit card", "credit card outline", "gem", "gem outline", "gift", "handshake", "handshake outline", "heart", "heart outline", "key", "shopping bag", "shopping basket", "shopping cart", "star", "star outline", "tag", "tags", "thumbs down", "thumbs down outline", "thumbs up", "thumbs up outline", "trophy"], XL = ["bookmark", "bookmark outline", "calendar", "calendar outline", "certificate", "circle", "circle outline", "cloud", "comment", "comment outline", "file", "file outline", "folder", "folder outline", "heart", "heart outline", "map marker", "play", "square", "square outline", "star", "star outline"], QL = ["asterisk", "certificate", "circle notch", "cog", "compass", "compass outline", "crosshairs", "life ring", "life ring outline", "snowflake", "snowflake outline", "spinner", "sun", "sun outline", "sync"], JL = ["baseball ball", "basketball ball", "bowling ball", "football ball", "futbol", "futbol outline", "golf ball", "hockey puck", "quidditch", "table tennis", "volleyball ball"], eF = ["ban", "battery empty", "battery full", "battery half", "battery quarter", "battery three quarters", "bell", "bell outline", "bell slash", "bell slash outline", "calendar", "calendar outline", "calendar alternate", "calendar alternate outline", "calendar check", "calendar check outline", "calendar minus", "calendar minus outline", "calendar plus", "calendar plus outline", "calendar times", "calendar times outline", "cart arrow down", "cart plus", "exclamation", "exclamation circle", "exclamation triangle", "eye", "eye slash", "eye slash outline", "file", "file outline", "file alternate", "file alternate outline", "folder", "folder outline", "folder open", "folder open outline", "info", "info circle", "lock", "lock open", "minus", "minus circle", "minus square", "minus square outline", "plus", "plus circle", "plus square", "plus square outline", "question", "question circle", "question circle outline", "shield alternate", "shopping cart", "sign in alternate", "sign out alternate", "thermometer empty", "thermometer full", "thermometer half", "thermometer quarter", "thermometer three quarters", "thumbs down", "thumbs down outline", "thumbs up", "thumbs up outline", "toggle off", "toggle on", "unlock", "unlock alternate"], tF = ["address book", "address book outline", "address card", "address card outline", "bed", "blind", "child", "female", "frown", "frown outline", "id badge", "id badge outline", "id card", "id card outline", "male", "meh", "meh outline", "power off", "smile", "smile outline", "street view", "user", "user outline", "user circle", "user circle outline", "user md", "user plus", "user secret", "user times", "users", "wheelchair"], nF = ["ambulance", "bicycle", "bus", "car", "fighter jet", "motorcycle", "paper plane", "paper plane outline", "plane", "rocket", "ship", "shopping cart", "space shuttle", "subway", "taxi", "train", "truck", "wheelchair"], rF = ["archive", "book", "bookmark", "bookmark outline", "edit", "edit outline", "envelope", "envelope outline", "envelope open", "envelope open outline", "eraser", "file", "file outline", "file alternate", "file alternate outline", "folder", "folder outline", "folder open", "folder open outline", "keyboard", "keyboard outline", "newspaper", "newspaper outline", "paper plane", "paper plane outline", "paperclip", "paragraph", "pen square", "pencil alternate", "quote left", "quote right", "sticky note", "sticky note outline", "thumbtack"], aF = ["500px", "accessible", "accusoft", "adn", "adversal", "affiliatetheme", "algolia", "amazon", "amazon pay", "amilia", "android", "angellist", "angrycreative", "angular", "app store", "app store ios", "apper", "apple", "apple pay", "asymmetrik", "audible", "autoprefixer", "avianex", "aviato", "aws", "bandcamp", "behance", "behance square", "bimobject", "bitbucket", "bitcoin", "bity", "black tie", "blackberry", "blogger", "blogger b", "bluetooth", "bluetooth b", "btc", "buromobelexperte", "buysellads", "cc amazon pay", "cc amex", "cc apple pay", "cc diners club", "cc discover", "cc jcb", "cc mastercard", "cc paypal", "cc stripe", "cc visa", "centercode", "chrome", "cloudscale", "cloudsmith", "cloudversify", "codepen", "codiepie", "connectdevelop", "contao", "cpanel", "creative commons", "css3", "css3 alternate", "cuttlefish", "d and d", "dashcube", "delicious", "deploydog", "deskpro", "deviantart", "digg", "digital ocean", "discord", "discourse", "dochub", "docker", "draft2digital", "dribbble", "dribbble square", "dropbox", "drupal", "dyalog", "earlybirds", "edge", "elementor", "ember", "empire", "envira", "erlang", "ethereum", "etsy", "expeditedssl", "facebook", "facebook f", "facebook messenger", "facebook square", "firefox", "first order", "firstdraft", "flickr", "flipboard", "fly", "font awesome", "font awesome alternate", "font awesome flag", "fonticons", "fonticons fi", "fort awesome", "fort awesome alternate", "forumbee", "foursquare", "free code camp", "freebsd", "get pocket", "gg", "gg circle", "git", "git square", "github", "github alternate", "github square", "gitkraken", "gitlab", "gitter", "glide", "glide g", "gofore", "goodreads", "goodreads g", "google", "google drive", "google play", "google plus", "google plus g", "google plus square", "google wallet", "gratipay", "grav", "gripfire", "grunt", "gulp", "hacker news", "hacker news square", "hips", "hire a helper", "hooli", "hotjar", "houzz", "html5", "hubspot", "imdb", "instagram", "internet explorer", "ioxhost", "itunes", "itunes note", "jenkins", "joget", "joomla", "js", "js square", "jsfiddle", "keycdn", "kickstarter", "kickstarter k", "korvue", "laravel", "lastfm", "lastfm square", "leanpub", "less", "linechat", "linkedin", "linkedin alternate", "linode", "linux", "lyft", "magento", "maxcdn", "medapps", "medium", "medium m", "medrt", "meetup", "microsoft", "mix", "mixcloud", "mizuni", "modx", "monero", "napster", "nintendo switch", "node", "node js", "npm", "ns8", "nutritionix", "odnoklassniki", "odnoklassniki square", "opencart", "openid", "opera", "optin monster", "osi", "page4", "pagelines", "palfed", "patreon", "paypal", "periscope", "phabricator", "phoenix framework", "php", "pied piper", "pied piper alternate", "pied piper pp", "pinterest", "pinterest p", "pinterest square", "playstation", "product hunt", "pushed", "python", "qq", "quinscape", "quora", "ravelry", "react", "rebel", "redriver", "reddit", "reddit alien", "reddit square", "rendact", "renren", "replyd", "resolving", "rocketchat", "rockrms", "safari", "sass", "schlix", "scribd", "searchengin", "sellcast", "sellsy", "servicestack", "shirtsinbulk", "simplybuilt", "sistrix", "skyatlas", "skype", "slack", "slack hash", "slideshare", "snapchat", "snapchat ghost", "snapchat square", "soundcloud", "speakap", "spotify", "stack exchange", "stack overflow", "staylinked", "steam", "steam square", "steam symbol", "sticker mule", "strava", "stripe", "stripe s", "studiovinari", "stumbleupon", "stumbleupon circle", "superpowers", "supple", "telegram", "telegram plane", "tencent weibo", "themeisle", "trello", "tripadvisor", "tumblr", "tumblr square", "twitch", "twitter", "twitter square", "typo3", "uber", "uikit", "uniregistry", "untappd", "usb", "ussunnah", "vaadin", "viacoin", "viadeo", "viadeo square", "viber", "vimeo", "vimeo square", "vimeo v", "vine", "vk", "vnv", "vuejs", "wechat", "weibo", "weixin", "whatsapp", "whatsapp square", "whmcs", "wikipedia w", "windows", "wordpress", "wordpress simple", "wpbeginner", "wpexplorer", "wpforms", "xbox", "xing", "xing square", "y combinator", "yahoo", "yandex", "yandex international", "yelp", "yoast", "youtube", "youtube square"], oF = kd([].concat(PL, kL, NL, IL, AL, RL, ML, DL, LL, FL, $L, BL, jL, WL, zL, UL, HL, YL, qL, VL, GL, KL, ZL, XL, QL, JL, eF, tF, nF, rF, aF)), iF = ["chess rock", "ordered list", "unordered list", "user doctor", "shield", "puzzle", "add circle", "add square", "add to calendar", "add to cart", "add user", "add", "alarm mute", "alarm", "ald", "als", "announcement", "area chart", "area graph", "arrow down cart", "asexual", "asl interpreting", "asl", "assistive listening devices", "attach", "attention", "balance", "bar", "bathtub", "battery four", "battery high", "battery low", "battery one", "battery three", "battery two", "battery zero", "birthday", "block layout", "bluetooth alternative", "broken chain", "browser", "call square", "call", "cancel", "cart", "cc", "chain", "chat", "checked calendar", "checkmark", "circle notched", "close", "cny", "cocktail", "commenting", "computer", "configure", "content", "deafness", "delete calendar", "delete", "detective", "discussions", "doctor", "dollar", "dont", "drivers license", "dropdown", "emergency", "envira gallery", "erase", "eur", "euro", "eyedropper", "factory", "favorite", "feed", "female homosexual", "file text", "file text outline", "find", "first aid", "fork", "game", "gay", "gbp", "google plus circle", "google plus official", "grab", "graduation", "grid layout", "group", "h", "hand victory", "handicap", "hard of hearing", "header", "help circle", "help", "heterosexual", "hide", "hotel", "hourglass four", "hourglass full", "hourglass one", "hourglass three", "hourglass two", "idea", "ils", "in cart", "inr", "intergender", "intersex", "jpy", "krw", "lab", "law", "legal", "lesbian", "lightning", "like", "line graph", "linkedin square", "linkify", "lira", "list layout", "magnify", "mail forward", "mail outline", "mail square", "mail", "male homosexual", "man", "marker", "mars alternate", "mars horizontal", "mars vertical", "microsoft edge", "military", "ms edge", "mute", "new pied piper", "non binary transgender", "numbered list", "options", "other gender horizontal", "other gender vertical", "other gender", "payment", "paypal card", "pencil square", "photo", "picture", "pie chart", "pie graph", "pied piper hat", "pin", "plus cart", "point", "pointing down", "pointing left", "pointing right", "pointing up", "pound", "power cord", "power", "privacy", "r circle", "rain", "record", "refresh", "remove circle", "remove from calendar", "remove user", "remove", "repeat", "rmb", "rouble", "rub", "ruble", "rupee", "s15", "selected radio", "send", "setting", "settings", "shekel", "sheqel", "shipping", "shop", "shuffle", "shutdown", "sidebar", "signing", "signup", "sliders", "soccer", "sort alphabet ascending", "sort alphabet descending", "sort ascending", "sort content ascending", "sort content descending", "sort descending", "sort numeric ascending", "sort numeric descending", "sound", "spy", "stripe card", "student", "talk", "target", "teletype", "television", "text cursor", "text telephone", "theme", "thermometer", "thumb tack", "time", "tm", "toggle down", "toggle left", "toggle right", "toggle up", "translate", "travel", "treatment", "triangle down", "triangle left", "triangle right", "triangle up", "try", "unhide", "unlinkify", "unmute", "usd", "user cancel", "user close", "user delete", "user x", "vcard", "video camera", "video play", "volume control phone", "wait", "warning circle", "warning sign", "warning", "wi-fi", "winner", "wizard", "woman", "won", "wordpress beginner", "wordpress forms", "world", "write square", "x", "yen", "zip", "zoom in", "zoom out", "zoom", "bitbucket square", "checkmark box", "circle thin", "cloud download", "cloud upload", "compose", "conversation", "credit card alternative", "currency", "dashboard", "diamond", "disk", "exchange", "external share", "external square", "external", "facebook official", "food", "hourglass zero", "level down", "level up", "log out", "meanpath", "money", "move", "pencil", "protect", "radio", "remove bookmark", "resize horizontal", "resize vertical", "sign in", "sign out", "spoon", "star half empty", "star half full", "ticket", "times rectangle", "write", "youtube play"], sF = kd([].concat(oF, iF)), lF = [
  "left dropdown"
  // nested dropdown menu direction icon
], cF = kd([].concat(sF, lF));
function uF(e, t) {
  return Cd(e, t);
}
var Kb = xi() && process.env.NODE_ENV !== "test" ? J.useLayoutEffect : J.useEffect, dF = /\s+/;
function fF(e) {
  var t = [];
  return e ? (e.forEach(function(n) {
    if (typeof n.current == "string") {
      var r = n.current.split(dF);
      r.forEach(function(o) {
        t.push(o);
      });
    }
  }), t.filter(function(n, r, o) {
    return n.length > 0 && o.indexOf(n) === r;
  })) : [];
}
function pF(e, t) {
  return [t.filter(function(n) {
    return e.indexOf(n) === -1;
  }), e.filter(function(n) {
    return t.indexOf(n) === -1;
  })];
}
var Zb = /* @__PURE__ */ new Map(), Pp = function(t, n) {
  var r = fF(n), o = pF(Zb.get(t) || [], r), s = o[0], u = o[1];
  t && (s.forEach(function(c) {
    return t.classList.add(c);
  }), u.forEach(function(c) {
    return t.classList.remove(c);
  })), Zb.set(t, r);
}, hF = function() {
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
}, vl = new hF();
function mF(e, t) {
  var n = J.useRef(), r = J.useRef(!1);
  Kb(function() {
    if (n.current = t, r.current) {
      var o = Vu(e) ? e.current : e;
      vl.emit(o, Pp);
    }
    r.current = !0;
  }, [t]), Kb(function() {
    var o = Vu(e) ? e.current : e;
    return vl.add(o, n), vl.emit(o, Pp), function() {
      vl.del(o, n), vl.emit(o, Pp);
    };
  }, [e]);
}
var ta = Ws(function(e, t) {
  return Wl(e) ? E1(e, t) : [];
});
function _s(e) {
  var t = e.children, n = e.className, r = e.content, o = e.size, s = Ge(o, "icons", n), u = Ye(_s, e), c = Xe(_s, e);
  return /* @__PURE__ */ J.createElement(c, ue({}, u, {
    className: s
  }), dt(t) ? r : t);
}
_s.handledProps = ["as", "children", "className", "content", "size"];
_s.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: Nt,
  /** Size of the icon group. */
  size: l.oneOf(ta(dr, "medium"))
} : {};
_s.defaultProps = {
  as: "i"
};
var We = /* @__PURE__ */ function(e) {
  en(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handleClick = function(c) {
      var d = r.props.disabled;
      if (d) {
        c.preventDefault();
        return;
      }
      Le(r.props, "onClick", c, r.props);
    }, r;
  }
  var n = t.prototype;
  return n.getIconAriaOptions = function() {
    var o = {}, s = this.props, u = s["aria-label"], c = s["aria-hidden"];
    return Tt(u) ? o["aria-hidden"] = "true" : o["aria-label"] = u, Tt(c) || (o["aria-hidden"] = c), o;
  }, n.render = function() {
    var o = this.props, s = o.bordered, u = o.circular, c = o.className, d = o.color, p = o.corner, h = o.disabled, m = o.fitted, g = o.flipped, y = o.inverted, b = o.link, _ = o.loading, w = o.name, k = o.rotated, F = o.size, E = Ge(d, w, F, V(s, "bordered"), V(u, "circular"), V(h, "disabled"), V(m, "fitted"), V(y, "inverted"), V(b, "link"), V(_, "loading"), rn(p, "corner"), Gn(g, "flipped"), Gn(k, "rotated"), "icon", c), I = Ye(t, this.props), S = Xe(t, this.props), P = this.getIconAriaOptions();
    return /* @__PURE__ */ J.createElement(S, ue({}, I, P, {
      className: E,
      onClick: this.handleClick
    }));
  }, t;
}(q_);
We.handledProps = ["aria-hidden", "aria-label", "as", "bordered", "circular", "className", "color", "corner", "disabled", "fitted", "flipped", "inverted", "link", "loading", "name", "rotated", "size"];
We.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Formatted to appear bordered. */
  bordered: l.bool,
  /** Icon can formatted to appear circular. */
  circular: l.bool,
  /** Additional classes. */
  className: l.string,
  /** Color of the icon. */
  color: l.oneOf(oa),
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
  name: M1(cF),
  /** Icon can rotated. */
  rotated: l.oneOf(["clockwise", "counterclockwise"]),
  /** Size of the icon. */
  size: l.oneOf(ta(dr, "medium")),
  /** Icon can have an aria label. */
  "aria-hidden": l.string,
  /** Icon can have an aria label. */
  "aria-label": l.string
} : {};
We.defaultProps = {
  as: "i"
};
We.Group = _s;
We.create = Gt(We, function(e) {
  return {
    name: e
  };
});
var Xb = function(t) {
  return t !== null && !Array.isArray(t) && typeof t == "object";
}, Ju = {
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
for (var Eu = 0; Eu < 24; Eu += 1)
  Ju[112 + Eu] = "F" + (Eu + 1);
for (var kp = 0; kp < 26; kp += 1) {
  var Np = kp + 65;
  Ju[Np] = [String.fromCharCode(Np + 32), String.fromCharCode(Np)];
}
var Fe = {
  codes: Ju,
  /**
   * Get the `keyCode` or `which` value from a keyboard event or `key` name.
   * @param {string|object} eventOrKey A keyboard event-like object or `key` name.
   * @param {string} [eventOrKey.key] If object, it must have one of these keys.
   * @param {number} [eventOrKey.keyCode] If object, it must have one of these keys.
   * @param {number} [eventOrKey.which] If object, it must have one of these keys.
   * @returns {number|undefined}
   */
  getCode: function(t) {
    return Xb(t) ? t.keyCode || t.which || this[t.key] : this[t];
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
    var n = Xb(t);
    if (n && t.key)
      return t.key;
    var r = Ju[n ? t.keyCode || t.which : t];
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
Fe.Spacebar = Fe[" "];
Fe.Digit0 = Fe[0];
Fe.Digit1 = Fe[1];
Fe.Digit2 = Fe[2];
Fe.Digit3 = Fe[3];
Fe.Digit4 = Fe[4];
Fe.Digit5 = Fe[5];
Fe.Digit6 = Fe[6];
Fe.Digit7 = Fe[7];
Fe.Digit8 = Fe[8];
Fe.Digit9 = Fe[9];
Fe.Tilde = Fe["~"];
Fe.GraveAccent = Fe["`"];
Fe.ExclamationPoint = Fe["!"];
Fe.AtSign = Fe["@"];
Fe.PoundSign = Fe["#"];
Fe.PercentSign = Fe["%"];
Fe.Caret = Fe["^"];
Fe.Ampersand = Fe["&"];
Fe.PlusSign = Fe["+"];
Fe.MinusSign = Fe["-"];
Fe.EqualsSign = Fe["="];
Fe.DivisionSign = Fe["/"];
Fe.MultiplicationSign = Fe["*"];
Fe.Comma = Fe[","];
Fe.Decimal = Fe["."];
Fe.Colon = Fe[":"];
Fe.Semicolon = Fe[";"];
Fe.Pipe = Fe["|"];
Fe.BackSlash = Fe["\\"];
Fe.QuestionMark = Fe["?"];
Fe.SingleQuote = Fe["'"];
Fe.DoubleQuote = Fe['"'];
Fe.LeftCurlyBrace = Fe["{"];
Fe.RightCurlyBrace = Fe["}"];
Fe.LeftParenthesis = Fe["("];
Fe.RightParenthesis = Fe[")"];
Fe.LeftAngleBracket = Fe["<"];
Fe.RightAngleBracket = Fe[">"];
Fe.LeftSquareBracket = Fe["["];
Fe.RightSquareBracket = Fe["]"];
var gF = Fe;
const bn = /* @__PURE__ */ hc(gF);
var yh = { exports: {} }, Ut = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qb;
function vF() {
  if (Qb) return Ut;
  Qb = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), u = Symbol.for("react.context"), c = Symbol.for("react.server_context"), d = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), b;
  b = Symbol.for("react.module.reference");
  function _(w) {
    if (typeof w == "object" && w !== null) {
      var k = w.$$typeof;
      switch (k) {
        case e:
          switch (w = w.type, w) {
            case n:
            case o:
            case r:
            case p:
            case h:
              return w;
            default:
              switch (w = w && w.$$typeof, w) {
                case c:
                case u:
                case d:
                case g:
                case m:
                case s:
                  return w;
                default:
                  return k;
              }
          }
        case t:
          return k;
      }
    }
  }
  return Ut.ContextConsumer = u, Ut.ContextProvider = s, Ut.Element = e, Ut.ForwardRef = d, Ut.Fragment = n, Ut.Lazy = g, Ut.Memo = m, Ut.Portal = t, Ut.Profiler = o, Ut.StrictMode = r, Ut.Suspense = p, Ut.SuspenseList = h, Ut.isAsyncMode = function() {
    return !1;
  }, Ut.isConcurrentMode = function() {
    return !1;
  }, Ut.isContextConsumer = function(w) {
    return _(w) === u;
  }, Ut.isContextProvider = function(w) {
    return _(w) === s;
  }, Ut.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === e;
  }, Ut.isForwardRef = function(w) {
    return _(w) === d;
  }, Ut.isFragment = function(w) {
    return _(w) === n;
  }, Ut.isLazy = function(w) {
    return _(w) === g;
  }, Ut.isMemo = function(w) {
    return _(w) === m;
  }, Ut.isPortal = function(w) {
    return _(w) === t;
  }, Ut.isProfiler = function(w) {
    return _(w) === o;
  }, Ut.isStrictMode = function(w) {
    return _(w) === r;
  }, Ut.isSuspense = function(w) {
    return _(w) === p;
  }, Ut.isSuspenseList = function(w) {
    return _(w) === h;
  }, Ut.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === n || w === o || w === r || w === p || w === h || w === y || typeof w == "object" && w !== null && (w.$$typeof === g || w.$$typeof === m || w.$$typeof === s || w.$$typeof === u || w.$$typeof === d || w.$$typeof === b || w.getModuleId !== void 0);
  }, Ut.typeOf = _, Ut;
}
var Ht = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jb;
function yF() {
  return Jb || (Jb = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), u = Symbol.for("react.context"), c = Symbol.for("react.server_context"), d = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), b = !1, _ = !1, w = !1, k = !1, F = !1, E;
    E = Symbol.for("react.module.reference");
    function I(K) {
      return !!(typeof K == "string" || typeof K == "function" || K === n || K === o || F || K === r || K === p || K === h || k || K === y || b || _ || w || typeof K == "object" && K !== null && (K.$$typeof === g || K.$$typeof === m || K.$$typeof === s || K.$$typeof === u || K.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      K.$$typeof === E || K.getModuleId !== void 0));
    }
    function S(K) {
      if (typeof K == "object" && K !== null) {
        var se = K.$$typeof;
        switch (se) {
          case e:
            var Ie = K.type;
            switch (Ie) {
              case n:
              case o:
              case r:
              case p:
              case h:
                return Ie;
              default:
                var pe = Ie && Ie.$$typeof;
                switch (pe) {
                  case c:
                  case u:
                  case d:
                  case g:
                  case m:
                  case s:
                    return pe;
                  default:
                    return se;
                }
            }
          case t:
            return se;
        }
      }
    }
    var P = u, C = s, T = e, A = d, B = n, H = g, ne = m, U = t, re = o, he = r, ge = p, Ne = h, le = !1, me = !1;
    function X(K) {
      return le || (le = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function te(K) {
      return me || (me = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function oe(K) {
      return S(K) === u;
    }
    function be(K) {
      return S(K) === s;
    }
    function Se(K) {
      return typeof K == "object" && K !== null && K.$$typeof === e;
    }
    function ye(K) {
      return S(K) === d;
    }
    function fe(K) {
      return S(K) === n;
    }
    function Ce(K) {
      return S(K) === g;
    }
    function De(K) {
      return S(K) === m;
    }
    function W(K) {
      return S(K) === t;
    }
    function z(K) {
      return S(K) === o;
    }
    function $(K) {
      return S(K) === r;
    }
    function D(K) {
      return S(K) === p;
    }
    function G(K) {
      return S(K) === h;
    }
    Ht.ContextConsumer = P, Ht.ContextProvider = C, Ht.Element = T, Ht.ForwardRef = A, Ht.Fragment = B, Ht.Lazy = H, Ht.Memo = ne, Ht.Portal = U, Ht.Profiler = re, Ht.StrictMode = he, Ht.Suspense = ge, Ht.SuspenseList = Ne, Ht.isAsyncMode = X, Ht.isConcurrentMode = te, Ht.isContextConsumer = oe, Ht.isContextProvider = be, Ht.isElement = Se, Ht.isForwardRef = ye, Ht.isFragment = fe, Ht.isLazy = Ce, Ht.isMemo = De, Ht.isPortal = W, Ht.isProfiler = z, Ht.isStrictMode = $, Ht.isSuspense = D, Ht.isSuspenseList = G, Ht.isValidElementType = I, Ht.typeOf = S;
  }()), Ht;
}
process.env.NODE_ENV === "production" ? yh.exports = vF() : yh.exports = yF();
var bF = yh.exports;
function _F(e) {
  if (e && (J.Children.only(e), bF.isFragment(e)))
    throw new Error('An "React.Fragment" cannot be used as a `trigger`.');
}
var Nd = /* @__PURE__ */ function(e) {
  en(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handleRef = function(c) {
      ya(r.props.innerRef, c);
    }, r;
  }
  var n = t.prototype;
  return n.componentDidMount = function() {
    Le(this.props, "onMount", null, this.props);
  }, n.componentWillUnmount = function() {
    Le(this.props, "onUnmount", null, this.props);
  }, n.render = function() {
    if (!xi()) return null;
    var o = this.props, s = o.children, u = o.mountNode, c = u === void 0 ? document.body : u;
    return /* @__PURE__ */ G_(/* @__PURE__ */ J.createElement(lr, {
      innerRef: this.handleRef
    }, s), c);
  }, t;
}(Zn);
Nd.handledProps = ["children", "innerRef", "mountNode", "onMount", "onUnmount"];
Nd.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Primary content. */
  children: l.node.isRequired,
  /** Called with a ref to the inner node. */
  innerRef: L1,
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
var ea = /* @__PURE__ */ function(e) {
  en(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.contentRef = /* @__PURE__ */ J.createRef(), r.triggerRef = /* @__PURE__ */ J.createRef(), r.latestDocumentMouseDownEvent = null, r.handleDocumentMouseDown = function(c) {
      r.latestDocumentMouseDownEvent = c;
    }, r.handleDocumentClick = function(c) {
      var d = r.props.closeOnDocumentClick, p = r.latestDocumentMouseDownEvent;
      r.latestDocumentMouseDownEvent = null, !(!r.contentRef.current || // no portal
      Io(r.triggerRef.current, c) || // event happened in trigger (delegate to trigger handlers)
      p && Io(r.contentRef.current, p) || // event originated in the portal but was ended outside
      Io(r.contentRef.current, c)) && d && r.close(c);
    }, r.handleEscape = function(c) {
      r.props.closeOnEscape && bn.getCode(c) === bn.Escape && r.close(c);
    }, r.handlePortalMouseLeave = function(c) {
      var d = r.props, p = d.closeOnPortalMouseLeave, h = d.mouseLeaveDelay;
      p && c.target === r.contentRef.current && (r.mouseLeaveTimer = r.closeWithTimeout(c, h));
    }, r.handlePortalMouseEnter = function() {
      var c = r.props.closeOnPortalMouseLeave;
      c && clearTimeout(r.mouseLeaveTimer);
    }, r.handleTriggerBlur = function(c) {
      for (var d = r.props, p = d.trigger, h = d.closeOnTriggerBlur, m = arguments.length, g = new Array(m > 1 ? m - 1 : 0), y = 1; y < m; y++)
        g[y - 1] = arguments[y];
      Le.apply(void 0, [p, "props.onBlur", c].concat(g));
      var b = c.relatedTarget || document.activeElement, _ = Le(r.contentRef.current, "contains", b);
      !h || _ || r.close(c);
    }, r.handleTriggerClick = function(c) {
      for (var d = r.props, p = d.trigger, h = d.closeOnTriggerClick, m = d.openOnTriggerClick, g = r.state.open, y = arguments.length, b = new Array(y > 1 ? y - 1 : 0), _ = 1; _ < y; _++)
        b[_ - 1] = arguments[_];
      Le.apply(void 0, [p, "props.onClick", c].concat(b)), g && h ? r.close(c) : !g && m && r.open(c);
    }, r.handleTriggerFocus = function(c) {
      for (var d = r.props, p = d.trigger, h = d.openOnTriggerFocus, m = arguments.length, g = new Array(m > 1 ? m - 1 : 0), y = 1; y < m; y++)
        g[y - 1] = arguments[y];
      Le.apply(void 0, [p, "props.onFocus", c].concat(g)), h && r.open(c);
    }, r.handleTriggerMouseLeave = function(c) {
      clearTimeout(r.mouseEnterTimer);
      for (var d = r.props, p = d.trigger, h = d.closeOnTriggerMouseLeave, m = d.mouseLeaveDelay, g = arguments.length, y = new Array(g > 1 ? g - 1 : 0), b = 1; b < g; b++)
        y[b - 1] = arguments[b];
      Le.apply(void 0, [p, "props.onMouseLeave", c].concat(y)), h && (r.mouseLeaveTimer = r.closeWithTimeout(c, m));
    }, r.handleTriggerMouseEnter = function(c) {
      clearTimeout(r.mouseLeaveTimer);
      for (var d = r.props, p = d.trigger, h = d.mouseEnterDelay, m = d.openOnTriggerMouseEnter, g = arguments.length, y = new Array(g > 1 ? g - 1 : 0), b = 1; b < g; b++)
        y[b - 1] = arguments[b];
      Le.apply(void 0, [p, "props.onMouseEnter", c].concat(y)), m && (r.mouseEnterTimer = r.openWithTimeout(c, h));
    }, r.open = function(c) {
      Le(r.props, "onOpen", c, ue({}, r.props, {
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
      }), Le(r.props, "onClose", c, ue({}, r.props, {
        open: !1
      }));
    }, r.closeWithTimeout = function(c, d) {
      var p = ue({}, c);
      return setTimeout(function() {
        return r.close(p);
      }, d || 0);
    }, r.handleMount = function() {
      Le(r.props, "onMount", null, r.props);
    }, r.handleUnmount = function() {
      Le(r.props, "onUnmount", null, r.props);
    }, r.handleTriggerRef = function(c) {
      r.triggerRef.current = c, ya(r.props.triggerRef, c);
    }, r;
  }
  var n = t.prototype;
  return n.componentWillUnmount = function() {
    clearTimeout(this.mouseEnterTimer), clearTimeout(this.mouseLeaveTimer);
  }, n.render = function() {
    var o = this.props, s = o.children, u = o.eventPool, c = o.mountNode, d = o.trigger, p = this.state.open;
    return process.env.NODE_ENV !== "production" && _F(d), /* @__PURE__ */ J.createElement(J.Fragment, null, p && /* @__PURE__ */ J.createElement(J.Fragment, null, /* @__PURE__ */ J.createElement(Nd, {
      innerRef: this.contentRef,
      mountNode: c,
      onMount: this.handleMount,
      onUnmount: this.handleUnmount
    }, s), /* @__PURE__ */ J.createElement(Ya, {
      name: "mouseleave",
      on: this.handlePortalMouseLeave,
      pool: u,
      target: this.contentRef
    }), /* @__PURE__ */ J.createElement(Ya, {
      name: "mouseenter",
      on: this.handlePortalMouseEnter,
      pool: u,
      target: this.contentRef
    }), /* @__PURE__ */ J.createElement(Ya, {
      name: "mousedown",
      on: this.handleDocumentMouseDown,
      pool: u
    }), /* @__PURE__ */ J.createElement(Ya, {
      name: "click",
      on: this.handleDocumentClick,
      pool: u
    }), /* @__PURE__ */ J.createElement(Ya, {
      name: "keydown",
      on: this.handleEscape,
      pool: u
    })), d && /* @__PURE__ */ J.createElement(lr, {
      innerRef: this.handleTriggerRef
    }, /* @__PURE__ */ J.cloneElement(d, {
      onBlur: this.handleTriggerBlur,
      onClick: this.handleTriggerClick,
      onFocus: this.handleTriggerFocus,
      onMouseLeave: this.handleTriggerMouseLeave,
      onMouseEnter: this.handleTriggerMouseEnter
    })));
  }, t;
}(Us);
ea.handledProps = ["children", "closeOnDocumentClick", "closeOnEscape", "closeOnPortalMouseLeave", "closeOnTriggerBlur", "closeOnTriggerClick", "closeOnTriggerMouseLeave", "defaultOpen", "eventPool", "mountNode", "mouseEnterDelay", "mouseLeaveDelay", "onClose", "onMount", "onOpen", "onUnmount", "open", "openOnTriggerClick", "openOnTriggerFocus", "openOnTriggerMouseEnter", "trigger", "triggerRef"];
ea.propTypes = process.env.NODE_ENV !== "production" ? {
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
  triggerRef: L1
} : {};
ea.defaultProps = {
  closeOnDocumentClick: !0,
  closeOnEscape: !0,
  eventPool: "default",
  openOnTriggerClick: !0
};
ea.autoControlledProps = ["open"];
ea.Inner = Nd;
function zl(e) {
  var t = e.blurring, n = e.className, r = e.children, o = e.content, s = e.dimmed, u = Ge(V(t, "blurring"), V(s, "dimmed"), "dimmable", n), c = Ye(zl, e), d = Xe(zl, e);
  return /* @__PURE__ */ J.createElement(d, ue({}, c, {
    className: u
  }), dt(r) ? o : r);
}
zl.handledProps = ["as", "blurring", "children", "className", "content", "dimmed"];
zl.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** A dimmable element can blur its contents. */
  blurring: l.bool,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: Nt,
  /** Controls whether or not the dim is displayed. */
  dimmed: l.bool
} : {};
var Ul = /* @__PURE__ */ function(e) {
  en(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.containerRef = /* @__PURE__ */ wr(), r.contentRef = /* @__PURE__ */ wr(), r.handleClick = function(c) {
      var d = r.contentRef.current;
      Le(r.props, "onClick", c, r.props), !(d && d !== c.target && Io(d, c)) && Le(r.props, "onClickOutside", c, r.props);
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
    var o = this.props, s = o.active, u = o.children, c = o.className, d = o.content, p = o.disabled, h = o.inverted, m = o.page, g = o.simple, y = o.verticalAlign, b = Ge("ui", V(s, "active transition visible"), V(p, "disabled"), V(h, "inverted"), V(m, "page"), V(g, "simple"), Jo(y), "dimmer", c), _ = Ye(t, this.props), w = Xe(t, this.props), k = dt(u) ? d : u;
    return /* @__PURE__ */ J.createElement(lr, {
      innerRef: this.containerRef
    }, /* @__PURE__ */ J.createElement(w, ue({}, _, {
      className: b,
      onClick: this.handleClick
    }), k && /* @__PURE__ */ J.createElement("div", {
      className: "content",
      ref: this.contentRef
    }, k)));
  }, t;
}(Zn);
Ul.handledProps = ["active", "as", "children", "className", "content", "disabled", "inverted", "onClick", "onClickOutside", "page", "simple", "verticalAlign"];
Ul.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** An active dimmer will dim its parent container. */
  active: l.bool,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: Nt,
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
var Mo = /* @__PURE__ */ function(e) {
  en(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handlePortalMount = function() {
      xi() && (document.body.classList.add("dimmed"), document.body.classList.add("dimmable"));
    }, r.handlePortalUnmount = function() {
      xi() && (document.body.classList.remove("dimmed"), document.body.classList.remove("dimmable"));
    }, r;
  }
  var n = t.prototype;
  return n.render = function() {
    var o = this.props, s = o.active, u = o.page, c = Ye(t, this.props);
    return u ? /* @__PURE__ */ J.createElement(ea, {
      closeOnEscape: !1,
      closeOnDocumentClick: !1,
      onMount: this.handlePortalMount,
      onUnmount: this.handlePortalUnmount,
      open: s,
      openOnTriggerClick: !1
    }, /* @__PURE__ */ J.createElement(Ul, ue({}, c, {
      active: s,
      page: u
    }))) : /* @__PURE__ */ J.createElement(Ul, ue({}, c, {
      active: s,
      page: u
    }));
  }, t;
}(Zn);
Mo.handledProps = ["active", "page"];
Mo.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An active dimmer will dim its parent container. */
  active: l.bool,
  /** A dimmer can be formatted to be fixed to the page. */
  page: l.bool
} : {};
Mo.Dimmable = zl;
Mo.Inner = Ul;
Mo.create = Gt(Mo, function(e) {
  return {
    content: e
  };
});
function Hl(e) {
  var t = e.children, n = e.className, r = e.content, o = e.size, s = Ge("ui", o, n, "images"), u = Ye(Hl, e), c = Xe(Hl, e);
  return /* @__PURE__ */ J.createElement(c, ue({}, u, {
    className: s
  }), dt(t) ? r : t);
}
Hl.handledProps = ["as", "children", "className", "content", "size"];
Hl.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: Nt,
  /** A group of images can be formatted to have the same size. */
  size: l.oneOf(dr)
} : {};
function xr(e) {
  var t = e.avatar, n = e.bordered, r = e.centered, o = e.children, s = e.circular, u = e.className, c = e.content, d = e.dimmer, p = e.disabled, h = e.floated, m = e.fluid, g = e.hidden, y = e.href, b = e.inline, _ = e.label, w = e.rounded, k = e.size, F = e.spaced, E = e.verticalAlign, I = e.wrapped, S = e.ui, P = Ge(V(S, "ui"), k, V(t, "avatar"), V(n, "bordered"), V(s, "circular"), V(r, "centered"), V(p, "disabled"), V(m, "fluid"), V(g, "hidden"), V(b, "inline"), V(w, "rounded"), rn(F, "spaced"), Gn(h, "floated"), Jo(E), "image", u), C = Ye(xr, e), T = wm(C, {
    htmlProps: oL
  }), A = T[0], B = T[1], H = Xe(xr, e, function() {
    if (!Tt(d) || !Tt(_) || !Tt(I) || !dt(o))
      return "div";
  });
  return dt(o) ? dt(c) ? H === "img" ? /* @__PURE__ */ J.createElement(H, ue({}, B, A, {
    className: P
  })) : /* @__PURE__ */ J.createElement(H, ue({}, B, {
    className: P,
    href: y
  }), Mo.create(d, {
    autoGenerateKey: !1
  }), cr.create(_, {
    autoGenerateKey: !1
  }), /* @__PURE__ */ J.createElement("img", A)) : /* @__PURE__ */ J.createElement(H, ue({}, C, {
    className: P
  }), c) : /* @__PURE__ */ J.createElement(H, ue({}, C, {
    className: P
  }), o);
}
xr.handledProps = ["as", "avatar", "bordered", "centered", "children", "circular", "className", "content", "dimmer", "disabled", "floated", "fluid", "hidden", "href", "inline", "label", "rounded", "size", "spaced", "ui", "verticalAlign", "wrapped"];
xr.Group = Hl;
xr.propTypes = process.env.NODE_ENV !== "production" ? {
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
  content: Nt,
  /** An image can show that it is disabled and cannot be selected. */
  disabled: l.bool,
  /** Shorthand for Dimmer. */
  dimmer: Ct,
  /** An image can sit to the left or right of other content. */
  floated: l.oneOf(_c),
  /** An image can take up the width of its container. */
  fluid: Mt([l.bool, Yt(["size"])]),
  /** An image can be hidden. */
  hidden: l.bool,
  /** Renders the Image as an <a> tag with this href. */
  href: l.string,
  /** An image may appear inline. */
  inline: l.bool,
  /** Shorthand for Label. */
  label: Ct,
  /** An image may appear rounded. */
  rounded: l.bool,
  /** An image may appear at different sizes. */
  size: l.oneOf(dr),
  /** An image can specify that it needs an additional spacing to separate it from nearby content. */
  spaced: l.oneOfType([l.bool, l.oneOf(["left", "right"])]),
  /** Whether or not to add the ui className. */
  ui: l.bool,
  /** An image can specify its vertical alignment. */
  verticalAlign: l.oneOf(zi),
  /** An image can render wrapped in a `div.ui.image` as alternative HTML markup. */
  wrapped: l.bool
} : {};
xr.defaultProps = {
  as: "img",
  ui: !0
};
xr.create = Gt(xr, function(e) {
  return {
    src: e
  };
});
function Do(e) {
  var t = e.children, n = e.className, r = e.content, o = Ge("detail", n), s = Ye(Do, e), u = Xe(Do, e);
  return /* @__PURE__ */ J.createElement(u, ue({}, s, {
    className: o
  }), dt(t) ? r : t);
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
  content: Nt
} : {};
Do.create = Gt(Do, function(e) {
  return {
    content: e
  };
});
function Yl(e) {
  var t = e.children, n = e.circular, r = e.className, o = e.color, s = e.content, u = e.size, c = e.tag, d = Ge("ui", o, u, V(n, "circular"), V(c, "tag"), "labels", r), p = Ye(Yl, e), h = Xe(Yl, e);
  return /* @__PURE__ */ J.createElement(h, ue({}, p, {
    className: d
  }), dt(t) ? s : t);
}
Yl.handledProps = ["as", "children", "circular", "className", "color", "content", "size", "tag"];
Yl.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Labels can share shapes. */
  circular: l.bool,
  /** Additional classes. */
  className: l.string,
  /** Label group can share colors together. */
  color: l.oneOf(oa),
  /** Shorthand for primary content. */
  content: Nt,
  /** Label group can share sizes together. */
  size: l.oneOf(dr),
  /** Label group can share tag formatting. */
  tag: l.bool
} : {};
var cr = /* @__PURE__ */ function(e) {
  en(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handleClick = function(c) {
      var d = r.props.onClick;
      d && d(c, r.props);
    }, r.handleIconOverrides = function(c) {
      return {
        onClick: function(p) {
          Le(c, "onClick", p), Le(r.props, "onRemove", p, r.props);
        }
      };
    }, r;
  }
  var n = t.prototype;
  return n.render = function() {
    var o = this.props, s = o.active, u = o.attached, c = o.basic, d = o.children, p = o.circular, h = o.className, m = o.color, g = o.content, y = o.corner, b = o.detail, _ = o.empty, w = o.floating, k = o.horizontal, F = o.icon, E = o.image, I = o.onRemove, S = o.pointing, P = o.prompt, C = o.removeIcon, T = o.ribbon, A = o.size, B = o.tag, H = S === !0 && "pointing" || (S === "left" || S === "right") && S + " pointing" || (S === "above" || S === "below") && "pointing " + S, ne = Ge("ui", m, H, A, V(s, "active"), V(c, "basic"), V(p, "circular"), V(_, "empty"), V(w, "floating"), V(k, "horizontal"), V(E === !0, "image"), V(P, "prompt"), V(B, "tag"), rn(y, "corner"), rn(T, "ribbon"), Gn(u, "attached"), "label", h), U = Ye(t, this.props), re = Xe(t, this.props);
    if (!dt(d))
      return /* @__PURE__ */ J.createElement(re, ue({}, U, {
        className: ne,
        onClick: this.handleClick
      }), d);
    var he = fs(C) ? "delete" : C;
    return /* @__PURE__ */ J.createElement(re, ue({
      className: ne,
      onClick: this.handleClick
    }, U), We.create(F, {
      autoGenerateKey: !1
    }), typeof E != "boolean" && xr.create(E, {
      autoGenerateKey: !1
    }), g, Do.create(b, {
      autoGenerateKey: !1
    }), I && We.create(he, {
      autoGenerateKey: !1,
      overrideProps: this.handleIconOverrides
    }));
  }, t;
}(Zn);
cr.handledProps = ["active", "as", "attached", "basic", "children", "circular", "className", "color", "content", "corner", "detail", "empty", "floating", "horizontal", "icon", "image", "onClick", "onRemove", "pointing", "prompt", "removeIcon", "ribbon", "size", "tag"];
cr.propTypes = process.env.NODE_ENV !== "production" ? {
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
  color: l.oneOf(oa),
  /** Shorthand for primary content. */
  content: Nt,
  /** A label can position itself in the corner of an element. */
  corner: l.oneOfType([l.bool, l.oneOf(["left", "right"])]),
  /** Shorthand for LabelDetail. */
  detail: Ct,
  /** Formats the label as a dot. */
  empty: Mt([l.bool, Po(["circular"])]),
  /** Float above another element in the upper right corner. */
  floating: l.bool,
  /** A horizontal label is formatted to label content along-side it horizontally. */
  horizontal: l.bool,
  /** Shorthand for Icon. */
  icon: Ct,
  /** A label can be formatted to emphasize an image or prop can be used as shorthand for Image. */
  image: l.oneOfType([l.bool, Ct]),
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
  removeIcon: Ct,
  /** A label can appear as a ribbon attaching itself to an element. */
  ribbon: l.oneOfType([l.bool, l.oneOf(["right"])]),
  /** A label can have different sizes. */
  size: l.oneOf(dr),
  /** A label can appear as a tag. */
  tag: l.bool
} : {};
cr.Detail = Do;
cr.Group = Yl;
cr.create = Gt(cr, function(e) {
  return {
    content: e
  };
});
function ql(e) {
  var t = e.children, n = e.className, r = e.content, o = e.hidden, s = e.visible, u = Ge(V(s, "visible"), V(o, "hidden"), "content", n), c = Ye(ql, e), d = Xe(ql, e);
  return /* @__PURE__ */ J.createElement(d, ue({}, c, {
    className: u
  }), dt(t) ? r : t);
}
ql.handledProps = ["as", "children", "className", "content", "hidden", "visible"];
ql.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: Nt,
  /** Initially hidden, visible on hover. */
  hidden: l.bool,
  /** Initially visible, hidden on hover. */
  visible: l.bool
} : {};
function Vl(e) {
  var t = e.attached, n = e.basic, r = e.buttons, o = e.children, s = e.className, u = e.color, c = e.compact, d = e.content, p = e.floated, h = e.fluid, m = e.icon, g = e.inverted, y = e.labeled, b = e.negative, _ = e.positive, w = e.primary, k = e.secondary, F = e.size, E = e.toggle, I = e.vertical, S = e.widths, P = Ge("ui", u, F, V(n, "basic"), V(c, "compact"), V(h, "fluid"), V(m, "icon"), V(g, "inverted"), V(y, "labeled"), V(b, "negative"), V(_, "positive"), V(w, "primary"), V(k, "secondary"), V(E, "toggle"), V(I, "vertical"), rn(t, "attached"), Gn(p, "floated"), qn(S), "buttons", s), C = Ye(Vl, e), T = Xe(Vl, e);
  return Tt(r) ? /* @__PURE__ */ J.createElement(T, ue({}, C, {
    className: P
  }), dt(o) ? d : o) : /* @__PURE__ */ J.createElement(T, ue({}, C, {
    className: P
  }), xn(r, function(A) {
    return gt.create(A);
  }));
}
Vl.handledProps = ["as", "attached", "basic", "buttons", "children", "className", "color", "compact", "content", "floated", "fluid", "icon", "inverted", "labeled", "negative", "positive", "primary", "secondary", "size", "toggle", "vertical", "widths"];
Vl.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Groups can be attached to other content. */
  attached: l.oneOfType([l.bool, l.oneOf(["left", "right", "top", "bottom"])]),
  /** Groups can be less pronounced. */
  basic: l.bool,
  /** Array of shorthand Button values. */
  buttons: bc,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Groups can have a shared color. */
  color: l.oneOf(oa),
  /** Groups can reduce their padding to fit into tighter spaces. */
  compact: l.bool,
  /** Shorthand for primary content. */
  content: Nt,
  /** Groups can be aligned to the left or right of its container. */
  floated: l.oneOf(_c),
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
  size: l.oneOf(dr),
  /** Groups can be formatted to toggle on and off. */
  toggle: l.bool,
  /** Groups can be formatted to appear vertically. */
  vertical: l.bool,
  /** Groups can have their widths divided evenly. */
  widths: l.oneOf(or)
} : {};
function Gl(e) {
  var t = e.className, n = e.text, r = Ge("or", t), o = Ye(Gl, e), s = Xe(Gl, e);
  return /* @__PURE__ */ J.createElement(s, ue({}, o, {
    className: r,
    "data-text": n
  }));
}
Gl.handledProps = ["as", "className", "text"];
Gl.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Additional classes. */
  className: l.string,
  /** Or buttons can have their text localized, or adjusted by using the text prop. */
  text: l.oneOfType([l.number, l.string])
} : {};
var gt = /* @__PURE__ */ function(e) {
  en(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.ref = /* @__PURE__ */ wr(), r.computeElementType = function() {
      var c = r.props, d = c.attached, p = c.label;
      if (!Tt(d) || !Tt(p)) return "div";
    }, r.computeTabIndex = function(c) {
      var d = r.props, p = d.disabled, h = d.tabIndex;
      if (!Tt(h)) return h;
      if (p) return -1;
      if (c === "div") return 0;
    }, r.focus = function(c) {
      return Le(r.ref.current, "focus", c);
    }, r.handleClick = function(c) {
      var d = r.props.disabled;
      if (d) {
        c.preventDefault();
        return;
      }
      Le(r.props, "onClick", c, r.props);
    }, r.hasIconClass = function() {
      var c = r.props, d = c.labelPosition, p = c.children, h = c.content, m = c.icon;
      return m === !0 ? !0 : m && (d || dt(p) && Tt(h));
    }, r;
  }
  var n = t.prototype;
  return n.computeButtonAriaRole = function(o) {
    var s = this.props.role;
    if (!Tt(s)) return s;
    if (o !== "button") return "button";
  }, n.render = function() {
    var o = this.props, s = o.active, u = o.animated, c = o.attached, d = o.basic, p = o.children, h = o.circular, m = o.className, g = o.color, y = o.compact, b = o.content, _ = o.disabled, w = o.floated, k = o.fluid, F = o.icon, E = o.inverted, I = o.label, S = o.labelPosition, P = o.loading, C = o.negative, T = o.positive, A = o.primary, B = o.secondary, H = o.size, ne = o.toggle, U = o.type, re = Ge(g, H, V(s, "active"), V(d, "basic"), V(h, "circular"), V(y, "compact"), V(k, "fluid"), V(this.hasIconClass(), "icon"), V(E, "inverted"), V(P, "loading"), V(C, "negative"), V(T, "positive"), V(A, "primary"), V(B, "secondary"), V(ne, "toggle"), rn(u, "animated"), rn(c, "attached")), he = Ge(rn(S || !!I, "labeled")), ge = Ge(V(_, "disabled"), Gn(w, "floated")), Ne = Ye(t, this.props), le = Xe(t, this.props, this.computeElementType), me = this.computeTabIndex(le);
    if (!Tt(I)) {
      var X = Ge("ui", re, "button", m), te = Ge("ui", he, "button", m, ge), oe = cr.create(I, {
        defaultProps: {
          basic: !0,
          pointing: S === "left" ? "right" : "left"
        },
        autoGenerateKey: !1
      });
      return /* @__PURE__ */ J.createElement(le, ue({}, Ne, {
        className: te,
        onClick: this.handleClick
      }), S === "left" && oe, /* @__PURE__ */ J.createElement(lr, {
        innerRef: this.ref
      }, /* @__PURE__ */ J.createElement("button", {
        className: X,
        "aria-pressed": ne ? !!s : void 0,
        disabled: _,
        type: U,
        tabIndex: me
      }, We.create(F, {
        autoGenerateKey: !1
      }), " ", b)), (S === "right" || !S) && oe);
    }
    var be = Ge("ui", re, ge, he, "button", m), Se = !dt(p), ye = this.computeButtonAriaRole(le);
    return /* @__PURE__ */ J.createElement(lr, {
      innerRef: this.ref
    }, /* @__PURE__ */ J.createElement(le, ue({}, Ne, {
      className: be,
      "aria-pressed": ne ? !!s : void 0,
      disabled: _ && le === "button" || void 0,
      onClick: this.handleClick,
      role: ye,
      type: U,
      tabIndex: me
    }), Se && p, !Se && We.create(F, {
      autoGenerateKey: !1
    }), !Se && b));
  }, t;
}(Zn);
gt.handledProps = ["active", "animated", "as", "attached", "basic", "children", "circular", "className", "color", "compact", "content", "disabled", "floated", "fluid", "icon", "inverted", "label", "labelPosition", "loading", "negative", "onClick", "positive", "primary", "role", "secondary", "size", "tabIndex", "toggle", "type"];
gt.propTypes = process.env.NODE_ENV !== "production" ? {
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
  children: Mt([l.node, Yt(["label"]), D1({
    icon: l.oneOfType([l.string.isRequired, l.object.isRequired, l.element.isRequired])
  }, Yt(["icon"]))]),
  /** A button can be circular. */
  circular: l.bool,
  /** Additional classes. */
  className: l.string,
  /** A button can have different colors */
  color: l.oneOf([].concat(oa, ["facebook", "google plus", "instagram", "linkedin", "twitter", "vk", "youtube"])),
  /** A button can reduce its padding to fit into tighter spaces. */
  compact: l.bool,
  /** Shorthand for primary content. */
  content: Nt,
  /** A button can show it is currently unable to be interacted with. */
  disabled: l.bool,
  /** A button can be aligned to the left or right of its container. */
  floated: l.oneOf(_c),
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
  size: l.oneOf(dr),
  /** A button can receive focus. */
  tabIndex: l.oneOfType([l.number, l.string]),
  /** A button can be formatted to toggle on and off. */
  toggle: l.bool,
  /** The type of the HTML element. */
  type: l.oneOf(["button", "submit", "reset"])
} : {};
gt.defaultProps = {
  as: "button"
};
gt.Content = ql;
gt.Group = Vl;
gt.Or = Gl;
gt.create = Gt(gt, function(e) {
  return {
    content: e
  };
});
function Y1(e, t, n, r) {
  var o = -1, s = e == null ? 0 : e.length;
  for (r && s && (n = e[++o]); ++o < s; )
    n = t(n, e[o], o, e);
  return n;
}
function wF(e, t, n, r, o) {
  return o(e, function(s, u, c) {
    n = r ? (r = !1, s) : t(n, s, u, c);
  }), n;
}
function xm(e, t, n) {
  var r = yn(e) ? Y1 : wF, o = arguments.length < 3;
  return r(e, Qo(t), n, o, zs);
}
var xF = function(t, n, r, o) {
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
    var m = t[h], g = n[h];
    if (s = r ? r.call(o, m, g, h) : void 0, s === !1 || s === void 0 && m !== g)
      return !1;
  }
  return !0;
};
const Il = /* @__PURE__ */ hc(xF);
var ws = /* @__PURE__ */ function(e) {
  en(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handleButtonOverrides = function(c) {
      return {
        onClick: function(p, h) {
          Le(c, "onClick", p, h), Le(r.props, "onActionClick", p, h);
        }
      };
    }, r;
  }
  var n = t.prototype;
  return n.render = function() {
    var o = this, s = this.props, u = s.actions, c = s.children, d = s.className, p = s.content, h = Ge("actions", d), m = Ye(t, this.props), g = Xe(t, this.props);
    return dt(c) ? dt(p) ? /* @__PURE__ */ J.createElement(g, ue({}, m, {
      className: h
    }), xn(u, function(y) {
      return gt.create(y, {
        overrideProps: o.handleButtonOverrides
      });
    })) : /* @__PURE__ */ J.createElement(g, ue({}, m, {
      className: h
    }), p) : /* @__PURE__ */ J.createElement(g, ue({}, m, {
      className: h
    }), c);
  }, t;
}(Zn);
ws.handledProps = ["actions", "as", "children", "className", "content", "onActionClick"];
ws.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Array of shorthand buttons. */
  actions: bc,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: Nt,
  /**
   * Action onClick handler when using shorthand `actions`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props from the clicked action.
   */
  onActionClick: Mt([Yt(["children"]), l.func])
} : {};
ws.create = Gt(ws, function(e) {
  return {
    actions: e
  };
});
function Lo(e) {
  var t = e.children, n = e.className, r = e.content, o = e.image, s = e.scrolling, u = Ge(n, V(o, "image"), V(s, "scrolling"), "content"), c = Ye(Lo, e), d = Xe(Lo, e);
  return /* @__PURE__ */ J.createElement(d, ue({}, c, {
    className: u
  }), dt(t) ? r : t);
}
Lo.handledProps = ["as", "children", "className", "content", "image", "scrolling"];
Lo.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: Nt,
  /** A modal can contain image content. */
  image: l.bool,
  /** A modal can use the entire size of the screen. */
  scrolling: l.bool
} : {};
Lo.create = Gt(Lo, function(e) {
  return {
    content: e
  };
});
function Kl(e) {
  var t = e.children, n = e.className, r = e.content, o = Ge("description", n), s = Ye(Kl, e), u = Xe(Kl, e);
  return /* @__PURE__ */ J.createElement(u, ue({}, s, {
    className: o
  }), dt(t) ? r : t);
}
Kl.handledProps = ["as", "children", "className", "content"];
Kl.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: Nt
} : {};
function Fo(e) {
  var t = e.blurring, n = e.children, r = e.className, o = e.centered, s = e.content, u = e.inverted, c = e.mountNode, d = e.scrolling, p = J.useRef(), h = Ge("ui", V(u, "inverted"), V(!o, "top aligned"), "page modals dimmer transition visible active", r), m = Ge("dimmable dimmed", V(t, "blurring"), V(d, "scrolling")), g = Ye(Fo, e), y = Xe(Fo, e);
  return mF(c, m), J.useEffect(function() {
    p.current && p.current.style && p.current.style.setProperty("display", "flex", "important");
  }, []), /* @__PURE__ */ J.createElement(lr, {
    innerRef: p
  }, /* @__PURE__ */ J.createElement(y, ue({}, g, {
    className: h
  }), dt(n) ? s : n));
}
Fo.handledProps = ["as", "blurring", "centered", "children", "className", "content", "inverted", "mountNode", "scrolling"];
Fo.propTypes = process.env.NODE_ENV !== "production" ? {
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
  content: Nt,
  /** A dimmer can be inverted. */
  inverted: l.bool,
  /** The node where the modal should mount. Defaults to document.body. */
  mountNode: l.any,
  /** A dimmer can make body scrollable. */
  scrolling: l.bool
} : {};
Fo.create = Gt(Fo, function(e) {
  return {
    content: e
  };
});
function $o(e) {
  var t = e.children, n = e.className, r = e.content, o = Ge("header", n), s = Ye($o, e), u = Xe($o, e);
  return /* @__PURE__ */ J.createElement(u, ue({}, s, {
    className: o
  }), dt(t) ? r : t);
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
  content: Nt
} : {};
$o.create = Gt($o, function(e) {
  return {
    content: e
  };
});
var e0 = 0, EF = 50, CF = function(t) {
  var n = t.height + e0, r = t.height + e0, o = window.innerHeight, s = o / 2, u = -(r / 2), c = EF, d = s + u;
  return d + n + c < o;
}, OF = function(t, n, r) {
  var o = n && t ? -(r.height / 2) : 0, s = -(r.width / 2);
  return {
    marginLeft: s,
    marginTop: o
  };
}, SF = function() {
  return !window.ActiveXObject && "ActiveXObject" in window;
}, un = /* @__PURE__ */ function(e) {
  en(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.legacy = xi() && SF(), r.ref = /* @__PURE__ */ wr(), r.dimmerRef = /* @__PURE__ */ wr(), r.latestDocumentMouseDownEvent = null, r.getMountNode = function() {
      return xi() ? r.props.mountNode || document.body : null;
    }, r.handleActionsOverrides = function(c) {
      return {
        onActionClick: function(p, h) {
          Le(c, "onActionClick", p, h), Le(r.props, "onActionClick", p, r.props), r.handleClose(p);
        }
      };
    }, r.handleClose = function(c) {
      r.setState({
        open: !1
      }), Le(r.props, "onClose", c, ue({}, r.props, {
        open: !1
      }));
    }, r.handleDocumentMouseDown = function(c) {
      r.latestDocumentMouseDownEvent = c;
    }, r.handleDocumentClick = function(c) {
      var d = r.props.closeOnDimmerClick, p = r.latestDocumentMouseDownEvent;
      r.latestDocumentMouseDownEvent = null, !(!d || Io(r.ref.current, p) || Io(r.ref.current, c)) && (r.setState({
        open: !1
      }), Le(r.props, "onClose", c, ue({}, r.props, {
        open: !1
      })));
    }, r.handleIconOverrides = function(c) {
      return {
        onClick: function(p) {
          Le(c, "onClick", p), r.handleClose(p);
        }
      };
    }, r.handleOpen = function(c) {
      Le(r.props, "onOpen", c, ue({}, r.props, {
        open: !0
      })), r.setState({
        open: !0
      });
    }, r.handlePortalMount = function(c) {
      var d = r.props.eventPool;
      r.setState({
        scrolling: !1
      }), r.setPositionAndClassNames(), Sl.sub("mousedown", r.handleDocumentMouseDown, {
        pool: d,
        target: r.dimmerRef.current
      }), Sl.sub("click", r.handleDocumentClick, {
        pool: d,
        target: r.dimmerRef.current
      }), Le(r.props, "onMount", c, r.props);
    }, r.handlePortalUnmount = function(c) {
      var d = r.props.eventPool;
      cancelAnimationFrame(r.animationRequestId), Sl.unsub("mousedown", r.handleDocumentMouseDown, {
        pool: d,
        target: r.dimmerRef.current
      }), Sl.unsub("click", r.handleDocumentClick, {
        pool: d,
        target: r.dimmerRef.current
      }), Le(r.props, "onUnmount", c, r.props);
    }, r.setPositionAndClassNames = function() {
      var c = r.props.centered, d, p = {};
      if (r.ref.current) {
        var h = r.ref.current.getBoundingClientRect(), m = CF(h);
        d = !m;
        var g = r.legacy ? OF(m, c, h) : {};
        Il(r.state.legacyStyles, g) || (p.legacyStyles = g), r.state.scrolling !== d && (p.scrolling = d);
      }
      yi(p) || r.setState(p), r.animationRequestId = requestAnimationFrame(r.setPositionAndClassNames);
    }, r.renderContent = function(c) {
      var d = r.props, p = d.actions, h = d.basic, m = d.children, g = d.className, y = d.closeIcon, b = d.content, _ = d.header, w = d.size, k = d.style, F = r.state, E = F.legacyStyles, I = F.scrolling, S = Ge("ui", w, V(h, "basic"), V(r.legacy, "legacy"), V(I, "scrolling"), "modal transition visible active", g), P = Xe(t, r.props), C = y === !0 ? "close" : y, T = We.create(C, {
        overrideProps: r.handleIconOverrides
      });
      return /* @__PURE__ */ J.createElement(lr, {
        innerRef: r.ref
      }, /* @__PURE__ */ J.createElement(P, ue({}, c, {
        className: S,
        style: ue({}, E, k)
      }), T, dt(m) ? /* @__PURE__ */ J.createElement(J.Fragment, null, $o.create(_, {
        autoGenerateKey: !1
      }), Lo.create(b, {
        autoGenerateKey: !1
      }), ws.create(p, {
        overrideProps: r.handleActionsOverrides
      })) : m));
    }, r;
  }
  var n = t.prototype;
  return n.componentWillUnmount = function() {
    this.handlePortalUnmount();
  }, n.render = function() {
    var o = this.props, s = o.centered, u = o.closeOnDocumentClick, c = o.dimmer, d = o.eventPool, p = o.trigger, h = this.state, m = h.open, g = h.scrolling, y = this.getMountNode();
    if (!xi())
      return /* @__PURE__ */ WI(p) ? p : null;
    var b = Ye(t, this.props), _ = ea.handledProps, w = xm(b, function(F, E, I) {
      return _a(_, I) || (F[I] = E), F;
    }, {}), k = Td(b, _);
    return /* @__PURE__ */ J.createElement(ea, ue({
      closeOnDocumentClick: u
    }, k, {
      trigger: p,
      eventPool: d,
      mountNode: y,
      open: m,
      onClose: this.handleClose,
      onMount: this.handlePortalMount,
      onOpen: this.handleOpen,
      onUnmount: this.handlePortalUnmount
    }), /* @__PURE__ */ J.createElement(lr, {
      innerRef: this.dimmerRef
    }, Fo.create(Pd(c) ? c : {}, {
      autoGenerateKey: !1,
      defaultProps: {
        blurring: c === "blurring",
        inverted: c === "inverted"
      },
      overrideProps: {
        children: this.renderContent(w),
        centered: s,
        mountNode: y,
        scrolling: g
      }
    })));
  }, t;
}(Us);
un.handledProps = ["actions", "as", "basic", "centered", "children", "className", "closeIcon", "closeOnDimmerClick", "closeOnDocumentClick", "content", "defaultOpen", "dimmer", "eventPool", "header", "mountNode", "onActionClick", "onClose", "onMount", "onOpen", "onUnmount", "open", "size", "style", "trigger"];
un.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Shorthand for Modal.Actions. Typically an array of button shorthand. */
  actions: Ct,
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
  content: Ct,
  /** Initial value of open. */
  defaultOpen: l.bool,
  /** A Modal can appear in a dimmer. */
  dimmer: l.oneOfType([l.bool, l.func, l.object, l.oneOf(["inverted", "blurring"])]),
  /** Event pool namespace that is used to handle component events */
  eventPool: l.string,
  /** Modal displayed above the content in bold. */
  header: Ct,
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
un.defaultProps = {
  centered: !0,
  dimmer: !0,
  closeOnDimmerClick: !0,
  closeOnDocumentClick: !1,
  eventPool: "Modal"
};
un.autoControlledProps = ["open"];
un.Actions = ws;
un.Content = Lo;
un.Description = Kl;
un.Dimmer = Fo;
un.Header = $o;
function Zl(e) {
  var t = e.children, n = e.className, r = e.content, o = Ge("header", n), s = Ye(Zl, e), u = Xe(Zl, e);
  return /* @__PURE__ */ J.createElement(u, ue({}, s, {
    className: o
  }), dt(t) ? r : t);
}
Zl.handledProps = ["as", "children", "className", "content"];
Zl.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: Nt
} : {};
function TF(e) {
  return function(t) {
    return e == null ? void 0 : e[t];
  };
}
var PF = {
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
}, kF = TF(PF), NF = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, IF = "\\u0300-\\u036f", AF = "\\ufe20-\\ufe2f", RF = "\\u20d0-\\u20ff", MF = IF + AF + RF, DF = "[" + MF + "]", LF = RegExp(DF, "g");
function bh(e) {
  return e = Bi(e), e && e.replace(NF, kF).replace(LF, "");
}
var FF = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function $F(e) {
  return e.match(FF) || [];
}
var BF = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function jF(e) {
  return BF.test(e);
}
var q1 = "\\ud800-\\udfff", WF = "\\u0300-\\u036f", zF = "\\ufe20-\\ufe2f", UF = "\\u20d0-\\u20ff", HF = WF + zF + UF, V1 = "\\u2700-\\u27bf", G1 = "a-z\\xdf-\\xf6\\xf8-\\xff", YF = "\\xac\\xb1\\xd7\\xf7", qF = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", VF = "\\u2000-\\u206f", GF = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", K1 = "A-Z\\xc0-\\xd6\\xd8-\\xde", KF = "\\ufe0e\\ufe0f", Z1 = YF + qF + VF + GF, X1 = "['’]", t0 = "[" + Z1 + "]", ZF = "[" + HF + "]", Q1 = "\\d+", XF = "[" + V1 + "]", J1 = "[" + G1 + "]", ew = "[^" + q1 + Z1 + Q1 + V1 + G1 + K1 + "]", QF = "\\ud83c[\\udffb-\\udfff]", JF = "(?:" + ZF + "|" + QF + ")", e3 = "[^" + q1 + "]", tw = "(?:\\ud83c[\\udde6-\\uddff]){2}", nw = "[\\ud800-\\udbff][\\udc00-\\udfff]", ss = "[" + K1 + "]", t3 = "\\u200d", n0 = "(?:" + J1 + "|" + ew + ")", n3 = "(?:" + ss + "|" + ew + ")", r0 = "(?:" + X1 + "(?:d|ll|m|re|s|t|ve))?", a0 = "(?:" + X1 + "(?:D|LL|M|RE|S|T|VE))?", rw = JF + "?", aw = "[" + KF + "]?", r3 = "(?:" + t3 + "(?:" + [e3, tw, nw].join("|") + ")" + aw + rw + ")*", a3 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", o3 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", i3 = aw + rw + r3, s3 = "(?:" + [XF, tw, nw].join("|") + ")" + i3, l3 = RegExp([
  ss + "?" + J1 + "+" + r0 + "(?=" + [t0, ss, "$"].join("|") + ")",
  n3 + "+" + a0 + "(?=" + [t0, ss + n0, "$"].join("|") + ")",
  ss + "?" + n0 + "+" + r0,
  ss + "+" + a0,
  o3,
  a3,
  Q1,
  s3
].join("|"), "g");
function c3(e) {
  return e.match(l3) || [];
}
function u3(e, t, n) {
  return e = Bi(e), t = t, t === void 0 ? jF(e) ? c3(e) : $F(e) : e.match(t) || [];
}
var d3 = "['’]", f3 = RegExp(d3, "g");
function p3(e) {
  return function(t) {
    return Y1(u3(bh(t).replace(f3, "")), e, "");
  };
}
function h3(e) {
  return function(t) {
    t = Bi(t);
    var n = vm(t) ? hh(t) : void 0, r = n ? n[0] : t.charAt(0), o = n ? C1(n, 1).join("") : t.slice(1);
    return r[e]() + o;
  };
}
var m3 = h3("toUpperCase"), g3 = p3(function(e, t, n) {
  return e + (n ? " " : "") + m3(t);
}), Pi = /* @__PURE__ */ function(e) {
  en(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handleClick = function(c) {
      var d = r.props.disabled;
      d || Le(r.props, "onClick", c, r.props);
    }, r;
  }
  var n = t.prototype;
  return n.render = function() {
    var o = this.props, s = o.active, u = o.children, c = o.className, d = o.color, p = o.content, h = o.disabled, m = o.fitted, g = o.header, y = o.icon, b = o.link, _ = o.name, w = o.onClick, k = o.position, F = Ge(d, k, V(s, "active"), V(h, "disabled"), V(y === !0 || y && !(_ || p), "icon"), V(g, "header"), V(b, "link"), rn(m, "fitted"), "item", c), E = Xe(t, this.props, function() {
      if (w) return "a";
    }), I = Ye(t, this.props);
    return dt(u) ? /* @__PURE__ */ J.createElement(E, ue({}, I, {
      className: F,
      onClick: this.handleClick
    }), We.create(y, {
      autoGenerateKey: !1
    }), dt(p) ? g3(_) : p) : /* @__PURE__ */ J.createElement(E, ue({}, I, {
      className: F,
      onClick: this.handleClick
    }), u);
  }, t;
}(Zn);
Pi.handledProps = ["active", "as", "children", "className", "color", "content", "disabled", "fitted", "header", "icon", "index", "link", "name", "onClick", "position"];
Pi.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** A menu item can be active. */
  active: l.bool,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Additional colors can be specified. */
  color: l.oneOf(oa),
  /** Shorthand for primary content. */
  content: Nt,
  /** A menu item can be disabled. */
  disabled: l.bool,
  /** A menu item or menu can remove element padding, vertically or horizontally. */
  fitted: l.oneOfType([l.bool, l.oneOf(["horizontally", "vertically"])]),
  /** A menu item may include a header or may itself be a header. */
  header: l.bool,
  /** MenuItem can be only icon. */
  icon: l.oneOfType([l.bool, Ct]),
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
Pi.create = Gt(Pi, function(e) {
  return {
    content: e,
    name: e
  };
});
function Xl(e) {
  var t = e.children, n = e.className, r = e.content, o = e.position, s = Ge(o, "menu", n), u = Ye(Xl, e), c = Xe(Xl, e);
  return /* @__PURE__ */ J.createElement(c, ue({}, u, {
    className: s
  }), dt(t) ? r : t);
}
Xl.handledProps = ["as", "children", "className", "content", "position"];
Xl.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: Nt,
  /** A sub menu can take left or right position. */
  position: l.oneOf(["left", "right"])
} : {};
var In = /* @__PURE__ */ function(e) {
  en(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handleItemOverrides = function(c) {
      return {
        onClick: function(p, h) {
          var m = h.index;
          r.setState({
            activeIndex: m
          }), Le(c, "onClick", p, h), Le(r.props, "onItemClick", p, h);
        }
      };
    }, r;
  }
  var n = t.prototype;
  return n.renderItems = function() {
    var o = this, s = this.props.items, u = this.state.activeIndex;
    return xn(s, function(c, d) {
      return Pi.create(c, {
        defaultProps: {
          active: parseInt(u, 10) === d,
          index: d
        },
        overrideProps: o.handleItemOverrides
      });
    });
  }, n.render = function() {
    var o = this.props, s = o.attached, u = o.borderless, c = o.children, d = o.className, p = o.color, h = o.compact, m = o.fixed, g = o.floated, y = o.fluid, b = o.icon, _ = o.inverted, w = o.pagination, k = o.pointing, F = o.secondary, E = o.size, I = o.stackable, S = o.tabular, P = o.text, C = o.vertical, T = o.widths, A = Ge("ui", p, E, V(u, "borderless"), V(h, "compact"), V(y, "fluid"), V(_, "inverted"), V(w, "pagination"), V(k, "pointing"), V(F, "secondary"), V(I, "stackable"), V(P, "text"), V(C, "vertical"), rn(s, "attached"), rn(g, "floated"), rn(b, "icon"), rn(S, "tabular"), Gn(m, "fixed"), qn(T, "item"), d, "menu"), B = Ye(t, this.props), H = Xe(t, this.props);
    return /* @__PURE__ */ J.createElement(H, ue({}, B, {
      className: A
    }), dt(c) ? this.renderItems() : c);
  }, t;
}(Us);
In.handledProps = ["activeIndex", "as", "attached", "borderless", "children", "className", "color", "compact", "defaultActiveIndex", "fixed", "floated", "fluid", "icon", "inverted", "items", "onItemClick", "pagination", "pointing", "secondary", "size", "stackable", "tabular", "text", "vertical", "widths"];
In.propTypes = process.env.NODE_ENV !== "production" ? {
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
  color: l.oneOf(oa),
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
  items: bc,
  /**
   * onClick handler for MenuItem. Mutually exclusive with children.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All item props.
   */
  onItemClick: Mt([Yt(["children"]), l.func]),
  /** A pagination menu is specially formatted to present links to pages of content. */
  pagination: l.bool,
  /** A menu can point to show its relationship to nearby content. */
  pointing: l.bool,
  /** A menu can adjust its appearance to de-emphasize its contents. */
  secondary: l.bool,
  /** A menu can vary in size. */
  size: l.oneOf(ta(dr, "medium", "big")),
  /** A menu can stack at mobile resolutions. */
  stackable: l.bool,
  /** A menu can be formatted to show tabs of information. */
  tabular: l.oneOfType([l.bool, l.oneOf(["right"])]),
  /** A menu can be formatted for text content. */
  text: l.bool,
  /** A vertical menu displays elements vertically. */
  vertical: l.bool,
  /** A menu can have its items divided evenly. */
  widths: l.oneOf(or)
} : {};
In.autoControlledProps = ["activeIndex"];
In.Header = Zl;
In.Item = Pi;
In.Menu = Xl;
In.create = Gt(In, function(e) {
  return {
    items: e
  };
});
var xs = /* @__PURE__ */ function(e) {
  en(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handleClick = function(c) {
      Le(r.props, "onClick", c, r.props);
    }, r.handleKeyDown = function(c) {
      Le(r.props, "onKeyDown", c, r.props), bn.getCode(c) === bn.Enter && Le(r.props, "onClick", c, r.props);
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
    return Pi.create(this.props, {
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
}(Zn);
xs.handledProps = ["active", "disabled", "onClick", "onKeyDown", "type"];
xs.propTypes = process.env.NODE_ENV !== "production" ? {
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
xs.create = Gt(xs, function(e) {
  return {
    content: e
  };
});
var Hs = /* @__PURE__ */ function(e) {
  en(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handleItemClick = function(c, d) {
      var p = d.value, h = r.state.activePage;
      +h != +p && (r.setState({
        activePage: p
      }), Le(r.props, "onPageChange", c, ue({}, r.props, {
        activePage: p
      })));
    }, r.handleItemOverrides = function(c, d, p) {
      return function(h) {
        return {
          active: c,
          type: d,
          key: d + "-" + p,
          onClick: function(g, y) {
            Le(h, "onClick", g, y), y.type !== "ellipsisItem" && r.handleItemClick(g, y);
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
    var o = this, s = this.props, u = s["aria-label"], c = s.boundaryRange, d = s.disabled, p = s.ellipsisItem, h = s.siblingRange, m = s.totalPages, g = this.state.activePage, y = TL({
      activePage: g,
      boundaryRange: c,
      hideEllipsis: Tt(p),
      siblingRange: h,
      totalPages: m
    }), b = Ye(t, this.props);
    return /* @__PURE__ */ J.createElement(In, ue({}, b, {
      "aria-label": u,
      pagination: !0,
      role: "navigation"
    }), xn(y, function(_) {
      var w = _.active, k = _.type, F = _.value;
      return xs.create(o.props[k], {
        defaultProps: {
          content: F,
          disabled: d,
          value: F
        },
        overrideProps: o.handleItemOverrides(w, k, F)
      });
    }));
  }, t;
}(Us);
Hs.handledProps = ["activePage", "aria-label", "boundaryRange", "defaultActivePage", "disabled", "ellipsisItem", "firstItem", "lastItem", "nextItem", "onPageChange", "pageItem", "prevItem", "siblingRange", "totalPages"];
Hs.propTypes = process.env.NODE_ENV !== "production" ? {
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
  ellipsisItem: Ct,
  /** A shorthand for PaginationItem. */
  firstItem: Ct,
  /** A shorthand for PaginationItem. */
  lastItem: Ct,
  /** A shorthand for PaginationItem. */
  nextItem: Ct,
  /** A shorthand for PaginationItem. */
  pageItem: Ct,
  /** A shorthand for PaginationItem. */
  prevItem: Ct,
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
Hs.autoControlledProps = ["activePage"];
Hs.defaultProps = {
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
Hs.Item = xs;
function v3(e, t, n) {
  return e == null ? e : I1(e, t, n);
}
var Kn = /* @__PURE__ */ function(e) {
  en(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.inputRef = /* @__PURE__ */ wr(), r.labelRef = /* @__PURE__ */ wr(), r.canToggle = function() {
      var c = r.props, d = c.disabled, p = c.radio, h = c.readOnly, m = r.state.checked;
      return !d && !h && !(p && m);
    }, r.computeTabIndex = function() {
      var c = r.props, d = c.disabled, p = c.tabIndex;
      return Tt(p) ? d ? -1 : 0 : p;
    }, r.handleClick = function(c) {
      var d = r.props.id, p = r.state, h = p.checked, m = p.indeterminate, g = Le(r.inputRef.current, "contains", c.target), y = Le(r.labelRef.current, "contains", c.target), b = !y && !g, _ = !Tt(d), w = y && _;
      w || Le(r.props, "onClick", c, ue({}, r.props, {
        checked: !h,
        indeterminate: !!m
      })), r.isClickFromMouse && (r.isClickFromMouse = !1, y && !_ && r.handleChange(c), b && r.handleChange(c), y && _ && c.stopPropagation());
    }, r.handleChange = function(c) {
      var d = r.state.checked;
      r.canToggle() && (Le(r.props, "onChange", c, ue({}, r.props, {
        checked: !d,
        indeterminate: !1
      })), r.setState({
        checked: !d,
        indeterminate: !1
      }));
    }, r.handleMouseDown = function(c) {
      var d = r.state, p = d.checked, h = d.indeterminate;
      Le(r.props, "onMouseDown", c, ue({}, r.props, {
        checked: !!p,
        indeterminate: !!h
      })), c.defaultPrevented || Le(r.inputRef.current, "focus"), c.preventDefault();
    }, r.handleMouseUp = function(c) {
      var d = r.state, p = d.checked, h = d.indeterminate;
      r.isClickFromMouse = !0, Le(r.props, "onMouseUp", c, ue({}, r.props, {
        checked: !!p,
        indeterminate: !!h
      }));
    }, r.setIndeterminate = function() {
      var c = r.state.indeterminate;
      v3(r.inputRef, "current.indeterminate", !!c);
    }, r;
  }
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.setIndeterminate();
  }, n.componentDidUpdate = function() {
    this.setIndeterminate();
  }, n.render = function() {
    var o = this.props, s = o.className, u = o.disabled, c = o.label, d = o.id, p = o.name, h = o.radio, m = o.readOnly, g = o.slider, y = o.toggle, b = o.type, _ = o.value, w = this.state, k = w.checked, F = w.indeterminate, E = Ge(
      "ui",
      V(k, "checked"),
      V(u, "disabled"),
      V(F, "indeterminate"),
      // auto apply fitted class to compact white space when there is no label
      // https://semantic-ui.com/modules/checkbox.html#fitted
      V(Tt(c), "fitted"),
      V(h, "radio"),
      V(m, "read-only"),
      V(g, "slider"),
      V(y, "toggle"),
      "checkbox",
      s
    ), I = Ye(t, this.props), S = Xe(t, this.props), P = wm(I, {
      htmlProps: z1
    }), C = P[0], T = P[1], A = vh(c, {
      defaultProps: {
        htmlFor: d
      },
      autoGenerateKey: !1
    }) || /* @__PURE__ */ J.createElement("label", {
      htmlFor: d
    });
    return /* @__PURE__ */ J.createElement(S, ue({}, T, {
      className: E,
      onClick: this.handleClick,
      onChange: this.handleChange,
      onMouseDown: this.handleMouseDown,
      onMouseUp: this.handleMouseUp
    }), /* @__PURE__ */ J.createElement(lr, {
      innerRef: this.inputRef
    }, /* @__PURE__ */ J.createElement("input", ue({}, C, {
      checked: k,
      className: "hidden",
      disabled: u,
      id: d,
      name: p,
      readOnly: !0,
      tabIndex: this.computeTabIndex(),
      type: b,
      value: _
    }))), /* @__PURE__ */ J.createElement(lr, {
      innerRef: this.labelRef
    }, A));
  }, t;
}(Us);
Kn.handledProps = ["as", "checked", "className", "defaultChecked", "defaultIndeterminate", "disabled", "fitted", "id", "indeterminate", "label", "name", "onChange", "onClick", "onMouseDown", "onMouseUp", "radio", "readOnly", "slider", "tabIndex", "toggle", "type", "value"];
Kn.propTypes = process.env.NODE_ENV !== "production" ? {
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
  label: Ct,
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
  radio: Mt([l.bool, Yt(["slider", "toggle"])]),
  /** A checkbox can be read-only and unable to change states. */
  readOnly: l.bool,
  /** Format to emphasize the current selection state. */
  slider: Mt([l.bool, Yt(["radio", "toggle"])]),
  /** A checkbox can receive focus. */
  tabIndex: l.oneOfType([l.number, l.string]),
  /** Format to show an on or off choice. */
  toggle: Mt([l.bool, Yt(["radio", "slider"])]),
  /** HTML input type, either checkbox or radio. */
  type: l.oneOf(["checkbox", "radio"]),
  /** The HTML input value. */
  value: l.oneOfType([l.string, l.number])
} : {};
Kn.defaultProps = {
  type: "checkbox"
};
Kn.autoControlledProps = ["checked", "indeterminate"];
function Bo(e) {
  var t = e.slider, n = e.toggle, r = e.type, o = Ye(Bo, e), s = !(t || n) || void 0;
  return /* @__PURE__ */ J.createElement(Kn, ue({}, o, {
    type: r,
    radio: s,
    slider: t,
    toggle: n
  }));
}
Bo.handledProps = ["slider", "toggle", "type"];
Bo.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Format to emphasize the current selection state. */
  slider: Kn.propTypes.slider,
  /** Format to show an on or off choice. */
  toggle: Kn.propTypes.toggle,
  /** HTML input type, either checkbox or radio. */
  type: Kn.propTypes.type
} : {};
Bo.defaultProps = {
  type: "radio"
};
function y3(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = 0, o = []; ++t < n; ) {
    var s = e[t];
    s && (o[r++] = s);
  }
  return o;
}
function b3(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (!t(e[n], n, e))
      return !1;
  return !0;
}
function _3(e, t) {
  var n = !0;
  return zs(e, function(r, o, s) {
    return n = !!t(r, o, s), n;
  }), n;
}
function w3(e, t, n) {
  var r = yn(e) ? b3 : _3;
  return r(e, Qo(t));
}
function x3(e, t, n) {
  var r = e == null ? 0 : e.length;
  return r ? (t = t === void 0 ? 1 : yc(t), t = r - t, Ed(e, 0, t < 0 ? 0 : t)) : [];
}
var E3 = b1("length"), ow = "\\ud800-\\udfff", C3 = "\\u0300-\\u036f", O3 = "\\ufe20-\\ufe2f", S3 = "\\u20d0-\\u20ff", T3 = C3 + O3 + S3, P3 = "\\ufe0e\\ufe0f", k3 = "[" + ow + "]", _h = "[" + T3 + "]", wh = "\\ud83c[\\udffb-\\udfff]", N3 = "(?:" + _h + "|" + wh + ")", iw = "[^" + ow + "]", sw = "(?:\\ud83c[\\udde6-\\uddff]){2}", lw = "[\\ud800-\\udbff][\\udc00-\\udfff]", I3 = "\\u200d", cw = N3 + "?", uw = "[" + P3 + "]?", A3 = "(?:" + I3 + "(?:" + [iw, sw, lw].join("|") + ")" + uw + cw + ")*", R3 = uw + cw + A3, M3 = "(?:" + [iw + _h + "?", _h, sw, lw, k3].join("|") + ")", o0 = RegExp(wh + "(?=" + wh + ")|" + M3 + R3, "g");
function D3(e) {
  for (var t = o0.lastIndex = 0; o0.test(e); )
    ++t;
  return t;
}
function L3(e) {
  return vm(e) ? D3(e) : E3(e);
}
var F3 = "[object Map]", $3 = "[object Set]";
function B3(e) {
  if (e == null)
    return 0;
  if (io(e))
    return _m(e) ? L3(e) : e.length;
  var t = ma(e);
  return t == F3 || t == $3 ? e.size : hm(e).length;
}
var i0 = Ws(function(e) {
  return B1(Sd(e, 1, Wl, !0));
}), j3 = ["ad", "andorra", "ae", "united arab emirates", "uae", "af", "afghanistan", "ag", "antigua", "ai", "anguilla", "al", "albania", "am", "armenia", "an", "netherlands antilles", "ao", "angola", "ar", "argentina", "as", "american samoa", "at", "austria", "au", "australia", "aw", "aruba", "ax", "aland islands", "az", "azerbaijan", "ba", "bosnia", "bb", "barbados", "bd", "bangladesh", "be", "belgium", "bf", "burkina faso", "bg", "bulgaria", "bh", "bahrain", "bi", "burundi", "bj", "benin", "bm", "bermuda", "bn", "brunei", "bo", "bolivia", "br", "brazil", "bs", "bahamas", "bt", "bhutan", "bv", "bouvet island", "bw", "botswana", "by", "belarus", "bz", "belize", "ca", "canada", "cc", "cocos islands", "cd", "congo", "cf", "central african republic", "cg", "congo brazzaville", "ch", "switzerland", "ci", "cote divoire", "ck", "cook islands", "cl", "chile", "cm", "cameroon", "cn", "china", "co", "colombia", "cr", "costa rica", "cs", "cu", "cuba", "cv", "cape verde", "cx", "christmas island", "cy", "cyprus", "cz", "czech republic", "de", "germany", "dj", "djibouti", "dk", "denmark", "dm", "dominica", "do", "dominican republic", "dz", "algeria", "ec", "ecuador", "england", "gb eng", "ee", "estonia", "eg", "egypt", "eh", "western sahara", "er", "eritrea", "es", "spain", "et", "ethiopia", "eu", "european union", "fi", "finland", "fj", "fiji", "fk", "falkland islands", "fm", "micronesia", "fo", "faroe islands", "fr", "france", "ga", "gabon", "gb", "uk", "united kingdom", "gd", "grenada", "ge", "georgia", "gf", "french guiana", "gh", "ghana", "gi", "gibraltar", "gl", "greenland", "gm", "gambia", "gn", "guinea", "gp", "guadeloupe", "gq", "equatorial guinea", "gr", "greece", "gs", "sandwich islands", "gt", "guatemala", "gu", "guam", "gw", "guinea-bissau", "gy", "guyana", "hk", "hong kong", "hm", "heard island", "hn", "honduras", "hr", "croatia", "ht", "haiti", "hu", "hungary", "id", "indonesia", "ie", "ireland", "il", "israel", "in", "india", "io", "indian ocean territory", "iq", "iraq", "ir", "iran", "is", "iceland", "it", "italy", "jm", "jamaica", "jo", "jordan", "jp", "japan", "ke", "kenya", "kg", "kyrgyzstan", "kh", "cambodia", "ki", "kiribati", "km", "comoros", "kn", "saint kitts and nevis", "kp", "north korea", "kr", "south korea", "kw", "kuwait", "ky", "cayman islands", "kz", "kazakhstan", "la", "laos", "lb", "lebanon", "lc", "saint lucia", "li", "liechtenstein", "lk", "sri lanka", "lr", "liberia", "ls", "lesotho", "lt", "lithuania", "lu", "luxembourg", "lv", "latvia", "ly", "libya", "ma", "morocco", "mc", "monaco", "md", "moldova", "me", "montenegro", "mg", "madagascar", "mh", "marshall islands", "mk", "macedonia", "ml", "mali", "mm", "myanmar", "burma", "mn", "mongolia", "mo", "macau", "mp", "northern mariana islands", "mq", "martinique", "mr", "mauritania", "ms", "montserrat", "mt", "malta", "mu", "mauritius", "mv", "maldives", "mw", "malawi", "mx", "mexico", "my", "malaysia", "mz", "mozambique", "na", "namibia", "nc", "new caledonia", "ne", "niger", "nf", "norfolk island", "ng", "nigeria", "ni", "nicaragua", "nl", "netherlands", "no", "norway", "np", "nepal", "nr", "nauru", "nu", "niue", "nz", "new zealand", "om", "oman", "pa", "panama", "pe", "peru", "pf", "french polynesia", "pg", "new guinea", "ph", "philippines", "pk", "pakistan", "pl", "poland", "pm", "saint pierre", "pn", "pitcairn islands", "pr", "puerto rico", "ps", "palestine", "pt", "portugal", "pw", "palau", "py", "paraguay", "qa", "qatar", "re", "reunion", "ro", "romania", "rs", "serbia", "ru", "russia", "rw", "rwanda", "sa", "saudi arabia", "sb", "solomon islands", "sc", "seychelles", "gb sct", "scotland", "sd", "sudan", "se", "sweden", "sg", "singapore", "sh", "saint helena", "si", "slovenia", "sj", "svalbard", "jan mayen", "sk", "slovakia", "sl", "sierra leone", "sm", "san marino", "sn", "senegal", "so", "somalia", "sr", "suriname", "st", "sao tome", "sv", "el salvador", "sy", "syria", "sz", "swaziland", "tc", "caicos islands", "td", "chad", "tf", "french territories", "tg", "togo", "th", "thailand", "tj", "tajikistan", "tk", "tokelau", "tl", "timorleste", "tm", "turkmenistan", "tn", "tunisia", "to", "tonga", "tr", "turkey", "tt", "trinidad", "tv", "tuvalu", "tw", "taiwan", "tz", "tanzania", "ua", "ukraine", "ug", "uganda", "um", "us minor islands", "us", "america", "united states", "uy", "uruguay", "uz", "uzbekistan", "va", "vatican city", "vc", "saint vincent", "ve", "venezuela", "vg", "british virgin islands", "vi", "us virgin islands", "vn", "vietnam", "vu", "vanuatu", "gb wls", "wales", "wf", "wallis and futuna", "ws", "samoa", "ye", "yemen", "yt", "mayotte", "za", "south africa", "zm", "zambia", "zw", "zimbabwe"], ki = /* @__PURE__ */ function(e) {
  en(t, e);
  function t() {
    return e.apply(this, arguments) || this;
  }
  var n = t.prototype;
  return n.render = function() {
    var o = this.props, s = o.className, u = o.name, c = Ge(u, "flag", s), d = Ye(t, this.props), p = Xe(t, this.props);
    return /* @__PURE__ */ J.createElement(p, ue({}, d, {
      className: c
    }));
  }, t;
}(q_);
ki.handledProps = ["as", "className", "name"];
ki.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Additional classes. */
  className: l.string,
  /** Flag name, can use the two digit country code, the full name, or a common alias. */
  name: M1(j3)
} : {};
ki.defaultProps = {
  as: "i"
};
ki.create = Gt(ki, function(e) {
  return {
    name: e
  };
});
function Ql(e) {
  var t = e.className, n = Ge("divider", t), r = Ye(Ql, e), o = Xe(Ql, e);
  return /* @__PURE__ */ J.createElement(o, ue({}, r, {
    className: n
  }));
}
Ql.handledProps = ["as", "className"];
Ql.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Additional classes. */
  className: l.string
} : {};
var Ni = /* @__PURE__ */ function(e) {
  en(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handleClick = function(c) {
      Le(r.props, "onClick", c, r.props);
    }, r;
  }
  var n = t.prototype;
  return n.render = function() {
    var o = this.props, s = o.active, u = o.children, c = o.className, d = o.content, p = o.disabled, h = o.description, m = o.flag, g = o.icon, y = o.image, b = o.label, _ = o.selected, w = o.text, k = Ge(V(s, "active"), V(p, "disabled"), V(_, "selected"), "item", c), F = Tt(g) ? UM(u, "DropdownMenu") && "dropdown" : g, E = Ye(t, this.props), I = Xe(t, this.props), S = {
      role: "option",
      "aria-disabled": p,
      "aria-checked": s,
      "aria-selected": _
    };
    if (!dt(u))
      return /* @__PURE__ */ J.createElement(I, ue({}, E, S, {
        className: k,
        onClick: this.handleClick
      }), u);
    var P = ki.create(m, {
      autoGenerateKey: !1
    }), C = We.create(F, {
      autoGenerateKey: !1
    }), T = xr.create(y, {
      autoGenerateKey: !1
    }), A = cr.create(b, {
      autoGenerateKey: !1
    }), B = gh("span", function(ne) {
      return {
        children: ne
      };
    }, h, {
      defaultProps: {
        className: "description"
      },
      autoGenerateKey: !1
    }), H = gh("span", function(ne) {
      return {
        children: ne
      };
    }, dt(d) ? w : d, {
      defaultProps: {
        className: "text"
      },
      autoGenerateKey: !1
    });
    return /* @__PURE__ */ J.createElement(I, ue({}, E, S, {
      className: k,
      onClick: this.handleClick
    }), T, C, P, A, B, H);
  }, t;
}(Zn);
Ni.handledProps = ["active", "as", "children", "className", "content", "description", "disabled", "flag", "icon", "image", "label", "onClick", "selected", "text", "value"];
Ni.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Style as the currently chosen item. */
  active: l.bool,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: Nt,
  /** Additional text with less emphasis. */
  description: Ct,
  /** A dropdown item can be disabled. */
  disabled: l.bool,
  /** Shorthand for Flag. */
  flag: Ct,
  /** Shorthand for Icon. */
  icon: Ct,
  /** Shorthand for Image. */
  image: Ct,
  /** Shorthand for Label. */
  label: Ct,
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
  text: Nt,
  /** Stored value. */
  value: l.oneOfType([l.bool, l.number, l.string])
} : {};
Ni.create = Gt(Ni, function(e) {
  return e;
});
function jo(e) {
  var t = e.children, n = e.className, r = e.content, o = e.icon, s = Ge("header", n), u = Ye(jo, e), c = Xe(jo, e);
  return dt(t) ? /* @__PURE__ */ J.createElement(c, ue({}, u, {
    className: s
  }), We.create(o, {
    autoGenerateKey: !1
  }), r) : /* @__PURE__ */ J.createElement(c, ue({}, u, {
    className: s
  }), t);
}
jo.handledProps = ["as", "children", "className", "content", "icon"];
jo.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function) */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: Nt,
  /** Shorthand for Icon. */
  icon: Ct
} : {};
jo.create = Gt(jo, function(e) {
  return {
    content: e
  };
});
function Es(e) {
  var t = e.children, n = e.className, r = e.content, o = e.direction, s = e.open, u = e.scrolling, c = Ge(o, V(s, "visible"), V(u, "scrolling"), "menu transition", n), d = Ye(Es, e), p = Xe(Es, e);
  return /* @__PURE__ */ J.createElement(p, ue({}, d, {
    className: c
  }), dt(t) ? r : t);
}
Es.handledProps = ["as", "children", "className", "content", "direction", "open", "scrolling"];
Es.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: Nt,
  /** A dropdown menu can open to the left or to the right. */
  direction: l.oneOf(["left", "right"]),
  /** Whether or not the dropdown menu is displayed. */
  open: l.bool,
  /** A dropdown menu can scroll. */
  scrolling: l.bool
} : {};
var Ii = /* @__PURE__ */ function(e) {
  en(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handleChange = function(c) {
      var d = ba(c, "target.value");
      Le(r.props, "onChange", c, ue({}, r.props, {
        value: d
      }));
    }, r;
  }
  var n = t.prototype;
  return n.render = function() {
    var o = this.props, s = o.autoComplete, u = o.className, c = o.tabIndex, d = o.type, p = o.value, h = Ge("search", u), m = Ye(t, this.props);
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
}(Zn);
Ii.handledProps = ["as", "autoComplete", "className", "tabIndex", "type", "value"];
Ii.propTypes = process.env.NODE_ENV !== "production" ? {
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
Ii.defaultProps = {
  autoComplete: "off",
  type: "text"
};
Ii.create = Gt(Ii, function(e) {
  return {
    type: e
  };
});
function Wo(e) {
  var t = e.children, n = e.className, r = e.content, o = Ge("divider", n), s = Ye(Wo, e), u = Xe(Wo, e);
  return /* @__PURE__ */ J.createElement(u, ue({
    "aria-atomic": !0,
    "aria-live": "polite",
    role: "alert"
  }, s, {
    className: o
  }), dt(t) ? r : t);
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
  content: Nt
} : {};
Wo.create = Gt(Wo, function(e) {
  return {
    content: e
  };
});
var dw = /[\\^$.*+?()[\]{}|]/g, W3 = RegExp(dw.source);
function z3(e) {
  return e = Bi(e), e && W3.test(e) ? e.replace(dw, "\\$&") : e;
}
function cs(e) {
  var t = e.additionLabel, n = e.additionPosition, r = e.allowAdditions, o = e.deburr, s = e.multiple, u = e.options, c = e.search, d = e.searchQuery, p = e.value, h = u;
  if (s && (h = sh(h, function(_) {
    return !_a(p, _.value);
  })), c && d)
    if (bs(c))
      h = c(h, d);
    else {
      var m = o ? bh(d) : d, g = new RegExp(z3(m), "i");
      h = sh(h, function(_) {
        return g.test(o ? bh(_.text) : _.text);
      });
    }
  if (r && c && d && !Nl(h, {
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
cs.handledProps = [];
function s0(e) {
  var t = e.additionLabel, n = e.additionPosition, r = e.allowAdditions, o = e.deburr, s = e.multiple, u = e.options, c = e.search, d = e.searchQuery, p = e.selectedIndex, h = e.value, m = cs({
    value: h,
    options: u,
    searchQuery: d,
    additionLabel: t,
    additionPosition: n,
    allowAdditions: r,
    deburr: o,
    multiple: s,
    search: c
  }), g = xm(m, function(w, k, F) {
    return k.disabled || w.push(F), w;
  }, []), y;
  if (!p || p < 0) {
    var b = g[0];
    y = s ? b : ch(m, ["value", h]) || g[0];
  } else if (s)
    y = x1(g, function(w) {
      return w >= p;
    }), p >= m.length - 1 && (y = g[g.length - 1]);
  else {
    var _ = ch(m, ["value", h]);
    y = _a(g, _) ? _ : void 0;
  }
  return (!y || y < 0) && (y = g[0]), y;
}
var l0 = function(t, n) {
  return Tt(t) ? n : t;
}, c0 = function(t) {
  return t && t.map(function(n) {
    return Td(n, ["key", "value"]);
  });
};
function fw(e) {
  var t = e.flag, n = e.image, r = e.text;
  return bs(r) ? r : {
    content: /* @__PURE__ */ J.createElement(J.Fragment, null, ki.create(t), xr.create(n), r)
  };
}
var On = /* @__PURE__ */ function(e) {
  en(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.searchRef = /* @__PURE__ */ wr(), r.sizerRef = /* @__PURE__ */ wr(), r.ref = /* @__PURE__ */ wr(), r.handleChange = function(c, d) {
      Le(r.props, "onChange", c, ue({}, r.props, {
        value: d
      }));
    }, r.closeOnChange = function(c) {
      var d = r.props, p = d.closeOnChange, h = d.multiple, m = fs(p) ? !h : p;
      m && r.close(c, $1);
    }, r.closeOnEscape = function(c) {
      r.props.closeOnEscape && bn.getCode(c) === bn.Escape && (c.preventDefault(), r.close(c));
    }, r.moveSelectionOnKeyDown = function(c) {
      var d, p = r.props, h = p.multiple, m = p.selectOnNavigation, g = r.state.open;
      if (g) {
        var y = (d = {}, d[bn.ArrowDown] = 1, d[bn.ArrowUp] = -1, d), b = y[bn.getCode(c)];
        if (b !== void 0) {
          c.preventDefault();
          var _ = r.getSelectedIndexAfterMove(b);
          !h && m && r.makeSelectedItemActive(c, _), r.setState({
            selectedIndex: _
          });
        }
      }
    }, r.openOnSpace = function(c) {
      var d, p, h, m = r.state.focus && !r.state.open && bn.getCode(c) === bn.Spacebar, g = ((d = c.target) == null ? void 0 : d.tagName) !== "INPUT" && ((p = c.target) == null ? void 0 : p.tagName) !== "TEXTAREA" && ((h = c.target) == null ? void 0 : h.isContentEditable) !== !0;
      m && (g && c.preventDefault(), r.open(c));
    }, r.openOnArrow = function(c) {
      var d = r.state, p = d.focus, h = d.open;
      if (p && !h) {
        var m = bn.getCode(c);
        (m === bn.ArrowDown || m === bn.ArrowUp) && (c.preventDefault(), r.open(c));
      }
    }, r.makeSelectedItemActive = function(c, d) {
      var p = r.state, h = p.open, m = p.value, g = r.props.multiple, y = r.getSelectedItem(d), b = ba(y, "value"), _ = ba(y, "disabled");
      if (Tt(b) || !h || _)
        return m;
      var w = g ? i0(m, [b]) : b, k = g ? !!dh(w, m).length : w !== m;
      return k && (r.setState({
        value: w
      }), r.handleChange(c, w), y["data-additional"] && Le(r.props, "onAddItem", c, ue({}, r.props, {
        value: b
      }))), m;
    }, r.selectItemOnEnter = function(c) {
      var d = r.props.search, p = r.state, h = p.open, m = p.selectedIndex;
      if (h) {
        var g = bn.getCode(c) === bn.Enter || // https://github.com/Semantic-Org/Semantic-UI-React/pull/3766
        !d && bn.getCode(c) === bn.Spacebar;
        if (g) {
          c.preventDefault();
          var y = B3(cs({
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
              selectedIndex: s0({
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
            }), r.closeOnChange(c), r.clearSearchQuery(), d && Le(r.searchRef.current, "focus");
          }
        }
      }
    }, r.removeItemOnBackspace = function(c) {
      var d = r.props, p = d.multiple, h = d.search, m = r.state, g = m.searchQuery, y = m.value;
      if (bn.getCode(c) === bn.Backspace && !(g || !h || !p || yi(y))) {
        c.preventDefault();
        var b = x3(y);
        r.setState({
          value: b
        }), r.handleChange(c, b);
      }
    }, r.closeOnDocumentClick = function(c) {
      r.props.closeOnBlur && (r.ref.current && Io(r.ref.current, c) || r.close());
    }, r.handleMouseDown = function(c) {
      r.isMouseDown = !0, Le(r.props, "onMouseDown", c, r.props), document.addEventListener("mouseup", r.handleDocumentMouseUp);
    }, r.handleDocumentMouseUp = function() {
      r.isMouseDown = !1, document.removeEventListener("mouseup", r.handleDocumentMouseUp);
    }, r.handleClick = function(c) {
      var d = r.props, p = d.minCharacters, h = d.search, m = r.state, g = m.open, y = m.searchQuery;
      if (Le(r.props, "onClick", c, r.props), c.stopPropagation(), !h) return r.toggle(c);
      if (g) {
        Le(r.searchRef.current, "focus");
        return;
      }
      if (y.length >= p || p === 1) {
        r.open(c);
        return;
      }
      Le(r.searchRef.current, "focus");
    }, r.handleIconClick = function(c) {
      var d = r.props.clearable, p = r.hasValue();
      Le(r.props, "onClick", c, r.props), c.stopPropagation(), d && p ? r.clearValue(c) : r.toggle(c);
    }, r.handleItemClick = function(c, d) {
      var p = r.props, h = p.multiple, m = p.search, g = r.state.value, y = d.value;
      if (c.stopPropagation(), (h || d.disabled) && c.nativeEvent.stopImmediatePropagation(), !d.disabled) {
        var b = d["data-additional"], _ = h ? i0(r.state.value, [y]) : y, w = h ? !!dh(_, g).length : _ !== g;
        w && (r.setState({
          value: _
        }), r.handleChange(c, _)), r.clearSearchQuery(), Le(m ? r.searchRef.current : r.ref.current, "focus"), r.closeOnChange(c), b && Le(r.props, "onAddItem", c, ue({}, r.props, {
          value: y
        }));
      }
    }, r.handleFocus = function(c) {
      var d = r.state.focus;
      d || (Le(r.props, "onFocus", c, r.props), r.setState({
        focus: !0
      }));
    }, r.handleBlur = function(c) {
      var d = ba(c, "currentTarget");
      if (!(d && d.contains(document.activeElement))) {
        var p = r.props, h = p.closeOnBlur, m = p.multiple, g = p.selectOnBlur;
        r.isMouseDown || (Le(r.props, "onBlur", c, r.props), g && !m && (r.makeSelectedItemActive(c, r.state.selectedIndex), h && r.close()), r.setState({
          focus: !1
        }), r.clearSearchQuery());
      }
    }, r.handleSearchChange = function(c, d) {
      var p = d.value;
      c.stopPropagation();
      var h = r.props.minCharacters, m = r.state.open, g = p;
      if (Le(r.props, "onSearchChange", c, ue({}, r.props, {
        searchQuery: g
      })), r.setState({
        searchQuery: g,
        selectedIndex: 0
      }), !m && g.length >= h) {
        r.open();
        return;
      }
      m && h !== 1 && g.length < h && r.close();
    }, r.handleKeyDown = function(c) {
      r.moveSelectionOnKeyDown(c), r.openOnArrow(c), r.openOnSpace(c), r.selectItemOnEnter(c), Le(r.props, "onKeyDown", c);
    }, r.getSelectedItem = function(c) {
      var d = cs({
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
      return ba(d, "[" + c + "]");
    }, r.getItemByValue = function(c) {
      var d = r.props.options;
      return x1(d, {
        value: c
      });
    }, r.getDropdownAriaOptions = function() {
      var c = r.props, d = c.loading, p = c.disabled, h = c.search, m = c.multiple, g = r.state.open, y = {
        role: h ? "combobox" : "listbox",
        "aria-busy": d,
        "aria-disabled": p,
        "aria-expanded": !!g
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
      }), Le(r.props, "onLabelClick", c, d);
    }, r.handleLabelRemove = function(c, d) {
      c.stopPropagation();
      var p = r.state.value, h = ta(p, d.value);
      r.setState({
        value: h
      }), r.handleChange(c, h);
    }, r.getSelectedIndexAfterMove = function(c, d) {
      d === void 0 && (d = r.state.selectedIndex);
      var p = cs({
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
      if (!(p === void 0 || w3(p, "disabled"))) {
        var h = p.length - 1, m = r.props.wrapSelection, g = d + c;
        return !m && (g > h || g < 0) ? g = d : g > h ? g = 0 : g < 0 && (g = h), p[g].disabled ? r.getSelectedIndexAfterMove(c, g) : g;
      }
    }, r.handleIconOverrides = function(c) {
      var d = r.props.clearable, p = Ge(d && r.hasValue() && "clear", c.className);
      return {
        className: p,
        onClick: function(m) {
          Le(c, "onClick", m, c), r.handleIconClick(m);
        }
      };
    }, r.clearValue = function(c) {
      var d = r.props.multiple, p = d ? [] : "";
      r.setState({
        value: p
      }), r.handleChange(c, p);
    }, r.computeSearchInputTabIndex = function() {
      var c = r.props, d = c.disabled, p = c.tabIndex;
      return Tt(p) ? d ? -1 : 0 : p;
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
        return d ? -1 : Tt(h) ? 0 : h;
    }, r.handleSearchInputOverrides = function(c) {
      return {
        onChange: function(p, h) {
          Le(c, "onChange", p, h), r.handleSearchChange(p, h);
        }
      };
    }, r.hasValue = function() {
      var c = r.props.multiple, d = r.state.value;
      return c ? !yi(d) : !Tt(d) && d !== "";
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
          var d = r.ref.current.getBoundingClientRect(), p = c.clientHeight, h = document.documentElement.clientHeight - d.top - d.height - p, m = d.top - p, g = h < 0 && m > h;
          !g != !r.state.upward && r.setState({
            upward: g
          });
        }
      }
    }, r.open = function(c, d) {
      c === void 0 && (c = null), d === void 0 && (d = !0);
      var p = r.props, h = p.disabled, m = p.search;
      h || (m && Le(r.searchRef.current, "focus"), Le(r.props, "onOpen", c, r.props), d && r.setState({
        open: !0
      }), r.scrollSelectedItemIntoView());
    }, r.close = function(c, d) {
      d === void 0 && (d = r.handleClose), r.state.open && (Le(r.props, "onClose", c, r.props), r.setState({
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
      var c = r.props, d = c.multiple, p = c.placeholder, h = c.search, m = c.text, g = r.state, y = g.searchQuery, b = g.selectedIndex, _ = g.value, w = g.open, k = r.hasValue(), F = Ge(p && !k && "default", "text", h && y && "filtered"), E = p, I;
      return m ? E = m : w && !d ? I = r.getSelectedItem(b) : k && (I = r.getItemByValue(_)), Wo.create(I ? fw(I) : E, {
        defaultProps: {
          className: F
        }
      });
    }, r.renderSearchInput = function() {
      var c = r.props, d = c.search, p = c.searchInput, h = r.state.searchQuery;
      return d && /* @__PURE__ */ J.createElement(lr, {
        innerRef: r.searchRef
      }, Ii.create(p, {
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
      var c = r.props, d = c.multiple, p = c.renderLabel, h = r.state, m = h.selectedLabel, g = h.value;
      if (!(!d || yi(g))) {
        var y = xn(g, r.getItemByValue);
        return xn(y3(y), function(b, _) {
          var w = {
            active: b.value === m,
            as: "a",
            key: l0(b.key, b.value),
            onClick: r.handleLabelClick,
            onRemove: r.handleLabelRemove,
            value: b.value
          };
          return cr.create(p(b, _, w), {
            defaultProps: w
          });
        });
      }
    }, r.renderOptions = function() {
      var c = r.props, d = c.lazyLoad, p = c.multiple, h = c.search, m = c.noResultsMessage, g = r.state, y = g.open, b = g.selectedIndex, _ = g.value;
      if (d && !y) return null;
      var w = cs({
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
      if (m !== null && h && yi(w))
        return /* @__PURE__ */ J.createElement("div", {
          className: "message"
        }, m);
      var k = p ? function(F) {
        return _a(_, F);
      } : function(F) {
        return F === _;
      };
      return xn(w, function(F, E) {
        return Ni.create(ue({
          active: k(F.value),
          selected: b === E
        }, F, {
          key: l0(F.key, F.value),
          // Needed for handling click events on disabled items
          style: ue({}, F.style, {
            pointerEvents: "all"
          })
        }), {
          generateKey: !1,
          overrideProps: function(S) {
            return {
              onClick: function(C, T) {
                S.onClick == null || S.onClick(C, T), r.handleItemClick(C, T);
              }
            };
          }
        });
      });
    }, r.renderMenu = function() {
      var c = r.props, d = c.children, p = c.direction, h = c.header, m = r.state.open, g = r.getDropdownMenuAriaOptions();
      if (!dt(d)) {
        var y = lm.only(d), b = Ge(p, V(m, "visible"), y.props.className);
        return /* @__PURE__ */ V_(y, ue({
          className: b
        }, g));
      }
      return /* @__PURE__ */ J.createElement(Es, ue({}, g, {
        direction: p,
        open: m
      }), jo.create(h, {
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
      !Il(u.__value, s.value) || // On option keys/values, we only check those properties to avoid recursive performance impacts.
      // https://github.com/Semantic-Org/Semantic-UI-React/issues/3000
      !uF(c0(o.options), c0(u.__options))
    );
    return d && (c.selectedIndex = s0({
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
    return !Il(o, this.props) || !Il(s, this.state);
  }, n.componentDidUpdate = function(o, s) {
    var u = this.props, c = u.closeOnBlur, d = u.minCharacters, p = u.openOnFocus, h = u.search;
    if (process.env.NODE_ENV !== "production") {
      var m = Array.isArray(this.props.value), g = rh(this.props, "value");
      g && this.props.multiple && !m ? console.error("Dropdown `value` must be an array when `multiple` is set." + (" Received type: `" + Object.prototype.toString.call(this.props.value) + "`.")) : g && !this.props.multiple && m && console.error("Dropdown `value` must not be an array when `multiple` is not set. Either set `multiple={true}` or use a string or number value.");
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
    var o = this.props, s = o.basic, u = o.button, c = o.className, d = o.compact, p = o.disabled, h = o.error, m = o.fluid, g = o.floating, y = o.icon, b = o.inline, _ = o.item, w = o.labeled, k = o.loading, F = o.multiple, E = o.pointing, I = o.search, S = o.selection, P = o.scrolling, C = o.simple, T = o.trigger, A = this.state, B = A.focus, H = A.open, ne = A.upward, U = Ge(
      "ui",
      V(H, "active visible"),
      V(p, "disabled"),
      V(h, "error"),
      V(k, "loading"),
      V(s, "basic"),
      V(u, "button"),
      V(d, "compact"),
      V(m, "fluid"),
      V(g, "floating"),
      V(b, "inline"),
      // TODO: consider augmentation to render Dropdowns as Button/Menu, solves icon/link item issues
      // https://github.com/Semantic-Org/Semantic-UI-React/issues/401#issuecomment-240487229
      // TODO: the icon class is only required when a dropdown is a button
      // useKeyOnly(icon, 'icon'),
      V(w, "labeled"),
      V(_, "item"),
      V(F, "multiple"),
      V(I, "search"),
      V(S, "selection"),
      V(C, "simple"),
      V(P, "scrolling"),
      V(ne, "upward"),
      rn(E, "pointing"),
      "dropdown",
      c
    ), re = Ye(t, this.props), he = Xe(t, this.props), ge = this.getDropdownAriaOptions(he, this.props);
    return /* @__PURE__ */ J.createElement(lr, {
      innerRef: this.ref
    }, /* @__PURE__ */ J.createElement(he, ue({}, re, ge, {
      className: U,
      onBlur: this.handleBlur,
      onClick: this.handleClick,
      onKeyDown: this.handleKeyDown,
      onMouseDown: this.handleMouseDown,
      onFocus: this.handleFocus,
      onChange: this.handleChange,
      tabIndex: this.computeTabIndex()
    }), this.renderLabels(), this.renderSearchInput(), this.renderSearchSizer(), T || this.renderText(), We.create(y, {
      overrideProps: this.handleIconOverrides,
      autoGenerateKey: !1
    }), this.renderMenu(), H && /* @__PURE__ */ J.createElement(Ya, {
      name: "keydown",
      on: this.closeOnEscape
    }), H && /* @__PURE__ */ J.createElement(Ya, {
      name: "click",
      on: this.closeOnDocumentClick
    }), B && /* @__PURE__ */ J.createElement(Ya, {
      name: "keydown",
      on: this.removeItemOnBackspace
    })));
  }, t;
}(Us);
On.handledProps = ["additionLabel", "additionPosition", "allowAdditions", "as", "basic", "button", "children", "className", "clearable", "closeOnBlur", "closeOnChange", "closeOnEscape", "compact", "deburr", "defaultOpen", "defaultSearchQuery", "defaultSelectedLabel", "defaultUpward", "defaultValue", "direction", "disabled", "error", "floating", "fluid", "header", "icon", "inline", "item", "labeled", "lazyLoad", "loading", "minCharacters", "multiple", "noResultsMessage", "onAddItem", "onBlur", "onChange", "onClick", "onClose", "onFocus", "onLabelClick", "onMouseDown", "onOpen", "onSearchChange", "open", "openOnFocus", "options", "placeholder", "pointing", "renderLabel", "scrolling", "search", "searchInput", "searchQuery", "selectOnBlur", "selectOnNavigation", "selectedLabel", "selection", "simple", "tabIndex", "text", "trigger", "upward", "value", "wrapSelection"];
On.propTypes = process.env.NODE_ENV !== "production" ? {
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
  allowAdditions: Mt([Po(["options", "selection", "search"]), l.bool]),
  /** A Dropdown can reduce its complexity. */
  basic: l.bool,
  /** Format the Dropdown to appear as a button. */
  button: l.bool,
  /** Primary content. */
  children: Mt([Yt(["options", "selection"]), D1({
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
  defaultSelectedLabel: Mt([Po(["multiple"]), l.oneOfType([l.number, l.string])]),
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
  options: Mt([Yt(["children"]), l.arrayOf(l.shape(Ni.propTypes))]),
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
  selectedLabel: Mt([Po(["multiple"]), l.oneOfType([l.string, l.number])]),
  /** A dropdown can be used to select between choices in a form. */
  selection: Mt([Yt(["children"]), Po(["options"]), l.bool]),
  /** A simple dropdown can open without Javascript. */
  simple: l.bool,
  /** A dropdown can receive focus. */
  tabIndex: l.oneOfType([l.number, l.string]),
  /** The text displayed in the dropdown, usually for the active item. */
  text: l.string,
  /** Custom element to trigger the menu to become visible. Takes place of 'text'. */
  trigger: Mt([Yt(["selection", "text"]), l.node]),
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
On.defaultProps = {
  additionLabel: "Add ",
  additionPosition: "top",
  closeOnBlur: !0,
  closeOnEscape: !0,
  deburr: !1,
  icon: "dropdown",
  minCharacters: 1,
  noResultsMessage: "No results found.",
  openOnFocus: !0,
  renderLabel: fw,
  searchInput: "text",
  selectOnBlur: !0,
  selectOnNavigation: !0,
  wrapSelection: !0
};
On.autoControlledProps = ["open", "searchQuery", "selectedLabel", "value", "upward"];
On.Divider = Ql;
On.Header = jo;
On.Item = Ni;
On.Menu = Es;
On.SearchInput = Ii;
On.Text = Wo;
function Wr(e) {
  return /* @__PURE__ */ J.createElement(On, ue({}, e, {
    selection: !0
  }));
}
Wr.handledProps = ["options"];
Wr.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Array of Dropdown.Item props e.g. `{ text: '', value: '' }` */
  options: l.arrayOf(l.shape(On.Item.propTypes)).isRequired
} : {};
Wr.Divider = On.Divider;
Wr.Header = On.Header;
Wr.Item = On.Item;
Wr.Menu = On.Menu;
var Id = /* @__PURE__ */ function(e) {
  en(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.ref = /* @__PURE__ */ wr(), r.focus = function() {
      return r.ref.current.focus();
    }, r.handleChange = function(c) {
      var d = ba(c, "target.value");
      Le(r.props, "onChange", c, ue({}, r.props, {
        value: d
      }));
    }, r.handleInput = function(c) {
      var d = ba(c, "target.value");
      Le(r.props, "onInput", c, ue({}, r.props, {
        value: d
      }));
    }, r;
  }
  var n = t.prototype;
  return n.render = function() {
    var o = this.props, s = o.rows, u = o.value, c = Ye(t, this.props), d = Xe(t, this.props);
    return /* @__PURE__ */ J.createElement(lr, {
      innerRef: this.ref
    }, /* @__PURE__ */ J.createElement(d, ue({}, c, {
      onChange: this.handleChange,
      onInput: this.handleInput,
      rows: s,
      value: u
    })));
  }, t;
}(Zn);
Id.handledProps = ["as", "onChange", "onInput", "rows", "value"];
Id.propTypes = process.env.NODE_ENV !== "production" ? {
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
Id.defaultProps = {
  as: "textarea",
  rows: 3
};
function Cn(e) {
  var t = e.children, n = e.className, r = e.content, o = e.control, s = e.disabled, u = e.error, c = e.inline, d = e.label, p = e.required, h = e.type, m = e.width, g = e.id, y = Ge(V(s, "disabled"), V(u, "error"), V(c, "inline"), V(p, "required"), qn(m, "wide"), "field", n), b = Ye(Cn, e), _ = Xe(Cn, e), w = ba(u, "pointing", "above"), k = cr.create(u, {
    autoGenerateKey: !1,
    defaultProps: {
      prompt: !0,
      pointing: w,
      id: g ? g + "-error-message" : void 0,
      role: "alert",
      "aria-atomic": !0
    }
  }), F = (w === "below" || w === "right") && k, E = (w === "above" || w === "left") && k;
  if (Tt(o))
    return Tt(d) ? /* @__PURE__ */ J.createElement(_, ue({}, b, {
      className: y,
      id: g
    }), dt(t) ? r : t) : /* @__PURE__ */ J.createElement(_, ue({}, b, {
      className: y,
      id: g
    }), F, vh(d, {
      autoGenerateKey: !1
    }), E);
  var I = g && u ? g + "-error-message" : null, S = {
    "aria-describedby": I,
    "aria-invalid": u ? !0 : void 0
  }, P = ue({}, b, {
    content: r,
    children: t,
    disabled: s,
    required: p,
    type: h,
    id: g
  });
  return o === "input" && (h === "checkbox" || h === "radio") ? /* @__PURE__ */ J.createElement(_, {
    className: y
  }, /* @__PURE__ */ J.createElement("label", null, F, /* @__PURE__ */ gp(o, ue({}, S, P)), " ", d, E)) : o === Kn || o === Bo ? /* @__PURE__ */ J.createElement(_, {
    className: y
  }, F, /* @__PURE__ */ gp(o, ue({}, S, P, {
    label: d
  })), E) : /* @__PURE__ */ J.createElement(_, {
    className: y
  }, vh(d, {
    defaultProps: {
      htmlFor: g
    },
    autoGenerateKey: !1
  }), F, /* @__PURE__ */ gp(o, ue({}, S, P)), E);
}
Cn.handledProps = ["as", "children", "className", "content", "control", "disabled", "error", "id", "inline", "label", "required", "type", "width"];
Cn.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: Nt,
  /**
   * A form control component (i.e. Dropdown) or HTML tagName (i.e. 'input').
   * Extra FormField props are passed to the control component.
   * Mutually exclusive with children.
   */
  control: l.oneOfType([l.elementType, l.oneOf(["button", "input", "select", "textarea"])]),
  /** Individual fields may be disabled. */
  disabled: l.bool,
  /** Individual fields may display an error state along with a message. */
  error: l.oneOfType([l.bool, Ct]),
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
  type: Mt([
    Po(["control"])
    // don't strictly validate HTML types
    // a control might be passed that uses a `type` prop with unknown values
    // let the control validate if for us
  ]),
  /** A field can specify its width in grid columns */
  width: l.oneOf(or)
} : {};
function Cs(e) {
  var t = e.control, n = Ye(Cs, e), r = Xe(Cs, e);
  return /* @__PURE__ */ J.createElement(r, ue({}, n, {
    control: t
  }));
}
Cs.handledProps = ["as", "control"];
Cs.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** A FormField control prop. */
  control: Cn.propTypes.control
} : {};
Cs.defaultProps = {
  as: Cn,
  control: gt
};
function Os(e) {
  var t = e.control, n = Ye(Os, e), r = Xe(Os, e);
  return /* @__PURE__ */ J.createElement(r, ue({}, n, {
    control: t
  }));
}
Os.handledProps = ["as", "control"];
Os.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** A FormField control prop. */
  control: Cn.propTypes.control
} : {};
Os.defaultProps = {
  as: Cn,
  control: Kn
};
function Ss(e) {
  var t = e.control, n = Ye(Ss, e), r = Xe(Ss, e);
  return /* @__PURE__ */ J.createElement(r, ue({}, n, {
    control: t
  }));
}
Ss.handledProps = ["as", "control"];
Ss.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** A FormField control prop. */
  control: Cn.propTypes.control
} : {};
Ss.defaultProps = {
  as: Cn,
  control: On
};
function Jl(e) {
  var t = e.children, n = e.className, r = e.grouped, o = e.inline, s = e.unstackable, u = e.widths, c = Ge(V(r, "grouped"), V(o, "inline"), V(s, "unstackable"), qn(u, null, !0), "fields", n), d = Ye(Jl, e), p = Xe(Jl, e);
  return /* @__PURE__ */ J.createElement(p, ue({}, d, {
    className: c
  }), t);
}
Jl.handledProps = ["as", "children", "className", "grouped", "inline", "unstackable", "widths"];
Jl.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Fields can show related choices. */
  grouped: Mt([Yt(["inline"]), l.bool]),
  /** Multiple fields may be inline in a row. */
  inline: Mt([Yt(["grouped"]), l.bool]),
  /** A form group can prevent itself from stacking on mobile. */
  unstackable: l.bool,
  /** Fields Groups can specify their width in grid columns or automatically divide fields to be equal width. */
  widths: l.oneOf([].concat(or, ["equal"]))
} : {};
var Ts = /* @__PURE__ */ function(e) {
  en(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.inputRef = /* @__PURE__ */ wr(), r.computeIcon = function() {
      var c = r.props, d = c.loading, p = c.icon;
      if (!Tt(p)) return p;
      if (d) return "spinner";
    }, r.computeTabIndex = function() {
      var c = r.props, d = c.disabled, p = c.tabIndex;
      if (!Tt(p)) return p;
      if (d) return -1;
    }, r.focus = function(c) {
      return r.inputRef.current.focus(c);
    }, r.select = function() {
      return r.inputRef.current.select();
    }, r.handleChange = function(c) {
      var d = ba(c, "target.value");
      Le(r.props, "onChange", c, ue({}, r.props, {
        value: d
      }));
    }, r.handleChildOverrides = function(c, d) {
      return ue({}, d, c.props, {
        ref: function(h) {
          ya(c.ref, h), r.inputRef.current = h;
        }
      });
    }, r.partitionProps = function() {
      var c = r.props, d = c.disabled, p = c.type, h = r.computeTabIndex(), m = Ye(t, r.props), g = wm(m), y = g[0], b = g[1];
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
    var o = this, s = this.props, u = s.action, c = s.actionPosition, d = s.children, p = s.className, h = s.disabled, m = s.error, g = s.fluid, y = s.focus, b = s.icon, _ = s.iconPosition, w = s.input, k = s.inverted, F = s.label, E = s.labelPosition, I = s.loading, S = s.size, P = s.transparent, C = s.type, T = Ge("ui", S, V(h, "disabled"), V(m, "error"), V(g, "fluid"), V(y, "focus"), V(k, "inverted"), V(I, "loading"), V(P, "transparent"), Gn(c, "action") || V(u, "action"), Gn(_, "icon") || V(b || I, "icon"), Gn(E, "labeled") || V(F, "labeled"), "input", p), A = Xe(t, this.props), B = this.partitionProps(), H = B[0], ne = B[1];
    if (!dt(d)) {
      var U = xn(lm.toArray(d), function(ge) {
        return ge.type !== "input" ? ge : /* @__PURE__ */ V_(ge, o.handleChildOverrides(ge, H));
      });
      return /* @__PURE__ */ J.createElement(A, ue({}, ne, {
        className: T
      }), U);
    }
    var re = gt.create(u, {
      autoGenerateKey: !1
    }), he = cr.create(F, {
      defaultProps: {
        className: Ge(
          "label",
          // add 'left|right corner'
          _a(E, "corner") && E
        )
      },
      autoGenerateKey: !1
    });
    return /* @__PURE__ */ J.createElement(A, ue({}, ne, {
      className: T
    }), c === "left" && re, E !== "right" && he, eL(w || C, {
      defaultProps: H,
      autoGenerateKey: !1
    }), We.create(this.computeIcon(), {
      autoGenerateKey: !1
    }), c !== "left" && re, E === "right" && he);
  }, t;
}(Zn);
Ts.handledProps = ["action", "actionPosition", "as", "children", "className", "disabled", "error", "fluid", "focus", "icon", "iconPosition", "input", "inverted", "label", "labelPosition", "loading", "onChange", "size", "tabIndex", "transparent", "type"];
Ts.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** An Input can be formatted to alert the user to an action they may perform. */
  action: l.oneOfType([l.bool, Ct]),
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
  icon: l.oneOfType([l.bool, Ct]),
  /** An Icon can appear inside an Input on the left or right. */
  iconPosition: l.oneOf(["left"]),
  /** Shorthand for creating the HTML Input. */
  input: Ct,
  /** Format to appear on dark backgrounds. */
  inverted: l.bool,
  /** Optional Label to display along side the Input. */
  label: Ct,
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
Ts.defaultProps = {
  type: "text"
};
Ts.create = Gt(Ts, function(e) {
  return {
    type: e
  };
});
function Ps(e) {
  var t = e.control, n = Ye(Ps, e), r = Xe(Ps, e);
  return /* @__PURE__ */ J.createElement(r, ue({}, n, {
    control: t
  }));
}
Ps.handledProps = ["as", "control"];
Ps.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** A FormField control prop. */
  control: Cn.propTypes.control
} : {};
Ps.defaultProps = {
  as: Cn,
  control: Ts
};
function ks(e) {
  var t = e.control, n = Ye(ks, e), r = Xe(ks, e);
  return /* @__PURE__ */ J.createElement(r, ue({}, n, {
    control: t
  }));
}
ks.handledProps = ["as", "control"];
ks.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** A FormField control prop. */
  control: Cn.propTypes.control
} : {};
ks.defaultProps = {
  as: Cn,
  control: Bo
};
function Ns(e) {
  var t = e.control, n = e.options, r = Ye(Ns, e), o = Xe(Ns, e);
  return /* @__PURE__ */ J.createElement(o, ue({}, r, {
    control: t,
    options: n
  }));
}
Ns.handledProps = ["as", "control", "options"];
Ns.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** A FormField control prop. */
  control: Cn.propTypes.control,
  /** Array of Dropdown.Item props e.g. `{ text: '', value: '' }` */
  options: l.arrayOf(l.shape(On.Item.propTypes)).isRequired
} : {};
Ns.defaultProps = {
  as: Cn,
  control: Wr
};
function Is(e) {
  var t = e.control, n = Ye(Is, e), r = Xe(Is, e);
  return /* @__PURE__ */ J.createElement(r, ue({}, n, {
    control: t
  }));
}
Is.handledProps = ["as", "control"];
Is.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** A FormField control prop. */
  control: Cn.propTypes.control
} : {};
Is.defaultProps = {
  as: Cn,
  control: Id
};
var Mn = /* @__PURE__ */ function(e) {
  en(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handleSubmit = function(c) {
      var d = r.props.action;
      typeof d != "string" && Le(c, "preventDefault");
      for (var p = arguments.length, h = new Array(p > 1 ? p - 1 : 0), m = 1; m < p; m++)
        h[m - 1] = arguments[m];
      Le.apply(void 0, [r.props, "onSubmit", c, r.props].concat(h));
    }, r;
  }
  var n = t.prototype;
  return n.render = function() {
    var o = this.props, s = o.action, u = o.children, c = o.className, d = o.error, p = o.inverted, h = o.loading, m = o.reply, g = o.size, y = o.success, b = o.unstackable, _ = o.warning, w = o.widths, k = Ge("ui", g, V(d, "error"), V(p, "inverted"), V(h, "loading"), V(m, "reply"), V(y, "success"), V(b, "unstackable"), V(_, "warning"), qn(w, null, !0), "form", c), F = Ye(t, this.props), E = Xe(t, this.props);
    return /* @__PURE__ */ J.createElement(E, ue({}, F, {
      action: s,
      className: k,
      onSubmit: this.handleSubmit
    }), u);
  }, t;
}(Zn);
Mn.handledProps = ["action", "as", "children", "className", "error", "inverted", "loading", "onSubmit", "reply", "size", "success", "unstackable", "warning", "widths"];
Mn.propTypes = process.env.NODE_ENV !== "production" ? {
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
  size: l.oneOf(ta(dr, "medium")),
  /** Automatically show any success Message children. */
  success: l.bool,
  /** A form can prevent itself from stacking on mobile. */
  unstackable: l.bool,
  /** Automatically show any warning Message children. */
  warning: l.bool,
  /** Forms can automatically divide fields to be equal width. */
  widths: l.oneOf(["equal"])
} : {};
Mn.defaultProps = {
  as: "form"
};
Mn.Field = Cn;
Mn.Button = Cs;
Mn.Checkbox = Os;
Mn.Dropdown = Ss;
Mn.Group = Jl;
Mn.Input = Ps;
Mn.Radio = ks;
Mn.Select = Ns;
Mn.TextArea = Is;
function Qa(e) {
  var t = e.children, n = e.className, r = e.computer, o = e.color, s = e.floated, u = e.largeScreen, c = e.mobile, d = e.only, p = e.stretched, h = e.tablet, m = e.textAlign, g = e.verticalAlign, y = e.widescreen, b = e.width, _ = Ge(o, V(p, "stretched"), Zu(d, "only"), ji(m), Gn(s, "floated"), Jo(g), qn(r, "wide computer"), qn(u, "wide large screen"), qn(c, "wide mobile"), qn(h, "wide tablet"), qn(y, "wide widescreen"), qn(b, "wide"), "column", n), w = Ye(Qa, e), k = Xe(Qa, e);
  return /* @__PURE__ */ J.createElement(k, ue({}, w, {
    className: _
  }), t);
}
Qa.handledProps = ["as", "children", "className", "color", "computer", "floated", "largeScreen", "mobile", "only", "stretched", "tablet", "textAlign", "verticalAlign", "widescreen", "width"];
Qa.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** A grid column can be colored. */
  color: l.oneOf(oa),
  /** A column can specify a width for a computer. */
  computer: Mt([Yt(["width"]), l.oneOf(or)]),
  /** A column can sit flush against the left or right edge of a row. */
  floated: l.oneOf(_c),
  /** A column can specify a width for a large screen device. */
  largeScreen: Mt([Yt(["width"]), l.oneOf(or)]),
  /** A column can specify a width for a mobile device. */
  mobile: Mt([Yt(["width"]), l.oneOf(or)]),
  /** A column can appear only for a specific device, or screen sizes. */
  only: Xu(H1),
  /** A column can stretch its contents to take up the entire grid or row height. */
  stretched: l.bool,
  /** A column can specify a width for a tablet device. */
  tablet: Mt([Yt(["width"]), l.oneOf(or)]),
  /** A column can specify its text alignment. */
  textAlign: l.oneOf(Wi),
  /** A column can specify its vertical alignment to have all its columns vertically centered. */
  verticalAlign: l.oneOf(zi),
  /** A column can specify a width for a wide screen device. */
  widescreen: Mt([Yt(["width"]), l.oneOf(or)]),
  /** Represents width of column. */
  width: Mt([Yt(["computer", "largeScreen", "mobile", "tablet", "widescreen"]), l.oneOf(or)])
} : {};
Qa.create = Gt(Qa, function(e) {
  return {
    children: e
  };
});
function ec(e) {
  var t = e.centered, n = e.children, r = e.className, o = e.color, s = e.columns, u = e.divided, c = e.only, d = e.reversed, p = e.stretched, h = e.textAlign, m = e.verticalAlign, g = Ge(o, V(t, "centered"), V(u, "divided"), V(p, "stretched"), Zu(c, "only"), Zu(d, "reversed"), ji(h), Jo(m), qn(s, "column", !0), "row", r), y = Ye(ec, e), b = Xe(ec, e);
  return /* @__PURE__ */ J.createElement(b, ue({}, y, {
    className: g
  }), n);
}
ec.handledProps = ["as", "centered", "children", "className", "color", "columns", "divided", "only", "reversed", "stretched", "textAlign", "verticalAlign"];
ec.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** A row can have its columns centered. */
  centered: l.bool,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** A grid row can be colored. */
  color: l.oneOf(oa),
  /** Represents column count per line in Row. */
  columns: l.oneOf([].concat(or, ["equal"])),
  /** A row can have dividers between its columns. */
  divided: l.bool,
  /** A row can appear only for a specific device, or screen sizes. */
  only: Xu(H1),
  /** A row can specify that its columns should reverse order at different device sizes. */
  reversed: Xu(["computer", "computer vertically", "mobile", "mobile vertically", "tablet", "tablet vertically"]),
  /** A row can stretch its contents to take up the entire column height. */
  stretched: l.bool,
  /** A row can specify its text alignment. */
  textAlign: l.oneOf(Wi),
  /** A row can specify its vertical alignment to have all its columns vertically centered. */
  verticalAlign: l.oneOf(zi)
} : {};
function Ai(e) {
  var t = e.celled, n = e.centered, r = e.children, o = e.className, s = e.columns, u = e.container, c = e.divided, d = e.doubling, p = e.inverted, h = e.padded, m = e.relaxed, g = e.reversed, y = e.stackable, b = e.stretched, _ = e.textAlign, w = e.verticalAlign, k = Ge("ui", V(n, "centered"), V(u, "container"), V(d, "doubling"), V(p, "inverted"), V(y, "stackable"), V(b, "stretched"), rn(t, "celled"), rn(c, "divided"), rn(h, "padded"), rn(m, "relaxed"), Zu(g, "reversed"), ji(_), Jo(w), qn(s, "column", !0), "grid", o), F = Ye(Ai, e), E = Xe(Ai, e);
  return /* @__PURE__ */ J.createElement(E, ue({}, F, {
    className: k
  }), r);
}
Ai.handledProps = ["as", "celled", "centered", "children", "className", "columns", "container", "divided", "doubling", "inverted", "padded", "relaxed", "reversed", "stackable", "stretched", "textAlign", "verticalAlign"];
Ai.Column = Qa;
Ai.Row = ec;
Ai.propTypes = process.env.NODE_ENV !== "production" ? {
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
  columns: l.oneOf([].concat(or, ["equal"])),
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
  reversed: Xu(["computer", "computer vertically", "mobile", "mobile vertically", "tablet", "tablet vertically"]),
  /** A grid can have its columns stack on-top of each other after reaching mobile breakpoints. */
  stackable: l.bool,
  /** A grid can stretch its contents to take up the entire grid height. */
  stretched: l.bool,
  /** A grid can specify its text alignment. */
  textAlign: l.oneOf(Wi),
  /** A grid can specify its vertical alignment to have all its columns vertically centered. */
  verticalAlign: l.oneOf(zi)
} : {};
function Ri(e) {
  var t = e.children, n = e.className, r = Ge(n), o = Ye(Ri, e), s = Xe(Ri, e);
  return /* @__PURE__ */ J.createElement(s, ue({}, o, {
    className: r
  }), t);
}
Ri.handledProps = ["as", "children", "className"];
Ri.defaultProps = {
  as: "tbody"
};
Ri.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string
} : {};
function Sa(e) {
  var t = e.active, n = e.children, r = e.className, o = e.collapsing, s = e.content, u = e.disabled, c = e.error, d = e.icon, p = e.negative, h = e.positive, m = e.selectable, g = e.singleLine, y = e.textAlign, b = e.verticalAlign, _ = e.warning, w = e.width, k = Ge(V(t, "active"), V(o, "collapsing"), V(u, "disabled"), V(c, "error"), V(p, "negative"), V(h, "positive"), V(m, "selectable"), V(g, "single line"), V(_, "warning"), ji(y), Jo(b), qn(w, "wide"), r), F = Ye(Sa, e), E = Xe(Sa, e);
  return dt(n) ? /* @__PURE__ */ J.createElement(E, ue({}, F, {
    className: k
  }), We.create(d), s) : /* @__PURE__ */ J.createElement(E, ue({}, F, {
    className: k
  }), n);
}
Sa.handledProps = ["active", "as", "children", "className", "collapsing", "content", "disabled", "error", "icon", "negative", "positive", "selectable", "singleLine", "textAlign", "verticalAlign", "warning", "width"];
Sa.defaultProps = {
  as: "td"
};
Sa.propTypes = process.env.NODE_ENV !== "production" ? {
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
  content: Nt,
  /** A cell can be disabled. */
  disabled: l.bool,
  /** A cell may call attention to an error or a negative value. */
  error: l.bool,
  /** Add an Icon by name, props object, or pass an <Icon /> */
  icon: Ct,
  /** A cell may let a user know whether a value is bad. */
  negative: l.bool,
  /** A cell may let a user know whether a value is good. */
  positive: l.bool,
  /** A cell can be selectable. */
  selectable: l.bool,
  /** A cell can specify that its contents should remain on a single line and not wrap. */
  singleLine: l.bool,
  /** A table cell can adjust its text alignment. */
  textAlign: l.oneOf(ta(Wi, "justified")),
  /** A table cell can adjust its text alignment. */
  verticalAlign: l.oneOf(zi),
  /** A cell may warn a user. */
  warning: l.bool,
  /** A table can specify the width of individual columns independently. */
  width: l.oneOf(or)
} : {};
Sa.create = Gt(Sa, function(e) {
  return {
    content: e
  };
});
function zo(e) {
  var t = e.children, n = e.className, r = e.content, o = e.fullWidth, s = Ge(V(o, "full-width"), n), u = Ye(zo, e), c = Xe(zo, e);
  return /* @__PURE__ */ J.createElement(c, ue({}, u, {
    className: s
  }), dt(t) ? r : t);
}
zo.handledProps = ["as", "children", "className", "content", "fullWidth"];
zo.defaultProps = {
  as: "thead"
};
zo.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: Nt,
  /** A definition table can have a full width header or footer, filling in the gap left by the first column. */
  fullWidth: l.bool
} : {};
function Ys(e) {
  var t = e.as, n = Ye(Ys, e);
  return /* @__PURE__ */ J.createElement(zo, ue({}, n, {
    as: t
  }));
}
Ys.handledProps = ["as"];
Ys.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType
} : {};
Ys.defaultProps = {
  as: "tfoot"
};
function wc(e) {
  var t = e.as, n = e.className, r = e.sorted, o = Ge(Gn(r, "sorted"), n), s = Ye(wc, e);
  return /* @__PURE__ */ J.createElement(Sa, ue({}, s, {
    as: t,
    className: o
  }));
}
wc.handledProps = ["as", "className", "sorted"];
wc.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Additional classes. */
  className: l.string,
  /** A header cell can be sorted in ascending or descending order. */
  sorted: l.oneOf(["ascending", "descending"])
} : {};
wc.defaultProps = {
  as: "th"
};
function Lr(e) {
  var t = e.active, n = e.cellAs, r = e.cells, o = e.children, s = e.className, u = e.disabled, c = e.error, d = e.negative, p = e.positive, h = e.textAlign, m = e.verticalAlign, g = e.warning, y = Ge(V(t, "active"), V(u, "disabled"), V(c, "error"), V(d, "negative"), V(p, "positive"), V(g, "warning"), ji(h), Jo(m), s), b = Ye(Lr, e), _ = Xe(Lr, e);
  return dt(o) ? /* @__PURE__ */ J.createElement(_, ue({}, b, {
    className: y
  }), xn(r, function(w) {
    return Sa.create(w, {
      defaultProps: {
        as: n
      }
    });
  })) : /* @__PURE__ */ J.createElement(_, ue({}, b, {
    className: y
  }), o);
}
Lr.handledProps = ["active", "as", "cellAs", "cells", "children", "className", "disabled", "error", "negative", "positive", "textAlign", "verticalAlign", "warning"];
Lr.defaultProps = {
  as: "tr",
  cellAs: "td"
};
Lr.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** A row can be active or selected by a user. */
  active: l.bool,
  /** An element type to render as (string or function). */
  cellAs: l.elementType,
  /** Shorthand array of props for TableCell. */
  cells: bc,
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
  textAlign: l.oneOf(ta(Wi, "justified")),
  /** A table row can adjust its vertical alignment. */
  verticalAlign: l.oneOf(zi),
  /** A row may warn a user. */
  warning: l.bool
} : {};
Lr.create = Gt(Lr, function(e) {
  return {
    cells: e
  };
});
function Et(e) {
  var t = e.attached, n = e.basic, r = e.celled, o = e.children, s = e.className, u = e.collapsing, c = e.color, d = e.columns, p = e.compact, h = e.definition, m = e.fixed, g = e.footerRow, y = e.headerRow, b = e.headerRows, _ = e.inverted, w = e.padded, k = e.renderBodyRow, F = e.selectable, E = e.singleLine, I = e.size, S = e.sortable, P = e.stackable, C = e.striped, T = e.structured, A = e.tableData, B = e.textAlign, H = e.unstackable, ne = e.verticalAlign, U = Ge("ui", c, I, V(r, "celled"), V(u, "collapsing"), V(h, "definition"), V(m, "fixed"), V(_, "inverted"), V(F, "selectable"), V(E, "single line"), V(S, "sortable"), V(P, "stackable"), V(C, "striped"), V(T, "structured"), V(H, "unstackable"), rn(t, "attached"), rn(n, "basic"), rn(p, "compact"), rn(w, "padded"), ji(B), Jo(ne), qn(d, "column"), "table", s), re = Ye(Et, e), he = Xe(Et, e);
  if (!dt(o))
    return /* @__PURE__ */ J.createElement(he, ue({}, re, {
      className: U
    }), o);
  var ge = y || b, Ne = {
    defaultProps: {
      cellAs: "th"
    }
  }, le = ge && /* @__PURE__ */ J.createElement(zo, null, Lr.create(y, Ne), xn(b, function(me) {
    return Lr.create(me, Ne);
  }));
  return /* @__PURE__ */ J.createElement(he, ue({}, re, {
    className: U
  }), le, /* @__PURE__ */ J.createElement(Ri, null, k && xn(A, function(me, X) {
    return Lr.create(k(me, X));
  })), g && /* @__PURE__ */ J.createElement(Ys, null, Lr.create(g)));
}
Et.handledProps = ["as", "attached", "basic", "celled", "children", "className", "collapsing", "color", "columns", "compact", "definition", "fixed", "footerRow", "headerRow", "headerRows", "inverted", "padded", "renderBodyRow", "selectable", "singleLine", "size", "sortable", "stackable", "striped", "structured", "tableData", "textAlign", "unstackable", "verticalAlign"];
Et.defaultProps = {
  as: "table"
};
Et.propTypes = process.env.NODE_ENV !== "production" ? {
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
  color: l.oneOf(oa),
  /** A table can specify its column count to divide its content evenly. */
  columns: l.oneOf(or),
  /** A table may sometimes need to be more compact to make more rows visible at a time. */
  compact: l.oneOfType([l.bool, l.oneOf(["very"])]),
  /** A table may be formatted to emphasize a first column that defines a rows content. */
  definition: l.bool,
  /**
   * A table can use fixed a special faster form of table rendering that does not resize table cells based on content
   */
  fixed: l.bool,
  /** Shorthand for a TableRow to be placed within Table.Footer. */
  footerRow: Ct,
  /** Shorthand for a TableRow to be placed within Table.Header. */
  headerRow: Mt([Yt(["headerRows"]), Ct]),
  /** Shorthand for multiple TableRows to be placed within Table.Header. */
  headerRows: Mt([Yt(["headerRow"]), bc]),
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
  renderBodyRow: Mt([Yt(["children"]), Po(["tableData"]), l.func]),
  /** A table can have its rows appear selectable. */
  selectable: l.bool,
  /** A table can specify that its cell contents should remain on a single line and not wrap. */
  singleLine: l.bool,
  /** A table can also be small or large. */
  size: l.oneOf(ta(dr, "mini", "tiny", "medium", "big", "huge", "massive")),
  /** A table may allow a user to sort contents by clicking on a table header. */
  sortable: l.bool,
  /** A table can specify how it stacks table content responsively. */
  stackable: l.bool,
  /** A table can stripe alternate rows of content with a darker color to increase contrast. */
  striped: l.bool,
  /** A table can be formatted to display complex structured data. */
  structured: l.bool,
  /** Data to be passed to the renderBodyRow function. */
  tableData: Mt([Yt(["children"]), Po(["renderBodyRow"]), l.array]),
  /** A table can adjust its text alignment. */
  textAlign: l.oneOf(ta(Wi, "justified")),
  /** A table can specify how it stacks table content responsively. */
  unstackable: l.bool,
  /** A table can adjust its text alignment. */
  verticalAlign: l.oneOf(zi)
} : {};
Et.Body = Ri;
Et.Cell = Sa;
Et.Footer = Ys;
Et.Header = zo;
Et.HeaderCell = wc;
Et.Row = Lr;
function Uo(e) {
  var t = e.children, n = e.className, r = e.content, o = Ge("sub header", n), s = Ye(Uo, e), u = Xe(Uo, e);
  return /* @__PURE__ */ J.createElement(u, ue({}, s, {
    className: o
  }), dt(t) ? r : t);
}
Uo.handledProps = ["as", "children", "className", "content"];
Uo.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: Nt
} : {};
Uo.create = Gt(Uo, function(e) {
  return {
    content: e
  };
});
function As(e) {
  var t = e.children, n = e.className, r = e.content, o = Ge("content", n), s = Ye(As, e), u = Xe(As, e);
  return /* @__PURE__ */ J.createElement(u, ue({}, s, {
    className: o
  }), dt(t) ? r : t);
}
As.handledProps = ["as", "children", "className", "content"];
As.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: Nt
} : {};
function Vn(e) {
  var t = e.attached, n = e.block, r = e.children, o = e.className, s = e.color, u = e.content, c = e.disabled, d = e.dividing, p = e.floated, h = e.icon, m = e.image, g = e.inverted, y = e.size, b = e.sub, _ = e.subheader, w = e.textAlign, k = Ge("ui", s, y, V(n, "block"), V(c, "disabled"), V(d, "dividing"), Gn(p, "floated"), V(h === !0, "icon"), V(m === !0, "image"), V(g, "inverted"), V(b, "sub"), rn(t, "attached"), ji(w), "header", o), F = Ye(Vn, e), E = Xe(Vn, e);
  if (!dt(r))
    return /* @__PURE__ */ J.createElement(E, ue({}, F, {
      className: k
    }), r);
  var I = We.create(h, {
    autoGenerateKey: !1
  }), S = xr.create(m, {
    autoGenerateKey: !1
  }), P = Uo.create(_, {
    autoGenerateKey: !1
  });
  return I || S ? /* @__PURE__ */ J.createElement(E, ue({}, F, {
    className: k
  }), I || S, (u || P) && /* @__PURE__ */ J.createElement(As, null, u, P)) : /* @__PURE__ */ J.createElement(E, ue({}, F, {
    className: k
  }), u, P);
}
Vn.handledProps = ["as", "attached", "block", "children", "className", "color", "content", "disabled", "dividing", "floated", "icon", "image", "inverted", "size", "sub", "subheader", "textAlign"];
Vn.propTypes = process.env.NODE_ENV !== "production" ? {
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
  color: l.oneOf(oa),
  /** Shorthand for primary content. */
  content: Nt,
  /** Show that the header is inactive. */
  disabled: l.bool,
  /** Divide header from the content below it. */
  dividing: l.bool,
  /** Header can sit to the left or right of other content. */
  floated: l.oneOf(_c),
  /** Add an icon by icon name or pass an Icon. */
  icon: Mt([Yt(["image"]), l.oneOfType([l.bool, Ct])]),
  /** Add an image by img src or pass an Image. */
  image: Mt([Yt(["icon"]), l.oneOfType([l.bool, Ct])]),
  /** Inverts the color of the header for dark backgrounds. */
  inverted: l.bool,
  /** Content headings are sized with em and are based on the font-size of their container. */
  size: l.oneOf(ta(dr, "big", "massive", "mini")),
  /** Headers may be formatted to label smaller or de-emphasized content. */
  sub: l.bool,
  /** Shorthand for Header.Subheader. */
  subheader: Ct,
  /** Align header content. */
  textAlign: l.oneOf(Wi)
} : {};
Vn.Content = As;
Vn.Subheader = Uo;
function tc(e) {
  var t = e.active, n = e.children, r = e.className, o = e.content, s = e.disabled, u = e.indeterminate, c = e.inline, d = e.inverted, p = e.size, h = Ge("ui", p, V(t, "active"), V(s, "disabled"), V(u, "indeterminate"), V(d, "inverted"), V(n || o, "text"), rn(c, "inline"), "loader", r), m = Ye(tc, e), g = Xe(tc, e);
  return /* @__PURE__ */ J.createElement(g, ue({}, m, {
    className: h
  }), dt(n) ? o : n);
}
tc.handledProps = ["active", "as", "children", "className", "content", "disabled", "indeterminate", "inline", "inverted", "size"];
tc.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** A loader can be active or visible. */
  active: l.bool,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: Nt,
  /** A loader can be disabled or hidden. */
  disabled: l.bool,
  /** A loader can show it's unsure of how long a task will take. */
  indeterminate: l.bool,
  /** Loaders can appear inline with content. */
  inline: l.oneOfType([l.bool, l.oneOf(["centered"])]),
  /** Loaders can have their colors inverted. */
  inverted: l.bool,
  /** Loaders can have different sizes. */
  size: l.oneOf(dr)
} : {};
function U3(e) {
  return jr(e) && e.nodeType === 1 && !Pd(e);
}
var H3 = L.createContext();
L.createContext();
var Y3 = function(t) {
  return Array.isArray(t) ? t[0] : t;
}, q3 = function(t) {
  if (typeof t == "function") {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      r[o - 1] = arguments[o];
    return t.apply(void 0, r);
  }
}, V3 = function(t, n) {
  if (typeof t == "function")
    return q3(t, n);
  t != null && (t.current = n);
}, u0 = function(t) {
  return t.reduce(function(n, r) {
    var o = r[0], s = r[1];
    return n[o] = s, n;
  }, {});
}, d0 = typeof window < "u" && window.document && window.document.createElement ? L.useLayoutEffect : L.useEffect, ir = "top", zr = "bottom", Ur = "right", sr = "left", Em = "auto", xc = [ir, zr, Ur, sr], Rs = "start", nc = "end", G3 = "clippingParents", pw = "viewport", yl = "popper", K3 = "reference", f0 = /* @__PURE__ */ xc.reduce(function(e, t) {
  return e.concat([t + "-" + Rs, t + "-" + nc]);
}, []), hw = /* @__PURE__ */ [].concat(xc, [Em]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Rs, t + "-" + nc]);
}, []), Z3 = "beforeRead", X3 = "read", Q3 = "afterRead", J3 = "beforeMain", e$ = "main", t$ = "afterMain", n$ = "beforeWrite", r$ = "write", a$ = "afterWrite", o$ = [Z3, X3, Q3, J3, e$, t$, n$, r$, a$];
function Ta(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Er(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Mi(e) {
  var t = Er(e).Element;
  return e instanceof t || e instanceof Element;
}
function $r(e) {
  var t = Er(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Cm(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Er(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function i$(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, s = t.elements[n];
    !$r(s) || !Ta(s) || (Object.assign(s.style, r), Object.keys(o).forEach(function(u) {
      var c = o[u];
      c === !1 ? s.removeAttribute(u) : s.setAttribute(u, c === !0 ? "" : c);
    }));
  });
}
function s$(e) {
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
      !$r(o) || !Ta(o) || (Object.assign(o.style, c), Object.keys(s).forEach(function(d) {
        o.removeAttribute(d);
      }));
    });
  };
}
const l$ = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: i$,
  effect: s$,
  requires: ["computeStyles"]
};
function Ea(e) {
  return e.split("-")[0];
}
var Ei = Math.max, ed = Math.min, Ms = Math.round;
function xh() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function mw() {
  return !/^((?!chrome|android).)*safari/i.test(xh());
}
function Ds(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, s = 1;
  t && $r(e) && (o = e.offsetWidth > 0 && Ms(r.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && Ms(r.height) / e.offsetHeight || 1);
  var u = Mi(e) ? Er(e) : window, c = u.visualViewport, d = !mw() && n, p = (r.left + (d && c ? c.offsetLeft : 0)) / o, h = (r.top + (d && c ? c.offsetTop : 0)) / s, m = r.width / o, g = r.height / s;
  return {
    width: m,
    height: g,
    top: h,
    right: p + m,
    bottom: h + g,
    left: p,
    x: p,
    y: h
  };
}
function Om(e) {
  var t = Ds(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function gw(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Cm(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Ja(e) {
  return Er(e).getComputedStyle(e);
}
function c$(e) {
  return ["table", "td", "th"].indexOf(Ta(e)) >= 0;
}
function ei(e) {
  return ((Mi(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Ad(e) {
  return Ta(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Cm(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    ei(e)
  );
}
function p0(e) {
  return !$r(e) || // https://github.com/popperjs/popper-core/issues/837
  Ja(e).position === "fixed" ? null : e.offsetParent;
}
function u$(e) {
  var t = /firefox/i.test(xh()), n = /Trident/i.test(xh());
  if (n && $r(e)) {
    var r = Ja(e);
    if (r.position === "fixed")
      return null;
  }
  var o = Ad(e);
  for (Cm(o) && (o = o.host); $r(o) && ["html", "body"].indexOf(Ta(o)) < 0; ) {
    var s = Ja(o);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Ec(e) {
  for (var t = Er(e), n = p0(e); n && c$(n) && Ja(n).position === "static"; )
    n = p0(n);
  return n && (Ta(n) === "html" || Ta(n) === "body" && Ja(n).position === "static") ? t : n || u$(e) || t;
}
function Sm(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Al(e, t, n) {
  return Ei(e, ed(t, n));
}
function d$(e, t, n) {
  var r = Al(e, t, n);
  return r > n ? n : r;
}
function vw() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function yw(e) {
  return Object.assign({}, vw(), e);
}
function bw(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var f$ = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, yw(typeof t != "number" ? t : bw(t, xc));
};
function p$(e) {
  var t, n = e.state, r = e.name, o = e.options, s = n.elements.arrow, u = n.modifiersData.popperOffsets, c = Ea(n.placement), d = Sm(c), p = [sr, Ur].indexOf(c) >= 0, h = p ? "height" : "width";
  if (!(!s || !u)) {
    var m = f$(o.padding, n), g = Om(s), y = d === "y" ? ir : sr, b = d === "y" ? zr : Ur, _ = n.rects.reference[h] + n.rects.reference[d] - u[d] - n.rects.popper[h], w = u[d] - n.rects.reference[d], k = Ec(s), F = k ? d === "y" ? k.clientHeight || 0 : k.clientWidth || 0 : 0, E = _ / 2 - w / 2, I = m[y], S = F - g[h] - m[b], P = F / 2 - g[h] / 2 + E, C = Al(I, P, S), T = d;
    n.modifiersData[r] = (t = {}, t[T] = C, t.centerOffset = C - P, t);
  }
}
function h$(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || gw(t.elements.popper, o) && (t.elements.arrow = o));
}
const m$ = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: p$,
  effect: h$,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Ls(e) {
  return e.split("-")[1];
}
var g$ = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function v$(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return {
    x: Ms(n * o) / o || 0,
    y: Ms(r * o) / o || 0
  };
}
function h0(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, s = e.variation, u = e.offsets, c = e.position, d = e.gpuAcceleration, p = e.adaptive, h = e.roundOffsets, m = e.isFixed, g = u.x, y = g === void 0 ? 0 : g, b = u.y, _ = b === void 0 ? 0 : b, w = typeof h == "function" ? h({
    x: y,
    y: _
  }) : {
    x: y,
    y: _
  };
  y = w.x, _ = w.y;
  var k = u.hasOwnProperty("x"), F = u.hasOwnProperty("y"), E = sr, I = ir, S = window;
  if (p) {
    var P = Ec(n), C = "clientHeight", T = "clientWidth";
    if (P === Er(n) && (P = ei(n), Ja(P).position !== "static" && c === "absolute" && (C = "scrollHeight", T = "scrollWidth")), P = P, o === ir || (o === sr || o === Ur) && s === nc) {
      I = zr;
      var A = m && P === S && S.visualViewport ? S.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        P[C]
      );
      _ -= A - r.height, _ *= d ? 1 : -1;
    }
    if (o === sr || (o === ir || o === zr) && s === nc) {
      E = Ur;
      var B = m && P === S && S.visualViewport ? S.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        P[T]
      );
      y -= B - r.width, y *= d ? 1 : -1;
    }
  }
  var H = Object.assign({
    position: c
  }, p && g$), ne = h === !0 ? v$({
    x: y,
    y: _
  }, Er(n)) : {
    x: y,
    y: _
  };
  if (y = ne.x, _ = ne.y, d) {
    var U;
    return Object.assign({}, H, (U = {}, U[I] = F ? "0" : "", U[E] = k ? "0" : "", U.transform = (S.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + _ + "px)" : "translate3d(" + y + "px, " + _ + "px, 0)", U));
  }
  return Object.assign({}, H, (t = {}, t[I] = F ? _ + "px" : "", t[E] = k ? y + "px" : "", t.transform = "", t));
}
function y$(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, s = n.adaptive, u = s === void 0 ? !0 : s, c = n.roundOffsets, d = c === void 0 ? !0 : c, p = {
    placement: Ea(t.placement),
    variation: Ls(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, h0(Object.assign({}, p, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: u,
    roundOffsets: d
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, h0(Object.assign({}, p, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: d
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const b$ = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: y$,
  data: {}
};
var Cu = {
  passive: !0
};
function _$(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, s = o === void 0 ? !0 : o, u = r.resize, c = u === void 0 ? !0 : u, d = Er(t.elements.popper), p = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && p.forEach(function(h) {
    h.addEventListener("scroll", n.update, Cu);
  }), c && d.addEventListener("resize", n.update, Cu), function() {
    s && p.forEach(function(h) {
      h.removeEventListener("scroll", n.update, Cu);
    }), c && d.removeEventListener("resize", n.update, Cu);
  };
}
const w$ = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: _$,
  data: {}
};
var x$ = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Du(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return x$[t];
  });
}
var E$ = {
  start: "end",
  end: "start"
};
function m0(e) {
  return e.replace(/start|end/g, function(t) {
    return E$[t];
  });
}
function Tm(e) {
  var t = Er(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Pm(e) {
  return Ds(ei(e)).left + Tm(e).scrollLeft;
}
function C$(e, t) {
  var n = Er(e), r = ei(e), o = n.visualViewport, s = r.clientWidth, u = r.clientHeight, c = 0, d = 0;
  if (o) {
    s = o.width, u = o.height;
    var p = mw();
    (p || !p && t === "fixed") && (c = o.offsetLeft, d = o.offsetTop);
  }
  return {
    width: s,
    height: u,
    x: c + Pm(e),
    y: d
  };
}
function O$(e) {
  var t, n = ei(e), r = Tm(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, s = Ei(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), u = Ei(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), c = -r.scrollLeft + Pm(e), d = -r.scrollTop;
  return Ja(o || n).direction === "rtl" && (c += Ei(n.clientWidth, o ? o.clientWidth : 0) - s), {
    width: s,
    height: u,
    x: c,
    y: d
  };
}
function km(e) {
  var t = Ja(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function _w(e) {
  return ["html", "body", "#document"].indexOf(Ta(e)) >= 0 ? e.ownerDocument.body : $r(e) && km(e) ? e : _w(Ad(e));
}
function Rl(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = _w(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), s = Er(r), u = o ? [s].concat(s.visualViewport || [], km(r) ? r : []) : r, c = t.concat(u);
  return o ? c : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    c.concat(Rl(Ad(u)))
  );
}
function Eh(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function S$(e, t) {
  var n = Ds(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function g0(e, t, n) {
  return t === pw ? Eh(C$(e, n)) : Mi(t) ? S$(t, n) : Eh(O$(ei(e)));
}
function T$(e) {
  var t = Rl(Ad(e)), n = ["absolute", "fixed"].indexOf(Ja(e).position) >= 0, r = n && $r(e) ? Ec(e) : e;
  return Mi(r) ? t.filter(function(o) {
    return Mi(o) && gw(o, r) && Ta(o) !== "body";
  }) : [];
}
function P$(e, t, n, r) {
  var o = t === "clippingParents" ? T$(e) : [].concat(t), s = [].concat(o, [n]), u = s[0], c = s.reduce(function(d, p) {
    var h = g0(e, p, r);
    return d.top = Ei(h.top, d.top), d.right = ed(h.right, d.right), d.bottom = ed(h.bottom, d.bottom), d.left = Ei(h.left, d.left), d;
  }, g0(e, u, r));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function ww(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? Ea(r) : null, s = r ? Ls(r) : null, u = t.x + t.width / 2 - n.width / 2, c = t.y + t.height / 2 - n.height / 2, d;
  switch (o) {
    case ir:
      d = {
        x: u,
        y: t.y - n.height
      };
      break;
    case zr:
      d = {
        x: u,
        y: t.y + t.height
      };
      break;
    case Ur:
      d = {
        x: t.x + t.width,
        y: c
      };
      break;
    case sr:
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
  var p = o ? Sm(o) : null;
  if (p != null) {
    var h = p === "y" ? "height" : "width";
    switch (s) {
      case Rs:
        d[p] = d[p] - (t[h] / 2 - n[h] / 2);
        break;
      case nc:
        d[p] = d[p] + (t[h] / 2 - n[h] / 2);
        break;
    }
  }
  return d;
}
function rc(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, s = n.strategy, u = s === void 0 ? e.strategy : s, c = n.boundary, d = c === void 0 ? G3 : c, p = n.rootBoundary, h = p === void 0 ? pw : p, m = n.elementContext, g = m === void 0 ? yl : m, y = n.altBoundary, b = y === void 0 ? !1 : y, _ = n.padding, w = _ === void 0 ? 0 : _, k = yw(typeof w != "number" ? w : bw(w, xc)), F = g === yl ? K3 : yl, E = e.rects.popper, I = e.elements[b ? F : g], S = P$(Mi(I) ? I : I.contextElement || ei(e.elements.popper), d, h, u), P = Ds(e.elements.reference), C = ww({
    reference: P,
    element: E,
    placement: o
  }), T = Eh(Object.assign({}, E, C)), A = g === yl ? T : P, B = {
    top: S.top - A.top + k.top,
    bottom: A.bottom - S.bottom + k.bottom,
    left: S.left - A.left + k.left,
    right: A.right - S.right + k.right
  }, H = e.modifiersData.offset;
  if (g === yl && H) {
    var ne = H[o];
    Object.keys(B).forEach(function(U) {
      var re = [Ur, zr].indexOf(U) >= 0 ? 1 : -1, he = [ir, zr].indexOf(U) >= 0 ? "y" : "x";
      B[U] += ne[he] * re;
    });
  }
  return B;
}
function k$(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, s = n.rootBoundary, u = n.padding, c = n.flipVariations, d = n.allowedAutoPlacements, p = d === void 0 ? hw : d, h = Ls(r), m = h ? c ? f0 : f0.filter(function(b) {
    return Ls(b) === h;
  }) : xc, g = m.filter(function(b) {
    return p.indexOf(b) >= 0;
  });
  g.length === 0 && (g = m);
  var y = g.reduce(function(b, _) {
    return b[_] = rc(e, {
      placement: _,
      boundary: o,
      rootBoundary: s,
      padding: u
    })[Ea(_)], b;
  }, {});
  return Object.keys(y).sort(function(b, _) {
    return y[b] - y[_];
  });
}
function N$(e) {
  if (Ea(e) === Em)
    return [];
  var t = Du(e);
  return [m0(e), t, m0(t)];
}
function I$(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, s = o === void 0 ? !0 : o, u = n.altAxis, c = u === void 0 ? !0 : u, d = n.fallbackPlacements, p = n.padding, h = n.boundary, m = n.rootBoundary, g = n.altBoundary, y = n.flipVariations, b = y === void 0 ? !0 : y, _ = n.allowedAutoPlacements, w = t.options.placement, k = Ea(w), F = k === w, E = d || (F || !b ? [Du(w)] : N$(w)), I = [w].concat(E).reduce(function(Se, ye) {
      return Se.concat(Ea(ye) === Em ? k$(t, {
        placement: ye,
        boundary: h,
        rootBoundary: m,
        padding: p,
        flipVariations: b,
        allowedAutoPlacements: _
      }) : ye);
    }, []), S = t.rects.reference, P = t.rects.popper, C = /* @__PURE__ */ new Map(), T = !0, A = I[0], B = 0; B < I.length; B++) {
      var H = I[B], ne = Ea(H), U = Ls(H) === Rs, re = [ir, zr].indexOf(ne) >= 0, he = re ? "width" : "height", ge = rc(t, {
        placement: H,
        boundary: h,
        rootBoundary: m,
        altBoundary: g,
        padding: p
      }), Ne = re ? U ? Ur : sr : U ? zr : ir;
      S[he] > P[he] && (Ne = Du(Ne));
      var le = Du(Ne), me = [];
      if (s && me.push(ge[ne] <= 0), c && me.push(ge[Ne] <= 0, ge[le] <= 0), me.every(function(Se) {
        return Se;
      })) {
        A = H, T = !1;
        break;
      }
      C.set(H, me);
    }
    if (T)
      for (var X = b ? 3 : 1, te = function(ye) {
        var fe = I.find(function(Ce) {
          var De = C.get(Ce);
          if (De)
            return De.slice(0, ye).every(function(W) {
              return W;
            });
        });
        if (fe)
          return A = fe, "break";
      }, oe = X; oe > 0; oe--) {
        var be = te(oe);
        if (be === "break") break;
      }
    t.placement !== A && (t.modifiersData[r]._skip = !0, t.placement = A, t.reset = !0);
  }
}
const A$ = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: I$,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function v0(e, t, n) {
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
function y0(e) {
  return [ir, Ur, zr, sr].some(function(t) {
    return e[t] >= 0;
  });
}
function R$(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, s = t.modifiersData.preventOverflow, u = rc(t, {
    elementContext: "reference"
  }), c = rc(t, {
    altBoundary: !0
  }), d = v0(u, r), p = v0(c, o, s), h = y0(d), m = y0(p);
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
const M$ = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: R$
};
function D$(e, t, n) {
  var r = Ea(e), o = [sr, ir].indexOf(r) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, u = s[0], c = s[1];
  return u = u || 0, c = (c || 0) * o, [sr, Ur].indexOf(r) >= 0 ? {
    x: c,
    y: u
  } : {
    x: u,
    y: c
  };
}
function L$(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, s = o === void 0 ? [0, 0] : o, u = hw.reduce(function(h, m) {
    return h[m] = D$(m, t.rects, s), h;
  }, {}), c = u[t.placement], d = c.x, p = c.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += d, t.modifiersData.popperOffsets.y += p), t.modifiersData[r] = u;
}
const F$ = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: L$
};
function $$(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = ww({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const B$ = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: $$,
  data: {}
};
function j$(e) {
  return e === "x" ? "y" : "x";
}
function W$(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, s = o === void 0 ? !0 : o, u = n.altAxis, c = u === void 0 ? !1 : u, d = n.boundary, p = n.rootBoundary, h = n.altBoundary, m = n.padding, g = n.tether, y = g === void 0 ? !0 : g, b = n.tetherOffset, _ = b === void 0 ? 0 : b, w = rc(t, {
    boundary: d,
    rootBoundary: p,
    padding: m,
    altBoundary: h
  }), k = Ea(t.placement), F = Ls(t.placement), E = !F, I = Sm(k), S = j$(I), P = t.modifiersData.popperOffsets, C = t.rects.reference, T = t.rects.popper, A = typeof _ == "function" ? _(Object.assign({}, t.rects, {
    placement: t.placement
  })) : _, B = typeof A == "number" ? {
    mainAxis: A,
    altAxis: A
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, A), H = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, ne = {
    x: 0,
    y: 0
  };
  if (P) {
    if (s) {
      var U, re = I === "y" ? ir : sr, he = I === "y" ? zr : Ur, ge = I === "y" ? "height" : "width", Ne = P[I], le = Ne + w[re], me = Ne - w[he], X = y ? -T[ge] / 2 : 0, te = F === Rs ? C[ge] : T[ge], oe = F === Rs ? -T[ge] : -C[ge], be = t.elements.arrow, Se = y && be ? Om(be) : {
        width: 0,
        height: 0
      }, ye = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : vw(), fe = ye[re], Ce = ye[he], De = Al(0, C[ge], Se[ge]), W = E ? C[ge] / 2 - X - De - fe - B.mainAxis : te - De - fe - B.mainAxis, z = E ? -C[ge] / 2 + X + De + Ce + B.mainAxis : oe + De + Ce + B.mainAxis, $ = t.elements.arrow && Ec(t.elements.arrow), D = $ ? I === "y" ? $.clientTop || 0 : $.clientLeft || 0 : 0, G = (U = H == null ? void 0 : H[I]) != null ? U : 0, K = Ne + W - G - D, se = Ne + z - G, Ie = Al(y ? ed(le, K) : le, Ne, y ? Ei(me, se) : me);
      P[I] = Ie, ne[I] = Ie - Ne;
    }
    if (c) {
      var pe, Ee = I === "x" ? ir : sr, de = I === "x" ? zr : Ur, q = P[S], ee = S === "y" ? "height" : "width", we = q + w[Ee], ke = q - w[de], Ae = [ir, sr].indexOf(k) !== -1, je = (pe = H == null ? void 0 : H[S]) != null ? pe : 0, $e = Ae ? we : q - C[ee] - T[ee] - je + B.altAxis, et = Ae ? q + C[ee] + T[ee] - je - B.altAxis : ke, Ze = y && Ae ? d$($e, q, et) : Al(y ? $e : we, q, y ? et : ke);
      P[S] = Ze, ne[S] = Ze - q;
    }
    t.modifiersData[r] = ne;
  }
}
const z$ = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: W$,
  requiresIfExists: ["offset"]
};
function U$(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function H$(e) {
  return e === Er(e) || !$r(e) ? Tm(e) : U$(e);
}
function Y$(e) {
  var t = e.getBoundingClientRect(), n = Ms(t.width) / e.offsetWidth || 1, r = Ms(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function q$(e, t, n) {
  n === void 0 && (n = !1);
  var r = $r(t), o = $r(t) && Y$(t), s = ei(t), u = Ds(e, o, n), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Ta(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  km(s)) && (c = H$(t)), $r(t) ? (d = Ds(t, !0), d.x += t.clientLeft, d.y += t.clientTop) : s && (d.x = Pm(s))), {
    x: u.left + c.scrollLeft - d.x,
    y: u.top + c.scrollTop - d.y,
    width: u.width,
    height: u.height
  };
}
function V$(e) {
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
function G$(e) {
  var t = V$(e);
  return o$.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function K$(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Z$(e) {
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
var b0 = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function _0() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function X$(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, s = o === void 0 ? b0 : o;
  return function(c, d, p) {
    p === void 0 && (p = s);
    var h = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, b0, s),
      modifiersData: {},
      elements: {
        reference: c,
        popper: d
      },
      attributes: {},
      styles: {}
    }, m = [], g = !1, y = {
      state: h,
      setOptions: function(k) {
        var F = typeof k == "function" ? k(h.options) : k;
        _(), h.options = Object.assign({}, s, h.options, F), h.scrollParents = {
          reference: Mi(c) ? Rl(c) : c.contextElement ? Rl(c.contextElement) : [],
          popper: Rl(d)
        };
        var E = G$(Z$([].concat(r, h.options.modifiers)));
        return h.orderedModifiers = E.filter(function(I) {
          return I.enabled;
        }), b(), y.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!g) {
          var k = h.elements, F = k.reference, E = k.popper;
          if (_0(F, E)) {
            h.rects = {
              reference: q$(F, Ec(E), h.options.strategy === "fixed"),
              popper: Om(E)
            }, h.reset = !1, h.placement = h.options.placement, h.orderedModifiers.forEach(function(B) {
              return h.modifiersData[B.name] = Object.assign({}, B.data);
            });
            for (var I = 0; I < h.orderedModifiers.length; I++) {
              if (h.reset === !0) {
                h.reset = !1, I = -1;
                continue;
              }
              var S = h.orderedModifiers[I], P = S.fn, C = S.options, T = C === void 0 ? {} : C, A = S.name;
              typeof P == "function" && (h = P({
                state: h,
                options: T,
                name: A,
                instance: y
              }) || h);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: K$(function() {
        return new Promise(function(w) {
          y.forceUpdate(), w(h);
        });
      }),
      destroy: function() {
        _(), g = !0;
      }
    };
    if (!_0(c, d))
      return y;
    y.setOptions(p).then(function(w) {
      !g && p.onFirstUpdate && p.onFirstUpdate(w);
    });
    function b() {
      h.orderedModifiers.forEach(function(w) {
        var k = w.name, F = w.options, E = F === void 0 ? {} : F, I = w.effect;
        if (typeof I == "function") {
          var S = I({
            state: h,
            name: k,
            instance: y,
            options: E
          }), P = function() {
          };
          m.push(S || P);
        }
      });
    }
    function _() {
      m.forEach(function(w) {
        return w();
      }), m = [];
    }
    return y;
  };
}
var Q$ = [w$, B$, b$, l$, F$, A$, z$, m$, M$], J$ = /* @__PURE__ */ X$({
  defaultModifiers: Q$
}), e5 = typeof Element < "u", t5 = typeof Map == "function", n5 = typeof Set == "function", r5 = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Lu(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var n, r, o;
    if (Array.isArray(e)) {
      if (n = e.length, n != t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!Lu(e[r], t[r])) return !1;
      return !0;
    }
    var s;
    if (t5 && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (s = e.entries(); !(r = s.next()).done; )
        if (!t.has(r.value[0])) return !1;
      for (s = e.entries(); !(r = s.next()).done; )
        if (!Lu(r.value[1], t.get(r.value[0]))) return !1;
      return !0;
    }
    if (n5 && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (s = e.entries(); !(r = s.next()).done; )
        if (!t.has(r.value[0])) return !1;
      return !0;
    }
    if (r5 && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
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
    if (e5 && e instanceof Element) return !1;
    for (r = n; r-- !== 0; )
      if (!((o[r] === "_owner" || o[r] === "__v" || o[r] === "__o") && e.$$typeof) && !Lu(e[o[r]], t[o[r]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var a5 = function(t, n) {
  try {
    return Lu(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
};
const o5 = /* @__PURE__ */ hc(a5);
var i5 = [], s5 = function(t, n, r) {
  r === void 0 && (r = {});
  var o = L.useRef(null), s = {
    onFirstUpdate: r.onFirstUpdate,
    placement: r.placement || "bottom",
    strategy: r.strategy || "absolute",
    modifiers: r.modifiers || i5
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
        eh.flushSync(function() {
          d({
            styles: u0(_.map(function(w) {
              return [w, b.styles[w] || {}];
            })),
            attributes: u0(_.map(function(w) {
              return [w, b.attributes[w]];
            }))
          });
        });
      },
      requires: ["computeStyles"]
    };
  }, []), h = L.useMemo(function() {
    var g = {
      onFirstUpdate: s.onFirstUpdate,
      placement: s.placement,
      strategy: s.strategy,
      modifiers: [].concat(s.modifiers, [p, {
        name: "applyStyles",
        enabled: !1
      }])
    };
    return o5(o.current, g) ? o.current || g : (o.current = g, g);
  }, [s.onFirstUpdate, s.placement, s.strategy, s.modifiers, p]), m = L.useRef();
  return d0(function() {
    m.current && m.current.setOptions(h);
  }, [h]), d0(function() {
    if (!(t == null || n == null)) {
      var g = r.createPopper || J$, y = g(t, n, h);
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
}, l5 = function() {
}, c5 = function() {
  return Promise.resolve(null);
}, u5 = [];
function d5(e) {
  var t = e.placement, n = t === void 0 ? "bottom" : t, r = e.strategy, o = r === void 0 ? "absolute" : r, s = e.modifiers, u = s === void 0 ? u5 : s, c = e.referenceElement, d = e.onFirstUpdate, p = e.innerRef, h = e.children, m = L.useContext(H3), g = L.useState(null), y = g[0], b = g[1], _ = L.useState(null), w = _[0], k = _[1];
  L.useEffect(function() {
    V3(p, y);
  }, [p, y]);
  var F = L.useMemo(function() {
    return {
      placement: n,
      strategy: o,
      onFirstUpdate: d,
      modifiers: [].concat(u, [{
        name: "arrow",
        enabled: w != null,
        options: {
          element: w
        }
      }])
    };
  }, [n, o, d, u, w]), E = s5(c || m, y, F), I = E.state, S = E.styles, P = E.forceUpdate, C = E.update, T = L.useMemo(function() {
    return {
      ref: b,
      style: S.popper,
      placement: I ? I.placement : n,
      hasPopperEscaped: I && I.modifiersData.hide ? I.modifiersData.hide.hasPopperEscaped : null,
      isReferenceHidden: I && I.modifiersData.hide ? I.modifiersData.hide.isReferenceHidden : null,
      arrowProps: {
        style: S.arrow,
        ref: k
      },
      forceUpdate: P || l5,
      update: C || c5
    };
  }, [b, k, n, I, S, C, P]);
  return Y3(h)(T);
}
function f5(e, t, n, r) {
  return f1(e, function(o, s, u) {
    t(r, n(o), s, u);
  }), r;
}
function p5(e, t) {
  return function(n, r) {
    return f5(n, e, t(r), {});
  };
}
var h5 = Object.prototype, m5 = h5.toString, g5 = p5(function(e, t, n) {
  t != null && typeof t.toString != "function" && (t = m5.call(t)), e[t] = n;
}, n1(Xo)), Nm = {
  "top center": "top",
  "top left": "top-start",
  "top right": "top-end",
  "bottom center": "bottom",
  "bottom left": "bottom-start",
  "bottom right": "bottom-end",
  "right center": "right",
  "left center": "left"
}, v5 = Fr(Nm), y5 = g5(Nm);
function ac(e) {
  "@babel/helpers - typeof";
  return ac = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ac(e);
}
function b5(e, t) {
  if (ac(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (ac(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function _5(e) {
  var t = b5(e, "string");
  return ac(t) == "symbol" ? t : t + "";
}
function w5(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, _5(r.key), r);
  }
}
function x5(e, t, n) {
  return t && w5(e.prototype, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
var E5 = /* @__PURE__ */ function() {
  function e(n) {
    this.ref = n;
  }
  var t = e.prototype;
  return t.getBoundingClientRect = function() {
    return Le(this.ref.current, "getBoundingClientRect") || {};
  }, x5(e, [{
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
}(), C5 = mc(function(e) {
  return new E5(Vu(e) ? e : {
    current: e
  });
});
function Ho(e) {
  var t = e.children, n = e.className, r = e.content, o = Ge("content", n), s = Ye(Ho, e), u = Xe(Ho, e);
  return /* @__PURE__ */ J.createElement(u, ue({}, s, {
    className: o
  }), dt(t) ? r : t);
}
Ho.handledProps = ["as", "children", "className", "content"];
Ho.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** The content of the Popup */
  children: l.node,
  /** Classes to add to the Popup content className. */
  className: l.string,
  /** Shorthand for primary content. */
  content: Nt
} : {};
Ho.create = Gt(Ho, function(e) {
  return {
    children: e
  };
});
function Yo(e) {
  var t = e.children, n = e.className, r = e.content, o = Ge("header", n), s = Ye(Yo, e), u = Xe(Yo, e);
  return /* @__PURE__ */ J.createElement(u, ue({}, s, {
    className: o
  }), dt(t) ? r : t);
}
Yo.handledProps = ["as", "children", "className", "content"];
Yo.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: Nt
} : {};
Yo.create = Gt(Yo, function(e) {
  return {
    children: e
  };
});
var ur = /* @__PURE__ */ function(e) {
  en(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.state = {}, r.open = !1, r.zIndexWasSynced = !1, r.triggerRef = /* @__PURE__ */ J.createRef(), r.elementRef = /* @__PURE__ */ J.createRef(), r.getPortalProps = function() {
      var c = {}, d = r.props, p = d.on, h = d.hoverable, m = yn(p) ? p : [p];
      return h && (c.closeOnPortalMouseLeave = !0, c.mouseLeaveDelay = 300), _a(m, "hover") && (c.openOnTriggerClick = !1, c.closeOnTriggerClick = !1, c.openOnTriggerMouseEnter = !0, c.closeOnTriggerMouseLeave = !0, c.mouseLeaveDelay = 70, c.mouseEnterDelay = 50), _a(m, "click") && (c.openOnTriggerClick = !0, c.closeOnTriggerClick = !0, c.closeOnDocumentClick = !0), _a(m, "focus") && (c.openOnTriggerFocus = !0, c.closeOnTriggerBlur = !0), c;
    }, r.hideOnScroll = function(c) {
      U3(c.target) && r.elementRef.current.contains(c.target) || (r.setState({
        closed: !0
      }), Sl.unsub("scroll", r.hideOnScroll, {
        target: window
      }), r.timeoutId = setTimeout(function() {
        r.setState({
          closed: !1
        });
      }, 50), r.handleClose(c));
    }, r.handleClose = function(c) {
      Le(r.props, "onClose", c, ue({}, r.props, {
        open: !1
      }));
    }, r.handleOpen = function(c) {
      Le(r.props, "onOpen", c, ue({}, r.props, {
        open: !0
      }));
    }, r.handlePortalMount = function(c) {
      Le(r.props, "onMount", c, r.props);
    }, r.handlePortalUnmount = function(c) {
      r.positionUpdate = null, Le(r.props, "onUnmount", c, r.props);
    }, r.renderContent = function(c) {
      var d = c.placement, p = c.ref, h = c.update, m = c.style, g = r.props, y = g.basic, b = g.children, _ = g.className, w = g.content, k = g.hideOnScroll, F = g.flowing, E = g.header, I = g.inverted, S = g.popper, P = g.size, C = g.style, T = g.wide, A = r.state.contentRestProps;
      r.positionUpdate = h;
      var B = Ge("ui", y5[d], P, rn(T, "wide"), V(y, "basic"), V(F, "flowing"), V(I, "inverted"), "popup transition visible", _), H = Xe(t, r.props), ne = ue({
        // Heads up! We need default styles to get working correctly `flowing`
        left: "auto",
        right: "auto",
        // This is required to be properly positioned inside wrapping `div`
        position: "initial"
      }, C), U = /* @__PURE__ */ J.createElement(H, ue({}, A, {
        className: B,
        style: ne,
        ref: r.elementRef
      }), dt(b) ? /* @__PURE__ */ J.createElement(J.Fragment, null, Yo.create(E, {
        autoGenerateKey: !1
      }), Ho.create(w, {
        autoGenerateKey: !1
      })) : b, k && /* @__PURE__ */ J.createElement(Ya, {
        on: r.hideOnScroll,
        name: "scroll",
        target: "window"
      }));
      return JD(S || {}, {
        overrideProps: {
          children: U,
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
    var u = Ye(t, o), c = xm(u, function(p, h, m) {
      return _a(ea.handledProps, m) || (p[m] = h), p;
    }, {}), d = Td(u, ea.handledProps);
    return {
      contentRestProps: c,
      portalRestProps: d
    };
  };
  var n = t.prototype;
  return n.componentDidUpdate = function(o) {
    var s = Il(this.props.popperDependencies, o.popperDependencies);
    s || this.handleUpdate();
  }, n.componentWillUnmount = function() {
    clearTimeout(this.timeoutId);
  }, n.handleUpdate = function() {
    this.positionUpdate && this.positionUpdate();
  }, n.render = function() {
    var o = this, s = this.props, u = s.context, c = s.disabled, d = s.eventsEnabled, p = s.offset, h = s.pinned, m = s.popper, g = s.popperModifiers, y = s.position, b = s.positionFixed, _ = s.trigger, w = this.state, k = w.closed, F = w.portalRestProps;
    if (k || c)
      return _;
    var E = [{
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
    }].concat(g, [
      // We are syncing zIndex from `.ui.popup.content` to avoid layering issues as in SUIR we are using an additional
      // `div` for Popper.js
      // https://github.com/Semantic-Org/Semantic-UI-React/issues/4083
      {
        name: "syncZIndex",
        enabled: !0,
        phase: "beforeRead",
        fn: function(C) {
          var T, A = C.state;
          if (!o.zIndexWasSynced) {
            var B = m == null || (T = m.style) == null ? void 0 : T.zIndex;
            fs(B) && (A.elements.popper.style.zIndex = window.getComputedStyle(A.elements.popper.firstChild).zIndex), o.zIndexWasSynced = !0;
          }
        },
        effect: function() {
          return function() {
            o.zIndexWasSynced = !1;
          };
        }
      }
    ]), I = C5(Tt(u) ? this.triggerRef : u), S = ue({}, this.getPortalProps(), F);
    return /* @__PURE__ */ J.createElement(ea, ue({}, S, {
      onClose: this.handleClose,
      onMount: this.handlePortalMount,
      onOpen: this.handleOpen,
      onUnmount: this.handlePortalUnmount,
      trigger: _,
      triggerRef: this.triggerRef
    }), /* @__PURE__ */ J.createElement(d5, {
      modifiers: E,
      placement: Nm[y],
      strategy: b ? "fixed" : null,
      referenceElement: I
    }, this.renderContent));
  }, t;
}(Zn);
ur.handledProps = ["as", "basic", "children", "className", "content", "context", "disabled", "eventsEnabled", "flowing", "header", "hideOnScroll", "hoverable", "inverted", "offset", "on", "onClose", "onMount", "onOpen", "onUnmount", "pinned", "popper", "popperDependencies", "popperModifiers", "position", "positionFixed", "size", "style", "trigger", "wide"];
ur.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Display the popup without the pointing arrow. */
  basic: l.bool,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Simple text content for the popover. */
  content: Ct,
  /** Existing element the pop-up should be bound to. */
  context: l.oneOfType([l.object, ym]),
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
  header: Ct,
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
  position: l.oneOf(v5),
  /** Tells `Popper.js` to use the `position: fixed` strategy to position the popover. */
  positionFixed: l.bool,
  /** A wrapping element for an actual content that will be used for positioning. */
  popper: Ct,
  /** An array containing custom settings for the Popper.js modifiers. */
  popperModifiers: l.array,
  /** A popup can have dependencies which update will schedule a position update. */
  popperDependencies: l.array,
  /** Popup size. */
  size: l.oneOf(ta(dr, "medium", "big", "massive")),
  /** Custom Popup style. */
  style: l.object,
  /** Element to be rendered in-place where the popup is defined. */
  trigger: l.node,
  /** Popup width. */
  wide: l.oneOfType([l.bool, l.oneOf(["very"])])
} : {};
ur.defaultProps = {
  disabled: !1,
  eventsEnabled: !0,
  on: ["click", "hover"],
  pinned: !1,
  popperModifiers: [],
  position: "top left"
};
ur.Content = Ho;
ur.Header = Yo;
var O5 = function(t) {
  if (t) {
    var n, r, o;
    return typeof t.window == "object" && t.window === t ? t.event : (n = (r = t.ownerDocument) == null || (o = r.defaultView) == null ? void 0 : o.event) != null ? n : void 0;
  }
}, w0 = function(t, n) {
  return t ? !!t[n] : !1;
}, S5 = function(t) {
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
    var h = typeof u > "u" ? s : u.current, m = O5(window), g = function(b) {
      if (b === m) {
        m = void 0;
        return;
      }
      d(b);
    };
    if (w0(h, "addEventListener"))
      h.addEventListener(o, g, n);
    else if (process.env.NODE_ENV !== "production")
      throw new Error("@fluentui/react-component-event-listener: Passed `element` is not valid or does not support `addEventListener()` method.");
    return p.current = setTimeout(function() {
      m = void 0;
    }, 1), function() {
      if (clearTimeout(p.current), m = void 0, w0(h, "removeEventListener"))
        h.removeEventListener(o, g, n);
      else if (process.env.NODE_ENV !== "production")
        throw new Error("@fluentui/react-component-event-listener: Passed `element` is not valid or does not support `removeEventListener()` method.");
    };
  }, [n, d, s, u, o]);
}, T5 = /* @__PURE__ */ function() {
  function e(t) {
    return S5(t), null;
  }
  return e.defaultProps = {
    capture: !1
  }, e;
}(), P5 = {
  current: typeof document > "u" ? null : document
};
function oc(e) {
  var t = e.className, n = e.children, r = e.content, o = Ge("pushable", t), s = Ye(oc, e), u = Xe(oc, e);
  return /* @__PURE__ */ J.createElement(u, ue({}, s, {
    className: o
  }), dt(n) ? r : n);
}
oc.handledProps = ["as", "children", "className", "content"];
oc.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: Nt
} : {};
function ic(e) {
  var t = e.className, n = e.dimmed, r = e.children, o = e.content, s = Ge("pusher", V(n, "dimmed"), t), u = Ye(ic, e), c = Xe(ic, e);
  return /* @__PURE__ */ J.createElement(c, ue({}, u, {
    className: s
  }), dt(r) ? o : r);
}
ic.handledProps = ["as", "children", "className", "content", "dimmed"];
ic.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: Nt,
  /** Controls whether or not the dim is displayed. */
  dimmed: l.bool
} : {};
var ti = /* @__PURE__ */ function(e) {
  en(t, e);
  function t(r) {
    var o;
    return o = e.call(this, r) || this, o.ref = /* @__PURE__ */ wr(), o.handleAnimationStart = function() {
      var s = o.props.visible, u = s ? "onVisible" : "onHide";
      if (clearTimeout(o.animationTimer), o.animationTimer = setTimeout(o.handleAnimationEnd, t.animationDuration), o.skipNextCallback) {
        o.skipNextCallback = !1;
        return;
      }
      Le(o.props, u, null, o.props);
    }, o.handleAnimationEnd = function() {
      var s = o.props.visible, u = s ? "onShow" : "onHidden";
      o.setState({
        animationTick: 0
      }), Le(o.props, u, null, o.props);
    }, o.handleDocumentClick = function(s) {
      Io(o.ref.current, s) || (o.skipNextCallback = !0, Le(o.props, "onHide", s, ue({}, o.props, {
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
    var o = this.props, s = o.animation, u = o.className, c = o.children, d = o.content, p = o.direction, h = o.target, m = o.visible, g = o.width, y = this.state.animationTick, b = Ge("ui", s, p, g, V(y > 0, "animating"), V(m, "visible"), "sidebar", u), _ = Ye(t, this.props), w = Xe(t, this.props), k = Vu(h) ? {
      targetRef: h
    } : {
      target: h
    };
    return /* @__PURE__ */ J.createElement(J.Fragment, null, /* @__PURE__ */ J.createElement(lr, {
      innerRef: this.ref
    }, /* @__PURE__ */ J.createElement(w, ue({}, _, {
      className: b
    }), dt(c) ? d : c)), m && /* @__PURE__ */ J.createElement(T5, ue({
      listener: this.handleDocumentClick,
      type: "click"
    }, k)));
  }, t;
}(Zn);
ti.handledProps = ["animation", "as", "children", "className", "content", "direction", "onHidden", "onHide", "onShow", "onVisible", "target", "visible", "width"];
ti.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Animation style. */
  animation: l.oneOf(["overlay", "push", "scale down", "uncover", "slide out", "slide along"]),
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: Nt,
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
  target: l.oneOfType([WD, ym]),
  /** Controls whether or not the sidebar is visible on the page. */
  visible: l.bool,
  /** Sidebar width. */
  width: l.oneOf(["very thin", "thin", "wide", "very wide"])
} : {};
ti.defaultProps = {
  direction: "left",
  target: P5,
  visible: !1
};
ti.animationDuration = 500;
ti.autoControlledProps = ["visible"];
ti.Pushable = oc;
ti.Pusher = ic;
const xw = zI({
  collapsible: !1,
  isCollapsed: !1,
  toggleCollapse: () => {
  },
  collapseTrigger: "button"
}), k5 = () => UI(xw), N5 = "_card_8pdnj_9", I5 = "_fluid_8pdnj_45", A5 = "_notFluid_8pdnj_53", R5 = "_elevated_8pdnj_71", M5 = "_outlined_8pdnj_81", D5 = "_flat_8pdnj_93", L5 = "_soft_8pdnj_107", F5 = "_glass_8pdnj_121", $5 = "_gradient_8pdnj_137", B5 = "_themePrimary_8pdnj_157", j5 = "_themeSecondary_8pdnj_179", W5 = "_themeSuccess_8pdnj_201", z5 = "_themeWarning_8pdnj_223", U5 = "_themeDanger_8pdnj_245", H5 = "_themeInfo_8pdnj_267", Y5 = "_themeDark_8pdnj_289", q5 = "_radiusNone_8pdnj_323", V5 = "_radiusSm_8pdnj_331", G5 = "_radiusMd_8pdnj_339", K5 = "_radiusLg_8pdnj_347", Z5 = "_radiusXl_8pdnj_355", X5 = "_radiusFull_8pdnj_363", Q5 = "_padNone_8pdnj_379", J5 = "_padSm_8pdnj_387", e9 = "_padMd_8pdnj_395", t9 = "_padLg_8pdnj_403", n9 = "_accentTop_8pdnj_419", r9 = "_accentLeft_8pdnj_429", a9 = "_accentBottom_8pdnj_439", o9 = "_accentRight_8pdnj_449", i9 = "_hoverable_8pdnj_467", s9 = "_hoverGlow_8pdnj_479", l9 = "_clickable_8pdnj_487", c9 = "_horizontal_8pdnj_523", u9 = "_vertical_8pdnj_533", d9 = "_responsiveHorizontal_8pdnj_543", f9 = "_mediaLeft_8pdnj_567", p9 = "_collapseGrid_8pdnj_587", h9 = "_collapseGridCollapsed_8pdnj_601", m9 = "_collapseContent_8pdnj_609", g9 = "_collapseButton_8pdnj_623", v9 = "_chevronIcon_8pdnj_657", y9 = "_chevronRotated_8pdnj_669", b9 = "_headerClickable_8pdnj_677", _9 = "_header_8pdnj_677", w9 = "_headerWithDivider_8pdnj_721", x9 = "_headerLeading_8pdnj_729", E9 = "_headerAvatar_8pdnj_745", C9 = "_headerTextGroup_8pdnj_759", O9 = "_title_8pdnj_771", S9 = "_subtitle_8pdnj_793", T9 = "_headerExtra_8pdnj_807", P9 = "_body_8pdnj_829", k9 = "_bodyPaddedSm_8pdnj_847", N9 = "_bodyPaddedMd_8pdnj_855", I9 = "_bodyPaddedLg_8pdnj_863", A9 = "_bodyPaddedNone_8pdnj_871", R9 = "_footer_8pdnj_887", M9 = "_footerWithDivider_8pdnj_903", D9 = "_alignLeft_8pdnj_913", L9 = "_alignCenter_8pdnj_921", F9 = "_alignRight_8pdnj_929", $9 = "_alignBetween_8pdnj_937", B9 = "_mediaContainer_8pdnj_953", j9 = "_mediaImg_8pdnj_973", W9 = "_mediaZoomOnHover_8pdnj_989", z9 = "_mediaOverlay_8pdnj_997", U9 = "_mediaBadgeSlot_8pdnj_1027", H9 = "_ratio16x9_8pdnj_1043", Y9 = "_ratio4x3_8pdnj_1051", q9 = "_ratio1x1_8pdnj_1059", V9 = "_ratio21x9_8pdnj_1067", G9 = "_ratioAuto_8pdnj_1075", K9 = "_iconBadge_8pdnj_1115", Z9 = "_iconBadgeCircle_8pdnj_1153", X9 = "_iconBadgeSm_8pdnj_1161", Q9 = "_iconBadgeLg_8pdnj_1173", J9 = "_badge_8pdnj_1193", e4 = "_badgeDefault_8pdnj_1219", t4 = "_badgePrimary_8pdnj_1229", n4 = "_badgeSuccess_8pdnj_1239", r4 = "_badgeWarning_8pdnj_1249", a4 = "_badgeDanger_8pdnj_1259", o4 = "_badgeGlass_8pdnj_1279", i4 = "_divider_8pdnj_1315", s4 = "_loadingOverlay_8pdnj_1339", l4 = "_spinner_8pdnj_1377", Oe = {
  card: N5,
  fluid: I5,
  notFluid: A5,
  elevated: R5,
  outlined: M5,
  flat: D5,
  soft: L5,
  glass: F5,
  gradient: $5,
  themePrimary: B5,
  themeSecondary: j5,
  themeSuccess: W5,
  themeWarning: z5,
  themeDanger: U5,
  themeInfo: H5,
  themeDark: Y5,
  radiusNone: q5,
  radiusSm: V5,
  radiusMd: G5,
  radiusLg: K5,
  radiusXl: Z5,
  radiusFull: X5,
  padNone: Q5,
  padSm: J5,
  padMd: e9,
  padLg: t9,
  accentTop: n9,
  accentLeft: r9,
  accentBottom: a9,
  accentRight: o9,
  hoverable: i9,
  hoverGlow: s9,
  clickable: l9,
  horizontal: c9,
  vertical: u9,
  responsiveHorizontal: d9,
  mediaLeft: f9,
  collapseGrid: p9,
  collapseGridCollapsed: h9,
  collapseContent: m9,
  collapseButton: g9,
  chevronIcon: v9,
  chevronRotated: y9,
  headerClickable: b9,
  header: _9,
  headerWithDivider: w9,
  headerLeading: x9,
  headerAvatar: E9,
  headerTextGroup: C9,
  title: O9,
  subtitle: S9,
  headerExtra: T9,
  body: P9,
  bodyPaddedSm: k9,
  bodyPaddedMd: N9,
  bodyPaddedLg: I9,
  bodyPaddedNone: A9,
  footer: R9,
  footerWithDivider: M9,
  alignLeft: D9,
  alignCenter: L9,
  alignRight: F9,
  alignBetween: $9,
  mediaContainer: B9,
  mediaImg: j9,
  mediaZoomOnHover: W9,
  mediaOverlay: z9,
  mediaBadgeSlot: U9,
  ratio16x9: H9,
  ratio4x3: Y9,
  ratio1x1: q9,
  ratio21x9: V9,
  ratioAuto: G9,
  iconBadge: K9,
  iconBadgeCircle: Z9,
  iconBadgeSm: X9,
  iconBadgeLg: Q9,
  badge: J9,
  badgeDefault: e4,
  badgePrimary: t4,
  badgeSuccess: n4,
  badgeWarning: r4,
  badgeDanger: a4,
  badgeGlass: o4,
  divider: i4,
  loadingOverlay: s4,
  spinner: l4
}, Rd = ({
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
  const m = k5(), g = m.collapsible, { isCollapsed: y } = m, b = g && m.collapseTrigger === "header", _ = (E) => {
    p && p(E), b && m.toggleCollapse && m.toggleCollapse();
  }, w = (E) => {
    E.stopPropagation(), m.toggleCollapse && m.toggleCollapse();
  }, k = [Oe.header, o ? Oe.headerWithDivider : "", b ? Oe.headerClickable : "", c].filter(Boolean).join(" "), F = () => !g || !s ? null : u ? /* @__PURE__ */ O(
    "span",
    {
      onClick: w,
      role: "button",
      tabIndex: 0,
      onKeyDown: (E) => {
        (E.key === "Enter" || E.key === " ") && (E.preventDefault(), w(E));
      },
      children: u
    }
  ) : /* @__PURE__ */ O(
    "button",
    {
      type: "button",
      className: Oe.collapseButton,
      onClick: w,
      "aria-label": y ? "Expandir tarjeta" : "Colapsar tarjeta",
      children: /* @__PURE__ */ O(We, { name: "chevron up", className: `${Oe.chevronIcon} ${y ? Oe.chevronRotated : ""}`, style: { margin: 0 } })
    }
  );
  return h ? /* @__PURE__ */ ae(
    "header",
    {
      className: k,
      style: d,
      onClick: _,
      role: b ? "button" : void 0,
      tabIndex: b ? 0 : void 0,
      onKeyDown: (E) => {
        b && (E.key === "Enter" || E.key === " ") && (E.preventDefault(), _(E));
      },
      children: [
        h,
        F()
      ]
    }
  ) : /* @__PURE__ */ ae(
    "header",
    {
      className: k,
      style: d,
      onClick: _,
      role: b ? "button" : void 0,
      tabIndex: b ? 0 : void 0,
      onKeyDown: (E) => {
        b && (E.key === "Enter" || E.key === " ") && (E.preventDefault(), _(E));
      },
      children: [
        /* @__PURE__ */ ae("div", { className: Oe.headerLeading, children: [
          n && /* @__PURE__ */ O("div", { className: Oe.headerAvatar, children: n }),
          (e || t) && /* @__PURE__ */ ae("div", { className: Oe.headerTextGroup, children: [
            e && (typeof e == "string" ? /* @__PURE__ */ O("h3", { className: Oe.title, children: e }) : e),
            t && (typeof t == "string" ? /* @__PURE__ */ O("p", { className: Oe.subtitle, children: t }) : t)
          ] })
        ] }),
        /* @__PURE__ */ ae("div", { className: Oe.headerExtra, children: [
          r,
          F()
        ] })
      ]
    }
  );
};
Rd.propTypes = {
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
Rd.displayName = "CardHeader";
const c4 = {
  none: Oe.bodyPaddedNone,
  small: Oe.bodyPaddedSm,
  medium: Oe.bodyPaddedMd,
  large: Oe.bodyPaddedLg
}, Ew = ({ children: e, padding: t = "medium", className: n = "", style: r = {} }) => {
  const o = [Oe.body, c4[t] || Oe.bodyPaddedMd, n].filter(Boolean).join(" ");
  return /* @__PURE__ */ O("div", { className: o, style: r, children: e });
};
Ew.propTypes = {
  children: l.node,
  padding: l.oneOf(["none", "small", "medium", "large"]),
  className: l.string,
  style: l.object
};
const u4 = {
  left: Oe.alignLeft,
  center: Oe.alignCenter,
  right: Oe.alignRight,
  between: Oe.alignBetween
}, Cw = ({ children: e, align: t = "right", divider: n = !1, className: r = "", style: o = {} }) => {
  const s = [Oe.footer, u4[t] || Oe.alignRight, n ? Oe.footerWithDivider : "", r].filter(Boolean).join(" ");
  return /* @__PURE__ */ O("footer", { className: s, style: o, children: e });
};
Cw.propTypes = {
  children: l.node,
  align: l.oneOf(["left", "center", "right", "between"]),
  divider: l.bool,
  className: l.string,
  style: l.object
};
const d4 = {
  "16/9": Oe.ratio16x9,
  "4/3": Oe.ratio4x3,
  "1/1": Oe.ratio1x1,
  "21/9": Oe.ratio21x9,
  auto: Oe.ratioAuto
}, Ow = ({
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
    Oe.mediaContainer,
    r === "left" ? Oe.mediaLeft : "",
    d4[n] || Oe.ratio16x9,
    u ? Oe.mediaZoomOnHover : "",
    c
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ ae("div", { className: h, style: d, children: [
    s && /* @__PURE__ */ O("div", { className: Oe.mediaBadgeSlot, children: s }),
    p || e && /* @__PURE__ */ O("img", { src: e, alt: t, className: Oe.mediaImg }),
    o && /* @__PURE__ */ O("div", { className: Oe.mediaOverlay, children: typeof o == "boolean" ? null : o })
  ] });
};
Ow.propTypes = {
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
const f4 = {
  default: Oe.badgeDefault,
  primary: Oe.badgePrimary,
  success: Oe.badgeSuccess,
  warning: Oe.badgeWarning,
  danger: Oe.badgeDanger,
  glass: Oe.badgeGlass
}, Sw = ({ children: e, variant: t = "default", color: n, textColor: r, icon: o, className: s = "", style: u = {} }) => {
  const c = [Oe.badge, f4[t] || Oe.badgeDefault, s].filter(Boolean).join(" "), d = {
    ...u,
    ...n ? { backgroundColor: n } : {},
    ...r ? { color: r } : {}
  };
  return /* @__PURE__ */ ae("span", { className: c, style: d, children: [
    o && /* @__PURE__ */ O("span", { style: { display: "inline-flex" }, children: o }),
    e
  ] });
};
Sw.propTypes = {
  children: l.node,
  variant: l.oneOf(["default", "primary", "success", "warning", "danger", "glass"]),
  color: l.string,
  textColor: l.string,
  icon: l.node,
  className: l.string,
  style: l.object
};
const Tw = ({ className: e = "", color: t, style: n = {} }) => {
  const r = [Oe.divider, e].filter(Boolean).join(" "), o = {
    ...n,
    ...t ? { backgroundColor: t } : {}
  };
  return /* @__PURE__ */ O("hr", { className: r, style: o });
};
Tw.propTypes = {
  className: l.string,
  color: l.string,
  style: l.object
};
const Ip = {
  primary: Oe.themePrimary,
  secondary: Oe.themeSecondary,
  success: Oe.themeSuccess,
  warning: Oe.themeWarning,
  danger: Oe.themeDanger,
  info: Oe.themeInfo
}, p4 = {
  small: Oe.iconBadgeSm,
  medium: "",
  large: Oe.iconBadgeLg
}, Pw = ({ name: e, color: t, shape: n = "circle", size: r = "medium", bgColor: o, iconColor: s, className: u = "", style: c = {}, children: d }) => {
  const p = [
    Oe.iconBadge,
    n === "circle" ? Oe.iconBadgeCircle : "",
    p4[r] || "",
    t && Ip[t] ? Ip[t] : "",
    u
  ].filter(Boolean).join(" "), h = {
    ...c,
    ...o ? { "--ik-icon-bg": o } : {},
    ...s ? { "--ik-icon-color": s } : {}
  };
  return t && !Ip[t] && (h["--ik-icon-color"] || (h["--ik-icon-color"] = t)), /* @__PURE__ */ O("div", { className: p, style: h, children: d || e && /* @__PURE__ */ O(We, { name: e, style: { margin: 0 } }) });
};
Pw.propTypes = {
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
const Ap = {
  primary: Oe.themePrimary,
  secondary: Oe.themeSecondary,
  success: Oe.themeSuccess,
  warning: Oe.themeWarning,
  danger: Oe.themeDanger,
  info: Oe.themeInfo,
  dark: Oe.themeDark
}, x0 = {
  none: Oe.radiusNone,
  small: Oe.radiusSm,
  sm: Oe.radiusSm,
  medium: Oe.radiusMd,
  md: Oe.radiusMd,
  large: Oe.radiusLg,
  lg: Oe.radiusLg,
  xl: Oe.radiusXl,
  full: Oe.radiusFull
}, h4 = {
  none: Oe.padNone,
  small: Oe.padSm,
  medium: Oe.padMd,
  large: Oe.padLg
}, Rp = {
  top: Oe.accentTop,
  left: Oe.accentLeft,
  bottom: Oe.accentBottom,
  right: Oe.accentRight
}, m4 = (e) => {
  if (!e || e === "none")
    return [];
  if (Array.isArray(e))
    return e.map((t) => Rp[String(t).trim().toLowerCase()]).filter(Boolean);
  if (typeof e == "string") {
    const t = e.trim().toLowerCase();
    return t === "all" ? [Oe.accentTop, Oe.accentRight, Oe.accentBottom, Oe.accentLeft] : t.split(/[\s,+/|-]+/).map((r) => r.trim()).map((r) => Rp[r]).filter(Boolean);
  }
  return typeof e == "object" ? Object.keys(e).filter((t) => !!e[t]).map((t) => Rp[t.toLowerCase()]).filter(Boolean) : [];
}, g4 = {
  elevated: Oe.elevated,
  outlined: Oe.outlined,
  flat: Oe.flat,
  soft: Oe.soft,
  glass: Oe.glass,
  gradient: Oe.gradient
}, so = pc((e, t) => {
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
    responsive: g = !0,
    hoverable: y = !1,
    glow: b = !1,
    clickable: _ = !1,
    fluid: w = !0,
    radius: k = "large",
    padding: F,
    loading: E = !1,
    collapsible: I = !1,
    collapsed: S,
    defaultCollapsed: P = !1,
    onCollapseChange: C,
    collapseTrigger: T = "button",
    className: A = "",
    style: B = {},
    onClick: H,
    onKeyDown: ne,
    tabIndex: U,
    role: re
  } = e, he = S !== void 0, [ge, Ne] = ot(P), le = he ? S : ge, me = () => {
    const W = !le;
    he || Ne(W), C && C(W);
  }, X = HI(() => ({
    collapsible: I,
    isCollapsed: le,
    toggleCollapse: me,
    collapseTrigger: T
  }), [I, le, T]), te = o && Ap[o], oe = o && !Ap[o], be = {
    ...B
  };
  s && (be["--ik-card-bg"] = s), u && (be["--ik-card-text"] = u), c && (be["--ik-card-border"] = c), d && (be["--ik-card-accent"] = d), p && (be["--ik-card-glow"] = p), oe && (be["--ik-card-accent"] = o, p || (be["--ik-card-glow"] = o), r === "soft" && (be["--ik-card-border-soft"] = o)), k && !x0[k] && (be["--ik-card-radius"] = k);
  let Se = Oe.vertical;
  m === "horizontal" && (Se = g ? Oe.responsiveHorizontal : Oe.horizontal);
  const ye = _ || typeof H == "function" && !I, fe = [
    Oe.card,
    g4[r] || Oe.elevated,
    te ? Ap[o] : "",
    w ? Oe.fluid : Oe.notFluid,
    x0[k] || "",
    F ? h4[F] : "",
    ...m4(h),
    y ? Oe.hoverable : "",
    b ? Oe.hoverGlow : "",
    ye ? Oe.clickable : "",
    Se,
    A
  ].filter(Boolean).join(" "), Ce = (W) => {
    ne && ne(W), ye && (W.key === "Enter" || W.key === " ") && (W.preventDefault(), H && H(W));
  }, De = () => {
    if (!I)
      return n;
    const W = J.Children.toArray(n), z = W.findIndex((G) => {
      var K, se;
      return J.isValidElement(G) && (G.type === Rd || ((K = G.type) == null ? void 0 : K.displayName) === "CardHeader" || ((se = G.props) == null ? void 0 : se.displayName) === "CardHeader");
    });
    if (z === -1)
      return /* @__PURE__ */ O("div", { className: `${Oe.collapseGrid} ${le ? Oe.collapseGridCollapsed : ""}`, children: /* @__PURE__ */ O("div", { className: Oe.collapseContent, children: n }) });
    const $ = W[z], D = W.filter((G, K) => K !== z);
    return /* @__PURE__ */ ae(Ca, { children: [
      $,
      /* @__PURE__ */ O("div", { className: `${Oe.collapseGrid} ${le ? Oe.collapseGridCollapsed : ""}`, children: /* @__PURE__ */ O("div", { className: Oe.collapseContent, children: D }) })
    ] });
  };
  return /* @__PURE__ */ O(xw.Provider, { value: X, children: /* @__PURE__ */ ae(
    "div",
    {
      ref: t,
      className: fe,
      style: be,
      onClick: ye ? H : void 0,
      onKeyDown: ye ? Ce : ne,
      role: re || (ye ? "button" : void 0),
      tabIndex: U !== void 0 ? U : ye ? 0 : void 0,
      children: [
        De(),
        E && /* @__PURE__ */ ae("div", { className: Oe.loadingOverlay, children: [
          /* @__PURE__ */ O("div", { className: Oe.spinner }),
          /* @__PURE__ */ O("span", { children: "Cargando..." })
        ] })
      ]
    }
  ) });
});
so.displayName = "Card";
so.Header = Rd;
so.Body = Ew;
so.Footer = Cw;
so.Media = Ow;
so.Badge = Sw;
so.Divider = Tw;
so.Icon = Pw;
so.propTypes = {
  children: l.node,
  variant: l.oneOf(["elevated", "outlined", "flat", "soft", "glass", "gradient"]),
  color: l.string,
  bgColor: l.string,
  textColor: l.string,
  borderColor: l.string,
  accentColor: l.string,
  glowColor: l.string,
  accent: l.oneOfType([l.string, l.array, l.object]),
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
const v4 = "_container_yq5hj_9", y4 = "_pos_left_yq5hj_23", b4 = "_pos_right_yq5hj_35", _4 = "_pos_top_yq5hj_47", w4 = "_pos_bottom_yq5hj_59", x4 = "_align_left_yq5hj_71", E4 = "_align_center_yq5hj_81", C4 = "_align_right_yq5hj_91", O4 = "_titleGroup_yq5hj_101", S4 = "_titleLabel_yq5hj_113", T4 = "_descriptionLabel_yq5hj_127", P4 = "_disabled_yq5hj_141", k4 = "_semanticToggle_yq5hj_155", N4 = "_small_yq5hj_321", I4 = "_medium_yq5hj_331", A4 = "_large_yq5hj_339", Xr = {
  container: v4,
  pos_left: y4,
  pos_right: b4,
  pos_top: _4,
  pos_bottom: w4,
  align_left: x4,
  align_center: E4,
  align_right: C4,
  titleGroup: O4,
  titleLabel: S4,
  descriptionLabel: T4,
  disabled: P4,
  semanticToggle: k4,
  small: N4,
  medium: I4,
  large: A4
}, E0 = {
  primary: "var(--primary, #1e293b)",
  accent: "var(--accent, #3b82f6)",
  secondary: "var(--text-secondary, #64748b)",
  success: "#16a34a",
  warning: "#f59e0b",
  danger: "var(--red500, #ef4444)",
  info: "#0284c7",
  dark: "#0f172a"
}, C0 = (e) => {
  if (!e)
    return;
  const t = String(e).trim();
  return E0[t] ? E0[t] : t.startsWith("--") ? `var(${t})` : t;
}, kw = pc((e, t) => {
  const {
    checked: n = !1,
    defaultChecked: r,
    onChange: o,
    label: s,
    title: u,
    description: c,
    titlePosition: d,
    tposition: p,
    position: h = "left",
    titleAlign: m = "left",
    disabled: g = !1,
    readOnly: y = !1,
    name: b,
    value: _,
    color: w = "primary",
    trueColor: k,
    falseColor: F,
    colorTrue: E,
    colorFalse: I,
    activeColor: S,
    inactiveColor: P,
    size: C = "medium",
    className: T = "",
    style: A = {},
    id: B,
    ...H
  } = e, ne = (ye, fe) => {
    g || y || o && o(fe.checked, ye, fe);
  }, U = C0(k || E || S || w || "primary"), re = C0(F || I || P || "#cbd5e1"), he = {
    ...A,
    "--ik-toggle-true-color": U,
    "--ik-toggle-false-color": re
  }, ge = Xr[C] || Xr.medium, Ne = g || y ? Xr.disabled : "", le = (p || d || h || "left").toLowerCase(), me = le === "top" || le === "left", X = Xr[`pos_${le}`] || Xr.pos_left, te = Xr[`align_${m}`] || "", be = !!(u || c) ? /* @__PURE__ */ ae("div", { className: `${Xr.titleGroup} ${te}`.trim(), children: [
    u && /* @__PURE__ */ O("span", { className: Xr.titleLabel, children: u }),
    c && /* @__PURE__ */ O("span", { className: Xr.descriptionLabel, children: c })
  ] }) : null, Se = /* @__PURE__ */ O(
    Kn,
    {
      ...H,
      ref: t,
      id: B,
      name: b,
      value: _,
      toggle: !0,
      label: s,
      checked: !!n,
      defaultChecked: r,
      disabled: g || y,
      onChange: ne,
      className: Xr.semanticToggle
    }
  );
  return /* @__PURE__ */ O("div", { className: `${Xr.container} ${X} ${ge} ${Ne} ${T}`.trim(), style: he, children: me ? /* @__PURE__ */ ae(Ca, { children: [
    be,
    Se
  ] }) : /* @__PURE__ */ ae(Ca, { children: [
    Se,
    be
  ] }) });
});
kw.displayName = "Toggle";
kw.propTypes = {
  checked: l.bool,
  defaultChecked: l.bool,
  onChange: l.func,
  label: l.oneOfType([l.string, l.node]),
  title: l.oneOfType([l.string, l.node]),
  description: l.oneOfType([l.string, l.node]),
  titlePosition: l.oneOf(["top", "bottom", "left", "right"]),
  tposition: l.oneOf(["top", "bottom", "left", "right"]),
  position: l.oneOf(["top", "bottom", "left", "right"]),
  titleAlign: l.oneOf(["left", "center", "right"]),
  disabled: l.bool,
  readOnly: l.bool,
  name: l.string,
  value: l.oneOfType([l.string, l.number, l.bool]),
  color: l.string,
  trueColor: l.string,
  falseColor: l.string,
  colorTrue: l.string,
  colorFalse: l.string,
  activeColor: l.string,
  inactiveColor: l.string,
  size: l.oneOf(["small", "medium", "large"]),
  className: l.string,
  style: l.object,
  id: l.string
};
const R4 = "_container_1ffc4_9", M4 = "_fluid_1ffc4_31", D4 = "_labelRoot_1ffc4_49", L4 = "_labelText_1ffc4_73", F4 = "_labelRequired_1ffc4_81", $4 = "_infoIcon_1ffc4_91", B4 = "_controlBox_1ffc4_123", j4 = "_controlBoxMultiple_1ffc4_163", W4 = "_controlBoxOpen_1ffc4_189", z4 = "_controlBoxFocused_1ffc4_191", U4 = "_rounded_1ffc4_205", H4 = "_size_small_1ffc4_215", Y4 = "_searchInputSingle_1ffc4_241", q4 = "_placeholderSingle_1ffc4_257", V4 = "_selectedSingle_1ffc4_259", G4 = "_size_medium_1ffc4_271", K4 = "_size_large_1ffc4_297", Z4 = "_disabled_1ffc4_355", X4 = "_error_1ffc4_375", Q4 = "_errorMessage_1ffc4_395", J4 = "_contentAreaSingle_1ffc4_433", eB = "_fadedText_1ffc4_545", tB = "_hiddenText_1ffc4_553", nB = "_tagsWrapper_1ffc4_571", rB = "_tag_1ffc4_571", aB = "_tagText_1ffc4_641", oB = "_tagDeleteIcon_1ffc4_655", iB = "_placeholderMultiple_1ffc4_681", sB = "_searchInputMultiple_1ffc4_697", lB = "_actionIconsGroup_1ffc4_735", cB = "_clearButton_1ffc4_757", uB = "_chevronIcon_1ffc4_793", dB = "_chevronIconOpen_1ffc4_809", fB = "_spinnerIcon_1ffc4_819", pB = "_spin_1ffc4_819", hB = "_dropdownMenu_1ffc4_859", mB = "_menuItem_1ffc4_941", gB = "_menuItemHover_1ffc4_979", vB = "_menuItemActive_1ffc4_991", yB = "_menuItemDisabled_1ffc4_1003", bB = "_checkboxBox_1ffc4_1019", _B = "_checkboxBoxChecked_1ffc4_1057", wB = "_optionIcon_1ffc4_1077", xB = "_optionFlag_1ffc4_1125", EB = "_optionText_1ffc4_1135", CB = "_optionDescription_1ffc4_1153", OB = "_noResults_1ffc4_1167", ct = {
  container: R4,
  fluid: M4,
  labelRoot: D4,
  labelText: L4,
  labelRequired: F4,
  infoIcon: $4,
  controlBox: B4,
  controlBoxMultiple: j4,
  controlBoxOpen: W4,
  controlBoxFocused: z4,
  rounded: U4,
  size_small: H4,
  searchInputSingle: Y4,
  placeholderSingle: q4,
  selectedSingle: V4,
  size_medium: G4,
  size_large: K4,
  disabled: Z4,
  error: X4,
  errorMessage: Q4,
  contentAreaSingle: J4,
  fadedText: eB,
  hiddenText: tB,
  tagsWrapper: nB,
  tag: rB,
  tagText: aB,
  tagDeleteIcon: oB,
  placeholderMultiple: iB,
  searchInputMultiple: sB,
  actionIconsGroup: lB,
  clearButton: cB,
  chevronIcon: uB,
  chevronIconOpen: dB,
  spinnerIcon: fB,
  spin: pB,
  dropdownMenu: hB,
  menuItem: mB,
  menuItemHover: gB,
  menuItemActive: vB,
  menuItemDisabled: yB,
  checkboxBox: bB,
  checkboxBoxChecked: _B,
  optionIcon: wB,
  optionFlag: xB,
  optionText: EB,
  optionDescription: CB,
  noResults: OB
}, Nw = ({ children: e }) => e || null;
Nw.propTypes = {
  children: l.node
};
const Iw = ({ children: e }) => e || null;
Iw.propTypes = {
  children: l.node
};
const Aw = ({ children: e }) => e || null;
Aw.propTypes = {
  children: l.node
};
const SB = () => null, qs = pc((e, t) => {
  const {
    label: n,
    infoLabel: r,
    hint: o,
    hintWide: s = !1,
    popupPosition: u = "top center",
    labelClassName: c = "",
    required: d = !1,
    error: p = !1,
    errorMessage: h,
    multiple: m = !1,
    checkbox: g = !1,
    useCheckbox: y = !1,
    search: b = !0,
    clearable: _ = !0,
    fluid: w = !0,
    disabled: k = !1,
    loading: F = !1,
    rounded: E = !1,
    size: I = "medium",
    options: S = [],
    value: P,
    defaultValue: C,
    onChange: T,
    placeholder: A = "Seleccionar...",
    noResultsMessage: B = "No se encontraron resultados",
    className: H = "",
    style: ne = {},
    id: U,
    name: re,
    onOpen: he,
    onClose: ge,
    ...Ne
  } = e, le = Nn(null), me = Nn(null);
  YI(t, () => le.current);
  const X = !!(g || y), te = !!(m || X), oe = P !== void 0, [be, Se] = ot(() => C !== void 0 ? C : te ? [] : ""), ye = oe ? P : be, fe = te ? Array.isArray(ye) ? ye : ye != null && ye !== "" ? [ye] : [] : [], [Ce, De] = ot(!1), [W, z] = ot(""), [$, D] = ot(-1), G = U ? `${U}-menu` : "custom-dropdown-menu";
  Vt(() => {
    const Te = (ie) => {
      le.current && !le.current.contains(ie.target) && (De(!1), z(""), D(-1), ge && ge(ie, { ...e, value: ye }));
    };
    return document.addEventListener("mousedown", Te), () => {
      document.removeEventListener("mousedown", Te);
    };
  }, [ye, ge, e]);
  const K = S.filter((Te) => te && !X && fe.includes(Te.value) ? !1 : !b || !W.trim() ? !0 : (typeof Te.text == "string" ? Te.text : String(Te.text || "")).toLowerCase().includes(W.toLowerCase())), se = (Te) => {
    k || (De(!0), D(-1), b && me.current && me.current.focus(), he && he(Te, { ...e, value: ye }));
  }, Ie = (Te) => {
    De(!1), z(""), D(-1), ge && ge(Te, { ...e, value: ye });
  }, pe = (Te) => {
    k || (Ce ? Ie(Te) : se(Te));
  }, Ee = (Te, ie) => {
    if (!(k || ie.disabled))
      if (te) {
        let tt;
        X ? tt = fe.includes(ie.value) ? fe.filter((ft) => ft !== ie.value) : [...fe, ie.value] : (tt = [...fe, ie.value], z("")), oe || Se(tt), T && T(Te, {
          ...e,
          value: tt,
          selectedOption: ie
        }), X && me.current ? me.current.focus() : X || De(!1);
      } else
        oe || Se(ie.value), T && T(Te, {
          ...e,
          value: ie.value,
          selectedOption: ie
        }), De(!1), z("");
  }, de = (Te, ie) => {
    if (Te.stopPropagation(), k)
      return;
    const tt = fe.filter((xt) => xt !== ie);
    oe || Se(tt), T && T(Te, {
      ...e,
      value: tt
    });
  }, q = (Te) => {
    if (Te.stopPropagation(), k)
      return;
    const ie = te ? [] : "";
    oe || Se(ie), z(""), T && T(Te, {
      ...e,
      value: ie
    });
  }, ee = (Te) => {
    if (!k)
      if (Te.key === "ArrowDown") {
        if (Te.preventDefault(), !Ce) {
          se(Te);
          return;
        }
        D((ie) => {
          const tt = ie + 1;
          return tt >= K.length ? 0 : tt;
        });
      } else if (Te.key === "ArrowUp") {
        if (Te.preventDefault(), !Ce) {
          se(Te);
          return;
        }
        D((ie) => {
          const tt = ie - 1;
          return tt < 0 ? K.length - 1 : tt;
        });
      } else Te.key === "Enter" ? (Te.preventDefault(), Ce ? $ >= 0 && $ < K.length && Ee(Te, K[$]) : se(Te)) : Te.key === "Escape" && (Te.preventDefault(), Ie(Te));
  }, we = te ? fe.length > 0 : ye != null && ye !== "", ke = _ && we && !k, Ae = te ? null : S.find((Te) => String(Te.value) === String(ye)), je = () => {
    if (!n)
      return null;
    if (J.isValidElement(n))
      return n;
    const Te = r || o;
    return /* @__PURE__ */ ae("label", { htmlFor: U, className: `${ct.labelRoot} ${c}`.trim(), children: [
      /* @__PURE__ */ O("span", { className: ct.labelText, children: n }),
      d ? /* @__PURE__ */ O("span", { className: ct.labelRequired, children: " *" }) : null,
      Te ? /* @__PURE__ */ O(
        ur,
        {
          wide: s ? "very" : !0,
          hoverable: s,
          position: u,
          content: Te,
          trigger: /* @__PURE__ */ O(We, { name: "info circle", className: ct.infoIcon })
        }
      ) : null
    ] });
  }, $e = () => h ? /* @__PURE__ */ ae("div", { className: ct.errorMessage, children: [
    /* @__PURE__ */ O(We, { name: "exclamation circle" }),
    /* @__PURE__ */ O("span", { children: h })
  ] }) : null, et = ct[`size_${I}`] || ct.size_medium, Ze = !!(p || h), Ke = [
    ct.container,
    w ? ct.fluid : "",
    E ? ct.rounded : "",
    et,
    k ? ct.disabled : "",
    Ze ? ct.error : "",
    H
  ].filter(Boolean).join(" "), Ve = [ct.controlBox, te ? ct.controlBoxMultiple : "", Ce ? ct.controlBoxOpen : ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ ae("div", { className: Ke, style: ne, ref: le, onKeyDown: ee, ...Ne, children: [
    je(),
    /* @__PURE__ */ ae(
      "div",
      {
        className: Ve,
        onClick: pe,
        role: "combobox",
        "aria-expanded": Ce,
        "aria-controls": G,
        "aria-haspopup": "listbox",
        tabIndex: k ? -1 : 0,
        children: [
          !te && /* @__PURE__ */ ae("div", { className: ct.contentAreaSingle, children: [
            !Ae && /* @__PURE__ */ O("span", { className: `${ct.placeholderSingle} ${Ce && W ? ct.hiddenText : ""}`, children: A }),
            Ae && /* @__PURE__ */ ae("span", { className: `${ct.selectedSingle} ${Ce && W ? ct.fadedText : ""}`, children: [
              Ae.icon && /* @__PURE__ */ O(We, { name: Ae.icon, className: ct.optionIcon }),
              Ae.flag && /* @__PURE__ */ O("i", { className: `${Ae.flag} flag ${ct.optionFlag}` }),
              /* @__PURE__ */ O("span", { className: ct.optionText, children: Ae.text })
            ] }),
            b && /* @__PURE__ */ O(
              "input",
              {
                ref: me,
                type: "text",
                name: re,
                id: U,
                className: ct.searchInputSingle,
                value: Ce ? W : "",
                onChange: (Te) => z(Te.target.value),
                onClick: (Te) => {
                  Te.stopPropagation(), Ce || se(Te);
                },
                disabled: k,
                autoComplete: "off",
                "aria-label": n ? String(n) : A
              }
            )
          ] }),
          te && /* @__PURE__ */ ae("div", { className: ct.tagsWrapper, children: [
            fe.map((Te) => {
              const ie = S.find((tt) => tt.value === Te) || { text: Te };
              return /* @__PURE__ */ ae("span", { className: ct.tag, children: [
                ie.icon && /* @__PURE__ */ O(We, { name: ie.icon, className: ct.optionIcon }),
                ie.flag && /* @__PURE__ */ O("i", { className: `${ie.flag} flag ${ct.optionFlag}` }),
                /* @__PURE__ */ O("span", { className: ct.tagText, children: ie.text }),
                !k && /* @__PURE__ */ O(
                  We,
                  {
                    name: "close",
                    className: ct.tagDeleteIcon,
                    onClick: (tt) => de(tt, Te)
                  }
                )
              ] }, Te);
            }),
            fe.length === 0 && !W && /* @__PURE__ */ O("span", { className: ct.placeholderMultiple, children: A }),
            b && /* @__PURE__ */ O(
              "input",
              {
                ref: me,
                type: "text",
                name: re,
                id: U,
                className: ct.searchInputMultiple,
                value: W,
                onChange: (Te) => z(Te.target.value),
                onClick: (Te) => {
                  Te.stopPropagation(), Ce || se(Te);
                },
                disabled: k,
                autoComplete: "off",
                "aria-label": n ? String(n) : A
              }
            )
          ] }),
          /* @__PURE__ */ ae("div", { className: ct.actionIconsGroup, children: [
            F && /* @__PURE__ */ O(We, { name: "spinner", className: ct.spinnerIcon }),
            ke && !F && /* @__PURE__ */ O("button", { type: "button", className: ct.clearButton, onClick: q, title: "Limpiar selección", "aria-label": "Limpiar", children: /* @__PURE__ */ O(We, { name: "close" }) }),
            /* @__PURE__ */ O(We, { name: "dropdown", className: `${ct.chevronIcon} ${Ce ? ct.chevronIconOpen : ""}` })
          ] })
        ]
      }
    ),
    Ce && !k && /* @__PURE__ */ O("ul", { className: ct.dropdownMenu, id: G, role: "listbox", children: K.length === 0 ? /* @__PURE__ */ O("li", { className: ct.noResults, children: B }) : K.map((Te, ie) => {
      const tt = te ? fe.includes(Te.value) : String(ye) === String(Te.value), xt = $ === ie, ft = [
        ct.menuItem,
        tt ? ct.menuItemActive : "",
        xt ? ct.menuItemHover : "",
        Te.disabled ? ct.menuItemDisabled : ""
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ ae(
        "li",
        {
          className: ft,
          onClick: (rt) => Ee(rt, Te),
          role: "option",
          "aria-selected": tt,
          children: [
            X && /* @__PURE__ */ O("span", { className: `${ct.checkboxBox} ${tt ? ct.checkboxBoxChecked : ""}` }),
            Te.icon && /* @__PURE__ */ O(We, { name: Te.icon, className: ct.optionIcon }),
            Te.flag && /* @__PURE__ */ O("i", { className: `${Te.flag} flag ${ct.optionFlag}` }),
            /* @__PURE__ */ O("span", { className: ct.optionText, children: Te.text }),
            Te.description && /* @__PURE__ */ O("span", { className: ct.optionDescription, children: Te.description })
          ]
        },
        Te.key || Te.value
      );
    }) }),
    $e()
  ] });
});
qs.displayName = "Dropdown";
qs.Item = Nw;
qs.Menu = Iw;
qs.Header = Aw;
qs.Divider = SB;
qs.propTypes = {
  label: l.oneOfType([l.string, l.node]),
  infoLabel: l.oneOfType([l.string, l.node]),
  hint: l.oneOfType([l.string, l.node]),
  hintWide: l.bool,
  popupPosition: l.string,
  labelClassName: l.string,
  required: l.bool,
  error: l.bool,
  errorMessage: l.oneOfType([l.string, l.node]),
  multiple: l.bool,
  checkbox: l.bool,
  useCheckbox: l.bool,
  search: l.bool,
  clearable: l.bool,
  fluid: l.bool,
  disabled: l.bool,
  loading: l.bool,
  rounded: l.bool,
  size: l.oneOf(["small", "medium", "large"]),
  options: l.arrayOf(
    l.shape({
      key: l.oneOfType([l.string, l.number]),
      value: l.oneOfType([l.string, l.number, l.bool]).isRequired,
      text: l.oneOfType([l.string, l.node]).isRequired,
      icon: l.oneOfType([l.string, l.node]),
      flag: l.string,
      description: l.oneOfType([l.string, l.node]),
      disabled: l.bool
    })
  ),
  value: l.oneOfType([l.string, l.number, l.array, l.bool]),
  defaultValue: l.oneOfType([l.string, l.number, l.array, l.bool]),
  onChange: l.func,
  placeholder: l.string,
  noResultsMessage: l.oneOfType([l.string, l.node]),
  className: l.string,
  style: l.object,
  id: l.string,
  name: l.string,
  onOpen: l.func,
  onClose: l.func
};
var td = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
td.exports;
(function(e, t) {
  (function() {
    var n, r = "4.18.1", o = 200, s = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", u = "Expected a function", c = "Invalid `variable` option passed into `_.template`", d = "Invalid `imports` option passed into `_.template`", p = "__lodash_hash_undefined__", h = 500, m = "__lodash_placeholder__", g = 1, y = 2, b = 4, _ = 1, w = 2, k = 1, F = 2, E = 4, I = 8, S = 16, P = 32, C = 64, T = 128, A = 256, B = 512, H = 30, ne = "...", U = 800, re = 16, he = 1, ge = 2, Ne = 3, le = 1 / 0, me = 9007199254740991, X = 17976931348623157e292, te = NaN, oe = 4294967295, be = oe - 1, Se = oe >>> 1, ye = [
      ["ary", T],
      ["bind", k],
      ["bindKey", F],
      ["curry", I],
      ["curryRight", S],
      ["flip", B],
      ["partial", P],
      ["partialRight", C],
      ["rearg", A]
    ], fe = "[object Arguments]", Ce = "[object Array]", De = "[object AsyncFunction]", W = "[object Boolean]", z = "[object Date]", $ = "[object DOMException]", D = "[object Error]", G = "[object Function]", K = "[object GeneratorFunction]", se = "[object Map]", Ie = "[object Number]", pe = "[object Null]", Ee = "[object Object]", de = "[object Promise]", q = "[object Proxy]", ee = "[object RegExp]", we = "[object Set]", ke = "[object String]", Ae = "[object Symbol]", je = "[object Undefined]", $e = "[object WeakMap]", et = "[object WeakSet]", Ze = "[object ArrayBuffer]", Ke = "[object DataView]", Ve = "[object Float32Array]", Te = "[object Float64Array]", ie = "[object Int8Array]", tt = "[object Int16Array]", xt = "[object Int32Array]", ft = "[object Uint8Array]", rt = "[object Uint8ClampedArray]", Zt = "[object Uint16Array]", Ue = "[object Uint32Array]", $t = /\b__p \+= '';/g, at = /\b(__p \+=) '' \+/g, dn = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Xn = /&(?:amp|lt|gt|quot|#39);/g, la = /[&<>"']/g, Rc = RegExp(Xn.source), ca = RegExp(la.source), pC = /<%-([\s\S]+?)%>/g, hC = /<%([\s\S]+?)%>/g, Ng = /<%=([\s\S]+?)%>/g, mC = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, gC = /^\w*$/, vC = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, nf = /[\\^$.*+?()[\]{}|]/g, yC = RegExp(nf.source), rf = /^\s+/, bC = /\s/, _C = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, wC = /\{\n\/\* \[wrapped with (.+)\] \*/, xC = /,? & /, EC = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Ig = /[()=,{}\[\]\/\s]/, CC = /\\(\\)?/g, OC = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Ag = /\w*$/, SC = /^[-+]0x[0-9a-f]+$/i, TC = /^0b[01]+$/i, PC = /^\[object .+?Constructor\]$/, kC = /^0o[0-7]+$/i, NC = /^(?:0|[1-9]\d*)$/, IC = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Mc = /($^)/, AC = /['\n\r\u2028\u2029\\]/g, Dc = "\\ud800-\\udfff", RC = "\\u0300-\\u036f", MC = "\\ufe20-\\ufe2f", DC = "\\u20d0-\\u20ff", Rg = RC + MC + DC, Mg = "\\u2700-\\u27bf", Dg = "a-z\\xdf-\\xf6\\xf8-\\xff", LC = "\\xac\\xb1\\xd7\\xf7", FC = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", $C = "\\u2000-\\u206f", BC = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Lg = "A-Z\\xc0-\\xd6\\xd8-\\xde", Fg = "\\ufe0e\\ufe0f", $g = LC + FC + $C + BC, af = "['’]", jC = "[" + Dc + "]", Bg = "[" + $g + "]", Lc = "[" + Rg + "]", jg = "\\d+", WC = "[" + Mg + "]", Wg = "[" + Dg + "]", zg = "[^" + Dc + $g + jg + Mg + Dg + Lg + "]", of = "\\ud83c[\\udffb-\\udfff]", zC = "(?:" + Lc + "|" + of + ")", Ug = "[^" + Dc + "]", sf = "(?:\\ud83c[\\udde6-\\uddff]){2}", lf = "[\\ud800-\\udbff][\\udc00-\\udfff]", Hi = "[" + Lg + "]", Hg = "\\u200d", Yg = "(?:" + Wg + "|" + zg + ")", UC = "(?:" + Hi + "|" + zg + ")", qg = "(?:" + af + "(?:d|ll|m|re|s|t|ve))?", Vg = "(?:" + af + "(?:D|LL|M|RE|S|T|VE))?", Gg = zC + "?", Kg = "[" + Fg + "]?", HC = "(?:" + Hg + "(?:" + [Ug, sf, lf].join("|") + ")" + Kg + Gg + ")*", YC = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", qC = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Zg = Kg + Gg + HC, VC = "(?:" + [WC, sf, lf].join("|") + ")" + Zg, GC = "(?:" + [Ug + Lc + "?", Lc, sf, lf, jC].join("|") + ")", KC = RegExp(af, "g"), ZC = RegExp(Lc, "g"), cf = RegExp(of + "(?=" + of + ")|" + GC + Zg, "g"), XC = RegExp([
      Hi + "?" + Wg + "+" + qg + "(?=" + [Bg, Hi, "$"].join("|") + ")",
      UC + "+" + Vg + "(?=" + [Bg, Hi + Yg, "$"].join("|") + ")",
      Hi + "?" + Yg + "+" + qg,
      Hi + "+" + Vg,
      qC,
      YC,
      jg,
      VC
    ].join("|"), "g"), QC = RegExp("[" + Hg + Dc + Rg + Fg + "]"), JC = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, eO = [
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
    ], tO = -1, tn = {};
    tn[Ve] = tn[Te] = tn[ie] = tn[tt] = tn[xt] = tn[ft] = tn[rt] = tn[Zt] = tn[Ue] = !0, tn[fe] = tn[Ce] = tn[Ze] = tn[W] = tn[Ke] = tn[z] = tn[D] = tn[G] = tn[se] = tn[Ie] = tn[Ee] = tn[ee] = tn[we] = tn[ke] = tn[$e] = !1;
    var Qt = {};
    Qt[fe] = Qt[Ce] = Qt[Ze] = Qt[Ke] = Qt[W] = Qt[z] = Qt[Ve] = Qt[Te] = Qt[ie] = Qt[tt] = Qt[xt] = Qt[se] = Qt[Ie] = Qt[Ee] = Qt[ee] = Qt[we] = Qt[ke] = Qt[Ae] = Qt[ft] = Qt[rt] = Qt[Zt] = Qt[Ue] = !0, Qt[D] = Qt[G] = Qt[$e] = !1;
    var nO = {
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
    }, rO = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, aO = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, oO = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, iO = parseFloat, sO = parseInt, Xg = typeof is == "object" && is && is.Object === Object && is, lO = typeof self == "object" && self && self.Object === Object && self, An = Xg || lO || Function("return this")(), uf = t && !t.nodeType && t, ri = uf && !0 && e && !e.nodeType && e, Qg = ri && ri.exports === uf, df = Qg && Xg.process, Sr = function() {
      try {
        var Z = ri && ri.require && ri.require("util").types;
        return Z || df && df.binding && df.binding("util");
      } catch {
      }
    }(), Jg = Sr && Sr.isArrayBuffer, ev = Sr && Sr.isDate, tv = Sr && Sr.isMap, nv = Sr && Sr.isRegExp, rv = Sr && Sr.isSet, av = Sr && Sr.isTypedArray;
    function fr(Z, ve, ce) {
      switch (ce.length) {
        case 0:
          return Z.call(ve);
        case 1:
          return Z.call(ve, ce[0]);
        case 2:
          return Z.call(ve, ce[0], ce[1]);
        case 3:
          return Z.call(ve, ce[0], ce[1], ce[2]);
      }
      return Z.apply(ve, ce);
    }
    function cO(Z, ve, ce, He) {
      for (var pt = -1, Ft = Z == null ? 0 : Z.length; ++pt < Ft; ) {
        var _n = Z[pt];
        ve(He, _n, ce(_n), Z);
      }
      return He;
    }
    function pr(Z, ve) {
      for (var ce = -1, He = Z == null ? 0 : Z.length; ++ce < He && ve(Z[ce], ce, Z) !== !1; )
        ;
      return Z;
    }
    function uO(Z, ve) {
      for (var ce = Z == null ? 0 : Z.length; ce-- && ve(Z[ce], ce, Z) !== !1; )
        ;
      return Z;
    }
    function ov(Z, ve) {
      for (var ce = -1, He = Z == null ? 0 : Z.length; ++ce < He; )
        if (!ve(Z[ce], ce, Z))
          return !1;
      return !0;
    }
    function mo(Z, ve) {
      for (var ce = -1, He = Z == null ? 0 : Z.length, pt = 0, Ft = []; ++ce < He; ) {
        var _n = Z[ce];
        ve(_n, ce, Z) && (Ft[pt++] = _n);
      }
      return Ft;
    }
    function Fc(Z, ve) {
      var ce = Z == null ? 0 : Z.length;
      return !!ce && Yi(Z, ve, 0) > -1;
    }
    function ff(Z, ve, ce) {
      for (var He = -1, pt = Z == null ? 0 : Z.length; ++He < pt; )
        if (ce(ve, Z[He]))
          return !0;
      return !1;
    }
    function ln(Z, ve) {
      for (var ce = -1, He = Z == null ? 0 : Z.length, pt = Array(He); ++ce < He; )
        pt[ce] = ve(Z[ce], ce, Z);
      return pt;
    }
    function go(Z, ve) {
      for (var ce = -1, He = ve.length, pt = Z.length; ++ce < He; )
        Z[pt + ce] = ve[ce];
      return Z;
    }
    function pf(Z, ve, ce, He) {
      var pt = -1, Ft = Z == null ? 0 : Z.length;
      for (He && Ft && (ce = Z[++pt]); ++pt < Ft; )
        ce = ve(ce, Z[pt], pt, Z);
      return ce;
    }
    function dO(Z, ve, ce, He) {
      var pt = Z == null ? 0 : Z.length;
      for (He && pt && (ce = Z[--pt]); pt--; )
        ce = ve(ce, Z[pt], pt, Z);
      return ce;
    }
    function hf(Z, ve) {
      for (var ce = -1, He = Z == null ? 0 : Z.length; ++ce < He; )
        if (ve(Z[ce], ce, Z))
          return !0;
      return !1;
    }
    var fO = mf("length");
    function pO(Z) {
      return Z.split("");
    }
    function hO(Z) {
      return Z.match(EC) || [];
    }
    function iv(Z, ve, ce) {
      var He;
      return ce(Z, function(pt, Ft, _n) {
        if (ve(pt, Ft, _n))
          return He = Ft, !1;
      }), He;
    }
    function $c(Z, ve, ce, He) {
      for (var pt = Z.length, Ft = ce + (He ? 1 : -1); He ? Ft-- : ++Ft < pt; )
        if (ve(Z[Ft], Ft, Z))
          return Ft;
      return -1;
    }
    function Yi(Z, ve, ce) {
      return ve === ve ? SO(Z, ve, ce) : $c(Z, sv, ce);
    }
    function mO(Z, ve, ce, He) {
      for (var pt = ce - 1, Ft = Z.length; ++pt < Ft; )
        if (He(Z[pt], ve))
          return pt;
      return -1;
    }
    function sv(Z) {
      return Z !== Z;
    }
    function lv(Z, ve) {
      var ce = Z == null ? 0 : Z.length;
      return ce ? vf(Z, ve) / ce : te;
    }
    function mf(Z) {
      return function(ve) {
        return ve == null ? n : ve[Z];
      };
    }
    function gf(Z) {
      return function(ve) {
        return Z == null ? n : Z[ve];
      };
    }
    function cv(Z, ve, ce, He, pt) {
      return pt(Z, function(Ft, _n, Xt) {
        ce = He ? (He = !1, Ft) : ve(ce, Ft, _n, Xt);
      }), ce;
    }
    function gO(Z, ve) {
      var ce = Z.length;
      for (Z.sort(ve); ce--; )
        Z[ce] = Z[ce].value;
      return Z;
    }
    function vf(Z, ve) {
      for (var ce, He = -1, pt = Z.length; ++He < pt; ) {
        var Ft = ve(Z[He]);
        Ft !== n && (ce = ce === n ? Ft : ce + Ft);
      }
      return ce;
    }
    function yf(Z, ve) {
      for (var ce = -1, He = Array(Z); ++ce < Z; )
        He[ce] = ve(ce);
      return He;
    }
    function vO(Z, ve) {
      return ln(ve, function(ce) {
        return [ce, Z[ce]];
      });
    }
    function uv(Z) {
      return Z && Z.slice(0, hv(Z) + 1).replace(rf, "");
    }
    function hr(Z) {
      return function(ve) {
        return Z(ve);
      };
    }
    function bf(Z, ve) {
      return ln(ve, function(ce) {
        return Z[ce];
      });
    }
    function Qs(Z, ve) {
      return Z.has(ve);
    }
    function dv(Z, ve) {
      for (var ce = -1, He = Z.length; ++ce < He && Yi(ve, Z[ce], 0) > -1; )
        ;
      return ce;
    }
    function fv(Z, ve) {
      for (var ce = Z.length; ce-- && Yi(ve, Z[ce], 0) > -1; )
        ;
      return ce;
    }
    function yO(Z, ve) {
      for (var ce = Z.length, He = 0; ce--; )
        Z[ce] === ve && ++He;
      return He;
    }
    var bO = gf(nO), _O = gf(rO);
    function wO(Z) {
      return "\\" + oO[Z];
    }
    function xO(Z, ve) {
      return Z == null ? n : Z[ve];
    }
    function qi(Z) {
      return QC.test(Z);
    }
    function EO(Z) {
      return JC.test(Z);
    }
    function CO(Z) {
      for (var ve, ce = []; !(ve = Z.next()).done; )
        ce.push(ve.value);
      return ce;
    }
    function _f(Z) {
      var ve = -1, ce = Array(Z.size);
      return Z.forEach(function(He, pt) {
        ce[++ve] = [pt, He];
      }), ce;
    }
    function pv(Z, ve) {
      return function(ce) {
        return Z(ve(ce));
      };
    }
    function vo(Z, ve) {
      for (var ce = -1, He = Z.length, pt = 0, Ft = []; ++ce < He; ) {
        var _n = Z[ce];
        (_n === ve || _n === m) && (Z[ce] = m, Ft[pt++] = ce);
      }
      return Ft;
    }
    function Bc(Z) {
      var ve = -1, ce = Array(Z.size);
      return Z.forEach(function(He) {
        ce[++ve] = He;
      }), ce;
    }
    function OO(Z) {
      var ve = -1, ce = Array(Z.size);
      return Z.forEach(function(He) {
        ce[++ve] = [He, He];
      }), ce;
    }
    function SO(Z, ve, ce) {
      for (var He = ce - 1, pt = Z.length; ++He < pt; )
        if (Z[He] === ve)
          return He;
      return -1;
    }
    function TO(Z, ve, ce) {
      for (var He = ce + 1; He--; )
        if (Z[He] === ve)
          return He;
      return He;
    }
    function Vi(Z) {
      return qi(Z) ? kO(Z) : fO(Z);
    }
    function qr(Z) {
      return qi(Z) ? NO(Z) : pO(Z);
    }
    function hv(Z) {
      for (var ve = Z.length; ve-- && bC.test(Z.charAt(ve)); )
        ;
      return ve;
    }
    var PO = gf(aO);
    function kO(Z) {
      for (var ve = cf.lastIndex = 0; cf.test(Z); )
        ++ve;
      return ve;
    }
    function NO(Z) {
      return Z.match(cf) || [];
    }
    function IO(Z) {
      return Z.match(XC) || [];
    }
    var AO = function Z(ve) {
      ve = ve == null ? An : Gi.defaults(An.Object(), ve, Gi.pick(An, eO));
      var ce = ve.Array, He = ve.Date, pt = ve.Error, Ft = ve.Function, _n = ve.Math, Xt = ve.Object, wf = ve.RegExp, RO = ve.String, Tr = ve.TypeError, jc = ce.prototype, MO = Ft.prototype, Ki = Xt.prototype, Wc = ve["__core-js_shared__"], zc = MO.toString, Bt = Ki.hasOwnProperty, DO = 0, mv = function() {
        var a = /[^.]+$/.exec(Wc && Wc.keys && Wc.keys.IE_PROTO || "");
        return a ? "Symbol(src)_1." + a : "";
      }(), Uc = Ki.toString, LO = zc.call(Xt), FO = An._, $O = wf(
        "^" + zc.call(Bt).replace(nf, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Hc = Qg ? ve.Buffer : n, yo = ve.Symbol, Yc = ve.Uint8Array, gv = Hc ? Hc.allocUnsafe : n, qc = pv(Xt.getPrototypeOf, Xt), vv = Xt.create, yv = Ki.propertyIsEnumerable, Vc = jc.splice, bv = yo ? yo.isConcatSpreadable : n, Js = yo ? yo.iterator : n, ai = yo ? yo.toStringTag : n, Gc = function() {
        try {
          var a = ci(Xt, "defineProperty");
          return a({}, "", {}), a;
        } catch {
        }
      }(), BO = ve.clearTimeout !== An.clearTimeout && ve.clearTimeout, jO = He && He.now !== An.Date.now && He.now, WO = ve.setTimeout !== An.setTimeout && ve.setTimeout, Kc = _n.ceil, Zc = _n.floor, xf = Xt.getOwnPropertySymbols, zO = Hc ? Hc.isBuffer : n, _v = ve.isFinite, UO = jc.join, HO = pv(Xt.keys, Xt), wn = _n.max, Dn = _n.min, YO = He.now, qO = ve.parseInt, wv = _n.random, VO = jc.reverse, Ef = ci(ve, "DataView"), el = ci(ve, "Map"), Cf = ci(ve, "Promise"), Zi = ci(ve, "Set"), tl = ci(ve, "WeakMap"), nl = ci(Xt, "create"), Xc = tl && new tl(), Xi = {}, GO = ui(Ef), KO = ui(el), ZO = ui(Cf), XO = ui(Zi), QO = ui(tl), Qc = yo ? yo.prototype : n, rl = Qc ? Qc.valueOf : n, xv = Qc ? Qc.toString : n;
      function N(a) {
        if (pn(a) && !mt(a) && !(a instanceof Pt)) {
          if (a instanceof Pr)
            return a;
          if (Bt.call(a, "__wrapped__"))
            return Ey(a);
        }
        return new Pr(a);
      }
      var Qi = /* @__PURE__ */ function() {
        function a() {
        }
        return function(i) {
          if (!fn(i))
            return {};
          if (vv)
            return vv(i);
          a.prototype = i;
          var f = new a();
          return a.prototype = n, f;
        };
      }();
      function Jc() {
      }
      function Pr(a, i) {
        this.__wrapped__ = a, this.__actions__ = [], this.__chain__ = !!i, this.__index__ = 0, this.__values__ = n;
      }
      N.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: pC,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: hC,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: Ng,
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
          _: N
        }
      }, N.prototype = Jc.prototype, N.prototype.constructor = N, Pr.prototype = Qi(Jc.prototype), Pr.prototype.constructor = Pr;
      function Pt(a) {
        this.__wrapped__ = a, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = oe, this.__views__ = [];
      }
      function JO() {
        var a = new Pt(this.__wrapped__);
        return a.__actions__ = Qn(this.__actions__), a.__dir__ = this.__dir__, a.__filtered__ = this.__filtered__, a.__iteratees__ = Qn(this.__iteratees__), a.__takeCount__ = this.__takeCount__, a.__views__ = Qn(this.__views__), a;
      }
      function eS() {
        if (this.__filtered__) {
          var a = new Pt(this);
          a.__dir__ = -1, a.__filtered__ = !0;
        } else
          a = this.clone(), a.__dir__ *= -1;
        return a;
      }
      function tS() {
        var a = this.__wrapped__.value(), i = this.__dir__, f = mt(a), v = i < 0, x = f ? a.length : 0, M = pT(0, x, this.__views__), j = M.start, Y = M.end, Q = Y - j, _e = v ? Y : j - 1, xe = this.__iteratees__, Pe = xe.length, ze = 0, Qe = Dn(Q, this.__takeCount__);
        if (!f || !v && x == Q && Qe == Q)
          return qv(a, this.__actions__);
        var lt = [];
        e:
          for (; Q-- && ze < Qe; ) {
            _e += i;
            for (var bt = -1, it = a[_e]; ++bt < Pe; ) {
              var Ot = xe[bt], It = Ot.iteratee, vr = Ot.type, Un = It(it);
              if (vr == ge)
                it = Un;
              else if (!Un) {
                if (vr == he)
                  continue e;
                break e;
              }
            }
            lt[ze++] = it;
          }
        return lt;
      }
      Pt.prototype = Qi(Jc.prototype), Pt.prototype.constructor = Pt;
      function oi(a) {
        var i = -1, f = a == null ? 0 : a.length;
        for (this.clear(); ++i < f; ) {
          var v = a[i];
          this.set(v[0], v[1]);
        }
      }
      function nS() {
        this.__data__ = nl ? nl(null) : {}, this.size = 0;
      }
      function rS(a) {
        var i = this.has(a) && delete this.__data__[a];
        return this.size -= i ? 1 : 0, i;
      }
      function aS(a) {
        var i = this.__data__;
        if (nl) {
          var f = i[a];
          return f === p ? n : f;
        }
        return Bt.call(i, a) ? i[a] : n;
      }
      function oS(a) {
        var i = this.__data__;
        return nl ? i[a] !== n : Bt.call(i, a);
      }
      function iS(a, i) {
        var f = this.__data__;
        return this.size += this.has(a) ? 0 : 1, f[a] = nl && i === n ? p : i, this;
      }
      oi.prototype.clear = nS, oi.prototype.delete = rS, oi.prototype.get = aS, oi.prototype.has = oS, oi.prototype.set = iS;
      function Ra(a) {
        var i = -1, f = a == null ? 0 : a.length;
        for (this.clear(); ++i < f; ) {
          var v = a[i];
          this.set(v[0], v[1]);
        }
      }
      function sS() {
        this.__data__ = [], this.size = 0;
      }
      function lS(a) {
        var i = this.__data__, f = eu(i, a);
        if (f < 0)
          return !1;
        var v = i.length - 1;
        return f == v ? i.pop() : Vc.call(i, f, 1), --this.size, !0;
      }
      function cS(a) {
        var i = this.__data__, f = eu(i, a);
        return f < 0 ? n : i[f][1];
      }
      function uS(a) {
        return eu(this.__data__, a) > -1;
      }
      function dS(a, i) {
        var f = this.__data__, v = eu(f, a);
        return v < 0 ? (++this.size, f.push([a, i])) : f[v][1] = i, this;
      }
      Ra.prototype.clear = sS, Ra.prototype.delete = lS, Ra.prototype.get = cS, Ra.prototype.has = uS, Ra.prototype.set = dS;
      function Ma(a) {
        var i = -1, f = a == null ? 0 : a.length;
        for (this.clear(); ++i < f; ) {
          var v = a[i];
          this.set(v[0], v[1]);
        }
      }
      function fS() {
        this.size = 0, this.__data__ = {
          hash: new oi(),
          map: new (el || Ra)(),
          string: new oi()
        };
      }
      function pS(a) {
        var i = fu(this, a).delete(a);
        return this.size -= i ? 1 : 0, i;
      }
      function hS(a) {
        return fu(this, a).get(a);
      }
      function mS(a) {
        return fu(this, a).has(a);
      }
      function gS(a, i) {
        var f = fu(this, a), v = f.size;
        return f.set(a, i), this.size += f.size == v ? 0 : 1, this;
      }
      Ma.prototype.clear = fS, Ma.prototype.delete = pS, Ma.prototype.get = hS, Ma.prototype.has = mS, Ma.prototype.set = gS;
      function ii(a) {
        var i = -1, f = a == null ? 0 : a.length;
        for (this.__data__ = new Ma(); ++i < f; )
          this.add(a[i]);
      }
      function vS(a) {
        return this.__data__.set(a, p), this;
      }
      function yS(a) {
        return this.__data__.has(a);
      }
      ii.prototype.add = ii.prototype.push = vS, ii.prototype.has = yS;
      function Vr(a) {
        var i = this.__data__ = new Ra(a);
        this.size = i.size;
      }
      function bS() {
        this.__data__ = new Ra(), this.size = 0;
      }
      function _S(a) {
        var i = this.__data__, f = i.delete(a);
        return this.size = i.size, f;
      }
      function wS(a) {
        return this.__data__.get(a);
      }
      function xS(a) {
        return this.__data__.has(a);
      }
      function ES(a, i) {
        var f = this.__data__;
        if (f instanceof Ra) {
          var v = f.__data__;
          if (!el || v.length < o - 1)
            return v.push([a, i]), this.size = ++f.size, this;
          f = this.__data__ = new Ma(v);
        }
        return f.set(a, i), this.size = f.size, this;
      }
      Vr.prototype.clear = bS, Vr.prototype.delete = _S, Vr.prototype.get = wS, Vr.prototype.has = xS, Vr.prototype.set = ES;
      function Ev(a, i) {
        var f = mt(a), v = !f && di(a), x = !f && !v && Eo(a), M = !f && !v && !x && ns(a), j = f || v || x || M, Y = j ? yf(a.length, RO) : [], Q = Y.length;
        for (var _e in a)
          (i || Bt.call(a, _e)) && !(j && // Safari 9 has enumerable `arguments.length` in strict mode.
          (_e == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          x && (_e == "offset" || _e == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          M && (_e == "buffer" || _e == "byteLength" || _e == "byteOffset") || // Skip index properties.
          Fa(_e, Q))) && Y.push(_e);
        return Y;
      }
      function Cv(a) {
        var i = a.length;
        return i ? a[Df(0, i - 1)] : n;
      }
      function CS(a, i) {
        return pu(Qn(a), si(i, 0, a.length));
      }
      function OS(a) {
        return pu(Qn(a));
      }
      function Of(a, i, f) {
        (f !== n && !Kr(a[i], f) || f === n && !(i in a)) && ua(a, i, f);
      }
      function al(a, i, f) {
        var v = a[i];
        (!(Bt.call(a, i) && Kr(v, f)) || f === n && !(i in a)) && ua(a, i, f);
      }
      function eu(a, i) {
        for (var f = a.length; f--; )
          if (Kr(a[f][0], i))
            return f;
        return -1;
      }
      function SS(a, i, f, v) {
        return bo(a, function(x, M, j) {
          i(v, x, f(x), j);
        }), v;
      }
      function Ov(a, i) {
        return a && fa(i, Sn(i), a);
      }
      function TS(a, i) {
        return a && fa(i, er(i), a);
      }
      function ua(a, i, f) {
        i == "__proto__" && Gc ? Gc(a, i, {
          configurable: !0,
          enumerable: !0,
          value: f,
          writable: !0
        }) : a[i] = f;
      }
      function Sf(a, i) {
        for (var f = -1, v = i.length, x = ce(v), M = a == null; ++f < v; )
          x[f] = M ? n : sp(a, i[f]);
        return x;
      }
      function si(a, i, f) {
        return a === a && (f !== n && (a = a <= f ? a : f), i !== n && (a = a >= i ? a : i)), a;
      }
      function kr(a, i, f, v, x, M) {
        var j, Y = i & g, Q = i & y, _e = i & b;
        if (f && (j = x ? f(a, v, x, M) : f(a)), j !== n)
          return j;
        if (!fn(a))
          return a;
        var xe = mt(a);
        if (xe) {
          if (j = mT(a), !Y)
            return Qn(a, j);
        } else {
          var Pe = Ln(a), ze = Pe == G || Pe == K;
          if (Eo(a))
            return Kv(a, Y);
          if (Pe == Ee || Pe == fe || ze && !x) {
            if (j = Q || ze ? {} : hy(a), !Y)
              return Q ? aT(a, TS(j, a)) : rT(a, Ov(j, a));
          } else {
            if (!Qt[Pe])
              return x ? a : {};
            j = gT(a, Pe, Y);
          }
        }
        M || (M = new Vr());
        var Qe = M.get(a);
        if (Qe)
          return Qe;
        M.set(a, j), Uy(a) ? a.forEach(function(it) {
          j.add(kr(it, i, f, it, a, M));
        }) : Wy(a) && a.forEach(function(it, Ot) {
          j.set(Ot, kr(it, i, f, Ot, a, M));
        });
        var lt = _e ? Q ? qf : Yf : Q ? er : Sn, bt = xe ? n : lt(a);
        return pr(bt || a, function(it, Ot) {
          bt && (Ot = it, it = a[Ot]), al(j, Ot, kr(it, i, f, Ot, a, M));
        }), j;
      }
      function PS(a) {
        var i = Sn(a);
        return function(f) {
          return Sv(f, a, i);
        };
      }
      function Sv(a, i, f) {
        var v = f.length;
        if (a == null)
          return !v;
        for (a = Xt(a); v--; ) {
          var x = f[v], M = i[x], j = a[x];
          if (j === n && !(x in a) || !M(j))
            return !1;
        }
        return !0;
      }
      function Tv(a, i, f) {
        if (typeof a != "function")
          throw new Tr(u);
        return dl(function() {
          a.apply(n, f);
        }, i);
      }
      function ol(a, i, f, v) {
        var x = -1, M = Fc, j = !0, Y = a.length, Q = [], _e = i.length;
        if (!Y)
          return Q;
        f && (i = ln(i, hr(f))), v ? (M = ff, j = !1) : i.length >= o && (M = Qs, j = !1, i = new ii(i));
        e:
          for (; ++x < Y; ) {
            var xe = a[x], Pe = f == null ? xe : f(xe);
            if (xe = v || xe !== 0 ? xe : 0, j && Pe === Pe) {
              for (var ze = _e; ze--; )
                if (i[ze] === Pe)
                  continue e;
              Q.push(xe);
            } else M(i, Pe, v) || Q.push(xe);
          }
        return Q;
      }
      var bo = ey(da), Pv = ey(Pf, !0);
      function kS(a, i) {
        var f = !0;
        return bo(a, function(v, x, M) {
          return f = !!i(v, x, M), f;
        }), f;
      }
      function tu(a, i, f) {
        for (var v = -1, x = a.length; ++v < x; ) {
          var M = a[v], j = i(M);
          if (j != null && (Y === n ? j === j && !gr(j) : f(j, Y)))
            var Y = j, Q = M;
        }
        return Q;
      }
      function NS(a, i, f, v) {
        var x = a.length;
        for (f = vt(f), f < 0 && (f = -f > x ? 0 : x + f), v = v === n || v > x ? x : vt(v), v < 0 && (v += x), v = f > v ? 0 : Yy(v); f < v; )
          a[f++] = i;
        return a;
      }
      function kv(a, i) {
        var f = [];
        return bo(a, function(v, x, M) {
          i(v, x, M) && f.push(v);
        }), f;
      }
      function Rn(a, i, f, v, x) {
        var M = -1, j = a.length;
        for (f || (f = yT), x || (x = []); ++M < j; ) {
          var Y = a[M];
          i > 0 && f(Y) ? i > 1 ? Rn(Y, i - 1, f, v, x) : go(x, Y) : v || (x[x.length] = Y);
        }
        return x;
      }
      var Tf = ty(), Nv = ty(!0);
      function da(a, i) {
        return a && Tf(a, i, Sn);
      }
      function Pf(a, i) {
        return a && Nv(a, i, Sn);
      }
      function nu(a, i) {
        return mo(i, function(f) {
          return $a(a[f]);
        });
      }
      function li(a, i) {
        i = wo(i, a);
        for (var f = 0, v = i.length; a != null && f < v; )
          a = a[Gr(i[f++])];
        return f && f == v ? a : n;
      }
      function Iv(a, i, f) {
        var v = i(a);
        return mt(a) ? v : go(v, f(a));
      }
      function Wn(a) {
        return a == null ? a === n ? je : pe : ai && ai in Xt(a) ? fT(a) : OT(a);
      }
      function kf(a, i) {
        return a > i;
      }
      function IS(a, i) {
        return a != null && Bt.call(a, i);
      }
      function AS(a, i) {
        return a != null && i in Xt(a);
      }
      function RS(a, i, f) {
        return a >= Dn(i, f) && a < wn(i, f);
      }
      function Nf(a, i, f) {
        for (var v = f ? ff : Fc, x = a[0].length, M = a.length, j = M, Y = ce(M), Q = 1 / 0, _e = []; j--; ) {
          var xe = a[j];
          j && i && (xe = ln(xe, hr(i))), Q = Dn(xe.length, Q), Y[j] = !f && (i || x >= 120 && xe.length >= 120) ? new ii(j && xe) : n;
        }
        xe = a[0];
        var Pe = -1, ze = Y[0];
        e:
          for (; ++Pe < x && _e.length < Q; ) {
            var Qe = xe[Pe], lt = i ? i(Qe) : Qe;
            if (Qe = f || Qe !== 0 ? Qe : 0, !(ze ? Qs(ze, lt) : v(_e, lt, f))) {
              for (j = M; --j; ) {
                var bt = Y[j];
                if (!(bt ? Qs(bt, lt) : v(a[j], lt, f)))
                  continue e;
              }
              ze && ze.push(lt), _e.push(Qe);
            }
          }
        return _e;
      }
      function MS(a, i, f, v) {
        return da(a, function(x, M, j) {
          i(v, f(x), M, j);
        }), v;
      }
      function il(a, i, f) {
        i = wo(i, a), a = yy(a, i);
        var v = a == null ? a : a[Gr(Ir(i))];
        return v == null ? n : fr(v, a, f);
      }
      function Av(a) {
        return pn(a) && Wn(a) == fe;
      }
      function DS(a) {
        return pn(a) && Wn(a) == Ze;
      }
      function LS(a) {
        return pn(a) && Wn(a) == z;
      }
      function sl(a, i, f, v, x) {
        return a === i ? !0 : a == null || i == null || !pn(a) && !pn(i) ? a !== a && i !== i : FS(a, i, f, v, sl, x);
      }
      function FS(a, i, f, v, x, M) {
        var j = mt(a), Y = mt(i), Q = j ? Ce : Ln(a), _e = Y ? Ce : Ln(i);
        Q = Q == fe ? Ee : Q, _e = _e == fe ? Ee : _e;
        var xe = Q == Ee, Pe = _e == Ee, ze = Q == _e;
        if (ze && Eo(a)) {
          if (!Eo(i))
            return !1;
          j = !0, xe = !1;
        }
        if (ze && !xe)
          return M || (M = new Vr()), j || ns(a) ? dy(a, i, f, v, x, M) : uT(a, i, Q, f, v, x, M);
        if (!(f & _)) {
          var Qe = xe && Bt.call(a, "__wrapped__"), lt = Pe && Bt.call(i, "__wrapped__");
          if (Qe || lt) {
            var bt = Qe ? a.value() : a, it = lt ? i.value() : i;
            return M || (M = new Vr()), x(bt, it, f, v, M);
          }
        }
        return ze ? (M || (M = new Vr()), dT(a, i, f, v, x, M)) : !1;
      }
      function $S(a) {
        return pn(a) && Ln(a) == se;
      }
      function If(a, i, f, v) {
        var x = f.length, M = x, j = !v;
        if (a == null)
          return !M;
        for (a = Xt(a); x--; ) {
          var Y = f[x];
          if (j && Y[2] ? Y[1] !== a[Y[0]] : !(Y[0] in a))
            return !1;
        }
        for (; ++x < M; ) {
          Y = f[x];
          var Q = Y[0], _e = a[Q], xe = Y[1];
          if (j && Y[2]) {
            if (_e === n && !(Q in a))
              return !1;
          } else {
            var Pe = new Vr();
            if (v)
              var ze = v(_e, xe, Q, a, i, Pe);
            if (!(ze === n ? sl(xe, _e, _ | w, v, Pe) : ze))
              return !1;
          }
        }
        return !0;
      }
      function Rv(a) {
        if (!fn(a) || _T(a))
          return !1;
        var i = $a(a) ? $O : PC;
        return i.test(ui(a));
      }
      function BS(a) {
        return pn(a) && Wn(a) == ee;
      }
      function jS(a) {
        return pn(a) && Ln(a) == we;
      }
      function WS(a) {
        return pn(a) && bu(a.length) && !!tn[Wn(a)];
      }
      function Mv(a) {
        return typeof a == "function" ? a : a == null ? tr : typeof a == "object" ? mt(a) ? Fv(a[0], a[1]) : Lv(a) : rb(a);
      }
      function Af(a) {
        if (!ul(a))
          return HO(a);
        var i = [];
        for (var f in Xt(a))
          Bt.call(a, f) && f != "constructor" && i.push(f);
        return i;
      }
      function zS(a) {
        if (!fn(a))
          return CT(a);
        var i = ul(a), f = [];
        for (var v in a)
          v == "constructor" && (i || !Bt.call(a, v)) || f.push(v);
        return f;
      }
      function Rf(a, i) {
        return a < i;
      }
      function Dv(a, i) {
        var f = -1, v = Jn(a) ? ce(a.length) : [];
        return bo(a, function(x, M, j) {
          v[++f] = i(x, M, j);
        }), v;
      }
      function Lv(a) {
        var i = Gf(a);
        return i.length == 1 && i[0][2] ? gy(i[0][0], i[0][1]) : function(f) {
          return f === a || If(f, a, i);
        };
      }
      function Fv(a, i) {
        return Zf(a) && my(i) ? gy(Gr(a), i) : function(f) {
          var v = sp(f, a);
          return v === n && v === i ? lp(f, a) : sl(i, v, _ | w);
        };
      }
      function ru(a, i, f, v, x) {
        a !== i && Tf(i, function(M, j) {
          if (x || (x = new Vr()), fn(M))
            US(a, i, j, f, ru, v, x);
          else {
            var Y = v ? v(Qf(a, j), M, j + "", a, i, x) : n;
            Y === n && (Y = M), Of(a, j, Y);
          }
        }, er);
      }
      function US(a, i, f, v, x, M, j) {
        var Y = Qf(a, f), Q = Qf(i, f), _e = j.get(Q);
        if (_e) {
          Of(a, f, _e);
          return;
        }
        var xe = M ? M(Y, Q, f + "", a, i, j) : n, Pe = xe === n;
        if (Pe) {
          var ze = mt(Q), Qe = !ze && Eo(Q), lt = !ze && !Qe && ns(Q);
          xe = Q, ze || Qe || lt ? mt(Y) ? xe = Y : mn(Y) ? xe = Qn(Y) : Qe ? (Pe = !1, xe = Kv(Q, !0)) : lt ? (Pe = !1, xe = Zv(Q, !0)) : xe = [] : fl(Q) || di(Q) ? (xe = Y, di(Y) ? xe = qy(Y) : (!fn(Y) || $a(Y)) && (xe = hy(Q))) : Pe = !1;
        }
        Pe && (j.set(Q, xe), x(xe, Q, v, M, j), j.delete(Q)), Of(a, f, xe);
      }
      function $v(a, i) {
        var f = a.length;
        if (f)
          return i += i < 0 ? f : 0, Fa(i, f) ? a[i] : n;
      }
      function Bv(a, i, f) {
        i.length ? i = ln(i, function(M) {
          return mt(M) ? function(j) {
            return li(j, M.length === 1 ? M[0] : M);
          } : M;
        }) : i = [tr];
        var v = -1;
        i = ln(i, hr(st()));
        var x = Dv(a, function(M, j, Y) {
          var Q = ln(i, function(_e) {
            return _e(M);
          });
          return { criteria: Q, index: ++v, value: M };
        });
        return gO(x, function(M, j) {
          return nT(M, j, f);
        });
      }
      function HS(a, i) {
        return jv(a, i, function(f, v) {
          return lp(a, v);
        });
      }
      function jv(a, i, f) {
        for (var v = -1, x = i.length, M = {}; ++v < x; ) {
          var j = i[v], Y = li(a, j);
          f(Y, j) && ll(M, wo(j, a), Y);
        }
        return M;
      }
      function YS(a) {
        return function(i) {
          return li(i, a);
        };
      }
      function Mf(a, i, f, v) {
        var x = v ? mO : Yi, M = -1, j = i.length, Y = a;
        for (a === i && (i = Qn(i)), f && (Y = ln(a, hr(f))); ++M < j; )
          for (var Q = 0, _e = i[M], xe = f ? f(_e) : _e; (Q = x(Y, xe, Q, v)) > -1; )
            Y !== a && Vc.call(Y, Q, 1), Vc.call(a, Q, 1);
        return a;
      }
      function Wv(a, i) {
        for (var f = a ? i.length : 0, v = f - 1; f--; ) {
          var x = i[f];
          if (f == v || x !== M) {
            var M = x;
            Fa(x) ? Vc.call(a, x, 1) : $f(a, x);
          }
        }
        return a;
      }
      function Df(a, i) {
        return a + Zc(wv() * (i - a + 1));
      }
      function qS(a, i, f, v) {
        for (var x = -1, M = wn(Kc((i - a) / (f || 1)), 0), j = ce(M); M--; )
          j[v ? M : ++x] = a, a += f;
        return j;
      }
      function Lf(a, i) {
        var f = "";
        if (!a || i < 1 || i > me)
          return f;
        do
          i % 2 && (f += a), i = Zc(i / 2), i && (a += a);
        while (i);
        return f;
      }
      function _t(a, i) {
        return Jf(vy(a, i, tr), a + "");
      }
      function VS(a) {
        return Cv(rs(a));
      }
      function GS(a, i) {
        var f = rs(a);
        return pu(f, si(i, 0, f.length));
      }
      function ll(a, i, f, v) {
        if (!fn(a))
          return a;
        i = wo(i, a);
        for (var x = -1, M = i.length, j = M - 1, Y = a; Y != null && ++x < M; ) {
          var Q = Gr(i[x]), _e = f;
          if (Q === "__proto__" || Q === "constructor" || Q === "prototype")
            return a;
          if (x != j) {
            var xe = Y[Q];
            _e = v ? v(xe, Q, Y) : n, _e === n && (_e = fn(xe) ? xe : Fa(i[x + 1]) ? [] : {});
          }
          al(Y, Q, _e), Y = Y[Q];
        }
        return a;
      }
      var zv = Xc ? function(a, i) {
        return Xc.set(a, i), a;
      } : tr, KS = Gc ? function(a, i) {
        return Gc(a, "toString", {
          configurable: !0,
          enumerable: !1,
          value: up(i),
          writable: !0
        });
      } : tr;
      function ZS(a) {
        return pu(rs(a));
      }
      function Nr(a, i, f) {
        var v = -1, x = a.length;
        i < 0 && (i = -i > x ? 0 : x + i), f = f > x ? x : f, f < 0 && (f += x), x = i > f ? 0 : f - i >>> 0, i >>>= 0;
        for (var M = ce(x); ++v < x; )
          M[v] = a[v + i];
        return M;
      }
      function XS(a, i) {
        var f;
        return bo(a, function(v, x, M) {
          return f = i(v, x, M), !f;
        }), !!f;
      }
      function au(a, i, f) {
        var v = 0, x = a == null ? v : a.length;
        if (typeof i == "number" && i === i && x <= Se) {
          for (; v < x; ) {
            var M = v + x >>> 1, j = a[M];
            j !== null && !gr(j) && (f ? j <= i : j < i) ? v = M + 1 : x = M;
          }
          return x;
        }
        return Ff(a, i, tr, f);
      }
      function Ff(a, i, f, v) {
        var x = 0, M = a == null ? 0 : a.length;
        if (M === 0)
          return 0;
        i = f(i);
        for (var j = i !== i, Y = i === null, Q = gr(i), _e = i === n; x < M; ) {
          var xe = Zc((x + M) / 2), Pe = f(a[xe]), ze = Pe !== n, Qe = Pe === null, lt = Pe === Pe, bt = gr(Pe);
          if (j)
            var it = v || lt;
          else _e ? it = lt && (v || ze) : Y ? it = lt && ze && (v || !Qe) : Q ? it = lt && ze && !Qe && (v || !bt) : Qe || bt ? it = !1 : it = v ? Pe <= i : Pe < i;
          it ? x = xe + 1 : M = xe;
        }
        return Dn(M, be);
      }
      function Uv(a, i) {
        for (var f = -1, v = a.length, x = 0, M = []; ++f < v; ) {
          var j = a[f], Y = i ? i(j) : j;
          if (!f || !Kr(Y, Q)) {
            var Q = Y;
            M[x++] = j === 0 ? 0 : j;
          }
        }
        return M;
      }
      function Hv(a) {
        return typeof a == "number" ? a : gr(a) ? te : +a;
      }
      function mr(a) {
        if (typeof a == "string")
          return a;
        if (mt(a))
          return ln(a, mr) + "";
        if (gr(a))
          return xv ? xv.call(a) : "";
        var i = a + "";
        return i == "0" && 1 / a == -le ? "-0" : i;
      }
      function _o(a, i, f) {
        var v = -1, x = Fc, M = a.length, j = !0, Y = [], Q = Y;
        if (f)
          j = !1, x = ff;
        else if (M >= o) {
          var _e = i ? null : lT(a);
          if (_e)
            return Bc(_e);
          j = !1, x = Qs, Q = new ii();
        } else
          Q = i ? [] : Y;
        e:
          for (; ++v < M; ) {
            var xe = a[v], Pe = i ? i(xe) : xe;
            if (xe = f || xe !== 0 ? xe : 0, j && Pe === Pe) {
              for (var ze = Q.length; ze--; )
                if (Q[ze] === Pe)
                  continue e;
              i && Q.push(Pe), Y.push(xe);
            } else x(Q, Pe, f) || (Q !== Y && Q.push(Pe), Y.push(xe));
          }
        return Y;
      }
      function $f(a, i) {
        i = wo(i, a);
        var f = -1, v = i.length;
        if (!v)
          return !0;
        for (; ++f < v; ) {
          var x = Gr(i[f]);
          if (x === "__proto__" && !Bt.call(a, "__proto__") || (x === "constructor" || x === "prototype") && f < v - 1)
            return !1;
        }
        var M = yy(a, i);
        return M == null || delete M[Gr(Ir(i))];
      }
      function Yv(a, i, f, v) {
        return ll(a, i, f(li(a, i)), v);
      }
      function ou(a, i, f, v) {
        for (var x = a.length, M = v ? x : -1; (v ? M-- : ++M < x) && i(a[M], M, a); )
          ;
        return f ? Nr(a, v ? 0 : M, v ? M + 1 : x) : Nr(a, v ? M + 1 : 0, v ? x : M);
      }
      function qv(a, i) {
        var f = a;
        return f instanceof Pt && (f = f.value()), pf(i, function(v, x) {
          return x.func.apply(x.thisArg, go([v], x.args));
        }, f);
      }
      function Bf(a, i, f) {
        var v = a.length;
        if (v < 2)
          return v ? _o(a[0]) : [];
        for (var x = -1, M = ce(v); ++x < v; )
          for (var j = a[x], Y = -1; ++Y < v; )
            Y != x && (M[x] = ol(M[x] || j, a[Y], i, f));
        return _o(Rn(M, 1), i, f);
      }
      function Vv(a, i, f) {
        for (var v = -1, x = a.length, M = i.length, j = {}; ++v < x; ) {
          var Y = v < M ? i[v] : n;
          f(j, a[v], Y);
        }
        return j;
      }
      function jf(a) {
        return mn(a) ? a : [];
      }
      function Wf(a) {
        return typeof a == "function" ? a : tr;
      }
      function wo(a, i) {
        return mt(a) ? a : Zf(a, i) ? [a] : xy(jt(a));
      }
      var QS = _t;
      function xo(a, i, f) {
        var v = a.length;
        return f = f === n ? v : f, !i && f >= v ? a : Nr(a, i, f);
      }
      var Gv = BO || function(a) {
        return An.clearTimeout(a);
      };
      function Kv(a, i) {
        if (i)
          return a.slice();
        var f = a.length, v = gv ? gv(f) : new a.constructor(f);
        return a.copy(v), v;
      }
      function zf(a) {
        var i = new a.constructor(a.byteLength);
        return new Yc(i).set(new Yc(a)), i;
      }
      function JS(a, i) {
        var f = i ? zf(a.buffer) : a.buffer;
        return new a.constructor(f, a.byteOffset, a.byteLength);
      }
      function eT(a) {
        var i = new a.constructor(a.source, Ag.exec(a));
        return i.lastIndex = a.lastIndex, i;
      }
      function tT(a) {
        return rl ? Xt(rl.call(a)) : {};
      }
      function Zv(a, i) {
        var f = i ? zf(a.buffer) : a.buffer;
        return new a.constructor(f, a.byteOffset, a.length);
      }
      function Xv(a, i) {
        if (a !== i) {
          var f = a !== n, v = a === null, x = a === a, M = gr(a), j = i !== n, Y = i === null, Q = i === i, _e = gr(i);
          if (!Y && !_e && !M && a > i || M && j && Q && !Y && !_e || v && j && Q || !f && Q || !x)
            return 1;
          if (!v && !M && !_e && a < i || _e && f && x && !v && !M || Y && f && x || !j && x || !Q)
            return -1;
        }
        return 0;
      }
      function nT(a, i, f) {
        for (var v = -1, x = a.criteria, M = i.criteria, j = x.length, Y = f.length; ++v < j; ) {
          var Q = Xv(x[v], M[v]);
          if (Q) {
            if (v >= Y)
              return Q;
            var _e = f[v];
            return Q * (_e == "desc" ? -1 : 1);
          }
        }
        return a.index - i.index;
      }
      function Qv(a, i, f, v) {
        for (var x = -1, M = a.length, j = f.length, Y = -1, Q = i.length, _e = wn(M - j, 0), xe = ce(Q + _e), Pe = !v; ++Y < Q; )
          xe[Y] = i[Y];
        for (; ++x < j; )
          (Pe || x < M) && (xe[f[x]] = a[x]);
        for (; _e--; )
          xe[Y++] = a[x++];
        return xe;
      }
      function Jv(a, i, f, v) {
        for (var x = -1, M = a.length, j = -1, Y = f.length, Q = -1, _e = i.length, xe = wn(M - Y, 0), Pe = ce(xe + _e), ze = !v; ++x < xe; )
          Pe[x] = a[x];
        for (var Qe = x; ++Q < _e; )
          Pe[Qe + Q] = i[Q];
        for (; ++j < Y; )
          (ze || x < M) && (Pe[Qe + f[j]] = a[x++]);
        return Pe;
      }
      function Qn(a, i) {
        var f = -1, v = a.length;
        for (i || (i = ce(v)); ++f < v; )
          i[f] = a[f];
        return i;
      }
      function fa(a, i, f, v) {
        var x = !f;
        f || (f = {});
        for (var M = -1, j = i.length; ++M < j; ) {
          var Y = i[M], Q = v ? v(f[Y], a[Y], Y, f, a) : n;
          Q === n && (Q = a[Y]), x ? ua(f, Y, Q) : al(f, Y, Q);
        }
        return f;
      }
      function rT(a, i) {
        return fa(a, Kf(a), i);
      }
      function aT(a, i) {
        return fa(a, fy(a), i);
      }
      function iu(a, i) {
        return function(f, v) {
          var x = mt(f) ? cO : SS, M = i ? i() : {};
          return x(f, a, st(v, 2), M);
        };
      }
      function Ji(a) {
        return _t(function(i, f) {
          var v = -1, x = f.length, M = x > 1 ? f[x - 1] : n, j = x > 2 ? f[2] : n;
          for (M = a.length > 3 && typeof M == "function" ? (x--, M) : n, j && zn(f[0], f[1], j) && (M = x < 3 ? n : M, x = 1), i = Xt(i); ++v < x; ) {
            var Y = f[v];
            Y && a(i, Y, v, M);
          }
          return i;
        });
      }
      function ey(a, i) {
        return function(f, v) {
          if (f == null)
            return f;
          if (!Jn(f))
            return a(f, v);
          for (var x = f.length, M = i ? x : -1, j = Xt(f); (i ? M-- : ++M < x) && v(j[M], M, j) !== !1; )
            ;
          return f;
        };
      }
      function ty(a) {
        return function(i, f, v) {
          for (var x = -1, M = Xt(i), j = v(i), Y = j.length; Y--; ) {
            var Q = j[a ? Y : ++x];
            if (f(M[Q], Q, M) === !1)
              break;
          }
          return i;
        };
      }
      function oT(a, i, f) {
        var v = i & k, x = cl(a);
        function M() {
          var j = this && this !== An && this instanceof M ? x : a;
          return j.apply(v ? f : this, arguments);
        }
        return M;
      }
      function ny(a) {
        return function(i) {
          i = jt(i);
          var f = qi(i) ? qr(i) : n, v = f ? f[0] : i.charAt(0), x = f ? xo(f, 1).join("") : i.slice(1);
          return v[a]() + x;
        };
      }
      function es(a) {
        return function(i) {
          return pf(tb(eb(i).replace(KC, "")), a, "");
        };
      }
      function cl(a) {
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
          var f = Qi(a.prototype), v = a.apply(f, i);
          return fn(v) ? v : f;
        };
      }
      function iT(a, i, f) {
        var v = cl(a);
        function x() {
          for (var M = arguments.length, j = ce(M), Y = M, Q = ts(x); Y--; )
            j[Y] = arguments[Y];
          var _e = M < 3 && j[0] !== Q && j[M - 1] !== Q ? [] : vo(j, Q);
          if (M -= _e.length, M < f)
            return sy(
              a,
              i,
              su,
              x.placeholder,
              n,
              j,
              _e,
              n,
              n,
              f - M
            );
          var xe = this && this !== An && this instanceof x ? v : a;
          return fr(xe, this, j);
        }
        return x;
      }
      function ry(a) {
        return function(i, f, v) {
          var x = Xt(i);
          if (!Jn(i)) {
            var M = st(f, 3);
            i = Sn(i), f = function(Y) {
              return M(x[Y], Y, x);
            };
          }
          var j = a(i, f, v);
          return j > -1 ? x[M ? i[j] : j] : n;
        };
      }
      function ay(a) {
        return La(function(i) {
          var f = i.length, v = f, x = Pr.prototype.thru;
          for (a && i.reverse(); v--; ) {
            var M = i[v];
            if (typeof M != "function")
              throw new Tr(u);
            if (x && !j && du(M) == "wrapper")
              var j = new Pr([], !0);
          }
          for (v = j ? v : f; ++v < f; ) {
            M = i[v];
            var Y = du(M), Q = Y == "wrapper" ? Vf(M) : n;
            Q && Xf(Q[0]) && Q[1] == (T | I | P | A) && !Q[4].length && Q[9] == 1 ? j = j[du(Q[0])].apply(j, Q[3]) : j = M.length == 1 && Xf(M) ? j[Y]() : j.thru(M);
          }
          return function() {
            var _e = arguments, xe = _e[0];
            if (j && _e.length == 1 && mt(xe))
              return j.plant(xe).value();
            for (var Pe = 0, ze = f ? i[Pe].apply(this, _e) : xe; ++Pe < f; )
              ze = i[Pe].call(this, ze);
            return ze;
          };
        });
      }
      function su(a, i, f, v, x, M, j, Y, Q, _e) {
        var xe = i & T, Pe = i & k, ze = i & F, Qe = i & (I | S), lt = i & B, bt = ze ? n : cl(a);
        function it() {
          for (var Ot = arguments.length, It = ce(Ot), vr = Ot; vr--; )
            It[vr] = arguments[vr];
          if (Qe)
            var Un = ts(it), yr = yO(It, Un);
          if (v && (It = Qv(It, v, x, Qe)), M && (It = Jv(It, M, j, Qe)), Ot -= yr, Qe && Ot < _e) {
            var gn = vo(It, Un);
            return sy(
              a,
              i,
              su,
              it.placeholder,
              f,
              It,
              gn,
              Y,
              Q,
              _e - Ot
            );
          }
          var Zr = Pe ? f : this, ja = ze ? Zr[a] : a;
          return Ot = It.length, Y ? It = ST(It, Y) : lt && Ot > 1 && It.reverse(), xe && Q < Ot && (It.length = Q), this && this !== An && this instanceof it && (ja = bt || cl(ja)), ja.apply(Zr, It);
        }
        return it;
      }
      function oy(a, i) {
        return function(f, v) {
          return MS(f, a, i(v), {});
        };
      }
      function lu(a, i) {
        return function(f, v) {
          var x;
          if (f === n && v === n)
            return i;
          if (f !== n && (x = f), v !== n) {
            if (x === n)
              return v;
            typeof f == "string" || typeof v == "string" ? (f = mr(f), v = mr(v)) : (f = Hv(f), v = Hv(v)), x = a(f, v);
          }
          return x;
        };
      }
      function Uf(a) {
        return La(function(i) {
          return i = ln(i, hr(st())), _t(function(f) {
            var v = this;
            return a(i, function(x) {
              return fr(x, v, f);
            });
          });
        });
      }
      function cu(a, i) {
        i = i === n ? " " : mr(i);
        var f = i.length;
        if (f < 2)
          return f ? Lf(i, a) : i;
        var v = Lf(i, Kc(a / Vi(i)));
        return qi(i) ? xo(qr(v), 0, a).join("") : v.slice(0, a);
      }
      function sT(a, i, f, v) {
        var x = i & k, M = cl(a);
        function j() {
          for (var Y = -1, Q = arguments.length, _e = -1, xe = v.length, Pe = ce(xe + Q), ze = this && this !== An && this instanceof j ? M : a; ++_e < xe; )
            Pe[_e] = v[_e];
          for (; Q--; )
            Pe[_e++] = arguments[++Y];
          return fr(ze, x ? f : this, Pe);
        }
        return j;
      }
      function iy(a) {
        return function(i, f, v) {
          return v && typeof v != "number" && zn(i, f, v) && (f = v = n), i = Ba(i), f === n ? (f = i, i = 0) : f = Ba(f), v = v === n ? i < f ? 1 : -1 : Ba(v), qS(i, f, v, a);
        };
      }
      function uu(a) {
        return function(i, f) {
          return typeof i == "string" && typeof f == "string" || (i = Ar(i), f = Ar(f)), a(i, f);
        };
      }
      function sy(a, i, f, v, x, M, j, Y, Q, _e) {
        var xe = i & I, Pe = xe ? j : n, ze = xe ? n : j, Qe = xe ? M : n, lt = xe ? n : M;
        i |= xe ? P : C, i &= ~(xe ? C : P), i & E || (i &= -4);
        var bt = [
          a,
          i,
          x,
          Qe,
          Pe,
          lt,
          ze,
          Y,
          Q,
          _e
        ], it = f.apply(n, bt);
        return Xf(a) && by(it, bt), it.placeholder = v, _y(it, a, i);
      }
      function Hf(a) {
        var i = _n[a];
        return function(f, v) {
          if (f = Ar(f), v = v == null ? 0 : Dn(vt(v), 292), v && _v(f)) {
            var x = (jt(f) + "e").split("e"), M = i(x[0] + "e" + (+x[1] + v));
            return x = (jt(M) + "e").split("e"), +(x[0] + "e" + (+x[1] - v));
          }
          return i(f);
        };
      }
      var lT = Zi && 1 / Bc(new Zi([, -0]))[1] == le ? function(a) {
        return new Zi(a);
      } : pp;
      function ly(a) {
        return function(i) {
          var f = Ln(i);
          return f == se ? _f(i) : f == we ? OO(i) : vO(i, a(i));
        };
      }
      function Da(a, i, f, v, x, M, j, Y) {
        var Q = i & F;
        if (!Q && typeof a != "function")
          throw new Tr(u);
        var _e = v ? v.length : 0;
        if (_e || (i &= -97, v = x = n), j = j === n ? j : wn(vt(j), 0), Y = Y === n ? Y : vt(Y), _e -= x ? x.length : 0, i & C) {
          var xe = v, Pe = x;
          v = x = n;
        }
        var ze = Q ? n : Vf(a), Qe = [
          a,
          i,
          f,
          v,
          x,
          xe,
          Pe,
          M,
          j,
          Y
        ];
        if (ze && ET(Qe, ze), a = Qe[0], i = Qe[1], f = Qe[2], v = Qe[3], x = Qe[4], Y = Qe[9] = Qe[9] === n ? Q ? 0 : a.length : wn(Qe[9] - _e, 0), !Y && i & (I | S) && (i &= -25), !i || i == k)
          var lt = oT(a, i, f);
        else i == I || i == S ? lt = iT(a, i, Y) : (i == P || i == (k | P)) && !x.length ? lt = sT(a, i, f, v) : lt = su.apply(n, Qe);
        var bt = ze ? zv : by;
        return _y(bt(lt, Qe), a, i);
      }
      function cy(a, i, f, v) {
        return a === n || Kr(a, Ki[f]) && !Bt.call(v, f) ? i : a;
      }
      function uy(a, i, f, v, x, M) {
        return fn(a) && fn(i) && (M.set(i, a), ru(a, i, n, uy, M), M.delete(i)), a;
      }
      function cT(a) {
        return fl(a) ? n : a;
      }
      function dy(a, i, f, v, x, M) {
        var j = f & _, Y = a.length, Q = i.length;
        if (Y != Q && !(j && Q > Y))
          return !1;
        var _e = M.get(a), xe = M.get(i);
        if (_e && xe)
          return _e == i && xe == a;
        var Pe = -1, ze = !0, Qe = f & w ? new ii() : n;
        for (M.set(a, i), M.set(i, a); ++Pe < Y; ) {
          var lt = a[Pe], bt = i[Pe];
          if (v)
            var it = j ? v(bt, lt, Pe, i, a, M) : v(lt, bt, Pe, a, i, M);
          if (it !== n) {
            if (it)
              continue;
            ze = !1;
            break;
          }
          if (Qe) {
            if (!hf(i, function(Ot, It) {
              if (!Qs(Qe, It) && (lt === Ot || x(lt, Ot, f, v, M)))
                return Qe.push(It);
            })) {
              ze = !1;
              break;
            }
          } else if (!(lt === bt || x(lt, bt, f, v, M))) {
            ze = !1;
            break;
          }
        }
        return M.delete(a), M.delete(i), ze;
      }
      function uT(a, i, f, v, x, M, j) {
        switch (f) {
          case Ke:
            if (a.byteLength != i.byteLength || a.byteOffset != i.byteOffset)
              return !1;
            a = a.buffer, i = i.buffer;
          case Ze:
            return !(a.byteLength != i.byteLength || !M(new Yc(a), new Yc(i)));
          case W:
          case z:
          case Ie:
            return Kr(+a, +i);
          case D:
            return a.name == i.name && a.message == i.message;
          case ee:
          case ke:
            return a == i + "";
          case se:
            var Y = _f;
          case we:
            var Q = v & _;
            if (Y || (Y = Bc), a.size != i.size && !Q)
              return !1;
            var _e = j.get(a);
            if (_e)
              return _e == i;
            v |= w, j.set(a, i);
            var xe = dy(Y(a), Y(i), v, x, M, j);
            return j.delete(a), xe;
          case Ae:
            if (rl)
              return rl.call(a) == rl.call(i);
        }
        return !1;
      }
      function dT(a, i, f, v, x, M) {
        var j = f & _, Y = Yf(a), Q = Y.length, _e = Yf(i), xe = _e.length;
        if (Q != xe && !j)
          return !1;
        for (var Pe = Q; Pe--; ) {
          var ze = Y[Pe];
          if (!(j ? ze in i : Bt.call(i, ze)))
            return !1;
        }
        var Qe = M.get(a), lt = M.get(i);
        if (Qe && lt)
          return Qe == i && lt == a;
        var bt = !0;
        M.set(a, i), M.set(i, a);
        for (var it = j; ++Pe < Q; ) {
          ze = Y[Pe];
          var Ot = a[ze], It = i[ze];
          if (v)
            var vr = j ? v(It, Ot, ze, i, a, M) : v(Ot, It, ze, a, i, M);
          if (!(vr === n ? Ot === It || x(Ot, It, f, v, M) : vr)) {
            bt = !1;
            break;
          }
          it || (it = ze == "constructor");
        }
        if (bt && !it) {
          var Un = a.constructor, yr = i.constructor;
          Un != yr && "constructor" in a && "constructor" in i && !(typeof Un == "function" && Un instanceof Un && typeof yr == "function" && yr instanceof yr) && (bt = !1);
        }
        return M.delete(a), M.delete(i), bt;
      }
      function La(a) {
        return Jf(vy(a, n, Sy), a + "");
      }
      function Yf(a) {
        return Iv(a, Sn, Kf);
      }
      function qf(a) {
        return Iv(a, er, fy);
      }
      var Vf = Xc ? function(a) {
        return Xc.get(a);
      } : pp;
      function du(a) {
        for (var i = a.name + "", f = Xi[i], v = Bt.call(Xi, i) ? f.length : 0; v--; ) {
          var x = f[v], M = x.func;
          if (M == null || M == a)
            return x.name;
        }
        return i;
      }
      function ts(a) {
        var i = Bt.call(N, "placeholder") ? N : a;
        return i.placeholder;
      }
      function st() {
        var a = N.iteratee || dp;
        return a = a === dp ? Mv : a, arguments.length ? a(arguments[0], arguments[1]) : a;
      }
      function fu(a, i) {
        var f = a.__data__;
        return bT(i) ? f[typeof i == "string" ? "string" : "hash"] : f.map;
      }
      function Gf(a) {
        for (var i = Sn(a), f = i.length; f--; ) {
          var v = i[f], x = a[v];
          i[f] = [v, x, my(x)];
        }
        return i;
      }
      function ci(a, i) {
        var f = xO(a, i);
        return Rv(f) ? f : n;
      }
      function fT(a) {
        var i = Bt.call(a, ai), f = a[ai];
        try {
          a[ai] = n;
          var v = !0;
        } catch {
        }
        var x = Uc.call(a);
        return v && (i ? a[ai] = f : delete a[ai]), x;
      }
      var Kf = xf ? function(a) {
        return a == null ? [] : (a = Xt(a), mo(xf(a), function(i) {
          return yv.call(a, i);
        }));
      } : hp, fy = xf ? function(a) {
        for (var i = []; a; )
          go(i, Kf(a)), a = qc(a);
        return i;
      } : hp, Ln = Wn;
      (Ef && Ln(new Ef(new ArrayBuffer(1))) != Ke || el && Ln(new el()) != se || Cf && Ln(Cf.resolve()) != de || Zi && Ln(new Zi()) != we || tl && Ln(new tl()) != $e) && (Ln = function(a) {
        var i = Wn(a), f = i == Ee ? a.constructor : n, v = f ? ui(f) : "";
        if (v)
          switch (v) {
            case GO:
              return Ke;
            case KO:
              return se;
            case ZO:
              return de;
            case XO:
              return we;
            case QO:
              return $e;
          }
        return i;
      });
      function pT(a, i, f) {
        for (var v = -1, x = f.length; ++v < x; ) {
          var M = f[v], j = M.size;
          switch (M.type) {
            case "drop":
              a += j;
              break;
            case "dropRight":
              i -= j;
              break;
            case "take":
              i = Dn(i, a + j);
              break;
            case "takeRight":
              a = wn(a, i - j);
              break;
          }
        }
        return { start: a, end: i };
      }
      function hT(a) {
        var i = a.match(wC);
        return i ? i[1].split(xC) : [];
      }
      function py(a, i, f) {
        i = wo(i, a);
        for (var v = -1, x = i.length, M = !1; ++v < x; ) {
          var j = Gr(i[v]);
          if (!(M = a != null && f(a, j)))
            break;
          a = a[j];
        }
        return M || ++v != x ? M : (x = a == null ? 0 : a.length, !!x && bu(x) && Fa(j, x) && (mt(a) || di(a)));
      }
      function mT(a) {
        var i = a.length, f = new a.constructor(i);
        return i && typeof a[0] == "string" && Bt.call(a, "index") && (f.index = a.index, f.input = a.input), f;
      }
      function hy(a) {
        return typeof a.constructor == "function" && !ul(a) ? Qi(qc(a)) : {};
      }
      function gT(a, i, f) {
        var v = a.constructor;
        switch (i) {
          case Ze:
            return zf(a);
          case W:
          case z:
            return new v(+a);
          case Ke:
            return JS(a, f);
          case Ve:
          case Te:
          case ie:
          case tt:
          case xt:
          case ft:
          case rt:
          case Zt:
          case Ue:
            return Zv(a, f);
          case se:
            return new v();
          case Ie:
          case ke:
            return new v(a);
          case ee:
            return eT(a);
          case we:
            return new v();
          case Ae:
            return tT(a);
        }
      }
      function vT(a, i) {
        var f = i.length;
        if (!f)
          return a;
        var v = f - 1;
        return i[v] = (f > 1 ? "& " : "") + i[v], i = i.join(f > 2 ? ", " : " "), a.replace(_C, `{
/* [wrapped with ` + i + `] */
`);
      }
      function yT(a) {
        return mt(a) || di(a) || !!(bv && a && a[bv]);
      }
      function Fa(a, i) {
        var f = typeof a;
        return i = i ?? me, !!i && (f == "number" || f != "symbol" && NC.test(a)) && a > -1 && a % 1 == 0 && a < i;
      }
      function zn(a, i, f) {
        if (!fn(f))
          return !1;
        var v = typeof i;
        return (v == "number" ? Jn(f) && Fa(i, f.length) : v == "string" && i in f) ? Kr(f[i], a) : !1;
      }
      function Zf(a, i) {
        if (mt(a))
          return !1;
        var f = typeof a;
        return f == "number" || f == "symbol" || f == "boolean" || a == null || gr(a) ? !0 : gC.test(a) || !mC.test(a) || i != null && a in Xt(i);
      }
      function bT(a) {
        var i = typeof a;
        return i == "string" || i == "number" || i == "symbol" || i == "boolean" ? a !== "__proto__" : a === null;
      }
      function Xf(a) {
        var i = du(a), f = N[i];
        if (typeof f != "function" || !(i in Pt.prototype))
          return !1;
        if (a === f)
          return !0;
        var v = Vf(f);
        return !!v && a === v[0];
      }
      function _T(a) {
        return !!mv && mv in a;
      }
      var wT = Wc ? $a : mp;
      function ul(a) {
        var i = a && a.constructor, f = typeof i == "function" && i.prototype || Ki;
        return a === f;
      }
      function my(a) {
        return a === a && !fn(a);
      }
      function gy(a, i) {
        return function(f) {
          return f == null ? !1 : f[a] === i && (i !== n || a in Xt(f));
        };
      }
      function xT(a) {
        var i = vu(a, function(v) {
          return f.size === h && f.clear(), v;
        }), f = i.cache;
        return i;
      }
      function ET(a, i) {
        var f = a[1], v = i[1], x = f | v, M = x < (k | F | T), j = v == T && f == I || v == T && f == A && a[7].length <= i[8] || v == (T | A) && i[7].length <= i[8] && f == I;
        if (!(M || j))
          return a;
        v & k && (a[2] = i[2], x |= f & k ? 0 : E);
        var Y = i[3];
        if (Y) {
          var Q = a[3];
          a[3] = Q ? Qv(Q, Y, i[4]) : Y, a[4] = Q ? vo(a[3], m) : i[4];
        }
        return Y = i[5], Y && (Q = a[5], a[5] = Q ? Jv(Q, Y, i[6]) : Y, a[6] = Q ? vo(a[5], m) : i[6]), Y = i[7], Y && (a[7] = Y), v & T && (a[8] = a[8] == null ? i[8] : Dn(a[8], i[8])), a[9] == null && (a[9] = i[9]), a[0] = i[0], a[1] = x, a;
      }
      function CT(a) {
        var i = [];
        if (a != null)
          for (var f in Xt(a))
            i.push(f);
        return i;
      }
      function OT(a) {
        return Uc.call(a);
      }
      function vy(a, i, f) {
        return i = wn(i === n ? a.length - 1 : i, 0), function() {
          for (var v = arguments, x = -1, M = wn(v.length - i, 0), j = ce(M); ++x < M; )
            j[x] = v[i + x];
          x = -1;
          for (var Y = ce(i + 1); ++x < i; )
            Y[x] = v[x];
          return Y[i] = f(j), fr(a, this, Y);
        };
      }
      function yy(a, i) {
        return i.length < 2 ? a : li(a, Nr(i, 0, -1));
      }
      function ST(a, i) {
        for (var f = a.length, v = Dn(i.length, f), x = Qn(a); v--; ) {
          var M = i[v];
          a[v] = Fa(M, f) ? x[M] : n;
        }
        return a;
      }
      function Qf(a, i) {
        if (!(i === "constructor" && typeof a[i] == "function") && i != "__proto__")
          return a[i];
      }
      var by = wy(zv), dl = WO || function(a, i) {
        return An.setTimeout(a, i);
      }, Jf = wy(KS);
      function _y(a, i, f) {
        var v = i + "";
        return Jf(a, vT(v, TT(hT(v), f)));
      }
      function wy(a) {
        var i = 0, f = 0;
        return function() {
          var v = YO(), x = re - (v - f);
          if (f = v, x > 0) {
            if (++i >= U)
              return arguments[0];
          } else
            i = 0;
          return a.apply(n, arguments);
        };
      }
      function pu(a, i) {
        var f = -1, v = a.length, x = v - 1;
        for (i = i === n ? v : i; ++f < i; ) {
          var M = Df(f, x), j = a[M];
          a[M] = a[f], a[f] = j;
        }
        return a.length = i, a;
      }
      var xy = xT(function(a) {
        var i = [];
        return a.charCodeAt(0) === 46 && i.push(""), a.replace(vC, function(f, v, x, M) {
          i.push(x ? M.replace(CC, "$1") : v || f);
        }), i;
      });
      function Gr(a) {
        if (typeof a == "string" || gr(a))
          return a;
        var i = a + "";
        return i == "0" && 1 / a == -le ? "-0" : i;
      }
      function ui(a) {
        if (a != null) {
          try {
            return zc.call(a);
          } catch {
          }
          try {
            return a + "";
          } catch {
          }
        }
        return "";
      }
      function TT(a, i) {
        return pr(ye, function(f) {
          var v = "_." + f[0];
          i & f[1] && !Fc(a, v) && a.push(v);
        }), a.sort();
      }
      function Ey(a) {
        if (a instanceof Pt)
          return a.clone();
        var i = new Pr(a.__wrapped__, a.__chain__);
        return i.__actions__ = Qn(a.__actions__), i.__index__ = a.__index__, i.__values__ = a.__values__, i;
      }
      function PT(a, i, f) {
        (f ? zn(a, i, f) : i === n) ? i = 1 : i = wn(vt(i), 0);
        var v = a == null ? 0 : a.length;
        if (!v || i < 1)
          return [];
        for (var x = 0, M = 0, j = ce(Kc(v / i)); x < v; )
          j[M++] = Nr(a, x, x += i);
        return j;
      }
      function kT(a) {
        for (var i = -1, f = a == null ? 0 : a.length, v = 0, x = []; ++i < f; ) {
          var M = a[i];
          M && (x[v++] = M);
        }
        return x;
      }
      function NT() {
        var a = arguments.length;
        if (!a)
          return [];
        for (var i = ce(a - 1), f = arguments[0], v = a; v--; )
          i[v - 1] = arguments[v];
        return go(mt(f) ? Qn(f) : [f], Rn(i, 1));
      }
      var IT = _t(function(a, i) {
        return mn(a) ? ol(a, Rn(i, 1, mn, !0)) : [];
      }), AT = _t(function(a, i) {
        var f = Ir(i);
        return mn(f) && (f = n), mn(a) ? ol(a, Rn(i, 1, mn, !0), st(f, 2)) : [];
      }), RT = _t(function(a, i) {
        var f = Ir(i);
        return mn(f) && (f = n), mn(a) ? ol(a, Rn(i, 1, mn, !0), n, f) : [];
      });
      function MT(a, i, f) {
        var v = a == null ? 0 : a.length;
        return v ? (i = f || i === n ? 1 : vt(i), Nr(a, i < 0 ? 0 : i, v)) : [];
      }
      function DT(a, i, f) {
        var v = a == null ? 0 : a.length;
        return v ? (i = f || i === n ? 1 : vt(i), i = v - i, Nr(a, 0, i < 0 ? 0 : i)) : [];
      }
      function LT(a, i) {
        return a && a.length ? ou(a, st(i, 3), !0, !0) : [];
      }
      function FT(a, i) {
        return a && a.length ? ou(a, st(i, 3), !0) : [];
      }
      function $T(a, i, f, v) {
        var x = a == null ? 0 : a.length;
        return x ? (f && typeof f != "number" && zn(a, i, f) && (f = 0, v = x), NS(a, i, f, v)) : [];
      }
      function Cy(a, i, f) {
        var v = a == null ? 0 : a.length;
        if (!v)
          return -1;
        var x = f == null ? 0 : vt(f);
        return x < 0 && (x = wn(v + x, 0)), $c(a, st(i, 3), x);
      }
      function Oy(a, i, f) {
        var v = a == null ? 0 : a.length;
        if (!v)
          return -1;
        var x = v - 1;
        return f !== n && (x = vt(f), x = f < 0 ? wn(v + x, 0) : Dn(x, v - 1)), $c(a, st(i, 3), x, !0);
      }
      function Sy(a) {
        var i = a == null ? 0 : a.length;
        return i ? Rn(a, 1) : [];
      }
      function BT(a) {
        var i = a == null ? 0 : a.length;
        return i ? Rn(a, le) : [];
      }
      function jT(a, i) {
        var f = a == null ? 0 : a.length;
        return f ? (i = i === n ? 1 : vt(i), Rn(a, i)) : [];
      }
      function WT(a) {
        for (var i = -1, f = a == null ? 0 : a.length, v = {}; ++i < f; ) {
          var x = a[i];
          ua(v, x[0], x[1]);
        }
        return v;
      }
      function Ty(a) {
        return a && a.length ? a[0] : n;
      }
      function zT(a, i, f) {
        var v = a == null ? 0 : a.length;
        if (!v)
          return -1;
        var x = f == null ? 0 : vt(f);
        return x < 0 && (x = wn(v + x, 0)), Yi(a, i, x);
      }
      function UT(a) {
        var i = a == null ? 0 : a.length;
        return i ? Nr(a, 0, -1) : [];
      }
      var HT = _t(function(a) {
        var i = ln(a, jf);
        return i.length && i[0] === a[0] ? Nf(i) : [];
      }), YT = _t(function(a) {
        var i = Ir(a), f = ln(a, jf);
        return i === Ir(f) ? i = n : f.pop(), f.length && f[0] === a[0] ? Nf(f, st(i, 2)) : [];
      }), qT = _t(function(a) {
        var i = Ir(a), f = ln(a, jf);
        return i = typeof i == "function" ? i : n, i && f.pop(), f.length && f[0] === a[0] ? Nf(f, n, i) : [];
      });
      function VT(a, i) {
        return a == null ? "" : UO.call(a, i);
      }
      function Ir(a) {
        var i = a == null ? 0 : a.length;
        return i ? a[i - 1] : n;
      }
      function GT(a, i, f) {
        var v = a == null ? 0 : a.length;
        if (!v)
          return -1;
        var x = v;
        return f !== n && (x = vt(f), x = x < 0 ? wn(v + x, 0) : Dn(x, v - 1)), i === i ? TO(a, i, x) : $c(a, sv, x, !0);
      }
      function KT(a, i) {
        return a && a.length ? $v(a, vt(i)) : n;
      }
      var ZT = _t(Py);
      function Py(a, i) {
        return a && a.length && i && i.length ? Mf(a, i) : a;
      }
      function XT(a, i, f) {
        return a && a.length && i && i.length ? Mf(a, i, st(f, 2)) : a;
      }
      function QT(a, i, f) {
        return a && a.length && i && i.length ? Mf(a, i, n, f) : a;
      }
      var JT = La(function(a, i) {
        var f = a == null ? 0 : a.length, v = Sf(a, i);
        return Wv(a, ln(i, function(x) {
          return Fa(x, f) ? +x : x;
        }).sort(Xv)), v;
      });
      function eP(a, i) {
        var f = [];
        if (!(a && a.length))
          return f;
        var v = -1, x = [], M = a.length;
        for (i = st(i, 3); ++v < M; ) {
          var j = a[v];
          i(j, v, a) && (f.push(j), x.push(v));
        }
        return Wv(a, x), f;
      }
      function ep(a) {
        return a == null ? a : VO.call(a);
      }
      function tP(a, i, f) {
        var v = a == null ? 0 : a.length;
        return v ? (f && typeof f != "number" && zn(a, i, f) ? (i = 0, f = v) : (i = i == null ? 0 : vt(i), f = f === n ? v : vt(f)), Nr(a, i, f)) : [];
      }
      function nP(a, i) {
        return au(a, i);
      }
      function rP(a, i, f) {
        return Ff(a, i, st(f, 2));
      }
      function aP(a, i) {
        var f = a == null ? 0 : a.length;
        if (f) {
          var v = au(a, i);
          if (v < f && Kr(a[v], i))
            return v;
        }
        return -1;
      }
      function oP(a, i) {
        return au(a, i, !0);
      }
      function iP(a, i, f) {
        return Ff(a, i, st(f, 2), !0);
      }
      function sP(a, i) {
        var f = a == null ? 0 : a.length;
        if (f) {
          var v = au(a, i, !0) - 1;
          if (Kr(a[v], i))
            return v;
        }
        return -1;
      }
      function lP(a) {
        return a && a.length ? Uv(a) : [];
      }
      function cP(a, i) {
        return a && a.length ? Uv(a, st(i, 2)) : [];
      }
      function uP(a) {
        var i = a == null ? 0 : a.length;
        return i ? Nr(a, 1, i) : [];
      }
      function dP(a, i, f) {
        return a && a.length ? (i = f || i === n ? 1 : vt(i), Nr(a, 0, i < 0 ? 0 : i)) : [];
      }
      function fP(a, i, f) {
        var v = a == null ? 0 : a.length;
        return v ? (i = f || i === n ? 1 : vt(i), i = v - i, Nr(a, i < 0 ? 0 : i, v)) : [];
      }
      function pP(a, i) {
        return a && a.length ? ou(a, st(i, 3), !1, !0) : [];
      }
      function hP(a, i) {
        return a && a.length ? ou(a, st(i, 3)) : [];
      }
      var mP = _t(function(a) {
        return _o(Rn(a, 1, mn, !0));
      }), gP = _t(function(a) {
        var i = Ir(a);
        return mn(i) && (i = n), _o(Rn(a, 1, mn, !0), st(i, 2));
      }), vP = _t(function(a) {
        var i = Ir(a);
        return i = typeof i == "function" ? i : n, _o(Rn(a, 1, mn, !0), n, i);
      });
      function yP(a) {
        return a && a.length ? _o(a) : [];
      }
      function bP(a, i) {
        return a && a.length ? _o(a, st(i, 2)) : [];
      }
      function _P(a, i) {
        return i = typeof i == "function" ? i : n, a && a.length ? _o(a, n, i) : [];
      }
      function tp(a) {
        if (!(a && a.length))
          return [];
        var i = 0;
        return a = mo(a, function(f) {
          if (mn(f))
            return i = wn(f.length, i), !0;
        }), yf(i, function(f) {
          return ln(a, mf(f));
        });
      }
      function ky(a, i) {
        if (!(a && a.length))
          return [];
        var f = tp(a);
        return i == null ? f : ln(f, function(v) {
          return fr(i, n, v);
        });
      }
      var wP = _t(function(a, i) {
        return mn(a) ? ol(a, i) : [];
      }), xP = _t(function(a) {
        return Bf(mo(a, mn));
      }), EP = _t(function(a) {
        var i = Ir(a);
        return mn(i) && (i = n), Bf(mo(a, mn), st(i, 2));
      }), CP = _t(function(a) {
        var i = Ir(a);
        return i = typeof i == "function" ? i : n, Bf(mo(a, mn), n, i);
      }), OP = _t(tp);
      function SP(a, i) {
        return Vv(a || [], i || [], al);
      }
      function TP(a, i) {
        return Vv(a || [], i || [], ll);
      }
      var PP = _t(function(a) {
        var i = a.length, f = i > 1 ? a[i - 1] : n;
        return f = typeof f == "function" ? (a.pop(), f) : n, ky(a, f);
      });
      function Ny(a) {
        var i = N(a);
        return i.__chain__ = !0, i;
      }
      function kP(a, i) {
        return i(a), a;
      }
      function hu(a, i) {
        return i(a);
      }
      var NP = La(function(a) {
        var i = a.length, f = i ? a[0] : 0, v = this.__wrapped__, x = function(M) {
          return Sf(M, a);
        };
        return i > 1 || this.__actions__.length || !(v instanceof Pt) || !Fa(f) ? this.thru(x) : (v = v.slice(f, +f + (i ? 1 : 0)), v.__actions__.push({
          func: hu,
          args: [x],
          thisArg: n
        }), new Pr(v, this.__chain__).thru(function(M) {
          return i && !M.length && M.push(n), M;
        }));
      });
      function IP() {
        return Ny(this);
      }
      function AP() {
        return new Pr(this.value(), this.__chain__);
      }
      function RP() {
        this.__values__ === n && (this.__values__ = Hy(this.value()));
        var a = this.__index__ >= this.__values__.length, i = a ? n : this.__values__[this.__index__++];
        return { done: a, value: i };
      }
      function MP() {
        return this;
      }
      function DP(a) {
        for (var i, f = this; f instanceof Jc; ) {
          var v = Ey(f);
          v.__index__ = 0, v.__values__ = n, i ? x.__wrapped__ = v : i = v;
          var x = v;
          f = f.__wrapped__;
        }
        return x.__wrapped__ = a, i;
      }
      function LP() {
        var a = this.__wrapped__;
        if (a instanceof Pt) {
          var i = a;
          return this.__actions__.length && (i = new Pt(this)), i = i.reverse(), i.__actions__.push({
            func: hu,
            args: [ep],
            thisArg: n
          }), new Pr(i, this.__chain__);
        }
        return this.thru(ep);
      }
      function FP() {
        return qv(this.__wrapped__, this.__actions__);
      }
      var $P = iu(function(a, i, f) {
        Bt.call(a, f) ? ++a[f] : ua(a, f, 1);
      });
      function BP(a, i, f) {
        var v = mt(a) ? ov : kS;
        return f && zn(a, i, f) && (i = n), v(a, st(i, 3));
      }
      function jP(a, i) {
        var f = mt(a) ? mo : kv;
        return f(a, st(i, 3));
      }
      var WP = ry(Cy), zP = ry(Oy);
      function UP(a, i) {
        return Rn(mu(a, i), 1);
      }
      function HP(a, i) {
        return Rn(mu(a, i), le);
      }
      function YP(a, i, f) {
        return f = f === n ? 1 : vt(f), Rn(mu(a, i), f);
      }
      function Iy(a, i) {
        var f = mt(a) ? pr : bo;
        return f(a, st(i, 3));
      }
      function Ay(a, i) {
        var f = mt(a) ? uO : Pv;
        return f(a, st(i, 3));
      }
      var qP = iu(function(a, i, f) {
        Bt.call(a, f) ? a[f].push(i) : ua(a, f, [i]);
      });
      function VP(a, i, f, v) {
        a = Jn(a) ? a : rs(a), f = f && !v ? vt(f) : 0;
        var x = a.length;
        return f < 0 && (f = wn(x + f, 0)), _u(a) ? f <= x && a.indexOf(i, f) > -1 : !!x && Yi(a, i, f) > -1;
      }
      var GP = _t(function(a, i, f) {
        var v = -1, x = typeof i == "function", M = Jn(a) ? ce(a.length) : [];
        return bo(a, function(j) {
          M[++v] = x ? fr(i, j, f) : il(j, i, f);
        }), M;
      }), KP = iu(function(a, i, f) {
        ua(a, f, i);
      });
      function mu(a, i) {
        var f = mt(a) ? ln : Dv;
        return f(a, st(i, 3));
      }
      function ZP(a, i, f, v) {
        return a == null ? [] : (mt(i) || (i = i == null ? [] : [i]), f = v ? n : f, mt(f) || (f = f == null ? [] : [f]), Bv(a, i, f));
      }
      var XP = iu(function(a, i, f) {
        a[f ? 0 : 1].push(i);
      }, function() {
        return [[], []];
      });
      function QP(a, i, f) {
        var v = mt(a) ? pf : cv, x = arguments.length < 3;
        return v(a, st(i, 4), f, x, bo);
      }
      function JP(a, i, f) {
        var v = mt(a) ? dO : cv, x = arguments.length < 3;
        return v(a, st(i, 4), f, x, Pv);
      }
      function ek(a, i) {
        var f = mt(a) ? mo : kv;
        return f(a, yu(st(i, 3)));
      }
      function tk(a) {
        var i = mt(a) ? Cv : VS;
        return i(a);
      }
      function nk(a, i, f) {
        (f ? zn(a, i, f) : i === n) ? i = 1 : i = vt(i);
        var v = mt(a) ? CS : GS;
        return v(a, i);
      }
      function rk(a) {
        var i = mt(a) ? OS : ZS;
        return i(a);
      }
      function ak(a) {
        if (a == null)
          return 0;
        if (Jn(a))
          return _u(a) ? Vi(a) : a.length;
        var i = Ln(a);
        return i == se || i == we ? a.size : Af(a).length;
      }
      function ok(a, i, f) {
        var v = mt(a) ? hf : XS;
        return f && zn(a, i, f) && (i = n), v(a, st(i, 3));
      }
      var ik = _t(function(a, i) {
        if (a == null)
          return [];
        var f = i.length;
        return f > 1 && zn(a, i[0], i[1]) ? i = [] : f > 2 && zn(i[0], i[1], i[2]) && (i = [i[0]]), Bv(a, Rn(i, 1), []);
      }), gu = jO || function() {
        return An.Date.now();
      };
      function sk(a, i) {
        if (typeof i != "function")
          throw new Tr(u);
        return a = vt(a), function() {
          if (--a < 1)
            return i.apply(this, arguments);
        };
      }
      function Ry(a, i, f) {
        return i = f ? n : i, i = a && i == null ? a.length : i, Da(a, T, n, n, n, n, i);
      }
      function My(a, i) {
        var f;
        if (typeof i != "function")
          throw new Tr(u);
        return a = vt(a), function() {
          return --a > 0 && (f = i.apply(this, arguments)), a <= 1 && (i = n), f;
        };
      }
      var np = _t(function(a, i, f) {
        var v = k;
        if (f.length) {
          var x = vo(f, ts(np));
          v |= P;
        }
        return Da(a, v, i, f, x);
      }), Dy = _t(function(a, i, f) {
        var v = k | F;
        if (f.length) {
          var x = vo(f, ts(Dy));
          v |= P;
        }
        return Da(i, v, a, f, x);
      });
      function Ly(a, i, f) {
        i = f ? n : i;
        var v = Da(a, I, n, n, n, n, n, i);
        return v.placeholder = Ly.placeholder, v;
      }
      function Fy(a, i, f) {
        i = f ? n : i;
        var v = Da(a, S, n, n, n, n, n, i);
        return v.placeholder = Fy.placeholder, v;
      }
      function $y(a, i, f) {
        var v, x, M, j, Y, Q, _e = 0, xe = !1, Pe = !1, ze = !0;
        if (typeof a != "function")
          throw new Tr(u);
        i = Ar(i) || 0, fn(f) && (xe = !!f.leading, Pe = "maxWait" in f, M = Pe ? wn(Ar(f.maxWait) || 0, i) : M, ze = "trailing" in f ? !!f.trailing : ze);
        function Qe(gn) {
          var Zr = v, ja = x;
          return v = x = n, _e = gn, j = a.apply(ja, Zr), j;
        }
        function lt(gn) {
          return _e = gn, Y = dl(Ot, i), xe ? Qe(gn) : j;
        }
        function bt(gn) {
          var Zr = gn - Q, ja = gn - _e, ab = i - Zr;
          return Pe ? Dn(ab, M - ja) : ab;
        }
        function it(gn) {
          var Zr = gn - Q, ja = gn - _e;
          return Q === n || Zr >= i || Zr < 0 || Pe && ja >= M;
        }
        function Ot() {
          var gn = gu();
          if (it(gn))
            return It(gn);
          Y = dl(Ot, bt(gn));
        }
        function It(gn) {
          return Y = n, ze && v ? Qe(gn) : (v = x = n, j);
        }
        function vr() {
          Y !== n && Gv(Y), _e = 0, v = Q = x = Y = n;
        }
        function Un() {
          return Y === n ? j : It(gu());
        }
        function yr() {
          var gn = gu(), Zr = it(gn);
          if (v = arguments, x = this, Q = gn, Zr) {
            if (Y === n)
              return lt(Q);
            if (Pe)
              return Gv(Y), Y = dl(Ot, i), Qe(Q);
          }
          return Y === n && (Y = dl(Ot, i)), j;
        }
        return yr.cancel = vr, yr.flush = Un, yr;
      }
      var lk = _t(function(a, i) {
        return Tv(a, 1, i);
      }), ck = _t(function(a, i, f) {
        return Tv(a, Ar(i) || 0, f);
      });
      function uk(a) {
        return Da(a, B);
      }
      function vu(a, i) {
        if (typeof a != "function" || i != null && typeof i != "function")
          throw new Tr(u);
        var f = function() {
          var v = arguments, x = i ? i.apply(this, v) : v[0], M = f.cache;
          if (M.has(x))
            return M.get(x);
          var j = a.apply(this, v);
          return f.cache = M.set(x, j) || M, j;
        };
        return f.cache = new (vu.Cache || Ma)(), f;
      }
      vu.Cache = Ma;
      function yu(a) {
        if (typeof a != "function")
          throw new Tr(u);
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
      function dk(a) {
        return My(2, a);
      }
      var fk = QS(function(a, i) {
        i = i.length == 1 && mt(i[0]) ? ln(i[0], hr(st())) : ln(Rn(i, 1), hr(st()));
        var f = i.length;
        return _t(function(v) {
          for (var x = -1, M = Dn(v.length, f); ++x < M; )
            v[x] = i[x].call(this, v[x]);
          return fr(a, this, v);
        });
      }), rp = _t(function(a, i) {
        var f = vo(i, ts(rp));
        return Da(a, P, n, i, f);
      }), By = _t(function(a, i) {
        var f = vo(i, ts(By));
        return Da(a, C, n, i, f);
      }), pk = La(function(a, i) {
        return Da(a, A, n, n, n, i);
      });
      function hk(a, i) {
        if (typeof a != "function")
          throw new Tr(u);
        return i = i === n ? i : vt(i), _t(a, i);
      }
      function mk(a, i) {
        if (typeof a != "function")
          throw new Tr(u);
        return i = i == null ? 0 : wn(vt(i), 0), _t(function(f) {
          var v = f[i], x = xo(f, 0, i);
          return v && go(x, v), fr(a, this, x);
        });
      }
      function gk(a, i, f) {
        var v = !0, x = !0;
        if (typeof a != "function")
          throw new Tr(u);
        return fn(f) && (v = "leading" in f ? !!f.leading : v, x = "trailing" in f ? !!f.trailing : x), $y(a, i, {
          leading: v,
          maxWait: i,
          trailing: x
        });
      }
      function vk(a) {
        return Ry(a, 1);
      }
      function yk(a, i) {
        return rp(Wf(i), a);
      }
      function bk() {
        if (!arguments.length)
          return [];
        var a = arguments[0];
        return mt(a) ? a : [a];
      }
      function _k(a) {
        return kr(a, b);
      }
      function wk(a, i) {
        return i = typeof i == "function" ? i : n, kr(a, b, i);
      }
      function xk(a) {
        return kr(a, g | b);
      }
      function Ek(a, i) {
        return i = typeof i == "function" ? i : n, kr(a, g | b, i);
      }
      function Ck(a, i) {
        return i == null || Sv(a, i, Sn(i));
      }
      function Kr(a, i) {
        return a === i || a !== a && i !== i;
      }
      var Ok = uu(kf), Sk = uu(function(a, i) {
        return a >= i;
      }), di = Av(/* @__PURE__ */ function() {
        return arguments;
      }()) ? Av : function(a) {
        return pn(a) && Bt.call(a, "callee") && !yv.call(a, "callee");
      }, mt = ce.isArray, Tk = Jg ? hr(Jg) : DS;
      function Jn(a) {
        return a != null && bu(a.length) && !$a(a);
      }
      function mn(a) {
        return pn(a) && Jn(a);
      }
      function Pk(a) {
        return a === !0 || a === !1 || pn(a) && Wn(a) == W;
      }
      var Eo = zO || mp, kk = ev ? hr(ev) : LS;
      function Nk(a) {
        return pn(a) && a.nodeType === 1 && !fl(a);
      }
      function Ik(a) {
        if (a == null)
          return !0;
        if (Jn(a) && (mt(a) || typeof a == "string" || typeof a.splice == "function" || Eo(a) || ns(a) || di(a)))
          return !a.length;
        var i = Ln(a);
        if (i == se || i == we)
          return !a.size;
        if (ul(a))
          return !Af(a).length;
        for (var f in a)
          if (Bt.call(a, f))
            return !1;
        return !0;
      }
      function Ak(a, i) {
        return sl(a, i);
      }
      function Rk(a, i, f) {
        f = typeof f == "function" ? f : n;
        var v = f ? f(a, i) : n;
        return v === n ? sl(a, i, n, f) : !!v;
      }
      function ap(a) {
        if (!pn(a))
          return !1;
        var i = Wn(a);
        return i == D || i == $ || typeof a.message == "string" && typeof a.name == "string" && !fl(a);
      }
      function Mk(a) {
        return typeof a == "number" && _v(a);
      }
      function $a(a) {
        if (!fn(a))
          return !1;
        var i = Wn(a);
        return i == G || i == K || i == De || i == q;
      }
      function jy(a) {
        return typeof a == "number" && a == vt(a);
      }
      function bu(a) {
        return typeof a == "number" && a > -1 && a % 1 == 0 && a <= me;
      }
      function fn(a) {
        var i = typeof a;
        return a != null && (i == "object" || i == "function");
      }
      function pn(a) {
        return a != null && typeof a == "object";
      }
      var Wy = tv ? hr(tv) : $S;
      function Dk(a, i) {
        return a === i || If(a, i, Gf(i));
      }
      function Lk(a, i, f) {
        return f = typeof f == "function" ? f : n, If(a, i, Gf(i), f);
      }
      function Fk(a) {
        return zy(a) && a != +a;
      }
      function $k(a) {
        if (wT(a))
          throw new pt(s);
        return Rv(a);
      }
      function Bk(a) {
        return a === null;
      }
      function jk(a) {
        return a == null;
      }
      function zy(a) {
        return typeof a == "number" || pn(a) && Wn(a) == Ie;
      }
      function fl(a) {
        if (!pn(a) || Wn(a) != Ee)
          return !1;
        var i = qc(a);
        if (i === null)
          return !0;
        var f = Bt.call(i, "constructor") && i.constructor;
        return typeof f == "function" && f instanceof f && zc.call(f) == LO;
      }
      var op = nv ? hr(nv) : BS;
      function Wk(a) {
        return jy(a) && a >= -me && a <= me;
      }
      var Uy = rv ? hr(rv) : jS;
      function _u(a) {
        return typeof a == "string" || !mt(a) && pn(a) && Wn(a) == ke;
      }
      function gr(a) {
        return typeof a == "symbol" || pn(a) && Wn(a) == Ae;
      }
      var ns = av ? hr(av) : WS;
      function zk(a) {
        return a === n;
      }
      function Uk(a) {
        return pn(a) && Ln(a) == $e;
      }
      function Hk(a) {
        return pn(a) && Wn(a) == et;
      }
      var Yk = uu(Rf), qk = uu(function(a, i) {
        return a <= i;
      });
      function Hy(a) {
        if (!a)
          return [];
        if (Jn(a))
          return _u(a) ? qr(a) : Qn(a);
        if (Js && a[Js])
          return CO(a[Js]());
        var i = Ln(a), f = i == se ? _f : i == we ? Bc : rs;
        return f(a);
      }
      function Ba(a) {
        if (!a)
          return a === 0 ? a : 0;
        if (a = Ar(a), a === le || a === -le) {
          var i = a < 0 ? -1 : 1;
          return i * X;
        }
        return a === a ? a : 0;
      }
      function vt(a) {
        var i = Ba(a), f = i % 1;
        return i === i ? f ? i - f : i : 0;
      }
      function Yy(a) {
        return a ? si(vt(a), 0, oe) : 0;
      }
      function Ar(a) {
        if (typeof a == "number")
          return a;
        if (gr(a))
          return te;
        if (fn(a)) {
          var i = typeof a.valueOf == "function" ? a.valueOf() : a;
          a = fn(i) ? i + "" : i;
        }
        if (typeof a != "string")
          return a === 0 ? a : +a;
        a = uv(a);
        var f = TC.test(a);
        return f || kC.test(a) ? sO(a.slice(2), f ? 2 : 8) : SC.test(a) ? te : +a;
      }
      function qy(a) {
        return fa(a, er(a));
      }
      function Vk(a) {
        return a ? si(vt(a), -me, me) : a === 0 ? a : 0;
      }
      function jt(a) {
        return a == null ? "" : mr(a);
      }
      var Gk = Ji(function(a, i) {
        if (ul(i) || Jn(i)) {
          fa(i, Sn(i), a);
          return;
        }
        for (var f in i)
          Bt.call(i, f) && al(a, f, i[f]);
      }), Vy = Ji(function(a, i) {
        fa(i, er(i), a);
      }), Gy = Ji(function(a, i, f, v) {
        fa(i, er(i), a, v);
      }), ip = Ji(function(a, i, f, v) {
        fa(i, Sn(i), a, v);
      }), Kk = La(Sf);
      function Zk(a, i) {
        var f = Qi(a);
        return i == null ? f : Ov(f, i);
      }
      var Xk = _t(function(a, i) {
        a = Xt(a);
        var f = -1, v = i.length, x = v > 2 ? i[2] : n;
        for (x && zn(i[0], i[1], x) && (v = 1); ++f < v; )
          for (var M = i[f], j = er(M), Y = -1, Q = j.length; ++Y < Q; ) {
            var _e = j[Y], xe = a[_e];
            (xe === n || Kr(xe, Ki[_e]) && !Bt.call(a, _e)) && (a[_e] = M[_e]);
          }
        return a;
      }), Qk = _t(function(a) {
        return a.push(n, uy), fr(Ky, n, a);
      });
      function Jk(a, i) {
        return iv(a, st(i, 3), da);
      }
      function eN(a, i) {
        return iv(a, st(i, 3), Pf);
      }
      function tN(a, i) {
        return a == null ? a : Tf(a, st(i, 3), er);
      }
      function nN(a, i) {
        return a == null ? a : Nv(a, st(i, 3), er);
      }
      function rN(a, i) {
        return a && da(a, st(i, 3));
      }
      function aN(a, i) {
        return a && Pf(a, st(i, 3));
      }
      function oN(a) {
        return a == null ? [] : nu(a, Sn(a));
      }
      function iN(a) {
        return a == null ? [] : nu(a, er(a));
      }
      function sp(a, i, f) {
        var v = a == null ? n : li(a, i);
        return v === n ? f : v;
      }
      function sN(a, i) {
        return a != null && py(a, i, IS);
      }
      function lp(a, i) {
        return a != null && py(a, i, AS);
      }
      var lN = oy(function(a, i, f) {
        i != null && typeof i.toString != "function" && (i = Uc.call(i)), a[i] = f;
      }, up(tr)), cN = oy(function(a, i, f) {
        i != null && typeof i.toString != "function" && (i = Uc.call(i)), Bt.call(a, i) ? a[i].push(f) : a[i] = [f];
      }, st), uN = _t(il);
      function Sn(a) {
        return Jn(a) ? Ev(a) : Af(a);
      }
      function er(a) {
        return Jn(a) ? Ev(a, !0) : zS(a);
      }
      function dN(a, i) {
        var f = {};
        return i = st(i, 3), da(a, function(v, x, M) {
          ua(f, i(v, x, M), v);
        }), f;
      }
      function fN(a, i) {
        var f = {};
        return i = st(i, 3), da(a, function(v, x, M) {
          ua(f, x, i(v, x, M));
        }), f;
      }
      var pN = Ji(function(a, i, f) {
        ru(a, i, f);
      }), Ky = Ji(function(a, i, f, v) {
        ru(a, i, f, v);
      }), hN = La(function(a, i) {
        var f = {};
        if (a == null)
          return f;
        var v = !1;
        i = ln(i, function(M) {
          return M = wo(M, a), v || (v = M.length > 1), M;
        }), fa(a, qf(a), f), v && (f = kr(f, g | y | b, cT));
        for (var x = i.length; x--; )
          $f(f, i[x]);
        return f;
      });
      function mN(a, i) {
        return Zy(a, yu(st(i)));
      }
      var gN = La(function(a, i) {
        return a == null ? {} : HS(a, i);
      });
      function Zy(a, i) {
        if (a == null)
          return {};
        var f = ln(qf(a), function(v) {
          return [v];
        });
        return i = st(i), jv(a, f, function(v, x) {
          return i(v, x[0]);
        });
      }
      function vN(a, i, f) {
        i = wo(i, a);
        var v = -1, x = i.length;
        for (x || (x = 1, a = n); ++v < x; ) {
          var M = a == null ? n : a[Gr(i[v])];
          M === n && (v = x, M = f), a = $a(M) ? M.call(a) : M;
        }
        return a;
      }
      function yN(a, i, f) {
        return a == null ? a : ll(a, i, f);
      }
      function bN(a, i, f, v) {
        return v = typeof v == "function" ? v : n, a == null ? a : ll(a, i, f, v);
      }
      var Xy = ly(Sn), Qy = ly(er);
      function _N(a, i, f) {
        var v = mt(a), x = v || Eo(a) || ns(a);
        if (i = st(i, 4), f == null) {
          var M = a && a.constructor;
          x ? f = v ? new M() : [] : fn(a) ? f = $a(M) ? Qi(qc(a)) : {} : f = {};
        }
        return (x ? pr : da)(a, function(j, Y, Q) {
          return i(f, j, Y, Q);
        }), f;
      }
      function wN(a, i) {
        return a == null ? !0 : $f(a, i);
      }
      function xN(a, i, f) {
        return a == null ? a : Yv(a, i, Wf(f));
      }
      function EN(a, i, f, v) {
        return v = typeof v == "function" ? v : n, a == null ? a : Yv(a, i, Wf(f), v);
      }
      function rs(a) {
        return a == null ? [] : bf(a, Sn(a));
      }
      function CN(a) {
        return a == null ? [] : bf(a, er(a));
      }
      function ON(a, i, f) {
        return f === n && (f = i, i = n), f !== n && (f = Ar(f), f = f === f ? f : 0), i !== n && (i = Ar(i), i = i === i ? i : 0), si(Ar(a), i, f);
      }
      function SN(a, i, f) {
        return i = Ba(i), f === n ? (f = i, i = 0) : f = Ba(f), a = Ar(a), RS(a, i, f);
      }
      function TN(a, i, f) {
        if (f && typeof f != "boolean" && zn(a, i, f) && (i = f = n), f === n && (typeof i == "boolean" ? (f = i, i = n) : typeof a == "boolean" && (f = a, a = n)), a === n && i === n ? (a = 0, i = 1) : (a = Ba(a), i === n ? (i = a, a = 0) : i = Ba(i)), a > i) {
          var v = a;
          a = i, i = v;
        }
        if (f || a % 1 || i % 1) {
          var x = wv();
          return Dn(a + x * (i - a + iO("1e-" + ((x + "").length - 1))), i);
        }
        return Df(a, i);
      }
      var PN = es(function(a, i, f) {
        return i = i.toLowerCase(), a + (f ? Jy(i) : i);
      });
      function Jy(a) {
        return cp(jt(a).toLowerCase());
      }
      function eb(a) {
        return a = jt(a), a && a.replace(IC, bO).replace(ZC, "");
      }
      function kN(a, i, f) {
        a = jt(a), i = mr(i);
        var v = a.length;
        f = f === n ? v : si(vt(f), 0, v);
        var x = f;
        return f -= i.length, f >= 0 && a.slice(f, x) == i;
      }
      function NN(a) {
        return a = jt(a), a && ca.test(a) ? a.replace(la, _O) : a;
      }
      function IN(a) {
        return a = jt(a), a && yC.test(a) ? a.replace(nf, "\\$&") : a;
      }
      var AN = es(function(a, i, f) {
        return a + (f ? "-" : "") + i.toLowerCase();
      }), RN = es(function(a, i, f) {
        return a + (f ? " " : "") + i.toLowerCase();
      }), MN = ny("toLowerCase");
      function DN(a, i, f) {
        a = jt(a), i = vt(i);
        var v = i ? Vi(a) : 0;
        if (!i || v >= i)
          return a;
        var x = (i - v) / 2;
        return cu(Zc(x), f) + a + cu(Kc(x), f);
      }
      function LN(a, i, f) {
        a = jt(a), i = vt(i);
        var v = i ? Vi(a) : 0;
        return i && v < i ? a + cu(i - v, f) : a;
      }
      function FN(a, i, f) {
        a = jt(a), i = vt(i);
        var v = i ? Vi(a) : 0;
        return i && v < i ? cu(i - v, f) + a : a;
      }
      function $N(a, i, f) {
        return f || i == null ? i = 0 : i && (i = +i), qO(jt(a).replace(rf, ""), i || 0);
      }
      function BN(a, i, f) {
        return (f ? zn(a, i, f) : i === n) ? i = 1 : i = vt(i), Lf(jt(a), i);
      }
      function jN() {
        var a = arguments, i = jt(a[0]);
        return a.length < 3 ? i : i.replace(a[1], a[2]);
      }
      var WN = es(function(a, i, f) {
        return a + (f ? "_" : "") + i.toLowerCase();
      });
      function zN(a, i, f) {
        return f && typeof f != "number" && zn(a, i, f) && (i = f = n), f = f === n ? oe : f >>> 0, f ? (a = jt(a), a && (typeof i == "string" || i != null && !op(i)) && (i = mr(i), !i && qi(a)) ? xo(qr(a), 0, f) : a.split(i, f)) : [];
      }
      var UN = es(function(a, i, f) {
        return a + (f ? " " : "") + cp(i);
      });
      function HN(a, i, f) {
        return a = jt(a), f = f == null ? 0 : si(vt(f), 0, a.length), i = mr(i), a.slice(f, f + i.length) == i;
      }
      function YN(a, i, f) {
        var v = N.templateSettings;
        f && zn(a, i, f) && (i = n), a = jt(a), i = ip({}, i, v, cy);
        var x = ip({}, i.imports, v.imports, cy), M = Sn(x), j = bf(x, M);
        pr(M, function(it) {
          if (Ig.test(it))
            throw new pt(d);
        });
        var Y, Q, _e = 0, xe = i.interpolate || Mc, Pe = "__p += '", ze = wf(
          (i.escape || Mc).source + "|" + xe.source + "|" + (xe === Ng ? OC : Mc).source + "|" + (i.evaluate || Mc).source + "|$",
          "g"
        ), Qe = "//# sourceURL=" + (Bt.call(i, "sourceURL") ? (i.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++tO + "]") + `
`;
        a.replace(ze, function(it, Ot, It, vr, Un, yr) {
          return It || (It = vr), Pe += a.slice(_e, yr).replace(AC, wO), Ot && (Y = !0, Pe += `' +
__e(` + Ot + `) +
'`), Un && (Q = !0, Pe += `';
` + Un + `;
__p += '`), It && (Pe += `' +
((__t = (` + It + `)) == null ? '' : __t) +
'`), _e = yr + it.length, it;
        }), Pe += `';
`;
        var lt = Bt.call(i, "variable") && i.variable;
        if (!lt)
          Pe = `with (obj) {
` + Pe + `
}
`;
        else if (Ig.test(lt))
          throw new pt(c);
        Pe = (Q ? Pe.replace($t, "") : Pe).replace(at, "$1").replace(dn, "$1;"), Pe = "function(" + (lt || "obj") + `) {
` + (lt ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (Y ? ", __e = _.escape" : "") + (Q ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + Pe + `return __p
}`;
        var bt = nb(function() {
          return Ft(M, Qe + "return " + Pe).apply(n, j);
        });
        if (bt.source = Pe, ap(bt))
          throw bt;
        return bt;
      }
      function qN(a) {
        return jt(a).toLowerCase();
      }
      function VN(a) {
        return jt(a).toUpperCase();
      }
      function GN(a, i, f) {
        if (a = jt(a), a && (f || i === n))
          return uv(a);
        if (!a || !(i = mr(i)))
          return a;
        var v = qr(a), x = qr(i), M = dv(v, x), j = fv(v, x) + 1;
        return xo(v, M, j).join("");
      }
      function KN(a, i, f) {
        if (a = jt(a), a && (f || i === n))
          return a.slice(0, hv(a) + 1);
        if (!a || !(i = mr(i)))
          return a;
        var v = qr(a), x = fv(v, qr(i)) + 1;
        return xo(v, 0, x).join("");
      }
      function ZN(a, i, f) {
        if (a = jt(a), a && (f || i === n))
          return a.replace(rf, "");
        if (!a || !(i = mr(i)))
          return a;
        var v = qr(a), x = dv(v, qr(i));
        return xo(v, x).join("");
      }
      function XN(a, i) {
        var f = H, v = ne;
        if (fn(i)) {
          var x = "separator" in i ? i.separator : x;
          f = "length" in i ? vt(i.length) : f, v = "omission" in i ? mr(i.omission) : v;
        }
        a = jt(a);
        var M = a.length;
        if (qi(a)) {
          var j = qr(a);
          M = j.length;
        }
        if (f >= M)
          return a;
        var Y = f - Vi(v);
        if (Y < 1)
          return v;
        var Q = j ? xo(j, 0, Y).join("") : a.slice(0, Y);
        if (x === n)
          return Q + v;
        if (j && (Y += Q.length - Y), op(x)) {
          if (a.slice(Y).search(x)) {
            var _e, xe = Q;
            for (x.global || (x = wf(x.source, jt(Ag.exec(x)) + "g")), x.lastIndex = 0; _e = x.exec(xe); )
              var Pe = _e.index;
            Q = Q.slice(0, Pe === n ? Y : Pe);
          }
        } else if (a.indexOf(mr(x), Y) != Y) {
          var ze = Q.lastIndexOf(x);
          ze > -1 && (Q = Q.slice(0, ze));
        }
        return Q + v;
      }
      function QN(a) {
        return a = jt(a), a && Rc.test(a) ? a.replace(Xn, PO) : a;
      }
      var JN = es(function(a, i, f) {
        return a + (f ? " " : "") + i.toUpperCase();
      }), cp = ny("toUpperCase");
      function tb(a, i, f) {
        return a = jt(a), i = f ? n : i, i === n ? EO(a) ? IO(a) : hO(a) : a.match(i) || [];
      }
      var nb = _t(function(a, i) {
        try {
          return fr(a, n, i);
        } catch (f) {
          return ap(f) ? f : new pt(f);
        }
      }), eI = La(function(a, i) {
        return pr(i, function(f) {
          f = Gr(f), ua(a, f, np(a[f], a));
        }), a;
      });
      function tI(a) {
        var i = a == null ? 0 : a.length, f = st();
        return a = i ? ln(a, function(v) {
          if (typeof v[1] != "function")
            throw new Tr(u);
          return [f(v[0]), v[1]];
        }) : [], _t(function(v) {
          for (var x = -1; ++x < i; ) {
            var M = a[x];
            if (fr(M[0], this, v))
              return fr(M[1], this, v);
          }
        });
      }
      function nI(a) {
        return PS(kr(a, g));
      }
      function up(a) {
        return function() {
          return a;
        };
      }
      function rI(a, i) {
        return a == null || a !== a ? i : a;
      }
      var aI = ay(), oI = ay(!0);
      function tr(a) {
        return a;
      }
      function dp(a) {
        return Mv(typeof a == "function" ? a : kr(a, g));
      }
      function iI(a) {
        return Lv(kr(a, g));
      }
      function sI(a, i) {
        return Fv(a, kr(i, g));
      }
      var lI = _t(function(a, i) {
        return function(f) {
          return il(f, a, i);
        };
      }), cI = _t(function(a, i) {
        return function(f) {
          return il(a, f, i);
        };
      });
      function fp(a, i, f) {
        var v = Sn(i), x = nu(i, v);
        f == null && !(fn(i) && (x.length || !v.length)) && (f = i, i = a, a = this, x = nu(i, Sn(i)));
        var M = !(fn(f) && "chain" in f) || !!f.chain, j = $a(a);
        return pr(x, function(Y) {
          var Q = i[Y];
          a[Y] = Q, j && (a.prototype[Y] = function() {
            var _e = this.__chain__;
            if (M || _e) {
              var xe = a(this.__wrapped__), Pe = xe.__actions__ = Qn(this.__actions__);
              return Pe.push({ func: Q, args: arguments, thisArg: a }), xe.__chain__ = _e, xe;
            }
            return Q.apply(a, go([this.value()], arguments));
          });
        }), a;
      }
      function uI() {
        return An._ === this && (An._ = FO), this;
      }
      function pp() {
      }
      function dI(a) {
        return a = vt(a), _t(function(i) {
          return $v(i, a);
        });
      }
      var fI = Uf(ln), pI = Uf(ov), hI = Uf(hf);
      function rb(a) {
        return Zf(a) ? mf(Gr(a)) : YS(a);
      }
      function mI(a) {
        return function(i) {
          return a == null ? n : li(a, i);
        };
      }
      var gI = iy(), vI = iy(!0);
      function hp() {
        return [];
      }
      function mp() {
        return !1;
      }
      function yI() {
        return {};
      }
      function bI() {
        return "";
      }
      function _I() {
        return !0;
      }
      function wI(a, i) {
        if (a = vt(a), a < 1 || a > me)
          return [];
        var f = oe, v = Dn(a, oe);
        i = st(i), a -= oe;
        for (var x = yf(v, i); ++f < a; )
          i(f);
        return x;
      }
      function xI(a) {
        return mt(a) ? ln(a, Gr) : gr(a) ? [a] : Qn(xy(jt(a)));
      }
      function EI(a) {
        var i = ++DO;
        return jt(a) + i;
      }
      var CI = lu(function(a, i) {
        return a + i;
      }, 0), OI = Hf("ceil"), SI = lu(function(a, i) {
        return a / i;
      }, 1), TI = Hf("floor");
      function PI(a) {
        return a && a.length ? tu(a, tr, kf) : n;
      }
      function kI(a, i) {
        return a && a.length ? tu(a, st(i, 2), kf) : n;
      }
      function NI(a) {
        return lv(a, tr);
      }
      function II(a, i) {
        return lv(a, st(i, 2));
      }
      function AI(a) {
        return a && a.length ? tu(a, tr, Rf) : n;
      }
      function RI(a, i) {
        return a && a.length ? tu(a, st(i, 2), Rf) : n;
      }
      var MI = lu(function(a, i) {
        return a * i;
      }, 1), DI = Hf("round"), LI = lu(function(a, i) {
        return a - i;
      }, 0);
      function FI(a) {
        return a && a.length ? vf(a, tr) : 0;
      }
      function $I(a, i) {
        return a && a.length ? vf(a, st(i, 2)) : 0;
      }
      return N.after = sk, N.ary = Ry, N.assign = Gk, N.assignIn = Vy, N.assignInWith = Gy, N.assignWith = ip, N.at = Kk, N.before = My, N.bind = np, N.bindAll = eI, N.bindKey = Dy, N.castArray = bk, N.chain = Ny, N.chunk = PT, N.compact = kT, N.concat = NT, N.cond = tI, N.conforms = nI, N.constant = up, N.countBy = $P, N.create = Zk, N.curry = Ly, N.curryRight = Fy, N.debounce = $y, N.defaults = Xk, N.defaultsDeep = Qk, N.defer = lk, N.delay = ck, N.difference = IT, N.differenceBy = AT, N.differenceWith = RT, N.drop = MT, N.dropRight = DT, N.dropRightWhile = LT, N.dropWhile = FT, N.fill = $T, N.filter = jP, N.flatMap = UP, N.flatMapDeep = HP, N.flatMapDepth = YP, N.flatten = Sy, N.flattenDeep = BT, N.flattenDepth = jT, N.flip = uk, N.flow = aI, N.flowRight = oI, N.fromPairs = WT, N.functions = oN, N.functionsIn = iN, N.groupBy = qP, N.initial = UT, N.intersection = HT, N.intersectionBy = YT, N.intersectionWith = qT, N.invert = lN, N.invertBy = cN, N.invokeMap = GP, N.iteratee = dp, N.keyBy = KP, N.keys = Sn, N.keysIn = er, N.map = mu, N.mapKeys = dN, N.mapValues = fN, N.matches = iI, N.matchesProperty = sI, N.memoize = vu, N.merge = pN, N.mergeWith = Ky, N.method = lI, N.methodOf = cI, N.mixin = fp, N.negate = yu, N.nthArg = dI, N.omit = hN, N.omitBy = mN, N.once = dk, N.orderBy = ZP, N.over = fI, N.overArgs = fk, N.overEvery = pI, N.overSome = hI, N.partial = rp, N.partialRight = By, N.partition = XP, N.pick = gN, N.pickBy = Zy, N.property = rb, N.propertyOf = mI, N.pull = ZT, N.pullAll = Py, N.pullAllBy = XT, N.pullAllWith = QT, N.pullAt = JT, N.range = gI, N.rangeRight = vI, N.rearg = pk, N.reject = ek, N.remove = eP, N.rest = hk, N.reverse = ep, N.sampleSize = nk, N.set = yN, N.setWith = bN, N.shuffle = rk, N.slice = tP, N.sortBy = ik, N.sortedUniq = lP, N.sortedUniqBy = cP, N.split = zN, N.spread = mk, N.tail = uP, N.take = dP, N.takeRight = fP, N.takeRightWhile = pP, N.takeWhile = hP, N.tap = kP, N.throttle = gk, N.thru = hu, N.toArray = Hy, N.toPairs = Xy, N.toPairsIn = Qy, N.toPath = xI, N.toPlainObject = qy, N.transform = _N, N.unary = vk, N.union = mP, N.unionBy = gP, N.unionWith = vP, N.uniq = yP, N.uniqBy = bP, N.uniqWith = _P, N.unset = wN, N.unzip = tp, N.unzipWith = ky, N.update = xN, N.updateWith = EN, N.values = rs, N.valuesIn = CN, N.without = wP, N.words = tb, N.wrap = yk, N.xor = xP, N.xorBy = EP, N.xorWith = CP, N.zip = OP, N.zipObject = SP, N.zipObjectDeep = TP, N.zipWith = PP, N.entries = Xy, N.entriesIn = Qy, N.extend = Vy, N.extendWith = Gy, fp(N, N), N.add = CI, N.attempt = nb, N.camelCase = PN, N.capitalize = Jy, N.ceil = OI, N.clamp = ON, N.clone = _k, N.cloneDeep = xk, N.cloneDeepWith = Ek, N.cloneWith = wk, N.conformsTo = Ck, N.deburr = eb, N.defaultTo = rI, N.divide = SI, N.endsWith = kN, N.eq = Kr, N.escape = NN, N.escapeRegExp = IN, N.every = BP, N.find = WP, N.findIndex = Cy, N.findKey = Jk, N.findLast = zP, N.findLastIndex = Oy, N.findLastKey = eN, N.floor = TI, N.forEach = Iy, N.forEachRight = Ay, N.forIn = tN, N.forInRight = nN, N.forOwn = rN, N.forOwnRight = aN, N.get = sp, N.gt = Ok, N.gte = Sk, N.has = sN, N.hasIn = lp, N.head = Ty, N.identity = tr, N.includes = VP, N.indexOf = zT, N.inRange = SN, N.invoke = uN, N.isArguments = di, N.isArray = mt, N.isArrayBuffer = Tk, N.isArrayLike = Jn, N.isArrayLikeObject = mn, N.isBoolean = Pk, N.isBuffer = Eo, N.isDate = kk, N.isElement = Nk, N.isEmpty = Ik, N.isEqual = Ak, N.isEqualWith = Rk, N.isError = ap, N.isFinite = Mk, N.isFunction = $a, N.isInteger = jy, N.isLength = bu, N.isMap = Wy, N.isMatch = Dk, N.isMatchWith = Lk, N.isNaN = Fk, N.isNative = $k, N.isNil = jk, N.isNull = Bk, N.isNumber = zy, N.isObject = fn, N.isObjectLike = pn, N.isPlainObject = fl, N.isRegExp = op, N.isSafeInteger = Wk, N.isSet = Uy, N.isString = _u, N.isSymbol = gr, N.isTypedArray = ns, N.isUndefined = zk, N.isWeakMap = Uk, N.isWeakSet = Hk, N.join = VT, N.kebabCase = AN, N.last = Ir, N.lastIndexOf = GT, N.lowerCase = RN, N.lowerFirst = MN, N.lt = Yk, N.lte = qk, N.max = PI, N.maxBy = kI, N.mean = NI, N.meanBy = II, N.min = AI, N.minBy = RI, N.stubArray = hp, N.stubFalse = mp, N.stubObject = yI, N.stubString = bI, N.stubTrue = _I, N.multiply = MI, N.nth = KT, N.noConflict = uI, N.noop = pp, N.now = gu, N.pad = DN, N.padEnd = LN, N.padStart = FN, N.parseInt = $N, N.random = TN, N.reduce = QP, N.reduceRight = JP, N.repeat = BN, N.replace = jN, N.result = vN, N.round = DI, N.runInContext = Z, N.sample = tk, N.size = ak, N.snakeCase = WN, N.some = ok, N.sortedIndex = nP, N.sortedIndexBy = rP, N.sortedIndexOf = aP, N.sortedLastIndex = oP, N.sortedLastIndexBy = iP, N.sortedLastIndexOf = sP, N.startCase = UN, N.startsWith = HN, N.subtract = LI, N.sum = FI, N.sumBy = $I, N.template = YN, N.times = wI, N.toFinite = Ba, N.toInteger = vt, N.toLength = Yy, N.toLower = qN, N.toNumber = Ar, N.toSafeInteger = Vk, N.toString = jt, N.toUpper = VN, N.trim = GN, N.trimEnd = KN, N.trimStart = ZN, N.truncate = XN, N.unescape = QN, N.uniqueId = EI, N.upperCase = JN, N.upperFirst = cp, N.each = Iy, N.eachRight = Ay, N.first = Ty, fp(N, function() {
        var a = {};
        return da(N, function(i, f) {
          Bt.call(N.prototype, f) || (a[f] = i);
        }), a;
      }(), { chain: !1 }), N.VERSION = r, pr(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(a) {
        N[a].placeholder = N;
      }), pr(["drop", "take"], function(a, i) {
        Pt.prototype[a] = function(f) {
          f = f === n ? 1 : wn(vt(f), 0);
          var v = this.__filtered__ && !i ? new Pt(this) : this.clone();
          return v.__filtered__ ? v.__takeCount__ = Dn(f, v.__takeCount__) : v.__views__.push({
            size: Dn(f, oe),
            type: a + (v.__dir__ < 0 ? "Right" : "")
          }), v;
        }, Pt.prototype[a + "Right"] = function(f) {
          return this.reverse()[a](f).reverse();
        };
      }), pr(["filter", "map", "takeWhile"], function(a, i) {
        var f = i + 1, v = f == he || f == Ne;
        Pt.prototype[a] = function(x) {
          var M = this.clone();
          return M.__iteratees__.push({
            iteratee: st(x, 3),
            type: f
          }), M.__filtered__ = M.__filtered__ || v, M;
        };
      }), pr(["head", "last"], function(a, i) {
        var f = "take" + (i ? "Right" : "");
        Pt.prototype[a] = function() {
          return this[f](1).value()[0];
        };
      }), pr(["initial", "tail"], function(a, i) {
        var f = "drop" + (i ? "" : "Right");
        Pt.prototype[a] = function() {
          return this.__filtered__ ? new Pt(this) : this[f](1);
        };
      }), Pt.prototype.compact = function() {
        return this.filter(tr);
      }, Pt.prototype.find = function(a) {
        return this.filter(a).head();
      }, Pt.prototype.findLast = function(a) {
        return this.reverse().find(a);
      }, Pt.prototype.invokeMap = _t(function(a, i) {
        return typeof a == "function" ? new Pt(this) : this.map(function(f) {
          return il(f, a, i);
        });
      }), Pt.prototype.reject = function(a) {
        return this.filter(yu(st(a)));
      }, Pt.prototype.slice = function(a, i) {
        a = vt(a);
        var f = this;
        return f.__filtered__ && (a > 0 || i < 0) ? new Pt(f) : (a < 0 ? f = f.takeRight(-a) : a && (f = f.drop(a)), i !== n && (i = vt(i), f = i < 0 ? f.dropRight(-i) : f.take(i - a)), f);
      }, Pt.prototype.takeRightWhile = function(a) {
        return this.reverse().takeWhile(a).reverse();
      }, Pt.prototype.toArray = function() {
        return this.take(oe);
      }, da(Pt.prototype, function(a, i) {
        var f = /^(?:filter|find|map|reject)|While$/.test(i), v = /^(?:head|last)$/.test(i), x = N[v ? "take" + (i == "last" ? "Right" : "") : i], M = v || /^find/.test(i);
        x && (N.prototype[i] = function() {
          var j = this.__wrapped__, Y = v ? [1] : arguments, Q = j instanceof Pt, _e = Y[0], xe = Q || mt(j), Pe = function(Ot) {
            var It = x.apply(N, go([Ot], Y));
            return v && ze ? It[0] : It;
          };
          xe && f && typeof _e == "function" && _e.length != 1 && (Q = xe = !1);
          var ze = this.__chain__, Qe = !!this.__actions__.length, lt = M && !ze, bt = Q && !Qe;
          if (!M && xe) {
            j = bt ? j : new Pt(this);
            var it = a.apply(j, Y);
            return it.__actions__.push({ func: hu, args: [Pe], thisArg: n }), new Pr(it, ze);
          }
          return lt && bt ? a.apply(this, Y) : (it = this.thru(Pe), lt ? v ? it.value()[0] : it.value() : it);
        });
      }), pr(["pop", "push", "shift", "sort", "splice", "unshift"], function(a) {
        var i = jc[a], f = /^(?:push|sort|unshift)$/.test(a) ? "tap" : "thru", v = /^(?:pop|shift)$/.test(a);
        N.prototype[a] = function() {
          var x = arguments;
          if (v && !this.__chain__) {
            var M = this.value();
            return i.apply(mt(M) ? M : [], x);
          }
          return this[f](function(j) {
            return i.apply(mt(j) ? j : [], x);
          });
        };
      }), da(Pt.prototype, function(a, i) {
        var f = N[i];
        if (f) {
          var v = f.name + "";
          Bt.call(Xi, v) || (Xi[v] = []), Xi[v].push({ name: i, func: f });
        }
      }), Xi[su(n, F).name] = [{
        name: "wrapper",
        func: n
      }], Pt.prototype.clone = JO, Pt.prototype.reverse = eS, Pt.prototype.value = tS, N.prototype.at = NP, N.prototype.chain = IP, N.prototype.commit = AP, N.prototype.next = RP, N.prototype.plant = DP, N.prototype.reverse = LP, N.prototype.toJSON = N.prototype.valueOf = N.prototype.value = FP, N.prototype.first = N.prototype.head, Js && (N.prototype[Js] = MP), N;
    }, Gi = AO();
    ri ? ((ri.exports = Gi)._ = Gi, uf._ = Gi) : An._ = Gi;
  }).call(is);
})(td, td.exports);
var R = td.exports;
//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Rw;
function Be() {
  return Rw.apply(null, arguments);
}
function TB(e) {
  Rw = e;
}
function na(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function Ci(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function Dt(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Im(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (Dt(e, t))
      return !1;
  return !0;
}
function rr(e) {
  return e === void 0;
}
function eo(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function Cc(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function Mw(e, t) {
  var n = [], r, o = e.length;
  for (r = 0; r < o; ++r)
    n.push(t(e[r], r));
  return n;
}
function ko(e, t) {
  for (var n in t)
    Dt(t, n) && (e[n] = t[n]);
  return Dt(t, "toString") && (e.toString = t.toString), Dt(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function Na(e, t, n, r) {
  return rx(e, t, n, r, !0).utc();
}
function PB() {
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
function yt(e) {
  return e._pf == null && (e._pf = PB()), e._pf;
}
var Ch;
Array.prototype.some ? Ch = Array.prototype.some : Ch = function(e) {
  var t = Object(this), n = t.length >>> 0, r;
  for (r = 0; r < n; r++)
    if (r in t && e.call(this, t[r], r, t))
      return !0;
  return !1;
};
function Am(e) {
  var t = null, n = !1, r = e._d && !isNaN(e._d.getTime());
  if (r && (t = yt(e), n = Ch.call(t.parsedDateParts, function(o) {
    return o != null;
  }), r = t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n), e._strict && (r = r && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(e))
    e._isValid = r;
  else
    return r;
  return e._isValid;
}
function Md(e) {
  var t = Na(NaN);
  return e != null ? ko(yt(t), e) : yt(t).userInvalidated = !0, t;
}
var O0 = Be.momentProperties = [], Mp = !1;
function Rm(e, t) {
  var n, r, o, s = O0.length;
  if (rr(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), rr(t._i) || (e._i = t._i), rr(t._f) || (e._f = t._f), rr(t._l) || (e._l = t._l), rr(t._strict) || (e._strict = t._strict), rr(t._tzm) || (e._tzm = t._tzm), rr(t._isUTC) || (e._isUTC = t._isUTC), rr(t._offset) || (e._offset = t._offset), rr(t._pf) || (e._pf = yt(t)), rr(t._locale) || (e._locale = t._locale), s > 0)
    for (n = 0; n < s; n++)
      r = O0[n], o = t[r], rr(o) || (e[r] = o);
  return e;
}
function Oc(e) {
  Rm(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), Mp === !1 && (Mp = !0, Be.updateOffset(this), Mp = !1);
}
function ra(e) {
  return e instanceof Oc || e != null && e._isAMomentObject != null;
}
function Dw(e) {
  Be.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function Hr(e, t) {
  var n = !0;
  return ko(function() {
    if (Be.deprecationHandler != null && Be.deprecationHandler(null, e), n) {
      var r = [], o, s, u, c = arguments.length;
      for (s = 0; s < c; s++) {
        if (o = "", typeof arguments[s] == "object") {
          o += `
[` + s + "] ";
          for (u in arguments[0])
            Dt(arguments[0], u) && (o += u + ": " + arguments[0][u] + ", ");
          o = o.slice(0, -2);
        } else
          o = arguments[s];
        r.push(o);
      }
      Dw(
        e + `
Arguments: ` + Array.prototype.slice.call(r).join("") + `
` + new Error().stack
      ), n = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var S0 = {};
function Lw(e, t) {
  Be.deprecationHandler != null && Be.deprecationHandler(e, t), S0[e] || (Dw(t), S0[e] = !0);
}
Be.suppressDeprecationWarnings = !1;
Be.deprecationHandler = null;
function Ia(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function kB(e) {
  var t, n;
  for (n in e)
    Dt(e, n) && (t = e[n], Ia(t) ? this[n] = t : this["_" + n] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function Oh(e, t) {
  var n = ko({}, e), r;
  for (r in t)
    Dt(t, r) && (Ci(e[r]) && Ci(t[r]) ? (n[r] = {}, ko(n[r], e[r]), ko(n[r], t[r])) : t[r] != null ? n[r] = t[r] : delete n[r]);
  for (r in e)
    Dt(e, r) && !Dt(t, r) && Ci(e[r]) && (n[r] = ko({}, n[r]));
  return n;
}
function Mm(e) {
  e != null && this.set(e);
}
var Sh;
Object.keys ? Sh = Object.keys : Sh = function(e) {
  var t, n = [];
  for (t in e)
    Dt(e, t) && n.push(t);
  return n;
};
var NB = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function IB(e, t, n) {
  var r = this._calendar[e] || this._calendar.sameElse;
  return Ia(r) ? r.call(t, n) : r;
}
function Pa(e, t, n) {
  var r = "" + Math.abs(e), o = t - r.length, s = e >= 0;
  return (s ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, o)).toString().substr(1) + r;
}
var Dm = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Ou = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Dp = {}, ms = {};
function nt(e, t, n, r) {
  var o = r;
  typeof r == "string" && (o = function() {
    return this[r]();
  }), e && (ms[e] = o), t && (ms[t[0]] = function() {
    return Pa(o.apply(this, arguments), t[1], t[2]);
  }), n && (ms[n] = function() {
    return this.localeData().ordinal(
      o.apply(this, arguments),
      e
    );
  });
}
function AB(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function RB(e) {
  var t = e.match(Dm), n, r;
  for (n = 0, r = t.length; n < r; n++)
    ms[t[n]] ? t[n] = ms[t[n]] : t[n] = AB(t[n]);
  return function(o) {
    var s = "", u;
    for (u = 0; u < r; u++)
      s += Ia(t[u]) ? t[u].call(o, e) : t[u];
    return s;
  };
}
function Fu(e, t) {
  return e.isValid() ? (t = Fw(t, e.localeData()), Dp[t] = Dp[t] || RB(t), Dp[t](e)) : e.localeData().invalidDate();
}
function Fw(e, t) {
  var n = 5;
  function r(o) {
    return t.longDateFormat(o) || o;
  }
  for (Ou.lastIndex = 0; n >= 0 && Ou.test(e); )
    e = e.replace(
      Ou,
      r
    ), Ou.lastIndex = 0, n -= 1;
  return e;
}
var MB = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function DB(e) {
  var t = this._longDateFormat[e], n = this._longDateFormat[e.toUpperCase()];
  return t || !n ? t : (this._longDateFormat[e] = n.match(Dm).map(function(r) {
    return r === "MMMM" || r === "MM" || r === "DD" || r === "dddd" ? r.slice(1) : r;
  }).join(""), this._longDateFormat[e]);
}
var LB = "Invalid date";
function FB() {
  return this._invalidDate;
}
var $B = "%d", BB = /\d{1,2}/;
function jB(e) {
  return this._ordinal.replace("%d", e);
}
var WB = {
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
function zB(e, t, n, r) {
  var o = this._relativeTime[n];
  return Ia(o) ? o(e, t, n, r) : o.replace(/%d/i, e);
}
function UB(e, t) {
  var n = this._relativeTime[e > 0 ? "future" : "past"];
  return Ia(n) ? n(t) : n.replace(/%s/i, t);
}
var T0 = {
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
function Yr(e) {
  return typeof e == "string" ? T0[e] || T0[e.toLowerCase()] : void 0;
}
function Lm(e) {
  var t = {}, n, r;
  for (r in e)
    Dt(e, r) && (n = Yr(r), n && (t[n] = e[r]));
  return t;
}
var HB = {
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
function YB(e) {
  var t = [], n;
  for (n in e)
    Dt(e, n) && t.push({ unit: n, priority: HB[n] });
  return t.sort(function(r, o) {
    return r.priority - o.priority;
  }), t;
}
var $w = /\d/, Cr = /\d\d/, Bw = /\d{3}/, Fm = /\d{4}/, Dd = /[+-]?\d{6}/, sn = /\d\d?/, jw = /\d\d\d\d?/, Ww = /\d\d\d\d\d\d?/, Ld = /\d{1,3}/, $m = /\d{1,4}/, Fd = /[+-]?\d{1,6}/, Vs = /\d+/, $d = /[+-]?\d+/, qB = /Z|[+-]\d\d:?\d\d/gi, Bd = /Z|[+-]\d\d(?::?\d\d)?/gi, VB = /[+-]?\d+(\.\d{1,3})?/, Sc = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, Gs = /^[1-9]\d?/, Bm = /^([1-9]\d|\d)/, nd;
nd = {};
function qe(e, t, n) {
  nd[e] = Ia(t) ? t : function(r, o) {
    return r && n ? n : t;
  };
}
function GB(e, t) {
  return Dt(nd, e) ? nd[e](t._strict, t._locale) : new RegExp(KB(e));
}
function KB(e) {
  return Ka(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, n, r, o, s) {
        return n || r || o || s;
      }
    )
  );
}
function Ka(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function Dr(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function kt(e) {
  var t = +e, n = 0;
  return t !== 0 && isFinite(t) && (n = Dr(t)), n;
}
var Th = {};
function Kt(e, t) {
  var n, r = t, o;
  for (typeof e == "string" && (e = [e]), eo(t) && (r = function(s, u) {
    u[t] = kt(s);
  }), o = e.length, n = 0; n < o; n++)
    Th[e[n]] = r;
}
function Tc(e, t) {
  Kt(e, function(n, r, o, s) {
    o._w = o._w || {}, t(n, o._w, o, s);
  });
}
function ZB(e, t, n) {
  t != null && Dt(Th, e) && Th[e](t, n._a, n, e);
}
function jd(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
var $n = 0, qa = 1, va = 2, En = 3, Jr = 4, Va = 5, bi = 6, XB = 7, QB = 8;
nt("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? Pa(e, 4) : "+" + e;
});
nt(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
nt(0, ["YYYY", 4], 0, "year");
nt(0, ["YYYYY", 5], 0, "year");
nt(0, ["YYYYYY", 6, !0], 0, "year");
qe("Y", $d);
qe("YY", sn, Cr);
qe("YYYY", $m, Fm);
qe("YYYYY", Fd, Dd);
qe("YYYYYY", Fd, Dd);
Kt(["YYYYY", "YYYYYY"], $n);
Kt("YYYY", function(e, t) {
  t[$n] = e.length === 2 ? Be.parseTwoDigitYear(e) : kt(e);
});
Kt("YY", function(e, t) {
  t[$n] = Be.parseTwoDigitYear(e);
});
Kt("Y", function(e, t) {
  t[$n] = parseInt(e, 10);
});
function Ml(e) {
  return jd(e) ? 366 : 365;
}
Be.parseTwoDigitYear = function(e) {
  return kt(e) + (kt(e) > 68 ? 1900 : 2e3);
};
var zw = Ks("FullYear", !0);
function JB() {
  return jd(this.year());
}
function Ks(e, t) {
  return function(n) {
    return n != null ? (Uw(this, e, n), Be.updateOffset(this, t), this) : sc(this, e);
  };
}
function sc(e, t) {
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
function Uw(e, t, n) {
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
    s = n, u = e.month(), c = e.date(), c = c === 29 && u === 1 && !jd(s) ? 28 : c, o ? r.setUTCFullYear(s, u, c) : r.setFullYear(s, u, c);
  }
}
function ej(e) {
  return e = Yr(e), Ia(this[e]) ? this[e]() : this;
}
function tj(e, t) {
  if (typeof e == "object") {
    e = Lm(e);
    var n = YB(e), r, o = n.length;
    for (r = 0; r < o; r++)
      this[n[r].unit](e[n[r].unit]);
  } else if (e = Yr(e), Ia(this[e]))
    return this[e](t);
  return this;
}
function nj(e, t) {
  return (e % t + t) % t;
}
var vn;
Array.prototype.indexOf ? vn = Array.prototype.indexOf : vn = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function jm(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var n = nj(t, 12);
  return e += (t - n) / 12, n === 1 ? jd(e) ? 29 : 28 : 31 - n % 7 % 2;
}
nt("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
nt("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
nt("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
qe("M", sn, Gs);
qe("MM", sn, Cr);
qe("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
qe("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
Kt(["M", "MM"], function(e, t) {
  t[qa] = kt(e) - 1;
});
Kt(["MMM", "MMMM"], function(e, t, n, r) {
  var o = n._locale.monthsParse(e, r, n._strict);
  o != null ? t[qa] = o : yt(n).invalidMonth = e;
});
var rj = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), Hw = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Yw = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, aj = Sc, oj = Sc;
function ij(e, t) {
  return e ? na(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Yw).test(t) ? "format" : "standalone"][e.month()] : na(this._months) ? this._months : this._months.standalone;
}
function sj(e, t) {
  return e ? na(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Yw.test(t) ? "format" : "standalone"][e.month()] : na(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function lj(e, t, n) {
  var r, o, s, u = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r)
      s = Na([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(
        s,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[r] = this.months(s, "").toLocaleLowerCase();
  return n ? t === "MMM" ? (o = vn.call(this._shortMonthsParse, u), o !== -1 ? o : null) : (o = vn.call(this._longMonthsParse, u), o !== -1 ? o : null) : t === "MMM" ? (o = vn.call(this._shortMonthsParse, u), o !== -1 ? o : (o = vn.call(this._longMonthsParse, u), o !== -1 ? o : null)) : (o = vn.call(this._longMonthsParse, u), o !== -1 ? o : (o = vn.call(this._shortMonthsParse, u), o !== -1 ? o : null));
}
function cj(e, t, n) {
  var r, o, s;
  if (this._monthsParseExact)
    return lj.call(this, e, t, n);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
    if (o = Na([2e3, r]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp(
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
function qw(e, t) {
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = kt(t);
    else if (t = e.localeData().monthsParse(t), !eo(t))
      return e;
  }
  var n = t, r = e.date();
  return r = r < 29 ? r : Math.min(r, jm(e.year(), n)), e._isUTC ? e._d.setUTCMonth(n, r) : e._d.setMonth(n, r), e;
}
function Vw(e) {
  return e != null ? (qw(this, e), Be.updateOffset(this, !0), this) : sc(this, "Month");
}
function uj() {
  return jm(this.year(), this.month());
}
function dj(e) {
  return this._monthsParseExact ? (Dt(this, "_monthsRegex") || Gw.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (Dt(this, "_monthsShortRegex") || (this._monthsShortRegex = aj), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function fj(e) {
  return this._monthsParseExact ? (Dt(this, "_monthsRegex") || Gw.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (Dt(this, "_monthsRegex") || (this._monthsRegex = oj), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function Gw() {
  function e(d, p) {
    return p.length - d.length;
  }
  var t = [], n = [], r = [], o, s, u, c;
  for (o = 0; o < 12; o++)
    s = Na([2e3, o]), u = Ka(this.monthsShort(s, "")), c = Ka(this.months(s, "")), t.push(u), n.push(c), r.push(c), r.push(u);
  t.sort(e), n.sort(e), r.sort(e), this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function pj(e, t, n, r, o, s, u) {
  var c;
  return e < 100 && e >= 0 ? (c = new Date(e + 400, t, n, r, o, s, u), isFinite(c.getFullYear()) && c.setFullYear(e)) : c = new Date(e, t, n, r, o, s, u), c;
}
function lc(e) {
  var t, n;
  return e < 100 && e >= 0 ? (n = Array.prototype.slice.call(arguments), n[0] = e + 400, t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function rd(e, t, n) {
  var r = 7 + t - n, o = (7 + lc(e, 0, r).getUTCDay() - t) % 7;
  return -o + r - 1;
}
function Kw(e, t, n, r, o) {
  var s = (7 + n - r) % 7, u = rd(e, r, o), c = 1 + 7 * (t - 1) + s + u, d, p;
  return c <= 0 ? (d = e - 1, p = Ml(d) + c) : c > Ml(e) ? (d = e + 1, p = c - Ml(e)) : (d = e, p = c), {
    year: d,
    dayOfYear: p
  };
}
function cc(e, t, n) {
  var r = rd(e.year(), t, n), o = Math.floor((e.dayOfYear() - r - 1) / 7) + 1, s, u;
  return o < 1 ? (u = e.year() - 1, s = o + Za(u, t, n)) : o > Za(e.year(), t, n) ? (s = o - Za(e.year(), t, n), u = e.year() + 1) : (u = e.year(), s = o), {
    week: s,
    year: u
  };
}
function Za(e, t, n) {
  var r = rd(e, t, n), o = rd(e + 1, t, n);
  return (Ml(e) - r + o) / 7;
}
nt("w", ["ww", 2], "wo", "week");
nt("W", ["WW", 2], "Wo", "isoWeek");
qe("w", sn, Gs);
qe("ww", sn, Cr);
qe("W", sn, Gs);
qe("WW", sn, Cr);
Tc(
  ["w", "ww", "W", "WW"],
  function(e, t, n, r) {
    t[r.substr(0, 1)] = kt(e);
  }
);
function hj(e) {
  return cc(e, this._week.dow, this._week.doy).week;
}
var mj = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function gj() {
  return this._week.dow;
}
function vj() {
  return this._week.doy;
}
function yj(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function bj(e) {
  var t = cc(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
nt("d", 0, "do", "day");
nt("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
nt("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
nt("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
nt("e", 0, 0, "weekday");
nt("E", 0, 0, "isoWeekday");
qe("d", sn);
qe("e", sn);
qe("E", sn);
qe("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
qe("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
qe("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
Tc(["dd", "ddd", "dddd"], function(e, t, n, r) {
  var o = n._locale.weekdaysParse(e, r, n._strict);
  o != null ? t.d = o : yt(n).invalidWeekday = e;
});
Tc(["d", "e", "E"], function(e, t, n, r) {
  t[r] = kt(e);
});
function _j(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function wj(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function Wm(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var xj = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Zw = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Ej = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), Cj = Sc, Oj = Sc, Sj = Sc;
function Tj(e, t) {
  var n = na(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? Wm(n, this._week.dow) : e ? n[e.day()] : n;
}
function Pj(e) {
  return e === !0 ? Wm(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function kj(e) {
  return e === !0 ? Wm(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function Nj(e, t, n) {
  var r, o, s, u = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r)
      s = Na([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(
        s,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(
        s,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(s, "").toLocaleLowerCase();
  return n ? t === "dddd" ? (o = vn.call(this._weekdaysParse, u), o !== -1 ? o : null) : t === "ddd" ? (o = vn.call(this._shortWeekdaysParse, u), o !== -1 ? o : null) : (o = vn.call(this._minWeekdaysParse, u), o !== -1 ? o : null) : t === "dddd" ? (o = vn.call(this._weekdaysParse, u), o !== -1 || (o = vn.call(this._shortWeekdaysParse, u), o !== -1) ? o : (o = vn.call(this._minWeekdaysParse, u), o !== -1 ? o : null)) : t === "ddd" ? (o = vn.call(this._shortWeekdaysParse, u), o !== -1 || (o = vn.call(this._weekdaysParse, u), o !== -1) ? o : (o = vn.call(this._minWeekdaysParse, u), o !== -1 ? o : null)) : (o = vn.call(this._minWeekdaysParse, u), o !== -1 || (o = vn.call(this._weekdaysParse, u), o !== -1) ? o : (o = vn.call(this._shortWeekdaysParse, u), o !== -1 ? o : null));
}
function Ij(e, t, n) {
  var r, o, s;
  if (this._weekdaysParseExact)
    return Nj.call(this, e, t, n);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
    if (o = Na([2e3, 1]).day(r), n && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp(
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
function Aj(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = sc(this, "Day");
  return e != null ? (e = _j(e, this.localeData()), this.add(e - t, "d")) : t;
}
function Rj(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function Mj(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = wj(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function Dj(e) {
  return this._weekdaysParseExact ? (Dt(this, "_weekdaysRegex") || zm.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (Dt(this, "_weekdaysRegex") || (this._weekdaysRegex = Cj), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function Lj(e) {
  return this._weekdaysParseExact ? (Dt(this, "_weekdaysRegex") || zm.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (Dt(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Oj), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function Fj(e) {
  return this._weekdaysParseExact ? (Dt(this, "_weekdaysRegex") || zm.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (Dt(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Sj), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function zm() {
  function e(h, m) {
    return m.length - h.length;
  }
  var t = [], n = [], r = [], o = [], s, u, c, d, p;
  for (s = 0; s < 7; s++)
    u = Na([2e3, 1]).day(s), c = Ka(this.weekdaysMin(u, "")), d = Ka(this.weekdaysShort(u, "")), p = Ka(this.weekdays(u, "")), t.push(c), n.push(d), r.push(p), o.push(c), o.push(d), o.push(p);
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
function Um() {
  return this.hours() % 12 || 12;
}
function $j() {
  return this.hours() || 24;
}
nt("H", ["HH", 2], 0, "hour");
nt("h", ["hh", 2], 0, Um);
nt("k", ["kk", 2], 0, $j);
nt("hmm", 0, 0, function() {
  return "" + Um.apply(this) + Pa(this.minutes(), 2);
});
nt("hmmss", 0, 0, function() {
  return "" + Um.apply(this) + Pa(this.minutes(), 2) + Pa(this.seconds(), 2);
});
nt("Hmm", 0, 0, function() {
  return "" + this.hours() + Pa(this.minutes(), 2);
});
nt("Hmmss", 0, 0, function() {
  return "" + this.hours() + Pa(this.minutes(), 2) + Pa(this.seconds(), 2);
});
function Xw(e, t) {
  nt(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
Xw("a", !0);
Xw("A", !1);
function Qw(e, t) {
  return t._meridiemParse;
}
qe("a", Qw);
qe("A", Qw);
qe("H", sn, Bm);
qe("h", sn, Gs);
qe("k", sn, Gs);
qe("HH", sn, Cr);
qe("hh", sn, Cr);
qe("kk", sn, Cr);
qe("hmm", jw);
qe("hmmss", Ww);
qe("Hmm", jw);
qe("Hmmss", Ww);
Kt(["H", "HH"], En);
Kt(["k", "kk"], function(e, t, n) {
  var r = kt(e);
  t[En] = r === 24 ? 0 : r;
});
Kt(["a", "A"], function(e, t, n) {
  n._isPm = n._locale.isPM(e), n._meridiem = e;
});
Kt(["h", "hh"], function(e, t, n) {
  t[En] = kt(e), yt(n).bigHour = !0;
});
Kt("hmm", function(e, t, n) {
  var r = e.length - 2;
  t[En] = kt(e.substr(0, r)), t[Jr] = kt(e.substr(r)), yt(n).bigHour = !0;
});
Kt("hmmss", function(e, t, n) {
  var r = e.length - 4, o = e.length - 2;
  t[En] = kt(e.substr(0, r)), t[Jr] = kt(e.substr(r, 2)), t[Va] = kt(e.substr(o)), yt(n).bigHour = !0;
});
Kt("Hmm", function(e, t, n) {
  var r = e.length - 2;
  t[En] = kt(e.substr(0, r)), t[Jr] = kt(e.substr(r));
});
Kt("Hmmss", function(e, t, n) {
  var r = e.length - 4, o = e.length - 2;
  t[En] = kt(e.substr(0, r)), t[Jr] = kt(e.substr(r, 2)), t[Va] = kt(e.substr(o));
});
function Bj(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var jj = /[ap]\.?m?\.?/i, Wj = Ks("Hours", !0);
function zj(e, t, n) {
  return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM";
}
var Jw = {
  calendar: NB,
  longDateFormat: MB,
  invalidDate: LB,
  ordinal: $B,
  dayOfMonthOrdinalParse: BB,
  relativeTime: WB,
  months: rj,
  monthsShort: Hw,
  week: mj,
  weekdays: xj,
  weekdaysMin: Ej,
  weekdaysShort: Zw,
  meridiemParse: jj
}, cn = {}, bl = {}, uc;
function Uj(e, t) {
  var n, r = Math.min(e.length, t.length);
  for (n = 0; n < r; n += 1)
    if (e[n] !== t[n])
      return n;
  return r;
}
function P0(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function Hj(e) {
  for (var t = 0, n, r, o, s; t < e.length; ) {
    for (s = P0(e[t]).split("-"), n = s.length, r = P0(e[t + 1]), r = r ? r.split("-") : null; n > 0; ) {
      if (o = Wd(s.slice(0, n).join("-")), o)
        return o;
      if (r && r.length >= n && Uj(s, r) >= n - 1)
        break;
      n--;
    }
    t++;
  }
  return uc;
}
function Yj(e) {
  return !!(e && e.match("^[^/\\\\]*$"));
}
function Wd(e) {
  var t = null, n;
  if (cn[e] === void 0 && typeof module < "u" && module && module.exports && Yj(e))
    try {
      t = uc._abbr, n = require, n("./locale/" + e), Ao(t);
    } catch {
      cn[e] = null;
    }
  return cn[e];
}
function Ao(e, t) {
  var n;
  return e && (rr(t) ? n = lo(e) : n = Hm(e, t), n ? uc = n : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), uc._abbr;
}
function Hm(e, t) {
  if (t !== null) {
    var n, r = Jw;
    if (t.abbr = e, cn[e] != null)
      Lw(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), r = cn[e]._config;
    else if (t.parentLocale != null)
      if (cn[t.parentLocale] != null)
        r = cn[t.parentLocale]._config;
      else if (n = Wd(t.parentLocale), n != null)
        r = n._config;
      else
        return bl[t.parentLocale] || (bl[t.parentLocale] = []), bl[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return cn[e] = new Mm(Oh(r, t)), bl[e] && bl[e].forEach(function(o) {
      Hm(o.name, o.config);
    }), Ao(e), cn[e];
  } else
    return delete cn[e], null;
}
function qj(e, t) {
  if (t != null) {
    var n, r, o = Jw;
    cn[e] != null && cn[e].parentLocale != null ? cn[e].set(Oh(cn[e]._config, t)) : (r = Wd(e), r != null && (o = r._config), t = Oh(o, t), r == null && (t.abbr = e), n = new Mm(t), n.parentLocale = cn[e], cn[e] = n), Ao(e);
  } else
    cn[e] != null && (cn[e].parentLocale != null ? (cn[e] = cn[e].parentLocale, e === Ao() && Ao(e)) : cn[e] != null && delete cn[e]);
  return cn[e];
}
function lo(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return uc;
  if (!na(e)) {
    if (t = Wd(e), t)
      return t;
    e = [e];
  }
  return Hj(e);
}
function Vj() {
  return Sh(cn);
}
function Ym(e) {
  var t, n = e._a;
  return n && yt(e).overflow === -2 && (t = n[qa] < 0 || n[qa] > 11 ? qa : n[va] < 1 || n[va] > jm(n[$n], n[qa]) ? va : n[En] < 0 || n[En] > 24 || n[En] === 24 && (n[Jr] !== 0 || n[Va] !== 0 || n[bi] !== 0) ? En : n[Jr] < 0 || n[Jr] > 59 ? Jr : n[Va] < 0 || n[Va] > 59 ? Va : n[bi] < 0 || n[bi] > 999 ? bi : -1, yt(e)._overflowDayOfYear && (t < $n || t > va) && (t = va), yt(e)._overflowWeeks && t === -1 && (t = XB), yt(e)._overflowWeekday && t === -1 && (t = QB), yt(e).overflow = t), e;
}
var Gj = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Kj = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Zj = /Z|[+-]\d\d(?::?\d\d)?/, Su = [
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
], Lp = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], Xj = /^\/?Date\((-?\d+)/i, Qj = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, Jj = {
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
function ex(e) {
  var t, n, r = e._i, o = Gj.exec(r) || Kj.exec(r), s, u, c, d, p = Su.length, h = Lp.length;
  if (o) {
    for (yt(e).iso = !0, t = 0, n = p; t < n; t++)
      if (Su[t][1].exec(o[1])) {
        u = Su[t][0], s = Su[t][2] !== !1;
        break;
      }
    if (u == null) {
      e._isValid = !1;
      return;
    }
    if (o[3]) {
      for (t = 0, n = h; t < n; t++)
        if (Lp[t][1].exec(o[3])) {
          c = (o[2] || " ") + Lp[t][0];
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
      if (Zj.exec(o[4]))
        d = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = u + (c || "") + (d || ""), Vm(e);
  } else
    e._isValid = !1;
}
function eW(e, t, n, r, o, s) {
  var u = [
    tW(e),
    Hw.indexOf(t),
    parseInt(n, 10),
    parseInt(r, 10),
    parseInt(o, 10)
  ];
  return s && u.push(parseInt(s, 10)), u;
}
function tW(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function nW(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function rW(e, t, n) {
  if (e) {
    var r = Zw.indexOf(e), o = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (r !== o)
      return yt(n).weekdayMismatch = !0, n._isValid = !1, !1;
  }
  return !0;
}
function aW(e, t, n) {
  if (e)
    return Jj[e];
  if (t)
    return 0;
  var r = parseInt(n, 10), o = r % 100, s = (r - o) / 100;
  return s * 60 + o;
}
function tx(e) {
  var t = Qj.exec(nW(e._i)), n;
  if (t) {
    if (n = eW(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !rW(t[1], n, e))
      return;
    e._a = n, e._tzm = aW(t[8], t[9], t[10]), e._d = lc.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), yt(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function oW(e) {
  var t = Xj.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (ex(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (tx(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : Be.createFromInputFallback(e);
}
Be.createFromInputFallback = Hr(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function ls(e, t, n) {
  return e ?? t ?? n;
}
function iW(e) {
  var t = new Date(Be.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function qm(e) {
  var t, n, r = [], o, s, u;
  if (!e._d) {
    for (o = iW(e), e._w && e._a[va] == null && e._a[qa] == null && sW(e), e._dayOfYear != null && (u = ls(e._a[$n], o[$n]), (e._dayOfYear > Ml(u) || e._dayOfYear === 0) && (yt(e)._overflowDayOfYear = !0), n = lc(u, 0, e._dayOfYear), e._a[qa] = n.getUTCMonth(), e._a[va] = n.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = r[t] = o[t];
    for (; t < 7; t++)
      e._a[t] = r[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[En] === 24 && e._a[Jr] === 0 && e._a[Va] === 0 && e._a[bi] === 0 && (e._nextDay = !0, e._a[En] = 0), e._d = (e._useUTC ? lc : pj).apply(
      null,
      r
    ), s = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[En] = 24), e._w && typeof e._w.d < "u" && e._w.d !== s && (yt(e).weekdayMismatch = !0);
  }
}
function sW(e) {
  var t, n, r, o, s, u, c, d, p;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (s = 1, u = 4, n = ls(
    t.GG,
    e._a[$n],
    cc(on(), 1, 4).year
  ), r = ls(t.W, 1), o = ls(t.E, 1), (o < 1 || o > 7) && (d = !0)) : (s = e._locale._week.dow, u = e._locale._week.doy, p = cc(on(), s, u), n = ls(t.gg, e._a[$n], p.year), r = ls(t.w, p.week), t.d != null ? (o = t.d, (o < 0 || o > 6) && (d = !0)) : t.e != null ? (o = t.e + s, (t.e < 0 || t.e > 6) && (d = !0)) : o = s), r < 1 || r > Za(n, s, u) ? yt(e)._overflowWeeks = !0 : d != null ? yt(e)._overflowWeekday = !0 : (c = Kw(n, r, o, s, u), e._a[$n] = c.year, e._dayOfYear = c.dayOfYear);
}
Be.ISO_8601 = function() {
};
Be.RFC_2822 = function() {
};
function Vm(e) {
  if (e._f === Be.ISO_8601) {
    ex(e);
    return;
  }
  if (e._f === Be.RFC_2822) {
    tx(e);
    return;
  }
  e._a = [], yt(e).empty = !0;
  var t = "" + e._i, n, r, o, s, u, c = t.length, d = 0, p, h;
  for (o = Fw(e._f, e._locale).match(Dm) || [], h = o.length, n = 0; n < h; n++)
    s = o[n], r = (t.match(GB(s, e)) || [])[0], r && (u = t.substr(0, t.indexOf(r)), u.length > 0 && yt(e).unusedInput.push(u), t = t.slice(
      t.indexOf(r) + r.length
    ), d += r.length), ms[s] ? (r ? yt(e).empty = !1 : yt(e).unusedTokens.push(s), ZB(s, r, e)) : e._strict && !r && yt(e).unusedTokens.push(s);
  yt(e).charsLeftOver = c - d, t.length > 0 && yt(e).unusedInput.push(t), e._a[En] <= 12 && yt(e).bigHour === !0 && e._a[En] > 0 && (yt(e).bigHour = void 0), yt(e).parsedDateParts = e._a.slice(0), yt(e).meridiem = e._meridiem, e._a[En] = lW(
    e._locale,
    e._a[En],
    e._meridiem
  ), p = yt(e).era, p !== null && (e._a[$n] = e._locale.erasConvertYear(p, e._a[$n])), qm(e), Ym(e);
}
function lW(e, t, n) {
  var r;
  return n == null ? t : e.meridiemHour != null ? e.meridiemHour(t, n) : (e.isPM != null && (r = e.isPM(n), r && t < 12 && (t += 12), !r && t === 12 && (t = 0)), t);
}
function cW(e) {
  var t, n, r, o, s, u, c = !1, d = e._f.length;
  if (d === 0) {
    yt(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (o = 0; o < d; o++)
    s = 0, u = !1, t = Rm({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[o], Vm(t), Am(t) && (u = !0), s += yt(t).charsLeftOver, s += yt(t).unusedTokens.length * 10, yt(t).score = s, c ? s < r && (r = s, n = t) : (r == null || s < r || u) && (r = s, n = t, u && (c = !0));
  ko(e, n || t);
}
function uW(e) {
  if (!e._d) {
    var t = Lm(e._i), n = t.day === void 0 ? t.date : t.day;
    e._a = Mw(
      [t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond],
      function(r) {
        return r && parseInt(r, 10);
      }
    ), qm(e);
  }
}
function dW(e) {
  var t = new Oc(Ym(nx(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function nx(e) {
  var t = e._i, n = e._f;
  return e._locale = e._locale || lo(e._l), t === null || n === void 0 && t === "" ? Md({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), ra(t) ? new Oc(Ym(t)) : (Cc(t) ? e._d = t : na(n) ? cW(e) : n ? Vm(e) : fW(e), Am(e) || (e._d = null), e));
}
function fW(e) {
  var t = e._i;
  rr(t) ? e._d = new Date(Be.now()) : Cc(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? oW(e) : na(t) ? (e._a = Mw(t.slice(0), function(n) {
    return parseInt(n, 10);
  }), qm(e)) : Ci(t) ? uW(e) : eo(t) ? e._d = new Date(t) : Be.createFromInputFallback(e);
}
function rx(e, t, n, r, o) {
  var s = {};
  return (t === !0 || t === !1) && (r = t, t = void 0), (n === !0 || n === !1) && (r = n, n = void 0), (Ci(e) && Im(e) || na(e) && e.length === 0) && (e = void 0), s._isAMomentObject = !0, s._useUTC = s._isUTC = o, s._l = n, s._i = e, s._f = t, s._strict = r, dW(s);
}
function on(e, t, n, r) {
  return rx(e, t, n, r, !1);
}
var pW = Hr(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = on.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : Md();
  }
), hW = Hr(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = on.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : Md();
  }
);
function ax(e, t) {
  var n, r;
  if (t.length === 1 && na(t[0]) && (t = t[0]), !t.length)
    return on();
  for (n = t[0], r = 1; r < t.length; ++r)
    (!t[r].isValid() || t[r][e](n)) && (n = t[r]);
  return n;
}
function mW() {
  var e = [].slice.call(arguments, 0);
  return ax("isBefore", e);
}
function gW() {
  var e = [].slice.call(arguments, 0);
  return ax("isAfter", e);
}
var vW = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, _l = [
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
function yW(e) {
  var t, n = !1, r, o = _l.length;
  for (t in e)
    if (Dt(e, t) && !(vn.call(_l, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (r = 0; r < o; ++r)
    if (e[_l[r]]) {
      if (n)
        return !1;
      parseFloat(e[_l[r]]) !== kt(e[_l[r]]) && (n = !0);
    }
  return !0;
}
function bW() {
  return this._isValid;
}
function _W() {
  return ia(NaN);
}
function zd(e) {
  var t = Lm(e), n = t.year || 0, r = t.quarter || 0, o = t.month || 0, s = t.week || t.isoWeek || 0, u = t.day || 0, c = t.hour || 0, d = t.minute || 0, p = t.second || 0, h = t.millisecond || 0;
  this._isValid = yW(t), this._milliseconds = +h + p * 1e3 + // 1000
  d * 6e4 + // 1000 * 60
  c * 1e3 * 60 * 60, this._days = +u + s * 7, this._months = +o + r * 3 + n * 12, this._data = {}, this._locale = lo(), this._bubble();
}
function $u(e) {
  return e instanceof zd;
}
function Ph(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function wW(e, t, n) {
  var r = Math.min(e.length, t.length), o = Math.abs(e.length - t.length), s = 0, u;
  for (u = 0; u < r; u++)
    kt(e[u]) !== kt(t[u]) && s++;
  return s + o;
}
function ox(e, t) {
  nt(e, 0, 0, function() {
    var n = this.utcOffset(), r = "+";
    return n < 0 && (n = -n, r = "-"), r + Pa(~~(n / 60), 2) + t + Pa(~~n % 60, 2);
  });
}
ox("Z", ":");
ox("ZZ", "");
qe("Z", Bd);
qe("ZZ", Bd);
Kt(["Z", "ZZ"], function(e, t, n) {
  n._useUTC = !0, n._tzm = Gm(Bd, e);
});
var xW = /([\+\-]|\d\d)/gi;
function Gm(e, t) {
  var n = (t || "").match(e), r, o, s;
  return n === null ? null : (r = n[n.length - 1] || [], o = (r + "").match(xW) || ["-", 0, 0], s = +(o[1] * 60) + kt(o[2]), s === 0 ? 0 : o[0] === "+" ? s : -s);
}
function Km(e, t) {
  var n, r;
  return t._isUTC ? (n = t.clone(), r = (ra(e) || Cc(e) ? e.valueOf() : on(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + r), Be.updateOffset(n, !1), n) : on(e).local();
}
function kh(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
Be.updateOffset = function() {
};
function EW(e, t, n) {
  var r = this._offset || 0, o;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = Gm(Bd, e), e === null)
        return this;
    } else Math.abs(e) < 16 && !n && (e = e * 60);
    return !this._isUTC && t && (o = kh(this)), this._offset = e, this._isUTC = !0, o != null && this.add(o, "m"), r !== e && (!t || this._changeInProgress ? lx(
      this,
      ia(e - r, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, Be.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? r : kh(this);
}
function CW(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function OW(e) {
  return this.utcOffset(0, e);
}
function SW(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(kh(this), "m")), this;
}
function TW() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = Gm(qB, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function PW(e) {
  return this.isValid() ? (e = e ? on(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function kW() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function NW() {
  if (!rr(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return Rm(e, this), e = nx(e), e._a ? (t = e._isUTC ? Na(e._a) : on(e._a), this._isDSTShifted = this.isValid() && wW(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function IW() {
  return this.isValid() ? !this._isUTC : !1;
}
function AW() {
  return this.isValid() ? this._isUTC : !1;
}
function ix() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var RW = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, MW = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function ia(e, t) {
  var n = e, r = null, o, s, u;
  return $u(e) ? n = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : eo(e) || !isNaN(+e) ? (n = {}, t ? n[t] = +e : n.milliseconds = +e) : (r = RW.exec(e)) ? (o = r[1] === "-" ? -1 : 1, n = {
    y: 0,
    d: kt(r[va]) * o,
    h: kt(r[En]) * o,
    m: kt(r[Jr]) * o,
    s: kt(r[Va]) * o,
    ms: kt(Ph(r[bi] * 1e3)) * o
    // the millisecond decimal point is included in the match
  }) : (r = MW.exec(e)) ? (o = r[1] === "-" ? -1 : 1, n = {
    y: fi(r[2], o),
    M: fi(r[3], o),
    w: fi(r[4], o),
    d: fi(r[5], o),
    h: fi(r[6], o),
    m: fi(r[7], o),
    s: fi(r[8], o)
  }) : n == null ? n = {} : typeof n == "object" && ("from" in n || "to" in n) && (u = DW(
    on(n.from),
    on(n.to)
  ), n = {}, n.ms = u.milliseconds, n.M = u.months), s = new zd(n), $u(e) && Dt(e, "_locale") && (s._locale = e._locale), $u(e) && Dt(e, "_isValid") && (s._isValid = e._isValid), s;
}
ia.fn = zd.prototype;
ia.invalid = _W;
function fi(e, t) {
  var n = e && parseFloat(e.replace(",", "."));
  return (isNaN(n) ? 0 : n) * t;
}
function k0(e, t) {
  var n = {};
  return n.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n;
}
function DW(e, t) {
  var n;
  return e.isValid() && t.isValid() ? (t = Km(t, e), e.isBefore(t) ? n = k0(e, t) : (n = k0(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : { milliseconds: 0, months: 0 };
}
function sx(e, t) {
  return function(n, r) {
    var o, s;
    return r !== null && !isNaN(+r) && (Lw(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), s = n, n = r, r = s), o = ia(n, r), lx(this, o, e), this;
  };
}
function lx(e, t, n, r) {
  var o = t._milliseconds, s = Ph(t._days), u = Ph(t._months);
  e.isValid() && (r = r ?? !0, u && qw(e, sc(e, "Month") + u * n), s && Uw(e, "Date", sc(e, "Date") + s * n), o && e._d.setTime(e._d.valueOf() + o * n), r && Be.updateOffset(e, s || u));
}
var LW = sx(1, "add"), FW = sx(-1, "subtract");
function cx(e) {
  return typeof e == "string" || e instanceof String;
}
function $W(e) {
  return ra(e) || Cc(e) || cx(e) || eo(e) || jW(e) || BW(e) || e === null || e === void 0;
}
function BW(e) {
  var t = Ci(e) && !Im(e), n = !1, r = [
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
    s = r[o], n = n || Dt(e, s);
  return t && n;
}
function jW(e) {
  var t = na(e), n = !1;
  return t && (n = e.filter(function(r) {
    return !eo(r) && cx(e);
  }).length === 0), t && n;
}
function WW(e) {
  var t = Ci(e) && !Im(e), n = !1, r = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], o, s;
  for (o = 0; o < r.length; o += 1)
    s = r[o], n = n || Dt(e, s);
  return t && n;
}
function zW(e, t) {
  var n = e.diff(t, "days", !0);
  return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
}
function UW(e, t) {
  arguments.length === 1 && (arguments[0] ? $W(arguments[0]) ? (e = arguments[0], t = void 0) : WW(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var n = e || on(), r = Km(n, this).startOf("day"), o = Be.calendarFormat(this, r) || "sameElse", s = t && (Ia(t[o]) ? t[o].call(this, n) : t[o]);
  return this.format(
    s || this.localeData().calendar(o, this, on(n))
  );
}
function HW() {
  return new Oc(this);
}
function YW(e, t) {
  var n = ra(e) ? e : on(e);
  return this.isValid() && n.isValid() ? (t = Yr(t) || "millisecond", t === "millisecond" ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function qW(e, t) {
  var n = ra(e) ? e : on(e);
  return this.isValid() && n.isValid() ? (t = Yr(t) || "millisecond", t === "millisecond" ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf()) : !1;
}
function VW(e, t, n, r) {
  var o = ra(e) ? e : on(e), s = ra(t) ? t : on(t);
  return this.isValid() && o.isValid() && s.isValid() ? (r = r || "()", (r[0] === "(" ? this.isAfter(o, n) : !this.isBefore(o, n)) && (r[1] === ")" ? this.isBefore(s, n) : !this.isAfter(s, n))) : !1;
}
function GW(e, t) {
  var n = ra(e) ? e : on(e), r;
  return this.isValid() && n.isValid() ? (t = Yr(t) || "millisecond", t === "millisecond" ? this.valueOf() === n.valueOf() : (r = n.valueOf(), this.clone().startOf(t).valueOf() <= r && r <= this.clone().endOf(t).valueOf())) : !1;
}
function KW(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function ZW(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function XW(e, t, n) {
  var r, o, s;
  if (!this.isValid())
    return NaN;
  if (r = Km(e, this), !r.isValid())
    return NaN;
  switch (o = (r.utcOffset() - this.utcOffset()) * 6e4, t = Yr(t), t) {
    case "year":
      s = Bu(this, r) / 12;
      break;
    case "month":
      s = Bu(this, r);
      break;
    case "quarter":
      s = Bu(this, r) / 3;
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
  return n ? s : Dr(s);
}
function Bu(e, t) {
  if (e.date() < t.date())
    return -Bu(t, e);
  var n = (t.year() - e.year()) * 12 + (t.month() - e.month()), r = e.clone().add(n, "months"), o, s;
  return t - r < 0 ? (o = e.clone().add(n - 1, "months"), s = (t - r) / (r - o)) : (o = e.clone().add(n + 1, "months"), s = (t - r) / (o - r)), -(n + s) || 0;
}
Be.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
Be.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function QW() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function JW(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, n = t ? this.clone().utc() : this;
  return n.year() < 0 || n.year() > 9999 ? Fu(
    n,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : Ia(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", Fu(n, "Z")) : Fu(
    n,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function e6() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", n, r, o, s;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), n = "[" + e + '("]', r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", o = "-MM-DD[T]HH:mm:ss.SSS", s = t + '[")]', this.format(n + r + o + s);
}
function t6(e) {
  e || (e = this.isUtc() ? Be.defaultFormatUtc : Be.defaultFormat);
  var t = Fu(this, e);
  return this.localeData().postformat(t);
}
function n6(e, t) {
  return this.isValid() && (ra(e) && e.isValid() || on(e).isValid()) ? ia({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function r6(e) {
  return this.from(on(), e);
}
function a6(e, t) {
  return this.isValid() && (ra(e) && e.isValid() || on(e).isValid()) ? ia({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function o6(e) {
  return this.to(on(), e);
}
function ux(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = lo(e), t != null && (this._locale = t), this);
}
var dx = Hr(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function fx() {
  return this._locale;
}
var ad = 1e3, gs = 60 * ad, od = 60 * gs, px = (365 * 400 + 97) * 24 * od;
function vs(e, t) {
  return (e % t + t) % t;
}
function hx(e, t, n) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, n) - px : new Date(e, t, n).valueOf();
}
function mx(e, t, n) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - px : Date.UTC(e, t, n);
}
function i6(e) {
  var t, n;
  if (e = Yr(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (n = this._isUTC ? mx : hx, e) {
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
      t = this._d.valueOf(), t -= vs(
        t + (this._isUTC ? 0 : this.utcOffset() * gs),
        od
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= vs(t, gs);
      break;
    case "second":
      t = this._d.valueOf(), t -= vs(t, ad);
      break;
  }
  return this._d.setTime(t), Be.updateOffset(this, !0), this;
}
function s6(e) {
  var t, n;
  if (e = Yr(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (n = this._isUTC ? mx : hx, e) {
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
      t = this._d.valueOf(), t += od - vs(
        t + (this._isUTC ? 0 : this.utcOffset() * gs),
        od
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += gs - vs(t, gs) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += ad - vs(t, ad) - 1;
      break;
  }
  return this._d.setTime(t), Be.updateOffset(this, !0), this;
}
function l6() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function c6() {
  return Math.floor(this.valueOf() / 1e3);
}
function u6() {
  return new Date(this.valueOf());
}
function d6() {
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
function f6() {
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
function p6() {
  return this.isValid() ? this.toISOString() : null;
}
function h6() {
  return Am(this);
}
function m6() {
  return ko({}, yt(this));
}
function g6() {
  return yt(this).overflow;
}
function v6() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
nt("N", 0, 0, "eraAbbr");
nt("NN", 0, 0, "eraAbbr");
nt("NNN", 0, 0, "eraAbbr");
nt("NNNN", 0, 0, "eraName");
nt("NNNNN", 0, 0, "eraNarrow");
nt("y", ["y", 1], "yo", "eraYear");
nt("y", ["yy", 2], 0, "eraYear");
nt("y", ["yyy", 3], 0, "eraYear");
nt("y", ["yyyy", 4], 0, "eraYear");
qe("N", Zm);
qe("NN", Zm);
qe("NNN", Zm);
qe("NNNN", P6);
qe("NNNNN", k6);
Kt(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, n, r) {
    var o = n._locale.erasParse(e, r, n._strict);
    o ? yt(n).era = o : yt(n).invalidEra = e;
  }
);
qe("y", Vs);
qe("yy", Vs);
qe("yyy", Vs);
qe("yyyy", Vs);
qe("yo", N6);
Kt(["y", "yy", "yyy", "yyyy"], $n);
Kt(["yo"], function(e, t, n, r) {
  var o;
  n._locale._eraYearOrdinalRegex && (o = e.match(n._locale._eraYearOrdinalRegex)), n._locale.eraYearOrdinalParse ? t[$n] = n._locale.eraYearOrdinalParse(e, o) : t[$n] = parseInt(e, 10);
});
function y6(e, t) {
  var n, r, o, s = this._eras || lo("en")._eras;
  for (n = 0, r = s.length; n < r; ++n) {
    switch (typeof s[n].since) {
      case "string":
        o = Be(s[n].since).startOf("day"), s[n].since = o.valueOf();
        break;
    }
    switch (typeof s[n].until) {
      case "undefined":
        s[n].until = 1 / 0;
        break;
      case "string":
        o = Be(s[n].until).startOf("day").valueOf(), s[n].until = o.valueOf();
        break;
    }
  }
  return s;
}
function b6(e, t, n) {
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
function _6(e, t) {
  var n = e.since <= e.until ? 1 : -1;
  return t === void 0 ? Be(e.since).year() : Be(e.since).year() + (t - e.offset) * n;
}
function w6() {
  var e, t, n, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
      return r[e].name;
  return "";
}
function x6() {
  var e, t, n, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
      return r[e].narrow;
  return "";
}
function E6() {
  var e, t, n, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
      return r[e].abbr;
  return "";
}
function C6() {
  var e, t, n, r, o = this.localeData().eras();
  for (e = 0, t = o.length; e < t; ++e)
    if (n = o[e].since <= o[e].until ? 1 : -1, r = this.clone().startOf("day").valueOf(), o[e].since <= r && r <= o[e].until || o[e].until <= r && r <= o[e].since)
      return (this.year() - Be(o[e].since).year()) * n + o[e].offset;
  return this.year();
}
function O6(e) {
  return Dt(this, "_erasNameRegex") || Xm.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function S6(e) {
  return Dt(this, "_erasAbbrRegex") || Xm.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function T6(e) {
  return Dt(this, "_erasNarrowRegex") || Xm.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function Zm(e, t) {
  return t.erasAbbrRegex(e);
}
function P6(e, t) {
  return t.erasNameRegex(e);
}
function k6(e, t) {
  return t.erasNarrowRegex(e);
}
function N6(e, t) {
  return t._eraYearOrdinalRegex || Vs;
}
function Xm() {
  var e = [], t = [], n = [], r = [], o, s, u, c, d, p = this.eras();
  for (o = 0, s = p.length; o < s; ++o)
    u = Ka(p[o].name), c = Ka(p[o].abbr), d = Ka(p[o].narrow), t.push(u), e.push(c), n.push(d), r.push(u), r.push(c), r.push(d);
  this._erasRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  );
}
nt(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
nt(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function Ud(e, t) {
  nt(0, [e, e.length], 0, t);
}
Ud("gggg", "weekYear");
Ud("ggggg", "weekYear");
Ud("GGGG", "isoWeekYear");
Ud("GGGGG", "isoWeekYear");
qe("G", $d);
qe("g", $d);
qe("GG", sn, Cr);
qe("gg", sn, Cr);
qe("GGGG", $m, Fm);
qe("gggg", $m, Fm);
qe("GGGGG", Fd, Dd);
qe("ggggg", Fd, Dd);
Tc(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, n, r) {
    t[r.substr(0, 2)] = kt(e);
  }
);
Tc(["gg", "GG"], function(e, t, n, r) {
  t[r] = Be.parseTwoDigitYear(e);
});
function I6(e) {
  return gx.call(
    this,
    e,
    this.week(),
    this.weekday() + this.localeData()._week.dow,
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function A6(e) {
  return gx.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function R6() {
  return Za(this.year(), 1, 4);
}
function M6() {
  return Za(this.isoWeekYear(), 1, 4);
}
function D6() {
  var e = this.localeData()._week;
  return Za(this.year(), e.dow, e.doy);
}
function L6() {
  var e = this.localeData()._week;
  return Za(this.weekYear(), e.dow, e.doy);
}
function gx(e, t, n, r, o) {
  var s;
  return e == null ? cc(this, r, o).year : (s = Za(e, r, o), t > s && (t = s), F6.call(this, e, t, n, r, o));
}
function F6(e, t, n, r, o) {
  var s = Kw(e, t, n, r, o), u = lc(s.year, 0, s.dayOfYear);
  return this.year(u.getUTCFullYear()), this.month(u.getUTCMonth()), this.date(u.getUTCDate()), this;
}
nt("Q", 0, "Qo", "quarter");
qe("Q", $w);
Kt("Q", function(e, t) {
  t[qa] = (kt(e) - 1) * 3;
});
function $6(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
nt("D", ["DD", 2], "Do", "date");
qe("D", sn, Gs);
qe("DD", sn, Cr);
qe("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
Kt(["D", "DD"], va);
Kt("Do", function(e, t) {
  t[va] = kt(e.match(sn)[0]);
});
var vx = Ks("Date", !0);
nt("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
qe("DDD", Ld);
qe("DDDD", Bw);
Kt(["DDD", "DDDD"], function(e, t, n) {
  n._dayOfYear = kt(e);
});
function B6(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
nt("m", ["mm", 2], 0, "minute");
qe("m", sn, Bm);
qe("mm", sn, Cr);
Kt(["m", "mm"], Jr);
var j6 = Ks("Minutes", !1);
nt("s", ["ss", 2], 0, "second");
qe("s", sn, Bm);
qe("ss", sn, Cr);
Kt(["s", "ss"], Va);
var W6 = Ks("Seconds", !1);
nt("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
nt(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
nt(0, ["SSS", 3], 0, "millisecond");
nt(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
nt(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
nt(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
nt(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
nt(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
nt(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
qe("S", Ld, $w);
qe("SS", Ld, Cr);
qe("SSS", Ld, Bw);
var No, yx;
for (No = "SSSS"; No.length <= 9; No += "S")
  qe(No, Vs);
function z6(e, t) {
  t[bi] = kt(("0." + e) * 1e3);
}
for (No = "S"; No.length <= 9; No += "S")
  Kt(No, z6);
yx = Ks("Milliseconds", !1);
nt("z", 0, 0, "zoneAbbr");
nt("zz", 0, 0, "zoneName");
function U6() {
  return this._isUTC ? "UTC" : "";
}
function H6() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var Me = Oc.prototype;
Me.add = LW;
Me.calendar = UW;
Me.clone = HW;
Me.diff = XW;
Me.endOf = s6;
Me.format = t6;
Me.from = n6;
Me.fromNow = r6;
Me.to = a6;
Me.toNow = o6;
Me.get = ej;
Me.invalidAt = g6;
Me.isAfter = YW;
Me.isBefore = qW;
Me.isBetween = VW;
Me.isSame = GW;
Me.isSameOrAfter = KW;
Me.isSameOrBefore = ZW;
Me.isValid = h6;
Me.lang = dx;
Me.locale = ux;
Me.localeData = fx;
Me.max = hW;
Me.min = pW;
Me.parsingFlags = m6;
Me.set = tj;
Me.startOf = i6;
Me.subtract = FW;
Me.toArray = d6;
Me.toObject = f6;
Me.toDate = u6;
Me.toISOString = JW;
Me.inspect = e6;
typeof Symbol < "u" && Symbol.for != null && (Me[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
Me.toJSON = p6;
Me.toString = QW;
Me.unix = c6;
Me.valueOf = l6;
Me.creationData = v6;
Me.eraName = w6;
Me.eraNarrow = x6;
Me.eraAbbr = E6;
Me.eraYear = C6;
Me.year = zw;
Me.isLeapYear = JB;
Me.weekYear = I6;
Me.isoWeekYear = A6;
Me.quarter = Me.quarters = $6;
Me.month = Vw;
Me.daysInMonth = uj;
Me.week = Me.weeks = yj;
Me.isoWeek = Me.isoWeeks = bj;
Me.weeksInYear = D6;
Me.weeksInWeekYear = L6;
Me.isoWeeksInYear = R6;
Me.isoWeeksInISOWeekYear = M6;
Me.date = vx;
Me.day = Me.days = Aj;
Me.weekday = Rj;
Me.isoWeekday = Mj;
Me.dayOfYear = B6;
Me.hour = Me.hours = Wj;
Me.minute = Me.minutes = j6;
Me.second = Me.seconds = W6;
Me.millisecond = Me.milliseconds = yx;
Me.utcOffset = EW;
Me.utc = OW;
Me.local = SW;
Me.parseZone = TW;
Me.hasAlignedHourOffset = PW;
Me.isDST = kW;
Me.isLocal = IW;
Me.isUtcOffset = AW;
Me.isUtc = ix;
Me.isUTC = ix;
Me.zoneAbbr = U6;
Me.zoneName = H6;
Me.dates = Hr(
  "dates accessor is deprecated. Use date instead.",
  vx
);
Me.months = Hr(
  "months accessor is deprecated. Use month instead",
  Vw
);
Me.years = Hr(
  "years accessor is deprecated. Use year instead",
  zw
);
Me.zone = Hr(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  CW
);
Me.isDSTShifted = Hr(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  NW
);
function Y6(e) {
  return on(e * 1e3);
}
function q6() {
  return on.apply(null, arguments).parseZone();
}
function bx(e) {
  return e;
}
var Lt = Mm.prototype;
Lt.calendar = IB;
Lt.longDateFormat = DB;
Lt.invalidDate = FB;
Lt.ordinal = jB;
Lt.preparse = bx;
Lt.postformat = bx;
Lt.relativeTime = zB;
Lt.pastFuture = UB;
Lt.set = kB;
Lt.eras = y6;
Lt.erasParse = b6;
Lt.erasConvertYear = _6;
Lt.erasAbbrRegex = S6;
Lt.erasNameRegex = O6;
Lt.erasNarrowRegex = T6;
Lt.months = ij;
Lt.monthsShort = sj;
Lt.monthsParse = cj;
Lt.monthsRegex = fj;
Lt.monthsShortRegex = dj;
Lt.week = hj;
Lt.firstDayOfYear = vj;
Lt.firstDayOfWeek = gj;
Lt.weekdays = Tj;
Lt.weekdaysMin = kj;
Lt.weekdaysShort = Pj;
Lt.weekdaysParse = Ij;
Lt.weekdaysRegex = Dj;
Lt.weekdaysShortRegex = Lj;
Lt.weekdaysMinRegex = Fj;
Lt.isPM = Bj;
Lt.meridiem = zj;
function id(e, t, n, r) {
  var o = lo(), s = Na().set(r, t);
  return o[n](s, e);
}
function _x(e, t, n) {
  if (eo(e) && (t = e, e = void 0), e = e || "", t != null)
    return id(e, t, n, "month");
  var r, o = [];
  for (r = 0; r < 12; r++)
    o[r] = id(e, r, n, "month");
  return o;
}
function Qm(e, t, n, r) {
  typeof e == "boolean" ? (eo(t) && (n = t, t = void 0), t = t || "") : (t = e, n = t, e = !1, eo(t) && (n = t, t = void 0), t = t || "");
  var o = lo(), s = e ? o._week.dow : 0, u, c = [];
  if (n != null)
    return id(t, (n + s) % 7, r, "day");
  for (u = 0; u < 7; u++)
    c[u] = id(t, (u + s) % 7, r, "day");
  return c;
}
function V6(e, t) {
  return _x(e, t, "months");
}
function G6(e, t) {
  return _x(e, t, "monthsShort");
}
function K6(e, t, n) {
  return Qm(e, t, n, "weekdays");
}
function Z6(e, t, n) {
  return Qm(e, t, n, "weekdaysShort");
}
function X6(e, t, n) {
  return Qm(e, t, n, "weekdaysMin");
}
Ao("en", {
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
    var t = e % 10, n = kt(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + n;
  }
});
Be.lang = Hr(
  "moment.lang is deprecated. Use moment.locale instead.",
  Ao
);
Be.langData = Hr(
  "moment.langData is deprecated. Use moment.localeData instead.",
  lo
);
var Wa = Math.abs;
function Q6() {
  var e = this._data;
  return this._milliseconds = Wa(this._milliseconds), this._days = Wa(this._days), this._months = Wa(this._months), e.milliseconds = Wa(e.milliseconds), e.seconds = Wa(e.seconds), e.minutes = Wa(e.minutes), e.hours = Wa(e.hours), e.months = Wa(e.months), e.years = Wa(e.years), this;
}
function wx(e, t, n, r) {
  var o = ia(t, n);
  return e._milliseconds += r * o._milliseconds, e._days += r * o._days, e._months += r * o._months, e._bubble();
}
function J6(e, t) {
  return wx(this, e, t, 1);
}
function ez(e, t) {
  return wx(this, e, t, -1);
}
function N0(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function tz() {
  var e = this._milliseconds, t = this._days, n = this._months, r = this._data, o, s, u, c, d;
  return e >= 0 && t >= 0 && n >= 0 || e <= 0 && t <= 0 && n <= 0 || (e += N0(Nh(n) + t) * 864e5, t = 0, n = 0), r.milliseconds = e % 1e3, o = Dr(e / 1e3), r.seconds = o % 60, s = Dr(o / 60), r.minutes = s % 60, u = Dr(s / 60), r.hours = u % 24, t += Dr(u / 24), d = Dr(xx(t)), n += d, t -= N0(Nh(d)), c = Dr(n / 12), n %= 12, r.days = t, r.months = n, r.years = c, this;
}
function xx(e) {
  return e * 4800 / 146097;
}
function Nh(e) {
  return e * 146097 / 4800;
}
function nz(e) {
  if (!this.isValid())
    return NaN;
  var t, n, r = this._milliseconds;
  if (e = Yr(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + r / 864e5, n = this._months + xx(t), e) {
      case "month":
        return n;
      case "quarter":
        return n / 3;
      case "year":
        return n / 12;
    }
  else
    switch (t = this._days + Math.round(Nh(this._months)), e) {
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
function co(e) {
  return function() {
    return this.as(e);
  };
}
var Ex = co("ms"), rz = co("s"), az = co("m"), oz = co("h"), iz = co("d"), sz = co("w"), lz = co("M"), cz = co("Q"), uz = co("y"), dz = Ex;
function fz() {
  return ia(this);
}
function pz(e) {
  return e = Yr(e), this.isValid() ? this[e + "s"]() : NaN;
}
function Ui(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var hz = Ui("milliseconds"), mz = Ui("seconds"), gz = Ui("minutes"), vz = Ui("hours"), yz = Ui("days"), bz = Ui("months"), _z = Ui("years");
function wz() {
  return Dr(this.days() / 7);
}
var Ha = Math.round, us = {
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
function xz(e, t, n, r, o) {
  return o.relativeTime(t || 1, !!n, e, r);
}
function Ez(e, t, n, r) {
  var o = ia(e).abs(), s = Ha(o.as("s")), u = Ha(o.as("m")), c = Ha(o.as("h")), d = Ha(o.as("d")), p = Ha(o.as("M")), h = Ha(o.as("w")), m = Ha(o.as("y")), g = s <= n.ss && ["s", s] || s < n.s && ["ss", s] || u <= 1 && ["m"] || u < n.m && ["mm", u] || c <= 1 && ["h"] || c < n.h && ["hh", c] || d <= 1 && ["d"] || d < n.d && ["dd", d];
  return n.w != null && (g = g || h <= 1 && ["w"] || h < n.w && ["ww", h]), g = g || p <= 1 && ["M"] || p < n.M && ["MM", p] || m <= 1 && ["y"] || ["yy", m], g[2] = t, g[3] = +e > 0, g[4] = r, xz.apply(null, g);
}
function Cz(e) {
  return e === void 0 ? Ha : typeof e == "function" ? (Ha = e, !0) : !1;
}
function Oz(e, t) {
  return us[e] === void 0 ? !1 : t === void 0 ? us[e] : (us[e] = t, e === "s" && (us.ss = t - 1), !0);
}
function Sz(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var n = !1, r = us, o, s;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (n = e), typeof t == "object" && (r = Object.assign({}, us, t), t.s != null && t.ss == null && (r.ss = t.s - 1)), o = this.localeData(), s = Ez(this, !n, r, o), n && (s = o.pastFuture(+this, s)), o.postformat(s);
}
var Fp = Math.abs;
function as(e) {
  return (e > 0) - (e < 0) || +e;
}
function Hd() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = Fp(this._milliseconds) / 1e3, t = Fp(this._days), n = Fp(this._months), r, o, s, u, c = this.asSeconds(), d, p, h, m;
  return c ? (r = Dr(e / 60), o = Dr(r / 60), e %= 60, r %= 60, s = Dr(n / 12), n %= 12, u = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", d = c < 0 ? "-" : "", p = as(this._months) !== as(c) ? "-" : "", h = as(this._days) !== as(c) ? "-" : "", m = as(this._milliseconds) !== as(c) ? "-" : "", d + "P" + (s ? p + s + "Y" : "") + (n ? p + n + "M" : "") + (t ? h + t + "D" : "") + (o || r || e ? "T" : "") + (o ? m + o + "H" : "") + (r ? m + r + "M" : "") + (e ? m + u + "S" : "")) : "P0D";
}
var Rt = zd.prototype;
Rt.isValid = bW;
Rt.abs = Q6;
Rt.add = J6;
Rt.subtract = ez;
Rt.as = nz;
Rt.asMilliseconds = Ex;
Rt.asSeconds = rz;
Rt.asMinutes = az;
Rt.asHours = oz;
Rt.asDays = iz;
Rt.asWeeks = sz;
Rt.asMonths = lz;
Rt.asQuarters = cz;
Rt.asYears = uz;
Rt.valueOf = dz;
Rt._bubble = tz;
Rt.clone = fz;
Rt.get = pz;
Rt.milliseconds = hz;
Rt.seconds = mz;
Rt.minutes = gz;
Rt.hours = vz;
Rt.days = yz;
Rt.weeks = wz;
Rt.months = bz;
Rt.years = _z;
Rt.humanize = Sz;
Rt.toISOString = Hd;
Rt.toString = Hd;
Rt.toJSON = Hd;
Rt.locale = ux;
Rt.localeData = fx;
Rt.toIsoString = Hr(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  Hd
);
Rt.lang = dx;
nt("X", 0, 0, "unix");
nt("x", 0, 0, "valueOf");
qe("x", $d);
qe("X", VB);
Kt("X", function(e, t, n) {
  n._d = new Date(parseFloat(e) * 1e3);
});
Kt("x", function(e, t, n) {
  n._d = new Date(kt(e));
});
//! moment.js
Be.version = "2.30.1";
TB(on);
Be.fn = Me;
Be.min = mW;
Be.max = gW;
Be.now = vW;
Be.utc = Na;
Be.unix = Y6;
Be.months = V6;
Be.isDate = Cc;
Be.locale = Ao;
Be.invalid = Md;
Be.duration = ia;
Be.isMoment = ra;
Be.weekdays = K6;
Be.parseZone = q6;
Be.localeData = lo;
Be.isDuration = $u;
Be.monthsShort = G6;
Be.weekdaysMin = X6;
Be.defineLocale = Hm;
Be.updateLocale = qj;
Be.locales = Vj;
Be.weekdaysShort = Z6;
Be.normalizeUnits = Yr;
Be.relativeTimeRounding = Cz;
Be.relativeTimeThreshold = Oz;
Be.calendarFormat = zW;
Be.prototype = Me;
Be.HTML5_FMT = {
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
function Tz(e) {
  if (e != null) {
    const t = e.replace(/[^\d]/g, "");
    return t.length === 10 ? t.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3") : t.length === 11 ? t.replace(/(\d{1})(\d{3})(\d{3})(\d{4})/, "$1 ($2) $3-$4") : e;
  }
  return e;
}
function I0(e, t = !1, n = !1, r = !1) {
  const o = new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "dop"
  });
  if ([null, "", void 0].includes(e) && !r || !n && parseFloat(e || 0) === 0) return "";
  const s = o.format(e).replace("DOP", "");
  return t ? s.split(".")[0] : s;
}
function Pz(e, t = !1, n = !1) {
  const r = new Intl.NumberFormat("ja-JP", {
    maximumSignificantDigits: 14,
    style: "currency",
    currency: "dop"
  });
  return [null, "", void 0].includes(e) && !n || !t && parseFloat(e || 0) === 0 ? "" : r.format(e).replace("DOP", "");
}
function Cx(e, t) {
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
function kz(e) {
  if (e) {
    const t = new Date(e).getTime(), r = (/* @__PURE__ */ new Date()).getTime() - t, o = parseInt(r / (1e3 * 60 * 60 * 24), 10);
    return o === 0 ? null : o;
  }
  return null;
}
function Mr(e, t = !1, n = !1, r = !1, o = !1, s = !1, u = !1) {
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
      return Be(e, "DD/MM/YYYY").format("DD/MM/YYYY");
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
    }) : Be(e).format("DD/MM/YYYY");
  }
  return e;
}
function Tl(e, t) {
  let n = e;
  return t && t.forEach((r) => {
    r.onName === e && (n = String(r.translate));
  }), n;
}
function Nz(e, t, n) {
  return R.map(e, (o, s) => ({ key: s + 1, text: R.get(o, t, ""), value: R.get(o, n, "") }));
}
function Ro(e) {
  let t = e.split(",").join(".");
  if (t.split(".").length > 2) {
    const n = t.split(".");
    t = `${n[0]}:${R.takeRight(n, n.length - 1).join(".")}`;
  }
  return t;
}
function wl(e, t = 768, n = 55, r = 10, o = 10) {
  if (e >= t)
    return n;
  const s = t - e, u = Math.floor(s / r), c = n - u;
  return Math.max(c, o);
}
const Iz = "_headerTable_1sdq3_1", Az = "_tableCellHeader_1sdq3_13", xl = {
  headerTable: Iz,
  tableCellHeader: Az
}, Jm = ({
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
  const [p, h] = ot([]), [m, g] = ot([]), [y, b] = ot(""), [_, w] = ot("");
  Vt(() => {
    E(), b(t.orderDir === "desc" ? "descending" : "ascending"), w(t.orderKey);
  }, [t, y, _]), Vt(() => {
    E();
  }, [s, e]);
  const k = (I) => {
    const S = y === "descending" ? "ascending" : "descending";
    let P;
    R.isEmpty(I) || (P = Ro(I));
    const C = {
      ...t,
      page: 1,
      orderKey: P,
      orderDir: S === "descending" ? "desc" : "asc"
    };
    b(S), w(P), R.isEmpty(C) || (n(C), r(C));
  }, F = () => {
    const I = {
      ...t,
      rows: c
    };
    u(!s), r(I, !1, !s, !0);
  }, E = ({ subColumns: I = [], multStatus: S = !1 } = {}) => {
    let P = e;
    R.isEmpty(I) || (P = I);
    let C = !1, T = [];
    const A = P.map(
      ({
        key: B,
        label: H,
        width: ne,
        headerPosition: U,
        multipleColumns: re = [],
        multiple: he = !1,
        action: ge = [],
        canSort: Ne = !0,
        twoLines: le = !1,
        line1: me = {},
        line2: X = {},
        hidden: te = !1,
        color: oe = "hsl(0, 0%, 80%)",
        style: be = {},
        orderKey: Se
      }, ye) => {
        let fe, Ce;
        return R.isEmpty(B) || (fe = Ro(B)), Ce = fe, R.isEmpty(Se) || (Ce = Ro(Se)), te ? null : !R.isEmpty(re) && R.isEmpty(I) ? (C = !0, T = [...T, ...re], /* @__PURE__ */ O(
          Et.HeaderCell,
          {
            style: { backgroundColor: oe },
            className: xl.tableCellHeader,
            colSpan: re.length,
            textAlign: U || "center",
            children: H
          },
          ye
        )) : he ? /* @__PURE__ */ O(
          Et.HeaderCell,
          {
            style: { backgroundColor: oe, ...be },
            className: xl.tableCellHeader,
            textAlign: "center",
            onClick: F,
            children: /* @__PURE__ */ O(Kn, { checked: s })
          },
          ye
        ) : le ? /* @__PURE__ */ ae(
          Et.HeaderCell,
          {
            rowSpan: !R.isEmpty(re) && R.isEmpty(I) ? "1" : "2",
            style: { backgroundColor: oe },
            className: xl.tableCellHeader,
            textAlign: U || "center",
            sorted: Ne && Ce === _ ? y : null,
            onClick: Ne ? () => {
              k(Ce);
            } : null,
            width: ne || 1,
            children: [
              /* @__PURE__ */ ae("div", { children: [
                " ",
                R.get(me, "label", "")
              ] }),
              /* @__PURE__ */ ae("div", { children: [
                " ",
                R.get(X, "label", "")
              ] })
            ]
          },
          ye
        ) : !R.isEmpty(ge) && o ? null : /* @__PURE__ */ O(
          Et.HeaderCell,
          {
            rowSpan: !R.isEmpty(re) && R.isEmpty(I) ? "1" : "2",
            style: { backgroundColor: oe, ...be },
            className: xl.tableCellHeader,
            textAlign: U || "center",
            sorted: Ne && Ce === _ ? y : null,
            onClick: Ne ? () => {
              k(Ce);
            } : null,
            width: d ? void 0 : ne || 1,
            children: H
          },
          ye
        );
      }
    );
    S || h(/* @__PURE__ */ O(Et.Row, { children: A })), S && g(/* @__PURE__ */ O(Et.Row, { children: A })), C && E({
      subColumns: T,
      multStatus: C
    });
  };
  return /* @__PURE__ */ ae(Et.Header, { className: xl.headerTable, children: [
    p,
    m
  ] });
};
Jm.propTypes = {
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
var Ox = {};
Object.defineProperty(Ox, "__esModule", { value: !0 });
var Rz = J;
function Mz(e) {
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
var Co = /* @__PURE__ */ Mz(Rz), Ih = function() {
  return Ih = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, Ih.apply(this, arguments);
};
function Dz(e) {
  var t = e.bgColor, n = t === void 0 ? "#6a1b9a" : t, r = e.height, o = r === void 0 ? "20px" : r, s = e.width, u = s === void 0 ? "100%" : s, c = e.borderRadius, d = c === void 0 ? "50px" : c, p = e.labelAlignment, h = p === void 0 ? "right" : p, m = e.baseBgColor, g = m === void 0 ? "#e0e0de" : m, y = e.labelColor, b = y === void 0 ? "#fff" : y, _ = e.labelSize, w = _ === void 0 ? "15px" : _, k = e.isLabelVisible, F = k === void 0 ? !0 : k, E = e.dir, I = E === void 0 ? "ltr" : E, S = e.ariaValuemin, P = S === void 0 ? 0 : S, C = e.ariaValuemax, T = C === void 0 ? 100 : C, A = e.ariaValuetext, B = A === void 0 ? null : A, H = e.maxCompleted, ne = H === void 0 ? 100 : H, U = e.animateOnRender, re = U === void 0 ? !1 : U, he = e.initCompletedOnAnimation, ge = he === void 0 ? 0 : he, Ne = e.isIndeterminate, le = Ne === void 0 ? !1 : Ne, me = e.completed, X = e.margin, te = e.padding, oe = e.customLabelStyles, be = e.transitionDuration, Se = e.transitionTimingFunction, ye = e.className, fe = e.customLabel, Ce = e.barContainerClassName, De = e.completedClassName, W = e.labelClassName, z = function(Ae) {
    return Ae === "left" ? "flex-start" : Ae === "center" ? "center" : Ae === "right" ? "flex-end" : null;
  }, $ = z(h), D = typeof ge == "number" ? "".concat(ge, "%") : ge, G = function(Ae, je) {
    if (Ae) {
      var $e = Number(je) / Ae;
      return $e > 1 ? "100%" : "".concat($e * 100, "%");
    }
    return D;
  }, K = G(ne, me), se = Co.useState(D), Ie = se[0], pe = se[1], Ee = {
    height: o,
    background: g,
    borderRadius: d,
    padding: te,
    width: u,
    margin: X,
    overflow: "hidden"
  }, de = {
    height: o,
    width: le ? "100%" : re ? Ie : K,
    background: n,
    transition: le ? "none" : "width ".concat(be || "1s", " ").concat(Se || "ease-in-out"),
    borderRadius: "inherit",
    display: "flex",
    alignItems: "center",
    justifyContent: h !== "outside" && $ ? $ : "normal",
    animation: le ? "indeterminate 1.5s infinite linear" : "none"
  }, q = Ih({ padding: h === "outside" ? "0 0 0 5px" : "5px", color: b, fontWeight: "bold", fontSize: w, display: F ? "initial" : "none" }, oe), ee = {
    display: h === "outside" ? "flex" : "initial",
    alignItems: h === "outside" ? "center" : "initial"
  }, we = typeof me == "number" ? "".concat(me, "%") : "".concat(me), ke = fe || we;
  return Co.useEffect(function() {
    re && !le && requestAnimationFrame(function() {
      return pe(K);
    });
  }, [K, re, le]), Co.createElement(
    "div",
    { style: ye ? void 0 : ee, className: ye, dir: I, role: "progressbar", "aria-valuenow": le ? void 0 : parseFloat(ke), "aria-valuemin": P, "aria-valuemax": T, "aria-valuetext": "".concat(B === null ? ke : B) },
    Co.createElement(
      "div",
      { style: Ce ? void 0 : Ee, className: Ce },
      Co.createElement("div", { style: De ? void 0 : de, className: De }, h !== "outside" && Co.createElement("span", { style: W ? void 0 : q, className: W }, ke))
    ),
    h === "outside" && Co.createElement("span", { style: W ? void 0 : q, className: W }, ke),
    Co.createElement("style", null, `
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
var Lz = Ox.default = Dz;
const ju = (e, t, n) => {
  if (R.isEmpty(n))
    return e[t];
  if (e[t]) {
    const r = R.takeRight(n, n.length - 1);
    return ju(e[t], n[0], r);
  }
  return "";
};
function qt(e, t, n = !1, r) {
  if (e) {
    if (r)
      return ju(t, e, null);
    let o = e.split(".");
    if (o.length < 2 && (o = e.split(","), o.length >= 2))
      return ju(t, o[0], null);
    const s = R.takeRight(o, o.length - 1), u = ju(t, o[0], s);
    return [null, "", void 0].includes(u) && n ? 0 : u;
  }
  return n ? 0 : null;
}
const Fz = "_emptyChat_1ablf_3", $z = "_emptyDataIcon_1ablf_13", Bz = "_groupHover_1ablf_29", jz = "_sumRow_1ablf_39", Wz = "_cell_1ablf_51", zz = "_cellButton_1ablf_61", Uz = "_ButtonIcon_1ablf_75", Hz = "_ButtonLink_1ablf_95", Yz = "_towLineRow_1ablf_117", qz = "_noWrap_1ablf_127", Vz = "_progressBarLabel_1ablf_137", Gz = "_cardsWrapper_1ablf_157", Kz = "_popupContent_1ablf_225", Jt = {
  emptyChat: Fz,
  emptyDataIcon: $z,
  groupHover: Bz,
  sumRow: jz,
  cell: Wz,
  cellButton: zz,
  ButtonIcon: Uz,
  ButtonLink: Hz,
  towLineRow: Yz,
  noWrap: qz,
  progressBarLabel: Vz,
  cardsWrapper: Gz,
  popupContent: Kz
}, Zz = (e, t, n = {}) => {
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
      ), g = (h[o] || []).filter((y) => !m.has(y[s]));
      g.length > 0 ? c.push({
        ...p,
        [o]: [...p[o] || [], ...g]
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
}, Xz = "_cardsContainer_d29bq_1", Qz = "_card_d29bq_1", Jz = "_cardHeader_d29bq_43", eU = "_cardField_d29bq_61", tU = "_cardLabel_d29bq_89", nU = "_cardValue_d29bq_103", rU = "_cardActionsMenu_d29bq_133", aU = "_cardMenuIcon_d29bq_157", oU = "_cardMenu_d29bq_157", iU = "_cardMenuPopupContent_d29bq_287", sU = "_cardMenuItem_d29bq_295", lU = "_cardMenuIconItem_d29bq_315", cU = "_cardMenuText_d29bq_335", uU = "_cardActionsMenuPopup_d29bq_351", dU = "_emptyState_d29bq_363", fU = "_emptyIcon_d29bq_375", pU = "_cardLine1_d29bq_387", hU = "_cardLine2_d29bq_403", mU = "_cardLine3_d29bq_419", gU = "_cardLine4_d29bq_435", vU = "_cardLine1Item_d29bq_451", yU = "_cardLine2Item_d29bq_453", bU = "_cardLine3Item_d29bq_455", _U = "_cardLine4Item_d29bq_457", wU = "_cardCheckbox_d29bq_467", xU = "_cardInlineField_d29bq_479", EU = "_cardInlineLabel_d29bq_491", CU = "_cardInlineValue_d29bq_505", ht = {
  cardsContainer: Xz,
  card: Qz,
  cardHeader: Jz,
  cardField: eU,
  cardLabel: tU,
  cardValue: nU,
  cardActionsMenu: rU,
  cardMenuIcon: aU,
  cardMenu: oU,
  cardMenuPopupContent: iU,
  cardMenuItem: sU,
  cardMenuIconItem: lU,
  cardMenuText: cU,
  cardActionsMenuPopup: uU,
  emptyState: dU,
  emptyIcon: fU,
  cardLine1: pU,
  cardLine2: hU,
  cardLine3: mU,
  cardLine4: gU,
  cardLine1Item: vU,
  cardLine2Item: yU,
  cardLine3Item: bU,
  cardLine4Item: _U,
  cardCheckbox: wU,
  cardInlineField: xU,
  cardInlineLabel: EU,
  cardInlineValue: CU
}, Sx = ({ rowData: e, columnsData: t, onHandlerTable: n, isPDF: r }) => {
  const [o, s] = ot(!1), u = [];
  if (R.map(t, ({ action: d, key: p }) => {
    !R.isEmpty(d) && !r && R.map(d, (h) => {
      const { content: m, hidden: g, type: y, color: b = "hsl(0, 0%, 95%)", onClick: _, visible: w } = h;
      if (!g && !(typeof w == "function" && w(e) === !1) && (y === "icon" || y === "link")) {
        let k = m;
        y === "icon" && (m === "edit" ? k = "Editar" : m === "trash" || m === "delete" ? k = "Borrar" : m === "eye" ? k = "Ver" : m === "copy" && (k = "Copiar")), u.push({
          key: `${p}-${m}`,
          text: k,
          icon: y === "icon" ? m : null,
          color: y === "icon" ? b : null,
          onClick: () => {
            s(!1), n(_, e);
          }
        });
      }
    });
  }), R.isEmpty(u)) return null;
  const c = R.map(u, (d) => /* @__PURE__ */ ae(
    In.Item,
    {
      className: ht.cardMenuItem,
      onClick: (p) => {
        p.stopPropagation(), d.onClick();
      },
      children: [
        d.icon && /* @__PURE__ */ O(
          We,
          {
            name: d.icon,
            className: ht.cardMenuIconItem,
            style: {
              color: d.color || "#6b7280"
            }
          }
        ),
        /* @__PURE__ */ O("span", { className: ht.cardMenuText, children: d.text })
      ]
    },
    d.key
  ));
  return /* @__PURE__ */ O(
    "div",
    {
      className: ht.cardActionsMenu,
      onDoubleClick: (d) => {
        d.stopPropagation();
      },
      children: /* @__PURE__ */ O(
        ur,
        {
          className: ht.cardActionsMenuPopup,
          trigger: /* @__PURE__ */ O(
            We,
            {
              name: "ellipsis vertical",
              size: "large",
              className: ht.cardMenuIcon,
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
          children: /* @__PURE__ */ O(ur.Content, { className: ht.cardMenuPopupContent, children: /* @__PURE__ */ O(In, { vertical: !0, className: ht.cardMenu, children: c }) })
        }
      )
    }
  );
};
Sx.propTypes = {
  rowData: l.object.isRequired,
  columnsData: l.array.isRequired,
  onHandlerTable: l.func.isRequired,
  isPDF: l.bool
};
const Tx = ({
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
  cardLine3: g = [],
  cardLine4: y = [],
  multipleHandler: b,
  concatKeys: _ = [],
  enableInfiniteScroll: w = !1,
  onLoadMore: k,
  isLoadingMore: F = !1,
  hasMore: E,
  // Props para manejo automático de scroll infinito
  dataHandler: I = null,
  searchParams: S = null,
  totalRows: P = 0,
  mergeConfig: C = null
}) => {
  const T = Nn(null), A = Nn(null), [B, H] = ot(!1), [ne, U] = ot(e), [re, he] = ot(1), [ge, Ne] = ot(!0), le = Nn(!1), me = Nn(S), X = Nn(!1), te = Nn(!1), oe = Nn(0), [be, Se] = ot(window.innerWidth);
  Vt(() => {
    const pe = () => {
      Se(window.innerWidth);
    };
    return window.addEventListener("resize", pe), () => {
      window.removeEventListener("resize", pe);
    };
  }, []), Vt(() => {
    JSON.stringify(me.current) !== JSON.stringify(S) ? (U(e), he(1), me.current = S, X.current = !1, oe.current = 1, te.current = !1, Ne(!0)) : X.current && re > oe.current ? (e && e.length > 0 ? (U((Ee) => {
      if (C)
        return Zz(Ee, e, C);
      const de = "id";
      if (Ee.length > 0 && Ee[0][de] !== void 0) {
        const q = new Set(
          Ee.map((we) => we[de])
        ), ee = e.filter((we) => !q.has(we[de]));
        return [...Ee, ...ee];
      }
      return [...Ee, ...e];
    }), oe.current = re, te.current = !1) : (oe.current = re, te.current = !0), X.current = !1) : re === 1 && !X.current && e && (U(e), oe.current = 1);
  }, [e, S, C, re]), Vt(() => {
    if (e !== void 0 && ge && !le.current && !B && !X.current) {
      if (e.length > 0) {
        const Ee = setTimeout(() => {
          Ne(!1);
        }, 1e3);
        return () => {
          clearTimeout(Ee);
        };
      }
      const pe = setTimeout(() => {
        Ne(!1);
      }, 1500);
      return () => {
        clearTimeout(pe);
      };
    }
  }, [e, ge, B]), Vt(() => {
    if (ge) {
      const pe = setTimeout(() => {
        Ne(!1);
      }, 3e3);
      return () => {
        clearTimeout(pe);
      };
    }
  }, [ge]);
  const ye = (pe, Ee) => {
    if (R.isEmpty(pe))
      return null;
    const de = /* @__PURE__ */ O("span", { style: { marginLeft: "4px" }, children: /* @__PURE__ */ O(
      ur,
      {
        position: "bottom right",
        content: /* @__PURE__ */ O("div", { children: pe }),
        trigger: /* @__PURE__ */ O(We, { name: "comment alternate outline", style: { color: "#286b92" } })
      }
    ) }, 1);
    return Ee >= pe.length ? pe : /* @__PURE__ */ ae("span", { children: [
      `${pe.slice(0, Ee)}...`,
      de
    ] });
  }, fe = (pe, Ee, de = null) => {
    const {
      key: q,
      label: ee,
      format: we,
      endDateKey: ke = null,
      dataPosition: Ae = "left",
      stringLength: je = 20,
      boolLabels: $e,
      translate: et,
      colorLabel: Ze,
      textColor: Ke = "#000000",
      stopDateHandler: Ve = () => {
      },
      onClick: Te,
      render: ie
    } = pe;
    if (ie && typeof ie == "function")
      return ie(Ee);
    const tt = qt(q, Ee, !1), xt = R.isEmpty(ke) ? null : qt(ke, Ee), ft = wl(be, 768, je, 10, 10), rt = c({
      value: tt,
      format: we,
      endDate: xt,
      stringLength: ft,
      key: q,
      translate: et,
      colorLabel: Ze,
      onClick: Te,
      rowData: Ee,
      textColor: Ke,
      boolLabels: $e,
      stopDateHandler: Ve
    });
    if (!(q === "id" || ee === "ID" || (q == null ? void 0 : q.toLowerCase().includes("id"))) && (R.isEmpty(rt) || rt === "-" || rt === null || rt === void 0))
      return null;
    const Ue = de !== null ? de : ee;
    return /* @__PURE__ */ ae("div", { className: ht.cardInlineField, children: [
      Ue && /* @__PURE__ */ ae("span", { className: ht.cardInlineLabel, children: [
        Ue,
        ":"
      ] }),
      /* @__PURE__ */ O("span", { className: ht.cardInlineValue, style: { textAlign: Ae, color: Ke }, children: rt })
    ] });
  }, Ce = (pe, Ee) => /* @__PURE__ */ O(Sx, { rowData: pe, columnsData: Ee, onHandlerTable: s, isPDF: p }), De = (pe, Ee) => {
    let de = {};
    typeof r == "function" && (de = r(pe) || {});
    const ee = d === pe ? { backgroundColor: o, ...de } : de;
    if (!R.isEmpty(h) || !R.isEmpty(m) || !R.isEmpty(g) || !R.isEmpty(y)) {
      const Ae = R.find(t, { multiple: !0 }), je = Ae == null ? void 0 : Ae.key, $e = je ? R.includes(_, pe[je]) : !1, et = [];
      Ae && !R.isEmpty(h) && et.push(
        /* @__PURE__ */ O("div", { className: ht.cardCheckbox, children: /* @__PURE__ */ O(
          Kn,
          {
            checked: $e,
            onChange: () => {
              b && b(pe, je);
            },
            onClick: (ie) => {
              ie.stopPropagation();
            }
          }
        ) }, "checkbox")
      ), R.map(h, (ie) => {
        const tt = typeof ie == "string" ? ie : ie.key, xt = typeof ie == "object" && ie.label !== void 0 ? ie.label : null, ft = typeof ie == "object" && ie.format !== void 0 ? ie.format : null, rt = R.find(t, (Zt) => Zt.key === tt && !Zt.multiple && !Zt.hidden);
        if (rt && !rt.hidden && !rt.multiple) {
          const Zt = ft ? { ...rt, format: ft } : rt, Ue = fe(Zt, pe, xt);
          Ue && et.push(
            /* @__PURE__ */ O("div", { className: ht.cardLine1Item, children: Ue }, tt)
          );
        }
      });
      const Ze = [];
      R.map(m, (ie) => {
        var Zt;
        if (typeof ie == "object" && typeof ie.render == "function") {
          const Ue = ie.render(pe), $t = typeof Ue == "object" && Ue.label !== void 0 ? Ue.label : ie.label || null;
          let at = typeof Ue == "object" && Ue.value !== void 0 ? Ue.value : Ue;
          const dn = typeof ie == "object" && ie.format !== void 0 ? ie.format : null, Xn = typeof ie == "object" && ie.stringLength !== void 0 ? ie.stringLength : 20, la = typeof Ue == "object" && Ue.shouldTruncate === !0;
          if (dn && typeof at == "string")
            if (dn === "truncate" && la) {
              const ca = wl(be, 480, Xn, 1, 10);
              at = ye(at, ca);
            } else dn !== "truncate" && (at = c({
              value: at,
              format: dn,
              endDate: null,
              stringLength: Xn,
              key: ie.key || "",
              translate: null,
              colorLabel: null,
              onClick: null,
              rowData: pe,
              textColor: "#000000",
              boolLabels: null,
              stopDateHandler: () => {
              }
            }));
          ((ie.key === "id" || ie.label === "ID" || ((Zt = ie.key) == null ? void 0 : Zt.toLowerCase().includes("id"))) && !R.isEmpty(at) && at !== "-" && at !== null && at !== void 0 || !R.isEmpty(at) && at !== "-" && at !== null && at !== void 0) && Ze.push(
            /* @__PURE__ */ O("div", { className: ht.cardLine2Item, children: /* @__PURE__ */ ae("div", { className: ht.cardInlineField, children: [
              $t && /* @__PURE__ */ ae("span", { className: ht.cardInlineLabel, children: [
                $t,
                ":"
              ] }),
              /* @__PURE__ */ O("span", { className: ht.cardInlineValue, children: at })
            ] }) }, ie.key || "render")
          );
          return;
        }
        const tt = typeof ie == "string" ? ie : ie.key, xt = typeof ie == "object" && ie.label !== void 0 ? ie.label : null, ft = typeof ie == "object" && ie.format !== void 0 ? ie.format : null, rt = R.find(t, (Ue) => Ue.key === tt && !Ue.multiple && !Ue.hidden);
        if (rt && !rt.hidden && !rt.multiple) {
          const Ue = ft ? { ...rt, format: ft } : rt, $t = fe(Ue, pe, xt);
          $t && Ze.push(
            /* @__PURE__ */ O("div", { className: ht.cardLine2Item, children: $t }, tt)
          );
        }
      });
      const Ke = [];
      R.map(g, (ie) => {
        var Zt;
        if (typeof ie == "object" && typeof ie.render == "function") {
          const Ue = ie.render(pe), $t = typeof Ue == "object" && Ue.label !== void 0 ? Ue.label : ie.label || null;
          let at = typeof Ue == "object" && Ue.value !== void 0 ? Ue.value : Ue;
          const dn = typeof ie == "object" && ie.format !== void 0 ? ie.format : null, Xn = typeof ie == "object" && ie.stringLength !== void 0 ? ie.stringLength : 20, la = typeof Ue == "object" && Ue.shouldTruncate === !0;
          if (dn && typeof at == "string")
            if (dn === "truncate" && la) {
              const ca = wl(be, 480, Xn, 1, 10);
              at = ye(at, ca);
            } else dn !== "truncate" && (at = c({
              value: at,
              format: dn,
              endDate: null,
              stringLength: Xn,
              key: ie.key || "",
              translate: null,
              colorLabel: null,
              onClick: null,
              rowData: pe,
              textColor: "#000000",
              boolLabels: null,
              stopDateHandler: () => {
              }
            }));
          ((ie.key === "id" || ie.label === "ID" || ((Zt = ie.key) == null ? void 0 : Zt.toLowerCase().includes("id"))) && !R.isEmpty(at) && at !== "-" && at !== null && at !== void 0 || !R.isEmpty(at) && at !== "-" && at !== null && at !== void 0) && Ke.push(
            /* @__PURE__ */ O("div", { className: ht.cardLine3Item, children: /* @__PURE__ */ ae("div", { className: ht.cardInlineField, children: [
              $t && /* @__PURE__ */ ae("span", { className: ht.cardInlineLabel, children: [
                $t,
                ":"
              ] }),
              /* @__PURE__ */ O("span", { className: ht.cardInlineValue, children: at })
            ] }) }, ie.key || "render")
          );
          return;
        }
        const tt = typeof ie == "string" ? ie : ie.key, xt = typeof ie == "object" && ie.label !== void 0 ? ie.label : null, ft = typeof ie == "object" && ie.format !== void 0 ? ie.format : null, rt = R.find(t, (Ue) => Ue.key === tt && !Ue.multiple && !Ue.hidden);
        if (rt && !rt.hidden && !rt.multiple) {
          const Ue = ft ? { ...rt, format: ft } : rt, $t = fe(Ue, pe, xt);
          $t && Ke.push(
            /* @__PURE__ */ O("div", { className: ht.cardLine3Item, children: $t }, tt)
          );
        }
      });
      const Ve = [];
      R.map(y, (ie) => {
        var Zt;
        if (typeof ie == "object" && typeof ie.render == "function") {
          const Ue = ie.render(pe), $t = typeof Ue == "object" && Ue.label !== void 0 ? Ue.label : ie.label || null;
          let at = typeof Ue == "object" && Ue.value !== void 0 ? Ue.value : Ue;
          const dn = typeof ie == "object" && ie.format !== void 0 ? ie.format : null, Xn = typeof ie == "object" && ie.stringLength !== void 0 ? ie.stringLength : 20, la = typeof Ue == "object" && Ue.shouldTruncate === !0;
          if (dn && typeof at == "string")
            if (dn === "truncate" && la) {
              const ca = wl(be, 480, Xn, 1, 10);
              at = ye(at, ca);
            } else dn !== "truncate" && (at = c({
              value: at,
              format: dn,
              endDate: null,
              stringLength: Xn,
              key: ie.key || "",
              translate: null,
              colorLabel: null,
              onClick: null,
              rowData: pe,
              textColor: "#000000",
              boolLabels: null,
              stopDateHandler: () => {
              }
            }));
          ((ie.key === "id" || ie.label === "ID" || ((Zt = ie.key) == null ? void 0 : Zt.toLowerCase().includes("id"))) && !R.isEmpty(at) && at !== "-" && at !== null && at !== void 0 || !R.isEmpty(at) && at !== "-" && at !== null && at !== void 0) && Ve.push(
            /* @__PURE__ */ O("div", { className: ht.cardLine4Item, children: /* @__PURE__ */ ae("div", { className: ht.cardInlineField, children: [
              $t && /* @__PURE__ */ ae("span", { className: ht.cardInlineLabel, children: [
                $t,
                ":"
              ] }),
              /* @__PURE__ */ O("span", { className: ht.cardInlineValue, children: at })
            ] }) }, ie.key || "render")
          );
          return;
        }
        const tt = typeof ie == "string" ? ie : ie.key, xt = typeof ie == "object" && ie.label !== void 0 ? ie.label : null, ft = typeof ie == "object" && ie.format !== void 0 ? ie.format : null, rt = R.find(t, (Ue) => Ue.key === tt && !Ue.multiple && !Ue.hidden);
        if (rt && !rt.hidden && !rt.multiple) {
          const Ue = ft ? { ...rt, format: ft } : rt, $t = fe(Ue, pe, xt);
          $t && Ve.push(
            /* @__PURE__ */ O("div", { className: ht.cardLine4Item, children: $t }, tt)
          );
        }
      });
      const Te = Ce(pe, t);
      return /* @__PURE__ */ ae(
        "div",
        {
          className: ht.card,
          style: ee,
          role: "button",
          tabIndex: 0,
          onClick: () => {
            u(pe);
          },
          onDoubleClick: () => {
            s("Watch", pe);
          },
          onKeyPress: (ie) => {
            (ie.key === "Enter" || ie.key === " ") && u(pe);
          },
          children: [
            Te,
            !R.isEmpty(et) && /* @__PURE__ */ O("div", { className: ht.cardLine1, children: et }),
            !R.isEmpty(Ze) && /* @__PURE__ */ O("div", { className: ht.cardLine2, children: Ze }),
            !R.isEmpty(Ke) && /* @__PURE__ */ O("div", { className: ht.cardLine3, children: Ke }),
            !R.isEmpty(Ve) && /* @__PURE__ */ O("div", { className: ht.cardLine4, children: Ve })
          ]
        },
        Ee
      );
    }
    const we = R.map(
      t,
      ({
        key: Ae,
        label: je,
        format: $e,
        endDateKey: et = null,
        dataPosition: Ze = "left",
        hidden: Ke = !1,
        stringLength: Ve = 20,
        boolLabels: Te,
        translate: ie,
        colorLabel: tt,
        textColor: xt = "#000000",
        stopDateHandler: ft = () => {
        },
        onClick: rt,
        render: Zt,
        multiple: Ue = !1
      }) => {
        if (Ke || Ue) return null;
        if (Zt && typeof Zt == "function")
          return /* @__PURE__ */ O("div", { className: ht.cardField, children: Zt(pe) }, Ae);
        const $t = qt(Ae, pe, !1), at = R.isEmpty(et) ? null : qt(et, pe), dn = wl(be, 768, Ve, 10, 10), Xn = c({
          value: $t,
          format: $e,
          endDate: at,
          stringLength: dn,
          key: Ae,
          translate: ie,
          colorLabel: tt,
          onClick: rt,
          rowData: pe,
          textColor: xt,
          boolLabels: Te,
          stopDateHandler: ft
        });
        return /* @__PURE__ */ ae("div", { className: ht.cardField, children: [
          /* @__PURE__ */ ae("div", { className: ht.cardLabel, children: [
            je,
            ":"
          ] }),
          /* @__PURE__ */ O("div", { className: ht.cardValue, style: { textAlign: Ze, color: xt }, children: Xn })
        ] }, Ae);
      }
    ), ke = Ce(pe, t);
    return /* @__PURE__ */ ae(
      "div",
      {
        className: ht.card,
        style: ee,
        role: "button",
        tabIndex: 0,
        onClick: () => {
          u(pe);
        },
        onDoubleClick: () => {
          s("Watch", pe);
        },
        onKeyPress: (Ae) => {
          (Ae.key === "Enter" || Ae.key === " ") && u(pe);
        },
        children: [
          ke,
          we
        ]
      },
      Ee
    );
  }, W = I ? ne : e, $ = Jp(() => {
    if (R.isEmpty(W))
      return [];
    const pe = [];
    return R.map(W, (Ee, de) => {
      if (R.isEmpty(n)) {
        const q = (Ee == null ? void 0 : Ee.id) !== void 0 ? Ee.id : de;
        pe.push({
          type: "card",
          key: `card-${q}`,
          data: Ee
        });
      } else {
        const q = qt(n.headerTitle, Ee, !1), ee = qt(n.dataDetail, Ee, !1);
        pe.push({
          type: "header",
          key: `header-${de}`,
          title: q
        }), R.map(ee, (we, ke) => {
          const Ae = (we == null ? void 0 : we.id) !== void 0 ? we.id : `${de}-${ke}`;
          pe.push({
            type: "card",
            key: `card-${Ae}`,
            data: we
          });
        });
      }
    }), pe;
  }, [W, n])(), D = Jp(async () => {
    if (!I || !S || le.current || B || te.current)
      return;
    const pe = re + 1, Ee = R.isEmpty(n) ? ne.length : R.sumBy(ne, (de) => {
      const q = qt(n.dataDetail, de, !1);
      return (q == null ? void 0 : q.length) || 0;
    });
    if (P && Ee >= P) {
      te.current = !0;
      return;
    }
    le.current = !0, H(!0), X.current = !0;
    try {
      await I({ ...S, page: pe }, !1, !1), he(pe);
    } catch (de) {
      console.error("Error loading more data:", de), X.current = !1;
    } finally {
      H(!1), le.current = !1;
    }
  }, [I, S, re, ne, n, P, B]), G = I ? D : k, K = I ? B : F, se = R.isEmpty(n) ? W.length : R.sumBy(W, (pe) => {
    const Ee = qt(n.dataDetail, pe, !1);
    return (Ee == null ? void 0 : Ee.length) || 0;
  }), Ie = te.current ? !1 : E ?? (P ? se < P : !0);
  return Vt(() => {
    he(1), le.current = !1;
  }, [S]), Vt(() => {
    if (!w || !G || !A.current)
      return;
    let pe = null, Ee = null;
    const de = () => {
      let ee = T.current;
      for (; ee && ee !== document.body; ) {
        const we = ee.className || "", ke = window.getComputedStyle(ee);
        if (we.includes("modalContent") || we.includes("scrolling") || ke.overflowY === "auto" || ke.overflowY === "scroll")
          return ee;
        ee = ee.parentElement;
      }
      return null;
    };
    return Ee = setTimeout(() => {
      const ee = de(), we = A.current;
      !we || Ie === !1 || $.length === 0 || "IntersectionObserver" in window && (pe = new IntersectionObserver(
        (ke) => {
          const [Ae] = ke;
          Ae.isIntersecting && Ie !== !1 && !K && !le.current && $.length > 0 && !ge && G();
        },
        {
          root: ee,
          rootMargin: "200px",
          threshold: 0
        }
      ), pe.observe(we));
    }, 300), () => {
      Ee && clearTimeout(Ee), pe && A.current && pe.unobserve(A.current);
    };
  }, [w, G, Ie, K, $.length, ge]), ge && R.isEmpty($) ? /* @__PURE__ */ O("div", { className: ht.cardsContainer, ref: T, children: /* @__PURE__ */ O("div", { className: ht.emptyState, children: /* @__PURE__ */ ae(
    "div",
    {
      style: {
        textAlign: "center",
        padding: "40px 20px",
        color: "#666",
        fontSize: "1.1rem"
      },
      children: [
        /* @__PURE__ */ O(We, { loading: !0, name: "spinner", size: "big" }),
        /* @__PURE__ */ O("div", { style: { marginTop: "15px" }, children: "Cargando..." })
      ]
    }
  ) }) }) : R.isEmpty($) ? /* @__PURE__ */ O("div", { className: ht.cardsContainer, ref: T, children: /* @__PURE__ */ O("div", { className: ht.emptyState, children: /* @__PURE__ */ ae(Vn, { as: "h3", color: "grey", children: [
    /* @__PURE__ */ O("div", { className: ht.emptyIcon, children: /* @__PURE__ */ ae(We.Group, { size: "large", children: [
      /* @__PURE__ */ O(We, { name: "list alternate outline" }),
      /* @__PURE__ */ O(We, { corner: !0, name: "close", color: "red" })
    ] }) }),
    "No se ha encontrado ningun dato"
  ] }) }) }) : /* @__PURE__ */ ae("div", { className: ht.cardsContainer, ref: T, children: [
    R.map($, (pe) => pe.type === "header" ? /* @__PURE__ */ O("div", { className: ht.cardHeader, children: pe.title }, pe.key) : De(pe.data, pe.key)),
    w && Ie !== !1 && /* @__PURE__ */ O("div", { ref: A, style: { height: "1px", width: "100%" } }),
    K && !ge && /* @__PURE__ */ ae(
      "div",
      {
        style: {
          textAlign: "center",
          padding: "20px",
          color: "#666",
          fontSize: "1rem"
        },
        children: [
          /* @__PURE__ */ O(We, { loading: !0, name: "spinner" }),
          "Cargando más resultados..."
        ]
      }
    )
  ] });
};
Tx.propTypes = {
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
function OU(e, t, n) {
  return (t = TU(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function A0(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Re(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? A0(Object(n), !0).forEach(function(r) {
      OU(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : A0(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function SU(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function TU(e) {
  var t = SU(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
const R0 = () => {
};
let eg = {}, Px = {}, kx = null, Nx = {
  mark: R0,
  measure: R0
};
try {
  typeof window < "u" && (eg = window), typeof document < "u" && (Px = document), typeof MutationObserver < "u" && (kx = MutationObserver), typeof performance < "u" && (Nx = performance);
} catch {
}
const {
  userAgent: M0 = ""
} = eg.navigator || {}, qo = eg, an = Px, D0 = kx, Tu = Nx;
qo.document;
const uo = !!an.documentElement && !!an.head && typeof an.addEventListener == "function" && typeof an.createElement == "function", Ix = ~M0.indexOf("MSIE") || ~M0.indexOf("Trident/");
var PU = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, kU = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, Ax = {
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
}, NU = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Rx = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], Bn = "classic", Yd = "duotone", IU = "sharp", AU = "sharp-duotone", Mx = [Bn, Yd, IU, AU], RU = {
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
}, MU = {
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
}, DU = /* @__PURE__ */ new Map([["classic", {
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
}]]), LU = {
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
}, FU = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], L0 = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, $U = ["kit"], BU = {
  kit: {
    "fa-kit": "fak"
  }
}, jU = ["fak", "fakd"], WU = {
  kit: {
    fak: "fa-kit"
  }
}, F0 = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
}, Pu = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, zU = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], UU = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], HU = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, YU = {
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
}, qU = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
}, Ah = {
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
}, VU = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], Rh = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...zU, ...VU], GU = ["solid", "regular", "light", "thin", "duotone", "brands"], Dx = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], KU = Dx.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), ZU = [...Object.keys(qU), ...GU, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Pu.GROUP, Pu.SWAP_OPACITY, Pu.PRIMARY, Pu.SECONDARY].concat(Dx.map((e) => "".concat(e, "x"))).concat(KU.map((e) => "w-".concat(e))), XU = {
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
const to = "___FONT_AWESOME___", Mh = 16, Lx = "fa", Fx = "svg-inline--fa", Di = "data-fa-i2svg", Dh = "data-fa-pseudo-element", QU = "data-fa-pseudo-element-pending", tg = "data-prefix", ng = "data-icon", $0 = "fontawesome-i2svg", JU = "async", e8 = ["HTML", "HEAD", "STYLE", "SCRIPT"], $x = (() => {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})();
function Pc(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[Bn];
    }
  });
}
const Bx = Re({}, Ax);
Bx[Bn] = Re(Re(Re(Re({}, {
  "fa-duotone": "duotone"
}), Ax[Bn]), L0.kit), L0["kit-duotone"]);
const t8 = Pc(Bx), Lh = Re({}, LU);
Lh[Bn] = Re(Re(Re(Re({}, {
  duotone: "fad"
}), Lh[Bn]), F0.kit), F0["kit-duotone"]);
const B0 = Pc(Lh), Fh = Re({}, Ah);
Fh[Bn] = Re(Re({}, Fh[Bn]), WU.kit);
const rg = Pc(Fh), $h = Re({}, YU);
$h[Bn] = Re(Re({}, $h[Bn]), BU.kit);
Pc($h);
const n8 = PU, jx = "fa-layers-text", r8 = kU, a8 = Re({}, RU);
Pc(a8);
const o8 = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], $p = NU, i8 = [...$U, ...ZU], Dl = qo.FontAwesomeConfig || {};
function s8(e) {
  var t = an.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function l8(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
an && typeof an.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [n, r] = t;
  const o = l8(s8(n));
  o != null && (Dl[r] = o);
});
const Wx = {
  styleDefault: "solid",
  familyDefault: Bn,
  cssPrefix: Lx,
  replacementClass: Fx,
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
Dl.familyPrefix && (Dl.cssPrefix = Dl.familyPrefix);
const Fs = Re(Re({}, Wx), Dl);
Fs.autoReplaceSvg || (Fs.observeMutations = !1);
const Je = {};
Object.keys(Wx).forEach((e) => {
  Object.defineProperty(Je, e, {
    enumerable: !0,
    set: function(t) {
      Fs[e] = t, Ll.forEach((n) => n(Je));
    },
    get: function() {
      return Fs[e];
    }
  });
});
Object.defineProperty(Je, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    Fs.cssPrefix = e, Ll.forEach((t) => t(Je));
  },
  get: function() {
    return Fs.cssPrefix;
  }
});
qo.FontAwesomeConfig = Je;
const Ll = [];
function c8(e) {
  return Ll.push(e), () => {
    Ll.splice(Ll.indexOf(e), 1);
  };
}
const Oo = Mh, wa = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function u8(e) {
  if (!e || !uo)
    return;
  const t = an.createElement("style");
  t.setAttribute("type", "text/css"), t.innerHTML = e;
  const n = an.head.childNodes;
  let r = null;
  for (let o = n.length - 1; o > -1; o--) {
    const s = n[o], u = (s.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(u) > -1 && (r = s);
  }
  return an.head.insertBefore(t, r), e;
}
const d8 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function dc() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += d8[Math.random() * 62 | 0];
  return t;
}
function Zs(e) {
  const t = [];
  for (let n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function ag(e) {
  return e.classList ? Zs(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function zx(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function f8(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(zx(e[n]), '" '), "").trim();
}
function qd(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function og(e) {
  return e.size !== wa.size || e.x !== wa.x || e.y !== wa.y || e.rotate !== wa.rotate || e.flipX || e.flipY;
}
function p8(e) {
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
function h8(e) {
  let {
    transform: t,
    width: n = Mh,
    height: r = Mh,
    startCentered: o = !1
  } = e, s = "";
  return o && Ix ? s += "translate(".concat(t.x / Oo - n / 2, "em, ").concat(t.y / Oo - r / 2, "em) ") : o ? s += "translate(calc(-50% + ".concat(t.x / Oo, "em), calc(-50% + ").concat(t.y / Oo, "em)) ") : s += "translate(".concat(t.x / Oo, "em, ").concat(t.y / Oo, "em) "), s += "scale(".concat(t.size / Oo * (t.flipX ? -1 : 1), ", ").concat(t.size / Oo * (t.flipY ? -1 : 1), ") "), s += "rotate(".concat(t.rotate, "deg) "), s;
}
var m8 = `:root, :host {
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
function Ux() {
  const e = Lx, t = Fx, n = Je.cssPrefix, r = Je.replacementClass;
  let o = m8;
  if (n !== e || r !== t) {
    const s = new RegExp("\\.".concat(e, "\\-"), "g"), u = new RegExp("\\--".concat(e, "\\-"), "g"), c = new RegExp("\\.".concat(t), "g");
    o = o.replace(s, ".".concat(n, "-")).replace(u, "--".concat(n, "-")).replace(c, ".".concat(r));
  }
  return o;
}
let j0 = !1;
function Bp() {
  Je.autoAddCss && !j0 && (u8(Ux()), j0 = !0);
}
var g8 = {
  mixout() {
    return {
      dom: {
        css: Ux,
        insertCss: Bp
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        Bp();
      },
      beforeI2svg() {
        Bp();
      }
    };
  }
};
const no = qo || {};
no[to] || (no[to] = {});
no[to].styles || (no[to].styles = {});
no[to].hooks || (no[to].hooks = {});
no[to].shims || (no[to].shims = []);
var xa = no[to];
const Hx = [], Yx = function() {
  an.removeEventListener("DOMContentLoaded", Yx), sd = 1, Hx.map((e) => e());
};
let sd = !1;
uo && (sd = (an.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(an.readyState), sd || an.addEventListener("DOMContentLoaded", Yx));
function v8(e) {
  uo && (sd ? setTimeout(e, 0) : Hx.push(e));
}
function kc(e) {
  const {
    tag: t,
    attributes: n = {},
    children: r = []
  } = e;
  return typeof e == "string" ? zx(e) : "<".concat(t, " ").concat(f8(n), ">").concat(r.map(kc).join(""), "</").concat(t, ">");
}
function W0(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var jp = function(t, n, r, o) {
  var s = Object.keys(t), u = s.length, c = n, d, p, h;
  for (r === void 0 ? (d = 1, h = t[s[0]]) : (d = 0, h = r); d < u; d++)
    p = s[d], h = c(h, t[p], p, t);
  return h;
};
function y8(e) {
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
function Bh(e) {
  const t = y8(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function b8(e, t) {
  const n = e.length;
  let r = e.charCodeAt(t), o;
  return r >= 55296 && r <= 56319 && n > t + 1 && (o = e.charCodeAt(t + 1), o >= 56320 && o <= 57343) ? (r - 55296) * 1024 + o - 56320 + 65536 : r;
}
function z0(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return !!r.icon ? t[r.iconName] = r.icon : t[n] = r, t;
  }, {});
}
function jh(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: r = !1
  } = n, o = z0(t);
  typeof xa.hooks.addPack == "function" && !r ? xa.hooks.addPack(e, z0(t)) : xa.styles[e] = Re(Re({}, xa.styles[e] || {}), o), e === "fas" && jh("fa", t);
}
const {
  styles: fc,
  shims: _8
} = xa, qx = Object.keys(rg), w8 = qx.reduce((e, t) => (e[t] = Object.keys(rg[t]), e), {});
let ig = null, Vx = {}, Gx = {}, Kx = {}, Zx = {}, Xx = {};
function x8(e) {
  return ~i8.indexOf(e);
}
function E8(e, t) {
  const n = t.split("-"), r = n[0], o = n.slice(1).join("-");
  return r === e && o !== "" && !x8(o) ? o : null;
}
const Qx = () => {
  const e = (r) => jp(fc, (o, s, u) => (o[u] = jp(s, r, {}), o), {});
  Vx = e((r, o, s) => (o[3] && (r[o[3]] = s), o[2] && o[2].filter((c) => typeof c == "number").forEach((c) => {
    r[c.toString(16)] = s;
  }), r)), Gx = e((r, o, s) => (r[s] = s, o[2] && o[2].filter((c) => typeof c == "string").forEach((c) => {
    r[c] = s;
  }), r)), Xx = e((r, o, s) => {
    const u = o[2];
    return r[s] = s, u.forEach((c) => {
      r[c] = s;
    }), r;
  });
  const t = "far" in fc || Je.autoFetchSvg, n = jp(_8, (r, o) => {
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
  Kx = n.names, Zx = n.unicodes, ig = Vd(Je.styleDefault, {
    family: Je.familyDefault
  });
};
c8((e) => {
  ig = Vd(e.styleDefault, {
    family: Je.familyDefault
  });
});
Qx();
function sg(e, t) {
  return (Vx[e] || {})[t];
}
function C8(e, t) {
  return (Gx[e] || {})[t];
}
function _i(e, t) {
  return (Xx[e] || {})[t];
}
function Jx(e) {
  return Kx[e] || {
    prefix: null,
    iconName: null
  };
}
function O8(e) {
  const t = Zx[e], n = sg("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function Vo() {
  return ig;
}
const eE = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function S8(e) {
  let t = Bn;
  const n = qx.reduce((r, o) => (r[o] = "".concat(Je.cssPrefix, "-").concat(o), r), {});
  return Mx.forEach((r) => {
    (e.includes(n[r]) || e.some((o) => w8[r].includes(o))) && (t = r);
  }), t;
}
function Vd(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = Bn
  } = t, r = t8[n][e];
  if (n === Yd && !e)
    return "fad";
  const o = B0[n][e] || B0[n][r], s = e in xa.styles ? e : null;
  return o || s || null;
}
function T8(e) {
  let t = [], n = null;
  return e.forEach((r) => {
    const o = E8(Je.cssPrefix, r);
    o ? n = o : r && t.push(r);
  }), {
    iconName: n,
    rest: t
  };
}
function U0(e) {
  return e.sort().filter((t, n, r) => r.indexOf(t) === n);
}
function Gd(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = t;
  let r = null;
  const o = Rh.concat(UU), s = U0(e.filter((m) => o.includes(m))), u = U0(e.filter((m) => !Rh.includes(m))), c = s.filter((m) => (r = m, !Rx.includes(m))), [d = null] = c, p = S8(s), h = Re(Re({}, T8(u)), {}, {
    prefix: Vd(d, {
      family: p
    })
  });
  return Re(Re(Re({}, h), I8({
    values: e,
    family: p,
    styles: fc,
    config: Je,
    canonical: h,
    givenPrefix: r
  })), P8(n, r, h));
}
function P8(e, t, n) {
  let {
    prefix: r,
    iconName: o
  } = n;
  if (e || !r || !o)
    return {
      prefix: r,
      iconName: o
    };
  const s = t === "fa" ? Jx(o) : {}, u = _i(r, o);
  return o = s.iconName || u || o, r = s.prefix || r, r === "far" && !fc.far && fc.fas && !Je.autoFetchSvg && (r = "fas"), {
    prefix: r,
    iconName: o
  };
}
const k8 = Mx.filter((e) => e !== Bn || e !== Yd), N8 = Object.keys(Ah).filter((e) => e !== Bn).map((e) => Object.keys(Ah[e])).flat();
function I8(e) {
  const {
    values: t,
    family: n,
    canonical: r,
    givenPrefix: o = "",
    styles: s = {},
    config: u = {}
  } = e, c = n === Yd, d = t.includes("fa-duotone") || t.includes("fad"), p = u.familyDefault === "duotone", h = r.prefix === "fad" || r.prefix === "fa-duotone";
  if (!c && (d || p || h) && (r.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (r.prefix = "fab"), !r.prefix && k8.includes(n) && (Object.keys(s).find((g) => N8.includes(g)) || u.autoFetchSvg)) {
    const g = DU.get(n).defaultShortPrefixId;
    r.prefix = g, r.iconName = _i(r.prefix, r.iconName) || r.iconName;
  }
  return (r.prefix === "fa" || o === "fa") && (r.prefix = Vo() || "fas"), r;
}
class A8 {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    const o = n.reduce(this._pullDefinitions, {});
    Object.keys(o).forEach((s) => {
      this.definitions[s] = Re(Re({}, this.definitions[s] || {}), o[s]), jh(s, o[s]);
      const u = rg[Bn][s];
      u && jh(u, o[s]), Qx();
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
let H0 = [], ds = {};
const ys = {}, R8 = Object.keys(ys);
function M8(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return H0 = e, ds = {}, Object.keys(ys).forEach((r) => {
    R8.indexOf(r) === -1 && delete ys[r];
  }), H0.forEach((r) => {
    const o = r.mixout ? r.mixout() : {};
    if (Object.keys(o).forEach((s) => {
      typeof o[s] == "function" && (n[s] = o[s]), typeof o[s] == "object" && Object.keys(o[s]).forEach((u) => {
        n[s] || (n[s] = {}), n[s][u] = o[s][u];
      });
    }), r.hooks) {
      const s = r.hooks();
      Object.keys(s).forEach((u) => {
        ds[u] || (ds[u] = []), ds[u].push(s[u]);
      });
    }
    r.provides && r.provides(ys);
  }), n;
}
function Wh(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
    r[o - 2] = arguments[o];
  return (ds[e] || []).forEach((u) => {
    t = u.apply(null, [t, ...r]);
  }), t;
}
function Li(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  (ds[e] || []).forEach((s) => {
    s.apply(null, n);
  });
}
function Go() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return ys[e] ? ys[e].apply(null, t) : void 0;
}
function zh(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || Vo();
  if (t)
    return t = _i(n, t) || t, W0(tE.definitions, n, t) || W0(xa.styles, n, t);
}
const tE = new A8(), D8 = () => {
  Je.autoReplaceSvg = !1, Je.observeMutations = !1, Li("noAuto");
}, L8 = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return uo ? (Li("beforeI2svg", e), Go("pseudoElements2svg", e), Go("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    Je.autoReplaceSvg === !1 && (Je.autoReplaceSvg = !0), Je.observeMutations = !0, v8(() => {
      $8({
        autoReplaceSvgRoot: t
      }), Li("watch", e);
    });
  }
}, F8 = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: _i(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = Vd(e[0]);
      return {
        prefix: n,
        iconName: _i(n, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(Je.cssPrefix, "-")) > -1 || e.match(n8))) {
      const t = Gd(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || Vo(),
        iconName: _i(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = Vo();
      return {
        prefix: t,
        iconName: _i(t, e) || e
      };
    }
  }
}, Or = {
  noAuto: D8,
  config: Je,
  dom: L8,
  parse: F8,
  library: tE,
  findIconDefinition: zh,
  toHtml: kc
}, $8 = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = an
  } = e;
  (Object.keys(xa.styles).length > 0 || Je.autoFetchSvg) && uo && Je.autoReplaceSvg && Or.dom.i2svg({
    node: t
  });
};
function Kd(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((n) => kc(n));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!uo) return;
      const n = an.createElement("div");
      return n.innerHTML = e.html, n.children;
    }
  }), e;
}
function B8(e) {
  let {
    children: t,
    main: n,
    mask: r,
    attributes: o,
    styles: s,
    transform: u
  } = e;
  if (og(u) && n.found && !r.found) {
    const {
      width: c,
      height: d
    } = n, p = {
      x: c / d / 2,
      y: 0.5
    };
    o.style = qd(Re(Re({}, s), {}, {
      "transform-origin": "".concat(p.x + u.x / 16, "em ").concat(p.y + u.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: o,
    children: t
  }];
}
function j8(e) {
  let {
    prefix: t,
    iconName: n,
    children: r,
    attributes: o,
    symbol: s
  } = e;
  const u = s === !0 ? "".concat(t, "-").concat(Je.cssPrefix, "-").concat(n) : s;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: Re(Re({}, o), {}, {
        id: u
      }),
      children: r
    }]
  }];
}
function lg(e) {
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
    width: g,
    height: y
  } = n.found ? n : t, b = jU.includes(r), _ = [Je.replacementClass, o ? "".concat(Je.cssPrefix, "-").concat(o) : ""].filter((S) => h.classes.indexOf(S) === -1).filter((S) => S !== "" || !!S).concat(h.classes).join(" ");
  let w = {
    children: [],
    attributes: Re(Re({}, h.attributes), {}, {
      "data-prefix": r,
      "data-icon": o,
      class: _,
      role: h.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(g, " ").concat(y)
    })
  };
  const k = b && !~h.classes.indexOf("fa-fw") ? {
    width: "".concat(g / y * 16 * 0.0625, "em")
  } : {};
  m && (w.attributes[Di] = ""), c && (w.children.push({
    tag: "title",
    attributes: {
      id: w.attributes["aria-labelledby"] || "title-".concat(p || dc())
    },
    children: [c]
  }), delete w.attributes.title);
  const F = Re(Re({}, w), {}, {
    prefix: r,
    iconName: o,
    main: t,
    mask: n,
    maskId: d,
    transform: s,
    symbol: u,
    styles: Re(Re({}, k), h.styles)
  }), {
    children: E,
    attributes: I
  } = n.found && t.found ? Go("generateAbstractMask", F) || {
    children: [],
    attributes: {}
  } : Go("generateAbstractIcon", F) || {
    children: [],
    attributes: {}
  };
  return F.children = E, F.attributes = I, u ? j8(F) : B8(F);
}
function Y0(e) {
  const {
    content: t,
    width: n,
    height: r,
    transform: o,
    title: s,
    extra: u,
    watchable: c = !1
  } = e, d = Re(Re(Re({}, u.attributes), s ? {
    title: s
  } : {}), {}, {
    class: u.classes.join(" ")
  });
  c && (d[Di] = "");
  const p = Re({}, u.styles);
  og(o) && (p.transform = h8({
    transform: o,
    startCentered: !0,
    width: n,
    height: r
  }), p["-webkit-transform"] = p.transform);
  const h = qd(p);
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
function W8(e) {
  const {
    content: t,
    title: n,
    extra: r
  } = e, o = Re(Re(Re({}, r.attributes), n ? {
    title: n
  } : {}), {}, {
    class: r.classes.join(" ")
  }), s = qd(r.styles);
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
  styles: Wp
} = xa;
function Uh(e) {
  const t = e[0], n = e[1], [r] = e.slice(4);
  let o = null;
  return Array.isArray(r) ? o = {
    tag: "g",
    attributes: {
      class: "".concat(Je.cssPrefix, "-").concat($p.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(Je.cssPrefix, "-").concat($p.SECONDARY),
        fill: "currentColor",
        d: r[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(Je.cssPrefix, "-").concat($p.PRIMARY),
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
const z8 = {
  found: !1,
  width: 512,
  height: 512
};
function U8(e, t) {
  !$x && !Je.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function Hh(e, t) {
  let n = t;
  return t === "fa" && Je.styleDefault !== null && (t = Vo()), new Promise((r, o) => {
    if (n === "fa") {
      const s = Jx(e) || {};
      e = s.iconName || e, t = s.prefix || t;
    }
    if (e && t && Wp[t] && Wp[t][e]) {
      const s = Wp[t][e];
      return r(Uh(s));
    }
    U8(e, t), r(Re(Re({}, z8), {}, {
      icon: Je.showMissingIcons && e ? Go("missingIconAbstract") || {} : {}
    }));
  });
}
const q0 = () => {
}, Yh = Je.measurePerformance && Tu && Tu.mark && Tu.measure ? Tu : {
  mark: q0,
  measure: q0
}, Pl = 'FA "6.7.2"', H8 = (e) => (Yh.mark("".concat(Pl, " ").concat(e, " begins")), () => nE(e)), nE = (e) => {
  Yh.mark("".concat(Pl, " ").concat(e, " ends")), Yh.measure("".concat(Pl, " ").concat(e), "".concat(Pl, " ").concat(e, " begins"), "".concat(Pl, " ").concat(e, " ends"));
};
var cg = {
  begin: H8,
  end: nE
};
const Wu = () => {
};
function V0(e) {
  return typeof (e.getAttribute ? e.getAttribute(Di) : null) == "string";
}
function Y8(e) {
  const t = e.getAttribute ? e.getAttribute(tg) : null, n = e.getAttribute ? e.getAttribute(ng) : null;
  return t && n;
}
function q8(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(Je.replacementClass);
}
function V8() {
  return Je.autoReplaceSvg === !0 ? zu.replace : zu[Je.autoReplaceSvg] || zu.replace;
}
function G8(e) {
  return an.createElementNS("http://www.w3.org/2000/svg", e);
}
function K8(e) {
  return an.createElement(e);
}
function rE(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? G8 : K8
  } = t;
  if (typeof e == "string")
    return an.createTextNode(e);
  const r = n(e.tag);
  return Object.keys(e.attributes || []).forEach(function(s) {
    r.setAttribute(s, e.attributes[s]);
  }), (e.children || []).forEach(function(s) {
    r.appendChild(rE(s, {
      ceFn: n
    }));
  }), r;
}
function Z8(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const zu = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((n) => {
        t.parentNode.insertBefore(rE(n), t);
      }), t.getAttribute(Di) === null && Je.keepOriginalSource) {
        let n = an.createComment(Z8(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], n = e[1];
    if (~ag(t).indexOf(Je.replacementClass))
      return zu.replace(e);
    const r = new RegExp("".concat(Je.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const s = n[0].attributes.class.split(" ").reduce((u, c) => (c === Je.replacementClass || c.match(r) ? u.toSvg.push(c) : u.toNode.push(c), u), {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = s.toSvg.join(" "), s.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", s.toNode.join(" "));
    }
    const o = n.map((s) => kc(s)).join(`
`);
    t.setAttribute(Di, ""), t.innerHTML = o;
  }
};
function G0(e) {
  e();
}
function aE(e, t) {
  const n = typeof t == "function" ? t : Wu;
  if (e.length === 0)
    n();
  else {
    let r = G0;
    Je.mutateApproach === JU && (r = qo.requestAnimationFrame || G0), r(() => {
      const o = V8(), s = cg.begin("mutate");
      e.map(o), s(), n();
    });
  }
}
let ug = !1;
function oE() {
  ug = !0;
}
function qh() {
  ug = !1;
}
let ld = null;
function K0(e) {
  if (!D0 || !Je.observeMutations)
    return;
  const {
    treeCallback: t = Wu,
    nodeCallback: n = Wu,
    pseudoElementsCallback: r = Wu,
    observeMutationsRoot: o = an
  } = e;
  ld = new D0((s) => {
    if (ug) return;
    const u = Vo();
    Zs(s).forEach((c) => {
      if (c.type === "childList" && c.addedNodes.length > 0 && !V0(c.addedNodes[0]) && (Je.searchPseudoElements && r(c.target), t(c.target)), c.type === "attributes" && c.target.parentNode && Je.searchPseudoElements && r(c.target.parentNode), c.type === "attributes" && V0(c.target) && ~o8.indexOf(c.attributeName))
        if (c.attributeName === "class" && Y8(c.target)) {
          const {
            prefix: d,
            iconName: p
          } = Gd(ag(c.target));
          c.target.setAttribute(tg, d || u), p && c.target.setAttribute(ng, p);
        } else q8(c.target) && n(c.target);
    });
  }), uo && ld.observe(o, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function X8() {
  ld && ld.disconnect();
}
function Q8(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce((r, o) => {
    const s = o.split(":"), u = s[0], c = s.slice(1);
    return u && c.length > 0 && (r[u] = c.join(":").trim()), r;
  }, {})), n;
}
function J8(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "";
  let o = Gd(ag(e));
  return o.prefix || (o.prefix = Vo()), t && n && (o.prefix = t, o.iconName = n), o.iconName && o.prefix || (o.prefix && r.length > 0 && (o.iconName = C8(o.prefix, e.innerText) || sg(o.prefix, Bh(e.innerText))), !o.iconName && Je.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (o.iconName = e.firstChild.data)), o;
}
function e7(e) {
  const t = Zs(e.attributes).reduce((o, s) => (o.name !== "class" && o.name !== "style" && (o[s.name] = s.value), o), {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return Je.autoA11y && (n ? t["aria-labelledby"] = "".concat(Je.replacementClass, "-title-").concat(r || dc()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function t7() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: wa,
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
function Z0(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: n,
    prefix: r,
    rest: o
  } = J8(e), s = e7(e), u = Wh("parseNodeAttributes", {}, e);
  let c = t.styleParser ? Q8(e) : [];
  return Re({
    iconName: n,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: r,
    transform: wa,
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
  styles: n7
} = xa;
function iE(e) {
  const t = Je.autoReplaceSvg === "nest" ? Z0(e, {
    styleParser: !1
  }) : Z0(e);
  return ~t.extra.classes.indexOf(jx) ? Go("generateLayersText", e, t) : Go("generateSvgReplacementMutation", e, t);
}
function r7() {
  return [...FU, ...Rh];
}
function X0(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!uo) return Promise.resolve();
  const n = an.documentElement.classList, r = (h) => n.add("".concat($0, "-").concat(h)), o = (h) => n.remove("".concat($0, "-").concat(h)), s = Je.autoFetchSvg ? r7() : Rx.concat(Object.keys(n7));
  s.includes("fa") || s.push("fa");
  const u = [".".concat(jx, ":not([").concat(Di, "])")].concat(s.map((h) => ".".concat(h, ":not([").concat(Di, "])"))).join(", ");
  if (u.length === 0)
    return Promise.resolve();
  let c = [];
  try {
    c = Zs(e.querySelectorAll(u));
  } catch {
  }
  if (c.length > 0)
    r("pending"), o("complete");
  else
    return Promise.resolve();
  const d = cg.begin("onTree"), p = c.reduce((h, m) => {
    try {
      const g = iE(m);
      g && h.push(g);
    } catch (g) {
      $x || g.name === "MissingIcon" && console.error(g);
    }
    return h;
  }, []);
  return new Promise((h, m) => {
    Promise.all(p).then((g) => {
      aE(g, () => {
        r("active"), r("complete"), o("pending"), typeof t == "function" && t(), d(), h();
      });
    }).catch((g) => {
      d(), m(g);
    });
  });
}
function a7(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  iE(e).then((n) => {
    n && aE([n], t);
  });
}
function o7(e) {
  return function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = (t || {}).icon ? t : zh(t || {});
    let {
      mask: o
    } = n;
    return o && (o = (o || {}).icon ? o : zh(o || {})), e(r, Re(Re({}, n), {}, {
      mask: o
    }));
  };
}
const i7 = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = wa,
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
    iconName: g,
    icon: y
  } = e;
  return Kd(Re({
    type: "icon"
  }, e), () => (Li("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), Je.autoA11y && (u ? p["aria-labelledby"] = "".concat(Je.replacementClass, "-title-").concat(c || dc()) : (p["aria-hidden"] = "true", p.focusable = "false")), lg({
    icons: {
      main: Uh(y),
      mask: o ? Uh(o.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: m,
    iconName: g,
    transform: Re(Re({}, wa), n),
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
var s7 = {
  mixout() {
    return {
      icon: o7(i7)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = X0, e.nodeCallback = a7, e;
      }
    };
  },
  provides(e) {
    e.i2svg = function(t) {
      const {
        node: n = an,
        callback: r = () => {
        }
      } = t;
      return X0(n, r);
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
      return new Promise((g, y) => {
        Promise.all([Hh(r, u), p.iconName ? Hh(p.iconName, p.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((b) => {
          let [_, w] = b;
          g([t, lg({
            icons: {
              main: _,
              mask: w
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
      const c = qd(u);
      c.length > 0 && (r.style = c);
      let d;
      return og(s) && (d = Go("generateAbstractTransformGrouping", {
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
}, l7 = {
  mixout() {
    return {
      layer(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: n = []
        } = t;
        return Kd({
          type: "layer"
        }, () => {
          Li("beforeDOMElementCreation", {
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
              class: ["".concat(Je.cssPrefix, "-layers"), ...n].join(" ")
            },
            children: r
          }];
        });
      }
    };
  }
}, c7 = {
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
        return Kd({
          type: "counter",
          content: e
        }, () => (Li("beforeDOMElementCreation", {
          content: e,
          params: t
        }), W8({
          content: e.toString(),
          title: n,
          extra: {
            attributes: o,
            styles: s,
            classes: ["".concat(Je.cssPrefix, "-layers-counter"), ...r]
          }
        })));
      }
    };
  }
}, u7 = {
  mixout() {
    return {
      text(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: n = wa,
          title: r = null,
          classes: o = [],
          attributes: s = {},
          styles: u = {}
        } = t;
        return Kd({
          type: "text",
          content: e
        }, () => (Li("beforeDOMElementCreation", {
          content: e,
          params: t
        }), Y0({
          content: e,
          transform: Re(Re({}, wa), n),
          title: r,
          extra: {
            attributes: s,
            styles: u,
            classes: ["".concat(Je.cssPrefix, "-layers-text"), ...o]
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
      if (Ix) {
        const d = parseInt(getComputedStyle(t).fontSize, 10), p = t.getBoundingClientRect();
        u = p.width / d, c = p.height / d;
      }
      return Je.autoA11y && !r && (s.attributes["aria-hidden"] = "true"), Promise.resolve([t, Y0({
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
const d7 = new RegExp('"', "ug"), Q0 = [1105920, 1112319], J0 = Re(Re(Re(Re({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), MU), XU), HU), Vh = Object.keys(J0).reduce((e, t) => (e[t.toLowerCase()] = J0[t], e), {}), f7 = Object.keys(Vh).reduce((e, t) => {
  const n = Vh[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function p7(e) {
  const t = e.replace(d7, ""), n = b8(t, 0), r = n >= Q0[0] && n <= Q0[1], o = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: Bh(o ? t[0] : t),
    isSecondary: r || o
  };
}
function h7(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(t), o = isNaN(r) ? "normal" : r;
  return (Vh[n] || {})[o] || f7[n];
}
function e_(e, t) {
  const n = "".concat(QU).concat(t.replace(":", "-"));
  return new Promise((r, o) => {
    if (e.getAttribute(n) !== null)
      return r();
    const u = Zs(e.children).filter((g) => g.getAttribute(Dh) === t)[0], c = qo.getComputedStyle(e, t), d = c.getPropertyValue("font-family"), p = d.match(r8), h = c.getPropertyValue("font-weight"), m = c.getPropertyValue("content");
    if (u && !p)
      return e.removeChild(u), r();
    if (p && m !== "none" && m !== "") {
      const g = c.getPropertyValue("content");
      let y = h7(d, h);
      const {
        value: b,
        isSecondary: _
      } = p7(g), w = p[0].startsWith("FontAwesome");
      let k = sg(y, b), F = k;
      if (w) {
        const E = O8(b);
        E.iconName && E.prefix && (k = E.iconName, y = E.prefix);
      }
      if (k && !_ && (!u || u.getAttribute(tg) !== y || u.getAttribute(ng) !== F)) {
        e.setAttribute(n, F), u && e.removeChild(u);
        const E = t7(), {
          extra: I
        } = E;
        I.attributes[Dh] = t, Hh(k, y).then((S) => {
          const P = lg(Re(Re({}, E), {}, {
            icons: {
              main: S,
              mask: eE()
            },
            prefix: y,
            iconName: F,
            extra: I,
            watchable: !0
          })), C = an.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(C, e.firstChild) : e.appendChild(C), C.outerHTML = P.map((T) => kc(T)).join(`
`), e.removeAttribute(n), r();
        }).catch(o);
      } else
        r();
    } else
      r();
  });
}
function m7(e) {
  return Promise.all([e_(e, "::before"), e_(e, "::after")]);
}
function g7(e) {
  return e.parentNode !== document.head && !~e8.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(Dh) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function t_(e) {
  if (uo)
    return new Promise((t, n) => {
      const r = Zs(e.querySelectorAll("*")).filter(g7).map(m7), o = cg.begin("searchPseudoElements");
      oE(), Promise.all(r).then(() => {
        o(), qh(), t();
      }).catch(() => {
        o(), qh(), n();
      });
    });
}
var v7 = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = t_, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: n = an
      } = t;
      Je.searchPseudoElements && t_(n);
    };
  }
};
let n_ = !1;
var y7 = {
  mixout() {
    return {
      dom: {
        unwatch() {
          oE(), n_ = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        K0(Wh("mutationObserverCallbacks", {}));
      },
      noAuto() {
        X8();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        n_ ? qh() : K0(Wh("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const r_ = (e) => {
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
var b7 = {
  mixout() {
    return {
      parse: {
        transform: (e) => r_(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-transform");
        return n && (e.transform = r_(n)), e;
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
      }, g = {
        outer: u,
        inner: h,
        path: m
      };
      return {
        tag: "g",
        attributes: Re({}, g.outer),
        children: [{
          tag: "g",
          attributes: Re({}, g.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: Re(Re({}, n.icon.attributes), g.path)
          }]
        }]
      };
    };
  }
};
const zp = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function a_(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function _7(e) {
  return e.tag === "g" ? e.children : [e];
}
var w7 = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-mask"), r = n ? Gd(n.split(" ").map((o) => o.trim())) : eE();
        return r.prefix || (r.prefix = Vo()), e.mask = r, e.maskId = t.getAttribute("data-fa-mask-id"), e;
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
      } = s, g = p8({
        transform: c,
        containerWidth: h,
        iconWidth: d
      }), y = {
        tag: "rect",
        attributes: Re(Re({}, zp), {}, {
          fill: "white"
        })
      }, b = p.children ? {
        children: p.children.map(a_)
      } : {}, _ = {
        tag: "g",
        attributes: Re({}, g.inner),
        children: [a_(Re({
          tag: p.tag,
          attributes: Re(Re({}, p.attributes), g.path)
        }, b))]
      }, w = {
        tag: "g",
        attributes: Re({}, g.outer),
        children: [_]
      }, k = "mask-".concat(u || dc()), F = "clip-".concat(u || dc()), E = {
        tag: "mask",
        attributes: Re(Re({}, zp), {}, {
          id: k,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [y, w]
      }, I = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: F
          },
          children: _7(m)
        }, E]
      };
      return n.push(I, {
        tag: "rect",
        attributes: Re({
          fill: "currentColor",
          "clip-path": "url(#".concat(F, ")"),
          mask: "url(#".concat(k, ")")
        }, zp)
      }), {
        children: n,
        attributes: r
      };
    };
  }
}, x7 = {
  provides(e) {
    let t = !1;
    qo.matchMedia && (t = qo.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      const n = [], r = {
        fill: "currentColor"
      }, o = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      n.push({
        tag: "path",
        attributes: Re(Re({}, r), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      const s = Re(Re({}, o), {}, {
        attributeName: "opacity"
      }), u = {
        tag: "circle",
        attributes: Re(Re({}, r), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return t || u.children.push({
        tag: "animate",
        attributes: Re(Re({}, o), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: Re(Re({}, s), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), n.push(u), n.push({
        tag: "path",
        attributes: Re(Re({}, r), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: t ? [] : [{
          tag: "animate",
          attributes: Re(Re({}, s), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), t || n.push({
        tag: "path",
        attributes: Re(Re({}, r), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: Re(Re({}, s), {}, {
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
}, E7 = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), r = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = r, e;
      }
    };
  }
}, C7 = [g8, s7, l7, c7, u7, v7, y7, b7, w7, x7, E7];
M8(C7, {
  mixoutsTo: Or
});
Or.noAuto;
Or.config;
Or.library;
Or.dom;
const Gh = Or.parse;
Or.findIconDefinition;
Or.toHtml;
const O7 = Or.icon;
Or.layer;
Or.text;
Or.counter;
function Kh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function S7(e) {
  if (Array.isArray(e)) return e;
}
function T7(e) {
  if (Array.isArray(e)) return Kh(e);
}
function To(e, t, n) {
  return (t = D7(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function P7(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function k7(e, t) {
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
function N7() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function I7() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function o_(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ga(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? o_(Object(n), !0).forEach(function(r) {
      To(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o_(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function A7(e, t) {
  if (e == null) return {};
  var n, r, o = R7(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}
function R7(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function i_(e, t) {
  return S7(e) || k7(e, t) || sE(e, t) || N7();
}
function Zh(e) {
  return T7(e) || P7(e) || sE(e) || I7();
}
function M7(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function D7(e) {
  var t = M7(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function cd(e) {
  "@babel/helpers - typeof";
  return cd = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, cd(e);
}
function sE(e, t) {
  if (e) {
    if (typeof e == "string") return Kh(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Kh(e, t) : void 0;
  }
}
var L7 = "7.0.0", Xh;
try {
  var F7 = require("@fortawesome/fontawesome-svg-core/package.json");
  Xh = F7.version;
} catch {
  Xh = typeof process < "u" && process.env.FA_VERSION || "7.0.0";
}
function $7(e) {
  var t = e.beat, n = e.fade, r = e.beatFade, o = e.bounce, s = e.shake, u = e.flash, c = e.spin, d = e.spinPulse, p = e.spinReverse, h = e.pulse, m = e.fixedWidth, g = e.inverse, y = e.border, b = e.listItem, _ = e.flip, w = e.size, k = e.rotation, F = e.pull, E = e.swapOpacity, I = e.rotateBy, S = e.widthAuto, P = B7(Xh, L7), C = To(To(To(To(To(To({
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
    "fa-inverse": g,
    "fa-border": y,
    "fa-li": b,
    "fa-flip": _ === !0,
    "fa-flip-horizontal": _ === "horizontal" || _ === "both",
    "fa-flip-vertical": _ === "vertical" || _ === "both"
  }, "fa-".concat(w), typeof w < "u" && w !== null), "fa-rotate-".concat(k), typeof k < "u" && k !== null && k !== 0), "fa-pull-".concat(F), typeof F < "u" && F !== null), "fa-swap-opacity", E), "fa-rotate-by", P && I), "fa-width-auto", P && S);
  return Object.keys(C).map(function(T) {
    return C[T] ? T : null;
  }).filter(function(T) {
    return T;
  });
}
function B7(e, t) {
  for (var n = e.split("-"), r = i_(n, 2), o = r[0], s = r[1], u = t.split("-"), c = i_(u, 2), d = c[0], p = c[1], h = o.split("."), m = d.split("."), g = 0; g < Math.max(h.length, m.length); g++) {
    var y = h[g] || "0", b = m[g] || "0", _ = parseInt(y, 10), w = parseInt(b, 10);
    if (_ !== w)
      return _ > w;
  }
  for (var k = 0; k < Math.max(h.length, m.length); k++) {
    var F = h[k] || "0", E = m[k] || "0";
    if (F !== E && F.length !== E.length)
      return F.length < E.length;
  }
  return !(s && !p);
}
function j7(e) {
  return e = e - 0, e === e;
}
function lE(e) {
  return j7(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var W7 = ["style"];
function z7(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function U7(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), o = lE(n.slice(0, r)), s = n.slice(r + 1).trim();
    return o.startsWith("webkit") ? t[z7(o)] = s : t[o] = s, t;
  }, {});
}
function cE(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var r = (t.children || []).map(function(d) {
    return cE(e, d);
  }), o = Object.keys(t.attributes || {}).reduce(function(d, p) {
    var h = t.attributes[p];
    switch (p) {
      case "class":
        d.attrs.className = h, delete t.attributes.class;
        break;
      case "style":
        d.attrs.style = U7(h);
        break;
      default:
        p.indexOf("aria-") === 0 || p.indexOf("data-") === 0 ? d.attrs[p.toLowerCase()] = h : d.attrs[lE(p)] = h;
    }
    return d;
  }, {
    attrs: {}
  }), s = n.style, u = s === void 0 ? {} : s, c = A7(n, W7);
  return o.attrs.style = ga(ga({}, o.attrs.style), u), e.apply(void 0, [t.tag, ga(ga({}, o.attrs), c)].concat(Zh(r)));
}
var uE = !1;
try {
  uE = process.env.NODE_ENV === "production";
} catch {
}
function H7() {
  if (!uE && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function s_(e) {
  if (e && cd(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (Gh.icon)
    return Gh.icon(e);
  if (e === null)
    return null;
  if (e && cd(e) === "object" && e.prefix && e.iconName)
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
function Up(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? To({}, e, t) : {};
}
var l_ = {
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
}, ud = /* @__PURE__ */ J.forwardRef(function(e, t) {
  var n = ga(ga({}, l_), e), r = n.icon, o = n.mask, s = n.symbol, u = n.className, c = n.title, d = n.titleId, p = n.maskId, h = s_(r), m = Up("classes", [].concat(Zh($7(n)), Zh((u || "").split(" ")))), g = Up("transform", typeof n.transform == "string" ? Gh.transform(n.transform) : n.transform), y = Up("mask", s_(o)), b = O7(h, ga(ga(ga(ga({}, m), g), y), {}, {
    symbol: s,
    title: c,
    titleId: d,
    maskId: p
  }));
  if (!b)
    return H7("Could not find icon", h), null;
  var _ = b.abstract, w = {
    ref: t
  };
  return Object.keys(n).forEach(function(k) {
    l_.hasOwnProperty(k) || (w[k] = n[k]);
  }), Y7(_[0], w);
});
ud.displayName = "FontAwesomeIcon";
ud.propTypes = {
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
var Y7 = cE.bind(null, J.createElement);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const q7 = {
  prefix: "fas",
  iconName: "rotate-left",
  icon: [512, 512, ["rotate-back", "rotate-backward", "undo-alt"], "f2ea", "M48.5 224L40 224c-13.3 0-24-10.7-24-24L16 72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8L48.5 224z"]
}, V7 = {
  prefix: "fas",
  iconName: "rotate-right",
  icon: [512, 512, ["redo-alt", "rotate-forward"], "f2f9", "M463.5 224l8.5 0c13.3 0 24-10.7 24-24l0-128c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8l119.5 0z"]
}, dE = "carousel", dg = "controller", G7 = "navigation", K7 = "no-scroll", fg = "portal", Z7 = "root", fE = "toolbar", X7 = "download", Qh = "fullscreen", c_ = "thumbnails", u_ = "zoom", Uu = "loading", Q7 = "playing", Hp = "error", Hu = "complete", J7 = "placeholder", Zd = (e) => `active-slide-${e}`, eH = Zd(Uu), tH = Zd(Q7), nH = Zd(Hu), pE = "fullsize", Xd = "flex_center", rH = "no_scroll", hE = "no_scroll_padding", pg = "slide", hg = "slide_wrapper", aH = "slide_wrapper_interactive", gi = "prev", vi = "next", d_ = "swipe", $s = "close", mE = "onPointerDown", gE = "onPointerMove", vE = "onPointerUp", yE = "onPointerLeave", bE = "onPointerCancel", mg = "onKeyDown", oH = "onKeyUp", gg = "onWheel", iH = "Escape", sH = "ArrowLeft", lH = "ArrowRight", cH = "button", Jh = "icon", _E = "contain", f_ = "cover", wE = "Unknown action type", xE = "yarl__";
function Br(...e) {
  return e.filter(Boolean).join(" ");
}
function wt(e) {
  return `${xE}${e}`;
}
function ar(e) {
  return `--${xE}${e}`;
}
function Nc(e, t) {
  return `${e}${t ? `_${t}` : ""}`;
}
function vg(e) {
  return (t) => Nc(e, t);
}
function Bs(e, t) {
  var n;
  return (n = e == null ? void 0 : e[t]) !== null && n !== void 0 ? n : t;
}
function uH(e, t, n) {
  return Bs(e, "{index} of {total}").replace(/\{index}/g, `${wg(n, t.length) + 1}`).replace(/\{total}/g, `${t.length}`);
}
function Qd(...e) {
  return () => {
    e.forEach((t) => {
      t();
    });
  };
}
function sa(e, t, n) {
  return () => {
    const r = L.useContext(n);
    if (!r)
      throw new Error(`${e} must be used within a ${t}.Provider`);
    return r;
  };
}
function yg() {
  return typeof window < "u";
}
function bg(e, t = 0) {
  const n = 10 ** t;
  return Math.round((e + Number.EPSILON) * n) / n;
}
function Ko(e) {
  return e.type === void 0 || e.type === "image";
}
function _g(e, t) {
  return e.imageFit === f_ || e.imageFit !== _E && t === f_;
}
function Jd(e) {
  return typeof e == "string" ? Number.parseInt(e, 10) : e;
}
function dd(e) {
  if (typeof e == "number")
    return { pixel: e };
  if (typeof e == "string") {
    const t = Jd(e);
    return e.endsWith("%") ? { percent: t } : { pixel: t };
  }
  return { pixel: 0 };
}
function dH(e, t) {
  const n = dd(t), r = n.percent !== void 0 ? e.width / 100 * n.percent : n.pixel;
  return {
    width: Math.max(e.width - 2 * r, 0),
    height: Math.max(e.height - 2 * r, 0)
  };
}
function fH() {
  return (yg() ? window == null ? void 0 : window.devicePixelRatio : void 0) || 1;
}
function wg(e, t) {
  return t > 0 ? (e % t + t) % t : 0;
}
function EE(e) {
  return e.length > 0;
}
function CE(e, t) {
  return e[wg(t, e.length)];
}
function em(e, t) {
  return EE(e) ? CE(e, t) : void 0;
}
function pH(e) {
  return Ko(e) ? e.src : void 0;
}
function xg(e, t, n) {
  if (!n)
    return e;
  const { buttons: r, ...o } = e, s = r.findIndex((c) => c === t), u = L.isValidElement(n) ? L.cloneElement(n, { key: t }, null) : n;
  if (s >= 0) {
    const c = [...r];
    return c.splice(s, 1, u), { buttons: c, ...o };
  }
  return { buttons: [u, ...r], ...o };
}
function hH(e, t, n = 0) {
  return Math.min(e.preload, Math.max(e.finite ? t.length - 1 : Math.floor(t.length / 2), n));
}
const mH = Number(L.version.split(".")[0]) >= 19;
function gH(e) {
  return { inert: mH ? e : e ? "" : void 0 };
}
function OE(e) {
  e.scrollTop;
}
const tm = {
  open: !1,
  close: () => {
  },
  index: 0,
  slides: [],
  render: {},
  plugins: [],
  toolbar: { buttons: [$s] },
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
    imageFit: _E,
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
function fo(e, t) {
  return { name: e, component: t };
}
function kn(e, t) {
  return { module: e, children: t };
}
function SE(e, t, n) {
  return e.module.name === t ? n(e) : e.children ? [
    kn(e.module, e.children.flatMap((r) => {
      var o;
      return (o = SE(r, t, n)) !== null && o !== void 0 ? o : [];
    }))
  ] : [e];
}
function os(e, t, n) {
  return e.flatMap((r) => {
    var o;
    return (o = SE(r, t, n)) !== null && o !== void 0 ? o : [];
  });
}
function vH(e, t = [], n = []) {
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
      r = [kn(b, r)];
      return;
    }
    r = os(r, y, (_) => [kn(b, [_])]);
  }, u = (y, b) => {
    r = os(r, y, (_) => [kn(_.module, [kn(b, _.children)])]);
  }, c = (y, b, _) => {
    r = os(r, y, (w) => {
      var k;
      return [
        kn(w.module, [
          ..._ ? [kn(b)] : [],
          ...(k = w.children) !== null && k !== void 0 ? k : [],
          ..._ ? [] : [kn(b)]
        ])
      ];
    });
  }, d = (y, b, _) => {
    r = os(r, y, (w) => [
      ..._ ? [kn(b)] : [],
      w,
      ..._ ? [] : [kn(b)]
    ]);
  }, p = (y) => {
    u(dg, y);
  }, h = (y, b) => {
    r = os(r, y, (_) => [kn(b, _.children)]);
  }, m = (y) => {
    r = os(r, y, (b) => b.children);
  }, g = (y) => {
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
      augment: g
    });
  }), {
    config: r,
    augmentation: (y) => n.reduce((b, _) => _(b), y)
  };
}
const TE = L.createContext(null), PE = sa("useA11yContext", "A11yContext", TE);
function yH({ children: e }) {
  const [t, n] = L.useState(!1), [r, o] = L.useState(!1), s = L.useMemo(() => ({ focusWithin: t, trackFocusWithin: (c, d) => {
    const p = (h) => (m) => {
      var g;
      m.currentTarget.contains(m.relatedTarget) || n(h), (g = h ? c : d) === null || g === void 0 || g(m);
    };
    return {
      onFocus: p(!0),
      onBlur: p(!1)
    };
  }, autoPlaying: r, setAutoPlaying: o }), [t, r]);
  return L.createElement(TE.Provider, { value: s }, e);
}
const kE = L.createContext(null), Xs = sa("useDocument", "DocumentContext", kE);
function bH({ nodeRef: e, children: t }) {
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
  return L.createElement(kE.Provider, { value: n }, t);
}
const NE = L.createContext(null), Ic = sa("useEvents", "EventsContext", NE);
function _H({ children: e }) {
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
  return L.createElement(NE.Provider, { value: n }, e);
}
const IE = L.createContext(null), jn = sa("useLightboxProps", "LightboxPropsContext", IE);
function wH({ children: e, ...t }) {
  return L.createElement(IE.Provider, { value: t }, e);
}
const AE = L.createContext(null), po = sa("useLightboxState", "LightboxStateContext", AE), RE = L.createContext(null), xH = sa("useLightboxDispatch", "LightboxDispatchContext", RE);
function EH(e, t) {
  switch (t.type) {
    case "swipe": {
      const { slides: n } = e, r = (t == null ? void 0 : t.increment) || 0, o = e.globalIndex + r, s = wg(o, n.length), u = em(n, s), c = r || t.duration !== void 0 ? {
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
        currentSlide: em(t.slides, t.index)
      } : e;
    default:
      throw new Error(wE);
  }
}
function CH({ slides: e, index: t, children: n }) {
  const [r, o] = L.useReducer(EH, {
    slides: e,
    currentIndex: t,
    globalIndex: t,
    currentSlide: em(e, t)
  }), [s, u] = L.useState(e), [c, d] = L.useState(t);
  (e !== s || t !== c) && (u(e), d(t), o({ type: "update", slides: e, index: t }));
  const p = L.useMemo(() => ({ ...r, state: r, dispatch: o }), [r, o]);
  return L.createElement(
    RE.Provider,
    { value: o },
    L.createElement(AE.Provider, { value: p }, n)
  );
}
const ME = L.createContext(null), OH = sa("useRTLContext", "RTLContext", ME);
function SH({ isRTL: e, children: t }) {
  const n = L.useMemo(() => ({ isRTL: e }), [e]);
  return L.createElement(ME.Provider, { value: n }, t);
}
const DE = L.createContext(null), ef = sa("useTimeouts", "TimeoutsContext", DE);
function TH({ children: e }) {
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
  return L.createElement(DE.Provider, { value: n }, e);
}
const Ac = L.forwardRef(function({ label: t, className: n, icon: r, renderIcon: o, onClick: s, style: u, ...c }, d) {
  const { styles: p, labels: h } = jn(), m = Bs(h, t);
  return L.createElement("button", { ref: d, type: "button", title: m, "aria-label": m, className: Br(wt(cH), n), onClick: s, style: { ...u, ...p.button }, ...c }, o ? o() : L.createElement(r, { className: wt(Jh), style: p.icon }));
});
function PH(e, t) {
  const n = (r) => L.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", "aria-hidden": "true", focusable: "false", ...r }, t);
  return n.displayName = e, n;
}
function Aa(e, t) {
  return PH(e, L.createElement(
    "g",
    { fill: "currentColor" },
    L.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
    t
  ));
}
const kH = Aa("Close", L.createElement("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })), NH = Aa("Previous", L.createElement("path", { d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" })), IH = Aa("Next", L.createElement("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" })), AH = Aa("Loading", L.createElement(L.Fragment, null, Array.from({ length: 8 }).map((e, t, n) => L.createElement("line", { key: t, x1: "12", y1: "6.5", x2: "12", y2: "1.8", strokeLinecap: "round", strokeWidth: "2.6", stroke: "currentColor", strokeOpacity: 1 / n.length * (t + 1), transform: `rotate(${360 / n.length * t}, 12, 12)` })))), RH = Aa("Error", L.createElement("path", { d: "M21.9,21.9l-8.49-8.49l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31L21.9,21.9z M5,18 l3.5-4.5l2.5,3.01L12.17,15l3,3H5z M21,18.17L5.83,3H19c1.1,0,2,0.9,2,2V18.17z" })), aa = yg() ? L.useLayoutEffect : L.useEffect;
function Eg() {
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
function MH(e) {
  let t = 0, n = 0, r = 0;
  const s = window.getComputedStyle(e).transform.match(/matrix.*\((.+)\)/);
  if (s) {
    const u = s[1].split(",").map(Jd);
    u.length === 6 ? (t = u[4], n = u[5]) : u.length === 16 && (t = u[12], n = u[13], r = u[14]);
  }
  return { x: t, y: n, z: r };
}
function p_(e, t) {
  const n = L.useRef(void 0), r = L.useRef(void 0), o = Eg();
  return aa(() => {
    var s, u, c;
    if (e.current && n.current !== void 0 && !o) {
      const { keyframes: d, duration: p, easing: h, onfinish: m } = t(n.current, e.current.getBoundingClientRect(), MH(e.current)) || {};
      if (d && p) {
        (s = r.current) === null || s === void 0 || s.cancel(), r.current = void 0;
        try {
          r.current = (c = (u = e.current).animate) === null || c === void 0 ? void 0 : c.call(u, d, { duration: p, easing: h });
        } catch (g) {
          console.error(g);
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
function Cg() {
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
function Yu() {
  const e = L.useRef(void 0), { setTimeout: t, clearTimeout: n } = ef();
  return L.useCallback((r, o) => {
    n(e.current), e.current = t(r, o > 0 ? o : 0);
  }, [t, n]);
}
function At(e) {
  const t = L.useRef(e);
  return aa(() => {
    t.current = e;
  }), L.useCallback((...n) => {
    var r;
    return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
  }, []);
}
function h_(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function nm(e, t) {
  return L.useMemo(() => e == null && t == null ? null : (n) => {
    h_(e, n), h_(t, n);
  }, [e, t]);
}
function DH(e, t = !1) {
  const n = L.useRef(!1);
  aa(() => {
    t && n.current && (n.current = !1, e());
  }, [t, e]);
  const r = L.useCallback(() => {
    n.current = !0;
  }, []), o = L.useCallback(() => {
    n.current = !1;
  }, []);
  return { onFocus: r, onBlur: o };
}
function Og() {
  return OH().isRTL;
}
function LH() {
  const [e] = L.useState({}), t = L.useCallback((o, s) => {
    var u;
    (u = e[o]) === null || u === void 0 || u.forEach((c) => {
      s.isPropagationStopped() || c(s);
    });
  }, [e]), n = L.useMemo(() => ({
    onPointerDown: (o) => t(mE, o),
    onPointerMove: (o) => t(gE, o),
    onPointerUp: (o) => t(vE, o),
    onPointerLeave: (o) => t(yE, o),
    onPointerCancel: (o) => t(bE, o),
    onKeyDown: (o) => t(mg, o),
    onKeyUp: (o) => t(oH, o),
    onWheel: (o) => t(gg, o)
  }), [t]), r = L.useCallback((o, s) => (e[o] || (e[o] = []), e[o].unshift(s), () => {
    const u = e[o];
    u && u.splice(0, u.length, ...u.filter((c) => c !== s));
  }), [e]);
  return { registerSensors: n, subscribeSensors: r };
}
function m_(e, t) {
  const n = L.useRef(0), r = Yu(), o = At((...s) => {
    n.current = Date.now(), e(...s);
  });
  return L.useCallback((...s) => {
    r(() => {
      o(...s);
    }, t - (Date.now() - n.current));
  }, [t, o, r]);
}
const Yp = vg("slide"), qp = vg("slide_image");
function fd({ slide: e, offset: t, render: n, rect: r, imageFit: o, imageProps: s, onClick: u, onLoad: c, onError: d, style: p }) {
  var h, m, g, y, b, _, w, k;
  const [F, E] = L.useState(Uu), { publish: I } = Ic(), { setTimeout: S } = ef(), P = L.useRef(null);
  L.useEffect(() => {
    t === 0 && I(Zd(F));
  }, [t, F, I]);
  const C = At((oe) => {
    ("decode" in oe ? oe.decode() : Promise.resolve()).catch(() => {
    }).then(() => {
      oe.parentNode && (E(Hu), S(() => {
        c == null || c(oe);
      }, 0));
    });
  }), T = L.useCallback((oe) => {
    P.current = oe, oe != null && oe.complete && C(oe);
  }, [C]), A = L.useCallback((oe) => {
    C(oe.currentTarget);
  }, [C]), B = At(() => {
    E(Hp), d == null || d();
  }), H = _g(e, o), ne = (oe, be) => Number.isFinite(oe) ? oe : be, U = ne(Math.max(...((m = (h = e.srcSet) === null || h === void 0 ? void 0 : h.map((oe) => oe.width)) !== null && m !== void 0 ? m : []).concat(e.width ? [e.width] : []).filter(Boolean)), ((g = P.current) === null || g === void 0 ? void 0 : g.naturalWidth) || 0), re = ne(Math.max(...((b = (y = e.srcSet) === null || y === void 0 ? void 0 : y.map((oe) => oe.height)) !== null && b !== void 0 ? b : []).concat(e.height ? [e.height] : []).filter(Boolean)), ((_ = P.current) === null || _ === void 0 ? void 0 : _.naturalHeight) || 0), he = U && re ? {
    maxWidth: `min(${U}px, 100%)`,
    maxHeight: `min(${re}px, 100%)`
  } : {
    maxWidth: "100%",
    maxHeight: "100%"
  }, ge = (w = e.srcSet) === null || w === void 0 ? void 0 : w.slice().sort((oe, be) => oe.width - be.width).map((oe) => `${oe.src} ${oe.width}w`).join(", "), Ne = () => r && !H && e.width && e.height ? r.height / e.height * e.width : Number.MAX_VALUE, le = ge && r && yg() ? `${Math.round(Math.min(Ne(), r.width))}px` : void 0, { style: me, className: X, ...te } = (typeof s == "function" ? s(e) : s) || {};
  return L.createElement(
    L.Fragment,
    null,
    L.createElement("img", { ref: T, onLoad: A, onError: B, onClick: u, draggable: !1, className: Br(wt(qp()), H && wt(qp("cover")), F !== Hu && wt(qp("loading")), X), style: { ...he, ...p, ...me }, ...te, alt: (k = e.alt) !== null && k !== void 0 ? k : "", sizes: le, srcSet: ge, src: e.src }),
    F !== Hu && L.createElement(
      "div",
      { className: wt(Yp(J7)) },
      F === Uu && (n != null && n.iconLoading ? n.iconLoading() : L.createElement(AH, { className: Br(wt(Jh), wt(Yp(Uu))) })),
      F === Hp && (n != null && n.iconError ? n.iconError() : L.createElement(RH, { className: Br(wt(Jh), wt(Yp(Hp))) }))
    )
  );
}
const FH = L.forwardRef(function({ className: t, children: n, onFocus: r, onBlur: o, ...s }, u) {
  const c = L.useRef(null), [d, p] = L.useState(!1), { trackFocusWithin: h } = PE(), m = At(() => {
    if (c.current) {
      const g = window.getComputedStyle(c.current).direction === "rtl";
      g !== d && p(g);
    }
  });
  return L.useEffect(m), L.createElement(
    bH,
    { nodeRef: c },
    L.createElement(
      SH,
      { isRTL: d },
      L.createElement("div", { ref: nm(u, c), className: Br(wt("root"), t), ...h(r, o), ...s }, n)
    )
  );
});
var Fn;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.SWIPE = 1] = "SWIPE", e[e.PULL = 2] = "PULL", e[e.ANIMATION = 3] = "ANIMATION";
})(Fn || (Fn = {}));
function LE(e, t, n, r, o) {
  L.useEffect(() => o ? () => {
  } : Qd(e(mE, t), e(gE, n), e(vE, r), e(yE, r), e(bE, r)), [e, t, n, r, o]);
}
var Qr;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.SWIPE = 1] = "SWIPE", e[e.PULL = 2] = "PULL";
})(Qr || (Qr = {}));
const Vp = 30;
function $H({ disableSwipeNavigation: e, closeOnBackdropClick: t }, n, r, o, s, u, c, d, p, h, m, g, y, b, _, w) {
  const k = L.useRef(0), F = L.useRef([]), E = L.useRef(void 0), I = L.useRef(0), S = L.useRef(Qr.NONE), P = L.useCallback((U) => {
    E.current === U.pointerId && (E.current = void 0, S.current = Qr.NONE);
    const re = F.current;
    re.splice(0, re.length, ...re.filter((he) => he.pointerId !== U.pointerId));
  }, []), C = L.useCallback((U) => {
    P(U), U.persist(), F.current.push(U);
  }, [P]), T = L.useCallback((U) => F.current.find(({ pointerId: re }) => U.pointerId === re), []), A = At((U) => {
    C(U);
  }), B = (U, re) => m && U > re || h && U < -re, H = At((U) => {
    const re = T(U);
    if (re)
      if (E.current === U.pointerId) {
        const he = Date.now() - I.current, ge = k.current;
        S.current === Qr.SWIPE ? Math.abs(ge) > 0.3 * o || Math.abs(ge) > 5 && he < s ? d(ge, he) : p(ge) : S.current === Qr.PULL && (B(ge, 2 * Vp) ? b(ge, he) : _(ge)), k.current = 0, S.current = Qr.NONE;
      } else {
        const { target: he } = U;
        t && he instanceof HTMLElement && he === re.target && (he.classList.contains(wt(pg)) || he.classList.contains(wt(hg))) && w();
      }
    P(U);
  }), ne = At((U) => {
    const re = T(U);
    if (re) {
      const he = E.current === U.pointerId;
      if (U.buttons === 0) {
        he && k.current !== 0 ? H(U) : P(re);
        return;
      }
      const ge = U.clientX - re.clientX, Ne = U.clientY - re.clientY;
      if (E.current === void 0) {
        const le = (me) => {
          C(U), E.current = U.pointerId, I.current = Date.now(), S.current = me;
        };
        Math.abs(ge) > Math.abs(Ne) && Math.abs(ge) > Vp && r(ge) ? e || (le(Qr.SWIPE), u()) : Math.abs(Ne) > Math.abs(ge) && B(Ne, Vp) && (le(Qr.PULL), g());
      } else he && (S.current === Qr.SWIPE ? (k.current = ge, c(ge)) : S.current === Qr.PULL && (k.current = Ne, y(Ne)));
    }
  });
  LE(n, A, ne, H);
}
function BH({ preventDefaultWheelX: e, preventDefaultWheelY: t }) {
  const n = L.useRef(null), r = At((o) => {
    const s = Math.abs(o.deltaX) > Math.abs(o.deltaY);
    (s && e || !s && t || o.ctrlKey) && o.preventDefault();
  });
  return L.useCallback((o) => {
    var s;
    o ? o.addEventListener("wheel", r, { passive: !1 }) : (s = n.current) === null || s === void 0 || s.removeEventListener("wheel", r), n.current = o;
  }, [r]);
}
function jH(e, t, n, r, o, s, u, c, d) {
  const p = L.useRef(0), h = L.useRef(0), m = L.useRef(void 0), g = L.useRef(void 0), y = L.useRef(0), b = L.useRef(void 0), _ = L.useRef(0), { setTimeout: w, clearTimeout: k } = ef(), F = L.useCallback(() => {
    m.current && (k(m.current), m.current = void 0);
  }, [k]), E = L.useCallback(() => {
    g.current && (k(g.current), g.current = void 0);
  }, [k]), I = At(() => {
    e !== Fn.SWIPE && (p.current = 0, _.current = 0, F(), E());
  });
  L.useEffect(I, [e, I]);
  const S = At((C) => {
    g.current = void 0, p.current === C && d(p.current);
  }), P = At((C) => {
    if (C.ctrlKey || Math.abs(C.deltaY) > Math.abs(C.deltaX))
      return;
    const T = (A) => {
      y.current = A, k(b.current), b.current = A > 0 ? w(() => {
        y.current = 0, b.current = void 0;
      }, 300) : void 0;
    };
    if (e === Fn.NONE) {
      if (Math.abs(C.deltaX) <= 1.2 * Math.abs(y.current)) {
        T(C.deltaX);
        return;
      }
      if (!n(-C.deltaX))
        return;
      if (h.current += C.deltaX, F(), Math.abs(h.current) > 30)
        h.current = 0, T(0), _.current = Date.now(), s();
      else {
        const A = h.current;
        m.current = w(() => {
          m.current = void 0, A === h.current && (h.current = 0);
        }, o);
      }
    } else if (e === Fn.SWIPE) {
      let A = p.current - C.deltaX;
      if (A = Math.min(Math.abs(A), r) * Math.sign(A), p.current = A, u(A), E(), Math.abs(A) > 0.2 * r) {
        T(C.deltaX), c(A, Date.now() - _.current);
        return;
      }
      g.current = w(() => S(A), 2 * o);
    } else
      T(C.deltaX);
  });
  L.useEffect(() => t(gg, P), [t, P]);
}
const g_ = vg("container"), FE = L.createContext(null), ho = sa("useController", "ControllerContext", FE);
function WH({ children: e, ...t }) {
  var n;
  const { carousel: r, animation: o, controller: s, on: u, styles: c, render: d } = t, { closeOnPullUp: p, closeOnPullDown: h, preventDefaultWheelX: m, preventDefaultWheelY: g } = s, [y, b] = L.useState(), _ = po(), w = xH(), [k, F] = L.useState(Fn.NONE), E = L.useRef(0), I = L.useRef(0), S = L.useRef(1), { registerSensors: P, subscribeSensors: C } = LH(), { subscribe: T, publish: A } = Ic(), B = Yu(), H = Yu(), ne = Yu(), { containerRef: U, setContainerRef: re, containerRect: he } = Cg(), ge = nm(BH({ preventDefaultWheelX: m, preventDefaultWheelY: g }), re), Ne = L.useRef(null), le = nm(Ne, void 0), { getOwnerDocument: me } = Xs(), X = Og(), te = (ee) => (X ? -1 : 1) * (typeof ee == "number" ? ee : 1), oe = At(() => {
    var ee;
    return (ee = U.current) === null || ee === void 0 ? void 0 : ee.focus();
  }), be = At(() => t), Se = At(() => _), ye = L.useCallback((ee) => A(gi, ee), [A]), fe = L.useCallback((ee) => A(vi, ee), [A]), Ce = L.useCallback(() => A($s), [A]), De = (ee) => !(r.finite && (te(ee) > 0 && _.currentIndex === 0 || te(ee) < 0 && _.currentIndex === _.slides.length - 1)), W = (ee) => {
    var we;
    E.current = ee, (we = U.current) === null || we === void 0 || we.style.setProperty(ar("swipe_offset"), `${Math.round(ee)}px`);
  }, z = (ee) => {
    var we, ke;
    I.current = ee, S.current = (() => {
      const $e = h && ee > 0 ? ee : p && ee < 0 ? -ee : 0;
      return Math.min(Math.max(bg(1 - $e / 60 * (1 - 0.5), 2), 0.5), 1);
    })(), (we = U.current) === null || we === void 0 || we.style.setProperty(ar("pull_offset"), `${Math.round(ee)}px`), (ke = U.current) === null || ke === void 0 || ke.style.setProperty(ar("pull_opacity"), `${S.current}`);
  }, { prepareAnimation: $ } = p_(Ne, (ee, we, ke) => {
    if (Ne.current && he)
      return {
        keyframes: [
          {
            transform: `translate(0, ${ee.rect.y - we.y + ke.y}px)`,
            opacity: ee.opacity
          },
          { transform: "translate(0, 0)", opacity: 1 }
        ],
        duration: ee.duration,
        easing: o.easing.fade
      };
  }), D = (ee, we) => {
    if (p || h) {
      z(ee);
      let ke = 0;
      Ne.current && (ke = o.fade * (we ? 2 : 1), $({
        rect: Ne.current.getBoundingClientRect(),
        opacity: S.current,
        duration: ke
      })), ne(() => {
        z(0), F(Fn.NONE);
      }, ke), F(Fn.ANIMATION), we || Ce();
    }
  }, { prepareAnimation: G, isAnimationPlaying: K } = p_(Ne, (ee, we, ke) => {
    var Ae;
    if (Ne.current && he && (!((Ae = _.animation) === null || Ae === void 0) && Ae.duration)) {
      const je = dd(r.spacing), $e = (je.percent ? je.percent * he.width / 100 : je.pixel) || 0;
      return {
        keyframes: [
          {
            transform: `translate(${te(_.globalIndex - ee.index) * (he.width + $e) + ee.rect.x - we.x + ke.x}px, 0)`
          },
          { transform: "translate(0, 0)" }
        ],
        duration: _.animation.duration,
        easing: _.animation.easing
      };
    }
  }), se = At((ee) => {
    var we, ke;
    const Ae = ee.offset || 0, je = Ae ? o.swipe : (we = o.navigation) !== null && we !== void 0 ? we : o.swipe, $e = !Ae && !K() ? o.easing.navigation : o.easing.swipe;
    let { direction: et } = ee;
    const Ze = (ke = ee.count) !== null && ke !== void 0 ? ke : 1;
    let Ke = Fn.ANIMATION, Ve = je * Ze;
    if (!et) {
      const ie = he == null ? void 0 : he.width, tt = ee.duration || 0, xt = ie ? je / ie * Math.abs(Ae) : je;
      Ze !== 0 ? (tt < xt ? Ve = Ve / xt * Math.max(tt, xt / 5) : ie && (Ve = je / ie * (ie - Math.abs(Ae))), et = te(Ae) > 0 ? gi : vi) : Ve = je / 2;
    }
    let Te = 0;
    et === gi ? De(te(1)) ? Te = -Ze : (Ke = Fn.NONE, Ve = je) : et === vi && (De(te(-1)) ? Te = Ze : (Ke = Fn.NONE, Ve = je)), Ve = Math.round(Ve), H(() => {
      W(0), F(Fn.NONE);
    }, Ve), Ne.current && G({
      rect: Ne.current.getBoundingClientRect(),
      index: _.globalIndex
    }), F(Ke), A(d_, {
      type: "swipe",
      increment: Te,
      duration: Ve,
      easing: $e
    });
  });
  L.useEffect(() => {
    var ee, we;
    !((ee = _.animation) === null || ee === void 0) && ee.increment && (!((we = _.animation) === null || we === void 0) && we.duration) && B(() => w({ type: "swipe", increment: 0 }), _.animation.duration);
  }, [_.animation, w, B]);
  const Ie = [
    C,
    De,
    (he == null ? void 0 : he.width) || 0,
    o.swipe,
    () => F(Fn.SWIPE),
    (ee) => W(ee),
    (ee, we) => se({ offset: ee, duration: we, count: 1 }),
    (ee) => se({ offset: ee, count: 0 })
  ], pe = [
    () => {
      h && F(Fn.PULL);
    },
    (ee) => z(ee),
    (ee) => D(ee),
    (ee) => D(ee, !0)
  ];
  $H(s, ...Ie, p, h, ...pe, Ce), jH(k, ...Ie);
  const Ee = At(() => {
    s.focus && me().querySelector(`.${wt(fg)} .${wt(g_())}`) && oe();
  });
  L.useEffect(Ee, [Ee]);
  const de = At(() => {
    var ee;
    (ee = u.view) === null || ee === void 0 || ee.call(u, { index: _.currentIndex });
  });
  L.useEffect(de, [_.globalIndex, de]), L.useEffect(() => Qd(T(gi, (ee) => se({ direction: gi, ...ee })), T(vi, (ee) => se({ direction: vi, ...ee })), T(d_, (ee) => w(ee))), [T, se, w]);
  const q = L.useMemo(() => ({
    prev: ye,
    next: fe,
    close: Ce,
    focus: oe,
    slideRect: he ? dH(he, r.padding) : { width: 0, height: 0 },
    containerRect: he || { width: 0, height: 0 },
    subscribeSensors: C,
    containerRef: U,
    setCarouselRef: le,
    toolbarWidth: y,
    setToolbarWidth: b
  }), [
    ye,
    fe,
    Ce,
    oe,
    C,
    he,
    U,
    le,
    y,
    b,
    r.padding
  ]);
  return L.useImperativeHandle(s.ref, () => ({
    prev: ye,
    next: fe,
    close: Ce,
    focus: oe,
    getLightboxProps: be,
    getLightboxState: Se
  }), [ye, fe, Ce, oe, be, Se]), L.createElement("div", { ref: ge, className: Br(wt(g_()), wt(Xd)), style: {
    ...k === Fn.SWIPE ? { [ar("swipe_offset")]: `${Math.round(E.current)}px` } : null,
    ...k === Fn.PULL ? {
      [ar("pull_offset")]: `${Math.round(I.current)}px`,
      [ar("pull_opacity")]: `${S.current}`
    } : null,
    ...s.touchAction !== "none" ? { [ar("controller_touch_action")]: s.touchAction } : null,
    ...c.container
  }, tabIndex: -1, ...P }, he && L.createElement(
    FE.Provider,
    { value: q },
    e,
    (n = d.controls) === null || n === void 0 ? void 0 : n.call(d)
  ));
}
const zH = fo(dg, WH);
function pi(e) {
  return Nc(dE, e);
}
function v_(e) {
  return Nc(pg, e);
}
function UH({ slide: e, offset: t }) {
  const n = L.useRef(null), { currentIndex: r, slides: o } = po(), { slideRect: s, focus: u } = ho(), { render: c, carousel: { imageFit: d, imageProps: p }, on: { click: h }, styles: { slide: m }, labels: g } = jn(), { getOwnerDocument: y } = Xs(), b = t !== 0;
  L.useEffect(() => {
    var w;
    b && (!((w = n.current) === null || w === void 0) && w.contains(y().activeElement)) && u();
  }, [b, u, y]);
  const _ = () => {
    var w, k, F, E;
    let I = (w = c.slide) === null || w === void 0 ? void 0 : w.call(c, { slide: e, offset: t, rect: s });
    return !I && Ko(e) && (I = L.createElement(fd, { slide: e, offset: t, render: c, rect: s, imageFit: d, imageProps: p, onClick: b ? void 0 : () => h == null ? void 0 : h({ index: r }) })), I ? L.createElement(
      L.Fragment,
      null,
      (k = c.slideHeader) === null || k === void 0 ? void 0 : k.call(c, { slide: e }),
      ((F = c.slideContainer) !== null && F !== void 0 ? F : ({ children: S }) => S)({ slide: e, children: I }),
      (E = c.slideFooter) === null || E === void 0 ? void 0 : E.call(c, { slide: e })
    ) : null;
  };
  return L.createElement("div", { ref: n, className: Br(wt(v_()), !b && wt(v_("current")), wt(Xd)), ...gH(b), style: m, role: "group", "aria-roledescription": Bs(g, "Slide"), "aria-label": uH(g, o, r + t) }, _());
}
function HH() {
  const e = jn().styles.slide;
  return L.createElement("div", { className: wt(pg), style: e });
}
function YH({ carousel: e, labels: t }) {
  const { slides: n, currentIndex: r, globalIndex: o } = po(), { setCarouselRef: s } = ho(), { autoPlaying: u, focusWithin: c } = PE(), d = dd(e.spacing), p = dd(e.padding), h = hH(e, n, 1), m = [];
  if (EE(n))
    for (let g = r - h; g <= r + h; g += 1) {
      const y = CE(n, g), b = o - r + g, _ = e.finite && (g < 0 || g > n.length - 1);
      m.push(_ ? { key: b } : {
        key: [`${b}`, pH(y)].filter(Boolean).join("|"),
        offset: g - r,
        slide: y
      });
    }
  return L.createElement("div", { ref: s, className: Br(wt(pi()), m.length > 0 && wt(pi("with_slides"))), style: {
    [`${ar(pi("slides_count"))}`]: m.length,
    [`${ar(pi("spacing_px"))}`]: d.pixel || 0,
    [`${ar(pi("spacing_percent"))}`]: d.percent || 0,
    [`${ar(pi("padding_px"))}`]: p.pixel || 0,
    [`${ar(pi("padding_percent"))}`]: p.percent || 0
  }, role: "region", "aria-live": u && !c ? "off" : "polite", "aria-roledescription": Bs(t, "Carousel"), "aria-label": Bs(t, "Photo gallery") }, m.map(({ key: g, slide: y, offset: b }) => y ? L.createElement(UH, { key: g, slide: y, offset: b }) : L.createElement(HH, { key: g })));
}
const qH = fo(dE, YH);
function $E() {
  const { carousel: e } = jn(), { slides: t, currentIndex: n } = po(), r = t.length === 0 || e.finite && n === 0, o = t.length === 0 || e.finite && n === t.length - 1;
  return { prevDisabled: r, nextDisabled: o };
}
function VH(e) {
  var t;
  const n = Og(), { publish: r } = Ic(), { animation: o, controller: s } = jn(), { prevDisabled: u, nextDisabled: c } = $E(), d = ((t = o.navigation) !== null && t !== void 0 ? t : o.swipe) / 2, p = m_(() => r(gi), d), h = m_(() => r(vi), d), m = At((g) => {
    switch (g.key) {
      case iH:
        if (!s.closeOnEscape)
          return;
        r($s);
        break;
      case sH:
        (n ? c : u) || (n ? h : p)();
        break;
      case lH:
        (n ? u : c) || (n ? p : h)();
        break;
      default:
        return;
    }
    g.stopPropagation();
  });
  L.useEffect(() => e(mg, m), [e, m]);
}
function y_({ label: e, icon: t, renderIcon: n, action: r, onClick: o, disabled: s, style: u }) {
  return L.createElement(Ac, { label: e, icon: t, renderIcon: n, className: wt(`navigation_${r}`), disabled: s, onClick: o, style: u, ...DH(ho().focus, s) });
}
function GH({ render: { buttonPrev: e, buttonNext: t, iconPrev: n, iconNext: r }, styles: o }) {
  const { prev: s, next: u, subscribeSensors: c } = ho(), { prevDisabled: d, nextDisabled: p } = $E();
  return VH(c), L.createElement(
    L.Fragment,
    null,
    e ? e() : L.createElement(y_, { label: "Previous", action: gi, icon: NH, renderIcon: n, style: o.navigationPrev, disabled: d, onClick: s }),
    t ? t() : L.createElement(y_, { label: "Next", action: vi, icon: IH, renderIcon: r, style: o.navigationNext, disabled: p, onClick: u })
  );
}
const KH = fo(G7, GH), b_ = wt(rH), ZH = wt(hE);
function XH(e) {
  return "style" in e;
}
function __(e, t, n) {
  const r = window.getComputedStyle(e), o = n ? "padding-left" : "padding-right", s = n ? r.paddingLeft : r.paddingRight, u = e.style.getPropertyValue(o);
  return e.style.setProperty(o, `${(Jd(s) || 0) + t}px`), () => {
    u ? e.style.setProperty(o, u) : e.style.removeProperty(o);
  };
}
function QH({ noScroll: { disabled: e }, children: t }) {
  const n = Og(), { getOwnerDocument: r, getOwnerWindow: o } = Xs();
  return L.useEffect(() => {
    if (e)
      return () => {
      };
    const s = [], u = o(), { body: c, documentElement: d } = r(), p = Math.round(u.innerWidth - d.clientWidth);
    if (p > 0) {
      s.push(__(c, p, n));
      const h = c.getElementsByTagName("*");
      for (let m = 0; m < h.length; m += 1) {
        const g = h[m];
        XH(g) && u.getComputedStyle(g).getPropertyValue("position") === "fixed" && !g.classList.contains(ZH) && s.push(__(g, p, n));
      }
    }
    return c.classList.add(b_), () => {
      c.classList.remove(b_), s.forEach((h) => h());
    };
  }, [n, e, r, o]), L.createElement(L.Fragment, null, t);
}
const JH = fo(K7, QH);
function w_(e) {
  return Nc(fg, e);
}
function x_(e, t, n) {
  const r = e.getAttribute(t);
  return e.setAttribute(t, n), () => {
    r ? e.setAttribute(t, r) : e.removeAttribute(t);
  };
}
function eY({ portal: { root: e, container: { className: t, style: n, ...r } = {} }, animation: o, styles: s, className: u, on: c, close: d, labels: p, children: h }) {
  const [m, g] = L.useState(!1), [y, b] = L.useState(!1), _ = L.useRef([]), w = L.useRef(null), { setTimeout: k } = ef(), { subscribe: F } = Ic(), I = Eg() ? 0 : o.fade;
  L.useEffect(() => (g(!0), () => {
    g(!1), b(!1);
  }), []);
  const S = At(() => {
    _.current.forEach((A) => A()), _.current = [];
  }), P = At(() => {
    var A;
    b(!1), S(), (A = c.exiting) === null || A === void 0 || A.call(c), k(() => {
      var B;
      (B = c.exited) === null || B === void 0 || B.call(c), d();
    }, I);
  });
  L.useEffect(() => F($s, P), [F, P]);
  const C = At((A) => {
    var B, H, ne;
    OE(A), b(!0), (B = c.entering) === null || B === void 0 || B.call(c);
    const U = (ne = (H = A.parentNode) === null || H === void 0 ? void 0 : H.children) !== null && ne !== void 0 ? ne : [];
    for (let re = 0; re < U.length; re += 1) {
      const he = U[re];
      ["TEMPLATE", "SCRIPT", "STYLE"].indexOf(he.tagName) === -1 && he !== A && (_.current.push(x_(he, "inert", "")), _.current.push(x_(he, "aria-hidden", "true")));
    }
    _.current.push(() => {
      var re, he;
      (he = (re = w.current) === null || re === void 0 ? void 0 : re.focus) === null || he === void 0 || he.call(re);
    }), k(() => {
      var re;
      (re = c.entered) === null || re === void 0 || re.call(c);
    }, I);
  }), T = L.useCallback((A) => {
    A ? C(A) : S();
  }, [C, S]);
  return m ? G_(L.createElement(FH, { ref: T, className: Br(u, t, wt(w_()), wt(hE), y && wt(w_("open"))), "aria-modal": !0, role: "dialog", "aria-label": Bs(p, "Lightbox"), style: {
    ...o.fade !== tm.animation.fade ? { [ar("fade_animation_duration")]: `${I}ms` } : null,
    ...o.easing.fade !== tm.animation.easing.fade ? { [ar("fade_animation_timing_function")]: o.easing.fade } : null,
    ...s.root,
    ...n
  }, onFocus: (A) => {
    w.current || (w.current = A.relatedTarget);
  }, ...r }, h), (typeof e == "function" ? e() : e) || document.body) : null;
}
const tY = fo(fg, eY);
function nY({ children: e }) {
  return L.createElement(L.Fragment, null, e);
}
const rY = fo(Z7, nY);
function aY(e) {
  return Nc(fE, e);
}
function oY({ toolbar: { buttons: e }, render: { buttonClose: t, iconClose: n }, styles: r }) {
  const { close: o, setToolbarWidth: s } = ho(), { setContainerRef: u, containerRect: c } = Cg();
  aa(() => {
    s(c == null ? void 0 : c.width);
  }, [s, c == null ? void 0 : c.width]);
  const d = () => t ? t() : L.createElement(Ac, { key: $s, label: "Close", icon: kH, renderIcon: n, onClick: o });
  return L.createElement("div", { ref: u, style: r.toolbar, className: wt(aY()) }, e == null ? void 0 : e.map((p) => p === $s ? d() : p));
}
const iY = fo(fE, oY);
function BE(e, t) {
  var n;
  return L.createElement(e.module.component, { key: e.module.name, ...t }, (n = e.children) === null || n === void 0 ? void 0 : n.map((r) => BE(r, t)));
}
function sY(e, t = {}) {
  const { easing: n, ...r } = e, { easing: o, ...s } = t;
  return {
    easing: { ...n, ...o },
    ...r,
    ...s
  };
}
function jE({ carousel: e, animation: t, render: n, toolbar: r, controller: o, noScroll: s, on: u, plugins: c, slides: d, index: p, ...h }) {
  const { animation: m, carousel: g, render: y, toolbar: b, controller: _, noScroll: w, on: k, slides: F, index: E, plugins: I, ...S } = tm, { config: P, augmentation: C } = vH([
    kn(tY, [
      kn(JH, [
        kn(zH, [
          kn(qH),
          kn(iY),
          kn(KH)
        ])
      ])
    ])
  ], c || I), T = C({
    animation: sY(m, t),
    carousel: { ...g, ...e },
    render: { ...y, ...n },
    toolbar: { ...b, ...r },
    controller: { ..._, ...o },
    noScroll: { ...w, ...s },
    on: { ...k, ...u },
    ...S,
    ...h
  });
  return T.open ? L.createElement(
    wH,
    { ...T },
    L.createElement(
      CH,
      { slides: d || F, index: Jd(p || E) },
      L.createElement(
        TH,
        null,
        L.createElement(
          _H,
          null,
          L.createElement(yH, null, BE(kn(rY, P), T))
        )
      )
    )
  ) : null;
}
const lY = {
  download: void 0
}, WE = (e) => ({
  ...lY,
  ...e
});
function cY(e) {
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
function uY(e) {
  var t, n;
  return (n = (t = /^content-disposition:(.*)$/im.exec(e.getAllResponseHeaders())) === null || t === void 0 ? void 0 : t[1]) !== null && n !== void 0 ? n : null;
}
function dY(e, t) {
  const n = new XMLHttpRequest();
  n.open("GET", e), n.responseType = "blob", n.onload = () => {
    rm(n.response, t || cY(uY(n)));
  }, n.onerror = () => {
    console.error("Failed to download file");
  }, n.send();
}
function fY(e) {
  const t = new XMLHttpRequest();
  t.open("HEAD", e, !1);
  try {
    t.send();
  } catch {
  }
  return t.status >= 200 && t.status <= 299;
}
function Gp(e) {
  try {
    e.dispatchEvent(new MouseEvent("click"));
  } catch {
    const n = document.createEvent("MouseEvents");
    n.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), e.dispatchEvent(n);
  }
}
function rm(e, t) {
  const n = document.createElement("a");
  n.rel = "noopener", n.download = t || "", n.download || (n.target = "_blank"), typeof e == "string" ? (n.href = e, n.origin !== window.location.origin ? fY(n.href) ? dY(e, t) : (n.target = "_blank", Gp(n)) : Gp(n)) : (n.href = URL.createObjectURL(e), setTimeout(() => URL.revokeObjectURL(n.href), 3e4), setTimeout(() => Gp(n), 0));
}
const pY = Aa("DownloadIcon", L.createElement("path", { d: "M18 15v3H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2zm-1-4-1.41-1.41L13 12.17V4h-2v8.17L8.41 9.59 7 11l5 5 5-5z" }));
function hY() {
  const { render: e, on: t, download: n } = jn(), { download: r } = WE(n), { currentSlide: o, currentIndex: s } = po();
  if (e.buttonDownload)
    return L.createElement(L.Fragment, null, e.buttonDownload());
  const u = o && (o.downloadUrl || typeof o.download == "string" && o.download || typeof o.download == "object" && o.download.url || Ko(o) && o.src) || void 0, c = r ? (o == null ? void 0 : o.download) !== !1 : !!u, d = () => {
    if (o && u) {
      const h = o.downloadFilename || typeof o.download == "object" && o.download.filename || void 0;
      rm(u, h);
    }
  }, p = () => {
    var h;
    o && ((r || d)({ slide: o, saveAs: rm }), (h = t.download) === null || h === void 0 || h.call(t, { index: s }));
  };
  return L.createElement(Ac, { label: "Download", icon: pY, renderIcon: e.iconDownload, disabled: !c, onClick: p });
}
function am({ augment: e }) {
  e(({ toolbar: t, download: n, ...r }) => ({
    toolbar: xg(t, X7, L.createElement(hY, null)),
    download: WE(n),
    ...r
  }));
}
const mY = {
  auto: !1,
  ref: null
}, zE = (e) => ({
  ...mY,
  ...e
}), UE = L.createContext(null), gY = sa("useFullscreen", "FullscreenContext", UE);
function vY({ fullscreen: e, on: t, children: n }) {
  const { auto: r, ref: o } = zE(e), s = L.useRef(null), [u, c] = L.useState(), [d, p] = L.useState(!1), h = L.useRef(!1), { getOwnerDocument: m } = Xs();
  aa(() => {
    var E, I, S, P;
    const C = m();
    c(!((P = (S = (I = (E = C.fullscreenEnabled) !== null && E !== void 0 ? E : C.webkitFullscreenEnabled) !== null && I !== void 0 ? I : C.mozFullScreenEnabled) !== null && S !== void 0 ? S : C.msFullscreenEnabled) !== null && P !== void 0 && P));
  }, [m]);
  const g = L.useCallback(() => {
    var E;
    const I = m(), S = I.fullscreenElement || I.webkitFullscreenElement || I.mozFullScreenElement || I.msFullscreenElement;
    return ((E = S == null ? void 0 : S.shadowRoot) === null || E === void 0 ? void 0 : E.fullscreenElement) || S;
  }, [m]), y = L.useCallback(() => {
    const E = s.current;
    try {
      E.requestFullscreen ? E.requestFullscreen().catch(() => {
      }) : E.webkitRequestFullscreen ? E.webkitRequestFullscreen() : E.mozRequestFullScreen ? E.mozRequestFullScreen() : E.msRequestFullscreen && E.msRequestFullscreen();
    } catch {
    }
  }, []), b = L.useCallback(() => {
    if (!g())
      return;
    const E = m();
    try {
      E.exitFullscreen ? E.exitFullscreen().catch(() => {
      }) : E.webkitExitFullscreen ? E.webkitExitFullscreen() : E.mozCancelFullScreen ? E.mozCancelFullScreen() : E.msExitFullscreen && E.msExitFullscreen();
    } catch {
    }
  }, [g, m]);
  L.useEffect(() => {
    const E = m(), I = () => {
      p(g() === s.current);
    };
    return Qd(...["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"].map((S) => (E.addEventListener(S, I), () => E.removeEventListener(S, I))));
  }, [g, m]);
  const _ = At(() => {
    var E;
    return (E = t.enterFullscreen) === null || E === void 0 ? void 0 : E.call(t);
  }), w = At(() => {
    var E;
    return (E = t.exitFullscreen) === null || E === void 0 ? void 0 : E.call(t);
  });
  L.useEffect(() => {
    d && (h.current = !0), h.current && (d ? _ : w)();
  }, [d, _, w]);
  const k = At(() => {
    var E;
    return (E = r ? y : null) === null || E === void 0 || E(), b;
  });
  L.useEffect(k, [k]);
  const F = L.useMemo(() => ({ fullscreen: d, disabled: u, enter: y, exit: b }), [d, u, y, b]);
  return L.useImperativeHandle(o, () => F, [F]), L.createElement(
    "div",
    { ref: s, className: Br(wt(Qh), wt(pE)) },
    L.createElement(UE.Provider, { value: F }, n)
  );
}
const yY = Aa("EnterFullscreen", L.createElement("path", { d: "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" })), bY = Aa("ExitFullscreen", L.createElement("path", { d: "M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" }));
function _Y() {
  var e;
  const { fullscreen: t, disabled: n, enter: r, exit: o } = gY(), { render: s } = jn();
  return n ? null : s.buttonFullscreen ? L.createElement(L.Fragment, null, (e = s.buttonFullscreen) === null || e === void 0 ? void 0 : e.call(s, { fullscreen: t, disabled: n, enter: r, exit: o })) : L.createElement(Ac, { disabled: n, label: t ? "Exit Fullscreen" : "Enter Fullscreen", icon: t ? bY : yY, renderIcon: t ? s.iconExitFullscreen : s.iconEnterFullscreen, onClick: t ? o : r });
}
function HE({ augment: e, contains: t, addParent: n }) {
  e(({ fullscreen: r, toolbar: o, ...s }) => ({
    toolbar: xg(o, Qh, L.createElement(_Y, null)),
    fullscreen: zE(r),
    ...s
  })), n(t(c_) ? c_ : dg, fo(Qh, vY));
}
const wY = {
  controls: !0,
  playsInline: !0
}, YE = (e) => ({
  ...wY,
  ...e
});
function xY() {
  const { video: e } = jn();
  return YE(e);
}
function EY() {
  var e;
  return ((e = navigator.userAgentData) === null || e === void 0 ? void 0 : e.brands.some(({ brand: t }) => t === "Chromium")) || !!window.chrome;
}
function CY() {
  return /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent);
}
function OY({ slide: e, offset: t }) {
  const n = xY(), { publish: r } = Ic(), { setContainerRef: o, containerRect: s, containerRef: u } = Cg(), { getOwnerDocument: c } = Xs(), { animation: d } = jn(), p = L.useRef(null), h = L.useRef(!1);
  L.useEffect(() => {
    t !== 0 && p.current && !p.current.paused && p.current.pause();
  }, [t]), L.useEffect(() => {
    t === 0 && p.current && (e.autoPlay || n.autoPlay) && (r(eH), p.current.play().catch(() => {
    }));
  }, [t, n.autoPlay, e.autoPlay, r]);
  const m = At(() => {
    const P = setTimeout(() => {
      if (u.current) {
        const C = u.current.style.border;
        u.current.style.border = "1px solid transparent", OE(u.current), u.current.style.border = C;
      }
    }, Math.max(d.swipe, d.navigation || 0) + 50);
    return () => clearTimeout(P);
  });
  L.useEffect(() => {
    if (EY() && t === 0)
      return m();
  }, [t, m]);
  const g = At((P) => {
    t === 0 && (n.autoPlay || e.autoPlay) && P.paused && P.play().catch(() => {
    });
  }), y = L.useCallback((P) => {
    p.current = P, P && g(P);
  }, [g]);
  L.useEffect(() => {
    if (t === 0) {
      let P = !1;
      const C = () => {
        P = c().fullscreenElement === p.current, h.current = P;
      };
      return c().addEventListener("fullscreenchange", C), () => {
        c().removeEventListener("fullscreenchange", C), P && (h.current = !1, c().exitFullscreen().catch(() => {
        }));
      };
    }
  }, [t, c]), L.useEffect(() => {
    if (t === 0) {
      let P = !1;
      const C = (B) => (H) => {
        H.target === p.current && (P = B, h.current = P);
      }, T = C(!0), A = C(!1);
      return c().addEventListener("enterpictureinpicture", T), c().addEventListener("leavepictureinpicture", A), () => {
        c().removeEventListener("enterpictureinpicture", T), c().removeEventListener("leavepictureinpicture", A), P && (h.current = !1, c().exitPictureInPicture().catch(() => {
        }));
      };
    }
  }, [t, c]);
  const { width: b, height: _, poster: w, sources: k } = e, F = () => {
    const P = {};
    if (P.style = { maxWidth: "100%", maxHeight: "100%" }, b && _ && s) {
      const C = b / _ > s.width / s.height, T = C ? s.width : Math.round(s.height / _ * b), A = C ? Math.round(s.width / b * _) : s.height;
      P.width = T, P.height = A, P.style.width = T, P.style.height = A;
    }
    return P;
  }, E = (P) => e[P] === !1 ? null : e[P] === !0 ? { [P]: !0 } : n[P] === !1 ? null : n[P] === !0 ? { [P]: !0 } : null, I = (P) => n[P] || e[P] ? { [P]: e[P] || n[P] } : null, S = (P) => {
    h.current && P.stopPropagation();
  };
  return L.createElement(L.Fragment, null, k && L.createElement("div", { ref: o, style: {
    width: "100%",
    height: "100%",
    ...b ? { maxWidth: `${b}px` } : null
  }, className: Br(wt("video_container"), wt(Xd), wt(hg)) }, s && L.createElement("video", { ref: y, poster: w, ...F(), ...E("controls"), ...E("playsInline"), ...E("loop"), ...E("muted"), ...E("playsInline"), ...E("disablePictureInPicture"), ...E("disableRemotePlayback"), ...I("controlsList"), ...I("crossOrigin"), ...I("preload"), onPlay: () => {
    var P;
    if (t !== 0) {
      (P = p.current) === null || P === void 0 || P.pause();
      return;
    }
    r(tH);
  }, onEnded: () => {
    r(nH);
  }, onWheel: S, onKeyDown: S, onPointerDown: (P) => {
    S(P), CY() && p.current && p.current.getBoundingClientRect().bottom - P.clientY < 40 && P.stopPropagation();
  } }, k.map(({ src: P, type: C, media: T }) => L.createElement("source", { key: [P, C, T].filter(Boolean).join("|"), src: P, type: C, media: T })))));
}
function SY(e) {
  return e.type === "video";
}
function E_({ augment: e }) {
  e(({ render: { slide: t, ...n }, video: r, ...o }) => ({
    render: {
      slide: ({ slide: s, offset: u, rect: c }) => {
        var d;
        return SY(s) ? L.createElement(OY, { key: (d = s.sources) === null || d === void 0 ? void 0 : d.map((p) => p.src).join("|"), slide: s, offset: u }) : t == null ? void 0 : t({ slide: s, offset: u, rect: c });
      },
      ...n
    },
    video: YE(r),
    ...o
  }));
}
const qE = {
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
function TY(e) {
  return Math.min(Math.max(e, Number.EPSILON), 1);
}
function VE(e) {
  const { minZoom: t, ...n } = { ...qE, ...e };
  return { minZoom: TY(t), ...n };
}
function PY(e, t, n, r) {
  const o = L.useRef(void 0), s = L.useRef(void 0), { zoom: u } = jn().animation, c = Eg(), d = At(() => {
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
      } catch (g) {
        console.error(g);
      }
      s.current = void 0, o.current && (o.current.onfinish = () => {
        o.current = void 0;
      });
    }
  });
  return aa(d, [e, t, n, d]), L.useCallback(() => {
    s.current = r != null && r.current ? window.getComputedStyle(r.current).transform : void 0;
  }, [r]);
}
function kY(e, t) {
  const { on: n } = jn(), r = At(() => {
    var o;
    t || (o = n.zoom) === null || o === void 0 || o.call(n, { zoom: e });
  });
  L.useEffect(r, [e, r]);
}
function tf() {
  const { zoom: e } = jn();
  return VE(e);
}
function NY(e, t) {
  var n;
  const r = typeof e == "function" ? (n = e(t)) !== null && n !== void 0 ? n : qE.maxZoom : e;
  return Math.max(r, 1);
}
function IY(e, t) {
  var n, r;
  let o = { width: 0, height: 0 }, s = { width: 0, height: 0 };
  const { currentSlide: u } = po(), { imageFit: c } = jn().carousel, { maxZoomPixelRatio: d, maxZoom: p } = tf();
  if (e && u) {
    const m = { ...u, ...t };
    if (Ko(m)) {
      const g = _g(m, c), y = Math.max(...(((n = m.srcSet) === null || n === void 0 ? void 0 : n.map((_) => _.width)) || []).concat(m.width ? [m.width] : [])), b = Math.max(...(((r = m.srcSet) === null || r === void 0 ? void 0 : r.map((_) => _.height)) || []).concat(m.height ? [m.height] : []));
      y > 0 && b > 0 && e.width > 0 && e.height > 0 && (s = g ? {
        width: Math.round(Math.min(y, e.width / e.height * b)),
        height: Math.round(Math.min(b, e.height / e.width * y))
      } : { width: y, height: b }, s = {
        width: s.width * d,
        height: s.height * d
      }, o = g ? {
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
  const h = u && o.width ? Ko(u) ? Math.max(bg(s.width / o.width, 5), 1) : NY(p, u) : 1;
  return { imageRect: o, maxZoom: h };
}
function C_(e, t) {
  return Math.hypot(e.clientX - t.clientX, e.clientY - t.clientY);
}
function O_(e, t, n = 100, r = 2) {
  return e * Math.min(1 + Math.abs(t / n), r) ** Math.sign(t);
}
function AY(e, t, n, r, o, s, u, c, d) {
  const p = L.useRef([]), h = L.useRef(0), m = L.useRef(void 0), { globalIndex: g } = po(), { getOwnerWindow: y } = Xs(), { containerRef: b, subscribeSensors: _ } = ho(), { keyboardMoveDistance: w, zoomInMultiplier: k, wheelZoomDistanceFactor: F, scrollToZoom: E, doubleTapDelay: I, doubleClickDelay: S, doubleClickMaxStops: P, pinchZoomDistanceFactor: C, pinchZoomV4: T } = tf(), A = L.useCallback((le) => {
    if (b.current) {
      const { pageX: me, pageY: X } = le, { scrollX: te, scrollY: oe } = y(), { left: be, top: Se, width: ye, height: fe } = b.current.getBoundingClientRect();
      return [me - be - te - ye / 2, X - Se - oe - fe / 2];
    }
    return [];
  }, [b, y]), B = At((le) => {
    const { key: me, metaKey: X, ctrlKey: te } = le, oe = X || te, be = () => {
      le.preventDefault(), le.stopPropagation();
    };
    if (e > 1) {
      const Se = (ye, fe) => {
        be(), c(ye, fe);
      };
      me === "ArrowDown" ? Se(0, w) : me === "ArrowUp" ? Se(0, -w) : me === "ArrowLeft" ? Se(-w, 0) : me === "ArrowRight" && Se(w, 0);
    }
    me === "+" || oe && me === "=" ? (be(), o()) : me === "-" || oe && me === "_" ? (be(), s()) : oe && me === "0" && (be(), u(1));
  }), H = At((le) => {
    if ((le.ctrlKey || E) && Math.abs(le.deltaY) > Math.abs(le.deltaX)) {
      le.stopPropagation(), u(O_(e, -le.deltaY, F), !0, ...A(le));
      return;
    }
    e > 1 && (le.stopPropagation(), E || c(le.deltaX, le.deltaY));
  }), ne = L.useCallback((le) => {
    const me = p.current;
    me.splice(0, me.length, ...me.filter((X) => X.pointerId !== le.pointerId));
  }, []), U = L.useCallback((le) => {
    ne(le), le.persist(), p.current.push(le);
  }, [ne]), re = At((le) => {
    var me;
    const X = p.current;
    if (le.pointerType === "mouse" && le.buttons > 1 || !(!((me = d == null ? void 0 : d.current) === null || me === void 0) && me.contains(le.target)))
      return;
    e > 1 && le.stopPropagation();
    const { timeStamp: te } = le;
    if (X.length === 0 && te - h.current < (le.pointerType === "touch" ? I : S)) {
      h.current = 0;
      const oe = e >= 1 ? e !== n ? e * Math.max(n ** (1 / P), k) : 1 : e !== t ? e / Math.max(t ** (-1 / P), k) : 1;
      u(oe, !1, ...A(le));
    } else
      h.current = te;
    if (U(le), X.length === 2) {
      const oe = C_(X[0], X[1]);
      m.current = {
        previousDistance: oe,
        initialDistance: Math.max(oe, 1),
        initialZoom: e
      };
    }
  }), he = At((le) => {
    const me = p.current, X = me.find((te) => te.pointerId === le.pointerId);
    if (me.length === 2 && m.current) {
      le.stopPropagation(), U(le);
      const te = C_(me[0], me[1]), oe = T ? m.current.initialZoom / m.current.initialDistance * te : O_(e, te - m.current.previousDistance, C);
      u(oe, !0, ...me.map((be) => A(be)).reduce((be, Se) => Se.map((ye, fe) => be[fe] + ye / 2))), m.current.previousDistance = te;
      return;
    }
    e > 1 && (le.stopPropagation(), X && (me.length === 1 && c((X.clientX - le.clientX) / e, (X.clientY - le.clientY) / e), U(le)));
  }), ge = L.useCallback((le) => {
    const me = p.current;
    me.length === 2 && me.find((X) => X.pointerId === le.pointerId) && (m.current = void 0), ne(le);
  }, [ne]), Ne = L.useCallback(() => {
    const le = p.current;
    le.splice(0, le.length), h.current = 0, m.current = void 0;
  }, []);
  LE(_, re, he, ge, r), L.useEffect(Ne, [g, Ne]), L.useEffect(() => r ? () => {
  } : Qd(Ne, _(mg, B), _(gg, H)), [r, _, Ne, B, H]);
}
function RY(e, t, n) {
  const [r, o] = L.useState(1), [s, u] = L.useState(0), [c, d] = L.useState(0), p = PY(r, s, c, n), { currentSlide: h, globalIndex: m } = po(), { containerRect: g, slideRect: y } = ho(), { minZoom: b, zoomInMultiplier: _ } = tf(), w = h && Ko(h) ? h.src : void 0, k = !(n != null && n.current);
  aa(() => {
    o(1), u(0), d(0);
  }, [m, w]);
  const F = L.useCallback((C, T, A) => {
    const B = A || r, H = s - (C || 0), ne = c - (T || 0), U = (e.width * B - y.width) / 2 / B, re = (e.height * B - y.height) / 2 / B;
    u(Math.min(Math.abs(H), Math.max(U, 0)) * Math.sign(H)), d(Math.min(Math.abs(ne), Math.max(re, 0)) * Math.sign(ne));
  }, [r, s, c, y, e.width, e.height]), E = L.useCallback((C, T, A, B) => {
    const H = bg(C + 0.01 < t ? C - 0.01 > b ? C : b : t, 5);
    T || p(), F(A ? A * (1 / r - 1 / H) : 0, B ? B * (1 / r - 1 / H) : 0, H), o(H);
  }, [r, b, t, F, p]), I = At(() => {
    r > 1 && (r > t && E(t, !0), F());
  });
  aa(I, [g.width, g.height, I]);
  const S = L.useCallback(() => {
    const C = r * _;
    E(r < 1 && C > 1 ? 1 : C);
  }, [r, _, E]), P = L.useCallback(() => {
    const C = r / _;
    E(r > 1 && C < 1 ? 1 : C);
  }, [r, _, E]);
  return { zoom: r, offsetX: s, offsetY: c, disabled: k, changeOffsets: F, changeZoom: E, zoomIn: S, zoomOut: P };
}
const GE = L.createContext(null), Sg = sa("useZoom", "ZoomControllerContext", GE);
function MY({ children: e }) {
  const [t, n] = L.useState(), { slideRect: r } = ho(), { ref: o, minZoom: s } = tf(), { imageRect: u, maxZoom: c } = IY(r, t == null ? void 0 : t.imageDimensions), { zoom: d, offsetX: p, offsetY: h, disabled: m, changeZoom: g, changeOffsets: y, zoomIn: b, zoomOut: _ } = RY(u, c, t == null ? void 0 : t.zoomWrapperRef);
  kY(d, m), AY(d, s, c, m, b, _, g, y, t == null ? void 0 : t.zoomWrapperRef);
  const w = L.useMemo(() => ({ zoom: d, minZoom: s, maxZoom: c, offsetX: p, offsetY: h, disabled: m, zoomIn: b, zoomOut: _, changeZoom: g }), [d, s, c, p, h, m, b, _, g]);
  L.useImperativeHandle(o, () => w, [w]);
  const k = L.useMemo(() => ({ ...w, setZoomWrapper: n }), [w, n]);
  return L.createElement(GE.Provider, { value: k }, e);
}
const DY = Aa("ZoomIn", L.createElement(
  L.Fragment,
  null,
  L.createElement("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" }),
  L.createElement("path", { d: "M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" })
)), LY = Aa("ZoomOut", L.createElement("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z" })), S_ = L.forwardRef(function({ zoomIn: t, onLoseFocus: n }, r) {
  const o = L.useRef(!1), s = L.useRef(!1), { zoom: u, minZoom: c, maxZoom: d, zoomIn: p, zoomOut: h, disabled: m } = Sg(), { render: g } = jn(), y = m || (t ? u >= d : u <= c);
  return L.useEffect(() => {
    y && o.current && s.current && n(), y || (o.current = !0);
  }, [y, n]), L.createElement(Ac, { ref: r, disabled: y, label: t ? "Zoom in" : "Zoom out", icon: t ? DY : LY, renderIcon: t ? g.iconZoomIn : g.iconZoomOut, onClick: t ? p : h, onFocus: () => {
    s.current = !0;
  }, onBlur: () => {
    s.current = !1;
  } });
});
function FY() {
  const e = L.useRef(null), t = L.useRef(null), { focus: n } = ho(), r = L.useCallback((u) => {
    var c, d;
    !((c = u.current) === null || c === void 0) && c.disabled ? n() : (d = u.current) === null || d === void 0 || d.focus();
  }, [n]), o = L.useCallback(() => r(e), [r]), s = L.useCallback(() => r(t), [r]);
  return L.createElement(
    L.Fragment,
    null,
    L.createElement(S_, { zoomIn: !0, ref: e, onLoseFocus: s }),
    L.createElement(S_, { ref: t, onLoseFocus: o })
  );
}
function $Y() {
  const { render: e } = jn(), t = Sg();
  return e.buttonZoom ? L.createElement(L.Fragment, null, e.buttonZoom(t)) : L.createElement(FY, null);
}
function BY(e) {
  var t;
  return (((t = e.srcSet) === null || t === void 0 ? void 0 : t.length) || 0) > 0;
}
function jY({ current: e, preload: t }, { type: n, source: r }) {
  switch (n) {
    case "fetch":
      return e ? { current: e, preload: r } : { current: r };
    case "done":
      return r === t ? { current: r } : { current: e, preload: t };
    default:
      throw new Error(wE);
  }
}
function WY(e) {
  var t, n;
  const [{ current: r, preload: o }, s] = L.useReducer(jY, {}), { slide: u, rect: c, imageFit: d, render: p, interactive: h } = e, m = u.srcSet.sort((S, P) => S.width - P.width), g = (t = u.width) !== null && t !== void 0 ? t : m[m.length - 1].width, y = (n = u.height) !== null && n !== void 0 ? n : m[m.length - 1].height, b = _g(u, d), _ = Math.max(...m.map((S) => S.width)), w = Math.min((b ? Math.max : Math.min)(c.width, g * (c.height / y)), _), k = fH(), F = At(() => {
    var S;
    const P = (S = m.find((C) => C.width >= w * k)) !== null && S !== void 0 ? S : m[m.length - 1];
    (!r || m.findIndex((C) => C.src === r) < m.findIndex((C) => C === P)) && s({ type: "fetch", source: P.src });
  });
  aa(F, [c.width, c.height, k, F]);
  const E = At((S) => s({ type: "done", source: S })), I = {
    WebkitTransform: h ? "initial" : "translateZ(0)"
  };
  return b || Object.assign(I, c.width / c.height < g / y ? { width: "100%", height: "auto" } : { width: "auto", height: "100%" }), L.createElement(
    L.Fragment,
    null,
    o && o !== r && L.createElement(fd, { key: "preload", ...e, offset: void 0, slide: { ...u, src: o, srcSet: void 0 }, style: { position: "absolute", visibility: "hidden", ...I }, onLoad: () => E(o), render: {
      ...p,
      iconLoading: () => null,
      iconError: () => null
    } }),
    r && L.createElement(fd, { key: "current", ...e, slide: { ...u, src: r, srcSet: void 0 }, style: I })
  );
}
function zY({ render: e, slide: t, offset: n, rect: r }) {
  var o;
  const [s, u] = L.useState(), c = L.useRef(null), d = Ko(t), { zoom: p, maxZoom: h, offsetX: m, offsetY: g, setZoomWrapper: y } = Sg(), b = p > 1, { carousel: _, on: w } = jn(), { currentIndex: k } = po();
  aa(() => {
    if (n !== 0 || d || !c.current)
      return () => {
      };
    const E = () => {
      const S = c.current;
      if (!S)
        return;
      let P = 0, C = 0;
      for (const T of S.children)
        T instanceof HTMLElement && (P = Math.max(P, T.offsetWidth), C = Math.max(C, T.offsetHeight));
      u((T) => T && T.width === P && T.height === C ? T : { width: P, height: C });
    };
    if (E(), typeof ResizeObserver > "u")
      return () => {
      };
    const I = new ResizeObserver(E);
    for (const S of c.current.children)
      I.observe(S);
    return () => I.disconnect();
  }, [n, d, r]), aa(() => n === 0 ? (y({ zoomWrapperRef: c, imageDimensions: s }), () => y(void 0)) : () => {
  }, [n, s, y]);
  let F = (o = e.slide) === null || o === void 0 ? void 0 : o.call(e, { slide: t, offset: n, rect: r, zoom: p, maxZoom: h });
  if (!F && d) {
    const E = {
      slide: t,
      offset: n,
      rect: r,
      render: e,
      imageFit: _.imageFit,
      imageProps: _.imageProps,
      onClick: n === 0 ? () => {
        var I;
        return (I = w.click) === null || I === void 0 ? void 0 : I.call(w, { index: k });
      } : void 0
    };
    F = BY(t) ? L.createElement(WY, { ...E, slide: t, interactive: b, rect: n === 0 ? { width: r.width * p, height: r.height * p } : r }) : L.createElement(fd, { onLoad: (I) => u({ width: I.naturalWidth, height: I.naturalHeight }), ...E });
  }
  return F ? L.createElement("div", { ref: c, className: Br(wt(pE), wt(Xd), wt(hg), b && wt(aH)), style: n === 0 ? { transform: `scale(${p}) translateX(${m}px) translateY(${g}px)` } : void 0 }, F) : null;
}
const KE = ({ augment: e, addModule: t }) => {
  e(({ zoom: n, toolbar: r, render: o, controller: s, ...u }) => {
    const c = VE(n);
    return {
      zoom: c,
      toolbar: xg(r, u_, L.createElement($Y, null)),
      render: {
        ...o,
        slide: (d) => {
          var p, h;
          return Ko(d.slide) || d.slide.type != null && (!((p = c.supports) === null || p === void 0) && p.includes(d.slide.type)) ? L.createElement(zY, { render: o, ...d }) : (h = o.slide) === null || h === void 0 ? void 0 : h.call(o, d);
        }
      },
      controller: { ...s, preventDefaultWheelY: c.scrollToZoom },
      ...u
    };
  }), t(fo(u_, MY));
}, om = ({ imageUrl: e, isOpen: t = !1, onClose: n = () => {
}, downloadFileFetcher: r }) => {
  const [o, s] = ot(null), [u, c] = ot(0);
  Vt(() => {
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
    c((g) => g <= 0 ? 270 : g - 90);
  }, p = () => {
    c((g) => g >= 270 ? 0 : g + 90);
  };
  return /* @__PURE__ */ O(
    jE,
    {
      open: t,
      plugins: [HE, am, KE],
      close: () => {
        c(0), n();
      },
      slides: ((g) => g ? [{ src: g }] : [])(o),
      zoom: {
        maxZoomPixelRatio: 5,
        zoomInMultiplier: 2
      },
      className: `rotated${u}`,
      toolbar: {
        buttons: [
          /* @__PURE__ */ O("button", { type: "button", className: "yarl__button", onClick: d, children: /* @__PURE__ */ O(ud, { icon: q7, size: "xl" }) }, "rotate-left"),
          /* @__PURE__ */ O("button", { type: "button", className: "yarl__button", onClick: p, children: /* @__PURE__ */ O(ud, { icon: V7, size: "xl" }) }, "rotate-right"),
          "zoom",
          "download",
          "fullscreen",
          "close"
        ]
      }
    }
  );
};
om.propTypes = {
  imageUrl: l.string,
  isOpen: l.bool,
  onClose: l.func,
  downloadFileFetcher: l.func
};
const pd = ({
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
  checkAllData: g,
  setConcatAll: y,
  headerDetail: b,
  setRowStyle: _,
  totalRows: w = 0,
  mobileCardView: k = !1,
  cardLine1: F = [],
  cardLine2: E = [],
  cardLine3: I = [],
  cardLine4: S = [],
  dataHandler: P = null,
  searchParams: C = null,
  onLoadMore: T = null,
  isLoadingMoreProp: A = !1,
  hasMore: B = null,
  mergeConfig: H = null,
  downloadFileFetcher: ne
}) => {
  const [U, re] = ot({}), [he, ge] = ot({ isOpen: !1, src: null });
  Vt(() => {
    re({}), p([]), m([]);
  }, [u]), Vt(() => {
    const $ = R.map(g, (D) => D[t[0].key]);
    c(g), p(g), m($);
  }, [g]);
  const Ne = ($, D) => {
    o && o($, D);
  }, le = ($, D) => {
    let G = [], K = [];
    R.includes(h, $[D]) ? (G = R.reject(d, (se) => R.isEqual(se[D], $[D])), K = R.reject(h, (se) => R.isEqual(se, $[D]))) : (G = [...d, $], K = [...h, $[D]]), m(K), p(G), c(G), y(G.length === w);
  }, me = ($) => {
    Ne("onClick", $), re($);
  }, X = ($, D) => {
    if (R.isEmpty($))
      return null;
    if (e) {
      const K = $.match(/.{1,60}/g) || [$];
      return R.map(K, (se, Ie) => /* @__PURE__ */ O("div", { children: se }, Ie));
    }
    const G = /* @__PURE__ */ O("span", { className: Jt.icon, children: /* @__PURE__ */ O(
      ur,
      {
        position: "bottom right",
        content: /* @__PURE__ */ O("div", { className: Jt.popupContent, children: $ }),
        trigger: /* @__PURE__ */ O(We, { name: "comment alternate outline", style: { color: "#286b92" } })
      }
    ) }, 1);
    return D >= $.length ? $ : /* @__PURE__ */ O("div", { className: Jt.noWrap, children: [`${$.slice(0, D)}...`, G] });
  }, te = ($, D) => {
    if (R.isEmpty($)) return null;
    let G = $;
    if (typeof $[0] == "object" && (G = R.map($, (Ie) => Ie[D.split(",")[1]])), e)
      return G.join(", ");
    const K = R.map(G, (Ie, pe) => /* @__PURE__ */ O("div", { className: Jt.arrayCell, children: Ie }, pe)), se = /* @__PURE__ */ O("span", { className: Jt.icon, children: /* @__PURE__ */ O(
      ur,
      {
        position: "bottom right",
        content: /* @__PURE__ */ O("div", { className: Jt.popupContent, children: K }),
        trigger: /* @__PURE__ */ O(We, { name: "comment alternate outline", style: { color: "#286b92" } })
      }
    ) }, 1);
    return G.length === 1 ? G : [`${G[0]}...`, se];
  }, oe = ($, D, G = "") => {
    const K = new Date($), se = new Date(D);
    let Ie = /* @__PURE__ */ new Date();
    R.isEmpty(G) || (Ie = new Date(G));
    const pe = se - K, Ee = Ie - K;
    if (pe <= 0 || Ee >= pe)
      return 100;
    const de = Ee / pe * 100;
    return parseInt(de.toFixed(0), 10);
  }, be = ($, D, G, K, se, Ie) => {
    let pe = "#2483bb";
    if (D) {
      const Ee = D[0];
      if (Ee)
        if (Ee.colorKey)
          K && (pe = qt(Ee.colorKey, K));
        else
          for (const de of D)
            de.onName === $ ? pe = de.color : de.default && (pe = de.default);
    }
    return G ? /* @__PURE__ */ O(
      gt,
      {
        style: { backgroundColor: pe },
        className: Jt.ButtonLabel,
        onClick: () => typeof G == "function" ? G(K) : Ne(G, K),
        fluid: !0,
        children: R.isEmpty(se) ? String($) : Tl($, se)
      }
    ) : $ ? /* @__PURE__ */ O(gt, { style: { backgroundColor: pe, color: Ie }, className: Jt.ButtonLabel, fluid: !0, children: R.isEmpty(se) ? String($) : Tl($, se) }) : null;
  }, Se = ($, D, G, K) => {
    let se = oe($, D);
    G(K) !== void 0 && (se = oe($, D, G(K)));
    let Ie = "#01C875";
    return se >= 90 && (Ie = "#FDAB3D"), se === 100 && (Ie = "#E2445B"), /* @__PURE__ */ ae("div", { children: [
      /* @__PURE__ */ O("div", { className: Jt.progressBarLabel, children: `${Mr(D, !1, !1, !0)} ${se}%` }),
      /* @__PURE__ */ O(
        Lz,
        {
          isLabelVisible: !1,
          animateOnRender: !0,
          width: "11rem",
          completed: se,
          maxCompleted: 100,
          baseBgColor: "silver",
          bgColor: Ie
        }
      )
    ] });
  }, ye = ($, D) => {
    if (!R.includes($, "[]?")) return R.get(D, $);
    const [G, K] = $.replace("[]?", "").split("."), se = R.get(D, G, []);
    return R.isArray(se) ? R.filter(
      R.map(se, (Ie) => R.get(Ie, K)),
      Boolean
    ) : [];
  }, fe = ({
    format: $,
    value: D,
    key: G,
    endDate: K,
    boolLabels: se,
    /* 	colorLabel, */
    translate: Ie,
    /* onClick,
    labelData, */
    /* 	onKeyEndDate, */
    sum: pe,
    colorLabel: Ee,
    onClick: de,
    widthZero: q,
    nullToZero: ee,
    stringLength: we,
    rowData: ke,
    textColor: Ae,
    stopDateHandler: je
  }) => {
    switch ($) {
      case "timeBetween":
        return Cx(D, K);
      case "date":
        return Mr(D, !1, !1, !1);
      case "dateM":
        return Mr(D, !1, !1, !1);
      case "dateDMY":
        return Mr(D, !1, !1, !1, !1, !1, !0);
      case "time":
        return Mr(D, !1, !0, !1);
      case "dateTime":
        return Mr(D, !1, !1, !0);
      case "dateTimeBar":
        return Se(D, K, je, ke);
      case "dateTimeDay":
        return Mr(D, !1, !1, !1, !0);
      case "dateMonthYear":
        return Mr(D, !1, !1, !1, !1, !0);
      case "pastDays":
        return kz(D);
      case "phone":
        return Tz(D);
      case "currency":
        return I0(D, !1, q, ee);
      case "decimal":
        return Pz(D, q, ee);
      case "integerCurrency":
        return I0(D, !0, q, ee);
      case "number":
        return Number.isNaN(D) || D === null ? "" : Number(D).toLocaleString("en-US");
      case "blankZero": {
        if (R.isArray(D) || typeof D == "string") {
          const $e = D ? D.length : 0;
          return $e === 0 ? "" : $e;
        }
        return D === 0 ? "" : D;
      }
      case "count":
        return D ? D.length : 0;
      case "boolean":
        return pe ? D : se ? D ? se.true || "si" : se.false || "no" : D ? "si" : "no";
      case "translate":
        return Tl(D, Ie);
      case "truncate":
        return X(D, we);
      case "array":
        return R.map(D, (et) => /* @__PURE__ */ O("div", { children: qt(G.split(",")[1], et) }));
      case "colorLabel":
        return Ce(D, Ae);
      case "arrayTruncate": {
        const $e = G.includes("[]?") ? ye(G, ke) : D;
        return te($e, G);
      }
      case "label":
        return be(D, Ee, de, ke, Ie, Ae);
      case "coloredText": {
        let $e = "inherit";
        if (Ee)
          for (const Ze of Ee)
            Ze.onName === D ? $e = Ze.color : Ze.default && $e === "inherit" && ($e = Ze.default);
        const et = R.isEmpty(Ie) ? String(D) : Tl(D, Ie);
        return /* @__PURE__ */ O("span", { style: { color: $e, fontWeight: 500 }, children: et });
      }
      case "longText":
        return X(D, we);
      case "image":
        return D ? /* @__PURE__ */ O(
          We,
          {
            name: "image",
            size: "small",
            style: { maxWidth: "50px", maxHeight: "50px", cursor: "pointer" },
            onClick: () => {
              ge({
                isOpen: !0,
                src: D
              });
            }
          }
        ) : null;
      default:
        return D;
    }
  }, Ce = ($, D) => $ === "En Línea" && D !== "string" ? /* @__PURE__ */ O("div", { style: { color: "hsl(130, 92.00%, 34.10%)" }, children: $ }) : /* @__PURE__ */ O("div", { className: Jt.labelColor, style: { color: "#000000" }, children: $ }), De = ($, D) => R.map($, ({ content: K, hidden: se, type: Ie, color: pe = "hsl(0, 0 %, 95 %)", onClick: Ee, visible: de }, q) => {
    if (se || typeof de == "function" && de(D) === !1)
      return null;
    switch (Ie) {
      case "icon":
        return /* @__PURE__ */ O(
          gt,
          {
            disabled: !1,
            className: Jt.ButtonIcon,
            style: {
              color: pe,
              border: `2px solid ${pe}`
            },
            onClick: () => Ne(Ee, D),
            children: /* @__PURE__ */ O(We, { name: K })
          },
          q
        );
      case "link":
        return /* @__PURE__ */ O(
          cr,
          {
            style: { color: pe },
            className: Jt.ButtonLink,
            onClick: () => Ne(Ee, D),
            children: K
          },
          q
        );
      default:
        return null;
    }
  }), W = ($, D = !1) => R.map(
    t,
    ({
      key: K,
      format: se,
      endDateKey: Ie = null,
      action: pe = [],
      multipleColumns: Ee = [],
      dataPosition: de = "left",
      twoLines: q = !1,
      multiple: ee = !1,
      line1: we = {},
      line2: ke = {},
      stringLength: Ae = 20,
      hidden: je = !1,
      translate: $e = {},
      colorLabel: et,
      textColor: Ze = "#000000",
      style: Ke = {},
      stopDateHandler: Ve = () => {
      },
      render: Te = null,
      valueGetter: ie = null,
      boolLabels: tt = null
    }, xt) => {
      let ft = {};
      _ !== void 0 && (ft = _($));
      const rt = ie && typeof ie == "function" ? ie($) : qt(K, $, !1, D), Zt = R.isEmpty(Ie) ? null : qt(Ie, $);
      if (je)
        return null;
      if (Te && typeof Te == "function") {
        const Ue = Te($, { setOpentImagePreview: ge });
        return /* @__PURE__ */ O(Et.Cell, { verticalAlign: "middle", textAlign: de, style: ft, className: Jt.cell, children: Ue }, xt);
      }
      if (!R.isEmpty(pe) && !e && !D)
        return /* @__PURE__ */ O(
          Et.Cell,
          {
            verticalAlign: "middle",
            textAlign: de,
            style: { ...ft, ...Ke },
            className: Jt.cellButton,
            children: De(pe, $)
          },
          xt
        );
      if (!R.isEmpty(pe) && e)
        return null;
      if (ee)
        return /* @__PURE__ */ O(
          Et.Cell,
          {
            verticalAlign: "middle",
            textAlign: "center",
            style: { ...ft, ...Ke },
            className: Jt.cellButton,
            onClick: () => {
              le($, K);
            },
            children: /* @__PURE__ */ O(Kn, { checked: R.includes(h, $[K]) }, xt)
          },
          xt
        );
      if (q) {
        const Ue = qt(R.get(we, "key", null), $), $t = qt(R.get(ke, "key", null), $), at = qt(R.get(we, "endDateKey", null), $), dn = qt(R.get(ke, "endDateKey", null), $);
        return /* @__PURE__ */ ae(
          Et.Cell,
          {
            verticalAlign: "middle",
            style: ft,
            onClick: () => me($),
            children: [
              /* @__PURE__ */ O("div", { className: Jt.towLineRow, style: { justifyContent: R.get(we, "dataPosition", "left"), ...ft }, children: fe({
                value: Ue,
                format: se,
                endDate: at,
                stringLength: Ae,
                key: K,
                translate: $e,
                colorLabel: et,
                boolLabels: tt,
                rowData: $
              }) }),
              /* @__PURE__ */ O("div", { className: Jt.towLineRow, style: { justifyContent: R.get(ke, "dataPosition", "left"), ...ft }, children: fe({
                value: $t,
                format: se,
                endDate: dn,
                stringLength: Ae,
                key: K,
                translate: $e,
                colorLabel: et,
                boolLabels: tt,
                rowData: $
              }) })
            ]
          },
          xt
        );
      }
      return R.isEmpty(Ee) ? /* @__PURE__ */ O(
        Et.Cell,
        {
          verticalAlign: "middle",
          className: Jt.cell,
          textAlign: de,
          style: { color: Ze, ...ft },
          onClick: () => me($),
          children: fe({
            value: rt,
            format: se,
            endDate: Zt,
            stringLength: Ae,
            key: K,
            sum: D,
            translate: $e,
            colorLabel: et,
            boolLabels: tt,
            rowData: $,
            textColor: Ze,
            stopDateHandler: Ve
          })
        },
        xt
      ) : R.map(Ee, ($t, at) => {
        const dn = xt + at;
        return /* @__PURE__ */ O(
          Et.Cell,
          {
            verticalAlign: "middle",
            style: ft,
            textAlign: R.get($t, "dataPosition", "left"),
            onClick: () => me($),
            children: fe({
              value: qt(R.get($t, "key", null), $),
              format: R.get($t, "format", ""),
              endDate: R.get($t, "endDate", null),
              stringLength: Ae,
              key: K,
              translate: $e,
              colorLabel: et,
              boolLabels: tt,
              rowData: $
            })
          },
          dn
        );
      });
    }
  ), z = () => {
    if (!R.isEmpty(n)) {
      const $ = R.map(n, (G, K) => {
        if (!R.isEmpty(b)) {
          const se = qt(b.headerTitle, G, !1), Ie = qt(b.dataDetail, G, !1);
          return [
            /* @__PURE__ */ O(Et.Row, { className: Jt.sumRow, as: "tr", children: /* @__PURE__ */ O(
              Et.Cell,
              {
                verticalAlign: "middle",
                className: Jt.cell,
                style: { backgroundColor: "#dddddd", color: "black" },
                colSpan: 16,
                children: se
              }
            ) }, `sumRow-${K}`),
            R.map(Ie, (pe, Ee) => /* @__PURE__ */ O(
              Et.Row,
              {
                className: Jt.groupHover,
                style: U === pe ? { backgroundColor: s } : {},
                onDoubleClick: () => {
                  Ne("Watch", pe);
                },
                children: W(pe)
              },
              `detail-${K}-${Ee}`
            ))
          ];
        }
        return /* @__PURE__ */ O(
          Et.Row,
          {
            className: Jt.groupHover,
            style: U === G ? { backgroundColor: s } : {},
            onDoubleClick: () => {
              Ne("Watch", G);
            },
            children: W(G)
          },
          K
        );
      });
      let D = [];
      return R.isEmpty(r) || (D = [
        /* @__PURE__ */ O(Et.Row, { className: Jt.sumRow, children: W(r, !0) }, "sumRow")
      ]), [...$, ...D];
    }
    return /* @__PURE__ */ O(Et.Row, { children: /* @__PURE__ */ O(Et.Cell, { colSpan: 34, children: /* @__PURE__ */ O("div", { className: Jt.emptyChat, children: /* @__PURE__ */ ae(Vn, { as: "h3", color: "grey", children: [
      /* @__PURE__ */ O("div", { className: Jt.emptyDataIcon, children: /* @__PURE__ */ ae(We.Group, { size: "large", children: [
        /* @__PURE__ */ O(We, { name: "list alternate outline" }),
        /* @__PURE__ */ O(We, { corner: !0, name: "close", color: "red" })
      ] }) }),
      "No se ha encontrado ningun dato"
    ] }) }) }) });
  };
  if (k) {
    const $ = P ? async (D, G = !1, K = !1, se = !1) => P(D, G, K, se, { withLoading: !(!G && !K && !se) }) : null;
    return /* @__PURE__ */ ae("div", { className: Jt.cardsWrapper, children: [
      /* @__PURE__ */ O(
        Tx,
        {
          data: n,
          columns: t,
          headerDetail: b,
          setRowStyle: _,
          clickedRowColors: s,
          onHandlerTable: Ne,
          handlerClick: me,
          formatData: fe,
          clikedData: U,
          isPDF: e,
          cardLine1: F,
          enableInfiniteScroll: !!T || !!P,
          onLoadMore: T,
          isLoadingMore: A,
          hasMore: B,
          cardLine2: E,
          cardLine3: I,
          cardLine4: S,
          multipleHandler: le,
          concatKeys: h,
          dataHandler: $,
          searchParams: C,
          totalRows: w,
          mergeConfig: H
        }
      ),
      /* @__PURE__ */ O(
        om,
        {
          imageUrl: he.src,
          onClose: () => ge({ isOpen: !1, src: null }),
          isOpen: he.isOpen,
          downloadFileFetcher: ne
        }
      )
    ] });
  }
  return /* @__PURE__ */ ae(Et.Body, { children: [
    z(),
    /* @__PURE__ */ O(
      om,
      {
        imageUrl: he.src,
        onClose: () => ge({ isOpen: !1, src: null }),
        isOpen: he.isOpen,
        downloadFileFetcher: ne
      }
    )
  ] });
};
pd.propTypes = {
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
const UY = "_paginationCell_1jms9_1", HY = "_rowSelector_1jms9_9", YY = "_rowSelectorContainer_1jms9_17", qY = "_paginationContainer_1jms9_29", VY = "_content_1jms9_43", GY = "_pagination_1jms9_1", KY = "_itemCount_1jms9_67", ZY = "_span_1jms9_75", pa = {
  paginationCell: UY,
  rowSelector: HY,
  rowSelectorContainer: YY,
  paginationContainer: qY,
  content: VY,
  pagination: GY,
  itemCount: KY,
  span: ZY
}, ZE = ({ searchParams: e, setSearchParams: t, dataHandler: n, totalRows: r, visiblePagination: o }) => {
  const s = (p) => {
    const h = { ...e, rows: p };
    t(h), n(h);
  }, u = (p, { activePage: h }) => {
    p.preventDefault();
    const m = { ...e, page: h };
    t(m), n(m);
  }, c = () => {
    if (r <= 1)
      return /* @__PURE__ */ ae("span", { className: pa.itemCount, children: [
        "Elementos: 1-1 / ",
        r
      ] });
    const p = e.rows * e.page - e.rows + 1;
    let h = e.rows * e.page;
    return e.page === d() && (h = r), /* @__PURE__ */ O("span", { className: pa.itemCount, children: `Elementos: ${p}-${h}/ ${r}` }, 1);
  }, d = () => {
    const p = parseInt(r / e.rows, 10), h = r % e.rows;
    return p < 1 ? 1 : h > 0 ? p + 1 : p;
  };
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    /* @__PURE__ */ O(Ca, { children: o && /* @__PURE__ */ O(Et.Footer, { className: pa.footerContainer, children: /* @__PURE__ */ O(Et.Row, { children: /* @__PURE__ */ O(Et.HeaderCell, { colSpan: "34", className: pa.paginationCell, children: /* @__PURE__ */ ae("div", { className: pa.content, children: [
      /* @__PURE__ */ ae("div", { className: pa.paginationContainer, children: [
        /* @__PURE__ */ O(
          Hs,
          {
            className: pa.pagination,
            activePage: e.page,
            ellipsisItem: {
              content: /* @__PURE__ */ O(We, { name: "ellipsis horizontal" }, 1),
              icon: !0
            },
            firstItem: { content: /* @__PURE__ */ O(We, { name: "angle double left" }, 2), icon: !0 },
            lastItem: { content: /* @__PURE__ */ O(We, { name: "angle double right" }, 3), icon: !0 },
            prevItem: { content: /* @__PURE__ */ O(We, { name: "angle left" }, 4), icon: !0 },
            nextItem: { content: /* @__PURE__ */ O(We, { name: "angle right" }, 5), icon: !0 },
            totalPages: String(d()),
            onPageChange: u
          }
        ),
        r >= 1 && c()
      ] }),
      /* @__PURE__ */ ae("div", { className: pa.rowSelectorContainer, children: [
        /* @__PURE__ */ O("span", { className: pa.span, children: "Filas:" }),
        /* @__PURE__ */ O(
          Wr,
          {
            className: pa.rowSelector,
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
ZE.propTypes = {
  searchParams: l.object,
  setSearchParams: l.func,
  dataHandler: l.func,
  totalRows: l.number,
  visiblePagination: l.bool
};
var XE = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r(J, VI);
  })(typeof self < "u" ? self : is, function(n, r) {
    return function() {
      var o = { 328: function(d, p, h) {
        Object.defineProperty(p, "__esModule", { value: !0 }), p.PrintContextConsumer = p.PrintContext = void 0;
        var m = h(496), g = Object.prototype.hasOwnProperty.call(m, "createContext");
        p.PrintContext = g ? m.createContext({}) : null, p.PrintContextConsumer = p.PrintContext ? p.PrintContext.Consumer : function() {
          return null;
        };
      }, 428: function(d, p, h) {
        Object.defineProperty(p, "__esModule", { value: !0 }), p.ReactToPrint = void 0;
        var m = h(316), g = h(496), y = h(190), b = h(328), _ = h(940), w = function(k) {
          function F() {
            var E = k.apply(this, m.__spreadArray([], m.__read(arguments), !1)) || this;
            return E.startPrint = function(I) {
              var S = E.props, P = S.onAfterPrint, C = S.onPrintError, T = S.print, A = S.documentTitle;
              setTimeout(function() {
                var B, H;
                if (I.contentWindow) if (I.contentWindow.focus(), T) T(I).then(function() {
                  return P == null ? void 0 : P();
                }).then(function() {
                  return E.handleRemoveIframe();
                }).catch(function(re) {
                  C ? C("print", re) : E.logMessages(["An error was thrown by the specified `print` function"]);
                });
                else {
                  if (I.contentWindow.print) {
                    var ne = (H = (B = I.contentDocument) === null || B === void 0 ? void 0 : B.title) !== null && H !== void 0 ? H : "", U = I.ownerDocument.title;
                    A && (I.ownerDocument.title = A, I.contentDocument && (I.contentDocument.title = A)), I.contentWindow.print(), A && (I.ownerDocument.title = U, I.contentDocument && (I.contentDocument.title = ne));
                  } else E.logMessages(["Printing for this browser is not currently possible: the browser does not have a `print` method available for iframes."]);
                  P == null || P(), E.handleRemoveIframe();
                }
                else E.logMessages(["Printing failed because the `contentWindow` of the print iframe did not load. This is possibly an error with `react-to-print`. Please file an issue: https://github.com/gregnb/react-to-print/issues/"]);
              }, 500);
            }, E.triggerPrint = function(I) {
              var S = E.props, P = S.onBeforePrint, C = S.onPrintError;
              if (P) {
                var T = P();
                T && typeof T.then == "function" ? T.then(function() {
                  E.startPrint(I);
                }).catch(function(A) {
                  C && C("onBeforePrint", A);
                }) : E.startPrint(I);
              } else E.startPrint(I);
            }, E.handlePrint = function(I) {
              var S = E.props, P = S.bodyClass, C = S.content, T = S.copyStyles, A = S.fonts, B = S.pageStyle, H = S.nonce, ne = typeof I == "function" ? I() : null;
              if (ne && typeof C == "function" && E.logMessages(['"react-to-print" received a `content` prop and a content param passed the callback return by `useReactToPrint. The `content` prop will be ignored.'], "warning"), ne || typeof C != "function" || (ne = C()), ne !== void 0) if (ne !== null) {
                var U = document.createElement("iframe");
                U.width = "".concat(document.documentElement.clientWidth, "px"), U.height = "".concat(document.documentElement.clientHeight, "px"), U.style.position = "absolute", U.style.top = "-".concat(document.documentElement.clientHeight + 100, "px"), U.style.left = "-".concat(document.documentElement.clientWidth + 100, "px"), U.id = "printWindow", U.srcdoc = "<!DOCTYPE html>";
                var re = (0, y.findDOMNode)(ne);
                if (re) {
                  var he = re.cloneNode(!0), ge = he instanceof Text, Ne = document.querySelectorAll("link[rel~='stylesheet'], link[as='style']"), le = ge ? [] : he.querySelectorAll("img"), me = ge ? [] : he.querySelectorAll("video"), X = A ? A.length : 0;
                  E.numResourcesToLoad = Ne.length + le.length + me.length + X, E.resourcesLoaded = [], E.resourcesErrored = [];
                  var te = function(oe, be) {
                    E.resourcesLoaded.includes(oe) ? E.logMessages(["Tried to mark a resource that has already been handled", oe], "debug") : (be ? (E.logMessages(m.__spreadArray(['"react-to-print" was unable to load a resource but will continue attempting to print the page'], m.__read(be), !1)), E.resourcesErrored.push(oe)) : E.resourcesLoaded.push(oe), E.resourcesLoaded.length + E.resourcesErrored.length === E.numResourcesToLoad && E.triggerPrint(U));
                  };
                  U.onload = function() {
                    var oe, be, Se, ye;
                    U.onload = null;
                    var fe = U.contentDocument || ((be = U.contentWindow) === null || be === void 0 ? void 0 : be.document);
                    if (fe) {
                      fe.body.appendChild(he), A && (!((Se = U.contentDocument) === null || Se === void 0) && Se.fonts && (!((ye = U.contentWindow) === null || ye === void 0) && ye.FontFace) ? A.forEach(function(Ze) {
                        var Ke = new FontFace(Ze.family, Ze.source, { weight: Ze.weight, style: Ze.style });
                        U.contentDocument.fonts.add(Ke), Ke.loaded.then(function() {
                          te(Ke);
                        }).catch(function(Ve) {
                          te(Ke, ["Failed loading the font:", Ke, "Load error:", Ve]);
                        });
                      }) : (A.forEach(function(Ze) {
                        return te(Ze);
                      }), E.logMessages(['"react-to-print" is not able to load custom fonts because the browser does not support the FontFace API but will continue attempting to print the page'])));
                      var Ce = typeof B == "function" ? B() : B;
                      if (typeof Ce != "string") E.logMessages(['"react-to-print" expected a "string" from `pageStyle` but received "'.concat(typeof Ce, '". Styles from `pageStyle` will not be applied.')]);
                      else {
                        var De = fe.createElement("style");
                        H && (De.setAttribute("nonce", H), fe.head.setAttribute("nonce", H)), De.appendChild(fe.createTextNode(Ce)), fe.head.appendChild(De);
                      }
                      if (P && (oe = fe.body.classList).add.apply(oe, m.__spreadArray([], m.__read(P.split(" ")), !1)), !ge) {
                        for (var W = ge ? [] : re.querySelectorAll("canvas"), z = fe.querySelectorAll("canvas"), $ = 0; $ < W.length; ++$) {
                          var D = W[$], G = z[$].getContext("2d");
                          G && G.drawImage(D, 0, 0);
                        }
                        var K = function(Ze) {
                          var Ke = le[Ze], Ve = Ke.getAttribute("src");
                          if (Ve) {
                            var Te = new Image();
                            Te.onload = function() {
                              return te(Ke);
                            }, Te.onerror = function(ie, tt, xt, ft, rt) {
                              return te(Ke, ["Error loading <img>", Ke, "Error", rt]);
                            }, Te.src = Ve;
                          } else te(Ke, ['Found an <img> tag with an empty "src" attribute. This prevents pre-loading it. The <img> is:', Ke]);
                        };
                        for ($ = 0; $ < le.length; $++) K($);
                        var se = function(Ze) {
                          var Ke = me[Ze];
                          Ke.preload = "auto";
                          var Ve = Ke.getAttribute("poster");
                          if (Ve) {
                            var Te = new Image();
                            Te.onload = function() {
                              return te(Ke);
                            }, Te.onerror = function(ie, tt, xt, ft, rt) {
                              return te(Ke, ["Error loading video poster", Ve, "for video", Ke, "Error:", rt]);
                            }, Te.src = Ve;
                          } else Ke.readyState >= 2 ? te(Ke) : (Ke.onloadeddata = function() {
                            return te(Ke);
                          }, Ke.onerror = function(ie, tt, xt, ft, rt) {
                            return te(Ke, ["Error loading video", Ke, "Error", rt]);
                          }, Ke.onstalled = function() {
                            return te(Ke, ["Loading video stalled, skipping", Ke]);
                          });
                        };
                        for ($ = 0; $ < me.length; $++) se($);
                        var Ie = "input", pe = re.querySelectorAll(Ie), Ee = fe.querySelectorAll(Ie);
                        for ($ = 0; $ < pe.length; $++) Ee[$].value = pe[$].value;
                        var de = "input[type=checkbox],input[type=radio]", q = re.querySelectorAll(de), ee = fe.querySelectorAll(de);
                        for ($ = 0; $ < q.length; $++) ee[$].checked = q[$].checked;
                        var we = "select", ke = re.querySelectorAll(we), Ae = fe.querySelectorAll(we);
                        for ($ = 0; $ < ke.length; $++) Ae[$].value = ke[$].value;
                      }
                      if (T) for (var je = document.querySelectorAll("style, link[rel~='stylesheet'], link[as='style']"), $e = function(Ze, Ke) {
                        var Ve = je[Ze];
                        if (Ve.tagName.toLowerCase() === "style") {
                          var Te = fe.createElement(Ve.tagName), ie = Ve.sheet;
                          if (ie) {
                            var tt = "";
                            try {
                              for (var xt = ie.cssRules.length, ft = 0; ft < xt; ++ft) typeof ie.cssRules[ft].cssText == "string" && (tt += "".concat(ie.cssRules[ft].cssText, `\r
`));
                            } catch {
                              E.logMessages(["A stylesheet could not be accessed. This is likely due to the stylesheet having cross-origin imports, and many browsers block script access to cross-origin stylesheets. See https://github.com/gregnb/react-to-print/issues/429 for details. You may be able to load the sheet by both marking the stylesheet with the cross `crossorigin` attribute, and setting the `Access-Control-Allow-Origin` header on the server serving the stylesheet. Alternatively, host the stylesheet on your domain to avoid this issue entirely.", Ve], "warning");
                            }
                            Te.setAttribute("id", "react-to-print-".concat(Ze)), H && Te.setAttribute("nonce", H), Te.appendChild(fe.createTextNode(tt)), fe.head.appendChild(Te);
                          }
                        } else if (Ve.getAttribute("href")) if (Ve.hasAttribute("disabled")) E.logMessages(["`react-to-print` encountered a <link> tag with a `disabled` attribute and will ignore it. Note that the `disabled` attribute is deprecated, and some browsers ignore it. You should stop using it. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link#attr-disabled. The <link> is:", Ve], "warning"), te(Ve);
                        else {
                          for (var rt = fe.createElement(Ve.tagName), Zt = (ft = 0, Ve.attributes.length); ft < Zt; ++ft) {
                            var Ue = Ve.attributes[ft];
                            Ue && rt.setAttribute(Ue.nodeName, Ue.nodeValue || "");
                          }
                          rt.onload = function() {
                            return te(rt);
                          }, rt.onerror = function($t, at, dn, Xn, la) {
                            return te(rt, ["Failed to load", rt, "Error:", la]);
                          }, H && rt.setAttribute("nonce", H), fe.head.appendChild(rt);
                        }
                        else E.logMessages(["`react-to-print` encountered a <link> tag with an empty `href` attribute. In addition to being invalid HTML, this can cause problems in many browsers, and so the <link> was not loaded. The <link> is:", Ve], "warning"), te(Ve);
                      }, et = ($ = 0, je.length); $ < et; ++$) $e($);
                    }
                    E.numResourcesToLoad !== 0 && T || E.triggerPrint(U);
                  }, E.handleRemoveIframe(!0), document.body.appendChild(U);
                } else E.logMessages(['"react-to-print" could not locate the DOM node corresponding with the `content` prop']);
              } else E.logMessages(['There is nothing to print because the "content" prop returned "null". Please ensure "content" is renderable before allowing "react-to-print" to be called.']);
              else E.logMessages(["To print a functional component ensure it is wrapped with `React.forwardRef`, and ensure the forwarded ref is used. See the README for an example: https://github.com/gregnb/react-to-print#examples"]);
            }, E.handleRemoveIframe = function(I) {
              var S = E.props.removeAfterPrint;
              if (I || S) {
                var P = document.getElementById("printWindow");
                P && document.body.removeChild(P);
              }
            }, E.logMessages = function(I, S) {
              S === void 0 && (S = "error"), E.props.suppressErrors || (S === "error" ? console.error(I) : S === "warning" ? console.warn(I) : S === "debug" && console.debug(I));
            }, E;
          }
          return m.__extends(F, k), F.prototype.handleClick = function(E, I) {
            var S = this, P = this.props, C = P.onBeforeGetContent, T = P.onPrintError;
            if (C) {
              var A = C();
              A && typeof A.then == "function" ? A.then(function() {
                return S.handlePrint(I);
              }).catch(function(B) {
                T && T("onBeforeGetContent", B);
              }) : this.handlePrint(I);
            } else this.handlePrint(I);
          }, F.prototype.render = function() {
            var E = this.props, I = E.children, S = E.trigger;
            if (S) return g.cloneElement(S(), { onClick: this.handleClick.bind(this) });
            if (!b.PrintContext) return this.logMessages(['"react-to-print" requires React ^16.3.0 to be able to use "PrintContext"']), null;
            var P = { handlePrint: this.handleClick.bind(this) };
            return g.createElement(b.PrintContext.Provider, { value: P }, I);
          }, F.defaultProps = _.defaultProps, F;
        }(g.Component);
        p.ReactToPrint = w;
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
        var m = h(316), g = h(496), y = h(428), b = h(940), _ = h(860), w = Object.prototype.hasOwnProperty.call(g, "useMemo") && Object.prototype.hasOwnProperty.call(g, "useCallback");
        p.useReactToPrint = function(k) {
          if (!w) return k.suppressErrors || console.error('"react-to-print" requires React ^16.8.0 to be able to use "useReactToPrint"'), function() {
            throw new Error('"react-to-print" requires React ^16.8.0 to be able to use "useReactToPrint"');
          };
          var F = g.useMemo(function() {
            return new y.ReactToPrint(m.__assign(m.__assign({}, b.defaultProps), k));
          }, [k]);
          return g.useCallback(function(E, I) {
            return (0, _.wrapCallbackWithArgs)(F, F.handleClick, I)(E);
          }, [F]);
        };
      }, 860: function(d, p, h) {
        Object.defineProperty(p, "__esModule", { value: !0 }), p.wrapCallbackWithArgs = void 0;
        var m = h(316);
        p.wrapCallbackWithArgs = function(g, y) {
          for (var b = [], _ = 2; _ < arguments.length; _++) b[_ - 2] = arguments[_];
          return function() {
            for (var w = [], k = 0; k < arguments.length; k++) w[k] = arguments[k];
            return y.apply(g, m.__spreadArray(m.__spreadArray([], m.__read(w), !1), m.__read(b), !1));
          };
        };
      }, 496: function(d) {
        d.exports = n;
      }, 190: function(d) {
        d.exports = r;
      }, 316: function(d, p, h) {
        h.r(p), h.d(p, { __addDisposableResource: function() {
          return fe;
        }, __assign: function() {
          return y;
        }, __asyncDelegator: function() {
          return Ne;
        }, __asyncGenerator: function() {
          return ge;
        }, __asyncValues: function() {
          return le;
        }, __await: function() {
          return he;
        }, __awaiter: function() {
          return P;
        }, __classPrivateFieldGet: function() {
          return be;
        }, __classPrivateFieldIn: function() {
          return ye;
        }, __classPrivateFieldSet: function() {
          return Se;
        }, __createBinding: function() {
          return T;
        }, __decorate: function() {
          return _;
        }, __disposeResources: function() {
          return De;
        }, __esDecorate: function() {
          return k;
        }, __exportStar: function() {
          return A;
        }, __extends: function() {
          return g;
        }, __generator: function() {
          return C;
        }, __importDefault: function() {
          return oe;
        }, __importStar: function() {
          return te;
        }, __makeTemplateObject: function() {
          return me;
        }, __metadata: function() {
          return S;
        }, __param: function() {
          return w;
        }, __propKey: function() {
          return E;
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
          return U;
        }, __values: function() {
          return B;
        } });
        var m = function(W, z) {
          return m = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function($, D) {
            $.__proto__ = D;
          } || function($, D) {
            for (var G in D) Object.prototype.hasOwnProperty.call(D, G) && ($[G] = D[G]);
          }, m(W, z);
        };
        function g(W, z) {
          if (typeof z != "function" && z !== null) throw new TypeError("Class extends value " + String(z) + " is not a constructor or null");
          function $() {
            this.constructor = W;
          }
          m(W, z), W.prototype = z === null ? Object.create(z) : ($.prototype = z.prototype, new $());
        }
        var y = function() {
          return y = Object.assign || function(W) {
            for (var z, $ = 1, D = arguments.length; $ < D; $++) for (var G in z = arguments[$]) Object.prototype.hasOwnProperty.call(z, G) && (W[G] = z[G]);
            return W;
          }, y.apply(this, arguments);
        };
        function b(W, z) {
          var $ = {};
          for (var D in W) Object.prototype.hasOwnProperty.call(W, D) && z.indexOf(D) < 0 && ($[D] = W[D]);
          if (W != null && typeof Object.getOwnPropertySymbols == "function") {
            var G = 0;
            for (D = Object.getOwnPropertySymbols(W); G < D.length; G++) z.indexOf(D[G]) < 0 && Object.prototype.propertyIsEnumerable.call(W, D[G]) && ($[D[G]] = W[D[G]]);
          }
          return $;
        }
        function _(W, z, $, D) {
          var G, K = arguments.length, se = K < 3 ? z : D === null ? D = Object.getOwnPropertyDescriptor(z, $) : D;
          if (typeof Reflect == "object" && typeof Reflect.decorate == "function") se = Reflect.decorate(W, z, $, D);
          else for (var Ie = W.length - 1; Ie >= 0; Ie--) (G = W[Ie]) && (se = (K < 3 ? G(se) : K > 3 ? G(z, $, se) : G(z, $)) || se);
          return K > 3 && se && Object.defineProperty(z, $, se), se;
        }
        function w(W, z) {
          return function($, D) {
            z($, D, W);
          };
        }
        function k(W, z, $, D, G, K) {
          function se($e) {
            if ($e !== void 0 && typeof $e != "function") throw new TypeError("Function expected");
            return $e;
          }
          for (var Ie, pe = D.kind, Ee = pe === "getter" ? "get" : pe === "setter" ? "set" : "value", de = !z && W ? D.static ? W : W.prototype : null, q = z || (de ? Object.getOwnPropertyDescriptor(de, D.name) : {}), ee = !1, we = $.length - 1; we >= 0; we--) {
            var ke = {};
            for (var Ae in D) ke[Ae] = Ae === "access" ? {} : D[Ae];
            for (var Ae in D.access) ke.access[Ae] = D.access[Ae];
            ke.addInitializer = function($e) {
              if (ee) throw new TypeError("Cannot add initializers after decoration has completed");
              K.push(se($e || null));
            };
            var je = (0, $[we])(pe === "accessor" ? { get: q.get, set: q.set } : q[Ee], ke);
            if (pe === "accessor") {
              if (je === void 0) continue;
              if (je === null || typeof je != "object") throw new TypeError("Object expected");
              (Ie = se(je.get)) && (q.get = Ie), (Ie = se(je.set)) && (q.set = Ie), (Ie = se(je.init)) && G.unshift(Ie);
            } else (Ie = se(je)) && (pe === "field" ? G.unshift(Ie) : q[Ee] = Ie);
          }
          de && Object.defineProperty(de, D.name, q), ee = !0;
        }
        function F(W, z, $) {
          for (var D = arguments.length > 2, G = 0; G < z.length; G++) $ = D ? z[G].call(W, $) : z[G].call(W);
          return D ? $ : void 0;
        }
        function E(W) {
          return typeof W == "symbol" ? W : "".concat(W);
        }
        function I(W, z, $) {
          return typeof z == "symbol" && (z = z.description ? "[".concat(z.description, "]") : ""), Object.defineProperty(W, "name", { configurable: !0, value: $ ? "".concat($, " ", z) : z });
        }
        function S(W, z) {
          if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(W, z);
        }
        function P(W, z, $, D) {
          return new ($ || ($ = Promise))(function(G, K) {
            function se(Ee) {
              try {
                pe(D.next(Ee));
              } catch (de) {
                K(de);
              }
            }
            function Ie(Ee) {
              try {
                pe(D.throw(Ee));
              } catch (de) {
                K(de);
              }
            }
            function pe(Ee) {
              var de;
              Ee.done ? G(Ee.value) : (de = Ee.value, de instanceof $ ? de : new $(function(q) {
                q(de);
              })).then(se, Ie);
            }
            pe((D = D.apply(W, z || [])).next());
          });
        }
        function C(W, z) {
          var $, D, G, K, se = { label: 0, sent: function() {
            if (1 & G[0]) throw G[1];
            return G[1];
          }, trys: [], ops: [] };
          return K = { next: Ie(0), throw: Ie(1), return: Ie(2) }, typeof Symbol == "function" && (K[Symbol.iterator] = function() {
            return this;
          }), K;
          function Ie(pe) {
            return function(Ee) {
              return function(de) {
                if ($) throw new TypeError("Generator is already executing.");
                for (; K && (K = 0, de[0] && (se = 0)), se; ) try {
                  if ($ = 1, D && (G = 2 & de[0] ? D.return : de[0] ? D.throw || ((G = D.return) && G.call(D), 0) : D.next) && !(G = G.call(D, de[1])).done) return G;
                  switch (D = 0, G && (de = [2 & de[0], G.value]), de[0]) {
                    case 0:
                    case 1:
                      G = de;
                      break;
                    case 4:
                      return se.label++, { value: de[1], done: !1 };
                    case 5:
                      se.label++, D = de[1], de = [0];
                      continue;
                    case 7:
                      de = se.ops.pop(), se.trys.pop();
                      continue;
                    default:
                      if (!((G = (G = se.trys).length > 0 && G[G.length - 1]) || de[0] !== 6 && de[0] !== 2)) {
                        se = 0;
                        continue;
                      }
                      if (de[0] === 3 && (!G || de[1] > G[0] && de[1] < G[3])) {
                        se.label = de[1];
                        break;
                      }
                      if (de[0] === 6 && se.label < G[1]) {
                        se.label = G[1], G = de;
                        break;
                      }
                      if (G && se.label < G[2]) {
                        se.label = G[2], se.ops.push(de);
                        break;
                      }
                      G[2] && se.ops.pop(), se.trys.pop();
                      continue;
                  }
                  de = z.call(W, se);
                } catch (q) {
                  de = [6, q], D = 0;
                } finally {
                  $ = G = 0;
                }
                if (5 & de[0]) throw de[1];
                return { value: de[0] ? de[1] : void 0, done: !0 };
              }([pe, Ee]);
            };
          }
        }
        var T = Object.create ? function(W, z, $, D) {
          D === void 0 && (D = $);
          var G = Object.getOwnPropertyDescriptor(z, $);
          G && !("get" in G ? !z.__esModule : G.writable || G.configurable) || (G = { enumerable: !0, get: function() {
            return z[$];
          } }), Object.defineProperty(W, D, G);
        } : function(W, z, $, D) {
          D === void 0 && (D = $), W[D] = z[$];
        };
        function A(W, z) {
          for (var $ in W) $ === "default" || Object.prototype.hasOwnProperty.call(z, $) || T(z, W, $);
        }
        function B(W) {
          var z = typeof Symbol == "function" && Symbol.iterator, $ = z && W[z], D = 0;
          if ($) return $.call(W);
          if (W && typeof W.length == "number") return { next: function() {
            return W && D >= W.length && (W = void 0), { value: W && W[D++], done: !W };
          } };
          throw new TypeError(z ? "Object is not iterable." : "Symbol.iterator is not defined.");
        }
        function H(W, z) {
          var $ = typeof Symbol == "function" && W[Symbol.iterator];
          if (!$) return W;
          var D, G, K = $.call(W), se = [];
          try {
            for (; (z === void 0 || z-- > 0) && !(D = K.next()).done; ) se.push(D.value);
          } catch (Ie) {
            G = { error: Ie };
          } finally {
            try {
              D && !D.done && ($ = K.return) && $.call(K);
            } finally {
              if (G) throw G.error;
            }
          }
          return se;
        }
        function ne() {
          for (var W = [], z = 0; z < arguments.length; z++) W = W.concat(H(arguments[z]));
          return W;
        }
        function U() {
          for (var W = 0, z = 0, $ = arguments.length; z < $; z++) W += arguments[z].length;
          var D = Array(W), G = 0;
          for (z = 0; z < $; z++) for (var K = arguments[z], se = 0, Ie = K.length; se < Ie; se++, G++) D[G] = K[se];
          return D;
        }
        function re(W, z, $) {
          if ($ || arguments.length === 2) for (var D, G = 0, K = z.length; G < K; G++) !D && G in z || (D || (D = Array.prototype.slice.call(z, 0, G)), D[G] = z[G]);
          return W.concat(D || Array.prototype.slice.call(z));
        }
        function he(W) {
          return this instanceof he ? (this.v = W, this) : new he(W);
        }
        function ge(W, z, $) {
          if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
          var D, G = $.apply(W, z || []), K = [];
          return D = {}, se("next"), se("throw"), se("return"), D[Symbol.asyncIterator] = function() {
            return this;
          }, D;
          function se(q) {
            G[q] && (D[q] = function(ee) {
              return new Promise(function(we, ke) {
                K.push([q, ee, we, ke]) > 1 || Ie(q, ee);
              });
            });
          }
          function Ie(q, ee) {
            try {
              (we = G[q](ee)).value instanceof he ? Promise.resolve(we.value.v).then(pe, Ee) : de(K[0][2], we);
            } catch (ke) {
              de(K[0][3], ke);
            }
            var we;
          }
          function pe(q) {
            Ie("next", q);
          }
          function Ee(q) {
            Ie("throw", q);
          }
          function de(q, ee) {
            q(ee), K.shift(), K.length && Ie(K[0][0], K[0][1]);
          }
        }
        function Ne(W) {
          var z, $;
          return z = {}, D("next"), D("throw", function(G) {
            throw G;
          }), D("return"), z[Symbol.iterator] = function() {
            return this;
          }, z;
          function D(G, K) {
            z[G] = W[G] ? function(se) {
              return ($ = !$) ? { value: he(W[G](se)), done: !1 } : K ? K(se) : se;
            } : K;
          }
        }
        function le(W) {
          if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
          var z, $ = W[Symbol.asyncIterator];
          return $ ? $.call(W) : (W = B(W), z = {}, D("next"), D("throw"), D("return"), z[Symbol.asyncIterator] = function() {
            return this;
          }, z);
          function D(G) {
            z[G] = W[G] && function(K) {
              return new Promise(function(se, Ie) {
                (function(pe, Ee, de, q) {
                  Promise.resolve(q).then(function(ee) {
                    pe({ value: ee, done: de });
                  }, Ee);
                })(se, Ie, (K = W[G](K)).done, K.value);
              });
            };
          }
        }
        function me(W, z) {
          return Object.defineProperty ? Object.defineProperty(W, "raw", { value: z }) : W.raw = z, W;
        }
        var X = Object.create ? function(W, z) {
          Object.defineProperty(W, "default", { enumerable: !0, value: z });
        } : function(W, z) {
          W.default = z;
        };
        function te(W) {
          if (W && W.__esModule) return W;
          var z = {};
          if (W != null) for (var $ in W) $ !== "default" && Object.prototype.hasOwnProperty.call(W, $) && T(z, W, $);
          return X(z, W), z;
        }
        function oe(W) {
          return W && W.__esModule ? W : { default: W };
        }
        function be(W, z, $, D) {
          if ($ === "a" && !D) throw new TypeError("Private accessor was defined without a getter");
          if (typeof z == "function" ? W !== z || !D : !z.has(W)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return $ === "m" ? D : $ === "a" ? D.call(W) : D ? D.value : z.get(W);
        }
        function Se(W, z, $, D, G) {
          if (D === "m") throw new TypeError("Private method is not writable");
          if (D === "a" && !G) throw new TypeError("Private accessor was defined without a setter");
          if (typeof z == "function" ? W !== z || !G : !z.has(W)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
          return D === "a" ? G.call(W, $) : G ? G.value = $ : z.set(W, $), $;
        }
        function ye(W, z) {
          if (z === null || typeof z != "object" && typeof z != "function") throw new TypeError("Cannot use 'in' operator on non-object");
          return typeof W == "function" ? z === W : W.has(z);
        }
        function fe(W, z, $) {
          if (z != null) {
            if (typeof z != "object" && typeof z != "function") throw new TypeError("Object expected.");
            var D;
            if ($) {
              if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
              D = z[Symbol.asyncDispose];
            }
            if (D === void 0) {
              if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
              D = z[Symbol.dispose];
            }
            if (typeof D != "function") throw new TypeError("Object not disposable.");
            W.stack.push({ value: z, dispose: D, async: $ });
          } else $ && W.stack.push({ async: !0 });
          return z;
        }
        var Ce = typeof SuppressedError == "function" ? SuppressedError : function(W, z, $) {
          var D = new Error($);
          return D.name = "SuppressedError", D.error = W, D.suppressed = z, D;
        };
        function De(W) {
          function z($) {
            W.error = W.hasError ? new Ce($, W.error, "An error was suppressed during disposal.") : $, W.hasError = !0;
          }
          return function $() {
            for (; W.stack.length; ) {
              var D = W.stack.pop();
              try {
                var G = D.dispose && D.dispose.call(D.value);
                if (D.async) return Promise.resolve(G).then($, function(K) {
                  return z(K), $();
                });
              } catch (K) {
                z(K);
              }
            }
            if (W.hasError) throw W.error;
          }();
        }
        p.default = { __extends: g, __assign: y, __rest: b, __decorate: _, __param: w, __metadata: S, __awaiter: P, __generator: C, __createBinding: T, __exportStar: A, __values: B, __read: H, __spread: ne, __spreadArrays: U, __spreadArray: re, __await: he, __asyncGenerator: ge, __asyncDelegator: Ne, __asyncValues: le, __makeTemplateObject: me, __importStar: te, __importDefault: oe, __classPrivateFieldGet: be, __classPrivateFieldSet: Se, __classPrivateFieldIn: ye, __addDisposableResource: fe, __disposeResources: De };
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
        var g = u(428);
        d.default = g.ReactToPrint;
      }(), c;
    }();
  });
})(XE);
var Tg = XE.exports;
const XY = () => /^((?!chrome|android).)*safari/i.test(navigator.userAgent), QE = (e) => Array.isArray(e) && e.every(
  (t) => typeof t == "object" && !(t instanceof Array)
), QY = (e) => Array.isArray(e) && e.every(
  (t) => Array.isArray(t)
), JY = (e) => Array.from(
  e.map((t) => Object.keys(t)).reduce((t, n) => /* @__PURE__ */ new Set([...t, ...n]), [])
), eq = (e, t) => {
  t = t || JY(e);
  let n = t, r = t;
  QE(t) && (n = t.map((s) => s.label), r = t.map((s) => s.key));
  const o = e.map((s) => r.map((u) => tq(u, s)));
  return [n, ...o];
}, tq = (e, t) => {
  const n = e.replace(/\[([^\]]+)]/g, ".$1").split(".").reduce(function(r, o, s, u) {
    const c = r[o];
    if (c == null)
      u.splice(1);
    else
      return c;
  }, t);
  return n === void 0 ? e in t ? t[e] : "" : n;
}, nq = (e) => typeof e > "u" || e === null ? "" : e, JE = (e, t = ",", n = '"') => e.filter((r) => r).map(
  (r) => r.map((o) => nq(o)).map((o) => `${n}${o}${n}`).join(t)
).join(`
`), rq = (e, t, n, r) => JE(t ? [t, ...e] : e, n, r), aq = (e, t, n, r) => JE(eq(e, t), n, r), oq = (e, t, n, r) => t ? `${t.join(n)}
${e}` : e.replace(/"/g, '""'), eC = (e, t, n, r) => {
  if (QE(e)) return aq(e, t, n, r);
  if (QY(e)) return rq(e, t, n, r);
  if (typeof e == "string") return oq(e, t, n);
  throw new TypeError('Data should be a "String", "Array of arrays" OR "Array of objects" ');
}, tC = (e, t, n, r, o) => {
  const s = eC(e, n, r, o), u = XY() ? "application/csv" : "text/csv", c = new Blob([t ? "\uFEFF" : "", s], { type: u }), d = `data:${u};charset=utf-8,${t ? "\uFEFF" : ""}${s}`, p = window.URL || window.webkitURL;
  return typeof p.createObjectURL > "u" ? d : p.createObjectURL(c);
}, nC = {
  data: nr.oneOfType([nr.string, nr.array, nr.func]).isRequired,
  headers: nr.array,
  target: nr.string,
  separator: nr.string,
  filename: nr.string,
  uFEFF: nr.bool,
  onClick: nr.func,
  asyncOnClick: nr.bool,
  enclosingCharacter: nr.string
}, rC = {
  separator: ",",
  filename: "generatedBy_react-csv.csv",
  uFEFF: !0,
  asyncOnClick: !1,
  enclosingCharacter: '"'
}, iq = {
  target: "_blank"
};
class T_ extends J.Component {
  constructor(t) {
    super(t), this.state = {};
  }
  buildURI() {
    return tC(...arguments);
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
pl(T_, "defaultProps", Object.assign(
  rC,
  iq
)), pl(T_, "propTypes", nC);
var Au;
let sq = (Au = class extends J.Component {
  constructor(t) {
    super(t), this.buildURI = this.buildURI.bind(this);
  }
  buildURI() {
    return tC(...arguments);
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
      let h = new Blob([d ? "\uFEFF" : "", eC(p, o, s, c)]);
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
    } = this.props, g = typeof window > "u" ? "" : this.buildURI(t, s, n, r, p);
    return /* @__PURE__ */ O(
      "a",
      {
        download: o,
        ...h,
        ref: (y) => this.link = y,
        target: "_self",
        href: g,
        onClick: this.handleClick(),
        children: u
      }
    );
  }
}, pl(Au, "defaultProps", rC), pl(Au, "propTypes", nC), Au);
const lq = sq, cq = "_input_1q0yw_1", uq = "_clearIcon_1q0yw_9", dq = "_clearIconFocused_1q0yw_21", fq = "_clearIconLast_1q0yw_33", pq = "_clearIconLastFocused_1q0yw_47", hq = "_clearRoundedIconLast_1q0yw_61", mq = "_clearRoundedIconLastFocused_1q0yw_79", za = {
  input: cq,
  clearIcon: uq,
  clearIconFocused: dq,
  clearIconLast: fq,
  clearIconLastFocused: pq,
  clearRoundedIconLast: hq,
  clearRoundedIconLastFocused: mq
}, hd = pc((e, t) => {
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
    onKeyPress: g,
    onClear: y,
    dropdown: b,
    dropdownPosition: _ = "left",
    // nueva prop (default left)
    required: w = !1,
    fluid: k = !0,
    type: F = "text"
  } = e, E = Nn(null), [I, S] = ot(!1), [P, C] = ot(n ? "password" : "text"), [T, A] = ot("eye slash");
  Vt(() => {
    h ? R.isEmpty(o) || p ? ((t || E).current.style.removeProperty("border-top-left-radius"), (t || E).current.style.removeProperty("border-bottom-left-radius"), (t || E).current.style.removeProperty("border-top-right-radius"), (t || E).current.style.removeProperty("border-bottom-right-radius"), (t || E).current.style.removeProperty("border-right"), n ? ((t || E).current.style.setProperty("border-top-left-radius", "1rem", "important"), (t || E).current.style.setProperty("border-bottom-left-radius", "1rem", "important")) : ((t || E).current.style.setProperty("border-radius", "1rem", "important"), (t || E).current.style.setProperty(
      "border-right",
      `1px solid ${I ? "var(--inputFocus)" : "var(--inputShader)"}`,
      "important"
    ))) : ((t || E).current.style.removeProperty("border-radius"), (t || E).current.style.setProperty("border-top-left-radius", "1rem", "important"), (t || E).current.style.setProperty("border-bottom-left-radius", "1rem", "important"), (t || E).current.style.setProperty("border-top-right-radius", "0", "important"), (t || E).current.style.setProperty("border-bottom-right-radius", "0", "important"), (t || E).current.style.setProperty("border-right", "0", "important")) : R.isEmpty(o) || p ? ((t || E).current.style.setProperty("border-radius", "0.25rem", "important"), n ? ((t || E).current.style.setProperty("border-right", "0", "important"), (t || E).current.style.setProperty("border-top-right-radius", "0", "important"), (t || E).current.style.setProperty("border-bottom-right-radius", "0", "important")) : (t || E).current.style.setProperty(
      "border-right",
      `1px solid ${I ? "var(--inputFocus)" : "var(--inputShader)"}`,
      "important"
    )) : ((t || E).current.style.setProperty("border-right", "0", "important"), (t || E).current.style.setProperty("border-top-right-radius", "0", "important"), (t || E).current.style.setProperty("border-bottom-right-radius", "0", "important")), R.isEmpty(b) || (_ === "left" ? ((t || E).current.style.setProperty("border-top-left-radius", "0", "important"), (t || E).current.style.setProperty("border-bottom-left-radius", "0", "important"), (t || E).current.style.setProperty("border-left-color", "transparent", "important")) : _ === "right" && ((t || E).current.style.setProperty("border-top-right-radius", "0", "important"), (t || E).current.style.setProperty("border-bottom-right-radius", "0", "important"), (t || E).current.style.setProperty("border-right-color", "transparent", "important"), (t || E).current.style.setProperty("border-top-left-radius", "0.25rem", "important"), (t || E).current.style.setProperty("border-bottom-left-radius", "0.25rem", "important"), (t || E).current.style.setProperty(
      "border-left",
      `1px solid ${I ? "var(--inputFocus)" : "var(--inputShader)"}`,
      "important"
    )));
  }, [o, I, b, n, p, h, t, E]);
  const B = (me) => {
    if (!R.isEmpty(o)) {
      const X = { name: r, value: o.trim() };
      m({ ...me, target: X }, X);
    }
  }, H = (me) => {
    const { key: X } = me;
    X === "Enter" && (me.preventDefault(), B(me), g && g(me));
  }, ne = () => {
    const me = P === "password", X = me ? "text" : "password", te = me ? "eye" : "eye slash";
    C(X), A(te);
  }, U = (me) => {
    const X = { name: r, value: "" };
    e.fieldIndex !== void 0 && (X.fieldIndex = e.fieldIndex), e.id !== void 0 && (X.id = e.id), m({ ...me, target: X }, X), y && y();
  }, re = () => {
    S(!0);
  }, he = (me) => {
    B(me), S(!1);
  }, ge = () => n ? I ? za.clearIconFocused : za.clearIcon : h ? I ? za.clearRoundedIconLastFocused : za.clearRoundedIconLast : I ? za.clearIconLastFocused : za.clearIconLast, Ne = R.omit(e, [
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
  ]), le = n || !R.isEmpty(u);
  return /* @__PURE__ */ ae(
    Mn.Input,
    {
      ...Ne,
      className: `${za.input} ${s || ""}`,
      disabled: p,
      onChange: m,
      name: r,
      required: w,
      label: c,
      placeholder: R.isEmpty(d) ? c : d,
      value: o,
      type: n ? P : F,
      ...le ? { iconPosition: "left" } : {},
      autoComplete: "off",
      fluid: k,
      onFocus: re,
      onBlur: he,
      onKeyPress: H,
      action: !0,
      children: [
        _ === "left" && !R.isEmpty(b) && /* @__PURE__ */ O(Wr, { labeled: !0, ...b }),
        le && /* @__PURE__ */ O(We, { name: n ? "lock" : u }),
        /* @__PURE__ */ O("input", { ref: t || E }),
        _ === "right" ? /* @__PURE__ */ ae(Ca, { children: [
          !R.isEmpty(o) && !p && /* @__PURE__ */ O(gt, { className: ge(), icon: "cancel", onClick: U, tabIndex: -1 }),
          !R.isEmpty(b) && /* @__PURE__ */ O(Wr, { labeled: !0, ...b })
        ] }) : !R.isEmpty(o) && !p && /* @__PURE__ */ O(gt, { className: ge(), icon: "cancel", onClick: U, tabIndex: -1 }),
        n && /* @__PURE__ */ O(
          gt,
          {
            className: h ? za.clearRoundedIconLast : za.clearIconLast,
            icon: T,
            onClick: ne,
            tabIndex: -1
          }
        )
      ]
    }
  );
});
hd.propTypes = {
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
const gq = "_container_1uh18_1", vq = "_containerUser_1uh18_11", yq = "_containerLeft_1uh18_19", bq = "_containerRight_1uh18_25", _q = "_headerTitle_1uh18_39", wq = "_containerCenter_1uh18_49", xq = "_tableContainer_1uh18_61", Ua = {
  container: gq,
  containerUser: vq,
  containerLeft: yq,
  containerRight: bq,
  headerTitle: _q,
  containerCenter: wq,
  tableContainer: xq
}, aC = ({
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
  return /* @__PURE__ */ ae("div", { className: Ua.container, children: [
    /* @__PURE__ */ O("style", { children: m() }),
    /* @__PURE__ */ O("div", { className: Ua.containerCenter, children: R.isEmpty(h) ? /* @__PURE__ */ ae(Vn, { as: "h2", icon: !0, children: [
      /* @__PURE__ */ O("span", { children: o.company }),
      /* @__PURE__ */ O(Vn.Subheader, { children: o.title })
    ] }) : h }),
    /* @__PURE__ */ ae("div", { className: Ua.containerUser, children: [
      /* @__PURE__ */ ae("div", { className: Ua.containerLeft, children: [
        /* @__PURE__ */ ae("div", { children: [
          /* @__PURE__ */ O("span", { className: Ua.headerTitle, children: "Usuario:" }),
          o.user
        ] }),
        /* @__PURE__ */ ae("div", { children: [
          /* @__PURE__ */ O("span", { className: Ua.headerTitle, children: "Fecha:" }),
          Mr(String(/* @__PURE__ */ new Date()), !1, !1, !0)
        ] })
      ] }),
      /* @__PURE__ */ ae("div", { className: Ua.containerRight, children: [
        /* @__PURE__ */ O("span", { className: Ua.headerTitle, children: "Total de filas:" }),
        !R.isEmpty(e) && e.length
      ] })
    ] }),
    /* @__PURE__ */ O("div", { className: Ua.tableContainer, children: /* @__PURE__ */ ae(Et, { sortable: !0, celled: !0, striped: !0, children: [
      /* @__PURE__ */ O(Jm, { isPDF: !0, columns: t, searchParams: s, setSearchParams: u, dataHandler: c }),
      /* @__PURE__ */ O(
        pd,
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
aC.propTypes = {
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
const Eq = "_container_17awp_1", Cq = "_input1_17awp_9", Oq = "_input2_17awp_15", Kp = {
  container: Eq,
  input1: Cq,
  input2: Oq
}, oC = ({ label: e, value: t, onChange: n }) => {
  const [r, o] = ot(""), [s, u] = ot("");
  Vt(() => {
    if (R.isEmpty(t))
      o(""), u("");
    else {
      const d = t.split(",");
      o(d[0]), u(d[1]);
    }
  }, [t]);
  const c = (d) => {
    const p = R.get(d, "target.value", ""), h = R.get(d, "target.name", "");
    let m = r, g = s;
    switch (h) {
      case "date1":
        m = p;
        break;
      case "date2":
        g = p;
        break;
    }
    let y = "";
    (!R.isEmpty(m) || !R.isEmpty(g)) && (y = `${m},${g}`), n(y);
  };
  return /* @__PURE__ */ ae("div", { className: Kp.container, children: [
    /* @__PURE__ */ O("div", { className: Kp.input1, children: /* @__PURE__ */ O(
      Mn.Input,
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
    /* @__PURE__ */ O("div", { className: Kp.input2, children: /* @__PURE__ */ O(
      Mn.Input,
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
oC.propTypes = {
  label: l.string,
  value: l.string,
  /* 	className: PropTypes.string, */
  onChange: l.func
};
const Sq = "_modal_16365_1", Tq = "_modalHeader_16365_45", Pq = "_modalFooter_16365_59", kq = "_inputChannel_16365_77", Nq = "_positiveButton_16365_111", Iq = "_negativeButton_16365_141", Aq = "_gridColumnLeft_16365_183", Rq = "_gridColumnRight_16365_195", ha = {
  modal: Sq,
  modalHeader: Tq,
  modalFooter: Pq,
  inputChannel: kq,
  positiveButton: Nq,
  negativeButton: Iq,
  gridColumnLeft: Aq,
  gridColumnRight: Rq
}, iC = ({
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
  const h = (_, w) => {
    const k = R.get(_, "target.value", "");
    u({
      ...s,
      [w]: k
    });
  }, m = (_, w) => {
    u({
      ...s,
      [w]: _
    });
  }, g = ({ key: _, label: w, format: k }) => {
    const F = _.split(",").join(".");
    switch (k) {
      case "dateTime":
      case "date":
        return /* @__PURE__ */ O(
          oC,
          {
            label: w,
            value: R.get(s, `${F}`, ""),
            className: ha.inputChannel,
            onChange: (E) => {
              m(E, F);
            }
          },
          F
        );
      default:
        return /* @__PURE__ */ O(
          hd,
          {
            icon: "filter",
            label: w,
            required: !0,
            placeholder: "Filtrar...",
            value: R.get(s, `${F}`, ""),
            fluid: !0,
            className: ha.inputChannel,
            onChange: (E) => {
              h(E, F);
            }
          },
          F
        );
    }
  }, y = () => {
    let _ = 1, w = [], k = [], F = "", I = [...t, ...p].map((S) => {
      let P = [];
      return R.get(S, "multipleColumns", !1) ? (S.multipleColumns.forEach((C) => {
        F = Ro(C.key), P = [...P, { ...C, key: F }];
      }), P) : (F = Ro(S.key), { ...S, key: F });
    });
    return I = R.flatten(I), I.forEach((S) => {
      _ += 1, (_ + 1) % 2 === 0 ? k = [...k, g(S)] : w = [...w, g(S)];
    }), /* @__PURE__ */ ae(Ai, { columns: 2, children: [
      /* @__PURE__ */ O(Qa, { className: ha.gridColumnLeft, children: w }),
      /* @__PURE__ */ O(Qa, { className: ha.gridColumnRight, children: k })
    ] });
  }, b = () => {
    let _ = !1, w = {};
    if (Object.entries(s).forEach(([k, F]) => {
      R.isEmpty(F) || (_ = !0, w = { ...w, [k]: F });
    }), _) {
      const F = { ...R.pick(n, ["rows", "orderKey", "orderDir"]), page: 1, ...w };
      c(!0), r(F), o(F), e();
    }
  };
  return /* @__PURE__ */ ae(un, { className: ha.modal, open: !0, closeIcon: !0, onClose: e, children: [
    /* @__PURE__ */ O(un.Header, { className: ha.modalHeader, children: /* @__PURE__ */ ae("div", { children: [
      /* @__PURE__ */ O(We, { name: "filter" }),
      "Filtro Avanzado"
    ] }) }),
    /* @__PURE__ */ O(un.Content, { scrolling: !0, children: y() }),
    /* @__PURE__ */ ae(un.Actions, { className: ha.modalFooter, children: [
      /* @__PURE__ */ ae(gt, { className: ha.negativeButton, onClick: d, children: [
        /* @__PURE__ */ O(We, { name: "filter" }),
        "Limpiar"
      ] }),
      /* @__PURE__ */ ae("div", { children: [
        /* @__PURE__ */ O(gt, { className: ha.negativeButton, onClick: e, children: "Atrás" }),
        /* @__PURE__ */ O(gt, { className: ha.positiveButton, onClick: b, children: "Filtrar" })
      ] })
    ] })
  ] });
};
iC.propTypes = {
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
const Zp = (e, t, n, r, o, s, u, c) => {
  switch (e) {
    case "timeBetween":
      return Cx(t, r);
    case "date":
      return Mr(t, !1, !1, !1);
    case "time":
      return Mr(t, !1, !0, !1);
    case "dateTimeBar":
    case "dateTime":
      return Mr(t, !1, !1, !0);
    case "count":
      return t ? t.length : 0;
    case "boolean":
      return u ? t ? u.true : u.false : t ? "si" : "no";
    case "translate":
      return Tl(t, s);
    case "arrayTruncate":
      if (c && typeof c.key == "string" && R.includes(c.key, "[]?")) {
        const [d, p] = R.replace(c.key, "[]?", "").split("."), h = Array.isArray(n[d]) ? n[d] : [], m = R.map(h, (g) => g && g[p]);
        return R.join(R.filter(m, Boolean), ", ");
      }
      return Array.isArray(t) ? R.join(R.filter(t, Boolean), ", ") : t;
    default:
      return t;
  }
}, P_ = (e) => e && e.key ? `${e.key.split(".").join("")}_${e.format || ""}_${e.label || ""}` : null;
function Mq(e, t, n) {
  let r = e, o = t;
  if (!R.isEmpty(n)) {
    const d = R.map(e, (p) => {
      const h = { [n.headerTitle]: qt(n.headerTitle, p) };
      return R.map(qt(n.dataDetail, p), (g) => ({ ...h, ...g }));
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
        h.format === "timeBetween" && h.endDateKey ? m = qt(h.endDateKey, d) : m && typeof m == "string" && (m = qt(m, d));
        let g = "";
        const y = P_(h), b = h.key.split(",");
        if (b.length === 1)
          g = qt(h.key, d), h.format === "dateTimeBar" && (g = qt(h.endDateKey, d)), g = Zp(
            h.format,
            g,
            d,
            m,
            h.onKeyEndDate,
            h.translate,
            h.boolLabels,
            h
          ), p = { ...p, [y]: g };
        else {
          const _ = qt(b[0], d);
          for (const w of _)
            if (g === "")
              g = qt(b[1], w), g = Zp(
                h.format,
                g,
                w,
                m,
                h.onKeyEndDate,
                h.translate,
                h.boolLabels,
                h
              ), (g == null || g === "") && (g = "null");
            else {
              let k = qt(b[1], w);
              k = Zp(
                h.format,
                k,
                w,
                m,
                h.onKeyEndDate,
                h.translate,
                h.boolLabels,
                h
              ), (k == null || k === "") && (k = "null"), g = `${g}, ${k}`;
            }
          p = { ...p, [y]: g };
        }
      }
    s = [...s, p];
  }
  for (const d of c)
    d.key && R.get(d, "canExcel", !0) && (u = [...u, d]);
  return u = R.map(u, (d) => ({ label: d.label, key: P_(d) })), { dataExel: s, columnExel: u };
}
const Dq = "_mainContainer_4n1za_1", Lq = "_searchContainer_4n1za_19", Fq = "_searchInput_4n1za_89", $q = "_searchWrapper_4n1za_99", Bq = "_filterButton_4n1za_129", jq = "_addButton_4n1za_159", Wq = "_defaultTopButton_4n1za_191", zq = "_printButton_4n1za_205", Uq = "_exelButton_4n1za_219", Hq = "_clearButton_4n1za_241", Yq = "_defaultTopInputContainerStyle_4n1za_255", qq = "_defaultTopDropdownContainerStyle_4n1za_267", Vq = "_defaultLabelContainerStyle_4n1za_277", Gq = "_topInputLabel_4n1za_287", Kq = "_renderTopButtonsContainer_4n1za_299", Zq = "_inputLabelCheck_4n1za_313", Xq = "_labelCheck_4n1za_321", Qq = "_addButtonContainer_4n1za_331", Jq = "_addButtonsContainer_4n1za_343", eV = "_topButtonsDesktop_4n1za_359", tV = "_secondLine_4n1za_373", nV = "_hidePrintButtonsMobile_4n1za_389", rV = "_addButtonIcon_4n1za_553", aV = "_hideOnMobile_4n1za_595", St = {
  mainContainer: Dq,
  searchContainer: Lq,
  searchInput: Fq,
  searchWrapper: $q,
  filterButton: Bq,
  addButton: jq,
  defaultTopButton: Wq,
  printButton: zq,
  exelButton: Uq,
  clearButton: Hq,
  defaultTopInputContainerStyle: Yq,
  defaultTopDropdownContainerStyle: qq,
  defaultLabelContainerStyle: Vq,
  topInputLabel: Gq,
  renderTopButtonsContainer: Kq,
  inputLabelCheck: Zq,
  labelCheck: Xq,
  addButtonContainer: Qq,
  addButtonsContainer: Jq,
  topButtonsDesktop: eV,
  secondLine: tV,
  hidePrintButtonsMobile: nV,
  addButtonIcon: rV,
  hideOnMobile: aV
}, sC = ({
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
  totalRows: g,
  customSearchKeys: y,
  clickedRowColor: b,
  sumData: _,
  isClearButton: w,
  setIsClearButton: k,
  headerDetail: F,
  searchRefresh: E,
  topPlaceClassName: I,
  hidePrintButtons: S = !1
}) => {
  const [P, C] = ot(""), [T, A] = ot([]), [B, H] = ot("all"), [ne, U] = ot(!1), [re, he] = ot([]), [ge, Ne] = ot([]), [le, me] = ot(!1), [X, te] = ot(!1), [oe, be] = ot({}), [Se, ye] = ot(!1), fe = Nn(), Ce = Nn();
  Vt(() => {
    if (X) {
      const de = Mq(m, n, F);
      he(de.dataExel), Ne(de.columnExel);
    }
    le && setTimeout(() => {
      De(), me(!1);
    });
  }, [m]), Vt(() => {
    !R.isEmpty(re) && !R.isEmpty(ge) && Ce.current && Ce.current.link && X && setTimeout(() => {
      Ce.current.link.click(), te(!1);
    });
  }, [re, ge]), Vt(() => {
    const de = D();
    ye([...de, ...y]);
    let q = Nz([...de, ...y], "label", "key");
    t.allEnabled && (q = [{ key: 0, text: "Todos", value: "all" }, ...q]), A(q), R.isEmpty(t.searchString) || (C(t.searchString), $({
      newField: t.field || "all",
      searchableI: de,
      newSearchQuery: t.searchString
    })), R.isEmpty(t.field) || H(t.field);
  }, [n, y]), Vt(() => {
    C(R.isEmpty(t.searchString) ? "" : t.searchString), H(R.isEmpty(t.field) ? "all" : t.field);
  }, [E]);
  const De = Tg.useReactToPrint({
    content: () => fe.current
  }), W = () => {
    if (typeof R.get(e, "onPrint", null) == "function")
      return e.onPrint();
    h({ ...d, rows: g, page: 1 }, !0), me(!0);
  }, z = () => {
    h({ ...d, rows: g, page: 1 }, !0), te(!0);
  }, $ = ({ value: de = d, newField: q = B, searchableI: ee = !1, newSearchQuery: we = P }) => {
    let ke = Se;
    ee && (ke = ee);
    const Ae = R.pick(d, ["rows", "orderKey", "orderDir"]), je = Ro(q);
    let $e = ke.map((Ze) => {
      let Ke = [], Ve = "";
      return R.get(Ze, "multipleColumns", !1) ? (Ze.multipleColumns.forEach((Te) => {
        Ve = Ro(Te.fieldKey || Te.key), Ke = [...Ke, Ve];
      }), Ke) : (Ve = Ro(Ze.fieldKey || Ze.key), Ve);
    });
    $e = R.flatten($e);
    let et = {
      ...Ae,
      page: 1,
      fields: $e
    };
    R.isEmpty(we) || (et = {
      ...et,
      [je]: we
    }), R.isEmpty(de) && (et = { ...Ae, page: 1, fields: $e }), p(et), h(et);
  }, D = () => {
    let de = [];
    return n.forEach((q) => {
      !q.hidden && !q.action && !q.multiple && (q.twoLines ? (R.get(q.line1, "canFilter", !0) && (de = [...de, q.line1]), R.get(q.line2, "canFilter", !0) && (de = [...de, q.line2])) : R.get(q, "canFilter", !0) && (de = [...de, q]));
    }), de;
  }, G = () => {
    $({});
  }, K = Jp(R.debounce(G, 1e3), [P]), se = () => {
    let de = null;
    return R.isEmpty(u) || (de = R.map(u, (q, ee) => {
      switch (q.componentType) {
        case "input":
          return /* @__PURE__ */ ae(
            "div",
            {
              className: R.isEmpty(q.inputContainerStyle) ? St.defaultTopInputContainerStyle : q.inputContainerStyle,
              children: [
                /* @__PURE__ */ O("span", { className: St.topInputLabel, children: q.label }),
                /* @__PURE__ */ O(
                  hd,
                  {
                    className: q.className,
                    type: q.type,
                    value: q.value,
                    icon: q.icon,
                    disabled: q.disabled,
                    fluid: q.fluid,
                    onChange: q.onChange
                  }
                )
              ]
            },
            ee
          );
        case "inputMonth":
          return /* @__PURE__ */ ae(
            "div",
            {
              className: R.isEmpty(q.inputContainerStyle) ? St.defaultTopInputContainerStyle : q.inputContainerStyle,
              children: [
                /* @__PURE__ */ O("span", { className: St.topInputLabel, children: q.label }),
                /* @__PURE__ */ O(
                  Mn.Input,
                  {
                    className: q.className,
                    type: q.type,
                    value: q.value,
                    icon: q.icon,
                    disabled: q.disabled,
                    fluid: q.fluid,
                    onChange: q.onChange
                  }
                )
              ]
            },
            ee
          );
        case "check":
          return /* @__PURE__ */ ae(
            "div",
            {
              className: R.isEmpty(q.checkContainerStyle) ? St.defaultTopInputContainerStyle : q.checkContainerStyle,
              children: [
                /* @__PURE__ */ O("span", { className: St.labelCheck, children: q.leftLabel }),
                /* @__PURE__ */ O(Kn, { toggle: q.toggle !== !1, checked: q.checked, disabled: q.disabled, onChange: q.onChange }),
                /* @__PURE__ */ O("span", { className: St.inputLabelCheck, children: q.rightLabel })
              ]
            },
            ee
          );
        case "radio":
          return /* @__PURE__ */ ae(
            "div",
            {
              className: R.isEmpty(q.checkContainerStyle) ? St.defaultTopInputContainerStyle : q.checkContainerStyle,
              children: [
                /* @__PURE__ */ ae("div", { children: [
                  /* @__PURE__ */ O(
                    Bo,
                    {
                      checked: q.checkedR,
                      disabled: q.disabled,
                      onChange: q.onChange
                    }
                  ),
                  /* @__PURE__ */ O("span", { className: St.inputLabelCheck, children: q.rightLabel })
                ] }),
                /* @__PURE__ */ ae("div", { children: [
                  /* @__PURE__ */ O(
                    Bo,
                    {
                      checked: q.checkedL,
                      disabled: q.disabled,
                      onChange: q.onChange
                    }
                  ),
                  /* @__PURE__ */ O("span", { className: St.inputLabelCheck, children: q.leftLabel })
                ] })
              ]
            },
            ee
          );
        case "DropDown":
          return !q.hidden && /* @__PURE__ */ ae(
            "div",
            {
              className: R.isEmpty(q.inputContainerStyle) ? St.defaultTopDropdownContainerStyle : q.inputContainerStyle,
              children: [
                /* @__PURE__ */ O("span", { className: St.topInputLabel, children: q.label }),
                /* @__PURE__ */ O(
                  On,
                  {
                    className: q.className,
                    selection: !0,
                    fluid: !0,
                    value: q.value,
                    multiple: q.multiple,
                    disabled: q.disabled,
                    onChange: q.onChange,
                    required: q.required,
                    search: q.search,
                    clearable: q.clearable,
                    placeholder: q.placeholder,
                    options: q.options
                  }
                )
              ]
            },
            ee
          );
        case "Label":
          return /* @__PURE__ */ ae(
            "div",
            {
              className: R.isEmpty(q.inputContainerStyle) ? St.defaultLabelContainerStyle : q.inputContainerStyle,
              children: [
                /* @__PURE__ */ O("span", { className: St.labelTitle, children: q.title }),
                /* @__PURE__ */ O("span", { className: St.labelValue, children: q.value })
              ]
            },
            ee
          );
        case "custom":
          return /* @__PURE__ */ O("div", { children: q.content }, ee);
        default:
          return /* @__PURE__ */ O(
            "div",
            {
              className: R.isEmpty(q.buttonContainerStyle) ? St.defaultLabelContainerStyle : q.buttonContainerStyle,
              children: /* @__PURE__ */ ae(
                gt,
                {
                  className: R.isEmpty(q.className) ? St.defaultTopButton : q.className,
                  disabled: R.get(q, "disabled", !1),
                  onClick: q.onClick,
                  children: [
                    !R.isEmpty(q.icon) && /* @__PURE__ */ O(We, { className: St.addButtonIcon, name: q.icon }),
                    R.get(q, "content", "")
                  ]
                },
                ee
              )
            },
            ee
          );
      }
    })), /* @__PURE__ */ O("div", { className: St.renderTopButtonsContainer, children: de });
  }, Ie = () => {
    G(), be({}), k(!1);
  }, pe = () => {
    $({ value: {} });
  }, Ee = (de) => {
    K.cancel(), C(de);
  };
  return /* @__PURE__ */ ae(Ca, { children: [
    /* @__PURE__ */ ae("div", { className: I ? `${St.mainContainer} ${I}` : St.mainContainer, children: [
      R.get(t, "searchable", !0) && /* @__PURE__ */ O(
        "div",
        {
          className: St.searchContainer,
          style: {
            justifyContent: R.get(t, "searchPosition", "flex-start"),
            width: R.get(t, "width", "100%")
          },
          children: /* @__PURE__ */ ae("div", { className: St.searchWrapper, children: [
            !w && /* @__PURE__ */ O(
              hd,
              {
                className: St.searchInput,
                name: "searchString",
                disabled: R.get(t, "searchDisabled", !1),
                onKeyUp: K,
                onChange: (de) => {
                  Ee(de.target.value);
                },
                placeholder: "Buscar",
                value: P,
                onClear: pe,
                dropdown: {
                  disabled: R.get(t, "searchDisabled", !1),
                  options: T,
                  name: "searchField",
                  onChange: (de, { value: q }) => {
                    H(q), R.isEmpty(P) || $({ newField: q });
                  },
                  value: B
                }
              }
            ),
            R.get(t, "filterButton", !0) && /* @__PURE__ */ O(
              gt,
              {
                disabled: R.get(t, "searchDisabled", !1),
                className: `${St.filterButton} ${R.get(t, "hideOnMobile", !1) ? St.hideOnMobile : ""}`,
                onClick: () => {
                  U(!0);
                },
                children: /* @__PURE__ */ O(We, { className: St.addButtonIcon, name: "filter" })
              }
            ),
            w && /* @__PURE__ */ ae(gt, { className: St.clearButton, onClick: Ie, children: [
              /* @__PURE__ */ O(We, { name: "filter" }),
              "Limpiar"
            ] })
          ] })
        }
      ),
      !R.isEmpty(u) && /* @__PURE__ */ O("div", { className: St.topButtonsDesktop, children: se() }),
      /* @__PURE__ */ ae("div", { className: St.addButtonsContainer, children: [
        !R.isEmpty(r) && /* @__PURE__ */ O("div", { className: St.addButtonContainer, children: /* @__PURE__ */ ae(
          gt,
          {
            className: St.addButton,
            disabled: R.get(r, "disabled", !1),
            onClick: s || (() => c("Add", null)),
            children: [
              /* @__PURE__ */ O(We, { className: St.addButtonIcon, name: R.get(r, "icon", "plus") }),
              R.get(r, "label", "")
            ]
          }
        ) }),
        o,
        R.get(e, "printable", !0) && /* @__PURE__ */ ae("div", { className: S ? St.hidePrintButtonsMobile : "", children: [
          R.get(e, "visiblePDF", !0) && /* @__PURE__ */ O(gt, { onClick: W, className: St.printButton, primary: !0, icon: "print" }),
          R.get(e, "visibleExcel", !0) && /* @__PURE__ */ O(gt, { className: St.exelButton, icon: "file excel", onClick: z })
        ] })
      ] })
    ] }),
    !R.isEmpty(u) && /* @__PURE__ */ O("div", { className: St.secondLine, children: se() }),
    le ? /* @__PURE__ */ O("div", { style: { display: "none" }, children: /* @__PURE__ */ O("div", { ref: fe, children: /* @__PURE__ */ O(
      aC,
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
    X ? /* @__PURE__ */ O(lq, { data: re, headers: ge, filename: R.get(e, "printHeader.title", "Título"), ref: Ce }) : void 0,
    ne && /* @__PURE__ */ O(
      iC,
      {
        onClose: () => {
          U(!1);
        },
        customSearchKeys: y,
        searchableItems: Se,
        searchParams: d,
        setSearchParams: p,
        dataHandler: h,
        formData: oe,
        setFormData: be,
        setIsClearButton: k,
        clearFilter: Ie
      }
    )
  ] });
};
sC.propTypes = {
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
const oV = "_tableDesktopOnly_11faq_1", iV = "_cardsContainerMobile_11faq_21", sV = "_tableScroll_11faq_85", lV = "_tableScrollWrapper_11faq_97", cV = "_tableWidthAuto_11faq_107", uV = "_stickyFooterTable_11faq_117", hi = {
  tableDesktopOnly: oV,
  cardsContainerMobile: iV,
  tableScroll: sV,
  tableScrollWrapper: lV,
  tableWidthAuto: cV,
  stickyFooterTable: uV
}, dV = ({
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
  totalRows: g = 0,
  setRowStyle: y,
  addButton: b = {},
  extraAddButtons: _ = null,
  showAddButton: w = !0,
  onAddButtonClick: k,
  filteredPrintData: F,
  checkAllData: E,
  onChangeDeselect: I = !0,
  sumData: S = {},
  handlerTable: P,
  dataHandler: C,
  handlerMultiple: T = () => {
  },
  cafParams: A,
  cafClearButton: B = !1,
  widthAuto: H = !1,
  mobileCardView: ne = !1,
  cardLine1: U = [],
  cardLine2: re = [],
  cardLine3: he = [],
  cardLine4: ge = [],
  onLoadMore: Ne = null,
  // Handler personalizado para scroll infinito
  isLoadingMore: le = !1,
  // Estado de carga para scroll infinito
  hasMore: me = null,
  // Si hay más datos (si es null, se calcula automáticamente)
  mergeConfig: X = null,
  // Configuración para merge automático en scroll infinito
  topPlaceClassName: te = "",
  // Clase CSS personalizada para TopPlace
  hidePrintButtons: oe = !1,
  // Oculta los botones de imprimir PDF y Excel
  scrollBody: be = !1,
  // Envuelve la tabla en un contenedor con scroll para que solo el body haga scroll
  downloadFileFetcher: Se
}) => {
  const [ye, fe] = ot({ rows: 10, page: 1 }), [Ce, De] = ot(!1), [W, z] = ot([]), [$, D] = ot([]), [G, K] = ot(!1), se = {
    searchable: !0,
    searchPosition: "flex-start",
    searchDisabled: !1,
    filterButton: !0,
    searchString: "",
    field: "",
    allEnabled: !0,
    width: "100%"
  };
  return Vt(() => {
    fe({ ...ye, ...m });
  }, []), Vt(() => {
    K(B);
  }, [B]), Vt(() => {
    R.isEmpty(A) || R.isEqual(ye, A) || fe(A);
  }, [A]), /* @__PURE__ */ ae(Ca, { children: [
    p && /* @__PURE__ */ O(
      sC,
      {
        data: e,
        columns: t,
        topButtons: n,
        searcher: { ...se, ...u },
        searchRefresh: c,
        addButton: w ? b : null,
        extraAddButtons: _,
        onAddButtonClick: k,
        searchParams: ye,
        setSearchParams: fe,
        handlerTable: P,
        dataHandler: C,
        filteredPrintData: F,
        totalRows: g,
        print: d,
        headerDetail: o,
        defaultParams: m,
        customSearchKeys: r,
        sumData: S,
        isClearButton: G,
        setIsClearButton: K,
        topPlaceClassName: te,
        hidePrintButtons: oe
      }
    ),
    ne && /* @__PURE__ */ O("div", { className: hi.cardsContainerMobile, children: /* @__PURE__ */ O(
      pd,
      {
        data: e,
        columns: t,
        headerDetail: o,
        sumData: S,
        clickedRowColor: s,
        handlerTable: P,
        handlerMultiple: T,
        onChangeDeselect: I,
        concatValue: W,
        setConcatValue: z,
        concatKeys: $,
        setConcatKeys: D,
        concatAll: Ce,
        setConcatAll: De,
        checkAllData: E,
        setRowStyle: y,
        totalRows: g,
        mobileCardView: ne,
        cardLine1: U,
        cardLine2: re,
        cardLine3: he,
        cardLine4: ge,
        dataHandler: C,
        searchParams: ye,
        setSearchParams: fe,
        onLoadMore: Ne,
        isLoadingMoreProp: le,
        hasMore: me,
        mergeConfig: X,
        downloadFileFetcher: Se
      }
    ) }),
    /* @__PURE__ */ O("div", { className: `${be ? hi.tableScroll : ""} ${hi.tableScrollWrapper}`, children: /* @__PURE__ */ ae(
      Et,
      {
        sortable: !0,
        celled: !0,
        striped: !0,
        compact: "very",
        className: `${ne ? hi.tableDesktopOnly : ""} ${H ? hi.tableWidthAuto : ""}`,
        children: [
          /* @__PURE__ */ O(
            Jm,
            {
              columns: t,
              searchParams: ye,
              setSearchParams: fe,
              totalRows: g,
              dataHandler: C,
              concatValue: W,
              setConcatValue: z,
              concatKeys: $,
              setConcatKeys: D,
              concatAll: Ce,
              setConcatAll: De,
              widthAuto: H
            }
          ),
          /* @__PURE__ */ O(
            pd,
            {
              data: e,
              columns: t,
              headerDetail: o,
              sumData: S,
              clickedRowColor: s,
              handlerTable: P,
              handlerMultiple: T,
              onChangeDeselect: I,
              concatValue: W,
              setConcatValue: z,
              concatKeys: $,
              setConcatKeys: D,
              concatAll: Ce,
              setConcatAll: De,
              checkAllData: E,
              setRowStyle: y,
              totalRows: g,
              mobileCardView: !1,
              cardLine1: U,
              cardLine2: re,
              cardLine3: he,
              cardLine4: ge,
              downloadFileFetcher: Se
            }
          )
        ]
      }
    ) }),
    h && /* @__PURE__ */ O(Et, { className: `${ne ? hi.tableDesktopOnly : ""} ${hi.stickyFooterTable}`, children: /* @__PURE__ */ O(
      ZE,
      {
        visiblePagination: h,
        searchParams: ye,
        setSearchParams: fe,
        dataHandler: C,
        totalRows: g
      }
    ) })
  ] });
};
dV.propTypes = {
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
function fV(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function k_(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, lC(r.key), r);
  }
}
function pV(e, t, n) {
  return t && k_(e.prototype, t), n && k_(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function hV(e, t, n) {
  return (t = lC(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function md() {
  return md = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, md.apply(null, arguments);
}
function N_(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ku(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? N_(Object(n), !0).forEach(function(r) {
      hV(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : N_(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function mV(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function lC(e) {
  var t = mV(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
var cC = { exports: {} };
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
      var p, h, m, g, y, b, _, w, k;
      if (p = d.match(u), !p)
        throw new Error("invalid data URI");
      for (h = p[2] ? p[1] : "text/plain" + (p[3] || ";charset=US-ASCII"), m = !!p[4], g = d.slice(p[0].length), m ? y = atob(g) : y = decodeURIComponent(g), b = new ArrayBuffer(y.length), _ = new Uint8Array(b), w = 0; w < y.length; w += 1)
        _[w] = y.charCodeAt(w);
      return r ? new Blob([o ? _ : b], {
        type: h
      }) : (k = new s(), k.append(b), k.getBlob(h));
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
})(cC);
var I_ = cC.exports, gV = function(t) {
  return typeof Blob > "u" ? !1 : t instanceof Blob || Object.prototype.toString.call(t) === "[object Blob]";
}, A_ = {
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
}, vV = typeof window < "u" && typeof window.document < "u", Zo = vV ? window : {}, gd = function(t) {
  return t > 0 && t < 1 / 0;
}, yV = Array.prototype.slice;
function Pg(e) {
  return Array.from ? Array.from(e) : yV.call(e);
}
var bV = /^image\/.+$/;
function im(e) {
  return bV.test(e);
}
function _V(e) {
  var t = im(e) ? e.substr(6) : "";
  return t === "jpeg" && (t = "jpg"), ".".concat(t);
}
var uC = String.fromCharCode;
function wV(e, t, n) {
  var r = "", o;
  for (n += t, o = t; o < n; o += 1)
    r += uC(e.getUint8(o));
  return r;
}
function xV() {
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
var EV = Zo.btoa;
function R_(e, t) {
  for (var n = [], r = 8192, o = new Uint8Array(e); o.length > 0; )
    n.push(uC.apply(null, Pg(o.subarray(0, r)))), o = o.subarray(r);
  return "data:".concat(t, ";base64,").concat(EV(n.join("")));
}
function CV(e) {
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
      if (wV(t, d, 4) === "Exif") {
        var h = t.getUint16(p);
        if (r = h === 18761, (r || h === 19789) && t.getUint16(p + 2, r) === 42) {
          var m = t.getUint32(p + 4, r);
          m >= 8 && (s = p + m);
        }
      }
    }
    if (s) {
      var g = t.getUint16(s, r), y, b;
      for (b = 0; b < g; b += 1)
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
function OV(e) {
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
var SV = /\.\d*(?:0|9){12}\d*$/;
function M_(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
  return SV.test(e) ? Math.round(e * t) / t : e;
}
function El(e) {
  var t = e.aspectRatio, n = e.height, r = e.width, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "none", s = gd(r), u = gd(n);
  if (s && u) {
    var c = n * t;
    (o === "contain" || o === "none") && c > r || o === "cover" && c < r ? n = r / t : r = n * t;
  } else s ? n = r / t : u && (r = n * t);
  return {
    width: r,
    height: n
  };
}
function TV(e) {
  for (var t = Pg(new Uint8Array(e)), n = t.length, r = [], o = 0; o + 3 < n; ) {
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
function PV(e, t) {
  var n = Pg(new Uint8Array(e));
  if (n[2] !== 255 || n[3] !== 224)
    return e;
  var r = n[4] * 256 + n[5], o = [255, 216].concat(t, n.slice(4 + r));
  return new Uint8Array(o);
}
var kV = Zo.ArrayBuffer, Xp = Zo.FileReader, mi = Zo.URL || Zo.webkitURL, NV = /\.\w+$/, IV = Zo.Compressor, AV = /* @__PURE__ */ function() {
  function e(t, n) {
    fV(this, e), this.file = t, this.exif = [], this.image = new Image(), this.options = ku(ku({}, A_), n), this.aborted = !1, this.result = null, this.init();
  }
  return pV(e, [{
    key: "init",
    value: function() {
      var n = this, r = this.file, o = this.options;
      if (!gV(r)) {
        this.fail(new Error("The first argument must be a File or Blob object."));
        return;
      }
      var s = r.type;
      if (!im(s)) {
        this.fail(new Error("The first argument must be an image File or Blob object."));
        return;
      }
      if (!mi || !Xp) {
        this.fail(new Error("The current browser does not support image compression."));
        return;
      }
      kV || (o.checkOrientation = !1, o.retainExif = !1);
      var u = s === "image/jpeg", c = u && o.checkOrientation, d = u && o.retainExif;
      if (mi && !c && !d)
        this.load({
          url: mi.createObjectURL(r)
        });
      else {
        var p = new Xp();
        this.reader = p, p.onload = function(h) {
          var m = h.target, g = m.result, y = {}, b = 1;
          c && (b = CV(g), b > 1 && md(y, OV(b))), d && (n.exif = TV(g)), c || d ? !mi || b > 1 ? y.url = R_(g, s) : y.url = mi.createObjectURL(r) : y.url = g, n.load(y);
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
        xV() ? r.draw(ku(ku({}, n), {}, {
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
      }, Zo.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(Zo.navigator.userAgent) && (s.crossOrigin = "anonymous"), s.alt = o.name, s.src = n.url;
    }
  }, {
    key: "draw",
    value: function(n) {
      var r = this, o = n.naturalWidth, s = n.naturalHeight, u = n.rotate, c = u === void 0 ? 0 : u, d = n.scaleX, p = d === void 0 ? 1 : d, h = n.scaleY, m = h === void 0 ? 1 : h, g = this.file, y = this.image, b = this.options, _ = document.createElement("canvas"), w = _.getContext("2d"), k = Math.abs(c) % 180 === 90, F = (b.resize === "contain" || b.resize === "cover") && gd(b.width) && gd(b.height), E = Math.max(b.maxWidth, 0) || 1 / 0, I = Math.max(b.maxHeight, 0) || 1 / 0, S = Math.max(b.minWidth, 0) || 0, P = Math.max(b.minHeight, 0) || 0, C = o / s, T = b.width, A = b.height;
      if (k) {
        var B = [I, E];
        E = B[0], I = B[1];
        var H = [P, S];
        S = H[0], P = H[1];
        var ne = [A, T];
        T = ne[0], A = ne[1];
      }
      F && (C = T / A);
      var U = El({
        aspectRatio: C,
        width: E,
        height: I
      }, "contain");
      E = U.width, I = U.height;
      var re = El({
        aspectRatio: C,
        width: S,
        height: P
      }, "cover");
      if (S = re.width, P = re.height, F) {
        var he = El({
          aspectRatio: C,
          width: T,
          height: A
        }, b.resize);
        T = he.width, A = he.height;
      } else {
        var ge = El({
          aspectRatio: C,
          width: T,
          height: A
        }), Ne = ge.width;
        T = Ne === void 0 ? o : Ne;
        var le = ge.height;
        A = le === void 0 ? s : le;
      }
      T = Math.floor(M_(Math.min(Math.max(T, S), E))), A = Math.floor(M_(Math.min(Math.max(A, P), I)));
      var me = -T / 2, X = -A / 2, te = T, oe = A, be = [];
      if (F) {
        var Se = 0, ye = 0, fe = o, Ce = s, De = El({
          aspectRatio: C,
          width: o,
          height: s
        }, {
          contain: "cover",
          cover: "contain"
        }[b.resize]);
        fe = De.width, Ce = De.height, Se = (o - fe) / 2, ye = (s - Ce) / 2, be.push(Se, ye, fe, Ce);
      }
      if (be.push(me, X, te, oe), k) {
        var W = [A, T];
        T = W[0], A = W[1];
      }
      _.width = T, _.height = A, im(b.mimeType) || (b.mimeType = g.type);
      var z = "transparent";
      g.size > b.convertSize && b.convertTypes.indexOf(b.mimeType) >= 0 && (b.mimeType = "image/jpeg");
      var $ = b.mimeType === "image/jpeg";
      if ($ && (z = "#fff"), w.fillStyle = z, w.fillRect(0, 0, T, A), b.beforeDraw && b.beforeDraw.call(this, w, _), !this.aborted && (w.save(), w.translate(T / 2, A / 2), w.rotate(c * Math.PI / 180), w.scale(p, m), w.drawImage.apply(w, [y].concat(be)), w.restore(), b.drew && b.drew.call(this, w, _), !this.aborted)) {
        var D = function(K) {
          if (!r.aborted) {
            var se = function(de) {
              return r.done({
                naturalWidth: o,
                naturalHeight: s,
                result: de
              });
            };
            if (K && $ && b.retainExif && r.exif && r.exif.length > 0) {
              var Ie = function(de) {
                return se(I_(R_(PV(de, r.exif), b.mimeType)));
              };
              if (K.arrayBuffer)
                K.arrayBuffer().then(Ie).catch(function() {
                  r.fail(new Error("Failed to read the compressed image with Blob.arrayBuffer()."));
                });
              else {
                var pe = new Xp();
                r.reader = pe, pe.onload = function(Ee) {
                  var de = Ee.target;
                  Ie(de.result);
                }, pe.onabort = function() {
                  r.fail(new Error("Aborted to read the compressed image with FileReader."));
                }, pe.onerror = function() {
                  r.fail(new Error("Failed to read the compressed image with FileReader."));
                }, pe.onloadend = function() {
                  r.reader = null;
                }, pe.readAsArrayBuffer(K);
              }
            } else
              se(K);
          }
        };
        _.toBlob ? _.toBlob(D, b.mimeType, b.quality) : D(I_(_.toDataURL(b.mimeType, b.quality)));
      }
    }
  }, {
    key: "done",
    value: function(n) {
      var r = n.naturalWidth, o = n.naturalHeight, s = n.result, u = this.file, c = this.image, d = this.options;
      if (mi && c.src.indexOf("blob:") === 0 && mi.revokeObjectURL(c.src), s)
        if (d.strict && !d.retainExif && s.size > u.size && d.mimeType === u.type && !(d.width > r || d.height > o || d.minWidth > r || d.minHeight > o || d.maxWidth < r || d.maxHeight < o))
          s = u;
        else {
          var p = u.name;
          p && s.type !== u.type && (p = p.replace(NV, _V(s.type)));
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
      return window.Compressor = IV, e;
    }
    /**
     * Change the default options.
     * @param {Object} options - The new default options.
     */
  }, {
    key: "setDefaults",
    value: function(n) {
      md(A_, n);
    }
  }]);
}();
//! moment.js locale configuration
//! locale : Spanish [es]
//! author : Julio Napurí : https://github.com/julionc
var D_ = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split(
  "_"
), RV = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), Qp = [
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
], L_ = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
Be.defineLocale("es", {
  months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
    "_"
  ),
  monthsShort: function(e, t) {
    return e ? /-MMM-/.test(t) ? RV[e.month()] : D_[e.month()] : D_;
  },
  monthsRegex: L_,
  monthsShortRegex: L_,
  monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
  monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
  monthsParse: Qp,
  longMonthsParse: Qp,
  shortMonthsParse: Qp,
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
Be.locale("es");
const MV = (e) => new Promise((t, n) => {
  new AV(e, {
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
}), DV = (e = "") => {
  const t = R.split(e, ".");
  return R.toLower(t.length > 1 ? t.pop() : "");
}, LV = (e = "") => {
  const t = String(e).match(/^data:([^;]+);base64,/i), n = t ? R.toLower(t[1]) : "";
  return R.startsWith(n, "image/") ? "image" : R.startsWith(n, "audio/") ? "audio" : R.startsWith(n, "video/") ? "video" : n === "application/pdf" || R.includes(n, "pdf") ? "pdf" : R.includes(n, "word") || R.includes(n, "officedocument.wordprocessingml") ? "doc" : R.includes(n, "excel") || R.includes(n, "spreadsheetml") ? "xls" : R.includes(n, "powerpoint") || R.includes(n, "presentationml") ? "ppt" : R.includes(n, "zip") || R.includes(n, "x-7z-compressed") || R.includes(n, "x-rar-compressed") || R.includes(n, "tar") || R.includes(n, "gzip") ? "zip" : R.includes(n, "text/") || R.includes(n, "json") || R.includes(n, "xml") ? "txt" : "file";
}, ni = (e = []) => ` ${R.join(e, " ")} `, So = (e, t) => {
  const n = ` ${R.trim(R.toLower(t))} `;
  return R.includes(e, n);
}, FV = ni(["doc", "docx", "odt"]), $V = ni(["xls", "xlsx", "csv", "ods"]), BV = ni(["ppt", "pptx", "odp"]), jV = ni(["zip", "rar", "7z", "tar", "gz", "bz2"]), WV = ni(["txt", "md", "rtf", "json", "xml", "log", "yaml", "yml"]), zV = ni(["jpg", "jpeg", "png", "webp", "apng", "avif", "gif", "svg", "bmp", "ico", "tiff"]), UV = ni(["mp4", "webm", "ogg", "mov", "m4v", "mkv", "avi", "wmv", "flv"]), HV = ni(["mp3", "wav", "ogg", "m4a", "aac", "flac", "wma", "opus", "weba"]), F_ = (e = "", t = "") => {
  const n = R.toLower(t);
  if (n && R.startsWith(n, "image/")) return "image";
  if (n && R.startsWith(n, "audio/")) return "audio";
  if (n && R.startsWith(n, "video/")) return "video";
  const r = DV(e);
  return r === "pdf" ? "pdf" : So(zV, r) ? "image" : So(UV, r) ? "video" : So(HV, r) ? "audio" : So(FV, r) ? "doc" : So($V, r) ? "xls" : So(BV, r) ? "ppt" : So(jV, r) ? "zip" : So(WV, r) ? "txt" : "file";
}, Nu = (e, t) => {
  if (!e)
    return "-";
  const n = Be(e);
  return n.isValid() ? n.format(t) : "-";
};
function YV(e) {
  if (Number.isNaN(Number(e))) return "";
  const t = Math.floor(e / 60), n = Math.floor(t / 60), r = Math.floor(n / 24), o = n - r * 24, s = t - o * 60 - r * 24 * 60;
  return o < 1 ? `${s}m` : r < 1 ? `${o}h ${s}m` : `${r}d ${o}h ${s}m`;
}
const qV = "_header_19o3d_3", VV = "_inputSearch_19o3d_17", GV = "_totalTime_19o3d_31", KV = "_spaceClass_19o3d_43", ZV = "_nuevo_19o3d_51", XV = "_atender_19o3d_61", QV = "_cliente_19o3d_71", JV = "_alertBadge_19o3d_81", eG = "_icon_19o3d_99", tG = "_headerTable_19o3d_107", nG = "_headerFooter_19o3d_119", rG = "_cell_19o3d_129", aG = "_container_19o3d_143", oG = "_containerCenter_19o3d_155", iG = "_containerLeft_19o3d_167", sG = "_containerUs_19o3d_181", lG = "_containerPrincipa_19o3d_195", cG = "_fixedUserInfo_19o3d_207", uG = "_containerRightUserRow_19o3d_217", dG = "_containerTell_19o3d_229", fG = "_containerRightUserRowContainer_19o3d_245", pG = "_headerLabel_19o3d_257", hG = "_pDate_19o3d_269", mG = "_headerTitlesss_19o3d_289", gG = "_headerTitlesssDate_19o3d_299", vG = "_containerTelu_19o3d_311", yG = "_containerRight_19o3d_217", bG = "_containerBottom_19o3d_335", _G = "_containerLeftUser_19o3d_343", wG = "_containerLeftGroups_19o3d_357", xG = "_containerRightUser_19o3d_217", EG = "_headerTitle_19o3d_289", CG = "_tableContainer_19o3d_391", OG = "_containerCont_19o3d_401", SG = "_arrayCellContainer_19o3d_409", TG = "_arrayCell_19o3d_409", PG = "_DesConectadoText_19o3d_445", kG = "_conectadoText_19o3d_455", NG = "_cellButton_19o3d_465", IG = "_cellArrayButton_19o3d_479", AG = "_tableCell_19o3d_497", RG = "_headerMenu_19o3d_509", MG = "_headerMenuItem_19o3d_517", DG = "_tableCellHeader_19o3d_525", LG = "_tableCellHeaderCheck_19o3d_537", FG = "_tableCellHeaderIcon_19o3d_545", $G = "_tableCellPag_19o3d_553", BG = "_ColorActive_19o3d_561", jG = "_groupHover_19o3d_569", WG = "_emptyChat_19o3d_579", zG = "_ButtonEraser_19o3d_589", UG = "_ButtonRoute_19o3d_603", HG = "_ButtonEdit_19o3d_617", YG = "_ButtonIcon_19o3d_631", qG = "_ButtonLabel_19o3d_643", VG = "_ButtonLink_19o3d_651", GG = "_ButtonPedidos_19o3d_667", KG = "_ButtonResend_19o3d_691", ZG = "_linkMap_19o3d_705", XG = "_ButtonMap_19o3d_731", QG = "_weightText_19o3d_787", JG = "_positiveButton_19o3d_795", eK = "_multipleActions_19o3d_811", tK = "_positiveAddButton_19o3d_821", nK = "_positiveDesButton_19o3d_837", rK = "_negativeButton_19o3d_855", aK = "_menuTable_19o3d_879", oK = "_iconTable_19o3d_887", iK = "_detalleLabel_19o3d_911", sK = "_modalHeader_19o3d_921", lK = "_codeMap_19o3d_933", cK = "_paginationLabel_19o3d_941", uK = "_paginationCell_19o3d_949", dK = "_pagination_19o3d_941", fK = "_itemCount_19o3d_971", pK = "_labelColor_19o3d_979", hK = "_blockString_19o3d_993", mK = "_emptyDataIcon_19o3d_1009", gK = "_IconDataBase_19o3d_1025", vK = "_labelDropdown_19o3d_1033", yK = "_searchContainer_19o3d_1055", bK = "_rowMiddle_19o3d_1065", _K = "_printButton_19o3d_1081", wK = "_exelButton_19o3d_1091", xK = "_printableButtons_19o3d_1099", EK = "_searchInputStyle_19o3d_1109", ut = {
  header: qV,
  inputSearch: VV,
  totalTime: GV,
  spaceClass: KV,
  nuevo: ZV,
  atender: XV,
  cliente: QV,
  alertBadge: JV,
  icon: eG,
  headerTable: tG,
  headerFooter: nG,
  cell: rG,
  container: aG,
  containerCenter: oG,
  containerLeft: iG,
  containerUs: sG,
  containerPrincipa: lG,
  fixedUserInfo: cG,
  containerRightUserRow: uG,
  containerTell: dG,
  containerRightUserRowContainer: fG,
  headerLabel: pG,
  pDate: hG,
  headerTitlesss: mG,
  headerTitlesssDate: gG,
  containerTelu: vG,
  containerRight: yG,
  containerBottom: bG,
  containerLeftUser: _G,
  containerLeftGroups: wG,
  containerRightUser: xG,
  headerTitle: EG,
  tableContainer: CG,
  containerCont: OG,
  arrayCellContainer: SG,
  arrayCell: TG,
  DesConectadoText: PG,
  conectadoText: kG,
  cellButton: NG,
  cellArrayButton: IG,
  tableCell: AG,
  headerMenu: RG,
  headerMenuItem: MG,
  tableCellHeader: DG,
  tableCellHeaderCheck: LG,
  tableCellHeaderIcon: FG,
  tableCellPag: $G,
  ColorActive: BG,
  groupHover: jG,
  emptyChat: WG,
  ButtonEraser: zG,
  ButtonRoute: UG,
  ButtonEdit: HG,
  ButtonIcon: YG,
  ButtonLabel: qG,
  ButtonLink: VG,
  ButtonPedidos: GG,
  ButtonResend: KG,
  linkMap: ZG,
  ButtonMap: XG,
  weightText: QG,
  positiveButton: JG,
  multipleActions: eK,
  positiveAddButton: tK,
  positiveDesButton: nK,
  negativeButton: rK,
  menuTable: aK,
  iconTable: oK,
  detalleLabel: iK,
  modalHeader: sK,
  codeMap: lK,
  paginationLabel: cK,
  paginationCell: uK,
  pagination: dK,
  itemCount: fK,
  labelColor: pK,
  blockString: hK,
  emptyDataIcon: mK,
  IconDataBase: gK,
  labelDropdown: vK,
  searchContainer: yK,
  rowMiddle: bK,
  printButton: _K,
  exelButton: wK,
  printableButtons: xK,
  searchInputStyle: EK
}, dC = ({
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
  alertName: g,
  hideClientInfo: y = !1,
  createdDate: b,
  handleBeforeGetContent: _ = !1,
  forceLeftUserInfo: w = !0
}) => {
  const k = Nn(null), [F, E] = ot(0), I = F === 0 ? null : YV(F), S = w || R.isEmpty(s) && R.isEmpty(u) && R.isEmpty(d) && R.isEmpty(p);
  Vt(() => {
    n && P();
  }, [n]);
  const P = Tg.useReactToPrint({
    content: () => {
      if (!k.current || !e.current) return null;
      const C = document.createElement("div"), T = k.current.cloneNode(!0), A = e.current.cloneNode(!0), B = document.createElement("div");
      B.classList.add(ut.tableContainer);
      const H = document.createElement("div");
      return H.classList.add(ut.containerCont), B.appendChild(H).appendChild(A), C.appendChild(T).appendChild(B), C;
    },
    onBeforeGetContent: async () => {
      if (_) {
        const C = Math.floor(Be.duration(Be().diff(Be(b))).asSeconds());
        E(C);
      }
      await new Promise((C) => setTimeout(C, 100));
    },
    onAfterPrint: () => {
      r();
    }
  });
  return /* @__PURE__ */ ae("div", { children: [
    !o && /* @__PURE__ */ O(gt, { onClick: P, className: ut.printButton, primary: !0, icon: "print" }),
    /* @__PURE__ */ O("div", { style: { display: "none" }, children: /* @__PURE__ */ ae("div", { className: ut.container, ref: k, children: [
      /* @__PURE__ */ O("div", { className: ut.containerCenter, children: /* @__PURE__ */ ae(Vn, { as: "h2", icon: !0, children: [
        /* @__PURE__ */ O("span", { className: ut.titleText, children: t.company }),
        /* @__PURE__ */ O(Vn.Subheader, { children: t.title }),
        (I || h || g) && /* @__PURE__ */ ae(Vn.Subheader, { className: ut.totalInfoRow, children: [
          /* @__PURE__ */ O("span", { className: `${ut.tag} ${ut[h.toLowerCase().replace(/\s+/g, "")]}`, children: "Tab " }),
          h && /* @__PURE__ */ O("span", { className: `${ut.tag} ${ut[h.toLowerCase().replace(/\s+/g, "")]}`, children: h }),
          I && /* @__PURE__ */ O("span", { className: ut.spaceClass, children: I }),
          g && /* @__PURE__ */ O("span", { className: ut.alertBadge, style: { backgroundColor: m }, children: g })
        ] }),
        !R.isEmpty(t.subTitle) && /* @__PURE__ */ O(Vn.Subheader, { children: t.subTitle })
      ] }) }),
      !y && /* @__PURE__ */ ae("div", { className: ut.containerBottom, children: [
        /* @__PURE__ */ ae("div", { className: ut.containerLeft, children: [
          /* @__PURE__ */ ae("div", { children: [
            /* @__PURE__ */ O("span", { className: ut.headerTitle, children: "Cliente:" }),
            " ",
            s
          ] }),
          R.isEmpty(d) && R.isEmpty(u) && /* @__PURE__ */ ae("div", { className: ut.pDate, children: [
            /* @__PURE__ */ O("span", { className: ut.headerTitlesss, children: "Usuario:" }),
            /* @__PURE__ */ O("span", { children: t.user })
          ] })
        ] }),
        /* @__PURE__ */ ae("div", { className: ut.containerLeftUser, children: [
          /* @__PURE__ */ ae("div", { children: [
            /* @__PURE__ */ O("span", { className: ut.headerTitle, children: "Canal:" }),
            " ",
            c
          ] }),
          !R.isEmpty(d) && R.isEmpty(u) && R.isEmpty(p) && /* @__PURE__ */ ae("div", { className: ut.pDate, children: [
            /* @__PURE__ */ O("span", { className: ut.headerTitlesss, children: "Usuario:" }),
            /* @__PURE__ */ O("span", { children: t.user })
          ] }),
          R.isEmpty(d) && !R.isEmpty(u) && R.isEmpty(p) && /* @__PURE__ */ ae("div", { className: ut.pDate, children: [
            /* @__PURE__ */ O("span", { className: ut.headerTitlesss, children: "Usuario:" }),
            /* @__PURE__ */ O("span", { children: t.user })
          ] }),
          R.isEmpty(d) && R.isEmpty(u) && R.isEmpty(p) && /* @__PURE__ */ ae("div", { className: ut.pDate, children: [
            /* @__PURE__ */ O("span", { className: ut.headerTitlesssDate, children: "Fecha:" }),
            /* @__PURE__ */ O("span", { children: Nu(/* @__PURE__ */ new Date(), "DD/MM/YYYY, hh:mm A") })
          ] })
        ] }),
        !R.isEmpty(u) && /* @__PURE__ */ ae("div", { className: ut.containerTelu, children: [
          /* @__PURE__ */ ae("div", { children: [
            /* @__PURE__ */ O("span", { className: ut.headerTitle, children: "Teléfono:" }),
            " ",
            u
          ] }),
          R.isEmpty(d) && !R.isEmpty(p) ? /* @__PURE__ */ ae("div", { className: ut.pDate, children: [
            /* @__PURE__ */ O("span", { className: ut.headerTitlesss, children: "Usuario:" }),
            /* @__PURE__ */ O("span", { children: t.user })
          ] }) : R.isEmpty(d) && R.isEmpty(p) ? /* @__PURE__ */ ae("div", { className: ut.pDate, children: [
            /* @__PURE__ */ O("span", { className: ut.headerTitlesssDate, children: "Fecha:" }),
            /* @__PURE__ */ O("span", { children: Nu(/* @__PURE__ */ new Date(), "DD/MM/YYYY, hh:mm A") })
          ] }) : null
        ] }),
        !R.isEmpty(d) && /* @__PURE__ */ ae("div", { className: ut.containerLeftUser, children: [
          /* @__PURE__ */ ae("div", { children: [
            /* @__PURE__ */ O("span", { className: ut.headerTitle, children: "Etiquetas:" }),
            R.map(d, (C, T) => /* @__PURE__ */ ae("span", { className: ut.tag, children: [
              C.name,
              T < d.length - 1 && /* @__PURE__ */ O("span", { children: ", " })
            ] }, T))
          ] }),
          !R.isEmpty(p) && /* @__PURE__ */ ae("div", { className: ut.pDate, children: [
            /* @__PURE__ */ O("span", { className: ut.headerTitlesss, children: "Usuario:" }),
            /* @__PURE__ */ O("span", { children: t.user })
          ] })
        ] }),
        !R.isEmpty(p) && /* @__PURE__ */ ae("div", { className: ut.containerLeftUser, children: [
          /* @__PURE__ */ ae("div", { className: ut.containerLeftGroups, children: [
            /* @__PURE__ */ O("span", { className: ut.headerTitle, children: "Grupo:" }),
            " ",
            p
          ] }),
          /* @__PURE__ */ ae("div", { className: ut.pDate, children: [
            /* @__PURE__ */ O("span", { className: ut.headerTitlesssDate, children: "Fecha:" }),
            /* @__PURE__ */ O("span", { children: Nu(/* @__PURE__ */ new Date(), "DD/MM/YYYY, hh:mm A") })
          ] })
        ] })
      ] }),
      y && /* @__PURE__ */ O("div", { className: `${ut.fixedUserInfo} ${S ? ut.containerLeftUser : ""}`, children: /* @__PURE__ */ ae("div", { className: ut.containerRightUserRowContainer, children: [
        /* @__PURE__ */ ae("div", { className: ut.containerRightUserRow, children: [
          /* @__PURE__ */ O("span", { className: ut.headerLabel, children: "Usuario:" }),
          " ",
          /* @__PURE__ */ O("span", { children: t.user })
        ] }),
        /* @__PURE__ */ ae("div", { className: ut.containerRightUserRow, children: [
          /* @__PURE__ */ O("span", { className: ut.headerLabel, children: "Fecha:" }),
          " ",
          /* @__PURE__ */ O("span", { children: Nu(/* @__PURE__ */ new Date(), "DD/MM/YYYY, hh:mm A") })
        ] })
      ] }) })
    ] }) })
  ] });
};
dC.propTypes = {
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
const CK = "_attachmentsContainer_4kv5c_1", OK = "_attachment_4kv5c_1", SK = "_noShowInput_4kv5c_71", TK = "_image_4kv5c_79", PK = "_icon_4kv5c_93", kK = "_fileButton_4kv5c_111", NK = "_fileButtonLabel_4kv5c_159", IK = "_fixedIcon_4kv5c_183", AK = "_stateIndicator_4kv5c_199", RK = "_rounded_4kv5c_245", MK = "_roundedImage_4kv5c_253", DK = "_printImageWrapper_4kv5c_263", LK = "_printImageOnly_4kv5c_287", Tn = {
  attachmentsContainer: CK,
  attachment: OK,
  noShowInput: SK,
  image: TK,
  icon: PK,
  fileButton: kK,
  fileButtonLabel: NK,
  fixedIcon: IK,
  stateIndicator: AK,
  rounded: RK,
  roundedImage: MK,
  printImageWrapper: DK,
  printImageOnly: LK
}, $_ = {
  pdf: "file pdf",
  doc: "file word",
  xls: "file excel",
  ppt: "file powerpoint",
  zip: "file archive",
  txt: "file text",
  audio: "music",
  video: "video",
  image: "image",
  file: "file outline"
}, B_ = {
  pdf: "red",
  doc: "blue",
  xls: "green",
  ppt: "orange",
  zip: "grey",
  txt: "grey",
  audio: "teal",
  video: "purple",
  image: "blue",
  file: "grey"
}, FK = "image/*,video/*,audio/*,.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.zip,.rar,.7z,.tar,.gz,.csv", $K = (e, t) => e || (t === "image" ? "image/*" : t === "video" ? "video/*" : t === "audio" ? "audio/*" : t === "media" ? "image/*,video/*,audio/*" : t === "file" ? "*/*" : FK), Iu = (e) => e == null || e === "" ? [] : R.isArray(e) ? e : [e], BK = ({
  // Universal files API
  files: e,
  setFiles: t,
  // Legacy images API (fully backwards-compatible)
  images: n = [],
  setImages: r,
  imagesD: o = [],
  setImagesD: s = () => {
  },
  // Settings
  downloadFileFetcher: u,
  multiple: c = !1,
  disabled: d = !1,
  width: p = 3,
  height: h = 3,
  icon: m = "paperclip",
  iconSize: g = "large",
  // mini, tiny, small, large, big, huge, massive
  rounded: y = !1,
  showMode: b = !1,
  noremovesaved: _ = !1,
  states: w = [],
  type: k = "all",
  // "all", "image", "video", "audio", "media", "file"
  accept: F = null,
  emptyIcon: E = "image outline",
  // Print & Metadata props (pure props, Redux-free)
  companyName: I,
  userNames: S,
  clientName: P,
  clientPhone: C,
  platformName: T,
  tags: A = [],
  groupName: B
}) => {
  const [H, ne] = ot([]), [U, re] = ot({ open: !1, selectedImage: null }), [he, ge] = ot(0), [Ne, le] = ot(!1), me = Nn(null), X = Nn([]), te = Nn(null), oe = e !== void 0 ? e : n, be = (q) => {
    t && t(q), r && r(q);
  };
  Vt(() => {
    const q = Iu(oe);
    !R.isEmpty(q) && !R.isEqual(X.current, q) ? (async () => {
      const ee = await Promise.all(
        R.map(q, async (we, ke) => {
          const Ae = String(we).startsWith("data:") || String(we).startsWith("blob:"), je = String(we).match(/^(http(?!s?:image)|image)/gi) === null && !Ae;
          let $e = we;
          je && u && ($e = await u({ uri: we }));
          let et = "file", Ze = "archivo";
          if (Ae)
            et = LV(String(we)), H[ke] && H[ke].name && H[ke].name !== "archivo" && (Ze = H[ke].name);
          else if (typeof we == "string") {
            const Ke = String(we).split(/[?#]/)[0];
            et = F_(Ke);
            try {
              const Ve = decodeURIComponent(Ke);
              Ve.includes("/") ? Ze = Ve.substring(Ve.lastIndexOf("/") + 1) : Ze = Ve;
            } catch {
              Ze = "archivo";
            }
          }
          return {
            link: $e,
            type: et,
            isLocal: Ae,
            name: Ze || "archivo",
            mime: ""
          };
        })
      );
      ne(ee), X.current = q;
    })() : R.isEmpty(q) && (ne([]), X.current = []);
  }, [oe, u]);
  const Se = () => {
    me.current && me.current.click();
  }, ye = (q) => new Promise((ee) => {
    const we = new FileReader();
    we.onloadend = () => ee(we.result), we.readAsDataURL(q);
  }), fe = async (q) => {
    q.preventDefault();
    const ee = Array.from(q.target.files || []);
    if (ee.length === 0) return;
    const we = Iu(oe);
    let ke = c ? [...we] : [], Ae = c ? [...H] : [];
    for (const et of ee) {
      const Ze = et.type.startsWith("image/"), Ke = Ze && (k === "image" || k === "all" || k === "file");
      let Ve;
      if (Ke)
        try {
          const ie = await MV(et);
          Ve = await ye(ie);
        } catch {
          Ve = await ye(et);
        }
      else
        Ve = await ye(et);
      const Te = Ze ? "image" : F_(et.name, et.type);
      ke = [...ke, Ve], Ae = [
        ...Ae,
        {
          link: URL.createObjectURL(et),
          type: Te,
          isLocal: !0,
          name: et.name,
          mime: et.type
        }
      ];
    }
    const je = c ? ke : ke.slice(-1), $e = c ? Ae : Ae.slice(-1);
    ne($e), be(je), me.current && (me.current.value = null);
  }, Ce = (q) => {
    const ee = R.reject(H, ($e) => H.indexOf($e) === q), we = Iu(oe), ke = R.find(we, ($e) => we.indexOf($e) === q), Ae = R.reject(we, ($e) => we.indexOf($e) === q);
    let je = [];
    c ? ke && typeof ke == "string" && ke.length > 100 ? je = [...o] : ke && (je = [...o, ke]) : ke && typeof ke == "string" && ke.length > 100 ? je = [...o] : je = ke ? [ke] : [], ne(ee), be(Ae), s(je);
  }, De = (q, ee, we = "archivo") => {
    if (ee === "video" || ee === "audio") {
      re({ selectedImage: q, open: !0 });
      return;
    }
    if (ee === "pdf") {
      if (typeof q == "string" && q.startsWith("data:")) {
        const Ae = window.open("", "_blank");
        Ae ? fetch(q).then((je) => je.blob()).then((je) => {
          const $e = URL.createObjectURL(je);
          Ae.location.href = $e, setTimeout(() => {
            Ae.document && (Ae.document.title = we);
          }, 100);
        }) : window.open(q, "_blank");
      } else
        window.open(q, "_blank");
      return;
    }
    const ke = document.createElement("a");
    ke.href = q, ke.download = we, ke.target = "_blank", document.body.appendChild(ke), ke.click(), document.body.removeChild(ke);
  }, W = () => {
    re({ open: !1, selectedImage: null }), ge(0);
  }, z = () => ge((q) => q <= 0 ? 270 : q - 90), $ = () => ge((q) => q >= 270 ? 0 : q + 90), D = Tg.useReactToPrint({
    content: () => te.current,
    onAfterPrint: () => {
      le(!1);
    }
  });
  Vt(() => {
    Ne && D();
  }, [Ne]);
  const G = () => {
    le(!0);
  }, K = (q) => {
    if (!w || w.length === 0) return null;
    const ee = w.find((ke) => q.includes(ke.path));
    return ee && { present: "#a6d7b0", late: "#f4b988" }[ee.markedAs] || null;
  }, se = (q) => {
    const ee = R.find(H, { link: q }), we = (ee == null ? void 0 : ee.type) === "video", ke = (ee == null ? void 0 : ee.type) === "audio";
    let Ae;
    we || ke ? Ae = {
      type: "video",
      width: 1280,
      height: 720,
      autoPlay: !0,
      sources: [
        {
          src: q,
          type: (ee == null ? void 0 : ee.mime) || (ke ? "audio/mp3" : "video/mp4")
        }
      ],
      downloadUrl: q,
      downloadFilename: ee != null && ee.name && (ee == null ? void 0 : ee.name) !== "archivo" ? ee.name : ke ? "audio.mp3" : "video.mp4"
    } : Ae = {
      src: q,
      downloadFilename: ee && ee.name !== "archivo" ? ee.name : "imagen.png"
    };
    const je = R.filter(H, ($e) => $e.type === "image" && $e.link !== q);
    return [
      Ae,
      ...R.map(je, ($e) => ({
        src: $e.link,
        downloadFilename: $e.name && $e.name !== "archivo" ? $e.name : "imagen.png"
      }))
    ];
  }, Ie = (q) => {
    const ee = Iu(oe), we = R.map(q, (je, $e) => {
      const et = K(ee[$e] || je.link), Ze = !d && !(_ && !je.isLocal);
      return /* @__PURE__ */ ae(
        "div",
        {
          className: `${Tn.attachment} ${y ? Tn.rounded : ""}`,
          style: { width: `${p}rem`, height: `${h}rem` },
          children: [
            Ze && /* @__PURE__ */ O(
              We,
              {
                className: Tn.fixedIcon,
                name: "close",
                onClick: () => Ce($e)
              }
            ),
            et && /* @__PURE__ */ O("div", { className: Tn.stateIndicator, style: { backgroundColor: et } }),
            je.type === "image" ? /* @__PURE__ */ O(
              xr,
              {
                className: `${Tn.image} ${y ? Tn.roundedImage : ""}`,
                src: je.link,
                alt: je.name || "",
                onClick: () => re({ selectedImage: je.link, open: !0 })
              }
            ) : /* @__PURE__ */ ae(
              "button",
              {
                type: "button",
                className: Tn.fileButton,
                onClick: () => De(je.link, je.type, je.name),
                "aria-label": `Vista previa ${je.name || "archivo"}`,
                children: [
                  /* @__PURE__ */ O(
                    We,
                    {
                      className: Tn.icon,
                      name: $_[je.type] || $_.file,
                      color: B_[je.type] || B_.file,
                      size: g
                    }
                  ),
                  !!je.name && /* @__PURE__ */ O("div", { className: Tn.fileButtonLabel, title: je.name, children: je.name })
                ]
              }
            )
          ]
        },
        $e + 1
      );
    }), ke = /* @__PURE__ */ ae(
      gt,
      {
        className: `${Tn.attachment} ${y ? Tn.rounded : ""}`,
        icon: !0,
        primary: !0,
        disabled: d,
        onClick: Se,
        style: { width: `${p}rem`, height: `${h}rem` },
        children: [
          /* @__PURE__ */ O(We, { name: m, size: g }),
          /* @__PURE__ */ O(
            "input",
            {
              className: Tn.noShowInput,
              ref: me,
              type: "file",
              accept: $K(F, k),
              multiple: c,
              disabled: d,
              onChange: fe
            }
          )
        ]
      },
      0
    );
    return [(b || d ? !1 : !(!c && !R.isEmpty(q))) && ke, ...we];
  }, pe = d && R.isEmpty(H), Ee = R.find(H, { link: U.selectedImage }), de = (Ee == null ? void 0 : Ee.type) === "video" || (Ee == null ? void 0 : Ee.type) === "audio";
  return /* @__PURE__ */ ae("div", { className: Tn.attachmentsContainer, style: { height: `${h}rem` }, children: [
    /* @__PURE__ */ O(
      jE,
      {
        open: U.open,
        plugins: de ? [am, E_] : [am, HE, KE, E_],
        close: W,
        slides: se(U.selectedImage),
        zoom: de ? void 0 : { maxScale: 50, maxZoomPixelRatio: 10 },
        className: `rotated${he}`,
        controller: { closeOnBackdropClick: !0 },
        render: {
          buttonPrev: () => null,
          buttonNext: () => null
        },
        toolbar: {
          buttons: de ? ["download", "close"] : [
            /* @__PURE__ */ O("button", { type: "button", className: "yarl__button", onClick: z, children: /* @__PURE__ */ O(We, { name: "undo", size: "large" }) }, "rotate-left"),
            /* @__PURE__ */ O("button", { type: "button", className: "yarl__button", onClick: $, children: /* @__PURE__ */ O(We, { name: "redo", size: "large" }) }, "rotate-right"),
            /* @__PURE__ */ O("button", { type: "button", className: "yarl__button", onClick: G, children: /* @__PURE__ */ O(We, { name: "print", size: "large" }) }, "print"),
            "zoom",
            "download",
            "fullscreen",
            "close"
          ]
        }
      }
    ),
    pe ? /* @__PURE__ */ O("div", { className: `${Tn.attachment} ${y ? Tn.rounded : ""}`, style: { width: `${p}rem`, height: `${h}rem` }, children: /* @__PURE__ */ O(We, { className: Tn.icon, name: E, size: g, color: "grey" }) }) : Ie(H),
    /* @__PURE__ */ O("div", { ref: te, className: Tn.printImageWrapper, children: !de && U.selectedImage && /* @__PURE__ */ O(
      "img",
      {
        src: U.selectedImage,
        alt: "Imagen para imprimir",
        className: Tn.printImageOnly,
        style: { transform: `rotate(${he}deg)` }
      }
    ) }),
    /* @__PURE__ */ O(
      dC,
      {
        hiddenButon: !0,
        printAction: Ne,
        printActionRetry: () => {
          le(!1);
        },
        printHeader: {
          company: I,
          user: S,
          title: "Impresión de Imagen"
        },
        clientName: P,
        clientPhone: C,
        platform: T,
        tags: A,
        group: B,
        renderData: te,
        hideClientInfo: !1
      }
    )
  ] });
};
BK.propTypes = {
  files: l.oneOfType([l.array, l.string]),
  setFiles: l.func,
  images: l.array,
  setImages: l.func,
  imagesD: l.array,
  setImagesD: l.func,
  downloadFileFetcher: l.func,
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
  type: l.oneOf(["all", "image", "video", "audio", "media", "file"]),
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
const jK = "_text_vzm0k_1", WK = {
  text: jK
}, Fl = ({ children: e = "", className: t, as: n, href: r, disabled: o = !1, style: s, withMarkdown: u = !1, onClick: c = () => {
} }) => {
  const d = (h) => {
    const m = /(\*[^*]+\*|_[^_]+_|~[^~]+~|`[^`]+`)/g;
    return h.split(m).map((y, b) => y.startsWith("*") && y.endsWith("*") ? /* @__PURE__ */ O("strong", { style: { fontWeight: "bolder" }, children: y.slice(1, -1) }, b) : y.startsWith("_") && y.endsWith("_") ? /* @__PURE__ */ O("em", { style: { fontStyle: "italic" }, children: y.slice(1, -1) }, b) : y.startsWith("~") && y.endsWith("~") ? /* @__PURE__ */ O("del", { style: { textDecoration: "line-through" }, children: y.slice(1, -1) }, b) : /* @__PURE__ */ O("span", { children: y }, b));
  }, p = () => typeof e == "string" && u ? d(e) : e;
  return /* @__PURE__ */ O(
    Vn,
    {
      as: n || "p",
      className: `${WK.text} ${t || ""}`.trim(),
      href: r,
      disabled: o,
      style: s,
      onClick: c,
      children: p()
    }
  );
};
Fl.propTypes = {
  children: l.oneOfType([l.node, l.string]),
  className: l.oneOfType([l.string, l.array]),
  as: l.string,
  href: l.string,
  disabled: l.bool,
  withMarkdown: l.bool,
  onClick: l.func,
  style: l.oneOfType([l.string, l.object])
};
function sm() {
  return sm = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, sm.apply(null, arguments);
}
function zK(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
var UK = qI, HK = function(t) {
  var n = J.useRef(t);
  return UK(function() {
    n.current = t;
  }), n;
}, j_ = function(t, n) {
  if (typeof t == "function") {
    t(n);
    return;
  }
  t.current = n;
}, YK = function(t, n) {
  var r = J.useRef();
  return J.useCallback(function(o) {
    t.current = o, r.current && j_(r.current, null), r.current = n, n && j_(n, o);
  }, [n]);
}, W_ = {
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
}, qK = function(t) {
  Object.keys(W_).forEach(function(n) {
    t.style.setProperty(n, W_[n], "important");
  });
}, z_ = qK, Hn = null, U_ = function(t, n) {
  var r = t.scrollHeight;
  return n.sizingStyle.boxSizing === "border-box" ? r + n.borderSize : r - n.paddingSize;
};
function VK(e, t, n, r) {
  n === void 0 && (n = 1), r === void 0 && (r = 1 / 0), Hn || (Hn = document.createElement("textarea"), Hn.setAttribute("tabindex", "-1"), Hn.setAttribute("aria-hidden", "true"), z_(Hn)), Hn.parentNode === null && document.body.appendChild(Hn);
  var o = e.paddingSize, s = e.borderSize, u = e.sizingStyle, c = u.boxSizing;
  Object.keys(u).forEach(function(g) {
    var y = g;
    Hn.style[y] = u[y];
  }), z_(Hn), Hn.value = t;
  var d = U_(Hn, e);
  Hn.value = t, d = U_(Hn, e), Hn.value = "x";
  var p = Hn.scrollHeight - o, h = p * n;
  c === "border-box" && (h = h + o + s), d = Math.max(h, d);
  var m = p * r;
  return c === "border-box" && (m = m + o + s), d = Math.min(m, d), [d, p];
}
var H_ = function() {
}, GK = function(t, n) {
  return t.reduce(function(r, o) {
    return r[o] = n[o], r;
  }, {});
}, KK = [
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
], ZK = !!document.documentElement.currentStyle, XK = function(t) {
  var n = window.getComputedStyle(t);
  if (n === null)
    return null;
  var r = GK(KK, n), o = r.boxSizing;
  if (o === "")
    return null;
  ZK && o === "border-box" && (r.width = parseFloat(r.width) + parseFloat(r.borderRightWidth) + parseFloat(r.borderLeftWidth) + parseFloat(r.paddingRight) + parseFloat(r.paddingLeft) + "px");
  var s = parseFloat(r.paddingBottom) + parseFloat(r.paddingTop), u = parseFloat(r.borderBottomWidth) + parseFloat(r.borderTopWidth);
  return {
    sizingStyle: r,
    paddingSize: s,
    borderSize: u
  };
}, QK = XK;
function kg(e, t, n) {
  var r = HK(n);
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
var JK = function(t, n) {
  kg(document.body, "reset", function(r) {
    t.current.form === r.target && n(r);
  });
}, eZ = function(t) {
  kg(window, "resize", t);
}, tZ = function(t) {
  kg(document.fonts, "loadingdone", t);
}, nZ = ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"], rZ = function(t, n) {
  var r = t.cacheMeasurements, o = t.maxRows, s = t.minRows, u = t.onChange, c = u === void 0 ? H_ : u, d = t.onHeightChange, p = d === void 0 ? H_ : d, h = zK(t, nZ), m = h.value !== void 0, g = L.useRef(null), y = YK(g, n), b = L.useRef(0), _ = L.useRef(), w = function() {
    var E = g.current, I = r && _.current ? _.current : QK(E);
    if (I) {
      _.current = I;
      var S = VK(I, E.value || E.placeholder || "x", s, o), P = S[0], C = S[1];
      b.current !== P && (b.current = P, E.style.setProperty("height", P + "px", "important"), p(P, {
        rowHeight: C
      }));
    }
  }, k = function(E) {
    m || w(), c(E);
  };
  return L.useLayoutEffect(w), JK(g, function() {
    if (!m) {
      var F = g.current.value;
      requestAnimationFrame(function() {
        var E = g.current;
        E && F !== E.value && w();
      });
    }
  }), eZ(w), tZ(w), /* @__PURE__ */ L.createElement("textarea", sm({}, h, {
    onChange: k,
    ref: y
  }));
}, aZ = /* @__PURE__ */ L.forwardRef(rZ);
const oZ = "_wrapper_1pssv_1", iZ = "_label_1pssv_11", sZ = "_required_1pssv_23", lZ = "_inputWrapper_1pssv_33", cZ = "_textarea_1pssv_43", uZ = "_iconsContainer_1pssv_73", dZ = "_icon_1pssv_73", fZ = "_labelActions_1pssv_111", pZ = "_labelIcon_1pssv_123", hZ = "_error_1pssv_147", mZ = "_errorLabel_1pssv_157", gZ = "_labelRow_1pssv_169", vZ = "_charCount_1pssv_181", br = {
  wrapper: oZ,
  label: iZ,
  required: sZ,
  inputWrapper: lZ,
  textarea: cZ,
  iconsContainer: uZ,
  icon: dZ,
  labelActions: fZ,
  labelIcon: pZ,
  error: hZ,
  errorLabel: mZ,
  labelRow: gZ,
  charCount: vZ
}, yZ = ({
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
  maxLength: g,
  className: y = ""
}) => {
  const [b, _] = ot(!1), w = R.defaultTo(e, ""), k = !!(u && !b && o && w), F = k ? String(w).replace(/[^\n]/g, "•") : w, E = u && !b && !k ? { WebkitTextSecurity: "disc" } : void 0;
  return /* @__PURE__ */ ae("div", { className: br.wrapper, children: [
    n && /* @__PURE__ */ ae("div", { className: br.labelRow, children: [
      /* @__PURE__ */ ae("span", { className: br.label, children: [
        /* @__PURE__ */ O("span", { children: n }),
        p ? /* @__PURE__ */ O("span", { className: br.required, children: " *" }) : null,
        u && /* @__PURE__ */ O(
          We,
          {
            name: b ? "eye slash" : "eye",
            className: br.labelIcon,
            link: !0,
            title: b ? "Ocultar token" : "Ver token",
            "aria-label": b ? "Ocultar token" : "Ver token",
            onClick: () => _(!b)
          }
        )
      ] }),
      /* @__PURE__ */ O("div", { className: br.labelActions, children: m && g && /* @__PURE__ */ ae("span", { className: br.charCount, children: [
        R.size(e),
        "/",
        g
      ] }) })
    ] }),
    /* @__PURE__ */ ae("div", { className: br.inputWrapper, children: [
      /* @__PURE__ */ O(
        aZ,
        {
          minRows: c,
          maxRows: d,
          name: t,
          className: R.join(R.compact([br.textarea, s && br.error, y]), " "),
          value: F,
          onChange: r,
          disabled: o,
          placeholder: h,
          style: E
        }
      ),
      /* @__PURE__ */ O("div", { className: br.iconsContainer, children: e && !o && /* @__PURE__ */ O(
        We,
        {
          name: "close",
          className: br.icon,
          onClick: () => r({ target: { name: t, value: "" } })
        }
      ) })
    ] }),
    s && /* @__PURE__ */ O(cr, { basic: !0, color: "red", className: br.errorLabel, children: s })
  ] });
};
yZ.propTypes = {
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
const bZ = "_input_wfvqa_1", _Z = "_clearIcon_wfvqa_9", wZ = "_clearIconFocused_wfvqa_21", xZ = "_clearIconLast_wfvqa_33", EZ = "_clearIconLastFocused_wfvqa_47", CZ = "_clearRoundedIconLast_wfvqa_61", OZ = "_clearRoundedIconLastFocused_wfvqa_79", SZ = "_labelRoot_wfvqa_119", TZ = "_labelRequired_wfvqa_131", PZ = "_infoIcon_wfvqa_139", _r = {
  input: bZ,
  clearIcon: _Z,
  clearIconFocused: wZ,
  clearIconLast: xZ,
  clearIconLastFocused: EZ,
  clearRoundedIconLast: CZ,
  clearRoundedIconLastFocused: OZ,
  labelRoot: SZ,
  labelRequired: TZ,
  infoIcon: PZ
}, kZ = pc((e, t) => {
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
    labelClassName: g = "",
    placeholder: y,
    disabled: b,
    rounded: _,
    onChange: w,
    onKeyPress: k,
    onClear: F,
    dropdown: E,
    dropdownPosition: I = "left",
    required: S = !1,
    fluid: P = !0,
    type: C = "text",
    hideClear: T = !1,
    hideDropdown: A = !1,
    customBorderRadius: B
  } = e, H = B || (_ ? "1rem" : "0.25rem"), ne = B || "1rem", U = Nn(null), [re, he] = ot(!1), [ge, Ne] = ot(n ? "password" : "text"), [le, me] = ot("eye slash");
  Vt(() => {
    b ? ((t || U).current.style.setProperty("background-color", "hsl(0, 0%, 90%)", "important"), (t || U).current.style.setProperty("color", "hsl(0, 0%, 0%)", "important")) : ((t || U).current.style.removeProperty("background-color"), (t || U).current.style.removeProperty("cursor")), _ ? R.isEmpty(o) || b ? ((t || U).current.style.removeProperty("border-top-left-radius"), (t || U).current.style.removeProperty("border-bottom-left-radius"), (t || U).current.style.removeProperty("border-top-right-radius"), (t || U).current.style.removeProperty("border-bottom-right-radius"), (t || U).current.style.removeProperty("border-right"), n ? ((t || U).current.style.setProperty("border-top-left-radius", ne, "important"), (t || U).current.style.setProperty("border-bottom-left-radius", ne, "important")) : ((t || U).current.style.setProperty("border-radius", ne, "important"), (t || U).current.style.setProperty(
      "border-right",
      `1px solid ${re ? "var(--inputFocus)" : "var(--inputShader)"}`,
      "important"
    ))) : T && !n ? ((t || U).current.style.setProperty("border-radius", ne, "important"), (t || U).current.style.setProperty(
      "border-right",
      `1px solid ${re ? "var(--inputFocus)" : "var(--inputShader)"}`,
      "important"
    )) : ((t || U).current.style.removeProperty("border-radius"), (t || U).current.style.setProperty("border-top-left-radius", ne, "important"), (t || U).current.style.setProperty("border-bottom-left-radius", ne, "important"), (t || U).current.style.setProperty("border-top-right-radius", "0", "important"), (t || U).current.style.setProperty("border-bottom-right-radius", "0", "important"), (t || U).current.style.setProperty("border-right", "0", "important")) : R.isEmpty(o) || b ? ((t || U).current.style.setProperty("border-radius", H, "important"), n ? ((t || U).current.style.setProperty("border-right", "0", "important"), (t || U).current.style.setProperty("border-top-right-radius", "0", "important"), (t || U).current.style.setProperty("border-bottom-right-radius", "0", "important")) : (t || U).current.style.setProperty(
      "border-right",
      `1px solid ${re ? "var(--inputFocus)" : "var(--inputShader)"}`,
      "important"
    )) : T && !n ? ((t || U).current.style.setProperty("border-radius", H, "important"), (t || U).current.style.setProperty(
      "border-right",
      `1px solid ${re ? "var(--inputFocus)" : "var(--inputShader)"}`,
      "important"
    ), (t || U).current.style.setProperty("border-top-right-radius", H, "important"), (t || U).current.style.setProperty("border-bottom-right-radius", H, "important")) : ((t || U).current.style.setProperty("border-right", "0", "important"), (t || U).current.style.setProperty("border-top-right-radius", "0", "important"), (t || U).current.style.setProperty("border-bottom-right-radius", "0", "important")), R.isEmpty(E) || (I === "left" ? ((t || U).current.style.setProperty("border-top-left-radius", "0", "important"), (t || U).current.style.setProperty("border-bottom-left-radius", "0", "important"), (t || U).current.style.setProperty("border-left-color", "transparent", "important")) : I === "right" && ((t || U).current.style.setProperty("border-top-right-radius", "0", "important"), (t || U).current.style.setProperty("border-bottom-right-radius", "0", "important"), (t || U).current.style.setProperty("border-right-color", "transparent", "important")));
  }, [o, re, E, n, b, _, T, B, H, ne, t, U]);
  const X = (z) => {
    if (!R.isEmpty(o)) {
      const $ = { name: r, value: o.trim() };
      w({ ...z, target: $ }, $);
    }
  }, te = (z) => {
    const { key: $ } = z;
    $ === "Enter" && (z.preventDefault(), X(z), k && k(z));
  }, oe = () => {
    const z = ge === "password", $ = z ? "text" : "password", D = z ? "eye" : "eye slash";
    Ne($), me(D);
  }, be = (z) => {
    const $ = { name: r, value: "" };
    e.fieldIndex !== void 0 && ($.fieldIndex = e.fieldIndex), e.id !== void 0 && ($.id = e.id), w({ ...z, target: $ }, $), F && F();
  }, Se = () => {
    he(!0);
  }, ye = (z) => {
    X(z), he(!1);
  }, fe = () => n ? re ? _r.clearIconFocused : _r.clearIcon : _ ? re ? _r.clearRoundedIconLastFocused : _r.clearRoundedIconLast : re ? _r.clearIconLastFocused : _r.clearIconLast, Ce = () => {
    if (!c) return;
    if (J.isValidElement(c)) return c;
    const z = d || p;
    return /* @__PURE__ */ ae("span", { className: `${_r.labelRoot} ${g}`.trim(), children: [
      /* @__PURE__ */ O("span", { children: c }),
      S ? /* @__PURE__ */ O("span", { className: _r.labelRequired, children: " *" }) : null,
      z ? /* @__PURE__ */ O(
        ur,
        {
          wide: h ? "very" : !0,
          hoverable: h,
          position: m,
          content: z,
          trigger: /* @__PURE__ */ O(We, { name: "info circle", className: _r.infoIcon })
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
  ]), W = n || !R.isEmpty(u);
  return /* @__PURE__ */ ae(
    Mn.Input,
    {
      ...De,
      className: `${_r.input} ${b ? _r.disabled : ""} ${s || ""}`,
      disabled: b,
      onChange: w,
      name: r,
      label: Ce(),
      placeholder: y === "" ? "" : R.isEmpty(y) ? typeof c == "string" ? c : "" : y,
      value: o,
      type: n ? ge : C,
      ...W ? { iconPosition: "left" } : {},
      autoComplete: "off",
      fluid: P,
      onFocus: Se,
      onBlur: ye,
      onKeyPress: te,
      action: !0,
      children: [
        I === "left" && !R.isEmpty(E) && !A && /* @__PURE__ */ O(Wr, { labeled: !0, ...E }),
        W && /* @__PURE__ */ O(We, { name: n ? "lock" : u }),
        /* @__PURE__ */ O("input", { ref: t || U, required: S }),
        I === "right" ? /* @__PURE__ */ ae(Ca, { children: [
          !R.isEmpty(o) && !b && !T && /* @__PURE__ */ O(gt, { className: fe(), icon: "cancel", onClick: be, tabIndex: -1 }),
          !A && /* @__PURE__ */ O(Wr, { labeled: !0, ...E })
        ] }) : !T && !R.isEmpty(o) && !b && /* @__PURE__ */ O(gt, { className: fe(), icon: "cancel", onClick: be, tabIndex: -1 }),
        n && /* @__PURE__ */ O(
          gt,
          {
            className: _ ? _r.clearRoundedIconLast : _r.clearIconLast,
            icon: le,
            onClick: oe,
            tabIndex: -1
          }
        )
      ]
    }
  );
});
kZ.propTypes = {
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
const Y_ = 49, NZ = "_activeItem_1ays7_1", IZ = "_item_1ays7_15", AZ = "_itemMultiple_1ays7_39", RZ = "_itemSelect_1ays7_49", MZ = "_itemSelectMultiple_1ays7_73", DZ = "_menu_1ays7_85", LZ = "_titleMenuItem_1ays7_99", FZ = "_titleMenu_1ays7_99", $Z = "_activeMenuItem_1ays7_133", BZ = "_menuItem_1ays7_163", jZ = "_titleText_1ays7_183", WZ = "_text_1ays7_197", zZ = "_subText_1ays7_211", UZ = "_icon_1ays7_225", HZ = "_subIcon_1ays7_235", hn = {
  activeItem: NZ,
  item: IZ,
  itemMultiple: AZ,
  itemSelect: RZ,
  itemSelectMultiple: MZ,
  menu: DZ,
  titleMenuItem: LZ,
  titleMenu: FZ,
  activeMenuItem: $Z,
  menuItem: BZ,
  titleText: jZ,
  text: WZ,
  subText: zZ,
  icon: UZ,
  subIcon: HZ
}, qu = ({
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
  const [p, h] = ot(u), m = R.isEmpty(s) ? r : `${r}${s[0].path}`, g = (F, E) => {
    c ? d(F, E) : d && d();
  }, y = () => {
    R.isEmpty(s) ? g(m, o) : h((F) => !F);
  }, b = ({ placement: F, popper: E, reference: I }) => {
    if (R.isEmpty(s))
      return [];
    if (F === "right") {
      const S = E.height - Y_, P = S / 2, C = I.y + S;
      let T = P - (e ? 0 : Y_);
      return typeof window < "u" && C > window.innerHeight && (T -= window.innerHeight - C), [T, 0];
    }
    return [];
  }, _ = () => {
    if (R.isEmpty(s)) return null;
    const F = typeof window < "u" ? window.location.pathname : "";
    return R.map(s, (I) => {
      const S = `${r}${I.path}`, P = F === S;
      return /* @__PURE__ */ ae(
        In.Item,
        {
          className: P ? hn.activeMenuItem : hn.menuItem,
          onClick: () => g(S, o),
          children: [
            !R.isEmpty(I.icon) && /* @__PURE__ */ O(We, { className: hn.subIcon, name: I.icon }),
            /* @__PURE__ */ O("span", { className: hn.subText, children: I.name })
          ]
        },
        I.id
      );
    });
  }, w = () => e ? p ? /* @__PURE__ */ ae("div", { className: hn.itemSelectMultiple, children: [
    /* @__PURE__ */ O(In.Item, { className: hn.itemMultiple, onClick: y, children: /* @__PURE__ */ ae("div", { className: hn.activeItem, children: [
      !R.isEmpty(n) && /* @__PURE__ */ O(We, { className: hn.icon, name: n }),
      /* @__PURE__ */ O(Fl, { className: hn.text, children: t })
    ] }) }),
    _()
  ] }) : /* @__PURE__ */ O(In.Item, { className: u ? hn.itemSelect : hn.item, onClick: y, children: /* @__PURE__ */ ae("div", { className: hn.activeItem, children: [
    !R.isEmpty(n) && /* @__PURE__ */ O(We, { className: hn.icon, name: n }),
    /* @__PURE__ */ O(Fl, { className: hn.text, children: t })
  ] }) }) : /* @__PURE__ */ O(
    In.Item,
    {
      className: u ? hn.itemSelect : hn.item,
      onClick: () => g(m, o),
      children: /* @__PURE__ */ O("div", { className: hn.activeItem, children: !R.isEmpty(n) && /* @__PURE__ */ O(We, { className: hn.icon, name: n }) })
    }
  ), k = () => {
    R.isEmpty(s) && g(r, o);
  };
  return /* @__PURE__ */ O(
    ur,
    {
      className: hn.menu,
      on: "hover",
      hoverable: !0,
      position: "right center",
      pinned: !0,
      basic: !0,
      disabled: e,
      offset: b,
      trigger: w(),
      children: /* @__PURE__ */ O(ur.Content, { children: /* @__PURE__ */ ae(In, { vertical: !0, children: [
        !e && /* @__PURE__ */ O(In.Item, { className: R.isEmpty(s) ? hn.titleMenu : hn.titleMenuItem, onClick: k, children: /* @__PURE__ */ O(Fl, { className: hn.titleText, children: t }) }),
        _()
      ] }) })
    }
  );
};
qu.propTypes = {
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
const YZ = "_sideBar_wxxzs_1", qZ = "_collapsedSidebar_wxxzs_13", VZ = "_menuItems_wxxzs_25", GZ = "_mobileItems_wxxzs_37", KZ = "_divider_wxxzs_49", Cl = {
  sideBar: YZ,
  collapsedSidebar: qZ,
  menuItems: VZ,
  mobileItems: GZ,
  divider: KZ
}, ZZ = ({
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
  const p = (m, g) => {
    g === "link" ? window.open(m, "_blank") : u ? u(m, g) : g === "menu" && typeof window < "u" && (window.location.pathname = m);
  }, h = () => {
    if (R.isEmpty(n)) return null;
    const m = c || (typeof window < "u" ? window.location.pathname : "");
    return R.map(n, (y) => {
      if (y.type === "divider") return /* @__PURE__ */ O("div", { className: Cl.divider }, y.id);
      let b = m === y.path;
      if (!R.isEmpty(y.subMenu)) {
        const _ = R.map(y.subMenu, (w) => `${y.path}${w.path}`);
        b = R.includes(_, m);
      }
      return /* @__PURE__ */ O(
        qu,
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
  return /* @__PURE__ */ ae(
    ti,
    {
      className: t ? Cl.sideBar : Cl.collapsedSidebar,
      as: In,
      direction: "left",
      animation: r ? "overlay" : "push",
      visible: o,
      vertical: !0,
      icon: !0,
      width: "wide",
      children: [
        d && s && /* @__PURE__ */ O(qu, { isExtended: r ? !0 : t, allowNavigation: !1, path: null, name: s }),
        /* @__PURE__ */ O("div", { className: r ? Cl.mobileItems : Cl.menuItems, children: h() }),
        /* @__PURE__ */ O(
          qu,
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
ZZ.propTypes = {
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
const XZ = "_fullScreen_1chi0_3", QZ = "_large_1chi0_11", JZ = "_small_1chi0_19", eX = "_tiny_1chi0_27", tX = "_mini_1chi0_35", nX = "_modalHeader_1chi0_43", rX = "_tabsContainer_1chi0_63", aX = "_modalContent_1chi0_73", oX = "_modalContentNoFlex_1chi0_91", iX = "_modalFooter_1chi0_131", sX = "_iconHeader_1chi0_145", lX = "_topEditButton_1chi0_153", cX = "_topWatchButton_1chi0_171", uX = "_topPrintButton_1chi0_189", dX = "_positiveButton_1chi0_221", fX = "_negativeButton_1chi0_251", pX = "_disabled_1chi0_281", hX = "_rowButton_1chi0_295", mX = "_modal_1chi0_43", gX = "_modalHeaderTitle_1chi0_401", vX = "_modalCloseInside_1chi0_595", Pn = {
  fullScreen: XZ,
  large: QZ,
  small: JZ,
  tiny: eX,
  mini: tX,
  modalHeader: nX,
  tabsContainer: rX,
  modalContent: aX,
  modalContentNoFlex: oX,
  modalFooter: iX,
  iconHeader: sX,
  topEditButton: lX,
  topWatchButton: cX,
  topPrintButton: uX,
  positiveButton: dX,
  negativeButton: fX,
  disabled: pX,
  rowButton: hX,
  modal: mX,
  modalHeaderTitle: gX,
  modalCloseInside: vX
}, yX = "_divHeaderNav_7mcz0_1", bX = "_navButton_7mcz0_23", _X = "_errorsButon_7mcz0_49", wX = "_volatileError_7mcz0_93", xX = "_buttonContainer_7mcz0_181", EX = "_redButton_7mcz0_195", CX = "_active_7mcz0_233", OX = "_moreWrapper_7mcz0_263", SX = "_moreButton_7mcz0_275", TX = "_moreDropdown_7mcz0_293", Rr = {
  divHeaderNav: yX,
  navButton: bX,
  errorsButon: _X,
  volatileError: wX,
  buttonContainer: xX,
  redButton: EX,
  active: CX,
  moreWrapper: OX,
  moreButton: SX,
  moreDropdown: TX
}, fC = ({ handleStateHeader: e, stateHeader: t, buttons: n }) => {
  const [r, o] = ot([]), [s, u] = ot([]), [c, d] = ot(!1), p = Nn(null), h = (y, b = !1) => {
    if (!p.current) return 0;
    const _ = document.createElement("button");
    _.className = b ? Rr.moreButton : Rr.navButton, _.style.cssText = "visibility: hidden; position: absolute; font-size: 16px; padding: 12px 20px; white-space: nowrap;", _.innerHTML = y, p.current.appendChild(_);
    const w = _.offsetWidth;
    return p.current.removeChild(_), w;
  }, m = () => {
    if (!p.current) return;
    const y = p.current.clientWidth;
    if (y === 0) return;
    const b = h("...");
    let _ = 0;
    const w = [], k = [], F = R.orderBy(n, ["order"], ["asc"]), E = F.length;
    R.forEach(F, (I, S) => {
      const P = `<i class="icon ${I.icon}"></i> ${I.label} ${I.count ? `(${I.count})` : ""}`, C = h(P), A = S === E - 1 ? 0 : b;
      _ + C + A <= y - 10 ? (_ += C, w.push(I)) : k.push(I);
    }), o(w), u(k);
  };
  Vt(() => {
    const y = new ResizeObserver(m);
    return p.current && y.observe(p.current), () => y.disconnect();
  }, [n]), Vt(() => {
    const y = (b) => {
      p.current && !p.current.contains(b.target) && d(!1);
    };
    return document.addEventListener("mousedown", y), () => document.removeEventListener("mousedown", y);
  }, []);
  const g = (y, b = !1) => {
    const _ = R.filter([
      Rr.navButton,
      t === y.state && Rr.active,
      y.errors && Rr.errorsButon,
      y.color === "red" && Rr.redButton
    ]).join(" ");
    return /* @__PURE__ */ ae("div", { className: Rr.buttonContainer, children: [
      /* @__PURE__ */ ae(
        gt,
        {
          disabled: !!y.disabled,
          className: _,
          onClick: () => {
            y.disabled || (y.onClick ? y.onClick() : e(y.state), b && d(!1));
          },
          children: [
            /* @__PURE__ */ O(We, { name: y.icon }),
            y.label,
            " ",
            y.count !== void 0 && `(${y.count})`
          ]
        }
      ),
      !R.isEmpty(y.error) && /* @__PURE__ */ O("div", { className: Rr.volatileError, children: "Campos Requeridos" })
    ] }, y.key);
  };
  return /* @__PURE__ */ ae("div", { className: Rr.divHeaderNav, ref: p, children: [
    R.map(r, (y) => g(y)),
    !R.isEmpty(s) && /* @__PURE__ */ ae("div", { className: Rr.moreWrapper, children: [
      /* @__PURE__ */ O(
        gt,
        {
          className: Rr.moreButton,
          onClick: () => d(!c),
          children: "..."
        }
      ),
      c && /* @__PURE__ */ O("div", { className: Rr.moreDropdown, children: R.map(s, (y) => g(y, !0)) })
    ] })
  ] });
};
fC.propTypes = {
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
const PX = ({
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
  saveLabel: g = "Guardar",
  cancelLabel: y = "Atrás",
  headerButtons: b = [],
  footerButtons: _ = [],
  printAction: w = null,
  saveDisabled: k = !1,
  className: F = "",
  ignoreContent: E = !1,
  hideEditButton: I = !1,
  tabs: S = [],
  activeTab: P = "",
  onTabChange: C = () => {
  },
  customHeight: T = "",
  closeOnDimmerClick: A = !0,
  contentStyle: B = {},
  closeInside: H = !1,
  closeIconInside: ne = !1,
  closeIcon: U = !0
}) => {
  const [re, he] = ot("list"), ge = H || ne;
  Vt(() => {
    Ne();
  }, [n]);
  const Ne = () => {
    let te = t;
    if (R.isEmpty(t))
      switch (n) {
        case "Add":
          te = "plus";
          break;
        case "Edit":
          te = "edit";
          break;
        case "Watch":
          te = "eye";
          break;
        default:
          te = "list";
          break;
      }
    he(te);
  }, le = () => {
    u();
  }, me = () => {
    c();
  }, X = h ? {
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
  return /* @__PURE__ */ ae(
    un,
    {
      className: `${R.isEmpty(p) ? "" : Pn[p]} ${F} ${Pn.modal} ${ge ? Pn.modalCloseInside : ""}`,
      style: X,
      open: !0,
      closeIcon: U,
      closeOnDimmerClick: A,
      onClose: le,
      children: [
        /* @__PURE__ */ ae(un.Header, { className: Pn.modalHeader, children: [
          /* @__PURE__ */ ae("div", { className: Pn.modalHeaderTitle, children: [
            /* @__PURE__ */ O(We, { name: re, className: Pn.iconHeader }),
            o,
            s && ` - Id: ${s}`
          ] }),
          !R.isEmpty(b) && b,
          /* @__PURE__ */ ae("div", { className: Pn.rowButton, children: [
            n === "Watch" && !I && /* @__PURE__ */ O(
              gt,
              {
                onClick: () => {
                  r("Edit");
                },
                className: Pn.topEditButton,
                children: /* @__PURE__ */ O(We, { name: "edit" })
              }
            ),
            n === "Edit" && /* @__PURE__ */ O(
              gt,
              {
                onClick: () => {
                  r("Watch");
                },
                className: Pn.topWatchButton,
                children: /* @__PURE__ */ O(We, { name: "eye" })
              }
            ),
            w && /* @__PURE__ */ O(
              gt,
              {
                onClick: () => {
                  typeof w == "function" && w();
                },
                className: Pn.topPrintButton,
                title: "Imprimir",
                children: /* @__PURE__ */ O(We, { name: "print" })
              }
            )
          ] })
        ] }),
        !R.isEmpty(S) && /* @__PURE__ */ O("div", { className: Pn.tabsContainer, children: /* @__PURE__ */ O(fC, { buttons: S, stateHeader: P, handleStateHeader: C }) }),
        /* @__PURE__ */ O(
          un.Content,
          {
            className: E ? Pn.modalContentNoFlex : Pn.modalContent,
            style: h ? { minHeight: "calc(95vh - 8rem)", ...B } : T ? { height: T, minHeight: T, ...B } : { ...B },
            scrolling: !0,
            children: e
          }
        ),
        /* @__PURE__ */ ae(un.Actions, { className: Pn.modalFooter, children: [
          !R.isEmpty(_) && _,
          n === "Watch" ? /* @__PURE__ */ O(gt, { className: Pn.negativeButton, onClick: le, children: "Cerrar" }) : /* @__PURE__ */ O(gt, { className: Pn.negativeButton, onClick: le, children: y }),
          n !== "Watch" && c && /* @__PURE__ */ O(
            gt,
            {
              className: `${Pn.positiveButton} ${k ? Pn.disabled : ""}`,
              onClick: me,
              disabled: k,
              children: n === "Add" ? g : m
            }
          )
        ] })
      ]
    }
  );
};
PX.propTypes = {
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
  contentStyle: l.object,
  closeInside: l.bool,
  closeIconInside: l.bool,
  closeIcon: l.bool
};
const kX = "_modal_3j9dd_1", NX = "_header_3j9dd_11", IX = "_actions_3j9dd_25", AX = "_leftActions_3j9dd_39", RX = "_rightActions_3j9dd_51", MX = "_positiveButton_3j9dd_63", DX = "_negativeButton_3j9dd_91", LX = "_content_3j9dd_121", FX = "_focus_3j9dd_129", $X = "_contactHeader_3j9dd_139", BX = "_contactPositiveButton_3j9dd_149", jX = "_centerModal_3j9dd_169", Yn = {
  modal: kX,
  header: NX,
  actions: IX,
  leftActions: AX,
  rightActions: RX,
  positiveButton: MX,
  negativeButton: DX,
  content: LX,
  focus: FX,
  contactHeader: $X,
  contactPositiveButton: BX,
  centerModal: jX
}, WX = ({
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
  className: g = "",
  useContactStyles: y = !1,
  centerModal: b = !1,
  headerColor: _,
  hideConfirm: w = !1
}) => /* @__PURE__ */ ae(
  un,
  {
    open: e,
    size: "tiny",
    closeOnDimmerClick: !1,
    dimmer: "blurring",
    className: `${Yn.modal} ${g} ${y ? Yn.contact : ""} ${b ? Yn.centerModal : ""}`,
    style: m,
    children: [
      /* @__PURE__ */ ae(
        un.Header,
        {
          className: `${Yn.header} ${y ? Yn.contactHeader : ""}`,
          style: _ ? { "--custom-header-color": _ } : {},
          children: [
            !R.isEmpty(p) && /* @__PURE__ */ O(We, { name: p }),
            ` ${r}`
          ]
        }
      ),
      /* @__PURE__ */ O(un.Content, { className: Yn.contentContainer, children: /* @__PURE__ */ O(Fl, { className: Yn.content, children: n || /* @__PURE__ */ ae(Ca, { children: [
        `¿${t}`,
        u ? /* @__PURE__ */ ae(Ca, { children: [
          /* @__PURE__ */ O("span", { className: Yn.focus, children: u }),
          "?"
        ] }) : "?"
      ] }) }) }),
      /* @__PURE__ */ ae(un.Actions, { className: Yn.actions, children: [
        /* @__PURE__ */ O("div", { className: Yn.leftActions, children: h }),
        /* @__PURE__ */ ae("div", { className: Yn.rightActions, children: [
          /* @__PURE__ */ O(gt, { className: `${Yn.negativeButton} ${y ? Yn.contactNegativeButton : ""}`, onClick: d, children: s }),
          !w && /* @__PURE__ */ O(gt, { className: `${Yn.positiveButton} ${y ? Yn.contactPositiveButton : ""}`, onClick: c, children: o })
        ] })
      ] })
    ]
  }
);
WX.propTypes = {
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
const zX = "_modal_s72ln_1", UX = "_content_s72ln_13", HX = "_messageBody_s72ln_33", YX = "_actions_s72ln_73", qX = "_button_s72ln_81", Ol = {
  modal: zX,
  content: UX,
  messageBody: HX,
  actions: YX,
  button: qX
}, VX = (e) => {
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
}, GX = ({ text: e = "", isVisible: t = !1, isError: n = !1, onDismiss: r }) => {
  const o = VX(e);
  return /* @__PURE__ */ ae(un, { open: t, closeOnDimmerClick: !1, className: Ol.modal, size: "small", children: [
    /* @__PURE__ */ ae(un.Content, { className: Ol.content, children: [
      /* @__PURE__ */ O(We, { name: n ? "warning sign" : "check circle", size: "big", color: n ? "red" : "green" }),
      /* @__PURE__ */ O("pre", { className: Ol.messageBody, children: o })
    ] }),
    /* @__PURE__ */ O(un.Actions, { className: Ol.actions, children: /* @__PURE__ */ O(gt, { className: Ol.button, onClick: r, color: n ? "red" : "green", fluid: !0, children: "Cerrar" }) })
  ] });
};
GX.propTypes = {
  text: l.oneOfType([l.string, l.object]),
  isVisible: l.bool,
  isError: l.bool,
  onDismiss: l.func
};
const KX = "_loading_5559w_1", ZX = {
  loading: KX
}, XX = ({ isFetching: e }) => /* @__PURE__ */ O(Mo, { page: !0, active: e, children: /* @__PURE__ */ O(tc, { className: ZX.loading, size: "large", children: "Loading..." }) });
XX.propTypes = {
  isFetching: l.bool.isRequired
};
export {
  so as Card,
  WX as ConfirmModal,
  qs as Dropdown,
  BK as FileManager,
  PX as IkModal,
  dV as IkTable,
  kZ as Input,
  XX as Loading,
  GX as NotificationDialog,
  ZZ as SideBar,
  qu as SideBarMenu,
  Fl as Text,
  yZ as TextArea,
  kw as Toggle
};
