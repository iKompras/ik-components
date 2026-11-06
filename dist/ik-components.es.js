var jI = Object.defineProperty;
var WI = (e, t, n) => t in e ? jI(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var pl = (e, t, n) => WI(e, typeof t != "symbol" ? t + "" : t, n);
import { jsxs as ie, jsx as O, Fragment as Ca } from "react/jsx-runtime";
import * as L from "react";
import ee, { Children as lm, PureComponent as V_, Component as Qn, createRef as wr, isValidElement as zI, cloneElement as q_, createElement as gp, createContext as UI, useContext as HI, forwardRef as pc, useState as at, useMemo as YI, useRef as En, useImperativeHandle as VI, useEffect as Gt, useCallback as Jp, useLayoutEffect as qI } from "react";
import * as eh from "react-dom";
import GI, { createPortal as G_ } from "react-dom";
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
function KI() {
  if (ob) return Wt;
  ob = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, u = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, _ = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, k = e ? Symbol.for("react.responder") : 60118, F = e ? Symbol.for("react.scope") : 60119;
  function E(T) {
    if (typeof T == "object" && T !== null) {
      var P = T.$$typeof;
      switch (P) {
        case t:
          switch (T = T.type, T) {
            case d:
            case p:
            case r:
            case s:
            case o:
            case m:
              return T;
            default:
              switch (T = T && T.$$typeof, T) {
                case c:
                case h:
                case b:
                case y:
                case u:
                  return T;
                default:
                  return P;
              }
          }
        case n:
          return P;
      }
    }
  }
  function I(T) {
    return E(T) === p;
  }
  return Wt.AsyncMode = d, Wt.ConcurrentMode = p, Wt.ContextConsumer = c, Wt.ContextProvider = u, Wt.Element = t, Wt.ForwardRef = h, Wt.Fragment = r, Wt.Lazy = b, Wt.Memo = y, Wt.Portal = n, Wt.Profiler = s, Wt.StrictMode = o, Wt.Suspense = m, Wt.isAsyncMode = function(T) {
    return I(T) || E(T) === d;
  }, Wt.isConcurrentMode = I, Wt.isContextConsumer = function(T) {
    return E(T) === c;
  }, Wt.isContextProvider = function(T) {
    return E(T) === u;
  }, Wt.isElement = function(T) {
    return typeof T == "object" && T !== null && T.$$typeof === t;
  }, Wt.isForwardRef = function(T) {
    return E(T) === h;
  }, Wt.isFragment = function(T) {
    return E(T) === r;
  }, Wt.isLazy = function(T) {
    return E(T) === b;
  }, Wt.isMemo = function(T) {
    return E(T) === y;
  }, Wt.isPortal = function(T) {
    return E(T) === n;
  }, Wt.isProfiler = function(T) {
    return E(T) === s;
  }, Wt.isStrictMode = function(T) {
    return E(T) === o;
  }, Wt.isSuspense = function(T) {
    return E(T) === m;
  }, Wt.isValidElementType = function(T) {
    return typeof T == "string" || typeof T == "function" || T === r || T === p || T === s || T === o || T === m || T === g || typeof T == "object" && T !== null && (T.$$typeof === b || T.$$typeof === y || T.$$typeof === u || T.$$typeof === c || T.$$typeof === h || T.$$typeof === w || T.$$typeof === k || T.$$typeof === F || T.$$typeof === _);
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
function ZI() {
  return ib || (ib = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, u = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, _ = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, k = e ? Symbol.for("react.responder") : 60118, F = e ? Symbol.for("react.scope") : 60119;
    function E(D) {
      return typeof D == "string" || typeof D == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      D === r || D === p || D === s || D === o || D === m || D === g || typeof D == "object" && D !== null && (D.$$typeof === b || D.$$typeof === y || D.$$typeof === u || D.$$typeof === c || D.$$typeof === h || D.$$typeof === w || D.$$typeof === k || D.$$typeof === F || D.$$typeof === _);
    }
    function I(D) {
      if (typeof D == "object" && D !== null) {
        var q = D.$$typeof;
        switch (q) {
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
                    return q;
                }
            }
          case n:
            return q;
        }
      }
    }
    var T = d, P = p, C = c, S = u, A = t, B = h, U = r, re = b, G = y, ae = n, he = s, ye = o, ke = m, se = !1;
    function me(D) {
      return se || (se = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), X(D) || I(D) === d;
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
    function _e(D) {
      return typeof D == "object" && D !== null && D.$$typeof === t;
    }
    function Se(D) {
      return I(D) === h;
    }
    function ve(D) {
      return I(D) === r;
    }
    function ue(D) {
      return I(D) === b;
    }
    function xe(D) {
      return I(D) === y;
    }
    function ge(D) {
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
    zt.AsyncMode = T, zt.ConcurrentMode = P, zt.ContextConsumer = C, zt.ContextProvider = S, zt.Element = A, zt.ForwardRef = B, zt.Fragment = U, zt.Lazy = re, zt.Memo = G, zt.Portal = ae, zt.Profiler = he, zt.StrictMode = ye, zt.Suspense = ke, zt.isAsyncMode = me, zt.isConcurrentMode = X, zt.isContextConsumer = te, zt.isContextProvider = oe, zt.isElement = _e, zt.isForwardRef = Se, zt.isFragment = ve, zt.isLazy = ue, zt.isMemo = xe, zt.isPortal = ge, zt.isProfiler = W, zt.isStrictMode = z, zt.isSuspense = $, zt.isValidElementType = E, zt.typeOf = I;
  }()), zt;
}
var sb;
function cm() {
  return sb || (sb = 1, process.env.NODE_ENV === "production" ? wu.exports = KI() : wu.exports = ZI()), wu.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var vp, lb;
function XI() {
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
function QI() {
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
function JI() {
  if (fb) return wp;
  fb = 1;
  var e = cm(), t = XI(), n = um(), r = K_(), o = QI(), s = function() {
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
      elementType: T(),
      instanceOf: P,
      node: B(),
      objectOf: S,
      oneOf: C,
      oneOfType: A,
      shape: re,
      exact: G
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
      function _e(ve, ue, xe, ge, W, z, $) {
        if (ge = ge || g, z = z || xe, $ !== n) {
          if (d) {
            var D = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw D.name = "Invariant Violation", D;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var q = ge + ":" + xe;
            !te[q] && // Avoid spamming the console because they are often not actionable except for lib authors
            oe < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + z + "` prop on `" + ge + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), te[q] = !0, oe++);
          }
        }
        return ue[xe] == null ? ve ? ue[xe] === null ? new _("The " + W + " `" + z + "` is marked as required " + ("in `" + ge + "`, but its value is `null`.")) : new _("The " + W + " `" + z + "` is marked as required in " + ("`" + ge + "`, but its value is `undefined`.")) : null : X(ue, xe, ge, W, z);
      }
      var Se = _e.bind(null, !1);
      return Se.isRequired = _e.bind(null, !0), Se;
    }
    function k(X) {
      function te(oe, _e, Se, ve, ue, xe) {
        var ge = oe[_e], W = ye(ge);
        if (W !== X) {
          var z = ke(ge);
          return new _(
            "Invalid " + ve + " `" + ue + "` of type " + ("`" + z + "` supplied to `" + Se + "`, expected ") + ("`" + X + "`."),
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
      function te(oe, _e, Se, ve, ue) {
        if (typeof X != "function")
          return new _("Property `" + ue + "` of component `" + Se + "` has invalid PropType notation inside arrayOf.");
        var xe = oe[_e];
        if (!Array.isArray(xe)) {
          var ge = ye(xe);
          return new _("Invalid " + ve + " `" + ue + "` of type " + ("`" + ge + "` supplied to `" + Se + "`, expected an array."));
        }
        for (var W = 0; W < xe.length; W++) {
          var z = X(xe, W, Se, ve, ue + "[" + W + "]", n);
          if (z instanceof Error)
            return z;
        }
        return null;
      }
      return w(te);
    }
    function I() {
      function X(te, oe, _e, Se, ve) {
        var ue = te[oe];
        if (!c(ue)) {
          var xe = ye(ue);
          return new _("Invalid " + Se + " `" + ve + "` of type " + ("`" + xe + "` supplied to `" + _e + "`, expected a single ReactElement."));
        }
        return null;
      }
      return w(X);
    }
    function T() {
      function X(te, oe, _e, Se, ve) {
        var ue = te[oe];
        if (!e.isValidElementType(ue)) {
          var xe = ye(ue);
          return new _("Invalid " + Se + " `" + ve + "` of type " + ("`" + xe + "` supplied to `" + _e + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return w(X);
    }
    function P(X) {
      function te(oe, _e, Se, ve, ue) {
        if (!(oe[_e] instanceof X)) {
          var xe = X.name || g, ge = me(oe[_e]);
          return new _("Invalid " + ve + " `" + ue + "` of type " + ("`" + ge + "` supplied to `" + Se + "`, expected ") + ("instance of `" + xe + "`."));
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
      function te(oe, _e, Se, ve, ue) {
        for (var xe = oe[_e], ge = 0; ge < X.length; ge++)
          if (b(xe, X[ge]))
            return null;
        var W = JSON.stringify(X, function($, D) {
          var q = ke(D);
          return q === "symbol" ? String(D) : D;
        });
        return new _("Invalid " + ve + " `" + ue + "` of value `" + String(xe) + "` " + ("supplied to `" + Se + "`, expected one of " + W + "."));
      }
      return w(te);
    }
    function S(X) {
      function te(oe, _e, Se, ve, ue) {
        if (typeof X != "function")
          return new _("Property `" + ue + "` of component `" + Se + "` has invalid PropType notation inside objectOf.");
        var xe = oe[_e], ge = ye(xe);
        if (ge !== "object")
          return new _("Invalid " + ve + " `" + ue + "` of type " + ("`" + ge + "` supplied to `" + Se + "`, expected an object."));
        for (var W in xe)
          if (r(xe, W)) {
            var z = X(xe, W, Se, ve, ue + "." + W, n);
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
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + se(oe) + " at index " + te + "."
          ), u;
      }
      function _e(Se, ve, ue, xe, ge) {
        for (var W = [], z = 0; z < X.length; z++) {
          var $ = X[z], D = $(Se, ve, ue, xe, ge, n);
          if (D == null)
            return null;
          D.data && r(D.data, "expectedType") && W.push(D.data.expectedType);
        }
        var q = W.length > 0 ? ", expected one of type [" + W.join(", ") + "]" : "";
        return new _("Invalid " + xe + " `" + ge + "` supplied to " + ("`" + ue + "`" + q + "."));
      }
      return w(_e);
    }
    function B() {
      function X(te, oe, _e, Se, ve) {
        return ae(te[oe]) ? null : new _("Invalid " + Se + " `" + ve + "` supplied to " + ("`" + _e + "`, expected a ReactNode."));
      }
      return w(X);
    }
    function U(X, te, oe, _e, Se) {
      return new _(
        (X || "React class") + ": " + te + " type `" + oe + "." + _e + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + Se + "`."
      );
    }
    function re(X) {
      function te(oe, _e, Se, ve, ue) {
        var xe = oe[_e], ge = ye(xe);
        if (ge !== "object")
          return new _("Invalid " + ve + " `" + ue + "` of type `" + ge + "` " + ("supplied to `" + Se + "`, expected `object`."));
        for (var W in X) {
          var z = X[W];
          if (typeof z != "function")
            return U(Se, ve, ue, W, ke(z));
          var $ = z(xe, W, Se, ve, ue + "." + W, n);
          if ($)
            return $;
        }
        return null;
      }
      return w(te);
    }
    function G(X) {
      function te(oe, _e, Se, ve, ue) {
        var xe = oe[_e], ge = ye(xe);
        if (ge !== "object")
          return new _("Invalid " + ve + " `" + ue + "` of type `" + ge + "` " + ("supplied to `" + Se + "`, expected `object`."));
        var W = t({}, oe[_e], X);
        for (var z in W) {
          var $ = X[z];
          if (r(X, z) && typeof $ != "function")
            return U(Se, ve, ue, z, ke($));
          if (!$)
            return new _(
              "Invalid " + ve + " `" + ue + "` key `" + z + "` supplied to `" + Se + "`.\nBad object: " + JSON.stringify(oe[_e], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(X), null, "  ")
            );
          var D = $(xe, z, Se, ve, ue + "." + z, n);
          if (D)
            return D;
        }
        return null;
      }
      return w(te);
    }
    function ae(X) {
      switch (typeof X) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !X;
        case "object":
          if (Array.isArray(X))
            return X.every(ae);
          if (X === null || c(X))
            return !0;
          var te = m(X);
          if (te) {
            var oe = te.call(X), _e;
            if (te !== X.entries) {
              for (; !(_e = oe.next()).done; )
                if (!ae(_e.value))
                  return !1;
            } else
              for (; !(_e = oe.next()).done; ) {
                var Se = _e.value;
                if (Se && !ae(Se[1]))
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
    function ye(X) {
      var te = typeof X;
      return Array.isArray(X) ? "array" : X instanceof RegExp ? "object" : he(te, X) ? "symbol" : te;
    }
    function ke(X) {
      if (typeof X > "u" || X === null)
        return "" + X;
      var te = ye(X);
      if (te === "object") {
        if (X instanceof Date)
          return "date";
        if (X instanceof RegExp)
          return "regexp";
      }
      return te;
    }
    function se(X) {
      var te = ke(X);
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
function eA() {
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
  var tA = cm(), nA = !0;
  th.exports = JI()(tA.isElement, nA);
} else
  th.exports = eA()();
var ar = th.exports;
const l = /* @__PURE__ */ hc(ar);
function rA(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
var aA = cm();
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
}, qu = function(t) {
  return (
    // https://github.com/facebook/react/blob/v16.8.2/packages/react-reconciler/src/ReactFiberCommitWork.js#L665
    t !== null && typeof t == "object" && t.hasOwnProperty("current")
  );
};
function hb(e) {
  return e === null || e instanceof Element || e instanceof Text ? !1 : !!(e.type && e.tag);
}
var oA = /* @__PURE__ */ function(e) {
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
}(L.Component), iA = /* @__PURE__ */ function(e) {
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
}(L.Component), sA = ["children", "innerRef"], ur = function(t) {
  var n = t.children, r = t.innerRef, o = rA(t, sA), s = L.Children.only(n), u = aA.isForwardRef(s) ? iA : oA, c = s && o && Object.keys(o).length > 0 ? /* @__PURE__ */ L.cloneElement(s, o) : s;
  return /* @__PURE__ */ L.createElement(u, {
    innerRef: r
  }, c);
};
function pe() {
  return pe = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, pe.apply(null, arguments);
}
var lA = Object.prototype, cA = lA.hasOwnProperty;
function uA(e, t) {
  return e != null && cA.call(e, t);
}
var yn = Array.isArray, Z_ = typeof global == "object" && global && global.Object === Object && global, dA = typeof self == "object" && self && self.Object === Object && self, ro = Z_ || dA || Function("return this")(), Oa = ro.Symbol, X_ = Object.prototype, fA = X_.hasOwnProperty, pA = X_.toString, hl = Oa ? Oa.toStringTag : void 0;
function hA(e) {
  var t = fA.call(e, hl), n = e[hl];
  try {
    e[hl] = void 0;
    var r = !0;
  } catch {
  }
  var o = pA.call(e);
  return r && (t ? e[hl] = n : delete e[hl]), o;
}
var mA = Object.prototype, gA = mA.toString;
function vA(e) {
  return gA.call(e);
}
var yA = "[object Null]", bA = "[object Undefined]", mb = Oa ? Oa.toStringTag : void 0;
function ka(e) {
  return e == null ? e === void 0 ? bA : yA : mb && mb in Object(e) ? hA(e) : vA(e);
}
function jr(e) {
  return e != null && typeof e == "object";
}
var _A = "[object Symbol]";
function Oi(e) {
  return typeof e == "symbol" || jr(e) && ka(e) == _A;
}
var wA = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, xA = /^\w*$/;
function dm(e, t) {
  if (yn(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Oi(e) ? !0 : xA.test(e) || !wA.test(e) || t != null && e in Object(t);
}
function Xa(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var EA = "[object AsyncFunction]", CA = "[object Function]", OA = "[object GeneratorFunction]", SA = "[object Proxy]";
function bs(e) {
  if (!Xa(e))
    return !1;
  var t = ka(e);
  return t == CA || t == OA || t == EA || t == SA;
}
var Ep = ro["__core-js_shared__"], gb = function() {
  var e = /[^.]+$/.exec(Ep && Ep.keys && Ep.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function TA(e) {
  return !!gb && gb in e;
}
var PA = Function.prototype, kA = PA.toString;
function Fi(e) {
  if (e != null) {
    try {
      return kA.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var NA = /[\\^$.*+?()[\]{}|]/g, IA = /^\[object .+?Constructor\]$/, AA = Function.prototype, RA = Object.prototype, MA = AA.toString, DA = RA.hasOwnProperty, LA = RegExp(
  "^" + MA.call(DA).replace(NA, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function FA(e) {
  if (!Xa(e) || TA(e))
    return !1;
  var t = bs(e) ? LA : IA;
  return t.test(Fi(e));
}
function $A(e, t) {
  return e == null ? void 0 : e[t];
}
function $i(e, t) {
  var n = $A(e, t);
  return FA(n) ? n : void 0;
}
var $l = $i(Object, "create");
function BA() {
  this.__data__ = $l ? $l(null) : {}, this.size = 0;
}
function jA(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var WA = "__lodash_hash_undefined__", zA = Object.prototype, UA = zA.hasOwnProperty;
function HA(e) {
  var t = this.__data__;
  if ($l) {
    var n = t[e];
    return n === WA ? void 0 : n;
  }
  return UA.call(t, e) ? t[e] : void 0;
}
var YA = Object.prototype, VA = YA.hasOwnProperty;
function qA(e) {
  var t = this.__data__;
  return $l ? t[e] !== void 0 : VA.call(t, e);
}
var GA = "__lodash_hash_undefined__";
function KA(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = $l && t === void 0 ? GA : t, this;
}
function Si(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Si.prototype.clear = BA;
Si.prototype.delete = jA;
Si.prototype.get = HA;
Si.prototype.has = qA;
Si.prototype.set = KA;
function ZA() {
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
var XA = Array.prototype, QA = XA.splice;
function JA(e) {
  var t = this.__data__, n = yd(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : QA.call(t, n, 1), --this.size, !0;
}
function e2(e) {
  var t = this.__data__, n = yd(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function t2(e) {
  return yd(this.__data__, e) > -1;
}
function n2(e, t) {
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
ao.prototype.clear = ZA;
ao.prototype.delete = JA;
ao.prototype.get = e2;
ao.prototype.has = t2;
ao.prototype.set = n2;
var Bl = $i(ro, "Map");
function r2() {
  this.size = 0, this.__data__ = {
    hash: new Si(),
    map: new (Bl || ao)(),
    string: new Si()
  };
}
function a2(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function bd(e, t) {
  var n = e.__data__;
  return a2(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function o2(e) {
  var t = bd(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function i2(e) {
  return bd(this, e).get(e);
}
function s2(e) {
  return bd(this, e).has(e);
}
function l2(e, t) {
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
oo.prototype.clear = r2;
oo.prototype.delete = o2;
oo.prototype.get = i2;
oo.prototype.has = s2;
oo.prototype.set = l2;
var c2 = "Expected a function";
function mc(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(c2);
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
var u2 = 500;
function d2(e) {
  var t = mc(e, function(r) {
    return n.size === u2 && n.clear(), r;
  }), n = t.cache;
  return t;
}
var f2 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, p2 = /\\(\\)?/g, h2 = d2(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(f2, function(n, r, o, s) {
    t.push(o ? s.replace(p2, "$1") : r || n);
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
  return yn(e) ? e : dm(e, t) ? [e] : h2(Bi(e));
}
var m2 = "[object Arguments]";
function bb(e) {
  return jr(e) && ka(e) == m2;
}
var Q_ = Object.prototype, g2 = Q_.hasOwnProperty, v2 = Q_.propertyIsEnumerable, wd = bb(/* @__PURE__ */ function() {
  return arguments;
}()) ? bb : function(e) {
  return jr(e) && g2.call(e, "callee") && !v2.call(e, "callee");
}, y2 = 9007199254740991, b2 = /^(?:0|[1-9]\d*)$/;
function xd(e, t) {
  var n = typeof e;
  return t = t ?? y2, !!t && (n == "number" || n != "symbol" && b2.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var _2 = 9007199254740991;
function fm(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= _2;
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
  return e != null && J_(e, t, uA);
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
function w2(e) {
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
function x2(e, t) {
  return t.length < 2 ? e : vc(e, Ed(t, 0, -1));
}
function E2(e, t, n) {
  t = gc(t, e), e = x2(e, t);
  var r = e == null ? e : e[js(w2(t))];
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
}(), C2 = Gu ? function(e, t) {
  return Gu(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: n1(t),
    writable: !0
  });
} : Xo, O2 = 800, S2 = 16, T2 = Date.now;
function P2(e) {
  var t = 0, n = 0;
  return function() {
    var r = T2(), o = S2 - (r - n);
    if (n = r, o > 0) {
      if (++t >= O2)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var r1 = P2(C2);
function Ws(e, t) {
  return r1(t1(e, t, Xo), e + "");
}
var Fe = Ws(E2);
function k2(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function fs(e) {
  return e === void 0;
}
function N2(e, t, n) {
  return e === e && (n !== void 0 && (e = e <= n ? e : n), e = e >= t ? e : t), e;
}
var I2 = /\s/;
function A2(e) {
  for (var t = e.length; t-- && I2.test(e.charAt(t)); )
    ;
  return t;
}
var R2 = /^\s+/;
function a1(e) {
  return e && e.slice(0, A2(e) + 1).replace(R2, "");
}
var wb = NaN, M2 = /^[-+]0x[0-9a-f]+$/i, D2 = /^0b[01]+$/i, L2 = /^0o[0-7]+$/i, F2 = parseInt;
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
  var n = D2.test(e);
  return n || L2.test(e) ? F2(e.slice(2), n ? 2 : 8) : M2.test(e) ? wb : +e;
}
var xb = 1 / 0, $2 = 17976931348623157e292;
function ps(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = o1(e), e === xb || e === -xb) {
    var t = e < 0 ? -1 : 1;
    return t * $2;
  }
  return e === e ? e : 0;
}
function yc(e) {
  var t = ps(e), n = t % 1;
  return t === t ? n ? t - n : t : 0;
}
function B2(e, t, n) {
  return e = Bi(e), n = n == null ? 0 : N2(yc(n), 0, e.length), t = _d(t), e.slice(n, n + t.length) == t;
}
function i1(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, s = []; ++n < r; ) {
    var u = e[n];
    t(u, n, e) && (s[o++] = u);
  }
  return s;
}
function j2(e) {
  return function(t, n, r) {
    for (var o = -1, s = Object(t), u = r(t), c = u.length; c--; ) {
      var d = u[++o];
      if (n(s[d], d, s) === !1)
        break;
    }
    return t;
  };
}
var W2 = j2();
function z2(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
function U2() {
  return !1;
}
var s1 = typeof exports == "object" && exports && !exports.nodeType && exports, Eb = s1 && typeof module == "object" && module && !module.nodeType && module, H2 = Eb && Eb.exports === s1, Cb = H2 ? ro.Buffer : void 0, Y2 = Cb ? Cb.isBuffer : void 0, Ku = Y2 || U2, V2 = "[object Arguments]", q2 = "[object Array]", G2 = "[object Boolean]", K2 = "[object Date]", Z2 = "[object Error]", X2 = "[object Function]", Q2 = "[object Map]", J2 = "[object Number]", eR = "[object Object]", tR = "[object RegExp]", nR = "[object Set]", rR = "[object String]", aR = "[object WeakMap]", oR = "[object ArrayBuffer]", iR = "[object DataView]", sR = "[object Float32Array]", lR = "[object Float64Array]", cR = "[object Int8Array]", uR = "[object Int16Array]", dR = "[object Int32Array]", fR = "[object Uint8Array]", pR = "[object Uint8ClampedArray]", hR = "[object Uint16Array]", mR = "[object Uint32Array]", nn = {};
nn[sR] = nn[lR] = nn[cR] = nn[uR] = nn[dR] = nn[fR] = nn[pR] = nn[hR] = nn[mR] = !0;
nn[V2] = nn[q2] = nn[oR] = nn[G2] = nn[iR] = nn[K2] = nn[Z2] = nn[X2] = nn[Q2] = nn[J2] = nn[eR] = nn[tR] = nn[nR] = nn[rR] = nn[aR] = !1;
function gR(e) {
  return jr(e) && fm(e.length) && !!nn[ka(e)];
}
function l1(e) {
  return function(t) {
    return e(t);
  };
}
var c1 = typeof exports == "object" && exports && !exports.nodeType && exports, kl = c1 && typeof module == "object" && module && !module.nodeType && module, vR = kl && kl.exports === c1, Cp = vR && Z_.process, Ob = function() {
  try {
    var e = kl && kl.require && kl.require("util").types;
    return e || Cp && Cp.binding && Cp.binding("util");
  } catch {
  }
}(), Sb = Ob && Ob.isTypedArray, pm = Sb ? l1(Sb) : gR, yR = Object.prototype, bR = yR.hasOwnProperty;
function _R(e, t) {
  var n = yn(e), r = !n && wd(e), o = !n && !r && Ku(e), s = !n && !r && !o && pm(e), u = n || r || o || s, c = u ? z2(e.length, String) : [], d = c.length;
  for (var p in e)
    bR.call(e, p) && !(u && // Safari 9 has enumerable `arguments.length` in strict mode.
    (p == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (p == "offset" || p == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (p == "buffer" || p == "byteLength" || p == "byteOffset") || // Skip index properties.
    xd(p, d))) && c.push(p);
  return c;
}
var wR = Object.prototype;
function u1(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || wR;
  return e === n;
}
function d1(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var xR = d1(Object.keys, Object), ER = Object.prototype, CR = ER.hasOwnProperty;
function hm(e) {
  if (!u1(e))
    return xR(e);
  var t = [];
  for (var n in Object(e))
    CR.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function io(e) {
  return e != null && fm(e.length) && !bs(e);
}
function Fr(e) {
  return io(e) ? _R(e) : hm(e);
}
function f1(e, t) {
  return e && W2(e, t, Fr);
}
function OR(e, t) {
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
var zs = OR(f1);
function SR(e, t) {
  var n = [];
  return zs(e, function(r, o, s) {
    t(r, o, s) && n.push(r);
  }), n;
}
function TR() {
  this.__data__ = new ao(), this.size = 0;
}
function PR(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function kR(e) {
  return this.__data__.get(e);
}
function NR(e) {
  return this.__data__.has(e);
}
var IR = 200;
function AR(e, t) {
  var n = this.__data__;
  if (n instanceof ao) {
    var r = n.__data__;
    if (!Bl || r.length < IR - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new oo(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Ga(e) {
  var t = this.__data__ = new ao(e);
  this.size = t.size;
}
Ga.prototype.clear = TR;
Ga.prototype.delete = PR;
Ga.prototype.get = kR;
Ga.prototype.has = NR;
Ga.prototype.set = AR;
var RR = "__lodash_hash_undefined__";
function MR(e) {
  return this.__data__.set(e, RR), this;
}
function DR(e) {
  return this.__data__.has(e);
}
function Ti(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new oo(); ++t < n; )
    this.add(e[t]);
}
Ti.prototype.add = Ti.prototype.push = MR;
Ti.prototype.has = DR;
function p1(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function jl(e, t) {
  return e.has(t);
}
var LR = 1, FR = 2;
function h1(e, t, n, r, o, s) {
  var u = n & LR, c = e.length, d = t.length;
  if (c != d && !(u && d > c))
    return !1;
  var p = s.get(e), h = s.get(t);
  if (p && h)
    return p == t && h == e;
  var m = -1, g = !0, y = n & FR ? new Ti() : void 0;
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
function $R(e) {
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
var BR = 1, jR = 2, WR = "[object Boolean]", zR = "[object Date]", UR = "[object Error]", HR = "[object Map]", YR = "[object Number]", VR = "[object RegExp]", qR = "[object Set]", GR = "[object String]", KR = "[object Symbol]", ZR = "[object ArrayBuffer]", XR = "[object DataView]", Pb = Oa ? Oa.prototype : void 0, Op = Pb ? Pb.valueOf : void 0;
function QR(e, t, n, r, o, s, u) {
  switch (n) {
    case XR:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case ZR:
      return !(e.byteLength != t.byteLength || !s(new Tb(e), new Tb(t)));
    case WR:
    case zR:
    case YR:
      return vd(+e, +t);
    case UR:
      return e.name == t.name && e.message == t.message;
    case VR:
    case GR:
      return e == t + "";
    case HR:
      var c = $R;
    case qR:
      var d = r & BR;
      if (c || (c = mm), e.size != t.size && !d)
        return !1;
      var p = u.get(e);
      if (p)
        return p == t;
      r |= jR, u.set(e, t);
      var h = h1(c(e), c(t), r, o, s, u);
      return u.delete(e), h;
    case KR:
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
function JR(e, t, n) {
  var r = t(e);
  return yn(e) ? r : m1(r, n(e));
}
function eM() {
  return [];
}
var tM = Object.prototype, nM = tM.propertyIsEnumerable, kb = Object.getOwnPropertySymbols, rM = kb ? function(e) {
  return e == null ? [] : (e = Object(e), i1(kb(e), function(t) {
    return nM.call(e, t);
  }));
} : eM;
function Nb(e) {
  return JR(e, Fr, rM);
}
var aM = 1, oM = Object.prototype, iM = oM.hasOwnProperty;
function sM(e, t, n, r, o, s) {
  var u = n & aM, c = Nb(e), d = c.length, p = Nb(t), h = p.length;
  if (d != h && !u)
    return !1;
  for (var m = d; m--; ) {
    var g = c[m];
    if (!(u ? g in t : iM.call(t, g)))
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
    var I = e.constructor, T = t.constructor;
    I != T && "constructor" in e && "constructor" in t && !(typeof I == "function" && I instanceof I && typeof T == "function" && T instanceof T) && (_ = !1);
  }
  return s.delete(e), s.delete(t), _;
}
var ah = $i(ro, "DataView"), oh = $i(ro, "Promise"), hs = $i(ro, "Set"), ih = $i(ro, "WeakMap"), Ib = "[object Map]", lM = "[object Object]", Ab = "[object Promise]", Rb = "[object Set]", Mb = "[object WeakMap]", Db = "[object DataView]", cM = Fi(ah), uM = Fi(Bl), dM = Fi(oh), fM = Fi(hs), pM = Fi(ih), ma = ka;
(ah && ma(new ah(new ArrayBuffer(1))) != Db || Bl && ma(new Bl()) != Ib || oh && ma(oh.resolve()) != Ab || hs && ma(new hs()) != Rb || ih && ma(new ih()) != Mb) && (ma = function(e) {
  var t = ka(e), n = t == lM ? e.constructor : void 0, r = n ? Fi(n) : "";
  if (r)
    switch (r) {
      case cM:
        return Db;
      case uM:
        return Ib;
      case dM:
        return Ab;
      case fM:
        return Rb;
      case pM:
        return Mb;
    }
  return t;
});
var hM = 1, Lb = "[object Arguments]", Fb = "[object Array]", xu = "[object Object]", mM = Object.prototype, $b = mM.hasOwnProperty;
function gM(e, t, n, r, o, s) {
  var u = yn(e), c = yn(t), d = u ? Fb : ma(e), p = c ? Fb : ma(t);
  d = d == Lb ? xu : d, p = p == Lb ? xu : p;
  var h = d == xu, m = p == xu, g = d == p;
  if (g && Ku(e)) {
    if (!Ku(t))
      return !1;
    u = !0, h = !1;
  }
  if (g && !h)
    return s || (s = new Ga()), u || pm(e) ? h1(e, t, n, r, o, s) : QR(e, t, d, n, r, o, s);
  if (!(n & hM)) {
    var y = h && $b.call(e, "__wrapped__"), b = m && $b.call(t, "__wrapped__");
    if (y || b) {
      var _ = y ? e.value() : e, w = b ? t.value() : t;
      return s || (s = new Ga()), o(_, w, n, r, s);
    }
  }
  return g ? (s || (s = new Ga()), sM(e, t, n, r, o, s)) : !1;
}
function Cd(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !jr(e) && !jr(t) ? e !== e && t !== t : gM(e, t, n, r, Cd, o);
}
var vM = 1, yM = 2;
function bM(e, t, n, r) {
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
      if (!(m === void 0 ? Cd(p, d, vM | yM, r, h) : m))
        return !1;
    }
  }
  return !0;
}
function g1(e) {
  return e === e && !Xa(e);
}
function _M(e) {
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
function wM(e) {
  var t = _M(e);
  return t.length == 1 && t[0][2] ? v1(t[0][0], t[0][1]) : function(n) {
    return n === e || bM(n, e, t);
  };
}
function ba(e, t, n) {
  var r = e == null ? void 0 : vc(e, t);
  return r === void 0 ? n : r;
}
function xM(e, t) {
  return e != null && t in Object(e);
}
function y1(e, t) {
  return e != null && J_(e, t, xM);
}
var EM = 1, CM = 2;
function OM(e, t) {
  return dm(e) && g1(t) ? v1(js(e), t) : function(n) {
    var r = ba(n, e);
    return r === void 0 && r === t ? y1(n, e) : Cd(t, r, EM | CM);
  };
}
function b1(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function SM(e) {
  return function(t) {
    return vc(t, e);
  };
}
function TM(e) {
  return dm(e) ? b1(js(e)) : SM(e);
}
function Qo(e) {
  return typeof e == "function" ? e : e == null ? Xo : typeof e == "object" ? yn(e) ? OM(e[0], e[1]) : wM(e) : TM(e);
}
function sh(e, t) {
  var n = yn(e) ? i1 : SR;
  return n(e, Qo(t));
}
var PM = "[object Map]", kM = "[object Set]", NM = Object.prototype, IM = NM.hasOwnProperty;
function yi(e) {
  if (e == null)
    return !0;
  if (io(e) && (yn(e) || typeof e == "string" || typeof e.splice == "function" || Ku(e) || pm(e) || wd(e)))
    return !e.length;
  var t = ma(e);
  if (t == PM || t == kM)
    return !e.size;
  if (u1(e))
    return !hm(e).length;
  for (var n in e)
    if (IM.call(e, n))
      return !1;
  return !0;
}
function _1(e, t, n, r) {
  for (var o = e.length, s = n + -1; ++s < o; )
    if (t(e[s], s, e))
      return s;
  return -1;
}
function AM(e) {
  return e !== e;
}
function RM(e, t, n) {
  for (var r = n - 1, o = e.length; ++r < o; )
    if (e[r] === t)
      return r;
  return -1;
}
function Od(e, t, n) {
  return t === t ? RM(e, t, n) : _1(e, AM, n);
}
function gm(e, t) {
  var n = e == null ? 0 : e.length;
  return !!n && Od(e, t, 0) > -1;
}
var MM = Math.min;
function DM(e, t, n) {
  for (var r = gm, o = e[0].length, s = e.length, u = s, c = Array(s), d = 1 / 0, p = []; u--; ) {
    var h = e[u];
    d = MM(h.length, d), c[u] = o >= 120 && h.length >= 120 ? new Ti(u && h) : void 0;
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
function LM(e) {
  return Wl(e) ? e : [];
}
var FM = Ws(function(e) {
  var t = wi(e, LM);
  return t.length && t[0] === e[0] ? DM(t) : [];
});
function $M(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
    ;
  return e;
}
function BM(e) {
  return typeof e == "function" ? e : Xo;
}
function w1(e, t) {
  var n = yn(e) ? $M : zs;
  return n(e, BM(t));
}
var lh = function(t) {
  return "default" + (t[0].toUpperCase() + t.slice(1));
}, jM = function(t, n, r, o) {
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
    var u = n.constructor, c = u.autoControlledProps, d = u.getAutoControlledStateFromProps, p = Fe(k2(n), "getInitialAutoControlledState", n.props) || {};
    if (process.env.NODE_ENV !== "production") {
      var h = n.constructor, m = h.defaultProps, g = h.name, y = h.propTypes, b = h.getDerivedStateFromProps;
      b !== t.getDerivedStateFromProps && console.error("Auto controlled " + g + " must specify a static getAutoControlledStateFromProps() instead of getDerivedStateFromProps()."), w1(c, function(F) {
        var E = lh(F);
        rh(y, E) || console.error(g + ' is missing "' + E + '" propTypes validation for auto controlled prop "' + F + '".'), rh(y, F) || console.error(g + ' is missing propTypes validation for auto controlled prop "' + F + '".');
      });
      var _ = FM(c, Fr(m));
      yi(_) || console.error(["Do not set defaultProps for autoControlledProps. You can set defaults by", "setting state in the constructor or using an ES7 property initializer", "(https://babeljs.io/blog/2015/06/07/react-on-es6-plus#property-initializers)", "See " + g + ' props: "' + _ + '".'].join(" "));
      var w = sh(c, function(F) {
        return B2(F, "default");
      });
      yi(w) || console.error(["Do not add default props to autoControlledProps.", "Default props are automatically handled.", "See " + g + ' autoControlledProps: "' + w + '".'].join(" "));
    }
    var k = c.reduce(function(F, E) {
      if (F[E] = jM(E, n.props, p), process.env.NODE_ENV !== "production") {
        var I = lh(E), T = n.constructor.name;
        !fs(n.props[I]) && !fs(n.props[E]) && console.error(T + ' prop "' + E + '" is auto controlled. Specify either ' + I + " or " + E + ", but not both.");
      }
      return F;
    }, {});
    return n.state = pe({}, p, k, {
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
      var d = u(r, pe({}, o, c), o);
      return pe({}, c, d);
    }
    return c;
  }, t.getAutoControlledStateFromProps = function() {
    return null;
  }, t;
}(ee.Component);
function WM(e) {
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
var zM = Math.max;
function ch(e, t, n) {
  var r = e == null ? 0 : e.length;
  if (!r)
    return -1;
  var o = n == null ? 0 : yc(n);
  return o < 0 && (o = zM(r + o, 0)), _1(e, Qo(t), o);
}
var x1 = WM(ch);
function UM(e, t) {
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
  var r = yn(e) ? p1 : UM;
  return r(e, Qo(t));
}
var HM = function(t, n) {
  return Nl(lm.toArray(t), {
    type: n
  });
}, pt = function(t) {
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
}, Zn = function(t, n) {
  return t && t !== !0 && t + " " + n;
}, rn = function(t, n) {
  return t && (t === !0 ? n : t + " " + n);
}, Zu = function(t, n) {
  return !t || t === !0 ? null : t.replace("large screen", "large-screen").replace(/ vertically/g, "-vertically").split(" ").map(function(r) {
    return r.replace("-", " ") + " " + n;
  }).join(" ");
}, ji = function(t) {
  return t === "justified" ? "justified" : Zn(t, "aligned");
}, Jo = function(t) {
  return Zn(t, "aligned");
}, Gn = function(t, n, r) {
  if (n === void 0 && (n = ""), r === void 0 && (r = !1), r && t === "equal")
    return "equal width";
  var o = typeof t;
  return (o === "string" || o === "number") && n ? Bb(t) + " " + n : Bb(t);
}, YM = 200;
function E1(e, t, n, r) {
  var o = -1, s = gm, u = !0, c = e.length, d = [], p = t.length;
  if (!c)
    return d;
  t.length >= YM && (s = jl, u = !1, t = new Ti(t));
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
function VM(e) {
  return yn(e) || wd(e) || !!(jb && e && e[jb]);
}
function Sd(e, t, n, r, o) {
  var s = -1, u = e.length;
  for (n || (n = VM), o || (o = []); ++s < u; ) {
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
function GM(e, t) {
  for (var n = -1, r = e.length; ++n < r && Od(t, e[n], 0) > -1; )
    ;
  return n;
}
function KM(e) {
  return e.split("");
}
var ZM = "\\ud800-\\udfff", XM = "\\u0300-\\u036f", QM = "\\ufe20-\\ufe2f", JM = "\\u20d0-\\u20ff", eD = XM + QM + JM, tD = "\\ufe0e\\ufe0f", nD = "\\u200d", rD = RegExp("[" + nD + ZM + eD + tD + "]");
function vm(e) {
  return rD.test(e);
}
var O1 = "\\ud800-\\udfff", aD = "\\u0300-\\u036f", oD = "\\ufe20-\\ufe2f", iD = "\\u20d0-\\u20ff", sD = aD + oD + iD, lD = "\\ufe0e\\ufe0f", cD = "[" + O1 + "]", fh = "[" + sD + "]", ph = "\\ud83c[\\udffb-\\udfff]", uD = "(?:" + fh + "|" + ph + ")", S1 = "[^" + O1 + "]", T1 = "(?:\\ud83c[\\udde6-\\uddff]){2}", P1 = "[\\ud800-\\udbff][\\udc00-\\udfff]", dD = "\\u200d", k1 = uD + "?", N1 = "[" + lD + "]?", fD = "(?:" + dD + "(?:" + [S1, T1, P1].join("|") + ")" + N1 + k1 + ")*", pD = N1 + k1 + fD, hD = "(?:" + [S1 + fh + "?", fh, T1, P1, cD].join("|") + ")", mD = RegExp(ph + "(?=" + ph + ")|" + hD + pD, "g");
function gD(e) {
  return e.match(mD) || [];
}
function hh(e) {
  return vm(e) ? gD(e) : KM(e);
}
function vD(e, t, n) {
  if (e = Bi(e), e && t === void 0)
    return a1(e);
  if (!e || !(t = _d(t)))
    return e;
  var r = hh(e), o = hh(t), s = GM(r, o), u = qM(r, o) + 1;
  return C1(r, s, u).join("");
}
function yD(e, t, n) {
  t == "__proto__" && Gu ? Gu(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
var bD = Object.prototype, _D = bD.hasOwnProperty;
function wD(e, t, n) {
  var r = e[t];
  (!(_D.call(e, t) && vd(r, n)) || n === void 0 && !(t in e)) && yD(e, t, n);
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
    wD(c, d, p), c = c[d];
  }
  return e;
}
function xD(e, t, n) {
  for (var r = -1, o = t.length, s = {}; ++r < o; ) {
    var u = t[r], c = vc(e, u);
    n(c, u) && I1(s, gc(u, e), c);
  }
  return s;
}
function ED(e, t) {
  return xD(e, t, function(n, r) {
    return y1(e, r);
  });
}
function CD(e) {
  var t = e == null ? 0 : e.length;
  return t ? Sd(e) : [];
}
function OD(e) {
  return r1(t1(e, void 0, CD), e + "");
}
var Td = OD(function(e, t) {
  return e == null ? {} : ED(e, t);
}), SD = d1(Object.getPrototypeOf, Object), TD = "[object Object]", PD = Function.prototype, kD = Object.prototype, A1 = PD.toString, ND = kD.hasOwnProperty, ID = A1.call(Object);
function Pd(e) {
  if (!jr(e) || ka(e) != TD)
    return !1;
  var t = SD(e);
  if (t === null)
    return !0;
  var n = ND.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && A1.call(n) == ID;
}
function Tt(e) {
  return e == null;
}
function AD(e, t, n) {
  for (var r = -1, o = e.length; ++r < o; ) {
    var s = e[r], u = t(s);
    if (u != null && (c === void 0 ? u === u && !Oi(u) : n(u, c)))
      var c = u, d = s;
  }
  return d;
}
function RD(e, t) {
  return e < t;
}
function Wb(e) {
  return e && e.length ? AD(e, Xo, RD) : void 0;
}
function MD(e, t) {
  for (var n, r = -1, o = e.length; ++r < o; ) {
    var s = t(e[r]);
    s !== void 0 && (n = n === void 0 ? s : n + s);
  }
  return n;
}
function zb(e) {
  return e && e.length ? MD(e, Xo) : 0;
}
function R1(e, t) {
  var n = -1, r = io(e) ? Array(e.length) : [];
  return zs(e, function(o, s, u) {
    r[++n] = t(o, s, u);
  }), r;
}
function Cn(e, t) {
  var n = yn(e) ? wi : R1;
  return n(e, Qo(t));
}
function DD(e, t) {
  var n = e.length;
  for (e.sort(t); n--; )
    e[n] = e[n].value;
  return e;
}
function LD(e, t) {
  if (e !== t) {
    var n = e !== void 0, r = e === null, o = e === e, s = Oi(e), u = t !== void 0, c = t === null, d = t === t, p = Oi(t);
    if (!c && !p && !s && e > t || s && u && d && !c && !p || r && u && d || !n && d || !o)
      return 1;
    if (!r && !s && !p && e < t || p && n && o && !r && !s || c && n && o || !u && o || !d)
      return -1;
  }
  return 0;
}
function FD(e, t, n) {
  for (var r = -1, o = e.criteria, s = t.criteria, u = o.length, c = n.length; ++r < u; ) {
    var d = LD(o[r], s[r]);
    if (d) {
      if (r >= c)
        return d;
      var p = n[r];
      return d * (p == "desc" ? -1 : 1);
    }
  }
  return e.index - t.index;
}
function $D(e, t, n) {
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
  return DD(o, function(s, u) {
    return FD(s, u, n);
  });
}
var BD = Ws(function(e, t) {
  if (e == null)
    return [];
  var n = t.length;
  return n > 1 && uh(e, t[0], t[1]) ? t = [] : n > 2 && uh(t[0], t[1], t[2]) && (t = [t[0]]), $D(e, Sd(t), []);
});
function jD(e, t, n) {
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
var WD = function() {
  var t;
  return (t = Object.prototype.toString).call.apply(t, arguments);
}, zD = function(t, n) {
  if (t[n] !== void 0 && !(typeof Element > "u") && !(t[n] instanceof Element))
    return new Error('Invalid prop "' + n + '" supplied, expected a DOM node.');
}, M1 = function(t) {
  if (!Array.isArray(t))
    throw new Error("Invalid argument supplied to suggest, expected an instance of array.");
  var n = mc(function(o) {
    var s = o.split(" ");
    return jD(BD(Cn(t, function(u) {
      var c = u.split(" "), d = zb(Cn(Cn(s, function(h) {
        return Cn(c, function(m) {
          return mh(h, m);
        });
      }), Wb)), p = zb(Cn(Cn(c, function(h) {
        return Cn(s, function(m) {
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
}, Vt = function(t) {
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
        throw new Error('every() argument "validators" should contain functions, found: ' + WD(p) + ".");
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
        return vD(d).replace("-", " ");
      }), c = dh(u, t);
      if (c.length > 0)
        return new Error("`" + r + "` prop in `" + o + "` has invalid values: `" + c.join("`, `") + "`.");
    }
  };
}, Nt = function() {
  return Mt([Vt(["children"]), l.node]).apply(void 0, arguments);
}, Ct = function() {
  return Mt([Vt(["children"]), l.oneOfType([l.func, l.node, l.object, l.arrayOf(l.oneOfType([l.node, l.object]))])]).apply(void 0, arguments);
}, bc = function() {
  return Mt([Vt(["children"]), l.arrayOf(Ct)]).apply(void 0, arguments);
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
function UD() {
  if (Yb) return ml;
  Yb = 1, Object.defineProperty(ml, "__esModule", { value: !0 });
  var e = F1(), t = ee;
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
    for (var S = 0; S < C.length; S++) {
      var A = C[S];
      A.enumerable = A.enumerable || !1, A.configurable = !0, "value" in A && (A.writable = !0), Object.defineProperty(P, A.key, A);
    }
  }
  function s(P, C, S) {
    return C && o(P.prototype, C), P;
  }
  function u(P, C, S) {
    return C in P ? Object.defineProperty(P, C, { value: S, enumerable: !0, configurable: !0, writable: !0 }) : P[C] = S, P;
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
    return (p = Object.setPrototypeOf || function(S, A) {
      return S.__proto__ = A, S;
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
      for (var S = this.handlers.slice(0), A = C.length, B = 0; B < A; B += 1) S.push(C[B]);
      return new P(S);
    } }, { key: "dispatchEvent", value: function(C, S) {
      var A = this.handlers.length - 1;
      if (S) {
        for (var B = A; B >= 0; B -= 1) this.handlers[B].called || (this.handlers[B].called = !0, this.handlers[B](C));
        for (var U = A; U >= 0; U -= 1) this.handlers[U].called = !1;
      } else
        (0, this.handlers[A])(C);
    } }, { key: "hasHandlers", value: function() {
      return this.handlers.length > 0;
    } }, { key: "removeHandlers", value: function(C) {
      for (var S = [], A = this.handlers.length, B = 0; B < A; B += 1) {
        var U = this.handlers[B];
        C.indexOf(U) === -1 && S.push(U);
      }
      return new P(S);
    } }]), P;
  }();
  function y(P) {
    var C = /* @__PURE__ */ new Map();
    return P.forEach(function(S, A) {
      C.set(A, S);
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
    function P(C, S) {
      r(this, P), u(this, "handlerSets", void 0), u(this, "poolName", void 0), this.handlerSets = S, this.poolName = C;
    }
    return s(P, [{ key: "addHandlers", value: function(C, S) {
      var A = y(this.handlerSets);
      if (A.has(C)) {
        var B = A.get(C);
        A.set(C, B.addHandlers(S));
      } else A.set(C, new g(S));
      return new P(this.poolName, A);
    } }, { key: "dispatchEvent", value: function(C, S) {
      var A = this.handlerSets.get(C), B = this.poolName === "default";
      A && A.dispatchEvent(S, B);
    } }, { key: "hasHandlers", value: function(C) {
      if (!C) return this.handlerSets.size > 0;
      var S = this.handlerSets.get(C);
      return !!S && S.hasHandlers();
    } }, { key: "removeHandlers", value: function(C, S) {
      var A = y(this.handlerSets);
      if (!A.has(C)) return new P(this.poolName, A);
      var B = A.get(C).removeHandlers(S);
      return B.hasHandlers() ? A.set(C, B) : A.delete(C), new P(this.poolName, A);
    } }]), P;
  }();
  u(k, "createByType", function(P, C, S) {
    var A = /* @__PURE__ */ new Map();
    return A.set(C, new g(S)), new k(P, A);
  });
  var F = function() {
    function P(C) {
      var S = this;
      r(this, P), u(this, "handlers", /* @__PURE__ */ new Map()), u(this, "pools", /* @__PURE__ */ new Map()), u(this, "target", void 0), u(this, "createEmitter", function(A) {
        return function(B) {
          S.pools.forEach(function(U) {
            U.dispatchEvent(A, B);
          });
        };
      }), this.target = C;
    }
    return s(P, [{ key: "addHandlers", value: function(C, S, A) {
      if (this.pools.has(C)) {
        var B = this.pools.get(C);
        this.pools.set(C, B.addHandlers(S, A));
      } else this.pools.set(C, k.createByType(C, S, A));
      this.handlers.has(S) || this.addTargetHandler(S);
    } }, { key: "hasHandlers", value: function() {
      return this.handlers.size > 0;
    } }, { key: "removeHandlers", value: function(C, S, A) {
      if (this.pools.has(C)) {
        var B = this.pools.get(C).removeHandlers(S, A);
        B.hasHandlers() ? this.pools.set(C, B) : this.pools.delete(C);
        var U = !1;
        this.pools.forEach(function(re) {
          return U = U || re.hasHandlers(S);
        }), U || this.removeTargetHandler(S);
      }
    } }, { key: "addTargetHandler", value: function(C) {
      var S = this.createEmitter(C);
      this.handlers.set(C, S), this.target.addEventListener(C, S, !0);
    } }, { key: "removeTargetHandler", value: function(C) {
      this.handlers.has(C) && (this.target.removeEventListener(C, this.handlers.get(C), !0), this.handlers.delete(C));
    } }]), P;
  }(), E = function() {
    function P() {
      var C = this;
      r(this, P), u(this, "targets", /* @__PURE__ */ new Map()), u(this, "getTarget", function(S) {
        var A = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], B = w(S);
        if (C.targets.has(B)) return C.targets.get(B);
        if (!A) return null;
        var U = new F(B);
        return C.targets.set(B, U), U;
      }), u(this, "removeTarget", function(S) {
        C.targets.delete(w(S));
      });
    }
    return s(P, [{ key: "sub", value: function(C, S) {
      var A = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (e.canUseDOM) {
        var B = A.target, U = B === void 0 ? document : B, re = A.pool, G = re === void 0 ? "default" : re;
        this.getTarget(U).addHandlers(G, C, b(S));
      }
    } }, { key: "unsub", value: function(C, S) {
      var A = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (e.canUseDOM) {
        var B = A.target, U = B === void 0 ? document : B, re = A.pool, G = re === void 0 ? "default" : re, ae = this.getTarget(U, !1);
        ae && (ae.removeHandlers(G, C, b(S)), ae.hasHandlers() || this.removeTarget(U));
      }
    } }]), P;
  }(), I = new E(), T = function(P) {
    function C() {
      return r(this, C), m(this, d(C).apply(this, arguments));
    }
    return c(C, t.PureComponent), s(C, [{ key: "componentDidMount", value: function() {
      this.subscribe(this.props);
    } }, { key: "componentDidUpdate", value: function(S) {
      this.unsubscribe(S), this.subscribe(this.props);
    } }, { key: "componentWillUnmount", value: function() {
      this.unsubscribe(this.props);
    } }, { key: "subscribe", value: function(S) {
      var A = S.name, B = S.on, U = S.pool, re = S.target;
      I.sub(A, B, { pool: U, target: re });
    } }, { key: "unsubscribe", value: function(S) {
      var A = S.name, B = S.on, U = S.pool, re = S.target;
      I.unsub(A, B, { pool: U, target: re });
    } }, { key: "render", value: function() {
      return null;
    } }]), C;
  }();
  return u(T, "defaultProps", { pool: "default", target: "document" }), T.propTypes = {}, ml.instance = I, ml.default = T, ml;
}
var gl = {}, Vb;
function HD() {
  if (Vb) return gl;
  Vb = 1, Object.defineProperty(gl, "__esModule", { value: !0 });
  var e = F1(), t = ar, n = ee;
  function r(C) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? r = function(S) {
      return typeof S;
    } : r = function(S) {
      return S && typeof Symbol == "function" && S.constructor === Symbol && S !== Symbol.prototype ? "symbol" : typeof S;
    }, r(C);
  }
  function o(C, S) {
    if (!(C instanceof S))
      throw new TypeError("Cannot call a class as a function");
  }
  function s(C, S) {
    for (var A = 0; A < S.length; A++) {
      var B = S[A];
      B.enumerable = B.enumerable || !1, B.configurable = !0, "value" in B && (B.writable = !0), Object.defineProperty(C, B.key, B);
    }
  }
  function u(C, S, A) {
    return S && s(C.prototype, S), C;
  }
  function c(C, S, A) {
    return S in C ? Object.defineProperty(C, S, {
      value: A,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : C[S] = A, C;
  }
  function d(C, S) {
    if (typeof S != "function" && S !== null)
      throw new TypeError("Super expression must either be null or a function");
    C.prototype = Object.create(S && S.prototype, {
      constructor: {
        value: C,
        writable: !0,
        configurable: !0
      }
    }), S && h(C, S);
  }
  function p(C) {
    return p = Object.setPrototypeOf ? Object.getPrototypeOf : function(A) {
      return A.__proto__ || Object.getPrototypeOf(A);
    }, p(C);
  }
  function h(C, S) {
    return h = Object.setPrototypeOf || function(B, U) {
      return B.__proto__ = U, B;
    }, h(C, S);
  }
  function m(C) {
    if (C === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return C;
  }
  function g(C, S) {
    return S && (typeof S == "object" || typeof S == "function") ? S : m(C);
  }
  var y = /* @__PURE__ */ function() {
    function C(S) {
      o(this, C), c(this, "handlers", void 0), this.handlers = S.slice(0);
    }
    return u(C, [{
      key: "addHandlers",
      value: function(A) {
        for (var B = this.handlers.slice(0), U = A.length, re = 0; re < U; re += 1)
          B.push(A[re]);
        return new C(B);
      }
      /**
       * @see https://jsperf.com/suir-eventset-dispatchsingle
       * @see https://jsperf.com/suir-eventset-dispatchmultiple2
       */
    }, {
      key: "dispatchEvent",
      value: function(A, B) {
        var U = this.handlers.length - 1;
        if (!B) {
          var re = this.handlers[U];
          re(A);
          return;
        }
        for (var G = U; G >= 0; G -= 1)
          this.handlers[G].called || (this.handlers[G].called = !0, this.handlers[G](A));
        for (var ae = U; ae >= 0; ae -= 1)
          this.handlers[ae].called = !1;
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
        for (var B = [], U = this.handlers.length, re = 0; re < U; re += 1) {
          var G = this.handlers[re];
          A.indexOf(G) === -1 && B.push(G);
        }
        return new C(B);
      }
    }]), C;
  }();
  function b(C) {
    var S = /* @__PURE__ */ new Map();
    return C.forEach(function(A, B) {
      S.set(B, A);
    }), S;
  }
  function _(C) {
    return Array.isArray(C) ? C : [C];
  }
  var w = function(S) {
    return S !== null && r(S) === "object" && S.hasOwnProperty("current");
  };
  function k(C) {
    return C === "document" ? document : C === "window" ? window : w(C) ? C.current || document : C || document;
  }
  var F = /* @__PURE__ */ function() {
    function C(S, A) {
      o(this, C), c(this, "handlerSets", void 0), c(this, "poolName", void 0), this.handlerSets = A, this.poolName = S;
    }
    return u(C, [{
      key: "addHandlers",
      value: function(A, B) {
        var U = b(this.handlerSets);
        if (U.has(A)) {
          var re = U.get(A);
          U.set(A, re.addHandlers(B));
        } else
          U.set(A, new y(B));
        return new C(this.poolName, U);
      }
    }, {
      key: "dispatchEvent",
      value: function(A, B) {
        var U = this.handlerSets.get(A), re = this.poolName === "default";
        U && U.dispatchEvent(B, re);
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
        var U = b(this.handlerSets);
        if (!U.has(A))
          return new C(this.poolName, U);
        var re = U.get(A), G = re.removeHandlers(B);
        return G.hasHandlers() ? U.set(A, G) : U.delete(A), new C(this.poolName, U);
      }
    }]), C;
  }();
  c(F, "createByType", function(C, S, A) {
    var B = /* @__PURE__ */ new Map();
    return B.set(S, new y(A)), new F(C, B);
  });
  var E = /* @__PURE__ */ function() {
    function C(S) {
      var A = this;
      o(this, C), c(this, "handlers", /* @__PURE__ */ new Map()), c(this, "pools", /* @__PURE__ */ new Map()), c(this, "target", void 0), c(this, "createEmitter", function(B) {
        return function(U) {
          A.pools.forEach(function(re) {
            re.dispatchEvent(B, U);
          });
        };
      }), this.target = S;
    }
    return u(C, [{
      key: "addHandlers",
      value: function(A, B, U) {
        if (this.pools.has(A)) {
          var re = this.pools.get(A);
          this.pools.set(A, re.addHandlers(B, U));
        } else
          this.pools.set(A, F.createByType(A, B, U));
        this.handlers.has(B) || this.addTargetHandler(B);
      }
    }, {
      key: "hasHandlers",
      value: function() {
        return this.handlers.size > 0;
      }
    }, {
      key: "removeHandlers",
      value: function(A, B, U) {
        if (this.pools.has(A)) {
          var re = this.pools.get(A), G = re.removeHandlers(B, U);
          G.hasHandlers() ? this.pools.set(A, G) : this.pools.delete(A);
          var ae = !1;
          this.pools.forEach(function(he) {
            return ae = ae || he.hasHandlers(B);
          }), ae || this.removeTargetHandler(B);
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
      var S = this;
      o(this, C), c(this, "targets", /* @__PURE__ */ new Map()), c(this, "getTarget", function(A) {
        var B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, U = k(A);
        if (S.targets.has(U))
          return S.targets.get(U);
        if (!B) return null;
        var re = new E(U);
        return S.targets.set(U, re), re;
      }), c(this, "removeTarget", function(A) {
        S.targets.delete(k(A));
      });
    }
    return u(C, [{
      key: "sub",
      value: function(A, B) {
        var U = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (e.canUseDOM) {
          var re = U.target, G = re === void 0 ? document : re, ae = U.pool, he = ae === void 0 ? "default" : ae, ye = this.getTarget(G);
          ye.addHandlers(he, A, _(B));
        }
      }
    }, {
      key: "unsub",
      value: function(A, B) {
        var U = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (e.canUseDOM) {
          var re = U.target, G = re === void 0 ? document : re, ae = U.pool, he = ae === void 0 ? "default" : ae, ye = this.getTarget(G, !1);
          ye && (ye.removeHandlers(he, A, _(B)), ye.hasHandlers() || this.removeTarget(G));
        }
      }
    }]), C;
  }(), T = new I(), P = /* @__PURE__ */ function(C) {
    d(S, C);
    function S() {
      return o(this, S), g(this, p(S).apply(this, arguments));
    }
    return u(S, [{
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
        var U = B.name, re = B.on, G = B.pool, ae = B.target;
        T.sub(U, re, {
          pool: G,
          target: ae
        });
      }
    }, {
      key: "unsubscribe",
      value: function(B) {
        var U = B.name, re = B.on, G = B.pool, ae = B.target;
        T.unsub(U, re, {
          pool: G,
          target: ae
        });
      }
    }, {
      key: "render",
      value: function() {
        return null;
      }
    }]), S;
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
  }, gl.instance = T, gl.default = P, gl;
}
var Qu;
process.env.NODE_ENV === "production" ? Qu = UD() : Qu = HD();
bm.exports = Qu.default;
var Sl = bm.exports.instance = Qu.instance, YD = bm.exports;
const Ya = /* @__PURE__ */ hc(YD);
function $1() {
}
var VD = 1 / 0, qD = hs && 1 / mm(new hs([, -0]))[1] == VD ? function(e) {
  return new hs(e);
} : $1, GD = 200;
function B1(e, t, n) {
  var r = -1, o = gm, s = e.length, u = !0, c = [], d = c;
  if (s >= GD) {
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
var KD = "[object Number]";
function ZD(e) {
  return typeof e == "number" || jr(e) && ka(e) == KD;
}
var XD = "[object String]";
function _m(e) {
  return typeof e == "string" || !yn(e) && jr(e) && ka(e) == XD;
}
var QD = "[object Boolean]";
function JD(e) {
  return e === !0 || e === !1 || jr(e) && ka(e) == QD;
}
function j1(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = j1(e[t])) && (r && (r += " "), r += n);
  else for (t in e) e[t] && (r && (r += " "), r += t);
  return r;
}
function Ze() {
  for (var e, t, n = 0, r = ""; n < arguments.length; ) (e = arguments[n++]) && (t = j1(e)) && (r && (r += " "), r += t);
  return r;
}
var qb = {};
function gh(e, t, n, r) {
  if (r === void 0 && (r = {}), typeof e != "function" && typeof e != "string")
    throw new Error("createShorthand() Component must be a string or function.");
  if (Tt(n) || JD(n))
    return null;
  var o = _m(n), s = ZD(n), u = bs(n), c = /* @__PURE__ */ L.isValidElement(n), d = Pd(n), p = o || s || yn(n);
  if (!u && !c && !d && !p)
    return process.env.NODE_ENV !== "production" && console.error(["Shorthand value must be a string|number|array|object|ReactElement|function.", " Use null|undefined|boolean for none", " Received " + typeof n + "."].join("")), null;
  var h = r, m = h.defaultProps, g = m === void 0 ? {} : m, y = c && n.props || d && n || p && t(n), b = r, _ = b.overrideProps, w = _ === void 0 ? {} : _;
  w = bs(w) ? w(pe({}, g, y)) : w;
  var k = pe({}, g, y, w);
  if (g.className || w.className || y.className) {
    var F = Ze(g.className, w.className, y.className);
    k.className = kd(F.split(" ")).join(" ");
  }
  if ((g.style || w.style || y.style) && (k.style = pe({}, g.style, y.style, w.style)), Tt(k.key)) {
    var E = k.childKey, I = r, T = I.autoGenerateKey, P = T === void 0 ? !0 : T;
    Tt(E) ? P && (o || s) && (k.key = n) : (k.key = typeof E == "function" ? E(k) : E, delete k.childKey);
  }
  if (c)
    return /* @__PURE__ */ L.cloneElement(n, k);
  if (typeof k.children == "function")
    return k.children(e, pe({}, k, {
      children: void 0
    }));
  if (p || d)
    return /* @__PURE__ */ L.createElement(e, k);
  if (u)
    return process.env.NODE_ENV !== "production" && (qb[e] || (qb[e] = !0, console.warn('Warning: There is a deprecated shorthand function usage for "' + e + '". It is deprecated and will be removed in v3 release. Please follow our upgrade guide: https://github.com/Semantic-Org/Semantic-UI-React/pull/4029'))), n(e, k, k.children);
}
function Kt(e, t) {
  if (typeof e != "function" && typeof e != "string")
    throw new Error("createShorthandFactory() Component must be a string or function.");
  return function(n, r) {
    return gh(e, t, n, r);
  };
}
var eL = /* @__PURE__ */ Kt("div", function(e) {
  return {
    children: e
  };
}), tL = /* @__PURE__ */ Kt("input", function(e) {
  return {
    type: e
  };
}), vh = /* @__PURE__ */ Kt("label", function(e) {
  return {
    children: e
  };
}), Ge = function(t, n) {
  var r = t.handledProps, o = r === void 0 ? [] : r;
  return Object.keys(n).reduce(function(s, u) {
    return u === "childKey" || o.indexOf(u) === -1 && (s[u] = n[u]), s;
  }, {});
};
function Qe(e, t, n) {
  var r = e.defaultProps, o = r === void 0 ? {} : r;
  if (t.as && t.as !== o.as) return t.as;
  if (n) {
    var s = n();
    if (s) return s;
  }
  return t.href ? "a" : o.as || "div";
}
function nL(e, t) {
  return wi(t, function(n) {
    return e[n];
  });
}
function W1(e) {
  return e == null ? [] : nL(e, Fr(e));
}
var rL = Math.max;
function _a(e, t, n, r) {
  e = io(e) ? e : W1(e), n = n ? yc(n) : 0;
  var o = e.length;
  return n < 0 && (n = rL(o + n, 0)), _m(e) ? n <= o && e.indexOf(t, n) > -1 : !!o && Od(e, t, n) > -1;
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
], aL = [
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
], oL = [].concat(z1, aL), iL = ["alt", "height", "src", "srcSet", "width", "loading"], wm = function(t, n) {
  n === void 0 && (n = {});
  var r = n, o = r.htmlProps, s = o === void 0 ? oL : o, u = r.includeAria, c = u === void 0 ? !0 : u, d = {}, p = {};
  return w1(t, function(h, m) {
    var g = c && (/^aria-.*$/.test(m) || m === "role"), y = _a(s, m) || g ? d : p;
    y[m] = h;
  }), [d, p];
}, sL = typeof document == "object" && document !== null, lL = typeof window == "object" && window !== null && window.self === window, xi = function e() {
  return Tt(e.override) ? sL && lL : e.override;
}, cL = Math.max, uL = Math.min;
function dL(e, t, n) {
  return e >= uL(t, n) && e < cL(t, n);
}
function Gb(e, t, n) {
  return t = ps(t), n === void 0 ? (n = t, t = 0) : n = ps(n), e = o1(e), dL(e, t, n);
}
function fL(e) {
  return e && e.length ? e[0] : void 0;
}
var Io = function(t, n) {
  if (Nl([n, t], Tt)) return !1;
  if (n.target && (Fe(n.target, "setAttribute", "data-suir-click-target", !0), document.querySelector("[data-suir-click-target=true]")))
    return Fe(n.target, "removeAttribute", "data-suir-click-target"), t.contains(n.target);
  var r = n.clientX, o = n.clientY;
  if (Nl([r, o], Tt)) return !1;
  var s = t.getClientRects();
  if (!t.offsetWidth || !t.offsetHeight || !s || !s.length) return !1;
  var u = fL(s), c = u.top, d = u.bottom, p = u.left, h = u.right;
  return Nl([c, d, p, h], Tt) ? !1 : Gb(o, c, d + 1e-3) && Gb(r, p, h + 1e-3);
}, U1 = function(t) {
  return {
    active: !1,
    type: "ellipsisItem",
    value: t
  };
}, pL = function() {
  return {
    active: !1,
    type: "firstItem",
    value: 1
  };
}, hL = function(t) {
  return {
    active: !1,
    type: "prevItem",
    value: Math.max(1, t - 1)
  };
}, mL = function(t) {
  return function(n) {
    return {
      active: t === n,
      type: "pageItem",
      value: n
    };
  };
}, gL = function(t, n) {
  return {
    active: !1,
    type: "nextItem",
    value: Math.min(t + 1, n)
  };
}, vL = function(t) {
  return {
    active: !1,
    type: "lastItem",
    value: t
  };
}, yL = Math.ceil, bL = Math.max;
function _L(e, t, n, r) {
  for (var o = -1, s = bL(yL((t - e) / (n || 1)), 0), u = Array(s); s--; )
    u[++o] = e, e += n;
  return u;
}
function wL(e) {
  return function(t, n, r) {
    return r && typeof r != "number" && uh(t, n, r) && (n = r = void 0), t = ps(t), n === void 0 ? (n = t, t = 0) : n = ps(n), r = r === void 0 ? t < n ? 1 : -1 : ps(r), _L(t, n, r);
  };
}
var xL = wL(), EL = function(t, n, r) {
  var o = n - 1, s = o !== t + 1, u = s ? U1 : r;
  return u(o);
}, CL = function(t, n, r) {
  var o = t + 1, s = o !== n - 1, u = s ? U1 : r;
  return u(o);
}, Mu = function(t, n, r) {
  return Cn(xL(t, n + 1), r);
}, OL = function(t, n) {
  var r = t.activePage, o = t.boundaryRange, s = t.hideEllipsis, u = t.siblingRange, c = t.totalPages, d = s ? 0 : 1, p = o, h = Mu(1, p, n), m = c + 1 - o, g = Mu(m, c, n), y = Math.min(Math.max(r - u, p + d + 1), m - d - 2 * u - 1), b = y + 2 * u, _ = Mu(y, b, n);
  return [].concat(h, [!s && EL(p, y, n)], _, [!s && CL(b, m, n)], g).filter(Boolean);
}, SL = function(t) {
  var n = t.boundaryRange, r = t.hideEllipsis, o = t.siblingRange, s = t.totalPages, u = 2 * n, c = r ? 0 : 2, d = 2 * o;
  return 1 + c + d + u >= s;
}, TL = function(t) {
  var n = t.activePage, r = t.boundaryRange, o = t.hideEllipsis, s = t.siblingRange, u = t.totalPages;
  return {
    activePage: +n,
    boundaryRange: +r,
    hideEllipsis: !!o,
    siblingRange: +s,
    totalPages: +u
  };
}, PL = function(t) {
  var n = TL(t), r = n.activePage, o = n.totalPages, s = mL(r), u = SL(n) ? Mu(1, o, s) : OL(n, s);
  return [pL(), hL(r)].concat(u, [gL(r, o), vL(o)]);
}, oa = ["red", "orange", "yellow", "olive", "green", "teal", "blue", "violet", "purple", "pink", "brown", "grey", "black"], _c = ["left", "right"], fr = ["mini", "tiny", "small", "medium", "large", "big", "huge", "massive"], Wi = ["left", "center", "right", "justified"], zi = ["bottom", "middle", "top"], H1 = ["mobile", "tablet", "computer", "large screen", "widescreen"], sr = [].concat(Fr(Ru), Fr(Ru).map(Number), W1(Ru)), kL = ["american sign language interpreting", "assistive listening systems", "audio description", "blind", "braille", "closed captioning", "closed captioning outline", "deaf", "low vision", "phone volume", "question circle", "question circle outline", "sign language", "tty", "universal access", "wheelchair"], NL = ["angle double down", "angle double left", "angle double right", "angle double up", "angle down", "angle left", "angle right", "angle up", "arrow alternate circle down", "arrow alternate circle down outline", "arrow alternate circle left", "arrow alternate circle left outline", "arrow alternate circle right", "arrow alternate circle right outline", "arrow alternate circle up", "arrow alternate circle up outline", "arrow circle down", "arrow circle left", "arrow circle right", "arrow circle up", "arrow down", "arrow left", "arrow right", "arrow up", "arrows alternate", "arrows alternate horizontal", "arrows alternate vertical", "caret down", "caret left", "caret right", "caret square down", "caret square down outline", "caret square left", "caret square left outline", "caret square right", "caret square right outline", "caret square up", "caret square up outline", "caret up", "cart arrow down", "chart line", "chevron circle down", "chevron circle left", "chevron circle right", "chevron circle up", "chevron down", "chevron left", "chevron right", "chevron up", "cloud download", "cloud upload", "download", "exchange", "expand arrows alternate", "external alternate", "external square alternate", "hand point down", "hand point down outline", "hand point left", "hand point left outline", "hand point right", "hand point right outline", "hand point up", "hand point up outline", "hand pointer", "hand pointer outline", "history", "level down alternate", "level up alternate", "location arrow", "long arrow alternate down", "long arrow alternate left", "long arrow alternate right", "long arrow alternate up", "mouse pointer", "play", "random", "recycle", "redo", "redo alternate", "reply", "reply all", "retweet", "share", "share square", "share square outline", "sign-in", "sign-out", "sign-in alternate", "sign-out alternate", "sort", "sort alphabet down", "sort alphabet up", "sort amount down", "sort amount up", "sort down", "sort numeric down", "sort numeric up", "sort up", "sync", "sync alternate", "text height", "text width", "undo", "undo alternate", "upload", "zoom-in", "zoom-out"], IL = ["audio description", "backward", "circle", "circle outline", "closed captioning", "closed captioning outline", "compress", "eject", "expand", "expand arrows alternate", "fast backward", "fast forward", "file audio", "file audio outline", "file video", "file video outline", "film", "forward", "headphones", "microphone", "microphone slash", "music", "pause", "pause circle", "pause circle outline", "phone volume", "play", "play circle", "play circle outline", "podcast", "random", "redo", "redo alternate", "rss", "rss square", "step backward", "step forward", "stop", "stop circle", "stop circle outline", "sync", "sync alternate", "undo", "undo alternate", "video", "volume down", "volume off", "volume up"], AL = ["address book", "address book outline", "address card", "address card outline", "archive", "balance scale", "birthday cake", "book", "briefcase", "building", "building outline", "bullhorn", "bullseye", "calculator", "calendar", "calendar outline", "calendar alternate", "calendar alternate outline", "certificate", "chart area", "chart bar", "chart bar outline", "chart line", "chart pie", "clipboard", "clipboard outline", "coffee", "columns", "compass", "compass outline", "copy", "copy outline", "copyright", "copyright outline", "cut", "edit", "edit outline", "envelope", "envelope outline", "envelope open", "envelope open outline", "envelope square", "eraser", "fax", "file", "file outline", "file alternate", "file alternate outline", "folder", "folder outline", "folder open", "folder open outline", "globe", "industry", "paperclip", "paste", "pen square", "pencil alternate", "percent", "phone", "phone square", "phone volume", "registered", "registered outline", "save", "save outline", "sitemap", "sticky note", "sticky note outline", "suitcase", "table", "tag", "tags", "tasks", "thumbtack", "trademark"], RL = ["chess", "chess bishop", "chess board", "chess king", "chess knight", "chess pawn", "chess queen", "chess rook", "square full"], ML = ["archive", "barcode", "bath", "bug", "code", "code branch", "coffee", "file", "file outline", "file alternate", "file alternate outline", "file code", "file code outline", "filter", "fire extinguisher", "folder", "folder outline", "folder open", "folder open outline", "keyboard", "keyboard outline", "microchip", "qrcode", "shield alternate", "sitemap", "terminal", "user secret", "window close", "window close outline", "window maximize", "window maximize outline", "window minimize", "window minimize outline", "window restore", "window restore outline"], DL = ["address book", "address book outline", "address card", "address card outline", "american sign language interpreting", "assistive listening systems", "at", "bell", "bell outline", "bell slash", "bell slash outline", "bullhorn", "comment", "comment outline", "comment alternate", "comment alternate outline", "comments", "comments outline", "envelope", "envelope outline", "envelope open", "envelope open outline", "envelope square", "fax", "inbox", "language", "microphone", "microphone slash", "mobile", "mobile alternate", "paper plane", "paper plane outline", "phone", "phone square", "phone volume", "rss", "rss square", "tty", "wifi"], LL = ["desktop", "download", "hdd", "hdd outline", "headphones", "keyboard", "keyboard outline", "laptop", "microchip", "mobile", "mobile alternate", "plug", "power off", "print", "save", "save outline", "server", "tablet", "tablet alternate", "tv", "upload"], FL = ["dollar sign", "euro sign", "lira sign", "money bill alternate", "money bill alternate outline", "pound sign", "ruble sign", "rupee sign", "shekel sign", "won sign", "yen sign"], $L = ["bell", "bell outline", "bell slash", "bell slash outline", "calendar", "calendar outline", "calendar alternate", "calendar alternate outline", "calendar check", "calendar check outline", "calendar minus", "calendar minus outline", "calendar plus", "calendar plus outline", "calendar times", "calendar times outline", "clock", "clock outline", "hourglass", "hourglass outline", "hourglass end", "hourglass half", "hourglass start", "stopwatch"], BL = ["adjust", "clone", "clone outline", "copy", "copy outline", "crop", "crosshairs", "cut", "edit", "edit outline", "eraser", "eye", "eye dropper", "eye slash", "eye slash outline", "object group", "object group outline", "object ungroup", "object ungroup outline", "paint brush", "paste", "pencil alternate", "save", "save outline", "tint"], jL = ["align center", "align justify", "align left", "align right", "bold", "clipboard", "clipboard outline", "clone", "clone outline", "columns", "copy", "copy outline", "cut", "edit", "edit outline", "eraser", "file", "file outline", "file alternate", "file alternate outline", "font", "heading", "i cursor", "indent", "italic", "linkify", "list", "list alternate", "list alternate outline", "list ol", "list ul", "outdent", "paper plane", "paper plane outline", "paperclip", "paragraph", "paste", "pencil alternate", "print", "quote left", "quote right", "redo", "redo alternate", "reply", "reply all", "share", "strikethrough", "subscript", "superscript", "sync", "sync alternate", "table", "tasks", "text height", "text width", "th", "th large", "th list", "trash", "trash alternate", "trash alternate outline", "underline", "undo", "undo alternate", "unlink"], WL = ["archive", "clone", "clone outline", "copy", "copy outline", "cut", "file", "file outline", "file alternate", "file alternate outline", "file archive", "file archive outline", "file audio", "file audio outline", "file code", "file code outline", "file excel", "file excel outline", "file image", "file image outline", "file pdf", "file pdf outline", "file powerpoint", "file powerpoint outline", "file video", "file video outline", "file word", "file word outline", "folder", "folder outline", "folder open", "folder open outline", "paste", "save", "save outline", "sticky note", "sticky note outline"], zL = ["genderless", "mars", "mars double", "mars stroke", "mars stroke horizontal", "mars stroke vertical", "mercury", "neuter", "transgender", "transgender alternate", "venus", "venus double", "venus mars"], UL = ["hand lizard", "hand lizard outline", "hand paper", "hand paper outline", "hand peace", "hand peace outline", "hand point down", "hand point down outline", "hand point left", "hand point left outline", "hand point right", "hand point right outline", "hand point up", "hand point up outline", "hand pointer", "hand pointer outline", "hand rock", "hand rock outline", "hand scissors", "hand scissors outline", "hand spock", "hand spock outline", "handshake", "handshake outline", "thumbs down", "thumbs down outline", "thumbs up", "thumbs up outline"], HL = ["ambulance", "h square", "heart", "heart outline", "heartbeat", "hospital", "hospital outline", "medkit", "plus square", "plus square outline", "stethoscope", "user md", "wheelchair"], YL = ["adjust", "bolt", "camera", "camera retro", "clone", "clone outline", "compress", "expand", "eye", "eye dropper", "eye slash", "eye slash outline", "file image", "file image outline", "film", "id badge", "id badge outline", "id card", "id card outline", "image", "image outline", "images", "images outline", "sliders horizontal", "tint"], VL = ["ban", "barcode", "bars", "beer", "bell", "bell outline", "bell slash", "bell slash outline", "bug", "bullhorn", "bullseye", "calculator", "calendar", "calendar outline", "calendar alternate", "calendar alternate outline", "calendar check", "calendar check outline", "calendar minus", "calendar minus outline", "calendar plus", "calendar plus outline", "calendar times", "calendar times outline", "certificate", "check", "check circle", "check circle outline", "check square", "check square outline", "circle", "circle outline", "clipboard", "clipboard outline", "clone", "clone outline", "cloud", "cloud download", "cloud upload", "coffee", "cog", "cogs", "copy", "copy outline", "cut", "database", "dot circle", "dot circle outline", "download", "edit", "edit outline", "ellipsis horizontal", "ellipsis vertical", "envelope", "envelope outline", "envelope open", "envelope open outline", "eraser", "exclamation", "exclamation circle", "exclamation triangle", "external alternate", "external square alternate", "eye", "eye slash", "eye slash outline", "file", "file outline", "file alternate", "file alternate outline", "filter", "flag", "flag outline", "flag checkered", "folder", "folder outline", "folder open", "folder open outline", "frown", "frown outline", "hashtag", "heart", "heart outline", "history", "home", "i cursor", "info", "info circle", "language", "magic", "meh", "meh outline", "microphone", "microphone slash", "minus", "minus circle", "minus square", "minus square outline", "paste", "pencil alternate", "plus", "plus circle", "plus square", "plus square outline", "qrcode", "question", "question circle", "question circle outline", "quote left", "quote right", "redo", "redo alternate", "reply", "reply all", "rss", "rss square", "save", "save outline", "search", "search minus", "search plus", "share", "share alternate", "share alternate square", "share square", "share square outline", "shield alternate", "sign-in", "sign-out", "signal", "sitemap", "sliders horizontal", "smile", "smile outline", "sort", "sort alphabet down", "sort alphabet up", "sort amount down", "sort amount up", "sort down", "sort numeric down", "sort numeric up", "sort up", "star", "star outline", "star half", "star half outline", "sync", "sync alternate", "thumbs down", "thumbs down outline", "thumbs up", "thumbs up outline", "times", "times circle", "times circle outline", "toggle off", "toggle on", "trash", "trash alternate", "trash alternate outline", "trophy", "undo", "undo alternate", "upload", "user", "user outline", "user circle", "user circle outline", "wifi"], qL = ["box", "boxes", "clipboard check", "clipboard list", "dolly", "dolly flatbed", "pallet", "shipping fast", "truck", "warehouse"], GL = ["ambulance", "anchor", "balance scale", "bath", "bed", "beer", "bell", "bell outline", "bell slash", "bell slash outline", "bicycle", "binoculars", "birthday cake", "blind", "bomb", "book", "bookmark", "bookmark outline", "briefcase", "building", "building outline", "car", "coffee", "crosshairs", "dollar sign", "eye", "eye slash", "eye slash outline", "fighter jet", "fire", "fire extinguisher", "flag", "flag outline", "flag checkered", "flask", "gamepad", "gavel", "gift", "glass martini", "globe", "graduation cap", "h square", "heart", "heart outline", "heartbeat", "home", "hospital", "hospital outline", "image", "image outline", "images", "images outline", "industry", "info", "info circle", "key", "leaf", "lemon", "lemon outline", "life ring", "life ring outline", "lightbulb", "lightbulb outline", "location arrow", "low vision", "magnet", "male", "map", "map outline", "map marker", "map marker alternate", "map pin", "map signs", "medkit", "money bill alternate", "money bill alternate outline", "motorcycle", "music", "newspaper", "newspaper outline", "paw", "phone", "phone square", "phone volume", "plane", "plug", "plus", "plus square", "plus square outline", "print", "recycle", "road", "rocket", "search", "search minus", "search plus", "ship", "shopping bag", "shopping basket", "shopping cart", "shower", "street view", "subway", "suitcase", "tag", "tags", "taxi", "thumbtack", "ticket alternate", "tint", "train", "tree", "trophy", "truck", "tty", "umbrella", "university", "utensil spoon", "utensils", "wheelchair", "wifi", "wrench"], KL = ["ambulance", "band aid", "dna", "first aid", "heart", "heart outline", "heartbeat", "hospital", "hospital outline", "hospital symbol", "pills", "plus", "stethoscope", "syringe", "thermometer", "user md", "weight"], ZL = ["ambulance", "anchor", "archive", "balance scale", "bath", "bed", "beer", "bell", "bell outline", "bicycle", "binoculars", "birthday cake", "bomb", "book", "bookmark", "bookmark outline", "briefcase", "bug", "building", "building outline", "bullhorn", "bullseye", "bus", "calculator", "calendar", "calendar outline", "calendar alternate", "calendar alternate outline", "camera", "camera retro", "car", "clipboard", "clipboard outline", "cloud", "coffee", "cog", "cogs", "compass", "compass outline", "copy", "copy outline", "cube", "cubes", "cut", "envelope", "envelope outline", "envelope open", "envelope open outline", "eraser", "eye", "eye dropper", "fax", "fighter jet", "file", "file outline", "file alternate", "file alternate outline", "film", "fire", "fire extinguisher", "flag", "flag outline", "flag checkered", "flask", "futbol", "futbol outline", "gamepad", "gavel", "gem", "gem outline", "gift", "glass martini", "globe", "graduation cap", "hdd", "hdd outline", "headphones", "heart", "heart outline", "home", "hospital", "hospital outline", "hourglass", "hourglass outline", "image", "image outline", "images", "images outline", "industry", "key", "keyboard", "keyboard outline", "laptop", "leaf", "lemon", "lemon outline", "life ring", "life ring outline", "lightbulb", "lightbulb outline", "lock", "lock open", "magic", "magnet", "map", "map outline", "map marker", "map marker alternate", "map pin", "map signs", "medkit", "microchip", "microphone", "mobile", "mobile alternate", "money bill alternate", "money bill alternate outline", "moon", "moon outline", "motorcycle", "newspaper", "newspaper outline", "paint brush", "paper plane", "paper plane outline", "paperclip", "paste", "paw", "pencil alternate", "phone", "plane", "plug", "print", "puzzle piece", "road", "rocket", "save", "save outline", "search", "shield alternate", "shopping bag", "shopping basket", "shopping cart", "shower", "snowflake", "snowflake outline", "space shuttle", "star", "star outline", "sticky note", "sticky note outline", "stopwatch", "subway", "suitcase", "sun", "sun outline", "tablet", "tablet alternate", "tachometer alternate", "tag", "tags", "taxi", "thumbtack", "ticket alternate", "train", "trash", "trash alternate", "trash alternate outline", "tree", "trophy", "truck", "tv", "umbrella", "university", "unlock", "unlock alternate", "utensil spoon", "utensils", "wheelchair", "wrench"], XL = ["bell", "bell outline", "bookmark", "bookmark outline", "bullhorn", "camera", "camera retro", "cart arrow down", "cart plus", "certificate", "credit card", "credit card outline", "gem", "gem outline", "gift", "handshake", "handshake outline", "heart", "heart outline", "key", "shopping bag", "shopping basket", "shopping cart", "star", "star outline", "tag", "tags", "thumbs down", "thumbs down outline", "thumbs up", "thumbs up outline", "trophy"], QL = ["bookmark", "bookmark outline", "calendar", "calendar outline", "certificate", "circle", "circle outline", "cloud", "comment", "comment outline", "file", "file outline", "folder", "folder outline", "heart", "heart outline", "map marker", "play", "square", "square outline", "star", "star outline"], JL = ["asterisk", "certificate", "circle notch", "cog", "compass", "compass outline", "crosshairs", "life ring", "life ring outline", "snowflake", "snowflake outline", "spinner", "sun", "sun outline", "sync"], eF = ["baseball ball", "basketball ball", "bowling ball", "football ball", "futbol", "futbol outline", "golf ball", "hockey puck", "quidditch", "table tennis", "volleyball ball"], tF = ["ban", "battery empty", "battery full", "battery half", "battery quarter", "battery three quarters", "bell", "bell outline", "bell slash", "bell slash outline", "calendar", "calendar outline", "calendar alternate", "calendar alternate outline", "calendar check", "calendar check outline", "calendar minus", "calendar minus outline", "calendar plus", "calendar plus outline", "calendar times", "calendar times outline", "cart arrow down", "cart plus", "exclamation", "exclamation circle", "exclamation triangle", "eye", "eye slash", "eye slash outline", "file", "file outline", "file alternate", "file alternate outline", "folder", "folder outline", "folder open", "folder open outline", "info", "info circle", "lock", "lock open", "minus", "minus circle", "minus square", "minus square outline", "plus", "plus circle", "plus square", "plus square outline", "question", "question circle", "question circle outline", "shield alternate", "shopping cart", "sign in alternate", "sign out alternate", "thermometer empty", "thermometer full", "thermometer half", "thermometer quarter", "thermometer three quarters", "thumbs down", "thumbs down outline", "thumbs up", "thumbs up outline", "toggle off", "toggle on", "unlock", "unlock alternate"], nF = ["address book", "address book outline", "address card", "address card outline", "bed", "blind", "child", "female", "frown", "frown outline", "id badge", "id badge outline", "id card", "id card outline", "male", "meh", "meh outline", "power off", "smile", "smile outline", "street view", "user", "user outline", "user circle", "user circle outline", "user md", "user plus", "user secret", "user times", "users", "wheelchair"], rF = ["ambulance", "bicycle", "bus", "car", "fighter jet", "motorcycle", "paper plane", "paper plane outline", "plane", "rocket", "ship", "shopping cart", "space shuttle", "subway", "taxi", "train", "truck", "wheelchair"], aF = ["archive", "book", "bookmark", "bookmark outline", "edit", "edit outline", "envelope", "envelope outline", "envelope open", "envelope open outline", "eraser", "file", "file outline", "file alternate", "file alternate outline", "folder", "folder outline", "folder open", "folder open outline", "keyboard", "keyboard outline", "newspaper", "newspaper outline", "paper plane", "paper plane outline", "paperclip", "paragraph", "pen square", "pencil alternate", "quote left", "quote right", "sticky note", "sticky note outline", "thumbtack"], oF = ["500px", "accessible", "accusoft", "adn", "adversal", "affiliatetheme", "algolia", "amazon", "amazon pay", "amilia", "android", "angellist", "angrycreative", "angular", "app store", "app store ios", "apper", "apple", "apple pay", "asymmetrik", "audible", "autoprefixer", "avianex", "aviato", "aws", "bandcamp", "behance", "behance square", "bimobject", "bitbucket", "bitcoin", "bity", "black tie", "blackberry", "blogger", "blogger b", "bluetooth", "bluetooth b", "btc", "buromobelexperte", "buysellads", "cc amazon pay", "cc amex", "cc apple pay", "cc diners club", "cc discover", "cc jcb", "cc mastercard", "cc paypal", "cc stripe", "cc visa", "centercode", "chrome", "cloudscale", "cloudsmith", "cloudversify", "codepen", "codiepie", "connectdevelop", "contao", "cpanel", "creative commons", "css3", "css3 alternate", "cuttlefish", "d and d", "dashcube", "delicious", "deploydog", "deskpro", "deviantart", "digg", "digital ocean", "discord", "discourse", "dochub", "docker", "draft2digital", "dribbble", "dribbble square", "dropbox", "drupal", "dyalog", "earlybirds", "edge", "elementor", "ember", "empire", "envira", "erlang", "ethereum", "etsy", "expeditedssl", "facebook", "facebook f", "facebook messenger", "facebook square", "firefox", "first order", "firstdraft", "flickr", "flipboard", "fly", "font awesome", "font awesome alternate", "font awesome flag", "fonticons", "fonticons fi", "fort awesome", "fort awesome alternate", "forumbee", "foursquare", "free code camp", "freebsd", "get pocket", "gg", "gg circle", "git", "git square", "github", "github alternate", "github square", "gitkraken", "gitlab", "gitter", "glide", "glide g", "gofore", "goodreads", "goodreads g", "google", "google drive", "google play", "google plus", "google plus g", "google plus square", "google wallet", "gratipay", "grav", "gripfire", "grunt", "gulp", "hacker news", "hacker news square", "hips", "hire a helper", "hooli", "hotjar", "houzz", "html5", "hubspot", "imdb", "instagram", "internet explorer", "ioxhost", "itunes", "itunes note", "jenkins", "joget", "joomla", "js", "js square", "jsfiddle", "keycdn", "kickstarter", "kickstarter k", "korvue", "laravel", "lastfm", "lastfm square", "leanpub", "less", "linechat", "linkedin", "linkedin alternate", "linode", "linux", "lyft", "magento", "maxcdn", "medapps", "medium", "medium m", "medrt", "meetup", "microsoft", "mix", "mixcloud", "mizuni", "modx", "monero", "napster", "nintendo switch", "node", "node js", "npm", "ns8", "nutritionix", "odnoklassniki", "odnoklassniki square", "opencart", "openid", "opera", "optin monster", "osi", "page4", "pagelines", "palfed", "patreon", "paypal", "periscope", "phabricator", "phoenix framework", "php", "pied piper", "pied piper alternate", "pied piper pp", "pinterest", "pinterest p", "pinterest square", "playstation", "product hunt", "pushed", "python", "qq", "quinscape", "quora", "ravelry", "react", "rebel", "redriver", "reddit", "reddit alien", "reddit square", "rendact", "renren", "replyd", "resolving", "rocketchat", "rockrms", "safari", "sass", "schlix", "scribd", "searchengin", "sellcast", "sellsy", "servicestack", "shirtsinbulk", "simplybuilt", "sistrix", "skyatlas", "skype", "slack", "slack hash", "slideshare", "snapchat", "snapchat ghost", "snapchat square", "soundcloud", "speakap", "spotify", "stack exchange", "stack overflow", "staylinked", "steam", "steam square", "steam symbol", "sticker mule", "strava", "stripe", "stripe s", "studiovinari", "stumbleupon", "stumbleupon circle", "superpowers", "supple", "telegram", "telegram plane", "tencent weibo", "themeisle", "trello", "tripadvisor", "tumblr", "tumblr square", "twitch", "twitter", "twitter square", "typo3", "uber", "uikit", "uniregistry", "untappd", "usb", "ussunnah", "vaadin", "viacoin", "viadeo", "viadeo square", "viber", "vimeo", "vimeo square", "vimeo v", "vine", "vk", "vnv", "vuejs", "wechat", "weibo", "weixin", "whatsapp", "whatsapp square", "whmcs", "wikipedia w", "windows", "wordpress", "wordpress simple", "wpbeginner", "wpexplorer", "wpforms", "xbox", "xing", "xing square", "y combinator", "yahoo", "yandex", "yandex international", "yelp", "yoast", "youtube", "youtube square"], iF = kd([].concat(kL, NL, IL, AL, RL, ML, DL, LL, FL, $L, BL, jL, WL, zL, UL, HL, YL, VL, qL, GL, KL, ZL, XL, QL, JL, eF, tF, nF, rF, aF, oF)), sF = ["chess rock", "ordered list", "unordered list", "user doctor", "shield", "puzzle", "add circle", "add square", "add to calendar", "add to cart", "add user", "add", "alarm mute", "alarm", "ald", "als", "announcement", "area chart", "area graph", "arrow down cart", "asexual", "asl interpreting", "asl", "assistive listening devices", "attach", "attention", "balance", "bar", "bathtub", "battery four", "battery high", "battery low", "battery one", "battery three", "battery two", "battery zero", "birthday", "block layout", "bluetooth alternative", "broken chain", "browser", "call square", "call", "cancel", "cart", "cc", "chain", "chat", "checked calendar", "checkmark", "circle notched", "close", "cny", "cocktail", "commenting", "computer", "configure", "content", "deafness", "delete calendar", "delete", "detective", "discussions", "doctor", "dollar", "dont", "drivers license", "dropdown", "emergency", "envira gallery", "erase", "eur", "euro", "eyedropper", "factory", "favorite", "feed", "female homosexual", "file text", "file text outline", "find", "first aid", "fork", "game", "gay", "gbp", "google plus circle", "google plus official", "grab", "graduation", "grid layout", "group", "h", "hand victory", "handicap", "hard of hearing", "header", "help circle", "help", "heterosexual", "hide", "hotel", "hourglass four", "hourglass full", "hourglass one", "hourglass three", "hourglass two", "idea", "ils", "in cart", "inr", "intergender", "intersex", "jpy", "krw", "lab", "law", "legal", "lesbian", "lightning", "like", "line graph", "linkedin square", "linkify", "lira", "list layout", "magnify", "mail forward", "mail outline", "mail square", "mail", "male homosexual", "man", "marker", "mars alternate", "mars horizontal", "mars vertical", "microsoft edge", "military", "ms edge", "mute", "new pied piper", "non binary transgender", "numbered list", "options", "other gender horizontal", "other gender vertical", "other gender", "payment", "paypal card", "pencil square", "photo", "picture", "pie chart", "pie graph", "pied piper hat", "pin", "plus cart", "point", "pointing down", "pointing left", "pointing right", "pointing up", "pound", "power cord", "power", "privacy", "r circle", "rain", "record", "refresh", "remove circle", "remove from calendar", "remove user", "remove", "repeat", "rmb", "rouble", "rub", "ruble", "rupee", "s15", "selected radio", "send", "setting", "settings", "shekel", "sheqel", "shipping", "shop", "shuffle", "shutdown", "sidebar", "signing", "signup", "sliders", "soccer", "sort alphabet ascending", "sort alphabet descending", "sort ascending", "sort content ascending", "sort content descending", "sort descending", "sort numeric ascending", "sort numeric descending", "sound", "spy", "stripe card", "student", "talk", "target", "teletype", "television", "text cursor", "text telephone", "theme", "thermometer", "thumb tack", "time", "tm", "toggle down", "toggle left", "toggle right", "toggle up", "translate", "travel", "treatment", "triangle down", "triangle left", "triangle right", "triangle up", "try", "unhide", "unlinkify", "unmute", "usd", "user cancel", "user close", "user delete", "user x", "vcard", "video camera", "video play", "volume control phone", "wait", "warning circle", "warning sign", "warning", "wi-fi", "winner", "wizard", "woman", "won", "wordpress beginner", "wordpress forms", "world", "write square", "x", "yen", "zip", "zoom in", "zoom out", "zoom", "bitbucket square", "checkmark box", "circle thin", "cloud download", "cloud upload", "compose", "conversation", "credit card alternative", "currency", "dashboard", "diamond", "disk", "exchange", "external share", "external square", "external", "facebook official", "food", "hourglass zero", "level down", "level up", "log out", "meanpath", "money", "move", "pencil", "protect", "radio", "remove bookmark", "resize horizontal", "resize vertical", "sign in", "sign out", "spoon", "star half empty", "star half full", "ticket", "times rectangle", "write", "youtube play"], lF = kd([].concat(iF, sF)), cF = [
  "left dropdown"
  // nested dropdown menu direction icon
], uF = kd([].concat(lF, cF));
function dF(e, t) {
  return Cd(e, t);
}
var Kb = xi() && process.env.NODE_ENV !== "test" ? ee.useLayoutEffect : ee.useEffect, fF = /\s+/;
function pF(e) {
  var t = [];
  return e ? (e.forEach(function(n) {
    if (typeof n.current == "string") {
      var r = n.current.split(fF);
      r.forEach(function(o) {
        t.push(o);
      });
    }
  }), t.filter(function(n, r, o) {
    return n.length > 0 && o.indexOf(n) === r;
  })) : [];
}
function hF(e, t) {
  return [t.filter(function(n) {
    return e.indexOf(n) === -1;
  }), e.filter(function(n) {
    return t.indexOf(n) === -1;
  })];
}
var Zb = /* @__PURE__ */ new Map(), Pp = function(t, n) {
  var r = pF(n), o = hF(Zb.get(t) || [], r), s = o[0], u = o[1];
  t && (s.forEach(function(c) {
    return t.classList.add(c);
  }), u.forEach(function(c) {
    return t.classList.remove(c);
  })), Zb.set(t, r);
}, mF = function() {
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
}, vl = new mF();
function gF(e, t) {
  var n = ee.useRef(), r = ee.useRef(!1);
  Kb(function() {
    if (n.current = t, r.current) {
      var o = qu(e) ? e.current : e;
      vl.emit(o, Pp);
    }
    r.current = !0;
  }, [t]), Kb(function() {
    var o = qu(e) ? e.current : e;
    return vl.add(o, n), vl.emit(o, Pp), function() {
      vl.del(o, n), vl.emit(o, Pp);
    };
  }, [e]);
}
var ta = Ws(function(e, t) {
  return Wl(e) ? E1(e, t) : [];
});
function _s(e) {
  var t = e.children, n = e.className, r = e.content, o = e.size, s = Ze(o, "icons", n), u = Ge(_s, e), c = Qe(_s, e);
  return /* @__PURE__ */ ee.createElement(c, pe({}, u, {
    className: s
  }), pt(t) ? r : t);
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
  size: l.oneOf(ta(fr, "medium"))
} : {};
_s.defaultProps = {
  as: "i"
};
var je = /* @__PURE__ */ function(e) {
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
      Fe(r.props, "onClick", c, r.props);
    }, r;
  }
  var n = t.prototype;
  return n.getIconAriaOptions = function() {
    var o = {}, s = this.props, u = s["aria-label"], c = s["aria-hidden"];
    return Tt(u) ? o["aria-hidden"] = "true" : o["aria-label"] = u, Tt(c) || (o["aria-hidden"] = c), o;
  }, n.render = function() {
    var o = this.props, s = o.bordered, u = o.circular, c = o.className, d = o.color, p = o.corner, h = o.disabled, m = o.fitted, g = o.flipped, y = o.inverted, b = o.link, _ = o.loading, w = o.name, k = o.rotated, F = o.size, E = Ze(d, w, F, V(s, "bordered"), V(u, "circular"), V(h, "disabled"), V(m, "fitted"), V(y, "inverted"), V(b, "link"), V(_, "loading"), rn(p, "corner"), Zn(g, "flipped"), Zn(k, "rotated"), "icon", c), I = Ge(t, this.props), T = Qe(t, this.props), P = this.getIconAriaOptions();
    return /* @__PURE__ */ ee.createElement(T, pe({}, I, P, {
      className: E,
      onClick: this.handleClick
    }));
  }, t;
}(V_);
je.handledProps = ["aria-hidden", "aria-label", "as", "bordered", "circular", "className", "color", "corner", "disabled", "fitted", "flipped", "inverted", "link", "loading", "name", "rotated", "size"];
je.propTypes = process.env.NODE_ENV !== "production" ? {
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
  name: M1(uF),
  /** Icon can rotated. */
  rotated: l.oneOf(["clockwise", "counterclockwise"]),
  /** Size of the icon. */
  size: l.oneOf(ta(fr, "medium")),
  /** Icon can have an aria label. */
  "aria-hidden": l.string,
  /** Icon can have an aria label. */
  "aria-label": l.string
} : {};
je.defaultProps = {
  as: "i"
};
je.Group = _s;
je.create = Kt(je, function(e) {
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
var $e = {
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
$e.Spacebar = $e[" "];
$e.Digit0 = $e[0];
$e.Digit1 = $e[1];
$e.Digit2 = $e[2];
$e.Digit3 = $e[3];
$e.Digit4 = $e[4];
$e.Digit5 = $e[5];
$e.Digit6 = $e[6];
$e.Digit7 = $e[7];
$e.Digit8 = $e[8];
$e.Digit9 = $e[9];
$e.Tilde = $e["~"];
$e.GraveAccent = $e["`"];
$e.ExclamationPoint = $e["!"];
$e.AtSign = $e["@"];
$e.PoundSign = $e["#"];
$e.PercentSign = $e["%"];
$e.Caret = $e["^"];
$e.Ampersand = $e["&"];
$e.PlusSign = $e["+"];
$e.MinusSign = $e["-"];
$e.EqualsSign = $e["="];
$e.DivisionSign = $e["/"];
$e.MultiplicationSign = $e["*"];
$e.Comma = $e[","];
$e.Decimal = $e["."];
$e.Colon = $e[":"];
$e.Semicolon = $e[";"];
$e.Pipe = $e["|"];
$e.BackSlash = $e["\\"];
$e.QuestionMark = $e["?"];
$e.SingleQuote = $e["'"];
$e.DoubleQuote = $e['"'];
$e.LeftCurlyBrace = $e["{"];
$e.RightCurlyBrace = $e["}"];
$e.LeftParenthesis = $e["("];
$e.RightParenthesis = $e[")"];
$e.LeftAngleBracket = $e["<"];
$e.RightAngleBracket = $e[">"];
$e.LeftSquareBracket = $e["["];
$e.RightSquareBracket = $e["]"];
var vF = $e;
const bn = /* @__PURE__ */ hc(vF);
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
function yF() {
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
function bF() {
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
    function T(K) {
      if (typeof K == "object" && K !== null) {
        var le = K.$$typeof;
        switch (le) {
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
                var de = Ie && Ie.$$typeof;
                switch (de) {
                  case c:
                  case u:
                  case d:
                  case g:
                  case m:
                  case s:
                    return de;
                  default:
                    return le;
                }
            }
          case t:
            return le;
        }
      }
    }
    var P = u, C = s, S = e, A = d, B = n, U = g, re = m, G = t, ae = o, he = r, ye = p, ke = h, se = !1, me = !1;
    function X(K) {
      return se || (se = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function te(K) {
      return me || (me = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function oe(K) {
      return T(K) === u;
    }
    function _e(K) {
      return T(K) === s;
    }
    function Se(K) {
      return typeof K == "object" && K !== null && K.$$typeof === e;
    }
    function ve(K) {
      return T(K) === d;
    }
    function ue(K) {
      return T(K) === n;
    }
    function xe(K) {
      return T(K) === g;
    }
    function ge(K) {
      return T(K) === m;
    }
    function W(K) {
      return T(K) === t;
    }
    function z(K) {
      return T(K) === o;
    }
    function $(K) {
      return T(K) === r;
    }
    function D(K) {
      return T(K) === p;
    }
    function q(K) {
      return T(K) === h;
    }
    Ht.ContextConsumer = P, Ht.ContextProvider = C, Ht.Element = S, Ht.ForwardRef = A, Ht.Fragment = B, Ht.Lazy = U, Ht.Memo = re, Ht.Portal = G, Ht.Profiler = ae, Ht.StrictMode = he, Ht.Suspense = ye, Ht.SuspenseList = ke, Ht.isAsyncMode = X, Ht.isConcurrentMode = te, Ht.isContextConsumer = oe, Ht.isContextProvider = _e, Ht.isElement = Se, Ht.isForwardRef = ve, Ht.isFragment = ue, Ht.isLazy = xe, Ht.isMemo = ge, Ht.isPortal = W, Ht.isProfiler = z, Ht.isStrictMode = $, Ht.isSuspense = D, Ht.isSuspenseList = q, Ht.isValidElementType = I, Ht.typeOf = T;
  }()), Ht;
}
process.env.NODE_ENV === "production" ? yh.exports = yF() : yh.exports = bF();
var _F = yh.exports;
function wF(e) {
  if (e && (ee.Children.only(e), _F.isFragment(e)))
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
    Fe(this.props, "onMount", null, this.props);
  }, n.componentWillUnmount = function() {
    Fe(this.props, "onUnmount", null, this.props);
  }, n.render = function() {
    if (!xi()) return null;
    var o = this.props, s = o.children, u = o.mountNode, c = u === void 0 ? document.body : u;
    return /* @__PURE__ */ G_(/* @__PURE__ */ ee.createElement(ur, {
      innerRef: this.handleRef
    }, s), c);
  }, t;
}(Qn);
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
    return r = e.call.apply(e, [this].concat(s)) || this, r.contentRef = /* @__PURE__ */ ee.createRef(), r.triggerRef = /* @__PURE__ */ ee.createRef(), r.latestDocumentMouseDownEvent = null, r.handleDocumentMouseDown = function(c) {
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
      Fe.apply(void 0, [p, "props.onBlur", c].concat(g));
      var b = c.relatedTarget || document.activeElement, _ = Fe(r.contentRef.current, "contains", b);
      !h || _ || r.close(c);
    }, r.handleTriggerClick = function(c) {
      for (var d = r.props, p = d.trigger, h = d.closeOnTriggerClick, m = d.openOnTriggerClick, g = r.state.open, y = arguments.length, b = new Array(y > 1 ? y - 1 : 0), _ = 1; _ < y; _++)
        b[_ - 1] = arguments[_];
      Fe.apply(void 0, [p, "props.onClick", c].concat(b)), g && h ? r.close(c) : !g && m && r.open(c);
    }, r.handleTriggerFocus = function(c) {
      for (var d = r.props, p = d.trigger, h = d.openOnTriggerFocus, m = arguments.length, g = new Array(m > 1 ? m - 1 : 0), y = 1; y < m; y++)
        g[y - 1] = arguments[y];
      Fe.apply(void 0, [p, "props.onFocus", c].concat(g)), h && r.open(c);
    }, r.handleTriggerMouseLeave = function(c) {
      clearTimeout(r.mouseEnterTimer);
      for (var d = r.props, p = d.trigger, h = d.closeOnTriggerMouseLeave, m = d.mouseLeaveDelay, g = arguments.length, y = new Array(g > 1 ? g - 1 : 0), b = 1; b < g; b++)
        y[b - 1] = arguments[b];
      Fe.apply(void 0, [p, "props.onMouseLeave", c].concat(y)), h && (r.mouseLeaveTimer = r.closeWithTimeout(c, m));
    }, r.handleTriggerMouseEnter = function(c) {
      clearTimeout(r.mouseLeaveTimer);
      for (var d = r.props, p = d.trigger, h = d.mouseEnterDelay, m = d.openOnTriggerMouseEnter, g = arguments.length, y = new Array(g > 1 ? g - 1 : 0), b = 1; b < g; b++)
        y[b - 1] = arguments[b];
      Fe.apply(void 0, [p, "props.onMouseEnter", c].concat(y)), m && (r.mouseEnterTimer = r.openWithTimeout(c, h));
    }, r.open = function(c) {
      Fe(r.props, "onOpen", c, pe({}, r.props, {
        open: !0
      })), r.setState({
        open: !0
      });
    }, r.openWithTimeout = function(c, d) {
      var p = pe({}, c);
      return setTimeout(function() {
        return r.open(p);
      }, d || 0);
    }, r.close = function(c) {
      r.setState({
        open: !1
      }), Fe(r.props, "onClose", c, pe({}, r.props, {
        open: !1
      }));
    }, r.closeWithTimeout = function(c, d) {
      var p = pe({}, c);
      return setTimeout(function() {
        return r.close(p);
      }, d || 0);
    }, r.handleMount = function() {
      Fe(r.props, "onMount", null, r.props);
    }, r.handleUnmount = function() {
      Fe(r.props, "onUnmount", null, r.props);
    }, r.handleTriggerRef = function(c) {
      r.triggerRef.current = c, ya(r.props.triggerRef, c);
    }, r;
  }
  var n = t.prototype;
  return n.componentWillUnmount = function() {
    clearTimeout(this.mouseEnterTimer), clearTimeout(this.mouseLeaveTimer);
  }, n.render = function() {
    var o = this.props, s = o.children, u = o.eventPool, c = o.mountNode, d = o.trigger, p = this.state.open;
    return process.env.NODE_ENV !== "production" && wF(d), /* @__PURE__ */ ee.createElement(ee.Fragment, null, p && /* @__PURE__ */ ee.createElement(ee.Fragment, null, /* @__PURE__ */ ee.createElement(Nd, {
      innerRef: this.contentRef,
      mountNode: c,
      onMount: this.handleMount,
      onUnmount: this.handleUnmount
    }, s), /* @__PURE__ */ ee.createElement(Ya, {
      name: "mouseleave",
      on: this.handlePortalMouseLeave,
      pool: u,
      target: this.contentRef
    }), /* @__PURE__ */ ee.createElement(Ya, {
      name: "mouseenter",
      on: this.handlePortalMouseEnter,
      pool: u,
      target: this.contentRef
    }), /* @__PURE__ */ ee.createElement(Ya, {
      name: "mousedown",
      on: this.handleDocumentMouseDown,
      pool: u
    }), /* @__PURE__ */ ee.createElement(Ya, {
      name: "click",
      on: this.handleDocumentClick,
      pool: u
    }), /* @__PURE__ */ ee.createElement(Ya, {
      name: "keydown",
      on: this.handleEscape,
      pool: u
    })), d && /* @__PURE__ */ ee.createElement(ur, {
      innerRef: this.handleTriggerRef
    }, /* @__PURE__ */ ee.cloneElement(d, {
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
  var t = e.blurring, n = e.className, r = e.children, o = e.content, s = e.dimmed, u = Ze(V(t, "blurring"), V(s, "dimmed"), "dimmable", n), c = Ge(zl, e), d = Qe(zl, e);
  return /* @__PURE__ */ ee.createElement(d, pe({}, c, {
    className: u
  }), pt(r) ? o : r);
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
      Fe(r.props, "onClick", c, r.props), !(d && d !== c.target && Io(d, c)) && Fe(r.props, "onClickOutside", c, r.props);
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
    var o = this.props, s = o.active, u = o.children, c = o.className, d = o.content, p = o.disabled, h = o.inverted, m = o.page, g = o.simple, y = o.verticalAlign, b = Ze("ui", V(s, "active transition visible"), V(p, "disabled"), V(h, "inverted"), V(m, "page"), V(g, "simple"), Jo(y), "dimmer", c), _ = Ge(t, this.props), w = Qe(t, this.props), k = pt(u) ? d : u;
    return /* @__PURE__ */ ee.createElement(ur, {
      innerRef: this.containerRef
    }, /* @__PURE__ */ ee.createElement(w, pe({}, _, {
      className: b,
      onClick: this.handleClick
    }), k && /* @__PURE__ */ ee.createElement("div", {
      className: "content",
      ref: this.contentRef
    }, k)));
  }, t;
}(Qn);
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
    var o = this.props, s = o.active, u = o.page, c = Ge(t, this.props);
    return u ? /* @__PURE__ */ ee.createElement(ea, {
      closeOnEscape: !1,
      closeOnDocumentClick: !1,
      onMount: this.handlePortalMount,
      onUnmount: this.handlePortalUnmount,
      open: s,
      openOnTriggerClick: !1
    }, /* @__PURE__ */ ee.createElement(Ul, pe({}, c, {
      active: s,
      page: u
    }))) : /* @__PURE__ */ ee.createElement(Ul, pe({}, c, {
      active: s,
      page: u
    }));
  }, t;
}(Qn);
Mo.handledProps = ["active", "page"];
Mo.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An active dimmer will dim its parent container. */
  active: l.bool,
  /** A dimmer can be formatted to be fixed to the page. */
  page: l.bool
} : {};
Mo.Dimmable = zl;
Mo.Inner = Ul;
Mo.create = Kt(Mo, function(e) {
  return {
    content: e
  };
});
function Hl(e) {
  var t = e.children, n = e.className, r = e.content, o = e.size, s = Ze("ui", o, n, "images"), u = Ge(Hl, e), c = Qe(Hl, e);
  return /* @__PURE__ */ ee.createElement(c, pe({}, u, {
    className: s
  }), pt(t) ? r : t);
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
  size: l.oneOf(fr)
} : {};
function xr(e) {
  var t = e.avatar, n = e.bordered, r = e.centered, o = e.children, s = e.circular, u = e.className, c = e.content, d = e.dimmer, p = e.disabled, h = e.floated, m = e.fluid, g = e.hidden, y = e.href, b = e.inline, _ = e.label, w = e.rounded, k = e.size, F = e.spaced, E = e.verticalAlign, I = e.wrapped, T = e.ui, P = Ze(V(T, "ui"), k, V(t, "avatar"), V(n, "bordered"), V(s, "circular"), V(r, "centered"), V(p, "disabled"), V(m, "fluid"), V(g, "hidden"), V(b, "inline"), V(w, "rounded"), rn(F, "spaced"), Zn(h, "floated"), Jo(E), "image", u), C = Ge(xr, e), S = wm(C, {
    htmlProps: iL
  }), A = S[0], B = S[1], U = Qe(xr, e, function() {
    if (!Tt(d) || !Tt(_) || !Tt(I) || !pt(o))
      return "div";
  });
  return pt(o) ? pt(c) ? U === "img" ? /* @__PURE__ */ ee.createElement(U, pe({}, B, A, {
    className: P
  })) : /* @__PURE__ */ ee.createElement(U, pe({}, B, {
    className: P,
    href: y
  }), Mo.create(d, {
    autoGenerateKey: !1
  }), dr.create(_, {
    autoGenerateKey: !1
  }), /* @__PURE__ */ ee.createElement("img", A)) : /* @__PURE__ */ ee.createElement(U, pe({}, C, {
    className: P
  }), c) : /* @__PURE__ */ ee.createElement(U, pe({}, C, {
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
  fluid: Mt([l.bool, Vt(["size"])]),
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
  size: l.oneOf(fr),
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
xr.create = Kt(xr, function(e) {
  return {
    src: e
  };
});
function Do(e) {
  var t = e.children, n = e.className, r = e.content, o = Ze("detail", n), s = Ge(Do, e), u = Qe(Do, e);
  return /* @__PURE__ */ ee.createElement(u, pe({}, s, {
    className: o
  }), pt(t) ? r : t);
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
Do.create = Kt(Do, function(e) {
  return {
    content: e
  };
});
function Yl(e) {
  var t = e.children, n = e.circular, r = e.className, o = e.color, s = e.content, u = e.size, c = e.tag, d = Ze("ui", o, u, V(n, "circular"), V(c, "tag"), "labels", r), p = Ge(Yl, e), h = Qe(Yl, e);
  return /* @__PURE__ */ ee.createElement(h, pe({}, p, {
    className: d
  }), pt(t) ? s : t);
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
  size: l.oneOf(fr),
  /** Label group can share tag formatting. */
  tag: l.bool
} : {};
var dr = /* @__PURE__ */ function(e) {
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
          Fe(c, "onClick", p), Fe(r.props, "onRemove", p, r.props);
        }
      };
    }, r;
  }
  var n = t.prototype;
  return n.render = function() {
    var o = this.props, s = o.active, u = o.attached, c = o.basic, d = o.children, p = o.circular, h = o.className, m = o.color, g = o.content, y = o.corner, b = o.detail, _ = o.empty, w = o.floating, k = o.horizontal, F = o.icon, E = o.image, I = o.onRemove, T = o.pointing, P = o.prompt, C = o.removeIcon, S = o.ribbon, A = o.size, B = o.tag, U = T === !0 && "pointing" || (T === "left" || T === "right") && T + " pointing" || (T === "above" || T === "below") && "pointing " + T, re = Ze("ui", m, U, A, V(s, "active"), V(c, "basic"), V(p, "circular"), V(_, "empty"), V(w, "floating"), V(k, "horizontal"), V(E === !0, "image"), V(P, "prompt"), V(B, "tag"), rn(y, "corner"), rn(S, "ribbon"), Zn(u, "attached"), "label", h), G = Ge(t, this.props), ae = Qe(t, this.props);
    if (!pt(d))
      return /* @__PURE__ */ ee.createElement(ae, pe({}, G, {
        className: re,
        onClick: this.handleClick
      }), d);
    var he = fs(C) ? "delete" : C;
    return /* @__PURE__ */ ee.createElement(ae, pe({
      className: re,
      onClick: this.handleClick
    }, G), je.create(F, {
      autoGenerateKey: !1
    }), typeof E != "boolean" && xr.create(E, {
      autoGenerateKey: !1
    }), g, Do.create(b, {
      autoGenerateKey: !1
    }), I && je.create(he, {
      autoGenerateKey: !1,
      overrideProps: this.handleIconOverrides
    }));
  }, t;
}(Qn);
dr.handledProps = ["active", "as", "attached", "basic", "children", "circular", "className", "color", "content", "corner", "detail", "empty", "floating", "horizontal", "icon", "image", "onClick", "onRemove", "pointing", "prompt", "removeIcon", "ribbon", "size", "tag"];
dr.propTypes = process.env.NODE_ENV !== "production" ? {
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
  size: l.oneOf(fr),
  /** A label can appear as a tag. */
  tag: l.bool
} : {};
dr.Detail = Do;
dr.Group = Yl;
dr.create = Kt(dr, function(e) {
  return {
    content: e
  };
});
function Vl(e) {
  var t = e.children, n = e.className, r = e.content, o = e.hidden, s = e.visible, u = Ze(V(s, "visible"), V(o, "hidden"), "content", n), c = Ge(Vl, e), d = Qe(Vl, e);
  return /* @__PURE__ */ ee.createElement(d, pe({}, c, {
    className: u
  }), pt(t) ? r : t);
}
Vl.handledProps = ["as", "children", "className", "content", "hidden", "visible"];
Vl.propTypes = process.env.NODE_ENV !== "production" ? {
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
function ql(e) {
  var t = e.attached, n = e.basic, r = e.buttons, o = e.children, s = e.className, u = e.color, c = e.compact, d = e.content, p = e.floated, h = e.fluid, m = e.icon, g = e.inverted, y = e.labeled, b = e.negative, _ = e.positive, w = e.primary, k = e.secondary, F = e.size, E = e.toggle, I = e.vertical, T = e.widths, P = Ze("ui", u, F, V(n, "basic"), V(c, "compact"), V(h, "fluid"), V(m, "icon"), V(g, "inverted"), V(y, "labeled"), V(b, "negative"), V(_, "positive"), V(w, "primary"), V(k, "secondary"), V(E, "toggle"), V(I, "vertical"), rn(t, "attached"), Zn(p, "floated"), Gn(T), "buttons", s), C = Ge(ql, e), S = Qe(ql, e);
  return Tt(r) ? /* @__PURE__ */ ee.createElement(S, pe({}, C, {
    className: P
  }), pt(o) ? d : o) : /* @__PURE__ */ ee.createElement(S, pe({}, C, {
    className: P
  }), Cn(r, function(A) {
    return ht.create(A);
  }));
}
ql.handledProps = ["as", "attached", "basic", "buttons", "children", "className", "color", "compact", "content", "floated", "fluid", "icon", "inverted", "labeled", "negative", "positive", "primary", "secondary", "size", "toggle", "vertical", "widths"];
ql.propTypes = process.env.NODE_ENV !== "production" ? {
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
  size: l.oneOf(fr),
  /** Groups can be formatted to toggle on and off. */
  toggle: l.bool,
  /** Groups can be formatted to appear vertically. */
  vertical: l.bool,
  /** Groups can have their widths divided evenly. */
  widths: l.oneOf(sr)
} : {};
function Gl(e) {
  var t = e.className, n = e.text, r = Ze("or", t), o = Ge(Gl, e), s = Qe(Gl, e);
  return /* @__PURE__ */ ee.createElement(s, pe({}, o, {
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
var ht = /* @__PURE__ */ function(e) {
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
      return Fe(r.ref.current, "focus", c);
    }, r.handleClick = function(c) {
      var d = r.props.disabled;
      if (d) {
        c.preventDefault();
        return;
      }
      Fe(r.props, "onClick", c, r.props);
    }, r.hasIconClass = function() {
      var c = r.props, d = c.labelPosition, p = c.children, h = c.content, m = c.icon;
      return m === !0 ? !0 : m && (d || pt(p) && Tt(h));
    }, r;
  }
  var n = t.prototype;
  return n.computeButtonAriaRole = function(o) {
    var s = this.props.role;
    if (!Tt(s)) return s;
    if (o !== "button") return "button";
  }, n.render = function() {
    var o = this.props, s = o.active, u = o.animated, c = o.attached, d = o.basic, p = o.children, h = o.circular, m = o.className, g = o.color, y = o.compact, b = o.content, _ = o.disabled, w = o.floated, k = o.fluid, F = o.icon, E = o.inverted, I = o.label, T = o.labelPosition, P = o.loading, C = o.negative, S = o.positive, A = o.primary, B = o.secondary, U = o.size, re = o.toggle, G = o.type, ae = Ze(g, U, V(s, "active"), V(d, "basic"), V(h, "circular"), V(y, "compact"), V(k, "fluid"), V(this.hasIconClass(), "icon"), V(E, "inverted"), V(P, "loading"), V(C, "negative"), V(S, "positive"), V(A, "primary"), V(B, "secondary"), V(re, "toggle"), rn(u, "animated"), rn(c, "attached")), he = Ze(rn(T || !!I, "labeled")), ye = Ze(V(_, "disabled"), Zn(w, "floated")), ke = Ge(t, this.props), se = Qe(t, this.props, this.computeElementType), me = this.computeTabIndex(se);
    if (!Tt(I)) {
      var X = Ze("ui", ae, "button", m), te = Ze("ui", he, "button", m, ye), oe = dr.create(I, {
        defaultProps: {
          basic: !0,
          pointing: T === "left" ? "right" : "left"
        },
        autoGenerateKey: !1
      });
      return /* @__PURE__ */ ee.createElement(se, pe({}, ke, {
        className: te,
        onClick: this.handleClick
      }), T === "left" && oe, /* @__PURE__ */ ee.createElement(ur, {
        innerRef: this.ref
      }, /* @__PURE__ */ ee.createElement("button", {
        className: X,
        "aria-pressed": re ? !!s : void 0,
        disabled: _,
        type: G,
        tabIndex: me
      }, je.create(F, {
        autoGenerateKey: !1
      }), " ", b)), (T === "right" || !T) && oe);
    }
    var _e = Ze("ui", ae, ye, he, "button", m), Se = !pt(p), ve = this.computeButtonAriaRole(se);
    return /* @__PURE__ */ ee.createElement(ur, {
      innerRef: this.ref
    }, /* @__PURE__ */ ee.createElement(se, pe({}, ke, {
      className: _e,
      "aria-pressed": re ? !!s : void 0,
      disabled: _ && se === "button" || void 0,
      onClick: this.handleClick,
      role: ve,
      type: G,
      tabIndex: me
    }), Se && p, !Se && je.create(F, {
      autoGenerateKey: !1
    }), !Se && b));
  }, t;
}(Qn);
ht.handledProps = ["active", "animated", "as", "attached", "basic", "children", "circular", "className", "color", "compact", "content", "disabled", "floated", "fluid", "icon", "inverted", "label", "labelPosition", "loading", "negative", "onClick", "positive", "primary", "role", "secondary", "size", "tabIndex", "toggle", "type"];
ht.propTypes = process.env.NODE_ENV !== "production" ? {
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
  children: Mt([l.node, Vt(["label"]), D1({
    icon: l.oneOfType([l.string.isRequired, l.object.isRequired, l.element.isRequired])
  }, Vt(["icon"]))]),
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
  size: l.oneOf(fr),
  /** A button can receive focus. */
  tabIndex: l.oneOfType([l.number, l.string]),
  /** A button can be formatted to toggle on and off. */
  toggle: l.bool,
  /** The type of the HTML element. */
  type: l.oneOf(["button", "submit", "reset"])
} : {};
ht.defaultProps = {
  as: "button"
};
ht.Content = Vl;
ht.Group = ql;
ht.Or = Gl;
ht.create = Kt(ht, function(e) {
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
function xF(e, t, n, r, o) {
  return o(e, function(s, u, c) {
    n = r ? (r = !1, s) : t(n, s, u, c);
  }), n;
}
function xm(e, t, n) {
  var r = yn(e) ? Y1 : xF, o = arguments.length < 3;
  return r(e, Qo(t), n, o, zs);
}
var EF = function(t, n, r, o) {
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
const Il = /* @__PURE__ */ hc(EF);
var ws = /* @__PURE__ */ function(e) {
  en(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handleButtonOverrides = function(c) {
      return {
        onClick: function(p, h) {
          Fe(c, "onClick", p, h), Fe(r.props, "onActionClick", p, h);
        }
      };
    }, r;
  }
  var n = t.prototype;
  return n.render = function() {
    var o = this, s = this.props, u = s.actions, c = s.children, d = s.className, p = s.content, h = Ze("actions", d), m = Ge(t, this.props), g = Qe(t, this.props);
    return pt(c) ? pt(p) ? /* @__PURE__ */ ee.createElement(g, pe({}, m, {
      className: h
    }), Cn(u, function(y) {
      return ht.create(y, {
        overrideProps: o.handleButtonOverrides
      });
    })) : /* @__PURE__ */ ee.createElement(g, pe({}, m, {
      className: h
    }), p) : /* @__PURE__ */ ee.createElement(g, pe({}, m, {
      className: h
    }), c);
  }, t;
}(Qn);
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
  onActionClick: Mt([Vt(["children"]), l.func])
} : {};
ws.create = Kt(ws, function(e) {
  return {
    actions: e
  };
});
function Lo(e) {
  var t = e.children, n = e.className, r = e.content, o = e.image, s = e.scrolling, u = Ze(n, V(o, "image"), V(s, "scrolling"), "content"), c = Ge(Lo, e), d = Qe(Lo, e);
  return /* @__PURE__ */ ee.createElement(d, pe({}, c, {
    className: u
  }), pt(t) ? r : t);
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
Lo.create = Kt(Lo, function(e) {
  return {
    content: e
  };
});
function Kl(e) {
  var t = e.children, n = e.className, r = e.content, o = Ze("description", n), s = Ge(Kl, e), u = Qe(Kl, e);
  return /* @__PURE__ */ ee.createElement(u, pe({}, s, {
    className: o
  }), pt(t) ? r : t);
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
  var t = e.blurring, n = e.children, r = e.className, o = e.centered, s = e.content, u = e.inverted, c = e.mountNode, d = e.scrolling, p = ee.useRef(), h = Ze("ui", V(u, "inverted"), V(!o, "top aligned"), "page modals dimmer transition visible active", r), m = Ze("dimmable dimmed", V(t, "blurring"), V(d, "scrolling")), g = Ge(Fo, e), y = Qe(Fo, e);
  return gF(c, m), ee.useEffect(function() {
    p.current && p.current.style && p.current.style.setProperty("display", "flex", "important");
  }, []), /* @__PURE__ */ ee.createElement(ur, {
    innerRef: p
  }, /* @__PURE__ */ ee.createElement(y, pe({}, g, {
    className: h
  }), pt(n) ? s : n));
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
Fo.create = Kt(Fo, function(e) {
  return {
    content: e
  };
});
function $o(e) {
  var t = e.children, n = e.className, r = e.content, o = Ze("header", n), s = Ge($o, e), u = Qe($o, e);
  return /* @__PURE__ */ ee.createElement(u, pe({}, s, {
    className: o
  }), pt(t) ? r : t);
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
$o.create = Kt($o, function(e) {
  return {
    content: e
  };
});
var e0 = 0, CF = 50, OF = function(t) {
  var n = t.height + e0, r = t.height + e0, o = window.innerHeight, s = o / 2, u = -(r / 2), c = CF, d = s + u;
  return d + n + c < o;
}, SF = function(t, n, r) {
  var o = n && t ? -(r.height / 2) : 0, s = -(r.width / 2);
  return {
    marginLeft: s,
    marginTop: o
  };
}, TF = function() {
  return !window.ActiveXObject && "ActiveXObject" in window;
}, un = /* @__PURE__ */ function(e) {
  en(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.legacy = xi() && TF(), r.ref = /* @__PURE__ */ wr(), r.dimmerRef = /* @__PURE__ */ wr(), r.latestDocumentMouseDownEvent = null, r.getMountNode = function() {
      return xi() ? r.props.mountNode || document.body : null;
    }, r.handleActionsOverrides = function(c) {
      return {
        onActionClick: function(p, h) {
          Fe(c, "onActionClick", p, h), Fe(r.props, "onActionClick", p, r.props), r.handleClose(p);
        }
      };
    }, r.handleClose = function(c) {
      r.setState({
        open: !1
      }), Fe(r.props, "onClose", c, pe({}, r.props, {
        open: !1
      }));
    }, r.handleDocumentMouseDown = function(c) {
      r.latestDocumentMouseDownEvent = c;
    }, r.handleDocumentClick = function(c) {
      var d = r.props.closeOnDimmerClick, p = r.latestDocumentMouseDownEvent;
      r.latestDocumentMouseDownEvent = null, !(!d || Io(r.ref.current, p) || Io(r.ref.current, c)) && (r.setState({
        open: !1
      }), Fe(r.props, "onClose", c, pe({}, r.props, {
        open: !1
      })));
    }, r.handleIconOverrides = function(c) {
      return {
        onClick: function(p) {
          Fe(c, "onClick", p), r.handleClose(p);
        }
      };
    }, r.handleOpen = function(c) {
      Fe(r.props, "onOpen", c, pe({}, r.props, {
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
      }), Fe(r.props, "onMount", c, r.props);
    }, r.handlePortalUnmount = function(c) {
      var d = r.props.eventPool;
      cancelAnimationFrame(r.animationRequestId), Sl.unsub("mousedown", r.handleDocumentMouseDown, {
        pool: d,
        target: r.dimmerRef.current
      }), Sl.unsub("click", r.handleDocumentClick, {
        pool: d,
        target: r.dimmerRef.current
      }), Fe(r.props, "onUnmount", c, r.props);
    }, r.setPositionAndClassNames = function() {
      var c = r.props.centered, d, p = {};
      if (r.ref.current) {
        var h = r.ref.current.getBoundingClientRect(), m = OF(h);
        d = !m;
        var g = r.legacy ? SF(m, c, h) : {};
        Il(r.state.legacyStyles, g) || (p.legacyStyles = g), r.state.scrolling !== d && (p.scrolling = d);
      }
      yi(p) || r.setState(p), r.animationRequestId = requestAnimationFrame(r.setPositionAndClassNames);
    }, r.renderContent = function(c) {
      var d = r.props, p = d.actions, h = d.basic, m = d.children, g = d.className, y = d.closeIcon, b = d.content, _ = d.header, w = d.size, k = d.style, F = r.state, E = F.legacyStyles, I = F.scrolling, T = Ze("ui", w, V(h, "basic"), V(r.legacy, "legacy"), V(I, "scrolling"), "modal transition visible active", g), P = Qe(t, r.props), C = y === !0 ? "close" : y, S = je.create(C, {
        overrideProps: r.handleIconOverrides
      });
      return /* @__PURE__ */ ee.createElement(ur, {
        innerRef: r.ref
      }, /* @__PURE__ */ ee.createElement(P, pe({}, c, {
        className: T,
        style: pe({}, E, k)
      }), S, pt(m) ? /* @__PURE__ */ ee.createElement(ee.Fragment, null, $o.create(_, {
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
      return /* @__PURE__ */ zI(p) ? p : null;
    var b = Ge(t, this.props), _ = ea.handledProps, w = xm(b, function(F, E, I) {
      return _a(_, I) || (F[I] = E), F;
    }, {}), k = Td(b, _);
    return /* @__PURE__ */ ee.createElement(ea, pe({
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
    }), /* @__PURE__ */ ee.createElement(ur, {
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
  var t = e.children, n = e.className, r = e.content, o = Ze("header", n), s = Ge(Zl, e), u = Qe(Zl, e);
  return /* @__PURE__ */ ee.createElement(u, pe({}, s, {
    className: o
  }), pt(t) ? r : t);
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
function PF(e) {
  return function(t) {
    return e == null ? void 0 : e[t];
  };
}
var kF = {
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
}, NF = PF(kF), IF = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, AF = "\\u0300-\\u036f", RF = "\\ufe20-\\ufe2f", MF = "\\u20d0-\\u20ff", DF = AF + RF + MF, LF = "[" + DF + "]", FF = RegExp(LF, "g");
function bh(e) {
  return e = Bi(e), e && e.replace(IF, NF).replace(FF, "");
}
var $F = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function BF(e) {
  return e.match($F) || [];
}
var jF = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function WF(e) {
  return jF.test(e);
}
var V1 = "\\ud800-\\udfff", zF = "\\u0300-\\u036f", UF = "\\ufe20-\\ufe2f", HF = "\\u20d0-\\u20ff", YF = zF + UF + HF, q1 = "\\u2700-\\u27bf", G1 = "a-z\\xdf-\\xf6\\xf8-\\xff", VF = "\\xac\\xb1\\xd7\\xf7", qF = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", GF = "\\u2000-\\u206f", KF = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", K1 = "A-Z\\xc0-\\xd6\\xd8-\\xde", ZF = "\\ufe0e\\ufe0f", Z1 = VF + qF + GF + KF, X1 = "['’]", t0 = "[" + Z1 + "]", XF = "[" + YF + "]", Q1 = "\\d+", QF = "[" + q1 + "]", J1 = "[" + G1 + "]", ew = "[^" + V1 + Z1 + Q1 + q1 + G1 + K1 + "]", JF = "\\ud83c[\\udffb-\\udfff]", e3 = "(?:" + XF + "|" + JF + ")", t3 = "[^" + V1 + "]", tw = "(?:\\ud83c[\\udde6-\\uddff]){2}", nw = "[\\ud800-\\udbff][\\udc00-\\udfff]", ss = "[" + K1 + "]", n3 = "\\u200d", n0 = "(?:" + J1 + "|" + ew + ")", r3 = "(?:" + ss + "|" + ew + ")", r0 = "(?:" + X1 + "(?:d|ll|m|re|s|t|ve))?", a0 = "(?:" + X1 + "(?:D|LL|M|RE|S|T|VE))?", rw = e3 + "?", aw = "[" + ZF + "]?", a3 = "(?:" + n3 + "(?:" + [t3, tw, nw].join("|") + ")" + aw + rw + ")*", o3 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", i3 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", s3 = aw + rw + a3, l3 = "(?:" + [QF, tw, nw].join("|") + ")" + s3, c3 = RegExp([
  ss + "?" + J1 + "+" + r0 + "(?=" + [t0, ss, "$"].join("|") + ")",
  r3 + "+" + a0 + "(?=" + [t0, ss + n0, "$"].join("|") + ")",
  ss + "?" + n0 + "+" + r0,
  ss + "+" + a0,
  i3,
  o3,
  Q1,
  l3
].join("|"), "g");
function u3(e) {
  return e.match(c3) || [];
}
function d3(e, t, n) {
  return e = Bi(e), t = t, t === void 0 ? WF(e) ? u3(e) : BF(e) : e.match(t) || [];
}
var f3 = "['’]", p3 = RegExp(f3, "g");
function h3(e) {
  return function(t) {
    return Y1(d3(bh(t).replace(p3, "")), e, "");
  };
}
function m3(e) {
  return function(t) {
    t = Bi(t);
    var n = vm(t) ? hh(t) : void 0, r = n ? n[0] : t.charAt(0), o = n ? C1(n, 1).join("") : t.slice(1);
    return r[e]() + o;
  };
}
var g3 = m3("toUpperCase"), v3 = h3(function(e, t, n) {
  return e + (n ? " " : "") + g3(t);
}), Pi = /* @__PURE__ */ function(e) {
  en(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handleClick = function(c) {
      var d = r.props.disabled;
      d || Fe(r.props, "onClick", c, r.props);
    }, r;
  }
  var n = t.prototype;
  return n.render = function() {
    var o = this.props, s = o.active, u = o.children, c = o.className, d = o.color, p = o.content, h = o.disabled, m = o.fitted, g = o.header, y = o.icon, b = o.link, _ = o.name, w = o.onClick, k = o.position, F = Ze(d, k, V(s, "active"), V(h, "disabled"), V(y === !0 || y && !(_ || p), "icon"), V(g, "header"), V(b, "link"), rn(m, "fitted"), "item", c), E = Qe(t, this.props, function() {
      if (w) return "a";
    }), I = Ge(t, this.props);
    return pt(u) ? /* @__PURE__ */ ee.createElement(E, pe({}, I, {
      className: F,
      onClick: this.handleClick
    }), je.create(y, {
      autoGenerateKey: !1
    }), pt(p) ? v3(_) : p) : /* @__PURE__ */ ee.createElement(E, pe({}, I, {
      className: F,
      onClick: this.handleClick
    }), u);
  }, t;
}(Qn);
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
Pi.create = Kt(Pi, function(e) {
  return {
    content: e,
    name: e
  };
});
function Xl(e) {
  var t = e.children, n = e.className, r = e.content, o = e.position, s = Ze(o, "menu", n), u = Ge(Xl, e), c = Qe(Xl, e);
  return /* @__PURE__ */ ee.createElement(c, pe({}, u, {
    className: s
  }), pt(t) ? r : t);
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
var An = /* @__PURE__ */ function(e) {
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
          }), Fe(c, "onClick", p, h), Fe(r.props, "onItemClick", p, h);
        }
      };
    }, r;
  }
  var n = t.prototype;
  return n.renderItems = function() {
    var o = this, s = this.props.items, u = this.state.activeIndex;
    return Cn(s, function(c, d) {
      return Pi.create(c, {
        defaultProps: {
          active: parseInt(u, 10) === d,
          index: d
        },
        overrideProps: o.handleItemOverrides
      });
    });
  }, n.render = function() {
    var o = this.props, s = o.attached, u = o.borderless, c = o.children, d = o.className, p = o.color, h = o.compact, m = o.fixed, g = o.floated, y = o.fluid, b = o.icon, _ = o.inverted, w = o.pagination, k = o.pointing, F = o.secondary, E = o.size, I = o.stackable, T = o.tabular, P = o.text, C = o.vertical, S = o.widths, A = Ze("ui", p, E, V(u, "borderless"), V(h, "compact"), V(y, "fluid"), V(_, "inverted"), V(w, "pagination"), V(k, "pointing"), V(F, "secondary"), V(I, "stackable"), V(P, "text"), V(C, "vertical"), rn(s, "attached"), rn(g, "floated"), rn(b, "icon"), rn(T, "tabular"), Zn(m, "fixed"), Gn(S, "item"), d, "menu"), B = Ge(t, this.props), U = Qe(t, this.props);
    return /* @__PURE__ */ ee.createElement(U, pe({}, B, {
      className: A
    }), pt(c) ? this.renderItems() : c);
  }, t;
}(Us);
An.handledProps = ["activeIndex", "as", "attached", "borderless", "children", "className", "color", "compact", "defaultActiveIndex", "fixed", "floated", "fluid", "icon", "inverted", "items", "onItemClick", "pagination", "pointing", "secondary", "size", "stackable", "tabular", "text", "vertical", "widths"];
An.propTypes = process.env.NODE_ENV !== "production" ? {
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
  onItemClick: Mt([Vt(["children"]), l.func]),
  /** A pagination menu is specially formatted to present links to pages of content. */
  pagination: l.bool,
  /** A menu can point to show its relationship to nearby content. */
  pointing: l.bool,
  /** A menu can adjust its appearance to de-emphasize its contents. */
  secondary: l.bool,
  /** A menu can vary in size. */
  size: l.oneOf(ta(fr, "medium", "big")),
  /** A menu can stack at mobile resolutions. */
  stackable: l.bool,
  /** A menu can be formatted to show tabs of information. */
  tabular: l.oneOfType([l.bool, l.oneOf(["right"])]),
  /** A menu can be formatted for text content. */
  text: l.bool,
  /** A vertical menu displays elements vertically. */
  vertical: l.bool,
  /** A menu can have its items divided evenly. */
  widths: l.oneOf(sr)
} : {};
An.autoControlledProps = ["activeIndex"];
An.Header = Zl;
An.Item = Pi;
An.Menu = Xl;
An.create = Kt(An, function(e) {
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
      Fe(r.props, "onClick", c, r.props);
    }, r.handleKeyDown = function(c) {
      Fe(r.props, "onKeyDown", c, r.props), bn.getCode(c) === bn.Enter && Fe(r.props, "onClick", c, r.props);
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
}(Qn);
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
xs.create = Kt(xs, function(e) {
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
      }), Fe(r.props, "onPageChange", c, pe({}, r.props, {
        activePage: p
      })));
    }, r.handleItemOverrides = function(c, d, p) {
      return function(h) {
        return {
          active: c,
          type: d,
          key: d + "-" + p,
          onClick: function(g, y) {
            Fe(h, "onClick", g, y), y.type !== "ellipsisItem" && r.handleItemClick(g, y);
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
    var o = this, s = this.props, u = s["aria-label"], c = s.boundaryRange, d = s.disabled, p = s.ellipsisItem, h = s.siblingRange, m = s.totalPages, g = this.state.activePage, y = PL({
      activePage: g,
      boundaryRange: c,
      hideEllipsis: Tt(p),
      siblingRange: h,
      totalPages: m
    }), b = Ge(t, this.props);
    return /* @__PURE__ */ ee.createElement(An, pe({}, b, {
      "aria-label": u,
      pagination: !0,
      role: "navigation"
    }), Cn(y, function(_) {
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
function y3(e, t, n) {
  return e == null ? e : I1(e, t, n);
}
var Xn = /* @__PURE__ */ function(e) {
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
      var d = r.props.id, p = r.state, h = p.checked, m = p.indeterminate, g = Fe(r.inputRef.current, "contains", c.target), y = Fe(r.labelRef.current, "contains", c.target), b = !y && !g, _ = !Tt(d), w = y && _;
      w || Fe(r.props, "onClick", c, pe({}, r.props, {
        checked: !h,
        indeterminate: !!m
      })), r.isClickFromMouse && (r.isClickFromMouse = !1, y && !_ && r.handleChange(c), b && r.handleChange(c), y && _ && c.stopPropagation());
    }, r.handleChange = function(c) {
      var d = r.state.checked;
      r.canToggle() && (Fe(r.props, "onChange", c, pe({}, r.props, {
        checked: !d,
        indeterminate: !1
      })), r.setState({
        checked: !d,
        indeterminate: !1
      }));
    }, r.handleMouseDown = function(c) {
      var d = r.state, p = d.checked, h = d.indeterminate;
      Fe(r.props, "onMouseDown", c, pe({}, r.props, {
        checked: !!p,
        indeterminate: !!h
      })), c.defaultPrevented || Fe(r.inputRef.current, "focus"), c.preventDefault();
    }, r.handleMouseUp = function(c) {
      var d = r.state, p = d.checked, h = d.indeterminate;
      r.isClickFromMouse = !0, Fe(r.props, "onMouseUp", c, pe({}, r.props, {
        checked: !!p,
        indeterminate: !!h
      }));
    }, r.setIndeterminate = function() {
      var c = r.state.indeterminate;
      y3(r.inputRef, "current.indeterminate", !!c);
    }, r;
  }
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.setIndeterminate();
  }, n.componentDidUpdate = function() {
    this.setIndeterminate();
  }, n.render = function() {
    var o = this.props, s = o.className, u = o.disabled, c = o.label, d = o.id, p = o.name, h = o.radio, m = o.readOnly, g = o.slider, y = o.toggle, b = o.type, _ = o.value, w = this.state, k = w.checked, F = w.indeterminate, E = Ze(
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
    ), I = Ge(t, this.props), T = Qe(t, this.props), P = wm(I, {
      htmlProps: z1
    }), C = P[0], S = P[1], A = vh(c, {
      defaultProps: {
        htmlFor: d
      },
      autoGenerateKey: !1
    }) || /* @__PURE__ */ ee.createElement("label", {
      htmlFor: d
    });
    return /* @__PURE__ */ ee.createElement(T, pe({}, S, {
      className: E,
      onClick: this.handleClick,
      onChange: this.handleChange,
      onMouseDown: this.handleMouseDown,
      onMouseUp: this.handleMouseUp
    }), /* @__PURE__ */ ee.createElement(ur, {
      innerRef: this.inputRef
    }, /* @__PURE__ */ ee.createElement("input", pe({}, C, {
      checked: k,
      className: "hidden",
      disabled: u,
      id: d,
      name: p,
      readOnly: !0,
      tabIndex: this.computeTabIndex(),
      type: b,
      value: _
    }))), /* @__PURE__ */ ee.createElement(ur, {
      innerRef: this.labelRef
    }, A));
  }, t;
}(Us);
Xn.handledProps = ["as", "checked", "className", "defaultChecked", "defaultIndeterminate", "disabled", "fitted", "id", "indeterminate", "label", "name", "onChange", "onClick", "onMouseDown", "onMouseUp", "radio", "readOnly", "slider", "tabIndex", "toggle", "type", "value"];
Xn.propTypes = process.env.NODE_ENV !== "production" ? {
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
  radio: Mt([l.bool, Vt(["slider", "toggle"])]),
  /** A checkbox can be read-only and unable to change states. */
  readOnly: l.bool,
  /** Format to emphasize the current selection state. */
  slider: Mt([l.bool, Vt(["radio", "toggle"])]),
  /** A checkbox can receive focus. */
  tabIndex: l.oneOfType([l.number, l.string]),
  /** Format to show an on or off choice. */
  toggle: Mt([l.bool, Vt(["radio", "slider"])]),
  /** HTML input type, either checkbox or radio. */
  type: l.oneOf(["checkbox", "radio"]),
  /** The HTML input value. */
  value: l.oneOfType([l.string, l.number])
} : {};
Xn.defaultProps = {
  type: "checkbox"
};
Xn.autoControlledProps = ["checked", "indeterminate"];
function Bo(e) {
  var t = e.slider, n = e.toggle, r = e.type, o = Ge(Bo, e), s = !(t || n) || void 0;
  return /* @__PURE__ */ ee.createElement(Xn, pe({}, o, {
    type: r,
    radio: s,
    slider: t,
    toggle: n
  }));
}
Bo.handledProps = ["slider", "toggle", "type"];
Bo.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Format to emphasize the current selection state. */
  slider: Xn.propTypes.slider,
  /** Format to show an on or off choice. */
  toggle: Xn.propTypes.toggle,
  /** HTML input type, either checkbox or radio. */
  type: Xn.propTypes.type
} : {};
Bo.defaultProps = {
  type: "radio"
};
function b3(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = 0, o = []; ++t < n; ) {
    var s = e[t];
    s && (o[r++] = s);
  }
  return o;
}
function _3(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (!t(e[n], n, e))
      return !1;
  return !0;
}
function w3(e, t) {
  var n = !0;
  return zs(e, function(r, o, s) {
    return n = !!t(r, o, s), n;
  }), n;
}
function x3(e, t, n) {
  var r = yn(e) ? _3 : w3;
  return r(e, Qo(t));
}
function E3(e, t, n) {
  var r = e == null ? 0 : e.length;
  return r ? (t = t === void 0 ? 1 : yc(t), t = r - t, Ed(e, 0, t < 0 ? 0 : t)) : [];
}
var C3 = b1("length"), ow = "\\ud800-\\udfff", O3 = "\\u0300-\\u036f", S3 = "\\ufe20-\\ufe2f", T3 = "\\u20d0-\\u20ff", P3 = O3 + S3 + T3, k3 = "\\ufe0e\\ufe0f", N3 = "[" + ow + "]", _h = "[" + P3 + "]", wh = "\\ud83c[\\udffb-\\udfff]", I3 = "(?:" + _h + "|" + wh + ")", iw = "[^" + ow + "]", sw = "(?:\\ud83c[\\udde6-\\uddff]){2}", lw = "[\\ud800-\\udbff][\\udc00-\\udfff]", A3 = "\\u200d", cw = I3 + "?", uw = "[" + k3 + "]?", R3 = "(?:" + A3 + "(?:" + [iw, sw, lw].join("|") + ")" + uw + cw + ")*", M3 = uw + cw + R3, D3 = "(?:" + [iw + _h + "?", _h, sw, lw, N3].join("|") + ")", o0 = RegExp(wh + "(?=" + wh + ")|" + D3 + M3, "g");
function L3(e) {
  for (var t = o0.lastIndex = 0; o0.test(e); )
    ++t;
  return t;
}
function F3(e) {
  return vm(e) ? L3(e) : C3(e);
}
var $3 = "[object Map]", B3 = "[object Set]";
function j3(e) {
  if (e == null)
    return 0;
  if (io(e))
    return _m(e) ? F3(e) : e.length;
  var t = ma(e);
  return t == $3 || t == B3 ? e.size : hm(e).length;
}
var i0 = Ws(function(e) {
  return B1(Sd(e, 1, Wl, !0));
}), W3 = ["ad", "andorra", "ae", "united arab emirates", "uae", "af", "afghanistan", "ag", "antigua", "ai", "anguilla", "al", "albania", "am", "armenia", "an", "netherlands antilles", "ao", "angola", "ar", "argentina", "as", "american samoa", "at", "austria", "au", "australia", "aw", "aruba", "ax", "aland islands", "az", "azerbaijan", "ba", "bosnia", "bb", "barbados", "bd", "bangladesh", "be", "belgium", "bf", "burkina faso", "bg", "bulgaria", "bh", "bahrain", "bi", "burundi", "bj", "benin", "bm", "bermuda", "bn", "brunei", "bo", "bolivia", "br", "brazil", "bs", "bahamas", "bt", "bhutan", "bv", "bouvet island", "bw", "botswana", "by", "belarus", "bz", "belize", "ca", "canada", "cc", "cocos islands", "cd", "congo", "cf", "central african republic", "cg", "congo brazzaville", "ch", "switzerland", "ci", "cote divoire", "ck", "cook islands", "cl", "chile", "cm", "cameroon", "cn", "china", "co", "colombia", "cr", "costa rica", "cs", "cu", "cuba", "cv", "cape verde", "cx", "christmas island", "cy", "cyprus", "cz", "czech republic", "de", "germany", "dj", "djibouti", "dk", "denmark", "dm", "dominica", "do", "dominican republic", "dz", "algeria", "ec", "ecuador", "england", "gb eng", "ee", "estonia", "eg", "egypt", "eh", "western sahara", "er", "eritrea", "es", "spain", "et", "ethiopia", "eu", "european union", "fi", "finland", "fj", "fiji", "fk", "falkland islands", "fm", "micronesia", "fo", "faroe islands", "fr", "france", "ga", "gabon", "gb", "uk", "united kingdom", "gd", "grenada", "ge", "georgia", "gf", "french guiana", "gh", "ghana", "gi", "gibraltar", "gl", "greenland", "gm", "gambia", "gn", "guinea", "gp", "guadeloupe", "gq", "equatorial guinea", "gr", "greece", "gs", "sandwich islands", "gt", "guatemala", "gu", "guam", "gw", "guinea-bissau", "gy", "guyana", "hk", "hong kong", "hm", "heard island", "hn", "honduras", "hr", "croatia", "ht", "haiti", "hu", "hungary", "id", "indonesia", "ie", "ireland", "il", "israel", "in", "india", "io", "indian ocean territory", "iq", "iraq", "ir", "iran", "is", "iceland", "it", "italy", "jm", "jamaica", "jo", "jordan", "jp", "japan", "ke", "kenya", "kg", "kyrgyzstan", "kh", "cambodia", "ki", "kiribati", "km", "comoros", "kn", "saint kitts and nevis", "kp", "north korea", "kr", "south korea", "kw", "kuwait", "ky", "cayman islands", "kz", "kazakhstan", "la", "laos", "lb", "lebanon", "lc", "saint lucia", "li", "liechtenstein", "lk", "sri lanka", "lr", "liberia", "ls", "lesotho", "lt", "lithuania", "lu", "luxembourg", "lv", "latvia", "ly", "libya", "ma", "morocco", "mc", "monaco", "md", "moldova", "me", "montenegro", "mg", "madagascar", "mh", "marshall islands", "mk", "macedonia", "ml", "mali", "mm", "myanmar", "burma", "mn", "mongolia", "mo", "macau", "mp", "northern mariana islands", "mq", "martinique", "mr", "mauritania", "ms", "montserrat", "mt", "malta", "mu", "mauritius", "mv", "maldives", "mw", "malawi", "mx", "mexico", "my", "malaysia", "mz", "mozambique", "na", "namibia", "nc", "new caledonia", "ne", "niger", "nf", "norfolk island", "ng", "nigeria", "ni", "nicaragua", "nl", "netherlands", "no", "norway", "np", "nepal", "nr", "nauru", "nu", "niue", "nz", "new zealand", "om", "oman", "pa", "panama", "pe", "peru", "pf", "french polynesia", "pg", "new guinea", "ph", "philippines", "pk", "pakistan", "pl", "poland", "pm", "saint pierre", "pn", "pitcairn islands", "pr", "puerto rico", "ps", "palestine", "pt", "portugal", "pw", "palau", "py", "paraguay", "qa", "qatar", "re", "reunion", "ro", "romania", "rs", "serbia", "ru", "russia", "rw", "rwanda", "sa", "saudi arabia", "sb", "solomon islands", "sc", "seychelles", "gb sct", "scotland", "sd", "sudan", "se", "sweden", "sg", "singapore", "sh", "saint helena", "si", "slovenia", "sj", "svalbard", "jan mayen", "sk", "slovakia", "sl", "sierra leone", "sm", "san marino", "sn", "senegal", "so", "somalia", "sr", "suriname", "st", "sao tome", "sv", "el salvador", "sy", "syria", "sz", "swaziland", "tc", "caicos islands", "td", "chad", "tf", "french territories", "tg", "togo", "th", "thailand", "tj", "tajikistan", "tk", "tokelau", "tl", "timorleste", "tm", "turkmenistan", "tn", "tunisia", "to", "tonga", "tr", "turkey", "tt", "trinidad", "tv", "tuvalu", "tw", "taiwan", "tz", "tanzania", "ua", "ukraine", "ug", "uganda", "um", "us minor islands", "us", "america", "united states", "uy", "uruguay", "uz", "uzbekistan", "va", "vatican city", "vc", "saint vincent", "ve", "venezuela", "vg", "british virgin islands", "vi", "us virgin islands", "vn", "vietnam", "vu", "vanuatu", "gb wls", "wales", "wf", "wallis and futuna", "ws", "samoa", "ye", "yemen", "yt", "mayotte", "za", "south africa", "zm", "zambia", "zw", "zimbabwe"], ki = /* @__PURE__ */ function(e) {
  en(t, e);
  function t() {
    return e.apply(this, arguments) || this;
  }
  var n = t.prototype;
  return n.render = function() {
    var o = this.props, s = o.className, u = o.name, c = Ze(u, "flag", s), d = Ge(t, this.props), p = Qe(t, this.props);
    return /* @__PURE__ */ ee.createElement(p, pe({}, d, {
      className: c
    }));
  }, t;
}(V_);
ki.handledProps = ["as", "className", "name"];
ki.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Additional classes. */
  className: l.string,
  /** Flag name, can use the two digit country code, the full name, or a common alias. */
  name: M1(W3)
} : {};
ki.defaultProps = {
  as: "i"
};
ki.create = Kt(ki, function(e) {
  return {
    name: e
  };
});
function Ql(e) {
  var t = e.className, n = Ze("divider", t), r = Ge(Ql, e), o = Qe(Ql, e);
  return /* @__PURE__ */ ee.createElement(o, pe({}, r, {
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
      Fe(r.props, "onClick", c, r.props);
    }, r;
  }
  var n = t.prototype;
  return n.render = function() {
    var o = this.props, s = o.active, u = o.children, c = o.className, d = o.content, p = o.disabled, h = o.description, m = o.flag, g = o.icon, y = o.image, b = o.label, _ = o.selected, w = o.text, k = Ze(V(s, "active"), V(p, "disabled"), V(_, "selected"), "item", c), F = Tt(g) ? HM(u, "DropdownMenu") && "dropdown" : g, E = Ge(t, this.props), I = Qe(t, this.props), T = {
      role: "option",
      "aria-disabled": p,
      "aria-checked": s,
      "aria-selected": _
    };
    if (!pt(u))
      return /* @__PURE__ */ ee.createElement(I, pe({}, E, T, {
        className: k,
        onClick: this.handleClick
      }), u);
    var P = ki.create(m, {
      autoGenerateKey: !1
    }), C = je.create(F, {
      autoGenerateKey: !1
    }), S = xr.create(y, {
      autoGenerateKey: !1
    }), A = dr.create(b, {
      autoGenerateKey: !1
    }), B = gh("span", function(re) {
      return {
        children: re
      };
    }, h, {
      defaultProps: {
        className: "description"
      },
      autoGenerateKey: !1
    }), U = gh("span", function(re) {
      return {
        children: re
      };
    }, pt(d) ? w : d, {
      defaultProps: {
        className: "text"
      },
      autoGenerateKey: !1
    });
    return /* @__PURE__ */ ee.createElement(I, pe({}, E, T, {
      className: k,
      onClick: this.handleClick
    }), S, C, P, A, B, U);
  }, t;
}(Qn);
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
Ni.create = Kt(Ni, function(e) {
  return e;
});
function jo(e) {
  var t = e.children, n = e.className, r = e.content, o = e.icon, s = Ze("header", n), u = Ge(jo, e), c = Qe(jo, e);
  return pt(t) ? /* @__PURE__ */ ee.createElement(c, pe({}, u, {
    className: s
  }), je.create(o, {
    autoGenerateKey: !1
  }), r) : /* @__PURE__ */ ee.createElement(c, pe({}, u, {
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
jo.create = Kt(jo, function(e) {
  return {
    content: e
  };
});
function Es(e) {
  var t = e.children, n = e.className, r = e.content, o = e.direction, s = e.open, u = e.scrolling, c = Ze(o, V(s, "visible"), V(u, "scrolling"), "menu transition", n), d = Ge(Es, e), p = Qe(Es, e);
  return /* @__PURE__ */ ee.createElement(p, pe({}, d, {
    className: c
  }), pt(t) ? r : t);
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
      Fe(r.props, "onChange", c, pe({}, r.props, {
        value: d
      }));
    }, r;
  }
  var n = t.prototype;
  return n.render = function() {
    var o = this.props, s = o.autoComplete, u = o.className, c = o.tabIndex, d = o.type, p = o.value, h = Ze("search", u), m = Ge(t, this.props);
    return /* @__PURE__ */ ee.createElement("input", pe({}, m, {
      "aria-autocomplete": "list",
      autoComplete: s,
      className: h,
      onChange: this.handleChange,
      tabIndex: c,
      type: d,
      value: p
    }));
  }, t;
}(Qn);
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
Ii.create = Kt(Ii, function(e) {
  return {
    type: e
  };
});
function Wo(e) {
  var t = e.children, n = e.className, r = e.content, o = Ze("divider", n), s = Ge(Wo, e), u = Qe(Wo, e);
  return /* @__PURE__ */ ee.createElement(u, pe({
    "aria-atomic": !0,
    "aria-live": "polite",
    role: "alert"
  }, s, {
    className: o
  }), pt(t) ? r : t);
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
Wo.create = Kt(Wo, function(e) {
  return {
    content: e
  };
});
var dw = /[\\^$.*+?()[\]{}|]/g, z3 = RegExp(dw.source);
function U3(e) {
  return e = Bi(e), e && z3.test(e) ? e.replace(dw, "\\$&") : e;
}
function cs(e) {
  var t = e.additionLabel, n = e.additionPosition, r = e.allowAdditions, o = e.deburr, s = e.multiple, u = e.options, c = e.search, d = e.searchQuery, p = e.value, h = u;
  if (s && (h = sh(h, function(_) {
    return !_a(p, _.value);
  })), c && d)
    if (bs(c))
      h = c(h, d);
    else {
      var m = o ? bh(d) : d, g = new RegExp(U3(m), "i");
      h = sh(h, function(_) {
        return g.test(o ? bh(_.text) : _.text);
      });
    }
  if (r && c && d && !Nl(h, {
    text: d
  })) {
    var y = /* @__PURE__ */ ee.isValidElement(t) ? /* @__PURE__ */ ee.cloneElement(t, {
      key: "addition-label"
    }) : t || "", b = {
      key: "addition",
      // by using an array, we can pass multiple elements, but when doing so
      // we must specify a `key` for React to know which one is which
      text: [y, /* @__PURE__ */ ee.createElement("b", {
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
    content: /* @__PURE__ */ ee.createElement(ee.Fragment, null, ki.create(t), xr.create(n), r)
  };
}
var Tn = /* @__PURE__ */ function(e) {
  en(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.searchRef = /* @__PURE__ */ wr(), r.sizerRef = /* @__PURE__ */ wr(), r.ref = /* @__PURE__ */ wr(), r.handleChange = function(c, d) {
      Fe(r.props, "onChange", c, pe({}, r.props, {
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
      }), r.handleChange(c, w), y["data-additional"] && Fe(r.props, "onAddItem", c, pe({}, r.props, {
        value: b
      }))), m;
    }, r.selectItemOnEnter = function(c) {
      var d = r.props.search, p = r.state, h = p.open, m = p.selectedIndex;
      if (h) {
        var g = bn.getCode(c) === bn.Enter || // https://github.com/Semantic-Org/Semantic-UI-React/pull/3766
        !d && bn.getCode(c) === bn.Spacebar;
        if (g) {
          c.preventDefault();
          var y = j3(cs({
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
            }), r.closeOnChange(c), r.clearSearchQuery(), d && Fe(r.searchRef.current, "focus");
          }
        }
      }
    }, r.removeItemOnBackspace = function(c) {
      var d = r.props, p = d.multiple, h = d.search, m = r.state, g = m.searchQuery, y = m.value;
      if (bn.getCode(c) === bn.Backspace && !(g || !h || !p || yi(y))) {
        c.preventDefault();
        var b = E3(y);
        r.setState({
          value: b
        }), r.handleChange(c, b);
      }
    }, r.closeOnDocumentClick = function(c) {
      r.props.closeOnBlur && (r.ref.current && Io(r.ref.current, c) || r.close());
    }, r.handleMouseDown = function(c) {
      r.isMouseDown = !0, Fe(r.props, "onMouseDown", c, r.props), document.addEventListener("mouseup", r.handleDocumentMouseUp);
    }, r.handleDocumentMouseUp = function() {
      r.isMouseDown = !1, document.removeEventListener("mouseup", r.handleDocumentMouseUp);
    }, r.handleClick = function(c) {
      var d = r.props, p = d.minCharacters, h = d.search, m = r.state, g = m.open, y = m.searchQuery;
      if (Fe(r.props, "onClick", c, r.props), c.stopPropagation(), !h) return r.toggle(c);
      if (g) {
        Fe(r.searchRef.current, "focus");
        return;
      }
      if (y.length >= p || p === 1) {
        r.open(c);
        return;
      }
      Fe(r.searchRef.current, "focus");
    }, r.handleIconClick = function(c) {
      var d = r.props.clearable, p = r.hasValue();
      Fe(r.props, "onClick", c, r.props), c.stopPropagation(), d && p ? r.clearValue(c) : r.toggle(c);
    }, r.handleItemClick = function(c, d) {
      var p = r.props, h = p.multiple, m = p.search, g = r.state.value, y = d.value;
      if (c.stopPropagation(), (h || d.disabled) && c.nativeEvent.stopImmediatePropagation(), !d.disabled) {
        var b = d["data-additional"], _ = h ? i0(r.state.value, [y]) : y, w = h ? !!dh(_, g).length : _ !== g;
        w && (r.setState({
          value: _
        }), r.handleChange(c, _)), r.clearSearchQuery(), Fe(m ? r.searchRef.current : r.ref.current, "focus"), r.closeOnChange(c), b && Fe(r.props, "onAddItem", c, pe({}, r.props, {
          value: y
        }));
      }
    }, r.handleFocus = function(c) {
      var d = r.state.focus;
      d || (Fe(r.props, "onFocus", c, r.props), r.setState({
        focus: !0
      }));
    }, r.handleBlur = function(c) {
      var d = ba(c, "currentTarget");
      if (!(d && d.contains(document.activeElement))) {
        var p = r.props, h = p.closeOnBlur, m = p.multiple, g = p.selectOnBlur;
        r.isMouseDown || (Fe(r.props, "onBlur", c, r.props), g && !m && (r.makeSelectedItemActive(c, r.state.selectedIndex), h && r.close()), r.setState({
          focus: !1
        }), r.clearSearchQuery());
      }
    }, r.handleSearchChange = function(c, d) {
      var p = d.value;
      c.stopPropagation();
      var h = r.props.minCharacters, m = r.state.open, g = p;
      if (Fe(r.props, "onSearchChange", c, pe({}, r.props, {
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
      r.moveSelectionOnKeyDown(c), r.openOnArrow(c), r.openOnSpace(c), r.selectItemOnEnter(c), Fe(r.props, "onKeyDown", c);
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
      }), Fe(r.props, "onLabelClick", c, d);
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
      if (!(p === void 0 || x3(p, "disabled"))) {
        var h = p.length - 1, m = r.props.wrapSelection, g = d + c;
        return !m && (g > h || g < 0) ? g = d : g > h ? g = 0 : g < 0 && (g = h), p[g].disabled ? r.getSelectedIndexAfterMove(c, g) : g;
      }
    }, r.handleIconOverrides = function(c) {
      var d = r.props.clearable, p = Ze(d && r.hasValue() && "clear", c.className);
      return {
        className: p,
        onClick: function(m) {
          Fe(c, "onClick", m, c), r.handleIconClick(m);
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
          Fe(c, "onChange", p, h), r.handleSearchChange(p, h);
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
      h || (m && Fe(r.searchRef.current, "focus"), Fe(r.props, "onOpen", c, r.props), d && r.setState({
        open: !0
      }), r.scrollSelectedItemIntoView());
    }, r.close = function(c, d) {
      d === void 0 && (d = r.handleClose), r.state.open && (Fe(r.props, "onClose", c, r.props), r.setState({
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
      var c = r.props, d = c.multiple, p = c.placeholder, h = c.search, m = c.text, g = r.state, y = g.searchQuery, b = g.selectedIndex, _ = g.value, w = g.open, k = r.hasValue(), F = Ze(p && !k && "default", "text", h && y && "filtered"), E = p, I;
      return m ? E = m : w && !d ? I = r.getSelectedItem(b) : k && (I = r.getItemByValue(_)), Wo.create(I ? fw(I) : E, {
        defaultProps: {
          className: F
        }
      });
    }, r.renderSearchInput = function() {
      var c = r.props, d = c.search, p = c.searchInput, h = r.state.searchQuery;
      return d && /* @__PURE__ */ ee.createElement(ur, {
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
      return d && p && /* @__PURE__ */ ee.createElement("span", {
        className: "sizer",
        ref: r.sizerRef
      });
    }, r.renderLabels = function() {
      var c = r.props, d = c.multiple, p = c.renderLabel, h = r.state, m = h.selectedLabel, g = h.value;
      if (!(!d || yi(g))) {
        var y = Cn(g, r.getItemByValue);
        return Cn(b3(y), function(b, _) {
          var w = {
            active: b.value === m,
            as: "a",
            key: l0(b.key, b.value),
            onClick: r.handleLabelClick,
            onRemove: r.handleLabelRemove,
            value: b.value
          };
          return dr.create(p(b, _, w), {
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
        return /* @__PURE__ */ ee.createElement("div", {
          className: "message"
        }, m);
      var k = p ? function(F) {
        return _a(_, F);
      } : function(F) {
        return F === _;
      };
      return Cn(w, function(F, E) {
        return Ni.create(pe({
          active: k(F.value),
          selected: b === E
        }, F, {
          key: l0(F.key, F.value),
          // Needed for handling click events on disabled items
          style: pe({}, F.style, {
            pointerEvents: "all"
          })
        }), {
          generateKey: !1,
          overrideProps: function(T) {
            return {
              onClick: function(C, S) {
                T.onClick == null || T.onClick(C, S), r.handleItemClick(C, S);
              }
            };
          }
        });
      });
    }, r.renderMenu = function() {
      var c = r.props, d = c.children, p = c.direction, h = c.header, m = r.state.open, g = r.getDropdownMenuAriaOptions();
      if (!pt(d)) {
        var y = lm.only(d), b = Ze(p, V(m, "visible"), y.props.className);
        return /* @__PURE__ */ q_(y, pe({
          className: b
        }, g));
      }
      return /* @__PURE__ */ ee.createElement(Es, pe({}, g, {
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
      !dF(c0(o.options), c0(u.__options))
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
    var o = this.props, s = o.basic, u = o.button, c = o.className, d = o.compact, p = o.disabled, h = o.error, m = o.fluid, g = o.floating, y = o.icon, b = o.inline, _ = o.item, w = o.labeled, k = o.loading, F = o.multiple, E = o.pointing, I = o.search, T = o.selection, P = o.scrolling, C = o.simple, S = o.trigger, A = this.state, B = A.focus, U = A.open, re = A.upward, G = Ze(
      "ui",
      V(U, "active visible"),
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
      V(T, "selection"),
      V(C, "simple"),
      V(P, "scrolling"),
      V(re, "upward"),
      rn(E, "pointing"),
      "dropdown",
      c
    ), ae = Ge(t, this.props), he = Qe(t, this.props), ye = this.getDropdownAriaOptions(he, this.props);
    return /* @__PURE__ */ ee.createElement(ur, {
      innerRef: this.ref
    }, /* @__PURE__ */ ee.createElement(he, pe({}, ae, ye, {
      className: G,
      onBlur: this.handleBlur,
      onClick: this.handleClick,
      onKeyDown: this.handleKeyDown,
      onMouseDown: this.handleMouseDown,
      onFocus: this.handleFocus,
      onChange: this.handleChange,
      tabIndex: this.computeTabIndex()
    }), this.renderLabels(), this.renderSearchInput(), this.renderSearchSizer(), S || this.renderText(), je.create(y, {
      overrideProps: this.handleIconOverrides,
      autoGenerateKey: !1
    }), this.renderMenu(), U && /* @__PURE__ */ ee.createElement(Ya, {
      name: "keydown",
      on: this.closeOnEscape
    }), U && /* @__PURE__ */ ee.createElement(Ya, {
      name: "click",
      on: this.closeOnDocumentClick
    }), B && /* @__PURE__ */ ee.createElement(Ya, {
      name: "keydown",
      on: this.removeItemOnBackspace
    })));
  }, t;
}(Us);
Tn.handledProps = ["additionLabel", "additionPosition", "allowAdditions", "as", "basic", "button", "children", "className", "clearable", "closeOnBlur", "closeOnChange", "closeOnEscape", "compact", "deburr", "defaultOpen", "defaultSearchQuery", "defaultSelectedLabel", "defaultUpward", "defaultValue", "direction", "disabled", "error", "floating", "fluid", "header", "icon", "inline", "item", "labeled", "lazyLoad", "loading", "minCharacters", "multiple", "noResultsMessage", "onAddItem", "onBlur", "onChange", "onClick", "onClose", "onFocus", "onLabelClick", "onMouseDown", "onOpen", "onSearchChange", "open", "openOnFocus", "options", "placeholder", "pointing", "renderLabel", "scrolling", "search", "searchInput", "searchQuery", "selectOnBlur", "selectOnNavigation", "selectedLabel", "selection", "simple", "tabIndex", "text", "trigger", "upward", "value", "wrapSelection"];
Tn.propTypes = process.env.NODE_ENV !== "production" ? {
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
  children: Mt([Vt(["options", "selection"]), D1({
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
  options: Mt([Vt(["children"]), l.arrayOf(l.shape(Ni.propTypes))]),
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
  selection: Mt([Vt(["children"]), Po(["options"]), l.bool]),
  /** A simple dropdown can open without Javascript. */
  simple: l.bool,
  /** A dropdown can receive focus. */
  tabIndex: l.oneOfType([l.number, l.string]),
  /** The text displayed in the dropdown, usually for the active item. */
  text: l.string,
  /** Custom element to trigger the menu to become visible. Takes place of 'text'. */
  trigger: Mt([Vt(["selection", "text"]), l.node]),
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
Tn.defaultProps = {
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
Tn.autoControlledProps = ["open", "searchQuery", "selectedLabel", "value", "upward"];
Tn.Divider = Ql;
Tn.Header = jo;
Tn.Item = Ni;
Tn.Menu = Es;
Tn.SearchInput = Ii;
Tn.Text = Wo;
function Wr(e) {
  return /* @__PURE__ */ ee.createElement(Tn, pe({}, e, {
    selection: !0
  }));
}
Wr.handledProps = ["options"];
Wr.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Array of Dropdown.Item props e.g. `{ text: '', value: '' }` */
  options: l.arrayOf(l.shape(Tn.Item.propTypes)).isRequired
} : {};
Wr.Divider = Tn.Divider;
Wr.Header = Tn.Header;
Wr.Item = Tn.Item;
Wr.Menu = Tn.Menu;
var Id = /* @__PURE__ */ function(e) {
  en(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.ref = /* @__PURE__ */ wr(), r.focus = function() {
      return r.ref.current.focus();
    }, r.handleChange = function(c) {
      var d = ba(c, "target.value");
      Fe(r.props, "onChange", c, pe({}, r.props, {
        value: d
      }));
    }, r.handleInput = function(c) {
      var d = ba(c, "target.value");
      Fe(r.props, "onInput", c, pe({}, r.props, {
        value: d
      }));
    }, r;
  }
  var n = t.prototype;
  return n.render = function() {
    var o = this.props, s = o.rows, u = o.value, c = Ge(t, this.props), d = Qe(t, this.props);
    return /* @__PURE__ */ ee.createElement(ur, {
      innerRef: this.ref
    }, /* @__PURE__ */ ee.createElement(d, pe({}, c, {
      onChange: this.handleChange,
      onInput: this.handleInput,
      rows: s,
      value: u
    })));
  }, t;
}(Qn);
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
function Sn(e) {
  var t = e.children, n = e.className, r = e.content, o = e.control, s = e.disabled, u = e.error, c = e.inline, d = e.label, p = e.required, h = e.type, m = e.width, g = e.id, y = Ze(V(s, "disabled"), V(u, "error"), V(c, "inline"), V(p, "required"), Gn(m, "wide"), "field", n), b = Ge(Sn, e), _ = Qe(Sn, e), w = ba(u, "pointing", "above"), k = dr.create(u, {
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
    return Tt(d) ? /* @__PURE__ */ ee.createElement(_, pe({}, b, {
      className: y,
      id: g
    }), pt(t) ? r : t) : /* @__PURE__ */ ee.createElement(_, pe({}, b, {
      className: y,
      id: g
    }), F, vh(d, {
      autoGenerateKey: !1
    }), E);
  var I = g && u ? g + "-error-message" : null, T = {
    "aria-describedby": I,
    "aria-invalid": u ? !0 : void 0
  }, P = pe({}, b, {
    content: r,
    children: t,
    disabled: s,
    required: p,
    type: h,
    id: g
  });
  return o === "input" && (h === "checkbox" || h === "radio") ? /* @__PURE__ */ ee.createElement(_, {
    className: y
  }, /* @__PURE__ */ ee.createElement("label", null, F, /* @__PURE__ */ gp(o, pe({}, T, P)), " ", d, E)) : o === Xn || o === Bo ? /* @__PURE__ */ ee.createElement(_, {
    className: y
  }, F, /* @__PURE__ */ gp(o, pe({}, T, P, {
    label: d
  })), E) : /* @__PURE__ */ ee.createElement(_, {
    className: y
  }, vh(d, {
    defaultProps: {
      htmlFor: g
    },
    autoGenerateKey: !1
  }), F, /* @__PURE__ */ gp(o, pe({}, T, P)), E);
}
Sn.handledProps = ["as", "children", "className", "content", "control", "disabled", "error", "id", "inline", "label", "required", "type", "width"];
Sn.propTypes = process.env.NODE_ENV !== "production" ? {
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
  width: l.oneOf(sr)
} : {};
function Cs(e) {
  var t = e.control, n = Ge(Cs, e), r = Qe(Cs, e);
  return /* @__PURE__ */ ee.createElement(r, pe({}, n, {
    control: t
  }));
}
Cs.handledProps = ["as", "control"];
Cs.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** A FormField control prop. */
  control: Sn.propTypes.control
} : {};
Cs.defaultProps = {
  as: Sn,
  control: ht
};
function Os(e) {
  var t = e.control, n = Ge(Os, e), r = Qe(Os, e);
  return /* @__PURE__ */ ee.createElement(r, pe({}, n, {
    control: t
  }));
}
Os.handledProps = ["as", "control"];
Os.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** A FormField control prop. */
  control: Sn.propTypes.control
} : {};
Os.defaultProps = {
  as: Sn,
  control: Xn
};
function Ss(e) {
  var t = e.control, n = Ge(Ss, e), r = Qe(Ss, e);
  return /* @__PURE__ */ ee.createElement(r, pe({}, n, {
    control: t
  }));
}
Ss.handledProps = ["as", "control"];
Ss.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** A FormField control prop. */
  control: Sn.propTypes.control
} : {};
Ss.defaultProps = {
  as: Sn,
  control: Tn
};
function Jl(e) {
  var t = e.children, n = e.className, r = e.grouped, o = e.inline, s = e.unstackable, u = e.widths, c = Ze(V(r, "grouped"), V(o, "inline"), V(s, "unstackable"), Gn(u, null, !0), "fields", n), d = Ge(Jl, e), p = Qe(Jl, e);
  return /* @__PURE__ */ ee.createElement(p, pe({}, d, {
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
  grouped: Mt([Vt(["inline"]), l.bool]),
  /** Multiple fields may be inline in a row. */
  inline: Mt([Vt(["grouped"]), l.bool]),
  /** A form group can prevent itself from stacking on mobile. */
  unstackable: l.bool,
  /** Fields Groups can specify their width in grid columns or automatically divide fields to be equal width. */
  widths: l.oneOf([].concat(sr, ["equal"]))
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
      Fe(r.props, "onChange", c, pe({}, r.props, {
        value: d
      }));
    }, r.handleChildOverrides = function(c, d) {
      return pe({}, d, c.props, {
        ref: function(h) {
          ya(c.ref, h), r.inputRef.current = h;
        }
      });
    }, r.partitionProps = function() {
      var c = r.props, d = c.disabled, p = c.type, h = r.computeTabIndex(), m = Ge(t, r.props), g = wm(m), y = g[0], b = g[1];
      return [pe({}, y, {
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
    var o = this, s = this.props, u = s.action, c = s.actionPosition, d = s.children, p = s.className, h = s.disabled, m = s.error, g = s.fluid, y = s.focus, b = s.icon, _ = s.iconPosition, w = s.input, k = s.inverted, F = s.label, E = s.labelPosition, I = s.loading, T = s.size, P = s.transparent, C = s.type, S = Ze("ui", T, V(h, "disabled"), V(m, "error"), V(g, "fluid"), V(y, "focus"), V(k, "inverted"), V(I, "loading"), V(P, "transparent"), Zn(c, "action") || V(u, "action"), Zn(_, "icon") || V(b || I, "icon"), Zn(E, "labeled") || V(F, "labeled"), "input", p), A = Qe(t, this.props), B = this.partitionProps(), U = B[0], re = B[1];
    if (!pt(d)) {
      var G = Cn(lm.toArray(d), function(ye) {
        return ye.type !== "input" ? ye : /* @__PURE__ */ q_(ye, o.handleChildOverrides(ye, U));
      });
      return /* @__PURE__ */ ee.createElement(A, pe({}, re, {
        className: S
      }), G);
    }
    var ae = ht.create(u, {
      autoGenerateKey: !1
    }), he = dr.create(F, {
      defaultProps: {
        className: Ze(
          "label",
          // add 'left|right corner'
          _a(E, "corner") && E
        )
      },
      autoGenerateKey: !1
    });
    return /* @__PURE__ */ ee.createElement(A, pe({}, re, {
      className: S
    }), c === "left" && ae, E !== "right" && he, tL(w || C, {
      defaultProps: U,
      autoGenerateKey: !1
    }), je.create(this.computeIcon(), {
      autoGenerateKey: !1
    }), c !== "left" && ae, E === "right" && he);
  }, t;
}(Qn);
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
Ts.create = Kt(Ts, function(e) {
  return {
    type: e
  };
});
function Ps(e) {
  var t = e.control, n = Ge(Ps, e), r = Qe(Ps, e);
  return /* @__PURE__ */ ee.createElement(r, pe({}, n, {
    control: t
  }));
}
Ps.handledProps = ["as", "control"];
Ps.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** A FormField control prop. */
  control: Sn.propTypes.control
} : {};
Ps.defaultProps = {
  as: Sn,
  control: Ts
};
function ks(e) {
  var t = e.control, n = Ge(ks, e), r = Qe(ks, e);
  return /* @__PURE__ */ ee.createElement(r, pe({}, n, {
    control: t
  }));
}
ks.handledProps = ["as", "control"];
ks.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** A FormField control prop. */
  control: Sn.propTypes.control
} : {};
ks.defaultProps = {
  as: Sn,
  control: Bo
};
function Ns(e) {
  var t = e.control, n = e.options, r = Ge(Ns, e), o = Qe(Ns, e);
  return /* @__PURE__ */ ee.createElement(o, pe({}, r, {
    control: t,
    options: n
  }));
}
Ns.handledProps = ["as", "control", "options"];
Ns.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** A FormField control prop. */
  control: Sn.propTypes.control,
  /** Array of Dropdown.Item props e.g. `{ text: '', value: '' }` */
  options: l.arrayOf(l.shape(Tn.Item.propTypes)).isRequired
} : {};
Ns.defaultProps = {
  as: Sn,
  control: Wr
};
function Is(e) {
  var t = e.control, n = Ge(Is, e), r = Qe(Is, e);
  return /* @__PURE__ */ ee.createElement(r, pe({}, n, {
    control: t
  }));
}
Is.handledProps = ["as", "control"];
Is.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** A FormField control prop. */
  control: Sn.propTypes.control
} : {};
Is.defaultProps = {
  as: Sn,
  control: Id
};
var Ln = /* @__PURE__ */ function(e) {
  en(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handleSubmit = function(c) {
      var d = r.props.action;
      typeof d != "string" && Fe(c, "preventDefault");
      for (var p = arguments.length, h = new Array(p > 1 ? p - 1 : 0), m = 1; m < p; m++)
        h[m - 1] = arguments[m];
      Fe.apply(void 0, [r.props, "onSubmit", c, r.props].concat(h));
    }, r;
  }
  var n = t.prototype;
  return n.render = function() {
    var o = this.props, s = o.action, u = o.children, c = o.className, d = o.error, p = o.inverted, h = o.loading, m = o.reply, g = o.size, y = o.success, b = o.unstackable, _ = o.warning, w = o.widths, k = Ze("ui", g, V(d, "error"), V(p, "inverted"), V(h, "loading"), V(m, "reply"), V(y, "success"), V(b, "unstackable"), V(_, "warning"), Gn(w, null, !0), "form", c), F = Ge(t, this.props), E = Qe(t, this.props);
    return /* @__PURE__ */ ee.createElement(E, pe({}, F, {
      action: s,
      className: k,
      onSubmit: this.handleSubmit
    }), u);
  }, t;
}(Qn);
Ln.handledProps = ["action", "as", "children", "className", "error", "inverted", "loading", "onSubmit", "reply", "size", "success", "unstackable", "warning", "widths"];
Ln.propTypes = process.env.NODE_ENV !== "production" ? {
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
  size: l.oneOf(ta(fr, "medium")),
  /** Automatically show any success Message children. */
  success: l.bool,
  /** A form can prevent itself from stacking on mobile. */
  unstackable: l.bool,
  /** Automatically show any warning Message children. */
  warning: l.bool,
  /** Forms can automatically divide fields to be equal width. */
  widths: l.oneOf(["equal"])
} : {};
Ln.defaultProps = {
  as: "form"
};
Ln.Field = Sn;
Ln.Button = Cs;
Ln.Checkbox = Os;
Ln.Dropdown = Ss;
Ln.Group = Jl;
Ln.Input = Ps;
Ln.Radio = ks;
Ln.Select = Ns;
Ln.TextArea = Is;
function Qa(e) {
  var t = e.children, n = e.className, r = e.computer, o = e.color, s = e.floated, u = e.largeScreen, c = e.mobile, d = e.only, p = e.stretched, h = e.tablet, m = e.textAlign, g = e.verticalAlign, y = e.widescreen, b = e.width, _ = Ze(o, V(p, "stretched"), Zu(d, "only"), ji(m), Zn(s, "floated"), Jo(g), Gn(r, "wide computer"), Gn(u, "wide large screen"), Gn(c, "wide mobile"), Gn(h, "wide tablet"), Gn(y, "wide widescreen"), Gn(b, "wide"), "column", n), w = Ge(Qa, e), k = Qe(Qa, e);
  return /* @__PURE__ */ ee.createElement(k, pe({}, w, {
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
  computer: Mt([Vt(["width"]), l.oneOf(sr)]),
  /** A column can sit flush against the left or right edge of a row. */
  floated: l.oneOf(_c),
  /** A column can specify a width for a large screen device. */
  largeScreen: Mt([Vt(["width"]), l.oneOf(sr)]),
  /** A column can specify a width for a mobile device. */
  mobile: Mt([Vt(["width"]), l.oneOf(sr)]),
  /** A column can appear only for a specific device, or screen sizes. */
  only: Xu(H1),
  /** A column can stretch its contents to take up the entire grid or row height. */
  stretched: l.bool,
  /** A column can specify a width for a tablet device. */
  tablet: Mt([Vt(["width"]), l.oneOf(sr)]),
  /** A column can specify its text alignment. */
  textAlign: l.oneOf(Wi),
  /** A column can specify its vertical alignment to have all its columns vertically centered. */
  verticalAlign: l.oneOf(zi),
  /** A column can specify a width for a wide screen device. */
  widescreen: Mt([Vt(["width"]), l.oneOf(sr)]),
  /** Represents width of column. */
  width: Mt([Vt(["computer", "largeScreen", "mobile", "tablet", "widescreen"]), l.oneOf(sr)])
} : {};
Qa.create = Kt(Qa, function(e) {
  return {
    children: e
  };
});
function ec(e) {
  var t = e.centered, n = e.children, r = e.className, o = e.color, s = e.columns, u = e.divided, c = e.only, d = e.reversed, p = e.stretched, h = e.textAlign, m = e.verticalAlign, g = Ze(o, V(t, "centered"), V(u, "divided"), V(p, "stretched"), Zu(c, "only"), Zu(d, "reversed"), ji(h), Jo(m), Gn(s, "column", !0), "row", r), y = Ge(ec, e), b = Qe(ec, e);
  return /* @__PURE__ */ ee.createElement(b, pe({}, y, {
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
  columns: l.oneOf([].concat(sr, ["equal"])),
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
  var t = e.celled, n = e.centered, r = e.children, o = e.className, s = e.columns, u = e.container, c = e.divided, d = e.doubling, p = e.inverted, h = e.padded, m = e.relaxed, g = e.reversed, y = e.stackable, b = e.stretched, _ = e.textAlign, w = e.verticalAlign, k = Ze("ui", V(n, "centered"), V(u, "container"), V(d, "doubling"), V(p, "inverted"), V(y, "stackable"), V(b, "stretched"), rn(t, "celled"), rn(c, "divided"), rn(h, "padded"), rn(m, "relaxed"), Zu(g, "reversed"), ji(_), Jo(w), Gn(s, "column", !0), "grid", o), F = Ge(Ai, e), E = Qe(Ai, e);
  return /* @__PURE__ */ ee.createElement(E, pe({}, F, {
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
  columns: l.oneOf([].concat(sr, ["equal"])),
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
  var t = e.children, n = e.className, r = Ze(n), o = Ge(Ri, e), s = Qe(Ri, e);
  return /* @__PURE__ */ ee.createElement(s, pe({}, o, {
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
  var t = e.active, n = e.children, r = e.className, o = e.collapsing, s = e.content, u = e.disabled, c = e.error, d = e.icon, p = e.negative, h = e.positive, m = e.selectable, g = e.singleLine, y = e.textAlign, b = e.verticalAlign, _ = e.warning, w = e.width, k = Ze(V(t, "active"), V(o, "collapsing"), V(u, "disabled"), V(c, "error"), V(p, "negative"), V(h, "positive"), V(m, "selectable"), V(g, "single line"), V(_, "warning"), ji(y), Jo(b), Gn(w, "wide"), r), F = Ge(Sa, e), E = Qe(Sa, e);
  return pt(n) ? /* @__PURE__ */ ee.createElement(E, pe({}, F, {
    className: k
  }), je.create(d), s) : /* @__PURE__ */ ee.createElement(E, pe({}, F, {
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
  width: l.oneOf(sr)
} : {};
Sa.create = Kt(Sa, function(e) {
  return {
    content: e
  };
});
function zo(e) {
  var t = e.children, n = e.className, r = e.content, o = e.fullWidth, s = Ze(V(o, "full-width"), n), u = Ge(zo, e), c = Qe(zo, e);
  return /* @__PURE__ */ ee.createElement(c, pe({}, u, {
    className: s
  }), pt(t) ? r : t);
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
  var t = e.as, n = Ge(Ys, e);
  return /* @__PURE__ */ ee.createElement(zo, pe({}, n, {
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
  var t = e.as, n = e.className, r = e.sorted, o = Ze(Zn(r, "sorted"), n), s = Ge(wc, e);
  return /* @__PURE__ */ ee.createElement(Sa, pe({}, s, {
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
  var t = e.active, n = e.cellAs, r = e.cells, o = e.children, s = e.className, u = e.disabled, c = e.error, d = e.negative, p = e.positive, h = e.textAlign, m = e.verticalAlign, g = e.warning, y = Ze(V(t, "active"), V(u, "disabled"), V(c, "error"), V(d, "negative"), V(p, "positive"), V(g, "warning"), ji(h), Jo(m), s), b = Ge(Lr, e), _ = Qe(Lr, e);
  return pt(o) ? /* @__PURE__ */ ee.createElement(_, pe({}, b, {
    className: y
  }), Cn(r, function(w) {
    return Sa.create(w, {
      defaultProps: {
        as: n
      }
    });
  })) : /* @__PURE__ */ ee.createElement(_, pe({}, b, {
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
Lr.create = Kt(Lr, function(e) {
  return {
    cells: e
  };
});
function Et(e) {
  var t = e.attached, n = e.basic, r = e.celled, o = e.children, s = e.className, u = e.collapsing, c = e.color, d = e.columns, p = e.compact, h = e.definition, m = e.fixed, g = e.footerRow, y = e.headerRow, b = e.headerRows, _ = e.inverted, w = e.padded, k = e.renderBodyRow, F = e.selectable, E = e.singleLine, I = e.size, T = e.sortable, P = e.stackable, C = e.striped, S = e.structured, A = e.tableData, B = e.textAlign, U = e.unstackable, re = e.verticalAlign, G = Ze("ui", c, I, V(r, "celled"), V(u, "collapsing"), V(h, "definition"), V(m, "fixed"), V(_, "inverted"), V(F, "selectable"), V(E, "single line"), V(T, "sortable"), V(P, "stackable"), V(C, "striped"), V(S, "structured"), V(U, "unstackable"), rn(t, "attached"), rn(n, "basic"), rn(p, "compact"), rn(w, "padded"), ji(B), Jo(re), Gn(d, "column"), "table", s), ae = Ge(Et, e), he = Qe(Et, e);
  if (!pt(o))
    return /* @__PURE__ */ ee.createElement(he, pe({}, ae, {
      className: G
    }), o);
  var ye = y || b, ke = {
    defaultProps: {
      cellAs: "th"
    }
  }, se = ye && /* @__PURE__ */ ee.createElement(zo, null, Lr.create(y, ke), Cn(b, function(me) {
    return Lr.create(me, ke);
  }));
  return /* @__PURE__ */ ee.createElement(he, pe({}, ae, {
    className: G
  }), se, /* @__PURE__ */ ee.createElement(Ri, null, k && Cn(A, function(me, X) {
    return Lr.create(k(me, X));
  })), g && /* @__PURE__ */ ee.createElement(Ys, null, Lr.create(g)));
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
  columns: l.oneOf(sr),
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
  headerRow: Mt([Vt(["headerRows"]), Ct]),
  /** Shorthand for multiple TableRows to be placed within Table.Header. */
  headerRows: Mt([Vt(["headerRow"]), bc]),
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
  renderBodyRow: Mt([Vt(["children"]), Po(["tableData"]), l.func]),
  /** A table can have its rows appear selectable. */
  selectable: l.bool,
  /** A table can specify that its cell contents should remain on a single line and not wrap. */
  singleLine: l.bool,
  /** A table can also be small or large. */
  size: l.oneOf(ta(fr, "mini", "tiny", "medium", "big", "huge", "massive")),
  /** A table may allow a user to sort contents by clicking on a table header. */
  sortable: l.bool,
  /** A table can specify how it stacks table content responsively. */
  stackable: l.bool,
  /** A table can stripe alternate rows of content with a darker color to increase contrast. */
  striped: l.bool,
  /** A table can be formatted to display complex structured data. */
  structured: l.bool,
  /** Data to be passed to the renderBodyRow function. */
  tableData: Mt([Vt(["children"]), Po(["renderBodyRow"]), l.array]),
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
  var t = e.children, n = e.className, r = e.content, o = Ze("sub header", n), s = Ge(Uo, e), u = Qe(Uo, e);
  return /* @__PURE__ */ ee.createElement(u, pe({}, s, {
    className: o
  }), pt(t) ? r : t);
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
Uo.create = Kt(Uo, function(e) {
  return {
    content: e
  };
});
function As(e) {
  var t = e.children, n = e.className, r = e.content, o = Ze("content", n), s = Ge(As, e), u = Qe(As, e);
  return /* @__PURE__ */ ee.createElement(u, pe({}, s, {
    className: o
  }), pt(t) ? r : t);
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
function Kn(e) {
  var t = e.attached, n = e.block, r = e.children, o = e.className, s = e.color, u = e.content, c = e.disabled, d = e.dividing, p = e.floated, h = e.icon, m = e.image, g = e.inverted, y = e.size, b = e.sub, _ = e.subheader, w = e.textAlign, k = Ze("ui", s, y, V(n, "block"), V(c, "disabled"), V(d, "dividing"), Zn(p, "floated"), V(h === !0, "icon"), V(m === !0, "image"), V(g, "inverted"), V(b, "sub"), rn(t, "attached"), ji(w), "header", o), F = Ge(Kn, e), E = Qe(Kn, e);
  if (!pt(r))
    return /* @__PURE__ */ ee.createElement(E, pe({}, F, {
      className: k
    }), r);
  var I = je.create(h, {
    autoGenerateKey: !1
  }), T = xr.create(m, {
    autoGenerateKey: !1
  }), P = Uo.create(_, {
    autoGenerateKey: !1
  });
  return I || T ? /* @__PURE__ */ ee.createElement(E, pe({}, F, {
    className: k
  }), I || T, (u || P) && /* @__PURE__ */ ee.createElement(As, null, u, P)) : /* @__PURE__ */ ee.createElement(E, pe({}, F, {
    className: k
  }), u, P);
}
Kn.handledProps = ["as", "attached", "block", "children", "className", "color", "content", "disabled", "dividing", "floated", "icon", "image", "inverted", "size", "sub", "subheader", "textAlign"];
Kn.propTypes = process.env.NODE_ENV !== "production" ? {
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
  icon: Mt([Vt(["image"]), l.oneOfType([l.bool, Ct])]),
  /** Add an image by img src or pass an Image. */
  image: Mt([Vt(["icon"]), l.oneOfType([l.bool, Ct])]),
  /** Inverts the color of the header for dark backgrounds. */
  inverted: l.bool,
  /** Content headings are sized with em and are based on the font-size of their container. */
  size: l.oneOf(ta(fr, "big", "massive", "mini")),
  /** Headers may be formatted to label smaller or de-emphasized content. */
  sub: l.bool,
  /** Shorthand for Header.Subheader. */
  subheader: Ct,
  /** Align header content. */
  textAlign: l.oneOf(Wi)
} : {};
Kn.Content = As;
Kn.Subheader = Uo;
function tc(e) {
  var t = e.active, n = e.children, r = e.className, o = e.content, s = e.disabled, u = e.indeterminate, c = e.inline, d = e.inverted, p = e.size, h = Ze("ui", p, V(t, "active"), V(s, "disabled"), V(u, "indeterminate"), V(d, "inverted"), V(n || o, "text"), rn(c, "inline"), "loader", r), m = Ge(tc, e), g = Qe(tc, e);
  return /* @__PURE__ */ ee.createElement(g, pe({}, m, {
    className: h
  }), pt(n) ? o : n);
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
  size: l.oneOf(fr)
} : {};
function H3(e) {
  return jr(e) && e.nodeType === 1 && !Pd(e);
}
var Y3 = L.createContext();
L.createContext();
var V3 = function(t) {
  return Array.isArray(t) ? t[0] : t;
}, q3 = function(t) {
  if (typeof t == "function") {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      r[o - 1] = arguments[o];
    return t.apply(void 0, r);
  }
}, G3 = function(t, n) {
  if (typeof t == "function")
    return q3(t, n);
  t != null && (t.current = n);
}, u0 = function(t) {
  return t.reduce(function(n, r) {
    var o = r[0], s = r[1];
    return n[o] = s, n;
  }, {});
}, d0 = typeof window < "u" && window.document && window.document.createElement ? L.useLayoutEffect : L.useEffect, lr = "top", zr = "bottom", Ur = "right", cr = "left", Em = "auto", xc = [lr, zr, Ur, cr], Rs = "start", nc = "end", K3 = "clippingParents", pw = "viewport", yl = "popper", Z3 = "reference", f0 = /* @__PURE__ */ xc.reduce(function(e, t) {
  return e.concat([t + "-" + Rs, t + "-" + nc]);
}, []), hw = /* @__PURE__ */ [].concat(xc, [Em]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Rs, t + "-" + nc]);
}, []), X3 = "beforeRead", Q3 = "read", J3 = "afterRead", e$ = "beforeMain", t$ = "main", n$ = "afterMain", r$ = "beforeWrite", a$ = "write", o$ = "afterWrite", i$ = [X3, Q3, J3, e$, t$, n$, r$, a$, o$];
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
function s$(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, s = t.elements[n];
    !$r(s) || !Ta(s) || (Object.assign(s.style, r), Object.keys(o).forEach(function(u) {
      var c = o[u];
      c === !1 ? s.removeAttribute(u) : s.setAttribute(u, c === !0 ? "" : c);
    }));
  });
}
function l$(e) {
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
const c$ = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: s$,
  effect: l$,
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
function u$(e) {
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
function d$(e) {
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
  for (var t = Er(e), n = p0(e); n && u$(n) && Ja(n).position === "static"; )
    n = p0(n);
  return n && (Ta(n) === "html" || Ta(n) === "body" && Ja(n).position === "static") ? t : n || d$(e) || t;
}
function Sm(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Al(e, t, n) {
  return Ei(e, ed(t, n));
}
function f$(e, t, n) {
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
var p$ = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, yw(typeof t != "number" ? t : bw(t, xc));
};
function h$(e) {
  var t, n = e.state, r = e.name, o = e.options, s = n.elements.arrow, u = n.modifiersData.popperOffsets, c = Ea(n.placement), d = Sm(c), p = [cr, Ur].indexOf(c) >= 0, h = p ? "height" : "width";
  if (!(!s || !u)) {
    var m = p$(o.padding, n), g = Om(s), y = d === "y" ? lr : cr, b = d === "y" ? zr : Ur, _ = n.rects.reference[h] + n.rects.reference[d] - u[d] - n.rects.popper[h], w = u[d] - n.rects.reference[d], k = Ec(s), F = k ? d === "y" ? k.clientHeight || 0 : k.clientWidth || 0 : 0, E = _ / 2 - w / 2, I = m[y], T = F - g[h] - m[b], P = F / 2 - g[h] / 2 + E, C = Al(I, P, T), S = d;
    n.modifiersData[r] = (t = {}, t[S] = C, t.centerOffset = C - P, t);
  }
}
function m$(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || gw(t.elements.popper, o) && (t.elements.arrow = o));
}
const g$ = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: h$,
  effect: m$,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Ls(e) {
  return e.split("-")[1];
}
var v$ = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function y$(e, t) {
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
  var k = u.hasOwnProperty("x"), F = u.hasOwnProperty("y"), E = cr, I = lr, T = window;
  if (p) {
    var P = Ec(n), C = "clientHeight", S = "clientWidth";
    if (P === Er(n) && (P = ei(n), Ja(P).position !== "static" && c === "absolute" && (C = "scrollHeight", S = "scrollWidth")), P = P, o === lr || (o === cr || o === Ur) && s === nc) {
      I = zr;
      var A = m && P === T && T.visualViewport ? T.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        P[C]
      );
      _ -= A - r.height, _ *= d ? 1 : -1;
    }
    if (o === cr || (o === lr || o === zr) && s === nc) {
      E = Ur;
      var B = m && P === T && T.visualViewport ? T.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        P[S]
      );
      y -= B - r.width, y *= d ? 1 : -1;
    }
  }
  var U = Object.assign({
    position: c
  }, p && v$), re = h === !0 ? y$({
    x: y,
    y: _
  }, Er(n)) : {
    x: y,
    y: _
  };
  if (y = re.x, _ = re.y, d) {
    var G;
    return Object.assign({}, U, (G = {}, G[I] = F ? "0" : "", G[E] = k ? "0" : "", G.transform = (T.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + _ + "px)" : "translate3d(" + y + "px, " + _ + "px, 0)", G));
  }
  return Object.assign({}, U, (t = {}, t[I] = F ? _ + "px" : "", t[E] = k ? y + "px" : "", t.transform = "", t));
}
function b$(e) {
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
const _$ = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: b$,
  data: {}
};
var Cu = {
  passive: !0
};
function w$(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, s = o === void 0 ? !0 : o, u = r.resize, c = u === void 0 ? !0 : u, d = Er(t.elements.popper), p = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && p.forEach(function(h) {
    h.addEventListener("scroll", n.update, Cu);
  }), c && d.addEventListener("resize", n.update, Cu), function() {
    s && p.forEach(function(h) {
      h.removeEventListener("scroll", n.update, Cu);
    }), c && d.removeEventListener("resize", n.update, Cu);
  };
}
const x$ = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: w$,
  data: {}
};
var E$ = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Du(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return E$[t];
  });
}
var C$ = {
  start: "end",
  end: "start"
};
function m0(e) {
  return e.replace(/start|end/g, function(t) {
    return C$[t];
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
function O$(e, t) {
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
function S$(e) {
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
function T$(e, t) {
  var n = Ds(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function g0(e, t, n) {
  return t === pw ? Eh(O$(e, n)) : Mi(t) ? T$(t, n) : Eh(S$(ei(e)));
}
function P$(e) {
  var t = Rl(Ad(e)), n = ["absolute", "fixed"].indexOf(Ja(e).position) >= 0, r = n && $r(e) ? Ec(e) : e;
  return Mi(r) ? t.filter(function(o) {
    return Mi(o) && gw(o, r) && Ta(o) !== "body";
  }) : [];
}
function k$(e, t, n, r) {
  var o = t === "clippingParents" ? P$(e) : [].concat(t), s = [].concat(o, [n]), u = s[0], c = s.reduce(function(d, p) {
    var h = g0(e, p, r);
    return d.top = Ei(h.top, d.top), d.right = ed(h.right, d.right), d.bottom = ed(h.bottom, d.bottom), d.left = Ei(h.left, d.left), d;
  }, g0(e, u, r));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function ww(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? Ea(r) : null, s = r ? Ls(r) : null, u = t.x + t.width / 2 - n.width / 2, c = t.y + t.height / 2 - n.height / 2, d;
  switch (o) {
    case lr:
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
    case cr:
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
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, s = n.strategy, u = s === void 0 ? e.strategy : s, c = n.boundary, d = c === void 0 ? K3 : c, p = n.rootBoundary, h = p === void 0 ? pw : p, m = n.elementContext, g = m === void 0 ? yl : m, y = n.altBoundary, b = y === void 0 ? !1 : y, _ = n.padding, w = _ === void 0 ? 0 : _, k = yw(typeof w != "number" ? w : bw(w, xc)), F = g === yl ? Z3 : yl, E = e.rects.popper, I = e.elements[b ? F : g], T = k$(Mi(I) ? I : I.contextElement || ei(e.elements.popper), d, h, u), P = Ds(e.elements.reference), C = ww({
    reference: P,
    element: E,
    placement: o
  }), S = Eh(Object.assign({}, E, C)), A = g === yl ? S : P, B = {
    top: T.top - A.top + k.top,
    bottom: A.bottom - T.bottom + k.bottom,
    left: T.left - A.left + k.left,
    right: A.right - T.right + k.right
  }, U = e.modifiersData.offset;
  if (g === yl && U) {
    var re = U[o];
    Object.keys(B).forEach(function(G) {
      var ae = [Ur, zr].indexOf(G) >= 0 ? 1 : -1, he = [lr, zr].indexOf(G) >= 0 ? "y" : "x";
      B[G] += re[he] * ae;
    });
  }
  return B;
}
function N$(e, t) {
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
function I$(e) {
  if (Ea(e) === Em)
    return [];
  var t = Du(e);
  return [m0(e), t, m0(t)];
}
function A$(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, s = o === void 0 ? !0 : o, u = n.altAxis, c = u === void 0 ? !0 : u, d = n.fallbackPlacements, p = n.padding, h = n.boundary, m = n.rootBoundary, g = n.altBoundary, y = n.flipVariations, b = y === void 0 ? !0 : y, _ = n.allowedAutoPlacements, w = t.options.placement, k = Ea(w), F = k === w, E = d || (F || !b ? [Du(w)] : I$(w)), I = [w].concat(E).reduce(function(Se, ve) {
      return Se.concat(Ea(ve) === Em ? N$(t, {
        placement: ve,
        boundary: h,
        rootBoundary: m,
        padding: p,
        flipVariations: b,
        allowedAutoPlacements: _
      }) : ve);
    }, []), T = t.rects.reference, P = t.rects.popper, C = /* @__PURE__ */ new Map(), S = !0, A = I[0], B = 0; B < I.length; B++) {
      var U = I[B], re = Ea(U), G = Ls(U) === Rs, ae = [lr, zr].indexOf(re) >= 0, he = ae ? "width" : "height", ye = rc(t, {
        placement: U,
        boundary: h,
        rootBoundary: m,
        altBoundary: g,
        padding: p
      }), ke = ae ? G ? Ur : cr : G ? zr : lr;
      T[he] > P[he] && (ke = Du(ke));
      var se = Du(ke), me = [];
      if (s && me.push(ye[re] <= 0), c && me.push(ye[ke] <= 0, ye[se] <= 0), me.every(function(Se) {
        return Se;
      })) {
        A = U, S = !1;
        break;
      }
      C.set(U, me);
    }
    if (S)
      for (var X = b ? 3 : 1, te = function(ve) {
        var ue = I.find(function(xe) {
          var ge = C.get(xe);
          if (ge)
            return ge.slice(0, ve).every(function(W) {
              return W;
            });
        });
        if (ue)
          return A = ue, "break";
      }, oe = X; oe > 0; oe--) {
        var _e = te(oe);
        if (_e === "break") break;
      }
    t.placement !== A && (t.modifiersData[r]._skip = !0, t.placement = A, t.reset = !0);
  }
}
const R$ = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: A$,
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
  return [lr, Ur, zr, cr].some(function(t) {
    return e[t] >= 0;
  });
}
function M$(e) {
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
const D$ = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: M$
};
function L$(e, t, n) {
  var r = Ea(e), o = [cr, lr].indexOf(r) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, u = s[0], c = s[1];
  return u = u || 0, c = (c || 0) * o, [cr, Ur].indexOf(r) >= 0 ? {
    x: c,
    y: u
  } : {
    x: u,
    y: c
  };
}
function F$(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, s = o === void 0 ? [0, 0] : o, u = hw.reduce(function(h, m) {
    return h[m] = L$(m, t.rects, s), h;
  }, {}), c = u[t.placement], d = c.x, p = c.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += d, t.modifiersData.popperOffsets.y += p), t.modifiersData[r] = u;
}
const $$ = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: F$
};
function B$(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = ww({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const j$ = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: B$,
  data: {}
};
function W$(e) {
  return e === "x" ? "y" : "x";
}
function z$(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, s = o === void 0 ? !0 : o, u = n.altAxis, c = u === void 0 ? !1 : u, d = n.boundary, p = n.rootBoundary, h = n.altBoundary, m = n.padding, g = n.tether, y = g === void 0 ? !0 : g, b = n.tetherOffset, _ = b === void 0 ? 0 : b, w = rc(t, {
    boundary: d,
    rootBoundary: p,
    padding: m,
    altBoundary: h
  }), k = Ea(t.placement), F = Ls(t.placement), E = !F, I = Sm(k), T = W$(I), P = t.modifiersData.popperOffsets, C = t.rects.reference, S = t.rects.popper, A = typeof _ == "function" ? _(Object.assign({}, t.rects, {
    placement: t.placement
  })) : _, B = typeof A == "number" ? {
    mainAxis: A,
    altAxis: A
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, A), U = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, re = {
    x: 0,
    y: 0
  };
  if (P) {
    if (s) {
      var G, ae = I === "y" ? lr : cr, he = I === "y" ? zr : Ur, ye = I === "y" ? "height" : "width", ke = P[I], se = ke + w[ae], me = ke - w[he], X = y ? -S[ye] / 2 : 0, te = F === Rs ? C[ye] : S[ye], oe = F === Rs ? -S[ye] : -C[ye], _e = t.elements.arrow, Se = y && _e ? Om(_e) : {
        width: 0,
        height: 0
      }, ve = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : vw(), ue = ve[ae], xe = ve[he], ge = Al(0, C[ye], Se[ye]), W = E ? C[ye] / 2 - X - ge - ue - B.mainAxis : te - ge - ue - B.mainAxis, z = E ? -C[ye] / 2 + X + ge + xe + B.mainAxis : oe + ge + xe + B.mainAxis, $ = t.elements.arrow && Ec(t.elements.arrow), D = $ ? I === "y" ? $.clientTop || 0 : $.clientLeft || 0 : 0, q = (G = U == null ? void 0 : U[I]) != null ? G : 0, K = ke + W - q - D, le = ke + z - q, Ie = Al(y ? ed(se, K) : se, ke, y ? Ei(me, le) : me);
      P[I] = Ie, re[I] = Ie - ke;
    }
    if (c) {
      var de, Oe = I === "x" ? lr : cr, fe = I === "x" ? zr : Ur, Y = P[T], ne = T === "y" ? "height" : "width", we = Y + w[Oe], Ne = Y - w[fe], Re = [lr, cr].indexOf(k) !== -1, Be = (de = U == null ? void 0 : U[T]) != null ? de : 0, Le = Re ? we : Y - C[ne] - S[ne] - Be + B.altAxis, tt = Re ? Y + C[ne] + S[ne] - Be - B.altAxis : Ne, Xe = y && Re ? f$(Le, Y, tt) : Al(y ? Le : we, Y, y ? tt : Ne);
      P[T] = Xe, re[T] = Xe - Y;
    }
    t.modifiersData[r] = re;
  }
}
const U$ = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: z$,
  requiresIfExists: ["offset"]
};
function H$(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Y$(e) {
  return e === Er(e) || !$r(e) ? Tm(e) : H$(e);
}
function V$(e) {
  var t = e.getBoundingClientRect(), n = Ms(t.width) / e.offsetWidth || 1, r = Ms(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function q$(e, t, n) {
  n === void 0 && (n = !1);
  var r = $r(t), o = $r(t) && V$(t), s = ei(t), u = Ds(e, o, n), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Ta(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  km(s)) && (c = Y$(t)), $r(t) ? (d = Ds(t, !0), d.x += t.clientLeft, d.y += t.clientTop) : s && (d.x = Pm(s))), {
    x: u.left + c.scrollLeft - d.x,
    y: u.top + c.scrollTop - d.y,
    width: u.width,
    height: u.height
  };
}
function G$(e) {
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
function K$(e) {
  var t = G$(e);
  return i$.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function Z$(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function X$(e) {
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
function Q$(e) {
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
        var E = K$(X$([].concat(r, h.options.modifiers)));
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
              var T = h.orderedModifiers[I], P = T.fn, C = T.options, S = C === void 0 ? {} : C, A = T.name;
              typeof P == "function" && (h = P({
                state: h,
                options: S,
                name: A,
                instance: y
              }) || h);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Z$(function() {
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
          var T = I({
            state: h,
            name: k,
            instance: y,
            options: E
          }), P = function() {
          };
          m.push(T || P);
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
var J$ = [x$, j$, _$, c$, $$, R$, U$, g$, D$], e5 = /* @__PURE__ */ Q$({
  defaultModifiers: J$
}), t5 = typeof Element < "u", n5 = typeof Map == "function", r5 = typeof Set == "function", a5 = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
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
    if (n5 && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (s = e.entries(); !(r = s.next()).done; )
        if (!t.has(r.value[0])) return !1;
      for (s = e.entries(); !(r = s.next()).done; )
        if (!Lu(r.value[1], t.get(r.value[0]))) return !1;
      return !0;
    }
    if (r5 && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (s = e.entries(); !(r = s.next()).done; )
        if (!t.has(r.value[0])) return !1;
      return !0;
    }
    if (a5 && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
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
    if (t5 && e instanceof Element) return !1;
    for (r = n; r-- !== 0; )
      if (!((o[r] === "_owner" || o[r] === "__v" || o[r] === "__o") && e.$$typeof) && !Lu(e[o[r]], t[o[r]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var o5 = function(t, n) {
  try {
    return Lu(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
};
const i5 = /* @__PURE__ */ hc(o5);
var s5 = [], l5 = function(t, n, r) {
  r === void 0 && (r = {});
  var o = L.useRef(null), s = {
    onFirstUpdate: r.onFirstUpdate,
    placement: r.placement || "bottom",
    strategy: r.strategy || "absolute",
    modifiers: r.modifiers || s5
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
    return i5(o.current, g) ? o.current || g : (o.current = g, g);
  }, [s.onFirstUpdate, s.placement, s.strategy, s.modifiers, p]), m = L.useRef();
  return d0(function() {
    m.current && m.current.setOptions(h);
  }, [h]), d0(function() {
    if (!(t == null || n == null)) {
      var g = r.createPopper || e5, y = g(t, n, h);
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
}, c5 = function() {
}, u5 = function() {
  return Promise.resolve(null);
}, d5 = [];
function f5(e) {
  var t = e.placement, n = t === void 0 ? "bottom" : t, r = e.strategy, o = r === void 0 ? "absolute" : r, s = e.modifiers, u = s === void 0 ? d5 : s, c = e.referenceElement, d = e.onFirstUpdate, p = e.innerRef, h = e.children, m = L.useContext(Y3), g = L.useState(null), y = g[0], b = g[1], _ = L.useState(null), w = _[0], k = _[1];
  L.useEffect(function() {
    G3(p, y);
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
  }, [n, o, d, u, w]), E = l5(c || m, y, F), I = E.state, T = E.styles, P = E.forceUpdate, C = E.update, S = L.useMemo(function() {
    return {
      ref: b,
      style: T.popper,
      placement: I ? I.placement : n,
      hasPopperEscaped: I && I.modifiersData.hide ? I.modifiersData.hide.hasPopperEscaped : null,
      isReferenceHidden: I && I.modifiersData.hide ? I.modifiersData.hide.isReferenceHidden : null,
      arrowProps: {
        style: T.arrow,
        ref: k
      },
      forceUpdate: P || c5,
      update: C || u5
    };
  }, [b, k, n, I, T, C, P]);
  return V3(h)(S);
}
function p5(e, t, n, r) {
  return f1(e, function(o, s, u) {
    t(r, n(o), s, u);
  }), r;
}
function h5(e, t) {
  return function(n, r) {
    return p5(n, e, t(r), {});
  };
}
var m5 = Object.prototype, g5 = m5.toString, v5 = h5(function(e, t, n) {
  t != null && typeof t.toString != "function" && (t = g5.call(t)), e[t] = n;
}, n1(Xo)), Nm = {
  "top center": "top",
  "top left": "top-start",
  "top right": "top-end",
  "bottom center": "bottom",
  "bottom left": "bottom-start",
  "bottom right": "bottom-end",
  "right center": "right",
  "left center": "left"
}, y5 = Fr(Nm), b5 = v5(Nm);
function ac(e) {
  "@babel/helpers - typeof";
  return ac = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ac(e);
}
function _5(e, t) {
  if (ac(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (ac(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function w5(e) {
  var t = _5(e, "string");
  return ac(t) == "symbol" ? t : t + "";
}
function x5(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, w5(r.key), r);
  }
}
function E5(e, t, n) {
  return t && x5(e.prototype, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
var C5 = /* @__PURE__ */ function() {
  function e(n) {
    this.ref = n;
  }
  var t = e.prototype;
  return t.getBoundingClientRect = function() {
    return Fe(this.ref.current, "getBoundingClientRect") || {};
  }, E5(e, [{
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
}(), O5 = mc(function(e) {
  return new C5(qu(e) ? e : {
    current: e
  });
});
function Ho(e) {
  var t = e.children, n = e.className, r = e.content, o = Ze("content", n), s = Ge(Ho, e), u = Qe(Ho, e);
  return /* @__PURE__ */ ee.createElement(u, pe({}, s, {
    className: o
  }), pt(t) ? r : t);
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
Ho.create = Kt(Ho, function(e) {
  return {
    children: e
  };
});
function Yo(e) {
  var t = e.children, n = e.className, r = e.content, o = Ze("header", n), s = Ge(Yo, e), u = Qe(Yo, e);
  return /* @__PURE__ */ ee.createElement(u, pe({}, s, {
    className: o
  }), pt(t) ? r : t);
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
Yo.create = Kt(Yo, function(e) {
  return {
    children: e
  };
});
var Dn = /* @__PURE__ */ function(e) {
  en(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.state = {}, r.open = !1, r.zIndexWasSynced = !1, r.triggerRef = /* @__PURE__ */ ee.createRef(), r.elementRef = /* @__PURE__ */ ee.createRef(), r.getPortalProps = function() {
      var c = {}, d = r.props, p = d.on, h = d.hoverable, m = yn(p) ? p : [p];
      return h && (c.closeOnPortalMouseLeave = !0, c.mouseLeaveDelay = 300), _a(m, "hover") && (c.openOnTriggerClick = !1, c.closeOnTriggerClick = !1, c.openOnTriggerMouseEnter = !0, c.closeOnTriggerMouseLeave = !0, c.mouseLeaveDelay = 70, c.mouseEnterDelay = 50), _a(m, "click") && (c.openOnTriggerClick = !0, c.closeOnTriggerClick = !0, c.closeOnDocumentClick = !0), _a(m, "focus") && (c.openOnTriggerFocus = !0, c.closeOnTriggerBlur = !0), c;
    }, r.hideOnScroll = function(c) {
      H3(c.target) && r.elementRef.current.contains(c.target) || (r.setState({
        closed: !0
      }), Sl.unsub("scroll", r.hideOnScroll, {
        target: window
      }), r.timeoutId = setTimeout(function() {
        r.setState({
          closed: !1
        });
      }, 50), r.handleClose(c));
    }, r.handleClose = function(c) {
      Fe(r.props, "onClose", c, pe({}, r.props, {
        open: !1
      }));
    }, r.handleOpen = function(c) {
      Fe(r.props, "onOpen", c, pe({}, r.props, {
        open: !0
      }));
    }, r.handlePortalMount = function(c) {
      Fe(r.props, "onMount", c, r.props);
    }, r.handlePortalUnmount = function(c) {
      r.positionUpdate = null, Fe(r.props, "onUnmount", c, r.props);
    }, r.renderContent = function(c) {
      var d = c.placement, p = c.ref, h = c.update, m = c.style, g = r.props, y = g.basic, b = g.children, _ = g.className, w = g.content, k = g.hideOnScroll, F = g.flowing, E = g.header, I = g.inverted, T = g.popper, P = g.size, C = g.style, S = g.wide, A = r.state.contentRestProps;
      r.positionUpdate = h;
      var B = Ze("ui", b5[d], P, rn(S, "wide"), V(y, "basic"), V(F, "flowing"), V(I, "inverted"), "popup transition visible", _), U = Qe(t, r.props), re = pe({
        // Heads up! We need default styles to get working correctly `flowing`
        left: "auto",
        right: "auto",
        // This is required to be properly positioned inside wrapping `div`
        position: "initial"
      }, C), G = /* @__PURE__ */ ee.createElement(U, pe({}, A, {
        className: B,
        style: re,
        ref: r.elementRef
      }), pt(b) ? /* @__PURE__ */ ee.createElement(ee.Fragment, null, Yo.create(E, {
        autoGenerateKey: !1
      }), Ho.create(w, {
        autoGenerateKey: !1
      })) : b, k && /* @__PURE__ */ ee.createElement(Ya, {
        on: r.hideOnScroll,
        name: "scroll",
        target: "window"
      }));
      return eL(T || {}, {
        overrideProps: {
          children: G,
          ref: p,
          style: pe({
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
    var u = Ge(t, o), c = xm(u, function(p, h, m) {
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
          var S, A = C.state;
          if (!o.zIndexWasSynced) {
            var B = m == null || (S = m.style) == null ? void 0 : S.zIndex;
            fs(B) && (A.elements.popper.style.zIndex = window.getComputedStyle(A.elements.popper.firstChild).zIndex), o.zIndexWasSynced = !0;
          }
        },
        effect: function() {
          return function() {
            o.zIndexWasSynced = !1;
          };
        }
      }
    ]), I = O5(Tt(u) ? this.triggerRef : u), T = pe({}, this.getPortalProps(), F);
    return /* @__PURE__ */ ee.createElement(ea, pe({}, T, {
      onClose: this.handleClose,
      onMount: this.handlePortalMount,
      onOpen: this.handleOpen,
      onUnmount: this.handlePortalUnmount,
      trigger: _,
      triggerRef: this.triggerRef
    }), /* @__PURE__ */ ee.createElement(f5, {
      modifiers: E,
      placement: Nm[y],
      strategy: b ? "fixed" : null,
      referenceElement: I
    }, this.renderContent));
  }, t;
}(Qn);
Dn.handledProps = ["as", "basic", "children", "className", "content", "context", "disabled", "eventsEnabled", "flowing", "header", "hideOnScroll", "hoverable", "inverted", "offset", "on", "onClose", "onMount", "onOpen", "onUnmount", "pinned", "popper", "popperDependencies", "popperModifiers", "position", "positionFixed", "size", "style", "trigger", "wide"];
Dn.propTypes = process.env.NODE_ENV !== "production" ? {
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
  position: l.oneOf(y5),
  /** Tells `Popper.js` to use the `position: fixed` strategy to position the popover. */
  positionFixed: l.bool,
  /** A wrapping element for an actual content that will be used for positioning. */
  popper: Ct,
  /** An array containing custom settings for the Popper.js modifiers. */
  popperModifiers: l.array,
  /** A popup can have dependencies which update will schedule a position update. */
  popperDependencies: l.array,
  /** Popup size. */
  size: l.oneOf(ta(fr, "medium", "big", "massive")),
  /** Custom Popup style. */
  style: l.object,
  /** Element to be rendered in-place where the popup is defined. */
  trigger: l.node,
  /** Popup width. */
  wide: l.oneOfType([l.bool, l.oneOf(["very"])])
} : {};
Dn.defaultProps = {
  disabled: !1,
  eventsEnabled: !0,
  on: ["click", "hover"],
  pinned: !1,
  popperModifiers: [],
  position: "top left"
};
Dn.Content = Ho;
Dn.Header = Yo;
var S5 = function(t) {
  if (t) {
    var n, r, o;
    return typeof t.window == "object" && t.window === t ? t.event : (n = (r = t.ownerDocument) == null || (o = r.defaultView) == null ? void 0 : o.event) != null ? n : void 0;
  }
}, w0 = function(t, n) {
  return t ? !!t[n] : !1;
}, T5 = function(t) {
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
    var h = typeof u > "u" ? s : u.current, m = S5(window), g = function(b) {
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
}, P5 = /* @__PURE__ */ function() {
  function e(t) {
    return T5(t), null;
  }
  return e.defaultProps = {
    capture: !1
  }, e;
}(), k5 = {
  current: typeof document > "u" ? null : document
};
function oc(e) {
  var t = e.className, n = e.children, r = e.content, o = Ze("pushable", t), s = Ge(oc, e), u = Qe(oc, e);
  return /* @__PURE__ */ ee.createElement(u, pe({}, s, {
    className: o
  }), pt(n) ? r : n);
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
  var t = e.className, n = e.dimmed, r = e.children, o = e.content, s = Ze("pusher", V(n, "dimmed"), t), u = Ge(ic, e), c = Qe(ic, e);
  return /* @__PURE__ */ ee.createElement(c, pe({}, u, {
    className: s
  }), pt(r) ? o : r);
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
      Fe(o.props, u, null, o.props);
    }, o.handleAnimationEnd = function() {
      var s = o.props.visible, u = s ? "onShow" : "onHidden";
      o.setState({
        animationTick: 0
      }), Fe(o.props, u, null, o.props);
    }, o.handleDocumentClick = function(s) {
      Io(o.ref.current, s) || (o.skipNextCallback = !0, Fe(o.props, "onHide", s, pe({}, o.props, {
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
    var o = this.props, s = o.animation, u = o.className, c = o.children, d = o.content, p = o.direction, h = o.target, m = o.visible, g = o.width, y = this.state.animationTick, b = Ze("ui", s, p, g, V(y > 0, "animating"), V(m, "visible"), "sidebar", u), _ = Ge(t, this.props), w = Qe(t, this.props), k = qu(h) ? {
      targetRef: h
    } : {
      target: h
    };
    return /* @__PURE__ */ ee.createElement(ee.Fragment, null, /* @__PURE__ */ ee.createElement(ur, {
      innerRef: this.ref
    }, /* @__PURE__ */ ee.createElement(w, pe({}, _, {
      className: b
    }), pt(c) ? d : c)), m && /* @__PURE__ */ ee.createElement(P5, pe({
      listener: this.handleDocumentClick,
      type: "click"
    }, k)));
  }, t;
}(Qn);
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
  target: l.oneOfType([zD, ym]),
  /** Controls whether or not the sidebar is visible on the page. */
  visible: l.bool,
  /** Sidebar width. */
  width: l.oneOf(["very thin", "thin", "wide", "very wide"])
} : {};
ti.defaultProps = {
  direction: "left",
  target: k5,
  visible: !1
};
ti.animationDuration = 500;
ti.autoControlledProps = ["visible"];
ti.Pushable = oc;
ti.Pusher = ic;
const xw = UI({
  collapsible: !1,
  isCollapsed: !1,
  toggleCollapse: () => {
  },
  collapseTrigger: "button"
}), N5 = () => HI(xw), I5 = "_card_8pdnj_9", A5 = "_fluid_8pdnj_45", R5 = "_notFluid_8pdnj_53", M5 = "_elevated_8pdnj_71", D5 = "_outlined_8pdnj_81", L5 = "_flat_8pdnj_93", F5 = "_soft_8pdnj_107", $5 = "_glass_8pdnj_121", B5 = "_gradient_8pdnj_137", j5 = "_themePrimary_8pdnj_157", W5 = "_themeSecondary_8pdnj_179", z5 = "_themeSuccess_8pdnj_201", U5 = "_themeWarning_8pdnj_223", H5 = "_themeDanger_8pdnj_245", Y5 = "_themeInfo_8pdnj_267", V5 = "_themeDark_8pdnj_289", q5 = "_radiusNone_8pdnj_323", G5 = "_radiusSm_8pdnj_331", K5 = "_radiusMd_8pdnj_339", Z5 = "_radiusLg_8pdnj_347", X5 = "_radiusXl_8pdnj_355", Q5 = "_radiusFull_8pdnj_363", J5 = "_padNone_8pdnj_379", e4 = "_padSm_8pdnj_387", t4 = "_padMd_8pdnj_395", n4 = "_padLg_8pdnj_403", r4 = "_accentTop_8pdnj_419", a4 = "_accentLeft_8pdnj_429", o4 = "_accentBottom_8pdnj_439", i4 = "_accentRight_8pdnj_449", s4 = "_hoverable_8pdnj_467", l4 = "_hoverGlow_8pdnj_479", c4 = "_clickable_8pdnj_487", u4 = "_horizontal_8pdnj_523", d4 = "_vertical_8pdnj_533", f4 = "_responsiveHorizontal_8pdnj_543", p4 = "_mediaLeft_8pdnj_567", h4 = "_collapseGrid_8pdnj_587", m4 = "_collapseGridCollapsed_8pdnj_601", g4 = "_collapseContent_8pdnj_609", v4 = "_collapseButton_8pdnj_623", y4 = "_chevronIcon_8pdnj_657", b4 = "_chevronRotated_8pdnj_669", _4 = "_headerClickable_8pdnj_677", w4 = "_header_8pdnj_677", x4 = "_headerWithDivider_8pdnj_721", E4 = "_headerLeading_8pdnj_729", C4 = "_headerAvatar_8pdnj_745", O4 = "_headerTextGroup_8pdnj_759", S4 = "_title_8pdnj_771", T4 = "_subtitle_8pdnj_793", P4 = "_headerExtra_8pdnj_807", k4 = "_body_8pdnj_829", N4 = "_bodyPaddedSm_8pdnj_847", I4 = "_bodyPaddedMd_8pdnj_855", A4 = "_bodyPaddedLg_8pdnj_863", R4 = "_bodyPaddedNone_8pdnj_871", M4 = "_footer_8pdnj_887", D4 = "_footerWithDivider_8pdnj_903", L4 = "_alignLeft_8pdnj_913", F4 = "_alignCenter_8pdnj_921", $4 = "_alignRight_8pdnj_929", B4 = "_alignBetween_8pdnj_937", j4 = "_mediaContainer_8pdnj_953", W4 = "_mediaImg_8pdnj_973", z4 = "_mediaZoomOnHover_8pdnj_989", U4 = "_mediaOverlay_8pdnj_997", H4 = "_mediaBadgeSlot_8pdnj_1027", Y4 = "_ratio16x9_8pdnj_1043", V4 = "_ratio4x3_8pdnj_1051", q4 = "_ratio1x1_8pdnj_1059", G4 = "_ratio21x9_8pdnj_1067", K4 = "_ratioAuto_8pdnj_1075", Z4 = "_iconBadge_8pdnj_1115", X4 = "_iconBadgeCircle_8pdnj_1153", Q4 = "_iconBadgeSm_8pdnj_1161", J4 = "_iconBadgeLg_8pdnj_1173", e9 = "_badge_8pdnj_1193", t9 = "_badgeDefault_8pdnj_1219", n9 = "_badgePrimary_8pdnj_1229", r9 = "_badgeSuccess_8pdnj_1239", a9 = "_badgeWarning_8pdnj_1249", o9 = "_badgeDanger_8pdnj_1259", i9 = "_badgeGlass_8pdnj_1279", s9 = "_divider_8pdnj_1315", l9 = "_loadingOverlay_8pdnj_1339", c9 = "_spinner_8pdnj_1377", Pe = {
  card: I5,
  fluid: A5,
  notFluid: R5,
  elevated: M5,
  outlined: D5,
  flat: L5,
  soft: F5,
  glass: $5,
  gradient: B5,
  themePrimary: j5,
  themeSecondary: W5,
  themeSuccess: z5,
  themeWarning: U5,
  themeDanger: H5,
  themeInfo: Y5,
  themeDark: V5,
  radiusNone: q5,
  radiusSm: G5,
  radiusMd: K5,
  radiusLg: Z5,
  radiusXl: X5,
  radiusFull: Q5,
  padNone: J5,
  padSm: e4,
  padMd: t4,
  padLg: n4,
  accentTop: r4,
  accentLeft: a4,
  accentBottom: o4,
  accentRight: i4,
  hoverable: s4,
  hoverGlow: l4,
  clickable: c4,
  horizontal: u4,
  vertical: d4,
  responsiveHorizontal: f4,
  mediaLeft: p4,
  collapseGrid: h4,
  collapseGridCollapsed: m4,
  collapseContent: g4,
  collapseButton: v4,
  chevronIcon: y4,
  chevronRotated: b4,
  headerClickable: _4,
  header: w4,
  headerWithDivider: x4,
  headerLeading: E4,
  headerAvatar: C4,
  headerTextGroup: O4,
  title: S4,
  subtitle: T4,
  headerExtra: P4,
  body: k4,
  bodyPaddedSm: N4,
  bodyPaddedMd: I4,
  bodyPaddedLg: A4,
  bodyPaddedNone: R4,
  footer: M4,
  footerWithDivider: D4,
  alignLeft: L4,
  alignCenter: F4,
  alignRight: $4,
  alignBetween: B4,
  mediaContainer: j4,
  mediaImg: W4,
  mediaZoomOnHover: z4,
  mediaOverlay: U4,
  mediaBadgeSlot: H4,
  ratio16x9: Y4,
  ratio4x3: V4,
  ratio1x1: q4,
  ratio21x9: G4,
  ratioAuto: K4,
  iconBadge: Z4,
  iconBadgeCircle: X4,
  iconBadgeSm: Q4,
  iconBadgeLg: J4,
  badge: e9,
  badgeDefault: t9,
  badgePrimary: n9,
  badgeSuccess: r9,
  badgeWarning: a9,
  badgeDanger: o9,
  badgeGlass: i9,
  divider: s9,
  loadingOverlay: l9,
  spinner: c9
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
  const m = N5(), g = m.collapsible, { isCollapsed: y } = m, b = g && m.collapseTrigger === "header", _ = (E) => {
    p && p(E), b && m.toggleCollapse && m.toggleCollapse();
  }, w = (E) => {
    E.stopPropagation(), m.toggleCollapse && m.toggleCollapse();
  }, k = [Pe.header, o ? Pe.headerWithDivider : "", b ? Pe.headerClickable : "", c].filter(Boolean).join(" "), F = () => !g || !s ? null : u ? /* @__PURE__ */ O(
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
      className: Pe.collapseButton,
      onClick: w,
      "aria-label": y ? "Expandir tarjeta" : "Colapsar tarjeta",
      children: /* @__PURE__ */ O(je, { name: "chevron up", className: `${Pe.chevronIcon} ${y ? Pe.chevronRotated : ""}`, style: { margin: 0 } })
    }
  );
  return h ? /* @__PURE__ */ ie(
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
  ) : /* @__PURE__ */ ie(
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
        /* @__PURE__ */ ie("div", { className: Pe.headerLeading, children: [
          n && /* @__PURE__ */ O("div", { className: Pe.headerAvatar, children: n }),
          (e || t) && /* @__PURE__ */ ie("div", { className: Pe.headerTextGroup, children: [
            e && (typeof e == "string" ? /* @__PURE__ */ O("h3", { className: Pe.title, children: e }) : e),
            t && (typeof t == "string" ? /* @__PURE__ */ O("p", { className: Pe.subtitle, children: t }) : t)
          ] })
        ] }),
        /* @__PURE__ */ ie("div", { className: Pe.headerExtra, children: [
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
const u9 = {
  none: Pe.bodyPaddedNone,
  small: Pe.bodyPaddedSm,
  medium: Pe.bodyPaddedMd,
  large: Pe.bodyPaddedLg
}, Ew = ({ children: e, padding: t = "medium", className: n = "", style: r = {} }) => {
  const o = [Pe.body, u9[t] || Pe.bodyPaddedMd, n].filter(Boolean).join(" ");
  return /* @__PURE__ */ O("div", { className: o, style: r, children: e });
};
Ew.propTypes = {
  children: l.node,
  padding: l.oneOf(["none", "small", "medium", "large"]),
  className: l.string,
  style: l.object
};
const d9 = {
  left: Pe.alignLeft,
  center: Pe.alignCenter,
  right: Pe.alignRight,
  between: Pe.alignBetween
}, Cw = ({ children: e, align: t = "right", divider: n = !1, className: r = "", style: o = {} }) => {
  const s = [Pe.footer, d9[t] || Pe.alignRight, n ? Pe.footerWithDivider : "", r].filter(Boolean).join(" ");
  return /* @__PURE__ */ O("footer", { className: s, style: o, children: e });
};
Cw.propTypes = {
  children: l.node,
  align: l.oneOf(["left", "center", "right", "between"]),
  divider: l.bool,
  className: l.string,
  style: l.object
};
const f9 = {
  "16/9": Pe.ratio16x9,
  "4/3": Pe.ratio4x3,
  "1/1": Pe.ratio1x1,
  "21/9": Pe.ratio21x9,
  auto: Pe.ratioAuto
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
    Pe.mediaContainer,
    r === "left" ? Pe.mediaLeft : "",
    f9[n] || Pe.ratio16x9,
    u ? Pe.mediaZoomOnHover : "",
    c
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ ie("div", { className: h, style: d, children: [
    s && /* @__PURE__ */ O("div", { className: Pe.mediaBadgeSlot, children: s }),
    p || e && /* @__PURE__ */ O("img", { src: e, alt: t, className: Pe.mediaImg }),
    o && /* @__PURE__ */ O("div", { className: Pe.mediaOverlay, children: typeof o == "boolean" ? null : o })
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
const p9 = {
  default: Pe.badgeDefault,
  primary: Pe.badgePrimary,
  success: Pe.badgeSuccess,
  warning: Pe.badgeWarning,
  danger: Pe.badgeDanger,
  glass: Pe.badgeGlass
}, Sw = ({ children: e, variant: t = "default", color: n, textColor: r, icon: o, className: s = "", style: u = {} }) => {
  const c = [Pe.badge, p9[t] || Pe.badgeDefault, s].filter(Boolean).join(" "), d = {
    ...u,
    ...n ? { backgroundColor: n } : {},
    ...r ? { color: r } : {}
  };
  return /* @__PURE__ */ ie("span", { className: c, style: d, children: [
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
  const r = [Pe.divider, e].filter(Boolean).join(" "), o = {
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
  primary: Pe.themePrimary,
  secondary: Pe.themeSecondary,
  success: Pe.themeSuccess,
  warning: Pe.themeWarning,
  danger: Pe.themeDanger,
  info: Pe.themeInfo
}, h9 = {
  small: Pe.iconBadgeSm,
  medium: "",
  large: Pe.iconBadgeLg
}, Pw = ({ name: e, color: t, shape: n = "circle", size: r = "medium", bgColor: o, iconColor: s, className: u = "", style: c = {}, children: d }) => {
  const p = [
    Pe.iconBadge,
    n === "circle" ? Pe.iconBadgeCircle : "",
    h9[r] || "",
    t && Ip[t] ? Ip[t] : "",
    u
  ].filter(Boolean).join(" "), h = {
    ...c,
    ...o ? { "--ik-icon-bg": o } : {},
    ...s ? { "--ik-icon-color": s } : {}
  };
  return t && !Ip[t] && (h["--ik-icon-color"] || (h["--ik-icon-color"] = t)), /* @__PURE__ */ O("div", { className: p, style: h, children: d || e && /* @__PURE__ */ O(je, { name: e, style: { margin: 0 } }) });
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
  primary: Pe.themePrimary,
  secondary: Pe.themeSecondary,
  success: Pe.themeSuccess,
  warning: Pe.themeWarning,
  danger: Pe.themeDanger,
  info: Pe.themeInfo,
  dark: Pe.themeDark
}, x0 = {
  none: Pe.radiusNone,
  small: Pe.radiusSm,
  sm: Pe.radiusSm,
  medium: Pe.radiusMd,
  md: Pe.radiusMd,
  large: Pe.radiusLg,
  lg: Pe.radiusLg,
  xl: Pe.radiusXl,
  full: Pe.radiusFull
}, m9 = {
  none: Pe.padNone,
  small: Pe.padSm,
  medium: Pe.padMd,
  large: Pe.padLg
}, Rp = {
  top: Pe.accentTop,
  left: Pe.accentLeft,
  bottom: Pe.accentBottom,
  right: Pe.accentRight
}, g9 = (e) => {
  if (!e || e === "none")
    return [];
  if (Array.isArray(e))
    return e.map((t) => Rp[String(t).trim().toLowerCase()]).filter(Boolean);
  if (typeof e == "string") {
    const t = e.trim().toLowerCase();
    return t === "all" ? [Pe.accentTop, Pe.accentRight, Pe.accentBottom, Pe.accentLeft] : t.split(/[\s,+/|-]+/).map((r) => r.trim()).map((r) => Rp[r]).filter(Boolean);
  }
  return typeof e == "object" ? Object.keys(e).filter((t) => !!e[t]).map((t) => Rp[t.toLowerCase()]).filter(Boolean) : [];
}, v9 = {
  elevated: Pe.elevated,
  outlined: Pe.outlined,
  flat: Pe.flat,
  soft: Pe.soft,
  glass: Pe.glass,
  gradient: Pe.gradient
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
    collapsed: T,
    defaultCollapsed: P = !1,
    onCollapseChange: C,
    collapseTrigger: S = "button",
    className: A = "",
    style: B = {},
    onClick: U,
    onKeyDown: re,
    tabIndex: G,
    role: ae
  } = e, he = T !== void 0, [ye, ke] = at(P), se = he ? T : ye, me = () => {
    const W = !se;
    he || ke(W), C && C(W);
  }, X = YI(() => ({
    collapsible: I,
    isCollapsed: se,
    toggleCollapse: me,
    collapseTrigger: S
  }), [I, se, S]), te = o && Ap[o], oe = o && !Ap[o], _e = {
    ...B
  };
  s && (_e["--ik-card-bg"] = s), u && (_e["--ik-card-text"] = u), c && (_e["--ik-card-border"] = c), d && (_e["--ik-card-accent"] = d), p && (_e["--ik-card-glow"] = p), oe && (_e["--ik-card-accent"] = o, p || (_e["--ik-card-glow"] = o), r === "soft" && (_e["--ik-card-border-soft"] = o)), k && !x0[k] && (_e["--ik-card-radius"] = k);
  let Se = Pe.vertical;
  m === "horizontal" && (Se = g ? Pe.responsiveHorizontal : Pe.horizontal);
  const ve = _ || typeof U == "function" && !I, ue = [
    Pe.card,
    v9[r] || Pe.elevated,
    te ? Ap[o] : "",
    w ? Pe.fluid : Pe.notFluid,
    x0[k] || "",
    F ? m9[F] : "",
    ...g9(h),
    y ? Pe.hoverable : "",
    b ? Pe.hoverGlow : "",
    ve ? Pe.clickable : "",
    Se,
    A
  ].filter(Boolean).join(" "), xe = (W) => {
    re && re(W), ve && (W.key === "Enter" || W.key === " ") && (W.preventDefault(), U && U(W));
  }, ge = () => {
    if (!I)
      return n;
    const W = ee.Children.toArray(n), z = W.findIndex((q) => {
      var K, le;
      return ee.isValidElement(q) && (q.type === Rd || ((K = q.type) == null ? void 0 : K.displayName) === "CardHeader" || ((le = q.props) == null ? void 0 : le.displayName) === "CardHeader");
    });
    if (z === -1)
      return /* @__PURE__ */ O("div", { className: `${Pe.collapseGrid} ${se ? Pe.collapseGridCollapsed : ""}`, children: /* @__PURE__ */ O("div", { className: Pe.collapseContent, children: n }) });
    const $ = W[z], D = W.filter((q, K) => K !== z);
    return /* @__PURE__ */ ie(Ca, { children: [
      $,
      /* @__PURE__ */ O("div", { className: `${Pe.collapseGrid} ${se ? Pe.collapseGridCollapsed : ""}`, children: /* @__PURE__ */ O("div", { className: Pe.collapseContent, children: D }) })
    ] });
  };
  return /* @__PURE__ */ O(xw.Provider, { value: X, children: /* @__PURE__ */ ie(
    "div",
    {
      ref: t,
      className: ue,
      style: _e,
      onClick: ve ? U : void 0,
      onKeyDown: ve ? xe : re,
      role: ae || (ve ? "button" : void 0),
      tabIndex: G !== void 0 ? G : ve ? 0 : void 0,
      children: [
        ge(),
        E && /* @__PURE__ */ ie("div", { className: Pe.loadingOverlay, children: [
          /* @__PURE__ */ O("div", { className: Pe.spinner }),
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
const y9 = "_container_yq5hj_9", b9 = "_pos_left_yq5hj_23", _9 = "_pos_right_yq5hj_35", w9 = "_pos_top_yq5hj_47", x9 = "_pos_bottom_yq5hj_59", E9 = "_align_left_yq5hj_71", C9 = "_align_center_yq5hj_81", O9 = "_align_right_yq5hj_91", S9 = "_titleGroup_yq5hj_101", T9 = "_titleLabel_yq5hj_113", P9 = "_descriptionLabel_yq5hj_127", k9 = "_disabled_yq5hj_141", N9 = "_semanticToggle_yq5hj_155", I9 = "_small_yq5hj_321", A9 = "_medium_yq5hj_331", R9 = "_large_yq5hj_339", Xr = {
  container: y9,
  pos_left: b9,
  pos_right: _9,
  pos_top: w9,
  pos_bottom: x9,
  align_left: E9,
  align_center: C9,
  align_right: O9,
  titleGroup: S9,
  titleLabel: T9,
  descriptionLabel: P9,
  disabled: k9,
  semanticToggle: N9,
  small: I9,
  medium: A9,
  large: R9
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
    activeColor: T,
    inactiveColor: P,
    size: C = "medium",
    className: S = "",
    style: A = {},
    id: B,
    ...U
  } = e, re = (ve, ue) => {
    g || y || o && o(ue.checked, ve, ue);
  }, G = C0(k || E || T || w || "primary"), ae = C0(F || I || P || "#cbd5e1"), he = {
    ...A,
    "--ik-toggle-true-color": G,
    "--ik-toggle-false-color": ae
  }, ye = Xr[C] || Xr.medium, ke = g || y ? Xr.disabled : "", se = (p || d || h || "left").toLowerCase(), me = se === "top" || se === "left", X = Xr[`pos_${se}`] || Xr.pos_left, te = Xr[`align_${m}`] || "", _e = !!(u || c) ? /* @__PURE__ */ ie("div", { className: `${Xr.titleGroup} ${te}`.trim(), children: [
    u && /* @__PURE__ */ O("span", { className: Xr.titleLabel, children: u }),
    c && /* @__PURE__ */ O("span", { className: Xr.descriptionLabel, children: c })
  ] }) : null, Se = /* @__PURE__ */ O(
    Xn,
    {
      ...U,
      ref: t,
      id: B,
      name: b,
      value: _,
      toggle: !0,
      label: s,
      checked: !!n,
      defaultChecked: r,
      disabled: g || y,
      onChange: re,
      className: Xr.semanticToggle
    }
  );
  return /* @__PURE__ */ O("div", { className: `${Xr.container} ${X} ${ye} ${ke} ${S}`.trim(), style: he, children: me ? /* @__PURE__ */ ie(Ca, { children: [
    _e,
    Se
  ] }) : /* @__PURE__ */ ie(Ca, { children: [
    Se,
    _e
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
const M9 = "_container_1ffc4_9", D9 = "_fluid_1ffc4_31", L9 = "_labelRoot_1ffc4_49", F9 = "_labelText_1ffc4_73", $9 = "_labelRequired_1ffc4_81", B9 = "_infoIcon_1ffc4_91", j9 = "_controlBox_1ffc4_123", W9 = "_controlBoxMultiple_1ffc4_163", z9 = "_controlBoxOpen_1ffc4_189", U9 = "_controlBoxFocused_1ffc4_191", H9 = "_rounded_1ffc4_205", Y9 = "_size_small_1ffc4_215", V9 = "_searchInputSingle_1ffc4_241", q9 = "_placeholderSingle_1ffc4_257", G9 = "_selectedSingle_1ffc4_259", K9 = "_size_medium_1ffc4_271", Z9 = "_size_large_1ffc4_297", X9 = "_disabled_1ffc4_355", Q9 = "_error_1ffc4_375", J9 = "_errorMessage_1ffc4_395", eB = "_contentAreaSingle_1ffc4_433", tB = "_fadedText_1ffc4_545", nB = "_hiddenText_1ffc4_553", rB = "_tagsWrapper_1ffc4_571", aB = "_tag_1ffc4_571", oB = "_tagText_1ffc4_641", iB = "_tagDeleteIcon_1ffc4_655", sB = "_placeholderMultiple_1ffc4_681", lB = "_searchInputMultiple_1ffc4_697", cB = "_actionIconsGroup_1ffc4_735", uB = "_clearButton_1ffc4_757", dB = "_chevronIcon_1ffc4_793", fB = "_chevronIconOpen_1ffc4_809", pB = "_spinnerIcon_1ffc4_819", hB = "_spin_1ffc4_819", mB = "_dropdownMenu_1ffc4_859", gB = "_menuItem_1ffc4_941", vB = "_menuItemHover_1ffc4_979", yB = "_menuItemActive_1ffc4_991", bB = "_menuItemDisabled_1ffc4_1003", _B = "_checkboxBox_1ffc4_1019", wB = "_checkboxBoxChecked_1ffc4_1057", xB = "_optionIcon_1ffc4_1077", EB = "_optionFlag_1ffc4_1125", CB = "_optionText_1ffc4_1135", OB = "_optionDescription_1ffc4_1153", SB = "_noResults_1ffc4_1167", ut = {
  container: M9,
  fluid: D9,
  labelRoot: L9,
  labelText: F9,
  labelRequired: $9,
  infoIcon: B9,
  controlBox: j9,
  controlBoxMultiple: W9,
  controlBoxOpen: z9,
  controlBoxFocused: U9,
  rounded: H9,
  size_small: Y9,
  searchInputSingle: V9,
  placeholderSingle: q9,
  selectedSingle: G9,
  size_medium: K9,
  size_large: Z9,
  disabled: X9,
  error: Q9,
  errorMessage: J9,
  contentAreaSingle: eB,
  fadedText: tB,
  hiddenText: nB,
  tagsWrapper: rB,
  tag: aB,
  tagText: oB,
  tagDeleteIcon: iB,
  placeholderMultiple: sB,
  searchInputMultiple: lB,
  actionIconsGroup: cB,
  clearButton: uB,
  chevronIcon: dB,
  chevronIconOpen: fB,
  spinnerIcon: pB,
  spin: hB,
  dropdownMenu: mB,
  menuItem: gB,
  menuItemHover: vB,
  menuItemActive: yB,
  menuItemDisabled: bB,
  checkboxBox: _B,
  checkboxBoxChecked: wB,
  optionIcon: xB,
  optionFlag: EB,
  optionText: CB,
  optionDescription: OB,
  noResults: SB
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
const TB = () => null, Vs = pc((e, t) => {
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
    options: T = [],
    value: P,
    defaultValue: C,
    onChange: S,
    placeholder: A = "Seleccionar...",
    noResultsMessage: B = "No se encontraron resultados",
    className: U = "",
    style: re = {},
    id: G,
    name: ae,
    onOpen: he,
    onClose: ye,
    ...ke
  } = e, se = En(null), me = En(null);
  VI(t, () => se.current);
  const X = !!(g || y), te = !!(m || X), oe = P !== void 0, [_e, Se] = at(() => C !== void 0 ? C : te ? [] : ""), ve = oe ? P : _e, ue = te ? Array.isArray(ve) ? ve : ve != null && ve !== "" ? [ve] : [] : [], [xe, ge] = at(!1), [W, z] = at(""), [$, D] = at(-1), q = G ? `${G}-menu` : "custom-dropdown-menu";
  Gt(() => {
    const Te = (Q) => {
      se.current && !se.current.contains(Q.target) && (ge(!1), z(""), D(-1), ye && ye(Q, { ...e, value: ve }));
    };
    return document.addEventListener("mousedown", Te), () => {
      document.removeEventListener("mousedown", Te);
    };
  }, [ve, ye, e]);
  const K = T.filter((Te) => te && !X && ue.includes(Te.value) ? !1 : !b || !W.trim() ? !0 : (typeof Te.text == "string" ? Te.text : String(Te.text || "")).toLowerCase().includes(W.toLowerCase())), le = (Te) => {
    k || (ge(!0), D(-1), b && me.current && me.current.focus(), he && he(Te, { ...e, value: ve }));
  }, Ie = (Te) => {
    ge(!1), z(""), D(-1), ye && ye(Te, { ...e, value: ve });
  }, de = (Te) => {
    k || (xe ? Ie(Te) : le(Te));
  }, Oe = (Te, Q) => {
    if (!(k || Q.disabled))
      if (te) {
        let ze;
        X ? ze = ue.includes(Q.value) ? ue.filter((ft) => ft !== Q.value) : [...ue, Q.value] : (ze = [...ue, Q.value], z("")), oe || Se(ze), S && S(Te, {
          ...e,
          value: ze,
          selectedOption: Q
        }), X && me.current ? me.current.focus() : X || ge(!1);
      } else
        oe || Se(Q.value), S && S(Te, {
          ...e,
          value: Q.value,
          selectedOption: Q
        }), ge(!1), z("");
  }, fe = (Te, Q) => {
    if (Te.stopPropagation(), k)
      return;
    const ze = ue.filter((lt) => lt !== Q);
    oe || Se(ze), S && S(Te, {
      ...e,
      value: ze
    });
  }, Y = (Te) => {
    if (Te.stopPropagation(), k)
      return;
    const Q = te ? [] : "";
    oe || Se(Q), z(""), S && S(Te, {
      ...e,
      value: Q
    });
  }, ne = (Te) => {
    if (!k)
      if (Te.key === "ArrowDown") {
        if (Te.preventDefault(), !xe) {
          le(Te);
          return;
        }
        D((Q) => {
          const ze = Q + 1;
          return ze >= K.length ? 0 : ze;
        });
      } else if (Te.key === "ArrowUp") {
        if (Te.preventDefault(), !xe) {
          le(Te);
          return;
        }
        D((Q) => {
          const ze = Q - 1;
          return ze < 0 ? K.length - 1 : ze;
        });
      } else Te.key === "Enter" ? (Te.preventDefault(), xe ? $ >= 0 && $ < K.length && Oe(Te, K[$]) : le(Te)) : Te.key === "Escape" && (Te.preventDefault(), Ie(Te));
  }, we = te ? ue.length > 0 : ve != null && ve !== "", Ne = _ && we && !k, Re = te ? null : T.find((Te) => String(Te.value) === String(ve)), Be = () => {
    if (!n)
      return null;
    if (ee.isValidElement(n))
      return n;
    const Te = r || o;
    return /* @__PURE__ */ ie("label", { htmlFor: G, className: `${ut.labelRoot} ${c}`.trim(), children: [
      /* @__PURE__ */ O("span", { className: ut.labelText, children: n }),
      d ? /* @__PURE__ */ O("span", { className: ut.labelRequired, children: " *" }) : null,
      Te ? /* @__PURE__ */ O(
        Dn,
        {
          wide: s ? "very" : !0,
          hoverable: s,
          position: u,
          content: Te,
          trigger: /* @__PURE__ */ O(je, { name: "info circle", className: ut.infoIcon })
        }
      ) : null
    ] });
  }, Le = () => h ? /* @__PURE__ */ ie("div", { className: ut.errorMessage, children: [
    /* @__PURE__ */ O(je, { name: "exclamation circle" }),
    /* @__PURE__ */ O("span", { children: h })
  ] }) : null, tt = ut[`size_${I}`] || ut.size_medium, Xe = !!(p || h), Ve = [
    ut.container,
    w ? ut.fluid : "",
    E ? ut.rounded : "",
    tt,
    k ? ut.disabled : "",
    Xe ? ut.error : "",
    U
  ].filter(Boolean).join(" "), He = [ut.controlBox, te ? ut.controlBoxMultiple : "", xe ? ut.controlBoxOpen : ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ ie("div", { className: Ve, style: re, ref: se, onKeyDown: ne, ...ke, children: [
    Be(),
    /* @__PURE__ */ ie(
      "div",
      {
        className: He,
        onClick: de,
        role: "combobox",
        "aria-expanded": xe,
        "aria-controls": q,
        "aria-haspopup": "listbox",
        tabIndex: k ? -1 : 0,
        children: [
          !te && /* @__PURE__ */ ie("div", { className: ut.contentAreaSingle, children: [
            !Re && /* @__PURE__ */ O("span", { className: `${ut.placeholderSingle} ${xe && W ? ut.hiddenText : ""}`, children: A }),
            Re && /* @__PURE__ */ ie("span", { className: `${ut.selectedSingle} ${xe && W ? ut.fadedText : ""}`, children: [
              Re.icon && /* @__PURE__ */ O(je, { name: Re.icon, className: ut.optionIcon }),
              Re.flag && /* @__PURE__ */ O("i", { className: `${Re.flag} flag ${ut.optionFlag}` }),
              /* @__PURE__ */ O("span", { className: ut.optionText, children: Re.text })
            ] }),
            b && /* @__PURE__ */ O(
              "input",
              {
                ref: me,
                type: "text",
                name: ae,
                id: G,
                className: ut.searchInputSingle,
                value: xe ? W : "",
                onChange: (Te) => z(Te.target.value),
                onClick: (Te) => {
                  Te.stopPropagation(), xe || le(Te);
                },
                disabled: k,
                autoComplete: "off",
                "aria-label": n ? String(n) : A
              }
            )
          ] }),
          te && /* @__PURE__ */ ie("div", { className: ut.tagsWrapper, children: [
            ue.map((Te) => {
              const Q = T.find((ze) => ze.value === Te) || { text: Te };
              return /* @__PURE__ */ ie("span", { className: ut.tag, children: [
                Q.icon && /* @__PURE__ */ O(je, { name: Q.icon, className: ut.optionIcon }),
                Q.flag && /* @__PURE__ */ O("i", { className: `${Q.flag} flag ${ut.optionFlag}` }),
                /* @__PURE__ */ O("span", { className: ut.tagText, children: Q.text }),
                !k && /* @__PURE__ */ O(
                  je,
                  {
                    name: "close",
                    className: ut.tagDeleteIcon,
                    onClick: (ze) => fe(ze, Te)
                  }
                )
              ] }, Te);
            }),
            ue.length === 0 && !W && /* @__PURE__ */ O("span", { className: ut.placeholderMultiple, children: A }),
            b && /* @__PURE__ */ O(
              "input",
              {
                ref: me,
                type: "text",
                name: ae,
                id: G,
                className: ut.searchInputMultiple,
                value: W,
                onChange: (Te) => z(Te.target.value),
                onClick: (Te) => {
                  Te.stopPropagation(), xe || le(Te);
                },
                disabled: k,
                autoComplete: "off",
                "aria-label": n ? String(n) : A
              }
            )
          ] }),
          /* @__PURE__ */ ie("div", { className: ut.actionIconsGroup, children: [
            F && /* @__PURE__ */ O(je, { name: "spinner", className: ut.spinnerIcon }),
            Ne && !F && /* @__PURE__ */ O("button", { type: "button", className: ut.clearButton, onClick: Y, title: "Limpiar selección", "aria-label": "Limpiar", children: /* @__PURE__ */ O(je, { name: "close" }) }),
            /* @__PURE__ */ O(je, { name: "dropdown", className: `${ut.chevronIcon} ${xe ? ut.chevronIconOpen : ""}` })
          ] })
        ]
      }
    ),
    xe && !k && /* @__PURE__ */ O("ul", { className: ut.dropdownMenu, id: q, role: "listbox", children: K.length === 0 ? /* @__PURE__ */ O("li", { className: ut.noResults, children: B }) : K.map((Te, Q) => {
      const ze = te ? ue.includes(Te.value) : String(ve) === String(Te.value), lt = $ === Q, ft = [
        ut.menuItem,
        ze ? ut.menuItemActive : "",
        lt ? ut.menuItemHover : "",
        Te.disabled ? ut.menuItemDisabled : ""
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ ie(
        "li",
        {
          className: ft,
          onClick: (nt) => Oe(nt, Te),
          role: "option",
          "aria-selected": ze,
          children: [
            X && /* @__PURE__ */ O("span", { className: `${ut.checkboxBox} ${ze ? ut.checkboxBoxChecked : ""}` }),
            Te.icon && /* @__PURE__ */ O(je, { name: Te.icon, className: ut.optionIcon }),
            Te.flag && /* @__PURE__ */ O("i", { className: `${Te.flag} flag ${ut.optionFlag}` }),
            /* @__PURE__ */ O("span", { className: ut.optionText, children: Te.text }),
            Te.description && /* @__PURE__ */ O("span", { className: ut.optionDescription, children: Te.description })
          ]
        },
        Te.key || Te.value
      );
    }) }),
    Le()
  ] });
});
Vs.displayName = "Dropdown";
Vs.Item = Nw;
Vs.Menu = Iw;
Vs.Header = Aw;
Vs.Divider = TB;
Vs.propTypes = {
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
    var n, r = "4.18.1", o = 200, s = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", u = "Expected a function", c = "Invalid `variable` option passed into `_.template`", d = "Invalid `imports` option passed into `_.template`", p = "__lodash_hash_undefined__", h = 500, m = "__lodash_placeholder__", g = 1, y = 2, b = 4, _ = 1, w = 2, k = 1, F = 2, E = 4, I = 8, T = 16, P = 32, C = 64, S = 128, A = 256, B = 512, U = 30, re = "...", G = 800, ae = 16, he = 1, ye = 2, ke = 3, se = 1 / 0, me = 9007199254740991, X = 17976931348623157e292, te = NaN, oe = 4294967295, _e = oe - 1, Se = oe >>> 1, ve = [
      ["ary", S],
      ["bind", k],
      ["bindKey", F],
      ["curry", I],
      ["curryRight", T],
      ["flip", B],
      ["partial", P],
      ["partialRight", C],
      ["rearg", A]
    ], ue = "[object Arguments]", xe = "[object Array]", ge = "[object AsyncFunction]", W = "[object Boolean]", z = "[object Date]", $ = "[object DOMException]", D = "[object Error]", q = "[object Function]", K = "[object GeneratorFunction]", le = "[object Map]", Ie = "[object Number]", de = "[object Null]", Oe = "[object Object]", fe = "[object Promise]", Y = "[object Proxy]", ne = "[object RegExp]", we = "[object Set]", Ne = "[object String]", Re = "[object Symbol]", Be = "[object Undefined]", Le = "[object WeakMap]", tt = "[object WeakSet]", Xe = "[object ArrayBuffer]", Ve = "[object DataView]", He = "[object Float32Array]", Te = "[object Float64Array]", Q = "[object Int8Array]", ze = "[object Int16Array]", lt = "[object Int32Array]", ft = "[object Uint8Array]", nt = "[object Uint8ClampedArray]", Yt = "[object Uint16Array]", Ye = "[object Uint32Array]", $t = /\b__p \+= '';/g, ot = /\b(__p \+=) '' \+/g, dn = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Jn = /&(?:amp|lt|gt|quot|#39);/g, la = /[&<>"']/g, Rc = RegExp(Jn.source), ca = RegExp(la.source), hC = /<%-([\s\S]+?)%>/g, mC = /<%([\s\S]+?)%>/g, Ng = /<%=([\s\S]+?)%>/g, gC = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, vC = /^\w*$/, yC = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, nf = /[\\^$.*+?()[\]{}|]/g, bC = RegExp(nf.source), rf = /^\s+/, _C = /\s/, wC = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, xC = /\{\n\/\* \[wrapped with (.+)\] \*/, EC = /,? & /, CC = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Ig = /[()=,{}\[\]\/\s]/, OC = /\\(\\)?/g, SC = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Ag = /\w*$/, TC = /^[-+]0x[0-9a-f]+$/i, PC = /^0b[01]+$/i, kC = /^\[object .+?Constructor\]$/, NC = /^0o[0-7]+$/i, IC = /^(?:0|[1-9]\d*)$/, AC = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Mc = /($^)/, RC = /['\n\r\u2028\u2029\\]/g, Dc = "\\ud800-\\udfff", MC = "\\u0300-\\u036f", DC = "\\ufe20-\\ufe2f", LC = "\\u20d0-\\u20ff", Rg = MC + DC + LC, Mg = "\\u2700-\\u27bf", Dg = "a-z\\xdf-\\xf6\\xf8-\\xff", FC = "\\xac\\xb1\\xd7\\xf7", $C = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", BC = "\\u2000-\\u206f", jC = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Lg = "A-Z\\xc0-\\xd6\\xd8-\\xde", Fg = "\\ufe0e\\ufe0f", $g = FC + $C + BC + jC, af = "['’]", WC = "[" + Dc + "]", Bg = "[" + $g + "]", Lc = "[" + Rg + "]", jg = "\\d+", zC = "[" + Mg + "]", Wg = "[" + Dg + "]", zg = "[^" + Dc + $g + jg + Mg + Dg + Lg + "]", of = "\\ud83c[\\udffb-\\udfff]", UC = "(?:" + Lc + "|" + of + ")", Ug = "[^" + Dc + "]", sf = "(?:\\ud83c[\\udde6-\\uddff]){2}", lf = "[\\ud800-\\udbff][\\udc00-\\udfff]", Hi = "[" + Lg + "]", Hg = "\\u200d", Yg = "(?:" + Wg + "|" + zg + ")", HC = "(?:" + Hi + "|" + zg + ")", Vg = "(?:" + af + "(?:d|ll|m|re|s|t|ve))?", qg = "(?:" + af + "(?:D|LL|M|RE|S|T|VE))?", Gg = UC + "?", Kg = "[" + Fg + "]?", YC = "(?:" + Hg + "(?:" + [Ug, sf, lf].join("|") + ")" + Kg + Gg + ")*", VC = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", qC = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Zg = Kg + Gg + YC, GC = "(?:" + [zC, sf, lf].join("|") + ")" + Zg, KC = "(?:" + [Ug + Lc + "?", Lc, sf, lf, WC].join("|") + ")", ZC = RegExp(af, "g"), XC = RegExp(Lc, "g"), cf = RegExp(of + "(?=" + of + ")|" + KC + Zg, "g"), QC = RegExp([
      Hi + "?" + Wg + "+" + Vg + "(?=" + [Bg, Hi, "$"].join("|") + ")",
      HC + "+" + qg + "(?=" + [Bg, Hi + Yg, "$"].join("|") + ")",
      Hi + "?" + Yg + "+" + Vg,
      Hi + "+" + qg,
      qC,
      VC,
      jg,
      GC
    ].join("|"), "g"), JC = RegExp("[" + Hg + Dc + Rg + Fg + "]"), eO = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, tO = [
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
    ], nO = -1, tn = {};
    tn[He] = tn[Te] = tn[Q] = tn[ze] = tn[lt] = tn[ft] = tn[nt] = tn[Yt] = tn[Ye] = !0, tn[ue] = tn[xe] = tn[Xe] = tn[W] = tn[Ve] = tn[z] = tn[D] = tn[q] = tn[le] = tn[Ie] = tn[Oe] = tn[ne] = tn[we] = tn[Ne] = tn[Le] = !1;
    var Qt = {};
    Qt[ue] = Qt[xe] = Qt[Xe] = Qt[Ve] = Qt[W] = Qt[z] = Qt[He] = Qt[Te] = Qt[Q] = Qt[ze] = Qt[lt] = Qt[le] = Qt[Ie] = Qt[Oe] = Qt[ne] = Qt[we] = Qt[Ne] = Qt[Re] = Qt[ft] = Qt[nt] = Qt[Yt] = Qt[Ye] = !0, Qt[D] = Qt[q] = Qt[Le] = !1;
    var rO = {
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
    }, aO = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, oO = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, iO = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, sO = parseFloat, lO = parseInt, Xg = typeof is == "object" && is && is.Object === Object && is, cO = typeof self == "object" && self && self.Object === Object && self, Rn = Xg || cO || Function("return this")(), uf = t && !t.nodeType && t, ri = uf && !0 && e && !e.nodeType && e, Qg = ri && ri.exports === uf, df = Qg && Xg.process, Sr = function() {
      try {
        var Z = ri && ri.require && ri.require("util").types;
        return Z || df && df.binding && df.binding("util");
      } catch {
      }
    }(), Jg = Sr && Sr.isArrayBuffer, ev = Sr && Sr.isDate, tv = Sr && Sr.isMap, nv = Sr && Sr.isRegExp, rv = Sr && Sr.isSet, av = Sr && Sr.isTypedArray;
    function pr(Z, be, ce) {
      switch (ce.length) {
        case 0:
          return Z.call(be);
        case 1:
          return Z.call(be, ce[0]);
        case 2:
          return Z.call(be, ce[0], ce[1]);
        case 3:
          return Z.call(be, ce[0], ce[1], ce[2]);
      }
      return Z.apply(be, ce);
    }
    function uO(Z, be, ce, qe) {
      for (var mt = -1, Ft = Z == null ? 0 : Z.length; ++mt < Ft; ) {
        var _n = Z[mt];
        be(qe, _n, ce(_n), Z);
      }
      return qe;
    }
    function hr(Z, be) {
      for (var ce = -1, qe = Z == null ? 0 : Z.length; ++ce < qe && be(Z[ce], ce, Z) !== !1; )
        ;
      return Z;
    }
    function dO(Z, be) {
      for (var ce = Z == null ? 0 : Z.length; ce-- && be(Z[ce], ce, Z) !== !1; )
        ;
      return Z;
    }
    function ov(Z, be) {
      for (var ce = -1, qe = Z == null ? 0 : Z.length; ++ce < qe; )
        if (!be(Z[ce], ce, Z))
          return !1;
      return !0;
    }
    function mo(Z, be) {
      for (var ce = -1, qe = Z == null ? 0 : Z.length, mt = 0, Ft = []; ++ce < qe; ) {
        var _n = Z[ce];
        be(_n, ce, Z) && (Ft[mt++] = _n);
      }
      return Ft;
    }
    function Fc(Z, be) {
      var ce = Z == null ? 0 : Z.length;
      return !!ce && Yi(Z, be, 0) > -1;
    }
    function ff(Z, be, ce) {
      for (var qe = -1, mt = Z == null ? 0 : Z.length; ++qe < mt; )
        if (ce(be, Z[qe]))
          return !0;
      return !1;
    }
    function ln(Z, be) {
      for (var ce = -1, qe = Z == null ? 0 : Z.length, mt = Array(qe); ++ce < qe; )
        mt[ce] = be(Z[ce], ce, Z);
      return mt;
    }
    function go(Z, be) {
      for (var ce = -1, qe = be.length, mt = Z.length; ++ce < qe; )
        Z[mt + ce] = be[ce];
      return Z;
    }
    function pf(Z, be, ce, qe) {
      var mt = -1, Ft = Z == null ? 0 : Z.length;
      for (qe && Ft && (ce = Z[++mt]); ++mt < Ft; )
        ce = be(ce, Z[mt], mt, Z);
      return ce;
    }
    function fO(Z, be, ce, qe) {
      var mt = Z == null ? 0 : Z.length;
      for (qe && mt && (ce = Z[--mt]); mt--; )
        ce = be(ce, Z[mt], mt, Z);
      return ce;
    }
    function hf(Z, be) {
      for (var ce = -1, qe = Z == null ? 0 : Z.length; ++ce < qe; )
        if (be(Z[ce], ce, Z))
          return !0;
      return !1;
    }
    var pO = mf("length");
    function hO(Z) {
      return Z.split("");
    }
    function mO(Z) {
      return Z.match(CC) || [];
    }
    function iv(Z, be, ce) {
      var qe;
      return ce(Z, function(mt, Ft, _n) {
        if (be(mt, Ft, _n))
          return qe = Ft, !1;
      }), qe;
    }
    function $c(Z, be, ce, qe) {
      for (var mt = Z.length, Ft = ce + (qe ? 1 : -1); qe ? Ft-- : ++Ft < mt; )
        if (be(Z[Ft], Ft, Z))
          return Ft;
      return -1;
    }
    function Yi(Z, be, ce) {
      return be === be ? TO(Z, be, ce) : $c(Z, sv, ce);
    }
    function gO(Z, be, ce, qe) {
      for (var mt = ce - 1, Ft = Z.length; ++mt < Ft; )
        if (qe(Z[mt], be))
          return mt;
      return -1;
    }
    function sv(Z) {
      return Z !== Z;
    }
    function lv(Z, be) {
      var ce = Z == null ? 0 : Z.length;
      return ce ? vf(Z, be) / ce : te;
    }
    function mf(Z) {
      return function(be) {
        return be == null ? n : be[Z];
      };
    }
    function gf(Z) {
      return function(be) {
        return Z == null ? n : Z[be];
      };
    }
    function cv(Z, be, ce, qe, mt) {
      return mt(Z, function(Ft, _n, Xt) {
        ce = qe ? (qe = !1, Ft) : be(ce, Ft, _n, Xt);
      }), ce;
    }
    function vO(Z, be) {
      var ce = Z.length;
      for (Z.sort(be); ce--; )
        Z[ce] = Z[ce].value;
      return Z;
    }
    function vf(Z, be) {
      for (var ce, qe = -1, mt = Z.length; ++qe < mt; ) {
        var Ft = be(Z[qe]);
        Ft !== n && (ce = ce === n ? Ft : ce + Ft);
      }
      return ce;
    }
    function yf(Z, be) {
      for (var ce = -1, qe = Array(Z); ++ce < Z; )
        qe[ce] = be(ce);
      return qe;
    }
    function yO(Z, be) {
      return ln(be, function(ce) {
        return [ce, Z[ce]];
      });
    }
    function uv(Z) {
      return Z && Z.slice(0, hv(Z) + 1).replace(rf, "");
    }
    function mr(Z) {
      return function(be) {
        return Z(be);
      };
    }
    function bf(Z, be) {
      return ln(be, function(ce) {
        return Z[ce];
      });
    }
    function Qs(Z, be) {
      return Z.has(be);
    }
    function dv(Z, be) {
      for (var ce = -1, qe = Z.length; ++ce < qe && Yi(be, Z[ce], 0) > -1; )
        ;
      return ce;
    }
    function fv(Z, be) {
      for (var ce = Z.length; ce-- && Yi(be, Z[ce], 0) > -1; )
        ;
      return ce;
    }
    function bO(Z, be) {
      for (var ce = Z.length, qe = 0; ce--; )
        Z[ce] === be && ++qe;
      return qe;
    }
    var _O = gf(rO), wO = gf(aO);
    function xO(Z) {
      return "\\" + iO[Z];
    }
    function EO(Z, be) {
      return Z == null ? n : Z[be];
    }
    function Vi(Z) {
      return JC.test(Z);
    }
    function CO(Z) {
      return eO.test(Z);
    }
    function OO(Z) {
      for (var be, ce = []; !(be = Z.next()).done; )
        ce.push(be.value);
      return ce;
    }
    function _f(Z) {
      var be = -1, ce = Array(Z.size);
      return Z.forEach(function(qe, mt) {
        ce[++be] = [mt, qe];
      }), ce;
    }
    function pv(Z, be) {
      return function(ce) {
        return Z(be(ce));
      };
    }
    function vo(Z, be) {
      for (var ce = -1, qe = Z.length, mt = 0, Ft = []; ++ce < qe; ) {
        var _n = Z[ce];
        (_n === be || _n === m) && (Z[ce] = m, Ft[mt++] = ce);
      }
      return Ft;
    }
    function Bc(Z) {
      var be = -1, ce = Array(Z.size);
      return Z.forEach(function(qe) {
        ce[++be] = qe;
      }), ce;
    }
    function SO(Z) {
      var be = -1, ce = Array(Z.size);
      return Z.forEach(function(qe) {
        ce[++be] = [qe, qe];
      }), ce;
    }
    function TO(Z, be, ce) {
      for (var qe = ce - 1, mt = Z.length; ++qe < mt; )
        if (Z[qe] === be)
          return qe;
      return -1;
    }
    function PO(Z, be, ce) {
      for (var qe = ce + 1; qe--; )
        if (Z[qe] === be)
          return qe;
      return qe;
    }
    function qi(Z) {
      return Vi(Z) ? NO(Z) : pO(Z);
    }
    function Vr(Z) {
      return Vi(Z) ? IO(Z) : hO(Z);
    }
    function hv(Z) {
      for (var be = Z.length; be-- && _C.test(Z.charAt(be)); )
        ;
      return be;
    }
    var kO = gf(oO);
    function NO(Z) {
      for (var be = cf.lastIndex = 0; cf.test(Z); )
        ++be;
      return be;
    }
    function IO(Z) {
      return Z.match(cf) || [];
    }
    function AO(Z) {
      return Z.match(QC) || [];
    }
    var RO = function Z(be) {
      be = be == null ? Rn : Gi.defaults(Rn.Object(), be, Gi.pick(Rn, tO));
      var ce = be.Array, qe = be.Date, mt = be.Error, Ft = be.Function, _n = be.Math, Xt = be.Object, wf = be.RegExp, MO = be.String, Tr = be.TypeError, jc = ce.prototype, DO = Ft.prototype, Ki = Xt.prototype, Wc = be["__core-js_shared__"], zc = DO.toString, Bt = Ki.hasOwnProperty, LO = 0, mv = function() {
        var a = /[^.]+$/.exec(Wc && Wc.keys && Wc.keys.IE_PROTO || "");
        return a ? "Symbol(src)_1." + a : "";
      }(), Uc = Ki.toString, FO = zc.call(Xt), $O = Rn._, BO = wf(
        "^" + zc.call(Bt).replace(nf, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Hc = Qg ? be.Buffer : n, yo = be.Symbol, Yc = be.Uint8Array, gv = Hc ? Hc.allocUnsafe : n, Vc = pv(Xt.getPrototypeOf, Xt), vv = Xt.create, yv = Ki.propertyIsEnumerable, qc = jc.splice, bv = yo ? yo.isConcatSpreadable : n, Js = yo ? yo.iterator : n, ai = yo ? yo.toStringTag : n, Gc = function() {
        try {
          var a = ci(Xt, "defineProperty");
          return a({}, "", {}), a;
        } catch {
        }
      }(), jO = be.clearTimeout !== Rn.clearTimeout && be.clearTimeout, WO = qe && qe.now !== Rn.Date.now && qe.now, zO = be.setTimeout !== Rn.setTimeout && be.setTimeout, Kc = _n.ceil, Zc = _n.floor, xf = Xt.getOwnPropertySymbols, UO = Hc ? Hc.isBuffer : n, _v = be.isFinite, HO = jc.join, YO = pv(Xt.keys, Xt), wn = _n.max, Fn = _n.min, VO = qe.now, qO = be.parseInt, wv = _n.random, GO = jc.reverse, Ef = ci(be, "DataView"), el = ci(be, "Map"), Cf = ci(be, "Promise"), Zi = ci(be, "Set"), tl = ci(be, "WeakMap"), nl = ci(Xt, "create"), Xc = tl && new tl(), Xi = {}, KO = ui(Ef), ZO = ui(el), XO = ui(Cf), QO = ui(Zi), JO = ui(tl), Qc = yo ? yo.prototype : n, rl = Qc ? Qc.valueOf : n, xv = Qc ? Qc.toString : n;
      function N(a) {
        if (pn(a) && !vt(a) && !(a instanceof Pt)) {
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
        escape: hC,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: mC,
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
      function eS() {
        var a = new Pt(this.__wrapped__);
        return a.__actions__ = er(this.__actions__), a.__dir__ = this.__dir__, a.__filtered__ = this.__filtered__, a.__iteratees__ = er(this.__iteratees__), a.__takeCount__ = this.__takeCount__, a.__views__ = er(this.__views__), a;
      }
      function tS() {
        if (this.__filtered__) {
          var a = new Pt(this);
          a.__dir__ = -1, a.__filtered__ = !0;
        } else
          a = this.clone(), a.__dir__ *= -1;
        return a;
      }
      function nS() {
        var a = this.__wrapped__.value(), i = this.__dir__, f = vt(a), v = i < 0, x = f ? a.length : 0, M = hT(0, x, this.__views__), j = M.start, H = M.end, J = H - j, Ee = v ? H : j - 1, Ce = this.__iteratees__, Ae = Ce.length, Ue = 0, Je = Fn(J, this.__takeCount__);
        if (!f || !v && x == J && Je == J)
          return Vv(a, this.__actions__);
        var ct = [];
        e:
          for (; J-- && Ue < Je; ) {
            Ee += i;
            for (var _t = -1, it = a[Ee]; ++_t < Ae; ) {
              var Ot = Ce[_t], It = Ot.iteratee, yr = Ot.type, Yn = It(it);
              if (yr == ye)
                it = Yn;
              else if (!Yn) {
                if (yr == he)
                  continue e;
                break e;
              }
            }
            ct[Ue++] = it;
          }
        return ct;
      }
      Pt.prototype = Qi(Jc.prototype), Pt.prototype.constructor = Pt;
      function oi(a) {
        var i = -1, f = a == null ? 0 : a.length;
        for (this.clear(); ++i < f; ) {
          var v = a[i];
          this.set(v[0], v[1]);
        }
      }
      function rS() {
        this.__data__ = nl ? nl(null) : {}, this.size = 0;
      }
      function aS(a) {
        var i = this.has(a) && delete this.__data__[a];
        return this.size -= i ? 1 : 0, i;
      }
      function oS(a) {
        var i = this.__data__;
        if (nl) {
          var f = i[a];
          return f === p ? n : f;
        }
        return Bt.call(i, a) ? i[a] : n;
      }
      function iS(a) {
        var i = this.__data__;
        return nl ? i[a] !== n : Bt.call(i, a);
      }
      function sS(a, i) {
        var f = this.__data__;
        return this.size += this.has(a) ? 0 : 1, f[a] = nl && i === n ? p : i, this;
      }
      oi.prototype.clear = rS, oi.prototype.delete = aS, oi.prototype.get = oS, oi.prototype.has = iS, oi.prototype.set = sS;
      function Ra(a) {
        var i = -1, f = a == null ? 0 : a.length;
        for (this.clear(); ++i < f; ) {
          var v = a[i];
          this.set(v[0], v[1]);
        }
      }
      function lS() {
        this.__data__ = [], this.size = 0;
      }
      function cS(a) {
        var i = this.__data__, f = eu(i, a);
        if (f < 0)
          return !1;
        var v = i.length - 1;
        return f == v ? i.pop() : qc.call(i, f, 1), --this.size, !0;
      }
      function uS(a) {
        var i = this.__data__, f = eu(i, a);
        return f < 0 ? n : i[f][1];
      }
      function dS(a) {
        return eu(this.__data__, a) > -1;
      }
      function fS(a, i) {
        var f = this.__data__, v = eu(f, a);
        return v < 0 ? (++this.size, f.push([a, i])) : f[v][1] = i, this;
      }
      Ra.prototype.clear = lS, Ra.prototype.delete = cS, Ra.prototype.get = uS, Ra.prototype.has = dS, Ra.prototype.set = fS;
      function Ma(a) {
        var i = -1, f = a == null ? 0 : a.length;
        for (this.clear(); ++i < f; ) {
          var v = a[i];
          this.set(v[0], v[1]);
        }
      }
      function pS() {
        this.size = 0, this.__data__ = {
          hash: new oi(),
          map: new (el || Ra)(),
          string: new oi()
        };
      }
      function hS(a) {
        var i = fu(this, a).delete(a);
        return this.size -= i ? 1 : 0, i;
      }
      function mS(a) {
        return fu(this, a).get(a);
      }
      function gS(a) {
        return fu(this, a).has(a);
      }
      function vS(a, i) {
        var f = fu(this, a), v = f.size;
        return f.set(a, i), this.size += f.size == v ? 0 : 1, this;
      }
      Ma.prototype.clear = pS, Ma.prototype.delete = hS, Ma.prototype.get = mS, Ma.prototype.has = gS, Ma.prototype.set = vS;
      function ii(a) {
        var i = -1, f = a == null ? 0 : a.length;
        for (this.__data__ = new Ma(); ++i < f; )
          this.add(a[i]);
      }
      function yS(a) {
        return this.__data__.set(a, p), this;
      }
      function bS(a) {
        return this.__data__.has(a);
      }
      ii.prototype.add = ii.prototype.push = yS, ii.prototype.has = bS;
      function qr(a) {
        var i = this.__data__ = new Ra(a);
        this.size = i.size;
      }
      function _S() {
        this.__data__ = new Ra(), this.size = 0;
      }
      function wS(a) {
        var i = this.__data__, f = i.delete(a);
        return this.size = i.size, f;
      }
      function xS(a) {
        return this.__data__.get(a);
      }
      function ES(a) {
        return this.__data__.has(a);
      }
      function CS(a, i) {
        var f = this.__data__;
        if (f instanceof Ra) {
          var v = f.__data__;
          if (!el || v.length < o - 1)
            return v.push([a, i]), this.size = ++f.size, this;
          f = this.__data__ = new Ma(v);
        }
        return f.set(a, i), this.size = f.size, this;
      }
      qr.prototype.clear = _S, qr.prototype.delete = wS, qr.prototype.get = xS, qr.prototype.has = ES, qr.prototype.set = CS;
      function Ev(a, i) {
        var f = vt(a), v = !f && di(a), x = !f && !v && Eo(a), M = !f && !v && !x && ns(a), j = f || v || x || M, H = j ? yf(a.length, MO) : [], J = H.length;
        for (var Ee in a)
          (i || Bt.call(a, Ee)) && !(j && // Safari 9 has enumerable `arguments.length` in strict mode.
          (Ee == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          x && (Ee == "offset" || Ee == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          M && (Ee == "buffer" || Ee == "byteLength" || Ee == "byteOffset") || // Skip index properties.
          Fa(Ee, J))) && H.push(Ee);
        return H;
      }
      function Cv(a) {
        var i = a.length;
        return i ? a[Df(0, i - 1)] : n;
      }
      function OS(a, i) {
        return pu(er(a), si(i, 0, a.length));
      }
      function SS(a) {
        return pu(er(a));
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
      function TS(a, i, f, v) {
        return bo(a, function(x, M, j) {
          i(v, x, f(x), j);
        }), v;
      }
      function Ov(a, i) {
        return a && fa(i, Pn(i), a);
      }
      function PS(a, i) {
        return a && fa(i, nr(i), a);
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
        var j, H = i & g, J = i & y, Ee = i & b;
        if (f && (j = x ? f(a, v, x, M) : f(a)), j !== n)
          return j;
        if (!fn(a))
          return a;
        var Ce = vt(a);
        if (Ce) {
          if (j = gT(a), !H)
            return er(a, j);
        } else {
          var Ae = $n(a), Ue = Ae == q || Ae == K;
          if (Eo(a))
            return Kv(a, H);
          if (Ae == Oe || Ae == ue || Ue && !x) {
            if (j = J || Ue ? {} : hy(a), !H)
              return J ? oT(a, PS(j, a)) : aT(a, Ov(j, a));
          } else {
            if (!Qt[Ae])
              return x ? a : {};
            j = vT(a, Ae, H);
          }
        }
        M || (M = new qr());
        var Je = M.get(a);
        if (Je)
          return Je;
        M.set(a, j), Uy(a) ? a.forEach(function(it) {
          j.add(kr(it, i, f, it, a, M));
        }) : Wy(a) && a.forEach(function(it, Ot) {
          j.set(Ot, kr(it, i, f, Ot, a, M));
        });
        var ct = Ee ? J ? Vf : Yf : J ? nr : Pn, _t = Ce ? n : ct(a);
        return hr(_t || a, function(it, Ot) {
          _t && (Ot = it, it = a[Ot]), al(j, Ot, kr(it, i, f, Ot, a, M));
        }), j;
      }
      function kS(a) {
        var i = Pn(a);
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
        var x = -1, M = Fc, j = !0, H = a.length, J = [], Ee = i.length;
        if (!H)
          return J;
        f && (i = ln(i, mr(f))), v ? (M = ff, j = !1) : i.length >= o && (M = Qs, j = !1, i = new ii(i));
        e:
          for (; ++x < H; ) {
            var Ce = a[x], Ae = f == null ? Ce : f(Ce);
            if (Ce = v || Ce !== 0 ? Ce : 0, j && Ae === Ae) {
              for (var Ue = Ee; Ue--; )
                if (i[Ue] === Ae)
                  continue e;
              J.push(Ce);
            } else M(i, Ae, v) || J.push(Ce);
          }
        return J;
      }
      var bo = ey(da), Pv = ey(Pf, !0);
      function NS(a, i) {
        var f = !0;
        return bo(a, function(v, x, M) {
          return f = !!i(v, x, M), f;
        }), f;
      }
      function tu(a, i, f) {
        for (var v = -1, x = a.length; ++v < x; ) {
          var M = a[v], j = i(M);
          if (j != null && (H === n ? j === j && !vr(j) : f(j, H)))
            var H = j, J = M;
        }
        return J;
      }
      function IS(a, i, f, v) {
        var x = a.length;
        for (f = yt(f), f < 0 && (f = -f > x ? 0 : x + f), v = v === n || v > x ? x : yt(v), v < 0 && (v += x), v = f > v ? 0 : Yy(v); f < v; )
          a[f++] = i;
        return a;
      }
      function kv(a, i) {
        var f = [];
        return bo(a, function(v, x, M) {
          i(v, x, M) && f.push(v);
        }), f;
      }
      function Mn(a, i, f, v, x) {
        var M = -1, j = a.length;
        for (f || (f = bT), x || (x = []); ++M < j; ) {
          var H = a[M];
          i > 0 && f(H) ? i > 1 ? Mn(H, i - 1, f, v, x) : go(x, H) : v || (x[x.length] = H);
        }
        return x;
      }
      var Tf = ty(), Nv = ty(!0);
      function da(a, i) {
        return a && Tf(a, i, Pn);
      }
      function Pf(a, i) {
        return a && Nv(a, i, Pn);
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
        return vt(a) ? v : go(v, f(a));
      }
      function Un(a) {
        return a == null ? a === n ? Be : de : ai && ai in Xt(a) ? pT(a) : ST(a);
      }
      function kf(a, i) {
        return a > i;
      }
      function AS(a, i) {
        return a != null && Bt.call(a, i);
      }
      function RS(a, i) {
        return a != null && i in Xt(a);
      }
      function MS(a, i, f) {
        return a >= Fn(i, f) && a < wn(i, f);
      }
      function Nf(a, i, f) {
        for (var v = f ? ff : Fc, x = a[0].length, M = a.length, j = M, H = ce(M), J = 1 / 0, Ee = []; j--; ) {
          var Ce = a[j];
          j && i && (Ce = ln(Ce, mr(i))), J = Fn(Ce.length, J), H[j] = !f && (i || x >= 120 && Ce.length >= 120) ? new ii(j && Ce) : n;
        }
        Ce = a[0];
        var Ae = -1, Ue = H[0];
        e:
          for (; ++Ae < x && Ee.length < J; ) {
            var Je = Ce[Ae], ct = i ? i(Je) : Je;
            if (Je = f || Je !== 0 ? Je : 0, !(Ue ? Qs(Ue, ct) : v(Ee, ct, f))) {
              for (j = M; --j; ) {
                var _t = H[j];
                if (!(_t ? Qs(_t, ct) : v(a[j], ct, f)))
                  continue e;
              }
              Ue && Ue.push(ct), Ee.push(Je);
            }
          }
        return Ee;
      }
      function DS(a, i, f, v) {
        return da(a, function(x, M, j) {
          i(v, f(x), M, j);
        }), v;
      }
      function il(a, i, f) {
        i = wo(i, a), a = yy(a, i);
        var v = a == null ? a : a[Gr(Ir(i))];
        return v == null ? n : pr(v, a, f);
      }
      function Av(a) {
        return pn(a) && Un(a) == ue;
      }
      function LS(a) {
        return pn(a) && Un(a) == Xe;
      }
      function FS(a) {
        return pn(a) && Un(a) == z;
      }
      function sl(a, i, f, v, x) {
        return a === i ? !0 : a == null || i == null || !pn(a) && !pn(i) ? a !== a && i !== i : $S(a, i, f, v, sl, x);
      }
      function $S(a, i, f, v, x, M) {
        var j = vt(a), H = vt(i), J = j ? xe : $n(a), Ee = H ? xe : $n(i);
        J = J == ue ? Oe : J, Ee = Ee == ue ? Oe : Ee;
        var Ce = J == Oe, Ae = Ee == Oe, Ue = J == Ee;
        if (Ue && Eo(a)) {
          if (!Eo(i))
            return !1;
          j = !0, Ce = !1;
        }
        if (Ue && !Ce)
          return M || (M = new qr()), j || ns(a) ? dy(a, i, f, v, x, M) : dT(a, i, J, f, v, x, M);
        if (!(f & _)) {
          var Je = Ce && Bt.call(a, "__wrapped__"), ct = Ae && Bt.call(i, "__wrapped__");
          if (Je || ct) {
            var _t = Je ? a.value() : a, it = ct ? i.value() : i;
            return M || (M = new qr()), x(_t, it, f, v, M);
          }
        }
        return Ue ? (M || (M = new qr()), fT(a, i, f, v, x, M)) : !1;
      }
      function BS(a) {
        return pn(a) && $n(a) == le;
      }
      function If(a, i, f, v) {
        var x = f.length, M = x, j = !v;
        if (a == null)
          return !M;
        for (a = Xt(a); x--; ) {
          var H = f[x];
          if (j && H[2] ? H[1] !== a[H[0]] : !(H[0] in a))
            return !1;
        }
        for (; ++x < M; ) {
          H = f[x];
          var J = H[0], Ee = a[J], Ce = H[1];
          if (j && H[2]) {
            if (Ee === n && !(J in a))
              return !1;
          } else {
            var Ae = new qr();
            if (v)
              var Ue = v(Ee, Ce, J, a, i, Ae);
            if (!(Ue === n ? sl(Ce, Ee, _ | w, v, Ae) : Ue))
              return !1;
          }
        }
        return !0;
      }
      function Rv(a) {
        if (!fn(a) || wT(a))
          return !1;
        var i = $a(a) ? BO : kC;
        return i.test(ui(a));
      }
      function jS(a) {
        return pn(a) && Un(a) == ne;
      }
      function WS(a) {
        return pn(a) && $n(a) == we;
      }
      function zS(a) {
        return pn(a) && bu(a.length) && !!tn[Un(a)];
      }
      function Mv(a) {
        return typeof a == "function" ? a : a == null ? rr : typeof a == "object" ? vt(a) ? Fv(a[0], a[1]) : Lv(a) : rb(a);
      }
      function Af(a) {
        if (!ul(a))
          return YO(a);
        var i = [];
        for (var f in Xt(a))
          Bt.call(a, f) && f != "constructor" && i.push(f);
        return i;
      }
      function US(a) {
        if (!fn(a))
          return OT(a);
        var i = ul(a), f = [];
        for (var v in a)
          v == "constructor" && (i || !Bt.call(a, v)) || f.push(v);
        return f;
      }
      function Rf(a, i) {
        return a < i;
      }
      function Dv(a, i) {
        var f = -1, v = tr(a) ? ce(a.length) : [];
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
          if (x || (x = new qr()), fn(M))
            HS(a, i, j, f, ru, v, x);
          else {
            var H = v ? v(Qf(a, j), M, j + "", a, i, x) : n;
            H === n && (H = M), Of(a, j, H);
          }
        }, nr);
      }
      function HS(a, i, f, v, x, M, j) {
        var H = Qf(a, f), J = Qf(i, f), Ee = j.get(J);
        if (Ee) {
          Of(a, f, Ee);
          return;
        }
        var Ce = M ? M(H, J, f + "", a, i, j) : n, Ae = Ce === n;
        if (Ae) {
          var Ue = vt(J), Je = !Ue && Eo(J), ct = !Ue && !Je && ns(J);
          Ce = J, Ue || Je || ct ? vt(H) ? Ce = H : mn(H) ? Ce = er(H) : Je ? (Ae = !1, Ce = Kv(J, !0)) : ct ? (Ae = !1, Ce = Zv(J, !0)) : Ce = [] : fl(J) || di(J) ? (Ce = H, di(H) ? Ce = Vy(H) : (!fn(H) || $a(H)) && (Ce = hy(J))) : Ae = !1;
        }
        Ae && (j.set(J, Ce), x(Ce, J, v, M, j), j.delete(J)), Of(a, f, Ce);
      }
      function $v(a, i) {
        var f = a.length;
        if (f)
          return i += i < 0 ? f : 0, Fa(i, f) ? a[i] : n;
      }
      function Bv(a, i, f) {
        i.length ? i = ln(i, function(M) {
          return vt(M) ? function(j) {
            return li(j, M.length === 1 ? M[0] : M);
          } : M;
        }) : i = [rr];
        var v = -1;
        i = ln(i, mr(st()));
        var x = Dv(a, function(M, j, H) {
          var J = ln(i, function(Ee) {
            return Ee(M);
          });
          return { criteria: J, index: ++v, value: M };
        });
        return vO(x, function(M, j) {
          return rT(M, j, f);
        });
      }
      function YS(a, i) {
        return jv(a, i, function(f, v) {
          return lp(a, v);
        });
      }
      function jv(a, i, f) {
        for (var v = -1, x = i.length, M = {}; ++v < x; ) {
          var j = i[v], H = li(a, j);
          f(H, j) && ll(M, wo(j, a), H);
        }
        return M;
      }
      function VS(a) {
        return function(i) {
          return li(i, a);
        };
      }
      function Mf(a, i, f, v) {
        var x = v ? gO : Yi, M = -1, j = i.length, H = a;
        for (a === i && (i = er(i)), f && (H = ln(a, mr(f))); ++M < j; )
          for (var J = 0, Ee = i[M], Ce = f ? f(Ee) : Ee; (J = x(H, Ce, J, v)) > -1; )
            H !== a && qc.call(H, J, 1), qc.call(a, J, 1);
        return a;
      }
      function Wv(a, i) {
        for (var f = a ? i.length : 0, v = f - 1; f--; ) {
          var x = i[f];
          if (f == v || x !== M) {
            var M = x;
            Fa(x) ? qc.call(a, x, 1) : $f(a, x);
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
      function wt(a, i) {
        return Jf(vy(a, i, rr), a + "");
      }
      function GS(a) {
        return Cv(rs(a));
      }
      function KS(a, i) {
        var f = rs(a);
        return pu(f, si(i, 0, f.length));
      }
      function ll(a, i, f, v) {
        if (!fn(a))
          return a;
        i = wo(i, a);
        for (var x = -1, M = i.length, j = M - 1, H = a; H != null && ++x < M; ) {
          var J = Gr(i[x]), Ee = f;
          if (J === "__proto__" || J === "constructor" || J === "prototype")
            return a;
          if (x != j) {
            var Ce = H[J];
            Ee = v ? v(Ce, J, H) : n, Ee === n && (Ee = fn(Ce) ? Ce : Fa(i[x + 1]) ? [] : {});
          }
          al(H, J, Ee), H = H[J];
        }
        return a;
      }
      var zv = Xc ? function(a, i) {
        return Xc.set(a, i), a;
      } : rr, ZS = Gc ? function(a, i) {
        return Gc(a, "toString", {
          configurable: !0,
          enumerable: !1,
          value: up(i),
          writable: !0
        });
      } : rr;
      function XS(a) {
        return pu(rs(a));
      }
      function Nr(a, i, f) {
        var v = -1, x = a.length;
        i < 0 && (i = -i > x ? 0 : x + i), f = f > x ? x : f, f < 0 && (f += x), x = i > f ? 0 : f - i >>> 0, i >>>= 0;
        for (var M = ce(x); ++v < x; )
          M[v] = a[v + i];
        return M;
      }
      function QS(a, i) {
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
            j !== null && !vr(j) && (f ? j <= i : j < i) ? v = M + 1 : x = M;
          }
          return x;
        }
        return Ff(a, i, rr, f);
      }
      function Ff(a, i, f, v) {
        var x = 0, M = a == null ? 0 : a.length;
        if (M === 0)
          return 0;
        i = f(i);
        for (var j = i !== i, H = i === null, J = vr(i), Ee = i === n; x < M; ) {
          var Ce = Zc((x + M) / 2), Ae = f(a[Ce]), Ue = Ae !== n, Je = Ae === null, ct = Ae === Ae, _t = vr(Ae);
          if (j)
            var it = v || ct;
          else Ee ? it = ct && (v || Ue) : H ? it = ct && Ue && (v || !Je) : J ? it = ct && Ue && !Je && (v || !_t) : Je || _t ? it = !1 : it = v ? Ae <= i : Ae < i;
          it ? x = Ce + 1 : M = Ce;
        }
        return Fn(M, _e);
      }
      function Uv(a, i) {
        for (var f = -1, v = a.length, x = 0, M = []; ++f < v; ) {
          var j = a[f], H = i ? i(j) : j;
          if (!f || !Kr(H, J)) {
            var J = H;
            M[x++] = j === 0 ? 0 : j;
          }
        }
        return M;
      }
      function Hv(a) {
        return typeof a == "number" ? a : vr(a) ? te : +a;
      }
      function gr(a) {
        if (typeof a == "string")
          return a;
        if (vt(a))
          return ln(a, gr) + "";
        if (vr(a))
          return xv ? xv.call(a) : "";
        var i = a + "";
        return i == "0" && 1 / a == -se ? "-0" : i;
      }
      function _o(a, i, f) {
        var v = -1, x = Fc, M = a.length, j = !0, H = [], J = H;
        if (f)
          j = !1, x = ff;
        else if (M >= o) {
          var Ee = i ? null : cT(a);
          if (Ee)
            return Bc(Ee);
          j = !1, x = Qs, J = new ii();
        } else
          J = i ? [] : H;
        e:
          for (; ++v < M; ) {
            var Ce = a[v], Ae = i ? i(Ce) : Ce;
            if (Ce = f || Ce !== 0 ? Ce : 0, j && Ae === Ae) {
              for (var Ue = J.length; Ue--; )
                if (J[Ue] === Ae)
                  continue e;
              i && J.push(Ae), H.push(Ce);
            } else x(J, Ae, f) || (J !== H && J.push(Ae), H.push(Ce));
          }
        return H;
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
      function Vv(a, i) {
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
          for (var j = a[x], H = -1; ++H < v; )
            H != x && (M[x] = ol(M[x] || j, a[H], i, f));
        return _o(Mn(M, 1), i, f);
      }
      function qv(a, i, f) {
        for (var v = -1, x = a.length, M = i.length, j = {}; ++v < x; ) {
          var H = v < M ? i[v] : n;
          f(j, a[v], H);
        }
        return j;
      }
      function jf(a) {
        return mn(a) ? a : [];
      }
      function Wf(a) {
        return typeof a == "function" ? a : rr;
      }
      function wo(a, i) {
        return vt(a) ? a : Zf(a, i) ? [a] : xy(jt(a));
      }
      var JS = wt;
      function xo(a, i, f) {
        var v = a.length;
        return f = f === n ? v : f, !i && f >= v ? a : Nr(a, i, f);
      }
      var Gv = jO || function(a) {
        return Rn.clearTimeout(a);
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
      function eT(a, i) {
        var f = i ? zf(a.buffer) : a.buffer;
        return new a.constructor(f, a.byteOffset, a.byteLength);
      }
      function tT(a) {
        var i = new a.constructor(a.source, Ag.exec(a));
        return i.lastIndex = a.lastIndex, i;
      }
      function nT(a) {
        return rl ? Xt(rl.call(a)) : {};
      }
      function Zv(a, i) {
        var f = i ? zf(a.buffer) : a.buffer;
        return new a.constructor(f, a.byteOffset, a.length);
      }
      function Xv(a, i) {
        if (a !== i) {
          var f = a !== n, v = a === null, x = a === a, M = vr(a), j = i !== n, H = i === null, J = i === i, Ee = vr(i);
          if (!H && !Ee && !M && a > i || M && j && J && !H && !Ee || v && j && J || !f && J || !x)
            return 1;
          if (!v && !M && !Ee && a < i || Ee && f && x && !v && !M || H && f && x || !j && x || !J)
            return -1;
        }
        return 0;
      }
      function rT(a, i, f) {
        for (var v = -1, x = a.criteria, M = i.criteria, j = x.length, H = f.length; ++v < j; ) {
          var J = Xv(x[v], M[v]);
          if (J) {
            if (v >= H)
              return J;
            var Ee = f[v];
            return J * (Ee == "desc" ? -1 : 1);
          }
        }
        return a.index - i.index;
      }
      function Qv(a, i, f, v) {
        for (var x = -1, M = a.length, j = f.length, H = -1, J = i.length, Ee = wn(M - j, 0), Ce = ce(J + Ee), Ae = !v; ++H < J; )
          Ce[H] = i[H];
        for (; ++x < j; )
          (Ae || x < M) && (Ce[f[x]] = a[x]);
        for (; Ee--; )
          Ce[H++] = a[x++];
        return Ce;
      }
      function Jv(a, i, f, v) {
        for (var x = -1, M = a.length, j = -1, H = f.length, J = -1, Ee = i.length, Ce = wn(M - H, 0), Ae = ce(Ce + Ee), Ue = !v; ++x < Ce; )
          Ae[x] = a[x];
        for (var Je = x; ++J < Ee; )
          Ae[Je + J] = i[J];
        for (; ++j < H; )
          (Ue || x < M) && (Ae[Je + f[j]] = a[x++]);
        return Ae;
      }
      function er(a, i) {
        var f = -1, v = a.length;
        for (i || (i = ce(v)); ++f < v; )
          i[f] = a[f];
        return i;
      }
      function fa(a, i, f, v) {
        var x = !f;
        f || (f = {});
        for (var M = -1, j = i.length; ++M < j; ) {
          var H = i[M], J = v ? v(f[H], a[H], H, f, a) : n;
          J === n && (J = a[H]), x ? ua(f, H, J) : al(f, H, J);
        }
        return f;
      }
      function aT(a, i) {
        return fa(a, Kf(a), i);
      }
      function oT(a, i) {
        return fa(a, fy(a), i);
      }
      function iu(a, i) {
        return function(f, v) {
          var x = vt(f) ? uO : TS, M = i ? i() : {};
          return x(f, a, st(v, 2), M);
        };
      }
      function Ji(a) {
        return wt(function(i, f) {
          var v = -1, x = f.length, M = x > 1 ? f[x - 1] : n, j = x > 2 ? f[2] : n;
          for (M = a.length > 3 && typeof M == "function" ? (x--, M) : n, j && Hn(f[0], f[1], j) && (M = x < 3 ? n : M, x = 1), i = Xt(i); ++v < x; ) {
            var H = f[v];
            H && a(i, H, v, M);
          }
          return i;
        });
      }
      function ey(a, i) {
        return function(f, v) {
          if (f == null)
            return f;
          if (!tr(f))
            return a(f, v);
          for (var x = f.length, M = i ? x : -1, j = Xt(f); (i ? M-- : ++M < x) && v(j[M], M, j) !== !1; )
            ;
          return f;
        };
      }
      function ty(a) {
        return function(i, f, v) {
          for (var x = -1, M = Xt(i), j = v(i), H = j.length; H--; ) {
            var J = j[a ? H : ++x];
            if (f(M[J], J, M) === !1)
              break;
          }
          return i;
        };
      }
      function iT(a, i, f) {
        var v = i & k, x = cl(a);
        function M() {
          var j = this && this !== Rn && this instanceof M ? x : a;
          return j.apply(v ? f : this, arguments);
        }
        return M;
      }
      function ny(a) {
        return function(i) {
          i = jt(i);
          var f = Vi(i) ? Vr(i) : n, v = f ? f[0] : i.charAt(0), x = f ? xo(f, 1).join("") : i.slice(1);
          return v[a]() + x;
        };
      }
      function es(a) {
        return function(i) {
          return pf(tb(eb(i).replace(ZC, "")), a, "");
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
      function sT(a, i, f) {
        var v = cl(a);
        function x() {
          for (var M = arguments.length, j = ce(M), H = M, J = ts(x); H--; )
            j[H] = arguments[H];
          var Ee = M < 3 && j[0] !== J && j[M - 1] !== J ? [] : vo(j, J);
          if (M -= Ee.length, M < f)
            return sy(
              a,
              i,
              su,
              x.placeholder,
              n,
              j,
              Ee,
              n,
              n,
              f - M
            );
          var Ce = this && this !== Rn && this instanceof x ? v : a;
          return pr(Ce, this, j);
        }
        return x;
      }
      function ry(a) {
        return function(i, f, v) {
          var x = Xt(i);
          if (!tr(i)) {
            var M = st(f, 3);
            i = Pn(i), f = function(H) {
              return M(x[H], H, x);
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
            var H = du(M), J = H == "wrapper" ? qf(M) : n;
            J && Xf(J[0]) && J[1] == (S | I | P | A) && !J[4].length && J[9] == 1 ? j = j[du(J[0])].apply(j, J[3]) : j = M.length == 1 && Xf(M) ? j[H]() : j.thru(M);
          }
          return function() {
            var Ee = arguments, Ce = Ee[0];
            if (j && Ee.length == 1 && vt(Ce))
              return j.plant(Ce).value();
            for (var Ae = 0, Ue = f ? i[Ae].apply(this, Ee) : Ce; ++Ae < f; )
              Ue = i[Ae].call(this, Ue);
            return Ue;
          };
        });
      }
      function su(a, i, f, v, x, M, j, H, J, Ee) {
        var Ce = i & S, Ae = i & k, Ue = i & F, Je = i & (I | T), ct = i & B, _t = Ue ? n : cl(a);
        function it() {
          for (var Ot = arguments.length, It = ce(Ot), yr = Ot; yr--; )
            It[yr] = arguments[yr];
          if (Je)
            var Yn = ts(it), br = bO(It, Yn);
          if (v && (It = Qv(It, v, x, Je)), M && (It = Jv(It, M, j, Je)), Ot -= br, Je && Ot < Ee) {
            var gn = vo(It, Yn);
            return sy(
              a,
              i,
              su,
              it.placeholder,
              f,
              It,
              gn,
              H,
              J,
              Ee - Ot
            );
          }
          var Zr = Ae ? f : this, ja = Ue ? Zr[a] : a;
          return Ot = It.length, H ? It = TT(It, H) : ct && Ot > 1 && It.reverse(), Ce && J < Ot && (It.length = J), this && this !== Rn && this instanceof it && (ja = _t || cl(ja)), ja.apply(Zr, It);
        }
        return it;
      }
      function oy(a, i) {
        return function(f, v) {
          return DS(f, a, i(v), {});
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
            typeof f == "string" || typeof v == "string" ? (f = gr(f), v = gr(v)) : (f = Hv(f), v = Hv(v)), x = a(f, v);
          }
          return x;
        };
      }
      function Uf(a) {
        return La(function(i) {
          return i = ln(i, mr(st())), wt(function(f) {
            var v = this;
            return a(i, function(x) {
              return pr(x, v, f);
            });
          });
        });
      }
      function cu(a, i) {
        i = i === n ? " " : gr(i);
        var f = i.length;
        if (f < 2)
          return f ? Lf(i, a) : i;
        var v = Lf(i, Kc(a / qi(i)));
        return Vi(i) ? xo(Vr(v), 0, a).join("") : v.slice(0, a);
      }
      function lT(a, i, f, v) {
        var x = i & k, M = cl(a);
        function j() {
          for (var H = -1, J = arguments.length, Ee = -1, Ce = v.length, Ae = ce(Ce + J), Ue = this && this !== Rn && this instanceof j ? M : a; ++Ee < Ce; )
            Ae[Ee] = v[Ee];
          for (; J--; )
            Ae[Ee++] = arguments[++H];
          return pr(Ue, x ? f : this, Ae);
        }
        return j;
      }
      function iy(a) {
        return function(i, f, v) {
          return v && typeof v != "number" && Hn(i, f, v) && (f = v = n), i = Ba(i), f === n ? (f = i, i = 0) : f = Ba(f), v = v === n ? i < f ? 1 : -1 : Ba(v), qS(i, f, v, a);
        };
      }
      function uu(a) {
        return function(i, f) {
          return typeof i == "string" && typeof f == "string" || (i = Ar(i), f = Ar(f)), a(i, f);
        };
      }
      function sy(a, i, f, v, x, M, j, H, J, Ee) {
        var Ce = i & I, Ae = Ce ? j : n, Ue = Ce ? n : j, Je = Ce ? M : n, ct = Ce ? n : M;
        i |= Ce ? P : C, i &= ~(Ce ? C : P), i & E || (i &= -4);
        var _t = [
          a,
          i,
          x,
          Je,
          Ae,
          ct,
          Ue,
          H,
          J,
          Ee
        ], it = f.apply(n, _t);
        return Xf(a) && by(it, _t), it.placeholder = v, _y(it, a, i);
      }
      function Hf(a) {
        var i = _n[a];
        return function(f, v) {
          if (f = Ar(f), v = v == null ? 0 : Fn(yt(v), 292), v && _v(f)) {
            var x = (jt(f) + "e").split("e"), M = i(x[0] + "e" + (+x[1] + v));
            return x = (jt(M) + "e").split("e"), +(x[0] + "e" + (+x[1] - v));
          }
          return i(f);
        };
      }
      var cT = Zi && 1 / Bc(new Zi([, -0]))[1] == se ? function(a) {
        return new Zi(a);
      } : pp;
      function ly(a) {
        return function(i) {
          var f = $n(i);
          return f == le ? _f(i) : f == we ? SO(i) : yO(i, a(i));
        };
      }
      function Da(a, i, f, v, x, M, j, H) {
        var J = i & F;
        if (!J && typeof a != "function")
          throw new Tr(u);
        var Ee = v ? v.length : 0;
        if (Ee || (i &= -97, v = x = n), j = j === n ? j : wn(yt(j), 0), H = H === n ? H : yt(H), Ee -= x ? x.length : 0, i & C) {
          var Ce = v, Ae = x;
          v = x = n;
        }
        var Ue = J ? n : qf(a), Je = [
          a,
          i,
          f,
          v,
          x,
          Ce,
          Ae,
          M,
          j,
          H
        ];
        if (Ue && CT(Je, Ue), a = Je[0], i = Je[1], f = Je[2], v = Je[3], x = Je[4], H = Je[9] = Je[9] === n ? J ? 0 : a.length : wn(Je[9] - Ee, 0), !H && i & (I | T) && (i &= -25), !i || i == k)
          var ct = iT(a, i, f);
        else i == I || i == T ? ct = sT(a, i, H) : (i == P || i == (k | P)) && !x.length ? ct = lT(a, i, f, v) : ct = su.apply(n, Je);
        var _t = Ue ? zv : by;
        return _y(_t(ct, Je), a, i);
      }
      function cy(a, i, f, v) {
        return a === n || Kr(a, Ki[f]) && !Bt.call(v, f) ? i : a;
      }
      function uy(a, i, f, v, x, M) {
        return fn(a) && fn(i) && (M.set(i, a), ru(a, i, n, uy, M), M.delete(i)), a;
      }
      function uT(a) {
        return fl(a) ? n : a;
      }
      function dy(a, i, f, v, x, M) {
        var j = f & _, H = a.length, J = i.length;
        if (H != J && !(j && J > H))
          return !1;
        var Ee = M.get(a), Ce = M.get(i);
        if (Ee && Ce)
          return Ee == i && Ce == a;
        var Ae = -1, Ue = !0, Je = f & w ? new ii() : n;
        for (M.set(a, i), M.set(i, a); ++Ae < H; ) {
          var ct = a[Ae], _t = i[Ae];
          if (v)
            var it = j ? v(_t, ct, Ae, i, a, M) : v(ct, _t, Ae, a, i, M);
          if (it !== n) {
            if (it)
              continue;
            Ue = !1;
            break;
          }
          if (Je) {
            if (!hf(i, function(Ot, It) {
              if (!Qs(Je, It) && (ct === Ot || x(ct, Ot, f, v, M)))
                return Je.push(It);
            })) {
              Ue = !1;
              break;
            }
          } else if (!(ct === _t || x(ct, _t, f, v, M))) {
            Ue = !1;
            break;
          }
        }
        return M.delete(a), M.delete(i), Ue;
      }
      function dT(a, i, f, v, x, M, j) {
        switch (f) {
          case Ve:
            if (a.byteLength != i.byteLength || a.byteOffset != i.byteOffset)
              return !1;
            a = a.buffer, i = i.buffer;
          case Xe:
            return !(a.byteLength != i.byteLength || !M(new Yc(a), new Yc(i)));
          case W:
          case z:
          case Ie:
            return Kr(+a, +i);
          case D:
            return a.name == i.name && a.message == i.message;
          case ne:
          case Ne:
            return a == i + "";
          case le:
            var H = _f;
          case we:
            var J = v & _;
            if (H || (H = Bc), a.size != i.size && !J)
              return !1;
            var Ee = j.get(a);
            if (Ee)
              return Ee == i;
            v |= w, j.set(a, i);
            var Ce = dy(H(a), H(i), v, x, M, j);
            return j.delete(a), Ce;
          case Re:
            if (rl)
              return rl.call(a) == rl.call(i);
        }
        return !1;
      }
      function fT(a, i, f, v, x, M) {
        var j = f & _, H = Yf(a), J = H.length, Ee = Yf(i), Ce = Ee.length;
        if (J != Ce && !j)
          return !1;
        for (var Ae = J; Ae--; ) {
          var Ue = H[Ae];
          if (!(j ? Ue in i : Bt.call(i, Ue)))
            return !1;
        }
        var Je = M.get(a), ct = M.get(i);
        if (Je && ct)
          return Je == i && ct == a;
        var _t = !0;
        M.set(a, i), M.set(i, a);
        for (var it = j; ++Ae < J; ) {
          Ue = H[Ae];
          var Ot = a[Ue], It = i[Ue];
          if (v)
            var yr = j ? v(It, Ot, Ue, i, a, M) : v(Ot, It, Ue, a, i, M);
          if (!(yr === n ? Ot === It || x(Ot, It, f, v, M) : yr)) {
            _t = !1;
            break;
          }
          it || (it = Ue == "constructor");
        }
        if (_t && !it) {
          var Yn = a.constructor, br = i.constructor;
          Yn != br && "constructor" in a && "constructor" in i && !(typeof Yn == "function" && Yn instanceof Yn && typeof br == "function" && br instanceof br) && (_t = !1);
        }
        return M.delete(a), M.delete(i), _t;
      }
      function La(a) {
        return Jf(vy(a, n, Sy), a + "");
      }
      function Yf(a) {
        return Iv(a, Pn, Kf);
      }
      function Vf(a) {
        return Iv(a, nr, fy);
      }
      var qf = Xc ? function(a) {
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
        return _T(i) ? f[typeof i == "string" ? "string" : "hash"] : f.map;
      }
      function Gf(a) {
        for (var i = Pn(a), f = i.length; f--; ) {
          var v = i[f], x = a[v];
          i[f] = [v, x, my(x)];
        }
        return i;
      }
      function ci(a, i) {
        var f = EO(a, i);
        return Rv(f) ? f : n;
      }
      function pT(a) {
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
          go(i, Kf(a)), a = Vc(a);
        return i;
      } : hp, $n = Un;
      (Ef && $n(new Ef(new ArrayBuffer(1))) != Ve || el && $n(new el()) != le || Cf && $n(Cf.resolve()) != fe || Zi && $n(new Zi()) != we || tl && $n(new tl()) != Le) && ($n = function(a) {
        var i = Un(a), f = i == Oe ? a.constructor : n, v = f ? ui(f) : "";
        if (v)
          switch (v) {
            case KO:
              return Ve;
            case ZO:
              return le;
            case XO:
              return fe;
            case QO:
              return we;
            case JO:
              return Le;
          }
        return i;
      });
      function hT(a, i, f) {
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
              i = Fn(i, a + j);
              break;
            case "takeRight":
              a = wn(a, i - j);
              break;
          }
        }
        return { start: a, end: i };
      }
      function mT(a) {
        var i = a.match(xC);
        return i ? i[1].split(EC) : [];
      }
      function py(a, i, f) {
        i = wo(i, a);
        for (var v = -1, x = i.length, M = !1; ++v < x; ) {
          var j = Gr(i[v]);
          if (!(M = a != null && f(a, j)))
            break;
          a = a[j];
        }
        return M || ++v != x ? M : (x = a == null ? 0 : a.length, !!x && bu(x) && Fa(j, x) && (vt(a) || di(a)));
      }
      function gT(a) {
        var i = a.length, f = new a.constructor(i);
        return i && typeof a[0] == "string" && Bt.call(a, "index") && (f.index = a.index, f.input = a.input), f;
      }
      function hy(a) {
        return typeof a.constructor == "function" && !ul(a) ? Qi(Vc(a)) : {};
      }
      function vT(a, i, f) {
        var v = a.constructor;
        switch (i) {
          case Xe:
            return zf(a);
          case W:
          case z:
            return new v(+a);
          case Ve:
            return eT(a, f);
          case He:
          case Te:
          case Q:
          case ze:
          case lt:
          case ft:
          case nt:
          case Yt:
          case Ye:
            return Zv(a, f);
          case le:
            return new v();
          case Ie:
          case Ne:
            return new v(a);
          case ne:
            return tT(a);
          case we:
            return new v();
          case Re:
            return nT(a);
        }
      }
      function yT(a, i) {
        var f = i.length;
        if (!f)
          return a;
        var v = f - 1;
        return i[v] = (f > 1 ? "& " : "") + i[v], i = i.join(f > 2 ? ", " : " "), a.replace(wC, `{
/* [wrapped with ` + i + `] */
`);
      }
      function bT(a) {
        return vt(a) || di(a) || !!(bv && a && a[bv]);
      }
      function Fa(a, i) {
        var f = typeof a;
        return i = i ?? me, !!i && (f == "number" || f != "symbol" && IC.test(a)) && a > -1 && a % 1 == 0 && a < i;
      }
      function Hn(a, i, f) {
        if (!fn(f))
          return !1;
        var v = typeof i;
        return (v == "number" ? tr(f) && Fa(i, f.length) : v == "string" && i in f) ? Kr(f[i], a) : !1;
      }
      function Zf(a, i) {
        if (vt(a))
          return !1;
        var f = typeof a;
        return f == "number" || f == "symbol" || f == "boolean" || a == null || vr(a) ? !0 : vC.test(a) || !gC.test(a) || i != null && a in Xt(i);
      }
      function _T(a) {
        var i = typeof a;
        return i == "string" || i == "number" || i == "symbol" || i == "boolean" ? a !== "__proto__" : a === null;
      }
      function Xf(a) {
        var i = du(a), f = N[i];
        if (typeof f != "function" || !(i in Pt.prototype))
          return !1;
        if (a === f)
          return !0;
        var v = qf(f);
        return !!v && a === v[0];
      }
      function wT(a) {
        return !!mv && mv in a;
      }
      var xT = Wc ? $a : mp;
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
      function ET(a) {
        var i = vu(a, function(v) {
          return f.size === h && f.clear(), v;
        }), f = i.cache;
        return i;
      }
      function CT(a, i) {
        var f = a[1], v = i[1], x = f | v, M = x < (k | F | S), j = v == S && f == I || v == S && f == A && a[7].length <= i[8] || v == (S | A) && i[7].length <= i[8] && f == I;
        if (!(M || j))
          return a;
        v & k && (a[2] = i[2], x |= f & k ? 0 : E);
        var H = i[3];
        if (H) {
          var J = a[3];
          a[3] = J ? Qv(J, H, i[4]) : H, a[4] = J ? vo(a[3], m) : i[4];
        }
        return H = i[5], H && (J = a[5], a[5] = J ? Jv(J, H, i[6]) : H, a[6] = J ? vo(a[5], m) : i[6]), H = i[7], H && (a[7] = H), v & S && (a[8] = a[8] == null ? i[8] : Fn(a[8], i[8])), a[9] == null && (a[9] = i[9]), a[0] = i[0], a[1] = x, a;
      }
      function OT(a) {
        var i = [];
        if (a != null)
          for (var f in Xt(a))
            i.push(f);
        return i;
      }
      function ST(a) {
        return Uc.call(a);
      }
      function vy(a, i, f) {
        return i = wn(i === n ? a.length - 1 : i, 0), function() {
          for (var v = arguments, x = -1, M = wn(v.length - i, 0), j = ce(M); ++x < M; )
            j[x] = v[i + x];
          x = -1;
          for (var H = ce(i + 1); ++x < i; )
            H[x] = v[x];
          return H[i] = f(j), pr(a, this, H);
        };
      }
      function yy(a, i) {
        return i.length < 2 ? a : li(a, Nr(i, 0, -1));
      }
      function TT(a, i) {
        for (var f = a.length, v = Fn(i.length, f), x = er(a); v--; ) {
          var M = i[v];
          a[v] = Fa(M, f) ? x[M] : n;
        }
        return a;
      }
      function Qf(a, i) {
        if (!(i === "constructor" && typeof a[i] == "function") && i != "__proto__")
          return a[i];
      }
      var by = wy(zv), dl = zO || function(a, i) {
        return Rn.setTimeout(a, i);
      }, Jf = wy(ZS);
      function _y(a, i, f) {
        var v = i + "";
        return Jf(a, yT(v, PT(mT(v), f)));
      }
      function wy(a) {
        var i = 0, f = 0;
        return function() {
          var v = VO(), x = ae - (v - f);
          if (f = v, x > 0) {
            if (++i >= G)
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
      var xy = ET(function(a) {
        var i = [];
        return a.charCodeAt(0) === 46 && i.push(""), a.replace(yC, function(f, v, x, M) {
          i.push(x ? M.replace(OC, "$1") : v || f);
        }), i;
      });
      function Gr(a) {
        if (typeof a == "string" || vr(a))
          return a;
        var i = a + "";
        return i == "0" && 1 / a == -se ? "-0" : i;
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
      function PT(a, i) {
        return hr(ve, function(f) {
          var v = "_." + f[0];
          i & f[1] && !Fc(a, v) && a.push(v);
        }), a.sort();
      }
      function Ey(a) {
        if (a instanceof Pt)
          return a.clone();
        var i = new Pr(a.__wrapped__, a.__chain__);
        return i.__actions__ = er(a.__actions__), i.__index__ = a.__index__, i.__values__ = a.__values__, i;
      }
      function kT(a, i, f) {
        (f ? Hn(a, i, f) : i === n) ? i = 1 : i = wn(yt(i), 0);
        var v = a == null ? 0 : a.length;
        if (!v || i < 1)
          return [];
        for (var x = 0, M = 0, j = ce(Kc(v / i)); x < v; )
          j[M++] = Nr(a, x, x += i);
        return j;
      }
      function NT(a) {
        for (var i = -1, f = a == null ? 0 : a.length, v = 0, x = []; ++i < f; ) {
          var M = a[i];
          M && (x[v++] = M);
        }
        return x;
      }
      function IT() {
        var a = arguments.length;
        if (!a)
          return [];
        for (var i = ce(a - 1), f = arguments[0], v = a; v--; )
          i[v - 1] = arguments[v];
        return go(vt(f) ? er(f) : [f], Mn(i, 1));
      }
      var AT = wt(function(a, i) {
        return mn(a) ? ol(a, Mn(i, 1, mn, !0)) : [];
      }), RT = wt(function(a, i) {
        var f = Ir(i);
        return mn(f) && (f = n), mn(a) ? ol(a, Mn(i, 1, mn, !0), st(f, 2)) : [];
      }), MT = wt(function(a, i) {
        var f = Ir(i);
        return mn(f) && (f = n), mn(a) ? ol(a, Mn(i, 1, mn, !0), n, f) : [];
      });
      function DT(a, i, f) {
        var v = a == null ? 0 : a.length;
        return v ? (i = f || i === n ? 1 : yt(i), Nr(a, i < 0 ? 0 : i, v)) : [];
      }
      function LT(a, i, f) {
        var v = a == null ? 0 : a.length;
        return v ? (i = f || i === n ? 1 : yt(i), i = v - i, Nr(a, 0, i < 0 ? 0 : i)) : [];
      }
      function FT(a, i) {
        return a && a.length ? ou(a, st(i, 3), !0, !0) : [];
      }
      function $T(a, i) {
        return a && a.length ? ou(a, st(i, 3), !0) : [];
      }
      function BT(a, i, f, v) {
        var x = a == null ? 0 : a.length;
        return x ? (f && typeof f != "number" && Hn(a, i, f) && (f = 0, v = x), IS(a, i, f, v)) : [];
      }
      function Cy(a, i, f) {
        var v = a == null ? 0 : a.length;
        if (!v)
          return -1;
        var x = f == null ? 0 : yt(f);
        return x < 0 && (x = wn(v + x, 0)), $c(a, st(i, 3), x);
      }
      function Oy(a, i, f) {
        var v = a == null ? 0 : a.length;
        if (!v)
          return -1;
        var x = v - 1;
        return f !== n && (x = yt(f), x = f < 0 ? wn(v + x, 0) : Fn(x, v - 1)), $c(a, st(i, 3), x, !0);
      }
      function Sy(a) {
        var i = a == null ? 0 : a.length;
        return i ? Mn(a, 1) : [];
      }
      function jT(a) {
        var i = a == null ? 0 : a.length;
        return i ? Mn(a, se) : [];
      }
      function WT(a, i) {
        var f = a == null ? 0 : a.length;
        return f ? (i = i === n ? 1 : yt(i), Mn(a, i)) : [];
      }
      function zT(a) {
        for (var i = -1, f = a == null ? 0 : a.length, v = {}; ++i < f; ) {
          var x = a[i];
          ua(v, x[0], x[1]);
        }
        return v;
      }
      function Ty(a) {
        return a && a.length ? a[0] : n;
      }
      function UT(a, i, f) {
        var v = a == null ? 0 : a.length;
        if (!v)
          return -1;
        var x = f == null ? 0 : yt(f);
        return x < 0 && (x = wn(v + x, 0)), Yi(a, i, x);
      }
      function HT(a) {
        var i = a == null ? 0 : a.length;
        return i ? Nr(a, 0, -1) : [];
      }
      var YT = wt(function(a) {
        var i = ln(a, jf);
        return i.length && i[0] === a[0] ? Nf(i) : [];
      }), VT = wt(function(a) {
        var i = Ir(a), f = ln(a, jf);
        return i === Ir(f) ? i = n : f.pop(), f.length && f[0] === a[0] ? Nf(f, st(i, 2)) : [];
      }), qT = wt(function(a) {
        var i = Ir(a), f = ln(a, jf);
        return i = typeof i == "function" ? i : n, i && f.pop(), f.length && f[0] === a[0] ? Nf(f, n, i) : [];
      });
      function GT(a, i) {
        return a == null ? "" : HO.call(a, i);
      }
      function Ir(a) {
        var i = a == null ? 0 : a.length;
        return i ? a[i - 1] : n;
      }
      function KT(a, i, f) {
        var v = a == null ? 0 : a.length;
        if (!v)
          return -1;
        var x = v;
        return f !== n && (x = yt(f), x = x < 0 ? wn(v + x, 0) : Fn(x, v - 1)), i === i ? PO(a, i, x) : $c(a, sv, x, !0);
      }
      function ZT(a, i) {
        return a && a.length ? $v(a, yt(i)) : n;
      }
      var XT = wt(Py);
      function Py(a, i) {
        return a && a.length && i && i.length ? Mf(a, i) : a;
      }
      function QT(a, i, f) {
        return a && a.length && i && i.length ? Mf(a, i, st(f, 2)) : a;
      }
      function JT(a, i, f) {
        return a && a.length && i && i.length ? Mf(a, i, n, f) : a;
      }
      var eP = La(function(a, i) {
        var f = a == null ? 0 : a.length, v = Sf(a, i);
        return Wv(a, ln(i, function(x) {
          return Fa(x, f) ? +x : x;
        }).sort(Xv)), v;
      });
      function tP(a, i) {
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
        return a == null ? a : GO.call(a);
      }
      function nP(a, i, f) {
        var v = a == null ? 0 : a.length;
        return v ? (f && typeof f != "number" && Hn(a, i, f) ? (i = 0, f = v) : (i = i == null ? 0 : yt(i), f = f === n ? v : yt(f)), Nr(a, i, f)) : [];
      }
      function rP(a, i) {
        return au(a, i);
      }
      function aP(a, i, f) {
        return Ff(a, i, st(f, 2));
      }
      function oP(a, i) {
        var f = a == null ? 0 : a.length;
        if (f) {
          var v = au(a, i);
          if (v < f && Kr(a[v], i))
            return v;
        }
        return -1;
      }
      function iP(a, i) {
        return au(a, i, !0);
      }
      function sP(a, i, f) {
        return Ff(a, i, st(f, 2), !0);
      }
      function lP(a, i) {
        var f = a == null ? 0 : a.length;
        if (f) {
          var v = au(a, i, !0) - 1;
          if (Kr(a[v], i))
            return v;
        }
        return -1;
      }
      function cP(a) {
        return a && a.length ? Uv(a) : [];
      }
      function uP(a, i) {
        return a && a.length ? Uv(a, st(i, 2)) : [];
      }
      function dP(a) {
        var i = a == null ? 0 : a.length;
        return i ? Nr(a, 1, i) : [];
      }
      function fP(a, i, f) {
        return a && a.length ? (i = f || i === n ? 1 : yt(i), Nr(a, 0, i < 0 ? 0 : i)) : [];
      }
      function pP(a, i, f) {
        var v = a == null ? 0 : a.length;
        return v ? (i = f || i === n ? 1 : yt(i), i = v - i, Nr(a, i < 0 ? 0 : i, v)) : [];
      }
      function hP(a, i) {
        return a && a.length ? ou(a, st(i, 3), !1, !0) : [];
      }
      function mP(a, i) {
        return a && a.length ? ou(a, st(i, 3)) : [];
      }
      var gP = wt(function(a) {
        return _o(Mn(a, 1, mn, !0));
      }), vP = wt(function(a) {
        var i = Ir(a);
        return mn(i) && (i = n), _o(Mn(a, 1, mn, !0), st(i, 2));
      }), yP = wt(function(a) {
        var i = Ir(a);
        return i = typeof i == "function" ? i : n, _o(Mn(a, 1, mn, !0), n, i);
      });
      function bP(a) {
        return a && a.length ? _o(a) : [];
      }
      function _P(a, i) {
        return a && a.length ? _o(a, st(i, 2)) : [];
      }
      function wP(a, i) {
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
          return pr(i, n, v);
        });
      }
      var xP = wt(function(a, i) {
        return mn(a) ? ol(a, i) : [];
      }), EP = wt(function(a) {
        return Bf(mo(a, mn));
      }), CP = wt(function(a) {
        var i = Ir(a);
        return mn(i) && (i = n), Bf(mo(a, mn), st(i, 2));
      }), OP = wt(function(a) {
        var i = Ir(a);
        return i = typeof i == "function" ? i : n, Bf(mo(a, mn), n, i);
      }), SP = wt(tp);
      function TP(a, i) {
        return qv(a || [], i || [], al);
      }
      function PP(a, i) {
        return qv(a || [], i || [], ll);
      }
      var kP = wt(function(a) {
        var i = a.length, f = i > 1 ? a[i - 1] : n;
        return f = typeof f == "function" ? (a.pop(), f) : n, ky(a, f);
      });
      function Ny(a) {
        var i = N(a);
        return i.__chain__ = !0, i;
      }
      function NP(a, i) {
        return i(a), a;
      }
      function hu(a, i) {
        return i(a);
      }
      var IP = La(function(a) {
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
      function AP() {
        return Ny(this);
      }
      function RP() {
        return new Pr(this.value(), this.__chain__);
      }
      function MP() {
        this.__values__ === n && (this.__values__ = Hy(this.value()));
        var a = this.__index__ >= this.__values__.length, i = a ? n : this.__values__[this.__index__++];
        return { done: a, value: i };
      }
      function DP() {
        return this;
      }
      function LP(a) {
        for (var i, f = this; f instanceof Jc; ) {
          var v = Ey(f);
          v.__index__ = 0, v.__values__ = n, i ? x.__wrapped__ = v : i = v;
          var x = v;
          f = f.__wrapped__;
        }
        return x.__wrapped__ = a, i;
      }
      function FP() {
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
      function $P() {
        return Vv(this.__wrapped__, this.__actions__);
      }
      var BP = iu(function(a, i, f) {
        Bt.call(a, f) ? ++a[f] : ua(a, f, 1);
      });
      function jP(a, i, f) {
        var v = vt(a) ? ov : NS;
        return f && Hn(a, i, f) && (i = n), v(a, st(i, 3));
      }
      function WP(a, i) {
        var f = vt(a) ? mo : kv;
        return f(a, st(i, 3));
      }
      var zP = ry(Cy), UP = ry(Oy);
      function HP(a, i) {
        return Mn(mu(a, i), 1);
      }
      function YP(a, i) {
        return Mn(mu(a, i), se);
      }
      function VP(a, i, f) {
        return f = f === n ? 1 : yt(f), Mn(mu(a, i), f);
      }
      function Iy(a, i) {
        var f = vt(a) ? hr : bo;
        return f(a, st(i, 3));
      }
      function Ay(a, i) {
        var f = vt(a) ? dO : Pv;
        return f(a, st(i, 3));
      }
      var qP = iu(function(a, i, f) {
        Bt.call(a, f) ? a[f].push(i) : ua(a, f, [i]);
      });
      function GP(a, i, f, v) {
        a = tr(a) ? a : rs(a), f = f && !v ? yt(f) : 0;
        var x = a.length;
        return f < 0 && (f = wn(x + f, 0)), _u(a) ? f <= x && a.indexOf(i, f) > -1 : !!x && Yi(a, i, f) > -1;
      }
      var KP = wt(function(a, i, f) {
        var v = -1, x = typeof i == "function", M = tr(a) ? ce(a.length) : [];
        return bo(a, function(j) {
          M[++v] = x ? pr(i, j, f) : il(j, i, f);
        }), M;
      }), ZP = iu(function(a, i, f) {
        ua(a, f, i);
      });
      function mu(a, i) {
        var f = vt(a) ? ln : Dv;
        return f(a, st(i, 3));
      }
      function XP(a, i, f, v) {
        return a == null ? [] : (vt(i) || (i = i == null ? [] : [i]), f = v ? n : f, vt(f) || (f = f == null ? [] : [f]), Bv(a, i, f));
      }
      var QP = iu(function(a, i, f) {
        a[f ? 0 : 1].push(i);
      }, function() {
        return [[], []];
      });
      function JP(a, i, f) {
        var v = vt(a) ? pf : cv, x = arguments.length < 3;
        return v(a, st(i, 4), f, x, bo);
      }
      function ek(a, i, f) {
        var v = vt(a) ? fO : cv, x = arguments.length < 3;
        return v(a, st(i, 4), f, x, Pv);
      }
      function tk(a, i) {
        var f = vt(a) ? mo : kv;
        return f(a, yu(st(i, 3)));
      }
      function nk(a) {
        var i = vt(a) ? Cv : GS;
        return i(a);
      }
      function rk(a, i, f) {
        (f ? Hn(a, i, f) : i === n) ? i = 1 : i = yt(i);
        var v = vt(a) ? OS : KS;
        return v(a, i);
      }
      function ak(a) {
        var i = vt(a) ? SS : XS;
        return i(a);
      }
      function ok(a) {
        if (a == null)
          return 0;
        if (tr(a))
          return _u(a) ? qi(a) : a.length;
        var i = $n(a);
        return i == le || i == we ? a.size : Af(a).length;
      }
      function ik(a, i, f) {
        var v = vt(a) ? hf : QS;
        return f && Hn(a, i, f) && (i = n), v(a, st(i, 3));
      }
      var sk = wt(function(a, i) {
        if (a == null)
          return [];
        var f = i.length;
        return f > 1 && Hn(a, i[0], i[1]) ? i = [] : f > 2 && Hn(i[0], i[1], i[2]) && (i = [i[0]]), Bv(a, Mn(i, 1), []);
      }), gu = WO || function() {
        return Rn.Date.now();
      };
      function lk(a, i) {
        if (typeof i != "function")
          throw new Tr(u);
        return a = yt(a), function() {
          if (--a < 1)
            return i.apply(this, arguments);
        };
      }
      function Ry(a, i, f) {
        return i = f ? n : i, i = a && i == null ? a.length : i, Da(a, S, n, n, n, n, i);
      }
      function My(a, i) {
        var f;
        if (typeof i != "function")
          throw new Tr(u);
        return a = yt(a), function() {
          return --a > 0 && (f = i.apply(this, arguments)), a <= 1 && (i = n), f;
        };
      }
      var np = wt(function(a, i, f) {
        var v = k;
        if (f.length) {
          var x = vo(f, ts(np));
          v |= P;
        }
        return Da(a, v, i, f, x);
      }), Dy = wt(function(a, i, f) {
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
        var v = Da(a, T, n, n, n, n, n, i);
        return v.placeholder = Fy.placeholder, v;
      }
      function $y(a, i, f) {
        var v, x, M, j, H, J, Ee = 0, Ce = !1, Ae = !1, Ue = !0;
        if (typeof a != "function")
          throw new Tr(u);
        i = Ar(i) || 0, fn(f) && (Ce = !!f.leading, Ae = "maxWait" in f, M = Ae ? wn(Ar(f.maxWait) || 0, i) : M, Ue = "trailing" in f ? !!f.trailing : Ue);
        function Je(gn) {
          var Zr = v, ja = x;
          return v = x = n, Ee = gn, j = a.apply(ja, Zr), j;
        }
        function ct(gn) {
          return Ee = gn, H = dl(Ot, i), Ce ? Je(gn) : j;
        }
        function _t(gn) {
          var Zr = gn - J, ja = gn - Ee, ab = i - Zr;
          return Ae ? Fn(ab, M - ja) : ab;
        }
        function it(gn) {
          var Zr = gn - J, ja = gn - Ee;
          return J === n || Zr >= i || Zr < 0 || Ae && ja >= M;
        }
        function Ot() {
          var gn = gu();
          if (it(gn))
            return It(gn);
          H = dl(Ot, _t(gn));
        }
        function It(gn) {
          return H = n, Ue && v ? Je(gn) : (v = x = n, j);
        }
        function yr() {
          H !== n && Gv(H), Ee = 0, v = J = x = H = n;
        }
        function Yn() {
          return H === n ? j : It(gu());
        }
        function br() {
          var gn = gu(), Zr = it(gn);
          if (v = arguments, x = this, J = gn, Zr) {
            if (H === n)
              return ct(J);
            if (Ae)
              return Gv(H), H = dl(Ot, i), Je(J);
          }
          return H === n && (H = dl(Ot, i)), j;
        }
        return br.cancel = yr, br.flush = Yn, br;
      }
      var ck = wt(function(a, i) {
        return Tv(a, 1, i);
      }), uk = wt(function(a, i, f) {
        return Tv(a, Ar(i) || 0, f);
      });
      function dk(a) {
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
      function fk(a) {
        return My(2, a);
      }
      var pk = JS(function(a, i) {
        i = i.length == 1 && vt(i[0]) ? ln(i[0], mr(st())) : ln(Mn(i, 1), mr(st()));
        var f = i.length;
        return wt(function(v) {
          for (var x = -1, M = Fn(v.length, f); ++x < M; )
            v[x] = i[x].call(this, v[x]);
          return pr(a, this, v);
        });
      }), rp = wt(function(a, i) {
        var f = vo(i, ts(rp));
        return Da(a, P, n, i, f);
      }), By = wt(function(a, i) {
        var f = vo(i, ts(By));
        return Da(a, C, n, i, f);
      }), hk = La(function(a, i) {
        return Da(a, A, n, n, n, i);
      });
      function mk(a, i) {
        if (typeof a != "function")
          throw new Tr(u);
        return i = i === n ? i : yt(i), wt(a, i);
      }
      function gk(a, i) {
        if (typeof a != "function")
          throw new Tr(u);
        return i = i == null ? 0 : wn(yt(i), 0), wt(function(f) {
          var v = f[i], x = xo(f, 0, i);
          return v && go(x, v), pr(a, this, x);
        });
      }
      function vk(a, i, f) {
        var v = !0, x = !0;
        if (typeof a != "function")
          throw new Tr(u);
        return fn(f) && (v = "leading" in f ? !!f.leading : v, x = "trailing" in f ? !!f.trailing : x), $y(a, i, {
          leading: v,
          maxWait: i,
          trailing: x
        });
      }
      function yk(a) {
        return Ry(a, 1);
      }
      function bk(a, i) {
        return rp(Wf(i), a);
      }
      function _k() {
        if (!arguments.length)
          return [];
        var a = arguments[0];
        return vt(a) ? a : [a];
      }
      function wk(a) {
        return kr(a, b);
      }
      function xk(a, i) {
        return i = typeof i == "function" ? i : n, kr(a, b, i);
      }
      function Ek(a) {
        return kr(a, g | b);
      }
      function Ck(a, i) {
        return i = typeof i == "function" ? i : n, kr(a, g | b, i);
      }
      function Ok(a, i) {
        return i == null || Sv(a, i, Pn(i));
      }
      function Kr(a, i) {
        return a === i || a !== a && i !== i;
      }
      var Sk = uu(kf), Tk = uu(function(a, i) {
        return a >= i;
      }), di = Av(/* @__PURE__ */ function() {
        return arguments;
      }()) ? Av : function(a) {
        return pn(a) && Bt.call(a, "callee") && !yv.call(a, "callee");
      }, vt = ce.isArray, Pk = Jg ? mr(Jg) : LS;
      function tr(a) {
        return a != null && bu(a.length) && !$a(a);
      }
      function mn(a) {
        return pn(a) && tr(a);
      }
      function kk(a) {
        return a === !0 || a === !1 || pn(a) && Un(a) == W;
      }
      var Eo = UO || mp, Nk = ev ? mr(ev) : FS;
      function Ik(a) {
        return pn(a) && a.nodeType === 1 && !fl(a);
      }
      function Ak(a) {
        if (a == null)
          return !0;
        if (tr(a) && (vt(a) || typeof a == "string" || typeof a.splice == "function" || Eo(a) || ns(a) || di(a)))
          return !a.length;
        var i = $n(a);
        if (i == le || i == we)
          return !a.size;
        if (ul(a))
          return !Af(a).length;
        for (var f in a)
          if (Bt.call(a, f))
            return !1;
        return !0;
      }
      function Rk(a, i) {
        return sl(a, i);
      }
      function Mk(a, i, f) {
        f = typeof f == "function" ? f : n;
        var v = f ? f(a, i) : n;
        return v === n ? sl(a, i, n, f) : !!v;
      }
      function ap(a) {
        if (!pn(a))
          return !1;
        var i = Un(a);
        return i == D || i == $ || typeof a.message == "string" && typeof a.name == "string" && !fl(a);
      }
      function Dk(a) {
        return typeof a == "number" && _v(a);
      }
      function $a(a) {
        if (!fn(a))
          return !1;
        var i = Un(a);
        return i == q || i == K || i == ge || i == Y;
      }
      function jy(a) {
        return typeof a == "number" && a == yt(a);
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
      var Wy = tv ? mr(tv) : BS;
      function Lk(a, i) {
        return a === i || If(a, i, Gf(i));
      }
      function Fk(a, i, f) {
        return f = typeof f == "function" ? f : n, If(a, i, Gf(i), f);
      }
      function $k(a) {
        return zy(a) && a != +a;
      }
      function Bk(a) {
        if (xT(a))
          throw new mt(s);
        return Rv(a);
      }
      function jk(a) {
        return a === null;
      }
      function Wk(a) {
        return a == null;
      }
      function zy(a) {
        return typeof a == "number" || pn(a) && Un(a) == Ie;
      }
      function fl(a) {
        if (!pn(a) || Un(a) != Oe)
          return !1;
        var i = Vc(a);
        if (i === null)
          return !0;
        var f = Bt.call(i, "constructor") && i.constructor;
        return typeof f == "function" && f instanceof f && zc.call(f) == FO;
      }
      var op = nv ? mr(nv) : jS;
      function zk(a) {
        return jy(a) && a >= -me && a <= me;
      }
      var Uy = rv ? mr(rv) : WS;
      function _u(a) {
        return typeof a == "string" || !vt(a) && pn(a) && Un(a) == Ne;
      }
      function vr(a) {
        return typeof a == "symbol" || pn(a) && Un(a) == Re;
      }
      var ns = av ? mr(av) : zS;
      function Uk(a) {
        return a === n;
      }
      function Hk(a) {
        return pn(a) && $n(a) == Le;
      }
      function Yk(a) {
        return pn(a) && Un(a) == tt;
      }
      var Vk = uu(Rf), qk = uu(function(a, i) {
        return a <= i;
      });
      function Hy(a) {
        if (!a)
          return [];
        if (tr(a))
          return _u(a) ? Vr(a) : er(a);
        if (Js && a[Js])
          return OO(a[Js]());
        var i = $n(a), f = i == le ? _f : i == we ? Bc : rs;
        return f(a);
      }
      function Ba(a) {
        if (!a)
          return a === 0 ? a : 0;
        if (a = Ar(a), a === se || a === -se) {
          var i = a < 0 ? -1 : 1;
          return i * X;
        }
        return a === a ? a : 0;
      }
      function yt(a) {
        var i = Ba(a), f = i % 1;
        return i === i ? f ? i - f : i : 0;
      }
      function Yy(a) {
        return a ? si(yt(a), 0, oe) : 0;
      }
      function Ar(a) {
        if (typeof a == "number")
          return a;
        if (vr(a))
          return te;
        if (fn(a)) {
          var i = typeof a.valueOf == "function" ? a.valueOf() : a;
          a = fn(i) ? i + "" : i;
        }
        if (typeof a != "string")
          return a === 0 ? a : +a;
        a = uv(a);
        var f = PC.test(a);
        return f || NC.test(a) ? lO(a.slice(2), f ? 2 : 8) : TC.test(a) ? te : +a;
      }
      function Vy(a) {
        return fa(a, nr(a));
      }
      function Gk(a) {
        return a ? si(yt(a), -me, me) : a === 0 ? a : 0;
      }
      function jt(a) {
        return a == null ? "" : gr(a);
      }
      var Kk = Ji(function(a, i) {
        if (ul(i) || tr(i)) {
          fa(i, Pn(i), a);
          return;
        }
        for (var f in i)
          Bt.call(i, f) && al(a, f, i[f]);
      }), qy = Ji(function(a, i) {
        fa(i, nr(i), a);
      }), Gy = Ji(function(a, i, f, v) {
        fa(i, nr(i), a, v);
      }), ip = Ji(function(a, i, f, v) {
        fa(i, Pn(i), a, v);
      }), Zk = La(Sf);
      function Xk(a, i) {
        var f = Qi(a);
        return i == null ? f : Ov(f, i);
      }
      var Qk = wt(function(a, i) {
        a = Xt(a);
        var f = -1, v = i.length, x = v > 2 ? i[2] : n;
        for (x && Hn(i[0], i[1], x) && (v = 1); ++f < v; )
          for (var M = i[f], j = nr(M), H = -1, J = j.length; ++H < J; ) {
            var Ee = j[H], Ce = a[Ee];
            (Ce === n || Kr(Ce, Ki[Ee]) && !Bt.call(a, Ee)) && (a[Ee] = M[Ee]);
          }
        return a;
      }), Jk = wt(function(a) {
        return a.push(n, uy), pr(Ky, n, a);
      });
      function eN(a, i) {
        return iv(a, st(i, 3), da);
      }
      function tN(a, i) {
        return iv(a, st(i, 3), Pf);
      }
      function nN(a, i) {
        return a == null ? a : Tf(a, st(i, 3), nr);
      }
      function rN(a, i) {
        return a == null ? a : Nv(a, st(i, 3), nr);
      }
      function aN(a, i) {
        return a && da(a, st(i, 3));
      }
      function oN(a, i) {
        return a && Pf(a, st(i, 3));
      }
      function iN(a) {
        return a == null ? [] : nu(a, Pn(a));
      }
      function sN(a) {
        return a == null ? [] : nu(a, nr(a));
      }
      function sp(a, i, f) {
        var v = a == null ? n : li(a, i);
        return v === n ? f : v;
      }
      function lN(a, i) {
        return a != null && py(a, i, AS);
      }
      function lp(a, i) {
        return a != null && py(a, i, RS);
      }
      var cN = oy(function(a, i, f) {
        i != null && typeof i.toString != "function" && (i = Uc.call(i)), a[i] = f;
      }, up(rr)), uN = oy(function(a, i, f) {
        i != null && typeof i.toString != "function" && (i = Uc.call(i)), Bt.call(a, i) ? a[i].push(f) : a[i] = [f];
      }, st), dN = wt(il);
      function Pn(a) {
        return tr(a) ? Ev(a) : Af(a);
      }
      function nr(a) {
        return tr(a) ? Ev(a, !0) : US(a);
      }
      function fN(a, i) {
        var f = {};
        return i = st(i, 3), da(a, function(v, x, M) {
          ua(f, i(v, x, M), v);
        }), f;
      }
      function pN(a, i) {
        var f = {};
        return i = st(i, 3), da(a, function(v, x, M) {
          ua(f, x, i(v, x, M));
        }), f;
      }
      var hN = Ji(function(a, i, f) {
        ru(a, i, f);
      }), Ky = Ji(function(a, i, f, v) {
        ru(a, i, f, v);
      }), mN = La(function(a, i) {
        var f = {};
        if (a == null)
          return f;
        var v = !1;
        i = ln(i, function(M) {
          return M = wo(M, a), v || (v = M.length > 1), M;
        }), fa(a, Vf(a), f), v && (f = kr(f, g | y | b, uT));
        for (var x = i.length; x--; )
          $f(f, i[x]);
        return f;
      });
      function gN(a, i) {
        return Zy(a, yu(st(i)));
      }
      var vN = La(function(a, i) {
        return a == null ? {} : YS(a, i);
      });
      function Zy(a, i) {
        if (a == null)
          return {};
        var f = ln(Vf(a), function(v) {
          return [v];
        });
        return i = st(i), jv(a, f, function(v, x) {
          return i(v, x[0]);
        });
      }
      function yN(a, i, f) {
        i = wo(i, a);
        var v = -1, x = i.length;
        for (x || (x = 1, a = n); ++v < x; ) {
          var M = a == null ? n : a[Gr(i[v])];
          M === n && (v = x, M = f), a = $a(M) ? M.call(a) : M;
        }
        return a;
      }
      function bN(a, i, f) {
        return a == null ? a : ll(a, i, f);
      }
      function _N(a, i, f, v) {
        return v = typeof v == "function" ? v : n, a == null ? a : ll(a, i, f, v);
      }
      var Xy = ly(Pn), Qy = ly(nr);
      function wN(a, i, f) {
        var v = vt(a), x = v || Eo(a) || ns(a);
        if (i = st(i, 4), f == null) {
          var M = a && a.constructor;
          x ? f = v ? new M() : [] : fn(a) ? f = $a(M) ? Qi(Vc(a)) : {} : f = {};
        }
        return (x ? hr : da)(a, function(j, H, J) {
          return i(f, j, H, J);
        }), f;
      }
      function xN(a, i) {
        return a == null ? !0 : $f(a, i);
      }
      function EN(a, i, f) {
        return a == null ? a : Yv(a, i, Wf(f));
      }
      function CN(a, i, f, v) {
        return v = typeof v == "function" ? v : n, a == null ? a : Yv(a, i, Wf(f), v);
      }
      function rs(a) {
        return a == null ? [] : bf(a, Pn(a));
      }
      function ON(a) {
        return a == null ? [] : bf(a, nr(a));
      }
      function SN(a, i, f) {
        return f === n && (f = i, i = n), f !== n && (f = Ar(f), f = f === f ? f : 0), i !== n && (i = Ar(i), i = i === i ? i : 0), si(Ar(a), i, f);
      }
      function TN(a, i, f) {
        return i = Ba(i), f === n ? (f = i, i = 0) : f = Ba(f), a = Ar(a), MS(a, i, f);
      }
      function PN(a, i, f) {
        if (f && typeof f != "boolean" && Hn(a, i, f) && (i = f = n), f === n && (typeof i == "boolean" ? (f = i, i = n) : typeof a == "boolean" && (f = a, a = n)), a === n && i === n ? (a = 0, i = 1) : (a = Ba(a), i === n ? (i = a, a = 0) : i = Ba(i)), a > i) {
          var v = a;
          a = i, i = v;
        }
        if (f || a % 1 || i % 1) {
          var x = wv();
          return Fn(a + x * (i - a + sO("1e-" + ((x + "").length - 1))), i);
        }
        return Df(a, i);
      }
      var kN = es(function(a, i, f) {
        return i = i.toLowerCase(), a + (f ? Jy(i) : i);
      });
      function Jy(a) {
        return cp(jt(a).toLowerCase());
      }
      function eb(a) {
        return a = jt(a), a && a.replace(AC, _O).replace(XC, "");
      }
      function NN(a, i, f) {
        a = jt(a), i = gr(i);
        var v = a.length;
        f = f === n ? v : si(yt(f), 0, v);
        var x = f;
        return f -= i.length, f >= 0 && a.slice(f, x) == i;
      }
      function IN(a) {
        return a = jt(a), a && ca.test(a) ? a.replace(la, wO) : a;
      }
      function AN(a) {
        return a = jt(a), a && bC.test(a) ? a.replace(nf, "\\$&") : a;
      }
      var RN = es(function(a, i, f) {
        return a + (f ? "-" : "") + i.toLowerCase();
      }), MN = es(function(a, i, f) {
        return a + (f ? " " : "") + i.toLowerCase();
      }), DN = ny("toLowerCase");
      function LN(a, i, f) {
        a = jt(a), i = yt(i);
        var v = i ? qi(a) : 0;
        if (!i || v >= i)
          return a;
        var x = (i - v) / 2;
        return cu(Zc(x), f) + a + cu(Kc(x), f);
      }
      function FN(a, i, f) {
        a = jt(a), i = yt(i);
        var v = i ? qi(a) : 0;
        return i && v < i ? a + cu(i - v, f) : a;
      }
      function $N(a, i, f) {
        a = jt(a), i = yt(i);
        var v = i ? qi(a) : 0;
        return i && v < i ? cu(i - v, f) + a : a;
      }
      function BN(a, i, f) {
        return f || i == null ? i = 0 : i && (i = +i), qO(jt(a).replace(rf, ""), i || 0);
      }
      function jN(a, i, f) {
        return (f ? Hn(a, i, f) : i === n) ? i = 1 : i = yt(i), Lf(jt(a), i);
      }
      function WN() {
        var a = arguments, i = jt(a[0]);
        return a.length < 3 ? i : i.replace(a[1], a[2]);
      }
      var zN = es(function(a, i, f) {
        return a + (f ? "_" : "") + i.toLowerCase();
      });
      function UN(a, i, f) {
        return f && typeof f != "number" && Hn(a, i, f) && (i = f = n), f = f === n ? oe : f >>> 0, f ? (a = jt(a), a && (typeof i == "string" || i != null && !op(i)) && (i = gr(i), !i && Vi(a)) ? xo(Vr(a), 0, f) : a.split(i, f)) : [];
      }
      var HN = es(function(a, i, f) {
        return a + (f ? " " : "") + cp(i);
      });
      function YN(a, i, f) {
        return a = jt(a), f = f == null ? 0 : si(yt(f), 0, a.length), i = gr(i), a.slice(f, f + i.length) == i;
      }
      function VN(a, i, f) {
        var v = N.templateSettings;
        f && Hn(a, i, f) && (i = n), a = jt(a), i = ip({}, i, v, cy);
        var x = ip({}, i.imports, v.imports, cy), M = Pn(x), j = bf(x, M);
        hr(M, function(it) {
          if (Ig.test(it))
            throw new mt(d);
        });
        var H, J, Ee = 0, Ce = i.interpolate || Mc, Ae = "__p += '", Ue = wf(
          (i.escape || Mc).source + "|" + Ce.source + "|" + (Ce === Ng ? SC : Mc).source + "|" + (i.evaluate || Mc).source + "|$",
          "g"
        ), Je = "//# sourceURL=" + (Bt.call(i, "sourceURL") ? (i.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++nO + "]") + `
`;
        a.replace(Ue, function(it, Ot, It, yr, Yn, br) {
          return It || (It = yr), Ae += a.slice(Ee, br).replace(RC, xO), Ot && (H = !0, Ae += `' +
__e(` + Ot + `) +
'`), Yn && (J = !0, Ae += `';
` + Yn + `;
__p += '`), It && (Ae += `' +
((__t = (` + It + `)) == null ? '' : __t) +
'`), Ee = br + it.length, it;
        }), Ae += `';
`;
        var ct = Bt.call(i, "variable") && i.variable;
        if (!ct)
          Ae = `with (obj) {
` + Ae + `
}
`;
        else if (Ig.test(ct))
          throw new mt(c);
        Ae = (J ? Ae.replace($t, "") : Ae).replace(ot, "$1").replace(dn, "$1;"), Ae = "function(" + (ct || "obj") + `) {
` + (ct ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (H ? ", __e = _.escape" : "") + (J ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + Ae + `return __p
}`;
        var _t = nb(function() {
          return Ft(M, Je + "return " + Ae).apply(n, j);
        });
        if (_t.source = Ae, ap(_t))
          throw _t;
        return _t;
      }
      function qN(a) {
        return jt(a).toLowerCase();
      }
      function GN(a) {
        return jt(a).toUpperCase();
      }
      function KN(a, i, f) {
        if (a = jt(a), a && (f || i === n))
          return uv(a);
        if (!a || !(i = gr(i)))
          return a;
        var v = Vr(a), x = Vr(i), M = dv(v, x), j = fv(v, x) + 1;
        return xo(v, M, j).join("");
      }
      function ZN(a, i, f) {
        if (a = jt(a), a && (f || i === n))
          return a.slice(0, hv(a) + 1);
        if (!a || !(i = gr(i)))
          return a;
        var v = Vr(a), x = fv(v, Vr(i)) + 1;
        return xo(v, 0, x).join("");
      }
      function XN(a, i, f) {
        if (a = jt(a), a && (f || i === n))
          return a.replace(rf, "");
        if (!a || !(i = gr(i)))
          return a;
        var v = Vr(a), x = dv(v, Vr(i));
        return xo(v, x).join("");
      }
      function QN(a, i) {
        var f = U, v = re;
        if (fn(i)) {
          var x = "separator" in i ? i.separator : x;
          f = "length" in i ? yt(i.length) : f, v = "omission" in i ? gr(i.omission) : v;
        }
        a = jt(a);
        var M = a.length;
        if (Vi(a)) {
          var j = Vr(a);
          M = j.length;
        }
        if (f >= M)
          return a;
        var H = f - qi(v);
        if (H < 1)
          return v;
        var J = j ? xo(j, 0, H).join("") : a.slice(0, H);
        if (x === n)
          return J + v;
        if (j && (H += J.length - H), op(x)) {
          if (a.slice(H).search(x)) {
            var Ee, Ce = J;
            for (x.global || (x = wf(x.source, jt(Ag.exec(x)) + "g")), x.lastIndex = 0; Ee = x.exec(Ce); )
              var Ae = Ee.index;
            J = J.slice(0, Ae === n ? H : Ae);
          }
        } else if (a.indexOf(gr(x), H) != H) {
          var Ue = J.lastIndexOf(x);
          Ue > -1 && (J = J.slice(0, Ue));
        }
        return J + v;
      }
      function JN(a) {
        return a = jt(a), a && Rc.test(a) ? a.replace(Jn, kO) : a;
      }
      var eI = es(function(a, i, f) {
        return a + (f ? " " : "") + i.toUpperCase();
      }), cp = ny("toUpperCase");
      function tb(a, i, f) {
        return a = jt(a), i = f ? n : i, i === n ? CO(a) ? AO(a) : mO(a) : a.match(i) || [];
      }
      var nb = wt(function(a, i) {
        try {
          return pr(a, n, i);
        } catch (f) {
          return ap(f) ? f : new mt(f);
        }
      }), tI = La(function(a, i) {
        return hr(i, function(f) {
          f = Gr(f), ua(a, f, np(a[f], a));
        }), a;
      });
      function nI(a) {
        var i = a == null ? 0 : a.length, f = st();
        return a = i ? ln(a, function(v) {
          if (typeof v[1] != "function")
            throw new Tr(u);
          return [f(v[0]), v[1]];
        }) : [], wt(function(v) {
          for (var x = -1; ++x < i; ) {
            var M = a[x];
            if (pr(M[0], this, v))
              return pr(M[1], this, v);
          }
        });
      }
      function rI(a) {
        return kS(kr(a, g));
      }
      function up(a) {
        return function() {
          return a;
        };
      }
      function aI(a, i) {
        return a == null || a !== a ? i : a;
      }
      var oI = ay(), iI = ay(!0);
      function rr(a) {
        return a;
      }
      function dp(a) {
        return Mv(typeof a == "function" ? a : kr(a, g));
      }
      function sI(a) {
        return Lv(kr(a, g));
      }
      function lI(a, i) {
        return Fv(a, kr(i, g));
      }
      var cI = wt(function(a, i) {
        return function(f) {
          return il(f, a, i);
        };
      }), uI = wt(function(a, i) {
        return function(f) {
          return il(a, f, i);
        };
      });
      function fp(a, i, f) {
        var v = Pn(i), x = nu(i, v);
        f == null && !(fn(i) && (x.length || !v.length)) && (f = i, i = a, a = this, x = nu(i, Pn(i)));
        var M = !(fn(f) && "chain" in f) || !!f.chain, j = $a(a);
        return hr(x, function(H) {
          var J = i[H];
          a[H] = J, j && (a.prototype[H] = function() {
            var Ee = this.__chain__;
            if (M || Ee) {
              var Ce = a(this.__wrapped__), Ae = Ce.__actions__ = er(this.__actions__);
              return Ae.push({ func: J, args: arguments, thisArg: a }), Ce.__chain__ = Ee, Ce;
            }
            return J.apply(a, go([this.value()], arguments));
          });
        }), a;
      }
      function dI() {
        return Rn._ === this && (Rn._ = $O), this;
      }
      function pp() {
      }
      function fI(a) {
        return a = yt(a), wt(function(i) {
          return $v(i, a);
        });
      }
      var pI = Uf(ln), hI = Uf(ov), mI = Uf(hf);
      function rb(a) {
        return Zf(a) ? mf(Gr(a)) : VS(a);
      }
      function gI(a) {
        return function(i) {
          return a == null ? n : li(a, i);
        };
      }
      var vI = iy(), yI = iy(!0);
      function hp() {
        return [];
      }
      function mp() {
        return !1;
      }
      function bI() {
        return {};
      }
      function _I() {
        return "";
      }
      function wI() {
        return !0;
      }
      function xI(a, i) {
        if (a = yt(a), a < 1 || a > me)
          return [];
        var f = oe, v = Fn(a, oe);
        i = st(i), a -= oe;
        for (var x = yf(v, i); ++f < a; )
          i(f);
        return x;
      }
      function EI(a) {
        return vt(a) ? ln(a, Gr) : vr(a) ? [a] : er(xy(jt(a)));
      }
      function CI(a) {
        var i = ++LO;
        return jt(a) + i;
      }
      var OI = lu(function(a, i) {
        return a + i;
      }, 0), SI = Hf("ceil"), TI = lu(function(a, i) {
        return a / i;
      }, 1), PI = Hf("floor");
      function kI(a) {
        return a && a.length ? tu(a, rr, kf) : n;
      }
      function NI(a, i) {
        return a && a.length ? tu(a, st(i, 2), kf) : n;
      }
      function II(a) {
        return lv(a, rr);
      }
      function AI(a, i) {
        return lv(a, st(i, 2));
      }
      function RI(a) {
        return a && a.length ? tu(a, rr, Rf) : n;
      }
      function MI(a, i) {
        return a && a.length ? tu(a, st(i, 2), Rf) : n;
      }
      var DI = lu(function(a, i) {
        return a * i;
      }, 1), LI = Hf("round"), FI = lu(function(a, i) {
        return a - i;
      }, 0);
      function $I(a) {
        return a && a.length ? vf(a, rr) : 0;
      }
      function BI(a, i) {
        return a && a.length ? vf(a, st(i, 2)) : 0;
      }
      return N.after = lk, N.ary = Ry, N.assign = Kk, N.assignIn = qy, N.assignInWith = Gy, N.assignWith = ip, N.at = Zk, N.before = My, N.bind = np, N.bindAll = tI, N.bindKey = Dy, N.castArray = _k, N.chain = Ny, N.chunk = kT, N.compact = NT, N.concat = IT, N.cond = nI, N.conforms = rI, N.constant = up, N.countBy = BP, N.create = Xk, N.curry = Ly, N.curryRight = Fy, N.debounce = $y, N.defaults = Qk, N.defaultsDeep = Jk, N.defer = ck, N.delay = uk, N.difference = AT, N.differenceBy = RT, N.differenceWith = MT, N.drop = DT, N.dropRight = LT, N.dropRightWhile = FT, N.dropWhile = $T, N.fill = BT, N.filter = WP, N.flatMap = HP, N.flatMapDeep = YP, N.flatMapDepth = VP, N.flatten = Sy, N.flattenDeep = jT, N.flattenDepth = WT, N.flip = dk, N.flow = oI, N.flowRight = iI, N.fromPairs = zT, N.functions = iN, N.functionsIn = sN, N.groupBy = qP, N.initial = HT, N.intersection = YT, N.intersectionBy = VT, N.intersectionWith = qT, N.invert = cN, N.invertBy = uN, N.invokeMap = KP, N.iteratee = dp, N.keyBy = ZP, N.keys = Pn, N.keysIn = nr, N.map = mu, N.mapKeys = fN, N.mapValues = pN, N.matches = sI, N.matchesProperty = lI, N.memoize = vu, N.merge = hN, N.mergeWith = Ky, N.method = cI, N.methodOf = uI, N.mixin = fp, N.negate = yu, N.nthArg = fI, N.omit = mN, N.omitBy = gN, N.once = fk, N.orderBy = XP, N.over = pI, N.overArgs = pk, N.overEvery = hI, N.overSome = mI, N.partial = rp, N.partialRight = By, N.partition = QP, N.pick = vN, N.pickBy = Zy, N.property = rb, N.propertyOf = gI, N.pull = XT, N.pullAll = Py, N.pullAllBy = QT, N.pullAllWith = JT, N.pullAt = eP, N.range = vI, N.rangeRight = yI, N.rearg = hk, N.reject = tk, N.remove = tP, N.rest = mk, N.reverse = ep, N.sampleSize = rk, N.set = bN, N.setWith = _N, N.shuffle = ak, N.slice = nP, N.sortBy = sk, N.sortedUniq = cP, N.sortedUniqBy = uP, N.split = UN, N.spread = gk, N.tail = dP, N.take = fP, N.takeRight = pP, N.takeRightWhile = hP, N.takeWhile = mP, N.tap = NP, N.throttle = vk, N.thru = hu, N.toArray = Hy, N.toPairs = Xy, N.toPairsIn = Qy, N.toPath = EI, N.toPlainObject = Vy, N.transform = wN, N.unary = yk, N.union = gP, N.unionBy = vP, N.unionWith = yP, N.uniq = bP, N.uniqBy = _P, N.uniqWith = wP, N.unset = xN, N.unzip = tp, N.unzipWith = ky, N.update = EN, N.updateWith = CN, N.values = rs, N.valuesIn = ON, N.without = xP, N.words = tb, N.wrap = bk, N.xor = EP, N.xorBy = CP, N.xorWith = OP, N.zip = SP, N.zipObject = TP, N.zipObjectDeep = PP, N.zipWith = kP, N.entries = Xy, N.entriesIn = Qy, N.extend = qy, N.extendWith = Gy, fp(N, N), N.add = OI, N.attempt = nb, N.camelCase = kN, N.capitalize = Jy, N.ceil = SI, N.clamp = SN, N.clone = wk, N.cloneDeep = Ek, N.cloneDeepWith = Ck, N.cloneWith = xk, N.conformsTo = Ok, N.deburr = eb, N.defaultTo = aI, N.divide = TI, N.endsWith = NN, N.eq = Kr, N.escape = IN, N.escapeRegExp = AN, N.every = jP, N.find = zP, N.findIndex = Cy, N.findKey = eN, N.findLast = UP, N.findLastIndex = Oy, N.findLastKey = tN, N.floor = PI, N.forEach = Iy, N.forEachRight = Ay, N.forIn = nN, N.forInRight = rN, N.forOwn = aN, N.forOwnRight = oN, N.get = sp, N.gt = Sk, N.gte = Tk, N.has = lN, N.hasIn = lp, N.head = Ty, N.identity = rr, N.includes = GP, N.indexOf = UT, N.inRange = TN, N.invoke = dN, N.isArguments = di, N.isArray = vt, N.isArrayBuffer = Pk, N.isArrayLike = tr, N.isArrayLikeObject = mn, N.isBoolean = kk, N.isBuffer = Eo, N.isDate = Nk, N.isElement = Ik, N.isEmpty = Ak, N.isEqual = Rk, N.isEqualWith = Mk, N.isError = ap, N.isFinite = Dk, N.isFunction = $a, N.isInteger = jy, N.isLength = bu, N.isMap = Wy, N.isMatch = Lk, N.isMatchWith = Fk, N.isNaN = $k, N.isNative = Bk, N.isNil = Wk, N.isNull = jk, N.isNumber = zy, N.isObject = fn, N.isObjectLike = pn, N.isPlainObject = fl, N.isRegExp = op, N.isSafeInteger = zk, N.isSet = Uy, N.isString = _u, N.isSymbol = vr, N.isTypedArray = ns, N.isUndefined = Uk, N.isWeakMap = Hk, N.isWeakSet = Yk, N.join = GT, N.kebabCase = RN, N.last = Ir, N.lastIndexOf = KT, N.lowerCase = MN, N.lowerFirst = DN, N.lt = Vk, N.lte = qk, N.max = kI, N.maxBy = NI, N.mean = II, N.meanBy = AI, N.min = RI, N.minBy = MI, N.stubArray = hp, N.stubFalse = mp, N.stubObject = bI, N.stubString = _I, N.stubTrue = wI, N.multiply = DI, N.nth = ZT, N.noConflict = dI, N.noop = pp, N.now = gu, N.pad = LN, N.padEnd = FN, N.padStart = $N, N.parseInt = BN, N.random = PN, N.reduce = JP, N.reduceRight = ek, N.repeat = jN, N.replace = WN, N.result = yN, N.round = LI, N.runInContext = Z, N.sample = nk, N.size = ok, N.snakeCase = zN, N.some = ik, N.sortedIndex = rP, N.sortedIndexBy = aP, N.sortedIndexOf = oP, N.sortedLastIndex = iP, N.sortedLastIndexBy = sP, N.sortedLastIndexOf = lP, N.startCase = HN, N.startsWith = YN, N.subtract = FI, N.sum = $I, N.sumBy = BI, N.template = VN, N.times = xI, N.toFinite = Ba, N.toInteger = yt, N.toLength = Yy, N.toLower = qN, N.toNumber = Ar, N.toSafeInteger = Gk, N.toString = jt, N.toUpper = GN, N.trim = KN, N.trimEnd = ZN, N.trimStart = XN, N.truncate = QN, N.unescape = JN, N.uniqueId = CI, N.upperCase = eI, N.upperFirst = cp, N.each = Iy, N.eachRight = Ay, N.first = Ty, fp(N, function() {
        var a = {};
        return da(N, function(i, f) {
          Bt.call(N.prototype, f) || (a[f] = i);
        }), a;
      }(), { chain: !1 }), N.VERSION = r, hr(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(a) {
        N[a].placeholder = N;
      }), hr(["drop", "take"], function(a, i) {
        Pt.prototype[a] = function(f) {
          f = f === n ? 1 : wn(yt(f), 0);
          var v = this.__filtered__ && !i ? new Pt(this) : this.clone();
          return v.__filtered__ ? v.__takeCount__ = Fn(f, v.__takeCount__) : v.__views__.push({
            size: Fn(f, oe),
            type: a + (v.__dir__ < 0 ? "Right" : "")
          }), v;
        }, Pt.prototype[a + "Right"] = function(f) {
          return this.reverse()[a](f).reverse();
        };
      }), hr(["filter", "map", "takeWhile"], function(a, i) {
        var f = i + 1, v = f == he || f == ke;
        Pt.prototype[a] = function(x) {
          var M = this.clone();
          return M.__iteratees__.push({
            iteratee: st(x, 3),
            type: f
          }), M.__filtered__ = M.__filtered__ || v, M;
        };
      }), hr(["head", "last"], function(a, i) {
        var f = "take" + (i ? "Right" : "");
        Pt.prototype[a] = function() {
          return this[f](1).value()[0];
        };
      }), hr(["initial", "tail"], function(a, i) {
        var f = "drop" + (i ? "" : "Right");
        Pt.prototype[a] = function() {
          return this.__filtered__ ? new Pt(this) : this[f](1);
        };
      }), Pt.prototype.compact = function() {
        return this.filter(rr);
      }, Pt.prototype.find = function(a) {
        return this.filter(a).head();
      }, Pt.prototype.findLast = function(a) {
        return this.reverse().find(a);
      }, Pt.prototype.invokeMap = wt(function(a, i) {
        return typeof a == "function" ? new Pt(this) : this.map(function(f) {
          return il(f, a, i);
        });
      }), Pt.prototype.reject = function(a) {
        return this.filter(yu(st(a)));
      }, Pt.prototype.slice = function(a, i) {
        a = yt(a);
        var f = this;
        return f.__filtered__ && (a > 0 || i < 0) ? new Pt(f) : (a < 0 ? f = f.takeRight(-a) : a && (f = f.drop(a)), i !== n && (i = yt(i), f = i < 0 ? f.dropRight(-i) : f.take(i - a)), f);
      }, Pt.prototype.takeRightWhile = function(a) {
        return this.reverse().takeWhile(a).reverse();
      }, Pt.prototype.toArray = function() {
        return this.take(oe);
      }, da(Pt.prototype, function(a, i) {
        var f = /^(?:filter|find|map|reject)|While$/.test(i), v = /^(?:head|last)$/.test(i), x = N[v ? "take" + (i == "last" ? "Right" : "") : i], M = v || /^find/.test(i);
        x && (N.prototype[i] = function() {
          var j = this.__wrapped__, H = v ? [1] : arguments, J = j instanceof Pt, Ee = H[0], Ce = J || vt(j), Ae = function(Ot) {
            var It = x.apply(N, go([Ot], H));
            return v && Ue ? It[0] : It;
          };
          Ce && f && typeof Ee == "function" && Ee.length != 1 && (J = Ce = !1);
          var Ue = this.__chain__, Je = !!this.__actions__.length, ct = M && !Ue, _t = J && !Je;
          if (!M && Ce) {
            j = _t ? j : new Pt(this);
            var it = a.apply(j, H);
            return it.__actions__.push({ func: hu, args: [Ae], thisArg: n }), new Pr(it, Ue);
          }
          return ct && _t ? a.apply(this, H) : (it = this.thru(Ae), ct ? v ? it.value()[0] : it.value() : it);
        });
      }), hr(["pop", "push", "shift", "sort", "splice", "unshift"], function(a) {
        var i = jc[a], f = /^(?:push|sort|unshift)$/.test(a) ? "tap" : "thru", v = /^(?:pop|shift)$/.test(a);
        N.prototype[a] = function() {
          var x = arguments;
          if (v && !this.__chain__) {
            var M = this.value();
            return i.apply(vt(M) ? M : [], x);
          }
          return this[f](function(j) {
            return i.apply(vt(j) ? j : [], x);
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
      }], Pt.prototype.clone = eS, Pt.prototype.reverse = tS, Pt.prototype.value = nS, N.prototype.at = IP, N.prototype.chain = AP, N.prototype.commit = RP, N.prototype.next = MP, N.prototype.plant = LP, N.prototype.reverse = FP, N.prototype.toJSON = N.prototype.valueOf = N.prototype.value = $P, N.prototype.first = N.prototype.head, Js && (N.prototype[Js] = DP), N;
    }, Gi = RO();
    ri ? ((ri.exports = Gi)._ = Gi, uf._ = Gi) : Rn._ = Gi;
  }).call(is);
})(td, td.exports);
var R = td.exports;
//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Rw;
function We() {
  return Rw.apply(null, arguments);
}
function PB(e) {
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
function or(e) {
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
function kB() {
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
function bt(e) {
  return e._pf == null && (e._pf = kB()), e._pf;
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
  if (r && (t = bt(e), n = Ch.call(t.parsedDateParts, function(o) {
    return o != null;
  }), r = t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n), e._strict && (r = r && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(e))
    e._isValid = r;
  else
    return r;
  return e._isValid;
}
function Md(e) {
  var t = Na(NaN);
  return e != null ? ko(bt(t), e) : bt(t).userInvalidated = !0, t;
}
var O0 = We.momentProperties = [], Mp = !1;
function Rm(e, t) {
  var n, r, o, s = O0.length;
  if (or(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), or(t._i) || (e._i = t._i), or(t._f) || (e._f = t._f), or(t._l) || (e._l = t._l), or(t._strict) || (e._strict = t._strict), or(t._tzm) || (e._tzm = t._tzm), or(t._isUTC) || (e._isUTC = t._isUTC), or(t._offset) || (e._offset = t._offset), or(t._pf) || (e._pf = bt(t)), or(t._locale) || (e._locale = t._locale), s > 0)
    for (n = 0; n < s; n++)
      r = O0[n], o = t[r], or(o) || (e[r] = o);
  return e;
}
function Oc(e) {
  Rm(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), Mp === !1 && (Mp = !0, We.updateOffset(this), Mp = !1);
}
function ra(e) {
  return e instanceof Oc || e != null && e._isAMomentObject != null;
}
function Dw(e) {
  We.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function Hr(e, t) {
  var n = !0;
  return ko(function() {
    if (We.deprecationHandler != null && We.deprecationHandler(null, e), n) {
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
  We.deprecationHandler != null && We.deprecationHandler(e, t), S0[e] || (Dw(t), S0[e] = !0);
}
We.suppressDeprecationWarnings = !1;
We.deprecationHandler = null;
function Ia(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function NB(e) {
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
var IB = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function AB(e, t, n) {
  var r = this._calendar[e] || this._calendar.sameElse;
  return Ia(r) ? r.call(t, n) : r;
}
function Pa(e, t, n) {
  var r = "" + Math.abs(e), o = t - r.length, s = e >= 0;
  return (s ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, o)).toString().substr(1) + r;
}
var Dm = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Ou = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Dp = {}, ms = {};
function rt(e, t, n, r) {
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
function RB(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function MB(e) {
  var t = e.match(Dm), n, r;
  for (n = 0, r = t.length; n < r; n++)
    ms[t[n]] ? t[n] = ms[t[n]] : t[n] = RB(t[n]);
  return function(o) {
    var s = "", u;
    for (u = 0; u < r; u++)
      s += Ia(t[u]) ? t[u].call(o, e) : t[u];
    return s;
  };
}
function Fu(e, t) {
  return e.isValid() ? (t = Fw(t, e.localeData()), Dp[t] = Dp[t] || MB(t), Dp[t](e)) : e.localeData().invalidDate();
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
var DB = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function LB(e) {
  var t = this._longDateFormat[e], n = this._longDateFormat[e.toUpperCase()];
  return t || !n ? t : (this._longDateFormat[e] = n.match(Dm).map(function(r) {
    return r === "MMMM" || r === "MM" || r === "DD" || r === "dddd" ? r.slice(1) : r;
  }).join(""), this._longDateFormat[e]);
}
var FB = "Invalid date";
function $B() {
  return this._invalidDate;
}
var BB = "%d", jB = /\d{1,2}/;
function WB(e) {
  return this._ordinal.replace("%d", e);
}
var zB = {
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
function UB(e, t, n, r) {
  var o = this._relativeTime[n];
  return Ia(o) ? o(e, t, n, r) : o.replace(/%d/i, e);
}
function HB(e, t) {
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
var YB = {
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
function VB(e) {
  var t = [], n;
  for (n in e)
    Dt(e, n) && t.push({ unit: n, priority: YB[n] });
  return t.sort(function(r, o) {
    return r.priority - o.priority;
  }), t;
}
var $w = /\d/, Cr = /\d\d/, Bw = /\d{3}/, Fm = /\d{4}/, Dd = /[+-]?\d{6}/, sn = /\d\d?/, jw = /\d\d\d\d?/, Ww = /\d\d\d\d\d\d?/, Ld = /\d{1,3}/, $m = /\d{1,4}/, Fd = /[+-]?\d{1,6}/, qs = /\d+/, $d = /[+-]?\d+/, qB = /Z|[+-]\d\d:?\d\d/gi, Bd = /Z|[+-]\d\d(?::?\d\d)?/gi, GB = /[+-]?\d+(\.\d{1,3})?/, Sc = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, Gs = /^[1-9]\d?/, Bm = /^([1-9]\d|\d)/, nd;
nd = {};
function Ke(e, t, n) {
  nd[e] = Ia(t) ? t : function(r, o) {
    return r && n ? n : t;
  };
}
function KB(e, t) {
  return Dt(nd, e) ? nd[e](t._strict, t._locale) : new RegExp(ZB(e));
}
function ZB(e) {
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
function Zt(e, t) {
  var n, r = t, o;
  for (typeof e == "string" && (e = [e]), eo(t) && (r = function(s, u) {
    u[t] = kt(s);
  }), o = e.length, n = 0; n < o; n++)
    Th[e[n]] = r;
}
function Tc(e, t) {
  Zt(e, function(n, r, o, s) {
    o._w = o._w || {}, t(n, o._w, o, s);
  });
}
function XB(e, t, n) {
  t != null && Dt(Th, e) && Th[e](t, n._a, n, e);
}
function jd(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
var jn = 0, Va = 1, va = 2, On = 3, Jr = 4, qa = 5, bi = 6, QB = 7, JB = 8;
rt("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? Pa(e, 4) : "+" + e;
});
rt(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
rt(0, ["YYYY", 4], 0, "year");
rt(0, ["YYYYY", 5], 0, "year");
rt(0, ["YYYYYY", 6, !0], 0, "year");
Ke("Y", $d);
Ke("YY", sn, Cr);
Ke("YYYY", $m, Fm);
Ke("YYYYY", Fd, Dd);
Ke("YYYYYY", Fd, Dd);
Zt(["YYYYY", "YYYYYY"], jn);
Zt("YYYY", function(e, t) {
  t[jn] = e.length === 2 ? We.parseTwoDigitYear(e) : kt(e);
});
Zt("YY", function(e, t) {
  t[jn] = We.parseTwoDigitYear(e);
});
Zt("Y", function(e, t) {
  t[jn] = parseInt(e, 10);
});
function Ml(e) {
  return jd(e) ? 366 : 365;
}
We.parseTwoDigitYear = function(e) {
  return kt(e) + (kt(e) > 68 ? 1900 : 2e3);
};
var zw = Ks("FullYear", !0);
function ej() {
  return jd(this.year());
}
function Ks(e, t) {
  return function(n) {
    return n != null ? (Uw(this, e, n), We.updateOffset(this, t), this) : sc(this, e);
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
function tj(e) {
  return e = Yr(e), Ia(this[e]) ? this[e]() : this;
}
function nj(e, t) {
  if (typeof e == "object") {
    e = Lm(e);
    var n = VB(e), r, o = n.length;
    for (r = 0; r < o; r++)
      this[n[r].unit](e[n[r].unit]);
  } else if (e = Yr(e), Ia(this[e]))
    return this[e](t);
  return this;
}
function rj(e, t) {
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
  var n = rj(t, 12);
  return e += (t - n) / 12, n === 1 ? jd(e) ? 29 : 28 : 31 - n % 7 % 2;
}
rt("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
rt("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
rt("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
Ke("M", sn, Gs);
Ke("MM", sn, Cr);
Ke("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
Ke("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
Zt(["M", "MM"], function(e, t) {
  t[Va] = kt(e) - 1;
});
Zt(["MMM", "MMMM"], function(e, t, n, r) {
  var o = n._locale.monthsParse(e, r, n._strict);
  o != null ? t[Va] = o : bt(n).invalidMonth = e;
});
var aj = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), Hw = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Yw = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, oj = Sc, ij = Sc;
function sj(e, t) {
  return e ? na(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Yw).test(t) ? "format" : "standalone"][e.month()] : na(this._months) ? this._months : this._months.standalone;
}
function lj(e, t) {
  return e ? na(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Yw.test(t) ? "format" : "standalone"][e.month()] : na(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function cj(e, t, n) {
  var r, o, s, u = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r)
      s = Na([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(
        s,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[r] = this.months(s, "").toLocaleLowerCase();
  return n ? t === "MMM" ? (o = vn.call(this._shortMonthsParse, u), o !== -1 ? o : null) : (o = vn.call(this._longMonthsParse, u), o !== -1 ? o : null) : t === "MMM" ? (o = vn.call(this._shortMonthsParse, u), o !== -1 ? o : (o = vn.call(this._longMonthsParse, u), o !== -1 ? o : null)) : (o = vn.call(this._longMonthsParse, u), o !== -1 ? o : (o = vn.call(this._shortMonthsParse, u), o !== -1 ? o : null));
}
function uj(e, t, n) {
  var r, o, s;
  if (this._monthsParseExact)
    return cj.call(this, e, t, n);
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
function Vw(e, t) {
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
function qw(e) {
  return e != null ? (Vw(this, e), We.updateOffset(this, !0), this) : sc(this, "Month");
}
function dj() {
  return jm(this.year(), this.month());
}
function fj(e) {
  return this._monthsParseExact ? (Dt(this, "_monthsRegex") || Gw.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (Dt(this, "_monthsShortRegex") || (this._monthsShortRegex = oj), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function pj(e) {
  return this._monthsParseExact ? (Dt(this, "_monthsRegex") || Gw.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (Dt(this, "_monthsRegex") || (this._monthsRegex = ij), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
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
function hj(e, t, n, r, o, s, u) {
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
rt("w", ["ww", 2], "wo", "week");
rt("W", ["WW", 2], "Wo", "isoWeek");
Ke("w", sn, Gs);
Ke("ww", sn, Cr);
Ke("W", sn, Gs);
Ke("WW", sn, Cr);
Tc(
  ["w", "ww", "W", "WW"],
  function(e, t, n, r) {
    t[r.substr(0, 1)] = kt(e);
  }
);
function mj(e) {
  return cc(e, this._week.dow, this._week.doy).week;
}
var gj = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function vj() {
  return this._week.dow;
}
function yj() {
  return this._week.doy;
}
function bj(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function _j(e) {
  var t = cc(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
rt("d", 0, "do", "day");
rt("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
rt("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
rt("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
rt("e", 0, 0, "weekday");
rt("E", 0, 0, "isoWeekday");
Ke("d", sn);
Ke("e", sn);
Ke("E", sn);
Ke("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
Ke("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
Ke("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
Tc(["dd", "ddd", "dddd"], function(e, t, n, r) {
  var o = n._locale.weekdaysParse(e, r, n._strict);
  o != null ? t.d = o : bt(n).invalidWeekday = e;
});
Tc(["d", "e", "E"], function(e, t, n, r) {
  t[r] = kt(e);
});
function wj(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function xj(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function Wm(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var Ej = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Zw = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Cj = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), Oj = Sc, Sj = Sc, Tj = Sc;
function Pj(e, t) {
  var n = na(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? Wm(n, this._week.dow) : e ? n[e.day()] : n;
}
function kj(e) {
  return e === !0 ? Wm(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function Nj(e) {
  return e === !0 ? Wm(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function Ij(e, t, n) {
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
function Aj(e, t, n) {
  var r, o, s;
  if (this._weekdaysParseExact)
    return Ij.call(this, e, t, n);
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
function Rj(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = sc(this, "Day");
  return e != null ? (e = wj(e, this.localeData()), this.add(e - t, "d")) : t;
}
function Mj(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function Dj(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = xj(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function Lj(e) {
  return this._weekdaysParseExact ? (Dt(this, "_weekdaysRegex") || zm.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (Dt(this, "_weekdaysRegex") || (this._weekdaysRegex = Oj), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function Fj(e) {
  return this._weekdaysParseExact ? (Dt(this, "_weekdaysRegex") || zm.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (Dt(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Sj), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function $j(e) {
  return this._weekdaysParseExact ? (Dt(this, "_weekdaysRegex") || zm.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (Dt(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Tj), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
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
function Bj() {
  return this.hours() || 24;
}
rt("H", ["HH", 2], 0, "hour");
rt("h", ["hh", 2], 0, Um);
rt("k", ["kk", 2], 0, Bj);
rt("hmm", 0, 0, function() {
  return "" + Um.apply(this) + Pa(this.minutes(), 2);
});
rt("hmmss", 0, 0, function() {
  return "" + Um.apply(this) + Pa(this.minutes(), 2) + Pa(this.seconds(), 2);
});
rt("Hmm", 0, 0, function() {
  return "" + this.hours() + Pa(this.minutes(), 2);
});
rt("Hmmss", 0, 0, function() {
  return "" + this.hours() + Pa(this.minutes(), 2) + Pa(this.seconds(), 2);
});
function Xw(e, t) {
  rt(e, 0, 0, function() {
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
Ke("a", Qw);
Ke("A", Qw);
Ke("H", sn, Bm);
Ke("h", sn, Gs);
Ke("k", sn, Gs);
Ke("HH", sn, Cr);
Ke("hh", sn, Cr);
Ke("kk", sn, Cr);
Ke("hmm", jw);
Ke("hmmss", Ww);
Ke("Hmm", jw);
Ke("Hmmss", Ww);
Zt(["H", "HH"], On);
Zt(["k", "kk"], function(e, t, n) {
  var r = kt(e);
  t[On] = r === 24 ? 0 : r;
});
Zt(["a", "A"], function(e, t, n) {
  n._isPm = n._locale.isPM(e), n._meridiem = e;
});
Zt(["h", "hh"], function(e, t, n) {
  t[On] = kt(e), bt(n).bigHour = !0;
});
Zt("hmm", function(e, t, n) {
  var r = e.length - 2;
  t[On] = kt(e.substr(0, r)), t[Jr] = kt(e.substr(r)), bt(n).bigHour = !0;
});
Zt("hmmss", function(e, t, n) {
  var r = e.length - 4, o = e.length - 2;
  t[On] = kt(e.substr(0, r)), t[Jr] = kt(e.substr(r, 2)), t[qa] = kt(e.substr(o)), bt(n).bigHour = !0;
});
Zt("Hmm", function(e, t, n) {
  var r = e.length - 2;
  t[On] = kt(e.substr(0, r)), t[Jr] = kt(e.substr(r));
});
Zt("Hmmss", function(e, t, n) {
  var r = e.length - 4, o = e.length - 2;
  t[On] = kt(e.substr(0, r)), t[Jr] = kt(e.substr(r, 2)), t[qa] = kt(e.substr(o));
});
function jj(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var Wj = /[ap]\.?m?\.?/i, zj = Ks("Hours", !0);
function Uj(e, t, n) {
  return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM";
}
var Jw = {
  calendar: IB,
  longDateFormat: DB,
  invalidDate: FB,
  ordinal: BB,
  dayOfMonthOrdinalParse: jB,
  relativeTime: zB,
  months: aj,
  monthsShort: Hw,
  week: gj,
  weekdays: Ej,
  weekdaysMin: Cj,
  weekdaysShort: Zw,
  meridiemParse: Wj
}, cn = {}, bl = {}, uc;
function Hj(e, t) {
  var n, r = Math.min(e.length, t.length);
  for (n = 0; n < r; n += 1)
    if (e[n] !== t[n])
      return n;
  return r;
}
function P0(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function Yj(e) {
  for (var t = 0, n, r, o, s; t < e.length; ) {
    for (s = P0(e[t]).split("-"), n = s.length, r = P0(e[t + 1]), r = r ? r.split("-") : null; n > 0; ) {
      if (o = Wd(s.slice(0, n).join("-")), o)
        return o;
      if (r && r.length >= n && Hj(s, r) >= n - 1)
        break;
      n--;
    }
    t++;
  }
  return uc;
}
function Vj(e) {
  return !!(e && e.match("^[^/\\\\]*$"));
}
function Wd(e) {
  var t = null, n;
  if (cn[e] === void 0 && typeof module < "u" && module && module.exports && Vj(e))
    try {
      t = uc._abbr, n = require, n("./locale/" + e), Ao(t);
    } catch {
      cn[e] = null;
    }
  return cn[e];
}
function Ao(e, t) {
  var n;
  return e && (or(t) ? n = lo(e) : n = Hm(e, t), n ? uc = n : typeof console < "u" && console.warn && console.warn(
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
  return Yj(e);
}
function Gj() {
  return Sh(cn);
}
function Ym(e) {
  var t, n = e._a;
  return n && bt(e).overflow === -2 && (t = n[Va] < 0 || n[Va] > 11 ? Va : n[va] < 1 || n[va] > jm(n[jn], n[Va]) ? va : n[On] < 0 || n[On] > 24 || n[On] === 24 && (n[Jr] !== 0 || n[qa] !== 0 || n[bi] !== 0) ? On : n[Jr] < 0 || n[Jr] > 59 ? Jr : n[qa] < 0 || n[qa] > 59 ? qa : n[bi] < 0 || n[bi] > 999 ? bi : -1, bt(e)._overflowDayOfYear && (t < jn || t > va) && (t = va), bt(e)._overflowWeeks && t === -1 && (t = QB), bt(e)._overflowWeekday && t === -1 && (t = JB), bt(e).overflow = t), e;
}
var Kj = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Zj = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Xj = /Z|[+-]\d\d(?::?\d\d)?/, Su = [
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
], Qj = /^\/?Date\((-?\d+)/i, Jj = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, eW = {
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
  var t, n, r = e._i, o = Kj.exec(r) || Zj.exec(r), s, u, c, d, p = Su.length, h = Lp.length;
  if (o) {
    for (bt(e).iso = !0, t = 0, n = p; t < n; t++)
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
      if (Xj.exec(o[4]))
        d = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = u + (c || "") + (d || ""), qm(e);
  } else
    e._isValid = !1;
}
function tW(e, t, n, r, o, s) {
  var u = [
    nW(e),
    Hw.indexOf(t),
    parseInt(n, 10),
    parseInt(r, 10),
    parseInt(o, 10)
  ];
  return s && u.push(parseInt(s, 10)), u;
}
function nW(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function rW(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function aW(e, t, n) {
  if (e) {
    var r = Zw.indexOf(e), o = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (r !== o)
      return bt(n).weekdayMismatch = !0, n._isValid = !1, !1;
  }
  return !0;
}
function oW(e, t, n) {
  if (e)
    return eW[e];
  if (t)
    return 0;
  var r = parseInt(n, 10), o = r % 100, s = (r - o) / 100;
  return s * 60 + o;
}
function tx(e) {
  var t = Jj.exec(rW(e._i)), n;
  if (t) {
    if (n = tW(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !aW(t[1], n, e))
      return;
    e._a = n, e._tzm = oW(t[8], t[9], t[10]), e._d = lc.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), bt(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function iW(e) {
  var t = Qj.exec(e._i);
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
  e._strict ? e._isValid = !1 : We.createFromInputFallback(e);
}
We.createFromInputFallback = Hr(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function ls(e, t, n) {
  return e ?? t ?? n;
}
function sW(e) {
  var t = new Date(We.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function Vm(e) {
  var t, n, r = [], o, s, u;
  if (!e._d) {
    for (o = sW(e), e._w && e._a[va] == null && e._a[Va] == null && lW(e), e._dayOfYear != null && (u = ls(e._a[jn], o[jn]), (e._dayOfYear > Ml(u) || e._dayOfYear === 0) && (bt(e)._overflowDayOfYear = !0), n = lc(u, 0, e._dayOfYear), e._a[Va] = n.getUTCMonth(), e._a[va] = n.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = r[t] = o[t];
    for (; t < 7; t++)
      e._a[t] = r[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[On] === 24 && e._a[Jr] === 0 && e._a[qa] === 0 && e._a[bi] === 0 && (e._nextDay = !0, e._a[On] = 0), e._d = (e._useUTC ? lc : hj).apply(
      null,
      r
    ), s = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[On] = 24), e._w && typeof e._w.d < "u" && e._w.d !== s && (bt(e).weekdayMismatch = !0);
  }
}
function lW(e) {
  var t, n, r, o, s, u, c, d, p;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (s = 1, u = 4, n = ls(
    t.GG,
    e._a[jn],
    cc(on(), 1, 4).year
  ), r = ls(t.W, 1), o = ls(t.E, 1), (o < 1 || o > 7) && (d = !0)) : (s = e._locale._week.dow, u = e._locale._week.doy, p = cc(on(), s, u), n = ls(t.gg, e._a[jn], p.year), r = ls(t.w, p.week), t.d != null ? (o = t.d, (o < 0 || o > 6) && (d = !0)) : t.e != null ? (o = t.e + s, (t.e < 0 || t.e > 6) && (d = !0)) : o = s), r < 1 || r > Za(n, s, u) ? bt(e)._overflowWeeks = !0 : d != null ? bt(e)._overflowWeekday = !0 : (c = Kw(n, r, o, s, u), e._a[jn] = c.year, e._dayOfYear = c.dayOfYear);
}
We.ISO_8601 = function() {
};
We.RFC_2822 = function() {
};
function qm(e) {
  if (e._f === We.ISO_8601) {
    ex(e);
    return;
  }
  if (e._f === We.RFC_2822) {
    tx(e);
    return;
  }
  e._a = [], bt(e).empty = !0;
  var t = "" + e._i, n, r, o, s, u, c = t.length, d = 0, p, h;
  for (o = Fw(e._f, e._locale).match(Dm) || [], h = o.length, n = 0; n < h; n++)
    s = o[n], r = (t.match(KB(s, e)) || [])[0], r && (u = t.substr(0, t.indexOf(r)), u.length > 0 && bt(e).unusedInput.push(u), t = t.slice(
      t.indexOf(r) + r.length
    ), d += r.length), ms[s] ? (r ? bt(e).empty = !1 : bt(e).unusedTokens.push(s), XB(s, r, e)) : e._strict && !r && bt(e).unusedTokens.push(s);
  bt(e).charsLeftOver = c - d, t.length > 0 && bt(e).unusedInput.push(t), e._a[On] <= 12 && bt(e).bigHour === !0 && e._a[On] > 0 && (bt(e).bigHour = void 0), bt(e).parsedDateParts = e._a.slice(0), bt(e).meridiem = e._meridiem, e._a[On] = cW(
    e._locale,
    e._a[On],
    e._meridiem
  ), p = bt(e).era, p !== null && (e._a[jn] = e._locale.erasConvertYear(p, e._a[jn])), Vm(e), Ym(e);
}
function cW(e, t, n) {
  var r;
  return n == null ? t : e.meridiemHour != null ? e.meridiemHour(t, n) : (e.isPM != null && (r = e.isPM(n), r && t < 12 && (t += 12), !r && t === 12 && (t = 0)), t);
}
function uW(e) {
  var t, n, r, o, s, u, c = !1, d = e._f.length;
  if (d === 0) {
    bt(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (o = 0; o < d; o++)
    s = 0, u = !1, t = Rm({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[o], qm(t), Am(t) && (u = !0), s += bt(t).charsLeftOver, s += bt(t).unusedTokens.length * 10, bt(t).score = s, c ? s < r && (r = s, n = t) : (r == null || s < r || u) && (r = s, n = t, u && (c = !0));
  ko(e, n || t);
}
function dW(e) {
  if (!e._d) {
    var t = Lm(e._i), n = t.day === void 0 ? t.date : t.day;
    e._a = Mw(
      [t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond],
      function(r) {
        return r && parseInt(r, 10);
      }
    ), Vm(e);
  }
}
function fW(e) {
  var t = new Oc(Ym(nx(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function nx(e) {
  var t = e._i, n = e._f;
  return e._locale = e._locale || lo(e._l), t === null || n === void 0 && t === "" ? Md({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), ra(t) ? new Oc(Ym(t)) : (Cc(t) ? e._d = t : na(n) ? uW(e) : n ? qm(e) : pW(e), Am(e) || (e._d = null), e));
}
function pW(e) {
  var t = e._i;
  or(t) ? e._d = new Date(We.now()) : Cc(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? iW(e) : na(t) ? (e._a = Mw(t.slice(0), function(n) {
    return parseInt(n, 10);
  }), Vm(e)) : Ci(t) ? dW(e) : eo(t) ? e._d = new Date(t) : We.createFromInputFallback(e);
}
function rx(e, t, n, r, o) {
  var s = {};
  return (t === !0 || t === !1) && (r = t, t = void 0), (n === !0 || n === !1) && (r = n, n = void 0), (Ci(e) && Im(e) || na(e) && e.length === 0) && (e = void 0), s._isAMomentObject = !0, s._useUTC = s._isUTC = o, s._l = n, s._i = e, s._f = t, s._strict = r, fW(s);
}
function on(e, t, n, r) {
  return rx(e, t, n, r, !1);
}
var hW = Hr(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = on.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : Md();
  }
), mW = Hr(
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
function gW() {
  var e = [].slice.call(arguments, 0);
  return ax("isBefore", e);
}
function vW() {
  var e = [].slice.call(arguments, 0);
  return ax("isAfter", e);
}
var yW = function() {
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
function bW(e) {
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
function _W() {
  return this._isValid;
}
function wW() {
  return ia(NaN);
}
function zd(e) {
  var t = Lm(e), n = t.year || 0, r = t.quarter || 0, o = t.month || 0, s = t.week || t.isoWeek || 0, u = t.day || 0, c = t.hour || 0, d = t.minute || 0, p = t.second || 0, h = t.millisecond || 0;
  this._isValid = bW(t), this._milliseconds = +h + p * 1e3 + // 1000
  d * 6e4 + // 1000 * 60
  c * 1e3 * 60 * 60, this._days = +u + s * 7, this._months = +o + r * 3 + n * 12, this._data = {}, this._locale = lo(), this._bubble();
}
function $u(e) {
  return e instanceof zd;
}
function Ph(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function xW(e, t, n) {
  var r = Math.min(e.length, t.length), o = Math.abs(e.length - t.length), s = 0, u;
  for (u = 0; u < r; u++)
    kt(e[u]) !== kt(t[u]) && s++;
  return s + o;
}
function ox(e, t) {
  rt(e, 0, 0, function() {
    var n = this.utcOffset(), r = "+";
    return n < 0 && (n = -n, r = "-"), r + Pa(~~(n / 60), 2) + t + Pa(~~n % 60, 2);
  });
}
ox("Z", ":");
ox("ZZ", "");
Ke("Z", Bd);
Ke("ZZ", Bd);
Zt(["Z", "ZZ"], function(e, t, n) {
  n._useUTC = !0, n._tzm = Gm(Bd, e);
});
var EW = /([\+\-]|\d\d)/gi;
function Gm(e, t) {
  var n = (t || "").match(e), r, o, s;
  return n === null ? null : (r = n[n.length - 1] || [], o = (r + "").match(EW) || ["-", 0, 0], s = +(o[1] * 60) + kt(o[2]), s === 0 ? 0 : o[0] === "+" ? s : -s);
}
function Km(e, t) {
  var n, r;
  return t._isUTC ? (n = t.clone(), r = (ra(e) || Cc(e) ? e.valueOf() : on(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + r), We.updateOffset(n, !1), n) : on(e).local();
}
function kh(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
We.updateOffset = function() {
};
function CW(e, t, n) {
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
    ) : this._changeInProgress || (this._changeInProgress = !0, We.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? r : kh(this);
}
function OW(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function SW(e) {
  return this.utcOffset(0, e);
}
function TW(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(kh(this), "m")), this;
}
function PW() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = Gm(qB, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function kW(e) {
  return this.isValid() ? (e = e ? on(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function NW() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function IW() {
  if (!or(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return Rm(e, this), e = nx(e), e._a ? (t = e._isUTC ? Na(e._a) : on(e._a), this._isDSTShifted = this.isValid() && xW(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function AW() {
  return this.isValid() ? !this._isUTC : !1;
}
function RW() {
  return this.isValid() ? this._isUTC : !1;
}
function ix() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var MW = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, DW = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function ia(e, t) {
  var n = e, r = null, o, s, u;
  return $u(e) ? n = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : eo(e) || !isNaN(+e) ? (n = {}, t ? n[t] = +e : n.milliseconds = +e) : (r = MW.exec(e)) ? (o = r[1] === "-" ? -1 : 1, n = {
    y: 0,
    d: kt(r[va]) * o,
    h: kt(r[On]) * o,
    m: kt(r[Jr]) * o,
    s: kt(r[qa]) * o,
    ms: kt(Ph(r[bi] * 1e3)) * o
    // the millisecond decimal point is included in the match
  }) : (r = DW.exec(e)) ? (o = r[1] === "-" ? -1 : 1, n = {
    y: fi(r[2], o),
    M: fi(r[3], o),
    w: fi(r[4], o),
    d: fi(r[5], o),
    h: fi(r[6], o),
    m: fi(r[7], o),
    s: fi(r[8], o)
  }) : n == null ? n = {} : typeof n == "object" && ("from" in n || "to" in n) && (u = LW(
    on(n.from),
    on(n.to)
  ), n = {}, n.ms = u.milliseconds, n.M = u.months), s = new zd(n), $u(e) && Dt(e, "_locale") && (s._locale = e._locale), $u(e) && Dt(e, "_isValid") && (s._isValid = e._isValid), s;
}
ia.fn = zd.prototype;
ia.invalid = wW;
function fi(e, t) {
  var n = e && parseFloat(e.replace(",", "."));
  return (isNaN(n) ? 0 : n) * t;
}
function k0(e, t) {
  var n = {};
  return n.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n;
}
function LW(e, t) {
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
  e.isValid() && (r = r ?? !0, u && Vw(e, sc(e, "Month") + u * n), s && Uw(e, "Date", sc(e, "Date") + s * n), o && e._d.setTime(e._d.valueOf() + o * n), r && We.updateOffset(e, s || u));
}
var FW = sx(1, "add"), $W = sx(-1, "subtract");
function cx(e) {
  return typeof e == "string" || e instanceof String;
}
function BW(e) {
  return ra(e) || Cc(e) || cx(e) || eo(e) || WW(e) || jW(e) || e === null || e === void 0;
}
function jW(e) {
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
function WW(e) {
  var t = na(e), n = !1;
  return t && (n = e.filter(function(r) {
    return !eo(r) && cx(e);
  }).length === 0), t && n;
}
function zW(e) {
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
function UW(e, t) {
  var n = e.diff(t, "days", !0);
  return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
}
function HW(e, t) {
  arguments.length === 1 && (arguments[0] ? BW(arguments[0]) ? (e = arguments[0], t = void 0) : zW(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var n = e || on(), r = Km(n, this).startOf("day"), o = We.calendarFormat(this, r) || "sameElse", s = t && (Ia(t[o]) ? t[o].call(this, n) : t[o]);
  return this.format(
    s || this.localeData().calendar(o, this, on(n))
  );
}
function YW() {
  return new Oc(this);
}
function VW(e, t) {
  var n = ra(e) ? e : on(e);
  return this.isValid() && n.isValid() ? (t = Yr(t) || "millisecond", t === "millisecond" ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function qW(e, t) {
  var n = ra(e) ? e : on(e);
  return this.isValid() && n.isValid() ? (t = Yr(t) || "millisecond", t === "millisecond" ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf()) : !1;
}
function GW(e, t, n, r) {
  var o = ra(e) ? e : on(e), s = ra(t) ? t : on(t);
  return this.isValid() && o.isValid() && s.isValid() ? (r = r || "()", (r[0] === "(" ? this.isAfter(o, n) : !this.isBefore(o, n)) && (r[1] === ")" ? this.isBefore(s, n) : !this.isAfter(s, n))) : !1;
}
function KW(e, t) {
  var n = ra(e) ? e : on(e), r;
  return this.isValid() && n.isValid() ? (t = Yr(t) || "millisecond", t === "millisecond" ? this.valueOf() === n.valueOf() : (r = n.valueOf(), this.clone().startOf(t).valueOf() <= r && r <= this.clone().endOf(t).valueOf())) : !1;
}
function ZW(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function XW(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function QW(e, t, n) {
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
We.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
We.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function JW() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function e6(e) {
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
function t6() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", n, r, o, s;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), n = "[" + e + '("]', r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", o = "-MM-DD[T]HH:mm:ss.SSS", s = t + '[")]', this.format(n + r + o + s);
}
function n6(e) {
  e || (e = this.isUtc() ? We.defaultFormatUtc : We.defaultFormat);
  var t = Fu(this, e);
  return this.localeData().postformat(t);
}
function r6(e, t) {
  return this.isValid() && (ra(e) && e.isValid() || on(e).isValid()) ? ia({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function a6(e) {
  return this.from(on(), e);
}
function o6(e, t) {
  return this.isValid() && (ra(e) && e.isValid() || on(e).isValid()) ? ia({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function i6(e) {
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
function s6(e) {
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
  return this._d.setTime(t), We.updateOffset(this, !0), this;
}
function l6(e) {
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
  return this._d.setTime(t), We.updateOffset(this, !0), this;
}
function c6() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function u6() {
  return Math.floor(this.valueOf() / 1e3);
}
function d6() {
  return new Date(this.valueOf());
}
function f6() {
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
function p6() {
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
function h6() {
  return this.isValid() ? this.toISOString() : null;
}
function m6() {
  return Am(this);
}
function g6() {
  return ko({}, bt(this));
}
function v6() {
  return bt(this).overflow;
}
function y6() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
rt("N", 0, 0, "eraAbbr");
rt("NN", 0, 0, "eraAbbr");
rt("NNN", 0, 0, "eraAbbr");
rt("NNNN", 0, 0, "eraName");
rt("NNNNN", 0, 0, "eraNarrow");
rt("y", ["y", 1], "yo", "eraYear");
rt("y", ["yy", 2], 0, "eraYear");
rt("y", ["yyy", 3], 0, "eraYear");
rt("y", ["yyyy", 4], 0, "eraYear");
Ke("N", Zm);
Ke("NN", Zm);
Ke("NNN", Zm);
Ke("NNNN", k6);
Ke("NNNNN", N6);
Zt(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, n, r) {
    var o = n._locale.erasParse(e, r, n._strict);
    o ? bt(n).era = o : bt(n).invalidEra = e;
  }
);
Ke("y", qs);
Ke("yy", qs);
Ke("yyy", qs);
Ke("yyyy", qs);
Ke("yo", I6);
Zt(["y", "yy", "yyy", "yyyy"], jn);
Zt(["yo"], function(e, t, n, r) {
  var o;
  n._locale._eraYearOrdinalRegex && (o = e.match(n._locale._eraYearOrdinalRegex)), n._locale.eraYearOrdinalParse ? t[jn] = n._locale.eraYearOrdinalParse(e, o) : t[jn] = parseInt(e, 10);
});
function b6(e, t) {
  var n, r, o, s = this._eras || lo("en")._eras;
  for (n = 0, r = s.length; n < r; ++n) {
    switch (typeof s[n].since) {
      case "string":
        o = We(s[n].since).startOf("day"), s[n].since = o.valueOf();
        break;
    }
    switch (typeof s[n].until) {
      case "undefined":
        s[n].until = 1 / 0;
        break;
      case "string":
        o = We(s[n].until).startOf("day").valueOf(), s[n].until = o.valueOf();
        break;
    }
  }
  return s;
}
function _6(e, t, n) {
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
function w6(e, t) {
  var n = e.since <= e.until ? 1 : -1;
  return t === void 0 ? We(e.since).year() : We(e.since).year() + (t - e.offset) * n;
}
function x6() {
  var e, t, n, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
      return r[e].name;
  return "";
}
function E6() {
  var e, t, n, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
      return r[e].narrow;
  return "";
}
function C6() {
  var e, t, n, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
      return r[e].abbr;
  return "";
}
function O6() {
  var e, t, n, r, o = this.localeData().eras();
  for (e = 0, t = o.length; e < t; ++e)
    if (n = o[e].since <= o[e].until ? 1 : -1, r = this.clone().startOf("day").valueOf(), o[e].since <= r && r <= o[e].until || o[e].until <= r && r <= o[e].since)
      return (this.year() - We(o[e].since).year()) * n + o[e].offset;
  return this.year();
}
function S6(e) {
  return Dt(this, "_erasNameRegex") || Xm.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function T6(e) {
  return Dt(this, "_erasAbbrRegex") || Xm.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function P6(e) {
  return Dt(this, "_erasNarrowRegex") || Xm.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function Zm(e, t) {
  return t.erasAbbrRegex(e);
}
function k6(e, t) {
  return t.erasNameRegex(e);
}
function N6(e, t) {
  return t.erasNarrowRegex(e);
}
function I6(e, t) {
  return t._eraYearOrdinalRegex || qs;
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
rt(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
rt(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function Ud(e, t) {
  rt(0, [e, e.length], 0, t);
}
Ud("gggg", "weekYear");
Ud("ggggg", "weekYear");
Ud("GGGG", "isoWeekYear");
Ud("GGGGG", "isoWeekYear");
Ke("G", $d);
Ke("g", $d);
Ke("GG", sn, Cr);
Ke("gg", sn, Cr);
Ke("GGGG", $m, Fm);
Ke("gggg", $m, Fm);
Ke("GGGGG", Fd, Dd);
Ke("ggggg", Fd, Dd);
Tc(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, n, r) {
    t[r.substr(0, 2)] = kt(e);
  }
);
Tc(["gg", "GG"], function(e, t, n, r) {
  t[r] = We.parseTwoDigitYear(e);
});
function A6(e) {
  return gx.call(
    this,
    e,
    this.week(),
    this.weekday() + this.localeData()._week.dow,
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function R6(e) {
  return gx.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function M6() {
  return Za(this.year(), 1, 4);
}
function D6() {
  return Za(this.isoWeekYear(), 1, 4);
}
function L6() {
  var e = this.localeData()._week;
  return Za(this.year(), e.dow, e.doy);
}
function F6() {
  var e = this.localeData()._week;
  return Za(this.weekYear(), e.dow, e.doy);
}
function gx(e, t, n, r, o) {
  var s;
  return e == null ? cc(this, r, o).year : (s = Za(e, r, o), t > s && (t = s), $6.call(this, e, t, n, r, o));
}
function $6(e, t, n, r, o) {
  var s = Kw(e, t, n, r, o), u = lc(s.year, 0, s.dayOfYear);
  return this.year(u.getUTCFullYear()), this.month(u.getUTCMonth()), this.date(u.getUTCDate()), this;
}
rt("Q", 0, "Qo", "quarter");
Ke("Q", $w);
Zt("Q", function(e, t) {
  t[Va] = (kt(e) - 1) * 3;
});
function B6(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
rt("D", ["DD", 2], "Do", "date");
Ke("D", sn, Gs);
Ke("DD", sn, Cr);
Ke("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
Zt(["D", "DD"], va);
Zt("Do", function(e, t) {
  t[va] = kt(e.match(sn)[0]);
});
var vx = Ks("Date", !0);
rt("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
Ke("DDD", Ld);
Ke("DDDD", Bw);
Zt(["DDD", "DDDD"], function(e, t, n) {
  n._dayOfYear = kt(e);
});
function j6(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
rt("m", ["mm", 2], 0, "minute");
Ke("m", sn, Bm);
Ke("mm", sn, Cr);
Zt(["m", "mm"], Jr);
var W6 = Ks("Minutes", !1);
rt("s", ["ss", 2], 0, "second");
Ke("s", sn, Bm);
Ke("ss", sn, Cr);
Zt(["s", "ss"], qa);
var z6 = Ks("Seconds", !1);
rt("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
rt(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
rt(0, ["SSS", 3], 0, "millisecond");
rt(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
rt(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
rt(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
rt(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
rt(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
rt(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
Ke("S", Ld, $w);
Ke("SS", Ld, Cr);
Ke("SSS", Ld, Bw);
var No, yx;
for (No = "SSSS"; No.length <= 9; No += "S")
  Ke(No, qs);
function U6(e, t) {
  t[bi] = kt(("0." + e) * 1e3);
}
for (No = "S"; No.length <= 9; No += "S")
  Zt(No, U6);
yx = Ks("Milliseconds", !1);
rt("z", 0, 0, "zoneAbbr");
rt("zz", 0, 0, "zoneName");
function H6() {
  return this._isUTC ? "UTC" : "";
}
function Y6() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var De = Oc.prototype;
De.add = FW;
De.calendar = HW;
De.clone = YW;
De.diff = QW;
De.endOf = l6;
De.format = n6;
De.from = r6;
De.fromNow = a6;
De.to = o6;
De.toNow = i6;
De.get = tj;
De.invalidAt = v6;
De.isAfter = VW;
De.isBefore = qW;
De.isBetween = GW;
De.isSame = KW;
De.isSameOrAfter = ZW;
De.isSameOrBefore = XW;
De.isValid = m6;
De.lang = dx;
De.locale = ux;
De.localeData = fx;
De.max = mW;
De.min = hW;
De.parsingFlags = g6;
De.set = nj;
De.startOf = s6;
De.subtract = $W;
De.toArray = f6;
De.toObject = p6;
De.toDate = d6;
De.toISOString = e6;
De.inspect = t6;
typeof Symbol < "u" && Symbol.for != null && (De[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
De.toJSON = h6;
De.toString = JW;
De.unix = u6;
De.valueOf = c6;
De.creationData = y6;
De.eraName = x6;
De.eraNarrow = E6;
De.eraAbbr = C6;
De.eraYear = O6;
De.year = zw;
De.isLeapYear = ej;
De.weekYear = A6;
De.isoWeekYear = R6;
De.quarter = De.quarters = B6;
De.month = qw;
De.daysInMonth = dj;
De.week = De.weeks = bj;
De.isoWeek = De.isoWeeks = _j;
De.weeksInYear = L6;
De.weeksInWeekYear = F6;
De.isoWeeksInYear = M6;
De.isoWeeksInISOWeekYear = D6;
De.date = vx;
De.day = De.days = Rj;
De.weekday = Mj;
De.isoWeekday = Dj;
De.dayOfYear = j6;
De.hour = De.hours = zj;
De.minute = De.minutes = W6;
De.second = De.seconds = z6;
De.millisecond = De.milliseconds = yx;
De.utcOffset = CW;
De.utc = SW;
De.local = TW;
De.parseZone = PW;
De.hasAlignedHourOffset = kW;
De.isDST = NW;
De.isLocal = AW;
De.isUtcOffset = RW;
De.isUtc = ix;
De.isUTC = ix;
De.zoneAbbr = H6;
De.zoneName = Y6;
De.dates = Hr(
  "dates accessor is deprecated. Use date instead.",
  vx
);
De.months = Hr(
  "months accessor is deprecated. Use month instead",
  qw
);
De.years = Hr(
  "years accessor is deprecated. Use year instead",
  zw
);
De.zone = Hr(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  OW
);
De.isDSTShifted = Hr(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  IW
);
function V6(e) {
  return on(e * 1e3);
}
function q6() {
  return on.apply(null, arguments).parseZone();
}
function bx(e) {
  return e;
}
var Lt = Mm.prototype;
Lt.calendar = AB;
Lt.longDateFormat = LB;
Lt.invalidDate = $B;
Lt.ordinal = WB;
Lt.preparse = bx;
Lt.postformat = bx;
Lt.relativeTime = UB;
Lt.pastFuture = HB;
Lt.set = NB;
Lt.eras = b6;
Lt.erasParse = _6;
Lt.erasConvertYear = w6;
Lt.erasAbbrRegex = T6;
Lt.erasNameRegex = S6;
Lt.erasNarrowRegex = P6;
Lt.months = sj;
Lt.monthsShort = lj;
Lt.monthsParse = uj;
Lt.monthsRegex = pj;
Lt.monthsShortRegex = fj;
Lt.week = mj;
Lt.firstDayOfYear = yj;
Lt.firstDayOfWeek = vj;
Lt.weekdays = Pj;
Lt.weekdaysMin = Nj;
Lt.weekdaysShort = kj;
Lt.weekdaysParse = Aj;
Lt.weekdaysRegex = Lj;
Lt.weekdaysShortRegex = Fj;
Lt.weekdaysMinRegex = $j;
Lt.isPM = jj;
Lt.meridiem = Uj;
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
function G6(e, t) {
  return _x(e, t, "months");
}
function K6(e, t) {
  return _x(e, t, "monthsShort");
}
function Z6(e, t, n) {
  return Qm(e, t, n, "weekdays");
}
function X6(e, t, n) {
  return Qm(e, t, n, "weekdaysShort");
}
function Q6(e, t, n) {
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
We.lang = Hr(
  "moment.lang is deprecated. Use moment.locale instead.",
  Ao
);
We.langData = Hr(
  "moment.langData is deprecated. Use moment.localeData instead.",
  lo
);
var Wa = Math.abs;
function J6() {
  var e = this._data;
  return this._milliseconds = Wa(this._milliseconds), this._days = Wa(this._days), this._months = Wa(this._months), e.milliseconds = Wa(e.milliseconds), e.seconds = Wa(e.seconds), e.minutes = Wa(e.minutes), e.hours = Wa(e.hours), e.months = Wa(e.months), e.years = Wa(e.years), this;
}
function wx(e, t, n, r) {
  var o = ia(t, n);
  return e._milliseconds += r * o._milliseconds, e._days += r * o._days, e._months += r * o._months, e._bubble();
}
function ez(e, t) {
  return wx(this, e, t, 1);
}
function tz(e, t) {
  return wx(this, e, t, -1);
}
function N0(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function nz() {
  var e = this._milliseconds, t = this._days, n = this._months, r = this._data, o, s, u, c, d;
  return e >= 0 && t >= 0 && n >= 0 || e <= 0 && t <= 0 && n <= 0 || (e += N0(Nh(n) + t) * 864e5, t = 0, n = 0), r.milliseconds = e % 1e3, o = Dr(e / 1e3), r.seconds = o % 60, s = Dr(o / 60), r.minutes = s % 60, u = Dr(s / 60), r.hours = u % 24, t += Dr(u / 24), d = Dr(xx(t)), n += d, t -= N0(Nh(d)), c = Dr(n / 12), n %= 12, r.days = t, r.months = n, r.years = c, this;
}
function xx(e) {
  return e * 4800 / 146097;
}
function Nh(e) {
  return e * 146097 / 4800;
}
function rz(e) {
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
var Ex = co("ms"), az = co("s"), oz = co("m"), iz = co("h"), sz = co("d"), lz = co("w"), cz = co("M"), uz = co("Q"), dz = co("y"), fz = Ex;
function pz() {
  return ia(this);
}
function hz(e) {
  return e = Yr(e), this.isValid() ? this[e + "s"]() : NaN;
}
function Ui(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var mz = Ui("milliseconds"), gz = Ui("seconds"), vz = Ui("minutes"), yz = Ui("hours"), bz = Ui("days"), _z = Ui("months"), wz = Ui("years");
function xz() {
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
function Ez(e, t, n, r, o) {
  return o.relativeTime(t || 1, !!n, e, r);
}
function Cz(e, t, n, r) {
  var o = ia(e).abs(), s = Ha(o.as("s")), u = Ha(o.as("m")), c = Ha(o.as("h")), d = Ha(o.as("d")), p = Ha(o.as("M")), h = Ha(o.as("w")), m = Ha(o.as("y")), g = s <= n.ss && ["s", s] || s < n.s && ["ss", s] || u <= 1 && ["m"] || u < n.m && ["mm", u] || c <= 1 && ["h"] || c < n.h && ["hh", c] || d <= 1 && ["d"] || d < n.d && ["dd", d];
  return n.w != null && (g = g || h <= 1 && ["w"] || h < n.w && ["ww", h]), g = g || p <= 1 && ["M"] || p < n.M && ["MM", p] || m <= 1 && ["y"] || ["yy", m], g[2] = t, g[3] = +e > 0, g[4] = r, Ez.apply(null, g);
}
function Oz(e) {
  return e === void 0 ? Ha : typeof e == "function" ? (Ha = e, !0) : !1;
}
function Sz(e, t) {
  return us[e] === void 0 ? !1 : t === void 0 ? us[e] : (us[e] = t, e === "s" && (us.ss = t - 1), !0);
}
function Tz(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var n = !1, r = us, o, s;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (n = e), typeof t == "object" && (r = Object.assign({}, us, t), t.s != null && t.ss == null && (r.ss = t.s - 1)), o = this.localeData(), s = Cz(this, !n, r, o), n && (s = o.pastFuture(+this, s)), o.postformat(s);
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
Rt.isValid = _W;
Rt.abs = J6;
Rt.add = ez;
Rt.subtract = tz;
Rt.as = rz;
Rt.asMilliseconds = Ex;
Rt.asSeconds = az;
Rt.asMinutes = oz;
Rt.asHours = iz;
Rt.asDays = sz;
Rt.asWeeks = lz;
Rt.asMonths = cz;
Rt.asQuarters = uz;
Rt.asYears = dz;
Rt.valueOf = fz;
Rt._bubble = nz;
Rt.clone = pz;
Rt.get = hz;
Rt.milliseconds = mz;
Rt.seconds = gz;
Rt.minutes = vz;
Rt.hours = yz;
Rt.days = bz;
Rt.weeks = xz;
Rt.months = _z;
Rt.years = wz;
Rt.humanize = Tz;
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
rt("X", 0, 0, "unix");
rt("x", 0, 0, "valueOf");
Ke("x", $d);
Ke("X", GB);
Zt("X", function(e, t, n) {
  n._d = new Date(parseFloat(e) * 1e3);
});
Zt("x", function(e, t, n) {
  n._d = new Date(kt(e));
});
//! moment.js
We.version = "2.30.1";
PB(on);
We.fn = De;
We.min = gW;
We.max = vW;
We.now = yW;
We.utc = Na;
We.unix = V6;
We.months = G6;
We.isDate = Cc;
We.locale = Ao;
We.invalid = Md;
We.duration = ia;
We.isMoment = ra;
We.weekdays = Z6;
We.parseZone = q6;
We.localeData = lo;
We.isDuration = $u;
We.monthsShort = K6;
We.weekdaysMin = Q6;
We.defineLocale = Hm;
We.updateLocale = qj;
We.locales = Gj;
We.weekdaysShort = X6;
We.normalizeUnits = Yr;
We.relativeTimeRounding = Oz;
We.relativeTimeThreshold = Sz;
We.calendarFormat = UW;
We.prototype = De;
We.HTML5_FMT = {
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
function Pz(e) {
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
function kz(e, t = !1, n = !1) {
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
function Nz(e) {
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
      return We(e, "DD/MM/YYYY").format("DD/MM/YYYY");
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
    }) : We(e).format("DD/MM/YYYY");
  }
  return e;
}
function Tl(e, t) {
  let n = e;
  return t && t.forEach((r) => {
    r.onName === e && (n = String(r.translate));
  }), n;
}
function Iz(e, t, n) {
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
const Az = "_headerTable_1sdq3_1", Rz = "_tableCellHeader_1sdq3_13", xl = {
  headerTable: Az,
  tableCellHeader: Rz
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
  const [p, h] = at([]), [m, g] = at([]), [y, b] = at(""), [_, w] = at("");
  Gt(() => {
    E(), b(t.orderDir === "desc" ? "descending" : "ascending"), w(t.orderKey);
  }, [t, y, _]), Gt(() => {
    E();
  }, [s, e]);
  const k = (I) => {
    const T = y === "descending" ? "ascending" : "descending";
    let P;
    R.isEmpty(I) || (P = Ro(I));
    const C = {
      ...t,
      page: 1,
      orderKey: P,
      orderDir: T === "descending" ? "desc" : "asc"
    };
    b(T), w(P), R.isEmpty(C) || (n(C), r(C));
  }, F = () => {
    const I = {
      ...t,
      rows: c
    };
    u(!s), r(I, !1, !s, !0);
  }, E = ({ subColumns: I = [], multStatus: T = !1 } = {}) => {
    let P = e;
    R.isEmpty(I) || (P = I);
    let C = !1, S = [];
    const A = P.map(
      ({
        key: B,
        label: U,
        width: re,
        headerPosition: G,
        multipleColumns: ae = [],
        multiple: he = !1,
        action: ye = [],
        canSort: ke = !0,
        twoLines: se = !1,
        line1: me = {},
        line2: X = {},
        hidden: te = !1,
        color: oe = "hsl(0, 0%, 80%)",
        style: _e = {},
        orderKey: Se
      }, ve) => {
        let ue, xe;
        return R.isEmpty(B) || (ue = Ro(B)), xe = ue, R.isEmpty(Se) || (xe = Ro(Se)), te ? null : !R.isEmpty(ae) && R.isEmpty(I) ? (C = !0, S = [...S, ...ae], /* @__PURE__ */ O(
          Et.HeaderCell,
          {
            style: { backgroundColor: oe },
            className: xl.tableCellHeader,
            colSpan: ae.length,
            textAlign: G || "center",
            children: U
          },
          ve
        )) : he ? /* @__PURE__ */ O(
          Et.HeaderCell,
          {
            style: { backgroundColor: oe, ..._e },
            className: xl.tableCellHeader,
            textAlign: "center",
            onClick: F,
            children: /* @__PURE__ */ O(Xn, { checked: s })
          },
          ve
        ) : se ? /* @__PURE__ */ ie(
          Et.HeaderCell,
          {
            rowSpan: !R.isEmpty(ae) && R.isEmpty(I) ? "1" : "2",
            style: { backgroundColor: oe },
            className: xl.tableCellHeader,
            textAlign: G || "center",
            sorted: ke && xe === _ ? y : null,
            onClick: ke ? () => {
              k(xe);
            } : null,
            width: re || 1,
            children: [
              /* @__PURE__ */ ie("div", { children: [
                " ",
                R.get(me, "label", "")
              ] }),
              /* @__PURE__ */ ie("div", { children: [
                " ",
                R.get(X, "label", "")
              ] })
            ]
          },
          ve
        ) : !R.isEmpty(ye) && o ? null : /* @__PURE__ */ O(
          Et.HeaderCell,
          {
            rowSpan: !R.isEmpty(ae) && R.isEmpty(I) ? "1" : "2",
            style: { backgroundColor: oe, ..._e },
            className: xl.tableCellHeader,
            textAlign: G || "center",
            sorted: ke && xe === _ ? y : null,
            onClick: ke ? () => {
              k(xe);
            } : null,
            width: d ? void 0 : re || 1,
            children: U
          },
          ve
        );
      }
    );
    T || h(/* @__PURE__ */ O(Et.Row, { children: A })), T && g(/* @__PURE__ */ O(Et.Row, { children: A })), C && E({
      subColumns: S,
      multStatus: C
    });
  };
  return /* @__PURE__ */ ie(Et.Header, { className: xl.headerTable, children: [
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
var Mz = ee;
function Dz(e) {
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
var Co = /* @__PURE__ */ Dz(Mz), Ih = function() {
  return Ih = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, Ih.apply(this, arguments);
};
function Lz(e) {
  var t = e.bgColor, n = t === void 0 ? "#6a1b9a" : t, r = e.height, o = r === void 0 ? "20px" : r, s = e.width, u = s === void 0 ? "100%" : s, c = e.borderRadius, d = c === void 0 ? "50px" : c, p = e.labelAlignment, h = p === void 0 ? "right" : p, m = e.baseBgColor, g = m === void 0 ? "#e0e0de" : m, y = e.labelColor, b = y === void 0 ? "#fff" : y, _ = e.labelSize, w = _ === void 0 ? "15px" : _, k = e.isLabelVisible, F = k === void 0 ? !0 : k, E = e.dir, I = E === void 0 ? "ltr" : E, T = e.ariaValuemin, P = T === void 0 ? 0 : T, C = e.ariaValuemax, S = C === void 0 ? 100 : C, A = e.ariaValuetext, B = A === void 0 ? null : A, U = e.maxCompleted, re = U === void 0 ? 100 : U, G = e.animateOnRender, ae = G === void 0 ? !1 : G, he = e.initCompletedOnAnimation, ye = he === void 0 ? 0 : he, ke = e.isIndeterminate, se = ke === void 0 ? !1 : ke, me = e.completed, X = e.margin, te = e.padding, oe = e.customLabelStyles, _e = e.transitionDuration, Se = e.transitionTimingFunction, ve = e.className, ue = e.customLabel, xe = e.barContainerClassName, ge = e.completedClassName, W = e.labelClassName, z = function(Re) {
    return Re === "left" ? "flex-start" : Re === "center" ? "center" : Re === "right" ? "flex-end" : null;
  }, $ = z(h), D = typeof ye == "number" ? "".concat(ye, "%") : ye, q = function(Re, Be) {
    if (Re) {
      var Le = Number(Be) / Re;
      return Le > 1 ? "100%" : "".concat(Le * 100, "%");
    }
    return D;
  }, K = q(re, me), le = Co.useState(D), Ie = le[0], de = le[1], Oe = {
    height: o,
    background: g,
    borderRadius: d,
    padding: te,
    width: u,
    margin: X,
    overflow: "hidden"
  }, fe = {
    height: o,
    width: se ? "100%" : ae ? Ie : K,
    background: n,
    transition: se ? "none" : "width ".concat(_e || "1s", " ").concat(Se || "ease-in-out"),
    borderRadius: "inherit",
    display: "flex",
    alignItems: "center",
    justifyContent: h !== "outside" && $ ? $ : "normal",
    animation: se ? "indeterminate 1.5s infinite linear" : "none"
  }, Y = Ih({ padding: h === "outside" ? "0 0 0 5px" : "5px", color: b, fontWeight: "bold", fontSize: w, display: F ? "initial" : "none" }, oe), ne = {
    display: h === "outside" ? "flex" : "initial",
    alignItems: h === "outside" ? "center" : "initial"
  }, we = typeof me == "number" ? "".concat(me, "%") : "".concat(me), Ne = ue || we;
  return Co.useEffect(function() {
    ae && !se && requestAnimationFrame(function() {
      return de(K);
    });
  }, [K, ae, se]), Co.createElement(
    "div",
    { style: ve ? void 0 : ne, className: ve, dir: I, role: "progressbar", "aria-valuenow": se ? void 0 : parseFloat(Ne), "aria-valuemin": P, "aria-valuemax": S, "aria-valuetext": "".concat(B === null ? Ne : B) },
    Co.createElement(
      "div",
      { style: xe ? void 0 : Oe, className: xe },
      Co.createElement("div", { style: ge ? void 0 : fe, className: ge }, h !== "outside" && Co.createElement("span", { style: W ? void 0 : Y, className: W }, Ne))
    ),
    h === "outside" && Co.createElement("span", { style: W ? void 0 : Y, className: W }, Ne),
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
var Fz = Ox.default = Lz;
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
const $z = "_emptyChat_1ablf_3", Bz = "_emptyDataIcon_1ablf_13", jz = "_groupHover_1ablf_29", Wz = "_sumRow_1ablf_39", zz = "_cell_1ablf_51", Uz = "_cellButton_1ablf_61", Hz = "_ButtonIcon_1ablf_75", Yz = "_ButtonLink_1ablf_95", Vz = "_towLineRow_1ablf_117", qz = "_noWrap_1ablf_127", Gz = "_progressBarLabel_1ablf_137", Kz = "_cardsWrapper_1ablf_157", Zz = "_popupContent_1ablf_225", Jt = {
  emptyChat: $z,
  emptyDataIcon: Bz,
  groupHover: jz,
  sumRow: Wz,
  cell: zz,
  cellButton: Uz,
  ButtonIcon: Hz,
  ButtonLink: Yz,
  towLineRow: Vz,
  noWrap: qz,
  progressBarLabel: Gz,
  cardsWrapper: Kz,
  popupContent: Zz
}, Xz = (e, t, n = {}) => {
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
}, Qz = "_cardsContainer_d29bq_1", Jz = "_card_d29bq_1", eU = "_cardHeader_d29bq_43", tU = "_cardField_d29bq_61", nU = "_cardLabel_d29bq_89", rU = "_cardValue_d29bq_103", aU = "_cardActionsMenu_d29bq_133", oU = "_cardMenuIcon_d29bq_157", iU = "_cardMenu_d29bq_157", sU = "_cardMenuPopupContent_d29bq_287", lU = "_cardMenuItem_d29bq_295", cU = "_cardMenuIconItem_d29bq_315", uU = "_cardMenuText_d29bq_335", dU = "_cardActionsMenuPopup_d29bq_351", fU = "_emptyState_d29bq_363", pU = "_emptyIcon_d29bq_375", hU = "_cardLine1_d29bq_387", mU = "_cardLine2_d29bq_403", gU = "_cardLine3_d29bq_419", vU = "_cardLine4_d29bq_435", yU = "_cardLine1Item_d29bq_451", bU = "_cardLine2Item_d29bq_453", _U = "_cardLine3Item_d29bq_455", wU = "_cardLine4Item_d29bq_457", xU = "_cardCheckbox_d29bq_467", EU = "_cardInlineField_d29bq_479", CU = "_cardInlineLabel_d29bq_491", OU = "_cardInlineValue_d29bq_505", gt = {
  cardsContainer: Qz,
  card: Jz,
  cardHeader: eU,
  cardField: tU,
  cardLabel: nU,
  cardValue: rU,
  cardActionsMenu: aU,
  cardMenuIcon: oU,
  cardMenu: iU,
  cardMenuPopupContent: sU,
  cardMenuItem: lU,
  cardMenuIconItem: cU,
  cardMenuText: uU,
  cardActionsMenuPopup: dU,
  emptyState: fU,
  emptyIcon: pU,
  cardLine1: hU,
  cardLine2: mU,
  cardLine3: gU,
  cardLine4: vU,
  cardLine1Item: yU,
  cardLine2Item: bU,
  cardLine3Item: _U,
  cardLine4Item: wU,
  cardCheckbox: xU,
  cardInlineField: EU,
  cardInlineLabel: CU,
  cardInlineValue: OU
}, Sx = ({ rowData: e, columnsData: t, onHandlerTable: n, isPDF: r }) => {
  const [o, s] = at(!1), u = [];
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
  const c = R.map(u, (d) => /* @__PURE__ */ ie(
    An.Item,
    {
      className: gt.cardMenuItem,
      onClick: (p) => {
        p.stopPropagation(), d.onClick();
      },
      children: [
        d.icon && /* @__PURE__ */ O(
          je,
          {
            name: d.icon,
            className: gt.cardMenuIconItem,
            style: {
              color: d.color || "#6b7280"
            }
          }
        ),
        /* @__PURE__ */ O("span", { className: gt.cardMenuText, children: d.text })
      ]
    },
    d.key
  ));
  return /* @__PURE__ */ O(
    "div",
    {
      className: gt.cardActionsMenu,
      onDoubleClick: (d) => {
        d.stopPropagation();
      },
      children: /* @__PURE__ */ O(
        Dn,
        {
          className: gt.cardActionsMenuPopup,
          trigger: /* @__PURE__ */ O(
            je,
            {
              name: "ellipsis vertical",
              size: "large",
              className: gt.cardMenuIcon,
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
          children: /* @__PURE__ */ O(Dn.Content, { className: gt.cardMenuPopupContent, children: /* @__PURE__ */ O(An, { vertical: !0, className: gt.cardMenu, children: c }) })
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
  searchParams: T = null,
  totalRows: P = 0,
  mergeConfig: C = null
}) => {
  const S = En(null), A = En(null), [B, U] = at(!1), [re, G] = at(e), [ae, he] = at(1), [ye, ke] = at(!0), se = En(!1), me = En(T), X = En(!1), te = En(!1), oe = En(0), [_e, Se] = at(window.innerWidth);
  Gt(() => {
    const de = () => {
      Se(window.innerWidth);
    };
    return window.addEventListener("resize", de), () => {
      window.removeEventListener("resize", de);
    };
  }, []), Gt(() => {
    JSON.stringify(me.current) !== JSON.stringify(T) ? (G(e), he(1), me.current = T, X.current = !1, oe.current = 1, te.current = !1, ke(!0)) : X.current && ae > oe.current ? (e && e.length > 0 ? (G((Oe) => {
      if (C)
        return Xz(Oe, e, C);
      const fe = "id";
      if (Oe.length > 0 && Oe[0][fe] !== void 0) {
        const Y = new Set(
          Oe.map((we) => we[fe])
        ), ne = e.filter((we) => !Y.has(we[fe]));
        return [...Oe, ...ne];
      }
      return [...Oe, ...e];
    }), oe.current = ae, te.current = !1) : (oe.current = ae, te.current = !0), X.current = !1) : ae === 1 && !X.current && e && (G(e), oe.current = 1);
  }, [e, T, C, ae]), Gt(() => {
    if (e !== void 0 && ye && !se.current && !B && !X.current) {
      if (e.length > 0) {
        const Oe = setTimeout(() => {
          ke(!1);
        }, 1e3);
        return () => {
          clearTimeout(Oe);
        };
      }
      const de = setTimeout(() => {
        ke(!1);
      }, 1500);
      return () => {
        clearTimeout(de);
      };
    }
  }, [e, ye, B]), Gt(() => {
    if (ye) {
      const de = setTimeout(() => {
        ke(!1);
      }, 3e3);
      return () => {
        clearTimeout(de);
      };
    }
  }, [ye]);
  const ve = (de, Oe) => {
    if (R.isEmpty(de))
      return null;
    const fe = /* @__PURE__ */ O("span", { style: { marginLeft: "4px" }, children: /* @__PURE__ */ O(
      Dn,
      {
        position: "bottom right",
        content: /* @__PURE__ */ O("div", { children: de }),
        trigger: /* @__PURE__ */ O(je, { name: "comment alternate outline", style: { color: "#286b92" } })
      }
    ) }, 1);
    return Oe >= de.length ? de : /* @__PURE__ */ ie("span", { children: [
      `${de.slice(0, Oe)}...`,
      fe
    ] });
  }, ue = (de, Oe, fe = null) => {
    const {
      key: Y,
      label: ne,
      format: we,
      endDateKey: Ne = null,
      dataPosition: Re = "left",
      stringLength: Be = 20,
      boolLabels: Le,
      translate: tt,
      colorLabel: Xe,
      textColor: Ve = "#000000",
      stopDateHandler: He = () => {
      },
      onClick: Te,
      render: Q
    } = de;
    if (Q && typeof Q == "function")
      return Q(Oe);
    const ze = qt(Y, Oe, !1), lt = R.isEmpty(Ne) ? null : qt(Ne, Oe), ft = wl(_e, 768, Be, 10, 10), nt = c({
      value: ze,
      format: we,
      endDate: lt,
      stringLength: ft,
      key: Y,
      translate: tt,
      colorLabel: Xe,
      onClick: Te,
      rowData: Oe,
      textColor: Ve,
      boolLabels: Le,
      stopDateHandler: He
    });
    if (!(Y === "id" || ne === "ID" || (Y == null ? void 0 : Y.toLowerCase().includes("id"))) && (R.isEmpty(nt) || nt === "-" || nt === null || nt === void 0))
      return null;
    const Ye = fe !== null ? fe : ne;
    return /* @__PURE__ */ ie("div", { className: gt.cardInlineField, children: [
      Ye && /* @__PURE__ */ ie("span", { className: gt.cardInlineLabel, children: [
        Ye,
        ":"
      ] }),
      /* @__PURE__ */ O("span", { className: gt.cardInlineValue, style: { textAlign: Re, color: Ve }, children: nt })
    ] });
  }, xe = (de, Oe) => /* @__PURE__ */ O(Sx, { rowData: de, columnsData: Oe, onHandlerTable: s, isPDF: p }), ge = (de, Oe) => {
    let fe = {};
    typeof r == "function" && (fe = r(de) || {});
    const ne = d === de ? { backgroundColor: o, ...fe } : fe;
    if (!R.isEmpty(h) || !R.isEmpty(m) || !R.isEmpty(g) || !R.isEmpty(y)) {
      const Re = R.find(t, { multiple: !0 }), Be = Re == null ? void 0 : Re.key, Le = Be ? R.includes(_, de[Be]) : !1, tt = [];
      Re && !R.isEmpty(h) && tt.push(
        /* @__PURE__ */ O("div", { className: gt.cardCheckbox, children: /* @__PURE__ */ O(
          Xn,
          {
            checked: Le,
            onChange: () => {
              b && b(de, Be);
            },
            onClick: (Q) => {
              Q.stopPropagation();
            }
          }
        ) }, "checkbox")
      ), R.map(h, (Q) => {
        const ze = typeof Q == "string" ? Q : Q.key, lt = typeof Q == "object" && Q.label !== void 0 ? Q.label : null, ft = typeof Q == "object" && Q.format !== void 0 ? Q.format : null, nt = R.find(t, (Yt) => Yt.key === ze && !Yt.multiple && !Yt.hidden);
        if (nt && !nt.hidden && !nt.multiple) {
          const Yt = ft ? { ...nt, format: ft } : nt, Ye = ue(Yt, de, lt);
          Ye && tt.push(
            /* @__PURE__ */ O("div", { className: gt.cardLine1Item, children: Ye }, ze)
          );
        }
      });
      const Xe = [];
      R.map(m, (Q) => {
        var Yt;
        if (typeof Q == "object" && typeof Q.render == "function") {
          const Ye = Q.render(de), $t = typeof Ye == "object" && Ye.label !== void 0 ? Ye.label : Q.label || null;
          let ot = typeof Ye == "object" && Ye.value !== void 0 ? Ye.value : Ye;
          const dn = typeof Q == "object" && Q.format !== void 0 ? Q.format : null, Jn = typeof Q == "object" && Q.stringLength !== void 0 ? Q.stringLength : 20, la = typeof Ye == "object" && Ye.shouldTruncate === !0;
          if (dn && typeof ot == "string")
            if (dn === "truncate" && la) {
              const ca = wl(_e, 480, Jn, 1, 10);
              ot = ve(ot, ca);
            } else dn !== "truncate" && (ot = c({
              value: ot,
              format: dn,
              endDate: null,
              stringLength: Jn,
              key: Q.key || "",
              translate: null,
              colorLabel: null,
              onClick: null,
              rowData: de,
              textColor: "#000000",
              boolLabels: null,
              stopDateHandler: () => {
              }
            }));
          ((Q.key === "id" || Q.label === "ID" || ((Yt = Q.key) == null ? void 0 : Yt.toLowerCase().includes("id"))) && !R.isEmpty(ot) && ot !== "-" && ot !== null && ot !== void 0 || !R.isEmpty(ot) && ot !== "-" && ot !== null && ot !== void 0) && Xe.push(
            /* @__PURE__ */ O("div", { className: gt.cardLine2Item, children: /* @__PURE__ */ ie("div", { className: gt.cardInlineField, children: [
              $t && /* @__PURE__ */ ie("span", { className: gt.cardInlineLabel, children: [
                $t,
                ":"
              ] }),
              /* @__PURE__ */ O("span", { className: gt.cardInlineValue, children: ot })
            ] }) }, Q.key || "render")
          );
          return;
        }
        const ze = typeof Q == "string" ? Q : Q.key, lt = typeof Q == "object" && Q.label !== void 0 ? Q.label : null, ft = typeof Q == "object" && Q.format !== void 0 ? Q.format : null, nt = R.find(t, (Ye) => Ye.key === ze && !Ye.multiple && !Ye.hidden);
        if (nt && !nt.hidden && !nt.multiple) {
          const Ye = ft ? { ...nt, format: ft } : nt, $t = ue(Ye, de, lt);
          $t && Xe.push(
            /* @__PURE__ */ O("div", { className: gt.cardLine2Item, children: $t }, ze)
          );
        }
      });
      const Ve = [];
      R.map(g, (Q) => {
        var Yt;
        if (typeof Q == "object" && typeof Q.render == "function") {
          const Ye = Q.render(de), $t = typeof Ye == "object" && Ye.label !== void 0 ? Ye.label : Q.label || null;
          let ot = typeof Ye == "object" && Ye.value !== void 0 ? Ye.value : Ye;
          const dn = typeof Q == "object" && Q.format !== void 0 ? Q.format : null, Jn = typeof Q == "object" && Q.stringLength !== void 0 ? Q.stringLength : 20, la = typeof Ye == "object" && Ye.shouldTruncate === !0;
          if (dn && typeof ot == "string")
            if (dn === "truncate" && la) {
              const ca = wl(_e, 480, Jn, 1, 10);
              ot = ve(ot, ca);
            } else dn !== "truncate" && (ot = c({
              value: ot,
              format: dn,
              endDate: null,
              stringLength: Jn,
              key: Q.key || "",
              translate: null,
              colorLabel: null,
              onClick: null,
              rowData: de,
              textColor: "#000000",
              boolLabels: null,
              stopDateHandler: () => {
              }
            }));
          ((Q.key === "id" || Q.label === "ID" || ((Yt = Q.key) == null ? void 0 : Yt.toLowerCase().includes("id"))) && !R.isEmpty(ot) && ot !== "-" && ot !== null && ot !== void 0 || !R.isEmpty(ot) && ot !== "-" && ot !== null && ot !== void 0) && Ve.push(
            /* @__PURE__ */ O("div", { className: gt.cardLine3Item, children: /* @__PURE__ */ ie("div", { className: gt.cardInlineField, children: [
              $t && /* @__PURE__ */ ie("span", { className: gt.cardInlineLabel, children: [
                $t,
                ":"
              ] }),
              /* @__PURE__ */ O("span", { className: gt.cardInlineValue, children: ot })
            ] }) }, Q.key || "render")
          );
          return;
        }
        const ze = typeof Q == "string" ? Q : Q.key, lt = typeof Q == "object" && Q.label !== void 0 ? Q.label : null, ft = typeof Q == "object" && Q.format !== void 0 ? Q.format : null, nt = R.find(t, (Ye) => Ye.key === ze && !Ye.multiple && !Ye.hidden);
        if (nt && !nt.hidden && !nt.multiple) {
          const Ye = ft ? { ...nt, format: ft } : nt, $t = ue(Ye, de, lt);
          $t && Ve.push(
            /* @__PURE__ */ O("div", { className: gt.cardLine3Item, children: $t }, ze)
          );
        }
      });
      const He = [];
      R.map(y, (Q) => {
        var Yt;
        if (typeof Q == "object" && typeof Q.render == "function") {
          const Ye = Q.render(de), $t = typeof Ye == "object" && Ye.label !== void 0 ? Ye.label : Q.label || null;
          let ot = typeof Ye == "object" && Ye.value !== void 0 ? Ye.value : Ye;
          const dn = typeof Q == "object" && Q.format !== void 0 ? Q.format : null, Jn = typeof Q == "object" && Q.stringLength !== void 0 ? Q.stringLength : 20, la = typeof Ye == "object" && Ye.shouldTruncate === !0;
          if (dn && typeof ot == "string")
            if (dn === "truncate" && la) {
              const ca = wl(_e, 480, Jn, 1, 10);
              ot = ve(ot, ca);
            } else dn !== "truncate" && (ot = c({
              value: ot,
              format: dn,
              endDate: null,
              stringLength: Jn,
              key: Q.key || "",
              translate: null,
              colorLabel: null,
              onClick: null,
              rowData: de,
              textColor: "#000000",
              boolLabels: null,
              stopDateHandler: () => {
              }
            }));
          ((Q.key === "id" || Q.label === "ID" || ((Yt = Q.key) == null ? void 0 : Yt.toLowerCase().includes("id"))) && !R.isEmpty(ot) && ot !== "-" && ot !== null && ot !== void 0 || !R.isEmpty(ot) && ot !== "-" && ot !== null && ot !== void 0) && He.push(
            /* @__PURE__ */ O("div", { className: gt.cardLine4Item, children: /* @__PURE__ */ ie("div", { className: gt.cardInlineField, children: [
              $t && /* @__PURE__ */ ie("span", { className: gt.cardInlineLabel, children: [
                $t,
                ":"
              ] }),
              /* @__PURE__ */ O("span", { className: gt.cardInlineValue, children: ot })
            ] }) }, Q.key || "render")
          );
          return;
        }
        const ze = typeof Q == "string" ? Q : Q.key, lt = typeof Q == "object" && Q.label !== void 0 ? Q.label : null, ft = typeof Q == "object" && Q.format !== void 0 ? Q.format : null, nt = R.find(t, (Ye) => Ye.key === ze && !Ye.multiple && !Ye.hidden);
        if (nt && !nt.hidden && !nt.multiple) {
          const Ye = ft ? { ...nt, format: ft } : nt, $t = ue(Ye, de, lt);
          $t && He.push(
            /* @__PURE__ */ O("div", { className: gt.cardLine4Item, children: $t }, ze)
          );
        }
      });
      const Te = xe(de, t);
      return /* @__PURE__ */ ie(
        "div",
        {
          className: gt.card,
          style: ne,
          role: "button",
          tabIndex: 0,
          onClick: () => {
            u(de);
          },
          onDoubleClick: () => {
            s("Watch", de);
          },
          onKeyPress: (Q) => {
            (Q.key === "Enter" || Q.key === " ") && u(de);
          },
          children: [
            Te,
            !R.isEmpty(tt) && /* @__PURE__ */ O("div", { className: gt.cardLine1, children: tt }),
            !R.isEmpty(Xe) && /* @__PURE__ */ O("div", { className: gt.cardLine2, children: Xe }),
            !R.isEmpty(Ve) && /* @__PURE__ */ O("div", { className: gt.cardLine3, children: Ve }),
            !R.isEmpty(He) && /* @__PURE__ */ O("div", { className: gt.cardLine4, children: He })
          ]
        },
        Oe
      );
    }
    const we = R.map(
      t,
      ({
        key: Re,
        label: Be,
        format: Le,
        endDateKey: tt = null,
        dataPosition: Xe = "left",
        hidden: Ve = !1,
        stringLength: He = 20,
        boolLabels: Te,
        translate: Q,
        colorLabel: ze,
        textColor: lt = "#000000",
        stopDateHandler: ft = () => {
        },
        onClick: nt,
        render: Yt,
        multiple: Ye = !1
      }) => {
        if (Ve || Ye) return null;
        if (Yt && typeof Yt == "function")
          return /* @__PURE__ */ O("div", { className: gt.cardField, children: Yt(de) }, Re);
        const $t = qt(Re, de, !1), ot = R.isEmpty(tt) ? null : qt(tt, de), dn = wl(_e, 768, He, 10, 10), Jn = c({
          value: $t,
          format: Le,
          endDate: ot,
          stringLength: dn,
          key: Re,
          translate: Q,
          colorLabel: ze,
          onClick: nt,
          rowData: de,
          textColor: lt,
          boolLabels: Te,
          stopDateHandler: ft
        });
        return /* @__PURE__ */ ie("div", { className: gt.cardField, children: [
          /* @__PURE__ */ ie("div", { className: gt.cardLabel, children: [
            Be,
            ":"
          ] }),
          /* @__PURE__ */ O("div", { className: gt.cardValue, style: { textAlign: Xe, color: lt }, children: Jn })
        ] }, Re);
      }
    ), Ne = xe(de, t);
    return /* @__PURE__ */ ie(
      "div",
      {
        className: gt.card,
        style: ne,
        role: "button",
        tabIndex: 0,
        onClick: () => {
          u(de);
        },
        onDoubleClick: () => {
          s("Watch", de);
        },
        onKeyPress: (Re) => {
          (Re.key === "Enter" || Re.key === " ") && u(de);
        },
        children: [
          Ne,
          we
        ]
      },
      Oe
    );
  }, W = I ? re : e, $ = Jp(() => {
    if (R.isEmpty(W))
      return [];
    const de = [];
    return R.map(W, (Oe, fe) => {
      if (R.isEmpty(n)) {
        const Y = (Oe == null ? void 0 : Oe.id) !== void 0 ? Oe.id : fe;
        de.push({
          type: "card",
          key: `card-${Y}`,
          data: Oe
        });
      } else {
        const Y = qt(n.headerTitle, Oe, !1), ne = qt(n.dataDetail, Oe, !1);
        de.push({
          type: "header",
          key: `header-${fe}`,
          title: Y
        }), R.map(ne, (we, Ne) => {
          const Re = (we == null ? void 0 : we.id) !== void 0 ? we.id : `${fe}-${Ne}`;
          de.push({
            type: "card",
            key: `card-${Re}`,
            data: we
          });
        });
      }
    }), de;
  }, [W, n])(), D = Jp(async () => {
    if (!I || !T || se.current || B || te.current)
      return;
    const de = ae + 1, Oe = R.isEmpty(n) ? re.length : R.sumBy(re, (fe) => {
      const Y = qt(n.dataDetail, fe, !1);
      return (Y == null ? void 0 : Y.length) || 0;
    });
    if (P && Oe >= P) {
      te.current = !0;
      return;
    }
    se.current = !0, U(!0), X.current = !0;
    try {
      await I({ ...T, page: de }, !1, !1), he(de);
    } catch (fe) {
      console.error("Error loading more data:", fe), X.current = !1;
    } finally {
      U(!1), se.current = !1;
    }
  }, [I, T, ae, re, n, P, B]), q = I ? D : k, K = I ? B : F, le = R.isEmpty(n) ? W.length : R.sumBy(W, (de) => {
    const Oe = qt(n.dataDetail, de, !1);
    return (Oe == null ? void 0 : Oe.length) || 0;
  }), Ie = te.current ? !1 : E ?? (P ? le < P : !0);
  return Gt(() => {
    he(1), se.current = !1;
  }, [T]), Gt(() => {
    if (!w || !q || !A.current)
      return;
    let de = null, Oe = null;
    const fe = () => {
      let ne = S.current;
      for (; ne && ne !== document.body; ) {
        const we = ne.className || "", Ne = window.getComputedStyle(ne);
        if (we.includes("modalContent") || we.includes("scrolling") || Ne.overflowY === "auto" || Ne.overflowY === "scroll")
          return ne;
        ne = ne.parentElement;
      }
      return null;
    };
    return Oe = setTimeout(() => {
      const ne = fe(), we = A.current;
      !we || Ie === !1 || $.length === 0 || "IntersectionObserver" in window && (de = new IntersectionObserver(
        (Ne) => {
          const [Re] = Ne;
          Re.isIntersecting && Ie !== !1 && !K && !se.current && $.length > 0 && !ye && q();
        },
        {
          root: ne,
          rootMargin: "200px",
          threshold: 0
        }
      ), de.observe(we));
    }, 300), () => {
      Oe && clearTimeout(Oe), de && A.current && de.unobserve(A.current);
    };
  }, [w, q, Ie, K, $.length, ye]), ye && R.isEmpty($) ? /* @__PURE__ */ O("div", { className: gt.cardsContainer, ref: S, children: /* @__PURE__ */ O("div", { className: gt.emptyState, children: /* @__PURE__ */ ie(
    "div",
    {
      style: {
        textAlign: "center",
        padding: "40px 20px",
        color: "#666",
        fontSize: "1.1rem"
      },
      children: [
        /* @__PURE__ */ O(je, { loading: !0, name: "spinner", size: "big" }),
        /* @__PURE__ */ O("div", { style: { marginTop: "15px" }, children: "Cargando..." })
      ]
    }
  ) }) }) : R.isEmpty($) ? /* @__PURE__ */ O("div", { className: gt.cardsContainer, ref: S, children: /* @__PURE__ */ O("div", { className: gt.emptyState, children: /* @__PURE__ */ ie(Kn, { as: "h3", color: "grey", children: [
    /* @__PURE__ */ O("div", { className: gt.emptyIcon, children: /* @__PURE__ */ ie(je.Group, { size: "large", children: [
      /* @__PURE__ */ O(je, { name: "list alternate outline" }),
      /* @__PURE__ */ O(je, { corner: !0, name: "close", color: "red" })
    ] }) }),
    "No se ha encontrado ningun dato"
  ] }) }) }) : /* @__PURE__ */ ie("div", { className: gt.cardsContainer, ref: S, children: [
    R.map($, (de) => de.type === "header" ? /* @__PURE__ */ O("div", { className: gt.cardHeader, children: de.title }, de.key) : ge(de.data, de.key)),
    w && Ie !== !1 && /* @__PURE__ */ O("div", { ref: A, style: { height: "1px", width: "100%" } }),
    K && !ye && /* @__PURE__ */ ie(
      "div",
      {
        style: {
          textAlign: "center",
          padding: "20px",
          color: "#666",
          fontSize: "1rem"
        },
        children: [
          /* @__PURE__ */ O(je, { loading: !0, name: "spinner" }),
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
function SU(e, t, n) {
  return (t = PU(t)) in e ? Object.defineProperty(e, t, {
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
function Me(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? A0(Object(n), !0).forEach(function(r) {
      SU(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : A0(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function TU(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function PU(e) {
  var t = TU(e, "string");
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
} = eg.navigator || {}, Vo = eg, an = Px, D0 = kx, Tu = Nx;
Vo.document;
const uo = !!an.documentElement && !!an.head && typeof an.addEventListener == "function" && typeof an.createElement == "function", Ix = ~M0.indexOf("MSIE") || ~M0.indexOf("Trident/");
var kU = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, NU = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, Ax = {
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
}, IU = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Rx = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], Wn = "classic", Yd = "duotone", AU = "sharp", RU = "sharp-duotone", Mx = [Wn, Yd, AU, RU], MU = {
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
}, DU = {
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
}, LU = /* @__PURE__ */ new Map([["classic", {
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
}]]), FU = {
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
}, $U = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], L0 = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, BU = ["kit"], jU = {
  kit: {
    "fa-kit": "fak"
  }
}, WU = ["fak", "fakd"], zU = {
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
}, UU = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], HU = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], YU = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, VU = {
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
}, GU = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], Rh = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...UU, ...GU], KU = ["solid", "regular", "light", "thin", "duotone", "brands"], Dx = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], ZU = Dx.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), XU = [...Object.keys(qU), ...KU, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Pu.GROUP, Pu.SWAP_OPACITY, Pu.PRIMARY, Pu.SECONDARY].concat(Dx.map((e) => "".concat(e, "x"))).concat(ZU.map((e) => "w-".concat(e))), QU = {
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
const to = "___FONT_AWESOME___", Mh = 16, Lx = "fa", Fx = "svg-inline--fa", Di = "data-fa-i2svg", Dh = "data-fa-pseudo-element", JU = "data-fa-pseudo-element-pending", tg = "data-prefix", ng = "data-icon", $0 = "fontawesome-i2svg", e7 = "async", t7 = ["HTML", "HEAD", "STYLE", "SCRIPT"], $x = (() => {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})();
function Pc(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[Wn];
    }
  });
}
const Bx = Me({}, Ax);
Bx[Wn] = Me(Me(Me(Me({}, {
  "fa-duotone": "duotone"
}), Ax[Wn]), L0.kit), L0["kit-duotone"]);
const n7 = Pc(Bx), Lh = Me({}, FU);
Lh[Wn] = Me(Me(Me(Me({}, {
  duotone: "fad"
}), Lh[Wn]), F0.kit), F0["kit-duotone"]);
const B0 = Pc(Lh), Fh = Me({}, Ah);
Fh[Wn] = Me(Me({}, Fh[Wn]), zU.kit);
const rg = Pc(Fh), $h = Me({}, VU);
$h[Wn] = Me(Me({}, $h[Wn]), jU.kit);
Pc($h);
const r7 = kU, jx = "fa-layers-text", a7 = NU, o7 = Me({}, MU);
Pc(o7);
const i7 = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], $p = IU, s7 = [...BU, ...XU], Dl = Vo.FontAwesomeConfig || {};
function l7(e) {
  var t = an.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function c7(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
an && typeof an.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [n, r] = t;
  const o = c7(l7(n));
  o != null && (Dl[r] = o);
});
const Wx = {
  styleDefault: "solid",
  familyDefault: Wn,
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
const Fs = Me(Me({}, Wx), Dl);
Fs.autoReplaceSvg || (Fs.observeMutations = !1);
const et = {};
Object.keys(Wx).forEach((e) => {
  Object.defineProperty(et, e, {
    enumerable: !0,
    set: function(t) {
      Fs[e] = t, Ll.forEach((n) => n(et));
    },
    get: function() {
      return Fs[e];
    }
  });
});
Object.defineProperty(et, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    Fs.cssPrefix = e, Ll.forEach((t) => t(et));
  },
  get: function() {
    return Fs.cssPrefix;
  }
});
Vo.FontAwesomeConfig = et;
const Ll = [];
function u7(e) {
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
function d7(e) {
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
const f7 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function dc() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += f7[Math.random() * 62 | 0];
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
function p7(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(zx(e[n]), '" '), "").trim();
}
function Vd(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function og(e) {
  return e.size !== wa.size || e.x !== wa.x || e.y !== wa.y || e.rotate !== wa.rotate || e.flipX || e.flipY;
}
function h7(e) {
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
function m7(e) {
  let {
    transform: t,
    width: n = Mh,
    height: r = Mh,
    startCentered: o = !1
  } = e, s = "";
  return o && Ix ? s += "translate(".concat(t.x / Oo - n / 2, "em, ").concat(t.y / Oo - r / 2, "em) ") : o ? s += "translate(calc(-50% + ".concat(t.x / Oo, "em), calc(-50% + ").concat(t.y / Oo, "em)) ") : s += "translate(".concat(t.x / Oo, "em, ").concat(t.y / Oo, "em) "), s += "scale(".concat(t.size / Oo * (t.flipX ? -1 : 1), ", ").concat(t.size / Oo * (t.flipY ? -1 : 1), ") "), s += "rotate(".concat(t.rotate, "deg) "), s;
}
var g7 = `:root, :host {
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
  const e = Lx, t = Fx, n = et.cssPrefix, r = et.replacementClass;
  let o = g7;
  if (n !== e || r !== t) {
    const s = new RegExp("\\.".concat(e, "\\-"), "g"), u = new RegExp("\\--".concat(e, "\\-"), "g"), c = new RegExp("\\.".concat(t), "g");
    o = o.replace(s, ".".concat(n, "-")).replace(u, "--".concat(n, "-")).replace(c, ".".concat(r));
  }
  return o;
}
let j0 = !1;
function Bp() {
  et.autoAddCss && !j0 && (d7(Ux()), j0 = !0);
}
var v7 = {
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
const no = Vo || {};
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
function y7(e) {
  uo && (sd ? setTimeout(e, 0) : Hx.push(e));
}
function kc(e) {
  const {
    tag: t,
    attributes: n = {},
    children: r = []
  } = e;
  return typeof e == "string" ? zx(e) : "<".concat(t, " ").concat(p7(n), ">").concat(r.map(kc).join(""), "</").concat(t, ">");
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
function b7(e) {
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
  const t = b7(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function _7(e, t) {
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
  typeof xa.hooks.addPack == "function" && !r ? xa.hooks.addPack(e, z0(t)) : xa.styles[e] = Me(Me({}, xa.styles[e] || {}), o), e === "fas" && jh("fa", t);
}
const {
  styles: fc,
  shims: w7
} = xa, Vx = Object.keys(rg), x7 = Vx.reduce((e, t) => (e[t] = Object.keys(rg[t]), e), {});
let ig = null, qx = {}, Gx = {}, Kx = {}, Zx = {}, Xx = {};
function E7(e) {
  return ~s7.indexOf(e);
}
function C7(e, t) {
  const n = t.split("-"), r = n[0], o = n.slice(1).join("-");
  return r === e && o !== "" && !E7(o) ? o : null;
}
const Qx = () => {
  const e = (r) => jp(fc, (o, s, u) => (o[u] = jp(s, r, {}), o), {});
  qx = e((r, o, s) => (o[3] && (r[o[3]] = s), o[2] && o[2].filter((c) => typeof c == "number").forEach((c) => {
    r[c.toString(16)] = s;
  }), r)), Gx = e((r, o, s) => (r[s] = s, o[2] && o[2].filter((c) => typeof c == "string").forEach((c) => {
    r[c] = s;
  }), r)), Xx = e((r, o, s) => {
    const u = o[2];
    return r[s] = s, u.forEach((c) => {
      r[c] = s;
    }), r;
  });
  const t = "far" in fc || et.autoFetchSvg, n = jp(w7, (r, o) => {
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
  Kx = n.names, Zx = n.unicodes, ig = qd(et.styleDefault, {
    family: et.familyDefault
  });
};
u7((e) => {
  ig = qd(e.styleDefault, {
    family: et.familyDefault
  });
});
Qx();
function sg(e, t) {
  return (qx[e] || {})[t];
}
function O7(e, t) {
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
function S7(e) {
  const t = Zx[e], n = sg("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function qo() {
  return ig;
}
const eE = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function T7(e) {
  let t = Wn;
  const n = Vx.reduce((r, o) => (r[o] = "".concat(et.cssPrefix, "-").concat(o), r), {});
  return Mx.forEach((r) => {
    (e.includes(n[r]) || e.some((o) => x7[r].includes(o))) && (t = r);
  }), t;
}
function qd(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = Wn
  } = t, r = n7[n][e];
  if (n === Yd && !e)
    return "fad";
  const o = B0[n][e] || B0[n][r], s = e in xa.styles ? e : null;
  return o || s || null;
}
function P7(e) {
  let t = [], n = null;
  return e.forEach((r) => {
    const o = C7(et.cssPrefix, r);
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
  const o = Rh.concat(HU), s = U0(e.filter((m) => o.includes(m))), u = U0(e.filter((m) => !Rh.includes(m))), c = s.filter((m) => (r = m, !Rx.includes(m))), [d = null] = c, p = T7(s), h = Me(Me({}, P7(u)), {}, {
    prefix: qd(d, {
      family: p
    })
  });
  return Me(Me(Me({}, h), A7({
    values: e,
    family: p,
    styles: fc,
    config: et,
    canonical: h,
    givenPrefix: r
  })), k7(n, r, h));
}
function k7(e, t, n) {
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
  return o = s.iconName || u || o, r = s.prefix || r, r === "far" && !fc.far && fc.fas && !et.autoFetchSvg && (r = "fas"), {
    prefix: r,
    iconName: o
  };
}
const N7 = Mx.filter((e) => e !== Wn || e !== Yd), I7 = Object.keys(Ah).filter((e) => e !== Wn).map((e) => Object.keys(Ah[e])).flat();
function A7(e) {
  const {
    values: t,
    family: n,
    canonical: r,
    givenPrefix: o = "",
    styles: s = {},
    config: u = {}
  } = e, c = n === Yd, d = t.includes("fa-duotone") || t.includes("fad"), p = u.familyDefault === "duotone", h = r.prefix === "fad" || r.prefix === "fa-duotone";
  if (!c && (d || p || h) && (r.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (r.prefix = "fab"), !r.prefix && N7.includes(n) && (Object.keys(s).find((g) => I7.includes(g)) || u.autoFetchSvg)) {
    const g = LU.get(n).defaultShortPrefixId;
    r.prefix = g, r.iconName = _i(r.prefix, r.iconName) || r.iconName;
  }
  return (r.prefix === "fa" || o === "fa") && (r.prefix = qo() || "fas"), r;
}
class R7 {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    const o = n.reduce(this._pullDefinitions, {});
    Object.keys(o).forEach((s) => {
      this.definitions[s] = Me(Me({}, this.definitions[s] || {}), o[s]), jh(s, o[s]);
      const u = rg[Wn][s];
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
const ys = {}, M7 = Object.keys(ys);
function D7(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return H0 = e, ds = {}, Object.keys(ys).forEach((r) => {
    M7.indexOf(r) === -1 && delete ys[r];
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
  const n = e.prefix || qo();
  if (t)
    return t = _i(n, t) || t, W0(tE.definitions, n, t) || W0(xa.styles, n, t);
}
const tE = new R7(), L7 = () => {
  et.autoReplaceSvg = !1, et.observeMutations = !1, Li("noAuto");
}, F7 = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return uo ? (Li("beforeI2svg", e), Go("pseudoElements2svg", e), Go("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    et.autoReplaceSvg === !1 && (et.autoReplaceSvg = !0), et.observeMutations = !0, y7(() => {
      B7({
        autoReplaceSvgRoot: t
      }), Li("watch", e);
    });
  }
}, $7 = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: _i(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = qd(e[0]);
      return {
        prefix: n,
        iconName: _i(n, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(et.cssPrefix, "-")) > -1 || e.match(r7))) {
      const t = Gd(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || qo(),
        iconName: _i(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = qo();
      return {
        prefix: t,
        iconName: _i(t, e) || e
      };
    }
  }
}, Or = {
  noAuto: L7,
  config: et,
  dom: F7,
  parse: $7,
  library: tE,
  findIconDefinition: zh,
  toHtml: kc
}, B7 = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = an
  } = e;
  (Object.keys(xa.styles).length > 0 || et.autoFetchSvg) && uo && et.autoReplaceSvg && Or.dom.i2svg({
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
function j7(e) {
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
    o.style = Vd(Me(Me({}, s), {}, {
      "transform-origin": "".concat(p.x + u.x / 16, "em ").concat(p.y + u.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: o,
    children: t
  }];
}
function W7(e) {
  let {
    prefix: t,
    iconName: n,
    children: r,
    attributes: o,
    symbol: s
  } = e;
  const u = s === !0 ? "".concat(t, "-").concat(et.cssPrefix, "-").concat(n) : s;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: Me(Me({}, o), {}, {
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
  } = n.found ? n : t, b = WU.includes(r), _ = [et.replacementClass, o ? "".concat(et.cssPrefix, "-").concat(o) : ""].filter((T) => h.classes.indexOf(T) === -1).filter((T) => T !== "" || !!T).concat(h.classes).join(" ");
  let w = {
    children: [],
    attributes: Me(Me({}, h.attributes), {}, {
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
  const F = Me(Me({}, w), {}, {
    prefix: r,
    iconName: o,
    main: t,
    mask: n,
    maskId: d,
    transform: s,
    symbol: u,
    styles: Me(Me({}, k), h.styles)
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
  return F.children = E, F.attributes = I, u ? W7(F) : j7(F);
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
  } = e, d = Me(Me(Me({}, u.attributes), s ? {
    title: s
  } : {}), {}, {
    class: u.classes.join(" ")
  });
  c && (d[Di] = "");
  const p = Me({}, u.styles);
  og(o) && (p.transform = m7({
    transform: o,
    startCentered: !0,
    width: n,
    height: r
  }), p["-webkit-transform"] = p.transform);
  const h = Vd(p);
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
function z7(e) {
  const {
    content: t,
    title: n,
    extra: r
  } = e, o = Me(Me(Me({}, r.attributes), n ? {
    title: n
  } : {}), {}, {
    class: r.classes.join(" ")
  }), s = Vd(r.styles);
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
      class: "".concat(et.cssPrefix, "-").concat($p.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(et.cssPrefix, "-").concat($p.SECONDARY),
        fill: "currentColor",
        d: r[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(et.cssPrefix, "-").concat($p.PRIMARY),
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
const U7 = {
  found: !1,
  width: 512,
  height: 512
};
function H7(e, t) {
  !$x && !et.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function Hh(e, t) {
  let n = t;
  return t === "fa" && et.styleDefault !== null && (t = qo()), new Promise((r, o) => {
    if (n === "fa") {
      const s = Jx(e) || {};
      e = s.iconName || e, t = s.prefix || t;
    }
    if (e && t && Wp[t] && Wp[t][e]) {
      const s = Wp[t][e];
      return r(Uh(s));
    }
    H7(e, t), r(Me(Me({}, U7), {}, {
      icon: et.showMissingIcons && e ? Go("missingIconAbstract") || {} : {}
    }));
  });
}
const V0 = () => {
}, Yh = et.measurePerformance && Tu && Tu.mark && Tu.measure ? Tu : {
  mark: V0,
  measure: V0
}, Pl = 'FA "6.7.2"', Y7 = (e) => (Yh.mark("".concat(Pl, " ").concat(e, " begins")), () => nE(e)), nE = (e) => {
  Yh.mark("".concat(Pl, " ").concat(e, " ends")), Yh.measure("".concat(Pl, " ").concat(e), "".concat(Pl, " ").concat(e, " begins"), "".concat(Pl, " ").concat(e, " ends"));
};
var cg = {
  begin: Y7,
  end: nE
};
const Wu = () => {
};
function q0(e) {
  return typeof (e.getAttribute ? e.getAttribute(Di) : null) == "string";
}
function V7(e) {
  const t = e.getAttribute ? e.getAttribute(tg) : null, n = e.getAttribute ? e.getAttribute(ng) : null;
  return t && n;
}
function q7(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(et.replacementClass);
}
function G7() {
  return et.autoReplaceSvg === !0 ? zu.replace : zu[et.autoReplaceSvg] || zu.replace;
}
function K7(e) {
  return an.createElementNS("http://www.w3.org/2000/svg", e);
}
function Z7(e) {
  return an.createElement(e);
}
function rE(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? K7 : Z7
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
function X7(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const zu = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((n) => {
        t.parentNode.insertBefore(rE(n), t);
      }), t.getAttribute(Di) === null && et.keepOriginalSource) {
        let n = an.createComment(X7(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], n = e[1];
    if (~ag(t).indexOf(et.replacementClass))
      return zu.replace(e);
    const r = new RegExp("".concat(et.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const s = n[0].attributes.class.split(" ").reduce((u, c) => (c === et.replacementClass || c.match(r) ? u.toSvg.push(c) : u.toNode.push(c), u), {
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
    et.mutateApproach === e7 && (r = Vo.requestAnimationFrame || G0), r(() => {
      const o = G7(), s = cg.begin("mutate");
      e.map(o), s(), n();
    });
  }
}
let ug = !1;
function oE() {
  ug = !0;
}
function Vh() {
  ug = !1;
}
let ld = null;
function K0(e) {
  if (!D0 || !et.observeMutations)
    return;
  const {
    treeCallback: t = Wu,
    nodeCallback: n = Wu,
    pseudoElementsCallback: r = Wu,
    observeMutationsRoot: o = an
  } = e;
  ld = new D0((s) => {
    if (ug) return;
    const u = qo();
    Zs(s).forEach((c) => {
      if (c.type === "childList" && c.addedNodes.length > 0 && !q0(c.addedNodes[0]) && (et.searchPseudoElements && r(c.target), t(c.target)), c.type === "attributes" && c.target.parentNode && et.searchPseudoElements && r(c.target.parentNode), c.type === "attributes" && q0(c.target) && ~i7.indexOf(c.attributeName))
        if (c.attributeName === "class" && V7(c.target)) {
          const {
            prefix: d,
            iconName: p
          } = Gd(ag(c.target));
          c.target.setAttribute(tg, d || u), p && c.target.setAttribute(ng, p);
        } else q7(c.target) && n(c.target);
    });
  }), uo && ld.observe(o, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function Q7() {
  ld && ld.disconnect();
}
function J7(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce((r, o) => {
    const s = o.split(":"), u = s[0], c = s.slice(1);
    return u && c.length > 0 && (r[u] = c.join(":").trim()), r;
  }, {})), n;
}
function e8(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "";
  let o = Gd(ag(e));
  return o.prefix || (o.prefix = qo()), t && n && (o.prefix = t, o.iconName = n), o.iconName && o.prefix || (o.prefix && r.length > 0 && (o.iconName = O7(o.prefix, e.innerText) || sg(o.prefix, Bh(e.innerText))), !o.iconName && et.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (o.iconName = e.firstChild.data)), o;
}
function t8(e) {
  const t = Zs(e.attributes).reduce((o, s) => (o.name !== "class" && o.name !== "style" && (o[s.name] = s.value), o), {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return et.autoA11y && (n ? t["aria-labelledby"] = "".concat(et.replacementClass, "-title-").concat(r || dc()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function n8() {
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
  } = e8(e), s = t8(e), u = Wh("parseNodeAttributes", {}, e);
  let c = t.styleParser ? J7(e) : [];
  return Me({
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
  styles: r8
} = xa;
function iE(e) {
  const t = et.autoReplaceSvg === "nest" ? Z0(e, {
    styleParser: !1
  }) : Z0(e);
  return ~t.extra.classes.indexOf(jx) ? Go("generateLayersText", e, t) : Go("generateSvgReplacementMutation", e, t);
}
function a8() {
  return [...$U, ...Rh];
}
function X0(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!uo) return Promise.resolve();
  const n = an.documentElement.classList, r = (h) => n.add("".concat($0, "-").concat(h)), o = (h) => n.remove("".concat($0, "-").concat(h)), s = et.autoFetchSvg ? a8() : Rx.concat(Object.keys(r8));
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
function o8(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  iE(e).then((n) => {
    n && aE([n], t);
  });
}
function i8(e) {
  return function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = (t || {}).icon ? t : zh(t || {});
    let {
      mask: o
    } = n;
    return o && (o = (o || {}).icon ? o : zh(o || {})), e(r, Me(Me({}, n), {}, {
      mask: o
    }));
  };
}
const s8 = function(e) {
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
  return Kd(Me({
    type: "icon"
  }, e), () => (Li("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), et.autoA11y && (u ? p["aria-labelledby"] = "".concat(et.replacementClass, "-title-").concat(c || dc()) : (p["aria-hidden"] = "true", p.focusable = "false")), lg({
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
    transform: Me(Me({}, wa), n),
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
var l8 = {
  mixout() {
    return {
      icon: i8(s8)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = X0, e.nodeCallback = o8, e;
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
      const c = Vd(u);
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
}, c8 = {
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
              class: ["".concat(et.cssPrefix, "-layers"), ...n].join(" ")
            },
            children: r
          }];
        });
      }
    };
  }
}, u8 = {
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
        }), z7({
          content: e.toString(),
          title: n,
          extra: {
            attributes: o,
            styles: s,
            classes: ["".concat(et.cssPrefix, "-layers-counter"), ...r]
          }
        })));
      }
    };
  }
}, d8 = {
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
          transform: Me(Me({}, wa), n),
          title: r,
          extra: {
            attributes: s,
            styles: u,
            classes: ["".concat(et.cssPrefix, "-layers-text"), ...o]
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
      return et.autoA11y && !r && (s.attributes["aria-hidden"] = "true"), Promise.resolve([t, Y0({
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
const f8 = new RegExp('"', "ug"), Q0 = [1105920, 1112319], J0 = Me(Me(Me(Me({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), DU), QU), YU), qh = Object.keys(J0).reduce((e, t) => (e[t.toLowerCase()] = J0[t], e), {}), p8 = Object.keys(qh).reduce((e, t) => {
  const n = qh[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function h8(e) {
  const t = e.replace(f8, ""), n = _7(t, 0), r = n >= Q0[0] && n <= Q0[1], o = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: Bh(o ? t[0] : t),
    isSecondary: r || o
  };
}
function m8(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(t), o = isNaN(r) ? "normal" : r;
  return (qh[n] || {})[o] || p8[n];
}
function e_(e, t) {
  const n = "".concat(JU).concat(t.replace(":", "-"));
  return new Promise((r, o) => {
    if (e.getAttribute(n) !== null)
      return r();
    const u = Zs(e.children).filter((g) => g.getAttribute(Dh) === t)[0], c = Vo.getComputedStyle(e, t), d = c.getPropertyValue("font-family"), p = d.match(a7), h = c.getPropertyValue("font-weight"), m = c.getPropertyValue("content");
    if (u && !p)
      return e.removeChild(u), r();
    if (p && m !== "none" && m !== "") {
      const g = c.getPropertyValue("content");
      let y = m8(d, h);
      const {
        value: b,
        isSecondary: _
      } = h8(g), w = p[0].startsWith("FontAwesome");
      let k = sg(y, b), F = k;
      if (w) {
        const E = S7(b);
        E.iconName && E.prefix && (k = E.iconName, y = E.prefix);
      }
      if (k && !_ && (!u || u.getAttribute(tg) !== y || u.getAttribute(ng) !== F)) {
        e.setAttribute(n, F), u && e.removeChild(u);
        const E = n8(), {
          extra: I
        } = E;
        I.attributes[Dh] = t, Hh(k, y).then((T) => {
          const P = lg(Me(Me({}, E), {}, {
            icons: {
              main: T,
              mask: eE()
            },
            prefix: y,
            iconName: F,
            extra: I,
            watchable: !0
          })), C = an.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(C, e.firstChild) : e.appendChild(C), C.outerHTML = P.map((S) => kc(S)).join(`
`), e.removeAttribute(n), r();
        }).catch(o);
      } else
        r();
    } else
      r();
  });
}
function g8(e) {
  return Promise.all([e_(e, "::before"), e_(e, "::after")]);
}
function v8(e) {
  return e.parentNode !== document.head && !~t7.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(Dh) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function t_(e) {
  if (uo)
    return new Promise((t, n) => {
      const r = Zs(e.querySelectorAll("*")).filter(v8).map(g8), o = cg.begin("searchPseudoElements");
      oE(), Promise.all(r).then(() => {
        o(), Vh(), t();
      }).catch(() => {
        o(), Vh(), n();
      });
    });
}
var y8 = {
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
      et.searchPseudoElements && t_(n);
    };
  }
};
let n_ = !1;
var b8 = {
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
        Q7();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        n_ ? Vh() : K0(Wh("mutationObserverCallbacks", {
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
var _8 = {
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
        attributes: Me({}, g.outer),
        children: [{
          tag: "g",
          attributes: Me({}, g.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: Me(Me({}, n.icon.attributes), g.path)
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
function w8(e) {
  return e.tag === "g" ? e.children : [e];
}
var x8 = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-mask"), r = n ? Gd(n.split(" ").map((o) => o.trim())) : eE();
        return r.prefix || (r.prefix = qo()), e.mask = r, e.maskId = t.getAttribute("data-fa-mask-id"), e;
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
      } = s, g = h7({
        transform: c,
        containerWidth: h,
        iconWidth: d
      }), y = {
        tag: "rect",
        attributes: Me(Me({}, zp), {}, {
          fill: "white"
        })
      }, b = p.children ? {
        children: p.children.map(a_)
      } : {}, _ = {
        tag: "g",
        attributes: Me({}, g.inner),
        children: [a_(Me({
          tag: p.tag,
          attributes: Me(Me({}, p.attributes), g.path)
        }, b))]
      }, w = {
        tag: "g",
        attributes: Me({}, g.outer),
        children: [_]
      }, k = "mask-".concat(u || dc()), F = "clip-".concat(u || dc()), E = {
        tag: "mask",
        attributes: Me(Me({}, zp), {}, {
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
          children: w8(m)
        }, E]
      };
      return n.push(I, {
        tag: "rect",
        attributes: Me({
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
}, E8 = {
  provides(e) {
    let t = !1;
    Vo.matchMedia && (t = Vo.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      const n = [], r = {
        fill: "currentColor"
      }, o = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      n.push({
        tag: "path",
        attributes: Me(Me({}, r), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      const s = Me(Me({}, o), {}, {
        attributeName: "opacity"
      }), u = {
        tag: "circle",
        attributes: Me(Me({}, r), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return t || u.children.push({
        tag: "animate",
        attributes: Me(Me({}, o), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: Me(Me({}, s), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), n.push(u), n.push({
        tag: "path",
        attributes: Me(Me({}, r), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: t ? [] : [{
          tag: "animate",
          attributes: Me(Me({}, s), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), t || n.push({
        tag: "path",
        attributes: Me(Me({}, r), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: Me(Me({}, s), {}, {
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
}, C8 = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), r = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = r, e;
      }
    };
  }
}, O8 = [v7, l8, c8, u8, d8, y8, b8, _8, x8, E8, C8];
D7(O8, {
  mixoutsTo: Or
});
Or.noAuto;
Or.config;
Or.library;
Or.dom;
const Gh = Or.parse;
Or.findIconDefinition;
Or.toHtml;
const S8 = Or.icon;
Or.layer;
Or.text;
Or.counter;
function Kh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function T8(e) {
  if (Array.isArray(e)) return e;
}
function P8(e) {
  if (Array.isArray(e)) return Kh(e);
}
function To(e, t, n) {
  return (t = L8(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function k8(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function N8(e, t) {
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
function I8() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function A8() {
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
function R8(e, t) {
  if (e == null) return {};
  var n, r, o = M8(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}
function M8(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function i_(e, t) {
  return T8(e) || N8(e, t) || sE(e, t) || I8();
}
function Zh(e) {
  return P8(e) || k8(e) || sE(e) || A8();
}
function D8(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function L8(e) {
  var t = D8(e, "string");
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
var F8 = "7.0.0", Xh;
try {
  var $8 = require("@fortawesome/fontawesome-svg-core/package.json");
  Xh = $8.version;
} catch {
  Xh = typeof process < "u" && process.env.FA_VERSION || "7.0.0";
}
function B8(e) {
  var t = e.beat, n = e.fade, r = e.beatFade, o = e.bounce, s = e.shake, u = e.flash, c = e.spin, d = e.spinPulse, p = e.spinReverse, h = e.pulse, m = e.fixedWidth, g = e.inverse, y = e.border, b = e.listItem, _ = e.flip, w = e.size, k = e.rotation, F = e.pull, E = e.swapOpacity, I = e.rotateBy, T = e.widthAuto, P = j8(Xh, F8), C = To(To(To(To(To(To({
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
  }, "fa-".concat(w), typeof w < "u" && w !== null), "fa-rotate-".concat(k), typeof k < "u" && k !== null && k !== 0), "fa-pull-".concat(F), typeof F < "u" && F !== null), "fa-swap-opacity", E), "fa-rotate-by", P && I), "fa-width-auto", P && T);
  return Object.keys(C).map(function(S) {
    return C[S] ? S : null;
  }).filter(function(S) {
    return S;
  });
}
function j8(e, t) {
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
function W8(e) {
  return e = e - 0, e === e;
}
function lE(e) {
  return W8(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var z8 = ["style"];
function U8(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function H8(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), o = lE(n.slice(0, r)), s = n.slice(r + 1).trim();
    return o.startsWith("webkit") ? t[U8(o)] = s : t[o] = s, t;
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
        d.attrs.style = H8(h);
        break;
      default:
        p.indexOf("aria-") === 0 || p.indexOf("data-") === 0 ? d.attrs[p.toLowerCase()] = h : d.attrs[lE(p)] = h;
    }
    return d;
  }, {
    attrs: {}
  }), s = n.style, u = s === void 0 ? {} : s, c = R8(n, z8);
  return o.attrs.style = ga(ga({}, o.attrs.style), u), e.apply(void 0, [t.tag, ga(ga({}, o.attrs), c)].concat(Zh(r)));
}
var uE = !1;
try {
  uE = process.env.NODE_ENV === "production";
} catch {
}
function Y8() {
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
}, ud = /* @__PURE__ */ ee.forwardRef(function(e, t) {
  var n = ga(ga({}, l_), e), r = n.icon, o = n.mask, s = n.symbol, u = n.className, c = n.title, d = n.titleId, p = n.maskId, h = s_(r), m = Up("classes", [].concat(Zh(B8(n)), Zh((u || "").split(" ")))), g = Up("transform", typeof n.transform == "string" ? Gh.transform(n.transform) : n.transform), y = Up("mask", s_(o)), b = S8(h, ga(ga(ga(ga({}, m), g), y), {}, {
    symbol: s,
    title: c,
    titleId: d,
    maskId: p
  }));
  if (!b)
    return Y8("Could not find icon", h), null;
  var _ = b.abstract, w = {
    ref: t
  };
  return Object.keys(n).forEach(function(k) {
    l_.hasOwnProperty(k) || (w[k] = n[k]);
  }), V8(_[0], w);
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
var V8 = cE.bind(null, ee.createElement);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const q8 = {
  prefix: "fas",
  iconName: "rotate-left",
  icon: [512, 512, ["rotate-back", "rotate-backward", "undo-alt"], "f2ea", "M48.5 224L40 224c-13.3 0-24-10.7-24-24L16 72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8L48.5 224z"]
}, G8 = {
  prefix: "fas",
  iconName: "rotate-right",
  icon: [512, 512, ["redo-alt", "rotate-forward"], "f2f9", "M463.5 224l8.5 0c13.3 0 24-10.7 24-24l0-128c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8l119.5 0z"]
}, dE = "carousel", dg = "controller", K8 = "navigation", Z8 = "no-scroll", fg = "portal", X8 = "root", fE = "toolbar", Q8 = "download", Qh = "fullscreen", c_ = "thumbnails", u_ = "zoom", Uu = "loading", J8 = "playing", Hp = "error", Hu = "complete", eH = "placeholder", Zd = (e) => `active-slide-${e}`, tH = Zd(Uu), nH = Zd(J8), rH = Zd(Hu), pE = "fullsize", Xd = "flex_center", aH = "no_scroll", hE = "no_scroll_padding", pg = "slide", hg = "slide_wrapper", oH = "slide_wrapper_interactive", gi = "prev", vi = "next", d_ = "swipe", $s = "close", mE = "onPointerDown", gE = "onPointerMove", vE = "onPointerUp", yE = "onPointerLeave", bE = "onPointerCancel", mg = "onKeyDown", iH = "onKeyUp", gg = "onWheel", sH = "Escape", lH = "ArrowLeft", cH = "ArrowRight", uH = "button", Jh = "icon", _E = "contain", f_ = "cover", wE = "Unknown action type", xE = "yarl__";
function Br(...e) {
  return e.filter(Boolean).join(" ");
}
function xt(e) {
  return `${xE}${e}`;
}
function ir(e) {
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
function dH(e, t, n) {
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
function fH(e, t) {
  const n = dd(t), r = n.percent !== void 0 ? e.width / 100 * n.percent : n.pixel;
  return {
    width: Math.max(e.width - 2 * r, 0),
    height: Math.max(e.height - 2 * r, 0)
  };
}
function pH() {
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
function hH(e) {
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
function mH(e, t, n = 0) {
  return Math.min(e.preload, Math.max(e.finite ? t.length - 1 : Math.floor(t.length / 2), n));
}
const gH = Number(L.version.split(".")[0]) >= 19;
function vH(e) {
  return { inert: gH ? e : e ? "" : void 0 };
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
function In(e, t) {
  return { module: e, children: t };
}
function SE(e, t, n) {
  return e.module.name === t ? n(e) : e.children ? [
    In(e.module, e.children.flatMap((r) => {
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
function yH(e, t = [], n = []) {
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
      r = [In(b, r)];
      return;
    }
    r = os(r, y, (_) => [In(b, [_])]);
  }, u = (y, b) => {
    r = os(r, y, (_) => [In(_.module, [In(b, _.children)])]);
  }, c = (y, b, _) => {
    r = os(r, y, (w) => {
      var k;
      return [
        In(w.module, [
          ..._ ? [In(b)] : [],
          ...(k = w.children) !== null && k !== void 0 ? k : [],
          ..._ ? [] : [In(b)]
        ])
      ];
    });
  }, d = (y, b, _) => {
    r = os(r, y, (w) => [
      ..._ ? [In(b)] : [],
      w,
      ..._ ? [] : [In(b)]
    ]);
  }, p = (y) => {
    u(dg, y);
  }, h = (y, b) => {
    r = os(r, y, (_) => [In(b, _.children)]);
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
function bH({ children: e }) {
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
function _H({ nodeRef: e, children: t }) {
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
function wH({ children: e }) {
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
const IE = L.createContext(null), zn = sa("useLightboxProps", "LightboxPropsContext", IE);
function xH({ children: e, ...t }) {
  return L.createElement(IE.Provider, { value: t }, e);
}
const AE = L.createContext(null), po = sa("useLightboxState", "LightboxStateContext", AE), RE = L.createContext(null), EH = sa("useLightboxDispatch", "LightboxDispatchContext", RE);
function CH(e, t) {
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
function OH({ slides: e, index: t, children: n }) {
  const [r, o] = L.useReducer(CH, {
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
const ME = L.createContext(null), SH = sa("useRTLContext", "RTLContext", ME);
function TH({ isRTL: e, children: t }) {
  const n = L.useMemo(() => ({ isRTL: e }), [e]);
  return L.createElement(ME.Provider, { value: n }, t);
}
const DE = L.createContext(null), ef = sa("useTimeouts", "TimeoutsContext", DE);
function PH({ children: e }) {
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
  const { styles: p, labels: h } = zn(), m = Bs(h, t);
  return L.createElement("button", { ref: d, type: "button", title: m, "aria-label": m, className: Br(xt(uH), n), onClick: s, style: { ...u, ...p.button }, ...c }, o ? o() : L.createElement(r, { className: xt(Jh), style: p.icon }));
});
function kH(e, t) {
  const n = (r) => L.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", "aria-hidden": "true", focusable: "false", ...r }, t);
  return n.displayName = e, n;
}
function Aa(e, t) {
  return kH(e, L.createElement(
    "g",
    { fill: "currentColor" },
    L.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
    t
  ));
}
const NH = Aa("Close", L.createElement("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })), IH = Aa("Previous", L.createElement("path", { d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" })), AH = Aa("Next", L.createElement("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" })), RH = Aa("Loading", L.createElement(L.Fragment, null, Array.from({ length: 8 }).map((e, t, n) => L.createElement("line", { key: t, x1: "12", y1: "6.5", x2: "12", y2: "1.8", strokeLinecap: "round", strokeWidth: "2.6", stroke: "currentColor", strokeOpacity: 1 / n.length * (t + 1), transform: `rotate(${360 / n.length * t}, 12, 12)` })))), MH = Aa("Error", L.createElement("path", { d: "M21.9,21.9l-8.49-8.49l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31L21.9,21.9z M5,18 l3.5-4.5l2.5,3.01L12.17,15l3,3H5z M21,18.17L5.83,3H19c1.1,0,2,0.9,2,2V18.17z" })), aa = yg() ? L.useLayoutEffect : L.useEffect;
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
function DH(e) {
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
      const { keyframes: d, duration: p, easing: h, onfinish: m } = t(n.current, e.current.getBoundingClientRect(), DH(e.current)) || {};
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
function LH(e, t = !1) {
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
  return SH().isRTL;
}
function FH() {
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
    onKeyUp: (o) => t(iH, o),
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
const Yp = vg("slide"), Vp = vg("slide_image");
function fd({ slide: e, offset: t, render: n, rect: r, imageFit: o, imageProps: s, onClick: u, onLoad: c, onError: d, style: p }) {
  var h, m, g, y, b, _, w, k;
  const [F, E] = L.useState(Uu), { publish: I } = Ic(), { setTimeout: T } = ef(), P = L.useRef(null);
  L.useEffect(() => {
    t === 0 && I(Zd(F));
  }, [t, F, I]);
  const C = At((oe) => {
    ("decode" in oe ? oe.decode() : Promise.resolve()).catch(() => {
    }).then(() => {
      oe.parentNode && (E(Hu), T(() => {
        c == null || c(oe);
      }, 0));
    });
  }), S = L.useCallback((oe) => {
    P.current = oe, oe != null && oe.complete && C(oe);
  }, [C]), A = L.useCallback((oe) => {
    C(oe.currentTarget);
  }, [C]), B = At(() => {
    E(Hp), d == null || d();
  }), U = _g(e, o), re = (oe, _e) => Number.isFinite(oe) ? oe : _e, G = re(Math.max(...((m = (h = e.srcSet) === null || h === void 0 ? void 0 : h.map((oe) => oe.width)) !== null && m !== void 0 ? m : []).concat(e.width ? [e.width] : []).filter(Boolean)), ((g = P.current) === null || g === void 0 ? void 0 : g.naturalWidth) || 0), ae = re(Math.max(...((b = (y = e.srcSet) === null || y === void 0 ? void 0 : y.map((oe) => oe.height)) !== null && b !== void 0 ? b : []).concat(e.height ? [e.height] : []).filter(Boolean)), ((_ = P.current) === null || _ === void 0 ? void 0 : _.naturalHeight) || 0), he = G && ae ? {
    maxWidth: `min(${G}px, 100%)`,
    maxHeight: `min(${ae}px, 100%)`
  } : {
    maxWidth: "100%",
    maxHeight: "100%"
  }, ye = (w = e.srcSet) === null || w === void 0 ? void 0 : w.slice().sort((oe, _e) => oe.width - _e.width).map((oe) => `${oe.src} ${oe.width}w`).join(", "), ke = () => r && !U && e.width && e.height ? r.height / e.height * e.width : Number.MAX_VALUE, se = ye && r && yg() ? `${Math.round(Math.min(ke(), r.width))}px` : void 0, { style: me, className: X, ...te } = (typeof s == "function" ? s(e) : s) || {};
  return L.createElement(
    L.Fragment,
    null,
    L.createElement("img", { ref: S, onLoad: A, onError: B, onClick: u, draggable: !1, className: Br(xt(Vp()), U && xt(Vp("cover")), F !== Hu && xt(Vp("loading")), X), style: { ...he, ...p, ...me }, ...te, alt: (k = e.alt) !== null && k !== void 0 ? k : "", sizes: se, srcSet: ye, src: e.src }),
    F !== Hu && L.createElement(
      "div",
      { className: xt(Yp(eH)) },
      F === Uu && (n != null && n.iconLoading ? n.iconLoading() : L.createElement(RH, { className: Br(xt(Jh), xt(Yp(Uu))) })),
      F === Hp && (n != null && n.iconError ? n.iconError() : L.createElement(MH, { className: Br(xt(Jh), xt(Yp(Hp))) }))
    )
  );
}
const $H = L.forwardRef(function({ className: t, children: n, onFocus: r, onBlur: o, ...s }, u) {
  const c = L.useRef(null), [d, p] = L.useState(!1), { trackFocusWithin: h } = PE(), m = At(() => {
    if (c.current) {
      const g = window.getComputedStyle(c.current).direction === "rtl";
      g !== d && p(g);
    }
  });
  return L.useEffect(m), L.createElement(
    _H,
    { nodeRef: c },
    L.createElement(
      TH,
      { isRTL: d },
      L.createElement("div", { ref: nm(u, c), className: Br(xt("root"), t), ...h(r, o), ...s }, n)
    )
  );
});
var Bn;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.SWIPE = 1] = "SWIPE", e[e.PULL = 2] = "PULL", e[e.ANIMATION = 3] = "ANIMATION";
})(Bn || (Bn = {}));
function LE(e, t, n, r, o) {
  L.useEffect(() => o ? () => {
  } : Qd(e(mE, t), e(gE, n), e(vE, r), e(yE, r), e(bE, r)), [e, t, n, r, o]);
}
var Qr;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.SWIPE = 1] = "SWIPE", e[e.PULL = 2] = "PULL";
})(Qr || (Qr = {}));
const qp = 30;
function BH({ disableSwipeNavigation: e, closeOnBackdropClick: t }, n, r, o, s, u, c, d, p, h, m, g, y, b, _, w) {
  const k = L.useRef(0), F = L.useRef([]), E = L.useRef(void 0), I = L.useRef(0), T = L.useRef(Qr.NONE), P = L.useCallback((G) => {
    E.current === G.pointerId && (E.current = void 0, T.current = Qr.NONE);
    const ae = F.current;
    ae.splice(0, ae.length, ...ae.filter((he) => he.pointerId !== G.pointerId));
  }, []), C = L.useCallback((G) => {
    P(G), G.persist(), F.current.push(G);
  }, [P]), S = L.useCallback((G) => F.current.find(({ pointerId: ae }) => G.pointerId === ae), []), A = At((G) => {
    C(G);
  }), B = (G, ae) => m && G > ae || h && G < -ae, U = At((G) => {
    const ae = S(G);
    if (ae)
      if (E.current === G.pointerId) {
        const he = Date.now() - I.current, ye = k.current;
        T.current === Qr.SWIPE ? Math.abs(ye) > 0.3 * o || Math.abs(ye) > 5 && he < s ? d(ye, he) : p(ye) : T.current === Qr.PULL && (B(ye, 2 * qp) ? b(ye, he) : _(ye)), k.current = 0, T.current = Qr.NONE;
      } else {
        const { target: he } = G;
        t && he instanceof HTMLElement && he === ae.target && (he.classList.contains(xt(pg)) || he.classList.contains(xt(hg))) && w();
      }
    P(G);
  }), re = At((G) => {
    const ae = S(G);
    if (ae) {
      const he = E.current === G.pointerId;
      if (G.buttons === 0) {
        he && k.current !== 0 ? U(G) : P(ae);
        return;
      }
      const ye = G.clientX - ae.clientX, ke = G.clientY - ae.clientY;
      if (E.current === void 0) {
        const se = (me) => {
          C(G), E.current = G.pointerId, I.current = Date.now(), T.current = me;
        };
        Math.abs(ye) > Math.abs(ke) && Math.abs(ye) > qp && r(ye) ? e || (se(Qr.SWIPE), u()) : Math.abs(ke) > Math.abs(ye) && B(ke, qp) && (se(Qr.PULL), g());
      } else he && (T.current === Qr.SWIPE ? (k.current = ye, c(ye)) : T.current === Qr.PULL && (k.current = ke, y(ke)));
    }
  });
  LE(n, A, re, U);
}
function jH({ preventDefaultWheelX: e, preventDefaultWheelY: t }) {
  const n = L.useRef(null), r = At((o) => {
    const s = Math.abs(o.deltaX) > Math.abs(o.deltaY);
    (s && e || !s && t || o.ctrlKey) && o.preventDefault();
  });
  return L.useCallback((o) => {
    var s;
    o ? o.addEventListener("wheel", r, { passive: !1 }) : (s = n.current) === null || s === void 0 || s.removeEventListener("wheel", r), n.current = o;
  }, [r]);
}
function WH(e, t, n, r, o, s, u, c, d) {
  const p = L.useRef(0), h = L.useRef(0), m = L.useRef(void 0), g = L.useRef(void 0), y = L.useRef(0), b = L.useRef(void 0), _ = L.useRef(0), { setTimeout: w, clearTimeout: k } = ef(), F = L.useCallback(() => {
    m.current && (k(m.current), m.current = void 0);
  }, [k]), E = L.useCallback(() => {
    g.current && (k(g.current), g.current = void 0);
  }, [k]), I = At(() => {
    e !== Bn.SWIPE && (p.current = 0, _.current = 0, F(), E());
  });
  L.useEffect(I, [e, I]);
  const T = At((C) => {
    g.current = void 0, p.current === C && d(p.current);
  }), P = At((C) => {
    if (C.ctrlKey || Math.abs(C.deltaY) > Math.abs(C.deltaX))
      return;
    const S = (A) => {
      y.current = A, k(b.current), b.current = A > 0 ? w(() => {
        y.current = 0, b.current = void 0;
      }, 300) : void 0;
    };
    if (e === Bn.NONE) {
      if (Math.abs(C.deltaX) <= 1.2 * Math.abs(y.current)) {
        S(C.deltaX);
        return;
      }
      if (!n(-C.deltaX))
        return;
      if (h.current += C.deltaX, F(), Math.abs(h.current) > 30)
        h.current = 0, S(0), _.current = Date.now(), s();
      else {
        const A = h.current;
        m.current = w(() => {
          m.current = void 0, A === h.current && (h.current = 0);
        }, o);
      }
    } else if (e === Bn.SWIPE) {
      let A = p.current - C.deltaX;
      if (A = Math.min(Math.abs(A), r) * Math.sign(A), p.current = A, u(A), E(), Math.abs(A) > 0.2 * r) {
        S(C.deltaX), c(A, Date.now() - _.current);
        return;
      }
      g.current = w(() => T(A), 2 * o);
    } else
      S(C.deltaX);
  });
  L.useEffect(() => t(gg, P), [t, P]);
}
const g_ = vg("container"), FE = L.createContext(null), ho = sa("useController", "ControllerContext", FE);
function zH({ children: e, ...t }) {
  var n;
  const { carousel: r, animation: o, controller: s, on: u, styles: c, render: d } = t, { closeOnPullUp: p, closeOnPullDown: h, preventDefaultWheelX: m, preventDefaultWheelY: g } = s, [y, b] = L.useState(), _ = po(), w = EH(), [k, F] = L.useState(Bn.NONE), E = L.useRef(0), I = L.useRef(0), T = L.useRef(1), { registerSensors: P, subscribeSensors: C } = FH(), { subscribe: S, publish: A } = Ic(), B = Yu(), U = Yu(), re = Yu(), { containerRef: G, setContainerRef: ae, containerRect: he } = Cg(), ye = nm(jH({ preventDefaultWheelX: m, preventDefaultWheelY: g }), ae), ke = L.useRef(null), se = nm(ke, void 0), { getOwnerDocument: me } = Xs(), X = Og(), te = (ne) => (X ? -1 : 1) * (typeof ne == "number" ? ne : 1), oe = At(() => {
    var ne;
    return (ne = G.current) === null || ne === void 0 ? void 0 : ne.focus();
  }), _e = At(() => t), Se = At(() => _), ve = L.useCallback((ne) => A(gi, ne), [A]), ue = L.useCallback((ne) => A(vi, ne), [A]), xe = L.useCallback(() => A($s), [A]), ge = (ne) => !(r.finite && (te(ne) > 0 && _.currentIndex === 0 || te(ne) < 0 && _.currentIndex === _.slides.length - 1)), W = (ne) => {
    var we;
    E.current = ne, (we = G.current) === null || we === void 0 || we.style.setProperty(ir("swipe_offset"), `${Math.round(ne)}px`);
  }, z = (ne) => {
    var we, Ne;
    I.current = ne, T.current = (() => {
      const Le = h && ne > 0 ? ne : p && ne < 0 ? -ne : 0;
      return Math.min(Math.max(bg(1 - Le / 60 * (1 - 0.5), 2), 0.5), 1);
    })(), (we = G.current) === null || we === void 0 || we.style.setProperty(ir("pull_offset"), `${Math.round(ne)}px`), (Ne = G.current) === null || Ne === void 0 || Ne.style.setProperty(ir("pull_opacity"), `${T.current}`);
  }, { prepareAnimation: $ } = p_(ke, (ne, we, Ne) => {
    if (ke.current && he)
      return {
        keyframes: [
          {
            transform: `translate(0, ${ne.rect.y - we.y + Ne.y}px)`,
            opacity: ne.opacity
          },
          { transform: "translate(0, 0)", opacity: 1 }
        ],
        duration: ne.duration,
        easing: o.easing.fade
      };
  }), D = (ne, we) => {
    if (p || h) {
      z(ne);
      let Ne = 0;
      ke.current && (Ne = o.fade * (we ? 2 : 1), $({
        rect: ke.current.getBoundingClientRect(),
        opacity: T.current,
        duration: Ne
      })), re(() => {
        z(0), F(Bn.NONE);
      }, Ne), F(Bn.ANIMATION), we || xe();
    }
  }, { prepareAnimation: q, isAnimationPlaying: K } = p_(ke, (ne, we, Ne) => {
    var Re;
    if (ke.current && he && (!((Re = _.animation) === null || Re === void 0) && Re.duration)) {
      const Be = dd(r.spacing), Le = (Be.percent ? Be.percent * he.width / 100 : Be.pixel) || 0;
      return {
        keyframes: [
          {
            transform: `translate(${te(_.globalIndex - ne.index) * (he.width + Le) + ne.rect.x - we.x + Ne.x}px, 0)`
          },
          { transform: "translate(0, 0)" }
        ],
        duration: _.animation.duration,
        easing: _.animation.easing
      };
    }
  }), le = At((ne) => {
    var we, Ne;
    const Re = ne.offset || 0, Be = Re ? o.swipe : (we = o.navigation) !== null && we !== void 0 ? we : o.swipe, Le = !Re && !K() ? o.easing.navigation : o.easing.swipe;
    let { direction: tt } = ne;
    const Xe = (Ne = ne.count) !== null && Ne !== void 0 ? Ne : 1;
    let Ve = Bn.ANIMATION, He = Be * Xe;
    if (!tt) {
      const Q = he == null ? void 0 : he.width, ze = ne.duration || 0, lt = Q ? Be / Q * Math.abs(Re) : Be;
      Xe !== 0 ? (ze < lt ? He = He / lt * Math.max(ze, lt / 5) : Q && (He = Be / Q * (Q - Math.abs(Re))), tt = te(Re) > 0 ? gi : vi) : He = Be / 2;
    }
    let Te = 0;
    tt === gi ? ge(te(1)) ? Te = -Xe : (Ve = Bn.NONE, He = Be) : tt === vi && (ge(te(-1)) ? Te = Xe : (Ve = Bn.NONE, He = Be)), He = Math.round(He), U(() => {
      W(0), F(Bn.NONE);
    }, He), ke.current && q({
      rect: ke.current.getBoundingClientRect(),
      index: _.globalIndex
    }), F(Ve), A(d_, {
      type: "swipe",
      increment: Te,
      duration: He,
      easing: Le
    });
  });
  L.useEffect(() => {
    var ne, we;
    !((ne = _.animation) === null || ne === void 0) && ne.increment && (!((we = _.animation) === null || we === void 0) && we.duration) && B(() => w({ type: "swipe", increment: 0 }), _.animation.duration);
  }, [_.animation, w, B]);
  const Ie = [
    C,
    ge,
    (he == null ? void 0 : he.width) || 0,
    o.swipe,
    () => F(Bn.SWIPE),
    (ne) => W(ne),
    (ne, we) => le({ offset: ne, duration: we, count: 1 }),
    (ne) => le({ offset: ne, count: 0 })
  ], de = [
    () => {
      h && F(Bn.PULL);
    },
    (ne) => z(ne),
    (ne) => D(ne),
    (ne) => D(ne, !0)
  ];
  BH(s, ...Ie, p, h, ...de, xe), WH(k, ...Ie);
  const Oe = At(() => {
    s.focus && me().querySelector(`.${xt(fg)} .${xt(g_())}`) && oe();
  });
  L.useEffect(Oe, [Oe]);
  const fe = At(() => {
    var ne;
    (ne = u.view) === null || ne === void 0 || ne.call(u, { index: _.currentIndex });
  });
  L.useEffect(fe, [_.globalIndex, fe]), L.useEffect(() => Qd(S(gi, (ne) => le({ direction: gi, ...ne })), S(vi, (ne) => le({ direction: vi, ...ne })), S(d_, (ne) => w(ne))), [S, le, w]);
  const Y = L.useMemo(() => ({
    prev: ve,
    next: ue,
    close: xe,
    focus: oe,
    slideRect: he ? fH(he, r.padding) : { width: 0, height: 0 },
    containerRect: he || { width: 0, height: 0 },
    subscribeSensors: C,
    containerRef: G,
    setCarouselRef: se,
    toolbarWidth: y,
    setToolbarWidth: b
  }), [
    ve,
    ue,
    xe,
    oe,
    C,
    he,
    G,
    se,
    y,
    b,
    r.padding
  ]);
  return L.useImperativeHandle(s.ref, () => ({
    prev: ve,
    next: ue,
    close: xe,
    focus: oe,
    getLightboxProps: _e,
    getLightboxState: Se
  }), [ve, ue, xe, oe, _e, Se]), L.createElement("div", { ref: ye, className: Br(xt(g_()), xt(Xd)), style: {
    ...k === Bn.SWIPE ? { [ir("swipe_offset")]: `${Math.round(E.current)}px` } : null,
    ...k === Bn.PULL ? {
      [ir("pull_offset")]: `${Math.round(I.current)}px`,
      [ir("pull_opacity")]: `${T.current}`
    } : null,
    ...s.touchAction !== "none" ? { [ir("controller_touch_action")]: s.touchAction } : null,
    ...c.container
  }, tabIndex: -1, ...P }, he && L.createElement(
    FE.Provider,
    { value: Y },
    e,
    (n = d.controls) === null || n === void 0 ? void 0 : n.call(d)
  ));
}
const UH = fo(dg, zH);
function pi(e) {
  return Nc(dE, e);
}
function v_(e) {
  return Nc(pg, e);
}
function HH({ slide: e, offset: t }) {
  const n = L.useRef(null), { currentIndex: r, slides: o } = po(), { slideRect: s, focus: u } = ho(), { render: c, carousel: { imageFit: d, imageProps: p }, on: { click: h }, styles: { slide: m }, labels: g } = zn(), { getOwnerDocument: y } = Xs(), b = t !== 0;
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
      ((F = c.slideContainer) !== null && F !== void 0 ? F : ({ children: T }) => T)({ slide: e, children: I }),
      (E = c.slideFooter) === null || E === void 0 ? void 0 : E.call(c, { slide: e })
    ) : null;
  };
  return L.createElement("div", { ref: n, className: Br(xt(v_()), !b && xt(v_("current")), xt(Xd)), ...vH(b), style: m, role: "group", "aria-roledescription": Bs(g, "Slide"), "aria-label": dH(g, o, r + t) }, _());
}
function YH() {
  const e = zn().styles.slide;
  return L.createElement("div", { className: xt(pg), style: e });
}
function VH({ carousel: e, labels: t }) {
  const { slides: n, currentIndex: r, globalIndex: o } = po(), { setCarouselRef: s } = ho(), { autoPlaying: u, focusWithin: c } = PE(), d = dd(e.spacing), p = dd(e.padding), h = mH(e, n, 1), m = [];
  if (EE(n))
    for (let g = r - h; g <= r + h; g += 1) {
      const y = CE(n, g), b = o - r + g, _ = e.finite && (g < 0 || g > n.length - 1);
      m.push(_ ? { key: b } : {
        key: [`${b}`, hH(y)].filter(Boolean).join("|"),
        offset: g - r,
        slide: y
      });
    }
  return L.createElement("div", { ref: s, className: Br(xt(pi()), m.length > 0 && xt(pi("with_slides"))), style: {
    [`${ir(pi("slides_count"))}`]: m.length,
    [`${ir(pi("spacing_px"))}`]: d.pixel || 0,
    [`${ir(pi("spacing_percent"))}`]: d.percent || 0,
    [`${ir(pi("padding_px"))}`]: p.pixel || 0,
    [`${ir(pi("padding_percent"))}`]: p.percent || 0
  }, role: "region", "aria-live": u && !c ? "off" : "polite", "aria-roledescription": Bs(t, "Carousel"), "aria-label": Bs(t, "Photo gallery") }, m.map(({ key: g, slide: y, offset: b }) => y ? L.createElement(HH, { key: g, slide: y, offset: b }) : L.createElement(YH, { key: g })));
}
const qH = fo(dE, VH);
function $E() {
  const { carousel: e } = zn(), { slides: t, currentIndex: n } = po(), r = t.length === 0 || e.finite && n === 0, o = t.length === 0 || e.finite && n === t.length - 1;
  return { prevDisabled: r, nextDisabled: o };
}
function GH(e) {
  var t;
  const n = Og(), { publish: r } = Ic(), { animation: o, controller: s } = zn(), { prevDisabled: u, nextDisabled: c } = $E(), d = ((t = o.navigation) !== null && t !== void 0 ? t : o.swipe) / 2, p = m_(() => r(gi), d), h = m_(() => r(vi), d), m = At((g) => {
    switch (g.key) {
      case sH:
        if (!s.closeOnEscape)
          return;
        r($s);
        break;
      case lH:
        (n ? c : u) || (n ? h : p)();
        break;
      case cH:
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
  return L.createElement(Ac, { label: e, icon: t, renderIcon: n, className: xt(`navigation_${r}`), disabled: s, onClick: o, style: u, ...LH(ho().focus, s) });
}
function KH({ render: { buttonPrev: e, buttonNext: t, iconPrev: n, iconNext: r }, styles: o }) {
  const { prev: s, next: u, subscribeSensors: c } = ho(), { prevDisabled: d, nextDisabled: p } = $E();
  return GH(c), L.createElement(
    L.Fragment,
    null,
    e ? e() : L.createElement(y_, { label: "Previous", action: gi, icon: IH, renderIcon: n, style: o.navigationPrev, disabled: d, onClick: s }),
    t ? t() : L.createElement(y_, { label: "Next", action: vi, icon: AH, renderIcon: r, style: o.navigationNext, disabled: p, onClick: u })
  );
}
const ZH = fo(K8, KH), b_ = xt(aH), XH = xt(hE);
function QH(e) {
  return "style" in e;
}
function __(e, t, n) {
  const r = window.getComputedStyle(e), o = n ? "padding-left" : "padding-right", s = n ? r.paddingLeft : r.paddingRight, u = e.style.getPropertyValue(o);
  return e.style.setProperty(o, `${(Jd(s) || 0) + t}px`), () => {
    u ? e.style.setProperty(o, u) : e.style.removeProperty(o);
  };
}
function JH({ noScroll: { disabled: e }, children: t }) {
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
        QH(g) && u.getComputedStyle(g).getPropertyValue("position") === "fixed" && !g.classList.contains(XH) && s.push(__(g, p, n));
      }
    }
    return c.classList.add(b_), () => {
      c.classList.remove(b_), s.forEach((h) => h());
    };
  }, [n, e, r, o]), L.createElement(L.Fragment, null, t);
}
const eY = fo(Z8, JH);
function w_(e) {
  return Nc(fg, e);
}
function x_(e, t, n) {
  const r = e.getAttribute(t);
  return e.setAttribute(t, n), () => {
    r ? e.setAttribute(t, r) : e.removeAttribute(t);
  };
}
function tY({ portal: { root: e, container: { className: t, style: n, ...r } = {} }, animation: o, styles: s, className: u, on: c, close: d, labels: p, children: h }) {
  const [m, g] = L.useState(!1), [y, b] = L.useState(!1), _ = L.useRef([]), w = L.useRef(null), { setTimeout: k } = ef(), { subscribe: F } = Ic(), I = Eg() ? 0 : o.fade;
  L.useEffect(() => (g(!0), () => {
    g(!1), b(!1);
  }), []);
  const T = At(() => {
    _.current.forEach((A) => A()), _.current = [];
  }), P = At(() => {
    var A;
    b(!1), T(), (A = c.exiting) === null || A === void 0 || A.call(c), k(() => {
      var B;
      (B = c.exited) === null || B === void 0 || B.call(c), d();
    }, I);
  });
  L.useEffect(() => F($s, P), [F, P]);
  const C = At((A) => {
    var B, U, re;
    OE(A), b(!0), (B = c.entering) === null || B === void 0 || B.call(c);
    const G = (re = (U = A.parentNode) === null || U === void 0 ? void 0 : U.children) !== null && re !== void 0 ? re : [];
    for (let ae = 0; ae < G.length; ae += 1) {
      const he = G[ae];
      ["TEMPLATE", "SCRIPT", "STYLE"].indexOf(he.tagName) === -1 && he !== A && (_.current.push(x_(he, "inert", "")), _.current.push(x_(he, "aria-hidden", "true")));
    }
    _.current.push(() => {
      var ae, he;
      (he = (ae = w.current) === null || ae === void 0 ? void 0 : ae.focus) === null || he === void 0 || he.call(ae);
    }), k(() => {
      var ae;
      (ae = c.entered) === null || ae === void 0 || ae.call(c);
    }, I);
  }), S = L.useCallback((A) => {
    A ? C(A) : T();
  }, [C, T]);
  return m ? G_(L.createElement($H, { ref: S, className: Br(u, t, xt(w_()), xt(hE), y && xt(w_("open"))), "aria-modal": !0, role: "dialog", "aria-label": Bs(p, "Lightbox"), style: {
    ...o.fade !== tm.animation.fade ? { [ir("fade_animation_duration")]: `${I}ms` } : null,
    ...o.easing.fade !== tm.animation.easing.fade ? { [ir("fade_animation_timing_function")]: o.easing.fade } : null,
    ...s.root,
    ...n
  }, onFocus: (A) => {
    w.current || (w.current = A.relatedTarget);
  }, ...r }, h), (typeof e == "function" ? e() : e) || document.body) : null;
}
const nY = fo(fg, tY);
function rY({ children: e }) {
  return L.createElement(L.Fragment, null, e);
}
const aY = fo(X8, rY);
function oY(e) {
  return Nc(fE, e);
}
function iY({ toolbar: { buttons: e }, render: { buttonClose: t, iconClose: n }, styles: r }) {
  const { close: o, setToolbarWidth: s } = ho(), { setContainerRef: u, containerRect: c } = Cg();
  aa(() => {
    s(c == null ? void 0 : c.width);
  }, [s, c == null ? void 0 : c.width]);
  const d = () => t ? t() : L.createElement(Ac, { key: $s, label: "Close", icon: NH, renderIcon: n, onClick: o });
  return L.createElement("div", { ref: u, style: r.toolbar, className: xt(oY()) }, e == null ? void 0 : e.map((p) => p === $s ? d() : p));
}
const sY = fo(fE, iY);
function BE(e, t) {
  var n;
  return L.createElement(e.module.component, { key: e.module.name, ...t }, (n = e.children) === null || n === void 0 ? void 0 : n.map((r) => BE(r, t)));
}
function lY(e, t = {}) {
  const { easing: n, ...r } = e, { easing: o, ...s } = t;
  return {
    easing: { ...n, ...o },
    ...r,
    ...s
  };
}
function jE({ carousel: e, animation: t, render: n, toolbar: r, controller: o, noScroll: s, on: u, plugins: c, slides: d, index: p, ...h }) {
  const { animation: m, carousel: g, render: y, toolbar: b, controller: _, noScroll: w, on: k, slides: F, index: E, plugins: I, ...T } = tm, { config: P, augmentation: C } = yH([
    In(nY, [
      In(eY, [
        In(UH, [
          In(qH),
          In(sY),
          In(ZH)
        ])
      ])
    ])
  ], c || I), S = C({
    animation: lY(m, t),
    carousel: { ...g, ...e },
    render: { ...y, ...n },
    toolbar: { ...b, ...r },
    controller: { ..._, ...o },
    noScroll: { ...w, ...s },
    on: { ...k, ...u },
    ...T,
    ...h
  });
  return S.open ? L.createElement(
    xH,
    { ...S },
    L.createElement(
      OH,
      { slides: d || F, index: Jd(p || E) },
      L.createElement(
        PH,
        null,
        L.createElement(
          wH,
          null,
          L.createElement(bH, null, BE(In(aY, P), S))
        )
      )
    )
  ) : null;
}
const cY = {
  download: void 0
}, WE = (e) => ({
  ...cY,
  ...e
});
function uY(e) {
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
function dY(e) {
  var t, n;
  return (n = (t = /^content-disposition:(.*)$/im.exec(e.getAllResponseHeaders())) === null || t === void 0 ? void 0 : t[1]) !== null && n !== void 0 ? n : null;
}
function fY(e, t) {
  const n = new XMLHttpRequest();
  n.open("GET", e), n.responseType = "blob", n.onload = () => {
    rm(n.response, t || uY(dY(n)));
  }, n.onerror = () => {
    console.error("Failed to download file");
  }, n.send();
}
function pY(e) {
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
  n.rel = "noopener", n.download = t || "", n.download || (n.target = "_blank"), typeof e == "string" ? (n.href = e, n.origin !== window.location.origin ? pY(n.href) ? fY(e, t) : (n.target = "_blank", Gp(n)) : Gp(n)) : (n.href = URL.createObjectURL(e), setTimeout(() => URL.revokeObjectURL(n.href), 3e4), setTimeout(() => Gp(n), 0));
}
const hY = Aa("DownloadIcon", L.createElement("path", { d: "M18 15v3H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2zm-1-4-1.41-1.41L13 12.17V4h-2v8.17L8.41 9.59 7 11l5 5 5-5z" }));
function mY() {
  const { render: e, on: t, download: n } = zn(), { download: r } = WE(n), { currentSlide: o, currentIndex: s } = po();
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
  return L.createElement(Ac, { label: "Download", icon: hY, renderIcon: e.iconDownload, disabled: !c, onClick: p });
}
function am({ augment: e }) {
  e(({ toolbar: t, download: n, ...r }) => ({
    toolbar: xg(t, Q8, L.createElement(mY, null)),
    download: WE(n),
    ...r
  }));
}
const gY = {
  auto: !1,
  ref: null
}, zE = (e) => ({
  ...gY,
  ...e
}), UE = L.createContext(null), vY = sa("useFullscreen", "FullscreenContext", UE);
function yY({ fullscreen: e, on: t, children: n }) {
  const { auto: r, ref: o } = zE(e), s = L.useRef(null), [u, c] = L.useState(), [d, p] = L.useState(!1), h = L.useRef(!1), { getOwnerDocument: m } = Xs();
  aa(() => {
    var E, I, T, P;
    const C = m();
    c(!((P = (T = (I = (E = C.fullscreenEnabled) !== null && E !== void 0 ? E : C.webkitFullscreenEnabled) !== null && I !== void 0 ? I : C.mozFullScreenEnabled) !== null && T !== void 0 ? T : C.msFullscreenEnabled) !== null && P !== void 0 && P));
  }, [m]);
  const g = L.useCallback(() => {
    var E;
    const I = m(), T = I.fullscreenElement || I.webkitFullscreenElement || I.mozFullScreenElement || I.msFullscreenElement;
    return ((E = T == null ? void 0 : T.shadowRoot) === null || E === void 0 ? void 0 : E.fullscreenElement) || T;
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
    return Qd(...["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"].map((T) => (E.addEventListener(T, I), () => E.removeEventListener(T, I))));
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
    { ref: s, className: Br(xt(Qh), xt(pE)) },
    L.createElement(UE.Provider, { value: F }, n)
  );
}
const bY = Aa("EnterFullscreen", L.createElement("path", { d: "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" })), _Y = Aa("ExitFullscreen", L.createElement("path", { d: "M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" }));
function wY() {
  var e;
  const { fullscreen: t, disabled: n, enter: r, exit: o } = vY(), { render: s } = zn();
  return n ? null : s.buttonFullscreen ? L.createElement(L.Fragment, null, (e = s.buttonFullscreen) === null || e === void 0 ? void 0 : e.call(s, { fullscreen: t, disabled: n, enter: r, exit: o })) : L.createElement(Ac, { disabled: n, label: t ? "Exit Fullscreen" : "Enter Fullscreen", icon: t ? _Y : bY, renderIcon: t ? s.iconExitFullscreen : s.iconEnterFullscreen, onClick: t ? o : r });
}
function HE({ augment: e, contains: t, addParent: n }) {
  e(({ fullscreen: r, toolbar: o, ...s }) => ({
    toolbar: xg(o, Qh, L.createElement(wY, null)),
    fullscreen: zE(r),
    ...s
  })), n(t(c_) ? c_ : dg, fo(Qh, yY));
}
const xY = {
  controls: !0,
  playsInline: !0
}, YE = (e) => ({
  ...xY,
  ...e
});
function EY() {
  const { video: e } = zn();
  return YE(e);
}
function CY() {
  var e;
  return ((e = navigator.userAgentData) === null || e === void 0 ? void 0 : e.brands.some(({ brand: t }) => t === "Chromium")) || !!window.chrome;
}
function OY() {
  return /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent);
}
function SY({ slide: e, offset: t }) {
  const n = EY(), { publish: r } = Ic(), { setContainerRef: o, containerRect: s, containerRef: u } = Cg(), { getOwnerDocument: c } = Xs(), { animation: d } = zn(), p = L.useRef(null), h = L.useRef(!1);
  L.useEffect(() => {
    t !== 0 && p.current && !p.current.paused && p.current.pause();
  }, [t]), L.useEffect(() => {
    t === 0 && p.current && (e.autoPlay || n.autoPlay) && (r(tH), p.current.play().catch(() => {
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
    if (CY() && t === 0)
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
      const C = (B) => (U) => {
        U.target === p.current && (P = B, h.current = P);
      }, S = C(!0), A = C(!1);
      return c().addEventListener("enterpictureinpicture", S), c().addEventListener("leavepictureinpicture", A), () => {
        c().removeEventListener("enterpictureinpicture", S), c().removeEventListener("leavepictureinpicture", A), P && (h.current = !1, c().exitPictureInPicture().catch(() => {
        }));
      };
    }
  }, [t, c]);
  const { width: b, height: _, poster: w, sources: k } = e, F = () => {
    const P = {};
    if (P.style = { maxWidth: "100%", maxHeight: "100%" }, b && _ && s) {
      const C = b / _ > s.width / s.height, S = C ? s.width : Math.round(s.height / _ * b), A = C ? Math.round(s.width / b * _) : s.height;
      P.width = S, P.height = A, P.style.width = S, P.style.height = A;
    }
    return P;
  }, E = (P) => e[P] === !1 ? null : e[P] === !0 ? { [P]: !0 } : n[P] === !1 ? null : n[P] === !0 ? { [P]: !0 } : null, I = (P) => n[P] || e[P] ? { [P]: e[P] || n[P] } : null, T = (P) => {
    h.current && P.stopPropagation();
  };
  return L.createElement(L.Fragment, null, k && L.createElement("div", { ref: o, style: {
    width: "100%",
    height: "100%",
    ...b ? { maxWidth: `${b}px` } : null
  }, className: Br(xt("video_container"), xt(Xd), xt(hg)) }, s && L.createElement("video", { ref: y, poster: w, ...F(), ...E("controls"), ...E("playsInline"), ...E("loop"), ...E("muted"), ...E("playsInline"), ...E("disablePictureInPicture"), ...E("disableRemotePlayback"), ...I("controlsList"), ...I("crossOrigin"), ...I("preload"), onPlay: () => {
    var P;
    if (t !== 0) {
      (P = p.current) === null || P === void 0 || P.pause();
      return;
    }
    r(nH);
  }, onEnded: () => {
    r(rH);
  }, onWheel: T, onKeyDown: T, onPointerDown: (P) => {
    T(P), OY() && p.current && p.current.getBoundingClientRect().bottom - P.clientY < 40 && P.stopPropagation();
  } }, k.map(({ src: P, type: C, media: S }) => L.createElement("source", { key: [P, C, S].filter(Boolean).join("|"), src: P, type: C, media: S })))));
}
function TY(e) {
  return e.type === "video";
}
function E_({ augment: e }) {
  e(({ render: { slide: t, ...n }, video: r, ...o }) => ({
    render: {
      slide: ({ slide: s, offset: u, rect: c }) => {
        var d;
        return TY(s) ? L.createElement(SY, { key: (d = s.sources) === null || d === void 0 ? void 0 : d.map((p) => p.src).join("|"), slide: s, offset: u }) : t == null ? void 0 : t({ slide: s, offset: u, rect: c });
      },
      ...n
    },
    video: YE(r),
    ...o
  }));
}
const VE = {
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
function PY(e) {
  return Math.min(Math.max(e, Number.EPSILON), 1);
}
function qE(e) {
  const { minZoom: t, ...n } = { ...VE, ...e };
  return { minZoom: PY(t), ...n };
}
function kY(e, t, n, r) {
  const o = L.useRef(void 0), s = L.useRef(void 0), { zoom: u } = zn().animation, c = Eg(), d = At(() => {
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
function NY(e, t) {
  const { on: n } = zn(), r = At(() => {
    var o;
    t || (o = n.zoom) === null || o === void 0 || o.call(n, { zoom: e });
  });
  L.useEffect(r, [e, r]);
}
function tf() {
  const { zoom: e } = zn();
  return qE(e);
}
function IY(e, t) {
  var n;
  const r = typeof e == "function" ? (n = e(t)) !== null && n !== void 0 ? n : VE.maxZoom : e;
  return Math.max(r, 1);
}
function AY(e, t) {
  var n, r;
  let o = { width: 0, height: 0 }, s = { width: 0, height: 0 };
  const { currentSlide: u } = po(), { imageFit: c } = zn().carousel, { maxZoomPixelRatio: d, maxZoom: p } = tf();
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
  const h = u && o.width ? Ko(u) ? Math.max(bg(s.width / o.width, 5), 1) : IY(p, u) : 1;
  return { imageRect: o, maxZoom: h };
}
function C_(e, t) {
  return Math.hypot(e.clientX - t.clientX, e.clientY - t.clientY);
}
function O_(e, t, n = 100, r = 2) {
  return e * Math.min(1 + Math.abs(t / n), r) ** Math.sign(t);
}
function RY(e, t, n, r, o, s, u, c, d) {
  const p = L.useRef([]), h = L.useRef(0), m = L.useRef(void 0), { globalIndex: g } = po(), { getOwnerWindow: y } = Xs(), { containerRef: b, subscribeSensors: _ } = ho(), { keyboardMoveDistance: w, zoomInMultiplier: k, wheelZoomDistanceFactor: F, scrollToZoom: E, doubleTapDelay: I, doubleClickDelay: T, doubleClickMaxStops: P, pinchZoomDistanceFactor: C, pinchZoomV4: S } = tf(), A = L.useCallback((se) => {
    if (b.current) {
      const { pageX: me, pageY: X } = se, { scrollX: te, scrollY: oe } = y(), { left: _e, top: Se, width: ve, height: ue } = b.current.getBoundingClientRect();
      return [me - _e - te - ve / 2, X - Se - oe - ue / 2];
    }
    return [];
  }, [b, y]), B = At((se) => {
    const { key: me, metaKey: X, ctrlKey: te } = se, oe = X || te, _e = () => {
      se.preventDefault(), se.stopPropagation();
    };
    if (e > 1) {
      const Se = (ve, ue) => {
        _e(), c(ve, ue);
      };
      me === "ArrowDown" ? Se(0, w) : me === "ArrowUp" ? Se(0, -w) : me === "ArrowLeft" ? Se(-w, 0) : me === "ArrowRight" && Se(w, 0);
    }
    me === "+" || oe && me === "=" ? (_e(), o()) : me === "-" || oe && me === "_" ? (_e(), s()) : oe && me === "0" && (_e(), u(1));
  }), U = At((se) => {
    if ((se.ctrlKey || E) && Math.abs(se.deltaY) > Math.abs(se.deltaX)) {
      se.stopPropagation(), u(O_(e, -se.deltaY, F), !0, ...A(se));
      return;
    }
    e > 1 && (se.stopPropagation(), E || c(se.deltaX, se.deltaY));
  }), re = L.useCallback((se) => {
    const me = p.current;
    me.splice(0, me.length, ...me.filter((X) => X.pointerId !== se.pointerId));
  }, []), G = L.useCallback((se) => {
    re(se), se.persist(), p.current.push(se);
  }, [re]), ae = At((se) => {
    var me;
    const X = p.current;
    if (se.pointerType === "mouse" && se.buttons > 1 || !(!((me = d == null ? void 0 : d.current) === null || me === void 0) && me.contains(se.target)))
      return;
    e > 1 && se.stopPropagation();
    const { timeStamp: te } = se;
    if (X.length === 0 && te - h.current < (se.pointerType === "touch" ? I : T)) {
      h.current = 0;
      const oe = e >= 1 ? e !== n ? e * Math.max(n ** (1 / P), k) : 1 : e !== t ? e / Math.max(t ** (-1 / P), k) : 1;
      u(oe, !1, ...A(se));
    } else
      h.current = te;
    if (G(se), X.length === 2) {
      const oe = C_(X[0], X[1]);
      m.current = {
        previousDistance: oe,
        initialDistance: Math.max(oe, 1),
        initialZoom: e
      };
    }
  }), he = At((se) => {
    const me = p.current, X = me.find((te) => te.pointerId === se.pointerId);
    if (me.length === 2 && m.current) {
      se.stopPropagation(), G(se);
      const te = C_(me[0], me[1]), oe = S ? m.current.initialZoom / m.current.initialDistance * te : O_(e, te - m.current.previousDistance, C);
      u(oe, !0, ...me.map((_e) => A(_e)).reduce((_e, Se) => Se.map((ve, ue) => _e[ue] + ve / 2))), m.current.previousDistance = te;
      return;
    }
    e > 1 && (se.stopPropagation(), X && (me.length === 1 && c((X.clientX - se.clientX) / e, (X.clientY - se.clientY) / e), G(se)));
  }), ye = L.useCallback((se) => {
    const me = p.current;
    me.length === 2 && me.find((X) => X.pointerId === se.pointerId) && (m.current = void 0), re(se);
  }, [re]), ke = L.useCallback(() => {
    const se = p.current;
    se.splice(0, se.length), h.current = 0, m.current = void 0;
  }, []);
  LE(_, ae, he, ye, r), L.useEffect(ke, [g, ke]), L.useEffect(() => r ? () => {
  } : Qd(ke, _(mg, B), _(gg, U)), [r, _, ke, B, U]);
}
function MY(e, t, n) {
  const [r, o] = L.useState(1), [s, u] = L.useState(0), [c, d] = L.useState(0), p = kY(r, s, c, n), { currentSlide: h, globalIndex: m } = po(), { containerRect: g, slideRect: y } = ho(), { minZoom: b, zoomInMultiplier: _ } = tf(), w = h && Ko(h) ? h.src : void 0, k = !(n != null && n.current);
  aa(() => {
    o(1), u(0), d(0);
  }, [m, w]);
  const F = L.useCallback((C, S, A) => {
    const B = A || r, U = s - (C || 0), re = c - (S || 0), G = (e.width * B - y.width) / 2 / B, ae = (e.height * B - y.height) / 2 / B;
    u(Math.min(Math.abs(U), Math.max(G, 0)) * Math.sign(U)), d(Math.min(Math.abs(re), Math.max(ae, 0)) * Math.sign(re));
  }, [r, s, c, y, e.width, e.height]), E = L.useCallback((C, S, A, B) => {
    const U = bg(C + 0.01 < t ? C - 0.01 > b ? C : b : t, 5);
    S || p(), F(A ? A * (1 / r - 1 / U) : 0, B ? B * (1 / r - 1 / U) : 0, U), o(U);
  }, [r, b, t, F, p]), I = At(() => {
    r > 1 && (r > t && E(t, !0), F());
  });
  aa(I, [g.width, g.height, I]);
  const T = L.useCallback(() => {
    const C = r * _;
    E(r < 1 && C > 1 ? 1 : C);
  }, [r, _, E]), P = L.useCallback(() => {
    const C = r / _;
    E(r > 1 && C < 1 ? 1 : C);
  }, [r, _, E]);
  return { zoom: r, offsetX: s, offsetY: c, disabled: k, changeOffsets: F, changeZoom: E, zoomIn: T, zoomOut: P };
}
const GE = L.createContext(null), Sg = sa("useZoom", "ZoomControllerContext", GE);
function DY({ children: e }) {
  const [t, n] = L.useState(), { slideRect: r } = ho(), { ref: o, minZoom: s } = tf(), { imageRect: u, maxZoom: c } = AY(r, t == null ? void 0 : t.imageDimensions), { zoom: d, offsetX: p, offsetY: h, disabled: m, changeZoom: g, changeOffsets: y, zoomIn: b, zoomOut: _ } = MY(u, c, t == null ? void 0 : t.zoomWrapperRef);
  NY(d, m), RY(d, s, c, m, b, _, g, y, t == null ? void 0 : t.zoomWrapperRef);
  const w = L.useMemo(() => ({ zoom: d, minZoom: s, maxZoom: c, offsetX: p, offsetY: h, disabled: m, zoomIn: b, zoomOut: _, changeZoom: g }), [d, s, c, p, h, m, b, _, g]);
  L.useImperativeHandle(o, () => w, [w]);
  const k = L.useMemo(() => ({ ...w, setZoomWrapper: n }), [w, n]);
  return L.createElement(GE.Provider, { value: k }, e);
}
const LY = Aa("ZoomIn", L.createElement(
  L.Fragment,
  null,
  L.createElement("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" }),
  L.createElement("path", { d: "M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" })
)), FY = Aa("ZoomOut", L.createElement("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z" })), S_ = L.forwardRef(function({ zoomIn: t, onLoseFocus: n }, r) {
  const o = L.useRef(!1), s = L.useRef(!1), { zoom: u, minZoom: c, maxZoom: d, zoomIn: p, zoomOut: h, disabled: m } = Sg(), { render: g } = zn(), y = m || (t ? u >= d : u <= c);
  return L.useEffect(() => {
    y && o.current && s.current && n(), y || (o.current = !0);
  }, [y, n]), L.createElement(Ac, { ref: r, disabled: y, label: t ? "Zoom in" : "Zoom out", icon: t ? LY : FY, renderIcon: t ? g.iconZoomIn : g.iconZoomOut, onClick: t ? p : h, onFocus: () => {
    s.current = !0;
  }, onBlur: () => {
    s.current = !1;
  } });
});
function $Y() {
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
function BY() {
  const { render: e } = zn(), t = Sg();
  return e.buttonZoom ? L.createElement(L.Fragment, null, e.buttonZoom(t)) : L.createElement($Y, null);
}
function jY(e) {
  var t;
  return (((t = e.srcSet) === null || t === void 0 ? void 0 : t.length) || 0) > 0;
}
function WY({ current: e, preload: t }, { type: n, source: r }) {
  switch (n) {
    case "fetch":
      return e ? { current: e, preload: r } : { current: r };
    case "done":
      return r === t ? { current: r } : { current: e, preload: t };
    default:
      throw new Error(wE);
  }
}
function zY(e) {
  var t, n;
  const [{ current: r, preload: o }, s] = L.useReducer(WY, {}), { slide: u, rect: c, imageFit: d, render: p, interactive: h } = e, m = u.srcSet.sort((T, P) => T.width - P.width), g = (t = u.width) !== null && t !== void 0 ? t : m[m.length - 1].width, y = (n = u.height) !== null && n !== void 0 ? n : m[m.length - 1].height, b = _g(u, d), _ = Math.max(...m.map((T) => T.width)), w = Math.min((b ? Math.max : Math.min)(c.width, g * (c.height / y)), _), k = pH(), F = At(() => {
    var T;
    const P = (T = m.find((C) => C.width >= w * k)) !== null && T !== void 0 ? T : m[m.length - 1];
    (!r || m.findIndex((C) => C.src === r) < m.findIndex((C) => C === P)) && s({ type: "fetch", source: P.src });
  });
  aa(F, [c.width, c.height, k, F]);
  const E = At((T) => s({ type: "done", source: T })), I = {
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
function UY({ render: e, slide: t, offset: n, rect: r }) {
  var o;
  const [s, u] = L.useState(), c = L.useRef(null), d = Ko(t), { zoom: p, maxZoom: h, offsetX: m, offsetY: g, setZoomWrapper: y } = Sg(), b = p > 1, { carousel: _, on: w } = zn(), { currentIndex: k } = po();
  aa(() => {
    if (n !== 0 || d || !c.current)
      return () => {
      };
    const E = () => {
      const T = c.current;
      if (!T)
        return;
      let P = 0, C = 0;
      for (const S of T.children)
        S instanceof HTMLElement && (P = Math.max(P, S.offsetWidth), C = Math.max(C, S.offsetHeight));
      u((S) => S && S.width === P && S.height === C ? S : { width: P, height: C });
    };
    if (E(), typeof ResizeObserver > "u")
      return () => {
      };
    const I = new ResizeObserver(E);
    for (const T of c.current.children)
      I.observe(T);
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
    F = jY(t) ? L.createElement(zY, { ...E, slide: t, interactive: b, rect: n === 0 ? { width: r.width * p, height: r.height * p } : r }) : L.createElement(fd, { onLoad: (I) => u({ width: I.naturalWidth, height: I.naturalHeight }), ...E });
  }
  return F ? L.createElement("div", { ref: c, className: Br(xt(pE), xt(Xd), xt(hg), b && xt(oH)), style: n === 0 ? { transform: `scale(${p}) translateX(${m}px) translateY(${g}px)` } : void 0 }, F) : null;
}
const KE = ({ augment: e, addModule: t }) => {
  e(({ zoom: n, toolbar: r, render: o, controller: s, ...u }) => {
    const c = qE(n);
    return {
      zoom: c,
      toolbar: xg(r, u_, L.createElement(BY, null)),
      render: {
        ...o,
        slide: (d) => {
          var p, h;
          return Ko(d.slide) || d.slide.type != null && (!((p = c.supports) === null || p === void 0) && p.includes(d.slide.type)) ? L.createElement(UY, { render: o, ...d }) : (h = o.slide) === null || h === void 0 ? void 0 : h.call(o, d);
        }
      },
      controller: { ...s, preventDefaultWheelY: c.scrollToZoom },
      ...u
    };
  }), t(fo(u_, DY));
}, om = ({ imageUrl: e, isOpen: t = !1, onClose: n = () => {
}, downloadFileFetcher: r }) => {
  const [o, s] = at(null), [u, c] = at(0);
  Gt(() => {
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
          /* @__PURE__ */ O("button", { type: "button", className: "yarl__button", onClick: d, children: /* @__PURE__ */ O(ud, { icon: q8, size: "xl" }) }, "rotate-left"),
          /* @__PURE__ */ O("button", { type: "button", className: "yarl__button", onClick: p, children: /* @__PURE__ */ O(ud, { icon: G8, size: "xl" }) }, "rotate-right"),
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
  cardLine4: T = [],
  dataHandler: P = null,
  searchParams: C = null,
  onLoadMore: S = null,
  isLoadingMoreProp: A = !1,
  hasMore: B = null,
  mergeConfig: U = null,
  downloadFileFetcher: re
}) => {
  const [G, ae] = at({}), [he, ye] = at({ isOpen: !1, src: null });
  Gt(() => {
    ae({}), p([]), m([]);
  }, [u]), Gt(() => {
    const $ = R.map(g, (D) => D[t[0].key]);
    c(g), p(g), m($);
  }, [g]);
  const ke = ($, D) => {
    o && o($, D);
  }, se = ($, D) => {
    let q = [], K = [];
    R.includes(h, $[D]) ? (q = R.reject(d, (le) => R.isEqual(le[D], $[D])), K = R.reject(h, (le) => R.isEqual(le, $[D]))) : (q = [...d, $], K = [...h, $[D]]), m(K), p(q), c(q), y(q.length === w);
  }, me = ($) => {
    ke("onClick", $), ae($);
  }, X = ($, D) => {
    if (R.isEmpty($))
      return null;
    if (e) {
      const K = $.match(/.{1,60}/g) || [$];
      return R.map(K, (le, Ie) => /* @__PURE__ */ O("div", { children: le }, Ie));
    }
    const q = /* @__PURE__ */ O("span", { className: Jt.icon, children: /* @__PURE__ */ O(
      Dn,
      {
        position: "bottom right",
        content: /* @__PURE__ */ O("div", { className: Jt.popupContent, children: $ }),
        trigger: /* @__PURE__ */ O(je, { name: "comment alternate outline", style: { color: "#286b92" } })
      }
    ) }, 1);
    return D >= $.length ? $ : /* @__PURE__ */ O("div", { className: Jt.noWrap, children: [`${$.slice(0, D)}...`, q] });
  }, te = ($, D) => {
    if (R.isEmpty($)) return null;
    let q = $;
    if (typeof $[0] == "object" && (q = R.map($, (Ie) => Ie[D.split(",")[1]])), e)
      return q.join(", ");
    const K = R.map(q, (Ie, de) => /* @__PURE__ */ O("div", { className: Jt.arrayCell, children: Ie }, de)), le = /* @__PURE__ */ O("span", { className: Jt.icon, children: /* @__PURE__ */ O(
      Dn,
      {
        position: "bottom right",
        content: /* @__PURE__ */ O("div", { className: Jt.popupContent, children: K }),
        trigger: /* @__PURE__ */ O(je, { name: "comment alternate outline", style: { color: "#286b92" } })
      }
    ) }, 1);
    return q.length === 1 ? q : [`${q[0]}...`, le];
  }, oe = ($, D, q = "") => {
    const K = new Date($), le = new Date(D);
    let Ie = /* @__PURE__ */ new Date();
    R.isEmpty(q) || (Ie = new Date(q));
    const de = le - K, Oe = Ie - K;
    if (de <= 0 || Oe >= de)
      return 100;
    const fe = Oe / de * 100;
    return parseInt(fe.toFixed(0), 10);
  }, _e = ($, D, q, K, le, Ie) => {
    let de = "#2483bb";
    if (D) {
      const Oe = D[0];
      if (Oe)
        if (Oe.colorKey)
          K && (de = qt(Oe.colorKey, K));
        else
          for (const fe of D)
            fe.onName === $ ? de = fe.color : fe.default && (de = fe.default);
    }
    return q ? /* @__PURE__ */ O(
      ht,
      {
        style: { backgroundColor: de },
        className: Jt.ButtonLabel,
        onClick: () => typeof q == "function" ? q(K) : ke(q, K),
        fluid: !0,
        children: R.isEmpty(le) ? String($) : Tl($, le)
      }
    ) : $ ? /* @__PURE__ */ O(ht, { style: { backgroundColor: de, color: Ie }, className: Jt.ButtonLabel, fluid: !0, children: R.isEmpty(le) ? String($) : Tl($, le) }) : null;
  }, Se = ($, D, q, K) => {
    let le = oe($, D);
    q(K) !== void 0 && (le = oe($, D, q(K)));
    let Ie = "#01C875";
    return le >= 90 && (Ie = "#FDAB3D"), le === 100 && (Ie = "#E2445B"), /* @__PURE__ */ ie("div", { children: [
      /* @__PURE__ */ O("div", { className: Jt.progressBarLabel, children: `${Mr(D, !1, !1, !0)} ${le}%` }),
      /* @__PURE__ */ O(
        Fz,
        {
          isLabelVisible: !1,
          animateOnRender: !0,
          width: "11rem",
          completed: le,
          maxCompleted: 100,
          baseBgColor: "silver",
          bgColor: Ie
        }
      )
    ] });
  }, ve = ($, D) => {
    if (!R.includes($, "[]?")) return R.get(D, $);
    const [q, K] = $.replace("[]?", "").split("."), le = R.get(D, q, []);
    return R.isArray(le) ? R.filter(
      R.map(le, (Ie) => R.get(Ie, K)),
      Boolean
    ) : [];
  }, ue = ({
    format: $,
    value: D,
    key: q,
    endDate: K,
    boolLabels: le,
    /* 	colorLabel, */
    translate: Ie,
    /* onClick,
    labelData, */
    /* 	onKeyEndDate, */
    sum: de,
    colorLabel: Oe,
    onClick: fe,
    widthZero: Y,
    nullToZero: ne,
    stringLength: we,
    rowData: Ne,
    textColor: Re,
    stopDateHandler: Be
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
        return Se(D, K, Be, Ne);
      case "dateTimeDay":
        return Mr(D, !1, !1, !1, !0);
      case "dateMonthYear":
        return Mr(D, !1, !1, !1, !1, !0);
      case "pastDays":
        return Nz(D);
      case "phone":
        return Pz(D);
      case "currency":
        return I0(D, !1, Y, ne);
      case "decimal":
        return kz(D, Y, ne);
      case "integerCurrency":
        return I0(D, !0, Y, ne);
      case "number":
        return Number.isNaN(D) || D === null ? "" : Number(D).toLocaleString("en-US");
      case "blankZero": {
        if (R.isArray(D) || typeof D == "string") {
          const Le = D ? D.length : 0;
          return Le === 0 ? "" : Le;
        }
        return D === 0 ? "" : D;
      }
      case "count":
        return D ? D.length : 0;
      case "boolean":
        return de ? D : le ? D ? le.true || "si" : le.false || "no" : D ? "si" : "no";
      case "translate":
        return Tl(D, Ie);
      case "truncate":
        return X(D, we);
      case "array":
        return R.map(D, (tt) => /* @__PURE__ */ O("div", { children: qt(q.split(",")[1], tt) }));
      case "colorLabel":
        return xe(D, Re);
      case "arrayTruncate": {
        const Le = q.includes("[]?") ? ve(q, Ne) : D;
        return te(Le, q);
      }
      case "label":
        return _e(D, Oe, fe, Ne, Ie, Re);
      case "coloredText": {
        let Le = "inherit";
        if (Oe)
          for (const Xe of Oe)
            Xe.onName === D ? Le = Xe.color : Xe.default && Le === "inherit" && (Le = Xe.default);
        const tt = R.isEmpty(Ie) ? String(D) : Tl(D, Ie);
        return /* @__PURE__ */ O("span", { style: { color: Le, fontWeight: 500 }, children: tt });
      }
      case "longText":
        return X(D, we);
      case "image":
        return D ? /* @__PURE__ */ O(
          je,
          {
            name: "image",
            size: "small",
            style: { maxWidth: "50px", maxHeight: "50px", cursor: "pointer" },
            onClick: () => {
              ye({
                isOpen: !0,
                src: D
              });
            }
          }
        ) : null;
      default:
        return D;
    }
  }, xe = ($, D) => $ === "En Línea" && D !== "string" ? /* @__PURE__ */ O("div", { style: { color: "hsl(130, 92.00%, 34.10%)" }, children: $ }) : /* @__PURE__ */ O("div", { className: Jt.labelColor, style: { color: "#000000" }, children: $ }), ge = ($, D) => R.map($, ({ content: K, hidden: le, type: Ie, color: de = "hsl(0, 0 %, 95 %)", onClick: Oe, visible: fe }, Y) => {
    if (le || typeof fe == "function" && fe(D) === !1)
      return null;
    switch (Ie) {
      case "icon":
        return /* @__PURE__ */ O(
          ht,
          {
            disabled: !1,
            className: Jt.ButtonIcon,
            style: {
              color: de,
              border: `2px solid ${de}`
            },
            onClick: () => ke(Oe, D),
            children: /* @__PURE__ */ O(je, { name: K })
          },
          Y
        );
      case "link":
        return /* @__PURE__ */ O(
          dr,
          {
            style: { color: de },
            className: Jt.ButtonLink,
            onClick: () => ke(Oe, D),
            children: K
          },
          Y
        );
      default:
        return null;
    }
  }), W = ($, D = !1) => R.map(
    t,
    ({
      key: K,
      format: le,
      endDateKey: Ie = null,
      action: de = [],
      multipleColumns: Oe = [],
      dataPosition: fe = "left",
      twoLines: Y = !1,
      multiple: ne = !1,
      line1: we = {},
      line2: Ne = {},
      stringLength: Re = 20,
      hidden: Be = !1,
      translate: Le = {},
      colorLabel: tt,
      textColor: Xe = "#000000",
      style: Ve = {},
      stopDateHandler: He = () => {
      },
      render: Te = null,
      valueGetter: Q = null,
      boolLabels: ze = null
    }, lt) => {
      let ft = {};
      _ !== void 0 && (ft = _($));
      const nt = Q && typeof Q == "function" ? Q($) : qt(K, $, !1, D), Yt = R.isEmpty(Ie) ? null : qt(Ie, $);
      if (Be)
        return null;
      if (Te && typeof Te == "function") {
        const Ye = Te($, { setOpentImagePreview: ye });
        return /* @__PURE__ */ O(Et.Cell, { verticalAlign: "middle", textAlign: fe, style: ft, className: Jt.cell, children: Ye }, lt);
      }
      if (!R.isEmpty(de) && !e && !D)
        return /* @__PURE__ */ O(
          Et.Cell,
          {
            verticalAlign: "middle",
            textAlign: fe,
            style: { ...ft, ...Ve },
            className: Jt.cellButton,
            children: ge(de, $)
          },
          lt
        );
      if (!R.isEmpty(de) && e)
        return null;
      if (ne)
        return /* @__PURE__ */ O(
          Et.Cell,
          {
            verticalAlign: "middle",
            textAlign: "center",
            style: { ...ft, ...Ve },
            className: Jt.cellButton,
            onClick: () => {
              se($, K);
            },
            children: /* @__PURE__ */ O(Xn, { checked: R.includes(h, $[K]) }, lt)
          },
          lt
        );
      if (Y) {
        const Ye = qt(R.get(we, "key", null), $), $t = qt(R.get(Ne, "key", null), $), ot = qt(R.get(we, "endDateKey", null), $), dn = qt(R.get(Ne, "endDateKey", null), $);
        return /* @__PURE__ */ ie(
          Et.Cell,
          {
            verticalAlign: "middle",
            style: ft,
            onClick: () => me($),
            children: [
              /* @__PURE__ */ O("div", { className: Jt.towLineRow, style: { justifyContent: R.get(we, "dataPosition", "left"), ...ft }, children: ue({
                value: Ye,
                format: le,
                endDate: ot,
                stringLength: Re,
                key: K,
                translate: Le,
                colorLabel: tt,
                boolLabels: ze,
                rowData: $
              }) }),
              /* @__PURE__ */ O("div", { className: Jt.towLineRow, style: { justifyContent: R.get(Ne, "dataPosition", "left"), ...ft }, children: ue({
                value: $t,
                format: le,
                endDate: dn,
                stringLength: Re,
                key: K,
                translate: Le,
                colorLabel: tt,
                boolLabels: ze,
                rowData: $
              }) })
            ]
          },
          lt
        );
      }
      return R.isEmpty(Oe) ? /* @__PURE__ */ O(
        Et.Cell,
        {
          verticalAlign: "middle",
          className: Jt.cell,
          textAlign: fe,
          style: { color: Xe, ...ft },
          onClick: () => me($),
          children: ue({
            value: nt,
            format: le,
            endDate: Yt,
            stringLength: Re,
            key: K,
            sum: D,
            translate: Le,
            colorLabel: tt,
            boolLabels: ze,
            rowData: $,
            textColor: Xe,
            stopDateHandler: He
          })
        },
        lt
      ) : R.map(Oe, ($t, ot) => {
        const dn = lt + ot;
        return /* @__PURE__ */ O(
          Et.Cell,
          {
            verticalAlign: "middle",
            style: ft,
            textAlign: R.get($t, "dataPosition", "left"),
            onClick: () => me($),
            children: ue({
              value: qt(R.get($t, "key", null), $),
              format: R.get($t, "format", ""),
              endDate: R.get($t, "endDate", null),
              stringLength: Re,
              key: K,
              translate: Le,
              colorLabel: tt,
              boolLabels: ze,
              rowData: $
            })
          },
          dn
        );
      });
    }
  ), z = () => {
    if (!R.isEmpty(n)) {
      const $ = R.map(n, (q, K) => {
        if (!R.isEmpty(b)) {
          const le = qt(b.headerTitle, q, !1), Ie = qt(b.dataDetail, q, !1);
          return [
            /* @__PURE__ */ O(Et.Row, { className: Jt.sumRow, as: "tr", children: /* @__PURE__ */ O(
              Et.Cell,
              {
                verticalAlign: "middle",
                className: Jt.cell,
                style: { backgroundColor: "#dddddd", color: "black" },
                colSpan: 16,
                children: le
              }
            ) }, `sumRow-${K}`),
            R.map(Ie, (de, Oe) => /* @__PURE__ */ O(
              Et.Row,
              {
                className: Jt.groupHover,
                style: G === de ? { backgroundColor: s } : {},
                onDoubleClick: () => {
                  ke("Watch", de);
                },
                children: W(de)
              },
              `detail-${K}-${Oe}`
            ))
          ];
        }
        return /* @__PURE__ */ O(
          Et.Row,
          {
            className: Jt.groupHover,
            style: G === q ? { backgroundColor: s } : {},
            onDoubleClick: () => {
              ke("Watch", q);
            },
            children: W(q)
          },
          K
        );
      });
      let D = [];
      return R.isEmpty(r) || (D = [
        /* @__PURE__ */ O(Et.Row, { className: Jt.sumRow, children: W(r, !0) }, "sumRow")
      ]), [...$, ...D];
    }
    return /* @__PURE__ */ O(Et.Row, { children: /* @__PURE__ */ O(Et.Cell, { colSpan: 34, children: /* @__PURE__ */ O("div", { className: Jt.emptyChat, children: /* @__PURE__ */ ie(Kn, { as: "h3", color: "grey", children: [
      /* @__PURE__ */ O("div", { className: Jt.emptyDataIcon, children: /* @__PURE__ */ ie(je.Group, { size: "large", children: [
        /* @__PURE__ */ O(je, { name: "list alternate outline" }),
        /* @__PURE__ */ O(je, { corner: !0, name: "close", color: "red" })
      ] }) }),
      "No se ha encontrado ningun dato"
    ] }) }) }) });
  };
  if (k) {
    const $ = P ? async (D, q = !1, K = !1, le = !1) => P(D, q, K, le, { withLoading: !(!q && !K && !le) }) : null;
    return /* @__PURE__ */ ie("div", { className: Jt.cardsWrapper, children: [
      /* @__PURE__ */ O(
        Tx,
        {
          data: n,
          columns: t,
          headerDetail: b,
          setRowStyle: _,
          clickedRowColors: s,
          onHandlerTable: ke,
          handlerClick: me,
          formatData: ue,
          clikedData: G,
          isPDF: e,
          cardLine1: F,
          enableInfiniteScroll: !!S || !!P,
          onLoadMore: S,
          isLoadingMore: A,
          hasMore: B,
          cardLine2: E,
          cardLine3: I,
          cardLine4: T,
          multipleHandler: se,
          concatKeys: h,
          dataHandler: $,
          searchParams: C,
          totalRows: w,
          mergeConfig: U
        }
      ),
      /* @__PURE__ */ O(
        om,
        {
          imageUrl: he.src,
          onClose: () => ye({ isOpen: !1, src: null }),
          isOpen: he.isOpen,
          downloadFileFetcher: re
        }
      )
    ] });
  }
  return /* @__PURE__ */ ie(Et.Body, { children: [
    z(),
    /* @__PURE__ */ O(
      om,
      {
        imageUrl: he.src,
        onClose: () => ye({ isOpen: !1, src: null }),
        isOpen: he.isOpen,
        downloadFileFetcher: re
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
const HY = "_paginationCell_1jms9_1", YY = "_rowSelector_1jms9_9", VY = "_rowSelectorContainer_1jms9_17", qY = "_paginationContainer_1jms9_29", GY = "_content_1jms9_43", KY = "_pagination_1jms9_1", ZY = "_itemCount_1jms9_67", XY = "_span_1jms9_75", pa = {
  paginationCell: HY,
  rowSelector: YY,
  rowSelectorContainer: VY,
  paginationContainer: qY,
  content: GY,
  pagination: KY,
  itemCount: ZY,
  span: XY
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
      return /* @__PURE__ */ ie("span", { className: pa.itemCount, children: [
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
    /* @__PURE__ */ O(Ca, { children: o && /* @__PURE__ */ O(Et.Footer, { className: pa.footerContainer, children: /* @__PURE__ */ O(Et.Row, { children: /* @__PURE__ */ O(Et.HeaderCell, { colSpan: "34", className: pa.paginationCell, children: /* @__PURE__ */ ie("div", { className: pa.content, children: [
      /* @__PURE__ */ ie("div", { className: pa.paginationContainer, children: [
        /* @__PURE__ */ O(
          Hs,
          {
            className: pa.pagination,
            activePage: e.page,
            ellipsisItem: {
              content: /* @__PURE__ */ O(je, { name: "ellipsis horizontal" }, 1),
              icon: !0
            },
            firstItem: { content: /* @__PURE__ */ O(je, { name: "angle double left" }, 2), icon: !0 },
            lastItem: { content: /* @__PURE__ */ O(je, { name: "angle double right" }, 3), icon: !0 },
            prevItem: { content: /* @__PURE__ */ O(je, { name: "angle left" }, 4), icon: !0 },
            nextItem: { content: /* @__PURE__ */ O(je, { name: "angle right" }, 5), icon: !0 },
            totalPages: String(d()),
            onPageChange: u
          }
        ),
        r >= 1 && c()
      ] }),
      /* @__PURE__ */ ie("div", { className: pa.rowSelectorContainer, children: [
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
    e.exports = r(ee, GI);
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
              var T = E.props, P = T.onAfterPrint, C = T.onPrintError, S = T.print, A = T.documentTitle;
              setTimeout(function() {
                var B, U;
                if (I.contentWindow) if (I.contentWindow.focus(), S) S(I).then(function() {
                  return P == null ? void 0 : P();
                }).then(function() {
                  return E.handleRemoveIframe();
                }).catch(function(ae) {
                  C ? C("print", ae) : E.logMessages(["An error was thrown by the specified `print` function"]);
                });
                else {
                  if (I.contentWindow.print) {
                    var re = (U = (B = I.contentDocument) === null || B === void 0 ? void 0 : B.title) !== null && U !== void 0 ? U : "", G = I.ownerDocument.title;
                    A && (I.ownerDocument.title = A, I.contentDocument && (I.contentDocument.title = A)), I.contentWindow.print(), A && (I.ownerDocument.title = G, I.contentDocument && (I.contentDocument.title = re));
                  } else E.logMessages(["Printing for this browser is not currently possible: the browser does not have a `print` method available for iframes."]);
                  P == null || P(), E.handleRemoveIframe();
                }
                else E.logMessages(["Printing failed because the `contentWindow` of the print iframe did not load. This is possibly an error with `react-to-print`. Please file an issue: https://github.com/gregnb/react-to-print/issues/"]);
              }, 500);
            }, E.triggerPrint = function(I) {
              var T = E.props, P = T.onBeforePrint, C = T.onPrintError;
              if (P) {
                var S = P();
                S && typeof S.then == "function" ? S.then(function() {
                  E.startPrint(I);
                }).catch(function(A) {
                  C && C("onBeforePrint", A);
                }) : E.startPrint(I);
              } else E.startPrint(I);
            }, E.handlePrint = function(I) {
              var T = E.props, P = T.bodyClass, C = T.content, S = T.copyStyles, A = T.fonts, B = T.pageStyle, U = T.nonce, re = typeof I == "function" ? I() : null;
              if (re && typeof C == "function" && E.logMessages(['"react-to-print" received a `content` prop and a content param passed the callback return by `useReactToPrint. The `content` prop will be ignored.'], "warning"), re || typeof C != "function" || (re = C()), re !== void 0) if (re !== null) {
                var G = document.createElement("iframe");
                G.width = "".concat(document.documentElement.clientWidth, "px"), G.height = "".concat(document.documentElement.clientHeight, "px"), G.style.position = "absolute", G.style.top = "-".concat(document.documentElement.clientHeight + 100, "px"), G.style.left = "-".concat(document.documentElement.clientWidth + 100, "px"), G.id = "printWindow", G.srcdoc = "<!DOCTYPE html>";
                var ae = (0, y.findDOMNode)(re);
                if (ae) {
                  var he = ae.cloneNode(!0), ye = he instanceof Text, ke = document.querySelectorAll("link[rel~='stylesheet'], link[as='style']"), se = ye ? [] : he.querySelectorAll("img"), me = ye ? [] : he.querySelectorAll("video"), X = A ? A.length : 0;
                  E.numResourcesToLoad = ke.length + se.length + me.length + X, E.resourcesLoaded = [], E.resourcesErrored = [];
                  var te = function(oe, _e) {
                    E.resourcesLoaded.includes(oe) ? E.logMessages(["Tried to mark a resource that has already been handled", oe], "debug") : (_e ? (E.logMessages(m.__spreadArray(['"react-to-print" was unable to load a resource but will continue attempting to print the page'], m.__read(_e), !1)), E.resourcesErrored.push(oe)) : E.resourcesLoaded.push(oe), E.resourcesLoaded.length + E.resourcesErrored.length === E.numResourcesToLoad && E.triggerPrint(G));
                  };
                  G.onload = function() {
                    var oe, _e, Se, ve;
                    G.onload = null;
                    var ue = G.contentDocument || ((_e = G.contentWindow) === null || _e === void 0 ? void 0 : _e.document);
                    if (ue) {
                      ue.body.appendChild(he), A && (!((Se = G.contentDocument) === null || Se === void 0) && Se.fonts && (!((ve = G.contentWindow) === null || ve === void 0) && ve.FontFace) ? A.forEach(function(Xe) {
                        var Ve = new FontFace(Xe.family, Xe.source, { weight: Xe.weight, style: Xe.style });
                        G.contentDocument.fonts.add(Ve), Ve.loaded.then(function() {
                          te(Ve);
                        }).catch(function(He) {
                          te(Ve, ["Failed loading the font:", Ve, "Load error:", He]);
                        });
                      }) : (A.forEach(function(Xe) {
                        return te(Xe);
                      }), E.logMessages(['"react-to-print" is not able to load custom fonts because the browser does not support the FontFace API but will continue attempting to print the page'])));
                      var xe = typeof B == "function" ? B() : B;
                      if (typeof xe != "string") E.logMessages(['"react-to-print" expected a "string" from `pageStyle` but received "'.concat(typeof xe, '". Styles from `pageStyle` will not be applied.')]);
                      else {
                        var ge = ue.createElement("style");
                        U && (ge.setAttribute("nonce", U), ue.head.setAttribute("nonce", U)), ge.appendChild(ue.createTextNode(xe)), ue.head.appendChild(ge);
                      }
                      if (P && (oe = ue.body.classList).add.apply(oe, m.__spreadArray([], m.__read(P.split(" ")), !1)), !ye) {
                        for (var W = ye ? [] : ae.querySelectorAll("canvas"), z = ue.querySelectorAll("canvas"), $ = 0; $ < W.length; ++$) {
                          var D = W[$], q = z[$].getContext("2d");
                          q && q.drawImage(D, 0, 0);
                        }
                        var K = function(Xe) {
                          var Ve = se[Xe], He = Ve.getAttribute("src");
                          if (He) {
                            var Te = new Image();
                            Te.onload = function() {
                              return te(Ve);
                            }, Te.onerror = function(Q, ze, lt, ft, nt) {
                              return te(Ve, ["Error loading <img>", Ve, "Error", nt]);
                            }, Te.src = He;
                          } else te(Ve, ['Found an <img> tag with an empty "src" attribute. This prevents pre-loading it. The <img> is:', Ve]);
                        };
                        for ($ = 0; $ < se.length; $++) K($);
                        var le = function(Xe) {
                          var Ve = me[Xe];
                          Ve.preload = "auto";
                          var He = Ve.getAttribute("poster");
                          if (He) {
                            var Te = new Image();
                            Te.onload = function() {
                              return te(Ve);
                            }, Te.onerror = function(Q, ze, lt, ft, nt) {
                              return te(Ve, ["Error loading video poster", He, "for video", Ve, "Error:", nt]);
                            }, Te.src = He;
                          } else Ve.readyState >= 2 ? te(Ve) : (Ve.onloadeddata = function() {
                            return te(Ve);
                          }, Ve.onerror = function(Q, ze, lt, ft, nt) {
                            return te(Ve, ["Error loading video", Ve, "Error", nt]);
                          }, Ve.onstalled = function() {
                            return te(Ve, ["Loading video stalled, skipping", Ve]);
                          });
                        };
                        for ($ = 0; $ < me.length; $++) le($);
                        var Ie = "input", de = ae.querySelectorAll(Ie), Oe = ue.querySelectorAll(Ie);
                        for ($ = 0; $ < de.length; $++) Oe[$].value = de[$].value;
                        var fe = "input[type=checkbox],input[type=radio]", Y = ae.querySelectorAll(fe), ne = ue.querySelectorAll(fe);
                        for ($ = 0; $ < Y.length; $++) ne[$].checked = Y[$].checked;
                        var we = "select", Ne = ae.querySelectorAll(we), Re = ue.querySelectorAll(we);
                        for ($ = 0; $ < Ne.length; $++) Re[$].value = Ne[$].value;
                      }
                      if (S) for (var Be = document.querySelectorAll("style, link[rel~='stylesheet'], link[as='style']"), Le = function(Xe, Ve) {
                        var He = Be[Xe];
                        if (He.tagName.toLowerCase() === "style") {
                          var Te = ue.createElement(He.tagName), Q = He.sheet;
                          if (Q) {
                            var ze = "";
                            try {
                              for (var lt = Q.cssRules.length, ft = 0; ft < lt; ++ft) typeof Q.cssRules[ft].cssText == "string" && (ze += "".concat(Q.cssRules[ft].cssText, `\r
`));
                            } catch {
                              E.logMessages(["A stylesheet could not be accessed. This is likely due to the stylesheet having cross-origin imports, and many browsers block script access to cross-origin stylesheets. See https://github.com/gregnb/react-to-print/issues/429 for details. You may be able to load the sheet by both marking the stylesheet with the cross `crossorigin` attribute, and setting the `Access-Control-Allow-Origin` header on the server serving the stylesheet. Alternatively, host the stylesheet on your domain to avoid this issue entirely.", He], "warning");
                            }
                            Te.setAttribute("id", "react-to-print-".concat(Xe)), U && Te.setAttribute("nonce", U), Te.appendChild(ue.createTextNode(ze)), ue.head.appendChild(Te);
                          }
                        } else if (He.getAttribute("href")) if (He.hasAttribute("disabled")) E.logMessages(["`react-to-print` encountered a <link> tag with a `disabled` attribute and will ignore it. Note that the `disabled` attribute is deprecated, and some browsers ignore it. You should stop using it. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link#attr-disabled. The <link> is:", He], "warning"), te(He);
                        else {
                          for (var nt = ue.createElement(He.tagName), Yt = (ft = 0, He.attributes.length); ft < Yt; ++ft) {
                            var Ye = He.attributes[ft];
                            Ye && nt.setAttribute(Ye.nodeName, Ye.nodeValue || "");
                          }
                          nt.onload = function() {
                            return te(nt);
                          }, nt.onerror = function($t, ot, dn, Jn, la) {
                            return te(nt, ["Failed to load", nt, "Error:", la]);
                          }, U && nt.setAttribute("nonce", U), ue.head.appendChild(nt);
                        }
                        else E.logMessages(["`react-to-print` encountered a <link> tag with an empty `href` attribute. In addition to being invalid HTML, this can cause problems in many browsers, and so the <link> was not loaded. The <link> is:", He], "warning"), te(He);
                      }, tt = ($ = 0, Be.length); $ < tt; ++$) Le($);
                    }
                    E.numResourcesToLoad !== 0 && S || E.triggerPrint(G);
                  }, E.handleRemoveIframe(!0), document.body.appendChild(G);
                } else E.logMessages(['"react-to-print" could not locate the DOM node corresponding with the `content` prop']);
              } else E.logMessages(['There is nothing to print because the "content" prop returned "null". Please ensure "content" is renderable before allowing "react-to-print" to be called.']);
              else E.logMessages(["To print a functional component ensure it is wrapped with `React.forwardRef`, and ensure the forwarded ref is used. See the README for an example: https://github.com/gregnb/react-to-print#examples"]);
            }, E.handleRemoveIframe = function(I) {
              var T = E.props.removeAfterPrint;
              if (I || T) {
                var P = document.getElementById("printWindow");
                P && document.body.removeChild(P);
              }
            }, E.logMessages = function(I, T) {
              T === void 0 && (T = "error"), E.props.suppressErrors || (T === "error" ? console.error(I) : T === "warning" ? console.warn(I) : T === "debug" && console.debug(I));
            }, E;
          }
          return m.__extends(F, k), F.prototype.handleClick = function(E, I) {
            var T = this, P = this.props, C = P.onBeforeGetContent, S = P.onPrintError;
            if (C) {
              var A = C();
              A && typeof A.then == "function" ? A.then(function() {
                return T.handlePrint(I);
              }).catch(function(B) {
                S && S("onBeforeGetContent", B);
              }) : this.handlePrint(I);
            } else this.handlePrint(I);
          }, F.prototype.render = function() {
            var E = this.props, I = E.children, T = E.trigger;
            if (T) return g.cloneElement(T(), { onClick: this.handleClick.bind(this) });
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
          return ue;
        }, __assign: function() {
          return y;
        }, __asyncDelegator: function() {
          return ke;
        }, __asyncGenerator: function() {
          return ye;
        }, __asyncValues: function() {
          return se;
        }, __await: function() {
          return he;
        }, __awaiter: function() {
          return P;
        }, __classPrivateFieldGet: function() {
          return _e;
        }, __classPrivateFieldIn: function() {
          return ve;
        }, __classPrivateFieldSet: function() {
          return Se;
        }, __createBinding: function() {
          return S;
        }, __decorate: function() {
          return _;
        }, __disposeResources: function() {
          return ge;
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
          return T;
        }, __param: function() {
          return w;
        }, __propKey: function() {
          return E;
        }, __read: function() {
          return U;
        }, __rest: function() {
          return b;
        }, __runInitializers: function() {
          return F;
        }, __setFunctionName: function() {
          return I;
        }, __spread: function() {
          return re;
        }, __spreadArray: function() {
          return ae;
        }, __spreadArrays: function() {
          return G;
        }, __values: function() {
          return B;
        } });
        var m = function(W, z) {
          return m = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function($, D) {
            $.__proto__ = D;
          } || function($, D) {
            for (var q in D) Object.prototype.hasOwnProperty.call(D, q) && ($[q] = D[q]);
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
            for (var z, $ = 1, D = arguments.length; $ < D; $++) for (var q in z = arguments[$]) Object.prototype.hasOwnProperty.call(z, q) && (W[q] = z[q]);
            return W;
          }, y.apply(this, arguments);
        };
        function b(W, z) {
          var $ = {};
          for (var D in W) Object.prototype.hasOwnProperty.call(W, D) && z.indexOf(D) < 0 && ($[D] = W[D]);
          if (W != null && typeof Object.getOwnPropertySymbols == "function") {
            var q = 0;
            for (D = Object.getOwnPropertySymbols(W); q < D.length; q++) z.indexOf(D[q]) < 0 && Object.prototype.propertyIsEnumerable.call(W, D[q]) && ($[D[q]] = W[D[q]]);
          }
          return $;
        }
        function _(W, z, $, D) {
          var q, K = arguments.length, le = K < 3 ? z : D === null ? D = Object.getOwnPropertyDescriptor(z, $) : D;
          if (typeof Reflect == "object" && typeof Reflect.decorate == "function") le = Reflect.decorate(W, z, $, D);
          else for (var Ie = W.length - 1; Ie >= 0; Ie--) (q = W[Ie]) && (le = (K < 3 ? q(le) : K > 3 ? q(z, $, le) : q(z, $)) || le);
          return K > 3 && le && Object.defineProperty(z, $, le), le;
        }
        function w(W, z) {
          return function($, D) {
            z($, D, W);
          };
        }
        function k(W, z, $, D, q, K) {
          function le(Le) {
            if (Le !== void 0 && typeof Le != "function") throw new TypeError("Function expected");
            return Le;
          }
          for (var Ie, de = D.kind, Oe = de === "getter" ? "get" : de === "setter" ? "set" : "value", fe = !z && W ? D.static ? W : W.prototype : null, Y = z || (fe ? Object.getOwnPropertyDescriptor(fe, D.name) : {}), ne = !1, we = $.length - 1; we >= 0; we--) {
            var Ne = {};
            for (var Re in D) Ne[Re] = Re === "access" ? {} : D[Re];
            for (var Re in D.access) Ne.access[Re] = D.access[Re];
            Ne.addInitializer = function(Le) {
              if (ne) throw new TypeError("Cannot add initializers after decoration has completed");
              K.push(le(Le || null));
            };
            var Be = (0, $[we])(de === "accessor" ? { get: Y.get, set: Y.set } : Y[Oe], Ne);
            if (de === "accessor") {
              if (Be === void 0) continue;
              if (Be === null || typeof Be != "object") throw new TypeError("Object expected");
              (Ie = le(Be.get)) && (Y.get = Ie), (Ie = le(Be.set)) && (Y.set = Ie), (Ie = le(Be.init)) && q.unshift(Ie);
            } else (Ie = le(Be)) && (de === "field" ? q.unshift(Ie) : Y[Oe] = Ie);
          }
          fe && Object.defineProperty(fe, D.name, Y), ne = !0;
        }
        function F(W, z, $) {
          for (var D = arguments.length > 2, q = 0; q < z.length; q++) $ = D ? z[q].call(W, $) : z[q].call(W);
          return D ? $ : void 0;
        }
        function E(W) {
          return typeof W == "symbol" ? W : "".concat(W);
        }
        function I(W, z, $) {
          return typeof z == "symbol" && (z = z.description ? "[".concat(z.description, "]") : ""), Object.defineProperty(W, "name", { configurable: !0, value: $ ? "".concat($, " ", z) : z });
        }
        function T(W, z) {
          if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(W, z);
        }
        function P(W, z, $, D) {
          return new ($ || ($ = Promise))(function(q, K) {
            function le(Oe) {
              try {
                de(D.next(Oe));
              } catch (fe) {
                K(fe);
              }
            }
            function Ie(Oe) {
              try {
                de(D.throw(Oe));
              } catch (fe) {
                K(fe);
              }
            }
            function de(Oe) {
              var fe;
              Oe.done ? q(Oe.value) : (fe = Oe.value, fe instanceof $ ? fe : new $(function(Y) {
                Y(fe);
              })).then(le, Ie);
            }
            de((D = D.apply(W, z || [])).next());
          });
        }
        function C(W, z) {
          var $, D, q, K, le = { label: 0, sent: function() {
            if (1 & q[0]) throw q[1];
            return q[1];
          }, trys: [], ops: [] };
          return K = { next: Ie(0), throw: Ie(1), return: Ie(2) }, typeof Symbol == "function" && (K[Symbol.iterator] = function() {
            return this;
          }), K;
          function Ie(de) {
            return function(Oe) {
              return function(fe) {
                if ($) throw new TypeError("Generator is already executing.");
                for (; K && (K = 0, fe[0] && (le = 0)), le; ) try {
                  if ($ = 1, D && (q = 2 & fe[0] ? D.return : fe[0] ? D.throw || ((q = D.return) && q.call(D), 0) : D.next) && !(q = q.call(D, fe[1])).done) return q;
                  switch (D = 0, q && (fe = [2 & fe[0], q.value]), fe[0]) {
                    case 0:
                    case 1:
                      q = fe;
                      break;
                    case 4:
                      return le.label++, { value: fe[1], done: !1 };
                    case 5:
                      le.label++, D = fe[1], fe = [0];
                      continue;
                    case 7:
                      fe = le.ops.pop(), le.trys.pop();
                      continue;
                    default:
                      if (!((q = (q = le.trys).length > 0 && q[q.length - 1]) || fe[0] !== 6 && fe[0] !== 2)) {
                        le = 0;
                        continue;
                      }
                      if (fe[0] === 3 && (!q || fe[1] > q[0] && fe[1] < q[3])) {
                        le.label = fe[1];
                        break;
                      }
                      if (fe[0] === 6 && le.label < q[1]) {
                        le.label = q[1], q = fe;
                        break;
                      }
                      if (q && le.label < q[2]) {
                        le.label = q[2], le.ops.push(fe);
                        break;
                      }
                      q[2] && le.ops.pop(), le.trys.pop();
                      continue;
                  }
                  fe = z.call(W, le);
                } catch (Y) {
                  fe = [6, Y], D = 0;
                } finally {
                  $ = q = 0;
                }
                if (5 & fe[0]) throw fe[1];
                return { value: fe[0] ? fe[1] : void 0, done: !0 };
              }([de, Oe]);
            };
          }
        }
        var S = Object.create ? function(W, z, $, D) {
          D === void 0 && (D = $);
          var q = Object.getOwnPropertyDescriptor(z, $);
          q && !("get" in q ? !z.__esModule : q.writable || q.configurable) || (q = { enumerable: !0, get: function() {
            return z[$];
          } }), Object.defineProperty(W, D, q);
        } : function(W, z, $, D) {
          D === void 0 && (D = $), W[D] = z[$];
        };
        function A(W, z) {
          for (var $ in W) $ === "default" || Object.prototype.hasOwnProperty.call(z, $) || S(z, W, $);
        }
        function B(W) {
          var z = typeof Symbol == "function" && Symbol.iterator, $ = z && W[z], D = 0;
          if ($) return $.call(W);
          if (W && typeof W.length == "number") return { next: function() {
            return W && D >= W.length && (W = void 0), { value: W && W[D++], done: !W };
          } };
          throw new TypeError(z ? "Object is not iterable." : "Symbol.iterator is not defined.");
        }
        function U(W, z) {
          var $ = typeof Symbol == "function" && W[Symbol.iterator];
          if (!$) return W;
          var D, q, K = $.call(W), le = [];
          try {
            for (; (z === void 0 || z-- > 0) && !(D = K.next()).done; ) le.push(D.value);
          } catch (Ie) {
            q = { error: Ie };
          } finally {
            try {
              D && !D.done && ($ = K.return) && $.call(K);
            } finally {
              if (q) throw q.error;
            }
          }
          return le;
        }
        function re() {
          for (var W = [], z = 0; z < arguments.length; z++) W = W.concat(U(arguments[z]));
          return W;
        }
        function G() {
          for (var W = 0, z = 0, $ = arguments.length; z < $; z++) W += arguments[z].length;
          var D = Array(W), q = 0;
          for (z = 0; z < $; z++) for (var K = arguments[z], le = 0, Ie = K.length; le < Ie; le++, q++) D[q] = K[le];
          return D;
        }
        function ae(W, z, $) {
          if ($ || arguments.length === 2) for (var D, q = 0, K = z.length; q < K; q++) !D && q in z || (D || (D = Array.prototype.slice.call(z, 0, q)), D[q] = z[q]);
          return W.concat(D || Array.prototype.slice.call(z));
        }
        function he(W) {
          return this instanceof he ? (this.v = W, this) : new he(W);
        }
        function ye(W, z, $) {
          if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
          var D, q = $.apply(W, z || []), K = [];
          return D = {}, le("next"), le("throw"), le("return"), D[Symbol.asyncIterator] = function() {
            return this;
          }, D;
          function le(Y) {
            q[Y] && (D[Y] = function(ne) {
              return new Promise(function(we, Ne) {
                K.push([Y, ne, we, Ne]) > 1 || Ie(Y, ne);
              });
            });
          }
          function Ie(Y, ne) {
            try {
              (we = q[Y](ne)).value instanceof he ? Promise.resolve(we.value.v).then(de, Oe) : fe(K[0][2], we);
            } catch (Ne) {
              fe(K[0][3], Ne);
            }
            var we;
          }
          function de(Y) {
            Ie("next", Y);
          }
          function Oe(Y) {
            Ie("throw", Y);
          }
          function fe(Y, ne) {
            Y(ne), K.shift(), K.length && Ie(K[0][0], K[0][1]);
          }
        }
        function ke(W) {
          var z, $;
          return z = {}, D("next"), D("throw", function(q) {
            throw q;
          }), D("return"), z[Symbol.iterator] = function() {
            return this;
          }, z;
          function D(q, K) {
            z[q] = W[q] ? function(le) {
              return ($ = !$) ? { value: he(W[q](le)), done: !1 } : K ? K(le) : le;
            } : K;
          }
        }
        function se(W) {
          if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
          var z, $ = W[Symbol.asyncIterator];
          return $ ? $.call(W) : (W = B(W), z = {}, D("next"), D("throw"), D("return"), z[Symbol.asyncIterator] = function() {
            return this;
          }, z);
          function D(q) {
            z[q] = W[q] && function(K) {
              return new Promise(function(le, Ie) {
                (function(de, Oe, fe, Y) {
                  Promise.resolve(Y).then(function(ne) {
                    de({ value: ne, done: fe });
                  }, Oe);
                })(le, Ie, (K = W[q](K)).done, K.value);
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
          if (W != null) for (var $ in W) $ !== "default" && Object.prototype.hasOwnProperty.call(W, $) && S(z, W, $);
          return X(z, W), z;
        }
        function oe(W) {
          return W && W.__esModule ? W : { default: W };
        }
        function _e(W, z, $, D) {
          if ($ === "a" && !D) throw new TypeError("Private accessor was defined without a getter");
          if (typeof z == "function" ? W !== z || !D : !z.has(W)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return $ === "m" ? D : $ === "a" ? D.call(W) : D ? D.value : z.get(W);
        }
        function Se(W, z, $, D, q) {
          if (D === "m") throw new TypeError("Private method is not writable");
          if (D === "a" && !q) throw new TypeError("Private accessor was defined without a setter");
          if (typeof z == "function" ? W !== z || !q : !z.has(W)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
          return D === "a" ? q.call(W, $) : q ? q.value = $ : z.set(W, $), $;
        }
        function ve(W, z) {
          if (z === null || typeof z != "object" && typeof z != "function") throw new TypeError("Cannot use 'in' operator on non-object");
          return typeof W == "function" ? z === W : W.has(z);
        }
        function ue(W, z, $) {
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
        var xe = typeof SuppressedError == "function" ? SuppressedError : function(W, z, $) {
          var D = new Error($);
          return D.name = "SuppressedError", D.error = W, D.suppressed = z, D;
        };
        function ge(W) {
          function z($) {
            W.error = W.hasError ? new xe($, W.error, "An error was suppressed during disposal.") : $, W.hasError = !0;
          }
          return function $() {
            for (; W.stack.length; ) {
              var D = W.stack.pop();
              try {
                var q = D.dispose && D.dispose.call(D.value);
                if (D.async) return Promise.resolve(q).then($, function(K) {
                  return z(K), $();
                });
              } catch (K) {
                z(K);
              }
            }
            if (W.hasError) throw W.error;
          }();
        }
        p.default = { __extends: g, __assign: y, __rest: b, __decorate: _, __param: w, __metadata: T, __awaiter: P, __generator: C, __createBinding: S, __exportStar: A, __values: B, __read: U, __spread: re, __spreadArrays: G, __spreadArray: ae, __await: he, __asyncGenerator: ye, __asyncDelegator: ke, __asyncValues: se, __makeTemplateObject: me, __importStar: te, __importDefault: oe, __classPrivateFieldGet: _e, __classPrivateFieldSet: Se, __classPrivateFieldIn: ve, __addDisposableResource: ue, __disposeResources: ge };
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
const QY = () => /^((?!chrome|android).)*safari/i.test(navigator.userAgent), QE = (e) => Array.isArray(e) && e.every(
  (t) => typeof t == "object" && !(t instanceof Array)
), JY = (e) => Array.isArray(e) && e.every(
  (t) => Array.isArray(t)
), eV = (e) => Array.from(
  e.map((t) => Object.keys(t)).reduce((t, n) => /* @__PURE__ */ new Set([...t, ...n]), [])
), tV = (e, t) => {
  t = t || eV(e);
  let n = t, r = t;
  QE(t) && (n = t.map((s) => s.label), r = t.map((s) => s.key));
  const o = e.map((s) => r.map((u) => nV(u, s)));
  return [n, ...o];
}, nV = (e, t) => {
  const n = e.replace(/\[([^\]]+)]/g, ".$1").split(".").reduce(function(r, o, s, u) {
    const c = r[o];
    if (c == null)
      u.splice(1);
    else
      return c;
  }, t);
  return n === void 0 ? e in t ? t[e] : "" : n;
}, rV = (e) => typeof e > "u" || e === null ? "" : e, JE = (e, t = ",", n = '"') => e.filter((r) => r).map(
  (r) => r.map((o) => rV(o)).map((o) => `${n}${o}${n}`).join(t)
).join(`
`), aV = (e, t, n, r) => JE(t ? [t, ...e] : e, n, r), oV = (e, t, n, r) => JE(tV(e, t), n, r), iV = (e, t, n, r) => t ? `${t.join(n)}
${e}` : e.replace(/"/g, '""'), eC = (e, t, n, r) => {
  if (QE(e)) return oV(e, t, n, r);
  if (JY(e)) return aV(e, t, n, r);
  if (typeof e == "string") return iV(e, t, n);
  throw new TypeError('Data should be a "String", "Array of arrays" OR "Array of objects" ');
}, tC = (e, t, n, r, o) => {
  const s = eC(e, n, r, o), u = QY() ? "application/csv" : "text/csv", c = new Blob([t ? "\uFEFF" : "", s], { type: u }), d = `data:${u};charset=utf-8,${t ? "\uFEFF" : ""}${s}`, p = window.URL || window.webkitURL;
  return typeof p.createObjectURL > "u" ? d : p.createObjectURL(c);
}, nC = {
  data: ar.oneOfType([ar.string, ar.array, ar.func]).isRequired,
  headers: ar.array,
  target: ar.string,
  separator: ar.string,
  filename: ar.string,
  uFEFF: ar.bool,
  onClick: ar.func,
  asyncOnClick: ar.bool,
  enclosingCharacter: ar.string
}, rC = {
  separator: ",",
  filename: "generatedBy_react-csv.csv",
  uFEFF: !0,
  asyncOnClick: !1,
  enclosingCharacter: '"'
}, sV = {
  target: "_blank"
};
class T_ extends ee.Component {
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
  sV
)), pl(T_, "propTypes", nC);
var Au;
let lV = (Au = class extends ee.Component {
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
const cV = lV, uV = "_input_1q0yw_1", dV = "_clearIcon_1q0yw_9", fV = "_clearIconFocused_1q0yw_21", pV = "_clearIconLast_1q0yw_33", hV = "_clearIconLastFocused_1q0yw_47", mV = "_clearRoundedIconLast_1q0yw_61", gV = "_clearRoundedIconLastFocused_1q0yw_79", za = {
  input: uV,
  clearIcon: dV,
  clearIconFocused: fV,
  clearIconLast: pV,
  clearIconLastFocused: hV,
  clearRoundedIconLast: mV,
  clearRoundedIconLastFocused: gV
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
  } = e, E = En(null), [I, T] = at(!1), [P, C] = at(n ? "password" : "text"), [S, A] = at("eye slash");
  Gt(() => {
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
  }, U = (me) => {
    const { key: X } = me;
    X === "Enter" && (me.preventDefault(), B(me), g && g(me));
  }, re = () => {
    const me = P === "password", X = me ? "text" : "password", te = me ? "eye" : "eye slash";
    C(X), A(te);
  }, G = (me) => {
    const X = { name: r, value: "" };
    e.fieldIndex !== void 0 && (X.fieldIndex = e.fieldIndex), e.id !== void 0 && (X.id = e.id), m({ ...me, target: X }, X), y && y();
  }, ae = () => {
    T(!0);
  }, he = (me) => {
    B(me), T(!1);
  }, ye = () => n ? I ? za.clearIconFocused : za.clearIcon : h ? I ? za.clearRoundedIconLastFocused : za.clearRoundedIconLast : I ? za.clearIconLastFocused : za.clearIconLast, ke = R.omit(e, [
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
  ]), se = n || !R.isEmpty(u);
  return /* @__PURE__ */ ie(
    Ln.Input,
    {
      ...ke,
      className: `${za.input} ${s || ""}`,
      disabled: p,
      onChange: m,
      name: r,
      required: w,
      label: c,
      placeholder: R.isEmpty(d) ? c : d,
      value: o,
      type: n ? P : F,
      ...se ? { iconPosition: "left" } : {},
      autoComplete: "off",
      fluid: k,
      onFocus: ae,
      onBlur: he,
      onKeyPress: U,
      action: !0,
      children: [
        _ === "left" && !R.isEmpty(b) && /* @__PURE__ */ O(Wr, { labeled: !0, ...b }),
        se && /* @__PURE__ */ O(je, { name: n ? "lock" : u }),
        /* @__PURE__ */ O("input", { ref: t || E }),
        _ === "right" ? /* @__PURE__ */ ie(Ca, { children: [
          !R.isEmpty(o) && !p && /* @__PURE__ */ O(ht, { className: ye(), icon: "cancel", onClick: G, tabIndex: -1 }),
          !R.isEmpty(b) && /* @__PURE__ */ O(Wr, { labeled: !0, ...b })
        ] }) : !R.isEmpty(o) && !p && /* @__PURE__ */ O(ht, { className: ye(), icon: "cancel", onClick: G, tabIndex: -1 }),
        n && /* @__PURE__ */ O(
          ht,
          {
            className: h ? za.clearRoundedIconLast : za.clearIconLast,
            icon: S,
            onClick: re,
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
const vV = "_container_1uh18_1", yV = "_containerUser_1uh18_11", bV = "_containerLeft_1uh18_19", _V = "_containerRight_1uh18_25", wV = "_headerTitle_1uh18_39", xV = "_containerCenter_1uh18_49", EV = "_tableContainer_1uh18_61", Ua = {
  container: vV,
  containerUser: yV,
  containerLeft: bV,
  containerRight: _V,
  headerTitle: wV,
  containerCenter: xV,
  tableContainer: EV
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
  return /* @__PURE__ */ ie("div", { className: Ua.container, children: [
    /* @__PURE__ */ O("style", { children: m() }),
    /* @__PURE__ */ O("div", { className: Ua.containerCenter, children: R.isEmpty(h) ? /* @__PURE__ */ ie(Kn, { as: "h2", icon: !0, children: [
      /* @__PURE__ */ O("span", { children: o.company }),
      /* @__PURE__ */ O(Kn.Subheader, { children: o.title })
    ] }) : h }),
    /* @__PURE__ */ ie("div", { className: Ua.containerUser, children: [
      /* @__PURE__ */ ie("div", { className: Ua.containerLeft, children: [
        /* @__PURE__ */ ie("div", { children: [
          /* @__PURE__ */ O("span", { className: Ua.headerTitle, children: "Usuario:" }),
          o.user
        ] }),
        /* @__PURE__ */ ie("div", { children: [
          /* @__PURE__ */ O("span", { className: Ua.headerTitle, children: "Fecha:" }),
          Mr(String(/* @__PURE__ */ new Date()), !1, !1, !0)
        ] })
      ] }),
      /* @__PURE__ */ ie("div", { className: Ua.containerRight, children: [
        /* @__PURE__ */ O("span", { className: Ua.headerTitle, children: "Total de filas:" }),
        !R.isEmpty(e) && e.length
      ] })
    ] }),
    /* @__PURE__ */ O("div", { className: Ua.tableContainer, children: /* @__PURE__ */ ie(Et, { sortable: !0, celled: !0, striped: !0, children: [
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
const CV = "_container_17awp_1", OV = "_input1_17awp_9", SV = "_input2_17awp_15", Kp = {
  container: CV,
  input1: OV,
  input2: SV
}, oC = ({ label: e, value: t, onChange: n }) => {
  const [r, o] = at(""), [s, u] = at("");
  Gt(() => {
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
  return /* @__PURE__ */ ie("div", { className: Kp.container, children: [
    /* @__PURE__ */ O("div", { className: Kp.input1, children: /* @__PURE__ */ O(
      Ln.Input,
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
      Ln.Input,
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
const TV = "_modal_16365_1", PV = "_modalHeader_16365_45", kV = "_modalFooter_16365_59", NV = "_inputChannel_16365_77", IV = "_positiveButton_16365_111", AV = "_negativeButton_16365_141", RV = "_gridColumnLeft_16365_183", MV = "_gridColumnRight_16365_195", ha = {
  modal: TV,
  modalHeader: PV,
  modalFooter: kV,
  inputChannel: NV,
  positiveButton: IV,
  negativeButton: AV,
  gridColumnLeft: RV,
  gridColumnRight: MV
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
    let _ = 1, w = [], k = [], F = "", I = [...t, ...p].map((T) => {
      let P = [];
      return R.get(T, "multipleColumns", !1) ? (T.multipleColumns.forEach((C) => {
        F = Ro(C.key), P = [...P, { ...C, key: F }];
      }), P) : (F = Ro(T.key), { ...T, key: F });
    });
    return I = R.flatten(I), I.forEach((T) => {
      _ += 1, (_ + 1) % 2 === 0 ? k = [...k, g(T)] : w = [...w, g(T)];
    }), /* @__PURE__ */ ie(Ai, { columns: 2, children: [
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
  return /* @__PURE__ */ ie(un, { className: ha.modal, open: !0, closeIcon: !0, onClose: e, children: [
    /* @__PURE__ */ O(un.Header, { className: ha.modalHeader, children: /* @__PURE__ */ ie("div", { children: [
      /* @__PURE__ */ O(je, { name: "filter" }),
      "Filtro Avanzado"
    ] }) }),
    /* @__PURE__ */ O(un.Content, { scrolling: !0, children: y() }),
    /* @__PURE__ */ ie(un.Actions, { className: ha.modalFooter, children: [
      /* @__PURE__ */ ie(ht, { className: ha.negativeButton, onClick: d, children: [
        /* @__PURE__ */ O(je, { name: "filter" }),
        "Limpiar"
      ] }),
      /* @__PURE__ */ ie("div", { children: [
        /* @__PURE__ */ O(ht, { className: ha.negativeButton, onClick: e, children: "Atrás" }),
        /* @__PURE__ */ O(ht, { className: ha.positiveButton, onClick: b, children: "Filtrar" })
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
function DV(e, t, n) {
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
const LV = "_mainContainer_4n1za_1", FV = "_searchContainer_4n1za_19", $V = "_searchInput_4n1za_89", BV = "_searchWrapper_4n1za_99", jV = "_filterButton_4n1za_129", WV = "_addButton_4n1za_159", zV = "_defaultTopButton_4n1za_191", UV = "_printButton_4n1za_205", HV = "_exelButton_4n1za_219", YV = "_clearButton_4n1za_241", VV = "_defaultTopInputContainerStyle_4n1za_255", qV = "_defaultTopDropdownContainerStyle_4n1za_267", GV = "_defaultLabelContainerStyle_4n1za_277", KV = "_topInputLabel_4n1za_287", ZV = "_renderTopButtonsContainer_4n1za_299", XV = "_inputLabelCheck_4n1za_313", QV = "_labelCheck_4n1za_321", JV = "_addButtonContainer_4n1za_331", eq = "_addButtonsContainer_4n1za_343", tq = "_topButtonsDesktop_4n1za_359", nq = "_secondLine_4n1za_373", rq = "_hidePrintButtonsMobile_4n1za_389", aq = "_addButtonIcon_4n1za_553", oq = "_hideOnMobile_4n1za_595", St = {
  mainContainer: LV,
  searchContainer: FV,
  searchInput: $V,
  searchWrapper: BV,
  filterButton: jV,
  addButton: WV,
  defaultTopButton: zV,
  printButton: UV,
  exelButton: HV,
  clearButton: YV,
  defaultTopInputContainerStyle: VV,
  defaultTopDropdownContainerStyle: qV,
  defaultLabelContainerStyle: GV,
  topInputLabel: KV,
  renderTopButtonsContainer: ZV,
  inputLabelCheck: XV,
  labelCheck: QV,
  addButtonContainer: JV,
  addButtonsContainer: eq,
  topButtonsDesktop: tq,
  secondLine: nq,
  hidePrintButtonsMobile: rq,
  addButtonIcon: aq,
  hideOnMobile: oq
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
  hidePrintButtons: T = !1
}) => {
  const [P, C] = at(""), [S, A] = at([]), [B, U] = at("all"), [re, G] = at(!1), [ae, he] = at([]), [ye, ke] = at([]), [se, me] = at(!1), [X, te] = at(!1), [oe, _e] = at({}), [Se, ve] = at(!1), ue = En(), xe = En();
  Gt(() => {
    if (X) {
      const fe = DV(m, n, F);
      he(fe.dataExel), ke(fe.columnExel);
    }
    se && setTimeout(() => {
      ge(), me(!1);
    });
  }, [m]), Gt(() => {
    !R.isEmpty(ae) && !R.isEmpty(ye) && xe.current && xe.current.link && X && setTimeout(() => {
      xe.current.link.click(), te(!1);
    });
  }, [ae, ye]), Gt(() => {
    const fe = D();
    ve([...fe, ...y]);
    let Y = Iz([...fe, ...y], "label", "key");
    t.allEnabled && (Y = [{ key: 0, text: "Todos", value: "all" }, ...Y]), A(Y), R.isEmpty(t.searchString) || (C(t.searchString), $({
      newField: t.field || "all",
      searchableI: fe,
      newSearchQuery: t.searchString
    })), R.isEmpty(t.field) || U(t.field);
  }, [n, y]), Gt(() => {
    C(R.isEmpty(t.searchString) ? "" : t.searchString), U(R.isEmpty(t.field) ? "all" : t.field);
  }, [E]);
  const ge = Tg.useReactToPrint({
    content: () => ue.current
  }), W = () => {
    if (typeof R.get(e, "onPrint", null) == "function")
      return e.onPrint();
    h({ ...d, rows: g, page: 1 }, !0), me(!0);
  }, z = () => {
    h({ ...d, rows: g, page: 1 }, !0), te(!0);
  }, $ = ({ value: fe = d, newField: Y = B, searchableI: ne = !1, newSearchQuery: we = P }) => {
    let Ne = Se;
    ne && (Ne = ne);
    const Re = R.pick(d, ["rows", "orderKey", "orderDir"]), Be = Ro(Y);
    let Le = Ne.map((Xe) => {
      let Ve = [], He = "";
      return R.get(Xe, "multipleColumns", !1) ? (Xe.multipleColumns.forEach((Te) => {
        He = Ro(Te.fieldKey || Te.key), Ve = [...Ve, He];
      }), Ve) : (He = Ro(Xe.fieldKey || Xe.key), He);
    });
    Le = R.flatten(Le);
    let tt = {
      ...Re,
      page: 1,
      fields: Le
    };
    R.isEmpty(we) || (tt = {
      ...tt,
      [Be]: we
    }), R.isEmpty(fe) && (tt = { ...Re, page: 1, fields: Le }), p(tt), h(tt);
  }, D = () => {
    let fe = [];
    return n.forEach((Y) => {
      !Y.hidden && !Y.action && !Y.multiple && (Y.twoLines ? (R.get(Y.line1, "canFilter", !0) && (fe = [...fe, Y.line1]), R.get(Y.line2, "canFilter", !0) && (fe = [...fe, Y.line2])) : R.get(Y, "canFilter", !0) && (fe = [...fe, Y]));
    }), fe;
  }, q = () => {
    $({});
  }, K = Jp(R.debounce(q, 1e3), [P]), le = () => {
    let fe = null;
    return R.isEmpty(u) || (fe = R.map(u, (Y, ne) => {
      switch (Y.componentType) {
        case "input":
          return /* @__PURE__ */ ie(
            "div",
            {
              className: R.isEmpty(Y.inputContainerStyle) ? St.defaultTopInputContainerStyle : Y.inputContainerStyle,
              children: [
                /* @__PURE__ */ O("span", { className: St.topInputLabel, children: Y.label }),
                /* @__PURE__ */ O(
                  hd,
                  {
                    className: Y.className,
                    type: Y.type,
                    value: Y.value,
                    icon: Y.icon,
                    disabled: Y.disabled,
                    fluid: Y.fluid,
                    onChange: Y.onChange
                  }
                )
              ]
            },
            ne
          );
        case "inputMonth":
          return /* @__PURE__ */ ie(
            "div",
            {
              className: R.isEmpty(Y.inputContainerStyle) ? St.defaultTopInputContainerStyle : Y.inputContainerStyle,
              children: [
                /* @__PURE__ */ O("span", { className: St.topInputLabel, children: Y.label }),
                /* @__PURE__ */ O(
                  Ln.Input,
                  {
                    className: Y.className,
                    type: Y.type,
                    value: Y.value,
                    icon: Y.icon,
                    disabled: Y.disabled,
                    fluid: Y.fluid,
                    onChange: Y.onChange
                  }
                )
              ]
            },
            ne
          );
        case "check":
          return /* @__PURE__ */ ie(
            "div",
            {
              className: R.isEmpty(Y.checkContainerStyle) ? St.defaultTopInputContainerStyle : Y.checkContainerStyle,
              children: [
                /* @__PURE__ */ O("span", { className: St.labelCheck, children: Y.leftLabel }),
                /* @__PURE__ */ O(Xn, { toggle: Y.toggle !== !1, checked: Y.checked, disabled: Y.disabled, onChange: Y.onChange }),
                /* @__PURE__ */ O("span", { className: St.inputLabelCheck, children: Y.rightLabel })
              ]
            },
            ne
          );
        case "radio":
          return /* @__PURE__ */ ie(
            "div",
            {
              className: R.isEmpty(Y.checkContainerStyle) ? St.defaultTopInputContainerStyle : Y.checkContainerStyle,
              children: [
                /* @__PURE__ */ ie("div", { children: [
                  /* @__PURE__ */ O(
                    Bo,
                    {
                      checked: Y.checkedR,
                      disabled: Y.disabled,
                      onChange: Y.onChange
                    }
                  ),
                  /* @__PURE__ */ O("span", { className: St.inputLabelCheck, children: Y.rightLabel })
                ] }),
                /* @__PURE__ */ ie("div", { children: [
                  /* @__PURE__ */ O(
                    Bo,
                    {
                      checked: Y.checkedL,
                      disabled: Y.disabled,
                      onChange: Y.onChange
                    }
                  ),
                  /* @__PURE__ */ O("span", { className: St.inputLabelCheck, children: Y.leftLabel })
                ] })
              ]
            },
            ne
          );
        case "DropDown":
          return !Y.hidden && /* @__PURE__ */ ie(
            "div",
            {
              className: R.isEmpty(Y.inputContainerStyle) ? St.defaultTopDropdownContainerStyle : Y.inputContainerStyle,
              children: [
                /* @__PURE__ */ O("span", { className: St.topInputLabel, children: Y.label }),
                /* @__PURE__ */ O(
                  Tn,
                  {
                    className: Y.className,
                    selection: !0,
                    fluid: !0,
                    value: Y.value,
                    multiple: Y.multiple,
                    disabled: Y.disabled,
                    onChange: Y.onChange,
                    required: Y.required,
                    search: Y.search,
                    clearable: Y.clearable,
                    placeholder: Y.placeholder,
                    options: Y.options
                  }
                )
              ]
            },
            ne
          );
        case "Label":
          return /* @__PURE__ */ ie(
            "div",
            {
              className: R.isEmpty(Y.inputContainerStyle) ? St.defaultLabelContainerStyle : Y.inputContainerStyle,
              children: [
                /* @__PURE__ */ O("span", { className: St.labelTitle, children: Y.title }),
                /* @__PURE__ */ O("span", { className: St.labelValue, children: Y.value })
              ]
            },
            ne
          );
        case "custom":
          return /* @__PURE__ */ O("div", { children: Y.content }, ne);
        default:
          return /* @__PURE__ */ O(
            "div",
            {
              className: R.isEmpty(Y.buttonContainerStyle) ? St.defaultLabelContainerStyle : Y.buttonContainerStyle,
              children: /* @__PURE__ */ ie(
                ht,
                {
                  className: R.isEmpty(Y.className) ? St.defaultTopButton : Y.className,
                  disabled: R.get(Y, "disabled", !1),
                  onClick: Y.onClick,
                  children: [
                    !R.isEmpty(Y.icon) && /* @__PURE__ */ O(je, { className: St.addButtonIcon, name: Y.icon }),
                    R.get(Y, "content", "")
                  ]
                },
                ne
              )
            },
            ne
          );
      }
    })), /* @__PURE__ */ O("div", { className: St.renderTopButtonsContainer, children: fe });
  }, Ie = () => {
    q(), _e({}), k(!1);
  }, de = () => {
    $({ value: {} });
  }, Oe = (fe) => {
    K.cancel(), C(fe);
  };
  return /* @__PURE__ */ ie(Ca, { children: [
    /* @__PURE__ */ ie("div", { className: I ? `${St.mainContainer} ${I}` : St.mainContainer, children: [
      R.get(t, "searchable", !0) && /* @__PURE__ */ O(
        "div",
        {
          className: St.searchContainer,
          style: {
            justifyContent: R.get(t, "searchPosition", "flex-start"),
            width: R.get(t, "width", "100%")
          },
          children: /* @__PURE__ */ ie("div", { className: St.searchWrapper, children: [
            !w && /* @__PURE__ */ O(
              hd,
              {
                className: St.searchInput,
                name: "searchString",
                disabled: R.get(t, "searchDisabled", !1),
                onKeyUp: K,
                onChange: (fe) => {
                  Oe(fe.target.value);
                },
                placeholder: "Buscar",
                value: P,
                onClear: de,
                dropdown: {
                  disabled: R.get(t, "searchDisabled", !1),
                  options: S,
                  name: "searchField",
                  onChange: (fe, { value: Y }) => {
                    U(Y), R.isEmpty(P) || $({ newField: Y });
                  },
                  value: B
                }
              }
            ),
            R.get(t, "filterButton", !0) && /* @__PURE__ */ O(
              ht,
              {
                disabled: R.get(t, "searchDisabled", !1),
                className: `${St.filterButton} ${R.get(t, "hideOnMobile", !1) ? St.hideOnMobile : ""}`,
                onClick: () => {
                  G(!0);
                },
                children: /* @__PURE__ */ O(je, { className: St.addButtonIcon, name: "filter" })
              }
            ),
            w && /* @__PURE__ */ ie(ht, { className: St.clearButton, onClick: Ie, children: [
              /* @__PURE__ */ O(je, { name: "filter" }),
              "Limpiar"
            ] })
          ] })
        }
      ),
      !R.isEmpty(u) && /* @__PURE__ */ O("div", { className: St.topButtonsDesktop, children: le() }),
      /* @__PURE__ */ ie("div", { className: St.addButtonsContainer, children: [
        !R.isEmpty(r) && /* @__PURE__ */ O("div", { className: St.addButtonContainer, children: /* @__PURE__ */ ie(
          ht,
          {
            className: St.addButton,
            disabled: R.get(r, "disabled", !1),
            onClick: s || (() => c("Add", null)),
            children: [
              /* @__PURE__ */ O(je, { className: St.addButtonIcon, name: R.get(r, "icon", "plus") }),
              R.get(r, "label", "")
            ]
          }
        ) }),
        o,
        R.get(e, "printable", !0) && /* @__PURE__ */ ie("div", { className: T ? St.hidePrintButtonsMobile : "", children: [
          R.get(e, "visiblePDF", !0) && /* @__PURE__ */ O(ht, { onClick: W, className: St.printButton, primary: !0, icon: "print" }),
          R.get(e, "visibleExcel", !0) && /* @__PURE__ */ O(ht, { className: St.exelButton, icon: "file excel", onClick: z })
        ] })
      ] })
    ] }),
    !R.isEmpty(u) && /* @__PURE__ */ O("div", { className: St.secondLine, children: le() }),
    se ? /* @__PURE__ */ O("div", { style: { display: "none" }, children: /* @__PURE__ */ O("div", { ref: ue, children: /* @__PURE__ */ O(
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
    X ? /* @__PURE__ */ O(cV, { data: ae, headers: ye, filename: R.get(e, "printHeader.title", "Título"), ref: xe }) : void 0,
    re && /* @__PURE__ */ O(
      iC,
      {
        onClose: () => {
          G(!1);
        },
        customSearchKeys: y,
        searchableItems: Se,
        searchParams: d,
        setSearchParams: p,
        dataHandler: h,
        formData: oe,
        setFormData: _e,
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
const iq = "_tableDesktopOnly_11faq_1", sq = "_cardsContainerMobile_11faq_21", lq = "_tableScroll_11faq_85", cq = "_tableScrollWrapper_11faq_97", uq = "_tableWidthAuto_11faq_107", dq = "_stickyFooterTable_11faq_117", hi = {
  tableDesktopOnly: iq,
  cardsContainerMobile: sq,
  tableScroll: lq,
  tableScrollWrapper: cq,
  tableWidthAuto: uq,
  stickyFooterTable: dq
}, fq = ({
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
  sumData: T = {},
  handlerTable: P,
  dataHandler: C,
  handlerMultiple: S = () => {
  },
  cafParams: A,
  cafClearButton: B = !1,
  widthAuto: U = !1,
  mobileCardView: re = !1,
  cardLine1: G = [],
  cardLine2: ae = [],
  cardLine3: he = [],
  cardLine4: ye = [],
  onLoadMore: ke = null,
  // Handler personalizado para scroll infinito
  isLoadingMore: se = !1,
  // Estado de carga para scroll infinito
  hasMore: me = null,
  // Si hay más datos (si es null, se calcula automáticamente)
  mergeConfig: X = null,
  // Configuración para merge automático en scroll infinito
  topPlaceClassName: te = "",
  // Clase CSS personalizada para TopPlace
  hidePrintButtons: oe = !1,
  // Oculta los botones de imprimir PDF y Excel
  scrollBody: _e = !1,
  // Envuelve la tabla en un contenedor con scroll para que solo el body haga scroll
  downloadFileFetcher: Se
}) => {
  const [ve, ue] = at({ rows: 10, page: 1 }), [xe, ge] = at(!1), [W, z] = at([]), [$, D] = at([]), [q, K] = at(!1), le = {
    searchable: !0,
    searchPosition: "flex-start",
    searchDisabled: !1,
    filterButton: !0,
    searchString: "",
    field: "",
    allEnabled: !0,
    width: "100%"
  };
  return Gt(() => {
    ue({ ...ve, ...m });
  }, []), Gt(() => {
    K(B);
  }, [B]), Gt(() => {
    R.isEmpty(A) || R.isEqual(ve, A) || ue(A);
  }, [A]), /* @__PURE__ */ ie(Ca, { children: [
    p && /* @__PURE__ */ O(
      sC,
      {
        data: e,
        columns: t,
        topButtons: n,
        searcher: { ...le, ...u },
        searchRefresh: c,
        addButton: w ? b : null,
        extraAddButtons: _,
        onAddButtonClick: k,
        searchParams: ve,
        setSearchParams: ue,
        handlerTable: P,
        dataHandler: C,
        filteredPrintData: F,
        totalRows: g,
        print: d,
        headerDetail: o,
        defaultParams: m,
        customSearchKeys: r,
        sumData: T,
        isClearButton: q,
        setIsClearButton: K,
        topPlaceClassName: te,
        hidePrintButtons: oe
      }
    ),
    re && /* @__PURE__ */ O("div", { className: hi.cardsContainerMobile, children: /* @__PURE__ */ O(
      pd,
      {
        data: e,
        columns: t,
        headerDetail: o,
        sumData: T,
        clickedRowColor: s,
        handlerTable: P,
        handlerMultiple: S,
        onChangeDeselect: I,
        concatValue: W,
        setConcatValue: z,
        concatKeys: $,
        setConcatKeys: D,
        concatAll: xe,
        setConcatAll: ge,
        checkAllData: E,
        setRowStyle: y,
        totalRows: g,
        mobileCardView: re,
        cardLine1: G,
        cardLine2: ae,
        cardLine3: he,
        cardLine4: ye,
        dataHandler: C,
        searchParams: ve,
        setSearchParams: ue,
        onLoadMore: ke,
        isLoadingMoreProp: se,
        hasMore: me,
        mergeConfig: X,
        downloadFileFetcher: Se
      }
    ) }),
    /* @__PURE__ */ O("div", { className: `${_e ? hi.tableScroll : ""} ${hi.tableScrollWrapper}`, children: /* @__PURE__ */ ie(
      Et,
      {
        sortable: !0,
        celled: !0,
        striped: !0,
        compact: "very",
        className: `${re ? hi.tableDesktopOnly : ""} ${U ? hi.tableWidthAuto : ""}`,
        children: [
          /* @__PURE__ */ O(
            Jm,
            {
              columns: t,
              searchParams: ve,
              setSearchParams: ue,
              totalRows: g,
              dataHandler: C,
              concatValue: W,
              setConcatValue: z,
              concatKeys: $,
              setConcatKeys: D,
              concatAll: xe,
              setConcatAll: ge,
              widthAuto: U
            }
          ),
          /* @__PURE__ */ O(
            pd,
            {
              data: e,
              columns: t,
              headerDetail: o,
              sumData: T,
              clickedRowColor: s,
              handlerTable: P,
              handlerMultiple: S,
              onChangeDeselect: I,
              concatValue: W,
              setConcatValue: z,
              concatKeys: $,
              setConcatKeys: D,
              concatAll: xe,
              setConcatAll: ge,
              checkAllData: E,
              setRowStyle: y,
              totalRows: g,
              mobileCardView: !1,
              cardLine1: G,
              cardLine2: ae,
              cardLine3: he,
              cardLine4: ye,
              downloadFileFetcher: Se
            }
          )
        ]
      }
    ) }),
    h && /* @__PURE__ */ O(Et, { className: `${re ? hi.tableDesktopOnly : ""} ${hi.stickyFooterTable}`, children: /* @__PURE__ */ O(
      ZE,
      {
        visiblePagination: h,
        searchParams: ve,
        setSearchParams: ue,
        dataHandler: C,
        totalRows: g
      }
    ) })
  ] });
};
fq.propTypes = {
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
function pq(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function k_(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, lC(r.key), r);
  }
}
function hq(e, t, n) {
  return t && k_(e.prototype, t), n && k_(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function mq(e, t, n) {
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
      mq(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : N_(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function gq(e, t) {
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
  var t = gq(e, "string");
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
var I_ = cC.exports, vq = function(t) {
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
}, yq = typeof window < "u" && typeof window.document < "u", Zo = yq ? window : {}, gd = function(t) {
  return t > 0 && t < 1 / 0;
}, bq = Array.prototype.slice;
function Pg(e) {
  return Array.from ? Array.from(e) : bq.call(e);
}
var _q = /^image\/.+$/;
function im(e) {
  return _q.test(e);
}
function wq(e) {
  var t = im(e) ? e.substr(6) : "";
  return t === "jpeg" && (t = "jpg"), ".".concat(t);
}
var uC = String.fromCharCode;
function xq(e, t, n) {
  var r = "", o;
  for (n += t, o = t; o < n; o += 1)
    r += uC(e.getUint8(o));
  return r;
}
function Eq() {
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
var Cq = Zo.btoa;
function R_(e, t) {
  for (var n = [], r = 8192, o = new Uint8Array(e); o.length > 0; )
    n.push(uC.apply(null, Pg(o.subarray(0, r)))), o = o.subarray(r);
  return "data:".concat(t, ";base64,").concat(Cq(n.join("")));
}
function Oq(e) {
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
      if (xq(t, d, 4) === "Exif") {
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
function Sq(e) {
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
var Tq = /\.\d*(?:0|9){12}\d*$/;
function M_(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
  return Tq.test(e) ? Math.round(e * t) / t : e;
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
function Pq(e) {
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
function kq(e, t) {
  var n = Pg(new Uint8Array(e));
  if (n[2] !== 255 || n[3] !== 224)
    return e;
  var r = n[4] * 256 + n[5], o = [255, 216].concat(t, n.slice(4 + r));
  return new Uint8Array(o);
}
var Nq = Zo.ArrayBuffer, Xp = Zo.FileReader, mi = Zo.URL || Zo.webkitURL, Iq = /\.\w+$/, Aq = Zo.Compressor, Rq = /* @__PURE__ */ function() {
  function e(t, n) {
    pq(this, e), this.file = t, this.exif = [], this.image = new Image(), this.options = ku(ku({}, A_), n), this.aborted = !1, this.result = null, this.init();
  }
  return hq(e, [{
    key: "init",
    value: function() {
      var n = this, r = this.file, o = this.options;
      if (!vq(r)) {
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
      Nq || (o.checkOrientation = !1, o.retainExif = !1);
      var u = s === "image/jpeg", c = u && o.checkOrientation, d = u && o.retainExif;
      if (mi && !c && !d)
        this.load({
          url: mi.createObjectURL(r)
        });
      else {
        var p = new Xp();
        this.reader = p, p.onload = function(h) {
          var m = h.target, g = m.result, y = {}, b = 1;
          c && (b = Oq(g), b > 1 && md(y, Sq(b))), d && (n.exif = Pq(g)), c || d ? !mi || b > 1 ? y.url = R_(g, s) : y.url = mi.createObjectURL(r) : y.url = g, n.load(y);
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
        Eq() ? r.draw(ku(ku({}, n), {}, {
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
      var r = this, o = n.naturalWidth, s = n.naturalHeight, u = n.rotate, c = u === void 0 ? 0 : u, d = n.scaleX, p = d === void 0 ? 1 : d, h = n.scaleY, m = h === void 0 ? 1 : h, g = this.file, y = this.image, b = this.options, _ = document.createElement("canvas"), w = _.getContext("2d"), k = Math.abs(c) % 180 === 90, F = (b.resize === "contain" || b.resize === "cover") && gd(b.width) && gd(b.height), E = Math.max(b.maxWidth, 0) || 1 / 0, I = Math.max(b.maxHeight, 0) || 1 / 0, T = Math.max(b.minWidth, 0) || 0, P = Math.max(b.minHeight, 0) || 0, C = o / s, S = b.width, A = b.height;
      if (k) {
        var B = [I, E];
        E = B[0], I = B[1];
        var U = [P, T];
        T = U[0], P = U[1];
        var re = [A, S];
        S = re[0], A = re[1];
      }
      F && (C = S / A);
      var G = El({
        aspectRatio: C,
        width: E,
        height: I
      }, "contain");
      E = G.width, I = G.height;
      var ae = El({
        aspectRatio: C,
        width: T,
        height: P
      }, "cover");
      if (T = ae.width, P = ae.height, F) {
        var he = El({
          aspectRatio: C,
          width: S,
          height: A
        }, b.resize);
        S = he.width, A = he.height;
      } else {
        var ye = El({
          aspectRatio: C,
          width: S,
          height: A
        }), ke = ye.width;
        S = ke === void 0 ? o : ke;
        var se = ye.height;
        A = se === void 0 ? s : se;
      }
      S = Math.floor(M_(Math.min(Math.max(S, T), E))), A = Math.floor(M_(Math.min(Math.max(A, P), I)));
      var me = -S / 2, X = -A / 2, te = S, oe = A, _e = [];
      if (F) {
        var Se = 0, ve = 0, ue = o, xe = s, ge = El({
          aspectRatio: C,
          width: o,
          height: s
        }, {
          contain: "cover",
          cover: "contain"
        }[b.resize]);
        ue = ge.width, xe = ge.height, Se = (o - ue) / 2, ve = (s - xe) / 2, _e.push(Se, ve, ue, xe);
      }
      if (_e.push(me, X, te, oe), k) {
        var W = [A, S];
        S = W[0], A = W[1];
      }
      _.width = S, _.height = A, im(b.mimeType) || (b.mimeType = g.type);
      var z = "transparent";
      g.size > b.convertSize && b.convertTypes.indexOf(b.mimeType) >= 0 && (b.mimeType = "image/jpeg");
      var $ = b.mimeType === "image/jpeg";
      if ($ && (z = "#fff"), w.fillStyle = z, w.fillRect(0, 0, S, A), b.beforeDraw && b.beforeDraw.call(this, w, _), !this.aborted && (w.save(), w.translate(S / 2, A / 2), w.rotate(c * Math.PI / 180), w.scale(p, m), w.drawImage.apply(w, [y].concat(_e)), w.restore(), b.drew && b.drew.call(this, w, _), !this.aborted)) {
        var D = function(K) {
          if (!r.aborted) {
            var le = function(fe) {
              return r.done({
                naturalWidth: o,
                naturalHeight: s,
                result: fe
              });
            };
            if (K && $ && b.retainExif && r.exif && r.exif.length > 0) {
              var Ie = function(fe) {
                return le(I_(R_(kq(fe, r.exif), b.mimeType)));
              };
              if (K.arrayBuffer)
                K.arrayBuffer().then(Ie).catch(function() {
                  r.fail(new Error("Failed to read the compressed image with Blob.arrayBuffer()."));
                });
              else {
                var de = new Xp();
                r.reader = de, de.onload = function(Oe) {
                  var fe = Oe.target;
                  Ie(fe.result);
                }, de.onabort = function() {
                  r.fail(new Error("Aborted to read the compressed image with FileReader."));
                }, de.onerror = function() {
                  r.fail(new Error("Failed to read the compressed image with FileReader."));
                }, de.onloadend = function() {
                  r.reader = null;
                }, de.readAsArrayBuffer(K);
              }
            } else
              le(K);
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
          p && s.type !== u.type && (p = p.replace(Iq, wq(s.type)));
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
      return window.Compressor = Aq, e;
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
), Mq = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), Qp = [
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
We.defineLocale("es", {
  months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
    "_"
  ),
  monthsShort: function(e, t) {
    return e ? /-MMM-/.test(t) ? Mq[e.month()] : D_[e.month()] : D_;
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
We.locale("es");
const Dq = (e) => new Promise((t, n) => {
  new Rq(e, {
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
}), Lq = (e = "") => {
  const t = R.split(e, ".");
  return R.toLower(t.length > 1 ? t.pop() : "");
}, Fq = (e = "") => {
  const t = String(e).match(/^data:([^;]+);base64,/i), n = t ? R.toLower(t[1]) : "";
  return R.startsWith(n, "image/") ? "image" : R.startsWith(n, "audio/") ? "audio" : R.startsWith(n, "video/") ? "video" : n === "application/pdf" || R.includes(n, "pdf") ? "pdf" : R.includes(n, "word") || R.includes(n, "officedocument.wordprocessingml") ? "doc" : R.includes(n, "excel") || R.includes(n, "spreadsheetml") ? "xls" : R.includes(n, "powerpoint") || R.includes(n, "presentationml") ? "ppt" : R.includes(n, "zip") || R.includes(n, "x-7z-compressed") || R.includes(n, "x-rar-compressed") || R.includes(n, "tar") || R.includes(n, "gzip") ? "zip" : R.includes(n, "text/") || R.includes(n, "json") || R.includes(n, "xml") ? "txt" : "file";
}, ni = (e = []) => ` ${R.join(e, " ")} `, So = (e, t) => {
  const n = ` ${R.trim(R.toLower(t))} `;
  return R.includes(e, n);
}, $q = ni(["doc", "docx", "odt"]), Bq = ni(["xls", "xlsx", "csv", "ods"]), jq = ni(["ppt", "pptx", "odp"]), Wq = ni(["zip", "rar", "7z", "tar", "gz", "bz2"]), zq = ni(["txt", "md", "rtf", "json", "xml", "log", "yaml", "yml"]), Uq = ni(["jpg", "jpeg", "png", "webp", "apng", "avif", "gif", "svg", "bmp", "ico", "tiff"]), Hq = ni(["mp4", "webm", "ogg", "mov", "m4v", "mkv", "avi", "wmv", "flv"]), Yq = ni(["mp3", "wav", "ogg", "m4a", "aac", "flac", "wma", "opus", "weba"]), F_ = (e = "", t = "") => {
  const n = R.toLower(t);
  if (n && R.startsWith(n, "image/")) return "image";
  if (n && R.startsWith(n, "audio/")) return "audio";
  if (n && R.startsWith(n, "video/")) return "video";
  const r = Lq(e);
  return r === "pdf" ? "pdf" : So(Uq, r) ? "image" : So(Hq, r) ? "video" : So(Yq, r) ? "audio" : So($q, r) ? "doc" : So(Bq, r) ? "xls" : So(jq, r) ? "ppt" : So(Wq, r) ? "zip" : So(zq, r) ? "txt" : "file";
}, Nu = (e, t) => {
  if (!e)
    return "-";
  const n = We(e);
  return n.isValid() ? n.format(t) : "-";
};
function Vq(e) {
  if (Number.isNaN(Number(e))) return "";
  const t = Math.floor(e / 60), n = Math.floor(t / 60), r = Math.floor(n / 24), o = n - r * 24, s = t - o * 60 - r * 24 * 60;
  return o < 1 ? `${s}m` : r < 1 ? `${o}h ${s}m` : `${r}d ${o}h ${s}m`;
}
const qq = "_header_19o3d_3", Gq = "_inputSearch_19o3d_17", Kq = "_totalTime_19o3d_31", Zq = "_spaceClass_19o3d_43", Xq = "_nuevo_19o3d_51", Qq = "_atender_19o3d_61", Jq = "_cliente_19o3d_71", eG = "_alertBadge_19o3d_81", tG = "_icon_19o3d_99", nG = "_headerTable_19o3d_107", rG = "_headerFooter_19o3d_119", aG = "_cell_19o3d_129", oG = "_container_19o3d_143", iG = "_containerCenter_19o3d_155", sG = "_containerLeft_19o3d_167", lG = "_containerUs_19o3d_181", cG = "_containerPrincipa_19o3d_195", uG = "_fixedUserInfo_19o3d_207", dG = "_containerRightUserRow_19o3d_217", fG = "_containerTell_19o3d_229", pG = "_containerRightUserRowContainer_19o3d_245", hG = "_headerLabel_19o3d_257", mG = "_pDate_19o3d_269", gG = "_headerTitlesss_19o3d_289", vG = "_headerTitlesssDate_19o3d_299", yG = "_containerTelu_19o3d_311", bG = "_containerRight_19o3d_217", _G = "_containerBottom_19o3d_335", wG = "_containerLeftUser_19o3d_343", xG = "_containerLeftGroups_19o3d_357", EG = "_containerRightUser_19o3d_217", CG = "_headerTitle_19o3d_289", OG = "_tableContainer_19o3d_391", SG = "_containerCont_19o3d_401", TG = "_arrayCellContainer_19o3d_409", PG = "_arrayCell_19o3d_409", kG = "_DesConectadoText_19o3d_445", NG = "_conectadoText_19o3d_455", IG = "_cellButton_19o3d_465", AG = "_cellArrayButton_19o3d_479", RG = "_tableCell_19o3d_497", MG = "_headerMenu_19o3d_509", DG = "_headerMenuItem_19o3d_517", LG = "_tableCellHeader_19o3d_525", FG = "_tableCellHeaderCheck_19o3d_537", $G = "_tableCellHeaderIcon_19o3d_545", BG = "_tableCellPag_19o3d_553", jG = "_ColorActive_19o3d_561", WG = "_groupHover_19o3d_569", zG = "_emptyChat_19o3d_579", UG = "_ButtonEraser_19o3d_589", HG = "_ButtonRoute_19o3d_603", YG = "_ButtonEdit_19o3d_617", VG = "_ButtonIcon_19o3d_631", qG = "_ButtonLabel_19o3d_643", GG = "_ButtonLink_19o3d_651", KG = "_ButtonPedidos_19o3d_667", ZG = "_ButtonResend_19o3d_691", XG = "_linkMap_19o3d_705", QG = "_ButtonMap_19o3d_731", JG = "_weightText_19o3d_787", eK = "_positiveButton_19o3d_795", tK = "_multipleActions_19o3d_811", nK = "_positiveAddButton_19o3d_821", rK = "_positiveDesButton_19o3d_837", aK = "_negativeButton_19o3d_855", oK = "_menuTable_19o3d_879", iK = "_iconTable_19o3d_887", sK = "_detalleLabel_19o3d_911", lK = "_modalHeader_19o3d_921", cK = "_codeMap_19o3d_933", uK = "_paginationLabel_19o3d_941", dK = "_paginationCell_19o3d_949", fK = "_pagination_19o3d_941", pK = "_itemCount_19o3d_971", hK = "_labelColor_19o3d_979", mK = "_blockString_19o3d_993", gK = "_emptyDataIcon_19o3d_1009", vK = "_IconDataBase_19o3d_1025", yK = "_labelDropdown_19o3d_1033", bK = "_searchContainer_19o3d_1055", _K = "_rowMiddle_19o3d_1065", wK = "_printButton_19o3d_1081", xK = "_exelButton_19o3d_1091", EK = "_printableButtons_19o3d_1099", CK = "_searchInputStyle_19o3d_1109", dt = {
  header: qq,
  inputSearch: Gq,
  totalTime: Kq,
  spaceClass: Zq,
  nuevo: Xq,
  atender: Qq,
  cliente: Jq,
  alertBadge: eG,
  icon: tG,
  headerTable: nG,
  headerFooter: rG,
  cell: aG,
  container: oG,
  containerCenter: iG,
  containerLeft: sG,
  containerUs: lG,
  containerPrincipa: cG,
  fixedUserInfo: uG,
  containerRightUserRow: dG,
  containerTell: fG,
  containerRightUserRowContainer: pG,
  headerLabel: hG,
  pDate: mG,
  headerTitlesss: gG,
  headerTitlesssDate: vG,
  containerTelu: yG,
  containerRight: bG,
  containerBottom: _G,
  containerLeftUser: wG,
  containerLeftGroups: xG,
  containerRightUser: EG,
  headerTitle: CG,
  tableContainer: OG,
  containerCont: SG,
  arrayCellContainer: TG,
  arrayCell: PG,
  DesConectadoText: kG,
  conectadoText: NG,
  cellButton: IG,
  cellArrayButton: AG,
  tableCell: RG,
  headerMenu: MG,
  headerMenuItem: DG,
  tableCellHeader: LG,
  tableCellHeaderCheck: FG,
  tableCellHeaderIcon: $G,
  tableCellPag: BG,
  ColorActive: jG,
  groupHover: WG,
  emptyChat: zG,
  ButtonEraser: UG,
  ButtonRoute: HG,
  ButtonEdit: YG,
  ButtonIcon: VG,
  ButtonLabel: qG,
  ButtonLink: GG,
  ButtonPedidos: KG,
  ButtonResend: ZG,
  linkMap: XG,
  ButtonMap: QG,
  weightText: JG,
  positiveButton: eK,
  multipleActions: tK,
  positiveAddButton: nK,
  positiveDesButton: rK,
  negativeButton: aK,
  menuTable: oK,
  iconTable: iK,
  detalleLabel: sK,
  modalHeader: lK,
  codeMap: cK,
  paginationLabel: uK,
  paginationCell: dK,
  pagination: fK,
  itemCount: pK,
  labelColor: hK,
  blockString: mK,
  emptyDataIcon: gK,
  IconDataBase: vK,
  labelDropdown: yK,
  searchContainer: bK,
  rowMiddle: _K,
  printButton: wK,
  exelButton: xK,
  printableButtons: EK,
  searchInputStyle: CK
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
  const k = En(null), [F, E] = at(0), I = F === 0 ? null : Vq(F), T = w || R.isEmpty(s) && R.isEmpty(u) && R.isEmpty(d) && R.isEmpty(p);
  Gt(() => {
    n && P();
  }, [n]);
  const P = Tg.useReactToPrint({
    content: () => {
      if (!k.current || !e.current) return null;
      const C = document.createElement("div"), S = k.current.cloneNode(!0), A = e.current.cloneNode(!0), B = document.createElement("div");
      B.classList.add(dt.tableContainer);
      const U = document.createElement("div");
      return U.classList.add(dt.containerCont), B.appendChild(U).appendChild(A), C.appendChild(S).appendChild(B), C;
    },
    onBeforeGetContent: async () => {
      if (_) {
        const C = Math.floor(We.duration(We().diff(We(b))).asSeconds());
        E(C);
      }
      await new Promise((C) => setTimeout(C, 100));
    },
    onAfterPrint: () => {
      r();
    }
  });
  return /* @__PURE__ */ ie("div", { children: [
    !o && /* @__PURE__ */ O(ht, { onClick: P, className: dt.printButton, primary: !0, icon: "print" }),
    /* @__PURE__ */ O("div", { style: { display: "none" }, children: /* @__PURE__ */ ie("div", { className: dt.container, ref: k, children: [
      /* @__PURE__ */ O("div", { className: dt.containerCenter, children: /* @__PURE__ */ ie(Kn, { as: "h2", icon: !0, children: [
        /* @__PURE__ */ O("span", { className: dt.titleText, children: t.company }),
        /* @__PURE__ */ O(Kn.Subheader, { children: t.title }),
        (I || h || g) && /* @__PURE__ */ ie(Kn.Subheader, { className: dt.totalInfoRow, children: [
          /* @__PURE__ */ O("span", { className: `${dt.tag} ${dt[h.toLowerCase().replace(/\s+/g, "")]}`, children: "Tab " }),
          h && /* @__PURE__ */ O("span", { className: `${dt.tag} ${dt[h.toLowerCase().replace(/\s+/g, "")]}`, children: h }),
          I && /* @__PURE__ */ O("span", { className: dt.spaceClass, children: I }),
          g && /* @__PURE__ */ O("span", { className: dt.alertBadge, style: { backgroundColor: m }, children: g })
        ] }),
        !R.isEmpty(t.subTitle) && /* @__PURE__ */ O(Kn.Subheader, { children: t.subTitle })
      ] }) }),
      !y && /* @__PURE__ */ ie("div", { className: dt.containerBottom, children: [
        /* @__PURE__ */ ie("div", { className: dt.containerLeft, children: [
          /* @__PURE__ */ ie("div", { children: [
            /* @__PURE__ */ O("span", { className: dt.headerTitle, children: "Cliente:" }),
            " ",
            s
          ] }),
          R.isEmpty(d) && R.isEmpty(u) && /* @__PURE__ */ ie("div", { className: dt.pDate, children: [
            /* @__PURE__ */ O("span", { className: dt.headerTitlesss, children: "Usuario:" }),
            /* @__PURE__ */ O("span", { children: t.user })
          ] })
        ] }),
        /* @__PURE__ */ ie("div", { className: dt.containerLeftUser, children: [
          /* @__PURE__ */ ie("div", { children: [
            /* @__PURE__ */ O("span", { className: dt.headerTitle, children: "Canal:" }),
            " ",
            c
          ] }),
          !R.isEmpty(d) && R.isEmpty(u) && R.isEmpty(p) && /* @__PURE__ */ ie("div", { className: dt.pDate, children: [
            /* @__PURE__ */ O("span", { className: dt.headerTitlesss, children: "Usuario:" }),
            /* @__PURE__ */ O("span", { children: t.user })
          ] }),
          R.isEmpty(d) && !R.isEmpty(u) && R.isEmpty(p) && /* @__PURE__ */ ie("div", { className: dt.pDate, children: [
            /* @__PURE__ */ O("span", { className: dt.headerTitlesss, children: "Usuario:" }),
            /* @__PURE__ */ O("span", { children: t.user })
          ] }),
          R.isEmpty(d) && R.isEmpty(u) && R.isEmpty(p) && /* @__PURE__ */ ie("div", { className: dt.pDate, children: [
            /* @__PURE__ */ O("span", { className: dt.headerTitlesssDate, children: "Fecha:" }),
            /* @__PURE__ */ O("span", { children: Nu(/* @__PURE__ */ new Date(), "DD/MM/YYYY, hh:mm A") })
          ] })
        ] }),
        !R.isEmpty(u) && /* @__PURE__ */ ie("div", { className: dt.containerTelu, children: [
          /* @__PURE__ */ ie("div", { children: [
            /* @__PURE__ */ O("span", { className: dt.headerTitle, children: "Teléfono:" }),
            " ",
            u
          ] }),
          R.isEmpty(d) && !R.isEmpty(p) ? /* @__PURE__ */ ie("div", { className: dt.pDate, children: [
            /* @__PURE__ */ O("span", { className: dt.headerTitlesss, children: "Usuario:" }),
            /* @__PURE__ */ O("span", { children: t.user })
          ] }) : R.isEmpty(d) && R.isEmpty(p) ? /* @__PURE__ */ ie("div", { className: dt.pDate, children: [
            /* @__PURE__ */ O("span", { className: dt.headerTitlesssDate, children: "Fecha:" }),
            /* @__PURE__ */ O("span", { children: Nu(/* @__PURE__ */ new Date(), "DD/MM/YYYY, hh:mm A") })
          ] }) : null
        ] }),
        !R.isEmpty(d) && /* @__PURE__ */ ie("div", { className: dt.containerLeftUser, children: [
          /* @__PURE__ */ ie("div", { children: [
            /* @__PURE__ */ O("span", { className: dt.headerTitle, children: "Etiquetas:" }),
            R.map(d, (C, S) => /* @__PURE__ */ ie("span", { className: dt.tag, children: [
              C.name,
              S < d.length - 1 && /* @__PURE__ */ O("span", { children: ", " })
            ] }, S))
          ] }),
          !R.isEmpty(p) && /* @__PURE__ */ ie("div", { className: dt.pDate, children: [
            /* @__PURE__ */ O("span", { className: dt.headerTitlesss, children: "Usuario:" }),
            /* @__PURE__ */ O("span", { children: t.user })
          ] })
        ] }),
        !R.isEmpty(p) && /* @__PURE__ */ ie("div", { className: dt.containerLeftUser, children: [
          /* @__PURE__ */ ie("div", { className: dt.containerLeftGroups, children: [
            /* @__PURE__ */ O("span", { className: dt.headerTitle, children: "Grupo:" }),
            " ",
            p
          ] }),
          /* @__PURE__ */ ie("div", { className: dt.pDate, children: [
            /* @__PURE__ */ O("span", { className: dt.headerTitlesssDate, children: "Fecha:" }),
            /* @__PURE__ */ O("span", { children: Nu(/* @__PURE__ */ new Date(), "DD/MM/YYYY, hh:mm A") })
          ] })
        ] })
      ] }),
      y && /* @__PURE__ */ O("div", { className: `${dt.fixedUserInfo} ${T ? dt.containerLeftUser : ""}`, children: /* @__PURE__ */ ie("div", { className: dt.containerRightUserRowContainer, children: [
        /* @__PURE__ */ ie("div", { className: dt.containerRightUserRow, children: [
          /* @__PURE__ */ O("span", { className: dt.headerLabel, children: "Usuario:" }),
          " ",
          /* @__PURE__ */ O("span", { children: t.user })
        ] }),
        /* @__PURE__ */ ie("div", { className: dt.containerRightUserRow, children: [
          /* @__PURE__ */ O("span", { className: dt.headerLabel, children: "Fecha:" }),
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
const OK = "_attachmentsContainer_4kv5c_1", SK = "_attachment_4kv5c_1", TK = "_noShowInput_4kv5c_71", PK = "_image_4kv5c_79", kK = "_icon_4kv5c_93", NK = "_fileButton_4kv5c_111", IK = "_fileButtonLabel_4kv5c_159", AK = "_fixedIcon_4kv5c_183", RK = "_stateIndicator_4kv5c_199", MK = "_rounded_4kv5c_245", DK = "_roundedImage_4kv5c_253", LK = "_printImageWrapper_4kv5c_263", FK = "_printImageOnly_4kv5c_287", kn = {
  attachmentsContainer: OK,
  attachment: SK,
  noShowInput: TK,
  image: PK,
  icon: kK,
  fileButton: NK,
  fileButtonLabel: IK,
  fixedIcon: AK,
  stateIndicator: RK,
  rounded: MK,
  roundedImage: DK,
  printImageWrapper: LK,
  printImageOnly: FK
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
}, $K = "image/*,video/*,audio/*,.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.zip,.rar,.7z,.tar,.gz,.csv", BK = (e, t) => e || (t === "image" ? "image/*" : t === "video" ? "video/*" : t === "audio" ? "audio/*" : t === "media" ? "image/*,video/*,audio/*" : t === "file" ? "*/*" : $K), Iu = (e) => e == null || e === "" ? [] : R.isArray(e) ? e : [e], jK = ({
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
  userNames: T,
  clientName: P,
  clientPhone: C,
  platformName: S,
  tags: A = [],
  groupName: B
}) => {
  const [U, re] = at([]), [G, ae] = at({ open: !1, selectedImage: null }), [he, ye] = at(0), [ke, se] = at(!1), me = En(null), X = En([]), te = En(null), oe = e !== void 0 ? e : n, _e = (Y) => {
    t && t(Y), r && r(Y);
  };
  Gt(() => {
    const Y = Iu(oe);
    !R.isEmpty(Y) && !R.isEqual(X.current, Y) ? (async () => {
      const ne = await Promise.all(
        R.map(Y, async (we, Ne) => {
          const Re = String(we).startsWith("data:") || String(we).startsWith("blob:"), Be = String(we).match(/^(http(?!s?:image)|image)/gi) === null && !Re;
          let Le = we;
          Be && u && (Le = await u({ uri: we }));
          let tt = "file", Xe = "archivo";
          if (Re)
            tt = Fq(String(we)), U[Ne] && U[Ne].name && U[Ne].name !== "archivo" && (Xe = U[Ne].name);
          else if (typeof we == "string") {
            const Ve = String(we).split(/[?#]/)[0];
            tt = F_(Ve);
            try {
              const He = decodeURIComponent(Ve);
              He.includes("/") ? Xe = He.substring(He.lastIndexOf("/") + 1) : Xe = He;
            } catch {
              Xe = "archivo";
            }
          }
          return {
            link: Le,
            type: tt,
            isLocal: Re,
            name: Xe || "archivo",
            mime: ""
          };
        })
      );
      re(ne), X.current = Y;
    })() : R.isEmpty(Y) && (re([]), X.current = []);
  }, [oe, u]);
  const Se = () => {
    me.current && me.current.click();
  }, ve = (Y) => new Promise((ne) => {
    const we = new FileReader();
    we.onloadend = () => ne(we.result), we.readAsDataURL(Y);
  }), ue = async (Y) => {
    Y.preventDefault();
    const ne = Array.from(Y.target.files || []);
    if (ne.length === 0) return;
    const we = Iu(oe);
    let Ne = c ? [...we] : [], Re = c ? [...U] : [];
    for (const tt of ne) {
      const Xe = tt.type.startsWith("image/"), Ve = Xe && (k === "image" || k === "all" || k === "file");
      let He;
      if (Ve)
        try {
          const Q = await Dq(tt);
          He = await ve(Q);
        } catch {
          He = await ve(tt);
        }
      else
        He = await ve(tt);
      const Te = Xe ? "image" : F_(tt.name, tt.type);
      Ne = [...Ne, He], Re = [
        ...Re,
        {
          link: URL.createObjectURL(tt),
          type: Te,
          isLocal: !0,
          name: tt.name,
          mime: tt.type
        }
      ];
    }
    const Be = c ? Ne : Ne.slice(-1), Le = c ? Re : Re.slice(-1);
    re(Le), _e(Be), me.current && (me.current.value = null);
  }, xe = (Y) => {
    const ne = R.reject(U, (Le) => U.indexOf(Le) === Y), we = Iu(oe), Ne = R.find(we, (Le) => we.indexOf(Le) === Y), Re = R.reject(we, (Le) => we.indexOf(Le) === Y);
    let Be = [];
    c ? Ne && typeof Ne == "string" && Ne.length > 100 ? Be = [...o] : Ne && (Be = [...o, Ne]) : Ne && typeof Ne == "string" && Ne.length > 100 ? Be = [...o] : Be = Ne ? [Ne] : [], re(ne), _e(Re), s(Be);
  }, ge = (Y, ne, we = "archivo") => {
    if (ne === "video" || ne === "audio") {
      ae({ selectedImage: Y, open: !0 });
      return;
    }
    if (ne === "pdf") {
      if (typeof Y == "string" && Y.startsWith("data:")) {
        const Re = window.open("", "_blank");
        Re ? fetch(Y).then((Be) => Be.blob()).then((Be) => {
          const Le = URL.createObjectURL(Be);
          Re.location.href = Le, setTimeout(() => {
            Re.document && (Re.document.title = we);
          }, 100);
        }) : window.open(Y, "_blank");
      } else
        window.open(Y, "_blank");
      return;
    }
    const Ne = document.createElement("a");
    Ne.href = Y, Ne.download = we, Ne.target = "_blank", document.body.appendChild(Ne), Ne.click(), document.body.removeChild(Ne);
  }, W = () => {
    ae({ open: !1, selectedImage: null }), ye(0);
  }, z = () => ye((Y) => Y <= 0 ? 270 : Y - 90), $ = () => ye((Y) => Y >= 270 ? 0 : Y + 90), D = Tg.useReactToPrint({
    content: () => te.current,
    onAfterPrint: () => {
      se(!1);
    }
  });
  Gt(() => {
    ke && D();
  }, [ke]);
  const q = () => {
    se(!0);
  }, K = (Y) => {
    if (!w || w.length === 0) return null;
    const ne = w.find((Ne) => Y.includes(Ne.path));
    return ne && { present: "#a6d7b0", late: "#f4b988" }[ne.markedAs] || null;
  }, le = (Y) => {
    const ne = R.find(U, { link: Y }), we = (ne == null ? void 0 : ne.type) === "video", Ne = (ne == null ? void 0 : ne.type) === "audio";
    let Re;
    we || Ne ? Re = {
      type: "video",
      width: 1280,
      height: 720,
      autoPlay: !0,
      sources: [
        {
          src: Y,
          type: (ne == null ? void 0 : ne.mime) || (Ne ? "audio/mp3" : "video/mp4")
        }
      ],
      downloadUrl: Y,
      downloadFilename: ne != null && ne.name && (ne == null ? void 0 : ne.name) !== "archivo" ? ne.name : Ne ? "audio.mp3" : "video.mp4"
    } : Re = {
      src: Y,
      downloadFilename: ne && ne.name !== "archivo" ? ne.name : "imagen.png"
    };
    const Be = R.filter(U, (Le) => Le.type === "image" && Le.link !== Y);
    return [
      Re,
      ...R.map(Be, (Le) => ({
        src: Le.link,
        downloadFilename: Le.name && Le.name !== "archivo" ? Le.name : "imagen.png"
      }))
    ];
  }, Ie = (Y) => {
    const ne = Iu(oe), we = R.map(Y, (Be, Le) => {
      const tt = K(ne[Le] || Be.link), Xe = !d && !(_ && !Be.isLocal);
      return /* @__PURE__ */ ie(
        "div",
        {
          className: `${kn.attachment} ${y ? kn.rounded : ""}`,
          style: { width: `${p}rem`, height: `${h}rem` },
          children: [
            Xe && /* @__PURE__ */ O(
              je,
              {
                className: kn.fixedIcon,
                name: "close",
                onClick: () => xe(Le)
              }
            ),
            tt && /* @__PURE__ */ O("div", { className: kn.stateIndicator, style: { backgroundColor: tt } }),
            Be.type === "image" ? /* @__PURE__ */ O(
              xr,
              {
                className: `${kn.image} ${y ? kn.roundedImage : ""}`,
                src: Be.link,
                alt: Be.name || "",
                onClick: () => ae({ selectedImage: Be.link, open: !0 })
              }
            ) : /* @__PURE__ */ ie(
              "button",
              {
                type: "button",
                className: kn.fileButton,
                onClick: () => ge(Be.link, Be.type, Be.name),
                "aria-label": `Vista previa ${Be.name || "archivo"}`,
                children: [
                  /* @__PURE__ */ O(
                    je,
                    {
                      className: kn.icon,
                      name: $_[Be.type] || $_.file,
                      color: B_[Be.type] || B_.file,
                      size: g
                    }
                  ),
                  !!Be.name && /* @__PURE__ */ O("div", { className: kn.fileButtonLabel, title: Be.name, children: Be.name })
                ]
              }
            )
          ]
        },
        Le + 1
      );
    }), Ne = /* @__PURE__ */ ie(
      ht,
      {
        className: `${kn.attachment} ${y ? kn.rounded : ""}`,
        icon: !0,
        primary: !0,
        disabled: d,
        onClick: Se,
        style: { width: `${p}rem`, height: `${h}rem` },
        children: [
          /* @__PURE__ */ O(je, { name: m, size: g }),
          /* @__PURE__ */ O(
            "input",
            {
              className: kn.noShowInput,
              ref: me,
              type: "file",
              accept: BK(F, k),
              multiple: c,
              disabled: d,
              onChange: ue
            }
          )
        ]
      },
      0
    );
    return [(b || d ? !1 : !(!c && !R.isEmpty(Y))) && Ne, ...we];
  }, de = d && R.isEmpty(U), Oe = R.find(U, { link: G.selectedImage }), fe = (Oe == null ? void 0 : Oe.type) === "video" || (Oe == null ? void 0 : Oe.type) === "audio";
  return /* @__PURE__ */ ie("div", { className: kn.attachmentsContainer, style: { height: `${h}rem` }, children: [
    /* @__PURE__ */ O(
      jE,
      {
        open: G.open,
        plugins: fe ? [am, E_] : [am, HE, KE, E_],
        close: W,
        slides: le(G.selectedImage),
        zoom: fe ? void 0 : { maxScale: 50, maxZoomPixelRatio: 10 },
        className: `rotated${he}`,
        controller: { closeOnBackdropClick: !0 },
        render: {
          buttonPrev: () => null,
          buttonNext: () => null
        },
        toolbar: {
          buttons: fe ? ["download", "close"] : [
            /* @__PURE__ */ O("button", { type: "button", className: "yarl__button", onClick: z, children: /* @__PURE__ */ O(je, { name: "undo", size: "large" }) }, "rotate-left"),
            /* @__PURE__ */ O("button", { type: "button", className: "yarl__button", onClick: $, children: /* @__PURE__ */ O(je, { name: "redo", size: "large" }) }, "rotate-right"),
            /* @__PURE__ */ O("button", { type: "button", className: "yarl__button", onClick: q, children: /* @__PURE__ */ O(je, { name: "print", size: "large" }) }, "print"),
            "zoom",
            "download",
            "fullscreen",
            "close"
          ]
        }
      }
    ),
    de ? /* @__PURE__ */ O("div", { className: `${kn.attachment} ${y ? kn.rounded : ""}`, style: { width: `${p}rem`, height: `${h}rem` }, children: /* @__PURE__ */ O(je, { className: kn.icon, name: E, size: g, color: "grey" }) }) : Ie(U),
    /* @__PURE__ */ O("div", { ref: te, className: kn.printImageWrapper, children: !fe && G.selectedImage && /* @__PURE__ */ O(
      "img",
      {
        src: G.selectedImage,
        alt: "Imagen para imprimir",
        className: kn.printImageOnly,
        style: { transform: `rotate(${he}deg)` }
      }
    ) }),
    /* @__PURE__ */ O(
      dC,
      {
        hiddenButon: !0,
        printAction: ke,
        printActionRetry: () => {
          se(!1);
        },
        printHeader: {
          company: I,
          user: T,
          title: "Impresión de Imagen"
        },
        clientName: P,
        clientPhone: C,
        platform: S,
        tags: A,
        group: B,
        renderData: te,
        hideClientInfo: !1
      }
    )
  ] });
};
jK.propTypes = {
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
const WK = "_text_vzm0k_1", zK = {
  text: WK
}, Fl = ({ children: e = "", className: t, as: n, href: r, disabled: o = !1, style: s, withMarkdown: u = !1, onClick: c = () => {
} }) => {
  const d = (h) => {
    const m = /(\*[^*]+\*|_[^_]+_|~[^~]+~|`[^`]+`)/g;
    return h.split(m).map((y, b) => y.startsWith("*") && y.endsWith("*") ? /* @__PURE__ */ O("strong", { style: { fontWeight: "bolder" }, children: y.slice(1, -1) }, b) : y.startsWith("_") && y.endsWith("_") ? /* @__PURE__ */ O("em", { style: { fontStyle: "italic" }, children: y.slice(1, -1) }, b) : y.startsWith("~") && y.endsWith("~") ? /* @__PURE__ */ O("del", { style: { textDecoration: "line-through" }, children: y.slice(1, -1) }, b) : /* @__PURE__ */ O("span", { children: y }, b));
  }, p = () => typeof e == "string" && u ? d(e) : e;
  return /* @__PURE__ */ O(
    Kn,
    {
      as: n || "p",
      className: `${zK.text} ${t || ""}`.trim(),
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
function UK(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
var HK = qI, YK = function(t) {
  var n = ee.useRef(t);
  return HK(function() {
    n.current = t;
  }), n;
}, j_ = function(t, n) {
  if (typeof t == "function") {
    t(n);
    return;
  }
  t.current = n;
}, VK = function(t, n) {
  var r = ee.useRef();
  return ee.useCallback(function(o) {
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
}, z_ = qK, Vn = null, U_ = function(t, n) {
  var r = t.scrollHeight;
  return n.sizingStyle.boxSizing === "border-box" ? r + n.borderSize : r - n.paddingSize;
};
function GK(e, t, n, r) {
  n === void 0 && (n = 1), r === void 0 && (r = 1 / 0), Vn || (Vn = document.createElement("textarea"), Vn.setAttribute("tabindex", "-1"), Vn.setAttribute("aria-hidden", "true"), z_(Vn)), Vn.parentNode === null && document.body.appendChild(Vn);
  var o = e.paddingSize, s = e.borderSize, u = e.sizingStyle, c = u.boxSizing;
  Object.keys(u).forEach(function(g) {
    var y = g;
    Vn.style[y] = u[y];
  }), z_(Vn), Vn.value = t;
  var d = U_(Vn, e);
  Vn.value = t, d = U_(Vn, e), Vn.value = "x";
  var p = Vn.scrollHeight - o, h = p * n;
  c === "border-box" && (h = h + o + s), d = Math.max(h, d);
  var m = p * r;
  return c === "border-box" && (m = m + o + s), d = Math.min(m, d), [d, p];
}
var H_ = function() {
}, KK = function(t, n) {
  return t.reduce(function(r, o) {
    return r[o] = n[o], r;
  }, {});
}, ZK = [
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
], XK = !!document.documentElement.currentStyle, QK = function(t) {
  var n = window.getComputedStyle(t);
  if (n === null)
    return null;
  var r = KK(ZK, n), o = r.boxSizing;
  if (o === "")
    return null;
  XK && o === "border-box" && (r.width = parseFloat(r.width) + parseFloat(r.borderRightWidth) + parseFloat(r.borderLeftWidth) + parseFloat(r.paddingRight) + parseFloat(r.paddingLeft) + "px");
  var s = parseFloat(r.paddingBottom) + parseFloat(r.paddingTop), u = parseFloat(r.borderBottomWidth) + parseFloat(r.borderTopWidth);
  return {
    sizingStyle: r,
    paddingSize: s,
    borderSize: u
  };
}, JK = QK;
function kg(e, t, n) {
  var r = YK(n);
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
var eZ = function(t, n) {
  kg(document.body, "reset", function(r) {
    t.current.form === r.target && n(r);
  });
}, tZ = function(t) {
  kg(window, "resize", t);
}, nZ = function(t) {
  kg(document.fonts, "loadingdone", t);
}, rZ = ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"], aZ = function(t, n) {
  var r = t.cacheMeasurements, o = t.maxRows, s = t.minRows, u = t.onChange, c = u === void 0 ? H_ : u, d = t.onHeightChange, p = d === void 0 ? H_ : d, h = UK(t, rZ), m = h.value !== void 0, g = L.useRef(null), y = VK(g, n), b = L.useRef(0), _ = L.useRef(), w = function() {
    var E = g.current, I = r && _.current ? _.current : JK(E);
    if (I) {
      _.current = I;
      var T = GK(I, E.value || E.placeholder || "x", s, o), P = T[0], C = T[1];
      b.current !== P && (b.current = P, E.style.setProperty("height", P + "px", "important"), p(P, {
        rowHeight: C
      }));
    }
  }, k = function(E) {
    m || w(), c(E);
  };
  return L.useLayoutEffect(w), eZ(g, function() {
    if (!m) {
      var F = g.current.value;
      requestAnimationFrame(function() {
        var E = g.current;
        E && F !== E.value && w();
      });
    }
  }), tZ(w), nZ(w), /* @__PURE__ */ L.createElement("textarea", sm({}, h, {
    onChange: k,
    ref: y
  }));
}, oZ = /* @__PURE__ */ L.forwardRef(aZ);
const iZ = "_wrapper_1pssv_1", sZ = "_label_1pssv_11", lZ = "_required_1pssv_23", cZ = "_inputWrapper_1pssv_33", uZ = "_textarea_1pssv_43", dZ = "_iconsContainer_1pssv_73", fZ = "_icon_1pssv_73", pZ = "_labelActions_1pssv_111", hZ = "_labelIcon_1pssv_123", mZ = "_error_1pssv_147", gZ = "_errorLabel_1pssv_157", vZ = "_labelRow_1pssv_169", yZ = "_charCount_1pssv_181", _r = {
  wrapper: iZ,
  label: sZ,
  required: lZ,
  inputWrapper: cZ,
  textarea: uZ,
  iconsContainer: dZ,
  icon: fZ,
  labelActions: pZ,
  labelIcon: hZ,
  error: mZ,
  errorLabel: gZ,
  labelRow: vZ,
  charCount: yZ
}, bZ = ({
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
  const [b, _] = at(!1), w = R.defaultTo(e, ""), k = !!(u && !b && o && w), F = k ? String(w).replace(/[^\n]/g, "•") : w, E = u && !b && !k ? { WebkitTextSecurity: "disc" } : void 0;
  return /* @__PURE__ */ ie("div", { className: _r.wrapper, children: [
    n && /* @__PURE__ */ ie("div", { className: _r.labelRow, children: [
      /* @__PURE__ */ ie("span", { className: _r.label, children: [
        /* @__PURE__ */ O("span", { children: n }),
        p ? /* @__PURE__ */ O("span", { className: _r.required, children: " *" }) : null,
        u && /* @__PURE__ */ O(
          je,
          {
            name: b ? "eye slash" : "eye",
            className: _r.labelIcon,
            link: !0,
            title: b ? "Ocultar token" : "Ver token",
            "aria-label": b ? "Ocultar token" : "Ver token",
            onClick: () => _(!b)
          }
        )
      ] }),
      /* @__PURE__ */ O("div", { className: _r.labelActions, children: m && g && /* @__PURE__ */ ie("span", { className: _r.charCount, children: [
        R.size(e),
        "/",
        g
      ] }) })
    ] }),
    /* @__PURE__ */ ie("div", { className: _r.inputWrapper, children: [
      /* @__PURE__ */ O(
        oZ,
        {
          minRows: c,
          maxRows: d,
          name: t,
          className: R.join(R.compact([_r.textarea, s && _r.error, y]), " "),
          value: F,
          onChange: r,
          disabled: o,
          placeholder: h,
          style: E
        }
      ),
      /* @__PURE__ */ O("div", { className: _r.iconsContainer, children: e && !o && /* @__PURE__ */ O(
        je,
        {
          name: "close",
          className: _r.icon,
          onClick: () => r({ target: { name: t, value: "" } })
        }
      ) })
    ] }),
    s && /* @__PURE__ */ O(dr, { basic: !0, color: "red", className: _r.errorLabel, children: s })
  ] });
};
bZ.propTypes = {
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
const _Z = "_input_7je94_1", wZ = "_actionMiddle_7je94_105", xZ = "_actionMiddleFocused_7je94_143", EZ = "_actionLast_7je94_181", CZ = "_actionLastFocused_7je94_221", OZ = "_actionRoundedLast_7je94_261", SZ = "_actionRoundedLastFocused_7je94_301", TZ = "_actionIconOnly_7je94_371", PZ = "_copiedButton_7je94_391", kZ = "_inlineLabelBox_7je94_427", NZ = "_inlineLabelBoxFocused_7je94_471", IZ = "_inlineLabelBoxRounded_7je94_479", AZ = "_inlineLabelBoxError_7je94_489", RZ = "_labelRoot_7je94_521", MZ = "_labelRequired_7je94_533", DZ = "_infoIcon_7je94_543", xn = {
  input: _Z,
  actionMiddle: wZ,
  actionMiddleFocused: xZ,
  actionLast: EZ,
  actionLastFocused: CZ,
  actionRoundedLast: OZ,
  actionRoundedLastFocused: SZ,
  actionIconOnly: TZ,
  copiedButton: PZ,
  inlineLabelBox: kZ,
  inlineLabelBoxFocused: NZ,
  inlineLabelBoxRounded: IZ,
  inlineLabelBoxError: AZ,
  labelRoot: RZ,
  labelRequired: MZ,
  infoIcon: DZ
}, fC = pc((e, t) => {
  const {
    isPassword: n = !1,
    isLink: r = !1,
    isPin: o = !1,
    inlineLabel: s,
    copyLabel: u = "Copiar",
    generateLabel: c = "Generar",
    pinLength: d = 4,
    onGeneratePin: p,
    onCopy: h,
    name: m,
    value: g,
    className: y,
    icon: b,
    label: _,
    infoLabel: w,
    hint: k,
    info: F,
    tooltip: E,
    hintWide: I = !1,
    popupPosition: T = "top center",
    labelClassName: P = "",
    placeholder: C,
    disabled: S,
    rounded: A,
    onChange: B,
    onKeyPress: U,
    onClear: re,
    dropdown: G,
    dropdownPosition: ae = "left",
    required: he = !1,
    fluid: ye = !0,
    type: ke = "text",
    hideClear: se = !1,
    hideDropdown: me = !1,
    customBorderRadius: X,
    error: te
  } = e, oe = ke === "link" || !!r, _e = ke === "pin" || !!o, Se = n || ke === "password" || _e, ve = !!(n || _e || oe), ue = X || (A ? "1rem" : "0.25rem"), xe = X || "1rem", ge = En(null), W = En(null), [z, $] = at(!1), [D, q] = at(Se ? "password" : ke === "link" ? "text" : ke), [K, le] = at("eye slash"), [Ie, de] = at(!1);
  Gt(() => {
    S ? ((t || ge).current.style.setProperty("background-color", "hsl(0, 0%, 90%)", "important"), (t || ge).current.style.setProperty("color", "hsl(0, 0%, 0%)", "important")) : ((t || ge).current.style.removeProperty("background-color"), (t || ge).current.style.removeProperty("cursor")), A ? R.isEmpty(g) || S ? ((t || ge).current.style.removeProperty("border-top-left-radius"), (t || ge).current.style.removeProperty("border-bottom-left-radius"), (t || ge).current.style.removeProperty("border-top-right-radius"), (t || ge).current.style.removeProperty("border-bottom-right-radius"), (t || ge).current.style.removeProperty("border-right"), ve ? ((t || ge).current.style.setProperty("border-top-left-radius", xe, "important"), (t || ge).current.style.setProperty("border-bottom-left-radius", xe, "important"), (t || ge).current.style.setProperty("border-right", "0", "important"), (t || ge).current.style.setProperty("border-top-right-radius", "0", "important"), (t || ge).current.style.setProperty("border-bottom-right-radius", "0", "important")) : ((t || ge).current.style.setProperty("border-radius", xe, "important"), (t || ge).current.style.setProperty(
      "border-right",
      `1px solid ${z ? "var(--inputFocus)" : "var(--inputShader)"}`,
      "important"
    ))) : se && !ve ? ((t || ge).current.style.setProperty("border-radius", xe, "important"), (t || ge).current.style.setProperty(
      "border-right",
      `1px solid ${z ? "var(--inputFocus)" : "var(--inputShader)"}`,
      "important"
    )) : ((t || ge).current.style.removeProperty("border-radius"), (t || ge).current.style.setProperty("border-top-left-radius", xe, "important"), (t || ge).current.style.setProperty("border-bottom-left-radius", xe, "important"), (t || ge).current.style.setProperty("border-top-right-radius", "0", "important"), (t || ge).current.style.setProperty("border-bottom-right-radius", "0", "important"), (t || ge).current.style.setProperty("border-right", "0", "important")) : R.isEmpty(g) || S ? ((t || ge).current.style.setProperty("border-radius", ue, "important"), ve ? ((t || ge).current.style.setProperty("border-right", "0", "important"), (t || ge).current.style.setProperty("border-top-right-radius", "0", "important"), (t || ge).current.style.setProperty("border-bottom-right-radius", "0", "important")) : (t || ge).current.style.setProperty(
      "border-right",
      `1px solid ${z ? "var(--inputFocus)" : "var(--inputShader)"}`,
      "important"
    )) : se && !ve ? ((t || ge).current.style.setProperty("border-radius", ue, "important"), (t || ge).current.style.setProperty(
      "border-right",
      `1px solid ${z ? "var(--inputFocus)" : "var(--inputShader)"}`,
      "important"
    ), (t || ge).current.style.setProperty("border-top-right-radius", ue, "important"), (t || ge).current.style.setProperty("border-bottom-right-radius", ue, "important")) : ((t || ge).current.style.setProperty("border-right", "0", "important"), (t || ge).current.style.setProperty("border-top-right-radius", "0", "important"), (t || ge).current.style.setProperty("border-bottom-right-radius", "0", "important")), R.isEmpty(G) || (ae === "left" ? ((t || ge).current.style.setProperty("border-top-left-radius", "0", "important"), (t || ge).current.style.setProperty("border-bottom-left-radius", "0", "important"), (t || ge).current.style.setProperty("border-left-color", "transparent", "important")) : ae === "right" && ((t || ge).current.style.setProperty("border-top-right-radius", "0", "important"), (t || ge).current.style.setProperty("border-bottom-right-radius", "0", "important"), (t || ge).current.style.setProperty("border-right-color", "transparent", "important"))), s && ((t || ge).current.style.setProperty("border-top-left-radius", "0", "important"), (t || ge).current.style.setProperty("border-bottom-left-radius", "0", "important"), (t || ge).current.style.setProperty("border-left-color", "transparent", "important"));
  }, [
    g,
    z,
    G,
    ae,
    s,
    ve,
    S,
    A,
    se,
    X,
    ue,
    xe,
    t,
    ge,
    te
  ]);
  const Oe = (Q) => {
    if (!R.isEmpty(g)) {
      const ze = { name: m, value: typeof g == "string" ? g.trim() : g };
      B && B({ ...Q, target: ze }, ze);
    }
  }, fe = (Q) => {
    const { key: ze } = Q;
    ze === "Enter" && (Q.preventDefault(), Oe(Q), U && U(Q));
  }, Y = () => {
    const Q = D === "password", ze = Q ? "text" : "password", lt = Q ? "eye" : "eye slash";
    q(ze), le(lt);
  }, ne = (Q) => {
    if (Q.preventDefault(), R.isEmpty(g))
      return;
    const ze = String(g);
    if (navigator.clipboard && navigator.clipboard.writeText)
      navigator.clipboard.writeText(ze);
    else {
      const lt = document.createElement("textarea");
      lt.value = ze, document.body.appendChild(lt), lt.select(), document.execCommand("copy"), document.body.removeChild(lt);
    }
    de(!0), h && h(ze, Q), setTimeout(() => {
      de(!1);
    }, 2e3);
  }, we = (Q) => {
    if (Q.preventDefault(), S)
      return;
    let ze;
    if (typeof p == "function")
      ze = p();
    else {
      const ft = d || 4, nt = 10 ** (ft - 1), Yt = 10 ** ft - 1;
      ze = String(Math.floor(nt + Math.random() * (Yt - nt + 1)));
    }
    const lt = { name: m, value: String(ze) };
    e.fieldIndex !== void 0 && (lt.fieldIndex = e.fieldIndex), e.id !== void 0 && (lt.id = e.id), B && B({ ...Q, target: lt }, lt);
  }, Ne = (Q) => {
    const ze = { name: m, value: "" };
    e.fieldIndex !== void 0 && (ze.fieldIndex = e.fieldIndex), e.id !== void 0 && (ze.id = e.id), B && B({ ...Q, target: ze }, ze), re && re();
  }, Re = () => {
    $(!0);
  }, Be = (Q) => {
    Oe(Q), $(!1);
  }, Le = (Q) => Q ? A ? z ? xn.actionRoundedLastFocused : xn.actionRoundedLast : z ? xn.actionLastFocused : xn.actionLast : z ? xn.actionMiddleFocused : xn.actionMiddle, tt = () => {
    if (!_) return;
    if (ee.isValidElement(_)) return _;
    const Q = w || k || F || E;
    return /* @__PURE__ */ ie("span", { className: `${xn.labelRoot} ${P}`.trim(), children: [
      /* @__PURE__ */ O("span", { children: _ }),
      he ? /* @__PURE__ */ O("span", { className: xn.labelRequired, children: " *" }) : null,
      Q ? /* @__PURE__ */ O(
        Dn,
        {
          wide: I ? "very" : !0,
          hoverable: I,
          position: T,
          content: Q,
          trigger: /* @__PURE__ */ O(je, { name: "info circle", className: xn.infoIcon })
        }
      ) : null
    ] });
  }, Xe = R.omit(e, [
    "ref",
    "icon",
    "children",
    "onKeyPress",
    "name",
    "value",
    "onChange",
    "onClear",
    "onCopy",
    "onGeneratePin",
    "disabled",
    "className",
    "rounded",
    "isPassword",
    "isLink",
    "isPin",
    "inlineLabel",
    "copyLabel",
    "generateLabel",
    "pinLength",
    "required",
    "type",
    "dropdown",
    "dropdownPosition",
    "hideClear",
    "hideDropdown",
    "customBorderRadius",
    "infoLabel",
    "hint",
    "info",
    "tooltip",
    "hintWide",
    "popupPosition",
    "labelClassName",
    "fieldIndex",
    "id",
    "error"
  ]), Ve = b || (n ? "lock" : _e ? "key" : oe ? "linkify" : void 0), He = !s && (Se || !R.isEmpty(Ve)), Te = () => {
    if (!s) return null;
    const Q = !!(te && (typeof te == "object" ? te.content : te)), ze = [
      xn.inlineLabelBox,
      z ? xn.inlineLabelBoxFocused : "",
      A ? xn.inlineLabelBoxRounded : "",
      Q ? xn.inlineLabelBoxError : ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ O(ht, { ref: W, className: ze, type: "button", tabIndex: -1, children: s });
  };
  return /* @__PURE__ */ ie(
    Ln.Input,
    {
      ...Xe,
      className: `${xn.input} ${S ? xn.disabled : ""} ${y || ""}`,
      disabled: S,
      onChange: B,
      name: m,
      label: tt(),
      placeholder: C === "" ? "" : R.isEmpty(C) ? typeof _ == "string" ? _ : "" : C,
      value: g,
      type: Se ? D : ke === "link" ? "text" : ke,
      ...He ? { iconPosition: "left" } : {},
      autoComplete: "off",
      fluid: ye,
      onFocus: Re,
      onBlur: Be,
      onKeyPress: fe,
      actionPosition: s ? "left" : "right",
      action: !0,
      error: te,
      children: [
        s && Te(),
        ae === "left" && !R.isEmpty(G) && !me && /* @__PURE__ */ O(Wr, { labeled: !0, ...G }),
        He && /* @__PURE__ */ O(je, { name: Ve }),
        /* @__PURE__ */ O("input", { ref: t || ge, required: he }),
        ae === "right" ? /* @__PURE__ */ ie(Ca, { children: [
          !R.isEmpty(g) && !S && !se && /* @__PURE__ */ O(ht, { className: Le(!ve), icon: "cancel", onClick: Ne, tabIndex: -1, title: "Limpiar" }),
          !me && /* @__PURE__ */ O(Wr, { labeled: !0, ...G })
        ] }) : !se && !R.isEmpty(g) && !S && /* @__PURE__ */ O(ht, { className: Le(!ve), icon: "cancel", onClick: Ne, tabIndex: -1, title: "Limpiar" }),
        (n || _e) && /* @__PURE__ */ O(
          Dn,
          {
            size: "mini",
            inverted: !0,
            position: "top center",
            content: D === "password" ? "Mostrar" : "Ocultar",
            trigger: /* @__PURE__ */ O(
              ht,
              {
                className: `${Le(!_e)} ${xn.actionIconOnly}`,
                icon: K,
                onClick: Y,
                tabIndex: -1,
                "aria-label": D === "password" ? "Mostrar" : "Ocultar"
              }
            )
          }
        ),
        _e && /* @__PURE__ */ O(
          Dn,
          {
            size: "mini",
            inverted: !0,
            position: "top center",
            content: c || "Generar",
            trigger: /* @__PURE__ */ O(
              ht,
              {
                className: `${Le(!0)} ${xn.actionIconOnly}`,
                onClick: we,
                tabIndex: -1,
                "aria-label": c || "Generar",
                children: /* @__PURE__ */ O(je, { name: "exchange" })
              }
            )
          }
        ),
        oe && /* @__PURE__ */ O(
          Dn,
          {
            size: "mini",
            inverted: !0,
            position: "top center",
            open: Ie ? !0 : void 0,
            content: Ie ? "¡Copiado!" : u || "Copiar",
            trigger: /* @__PURE__ */ O(
              ht,
              {
                className: `${Le(!0)} ${xn.actionIconOnly} ${Ie ? xn.copiedButton : ""}`,
                onClick: ne,
                tabIndex: -1,
                "aria-label": Ie ? "¡Copiado!" : u || "Copiar",
                children: /* @__PURE__ */ O(je, { name: Ie ? "check" : "copy" })
              }
            )
          }
        )
      ]
    }
  );
});
fC.displayName = "Input";
fC.propTypes = {
  onChange: l.func,
  onKeyPress: l.func,
  onClear: l.func,
  onCopy: l.func,
  onGeneratePin: l.func,
  name: l.string,
  placeholder: l.string,
  label: l.oneOfType([l.string, l.node]),
  infoLabel: l.oneOfType([l.string, l.node]),
  hint: l.oneOfType([l.string, l.node]),
  info: l.oneOfType([l.string, l.node]),
  tooltip: l.oneOfType([l.string, l.node]),
  hintWide: l.bool,
  popupPosition: l.string,
  labelClassName: l.string,
  value: l.oneOfType([l.string, l.number]),
  className: l.string,
  disabled: l.bool,
  icon: l.string,
  children: l.node,
  rounded: l.bool,
  dropdown: l.object,
  dropdownPosition: l.oneOf(["left", "right"]),
  fluid: l.bool,
  isPassword: l.bool,
  isLink: l.bool,
  isPin: l.bool,
  inlineLabel: l.oneOfType([l.string, l.node]),
  copyLabel: l.string,
  generateLabel: l.string,
  pinLength: l.number,
  required: l.bool,
  type: l.string,
  fieldIndex: l.oneOfType([l.number, l.string]),
  id: l.oneOfType([l.number, l.string]),
  hideClear: l.bool,
  hideDropdown: l.bool,
  customBorderRadius: l.string,
  error: l.oneOfType([l.bool, l.object, l.string])
};
const Y_ = 49, LZ = "_activeItem_1ays7_1", FZ = "_item_1ays7_15", $Z = "_itemMultiple_1ays7_39", BZ = "_itemSelect_1ays7_49", jZ = "_itemSelectMultiple_1ays7_73", WZ = "_menu_1ays7_85", zZ = "_titleMenuItem_1ays7_99", UZ = "_titleMenu_1ays7_99", HZ = "_activeMenuItem_1ays7_133", YZ = "_menuItem_1ays7_163", VZ = "_titleText_1ays7_183", qZ = "_text_1ays7_197", GZ = "_subText_1ays7_211", KZ = "_icon_1ays7_225", ZZ = "_subIcon_1ays7_235", hn = {
  activeItem: LZ,
  item: FZ,
  itemMultiple: $Z,
  itemSelect: BZ,
  itemSelectMultiple: jZ,
  menu: WZ,
  titleMenuItem: zZ,
  titleMenu: UZ,
  activeMenuItem: HZ,
  menuItem: YZ,
  titleText: VZ,
  text: qZ,
  subText: GZ,
  icon: KZ,
  subIcon: ZZ
}, Vu = ({
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
  const [p, h] = at(u), m = R.isEmpty(s) ? r : `${r}${s[0].path}`, g = (F, E) => {
    c ? d(F, E) : d && d();
  }, y = () => {
    R.isEmpty(s) ? g(m, o) : h((F) => !F);
  }, b = ({ placement: F, popper: E, reference: I }) => {
    if (R.isEmpty(s))
      return [];
    if (F === "right") {
      const T = E.height - Y_, P = T / 2, C = I.y + T;
      let S = P - (e ? 0 : Y_);
      return typeof window < "u" && C > window.innerHeight && (S -= window.innerHeight - C), [S, 0];
    }
    return [];
  }, _ = () => {
    if (R.isEmpty(s)) return null;
    const F = typeof window < "u" ? window.location.pathname : "";
    return R.map(s, (I) => {
      const T = `${r}${I.path}`, P = F === T;
      return /* @__PURE__ */ ie(
        An.Item,
        {
          className: P ? hn.activeMenuItem : hn.menuItem,
          onClick: () => g(T, o),
          children: [
            !R.isEmpty(I.icon) && /* @__PURE__ */ O(je, { className: hn.subIcon, name: I.icon }),
            /* @__PURE__ */ O("span", { className: hn.subText, children: I.name })
          ]
        },
        I.id
      );
    });
  }, w = () => e ? p ? /* @__PURE__ */ ie("div", { className: hn.itemSelectMultiple, children: [
    /* @__PURE__ */ O(An.Item, { className: hn.itemMultiple, onClick: y, children: /* @__PURE__ */ ie("div", { className: hn.activeItem, children: [
      !R.isEmpty(n) && /* @__PURE__ */ O(je, { className: hn.icon, name: n }),
      /* @__PURE__ */ O(Fl, { className: hn.text, children: t })
    ] }) }),
    _()
  ] }) : /* @__PURE__ */ O(An.Item, { className: u ? hn.itemSelect : hn.item, onClick: y, children: /* @__PURE__ */ ie("div", { className: hn.activeItem, children: [
    !R.isEmpty(n) && /* @__PURE__ */ O(je, { className: hn.icon, name: n }),
    /* @__PURE__ */ O(Fl, { className: hn.text, children: t })
  ] }) }) : /* @__PURE__ */ O(
    An.Item,
    {
      className: u ? hn.itemSelect : hn.item,
      onClick: () => g(m, o),
      children: /* @__PURE__ */ O("div", { className: hn.activeItem, children: !R.isEmpty(n) && /* @__PURE__ */ O(je, { className: hn.icon, name: n }) })
    }
  ), k = () => {
    R.isEmpty(s) && g(r, o);
  };
  return /* @__PURE__ */ O(
    Dn,
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
      children: /* @__PURE__ */ O(Dn.Content, { children: /* @__PURE__ */ ie(An, { vertical: !0, children: [
        !e && /* @__PURE__ */ O(An.Item, { className: R.isEmpty(s) ? hn.titleMenu : hn.titleMenuItem, onClick: k, children: /* @__PURE__ */ O(Fl, { className: hn.titleText, children: t }) }),
        _()
      ] }) })
    }
  );
};
Vu.propTypes = {
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
const XZ = "_sideBar_wxxzs_1", QZ = "_collapsedSidebar_wxxzs_13", JZ = "_menuItems_wxxzs_25", eX = "_mobileItems_wxxzs_37", tX = "_divider_wxxzs_49", Cl = {
  sideBar: XZ,
  collapsedSidebar: QZ,
  menuItems: JZ,
  mobileItems: eX,
  divider: tX
}, nX = ({
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
        Vu,
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
  return /* @__PURE__ */ ie(
    ti,
    {
      className: t ? Cl.sideBar : Cl.collapsedSidebar,
      as: An,
      direction: "left",
      animation: r ? "overlay" : "push",
      visible: o,
      vertical: !0,
      icon: !0,
      width: "wide",
      children: [
        d && s && /* @__PURE__ */ O(Vu, { isExtended: r ? !0 : t, allowNavigation: !1, path: null, name: s }),
        /* @__PURE__ */ O("div", { className: r ? Cl.mobileItems : Cl.menuItems, children: h() }),
        /* @__PURE__ */ O(
          Vu,
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
nX.propTypes = {
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
const rX = "_fullScreen_1chi0_3", aX = "_large_1chi0_11", oX = "_small_1chi0_19", iX = "_tiny_1chi0_27", sX = "_mini_1chi0_35", lX = "_modalHeader_1chi0_43", cX = "_tabsContainer_1chi0_63", uX = "_modalContent_1chi0_73", dX = "_modalContentNoFlex_1chi0_91", fX = "_modalFooter_1chi0_131", pX = "_iconHeader_1chi0_145", hX = "_topEditButton_1chi0_153", mX = "_topWatchButton_1chi0_171", gX = "_topPrintButton_1chi0_189", vX = "_positiveButton_1chi0_221", yX = "_negativeButton_1chi0_251", bX = "_disabled_1chi0_281", _X = "_rowButton_1chi0_295", wX = "_modal_1chi0_43", xX = "_modalHeaderTitle_1chi0_401", EX = "_modalCloseInside_1chi0_595", Nn = {
  fullScreen: rX,
  large: aX,
  small: oX,
  tiny: iX,
  mini: sX,
  modalHeader: lX,
  tabsContainer: cX,
  modalContent: uX,
  modalContentNoFlex: dX,
  modalFooter: fX,
  iconHeader: pX,
  topEditButton: hX,
  topWatchButton: mX,
  topPrintButton: gX,
  positiveButton: vX,
  negativeButton: yX,
  disabled: bX,
  rowButton: _X,
  modal: wX,
  modalHeaderTitle: xX,
  modalCloseInside: EX
}, CX = "_divHeaderNav_7mcz0_1", OX = "_navButton_7mcz0_23", SX = "_errorsButon_7mcz0_49", TX = "_volatileError_7mcz0_93", PX = "_buttonContainer_7mcz0_181", kX = "_redButton_7mcz0_195", NX = "_active_7mcz0_233", IX = "_moreWrapper_7mcz0_263", AX = "_moreButton_7mcz0_275", RX = "_moreDropdown_7mcz0_293", Rr = {
  divHeaderNav: CX,
  navButton: OX,
  errorsButon: SX,
  volatileError: TX,
  buttonContainer: PX,
  redButton: kX,
  active: NX,
  moreWrapper: IX,
  moreButton: AX,
  moreDropdown: RX
}, pC = ({ handleStateHeader: e, stateHeader: t, buttons: n }) => {
  const [r, o] = at([]), [s, u] = at([]), [c, d] = at(!1), p = En(null), h = (y, b = !1) => {
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
    R.forEach(F, (I, T) => {
      const P = `<i class="icon ${I.icon}"></i> ${I.label} ${I.count ? `(${I.count})` : ""}`, C = h(P), A = T === E - 1 ? 0 : b;
      _ + C + A <= y - 10 ? (_ += C, w.push(I)) : k.push(I);
    }), o(w), u(k);
  };
  Gt(() => {
    const y = new ResizeObserver(m);
    return p.current && y.observe(p.current), () => y.disconnect();
  }, [n]), Gt(() => {
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
    return /* @__PURE__ */ ie("div", { className: Rr.buttonContainer, children: [
      /* @__PURE__ */ ie(
        ht,
        {
          disabled: !!y.disabled,
          className: _,
          onClick: () => {
            y.disabled || (y.onClick ? y.onClick() : e(y.state), b && d(!1));
          },
          children: [
            /* @__PURE__ */ O(je, { name: y.icon }),
            y.label,
            " ",
            y.count !== void 0 && `(${y.count})`
          ]
        }
      ),
      !R.isEmpty(y.error) && /* @__PURE__ */ O("div", { className: Rr.volatileError, children: "Campos Requeridos" })
    ] }, y.key);
  };
  return /* @__PURE__ */ ie("div", { className: Rr.divHeaderNav, ref: p, children: [
    R.map(r, (y) => g(y)),
    !R.isEmpty(s) && /* @__PURE__ */ ie("div", { className: Rr.moreWrapper, children: [
      /* @__PURE__ */ O(
        ht,
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
pC.propTypes = {
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
const MX = ({
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
  tabs: T = [],
  activeTab: P = "",
  onTabChange: C = () => {
  },
  customHeight: S = "",
  closeOnDimmerClick: A = !0,
  contentStyle: B = {},
  closeInside: U = !1,
  closeIconInside: re = !1,
  closeIcon: G = !0
}) => {
  const [ae, he] = at("list"), ye = U || re;
  Gt(() => {
    ke();
  }, [n]);
  const ke = () => {
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
  }, se = () => {
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
  return /* @__PURE__ */ ie(
    un,
    {
      className: `${R.isEmpty(p) ? "" : Nn[p]} ${F} ${Nn.modal} ${ye ? Nn.modalCloseInside : ""}`,
      style: X,
      open: !0,
      closeIcon: G,
      closeOnDimmerClick: A,
      onClose: se,
      children: [
        /* @__PURE__ */ ie(un.Header, { className: Nn.modalHeader, children: [
          /* @__PURE__ */ ie("div", { className: Nn.modalHeaderTitle, children: [
            /* @__PURE__ */ O(je, { name: ae, className: Nn.iconHeader }),
            o,
            s && ` - Id: ${s}`
          ] }),
          !R.isEmpty(b) && b,
          /* @__PURE__ */ ie("div", { className: Nn.rowButton, children: [
            n === "Watch" && !I && /* @__PURE__ */ O(
              ht,
              {
                onClick: () => {
                  r("Edit");
                },
                className: Nn.topEditButton,
                children: /* @__PURE__ */ O(je, { name: "edit" })
              }
            ),
            n === "Edit" && /* @__PURE__ */ O(
              ht,
              {
                onClick: () => {
                  r("Watch");
                },
                className: Nn.topWatchButton,
                children: /* @__PURE__ */ O(je, { name: "eye" })
              }
            ),
            w && /* @__PURE__ */ O(
              ht,
              {
                onClick: () => {
                  typeof w == "function" && w();
                },
                className: Nn.topPrintButton,
                title: "Imprimir",
                children: /* @__PURE__ */ O(je, { name: "print" })
              }
            )
          ] })
        ] }),
        !R.isEmpty(T) && /* @__PURE__ */ O("div", { className: Nn.tabsContainer, children: /* @__PURE__ */ O(pC, { buttons: T, stateHeader: P, handleStateHeader: C }) }),
        /* @__PURE__ */ O(
          un.Content,
          {
            className: E ? Nn.modalContentNoFlex : Nn.modalContent,
            style: h ? { minHeight: "calc(95vh - 8rem)", ...B } : S ? { height: S, minHeight: S, ...B } : { ...B },
            scrolling: !0,
            children: e
          }
        ),
        /* @__PURE__ */ ie(un.Actions, { className: Nn.modalFooter, children: [
          !R.isEmpty(_) && _,
          n === "Watch" ? /* @__PURE__ */ O(ht, { className: Nn.negativeButton, onClick: se, children: "Cerrar" }) : /* @__PURE__ */ O(ht, { className: Nn.negativeButton, onClick: se, children: y }),
          n !== "Watch" && c && /* @__PURE__ */ O(
            ht,
            {
              className: `${Nn.positiveButton} ${k ? Nn.disabled : ""}`,
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
MX.propTypes = {
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
const DX = "_modal_3j9dd_1", LX = "_header_3j9dd_11", FX = "_actions_3j9dd_25", $X = "_leftActions_3j9dd_39", BX = "_rightActions_3j9dd_51", jX = "_positiveButton_3j9dd_63", WX = "_negativeButton_3j9dd_91", zX = "_content_3j9dd_121", UX = "_focus_3j9dd_129", HX = "_contactHeader_3j9dd_139", YX = "_contactPositiveButton_3j9dd_149", VX = "_centerModal_3j9dd_169", qn = {
  modal: DX,
  header: LX,
  actions: FX,
  leftActions: $X,
  rightActions: BX,
  positiveButton: jX,
  negativeButton: WX,
  content: zX,
  focus: UX,
  contactHeader: HX,
  contactPositiveButton: YX,
  centerModal: VX
}, qX = ({
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
}) => /* @__PURE__ */ ie(
  un,
  {
    open: e,
    size: "tiny",
    closeOnDimmerClick: !1,
    dimmer: "blurring",
    className: `${qn.modal} ${g} ${y ? qn.contact : ""} ${b ? qn.centerModal : ""}`,
    style: m,
    children: [
      /* @__PURE__ */ ie(
        un.Header,
        {
          className: `${qn.header} ${y ? qn.contactHeader : ""}`,
          style: _ ? { "--custom-header-color": _ } : {},
          children: [
            !R.isEmpty(p) && /* @__PURE__ */ O(je, { name: p }),
            ` ${r}`
          ]
        }
      ),
      /* @__PURE__ */ O(un.Content, { className: qn.contentContainer, children: /* @__PURE__ */ O(Fl, { className: qn.content, children: n || /* @__PURE__ */ ie(Ca, { children: [
        `¿${t}`,
        u ? /* @__PURE__ */ ie(Ca, { children: [
          /* @__PURE__ */ O("span", { className: qn.focus, children: u }),
          "?"
        ] }) : "?"
      ] }) }) }),
      /* @__PURE__ */ ie(un.Actions, { className: qn.actions, children: [
        /* @__PURE__ */ O("div", { className: qn.leftActions, children: h }),
        /* @__PURE__ */ ie("div", { className: qn.rightActions, children: [
          /* @__PURE__ */ O(ht, { className: `${qn.negativeButton} ${y ? qn.contactNegativeButton : ""}`, onClick: d, children: s }),
          !w && /* @__PURE__ */ O(ht, { className: `${qn.positiveButton} ${y ? qn.contactPositiveButton : ""}`, onClick: c, children: o })
        ] })
      ] })
    ]
  }
);
qX.propTypes = {
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
const GX = "_modal_s72ln_1", KX = "_content_s72ln_13", ZX = "_messageBody_s72ln_33", XX = "_actions_s72ln_73", QX = "_button_s72ln_81", Ol = {
  modal: GX,
  content: KX,
  messageBody: ZX,
  actions: XX,
  button: QX
}, JX = (e) => {
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
}, eQ = ({ text: e = "", isVisible: t = !1, isError: n = !1, onDismiss: r }) => {
  const o = JX(e);
  return /* @__PURE__ */ ie(un, { open: t, closeOnDimmerClick: !1, className: Ol.modal, size: "small", children: [
    /* @__PURE__ */ ie(un.Content, { className: Ol.content, children: [
      /* @__PURE__ */ O(je, { name: n ? "warning sign" : "check circle", size: "big", color: n ? "red" : "green" }),
      /* @__PURE__ */ O("pre", { className: Ol.messageBody, children: o })
    ] }),
    /* @__PURE__ */ O(un.Actions, { className: Ol.actions, children: /* @__PURE__ */ O(ht, { className: Ol.button, onClick: r, color: n ? "red" : "green", fluid: !0, children: "Cerrar" }) })
  ] });
};
eQ.propTypes = {
  text: l.oneOfType([l.string, l.object]),
  isVisible: l.bool,
  isError: l.bool,
  onDismiss: l.func
};
const tQ = "_loading_5559w_1", nQ = {
  loading: tQ
}, rQ = ({ isFetching: e }) => /* @__PURE__ */ O(Mo, { page: !0, active: e, children: /* @__PURE__ */ O(tc, { className: nQ.loading, size: "large", children: "Loading..." }) });
rQ.propTypes = {
  isFetching: l.bool.isRequired
};
export {
  so as Card,
  qX as ConfirmModal,
  Vs as Dropdown,
  jK as FileManager,
  MX as IkModal,
  fq as IkTable,
  fC as Input,
  rQ as Loading,
  eQ as NotificationDialog,
  nX as SideBar,
  Vu as SideBarMenu,
  Fl as Text,
  bZ as TextArea,
  kw as Toggle
};
