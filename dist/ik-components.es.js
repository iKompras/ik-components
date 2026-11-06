var MI = Object.defineProperty;
var DI = (e, t, n) => t in e ? MI(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var dl = (e, t, n) => DI(e, typeof t != "symbol" ? t + "" : t, n);
import { jsxs as oe, jsx as P, Fragment as xa } from "react/jsx-runtime";
import * as L from "react";
import Q, { Children as im, PureComponent as H_, Component as Kn, createRef as br, isValidElement as LI, cloneElement as Y_, createElement as hp, createContext as FI, useContext as $I, forwardRef as hd, useState as st, useMemo as BI, useEffect as Zt, useRef as Ln, useCallback as Xp, useLayoutEffect as jI } from "react";
import * as Qp from "react-dom";
import WI, { createPortal as q_ } from "react-dom";
var os = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function dc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Jp = { exports: {} }, yu = { exports: {} }, jt = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rb;
function UI() {
  if (rb) return jt;
  rb = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, u = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, _ = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, N = e ? Symbol.for("react.responder") : 60118, F = e ? Symbol.for("react.scope") : 60119;
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
  return jt.AsyncMode = d, jt.ConcurrentMode = p, jt.ContextConsumer = c, jt.ContextProvider = u, jt.Element = t, jt.ForwardRef = h, jt.Fragment = r, jt.Lazy = b, jt.Memo = y, jt.Portal = n, jt.Profiler = s, jt.StrictMode = o, jt.Suspense = m, jt.isAsyncMode = function(O) {
    return I(O) || x(O) === d;
  }, jt.isConcurrentMode = I, jt.isContextConsumer = function(O) {
    return x(O) === c;
  }, jt.isContextProvider = function(O) {
    return x(O) === u;
  }, jt.isElement = function(O) {
    return typeof O == "object" && O !== null && O.$$typeof === t;
  }, jt.isForwardRef = function(O) {
    return x(O) === h;
  }, jt.isFragment = function(O) {
    return x(O) === r;
  }, jt.isLazy = function(O) {
    return x(O) === b;
  }, jt.isMemo = function(O) {
    return x(O) === y;
  }, jt.isPortal = function(O) {
    return x(O) === n;
  }, jt.isProfiler = function(O) {
    return x(O) === s;
  }, jt.isStrictMode = function(O) {
    return x(O) === o;
  }, jt.isSuspense = function(O) {
    return x(O) === m;
  }, jt.isValidElementType = function(O) {
    return typeof O == "string" || typeof O == "function" || O === r || O === p || O === s || O === o || O === m || O === g || typeof O == "object" && O !== null && (O.$$typeof === b || O.$$typeof === y || O.$$typeof === u || O.$$typeof === c || O.$$typeof === h || O.$$typeof === w || O.$$typeof === N || O.$$typeof === F || O.$$typeof === _);
  }, jt.typeOf = x, jt;
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
var ab;
function zI() {
  return ab || (ab = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, u = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, _ = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, N = e ? Symbol.for("react.responder") : 60118, F = e ? Symbol.for("react.scope") : 60119;
    function x(D) {
      return typeof D == "string" || typeof D == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      D === r || D === p || D === s || D === o || D === m || D === g || typeof D == "object" && D !== null && (D.$$typeof === b || D.$$typeof === y || D.$$typeof === u || D.$$typeof === c || D.$$typeof === h || D.$$typeof === w || D.$$typeof === N || D.$$typeof === F || D.$$typeof === _);
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
              case o:
              case m:
                return Z;
              default:
                var le = Z && Z.$$typeof;
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
    var O = d, S = p, C = c, T = u, R = t, B = h, U = r, te = b, z = y, ne = n, fe = s, ge = o, Pe = m, se = !1;
    function me(D) {
      return se || (se = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), J(D) || I(D) === d;
    }
    function J(D) {
      return I(D) === p;
    }
    function re(D) {
      return I(D) === c;
    }
    function ae(D) {
      return I(D) === u;
    }
    function ye(D) {
      return typeof D == "object" && D !== null && D.$$typeof === t;
    }
    function Se(D) {
      return I(D) === h;
    }
    function Ce(D) {
      return I(D) === r;
    }
    function pe(D) {
      return I(D) === b;
    }
    function ke(D) {
      return I(D) === y;
    }
    function $e(D) {
      return I(D) === n;
    }
    function W(D) {
      return I(D) === s;
    }
    function H(D) {
      return I(D) === o;
    }
    function $(D) {
      return I(D) === m;
    }
    Wt.AsyncMode = O, Wt.ConcurrentMode = S, Wt.ContextConsumer = C, Wt.ContextProvider = T, Wt.Element = R, Wt.ForwardRef = B, Wt.Fragment = U, Wt.Lazy = te, Wt.Memo = z, Wt.Portal = ne, Wt.Profiler = fe, Wt.StrictMode = ge, Wt.Suspense = Pe, Wt.isAsyncMode = me, Wt.isConcurrentMode = J, Wt.isContextConsumer = re, Wt.isContextProvider = ae, Wt.isElement = ye, Wt.isForwardRef = Se, Wt.isFragment = Ce, Wt.isLazy = pe, Wt.isMemo = ke, Wt.isPortal = $e, Wt.isProfiler = W, Wt.isStrictMode = H, Wt.isSuspense = $, Wt.isValidElementType = x, Wt.typeOf = I;
  }()), Wt;
}
var ob;
function sm() {
  return ob || (ob = 1, process.env.NODE_ENV === "production" ? yu.exports = UI() : yu.exports = zI()), yu.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var mp, ib;
function HI() {
  if (ib) return mp;
  ib = 1;
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
  return mp = o() ? Object.assign : function(s, u) {
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
  }, mp;
}
var gp, sb;
function lm() {
  if (sb) return gp;
  sb = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return gp = e, gp;
}
var vp, lb;
function V_() {
  return lb || (lb = 1, vp = Function.call.bind(Object.prototype.hasOwnProperty)), vp;
}
var yp, cb;
function YI() {
  if (cb) return yp;
  cb = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = lm(), n = {}, r = V_();
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
  }, yp = o, yp;
}
var bp, ub;
function qI() {
  if (ub) return bp;
  ub = 1;
  var e = sm(), t = HI(), n = lm(), r = V_(), o = YI(), s = function() {
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
  return bp = function(c, d) {
    var p = typeof Symbol == "function" && Symbol.iterator, h = "@@iterator";
    function m(J) {
      var re = J && (p && J[p] || J[h]);
      if (typeof re == "function")
        return re;
    }
    var g = "<<anonymous>>", y = {
      array: N("array"),
      bigint: N("bigint"),
      bool: N("boolean"),
      func: N("function"),
      number: N("number"),
      object: N("object"),
      string: N("string"),
      symbol: N("symbol"),
      any: F(),
      arrayOf: x,
      element: I(),
      elementType: O(),
      instanceOf: S,
      node: B(),
      objectOf: T,
      oneOf: C,
      oneOfType: R,
      shape: te,
      exact: z
    };
    function b(J, re) {
      return J === re ? J !== 0 || 1 / J === 1 / re : J !== J && re !== re;
    }
    function _(J, re) {
      this.message = J, this.data = re && typeof re == "object" ? re : {}, this.stack = "";
    }
    _.prototype = Error.prototype;
    function w(J) {
      if (process.env.NODE_ENV !== "production")
        var re = {}, ae = 0;
      function ye(Ce, pe, ke, $e, W, H, $) {
        if ($e = $e || g, H = H || ke, $ !== n) {
          if (d) {
            var D = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw D.name = "Invariant Violation", D;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var G = $e + ":" + ke;
            !re[G] && // Avoid spamming the console because they are often not actionable except for lib authors
            ae < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + H + "` prop on `" + $e + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), re[G] = !0, ae++);
          }
        }
        return pe[ke] == null ? Ce ? pe[ke] === null ? new _("The " + W + " `" + H + "` is marked as required " + ("in `" + $e + "`, but its value is `null`.")) : new _("The " + W + " `" + H + "` is marked as required in " + ("`" + $e + "`, but its value is `undefined`.")) : null : J(pe, ke, $e, W, H);
      }
      var Se = ye.bind(null, !1);
      return Se.isRequired = ye.bind(null, !0), Se;
    }
    function N(J) {
      function re(ae, ye, Se, Ce, pe, ke) {
        var $e = ae[ye], W = ge($e);
        if (W !== J) {
          var H = Pe($e);
          return new _(
            "Invalid " + Ce + " `" + pe + "` of type " + ("`" + H + "` supplied to `" + Se + "`, expected ") + ("`" + J + "`."),
            { expectedType: J }
          );
        }
        return null;
      }
      return w(re);
    }
    function F() {
      return w(u);
    }
    function x(J) {
      function re(ae, ye, Se, Ce, pe) {
        if (typeof J != "function")
          return new _("Property `" + pe + "` of component `" + Se + "` has invalid PropType notation inside arrayOf.");
        var ke = ae[ye];
        if (!Array.isArray(ke)) {
          var $e = ge(ke);
          return new _("Invalid " + Ce + " `" + pe + "` of type " + ("`" + $e + "` supplied to `" + Se + "`, expected an array."));
        }
        for (var W = 0; W < ke.length; W++) {
          var H = J(ke, W, Se, Ce, pe + "[" + W + "]", n);
          if (H instanceof Error)
            return H;
        }
        return null;
      }
      return w(re);
    }
    function I() {
      function J(re, ae, ye, Se, Ce) {
        var pe = re[ae];
        if (!c(pe)) {
          var ke = ge(pe);
          return new _("Invalid " + Se + " `" + Ce + "` of type " + ("`" + ke + "` supplied to `" + ye + "`, expected a single ReactElement."));
        }
        return null;
      }
      return w(J);
    }
    function O() {
      function J(re, ae, ye, Se, Ce) {
        var pe = re[ae];
        if (!e.isValidElementType(pe)) {
          var ke = ge(pe);
          return new _("Invalid " + Se + " `" + Ce + "` of type " + ("`" + ke + "` supplied to `" + ye + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return w(J);
    }
    function S(J) {
      function re(ae, ye, Se, Ce, pe) {
        if (!(ae[ye] instanceof J)) {
          var ke = J.name || g, $e = me(ae[ye]);
          return new _("Invalid " + Ce + " `" + pe + "` of type " + ("`" + $e + "` supplied to `" + Se + "`, expected ") + ("instance of `" + ke + "`."));
        }
        return null;
      }
      return w(re);
    }
    function C(J) {
      if (!Array.isArray(J))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), u;
      function re(ae, ye, Se, Ce, pe) {
        for (var ke = ae[ye], $e = 0; $e < J.length; $e++)
          if (b(ke, J[$e]))
            return null;
        var W = JSON.stringify(J, function($, D) {
          var G = Pe(D);
          return G === "symbol" ? String(D) : D;
        });
        return new _("Invalid " + Ce + " `" + pe + "` of value `" + String(ke) + "` " + ("supplied to `" + Se + "`, expected one of " + W + "."));
      }
      return w(re);
    }
    function T(J) {
      function re(ae, ye, Se, Ce, pe) {
        if (typeof J != "function")
          return new _("Property `" + pe + "` of component `" + Se + "` has invalid PropType notation inside objectOf.");
        var ke = ae[ye], $e = ge(ke);
        if ($e !== "object")
          return new _("Invalid " + Ce + " `" + pe + "` of type " + ("`" + $e + "` supplied to `" + Se + "`, expected an object."));
        for (var W in ke)
          if (r(ke, W)) {
            var H = J(ke, W, Se, Ce, pe + "." + W, n);
            if (H instanceof Error)
              return H;
          }
        return null;
      }
      return w(re);
    }
    function R(J) {
      if (!Array.isArray(J))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), u;
      for (var re = 0; re < J.length; re++) {
        var ae = J[re];
        if (typeof ae != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + se(ae) + " at index " + re + "."
          ), u;
      }
      function ye(Se, Ce, pe, ke, $e) {
        for (var W = [], H = 0; H < J.length; H++) {
          var $ = J[H], D = $(Se, Ce, pe, ke, $e, n);
          if (D == null)
            return null;
          D.data && r(D.data, "expectedType") && W.push(D.data.expectedType);
        }
        var G = W.length > 0 ? ", expected one of type [" + W.join(", ") + "]" : "";
        return new _("Invalid " + ke + " `" + $e + "` supplied to " + ("`" + pe + "`" + G + "."));
      }
      return w(ye);
    }
    function B() {
      function J(re, ae, ye, Se, Ce) {
        return ne(re[ae]) ? null : new _("Invalid " + Se + " `" + Ce + "` supplied to " + ("`" + ye + "`, expected a ReactNode."));
      }
      return w(J);
    }
    function U(J, re, ae, ye, Se) {
      return new _(
        (J || "React class") + ": " + re + " type `" + ae + "." + ye + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + Se + "`."
      );
    }
    function te(J) {
      function re(ae, ye, Se, Ce, pe) {
        var ke = ae[ye], $e = ge(ke);
        if ($e !== "object")
          return new _("Invalid " + Ce + " `" + pe + "` of type `" + $e + "` " + ("supplied to `" + Se + "`, expected `object`."));
        for (var W in J) {
          var H = J[W];
          if (typeof H != "function")
            return U(Se, Ce, pe, W, Pe(H));
          var $ = H(ke, W, Se, Ce, pe + "." + W, n);
          if ($)
            return $;
        }
        return null;
      }
      return w(re);
    }
    function z(J) {
      function re(ae, ye, Se, Ce, pe) {
        var ke = ae[ye], $e = ge(ke);
        if ($e !== "object")
          return new _("Invalid " + Ce + " `" + pe + "` of type `" + $e + "` " + ("supplied to `" + Se + "`, expected `object`."));
        var W = t({}, ae[ye], J);
        for (var H in W) {
          var $ = J[H];
          if (r(J, H) && typeof $ != "function")
            return U(Se, Ce, pe, H, Pe($));
          if (!$)
            return new _(
              "Invalid " + Ce + " `" + pe + "` key `" + H + "` supplied to `" + Se + "`.\nBad object: " + JSON.stringify(ae[ye], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(J), null, "  ")
            );
          var D = $(ke, H, Se, Ce, pe + "." + H, n);
          if (D)
            return D;
        }
        return null;
      }
      return w(re);
    }
    function ne(J) {
      switch (typeof J) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !J;
        case "object":
          if (Array.isArray(J))
            return J.every(ne);
          if (J === null || c(J))
            return !0;
          var re = m(J);
          if (re) {
            var ae = re.call(J), ye;
            if (re !== J.entries) {
              for (; !(ye = ae.next()).done; )
                if (!ne(ye.value))
                  return !1;
            } else
              for (; !(ye = ae.next()).done; ) {
                var Se = ye.value;
                if (Se && !ne(Se[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function fe(J, re) {
      return J === "symbol" ? !0 : re ? re["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && re instanceof Symbol : !1;
    }
    function ge(J) {
      var re = typeof J;
      return Array.isArray(J) ? "array" : J instanceof RegExp ? "object" : fe(re, J) ? "symbol" : re;
    }
    function Pe(J) {
      if (typeof J > "u" || J === null)
        return "" + J;
      var re = ge(J);
      if (re === "object") {
        if (J instanceof Date)
          return "date";
        if (J instanceof RegExp)
          return "regexp";
      }
      return re;
    }
    function se(J) {
      var re = Pe(J);
      switch (re) {
        case "array":
        case "object":
          return "an " + re;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + re;
        default:
          return re;
      }
    }
    function me(J) {
      return !J.constructor || !J.constructor.name ? g : J.constructor.name;
    }
    return y.checkPropTypes = o, y.resetWarningCache = o.resetWarningCache, y.PropTypes = y, y;
  }, bp;
}
var _p, db;
function VI() {
  if (db) return _p;
  db = 1;
  var e = lm();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, _p = function() {
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
  }, _p;
}
if (process.env.NODE_ENV !== "production") {
  var GI = sm(), KI = !0;
  Jp.exports = qI()(GI.isElement, KI);
} else
  Jp.exports = VI()();
var tr = Jp.exports;
const l = /* @__PURE__ */ dc(tr);
function ZI(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
var XI = sm();
function eh(e, t) {
  return eh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, eh(e, t);
}
function Jt(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, eh(e, t);
}
var va = function(t, n) {
  if (process.env.NODE_ENV !== "production" && typeof t == "string")
    throw new Error("We do not support refs as string, this is a legacy API and will be likely to be removed in one of the future releases of React.");
  if (typeof t == "function") {
    t(n);
    return;
  }
  t !== null && typeof t == "object" && (t.current = n);
}, Hu = function(t) {
  return (
    // https://github.com/facebook/react/blob/v16.8.2/packages/react-reconciler/src/ReactFiberCommitWork.js#L665
    t !== null && typeof t == "object" && t.hasOwnProperty("current")
  );
};
function fb(e) {
  return e === null || e instanceof Element || e instanceof Text ? !1 : !!(e.type && e.tag);
}
var QI = /* @__PURE__ */ function(e) {
  Jt(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.prevNode = void 0, r;
  }
  var n = t.prototype;
  return n.componentDidMount = function() {
    var o = Qp.findDOMNode(this);
    process.env.NODE_ENV !== "production" && fb(o) && (o = null), this.prevNode = o, va(this.props.innerRef, o);
  }, n.componentDidUpdate = function(o) {
    var s = Qp.findDOMNode(this);
    process.env.NODE_ENV !== "production" && fb(s) && (s = null), this.prevNode !== s && (this.prevNode = s, va(this.props.innerRef, s)), o.innerRef !== this.props.innerRef && va(this.props.innerRef, s);
  }, n.componentWillUnmount = function() {
    va(this.props.innerRef, null), delete this.prevNode;
  }, n.render = function() {
    var o = this.props.children;
    return o;
  }, t;
}(L.Component), JI = /* @__PURE__ */ function(e) {
  Jt(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.currentNode = void 0, r.handleRefOverride = function(c) {
      var d = r.props, p = d.children, h = d.innerRef;
      va(p.ref, c), va(h, c), r.currentNode = c;
    }, r;
  }
  var n = t.prototype;
  return n.componentDidUpdate = function(o) {
    o.innerRef !== this.props.innerRef && va(this.props.innerRef, this.currentNode);
  }, n.componentWillUnmount = function() {
    delete this.currentNode;
  }, n.render = function() {
    var o = this.props.children;
    return /* @__PURE__ */ L.cloneElement(o, {
      ref: this.handleRefOverride
    });
  }, t;
}(L.Component), eA = ["children", "innerRef"], sr = function(t) {
  var n = t.children, r = t.innerRef, o = ZI(t, eA), s = L.Children.only(n), u = XI.isForwardRef(s) ? JI : QI, c = s && o && Object.keys(o).length > 0 ? /* @__PURE__ */ L.cloneElement(s, o) : s;
  return /* @__PURE__ */ L.createElement(u, {
    innerRef: r
  }, c);
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
var tA = Object.prototype, nA = tA.hasOwnProperty;
function rA(e, t) {
  return e != null && nA.call(e, t);
}
var vn = Array.isArray, G_ = typeof global == "object" && global && global.Object === Object && global, aA = typeof self == "object" && self && self.Object === Object && self, no = G_ || aA || Function("return this")(), Ca = no.Symbol, K_ = Object.prototype, oA = K_.hasOwnProperty, iA = K_.toString, fl = Ca ? Ca.toStringTag : void 0;
function sA(e) {
  var t = oA.call(e, fl), n = e[fl];
  try {
    e[fl] = void 0;
    var r = !0;
  } catch {
  }
  var o = iA.call(e);
  return r && (t ? e[fl] = n : delete e[fl]), o;
}
var lA = Object.prototype, cA = lA.toString;
function uA(e) {
  return cA.call(e);
}
var dA = "[object Null]", fA = "[object Undefined]", pb = Ca ? Ca.toStringTag : void 0;
function Pa(e) {
  return e == null ? e === void 0 ? fA : dA : pb && pb in Object(e) ? sA(e) : uA(e);
}
function Br(e) {
  return e != null && typeof e == "object";
}
var pA = "[object Symbol]";
function Ci(e) {
  return typeof e == "symbol" || Br(e) && Pa(e) == pA;
}
var hA = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, mA = /^\w*$/;
function cm(e, t) {
  if (vn(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Ci(e) ? !0 : mA.test(e) || !hA.test(e) || t != null && e in Object(t);
}
function Za(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var gA = "[object AsyncFunction]", vA = "[object Function]", yA = "[object GeneratorFunction]", bA = "[object Proxy]";
function ys(e) {
  if (!Za(e))
    return !1;
  var t = Pa(e);
  return t == vA || t == yA || t == gA || t == bA;
}
var wp = no["__core-js_shared__"], hb = function() {
  var e = /[^.]+$/.exec(wp && wp.keys && wp.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function _A(e) {
  return !!hb && hb in e;
}
var wA = Function.prototype, EA = wA.toString;
function Li(e) {
  if (e != null) {
    try {
      return EA.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var xA = /[\\^$.*+?()[\]{}|]/g, CA = /^\[object .+?Constructor\]$/, OA = Function.prototype, SA = Object.prototype, TA = OA.toString, PA = SA.hasOwnProperty, kA = RegExp(
  "^" + TA.call(PA).replace(xA, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function NA(e) {
  if (!Za(e) || _A(e))
    return !1;
  var t = ys(e) ? kA : CA;
  return t.test(Li(e));
}
function IA(e, t) {
  return e == null ? void 0 : e[t];
}
function Fi(e, t) {
  var n = IA(e, t);
  return NA(n) ? n : void 0;
}
var Ll = Fi(Object, "create");
function AA() {
  this.__data__ = Ll ? Ll(null) : {}, this.size = 0;
}
function RA(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var MA = "__lodash_hash_undefined__", DA = Object.prototype, LA = DA.hasOwnProperty;
function FA(e) {
  var t = this.__data__;
  if (Ll) {
    var n = t[e];
    return n === MA ? void 0 : n;
  }
  return LA.call(t, e) ? t[e] : void 0;
}
var $A = Object.prototype, BA = $A.hasOwnProperty;
function jA(e) {
  var t = this.__data__;
  return Ll ? t[e] !== void 0 : BA.call(t, e);
}
var WA = "__lodash_hash_undefined__";
function UA(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Ll && t === void 0 ? WA : t, this;
}
function Oi(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Oi.prototype.clear = AA;
Oi.prototype.delete = RA;
Oi.prototype.get = FA;
Oi.prototype.has = jA;
Oi.prototype.set = UA;
function zA() {
  this.__data__ = [], this.size = 0;
}
function md(e, t) {
  return e === t || e !== e && t !== t;
}
function gd(e, t) {
  for (var n = e.length; n--; )
    if (md(e[n][0], t))
      return n;
  return -1;
}
var HA = Array.prototype, YA = HA.splice;
function qA(e) {
  var t = this.__data__, n = gd(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : YA.call(t, n, 1), --this.size, !0;
}
function VA(e) {
  var t = this.__data__, n = gd(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function GA(e) {
  return gd(this.__data__, e) > -1;
}
function KA(e, t) {
  var n = this.__data__, r = gd(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function ro(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ro.prototype.clear = zA;
ro.prototype.delete = qA;
ro.prototype.get = VA;
ro.prototype.has = GA;
ro.prototype.set = KA;
var Fl = Fi(no, "Map");
function ZA() {
  this.size = 0, this.__data__ = {
    hash: new Oi(),
    map: new (Fl || ro)(),
    string: new Oi()
  };
}
function XA(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function vd(e, t) {
  var n = e.__data__;
  return XA(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function QA(e) {
  var t = vd(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function JA(e) {
  return vd(this, e).get(e);
}
function e2(e) {
  return vd(this, e).has(e);
}
function t2(e, t) {
  var n = vd(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function ao(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ao.prototype.clear = ZA;
ao.prototype.delete = QA;
ao.prototype.get = JA;
ao.prototype.has = e2;
ao.prototype.set = t2;
var n2 = "Expected a function";
function fc(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(n2);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], s = n.cache;
    if (s.has(o))
      return s.get(o);
    var u = e.apply(this, r);
    return n.cache = s.set(o, u) || s, u;
  };
  return n.cache = new (fc.Cache || ao)(), n;
}
fc.Cache = ao;
var r2 = 500;
function a2(e) {
  var t = fc(e, function(r) {
    return n.size === r2 && n.clear(), r;
  }), n = t.cache;
  return t;
}
var o2 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, i2 = /\\(\\)?/g, s2 = a2(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(o2, function(n, r, o, s) {
    t.push(o ? s.replace(i2, "$1") : r || n);
  }), t;
});
function _i(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var mb = Ca ? Ca.prototype : void 0, gb = mb ? mb.toString : void 0;
function yd(e) {
  if (typeof e == "string")
    return e;
  if (vn(e))
    return _i(e, yd) + "";
  if (Ci(e))
    return gb ? gb.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function $i(e) {
  return e == null ? "" : yd(e);
}
function pc(e, t) {
  return vn(e) ? e : cm(e, t) ? [e] : s2($i(e));
}
var l2 = "[object Arguments]";
function vb(e) {
  return Br(e) && Pa(e) == l2;
}
var Z_ = Object.prototype, c2 = Z_.hasOwnProperty, u2 = Z_.propertyIsEnumerable, bd = vb(/* @__PURE__ */ function() {
  return arguments;
}()) ? vb : function(e) {
  return Br(e) && c2.call(e, "callee") && !u2.call(e, "callee");
}, d2 = 9007199254740991, f2 = /^(?:0|[1-9]\d*)$/;
function _d(e, t) {
  var n = typeof e;
  return t = t ?? d2, !!t && (n == "number" || n != "symbol" && f2.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var p2 = 9007199254740991;
function um(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= p2;
}
function Bs(e) {
  if (typeof e == "string" || Ci(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function X_(e, t, n) {
  t = pc(t, e);
  for (var r = -1, o = t.length, s = !1; ++r < o; ) {
    var u = Bs(t[r]);
    if (!(s = e != null && n(e, u)))
      break;
    e = e[u];
  }
  return s || ++r != o ? s : (o = e == null ? 0 : e.length, !!o && um(o) && _d(u, o) && (vn(e) || bd(e)));
}
function th(e, t) {
  return e != null && X_(e, t, rA);
}
function Q_(e, t, n) {
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
function h2(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function hc(e, t) {
  t = pc(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[Bs(t[n++])];
  return n && n == r ? e : void 0;
}
function wd(e, t, n) {
  var r = -1, o = e.length;
  t < 0 && (t = -t > o ? 0 : o + t), n = n > o ? o : n, n < 0 && (n += o), o = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var s = Array(o); ++r < o; )
    s[r] = e[r + t];
  return s;
}
function m2(e, t) {
  return t.length < 2 ? e : hc(e, wd(t, 0, -1));
}
function g2(e, t, n) {
  t = pc(t, e), e = m2(e, t);
  var r = e == null ? e : e[Bs(h2(t))];
  return r == null ? void 0 : Q_(r, e, n);
}
function Zo(e) {
  return e;
}
var yb = Math.max;
function J_(e, t, n) {
  return t = yb(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, s = yb(r.length - t, 0), u = Array(s); ++o < s; )
      u[o] = r[t + o];
    o = -1;
    for (var c = Array(t + 1); ++o < t; )
      c[o] = r[o];
    return c[t] = n(u), Q_(e, this, c);
  };
}
function e1(e) {
  return function() {
    return e;
  };
}
var Yu = function() {
  try {
    var e = Fi(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), v2 = Yu ? function(e, t) {
  return Yu(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: e1(t),
    writable: !0
  });
} : Zo, y2 = 800, b2 = 16, _2 = Date.now;
function w2(e) {
  var t = 0, n = 0;
  return function() {
    var r = _2(), o = b2 - (r - n);
    if (n = r, o > 0) {
      if (++t >= y2)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var t1 = w2(v2);
function js(e, t) {
  return t1(J_(e, t, Zo), e + "");
}
var Me = js(g2);
function E2(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ds(e) {
  return e === void 0;
}
function x2(e, t, n) {
  return e === e && (n !== void 0 && (e = e <= n ? e : n), e = e >= t ? e : t), e;
}
var C2 = /\s/;
function O2(e) {
  for (var t = e.length; t-- && C2.test(e.charAt(t)); )
    ;
  return t;
}
var S2 = /^\s+/;
function n1(e) {
  return e && e.slice(0, O2(e) + 1).replace(S2, "");
}
var bb = NaN, T2 = /^[-+]0x[0-9a-f]+$/i, P2 = /^0b[01]+$/i, k2 = /^0o[0-7]+$/i, N2 = parseInt;
function r1(e) {
  if (typeof e == "number")
    return e;
  if (Ci(e))
    return bb;
  if (Za(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Za(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = n1(e);
  var n = P2.test(e);
  return n || k2.test(e) ? N2(e.slice(2), n ? 2 : 8) : T2.test(e) ? bb : +e;
}
var _b = 1 / 0, I2 = 17976931348623157e292;
function fs(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = r1(e), e === _b || e === -_b) {
    var t = e < 0 ? -1 : 1;
    return t * I2;
  }
  return e === e ? e : 0;
}
function mc(e) {
  var t = fs(e), n = t % 1;
  return t === t ? n ? t - n : t : 0;
}
function A2(e, t, n) {
  return e = $i(e), n = n == null ? 0 : x2(mc(n), 0, e.length), t = yd(t), e.slice(n, n + t.length) == t;
}
function a1(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, s = []; ++n < r; ) {
    var u = e[n];
    t(u, n, e) && (s[o++] = u);
  }
  return s;
}
function R2(e) {
  return function(t, n, r) {
    for (var o = -1, s = Object(t), u = r(t), c = u.length; c--; ) {
      var d = u[++o];
      if (n(s[d], d, s) === !1)
        break;
    }
    return t;
  };
}
var M2 = R2();
function D2(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
function L2() {
  return !1;
}
var o1 = typeof exports == "object" && exports && !exports.nodeType && exports, wb = o1 && typeof module == "object" && module && !module.nodeType && module, F2 = wb && wb.exports === o1, Eb = F2 ? no.Buffer : void 0, $2 = Eb ? Eb.isBuffer : void 0, qu = $2 || L2, B2 = "[object Arguments]", j2 = "[object Array]", W2 = "[object Boolean]", U2 = "[object Date]", z2 = "[object Error]", H2 = "[object Function]", Y2 = "[object Map]", q2 = "[object Number]", V2 = "[object Object]", G2 = "[object RegExp]", K2 = "[object Set]", Z2 = "[object String]", X2 = "[object WeakMap]", Q2 = "[object ArrayBuffer]", J2 = "[object DataView]", eR = "[object Float32Array]", tR = "[object Float64Array]", nR = "[object Int8Array]", rR = "[object Int16Array]", aR = "[object Int32Array]", oR = "[object Uint8Array]", iR = "[object Uint8ClampedArray]", sR = "[object Uint16Array]", lR = "[object Uint32Array]", tn = {};
tn[eR] = tn[tR] = tn[nR] = tn[rR] = tn[aR] = tn[oR] = tn[iR] = tn[sR] = tn[lR] = !0;
tn[B2] = tn[j2] = tn[Q2] = tn[W2] = tn[J2] = tn[U2] = tn[z2] = tn[H2] = tn[Y2] = tn[q2] = tn[V2] = tn[G2] = tn[K2] = tn[Z2] = tn[X2] = !1;
function cR(e) {
  return Br(e) && um(e.length) && !!tn[Pa(e)];
}
function i1(e) {
  return function(t) {
    return e(t);
  };
}
var s1 = typeof exports == "object" && exports && !exports.nodeType && exports, Tl = s1 && typeof module == "object" && module && !module.nodeType && module, uR = Tl && Tl.exports === s1, Ep = uR && G_.process, xb = function() {
  try {
    var e = Tl && Tl.require && Tl.require("util").types;
    return e || Ep && Ep.binding && Ep.binding("util");
  } catch {
  }
}(), Cb = xb && xb.isTypedArray, dm = Cb ? i1(Cb) : cR, dR = Object.prototype, fR = dR.hasOwnProperty;
function pR(e, t) {
  var n = vn(e), r = !n && bd(e), o = !n && !r && qu(e), s = !n && !r && !o && dm(e), u = n || r || o || s, c = u ? D2(e.length, String) : [], d = c.length;
  for (var p in e)
    fR.call(e, p) && !(u && // Safari 9 has enumerable `arguments.length` in strict mode.
    (p == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (p == "offset" || p == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (p == "buffer" || p == "byteLength" || p == "byteOffset") || // Skip index properties.
    _d(p, d))) && c.push(p);
  return c;
}
var hR = Object.prototype;
function l1(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || hR;
  return e === n;
}
function c1(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var mR = c1(Object.keys, Object), gR = Object.prototype, vR = gR.hasOwnProperty;
function fm(e) {
  if (!l1(e))
    return mR(e);
  var t = [];
  for (var n in Object(e))
    vR.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function oo(e) {
  return e != null && um(e.length) && !ys(e);
}
function Lr(e) {
  return oo(e) ? pR(e) : fm(e);
}
function u1(e, t) {
  return e && M2(e, t, Lr);
}
function yR(e, t) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!oo(n))
      return e(n, r);
    for (var o = n.length, s = -1, u = Object(n); ++s < o && r(u[s], s, u) !== !1; )
      ;
    return n;
  };
}
var Ws = yR(u1);
function bR(e, t) {
  var n = [];
  return Ws(e, function(r, o, s) {
    t(r, o, s) && n.push(r);
  }), n;
}
function _R() {
  this.__data__ = new ro(), this.size = 0;
}
function wR(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function ER(e) {
  return this.__data__.get(e);
}
function xR(e) {
  return this.__data__.has(e);
}
var CR = 200;
function OR(e, t) {
  var n = this.__data__;
  if (n instanceof ro) {
    var r = n.__data__;
    if (!Fl || r.length < CR - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new ao(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Va(e) {
  var t = this.__data__ = new ro(e);
  this.size = t.size;
}
Va.prototype.clear = _R;
Va.prototype.delete = wR;
Va.prototype.get = ER;
Va.prototype.has = xR;
Va.prototype.set = OR;
var SR = "__lodash_hash_undefined__";
function TR(e) {
  return this.__data__.set(e, SR), this;
}
function PR(e) {
  return this.__data__.has(e);
}
function Si(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new ao(); ++t < n; )
    this.add(e[t]);
}
Si.prototype.add = Si.prototype.push = TR;
Si.prototype.has = PR;
function d1(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function $l(e, t) {
  return e.has(t);
}
var kR = 1, NR = 2;
function f1(e, t, n, r, o, s) {
  var u = n & kR, c = e.length, d = t.length;
  if (c != d && !(u && d > c))
    return !1;
  var p = s.get(e), h = s.get(t);
  if (p && h)
    return p == t && h == e;
  var m = -1, g = !0, y = n & NR ? new Si() : void 0;
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
      if (!d1(t, function(N, F) {
        if (!$l(y, F) && (b === N || o(b, N, n, r, s)))
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
var Ob = no.Uint8Array;
function IR(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
function pm(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var AR = 1, RR = 2, MR = "[object Boolean]", DR = "[object Date]", LR = "[object Error]", FR = "[object Map]", $R = "[object Number]", BR = "[object RegExp]", jR = "[object Set]", WR = "[object String]", UR = "[object Symbol]", zR = "[object ArrayBuffer]", HR = "[object DataView]", Sb = Ca ? Ca.prototype : void 0, xp = Sb ? Sb.valueOf : void 0;
function YR(e, t, n, r, o, s, u) {
  switch (n) {
    case HR:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case zR:
      return !(e.byteLength != t.byteLength || !s(new Ob(e), new Ob(t)));
    case MR:
    case DR:
    case $R:
      return md(+e, +t);
    case LR:
      return e.name == t.name && e.message == t.message;
    case BR:
    case WR:
      return e == t + "";
    case FR:
      var c = IR;
    case jR:
      var d = r & AR;
      if (c || (c = pm), e.size != t.size && !d)
        return !1;
      var p = u.get(e);
      if (p)
        return p == t;
      r |= RR, u.set(e, t);
      var h = f1(c(e), c(t), r, o, s, u);
      return u.delete(e), h;
    case UR:
      if (xp)
        return xp.call(e) == xp.call(t);
  }
  return !1;
}
function p1(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
function qR(e, t, n) {
  var r = t(e);
  return vn(e) ? r : p1(r, n(e));
}
function VR() {
  return [];
}
var GR = Object.prototype, KR = GR.propertyIsEnumerable, Tb = Object.getOwnPropertySymbols, ZR = Tb ? function(e) {
  return e == null ? [] : (e = Object(e), a1(Tb(e), function(t) {
    return KR.call(e, t);
  }));
} : VR;
function Pb(e) {
  return qR(e, Lr, ZR);
}
var XR = 1, QR = Object.prototype, JR = QR.hasOwnProperty;
function eM(e, t, n, r, o, s) {
  var u = n & XR, c = Pb(e), d = c.length, p = Pb(t), h = p.length;
  if (d != h && !u)
    return !1;
  for (var m = d; m--; ) {
    var g = c[m];
    if (!(u ? g in t : JR.call(t, g)))
      return !1;
  }
  var y = s.get(e), b = s.get(t);
  if (y && b)
    return y == t && b == e;
  var _ = !0;
  s.set(e, t), s.set(t, e);
  for (var w = u; ++m < d; ) {
    g = c[m];
    var N = e[g], F = t[g];
    if (r)
      var x = u ? r(F, N, g, t, e, s) : r(N, F, g, e, t, s);
    if (!(x === void 0 ? N === F || o(N, F, n, r, s) : x)) {
      _ = !1;
      break;
    }
    w || (w = g == "constructor");
  }
  if (_ && !w) {
    var I = e.constructor, O = t.constructor;
    I != O && "constructor" in e && "constructor" in t && !(typeof I == "function" && I instanceof I && typeof O == "function" && O instanceof O) && (_ = !1);
  }
  return s.delete(e), s.delete(t), _;
}
var nh = Fi(no, "DataView"), rh = Fi(no, "Promise"), ps = Fi(no, "Set"), ah = Fi(no, "WeakMap"), kb = "[object Map]", tM = "[object Object]", Nb = "[object Promise]", Ib = "[object Set]", Ab = "[object WeakMap]", Rb = "[object DataView]", nM = Li(nh), rM = Li(Fl), aM = Li(rh), oM = Li(ps), iM = Li(ah), ha = Pa;
(nh && ha(new nh(new ArrayBuffer(1))) != Rb || Fl && ha(new Fl()) != kb || rh && ha(rh.resolve()) != Nb || ps && ha(new ps()) != Ib || ah && ha(new ah()) != Ab) && (ha = function(e) {
  var t = Pa(e), n = t == tM ? e.constructor : void 0, r = n ? Li(n) : "";
  if (r)
    switch (r) {
      case nM:
        return Rb;
      case rM:
        return kb;
      case aM:
        return Nb;
      case oM:
        return Ib;
      case iM:
        return Ab;
    }
  return t;
});
var sM = 1, Mb = "[object Arguments]", Db = "[object Array]", bu = "[object Object]", lM = Object.prototype, Lb = lM.hasOwnProperty;
function cM(e, t, n, r, o, s) {
  var u = vn(e), c = vn(t), d = u ? Db : ha(e), p = c ? Db : ha(t);
  d = d == Mb ? bu : d, p = p == Mb ? bu : p;
  var h = d == bu, m = p == bu, g = d == p;
  if (g && qu(e)) {
    if (!qu(t))
      return !1;
    u = !0, h = !1;
  }
  if (g && !h)
    return s || (s = new Va()), u || dm(e) ? f1(e, t, n, r, o, s) : YR(e, t, d, n, r, o, s);
  if (!(n & sM)) {
    var y = h && Lb.call(e, "__wrapped__"), b = m && Lb.call(t, "__wrapped__");
    if (y || b) {
      var _ = y ? e.value() : e, w = b ? t.value() : t;
      return s || (s = new Va()), o(_, w, n, r, s);
    }
  }
  return g ? (s || (s = new Va()), eM(e, t, n, r, o, s)) : !1;
}
function Ed(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !Br(e) && !Br(t) ? e !== e && t !== t : cM(e, t, n, r, Ed, o);
}
var uM = 1, dM = 2;
function fM(e, t, n, r) {
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
      var h = new Va(), m;
      if (!(m === void 0 ? Ed(p, d, uM | dM, r, h) : m))
        return !1;
    }
  }
  return !0;
}
function h1(e) {
  return e === e && !Za(e);
}
function pM(e) {
  for (var t = Lr(e), n = t.length; n--; ) {
    var r = t[n], o = e[r];
    t[n] = [r, o, h1(o)];
  }
  return t;
}
function m1(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function hM(e) {
  var t = pM(e);
  return t.length == 1 && t[0][2] ? m1(t[0][0], t[0][1]) : function(n) {
    return n === e || fM(n, e, t);
  };
}
function ya(e, t, n) {
  var r = e == null ? void 0 : hc(e, t);
  return r === void 0 ? n : r;
}
function mM(e, t) {
  return e != null && t in Object(e);
}
function g1(e, t) {
  return e != null && X_(e, t, mM);
}
var gM = 1, vM = 2;
function yM(e, t) {
  return cm(e) && h1(t) ? m1(Bs(e), t) : function(n) {
    var r = ya(n, e);
    return r === void 0 && r === t ? g1(n, e) : Ed(t, r, gM | vM);
  };
}
function v1(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function bM(e) {
  return function(t) {
    return hc(t, e);
  };
}
function _M(e) {
  return cm(e) ? v1(Bs(e)) : bM(e);
}
function Xo(e) {
  return typeof e == "function" ? e : e == null ? Zo : typeof e == "object" ? vn(e) ? yM(e[0], e[1]) : hM(e) : _M(e);
}
function oh(e, t) {
  var n = vn(e) ? a1 : bR;
  return n(e, Xo(t));
}
var wM = "[object Map]", EM = "[object Set]", xM = Object.prototype, CM = xM.hasOwnProperty;
function vi(e) {
  if (e == null)
    return !0;
  if (oo(e) && (vn(e) || typeof e == "string" || typeof e.splice == "function" || qu(e) || dm(e) || bd(e)))
    return !e.length;
  var t = ha(e);
  if (t == wM || t == EM)
    return !e.size;
  if (l1(e))
    return !fm(e).length;
  for (var n in e)
    if (CM.call(e, n))
      return !1;
  return !0;
}
function y1(e, t, n, r) {
  for (var o = e.length, s = n + -1; ++s < o; )
    if (t(e[s], s, e))
      return s;
  return -1;
}
function OM(e) {
  return e !== e;
}
function SM(e, t, n) {
  for (var r = n - 1, o = e.length; ++r < o; )
    if (e[r] === t)
      return r;
  return -1;
}
function xd(e, t, n) {
  return t === t ? SM(e, t, n) : y1(e, OM, n);
}
function hm(e, t) {
  var n = e == null ? 0 : e.length;
  return !!n && xd(e, t, 0) > -1;
}
var TM = Math.min;
function PM(e, t, n) {
  for (var r = hm, o = e[0].length, s = e.length, u = s, c = Array(s), d = 1 / 0, p = []; u--; ) {
    var h = e[u];
    d = TM(h.length, d), c[u] = o >= 120 && h.length >= 120 ? new Si(u && h) : void 0;
  }
  h = e[0];
  var m = -1, g = c[0];
  e:
    for (; ++m < o && p.length < d; ) {
      var y = h[m], b = y;
      if (y = y !== 0 ? y : 0, !(g ? $l(g, b) : r(p, b))) {
        for (u = s; --u; ) {
          var _ = c[u];
          if (!(_ ? $l(_, b) : r(e[u], b)))
            continue e;
        }
        g && g.push(b), p.push(y);
      }
    }
  return p;
}
function Bl(e) {
  return Br(e) && oo(e);
}
function kM(e) {
  return Bl(e) ? e : [];
}
var NM = js(function(e) {
  var t = _i(e, kM);
  return t.length && t[0] === e[0] ? PM(t) : [];
});
function IM(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
    ;
  return e;
}
function AM(e) {
  return typeof e == "function" ? e : Zo;
}
function b1(e, t) {
  var n = vn(e) ? IM : Ws;
  return n(e, AM(t));
}
var ih = function(t) {
  return "default" + (t[0].toUpperCase() + t.slice(1));
}, RM = function(t, n, r, o) {
  var s = n[t];
  if (s !== void 0) return s;
  {
    var u = n[ih(t)];
    if (u !== void 0) return u;
    if (r) {
      var c = r[t];
      if (c !== void 0) return c;
    }
  }
  if (t === "checked") return !1;
  if (t === "value") return n.multiple ? [] : "";
}, Us = /* @__PURE__ */ function(e) {
  Jt(t, e);
  function t() {
    for (var n, r = arguments.length, o = new Array(r), s = 0; s < r; s++)
      o[s] = arguments[s];
    n = e.call.apply(e, [this].concat(o)) || this;
    var u = n.constructor, c = u.autoControlledProps, d = u.getAutoControlledStateFromProps, p = Me(E2(n), "getInitialAutoControlledState", n.props) || {};
    if (process.env.NODE_ENV !== "production") {
      var h = n.constructor, m = h.defaultProps, g = h.name, y = h.propTypes, b = h.getDerivedStateFromProps;
      b !== t.getDerivedStateFromProps && console.error("Auto controlled " + g + " must specify a static getAutoControlledStateFromProps() instead of getDerivedStateFromProps()."), b1(c, function(F) {
        var x = ih(F);
        th(y, x) || console.error(g + ' is missing "' + x + '" propTypes validation for auto controlled prop "' + F + '".'), th(y, F) || console.error(g + ' is missing propTypes validation for auto controlled prop "' + F + '".');
      });
      var _ = NM(c, Lr(m));
      vi(_) || console.error(["Do not set defaultProps for autoControlledProps. You can set defaults by", "setting state in the constructor or using an ES7 property initializer", "(https://babeljs.io/blog/2015/06/07/react-on-es6-plus#property-initializers)", "See " + g + ' props: "' + _ + '".'].join(" "));
      var w = oh(c, function(F) {
        return A2(F, "default");
      });
      vi(w) || console.error(["Do not add default props to autoControlledProps.", "Default props are automatically handled.", "See " + g + ' autoControlledProps: "' + w + '".'].join(" "));
    }
    var N = c.reduce(function(F, x) {
      if (F[x] = RM(x, n.props, p), process.env.NODE_ENV !== "production") {
        var I = ih(x), O = n.constructor.name;
        !ds(n.props[I]) && !ds(n.props[x]) && console.error(O + ' prop "' + x + '" is auto controlled. Specify either ' + I + " or " + x + ", but not both.");
      }
      return F;
    }, {});
    return n.state = ce({}, p, N, {
      autoControlledProps: c,
      getAutoControlledStateFromProps: d
    }), n;
  }
  return t.getDerivedStateFromProps = function(r, o) {
    var s = o.autoControlledProps, u = o.getAutoControlledStateFromProps, c = s.reduce(function(p, h) {
      var m = !ds(r[h]);
      return m && (p[h] = r[h]), p;
    }, {});
    if (u) {
      var d = u(r, ce({}, o, c), o);
      return ce({}, c, d);
    }
    return c;
  }, t.getAutoControlledStateFromProps = function() {
    return null;
  }, t;
}(Q.Component);
function MM(e) {
  return function(t, n, r) {
    var o = Object(t);
    if (!oo(t)) {
      var s = Xo(n);
      t = Lr(t), n = function(c) {
        return s(o[c], c, o);
      };
    }
    var u = e(t, n, r);
    return u > -1 ? o[s ? t[u] : u] : void 0;
  };
}
var DM = Math.max;
function sh(e, t, n) {
  var r = e == null ? 0 : e.length;
  if (!r)
    return -1;
  var o = n == null ? 0 : mc(n);
  return o < 0 && (o = DM(r + o, 0)), y1(e, Xo(t), o);
}
var _1 = MM(sh);
function LM(e, t) {
  var n;
  return Ws(e, function(r, o, s) {
    return n = t(r, o, s), !n;
  }), !!n;
}
function lh(e, t, n) {
  if (!Za(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? oo(n) && _d(t, n.length) : r == "string" && t in n) ? md(n[t], e) : !1;
}
function Pl(e, t, n) {
  var r = vn(e) ? d1 : LM;
  return r(e, Xo(t));
}
var FM = function(t, n) {
  return Pl(im.toArray(t), {
    type: n
  });
}, lt = function(t) {
  return t == null || Array.isArray(t) && t.length === 0;
}, Nu = {
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
function Fb(e) {
  var t = typeof e;
  return t === "string" || t === "number" ? Nu[e] || e : "";
}
var V = function(t, n) {
  return t && n;
}, Vn = function(t, n) {
  return t && t !== !0 && t + " " + n;
}, nn = function(t, n) {
  return t && (t === !0 ? n : t + " " + n);
}, Vu = function(t, n) {
  return !t || t === !0 ? null : t.replace("large screen", "large-screen").replace(/ vertically/g, "-vertically").split(" ").map(function(r) {
    return r.replace("-", " ") + " " + n;
  }).join(" ");
}, Bi = function(t) {
  return t === "justified" ? "justified" : Vn(t, "aligned");
}, Qo = function(t) {
  return Vn(t, "aligned");
}, Yn = function(t, n, r) {
  if (n === void 0 && (n = ""), r === void 0 && (r = !1), r && t === "equal")
    return "equal width";
  var o = typeof t;
  return (o === "string" || o === "number") && n ? Fb(t) + " " + n : Fb(t);
}, $M = 200;
function w1(e, t, n, r) {
  var o = -1, s = hm, u = !0, c = e.length, d = [], p = t.length;
  if (!c)
    return d;
  t.length >= $M && (s = $l, u = !1, t = new Si(t));
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
var $b = Ca ? Ca.isConcatSpreadable : void 0;
function BM(e) {
  return vn(e) || bd(e) || !!($b && e && e[$b]);
}
function Cd(e, t, n, r, o) {
  var s = -1, u = e.length;
  for (n || (n = BM), o || (o = []); ++s < u; ) {
    var c = e[s];
    n(c) ? p1(o, c) : r || (o[o.length] = c);
  }
  return o;
}
var ch = js(function(e, t) {
  return Bl(e) ? w1(e, Cd(t, 1, Bl, !0)) : [];
});
function E1(e, t, n) {
  var r = e.length;
  return n = n === void 0 ? r : n, !t && n >= r ? e : wd(e, t, n);
}
function jM(e, t) {
  for (var n = e.length; n-- && xd(t, e[n], 0) > -1; )
    ;
  return n;
}
function WM(e, t) {
  for (var n = -1, r = e.length; ++n < r && xd(t, e[n], 0) > -1; )
    ;
  return n;
}
function UM(e) {
  return e.split("");
}
var zM = "\\ud800-\\udfff", HM = "\\u0300-\\u036f", YM = "\\ufe20-\\ufe2f", qM = "\\u20d0-\\u20ff", VM = HM + YM + qM, GM = "\\ufe0e\\ufe0f", KM = "\\u200d", ZM = RegExp("[" + KM + zM + VM + GM + "]");
function mm(e) {
  return ZM.test(e);
}
var x1 = "\\ud800-\\udfff", XM = "\\u0300-\\u036f", QM = "\\ufe20-\\ufe2f", JM = "\\u20d0-\\u20ff", eD = XM + QM + JM, tD = "\\ufe0e\\ufe0f", nD = "[" + x1 + "]", uh = "[" + eD + "]", dh = "\\ud83c[\\udffb-\\udfff]", rD = "(?:" + uh + "|" + dh + ")", C1 = "[^" + x1 + "]", O1 = "(?:\\ud83c[\\udde6-\\uddff]){2}", S1 = "[\\ud800-\\udbff][\\udc00-\\udfff]", aD = "\\u200d", T1 = rD + "?", P1 = "[" + tD + "]?", oD = "(?:" + aD + "(?:" + [C1, O1, S1].join("|") + ")" + P1 + T1 + ")*", iD = P1 + T1 + oD, sD = "(?:" + [C1 + uh + "?", uh, O1, S1, nD].join("|") + ")", lD = RegExp(dh + "(?=" + dh + ")|" + sD + iD, "g");
function cD(e) {
  return e.match(lD) || [];
}
function fh(e) {
  return mm(e) ? cD(e) : UM(e);
}
function uD(e, t, n) {
  if (e = $i(e), e && t === void 0)
    return n1(e);
  if (!e || !(t = yd(t)))
    return e;
  var r = fh(e), o = fh(t), s = WM(r, o), u = jM(r, o) + 1;
  return E1(r, s, u).join("");
}
function dD(e, t, n) {
  t == "__proto__" && Yu ? Yu(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
var fD = Object.prototype, pD = fD.hasOwnProperty;
function hD(e, t, n) {
  var r = e[t];
  (!(pD.call(e, t) && md(r, n)) || n === void 0 && !(t in e)) && dD(e, t, n);
}
function k1(e, t, n, r) {
  if (!Za(e))
    return e;
  t = pc(t, e);
  for (var o = -1, s = t.length, u = s - 1, c = e; c != null && ++o < s; ) {
    var d = Bs(t[o]), p = n;
    if (d === "__proto__" || d === "constructor" || d === "prototype")
      return e;
    if (o != u) {
      var h = c[d];
      p = void 0, p === void 0 && (p = Za(h) ? h : _d(t[o + 1]) ? [] : {});
    }
    hD(c, d, p), c = c[d];
  }
  return e;
}
function mD(e, t, n) {
  for (var r = -1, o = t.length, s = {}; ++r < o; ) {
    var u = t[r], c = hc(e, u);
    n(c, u) && k1(s, pc(u, e), c);
  }
  return s;
}
function gD(e, t) {
  return mD(e, t, function(n, r) {
    return g1(e, r);
  });
}
function vD(e) {
  var t = e == null ? 0 : e.length;
  return t ? Cd(e) : [];
}
function yD(e) {
  return t1(J_(e, void 0, vD), e + "");
}
var Od = yD(function(e, t) {
  return e == null ? {} : gD(e, t);
}), bD = c1(Object.getPrototypeOf, Object), _D = "[object Object]", wD = Function.prototype, ED = Object.prototype, N1 = wD.toString, xD = ED.hasOwnProperty, CD = N1.call(Object);
function Sd(e) {
  if (!Br(e) || Pa(e) != _D)
    return !1;
  var t = bD(e);
  if (t === null)
    return !0;
  var n = xD.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && N1.call(n) == CD;
}
function xt(e) {
  return e == null;
}
function OD(e, t, n) {
  for (var r = -1, o = e.length; ++r < o; ) {
    var s = e[r], u = t(s);
    if (u != null && (c === void 0 ? u === u && !Ci(u) : n(u, c)))
      var c = u, d = s;
  }
  return d;
}
function SD(e, t) {
  return e < t;
}
function Bb(e) {
  return e && e.length ? OD(e, Zo, SD) : void 0;
}
function TD(e, t) {
  for (var n, r = -1, o = e.length; ++r < o; ) {
    var s = t(e[r]);
    s !== void 0 && (n = n === void 0 ? s : n + s);
  }
  return n;
}
function jb(e) {
  return e && e.length ? TD(e, Zo) : 0;
}
function I1(e, t) {
  var n = -1, r = oo(e) ? Array(e.length) : [];
  return Ws(e, function(o, s, u) {
    r[++n] = t(o, s, u);
  }), r;
}
function wn(e, t) {
  var n = vn(e) ? _i : I1;
  return n(e, Xo(t));
}
function PD(e, t) {
  var n = e.length;
  for (e.sort(t); n--; )
    e[n] = e[n].value;
  return e;
}
function kD(e, t) {
  if (e !== t) {
    var n = e !== void 0, r = e === null, o = e === e, s = Ci(e), u = t !== void 0, c = t === null, d = t === t, p = Ci(t);
    if (!c && !p && !s && e > t || s && u && d && !c && !p || r && u && d || !n && d || !o)
      return 1;
    if (!r && !s && !p && e < t || p && n && o && !r && !s || c && n && o || !u && o || !d)
      return -1;
  }
  return 0;
}
function ND(e, t, n) {
  for (var r = -1, o = e.criteria, s = t.criteria, u = o.length, c = n.length; ++r < u; ) {
    var d = kD(o[r], s[r]);
    if (d) {
      if (r >= c)
        return d;
      var p = n[r];
      return d * (p == "desc" ? -1 : 1);
    }
  }
  return e.index - t.index;
}
function ID(e, t, n) {
  t.length ? t = _i(t, function(s) {
    return vn(s) ? function(u) {
      return hc(u, s.length === 1 ? s[0] : s);
    } : s;
  }) : t = [Zo];
  var r = -1;
  t = _i(t, i1(Xo));
  var o = I1(e, function(s, u, c) {
    var d = _i(t, function(p) {
      return p(s);
    });
    return { criteria: d, index: ++r, value: s };
  });
  return PD(o, function(s, u) {
    return ND(s, u, n);
  });
}
var AD = js(function(e, t) {
  if (e == null)
    return [];
  var n = t.length;
  return n > 1 && lh(e, t[0], t[1]) ? t = [] : n > 2 && lh(t[0], t[1], t[2]) && (t = [t[0]]), ID(e, Cd(t), []);
});
function RD(e, t, n) {
  return e && e.length ? (t = t === void 0 ? 1 : mc(t), wd(e, 0, t < 0 ? 0 : t)) : [];
}
var ph = function() {
  return 0;
};
if (process.env.NODE_ENV !== "production") {
  var Cp = [], Wb = [];
  ph = function(t, n) {
    if (t === n) return 0;
    var r = t.length, o = n.length;
    if (r === 0) return o;
    if (o === 0) return r;
    for (var s, u, c, d, p = 0, h = 0; p < r; )
      Wb[p] = t.charCodeAt(p), Cp[p] = ++p;
    for (; h < o; )
      for (s = n.charCodeAt(h), c = h++, u = h, p = 0; p < r; p++)
        d = s === Wb[p] ? c : c + 1, c = Cp[p], u = Cp[p] = c > u ? d > u ? u + 1 : d : d > c ? c + 1 : d;
    return u;
  };
}
var MD = function() {
  var t;
  return (t = Object.prototype.toString).call.apply(t, arguments);
}, DD = function(t, n) {
  if (t[n] !== void 0 && !(typeof Element > "u") && !(t[n] instanceof Element))
    return new Error('Invalid prop "' + n + '" supplied, expected a DOM node.');
}, A1 = function(t) {
  if (!Array.isArray(t))
    throw new Error("Invalid argument supplied to suggest, expected an instance of array.");
  var n = fc(function(o) {
    var s = o.split(" ");
    return RD(AD(wn(t, function(u) {
      var c = u.split(" "), d = jb(wn(wn(s, function(h) {
        return wn(c, function(m) {
          return ph(h, m);
        });
      }), Bb)), p = jb(wn(wn(c, function(h) {
        return wn(s, function(m) {
          return ph(h, m);
        });
      }), Bb));
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
    if (!(xt(n[r]) || n[r] === !1)) {
      var s = t.reduce(function(u, c) {
        return !xt(n[c]) && n[c] !== !1 ? [].concat(u, [c]) : u;
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
        throw new Error('every() argument "validators" should contain functions, found: ' + MD(p) + ".");
      var h = p.apply(void 0, [n, r, o].concat(u));
      h && d.push(h);
    }), d[0];
  };
}, R1 = function(t, n) {
  return function(r, o, s) {
    for (var u = arguments.length, c = new Array(u > 3 ? u - 3 : 0), d = 3; d < u; d++)
      c[d - 3] = arguments[d];
    if (!Sd(t))
      throw new Error(["Invalid argument supplied to givenProps, expected an object.", "See `" + o + "` prop in `" + s + "`."].join(" "));
    if (typeof n != "function")
      throw new Error(["Invalid argument supplied to givenProps, expected a function.", "See `" + o + "` prop in `" + s + "`."].join(" "));
    var p = Lr(t).every(function(g) {
      var y = t[g];
      return typeof y == "function" ? !y.apply(void 0, [r, g, s].concat(c)) : y === r[o];
    });
    if (p) {
      var h = n.apply(void 0, [r, o, s].concat(c));
      if (h) {
        var m = "{ " + Lr(Od(Lr(t), r)).map(function(g) {
          var y = r[g], b = y;
          return typeof y == "string" ? b = '"' + y + '"' : Array.isArray(y) ? b = "[" + y.join(", ") + "]" : Za(y) && (b = "{...}"), g + ": " + b;
        }).join(", ") + " }";
        return h.message = "Given props " + m + ": " + h.message, h;
      }
    }
  };
}, To = function(t) {
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
}, Gu = function(t) {
  return function(n, r, o) {
    if (!Array.isArray(t))
      throw new Error(["Invalid argument supplied to some, expected an instance of array.", "See `" + r + "` prop in `" + o + "`."].join(" "));
    var s = n[r];
    if (!(xt(s) || s === !1)) {
      var u = s.replace("large screen", "large-screen").replace(/ vertically/g, "-vertically").split(" ").map(function(d) {
        return uD(d).replace("-", " ");
      }), c = ch(u, t);
      if (c.length > 0)
        return new Error("`" + r + "` prop in `" + o + "` has invalid values: `" + c.join("`, `") + "`.");
    }
  };
}, St = function() {
  return Rt([Ht(["children"]), l.node]).apply(void 0, arguments);
}, _t = function() {
  return Rt([Ht(["children"]), l.oneOfType([l.func, l.node, l.object, l.arrayOf(l.oneOfType([l.node, l.object]))])]).apply(void 0, arguments);
}, gc = function() {
  return Rt([Ht(["children"]), l.arrayOf(_t)]).apply(void 0, arguments);
}, gm = l.shape({
  current: l.object
}), M1 = l.oneOfType([l.func, gm]), vm = { exports: {} }, pl = {}, Op = { exports: {} };
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
var Ub;
function D1() {
  return Ub || (Ub = 1, function(e) {
    (function() {
      var t = !!(typeof window < "u" && window.document && window.document.createElement), n = {
        canUseDOM: t,
        canUseWorkers: typeof Worker < "u",
        canUseEventListeners: t && !!(window.addEventListener || window.attachEvent),
        canUseViewport: t && !!window.screen
      };
      e.exports ? e.exports = n : window.ExecutionEnvironment = n;
    })();
  }(Op)), Op.exports;
}
var zb;
function LD() {
  if (zb) return pl;
  zb = 1, Object.defineProperty(pl, "__esModule", { value: !0 });
  var e = D1(), t = Q;
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
      var R = C[T];
      R.enumerable = R.enumerable || !1, R.configurable = !0, "value" in R && (R.writable = !0), Object.defineProperty(S, R.key, R);
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
    return (p = Object.setPrototypeOf || function(T, R) {
      return T.__proto__ = R, T;
    })(S, C);
  }
  function h(S) {
    if (S === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return S;
  }
  function m(S, C) {
    return !C || typeof C != "object" && typeof C != "function" ? h(S) : C;
  }
  var g = function() {
    function S(C) {
      r(this, S), u(this, "handlers", void 0), this.handlers = C.slice(0);
    }
    return s(S, [{ key: "addHandlers", value: function(C) {
      for (var T = this.handlers.slice(0), R = C.length, B = 0; B < R; B += 1) T.push(C[B]);
      return new S(T);
    } }, { key: "dispatchEvent", value: function(C, T) {
      var R = this.handlers.length - 1;
      if (T) {
        for (var B = R; B >= 0; B -= 1) this.handlers[B].called || (this.handlers[B].called = !0, this.handlers[B](C));
        for (var U = R; U >= 0; U -= 1) this.handlers[U].called = !1;
      } else
        (0, this.handlers[R])(C);
    } }, { key: "hasHandlers", value: function() {
      return this.handlers.length > 0;
    } }, { key: "removeHandlers", value: function(C) {
      for (var T = [], R = this.handlers.length, B = 0; B < R; B += 1) {
        var U = this.handlers[B];
        C.indexOf(U) === -1 && T.push(U);
      }
      return new S(T);
    } }]), S;
  }();
  function y(S) {
    var C = /* @__PURE__ */ new Map();
    return S.forEach(function(T, R) {
      C.set(R, T);
    }), C;
  }
  function b(S) {
    return Array.isArray(S) ? S : [S];
  }
  var _ = function(S) {
    return S !== null && n(S) === "object" && S.hasOwnProperty("current");
  };
  function w(S) {
    return S === "document" ? document : S === "window" ? window : _(S) ? S.current || document : S || document;
  }
  var N = function() {
    function S(C, T) {
      r(this, S), u(this, "handlerSets", void 0), u(this, "poolName", void 0), this.handlerSets = T, this.poolName = C;
    }
    return s(S, [{ key: "addHandlers", value: function(C, T) {
      var R = y(this.handlerSets);
      if (R.has(C)) {
        var B = R.get(C);
        R.set(C, B.addHandlers(T));
      } else R.set(C, new g(T));
      return new S(this.poolName, R);
    } }, { key: "dispatchEvent", value: function(C, T) {
      var R = this.handlerSets.get(C), B = this.poolName === "default";
      R && R.dispatchEvent(T, B);
    } }, { key: "hasHandlers", value: function(C) {
      if (!C) return this.handlerSets.size > 0;
      var T = this.handlerSets.get(C);
      return !!T && T.hasHandlers();
    } }, { key: "removeHandlers", value: function(C, T) {
      var R = y(this.handlerSets);
      if (!R.has(C)) return new S(this.poolName, R);
      var B = R.get(C).removeHandlers(T);
      return B.hasHandlers() ? R.set(C, B) : R.delete(C), new S(this.poolName, R);
    } }]), S;
  }();
  u(N, "createByType", function(S, C, T) {
    var R = /* @__PURE__ */ new Map();
    return R.set(C, new g(T)), new N(S, R);
  });
  var F = function() {
    function S(C) {
      var T = this;
      r(this, S), u(this, "handlers", /* @__PURE__ */ new Map()), u(this, "pools", /* @__PURE__ */ new Map()), u(this, "target", void 0), u(this, "createEmitter", function(R) {
        return function(B) {
          T.pools.forEach(function(U) {
            U.dispatchEvent(R, B);
          });
        };
      }), this.target = C;
    }
    return s(S, [{ key: "addHandlers", value: function(C, T, R) {
      if (this.pools.has(C)) {
        var B = this.pools.get(C);
        this.pools.set(C, B.addHandlers(T, R));
      } else this.pools.set(C, N.createByType(C, T, R));
      this.handlers.has(T) || this.addTargetHandler(T);
    } }, { key: "hasHandlers", value: function() {
      return this.handlers.size > 0;
    } }, { key: "removeHandlers", value: function(C, T, R) {
      if (this.pools.has(C)) {
        var B = this.pools.get(C).removeHandlers(T, R);
        B.hasHandlers() ? this.pools.set(C, B) : this.pools.delete(C);
        var U = !1;
        this.pools.forEach(function(te) {
          return U = U || te.hasHandlers(T);
        }), U || this.removeTargetHandler(T);
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
        var R = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], B = w(T);
        if (C.targets.has(B)) return C.targets.get(B);
        if (!R) return null;
        var U = new F(B);
        return C.targets.set(B, U), U;
      }), u(this, "removeTarget", function(T) {
        C.targets.delete(w(T));
      });
    }
    return s(S, [{ key: "sub", value: function(C, T) {
      var R = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (e.canUseDOM) {
        var B = R.target, U = B === void 0 ? document : B, te = R.pool, z = te === void 0 ? "default" : te;
        this.getTarget(U).addHandlers(z, C, b(T));
      }
    } }, { key: "unsub", value: function(C, T) {
      var R = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (e.canUseDOM) {
        var B = R.target, U = B === void 0 ? document : B, te = R.pool, z = te === void 0 ? "default" : te, ne = this.getTarget(U, !1);
        ne && (ne.removeHandlers(z, C, b(T)), ne.hasHandlers() || this.removeTarget(U));
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
      var R = T.name, B = T.on, U = T.pool, te = T.target;
      I.sub(R, B, { pool: U, target: te });
    } }, { key: "unsubscribe", value: function(T) {
      var R = T.name, B = T.on, U = T.pool, te = T.target;
      I.unsub(R, B, { pool: U, target: te });
    } }, { key: "render", value: function() {
      return null;
    } }]), C;
  }();
  return u(O, "defaultProps", { pool: "default", target: "document" }), O.propTypes = {}, pl.instance = I, pl.default = O, pl;
}
var hl = {}, Hb;
function FD() {
  if (Hb) return hl;
  Hb = 1, Object.defineProperty(hl, "__esModule", { value: !0 });
  var e = D1(), t = tr, n = Q;
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
    for (var R = 0; R < T.length; R++) {
      var B = T[R];
      B.enumerable = B.enumerable || !1, B.configurable = !0, "value" in B && (B.writable = !0), Object.defineProperty(C, B.key, B);
    }
  }
  function u(C, T, R) {
    return T && s(C.prototype, T), C;
  }
  function c(C, T, R) {
    return T in C ? Object.defineProperty(C, T, {
      value: R,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : C[T] = R, C;
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
    return p = Object.setPrototypeOf ? Object.getPrototypeOf : function(R) {
      return R.__proto__ || Object.getPrototypeOf(R);
    }, p(C);
  }
  function h(C, T) {
    return h = Object.setPrototypeOf || function(B, U) {
      return B.__proto__ = U, B;
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
      value: function(R) {
        for (var B = this.handlers.slice(0), U = R.length, te = 0; te < U; te += 1)
          B.push(R[te]);
        return new C(B);
      }
      /**
       * @see https://jsperf.com/suir-eventset-dispatchsingle
       * @see https://jsperf.com/suir-eventset-dispatchmultiple2
       */
    }, {
      key: "dispatchEvent",
      value: function(R, B) {
        var U = this.handlers.length - 1;
        if (!B) {
          var te = this.handlers[U];
          te(R);
          return;
        }
        for (var z = U; z >= 0; z -= 1)
          this.handlers[z].called || (this.handlers[z].called = !0, this.handlers[z](R));
        for (var ne = U; ne >= 0; ne -= 1)
          this.handlers[ne].called = !1;
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
      value: function(R) {
        for (var B = [], U = this.handlers.length, te = 0; te < U; te += 1) {
          var z = this.handlers[te];
          R.indexOf(z) === -1 && B.push(z);
        }
        return new C(B);
      }
    }]), C;
  }();
  function b(C) {
    var T = /* @__PURE__ */ new Map();
    return C.forEach(function(R, B) {
      T.set(B, R);
    }), T;
  }
  function _(C) {
    return Array.isArray(C) ? C : [C];
  }
  var w = function(T) {
    return T !== null && r(T) === "object" && T.hasOwnProperty("current");
  };
  function N(C) {
    return C === "document" ? document : C === "window" ? window : w(C) ? C.current || document : C || document;
  }
  var F = /* @__PURE__ */ function() {
    function C(T, R) {
      o(this, C), c(this, "handlerSets", void 0), c(this, "poolName", void 0), this.handlerSets = R, this.poolName = T;
    }
    return u(C, [{
      key: "addHandlers",
      value: function(R, B) {
        var U = b(this.handlerSets);
        if (U.has(R)) {
          var te = U.get(R);
          U.set(R, te.addHandlers(B));
        } else
          U.set(R, new y(B));
        return new C(this.poolName, U);
      }
    }, {
      key: "dispatchEvent",
      value: function(R, B) {
        var U = this.handlerSets.get(R), te = this.poolName === "default";
        U && U.dispatchEvent(B, te);
      }
    }, {
      key: "hasHandlers",
      value: function(R) {
        if (!R)
          return this.handlerSets.size > 0;
        var B = this.handlerSets.get(R);
        return B ? B.hasHandlers() : !1;
      }
    }, {
      key: "removeHandlers",
      value: function(R, B) {
        var U = b(this.handlerSets);
        if (!U.has(R))
          return new C(this.poolName, U);
        var te = U.get(R), z = te.removeHandlers(B);
        return z.hasHandlers() ? U.set(R, z) : U.delete(R), new C(this.poolName, U);
      }
    }]), C;
  }();
  c(F, "createByType", function(C, T, R) {
    var B = /* @__PURE__ */ new Map();
    return B.set(T, new y(R)), new F(C, B);
  });
  var x = /* @__PURE__ */ function() {
    function C(T) {
      var R = this;
      o(this, C), c(this, "handlers", /* @__PURE__ */ new Map()), c(this, "pools", /* @__PURE__ */ new Map()), c(this, "target", void 0), c(this, "createEmitter", function(B) {
        return function(U) {
          R.pools.forEach(function(te) {
            te.dispatchEvent(B, U);
          });
        };
      }), this.target = T;
    }
    return u(C, [{
      key: "addHandlers",
      value: function(R, B, U) {
        if (this.pools.has(R)) {
          var te = this.pools.get(R);
          this.pools.set(R, te.addHandlers(B, U));
        } else
          this.pools.set(R, F.createByType(R, B, U));
        this.handlers.has(B) || this.addTargetHandler(B);
      }
    }, {
      key: "hasHandlers",
      value: function() {
        return this.handlers.size > 0;
      }
    }, {
      key: "removeHandlers",
      value: function(R, B, U) {
        if (this.pools.has(R)) {
          var te = this.pools.get(R), z = te.removeHandlers(B, U);
          z.hasHandlers() ? this.pools.set(R, z) : this.pools.delete(R);
          var ne = !1;
          this.pools.forEach(function(fe) {
            return ne = ne || fe.hasHandlers(B);
          }), ne || this.removeTargetHandler(B);
        }
      }
    }, {
      key: "addTargetHandler",
      value: function(R) {
        var B = this.createEmitter(R);
        this.handlers.set(R, B), this.target.addEventListener(R, B, !0);
      }
    }, {
      key: "removeTargetHandler",
      value: function(R) {
        this.handlers.has(R) && (this.target.removeEventListener(R, this.handlers.get(R), !0), this.handlers.delete(R));
      }
    }]), C;
  }(), I = /* @__PURE__ */ function() {
    function C() {
      var T = this;
      o(this, C), c(this, "targets", /* @__PURE__ */ new Map()), c(this, "getTarget", function(R) {
        var B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, U = N(R);
        if (T.targets.has(U))
          return T.targets.get(U);
        if (!B) return null;
        var te = new x(U);
        return T.targets.set(U, te), te;
      }), c(this, "removeTarget", function(R) {
        T.targets.delete(N(R));
      });
    }
    return u(C, [{
      key: "sub",
      value: function(R, B) {
        var U = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (e.canUseDOM) {
          var te = U.target, z = te === void 0 ? document : te, ne = U.pool, fe = ne === void 0 ? "default" : ne, ge = this.getTarget(z);
          ge.addHandlers(fe, R, _(B));
        }
      }
    }, {
      key: "unsub",
      value: function(R, B) {
        var U = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (e.canUseDOM) {
          var te = U.target, z = te === void 0 ? document : te, ne = U.pool, fe = ne === void 0 ? "default" : ne, ge = this.getTarget(z, !1);
          ge && (ge.removeHandlers(fe, R, _(B)), ge.hasHandlers() || this.removeTarget(z));
        }
      }
    }]), C;
  }(), O = new I(), S = /* @__PURE__ */ function(C) {
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
        var U = B.name, te = B.on, z = B.pool, ne = B.target;
        O.sub(U, te, {
          pool: z,
          target: ne
        });
      }
    }, {
      key: "unsubscribe",
      value: function(B) {
        var U = B.name, te = B.on, z = B.pool, ne = B.target;
        O.unsub(U, te, {
          pool: z,
          target: ne
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
  }, hl.instance = O, hl.default = S, hl;
}
var Ku;
process.env.NODE_ENV === "production" ? Ku = LD() : Ku = FD();
vm.exports = Ku.default;
var Cl = vm.exports.instance = Ku.instance, $D = vm.exports;
const Ha = /* @__PURE__ */ dc($D);
function L1() {
}
var BD = 1 / 0, jD = ps && 1 / pm(new ps([, -0]))[1] == BD ? function(e) {
  return new ps(e);
} : L1, WD = 200;
function F1(e, t, n) {
  var r = -1, o = hm, s = e.length, u = !0, c = [], d = c;
  if (s >= WD) {
    var p = jD(e);
    if (p)
      return pm(p);
    u = !1, o = $l, d = new Si();
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
function Td(e) {
  return e && e.length ? F1(e) : [];
}
var UD = "[object Number]";
function zD(e) {
  return typeof e == "number" || Br(e) && Pa(e) == UD;
}
var HD = "[object String]";
function ym(e) {
  return typeof e == "string" || !vn(e) && Br(e) && Pa(e) == HD;
}
var YD = "[object Boolean]";
function qD(e) {
  return e === !0 || e === !1 || Br(e) && Pa(e) == YD;
}
function $1(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = $1(e[t])) && (r && (r += " "), r += n);
  else for (t in e) e[t] && (r && (r += " "), r += t);
  return r;
}
function qe() {
  for (var e, t, n = 0, r = ""; n < arguments.length; ) (e = arguments[n++]) && (t = $1(e)) && (r && (r += " "), r += t);
  return r;
}
var Yb = {};
function hh(e, t, n, r) {
  if (r === void 0 && (r = {}), typeof e != "function" && typeof e != "string")
    throw new Error("createShorthand() Component must be a string or function.");
  if (xt(n) || qD(n))
    return null;
  var o = ym(n), s = zD(n), u = ys(n), c = /* @__PURE__ */ L.isValidElement(n), d = Sd(n), p = o || s || vn(n);
  if (!u && !c && !d && !p)
    return process.env.NODE_ENV !== "production" && console.error(["Shorthand value must be a string|number|array|object|ReactElement|function.", " Use null|undefined|boolean for none", " Received " + typeof n + "."].join("")), null;
  var h = r, m = h.defaultProps, g = m === void 0 ? {} : m, y = c && n.props || d && n || p && t(n), b = r, _ = b.overrideProps, w = _ === void 0 ? {} : _;
  w = ys(w) ? w(ce({}, g, y)) : w;
  var N = ce({}, g, y, w);
  if (g.className || w.className || y.className) {
    var F = qe(g.className, w.className, y.className);
    N.className = Td(F.split(" ")).join(" ");
  }
  if ((g.style || w.style || y.style) && (N.style = ce({}, g.style, y.style, w.style)), xt(N.key)) {
    var x = N.childKey, I = r, O = I.autoGenerateKey, S = O === void 0 ? !0 : O;
    xt(x) ? S && (o || s) && (N.key = n) : (N.key = typeof x == "function" ? x(N) : x, delete N.childKey);
  }
  if (c)
    return /* @__PURE__ */ L.cloneElement(n, N);
  if (typeof N.children == "function")
    return N.children(e, ce({}, N, {
      children: void 0
    }));
  if (p || d)
    return /* @__PURE__ */ L.createElement(e, N);
  if (u)
    return process.env.NODE_ENV !== "production" && (Yb[e] || (Yb[e] = !0, console.warn('Warning: There is a deprecated shorthand function usage for "' + e + '". It is deprecated and will be removed in v3 release. Please follow our upgrade guide: https://github.com/Semantic-Org/Semantic-UI-React/pull/4029'))), n(e, N, N.children);
}
function qt(e, t) {
  if (typeof e != "function" && typeof e != "string")
    throw new Error("createShorthandFactory() Component must be a string or function.");
  return function(n, r) {
    return hh(e, t, n, r);
  };
}
var VD = /* @__PURE__ */ qt("div", function(e) {
  return {
    children: e
  };
}), GD = /* @__PURE__ */ qt("input", function(e) {
  return {
    type: e
  };
}), mh = /* @__PURE__ */ qt("label", function(e) {
  return {
    children: e
  };
}), He = function(t, n) {
  var r = t.handledProps, o = r === void 0 ? [] : r;
  return Object.keys(n).reduce(function(s, u) {
    return u === "childKey" || o.indexOf(u) === -1 && (s[u] = n[u]), s;
  }, {});
};
function Ke(e, t, n) {
  var r = e.defaultProps, o = r === void 0 ? {} : r;
  if (t.as && t.as !== o.as) return t.as;
  if (n) {
    var s = n();
    if (s) return s;
  }
  return t.href ? "a" : o.as || "div";
}
function KD(e, t) {
  return _i(t, function(n) {
    return e[n];
  });
}
function B1(e) {
  return e == null ? [] : KD(e, Lr(e));
}
var ZD = Math.max;
function ba(e, t, n, r) {
  e = oo(e) ? e : B1(e), n = n ? mc(n) : 0;
  var o = e.length;
  return n < 0 && (n = ZD(o + n, 0)), ym(e) ? n <= o && e.indexOf(t, n) > -1 : !!o && xd(e, t, n) > -1;
}
var j1 = [
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
], XD = [
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
], QD = [].concat(j1, XD), JD = ["alt", "height", "src", "srcSet", "width", "loading"], bm = function(t, n) {
  n === void 0 && (n = {});
  var r = n, o = r.htmlProps, s = o === void 0 ? QD : o, u = r.includeAria, c = u === void 0 ? !0 : u, d = {}, p = {};
  return b1(t, function(h, m) {
    var g = c && (/^aria-.*$/.test(m) || m === "role"), y = ba(s, m) || g ? d : p;
    y[m] = h;
  }), [d, p];
}, eL = typeof document == "object" && document !== null, tL = typeof window == "object" && window !== null && window.self === window, wi = function e() {
  return xt(e.override) ? eL && tL : e.override;
}, nL = Math.max, rL = Math.min;
function aL(e, t, n) {
  return e >= rL(t, n) && e < nL(t, n);
}
function qb(e, t, n) {
  return t = fs(t), n === void 0 ? (n = t, t = 0) : n = fs(n), e = r1(e), aL(e, t, n);
}
function oL(e) {
  return e && e.length ? e[0] : void 0;
}
var No = function(t, n) {
  if (Pl([n, t], xt)) return !1;
  if (n.target && (Me(n.target, "setAttribute", "data-suir-click-target", !0), document.querySelector("[data-suir-click-target=true]")))
    return Me(n.target, "removeAttribute", "data-suir-click-target"), t.contains(n.target);
  var r = n.clientX, o = n.clientY;
  if (Pl([r, o], xt)) return !1;
  var s = t.getClientRects();
  if (!t.offsetWidth || !t.offsetHeight || !s || !s.length) return !1;
  var u = oL(s), c = u.top, d = u.bottom, p = u.left, h = u.right;
  return Pl([c, d, p, h], xt) ? !1 : qb(o, c, d + 1e-3) && qb(r, p, h + 1e-3);
}, W1 = function(t) {
  return {
    active: !1,
    type: "ellipsisItem",
    value: t
  };
}, iL = function() {
  return {
    active: !1,
    type: "firstItem",
    value: 1
  };
}, sL = function(t) {
  return {
    active: !1,
    type: "prevItem",
    value: Math.max(1, t - 1)
  };
}, lL = function(t) {
  return function(n) {
    return {
      active: t === n,
      type: "pageItem",
      value: n
    };
  };
}, cL = function(t, n) {
  return {
    active: !1,
    type: "nextItem",
    value: Math.min(t + 1, n)
  };
}, uL = function(t) {
  return {
    active: !1,
    type: "lastItem",
    value: t
  };
}, dL = Math.ceil, fL = Math.max;
function pL(e, t, n, r) {
  for (var o = -1, s = fL(dL((t - e) / (n || 1)), 0), u = Array(s); s--; )
    u[++o] = e, e += n;
  return u;
}
function hL(e) {
  return function(t, n, r) {
    return r && typeof r != "number" && lh(t, n, r) && (n = r = void 0), t = fs(t), n === void 0 ? (n = t, t = 0) : n = fs(n), r = r === void 0 ? t < n ? 1 : -1 : fs(r), pL(t, n, r);
  };
}
var mL = hL(), gL = function(t, n, r) {
  var o = n - 1, s = o !== t + 1, u = s ? W1 : r;
  return u(o);
}, vL = function(t, n, r) {
  var o = t + 1, s = o !== n - 1, u = s ? W1 : r;
  return u(o);
}, Iu = function(t, n, r) {
  return wn(mL(t, n + 1), r);
}, yL = function(t, n) {
  var r = t.activePage, o = t.boundaryRange, s = t.hideEllipsis, u = t.siblingRange, c = t.totalPages, d = s ? 0 : 1, p = o, h = Iu(1, p, n), m = c + 1 - o, g = Iu(m, c, n), y = Math.min(Math.max(r - u, p + d + 1), m - d - 2 * u - 1), b = y + 2 * u, _ = Iu(y, b, n);
  return [].concat(h, [!s && gL(p, y, n)], _, [!s && vL(b, m, n)], g).filter(Boolean);
}, bL = function(t) {
  var n = t.boundaryRange, r = t.hideEllipsis, o = t.siblingRange, s = t.totalPages, u = 2 * n, c = r ? 0 : 2, d = 2 * o;
  return 1 + c + d + u >= s;
}, _L = function(t) {
  var n = t.activePage, r = t.boundaryRange, o = t.hideEllipsis, s = t.siblingRange, u = t.totalPages;
  return {
    activePage: +n,
    boundaryRange: +r,
    hideEllipsis: !!o,
    siblingRange: +s,
    totalPages: +u
  };
}, wL = function(t) {
  var n = _L(t), r = n.activePage, o = n.totalPages, s = lL(r), u = bL(n) ? Iu(1, o, s) : yL(n, s);
  return [iL(), sL(r)].concat(u, [cL(r, o), uL(o)]);
}, aa = ["red", "orange", "yellow", "olive", "green", "teal", "blue", "violet", "purple", "pink", "brown", "grey", "black"], vc = ["left", "right"], cr = ["mini", "tiny", "small", "medium", "large", "big", "huge", "massive"], ji = ["left", "center", "right", "justified"], Wi = ["bottom", "middle", "top"], U1 = ["mobile", "tablet", "computer", "large screen", "widescreen"], ar = [].concat(Lr(Nu), Lr(Nu).map(Number), B1(Nu)), EL = ["american sign language interpreting", "assistive listening systems", "audio description", "blind", "braille", "closed captioning", "closed captioning outline", "deaf", "low vision", "phone volume", "question circle", "question circle outline", "sign language", "tty", "universal access", "wheelchair"], xL = ["angle double down", "angle double left", "angle double right", "angle double up", "angle down", "angle left", "angle right", "angle up", "arrow alternate circle down", "arrow alternate circle down outline", "arrow alternate circle left", "arrow alternate circle left outline", "arrow alternate circle right", "arrow alternate circle right outline", "arrow alternate circle up", "arrow alternate circle up outline", "arrow circle down", "arrow circle left", "arrow circle right", "arrow circle up", "arrow down", "arrow left", "arrow right", "arrow up", "arrows alternate", "arrows alternate horizontal", "arrows alternate vertical", "caret down", "caret left", "caret right", "caret square down", "caret square down outline", "caret square left", "caret square left outline", "caret square right", "caret square right outline", "caret square up", "caret square up outline", "caret up", "cart arrow down", "chart line", "chevron circle down", "chevron circle left", "chevron circle right", "chevron circle up", "chevron down", "chevron left", "chevron right", "chevron up", "cloud download", "cloud upload", "download", "exchange", "expand arrows alternate", "external alternate", "external square alternate", "hand point down", "hand point down outline", "hand point left", "hand point left outline", "hand point right", "hand point right outline", "hand point up", "hand point up outline", "hand pointer", "hand pointer outline", "history", "level down alternate", "level up alternate", "location arrow", "long arrow alternate down", "long arrow alternate left", "long arrow alternate right", "long arrow alternate up", "mouse pointer", "play", "random", "recycle", "redo", "redo alternate", "reply", "reply all", "retweet", "share", "share square", "share square outline", "sign-in", "sign-out", "sign-in alternate", "sign-out alternate", "sort", "sort alphabet down", "sort alphabet up", "sort amount down", "sort amount up", "sort down", "sort numeric down", "sort numeric up", "sort up", "sync", "sync alternate", "text height", "text width", "undo", "undo alternate", "upload", "zoom-in", "zoom-out"], CL = ["audio description", "backward", "circle", "circle outline", "closed captioning", "closed captioning outline", "compress", "eject", "expand", "expand arrows alternate", "fast backward", "fast forward", "file audio", "file audio outline", "file video", "file video outline", "film", "forward", "headphones", "microphone", "microphone slash", "music", "pause", "pause circle", "pause circle outline", "phone volume", "play", "play circle", "play circle outline", "podcast", "random", "redo", "redo alternate", "rss", "rss square", "step backward", "step forward", "stop", "stop circle", "stop circle outline", "sync", "sync alternate", "undo", "undo alternate", "video", "volume down", "volume off", "volume up"], OL = ["address book", "address book outline", "address card", "address card outline", "archive", "balance scale", "birthday cake", "book", "briefcase", "building", "building outline", "bullhorn", "bullseye", "calculator", "calendar", "calendar outline", "calendar alternate", "calendar alternate outline", "certificate", "chart area", "chart bar", "chart bar outline", "chart line", "chart pie", "clipboard", "clipboard outline", "coffee", "columns", "compass", "compass outline", "copy", "copy outline", "copyright", "copyright outline", "cut", "edit", "edit outline", "envelope", "envelope outline", "envelope open", "envelope open outline", "envelope square", "eraser", "fax", "file", "file outline", "file alternate", "file alternate outline", "folder", "folder outline", "folder open", "folder open outline", "globe", "industry", "paperclip", "paste", "pen square", "pencil alternate", "percent", "phone", "phone square", "phone volume", "registered", "registered outline", "save", "save outline", "sitemap", "sticky note", "sticky note outline", "suitcase", "table", "tag", "tags", "tasks", "thumbtack", "trademark"], SL = ["chess", "chess bishop", "chess board", "chess king", "chess knight", "chess pawn", "chess queen", "chess rook", "square full"], TL = ["archive", "barcode", "bath", "bug", "code", "code branch", "coffee", "file", "file outline", "file alternate", "file alternate outline", "file code", "file code outline", "filter", "fire extinguisher", "folder", "folder outline", "folder open", "folder open outline", "keyboard", "keyboard outline", "microchip", "qrcode", "shield alternate", "sitemap", "terminal", "user secret", "window close", "window close outline", "window maximize", "window maximize outline", "window minimize", "window minimize outline", "window restore", "window restore outline"], PL = ["address book", "address book outline", "address card", "address card outline", "american sign language interpreting", "assistive listening systems", "at", "bell", "bell outline", "bell slash", "bell slash outline", "bullhorn", "comment", "comment outline", "comment alternate", "comment alternate outline", "comments", "comments outline", "envelope", "envelope outline", "envelope open", "envelope open outline", "envelope square", "fax", "inbox", "language", "microphone", "microphone slash", "mobile", "mobile alternate", "paper plane", "paper plane outline", "phone", "phone square", "phone volume", "rss", "rss square", "tty", "wifi"], kL = ["desktop", "download", "hdd", "hdd outline", "headphones", "keyboard", "keyboard outline", "laptop", "microchip", "mobile", "mobile alternate", "plug", "power off", "print", "save", "save outline", "server", "tablet", "tablet alternate", "tv", "upload"], NL = ["dollar sign", "euro sign", "lira sign", "money bill alternate", "money bill alternate outline", "pound sign", "ruble sign", "rupee sign", "shekel sign", "won sign", "yen sign"], IL = ["bell", "bell outline", "bell slash", "bell slash outline", "calendar", "calendar outline", "calendar alternate", "calendar alternate outline", "calendar check", "calendar check outline", "calendar minus", "calendar minus outline", "calendar plus", "calendar plus outline", "calendar times", "calendar times outline", "clock", "clock outline", "hourglass", "hourglass outline", "hourglass end", "hourglass half", "hourglass start", "stopwatch"], AL = ["adjust", "clone", "clone outline", "copy", "copy outline", "crop", "crosshairs", "cut", "edit", "edit outline", "eraser", "eye", "eye dropper", "eye slash", "eye slash outline", "object group", "object group outline", "object ungroup", "object ungroup outline", "paint brush", "paste", "pencil alternate", "save", "save outline", "tint"], RL = ["align center", "align justify", "align left", "align right", "bold", "clipboard", "clipboard outline", "clone", "clone outline", "columns", "copy", "copy outline", "cut", "edit", "edit outline", "eraser", "file", "file outline", "file alternate", "file alternate outline", "font", "heading", "i cursor", "indent", "italic", "linkify", "list", "list alternate", "list alternate outline", "list ol", "list ul", "outdent", "paper plane", "paper plane outline", "paperclip", "paragraph", "paste", "pencil alternate", "print", "quote left", "quote right", "redo", "redo alternate", "reply", "reply all", "share", "strikethrough", "subscript", "superscript", "sync", "sync alternate", "table", "tasks", "text height", "text width", "th", "th large", "th list", "trash", "trash alternate", "trash alternate outline", "underline", "undo", "undo alternate", "unlink"], ML = ["archive", "clone", "clone outline", "copy", "copy outline", "cut", "file", "file outline", "file alternate", "file alternate outline", "file archive", "file archive outline", "file audio", "file audio outline", "file code", "file code outline", "file excel", "file excel outline", "file image", "file image outline", "file pdf", "file pdf outline", "file powerpoint", "file powerpoint outline", "file video", "file video outline", "file word", "file word outline", "folder", "folder outline", "folder open", "folder open outline", "paste", "save", "save outline", "sticky note", "sticky note outline"], DL = ["genderless", "mars", "mars double", "mars stroke", "mars stroke horizontal", "mars stroke vertical", "mercury", "neuter", "transgender", "transgender alternate", "venus", "venus double", "venus mars"], LL = ["hand lizard", "hand lizard outline", "hand paper", "hand paper outline", "hand peace", "hand peace outline", "hand point down", "hand point down outline", "hand point left", "hand point left outline", "hand point right", "hand point right outline", "hand point up", "hand point up outline", "hand pointer", "hand pointer outline", "hand rock", "hand rock outline", "hand scissors", "hand scissors outline", "hand spock", "hand spock outline", "handshake", "handshake outline", "thumbs down", "thumbs down outline", "thumbs up", "thumbs up outline"], FL = ["ambulance", "h square", "heart", "heart outline", "heartbeat", "hospital", "hospital outline", "medkit", "plus square", "plus square outline", "stethoscope", "user md", "wheelchair"], $L = ["adjust", "bolt", "camera", "camera retro", "clone", "clone outline", "compress", "expand", "eye", "eye dropper", "eye slash", "eye slash outline", "file image", "file image outline", "film", "id badge", "id badge outline", "id card", "id card outline", "image", "image outline", "images", "images outline", "sliders horizontal", "tint"], BL = ["ban", "barcode", "bars", "beer", "bell", "bell outline", "bell slash", "bell slash outline", "bug", "bullhorn", "bullseye", "calculator", "calendar", "calendar outline", "calendar alternate", "calendar alternate outline", "calendar check", "calendar check outline", "calendar minus", "calendar minus outline", "calendar plus", "calendar plus outline", "calendar times", "calendar times outline", "certificate", "check", "check circle", "check circle outline", "check square", "check square outline", "circle", "circle outline", "clipboard", "clipboard outline", "clone", "clone outline", "cloud", "cloud download", "cloud upload", "coffee", "cog", "cogs", "copy", "copy outline", "cut", "database", "dot circle", "dot circle outline", "download", "edit", "edit outline", "ellipsis horizontal", "ellipsis vertical", "envelope", "envelope outline", "envelope open", "envelope open outline", "eraser", "exclamation", "exclamation circle", "exclamation triangle", "external alternate", "external square alternate", "eye", "eye slash", "eye slash outline", "file", "file outline", "file alternate", "file alternate outline", "filter", "flag", "flag outline", "flag checkered", "folder", "folder outline", "folder open", "folder open outline", "frown", "frown outline", "hashtag", "heart", "heart outline", "history", "home", "i cursor", "info", "info circle", "language", "magic", "meh", "meh outline", "microphone", "microphone slash", "minus", "minus circle", "minus square", "minus square outline", "paste", "pencil alternate", "plus", "plus circle", "plus square", "plus square outline", "qrcode", "question", "question circle", "question circle outline", "quote left", "quote right", "redo", "redo alternate", "reply", "reply all", "rss", "rss square", "save", "save outline", "search", "search minus", "search plus", "share", "share alternate", "share alternate square", "share square", "share square outline", "shield alternate", "sign-in", "sign-out", "signal", "sitemap", "sliders horizontal", "smile", "smile outline", "sort", "sort alphabet down", "sort alphabet up", "sort amount down", "sort amount up", "sort down", "sort numeric down", "sort numeric up", "sort up", "star", "star outline", "star half", "star half outline", "sync", "sync alternate", "thumbs down", "thumbs down outline", "thumbs up", "thumbs up outline", "times", "times circle", "times circle outline", "toggle off", "toggle on", "trash", "trash alternate", "trash alternate outline", "trophy", "undo", "undo alternate", "upload", "user", "user outline", "user circle", "user circle outline", "wifi"], jL = ["box", "boxes", "clipboard check", "clipboard list", "dolly", "dolly flatbed", "pallet", "shipping fast", "truck", "warehouse"], WL = ["ambulance", "anchor", "balance scale", "bath", "bed", "beer", "bell", "bell outline", "bell slash", "bell slash outline", "bicycle", "binoculars", "birthday cake", "blind", "bomb", "book", "bookmark", "bookmark outline", "briefcase", "building", "building outline", "car", "coffee", "crosshairs", "dollar sign", "eye", "eye slash", "eye slash outline", "fighter jet", "fire", "fire extinguisher", "flag", "flag outline", "flag checkered", "flask", "gamepad", "gavel", "gift", "glass martini", "globe", "graduation cap", "h square", "heart", "heart outline", "heartbeat", "home", "hospital", "hospital outline", "image", "image outline", "images", "images outline", "industry", "info", "info circle", "key", "leaf", "lemon", "lemon outline", "life ring", "life ring outline", "lightbulb", "lightbulb outline", "location arrow", "low vision", "magnet", "male", "map", "map outline", "map marker", "map marker alternate", "map pin", "map signs", "medkit", "money bill alternate", "money bill alternate outline", "motorcycle", "music", "newspaper", "newspaper outline", "paw", "phone", "phone square", "phone volume", "plane", "plug", "plus", "plus square", "plus square outline", "print", "recycle", "road", "rocket", "search", "search minus", "search plus", "ship", "shopping bag", "shopping basket", "shopping cart", "shower", "street view", "subway", "suitcase", "tag", "tags", "taxi", "thumbtack", "ticket alternate", "tint", "train", "tree", "trophy", "truck", "tty", "umbrella", "university", "utensil spoon", "utensils", "wheelchair", "wifi", "wrench"], UL = ["ambulance", "band aid", "dna", "first aid", "heart", "heart outline", "heartbeat", "hospital", "hospital outline", "hospital symbol", "pills", "plus", "stethoscope", "syringe", "thermometer", "user md", "weight"], zL = ["ambulance", "anchor", "archive", "balance scale", "bath", "bed", "beer", "bell", "bell outline", "bicycle", "binoculars", "birthday cake", "bomb", "book", "bookmark", "bookmark outline", "briefcase", "bug", "building", "building outline", "bullhorn", "bullseye", "bus", "calculator", "calendar", "calendar outline", "calendar alternate", "calendar alternate outline", "camera", "camera retro", "car", "clipboard", "clipboard outline", "cloud", "coffee", "cog", "cogs", "compass", "compass outline", "copy", "copy outline", "cube", "cubes", "cut", "envelope", "envelope outline", "envelope open", "envelope open outline", "eraser", "eye", "eye dropper", "fax", "fighter jet", "file", "file outline", "file alternate", "file alternate outline", "film", "fire", "fire extinguisher", "flag", "flag outline", "flag checkered", "flask", "futbol", "futbol outline", "gamepad", "gavel", "gem", "gem outline", "gift", "glass martini", "globe", "graduation cap", "hdd", "hdd outline", "headphones", "heart", "heart outline", "home", "hospital", "hospital outline", "hourglass", "hourglass outline", "image", "image outline", "images", "images outline", "industry", "key", "keyboard", "keyboard outline", "laptop", "leaf", "lemon", "lemon outline", "life ring", "life ring outline", "lightbulb", "lightbulb outline", "lock", "lock open", "magic", "magnet", "map", "map outline", "map marker", "map marker alternate", "map pin", "map signs", "medkit", "microchip", "microphone", "mobile", "mobile alternate", "money bill alternate", "money bill alternate outline", "moon", "moon outline", "motorcycle", "newspaper", "newspaper outline", "paint brush", "paper plane", "paper plane outline", "paperclip", "paste", "paw", "pencil alternate", "phone", "plane", "plug", "print", "puzzle piece", "road", "rocket", "save", "save outline", "search", "shield alternate", "shopping bag", "shopping basket", "shopping cart", "shower", "snowflake", "snowflake outline", "space shuttle", "star", "star outline", "sticky note", "sticky note outline", "stopwatch", "subway", "suitcase", "sun", "sun outline", "tablet", "tablet alternate", "tachometer alternate", "tag", "tags", "taxi", "thumbtack", "ticket alternate", "train", "trash", "trash alternate", "trash alternate outline", "tree", "trophy", "truck", "tv", "umbrella", "university", "unlock", "unlock alternate", "utensil spoon", "utensils", "wheelchair", "wrench"], HL = ["bell", "bell outline", "bookmark", "bookmark outline", "bullhorn", "camera", "camera retro", "cart arrow down", "cart plus", "certificate", "credit card", "credit card outline", "gem", "gem outline", "gift", "handshake", "handshake outline", "heart", "heart outline", "key", "shopping bag", "shopping basket", "shopping cart", "star", "star outline", "tag", "tags", "thumbs down", "thumbs down outline", "thumbs up", "thumbs up outline", "trophy"], YL = ["bookmark", "bookmark outline", "calendar", "calendar outline", "certificate", "circle", "circle outline", "cloud", "comment", "comment outline", "file", "file outline", "folder", "folder outline", "heart", "heart outline", "map marker", "play", "square", "square outline", "star", "star outline"], qL = ["asterisk", "certificate", "circle notch", "cog", "compass", "compass outline", "crosshairs", "life ring", "life ring outline", "snowflake", "snowflake outline", "spinner", "sun", "sun outline", "sync"], VL = ["baseball ball", "basketball ball", "bowling ball", "football ball", "futbol", "futbol outline", "golf ball", "hockey puck", "quidditch", "table tennis", "volleyball ball"], GL = ["ban", "battery empty", "battery full", "battery half", "battery quarter", "battery three quarters", "bell", "bell outline", "bell slash", "bell slash outline", "calendar", "calendar outline", "calendar alternate", "calendar alternate outline", "calendar check", "calendar check outline", "calendar minus", "calendar minus outline", "calendar plus", "calendar plus outline", "calendar times", "calendar times outline", "cart arrow down", "cart plus", "exclamation", "exclamation circle", "exclamation triangle", "eye", "eye slash", "eye slash outline", "file", "file outline", "file alternate", "file alternate outline", "folder", "folder outline", "folder open", "folder open outline", "info", "info circle", "lock", "lock open", "minus", "minus circle", "minus square", "minus square outline", "plus", "plus circle", "plus square", "plus square outline", "question", "question circle", "question circle outline", "shield alternate", "shopping cart", "sign in alternate", "sign out alternate", "thermometer empty", "thermometer full", "thermometer half", "thermometer quarter", "thermometer three quarters", "thumbs down", "thumbs down outline", "thumbs up", "thumbs up outline", "toggle off", "toggle on", "unlock", "unlock alternate"], KL = ["address book", "address book outline", "address card", "address card outline", "bed", "blind", "child", "female", "frown", "frown outline", "id badge", "id badge outline", "id card", "id card outline", "male", "meh", "meh outline", "power off", "smile", "smile outline", "street view", "user", "user outline", "user circle", "user circle outline", "user md", "user plus", "user secret", "user times", "users", "wheelchair"], ZL = ["ambulance", "bicycle", "bus", "car", "fighter jet", "motorcycle", "paper plane", "paper plane outline", "plane", "rocket", "ship", "shopping cart", "space shuttle", "subway", "taxi", "train", "truck", "wheelchair"], XL = ["archive", "book", "bookmark", "bookmark outline", "edit", "edit outline", "envelope", "envelope outline", "envelope open", "envelope open outline", "eraser", "file", "file outline", "file alternate", "file alternate outline", "folder", "folder outline", "folder open", "folder open outline", "keyboard", "keyboard outline", "newspaper", "newspaper outline", "paper plane", "paper plane outline", "paperclip", "paragraph", "pen square", "pencil alternate", "quote left", "quote right", "sticky note", "sticky note outline", "thumbtack"], QL = ["500px", "accessible", "accusoft", "adn", "adversal", "affiliatetheme", "algolia", "amazon", "amazon pay", "amilia", "android", "angellist", "angrycreative", "angular", "app store", "app store ios", "apper", "apple", "apple pay", "asymmetrik", "audible", "autoprefixer", "avianex", "aviato", "aws", "bandcamp", "behance", "behance square", "bimobject", "bitbucket", "bitcoin", "bity", "black tie", "blackberry", "blogger", "blogger b", "bluetooth", "bluetooth b", "btc", "buromobelexperte", "buysellads", "cc amazon pay", "cc amex", "cc apple pay", "cc diners club", "cc discover", "cc jcb", "cc mastercard", "cc paypal", "cc stripe", "cc visa", "centercode", "chrome", "cloudscale", "cloudsmith", "cloudversify", "codepen", "codiepie", "connectdevelop", "contao", "cpanel", "creative commons", "css3", "css3 alternate", "cuttlefish", "d and d", "dashcube", "delicious", "deploydog", "deskpro", "deviantart", "digg", "digital ocean", "discord", "discourse", "dochub", "docker", "draft2digital", "dribbble", "dribbble square", "dropbox", "drupal", "dyalog", "earlybirds", "edge", "elementor", "ember", "empire", "envira", "erlang", "ethereum", "etsy", "expeditedssl", "facebook", "facebook f", "facebook messenger", "facebook square", "firefox", "first order", "firstdraft", "flickr", "flipboard", "fly", "font awesome", "font awesome alternate", "font awesome flag", "fonticons", "fonticons fi", "fort awesome", "fort awesome alternate", "forumbee", "foursquare", "free code camp", "freebsd", "get pocket", "gg", "gg circle", "git", "git square", "github", "github alternate", "github square", "gitkraken", "gitlab", "gitter", "glide", "glide g", "gofore", "goodreads", "goodreads g", "google", "google drive", "google play", "google plus", "google plus g", "google plus square", "google wallet", "gratipay", "grav", "gripfire", "grunt", "gulp", "hacker news", "hacker news square", "hips", "hire a helper", "hooli", "hotjar", "houzz", "html5", "hubspot", "imdb", "instagram", "internet explorer", "ioxhost", "itunes", "itunes note", "jenkins", "joget", "joomla", "js", "js square", "jsfiddle", "keycdn", "kickstarter", "kickstarter k", "korvue", "laravel", "lastfm", "lastfm square", "leanpub", "less", "linechat", "linkedin", "linkedin alternate", "linode", "linux", "lyft", "magento", "maxcdn", "medapps", "medium", "medium m", "medrt", "meetup", "microsoft", "mix", "mixcloud", "mizuni", "modx", "monero", "napster", "nintendo switch", "node", "node js", "npm", "ns8", "nutritionix", "odnoklassniki", "odnoklassniki square", "opencart", "openid", "opera", "optin monster", "osi", "page4", "pagelines", "palfed", "patreon", "paypal", "periscope", "phabricator", "phoenix framework", "php", "pied piper", "pied piper alternate", "pied piper pp", "pinterest", "pinterest p", "pinterest square", "playstation", "product hunt", "pushed", "python", "qq", "quinscape", "quora", "ravelry", "react", "rebel", "redriver", "reddit", "reddit alien", "reddit square", "rendact", "renren", "replyd", "resolving", "rocketchat", "rockrms", "safari", "sass", "schlix", "scribd", "searchengin", "sellcast", "sellsy", "servicestack", "shirtsinbulk", "simplybuilt", "sistrix", "skyatlas", "skype", "slack", "slack hash", "slideshare", "snapchat", "snapchat ghost", "snapchat square", "soundcloud", "speakap", "spotify", "stack exchange", "stack overflow", "staylinked", "steam", "steam square", "steam symbol", "sticker mule", "strava", "stripe", "stripe s", "studiovinari", "stumbleupon", "stumbleupon circle", "superpowers", "supple", "telegram", "telegram plane", "tencent weibo", "themeisle", "trello", "tripadvisor", "tumblr", "tumblr square", "twitch", "twitter", "twitter square", "typo3", "uber", "uikit", "uniregistry", "untappd", "usb", "ussunnah", "vaadin", "viacoin", "viadeo", "viadeo square", "viber", "vimeo", "vimeo square", "vimeo v", "vine", "vk", "vnv", "vuejs", "wechat", "weibo", "weixin", "whatsapp", "whatsapp square", "whmcs", "wikipedia w", "windows", "wordpress", "wordpress simple", "wpbeginner", "wpexplorer", "wpforms", "xbox", "xing", "xing square", "y combinator", "yahoo", "yandex", "yandex international", "yelp", "yoast", "youtube", "youtube square"], JL = Td([].concat(EL, xL, CL, OL, SL, TL, PL, kL, NL, IL, AL, RL, ML, DL, LL, FL, $L, BL, jL, WL, UL, zL, HL, YL, qL, VL, GL, KL, ZL, XL, QL)), eF = ["chess rock", "ordered list", "unordered list", "user doctor", "shield", "puzzle", "add circle", "add square", "add to calendar", "add to cart", "add user", "add", "alarm mute", "alarm", "ald", "als", "announcement", "area chart", "area graph", "arrow down cart", "asexual", "asl interpreting", "asl", "assistive listening devices", "attach", "attention", "balance", "bar", "bathtub", "battery four", "battery high", "battery low", "battery one", "battery three", "battery two", "battery zero", "birthday", "block layout", "bluetooth alternative", "broken chain", "browser", "call square", "call", "cancel", "cart", "cc", "chain", "chat", "checked calendar", "checkmark", "circle notched", "close", "cny", "cocktail", "commenting", "computer", "configure", "content", "deafness", "delete calendar", "delete", "detective", "discussions", "doctor", "dollar", "dont", "drivers license", "dropdown", "emergency", "envira gallery", "erase", "eur", "euro", "eyedropper", "factory", "favorite", "feed", "female homosexual", "file text", "file text outline", "find", "first aid", "fork", "game", "gay", "gbp", "google plus circle", "google plus official", "grab", "graduation", "grid layout", "group", "h", "hand victory", "handicap", "hard of hearing", "header", "help circle", "help", "heterosexual", "hide", "hotel", "hourglass four", "hourglass full", "hourglass one", "hourglass three", "hourglass two", "idea", "ils", "in cart", "inr", "intergender", "intersex", "jpy", "krw", "lab", "law", "legal", "lesbian", "lightning", "like", "line graph", "linkedin square", "linkify", "lira", "list layout", "magnify", "mail forward", "mail outline", "mail square", "mail", "male homosexual", "man", "marker", "mars alternate", "mars horizontal", "mars vertical", "microsoft edge", "military", "ms edge", "mute", "new pied piper", "non binary transgender", "numbered list", "options", "other gender horizontal", "other gender vertical", "other gender", "payment", "paypal card", "pencil square", "photo", "picture", "pie chart", "pie graph", "pied piper hat", "pin", "plus cart", "point", "pointing down", "pointing left", "pointing right", "pointing up", "pound", "power cord", "power", "privacy", "r circle", "rain", "record", "refresh", "remove circle", "remove from calendar", "remove user", "remove", "repeat", "rmb", "rouble", "rub", "ruble", "rupee", "s15", "selected radio", "send", "setting", "settings", "shekel", "sheqel", "shipping", "shop", "shuffle", "shutdown", "sidebar", "signing", "signup", "sliders", "soccer", "sort alphabet ascending", "sort alphabet descending", "sort ascending", "sort content ascending", "sort content descending", "sort descending", "sort numeric ascending", "sort numeric descending", "sound", "spy", "stripe card", "student", "talk", "target", "teletype", "television", "text cursor", "text telephone", "theme", "thermometer", "thumb tack", "time", "tm", "toggle down", "toggle left", "toggle right", "toggle up", "translate", "travel", "treatment", "triangle down", "triangle left", "triangle right", "triangle up", "try", "unhide", "unlinkify", "unmute", "usd", "user cancel", "user close", "user delete", "user x", "vcard", "video camera", "video play", "volume control phone", "wait", "warning circle", "warning sign", "warning", "wi-fi", "winner", "wizard", "woman", "won", "wordpress beginner", "wordpress forms", "world", "write square", "x", "yen", "zip", "zoom in", "zoom out", "zoom", "bitbucket square", "checkmark box", "circle thin", "cloud download", "cloud upload", "compose", "conversation", "credit card alternative", "currency", "dashboard", "diamond", "disk", "exchange", "external share", "external square", "external", "facebook official", "food", "hourglass zero", "level down", "level up", "log out", "meanpath", "money", "move", "pencil", "protect", "radio", "remove bookmark", "resize horizontal", "resize vertical", "sign in", "sign out", "spoon", "star half empty", "star half full", "ticket", "times rectangle", "write", "youtube play"], tF = Td([].concat(JL, eF)), nF = [
  "left dropdown"
  // nested dropdown menu direction icon
], rF = Td([].concat(tF, nF));
function aF(e, t) {
  return Ed(e, t);
}
var Vb = wi() && process.env.NODE_ENV !== "test" ? Q.useLayoutEffect : Q.useEffect, oF = /\s+/;
function iF(e) {
  var t = [];
  return e ? (e.forEach(function(n) {
    if (typeof n.current == "string") {
      var r = n.current.split(oF);
      r.forEach(function(o) {
        t.push(o);
      });
    }
  }), t.filter(function(n, r, o) {
    return n.length > 0 && o.indexOf(n) === r;
  })) : [];
}
function sF(e, t) {
  return [t.filter(function(n) {
    return e.indexOf(n) === -1;
  }), e.filter(function(n) {
    return t.indexOf(n) === -1;
  })];
}
var Gb = /* @__PURE__ */ new Map(), Sp = function(t, n) {
  var r = iF(n), o = sF(Gb.get(t) || [], r), s = o[0], u = o[1];
  t && (s.forEach(function(c) {
    return t.classList.add(c);
  }), u.forEach(function(c) {
    return t.classList.remove(c);
  })), Gb.set(t, r);
}, lF = function() {
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
}, ml = new lF();
function cF(e, t) {
  var n = Q.useRef(), r = Q.useRef(!1);
  Vb(function() {
    if (n.current = t, r.current) {
      var o = Hu(e) ? e.current : e;
      ml.emit(o, Sp);
    }
    r.current = !0;
  }, [t]), Vb(function() {
    var o = Hu(e) ? e.current : e;
    return ml.add(o, n), ml.emit(o, Sp), function() {
      ml.del(o, n), ml.emit(o, Sp);
    };
  }, [e]);
}
var ea = js(function(e, t) {
  return Bl(e) ? w1(e, t) : [];
});
function bs(e) {
  var t = e.children, n = e.className, r = e.content, o = e.size, s = qe(o, "icons", n), u = He(bs, e), c = Ke(bs, e);
  return /* @__PURE__ */ Q.createElement(c, ce({}, u, {
    className: s
  }), lt(t) ? r : t);
}
bs.handledProps = ["as", "children", "className", "content", "size"];
bs.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: St,
  /** Size of the icon group. */
  size: l.oneOf(ea(cr, "medium"))
} : {};
bs.defaultProps = {
  as: "i"
};
var We = /* @__PURE__ */ function(e) {
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
      Me(r.props, "onClick", c, r.props);
    }, r;
  }
  var n = t.prototype;
  return n.getIconAriaOptions = function() {
    var o = {}, s = this.props, u = s["aria-label"], c = s["aria-hidden"];
    return xt(u) ? o["aria-hidden"] = "true" : o["aria-label"] = u, xt(c) || (o["aria-hidden"] = c), o;
  }, n.render = function() {
    var o = this.props, s = o.bordered, u = o.circular, c = o.className, d = o.color, p = o.corner, h = o.disabled, m = o.fitted, g = o.flipped, y = o.inverted, b = o.link, _ = o.loading, w = o.name, N = o.rotated, F = o.size, x = qe(d, w, F, V(s, "bordered"), V(u, "circular"), V(h, "disabled"), V(m, "fitted"), V(y, "inverted"), V(b, "link"), V(_, "loading"), nn(p, "corner"), Vn(g, "flipped"), Vn(N, "rotated"), "icon", c), I = He(t, this.props), O = Ke(t, this.props), S = this.getIconAriaOptions();
    return /* @__PURE__ */ Q.createElement(O, ce({}, I, S, {
      className: x,
      onClick: this.handleClick
    }));
  }, t;
}(H_);
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
  color: l.oneOf(aa),
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
  name: A1(rF),
  /** Icon can rotated. */
  rotated: l.oneOf(["clockwise", "counterclockwise"]),
  /** Size of the icon. */
  size: l.oneOf(ea(cr, "medium")),
  /** Icon can have an aria label. */
  "aria-hidden": l.string,
  /** Icon can have an aria label. */
  "aria-label": l.string
} : {};
We.defaultProps = {
  as: "i"
};
We.Group = bs;
We.create = qt(We, function(e) {
  return {
    name: e
  };
});
var Kb = function(t) {
  return t !== null && !Array.isArray(t) && typeof t == "object";
}, Zu = {
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
for (var _u = 0; _u < 24; _u += 1)
  Zu[112 + _u] = "F" + (_u + 1);
for (var Tp = 0; Tp < 26; Tp += 1) {
  var Pp = Tp + 65;
  Zu[Pp] = [String.fromCharCode(Pp + 32), String.fromCharCode(Pp)];
}
var De = {
  codes: Zu,
  /**
   * Get the `keyCode` or `which` value from a keyboard event or `key` name.
   * @param {string|object} eventOrKey A keyboard event-like object or `key` name.
   * @param {string} [eventOrKey.key] If object, it must have one of these keys.
   * @param {number} [eventOrKey.keyCode] If object, it must have one of these keys.
   * @param {number} [eventOrKey.which] If object, it must have one of these keys.
   * @returns {number|undefined}
   */
  getCode: function(t) {
    return Kb(t) ? t.keyCode || t.which || this[t.key] : this[t];
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
    var n = Kb(t);
    if (n && t.key)
      return t.key;
    var r = Zu[n ? t.keyCode || t.which : t];
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
De.Spacebar = De[" "];
De.Digit0 = De[0];
De.Digit1 = De[1];
De.Digit2 = De[2];
De.Digit3 = De[3];
De.Digit4 = De[4];
De.Digit5 = De[5];
De.Digit6 = De[6];
De.Digit7 = De[7];
De.Digit8 = De[8];
De.Digit9 = De[9];
De.Tilde = De["~"];
De.GraveAccent = De["`"];
De.ExclamationPoint = De["!"];
De.AtSign = De["@"];
De.PoundSign = De["#"];
De.PercentSign = De["%"];
De.Caret = De["^"];
De.Ampersand = De["&"];
De.PlusSign = De["+"];
De.MinusSign = De["-"];
De.EqualsSign = De["="];
De.DivisionSign = De["/"];
De.MultiplicationSign = De["*"];
De.Comma = De[","];
De.Decimal = De["."];
De.Colon = De[":"];
De.Semicolon = De[";"];
De.Pipe = De["|"];
De.BackSlash = De["\\"];
De.QuestionMark = De["?"];
De.SingleQuote = De["'"];
De.DoubleQuote = De['"'];
De.LeftCurlyBrace = De["{"];
De.RightCurlyBrace = De["}"];
De.LeftParenthesis = De["("];
De.RightParenthesis = De[")"];
De.LeftAngleBracket = De["<"];
De.RightAngleBracket = De[">"];
De.LeftSquareBracket = De["["];
De.RightSquareBracket = De["]"];
var uF = De;
const yn = /* @__PURE__ */ dc(uF);
var gh = { exports: {} }, Ut = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zb;
function dF() {
  if (Zb) return Ut;
  Zb = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), u = Symbol.for("react.context"), c = Symbol.for("react.server_context"), d = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), b;
  b = Symbol.for("react.module.reference");
  function _(w) {
    if (typeof w == "object" && w !== null) {
      var N = w.$$typeof;
      switch (N) {
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
                  return N;
              }
          }
        case t:
          return N;
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
var Xb;
function fF() {
  return Xb || (Xb = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), u = Symbol.for("react.context"), c = Symbol.for("react.server_context"), d = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), b = !1, _ = !1, w = !1, N = !1, F = !1, x;
    x = Symbol.for("react.module.reference");
    function I(Z) {
      return !!(typeof Z == "string" || typeof Z == "function" || Z === n || Z === o || F || Z === r || Z === p || Z === h || N || Z === y || b || _ || w || typeof Z == "object" && Z !== null && (Z.$$typeof === g || Z.$$typeof === m || Z.$$typeof === s || Z.$$typeof === u || Z.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      Z.$$typeof === x || Z.getModuleId !== void 0));
    }
    function O(Z) {
      if (typeof Z == "object" && Z !== null) {
        var le = Z.$$typeof;
        switch (le) {
          case e:
            var Ne = Z.type;
            switch (Ne) {
              case n:
              case o:
              case r:
              case p:
              case h:
                return Ne;
              default:
                var de = Ne && Ne.$$typeof;
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
    var S = u, C = s, T = e, R = d, B = n, U = g, te = m, z = t, ne = o, fe = r, ge = p, Pe = h, se = !1, me = !1;
    function J(Z) {
      return se || (se = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function re(Z) {
      return me || (me = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ae(Z) {
      return O(Z) === u;
    }
    function ye(Z) {
      return O(Z) === s;
    }
    function Se(Z) {
      return typeof Z == "object" && Z !== null && Z.$$typeof === e;
    }
    function Ce(Z) {
      return O(Z) === d;
    }
    function pe(Z) {
      return O(Z) === n;
    }
    function ke(Z) {
      return O(Z) === g;
    }
    function $e(Z) {
      return O(Z) === m;
    }
    function W(Z) {
      return O(Z) === t;
    }
    function H(Z) {
      return O(Z) === o;
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
    zt.ContextConsumer = S, zt.ContextProvider = C, zt.Element = T, zt.ForwardRef = R, zt.Fragment = B, zt.Lazy = U, zt.Memo = te, zt.Portal = z, zt.Profiler = ne, zt.StrictMode = fe, zt.Suspense = ge, zt.SuspenseList = Pe, zt.isAsyncMode = J, zt.isConcurrentMode = re, zt.isContextConsumer = ae, zt.isContextProvider = ye, zt.isElement = Se, zt.isForwardRef = Ce, zt.isFragment = pe, zt.isLazy = ke, zt.isMemo = $e, zt.isPortal = W, zt.isProfiler = H, zt.isStrictMode = $, zt.isSuspense = D, zt.isSuspenseList = G, zt.isValidElementType = I, zt.typeOf = O;
  }()), zt;
}
process.env.NODE_ENV === "production" ? gh.exports = dF() : gh.exports = fF();
var pF = gh.exports;
function hF(e) {
  if (e && (Q.Children.only(e), pF.isFragment(e)))
    throw new Error('An "React.Fragment" cannot be used as a `trigger`.');
}
var Pd = /* @__PURE__ */ function(e) {
  Jt(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handleRef = function(c) {
      va(r.props.innerRef, c);
    }, r;
  }
  var n = t.prototype;
  return n.componentDidMount = function() {
    Me(this.props, "onMount", null, this.props);
  }, n.componentWillUnmount = function() {
    Me(this.props, "onUnmount", null, this.props);
  }, n.render = function() {
    if (!wi()) return null;
    var o = this.props, s = o.children, u = o.mountNode, c = u === void 0 ? document.body : u;
    return /* @__PURE__ */ q_(/* @__PURE__ */ Q.createElement(sr, {
      innerRef: this.handleRef
    }, s), c);
  }, t;
}(Kn);
Pd.handledProps = ["children", "innerRef", "mountNode", "onMount", "onUnmount"];
Pd.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Primary content. */
  children: l.node.isRequired,
  /** Called with a ref to the inner node. */
  innerRef: M1,
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
var Jr = /* @__PURE__ */ function(e) {
  Jt(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.contentRef = /* @__PURE__ */ Q.createRef(), r.triggerRef = /* @__PURE__ */ Q.createRef(), r.latestDocumentMouseDownEvent = null, r.handleDocumentMouseDown = function(c) {
      r.latestDocumentMouseDownEvent = c;
    }, r.handleDocumentClick = function(c) {
      var d = r.props.closeOnDocumentClick, p = r.latestDocumentMouseDownEvent;
      r.latestDocumentMouseDownEvent = null, !(!r.contentRef.current || // no portal
      No(r.triggerRef.current, c) || // event happened in trigger (delegate to trigger handlers)
      p && No(r.contentRef.current, p) || // event originated in the portal but was ended outside
      No(r.contentRef.current, c)) && d && r.close(c);
    }, r.handleEscape = function(c) {
      r.props.closeOnEscape && yn.getCode(c) === yn.Escape && r.close(c);
    }, r.handlePortalMouseLeave = function(c) {
      var d = r.props, p = d.closeOnPortalMouseLeave, h = d.mouseLeaveDelay;
      p && c.target === r.contentRef.current && (r.mouseLeaveTimer = r.closeWithTimeout(c, h));
    }, r.handlePortalMouseEnter = function() {
      var c = r.props.closeOnPortalMouseLeave;
      c && clearTimeout(r.mouseLeaveTimer);
    }, r.handleTriggerBlur = function(c) {
      for (var d = r.props, p = d.trigger, h = d.closeOnTriggerBlur, m = arguments.length, g = new Array(m > 1 ? m - 1 : 0), y = 1; y < m; y++)
        g[y - 1] = arguments[y];
      Me.apply(void 0, [p, "props.onBlur", c].concat(g));
      var b = c.relatedTarget || document.activeElement, _ = Me(r.contentRef.current, "contains", b);
      !h || _ || r.close(c);
    }, r.handleTriggerClick = function(c) {
      for (var d = r.props, p = d.trigger, h = d.closeOnTriggerClick, m = d.openOnTriggerClick, g = r.state.open, y = arguments.length, b = new Array(y > 1 ? y - 1 : 0), _ = 1; _ < y; _++)
        b[_ - 1] = arguments[_];
      Me.apply(void 0, [p, "props.onClick", c].concat(b)), g && h ? r.close(c) : !g && m && r.open(c);
    }, r.handleTriggerFocus = function(c) {
      for (var d = r.props, p = d.trigger, h = d.openOnTriggerFocus, m = arguments.length, g = new Array(m > 1 ? m - 1 : 0), y = 1; y < m; y++)
        g[y - 1] = arguments[y];
      Me.apply(void 0, [p, "props.onFocus", c].concat(g)), h && r.open(c);
    }, r.handleTriggerMouseLeave = function(c) {
      clearTimeout(r.mouseEnterTimer);
      for (var d = r.props, p = d.trigger, h = d.closeOnTriggerMouseLeave, m = d.mouseLeaveDelay, g = arguments.length, y = new Array(g > 1 ? g - 1 : 0), b = 1; b < g; b++)
        y[b - 1] = arguments[b];
      Me.apply(void 0, [p, "props.onMouseLeave", c].concat(y)), h && (r.mouseLeaveTimer = r.closeWithTimeout(c, m));
    }, r.handleTriggerMouseEnter = function(c) {
      clearTimeout(r.mouseLeaveTimer);
      for (var d = r.props, p = d.trigger, h = d.mouseEnterDelay, m = d.openOnTriggerMouseEnter, g = arguments.length, y = new Array(g > 1 ? g - 1 : 0), b = 1; b < g; b++)
        y[b - 1] = arguments[b];
      Me.apply(void 0, [p, "props.onMouseEnter", c].concat(y)), m && (r.mouseEnterTimer = r.openWithTimeout(c, h));
    }, r.open = function(c) {
      Me(r.props, "onOpen", c, ce({}, r.props, {
        open: !0
      })), r.setState({
        open: !0
      });
    }, r.openWithTimeout = function(c, d) {
      var p = ce({}, c);
      return setTimeout(function() {
        return r.open(p);
      }, d || 0);
    }, r.close = function(c) {
      r.setState({
        open: !1
      }), Me(r.props, "onClose", c, ce({}, r.props, {
        open: !1
      }));
    }, r.closeWithTimeout = function(c, d) {
      var p = ce({}, c);
      return setTimeout(function() {
        return r.close(p);
      }, d || 0);
    }, r.handleMount = function() {
      Me(r.props, "onMount", null, r.props);
    }, r.handleUnmount = function() {
      Me(r.props, "onUnmount", null, r.props);
    }, r.handleTriggerRef = function(c) {
      r.triggerRef.current = c, va(r.props.triggerRef, c);
    }, r;
  }
  var n = t.prototype;
  return n.componentWillUnmount = function() {
    clearTimeout(this.mouseEnterTimer), clearTimeout(this.mouseLeaveTimer);
  }, n.render = function() {
    var o = this.props, s = o.children, u = o.eventPool, c = o.mountNode, d = o.trigger, p = this.state.open;
    return process.env.NODE_ENV !== "production" && hF(d), /* @__PURE__ */ Q.createElement(Q.Fragment, null, p && /* @__PURE__ */ Q.createElement(Q.Fragment, null, /* @__PURE__ */ Q.createElement(Pd, {
      innerRef: this.contentRef,
      mountNode: c,
      onMount: this.handleMount,
      onUnmount: this.handleUnmount
    }, s), /* @__PURE__ */ Q.createElement(Ha, {
      name: "mouseleave",
      on: this.handlePortalMouseLeave,
      pool: u,
      target: this.contentRef
    }), /* @__PURE__ */ Q.createElement(Ha, {
      name: "mouseenter",
      on: this.handlePortalMouseEnter,
      pool: u,
      target: this.contentRef
    }), /* @__PURE__ */ Q.createElement(Ha, {
      name: "mousedown",
      on: this.handleDocumentMouseDown,
      pool: u
    }), /* @__PURE__ */ Q.createElement(Ha, {
      name: "click",
      on: this.handleDocumentClick,
      pool: u
    }), /* @__PURE__ */ Q.createElement(Ha, {
      name: "keydown",
      on: this.handleEscape,
      pool: u
    })), d && /* @__PURE__ */ Q.createElement(sr, {
      innerRef: this.handleTriggerRef
    }, /* @__PURE__ */ Q.cloneElement(d, {
      onBlur: this.handleTriggerBlur,
      onClick: this.handleTriggerClick,
      onFocus: this.handleTriggerFocus,
      onMouseLeave: this.handleTriggerMouseLeave,
      onMouseEnter: this.handleTriggerMouseEnter
    })));
  }, t;
}(Us);
Jr.handledProps = ["children", "closeOnDocumentClick", "closeOnEscape", "closeOnPortalMouseLeave", "closeOnTriggerBlur", "closeOnTriggerClick", "closeOnTriggerMouseLeave", "defaultOpen", "eventPool", "mountNode", "mouseEnterDelay", "mouseLeaveDelay", "onClose", "onMount", "onOpen", "onUnmount", "open", "openOnTriggerClick", "openOnTriggerFocus", "openOnTriggerMouseEnter", "trigger", "triggerRef"];
Jr.propTypes = process.env.NODE_ENV !== "production" ? {
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
  triggerRef: M1
} : {};
Jr.defaultProps = {
  closeOnDocumentClick: !0,
  closeOnEscape: !0,
  eventPool: "default",
  openOnTriggerClick: !0
};
Jr.autoControlledProps = ["open"];
Jr.Inner = Pd;
function jl(e) {
  var t = e.blurring, n = e.className, r = e.children, o = e.content, s = e.dimmed, u = qe(V(t, "blurring"), V(s, "dimmed"), "dimmable", n), c = He(jl, e), d = Ke(jl, e);
  return /* @__PURE__ */ Q.createElement(d, ce({}, c, {
    className: u
  }), lt(r) ? o : r);
}
jl.handledProps = ["as", "blurring", "children", "className", "content", "dimmed"];
jl.propTypes = process.env.NODE_ENV !== "production" ? {
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
      Me(r.props, "onClick", c, r.props), !(d && d !== c.target && No(d, c)) && Me(r.props, "onClickOutside", c, r.props);
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
    var o = this.props, s = o.active, u = o.children, c = o.className, d = o.content, p = o.disabled, h = o.inverted, m = o.page, g = o.simple, y = o.verticalAlign, b = qe("ui", V(s, "active transition visible"), V(p, "disabled"), V(h, "inverted"), V(m, "page"), V(g, "simple"), Qo(y), "dimmer", c), _ = He(t, this.props), w = Ke(t, this.props), N = lt(u) ? d : u;
    return /* @__PURE__ */ Q.createElement(sr, {
      innerRef: this.containerRef
    }, /* @__PURE__ */ Q.createElement(w, ce({}, _, {
      className: b,
      onClick: this.handleClick
    }), N && /* @__PURE__ */ Q.createElement("div", {
      className: "content",
      ref: this.contentRef
    }, N)));
  }, t;
}(Kn);
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
var Ro = /* @__PURE__ */ function(e) {
  Jt(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handlePortalMount = function() {
      wi() && (document.body.classList.add("dimmed"), document.body.classList.add("dimmable"));
    }, r.handlePortalUnmount = function() {
      wi() && (document.body.classList.remove("dimmed"), document.body.classList.remove("dimmable"));
    }, r;
  }
  var n = t.prototype;
  return n.render = function() {
    var o = this.props, s = o.active, u = o.page, c = He(t, this.props);
    return u ? /* @__PURE__ */ Q.createElement(Jr, {
      closeOnEscape: !1,
      closeOnDocumentClick: !1,
      onMount: this.handlePortalMount,
      onUnmount: this.handlePortalUnmount,
      open: s,
      openOnTriggerClick: !1
    }, /* @__PURE__ */ Q.createElement(Wl, ce({}, c, {
      active: s,
      page: u
    }))) : /* @__PURE__ */ Q.createElement(Wl, ce({}, c, {
      active: s,
      page: u
    }));
  }, t;
}(Kn);
Ro.handledProps = ["active", "page"];
Ro.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An active dimmer will dim its parent container. */
  active: l.bool,
  /** A dimmer can be formatted to be fixed to the page. */
  page: l.bool
} : {};
Ro.Dimmable = jl;
Ro.Inner = Wl;
Ro.create = qt(Ro, function(e) {
  return {
    content: e
  };
});
function Ul(e) {
  var t = e.children, n = e.className, r = e.content, o = e.size, s = qe("ui", o, n, "images"), u = He(Ul, e), c = Ke(Ul, e);
  return /* @__PURE__ */ Q.createElement(c, ce({}, u, {
    className: s
  }), lt(t) ? r : t);
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
  var t = e.avatar, n = e.bordered, r = e.centered, o = e.children, s = e.circular, u = e.className, c = e.content, d = e.dimmer, p = e.disabled, h = e.floated, m = e.fluid, g = e.hidden, y = e.href, b = e.inline, _ = e.label, w = e.rounded, N = e.size, F = e.spaced, x = e.verticalAlign, I = e.wrapped, O = e.ui, S = qe(V(O, "ui"), N, V(t, "avatar"), V(n, "bordered"), V(s, "circular"), V(r, "centered"), V(p, "disabled"), V(m, "fluid"), V(g, "hidden"), V(b, "inline"), V(w, "rounded"), nn(F, "spaced"), Vn(h, "floated"), Qo(x), "image", u), C = He(_r, e), T = bm(C, {
    htmlProps: JD
  }), R = T[0], B = T[1], U = Ke(_r, e, function() {
    if (!xt(d) || !xt(_) || !xt(I) || !lt(o))
      return "div";
  });
  return lt(o) ? lt(c) ? U === "img" ? /* @__PURE__ */ Q.createElement(U, ce({}, B, R, {
    className: S
  })) : /* @__PURE__ */ Q.createElement(U, ce({}, B, {
    className: S,
    href: y
  }), Ro.create(d, {
    autoGenerateKey: !1
  }), lr.create(_, {
    autoGenerateKey: !1
  }), /* @__PURE__ */ Q.createElement("img", R)) : /* @__PURE__ */ Q.createElement(U, ce({}, C, {
    className: S
  }), c) : /* @__PURE__ */ Q.createElement(U, ce({}, C, {
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
  dimmer: _t,
  /** An image can sit to the left or right of other content. */
  floated: l.oneOf(vc),
  /** An image can take up the width of its container. */
  fluid: Rt([l.bool, Ht(["size"])]),
  /** An image can be hidden. */
  hidden: l.bool,
  /** Renders the Image as an <a> tag with this href. */
  href: l.string,
  /** An image may appear inline. */
  inline: l.bool,
  /** Shorthand for Label. */
  label: _t,
  /** An image may appear rounded. */
  rounded: l.bool,
  /** An image may appear at different sizes. */
  size: l.oneOf(cr),
  /** An image can specify that it needs an additional spacing to separate it from nearby content. */
  spaced: l.oneOfType([l.bool, l.oneOf(["left", "right"])]),
  /** Whether or not to add the ui className. */
  ui: l.bool,
  /** An image can specify its vertical alignment. */
  verticalAlign: l.oneOf(Wi),
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
function Mo(e) {
  var t = e.children, n = e.className, r = e.content, o = qe("detail", n), s = He(Mo, e), u = Ke(Mo, e);
  return /* @__PURE__ */ Q.createElement(u, ce({}, s, {
    className: o
  }), lt(t) ? r : t);
}
Mo.handledProps = ["as", "children", "className", "content"];
Mo.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: St
} : {};
Mo.create = qt(Mo, function(e) {
  return {
    content: e
  };
});
function zl(e) {
  var t = e.children, n = e.circular, r = e.className, o = e.color, s = e.content, u = e.size, c = e.tag, d = qe("ui", o, u, V(n, "circular"), V(c, "tag"), "labels", r), p = He(zl, e), h = Ke(zl, e);
  return /* @__PURE__ */ Q.createElement(h, ce({}, p, {
    className: d
  }), lt(t) ? s : t);
}
zl.handledProps = ["as", "children", "circular", "className", "color", "content", "size", "tag"];
zl.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Labels can share shapes. */
  circular: l.bool,
  /** Additional classes. */
  className: l.string,
  /** Label group can share colors together. */
  color: l.oneOf(aa),
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
          Me(c, "onClick", p), Me(r.props, "onRemove", p, r.props);
        }
      };
    }, r;
  }
  var n = t.prototype;
  return n.render = function() {
    var o = this.props, s = o.active, u = o.attached, c = o.basic, d = o.children, p = o.circular, h = o.className, m = o.color, g = o.content, y = o.corner, b = o.detail, _ = o.empty, w = o.floating, N = o.horizontal, F = o.icon, x = o.image, I = o.onRemove, O = o.pointing, S = o.prompt, C = o.removeIcon, T = o.ribbon, R = o.size, B = o.tag, U = O === !0 && "pointing" || (O === "left" || O === "right") && O + " pointing" || (O === "above" || O === "below") && "pointing " + O, te = qe("ui", m, U, R, V(s, "active"), V(c, "basic"), V(p, "circular"), V(_, "empty"), V(w, "floating"), V(N, "horizontal"), V(x === !0, "image"), V(S, "prompt"), V(B, "tag"), nn(y, "corner"), nn(T, "ribbon"), Vn(u, "attached"), "label", h), z = He(t, this.props), ne = Ke(t, this.props);
    if (!lt(d))
      return /* @__PURE__ */ Q.createElement(ne, ce({}, z, {
        className: te,
        onClick: this.handleClick
      }), d);
    var fe = ds(C) ? "delete" : C;
    return /* @__PURE__ */ Q.createElement(ne, ce({
      className: te,
      onClick: this.handleClick
    }, z), We.create(F, {
      autoGenerateKey: !1
    }), typeof x != "boolean" && _r.create(x, {
      autoGenerateKey: !1
    }), g, Mo.create(b, {
      autoGenerateKey: !1
    }), I && We.create(fe, {
      autoGenerateKey: !1,
      overrideProps: this.handleIconOverrides
    }));
  }, t;
}(Kn);
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
  color: l.oneOf(aa),
  /** Shorthand for primary content. */
  content: St,
  /** A label can position itself in the corner of an element. */
  corner: l.oneOfType([l.bool, l.oneOf(["left", "right"])]),
  /** Shorthand for LabelDetail. */
  detail: _t,
  /** Formats the label as a dot. */
  empty: Rt([l.bool, To(["circular"])]),
  /** Float above another element in the upper right corner. */
  floating: l.bool,
  /** A horizontal label is formatted to label content along-side it horizontally. */
  horizontal: l.bool,
  /** Shorthand for Icon. */
  icon: _t,
  /** A label can be formatted to emphasize an image or prop can be used as shorthand for Image. */
  image: l.oneOfType([l.bool, _t]),
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
  removeIcon: _t,
  /** A label can appear as a ribbon attaching itself to an element. */
  ribbon: l.oneOfType([l.bool, l.oneOf(["right"])]),
  /** A label can have different sizes. */
  size: l.oneOf(cr),
  /** A label can appear as a tag. */
  tag: l.bool
} : {};
lr.Detail = Mo;
lr.Group = zl;
lr.create = qt(lr, function(e) {
  return {
    content: e
  };
});
function Hl(e) {
  var t = e.children, n = e.className, r = e.content, o = e.hidden, s = e.visible, u = qe(V(s, "visible"), V(o, "hidden"), "content", n), c = He(Hl, e), d = Ke(Hl, e);
  return /* @__PURE__ */ Q.createElement(d, ce({}, c, {
    className: u
  }), lt(t) ? r : t);
}
Hl.handledProps = ["as", "children", "className", "content", "hidden", "visible"];
Hl.propTypes = process.env.NODE_ENV !== "production" ? {
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
function Yl(e) {
  var t = e.attached, n = e.basic, r = e.buttons, o = e.children, s = e.className, u = e.color, c = e.compact, d = e.content, p = e.floated, h = e.fluid, m = e.icon, g = e.inverted, y = e.labeled, b = e.negative, _ = e.positive, w = e.primary, N = e.secondary, F = e.size, x = e.toggle, I = e.vertical, O = e.widths, S = qe("ui", u, F, V(n, "basic"), V(c, "compact"), V(h, "fluid"), V(m, "icon"), V(g, "inverted"), V(y, "labeled"), V(b, "negative"), V(_, "positive"), V(w, "primary"), V(N, "secondary"), V(x, "toggle"), V(I, "vertical"), nn(t, "attached"), Vn(p, "floated"), Yn(O), "buttons", s), C = He(Yl, e), T = Ke(Yl, e);
  return xt(r) ? /* @__PURE__ */ Q.createElement(T, ce({}, C, {
    className: S
  }), lt(o) ? d : o) : /* @__PURE__ */ Q.createElement(T, ce({}, C, {
    className: S
  }), wn(r, function(R) {
    return ft.create(R);
  }));
}
Yl.handledProps = ["as", "attached", "basic", "buttons", "children", "className", "color", "compact", "content", "floated", "fluid", "icon", "inverted", "labeled", "negative", "positive", "primary", "secondary", "size", "toggle", "vertical", "widths"];
Yl.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Groups can be attached to other content. */
  attached: l.oneOfType([l.bool, l.oneOf(["left", "right", "top", "bottom"])]),
  /** Groups can be less pronounced. */
  basic: l.bool,
  /** Array of shorthand Button values. */
  buttons: gc,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Groups can have a shared color. */
  color: l.oneOf(aa),
  /** Groups can reduce their padding to fit into tighter spaces. */
  compact: l.bool,
  /** Shorthand for primary content. */
  content: St,
  /** Groups can be aligned to the left or right of its container. */
  floated: l.oneOf(vc),
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
  widths: l.oneOf(ar)
} : {};
function ql(e) {
  var t = e.className, n = e.text, r = qe("or", t), o = He(ql, e), s = Ke(ql, e);
  return /* @__PURE__ */ Q.createElement(s, ce({}, o, {
    className: r,
    "data-text": n
  }));
}
ql.handledProps = ["as", "className", "text"];
ql.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Additional classes. */
  className: l.string,
  /** Or buttons can have their text localized, or adjusted by using the text prop. */
  text: l.oneOfType([l.number, l.string])
} : {};
var ft = /* @__PURE__ */ function(e) {
  Jt(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.ref = /* @__PURE__ */ br(), r.computeElementType = function() {
      var c = r.props, d = c.attached, p = c.label;
      if (!xt(d) || !xt(p)) return "div";
    }, r.computeTabIndex = function(c) {
      var d = r.props, p = d.disabled, h = d.tabIndex;
      if (!xt(h)) return h;
      if (p) return -1;
      if (c === "div") return 0;
    }, r.focus = function(c) {
      return Me(r.ref.current, "focus", c);
    }, r.handleClick = function(c) {
      var d = r.props.disabled;
      if (d) {
        c.preventDefault();
        return;
      }
      Me(r.props, "onClick", c, r.props);
    }, r.hasIconClass = function() {
      var c = r.props, d = c.labelPosition, p = c.children, h = c.content, m = c.icon;
      return m === !0 ? !0 : m && (d || lt(p) && xt(h));
    }, r;
  }
  var n = t.prototype;
  return n.computeButtonAriaRole = function(o) {
    var s = this.props.role;
    if (!xt(s)) return s;
    if (o !== "button") return "button";
  }, n.render = function() {
    var o = this.props, s = o.active, u = o.animated, c = o.attached, d = o.basic, p = o.children, h = o.circular, m = o.className, g = o.color, y = o.compact, b = o.content, _ = o.disabled, w = o.floated, N = o.fluid, F = o.icon, x = o.inverted, I = o.label, O = o.labelPosition, S = o.loading, C = o.negative, T = o.positive, R = o.primary, B = o.secondary, U = o.size, te = o.toggle, z = o.type, ne = qe(g, U, V(s, "active"), V(d, "basic"), V(h, "circular"), V(y, "compact"), V(N, "fluid"), V(this.hasIconClass(), "icon"), V(x, "inverted"), V(S, "loading"), V(C, "negative"), V(T, "positive"), V(R, "primary"), V(B, "secondary"), V(te, "toggle"), nn(u, "animated"), nn(c, "attached")), fe = qe(nn(O || !!I, "labeled")), ge = qe(V(_, "disabled"), Vn(w, "floated")), Pe = He(t, this.props), se = Ke(t, this.props, this.computeElementType), me = this.computeTabIndex(se);
    if (!xt(I)) {
      var J = qe("ui", ne, "button", m), re = qe("ui", fe, "button", m, ge), ae = lr.create(I, {
        defaultProps: {
          basic: !0,
          pointing: O === "left" ? "right" : "left"
        },
        autoGenerateKey: !1
      });
      return /* @__PURE__ */ Q.createElement(se, ce({}, Pe, {
        className: re,
        onClick: this.handleClick
      }), O === "left" && ae, /* @__PURE__ */ Q.createElement(sr, {
        innerRef: this.ref
      }, /* @__PURE__ */ Q.createElement("button", {
        className: J,
        "aria-pressed": te ? !!s : void 0,
        disabled: _,
        type: z,
        tabIndex: me
      }, We.create(F, {
        autoGenerateKey: !1
      }), " ", b)), (O === "right" || !O) && ae);
    }
    var ye = qe("ui", ne, ge, fe, "button", m), Se = !lt(p), Ce = this.computeButtonAriaRole(se);
    return /* @__PURE__ */ Q.createElement(sr, {
      innerRef: this.ref
    }, /* @__PURE__ */ Q.createElement(se, ce({}, Pe, {
      className: ye,
      "aria-pressed": te ? !!s : void 0,
      disabled: _ && se === "button" || void 0,
      onClick: this.handleClick,
      role: Ce,
      type: z,
      tabIndex: me
    }), Se && p, !Se && We.create(F, {
      autoGenerateKey: !1
    }), !Se && b));
  }, t;
}(Kn);
ft.handledProps = ["active", "animated", "as", "attached", "basic", "children", "circular", "className", "color", "compact", "content", "disabled", "floated", "fluid", "icon", "inverted", "label", "labelPosition", "loading", "negative", "onClick", "positive", "primary", "role", "secondary", "size", "tabIndex", "toggle", "type"];
ft.propTypes = process.env.NODE_ENV !== "production" ? {
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
  children: Rt([l.node, Ht(["label"]), R1({
    icon: l.oneOfType([l.string.isRequired, l.object.isRequired, l.element.isRequired])
  }, Ht(["icon"]))]),
  /** A button can be circular. */
  circular: l.bool,
  /** Additional classes. */
  className: l.string,
  /** A button can have different colors */
  color: l.oneOf([].concat(aa, ["facebook", "google plus", "instagram", "linkedin", "twitter", "vk", "youtube"])),
  /** A button can reduce its padding to fit into tighter spaces. */
  compact: l.bool,
  /** Shorthand for primary content. */
  content: St,
  /** A button can show it is currently unable to be interacted with. */
  disabled: l.bool,
  /** A button can be aligned to the left or right of its container. */
  floated: l.oneOf(vc),
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
ft.defaultProps = {
  as: "button"
};
ft.Content = Hl;
ft.Group = Yl;
ft.Or = ql;
ft.create = qt(ft, function(e) {
  return {
    content: e
  };
});
function z1(e, t, n, r) {
  var o = -1, s = e == null ? 0 : e.length;
  for (r && s && (n = e[++o]); ++o < s; )
    n = t(n, e[o], o, e);
  return n;
}
function mF(e, t, n, r, o) {
  return o(e, function(s, u, c) {
    n = r ? (r = !1, s) : t(n, s, u, c);
  }), n;
}
function _m(e, t, n) {
  var r = vn(e) ? z1 : mF, o = arguments.length < 3;
  return r(e, Xo(t), n, o, Ws);
}
var gF = function(t, n, r, o) {
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
const kl = /* @__PURE__ */ dc(gF);
var _s = /* @__PURE__ */ function(e) {
  Jt(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handleButtonOverrides = function(c) {
      return {
        onClick: function(p, h) {
          Me(c, "onClick", p, h), Me(r.props, "onActionClick", p, h);
        }
      };
    }, r;
  }
  var n = t.prototype;
  return n.render = function() {
    var o = this, s = this.props, u = s.actions, c = s.children, d = s.className, p = s.content, h = qe("actions", d), m = He(t, this.props), g = Ke(t, this.props);
    return lt(c) ? lt(p) ? /* @__PURE__ */ Q.createElement(g, ce({}, m, {
      className: h
    }), wn(u, function(y) {
      return ft.create(y, {
        overrideProps: o.handleButtonOverrides
      });
    })) : /* @__PURE__ */ Q.createElement(g, ce({}, m, {
      className: h
    }), p) : /* @__PURE__ */ Q.createElement(g, ce({}, m, {
      className: h
    }), c);
  }, t;
}(Kn);
_s.handledProps = ["actions", "as", "children", "className", "content", "onActionClick"];
_s.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Array of shorthand buttons. */
  actions: gc,
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
_s.create = qt(_s, function(e) {
  return {
    actions: e
  };
});
function Do(e) {
  var t = e.children, n = e.className, r = e.content, o = e.image, s = e.scrolling, u = qe(n, V(o, "image"), V(s, "scrolling"), "content"), c = He(Do, e), d = Ke(Do, e);
  return /* @__PURE__ */ Q.createElement(d, ce({}, c, {
    className: u
  }), lt(t) ? r : t);
}
Do.handledProps = ["as", "children", "className", "content", "image", "scrolling"];
Do.propTypes = process.env.NODE_ENV !== "production" ? {
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
Do.create = qt(Do, function(e) {
  return {
    content: e
  };
});
function Vl(e) {
  var t = e.children, n = e.className, r = e.content, o = qe("description", n), s = He(Vl, e), u = Ke(Vl, e);
  return /* @__PURE__ */ Q.createElement(u, ce({}, s, {
    className: o
  }), lt(t) ? r : t);
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
function Lo(e) {
  var t = e.blurring, n = e.children, r = e.className, o = e.centered, s = e.content, u = e.inverted, c = e.mountNode, d = e.scrolling, p = Q.useRef(), h = qe("ui", V(u, "inverted"), V(!o, "top aligned"), "page modals dimmer transition visible active", r), m = qe("dimmable dimmed", V(t, "blurring"), V(d, "scrolling")), g = He(Lo, e), y = Ke(Lo, e);
  return cF(c, m), Q.useEffect(function() {
    p.current && p.current.style && p.current.style.setProperty("display", "flex", "important");
  }, []), /* @__PURE__ */ Q.createElement(sr, {
    innerRef: p
  }, /* @__PURE__ */ Q.createElement(y, ce({}, g, {
    className: h
  }), lt(n) ? s : n));
}
Lo.handledProps = ["as", "blurring", "centered", "children", "className", "content", "inverted", "mountNode", "scrolling"];
Lo.propTypes = process.env.NODE_ENV !== "production" ? {
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
Lo.create = qt(Lo, function(e) {
  return {
    content: e
  };
});
function Fo(e) {
  var t = e.children, n = e.className, r = e.content, o = qe("header", n), s = He(Fo, e), u = Ke(Fo, e);
  return /* @__PURE__ */ Q.createElement(u, ce({}, s, {
    className: o
  }), lt(t) ? r : t);
}
Fo.handledProps = ["as", "children", "className", "content"];
Fo.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: St
} : {};
Fo.create = qt(Fo, function(e) {
  return {
    content: e
  };
});
var Qb = 0, vF = 50, yF = function(t) {
  var n = t.height + Qb, r = t.height + Qb, o = window.innerHeight, s = o / 2, u = -(r / 2), c = vF, d = s + u;
  return d + n + c < o;
}, bF = function(t, n, r) {
  var o = n && t ? -(r.height / 2) : 0, s = -(r.width / 2);
  return {
    marginLeft: s,
    marginTop: o
  };
}, _F = function() {
  return !window.ActiveXObject && "ActiveXObject" in window;
}, cn = /* @__PURE__ */ function(e) {
  Jt(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.legacy = wi() && _F(), r.ref = /* @__PURE__ */ br(), r.dimmerRef = /* @__PURE__ */ br(), r.latestDocumentMouseDownEvent = null, r.getMountNode = function() {
      return wi() ? r.props.mountNode || document.body : null;
    }, r.handleActionsOverrides = function(c) {
      return {
        onActionClick: function(p, h) {
          Me(c, "onActionClick", p, h), Me(r.props, "onActionClick", p, r.props), r.handleClose(p);
        }
      };
    }, r.handleClose = function(c) {
      r.setState({
        open: !1
      }), Me(r.props, "onClose", c, ce({}, r.props, {
        open: !1
      }));
    }, r.handleDocumentMouseDown = function(c) {
      r.latestDocumentMouseDownEvent = c;
    }, r.handleDocumentClick = function(c) {
      var d = r.props.closeOnDimmerClick, p = r.latestDocumentMouseDownEvent;
      r.latestDocumentMouseDownEvent = null, !(!d || No(r.ref.current, p) || No(r.ref.current, c)) && (r.setState({
        open: !1
      }), Me(r.props, "onClose", c, ce({}, r.props, {
        open: !1
      })));
    }, r.handleIconOverrides = function(c) {
      return {
        onClick: function(p) {
          Me(c, "onClick", p), r.handleClose(p);
        }
      };
    }, r.handleOpen = function(c) {
      Me(r.props, "onOpen", c, ce({}, r.props, {
        open: !0
      })), r.setState({
        open: !0
      });
    }, r.handlePortalMount = function(c) {
      var d = r.props.eventPool;
      r.setState({
        scrolling: !1
      }), r.setPositionAndClassNames(), Cl.sub("mousedown", r.handleDocumentMouseDown, {
        pool: d,
        target: r.dimmerRef.current
      }), Cl.sub("click", r.handleDocumentClick, {
        pool: d,
        target: r.dimmerRef.current
      }), Me(r.props, "onMount", c, r.props);
    }, r.handlePortalUnmount = function(c) {
      var d = r.props.eventPool;
      cancelAnimationFrame(r.animationRequestId), Cl.unsub("mousedown", r.handleDocumentMouseDown, {
        pool: d,
        target: r.dimmerRef.current
      }), Cl.unsub("click", r.handleDocumentClick, {
        pool: d,
        target: r.dimmerRef.current
      }), Me(r.props, "onUnmount", c, r.props);
    }, r.setPositionAndClassNames = function() {
      var c = r.props.centered, d, p = {};
      if (r.ref.current) {
        var h = r.ref.current.getBoundingClientRect(), m = yF(h);
        d = !m;
        var g = r.legacy ? bF(m, c, h) : {};
        kl(r.state.legacyStyles, g) || (p.legacyStyles = g), r.state.scrolling !== d && (p.scrolling = d);
      }
      vi(p) || r.setState(p), r.animationRequestId = requestAnimationFrame(r.setPositionAndClassNames);
    }, r.renderContent = function(c) {
      var d = r.props, p = d.actions, h = d.basic, m = d.children, g = d.className, y = d.closeIcon, b = d.content, _ = d.header, w = d.size, N = d.style, F = r.state, x = F.legacyStyles, I = F.scrolling, O = qe("ui", w, V(h, "basic"), V(r.legacy, "legacy"), V(I, "scrolling"), "modal transition visible active", g), S = Ke(t, r.props), C = y === !0 ? "close" : y, T = We.create(C, {
        overrideProps: r.handleIconOverrides
      });
      return /* @__PURE__ */ Q.createElement(sr, {
        innerRef: r.ref
      }, /* @__PURE__ */ Q.createElement(S, ce({}, c, {
        className: O,
        style: ce({}, x, N)
      }), T, lt(m) ? /* @__PURE__ */ Q.createElement(Q.Fragment, null, Fo.create(_, {
        autoGenerateKey: !1
      }), Do.create(b, {
        autoGenerateKey: !1
      }), _s.create(p, {
        overrideProps: r.handleActionsOverrides
      })) : m));
    }, r;
  }
  var n = t.prototype;
  return n.componentWillUnmount = function() {
    this.handlePortalUnmount();
  }, n.render = function() {
    var o = this.props, s = o.centered, u = o.closeOnDocumentClick, c = o.dimmer, d = o.eventPool, p = o.trigger, h = this.state, m = h.open, g = h.scrolling, y = this.getMountNode();
    if (!wi())
      return /* @__PURE__ */ LI(p) ? p : null;
    var b = He(t, this.props), _ = Jr.handledProps, w = _m(b, function(F, x, I) {
      return ba(_, I) || (F[I] = x), F;
    }, {}), N = Od(b, _);
    return /* @__PURE__ */ Q.createElement(Jr, ce({
      closeOnDocumentClick: u
    }, N, {
      trigger: p,
      eventPool: d,
      mountNode: y,
      open: m,
      onClose: this.handleClose,
      onMount: this.handlePortalMount,
      onOpen: this.handleOpen,
      onUnmount: this.handlePortalUnmount
    }), /* @__PURE__ */ Q.createElement(sr, {
      innerRef: this.dimmerRef
    }, Lo.create(Sd(c) ? c : {}, {
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
cn.handledProps = ["actions", "as", "basic", "centered", "children", "className", "closeIcon", "closeOnDimmerClick", "closeOnDocumentClick", "content", "defaultOpen", "dimmer", "eventPool", "header", "mountNode", "onActionClick", "onClose", "onMount", "onOpen", "onUnmount", "open", "size", "style", "trigger"];
cn.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Shorthand for Modal.Actions. Typically an array of button shorthand. */
  actions: _t,
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
  content: _t,
  /** Initial value of open. */
  defaultOpen: l.bool,
  /** A Modal can appear in a dimmer. */
  dimmer: l.oneOfType([l.bool, l.func, l.object, l.oneOf(["inverted", "blurring"])]),
  /** Event pool namespace that is used to handle component events */
  eventPool: l.string,
  /** Modal displayed above the content in bold. */
  header: _t,
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
cn.Actions = _s;
cn.Content = Do;
cn.Description = Vl;
cn.Dimmer = Lo;
cn.Header = Fo;
function Gl(e) {
  var t = e.children, n = e.className, r = e.content, o = qe("header", n), s = He(Gl, e), u = Ke(Gl, e);
  return /* @__PURE__ */ Q.createElement(u, ce({}, s, {
    className: o
  }), lt(t) ? r : t);
}
Gl.handledProps = ["as", "children", "className", "content"];
Gl.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: St
} : {};
function wF(e) {
  return function(t) {
    return e == null ? void 0 : e[t];
  };
}
var EF = {
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
}, xF = wF(EF), CF = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, OF = "\\u0300-\\u036f", SF = "\\ufe20-\\ufe2f", TF = "\\u20d0-\\u20ff", PF = OF + SF + TF, kF = "[" + PF + "]", NF = RegExp(kF, "g");
function vh(e) {
  return e = $i(e), e && e.replace(CF, xF).replace(NF, "");
}
var IF = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function AF(e) {
  return e.match(IF) || [];
}
var RF = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function MF(e) {
  return RF.test(e);
}
var H1 = "\\ud800-\\udfff", DF = "\\u0300-\\u036f", LF = "\\ufe20-\\ufe2f", FF = "\\u20d0-\\u20ff", $F = DF + LF + FF, Y1 = "\\u2700-\\u27bf", q1 = "a-z\\xdf-\\xf6\\xf8-\\xff", BF = "\\xac\\xb1\\xd7\\xf7", jF = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", WF = "\\u2000-\\u206f", UF = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", V1 = "A-Z\\xc0-\\xd6\\xd8-\\xde", zF = "\\ufe0e\\ufe0f", G1 = BF + jF + WF + UF, K1 = "['’]", Jb = "[" + G1 + "]", HF = "[" + $F + "]", Z1 = "\\d+", YF = "[" + Y1 + "]", X1 = "[" + q1 + "]", Q1 = "[^" + H1 + G1 + Z1 + Y1 + q1 + V1 + "]", qF = "\\ud83c[\\udffb-\\udfff]", VF = "(?:" + HF + "|" + qF + ")", GF = "[^" + H1 + "]", J1 = "(?:\\ud83c[\\udde6-\\uddff]){2}", ew = "[\\ud800-\\udbff][\\udc00-\\udfff]", is = "[" + V1 + "]", KF = "\\u200d", e0 = "(?:" + X1 + "|" + Q1 + ")", ZF = "(?:" + is + "|" + Q1 + ")", t0 = "(?:" + K1 + "(?:d|ll|m|re|s|t|ve))?", n0 = "(?:" + K1 + "(?:D|LL|M|RE|S|T|VE))?", tw = VF + "?", nw = "[" + zF + "]?", XF = "(?:" + KF + "(?:" + [GF, J1, ew].join("|") + ")" + nw + tw + ")*", QF = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", JF = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", e3 = nw + tw + XF, t3 = "(?:" + [YF, J1, ew].join("|") + ")" + e3, n3 = RegExp([
  is + "?" + X1 + "+" + t0 + "(?=" + [Jb, is, "$"].join("|") + ")",
  ZF + "+" + n0 + "(?=" + [Jb, is + e0, "$"].join("|") + ")",
  is + "?" + e0 + "+" + t0,
  is + "+" + n0,
  JF,
  QF,
  Z1,
  t3
].join("|"), "g");
function r3(e) {
  return e.match(n3) || [];
}
function a3(e, t, n) {
  return e = $i(e), t = t, t === void 0 ? MF(e) ? r3(e) : AF(e) : e.match(t) || [];
}
var o3 = "['’]", i3 = RegExp(o3, "g");
function s3(e) {
  return function(t) {
    return z1(a3(vh(t).replace(i3, "")), e, "");
  };
}
function l3(e) {
  return function(t) {
    t = $i(t);
    var n = mm(t) ? fh(t) : void 0, r = n ? n[0] : t.charAt(0), o = n ? E1(n, 1).join("") : t.slice(1);
    return r[e]() + o;
  };
}
var c3 = l3("toUpperCase"), u3 = s3(function(e, t, n) {
  return e + (n ? " " : "") + c3(t);
}), Ti = /* @__PURE__ */ function(e) {
  Jt(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handleClick = function(c) {
      var d = r.props.disabled;
      d || Me(r.props, "onClick", c, r.props);
    }, r;
  }
  var n = t.prototype;
  return n.render = function() {
    var o = this.props, s = o.active, u = o.children, c = o.className, d = o.color, p = o.content, h = o.disabled, m = o.fitted, g = o.header, y = o.icon, b = o.link, _ = o.name, w = o.onClick, N = o.position, F = qe(d, N, V(s, "active"), V(h, "disabled"), V(y === !0 || y && !(_ || p), "icon"), V(g, "header"), V(b, "link"), nn(m, "fitted"), "item", c), x = Ke(t, this.props, function() {
      if (w) return "a";
    }), I = He(t, this.props);
    return lt(u) ? /* @__PURE__ */ Q.createElement(x, ce({}, I, {
      className: F,
      onClick: this.handleClick
    }), We.create(y, {
      autoGenerateKey: !1
    }), lt(p) ? u3(_) : p) : /* @__PURE__ */ Q.createElement(x, ce({}, I, {
      className: F,
      onClick: this.handleClick
    }), u);
  }, t;
}(Kn);
Ti.handledProps = ["active", "as", "children", "className", "color", "content", "disabled", "fitted", "header", "icon", "index", "link", "name", "onClick", "position"];
Ti.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** A menu item can be active. */
  active: l.bool,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Additional colors can be specified. */
  color: l.oneOf(aa),
  /** Shorthand for primary content. */
  content: St,
  /** A menu item can be disabled. */
  disabled: l.bool,
  /** A menu item or menu can remove element padding, vertically or horizontally. */
  fitted: l.oneOfType([l.bool, l.oneOf(["horizontally", "vertically"])]),
  /** A menu item may include a header or may itself be a header. */
  header: l.bool,
  /** MenuItem can be only icon. */
  icon: l.oneOfType([l.bool, _t]),
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
Ti.create = qt(Ti, function(e) {
  return {
    content: e,
    name: e
  };
});
function Kl(e) {
  var t = e.children, n = e.className, r = e.content, o = e.position, s = qe(o, "menu", n), u = He(Kl, e), c = Ke(Kl, e);
  return /* @__PURE__ */ Q.createElement(c, ce({}, u, {
    className: s
  }), lt(t) ? r : t);
}
Kl.handledProps = ["as", "children", "className", "content", "position"];
Kl.propTypes = process.env.NODE_ENV !== "production" ? {
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
var kn = /* @__PURE__ */ function(e) {
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
          }), Me(c, "onClick", p, h), Me(r.props, "onItemClick", p, h);
        }
      };
    }, r;
  }
  var n = t.prototype;
  return n.renderItems = function() {
    var o = this, s = this.props.items, u = this.state.activeIndex;
    return wn(s, function(c, d) {
      return Ti.create(c, {
        defaultProps: {
          active: parseInt(u, 10) === d,
          index: d
        },
        overrideProps: o.handleItemOverrides
      });
    });
  }, n.render = function() {
    var o = this.props, s = o.attached, u = o.borderless, c = o.children, d = o.className, p = o.color, h = o.compact, m = o.fixed, g = o.floated, y = o.fluid, b = o.icon, _ = o.inverted, w = o.pagination, N = o.pointing, F = o.secondary, x = o.size, I = o.stackable, O = o.tabular, S = o.text, C = o.vertical, T = o.widths, R = qe("ui", p, x, V(u, "borderless"), V(h, "compact"), V(y, "fluid"), V(_, "inverted"), V(w, "pagination"), V(N, "pointing"), V(F, "secondary"), V(I, "stackable"), V(S, "text"), V(C, "vertical"), nn(s, "attached"), nn(g, "floated"), nn(b, "icon"), nn(O, "tabular"), Vn(m, "fixed"), Yn(T, "item"), d, "menu"), B = He(t, this.props), U = Ke(t, this.props);
    return /* @__PURE__ */ Q.createElement(U, ce({}, B, {
      className: R
    }), lt(c) ? this.renderItems() : c);
  }, t;
}(Us);
kn.handledProps = ["activeIndex", "as", "attached", "borderless", "children", "className", "color", "compact", "defaultActiveIndex", "fixed", "floated", "fluid", "icon", "inverted", "items", "onItemClick", "pagination", "pointing", "secondary", "size", "stackable", "tabular", "text", "vertical", "widths"];
kn.propTypes = process.env.NODE_ENV !== "production" ? {
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
  color: l.oneOf(aa),
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
  items: gc,
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
  size: l.oneOf(ea(cr, "medium", "big")),
  /** A menu can stack at mobile resolutions. */
  stackable: l.bool,
  /** A menu can be formatted to show tabs of information. */
  tabular: l.oneOfType([l.bool, l.oneOf(["right"])]),
  /** A menu can be formatted for text content. */
  text: l.bool,
  /** A vertical menu displays elements vertically. */
  vertical: l.bool,
  /** A menu can have its items divided evenly. */
  widths: l.oneOf(ar)
} : {};
kn.autoControlledProps = ["activeIndex"];
kn.Header = Gl;
kn.Item = Ti;
kn.Menu = Kl;
kn.create = qt(kn, function(e) {
  return {
    items: e
  };
});
var ws = /* @__PURE__ */ function(e) {
  Jt(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handleClick = function(c) {
      Me(r.props, "onClick", c, r.props);
    }, r.handleKeyDown = function(c) {
      Me(r.props, "onKeyDown", c, r.props), yn.getCode(c) === yn.Enter && Me(r.props, "onClick", c, r.props);
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
    return Ti.create(this.props, {
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
}(Kn);
ws.handledProps = ["active", "disabled", "onClick", "onKeyDown", "type"];
ws.propTypes = process.env.NODE_ENV !== "production" ? {
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
ws.create = qt(ws, function(e) {
  return {
    content: e
  };
});
var zs = /* @__PURE__ */ function(e) {
  Jt(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handleItemClick = function(c, d) {
      var p = d.value, h = r.state.activePage;
      +h != +p && (r.setState({
        activePage: p
      }), Me(r.props, "onPageChange", c, ce({}, r.props, {
        activePage: p
      })));
    }, r.handleItemOverrides = function(c, d, p) {
      return function(h) {
        return {
          active: c,
          type: d,
          key: d + "-" + p,
          onClick: function(g, y) {
            Me(h, "onClick", g, y), y.type !== "ellipsisItem" && r.handleItemClick(g, y);
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
    var o = this, s = this.props, u = s["aria-label"], c = s.boundaryRange, d = s.disabled, p = s.ellipsisItem, h = s.siblingRange, m = s.totalPages, g = this.state.activePage, y = wL({
      activePage: g,
      boundaryRange: c,
      hideEllipsis: xt(p),
      siblingRange: h,
      totalPages: m
    }), b = He(t, this.props);
    return /* @__PURE__ */ Q.createElement(kn, ce({}, b, {
      "aria-label": u,
      pagination: !0,
      role: "navigation"
    }), wn(y, function(_) {
      var w = _.active, N = _.type, F = _.value;
      return ws.create(o.props[N], {
        defaultProps: {
          content: F,
          disabled: d,
          value: F
        },
        overrideProps: o.handleItemOverrides(w, N, F)
      });
    }));
  }, t;
}(Us);
zs.handledProps = ["activePage", "aria-label", "boundaryRange", "defaultActivePage", "disabled", "ellipsisItem", "firstItem", "lastItem", "nextItem", "onPageChange", "pageItem", "prevItem", "siblingRange", "totalPages"];
zs.propTypes = process.env.NODE_ENV !== "production" ? {
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
  ellipsisItem: _t,
  /** A shorthand for PaginationItem. */
  firstItem: _t,
  /** A shorthand for PaginationItem. */
  lastItem: _t,
  /** A shorthand for PaginationItem. */
  nextItem: _t,
  /** A shorthand for PaginationItem. */
  pageItem: _t,
  /** A shorthand for PaginationItem. */
  prevItem: _t,
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
zs.autoControlledProps = ["activePage"];
zs.defaultProps = {
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
zs.Item = ws;
function d3(e, t, n) {
  return e == null ? e : k1(e, t, n);
}
var Gn = /* @__PURE__ */ function(e) {
  Jt(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.inputRef = /* @__PURE__ */ br(), r.labelRef = /* @__PURE__ */ br(), r.canToggle = function() {
      var c = r.props, d = c.disabled, p = c.radio, h = c.readOnly, m = r.state.checked;
      return !d && !h && !(p && m);
    }, r.computeTabIndex = function() {
      var c = r.props, d = c.disabled, p = c.tabIndex;
      return xt(p) ? d ? -1 : 0 : p;
    }, r.handleClick = function(c) {
      var d = r.props.id, p = r.state, h = p.checked, m = p.indeterminate, g = Me(r.inputRef.current, "contains", c.target), y = Me(r.labelRef.current, "contains", c.target), b = !y && !g, _ = !xt(d), w = y && _;
      w || Me(r.props, "onClick", c, ce({}, r.props, {
        checked: !h,
        indeterminate: !!m
      })), r.isClickFromMouse && (r.isClickFromMouse = !1, y && !_ && r.handleChange(c), b && r.handleChange(c), y && _ && c.stopPropagation());
    }, r.handleChange = function(c) {
      var d = r.state.checked;
      r.canToggle() && (Me(r.props, "onChange", c, ce({}, r.props, {
        checked: !d,
        indeterminate: !1
      })), r.setState({
        checked: !d,
        indeterminate: !1
      }));
    }, r.handleMouseDown = function(c) {
      var d = r.state, p = d.checked, h = d.indeterminate;
      Me(r.props, "onMouseDown", c, ce({}, r.props, {
        checked: !!p,
        indeterminate: !!h
      })), c.defaultPrevented || Me(r.inputRef.current, "focus"), c.preventDefault();
    }, r.handleMouseUp = function(c) {
      var d = r.state, p = d.checked, h = d.indeterminate;
      r.isClickFromMouse = !0, Me(r.props, "onMouseUp", c, ce({}, r.props, {
        checked: !!p,
        indeterminate: !!h
      }));
    }, r.setIndeterminate = function() {
      var c = r.state.indeterminate;
      d3(r.inputRef, "current.indeterminate", !!c);
    }, r;
  }
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.setIndeterminate();
  }, n.componentDidUpdate = function() {
    this.setIndeterminate();
  }, n.render = function() {
    var o = this.props, s = o.className, u = o.disabled, c = o.label, d = o.id, p = o.name, h = o.radio, m = o.readOnly, g = o.slider, y = o.toggle, b = o.type, _ = o.value, w = this.state, N = w.checked, F = w.indeterminate, x = qe(
      "ui",
      V(N, "checked"),
      V(u, "disabled"),
      V(F, "indeterminate"),
      // auto apply fitted class to compact white space when there is no label
      // https://semantic-ui.com/modules/checkbox.html#fitted
      V(xt(c), "fitted"),
      V(h, "radio"),
      V(m, "read-only"),
      V(g, "slider"),
      V(y, "toggle"),
      "checkbox",
      s
    ), I = He(t, this.props), O = Ke(t, this.props), S = bm(I, {
      htmlProps: j1
    }), C = S[0], T = S[1], R = mh(c, {
      defaultProps: {
        htmlFor: d
      },
      autoGenerateKey: !1
    }) || /* @__PURE__ */ Q.createElement("label", {
      htmlFor: d
    });
    return /* @__PURE__ */ Q.createElement(O, ce({}, T, {
      className: x,
      onClick: this.handleClick,
      onChange: this.handleChange,
      onMouseDown: this.handleMouseDown,
      onMouseUp: this.handleMouseUp
    }), /* @__PURE__ */ Q.createElement(sr, {
      innerRef: this.inputRef
    }, /* @__PURE__ */ Q.createElement("input", ce({}, C, {
      checked: N,
      className: "hidden",
      disabled: u,
      id: d,
      name: p,
      readOnly: !0,
      tabIndex: this.computeTabIndex(),
      type: b,
      value: _
    }))), /* @__PURE__ */ Q.createElement(sr, {
      innerRef: this.labelRef
    }, R));
  }, t;
}(Us);
Gn.handledProps = ["as", "checked", "className", "defaultChecked", "defaultIndeterminate", "disabled", "fitted", "id", "indeterminate", "label", "name", "onChange", "onClick", "onMouseDown", "onMouseUp", "radio", "readOnly", "slider", "tabIndex", "toggle", "type", "value"];
Gn.propTypes = process.env.NODE_ENV !== "production" ? {
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
  label: _t,
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
Gn.defaultProps = {
  type: "checkbox"
};
Gn.autoControlledProps = ["checked", "indeterminate"];
function $o(e) {
  var t = e.slider, n = e.toggle, r = e.type, o = He($o, e), s = !(t || n) || void 0;
  return /* @__PURE__ */ Q.createElement(Gn, ce({}, o, {
    type: r,
    radio: s,
    slider: t,
    toggle: n
  }));
}
$o.handledProps = ["slider", "toggle", "type"];
$o.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Format to emphasize the current selection state. */
  slider: Gn.propTypes.slider,
  /** Format to show an on or off choice. */
  toggle: Gn.propTypes.toggle,
  /** HTML input type, either checkbox or radio. */
  type: Gn.propTypes.type
} : {};
$o.defaultProps = {
  type: "radio"
};
function f3(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = 0, o = []; ++t < n; ) {
    var s = e[t];
    s && (o[r++] = s);
  }
  return o;
}
function p3(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (!t(e[n], n, e))
      return !1;
  return !0;
}
function h3(e, t) {
  var n = !0;
  return Ws(e, function(r, o, s) {
    return n = !!t(r, o, s), n;
  }), n;
}
function m3(e, t, n) {
  var r = vn(e) ? p3 : h3;
  return r(e, Xo(t));
}
function g3(e, t, n) {
  var r = e == null ? 0 : e.length;
  return r ? (t = t === void 0 ? 1 : mc(t), t = r - t, wd(e, 0, t < 0 ? 0 : t)) : [];
}
var v3 = v1("length"), rw = "\\ud800-\\udfff", y3 = "\\u0300-\\u036f", b3 = "\\ufe20-\\ufe2f", _3 = "\\u20d0-\\u20ff", w3 = y3 + b3 + _3, E3 = "\\ufe0e\\ufe0f", x3 = "[" + rw + "]", yh = "[" + w3 + "]", bh = "\\ud83c[\\udffb-\\udfff]", C3 = "(?:" + yh + "|" + bh + ")", aw = "[^" + rw + "]", ow = "(?:\\ud83c[\\udde6-\\uddff]){2}", iw = "[\\ud800-\\udbff][\\udc00-\\udfff]", O3 = "\\u200d", sw = C3 + "?", lw = "[" + E3 + "]?", S3 = "(?:" + O3 + "(?:" + [aw, ow, iw].join("|") + ")" + lw + sw + ")*", T3 = lw + sw + S3, P3 = "(?:" + [aw + yh + "?", yh, ow, iw, x3].join("|") + ")", r0 = RegExp(bh + "(?=" + bh + ")|" + P3 + T3, "g");
function k3(e) {
  for (var t = r0.lastIndex = 0; r0.test(e); )
    ++t;
  return t;
}
function N3(e) {
  return mm(e) ? k3(e) : v3(e);
}
var I3 = "[object Map]", A3 = "[object Set]";
function R3(e) {
  if (e == null)
    return 0;
  if (oo(e))
    return ym(e) ? N3(e) : e.length;
  var t = ha(e);
  return t == I3 || t == A3 ? e.size : fm(e).length;
}
var a0 = js(function(e) {
  return F1(Cd(e, 1, Bl, !0));
}), M3 = ["ad", "andorra", "ae", "united arab emirates", "uae", "af", "afghanistan", "ag", "antigua", "ai", "anguilla", "al", "albania", "am", "armenia", "an", "netherlands antilles", "ao", "angola", "ar", "argentina", "as", "american samoa", "at", "austria", "au", "australia", "aw", "aruba", "ax", "aland islands", "az", "azerbaijan", "ba", "bosnia", "bb", "barbados", "bd", "bangladesh", "be", "belgium", "bf", "burkina faso", "bg", "bulgaria", "bh", "bahrain", "bi", "burundi", "bj", "benin", "bm", "bermuda", "bn", "brunei", "bo", "bolivia", "br", "brazil", "bs", "bahamas", "bt", "bhutan", "bv", "bouvet island", "bw", "botswana", "by", "belarus", "bz", "belize", "ca", "canada", "cc", "cocos islands", "cd", "congo", "cf", "central african republic", "cg", "congo brazzaville", "ch", "switzerland", "ci", "cote divoire", "ck", "cook islands", "cl", "chile", "cm", "cameroon", "cn", "china", "co", "colombia", "cr", "costa rica", "cs", "cu", "cuba", "cv", "cape verde", "cx", "christmas island", "cy", "cyprus", "cz", "czech republic", "de", "germany", "dj", "djibouti", "dk", "denmark", "dm", "dominica", "do", "dominican republic", "dz", "algeria", "ec", "ecuador", "england", "gb eng", "ee", "estonia", "eg", "egypt", "eh", "western sahara", "er", "eritrea", "es", "spain", "et", "ethiopia", "eu", "european union", "fi", "finland", "fj", "fiji", "fk", "falkland islands", "fm", "micronesia", "fo", "faroe islands", "fr", "france", "ga", "gabon", "gb", "uk", "united kingdom", "gd", "grenada", "ge", "georgia", "gf", "french guiana", "gh", "ghana", "gi", "gibraltar", "gl", "greenland", "gm", "gambia", "gn", "guinea", "gp", "guadeloupe", "gq", "equatorial guinea", "gr", "greece", "gs", "sandwich islands", "gt", "guatemala", "gu", "guam", "gw", "guinea-bissau", "gy", "guyana", "hk", "hong kong", "hm", "heard island", "hn", "honduras", "hr", "croatia", "ht", "haiti", "hu", "hungary", "id", "indonesia", "ie", "ireland", "il", "israel", "in", "india", "io", "indian ocean territory", "iq", "iraq", "ir", "iran", "is", "iceland", "it", "italy", "jm", "jamaica", "jo", "jordan", "jp", "japan", "ke", "kenya", "kg", "kyrgyzstan", "kh", "cambodia", "ki", "kiribati", "km", "comoros", "kn", "saint kitts and nevis", "kp", "north korea", "kr", "south korea", "kw", "kuwait", "ky", "cayman islands", "kz", "kazakhstan", "la", "laos", "lb", "lebanon", "lc", "saint lucia", "li", "liechtenstein", "lk", "sri lanka", "lr", "liberia", "ls", "lesotho", "lt", "lithuania", "lu", "luxembourg", "lv", "latvia", "ly", "libya", "ma", "morocco", "mc", "monaco", "md", "moldova", "me", "montenegro", "mg", "madagascar", "mh", "marshall islands", "mk", "macedonia", "ml", "mali", "mm", "myanmar", "burma", "mn", "mongolia", "mo", "macau", "mp", "northern mariana islands", "mq", "martinique", "mr", "mauritania", "ms", "montserrat", "mt", "malta", "mu", "mauritius", "mv", "maldives", "mw", "malawi", "mx", "mexico", "my", "malaysia", "mz", "mozambique", "na", "namibia", "nc", "new caledonia", "ne", "niger", "nf", "norfolk island", "ng", "nigeria", "ni", "nicaragua", "nl", "netherlands", "no", "norway", "np", "nepal", "nr", "nauru", "nu", "niue", "nz", "new zealand", "om", "oman", "pa", "panama", "pe", "peru", "pf", "french polynesia", "pg", "new guinea", "ph", "philippines", "pk", "pakistan", "pl", "poland", "pm", "saint pierre", "pn", "pitcairn islands", "pr", "puerto rico", "ps", "palestine", "pt", "portugal", "pw", "palau", "py", "paraguay", "qa", "qatar", "re", "reunion", "ro", "romania", "rs", "serbia", "ru", "russia", "rw", "rwanda", "sa", "saudi arabia", "sb", "solomon islands", "sc", "seychelles", "gb sct", "scotland", "sd", "sudan", "se", "sweden", "sg", "singapore", "sh", "saint helena", "si", "slovenia", "sj", "svalbard", "jan mayen", "sk", "slovakia", "sl", "sierra leone", "sm", "san marino", "sn", "senegal", "so", "somalia", "sr", "suriname", "st", "sao tome", "sv", "el salvador", "sy", "syria", "sz", "swaziland", "tc", "caicos islands", "td", "chad", "tf", "french territories", "tg", "togo", "th", "thailand", "tj", "tajikistan", "tk", "tokelau", "tl", "timorleste", "tm", "turkmenistan", "tn", "tunisia", "to", "tonga", "tr", "turkey", "tt", "trinidad", "tv", "tuvalu", "tw", "taiwan", "tz", "tanzania", "ua", "ukraine", "ug", "uganda", "um", "us minor islands", "us", "america", "united states", "uy", "uruguay", "uz", "uzbekistan", "va", "vatican city", "vc", "saint vincent", "ve", "venezuela", "vg", "british virgin islands", "vi", "us virgin islands", "vn", "vietnam", "vu", "vanuatu", "gb wls", "wales", "wf", "wallis and futuna", "ws", "samoa", "ye", "yemen", "yt", "mayotte", "za", "south africa", "zm", "zambia", "zw", "zimbabwe"], Pi = /* @__PURE__ */ function(e) {
  Jt(t, e);
  function t() {
    return e.apply(this, arguments) || this;
  }
  var n = t.prototype;
  return n.render = function() {
    var o = this.props, s = o.className, u = o.name, c = qe(u, "flag", s), d = He(t, this.props), p = Ke(t, this.props);
    return /* @__PURE__ */ Q.createElement(p, ce({}, d, {
      className: c
    }));
  }, t;
}(H_);
Pi.handledProps = ["as", "className", "name"];
Pi.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Additional classes. */
  className: l.string,
  /** Flag name, can use the two digit country code, the full name, or a common alias. */
  name: A1(M3)
} : {};
Pi.defaultProps = {
  as: "i"
};
Pi.create = qt(Pi, function(e) {
  return {
    name: e
  };
});
function Zl(e) {
  var t = e.className, n = qe("divider", t), r = He(Zl, e), o = Ke(Zl, e);
  return /* @__PURE__ */ Q.createElement(o, ce({}, r, {
    className: n
  }));
}
Zl.handledProps = ["as", "className"];
Zl.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Additional classes. */
  className: l.string
} : {};
var ki = /* @__PURE__ */ function(e) {
  Jt(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handleClick = function(c) {
      Me(r.props, "onClick", c, r.props);
    }, r;
  }
  var n = t.prototype;
  return n.render = function() {
    var o = this.props, s = o.active, u = o.children, c = o.className, d = o.content, p = o.disabled, h = o.description, m = o.flag, g = o.icon, y = o.image, b = o.label, _ = o.selected, w = o.text, N = qe(V(s, "active"), V(p, "disabled"), V(_, "selected"), "item", c), F = xt(g) ? FM(u, "DropdownMenu") && "dropdown" : g, x = He(t, this.props), I = Ke(t, this.props), O = {
      role: "option",
      "aria-disabled": p,
      "aria-checked": s,
      "aria-selected": _
    };
    if (!lt(u))
      return /* @__PURE__ */ Q.createElement(I, ce({}, x, O, {
        className: N,
        onClick: this.handleClick
      }), u);
    var S = Pi.create(m, {
      autoGenerateKey: !1
    }), C = We.create(F, {
      autoGenerateKey: !1
    }), T = _r.create(y, {
      autoGenerateKey: !1
    }), R = lr.create(b, {
      autoGenerateKey: !1
    }), B = hh("span", function(te) {
      return {
        children: te
      };
    }, h, {
      defaultProps: {
        className: "description"
      },
      autoGenerateKey: !1
    }), U = hh("span", function(te) {
      return {
        children: te
      };
    }, lt(d) ? w : d, {
      defaultProps: {
        className: "text"
      },
      autoGenerateKey: !1
    });
    return /* @__PURE__ */ Q.createElement(I, ce({}, x, O, {
      className: N,
      onClick: this.handleClick
    }), T, C, S, R, B, U);
  }, t;
}(Kn);
ki.handledProps = ["active", "as", "children", "className", "content", "description", "disabled", "flag", "icon", "image", "label", "onClick", "selected", "text", "value"];
ki.propTypes = process.env.NODE_ENV !== "production" ? {
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
  description: _t,
  /** A dropdown item can be disabled. */
  disabled: l.bool,
  /** Shorthand for Flag. */
  flag: _t,
  /** Shorthand for Icon. */
  icon: _t,
  /** Shorthand for Image. */
  image: _t,
  /** Shorthand for Label. */
  label: _t,
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
ki.create = qt(ki, function(e) {
  return e;
});
function Bo(e) {
  var t = e.children, n = e.className, r = e.content, o = e.icon, s = qe("header", n), u = He(Bo, e), c = Ke(Bo, e);
  return lt(t) ? /* @__PURE__ */ Q.createElement(c, ce({}, u, {
    className: s
  }), We.create(o, {
    autoGenerateKey: !1
  }), r) : /* @__PURE__ */ Q.createElement(c, ce({}, u, {
    className: s
  }), t);
}
Bo.handledProps = ["as", "children", "className", "content", "icon"];
Bo.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function) */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: St,
  /** Shorthand for Icon. */
  icon: _t
} : {};
Bo.create = qt(Bo, function(e) {
  return {
    content: e
  };
});
function Es(e) {
  var t = e.children, n = e.className, r = e.content, o = e.direction, s = e.open, u = e.scrolling, c = qe(o, V(s, "visible"), V(u, "scrolling"), "menu transition", n), d = He(Es, e), p = Ke(Es, e);
  return /* @__PURE__ */ Q.createElement(p, ce({}, d, {
    className: c
  }), lt(t) ? r : t);
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
  content: St,
  /** A dropdown menu can open to the left or to the right. */
  direction: l.oneOf(["left", "right"]),
  /** Whether or not the dropdown menu is displayed. */
  open: l.bool,
  /** A dropdown menu can scroll. */
  scrolling: l.bool
} : {};
var Ni = /* @__PURE__ */ function(e) {
  Jt(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handleChange = function(c) {
      var d = ya(c, "target.value");
      Me(r.props, "onChange", c, ce({}, r.props, {
        value: d
      }));
    }, r;
  }
  var n = t.prototype;
  return n.render = function() {
    var o = this.props, s = o.autoComplete, u = o.className, c = o.tabIndex, d = o.type, p = o.value, h = qe("search", u), m = He(t, this.props);
    return /* @__PURE__ */ Q.createElement("input", ce({}, m, {
      "aria-autocomplete": "list",
      autoComplete: s,
      className: h,
      onChange: this.handleChange,
      tabIndex: c,
      type: d,
      value: p
    }));
  }, t;
}(Kn);
Ni.handledProps = ["as", "autoComplete", "className", "tabIndex", "type", "value"];
Ni.propTypes = process.env.NODE_ENV !== "production" ? {
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
Ni.defaultProps = {
  autoComplete: "off",
  type: "text"
};
Ni.create = qt(Ni, function(e) {
  return {
    type: e
  };
});
function jo(e) {
  var t = e.children, n = e.className, r = e.content, o = qe("divider", n), s = He(jo, e), u = Ke(jo, e);
  return /* @__PURE__ */ Q.createElement(u, ce({
    "aria-atomic": !0,
    "aria-live": "polite",
    role: "alert"
  }, s, {
    className: o
  }), lt(t) ? r : t);
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
    content: e
  };
});
var cw = /[\\^$.*+?()[\]{}|]/g, D3 = RegExp(cw.source);
function L3(e) {
  return e = $i(e), e && D3.test(e) ? e.replace(cw, "\\$&") : e;
}
function ls(e) {
  var t = e.additionLabel, n = e.additionPosition, r = e.allowAdditions, o = e.deburr, s = e.multiple, u = e.options, c = e.search, d = e.searchQuery, p = e.value, h = u;
  if (s && (h = oh(h, function(_) {
    return !ba(p, _.value);
  })), c && d)
    if (ys(c))
      h = c(h, d);
    else {
      var m = o ? vh(d) : d, g = new RegExp(L3(m), "i");
      h = oh(h, function(_) {
        return g.test(o ? vh(_.text) : _.text);
      });
    }
  if (r && c && d && !Pl(h, {
    text: d
  })) {
    var y = /* @__PURE__ */ Q.isValidElement(t) ? /* @__PURE__ */ Q.cloneElement(t, {
      key: "addition-label"
    }) : t || "", b = {
      key: "addition",
      // by using an array, we can pass multiple elements, but when doing so
      // we must specify a `key` for React to know which one is which
      text: [y, /* @__PURE__ */ Q.createElement("b", {
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
ls.handledProps = [];
function o0(e) {
  var t = e.additionLabel, n = e.additionPosition, r = e.allowAdditions, o = e.deburr, s = e.multiple, u = e.options, c = e.search, d = e.searchQuery, p = e.selectedIndex, h = e.value, m = ls({
    value: h,
    options: u,
    searchQuery: d,
    additionLabel: t,
    additionPosition: n,
    allowAdditions: r,
    deburr: o,
    multiple: s,
    search: c
  }), g = _m(m, function(w, N, F) {
    return N.disabled || w.push(F), w;
  }, []), y;
  if (!p || p < 0) {
    var b = g[0];
    y = s ? b : sh(m, ["value", h]) || g[0];
  } else if (s)
    y = _1(g, function(w) {
      return w >= p;
    }), p >= m.length - 1 && (y = g[g.length - 1]);
  else {
    var _ = sh(m, ["value", h]);
    y = ba(g, _) ? _ : void 0;
  }
  return (!y || y < 0) && (y = g[0]), y;
}
var i0 = function(t, n) {
  return xt(t) ? n : t;
}, s0 = function(t) {
  return t && t.map(function(n) {
    return Od(n, ["key", "value"]);
  });
};
function uw(e) {
  var t = e.flag, n = e.image, r = e.text;
  return ys(r) ? r : {
    content: /* @__PURE__ */ Q.createElement(Q.Fragment, null, Pi.create(t), _r.create(n), r)
  };
}
var Cn = /* @__PURE__ */ function(e) {
  Jt(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.searchRef = /* @__PURE__ */ br(), r.sizerRef = /* @__PURE__ */ br(), r.ref = /* @__PURE__ */ br(), r.handleChange = function(c, d) {
      Me(r.props, "onChange", c, ce({}, r.props, {
        value: d
      }));
    }, r.closeOnChange = function(c) {
      var d = r.props, p = d.closeOnChange, h = d.multiple, m = ds(p) ? !h : p;
      m && r.close(c, L1);
    }, r.closeOnEscape = function(c) {
      r.props.closeOnEscape && yn.getCode(c) === yn.Escape && (c.preventDefault(), r.close(c));
    }, r.moveSelectionOnKeyDown = function(c) {
      var d, p = r.props, h = p.multiple, m = p.selectOnNavigation, g = r.state.open;
      if (g) {
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
      var d, p, h, m = r.state.focus && !r.state.open && yn.getCode(c) === yn.Spacebar, g = ((d = c.target) == null ? void 0 : d.tagName) !== "INPUT" && ((p = c.target) == null ? void 0 : p.tagName) !== "TEXTAREA" && ((h = c.target) == null ? void 0 : h.isContentEditable) !== !0;
      m && (g && c.preventDefault(), r.open(c));
    }, r.openOnArrow = function(c) {
      var d = r.state, p = d.focus, h = d.open;
      if (p && !h) {
        var m = yn.getCode(c);
        (m === yn.ArrowDown || m === yn.ArrowUp) && (c.preventDefault(), r.open(c));
      }
    }, r.makeSelectedItemActive = function(c, d) {
      var p = r.state, h = p.open, m = p.value, g = r.props.multiple, y = r.getSelectedItem(d), b = ya(y, "value"), _ = ya(y, "disabled");
      if (xt(b) || !h || _)
        return m;
      var w = g ? a0(m, [b]) : b, N = g ? !!ch(w, m).length : w !== m;
      return N && (r.setState({
        value: w
      }), r.handleChange(c, w), y["data-additional"] && Me(r.props, "onAddItem", c, ce({}, r.props, {
        value: b
      }))), m;
    }, r.selectItemOnEnter = function(c) {
      var d = r.props.search, p = r.state, h = p.open, m = p.selectedIndex;
      if (h) {
        var g = yn.getCode(c) === yn.Enter || // https://github.com/Semantic-Org/Semantic-UI-React/pull/3766
        !d && yn.getCode(c) === yn.Spacebar;
        if (g) {
          c.preventDefault();
          var y = R3(ls({
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
              selectedIndex: o0({
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
            }), r.closeOnChange(c), r.clearSearchQuery(), d && Me(r.searchRef.current, "focus");
          }
        }
      }
    }, r.removeItemOnBackspace = function(c) {
      var d = r.props, p = d.multiple, h = d.search, m = r.state, g = m.searchQuery, y = m.value;
      if (yn.getCode(c) === yn.Backspace && !(g || !h || !p || vi(y))) {
        c.preventDefault();
        var b = g3(y);
        r.setState({
          value: b
        }), r.handleChange(c, b);
      }
    }, r.closeOnDocumentClick = function(c) {
      r.props.closeOnBlur && (r.ref.current && No(r.ref.current, c) || r.close());
    }, r.handleMouseDown = function(c) {
      r.isMouseDown = !0, Me(r.props, "onMouseDown", c, r.props), document.addEventListener("mouseup", r.handleDocumentMouseUp);
    }, r.handleDocumentMouseUp = function() {
      r.isMouseDown = !1, document.removeEventListener("mouseup", r.handleDocumentMouseUp);
    }, r.handleClick = function(c) {
      var d = r.props, p = d.minCharacters, h = d.search, m = r.state, g = m.open, y = m.searchQuery;
      if (Me(r.props, "onClick", c, r.props), c.stopPropagation(), !h) return r.toggle(c);
      if (g) {
        Me(r.searchRef.current, "focus");
        return;
      }
      if (y.length >= p || p === 1) {
        r.open(c);
        return;
      }
      Me(r.searchRef.current, "focus");
    }, r.handleIconClick = function(c) {
      var d = r.props.clearable, p = r.hasValue();
      Me(r.props, "onClick", c, r.props), c.stopPropagation(), d && p ? r.clearValue(c) : r.toggle(c);
    }, r.handleItemClick = function(c, d) {
      var p = r.props, h = p.multiple, m = p.search, g = r.state.value, y = d.value;
      if (c.stopPropagation(), (h || d.disabled) && c.nativeEvent.stopImmediatePropagation(), !d.disabled) {
        var b = d["data-additional"], _ = h ? a0(r.state.value, [y]) : y, w = h ? !!ch(_, g).length : _ !== g;
        w && (r.setState({
          value: _
        }), r.handleChange(c, _)), r.clearSearchQuery(), Me(m ? r.searchRef.current : r.ref.current, "focus"), r.closeOnChange(c), b && Me(r.props, "onAddItem", c, ce({}, r.props, {
          value: y
        }));
      }
    }, r.handleFocus = function(c) {
      var d = r.state.focus;
      d || (Me(r.props, "onFocus", c, r.props), r.setState({
        focus: !0
      }));
    }, r.handleBlur = function(c) {
      var d = ya(c, "currentTarget");
      if (!(d && d.contains(document.activeElement))) {
        var p = r.props, h = p.closeOnBlur, m = p.multiple, g = p.selectOnBlur;
        r.isMouseDown || (Me(r.props, "onBlur", c, r.props), g && !m && (r.makeSelectedItemActive(c, r.state.selectedIndex), h && r.close()), r.setState({
          focus: !1
        }), r.clearSearchQuery());
      }
    }, r.handleSearchChange = function(c, d) {
      var p = d.value;
      c.stopPropagation();
      var h = r.props.minCharacters, m = r.state.open, g = p;
      if (Me(r.props, "onSearchChange", c, ce({}, r.props, {
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
      r.moveSelectionOnKeyDown(c), r.openOnArrow(c), r.openOnSpace(c), r.selectItemOnEnter(c), Me(r.props, "onKeyDown", c);
    }, r.getSelectedItem = function(c) {
      var d = ls({
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
      return ya(d, "[" + c + "]");
    }, r.getItemByValue = function(c) {
      var d = r.props.options;
      return _1(d, {
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
      }), Me(r.props, "onLabelClick", c, d);
    }, r.handleLabelRemove = function(c, d) {
      c.stopPropagation();
      var p = r.state.value, h = ea(p, d.value);
      r.setState({
        value: h
      }), r.handleChange(c, h);
    }, r.getSelectedIndexAfterMove = function(c, d) {
      d === void 0 && (d = r.state.selectedIndex);
      var p = ls({
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
      if (!(p === void 0 || m3(p, "disabled"))) {
        var h = p.length - 1, m = r.props.wrapSelection, g = d + c;
        return !m && (g > h || g < 0) ? g = d : g > h ? g = 0 : g < 0 && (g = h), p[g].disabled ? r.getSelectedIndexAfterMove(c, g) : g;
      }
    }, r.handleIconOverrides = function(c) {
      var d = r.props.clearable, p = qe(d && r.hasValue() && "clear", c.className);
      return {
        className: p,
        onClick: function(m) {
          Me(c, "onClick", m, c), r.handleIconClick(m);
        }
      };
    }, r.clearValue = function(c) {
      var d = r.props.multiple, p = d ? [] : "";
      r.setState({
        value: p
      }), r.handleChange(c, p);
    }, r.computeSearchInputTabIndex = function() {
      var c = r.props, d = c.disabled, p = c.tabIndex;
      return xt(p) ? d ? -1 : 0 : p;
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
        return d ? -1 : xt(h) ? 0 : h;
    }, r.handleSearchInputOverrides = function(c) {
      return {
        onChange: function(p, h) {
          Me(c, "onChange", p, h), r.handleSearchChange(p, h);
        }
      };
    }, r.hasValue = function() {
      var c = r.props.multiple, d = r.state.value;
      return c ? !vi(d) : !xt(d) && d !== "";
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
      h || (m && Me(r.searchRef.current, "focus"), Me(r.props, "onOpen", c, r.props), d && r.setState({
        open: !0
      }), r.scrollSelectedItemIntoView());
    }, r.close = function(c, d) {
      d === void 0 && (d = r.handleClose), r.state.open && (Me(r.props, "onClose", c, r.props), r.setState({
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
      var c = r.props, d = c.multiple, p = c.placeholder, h = c.search, m = c.text, g = r.state, y = g.searchQuery, b = g.selectedIndex, _ = g.value, w = g.open, N = r.hasValue(), F = qe(p && !N && "default", "text", h && y && "filtered"), x = p, I;
      return m ? x = m : w && !d ? I = r.getSelectedItem(b) : N && (I = r.getItemByValue(_)), jo.create(I ? uw(I) : x, {
        defaultProps: {
          className: F
        }
      });
    }, r.renderSearchInput = function() {
      var c = r.props, d = c.search, p = c.searchInput, h = r.state.searchQuery;
      return d && /* @__PURE__ */ Q.createElement(sr, {
        innerRef: r.searchRef
      }, Ni.create(p, {
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
      return d && p && /* @__PURE__ */ Q.createElement("span", {
        className: "sizer",
        ref: r.sizerRef
      });
    }, r.renderLabels = function() {
      var c = r.props, d = c.multiple, p = c.renderLabel, h = r.state, m = h.selectedLabel, g = h.value;
      if (!(!d || vi(g))) {
        var y = wn(g, r.getItemByValue);
        return wn(f3(y), function(b, _) {
          var w = {
            active: b.value === m,
            as: "a",
            key: i0(b.key, b.value),
            onClick: r.handleLabelClick,
            onRemove: r.handleLabelRemove,
            value: b.value
          };
          return lr.create(p(b, _, w), {
            defaultProps: w
          });
        });
      }
    }, r.renderOptions = function() {
      var c = r.props, d = c.lazyLoad, p = c.multiple, h = c.search, m = c.noResultsMessage, g = r.state, y = g.open, b = g.selectedIndex, _ = g.value;
      if (d && !y) return null;
      var w = ls({
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
      if (m !== null && h && vi(w))
        return /* @__PURE__ */ Q.createElement("div", {
          className: "message"
        }, m);
      var N = p ? function(F) {
        return ba(_, F);
      } : function(F) {
        return F === _;
      };
      return wn(w, function(F, x) {
        return ki.create(ce({
          active: N(F.value),
          selected: b === x
        }, F, {
          key: i0(F.key, F.value),
          // Needed for handling click events on disabled items
          style: ce({}, F.style, {
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
      var c = r.props, d = c.children, p = c.direction, h = c.header, m = r.state.open, g = r.getDropdownMenuAriaOptions();
      if (!lt(d)) {
        var y = im.only(d), b = qe(p, V(m, "visible"), y.props.className);
        return /* @__PURE__ */ Y_(y, ce({
          className: b
        }, g));
      }
      return /* @__PURE__ */ Q.createElement(Es, ce({}, g, {
        direction: p,
        open: m
      }), Bo.create(h, {
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
      !kl(u.__value, s.value) || // On option keys/values, we only check those properties to avoid recursive performance impacts.
      // https://github.com/Semantic-Org/Semantic-UI-React/issues/3000
      !aF(s0(o.options), s0(u.__options))
    );
    return d && (c.selectedIndex = o0({
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
    return !kl(o, this.props) || !kl(s, this.state);
  }, n.componentDidUpdate = function(o, s) {
    var u = this.props, c = u.closeOnBlur, d = u.minCharacters, p = u.openOnFocus, h = u.search;
    if (process.env.NODE_ENV !== "production") {
      var m = Array.isArray(this.props.value), g = th(this.props, "value");
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
    var o = this.props, s = o.basic, u = o.button, c = o.className, d = o.compact, p = o.disabled, h = o.error, m = o.fluid, g = o.floating, y = o.icon, b = o.inline, _ = o.item, w = o.labeled, N = o.loading, F = o.multiple, x = o.pointing, I = o.search, O = o.selection, S = o.scrolling, C = o.simple, T = o.trigger, R = this.state, B = R.focus, U = R.open, te = R.upward, z = qe(
      "ui",
      V(U, "active visible"),
      V(p, "disabled"),
      V(h, "error"),
      V(N, "loading"),
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
      V(O, "selection"),
      V(C, "simple"),
      V(S, "scrolling"),
      V(te, "upward"),
      nn(x, "pointing"),
      "dropdown",
      c
    ), ne = He(t, this.props), fe = Ke(t, this.props), ge = this.getDropdownAriaOptions(fe, this.props);
    return /* @__PURE__ */ Q.createElement(sr, {
      innerRef: this.ref
    }, /* @__PURE__ */ Q.createElement(fe, ce({}, ne, ge, {
      className: z,
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
    }), this.renderMenu(), U && /* @__PURE__ */ Q.createElement(Ha, {
      name: "keydown",
      on: this.closeOnEscape
    }), U && /* @__PURE__ */ Q.createElement(Ha, {
      name: "click",
      on: this.closeOnDocumentClick
    }), B && /* @__PURE__ */ Q.createElement(Ha, {
      name: "keydown",
      on: this.removeItemOnBackspace
    })));
  }, t;
}(Us);
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
  allowAdditions: Rt([To(["options", "selection", "search"]), l.bool]),
  /** A Dropdown can reduce its complexity. */
  basic: l.bool,
  /** Format the Dropdown to appear as a button. */
  button: l.bool,
  /** Primary content. */
  children: Rt([Ht(["options", "selection"]), R1({
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
  defaultSelectedLabel: Rt([To(["multiple"]), l.oneOfType([l.number, l.string])]),
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
  options: Rt([Ht(["children"]), l.arrayOf(l.shape(ki.propTypes))]),
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
  selectedLabel: Rt([To(["multiple"]), l.oneOfType([l.string, l.number])]),
  /** A dropdown can be used to select between choices in a form. */
  selection: Rt([Ht(["children"]), To(["options"]), l.bool]),
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
  renderLabel: uw,
  searchInput: "text",
  selectOnBlur: !0,
  selectOnNavigation: !0,
  wrapSelection: !0
};
Cn.autoControlledProps = ["open", "searchQuery", "selectedLabel", "value", "upward"];
Cn.Divider = Zl;
Cn.Header = Bo;
Cn.Item = ki;
Cn.Menu = Es;
Cn.SearchInput = Ni;
Cn.Text = jo;
function jr(e) {
  return /* @__PURE__ */ Q.createElement(Cn, ce({}, e, {
    selection: !0
  }));
}
jr.handledProps = ["options"];
jr.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Array of Dropdown.Item props e.g. `{ text: '', value: '' }` */
  options: l.arrayOf(l.shape(Cn.Item.propTypes)).isRequired
} : {};
jr.Divider = Cn.Divider;
jr.Header = Cn.Header;
jr.Item = Cn.Item;
jr.Menu = Cn.Menu;
var kd = /* @__PURE__ */ function(e) {
  Jt(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.ref = /* @__PURE__ */ br(), r.focus = function() {
      return r.ref.current.focus();
    }, r.handleChange = function(c) {
      var d = ya(c, "target.value");
      Me(r.props, "onChange", c, ce({}, r.props, {
        value: d
      }));
    }, r.handleInput = function(c) {
      var d = ya(c, "target.value");
      Me(r.props, "onInput", c, ce({}, r.props, {
        value: d
      }));
    }, r;
  }
  var n = t.prototype;
  return n.render = function() {
    var o = this.props, s = o.rows, u = o.value, c = He(t, this.props), d = Ke(t, this.props);
    return /* @__PURE__ */ Q.createElement(sr, {
      innerRef: this.ref
    }, /* @__PURE__ */ Q.createElement(d, ce({}, c, {
      onChange: this.handleChange,
      onInput: this.handleInput,
      rows: s,
      value: u
    })));
  }, t;
}(Kn);
kd.handledProps = ["as", "onChange", "onInput", "rows", "value"];
kd.propTypes = process.env.NODE_ENV !== "production" ? {
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
kd.defaultProps = {
  as: "textarea",
  rows: 3
};
function xn(e) {
  var t = e.children, n = e.className, r = e.content, o = e.control, s = e.disabled, u = e.error, c = e.inline, d = e.label, p = e.required, h = e.type, m = e.width, g = e.id, y = qe(V(s, "disabled"), V(u, "error"), V(c, "inline"), V(p, "required"), Yn(m, "wide"), "field", n), b = He(xn, e), _ = Ke(xn, e), w = ya(u, "pointing", "above"), N = lr.create(u, {
    autoGenerateKey: !1,
    defaultProps: {
      prompt: !0,
      pointing: w,
      id: g ? g + "-error-message" : void 0,
      role: "alert",
      "aria-atomic": !0
    }
  }), F = (w === "below" || w === "right") && N, x = (w === "above" || w === "left") && N;
  if (xt(o))
    return xt(d) ? /* @__PURE__ */ Q.createElement(_, ce({}, b, {
      className: y,
      id: g
    }), lt(t) ? r : t) : /* @__PURE__ */ Q.createElement(_, ce({}, b, {
      className: y,
      id: g
    }), F, mh(d, {
      autoGenerateKey: !1
    }), x);
  var I = g && u ? g + "-error-message" : null, O = {
    "aria-describedby": I,
    "aria-invalid": u ? !0 : void 0
  }, S = ce({}, b, {
    content: r,
    children: t,
    disabled: s,
    required: p,
    type: h,
    id: g
  });
  return o === "input" && (h === "checkbox" || h === "radio") ? /* @__PURE__ */ Q.createElement(_, {
    className: y
  }, /* @__PURE__ */ Q.createElement("label", null, F, /* @__PURE__ */ hp(o, ce({}, O, S)), " ", d, x)) : o === Gn || o === $o ? /* @__PURE__ */ Q.createElement(_, {
    className: y
  }, F, /* @__PURE__ */ hp(o, ce({}, O, S, {
    label: d
  })), x) : /* @__PURE__ */ Q.createElement(_, {
    className: y
  }, mh(d, {
    defaultProps: {
      htmlFor: g
    },
    autoGenerateKey: !1
  }), F, /* @__PURE__ */ hp(o, ce({}, O, S)), x);
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
  error: l.oneOfType([l.bool, _t]),
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
    To(["control"])
    // don't strictly validate HTML types
    // a control might be passed that uses a `type` prop with unknown values
    // let the control validate if for us
  ]),
  /** A field can specify its width in grid columns */
  width: l.oneOf(ar)
} : {};
function xs(e) {
  var t = e.control, n = He(xs, e), r = Ke(xs, e);
  return /* @__PURE__ */ Q.createElement(r, ce({}, n, {
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
  control: ft
};
function Cs(e) {
  var t = e.control, n = He(Cs, e), r = Ke(Cs, e);
  return /* @__PURE__ */ Q.createElement(r, ce({}, n, {
    control: t
  }));
}
Cs.handledProps = ["as", "control"];
Cs.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** A FormField control prop. */
  control: xn.propTypes.control
} : {};
Cs.defaultProps = {
  as: xn,
  control: Gn
};
function Os(e) {
  var t = e.control, n = He(Os, e), r = Ke(Os, e);
  return /* @__PURE__ */ Q.createElement(r, ce({}, n, {
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
  control: Cn
};
function Xl(e) {
  var t = e.children, n = e.className, r = e.grouped, o = e.inline, s = e.unstackable, u = e.widths, c = qe(V(r, "grouped"), V(o, "inline"), V(s, "unstackable"), Yn(u, null, !0), "fields", n), d = He(Xl, e), p = Ke(Xl, e);
  return /* @__PURE__ */ Q.createElement(p, ce({}, d, {
    className: c
  }), t);
}
Xl.handledProps = ["as", "children", "className", "grouped", "inline", "unstackable", "widths"];
Xl.propTypes = process.env.NODE_ENV !== "production" ? {
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
  widths: l.oneOf([].concat(ar, ["equal"]))
} : {};
var Ss = /* @__PURE__ */ function(e) {
  Jt(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.inputRef = /* @__PURE__ */ br(), r.computeIcon = function() {
      var c = r.props, d = c.loading, p = c.icon;
      if (!xt(p)) return p;
      if (d) return "spinner";
    }, r.computeTabIndex = function() {
      var c = r.props, d = c.disabled, p = c.tabIndex;
      if (!xt(p)) return p;
      if (d) return -1;
    }, r.focus = function(c) {
      return r.inputRef.current.focus(c);
    }, r.select = function() {
      return r.inputRef.current.select();
    }, r.handleChange = function(c) {
      var d = ya(c, "target.value");
      Me(r.props, "onChange", c, ce({}, r.props, {
        value: d
      }));
    }, r.handleChildOverrides = function(c, d) {
      return ce({}, d, c.props, {
        ref: function(h) {
          va(c.ref, h), r.inputRef.current = h;
        }
      });
    }, r.partitionProps = function() {
      var c = r.props, d = c.disabled, p = c.type, h = r.computeTabIndex(), m = He(t, r.props), g = bm(m), y = g[0], b = g[1];
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
    var o = this, s = this.props, u = s.action, c = s.actionPosition, d = s.children, p = s.className, h = s.disabled, m = s.error, g = s.fluid, y = s.focus, b = s.icon, _ = s.iconPosition, w = s.input, N = s.inverted, F = s.label, x = s.labelPosition, I = s.loading, O = s.size, S = s.transparent, C = s.type, T = qe("ui", O, V(h, "disabled"), V(m, "error"), V(g, "fluid"), V(y, "focus"), V(N, "inverted"), V(I, "loading"), V(S, "transparent"), Vn(c, "action") || V(u, "action"), Vn(_, "icon") || V(b || I, "icon"), Vn(x, "labeled") || V(F, "labeled"), "input", p), R = Ke(t, this.props), B = this.partitionProps(), U = B[0], te = B[1];
    if (!lt(d)) {
      var z = wn(im.toArray(d), function(ge) {
        return ge.type !== "input" ? ge : /* @__PURE__ */ Y_(ge, o.handleChildOverrides(ge, U));
      });
      return /* @__PURE__ */ Q.createElement(R, ce({}, te, {
        className: T
      }), z);
    }
    var ne = ft.create(u, {
      autoGenerateKey: !1
    }), fe = lr.create(F, {
      defaultProps: {
        className: qe(
          "label",
          // add 'left|right corner'
          ba(x, "corner") && x
        )
      },
      autoGenerateKey: !1
    });
    return /* @__PURE__ */ Q.createElement(R, ce({}, te, {
      className: T
    }), c === "left" && ne, x !== "right" && fe, GD(w || C, {
      defaultProps: U,
      autoGenerateKey: !1
    }), We.create(this.computeIcon(), {
      autoGenerateKey: !1
    }), c !== "left" && ne, x === "right" && fe);
  }, t;
}(Kn);
Ss.handledProps = ["action", "actionPosition", "as", "children", "className", "disabled", "error", "fluid", "focus", "icon", "iconPosition", "input", "inverted", "label", "labelPosition", "loading", "onChange", "size", "tabIndex", "transparent", "type"];
Ss.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** An Input can be formatted to alert the user to an action they may perform. */
  action: l.oneOfType([l.bool, _t]),
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
  icon: l.oneOfType([l.bool, _t]),
  /** An Icon can appear inside an Input on the left or right. */
  iconPosition: l.oneOf(["left"]),
  /** Shorthand for creating the HTML Input. */
  input: _t,
  /** Format to appear on dark backgrounds. */
  inverted: l.bool,
  /** Optional Label to display along side the Input. */
  label: _t,
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
Ss.defaultProps = {
  type: "text"
};
Ss.create = qt(Ss, function(e) {
  return {
    type: e
  };
});
function Ts(e) {
  var t = e.control, n = He(Ts, e), r = Ke(Ts, e);
  return /* @__PURE__ */ Q.createElement(r, ce({}, n, {
    control: t
  }));
}
Ts.handledProps = ["as", "control"];
Ts.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** A FormField control prop. */
  control: xn.propTypes.control
} : {};
Ts.defaultProps = {
  as: xn,
  control: Ss
};
function Ps(e) {
  var t = e.control, n = He(Ps, e), r = Ke(Ps, e);
  return /* @__PURE__ */ Q.createElement(r, ce({}, n, {
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
  control: $o
};
function ks(e) {
  var t = e.control, n = e.options, r = He(ks, e), o = Ke(ks, e);
  return /* @__PURE__ */ Q.createElement(o, ce({}, r, {
    control: t,
    options: n
  }));
}
ks.handledProps = ["as", "control", "options"];
ks.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** A FormField control prop. */
  control: xn.propTypes.control,
  /** Array of Dropdown.Item props e.g. `{ text: '', value: '' }` */
  options: l.arrayOf(l.shape(Cn.Item.propTypes)).isRequired
} : {};
ks.defaultProps = {
  as: xn,
  control: jr
};
function Ns(e) {
  var t = e.control, n = He(Ns, e), r = Ke(Ns, e);
  return /* @__PURE__ */ Q.createElement(r, ce({}, n, {
    control: t
  }));
}
Ns.handledProps = ["as", "control"];
Ns.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** A FormField control prop. */
  control: xn.propTypes.control
} : {};
Ns.defaultProps = {
  as: xn,
  control: kd
};
var An = /* @__PURE__ */ function(e) {
  Jt(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handleSubmit = function(c) {
      var d = r.props.action;
      typeof d != "string" && Me(c, "preventDefault");
      for (var p = arguments.length, h = new Array(p > 1 ? p - 1 : 0), m = 1; m < p; m++)
        h[m - 1] = arguments[m];
      Me.apply(void 0, [r.props, "onSubmit", c, r.props].concat(h));
    }, r;
  }
  var n = t.prototype;
  return n.render = function() {
    var o = this.props, s = o.action, u = o.children, c = o.className, d = o.error, p = o.inverted, h = o.loading, m = o.reply, g = o.size, y = o.success, b = o.unstackable, _ = o.warning, w = o.widths, N = qe("ui", g, V(d, "error"), V(p, "inverted"), V(h, "loading"), V(m, "reply"), V(y, "success"), V(b, "unstackable"), V(_, "warning"), Yn(w, null, !0), "form", c), F = He(t, this.props), x = Ke(t, this.props);
    return /* @__PURE__ */ Q.createElement(x, ce({}, F, {
      action: s,
      className: N,
      onSubmit: this.handleSubmit
    }), u);
  }, t;
}(Kn);
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
  size: l.oneOf(ea(cr, "medium")),
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
An.Button = xs;
An.Checkbox = Cs;
An.Dropdown = Os;
An.Group = Xl;
An.Input = Ts;
An.Radio = Ps;
An.Select = ks;
An.TextArea = Ns;
function Xa(e) {
  var t = e.children, n = e.className, r = e.computer, o = e.color, s = e.floated, u = e.largeScreen, c = e.mobile, d = e.only, p = e.stretched, h = e.tablet, m = e.textAlign, g = e.verticalAlign, y = e.widescreen, b = e.width, _ = qe(o, V(p, "stretched"), Vu(d, "only"), Bi(m), Vn(s, "floated"), Qo(g), Yn(r, "wide computer"), Yn(u, "wide large screen"), Yn(c, "wide mobile"), Yn(h, "wide tablet"), Yn(y, "wide widescreen"), Yn(b, "wide"), "column", n), w = He(Xa, e), N = Ke(Xa, e);
  return /* @__PURE__ */ Q.createElement(N, ce({}, w, {
    className: _
  }), t);
}
Xa.handledProps = ["as", "children", "className", "color", "computer", "floated", "largeScreen", "mobile", "only", "stretched", "tablet", "textAlign", "verticalAlign", "widescreen", "width"];
Xa.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** A grid column can be colored. */
  color: l.oneOf(aa),
  /** A column can specify a width for a computer. */
  computer: Rt([Ht(["width"]), l.oneOf(ar)]),
  /** A column can sit flush against the left or right edge of a row. */
  floated: l.oneOf(vc),
  /** A column can specify a width for a large screen device. */
  largeScreen: Rt([Ht(["width"]), l.oneOf(ar)]),
  /** A column can specify a width for a mobile device. */
  mobile: Rt([Ht(["width"]), l.oneOf(ar)]),
  /** A column can appear only for a specific device, or screen sizes. */
  only: Gu(U1),
  /** A column can stretch its contents to take up the entire grid or row height. */
  stretched: l.bool,
  /** A column can specify a width for a tablet device. */
  tablet: Rt([Ht(["width"]), l.oneOf(ar)]),
  /** A column can specify its text alignment. */
  textAlign: l.oneOf(ji),
  /** A column can specify its vertical alignment to have all its columns vertically centered. */
  verticalAlign: l.oneOf(Wi),
  /** A column can specify a width for a wide screen device. */
  widescreen: Rt([Ht(["width"]), l.oneOf(ar)]),
  /** Represents width of column. */
  width: Rt([Ht(["computer", "largeScreen", "mobile", "tablet", "widescreen"]), l.oneOf(ar)])
} : {};
Xa.create = qt(Xa, function(e) {
  return {
    children: e
  };
});
function Ql(e) {
  var t = e.centered, n = e.children, r = e.className, o = e.color, s = e.columns, u = e.divided, c = e.only, d = e.reversed, p = e.stretched, h = e.textAlign, m = e.verticalAlign, g = qe(o, V(t, "centered"), V(u, "divided"), V(p, "stretched"), Vu(c, "only"), Vu(d, "reversed"), Bi(h), Qo(m), Yn(s, "column", !0), "row", r), y = He(Ql, e), b = Ke(Ql, e);
  return /* @__PURE__ */ Q.createElement(b, ce({}, y, {
    className: g
  }), n);
}
Ql.handledProps = ["as", "centered", "children", "className", "color", "columns", "divided", "only", "reversed", "stretched", "textAlign", "verticalAlign"];
Ql.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** A row can have its columns centered. */
  centered: l.bool,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** A grid row can be colored. */
  color: l.oneOf(aa),
  /** Represents column count per line in Row. */
  columns: l.oneOf([].concat(ar, ["equal"])),
  /** A row can have dividers between its columns. */
  divided: l.bool,
  /** A row can appear only for a specific device, or screen sizes. */
  only: Gu(U1),
  /** A row can specify that its columns should reverse order at different device sizes. */
  reversed: Gu(["computer", "computer vertically", "mobile", "mobile vertically", "tablet", "tablet vertically"]),
  /** A row can stretch its contents to take up the entire column height. */
  stretched: l.bool,
  /** A row can specify its text alignment. */
  textAlign: l.oneOf(ji),
  /** A row can specify its vertical alignment to have all its columns vertically centered. */
  verticalAlign: l.oneOf(Wi)
} : {};
function Ii(e) {
  var t = e.celled, n = e.centered, r = e.children, o = e.className, s = e.columns, u = e.container, c = e.divided, d = e.doubling, p = e.inverted, h = e.padded, m = e.relaxed, g = e.reversed, y = e.stackable, b = e.stretched, _ = e.textAlign, w = e.verticalAlign, N = qe("ui", V(n, "centered"), V(u, "container"), V(d, "doubling"), V(p, "inverted"), V(y, "stackable"), V(b, "stretched"), nn(t, "celled"), nn(c, "divided"), nn(h, "padded"), nn(m, "relaxed"), Vu(g, "reversed"), Bi(_), Qo(w), Yn(s, "column", !0), "grid", o), F = He(Ii, e), x = Ke(Ii, e);
  return /* @__PURE__ */ Q.createElement(x, ce({}, F, {
    className: N
  }), r);
}
Ii.handledProps = ["as", "celled", "centered", "children", "className", "columns", "container", "divided", "doubling", "inverted", "padded", "relaxed", "reversed", "stackable", "stretched", "textAlign", "verticalAlign"];
Ii.Column = Xa;
Ii.Row = Ql;
Ii.propTypes = process.env.NODE_ENV !== "production" ? {
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
  columns: l.oneOf([].concat(ar, ["equal"])),
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
  reversed: Gu(["computer", "computer vertically", "mobile", "mobile vertically", "tablet", "tablet vertically"]),
  /** A grid can have its columns stack on-top of each other after reaching mobile breakpoints. */
  stackable: l.bool,
  /** A grid can stretch its contents to take up the entire grid height. */
  stretched: l.bool,
  /** A grid can specify its text alignment. */
  textAlign: l.oneOf(ji),
  /** A grid can specify its vertical alignment to have all its columns vertically centered. */
  verticalAlign: l.oneOf(Wi)
} : {};
function Ai(e) {
  var t = e.children, n = e.className, r = qe(n), o = He(Ai, e), s = Ke(Ai, e);
  return /* @__PURE__ */ Q.createElement(s, ce({}, o, {
    className: r
  }), t);
}
Ai.handledProps = ["as", "children", "className"];
Ai.defaultProps = {
  as: "tbody"
};
Ai.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string
} : {};
function Oa(e) {
  var t = e.active, n = e.children, r = e.className, o = e.collapsing, s = e.content, u = e.disabled, c = e.error, d = e.icon, p = e.negative, h = e.positive, m = e.selectable, g = e.singleLine, y = e.textAlign, b = e.verticalAlign, _ = e.warning, w = e.width, N = qe(V(t, "active"), V(o, "collapsing"), V(u, "disabled"), V(c, "error"), V(p, "negative"), V(h, "positive"), V(m, "selectable"), V(g, "single line"), V(_, "warning"), Bi(y), Qo(b), Yn(w, "wide"), r), F = He(Oa, e), x = Ke(Oa, e);
  return lt(n) ? /* @__PURE__ */ Q.createElement(x, ce({}, F, {
    className: N
  }), We.create(d), s) : /* @__PURE__ */ Q.createElement(x, ce({}, F, {
    className: N
  }), n);
}
Oa.handledProps = ["active", "as", "children", "className", "collapsing", "content", "disabled", "error", "icon", "negative", "positive", "selectable", "singleLine", "textAlign", "verticalAlign", "warning", "width"];
Oa.defaultProps = {
  as: "td"
};
Oa.propTypes = process.env.NODE_ENV !== "production" ? {
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
  icon: _t,
  /** A cell may let a user know whether a value is bad. */
  negative: l.bool,
  /** A cell may let a user know whether a value is good. */
  positive: l.bool,
  /** A cell can be selectable. */
  selectable: l.bool,
  /** A cell can specify that its contents should remain on a single line and not wrap. */
  singleLine: l.bool,
  /** A table cell can adjust its text alignment. */
  textAlign: l.oneOf(ea(ji, "justified")),
  /** A table cell can adjust its text alignment. */
  verticalAlign: l.oneOf(Wi),
  /** A cell may warn a user. */
  warning: l.bool,
  /** A table can specify the width of individual columns independently. */
  width: l.oneOf(ar)
} : {};
Oa.create = qt(Oa, function(e) {
  return {
    content: e
  };
});
function Wo(e) {
  var t = e.children, n = e.className, r = e.content, o = e.fullWidth, s = qe(V(o, "full-width"), n), u = He(Wo, e), c = Ke(Wo, e);
  return /* @__PURE__ */ Q.createElement(c, ce({}, u, {
    className: s
  }), lt(t) ? r : t);
}
Wo.handledProps = ["as", "children", "className", "content", "fullWidth"];
Wo.defaultProps = {
  as: "thead"
};
Wo.propTypes = process.env.NODE_ENV !== "production" ? {
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
function Hs(e) {
  var t = e.as, n = He(Hs, e);
  return /* @__PURE__ */ Q.createElement(Wo, ce({}, n, {
    as: t
  }));
}
Hs.handledProps = ["as"];
Hs.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType
} : {};
Hs.defaultProps = {
  as: "tfoot"
};
function yc(e) {
  var t = e.as, n = e.className, r = e.sorted, o = qe(Vn(r, "sorted"), n), s = He(yc, e);
  return /* @__PURE__ */ Q.createElement(Oa, ce({}, s, {
    as: t,
    className: o
  }));
}
yc.handledProps = ["as", "className", "sorted"];
yc.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Additional classes. */
  className: l.string,
  /** A header cell can be sorted in ascending or descending order. */
  sorted: l.oneOf(["ascending", "descending"])
} : {};
yc.defaultProps = {
  as: "th"
};
function Dr(e) {
  var t = e.active, n = e.cellAs, r = e.cells, o = e.children, s = e.className, u = e.disabled, c = e.error, d = e.negative, p = e.positive, h = e.textAlign, m = e.verticalAlign, g = e.warning, y = qe(V(t, "active"), V(u, "disabled"), V(c, "error"), V(d, "negative"), V(p, "positive"), V(g, "warning"), Bi(h), Qo(m), s), b = He(Dr, e), _ = Ke(Dr, e);
  return lt(o) ? /* @__PURE__ */ Q.createElement(_, ce({}, b, {
    className: y
  }), wn(r, function(w) {
    return Oa.create(w, {
      defaultProps: {
        as: n
      }
    });
  })) : /* @__PURE__ */ Q.createElement(_, ce({}, b, {
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
  cells: gc,
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
  textAlign: l.oneOf(ea(ji, "justified")),
  /** A table row can adjust its vertical alignment. */
  verticalAlign: l.oneOf(Wi),
  /** A row may warn a user. */
  warning: l.bool
} : {};
Dr.create = qt(Dr, function(e) {
  return {
    cells: e
  };
});
function bt(e) {
  var t = e.attached, n = e.basic, r = e.celled, o = e.children, s = e.className, u = e.collapsing, c = e.color, d = e.columns, p = e.compact, h = e.definition, m = e.fixed, g = e.footerRow, y = e.headerRow, b = e.headerRows, _ = e.inverted, w = e.padded, N = e.renderBodyRow, F = e.selectable, x = e.singleLine, I = e.size, O = e.sortable, S = e.stackable, C = e.striped, T = e.structured, R = e.tableData, B = e.textAlign, U = e.unstackable, te = e.verticalAlign, z = qe("ui", c, I, V(r, "celled"), V(u, "collapsing"), V(h, "definition"), V(m, "fixed"), V(_, "inverted"), V(F, "selectable"), V(x, "single line"), V(O, "sortable"), V(S, "stackable"), V(C, "striped"), V(T, "structured"), V(U, "unstackable"), nn(t, "attached"), nn(n, "basic"), nn(p, "compact"), nn(w, "padded"), Bi(B), Qo(te), Yn(d, "column"), "table", s), ne = He(bt, e), fe = Ke(bt, e);
  if (!lt(o))
    return /* @__PURE__ */ Q.createElement(fe, ce({}, ne, {
      className: z
    }), o);
  var ge = y || b, Pe = {
    defaultProps: {
      cellAs: "th"
    }
  }, se = ge && /* @__PURE__ */ Q.createElement(Wo, null, Dr.create(y, Pe), wn(b, function(me) {
    return Dr.create(me, Pe);
  }));
  return /* @__PURE__ */ Q.createElement(fe, ce({}, ne, {
    className: z
  }), se, /* @__PURE__ */ Q.createElement(Ai, null, N && wn(R, function(me, J) {
    return Dr.create(N(me, J));
  })), g && /* @__PURE__ */ Q.createElement(Hs, null, Dr.create(g)));
}
bt.handledProps = ["as", "attached", "basic", "celled", "children", "className", "collapsing", "color", "columns", "compact", "definition", "fixed", "footerRow", "headerRow", "headerRows", "inverted", "padded", "renderBodyRow", "selectable", "singleLine", "size", "sortable", "stackable", "striped", "structured", "tableData", "textAlign", "unstackable", "verticalAlign"];
bt.defaultProps = {
  as: "table"
};
bt.propTypes = process.env.NODE_ENV !== "production" ? {
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
  color: l.oneOf(aa),
  /** A table can specify its column count to divide its content evenly. */
  columns: l.oneOf(ar),
  /** A table may sometimes need to be more compact to make more rows visible at a time. */
  compact: l.oneOfType([l.bool, l.oneOf(["very"])]),
  /** A table may be formatted to emphasize a first column that defines a rows content. */
  definition: l.bool,
  /**
   * A table can use fixed a special faster form of table rendering that does not resize table cells based on content
   */
  fixed: l.bool,
  /** Shorthand for a TableRow to be placed within Table.Footer. */
  footerRow: _t,
  /** Shorthand for a TableRow to be placed within Table.Header. */
  headerRow: Rt([Ht(["headerRows"]), _t]),
  /** Shorthand for multiple TableRows to be placed within Table.Header. */
  headerRows: Rt([Ht(["headerRow"]), gc]),
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
  renderBodyRow: Rt([Ht(["children"]), To(["tableData"]), l.func]),
  /** A table can have its rows appear selectable. */
  selectable: l.bool,
  /** A table can specify that its cell contents should remain on a single line and not wrap. */
  singleLine: l.bool,
  /** A table can also be small or large. */
  size: l.oneOf(ea(cr, "mini", "tiny", "medium", "big", "huge", "massive")),
  /** A table may allow a user to sort contents by clicking on a table header. */
  sortable: l.bool,
  /** A table can specify how it stacks table content responsively. */
  stackable: l.bool,
  /** A table can stripe alternate rows of content with a darker color to increase contrast. */
  striped: l.bool,
  /** A table can be formatted to display complex structured data. */
  structured: l.bool,
  /** Data to be passed to the renderBodyRow function. */
  tableData: Rt([Ht(["children"]), To(["renderBodyRow"]), l.array]),
  /** A table can adjust its text alignment. */
  textAlign: l.oneOf(ea(ji, "justified")),
  /** A table can specify how it stacks table content responsively. */
  unstackable: l.bool,
  /** A table can adjust its text alignment. */
  verticalAlign: l.oneOf(Wi)
} : {};
bt.Body = Ai;
bt.Cell = Oa;
bt.Footer = Hs;
bt.Header = Wo;
bt.HeaderCell = yc;
bt.Row = Dr;
function Uo(e) {
  var t = e.children, n = e.className, r = e.content, o = qe("sub header", n), s = He(Uo, e), u = Ke(Uo, e);
  return /* @__PURE__ */ Q.createElement(u, ce({}, s, {
    className: o
  }), lt(t) ? r : t);
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
  content: St
} : {};
Uo.create = qt(Uo, function(e) {
  return {
    content: e
  };
});
function Is(e) {
  var t = e.children, n = e.className, r = e.content, o = qe("content", n), s = He(Is, e), u = Ke(Is, e);
  return /* @__PURE__ */ Q.createElement(u, ce({}, s, {
    className: o
  }), lt(t) ? r : t);
}
Is.handledProps = ["as", "children", "className", "content"];
Is.propTypes = process.env.NODE_ENV !== "production" ? {
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
  var t = e.attached, n = e.block, r = e.children, o = e.className, s = e.color, u = e.content, c = e.disabled, d = e.dividing, p = e.floated, h = e.icon, m = e.image, g = e.inverted, y = e.size, b = e.sub, _ = e.subheader, w = e.textAlign, N = qe("ui", s, y, V(n, "block"), V(c, "disabled"), V(d, "dividing"), Vn(p, "floated"), V(h === !0, "icon"), V(m === !0, "image"), V(g, "inverted"), V(b, "sub"), nn(t, "attached"), Bi(w), "header", o), F = He(qn, e), x = Ke(qn, e);
  if (!lt(r))
    return /* @__PURE__ */ Q.createElement(x, ce({}, F, {
      className: N
    }), r);
  var I = We.create(h, {
    autoGenerateKey: !1
  }), O = _r.create(m, {
    autoGenerateKey: !1
  }), S = Uo.create(_, {
    autoGenerateKey: !1
  });
  return I || O ? /* @__PURE__ */ Q.createElement(x, ce({}, F, {
    className: N
  }), I || O, (u || S) && /* @__PURE__ */ Q.createElement(Is, null, u, S)) : /* @__PURE__ */ Q.createElement(x, ce({}, F, {
    className: N
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
  color: l.oneOf(aa),
  /** Shorthand for primary content. */
  content: St,
  /** Show that the header is inactive. */
  disabled: l.bool,
  /** Divide header from the content below it. */
  dividing: l.bool,
  /** Header can sit to the left or right of other content. */
  floated: l.oneOf(vc),
  /** Add an icon by icon name or pass an Icon. */
  icon: Rt([Ht(["image"]), l.oneOfType([l.bool, _t])]),
  /** Add an image by img src or pass an Image. */
  image: Rt([Ht(["icon"]), l.oneOfType([l.bool, _t])]),
  /** Inverts the color of the header for dark backgrounds. */
  inverted: l.bool,
  /** Content headings are sized with em and are based on the font-size of their container. */
  size: l.oneOf(ea(cr, "big", "massive", "mini")),
  /** Headers may be formatted to label smaller or de-emphasized content. */
  sub: l.bool,
  /** Shorthand for Header.Subheader. */
  subheader: _t,
  /** Align header content. */
  textAlign: l.oneOf(ji)
} : {};
qn.Content = Is;
qn.Subheader = Uo;
function Jl(e) {
  var t = e.active, n = e.children, r = e.className, o = e.content, s = e.disabled, u = e.indeterminate, c = e.inline, d = e.inverted, p = e.size, h = qe("ui", p, V(t, "active"), V(s, "disabled"), V(u, "indeterminate"), V(d, "inverted"), V(n || o, "text"), nn(c, "inline"), "loader", r), m = He(Jl, e), g = Ke(Jl, e);
  return /* @__PURE__ */ Q.createElement(g, ce({}, m, {
    className: h
  }), lt(n) ? o : n);
}
Jl.handledProps = ["active", "as", "children", "className", "content", "disabled", "indeterminate", "inline", "inverted", "size"];
Jl.propTypes = process.env.NODE_ENV !== "production" ? {
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
function F3(e) {
  return Br(e) && e.nodeType === 1 && !Sd(e);
}
var $3 = L.createContext();
L.createContext();
var B3 = function(t) {
  return Array.isArray(t) ? t[0] : t;
}, j3 = function(t) {
  if (typeof t == "function") {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      r[o - 1] = arguments[o];
    return t.apply(void 0, r);
  }
}, W3 = function(t, n) {
  if (typeof t == "function")
    return j3(t, n);
  t != null && (t.current = n);
}, l0 = function(t) {
  return t.reduce(function(n, r) {
    var o = r[0], s = r[1];
    return n[o] = s, n;
  }, {});
}, c0 = typeof window < "u" && window.document && window.document.createElement ? L.useLayoutEffect : L.useEffect, or = "top", Wr = "bottom", Ur = "right", ir = "left", wm = "auto", bc = [or, Wr, Ur, ir], As = "start", ec = "end", U3 = "clippingParents", dw = "viewport", gl = "popper", z3 = "reference", u0 = /* @__PURE__ */ bc.reduce(function(e, t) {
  return e.concat([t + "-" + As, t + "-" + ec]);
}, []), fw = /* @__PURE__ */ [].concat(bc, [wm]).reduce(function(e, t) {
  return e.concat([t, t + "-" + As, t + "-" + ec]);
}, []), H3 = "beforeRead", Y3 = "read", q3 = "afterRead", V3 = "beforeMain", G3 = "main", K3 = "afterMain", Z3 = "beforeWrite", X3 = "write", Q3 = "afterWrite", J3 = [H3, Y3, q3, V3, G3, K3, Z3, X3, Q3];
function Sa(e) {
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
function Ri(e) {
  var t = wr(e).Element;
  return e instanceof t || e instanceof Element;
}
function Fr(e) {
  var t = wr(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Em(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = wr(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function e$(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, s = t.elements[n];
    !Fr(s) || !Sa(s) || (Object.assign(s.style, r), Object.keys(o).forEach(function(u) {
      var c = o[u];
      c === !1 ? s.removeAttribute(u) : s.setAttribute(u, c === !0 ? "" : c);
    }));
  });
}
function t$(e) {
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
      !Fr(o) || !Sa(o) || (Object.assign(o.style, c), Object.keys(s).forEach(function(d) {
        o.removeAttribute(d);
      }));
    });
  };
}
const n$ = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: e$,
  effect: t$,
  requires: ["computeStyles"]
};
function Ea(e) {
  return e.split("-")[0];
}
var Ei = Math.max, Xu = Math.min, Rs = Math.round;
function _h() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function pw() {
  return !/^((?!chrome|android).)*safari/i.test(_h());
}
function Ms(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, s = 1;
  t && Fr(e) && (o = e.offsetWidth > 0 && Rs(r.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && Rs(r.height) / e.offsetHeight || 1);
  var u = Ri(e) ? wr(e) : window, c = u.visualViewport, d = !pw() && n, p = (r.left + (d && c ? c.offsetLeft : 0)) / o, h = (r.top + (d && c ? c.offsetTop : 0)) / s, m = r.width / o, g = r.height / s;
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
function xm(e) {
  var t = Ms(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function hw(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Em(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Qa(e) {
  return wr(e).getComputedStyle(e);
}
function r$(e) {
  return ["table", "td", "th"].indexOf(Sa(e)) >= 0;
}
function Jo(e) {
  return ((Ri(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Nd(e) {
  return Sa(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Em(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Jo(e)
  );
}
function d0(e) {
  return !Fr(e) || // https://github.com/popperjs/popper-core/issues/837
  Qa(e).position === "fixed" ? null : e.offsetParent;
}
function a$(e) {
  var t = /firefox/i.test(_h()), n = /Trident/i.test(_h());
  if (n && Fr(e)) {
    var r = Qa(e);
    if (r.position === "fixed")
      return null;
  }
  var o = Nd(e);
  for (Em(o) && (o = o.host); Fr(o) && ["html", "body"].indexOf(Sa(o)) < 0; ) {
    var s = Qa(o);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function _c(e) {
  for (var t = wr(e), n = d0(e); n && r$(n) && Qa(n).position === "static"; )
    n = d0(n);
  return n && (Sa(n) === "html" || Sa(n) === "body" && Qa(n).position === "static") ? t : n || a$(e) || t;
}
function Cm(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Nl(e, t, n) {
  return Ei(e, Xu(t, n));
}
function o$(e, t, n) {
  var r = Nl(e, t, n);
  return r > n ? n : r;
}
function mw() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function gw(e) {
  return Object.assign({}, mw(), e);
}
function vw(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var i$ = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, gw(typeof t != "number" ? t : vw(t, bc));
};
function s$(e) {
  var t, n = e.state, r = e.name, o = e.options, s = n.elements.arrow, u = n.modifiersData.popperOffsets, c = Ea(n.placement), d = Cm(c), p = [ir, Ur].indexOf(c) >= 0, h = p ? "height" : "width";
  if (!(!s || !u)) {
    var m = i$(o.padding, n), g = xm(s), y = d === "y" ? or : ir, b = d === "y" ? Wr : Ur, _ = n.rects.reference[h] + n.rects.reference[d] - u[d] - n.rects.popper[h], w = u[d] - n.rects.reference[d], N = _c(s), F = N ? d === "y" ? N.clientHeight || 0 : N.clientWidth || 0 : 0, x = _ / 2 - w / 2, I = m[y], O = F - g[h] - m[b], S = F / 2 - g[h] / 2 + x, C = Nl(I, S, O), T = d;
    n.modifiersData[r] = (t = {}, t[T] = C, t.centerOffset = C - S, t);
  }
}
function l$(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || hw(t.elements.popper, o) && (t.elements.arrow = o));
}
const c$ = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: s$,
  effect: l$,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Ds(e) {
  return e.split("-")[1];
}
var u$ = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function d$(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return {
    x: Rs(n * o) / o || 0,
    y: Rs(r * o) / o || 0
  };
}
function f0(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, s = e.variation, u = e.offsets, c = e.position, d = e.gpuAcceleration, p = e.adaptive, h = e.roundOffsets, m = e.isFixed, g = u.x, y = g === void 0 ? 0 : g, b = u.y, _ = b === void 0 ? 0 : b, w = typeof h == "function" ? h({
    x: y,
    y: _
  }) : {
    x: y,
    y: _
  };
  y = w.x, _ = w.y;
  var N = u.hasOwnProperty("x"), F = u.hasOwnProperty("y"), x = ir, I = or, O = window;
  if (p) {
    var S = _c(n), C = "clientHeight", T = "clientWidth";
    if (S === wr(n) && (S = Jo(n), Qa(S).position !== "static" && c === "absolute" && (C = "scrollHeight", T = "scrollWidth")), S = S, o === or || (o === ir || o === Ur) && s === ec) {
      I = Wr;
      var R = m && S === O && O.visualViewport ? O.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        S[C]
      );
      _ -= R - r.height, _ *= d ? 1 : -1;
    }
    if (o === ir || (o === or || o === Wr) && s === ec) {
      x = Ur;
      var B = m && S === O && O.visualViewport ? O.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        S[T]
      );
      y -= B - r.width, y *= d ? 1 : -1;
    }
  }
  var U = Object.assign({
    position: c
  }, p && u$), te = h === !0 ? d$({
    x: y,
    y: _
  }, wr(n)) : {
    x: y,
    y: _
  };
  if (y = te.x, _ = te.y, d) {
    var z;
    return Object.assign({}, U, (z = {}, z[I] = F ? "0" : "", z[x] = N ? "0" : "", z.transform = (O.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + _ + "px)" : "translate3d(" + y + "px, " + _ + "px, 0)", z));
  }
  return Object.assign({}, U, (t = {}, t[I] = F ? _ + "px" : "", t[x] = N ? y + "px" : "", t.transform = "", t));
}
function f$(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, s = n.adaptive, u = s === void 0 ? !0 : s, c = n.roundOffsets, d = c === void 0 ? !0 : c, p = {
    placement: Ea(t.placement),
    variation: Ds(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, f0(Object.assign({}, p, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: u,
    roundOffsets: d
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, f0(Object.assign({}, p, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: d
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const p$ = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: f$,
  data: {}
};
var wu = {
  passive: !0
};
function h$(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, s = o === void 0 ? !0 : o, u = r.resize, c = u === void 0 ? !0 : u, d = wr(t.elements.popper), p = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && p.forEach(function(h) {
    h.addEventListener("scroll", n.update, wu);
  }), c && d.addEventListener("resize", n.update, wu), function() {
    s && p.forEach(function(h) {
      h.removeEventListener("scroll", n.update, wu);
    }), c && d.removeEventListener("resize", n.update, wu);
  };
}
const m$ = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: h$,
  data: {}
};
var g$ = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Au(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return g$[t];
  });
}
var v$ = {
  start: "end",
  end: "start"
};
function p0(e) {
  return e.replace(/start|end/g, function(t) {
    return v$[t];
  });
}
function Om(e) {
  var t = wr(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Sm(e) {
  return Ms(Jo(e)).left + Om(e).scrollLeft;
}
function y$(e, t) {
  var n = wr(e), r = Jo(e), o = n.visualViewport, s = r.clientWidth, u = r.clientHeight, c = 0, d = 0;
  if (o) {
    s = o.width, u = o.height;
    var p = pw();
    (p || !p && t === "fixed") && (c = o.offsetLeft, d = o.offsetTop);
  }
  return {
    width: s,
    height: u,
    x: c + Sm(e),
    y: d
  };
}
function b$(e) {
  var t, n = Jo(e), r = Om(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, s = Ei(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), u = Ei(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), c = -r.scrollLeft + Sm(e), d = -r.scrollTop;
  return Qa(o || n).direction === "rtl" && (c += Ei(n.clientWidth, o ? o.clientWidth : 0) - s), {
    width: s,
    height: u,
    x: c,
    y: d
  };
}
function Tm(e) {
  var t = Qa(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function yw(e) {
  return ["html", "body", "#document"].indexOf(Sa(e)) >= 0 ? e.ownerDocument.body : Fr(e) && Tm(e) ? e : yw(Nd(e));
}
function Il(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = yw(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), s = wr(r), u = o ? [s].concat(s.visualViewport || [], Tm(r) ? r : []) : r, c = t.concat(u);
  return o ? c : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    c.concat(Il(Nd(u)))
  );
}
function wh(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function _$(e, t) {
  var n = Ms(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function h0(e, t, n) {
  return t === dw ? wh(y$(e, n)) : Ri(t) ? _$(t, n) : wh(b$(Jo(e)));
}
function w$(e) {
  var t = Il(Nd(e)), n = ["absolute", "fixed"].indexOf(Qa(e).position) >= 0, r = n && Fr(e) ? _c(e) : e;
  return Ri(r) ? t.filter(function(o) {
    return Ri(o) && hw(o, r) && Sa(o) !== "body";
  }) : [];
}
function E$(e, t, n, r) {
  var o = t === "clippingParents" ? w$(e) : [].concat(t), s = [].concat(o, [n]), u = s[0], c = s.reduce(function(d, p) {
    var h = h0(e, p, r);
    return d.top = Ei(h.top, d.top), d.right = Xu(h.right, d.right), d.bottom = Xu(h.bottom, d.bottom), d.left = Ei(h.left, d.left), d;
  }, h0(e, u, r));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function bw(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? Ea(r) : null, s = r ? Ds(r) : null, u = t.x + t.width / 2 - n.width / 2, c = t.y + t.height / 2 - n.height / 2, d;
  switch (o) {
    case or:
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
  var p = o ? Cm(o) : null;
  if (p != null) {
    var h = p === "y" ? "height" : "width";
    switch (s) {
      case As:
        d[p] = d[p] - (t[h] / 2 - n[h] / 2);
        break;
      case ec:
        d[p] = d[p] + (t[h] / 2 - n[h] / 2);
        break;
    }
  }
  return d;
}
function tc(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, s = n.strategy, u = s === void 0 ? e.strategy : s, c = n.boundary, d = c === void 0 ? U3 : c, p = n.rootBoundary, h = p === void 0 ? dw : p, m = n.elementContext, g = m === void 0 ? gl : m, y = n.altBoundary, b = y === void 0 ? !1 : y, _ = n.padding, w = _ === void 0 ? 0 : _, N = gw(typeof w != "number" ? w : vw(w, bc)), F = g === gl ? z3 : gl, x = e.rects.popper, I = e.elements[b ? F : g], O = E$(Ri(I) ? I : I.contextElement || Jo(e.elements.popper), d, h, u), S = Ms(e.elements.reference), C = bw({
    reference: S,
    element: x,
    placement: o
  }), T = wh(Object.assign({}, x, C)), R = g === gl ? T : S, B = {
    top: O.top - R.top + N.top,
    bottom: R.bottom - O.bottom + N.bottom,
    left: O.left - R.left + N.left,
    right: R.right - O.right + N.right
  }, U = e.modifiersData.offset;
  if (g === gl && U) {
    var te = U[o];
    Object.keys(B).forEach(function(z) {
      var ne = [Ur, Wr].indexOf(z) >= 0 ? 1 : -1, fe = [or, Wr].indexOf(z) >= 0 ? "y" : "x";
      B[z] += te[fe] * ne;
    });
  }
  return B;
}
function x$(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, s = n.rootBoundary, u = n.padding, c = n.flipVariations, d = n.allowedAutoPlacements, p = d === void 0 ? fw : d, h = Ds(r), m = h ? c ? u0 : u0.filter(function(b) {
    return Ds(b) === h;
  }) : bc, g = m.filter(function(b) {
    return p.indexOf(b) >= 0;
  });
  g.length === 0 && (g = m);
  var y = g.reduce(function(b, _) {
    return b[_] = tc(e, {
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
function C$(e) {
  if (Ea(e) === wm)
    return [];
  var t = Au(e);
  return [p0(e), t, p0(t)];
}
function O$(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, s = o === void 0 ? !0 : o, u = n.altAxis, c = u === void 0 ? !0 : u, d = n.fallbackPlacements, p = n.padding, h = n.boundary, m = n.rootBoundary, g = n.altBoundary, y = n.flipVariations, b = y === void 0 ? !0 : y, _ = n.allowedAutoPlacements, w = t.options.placement, N = Ea(w), F = N === w, x = d || (F || !b ? [Au(w)] : C$(w)), I = [w].concat(x).reduce(function(Se, Ce) {
      return Se.concat(Ea(Ce) === wm ? x$(t, {
        placement: Ce,
        boundary: h,
        rootBoundary: m,
        padding: p,
        flipVariations: b,
        allowedAutoPlacements: _
      }) : Ce);
    }, []), O = t.rects.reference, S = t.rects.popper, C = /* @__PURE__ */ new Map(), T = !0, R = I[0], B = 0; B < I.length; B++) {
      var U = I[B], te = Ea(U), z = Ds(U) === As, ne = [or, Wr].indexOf(te) >= 0, fe = ne ? "width" : "height", ge = tc(t, {
        placement: U,
        boundary: h,
        rootBoundary: m,
        altBoundary: g,
        padding: p
      }), Pe = ne ? z ? Ur : ir : z ? Wr : or;
      O[fe] > S[fe] && (Pe = Au(Pe));
      var se = Au(Pe), me = [];
      if (s && me.push(ge[te] <= 0), c && me.push(ge[Pe] <= 0, ge[se] <= 0), me.every(function(Se) {
        return Se;
      })) {
        R = U, T = !1;
        break;
      }
      C.set(U, me);
    }
    if (T)
      for (var J = b ? 3 : 1, re = function(Ce) {
        var pe = I.find(function(ke) {
          var $e = C.get(ke);
          if ($e)
            return $e.slice(0, Ce).every(function(W) {
              return W;
            });
        });
        if (pe)
          return R = pe, "break";
      }, ae = J; ae > 0; ae--) {
        var ye = re(ae);
        if (ye === "break") break;
      }
    t.placement !== R && (t.modifiersData[r]._skip = !0, t.placement = R, t.reset = !0);
  }
}
const S$ = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: O$,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function m0(e, t, n) {
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
function g0(e) {
  return [or, Ur, Wr, ir].some(function(t) {
    return e[t] >= 0;
  });
}
function T$(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, s = t.modifiersData.preventOverflow, u = tc(t, {
    elementContext: "reference"
  }), c = tc(t, {
    altBoundary: !0
  }), d = m0(u, r), p = m0(c, o, s), h = g0(d), m = g0(p);
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
const P$ = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: T$
};
function k$(e, t, n) {
  var r = Ea(e), o = [ir, or].indexOf(r) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, u = s[0], c = s[1];
  return u = u || 0, c = (c || 0) * o, [ir, Ur].indexOf(r) >= 0 ? {
    x: c,
    y: u
  } : {
    x: u,
    y: c
  };
}
function N$(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, s = o === void 0 ? [0, 0] : o, u = fw.reduce(function(h, m) {
    return h[m] = k$(m, t.rects, s), h;
  }, {}), c = u[t.placement], d = c.x, p = c.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += d, t.modifiersData.popperOffsets.y += p), t.modifiersData[r] = u;
}
const I$ = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: N$
};
function A$(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = bw({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const R$ = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: A$,
  data: {}
};
function M$(e) {
  return e === "x" ? "y" : "x";
}
function D$(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, s = o === void 0 ? !0 : o, u = n.altAxis, c = u === void 0 ? !1 : u, d = n.boundary, p = n.rootBoundary, h = n.altBoundary, m = n.padding, g = n.tether, y = g === void 0 ? !0 : g, b = n.tetherOffset, _ = b === void 0 ? 0 : b, w = tc(t, {
    boundary: d,
    rootBoundary: p,
    padding: m,
    altBoundary: h
  }), N = Ea(t.placement), F = Ds(t.placement), x = !F, I = Cm(N), O = M$(I), S = t.modifiersData.popperOffsets, C = t.rects.reference, T = t.rects.popper, R = typeof _ == "function" ? _(Object.assign({}, t.rects, {
    placement: t.placement
  })) : _, B = typeof R == "number" ? {
    mainAxis: R,
    altAxis: R
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, R), U = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, te = {
    x: 0,
    y: 0
  };
  if (S) {
    if (s) {
      var z, ne = I === "y" ? or : ir, fe = I === "y" ? Wr : Ur, ge = I === "y" ? "height" : "width", Pe = S[I], se = Pe + w[ne], me = Pe - w[fe], J = y ? -T[ge] / 2 : 0, re = F === As ? C[ge] : T[ge], ae = F === As ? -T[ge] : -C[ge], ye = t.elements.arrow, Se = y && ye ? xm(ye) : {
        width: 0,
        height: 0
      }, Ce = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : mw(), pe = Ce[ne], ke = Ce[fe], $e = Nl(0, C[ge], Se[ge]), W = x ? C[ge] / 2 - J - $e - pe - B.mainAxis : re - $e - pe - B.mainAxis, H = x ? -C[ge] / 2 + J + $e + ke + B.mainAxis : ae + $e + ke + B.mainAxis, $ = t.elements.arrow && _c(t.elements.arrow), D = $ ? I === "y" ? $.clientTop || 0 : $.clientLeft || 0 : 0, G = (z = U == null ? void 0 : U[I]) != null ? z : 0, Z = Pe + W - G - D, le = Pe + H - G, Ne = Nl(y ? Xu(se, Z) : se, Pe, y ? Ei(me, le) : me);
      S[I] = Ne, te[I] = Ne - Pe;
    }
    if (c) {
      var de, xe = I === "x" ? or : ir, ue = I === "x" ? Wr : Ur, q = S[O], ee = O === "y" ? "height" : "width", we = q + w[xe], Te = q - w[ue], Re = [or, ir].indexOf(N) !== -1, Be = (de = U == null ? void 0 : U[O]) != null ? de : 0, Fe = Re ? we : q - C[ee] - T[ee] - Be + B.altAxis, et = Re ? q + C[ee] + T[ee] - Be - B.altAxis : Te, Ze = y && Re ? o$(Fe, q, et) : Nl(y ? Fe : we, q, y ? et : Te);
      S[O] = Ze, te[O] = Ze - q;
    }
    t.modifiersData[r] = te;
  }
}
const L$ = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: D$,
  requiresIfExists: ["offset"]
};
function F$(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function $$(e) {
  return e === wr(e) || !Fr(e) ? Om(e) : F$(e);
}
function B$(e) {
  var t = e.getBoundingClientRect(), n = Rs(t.width) / e.offsetWidth || 1, r = Rs(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function j$(e, t, n) {
  n === void 0 && (n = !1);
  var r = Fr(t), o = Fr(t) && B$(t), s = Jo(t), u = Ms(e, o, n), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Sa(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Tm(s)) && (c = $$(t)), Fr(t) ? (d = Ms(t, !0), d.x += t.clientLeft, d.y += t.clientTop) : s && (d.x = Sm(s))), {
    x: u.left + c.scrollLeft - d.x,
    y: u.top + c.scrollTop - d.y,
    width: u.width,
    height: u.height
  };
}
function W$(e) {
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
function U$(e) {
  var t = W$(e);
  return J3.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function z$(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function H$(e) {
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
var v0 = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function y0() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Y$(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, s = o === void 0 ? v0 : o;
  return function(c, d, p) {
    p === void 0 && (p = s);
    var h = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, v0, s),
      modifiersData: {},
      elements: {
        reference: c,
        popper: d
      },
      attributes: {},
      styles: {}
    }, m = [], g = !1, y = {
      state: h,
      setOptions: function(N) {
        var F = typeof N == "function" ? N(h.options) : N;
        _(), h.options = Object.assign({}, s, h.options, F), h.scrollParents = {
          reference: Ri(c) ? Il(c) : c.contextElement ? Il(c.contextElement) : [],
          popper: Il(d)
        };
        var x = U$(H$([].concat(r, h.options.modifiers)));
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
        if (!g) {
          var N = h.elements, F = N.reference, x = N.popper;
          if (y0(F, x)) {
            h.rects = {
              reference: j$(F, _c(x), h.options.strategy === "fixed"),
              popper: xm(x)
            }, h.reset = !1, h.placement = h.options.placement, h.orderedModifiers.forEach(function(B) {
              return h.modifiersData[B.name] = Object.assign({}, B.data);
            });
            for (var I = 0; I < h.orderedModifiers.length; I++) {
              if (h.reset === !0) {
                h.reset = !1, I = -1;
                continue;
              }
              var O = h.orderedModifiers[I], S = O.fn, C = O.options, T = C === void 0 ? {} : C, R = O.name;
              typeof S == "function" && (h = S({
                state: h,
                options: T,
                name: R,
                instance: y
              }) || h);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: z$(function() {
        return new Promise(function(w) {
          y.forceUpdate(), w(h);
        });
      }),
      destroy: function() {
        _(), g = !0;
      }
    };
    if (!y0(c, d))
      return y;
    y.setOptions(p).then(function(w) {
      !g && p.onFirstUpdate && p.onFirstUpdate(w);
    });
    function b() {
      h.orderedModifiers.forEach(function(w) {
        var N = w.name, F = w.options, x = F === void 0 ? {} : F, I = w.effect;
        if (typeof I == "function") {
          var O = I({
            state: h,
            name: N,
            instance: y,
            options: x
          }), S = function() {
          };
          m.push(O || S);
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
var q$ = [m$, R$, p$, n$, I$, S$, L$, c$, P$], V$ = /* @__PURE__ */ Y$({
  defaultModifiers: q$
}), G$ = typeof Element < "u", K$ = typeof Map == "function", Z$ = typeof Set == "function", X$ = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Ru(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var n, r, o;
    if (Array.isArray(e)) {
      if (n = e.length, n != t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!Ru(e[r], t[r])) return !1;
      return !0;
    }
    var s;
    if (K$ && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (s = e.entries(); !(r = s.next()).done; )
        if (!t.has(r.value[0])) return !1;
      for (s = e.entries(); !(r = s.next()).done; )
        if (!Ru(r.value[1], t.get(r.value[0]))) return !1;
      return !0;
    }
    if (Z$ && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (s = e.entries(); !(r = s.next()).done; )
        if (!t.has(r.value[0])) return !1;
      return !0;
    }
    if (X$ && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
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
    if (G$ && e instanceof Element) return !1;
    for (r = n; r-- !== 0; )
      if (!((o[r] === "_owner" || o[r] === "__v" || o[r] === "__o") && e.$$typeof) && !Ru(e[o[r]], t[o[r]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var Q$ = function(t, n) {
  try {
    return Ru(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
};
const J$ = /* @__PURE__ */ dc(Q$);
var e5 = [], t5 = function(t, n, r) {
  r === void 0 && (r = {});
  var o = L.useRef(null), s = {
    onFirstUpdate: r.onFirstUpdate,
    placement: r.placement || "bottom",
    strategy: r.strategy || "absolute",
    modifiers: r.modifiers || e5
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
        Qp.flushSync(function() {
          d({
            styles: l0(_.map(function(w) {
              return [w, b.styles[w] || {}];
            })),
            attributes: l0(_.map(function(w) {
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
    return J$(o.current, g) ? o.current || g : (o.current = g, g);
  }, [s.onFirstUpdate, s.placement, s.strategy, s.modifiers, p]), m = L.useRef();
  return c0(function() {
    m.current && m.current.setOptions(h);
  }, [h]), c0(function() {
    if (!(t == null || n == null)) {
      var g = r.createPopper || V$, y = g(t, n, h);
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
}, n5 = function() {
}, r5 = function() {
  return Promise.resolve(null);
}, a5 = [];
function o5(e) {
  var t = e.placement, n = t === void 0 ? "bottom" : t, r = e.strategy, o = r === void 0 ? "absolute" : r, s = e.modifiers, u = s === void 0 ? a5 : s, c = e.referenceElement, d = e.onFirstUpdate, p = e.innerRef, h = e.children, m = L.useContext($3), g = L.useState(null), y = g[0], b = g[1], _ = L.useState(null), w = _[0], N = _[1];
  L.useEffect(function() {
    W3(p, y);
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
  }, [n, o, d, u, w]), x = t5(c || m, y, F), I = x.state, O = x.styles, S = x.forceUpdate, C = x.update, T = L.useMemo(function() {
    return {
      ref: b,
      style: O.popper,
      placement: I ? I.placement : n,
      hasPopperEscaped: I && I.modifiersData.hide ? I.modifiersData.hide.hasPopperEscaped : null,
      isReferenceHidden: I && I.modifiersData.hide ? I.modifiersData.hide.isReferenceHidden : null,
      arrowProps: {
        style: O.arrow,
        ref: N
      },
      forceUpdate: S || n5,
      update: C || r5
    };
  }, [b, N, n, I, O, C, S]);
  return B3(h)(T);
}
function i5(e, t, n, r) {
  return u1(e, function(o, s, u) {
    t(r, n(o), s, u);
  }), r;
}
function s5(e, t) {
  return function(n, r) {
    return i5(n, e, t(r), {});
  };
}
var l5 = Object.prototype, c5 = l5.toString, u5 = s5(function(e, t, n) {
  t != null && typeof t.toString != "function" && (t = c5.call(t)), e[t] = n;
}, e1(Zo)), Pm = {
  "top center": "top",
  "top left": "top-start",
  "top right": "top-end",
  "bottom center": "bottom",
  "bottom left": "bottom-start",
  "bottom right": "bottom-end",
  "right center": "right",
  "left center": "left"
}, d5 = Lr(Pm), f5 = u5(Pm);
function nc(e) {
  "@babel/helpers - typeof";
  return nc = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, nc(e);
}
function p5(e, t) {
  if (nc(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (nc(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function h5(e) {
  var t = p5(e, "string");
  return nc(t) == "symbol" ? t : t + "";
}
function m5(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, h5(r.key), r);
  }
}
function g5(e, t, n) {
  return t && m5(e.prototype, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
var v5 = /* @__PURE__ */ function() {
  function e(n) {
    this.ref = n;
  }
  var t = e.prototype;
  return t.getBoundingClientRect = function() {
    return Me(this.ref.current, "getBoundingClientRect") || {};
  }, g5(e, [{
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
}(), y5 = fc(function(e) {
  return new v5(Hu(e) ? e : {
    current: e
  });
});
function zo(e) {
  var t = e.children, n = e.className, r = e.content, o = qe("content", n), s = He(zo, e), u = Ke(zo, e);
  return /* @__PURE__ */ Q.createElement(u, ce({}, s, {
    className: o
  }), lt(t) ? r : t);
}
zo.handledProps = ["as", "children", "className", "content"];
zo.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** The content of the Popup */
  children: l.node,
  /** Classes to add to the Popup content className. */
  className: l.string,
  /** Shorthand for primary content. */
  content: St
} : {};
zo.create = qt(zo, function(e) {
  return {
    children: e
  };
});
function Ho(e) {
  var t = e.children, n = e.className, r = e.content, o = qe("header", n), s = He(Ho, e), u = Ke(Ho, e);
  return /* @__PURE__ */ Q.createElement(u, ce({}, s, {
    className: o
  }), lt(t) ? r : t);
}
Ho.handledProps = ["as", "children", "className", "content"];
Ho.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: St
} : {};
Ho.create = qt(Ho, function(e) {
  return {
    children: e
  };
});
var Er = /* @__PURE__ */ function(e) {
  Jt(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.state = {}, r.open = !1, r.zIndexWasSynced = !1, r.triggerRef = /* @__PURE__ */ Q.createRef(), r.elementRef = /* @__PURE__ */ Q.createRef(), r.getPortalProps = function() {
      var c = {}, d = r.props, p = d.on, h = d.hoverable, m = vn(p) ? p : [p];
      return h && (c.closeOnPortalMouseLeave = !0, c.mouseLeaveDelay = 300), ba(m, "hover") && (c.openOnTriggerClick = !1, c.closeOnTriggerClick = !1, c.openOnTriggerMouseEnter = !0, c.closeOnTriggerMouseLeave = !0, c.mouseLeaveDelay = 70, c.mouseEnterDelay = 50), ba(m, "click") && (c.openOnTriggerClick = !0, c.closeOnTriggerClick = !0, c.closeOnDocumentClick = !0), ba(m, "focus") && (c.openOnTriggerFocus = !0, c.closeOnTriggerBlur = !0), c;
    }, r.hideOnScroll = function(c) {
      F3(c.target) && r.elementRef.current.contains(c.target) || (r.setState({
        closed: !0
      }), Cl.unsub("scroll", r.hideOnScroll, {
        target: window
      }), r.timeoutId = setTimeout(function() {
        r.setState({
          closed: !1
        });
      }, 50), r.handleClose(c));
    }, r.handleClose = function(c) {
      Me(r.props, "onClose", c, ce({}, r.props, {
        open: !1
      }));
    }, r.handleOpen = function(c) {
      Me(r.props, "onOpen", c, ce({}, r.props, {
        open: !0
      }));
    }, r.handlePortalMount = function(c) {
      Me(r.props, "onMount", c, r.props);
    }, r.handlePortalUnmount = function(c) {
      r.positionUpdate = null, Me(r.props, "onUnmount", c, r.props);
    }, r.renderContent = function(c) {
      var d = c.placement, p = c.ref, h = c.update, m = c.style, g = r.props, y = g.basic, b = g.children, _ = g.className, w = g.content, N = g.hideOnScroll, F = g.flowing, x = g.header, I = g.inverted, O = g.popper, S = g.size, C = g.style, T = g.wide, R = r.state.contentRestProps;
      r.positionUpdate = h;
      var B = qe("ui", f5[d], S, nn(T, "wide"), V(y, "basic"), V(F, "flowing"), V(I, "inverted"), "popup transition visible", _), U = Ke(t, r.props), te = ce({
        // Heads up! We need default styles to get working correctly `flowing`
        left: "auto",
        right: "auto",
        // This is required to be properly positioned inside wrapping `div`
        position: "initial"
      }, C), z = /* @__PURE__ */ Q.createElement(U, ce({}, R, {
        className: B,
        style: te,
        ref: r.elementRef
      }), lt(b) ? /* @__PURE__ */ Q.createElement(Q.Fragment, null, Ho.create(x, {
        autoGenerateKey: !1
      }), zo.create(w, {
        autoGenerateKey: !1
      })) : b, N && /* @__PURE__ */ Q.createElement(Ha, {
        on: r.hideOnScroll,
        name: "scroll",
        target: "window"
      }));
      return VD(O || {}, {
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
  t.getDerivedStateFromProps = function(o, s) {
    if (s.closed || s.disabled) return {};
    var u = He(t, o), c = _m(u, function(p, h, m) {
      return ba(Jr.handledProps, m) || (p[m] = h), p;
    }, {}), d = Od(u, Jr.handledProps);
    return {
      contentRestProps: c,
      portalRestProps: d
    };
  };
  var n = t.prototype;
  return n.componentDidUpdate = function(o) {
    var s = kl(this.props.popperDependencies, o.popperDependencies);
    s || this.handleUpdate();
  }, n.componentWillUnmount = function() {
    clearTimeout(this.timeoutId);
  }, n.handleUpdate = function() {
    this.positionUpdate && this.positionUpdate();
  }, n.render = function() {
    var o = this, s = this.props, u = s.context, c = s.disabled, d = s.eventsEnabled, p = s.offset, h = s.pinned, m = s.popper, g = s.popperModifiers, y = s.position, b = s.positionFixed, _ = s.trigger, w = this.state, N = w.closed, F = w.portalRestProps;
    if (N || c)
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
    }].concat(g, [
      // We are syncing zIndex from `.ui.popup.content` to avoid layering issues as in SUIR we are using an additional
      // `div` for Popper.js
      // https://github.com/Semantic-Org/Semantic-UI-React/issues/4083
      {
        name: "syncZIndex",
        enabled: !0,
        phase: "beforeRead",
        fn: function(C) {
          var T, R = C.state;
          if (!o.zIndexWasSynced) {
            var B = m == null || (T = m.style) == null ? void 0 : T.zIndex;
            ds(B) && (R.elements.popper.style.zIndex = window.getComputedStyle(R.elements.popper.firstChild).zIndex), o.zIndexWasSynced = !0;
          }
        },
        effect: function() {
          return function() {
            o.zIndexWasSynced = !1;
          };
        }
      }
    ]), I = y5(xt(u) ? this.triggerRef : u), O = ce({}, this.getPortalProps(), F);
    return /* @__PURE__ */ Q.createElement(Jr, ce({}, O, {
      onClose: this.handleClose,
      onMount: this.handlePortalMount,
      onOpen: this.handleOpen,
      onUnmount: this.handlePortalUnmount,
      trigger: _,
      triggerRef: this.triggerRef
    }), /* @__PURE__ */ Q.createElement(o5, {
      modifiers: x,
      placement: Pm[y],
      strategy: b ? "fixed" : null,
      referenceElement: I
    }, this.renderContent));
  }, t;
}(Kn);
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
  content: _t,
  /** Existing element the pop-up should be bound to. */
  context: l.oneOfType([l.object, gm]),
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
  header: _t,
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
  position: l.oneOf(d5),
  /** Tells `Popper.js` to use the `position: fixed` strategy to position the popover. */
  positionFixed: l.bool,
  /** A wrapping element for an actual content that will be used for positioning. */
  popper: _t,
  /** An array containing custom settings for the Popper.js modifiers. */
  popperModifiers: l.array,
  /** A popup can have dependencies which update will schedule a position update. */
  popperDependencies: l.array,
  /** Popup size. */
  size: l.oneOf(ea(cr, "medium", "big", "massive")),
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
Er.Content = zo;
Er.Header = Ho;
var b5 = function(t) {
  if (t) {
    var n, r, o;
    return typeof t.window == "object" && t.window === t ? t.event : (n = (r = t.ownerDocument) == null || (o = r.defaultView) == null ? void 0 : o.event) != null ? n : void 0;
  }
}, b0 = function(t, n) {
  return t ? !!t[n] : !1;
}, _5 = function(t) {
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
    var h = typeof u > "u" ? s : u.current, m = b5(window), g = function(b) {
      if (b === m) {
        m = void 0;
        return;
      }
      d(b);
    };
    if (b0(h, "addEventListener"))
      h.addEventListener(o, g, n);
    else if (process.env.NODE_ENV !== "production")
      throw new Error("@fluentui/react-component-event-listener: Passed `element` is not valid or does not support `addEventListener()` method.");
    return p.current = setTimeout(function() {
      m = void 0;
    }, 1), function() {
      if (clearTimeout(p.current), m = void 0, b0(h, "removeEventListener"))
        h.removeEventListener(o, g, n);
      else if (process.env.NODE_ENV !== "production")
        throw new Error("@fluentui/react-component-event-listener: Passed `element` is not valid or does not support `removeEventListener()` method.");
    };
  }, [n, d, s, u, o]);
}, w5 = /* @__PURE__ */ function() {
  function e(t) {
    return _5(t), null;
  }
  return e.defaultProps = {
    capture: !1
  }, e;
}(), E5 = {
  current: typeof document > "u" ? null : document
};
function rc(e) {
  var t = e.className, n = e.children, r = e.content, o = qe("pushable", t), s = He(rc, e), u = Ke(rc, e);
  return /* @__PURE__ */ Q.createElement(u, ce({}, s, {
    className: o
  }), lt(n) ? r : n);
}
rc.handledProps = ["as", "children", "className", "content"];
rc.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: St
} : {};
function ac(e) {
  var t = e.className, n = e.dimmed, r = e.children, o = e.content, s = qe("pusher", V(n, "dimmed"), t), u = He(ac, e), c = Ke(ac, e);
  return /* @__PURE__ */ Q.createElement(c, ce({}, u, {
    className: s
  }), lt(r) ? o : r);
}
ac.handledProps = ["as", "children", "className", "content", "dimmed"];
ac.propTypes = process.env.NODE_ENV !== "production" ? {
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
var ei = /* @__PURE__ */ function(e) {
  Jt(t, e);
  function t(r) {
    var o;
    return o = e.call(this, r) || this, o.ref = /* @__PURE__ */ br(), o.handleAnimationStart = function() {
      var s = o.props.visible, u = s ? "onVisible" : "onHide";
      if (clearTimeout(o.animationTimer), o.animationTimer = setTimeout(o.handleAnimationEnd, t.animationDuration), o.skipNextCallback) {
        o.skipNextCallback = !1;
        return;
      }
      Me(o.props, u, null, o.props);
    }, o.handleAnimationEnd = function() {
      var s = o.props.visible, u = s ? "onShow" : "onHidden";
      o.setState({
        animationTick: 0
      }), Me(o.props, u, null, o.props);
    }, o.handleDocumentClick = function(s) {
      No(o.ref.current, s) || (o.skipNextCallback = !0, Me(o.props, "onHide", s, ce({}, o.props, {
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
    var o = this.props, s = o.animation, u = o.className, c = o.children, d = o.content, p = o.direction, h = o.target, m = o.visible, g = o.width, y = this.state.animationTick, b = qe("ui", s, p, g, V(y > 0, "animating"), V(m, "visible"), "sidebar", u), _ = He(t, this.props), w = Ke(t, this.props), N = Hu(h) ? {
      targetRef: h
    } : {
      target: h
    };
    return /* @__PURE__ */ Q.createElement(Q.Fragment, null, /* @__PURE__ */ Q.createElement(sr, {
      innerRef: this.ref
    }, /* @__PURE__ */ Q.createElement(w, ce({}, _, {
      className: b
    }), lt(c) ? d : c)), m && /* @__PURE__ */ Q.createElement(w5, ce({
      listener: this.handleDocumentClick,
      type: "click"
    }, N)));
  }, t;
}(Kn);
ei.handledProps = ["animation", "as", "children", "className", "content", "direction", "onHidden", "onHide", "onShow", "onVisible", "target", "visible", "width"];
ei.propTypes = process.env.NODE_ENV !== "production" ? {
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
  target: l.oneOfType([DD, gm]),
  /** Controls whether or not the sidebar is visible on the page. */
  visible: l.bool,
  /** Sidebar width. */
  width: l.oneOf(["very thin", "thin", "wide", "very wide"])
} : {};
ei.defaultProps = {
  direction: "left",
  target: E5,
  visible: !1
};
ei.animationDuration = 500;
ei.autoControlledProps = ["visible"];
ei.Pushable = rc;
ei.Pusher = ac;
const _w = FI({
  collapsible: !1,
  isCollapsed: !1,
  toggleCollapse: () => {
  },
  collapseTrigger: "button"
}), x5 = () => $I(_w), C5 = "_card_8pdnj_9", O5 = "_fluid_8pdnj_45", S5 = "_notFluid_8pdnj_53", T5 = "_elevated_8pdnj_71", P5 = "_outlined_8pdnj_81", k5 = "_flat_8pdnj_93", N5 = "_soft_8pdnj_107", I5 = "_glass_8pdnj_121", A5 = "_gradient_8pdnj_137", R5 = "_themePrimary_8pdnj_157", M5 = "_themeSecondary_8pdnj_179", D5 = "_themeSuccess_8pdnj_201", L5 = "_themeWarning_8pdnj_223", F5 = "_themeDanger_8pdnj_245", $5 = "_themeInfo_8pdnj_267", B5 = "_themeDark_8pdnj_289", j5 = "_radiusNone_8pdnj_323", W5 = "_radiusSm_8pdnj_331", U5 = "_radiusMd_8pdnj_339", z5 = "_radiusLg_8pdnj_347", H5 = "_radiusXl_8pdnj_355", Y5 = "_radiusFull_8pdnj_363", q5 = "_padNone_8pdnj_379", V5 = "_padSm_8pdnj_387", G5 = "_padMd_8pdnj_395", K5 = "_padLg_8pdnj_403", Z5 = "_accentTop_8pdnj_419", X5 = "_accentLeft_8pdnj_429", Q5 = "_accentBottom_8pdnj_439", J5 = "_accentRight_8pdnj_449", e9 = "_hoverable_8pdnj_467", t9 = "_hoverGlow_8pdnj_479", n9 = "_clickable_8pdnj_487", r9 = "_horizontal_8pdnj_523", a9 = "_vertical_8pdnj_533", o9 = "_responsiveHorizontal_8pdnj_543", i9 = "_mediaLeft_8pdnj_567", s9 = "_collapseGrid_8pdnj_587", l9 = "_collapseGridCollapsed_8pdnj_601", c9 = "_collapseContent_8pdnj_609", u9 = "_collapseButton_8pdnj_623", d9 = "_chevronIcon_8pdnj_657", f9 = "_chevronRotated_8pdnj_669", p9 = "_headerClickable_8pdnj_677", h9 = "_header_8pdnj_677", m9 = "_headerWithDivider_8pdnj_721", g9 = "_headerLeading_8pdnj_729", v9 = "_headerAvatar_8pdnj_745", y9 = "_headerTextGroup_8pdnj_759", b9 = "_title_8pdnj_771", _9 = "_subtitle_8pdnj_793", w9 = "_headerExtra_8pdnj_807", E9 = "_body_8pdnj_829", x9 = "_bodyPaddedSm_8pdnj_847", C9 = "_bodyPaddedMd_8pdnj_855", O9 = "_bodyPaddedLg_8pdnj_863", S9 = "_bodyPaddedNone_8pdnj_871", T9 = "_footer_8pdnj_887", P9 = "_footerWithDivider_8pdnj_903", k9 = "_alignLeft_8pdnj_913", N9 = "_alignCenter_8pdnj_921", I9 = "_alignRight_8pdnj_929", A9 = "_alignBetween_8pdnj_937", R9 = "_mediaContainer_8pdnj_953", M9 = "_mediaImg_8pdnj_973", D9 = "_mediaZoomOnHover_8pdnj_989", L9 = "_mediaOverlay_8pdnj_997", F9 = "_mediaBadgeSlot_8pdnj_1027", $9 = "_ratio16x9_8pdnj_1043", B9 = "_ratio4x3_8pdnj_1051", j9 = "_ratio1x1_8pdnj_1059", W9 = "_ratio21x9_8pdnj_1067", U9 = "_ratioAuto_8pdnj_1075", z9 = "_iconBadge_8pdnj_1115", H9 = "_iconBadgeCircle_8pdnj_1153", Y9 = "_iconBadgeSm_8pdnj_1161", q9 = "_iconBadgeLg_8pdnj_1173", V9 = "_badge_8pdnj_1193", G9 = "_badgeDefault_8pdnj_1219", K9 = "_badgePrimary_8pdnj_1229", Z9 = "_badgeSuccess_8pdnj_1239", X9 = "_badgeWarning_8pdnj_1249", Q9 = "_badgeDanger_8pdnj_1259", J9 = "_badgeGlass_8pdnj_1279", eB = "_divider_8pdnj_1315", tB = "_loadingOverlay_8pdnj_1339", nB = "_spinner_8pdnj_1377", Ee = {
  card: C5,
  fluid: O5,
  notFluid: S5,
  elevated: T5,
  outlined: P5,
  flat: k5,
  soft: N5,
  glass: I5,
  gradient: A5,
  themePrimary: R5,
  themeSecondary: M5,
  themeSuccess: D5,
  themeWarning: L5,
  themeDanger: F5,
  themeInfo: $5,
  themeDark: B5,
  radiusNone: j5,
  radiusSm: W5,
  radiusMd: U5,
  radiusLg: z5,
  radiusXl: H5,
  radiusFull: Y5,
  padNone: q5,
  padSm: V5,
  padMd: G5,
  padLg: K5,
  accentTop: Z5,
  accentLeft: X5,
  accentBottom: Q5,
  accentRight: J5,
  hoverable: e9,
  hoverGlow: t9,
  clickable: n9,
  horizontal: r9,
  vertical: a9,
  responsiveHorizontal: o9,
  mediaLeft: i9,
  collapseGrid: s9,
  collapseGridCollapsed: l9,
  collapseContent: c9,
  collapseButton: u9,
  chevronIcon: d9,
  chevronRotated: f9,
  headerClickable: p9,
  header: h9,
  headerWithDivider: m9,
  headerLeading: g9,
  headerAvatar: v9,
  headerTextGroup: y9,
  title: b9,
  subtitle: _9,
  headerExtra: w9,
  body: E9,
  bodyPaddedSm: x9,
  bodyPaddedMd: C9,
  bodyPaddedLg: O9,
  bodyPaddedNone: S9,
  footer: T9,
  footerWithDivider: P9,
  alignLeft: k9,
  alignCenter: N9,
  alignRight: I9,
  alignBetween: A9,
  mediaContainer: R9,
  mediaImg: M9,
  mediaZoomOnHover: D9,
  mediaOverlay: L9,
  mediaBadgeSlot: F9,
  ratio16x9: $9,
  ratio4x3: B9,
  ratio1x1: j9,
  ratio21x9: W9,
  ratioAuto: U9,
  iconBadge: z9,
  iconBadgeCircle: H9,
  iconBadgeSm: Y9,
  iconBadgeLg: q9,
  badge: V9,
  badgeDefault: G9,
  badgePrimary: K9,
  badgeSuccess: Z9,
  badgeWarning: X9,
  badgeDanger: Q9,
  badgeGlass: J9,
  divider: eB,
  loadingOverlay: tB,
  spinner: nB
}, Id = ({
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
  const m = x5(), g = m.collapsible, { isCollapsed: y } = m, b = g && m.collapseTrigger === "header", _ = (x) => {
    p && p(x), b && m.toggleCollapse && m.toggleCollapse();
  }, w = (x) => {
    x.stopPropagation(), m.toggleCollapse && m.toggleCollapse();
  }, N = [Ee.header, o ? Ee.headerWithDivider : "", b ? Ee.headerClickable : "", c].filter(Boolean).join(" "), F = () => !g || !s ? null : u ? /* @__PURE__ */ P(
    "span",
    {
      onClick: w,
      role: "button",
      tabIndex: 0,
      onKeyDown: (x) => {
        (x.key === "Enter" || x.key === " ") && (x.preventDefault(), w(x));
      },
      children: u
    }
  ) : /* @__PURE__ */ P(
    "button",
    {
      type: "button",
      className: Ee.collapseButton,
      onClick: w,
      "aria-label": y ? "Expandir tarjeta" : "Colapsar tarjeta",
      children: /* @__PURE__ */ P(We, { name: "chevron up", className: `${Ee.chevronIcon} ${y ? Ee.chevronRotated : ""}`, style: { margin: 0 } })
    }
  );
  return h ? /* @__PURE__ */ oe(
    "header",
    {
      className: N,
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
  ) : /* @__PURE__ */ oe(
    "header",
    {
      className: N,
      style: d,
      onClick: _,
      role: b ? "button" : void 0,
      tabIndex: b ? 0 : void 0,
      onKeyDown: (x) => {
        b && (x.key === "Enter" || x.key === " ") && (x.preventDefault(), _(x));
      },
      children: [
        /* @__PURE__ */ oe("div", { className: Ee.headerLeading, children: [
          n && /* @__PURE__ */ P("div", { className: Ee.headerAvatar, children: n }),
          (e || t) && /* @__PURE__ */ oe("div", { className: Ee.headerTextGroup, children: [
            e && (typeof e == "string" ? /* @__PURE__ */ P("h3", { className: Ee.title, children: e }) : e),
            t && (typeof t == "string" ? /* @__PURE__ */ P("p", { className: Ee.subtitle, children: t }) : t)
          ] })
        ] }),
        /* @__PURE__ */ oe("div", { className: Ee.headerExtra, children: [
          r,
          F()
        ] })
      ]
    }
  );
};
Id.propTypes = {
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
Id.displayName = "CardHeader";
const rB = {
  none: Ee.bodyPaddedNone,
  small: Ee.bodyPaddedSm,
  medium: Ee.bodyPaddedMd,
  large: Ee.bodyPaddedLg
}, ww = ({ children: e, padding: t = "medium", className: n = "", style: r = {} }) => {
  const o = [Ee.body, rB[t] || Ee.bodyPaddedMd, n].filter(Boolean).join(" ");
  return /* @__PURE__ */ P("div", { className: o, style: r, children: e });
};
ww.propTypes = {
  children: l.node,
  padding: l.oneOf(["none", "small", "medium", "large"]),
  className: l.string,
  style: l.object
};
const aB = {
  left: Ee.alignLeft,
  center: Ee.alignCenter,
  right: Ee.alignRight,
  between: Ee.alignBetween
}, Ew = ({ children: e, align: t = "right", divider: n = !1, className: r = "", style: o = {} }) => {
  const s = [Ee.footer, aB[t] || Ee.alignRight, n ? Ee.footerWithDivider : "", r].filter(Boolean).join(" ");
  return /* @__PURE__ */ P("footer", { className: s, style: o, children: e });
};
Ew.propTypes = {
  children: l.node,
  align: l.oneOf(["left", "center", "right", "between"]),
  divider: l.bool,
  className: l.string,
  style: l.object
};
const oB = {
  "16/9": Ee.ratio16x9,
  "4/3": Ee.ratio4x3,
  "1/1": Ee.ratio1x1,
  "21/9": Ee.ratio21x9,
  auto: Ee.ratioAuto
}, xw = ({
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
    Ee.mediaContainer,
    r === "left" ? Ee.mediaLeft : "",
    oB[n] || Ee.ratio16x9,
    u ? Ee.mediaZoomOnHover : "",
    c
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ oe("div", { className: h, style: d, children: [
    s && /* @__PURE__ */ P("div", { className: Ee.mediaBadgeSlot, children: s }),
    p || e && /* @__PURE__ */ P("img", { src: e, alt: t, className: Ee.mediaImg }),
    o && /* @__PURE__ */ P("div", { className: Ee.mediaOverlay, children: typeof o == "boolean" ? null : o })
  ] });
};
xw.propTypes = {
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
const iB = {
  default: Ee.badgeDefault,
  primary: Ee.badgePrimary,
  success: Ee.badgeSuccess,
  warning: Ee.badgeWarning,
  danger: Ee.badgeDanger,
  glass: Ee.badgeGlass
}, Cw = ({ children: e, variant: t = "default", color: n, textColor: r, icon: o, className: s = "", style: u = {} }) => {
  const c = [Ee.badge, iB[t] || Ee.badgeDefault, s].filter(Boolean).join(" "), d = {
    ...u,
    ...n ? { backgroundColor: n } : {},
    ...r ? { color: r } : {}
  };
  return /* @__PURE__ */ oe("span", { className: c, style: d, children: [
    o && /* @__PURE__ */ P("span", { style: { display: "inline-flex" }, children: o }),
    e
  ] });
};
Cw.propTypes = {
  children: l.node,
  variant: l.oneOf(["default", "primary", "success", "warning", "danger", "glass"]),
  color: l.string,
  textColor: l.string,
  icon: l.node,
  className: l.string,
  style: l.object
};
const Ow = ({ className: e = "", color: t, style: n = {} }) => {
  const r = [Ee.divider, e].filter(Boolean).join(" "), o = {
    ...n,
    ...t ? { backgroundColor: t } : {}
  };
  return /* @__PURE__ */ P("hr", { className: r, style: o });
};
Ow.propTypes = {
  className: l.string,
  color: l.string,
  style: l.object
};
const kp = {
  primary: Ee.themePrimary,
  secondary: Ee.themeSecondary,
  success: Ee.themeSuccess,
  warning: Ee.themeWarning,
  danger: Ee.themeDanger,
  info: Ee.themeInfo
}, sB = {
  small: Ee.iconBadgeSm,
  medium: "",
  large: Ee.iconBadgeLg
}, Sw = ({ name: e, color: t, shape: n = "circle", size: r = "medium", bgColor: o, iconColor: s, className: u = "", style: c = {}, children: d }) => {
  const p = [
    Ee.iconBadge,
    n === "circle" ? Ee.iconBadgeCircle : "",
    sB[r] || "",
    t && kp[t] ? kp[t] : "",
    u
  ].filter(Boolean).join(" "), h = {
    ...c,
    ...o ? { "--ik-icon-bg": o } : {},
    ...s ? { "--ik-icon-color": s } : {}
  };
  return t && !kp[t] && (h["--ik-icon-color"] || (h["--ik-icon-color"] = t)), /* @__PURE__ */ P("div", { className: p, style: h, children: d || e && /* @__PURE__ */ P(We, { name: e, style: { margin: 0 } }) });
};
Sw.propTypes = {
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
const Np = {
  primary: Ee.themePrimary,
  secondary: Ee.themeSecondary,
  success: Ee.themeSuccess,
  warning: Ee.themeWarning,
  danger: Ee.themeDanger,
  info: Ee.themeInfo,
  dark: Ee.themeDark
}, _0 = {
  none: Ee.radiusNone,
  small: Ee.radiusSm,
  sm: Ee.radiusSm,
  medium: Ee.radiusMd,
  md: Ee.radiusMd,
  large: Ee.radiusLg,
  lg: Ee.radiusLg,
  xl: Ee.radiusXl,
  full: Ee.radiusFull
}, lB = {
  none: Ee.padNone,
  small: Ee.padSm,
  medium: Ee.padMd,
  large: Ee.padLg
}, Ip = {
  top: Ee.accentTop,
  left: Ee.accentLeft,
  bottom: Ee.accentBottom,
  right: Ee.accentRight
}, cB = (e) => {
  if (!e || e === "none")
    return [];
  if (Array.isArray(e))
    return e.map((t) => Ip[String(t).trim().toLowerCase()]).filter(Boolean);
  if (typeof e == "string") {
    const t = e.trim().toLowerCase();
    return t === "all" ? [Ee.accentTop, Ee.accentRight, Ee.accentBottom, Ee.accentLeft] : t.split(/[\s,+/|-]+/).map((r) => r.trim()).map((r) => Ip[r]).filter(Boolean);
  }
  return typeof e == "object" ? Object.keys(e).filter((t) => !!e[t]).map((t) => Ip[t.toLowerCase()]).filter(Boolean) : [];
}, uB = {
  elevated: Ee.elevated,
  outlined: Ee.outlined,
  flat: Ee.flat,
  soft: Ee.soft,
  glass: Ee.glass,
  gradient: Ee.gradient
}, io = hd((e, t) => {
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
    radius: N = "large",
    padding: F,
    loading: x = !1,
    collapsible: I = !1,
    collapsed: O,
    defaultCollapsed: S = !1,
    onCollapseChange: C,
    collapseTrigger: T = "button",
    className: R = "",
    style: B = {},
    onClick: U,
    onKeyDown: te,
    tabIndex: z,
    role: ne
  } = e, fe = O !== void 0, [ge, Pe] = st(S), se = fe ? O : ge, me = () => {
    const W = !se;
    fe || Pe(W), C && C(W);
  }, J = BI(() => ({
    collapsible: I,
    isCollapsed: se,
    toggleCollapse: me,
    collapseTrigger: T
  }), [I, se, T]), re = o && Np[o], ae = o && !Np[o], ye = {
    ...B
  };
  s && (ye["--ik-card-bg"] = s), u && (ye["--ik-card-text"] = u), c && (ye["--ik-card-border"] = c), d && (ye["--ik-card-accent"] = d), p && (ye["--ik-card-glow"] = p), ae && (ye["--ik-card-accent"] = o, p || (ye["--ik-card-glow"] = o), r === "soft" && (ye["--ik-card-border-soft"] = o)), N && !_0[N] && (ye["--ik-card-radius"] = N);
  let Se = Ee.vertical;
  m === "horizontal" && (Se = g ? Ee.responsiveHorizontal : Ee.horizontal);
  const Ce = _ || typeof U == "function" && !I, pe = [
    Ee.card,
    uB[r] || Ee.elevated,
    re ? Np[o] : "",
    w ? Ee.fluid : Ee.notFluid,
    _0[N] || "",
    F ? lB[F] : "",
    ...cB(h),
    y ? Ee.hoverable : "",
    b ? Ee.hoverGlow : "",
    Ce ? Ee.clickable : "",
    Se,
    R
  ].filter(Boolean).join(" "), ke = (W) => {
    te && te(W), Ce && (W.key === "Enter" || W.key === " ") && (W.preventDefault(), U && U(W));
  }, $e = () => {
    if (!I)
      return n;
    const W = Q.Children.toArray(n), H = W.findIndex((G) => {
      var Z, le;
      return Q.isValidElement(G) && (G.type === Id || ((Z = G.type) == null ? void 0 : Z.displayName) === "CardHeader" || ((le = G.props) == null ? void 0 : le.displayName) === "CardHeader");
    });
    if (H === -1)
      return /* @__PURE__ */ P("div", { className: `${Ee.collapseGrid} ${se ? Ee.collapseGridCollapsed : ""}`, children: /* @__PURE__ */ P("div", { className: Ee.collapseContent, children: n }) });
    const $ = W[H], D = W.filter((G, Z) => Z !== H);
    return /* @__PURE__ */ oe(xa, { children: [
      $,
      /* @__PURE__ */ P("div", { className: `${Ee.collapseGrid} ${se ? Ee.collapseGridCollapsed : ""}`, children: /* @__PURE__ */ P("div", { className: Ee.collapseContent, children: D }) })
    ] });
  };
  return /* @__PURE__ */ P(_w.Provider, { value: J, children: /* @__PURE__ */ oe(
    "div",
    {
      ref: t,
      className: pe,
      style: ye,
      onClick: Ce ? U : void 0,
      onKeyDown: Ce ? ke : te,
      role: ne || (Ce ? "button" : void 0),
      tabIndex: z !== void 0 ? z : Ce ? 0 : void 0,
      children: [
        $e(),
        x && /* @__PURE__ */ oe("div", { className: Ee.loadingOverlay, children: [
          /* @__PURE__ */ P("div", { className: Ee.spinner }),
          /* @__PURE__ */ P("span", { children: "Cargando..." })
        ] })
      ]
    }
  ) });
});
io.displayName = "Card";
io.Header = Id;
io.Body = ww;
io.Footer = Ew;
io.Media = xw;
io.Badge = Cw;
io.Divider = Ow;
io.Icon = Sw;
io.propTypes = {
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
const dB = "_container_yq5hj_9", fB = "_pos_left_yq5hj_23", pB = "_pos_right_yq5hj_35", hB = "_pos_top_yq5hj_47", mB = "_pos_bottom_yq5hj_59", gB = "_align_left_yq5hj_71", vB = "_align_center_yq5hj_81", yB = "_align_right_yq5hj_91", bB = "_titleGroup_yq5hj_101", _B = "_titleLabel_yq5hj_113", wB = "_descriptionLabel_yq5hj_127", EB = "_disabled_yq5hj_141", xB = "_semanticToggle_yq5hj_155", CB = "_small_yq5hj_321", OB = "_medium_yq5hj_331", SB = "_large_yq5hj_339", Zr = {
  container: dB,
  pos_left: fB,
  pos_right: pB,
  pos_top: hB,
  pos_bottom: mB,
  align_left: gB,
  align_center: vB,
  align_right: yB,
  titleGroup: bB,
  titleLabel: _B,
  descriptionLabel: wB,
  disabled: EB,
  semanticToggle: xB,
  small: CB,
  medium: OB,
  large: SB
}, w0 = {
  primary: "var(--primary, #1e293b)",
  accent: "var(--accent, #3b82f6)",
  secondary: "var(--text-secondary, #64748b)",
  success: "#16a34a",
  warning: "#f59e0b",
  danger: "var(--red500, #ef4444)",
  info: "#0284c7",
  dark: "#0f172a"
}, E0 = (e) => {
  if (!e)
    return;
  const t = String(e).trim();
  return w0[t] ? w0[t] : t.startsWith("--") ? `var(${t})` : t;
}, Tw = hd((e, t) => {
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
    trueColor: N,
    falseColor: F,
    colorTrue: x,
    colorFalse: I,
    activeColor: O,
    inactiveColor: S,
    size: C = "medium",
    className: T = "",
    style: R = {},
    id: B,
    ...U
  } = e, te = (Ce, pe) => {
    g || y || o && o(pe.checked, Ce, pe);
  }, z = E0(N || x || O || w || "primary"), ne = E0(F || I || S || "#cbd5e1"), fe = {
    ...R,
    "--ik-toggle-true-color": z,
    "--ik-toggle-false-color": ne
  }, ge = Zr[C] || Zr.medium, Pe = g || y ? Zr.disabled : "", se = (p || d || h || "left").toLowerCase(), me = se === "top" || se === "left", J = Zr[`pos_${se}`] || Zr.pos_left, re = Zr[`align_${m}`] || "", ye = !!(u || c) ? /* @__PURE__ */ oe("div", { className: `${Zr.titleGroup} ${re}`.trim(), children: [
    u && /* @__PURE__ */ P("span", { className: Zr.titleLabel, children: u }),
    c && /* @__PURE__ */ P("span", { className: Zr.descriptionLabel, children: c })
  ] }) : null, Se = /* @__PURE__ */ P(
    Gn,
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
      onChange: te,
      className: Zr.semanticToggle
    }
  );
  return /* @__PURE__ */ P("div", { className: `${Zr.container} ${J} ${ge} ${Pe} ${T}`.trim(), style: fe, children: me ? /* @__PURE__ */ oe(xa, { children: [
    ye,
    Se
  ] }) : /* @__PURE__ */ oe(xa, { children: [
    Se,
    ye
  ] }) });
});
Tw.displayName = "Toggle";
Tw.propTypes = {
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
var Qu = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
Qu.exports;
(function(e, t) {
  (function() {
    var n, r = "4.18.1", o = 200, s = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", u = "Expected a function", c = "Invalid `variable` option passed into `_.template`", d = "Invalid `imports` option passed into `_.template`", p = "__lodash_hash_undefined__", h = 500, m = "__lodash_placeholder__", g = 1, y = 2, b = 4, _ = 1, w = 2, N = 1, F = 2, x = 4, I = 8, O = 16, S = 32, C = 64, T = 128, R = 256, B = 512, U = 30, te = "...", z = 800, ne = 16, fe = 1, ge = 2, Pe = 3, se = 1 / 0, me = 9007199254740991, J = 17976931348623157e292, re = NaN, ae = 4294967295, ye = ae - 1, Se = ae >>> 1, Ce = [
      ["ary", T],
      ["bind", N],
      ["bindKey", F],
      ["curry", I],
      ["curryRight", O],
      ["flip", B],
      ["partial", S],
      ["partialRight", C],
      ["rearg", R]
    ], pe = "[object Arguments]", ke = "[object Array]", $e = "[object AsyncFunction]", W = "[object Boolean]", H = "[object Date]", $ = "[object DOMException]", D = "[object Error]", G = "[object Function]", Z = "[object GeneratorFunction]", le = "[object Map]", Ne = "[object Number]", de = "[object Null]", xe = "[object Object]", ue = "[object Promise]", q = "[object Proxy]", ee = "[object RegExp]", we = "[object Set]", Te = "[object String]", Re = "[object Symbol]", Be = "[object Undefined]", Fe = "[object WeakMap]", et = "[object WeakSet]", Ze = "[object ArrayBuffer]", Ge = "[object DataView]", Ve = "[object Float32Array]", Tt = "[object Float64Array]", ve = "[object Int8Array]", It = "[object Int16Array]", At = "[object Int32Array]", pt = "[object Uint8Array]", nt = "[object Uint8ClampedArray]", Gt = "[object Uint16Array]", Ue = "[object Uint32Array]", Ft = /\b__p \+= '';/g, tt = /\b(__p \+=) '' \+/g, un = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Zn = /&(?:amp|lt|gt|quot|#39);/g, sa = /[&<>"']/g, Nc = RegExp(Zn.source), la = RegExp(sa.source), lC = /<%-([\s\S]+?)%>/g, cC = /<%([\s\S]+?)%>/g, Pg = /<%=([\s\S]+?)%>/g, uC = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, dC = /^\w*$/, fC = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ef = /[\\^$.*+?()[\]{}|]/g, pC = RegExp(ef.source), tf = /^\s+/, hC = /\s/, mC = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, gC = /\{\n\/\* \[wrapped with (.+)\] \*/, vC = /,? & /, yC = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, kg = /[()=,{}\[\]\/\s]/, bC = /\\(\\)?/g, _C = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Ng = /\w*$/, wC = /^[-+]0x[0-9a-f]+$/i, EC = /^0b[01]+$/i, xC = /^\[object .+?Constructor\]$/, CC = /^0o[0-7]+$/i, OC = /^(?:0|[1-9]\d*)$/, SC = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ic = /($^)/, TC = /['\n\r\u2028\u2029\\]/g, Ac = "\\ud800-\\udfff", PC = "\\u0300-\\u036f", kC = "\\ufe20-\\ufe2f", NC = "\\u20d0-\\u20ff", Ig = PC + kC + NC, Ag = "\\u2700-\\u27bf", Rg = "a-z\\xdf-\\xf6\\xf8-\\xff", IC = "\\xac\\xb1\\xd7\\xf7", AC = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", RC = "\\u2000-\\u206f", MC = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Mg = "A-Z\\xc0-\\xd6\\xd8-\\xde", Dg = "\\ufe0e\\ufe0f", Lg = IC + AC + RC + MC, nf = "['’]", DC = "[" + Ac + "]", Fg = "[" + Lg + "]", Rc = "[" + Ig + "]", $g = "\\d+", LC = "[" + Ag + "]", Bg = "[" + Rg + "]", jg = "[^" + Ac + Lg + $g + Ag + Rg + Mg + "]", rf = "\\ud83c[\\udffb-\\udfff]", FC = "(?:" + Rc + "|" + rf + ")", Wg = "[^" + Ac + "]", af = "(?:\\ud83c[\\udde6-\\uddff]){2}", of = "[\\ud800-\\udbff][\\udc00-\\udfff]", zi = "[" + Mg + "]", Ug = "\\u200d", zg = "(?:" + Bg + "|" + jg + ")", $C = "(?:" + zi + "|" + jg + ")", Hg = "(?:" + nf + "(?:d|ll|m|re|s|t|ve))?", Yg = "(?:" + nf + "(?:D|LL|M|RE|S|T|VE))?", qg = FC + "?", Vg = "[" + Dg + "]?", BC = "(?:" + Ug + "(?:" + [Wg, af, of].join("|") + ")" + Vg + qg + ")*", jC = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", WC = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Gg = Vg + qg + BC, UC = "(?:" + [LC, af, of].join("|") + ")" + Gg, zC = "(?:" + [Wg + Rc + "?", Rc, af, of, DC].join("|") + ")", HC = RegExp(nf, "g"), YC = RegExp(Rc, "g"), sf = RegExp(rf + "(?=" + rf + ")|" + zC + Gg, "g"), qC = RegExp([
      zi + "?" + Bg + "+" + Hg + "(?=" + [Fg, zi, "$"].join("|") + ")",
      $C + "+" + Yg + "(?=" + [Fg, zi + zg, "$"].join("|") + ")",
      zi + "?" + zg + "+" + Hg,
      zi + "+" + Yg,
      WC,
      jC,
      $g,
      UC
    ].join("|"), "g"), VC = RegExp("[" + Ug + Ac + Ig + Dg + "]"), GC = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, KC = [
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
    ], ZC = -1, en = {};
    en[Ve] = en[Tt] = en[ve] = en[It] = en[At] = en[pt] = en[nt] = en[Gt] = en[Ue] = !0, en[pe] = en[ke] = en[Ze] = en[W] = en[Ge] = en[H] = en[D] = en[G] = en[le] = en[Ne] = en[xe] = en[ee] = en[we] = en[Te] = en[Fe] = !1;
    var Xt = {};
    Xt[pe] = Xt[ke] = Xt[Ze] = Xt[Ge] = Xt[W] = Xt[H] = Xt[Ve] = Xt[Tt] = Xt[ve] = Xt[It] = Xt[At] = Xt[le] = Xt[Ne] = Xt[xe] = Xt[ee] = Xt[we] = Xt[Te] = Xt[Re] = Xt[pt] = Xt[nt] = Xt[Gt] = Xt[Ue] = !0, Xt[D] = Xt[G] = Xt[Fe] = !1;
    var XC = {
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
    }, QC = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, JC = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, eO = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, tO = parseFloat, nO = parseInt, Kg = typeof os == "object" && os && os.Object === Object && os, rO = typeof self == "object" && self && self.Object === Object && self, Nn = Kg || rO || Function("return this")(), lf = t && !t.nodeType && t, ni = lf && !0 && e && !e.nodeType && e, Zg = ni && ni.exports === lf, cf = Zg && Kg.process, Or = function() {
      try {
        var K = ni && ni.require && ni.require("util").types;
        return K || cf && cf.binding && cf.binding("util");
      } catch {
      }
    }(), Xg = Or && Or.isArrayBuffer, Qg = Or && Or.isDate, Jg = Or && Or.isMap, ev = Or && Or.isRegExp, tv = Or && Or.isSet, nv = Or && Or.isTypedArray;
    function ur(K, he, ie) {
      switch (ie.length) {
        case 0:
          return K.call(he);
        case 1:
          return K.call(he, ie[0]);
        case 2:
          return K.call(he, ie[0], ie[1]);
        case 3:
          return K.call(he, ie[0], ie[1], ie[2]);
      }
      return K.apply(he, ie);
    }
    function aO(K, he, ie, ze) {
      for (var ct = -1, Lt = K == null ? 0 : K.length; ++ct < Lt; ) {
        var bn = K[ct];
        he(ze, bn, ie(bn), K);
      }
      return ze;
    }
    function dr(K, he) {
      for (var ie = -1, ze = K == null ? 0 : K.length; ++ie < ze && he(K[ie], ie, K) !== !1; )
        ;
      return K;
    }
    function oO(K, he) {
      for (var ie = K == null ? 0 : K.length; ie-- && he(K[ie], ie, K) !== !1; )
        ;
      return K;
    }
    function rv(K, he) {
      for (var ie = -1, ze = K == null ? 0 : K.length; ++ie < ze; )
        if (!he(K[ie], ie, K))
          return !1;
      return !0;
    }
    function ho(K, he) {
      for (var ie = -1, ze = K == null ? 0 : K.length, ct = 0, Lt = []; ++ie < ze; ) {
        var bn = K[ie];
        he(bn, ie, K) && (Lt[ct++] = bn);
      }
      return Lt;
    }
    function Mc(K, he) {
      var ie = K == null ? 0 : K.length;
      return !!ie && Hi(K, he, 0) > -1;
    }
    function uf(K, he, ie) {
      for (var ze = -1, ct = K == null ? 0 : K.length; ++ze < ct; )
        if (ie(he, K[ze]))
          return !0;
      return !1;
    }
    function sn(K, he) {
      for (var ie = -1, ze = K == null ? 0 : K.length, ct = Array(ze); ++ie < ze; )
        ct[ie] = he(K[ie], ie, K);
      return ct;
    }
    function mo(K, he) {
      for (var ie = -1, ze = he.length, ct = K.length; ++ie < ze; )
        K[ct + ie] = he[ie];
      return K;
    }
    function df(K, he, ie, ze) {
      var ct = -1, Lt = K == null ? 0 : K.length;
      for (ze && Lt && (ie = K[++ct]); ++ct < Lt; )
        ie = he(ie, K[ct], ct, K);
      return ie;
    }
    function iO(K, he, ie, ze) {
      var ct = K == null ? 0 : K.length;
      for (ze && ct && (ie = K[--ct]); ct--; )
        ie = he(ie, K[ct], ct, K);
      return ie;
    }
    function ff(K, he) {
      for (var ie = -1, ze = K == null ? 0 : K.length; ++ie < ze; )
        if (he(K[ie], ie, K))
          return !0;
      return !1;
    }
    var sO = pf("length");
    function lO(K) {
      return K.split("");
    }
    function cO(K) {
      return K.match(yC) || [];
    }
    function av(K, he, ie) {
      var ze;
      return ie(K, function(ct, Lt, bn) {
        if (he(ct, Lt, bn))
          return ze = Lt, !1;
      }), ze;
    }
    function Dc(K, he, ie, ze) {
      for (var ct = K.length, Lt = ie + (ze ? 1 : -1); ze ? Lt-- : ++Lt < ct; )
        if (he(K[Lt], Lt, K))
          return Lt;
      return -1;
    }
    function Hi(K, he, ie) {
      return he === he ? wO(K, he, ie) : Dc(K, ov, ie);
    }
    function uO(K, he, ie, ze) {
      for (var ct = ie - 1, Lt = K.length; ++ct < Lt; )
        if (ze(K[ct], he))
          return ct;
      return -1;
    }
    function ov(K) {
      return K !== K;
    }
    function iv(K, he) {
      var ie = K == null ? 0 : K.length;
      return ie ? mf(K, he) / ie : re;
    }
    function pf(K) {
      return function(he) {
        return he == null ? n : he[K];
      };
    }
    function hf(K) {
      return function(he) {
        return K == null ? n : K[he];
      };
    }
    function sv(K, he, ie, ze, ct) {
      return ct(K, function(Lt, bn, Kt) {
        ie = ze ? (ze = !1, Lt) : he(ie, Lt, bn, Kt);
      }), ie;
    }
    function dO(K, he) {
      var ie = K.length;
      for (K.sort(he); ie--; )
        K[ie] = K[ie].value;
      return K;
    }
    function mf(K, he) {
      for (var ie, ze = -1, ct = K.length; ++ze < ct; ) {
        var Lt = he(K[ze]);
        Lt !== n && (ie = ie === n ? Lt : ie + Lt);
      }
      return ie;
    }
    function gf(K, he) {
      for (var ie = -1, ze = Array(K); ++ie < K; )
        ze[ie] = he(ie);
      return ze;
    }
    function fO(K, he) {
      return sn(he, function(ie) {
        return [ie, K[ie]];
      });
    }
    function lv(K) {
      return K && K.slice(0, fv(K) + 1).replace(tf, "");
    }
    function fr(K) {
      return function(he) {
        return K(he);
      };
    }
    function vf(K, he) {
      return sn(he, function(ie) {
        return K[ie];
      });
    }
    function Zs(K, he) {
      return K.has(he);
    }
    function cv(K, he) {
      for (var ie = -1, ze = K.length; ++ie < ze && Hi(he, K[ie], 0) > -1; )
        ;
      return ie;
    }
    function uv(K, he) {
      for (var ie = K.length; ie-- && Hi(he, K[ie], 0) > -1; )
        ;
      return ie;
    }
    function pO(K, he) {
      for (var ie = K.length, ze = 0; ie--; )
        K[ie] === he && ++ze;
      return ze;
    }
    var hO = hf(XC), mO = hf(QC);
    function gO(K) {
      return "\\" + eO[K];
    }
    function vO(K, he) {
      return K == null ? n : K[he];
    }
    function Yi(K) {
      return VC.test(K);
    }
    function yO(K) {
      return GC.test(K);
    }
    function bO(K) {
      for (var he, ie = []; !(he = K.next()).done; )
        ie.push(he.value);
      return ie;
    }
    function yf(K) {
      var he = -1, ie = Array(K.size);
      return K.forEach(function(ze, ct) {
        ie[++he] = [ct, ze];
      }), ie;
    }
    function dv(K, he) {
      return function(ie) {
        return K(he(ie));
      };
    }
    function go(K, he) {
      for (var ie = -1, ze = K.length, ct = 0, Lt = []; ++ie < ze; ) {
        var bn = K[ie];
        (bn === he || bn === m) && (K[ie] = m, Lt[ct++] = ie);
      }
      return Lt;
    }
    function Lc(K) {
      var he = -1, ie = Array(K.size);
      return K.forEach(function(ze) {
        ie[++he] = ze;
      }), ie;
    }
    function _O(K) {
      var he = -1, ie = Array(K.size);
      return K.forEach(function(ze) {
        ie[++he] = [ze, ze];
      }), ie;
    }
    function wO(K, he, ie) {
      for (var ze = ie - 1, ct = K.length; ++ze < ct; )
        if (K[ze] === he)
          return ze;
      return -1;
    }
    function EO(K, he, ie) {
      for (var ze = ie + 1; ze--; )
        if (K[ze] === he)
          return ze;
      return ze;
    }
    function qi(K) {
      return Yi(K) ? CO(K) : sO(K);
    }
    function Yr(K) {
      return Yi(K) ? OO(K) : lO(K);
    }
    function fv(K) {
      for (var he = K.length; he-- && hC.test(K.charAt(he)); )
        ;
      return he;
    }
    var xO = hf(JC);
    function CO(K) {
      for (var he = sf.lastIndex = 0; sf.test(K); )
        ++he;
      return he;
    }
    function OO(K) {
      return K.match(sf) || [];
    }
    function SO(K) {
      return K.match(qC) || [];
    }
    var TO = function K(he) {
      he = he == null ? Nn : Vi.defaults(Nn.Object(), he, Vi.pick(Nn, KC));
      var ie = he.Array, ze = he.Date, ct = he.Error, Lt = he.Function, bn = he.Math, Kt = he.Object, bf = he.RegExp, PO = he.String, Sr = he.TypeError, Fc = ie.prototype, kO = Lt.prototype, Gi = Kt.prototype, $c = he["__core-js_shared__"], Bc = kO.toString, $t = Gi.hasOwnProperty, NO = 0, pv = function() {
        var a = /[^.]+$/.exec($c && $c.keys && $c.keys.IE_PROTO || "");
        return a ? "Symbol(src)_1." + a : "";
      }(), jc = Gi.toString, IO = Bc.call(Kt), AO = Nn._, RO = bf(
        "^" + Bc.call($t).replace(ef, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Wc = Zg ? he.Buffer : n, vo = he.Symbol, Uc = he.Uint8Array, hv = Wc ? Wc.allocUnsafe : n, zc = dv(Kt.getPrototypeOf, Kt), mv = Kt.create, gv = Gi.propertyIsEnumerable, Hc = Fc.splice, vv = vo ? vo.isConcatSpreadable : n, Xs = vo ? vo.iterator : n, ri = vo ? vo.toStringTag : n, Yc = function() {
        try {
          var a = li(Kt, "defineProperty");
          return a({}, "", {}), a;
        } catch {
        }
      }(), MO = he.clearTimeout !== Nn.clearTimeout && he.clearTimeout, DO = ze && ze.now !== Nn.Date.now && ze.now, LO = he.setTimeout !== Nn.setTimeout && he.setTimeout, qc = bn.ceil, Vc = bn.floor, _f = Kt.getOwnPropertySymbols, FO = Wc ? Wc.isBuffer : n, yv = he.isFinite, $O = Fc.join, BO = dv(Kt.keys, Kt), _n = bn.max, Rn = bn.min, jO = ze.now, WO = he.parseInt, bv = bn.random, UO = Fc.reverse, wf = li(he, "DataView"), Qs = li(he, "Map"), Ef = li(he, "Promise"), Ki = li(he, "Set"), Js = li(he, "WeakMap"), el = li(Kt, "create"), Gc = Js && new Js(), Zi = {}, zO = ci(wf), HO = ci(Qs), YO = ci(Ef), qO = ci(Ki), VO = ci(Js), Kc = vo ? vo.prototype : n, tl = Kc ? Kc.valueOf : n, _v = Kc ? Kc.toString : n;
      function k(a) {
        if (fn(a) && !dt(a) && !(a instanceof Ct)) {
          if (a instanceof Tr)
            return a;
          if ($t.call(a, "__wrapped__"))
            return wy(a);
        }
        return new Tr(a);
      }
      var Xi = /* @__PURE__ */ function() {
        function a() {
        }
        return function(i) {
          if (!dn(i))
            return {};
          if (mv)
            return mv(i);
          a.prototype = i;
          var f = new a();
          return a.prototype = n, f;
        };
      }();
      function Zc() {
      }
      function Tr(a, i) {
        this.__wrapped__ = a, this.__actions__ = [], this.__chain__ = !!i, this.__index__ = 0, this.__values__ = n;
      }
      k.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: lC,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: cC,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: Pg,
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
          _: k
        }
      }, k.prototype = Zc.prototype, k.prototype.constructor = k, Tr.prototype = Xi(Zc.prototype), Tr.prototype.constructor = Tr;
      function Ct(a) {
        this.__wrapped__ = a, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = ae, this.__views__ = [];
      }
      function GO() {
        var a = new Ct(this.__wrapped__);
        return a.__actions__ = Xn(this.__actions__), a.__dir__ = this.__dir__, a.__filtered__ = this.__filtered__, a.__iteratees__ = Xn(this.__iteratees__), a.__takeCount__ = this.__takeCount__, a.__views__ = Xn(this.__views__), a;
      }
      function KO() {
        if (this.__filtered__) {
          var a = new Ct(this);
          a.__dir__ = -1, a.__filtered__ = !0;
        } else
          a = this.clone(), a.__dir__ *= -1;
        return a;
      }
      function ZO() {
        var a = this.__wrapped__.value(), i = this.__dir__, f = dt(a), v = i < 0, E = f ? a.length : 0, M = lT(0, E, this.__views__), j = M.start, Y = M.end, X = Y - j, be = v ? Y : j - 1, _e = this.__iteratees__, Oe = _e.length, je = 0, Xe = Rn(X, this.__takeCount__);
        if (!f || !v && E == X && Xe == X)
          return Hv(a, this.__actions__);
        var ot = [];
        e:
          for (; X-- && je < Xe; ) {
            be += i;
            for (var gt = -1, rt = a[be]; ++gt < Oe; ) {
              var wt = _e[gt], Pt = wt.iteratee, mr = wt.type, Un = Pt(rt);
              if (mr == ge)
                rt = Un;
              else if (!Un) {
                if (mr == fe)
                  continue e;
                break e;
              }
            }
            ot[je++] = rt;
          }
        return ot;
      }
      Ct.prototype = Xi(Zc.prototype), Ct.prototype.constructor = Ct;
      function ai(a) {
        var i = -1, f = a == null ? 0 : a.length;
        for (this.clear(); ++i < f; ) {
          var v = a[i];
          this.set(v[0], v[1]);
        }
      }
      function XO() {
        this.__data__ = el ? el(null) : {}, this.size = 0;
      }
      function QO(a) {
        var i = this.has(a) && delete this.__data__[a];
        return this.size -= i ? 1 : 0, i;
      }
      function JO(a) {
        var i = this.__data__;
        if (el) {
          var f = i[a];
          return f === p ? n : f;
        }
        return $t.call(i, a) ? i[a] : n;
      }
      function eS(a) {
        var i = this.__data__;
        return el ? i[a] !== n : $t.call(i, a);
      }
      function tS(a, i) {
        var f = this.__data__;
        return this.size += this.has(a) ? 0 : 1, f[a] = el && i === n ? p : i, this;
      }
      ai.prototype.clear = XO, ai.prototype.delete = QO, ai.prototype.get = JO, ai.prototype.has = eS, ai.prototype.set = tS;
      function Aa(a) {
        var i = -1, f = a == null ? 0 : a.length;
        for (this.clear(); ++i < f; ) {
          var v = a[i];
          this.set(v[0], v[1]);
        }
      }
      function nS() {
        this.__data__ = [], this.size = 0;
      }
      function rS(a) {
        var i = this.__data__, f = Xc(i, a);
        if (f < 0)
          return !1;
        var v = i.length - 1;
        return f == v ? i.pop() : Hc.call(i, f, 1), --this.size, !0;
      }
      function aS(a) {
        var i = this.__data__, f = Xc(i, a);
        return f < 0 ? n : i[f][1];
      }
      function oS(a) {
        return Xc(this.__data__, a) > -1;
      }
      function iS(a, i) {
        var f = this.__data__, v = Xc(f, a);
        return v < 0 ? (++this.size, f.push([a, i])) : f[v][1] = i, this;
      }
      Aa.prototype.clear = nS, Aa.prototype.delete = rS, Aa.prototype.get = aS, Aa.prototype.has = oS, Aa.prototype.set = iS;
      function Ra(a) {
        var i = -1, f = a == null ? 0 : a.length;
        for (this.clear(); ++i < f; ) {
          var v = a[i];
          this.set(v[0], v[1]);
        }
      }
      function sS() {
        this.size = 0, this.__data__ = {
          hash: new ai(),
          map: new (Qs || Aa)(),
          string: new ai()
        };
      }
      function lS(a) {
        var i = cu(this, a).delete(a);
        return this.size -= i ? 1 : 0, i;
      }
      function cS(a) {
        return cu(this, a).get(a);
      }
      function uS(a) {
        return cu(this, a).has(a);
      }
      function dS(a, i) {
        var f = cu(this, a), v = f.size;
        return f.set(a, i), this.size += f.size == v ? 0 : 1, this;
      }
      Ra.prototype.clear = sS, Ra.prototype.delete = lS, Ra.prototype.get = cS, Ra.prototype.has = uS, Ra.prototype.set = dS;
      function oi(a) {
        var i = -1, f = a == null ? 0 : a.length;
        for (this.__data__ = new Ra(); ++i < f; )
          this.add(a[i]);
      }
      function fS(a) {
        return this.__data__.set(a, p), this;
      }
      function pS(a) {
        return this.__data__.has(a);
      }
      oi.prototype.add = oi.prototype.push = fS, oi.prototype.has = pS;
      function qr(a) {
        var i = this.__data__ = new Aa(a);
        this.size = i.size;
      }
      function hS() {
        this.__data__ = new Aa(), this.size = 0;
      }
      function mS(a) {
        var i = this.__data__, f = i.delete(a);
        return this.size = i.size, f;
      }
      function gS(a) {
        return this.__data__.get(a);
      }
      function vS(a) {
        return this.__data__.has(a);
      }
      function yS(a, i) {
        var f = this.__data__;
        if (f instanceof Aa) {
          var v = f.__data__;
          if (!Qs || v.length < o - 1)
            return v.push([a, i]), this.size = ++f.size, this;
          f = this.__data__ = new Ra(v);
        }
        return f.set(a, i), this.size = f.size, this;
      }
      qr.prototype.clear = hS, qr.prototype.delete = mS, qr.prototype.get = gS, qr.prototype.has = vS, qr.prototype.set = yS;
      function wv(a, i) {
        var f = dt(a), v = !f && ui(a), E = !f && !v && Eo(a), M = !f && !v && !E && ts(a), j = f || v || E || M, Y = j ? gf(a.length, PO) : [], X = Y.length;
        for (var be in a)
          (i || $t.call(a, be)) && !(j && // Safari 9 has enumerable `arguments.length` in strict mode.
          (be == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          E && (be == "offset" || be == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          M && (be == "buffer" || be == "byteLength" || be == "byteOffset") || // Skip index properties.
          La(be, X))) && Y.push(be);
        return Y;
      }
      function Ev(a) {
        var i = a.length;
        return i ? a[Rf(0, i - 1)] : n;
      }
      function bS(a, i) {
        return uu(Xn(a), ii(i, 0, a.length));
      }
      function _S(a) {
        return uu(Xn(a));
      }
      function xf(a, i, f) {
        (f !== n && !Gr(a[i], f) || f === n && !(i in a)) && ca(a, i, f);
      }
      function nl(a, i, f) {
        var v = a[i];
        (!($t.call(a, i) && Gr(v, f)) || f === n && !(i in a)) && ca(a, i, f);
      }
      function Xc(a, i) {
        for (var f = a.length; f--; )
          if (Gr(a[f][0], i))
            return f;
        return -1;
      }
      function wS(a, i, f, v) {
        return yo(a, function(E, M, j) {
          i(v, E, f(E), j);
        }), v;
      }
      function xv(a, i) {
        return a && da(i, On(i), a);
      }
      function ES(a, i) {
        return a && da(i, Jn(i), a);
      }
      function ca(a, i, f) {
        i == "__proto__" && Yc ? Yc(a, i, {
          configurable: !0,
          enumerable: !0,
          value: f,
          writable: !0
        }) : a[i] = f;
      }
      function Cf(a, i) {
        for (var f = -1, v = i.length, E = ie(v), M = a == null; ++f < v; )
          E[f] = M ? n : op(a, i[f]);
        return E;
      }
      function ii(a, i, f) {
        return a === a && (f !== n && (a = a <= f ? a : f), i !== n && (a = a >= i ? a : i)), a;
      }
      function Pr(a, i, f, v, E, M) {
        var j, Y = i & g, X = i & y, be = i & b;
        if (f && (j = E ? f(a, v, E, M) : f(a)), j !== n)
          return j;
        if (!dn(a))
          return a;
        var _e = dt(a);
        if (_e) {
          if (j = uT(a), !Y)
            return Xn(a, j);
        } else {
          var Oe = Mn(a), je = Oe == G || Oe == Z;
          if (Eo(a))
            return Vv(a, Y);
          if (Oe == xe || Oe == pe || je && !E) {
            if (j = X || je ? {} : fy(a), !Y)
              return X ? JS(a, ES(j, a)) : QS(a, xv(j, a));
          } else {
            if (!Xt[Oe])
              return E ? a : {};
            j = dT(a, Oe, Y);
          }
        }
        M || (M = new qr());
        var Xe = M.get(a);
        if (Xe)
          return Xe;
        M.set(a, j), Wy(a) ? a.forEach(function(rt) {
          j.add(Pr(rt, i, f, rt, a, M));
        }) : By(a) && a.forEach(function(rt, wt) {
          j.set(wt, Pr(rt, i, f, wt, a, M));
        });
        var ot = be ? X ? Hf : zf : X ? Jn : On, gt = _e ? n : ot(a);
        return dr(gt || a, function(rt, wt) {
          gt && (wt = rt, rt = a[wt]), nl(j, wt, Pr(rt, i, f, wt, a, M));
        }), j;
      }
      function xS(a) {
        var i = On(a);
        return function(f) {
          return Cv(f, a, i);
        };
      }
      function Cv(a, i, f) {
        var v = f.length;
        if (a == null)
          return !v;
        for (a = Kt(a); v--; ) {
          var E = f[v], M = i[E], j = a[E];
          if (j === n && !(E in a) || !M(j))
            return !1;
        }
        return !0;
      }
      function Ov(a, i, f) {
        if (typeof a != "function")
          throw new Sr(u);
        return cl(function() {
          a.apply(n, f);
        }, i);
      }
      function rl(a, i, f, v) {
        var E = -1, M = Mc, j = !0, Y = a.length, X = [], be = i.length;
        if (!Y)
          return X;
        f && (i = sn(i, fr(f))), v ? (M = uf, j = !1) : i.length >= o && (M = Zs, j = !1, i = new oi(i));
        e:
          for (; ++E < Y; ) {
            var _e = a[E], Oe = f == null ? _e : f(_e);
            if (_e = v || _e !== 0 ? _e : 0, j && Oe === Oe) {
              for (var je = be; je--; )
                if (i[je] === Oe)
                  continue e;
              X.push(_e);
            } else M(i, Oe, v) || X.push(_e);
          }
        return X;
      }
      var yo = Qv(ua), Sv = Qv(Sf, !0);
      function CS(a, i) {
        var f = !0;
        return yo(a, function(v, E, M) {
          return f = !!i(v, E, M), f;
        }), f;
      }
      function Qc(a, i, f) {
        for (var v = -1, E = a.length; ++v < E; ) {
          var M = a[v], j = i(M);
          if (j != null && (Y === n ? j === j && !hr(j) : f(j, Y)))
            var Y = j, X = M;
        }
        return X;
      }
      function OS(a, i, f, v) {
        var E = a.length;
        for (f = ht(f), f < 0 && (f = -f > E ? 0 : E + f), v = v === n || v > E ? E : ht(v), v < 0 && (v += E), v = f > v ? 0 : zy(v); f < v; )
          a[f++] = i;
        return a;
      }
      function Tv(a, i) {
        var f = [];
        return yo(a, function(v, E, M) {
          i(v, E, M) && f.push(v);
        }), f;
      }
      function In(a, i, f, v, E) {
        var M = -1, j = a.length;
        for (f || (f = pT), E || (E = []); ++M < j; ) {
          var Y = a[M];
          i > 0 && f(Y) ? i > 1 ? In(Y, i - 1, f, v, E) : mo(E, Y) : v || (E[E.length] = Y);
        }
        return E;
      }
      var Of = Jv(), Pv = Jv(!0);
      function ua(a, i) {
        return a && Of(a, i, On);
      }
      function Sf(a, i) {
        return a && Pv(a, i, On);
      }
      function Jc(a, i) {
        return ho(i, function(f) {
          return Fa(a[f]);
        });
      }
      function si(a, i) {
        i = _o(i, a);
        for (var f = 0, v = i.length; a != null && f < v; )
          a = a[Vr(i[f++])];
        return f && f == v ? a : n;
      }
      function kv(a, i, f) {
        var v = i(a);
        return dt(a) ? v : mo(v, f(a));
      }
      function jn(a) {
        return a == null ? a === n ? Be : de : ri && ri in Kt(a) ? sT(a) : _T(a);
      }
      function Tf(a, i) {
        return a > i;
      }
      function SS(a, i) {
        return a != null && $t.call(a, i);
      }
      function TS(a, i) {
        return a != null && i in Kt(a);
      }
      function PS(a, i, f) {
        return a >= Rn(i, f) && a < _n(i, f);
      }
      function Pf(a, i, f) {
        for (var v = f ? uf : Mc, E = a[0].length, M = a.length, j = M, Y = ie(M), X = 1 / 0, be = []; j--; ) {
          var _e = a[j];
          j && i && (_e = sn(_e, fr(i))), X = Rn(_e.length, X), Y[j] = !f && (i || E >= 120 && _e.length >= 120) ? new oi(j && _e) : n;
        }
        _e = a[0];
        var Oe = -1, je = Y[0];
        e:
          for (; ++Oe < E && be.length < X; ) {
            var Xe = _e[Oe], ot = i ? i(Xe) : Xe;
            if (Xe = f || Xe !== 0 ? Xe : 0, !(je ? Zs(je, ot) : v(be, ot, f))) {
              for (j = M; --j; ) {
                var gt = Y[j];
                if (!(gt ? Zs(gt, ot) : v(a[j], ot, f)))
                  continue e;
              }
              je && je.push(ot), be.push(Xe);
            }
          }
        return be;
      }
      function kS(a, i, f, v) {
        return ua(a, function(E, M, j) {
          i(v, f(E), M, j);
        }), v;
      }
      function al(a, i, f) {
        i = _o(i, a), a = gy(a, i);
        var v = a == null ? a : a[Vr(Nr(i))];
        return v == null ? n : ur(v, a, f);
      }
      function Nv(a) {
        return fn(a) && jn(a) == pe;
      }
      function NS(a) {
        return fn(a) && jn(a) == Ze;
      }
      function IS(a) {
        return fn(a) && jn(a) == H;
      }
      function ol(a, i, f, v, E) {
        return a === i ? !0 : a == null || i == null || !fn(a) && !fn(i) ? a !== a && i !== i : AS(a, i, f, v, ol, E);
      }
      function AS(a, i, f, v, E, M) {
        var j = dt(a), Y = dt(i), X = j ? ke : Mn(a), be = Y ? ke : Mn(i);
        X = X == pe ? xe : X, be = be == pe ? xe : be;
        var _e = X == xe, Oe = be == xe, je = X == be;
        if (je && Eo(a)) {
          if (!Eo(i))
            return !1;
          j = !0, _e = !1;
        }
        if (je && !_e)
          return M || (M = new qr()), j || ts(a) ? cy(a, i, f, v, E, M) : oT(a, i, X, f, v, E, M);
        if (!(f & _)) {
          var Xe = _e && $t.call(a, "__wrapped__"), ot = Oe && $t.call(i, "__wrapped__");
          if (Xe || ot) {
            var gt = Xe ? a.value() : a, rt = ot ? i.value() : i;
            return M || (M = new qr()), E(gt, rt, f, v, M);
          }
        }
        return je ? (M || (M = new qr()), iT(a, i, f, v, E, M)) : !1;
      }
      function RS(a) {
        return fn(a) && Mn(a) == le;
      }
      function kf(a, i, f, v) {
        var E = f.length, M = E, j = !v;
        if (a == null)
          return !M;
        for (a = Kt(a); E--; ) {
          var Y = f[E];
          if (j && Y[2] ? Y[1] !== a[Y[0]] : !(Y[0] in a))
            return !1;
        }
        for (; ++E < M; ) {
          Y = f[E];
          var X = Y[0], be = a[X], _e = Y[1];
          if (j && Y[2]) {
            if (be === n && !(X in a))
              return !1;
          } else {
            var Oe = new qr();
            if (v)
              var je = v(be, _e, X, a, i, Oe);
            if (!(je === n ? ol(_e, be, _ | w, v, Oe) : je))
              return !1;
          }
        }
        return !0;
      }
      function Iv(a) {
        if (!dn(a) || mT(a))
          return !1;
        var i = Fa(a) ? RO : xC;
        return i.test(ci(a));
      }
      function MS(a) {
        return fn(a) && jn(a) == ee;
      }
      function DS(a) {
        return fn(a) && Mn(a) == we;
      }
      function LS(a) {
        return fn(a) && gu(a.length) && !!en[jn(a)];
      }
      function Av(a) {
        return typeof a == "function" ? a : a == null ? er : typeof a == "object" ? dt(a) ? Dv(a[0], a[1]) : Mv(a) : tb(a);
      }
      function Nf(a) {
        if (!ll(a))
          return BO(a);
        var i = [];
        for (var f in Kt(a))
          $t.call(a, f) && f != "constructor" && i.push(f);
        return i;
      }
      function FS(a) {
        if (!dn(a))
          return bT(a);
        var i = ll(a), f = [];
        for (var v in a)
          v == "constructor" && (i || !$t.call(a, v)) || f.push(v);
        return f;
      }
      function If(a, i) {
        return a < i;
      }
      function Rv(a, i) {
        var f = -1, v = Qn(a) ? ie(a.length) : [];
        return yo(a, function(E, M, j) {
          v[++f] = i(E, M, j);
        }), v;
      }
      function Mv(a) {
        var i = qf(a);
        return i.length == 1 && i[0][2] ? hy(i[0][0], i[0][1]) : function(f) {
          return f === a || kf(f, a, i);
        };
      }
      function Dv(a, i) {
        return Gf(a) && py(i) ? hy(Vr(a), i) : function(f) {
          var v = op(f, a);
          return v === n && v === i ? ip(f, a) : ol(i, v, _ | w);
        };
      }
      function eu(a, i, f, v, E) {
        a !== i && Of(i, function(M, j) {
          if (E || (E = new qr()), dn(M))
            $S(a, i, j, f, eu, v, E);
          else {
            var Y = v ? v(Zf(a, j), M, j + "", a, i, E) : n;
            Y === n && (Y = M), xf(a, j, Y);
          }
        }, Jn);
      }
      function $S(a, i, f, v, E, M, j) {
        var Y = Zf(a, f), X = Zf(i, f), be = j.get(X);
        if (be) {
          xf(a, f, be);
          return;
        }
        var _e = M ? M(Y, X, f + "", a, i, j) : n, Oe = _e === n;
        if (Oe) {
          var je = dt(X), Xe = !je && Eo(X), ot = !je && !Xe && ts(X);
          _e = X, je || Xe || ot ? dt(Y) ? _e = Y : hn(Y) ? _e = Xn(Y) : Xe ? (Oe = !1, _e = Vv(X, !0)) : ot ? (Oe = !1, _e = Gv(X, !0)) : _e = [] : ul(X) || ui(X) ? (_e = Y, ui(Y) ? _e = Hy(Y) : (!dn(Y) || Fa(Y)) && (_e = fy(X))) : Oe = !1;
        }
        Oe && (j.set(X, _e), E(_e, X, v, M, j), j.delete(X)), xf(a, f, _e);
      }
      function Lv(a, i) {
        var f = a.length;
        if (f)
          return i += i < 0 ? f : 0, La(i, f) ? a[i] : n;
      }
      function Fv(a, i, f) {
        i.length ? i = sn(i, function(M) {
          return dt(M) ? function(j) {
            return si(j, M.length === 1 ? M[0] : M);
          } : M;
        }) : i = [er];
        var v = -1;
        i = sn(i, fr(at()));
        var E = Rv(a, function(M, j, Y) {
          var X = sn(i, function(be) {
            return be(M);
          });
          return { criteria: X, index: ++v, value: M };
        });
        return dO(E, function(M, j) {
          return XS(M, j, f);
        });
      }
      function BS(a, i) {
        return $v(a, i, function(f, v) {
          return ip(a, v);
        });
      }
      function $v(a, i, f) {
        for (var v = -1, E = i.length, M = {}; ++v < E; ) {
          var j = i[v], Y = si(a, j);
          f(Y, j) && il(M, _o(j, a), Y);
        }
        return M;
      }
      function jS(a) {
        return function(i) {
          return si(i, a);
        };
      }
      function Af(a, i, f, v) {
        var E = v ? uO : Hi, M = -1, j = i.length, Y = a;
        for (a === i && (i = Xn(i)), f && (Y = sn(a, fr(f))); ++M < j; )
          for (var X = 0, be = i[M], _e = f ? f(be) : be; (X = E(Y, _e, X, v)) > -1; )
            Y !== a && Hc.call(Y, X, 1), Hc.call(a, X, 1);
        return a;
      }
      function Bv(a, i) {
        for (var f = a ? i.length : 0, v = f - 1; f--; ) {
          var E = i[f];
          if (f == v || E !== M) {
            var M = E;
            La(E) ? Hc.call(a, E, 1) : Lf(a, E);
          }
        }
        return a;
      }
      function Rf(a, i) {
        return a + Vc(bv() * (i - a + 1));
      }
      function WS(a, i, f, v) {
        for (var E = -1, M = _n(qc((i - a) / (f || 1)), 0), j = ie(M); M--; )
          j[v ? M : ++E] = a, a += f;
        return j;
      }
      function Mf(a, i) {
        var f = "";
        if (!a || i < 1 || i > me)
          return f;
        do
          i % 2 && (f += a), i = Vc(i / 2), i && (a += a);
        while (i);
        return f;
      }
      function vt(a, i) {
        return Xf(my(a, i, er), a + "");
      }
      function US(a) {
        return Ev(ns(a));
      }
      function zS(a, i) {
        var f = ns(a);
        return uu(f, ii(i, 0, f.length));
      }
      function il(a, i, f, v) {
        if (!dn(a))
          return a;
        i = _o(i, a);
        for (var E = -1, M = i.length, j = M - 1, Y = a; Y != null && ++E < M; ) {
          var X = Vr(i[E]), be = f;
          if (X === "__proto__" || X === "constructor" || X === "prototype")
            return a;
          if (E != j) {
            var _e = Y[X];
            be = v ? v(_e, X, Y) : n, be === n && (be = dn(_e) ? _e : La(i[E + 1]) ? [] : {});
          }
          nl(Y, X, be), Y = Y[X];
        }
        return a;
      }
      var jv = Gc ? function(a, i) {
        return Gc.set(a, i), a;
      } : er, HS = Yc ? function(a, i) {
        return Yc(a, "toString", {
          configurable: !0,
          enumerable: !1,
          value: lp(i),
          writable: !0
        });
      } : er;
      function YS(a) {
        return uu(ns(a));
      }
      function kr(a, i, f) {
        var v = -1, E = a.length;
        i < 0 && (i = -i > E ? 0 : E + i), f = f > E ? E : f, f < 0 && (f += E), E = i > f ? 0 : f - i >>> 0, i >>>= 0;
        for (var M = ie(E); ++v < E; )
          M[v] = a[v + i];
        return M;
      }
      function qS(a, i) {
        var f;
        return yo(a, function(v, E, M) {
          return f = i(v, E, M), !f;
        }), !!f;
      }
      function tu(a, i, f) {
        var v = 0, E = a == null ? v : a.length;
        if (typeof i == "number" && i === i && E <= Se) {
          for (; v < E; ) {
            var M = v + E >>> 1, j = a[M];
            j !== null && !hr(j) && (f ? j <= i : j < i) ? v = M + 1 : E = M;
          }
          return E;
        }
        return Df(a, i, er, f);
      }
      function Df(a, i, f, v) {
        var E = 0, M = a == null ? 0 : a.length;
        if (M === 0)
          return 0;
        i = f(i);
        for (var j = i !== i, Y = i === null, X = hr(i), be = i === n; E < M; ) {
          var _e = Vc((E + M) / 2), Oe = f(a[_e]), je = Oe !== n, Xe = Oe === null, ot = Oe === Oe, gt = hr(Oe);
          if (j)
            var rt = v || ot;
          else be ? rt = ot && (v || je) : Y ? rt = ot && je && (v || !Xe) : X ? rt = ot && je && !Xe && (v || !gt) : Xe || gt ? rt = !1 : rt = v ? Oe <= i : Oe < i;
          rt ? E = _e + 1 : M = _e;
        }
        return Rn(M, ye);
      }
      function Wv(a, i) {
        for (var f = -1, v = a.length, E = 0, M = []; ++f < v; ) {
          var j = a[f], Y = i ? i(j) : j;
          if (!f || !Gr(Y, X)) {
            var X = Y;
            M[E++] = j === 0 ? 0 : j;
          }
        }
        return M;
      }
      function Uv(a) {
        return typeof a == "number" ? a : hr(a) ? re : +a;
      }
      function pr(a) {
        if (typeof a == "string")
          return a;
        if (dt(a))
          return sn(a, pr) + "";
        if (hr(a))
          return _v ? _v.call(a) : "";
        var i = a + "";
        return i == "0" && 1 / a == -se ? "-0" : i;
      }
      function bo(a, i, f) {
        var v = -1, E = Mc, M = a.length, j = !0, Y = [], X = Y;
        if (f)
          j = !1, E = uf;
        else if (M >= o) {
          var be = i ? null : rT(a);
          if (be)
            return Lc(be);
          j = !1, E = Zs, X = new oi();
        } else
          X = i ? [] : Y;
        e:
          for (; ++v < M; ) {
            var _e = a[v], Oe = i ? i(_e) : _e;
            if (_e = f || _e !== 0 ? _e : 0, j && Oe === Oe) {
              for (var je = X.length; je--; )
                if (X[je] === Oe)
                  continue e;
              i && X.push(Oe), Y.push(_e);
            } else E(X, Oe, f) || (X !== Y && X.push(Oe), Y.push(_e));
          }
        return Y;
      }
      function Lf(a, i) {
        i = _o(i, a);
        var f = -1, v = i.length;
        if (!v)
          return !0;
        for (; ++f < v; ) {
          var E = Vr(i[f]);
          if (E === "__proto__" && !$t.call(a, "__proto__") || (E === "constructor" || E === "prototype") && f < v - 1)
            return !1;
        }
        var M = gy(a, i);
        return M == null || delete M[Vr(Nr(i))];
      }
      function zv(a, i, f, v) {
        return il(a, i, f(si(a, i)), v);
      }
      function nu(a, i, f, v) {
        for (var E = a.length, M = v ? E : -1; (v ? M-- : ++M < E) && i(a[M], M, a); )
          ;
        return f ? kr(a, v ? 0 : M, v ? M + 1 : E) : kr(a, v ? M + 1 : 0, v ? E : M);
      }
      function Hv(a, i) {
        var f = a;
        return f instanceof Ct && (f = f.value()), df(i, function(v, E) {
          return E.func.apply(E.thisArg, mo([v], E.args));
        }, f);
      }
      function Ff(a, i, f) {
        var v = a.length;
        if (v < 2)
          return v ? bo(a[0]) : [];
        for (var E = -1, M = ie(v); ++E < v; )
          for (var j = a[E], Y = -1; ++Y < v; )
            Y != E && (M[E] = rl(M[E] || j, a[Y], i, f));
        return bo(In(M, 1), i, f);
      }
      function Yv(a, i, f) {
        for (var v = -1, E = a.length, M = i.length, j = {}; ++v < E; ) {
          var Y = v < M ? i[v] : n;
          f(j, a[v], Y);
        }
        return j;
      }
      function $f(a) {
        return hn(a) ? a : [];
      }
      function Bf(a) {
        return typeof a == "function" ? a : er;
      }
      function _o(a, i) {
        return dt(a) ? a : Gf(a, i) ? [a] : _y(Bt(a));
      }
      var VS = vt;
      function wo(a, i, f) {
        var v = a.length;
        return f = f === n ? v : f, !i && f >= v ? a : kr(a, i, f);
      }
      var qv = MO || function(a) {
        return Nn.clearTimeout(a);
      };
      function Vv(a, i) {
        if (i)
          return a.slice();
        var f = a.length, v = hv ? hv(f) : new a.constructor(f);
        return a.copy(v), v;
      }
      function jf(a) {
        var i = new a.constructor(a.byteLength);
        return new Uc(i).set(new Uc(a)), i;
      }
      function GS(a, i) {
        var f = i ? jf(a.buffer) : a.buffer;
        return new a.constructor(f, a.byteOffset, a.byteLength);
      }
      function KS(a) {
        var i = new a.constructor(a.source, Ng.exec(a));
        return i.lastIndex = a.lastIndex, i;
      }
      function ZS(a) {
        return tl ? Kt(tl.call(a)) : {};
      }
      function Gv(a, i) {
        var f = i ? jf(a.buffer) : a.buffer;
        return new a.constructor(f, a.byteOffset, a.length);
      }
      function Kv(a, i) {
        if (a !== i) {
          var f = a !== n, v = a === null, E = a === a, M = hr(a), j = i !== n, Y = i === null, X = i === i, be = hr(i);
          if (!Y && !be && !M && a > i || M && j && X && !Y && !be || v && j && X || !f && X || !E)
            return 1;
          if (!v && !M && !be && a < i || be && f && E && !v && !M || Y && f && E || !j && E || !X)
            return -1;
        }
        return 0;
      }
      function XS(a, i, f) {
        for (var v = -1, E = a.criteria, M = i.criteria, j = E.length, Y = f.length; ++v < j; ) {
          var X = Kv(E[v], M[v]);
          if (X) {
            if (v >= Y)
              return X;
            var be = f[v];
            return X * (be == "desc" ? -1 : 1);
          }
        }
        return a.index - i.index;
      }
      function Zv(a, i, f, v) {
        for (var E = -1, M = a.length, j = f.length, Y = -1, X = i.length, be = _n(M - j, 0), _e = ie(X + be), Oe = !v; ++Y < X; )
          _e[Y] = i[Y];
        for (; ++E < j; )
          (Oe || E < M) && (_e[f[E]] = a[E]);
        for (; be--; )
          _e[Y++] = a[E++];
        return _e;
      }
      function Xv(a, i, f, v) {
        for (var E = -1, M = a.length, j = -1, Y = f.length, X = -1, be = i.length, _e = _n(M - Y, 0), Oe = ie(_e + be), je = !v; ++E < _e; )
          Oe[E] = a[E];
        for (var Xe = E; ++X < be; )
          Oe[Xe + X] = i[X];
        for (; ++j < Y; )
          (je || E < M) && (Oe[Xe + f[j]] = a[E++]);
        return Oe;
      }
      function Xn(a, i) {
        var f = -1, v = a.length;
        for (i || (i = ie(v)); ++f < v; )
          i[f] = a[f];
        return i;
      }
      function da(a, i, f, v) {
        var E = !f;
        f || (f = {});
        for (var M = -1, j = i.length; ++M < j; ) {
          var Y = i[M], X = v ? v(f[Y], a[Y], Y, f, a) : n;
          X === n && (X = a[Y]), E ? ca(f, Y, X) : nl(f, Y, X);
        }
        return f;
      }
      function QS(a, i) {
        return da(a, Vf(a), i);
      }
      function JS(a, i) {
        return da(a, uy(a), i);
      }
      function ru(a, i) {
        return function(f, v) {
          var E = dt(f) ? aO : wS, M = i ? i() : {};
          return E(f, a, at(v, 2), M);
        };
      }
      function Qi(a) {
        return vt(function(i, f) {
          var v = -1, E = f.length, M = E > 1 ? f[E - 1] : n, j = E > 2 ? f[2] : n;
          for (M = a.length > 3 && typeof M == "function" ? (E--, M) : n, j && Wn(f[0], f[1], j) && (M = E < 3 ? n : M, E = 1), i = Kt(i); ++v < E; ) {
            var Y = f[v];
            Y && a(i, Y, v, M);
          }
          return i;
        });
      }
      function Qv(a, i) {
        return function(f, v) {
          if (f == null)
            return f;
          if (!Qn(f))
            return a(f, v);
          for (var E = f.length, M = i ? E : -1, j = Kt(f); (i ? M-- : ++M < E) && v(j[M], M, j) !== !1; )
            ;
          return f;
        };
      }
      function Jv(a) {
        return function(i, f, v) {
          for (var E = -1, M = Kt(i), j = v(i), Y = j.length; Y--; ) {
            var X = j[a ? Y : ++E];
            if (f(M[X], X, M) === !1)
              break;
          }
          return i;
        };
      }
      function eT(a, i, f) {
        var v = i & N, E = sl(a);
        function M() {
          var j = this && this !== Nn && this instanceof M ? E : a;
          return j.apply(v ? f : this, arguments);
        }
        return M;
      }
      function ey(a) {
        return function(i) {
          i = Bt(i);
          var f = Yi(i) ? Yr(i) : n, v = f ? f[0] : i.charAt(0), E = f ? wo(f, 1).join("") : i.slice(1);
          return v[a]() + E;
        };
      }
      function Ji(a) {
        return function(i) {
          return df(Jy(Qy(i).replace(HC, "")), a, "");
        };
      }
      function sl(a) {
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
          var f = Xi(a.prototype), v = a.apply(f, i);
          return dn(v) ? v : f;
        };
      }
      function tT(a, i, f) {
        var v = sl(a);
        function E() {
          for (var M = arguments.length, j = ie(M), Y = M, X = es(E); Y--; )
            j[Y] = arguments[Y];
          var be = M < 3 && j[0] !== X && j[M - 1] !== X ? [] : go(j, X);
          if (M -= be.length, M < f)
            return oy(
              a,
              i,
              au,
              E.placeholder,
              n,
              j,
              be,
              n,
              n,
              f - M
            );
          var _e = this && this !== Nn && this instanceof E ? v : a;
          return ur(_e, this, j);
        }
        return E;
      }
      function ty(a) {
        return function(i, f, v) {
          var E = Kt(i);
          if (!Qn(i)) {
            var M = at(f, 3);
            i = On(i), f = function(Y) {
              return M(E[Y], Y, E);
            };
          }
          var j = a(i, f, v);
          return j > -1 ? E[M ? i[j] : j] : n;
        };
      }
      function ny(a) {
        return Da(function(i) {
          var f = i.length, v = f, E = Tr.prototype.thru;
          for (a && i.reverse(); v--; ) {
            var M = i[v];
            if (typeof M != "function")
              throw new Sr(u);
            if (E && !j && lu(M) == "wrapper")
              var j = new Tr([], !0);
          }
          for (v = j ? v : f; ++v < f; ) {
            M = i[v];
            var Y = lu(M), X = Y == "wrapper" ? Yf(M) : n;
            X && Kf(X[0]) && X[1] == (T | I | S | R) && !X[4].length && X[9] == 1 ? j = j[lu(X[0])].apply(j, X[3]) : j = M.length == 1 && Kf(M) ? j[Y]() : j.thru(M);
          }
          return function() {
            var be = arguments, _e = be[0];
            if (j && be.length == 1 && dt(_e))
              return j.plant(_e).value();
            for (var Oe = 0, je = f ? i[Oe].apply(this, be) : _e; ++Oe < f; )
              je = i[Oe].call(this, je);
            return je;
          };
        });
      }
      function au(a, i, f, v, E, M, j, Y, X, be) {
        var _e = i & T, Oe = i & N, je = i & F, Xe = i & (I | O), ot = i & B, gt = je ? n : sl(a);
        function rt() {
          for (var wt = arguments.length, Pt = ie(wt), mr = wt; mr--; )
            Pt[mr] = arguments[mr];
          if (Xe)
            var Un = es(rt), gr = pO(Pt, Un);
          if (v && (Pt = Zv(Pt, v, E, Xe)), M && (Pt = Xv(Pt, M, j, Xe)), wt -= gr, Xe && wt < be) {
            var mn = go(Pt, Un);
            return oy(
              a,
              i,
              au,
              rt.placeholder,
              f,
              Pt,
              mn,
              Y,
              X,
              be - wt
            );
          }
          var Kr = Oe ? f : this, Ba = je ? Kr[a] : a;
          return wt = Pt.length, Y ? Pt = wT(Pt, Y) : ot && wt > 1 && Pt.reverse(), _e && X < wt && (Pt.length = X), this && this !== Nn && this instanceof rt && (Ba = gt || sl(Ba)), Ba.apply(Kr, Pt);
        }
        return rt;
      }
      function ry(a, i) {
        return function(f, v) {
          return kS(f, a, i(v), {});
        };
      }
      function ou(a, i) {
        return function(f, v) {
          var E;
          if (f === n && v === n)
            return i;
          if (f !== n && (E = f), v !== n) {
            if (E === n)
              return v;
            typeof f == "string" || typeof v == "string" ? (f = pr(f), v = pr(v)) : (f = Uv(f), v = Uv(v)), E = a(f, v);
          }
          return E;
        };
      }
      function Wf(a) {
        return Da(function(i) {
          return i = sn(i, fr(at())), vt(function(f) {
            var v = this;
            return a(i, function(E) {
              return ur(E, v, f);
            });
          });
        });
      }
      function iu(a, i) {
        i = i === n ? " " : pr(i);
        var f = i.length;
        if (f < 2)
          return f ? Mf(i, a) : i;
        var v = Mf(i, qc(a / qi(i)));
        return Yi(i) ? wo(Yr(v), 0, a).join("") : v.slice(0, a);
      }
      function nT(a, i, f, v) {
        var E = i & N, M = sl(a);
        function j() {
          for (var Y = -1, X = arguments.length, be = -1, _e = v.length, Oe = ie(_e + X), je = this && this !== Nn && this instanceof j ? M : a; ++be < _e; )
            Oe[be] = v[be];
          for (; X--; )
            Oe[be++] = arguments[++Y];
          return ur(je, E ? f : this, Oe);
        }
        return j;
      }
      function ay(a) {
        return function(i, f, v) {
          return v && typeof v != "number" && Wn(i, f, v) && (f = v = n), i = $a(i), f === n ? (f = i, i = 0) : f = $a(f), v = v === n ? i < f ? 1 : -1 : $a(v), WS(i, f, v, a);
        };
      }
      function su(a) {
        return function(i, f) {
          return typeof i == "string" && typeof f == "string" || (i = Ir(i), f = Ir(f)), a(i, f);
        };
      }
      function oy(a, i, f, v, E, M, j, Y, X, be) {
        var _e = i & I, Oe = _e ? j : n, je = _e ? n : j, Xe = _e ? M : n, ot = _e ? n : M;
        i |= _e ? S : C, i &= ~(_e ? C : S), i & x || (i &= -4);
        var gt = [
          a,
          i,
          E,
          Xe,
          Oe,
          ot,
          je,
          Y,
          X,
          be
        ], rt = f.apply(n, gt);
        return Kf(a) && vy(rt, gt), rt.placeholder = v, yy(rt, a, i);
      }
      function Uf(a) {
        var i = bn[a];
        return function(f, v) {
          if (f = Ir(f), v = v == null ? 0 : Rn(ht(v), 292), v && yv(f)) {
            var E = (Bt(f) + "e").split("e"), M = i(E[0] + "e" + (+E[1] + v));
            return E = (Bt(M) + "e").split("e"), +(E[0] + "e" + (+E[1] - v));
          }
          return i(f);
        };
      }
      var rT = Ki && 1 / Lc(new Ki([, -0]))[1] == se ? function(a) {
        return new Ki(a);
      } : dp;
      function iy(a) {
        return function(i) {
          var f = Mn(i);
          return f == le ? yf(i) : f == we ? _O(i) : fO(i, a(i));
        };
      }
      function Ma(a, i, f, v, E, M, j, Y) {
        var X = i & F;
        if (!X && typeof a != "function")
          throw new Sr(u);
        var be = v ? v.length : 0;
        if (be || (i &= -97, v = E = n), j = j === n ? j : _n(ht(j), 0), Y = Y === n ? Y : ht(Y), be -= E ? E.length : 0, i & C) {
          var _e = v, Oe = E;
          v = E = n;
        }
        var je = X ? n : Yf(a), Xe = [
          a,
          i,
          f,
          v,
          E,
          _e,
          Oe,
          M,
          j,
          Y
        ];
        if (je && yT(Xe, je), a = Xe[0], i = Xe[1], f = Xe[2], v = Xe[3], E = Xe[4], Y = Xe[9] = Xe[9] === n ? X ? 0 : a.length : _n(Xe[9] - be, 0), !Y && i & (I | O) && (i &= -25), !i || i == N)
          var ot = eT(a, i, f);
        else i == I || i == O ? ot = tT(a, i, Y) : (i == S || i == (N | S)) && !E.length ? ot = nT(a, i, f, v) : ot = au.apply(n, Xe);
        var gt = je ? jv : vy;
        return yy(gt(ot, Xe), a, i);
      }
      function sy(a, i, f, v) {
        return a === n || Gr(a, Gi[f]) && !$t.call(v, f) ? i : a;
      }
      function ly(a, i, f, v, E, M) {
        return dn(a) && dn(i) && (M.set(i, a), eu(a, i, n, ly, M), M.delete(i)), a;
      }
      function aT(a) {
        return ul(a) ? n : a;
      }
      function cy(a, i, f, v, E, M) {
        var j = f & _, Y = a.length, X = i.length;
        if (Y != X && !(j && X > Y))
          return !1;
        var be = M.get(a), _e = M.get(i);
        if (be && _e)
          return be == i && _e == a;
        var Oe = -1, je = !0, Xe = f & w ? new oi() : n;
        for (M.set(a, i), M.set(i, a); ++Oe < Y; ) {
          var ot = a[Oe], gt = i[Oe];
          if (v)
            var rt = j ? v(gt, ot, Oe, i, a, M) : v(ot, gt, Oe, a, i, M);
          if (rt !== n) {
            if (rt)
              continue;
            je = !1;
            break;
          }
          if (Xe) {
            if (!ff(i, function(wt, Pt) {
              if (!Zs(Xe, Pt) && (ot === wt || E(ot, wt, f, v, M)))
                return Xe.push(Pt);
            })) {
              je = !1;
              break;
            }
          } else if (!(ot === gt || E(ot, gt, f, v, M))) {
            je = !1;
            break;
          }
        }
        return M.delete(a), M.delete(i), je;
      }
      function oT(a, i, f, v, E, M, j) {
        switch (f) {
          case Ge:
            if (a.byteLength != i.byteLength || a.byteOffset != i.byteOffset)
              return !1;
            a = a.buffer, i = i.buffer;
          case Ze:
            return !(a.byteLength != i.byteLength || !M(new Uc(a), new Uc(i)));
          case W:
          case H:
          case Ne:
            return Gr(+a, +i);
          case D:
            return a.name == i.name && a.message == i.message;
          case ee:
          case Te:
            return a == i + "";
          case le:
            var Y = yf;
          case we:
            var X = v & _;
            if (Y || (Y = Lc), a.size != i.size && !X)
              return !1;
            var be = j.get(a);
            if (be)
              return be == i;
            v |= w, j.set(a, i);
            var _e = cy(Y(a), Y(i), v, E, M, j);
            return j.delete(a), _e;
          case Re:
            if (tl)
              return tl.call(a) == tl.call(i);
        }
        return !1;
      }
      function iT(a, i, f, v, E, M) {
        var j = f & _, Y = zf(a), X = Y.length, be = zf(i), _e = be.length;
        if (X != _e && !j)
          return !1;
        for (var Oe = X; Oe--; ) {
          var je = Y[Oe];
          if (!(j ? je in i : $t.call(i, je)))
            return !1;
        }
        var Xe = M.get(a), ot = M.get(i);
        if (Xe && ot)
          return Xe == i && ot == a;
        var gt = !0;
        M.set(a, i), M.set(i, a);
        for (var rt = j; ++Oe < X; ) {
          je = Y[Oe];
          var wt = a[je], Pt = i[je];
          if (v)
            var mr = j ? v(Pt, wt, je, i, a, M) : v(wt, Pt, je, a, i, M);
          if (!(mr === n ? wt === Pt || E(wt, Pt, f, v, M) : mr)) {
            gt = !1;
            break;
          }
          rt || (rt = je == "constructor");
        }
        if (gt && !rt) {
          var Un = a.constructor, gr = i.constructor;
          Un != gr && "constructor" in a && "constructor" in i && !(typeof Un == "function" && Un instanceof Un && typeof gr == "function" && gr instanceof gr) && (gt = !1);
        }
        return M.delete(a), M.delete(i), gt;
      }
      function Da(a) {
        return Xf(my(a, n, Cy), a + "");
      }
      function zf(a) {
        return kv(a, On, Vf);
      }
      function Hf(a) {
        return kv(a, Jn, uy);
      }
      var Yf = Gc ? function(a) {
        return Gc.get(a);
      } : dp;
      function lu(a) {
        for (var i = a.name + "", f = Zi[i], v = $t.call(Zi, i) ? f.length : 0; v--; ) {
          var E = f[v], M = E.func;
          if (M == null || M == a)
            return E.name;
        }
        return i;
      }
      function es(a) {
        var i = $t.call(k, "placeholder") ? k : a;
        return i.placeholder;
      }
      function at() {
        var a = k.iteratee || cp;
        return a = a === cp ? Av : a, arguments.length ? a(arguments[0], arguments[1]) : a;
      }
      function cu(a, i) {
        var f = a.__data__;
        return hT(i) ? f[typeof i == "string" ? "string" : "hash"] : f.map;
      }
      function qf(a) {
        for (var i = On(a), f = i.length; f--; ) {
          var v = i[f], E = a[v];
          i[f] = [v, E, py(E)];
        }
        return i;
      }
      function li(a, i) {
        var f = vO(a, i);
        return Iv(f) ? f : n;
      }
      function sT(a) {
        var i = $t.call(a, ri), f = a[ri];
        try {
          a[ri] = n;
          var v = !0;
        } catch {
        }
        var E = jc.call(a);
        return v && (i ? a[ri] = f : delete a[ri]), E;
      }
      var Vf = _f ? function(a) {
        return a == null ? [] : (a = Kt(a), ho(_f(a), function(i) {
          return gv.call(a, i);
        }));
      } : fp, uy = _f ? function(a) {
        for (var i = []; a; )
          mo(i, Vf(a)), a = zc(a);
        return i;
      } : fp, Mn = jn;
      (wf && Mn(new wf(new ArrayBuffer(1))) != Ge || Qs && Mn(new Qs()) != le || Ef && Mn(Ef.resolve()) != ue || Ki && Mn(new Ki()) != we || Js && Mn(new Js()) != Fe) && (Mn = function(a) {
        var i = jn(a), f = i == xe ? a.constructor : n, v = f ? ci(f) : "";
        if (v)
          switch (v) {
            case zO:
              return Ge;
            case HO:
              return le;
            case YO:
              return ue;
            case qO:
              return we;
            case VO:
              return Fe;
          }
        return i;
      });
      function lT(a, i, f) {
        for (var v = -1, E = f.length; ++v < E; ) {
          var M = f[v], j = M.size;
          switch (M.type) {
            case "drop":
              a += j;
              break;
            case "dropRight":
              i -= j;
              break;
            case "take":
              i = Rn(i, a + j);
              break;
            case "takeRight":
              a = _n(a, i - j);
              break;
          }
        }
        return { start: a, end: i };
      }
      function cT(a) {
        var i = a.match(gC);
        return i ? i[1].split(vC) : [];
      }
      function dy(a, i, f) {
        i = _o(i, a);
        for (var v = -1, E = i.length, M = !1; ++v < E; ) {
          var j = Vr(i[v]);
          if (!(M = a != null && f(a, j)))
            break;
          a = a[j];
        }
        return M || ++v != E ? M : (E = a == null ? 0 : a.length, !!E && gu(E) && La(j, E) && (dt(a) || ui(a)));
      }
      function uT(a) {
        var i = a.length, f = new a.constructor(i);
        return i && typeof a[0] == "string" && $t.call(a, "index") && (f.index = a.index, f.input = a.input), f;
      }
      function fy(a) {
        return typeof a.constructor == "function" && !ll(a) ? Xi(zc(a)) : {};
      }
      function dT(a, i, f) {
        var v = a.constructor;
        switch (i) {
          case Ze:
            return jf(a);
          case W:
          case H:
            return new v(+a);
          case Ge:
            return GS(a, f);
          case Ve:
          case Tt:
          case ve:
          case It:
          case At:
          case pt:
          case nt:
          case Gt:
          case Ue:
            return Gv(a, f);
          case le:
            return new v();
          case Ne:
          case Te:
            return new v(a);
          case ee:
            return KS(a);
          case we:
            return new v();
          case Re:
            return ZS(a);
        }
      }
      function fT(a, i) {
        var f = i.length;
        if (!f)
          return a;
        var v = f - 1;
        return i[v] = (f > 1 ? "& " : "") + i[v], i = i.join(f > 2 ? ", " : " "), a.replace(mC, `{
/* [wrapped with ` + i + `] */
`);
      }
      function pT(a) {
        return dt(a) || ui(a) || !!(vv && a && a[vv]);
      }
      function La(a, i) {
        var f = typeof a;
        return i = i ?? me, !!i && (f == "number" || f != "symbol" && OC.test(a)) && a > -1 && a % 1 == 0 && a < i;
      }
      function Wn(a, i, f) {
        if (!dn(f))
          return !1;
        var v = typeof i;
        return (v == "number" ? Qn(f) && La(i, f.length) : v == "string" && i in f) ? Gr(f[i], a) : !1;
      }
      function Gf(a, i) {
        if (dt(a))
          return !1;
        var f = typeof a;
        return f == "number" || f == "symbol" || f == "boolean" || a == null || hr(a) ? !0 : dC.test(a) || !uC.test(a) || i != null && a in Kt(i);
      }
      function hT(a) {
        var i = typeof a;
        return i == "string" || i == "number" || i == "symbol" || i == "boolean" ? a !== "__proto__" : a === null;
      }
      function Kf(a) {
        var i = lu(a), f = k[i];
        if (typeof f != "function" || !(i in Ct.prototype))
          return !1;
        if (a === f)
          return !0;
        var v = Yf(f);
        return !!v && a === v[0];
      }
      function mT(a) {
        return !!pv && pv in a;
      }
      var gT = $c ? Fa : pp;
      function ll(a) {
        var i = a && a.constructor, f = typeof i == "function" && i.prototype || Gi;
        return a === f;
      }
      function py(a) {
        return a === a && !dn(a);
      }
      function hy(a, i) {
        return function(f) {
          return f == null ? !1 : f[a] === i && (i !== n || a in Kt(f));
        };
      }
      function vT(a) {
        var i = hu(a, function(v) {
          return f.size === h && f.clear(), v;
        }), f = i.cache;
        return i;
      }
      function yT(a, i) {
        var f = a[1], v = i[1], E = f | v, M = E < (N | F | T), j = v == T && f == I || v == T && f == R && a[7].length <= i[8] || v == (T | R) && i[7].length <= i[8] && f == I;
        if (!(M || j))
          return a;
        v & N && (a[2] = i[2], E |= f & N ? 0 : x);
        var Y = i[3];
        if (Y) {
          var X = a[3];
          a[3] = X ? Zv(X, Y, i[4]) : Y, a[4] = X ? go(a[3], m) : i[4];
        }
        return Y = i[5], Y && (X = a[5], a[5] = X ? Xv(X, Y, i[6]) : Y, a[6] = X ? go(a[5], m) : i[6]), Y = i[7], Y && (a[7] = Y), v & T && (a[8] = a[8] == null ? i[8] : Rn(a[8], i[8])), a[9] == null && (a[9] = i[9]), a[0] = i[0], a[1] = E, a;
      }
      function bT(a) {
        var i = [];
        if (a != null)
          for (var f in Kt(a))
            i.push(f);
        return i;
      }
      function _T(a) {
        return jc.call(a);
      }
      function my(a, i, f) {
        return i = _n(i === n ? a.length - 1 : i, 0), function() {
          for (var v = arguments, E = -1, M = _n(v.length - i, 0), j = ie(M); ++E < M; )
            j[E] = v[i + E];
          E = -1;
          for (var Y = ie(i + 1); ++E < i; )
            Y[E] = v[E];
          return Y[i] = f(j), ur(a, this, Y);
        };
      }
      function gy(a, i) {
        return i.length < 2 ? a : si(a, kr(i, 0, -1));
      }
      function wT(a, i) {
        for (var f = a.length, v = Rn(i.length, f), E = Xn(a); v--; ) {
          var M = i[v];
          a[v] = La(M, f) ? E[M] : n;
        }
        return a;
      }
      function Zf(a, i) {
        if (!(i === "constructor" && typeof a[i] == "function") && i != "__proto__")
          return a[i];
      }
      var vy = by(jv), cl = LO || function(a, i) {
        return Nn.setTimeout(a, i);
      }, Xf = by(HS);
      function yy(a, i, f) {
        var v = i + "";
        return Xf(a, fT(v, ET(cT(v), f)));
      }
      function by(a) {
        var i = 0, f = 0;
        return function() {
          var v = jO(), E = ne - (v - f);
          if (f = v, E > 0) {
            if (++i >= z)
              return arguments[0];
          } else
            i = 0;
          return a.apply(n, arguments);
        };
      }
      function uu(a, i) {
        var f = -1, v = a.length, E = v - 1;
        for (i = i === n ? v : i; ++f < i; ) {
          var M = Rf(f, E), j = a[M];
          a[M] = a[f], a[f] = j;
        }
        return a.length = i, a;
      }
      var _y = vT(function(a) {
        var i = [];
        return a.charCodeAt(0) === 46 && i.push(""), a.replace(fC, function(f, v, E, M) {
          i.push(E ? M.replace(bC, "$1") : v || f);
        }), i;
      });
      function Vr(a) {
        if (typeof a == "string" || hr(a))
          return a;
        var i = a + "";
        return i == "0" && 1 / a == -se ? "-0" : i;
      }
      function ci(a) {
        if (a != null) {
          try {
            return Bc.call(a);
          } catch {
          }
          try {
            return a + "";
          } catch {
          }
        }
        return "";
      }
      function ET(a, i) {
        return dr(Ce, function(f) {
          var v = "_." + f[0];
          i & f[1] && !Mc(a, v) && a.push(v);
        }), a.sort();
      }
      function wy(a) {
        if (a instanceof Ct)
          return a.clone();
        var i = new Tr(a.__wrapped__, a.__chain__);
        return i.__actions__ = Xn(a.__actions__), i.__index__ = a.__index__, i.__values__ = a.__values__, i;
      }
      function xT(a, i, f) {
        (f ? Wn(a, i, f) : i === n) ? i = 1 : i = _n(ht(i), 0);
        var v = a == null ? 0 : a.length;
        if (!v || i < 1)
          return [];
        for (var E = 0, M = 0, j = ie(qc(v / i)); E < v; )
          j[M++] = kr(a, E, E += i);
        return j;
      }
      function CT(a) {
        for (var i = -1, f = a == null ? 0 : a.length, v = 0, E = []; ++i < f; ) {
          var M = a[i];
          M && (E[v++] = M);
        }
        return E;
      }
      function OT() {
        var a = arguments.length;
        if (!a)
          return [];
        for (var i = ie(a - 1), f = arguments[0], v = a; v--; )
          i[v - 1] = arguments[v];
        return mo(dt(f) ? Xn(f) : [f], In(i, 1));
      }
      var ST = vt(function(a, i) {
        return hn(a) ? rl(a, In(i, 1, hn, !0)) : [];
      }), TT = vt(function(a, i) {
        var f = Nr(i);
        return hn(f) && (f = n), hn(a) ? rl(a, In(i, 1, hn, !0), at(f, 2)) : [];
      }), PT = vt(function(a, i) {
        var f = Nr(i);
        return hn(f) && (f = n), hn(a) ? rl(a, In(i, 1, hn, !0), n, f) : [];
      });
      function kT(a, i, f) {
        var v = a == null ? 0 : a.length;
        return v ? (i = f || i === n ? 1 : ht(i), kr(a, i < 0 ? 0 : i, v)) : [];
      }
      function NT(a, i, f) {
        var v = a == null ? 0 : a.length;
        return v ? (i = f || i === n ? 1 : ht(i), i = v - i, kr(a, 0, i < 0 ? 0 : i)) : [];
      }
      function IT(a, i) {
        return a && a.length ? nu(a, at(i, 3), !0, !0) : [];
      }
      function AT(a, i) {
        return a && a.length ? nu(a, at(i, 3), !0) : [];
      }
      function RT(a, i, f, v) {
        var E = a == null ? 0 : a.length;
        return E ? (f && typeof f != "number" && Wn(a, i, f) && (f = 0, v = E), OS(a, i, f, v)) : [];
      }
      function Ey(a, i, f) {
        var v = a == null ? 0 : a.length;
        if (!v)
          return -1;
        var E = f == null ? 0 : ht(f);
        return E < 0 && (E = _n(v + E, 0)), Dc(a, at(i, 3), E);
      }
      function xy(a, i, f) {
        var v = a == null ? 0 : a.length;
        if (!v)
          return -1;
        var E = v - 1;
        return f !== n && (E = ht(f), E = f < 0 ? _n(v + E, 0) : Rn(E, v - 1)), Dc(a, at(i, 3), E, !0);
      }
      function Cy(a) {
        var i = a == null ? 0 : a.length;
        return i ? In(a, 1) : [];
      }
      function MT(a) {
        var i = a == null ? 0 : a.length;
        return i ? In(a, se) : [];
      }
      function DT(a, i) {
        var f = a == null ? 0 : a.length;
        return f ? (i = i === n ? 1 : ht(i), In(a, i)) : [];
      }
      function LT(a) {
        for (var i = -1, f = a == null ? 0 : a.length, v = {}; ++i < f; ) {
          var E = a[i];
          ca(v, E[0], E[1]);
        }
        return v;
      }
      function Oy(a) {
        return a && a.length ? a[0] : n;
      }
      function FT(a, i, f) {
        var v = a == null ? 0 : a.length;
        if (!v)
          return -1;
        var E = f == null ? 0 : ht(f);
        return E < 0 && (E = _n(v + E, 0)), Hi(a, i, E);
      }
      function $T(a) {
        var i = a == null ? 0 : a.length;
        return i ? kr(a, 0, -1) : [];
      }
      var BT = vt(function(a) {
        var i = sn(a, $f);
        return i.length && i[0] === a[0] ? Pf(i) : [];
      }), jT = vt(function(a) {
        var i = Nr(a), f = sn(a, $f);
        return i === Nr(f) ? i = n : f.pop(), f.length && f[0] === a[0] ? Pf(f, at(i, 2)) : [];
      }), WT = vt(function(a) {
        var i = Nr(a), f = sn(a, $f);
        return i = typeof i == "function" ? i : n, i && f.pop(), f.length && f[0] === a[0] ? Pf(f, n, i) : [];
      });
      function UT(a, i) {
        return a == null ? "" : $O.call(a, i);
      }
      function Nr(a) {
        var i = a == null ? 0 : a.length;
        return i ? a[i - 1] : n;
      }
      function zT(a, i, f) {
        var v = a == null ? 0 : a.length;
        if (!v)
          return -1;
        var E = v;
        return f !== n && (E = ht(f), E = E < 0 ? _n(v + E, 0) : Rn(E, v - 1)), i === i ? EO(a, i, E) : Dc(a, ov, E, !0);
      }
      function HT(a, i) {
        return a && a.length ? Lv(a, ht(i)) : n;
      }
      var YT = vt(Sy);
      function Sy(a, i) {
        return a && a.length && i && i.length ? Af(a, i) : a;
      }
      function qT(a, i, f) {
        return a && a.length && i && i.length ? Af(a, i, at(f, 2)) : a;
      }
      function VT(a, i, f) {
        return a && a.length && i && i.length ? Af(a, i, n, f) : a;
      }
      var GT = Da(function(a, i) {
        var f = a == null ? 0 : a.length, v = Cf(a, i);
        return Bv(a, sn(i, function(E) {
          return La(E, f) ? +E : E;
        }).sort(Kv)), v;
      });
      function KT(a, i) {
        var f = [];
        if (!(a && a.length))
          return f;
        var v = -1, E = [], M = a.length;
        for (i = at(i, 3); ++v < M; ) {
          var j = a[v];
          i(j, v, a) && (f.push(j), E.push(v));
        }
        return Bv(a, E), f;
      }
      function Qf(a) {
        return a == null ? a : UO.call(a);
      }
      function ZT(a, i, f) {
        var v = a == null ? 0 : a.length;
        return v ? (f && typeof f != "number" && Wn(a, i, f) ? (i = 0, f = v) : (i = i == null ? 0 : ht(i), f = f === n ? v : ht(f)), kr(a, i, f)) : [];
      }
      function XT(a, i) {
        return tu(a, i);
      }
      function QT(a, i, f) {
        return Df(a, i, at(f, 2));
      }
      function JT(a, i) {
        var f = a == null ? 0 : a.length;
        if (f) {
          var v = tu(a, i);
          if (v < f && Gr(a[v], i))
            return v;
        }
        return -1;
      }
      function eP(a, i) {
        return tu(a, i, !0);
      }
      function tP(a, i, f) {
        return Df(a, i, at(f, 2), !0);
      }
      function nP(a, i) {
        var f = a == null ? 0 : a.length;
        if (f) {
          var v = tu(a, i, !0) - 1;
          if (Gr(a[v], i))
            return v;
        }
        return -1;
      }
      function rP(a) {
        return a && a.length ? Wv(a) : [];
      }
      function aP(a, i) {
        return a && a.length ? Wv(a, at(i, 2)) : [];
      }
      function oP(a) {
        var i = a == null ? 0 : a.length;
        return i ? kr(a, 1, i) : [];
      }
      function iP(a, i, f) {
        return a && a.length ? (i = f || i === n ? 1 : ht(i), kr(a, 0, i < 0 ? 0 : i)) : [];
      }
      function sP(a, i, f) {
        var v = a == null ? 0 : a.length;
        return v ? (i = f || i === n ? 1 : ht(i), i = v - i, kr(a, i < 0 ? 0 : i, v)) : [];
      }
      function lP(a, i) {
        return a && a.length ? nu(a, at(i, 3), !1, !0) : [];
      }
      function cP(a, i) {
        return a && a.length ? nu(a, at(i, 3)) : [];
      }
      var uP = vt(function(a) {
        return bo(In(a, 1, hn, !0));
      }), dP = vt(function(a) {
        var i = Nr(a);
        return hn(i) && (i = n), bo(In(a, 1, hn, !0), at(i, 2));
      }), fP = vt(function(a) {
        var i = Nr(a);
        return i = typeof i == "function" ? i : n, bo(In(a, 1, hn, !0), n, i);
      });
      function pP(a) {
        return a && a.length ? bo(a) : [];
      }
      function hP(a, i) {
        return a && a.length ? bo(a, at(i, 2)) : [];
      }
      function mP(a, i) {
        return i = typeof i == "function" ? i : n, a && a.length ? bo(a, n, i) : [];
      }
      function Jf(a) {
        if (!(a && a.length))
          return [];
        var i = 0;
        return a = ho(a, function(f) {
          if (hn(f))
            return i = _n(f.length, i), !0;
        }), gf(i, function(f) {
          return sn(a, pf(f));
        });
      }
      function Ty(a, i) {
        if (!(a && a.length))
          return [];
        var f = Jf(a);
        return i == null ? f : sn(f, function(v) {
          return ur(i, n, v);
        });
      }
      var gP = vt(function(a, i) {
        return hn(a) ? rl(a, i) : [];
      }), vP = vt(function(a) {
        return Ff(ho(a, hn));
      }), yP = vt(function(a) {
        var i = Nr(a);
        return hn(i) && (i = n), Ff(ho(a, hn), at(i, 2));
      }), bP = vt(function(a) {
        var i = Nr(a);
        return i = typeof i == "function" ? i : n, Ff(ho(a, hn), n, i);
      }), _P = vt(Jf);
      function wP(a, i) {
        return Yv(a || [], i || [], nl);
      }
      function EP(a, i) {
        return Yv(a || [], i || [], il);
      }
      var xP = vt(function(a) {
        var i = a.length, f = i > 1 ? a[i - 1] : n;
        return f = typeof f == "function" ? (a.pop(), f) : n, Ty(a, f);
      });
      function Py(a) {
        var i = k(a);
        return i.__chain__ = !0, i;
      }
      function CP(a, i) {
        return i(a), a;
      }
      function du(a, i) {
        return i(a);
      }
      var OP = Da(function(a) {
        var i = a.length, f = i ? a[0] : 0, v = this.__wrapped__, E = function(M) {
          return Cf(M, a);
        };
        return i > 1 || this.__actions__.length || !(v instanceof Ct) || !La(f) ? this.thru(E) : (v = v.slice(f, +f + (i ? 1 : 0)), v.__actions__.push({
          func: du,
          args: [E],
          thisArg: n
        }), new Tr(v, this.__chain__).thru(function(M) {
          return i && !M.length && M.push(n), M;
        }));
      });
      function SP() {
        return Py(this);
      }
      function TP() {
        return new Tr(this.value(), this.__chain__);
      }
      function PP() {
        this.__values__ === n && (this.__values__ = Uy(this.value()));
        var a = this.__index__ >= this.__values__.length, i = a ? n : this.__values__[this.__index__++];
        return { done: a, value: i };
      }
      function kP() {
        return this;
      }
      function NP(a) {
        for (var i, f = this; f instanceof Zc; ) {
          var v = wy(f);
          v.__index__ = 0, v.__values__ = n, i ? E.__wrapped__ = v : i = v;
          var E = v;
          f = f.__wrapped__;
        }
        return E.__wrapped__ = a, i;
      }
      function IP() {
        var a = this.__wrapped__;
        if (a instanceof Ct) {
          var i = a;
          return this.__actions__.length && (i = new Ct(this)), i = i.reverse(), i.__actions__.push({
            func: du,
            args: [Qf],
            thisArg: n
          }), new Tr(i, this.__chain__);
        }
        return this.thru(Qf);
      }
      function AP() {
        return Hv(this.__wrapped__, this.__actions__);
      }
      var RP = ru(function(a, i, f) {
        $t.call(a, f) ? ++a[f] : ca(a, f, 1);
      });
      function MP(a, i, f) {
        var v = dt(a) ? rv : CS;
        return f && Wn(a, i, f) && (i = n), v(a, at(i, 3));
      }
      function DP(a, i) {
        var f = dt(a) ? ho : Tv;
        return f(a, at(i, 3));
      }
      var LP = ty(Ey), FP = ty(xy);
      function $P(a, i) {
        return In(fu(a, i), 1);
      }
      function BP(a, i) {
        return In(fu(a, i), se);
      }
      function jP(a, i, f) {
        return f = f === n ? 1 : ht(f), In(fu(a, i), f);
      }
      function ky(a, i) {
        var f = dt(a) ? dr : yo;
        return f(a, at(i, 3));
      }
      function Ny(a, i) {
        var f = dt(a) ? oO : Sv;
        return f(a, at(i, 3));
      }
      var WP = ru(function(a, i, f) {
        $t.call(a, f) ? a[f].push(i) : ca(a, f, [i]);
      });
      function UP(a, i, f, v) {
        a = Qn(a) ? a : ns(a), f = f && !v ? ht(f) : 0;
        var E = a.length;
        return f < 0 && (f = _n(E + f, 0)), vu(a) ? f <= E && a.indexOf(i, f) > -1 : !!E && Hi(a, i, f) > -1;
      }
      var zP = vt(function(a, i, f) {
        var v = -1, E = typeof i == "function", M = Qn(a) ? ie(a.length) : [];
        return yo(a, function(j) {
          M[++v] = E ? ur(i, j, f) : al(j, i, f);
        }), M;
      }), HP = ru(function(a, i, f) {
        ca(a, f, i);
      });
      function fu(a, i) {
        var f = dt(a) ? sn : Rv;
        return f(a, at(i, 3));
      }
      function YP(a, i, f, v) {
        return a == null ? [] : (dt(i) || (i = i == null ? [] : [i]), f = v ? n : f, dt(f) || (f = f == null ? [] : [f]), Fv(a, i, f));
      }
      var qP = ru(function(a, i, f) {
        a[f ? 0 : 1].push(i);
      }, function() {
        return [[], []];
      });
      function VP(a, i, f) {
        var v = dt(a) ? df : sv, E = arguments.length < 3;
        return v(a, at(i, 4), f, E, yo);
      }
      function GP(a, i, f) {
        var v = dt(a) ? iO : sv, E = arguments.length < 3;
        return v(a, at(i, 4), f, E, Sv);
      }
      function KP(a, i) {
        var f = dt(a) ? ho : Tv;
        return f(a, mu(at(i, 3)));
      }
      function ZP(a) {
        var i = dt(a) ? Ev : US;
        return i(a);
      }
      function XP(a, i, f) {
        (f ? Wn(a, i, f) : i === n) ? i = 1 : i = ht(i);
        var v = dt(a) ? bS : zS;
        return v(a, i);
      }
      function QP(a) {
        var i = dt(a) ? _S : YS;
        return i(a);
      }
      function JP(a) {
        if (a == null)
          return 0;
        if (Qn(a))
          return vu(a) ? qi(a) : a.length;
        var i = Mn(a);
        return i == le || i == we ? a.size : Nf(a).length;
      }
      function ek(a, i, f) {
        var v = dt(a) ? ff : qS;
        return f && Wn(a, i, f) && (i = n), v(a, at(i, 3));
      }
      var tk = vt(function(a, i) {
        if (a == null)
          return [];
        var f = i.length;
        return f > 1 && Wn(a, i[0], i[1]) ? i = [] : f > 2 && Wn(i[0], i[1], i[2]) && (i = [i[0]]), Fv(a, In(i, 1), []);
      }), pu = DO || function() {
        return Nn.Date.now();
      };
      function nk(a, i) {
        if (typeof i != "function")
          throw new Sr(u);
        return a = ht(a), function() {
          if (--a < 1)
            return i.apply(this, arguments);
        };
      }
      function Iy(a, i, f) {
        return i = f ? n : i, i = a && i == null ? a.length : i, Ma(a, T, n, n, n, n, i);
      }
      function Ay(a, i) {
        var f;
        if (typeof i != "function")
          throw new Sr(u);
        return a = ht(a), function() {
          return --a > 0 && (f = i.apply(this, arguments)), a <= 1 && (i = n), f;
        };
      }
      var ep = vt(function(a, i, f) {
        var v = N;
        if (f.length) {
          var E = go(f, es(ep));
          v |= S;
        }
        return Ma(a, v, i, f, E);
      }), Ry = vt(function(a, i, f) {
        var v = N | F;
        if (f.length) {
          var E = go(f, es(Ry));
          v |= S;
        }
        return Ma(i, v, a, f, E);
      });
      function My(a, i, f) {
        i = f ? n : i;
        var v = Ma(a, I, n, n, n, n, n, i);
        return v.placeholder = My.placeholder, v;
      }
      function Dy(a, i, f) {
        i = f ? n : i;
        var v = Ma(a, O, n, n, n, n, n, i);
        return v.placeholder = Dy.placeholder, v;
      }
      function Ly(a, i, f) {
        var v, E, M, j, Y, X, be = 0, _e = !1, Oe = !1, je = !0;
        if (typeof a != "function")
          throw new Sr(u);
        i = Ir(i) || 0, dn(f) && (_e = !!f.leading, Oe = "maxWait" in f, M = Oe ? _n(Ir(f.maxWait) || 0, i) : M, je = "trailing" in f ? !!f.trailing : je);
        function Xe(mn) {
          var Kr = v, Ba = E;
          return v = E = n, be = mn, j = a.apply(Ba, Kr), j;
        }
        function ot(mn) {
          return be = mn, Y = cl(wt, i), _e ? Xe(mn) : j;
        }
        function gt(mn) {
          var Kr = mn - X, Ba = mn - be, nb = i - Kr;
          return Oe ? Rn(nb, M - Ba) : nb;
        }
        function rt(mn) {
          var Kr = mn - X, Ba = mn - be;
          return X === n || Kr >= i || Kr < 0 || Oe && Ba >= M;
        }
        function wt() {
          var mn = pu();
          if (rt(mn))
            return Pt(mn);
          Y = cl(wt, gt(mn));
        }
        function Pt(mn) {
          return Y = n, je && v ? Xe(mn) : (v = E = n, j);
        }
        function mr() {
          Y !== n && qv(Y), be = 0, v = X = E = Y = n;
        }
        function Un() {
          return Y === n ? j : Pt(pu());
        }
        function gr() {
          var mn = pu(), Kr = rt(mn);
          if (v = arguments, E = this, X = mn, Kr) {
            if (Y === n)
              return ot(X);
            if (Oe)
              return qv(Y), Y = cl(wt, i), Xe(X);
          }
          return Y === n && (Y = cl(wt, i)), j;
        }
        return gr.cancel = mr, gr.flush = Un, gr;
      }
      var rk = vt(function(a, i) {
        return Ov(a, 1, i);
      }), ak = vt(function(a, i, f) {
        return Ov(a, Ir(i) || 0, f);
      });
      function ok(a) {
        return Ma(a, B);
      }
      function hu(a, i) {
        if (typeof a != "function" || i != null && typeof i != "function")
          throw new Sr(u);
        var f = function() {
          var v = arguments, E = i ? i.apply(this, v) : v[0], M = f.cache;
          if (M.has(E))
            return M.get(E);
          var j = a.apply(this, v);
          return f.cache = M.set(E, j) || M, j;
        };
        return f.cache = new (hu.Cache || Ra)(), f;
      }
      hu.Cache = Ra;
      function mu(a) {
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
      function ik(a) {
        return Ay(2, a);
      }
      var sk = VS(function(a, i) {
        i = i.length == 1 && dt(i[0]) ? sn(i[0], fr(at())) : sn(In(i, 1), fr(at()));
        var f = i.length;
        return vt(function(v) {
          for (var E = -1, M = Rn(v.length, f); ++E < M; )
            v[E] = i[E].call(this, v[E]);
          return ur(a, this, v);
        });
      }), tp = vt(function(a, i) {
        var f = go(i, es(tp));
        return Ma(a, S, n, i, f);
      }), Fy = vt(function(a, i) {
        var f = go(i, es(Fy));
        return Ma(a, C, n, i, f);
      }), lk = Da(function(a, i) {
        return Ma(a, R, n, n, n, i);
      });
      function ck(a, i) {
        if (typeof a != "function")
          throw new Sr(u);
        return i = i === n ? i : ht(i), vt(a, i);
      }
      function uk(a, i) {
        if (typeof a != "function")
          throw new Sr(u);
        return i = i == null ? 0 : _n(ht(i), 0), vt(function(f) {
          var v = f[i], E = wo(f, 0, i);
          return v && mo(E, v), ur(a, this, E);
        });
      }
      function dk(a, i, f) {
        var v = !0, E = !0;
        if (typeof a != "function")
          throw new Sr(u);
        return dn(f) && (v = "leading" in f ? !!f.leading : v, E = "trailing" in f ? !!f.trailing : E), Ly(a, i, {
          leading: v,
          maxWait: i,
          trailing: E
        });
      }
      function fk(a) {
        return Iy(a, 1);
      }
      function pk(a, i) {
        return tp(Bf(i), a);
      }
      function hk() {
        if (!arguments.length)
          return [];
        var a = arguments[0];
        return dt(a) ? a : [a];
      }
      function mk(a) {
        return Pr(a, b);
      }
      function gk(a, i) {
        return i = typeof i == "function" ? i : n, Pr(a, b, i);
      }
      function vk(a) {
        return Pr(a, g | b);
      }
      function yk(a, i) {
        return i = typeof i == "function" ? i : n, Pr(a, g | b, i);
      }
      function bk(a, i) {
        return i == null || Cv(a, i, On(i));
      }
      function Gr(a, i) {
        return a === i || a !== a && i !== i;
      }
      var _k = su(Tf), wk = su(function(a, i) {
        return a >= i;
      }), ui = Nv(/* @__PURE__ */ function() {
        return arguments;
      }()) ? Nv : function(a) {
        return fn(a) && $t.call(a, "callee") && !gv.call(a, "callee");
      }, dt = ie.isArray, Ek = Xg ? fr(Xg) : NS;
      function Qn(a) {
        return a != null && gu(a.length) && !Fa(a);
      }
      function hn(a) {
        return fn(a) && Qn(a);
      }
      function xk(a) {
        return a === !0 || a === !1 || fn(a) && jn(a) == W;
      }
      var Eo = FO || pp, Ck = Qg ? fr(Qg) : IS;
      function Ok(a) {
        return fn(a) && a.nodeType === 1 && !ul(a);
      }
      function Sk(a) {
        if (a == null)
          return !0;
        if (Qn(a) && (dt(a) || typeof a == "string" || typeof a.splice == "function" || Eo(a) || ts(a) || ui(a)))
          return !a.length;
        var i = Mn(a);
        if (i == le || i == we)
          return !a.size;
        if (ll(a))
          return !Nf(a).length;
        for (var f in a)
          if ($t.call(a, f))
            return !1;
        return !0;
      }
      function Tk(a, i) {
        return ol(a, i);
      }
      function Pk(a, i, f) {
        f = typeof f == "function" ? f : n;
        var v = f ? f(a, i) : n;
        return v === n ? ol(a, i, n, f) : !!v;
      }
      function np(a) {
        if (!fn(a))
          return !1;
        var i = jn(a);
        return i == D || i == $ || typeof a.message == "string" && typeof a.name == "string" && !ul(a);
      }
      function kk(a) {
        return typeof a == "number" && yv(a);
      }
      function Fa(a) {
        if (!dn(a))
          return !1;
        var i = jn(a);
        return i == G || i == Z || i == $e || i == q;
      }
      function $y(a) {
        return typeof a == "number" && a == ht(a);
      }
      function gu(a) {
        return typeof a == "number" && a > -1 && a % 1 == 0 && a <= me;
      }
      function dn(a) {
        var i = typeof a;
        return a != null && (i == "object" || i == "function");
      }
      function fn(a) {
        return a != null && typeof a == "object";
      }
      var By = Jg ? fr(Jg) : RS;
      function Nk(a, i) {
        return a === i || kf(a, i, qf(i));
      }
      function Ik(a, i, f) {
        return f = typeof f == "function" ? f : n, kf(a, i, qf(i), f);
      }
      function Ak(a) {
        return jy(a) && a != +a;
      }
      function Rk(a) {
        if (gT(a))
          throw new ct(s);
        return Iv(a);
      }
      function Mk(a) {
        return a === null;
      }
      function Dk(a) {
        return a == null;
      }
      function jy(a) {
        return typeof a == "number" || fn(a) && jn(a) == Ne;
      }
      function ul(a) {
        if (!fn(a) || jn(a) != xe)
          return !1;
        var i = zc(a);
        if (i === null)
          return !0;
        var f = $t.call(i, "constructor") && i.constructor;
        return typeof f == "function" && f instanceof f && Bc.call(f) == IO;
      }
      var rp = ev ? fr(ev) : MS;
      function Lk(a) {
        return $y(a) && a >= -me && a <= me;
      }
      var Wy = tv ? fr(tv) : DS;
      function vu(a) {
        return typeof a == "string" || !dt(a) && fn(a) && jn(a) == Te;
      }
      function hr(a) {
        return typeof a == "symbol" || fn(a) && jn(a) == Re;
      }
      var ts = nv ? fr(nv) : LS;
      function Fk(a) {
        return a === n;
      }
      function $k(a) {
        return fn(a) && Mn(a) == Fe;
      }
      function Bk(a) {
        return fn(a) && jn(a) == et;
      }
      var jk = su(If), Wk = su(function(a, i) {
        return a <= i;
      });
      function Uy(a) {
        if (!a)
          return [];
        if (Qn(a))
          return vu(a) ? Yr(a) : Xn(a);
        if (Xs && a[Xs])
          return bO(a[Xs]());
        var i = Mn(a), f = i == le ? yf : i == we ? Lc : ns;
        return f(a);
      }
      function $a(a) {
        if (!a)
          return a === 0 ? a : 0;
        if (a = Ir(a), a === se || a === -se) {
          var i = a < 0 ? -1 : 1;
          return i * J;
        }
        return a === a ? a : 0;
      }
      function ht(a) {
        var i = $a(a), f = i % 1;
        return i === i ? f ? i - f : i : 0;
      }
      function zy(a) {
        return a ? ii(ht(a), 0, ae) : 0;
      }
      function Ir(a) {
        if (typeof a == "number")
          return a;
        if (hr(a))
          return re;
        if (dn(a)) {
          var i = typeof a.valueOf == "function" ? a.valueOf() : a;
          a = dn(i) ? i + "" : i;
        }
        if (typeof a != "string")
          return a === 0 ? a : +a;
        a = lv(a);
        var f = EC.test(a);
        return f || CC.test(a) ? nO(a.slice(2), f ? 2 : 8) : wC.test(a) ? re : +a;
      }
      function Hy(a) {
        return da(a, Jn(a));
      }
      function Uk(a) {
        return a ? ii(ht(a), -me, me) : a === 0 ? a : 0;
      }
      function Bt(a) {
        return a == null ? "" : pr(a);
      }
      var zk = Qi(function(a, i) {
        if (ll(i) || Qn(i)) {
          da(i, On(i), a);
          return;
        }
        for (var f in i)
          $t.call(i, f) && nl(a, f, i[f]);
      }), Yy = Qi(function(a, i) {
        da(i, Jn(i), a);
      }), qy = Qi(function(a, i, f, v) {
        da(i, Jn(i), a, v);
      }), ap = Qi(function(a, i, f, v) {
        da(i, On(i), a, v);
      }), Hk = Da(Cf);
      function Yk(a, i) {
        var f = Xi(a);
        return i == null ? f : xv(f, i);
      }
      var qk = vt(function(a, i) {
        a = Kt(a);
        var f = -1, v = i.length, E = v > 2 ? i[2] : n;
        for (E && Wn(i[0], i[1], E) && (v = 1); ++f < v; )
          for (var M = i[f], j = Jn(M), Y = -1, X = j.length; ++Y < X; ) {
            var be = j[Y], _e = a[be];
            (_e === n || Gr(_e, Gi[be]) && !$t.call(a, be)) && (a[be] = M[be]);
          }
        return a;
      }), Vk = vt(function(a) {
        return a.push(n, ly), ur(Vy, n, a);
      });
      function Gk(a, i) {
        return av(a, at(i, 3), ua);
      }
      function Kk(a, i) {
        return av(a, at(i, 3), Sf);
      }
      function Zk(a, i) {
        return a == null ? a : Of(a, at(i, 3), Jn);
      }
      function Xk(a, i) {
        return a == null ? a : Pv(a, at(i, 3), Jn);
      }
      function Qk(a, i) {
        return a && ua(a, at(i, 3));
      }
      function Jk(a, i) {
        return a && Sf(a, at(i, 3));
      }
      function eN(a) {
        return a == null ? [] : Jc(a, On(a));
      }
      function tN(a) {
        return a == null ? [] : Jc(a, Jn(a));
      }
      function op(a, i, f) {
        var v = a == null ? n : si(a, i);
        return v === n ? f : v;
      }
      function nN(a, i) {
        return a != null && dy(a, i, SS);
      }
      function ip(a, i) {
        return a != null && dy(a, i, TS);
      }
      var rN = ry(function(a, i, f) {
        i != null && typeof i.toString != "function" && (i = jc.call(i)), a[i] = f;
      }, lp(er)), aN = ry(function(a, i, f) {
        i != null && typeof i.toString != "function" && (i = jc.call(i)), $t.call(a, i) ? a[i].push(f) : a[i] = [f];
      }, at), oN = vt(al);
      function On(a) {
        return Qn(a) ? wv(a) : Nf(a);
      }
      function Jn(a) {
        return Qn(a) ? wv(a, !0) : FS(a);
      }
      function iN(a, i) {
        var f = {};
        return i = at(i, 3), ua(a, function(v, E, M) {
          ca(f, i(v, E, M), v);
        }), f;
      }
      function sN(a, i) {
        var f = {};
        return i = at(i, 3), ua(a, function(v, E, M) {
          ca(f, E, i(v, E, M));
        }), f;
      }
      var lN = Qi(function(a, i, f) {
        eu(a, i, f);
      }), Vy = Qi(function(a, i, f, v) {
        eu(a, i, f, v);
      }), cN = Da(function(a, i) {
        var f = {};
        if (a == null)
          return f;
        var v = !1;
        i = sn(i, function(M) {
          return M = _o(M, a), v || (v = M.length > 1), M;
        }), da(a, Hf(a), f), v && (f = Pr(f, g | y | b, aT));
        for (var E = i.length; E--; )
          Lf(f, i[E]);
        return f;
      });
      function uN(a, i) {
        return Gy(a, mu(at(i)));
      }
      var dN = Da(function(a, i) {
        return a == null ? {} : BS(a, i);
      });
      function Gy(a, i) {
        if (a == null)
          return {};
        var f = sn(Hf(a), function(v) {
          return [v];
        });
        return i = at(i), $v(a, f, function(v, E) {
          return i(v, E[0]);
        });
      }
      function fN(a, i, f) {
        i = _o(i, a);
        var v = -1, E = i.length;
        for (E || (E = 1, a = n); ++v < E; ) {
          var M = a == null ? n : a[Vr(i[v])];
          M === n && (v = E, M = f), a = Fa(M) ? M.call(a) : M;
        }
        return a;
      }
      function pN(a, i, f) {
        return a == null ? a : il(a, i, f);
      }
      function hN(a, i, f, v) {
        return v = typeof v == "function" ? v : n, a == null ? a : il(a, i, f, v);
      }
      var Ky = iy(On), Zy = iy(Jn);
      function mN(a, i, f) {
        var v = dt(a), E = v || Eo(a) || ts(a);
        if (i = at(i, 4), f == null) {
          var M = a && a.constructor;
          E ? f = v ? new M() : [] : dn(a) ? f = Fa(M) ? Xi(zc(a)) : {} : f = {};
        }
        return (E ? dr : ua)(a, function(j, Y, X) {
          return i(f, j, Y, X);
        }), f;
      }
      function gN(a, i) {
        return a == null ? !0 : Lf(a, i);
      }
      function vN(a, i, f) {
        return a == null ? a : zv(a, i, Bf(f));
      }
      function yN(a, i, f, v) {
        return v = typeof v == "function" ? v : n, a == null ? a : zv(a, i, Bf(f), v);
      }
      function ns(a) {
        return a == null ? [] : vf(a, On(a));
      }
      function bN(a) {
        return a == null ? [] : vf(a, Jn(a));
      }
      function _N(a, i, f) {
        return f === n && (f = i, i = n), f !== n && (f = Ir(f), f = f === f ? f : 0), i !== n && (i = Ir(i), i = i === i ? i : 0), ii(Ir(a), i, f);
      }
      function wN(a, i, f) {
        return i = $a(i), f === n ? (f = i, i = 0) : f = $a(f), a = Ir(a), PS(a, i, f);
      }
      function EN(a, i, f) {
        if (f && typeof f != "boolean" && Wn(a, i, f) && (i = f = n), f === n && (typeof i == "boolean" ? (f = i, i = n) : typeof a == "boolean" && (f = a, a = n)), a === n && i === n ? (a = 0, i = 1) : (a = $a(a), i === n ? (i = a, a = 0) : i = $a(i)), a > i) {
          var v = a;
          a = i, i = v;
        }
        if (f || a % 1 || i % 1) {
          var E = bv();
          return Rn(a + E * (i - a + tO("1e-" + ((E + "").length - 1))), i);
        }
        return Rf(a, i);
      }
      var xN = Ji(function(a, i, f) {
        return i = i.toLowerCase(), a + (f ? Xy(i) : i);
      });
      function Xy(a) {
        return sp(Bt(a).toLowerCase());
      }
      function Qy(a) {
        return a = Bt(a), a && a.replace(SC, hO).replace(YC, "");
      }
      function CN(a, i, f) {
        a = Bt(a), i = pr(i);
        var v = a.length;
        f = f === n ? v : ii(ht(f), 0, v);
        var E = f;
        return f -= i.length, f >= 0 && a.slice(f, E) == i;
      }
      function ON(a) {
        return a = Bt(a), a && la.test(a) ? a.replace(sa, mO) : a;
      }
      function SN(a) {
        return a = Bt(a), a && pC.test(a) ? a.replace(ef, "\\$&") : a;
      }
      var TN = Ji(function(a, i, f) {
        return a + (f ? "-" : "") + i.toLowerCase();
      }), PN = Ji(function(a, i, f) {
        return a + (f ? " " : "") + i.toLowerCase();
      }), kN = ey("toLowerCase");
      function NN(a, i, f) {
        a = Bt(a), i = ht(i);
        var v = i ? qi(a) : 0;
        if (!i || v >= i)
          return a;
        var E = (i - v) / 2;
        return iu(Vc(E), f) + a + iu(qc(E), f);
      }
      function IN(a, i, f) {
        a = Bt(a), i = ht(i);
        var v = i ? qi(a) : 0;
        return i && v < i ? a + iu(i - v, f) : a;
      }
      function AN(a, i, f) {
        a = Bt(a), i = ht(i);
        var v = i ? qi(a) : 0;
        return i && v < i ? iu(i - v, f) + a : a;
      }
      function RN(a, i, f) {
        return f || i == null ? i = 0 : i && (i = +i), WO(Bt(a).replace(tf, ""), i || 0);
      }
      function MN(a, i, f) {
        return (f ? Wn(a, i, f) : i === n) ? i = 1 : i = ht(i), Mf(Bt(a), i);
      }
      function DN() {
        var a = arguments, i = Bt(a[0]);
        return a.length < 3 ? i : i.replace(a[1], a[2]);
      }
      var LN = Ji(function(a, i, f) {
        return a + (f ? "_" : "") + i.toLowerCase();
      });
      function FN(a, i, f) {
        return f && typeof f != "number" && Wn(a, i, f) && (i = f = n), f = f === n ? ae : f >>> 0, f ? (a = Bt(a), a && (typeof i == "string" || i != null && !rp(i)) && (i = pr(i), !i && Yi(a)) ? wo(Yr(a), 0, f) : a.split(i, f)) : [];
      }
      var $N = Ji(function(a, i, f) {
        return a + (f ? " " : "") + sp(i);
      });
      function BN(a, i, f) {
        return a = Bt(a), f = f == null ? 0 : ii(ht(f), 0, a.length), i = pr(i), a.slice(f, f + i.length) == i;
      }
      function jN(a, i, f) {
        var v = k.templateSettings;
        f && Wn(a, i, f) && (i = n), a = Bt(a), i = ap({}, i, v, sy);
        var E = ap({}, i.imports, v.imports, sy), M = On(E), j = vf(E, M);
        dr(M, function(rt) {
          if (kg.test(rt))
            throw new ct(d);
        });
        var Y, X, be = 0, _e = i.interpolate || Ic, Oe = "__p += '", je = bf(
          (i.escape || Ic).source + "|" + _e.source + "|" + (_e === Pg ? _C : Ic).source + "|" + (i.evaluate || Ic).source + "|$",
          "g"
        ), Xe = "//# sourceURL=" + ($t.call(i, "sourceURL") ? (i.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++ZC + "]") + `
`;
        a.replace(je, function(rt, wt, Pt, mr, Un, gr) {
          return Pt || (Pt = mr), Oe += a.slice(be, gr).replace(TC, gO), wt && (Y = !0, Oe += `' +
__e(` + wt + `) +
'`), Un && (X = !0, Oe += `';
` + Un + `;
__p += '`), Pt && (Oe += `' +
((__t = (` + Pt + `)) == null ? '' : __t) +
'`), be = gr + rt.length, rt;
        }), Oe += `';
`;
        var ot = $t.call(i, "variable") && i.variable;
        if (!ot)
          Oe = `with (obj) {
` + Oe + `
}
`;
        else if (kg.test(ot))
          throw new ct(c);
        Oe = (X ? Oe.replace(Ft, "") : Oe).replace(tt, "$1").replace(un, "$1;"), Oe = "function(" + (ot || "obj") + `) {
` + (ot ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (Y ? ", __e = _.escape" : "") + (X ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + Oe + `return __p
}`;
        var gt = eb(function() {
          return Lt(M, Xe + "return " + Oe).apply(n, j);
        });
        if (gt.source = Oe, np(gt))
          throw gt;
        return gt;
      }
      function WN(a) {
        return Bt(a).toLowerCase();
      }
      function UN(a) {
        return Bt(a).toUpperCase();
      }
      function zN(a, i, f) {
        if (a = Bt(a), a && (f || i === n))
          return lv(a);
        if (!a || !(i = pr(i)))
          return a;
        var v = Yr(a), E = Yr(i), M = cv(v, E), j = uv(v, E) + 1;
        return wo(v, M, j).join("");
      }
      function HN(a, i, f) {
        if (a = Bt(a), a && (f || i === n))
          return a.slice(0, fv(a) + 1);
        if (!a || !(i = pr(i)))
          return a;
        var v = Yr(a), E = uv(v, Yr(i)) + 1;
        return wo(v, 0, E).join("");
      }
      function YN(a, i, f) {
        if (a = Bt(a), a && (f || i === n))
          return a.replace(tf, "");
        if (!a || !(i = pr(i)))
          return a;
        var v = Yr(a), E = cv(v, Yr(i));
        return wo(v, E).join("");
      }
      function qN(a, i) {
        var f = U, v = te;
        if (dn(i)) {
          var E = "separator" in i ? i.separator : E;
          f = "length" in i ? ht(i.length) : f, v = "omission" in i ? pr(i.omission) : v;
        }
        a = Bt(a);
        var M = a.length;
        if (Yi(a)) {
          var j = Yr(a);
          M = j.length;
        }
        if (f >= M)
          return a;
        var Y = f - qi(v);
        if (Y < 1)
          return v;
        var X = j ? wo(j, 0, Y).join("") : a.slice(0, Y);
        if (E === n)
          return X + v;
        if (j && (Y += X.length - Y), rp(E)) {
          if (a.slice(Y).search(E)) {
            var be, _e = X;
            for (E.global || (E = bf(E.source, Bt(Ng.exec(E)) + "g")), E.lastIndex = 0; be = E.exec(_e); )
              var Oe = be.index;
            X = X.slice(0, Oe === n ? Y : Oe);
          }
        } else if (a.indexOf(pr(E), Y) != Y) {
          var je = X.lastIndexOf(E);
          je > -1 && (X = X.slice(0, je));
        }
        return X + v;
      }
      function VN(a) {
        return a = Bt(a), a && Nc.test(a) ? a.replace(Zn, xO) : a;
      }
      var GN = Ji(function(a, i, f) {
        return a + (f ? " " : "") + i.toUpperCase();
      }), sp = ey("toUpperCase");
      function Jy(a, i, f) {
        return a = Bt(a), i = f ? n : i, i === n ? yO(a) ? SO(a) : cO(a) : a.match(i) || [];
      }
      var eb = vt(function(a, i) {
        try {
          return ur(a, n, i);
        } catch (f) {
          return np(f) ? f : new ct(f);
        }
      }), KN = Da(function(a, i) {
        return dr(i, function(f) {
          f = Vr(f), ca(a, f, ep(a[f], a));
        }), a;
      });
      function ZN(a) {
        var i = a == null ? 0 : a.length, f = at();
        return a = i ? sn(a, function(v) {
          if (typeof v[1] != "function")
            throw new Sr(u);
          return [f(v[0]), v[1]];
        }) : [], vt(function(v) {
          for (var E = -1; ++E < i; ) {
            var M = a[E];
            if (ur(M[0], this, v))
              return ur(M[1], this, v);
          }
        });
      }
      function XN(a) {
        return xS(Pr(a, g));
      }
      function lp(a) {
        return function() {
          return a;
        };
      }
      function QN(a, i) {
        return a == null || a !== a ? i : a;
      }
      var JN = ny(), eI = ny(!0);
      function er(a) {
        return a;
      }
      function cp(a) {
        return Av(typeof a == "function" ? a : Pr(a, g));
      }
      function tI(a) {
        return Mv(Pr(a, g));
      }
      function nI(a, i) {
        return Dv(a, Pr(i, g));
      }
      var rI = vt(function(a, i) {
        return function(f) {
          return al(f, a, i);
        };
      }), aI = vt(function(a, i) {
        return function(f) {
          return al(a, f, i);
        };
      });
      function up(a, i, f) {
        var v = On(i), E = Jc(i, v);
        f == null && !(dn(i) && (E.length || !v.length)) && (f = i, i = a, a = this, E = Jc(i, On(i)));
        var M = !(dn(f) && "chain" in f) || !!f.chain, j = Fa(a);
        return dr(E, function(Y) {
          var X = i[Y];
          a[Y] = X, j && (a.prototype[Y] = function() {
            var be = this.__chain__;
            if (M || be) {
              var _e = a(this.__wrapped__), Oe = _e.__actions__ = Xn(this.__actions__);
              return Oe.push({ func: X, args: arguments, thisArg: a }), _e.__chain__ = be, _e;
            }
            return X.apply(a, mo([this.value()], arguments));
          });
        }), a;
      }
      function oI() {
        return Nn._ === this && (Nn._ = AO), this;
      }
      function dp() {
      }
      function iI(a) {
        return a = ht(a), vt(function(i) {
          return Lv(i, a);
        });
      }
      var sI = Wf(sn), lI = Wf(rv), cI = Wf(ff);
      function tb(a) {
        return Gf(a) ? pf(Vr(a)) : jS(a);
      }
      function uI(a) {
        return function(i) {
          return a == null ? n : si(a, i);
        };
      }
      var dI = ay(), fI = ay(!0);
      function fp() {
        return [];
      }
      function pp() {
        return !1;
      }
      function pI() {
        return {};
      }
      function hI() {
        return "";
      }
      function mI() {
        return !0;
      }
      function gI(a, i) {
        if (a = ht(a), a < 1 || a > me)
          return [];
        var f = ae, v = Rn(a, ae);
        i = at(i), a -= ae;
        for (var E = gf(v, i); ++f < a; )
          i(f);
        return E;
      }
      function vI(a) {
        return dt(a) ? sn(a, Vr) : hr(a) ? [a] : Xn(_y(Bt(a)));
      }
      function yI(a) {
        var i = ++NO;
        return Bt(a) + i;
      }
      var bI = ou(function(a, i) {
        return a + i;
      }, 0), _I = Uf("ceil"), wI = ou(function(a, i) {
        return a / i;
      }, 1), EI = Uf("floor");
      function xI(a) {
        return a && a.length ? Qc(a, er, Tf) : n;
      }
      function CI(a, i) {
        return a && a.length ? Qc(a, at(i, 2), Tf) : n;
      }
      function OI(a) {
        return iv(a, er);
      }
      function SI(a, i) {
        return iv(a, at(i, 2));
      }
      function TI(a) {
        return a && a.length ? Qc(a, er, If) : n;
      }
      function PI(a, i) {
        return a && a.length ? Qc(a, at(i, 2), If) : n;
      }
      var kI = ou(function(a, i) {
        return a * i;
      }, 1), NI = Uf("round"), II = ou(function(a, i) {
        return a - i;
      }, 0);
      function AI(a) {
        return a && a.length ? mf(a, er) : 0;
      }
      function RI(a, i) {
        return a && a.length ? mf(a, at(i, 2)) : 0;
      }
      return k.after = nk, k.ary = Iy, k.assign = zk, k.assignIn = Yy, k.assignInWith = qy, k.assignWith = ap, k.at = Hk, k.before = Ay, k.bind = ep, k.bindAll = KN, k.bindKey = Ry, k.castArray = hk, k.chain = Py, k.chunk = xT, k.compact = CT, k.concat = OT, k.cond = ZN, k.conforms = XN, k.constant = lp, k.countBy = RP, k.create = Yk, k.curry = My, k.curryRight = Dy, k.debounce = Ly, k.defaults = qk, k.defaultsDeep = Vk, k.defer = rk, k.delay = ak, k.difference = ST, k.differenceBy = TT, k.differenceWith = PT, k.drop = kT, k.dropRight = NT, k.dropRightWhile = IT, k.dropWhile = AT, k.fill = RT, k.filter = DP, k.flatMap = $P, k.flatMapDeep = BP, k.flatMapDepth = jP, k.flatten = Cy, k.flattenDeep = MT, k.flattenDepth = DT, k.flip = ok, k.flow = JN, k.flowRight = eI, k.fromPairs = LT, k.functions = eN, k.functionsIn = tN, k.groupBy = WP, k.initial = $T, k.intersection = BT, k.intersectionBy = jT, k.intersectionWith = WT, k.invert = rN, k.invertBy = aN, k.invokeMap = zP, k.iteratee = cp, k.keyBy = HP, k.keys = On, k.keysIn = Jn, k.map = fu, k.mapKeys = iN, k.mapValues = sN, k.matches = tI, k.matchesProperty = nI, k.memoize = hu, k.merge = lN, k.mergeWith = Vy, k.method = rI, k.methodOf = aI, k.mixin = up, k.negate = mu, k.nthArg = iI, k.omit = cN, k.omitBy = uN, k.once = ik, k.orderBy = YP, k.over = sI, k.overArgs = sk, k.overEvery = lI, k.overSome = cI, k.partial = tp, k.partialRight = Fy, k.partition = qP, k.pick = dN, k.pickBy = Gy, k.property = tb, k.propertyOf = uI, k.pull = YT, k.pullAll = Sy, k.pullAllBy = qT, k.pullAllWith = VT, k.pullAt = GT, k.range = dI, k.rangeRight = fI, k.rearg = lk, k.reject = KP, k.remove = KT, k.rest = ck, k.reverse = Qf, k.sampleSize = XP, k.set = pN, k.setWith = hN, k.shuffle = QP, k.slice = ZT, k.sortBy = tk, k.sortedUniq = rP, k.sortedUniqBy = aP, k.split = FN, k.spread = uk, k.tail = oP, k.take = iP, k.takeRight = sP, k.takeRightWhile = lP, k.takeWhile = cP, k.tap = CP, k.throttle = dk, k.thru = du, k.toArray = Uy, k.toPairs = Ky, k.toPairsIn = Zy, k.toPath = vI, k.toPlainObject = Hy, k.transform = mN, k.unary = fk, k.union = uP, k.unionBy = dP, k.unionWith = fP, k.uniq = pP, k.uniqBy = hP, k.uniqWith = mP, k.unset = gN, k.unzip = Jf, k.unzipWith = Ty, k.update = vN, k.updateWith = yN, k.values = ns, k.valuesIn = bN, k.without = gP, k.words = Jy, k.wrap = pk, k.xor = vP, k.xorBy = yP, k.xorWith = bP, k.zip = _P, k.zipObject = wP, k.zipObjectDeep = EP, k.zipWith = xP, k.entries = Ky, k.entriesIn = Zy, k.extend = Yy, k.extendWith = qy, up(k, k), k.add = bI, k.attempt = eb, k.camelCase = xN, k.capitalize = Xy, k.ceil = _I, k.clamp = _N, k.clone = mk, k.cloneDeep = vk, k.cloneDeepWith = yk, k.cloneWith = gk, k.conformsTo = bk, k.deburr = Qy, k.defaultTo = QN, k.divide = wI, k.endsWith = CN, k.eq = Gr, k.escape = ON, k.escapeRegExp = SN, k.every = MP, k.find = LP, k.findIndex = Ey, k.findKey = Gk, k.findLast = FP, k.findLastIndex = xy, k.findLastKey = Kk, k.floor = EI, k.forEach = ky, k.forEachRight = Ny, k.forIn = Zk, k.forInRight = Xk, k.forOwn = Qk, k.forOwnRight = Jk, k.get = op, k.gt = _k, k.gte = wk, k.has = nN, k.hasIn = ip, k.head = Oy, k.identity = er, k.includes = UP, k.indexOf = FT, k.inRange = wN, k.invoke = oN, k.isArguments = ui, k.isArray = dt, k.isArrayBuffer = Ek, k.isArrayLike = Qn, k.isArrayLikeObject = hn, k.isBoolean = xk, k.isBuffer = Eo, k.isDate = Ck, k.isElement = Ok, k.isEmpty = Sk, k.isEqual = Tk, k.isEqualWith = Pk, k.isError = np, k.isFinite = kk, k.isFunction = Fa, k.isInteger = $y, k.isLength = gu, k.isMap = By, k.isMatch = Nk, k.isMatchWith = Ik, k.isNaN = Ak, k.isNative = Rk, k.isNil = Dk, k.isNull = Mk, k.isNumber = jy, k.isObject = dn, k.isObjectLike = fn, k.isPlainObject = ul, k.isRegExp = rp, k.isSafeInteger = Lk, k.isSet = Wy, k.isString = vu, k.isSymbol = hr, k.isTypedArray = ts, k.isUndefined = Fk, k.isWeakMap = $k, k.isWeakSet = Bk, k.join = UT, k.kebabCase = TN, k.last = Nr, k.lastIndexOf = zT, k.lowerCase = PN, k.lowerFirst = kN, k.lt = jk, k.lte = Wk, k.max = xI, k.maxBy = CI, k.mean = OI, k.meanBy = SI, k.min = TI, k.minBy = PI, k.stubArray = fp, k.stubFalse = pp, k.stubObject = pI, k.stubString = hI, k.stubTrue = mI, k.multiply = kI, k.nth = HT, k.noConflict = oI, k.noop = dp, k.now = pu, k.pad = NN, k.padEnd = IN, k.padStart = AN, k.parseInt = RN, k.random = EN, k.reduce = VP, k.reduceRight = GP, k.repeat = MN, k.replace = DN, k.result = fN, k.round = NI, k.runInContext = K, k.sample = ZP, k.size = JP, k.snakeCase = LN, k.some = ek, k.sortedIndex = XT, k.sortedIndexBy = QT, k.sortedIndexOf = JT, k.sortedLastIndex = eP, k.sortedLastIndexBy = tP, k.sortedLastIndexOf = nP, k.startCase = $N, k.startsWith = BN, k.subtract = II, k.sum = AI, k.sumBy = RI, k.template = jN, k.times = gI, k.toFinite = $a, k.toInteger = ht, k.toLength = zy, k.toLower = WN, k.toNumber = Ir, k.toSafeInteger = Uk, k.toString = Bt, k.toUpper = UN, k.trim = zN, k.trimEnd = HN, k.trimStart = YN, k.truncate = qN, k.unescape = VN, k.uniqueId = yI, k.upperCase = GN, k.upperFirst = sp, k.each = ky, k.eachRight = Ny, k.first = Oy, up(k, function() {
        var a = {};
        return ua(k, function(i, f) {
          $t.call(k.prototype, f) || (a[f] = i);
        }), a;
      }(), { chain: !1 }), k.VERSION = r, dr(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(a) {
        k[a].placeholder = k;
      }), dr(["drop", "take"], function(a, i) {
        Ct.prototype[a] = function(f) {
          f = f === n ? 1 : _n(ht(f), 0);
          var v = this.__filtered__ && !i ? new Ct(this) : this.clone();
          return v.__filtered__ ? v.__takeCount__ = Rn(f, v.__takeCount__) : v.__views__.push({
            size: Rn(f, ae),
            type: a + (v.__dir__ < 0 ? "Right" : "")
          }), v;
        }, Ct.prototype[a + "Right"] = function(f) {
          return this.reverse()[a](f).reverse();
        };
      }), dr(["filter", "map", "takeWhile"], function(a, i) {
        var f = i + 1, v = f == fe || f == Pe;
        Ct.prototype[a] = function(E) {
          var M = this.clone();
          return M.__iteratees__.push({
            iteratee: at(E, 3),
            type: f
          }), M.__filtered__ = M.__filtered__ || v, M;
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
        return this.filter(er);
      }, Ct.prototype.find = function(a) {
        return this.filter(a).head();
      }, Ct.prototype.findLast = function(a) {
        return this.reverse().find(a);
      }, Ct.prototype.invokeMap = vt(function(a, i) {
        return typeof a == "function" ? new Ct(this) : this.map(function(f) {
          return al(f, a, i);
        });
      }), Ct.prototype.reject = function(a) {
        return this.filter(mu(at(a)));
      }, Ct.prototype.slice = function(a, i) {
        a = ht(a);
        var f = this;
        return f.__filtered__ && (a > 0 || i < 0) ? new Ct(f) : (a < 0 ? f = f.takeRight(-a) : a && (f = f.drop(a)), i !== n && (i = ht(i), f = i < 0 ? f.dropRight(-i) : f.take(i - a)), f);
      }, Ct.prototype.takeRightWhile = function(a) {
        return this.reverse().takeWhile(a).reverse();
      }, Ct.prototype.toArray = function() {
        return this.take(ae);
      }, ua(Ct.prototype, function(a, i) {
        var f = /^(?:filter|find|map|reject)|While$/.test(i), v = /^(?:head|last)$/.test(i), E = k[v ? "take" + (i == "last" ? "Right" : "") : i], M = v || /^find/.test(i);
        E && (k.prototype[i] = function() {
          var j = this.__wrapped__, Y = v ? [1] : arguments, X = j instanceof Ct, be = Y[0], _e = X || dt(j), Oe = function(wt) {
            var Pt = E.apply(k, mo([wt], Y));
            return v && je ? Pt[0] : Pt;
          };
          _e && f && typeof be == "function" && be.length != 1 && (X = _e = !1);
          var je = this.__chain__, Xe = !!this.__actions__.length, ot = M && !je, gt = X && !Xe;
          if (!M && _e) {
            j = gt ? j : new Ct(this);
            var rt = a.apply(j, Y);
            return rt.__actions__.push({ func: du, args: [Oe], thisArg: n }), new Tr(rt, je);
          }
          return ot && gt ? a.apply(this, Y) : (rt = this.thru(Oe), ot ? v ? rt.value()[0] : rt.value() : rt);
        });
      }), dr(["pop", "push", "shift", "sort", "splice", "unshift"], function(a) {
        var i = Fc[a], f = /^(?:push|sort|unshift)$/.test(a) ? "tap" : "thru", v = /^(?:pop|shift)$/.test(a);
        k.prototype[a] = function() {
          var E = arguments;
          if (v && !this.__chain__) {
            var M = this.value();
            return i.apply(dt(M) ? M : [], E);
          }
          return this[f](function(j) {
            return i.apply(dt(j) ? j : [], E);
          });
        };
      }), ua(Ct.prototype, function(a, i) {
        var f = k[i];
        if (f) {
          var v = f.name + "";
          $t.call(Zi, v) || (Zi[v] = []), Zi[v].push({ name: i, func: f });
        }
      }), Zi[au(n, F).name] = [{
        name: "wrapper",
        func: n
      }], Ct.prototype.clone = GO, Ct.prototype.reverse = KO, Ct.prototype.value = ZO, k.prototype.at = OP, k.prototype.chain = SP, k.prototype.commit = TP, k.prototype.next = PP, k.prototype.plant = NP, k.prototype.reverse = IP, k.prototype.toJSON = k.prototype.valueOf = k.prototype.value = AP, k.prototype.first = k.prototype.head, Xs && (k.prototype[Xs] = kP), k;
    }, Vi = TO();
    ni ? ((ni.exports = Vi)._ = Vi, lf._ = Vi) : Nn._ = Vi;
  }).call(os);
})(Qu, Qu.exports);
var A = Qu.exports;
//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Pw;
function Le() {
  return Pw.apply(null, arguments);
}
function TB(e) {
  Pw = e;
}
function ta(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function xi(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function Mt(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function km(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (Mt(e, t))
      return !1;
  return !0;
}
function nr(e) {
  return e === void 0;
}
function Ja(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function wc(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function kw(e, t) {
  var n = [], r, o = e.length;
  for (r = 0; r < o; ++r)
    n.push(t(e[r], r));
  return n;
}
function Po(e, t) {
  for (var n in t)
    Mt(t, n) && (e[n] = t[n]);
  return Mt(t, "toString") && (e.toString = t.toString), Mt(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function ka(e, t, n, r) {
  return Qw(e, t, n, r, !0).utc();
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
function mt(e) {
  return e._pf == null && (e._pf = PB()), e._pf;
}
var Eh;
Array.prototype.some ? Eh = Array.prototype.some : Eh = function(e) {
  var t = Object(this), n = t.length >>> 0, r;
  for (r = 0; r < n; r++)
    if (r in t && e.call(this, t[r], r, t))
      return !0;
  return !1;
};
function Nm(e) {
  var t = null, n = !1, r = e._d && !isNaN(e._d.getTime());
  if (r && (t = mt(e), n = Eh.call(t.parsedDateParts, function(o) {
    return o != null;
  }), r = t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n), e._strict && (r = r && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(e))
    e._isValid = r;
  else
    return r;
  return e._isValid;
}
function Ad(e) {
  var t = ka(NaN);
  return e != null ? Po(mt(t), e) : mt(t).userInvalidated = !0, t;
}
var x0 = Le.momentProperties = [], Ap = !1;
function Im(e, t) {
  var n, r, o, s = x0.length;
  if (nr(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), nr(t._i) || (e._i = t._i), nr(t._f) || (e._f = t._f), nr(t._l) || (e._l = t._l), nr(t._strict) || (e._strict = t._strict), nr(t._tzm) || (e._tzm = t._tzm), nr(t._isUTC) || (e._isUTC = t._isUTC), nr(t._offset) || (e._offset = t._offset), nr(t._pf) || (e._pf = mt(t)), nr(t._locale) || (e._locale = t._locale), s > 0)
    for (n = 0; n < s; n++)
      r = x0[n], o = t[r], nr(o) || (e[r] = o);
  return e;
}
function Ec(e) {
  Im(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), Ap === !1 && (Ap = !0, Le.updateOffset(this), Ap = !1);
}
function na(e) {
  return e instanceof Ec || e != null && e._isAMomentObject != null;
}
function Nw(e) {
  Le.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function zr(e, t) {
  var n = !0;
  return Po(function() {
    if (Le.deprecationHandler != null && Le.deprecationHandler(null, e), n) {
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
      Nw(
        e + `
Arguments: ` + Array.prototype.slice.call(r).join("") + `
` + new Error().stack
      ), n = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var C0 = {};
function Iw(e, t) {
  Le.deprecationHandler != null && Le.deprecationHandler(e, t), C0[e] || (Nw(t), C0[e] = !0);
}
Le.suppressDeprecationWarnings = !1;
Le.deprecationHandler = null;
function Na(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function kB(e) {
  var t, n;
  for (n in e)
    Mt(e, n) && (t = e[n], Na(t) ? this[n] = t : this["_" + n] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function xh(e, t) {
  var n = Po({}, e), r;
  for (r in t)
    Mt(t, r) && (xi(e[r]) && xi(t[r]) ? (n[r] = {}, Po(n[r], e[r]), Po(n[r], t[r])) : t[r] != null ? n[r] = t[r] : delete n[r]);
  for (r in e)
    Mt(e, r) && !Mt(t, r) && xi(e[r]) && (n[r] = Po({}, n[r]));
  return n;
}
function Am(e) {
  e != null && this.set(e);
}
var Ch;
Object.keys ? Ch = Object.keys : Ch = function(e) {
  var t, n = [];
  for (t in e)
    Mt(e, t) && n.push(t);
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
  return Na(r) ? r.call(t, n) : r;
}
function Ta(e, t, n) {
  var r = "" + Math.abs(e), o = t - r.length, s = e >= 0;
  return (s ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, o)).toString().substr(1) + r;
}
var Rm = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Eu = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Rp = {}, hs = {};
function Je(e, t, n, r) {
  var o = r;
  typeof r == "string" && (o = function() {
    return this[r]();
  }), e && (hs[e] = o), t && (hs[t[0]] = function() {
    return Ta(o.apply(this, arguments), t[1], t[2]);
  }), n && (hs[n] = function() {
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
  var t = e.match(Rm), n, r;
  for (n = 0, r = t.length; n < r; n++)
    hs[t[n]] ? t[n] = hs[t[n]] : t[n] = AB(t[n]);
  return function(o) {
    var s = "", u;
    for (u = 0; u < r; u++)
      s += Na(t[u]) ? t[u].call(o, e) : t[u];
    return s;
  };
}
function Mu(e, t) {
  return e.isValid() ? (t = Aw(t, e.localeData()), Rp[t] = Rp[t] || RB(t), Rp[t](e)) : e.localeData().invalidDate();
}
function Aw(e, t) {
  var n = 5;
  function r(o) {
    return t.longDateFormat(o) || o;
  }
  for (Eu.lastIndex = 0; n >= 0 && Eu.test(e); )
    e = e.replace(
      Eu,
      r
    ), Eu.lastIndex = 0, n -= 1;
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
  return t || !n ? t : (this._longDateFormat[e] = n.match(Rm).map(function(r) {
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
function UB(e, t, n, r) {
  var o = this._relativeTime[n];
  return Na(o) ? o(e, t, n, r) : o.replace(/%d/i, e);
}
function zB(e, t) {
  var n = this._relativeTime[e > 0 ? "future" : "past"];
  return Na(n) ? n(t) : n.replace(/%s/i, t);
}
var O0 = {
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
  return typeof e == "string" ? O0[e] || O0[e.toLowerCase()] : void 0;
}
function Mm(e) {
  var t = {}, n, r;
  for (r in e)
    Mt(e, r) && (n = Hr(r), n && (t[n] = e[r]));
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
    Mt(e, n) && t.push({ unit: n, priority: HB[n] });
  return t.sort(function(r, o) {
    return r.priority - o.priority;
  }), t;
}
var Rw = /\d/, xr = /\d\d/, Mw = /\d{3}/, Dm = /\d{4}/, Rd = /[+-]?\d{6}/, on = /\d\d?/, Dw = /\d\d\d\d?/, Lw = /\d\d\d\d\d\d?/, Md = /\d{1,3}/, Lm = /\d{1,4}/, Dd = /[+-]?\d{1,6}/, Ys = /\d+/, Ld = /[+-]?\d+/, qB = /Z|[+-]\d\d:?\d\d/gi, Fd = /Z|[+-]\d\d(?::?\d\d)?/gi, VB = /[+-]?\d+(\.\d{1,3})?/, xc = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, qs = /^[1-9]\d?/, Fm = /^([1-9]\d|\d)/, Ju;
Ju = {};
function Ye(e, t, n) {
  Ju[e] = Na(t) ? t : function(r, o) {
    return r && n ? n : t;
  };
}
function GB(e, t) {
  return Mt(Ju, e) ? Ju[e](t._strict, t._locale) : new RegExp(KB(e));
}
function KB(e) {
  return Ga(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, n, r, o, s) {
        return n || r || o || s;
      }
    )
  );
}
function Ga(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function Mr(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function Ot(e) {
  var t = +e, n = 0;
  return t !== 0 && isFinite(t) && (n = Mr(t)), n;
}
var Oh = {};
function Vt(e, t) {
  var n, r = t, o;
  for (typeof e == "string" && (e = [e]), Ja(t) && (r = function(s, u) {
    u[t] = Ot(s);
  }), o = e.length, n = 0; n < o; n++)
    Oh[e[n]] = r;
}
function Cc(e, t) {
  Vt(e, function(n, r, o, s) {
    o._w = o._w || {}, t(n, o._w, o, s);
  });
}
function ZB(e, t, n) {
  t != null && Mt(Oh, e) && Oh[e](t, n._a, n, e);
}
function $d(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
var Fn = 0, Ya = 1, ga = 2, En = 3, Qr = 4, qa = 5, yi = 6, XB = 7, QB = 8;
Je("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? Ta(e, 4) : "+" + e;
});
Je(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
Je(0, ["YYYY", 4], 0, "year");
Je(0, ["YYYYY", 5], 0, "year");
Je(0, ["YYYYYY", 6, !0], 0, "year");
Ye("Y", Ld);
Ye("YY", on, xr);
Ye("YYYY", Lm, Dm);
Ye("YYYYY", Dd, Rd);
Ye("YYYYYY", Dd, Rd);
Vt(["YYYYY", "YYYYYY"], Fn);
Vt("YYYY", function(e, t) {
  t[Fn] = e.length === 2 ? Le.parseTwoDigitYear(e) : Ot(e);
});
Vt("YY", function(e, t) {
  t[Fn] = Le.parseTwoDigitYear(e);
});
Vt("Y", function(e, t) {
  t[Fn] = parseInt(e, 10);
});
function Al(e) {
  return $d(e) ? 366 : 365;
}
Le.parseTwoDigitYear = function(e) {
  return Ot(e) + (Ot(e) > 68 ? 1900 : 2e3);
};
var Fw = Vs("FullYear", !0);
function JB() {
  return $d(this.year());
}
function Vs(e, t) {
  return function(n) {
    return n != null ? ($w(this, e, n), Le.updateOffset(this, t), this) : oc(this, e);
  };
}
function oc(e, t) {
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
function $w(e, t, n) {
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
    s = n, u = e.month(), c = e.date(), c = c === 29 && u === 1 && !$d(s) ? 28 : c, o ? r.setUTCFullYear(s, u, c) : r.setFullYear(s, u, c);
  }
}
function e4(e) {
  return e = Hr(e), Na(this[e]) ? this[e]() : this;
}
function t4(e, t) {
  if (typeof e == "object") {
    e = Mm(e);
    var n = YB(e), r, o = n.length;
    for (r = 0; r < o; r++)
      this[n[r].unit](e[n[r].unit]);
  } else if (e = Hr(e), Na(this[e]))
    return this[e](t);
  return this;
}
function n4(e, t) {
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
function $m(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var n = n4(t, 12);
  return e += (t - n) / 12, n === 1 ? $d(e) ? 29 : 28 : 31 - n % 7 % 2;
}
Je("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
Je("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
Je("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
Ye("M", on, qs);
Ye("MM", on, xr);
Ye("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
Ye("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
Vt(["M", "MM"], function(e, t) {
  t[Ya] = Ot(e) - 1;
});
Vt(["MMM", "MMMM"], function(e, t, n, r) {
  var o = n._locale.monthsParse(e, r, n._strict);
  o != null ? t[Ya] = o : mt(n).invalidMonth = e;
});
var r4 = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), Bw = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), jw = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, a4 = xc, o4 = xc;
function i4(e, t) {
  return e ? ta(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || jw).test(t) ? "format" : "standalone"][e.month()] : ta(this._months) ? this._months : this._months.standalone;
}
function s4(e, t) {
  return e ? ta(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[jw.test(t) ? "format" : "standalone"][e.month()] : ta(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function l4(e, t, n) {
  var r, o, s, u = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r)
      s = ka([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(
        s,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[r] = this.months(s, "").toLocaleLowerCase();
  return n ? t === "MMM" ? (o = gn.call(this._shortMonthsParse, u), o !== -1 ? o : null) : (o = gn.call(this._longMonthsParse, u), o !== -1 ? o : null) : t === "MMM" ? (o = gn.call(this._shortMonthsParse, u), o !== -1 ? o : (o = gn.call(this._longMonthsParse, u), o !== -1 ? o : null)) : (o = gn.call(this._longMonthsParse, u), o !== -1 ? o : (o = gn.call(this._shortMonthsParse, u), o !== -1 ? o : null));
}
function c4(e, t, n) {
  var r, o, s;
  if (this._monthsParseExact)
    return l4.call(this, e, t, n);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
    if (o = ka([2e3, r]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp(
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
function Ww(e, t) {
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = Ot(t);
    else if (t = e.localeData().monthsParse(t), !Ja(t))
      return e;
  }
  var n = t, r = e.date();
  return r = r < 29 ? r : Math.min(r, $m(e.year(), n)), e._isUTC ? e._d.setUTCMonth(n, r) : e._d.setMonth(n, r), e;
}
function Uw(e) {
  return e != null ? (Ww(this, e), Le.updateOffset(this, !0), this) : oc(this, "Month");
}
function u4() {
  return $m(this.year(), this.month());
}
function d4(e) {
  return this._monthsParseExact ? (Mt(this, "_monthsRegex") || zw.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (Mt(this, "_monthsShortRegex") || (this._monthsShortRegex = a4), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function f4(e) {
  return this._monthsParseExact ? (Mt(this, "_monthsRegex") || zw.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (Mt(this, "_monthsRegex") || (this._monthsRegex = o4), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function zw() {
  function e(d, p) {
    return p.length - d.length;
  }
  var t = [], n = [], r = [], o, s, u, c;
  for (o = 0; o < 12; o++)
    s = ka([2e3, o]), u = Ga(this.monthsShort(s, "")), c = Ga(this.months(s, "")), t.push(u), n.push(c), r.push(c), r.push(u);
  t.sort(e), n.sort(e), r.sort(e), this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function p4(e, t, n, r, o, s, u) {
  var c;
  return e < 100 && e >= 0 ? (c = new Date(e + 400, t, n, r, o, s, u), isFinite(c.getFullYear()) && c.setFullYear(e)) : c = new Date(e, t, n, r, o, s, u), c;
}
function ic(e) {
  var t, n;
  return e < 100 && e >= 0 ? (n = Array.prototype.slice.call(arguments), n[0] = e + 400, t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function ed(e, t, n) {
  var r = 7 + t - n, o = (7 + ic(e, 0, r).getUTCDay() - t) % 7;
  return -o + r - 1;
}
function Hw(e, t, n, r, o) {
  var s = (7 + n - r) % 7, u = ed(e, r, o), c = 1 + 7 * (t - 1) + s + u, d, p;
  return c <= 0 ? (d = e - 1, p = Al(d) + c) : c > Al(e) ? (d = e + 1, p = c - Al(e)) : (d = e, p = c), {
    year: d,
    dayOfYear: p
  };
}
function sc(e, t, n) {
  var r = ed(e.year(), t, n), o = Math.floor((e.dayOfYear() - r - 1) / 7) + 1, s, u;
  return o < 1 ? (u = e.year() - 1, s = o + Ka(u, t, n)) : o > Ka(e.year(), t, n) ? (s = o - Ka(e.year(), t, n), u = e.year() + 1) : (u = e.year(), s = o), {
    week: s,
    year: u
  };
}
function Ka(e, t, n) {
  var r = ed(e, t, n), o = ed(e + 1, t, n);
  return (Al(e) - r + o) / 7;
}
Je("w", ["ww", 2], "wo", "week");
Je("W", ["WW", 2], "Wo", "isoWeek");
Ye("w", on, qs);
Ye("ww", on, xr);
Ye("W", on, qs);
Ye("WW", on, xr);
Cc(
  ["w", "ww", "W", "WW"],
  function(e, t, n, r) {
    t[r.substr(0, 1)] = Ot(e);
  }
);
function h4(e) {
  return sc(e, this._week.dow, this._week.doy).week;
}
var m4 = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function g4() {
  return this._week.dow;
}
function v4() {
  return this._week.doy;
}
function y4(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function b4(e) {
  var t = sc(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
Je("d", 0, "do", "day");
Je("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
Je("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
Je("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
Je("e", 0, 0, "weekday");
Je("E", 0, 0, "isoWeekday");
Ye("d", on);
Ye("e", on);
Ye("E", on);
Ye("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
Ye("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
Ye("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
Cc(["dd", "ddd", "dddd"], function(e, t, n, r) {
  var o = n._locale.weekdaysParse(e, r, n._strict);
  o != null ? t.d = o : mt(n).invalidWeekday = e;
});
Cc(["d", "e", "E"], function(e, t, n, r) {
  t[r] = Ot(e);
});
function _4(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function w4(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function Bm(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var E4 = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Yw = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), x4 = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), C4 = xc, O4 = xc, S4 = xc;
function T4(e, t) {
  var n = ta(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? Bm(n, this._week.dow) : e ? n[e.day()] : n;
}
function P4(e) {
  return e === !0 ? Bm(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function k4(e) {
  return e === !0 ? Bm(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function N4(e, t, n) {
  var r, o, s, u = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r)
      s = ka([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(
        s,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(
        s,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(s, "").toLocaleLowerCase();
  return n ? t === "dddd" ? (o = gn.call(this._weekdaysParse, u), o !== -1 ? o : null) : t === "ddd" ? (o = gn.call(this._shortWeekdaysParse, u), o !== -1 ? o : null) : (o = gn.call(this._minWeekdaysParse, u), o !== -1 ? o : null) : t === "dddd" ? (o = gn.call(this._weekdaysParse, u), o !== -1 || (o = gn.call(this._shortWeekdaysParse, u), o !== -1) ? o : (o = gn.call(this._minWeekdaysParse, u), o !== -1 ? o : null)) : t === "ddd" ? (o = gn.call(this._shortWeekdaysParse, u), o !== -1 || (o = gn.call(this._weekdaysParse, u), o !== -1) ? o : (o = gn.call(this._minWeekdaysParse, u), o !== -1 ? o : null)) : (o = gn.call(this._minWeekdaysParse, u), o !== -1 || (o = gn.call(this._weekdaysParse, u), o !== -1) ? o : (o = gn.call(this._shortWeekdaysParse, u), o !== -1 ? o : null));
}
function I4(e, t, n) {
  var r, o, s;
  if (this._weekdaysParseExact)
    return N4.call(this, e, t, n);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
    if (o = ka([2e3, 1]).day(r), n && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp(
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
function A4(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = oc(this, "Day");
  return e != null ? (e = _4(e, this.localeData()), this.add(e - t, "d")) : t;
}
function R4(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function M4(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = w4(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function D4(e) {
  return this._weekdaysParseExact ? (Mt(this, "_weekdaysRegex") || jm.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (Mt(this, "_weekdaysRegex") || (this._weekdaysRegex = C4), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function L4(e) {
  return this._weekdaysParseExact ? (Mt(this, "_weekdaysRegex") || jm.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (Mt(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = O4), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function F4(e) {
  return this._weekdaysParseExact ? (Mt(this, "_weekdaysRegex") || jm.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (Mt(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = S4), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function jm() {
  function e(h, m) {
    return m.length - h.length;
  }
  var t = [], n = [], r = [], o = [], s, u, c, d, p;
  for (s = 0; s < 7; s++)
    u = ka([2e3, 1]).day(s), c = Ga(this.weekdaysMin(u, "")), d = Ga(this.weekdaysShort(u, "")), p = Ga(this.weekdays(u, "")), t.push(c), n.push(d), r.push(p), o.push(c), o.push(d), o.push(p);
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
function Wm() {
  return this.hours() % 12 || 12;
}
function $4() {
  return this.hours() || 24;
}
Je("H", ["HH", 2], 0, "hour");
Je("h", ["hh", 2], 0, Wm);
Je("k", ["kk", 2], 0, $4);
Je("hmm", 0, 0, function() {
  return "" + Wm.apply(this) + Ta(this.minutes(), 2);
});
Je("hmmss", 0, 0, function() {
  return "" + Wm.apply(this) + Ta(this.minutes(), 2) + Ta(this.seconds(), 2);
});
Je("Hmm", 0, 0, function() {
  return "" + this.hours() + Ta(this.minutes(), 2);
});
Je("Hmmss", 0, 0, function() {
  return "" + this.hours() + Ta(this.minutes(), 2) + Ta(this.seconds(), 2);
});
function qw(e, t) {
  Je(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
qw("a", !0);
qw("A", !1);
function Vw(e, t) {
  return t._meridiemParse;
}
Ye("a", Vw);
Ye("A", Vw);
Ye("H", on, Fm);
Ye("h", on, qs);
Ye("k", on, qs);
Ye("HH", on, xr);
Ye("hh", on, xr);
Ye("kk", on, xr);
Ye("hmm", Dw);
Ye("hmmss", Lw);
Ye("Hmm", Dw);
Ye("Hmmss", Lw);
Vt(["H", "HH"], En);
Vt(["k", "kk"], function(e, t, n) {
  var r = Ot(e);
  t[En] = r === 24 ? 0 : r;
});
Vt(["a", "A"], function(e, t, n) {
  n._isPm = n._locale.isPM(e), n._meridiem = e;
});
Vt(["h", "hh"], function(e, t, n) {
  t[En] = Ot(e), mt(n).bigHour = !0;
});
Vt("hmm", function(e, t, n) {
  var r = e.length - 2;
  t[En] = Ot(e.substr(0, r)), t[Qr] = Ot(e.substr(r)), mt(n).bigHour = !0;
});
Vt("hmmss", function(e, t, n) {
  var r = e.length - 4, o = e.length - 2;
  t[En] = Ot(e.substr(0, r)), t[Qr] = Ot(e.substr(r, 2)), t[qa] = Ot(e.substr(o)), mt(n).bigHour = !0;
});
Vt("Hmm", function(e, t, n) {
  var r = e.length - 2;
  t[En] = Ot(e.substr(0, r)), t[Qr] = Ot(e.substr(r));
});
Vt("Hmmss", function(e, t, n) {
  var r = e.length - 4, o = e.length - 2;
  t[En] = Ot(e.substr(0, r)), t[Qr] = Ot(e.substr(r, 2)), t[qa] = Ot(e.substr(o));
});
function B4(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var j4 = /[ap]\.?m?\.?/i, W4 = Vs("Hours", !0);
function U4(e, t, n) {
  return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM";
}
var Gw = {
  calendar: NB,
  longDateFormat: MB,
  invalidDate: LB,
  ordinal: $B,
  dayOfMonthOrdinalParse: BB,
  relativeTime: WB,
  months: r4,
  monthsShort: Bw,
  week: m4,
  weekdays: E4,
  weekdaysMin: x4,
  weekdaysShort: Yw,
  meridiemParse: j4
}, ln = {}, vl = {}, lc;
function z4(e, t) {
  var n, r = Math.min(e.length, t.length);
  for (n = 0; n < r; n += 1)
    if (e[n] !== t[n])
      return n;
  return r;
}
function S0(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function H4(e) {
  for (var t = 0, n, r, o, s; t < e.length; ) {
    for (s = S0(e[t]).split("-"), n = s.length, r = S0(e[t + 1]), r = r ? r.split("-") : null; n > 0; ) {
      if (o = Bd(s.slice(0, n).join("-")), o)
        return o;
      if (r && r.length >= n && z4(s, r) >= n - 1)
        break;
      n--;
    }
    t++;
  }
  return lc;
}
function Y4(e) {
  return !!(e && e.match("^[^/\\\\]*$"));
}
function Bd(e) {
  var t = null, n;
  if (ln[e] === void 0 && typeof module < "u" && module && module.exports && Y4(e))
    try {
      t = lc._abbr, n = require, n("./locale/" + e), Io(t);
    } catch {
      ln[e] = null;
    }
  return ln[e];
}
function Io(e, t) {
  var n;
  return e && (nr(t) ? n = so(e) : n = Um(e, t), n ? lc = n : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), lc._abbr;
}
function Um(e, t) {
  if (t !== null) {
    var n, r = Gw;
    if (t.abbr = e, ln[e] != null)
      Iw(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), r = ln[e]._config;
    else if (t.parentLocale != null)
      if (ln[t.parentLocale] != null)
        r = ln[t.parentLocale]._config;
      else if (n = Bd(t.parentLocale), n != null)
        r = n._config;
      else
        return vl[t.parentLocale] || (vl[t.parentLocale] = []), vl[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return ln[e] = new Am(xh(r, t)), vl[e] && vl[e].forEach(function(o) {
      Um(o.name, o.config);
    }), Io(e), ln[e];
  } else
    return delete ln[e], null;
}
function q4(e, t) {
  if (t != null) {
    var n, r, o = Gw;
    ln[e] != null && ln[e].parentLocale != null ? ln[e].set(xh(ln[e]._config, t)) : (r = Bd(e), r != null && (o = r._config), t = xh(o, t), r == null && (t.abbr = e), n = new Am(t), n.parentLocale = ln[e], ln[e] = n), Io(e);
  } else
    ln[e] != null && (ln[e].parentLocale != null ? (ln[e] = ln[e].parentLocale, e === Io() && Io(e)) : ln[e] != null && delete ln[e]);
  return ln[e];
}
function so(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return lc;
  if (!ta(e)) {
    if (t = Bd(e), t)
      return t;
    e = [e];
  }
  return H4(e);
}
function V4() {
  return Ch(ln);
}
function zm(e) {
  var t, n = e._a;
  return n && mt(e).overflow === -2 && (t = n[Ya] < 0 || n[Ya] > 11 ? Ya : n[ga] < 1 || n[ga] > $m(n[Fn], n[Ya]) ? ga : n[En] < 0 || n[En] > 24 || n[En] === 24 && (n[Qr] !== 0 || n[qa] !== 0 || n[yi] !== 0) ? En : n[Qr] < 0 || n[Qr] > 59 ? Qr : n[qa] < 0 || n[qa] > 59 ? qa : n[yi] < 0 || n[yi] > 999 ? yi : -1, mt(e)._overflowDayOfYear && (t < Fn || t > ga) && (t = ga), mt(e)._overflowWeeks && t === -1 && (t = XB), mt(e)._overflowWeekday && t === -1 && (t = QB), mt(e).overflow = t), e;
}
var G4 = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, K4 = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Z4 = /Z|[+-]\d\d(?::?\d\d)?/, xu = [
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
], Mp = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], X4 = /^\/?Date\((-?\d+)/i, Q4 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, J4 = {
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
function Kw(e) {
  var t, n, r = e._i, o = G4.exec(r) || K4.exec(r), s, u, c, d, p = xu.length, h = Mp.length;
  if (o) {
    for (mt(e).iso = !0, t = 0, n = p; t < n; t++)
      if (xu[t][1].exec(o[1])) {
        u = xu[t][0], s = xu[t][2] !== !1;
        break;
      }
    if (u == null) {
      e._isValid = !1;
      return;
    }
    if (o[3]) {
      for (t = 0, n = h; t < n; t++)
        if (Mp[t][1].exec(o[3])) {
          c = (o[2] || " ") + Mp[t][0];
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
      if (Z4.exec(o[4]))
        d = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = u + (c || "") + (d || ""), Ym(e);
  } else
    e._isValid = !1;
}
function ej(e, t, n, r, o, s) {
  var u = [
    tj(e),
    Bw.indexOf(t),
    parseInt(n, 10),
    parseInt(r, 10),
    parseInt(o, 10)
  ];
  return s && u.push(parseInt(s, 10)), u;
}
function tj(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function nj(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function rj(e, t, n) {
  if (e) {
    var r = Yw.indexOf(e), o = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (r !== o)
      return mt(n).weekdayMismatch = !0, n._isValid = !1, !1;
  }
  return !0;
}
function aj(e, t, n) {
  if (e)
    return J4[e];
  if (t)
    return 0;
  var r = parseInt(n, 10), o = r % 100, s = (r - o) / 100;
  return s * 60 + o;
}
function Zw(e) {
  var t = Q4.exec(nj(e._i)), n;
  if (t) {
    if (n = ej(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !rj(t[1], n, e))
      return;
    e._a = n, e._tzm = aj(t[8], t[9], t[10]), e._d = ic.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), mt(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function oj(e) {
  var t = X4.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (Kw(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (Zw(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : Le.createFromInputFallback(e);
}
Le.createFromInputFallback = zr(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function ss(e, t, n) {
  return e ?? t ?? n;
}
function ij(e) {
  var t = new Date(Le.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function Hm(e) {
  var t, n, r = [], o, s, u;
  if (!e._d) {
    for (o = ij(e), e._w && e._a[ga] == null && e._a[Ya] == null && sj(e), e._dayOfYear != null && (u = ss(e._a[Fn], o[Fn]), (e._dayOfYear > Al(u) || e._dayOfYear === 0) && (mt(e)._overflowDayOfYear = !0), n = ic(u, 0, e._dayOfYear), e._a[Ya] = n.getUTCMonth(), e._a[ga] = n.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = r[t] = o[t];
    for (; t < 7; t++)
      e._a[t] = r[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[En] === 24 && e._a[Qr] === 0 && e._a[qa] === 0 && e._a[yi] === 0 && (e._nextDay = !0, e._a[En] = 0), e._d = (e._useUTC ? ic : p4).apply(
      null,
      r
    ), s = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[En] = 24), e._w && typeof e._w.d < "u" && e._w.d !== s && (mt(e).weekdayMismatch = !0);
  }
}
function sj(e) {
  var t, n, r, o, s, u, c, d, p;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (s = 1, u = 4, n = ss(
    t.GG,
    e._a[Fn],
    sc(an(), 1, 4).year
  ), r = ss(t.W, 1), o = ss(t.E, 1), (o < 1 || o > 7) && (d = !0)) : (s = e._locale._week.dow, u = e._locale._week.doy, p = sc(an(), s, u), n = ss(t.gg, e._a[Fn], p.year), r = ss(t.w, p.week), t.d != null ? (o = t.d, (o < 0 || o > 6) && (d = !0)) : t.e != null ? (o = t.e + s, (t.e < 0 || t.e > 6) && (d = !0)) : o = s), r < 1 || r > Ka(n, s, u) ? mt(e)._overflowWeeks = !0 : d != null ? mt(e)._overflowWeekday = !0 : (c = Hw(n, r, o, s, u), e._a[Fn] = c.year, e._dayOfYear = c.dayOfYear);
}
Le.ISO_8601 = function() {
};
Le.RFC_2822 = function() {
};
function Ym(e) {
  if (e._f === Le.ISO_8601) {
    Kw(e);
    return;
  }
  if (e._f === Le.RFC_2822) {
    Zw(e);
    return;
  }
  e._a = [], mt(e).empty = !0;
  var t = "" + e._i, n, r, o, s, u, c = t.length, d = 0, p, h;
  for (o = Aw(e._f, e._locale).match(Rm) || [], h = o.length, n = 0; n < h; n++)
    s = o[n], r = (t.match(GB(s, e)) || [])[0], r && (u = t.substr(0, t.indexOf(r)), u.length > 0 && mt(e).unusedInput.push(u), t = t.slice(
      t.indexOf(r) + r.length
    ), d += r.length), hs[s] ? (r ? mt(e).empty = !1 : mt(e).unusedTokens.push(s), ZB(s, r, e)) : e._strict && !r && mt(e).unusedTokens.push(s);
  mt(e).charsLeftOver = c - d, t.length > 0 && mt(e).unusedInput.push(t), e._a[En] <= 12 && mt(e).bigHour === !0 && e._a[En] > 0 && (mt(e).bigHour = void 0), mt(e).parsedDateParts = e._a.slice(0), mt(e).meridiem = e._meridiem, e._a[En] = lj(
    e._locale,
    e._a[En],
    e._meridiem
  ), p = mt(e).era, p !== null && (e._a[Fn] = e._locale.erasConvertYear(p, e._a[Fn])), Hm(e), zm(e);
}
function lj(e, t, n) {
  var r;
  return n == null ? t : e.meridiemHour != null ? e.meridiemHour(t, n) : (e.isPM != null && (r = e.isPM(n), r && t < 12 && (t += 12), !r && t === 12 && (t = 0)), t);
}
function cj(e) {
  var t, n, r, o, s, u, c = !1, d = e._f.length;
  if (d === 0) {
    mt(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (o = 0; o < d; o++)
    s = 0, u = !1, t = Im({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[o], Ym(t), Nm(t) && (u = !0), s += mt(t).charsLeftOver, s += mt(t).unusedTokens.length * 10, mt(t).score = s, c ? s < r && (r = s, n = t) : (r == null || s < r || u) && (r = s, n = t, u && (c = !0));
  Po(e, n || t);
}
function uj(e) {
  if (!e._d) {
    var t = Mm(e._i), n = t.day === void 0 ? t.date : t.day;
    e._a = kw(
      [t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond],
      function(r) {
        return r && parseInt(r, 10);
      }
    ), Hm(e);
  }
}
function dj(e) {
  var t = new Ec(zm(Xw(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function Xw(e) {
  var t = e._i, n = e._f;
  return e._locale = e._locale || so(e._l), t === null || n === void 0 && t === "" ? Ad({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), na(t) ? new Ec(zm(t)) : (wc(t) ? e._d = t : ta(n) ? cj(e) : n ? Ym(e) : fj(e), Nm(e) || (e._d = null), e));
}
function fj(e) {
  var t = e._i;
  nr(t) ? e._d = new Date(Le.now()) : wc(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? oj(e) : ta(t) ? (e._a = kw(t.slice(0), function(n) {
    return parseInt(n, 10);
  }), Hm(e)) : xi(t) ? uj(e) : Ja(t) ? e._d = new Date(t) : Le.createFromInputFallback(e);
}
function Qw(e, t, n, r, o) {
  var s = {};
  return (t === !0 || t === !1) && (r = t, t = void 0), (n === !0 || n === !1) && (r = n, n = void 0), (xi(e) && km(e) || ta(e) && e.length === 0) && (e = void 0), s._isAMomentObject = !0, s._useUTC = s._isUTC = o, s._l = n, s._i = e, s._f = t, s._strict = r, dj(s);
}
function an(e, t, n, r) {
  return Qw(e, t, n, r, !1);
}
var pj = zr(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = an.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : Ad();
  }
), hj = zr(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = an.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : Ad();
  }
);
function Jw(e, t) {
  var n, r;
  if (t.length === 1 && ta(t[0]) && (t = t[0]), !t.length)
    return an();
  for (n = t[0], r = 1; r < t.length; ++r)
    (!t[r].isValid() || t[r][e](n)) && (n = t[r]);
  return n;
}
function mj() {
  var e = [].slice.call(arguments, 0);
  return Jw("isBefore", e);
}
function gj() {
  var e = [].slice.call(arguments, 0);
  return Jw("isAfter", e);
}
var vj = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, yl = [
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
function yj(e) {
  var t, n = !1, r, o = yl.length;
  for (t in e)
    if (Mt(e, t) && !(gn.call(yl, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (r = 0; r < o; ++r)
    if (e[yl[r]]) {
      if (n)
        return !1;
      parseFloat(e[yl[r]]) !== Ot(e[yl[r]]) && (n = !0);
    }
  return !0;
}
function bj() {
  return this._isValid;
}
function _j() {
  return oa(NaN);
}
function jd(e) {
  var t = Mm(e), n = t.year || 0, r = t.quarter || 0, o = t.month || 0, s = t.week || t.isoWeek || 0, u = t.day || 0, c = t.hour || 0, d = t.minute || 0, p = t.second || 0, h = t.millisecond || 0;
  this._isValid = yj(t), this._milliseconds = +h + p * 1e3 + // 1000
  d * 6e4 + // 1000 * 60
  c * 1e3 * 60 * 60, this._days = +u + s * 7, this._months = +o + r * 3 + n * 12, this._data = {}, this._locale = so(), this._bubble();
}
function Du(e) {
  return e instanceof jd;
}
function Sh(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function wj(e, t, n) {
  var r = Math.min(e.length, t.length), o = Math.abs(e.length - t.length), s = 0, u;
  for (u = 0; u < r; u++)
    Ot(e[u]) !== Ot(t[u]) && s++;
  return s + o;
}
function eE(e, t) {
  Je(e, 0, 0, function() {
    var n = this.utcOffset(), r = "+";
    return n < 0 && (n = -n, r = "-"), r + Ta(~~(n / 60), 2) + t + Ta(~~n % 60, 2);
  });
}
eE("Z", ":");
eE("ZZ", "");
Ye("Z", Fd);
Ye("ZZ", Fd);
Vt(["Z", "ZZ"], function(e, t, n) {
  n._useUTC = !0, n._tzm = qm(Fd, e);
});
var Ej = /([\+\-]|\d\d)/gi;
function qm(e, t) {
  var n = (t || "").match(e), r, o, s;
  return n === null ? null : (r = n[n.length - 1] || [], o = (r + "").match(Ej) || ["-", 0, 0], s = +(o[1] * 60) + Ot(o[2]), s === 0 ? 0 : o[0] === "+" ? s : -s);
}
function Vm(e, t) {
  var n, r;
  return t._isUTC ? (n = t.clone(), r = (na(e) || wc(e) ? e.valueOf() : an(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + r), Le.updateOffset(n, !1), n) : an(e).local();
}
function Th(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
Le.updateOffset = function() {
};
function xj(e, t, n) {
  var r = this._offset || 0, o;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = qm(Fd, e), e === null)
        return this;
    } else Math.abs(e) < 16 && !n && (e = e * 60);
    return !this._isUTC && t && (o = Th(this)), this._offset = e, this._isUTC = !0, o != null && this.add(o, "m"), r !== e && (!t || this._changeInProgress ? rE(
      this,
      oa(e - r, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, Le.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? r : Th(this);
}
function Cj(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function Oj(e) {
  return this.utcOffset(0, e);
}
function Sj(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Th(this), "m")), this;
}
function Tj() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = qm(qB, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function Pj(e) {
  return this.isValid() ? (e = e ? an(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function kj() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function Nj() {
  if (!nr(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return Im(e, this), e = Xw(e), e._a ? (t = e._isUTC ? ka(e._a) : an(e._a), this._isDSTShifted = this.isValid() && wj(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function Ij() {
  return this.isValid() ? !this._isUTC : !1;
}
function Aj() {
  return this.isValid() ? this._isUTC : !1;
}
function tE() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var Rj = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, Mj = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function oa(e, t) {
  var n = e, r = null, o, s, u;
  return Du(e) ? n = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : Ja(e) || !isNaN(+e) ? (n = {}, t ? n[t] = +e : n.milliseconds = +e) : (r = Rj.exec(e)) ? (o = r[1] === "-" ? -1 : 1, n = {
    y: 0,
    d: Ot(r[ga]) * o,
    h: Ot(r[En]) * o,
    m: Ot(r[Qr]) * o,
    s: Ot(r[qa]) * o,
    ms: Ot(Sh(r[yi] * 1e3)) * o
    // the millisecond decimal point is included in the match
  }) : (r = Mj.exec(e)) ? (o = r[1] === "-" ? -1 : 1, n = {
    y: di(r[2], o),
    M: di(r[3], o),
    w: di(r[4], o),
    d: di(r[5], o),
    h: di(r[6], o),
    m: di(r[7], o),
    s: di(r[8], o)
  }) : n == null ? n = {} : typeof n == "object" && ("from" in n || "to" in n) && (u = Dj(
    an(n.from),
    an(n.to)
  ), n = {}, n.ms = u.milliseconds, n.M = u.months), s = new jd(n), Du(e) && Mt(e, "_locale") && (s._locale = e._locale), Du(e) && Mt(e, "_isValid") && (s._isValid = e._isValid), s;
}
oa.fn = jd.prototype;
oa.invalid = _j;
function di(e, t) {
  var n = e && parseFloat(e.replace(",", "."));
  return (isNaN(n) ? 0 : n) * t;
}
function T0(e, t) {
  var n = {};
  return n.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n;
}
function Dj(e, t) {
  var n;
  return e.isValid() && t.isValid() ? (t = Vm(t, e), e.isBefore(t) ? n = T0(e, t) : (n = T0(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : { milliseconds: 0, months: 0 };
}
function nE(e, t) {
  return function(n, r) {
    var o, s;
    return r !== null && !isNaN(+r) && (Iw(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), s = n, n = r, r = s), o = oa(n, r), rE(this, o, e), this;
  };
}
function rE(e, t, n, r) {
  var o = t._milliseconds, s = Sh(t._days), u = Sh(t._months);
  e.isValid() && (r = r ?? !0, u && Ww(e, oc(e, "Month") + u * n), s && $w(e, "Date", oc(e, "Date") + s * n), o && e._d.setTime(e._d.valueOf() + o * n), r && Le.updateOffset(e, s || u));
}
var Lj = nE(1, "add"), Fj = nE(-1, "subtract");
function aE(e) {
  return typeof e == "string" || e instanceof String;
}
function $j(e) {
  return na(e) || wc(e) || aE(e) || Ja(e) || jj(e) || Bj(e) || e === null || e === void 0;
}
function Bj(e) {
  var t = xi(e) && !km(e), n = !1, r = [
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
function jj(e) {
  var t = ta(e), n = !1;
  return t && (n = e.filter(function(r) {
    return !Ja(r) && aE(e);
  }).length === 0), t && n;
}
function Wj(e) {
  var t = xi(e) && !km(e), n = !1, r = [
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
function Uj(e, t) {
  var n = e.diff(t, "days", !0);
  return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
}
function zj(e, t) {
  arguments.length === 1 && (arguments[0] ? $j(arguments[0]) ? (e = arguments[0], t = void 0) : Wj(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var n = e || an(), r = Vm(n, this).startOf("day"), o = Le.calendarFormat(this, r) || "sameElse", s = t && (Na(t[o]) ? t[o].call(this, n) : t[o]);
  return this.format(
    s || this.localeData().calendar(o, this, an(n))
  );
}
function Hj() {
  return new Ec(this);
}
function Yj(e, t) {
  var n = na(e) ? e : an(e);
  return this.isValid() && n.isValid() ? (t = Hr(t) || "millisecond", t === "millisecond" ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function qj(e, t) {
  var n = na(e) ? e : an(e);
  return this.isValid() && n.isValid() ? (t = Hr(t) || "millisecond", t === "millisecond" ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf()) : !1;
}
function Vj(e, t, n, r) {
  var o = na(e) ? e : an(e), s = na(t) ? t : an(t);
  return this.isValid() && o.isValid() && s.isValid() ? (r = r || "()", (r[0] === "(" ? this.isAfter(o, n) : !this.isBefore(o, n)) && (r[1] === ")" ? this.isBefore(s, n) : !this.isAfter(s, n))) : !1;
}
function Gj(e, t) {
  var n = na(e) ? e : an(e), r;
  return this.isValid() && n.isValid() ? (t = Hr(t) || "millisecond", t === "millisecond" ? this.valueOf() === n.valueOf() : (r = n.valueOf(), this.clone().startOf(t).valueOf() <= r && r <= this.clone().endOf(t).valueOf())) : !1;
}
function Kj(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function Zj(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function Xj(e, t, n) {
  var r, o, s;
  if (!this.isValid())
    return NaN;
  if (r = Vm(e, this), !r.isValid())
    return NaN;
  switch (o = (r.utcOffset() - this.utcOffset()) * 6e4, t = Hr(t), t) {
    case "year":
      s = Lu(this, r) / 12;
      break;
    case "month":
      s = Lu(this, r);
      break;
    case "quarter":
      s = Lu(this, r) / 3;
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
function Lu(e, t) {
  if (e.date() < t.date())
    return -Lu(t, e);
  var n = (t.year() - e.year()) * 12 + (t.month() - e.month()), r = e.clone().add(n, "months"), o, s;
  return t - r < 0 ? (o = e.clone().add(n - 1, "months"), s = (t - r) / (r - o)) : (o = e.clone().add(n + 1, "months"), s = (t - r) / (o - r)), -(n + s) || 0;
}
Le.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
Le.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function Qj() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function Jj(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, n = t ? this.clone().utc() : this;
  return n.year() < 0 || n.year() > 9999 ? Mu(
    n,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : Na(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", Mu(n, "Z")) : Mu(
    n,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function eW() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", n, r, o, s;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), n = "[" + e + '("]', r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", o = "-MM-DD[T]HH:mm:ss.SSS", s = t + '[")]', this.format(n + r + o + s);
}
function tW(e) {
  e || (e = this.isUtc() ? Le.defaultFormatUtc : Le.defaultFormat);
  var t = Mu(this, e);
  return this.localeData().postformat(t);
}
function nW(e, t) {
  return this.isValid() && (na(e) && e.isValid() || an(e).isValid()) ? oa({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function rW(e) {
  return this.from(an(), e);
}
function aW(e, t) {
  return this.isValid() && (na(e) && e.isValid() || an(e).isValid()) ? oa({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function oW(e) {
  return this.to(an(), e);
}
function oE(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = so(e), t != null && (this._locale = t), this);
}
var iE = zr(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function sE() {
  return this._locale;
}
var td = 1e3, ms = 60 * td, nd = 60 * ms, lE = (365 * 400 + 97) * 24 * nd;
function gs(e, t) {
  return (e % t + t) % t;
}
function cE(e, t, n) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, n) - lE : new Date(e, t, n).valueOf();
}
function uE(e, t, n) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - lE : Date.UTC(e, t, n);
}
function iW(e) {
  var t, n;
  if (e = Hr(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (n = this._isUTC ? uE : cE, e) {
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
      t = this._d.valueOf(), t -= gs(
        t + (this._isUTC ? 0 : this.utcOffset() * ms),
        nd
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= gs(t, ms);
      break;
    case "second":
      t = this._d.valueOf(), t -= gs(t, td);
      break;
  }
  return this._d.setTime(t), Le.updateOffset(this, !0), this;
}
function sW(e) {
  var t, n;
  if (e = Hr(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (n = this._isUTC ? uE : cE, e) {
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
      t = this._d.valueOf(), t += nd - gs(
        t + (this._isUTC ? 0 : this.utcOffset() * ms),
        nd
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += ms - gs(t, ms) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += td - gs(t, td) - 1;
      break;
  }
  return this._d.setTime(t), Le.updateOffset(this, !0), this;
}
function lW() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function cW() {
  return Math.floor(this.valueOf() / 1e3);
}
function uW() {
  return new Date(this.valueOf());
}
function dW() {
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
function fW() {
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
function pW() {
  return this.isValid() ? this.toISOString() : null;
}
function hW() {
  return Nm(this);
}
function mW() {
  return Po({}, mt(this));
}
function gW() {
  return mt(this).overflow;
}
function vW() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
Je("N", 0, 0, "eraAbbr");
Je("NN", 0, 0, "eraAbbr");
Je("NNN", 0, 0, "eraAbbr");
Je("NNNN", 0, 0, "eraName");
Je("NNNNN", 0, 0, "eraNarrow");
Je("y", ["y", 1], "yo", "eraYear");
Je("y", ["yy", 2], 0, "eraYear");
Je("y", ["yyy", 3], 0, "eraYear");
Je("y", ["yyyy", 4], 0, "eraYear");
Ye("N", Gm);
Ye("NN", Gm);
Ye("NNN", Gm);
Ye("NNNN", PW);
Ye("NNNNN", kW);
Vt(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, n, r) {
    var o = n._locale.erasParse(e, r, n._strict);
    o ? mt(n).era = o : mt(n).invalidEra = e;
  }
);
Ye("y", Ys);
Ye("yy", Ys);
Ye("yyy", Ys);
Ye("yyyy", Ys);
Ye("yo", NW);
Vt(["y", "yy", "yyy", "yyyy"], Fn);
Vt(["yo"], function(e, t, n, r) {
  var o;
  n._locale._eraYearOrdinalRegex && (o = e.match(n._locale._eraYearOrdinalRegex)), n._locale.eraYearOrdinalParse ? t[Fn] = n._locale.eraYearOrdinalParse(e, o) : t[Fn] = parseInt(e, 10);
});
function yW(e, t) {
  var n, r, o, s = this._eras || so("en")._eras;
  for (n = 0, r = s.length; n < r; ++n) {
    switch (typeof s[n].since) {
      case "string":
        o = Le(s[n].since).startOf("day"), s[n].since = o.valueOf();
        break;
    }
    switch (typeof s[n].until) {
      case "undefined":
        s[n].until = 1 / 0;
        break;
      case "string":
        o = Le(s[n].until).startOf("day").valueOf(), s[n].until = o.valueOf();
        break;
    }
  }
  return s;
}
function bW(e, t, n) {
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
function _W(e, t) {
  var n = e.since <= e.until ? 1 : -1;
  return t === void 0 ? Le(e.since).year() : Le(e.since).year() + (t - e.offset) * n;
}
function wW() {
  var e, t, n, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
      return r[e].name;
  return "";
}
function EW() {
  var e, t, n, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
      return r[e].narrow;
  return "";
}
function xW() {
  var e, t, n, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
      return r[e].abbr;
  return "";
}
function CW() {
  var e, t, n, r, o = this.localeData().eras();
  for (e = 0, t = o.length; e < t; ++e)
    if (n = o[e].since <= o[e].until ? 1 : -1, r = this.clone().startOf("day").valueOf(), o[e].since <= r && r <= o[e].until || o[e].until <= r && r <= o[e].since)
      return (this.year() - Le(o[e].since).year()) * n + o[e].offset;
  return this.year();
}
function OW(e) {
  return Mt(this, "_erasNameRegex") || Km.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function SW(e) {
  return Mt(this, "_erasAbbrRegex") || Km.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function TW(e) {
  return Mt(this, "_erasNarrowRegex") || Km.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function Gm(e, t) {
  return t.erasAbbrRegex(e);
}
function PW(e, t) {
  return t.erasNameRegex(e);
}
function kW(e, t) {
  return t.erasNarrowRegex(e);
}
function NW(e, t) {
  return t._eraYearOrdinalRegex || Ys;
}
function Km() {
  var e = [], t = [], n = [], r = [], o, s, u, c, d, p = this.eras();
  for (o = 0, s = p.length; o < s; ++o)
    u = Ga(p[o].name), c = Ga(p[o].abbr), d = Ga(p[o].narrow), t.push(u), e.push(c), n.push(d), r.push(u), r.push(c), r.push(d);
  this._erasRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  );
}
Je(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
Je(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function Wd(e, t) {
  Je(0, [e, e.length], 0, t);
}
Wd("gggg", "weekYear");
Wd("ggggg", "weekYear");
Wd("GGGG", "isoWeekYear");
Wd("GGGGG", "isoWeekYear");
Ye("G", Ld);
Ye("g", Ld);
Ye("GG", on, xr);
Ye("gg", on, xr);
Ye("GGGG", Lm, Dm);
Ye("gggg", Lm, Dm);
Ye("GGGGG", Dd, Rd);
Ye("ggggg", Dd, Rd);
Cc(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, n, r) {
    t[r.substr(0, 2)] = Ot(e);
  }
);
Cc(["gg", "GG"], function(e, t, n, r) {
  t[r] = Le.parseTwoDigitYear(e);
});
function IW(e) {
  return dE.call(
    this,
    e,
    this.week(),
    this.weekday() + this.localeData()._week.dow,
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function AW(e) {
  return dE.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function RW() {
  return Ka(this.year(), 1, 4);
}
function MW() {
  return Ka(this.isoWeekYear(), 1, 4);
}
function DW() {
  var e = this.localeData()._week;
  return Ka(this.year(), e.dow, e.doy);
}
function LW() {
  var e = this.localeData()._week;
  return Ka(this.weekYear(), e.dow, e.doy);
}
function dE(e, t, n, r, o) {
  var s;
  return e == null ? sc(this, r, o).year : (s = Ka(e, r, o), t > s && (t = s), FW.call(this, e, t, n, r, o));
}
function FW(e, t, n, r, o) {
  var s = Hw(e, t, n, r, o), u = ic(s.year, 0, s.dayOfYear);
  return this.year(u.getUTCFullYear()), this.month(u.getUTCMonth()), this.date(u.getUTCDate()), this;
}
Je("Q", 0, "Qo", "quarter");
Ye("Q", Rw);
Vt("Q", function(e, t) {
  t[Ya] = (Ot(e) - 1) * 3;
});
function $W(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
Je("D", ["DD", 2], "Do", "date");
Ye("D", on, qs);
Ye("DD", on, xr);
Ye("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
Vt(["D", "DD"], ga);
Vt("Do", function(e, t) {
  t[ga] = Ot(e.match(on)[0]);
});
var fE = Vs("Date", !0);
Je("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
Ye("DDD", Md);
Ye("DDDD", Mw);
Vt(["DDD", "DDDD"], function(e, t, n) {
  n._dayOfYear = Ot(e);
});
function BW(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
Je("m", ["mm", 2], 0, "minute");
Ye("m", on, Fm);
Ye("mm", on, xr);
Vt(["m", "mm"], Qr);
var jW = Vs("Minutes", !1);
Je("s", ["ss", 2], 0, "second");
Ye("s", on, Fm);
Ye("ss", on, xr);
Vt(["s", "ss"], qa);
var WW = Vs("Seconds", !1);
Je("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
Je(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
Je(0, ["SSS", 3], 0, "millisecond");
Je(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
Je(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
Je(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
Je(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
Je(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
Je(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
Ye("S", Md, Rw);
Ye("SS", Md, xr);
Ye("SSS", Md, Mw);
var ko, pE;
for (ko = "SSSS"; ko.length <= 9; ko += "S")
  Ye(ko, Ys);
function UW(e, t) {
  t[yi] = Ot(("0." + e) * 1e3);
}
for (ko = "S"; ko.length <= 9; ko += "S")
  Vt(ko, UW);
pE = Vs("Milliseconds", !1);
Je("z", 0, 0, "zoneAbbr");
Je("zz", 0, 0, "zoneName");
function zW() {
  return this._isUTC ? "UTC" : "";
}
function HW() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var Ae = Ec.prototype;
Ae.add = Lj;
Ae.calendar = zj;
Ae.clone = Hj;
Ae.diff = Xj;
Ae.endOf = sW;
Ae.format = tW;
Ae.from = nW;
Ae.fromNow = rW;
Ae.to = aW;
Ae.toNow = oW;
Ae.get = e4;
Ae.invalidAt = gW;
Ae.isAfter = Yj;
Ae.isBefore = qj;
Ae.isBetween = Vj;
Ae.isSame = Gj;
Ae.isSameOrAfter = Kj;
Ae.isSameOrBefore = Zj;
Ae.isValid = hW;
Ae.lang = iE;
Ae.locale = oE;
Ae.localeData = sE;
Ae.max = hj;
Ae.min = pj;
Ae.parsingFlags = mW;
Ae.set = t4;
Ae.startOf = iW;
Ae.subtract = Fj;
Ae.toArray = dW;
Ae.toObject = fW;
Ae.toDate = uW;
Ae.toISOString = Jj;
Ae.inspect = eW;
typeof Symbol < "u" && Symbol.for != null && (Ae[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
Ae.toJSON = pW;
Ae.toString = Qj;
Ae.unix = cW;
Ae.valueOf = lW;
Ae.creationData = vW;
Ae.eraName = wW;
Ae.eraNarrow = EW;
Ae.eraAbbr = xW;
Ae.eraYear = CW;
Ae.year = Fw;
Ae.isLeapYear = JB;
Ae.weekYear = IW;
Ae.isoWeekYear = AW;
Ae.quarter = Ae.quarters = $W;
Ae.month = Uw;
Ae.daysInMonth = u4;
Ae.week = Ae.weeks = y4;
Ae.isoWeek = Ae.isoWeeks = b4;
Ae.weeksInYear = DW;
Ae.weeksInWeekYear = LW;
Ae.isoWeeksInYear = RW;
Ae.isoWeeksInISOWeekYear = MW;
Ae.date = fE;
Ae.day = Ae.days = A4;
Ae.weekday = R4;
Ae.isoWeekday = M4;
Ae.dayOfYear = BW;
Ae.hour = Ae.hours = W4;
Ae.minute = Ae.minutes = jW;
Ae.second = Ae.seconds = WW;
Ae.millisecond = Ae.milliseconds = pE;
Ae.utcOffset = xj;
Ae.utc = Oj;
Ae.local = Sj;
Ae.parseZone = Tj;
Ae.hasAlignedHourOffset = Pj;
Ae.isDST = kj;
Ae.isLocal = Ij;
Ae.isUtcOffset = Aj;
Ae.isUtc = tE;
Ae.isUTC = tE;
Ae.zoneAbbr = zW;
Ae.zoneName = HW;
Ae.dates = zr(
  "dates accessor is deprecated. Use date instead.",
  fE
);
Ae.months = zr(
  "months accessor is deprecated. Use month instead",
  Uw
);
Ae.years = zr(
  "years accessor is deprecated. Use year instead",
  Fw
);
Ae.zone = zr(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  Cj
);
Ae.isDSTShifted = zr(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  Nj
);
function YW(e) {
  return an(e * 1e3);
}
function qW() {
  return an.apply(null, arguments).parseZone();
}
function hE(e) {
  return e;
}
var Dt = Am.prototype;
Dt.calendar = IB;
Dt.longDateFormat = DB;
Dt.invalidDate = FB;
Dt.ordinal = jB;
Dt.preparse = hE;
Dt.postformat = hE;
Dt.relativeTime = UB;
Dt.pastFuture = zB;
Dt.set = kB;
Dt.eras = yW;
Dt.erasParse = bW;
Dt.erasConvertYear = _W;
Dt.erasAbbrRegex = SW;
Dt.erasNameRegex = OW;
Dt.erasNarrowRegex = TW;
Dt.months = i4;
Dt.monthsShort = s4;
Dt.monthsParse = c4;
Dt.monthsRegex = f4;
Dt.monthsShortRegex = d4;
Dt.week = h4;
Dt.firstDayOfYear = v4;
Dt.firstDayOfWeek = g4;
Dt.weekdays = T4;
Dt.weekdaysMin = k4;
Dt.weekdaysShort = P4;
Dt.weekdaysParse = I4;
Dt.weekdaysRegex = D4;
Dt.weekdaysShortRegex = L4;
Dt.weekdaysMinRegex = F4;
Dt.isPM = B4;
Dt.meridiem = U4;
function rd(e, t, n, r) {
  var o = so(), s = ka().set(r, t);
  return o[n](s, e);
}
function mE(e, t, n) {
  if (Ja(e) && (t = e, e = void 0), e = e || "", t != null)
    return rd(e, t, n, "month");
  var r, o = [];
  for (r = 0; r < 12; r++)
    o[r] = rd(e, r, n, "month");
  return o;
}
function Zm(e, t, n, r) {
  typeof e == "boolean" ? (Ja(t) && (n = t, t = void 0), t = t || "") : (t = e, n = t, e = !1, Ja(t) && (n = t, t = void 0), t = t || "");
  var o = so(), s = e ? o._week.dow : 0, u, c = [];
  if (n != null)
    return rd(t, (n + s) % 7, r, "day");
  for (u = 0; u < 7; u++)
    c[u] = rd(t, (u + s) % 7, r, "day");
  return c;
}
function VW(e, t) {
  return mE(e, t, "months");
}
function GW(e, t) {
  return mE(e, t, "monthsShort");
}
function KW(e, t, n) {
  return Zm(e, t, n, "weekdays");
}
function ZW(e, t, n) {
  return Zm(e, t, n, "weekdaysShort");
}
function XW(e, t, n) {
  return Zm(e, t, n, "weekdaysMin");
}
Io("en", {
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
Le.lang = zr(
  "moment.lang is deprecated. Use moment.locale instead.",
  Io
);
Le.langData = zr(
  "moment.langData is deprecated. Use moment.localeData instead.",
  so
);
var ja = Math.abs;
function QW() {
  var e = this._data;
  return this._milliseconds = ja(this._milliseconds), this._days = ja(this._days), this._months = ja(this._months), e.milliseconds = ja(e.milliseconds), e.seconds = ja(e.seconds), e.minutes = ja(e.minutes), e.hours = ja(e.hours), e.months = ja(e.months), e.years = ja(e.years), this;
}
function gE(e, t, n, r) {
  var o = oa(t, n);
  return e._milliseconds += r * o._milliseconds, e._days += r * o._days, e._months += r * o._months, e._bubble();
}
function JW(e, t) {
  return gE(this, e, t, 1);
}
function e6(e, t) {
  return gE(this, e, t, -1);
}
function P0(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function t6() {
  var e = this._milliseconds, t = this._days, n = this._months, r = this._data, o, s, u, c, d;
  return e >= 0 && t >= 0 && n >= 0 || e <= 0 && t <= 0 && n <= 0 || (e += P0(Ph(n) + t) * 864e5, t = 0, n = 0), r.milliseconds = e % 1e3, o = Mr(e / 1e3), r.seconds = o % 60, s = Mr(o / 60), r.minutes = s % 60, u = Mr(s / 60), r.hours = u % 24, t += Mr(u / 24), d = Mr(vE(t)), n += d, t -= P0(Ph(d)), c = Mr(n / 12), n %= 12, r.days = t, r.months = n, r.years = c, this;
}
function vE(e) {
  return e * 4800 / 146097;
}
function Ph(e) {
  return e * 146097 / 4800;
}
function n6(e) {
  if (!this.isValid())
    return NaN;
  var t, n, r = this._milliseconds;
  if (e = Hr(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + r / 864e5, n = this._months + vE(t), e) {
      case "month":
        return n;
      case "quarter":
        return n / 3;
      case "year":
        return n / 12;
    }
  else
    switch (t = this._days + Math.round(Ph(this._months)), e) {
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
function lo(e) {
  return function() {
    return this.as(e);
  };
}
var yE = lo("ms"), r6 = lo("s"), a6 = lo("m"), o6 = lo("h"), i6 = lo("d"), s6 = lo("w"), l6 = lo("M"), c6 = lo("Q"), u6 = lo("y"), d6 = yE;
function f6() {
  return oa(this);
}
function p6(e) {
  return e = Hr(e), this.isValid() ? this[e + "s"]() : NaN;
}
function Ui(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var h6 = Ui("milliseconds"), m6 = Ui("seconds"), g6 = Ui("minutes"), v6 = Ui("hours"), y6 = Ui("days"), b6 = Ui("months"), _6 = Ui("years");
function w6() {
  return Mr(this.days() / 7);
}
var za = Math.round, cs = {
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
function E6(e, t, n, r, o) {
  return o.relativeTime(t || 1, !!n, e, r);
}
function x6(e, t, n, r) {
  var o = oa(e).abs(), s = za(o.as("s")), u = za(o.as("m")), c = za(o.as("h")), d = za(o.as("d")), p = za(o.as("M")), h = za(o.as("w")), m = za(o.as("y")), g = s <= n.ss && ["s", s] || s < n.s && ["ss", s] || u <= 1 && ["m"] || u < n.m && ["mm", u] || c <= 1 && ["h"] || c < n.h && ["hh", c] || d <= 1 && ["d"] || d < n.d && ["dd", d];
  return n.w != null && (g = g || h <= 1 && ["w"] || h < n.w && ["ww", h]), g = g || p <= 1 && ["M"] || p < n.M && ["MM", p] || m <= 1 && ["y"] || ["yy", m], g[2] = t, g[3] = +e > 0, g[4] = r, E6.apply(null, g);
}
function C6(e) {
  return e === void 0 ? za : typeof e == "function" ? (za = e, !0) : !1;
}
function O6(e, t) {
  return cs[e] === void 0 ? !1 : t === void 0 ? cs[e] : (cs[e] = t, e === "s" && (cs.ss = t - 1), !0);
}
function S6(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var n = !1, r = cs, o, s;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (n = e), typeof t == "object" && (r = Object.assign({}, cs, t), t.s != null && t.ss == null && (r.ss = t.s - 1)), o = this.localeData(), s = x6(this, !n, r, o), n && (s = o.pastFuture(+this, s)), o.postformat(s);
}
var Dp = Math.abs;
function rs(e) {
  return (e > 0) - (e < 0) || +e;
}
function Ud() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = Dp(this._milliseconds) / 1e3, t = Dp(this._days), n = Dp(this._months), r, o, s, u, c = this.asSeconds(), d, p, h, m;
  return c ? (r = Mr(e / 60), o = Mr(r / 60), e %= 60, r %= 60, s = Mr(n / 12), n %= 12, u = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", d = c < 0 ? "-" : "", p = rs(this._months) !== rs(c) ? "-" : "", h = rs(this._days) !== rs(c) ? "-" : "", m = rs(this._milliseconds) !== rs(c) ? "-" : "", d + "P" + (s ? p + s + "Y" : "") + (n ? p + n + "M" : "") + (t ? h + t + "D" : "") + (o || r || e ? "T" : "") + (o ? m + o + "H" : "") + (r ? m + r + "M" : "") + (e ? m + u + "S" : "")) : "P0D";
}
var Nt = jd.prototype;
Nt.isValid = bj;
Nt.abs = QW;
Nt.add = JW;
Nt.subtract = e6;
Nt.as = n6;
Nt.asMilliseconds = yE;
Nt.asSeconds = r6;
Nt.asMinutes = a6;
Nt.asHours = o6;
Nt.asDays = i6;
Nt.asWeeks = s6;
Nt.asMonths = l6;
Nt.asQuarters = c6;
Nt.asYears = u6;
Nt.valueOf = d6;
Nt._bubble = t6;
Nt.clone = f6;
Nt.get = p6;
Nt.milliseconds = h6;
Nt.seconds = m6;
Nt.minutes = g6;
Nt.hours = v6;
Nt.days = y6;
Nt.weeks = w6;
Nt.months = b6;
Nt.years = _6;
Nt.humanize = S6;
Nt.toISOString = Ud;
Nt.toString = Ud;
Nt.toJSON = Ud;
Nt.locale = oE;
Nt.localeData = sE;
Nt.toIsoString = zr(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  Ud
);
Nt.lang = iE;
Je("X", 0, 0, "unix");
Je("x", 0, 0, "valueOf");
Ye("x", Ld);
Ye("X", VB);
Vt("X", function(e, t, n) {
  n._d = new Date(parseFloat(e) * 1e3);
});
Vt("x", function(e, t, n) {
  n._d = new Date(Ot(e));
});
//! moment.js
Le.version = "2.30.1";
TB(an);
Le.fn = Ae;
Le.min = mj;
Le.max = gj;
Le.now = vj;
Le.utc = ka;
Le.unix = YW;
Le.months = VW;
Le.isDate = wc;
Le.locale = Io;
Le.invalid = Ad;
Le.duration = oa;
Le.isMoment = na;
Le.weekdays = KW;
Le.parseZone = qW;
Le.localeData = so;
Le.isDuration = Du;
Le.monthsShort = GW;
Le.weekdaysMin = XW;
Le.defineLocale = Um;
Le.updateLocale = q4;
Le.locales = V4;
Le.weekdaysShort = ZW;
Le.normalizeUnits = Hr;
Le.relativeTimeRounding = C6;
Le.relativeTimeThreshold = O6;
Le.calendarFormat = Uj;
Le.prototype = Ae;
Le.HTML5_FMT = {
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
function T6(e) {
  if (e != null) {
    const t = e.replace(/[^\d]/g, "");
    return t.length === 10 ? t.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3") : t.length === 11 ? t.replace(/(\d{1})(\d{3})(\d{3})(\d{4})/, "$1 ($2) $3-$4") : e;
  }
  return e;
}
function k0(e, t = !1, n = !1, r = !1) {
  const o = new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "dop"
  });
  if ([null, "", void 0].includes(e) && !r || !n && parseFloat(e || 0) === 0) return "";
  const s = o.format(e).replace("DOP", "");
  return t ? s.split(".")[0] : s;
}
function P6(e, t = !1, n = !1) {
  const r = new Intl.NumberFormat("ja-JP", {
    maximumSignificantDigits: 14,
    style: "currency",
    currency: "dop"
  });
  return [null, "", void 0].includes(e) && !n || !t && parseFloat(e || 0) === 0 ? "" : r.format(e).replace("DOP", "");
}
function bE(e, t) {
  const n = new Date(e);
  let r = /* @__PURE__ */ new Date();
  if (!A.isEmpty(e)) {
    A.isEmpty(t) || (r = new Date(t));
    const o = parseInt((r - n) / (1e3 * 60 * 60 * 24), 10), s = parseInt(Math.abs(n - r) / (1e3 * 60 * 60) % 24, 10), u = parseInt(Math.abs(r.getTime() - n.getTime()) / (1e3 * 60) % 60, 10), c = parseInt(Math.abs(r.getTime() - n.getTime()) / 1e3 % 60, 10);
    let d = "";
    return o === 0 ? s === 0 ? u === 0 ? d = `${String(c)}s` : d = `${String(u)}m ${String(c)}s` : d = `${String(s)}h ${String(u)}m ${String(c)}s` : d = `${String(o)}d ${String(s)}h ${String(u)}m ${String(c)}s`, d;
  }
  return "";
}
function k6(e) {
  if (e) {
    const t = new Date(e).getTime(), r = (/* @__PURE__ */ new Date()).getTime() - t, o = parseInt(r / (1e3 * 60 * 60 * 24), 10);
    return o === 0 ? null : o;
  }
  return null;
}
function Rr(e, t = !1, n = !1, r = !1, o = !1, s = !1, u = !1) {
  if (!A.isEmpty(e) && e !== null) {
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
      return Le(e, "DD/MM/YYYY").format("DD/MM/YYYY");
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
    }) : Le(e).format("DD/MM/YYYY");
  }
  return e;
}
function Ol(e, t) {
  let n = e;
  return t && t.forEach((r) => {
    r.onName === e && (n = String(r.translate));
  }), n;
}
function N6(e, t, n) {
  return A.map(e, (o, s) => ({ key: s + 1, text: A.get(o, t, ""), value: A.get(o, n, "") }));
}
function Ao(e) {
  let t = e.split(",").join(".");
  if (t.split(".").length > 2) {
    const n = t.split(".");
    t = `${n[0]}:${A.takeRight(n, n.length - 1).join(".")}`;
  }
  return t;
}
function bl(e, t = 768, n = 55, r = 10, o = 10) {
  if (e >= t)
    return n;
  const s = t - e, u = Math.floor(s / r), c = n - u;
  return Math.max(c, o);
}
const I6 = "_headerTable_1sdq3_1", A6 = "_tableCellHeader_1sdq3_13", _l = {
  headerTable: I6,
  tableCellHeader: A6
}, Xm = ({
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
  const [p, h] = st([]), [m, g] = st([]), [y, b] = st(""), [_, w] = st("");
  Zt(() => {
    x(), b(t.orderDir === "desc" ? "descending" : "ascending"), w(t.orderKey);
  }, [t, y, _]), Zt(() => {
    x();
  }, [s, e]);
  const N = (I) => {
    const O = y === "descending" ? "ascending" : "descending";
    let S;
    A.isEmpty(I) || (S = Ao(I));
    const C = {
      ...t,
      page: 1,
      orderKey: S,
      orderDir: O === "descending" ? "desc" : "asc"
    };
    b(O), w(S), A.isEmpty(C) || (n(C), r(C));
  }, F = () => {
    const I = {
      ...t,
      rows: c
    };
    u(!s), r(I, !1, !s, !0);
  }, x = ({ subColumns: I = [], multStatus: O = !1 } = {}) => {
    let S = e;
    A.isEmpty(I) || (S = I);
    let C = !1, T = [];
    const R = S.map(
      ({
        key: B,
        label: U,
        width: te,
        headerPosition: z,
        multipleColumns: ne = [],
        multiple: fe = !1,
        action: ge = [],
        canSort: Pe = !0,
        twoLines: se = !1,
        line1: me = {},
        line2: J = {},
        hidden: re = !1,
        color: ae = "hsl(0, 0%, 80%)",
        style: ye = {},
        orderKey: Se
      }, Ce) => {
        let pe, ke;
        return A.isEmpty(B) || (pe = Ao(B)), ke = pe, A.isEmpty(Se) || (ke = Ao(Se)), re ? null : !A.isEmpty(ne) && A.isEmpty(I) ? (C = !0, T = [...T, ...ne], /* @__PURE__ */ P(
          bt.HeaderCell,
          {
            style: { backgroundColor: ae },
            className: _l.tableCellHeader,
            colSpan: ne.length,
            textAlign: z || "center",
            children: U
          },
          Ce
        )) : fe ? /* @__PURE__ */ P(
          bt.HeaderCell,
          {
            style: { backgroundColor: ae, ...ye },
            className: _l.tableCellHeader,
            textAlign: "center",
            onClick: F,
            children: /* @__PURE__ */ P(Gn, { checked: s })
          },
          Ce
        ) : se ? /* @__PURE__ */ oe(
          bt.HeaderCell,
          {
            rowSpan: !A.isEmpty(ne) && A.isEmpty(I) ? "1" : "2",
            style: { backgroundColor: ae },
            className: _l.tableCellHeader,
            textAlign: z || "center",
            sorted: Pe && ke === _ ? y : null,
            onClick: Pe ? () => {
              N(ke);
            } : null,
            width: te || 1,
            children: [
              /* @__PURE__ */ oe("div", { children: [
                " ",
                A.get(me, "label", "")
              ] }),
              /* @__PURE__ */ oe("div", { children: [
                " ",
                A.get(J, "label", "")
              ] })
            ]
          },
          Ce
        ) : !A.isEmpty(ge) && o ? null : /* @__PURE__ */ P(
          bt.HeaderCell,
          {
            rowSpan: !A.isEmpty(ne) && A.isEmpty(I) ? "1" : "2",
            style: { backgroundColor: ae, ...ye },
            className: _l.tableCellHeader,
            textAlign: z || "center",
            sorted: Pe && ke === _ ? y : null,
            onClick: Pe ? () => {
              N(ke);
            } : null,
            width: d ? void 0 : te || 1,
            children: U
          },
          Ce
        );
      }
    );
    O || h(/* @__PURE__ */ P(bt.Row, { children: R })), O && g(/* @__PURE__ */ P(bt.Row, { children: R })), C && x({
      subColumns: T,
      multStatus: C
    });
  };
  return /* @__PURE__ */ oe(bt.Header, { className: _l.headerTable, children: [
    p,
    m
  ] });
};
Xm.propTypes = {
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
var _E = {};
Object.defineProperty(_E, "__esModule", { value: !0 });
var R6 = Q;
function M6(e) {
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
var xo = /* @__PURE__ */ M6(R6), kh = function() {
  return kh = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, kh.apply(this, arguments);
};
function D6(e) {
  var t = e.bgColor, n = t === void 0 ? "#6a1b9a" : t, r = e.height, o = r === void 0 ? "20px" : r, s = e.width, u = s === void 0 ? "100%" : s, c = e.borderRadius, d = c === void 0 ? "50px" : c, p = e.labelAlignment, h = p === void 0 ? "right" : p, m = e.baseBgColor, g = m === void 0 ? "#e0e0de" : m, y = e.labelColor, b = y === void 0 ? "#fff" : y, _ = e.labelSize, w = _ === void 0 ? "15px" : _, N = e.isLabelVisible, F = N === void 0 ? !0 : N, x = e.dir, I = x === void 0 ? "ltr" : x, O = e.ariaValuemin, S = O === void 0 ? 0 : O, C = e.ariaValuemax, T = C === void 0 ? 100 : C, R = e.ariaValuetext, B = R === void 0 ? null : R, U = e.maxCompleted, te = U === void 0 ? 100 : U, z = e.animateOnRender, ne = z === void 0 ? !1 : z, fe = e.initCompletedOnAnimation, ge = fe === void 0 ? 0 : fe, Pe = e.isIndeterminate, se = Pe === void 0 ? !1 : Pe, me = e.completed, J = e.margin, re = e.padding, ae = e.customLabelStyles, ye = e.transitionDuration, Se = e.transitionTimingFunction, Ce = e.className, pe = e.customLabel, ke = e.barContainerClassName, $e = e.completedClassName, W = e.labelClassName, H = function(Re) {
    return Re === "left" ? "flex-start" : Re === "center" ? "center" : Re === "right" ? "flex-end" : null;
  }, $ = H(h), D = typeof ge == "number" ? "".concat(ge, "%") : ge, G = function(Re, Be) {
    if (Re) {
      var Fe = Number(Be) / Re;
      return Fe > 1 ? "100%" : "".concat(Fe * 100, "%");
    }
    return D;
  }, Z = G(te, me), le = xo.useState(D), Ne = le[0], de = le[1], xe = {
    height: o,
    background: g,
    borderRadius: d,
    padding: re,
    width: u,
    margin: J,
    overflow: "hidden"
  }, ue = {
    height: o,
    width: se ? "100%" : ne ? Ne : Z,
    background: n,
    transition: se ? "none" : "width ".concat(ye || "1s", " ").concat(Se || "ease-in-out"),
    borderRadius: "inherit",
    display: "flex",
    alignItems: "center",
    justifyContent: h !== "outside" && $ ? $ : "normal",
    animation: se ? "indeterminate 1.5s infinite linear" : "none"
  }, q = kh({ padding: h === "outside" ? "0 0 0 5px" : "5px", color: b, fontWeight: "bold", fontSize: w, display: F ? "initial" : "none" }, ae), ee = {
    display: h === "outside" ? "flex" : "initial",
    alignItems: h === "outside" ? "center" : "initial"
  }, we = typeof me == "number" ? "".concat(me, "%") : "".concat(me), Te = pe || we;
  return xo.useEffect(function() {
    ne && !se && requestAnimationFrame(function() {
      return de(Z);
    });
  }, [Z, ne, se]), xo.createElement(
    "div",
    { style: Ce ? void 0 : ee, className: Ce, dir: I, role: "progressbar", "aria-valuenow": se ? void 0 : parseFloat(Te), "aria-valuemin": S, "aria-valuemax": T, "aria-valuetext": "".concat(B === null ? Te : B) },
    xo.createElement(
      "div",
      { style: ke ? void 0 : xe, className: ke },
      xo.createElement("div", { style: $e ? void 0 : ue, className: $e }, h !== "outside" && xo.createElement("span", { style: W ? void 0 : q, className: W }, Te))
    ),
    h === "outside" && xo.createElement("span", { style: W ? void 0 : q, className: W }, Te),
    xo.createElement("style", null, `
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
var L6 = _E.default = D6;
const Fu = (e, t, n) => {
  if (A.isEmpty(n))
    return e[t];
  if (e[t]) {
    const r = A.takeRight(n, n.length - 1);
    return Fu(e[t], n[0], r);
  }
  return "";
};
function Yt(e, t, n = !1, r) {
  if (e) {
    if (r)
      return Fu(t, e, null);
    let o = e.split(".");
    if (o.length < 2 && (o = e.split(","), o.length >= 2))
      return Fu(t, o[0], null);
    const s = A.takeRight(o, o.length - 1), u = Fu(t, o[0], s);
    return [null, "", void 0].includes(u) && n ? 0 : u;
  }
  return n ? 0 : null;
}
const F6 = "_emptyChat_1ablf_3", $6 = "_emptyDataIcon_1ablf_13", B6 = "_groupHover_1ablf_29", j6 = "_sumRow_1ablf_39", W6 = "_cell_1ablf_51", U6 = "_cellButton_1ablf_61", z6 = "_ButtonIcon_1ablf_75", H6 = "_ButtonLink_1ablf_95", Y6 = "_towLineRow_1ablf_117", q6 = "_noWrap_1ablf_127", V6 = "_progressBarLabel_1ablf_137", G6 = "_cardsWrapper_1ablf_157", K6 = "_popupContent_1ablf_225", Qt = {
  emptyChat: F6,
  emptyDataIcon: $6,
  groupHover: B6,
  sumRow: j6,
  cell: W6,
  cellButton: U6,
  ButtonIcon: z6,
  ButtonLink: H6,
  towLineRow: Y6,
  noWrap: q6,
  progressBarLabel: V6,
  cardsWrapper: G6,
  popupContent: K6
}, Z6 = (e, t, n = {}) => {
  if (A.isEmpty(t))
    return e;
  if (A.isEmpty(e))
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
}, X6 = "_cardsContainer_d29bq_1", Q6 = "_card_d29bq_1", J6 = "_cardHeader_d29bq_43", eU = "_cardField_d29bq_61", tU = "_cardLabel_d29bq_89", nU = "_cardValue_d29bq_103", rU = "_cardActionsMenu_d29bq_133", aU = "_cardMenuIcon_d29bq_157", oU = "_cardMenu_d29bq_157", iU = "_cardMenuPopupContent_d29bq_287", sU = "_cardMenuItem_d29bq_295", lU = "_cardMenuIconItem_d29bq_315", cU = "_cardMenuText_d29bq_335", uU = "_cardActionsMenuPopup_d29bq_351", dU = "_emptyState_d29bq_363", fU = "_emptyIcon_d29bq_375", pU = "_cardLine1_d29bq_387", hU = "_cardLine2_d29bq_403", mU = "_cardLine3_d29bq_419", gU = "_cardLine4_d29bq_435", vU = "_cardLine1Item_d29bq_451", yU = "_cardLine2Item_d29bq_453", bU = "_cardLine3Item_d29bq_455", _U = "_cardLine4Item_d29bq_457", wU = "_cardCheckbox_d29bq_467", EU = "_cardInlineField_d29bq_479", xU = "_cardInlineLabel_d29bq_491", CU = "_cardInlineValue_d29bq_505", ut = {
  cardsContainer: X6,
  card: Q6,
  cardHeader: J6,
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
  cardInlineField: EU,
  cardInlineLabel: xU,
  cardInlineValue: CU
}, wE = ({ rowData: e, columnsData: t, onHandlerTable: n, isPDF: r }) => {
  const [o, s] = st(!1), u = [];
  if (A.map(t, ({ action: d, key: p }) => {
    !A.isEmpty(d) && !r && A.map(d, (h) => {
      const { content: m, hidden: g, type: y, color: b = "hsl(0, 0%, 95%)", onClick: _, visible: w } = h;
      if (!g && !(typeof w == "function" && w(e) === !1) && (y === "icon" || y === "link")) {
        let N = m;
        y === "icon" && (m === "edit" ? N = "Editar" : m === "trash" || m === "delete" ? N = "Borrar" : m === "eye" ? N = "Ver" : m === "copy" && (N = "Copiar")), u.push({
          key: `${p}-${m}`,
          text: N,
          icon: y === "icon" ? m : null,
          color: y === "icon" ? b : null,
          onClick: () => {
            s(!1), n(_, e);
          }
        });
      }
    });
  }), A.isEmpty(u)) return null;
  const c = A.map(u, (d) => /* @__PURE__ */ oe(
    kn.Item,
    {
      className: ut.cardMenuItem,
      onClick: (p) => {
        p.stopPropagation(), d.onClick();
      },
      children: [
        d.icon && /* @__PURE__ */ P(
          We,
          {
            name: d.icon,
            className: ut.cardMenuIconItem,
            style: {
              color: d.color || "#6b7280"
            }
          }
        ),
        /* @__PURE__ */ P("span", { className: ut.cardMenuText, children: d.text })
      ]
    },
    d.key
  ));
  return /* @__PURE__ */ P(
    "div",
    {
      className: ut.cardActionsMenu,
      onDoubleClick: (d) => {
        d.stopPropagation();
      },
      children: /* @__PURE__ */ P(
        Er,
        {
          className: ut.cardActionsMenuPopup,
          trigger: /* @__PURE__ */ P(
            We,
            {
              name: "ellipsis vertical",
              size: "large",
              className: ut.cardMenuIcon,
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
          children: /* @__PURE__ */ P(Er.Content, { className: ut.cardMenuPopupContent, children: /* @__PURE__ */ P(kn, { vertical: !0, className: ut.cardMenu, children: c }) })
        }
      )
    }
  );
};
wE.propTypes = {
  rowData: l.object.isRequired,
  columnsData: l.array.isRequired,
  onHandlerTable: l.func.isRequired,
  isPDF: l.bool
};
const EE = ({
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
  onLoadMore: N,
  isLoadingMore: F = !1,
  hasMore: x,
  // Props para manejo automático de scroll infinito
  dataHandler: I = null,
  searchParams: O = null,
  totalRows: S = 0,
  mergeConfig: C = null
}) => {
  const T = Ln(null), R = Ln(null), [B, U] = st(!1), [te, z] = st(e), [ne, fe] = st(1), [ge, Pe] = st(!0), se = Ln(!1), me = Ln(O), J = Ln(!1), re = Ln(!1), ae = Ln(0), [ye, Se] = st(window.innerWidth);
  Zt(() => {
    const de = () => {
      Se(window.innerWidth);
    };
    return window.addEventListener("resize", de), () => {
      window.removeEventListener("resize", de);
    };
  }, []), Zt(() => {
    JSON.stringify(me.current) !== JSON.stringify(O) ? (z(e), fe(1), me.current = O, J.current = !1, ae.current = 1, re.current = !1, Pe(!0)) : J.current && ne > ae.current ? (e && e.length > 0 ? (z((xe) => {
      if (C)
        return Z6(xe, e, C);
      const ue = "id";
      if (xe.length > 0 && xe[0][ue] !== void 0) {
        const q = new Set(
          xe.map((we) => we[ue])
        ), ee = e.filter((we) => !q.has(we[ue]));
        return [...xe, ...ee];
      }
      return [...xe, ...e];
    }), ae.current = ne, re.current = !1) : (ae.current = ne, re.current = !0), J.current = !1) : ne === 1 && !J.current && e && (z(e), ae.current = 1);
  }, [e, O, C, ne]), Zt(() => {
    if (e !== void 0 && ge && !se.current && !B && !J.current) {
      if (e.length > 0) {
        const xe = setTimeout(() => {
          Pe(!1);
        }, 1e3);
        return () => {
          clearTimeout(xe);
        };
      }
      const de = setTimeout(() => {
        Pe(!1);
      }, 1500);
      return () => {
        clearTimeout(de);
      };
    }
  }, [e, ge, B]), Zt(() => {
    if (ge) {
      const de = setTimeout(() => {
        Pe(!1);
      }, 3e3);
      return () => {
        clearTimeout(de);
      };
    }
  }, [ge]);
  const Ce = (de, xe) => {
    if (A.isEmpty(de))
      return null;
    const ue = /* @__PURE__ */ P("span", { style: { marginLeft: "4px" }, children: /* @__PURE__ */ P(
      Er,
      {
        position: "bottom right",
        content: /* @__PURE__ */ P("div", { children: de }),
        trigger: /* @__PURE__ */ P(We, { name: "comment alternate outline", style: { color: "#286b92" } })
      }
    ) }, 1);
    return xe >= de.length ? de : /* @__PURE__ */ oe("span", { children: [
      `${de.slice(0, xe)}...`,
      ue
    ] });
  }, pe = (de, xe, ue = null) => {
    const {
      key: q,
      label: ee,
      format: we,
      endDateKey: Te = null,
      dataPosition: Re = "left",
      stringLength: Be = 20,
      boolLabels: Fe,
      translate: et,
      colorLabel: Ze,
      textColor: Ge = "#000000",
      stopDateHandler: Ve = () => {
      },
      onClick: Tt,
      render: ve
    } = de;
    if (ve && typeof ve == "function")
      return ve(xe);
    const It = Yt(q, xe, !1), At = A.isEmpty(Te) ? null : Yt(Te, xe), pt = bl(ye, 768, Be, 10, 10), nt = c({
      value: It,
      format: we,
      endDate: At,
      stringLength: pt,
      key: q,
      translate: et,
      colorLabel: Ze,
      onClick: Tt,
      rowData: xe,
      textColor: Ge,
      boolLabels: Fe,
      stopDateHandler: Ve
    });
    if (!(q === "id" || ee === "ID" || (q == null ? void 0 : q.toLowerCase().includes("id"))) && (A.isEmpty(nt) || nt === "-" || nt === null || nt === void 0))
      return null;
    const Ue = ue !== null ? ue : ee;
    return /* @__PURE__ */ oe("div", { className: ut.cardInlineField, children: [
      Ue && /* @__PURE__ */ oe("span", { className: ut.cardInlineLabel, children: [
        Ue,
        ":"
      ] }),
      /* @__PURE__ */ P("span", { className: ut.cardInlineValue, style: { textAlign: Re, color: Ge }, children: nt })
    ] });
  }, ke = (de, xe) => /* @__PURE__ */ P(wE, { rowData: de, columnsData: xe, onHandlerTable: s, isPDF: p }), $e = (de, xe) => {
    let ue = {};
    typeof r == "function" && (ue = r(de) || {});
    const ee = d === de ? { backgroundColor: o, ...ue } : ue;
    if (!A.isEmpty(h) || !A.isEmpty(m) || !A.isEmpty(g) || !A.isEmpty(y)) {
      const Re = A.find(t, { multiple: !0 }), Be = Re == null ? void 0 : Re.key, Fe = Be ? A.includes(_, de[Be]) : !1, et = [];
      Re && !A.isEmpty(h) && et.push(
        /* @__PURE__ */ P("div", { className: ut.cardCheckbox, children: /* @__PURE__ */ P(
          Gn,
          {
            checked: Fe,
            onChange: () => {
              b && b(de, Be);
            },
            onClick: (ve) => {
              ve.stopPropagation();
            }
          }
        ) }, "checkbox")
      ), A.map(h, (ve) => {
        const It = typeof ve == "string" ? ve : ve.key, At = typeof ve == "object" && ve.label !== void 0 ? ve.label : null, pt = typeof ve == "object" && ve.format !== void 0 ? ve.format : null, nt = A.find(t, (Gt) => Gt.key === It && !Gt.multiple && !Gt.hidden);
        if (nt && !nt.hidden && !nt.multiple) {
          const Gt = pt ? { ...nt, format: pt } : nt, Ue = pe(Gt, de, At);
          Ue && et.push(
            /* @__PURE__ */ P("div", { className: ut.cardLine1Item, children: Ue }, It)
          );
        }
      });
      const Ze = [];
      A.map(m, (ve) => {
        var Gt;
        if (typeof ve == "object" && typeof ve.render == "function") {
          const Ue = ve.render(de), Ft = typeof Ue == "object" && Ue.label !== void 0 ? Ue.label : ve.label || null;
          let tt = typeof Ue == "object" && Ue.value !== void 0 ? Ue.value : Ue;
          const un = typeof ve == "object" && ve.format !== void 0 ? ve.format : null, Zn = typeof ve == "object" && ve.stringLength !== void 0 ? ve.stringLength : 20, sa = typeof Ue == "object" && Ue.shouldTruncate === !0;
          if (un && typeof tt == "string")
            if (un === "truncate" && sa) {
              const la = bl(ye, 480, Zn, 1, 10);
              tt = Ce(tt, la);
            } else un !== "truncate" && (tt = c({
              value: tt,
              format: un,
              endDate: null,
              stringLength: Zn,
              key: ve.key || "",
              translate: null,
              colorLabel: null,
              onClick: null,
              rowData: de,
              textColor: "#000000",
              boolLabels: null,
              stopDateHandler: () => {
              }
            }));
          ((ve.key === "id" || ve.label === "ID" || ((Gt = ve.key) == null ? void 0 : Gt.toLowerCase().includes("id"))) && !A.isEmpty(tt) && tt !== "-" && tt !== null && tt !== void 0 || !A.isEmpty(tt) && tt !== "-" && tt !== null && tt !== void 0) && Ze.push(
            /* @__PURE__ */ P("div", { className: ut.cardLine2Item, children: /* @__PURE__ */ oe("div", { className: ut.cardInlineField, children: [
              Ft && /* @__PURE__ */ oe("span", { className: ut.cardInlineLabel, children: [
                Ft,
                ":"
              ] }),
              /* @__PURE__ */ P("span", { className: ut.cardInlineValue, children: tt })
            ] }) }, ve.key || "render")
          );
          return;
        }
        const It = typeof ve == "string" ? ve : ve.key, At = typeof ve == "object" && ve.label !== void 0 ? ve.label : null, pt = typeof ve == "object" && ve.format !== void 0 ? ve.format : null, nt = A.find(t, (Ue) => Ue.key === It && !Ue.multiple && !Ue.hidden);
        if (nt && !nt.hidden && !nt.multiple) {
          const Ue = pt ? { ...nt, format: pt } : nt, Ft = pe(Ue, de, At);
          Ft && Ze.push(
            /* @__PURE__ */ P("div", { className: ut.cardLine2Item, children: Ft }, It)
          );
        }
      });
      const Ge = [];
      A.map(g, (ve) => {
        var Gt;
        if (typeof ve == "object" && typeof ve.render == "function") {
          const Ue = ve.render(de), Ft = typeof Ue == "object" && Ue.label !== void 0 ? Ue.label : ve.label || null;
          let tt = typeof Ue == "object" && Ue.value !== void 0 ? Ue.value : Ue;
          const un = typeof ve == "object" && ve.format !== void 0 ? ve.format : null, Zn = typeof ve == "object" && ve.stringLength !== void 0 ? ve.stringLength : 20, sa = typeof Ue == "object" && Ue.shouldTruncate === !0;
          if (un && typeof tt == "string")
            if (un === "truncate" && sa) {
              const la = bl(ye, 480, Zn, 1, 10);
              tt = Ce(tt, la);
            } else un !== "truncate" && (tt = c({
              value: tt,
              format: un,
              endDate: null,
              stringLength: Zn,
              key: ve.key || "",
              translate: null,
              colorLabel: null,
              onClick: null,
              rowData: de,
              textColor: "#000000",
              boolLabels: null,
              stopDateHandler: () => {
              }
            }));
          ((ve.key === "id" || ve.label === "ID" || ((Gt = ve.key) == null ? void 0 : Gt.toLowerCase().includes("id"))) && !A.isEmpty(tt) && tt !== "-" && tt !== null && tt !== void 0 || !A.isEmpty(tt) && tt !== "-" && tt !== null && tt !== void 0) && Ge.push(
            /* @__PURE__ */ P("div", { className: ut.cardLine3Item, children: /* @__PURE__ */ oe("div", { className: ut.cardInlineField, children: [
              Ft && /* @__PURE__ */ oe("span", { className: ut.cardInlineLabel, children: [
                Ft,
                ":"
              ] }),
              /* @__PURE__ */ P("span", { className: ut.cardInlineValue, children: tt })
            ] }) }, ve.key || "render")
          );
          return;
        }
        const It = typeof ve == "string" ? ve : ve.key, At = typeof ve == "object" && ve.label !== void 0 ? ve.label : null, pt = typeof ve == "object" && ve.format !== void 0 ? ve.format : null, nt = A.find(t, (Ue) => Ue.key === It && !Ue.multiple && !Ue.hidden);
        if (nt && !nt.hidden && !nt.multiple) {
          const Ue = pt ? { ...nt, format: pt } : nt, Ft = pe(Ue, de, At);
          Ft && Ge.push(
            /* @__PURE__ */ P("div", { className: ut.cardLine3Item, children: Ft }, It)
          );
        }
      });
      const Ve = [];
      A.map(y, (ve) => {
        var Gt;
        if (typeof ve == "object" && typeof ve.render == "function") {
          const Ue = ve.render(de), Ft = typeof Ue == "object" && Ue.label !== void 0 ? Ue.label : ve.label || null;
          let tt = typeof Ue == "object" && Ue.value !== void 0 ? Ue.value : Ue;
          const un = typeof ve == "object" && ve.format !== void 0 ? ve.format : null, Zn = typeof ve == "object" && ve.stringLength !== void 0 ? ve.stringLength : 20, sa = typeof Ue == "object" && Ue.shouldTruncate === !0;
          if (un && typeof tt == "string")
            if (un === "truncate" && sa) {
              const la = bl(ye, 480, Zn, 1, 10);
              tt = Ce(tt, la);
            } else un !== "truncate" && (tt = c({
              value: tt,
              format: un,
              endDate: null,
              stringLength: Zn,
              key: ve.key || "",
              translate: null,
              colorLabel: null,
              onClick: null,
              rowData: de,
              textColor: "#000000",
              boolLabels: null,
              stopDateHandler: () => {
              }
            }));
          ((ve.key === "id" || ve.label === "ID" || ((Gt = ve.key) == null ? void 0 : Gt.toLowerCase().includes("id"))) && !A.isEmpty(tt) && tt !== "-" && tt !== null && tt !== void 0 || !A.isEmpty(tt) && tt !== "-" && tt !== null && tt !== void 0) && Ve.push(
            /* @__PURE__ */ P("div", { className: ut.cardLine4Item, children: /* @__PURE__ */ oe("div", { className: ut.cardInlineField, children: [
              Ft && /* @__PURE__ */ oe("span", { className: ut.cardInlineLabel, children: [
                Ft,
                ":"
              ] }),
              /* @__PURE__ */ P("span", { className: ut.cardInlineValue, children: tt })
            ] }) }, ve.key || "render")
          );
          return;
        }
        const It = typeof ve == "string" ? ve : ve.key, At = typeof ve == "object" && ve.label !== void 0 ? ve.label : null, pt = typeof ve == "object" && ve.format !== void 0 ? ve.format : null, nt = A.find(t, (Ue) => Ue.key === It && !Ue.multiple && !Ue.hidden);
        if (nt && !nt.hidden && !nt.multiple) {
          const Ue = pt ? { ...nt, format: pt } : nt, Ft = pe(Ue, de, At);
          Ft && Ve.push(
            /* @__PURE__ */ P("div", { className: ut.cardLine4Item, children: Ft }, It)
          );
        }
      });
      const Tt = ke(de, t);
      return /* @__PURE__ */ oe(
        "div",
        {
          className: ut.card,
          style: ee,
          role: "button",
          tabIndex: 0,
          onClick: () => {
            u(de);
          },
          onDoubleClick: () => {
            s("Watch", de);
          },
          onKeyPress: (ve) => {
            (ve.key === "Enter" || ve.key === " ") && u(de);
          },
          children: [
            Tt,
            !A.isEmpty(et) && /* @__PURE__ */ P("div", { className: ut.cardLine1, children: et }),
            !A.isEmpty(Ze) && /* @__PURE__ */ P("div", { className: ut.cardLine2, children: Ze }),
            !A.isEmpty(Ge) && /* @__PURE__ */ P("div", { className: ut.cardLine3, children: Ge }),
            !A.isEmpty(Ve) && /* @__PURE__ */ P("div", { className: ut.cardLine4, children: Ve })
          ]
        },
        xe
      );
    }
    const we = A.map(
      t,
      ({
        key: Re,
        label: Be,
        format: Fe,
        endDateKey: et = null,
        dataPosition: Ze = "left",
        hidden: Ge = !1,
        stringLength: Ve = 20,
        boolLabels: Tt,
        translate: ve,
        colorLabel: It,
        textColor: At = "#000000",
        stopDateHandler: pt = () => {
        },
        onClick: nt,
        render: Gt,
        multiple: Ue = !1
      }) => {
        if (Ge || Ue) return null;
        if (Gt && typeof Gt == "function")
          return /* @__PURE__ */ P("div", { className: ut.cardField, children: Gt(de) }, Re);
        const Ft = Yt(Re, de, !1), tt = A.isEmpty(et) ? null : Yt(et, de), un = bl(ye, 768, Ve, 10, 10), Zn = c({
          value: Ft,
          format: Fe,
          endDate: tt,
          stringLength: un,
          key: Re,
          translate: ve,
          colorLabel: It,
          onClick: nt,
          rowData: de,
          textColor: At,
          boolLabels: Tt,
          stopDateHandler: pt
        });
        return /* @__PURE__ */ oe("div", { className: ut.cardField, children: [
          /* @__PURE__ */ oe("div", { className: ut.cardLabel, children: [
            Be,
            ":"
          ] }),
          /* @__PURE__ */ P("div", { className: ut.cardValue, style: { textAlign: Ze, color: At }, children: Zn })
        ] }, Re);
      }
    ), Te = ke(de, t);
    return /* @__PURE__ */ oe(
      "div",
      {
        className: ut.card,
        style: ee,
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
          Te,
          we
        ]
      },
      xe
    );
  }, W = I ? te : e, $ = Xp(() => {
    if (A.isEmpty(W))
      return [];
    const de = [];
    return A.map(W, (xe, ue) => {
      if (A.isEmpty(n)) {
        const q = (xe == null ? void 0 : xe.id) !== void 0 ? xe.id : ue;
        de.push({
          type: "card",
          key: `card-${q}`,
          data: xe
        });
      } else {
        const q = Yt(n.headerTitle, xe, !1), ee = Yt(n.dataDetail, xe, !1);
        de.push({
          type: "header",
          key: `header-${ue}`,
          title: q
        }), A.map(ee, (we, Te) => {
          const Re = (we == null ? void 0 : we.id) !== void 0 ? we.id : `${ue}-${Te}`;
          de.push({
            type: "card",
            key: `card-${Re}`,
            data: we
          });
        });
      }
    }), de;
  }, [W, n])(), D = Xp(async () => {
    if (!I || !O || se.current || B || re.current)
      return;
    const de = ne + 1, xe = A.isEmpty(n) ? te.length : A.sumBy(te, (ue) => {
      const q = Yt(n.dataDetail, ue, !1);
      return (q == null ? void 0 : q.length) || 0;
    });
    if (S && xe >= S) {
      re.current = !0;
      return;
    }
    se.current = !0, U(!0), J.current = !0;
    try {
      await I({ ...O, page: de }, !1, !1), fe(de);
    } catch (ue) {
      console.error("Error loading more data:", ue), J.current = !1;
    } finally {
      U(!1), se.current = !1;
    }
  }, [I, O, ne, te, n, S, B]), G = I ? D : N, Z = I ? B : F, le = A.isEmpty(n) ? W.length : A.sumBy(W, (de) => {
    const xe = Yt(n.dataDetail, de, !1);
    return (xe == null ? void 0 : xe.length) || 0;
  }), Ne = re.current ? !1 : x ?? (S ? le < S : !0);
  return Zt(() => {
    fe(1), se.current = !1;
  }, [O]), Zt(() => {
    if (!w || !G || !R.current)
      return;
    let de = null, xe = null;
    const ue = () => {
      let ee = T.current;
      for (; ee && ee !== document.body; ) {
        const we = ee.className || "", Te = window.getComputedStyle(ee);
        if (we.includes("modalContent") || we.includes("scrolling") || Te.overflowY === "auto" || Te.overflowY === "scroll")
          return ee;
        ee = ee.parentElement;
      }
      return null;
    };
    return xe = setTimeout(() => {
      const ee = ue(), we = R.current;
      !we || Ne === !1 || $.length === 0 || "IntersectionObserver" in window && (de = new IntersectionObserver(
        (Te) => {
          const [Re] = Te;
          Re.isIntersecting && Ne !== !1 && !Z && !se.current && $.length > 0 && !ge && G();
        },
        {
          root: ee,
          rootMargin: "200px",
          threshold: 0
        }
      ), de.observe(we));
    }, 300), () => {
      xe && clearTimeout(xe), de && R.current && de.unobserve(R.current);
    };
  }, [w, G, Ne, Z, $.length, ge]), ge && A.isEmpty($) ? /* @__PURE__ */ P("div", { className: ut.cardsContainer, ref: T, children: /* @__PURE__ */ P("div", { className: ut.emptyState, children: /* @__PURE__ */ oe(
    "div",
    {
      style: {
        textAlign: "center",
        padding: "40px 20px",
        color: "#666",
        fontSize: "1.1rem"
      },
      children: [
        /* @__PURE__ */ P(We, { loading: !0, name: "spinner", size: "big" }),
        /* @__PURE__ */ P("div", { style: { marginTop: "15px" }, children: "Cargando..." })
      ]
    }
  ) }) }) : A.isEmpty($) ? /* @__PURE__ */ P("div", { className: ut.cardsContainer, ref: T, children: /* @__PURE__ */ P("div", { className: ut.emptyState, children: /* @__PURE__ */ oe(qn, { as: "h3", color: "grey", children: [
    /* @__PURE__ */ P("div", { className: ut.emptyIcon, children: /* @__PURE__ */ oe(We.Group, { size: "large", children: [
      /* @__PURE__ */ P(We, { name: "list alternate outline" }),
      /* @__PURE__ */ P(We, { corner: !0, name: "close", color: "red" })
    ] }) }),
    "No se ha encontrado ningun dato"
  ] }) }) }) : /* @__PURE__ */ oe("div", { className: ut.cardsContainer, ref: T, children: [
    A.map($, (de) => de.type === "header" ? /* @__PURE__ */ P("div", { className: ut.cardHeader, children: de.title }, de.key) : $e(de.data, de.key)),
    w && Ne !== !1 && /* @__PURE__ */ P("div", { ref: R, style: { height: "1px", width: "100%" } }),
    Z && !ge && /* @__PURE__ */ oe(
      "div",
      {
        style: {
          textAlign: "center",
          padding: "20px",
          color: "#666",
          fontSize: "1rem"
        },
        children: [
          /* @__PURE__ */ P(We, { loading: !0, name: "spinner" }),
          "Cargando más resultados..."
        ]
      }
    )
  ] });
};
EE.propTypes = {
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
function N0(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ie(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? N0(Object(n), !0).forEach(function(r) {
      OU(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : N0(Object(n)).forEach(function(r) {
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
const I0 = () => {
};
let Qm = {}, xE = {}, CE = null, OE = {
  mark: I0,
  measure: I0
};
try {
  typeof window < "u" && (Qm = window), typeof document < "u" && (xE = document), typeof MutationObserver < "u" && (CE = MutationObserver), typeof performance < "u" && (OE = performance);
} catch {
}
const {
  userAgent: A0 = ""
} = Qm.navigator || {}, Yo = Qm, rn = xE, R0 = CE, Cu = OE;
Yo.document;
const co = !!rn.documentElement && !!rn.head && typeof rn.addEventListener == "function" && typeof rn.createElement == "function", SE = ~A0.indexOf("MSIE") || ~A0.indexOf("Trident/");
var PU = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, kU = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, TE = {
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
}, PE = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], $n = "classic", zd = "duotone", IU = "sharp", AU = "sharp-duotone", kE = [$n, zd, IU, AU], RU = {
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
}, FU = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], M0 = {
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
}, D0 = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
}, Ou = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, UU = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], zU = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], HU = {
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
}, Nh = {
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
}, VU = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], Ih = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...UU, ...VU], GU = ["solid", "regular", "light", "thin", "duotone", "brands"], NE = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], KU = NE.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), ZU = [...Object.keys(qU), ...GU, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Ou.GROUP, Ou.SWAP_OPACITY, Ou.PRIMARY, Ou.SECONDARY].concat(NE.map((e) => "".concat(e, "x"))).concat(KU.map((e) => "w-".concat(e))), XU = {
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
const eo = "___FONT_AWESOME___", Ah = 16, IE = "fa", AE = "svg-inline--fa", Mi = "data-fa-i2svg", Rh = "data-fa-pseudo-element", QU = "data-fa-pseudo-element-pending", Jm = "data-prefix", eg = "data-icon", L0 = "fontawesome-i2svg", JU = "async", ez = ["HTML", "HEAD", "STYLE", "SCRIPT"], RE = (() => {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})();
function Oc(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[$n];
    }
  });
}
const ME = Ie({}, TE);
ME[$n] = Ie(Ie(Ie(Ie({}, {
  "fa-duotone": "duotone"
}), TE[$n]), M0.kit), M0["kit-duotone"]);
const tz = Oc(ME), Mh = Ie({}, LU);
Mh[$n] = Ie(Ie(Ie(Ie({}, {
  duotone: "fad"
}), Mh[$n]), D0.kit), D0["kit-duotone"]);
const F0 = Oc(Mh), Dh = Ie({}, Nh);
Dh[$n] = Ie(Ie({}, Dh[$n]), WU.kit);
const tg = Oc(Dh), Lh = Ie({}, YU);
Lh[$n] = Ie(Ie({}, Lh[$n]), BU.kit);
Oc(Lh);
const nz = PU, DE = "fa-layers-text", rz = kU, az = Ie({}, RU);
Oc(az);
const oz = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Lp = NU, iz = [...$U, ...ZU], Rl = Yo.FontAwesomeConfig || {};
function sz(e) {
  var t = rn.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function lz(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
rn && typeof rn.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [n, r] = t;
  const o = lz(sz(n));
  o != null && (Rl[r] = o);
});
const LE = {
  styleDefault: "solid",
  familyDefault: $n,
  cssPrefix: IE,
  replacementClass: AE,
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
Rl.familyPrefix && (Rl.cssPrefix = Rl.familyPrefix);
const Ls = Ie(Ie({}, LE), Rl);
Ls.autoReplaceSvg || (Ls.observeMutations = !1);
const Qe = {};
Object.keys(LE).forEach((e) => {
  Object.defineProperty(Qe, e, {
    enumerable: !0,
    set: function(t) {
      Ls[e] = t, Ml.forEach((n) => n(Qe));
    },
    get: function() {
      return Ls[e];
    }
  });
});
Object.defineProperty(Qe, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    Ls.cssPrefix = e, Ml.forEach((t) => t(Qe));
  },
  get: function() {
    return Ls.cssPrefix;
  }
});
Yo.FontAwesomeConfig = Qe;
const Ml = [];
function cz(e) {
  return Ml.push(e), () => {
    Ml.splice(Ml.indexOf(e), 1);
  };
}
const Co = Ah, _a = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function uz(e) {
  if (!e || !co)
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
const dz = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function cc() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += dz[Math.random() * 62 | 0];
  return t;
}
function Gs(e) {
  const t = [];
  for (let n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function ng(e) {
  return e.classList ? Gs(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function FE(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function fz(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(FE(e[n]), '" '), "").trim();
}
function Hd(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function rg(e) {
  return e.size !== _a.size || e.x !== _a.x || e.y !== _a.y || e.rotate !== _a.rotate || e.flipX || e.flipY;
}
function pz(e) {
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
function hz(e) {
  let {
    transform: t,
    width: n = Ah,
    height: r = Ah,
    startCentered: o = !1
  } = e, s = "";
  return o && SE ? s += "translate(".concat(t.x / Co - n / 2, "em, ").concat(t.y / Co - r / 2, "em) ") : o ? s += "translate(calc(-50% + ".concat(t.x / Co, "em), calc(-50% + ").concat(t.y / Co, "em)) ") : s += "translate(".concat(t.x / Co, "em, ").concat(t.y / Co, "em) "), s += "scale(".concat(t.size / Co * (t.flipX ? -1 : 1), ", ").concat(t.size / Co * (t.flipY ? -1 : 1), ") "), s += "rotate(".concat(t.rotate, "deg) "), s;
}
var mz = `:root, :host {
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
function $E() {
  const e = IE, t = AE, n = Qe.cssPrefix, r = Qe.replacementClass;
  let o = mz;
  if (n !== e || r !== t) {
    const s = new RegExp("\\.".concat(e, "\\-"), "g"), u = new RegExp("\\--".concat(e, "\\-"), "g"), c = new RegExp("\\.".concat(t), "g");
    o = o.replace(s, ".".concat(n, "-")).replace(u, "--".concat(n, "-")).replace(c, ".".concat(r));
  }
  return o;
}
let $0 = !1;
function Fp() {
  Qe.autoAddCss && !$0 && (uz($E()), $0 = !0);
}
var gz = {
  mixout() {
    return {
      dom: {
        css: $E,
        insertCss: Fp
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        Fp();
      },
      beforeI2svg() {
        Fp();
      }
    };
  }
};
const to = Yo || {};
to[eo] || (to[eo] = {});
to[eo].styles || (to[eo].styles = {});
to[eo].hooks || (to[eo].hooks = {});
to[eo].shims || (to[eo].shims = []);
var wa = to[eo];
const BE = [], jE = function() {
  rn.removeEventListener("DOMContentLoaded", jE), ad = 1, BE.map((e) => e());
};
let ad = !1;
co && (ad = (rn.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(rn.readyState), ad || rn.addEventListener("DOMContentLoaded", jE));
function vz(e) {
  co && (ad ? setTimeout(e, 0) : BE.push(e));
}
function Sc(e) {
  const {
    tag: t,
    attributes: n = {},
    children: r = []
  } = e;
  return typeof e == "string" ? FE(e) : "<".concat(t, " ").concat(fz(n), ">").concat(r.map(Sc).join(""), "</").concat(t, ">");
}
function B0(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var $p = function(t, n, r, o) {
  var s = Object.keys(t), u = s.length, c = n, d, p, h;
  for (r === void 0 ? (d = 1, h = t[s[0]]) : (d = 0, h = r); d < u; d++)
    p = s[d], h = c(h, t[p], p, t);
  return h;
};
function yz(e) {
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
function Fh(e) {
  const t = yz(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function bz(e, t) {
  const n = e.length;
  let r = e.charCodeAt(t), o;
  return r >= 55296 && r <= 56319 && n > t + 1 && (o = e.charCodeAt(t + 1), o >= 56320 && o <= 57343) ? (r - 55296) * 1024 + o - 56320 + 65536 : r;
}
function j0(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return !!r.icon ? t[r.iconName] = r.icon : t[n] = r, t;
  }, {});
}
function $h(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: r = !1
  } = n, o = j0(t);
  typeof wa.hooks.addPack == "function" && !r ? wa.hooks.addPack(e, j0(t)) : wa.styles[e] = Ie(Ie({}, wa.styles[e] || {}), o), e === "fas" && $h("fa", t);
}
const {
  styles: uc,
  shims: _z
} = wa, WE = Object.keys(tg), wz = WE.reduce((e, t) => (e[t] = Object.keys(tg[t]), e), {});
let ag = null, UE = {}, zE = {}, HE = {}, YE = {}, qE = {};
function Ez(e) {
  return ~iz.indexOf(e);
}
function xz(e, t) {
  const n = t.split("-"), r = n[0], o = n.slice(1).join("-");
  return r === e && o !== "" && !Ez(o) ? o : null;
}
const VE = () => {
  const e = (r) => $p(uc, (o, s, u) => (o[u] = $p(s, r, {}), o), {});
  UE = e((r, o, s) => (o[3] && (r[o[3]] = s), o[2] && o[2].filter((c) => typeof c == "number").forEach((c) => {
    r[c.toString(16)] = s;
  }), r)), zE = e((r, o, s) => (r[s] = s, o[2] && o[2].filter((c) => typeof c == "string").forEach((c) => {
    r[c] = s;
  }), r)), qE = e((r, o, s) => {
    const u = o[2];
    return r[s] = s, u.forEach((c) => {
      r[c] = s;
    }), r;
  });
  const t = "far" in uc || Qe.autoFetchSvg, n = $p(_z, (r, o) => {
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
  HE = n.names, YE = n.unicodes, ag = Yd(Qe.styleDefault, {
    family: Qe.familyDefault
  });
};
cz((e) => {
  ag = Yd(e.styleDefault, {
    family: Qe.familyDefault
  });
});
VE();
function og(e, t) {
  return (UE[e] || {})[t];
}
function Cz(e, t) {
  return (zE[e] || {})[t];
}
function bi(e, t) {
  return (qE[e] || {})[t];
}
function GE(e) {
  return HE[e] || {
    prefix: null,
    iconName: null
  };
}
function Oz(e) {
  const t = YE[e], n = og("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function qo() {
  return ag;
}
const KE = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function Sz(e) {
  let t = $n;
  const n = WE.reduce((r, o) => (r[o] = "".concat(Qe.cssPrefix, "-").concat(o), r), {});
  return kE.forEach((r) => {
    (e.includes(n[r]) || e.some((o) => wz[r].includes(o))) && (t = r);
  }), t;
}
function Yd(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = $n
  } = t, r = tz[n][e];
  if (n === zd && !e)
    return "fad";
  const o = F0[n][e] || F0[n][r], s = e in wa.styles ? e : null;
  return o || s || null;
}
function Tz(e) {
  let t = [], n = null;
  return e.forEach((r) => {
    const o = xz(Qe.cssPrefix, r);
    o ? n = o : r && t.push(r);
  }), {
    iconName: n,
    rest: t
  };
}
function W0(e) {
  return e.sort().filter((t, n, r) => r.indexOf(t) === n);
}
function qd(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = t;
  let r = null;
  const o = Ih.concat(zU), s = W0(e.filter((m) => o.includes(m))), u = W0(e.filter((m) => !Ih.includes(m))), c = s.filter((m) => (r = m, !PE.includes(m))), [d = null] = c, p = Sz(s), h = Ie(Ie({}, Tz(u)), {}, {
    prefix: Yd(d, {
      family: p
    })
  });
  return Ie(Ie(Ie({}, h), Iz({
    values: e,
    family: p,
    styles: uc,
    config: Qe,
    canonical: h,
    givenPrefix: r
  })), Pz(n, r, h));
}
function Pz(e, t, n) {
  let {
    prefix: r,
    iconName: o
  } = n;
  if (e || !r || !o)
    return {
      prefix: r,
      iconName: o
    };
  const s = t === "fa" ? GE(o) : {}, u = bi(r, o);
  return o = s.iconName || u || o, r = s.prefix || r, r === "far" && !uc.far && uc.fas && !Qe.autoFetchSvg && (r = "fas"), {
    prefix: r,
    iconName: o
  };
}
const kz = kE.filter((e) => e !== $n || e !== zd), Nz = Object.keys(Nh).filter((e) => e !== $n).map((e) => Object.keys(Nh[e])).flat();
function Iz(e) {
  const {
    values: t,
    family: n,
    canonical: r,
    givenPrefix: o = "",
    styles: s = {},
    config: u = {}
  } = e, c = n === zd, d = t.includes("fa-duotone") || t.includes("fad"), p = u.familyDefault === "duotone", h = r.prefix === "fad" || r.prefix === "fa-duotone";
  if (!c && (d || p || h) && (r.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (r.prefix = "fab"), !r.prefix && kz.includes(n) && (Object.keys(s).find((g) => Nz.includes(g)) || u.autoFetchSvg)) {
    const g = DU.get(n).defaultShortPrefixId;
    r.prefix = g, r.iconName = bi(r.prefix, r.iconName) || r.iconName;
  }
  return (r.prefix === "fa" || o === "fa") && (r.prefix = qo() || "fas"), r;
}
class Az {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    const o = n.reduce(this._pullDefinitions, {});
    Object.keys(o).forEach((s) => {
      this.definitions[s] = Ie(Ie({}, this.definitions[s] || {}), o[s]), $h(s, o[s]);
      const u = tg[$n][s];
      u && $h(u, o[s]), VE();
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
let U0 = [], us = {};
const vs = {}, Rz = Object.keys(vs);
function Mz(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return U0 = e, us = {}, Object.keys(vs).forEach((r) => {
    Rz.indexOf(r) === -1 && delete vs[r];
  }), U0.forEach((r) => {
    const o = r.mixout ? r.mixout() : {};
    if (Object.keys(o).forEach((s) => {
      typeof o[s] == "function" && (n[s] = o[s]), typeof o[s] == "object" && Object.keys(o[s]).forEach((u) => {
        n[s] || (n[s] = {}), n[s][u] = o[s][u];
      });
    }), r.hooks) {
      const s = r.hooks();
      Object.keys(s).forEach((u) => {
        us[u] || (us[u] = []), us[u].push(s[u]);
      });
    }
    r.provides && r.provides(vs);
  }), n;
}
function Bh(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
    r[o - 2] = arguments[o];
  return (us[e] || []).forEach((u) => {
    t = u.apply(null, [t, ...r]);
  }), t;
}
function Di(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  (us[e] || []).forEach((s) => {
    s.apply(null, n);
  });
}
function Vo() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return vs[e] ? vs[e].apply(null, t) : void 0;
}
function jh(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || qo();
  if (t)
    return t = bi(n, t) || t, B0(ZE.definitions, n, t) || B0(wa.styles, n, t);
}
const ZE = new Az(), Dz = () => {
  Qe.autoReplaceSvg = !1, Qe.observeMutations = !1, Di("noAuto");
}, Lz = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return co ? (Di("beforeI2svg", e), Vo("pseudoElements2svg", e), Vo("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    Qe.autoReplaceSvg === !1 && (Qe.autoReplaceSvg = !0), Qe.observeMutations = !0, vz(() => {
      $z({
        autoReplaceSvgRoot: t
      }), Di("watch", e);
    });
  }
}, Fz = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: bi(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = Yd(e[0]);
      return {
        prefix: n,
        iconName: bi(n, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(Qe.cssPrefix, "-")) > -1 || e.match(nz))) {
      const t = qd(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || qo(),
        iconName: bi(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = qo();
      return {
        prefix: t,
        iconName: bi(t, e) || e
      };
    }
  }
}, Cr = {
  noAuto: Dz,
  config: Qe,
  dom: Lz,
  parse: Fz,
  library: ZE,
  findIconDefinition: jh,
  toHtml: Sc
}, $z = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = rn
  } = e;
  (Object.keys(wa.styles).length > 0 || Qe.autoFetchSvg) && co && Qe.autoReplaceSvg && Cr.dom.i2svg({
    node: t
  });
};
function Vd(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((n) => Sc(n));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!co) return;
      const n = rn.createElement("div");
      return n.innerHTML = e.html, n.children;
    }
  }), e;
}
function Bz(e) {
  let {
    children: t,
    main: n,
    mask: r,
    attributes: o,
    styles: s,
    transform: u
  } = e;
  if (rg(u) && n.found && !r.found) {
    const {
      width: c,
      height: d
    } = n, p = {
      x: c / d / 2,
      y: 0.5
    };
    o.style = Hd(Ie(Ie({}, s), {}, {
      "transform-origin": "".concat(p.x + u.x / 16, "em ").concat(p.y + u.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: o,
    children: t
  }];
}
function jz(e) {
  let {
    prefix: t,
    iconName: n,
    children: r,
    attributes: o,
    symbol: s
  } = e;
  const u = s === !0 ? "".concat(t, "-").concat(Qe.cssPrefix, "-").concat(n) : s;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: Ie(Ie({}, o), {}, {
        id: u
      }),
      children: r
    }]
  }];
}
function ig(e) {
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
  } = n.found ? n : t, b = jU.includes(r), _ = [Qe.replacementClass, o ? "".concat(Qe.cssPrefix, "-").concat(o) : ""].filter((O) => h.classes.indexOf(O) === -1).filter((O) => O !== "" || !!O).concat(h.classes).join(" ");
  let w = {
    children: [],
    attributes: Ie(Ie({}, h.attributes), {}, {
      "data-prefix": r,
      "data-icon": o,
      class: _,
      role: h.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(g, " ").concat(y)
    })
  };
  const N = b && !~h.classes.indexOf("fa-fw") ? {
    width: "".concat(g / y * 16 * 0.0625, "em")
  } : {};
  m && (w.attributes[Mi] = ""), c && (w.children.push({
    tag: "title",
    attributes: {
      id: w.attributes["aria-labelledby"] || "title-".concat(p || cc())
    },
    children: [c]
  }), delete w.attributes.title);
  const F = Ie(Ie({}, w), {}, {
    prefix: r,
    iconName: o,
    main: t,
    mask: n,
    maskId: d,
    transform: s,
    symbol: u,
    styles: Ie(Ie({}, N), h.styles)
  }), {
    children: x,
    attributes: I
  } = n.found && t.found ? Vo("generateAbstractMask", F) || {
    children: [],
    attributes: {}
  } : Vo("generateAbstractIcon", F) || {
    children: [],
    attributes: {}
  };
  return F.children = x, F.attributes = I, u ? jz(F) : Bz(F);
}
function z0(e) {
  const {
    content: t,
    width: n,
    height: r,
    transform: o,
    title: s,
    extra: u,
    watchable: c = !1
  } = e, d = Ie(Ie(Ie({}, u.attributes), s ? {
    title: s
  } : {}), {}, {
    class: u.classes.join(" ")
  });
  c && (d[Mi] = "");
  const p = Ie({}, u.styles);
  rg(o) && (p.transform = hz({
    transform: o,
    startCentered: !0,
    width: n,
    height: r
  }), p["-webkit-transform"] = p.transform);
  const h = Hd(p);
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
function Wz(e) {
  const {
    content: t,
    title: n,
    extra: r
  } = e, o = Ie(Ie(Ie({}, r.attributes), n ? {
    title: n
  } : {}), {}, {
    class: r.classes.join(" ")
  }), s = Hd(r.styles);
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
  styles: Bp
} = wa;
function Wh(e) {
  const t = e[0], n = e[1], [r] = e.slice(4);
  let o = null;
  return Array.isArray(r) ? o = {
    tag: "g",
    attributes: {
      class: "".concat(Qe.cssPrefix, "-").concat(Lp.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(Qe.cssPrefix, "-").concat(Lp.SECONDARY),
        fill: "currentColor",
        d: r[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(Qe.cssPrefix, "-").concat(Lp.PRIMARY),
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
const Uz = {
  found: !1,
  width: 512,
  height: 512
};
function zz(e, t) {
  !RE && !Qe.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function Uh(e, t) {
  let n = t;
  return t === "fa" && Qe.styleDefault !== null && (t = qo()), new Promise((r, o) => {
    if (n === "fa") {
      const s = GE(e) || {};
      e = s.iconName || e, t = s.prefix || t;
    }
    if (e && t && Bp[t] && Bp[t][e]) {
      const s = Bp[t][e];
      return r(Wh(s));
    }
    zz(e, t), r(Ie(Ie({}, Uz), {}, {
      icon: Qe.showMissingIcons && e ? Vo("missingIconAbstract") || {} : {}
    }));
  });
}
const H0 = () => {
}, zh = Qe.measurePerformance && Cu && Cu.mark && Cu.measure ? Cu : {
  mark: H0,
  measure: H0
}, Sl = 'FA "6.7.2"', Hz = (e) => (zh.mark("".concat(Sl, " ").concat(e, " begins")), () => XE(e)), XE = (e) => {
  zh.mark("".concat(Sl, " ").concat(e, " ends")), zh.measure("".concat(Sl, " ").concat(e), "".concat(Sl, " ").concat(e, " begins"), "".concat(Sl, " ").concat(e, " ends"));
};
var sg = {
  begin: Hz,
  end: XE
};
const $u = () => {
};
function Y0(e) {
  return typeof (e.getAttribute ? e.getAttribute(Mi) : null) == "string";
}
function Yz(e) {
  const t = e.getAttribute ? e.getAttribute(Jm) : null, n = e.getAttribute ? e.getAttribute(eg) : null;
  return t && n;
}
function qz(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(Qe.replacementClass);
}
function Vz() {
  return Qe.autoReplaceSvg === !0 ? Bu.replace : Bu[Qe.autoReplaceSvg] || Bu.replace;
}
function Gz(e) {
  return rn.createElementNS("http://www.w3.org/2000/svg", e);
}
function Kz(e) {
  return rn.createElement(e);
}
function QE(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? Gz : Kz
  } = t;
  if (typeof e == "string")
    return rn.createTextNode(e);
  const r = n(e.tag);
  return Object.keys(e.attributes || []).forEach(function(s) {
    r.setAttribute(s, e.attributes[s]);
  }), (e.children || []).forEach(function(s) {
    r.appendChild(QE(s, {
      ceFn: n
    }));
  }), r;
}
function Zz(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const Bu = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((n) => {
        t.parentNode.insertBefore(QE(n), t);
      }), t.getAttribute(Mi) === null && Qe.keepOriginalSource) {
        let n = rn.createComment(Zz(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], n = e[1];
    if (~ng(t).indexOf(Qe.replacementClass))
      return Bu.replace(e);
    const r = new RegExp("".concat(Qe.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const s = n[0].attributes.class.split(" ").reduce((u, c) => (c === Qe.replacementClass || c.match(r) ? u.toSvg.push(c) : u.toNode.push(c), u), {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = s.toSvg.join(" "), s.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", s.toNode.join(" "));
    }
    const o = n.map((s) => Sc(s)).join(`
`);
    t.setAttribute(Mi, ""), t.innerHTML = o;
  }
};
function q0(e) {
  e();
}
function JE(e, t) {
  const n = typeof t == "function" ? t : $u;
  if (e.length === 0)
    n();
  else {
    let r = q0;
    Qe.mutateApproach === JU && (r = Yo.requestAnimationFrame || q0), r(() => {
      const o = Vz(), s = sg.begin("mutate");
      e.map(o), s(), n();
    });
  }
}
let lg = !1;
function ex() {
  lg = !0;
}
function Hh() {
  lg = !1;
}
let od = null;
function V0(e) {
  if (!R0 || !Qe.observeMutations)
    return;
  const {
    treeCallback: t = $u,
    nodeCallback: n = $u,
    pseudoElementsCallback: r = $u,
    observeMutationsRoot: o = rn
  } = e;
  od = new R0((s) => {
    if (lg) return;
    const u = qo();
    Gs(s).forEach((c) => {
      if (c.type === "childList" && c.addedNodes.length > 0 && !Y0(c.addedNodes[0]) && (Qe.searchPseudoElements && r(c.target), t(c.target)), c.type === "attributes" && c.target.parentNode && Qe.searchPseudoElements && r(c.target.parentNode), c.type === "attributes" && Y0(c.target) && ~oz.indexOf(c.attributeName))
        if (c.attributeName === "class" && Yz(c.target)) {
          const {
            prefix: d,
            iconName: p
          } = qd(ng(c.target));
          c.target.setAttribute(Jm, d || u), p && c.target.setAttribute(eg, p);
        } else qz(c.target) && n(c.target);
    });
  }), co && od.observe(o, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function Xz() {
  od && od.disconnect();
}
function Qz(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce((r, o) => {
    const s = o.split(":"), u = s[0], c = s.slice(1);
    return u && c.length > 0 && (r[u] = c.join(":").trim()), r;
  }, {})), n;
}
function Jz(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "";
  let o = qd(ng(e));
  return o.prefix || (o.prefix = qo()), t && n && (o.prefix = t, o.iconName = n), o.iconName && o.prefix || (o.prefix && r.length > 0 && (o.iconName = Cz(o.prefix, e.innerText) || og(o.prefix, Fh(e.innerText))), !o.iconName && Qe.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (o.iconName = e.firstChild.data)), o;
}
function e8(e) {
  const t = Gs(e.attributes).reduce((o, s) => (o.name !== "class" && o.name !== "style" && (o[s.name] = s.value), o), {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return Qe.autoA11y && (n ? t["aria-labelledby"] = "".concat(Qe.replacementClass, "-title-").concat(r || cc()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function t8() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: _a,
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
function G0(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: n,
    prefix: r,
    rest: o
  } = Jz(e), s = e8(e), u = Bh("parseNodeAttributes", {}, e);
  let c = t.styleParser ? Qz(e) : [];
  return Ie({
    iconName: n,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: r,
    transform: _a,
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
  styles: n8
} = wa;
function tx(e) {
  const t = Qe.autoReplaceSvg === "nest" ? G0(e, {
    styleParser: !1
  }) : G0(e);
  return ~t.extra.classes.indexOf(DE) ? Vo("generateLayersText", e, t) : Vo("generateSvgReplacementMutation", e, t);
}
function r8() {
  return [...FU, ...Ih];
}
function K0(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!co) return Promise.resolve();
  const n = rn.documentElement.classList, r = (h) => n.add("".concat(L0, "-").concat(h)), o = (h) => n.remove("".concat(L0, "-").concat(h)), s = Qe.autoFetchSvg ? r8() : PE.concat(Object.keys(n8));
  s.includes("fa") || s.push("fa");
  const u = [".".concat(DE, ":not([").concat(Mi, "])")].concat(s.map((h) => ".".concat(h, ":not([").concat(Mi, "])"))).join(", ");
  if (u.length === 0)
    return Promise.resolve();
  let c = [];
  try {
    c = Gs(e.querySelectorAll(u));
  } catch {
  }
  if (c.length > 0)
    r("pending"), o("complete");
  else
    return Promise.resolve();
  const d = sg.begin("onTree"), p = c.reduce((h, m) => {
    try {
      const g = tx(m);
      g && h.push(g);
    } catch (g) {
      RE || g.name === "MissingIcon" && console.error(g);
    }
    return h;
  }, []);
  return new Promise((h, m) => {
    Promise.all(p).then((g) => {
      JE(g, () => {
        r("active"), r("complete"), o("pending"), typeof t == "function" && t(), d(), h();
      });
    }).catch((g) => {
      d(), m(g);
    });
  });
}
function a8(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  tx(e).then((n) => {
    n && JE([n], t);
  });
}
function o8(e) {
  return function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = (t || {}).icon ? t : jh(t || {});
    let {
      mask: o
    } = n;
    return o && (o = (o || {}).icon ? o : jh(o || {})), e(r, Ie(Ie({}, n), {}, {
      mask: o
    }));
  };
}
const i8 = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = _a,
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
  return Vd(Ie({
    type: "icon"
  }, e), () => (Di("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), Qe.autoA11y && (u ? p["aria-labelledby"] = "".concat(Qe.replacementClass, "-title-").concat(c || cc()) : (p["aria-hidden"] = "true", p.focusable = "false")), ig({
    icons: {
      main: Wh(y),
      mask: o ? Wh(o.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: m,
    iconName: g,
    transform: Ie(Ie({}, _a), n),
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
var s8 = {
  mixout() {
    return {
      icon: o8(i8)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = K0, e.nodeCallback = a8, e;
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
      return K0(n, r);
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
        Promise.all([Uh(r, u), p.iconName ? Uh(p.iconName, p.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((b) => {
          let [_, w] = b;
          g([t, ig({
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
      const c = Hd(u);
      c.length > 0 && (r.style = c);
      let d;
      return rg(s) && (d = Vo("generateAbstractTransformGrouping", {
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
}, l8 = {
  mixout() {
    return {
      layer(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: n = []
        } = t;
        return Vd({
          type: "layer"
        }, () => {
          Di("beforeDOMElementCreation", {
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
              class: ["".concat(Qe.cssPrefix, "-layers"), ...n].join(" ")
            },
            children: r
          }];
        });
      }
    };
  }
}, c8 = {
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
        return Vd({
          type: "counter",
          content: e
        }, () => (Di("beforeDOMElementCreation", {
          content: e,
          params: t
        }), Wz({
          content: e.toString(),
          title: n,
          extra: {
            attributes: o,
            styles: s,
            classes: ["".concat(Qe.cssPrefix, "-layers-counter"), ...r]
          }
        })));
      }
    };
  }
}, u8 = {
  mixout() {
    return {
      text(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: n = _a,
          title: r = null,
          classes: o = [],
          attributes: s = {},
          styles: u = {}
        } = t;
        return Vd({
          type: "text",
          content: e
        }, () => (Di("beforeDOMElementCreation", {
          content: e,
          params: t
        }), z0({
          content: e,
          transform: Ie(Ie({}, _a), n),
          title: r,
          extra: {
            attributes: s,
            styles: u,
            classes: ["".concat(Qe.cssPrefix, "-layers-text"), ...o]
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
      if (SE) {
        const d = parseInt(getComputedStyle(t).fontSize, 10), p = t.getBoundingClientRect();
        u = p.width / d, c = p.height / d;
      }
      return Qe.autoA11y && !r && (s.attributes["aria-hidden"] = "true"), Promise.resolve([t, z0({
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
const d8 = new RegExp('"', "ug"), Z0 = [1105920, 1112319], X0 = Ie(Ie(Ie(Ie({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), MU), XU), HU), Yh = Object.keys(X0).reduce((e, t) => (e[t.toLowerCase()] = X0[t], e), {}), f8 = Object.keys(Yh).reduce((e, t) => {
  const n = Yh[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function p8(e) {
  const t = e.replace(d8, ""), n = bz(t, 0), r = n >= Z0[0] && n <= Z0[1], o = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: Fh(o ? t[0] : t),
    isSecondary: r || o
  };
}
function h8(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(t), o = isNaN(r) ? "normal" : r;
  return (Yh[n] || {})[o] || f8[n];
}
function Q0(e, t) {
  const n = "".concat(QU).concat(t.replace(":", "-"));
  return new Promise((r, o) => {
    if (e.getAttribute(n) !== null)
      return r();
    const u = Gs(e.children).filter((g) => g.getAttribute(Rh) === t)[0], c = Yo.getComputedStyle(e, t), d = c.getPropertyValue("font-family"), p = d.match(rz), h = c.getPropertyValue("font-weight"), m = c.getPropertyValue("content");
    if (u && !p)
      return e.removeChild(u), r();
    if (p && m !== "none" && m !== "") {
      const g = c.getPropertyValue("content");
      let y = h8(d, h);
      const {
        value: b,
        isSecondary: _
      } = p8(g), w = p[0].startsWith("FontAwesome");
      let N = og(y, b), F = N;
      if (w) {
        const x = Oz(b);
        x.iconName && x.prefix && (N = x.iconName, y = x.prefix);
      }
      if (N && !_ && (!u || u.getAttribute(Jm) !== y || u.getAttribute(eg) !== F)) {
        e.setAttribute(n, F), u && e.removeChild(u);
        const x = t8(), {
          extra: I
        } = x;
        I.attributes[Rh] = t, Uh(N, y).then((O) => {
          const S = ig(Ie(Ie({}, x), {}, {
            icons: {
              main: O,
              mask: KE()
            },
            prefix: y,
            iconName: F,
            extra: I,
            watchable: !0
          })), C = rn.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(C, e.firstChild) : e.appendChild(C), C.outerHTML = S.map((T) => Sc(T)).join(`
`), e.removeAttribute(n), r();
        }).catch(o);
      } else
        r();
    } else
      r();
  });
}
function m8(e) {
  return Promise.all([Q0(e, "::before"), Q0(e, "::after")]);
}
function g8(e) {
  return e.parentNode !== document.head && !~ez.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(Rh) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function J0(e) {
  if (co)
    return new Promise((t, n) => {
      const r = Gs(e.querySelectorAll("*")).filter(g8).map(m8), o = sg.begin("searchPseudoElements");
      ex(), Promise.all(r).then(() => {
        o(), Hh(), t();
      }).catch(() => {
        o(), Hh(), n();
      });
    });
}
var v8 = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = J0, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: n = rn
      } = t;
      Qe.searchPseudoElements && J0(n);
    };
  }
};
let e_ = !1;
var y8 = {
  mixout() {
    return {
      dom: {
        unwatch() {
          ex(), e_ = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        V0(Bh("mutationObserverCallbacks", {}));
      },
      noAuto() {
        Xz();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        e_ ? Hh() : V0(Bh("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const t_ = (e) => {
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
var b8 = {
  mixout() {
    return {
      parse: {
        transform: (e) => t_(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-transform");
        return n && (e.transform = t_(n)), e;
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
        attributes: Ie({}, g.outer),
        children: [{
          tag: "g",
          attributes: Ie({}, g.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: Ie(Ie({}, n.icon.attributes), g.path)
          }]
        }]
      };
    };
  }
};
const jp = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function n_(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function _8(e) {
  return e.tag === "g" ? e.children : [e];
}
var w8 = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-mask"), r = n ? qd(n.split(" ").map((o) => o.trim())) : KE();
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
      } = s, g = pz({
        transform: c,
        containerWidth: h,
        iconWidth: d
      }), y = {
        tag: "rect",
        attributes: Ie(Ie({}, jp), {}, {
          fill: "white"
        })
      }, b = p.children ? {
        children: p.children.map(n_)
      } : {}, _ = {
        tag: "g",
        attributes: Ie({}, g.inner),
        children: [n_(Ie({
          tag: p.tag,
          attributes: Ie(Ie({}, p.attributes), g.path)
        }, b))]
      }, w = {
        tag: "g",
        attributes: Ie({}, g.outer),
        children: [_]
      }, N = "mask-".concat(u || cc()), F = "clip-".concat(u || cc()), x = {
        tag: "mask",
        attributes: Ie(Ie({}, jp), {}, {
          id: N,
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
          children: _8(m)
        }, x]
      };
      return n.push(I, {
        tag: "rect",
        attributes: Ie({
          fill: "currentColor",
          "clip-path": "url(#".concat(F, ")"),
          mask: "url(#".concat(N, ")")
        }, jp)
      }), {
        children: n,
        attributes: r
      };
    };
  }
}, E8 = {
  provides(e) {
    let t = !1;
    Yo.matchMedia && (t = Yo.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      const n = [], r = {
        fill: "currentColor"
      }, o = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      n.push({
        tag: "path",
        attributes: Ie(Ie({}, r), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      const s = Ie(Ie({}, o), {}, {
        attributeName: "opacity"
      }), u = {
        tag: "circle",
        attributes: Ie(Ie({}, r), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return t || u.children.push({
        tag: "animate",
        attributes: Ie(Ie({}, o), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: Ie(Ie({}, s), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), n.push(u), n.push({
        tag: "path",
        attributes: Ie(Ie({}, r), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: t ? [] : [{
          tag: "animate",
          attributes: Ie(Ie({}, s), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), t || n.push({
        tag: "path",
        attributes: Ie(Ie({}, r), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: Ie(Ie({}, s), {}, {
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
}, x8 = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), r = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = r, e;
      }
    };
  }
}, C8 = [gz, s8, l8, c8, u8, v8, y8, b8, w8, E8, x8];
Mz(C8, {
  mixoutsTo: Cr
});
Cr.noAuto;
Cr.config;
Cr.library;
Cr.dom;
const qh = Cr.parse;
Cr.findIconDefinition;
Cr.toHtml;
const O8 = Cr.icon;
Cr.layer;
Cr.text;
Cr.counter;
function Vh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function S8(e) {
  if (Array.isArray(e)) return e;
}
function T8(e) {
  if (Array.isArray(e)) return Vh(e);
}
function So(e, t, n) {
  return (t = D8(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function P8(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function k8(e, t) {
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
function N8() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function I8() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function r_(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ma(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? r_(Object(n), !0).forEach(function(r) {
      So(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r_(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function A8(e, t) {
  if (e == null) return {};
  var n, r, o = R8(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}
function R8(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function a_(e, t) {
  return S8(e) || k8(e, t) || nx(e, t) || N8();
}
function Gh(e) {
  return T8(e) || P8(e) || nx(e) || I8();
}
function M8(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function D8(e) {
  var t = M8(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function id(e) {
  "@babel/helpers - typeof";
  return id = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, id(e);
}
function nx(e, t) {
  if (e) {
    if (typeof e == "string") return Vh(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Vh(e, t) : void 0;
  }
}
var L8 = "7.0.0", Kh;
try {
  var F8 = require("@fortawesome/fontawesome-svg-core/package.json");
  Kh = F8.version;
} catch {
  Kh = typeof process < "u" && process.env.FA_VERSION || "7.0.0";
}
function $8(e) {
  var t = e.beat, n = e.fade, r = e.beatFade, o = e.bounce, s = e.shake, u = e.flash, c = e.spin, d = e.spinPulse, p = e.spinReverse, h = e.pulse, m = e.fixedWidth, g = e.inverse, y = e.border, b = e.listItem, _ = e.flip, w = e.size, N = e.rotation, F = e.pull, x = e.swapOpacity, I = e.rotateBy, O = e.widthAuto, S = B8(Kh, L8), C = So(So(So(So(So(So({
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
  }, "fa-".concat(w), typeof w < "u" && w !== null), "fa-rotate-".concat(N), typeof N < "u" && N !== null && N !== 0), "fa-pull-".concat(F), typeof F < "u" && F !== null), "fa-swap-opacity", x), "fa-rotate-by", S && I), "fa-width-auto", S && O);
  return Object.keys(C).map(function(T) {
    return C[T] ? T : null;
  }).filter(function(T) {
    return T;
  });
}
function B8(e, t) {
  for (var n = e.split("-"), r = a_(n, 2), o = r[0], s = r[1], u = t.split("-"), c = a_(u, 2), d = c[0], p = c[1], h = o.split("."), m = d.split("."), g = 0; g < Math.max(h.length, m.length); g++) {
    var y = h[g] || "0", b = m[g] || "0", _ = parseInt(y, 10), w = parseInt(b, 10);
    if (_ !== w)
      return _ > w;
  }
  for (var N = 0; N < Math.max(h.length, m.length); N++) {
    var F = h[N] || "0", x = m[N] || "0";
    if (F !== x && F.length !== x.length)
      return F.length < x.length;
  }
  return !(s && !p);
}
function j8(e) {
  return e = e - 0, e === e;
}
function rx(e) {
  return j8(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var W8 = ["style"];
function U8(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function z8(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), o = rx(n.slice(0, r)), s = n.slice(r + 1).trim();
    return o.startsWith("webkit") ? t[U8(o)] = s : t[o] = s, t;
  }, {});
}
function ax(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var r = (t.children || []).map(function(d) {
    return ax(e, d);
  }), o = Object.keys(t.attributes || {}).reduce(function(d, p) {
    var h = t.attributes[p];
    switch (p) {
      case "class":
        d.attrs.className = h, delete t.attributes.class;
        break;
      case "style":
        d.attrs.style = z8(h);
        break;
      default:
        p.indexOf("aria-") === 0 || p.indexOf("data-") === 0 ? d.attrs[p.toLowerCase()] = h : d.attrs[rx(p)] = h;
    }
    return d;
  }, {
    attrs: {}
  }), s = n.style, u = s === void 0 ? {} : s, c = A8(n, W8);
  return o.attrs.style = ma(ma({}, o.attrs.style), u), e.apply(void 0, [t.tag, ma(ma({}, o.attrs), c)].concat(Gh(r)));
}
var ox = !1;
try {
  ox = process.env.NODE_ENV === "production";
} catch {
}
function H8() {
  if (!ox && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function o_(e) {
  if (e && id(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (qh.icon)
    return qh.icon(e);
  if (e === null)
    return null;
  if (e && id(e) === "object" && e.prefix && e.iconName)
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
function Wp(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? So({}, e, t) : {};
}
var i_ = {
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
}, sd = /* @__PURE__ */ Q.forwardRef(function(e, t) {
  var n = ma(ma({}, i_), e), r = n.icon, o = n.mask, s = n.symbol, u = n.className, c = n.title, d = n.titleId, p = n.maskId, h = o_(r), m = Wp("classes", [].concat(Gh($8(n)), Gh((u || "").split(" ")))), g = Wp("transform", typeof n.transform == "string" ? qh.transform(n.transform) : n.transform), y = Wp("mask", o_(o)), b = O8(h, ma(ma(ma(ma({}, m), g), y), {}, {
    symbol: s,
    title: c,
    titleId: d,
    maskId: p
  }));
  if (!b)
    return H8("Could not find icon", h), null;
  var _ = b.abstract, w = {
    ref: t
  };
  return Object.keys(n).forEach(function(N) {
    i_.hasOwnProperty(N) || (w[N] = n[N]);
  }), Y8(_[0], w);
});
sd.displayName = "FontAwesomeIcon";
sd.propTypes = {
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
var Y8 = ax.bind(null, Q.createElement);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const q8 = {
  prefix: "fas",
  iconName: "rotate-left",
  icon: [512, 512, ["rotate-back", "rotate-backward", "undo-alt"], "f2ea", "M48.5 224L40 224c-13.3 0-24-10.7-24-24L16 72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8L48.5 224z"]
}, V8 = {
  prefix: "fas",
  iconName: "rotate-right",
  icon: [512, 512, ["redo-alt", "rotate-forward"], "f2f9", "M463.5 224l8.5 0c13.3 0 24-10.7 24-24l0-128c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8l119.5 0z"]
}, ix = "carousel", cg = "controller", G8 = "navigation", K8 = "no-scroll", ug = "portal", Z8 = "root", sx = "toolbar", X8 = "download", Zh = "fullscreen", s_ = "thumbnails", l_ = "zoom", ju = "loading", Q8 = "playing", Up = "error", Wu = "complete", J8 = "placeholder", Gd = (e) => `active-slide-${e}`, e7 = Gd(ju), t7 = Gd(Q8), n7 = Gd(Wu), lx = "fullsize", Kd = "flex_center", r7 = "no_scroll", cx = "no_scroll_padding", dg = "slide", fg = "slide_wrapper", a7 = "slide_wrapper_interactive", mi = "prev", gi = "next", c_ = "swipe", Fs = "close", ux = "onPointerDown", dx = "onPointerMove", fx = "onPointerUp", px = "onPointerLeave", hx = "onPointerCancel", pg = "onKeyDown", o7 = "onKeyUp", hg = "onWheel", i7 = "Escape", s7 = "ArrowLeft", l7 = "ArrowRight", c7 = "button", Xh = "icon", mx = "contain", u_ = "cover", gx = "Unknown action type", vx = "yarl__";
function $r(...e) {
  return e.filter(Boolean).join(" ");
}
function yt(e) {
  return `${vx}${e}`;
}
function rr(e) {
  return `--${vx}${e}`;
}
function Tc(e, t) {
  return `${e}${t ? `_${t}` : ""}`;
}
function mg(e) {
  return (t) => Tc(e, t);
}
function $s(e, t) {
  var n;
  return (n = e == null ? void 0 : e[t]) !== null && n !== void 0 ? n : t;
}
function u7(e, t, n) {
  return $s(e, "{index} of {total}").replace(/\{index}/g, `${bg(n, t.length) + 1}`).replace(/\{total}/g, `${t.length}`);
}
function Zd(...e) {
  return () => {
    e.forEach((t) => {
      t();
    });
  };
}
function ia(e, t, n) {
  return () => {
    const r = L.useContext(n);
    if (!r)
      throw new Error(`${e} must be used within a ${t}.Provider`);
    return r;
  };
}
function gg() {
  return typeof window < "u";
}
function vg(e, t = 0) {
  const n = 10 ** t;
  return Math.round((e + Number.EPSILON) * n) / n;
}
function Go(e) {
  return e.type === void 0 || e.type === "image";
}
function yg(e, t) {
  return e.imageFit === u_ || e.imageFit !== mx && t === u_;
}
function Xd(e) {
  return typeof e == "string" ? Number.parseInt(e, 10) : e;
}
function ld(e) {
  if (typeof e == "number")
    return { pixel: e };
  if (typeof e == "string") {
    const t = Xd(e);
    return e.endsWith("%") ? { percent: t } : { pixel: t };
  }
  return { pixel: 0 };
}
function d7(e, t) {
  const n = ld(t), r = n.percent !== void 0 ? e.width / 100 * n.percent : n.pixel;
  return {
    width: Math.max(e.width - 2 * r, 0),
    height: Math.max(e.height - 2 * r, 0)
  };
}
function f7() {
  return (gg() ? window == null ? void 0 : window.devicePixelRatio : void 0) || 1;
}
function bg(e, t) {
  return t > 0 ? (e % t + t) % t : 0;
}
function yx(e) {
  return e.length > 0;
}
function bx(e, t) {
  return e[bg(t, e.length)];
}
function Qh(e, t) {
  return yx(e) ? bx(e, t) : void 0;
}
function p7(e) {
  return Go(e) ? e.src : void 0;
}
function _g(e, t, n) {
  if (!n)
    return e;
  const { buttons: r, ...o } = e, s = r.findIndex((c) => c === t), u = L.isValidElement(n) ? L.cloneElement(n, { key: t }, null) : n;
  if (s >= 0) {
    const c = [...r];
    return c.splice(s, 1, u), { buttons: c, ...o };
  }
  return { buttons: [u, ...r], ...o };
}
function h7(e, t, n = 0) {
  return Math.min(e.preload, Math.max(e.finite ? t.length - 1 : Math.floor(t.length / 2), n));
}
const m7 = Number(L.version.split(".")[0]) >= 19;
function g7(e) {
  return { inert: m7 ? e : e ? "" : void 0 };
}
function _x(e) {
  e.scrollTop;
}
const Jh = {
  open: !1,
  close: () => {
  },
  index: 0,
  slides: [],
  render: {},
  plugins: [],
  toolbar: { buttons: [Fs] },
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
    imageFit: mx,
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
function uo(e, t) {
  return { name: e, component: t };
}
function Pn(e, t) {
  return { module: e, children: t };
}
function wx(e, t, n) {
  return e.module.name === t ? n(e) : e.children ? [
    Pn(e.module, e.children.flatMap((r) => {
      var o;
      return (o = wx(r, t, n)) !== null && o !== void 0 ? o : [];
    }))
  ] : [e];
}
function as(e, t, n) {
  return e.flatMap((r) => {
    var o;
    return (o = wx(r, t, n)) !== null && o !== void 0 ? o : [];
  });
}
function v7(e, t = [], n = []) {
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
      r = [Pn(b, r)];
      return;
    }
    r = as(r, y, (_) => [Pn(b, [_])]);
  }, u = (y, b) => {
    r = as(r, y, (_) => [Pn(_.module, [Pn(b, _.children)])]);
  }, c = (y, b, _) => {
    r = as(r, y, (w) => {
      var N;
      return [
        Pn(w.module, [
          ..._ ? [Pn(b)] : [],
          ...(N = w.children) !== null && N !== void 0 ? N : [],
          ..._ ? [] : [Pn(b)]
        ])
      ];
    });
  }, d = (y, b, _) => {
    r = as(r, y, (w) => [
      ..._ ? [Pn(b)] : [],
      w,
      ..._ ? [] : [Pn(b)]
    ]);
  }, p = (y) => {
    u(cg, y);
  }, h = (y, b) => {
    r = as(r, y, (_) => [Pn(b, _.children)]);
  }, m = (y) => {
    r = as(r, y, (b) => b.children);
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
const Ex = L.createContext(null), xx = ia("useA11yContext", "A11yContext", Ex);
function y7({ children: e }) {
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
  return L.createElement(Ex.Provider, { value: s }, e);
}
const Cx = L.createContext(null), Ks = ia("useDocument", "DocumentContext", Cx);
function b7({ nodeRef: e, children: t }) {
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
  return L.createElement(Cx.Provider, { value: n }, t);
}
const Ox = L.createContext(null), Pc = ia("useEvents", "EventsContext", Ox);
function _7({ children: e }) {
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
  return L.createElement(Ox.Provider, { value: n }, e);
}
const Sx = L.createContext(null), Bn = ia("useLightboxProps", "LightboxPropsContext", Sx);
function w7({ children: e, ...t }) {
  return L.createElement(Sx.Provider, { value: t }, e);
}
const Tx = L.createContext(null), fo = ia("useLightboxState", "LightboxStateContext", Tx), Px = L.createContext(null), E7 = ia("useLightboxDispatch", "LightboxDispatchContext", Px);
function x7(e, t) {
  switch (t.type) {
    case "swipe": {
      const { slides: n } = e, r = (t == null ? void 0 : t.increment) || 0, o = e.globalIndex + r, s = bg(o, n.length), u = Qh(n, s), c = r || t.duration !== void 0 ? {
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
        currentSlide: Qh(t.slides, t.index)
      } : e;
    default:
      throw new Error(gx);
  }
}
function C7({ slides: e, index: t, children: n }) {
  const [r, o] = L.useReducer(x7, {
    slides: e,
    currentIndex: t,
    globalIndex: t,
    currentSlide: Qh(e, t)
  }), [s, u] = L.useState(e), [c, d] = L.useState(t);
  (e !== s || t !== c) && (u(e), d(t), o({ type: "update", slides: e, index: t }));
  const p = L.useMemo(() => ({ ...r, state: r, dispatch: o }), [r, o]);
  return L.createElement(
    Px.Provider,
    { value: o },
    L.createElement(Tx.Provider, { value: p }, n)
  );
}
const kx = L.createContext(null), O7 = ia("useRTLContext", "RTLContext", kx);
function S7({ isRTL: e, children: t }) {
  const n = L.useMemo(() => ({ isRTL: e }), [e]);
  return L.createElement(kx.Provider, { value: n }, t);
}
const Nx = L.createContext(null), Qd = ia("useTimeouts", "TimeoutsContext", Nx);
function T7({ children: e }) {
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
  return L.createElement(Nx.Provider, { value: n }, e);
}
const kc = L.forwardRef(function({ label: t, className: n, icon: r, renderIcon: o, onClick: s, style: u, ...c }, d) {
  const { styles: p, labels: h } = Bn(), m = $s(h, t);
  return L.createElement("button", { ref: d, type: "button", title: m, "aria-label": m, className: $r(yt(c7), n), onClick: s, style: { ...u, ...p.button }, ...c }, o ? o() : L.createElement(r, { className: yt(Xh), style: p.icon }));
});
function P7(e, t) {
  const n = (r) => L.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", "aria-hidden": "true", focusable: "false", ...r }, t);
  return n.displayName = e, n;
}
function Ia(e, t) {
  return P7(e, L.createElement(
    "g",
    { fill: "currentColor" },
    L.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
    t
  ));
}
const k7 = Ia("Close", L.createElement("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })), N7 = Ia("Previous", L.createElement("path", { d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" })), I7 = Ia("Next", L.createElement("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" })), A7 = Ia("Loading", L.createElement(L.Fragment, null, Array.from({ length: 8 }).map((e, t, n) => L.createElement("line", { key: t, x1: "12", y1: "6.5", x2: "12", y2: "1.8", strokeLinecap: "round", strokeWidth: "2.6", stroke: "currentColor", strokeOpacity: 1 / n.length * (t + 1), transform: `rotate(${360 / n.length * t}, 12, 12)` })))), R7 = Ia("Error", L.createElement("path", { d: "M21.9,21.9l-8.49-8.49l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31L21.9,21.9z M5,18 l3.5-4.5l2.5,3.01L12.17,15l3,3H5z M21,18.17L5.83,3H19c1.1,0,2,0.9,2,2V18.17z" })), ra = gg() ? L.useLayoutEffect : L.useEffect;
function wg() {
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
function M7(e) {
  let t = 0, n = 0, r = 0;
  const s = window.getComputedStyle(e).transform.match(/matrix.*\((.+)\)/);
  if (s) {
    const u = s[1].split(",").map(Xd);
    u.length === 6 ? (t = u[4], n = u[5]) : u.length === 16 && (t = u[12], n = u[13], r = u[14]);
  }
  return { x: t, y: n, z: r };
}
function d_(e, t) {
  const n = L.useRef(void 0), r = L.useRef(void 0), o = wg();
  return ra(() => {
    var s, u, c;
    if (e.current && n.current !== void 0 && !o) {
      const { keyframes: d, duration: p, easing: h, onfinish: m } = t(n.current, e.current.getBoundingClientRect(), M7(e.current)) || {};
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
function Eg() {
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
function Uu() {
  const e = L.useRef(void 0), { setTimeout: t, clearTimeout: n } = Qd();
  return L.useCallback((r, o) => {
    n(e.current), e.current = t(r, o > 0 ? o : 0);
  }, [t, n]);
}
function kt(e) {
  const t = L.useRef(e);
  return ra(() => {
    t.current = e;
  }), L.useCallback((...n) => {
    var r;
    return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
  }, []);
}
function f_(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function em(e, t) {
  return L.useMemo(() => e == null && t == null ? null : (n) => {
    f_(e, n), f_(t, n);
  }, [e, t]);
}
function D7(e, t = !1) {
  const n = L.useRef(!1);
  ra(() => {
    t && n.current && (n.current = !1, e());
  }, [t, e]);
  const r = L.useCallback(() => {
    n.current = !0;
  }, []), o = L.useCallback(() => {
    n.current = !1;
  }, []);
  return { onFocus: r, onBlur: o };
}
function xg() {
  return O7().isRTL;
}
function L7() {
  const [e] = L.useState({}), t = L.useCallback((o, s) => {
    var u;
    (u = e[o]) === null || u === void 0 || u.forEach((c) => {
      s.isPropagationStopped() || c(s);
    });
  }, [e]), n = L.useMemo(() => ({
    onPointerDown: (o) => t(ux, o),
    onPointerMove: (o) => t(dx, o),
    onPointerUp: (o) => t(fx, o),
    onPointerLeave: (o) => t(px, o),
    onPointerCancel: (o) => t(hx, o),
    onKeyDown: (o) => t(pg, o),
    onKeyUp: (o) => t(o7, o),
    onWheel: (o) => t(hg, o)
  }), [t]), r = L.useCallback((o, s) => (e[o] || (e[o] = []), e[o].unshift(s), () => {
    const u = e[o];
    u && u.splice(0, u.length, ...u.filter((c) => c !== s));
  }), [e]);
  return { registerSensors: n, subscribeSensors: r };
}
function p_(e, t) {
  const n = L.useRef(0), r = Uu(), o = kt((...s) => {
    n.current = Date.now(), e(...s);
  });
  return L.useCallback((...s) => {
    r(() => {
      o(...s);
    }, t - (Date.now() - n.current));
  }, [t, o, r]);
}
const zp = mg("slide"), Hp = mg("slide_image");
function cd({ slide: e, offset: t, render: n, rect: r, imageFit: o, imageProps: s, onClick: u, onLoad: c, onError: d, style: p }) {
  var h, m, g, y, b, _, w, N;
  const [F, x] = L.useState(ju), { publish: I } = Pc(), { setTimeout: O } = Qd(), S = L.useRef(null);
  L.useEffect(() => {
    t === 0 && I(Gd(F));
  }, [t, F, I]);
  const C = kt((ae) => {
    ("decode" in ae ? ae.decode() : Promise.resolve()).catch(() => {
    }).then(() => {
      ae.parentNode && (x(Wu), O(() => {
        c == null || c(ae);
      }, 0));
    });
  }), T = L.useCallback((ae) => {
    S.current = ae, ae != null && ae.complete && C(ae);
  }, [C]), R = L.useCallback((ae) => {
    C(ae.currentTarget);
  }, [C]), B = kt(() => {
    x(Up), d == null || d();
  }), U = yg(e, o), te = (ae, ye) => Number.isFinite(ae) ? ae : ye, z = te(Math.max(...((m = (h = e.srcSet) === null || h === void 0 ? void 0 : h.map((ae) => ae.width)) !== null && m !== void 0 ? m : []).concat(e.width ? [e.width] : []).filter(Boolean)), ((g = S.current) === null || g === void 0 ? void 0 : g.naturalWidth) || 0), ne = te(Math.max(...((b = (y = e.srcSet) === null || y === void 0 ? void 0 : y.map((ae) => ae.height)) !== null && b !== void 0 ? b : []).concat(e.height ? [e.height] : []).filter(Boolean)), ((_ = S.current) === null || _ === void 0 ? void 0 : _.naturalHeight) || 0), fe = z && ne ? {
    maxWidth: `min(${z}px, 100%)`,
    maxHeight: `min(${ne}px, 100%)`
  } : {
    maxWidth: "100%",
    maxHeight: "100%"
  }, ge = (w = e.srcSet) === null || w === void 0 ? void 0 : w.slice().sort((ae, ye) => ae.width - ye.width).map((ae) => `${ae.src} ${ae.width}w`).join(", "), Pe = () => r && !U && e.width && e.height ? r.height / e.height * e.width : Number.MAX_VALUE, se = ge && r && gg() ? `${Math.round(Math.min(Pe(), r.width))}px` : void 0, { style: me, className: J, ...re } = (typeof s == "function" ? s(e) : s) || {};
  return L.createElement(
    L.Fragment,
    null,
    L.createElement("img", { ref: T, onLoad: R, onError: B, onClick: u, draggable: !1, className: $r(yt(Hp()), U && yt(Hp("cover")), F !== Wu && yt(Hp("loading")), J), style: { ...fe, ...p, ...me }, ...re, alt: (N = e.alt) !== null && N !== void 0 ? N : "", sizes: se, srcSet: ge, src: e.src }),
    F !== Wu && L.createElement(
      "div",
      { className: yt(zp(J8)) },
      F === ju && (n != null && n.iconLoading ? n.iconLoading() : L.createElement(A7, { className: $r(yt(Xh), yt(zp(ju))) })),
      F === Up && (n != null && n.iconError ? n.iconError() : L.createElement(R7, { className: $r(yt(Xh), yt(zp(Up))) }))
    )
  );
}
const F7 = L.forwardRef(function({ className: t, children: n, onFocus: r, onBlur: o, ...s }, u) {
  const c = L.useRef(null), [d, p] = L.useState(!1), { trackFocusWithin: h } = xx(), m = kt(() => {
    if (c.current) {
      const g = window.getComputedStyle(c.current).direction === "rtl";
      g !== d && p(g);
    }
  });
  return L.useEffect(m), L.createElement(
    b7,
    { nodeRef: c },
    L.createElement(
      S7,
      { isRTL: d },
      L.createElement("div", { ref: em(u, c), className: $r(yt("root"), t), ...h(r, o), ...s }, n)
    )
  );
});
var Dn;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.SWIPE = 1] = "SWIPE", e[e.PULL = 2] = "PULL", e[e.ANIMATION = 3] = "ANIMATION";
})(Dn || (Dn = {}));
function Ix(e, t, n, r, o) {
  L.useEffect(() => o ? () => {
  } : Zd(e(ux, t), e(dx, n), e(fx, r), e(px, r), e(hx, r)), [e, t, n, r, o]);
}
var Xr;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.SWIPE = 1] = "SWIPE", e[e.PULL = 2] = "PULL";
})(Xr || (Xr = {}));
const Yp = 30;
function $7({ disableSwipeNavigation: e, closeOnBackdropClick: t }, n, r, o, s, u, c, d, p, h, m, g, y, b, _, w) {
  const N = L.useRef(0), F = L.useRef([]), x = L.useRef(void 0), I = L.useRef(0), O = L.useRef(Xr.NONE), S = L.useCallback((z) => {
    x.current === z.pointerId && (x.current = void 0, O.current = Xr.NONE);
    const ne = F.current;
    ne.splice(0, ne.length, ...ne.filter((fe) => fe.pointerId !== z.pointerId));
  }, []), C = L.useCallback((z) => {
    S(z), z.persist(), F.current.push(z);
  }, [S]), T = L.useCallback((z) => F.current.find(({ pointerId: ne }) => z.pointerId === ne), []), R = kt((z) => {
    C(z);
  }), B = (z, ne) => m && z > ne || h && z < -ne, U = kt((z) => {
    const ne = T(z);
    if (ne)
      if (x.current === z.pointerId) {
        const fe = Date.now() - I.current, ge = N.current;
        O.current === Xr.SWIPE ? Math.abs(ge) > 0.3 * o || Math.abs(ge) > 5 && fe < s ? d(ge, fe) : p(ge) : O.current === Xr.PULL && (B(ge, 2 * Yp) ? b(ge, fe) : _(ge)), N.current = 0, O.current = Xr.NONE;
      } else {
        const { target: fe } = z;
        t && fe instanceof HTMLElement && fe === ne.target && (fe.classList.contains(yt(dg)) || fe.classList.contains(yt(fg))) && w();
      }
    S(z);
  }), te = kt((z) => {
    const ne = T(z);
    if (ne) {
      const fe = x.current === z.pointerId;
      if (z.buttons === 0) {
        fe && N.current !== 0 ? U(z) : S(ne);
        return;
      }
      const ge = z.clientX - ne.clientX, Pe = z.clientY - ne.clientY;
      if (x.current === void 0) {
        const se = (me) => {
          C(z), x.current = z.pointerId, I.current = Date.now(), O.current = me;
        };
        Math.abs(ge) > Math.abs(Pe) && Math.abs(ge) > Yp && r(ge) ? e || (se(Xr.SWIPE), u()) : Math.abs(Pe) > Math.abs(ge) && B(Pe, Yp) && (se(Xr.PULL), g());
      } else fe && (O.current === Xr.SWIPE ? (N.current = ge, c(ge)) : O.current === Xr.PULL && (N.current = Pe, y(Pe)));
    }
  });
  Ix(n, R, te, U);
}
function B7({ preventDefaultWheelX: e, preventDefaultWheelY: t }) {
  const n = L.useRef(null), r = kt((o) => {
    const s = Math.abs(o.deltaX) > Math.abs(o.deltaY);
    (s && e || !s && t || o.ctrlKey) && o.preventDefault();
  });
  return L.useCallback((o) => {
    var s;
    o ? o.addEventListener("wheel", r, { passive: !1 }) : (s = n.current) === null || s === void 0 || s.removeEventListener("wheel", r), n.current = o;
  }, [r]);
}
function j7(e, t, n, r, o, s, u, c, d) {
  const p = L.useRef(0), h = L.useRef(0), m = L.useRef(void 0), g = L.useRef(void 0), y = L.useRef(0), b = L.useRef(void 0), _ = L.useRef(0), { setTimeout: w, clearTimeout: N } = Qd(), F = L.useCallback(() => {
    m.current && (N(m.current), m.current = void 0);
  }, [N]), x = L.useCallback(() => {
    g.current && (N(g.current), g.current = void 0);
  }, [N]), I = kt(() => {
    e !== Dn.SWIPE && (p.current = 0, _.current = 0, F(), x());
  });
  L.useEffect(I, [e, I]);
  const O = kt((C) => {
    g.current = void 0, p.current === C && d(p.current);
  }), S = kt((C) => {
    if (C.ctrlKey || Math.abs(C.deltaY) > Math.abs(C.deltaX))
      return;
    const T = (R) => {
      y.current = R, N(b.current), b.current = R > 0 ? w(() => {
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
        const R = h.current;
        m.current = w(() => {
          m.current = void 0, R === h.current && (h.current = 0);
        }, o);
      }
    } else if (e === Dn.SWIPE) {
      let R = p.current - C.deltaX;
      if (R = Math.min(Math.abs(R), r) * Math.sign(R), p.current = R, u(R), x(), Math.abs(R) > 0.2 * r) {
        T(C.deltaX), c(R, Date.now() - _.current);
        return;
      }
      g.current = w(() => O(R), 2 * o);
    } else
      T(C.deltaX);
  });
  L.useEffect(() => t(hg, S), [t, S]);
}
const h_ = mg("container"), Ax = L.createContext(null), po = ia("useController", "ControllerContext", Ax);
function W7({ children: e, ...t }) {
  var n;
  const { carousel: r, animation: o, controller: s, on: u, styles: c, render: d } = t, { closeOnPullUp: p, closeOnPullDown: h, preventDefaultWheelX: m, preventDefaultWheelY: g } = s, [y, b] = L.useState(), _ = fo(), w = E7(), [N, F] = L.useState(Dn.NONE), x = L.useRef(0), I = L.useRef(0), O = L.useRef(1), { registerSensors: S, subscribeSensors: C } = L7(), { subscribe: T, publish: R } = Pc(), B = Uu(), U = Uu(), te = Uu(), { containerRef: z, setContainerRef: ne, containerRect: fe } = Eg(), ge = em(B7({ preventDefaultWheelX: m, preventDefaultWheelY: g }), ne), Pe = L.useRef(null), se = em(Pe, void 0), { getOwnerDocument: me } = Ks(), J = xg(), re = (ee) => (J ? -1 : 1) * (typeof ee == "number" ? ee : 1), ae = kt(() => {
    var ee;
    return (ee = z.current) === null || ee === void 0 ? void 0 : ee.focus();
  }), ye = kt(() => t), Se = kt(() => _), Ce = L.useCallback((ee) => R(mi, ee), [R]), pe = L.useCallback((ee) => R(gi, ee), [R]), ke = L.useCallback(() => R(Fs), [R]), $e = (ee) => !(r.finite && (re(ee) > 0 && _.currentIndex === 0 || re(ee) < 0 && _.currentIndex === _.slides.length - 1)), W = (ee) => {
    var we;
    x.current = ee, (we = z.current) === null || we === void 0 || we.style.setProperty(rr("swipe_offset"), `${Math.round(ee)}px`);
  }, H = (ee) => {
    var we, Te;
    I.current = ee, O.current = (() => {
      const Fe = h && ee > 0 ? ee : p && ee < 0 ? -ee : 0;
      return Math.min(Math.max(vg(1 - Fe / 60 * (1 - 0.5), 2), 0.5), 1);
    })(), (we = z.current) === null || we === void 0 || we.style.setProperty(rr("pull_offset"), `${Math.round(ee)}px`), (Te = z.current) === null || Te === void 0 || Te.style.setProperty(rr("pull_opacity"), `${O.current}`);
  }, { prepareAnimation: $ } = d_(Pe, (ee, we, Te) => {
    if (Pe.current && fe)
      return {
        keyframes: [
          {
            transform: `translate(0, ${ee.rect.y - we.y + Te.y}px)`,
            opacity: ee.opacity
          },
          { transform: "translate(0, 0)", opacity: 1 }
        ],
        duration: ee.duration,
        easing: o.easing.fade
      };
  }), D = (ee, we) => {
    if (p || h) {
      H(ee);
      let Te = 0;
      Pe.current && (Te = o.fade * (we ? 2 : 1), $({
        rect: Pe.current.getBoundingClientRect(),
        opacity: O.current,
        duration: Te
      })), te(() => {
        H(0), F(Dn.NONE);
      }, Te), F(Dn.ANIMATION), we || ke();
    }
  }, { prepareAnimation: G, isAnimationPlaying: Z } = d_(Pe, (ee, we, Te) => {
    var Re;
    if (Pe.current && fe && (!((Re = _.animation) === null || Re === void 0) && Re.duration)) {
      const Be = ld(r.spacing), Fe = (Be.percent ? Be.percent * fe.width / 100 : Be.pixel) || 0;
      return {
        keyframes: [
          {
            transform: `translate(${re(_.globalIndex - ee.index) * (fe.width + Fe) + ee.rect.x - we.x + Te.x}px, 0)`
          },
          { transform: "translate(0, 0)" }
        ],
        duration: _.animation.duration,
        easing: _.animation.easing
      };
    }
  }), le = kt((ee) => {
    var we, Te;
    const Re = ee.offset || 0, Be = Re ? o.swipe : (we = o.navigation) !== null && we !== void 0 ? we : o.swipe, Fe = !Re && !Z() ? o.easing.navigation : o.easing.swipe;
    let { direction: et } = ee;
    const Ze = (Te = ee.count) !== null && Te !== void 0 ? Te : 1;
    let Ge = Dn.ANIMATION, Ve = Be * Ze;
    if (!et) {
      const ve = fe == null ? void 0 : fe.width, It = ee.duration || 0, At = ve ? Be / ve * Math.abs(Re) : Be;
      Ze !== 0 ? (It < At ? Ve = Ve / At * Math.max(It, At / 5) : ve && (Ve = Be / ve * (ve - Math.abs(Re))), et = re(Re) > 0 ? mi : gi) : Ve = Be / 2;
    }
    let Tt = 0;
    et === mi ? $e(re(1)) ? Tt = -Ze : (Ge = Dn.NONE, Ve = Be) : et === gi && ($e(re(-1)) ? Tt = Ze : (Ge = Dn.NONE, Ve = Be)), Ve = Math.round(Ve), U(() => {
      W(0), F(Dn.NONE);
    }, Ve), Pe.current && G({
      rect: Pe.current.getBoundingClientRect(),
      index: _.globalIndex
    }), F(Ge), R(c_, {
      type: "swipe",
      increment: Tt,
      duration: Ve,
      easing: Fe
    });
  });
  L.useEffect(() => {
    var ee, we;
    !((ee = _.animation) === null || ee === void 0) && ee.increment && (!((we = _.animation) === null || we === void 0) && we.duration) && B(() => w({ type: "swipe", increment: 0 }), _.animation.duration);
  }, [_.animation, w, B]);
  const Ne = [
    C,
    $e,
    (fe == null ? void 0 : fe.width) || 0,
    o.swipe,
    () => F(Dn.SWIPE),
    (ee) => W(ee),
    (ee, we) => le({ offset: ee, duration: we, count: 1 }),
    (ee) => le({ offset: ee, count: 0 })
  ], de = [
    () => {
      h && F(Dn.PULL);
    },
    (ee) => H(ee),
    (ee) => D(ee),
    (ee) => D(ee, !0)
  ];
  $7(s, ...Ne, p, h, ...de, ke), j7(N, ...Ne);
  const xe = kt(() => {
    s.focus && me().querySelector(`.${yt(ug)} .${yt(h_())}`) && ae();
  });
  L.useEffect(xe, [xe]);
  const ue = kt(() => {
    var ee;
    (ee = u.view) === null || ee === void 0 || ee.call(u, { index: _.currentIndex });
  });
  L.useEffect(ue, [_.globalIndex, ue]), L.useEffect(() => Zd(T(mi, (ee) => le({ direction: mi, ...ee })), T(gi, (ee) => le({ direction: gi, ...ee })), T(c_, (ee) => w(ee))), [T, le, w]);
  const q = L.useMemo(() => ({
    prev: Ce,
    next: pe,
    close: ke,
    focus: ae,
    slideRect: fe ? d7(fe, r.padding) : { width: 0, height: 0 },
    containerRect: fe || { width: 0, height: 0 },
    subscribeSensors: C,
    containerRef: z,
    setCarouselRef: se,
    toolbarWidth: y,
    setToolbarWidth: b
  }), [
    Ce,
    pe,
    ke,
    ae,
    C,
    fe,
    z,
    se,
    y,
    b,
    r.padding
  ]);
  return L.useImperativeHandle(s.ref, () => ({
    prev: Ce,
    next: pe,
    close: ke,
    focus: ae,
    getLightboxProps: ye,
    getLightboxState: Se
  }), [Ce, pe, ke, ae, ye, Se]), L.createElement("div", { ref: ge, className: $r(yt(h_()), yt(Kd)), style: {
    ...N === Dn.SWIPE ? { [rr("swipe_offset")]: `${Math.round(x.current)}px` } : null,
    ...N === Dn.PULL ? {
      [rr("pull_offset")]: `${Math.round(I.current)}px`,
      [rr("pull_opacity")]: `${O.current}`
    } : null,
    ...s.touchAction !== "none" ? { [rr("controller_touch_action")]: s.touchAction } : null,
    ...c.container
  }, tabIndex: -1, ...S }, fe && L.createElement(
    Ax.Provider,
    { value: q },
    e,
    (n = d.controls) === null || n === void 0 ? void 0 : n.call(d)
  ));
}
const U7 = uo(cg, W7);
function fi(e) {
  return Tc(ix, e);
}
function m_(e) {
  return Tc(dg, e);
}
function z7({ slide: e, offset: t }) {
  const n = L.useRef(null), { currentIndex: r, slides: o } = fo(), { slideRect: s, focus: u } = po(), { render: c, carousel: { imageFit: d, imageProps: p }, on: { click: h }, styles: { slide: m }, labels: g } = Bn(), { getOwnerDocument: y } = Ks(), b = t !== 0;
  L.useEffect(() => {
    var w;
    b && (!((w = n.current) === null || w === void 0) && w.contains(y().activeElement)) && u();
  }, [b, u, y]);
  const _ = () => {
    var w, N, F, x;
    let I = (w = c.slide) === null || w === void 0 ? void 0 : w.call(c, { slide: e, offset: t, rect: s });
    return !I && Go(e) && (I = L.createElement(cd, { slide: e, offset: t, render: c, rect: s, imageFit: d, imageProps: p, onClick: b ? void 0 : () => h == null ? void 0 : h({ index: r }) })), I ? L.createElement(
      L.Fragment,
      null,
      (N = c.slideHeader) === null || N === void 0 ? void 0 : N.call(c, { slide: e }),
      ((F = c.slideContainer) !== null && F !== void 0 ? F : ({ children: O }) => O)({ slide: e, children: I }),
      (x = c.slideFooter) === null || x === void 0 ? void 0 : x.call(c, { slide: e })
    ) : null;
  };
  return L.createElement("div", { ref: n, className: $r(yt(m_()), !b && yt(m_("current")), yt(Kd)), ...g7(b), style: m, role: "group", "aria-roledescription": $s(g, "Slide"), "aria-label": u7(g, o, r + t) }, _());
}
function H7() {
  const e = Bn().styles.slide;
  return L.createElement("div", { className: yt(dg), style: e });
}
function Y7({ carousel: e, labels: t }) {
  const { slides: n, currentIndex: r, globalIndex: o } = fo(), { setCarouselRef: s } = po(), { autoPlaying: u, focusWithin: c } = xx(), d = ld(e.spacing), p = ld(e.padding), h = h7(e, n, 1), m = [];
  if (yx(n))
    for (let g = r - h; g <= r + h; g += 1) {
      const y = bx(n, g), b = o - r + g, _ = e.finite && (g < 0 || g > n.length - 1);
      m.push(_ ? { key: b } : {
        key: [`${b}`, p7(y)].filter(Boolean).join("|"),
        offset: g - r,
        slide: y
      });
    }
  return L.createElement("div", { ref: s, className: $r(yt(fi()), m.length > 0 && yt(fi("with_slides"))), style: {
    [`${rr(fi("slides_count"))}`]: m.length,
    [`${rr(fi("spacing_px"))}`]: d.pixel || 0,
    [`${rr(fi("spacing_percent"))}`]: d.percent || 0,
    [`${rr(fi("padding_px"))}`]: p.pixel || 0,
    [`${rr(fi("padding_percent"))}`]: p.percent || 0
  }, role: "region", "aria-live": u && !c ? "off" : "polite", "aria-roledescription": $s(t, "Carousel"), "aria-label": $s(t, "Photo gallery") }, m.map(({ key: g, slide: y, offset: b }) => y ? L.createElement(z7, { key: g, slide: y, offset: b }) : L.createElement(H7, { key: g })));
}
const q7 = uo(ix, Y7);
function Rx() {
  const { carousel: e } = Bn(), { slides: t, currentIndex: n } = fo(), r = t.length === 0 || e.finite && n === 0, o = t.length === 0 || e.finite && n === t.length - 1;
  return { prevDisabled: r, nextDisabled: o };
}
function V7(e) {
  var t;
  const n = xg(), { publish: r } = Pc(), { animation: o, controller: s } = Bn(), { prevDisabled: u, nextDisabled: c } = Rx(), d = ((t = o.navigation) !== null && t !== void 0 ? t : o.swipe) / 2, p = p_(() => r(mi), d), h = p_(() => r(gi), d), m = kt((g) => {
    switch (g.key) {
      case i7:
        if (!s.closeOnEscape)
          return;
        r(Fs);
        break;
      case s7:
        (n ? c : u) || (n ? h : p)();
        break;
      case l7:
        (n ? u : c) || (n ? p : h)();
        break;
      default:
        return;
    }
    g.stopPropagation();
  });
  L.useEffect(() => e(pg, m), [e, m]);
}
function g_({ label: e, icon: t, renderIcon: n, action: r, onClick: o, disabled: s, style: u }) {
  return L.createElement(kc, { label: e, icon: t, renderIcon: n, className: yt(`navigation_${r}`), disabled: s, onClick: o, style: u, ...D7(po().focus, s) });
}
function G7({ render: { buttonPrev: e, buttonNext: t, iconPrev: n, iconNext: r }, styles: o }) {
  const { prev: s, next: u, subscribeSensors: c } = po(), { prevDisabled: d, nextDisabled: p } = Rx();
  return V7(c), L.createElement(
    L.Fragment,
    null,
    e ? e() : L.createElement(g_, { label: "Previous", action: mi, icon: N7, renderIcon: n, style: o.navigationPrev, disabled: d, onClick: s }),
    t ? t() : L.createElement(g_, { label: "Next", action: gi, icon: I7, renderIcon: r, style: o.navigationNext, disabled: p, onClick: u })
  );
}
const K7 = uo(G8, G7), v_ = yt(r7), Z7 = yt(cx);
function X7(e) {
  return "style" in e;
}
function y_(e, t, n) {
  const r = window.getComputedStyle(e), o = n ? "padding-left" : "padding-right", s = n ? r.paddingLeft : r.paddingRight, u = e.style.getPropertyValue(o);
  return e.style.setProperty(o, `${(Xd(s) || 0) + t}px`), () => {
    u ? e.style.setProperty(o, u) : e.style.removeProperty(o);
  };
}
function Q7({ noScroll: { disabled: e }, children: t }) {
  const n = xg(), { getOwnerDocument: r, getOwnerWindow: o } = Ks();
  return L.useEffect(() => {
    if (e)
      return () => {
      };
    const s = [], u = o(), { body: c, documentElement: d } = r(), p = Math.round(u.innerWidth - d.clientWidth);
    if (p > 0) {
      s.push(y_(c, p, n));
      const h = c.getElementsByTagName("*");
      for (let m = 0; m < h.length; m += 1) {
        const g = h[m];
        X7(g) && u.getComputedStyle(g).getPropertyValue("position") === "fixed" && !g.classList.contains(Z7) && s.push(y_(g, p, n));
      }
    }
    return c.classList.add(v_), () => {
      c.classList.remove(v_), s.forEach((h) => h());
    };
  }, [n, e, r, o]), L.createElement(L.Fragment, null, t);
}
const J7 = uo(K8, Q7);
function b_(e) {
  return Tc(ug, e);
}
function __(e, t, n) {
  const r = e.getAttribute(t);
  return e.setAttribute(t, n), () => {
    r ? e.setAttribute(t, r) : e.removeAttribute(t);
  };
}
function eH({ portal: { root: e, container: { className: t, style: n, ...r } = {} }, animation: o, styles: s, className: u, on: c, close: d, labels: p, children: h }) {
  const [m, g] = L.useState(!1), [y, b] = L.useState(!1), _ = L.useRef([]), w = L.useRef(null), { setTimeout: N } = Qd(), { subscribe: F } = Pc(), I = wg() ? 0 : o.fade;
  L.useEffect(() => (g(!0), () => {
    g(!1), b(!1);
  }), []);
  const O = kt(() => {
    _.current.forEach((R) => R()), _.current = [];
  }), S = kt(() => {
    var R;
    b(!1), O(), (R = c.exiting) === null || R === void 0 || R.call(c), N(() => {
      var B;
      (B = c.exited) === null || B === void 0 || B.call(c), d();
    }, I);
  });
  L.useEffect(() => F(Fs, S), [F, S]);
  const C = kt((R) => {
    var B, U, te;
    _x(R), b(!0), (B = c.entering) === null || B === void 0 || B.call(c);
    const z = (te = (U = R.parentNode) === null || U === void 0 ? void 0 : U.children) !== null && te !== void 0 ? te : [];
    for (let ne = 0; ne < z.length; ne += 1) {
      const fe = z[ne];
      ["TEMPLATE", "SCRIPT", "STYLE"].indexOf(fe.tagName) === -1 && fe !== R && (_.current.push(__(fe, "inert", "")), _.current.push(__(fe, "aria-hidden", "true")));
    }
    _.current.push(() => {
      var ne, fe;
      (fe = (ne = w.current) === null || ne === void 0 ? void 0 : ne.focus) === null || fe === void 0 || fe.call(ne);
    }), N(() => {
      var ne;
      (ne = c.entered) === null || ne === void 0 || ne.call(c);
    }, I);
  }), T = L.useCallback((R) => {
    R ? C(R) : O();
  }, [C, O]);
  return m ? q_(L.createElement(F7, { ref: T, className: $r(u, t, yt(b_()), yt(cx), y && yt(b_("open"))), "aria-modal": !0, role: "dialog", "aria-label": $s(p, "Lightbox"), style: {
    ...o.fade !== Jh.animation.fade ? { [rr("fade_animation_duration")]: `${I}ms` } : null,
    ...o.easing.fade !== Jh.animation.easing.fade ? { [rr("fade_animation_timing_function")]: o.easing.fade } : null,
    ...s.root,
    ...n
  }, onFocus: (R) => {
    w.current || (w.current = R.relatedTarget);
  }, ...r }, h), (typeof e == "function" ? e() : e) || document.body) : null;
}
const tH = uo(ug, eH);
function nH({ children: e }) {
  return L.createElement(L.Fragment, null, e);
}
const rH = uo(Z8, nH);
function aH(e) {
  return Tc(sx, e);
}
function oH({ toolbar: { buttons: e }, render: { buttonClose: t, iconClose: n }, styles: r }) {
  const { close: o, setToolbarWidth: s } = po(), { setContainerRef: u, containerRect: c } = Eg();
  ra(() => {
    s(c == null ? void 0 : c.width);
  }, [s, c == null ? void 0 : c.width]);
  const d = () => t ? t() : L.createElement(kc, { key: Fs, label: "Close", icon: k7, renderIcon: n, onClick: o });
  return L.createElement("div", { ref: u, style: r.toolbar, className: yt(aH()) }, e == null ? void 0 : e.map((p) => p === Fs ? d() : p));
}
const iH = uo(sx, oH);
function Mx(e, t) {
  var n;
  return L.createElement(e.module.component, { key: e.module.name, ...t }, (n = e.children) === null || n === void 0 ? void 0 : n.map((r) => Mx(r, t)));
}
function sH(e, t = {}) {
  const { easing: n, ...r } = e, { easing: o, ...s } = t;
  return {
    easing: { ...n, ...o },
    ...r,
    ...s
  };
}
function Dx({ carousel: e, animation: t, render: n, toolbar: r, controller: o, noScroll: s, on: u, plugins: c, slides: d, index: p, ...h }) {
  const { animation: m, carousel: g, render: y, toolbar: b, controller: _, noScroll: w, on: N, slides: F, index: x, plugins: I, ...O } = Jh, { config: S, augmentation: C } = v7([
    Pn(tH, [
      Pn(J7, [
        Pn(U7, [
          Pn(q7),
          Pn(iH),
          Pn(K7)
        ])
      ])
    ])
  ], c || I), T = C({
    animation: sH(m, t),
    carousel: { ...g, ...e },
    render: { ...y, ...n },
    toolbar: { ...b, ...r },
    controller: { ..._, ...o },
    noScroll: { ...w, ...s },
    on: { ...N, ...u },
    ...O,
    ...h
  });
  return T.open ? L.createElement(
    w7,
    { ...T },
    L.createElement(
      C7,
      { slides: d || F, index: Xd(p || x) },
      L.createElement(
        T7,
        null,
        L.createElement(
          _7,
          null,
          L.createElement(y7, null, Mx(Pn(rH, S), T))
        )
      )
    )
  ) : null;
}
const lH = {
  download: void 0
}, Lx = (e) => ({
  ...lH,
  ...e
});
function cH(e) {
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
function uH(e) {
  var t, n;
  return (n = (t = /^content-disposition:(.*)$/im.exec(e.getAllResponseHeaders())) === null || t === void 0 ? void 0 : t[1]) !== null && n !== void 0 ? n : null;
}
function dH(e, t) {
  const n = new XMLHttpRequest();
  n.open("GET", e), n.responseType = "blob", n.onload = () => {
    tm(n.response, t || cH(uH(n)));
  }, n.onerror = () => {
    console.error("Failed to download file");
  }, n.send();
}
function fH(e) {
  const t = new XMLHttpRequest();
  t.open("HEAD", e, !1);
  try {
    t.send();
  } catch {
  }
  return t.status >= 200 && t.status <= 299;
}
function qp(e) {
  try {
    e.dispatchEvent(new MouseEvent("click"));
  } catch {
    const n = document.createEvent("MouseEvents");
    n.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), e.dispatchEvent(n);
  }
}
function tm(e, t) {
  const n = document.createElement("a");
  n.rel = "noopener", n.download = t || "", n.download || (n.target = "_blank"), typeof e == "string" ? (n.href = e, n.origin !== window.location.origin ? fH(n.href) ? dH(e, t) : (n.target = "_blank", qp(n)) : qp(n)) : (n.href = URL.createObjectURL(e), setTimeout(() => URL.revokeObjectURL(n.href), 3e4), setTimeout(() => qp(n), 0));
}
const pH = Ia("DownloadIcon", L.createElement("path", { d: "M18 15v3H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2zm-1-4-1.41-1.41L13 12.17V4h-2v8.17L8.41 9.59 7 11l5 5 5-5z" }));
function hH() {
  const { render: e, on: t, download: n } = Bn(), { download: r } = Lx(n), { currentSlide: o, currentIndex: s } = fo();
  if (e.buttonDownload)
    return L.createElement(L.Fragment, null, e.buttonDownload());
  const u = o && (o.downloadUrl || typeof o.download == "string" && o.download || typeof o.download == "object" && o.download.url || Go(o) && o.src) || void 0, c = r ? (o == null ? void 0 : o.download) !== !1 : !!u, d = () => {
    if (o && u) {
      const h = o.downloadFilename || typeof o.download == "object" && o.download.filename || void 0;
      tm(u, h);
    }
  }, p = () => {
    var h;
    o && ((r || d)({ slide: o, saveAs: tm }), (h = t.download) === null || h === void 0 || h.call(t, { index: s }));
  };
  return L.createElement(kc, { label: "Download", icon: pH, renderIcon: e.iconDownload, disabled: !c, onClick: p });
}
function nm({ augment: e }) {
  e(({ toolbar: t, download: n, ...r }) => ({
    toolbar: _g(t, X8, L.createElement(hH, null)),
    download: Lx(n),
    ...r
  }));
}
const mH = {
  auto: !1,
  ref: null
}, Fx = (e) => ({
  ...mH,
  ...e
}), $x = L.createContext(null), gH = ia("useFullscreen", "FullscreenContext", $x);
function vH({ fullscreen: e, on: t, children: n }) {
  const { auto: r, ref: o } = Fx(e), s = L.useRef(null), [u, c] = L.useState(), [d, p] = L.useState(!1), h = L.useRef(!1), { getOwnerDocument: m } = Ks();
  ra(() => {
    var x, I, O, S;
    const C = m();
    c(!((S = (O = (I = (x = C.fullscreenEnabled) !== null && x !== void 0 ? x : C.webkitFullscreenEnabled) !== null && I !== void 0 ? I : C.mozFullScreenEnabled) !== null && O !== void 0 ? O : C.msFullscreenEnabled) !== null && S !== void 0 && S));
  }, [m]);
  const g = L.useCallback(() => {
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
    if (!g())
      return;
    const x = m();
    try {
      x.exitFullscreen ? x.exitFullscreen().catch(() => {
      }) : x.webkitExitFullscreen ? x.webkitExitFullscreen() : x.mozCancelFullScreen ? x.mozCancelFullScreen() : x.msExitFullscreen && x.msExitFullscreen();
    } catch {
    }
  }, [g, m]);
  L.useEffect(() => {
    const x = m(), I = () => {
      p(g() === s.current);
    };
    return Zd(...["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"].map((O) => (x.addEventListener(O, I), () => x.removeEventListener(O, I))));
  }, [g, m]);
  const _ = kt(() => {
    var x;
    return (x = t.enterFullscreen) === null || x === void 0 ? void 0 : x.call(t);
  }), w = kt(() => {
    var x;
    return (x = t.exitFullscreen) === null || x === void 0 ? void 0 : x.call(t);
  });
  L.useEffect(() => {
    d && (h.current = !0), h.current && (d ? _ : w)();
  }, [d, _, w]);
  const N = kt(() => {
    var x;
    return (x = r ? y : null) === null || x === void 0 || x(), b;
  });
  L.useEffect(N, [N]);
  const F = L.useMemo(() => ({ fullscreen: d, disabled: u, enter: y, exit: b }), [d, u, y, b]);
  return L.useImperativeHandle(o, () => F, [F]), L.createElement(
    "div",
    { ref: s, className: $r(yt(Zh), yt(lx)) },
    L.createElement($x.Provider, { value: F }, n)
  );
}
const yH = Ia("EnterFullscreen", L.createElement("path", { d: "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" })), bH = Ia("ExitFullscreen", L.createElement("path", { d: "M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" }));
function _H() {
  var e;
  const { fullscreen: t, disabled: n, enter: r, exit: o } = gH(), { render: s } = Bn();
  return n ? null : s.buttonFullscreen ? L.createElement(L.Fragment, null, (e = s.buttonFullscreen) === null || e === void 0 ? void 0 : e.call(s, { fullscreen: t, disabled: n, enter: r, exit: o })) : L.createElement(kc, { disabled: n, label: t ? "Exit Fullscreen" : "Enter Fullscreen", icon: t ? bH : yH, renderIcon: t ? s.iconExitFullscreen : s.iconEnterFullscreen, onClick: t ? o : r });
}
function Bx({ augment: e, contains: t, addParent: n }) {
  e(({ fullscreen: r, toolbar: o, ...s }) => ({
    toolbar: _g(o, Zh, L.createElement(_H, null)),
    fullscreen: Fx(r),
    ...s
  })), n(t(s_) ? s_ : cg, uo(Zh, vH));
}
const wH = {
  controls: !0,
  playsInline: !0
}, jx = (e) => ({
  ...wH,
  ...e
});
function EH() {
  const { video: e } = Bn();
  return jx(e);
}
function xH() {
  var e;
  return ((e = navigator.userAgentData) === null || e === void 0 ? void 0 : e.brands.some(({ brand: t }) => t === "Chromium")) || !!window.chrome;
}
function CH() {
  return /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent);
}
function OH({ slide: e, offset: t }) {
  const n = EH(), { publish: r } = Pc(), { setContainerRef: o, containerRect: s, containerRef: u } = Eg(), { getOwnerDocument: c } = Ks(), { animation: d } = Bn(), p = L.useRef(null), h = L.useRef(!1);
  L.useEffect(() => {
    t !== 0 && p.current && !p.current.paused && p.current.pause();
  }, [t]), L.useEffect(() => {
    t === 0 && p.current && (e.autoPlay || n.autoPlay) && (r(e7), p.current.play().catch(() => {
    }));
  }, [t, n.autoPlay, e.autoPlay, r]);
  const m = kt(() => {
    const S = setTimeout(() => {
      if (u.current) {
        const C = u.current.style.border;
        u.current.style.border = "1px solid transparent", _x(u.current), u.current.style.border = C;
      }
    }, Math.max(d.swipe, d.navigation || 0) + 50);
    return () => clearTimeout(S);
  });
  L.useEffect(() => {
    if (xH() && t === 0)
      return m();
  }, [t, m]);
  const g = kt((S) => {
    t === 0 && (n.autoPlay || e.autoPlay) && S.paused && S.play().catch(() => {
    });
  }), y = L.useCallback((S) => {
    p.current = S, S && g(S);
  }, [g]);
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
      const C = (B) => (U) => {
        U.target === p.current && (S = B, h.current = S);
      }, T = C(!0), R = C(!1);
      return c().addEventListener("enterpictureinpicture", T), c().addEventListener("leavepictureinpicture", R), () => {
        c().removeEventListener("enterpictureinpicture", T), c().removeEventListener("leavepictureinpicture", R), S && (h.current = !1, c().exitPictureInPicture().catch(() => {
        }));
      };
    }
  }, [t, c]);
  const { width: b, height: _, poster: w, sources: N } = e, F = () => {
    const S = {};
    if (S.style = { maxWidth: "100%", maxHeight: "100%" }, b && _ && s) {
      const C = b / _ > s.width / s.height, T = C ? s.width : Math.round(s.height / _ * b), R = C ? Math.round(s.width / b * _) : s.height;
      S.width = T, S.height = R, S.style.width = T, S.style.height = R;
    }
    return S;
  }, x = (S) => e[S] === !1 ? null : e[S] === !0 ? { [S]: !0 } : n[S] === !1 ? null : n[S] === !0 ? { [S]: !0 } : null, I = (S) => n[S] || e[S] ? { [S]: e[S] || n[S] } : null, O = (S) => {
    h.current && S.stopPropagation();
  };
  return L.createElement(L.Fragment, null, N && L.createElement("div", { ref: o, style: {
    width: "100%",
    height: "100%",
    ...b ? { maxWidth: `${b}px` } : null
  }, className: $r(yt("video_container"), yt(Kd), yt(fg)) }, s && L.createElement("video", { ref: y, poster: w, ...F(), ...x("controls"), ...x("playsInline"), ...x("loop"), ...x("muted"), ...x("playsInline"), ...x("disablePictureInPicture"), ...x("disableRemotePlayback"), ...I("controlsList"), ...I("crossOrigin"), ...I("preload"), onPlay: () => {
    var S;
    if (t !== 0) {
      (S = p.current) === null || S === void 0 || S.pause();
      return;
    }
    r(t7);
  }, onEnded: () => {
    r(n7);
  }, onWheel: O, onKeyDown: O, onPointerDown: (S) => {
    O(S), CH() && p.current && p.current.getBoundingClientRect().bottom - S.clientY < 40 && S.stopPropagation();
  } }, N.map(({ src: S, type: C, media: T }) => L.createElement("source", { key: [S, C, T].filter(Boolean).join("|"), src: S, type: C, media: T })))));
}
function SH(e) {
  return e.type === "video";
}
function w_({ augment: e }) {
  e(({ render: { slide: t, ...n }, video: r, ...o }) => ({
    render: {
      slide: ({ slide: s, offset: u, rect: c }) => {
        var d;
        return SH(s) ? L.createElement(OH, { key: (d = s.sources) === null || d === void 0 ? void 0 : d.map((p) => p.src).join("|"), slide: s, offset: u }) : t == null ? void 0 : t({ slide: s, offset: u, rect: c });
      },
      ...n
    },
    video: jx(r),
    ...o
  }));
}
const Wx = {
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
function TH(e) {
  return Math.min(Math.max(e, Number.EPSILON), 1);
}
function Ux(e) {
  const { minZoom: t, ...n } = { ...Wx, ...e };
  return { minZoom: TH(t), ...n };
}
function PH(e, t, n, r) {
  const o = L.useRef(void 0), s = L.useRef(void 0), { zoom: u } = Bn().animation, c = wg(), d = kt(() => {
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
  return ra(d, [e, t, n, d]), L.useCallback(() => {
    s.current = r != null && r.current ? window.getComputedStyle(r.current).transform : void 0;
  }, [r]);
}
function kH(e, t) {
  const { on: n } = Bn(), r = kt(() => {
    var o;
    t || (o = n.zoom) === null || o === void 0 || o.call(n, { zoom: e });
  });
  L.useEffect(r, [e, r]);
}
function Jd() {
  const { zoom: e } = Bn();
  return Ux(e);
}
function NH(e, t) {
  var n;
  const r = typeof e == "function" ? (n = e(t)) !== null && n !== void 0 ? n : Wx.maxZoom : e;
  return Math.max(r, 1);
}
function IH(e, t) {
  var n, r;
  let o = { width: 0, height: 0 }, s = { width: 0, height: 0 };
  const { currentSlide: u } = fo(), { imageFit: c } = Bn().carousel, { maxZoomPixelRatio: d, maxZoom: p } = Jd();
  if (e && u) {
    const m = { ...u, ...t };
    if (Go(m)) {
      const g = yg(m, c), y = Math.max(...(((n = m.srcSet) === null || n === void 0 ? void 0 : n.map((_) => _.width)) || []).concat(m.width ? [m.width] : [])), b = Math.max(...(((r = m.srcSet) === null || r === void 0 ? void 0 : r.map((_) => _.height)) || []).concat(m.height ? [m.height] : []));
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
  const h = u && o.width ? Go(u) ? Math.max(vg(s.width / o.width, 5), 1) : NH(p, u) : 1;
  return { imageRect: o, maxZoom: h };
}
function E_(e, t) {
  return Math.hypot(e.clientX - t.clientX, e.clientY - t.clientY);
}
function x_(e, t, n = 100, r = 2) {
  return e * Math.min(1 + Math.abs(t / n), r) ** Math.sign(t);
}
function AH(e, t, n, r, o, s, u, c, d) {
  const p = L.useRef([]), h = L.useRef(0), m = L.useRef(void 0), { globalIndex: g } = fo(), { getOwnerWindow: y } = Ks(), { containerRef: b, subscribeSensors: _ } = po(), { keyboardMoveDistance: w, zoomInMultiplier: N, wheelZoomDistanceFactor: F, scrollToZoom: x, doubleTapDelay: I, doubleClickDelay: O, doubleClickMaxStops: S, pinchZoomDistanceFactor: C, pinchZoomV4: T } = Jd(), R = L.useCallback((se) => {
    if (b.current) {
      const { pageX: me, pageY: J } = se, { scrollX: re, scrollY: ae } = y(), { left: ye, top: Se, width: Ce, height: pe } = b.current.getBoundingClientRect();
      return [me - ye - re - Ce / 2, J - Se - ae - pe / 2];
    }
    return [];
  }, [b, y]), B = kt((se) => {
    const { key: me, metaKey: J, ctrlKey: re } = se, ae = J || re, ye = () => {
      se.preventDefault(), se.stopPropagation();
    };
    if (e > 1) {
      const Se = (Ce, pe) => {
        ye(), c(Ce, pe);
      };
      me === "ArrowDown" ? Se(0, w) : me === "ArrowUp" ? Se(0, -w) : me === "ArrowLeft" ? Se(-w, 0) : me === "ArrowRight" && Se(w, 0);
    }
    me === "+" || ae && me === "=" ? (ye(), o()) : me === "-" || ae && me === "_" ? (ye(), s()) : ae && me === "0" && (ye(), u(1));
  }), U = kt((se) => {
    if ((se.ctrlKey || x) && Math.abs(se.deltaY) > Math.abs(se.deltaX)) {
      se.stopPropagation(), u(x_(e, -se.deltaY, F), !0, ...R(se));
      return;
    }
    e > 1 && (se.stopPropagation(), x || c(se.deltaX, se.deltaY));
  }), te = L.useCallback((se) => {
    const me = p.current;
    me.splice(0, me.length, ...me.filter((J) => J.pointerId !== se.pointerId));
  }, []), z = L.useCallback((se) => {
    te(se), se.persist(), p.current.push(se);
  }, [te]), ne = kt((se) => {
    var me;
    const J = p.current;
    if (se.pointerType === "mouse" && se.buttons > 1 || !(!((me = d == null ? void 0 : d.current) === null || me === void 0) && me.contains(se.target)))
      return;
    e > 1 && se.stopPropagation();
    const { timeStamp: re } = se;
    if (J.length === 0 && re - h.current < (se.pointerType === "touch" ? I : O)) {
      h.current = 0;
      const ae = e >= 1 ? e !== n ? e * Math.max(n ** (1 / S), N) : 1 : e !== t ? e / Math.max(t ** (-1 / S), N) : 1;
      u(ae, !1, ...R(se));
    } else
      h.current = re;
    if (z(se), J.length === 2) {
      const ae = E_(J[0], J[1]);
      m.current = {
        previousDistance: ae,
        initialDistance: Math.max(ae, 1),
        initialZoom: e
      };
    }
  }), fe = kt((se) => {
    const me = p.current, J = me.find((re) => re.pointerId === se.pointerId);
    if (me.length === 2 && m.current) {
      se.stopPropagation(), z(se);
      const re = E_(me[0], me[1]), ae = T ? m.current.initialZoom / m.current.initialDistance * re : x_(e, re - m.current.previousDistance, C);
      u(ae, !0, ...me.map((ye) => R(ye)).reduce((ye, Se) => Se.map((Ce, pe) => ye[pe] + Ce / 2))), m.current.previousDistance = re;
      return;
    }
    e > 1 && (se.stopPropagation(), J && (me.length === 1 && c((J.clientX - se.clientX) / e, (J.clientY - se.clientY) / e), z(se)));
  }), ge = L.useCallback((se) => {
    const me = p.current;
    me.length === 2 && me.find((J) => J.pointerId === se.pointerId) && (m.current = void 0), te(se);
  }, [te]), Pe = L.useCallback(() => {
    const se = p.current;
    se.splice(0, se.length), h.current = 0, m.current = void 0;
  }, []);
  Ix(_, ne, fe, ge, r), L.useEffect(Pe, [g, Pe]), L.useEffect(() => r ? () => {
  } : Zd(Pe, _(pg, B), _(hg, U)), [r, _, Pe, B, U]);
}
function RH(e, t, n) {
  const [r, o] = L.useState(1), [s, u] = L.useState(0), [c, d] = L.useState(0), p = PH(r, s, c, n), { currentSlide: h, globalIndex: m } = fo(), { containerRect: g, slideRect: y } = po(), { minZoom: b, zoomInMultiplier: _ } = Jd(), w = h && Go(h) ? h.src : void 0, N = !(n != null && n.current);
  ra(() => {
    o(1), u(0), d(0);
  }, [m, w]);
  const F = L.useCallback((C, T, R) => {
    const B = R || r, U = s - (C || 0), te = c - (T || 0), z = (e.width * B - y.width) / 2 / B, ne = (e.height * B - y.height) / 2 / B;
    u(Math.min(Math.abs(U), Math.max(z, 0)) * Math.sign(U)), d(Math.min(Math.abs(te), Math.max(ne, 0)) * Math.sign(te));
  }, [r, s, c, y, e.width, e.height]), x = L.useCallback((C, T, R, B) => {
    const U = vg(C + 0.01 < t ? C - 0.01 > b ? C : b : t, 5);
    T || p(), F(R ? R * (1 / r - 1 / U) : 0, B ? B * (1 / r - 1 / U) : 0, U), o(U);
  }, [r, b, t, F, p]), I = kt(() => {
    r > 1 && (r > t && x(t, !0), F());
  });
  ra(I, [g.width, g.height, I]);
  const O = L.useCallback(() => {
    const C = r * _;
    x(r < 1 && C > 1 ? 1 : C);
  }, [r, _, x]), S = L.useCallback(() => {
    const C = r / _;
    x(r > 1 && C < 1 ? 1 : C);
  }, [r, _, x]);
  return { zoom: r, offsetX: s, offsetY: c, disabled: N, changeOffsets: F, changeZoom: x, zoomIn: O, zoomOut: S };
}
const zx = L.createContext(null), Cg = ia("useZoom", "ZoomControllerContext", zx);
function MH({ children: e }) {
  const [t, n] = L.useState(), { slideRect: r } = po(), { ref: o, minZoom: s } = Jd(), { imageRect: u, maxZoom: c } = IH(r, t == null ? void 0 : t.imageDimensions), { zoom: d, offsetX: p, offsetY: h, disabled: m, changeZoom: g, changeOffsets: y, zoomIn: b, zoomOut: _ } = RH(u, c, t == null ? void 0 : t.zoomWrapperRef);
  kH(d, m), AH(d, s, c, m, b, _, g, y, t == null ? void 0 : t.zoomWrapperRef);
  const w = L.useMemo(() => ({ zoom: d, minZoom: s, maxZoom: c, offsetX: p, offsetY: h, disabled: m, zoomIn: b, zoomOut: _, changeZoom: g }), [d, s, c, p, h, m, b, _, g]);
  L.useImperativeHandle(o, () => w, [w]);
  const N = L.useMemo(() => ({ ...w, setZoomWrapper: n }), [w, n]);
  return L.createElement(zx.Provider, { value: N }, e);
}
const DH = Ia("ZoomIn", L.createElement(
  L.Fragment,
  null,
  L.createElement("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" }),
  L.createElement("path", { d: "M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" })
)), LH = Ia("ZoomOut", L.createElement("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z" })), C_ = L.forwardRef(function({ zoomIn: t, onLoseFocus: n }, r) {
  const o = L.useRef(!1), s = L.useRef(!1), { zoom: u, minZoom: c, maxZoom: d, zoomIn: p, zoomOut: h, disabled: m } = Cg(), { render: g } = Bn(), y = m || (t ? u >= d : u <= c);
  return L.useEffect(() => {
    y && o.current && s.current && n(), y || (o.current = !0);
  }, [y, n]), L.createElement(kc, { ref: r, disabled: y, label: t ? "Zoom in" : "Zoom out", icon: t ? DH : LH, renderIcon: t ? g.iconZoomIn : g.iconZoomOut, onClick: t ? p : h, onFocus: () => {
    s.current = !0;
  }, onBlur: () => {
    s.current = !1;
  } });
});
function FH() {
  const e = L.useRef(null), t = L.useRef(null), { focus: n } = po(), r = L.useCallback((u) => {
    var c, d;
    !((c = u.current) === null || c === void 0) && c.disabled ? n() : (d = u.current) === null || d === void 0 || d.focus();
  }, [n]), o = L.useCallback(() => r(e), [r]), s = L.useCallback(() => r(t), [r]);
  return L.createElement(
    L.Fragment,
    null,
    L.createElement(C_, { zoomIn: !0, ref: e, onLoseFocus: s }),
    L.createElement(C_, { ref: t, onLoseFocus: o })
  );
}
function $H() {
  const { render: e } = Bn(), t = Cg();
  return e.buttonZoom ? L.createElement(L.Fragment, null, e.buttonZoom(t)) : L.createElement(FH, null);
}
function BH(e) {
  var t;
  return (((t = e.srcSet) === null || t === void 0 ? void 0 : t.length) || 0) > 0;
}
function jH({ current: e, preload: t }, { type: n, source: r }) {
  switch (n) {
    case "fetch":
      return e ? { current: e, preload: r } : { current: r };
    case "done":
      return r === t ? { current: r } : { current: e, preload: t };
    default:
      throw new Error(gx);
  }
}
function WH(e) {
  var t, n;
  const [{ current: r, preload: o }, s] = L.useReducer(jH, {}), { slide: u, rect: c, imageFit: d, render: p, interactive: h } = e, m = u.srcSet.sort((O, S) => O.width - S.width), g = (t = u.width) !== null && t !== void 0 ? t : m[m.length - 1].width, y = (n = u.height) !== null && n !== void 0 ? n : m[m.length - 1].height, b = yg(u, d), _ = Math.max(...m.map((O) => O.width)), w = Math.min((b ? Math.max : Math.min)(c.width, g * (c.height / y)), _), N = f7(), F = kt(() => {
    var O;
    const S = (O = m.find((C) => C.width >= w * N)) !== null && O !== void 0 ? O : m[m.length - 1];
    (!r || m.findIndex((C) => C.src === r) < m.findIndex((C) => C === S)) && s({ type: "fetch", source: S.src });
  });
  ra(F, [c.width, c.height, N, F]);
  const x = kt((O) => s({ type: "done", source: O })), I = {
    WebkitTransform: h ? "initial" : "translateZ(0)"
  };
  return b || Object.assign(I, c.width / c.height < g / y ? { width: "100%", height: "auto" } : { width: "auto", height: "100%" }), L.createElement(
    L.Fragment,
    null,
    o && o !== r && L.createElement(cd, { key: "preload", ...e, offset: void 0, slide: { ...u, src: o, srcSet: void 0 }, style: { position: "absolute", visibility: "hidden", ...I }, onLoad: () => x(o), render: {
      ...p,
      iconLoading: () => null,
      iconError: () => null
    } }),
    r && L.createElement(cd, { key: "current", ...e, slide: { ...u, src: r, srcSet: void 0 }, style: I })
  );
}
function UH({ render: e, slide: t, offset: n, rect: r }) {
  var o;
  const [s, u] = L.useState(), c = L.useRef(null), d = Go(t), { zoom: p, maxZoom: h, offsetX: m, offsetY: g, setZoomWrapper: y } = Cg(), b = p > 1, { carousel: _, on: w } = Bn(), { currentIndex: N } = fo();
  ra(() => {
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
  }, [n, d, r]), ra(() => n === 0 ? (y({ zoomWrapperRef: c, imageDimensions: s }), () => y(void 0)) : () => {
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
        return (I = w.click) === null || I === void 0 ? void 0 : I.call(w, { index: N });
      } : void 0
    };
    F = BH(t) ? L.createElement(WH, { ...x, slide: t, interactive: b, rect: n === 0 ? { width: r.width * p, height: r.height * p } : r }) : L.createElement(cd, { onLoad: (I) => u({ width: I.naturalWidth, height: I.naturalHeight }), ...x });
  }
  return F ? L.createElement("div", { ref: c, className: $r(yt(lx), yt(Kd), yt(fg), b && yt(a7)), style: n === 0 ? { transform: `scale(${p}) translateX(${m}px) translateY(${g}px)` } : void 0 }, F) : null;
}
const Hx = ({ augment: e, addModule: t }) => {
  e(({ zoom: n, toolbar: r, render: o, controller: s, ...u }) => {
    const c = Ux(n);
    return {
      zoom: c,
      toolbar: _g(r, l_, L.createElement($H, null)),
      render: {
        ...o,
        slide: (d) => {
          var p, h;
          return Go(d.slide) || d.slide.type != null && (!((p = c.supports) === null || p === void 0) && p.includes(d.slide.type)) ? L.createElement(UH, { render: o, ...d }) : (h = o.slide) === null || h === void 0 ? void 0 : h.call(o, d);
        }
      },
      controller: { ...s, preventDefaultWheelY: c.scrollToZoom },
      ...u
    };
  }), t(uo(l_, MH));
}, rm = ({ imageUrl: e, isOpen: t = !1, onClose: n = () => {
}, downloadFileFetcher: r }) => {
  const [o, s] = st(null), [u, c] = st(0);
  Zt(() => {
    (async () => {
      if (e)
        if (!String(e).startsWith("data:") && !A.includes(e, "localhost") && r) {
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
  return /* @__PURE__ */ P(
    Dx,
    {
      open: t,
      plugins: [Bx, nm, Hx],
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
          /* @__PURE__ */ P("button", { type: "button", className: "yarl__button", onClick: d, children: /* @__PURE__ */ P(sd, { icon: q8, size: "xl" }) }, "rotate-left"),
          /* @__PURE__ */ P("button", { type: "button", className: "yarl__button", onClick: p, children: /* @__PURE__ */ P(sd, { icon: V8, size: "xl" }) }, "rotate-right"),
          "zoom",
          "download",
          "fullscreen",
          "close"
        ]
      }
    }
  );
};
rm.propTypes = {
  imageUrl: l.string,
  isOpen: l.bool,
  onClose: l.func,
  downloadFileFetcher: l.func
};
const ud = ({
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
  mobileCardView: N = !1,
  cardLine1: F = [],
  cardLine2: x = [],
  cardLine3: I = [],
  cardLine4: O = [],
  dataHandler: S = null,
  searchParams: C = null,
  onLoadMore: T = null,
  isLoadingMoreProp: R = !1,
  hasMore: B = null,
  mergeConfig: U = null,
  downloadFileFetcher: te
}) => {
  const [z, ne] = st({}), [fe, ge] = st({ isOpen: !1, src: null });
  Zt(() => {
    ne({}), p([]), m([]);
  }, [u]), Zt(() => {
    const $ = A.map(g, (D) => D[t[0].key]);
    c(g), p(g), m($);
  }, [g]);
  const Pe = ($, D) => {
    o && o($, D);
  }, se = ($, D) => {
    let G = [], Z = [];
    A.includes(h, $[D]) ? (G = A.reject(d, (le) => A.isEqual(le[D], $[D])), Z = A.reject(h, (le) => A.isEqual(le, $[D]))) : (G = [...d, $], Z = [...h, $[D]]), m(Z), p(G), c(G), y(G.length === w);
  }, me = ($) => {
    Pe("onClick", $), ne($);
  }, J = ($, D) => {
    if (A.isEmpty($))
      return null;
    if (e) {
      const Z = $.match(/.{1,60}/g) || [$];
      return A.map(Z, (le, Ne) => /* @__PURE__ */ P("div", { children: le }, Ne));
    }
    const G = /* @__PURE__ */ P("span", { className: Qt.icon, children: /* @__PURE__ */ P(
      Er,
      {
        position: "bottom right",
        content: /* @__PURE__ */ P("div", { className: Qt.popupContent, children: $ }),
        trigger: /* @__PURE__ */ P(We, { name: "comment alternate outline", style: { color: "#286b92" } })
      }
    ) }, 1);
    return D >= $.length ? $ : /* @__PURE__ */ P("div", { className: Qt.noWrap, children: [`${$.slice(0, D)}...`, G] });
  }, re = ($, D) => {
    if (A.isEmpty($)) return null;
    let G = $;
    if (typeof $[0] == "object" && (G = A.map($, (Ne) => Ne[D.split(",")[1]])), e)
      return G.join(", ");
    const Z = A.map(G, (Ne, de) => /* @__PURE__ */ P("div", { className: Qt.arrayCell, children: Ne }, de)), le = /* @__PURE__ */ P("span", { className: Qt.icon, children: /* @__PURE__ */ P(
      Er,
      {
        position: "bottom right",
        content: /* @__PURE__ */ P("div", { className: Qt.popupContent, children: Z }),
        trigger: /* @__PURE__ */ P(We, { name: "comment alternate outline", style: { color: "#286b92" } })
      }
    ) }, 1);
    return G.length === 1 ? G : [`${G[0]}...`, le];
  }, ae = ($, D, G = "") => {
    const Z = new Date($), le = new Date(D);
    let Ne = /* @__PURE__ */ new Date();
    A.isEmpty(G) || (Ne = new Date(G));
    const de = le - Z, xe = Ne - Z;
    if (de <= 0 || xe >= de)
      return 100;
    const ue = xe / de * 100;
    return parseInt(ue.toFixed(0), 10);
  }, ye = ($, D, G, Z, le, Ne) => {
    let de = "#2483bb";
    if (D) {
      const xe = D[0];
      if (xe)
        if (xe.colorKey)
          Z && (de = Yt(xe.colorKey, Z));
        else
          for (const ue of D)
            ue.onName === $ ? de = ue.color : ue.default && (de = ue.default);
    }
    return G ? /* @__PURE__ */ P(
      ft,
      {
        style: { backgroundColor: de },
        className: Qt.ButtonLabel,
        onClick: () => typeof G == "function" ? G(Z) : Pe(G, Z),
        fluid: !0,
        children: A.isEmpty(le) ? String($) : Ol($, le)
      }
    ) : $ ? /* @__PURE__ */ P(ft, { style: { backgroundColor: de, color: Ne }, className: Qt.ButtonLabel, fluid: !0, children: A.isEmpty(le) ? String($) : Ol($, le) }) : null;
  }, Se = ($, D, G, Z) => {
    let le = ae($, D);
    G(Z) !== void 0 && (le = ae($, D, G(Z)));
    let Ne = "#01C875";
    return le >= 90 && (Ne = "#FDAB3D"), le === 100 && (Ne = "#E2445B"), /* @__PURE__ */ oe("div", { children: [
      /* @__PURE__ */ P("div", { className: Qt.progressBarLabel, children: `${Rr(D, !1, !1, !0)} ${le}%` }),
      /* @__PURE__ */ P(
        L6,
        {
          isLabelVisible: !1,
          animateOnRender: !0,
          width: "11rem",
          completed: le,
          maxCompleted: 100,
          baseBgColor: "silver",
          bgColor: Ne
        }
      )
    ] });
  }, Ce = ($, D) => {
    if (!A.includes($, "[]?")) return A.get(D, $);
    const [G, Z] = $.replace("[]?", "").split("."), le = A.get(D, G, []);
    return A.isArray(le) ? A.filter(
      A.map(le, (Ne) => A.get(Ne, Z)),
      Boolean
    ) : [];
  }, pe = ({
    format: $,
    value: D,
    key: G,
    endDate: Z,
    boolLabels: le,
    /* 	colorLabel, */
    translate: Ne,
    /* onClick,
    labelData, */
    /* 	onKeyEndDate, */
    sum: de,
    colorLabel: xe,
    onClick: ue,
    widthZero: q,
    nullToZero: ee,
    stringLength: we,
    rowData: Te,
    textColor: Re,
    stopDateHandler: Be
  }) => {
    switch ($) {
      case "timeBetween":
        return bE(D, Z);
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
        return Se(D, Z, Be, Te);
      case "dateTimeDay":
        return Rr(D, !1, !1, !1, !0);
      case "dateMonthYear":
        return Rr(D, !1, !1, !1, !1, !0);
      case "pastDays":
        return k6(D);
      case "phone":
        return T6(D);
      case "currency":
        return k0(D, !1, q, ee);
      case "decimal":
        return P6(D, q, ee);
      case "integerCurrency":
        return k0(D, !0, q, ee);
      case "number":
        return Number.isNaN(D) || D === null ? "" : Number(D).toLocaleString("en-US");
      case "blankZero": {
        if (A.isArray(D) || typeof D == "string") {
          const Fe = D ? D.length : 0;
          return Fe === 0 ? "" : Fe;
        }
        return D === 0 ? "" : D;
      }
      case "count":
        return D ? D.length : 0;
      case "boolean":
        return de ? D : le ? D ? le.true || "si" : le.false || "no" : D ? "si" : "no";
      case "translate":
        return Ol(D, Ne);
      case "truncate":
        return J(D, we);
      case "array":
        return A.map(D, (et) => /* @__PURE__ */ P("div", { children: Yt(G.split(",")[1], et) }));
      case "colorLabel":
        return ke(D, Re);
      case "arrayTruncate": {
        const Fe = G.includes("[]?") ? Ce(G, Te) : D;
        return re(Fe, G);
      }
      case "label":
        return ye(D, xe, ue, Te, Ne, Re);
      case "coloredText": {
        let Fe = "inherit";
        if (xe)
          for (const Ze of xe)
            Ze.onName === D ? Fe = Ze.color : Ze.default && Fe === "inherit" && (Fe = Ze.default);
        const et = A.isEmpty(Ne) ? String(D) : Ol(D, Ne);
        return /* @__PURE__ */ P("span", { style: { color: Fe, fontWeight: 500 }, children: et });
      }
      case "longText":
        return J(D, we);
      case "image":
        return D ? /* @__PURE__ */ P(
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
  }, ke = ($, D) => $ === "En Línea" && D !== "string" ? /* @__PURE__ */ P("div", { style: { color: "hsl(130, 92.00%, 34.10%)" }, children: $ }) : /* @__PURE__ */ P("div", { className: Qt.labelColor, style: { color: "#000000" }, children: $ }), $e = ($, D) => A.map($, ({ content: Z, hidden: le, type: Ne, color: de = "hsl(0, 0 %, 95 %)", onClick: xe, visible: ue }, q) => {
    if (le || typeof ue == "function" && ue(D) === !1)
      return null;
    switch (Ne) {
      case "icon":
        return /* @__PURE__ */ P(
          ft,
          {
            disabled: !1,
            className: Qt.ButtonIcon,
            style: {
              color: de,
              border: `2px solid ${de}`
            },
            onClick: () => Pe(xe, D),
            children: /* @__PURE__ */ P(We, { name: Z })
          },
          q
        );
      case "link":
        return /* @__PURE__ */ P(
          lr,
          {
            style: { color: de },
            className: Qt.ButtonLink,
            onClick: () => Pe(xe, D),
            children: Z
          },
          q
        );
      default:
        return null;
    }
  }), W = ($, D = !1) => A.map(
    t,
    ({
      key: Z,
      format: le,
      endDateKey: Ne = null,
      action: de = [],
      multipleColumns: xe = [],
      dataPosition: ue = "left",
      twoLines: q = !1,
      multiple: ee = !1,
      line1: we = {},
      line2: Te = {},
      stringLength: Re = 20,
      hidden: Be = !1,
      translate: Fe = {},
      colorLabel: et,
      textColor: Ze = "#000000",
      style: Ge = {},
      stopDateHandler: Ve = () => {
      },
      render: Tt = null,
      valueGetter: ve = null,
      boolLabels: It = null
    }, At) => {
      let pt = {};
      _ !== void 0 && (pt = _($));
      const nt = ve && typeof ve == "function" ? ve($) : Yt(Z, $, !1, D), Gt = A.isEmpty(Ne) ? null : Yt(Ne, $);
      if (Be)
        return null;
      if (Tt && typeof Tt == "function") {
        const Ue = Tt($, { setOpentImagePreview: ge });
        return /* @__PURE__ */ P(bt.Cell, { verticalAlign: "middle", textAlign: ue, style: pt, className: Qt.cell, children: Ue }, At);
      }
      if (!A.isEmpty(de) && !e && !D)
        return /* @__PURE__ */ P(
          bt.Cell,
          {
            verticalAlign: "middle",
            textAlign: ue,
            style: { ...pt, ...Ge },
            className: Qt.cellButton,
            children: $e(de, $)
          },
          At
        );
      if (!A.isEmpty(de) && e)
        return null;
      if (ee)
        return /* @__PURE__ */ P(
          bt.Cell,
          {
            verticalAlign: "middle",
            textAlign: "center",
            style: { ...pt, ...Ge },
            className: Qt.cellButton,
            onClick: () => {
              se($, Z);
            },
            children: /* @__PURE__ */ P(Gn, { checked: A.includes(h, $[Z]) }, At)
          },
          At
        );
      if (q) {
        const Ue = Yt(A.get(we, "key", null), $), Ft = Yt(A.get(Te, "key", null), $), tt = Yt(A.get(we, "endDateKey", null), $), un = Yt(A.get(Te, "endDateKey", null), $);
        return /* @__PURE__ */ oe(
          bt.Cell,
          {
            verticalAlign: "middle",
            style: pt,
            onClick: () => me($),
            children: [
              /* @__PURE__ */ P("div", { className: Qt.towLineRow, style: { justifyContent: A.get(we, "dataPosition", "left"), ...pt }, children: pe({
                value: Ue,
                format: le,
                endDate: tt,
                stringLength: Re,
                key: Z,
                translate: Fe,
                colorLabel: et,
                boolLabels: It,
                rowData: $
              }) }),
              /* @__PURE__ */ P("div", { className: Qt.towLineRow, style: { justifyContent: A.get(Te, "dataPosition", "left"), ...pt }, children: pe({
                value: Ft,
                format: le,
                endDate: un,
                stringLength: Re,
                key: Z,
                translate: Fe,
                colorLabel: et,
                boolLabels: It,
                rowData: $
              }) })
            ]
          },
          At
        );
      }
      return A.isEmpty(xe) ? /* @__PURE__ */ P(
        bt.Cell,
        {
          verticalAlign: "middle",
          className: Qt.cell,
          textAlign: ue,
          style: { color: Ze, ...pt },
          onClick: () => me($),
          children: pe({
            value: nt,
            format: le,
            endDate: Gt,
            stringLength: Re,
            key: Z,
            sum: D,
            translate: Fe,
            colorLabel: et,
            boolLabels: It,
            rowData: $,
            textColor: Ze,
            stopDateHandler: Ve
          })
        },
        At
      ) : A.map(xe, (Ft, tt) => {
        const un = At + tt;
        return /* @__PURE__ */ P(
          bt.Cell,
          {
            verticalAlign: "middle",
            style: pt,
            textAlign: A.get(Ft, "dataPosition", "left"),
            onClick: () => me($),
            children: pe({
              value: Yt(A.get(Ft, "key", null), $),
              format: A.get(Ft, "format", ""),
              endDate: A.get(Ft, "endDate", null),
              stringLength: Re,
              key: Z,
              translate: Fe,
              colorLabel: et,
              boolLabels: It,
              rowData: $
            })
          },
          un
        );
      });
    }
  ), H = () => {
    if (!A.isEmpty(n)) {
      const $ = A.map(n, (G, Z) => {
        if (!A.isEmpty(b)) {
          const le = Yt(b.headerTitle, G, !1), Ne = Yt(b.dataDetail, G, !1);
          return [
            /* @__PURE__ */ P(bt.Row, { className: Qt.sumRow, as: "tr", children: /* @__PURE__ */ P(
              bt.Cell,
              {
                verticalAlign: "middle",
                className: Qt.cell,
                style: { backgroundColor: "#dddddd", color: "black" },
                colSpan: 16,
                children: le
              }
            ) }, `sumRow-${Z}`),
            A.map(Ne, (de, xe) => /* @__PURE__ */ P(
              bt.Row,
              {
                className: Qt.groupHover,
                style: z === de ? { backgroundColor: s } : {},
                onDoubleClick: () => {
                  Pe("Watch", de);
                },
                children: W(de)
              },
              `detail-${Z}-${xe}`
            ))
          ];
        }
        return /* @__PURE__ */ P(
          bt.Row,
          {
            className: Qt.groupHover,
            style: z === G ? { backgroundColor: s } : {},
            onDoubleClick: () => {
              Pe("Watch", G);
            },
            children: W(G)
          },
          Z
        );
      });
      let D = [];
      return A.isEmpty(r) || (D = [
        /* @__PURE__ */ P(bt.Row, { className: Qt.sumRow, children: W(r, !0) }, "sumRow")
      ]), [...$, ...D];
    }
    return /* @__PURE__ */ P(bt.Row, { children: /* @__PURE__ */ P(bt.Cell, { colSpan: 34, children: /* @__PURE__ */ P("div", { className: Qt.emptyChat, children: /* @__PURE__ */ oe(qn, { as: "h3", color: "grey", children: [
      /* @__PURE__ */ P("div", { className: Qt.emptyDataIcon, children: /* @__PURE__ */ oe(We.Group, { size: "large", children: [
        /* @__PURE__ */ P(We, { name: "list alternate outline" }),
        /* @__PURE__ */ P(We, { corner: !0, name: "close", color: "red" })
      ] }) }),
      "No se ha encontrado ningun dato"
    ] }) }) }) });
  };
  if (N) {
    const $ = S ? async (D, G = !1, Z = !1, le = !1) => S(D, G, Z, le, { withLoading: !(!G && !Z && !le) }) : null;
    return /* @__PURE__ */ oe("div", { className: Qt.cardsWrapper, children: [
      /* @__PURE__ */ P(
        EE,
        {
          data: n,
          columns: t,
          headerDetail: b,
          setRowStyle: _,
          clickedRowColors: s,
          onHandlerTable: Pe,
          handlerClick: me,
          formatData: pe,
          clikedData: z,
          isPDF: e,
          cardLine1: F,
          enableInfiniteScroll: !!T || !!S,
          onLoadMore: T,
          isLoadingMore: R,
          hasMore: B,
          cardLine2: x,
          cardLine3: I,
          cardLine4: O,
          multipleHandler: se,
          concatKeys: h,
          dataHandler: $,
          searchParams: C,
          totalRows: w,
          mergeConfig: U
        }
      ),
      /* @__PURE__ */ P(
        rm,
        {
          imageUrl: fe.src,
          onClose: () => ge({ isOpen: !1, src: null }),
          isOpen: fe.isOpen,
          downloadFileFetcher: te
        }
      )
    ] });
  }
  return /* @__PURE__ */ oe(bt.Body, { children: [
    H(),
    /* @__PURE__ */ P(
      rm,
      {
        imageUrl: fe.src,
        onClose: () => ge({ isOpen: !1, src: null }),
        isOpen: fe.isOpen,
        downloadFileFetcher: te
      }
    )
  ] });
};
ud.propTypes = {
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
const zH = "_paginationCell_1jms9_1", HH = "_rowSelector_1jms9_9", YH = "_rowSelectorContainer_1jms9_17", qH = "_paginationContainer_1jms9_29", VH = "_content_1jms9_43", GH = "_pagination_1jms9_1", KH = "_itemCount_1jms9_67", ZH = "_span_1jms9_75", fa = {
  paginationCell: zH,
  rowSelector: HH,
  rowSelectorContainer: YH,
  paginationContainer: qH,
  content: VH,
  pagination: GH,
  itemCount: KH,
  span: ZH
}, Yx = ({ searchParams: e, setSearchParams: t, dataHandler: n, totalRows: r, visiblePagination: o }) => {
  const s = (p) => {
    const h = { ...e, rows: p };
    t(h), n(h);
  }, u = (p, { activePage: h }) => {
    p.preventDefault();
    const m = { ...e, page: h };
    t(m), n(m);
  }, c = () => {
    if (r <= 1)
      return /* @__PURE__ */ oe("span", { className: fa.itemCount, children: [
        "Elementos: 1-1 / ",
        r
      ] });
    const p = e.rows * e.page - e.rows + 1;
    let h = e.rows * e.page;
    return e.page === d() && (h = r), /* @__PURE__ */ P("span", { className: fa.itemCount, children: `Elementos: ${p}-${h}/ ${r}` }, 1);
  }, d = () => {
    const p = parseInt(r / e.rows, 10), h = r % e.rows;
    return p < 1 ? 1 : h > 0 ? p + 1 : p;
  };
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    /* @__PURE__ */ P(xa, { children: o && /* @__PURE__ */ P(bt.Footer, { className: fa.footerContainer, children: /* @__PURE__ */ P(bt.Row, { children: /* @__PURE__ */ P(bt.HeaderCell, { colSpan: "34", className: fa.paginationCell, children: /* @__PURE__ */ oe("div", { className: fa.content, children: [
      /* @__PURE__ */ oe("div", { className: fa.paginationContainer, children: [
        /* @__PURE__ */ P(
          zs,
          {
            className: fa.pagination,
            activePage: e.page,
            ellipsisItem: {
              content: /* @__PURE__ */ P(We, { name: "ellipsis horizontal" }, 1),
              icon: !0
            },
            firstItem: { content: /* @__PURE__ */ P(We, { name: "angle double left" }, 2), icon: !0 },
            lastItem: { content: /* @__PURE__ */ P(We, { name: "angle double right" }, 3), icon: !0 },
            prevItem: { content: /* @__PURE__ */ P(We, { name: "angle left" }, 4), icon: !0 },
            nextItem: { content: /* @__PURE__ */ P(We, { name: "angle right" }, 5), icon: !0 },
            totalPages: String(d()),
            onPageChange: u
          }
        ),
        r >= 1 && c()
      ] }),
      /* @__PURE__ */ oe("div", { className: fa.rowSelectorContainer, children: [
        /* @__PURE__ */ P("span", { className: fa.span, children: "Filas:" }),
        /* @__PURE__ */ P(
          jr,
          {
            className: fa.rowSelector,
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
Yx.propTypes = {
  searchParams: l.object,
  setSearchParams: l.func,
  dataHandler: l.func,
  totalRows: l.number,
  visiblePagination: l.bool
};
var qx = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r(Q, WI);
  })(typeof self < "u" ? self : os, function(n, r) {
    return function() {
      var o = { 328: function(d, p, h) {
        Object.defineProperty(p, "__esModule", { value: !0 }), p.PrintContextConsumer = p.PrintContext = void 0;
        var m = h(496), g = Object.prototype.hasOwnProperty.call(m, "createContext");
        p.PrintContext = g ? m.createContext({}) : null, p.PrintContextConsumer = p.PrintContext ? p.PrintContext.Consumer : function() {
          return null;
        };
      }, 428: function(d, p, h) {
        Object.defineProperty(p, "__esModule", { value: !0 }), p.ReactToPrint = void 0;
        var m = h(316), g = h(496), y = h(190), b = h(328), _ = h(940), w = function(N) {
          function F() {
            var x = N.apply(this, m.__spreadArray([], m.__read(arguments), !1)) || this;
            return x.startPrint = function(I) {
              var O = x.props, S = O.onAfterPrint, C = O.onPrintError, T = O.print, R = O.documentTitle;
              setTimeout(function() {
                var B, U;
                if (I.contentWindow) if (I.contentWindow.focus(), T) T(I).then(function() {
                  return S == null ? void 0 : S();
                }).then(function() {
                  return x.handleRemoveIframe();
                }).catch(function(ne) {
                  C ? C("print", ne) : x.logMessages(["An error was thrown by the specified `print` function"]);
                });
                else {
                  if (I.contentWindow.print) {
                    var te = (U = (B = I.contentDocument) === null || B === void 0 ? void 0 : B.title) !== null && U !== void 0 ? U : "", z = I.ownerDocument.title;
                    R && (I.ownerDocument.title = R, I.contentDocument && (I.contentDocument.title = R)), I.contentWindow.print(), R && (I.ownerDocument.title = z, I.contentDocument && (I.contentDocument.title = te));
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
                }).catch(function(R) {
                  C && C("onBeforePrint", R);
                }) : x.startPrint(I);
              } else x.startPrint(I);
            }, x.handlePrint = function(I) {
              var O = x.props, S = O.bodyClass, C = O.content, T = O.copyStyles, R = O.fonts, B = O.pageStyle, U = O.nonce, te = typeof I == "function" ? I() : null;
              if (te && typeof C == "function" && x.logMessages(['"react-to-print" received a `content` prop and a content param passed the callback return by `useReactToPrint. The `content` prop will be ignored.'], "warning"), te || typeof C != "function" || (te = C()), te !== void 0) if (te !== null) {
                var z = document.createElement("iframe");
                z.width = "".concat(document.documentElement.clientWidth, "px"), z.height = "".concat(document.documentElement.clientHeight, "px"), z.style.position = "absolute", z.style.top = "-".concat(document.documentElement.clientHeight + 100, "px"), z.style.left = "-".concat(document.documentElement.clientWidth + 100, "px"), z.id = "printWindow", z.srcdoc = "<!DOCTYPE html>";
                var ne = (0, y.findDOMNode)(te);
                if (ne) {
                  var fe = ne.cloneNode(!0), ge = fe instanceof Text, Pe = document.querySelectorAll("link[rel~='stylesheet'], link[as='style']"), se = ge ? [] : fe.querySelectorAll("img"), me = ge ? [] : fe.querySelectorAll("video"), J = R ? R.length : 0;
                  x.numResourcesToLoad = Pe.length + se.length + me.length + J, x.resourcesLoaded = [], x.resourcesErrored = [];
                  var re = function(ae, ye) {
                    x.resourcesLoaded.includes(ae) ? x.logMessages(["Tried to mark a resource that has already been handled", ae], "debug") : (ye ? (x.logMessages(m.__spreadArray(['"react-to-print" was unable to load a resource but will continue attempting to print the page'], m.__read(ye), !1)), x.resourcesErrored.push(ae)) : x.resourcesLoaded.push(ae), x.resourcesLoaded.length + x.resourcesErrored.length === x.numResourcesToLoad && x.triggerPrint(z));
                  };
                  z.onload = function() {
                    var ae, ye, Se, Ce;
                    z.onload = null;
                    var pe = z.contentDocument || ((ye = z.contentWindow) === null || ye === void 0 ? void 0 : ye.document);
                    if (pe) {
                      pe.body.appendChild(fe), R && (!((Se = z.contentDocument) === null || Se === void 0) && Se.fonts && (!((Ce = z.contentWindow) === null || Ce === void 0) && Ce.FontFace) ? R.forEach(function(Ze) {
                        var Ge = new FontFace(Ze.family, Ze.source, { weight: Ze.weight, style: Ze.style });
                        z.contentDocument.fonts.add(Ge), Ge.loaded.then(function() {
                          re(Ge);
                        }).catch(function(Ve) {
                          re(Ge, ["Failed loading the font:", Ge, "Load error:", Ve]);
                        });
                      }) : (R.forEach(function(Ze) {
                        return re(Ze);
                      }), x.logMessages(['"react-to-print" is not able to load custom fonts because the browser does not support the FontFace API but will continue attempting to print the page'])));
                      var ke = typeof B == "function" ? B() : B;
                      if (typeof ke != "string") x.logMessages(['"react-to-print" expected a "string" from `pageStyle` but received "'.concat(typeof ke, '". Styles from `pageStyle` will not be applied.')]);
                      else {
                        var $e = pe.createElement("style");
                        U && ($e.setAttribute("nonce", U), pe.head.setAttribute("nonce", U)), $e.appendChild(pe.createTextNode(ke)), pe.head.appendChild($e);
                      }
                      if (S && (ae = pe.body.classList).add.apply(ae, m.__spreadArray([], m.__read(S.split(" ")), !1)), !ge) {
                        for (var W = ge ? [] : ne.querySelectorAll("canvas"), H = pe.querySelectorAll("canvas"), $ = 0; $ < W.length; ++$) {
                          var D = W[$], G = H[$].getContext("2d");
                          G && G.drawImage(D, 0, 0);
                        }
                        var Z = function(Ze) {
                          var Ge = se[Ze], Ve = Ge.getAttribute("src");
                          if (Ve) {
                            var Tt = new Image();
                            Tt.onload = function() {
                              return re(Ge);
                            }, Tt.onerror = function(ve, It, At, pt, nt) {
                              return re(Ge, ["Error loading <img>", Ge, "Error", nt]);
                            }, Tt.src = Ve;
                          } else re(Ge, ['Found an <img> tag with an empty "src" attribute. This prevents pre-loading it. The <img> is:', Ge]);
                        };
                        for ($ = 0; $ < se.length; $++) Z($);
                        var le = function(Ze) {
                          var Ge = me[Ze];
                          Ge.preload = "auto";
                          var Ve = Ge.getAttribute("poster");
                          if (Ve) {
                            var Tt = new Image();
                            Tt.onload = function() {
                              return re(Ge);
                            }, Tt.onerror = function(ve, It, At, pt, nt) {
                              return re(Ge, ["Error loading video poster", Ve, "for video", Ge, "Error:", nt]);
                            }, Tt.src = Ve;
                          } else Ge.readyState >= 2 ? re(Ge) : (Ge.onloadeddata = function() {
                            return re(Ge);
                          }, Ge.onerror = function(ve, It, At, pt, nt) {
                            return re(Ge, ["Error loading video", Ge, "Error", nt]);
                          }, Ge.onstalled = function() {
                            return re(Ge, ["Loading video stalled, skipping", Ge]);
                          });
                        };
                        for ($ = 0; $ < me.length; $++) le($);
                        var Ne = "input", de = ne.querySelectorAll(Ne), xe = pe.querySelectorAll(Ne);
                        for ($ = 0; $ < de.length; $++) xe[$].value = de[$].value;
                        var ue = "input[type=checkbox],input[type=radio]", q = ne.querySelectorAll(ue), ee = pe.querySelectorAll(ue);
                        for ($ = 0; $ < q.length; $++) ee[$].checked = q[$].checked;
                        var we = "select", Te = ne.querySelectorAll(we), Re = pe.querySelectorAll(we);
                        for ($ = 0; $ < Te.length; $++) Re[$].value = Te[$].value;
                      }
                      if (T) for (var Be = document.querySelectorAll("style, link[rel~='stylesheet'], link[as='style']"), Fe = function(Ze, Ge) {
                        var Ve = Be[Ze];
                        if (Ve.tagName.toLowerCase() === "style") {
                          var Tt = pe.createElement(Ve.tagName), ve = Ve.sheet;
                          if (ve) {
                            var It = "";
                            try {
                              for (var At = ve.cssRules.length, pt = 0; pt < At; ++pt) typeof ve.cssRules[pt].cssText == "string" && (It += "".concat(ve.cssRules[pt].cssText, `\r
`));
                            } catch {
                              x.logMessages(["A stylesheet could not be accessed. This is likely due to the stylesheet having cross-origin imports, and many browsers block script access to cross-origin stylesheets. See https://github.com/gregnb/react-to-print/issues/429 for details. You may be able to load the sheet by both marking the stylesheet with the cross `crossorigin` attribute, and setting the `Access-Control-Allow-Origin` header on the server serving the stylesheet. Alternatively, host the stylesheet on your domain to avoid this issue entirely.", Ve], "warning");
                            }
                            Tt.setAttribute("id", "react-to-print-".concat(Ze)), U && Tt.setAttribute("nonce", U), Tt.appendChild(pe.createTextNode(It)), pe.head.appendChild(Tt);
                          }
                        } else if (Ve.getAttribute("href")) if (Ve.hasAttribute("disabled")) x.logMessages(["`react-to-print` encountered a <link> tag with a `disabled` attribute and will ignore it. Note that the `disabled` attribute is deprecated, and some browsers ignore it. You should stop using it. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link#attr-disabled. The <link> is:", Ve], "warning"), re(Ve);
                        else {
                          for (var nt = pe.createElement(Ve.tagName), Gt = (pt = 0, Ve.attributes.length); pt < Gt; ++pt) {
                            var Ue = Ve.attributes[pt];
                            Ue && nt.setAttribute(Ue.nodeName, Ue.nodeValue || "");
                          }
                          nt.onload = function() {
                            return re(nt);
                          }, nt.onerror = function(Ft, tt, un, Zn, sa) {
                            return re(nt, ["Failed to load", nt, "Error:", sa]);
                          }, U && nt.setAttribute("nonce", U), pe.head.appendChild(nt);
                        }
                        else x.logMessages(["`react-to-print` encountered a <link> tag with an empty `href` attribute. In addition to being invalid HTML, this can cause problems in many browsers, and so the <link> was not loaded. The <link> is:", Ve], "warning"), re(Ve);
                      }, et = ($ = 0, Be.length); $ < et; ++$) Fe($);
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
          return m.__extends(F, N), F.prototype.handleClick = function(x, I) {
            var O = this, S = this.props, C = S.onBeforeGetContent, T = S.onPrintError;
            if (C) {
              var R = C();
              R && typeof R.then == "function" ? R.then(function() {
                return O.handlePrint(I);
              }).catch(function(B) {
                T && T("onBeforeGetContent", B);
              }) : this.handlePrint(I);
            } else this.handlePrint(I);
          }, F.prototype.render = function() {
            var x = this.props, I = x.children, O = x.trigger;
            if (O) return g.cloneElement(O(), { onClick: this.handleClick.bind(this) });
            if (!b.PrintContext) return this.logMessages(['"react-to-print" requires React ^16.3.0 to be able to use "PrintContext"']), null;
            var S = { handlePrint: this.handleClick.bind(this) };
            return g.createElement(b.PrintContext.Provider, { value: S }, I);
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
        p.useReactToPrint = function(N) {
          if (!w) return N.suppressErrors || console.error('"react-to-print" requires React ^16.8.0 to be able to use "useReactToPrint"'), function() {
            throw new Error('"react-to-print" requires React ^16.8.0 to be able to use "useReactToPrint"');
          };
          var F = g.useMemo(function() {
            return new y.ReactToPrint(m.__assign(m.__assign({}, b.defaultProps), N));
          }, [N]);
          return g.useCallback(function(x, I) {
            return (0, _.wrapCallbackWithArgs)(F, F.handleClick, I)(x);
          }, [F]);
        };
      }, 860: function(d, p, h) {
        Object.defineProperty(p, "__esModule", { value: !0 }), p.wrapCallbackWithArgs = void 0;
        var m = h(316);
        p.wrapCallbackWithArgs = function(g, y) {
          for (var b = [], _ = 2; _ < arguments.length; _++) b[_ - 2] = arguments[_];
          return function() {
            for (var w = [], N = 0; N < arguments.length; N++) w[N] = arguments[N];
            return y.apply(g, m.__spreadArray(m.__spreadArray([], m.__read(w), !1), m.__read(b), !1));
          };
        };
      }, 496: function(d) {
        d.exports = n;
      }, 190: function(d) {
        d.exports = r;
      }, 316: function(d, p, h) {
        h.r(p), h.d(p, { __addDisposableResource: function() {
          return pe;
        }, __assign: function() {
          return y;
        }, __asyncDelegator: function() {
          return Pe;
        }, __asyncGenerator: function() {
          return ge;
        }, __asyncValues: function() {
          return se;
        }, __await: function() {
          return fe;
        }, __awaiter: function() {
          return S;
        }, __classPrivateFieldGet: function() {
          return ye;
        }, __classPrivateFieldIn: function() {
          return Ce;
        }, __classPrivateFieldSet: function() {
          return Se;
        }, __createBinding: function() {
          return T;
        }, __decorate: function() {
          return _;
        }, __disposeResources: function() {
          return $e;
        }, __esDecorate: function() {
          return N;
        }, __exportStar: function() {
          return R;
        }, __extends: function() {
          return g;
        }, __generator: function() {
          return C;
        }, __importDefault: function() {
          return ae;
        }, __importStar: function() {
          return re;
        }, __makeTemplateObject: function() {
          return me;
        }, __metadata: function() {
          return O;
        }, __param: function() {
          return w;
        }, __propKey: function() {
          return x;
        }, __read: function() {
          return U;
        }, __rest: function() {
          return b;
        }, __runInitializers: function() {
          return F;
        }, __setFunctionName: function() {
          return I;
        }, __spread: function() {
          return te;
        }, __spreadArray: function() {
          return ne;
        }, __spreadArrays: function() {
          return z;
        }, __values: function() {
          return B;
        } });
        var m = function(W, H) {
          return m = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function($, D) {
            $.__proto__ = D;
          } || function($, D) {
            for (var G in D) Object.prototype.hasOwnProperty.call(D, G) && ($[G] = D[G]);
          }, m(W, H);
        };
        function g(W, H) {
          if (typeof H != "function" && H !== null) throw new TypeError("Class extends value " + String(H) + " is not a constructor or null");
          function $() {
            this.constructor = W;
          }
          m(W, H), W.prototype = H === null ? Object.create(H) : ($.prototype = H.prototype, new $());
        }
        var y = function() {
          return y = Object.assign || function(W) {
            for (var H, $ = 1, D = arguments.length; $ < D; $++) for (var G in H = arguments[$]) Object.prototype.hasOwnProperty.call(H, G) && (W[G] = H[G]);
            return W;
          }, y.apply(this, arguments);
        };
        function b(W, H) {
          var $ = {};
          for (var D in W) Object.prototype.hasOwnProperty.call(W, D) && H.indexOf(D) < 0 && ($[D] = W[D]);
          if (W != null && typeof Object.getOwnPropertySymbols == "function") {
            var G = 0;
            for (D = Object.getOwnPropertySymbols(W); G < D.length; G++) H.indexOf(D[G]) < 0 && Object.prototype.propertyIsEnumerable.call(W, D[G]) && ($[D[G]] = W[D[G]]);
          }
          return $;
        }
        function _(W, H, $, D) {
          var G, Z = arguments.length, le = Z < 3 ? H : D === null ? D = Object.getOwnPropertyDescriptor(H, $) : D;
          if (typeof Reflect == "object" && typeof Reflect.decorate == "function") le = Reflect.decorate(W, H, $, D);
          else for (var Ne = W.length - 1; Ne >= 0; Ne--) (G = W[Ne]) && (le = (Z < 3 ? G(le) : Z > 3 ? G(H, $, le) : G(H, $)) || le);
          return Z > 3 && le && Object.defineProperty(H, $, le), le;
        }
        function w(W, H) {
          return function($, D) {
            H($, D, W);
          };
        }
        function N(W, H, $, D, G, Z) {
          function le(Fe) {
            if (Fe !== void 0 && typeof Fe != "function") throw new TypeError("Function expected");
            return Fe;
          }
          for (var Ne, de = D.kind, xe = de === "getter" ? "get" : de === "setter" ? "set" : "value", ue = !H && W ? D.static ? W : W.prototype : null, q = H || (ue ? Object.getOwnPropertyDescriptor(ue, D.name) : {}), ee = !1, we = $.length - 1; we >= 0; we--) {
            var Te = {};
            for (var Re in D) Te[Re] = Re === "access" ? {} : D[Re];
            for (var Re in D.access) Te.access[Re] = D.access[Re];
            Te.addInitializer = function(Fe) {
              if (ee) throw new TypeError("Cannot add initializers after decoration has completed");
              Z.push(le(Fe || null));
            };
            var Be = (0, $[we])(de === "accessor" ? { get: q.get, set: q.set } : q[xe], Te);
            if (de === "accessor") {
              if (Be === void 0) continue;
              if (Be === null || typeof Be != "object") throw new TypeError("Object expected");
              (Ne = le(Be.get)) && (q.get = Ne), (Ne = le(Be.set)) && (q.set = Ne), (Ne = le(Be.init)) && G.unshift(Ne);
            } else (Ne = le(Be)) && (de === "field" ? G.unshift(Ne) : q[xe] = Ne);
          }
          ue && Object.defineProperty(ue, D.name, q), ee = !0;
        }
        function F(W, H, $) {
          for (var D = arguments.length > 2, G = 0; G < H.length; G++) $ = D ? H[G].call(W, $) : H[G].call(W);
          return D ? $ : void 0;
        }
        function x(W) {
          return typeof W == "symbol" ? W : "".concat(W);
        }
        function I(W, H, $) {
          return typeof H == "symbol" && (H = H.description ? "[".concat(H.description, "]") : ""), Object.defineProperty(W, "name", { configurable: !0, value: $ ? "".concat($, " ", H) : H });
        }
        function O(W, H) {
          if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(W, H);
        }
        function S(W, H, $, D) {
          return new ($ || ($ = Promise))(function(G, Z) {
            function le(xe) {
              try {
                de(D.next(xe));
              } catch (ue) {
                Z(ue);
              }
            }
            function Ne(xe) {
              try {
                de(D.throw(xe));
              } catch (ue) {
                Z(ue);
              }
            }
            function de(xe) {
              var ue;
              xe.done ? G(xe.value) : (ue = xe.value, ue instanceof $ ? ue : new $(function(q) {
                q(ue);
              })).then(le, Ne);
            }
            de((D = D.apply(W, H || [])).next());
          });
        }
        function C(W, H) {
          var $, D, G, Z, le = { label: 0, sent: function() {
            if (1 & G[0]) throw G[1];
            return G[1];
          }, trys: [], ops: [] };
          return Z = { next: Ne(0), throw: Ne(1), return: Ne(2) }, typeof Symbol == "function" && (Z[Symbol.iterator] = function() {
            return this;
          }), Z;
          function Ne(de) {
            return function(xe) {
              return function(ue) {
                if ($) throw new TypeError("Generator is already executing.");
                for (; Z && (Z = 0, ue[0] && (le = 0)), le; ) try {
                  if ($ = 1, D && (G = 2 & ue[0] ? D.return : ue[0] ? D.throw || ((G = D.return) && G.call(D), 0) : D.next) && !(G = G.call(D, ue[1])).done) return G;
                  switch (D = 0, G && (ue = [2 & ue[0], G.value]), ue[0]) {
                    case 0:
                    case 1:
                      G = ue;
                      break;
                    case 4:
                      return le.label++, { value: ue[1], done: !1 };
                    case 5:
                      le.label++, D = ue[1], ue = [0];
                      continue;
                    case 7:
                      ue = le.ops.pop(), le.trys.pop();
                      continue;
                    default:
                      if (!((G = (G = le.trys).length > 0 && G[G.length - 1]) || ue[0] !== 6 && ue[0] !== 2)) {
                        le = 0;
                        continue;
                      }
                      if (ue[0] === 3 && (!G || ue[1] > G[0] && ue[1] < G[3])) {
                        le.label = ue[1];
                        break;
                      }
                      if (ue[0] === 6 && le.label < G[1]) {
                        le.label = G[1], G = ue;
                        break;
                      }
                      if (G && le.label < G[2]) {
                        le.label = G[2], le.ops.push(ue);
                        break;
                      }
                      G[2] && le.ops.pop(), le.trys.pop();
                      continue;
                  }
                  ue = H.call(W, le);
                } catch (q) {
                  ue = [6, q], D = 0;
                } finally {
                  $ = G = 0;
                }
                if (5 & ue[0]) throw ue[1];
                return { value: ue[0] ? ue[1] : void 0, done: !0 };
              }([de, xe]);
            };
          }
        }
        var T = Object.create ? function(W, H, $, D) {
          D === void 0 && (D = $);
          var G = Object.getOwnPropertyDescriptor(H, $);
          G && !("get" in G ? !H.__esModule : G.writable || G.configurable) || (G = { enumerable: !0, get: function() {
            return H[$];
          } }), Object.defineProperty(W, D, G);
        } : function(W, H, $, D) {
          D === void 0 && (D = $), W[D] = H[$];
        };
        function R(W, H) {
          for (var $ in W) $ === "default" || Object.prototype.hasOwnProperty.call(H, $) || T(H, W, $);
        }
        function B(W) {
          var H = typeof Symbol == "function" && Symbol.iterator, $ = H && W[H], D = 0;
          if ($) return $.call(W);
          if (W && typeof W.length == "number") return { next: function() {
            return W && D >= W.length && (W = void 0), { value: W && W[D++], done: !W };
          } };
          throw new TypeError(H ? "Object is not iterable." : "Symbol.iterator is not defined.");
        }
        function U(W, H) {
          var $ = typeof Symbol == "function" && W[Symbol.iterator];
          if (!$) return W;
          var D, G, Z = $.call(W), le = [];
          try {
            for (; (H === void 0 || H-- > 0) && !(D = Z.next()).done; ) le.push(D.value);
          } catch (Ne) {
            G = { error: Ne };
          } finally {
            try {
              D && !D.done && ($ = Z.return) && $.call(Z);
            } finally {
              if (G) throw G.error;
            }
          }
          return le;
        }
        function te() {
          for (var W = [], H = 0; H < arguments.length; H++) W = W.concat(U(arguments[H]));
          return W;
        }
        function z() {
          for (var W = 0, H = 0, $ = arguments.length; H < $; H++) W += arguments[H].length;
          var D = Array(W), G = 0;
          for (H = 0; H < $; H++) for (var Z = arguments[H], le = 0, Ne = Z.length; le < Ne; le++, G++) D[G] = Z[le];
          return D;
        }
        function ne(W, H, $) {
          if ($ || arguments.length === 2) for (var D, G = 0, Z = H.length; G < Z; G++) !D && G in H || (D || (D = Array.prototype.slice.call(H, 0, G)), D[G] = H[G]);
          return W.concat(D || Array.prototype.slice.call(H));
        }
        function fe(W) {
          return this instanceof fe ? (this.v = W, this) : new fe(W);
        }
        function ge(W, H, $) {
          if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
          var D, G = $.apply(W, H || []), Z = [];
          return D = {}, le("next"), le("throw"), le("return"), D[Symbol.asyncIterator] = function() {
            return this;
          }, D;
          function le(q) {
            G[q] && (D[q] = function(ee) {
              return new Promise(function(we, Te) {
                Z.push([q, ee, we, Te]) > 1 || Ne(q, ee);
              });
            });
          }
          function Ne(q, ee) {
            try {
              (we = G[q](ee)).value instanceof fe ? Promise.resolve(we.value.v).then(de, xe) : ue(Z[0][2], we);
            } catch (Te) {
              ue(Z[0][3], Te);
            }
            var we;
          }
          function de(q) {
            Ne("next", q);
          }
          function xe(q) {
            Ne("throw", q);
          }
          function ue(q, ee) {
            q(ee), Z.shift(), Z.length && Ne(Z[0][0], Z[0][1]);
          }
        }
        function Pe(W) {
          var H, $;
          return H = {}, D("next"), D("throw", function(G) {
            throw G;
          }), D("return"), H[Symbol.iterator] = function() {
            return this;
          }, H;
          function D(G, Z) {
            H[G] = W[G] ? function(le) {
              return ($ = !$) ? { value: fe(W[G](le)), done: !1 } : Z ? Z(le) : le;
            } : Z;
          }
        }
        function se(W) {
          if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
          var H, $ = W[Symbol.asyncIterator];
          return $ ? $.call(W) : (W = B(W), H = {}, D("next"), D("throw"), D("return"), H[Symbol.asyncIterator] = function() {
            return this;
          }, H);
          function D(G) {
            H[G] = W[G] && function(Z) {
              return new Promise(function(le, Ne) {
                (function(de, xe, ue, q) {
                  Promise.resolve(q).then(function(ee) {
                    de({ value: ee, done: ue });
                  }, xe);
                })(le, Ne, (Z = W[G](Z)).done, Z.value);
              });
            };
          }
        }
        function me(W, H) {
          return Object.defineProperty ? Object.defineProperty(W, "raw", { value: H }) : W.raw = H, W;
        }
        var J = Object.create ? function(W, H) {
          Object.defineProperty(W, "default", { enumerable: !0, value: H });
        } : function(W, H) {
          W.default = H;
        };
        function re(W) {
          if (W && W.__esModule) return W;
          var H = {};
          if (W != null) for (var $ in W) $ !== "default" && Object.prototype.hasOwnProperty.call(W, $) && T(H, W, $);
          return J(H, W), H;
        }
        function ae(W) {
          return W && W.__esModule ? W : { default: W };
        }
        function ye(W, H, $, D) {
          if ($ === "a" && !D) throw new TypeError("Private accessor was defined without a getter");
          if (typeof H == "function" ? W !== H || !D : !H.has(W)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return $ === "m" ? D : $ === "a" ? D.call(W) : D ? D.value : H.get(W);
        }
        function Se(W, H, $, D, G) {
          if (D === "m") throw new TypeError("Private method is not writable");
          if (D === "a" && !G) throw new TypeError("Private accessor was defined without a setter");
          if (typeof H == "function" ? W !== H || !G : !H.has(W)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
          return D === "a" ? G.call(W, $) : G ? G.value = $ : H.set(W, $), $;
        }
        function Ce(W, H) {
          if (H === null || typeof H != "object" && typeof H != "function") throw new TypeError("Cannot use 'in' operator on non-object");
          return typeof W == "function" ? H === W : W.has(H);
        }
        function pe(W, H, $) {
          if (H != null) {
            if (typeof H != "object" && typeof H != "function") throw new TypeError("Object expected.");
            var D;
            if ($) {
              if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
              D = H[Symbol.asyncDispose];
            }
            if (D === void 0) {
              if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
              D = H[Symbol.dispose];
            }
            if (typeof D != "function") throw new TypeError("Object not disposable.");
            W.stack.push({ value: H, dispose: D, async: $ });
          } else $ && W.stack.push({ async: !0 });
          return H;
        }
        var ke = typeof SuppressedError == "function" ? SuppressedError : function(W, H, $) {
          var D = new Error($);
          return D.name = "SuppressedError", D.error = W, D.suppressed = H, D;
        };
        function $e(W) {
          function H($) {
            W.error = W.hasError ? new ke($, W.error, "An error was suppressed during disposal.") : $, W.hasError = !0;
          }
          return function $() {
            for (; W.stack.length; ) {
              var D = W.stack.pop();
              try {
                var G = D.dispose && D.dispose.call(D.value);
                if (D.async) return Promise.resolve(G).then($, function(Z) {
                  return H(Z), $();
                });
              } catch (Z) {
                H(Z);
              }
            }
            if (W.hasError) throw W.error;
          }();
        }
        p.default = { __extends: g, __assign: y, __rest: b, __decorate: _, __param: w, __metadata: O, __awaiter: S, __generator: C, __createBinding: T, __exportStar: R, __values: B, __read: U, __spread: te, __spreadArrays: z, __spreadArray: ne, __await: fe, __asyncGenerator: ge, __asyncDelegator: Pe, __asyncValues: se, __makeTemplateObject: me, __importStar: re, __importDefault: ae, __classPrivateFieldGet: ye, __classPrivateFieldSet: Se, __classPrivateFieldIn: Ce, __addDisposableResource: pe, __disposeResources: $e };
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
})(qx);
var Og = qx.exports;
const XH = () => /^((?!chrome|android).)*safari/i.test(navigator.userAgent), Vx = (e) => Array.isArray(e) && e.every(
  (t) => typeof t == "object" && !(t instanceof Array)
), QH = (e) => Array.isArray(e) && e.every(
  (t) => Array.isArray(t)
), JH = (e) => Array.from(
  e.map((t) => Object.keys(t)).reduce((t, n) => /* @__PURE__ */ new Set([...t, ...n]), [])
), eY = (e, t) => {
  t = t || JH(e);
  let n = t, r = t;
  Vx(t) && (n = t.map((s) => s.label), r = t.map((s) => s.key));
  const o = e.map((s) => r.map((u) => tY(u, s)));
  return [n, ...o];
}, tY = (e, t) => {
  const n = e.replace(/\[([^\]]+)]/g, ".$1").split(".").reduce(function(r, o, s, u) {
    const c = r[o];
    if (c == null)
      u.splice(1);
    else
      return c;
  }, t);
  return n === void 0 ? e in t ? t[e] : "" : n;
}, nY = (e) => typeof e > "u" || e === null ? "" : e, Gx = (e, t = ",", n = '"') => e.filter((r) => r).map(
  (r) => r.map((o) => nY(o)).map((o) => `${n}${o}${n}`).join(t)
).join(`
`), rY = (e, t, n, r) => Gx(t ? [t, ...e] : e, n, r), aY = (e, t, n, r) => Gx(eY(e, t), n, r), oY = (e, t, n, r) => t ? `${t.join(n)}
${e}` : e.replace(/"/g, '""'), Kx = (e, t, n, r) => {
  if (Vx(e)) return aY(e, t, n, r);
  if (QH(e)) return rY(e, t, n, r);
  if (typeof e == "string") return oY(e, t, n);
  throw new TypeError('Data should be a "String", "Array of arrays" OR "Array of objects" ');
}, Zx = (e, t, n, r, o) => {
  const s = Kx(e, n, r, o), u = XH() ? "application/csv" : "text/csv", c = new Blob([t ? "\uFEFF" : "", s], { type: u }), d = `data:${u};charset=utf-8,${t ? "\uFEFF" : ""}${s}`, p = window.URL || window.webkitURL;
  return typeof p.createObjectURL > "u" ? d : p.createObjectURL(c);
}, Xx = {
  data: tr.oneOfType([tr.string, tr.array, tr.func]).isRequired,
  headers: tr.array,
  target: tr.string,
  separator: tr.string,
  filename: tr.string,
  uFEFF: tr.bool,
  onClick: tr.func,
  asyncOnClick: tr.bool,
  enclosingCharacter: tr.string
}, Qx = {
  separator: ",",
  filename: "generatedBy_react-csv.csv",
  uFEFF: !0,
  asyncOnClick: !1,
  enclosingCharacter: '"'
}, iY = {
  target: "_blank"
};
class O_ extends Q.Component {
  constructor(t) {
    super(t), this.state = {};
  }
  buildURI() {
    return Zx(...arguments);
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
dl(O_, "defaultProps", Object.assign(
  Qx,
  iY
)), dl(O_, "propTypes", Xx);
var ku;
let sY = (ku = class extends Q.Component {
  constructor(t) {
    super(t), this.buildURI = this.buildURI.bind(this);
  }
  buildURI() {
    return Zx(...arguments);
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
      let h = new Blob([d ? "\uFEFF" : "", Kx(p, o, s, c)]);
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
    return /* @__PURE__ */ P(
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
}, dl(ku, "defaultProps", Qx), dl(ku, "propTypes", Xx), ku);
const lY = sY, cY = "_input_1q0yw_1", uY = "_clearIcon_1q0yw_9", dY = "_clearIconFocused_1q0yw_21", fY = "_clearIconLast_1q0yw_33", pY = "_clearIconLastFocused_1q0yw_47", hY = "_clearRoundedIconLast_1q0yw_61", mY = "_clearRoundedIconLastFocused_1q0yw_79", Wa = {
  input: cY,
  clearIcon: uY,
  clearIconFocused: dY,
  clearIconLast: fY,
  clearIconLastFocused: pY,
  clearRoundedIconLast: hY,
  clearRoundedIconLastFocused: mY
}, dd = hd((e, t) => {
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
    fluid: N = !0,
    type: F = "text"
  } = e, x = Ln(null), [I, O] = st(!1), [S, C] = st(n ? "password" : "text"), [T, R] = st("eye slash");
  Zt(() => {
    h ? A.isEmpty(o) || p ? ((t || x).current.style.removeProperty("border-top-left-radius"), (t || x).current.style.removeProperty("border-bottom-left-radius"), (t || x).current.style.removeProperty("border-top-right-radius"), (t || x).current.style.removeProperty("border-bottom-right-radius"), (t || x).current.style.removeProperty("border-right"), n ? ((t || x).current.style.setProperty("border-top-left-radius", "1rem", "important"), (t || x).current.style.setProperty("border-bottom-left-radius", "1rem", "important")) : ((t || x).current.style.setProperty("border-radius", "1rem", "important"), (t || x).current.style.setProperty(
      "border-right",
      `1px solid ${I ? "var(--inputFocus)" : "var(--inputShader)"}`,
      "important"
    ))) : ((t || x).current.style.removeProperty("border-radius"), (t || x).current.style.setProperty("border-top-left-radius", "1rem", "important"), (t || x).current.style.setProperty("border-bottom-left-radius", "1rem", "important"), (t || x).current.style.setProperty("border-top-right-radius", "0", "important"), (t || x).current.style.setProperty("border-bottom-right-radius", "0", "important"), (t || x).current.style.setProperty("border-right", "0", "important")) : A.isEmpty(o) || p ? ((t || x).current.style.setProperty("border-radius", "0.25rem", "important"), n ? ((t || x).current.style.setProperty("border-right", "0", "important"), (t || x).current.style.setProperty("border-top-right-radius", "0", "important"), (t || x).current.style.setProperty("border-bottom-right-radius", "0", "important")) : (t || x).current.style.setProperty(
      "border-right",
      `1px solid ${I ? "var(--inputFocus)" : "var(--inputShader)"}`,
      "important"
    )) : ((t || x).current.style.setProperty("border-right", "0", "important"), (t || x).current.style.setProperty("border-top-right-radius", "0", "important"), (t || x).current.style.setProperty("border-bottom-right-radius", "0", "important")), A.isEmpty(b) || (_ === "left" ? ((t || x).current.style.setProperty("border-top-left-radius", "0", "important"), (t || x).current.style.setProperty("border-bottom-left-radius", "0", "important"), (t || x).current.style.setProperty("border-left-color", "transparent", "important")) : _ === "right" && ((t || x).current.style.setProperty("border-top-right-radius", "0", "important"), (t || x).current.style.setProperty("border-bottom-right-radius", "0", "important"), (t || x).current.style.setProperty("border-right-color", "transparent", "important"), (t || x).current.style.setProperty("border-top-left-radius", "0.25rem", "important"), (t || x).current.style.setProperty("border-bottom-left-radius", "0.25rem", "important"), (t || x).current.style.setProperty(
      "border-left",
      `1px solid ${I ? "var(--inputFocus)" : "var(--inputShader)"}`,
      "important"
    )));
  }, [o, I, b, n, p, h, t, x]);
  const B = (me) => {
    if (!A.isEmpty(o)) {
      const J = { name: r, value: o.trim() };
      m({ ...me, target: J }, J);
    }
  }, U = (me) => {
    const { key: J } = me;
    J === "Enter" && (me.preventDefault(), B(me), g && g(me));
  }, te = () => {
    const me = S === "password", J = me ? "text" : "password", re = me ? "eye" : "eye slash";
    C(J), R(re);
  }, z = (me) => {
    const J = { name: r, value: "" };
    e.fieldIndex !== void 0 && (J.fieldIndex = e.fieldIndex), e.id !== void 0 && (J.id = e.id), m({ ...me, target: J }, J), y && y();
  }, ne = () => {
    O(!0);
  }, fe = (me) => {
    B(me), O(!1);
  }, ge = () => n ? I ? Wa.clearIconFocused : Wa.clearIcon : h ? I ? Wa.clearRoundedIconLastFocused : Wa.clearRoundedIconLast : I ? Wa.clearIconLastFocused : Wa.clearIconLast, Pe = A.omit(e, [
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
  ]), se = n || !A.isEmpty(u);
  return /* @__PURE__ */ oe(
    An.Input,
    {
      ...Pe,
      className: `${Wa.input} ${s || ""}`,
      disabled: p,
      onChange: m,
      name: r,
      required: w,
      label: c,
      placeholder: A.isEmpty(d) ? c : d,
      value: o,
      type: n ? S : F,
      ...se ? { iconPosition: "left" } : {},
      autoComplete: "off",
      fluid: N,
      onFocus: ne,
      onBlur: fe,
      onKeyPress: U,
      action: !0,
      children: [
        _ === "left" && !A.isEmpty(b) && /* @__PURE__ */ P(jr, { labeled: !0, ...b }),
        se && /* @__PURE__ */ P(We, { name: n ? "lock" : u }),
        /* @__PURE__ */ P("input", { ref: t || x }),
        _ === "right" ? /* @__PURE__ */ oe(xa, { children: [
          !A.isEmpty(o) && !p && /* @__PURE__ */ P(ft, { className: ge(), icon: "cancel", onClick: z, tabIndex: -1 }),
          !A.isEmpty(b) && /* @__PURE__ */ P(jr, { labeled: !0, ...b })
        ] }) : !A.isEmpty(o) && !p && /* @__PURE__ */ P(ft, { className: ge(), icon: "cancel", onClick: z, tabIndex: -1 }),
        n && /* @__PURE__ */ P(
          ft,
          {
            className: h ? Wa.clearRoundedIconLast : Wa.clearIconLast,
            icon: T,
            onClick: te,
            tabIndex: -1
          }
        )
      ]
    }
  );
});
dd.propTypes = {
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
const gY = "_container_1uh18_1", vY = "_containerUser_1uh18_11", yY = "_containerLeft_1uh18_19", bY = "_containerRight_1uh18_25", _Y = "_headerTitle_1uh18_39", wY = "_containerCenter_1uh18_49", EY = "_tableContainer_1uh18_61", Ua = {
  container: gY,
  containerUser: vY,
  containerLeft: yY,
  containerRight: bY,
  headerTitle: _Y,
  containerCenter: wY,
  tableContainer: EY
}, Jx = ({
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
  return /* @__PURE__ */ oe("div", { className: Ua.container, children: [
    /* @__PURE__ */ P("style", { children: m() }),
    /* @__PURE__ */ P("div", { className: Ua.containerCenter, children: A.isEmpty(h) ? /* @__PURE__ */ oe(qn, { as: "h2", icon: !0, children: [
      /* @__PURE__ */ P("span", { children: o.company }),
      /* @__PURE__ */ P(qn.Subheader, { children: o.title })
    ] }) : h }),
    /* @__PURE__ */ oe("div", { className: Ua.containerUser, children: [
      /* @__PURE__ */ oe("div", { className: Ua.containerLeft, children: [
        /* @__PURE__ */ oe("div", { children: [
          /* @__PURE__ */ P("span", { className: Ua.headerTitle, children: "Usuario:" }),
          o.user
        ] }),
        /* @__PURE__ */ oe("div", { children: [
          /* @__PURE__ */ P("span", { className: Ua.headerTitle, children: "Fecha:" }),
          Rr(String(/* @__PURE__ */ new Date()), !1, !1, !0)
        ] })
      ] }),
      /* @__PURE__ */ oe("div", { className: Ua.containerRight, children: [
        /* @__PURE__ */ P("span", { className: Ua.headerTitle, children: "Total de filas:" }),
        !A.isEmpty(e) && e.length
      ] })
    ] }),
    /* @__PURE__ */ P("div", { className: Ua.tableContainer, children: /* @__PURE__ */ oe(bt, { sortable: !0, celled: !0, striped: !0, children: [
      /* @__PURE__ */ P(Xm, { isPDF: !0, columns: t, searchParams: s, setSearchParams: u, dataHandler: c }),
      /* @__PURE__ */ P(
        ud,
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
Jx.propTypes = {
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
const xY = "_container_17awp_1", CY = "_input1_17awp_9", OY = "_input2_17awp_15", Vp = {
  container: xY,
  input1: CY,
  input2: OY
}, eC = ({ label: e, value: t, onChange: n }) => {
  const [r, o] = st(""), [s, u] = st("");
  Zt(() => {
    if (A.isEmpty(t))
      o(""), u("");
    else {
      const d = t.split(",");
      o(d[0]), u(d[1]);
    }
  }, [t]);
  const c = (d) => {
    const p = A.get(d, "target.value", ""), h = A.get(d, "target.name", "");
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
    (!A.isEmpty(m) || !A.isEmpty(g)) && (y = `${m},${g}`), n(y);
  };
  return /* @__PURE__ */ oe("div", { className: Vp.container, children: [
    /* @__PURE__ */ P("div", { className: Vp.input1, children: /* @__PURE__ */ P(
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
    /* @__PURE__ */ P("div", { className: Vp.input2, children: /* @__PURE__ */ P(
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
eC.propTypes = {
  label: l.string,
  value: l.string,
  /* 	className: PropTypes.string, */
  onChange: l.func
};
const SY = "_modal_16365_1", TY = "_modalHeader_16365_45", PY = "_modalFooter_16365_59", kY = "_inputChannel_16365_77", NY = "_positiveButton_16365_111", IY = "_negativeButton_16365_141", AY = "_gridColumnLeft_16365_183", RY = "_gridColumnRight_16365_195", pa = {
  modal: SY,
  modalHeader: TY,
  modalFooter: PY,
  inputChannel: kY,
  positiveButton: NY,
  negativeButton: IY,
  gridColumnLeft: AY,
  gridColumnRight: RY
}, tC = ({
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
    const N = A.get(_, "target.value", "");
    u({
      ...s,
      [w]: N
    });
  }, m = (_, w) => {
    u({
      ...s,
      [w]: _
    });
  }, g = ({ key: _, label: w, format: N }) => {
    const F = _.split(",").join(".");
    switch (N) {
      case "dateTime":
      case "date":
        return /* @__PURE__ */ P(
          eC,
          {
            label: w,
            value: A.get(s, `${F}`, ""),
            className: pa.inputChannel,
            onChange: (x) => {
              m(x, F);
            }
          },
          F
        );
      default:
        return /* @__PURE__ */ P(
          dd,
          {
            icon: "filter",
            label: w,
            required: !0,
            placeholder: "Filtrar...",
            value: A.get(s, `${F}`, ""),
            fluid: !0,
            className: pa.inputChannel,
            onChange: (x) => {
              h(x, F);
            }
          },
          F
        );
    }
  }, y = () => {
    let _ = 1, w = [], N = [], F = "", I = [...t, ...p].map((O) => {
      let S = [];
      return A.get(O, "multipleColumns", !1) ? (O.multipleColumns.forEach((C) => {
        F = Ao(C.key), S = [...S, { ...C, key: F }];
      }), S) : (F = Ao(O.key), { ...O, key: F });
    });
    return I = A.flatten(I), I.forEach((O) => {
      _ += 1, (_ + 1) % 2 === 0 ? N = [...N, g(O)] : w = [...w, g(O)];
    }), /* @__PURE__ */ oe(Ii, { columns: 2, children: [
      /* @__PURE__ */ P(Xa, { className: pa.gridColumnLeft, children: w }),
      /* @__PURE__ */ P(Xa, { className: pa.gridColumnRight, children: N })
    ] });
  }, b = () => {
    let _ = !1, w = {};
    if (Object.entries(s).forEach(([N, F]) => {
      A.isEmpty(F) || (_ = !0, w = { ...w, [N]: F });
    }), _) {
      const F = { ...A.pick(n, ["rows", "orderKey", "orderDir"]), page: 1, ...w };
      c(!0), r(F), o(F), e();
    }
  };
  return /* @__PURE__ */ oe(cn, { className: pa.modal, open: !0, closeIcon: !0, onClose: e, children: [
    /* @__PURE__ */ P(cn.Header, { className: pa.modalHeader, children: /* @__PURE__ */ oe("div", { children: [
      /* @__PURE__ */ P(We, { name: "filter" }),
      "Filtro Avanzado"
    ] }) }),
    /* @__PURE__ */ P(cn.Content, { scrolling: !0, children: y() }),
    /* @__PURE__ */ oe(cn.Actions, { className: pa.modalFooter, children: [
      /* @__PURE__ */ oe(ft, { className: pa.negativeButton, onClick: d, children: [
        /* @__PURE__ */ P(We, { name: "filter" }),
        "Limpiar"
      ] }),
      /* @__PURE__ */ oe("div", { children: [
        /* @__PURE__ */ P(ft, { className: pa.negativeButton, onClick: e, children: "Atrás" }),
        /* @__PURE__ */ P(ft, { className: pa.positiveButton, onClick: b, children: "Filtrar" })
      ] })
    ] })
  ] });
};
tC.propTypes = {
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
const Gp = (e, t, n, r, o, s, u, c) => {
  switch (e) {
    case "timeBetween":
      return bE(t, r);
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
      return Ol(t, s);
    case "arrayTruncate":
      if (c && typeof c.key == "string" && A.includes(c.key, "[]?")) {
        const [d, p] = A.replace(c.key, "[]?", "").split("."), h = Array.isArray(n[d]) ? n[d] : [], m = A.map(h, (g) => g && g[p]);
        return A.join(A.filter(m, Boolean), ", ");
      }
      return Array.isArray(t) ? A.join(A.filter(t, Boolean), ", ") : t;
    default:
      return t;
  }
}, S_ = (e) => e && e.key ? `${e.key.split(".").join("")}_${e.format || ""}_${e.label || ""}` : null;
function MY(e, t, n) {
  let r = e, o = t;
  if (!A.isEmpty(n)) {
    const d = A.map(e, (p) => {
      const h = { [n.headerTitle]: Yt(n.headerTitle, p) };
      return A.map(Yt(n.dataDetail, p), (g) => ({ ...h, ...g }));
    });
    r = A.flatten(d), o = [
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
      if (h.key && A.get(h, "canExcel", !0)) {
        let m = h.endDate;
        h.format === "timeBetween" && h.endDateKey ? m = Yt(h.endDateKey, d) : m && typeof m == "string" && (m = Yt(m, d));
        let g = "";
        const y = S_(h), b = h.key.split(",");
        if (b.length === 1)
          g = Yt(h.key, d), h.format === "dateTimeBar" && (g = Yt(h.endDateKey, d)), g = Gp(
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
          const _ = Yt(b[0], d);
          for (const w of _)
            if (g === "")
              g = Yt(b[1], w), g = Gp(
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
              let N = Yt(b[1], w);
              N = Gp(
                h.format,
                N,
                w,
                m,
                h.onKeyEndDate,
                h.translate,
                h.boolLabels,
                h
              ), (N == null || N === "") && (N = "null"), g = `${g}, ${N}`;
            }
          p = { ...p, [y]: g };
        }
      }
    s = [...s, p];
  }
  for (const d of c)
    d.key && A.get(d, "canExcel", !0) && (u = [...u, d]);
  return u = A.map(u, (d) => ({ label: d.label, key: S_(d) })), { dataExel: s, columnExel: u };
}
const DY = "_mainContainer_4n1za_1", LY = "_searchContainer_4n1za_19", FY = "_searchInput_4n1za_89", $Y = "_searchWrapper_4n1za_99", BY = "_filterButton_4n1za_129", jY = "_addButton_4n1za_159", WY = "_defaultTopButton_4n1za_191", UY = "_printButton_4n1za_205", zY = "_exelButton_4n1za_219", HY = "_clearButton_4n1za_241", YY = "_defaultTopInputContainerStyle_4n1za_255", qY = "_defaultTopDropdownContainerStyle_4n1za_267", VY = "_defaultLabelContainerStyle_4n1za_277", GY = "_topInputLabel_4n1za_287", KY = "_renderTopButtonsContainer_4n1za_299", ZY = "_inputLabelCheck_4n1za_313", XY = "_labelCheck_4n1za_321", QY = "_addButtonContainer_4n1za_331", JY = "_addButtonsContainer_4n1za_343", eq = "_topButtonsDesktop_4n1za_359", tq = "_secondLine_4n1za_373", nq = "_hidePrintButtonsMobile_4n1za_389", rq = "_addButtonIcon_4n1za_553", aq = "_hideOnMobile_4n1za_595", Et = {
  mainContainer: DY,
  searchContainer: LY,
  searchInput: FY,
  searchWrapper: $Y,
  filterButton: BY,
  addButton: jY,
  defaultTopButton: WY,
  printButton: UY,
  exelButton: zY,
  clearButton: HY,
  defaultTopInputContainerStyle: YY,
  defaultTopDropdownContainerStyle: qY,
  defaultLabelContainerStyle: VY,
  topInputLabel: GY,
  renderTopButtonsContainer: KY,
  inputLabelCheck: ZY,
  labelCheck: XY,
  addButtonContainer: QY,
  addButtonsContainer: JY,
  topButtonsDesktop: eq,
  secondLine: tq,
  hidePrintButtonsMobile: nq,
  addButtonIcon: rq,
  hideOnMobile: aq
}, nC = ({
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
  setIsClearButton: N,
  headerDetail: F,
  searchRefresh: x,
  topPlaceClassName: I,
  hidePrintButtons: O = !1
}) => {
  const [S, C] = st(""), [T, R] = st([]), [B, U] = st("all"), [te, z] = st(!1), [ne, fe] = st([]), [ge, Pe] = st([]), [se, me] = st(!1), [J, re] = st(!1), [ae, ye] = st({}), [Se, Ce] = st(!1), pe = Ln(), ke = Ln();
  Zt(() => {
    if (J) {
      const ue = MY(m, n, F);
      fe(ue.dataExel), Pe(ue.columnExel);
    }
    se && setTimeout(() => {
      $e(), me(!1);
    });
  }, [m]), Zt(() => {
    !A.isEmpty(ne) && !A.isEmpty(ge) && ke.current && ke.current.link && J && setTimeout(() => {
      ke.current.link.click(), re(!1);
    });
  }, [ne, ge]), Zt(() => {
    const ue = D();
    Ce([...ue, ...y]);
    let q = N6([...ue, ...y], "label", "key");
    t.allEnabled && (q = [{ key: 0, text: "Todos", value: "all" }, ...q]), R(q), A.isEmpty(t.searchString) || (C(t.searchString), $({
      newField: t.field || "all",
      searchableI: ue,
      newSearchQuery: t.searchString
    })), A.isEmpty(t.field) || U(t.field);
  }, [n, y]), Zt(() => {
    C(A.isEmpty(t.searchString) ? "" : t.searchString), U(A.isEmpty(t.field) ? "all" : t.field);
  }, [x]);
  const $e = Og.useReactToPrint({
    content: () => pe.current
  }), W = () => {
    if (typeof A.get(e, "onPrint", null) == "function")
      return e.onPrint();
    h({ ...d, rows: g, page: 1 }, !0), me(!0);
  }, H = () => {
    h({ ...d, rows: g, page: 1 }, !0), re(!0);
  }, $ = ({ value: ue = d, newField: q = B, searchableI: ee = !1, newSearchQuery: we = S }) => {
    let Te = Se;
    ee && (Te = ee);
    const Re = A.pick(d, ["rows", "orderKey", "orderDir"]), Be = Ao(q);
    let Fe = Te.map((Ze) => {
      let Ge = [], Ve = "";
      return A.get(Ze, "multipleColumns", !1) ? (Ze.multipleColumns.forEach((Tt) => {
        Ve = Ao(Tt.fieldKey || Tt.key), Ge = [...Ge, Ve];
      }), Ge) : (Ve = Ao(Ze.fieldKey || Ze.key), Ve);
    });
    Fe = A.flatten(Fe);
    let et = {
      ...Re,
      page: 1,
      fields: Fe
    };
    A.isEmpty(we) || (et = {
      ...et,
      [Be]: we
    }), A.isEmpty(ue) && (et = { ...Re, page: 1, fields: Fe }), p(et), h(et);
  }, D = () => {
    let ue = [];
    return n.forEach((q) => {
      !q.hidden && !q.action && !q.multiple && (q.twoLines ? (A.get(q.line1, "canFilter", !0) && (ue = [...ue, q.line1]), A.get(q.line2, "canFilter", !0) && (ue = [...ue, q.line2])) : A.get(q, "canFilter", !0) && (ue = [...ue, q]));
    }), ue;
  }, G = () => {
    $({});
  }, Z = Xp(A.debounce(G, 1e3), [S]), le = () => {
    let ue = null;
    return A.isEmpty(u) || (ue = A.map(u, (q, ee) => {
      switch (q.componentType) {
        case "input":
          return /* @__PURE__ */ oe(
            "div",
            {
              className: A.isEmpty(q.inputContainerStyle) ? Et.defaultTopInputContainerStyle : q.inputContainerStyle,
              children: [
                /* @__PURE__ */ P("span", { className: Et.topInputLabel, children: q.label }),
                /* @__PURE__ */ P(
                  dd,
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
          return /* @__PURE__ */ oe(
            "div",
            {
              className: A.isEmpty(q.inputContainerStyle) ? Et.defaultTopInputContainerStyle : q.inputContainerStyle,
              children: [
                /* @__PURE__ */ P("span", { className: Et.topInputLabel, children: q.label }),
                /* @__PURE__ */ P(
                  An.Input,
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
          return /* @__PURE__ */ oe(
            "div",
            {
              className: A.isEmpty(q.checkContainerStyle) ? Et.defaultTopInputContainerStyle : q.checkContainerStyle,
              children: [
                /* @__PURE__ */ P("span", { className: Et.labelCheck, children: q.leftLabel }),
                /* @__PURE__ */ P(Gn, { toggle: q.toggle !== !1, checked: q.checked, disabled: q.disabled, onChange: q.onChange }),
                /* @__PURE__ */ P("span", { className: Et.inputLabelCheck, children: q.rightLabel })
              ]
            },
            ee
          );
        case "radio":
          return /* @__PURE__ */ oe(
            "div",
            {
              className: A.isEmpty(q.checkContainerStyle) ? Et.defaultTopInputContainerStyle : q.checkContainerStyle,
              children: [
                /* @__PURE__ */ oe("div", { children: [
                  /* @__PURE__ */ P(
                    $o,
                    {
                      checked: q.checkedR,
                      disabled: q.disabled,
                      onChange: q.onChange
                    }
                  ),
                  /* @__PURE__ */ P("span", { className: Et.inputLabelCheck, children: q.rightLabel })
                ] }),
                /* @__PURE__ */ oe("div", { children: [
                  /* @__PURE__ */ P(
                    $o,
                    {
                      checked: q.checkedL,
                      disabled: q.disabled,
                      onChange: q.onChange
                    }
                  ),
                  /* @__PURE__ */ P("span", { className: Et.inputLabelCheck, children: q.leftLabel })
                ] })
              ]
            },
            ee
          );
        case "DropDown":
          return !q.hidden && /* @__PURE__ */ oe(
            "div",
            {
              className: A.isEmpty(q.inputContainerStyle) ? Et.defaultTopDropdownContainerStyle : q.inputContainerStyle,
              children: [
                /* @__PURE__ */ P("span", { className: Et.topInputLabel, children: q.label }),
                /* @__PURE__ */ P(
                  Cn,
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
          return /* @__PURE__ */ oe(
            "div",
            {
              className: A.isEmpty(q.inputContainerStyle) ? Et.defaultLabelContainerStyle : q.inputContainerStyle,
              children: [
                /* @__PURE__ */ P("span", { className: Et.labelTitle, children: q.title }),
                /* @__PURE__ */ P("span", { className: Et.labelValue, children: q.value })
              ]
            },
            ee
          );
        case "custom":
          return /* @__PURE__ */ P("div", { children: q.content }, ee);
        default:
          return /* @__PURE__ */ P(
            "div",
            {
              className: A.isEmpty(q.buttonContainerStyle) ? Et.defaultLabelContainerStyle : q.buttonContainerStyle,
              children: /* @__PURE__ */ oe(
                ft,
                {
                  className: A.isEmpty(q.className) ? Et.defaultTopButton : q.className,
                  disabled: A.get(q, "disabled", !1),
                  onClick: q.onClick,
                  children: [
                    !A.isEmpty(q.icon) && /* @__PURE__ */ P(We, { className: Et.addButtonIcon, name: q.icon }),
                    A.get(q, "content", "")
                  ]
                },
                ee
              )
            },
            ee
          );
      }
    })), /* @__PURE__ */ P("div", { className: Et.renderTopButtonsContainer, children: ue });
  }, Ne = () => {
    G(), ye({}), N(!1);
  }, de = () => {
    $({ value: {} });
  }, xe = (ue) => {
    Z.cancel(), C(ue);
  };
  return /* @__PURE__ */ oe(xa, { children: [
    /* @__PURE__ */ oe("div", { className: I ? `${Et.mainContainer} ${I}` : Et.mainContainer, children: [
      A.get(t, "searchable", !0) && /* @__PURE__ */ P(
        "div",
        {
          className: Et.searchContainer,
          style: {
            justifyContent: A.get(t, "searchPosition", "flex-start"),
            width: A.get(t, "width", "100%")
          },
          children: /* @__PURE__ */ oe("div", { className: Et.searchWrapper, children: [
            !w && /* @__PURE__ */ P(
              dd,
              {
                className: Et.searchInput,
                name: "searchString",
                disabled: A.get(t, "searchDisabled", !1),
                onKeyUp: Z,
                onChange: (ue) => {
                  xe(ue.target.value);
                },
                placeholder: "Buscar",
                value: S,
                onClear: de,
                dropdown: {
                  disabled: A.get(t, "searchDisabled", !1),
                  options: T,
                  name: "searchField",
                  onChange: (ue, { value: q }) => {
                    U(q), A.isEmpty(S) || $({ newField: q });
                  },
                  value: B
                }
              }
            ),
            A.get(t, "filterButton", !0) && /* @__PURE__ */ P(
              ft,
              {
                disabled: A.get(t, "searchDisabled", !1),
                className: `${Et.filterButton} ${A.get(t, "hideOnMobile", !1) ? Et.hideOnMobile : ""}`,
                onClick: () => {
                  z(!0);
                },
                children: /* @__PURE__ */ P(We, { className: Et.addButtonIcon, name: "filter" })
              }
            ),
            w && /* @__PURE__ */ oe(ft, { className: Et.clearButton, onClick: Ne, children: [
              /* @__PURE__ */ P(We, { name: "filter" }),
              "Limpiar"
            ] })
          ] })
        }
      ),
      !A.isEmpty(u) && /* @__PURE__ */ P("div", { className: Et.topButtonsDesktop, children: le() }),
      /* @__PURE__ */ oe("div", { className: Et.addButtonsContainer, children: [
        !A.isEmpty(r) && /* @__PURE__ */ P("div", { className: Et.addButtonContainer, children: /* @__PURE__ */ oe(
          ft,
          {
            className: Et.addButton,
            disabled: A.get(r, "disabled", !1),
            onClick: s || (() => c("Add", null)),
            children: [
              /* @__PURE__ */ P(We, { className: Et.addButtonIcon, name: A.get(r, "icon", "plus") }),
              A.get(r, "label", "")
            ]
          }
        ) }),
        o,
        A.get(e, "printable", !0) && /* @__PURE__ */ oe("div", { className: O ? Et.hidePrintButtonsMobile : "", children: [
          A.get(e, "visiblePDF", !0) && /* @__PURE__ */ P(ft, { onClick: W, className: Et.printButton, primary: !0, icon: "print" }),
          A.get(e, "visibleExcel", !0) && /* @__PURE__ */ P(ft, { className: Et.exelButton, icon: "file excel", onClick: H })
        ] })
      ] })
    ] }),
    !A.isEmpty(u) && /* @__PURE__ */ P("div", { className: Et.secondLine, children: le() }),
    se ? /* @__PURE__ */ P("div", { style: { display: "none" }, children: /* @__PURE__ */ P("div", { ref: pe, children: /* @__PURE__ */ P(
      Jx,
      {
        data: m,
        headerDetail: F,
        columns: n,
        sumData: _,
        clickedRowColor: b,
        handlerTable: c,
        printHeader: A.get(e, "printHeader", {
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
    J ? /* @__PURE__ */ P(lY, { data: ne, headers: ge, filename: A.get(e, "printHeader.title", "Título"), ref: ke }) : void 0,
    te && /* @__PURE__ */ P(
      tC,
      {
        onClose: () => {
          z(!1);
        },
        customSearchKeys: y,
        searchableItems: Se,
        searchParams: d,
        setSearchParams: p,
        dataHandler: h,
        formData: ae,
        setFormData: ye,
        setIsClearButton: N,
        clearFilter: Ne
      }
    )
  ] });
};
nC.propTypes = {
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
const oq = "_tableDesktopOnly_11faq_1", iq = "_cardsContainerMobile_11faq_21", sq = "_tableScroll_11faq_85", lq = "_tableScrollWrapper_11faq_97", cq = "_tableWidthAuto_11faq_107", uq = "_stickyFooterTable_11faq_117", pi = {
  tableDesktopOnly: oq,
  cardsContainerMobile: iq,
  tableScroll: sq,
  tableScrollWrapper: lq,
  tableWidthAuto: cq,
  stickyFooterTable: uq
}, dq = ({
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
  onAddButtonClick: N,
  filteredPrintData: F,
  checkAllData: x,
  onChangeDeselect: I = !0,
  sumData: O = {},
  handlerTable: S,
  dataHandler: C,
  handlerMultiple: T = () => {
  },
  cafParams: R,
  cafClearButton: B = !1,
  widthAuto: U = !1,
  mobileCardView: te = !1,
  cardLine1: z = [],
  cardLine2: ne = [],
  cardLine3: fe = [],
  cardLine4: ge = [],
  onLoadMore: Pe = null,
  // Handler personalizado para scroll infinito
  isLoadingMore: se = !1,
  // Estado de carga para scroll infinito
  hasMore: me = null,
  // Si hay más datos (si es null, se calcula automáticamente)
  mergeConfig: J = null,
  // Configuración para merge automático en scroll infinito
  topPlaceClassName: re = "",
  // Clase CSS personalizada para TopPlace
  hidePrintButtons: ae = !1,
  // Oculta los botones de imprimir PDF y Excel
  scrollBody: ye = !1,
  // Envuelve la tabla en un contenedor con scroll para que solo el body haga scroll
  downloadFileFetcher: Se
}) => {
  const [Ce, pe] = st({ rows: 10, page: 1 }), [ke, $e] = st(!1), [W, H] = st([]), [$, D] = st([]), [G, Z] = st(!1), le = {
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
    pe({ ...Ce, ...m });
  }, []), Zt(() => {
    Z(B);
  }, [B]), Zt(() => {
    A.isEmpty(R) || A.isEqual(Ce, R) || pe(R);
  }, [R]), /* @__PURE__ */ oe(xa, { children: [
    p && /* @__PURE__ */ P(
      nC,
      {
        data: e,
        columns: t,
        topButtons: n,
        searcher: { ...le, ...u },
        searchRefresh: c,
        addButton: w ? b : null,
        extraAddButtons: _,
        onAddButtonClick: N,
        searchParams: Ce,
        setSearchParams: pe,
        handlerTable: S,
        dataHandler: C,
        filteredPrintData: F,
        totalRows: g,
        print: d,
        headerDetail: o,
        defaultParams: m,
        customSearchKeys: r,
        sumData: O,
        isClearButton: G,
        setIsClearButton: Z,
        topPlaceClassName: re,
        hidePrintButtons: ae
      }
    ),
    te && /* @__PURE__ */ P("div", { className: pi.cardsContainerMobile, children: /* @__PURE__ */ P(
      ud,
      {
        data: e,
        columns: t,
        headerDetail: o,
        sumData: O,
        clickedRowColor: s,
        handlerTable: S,
        handlerMultiple: T,
        onChangeDeselect: I,
        concatValue: W,
        setConcatValue: H,
        concatKeys: $,
        setConcatKeys: D,
        concatAll: ke,
        setConcatAll: $e,
        checkAllData: x,
        setRowStyle: y,
        totalRows: g,
        mobileCardView: te,
        cardLine1: z,
        cardLine2: ne,
        cardLine3: fe,
        cardLine4: ge,
        dataHandler: C,
        searchParams: Ce,
        setSearchParams: pe,
        onLoadMore: Pe,
        isLoadingMoreProp: se,
        hasMore: me,
        mergeConfig: J,
        downloadFileFetcher: Se
      }
    ) }),
    /* @__PURE__ */ P("div", { className: `${ye ? pi.tableScroll : ""} ${pi.tableScrollWrapper}`, children: /* @__PURE__ */ oe(
      bt,
      {
        sortable: !0,
        celled: !0,
        striped: !0,
        compact: "very",
        className: `${te ? pi.tableDesktopOnly : ""} ${U ? pi.tableWidthAuto : ""}`,
        children: [
          /* @__PURE__ */ P(
            Xm,
            {
              columns: t,
              searchParams: Ce,
              setSearchParams: pe,
              totalRows: g,
              dataHandler: C,
              concatValue: W,
              setConcatValue: H,
              concatKeys: $,
              setConcatKeys: D,
              concatAll: ke,
              setConcatAll: $e,
              widthAuto: U
            }
          ),
          /* @__PURE__ */ P(
            ud,
            {
              data: e,
              columns: t,
              headerDetail: o,
              sumData: O,
              clickedRowColor: s,
              handlerTable: S,
              handlerMultiple: T,
              onChangeDeselect: I,
              concatValue: W,
              setConcatValue: H,
              concatKeys: $,
              setConcatKeys: D,
              concatAll: ke,
              setConcatAll: $e,
              checkAllData: x,
              setRowStyle: y,
              totalRows: g,
              mobileCardView: !1,
              cardLine1: z,
              cardLine2: ne,
              cardLine3: fe,
              cardLine4: ge,
              downloadFileFetcher: Se
            }
          )
        ]
      }
    ) }),
    h && /* @__PURE__ */ P(bt, { className: `${te ? pi.tableDesktopOnly : ""} ${pi.stickyFooterTable}`, children: /* @__PURE__ */ P(
      Yx,
      {
        visiblePagination: h,
        searchParams: Ce,
        setSearchParams: pe,
        dataHandler: C,
        totalRows: g
      }
    ) })
  ] });
};
dq.propTypes = {
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
function fq(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function T_(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, rC(r.key), r);
  }
}
function pq(e, t, n) {
  return t && T_(e.prototype, t), n && T_(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function hq(e, t, n) {
  return (t = rC(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function fd() {
  return fd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, fd.apply(null, arguments);
}
function P_(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Su(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? P_(Object(n), !0).forEach(function(r) {
      hq(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : P_(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function mq(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function rC(e) {
  var t = mq(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
var aC = { exports: {} };
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
      var p, h, m, g, y, b, _, w, N;
      if (p = d.match(u), !p)
        throw new Error("invalid data URI");
      for (h = p[2] ? p[1] : "text/plain" + (p[3] || ";charset=US-ASCII"), m = !!p[4], g = d.slice(p[0].length), m ? y = atob(g) : y = decodeURIComponent(g), b = new ArrayBuffer(y.length), _ = new Uint8Array(b), w = 0; w < y.length; w += 1)
        _[w] = y.charCodeAt(w);
      return r ? new Blob([o ? _ : b], {
        type: h
      }) : (N = new s(), N.append(b), N.getBlob(h));
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
})(aC);
var k_ = aC.exports, gq = function(t) {
  return typeof Blob > "u" ? !1 : t instanceof Blob || Object.prototype.toString.call(t) === "[object Blob]";
}, N_ = {
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
}, vq = typeof window < "u" && typeof window.document < "u", Ko = vq ? window : {}, pd = function(t) {
  return t > 0 && t < 1 / 0;
}, yq = Array.prototype.slice;
function Sg(e) {
  return Array.from ? Array.from(e) : yq.call(e);
}
var bq = /^image\/.+$/;
function am(e) {
  return bq.test(e);
}
function _q(e) {
  var t = am(e) ? e.substr(6) : "";
  return t === "jpeg" && (t = "jpg"), ".".concat(t);
}
var oC = String.fromCharCode;
function wq(e, t, n) {
  var r = "", o;
  for (n += t, o = t; o < n; o += 1)
    r += oC(e.getUint8(o));
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
var xq = Ko.btoa;
function I_(e, t) {
  for (var n = [], r = 8192, o = new Uint8Array(e); o.length > 0; )
    n.push(oC.apply(null, Sg(o.subarray(0, r)))), o = o.subarray(r);
  return "data:".concat(t, ";base64,").concat(xq(n.join("")));
}
function Cq(e) {
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
      if (wq(t, d, 4) === "Exif") {
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
function Oq(e) {
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
var Sq = /\.\d*(?:0|9){12}\d*$/;
function A_(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
  return Sq.test(e) ? Math.round(e * t) / t : e;
}
function wl(e) {
  var t = e.aspectRatio, n = e.height, r = e.width, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "none", s = pd(r), u = pd(n);
  if (s && u) {
    var c = n * t;
    (o === "contain" || o === "none") && c > r || o === "cover" && c < r ? n = r / t : r = n * t;
  } else s ? n = r / t : u && (r = n * t);
  return {
    width: r,
    height: n
  };
}
function Tq(e) {
  for (var t = Sg(new Uint8Array(e)), n = t.length, r = [], o = 0; o + 3 < n; ) {
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
function Pq(e, t) {
  var n = Sg(new Uint8Array(e));
  if (n[2] !== 255 || n[3] !== 224)
    return e;
  var r = n[4] * 256 + n[5], o = [255, 216].concat(t, n.slice(4 + r));
  return new Uint8Array(o);
}
var kq = Ko.ArrayBuffer, Kp = Ko.FileReader, hi = Ko.URL || Ko.webkitURL, Nq = /\.\w+$/, Iq = Ko.Compressor, Aq = /* @__PURE__ */ function() {
  function e(t, n) {
    fq(this, e), this.file = t, this.exif = [], this.image = new Image(), this.options = Su(Su({}, N_), n), this.aborted = !1, this.result = null, this.init();
  }
  return pq(e, [{
    key: "init",
    value: function() {
      var n = this, r = this.file, o = this.options;
      if (!gq(r)) {
        this.fail(new Error("The first argument must be a File or Blob object."));
        return;
      }
      var s = r.type;
      if (!am(s)) {
        this.fail(new Error("The first argument must be an image File or Blob object."));
        return;
      }
      if (!hi || !Kp) {
        this.fail(new Error("The current browser does not support image compression."));
        return;
      }
      kq || (o.checkOrientation = !1, o.retainExif = !1);
      var u = s === "image/jpeg", c = u && o.checkOrientation, d = u && o.retainExif;
      if (hi && !c && !d)
        this.load({
          url: hi.createObjectURL(r)
        });
      else {
        var p = new Kp();
        this.reader = p, p.onload = function(h) {
          var m = h.target, g = m.result, y = {}, b = 1;
          c && (b = Cq(g), b > 1 && fd(y, Oq(b))), d && (n.exif = Tq(g)), c || d ? !hi || b > 1 ? y.url = I_(g, s) : y.url = hi.createObjectURL(r) : y.url = g, n.load(y);
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
        Eq() ? r.draw(Su(Su({}, n), {}, {
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
      }, Ko.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(Ko.navigator.userAgent) && (s.crossOrigin = "anonymous"), s.alt = o.name, s.src = n.url;
    }
  }, {
    key: "draw",
    value: function(n) {
      var r = this, o = n.naturalWidth, s = n.naturalHeight, u = n.rotate, c = u === void 0 ? 0 : u, d = n.scaleX, p = d === void 0 ? 1 : d, h = n.scaleY, m = h === void 0 ? 1 : h, g = this.file, y = this.image, b = this.options, _ = document.createElement("canvas"), w = _.getContext("2d"), N = Math.abs(c) % 180 === 90, F = (b.resize === "contain" || b.resize === "cover") && pd(b.width) && pd(b.height), x = Math.max(b.maxWidth, 0) || 1 / 0, I = Math.max(b.maxHeight, 0) || 1 / 0, O = Math.max(b.minWidth, 0) || 0, S = Math.max(b.minHeight, 0) || 0, C = o / s, T = b.width, R = b.height;
      if (N) {
        var B = [I, x];
        x = B[0], I = B[1];
        var U = [S, O];
        O = U[0], S = U[1];
        var te = [R, T];
        T = te[0], R = te[1];
      }
      F && (C = T / R);
      var z = wl({
        aspectRatio: C,
        width: x,
        height: I
      }, "contain");
      x = z.width, I = z.height;
      var ne = wl({
        aspectRatio: C,
        width: O,
        height: S
      }, "cover");
      if (O = ne.width, S = ne.height, F) {
        var fe = wl({
          aspectRatio: C,
          width: T,
          height: R
        }, b.resize);
        T = fe.width, R = fe.height;
      } else {
        var ge = wl({
          aspectRatio: C,
          width: T,
          height: R
        }), Pe = ge.width;
        T = Pe === void 0 ? o : Pe;
        var se = ge.height;
        R = se === void 0 ? s : se;
      }
      T = Math.floor(A_(Math.min(Math.max(T, O), x))), R = Math.floor(A_(Math.min(Math.max(R, S), I)));
      var me = -T / 2, J = -R / 2, re = T, ae = R, ye = [];
      if (F) {
        var Se = 0, Ce = 0, pe = o, ke = s, $e = wl({
          aspectRatio: C,
          width: o,
          height: s
        }, {
          contain: "cover",
          cover: "contain"
        }[b.resize]);
        pe = $e.width, ke = $e.height, Se = (o - pe) / 2, Ce = (s - ke) / 2, ye.push(Se, Ce, pe, ke);
      }
      if (ye.push(me, J, re, ae), N) {
        var W = [R, T];
        T = W[0], R = W[1];
      }
      _.width = T, _.height = R, am(b.mimeType) || (b.mimeType = g.type);
      var H = "transparent";
      g.size > b.convertSize && b.convertTypes.indexOf(b.mimeType) >= 0 && (b.mimeType = "image/jpeg");
      var $ = b.mimeType === "image/jpeg";
      if ($ && (H = "#fff"), w.fillStyle = H, w.fillRect(0, 0, T, R), b.beforeDraw && b.beforeDraw.call(this, w, _), !this.aborted && (w.save(), w.translate(T / 2, R / 2), w.rotate(c * Math.PI / 180), w.scale(p, m), w.drawImage.apply(w, [y].concat(ye)), w.restore(), b.drew && b.drew.call(this, w, _), !this.aborted)) {
        var D = function(Z) {
          if (!r.aborted) {
            var le = function(ue) {
              return r.done({
                naturalWidth: o,
                naturalHeight: s,
                result: ue
              });
            };
            if (Z && $ && b.retainExif && r.exif && r.exif.length > 0) {
              var Ne = function(ue) {
                return le(k_(I_(Pq(ue, r.exif), b.mimeType)));
              };
              if (Z.arrayBuffer)
                Z.arrayBuffer().then(Ne).catch(function() {
                  r.fail(new Error("Failed to read the compressed image with Blob.arrayBuffer()."));
                });
              else {
                var de = new Kp();
                r.reader = de, de.onload = function(xe) {
                  var ue = xe.target;
                  Ne(ue.result);
                }, de.onabort = function() {
                  r.fail(new Error("Aborted to read the compressed image with FileReader."));
                }, de.onerror = function() {
                  r.fail(new Error("Failed to read the compressed image with FileReader."));
                }, de.onloadend = function() {
                  r.reader = null;
                }, de.readAsArrayBuffer(Z);
              }
            } else
              le(Z);
          }
        };
        _.toBlob ? _.toBlob(D, b.mimeType, b.quality) : D(k_(_.toDataURL(b.mimeType, b.quality)));
      }
    }
  }, {
    key: "done",
    value: function(n) {
      var r = n.naturalWidth, o = n.naturalHeight, s = n.result, u = this.file, c = this.image, d = this.options;
      if (hi && c.src.indexOf("blob:") === 0 && hi.revokeObjectURL(c.src), s)
        if (d.strict && !d.retainExif && s.size > u.size && d.mimeType === u.type && !(d.width > r || d.height > o || d.minWidth > r || d.minHeight > o || d.maxWidth < r || d.maxHeight < o))
          s = u;
        else {
          var p = u.name;
          p && s.type !== u.type && (p = p.replace(Nq, _q(s.type)));
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
      return window.Compressor = Iq, e;
    }
    /**
     * Change the default options.
     * @param {Object} options - The new default options.
     */
  }, {
    key: "setDefaults",
    value: function(n) {
      fd(N_, n);
    }
  }]);
}();
//! moment.js locale configuration
//! locale : Spanish [es]
//! author : Julio Napurí : https://github.com/julionc
var R_ = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split(
  "_"
), Rq = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), Zp = [
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
], M_ = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
Le.defineLocale("es", {
  months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
    "_"
  ),
  monthsShort: function(e, t) {
    return e ? /-MMM-/.test(t) ? Rq[e.month()] : R_[e.month()] : R_;
  },
  monthsRegex: M_,
  monthsShortRegex: M_,
  monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
  monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
  monthsParse: Zp,
  longMonthsParse: Zp,
  shortMonthsParse: Zp,
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
Le.locale("es");
const Mq = (e) => new Promise((t, n) => {
  new Aq(e, {
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
}), Dq = (e = "") => {
  const t = A.split(e, ".");
  return A.toLower(t.length > 1 ? t.pop() : "");
}, Lq = (e = "") => {
  const t = String(e).match(/^data:([^;]+);base64,/i), n = t ? A.toLower(t[1]) : "";
  return A.startsWith(n, "image/") ? "image" : A.startsWith(n, "audio/") ? "audio" : A.startsWith(n, "video/") ? "video" : n === "application/pdf" || A.includes(n, "pdf") ? "pdf" : A.includes(n, "word") || A.includes(n, "officedocument.wordprocessingml") ? "doc" : A.includes(n, "excel") || A.includes(n, "spreadsheetml") ? "xls" : A.includes(n, "powerpoint") || A.includes(n, "presentationml") ? "ppt" : A.includes(n, "zip") || A.includes(n, "x-7z-compressed") || A.includes(n, "x-rar-compressed") || A.includes(n, "tar") || A.includes(n, "gzip") ? "zip" : A.includes(n, "text/") || A.includes(n, "json") || A.includes(n, "xml") ? "txt" : "file";
}, ti = (e = []) => ` ${A.join(e, " ")} `, Oo = (e, t) => {
  const n = ` ${A.trim(A.toLower(t))} `;
  return A.includes(e, n);
}, Fq = ti(["doc", "docx", "odt"]), $q = ti(["xls", "xlsx", "csv", "ods"]), Bq = ti(["ppt", "pptx", "odp"]), jq = ti(["zip", "rar", "7z", "tar", "gz", "bz2"]), Wq = ti(["txt", "md", "rtf", "json", "xml", "log", "yaml", "yml"]), Uq = ti(["jpg", "jpeg", "png", "webp", "apng", "avif", "gif", "svg", "bmp", "ico", "tiff"]), zq = ti(["mp4", "webm", "ogg", "mov", "m4v", "mkv", "avi", "wmv", "flv"]), Hq = ti(["mp3", "wav", "ogg", "m4a", "aac", "flac", "wma", "opus", "weba"]), D_ = (e = "", t = "") => {
  const n = A.toLower(t);
  if (n && A.startsWith(n, "image/")) return "image";
  if (n && A.startsWith(n, "audio/")) return "audio";
  if (n && A.startsWith(n, "video/")) return "video";
  const r = Dq(e);
  return r === "pdf" ? "pdf" : Oo(Uq, r) ? "image" : Oo(zq, r) ? "video" : Oo(Hq, r) ? "audio" : Oo(Fq, r) ? "doc" : Oo($q, r) ? "xls" : Oo(Bq, r) ? "ppt" : Oo(jq, r) ? "zip" : Oo(Wq, r) ? "txt" : "file";
}, Tu = (e, t) => {
  if (!e)
    return "-";
  const n = Le(e);
  return n.isValid() ? n.format(t) : "-";
};
function Yq(e) {
  if (Number.isNaN(Number(e))) return "";
  const t = Math.floor(e / 60), n = Math.floor(t / 60), r = Math.floor(n / 24), o = n - r * 24, s = t - o * 60 - r * 24 * 60;
  return o < 1 ? `${s}m` : r < 1 ? `${o}h ${s}m` : `${r}d ${o}h ${s}m`;
}
const qq = "_header_19o3d_3", Vq = "_inputSearch_19o3d_17", Gq = "_totalTime_19o3d_31", Kq = "_spaceClass_19o3d_43", Zq = "_nuevo_19o3d_51", Xq = "_atender_19o3d_61", Qq = "_cliente_19o3d_71", Jq = "_alertBadge_19o3d_81", eV = "_icon_19o3d_99", tV = "_headerTable_19o3d_107", nV = "_headerFooter_19o3d_119", rV = "_cell_19o3d_129", aV = "_container_19o3d_143", oV = "_containerCenter_19o3d_155", iV = "_containerLeft_19o3d_167", sV = "_containerUs_19o3d_181", lV = "_containerPrincipa_19o3d_195", cV = "_fixedUserInfo_19o3d_207", uV = "_containerRightUserRow_19o3d_217", dV = "_containerTell_19o3d_229", fV = "_containerRightUserRowContainer_19o3d_245", pV = "_headerLabel_19o3d_257", hV = "_pDate_19o3d_269", mV = "_headerTitlesss_19o3d_289", gV = "_headerTitlesssDate_19o3d_299", vV = "_containerTelu_19o3d_311", yV = "_containerRight_19o3d_217", bV = "_containerBottom_19o3d_335", _V = "_containerLeftUser_19o3d_343", wV = "_containerLeftGroups_19o3d_357", EV = "_containerRightUser_19o3d_217", xV = "_headerTitle_19o3d_289", CV = "_tableContainer_19o3d_391", OV = "_containerCont_19o3d_401", SV = "_arrayCellContainer_19o3d_409", TV = "_arrayCell_19o3d_409", PV = "_DesConectadoText_19o3d_445", kV = "_conectadoText_19o3d_455", NV = "_cellButton_19o3d_465", IV = "_cellArrayButton_19o3d_479", AV = "_tableCell_19o3d_497", RV = "_headerMenu_19o3d_509", MV = "_headerMenuItem_19o3d_517", DV = "_tableCellHeader_19o3d_525", LV = "_tableCellHeaderCheck_19o3d_537", FV = "_tableCellHeaderIcon_19o3d_545", $V = "_tableCellPag_19o3d_553", BV = "_ColorActive_19o3d_561", jV = "_groupHover_19o3d_569", WV = "_emptyChat_19o3d_579", UV = "_ButtonEraser_19o3d_589", zV = "_ButtonRoute_19o3d_603", HV = "_ButtonEdit_19o3d_617", YV = "_ButtonIcon_19o3d_631", qV = "_ButtonLabel_19o3d_643", VV = "_ButtonLink_19o3d_651", GV = "_ButtonPedidos_19o3d_667", KV = "_ButtonResend_19o3d_691", ZV = "_linkMap_19o3d_705", XV = "_ButtonMap_19o3d_731", QV = "_weightText_19o3d_787", JV = "_positiveButton_19o3d_795", eG = "_multipleActions_19o3d_811", tG = "_positiveAddButton_19o3d_821", nG = "_positiveDesButton_19o3d_837", rG = "_negativeButton_19o3d_855", aG = "_menuTable_19o3d_879", oG = "_iconTable_19o3d_887", iG = "_detalleLabel_19o3d_911", sG = "_modalHeader_19o3d_921", lG = "_codeMap_19o3d_933", cG = "_paginationLabel_19o3d_941", uG = "_paginationCell_19o3d_949", dG = "_pagination_19o3d_941", fG = "_itemCount_19o3d_971", pG = "_labelColor_19o3d_979", hG = "_blockString_19o3d_993", mG = "_emptyDataIcon_19o3d_1009", gG = "_IconDataBase_19o3d_1025", vG = "_labelDropdown_19o3d_1033", yG = "_searchContainer_19o3d_1055", bG = "_rowMiddle_19o3d_1065", _G = "_printButton_19o3d_1081", wG = "_exelButton_19o3d_1091", EG = "_printableButtons_19o3d_1099", xG = "_searchInputStyle_19o3d_1109", it = {
  header: qq,
  inputSearch: Vq,
  totalTime: Gq,
  spaceClass: Kq,
  nuevo: Zq,
  atender: Xq,
  cliente: Qq,
  alertBadge: Jq,
  icon: eV,
  headerTable: tV,
  headerFooter: nV,
  cell: rV,
  container: aV,
  containerCenter: oV,
  containerLeft: iV,
  containerUs: sV,
  containerPrincipa: lV,
  fixedUserInfo: cV,
  containerRightUserRow: uV,
  containerTell: dV,
  containerRightUserRowContainer: fV,
  headerLabel: pV,
  pDate: hV,
  headerTitlesss: mV,
  headerTitlesssDate: gV,
  containerTelu: vV,
  containerRight: yV,
  containerBottom: bV,
  containerLeftUser: _V,
  containerLeftGroups: wV,
  containerRightUser: EV,
  headerTitle: xV,
  tableContainer: CV,
  containerCont: OV,
  arrayCellContainer: SV,
  arrayCell: TV,
  DesConectadoText: PV,
  conectadoText: kV,
  cellButton: NV,
  cellArrayButton: IV,
  tableCell: AV,
  headerMenu: RV,
  headerMenuItem: MV,
  tableCellHeader: DV,
  tableCellHeaderCheck: LV,
  tableCellHeaderIcon: FV,
  tableCellPag: $V,
  ColorActive: BV,
  groupHover: jV,
  emptyChat: WV,
  ButtonEraser: UV,
  ButtonRoute: zV,
  ButtonEdit: HV,
  ButtonIcon: YV,
  ButtonLabel: qV,
  ButtonLink: VV,
  ButtonPedidos: GV,
  ButtonResend: KV,
  linkMap: ZV,
  ButtonMap: XV,
  weightText: QV,
  positiveButton: JV,
  multipleActions: eG,
  positiveAddButton: tG,
  positiveDesButton: nG,
  negativeButton: rG,
  menuTable: aG,
  iconTable: oG,
  detalleLabel: iG,
  modalHeader: sG,
  codeMap: lG,
  paginationLabel: cG,
  paginationCell: uG,
  pagination: dG,
  itemCount: fG,
  labelColor: pG,
  blockString: hG,
  emptyDataIcon: mG,
  IconDataBase: gG,
  labelDropdown: vG,
  searchContainer: yG,
  rowMiddle: bG,
  printButton: _G,
  exelButton: wG,
  printableButtons: EG,
  searchInputStyle: xG
}, iC = ({
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
  const N = Ln(null), [F, x] = st(0), I = F === 0 ? null : Yq(F), O = w || A.isEmpty(s) && A.isEmpty(u) && A.isEmpty(d) && A.isEmpty(p);
  Zt(() => {
    n && S();
  }, [n]);
  const S = Og.useReactToPrint({
    content: () => {
      if (!N.current || !e.current) return null;
      const C = document.createElement("div"), T = N.current.cloneNode(!0), R = e.current.cloneNode(!0), B = document.createElement("div");
      B.classList.add(it.tableContainer);
      const U = document.createElement("div");
      return U.classList.add(it.containerCont), B.appendChild(U).appendChild(R), C.appendChild(T).appendChild(B), C;
    },
    onBeforeGetContent: async () => {
      if (_) {
        const C = Math.floor(Le.duration(Le().diff(Le(b))).asSeconds());
        x(C);
      }
      await new Promise((C) => setTimeout(C, 100));
    },
    onAfterPrint: () => {
      r();
    }
  });
  return /* @__PURE__ */ oe("div", { children: [
    !o && /* @__PURE__ */ P(ft, { onClick: S, className: it.printButton, primary: !0, icon: "print" }),
    /* @__PURE__ */ P("div", { style: { display: "none" }, children: /* @__PURE__ */ oe("div", { className: it.container, ref: N, children: [
      /* @__PURE__ */ P("div", { className: it.containerCenter, children: /* @__PURE__ */ oe(qn, { as: "h2", icon: !0, children: [
        /* @__PURE__ */ P("span", { className: it.titleText, children: t.company }),
        /* @__PURE__ */ P(qn.Subheader, { children: t.title }),
        (I || h || g) && /* @__PURE__ */ oe(qn.Subheader, { className: it.totalInfoRow, children: [
          /* @__PURE__ */ P("span", { className: `${it.tag} ${it[h.toLowerCase().replace(/\s+/g, "")]}`, children: "Tab " }),
          h && /* @__PURE__ */ P("span", { className: `${it.tag} ${it[h.toLowerCase().replace(/\s+/g, "")]}`, children: h }),
          I && /* @__PURE__ */ P("span", { className: it.spaceClass, children: I }),
          g && /* @__PURE__ */ P("span", { className: it.alertBadge, style: { backgroundColor: m }, children: g })
        ] }),
        !A.isEmpty(t.subTitle) && /* @__PURE__ */ P(qn.Subheader, { children: t.subTitle })
      ] }) }),
      !y && /* @__PURE__ */ oe("div", { className: it.containerBottom, children: [
        /* @__PURE__ */ oe("div", { className: it.containerLeft, children: [
          /* @__PURE__ */ oe("div", { children: [
            /* @__PURE__ */ P("span", { className: it.headerTitle, children: "Cliente:" }),
            " ",
            s
          ] }),
          A.isEmpty(d) && A.isEmpty(u) && /* @__PURE__ */ oe("div", { className: it.pDate, children: [
            /* @__PURE__ */ P("span", { className: it.headerTitlesss, children: "Usuario:" }),
            /* @__PURE__ */ P("span", { children: t.user })
          ] })
        ] }),
        /* @__PURE__ */ oe("div", { className: it.containerLeftUser, children: [
          /* @__PURE__ */ oe("div", { children: [
            /* @__PURE__ */ P("span", { className: it.headerTitle, children: "Canal:" }),
            " ",
            c
          ] }),
          !A.isEmpty(d) && A.isEmpty(u) && A.isEmpty(p) && /* @__PURE__ */ oe("div", { className: it.pDate, children: [
            /* @__PURE__ */ P("span", { className: it.headerTitlesss, children: "Usuario:" }),
            /* @__PURE__ */ P("span", { children: t.user })
          ] }),
          A.isEmpty(d) && !A.isEmpty(u) && A.isEmpty(p) && /* @__PURE__ */ oe("div", { className: it.pDate, children: [
            /* @__PURE__ */ P("span", { className: it.headerTitlesss, children: "Usuario:" }),
            /* @__PURE__ */ P("span", { children: t.user })
          ] }),
          A.isEmpty(d) && A.isEmpty(u) && A.isEmpty(p) && /* @__PURE__ */ oe("div", { className: it.pDate, children: [
            /* @__PURE__ */ P("span", { className: it.headerTitlesssDate, children: "Fecha:" }),
            /* @__PURE__ */ P("span", { children: Tu(/* @__PURE__ */ new Date(), "DD/MM/YYYY, hh:mm A") })
          ] })
        ] }),
        !A.isEmpty(u) && /* @__PURE__ */ oe("div", { className: it.containerTelu, children: [
          /* @__PURE__ */ oe("div", { children: [
            /* @__PURE__ */ P("span", { className: it.headerTitle, children: "Teléfono:" }),
            " ",
            u
          ] }),
          A.isEmpty(d) && !A.isEmpty(p) ? /* @__PURE__ */ oe("div", { className: it.pDate, children: [
            /* @__PURE__ */ P("span", { className: it.headerTitlesss, children: "Usuario:" }),
            /* @__PURE__ */ P("span", { children: t.user })
          ] }) : A.isEmpty(d) && A.isEmpty(p) ? /* @__PURE__ */ oe("div", { className: it.pDate, children: [
            /* @__PURE__ */ P("span", { className: it.headerTitlesssDate, children: "Fecha:" }),
            /* @__PURE__ */ P("span", { children: Tu(/* @__PURE__ */ new Date(), "DD/MM/YYYY, hh:mm A") })
          ] }) : null
        ] }),
        !A.isEmpty(d) && /* @__PURE__ */ oe("div", { className: it.containerLeftUser, children: [
          /* @__PURE__ */ oe("div", { children: [
            /* @__PURE__ */ P("span", { className: it.headerTitle, children: "Etiquetas:" }),
            A.map(d, (C, T) => /* @__PURE__ */ oe("span", { className: it.tag, children: [
              C.name,
              T < d.length - 1 && /* @__PURE__ */ P("span", { children: ", " })
            ] }, T))
          ] }),
          !A.isEmpty(p) && /* @__PURE__ */ oe("div", { className: it.pDate, children: [
            /* @__PURE__ */ P("span", { className: it.headerTitlesss, children: "Usuario:" }),
            /* @__PURE__ */ P("span", { children: t.user })
          ] })
        ] }),
        !A.isEmpty(p) && /* @__PURE__ */ oe("div", { className: it.containerLeftUser, children: [
          /* @__PURE__ */ oe("div", { className: it.containerLeftGroups, children: [
            /* @__PURE__ */ P("span", { className: it.headerTitle, children: "Grupo:" }),
            " ",
            p
          ] }),
          /* @__PURE__ */ oe("div", { className: it.pDate, children: [
            /* @__PURE__ */ P("span", { className: it.headerTitlesssDate, children: "Fecha:" }),
            /* @__PURE__ */ P("span", { children: Tu(/* @__PURE__ */ new Date(), "DD/MM/YYYY, hh:mm A") })
          ] })
        ] })
      ] }),
      y && /* @__PURE__ */ P("div", { className: `${it.fixedUserInfo} ${O ? it.containerLeftUser : ""}`, children: /* @__PURE__ */ oe("div", { className: it.containerRightUserRowContainer, children: [
        /* @__PURE__ */ oe("div", { className: it.containerRightUserRow, children: [
          /* @__PURE__ */ P("span", { className: it.headerLabel, children: "Usuario:" }),
          " ",
          /* @__PURE__ */ P("span", { children: t.user })
        ] }),
        /* @__PURE__ */ oe("div", { className: it.containerRightUserRow, children: [
          /* @__PURE__ */ P("span", { className: it.headerLabel, children: "Fecha:" }),
          " ",
          /* @__PURE__ */ P("span", { children: Tu(/* @__PURE__ */ new Date(), "DD/MM/YYYY, hh:mm A") })
        ] })
      ] }) })
    ] }) })
  ] });
};
iC.propTypes = {
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
const CG = "_attachmentsContainer_4kv5c_1", OG = "_attachment_4kv5c_1", SG = "_noShowInput_4kv5c_71", TG = "_image_4kv5c_79", PG = "_icon_4kv5c_93", kG = "_fileButton_4kv5c_111", NG = "_fileButtonLabel_4kv5c_159", IG = "_fixedIcon_4kv5c_183", AG = "_stateIndicator_4kv5c_199", RG = "_rounded_4kv5c_245", MG = "_roundedImage_4kv5c_253", DG = "_printImageWrapper_4kv5c_263", LG = "_printImageOnly_4kv5c_287", Sn = {
  attachmentsContainer: CG,
  attachment: OG,
  noShowInput: SG,
  image: TG,
  icon: PG,
  fileButton: kG,
  fileButtonLabel: NG,
  fixedIcon: IG,
  stateIndicator: AG,
  rounded: RG,
  roundedImage: MG,
  printImageWrapper: DG,
  printImageOnly: LG
}, L_ = {
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
}, F_ = {
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
}, FG = "image/*,video/*,audio/*,.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.zip,.rar,.7z,.tar,.gz,.csv", $G = (e, t) => e || (t === "image" ? "image/*" : t === "video" ? "video/*" : t === "audio" ? "audio/*" : t === "media" ? "image/*,video/*,audio/*" : t === "file" ? "*/*" : FG), Pu = (e) => e == null || e === "" ? [] : A.isArray(e) ? e : [e], BG = ({
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
  type: N = "all",
  // "all", "image", "video", "audio", "media", "file"
  accept: F = null,
  emptyIcon: x = "image outline",
  // Print & Metadata props (pure props, Redux-free)
  companyName: I,
  userNames: O,
  clientName: S,
  clientPhone: C,
  platformName: T,
  tags: R = [],
  groupName: B
}) => {
  const [U, te] = st([]), [z, ne] = st({ open: !1, selectedImage: null }), [fe, ge] = st(0), [Pe, se] = st(!1), me = Ln(null), J = Ln([]), re = Ln(null), ae = e !== void 0 ? e : n, ye = (q) => {
    t && t(q), r && r(q);
  };
  Zt(() => {
    const q = Pu(ae);
    !A.isEmpty(q) && !A.isEqual(J.current, q) ? (async () => {
      const ee = await Promise.all(
        A.map(q, async (we, Te) => {
          const Re = String(we).startsWith("data:") || String(we).startsWith("blob:"), Be = String(we).match(/^(http(?!s?:image)|image)/gi) === null && !Re;
          let Fe = we;
          Be && u && (Fe = await u({ uri: we }));
          let et = "file", Ze = "archivo";
          if (Re)
            et = Lq(String(we)), U[Te] && U[Te].name && U[Te].name !== "archivo" && (Ze = U[Te].name);
          else if (typeof we == "string") {
            const Ge = String(we).split(/[?#]/)[0];
            et = D_(Ge);
            try {
              const Ve = decodeURIComponent(Ge);
              Ve.includes("/") ? Ze = Ve.substring(Ve.lastIndexOf("/") + 1) : Ze = Ve;
            } catch {
              Ze = "archivo";
            }
          }
          return {
            link: Fe,
            type: et,
            isLocal: Re,
            name: Ze || "archivo",
            mime: ""
          };
        })
      );
      te(ee), J.current = q;
    })() : A.isEmpty(q) && (te([]), J.current = []);
  }, [ae, u]);
  const Se = () => {
    me.current && me.current.click();
  }, Ce = (q) => new Promise((ee) => {
    const we = new FileReader();
    we.onloadend = () => ee(we.result), we.readAsDataURL(q);
  }), pe = async (q) => {
    q.preventDefault();
    const ee = Array.from(q.target.files || []);
    if (ee.length === 0) return;
    const we = Pu(ae);
    let Te = c ? [...we] : [], Re = c ? [...U] : [];
    for (const et of ee) {
      const Ze = et.type.startsWith("image/"), Ge = Ze && (N === "image" || N === "all" || N === "file");
      let Ve;
      if (Ge)
        try {
          const ve = await Mq(et);
          Ve = await Ce(ve);
        } catch {
          Ve = await Ce(et);
        }
      else
        Ve = await Ce(et);
      const Tt = Ze ? "image" : D_(et.name, et.type);
      Te = [...Te, Ve], Re = [
        ...Re,
        {
          link: URL.createObjectURL(et),
          type: Tt,
          isLocal: !0,
          name: et.name,
          mime: et.type
        }
      ];
    }
    const Be = c ? Te : Te.slice(-1), Fe = c ? Re : Re.slice(-1);
    te(Fe), ye(Be), me.current && (me.current.value = null);
  }, ke = (q) => {
    const ee = A.reject(U, (Fe) => U.indexOf(Fe) === q), we = Pu(ae), Te = A.find(we, (Fe) => we.indexOf(Fe) === q), Re = A.reject(we, (Fe) => we.indexOf(Fe) === q);
    let Be = [];
    c ? Te && typeof Te == "string" && Te.length > 100 ? Be = [...o] : Te && (Be = [...o, Te]) : Te && typeof Te == "string" && Te.length > 100 ? Be = [...o] : Be = Te ? [Te] : [], te(ee), ye(Re), s(Be);
  }, $e = (q, ee, we = "archivo") => {
    if (ee === "video" || ee === "audio") {
      ne({ selectedImage: q, open: !0 });
      return;
    }
    if (ee === "pdf") {
      if (typeof q == "string" && q.startsWith("data:")) {
        const Re = window.open("", "_blank");
        Re ? fetch(q).then((Be) => Be.blob()).then((Be) => {
          const Fe = URL.createObjectURL(Be);
          Re.location.href = Fe, setTimeout(() => {
            Re.document && (Re.document.title = we);
          }, 100);
        }) : window.open(q, "_blank");
      } else
        window.open(q, "_blank");
      return;
    }
    const Te = document.createElement("a");
    Te.href = q, Te.download = we, Te.target = "_blank", document.body.appendChild(Te), Te.click(), document.body.removeChild(Te);
  }, W = () => {
    ne({ open: !1, selectedImage: null }), ge(0);
  }, H = () => ge((q) => q <= 0 ? 270 : q - 90), $ = () => ge((q) => q >= 270 ? 0 : q + 90), D = Og.useReactToPrint({
    content: () => re.current,
    onAfterPrint: () => {
      se(!1);
    }
  });
  Zt(() => {
    Pe && D();
  }, [Pe]);
  const G = () => {
    se(!0);
  }, Z = (q) => {
    if (!w || w.length === 0) return null;
    const ee = w.find((Te) => q.includes(Te.path));
    return ee && { present: "#a6d7b0", late: "#f4b988" }[ee.markedAs] || null;
  }, le = (q) => {
    const ee = A.find(U, { link: q }), we = (ee == null ? void 0 : ee.type) === "video", Te = (ee == null ? void 0 : ee.type) === "audio";
    let Re;
    we || Te ? Re = {
      type: "video",
      width: 1280,
      height: 720,
      autoPlay: !0,
      sources: [
        {
          src: q,
          type: (ee == null ? void 0 : ee.mime) || (Te ? "audio/mp3" : "video/mp4")
        }
      ],
      downloadUrl: q,
      downloadFilename: ee != null && ee.name && (ee == null ? void 0 : ee.name) !== "archivo" ? ee.name : Te ? "audio.mp3" : "video.mp4"
    } : Re = {
      src: q,
      downloadFilename: ee && ee.name !== "archivo" ? ee.name : "imagen.png"
    };
    const Be = A.filter(U, (Fe) => Fe.type === "image" && Fe.link !== q);
    return [
      Re,
      ...A.map(Be, (Fe) => ({
        src: Fe.link,
        downloadFilename: Fe.name && Fe.name !== "archivo" ? Fe.name : "imagen.png"
      }))
    ];
  }, Ne = (q) => {
    const ee = Pu(ae), we = A.map(q, (Be, Fe) => {
      const et = Z(ee[Fe] || Be.link), Ze = !d && !(_ && !Be.isLocal);
      return /* @__PURE__ */ oe(
        "div",
        {
          className: `${Sn.attachment} ${y ? Sn.rounded : ""}`,
          style: { width: `${p}rem`, height: `${h}rem` },
          children: [
            Ze && /* @__PURE__ */ P(
              We,
              {
                className: Sn.fixedIcon,
                name: "close",
                onClick: () => ke(Fe)
              }
            ),
            et && /* @__PURE__ */ P("div", { className: Sn.stateIndicator, style: { backgroundColor: et } }),
            Be.type === "image" ? /* @__PURE__ */ P(
              _r,
              {
                className: `${Sn.image} ${y ? Sn.roundedImage : ""}`,
                src: Be.link,
                alt: Be.name || "",
                onClick: () => ne({ selectedImage: Be.link, open: !0 })
              }
            ) : /* @__PURE__ */ oe(
              "button",
              {
                type: "button",
                className: Sn.fileButton,
                onClick: () => $e(Be.link, Be.type, Be.name),
                "aria-label": `Vista previa ${Be.name || "archivo"}`,
                children: [
                  /* @__PURE__ */ P(
                    We,
                    {
                      className: Sn.icon,
                      name: L_[Be.type] || L_.file,
                      color: F_[Be.type] || F_.file,
                      size: g
                    }
                  ),
                  !!Be.name && /* @__PURE__ */ P("div", { className: Sn.fileButtonLabel, title: Be.name, children: Be.name })
                ]
              }
            )
          ]
        },
        Fe + 1
      );
    }), Te = /* @__PURE__ */ oe(
      ft,
      {
        className: `${Sn.attachment} ${y ? Sn.rounded : ""}`,
        icon: !0,
        primary: !0,
        disabled: d,
        onClick: Se,
        style: { width: `${p}rem`, height: `${h}rem` },
        children: [
          /* @__PURE__ */ P(We, { name: m, size: g }),
          /* @__PURE__ */ P(
            "input",
            {
              className: Sn.noShowInput,
              ref: me,
              type: "file",
              accept: $G(F, N),
              multiple: c,
              disabled: d,
              onChange: pe
            }
          )
        ]
      },
      0
    );
    return [(b || d ? !1 : !(!c && !A.isEmpty(q))) && Te, ...we];
  }, de = d && A.isEmpty(U), xe = A.find(U, { link: z.selectedImage }), ue = (xe == null ? void 0 : xe.type) === "video" || (xe == null ? void 0 : xe.type) === "audio";
  return /* @__PURE__ */ oe("div", { className: Sn.attachmentsContainer, style: { height: `${h}rem` }, children: [
    /* @__PURE__ */ P(
      Dx,
      {
        open: z.open,
        plugins: ue ? [nm, w_] : [nm, Bx, Hx, w_],
        close: W,
        slides: le(z.selectedImage),
        zoom: ue ? void 0 : { maxScale: 50, maxZoomPixelRatio: 10 },
        className: `rotated${fe}`,
        controller: { closeOnBackdropClick: !0 },
        render: {
          buttonPrev: () => null,
          buttonNext: () => null
        },
        toolbar: {
          buttons: ue ? ["download", "close"] : [
            /* @__PURE__ */ P("button", { type: "button", className: "yarl__button", onClick: H, children: /* @__PURE__ */ P(We, { name: "undo", size: "large" }) }, "rotate-left"),
            /* @__PURE__ */ P("button", { type: "button", className: "yarl__button", onClick: $, children: /* @__PURE__ */ P(We, { name: "redo", size: "large" }) }, "rotate-right"),
            /* @__PURE__ */ P("button", { type: "button", className: "yarl__button", onClick: G, children: /* @__PURE__ */ P(We, { name: "print", size: "large" }) }, "print"),
            "zoom",
            "download",
            "fullscreen",
            "close"
          ]
        }
      }
    ),
    de ? /* @__PURE__ */ P("div", { className: `${Sn.attachment} ${y ? Sn.rounded : ""}`, style: { width: `${p}rem`, height: `${h}rem` }, children: /* @__PURE__ */ P(We, { className: Sn.icon, name: x, size: g, color: "grey" }) }) : Ne(U),
    /* @__PURE__ */ P("div", { ref: re, className: Sn.printImageWrapper, children: !ue && z.selectedImage && /* @__PURE__ */ P(
      "img",
      {
        src: z.selectedImage,
        alt: "Imagen para imprimir",
        className: Sn.printImageOnly,
        style: { transform: `rotate(${fe}deg)` }
      }
    ) }),
    /* @__PURE__ */ P(
      iC,
      {
        hiddenButon: !0,
        printAction: Pe,
        printActionRetry: () => {
          se(!1);
        },
        printHeader: {
          company: I,
          user: O,
          title: "Impresión de Imagen"
        },
        clientName: S,
        clientPhone: C,
        platform: T,
        tags: R,
        group: B,
        renderData: re,
        hideClientInfo: !1
      }
    )
  ] });
};
BG.propTypes = {
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
const jG = "_text_vzm0k_1", WG = {
  text: jG
}, Dl = ({ children: e = "", className: t, as: n, href: r, disabled: o = !1, style: s, withMarkdown: u = !1, onClick: c = () => {
} }) => {
  const d = (h) => {
    const m = /(\*[^*]+\*|_[^_]+_|~[^~]+~|`[^`]+`)/g;
    return h.split(m).map((y, b) => y.startsWith("*") && y.endsWith("*") ? /* @__PURE__ */ P("strong", { style: { fontWeight: "bolder" }, children: y.slice(1, -1) }, b) : y.startsWith("_") && y.endsWith("_") ? /* @__PURE__ */ P("em", { style: { fontStyle: "italic" }, children: y.slice(1, -1) }, b) : y.startsWith("~") && y.endsWith("~") ? /* @__PURE__ */ P("del", { style: { textDecoration: "line-through" }, children: y.slice(1, -1) }, b) : /* @__PURE__ */ P("span", { children: y }, b));
  }, p = () => typeof e == "string" && u ? d(e) : e;
  return /* @__PURE__ */ P(
    qn,
    {
      as: n || "p",
      className: `${WG.text} ${t || ""}`.trim(),
      href: r,
      disabled: o,
      style: s,
      onClick: c,
      children: p()
    }
  );
};
Dl.propTypes = {
  children: l.oneOfType([l.node, l.string]),
  className: l.oneOfType([l.string, l.array]),
  as: l.string,
  href: l.string,
  disabled: l.bool,
  withMarkdown: l.bool,
  onClick: l.func,
  style: l.oneOfType([l.string, l.object])
};
function om() {
  return om = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, om.apply(null, arguments);
}
function UG(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
var zG = jI, HG = function(t) {
  var n = Q.useRef(t);
  return zG(function() {
    n.current = t;
  }), n;
}, $_ = function(t, n) {
  if (typeof t == "function") {
    t(n);
    return;
  }
  t.current = n;
}, YG = function(t, n) {
  var r = Q.useRef();
  return Q.useCallback(function(o) {
    t.current = o, r.current && $_(r.current, null), r.current = n, n && $_(n, o);
  }, [n]);
}, B_ = {
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
}, qG = function(t) {
  Object.keys(B_).forEach(function(n) {
    t.style.setProperty(n, B_[n], "important");
  });
}, j_ = qG, zn = null, W_ = function(t, n) {
  var r = t.scrollHeight;
  return n.sizingStyle.boxSizing === "border-box" ? r + n.borderSize : r - n.paddingSize;
};
function VG(e, t, n, r) {
  n === void 0 && (n = 1), r === void 0 && (r = 1 / 0), zn || (zn = document.createElement("textarea"), zn.setAttribute("tabindex", "-1"), zn.setAttribute("aria-hidden", "true"), j_(zn)), zn.parentNode === null && document.body.appendChild(zn);
  var o = e.paddingSize, s = e.borderSize, u = e.sizingStyle, c = u.boxSizing;
  Object.keys(u).forEach(function(g) {
    var y = g;
    zn.style[y] = u[y];
  }), j_(zn), zn.value = t;
  var d = W_(zn, e);
  zn.value = t, d = W_(zn, e), zn.value = "x";
  var p = zn.scrollHeight - o, h = p * n;
  c === "border-box" && (h = h + o + s), d = Math.max(h, d);
  var m = p * r;
  return c === "border-box" && (m = m + o + s), d = Math.min(m, d), [d, p];
}
var U_ = function() {
}, GG = function(t, n) {
  return t.reduce(function(r, o) {
    return r[o] = n[o], r;
  }, {});
}, KG = [
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
], ZG = !!document.documentElement.currentStyle, XG = function(t) {
  var n = window.getComputedStyle(t);
  if (n === null)
    return null;
  var r = GG(KG, n), o = r.boxSizing;
  if (o === "")
    return null;
  ZG && o === "border-box" && (r.width = parseFloat(r.width) + parseFloat(r.borderRightWidth) + parseFloat(r.borderLeftWidth) + parseFloat(r.paddingRight) + parseFloat(r.paddingLeft) + "px");
  var s = parseFloat(r.paddingBottom) + parseFloat(r.paddingTop), u = parseFloat(r.borderBottomWidth) + parseFloat(r.borderTopWidth);
  return {
    sizingStyle: r,
    paddingSize: s,
    borderSize: u
  };
}, QG = XG;
function Tg(e, t, n) {
  var r = HG(n);
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
var JG = function(t, n) {
  Tg(document.body, "reset", function(r) {
    t.current.form === r.target && n(r);
  });
}, eK = function(t) {
  Tg(window, "resize", t);
}, tK = function(t) {
  Tg(document.fonts, "loadingdone", t);
}, nK = ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"], rK = function(t, n) {
  var r = t.cacheMeasurements, o = t.maxRows, s = t.minRows, u = t.onChange, c = u === void 0 ? U_ : u, d = t.onHeightChange, p = d === void 0 ? U_ : d, h = UG(t, nK), m = h.value !== void 0, g = L.useRef(null), y = YG(g, n), b = L.useRef(0), _ = L.useRef(), w = function() {
    var x = g.current, I = r && _.current ? _.current : QG(x);
    if (I) {
      _.current = I;
      var O = VG(I, x.value || x.placeholder || "x", s, o), S = O[0], C = O[1];
      b.current !== S && (b.current = S, x.style.setProperty("height", S + "px", "important"), p(S, {
        rowHeight: C
      }));
    }
  }, N = function(x) {
    m || w(), c(x);
  };
  return L.useLayoutEffect(w), JG(g, function() {
    if (!m) {
      var F = g.current.value;
      requestAnimationFrame(function() {
        var x = g.current;
        x && F !== x.value && w();
      });
    }
  }), eK(w), tK(w), /* @__PURE__ */ L.createElement("textarea", om({}, h, {
    onChange: N,
    ref: y
  }));
}, aK = /* @__PURE__ */ L.forwardRef(rK);
const oK = "_wrapper_1pssv_1", iK = "_label_1pssv_11", sK = "_required_1pssv_23", lK = "_inputWrapper_1pssv_33", cK = "_textarea_1pssv_43", uK = "_iconsContainer_1pssv_73", dK = "_icon_1pssv_73", fK = "_labelActions_1pssv_111", pK = "_labelIcon_1pssv_123", hK = "_error_1pssv_147", mK = "_errorLabel_1pssv_157", gK = "_labelRow_1pssv_169", vK = "_charCount_1pssv_181", vr = {
  wrapper: oK,
  label: iK,
  required: sK,
  inputWrapper: lK,
  textarea: cK,
  iconsContainer: uK,
  icon: dK,
  labelActions: fK,
  labelIcon: pK,
  error: hK,
  errorLabel: mK,
  labelRow: gK,
  charCount: vK
}, yK = ({
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
  const [b, _] = st(!1), w = A.defaultTo(e, ""), N = !!(u && !b && o && w), F = N ? String(w).replace(/[^\n]/g, "•") : w, x = u && !b && !N ? { WebkitTextSecurity: "disc" } : void 0;
  return /* @__PURE__ */ oe("div", { className: vr.wrapper, children: [
    n && /* @__PURE__ */ oe("div", { className: vr.labelRow, children: [
      /* @__PURE__ */ oe("span", { className: vr.label, children: [
        /* @__PURE__ */ P("span", { children: n }),
        p ? /* @__PURE__ */ P("span", { className: vr.required, children: " *" }) : null,
        u && /* @__PURE__ */ P(
          We,
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
      /* @__PURE__ */ P("div", { className: vr.labelActions, children: m && g && /* @__PURE__ */ oe("span", { className: vr.charCount, children: [
        A.size(e),
        "/",
        g
      ] }) })
    ] }),
    /* @__PURE__ */ oe("div", { className: vr.inputWrapper, children: [
      /* @__PURE__ */ P(
        aK,
        {
          minRows: c,
          maxRows: d,
          name: t,
          className: A.join(A.compact([vr.textarea, s && vr.error, y]), " "),
          value: F,
          onChange: r,
          disabled: o,
          placeholder: h,
          style: x
        }
      ),
      /* @__PURE__ */ P("div", { className: vr.iconsContainer, children: e && !o && /* @__PURE__ */ P(
        We,
        {
          name: "close",
          className: vr.icon,
          onClick: () => r({ target: { name: t, value: "" } })
        }
      ) })
    ] }),
    s && /* @__PURE__ */ P(lr, { basic: !0, color: "red", className: vr.errorLabel, children: s })
  ] });
};
yK.propTypes = {
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
const bK = "_input_wfvqa_1", _K = "_clearIcon_wfvqa_9", wK = "_clearIconFocused_wfvqa_21", EK = "_clearIconLast_wfvqa_33", xK = "_clearIconLastFocused_wfvqa_47", CK = "_clearRoundedIconLast_wfvqa_61", OK = "_clearRoundedIconLastFocused_wfvqa_79", SK = "_labelRoot_wfvqa_119", TK = "_labelRequired_wfvqa_131", PK = "_infoIcon_wfvqa_139", yr = {
  input: bK,
  clearIcon: _K,
  clearIconFocused: wK,
  clearIconLast: EK,
  clearIconLastFocused: xK,
  clearRoundedIconLast: CK,
  clearRoundedIconLastFocused: OK,
  labelRoot: SK,
  labelRequired: TK,
  infoIcon: PK
}, kK = hd((e, t) => {
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
    onKeyPress: N,
    onClear: F,
    dropdown: x,
    dropdownPosition: I = "left",
    required: O = !1,
    fluid: S = !0,
    type: C = "text",
    hideClear: T = !1,
    hideDropdown: R = !1,
    customBorderRadius: B
  } = e, U = B || (_ ? "1rem" : "0.25rem"), te = B || "1rem", z = Ln(null), [ne, fe] = st(!1), [ge, Pe] = st(n ? "password" : "text"), [se, me] = st("eye slash");
  Zt(() => {
    b ? ((t || z).current.style.setProperty("background-color", "hsl(0, 0%, 90%)", "important"), (t || z).current.style.setProperty("color", "hsl(0, 0%, 0%)", "important")) : ((t || z).current.style.removeProperty("background-color"), (t || z).current.style.removeProperty("cursor")), _ ? A.isEmpty(o) || b ? ((t || z).current.style.removeProperty("border-top-left-radius"), (t || z).current.style.removeProperty("border-bottom-left-radius"), (t || z).current.style.removeProperty("border-top-right-radius"), (t || z).current.style.removeProperty("border-bottom-right-radius"), (t || z).current.style.removeProperty("border-right"), n ? ((t || z).current.style.setProperty("border-top-left-radius", te, "important"), (t || z).current.style.setProperty("border-bottom-left-radius", te, "important")) : ((t || z).current.style.setProperty("border-radius", te, "important"), (t || z).current.style.setProperty(
      "border-right",
      `1px solid ${ne ? "var(--inputFocus)" : "var(--inputShader)"}`,
      "important"
    ))) : T && !n ? ((t || z).current.style.setProperty("border-radius", te, "important"), (t || z).current.style.setProperty(
      "border-right",
      `1px solid ${ne ? "var(--inputFocus)" : "var(--inputShader)"}`,
      "important"
    )) : ((t || z).current.style.removeProperty("border-radius"), (t || z).current.style.setProperty("border-top-left-radius", te, "important"), (t || z).current.style.setProperty("border-bottom-left-radius", te, "important"), (t || z).current.style.setProperty("border-top-right-radius", "0", "important"), (t || z).current.style.setProperty("border-bottom-right-radius", "0", "important"), (t || z).current.style.setProperty("border-right", "0", "important")) : A.isEmpty(o) || b ? ((t || z).current.style.setProperty("border-radius", U, "important"), n ? ((t || z).current.style.setProperty("border-right", "0", "important"), (t || z).current.style.setProperty("border-top-right-radius", "0", "important"), (t || z).current.style.setProperty("border-bottom-right-radius", "0", "important")) : (t || z).current.style.setProperty(
      "border-right",
      `1px solid ${ne ? "var(--inputFocus)" : "var(--inputShader)"}`,
      "important"
    )) : T && !n ? ((t || z).current.style.setProperty("border-radius", U, "important"), (t || z).current.style.setProperty(
      "border-right",
      `1px solid ${ne ? "var(--inputFocus)" : "var(--inputShader)"}`,
      "important"
    ), (t || z).current.style.setProperty("border-top-right-radius", U, "important"), (t || z).current.style.setProperty("border-bottom-right-radius", U, "important")) : ((t || z).current.style.setProperty("border-right", "0", "important"), (t || z).current.style.setProperty("border-top-right-radius", "0", "important"), (t || z).current.style.setProperty("border-bottom-right-radius", "0", "important")), A.isEmpty(x) || (I === "left" ? ((t || z).current.style.setProperty("border-top-left-radius", "0", "important"), (t || z).current.style.setProperty("border-bottom-left-radius", "0", "important"), (t || z).current.style.setProperty("border-left-color", "transparent", "important")) : I === "right" && ((t || z).current.style.setProperty("border-top-right-radius", "0", "important"), (t || z).current.style.setProperty("border-bottom-right-radius", "0", "important"), (t || z).current.style.setProperty("border-right-color", "transparent", "important")));
  }, [o, ne, x, n, b, _, T, B, U, te, t, z]);
  const J = (H) => {
    if (!A.isEmpty(o)) {
      const $ = { name: r, value: o.trim() };
      w({ ...H, target: $ }, $);
    }
  }, re = (H) => {
    const { key: $ } = H;
    $ === "Enter" && (H.preventDefault(), J(H), N && N(H));
  }, ae = () => {
    const H = ge === "password", $ = H ? "text" : "password", D = H ? "eye" : "eye slash";
    Pe($), me(D);
  }, ye = (H) => {
    const $ = { name: r, value: "" };
    e.fieldIndex !== void 0 && ($.fieldIndex = e.fieldIndex), e.id !== void 0 && ($.id = e.id), w({ ...H, target: $ }, $), F && F();
  }, Se = () => {
    fe(!0);
  }, Ce = (H) => {
    J(H), fe(!1);
  }, pe = () => n ? ne ? yr.clearIconFocused : yr.clearIcon : _ ? ne ? yr.clearRoundedIconLastFocused : yr.clearRoundedIconLast : ne ? yr.clearIconLastFocused : yr.clearIconLast, ke = () => {
    if (!c) return;
    if (Q.isValidElement(c)) return c;
    const H = d || p;
    return /* @__PURE__ */ oe("span", { className: `${yr.labelRoot} ${g}`.trim(), children: [
      /* @__PURE__ */ P("span", { children: c }),
      O ? /* @__PURE__ */ P("span", { className: yr.labelRequired, children: " *" }) : null,
      H ? /* @__PURE__ */ P(
        Er,
        {
          wide: h ? "very" : !0,
          hoverable: h,
          position: m,
          content: H,
          trigger: /* @__PURE__ */ P(We, { name: "info circle", className: yr.infoIcon })
        }
      ) : null
    ] });
  }, $e = A.omit(e, [
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
  ]), W = n || !A.isEmpty(u);
  return /* @__PURE__ */ oe(
    An.Input,
    {
      ...$e,
      className: `${yr.input} ${b ? yr.disabled : ""} ${s || ""}`,
      disabled: b,
      onChange: w,
      name: r,
      label: ke(),
      placeholder: y === "" ? "" : A.isEmpty(y) ? typeof c == "string" ? c : "" : y,
      value: o,
      type: n ? ge : C,
      ...W ? { iconPosition: "left" } : {},
      autoComplete: "off",
      fluid: S,
      onFocus: Se,
      onBlur: Ce,
      onKeyPress: re,
      action: !0,
      children: [
        I === "left" && !A.isEmpty(x) && !R && /* @__PURE__ */ P(jr, { labeled: !0, ...x }),
        W && /* @__PURE__ */ P(We, { name: n ? "lock" : u }),
        /* @__PURE__ */ P("input", { ref: t || z, required: O }),
        I === "right" ? /* @__PURE__ */ oe(xa, { children: [
          !A.isEmpty(o) && !b && !T && /* @__PURE__ */ P(ft, { className: pe(), icon: "cancel", onClick: ye, tabIndex: -1 }),
          !R && /* @__PURE__ */ P(jr, { labeled: !0, ...x })
        ] }) : !T && !A.isEmpty(o) && !b && /* @__PURE__ */ P(ft, { className: pe(), icon: "cancel", onClick: ye, tabIndex: -1 }),
        n && /* @__PURE__ */ P(
          ft,
          {
            className: _ ? yr.clearRoundedIconLast : yr.clearIconLast,
            icon: se,
            onClick: ae,
            tabIndex: -1
          }
        )
      ]
    }
  );
});
kK.propTypes = {
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
const z_ = 49, NK = "_activeItem_1ays7_1", IK = "_item_1ays7_15", AK = "_itemMultiple_1ays7_39", RK = "_itemSelect_1ays7_49", MK = "_itemSelectMultiple_1ays7_73", DK = "_menu_1ays7_85", LK = "_titleMenuItem_1ays7_99", FK = "_titleMenu_1ays7_99", $K = "_activeMenuItem_1ays7_133", BK = "_menuItem_1ays7_163", jK = "_titleText_1ays7_183", WK = "_text_1ays7_197", UK = "_subText_1ays7_211", zK = "_icon_1ays7_225", HK = "_subIcon_1ays7_235", pn = {
  activeItem: NK,
  item: IK,
  itemMultiple: AK,
  itemSelect: RK,
  itemSelectMultiple: MK,
  menu: DK,
  titleMenuItem: LK,
  titleMenu: FK,
  activeMenuItem: $K,
  menuItem: BK,
  titleText: jK,
  text: WK,
  subText: UK,
  icon: zK,
  subIcon: HK
}, zu = ({
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
  const [p, h] = st(u), m = A.isEmpty(s) ? r : `${r}${s[0].path}`, g = (F, x) => {
    c ? d(F, x) : d && d();
  }, y = () => {
    A.isEmpty(s) ? g(m, o) : h((F) => !F);
  }, b = ({ placement: F, popper: x, reference: I }) => {
    if (A.isEmpty(s))
      return [];
    if (F === "right") {
      const O = x.height - z_, S = O / 2, C = I.y + O;
      let T = S - (e ? 0 : z_);
      return typeof window < "u" && C > window.innerHeight && (T -= window.innerHeight - C), [T, 0];
    }
    return [];
  }, _ = () => {
    if (A.isEmpty(s)) return null;
    const F = typeof window < "u" ? window.location.pathname : "";
    return A.map(s, (I) => {
      const O = `${r}${I.path}`, S = F === O;
      return /* @__PURE__ */ oe(
        kn.Item,
        {
          className: S ? pn.activeMenuItem : pn.menuItem,
          onClick: () => g(O, o),
          children: [
            !A.isEmpty(I.icon) && /* @__PURE__ */ P(We, { className: pn.subIcon, name: I.icon }),
            /* @__PURE__ */ P("span", { className: pn.subText, children: I.name })
          ]
        },
        I.id
      );
    });
  }, w = () => e ? p ? /* @__PURE__ */ oe("div", { className: pn.itemSelectMultiple, children: [
    /* @__PURE__ */ P(kn.Item, { className: pn.itemMultiple, onClick: y, children: /* @__PURE__ */ oe("div", { className: pn.activeItem, children: [
      !A.isEmpty(n) && /* @__PURE__ */ P(We, { className: pn.icon, name: n }),
      /* @__PURE__ */ P(Dl, { className: pn.text, children: t })
    ] }) }),
    _()
  ] }) : /* @__PURE__ */ P(kn.Item, { className: u ? pn.itemSelect : pn.item, onClick: y, children: /* @__PURE__ */ oe("div", { className: pn.activeItem, children: [
    !A.isEmpty(n) && /* @__PURE__ */ P(We, { className: pn.icon, name: n }),
    /* @__PURE__ */ P(Dl, { className: pn.text, children: t })
  ] }) }) : /* @__PURE__ */ P(
    kn.Item,
    {
      className: u ? pn.itemSelect : pn.item,
      onClick: () => g(m, o),
      children: /* @__PURE__ */ P("div", { className: pn.activeItem, children: !A.isEmpty(n) && /* @__PURE__ */ P(We, { className: pn.icon, name: n }) })
    }
  ), N = () => {
    A.isEmpty(s) && g(r, o);
  };
  return /* @__PURE__ */ P(
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
      trigger: w(),
      children: /* @__PURE__ */ P(Er.Content, { children: /* @__PURE__ */ oe(kn, { vertical: !0, children: [
        !e && /* @__PURE__ */ P(kn.Item, { className: A.isEmpty(s) ? pn.titleMenu : pn.titleMenuItem, onClick: N, children: /* @__PURE__ */ P(Dl, { className: pn.titleText, children: t }) }),
        _()
      ] }) })
    }
  );
};
zu.propTypes = {
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
const YK = "_sideBar_wxxzs_1", qK = "_collapsedSidebar_wxxzs_13", VK = "_menuItems_wxxzs_25", GK = "_mobileItems_wxxzs_37", KK = "_divider_wxxzs_49", El = {
  sideBar: YK,
  collapsedSidebar: qK,
  menuItems: VK,
  mobileItems: GK,
  divider: KK
}, ZK = ({
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
    if (A.isEmpty(n)) return null;
    const m = c || (typeof window < "u" ? window.location.pathname : "");
    return A.map(n, (y) => {
      if (y.type === "divider") return /* @__PURE__ */ P("div", { className: El.divider }, y.id);
      let b = m === y.path;
      if (!A.isEmpty(y.subMenu)) {
        const _ = A.map(y.subMenu, (w) => `${y.path}${w.path}`);
        b = A.includes(_, m);
      }
      return /* @__PURE__ */ P(
        zu,
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
  return /* @__PURE__ */ oe(
    ei,
    {
      className: t ? El.sideBar : El.collapsedSidebar,
      as: kn,
      direction: "left",
      animation: r ? "overlay" : "push",
      visible: o,
      vertical: !0,
      icon: !0,
      width: "wide",
      children: [
        d && s && /* @__PURE__ */ P(zu, { isExtended: r ? !0 : t, allowNavigation: !1, path: null, name: s }),
        /* @__PURE__ */ P("div", { className: r ? El.mobileItems : El.menuItems, children: h() }),
        /* @__PURE__ */ P(
          zu,
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
ZK.propTypes = {
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
const XK = "_fullScreen_1chi0_3", QK = "_large_1chi0_11", JK = "_small_1chi0_19", eZ = "_tiny_1chi0_27", tZ = "_mini_1chi0_35", nZ = "_modalHeader_1chi0_43", rZ = "_tabsContainer_1chi0_63", aZ = "_modalContent_1chi0_73", oZ = "_modalContentNoFlex_1chi0_91", iZ = "_modalFooter_1chi0_131", sZ = "_iconHeader_1chi0_145", lZ = "_topEditButton_1chi0_153", cZ = "_topWatchButton_1chi0_171", uZ = "_topPrintButton_1chi0_189", dZ = "_positiveButton_1chi0_221", fZ = "_negativeButton_1chi0_251", pZ = "_disabled_1chi0_281", hZ = "_rowButton_1chi0_295", mZ = "_modal_1chi0_43", gZ = "_modalHeaderTitle_1chi0_401", vZ = "_modalCloseInside_1chi0_595", Tn = {
  fullScreen: XK,
  large: QK,
  small: JK,
  tiny: eZ,
  mini: tZ,
  modalHeader: nZ,
  tabsContainer: rZ,
  modalContent: aZ,
  modalContentNoFlex: oZ,
  modalFooter: iZ,
  iconHeader: sZ,
  topEditButton: lZ,
  topWatchButton: cZ,
  topPrintButton: uZ,
  positiveButton: dZ,
  negativeButton: fZ,
  disabled: pZ,
  rowButton: hZ,
  modal: mZ,
  modalHeaderTitle: gZ,
  modalCloseInside: vZ
}, yZ = "_divHeaderNav_7mcz0_1", bZ = "_navButton_7mcz0_23", _Z = "_errorsButon_7mcz0_49", wZ = "_volatileError_7mcz0_93", EZ = "_buttonContainer_7mcz0_181", xZ = "_redButton_7mcz0_195", CZ = "_active_7mcz0_233", OZ = "_moreWrapper_7mcz0_263", SZ = "_moreButton_7mcz0_275", TZ = "_moreDropdown_7mcz0_293", Ar = {
  divHeaderNav: yZ,
  navButton: bZ,
  errorsButon: _Z,
  volatileError: wZ,
  buttonContainer: EZ,
  redButton: xZ,
  active: CZ,
  moreWrapper: OZ,
  moreButton: SZ,
  moreDropdown: TZ
}, sC = ({ handleStateHeader: e, stateHeader: t, buttons: n }) => {
  const [r, o] = st([]), [s, u] = st([]), [c, d] = st(!1), p = Ln(null), h = (y, b = !1) => {
    if (!p.current) return 0;
    const _ = document.createElement("button");
    _.className = b ? Ar.moreButton : Ar.navButton, _.style.cssText = "visibility: hidden; position: absolute; font-size: 16px; padding: 12px 20px; white-space: nowrap;", _.innerHTML = y, p.current.appendChild(_);
    const w = _.offsetWidth;
    return p.current.removeChild(_), w;
  }, m = () => {
    if (!p.current) return;
    const y = p.current.clientWidth;
    if (y === 0) return;
    const b = h("...");
    let _ = 0;
    const w = [], N = [], F = A.orderBy(n, ["order"], ["asc"]), x = F.length;
    A.forEach(F, (I, O) => {
      const S = `<i class="icon ${I.icon}"></i> ${I.label} ${I.count ? `(${I.count})` : ""}`, C = h(S), R = O === x - 1 ? 0 : b;
      _ + C + R <= y - 10 ? (_ += C, w.push(I)) : N.push(I);
    }), o(w), u(N);
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
  const g = (y, b = !1) => {
    const _ = A.filter([
      Ar.navButton,
      t === y.state && Ar.active,
      y.errors && Ar.errorsButon,
      y.color === "red" && Ar.redButton
    ]).join(" ");
    return /* @__PURE__ */ oe("div", { className: Ar.buttonContainer, children: [
      /* @__PURE__ */ oe(
        ft,
        {
          disabled: !!y.disabled,
          className: _,
          onClick: () => {
            y.disabled || (y.onClick ? y.onClick() : e(y.state), b && d(!1));
          },
          children: [
            /* @__PURE__ */ P(We, { name: y.icon }),
            y.label,
            " ",
            y.count !== void 0 && `(${y.count})`
          ]
        }
      ),
      !A.isEmpty(y.error) && /* @__PURE__ */ P("div", { className: Ar.volatileError, children: "Campos Requeridos" })
    ] }, y.key);
  };
  return /* @__PURE__ */ oe("div", { className: Ar.divHeaderNav, ref: p, children: [
    A.map(r, (y) => g(y)),
    !A.isEmpty(s) && /* @__PURE__ */ oe("div", { className: Ar.moreWrapper, children: [
      /* @__PURE__ */ P(
        ft,
        {
          className: Ar.moreButton,
          onClick: () => d(!c),
          children: "..."
        }
      ),
      c && /* @__PURE__ */ P("div", { className: Ar.moreDropdown, children: A.map(s, (y) => g(y, !0)) })
    ] })
  ] });
};
sC.propTypes = {
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
const PZ = ({
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
  saveDisabled: N = !1,
  className: F = "",
  ignoreContent: x = !1,
  hideEditButton: I = !1,
  tabs: O = [],
  activeTab: S = "",
  onTabChange: C = () => {
  },
  customHeight: T = "",
  closeOnDimmerClick: R = !0,
  contentStyle: B = {},
  closeInside: U = !1,
  closeIconInside: te = !1,
  closeIcon: z = !0
}) => {
  const [ne, fe] = st("list"), ge = U || te;
  Zt(() => {
    Pe();
  }, [n]);
  const Pe = () => {
    let re = t;
    if (A.isEmpty(t))
      switch (n) {
        case "Add":
          re = "plus";
          break;
        case "Edit":
          re = "edit";
          break;
        case "Watch":
          re = "eye";
          break;
        default:
          re = "list";
          break;
      }
    fe(re);
  }, se = () => {
    u();
  }, me = () => {
    c();
  }, J = h ? {
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
  return /* @__PURE__ */ oe(
    cn,
    {
      className: `${A.isEmpty(p) ? "" : Tn[p]} ${F} ${Tn.modal} ${ge ? Tn.modalCloseInside : ""}`,
      style: J,
      open: !0,
      closeIcon: z,
      closeOnDimmerClick: R,
      onClose: se,
      children: [
        /* @__PURE__ */ oe(cn.Header, { className: Tn.modalHeader, children: [
          /* @__PURE__ */ oe("div", { className: Tn.modalHeaderTitle, children: [
            /* @__PURE__ */ P(We, { name: ne, className: Tn.iconHeader }),
            o,
            s && ` - Id: ${s}`
          ] }),
          !A.isEmpty(b) && b,
          /* @__PURE__ */ oe("div", { className: Tn.rowButton, children: [
            n === "Watch" && !I && /* @__PURE__ */ P(
              ft,
              {
                onClick: () => {
                  r("Edit");
                },
                className: Tn.topEditButton,
                children: /* @__PURE__ */ P(We, { name: "edit" })
              }
            ),
            n === "Edit" && /* @__PURE__ */ P(
              ft,
              {
                onClick: () => {
                  r("Watch");
                },
                className: Tn.topWatchButton,
                children: /* @__PURE__ */ P(We, { name: "eye" })
              }
            ),
            w && /* @__PURE__ */ P(
              ft,
              {
                onClick: () => {
                  typeof w == "function" && w();
                },
                className: Tn.topPrintButton,
                title: "Imprimir",
                children: /* @__PURE__ */ P(We, { name: "print" })
              }
            )
          ] })
        ] }),
        !A.isEmpty(O) && /* @__PURE__ */ P("div", { className: Tn.tabsContainer, children: /* @__PURE__ */ P(sC, { buttons: O, stateHeader: S, handleStateHeader: C }) }),
        /* @__PURE__ */ P(
          cn.Content,
          {
            className: x ? Tn.modalContentNoFlex : Tn.modalContent,
            style: h ? { minHeight: "calc(95vh - 8rem)", ...B } : T ? { height: T, minHeight: T, ...B } : { ...B },
            scrolling: !0,
            children: e
          }
        ),
        /* @__PURE__ */ oe(cn.Actions, { className: Tn.modalFooter, children: [
          !A.isEmpty(_) && _,
          n === "Watch" ? /* @__PURE__ */ P(ft, { className: Tn.negativeButton, onClick: se, children: "Cerrar" }) : /* @__PURE__ */ P(ft, { className: Tn.negativeButton, onClick: se, children: y }),
          n !== "Watch" && c && /* @__PURE__ */ P(
            ft,
            {
              className: `${Tn.positiveButton} ${N ? Tn.disabled : ""}`,
              onClick: me,
              disabled: N,
              children: n === "Add" ? g : m
            }
          )
        ] })
      ]
    }
  );
};
PZ.propTypes = {
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
const kZ = "_modal_3j9dd_1", NZ = "_header_3j9dd_11", IZ = "_actions_3j9dd_25", AZ = "_leftActions_3j9dd_39", RZ = "_rightActions_3j9dd_51", MZ = "_positiveButton_3j9dd_63", DZ = "_negativeButton_3j9dd_91", LZ = "_content_3j9dd_121", FZ = "_focus_3j9dd_129", $Z = "_contactHeader_3j9dd_139", BZ = "_contactPositiveButton_3j9dd_149", jZ = "_centerModal_3j9dd_169", Hn = {
  modal: kZ,
  header: NZ,
  actions: IZ,
  leftActions: AZ,
  rightActions: RZ,
  positiveButton: MZ,
  negativeButton: DZ,
  content: LZ,
  focus: FZ,
  contactHeader: $Z,
  contactPositiveButton: BZ,
  centerModal: jZ
}, WZ = ({
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
}) => /* @__PURE__ */ oe(
  cn,
  {
    open: e,
    size: "tiny",
    closeOnDimmerClick: !1,
    dimmer: "blurring",
    className: `${Hn.modal} ${g} ${y ? Hn.contact : ""} ${b ? Hn.centerModal : ""}`,
    style: m,
    children: [
      /* @__PURE__ */ oe(
        cn.Header,
        {
          className: `${Hn.header} ${y ? Hn.contactHeader : ""}`,
          style: _ ? { "--custom-header-color": _ } : {},
          children: [
            !A.isEmpty(p) && /* @__PURE__ */ P(We, { name: p }),
            ` ${r}`
          ]
        }
      ),
      /* @__PURE__ */ P(cn.Content, { className: Hn.contentContainer, children: /* @__PURE__ */ P(Dl, { className: Hn.content, children: n || /* @__PURE__ */ oe(xa, { children: [
        `¿${t}`,
        u ? /* @__PURE__ */ oe(xa, { children: [
          /* @__PURE__ */ P("span", { className: Hn.focus, children: u }),
          "?"
        ] }) : "?"
      ] }) }) }),
      /* @__PURE__ */ oe(cn.Actions, { className: Hn.actions, children: [
        /* @__PURE__ */ P("div", { className: Hn.leftActions, children: h }),
        /* @__PURE__ */ oe("div", { className: Hn.rightActions, children: [
          /* @__PURE__ */ P(ft, { className: `${Hn.negativeButton} ${y ? Hn.contactNegativeButton : ""}`, onClick: d, children: s }),
          !w && /* @__PURE__ */ P(ft, { className: `${Hn.positiveButton} ${y ? Hn.contactPositiveButton : ""}`, onClick: c, children: o })
        ] })
      ] })
    ]
  }
);
WZ.propTypes = {
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
const UZ = "_modal_s72ln_1", zZ = "_content_s72ln_13", HZ = "_messageBody_s72ln_33", YZ = "_actions_s72ln_73", qZ = "_button_s72ln_81", xl = {
  modal: UZ,
  content: zZ,
  messageBody: HZ,
  actions: YZ,
  button: qZ
}, VZ = (e) => {
  if (e == null || e === "") return "";
  if (A.isString(e)) return e;
  if (e instanceof Error)
    return e.message || String(e);
  if (typeof e == "object") {
    const t = A.get(e, "response.data.message");
    if (A.isString(t) && t) return t;
    const n = A.get(e, "message");
    if (A.isString(n) && n) return n;
    try {
      return JSON.stringify(e, null, 2);
    } catch {
      return String(e);
    }
  }
  return String(e);
}, GZ = ({ text: e = "", isVisible: t = !1, isError: n = !1, onDismiss: r }) => {
  const o = VZ(e);
  return /* @__PURE__ */ oe(cn, { open: t, closeOnDimmerClick: !1, className: xl.modal, size: "small", children: [
    /* @__PURE__ */ oe(cn.Content, { className: xl.content, children: [
      /* @__PURE__ */ P(We, { name: n ? "warning sign" : "check circle", size: "big", color: n ? "red" : "green" }),
      /* @__PURE__ */ P("pre", { className: xl.messageBody, children: o })
    ] }),
    /* @__PURE__ */ P(cn.Actions, { className: xl.actions, children: /* @__PURE__ */ P(ft, { className: xl.button, onClick: r, color: n ? "red" : "green", fluid: !0, children: "Cerrar" }) })
  ] });
};
GZ.propTypes = {
  text: l.oneOfType([l.string, l.object]),
  isVisible: l.bool,
  isError: l.bool,
  onDismiss: l.func
};
const KZ = "_loading_5559w_1", ZZ = {
  loading: KZ
}, XZ = ({ isFetching: e }) => /* @__PURE__ */ P(Ro, { page: !0, active: e, children: /* @__PURE__ */ P(Jl, { className: ZZ.loading, size: "large", children: "Loading..." }) });
XZ.propTypes = {
  isFetching: l.bool.isRequired
};
export {
  io as Card,
  WZ as ConfirmModal,
  BG as FileManager,
  PZ as IkModal,
  dq as IkTable,
  kK as Input,
  XZ as Loading,
  GZ as NotificationDialog,
  ZK as SideBar,
  zu as SideBarMenu,
  Dl as Text,
  yK as TextArea,
  Tw as Toggle
};
