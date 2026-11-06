var WI = Object.defineProperty;
var zI = (e, t, n) => t in e ? WI(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var hl = (e, t, n) => zI(e, typeof t != "symbol" ? t + "" : t, n);
import { jsxs as oe, jsx as O, Fragment as zr } from "react/jsx-runtime";
import * as L from "react";
import ee, { Children as cm, PureComponent as V_, Component as er, createRef as xr, isValidElement as UI, cloneElement as G_, createElement as gp, createContext as HI, useContext as YI, forwardRef as hc, useState as it, useMemo as qI, useRef as On, useImperativeHandle as VI, useEffect as Xt, useCallback as eh, useLayoutEffect as GI } from "react";
import * as th from "react-dom";
import KI, { createPortal as K_ } from "react-dom";
var ss = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function mc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var nh = { exports: {} }, wu = { exports: {} }, Ht = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ib;
function ZI() {
  if (ib) return Ht;
  ib = 1;
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
  return Ht.AsyncMode = d, Ht.ConcurrentMode = p, Ht.ContextConsumer = c, Ht.ContextProvider = u, Ht.Element = t, Ht.ForwardRef = h, Ht.Fragment = r, Ht.Lazy = b, Ht.Memo = y, Ht.Portal = n, Ht.Profiler = s, Ht.StrictMode = o, Ht.Suspense = m, Ht.isAsyncMode = function(S) {
    return I(S) || E(S) === d;
  }, Ht.isConcurrentMode = I, Ht.isContextConsumer = function(S) {
    return E(S) === c;
  }, Ht.isContextProvider = function(S) {
    return E(S) === u;
  }, Ht.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === t;
  }, Ht.isForwardRef = function(S) {
    return E(S) === h;
  }, Ht.isFragment = function(S) {
    return E(S) === r;
  }, Ht.isLazy = function(S) {
    return E(S) === b;
  }, Ht.isMemo = function(S) {
    return E(S) === y;
  }, Ht.isPortal = function(S) {
    return E(S) === n;
  }, Ht.isProfiler = function(S) {
    return E(S) === s;
  }, Ht.isStrictMode = function(S) {
    return E(S) === o;
  }, Ht.isSuspense = function(S) {
    return E(S) === m;
  }, Ht.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === r || S === p || S === s || S === o || S === m || S === g || typeof S == "object" && S !== null && (S.$$typeof === b || S.$$typeof === y || S.$$typeof === u || S.$$typeof === c || S.$$typeof === h || S.$$typeof === w || S.$$typeof === k || S.$$typeof === F || S.$$typeof === _);
  }, Ht.typeOf = E, Ht;
}
var Yt = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sb;
function XI() {
  return sb || (sb = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, u = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, _ = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, k = e ? Symbol.for("react.responder") : 60118, F = e ? Symbol.for("react.scope") : 60119;
    function E(M) {
      return typeof M == "string" || typeof M == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      M === r || M === p || M === s || M === o || M === m || M === g || typeof M == "object" && M !== null && (M.$$typeof === b || M.$$typeof === y || M.$$typeof === u || M.$$typeof === c || M.$$typeof === h || M.$$typeof === w || M.$$typeof === k || M.$$typeof === F || M.$$typeof === _);
    }
    function I(M) {
      if (typeof M == "object" && M !== null) {
        var V = M.$$typeof;
        switch (V) {
          case t:
            var G = M.type;
            switch (G) {
              case d:
              case p:
              case r:
              case s:
              case o:
              case m:
                return G;
              default:
                var ie = G && G.$$typeof;
                switch (ie) {
                  case c:
                  case h:
                  case b:
                  case y:
                  case u:
                    return ie;
                  default:
                    return V;
                }
            }
          case n:
            return V;
        }
      }
    }
    var S = d, P = p, C = c, T = u, A = t, B = h, U = r, ne = b, K = y, ae = n, he = s, ge = o, Ne = m, ce = !1;
    function me(M) {
      return ce || (ce = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), te(M) || I(M) === d;
    }
    function te(M) {
      return I(M) === p;
    }
    function re(M) {
      return I(M) === c;
    }
    function se(M) {
      return I(M) === u;
    }
    function be(M) {
      return typeof M == "object" && M !== null && M.$$typeof === t;
    }
    function Oe(M) {
      return I(M) === h;
    }
    function Ee(M) {
      return I(M) === r;
    }
    function fe(M) {
      return I(M) === b;
    }
    function Te(M) {
      return I(M) === y;
    }
    function De(M) {
      return I(M) === n;
    }
    function W(M) {
      return I(M) === s;
    }
    function z(M) {
      return I(M) === o;
    }
    function $(M) {
      return I(M) === m;
    }
    Yt.AsyncMode = S, Yt.ConcurrentMode = P, Yt.ContextConsumer = C, Yt.ContextProvider = T, Yt.Element = A, Yt.ForwardRef = B, Yt.Fragment = U, Yt.Lazy = ne, Yt.Memo = K, Yt.Portal = ae, Yt.Profiler = he, Yt.StrictMode = ge, Yt.Suspense = Ne, Yt.isAsyncMode = me, Yt.isConcurrentMode = te, Yt.isContextConsumer = re, Yt.isContextProvider = se, Yt.isElement = be, Yt.isForwardRef = Oe, Yt.isFragment = Ee, Yt.isLazy = fe, Yt.isMemo = Te, Yt.isPortal = De, Yt.isProfiler = W, Yt.isStrictMode = z, Yt.isSuspense = $, Yt.isValidElementType = E, Yt.typeOf = I;
  }()), Yt;
}
var lb;
function um() {
  return lb || (lb = 1, process.env.NODE_ENV === "production" ? wu.exports = ZI() : wu.exports = XI()), wu.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var vp, cb;
function QI() {
  if (cb) return vp;
  cb = 1;
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
var yp, ub;
function dm() {
  if (ub) return yp;
  ub = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return yp = e, yp;
}
var bp, db;
function Z_() {
  return db || (db = 1, bp = Function.call.bind(Object.prototype.hasOwnProperty)), bp;
}
var _p, fb;
function JI() {
  if (fb) return _p;
  fb = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = dm(), n = {}, r = Z_();
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
var wp, pb;
function e2() {
  if (pb) return wp;
  pb = 1;
  var e = um(), t = QI(), n = dm(), r = Z_(), o = JI(), s = function() {
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
    function m(te) {
      var re = te && (p && te[p] || te[h]);
      if (typeof re == "function")
        return re;
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
      exact: K
    };
    function b(te, re) {
      return te === re ? te !== 0 || 1 / te === 1 / re : te !== te && re !== re;
    }
    function _(te, re) {
      this.message = te, this.data = re && typeof re == "object" ? re : {}, this.stack = "";
    }
    _.prototype = Error.prototype;
    function w(te) {
      if (process.env.NODE_ENV !== "production")
        var re = {}, se = 0;
      function be(Ee, fe, Te, De, W, z, $) {
        if (De = De || g, z = z || Te, $ !== n) {
          if (d) {
            var M = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw M.name = "Invariant Violation", M;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var V = De + ":" + Te;
            !re[V] && // Avoid spamming the console because they are often not actionable except for lib authors
            se < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + z + "` prop on `" + De + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), re[V] = !0, se++);
          }
        }
        return fe[Te] == null ? Ee ? fe[Te] === null ? new _("The " + W + " `" + z + "` is marked as required " + ("in `" + De + "`, but its value is `null`.")) : new _("The " + W + " `" + z + "` is marked as required in " + ("`" + De + "`, but its value is `undefined`.")) : null : te(fe, Te, De, W, z);
      }
      var Oe = be.bind(null, !1);
      return Oe.isRequired = be.bind(null, !0), Oe;
    }
    function k(te) {
      function re(se, be, Oe, Ee, fe, Te) {
        var De = se[be], W = ge(De);
        if (W !== te) {
          var z = Ne(De);
          return new _(
            "Invalid " + Ee + " `" + fe + "` of type " + ("`" + z + "` supplied to `" + Oe + "`, expected ") + ("`" + te + "`."),
            { expectedType: te }
          );
        }
        return null;
      }
      return w(re);
    }
    function F() {
      return w(u);
    }
    function E(te) {
      function re(se, be, Oe, Ee, fe) {
        if (typeof te != "function")
          return new _("Property `" + fe + "` of component `" + Oe + "` has invalid PropType notation inside arrayOf.");
        var Te = se[be];
        if (!Array.isArray(Te)) {
          var De = ge(Te);
          return new _("Invalid " + Ee + " `" + fe + "` of type " + ("`" + De + "` supplied to `" + Oe + "`, expected an array."));
        }
        for (var W = 0; W < Te.length; W++) {
          var z = te(Te, W, Oe, Ee, fe + "[" + W + "]", n);
          if (z instanceof Error)
            return z;
        }
        return null;
      }
      return w(re);
    }
    function I() {
      function te(re, se, be, Oe, Ee) {
        var fe = re[se];
        if (!c(fe)) {
          var Te = ge(fe);
          return new _("Invalid " + Oe + " `" + Ee + "` of type " + ("`" + Te + "` supplied to `" + be + "`, expected a single ReactElement."));
        }
        return null;
      }
      return w(te);
    }
    function S() {
      function te(re, se, be, Oe, Ee) {
        var fe = re[se];
        if (!e.isValidElementType(fe)) {
          var Te = ge(fe);
          return new _("Invalid " + Oe + " `" + Ee + "` of type " + ("`" + Te + "` supplied to `" + be + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return w(te);
    }
    function P(te) {
      function re(se, be, Oe, Ee, fe) {
        if (!(se[be] instanceof te)) {
          var Te = te.name || g, De = me(se[be]);
          return new _("Invalid " + Ee + " `" + fe + "` of type " + ("`" + De + "` supplied to `" + Oe + "`, expected ") + ("instance of `" + Te + "`."));
        }
        return null;
      }
      return w(re);
    }
    function C(te) {
      if (!Array.isArray(te))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), u;
      function re(se, be, Oe, Ee, fe) {
        for (var Te = se[be], De = 0; De < te.length; De++)
          if (b(Te, te[De]))
            return null;
        var W = JSON.stringify(te, function($, M) {
          var V = Ne(M);
          return V === "symbol" ? String(M) : M;
        });
        return new _("Invalid " + Ee + " `" + fe + "` of value `" + String(Te) + "` " + ("supplied to `" + Oe + "`, expected one of " + W + "."));
      }
      return w(re);
    }
    function T(te) {
      function re(se, be, Oe, Ee, fe) {
        if (typeof te != "function")
          return new _("Property `" + fe + "` of component `" + Oe + "` has invalid PropType notation inside objectOf.");
        var Te = se[be], De = ge(Te);
        if (De !== "object")
          return new _("Invalid " + Ee + " `" + fe + "` of type " + ("`" + De + "` supplied to `" + Oe + "`, expected an object."));
        for (var W in Te)
          if (r(Te, W)) {
            var z = te(Te, W, Oe, Ee, fe + "." + W, n);
            if (z instanceof Error)
              return z;
          }
        return null;
      }
      return w(re);
    }
    function A(te) {
      if (!Array.isArray(te))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), u;
      for (var re = 0; re < te.length; re++) {
        var se = te[re];
        if (typeof se != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ce(se) + " at index " + re + "."
          ), u;
      }
      function be(Oe, Ee, fe, Te, De) {
        for (var W = [], z = 0; z < te.length; z++) {
          var $ = te[z], M = $(Oe, Ee, fe, Te, De, n);
          if (M == null)
            return null;
          M.data && r(M.data, "expectedType") && W.push(M.data.expectedType);
        }
        var V = W.length > 0 ? ", expected one of type [" + W.join(", ") + "]" : "";
        return new _("Invalid " + Te + " `" + De + "` supplied to " + ("`" + fe + "`" + V + "."));
      }
      return w(be);
    }
    function B() {
      function te(re, se, be, Oe, Ee) {
        return ae(re[se]) ? null : new _("Invalid " + Oe + " `" + Ee + "` supplied to " + ("`" + be + "`, expected a ReactNode."));
      }
      return w(te);
    }
    function U(te, re, se, be, Oe) {
      return new _(
        (te || "React class") + ": " + re + " type `" + se + "." + be + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + Oe + "`."
      );
    }
    function ne(te) {
      function re(se, be, Oe, Ee, fe) {
        var Te = se[be], De = ge(Te);
        if (De !== "object")
          return new _("Invalid " + Ee + " `" + fe + "` of type `" + De + "` " + ("supplied to `" + Oe + "`, expected `object`."));
        for (var W in te) {
          var z = te[W];
          if (typeof z != "function")
            return U(Oe, Ee, fe, W, Ne(z));
          var $ = z(Te, W, Oe, Ee, fe + "." + W, n);
          if ($)
            return $;
        }
        return null;
      }
      return w(re);
    }
    function K(te) {
      function re(se, be, Oe, Ee, fe) {
        var Te = se[be], De = ge(Te);
        if (De !== "object")
          return new _("Invalid " + Ee + " `" + fe + "` of type `" + De + "` " + ("supplied to `" + Oe + "`, expected `object`."));
        var W = t({}, se[be], te);
        for (var z in W) {
          var $ = te[z];
          if (r(te, z) && typeof $ != "function")
            return U(Oe, Ee, fe, z, Ne($));
          if (!$)
            return new _(
              "Invalid " + Ee + " `" + fe + "` key `" + z + "` supplied to `" + Oe + "`.\nBad object: " + JSON.stringify(se[be], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(te), null, "  ")
            );
          var M = $(Te, z, Oe, Ee, fe + "." + z, n);
          if (M)
            return M;
        }
        return null;
      }
      return w(re);
    }
    function ae(te) {
      switch (typeof te) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !te;
        case "object":
          if (Array.isArray(te))
            return te.every(ae);
          if (te === null || c(te))
            return !0;
          var re = m(te);
          if (re) {
            var se = re.call(te), be;
            if (re !== te.entries) {
              for (; !(be = se.next()).done; )
                if (!ae(be.value))
                  return !1;
            } else
              for (; !(be = se.next()).done; ) {
                var Oe = be.value;
                if (Oe && !ae(Oe[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function he(te, re) {
      return te === "symbol" ? !0 : re ? re["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && re instanceof Symbol : !1;
    }
    function ge(te) {
      var re = typeof te;
      return Array.isArray(te) ? "array" : te instanceof RegExp ? "object" : he(re, te) ? "symbol" : re;
    }
    function Ne(te) {
      if (typeof te > "u" || te === null)
        return "" + te;
      var re = ge(te);
      if (re === "object") {
        if (te instanceof Date)
          return "date";
        if (te instanceof RegExp)
          return "regexp";
      }
      return re;
    }
    function ce(te) {
      var re = Ne(te);
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
    function me(te) {
      return !te.constructor || !te.constructor.name ? g : te.constructor.name;
    }
    return y.checkPropTypes = o, y.resetWarningCache = o.resetWarningCache, y.PropTypes = y, y;
  }, wp;
}
var xp, hb;
function t2() {
  if (hb) return xp;
  hb = 1;
  var e = dm();
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
  var n2 = um(), r2 = !0;
  nh.exports = e2()(n2.isElement, r2);
} else
  nh.exports = t2()();
var or = nh.exports;
const l = /* @__PURE__ */ mc(or);
function a2(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
var o2 = um();
function rh(e, t) {
  return rh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, rh(e, t);
}
function rn(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, rh(e, t);
}
var ba = function(t, n) {
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
function mb(e) {
  return e === null || e instanceof Element || e instanceof Text ? !1 : !!(e.type && e.tag);
}
var i2 = /* @__PURE__ */ function(e) {
  rn(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.prevNode = void 0, r;
  }
  var n = t.prototype;
  return n.componentDidMount = function() {
    var o = th.findDOMNode(this);
    process.env.NODE_ENV !== "production" && mb(o) && (o = null), this.prevNode = o, ba(this.props.innerRef, o);
  }, n.componentDidUpdate = function(o) {
    var s = th.findDOMNode(this);
    process.env.NODE_ENV !== "production" && mb(s) && (s = null), this.prevNode !== s && (this.prevNode = s, ba(this.props.innerRef, s)), o.innerRef !== this.props.innerRef && ba(this.props.innerRef, s);
  }, n.componentWillUnmount = function() {
    ba(this.props.innerRef, null), delete this.prevNode;
  }, n.render = function() {
    var o = this.props.children;
    return o;
  }, t;
}(L.Component), s2 = /* @__PURE__ */ function(e) {
  rn(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.currentNode = void 0, r.handleRefOverride = function(c) {
      var d = r.props, p = d.children, h = d.innerRef;
      ba(p.ref, c), ba(h, c), r.currentNode = c;
    }, r;
  }
  var n = t.prototype;
  return n.componentDidUpdate = function(o) {
    o.innerRef !== this.props.innerRef && ba(this.props.innerRef, this.currentNode);
  }, n.componentWillUnmount = function() {
    delete this.currentNode;
  }, n.render = function() {
    var o = this.props.children;
    return /* @__PURE__ */ L.cloneElement(o, {
      ref: this.handleRefOverride
    });
  }, t;
}(L.Component), l2 = ["children", "innerRef"], dr = function(t) {
  var n = t.children, r = t.innerRef, o = a2(t, l2), s = L.Children.only(n), u = o2.isForwardRef(s) ? s2 : i2, c = s && o && Object.keys(o).length > 0 ? /* @__PURE__ */ L.cloneElement(s, o) : s;
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
var c2 = Object.prototype, u2 = c2.hasOwnProperty;
function d2(e, t) {
  return e != null && u2.call(e, t);
}
var _n = Array.isArray, X_ = typeof global == "object" && global && global.Object === Object && global, f2 = typeof self == "object" && self && self.Object === Object && self, ro = X_ || f2 || Function("return this")(), Oa = ro.Symbol, Q_ = Object.prototype, p2 = Q_.hasOwnProperty, h2 = Q_.toString, ml = Oa ? Oa.toStringTag : void 0;
function m2(e) {
  var t = p2.call(e, ml), n = e[ml];
  try {
    e[ml] = void 0;
    var r = !0;
  } catch {
  }
  var o = h2.call(e);
  return r && (t ? e[ml] = n : delete e[ml]), o;
}
var g2 = Object.prototype, v2 = g2.toString;
function y2(e) {
  return v2.call(e);
}
var b2 = "[object Null]", _2 = "[object Undefined]", gb = Oa ? Oa.toStringTag : void 0;
function ka(e) {
  return e == null ? e === void 0 ? _2 : b2 : gb && gb in Object(e) ? m2(e) : y2(e);
}
function Ur(e) {
  return e != null && typeof e == "object";
}
var w2 = "[object Symbol]";
function Si(e) {
  return typeof e == "symbol" || Ur(e) && ka(e) == w2;
}
var x2 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, E2 = /^\w*$/;
function fm(e, t) {
  if (_n(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Si(e) ? !0 : E2.test(e) || !x2.test(e) || t != null && e in Object(t);
}
function Xa(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var C2 = "[object AsyncFunction]", O2 = "[object Function]", S2 = "[object GeneratorFunction]", T2 = "[object Proxy]";
function _s(e) {
  if (!Xa(e))
    return !1;
  var t = ka(e);
  return t == O2 || t == S2 || t == C2 || t == T2;
}
var Ep = ro["__core-js_shared__"], vb = function() {
  var e = /[^.]+$/.exec(Ep && Ep.keys && Ep.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function P2(e) {
  return !!vb && vb in e;
}
var k2 = Function.prototype, N2 = k2.toString;
function $i(e) {
  if (e != null) {
    try {
      return N2.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var I2 = /[\\^$.*+?()[\]{}|]/g, A2 = /^\[object .+?Constructor\]$/, R2 = Function.prototype, M2 = Object.prototype, D2 = R2.toString, L2 = M2.hasOwnProperty, F2 = RegExp(
  "^" + D2.call(L2).replace(I2, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function $2(e) {
  if (!Xa(e) || P2(e))
    return !1;
  var t = _s(e) ? F2 : A2;
  return t.test($i(e));
}
function B2(e, t) {
  return e == null ? void 0 : e[t];
}
function Bi(e, t) {
  var n = B2(e, t);
  return $2(n) ? n : void 0;
}
var Bl = Bi(Object, "create");
function j2() {
  this.__data__ = Bl ? Bl(null) : {}, this.size = 0;
}
function W2(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var z2 = "__lodash_hash_undefined__", U2 = Object.prototype, H2 = U2.hasOwnProperty;
function Y2(e) {
  var t = this.__data__;
  if (Bl) {
    var n = t[e];
    return n === z2 ? void 0 : n;
  }
  return H2.call(t, e) ? t[e] : void 0;
}
var q2 = Object.prototype, V2 = q2.hasOwnProperty;
function G2(e) {
  var t = this.__data__;
  return Bl ? t[e] !== void 0 : V2.call(t, e);
}
var K2 = "__lodash_hash_undefined__";
function Z2(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Bl && t === void 0 ? K2 : t, this;
}
function Ti(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Ti.prototype.clear = j2;
Ti.prototype.delete = W2;
Ti.prototype.get = Y2;
Ti.prototype.has = G2;
Ti.prototype.set = Z2;
function X2() {
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
var Q2 = Array.prototype, J2 = Q2.splice;
function eA(e) {
  var t = this.__data__, n = yd(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : J2.call(t, n, 1), --this.size, !0;
}
function tA(e) {
  var t = this.__data__, n = yd(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function nA(e) {
  return yd(this.__data__, e) > -1;
}
function rA(e, t) {
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
ao.prototype.clear = X2;
ao.prototype.delete = eA;
ao.prototype.get = tA;
ao.prototype.has = nA;
ao.prototype.set = rA;
var jl = Bi(ro, "Map");
function aA() {
  this.size = 0, this.__data__ = {
    hash: new Ti(),
    map: new (jl || ao)(),
    string: new Ti()
  };
}
function oA(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function bd(e, t) {
  var n = e.__data__;
  return oA(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function iA(e) {
  var t = bd(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function sA(e) {
  return bd(this, e).get(e);
}
function lA(e) {
  return bd(this, e).has(e);
}
function cA(e, t) {
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
oo.prototype.clear = aA;
oo.prototype.delete = iA;
oo.prototype.get = sA;
oo.prototype.has = lA;
oo.prototype.set = cA;
var uA = "Expected a function";
function gc(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(uA);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], s = n.cache;
    if (s.has(o))
      return s.get(o);
    var u = e.apply(this, r);
    return n.cache = s.set(o, u) || s, u;
  };
  return n.cache = new (gc.Cache || oo)(), n;
}
gc.Cache = oo;
var dA = 500;
function fA(e) {
  var t = gc(e, function(r) {
    return n.size === dA && n.clear(), r;
  }), n = t.cache;
  return t;
}
var pA = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, hA = /\\(\\)?/g, mA = fA(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(pA, function(n, r, o, s) {
    t.push(o ? s.replace(hA, "$1") : r || n);
  }), t;
});
function xi(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var yb = Oa ? Oa.prototype : void 0, bb = yb ? yb.toString : void 0;
function _d(e) {
  if (typeof e == "string")
    return e;
  if (_n(e))
    return xi(e, _d) + "";
  if (Si(e))
    return bb ? bb.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function ji(e) {
  return e == null ? "" : _d(e);
}
function vc(e, t) {
  return _n(e) ? e : fm(e, t) ? [e] : mA(ji(e));
}
var gA = "[object Arguments]";
function _b(e) {
  return Ur(e) && ka(e) == gA;
}
var J_ = Object.prototype, vA = J_.hasOwnProperty, yA = J_.propertyIsEnumerable, wd = _b(/* @__PURE__ */ function() {
  return arguments;
}()) ? _b : function(e) {
  return Ur(e) && vA.call(e, "callee") && !yA.call(e, "callee");
}, bA = 9007199254740991, _A = /^(?:0|[1-9]\d*)$/;
function xd(e, t) {
  var n = typeof e;
  return t = t ?? bA, !!t && (n == "number" || n != "symbol" && _A.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var wA = 9007199254740991;
function pm(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= wA;
}
function Ws(e) {
  if (typeof e == "string" || Si(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function e1(e, t, n) {
  t = vc(t, e);
  for (var r = -1, o = t.length, s = !1; ++r < o; ) {
    var u = Ws(t[r]);
    if (!(s = e != null && n(e, u)))
      break;
    e = e[u];
  }
  return s || ++r != o ? s : (o = e == null ? 0 : e.length, !!o && pm(o) && xd(u, o) && (_n(e) || wd(e)));
}
function ah(e, t) {
  return e != null && e1(e, t, d2);
}
function t1(e, t, n) {
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
function xA(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function yc(e, t) {
  t = vc(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[Ws(t[n++])];
  return n && n == r ? e : void 0;
}
function Ed(e, t, n) {
  var r = -1, o = e.length;
  t < 0 && (t = -t > o ? 0 : o + t), n = n > o ? o : n, n < 0 && (n += o), o = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var s = Array(o); ++r < o; )
    s[r] = e[r + t];
  return s;
}
function EA(e, t) {
  return t.length < 2 ? e : yc(e, Ed(t, 0, -1));
}
function CA(e, t, n) {
  t = vc(t, e), e = EA(e, t);
  var r = e == null ? e : e[Ws(xA(t))];
  return r == null ? void 0 : t1(r, e, n);
}
function Xo(e) {
  return e;
}
var wb = Math.max;
function n1(e, t, n) {
  return t = wb(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, s = wb(r.length - t, 0), u = Array(s); ++o < s; )
      u[o] = r[t + o];
    o = -1;
    for (var c = Array(t + 1); ++o < t; )
      c[o] = r[o];
    return c[t] = n(u), t1(e, this, c);
  };
}
function r1(e) {
  return function() {
    return e;
  };
}
var Gu = function() {
  try {
    var e = Bi(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), OA = Gu ? function(e, t) {
  return Gu(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: r1(t),
    writable: !0
  });
} : Xo, SA = 800, TA = 16, PA = Date.now;
function kA(e) {
  var t = 0, n = 0;
  return function() {
    var r = PA(), o = TA - (r - n);
    if (n = r, o > 0) {
      if (++t >= SA)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var a1 = kA(OA);
function zs(e, t) {
  return a1(n1(e, t, Xo), e + "");
}
var Be = zs(CA);
function NA(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ps(e) {
  return e === void 0;
}
function IA(e, t, n) {
  return e === e && (n !== void 0 && (e = e <= n ? e : n), e = e >= t ? e : t), e;
}
var AA = /\s/;
function RA(e) {
  for (var t = e.length; t-- && AA.test(e.charAt(t)); )
    ;
  return t;
}
var MA = /^\s+/;
function o1(e) {
  return e && e.slice(0, RA(e) + 1).replace(MA, "");
}
var xb = NaN, DA = /^[-+]0x[0-9a-f]+$/i, LA = /^0b[01]+$/i, FA = /^0o[0-7]+$/i, $A = parseInt;
function i1(e) {
  if (typeof e == "number")
    return e;
  if (Si(e))
    return xb;
  if (Xa(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Xa(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = o1(e);
  var n = LA.test(e);
  return n || FA.test(e) ? $A(e.slice(2), n ? 2 : 8) : DA.test(e) ? xb : +e;
}
var Eb = 1 / 0, BA = 17976931348623157e292;
function hs(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = i1(e), e === Eb || e === -Eb) {
    var t = e < 0 ? -1 : 1;
    return t * BA;
  }
  return e === e ? e : 0;
}
function bc(e) {
  var t = hs(e), n = t % 1;
  return t === t ? n ? t - n : t : 0;
}
function jA(e, t, n) {
  return e = ji(e), n = n == null ? 0 : IA(bc(n), 0, e.length), t = _d(t), e.slice(n, n + t.length) == t;
}
function s1(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, s = []; ++n < r; ) {
    var u = e[n];
    t(u, n, e) && (s[o++] = u);
  }
  return s;
}
function WA(e) {
  return function(t, n, r) {
    for (var o = -1, s = Object(t), u = r(t), c = u.length; c--; ) {
      var d = u[++o];
      if (n(s[d], d, s) === !1)
        break;
    }
    return t;
  };
}
var zA = WA();
function UA(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
function HA() {
  return !1;
}
var l1 = typeof exports == "object" && exports && !exports.nodeType && exports, Cb = l1 && typeof module == "object" && module && !module.nodeType && module, YA = Cb && Cb.exports === l1, Ob = YA ? ro.Buffer : void 0, qA = Ob ? Ob.isBuffer : void 0, Ku = qA || HA, VA = "[object Arguments]", GA = "[object Array]", KA = "[object Boolean]", ZA = "[object Date]", XA = "[object Error]", QA = "[object Function]", JA = "[object Map]", eR = "[object Number]", tR = "[object Object]", nR = "[object RegExp]", rR = "[object Set]", aR = "[object String]", oR = "[object WeakMap]", iR = "[object ArrayBuffer]", sR = "[object DataView]", lR = "[object Float32Array]", cR = "[object Float64Array]", uR = "[object Int8Array]", dR = "[object Int16Array]", fR = "[object Int32Array]", pR = "[object Uint8Array]", hR = "[object Uint8ClampedArray]", mR = "[object Uint16Array]", gR = "[object Uint32Array]", on = {};
on[lR] = on[cR] = on[uR] = on[dR] = on[fR] = on[pR] = on[hR] = on[mR] = on[gR] = !0;
on[VA] = on[GA] = on[iR] = on[KA] = on[sR] = on[ZA] = on[XA] = on[QA] = on[JA] = on[eR] = on[tR] = on[nR] = on[rR] = on[aR] = on[oR] = !1;
function vR(e) {
  return Ur(e) && pm(e.length) && !!on[ka(e)];
}
function c1(e) {
  return function(t) {
    return e(t);
  };
}
var u1 = typeof exports == "object" && exports && !exports.nodeType && exports, Nl = u1 && typeof module == "object" && module && !module.nodeType && module, yR = Nl && Nl.exports === u1, Cp = yR && X_.process, Sb = function() {
  try {
    var e = Nl && Nl.require && Nl.require("util").types;
    return e || Cp && Cp.binding && Cp.binding("util");
  } catch {
  }
}(), Tb = Sb && Sb.isTypedArray, hm = Tb ? c1(Tb) : vR, bR = Object.prototype, _R = bR.hasOwnProperty;
function wR(e, t) {
  var n = _n(e), r = !n && wd(e), o = !n && !r && Ku(e), s = !n && !r && !o && hm(e), u = n || r || o || s, c = u ? UA(e.length, String) : [], d = c.length;
  for (var p in e)
    _R.call(e, p) && !(u && // Safari 9 has enumerable `arguments.length` in strict mode.
    (p == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (p == "offset" || p == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (p == "buffer" || p == "byteLength" || p == "byteOffset") || // Skip index properties.
    xd(p, d))) && c.push(p);
  return c;
}
var xR = Object.prototype;
function d1(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || xR;
  return e === n;
}
function f1(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var ER = f1(Object.keys, Object), CR = Object.prototype, OR = CR.hasOwnProperty;
function mm(e) {
  if (!d1(e))
    return ER(e);
  var t = [];
  for (var n in Object(e))
    OR.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function io(e) {
  return e != null && pm(e.length) && !_s(e);
}
function Br(e) {
  return io(e) ? wR(e) : mm(e);
}
function p1(e, t) {
  return e && zA(e, t, Br);
}
function SR(e, t) {
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
var Us = SR(p1);
function TR(e, t) {
  var n = [];
  return Us(e, function(r, o, s) {
    t(r, o, s) && n.push(r);
  }), n;
}
function PR() {
  this.__data__ = new ao(), this.size = 0;
}
function kR(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function NR(e) {
  return this.__data__.get(e);
}
function IR(e) {
  return this.__data__.has(e);
}
var AR = 200;
function RR(e, t) {
  var n = this.__data__;
  if (n instanceof ao) {
    var r = n.__data__;
    if (!jl || r.length < AR - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new oo(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Ga(e) {
  var t = this.__data__ = new ao(e);
  this.size = t.size;
}
Ga.prototype.clear = PR;
Ga.prototype.delete = kR;
Ga.prototype.get = NR;
Ga.prototype.has = IR;
Ga.prototype.set = RR;
var MR = "__lodash_hash_undefined__";
function DR(e) {
  return this.__data__.set(e, MR), this;
}
function LR(e) {
  return this.__data__.has(e);
}
function Pi(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new oo(); ++t < n; )
    this.add(e[t]);
}
Pi.prototype.add = Pi.prototype.push = DR;
Pi.prototype.has = LR;
function h1(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function Wl(e, t) {
  return e.has(t);
}
var FR = 1, $R = 2;
function m1(e, t, n, r, o, s) {
  var u = n & FR, c = e.length, d = t.length;
  if (c != d && !(u && d > c))
    return !1;
  var p = s.get(e), h = s.get(t);
  if (p && h)
    return p == t && h == e;
  var m = -1, g = !0, y = n & $R ? new Pi() : void 0;
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
      if (!h1(t, function(k, F) {
        if (!Wl(y, F) && (b === k || o(b, k, n, r, s)))
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
var Pb = ro.Uint8Array;
function BR(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
function gm(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var jR = 1, WR = 2, zR = "[object Boolean]", UR = "[object Date]", HR = "[object Error]", YR = "[object Map]", qR = "[object Number]", VR = "[object RegExp]", GR = "[object Set]", KR = "[object String]", ZR = "[object Symbol]", XR = "[object ArrayBuffer]", QR = "[object DataView]", kb = Oa ? Oa.prototype : void 0, Op = kb ? kb.valueOf : void 0;
function JR(e, t, n, r, o, s, u) {
  switch (n) {
    case QR:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case XR:
      return !(e.byteLength != t.byteLength || !s(new Pb(e), new Pb(t)));
    case zR:
    case UR:
    case qR:
      return vd(+e, +t);
    case HR:
      return e.name == t.name && e.message == t.message;
    case VR:
    case KR:
      return e == t + "";
    case YR:
      var c = BR;
    case GR:
      var d = r & jR;
      if (c || (c = gm), e.size != t.size && !d)
        return !1;
      var p = u.get(e);
      if (p)
        return p == t;
      r |= WR, u.set(e, t);
      var h = m1(c(e), c(t), r, o, s, u);
      return u.delete(e), h;
    case ZR:
      if (Op)
        return Op.call(e) == Op.call(t);
  }
  return !1;
}
function g1(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
function eM(e, t, n) {
  var r = t(e);
  return _n(e) ? r : g1(r, n(e));
}
function tM() {
  return [];
}
var nM = Object.prototype, rM = nM.propertyIsEnumerable, Nb = Object.getOwnPropertySymbols, aM = Nb ? function(e) {
  return e == null ? [] : (e = Object(e), s1(Nb(e), function(t) {
    return rM.call(e, t);
  }));
} : tM;
function Ib(e) {
  return eM(e, Br, aM);
}
var oM = 1, iM = Object.prototype, sM = iM.hasOwnProperty;
function lM(e, t, n, r, o, s) {
  var u = n & oM, c = Ib(e), d = c.length, p = Ib(t), h = p.length;
  if (d != h && !u)
    return !1;
  for (var m = d; m--; ) {
    var g = c[m];
    if (!(u ? g in t : sM.call(t, g)))
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
var oh = Bi(ro, "DataView"), ih = Bi(ro, "Promise"), ms = Bi(ro, "Set"), sh = Bi(ro, "WeakMap"), Ab = "[object Map]", cM = "[object Object]", Rb = "[object Promise]", Mb = "[object Set]", Db = "[object WeakMap]", Lb = "[object DataView]", uM = $i(oh), dM = $i(jl), fM = $i(ih), pM = $i(ms), hM = $i(sh), ga = ka;
(oh && ga(new oh(new ArrayBuffer(1))) != Lb || jl && ga(new jl()) != Ab || ih && ga(ih.resolve()) != Rb || ms && ga(new ms()) != Mb || sh && ga(new sh()) != Db) && (ga = function(e) {
  var t = ka(e), n = t == cM ? e.constructor : void 0, r = n ? $i(n) : "";
  if (r)
    switch (r) {
      case uM:
        return Lb;
      case dM:
        return Ab;
      case fM:
        return Rb;
      case pM:
        return Mb;
      case hM:
        return Db;
    }
  return t;
});
var mM = 1, Fb = "[object Arguments]", $b = "[object Array]", xu = "[object Object]", gM = Object.prototype, Bb = gM.hasOwnProperty;
function vM(e, t, n, r, o, s) {
  var u = _n(e), c = _n(t), d = u ? $b : ga(e), p = c ? $b : ga(t);
  d = d == Fb ? xu : d, p = p == Fb ? xu : p;
  var h = d == xu, m = p == xu, g = d == p;
  if (g && Ku(e)) {
    if (!Ku(t))
      return !1;
    u = !0, h = !1;
  }
  if (g && !h)
    return s || (s = new Ga()), u || hm(e) ? m1(e, t, n, r, o, s) : JR(e, t, d, n, r, o, s);
  if (!(n & mM)) {
    var y = h && Bb.call(e, "__wrapped__"), b = m && Bb.call(t, "__wrapped__");
    if (y || b) {
      var _ = y ? e.value() : e, w = b ? t.value() : t;
      return s || (s = new Ga()), o(_, w, n, r, s);
    }
  }
  return g ? (s || (s = new Ga()), lM(e, t, n, r, o, s)) : !1;
}
function Cd(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !Ur(e) && !Ur(t) ? e !== e && t !== t : vM(e, t, n, r, Cd, o);
}
var yM = 1, bM = 2;
function _M(e, t, n, r) {
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
      if (!(m === void 0 ? Cd(p, d, yM | bM, r, h) : m))
        return !1;
    }
  }
  return !0;
}
function v1(e) {
  return e === e && !Xa(e);
}
function wM(e) {
  for (var t = Br(e), n = t.length; n--; ) {
    var r = t[n], o = e[r];
    t[n] = [r, o, v1(o)];
  }
  return t;
}
function y1(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function xM(e) {
  var t = wM(e);
  return t.length == 1 && t[0][2] ? y1(t[0][0], t[0][1]) : function(n) {
    return n === e || _M(n, e, t);
  };
}
function _a(e, t, n) {
  var r = e == null ? void 0 : yc(e, t);
  return r === void 0 ? n : r;
}
function EM(e, t) {
  return e != null && t in Object(e);
}
function b1(e, t) {
  return e != null && e1(e, t, EM);
}
var CM = 1, OM = 2;
function SM(e, t) {
  return fm(e) && v1(t) ? y1(Ws(e), t) : function(n) {
    var r = _a(n, e);
    return r === void 0 && r === t ? b1(n, e) : Cd(t, r, CM | OM);
  };
}
function _1(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function TM(e) {
  return function(t) {
    return yc(t, e);
  };
}
function PM(e) {
  return fm(e) ? _1(Ws(e)) : TM(e);
}
function Qo(e) {
  return typeof e == "function" ? e : e == null ? Xo : typeof e == "object" ? _n(e) ? SM(e[0], e[1]) : xM(e) : PM(e);
}
function lh(e, t) {
  var n = _n(e) ? s1 : TR;
  return n(e, Qo(t));
}
var kM = "[object Map]", NM = "[object Set]", IM = Object.prototype, AM = IM.hasOwnProperty;
function bi(e) {
  if (e == null)
    return !0;
  if (io(e) && (_n(e) || typeof e == "string" || typeof e.splice == "function" || Ku(e) || hm(e) || wd(e)))
    return !e.length;
  var t = ga(e);
  if (t == kM || t == NM)
    return !e.size;
  if (d1(e))
    return !mm(e).length;
  for (var n in e)
    if (AM.call(e, n))
      return !1;
  return !0;
}
function w1(e, t, n, r) {
  for (var o = e.length, s = n + -1; ++s < o; )
    if (t(e[s], s, e))
      return s;
  return -1;
}
function RM(e) {
  return e !== e;
}
function MM(e, t, n) {
  for (var r = n - 1, o = e.length; ++r < o; )
    if (e[r] === t)
      return r;
  return -1;
}
function Od(e, t, n) {
  return t === t ? MM(e, t, n) : w1(e, RM, n);
}
function vm(e, t) {
  var n = e == null ? 0 : e.length;
  return !!n && Od(e, t, 0) > -1;
}
var DM = Math.min;
function LM(e, t, n) {
  for (var r = vm, o = e[0].length, s = e.length, u = s, c = Array(s), d = 1 / 0, p = []; u--; ) {
    var h = e[u];
    d = DM(h.length, d), c[u] = o >= 120 && h.length >= 120 ? new Pi(u && h) : void 0;
  }
  h = e[0];
  var m = -1, g = c[0];
  e:
    for (; ++m < o && p.length < d; ) {
      var y = h[m], b = y;
      if (y = y !== 0 ? y : 0, !(g ? Wl(g, b) : r(p, b))) {
        for (u = s; --u; ) {
          var _ = c[u];
          if (!(_ ? Wl(_, b) : r(e[u], b)))
            continue e;
        }
        g && g.push(b), p.push(y);
      }
    }
  return p;
}
function zl(e) {
  return Ur(e) && io(e);
}
function FM(e) {
  return zl(e) ? e : [];
}
var $M = zs(function(e) {
  var t = xi(e, FM);
  return t.length && t[0] === e[0] ? LM(t) : [];
});
function BM(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
    ;
  return e;
}
function jM(e) {
  return typeof e == "function" ? e : Xo;
}
function x1(e, t) {
  var n = _n(e) ? BM : Us;
  return n(e, jM(t));
}
var ch = function(t) {
  return "default" + (t[0].toUpperCase() + t.slice(1));
}, WM = function(t, n, r, o) {
  var s = n[t];
  if (s !== void 0) return s;
  {
    var u = n[ch(t)];
    if (u !== void 0) return u;
    if (r) {
      var c = r[t];
      if (c !== void 0) return c;
    }
  }
  if (t === "checked") return !1;
  if (t === "value") return n.multiple ? [] : "";
}, Hs = /* @__PURE__ */ function(e) {
  rn(t, e);
  function t() {
    for (var n, r = arguments.length, o = new Array(r), s = 0; s < r; s++)
      o[s] = arguments[s];
    n = e.call.apply(e, [this].concat(o)) || this;
    var u = n.constructor, c = u.autoControlledProps, d = u.getAutoControlledStateFromProps, p = Be(NA(n), "getInitialAutoControlledState", n.props) || {};
    if (process.env.NODE_ENV !== "production") {
      var h = n.constructor, m = h.defaultProps, g = h.name, y = h.propTypes, b = h.getDerivedStateFromProps;
      b !== t.getDerivedStateFromProps && console.error("Auto controlled " + g + " must specify a static getAutoControlledStateFromProps() instead of getDerivedStateFromProps()."), x1(c, function(F) {
        var E = ch(F);
        ah(y, E) || console.error(g + ' is missing "' + E + '" propTypes validation for auto controlled prop "' + F + '".'), ah(y, F) || console.error(g + ' is missing propTypes validation for auto controlled prop "' + F + '".');
      });
      var _ = $M(c, Br(m));
      bi(_) || console.error(["Do not set defaultProps for autoControlledProps. You can set defaults by", "setting state in the constructor or using an ES7 property initializer", "(https://babeljs.io/blog/2015/06/07/react-on-es6-plus#property-initializers)", "See " + g + ' props: "' + _ + '".'].join(" "));
      var w = lh(c, function(F) {
        return jA(F, "default");
      });
      bi(w) || console.error(["Do not add default props to autoControlledProps.", "Default props are automatically handled.", "See " + g + ' autoControlledProps: "' + w + '".'].join(" "));
    }
    var k = c.reduce(function(F, E) {
      if (F[E] = WM(E, n.props, p), process.env.NODE_ENV !== "production") {
        var I = ch(E), S = n.constructor.name;
        !ps(n.props[I]) && !ps(n.props[E]) && console.error(S + ' prop "' + E + '" is auto controlled. Specify either ' + I + " or " + E + ", but not both.");
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
      var m = !ps(r[h]);
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
function zM(e) {
  return function(t, n, r) {
    var o = Object(t);
    if (!io(t)) {
      var s = Qo(n);
      t = Br(t), n = function(c) {
        return s(o[c], c, o);
      };
    }
    var u = e(t, n, r);
    return u > -1 ? o[s ? t[u] : u] : void 0;
  };
}
var UM = Math.max;
function uh(e, t, n) {
  var r = e == null ? 0 : e.length;
  if (!r)
    return -1;
  var o = n == null ? 0 : bc(n);
  return o < 0 && (o = UM(r + o, 0)), w1(e, Qo(t), o);
}
var E1 = zM(uh);
function HM(e, t) {
  var n;
  return Us(e, function(r, o, s) {
    return n = t(r, o, s), !n;
  }), !!n;
}
function dh(e, t, n) {
  if (!Xa(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? io(n) && xd(t, n.length) : r == "string" && t in n) ? vd(n[t], e) : !1;
}
function Il(e, t, n) {
  var r = _n(e) ? h1 : HM;
  return r(e, Qo(t));
}
var YM = function(t, n) {
  return Il(cm.toArray(t), {
    type: n
  });
}, ht = function(t) {
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
function jb(e) {
  var t = typeof e;
  return t === "string" || t === "number" ? Ru[e] || e : "";
}
var q = function(t, n) {
  return t && n;
}, Qn = function(t, n) {
  return t && t !== !0 && t + " " + n;
}, sn = function(t, n) {
  return t && (t === !0 ? n : t + " " + n);
}, Zu = function(t, n) {
  return !t || t === !0 ? null : t.replace("large screen", "large-screen").replace(/ vertically/g, "-vertically").split(" ").map(function(r) {
    return r.replace("-", " ") + " " + n;
  }).join(" ");
}, Wi = function(t) {
  return t === "justified" ? "justified" : Qn(t, "aligned");
}, Jo = function(t) {
  return Qn(t, "aligned");
}, Zn = function(t, n, r) {
  if (n === void 0 && (n = ""), r === void 0 && (r = !1), r && t === "equal")
    return "equal width";
  var o = typeof t;
  return (o === "string" || o === "number") && n ? jb(t) + " " + n : jb(t);
}, qM = 200;
function C1(e, t, n, r) {
  var o = -1, s = vm, u = !0, c = e.length, d = [], p = t.length;
  if (!c)
    return d;
  t.length >= qM && (s = Wl, u = !1, t = new Pi(t));
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
var Wb = Oa ? Oa.isConcatSpreadable : void 0;
function VM(e) {
  return _n(e) || wd(e) || !!(Wb && e && e[Wb]);
}
function Sd(e, t, n, r, o) {
  var s = -1, u = e.length;
  for (n || (n = VM), o || (o = []); ++s < u; ) {
    var c = e[s];
    n(c) ? g1(o, c) : r || (o[o.length] = c);
  }
  return o;
}
var fh = zs(function(e, t) {
  return zl(e) ? C1(e, Sd(t, 1, zl, !0)) : [];
});
function O1(e, t, n) {
  var r = e.length;
  return n = n === void 0 ? r : n, !t && n >= r ? e : Ed(e, t, n);
}
function GM(e, t) {
  for (var n = e.length; n-- && Od(t, e[n], 0) > -1; )
    ;
  return n;
}
function KM(e, t) {
  for (var n = -1, r = e.length; ++n < r && Od(t, e[n], 0) > -1; )
    ;
  return n;
}
function ZM(e) {
  return e.split("");
}
var XM = "\\ud800-\\udfff", QM = "\\u0300-\\u036f", JM = "\\ufe20-\\ufe2f", eD = "\\u20d0-\\u20ff", tD = QM + JM + eD, nD = "\\ufe0e\\ufe0f", rD = "\\u200d", aD = RegExp("[" + rD + XM + tD + nD + "]");
function ym(e) {
  return aD.test(e);
}
var S1 = "\\ud800-\\udfff", oD = "\\u0300-\\u036f", iD = "\\ufe20-\\ufe2f", sD = "\\u20d0-\\u20ff", lD = oD + iD + sD, cD = "\\ufe0e\\ufe0f", uD = "[" + S1 + "]", ph = "[" + lD + "]", hh = "\\ud83c[\\udffb-\\udfff]", dD = "(?:" + ph + "|" + hh + ")", T1 = "[^" + S1 + "]", P1 = "(?:\\ud83c[\\udde6-\\uddff]){2}", k1 = "[\\ud800-\\udbff][\\udc00-\\udfff]", fD = "\\u200d", N1 = dD + "?", I1 = "[" + cD + "]?", pD = "(?:" + fD + "(?:" + [T1, P1, k1].join("|") + ")" + I1 + N1 + ")*", hD = I1 + N1 + pD, mD = "(?:" + [T1 + ph + "?", ph, P1, k1, uD].join("|") + ")", gD = RegExp(hh + "(?=" + hh + ")|" + mD + hD, "g");
function vD(e) {
  return e.match(gD) || [];
}
function mh(e) {
  return ym(e) ? vD(e) : ZM(e);
}
function yD(e, t, n) {
  if (e = ji(e), e && t === void 0)
    return o1(e);
  if (!e || !(t = _d(t)))
    return e;
  var r = mh(e), o = mh(t), s = KM(r, o), u = GM(r, o) + 1;
  return O1(r, s, u).join("");
}
function bD(e, t, n) {
  t == "__proto__" && Gu ? Gu(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
var _D = Object.prototype, wD = _D.hasOwnProperty;
function xD(e, t, n) {
  var r = e[t];
  (!(wD.call(e, t) && vd(r, n)) || n === void 0 && !(t in e)) && bD(e, t, n);
}
function A1(e, t, n, r) {
  if (!Xa(e))
    return e;
  t = vc(t, e);
  for (var o = -1, s = t.length, u = s - 1, c = e; c != null && ++o < s; ) {
    var d = Ws(t[o]), p = n;
    if (d === "__proto__" || d === "constructor" || d === "prototype")
      return e;
    if (o != u) {
      var h = c[d];
      p = void 0, p === void 0 && (p = Xa(h) ? h : xd(t[o + 1]) ? [] : {});
    }
    xD(c, d, p), c = c[d];
  }
  return e;
}
function ED(e, t, n) {
  for (var r = -1, o = t.length, s = {}; ++r < o; ) {
    var u = t[r], c = yc(e, u);
    n(c, u) && A1(s, vc(u, e), c);
  }
  return s;
}
function CD(e, t) {
  return ED(e, t, function(n, r) {
    return b1(e, r);
  });
}
function OD(e) {
  var t = e == null ? 0 : e.length;
  return t ? Sd(e) : [];
}
function SD(e) {
  return a1(n1(e, void 0, OD), e + "");
}
var Td = SD(function(e, t) {
  return e == null ? {} : CD(e, t);
}), TD = f1(Object.getPrototypeOf, Object), PD = "[object Object]", kD = Function.prototype, ND = Object.prototype, R1 = kD.toString, ID = ND.hasOwnProperty, AD = R1.call(Object);
function Pd(e) {
  if (!Ur(e) || ka(e) != PD)
    return !1;
  var t = TD(e);
  if (t === null)
    return !0;
  var n = ID.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && R1.call(n) == AD;
}
function It(e) {
  return e == null;
}
function RD(e, t, n) {
  for (var r = -1, o = e.length; ++r < o; ) {
    var s = e[r], u = t(s);
    if (u != null && (c === void 0 ? u === u && !Si(u) : n(u, c)))
      var c = u, d = s;
  }
  return d;
}
function MD(e, t) {
  return e < t;
}
function zb(e) {
  return e && e.length ? RD(e, Xo, MD) : void 0;
}
function DD(e, t) {
  for (var n, r = -1, o = e.length; ++r < o; ) {
    var s = t(e[r]);
    s !== void 0 && (n = n === void 0 ? s : n + s);
  }
  return n;
}
function Ub(e) {
  return e && e.length ? DD(e, Xo) : 0;
}
function M1(e, t) {
  var n = -1, r = io(e) ? Array(e.length) : [];
  return Us(e, function(o, s, u) {
    r[++n] = t(o, s, u);
  }), r;
}
function Sn(e, t) {
  var n = _n(e) ? xi : M1;
  return n(e, Qo(t));
}
function LD(e, t) {
  var n = e.length;
  for (e.sort(t); n--; )
    e[n] = e[n].value;
  return e;
}
function FD(e, t) {
  if (e !== t) {
    var n = e !== void 0, r = e === null, o = e === e, s = Si(e), u = t !== void 0, c = t === null, d = t === t, p = Si(t);
    if (!c && !p && !s && e > t || s && u && d && !c && !p || r && u && d || !n && d || !o)
      return 1;
    if (!r && !s && !p && e < t || p && n && o && !r && !s || c && n && o || !u && o || !d)
      return -1;
  }
  return 0;
}
function $D(e, t, n) {
  for (var r = -1, o = e.criteria, s = t.criteria, u = o.length, c = n.length; ++r < u; ) {
    var d = FD(o[r], s[r]);
    if (d) {
      if (r >= c)
        return d;
      var p = n[r];
      return d * (p == "desc" ? -1 : 1);
    }
  }
  return e.index - t.index;
}
function BD(e, t, n) {
  t.length ? t = xi(t, function(s) {
    return _n(s) ? function(u) {
      return yc(u, s.length === 1 ? s[0] : s);
    } : s;
  }) : t = [Xo];
  var r = -1;
  t = xi(t, c1(Qo));
  var o = M1(e, function(s, u, c) {
    var d = xi(t, function(p) {
      return p(s);
    });
    return { criteria: d, index: ++r, value: s };
  });
  return LD(o, function(s, u) {
    return $D(s, u, n);
  });
}
var jD = zs(function(e, t) {
  if (e == null)
    return [];
  var n = t.length;
  return n > 1 && dh(e, t[0], t[1]) ? t = [] : n > 2 && dh(t[0], t[1], t[2]) && (t = [t[0]]), BD(e, Sd(t), []);
});
function WD(e, t, n) {
  return e && e.length ? (t = t === void 0 ? 1 : bc(t), Ed(e, 0, t < 0 ? 0 : t)) : [];
}
var gh = function() {
  return 0;
};
if (process.env.NODE_ENV !== "production") {
  var Sp = [], Hb = [];
  gh = function(t, n) {
    if (t === n) return 0;
    var r = t.length, o = n.length;
    if (r === 0) return o;
    if (o === 0) return r;
    for (var s, u, c, d, p = 0, h = 0; p < r; )
      Hb[p] = t.charCodeAt(p), Sp[p] = ++p;
    for (; h < o; )
      for (s = n.charCodeAt(h), c = h++, u = h, p = 0; p < r; p++)
        d = s === Hb[p] ? c : c + 1, c = Sp[p], u = Sp[p] = c > u ? d > u ? u + 1 : d : d > c ? c + 1 : d;
    return u;
  };
}
var zD = function() {
  var t;
  return (t = Object.prototype.toString).call.apply(t, arguments);
}, UD = function(t, n) {
  if (t[n] !== void 0 && !(typeof Element > "u") && !(t[n] instanceof Element))
    return new Error('Invalid prop "' + n + '" supplied, expected a DOM node.');
}, D1 = function(t) {
  if (!Array.isArray(t))
    throw new Error("Invalid argument supplied to suggest, expected an instance of array.");
  var n = gc(function(o) {
    var s = o.split(" ");
    return WD(jD(Sn(t, function(u) {
      var c = u.split(" "), d = Ub(Sn(Sn(s, function(h) {
        return Sn(c, function(m) {
          return gh(h, m);
        });
      }), zb)), p = Ub(Sn(Sn(c, function(h) {
        return Sn(s, function(m) {
          return gh(h, m);
        });
      }), zb));
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
}, Kt = function(t) {
  return function(n, r, o) {
    if (!Array.isArray(t))
      throw new Error(["Invalid argument supplied to disallow, expected an instance of array.", " See `" + r + "` prop in `" + o + "`."].join(""));
    if (!(It(n[r]) || n[r] === !1)) {
      var s = t.reduce(function(u, c) {
        return !It(n[c]) && n[c] !== !1 ? [].concat(u, [c]) : u;
      }, []);
      if (s.length > 0)
        return new Error(["Prop `" + r + "` in `" + o + "` conflicts with props: `" + s.join("`, `") + "`.", "They cannot be defined together, choose one or the other."].join(" "));
    }
  };
}, $t = function(t) {
  return function(n, r, o) {
    for (var s = arguments.length, u = new Array(s > 3 ? s - 3 : 0), c = 3; c < s; c++)
      u[c - 3] = arguments[c];
    if (!Array.isArray(t))
      throw new Error(["Invalid argument supplied to every, expected an instance of array.", "See `" + r + "` prop in `" + o + "`."].join(" "));
    var d = [];
    return t.forEach(function(p) {
      if (typeof p != "function")
        throw new Error('every() argument "validators" should contain functions, found: ' + zD(p) + ".");
      var h = p.apply(void 0, [n, r, o].concat(u));
      h && d.push(h);
    }), d[0];
  };
}, L1 = function(t, n) {
  return function(r, o, s) {
    for (var u = arguments.length, c = new Array(u > 3 ? u - 3 : 0), d = 3; d < u; d++)
      c[d - 3] = arguments[d];
    if (!Pd(t))
      throw new Error(["Invalid argument supplied to givenProps, expected an object.", "See `" + o + "` prop in `" + s + "`."].join(" "));
    if (typeof n != "function")
      throw new Error(["Invalid argument supplied to givenProps, expected a function.", "See `" + o + "` prop in `" + s + "`."].join(" "));
    var p = Br(t).every(function(g) {
      var y = t[g];
      return typeof y == "function" ? !y.apply(void 0, [r, g, s].concat(c)) : y === r[o];
    });
    if (p) {
      var h = n.apply(void 0, [r, o, s].concat(c));
      if (h) {
        var m = "{ " + Br(Td(Br(t), r)).map(function(g) {
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
    if (!(It(s) || s === !1)) {
      var u = s.replace("large screen", "large-screen").replace(/ vertically/g, "-vertically").split(" ").map(function(d) {
        return yD(d).replace("-", " ");
      }), c = fh(u, t);
      if (c.length > 0)
        return new Error("`" + r + "` prop in `" + o + "` has invalid values: `" + c.join("`, `") + "`.");
    }
  };
}, Mt = function() {
  return $t([Kt(["children"]), l.node]).apply(void 0, arguments);
}, St = function() {
  return $t([Kt(["children"]), l.oneOfType([l.func, l.node, l.object, l.arrayOf(l.oneOfType([l.node, l.object]))])]).apply(void 0, arguments);
}, _c = function() {
  return $t([Kt(["children"]), l.arrayOf(St)]).apply(void 0, arguments);
}, bm = l.shape({
  current: l.object
}), F1 = l.oneOfType([l.func, bm]), _m = { exports: {} }, gl = {}, Tp = { exports: {} };
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
var Yb;
function $1() {
  return Yb || (Yb = 1, function(e) {
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
var qb;
function HD() {
  if (qb) return gl;
  qb = 1, Object.defineProperty(gl, "__esModule", { value: !0 });
  var e = $1(), t = ee;
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
        for (var U = A; U >= 0; U -= 1) this.handlers[U].called = !1;
      } else
        (0, this.handlers[A])(C);
    } }, { key: "hasHandlers", value: function() {
      return this.handlers.length > 0;
    } }, { key: "removeHandlers", value: function(C) {
      for (var T = [], A = this.handlers.length, B = 0; B < A; B += 1) {
        var U = this.handlers[B];
        C.indexOf(U) === -1 && T.push(U);
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
          T.pools.forEach(function(U) {
            U.dispatchEvent(A, B);
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
        var U = !1;
        this.pools.forEach(function(ne) {
          return U = U || ne.hasHandlers(T);
        }), U || this.removeTargetHandler(T);
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
        var U = new F(B);
        return C.targets.set(B, U), U;
      }), u(this, "removeTarget", function(T) {
        C.targets.delete(w(T));
      });
    }
    return s(P, [{ key: "sub", value: function(C, T) {
      var A = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (e.canUseDOM) {
        var B = A.target, U = B === void 0 ? document : B, ne = A.pool, K = ne === void 0 ? "default" : ne;
        this.getTarget(U).addHandlers(K, C, b(T));
      }
    } }, { key: "unsub", value: function(C, T) {
      var A = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (e.canUseDOM) {
        var B = A.target, U = B === void 0 ? document : B, ne = A.pool, K = ne === void 0 ? "default" : ne, ae = this.getTarget(U, !1);
        ae && (ae.removeHandlers(K, C, b(T)), ae.hasHandlers() || this.removeTarget(U));
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
      var A = T.name, B = T.on, U = T.pool, ne = T.target;
      I.sub(A, B, { pool: U, target: ne });
    } }, { key: "unsubscribe", value: function(T) {
      var A = T.name, B = T.on, U = T.pool, ne = T.target;
      I.unsub(A, B, { pool: U, target: ne });
    } }, { key: "render", value: function() {
      return null;
    } }]), C;
  }();
  return u(S, "defaultProps", { pool: "default", target: "document" }), S.propTypes = {}, gl.instance = I, gl.default = S, gl;
}
var vl = {}, Vb;
function YD() {
  if (Vb) return vl;
  Vb = 1, Object.defineProperty(vl, "__esModule", { value: !0 });
  var e = $1(), t = or, n = ee;
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
      value: function(A) {
        for (var B = this.handlers.slice(0), U = A.length, ne = 0; ne < U; ne += 1)
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
        var U = this.handlers.length - 1;
        if (!B) {
          var ne = this.handlers[U];
          ne(A);
          return;
        }
        for (var K = U; K >= 0; K -= 1)
          this.handlers[K].called || (this.handlers[K].called = !0, this.handlers[K](A));
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
        for (var B = [], U = this.handlers.length, ne = 0; ne < U; ne += 1) {
          var K = this.handlers[ne];
          A.indexOf(K) === -1 && B.push(K);
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
        var U = b(this.handlerSets);
        if (U.has(A)) {
          var ne = U.get(A);
          U.set(A, ne.addHandlers(B));
        } else
          U.set(A, new y(B));
        return new C(this.poolName, U);
      }
    }, {
      key: "dispatchEvent",
      value: function(A, B) {
        var U = this.handlerSets.get(A), ne = this.poolName === "default";
        U && U.dispatchEvent(B, ne);
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
        var ne = U.get(A), K = ne.removeHandlers(B);
        return K.hasHandlers() ? U.set(A, K) : U.delete(A), new C(this.poolName, U);
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
        return function(U) {
          A.pools.forEach(function(ne) {
            ne.dispatchEvent(B, U);
          });
        };
      }), this.target = T;
    }
    return u(C, [{
      key: "addHandlers",
      value: function(A, B, U) {
        if (this.pools.has(A)) {
          var ne = this.pools.get(A);
          this.pools.set(A, ne.addHandlers(B, U));
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
          var ne = this.pools.get(A), K = ne.removeHandlers(B, U);
          K.hasHandlers() ? this.pools.set(A, K) : this.pools.delete(A);
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
      var T = this;
      o(this, C), c(this, "targets", /* @__PURE__ */ new Map()), c(this, "getTarget", function(A) {
        var B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, U = k(A);
        if (T.targets.has(U))
          return T.targets.get(U);
        if (!B) return null;
        var ne = new E(U);
        return T.targets.set(U, ne), ne;
      }), c(this, "removeTarget", function(A) {
        T.targets.delete(k(A));
      });
    }
    return u(C, [{
      key: "sub",
      value: function(A, B) {
        var U = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (e.canUseDOM) {
          var ne = U.target, K = ne === void 0 ? document : ne, ae = U.pool, he = ae === void 0 ? "default" : ae, ge = this.getTarget(K);
          ge.addHandlers(he, A, _(B));
        }
      }
    }, {
      key: "unsub",
      value: function(A, B) {
        var U = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (e.canUseDOM) {
          var ne = U.target, K = ne === void 0 ? document : ne, ae = U.pool, he = ae === void 0 ? "default" : ae, ge = this.getTarget(K, !1);
          ge && (ge.removeHandlers(he, A, _(B)), ge.hasHandlers() || this.removeTarget(K));
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
        var U = B.name, ne = B.on, K = B.pool, ae = B.target;
        S.sub(U, ne, {
          pool: K,
          target: ae
        });
      }
    }, {
      key: "unsubscribe",
      value: function(B) {
        var U = B.name, ne = B.on, K = B.pool, ae = B.target;
        S.unsub(U, ne, {
          pool: K,
          target: ae
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
  }, vl.instance = S, vl.default = P, vl;
}
var Qu;
process.env.NODE_ENV === "production" ? Qu = HD() : Qu = YD();
_m.exports = Qu.default;
var Tl = _m.exports.instance = Qu.instance, qD = _m.exports;
const Ya = /* @__PURE__ */ mc(qD);
function B1() {
}
var VD = 1 / 0, GD = ms && 1 / gm(new ms([, -0]))[1] == VD ? function(e) {
  return new ms(e);
} : B1, KD = 200;
function j1(e, t, n) {
  var r = -1, o = vm, s = e.length, u = !0, c = [], d = c;
  if (s >= KD) {
    var p = GD(e);
    if (p)
      return gm(p);
    u = !1, o = Wl, d = new Pi();
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
  return e && e.length ? j1(e) : [];
}
var ZD = "[object Number]";
function XD(e) {
  return typeof e == "number" || Ur(e) && ka(e) == ZD;
}
var QD = "[object String]";
function wm(e) {
  return typeof e == "string" || !_n(e) && Ur(e) && ka(e) == QD;
}
var JD = "[object Boolean]";
function eL(e) {
  return e === !0 || e === !1 || Ur(e) && ka(e) == JD;
}
function W1(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = W1(e[t])) && (r && (r += " "), r += n);
  else for (t in e) e[t] && (r && (r += " "), r += t);
  return r;
}
function Ze() {
  for (var e, t, n = 0, r = ""; n < arguments.length; ) (e = arguments[n++]) && (t = W1(e)) && (r && (r += " "), r += t);
  return r;
}
var Gb = {};
function vh(e, t, n, r) {
  if (r === void 0 && (r = {}), typeof e != "function" && typeof e != "string")
    throw new Error("createShorthand() Component must be a string or function.");
  if (It(n) || eL(n))
    return null;
  var o = wm(n), s = XD(n), u = _s(n), c = /* @__PURE__ */ L.isValidElement(n), d = Pd(n), p = o || s || _n(n);
  if (!u && !c && !d && !p)
    return process.env.NODE_ENV !== "production" && console.error(["Shorthand value must be a string|number|array|object|ReactElement|function.", " Use null|undefined|boolean for none", " Received " + typeof n + "."].join("")), null;
  var h = r, m = h.defaultProps, g = m === void 0 ? {} : m, y = c && n.props || d && n || p && t(n), b = r, _ = b.overrideProps, w = _ === void 0 ? {} : _;
  w = _s(w) ? w(pe({}, g, y)) : w;
  var k = pe({}, g, y, w);
  if (g.className || w.className || y.className) {
    var F = Ze(g.className, w.className, y.className);
    k.className = kd(F.split(" ")).join(" ");
  }
  if ((g.style || w.style || y.style) && (k.style = pe({}, g.style, y.style, w.style)), It(k.key)) {
    var E = k.childKey, I = r, S = I.autoGenerateKey, P = S === void 0 ? !0 : S;
    It(E) ? P && (o || s) && (k.key = n) : (k.key = typeof E == "function" ? E(k) : E, delete k.childKey);
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
    return process.env.NODE_ENV !== "production" && (Gb[e] || (Gb[e] = !0, console.warn('Warning: There is a deprecated shorthand function usage for "' + e + '". It is deprecated and will be removed in v3 release. Please follow our upgrade guide: https://github.com/Semantic-Org/Semantic-UI-React/pull/4029'))), n(e, k, k.children);
}
function Qt(e, t) {
  if (typeof e != "function" && typeof e != "string")
    throw new Error("createShorthandFactory() Component must be a string or function.");
  return function(n, r) {
    return vh(e, t, n, r);
  };
}
var tL = /* @__PURE__ */ Qt("div", function(e) {
  return {
    children: e
  };
}), nL = /* @__PURE__ */ Qt("input", function(e) {
  return {
    type: e
  };
}), yh = /* @__PURE__ */ Qt("label", function(e) {
  return {
    children: e
  };
}), Ve = function(t, n) {
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
function rL(e, t) {
  return xi(t, function(n) {
    return e[n];
  });
}
function z1(e) {
  return e == null ? [] : rL(e, Br(e));
}
var aL = Math.max;
function wa(e, t, n, r) {
  e = io(e) ? e : z1(e), n = n ? bc(n) : 0;
  var o = e.length;
  return n < 0 && (n = aL(o + n, 0)), wm(e) ? n <= o && e.indexOf(t, n) > -1 : !!o && Od(e, t, n) > -1;
}
var U1 = [
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
], oL = [
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
], iL = [].concat(U1, oL), sL = ["alt", "height", "src", "srcSet", "width", "loading"], xm = function(t, n) {
  n === void 0 && (n = {});
  var r = n, o = r.htmlProps, s = o === void 0 ? iL : o, u = r.includeAria, c = u === void 0 ? !0 : u, d = {}, p = {};
  return x1(t, function(h, m) {
    var g = c && (/^aria-.*$/.test(m) || m === "role"), y = wa(s, m) || g ? d : p;
    y[m] = h;
  }), [d, p];
}, lL = typeof document == "object" && document !== null, cL = typeof window == "object" && window !== null && window.self === window, Ei = function e() {
  return It(e.override) ? lL && cL : e.override;
}, uL = Math.max, dL = Math.min;
function fL(e, t, n) {
  return e >= dL(t, n) && e < uL(t, n);
}
function Kb(e, t, n) {
  return t = hs(t), n === void 0 ? (n = t, t = 0) : n = hs(n), e = i1(e), fL(e, t, n);
}
function pL(e) {
  return e && e.length ? e[0] : void 0;
}
var Io = function(t, n) {
  if (Il([n, t], It)) return !1;
  if (n.target && (Be(n.target, "setAttribute", "data-suir-click-target", !0), document.querySelector("[data-suir-click-target=true]")))
    return Be(n.target, "removeAttribute", "data-suir-click-target"), t.contains(n.target);
  var r = n.clientX, o = n.clientY;
  if (Il([r, o], It)) return !1;
  var s = t.getClientRects();
  if (!t.offsetWidth || !t.offsetHeight || !s || !s.length) return !1;
  var u = pL(s), c = u.top, d = u.bottom, p = u.left, h = u.right;
  return Il([c, d, p, h], It) ? !1 : Kb(o, c, d + 1e-3) && Kb(r, p, h + 1e-3);
}, H1 = function(t) {
  return {
    active: !1,
    type: "ellipsisItem",
    value: t
  };
}, hL = function() {
  return {
    active: !1,
    type: "firstItem",
    value: 1
  };
}, mL = function(t) {
  return {
    active: !1,
    type: "prevItem",
    value: Math.max(1, t - 1)
  };
}, gL = function(t) {
  return function(n) {
    return {
      active: t === n,
      type: "pageItem",
      value: n
    };
  };
}, vL = function(t, n) {
  return {
    active: !1,
    type: "nextItem",
    value: Math.min(t + 1, n)
  };
}, yL = function(t) {
  return {
    active: !1,
    type: "lastItem",
    value: t
  };
}, bL = Math.ceil, _L = Math.max;
function wL(e, t, n, r) {
  for (var o = -1, s = _L(bL((t - e) / (n || 1)), 0), u = Array(s); s--; )
    u[++o] = e, e += n;
  return u;
}
function xL(e) {
  return function(t, n, r) {
    return r && typeof r != "number" && dh(t, n, r) && (n = r = void 0), t = hs(t), n === void 0 ? (n = t, t = 0) : n = hs(n), r = r === void 0 ? t < n ? 1 : -1 : hs(r), wL(t, n, r);
  };
}
var EL = xL(), CL = function(t, n, r) {
  var o = n - 1, s = o !== t + 1, u = s ? H1 : r;
  return u(o);
}, OL = function(t, n, r) {
  var o = t + 1, s = o !== n - 1, u = s ? H1 : r;
  return u(o);
}, Mu = function(t, n, r) {
  return Sn(EL(t, n + 1), r);
}, SL = function(t, n) {
  var r = t.activePage, o = t.boundaryRange, s = t.hideEllipsis, u = t.siblingRange, c = t.totalPages, d = s ? 0 : 1, p = o, h = Mu(1, p, n), m = c + 1 - o, g = Mu(m, c, n), y = Math.min(Math.max(r - u, p + d + 1), m - d - 2 * u - 1), b = y + 2 * u, _ = Mu(y, b, n);
  return [].concat(h, [!s && CL(p, y, n)], _, [!s && OL(b, m, n)], g).filter(Boolean);
}, TL = function(t) {
  var n = t.boundaryRange, r = t.hideEllipsis, o = t.siblingRange, s = t.totalPages, u = 2 * n, c = r ? 0 : 2, d = 2 * o;
  return 1 + c + d + u >= s;
}, PL = function(t) {
  var n = t.activePage, r = t.boundaryRange, o = t.hideEllipsis, s = t.siblingRange, u = t.totalPages;
  return {
    activePage: +n,
    boundaryRange: +r,
    hideEllipsis: !!o,
    siblingRange: +s,
    totalPages: +u
  };
}, kL = function(t) {
  var n = PL(t), r = n.activePage, o = n.totalPages, s = gL(r), u = TL(n) ? Mu(1, o, s) : SL(n, s);
  return [hL(), mL(r)].concat(u, [vL(r, o), yL(o)]);
}, la = ["red", "orange", "yellow", "olive", "green", "teal", "blue", "violet", "purple", "pink", "brown", "grey", "black"], wc = ["left", "right"], pr = ["mini", "tiny", "small", "medium", "large", "big", "huge", "massive"], zi = ["left", "center", "right", "justified"], Ui = ["bottom", "middle", "top"], Y1 = ["mobile", "tablet", "computer", "large screen", "widescreen"], lr = [].concat(Br(Ru), Br(Ru).map(Number), z1(Ru)), NL = ["american sign language interpreting", "assistive listening systems", "audio description", "blind", "braille", "closed captioning", "closed captioning outline", "deaf", "low vision", "phone volume", "question circle", "question circle outline", "sign language", "tty", "universal access", "wheelchair"], IL = ["angle double down", "angle double left", "angle double right", "angle double up", "angle down", "angle left", "angle right", "angle up", "arrow alternate circle down", "arrow alternate circle down outline", "arrow alternate circle left", "arrow alternate circle left outline", "arrow alternate circle right", "arrow alternate circle right outline", "arrow alternate circle up", "arrow alternate circle up outline", "arrow circle down", "arrow circle left", "arrow circle right", "arrow circle up", "arrow down", "arrow left", "arrow right", "arrow up", "arrows alternate", "arrows alternate horizontal", "arrows alternate vertical", "caret down", "caret left", "caret right", "caret square down", "caret square down outline", "caret square left", "caret square left outline", "caret square right", "caret square right outline", "caret square up", "caret square up outline", "caret up", "cart arrow down", "chart line", "chevron circle down", "chevron circle left", "chevron circle right", "chevron circle up", "chevron down", "chevron left", "chevron right", "chevron up", "cloud download", "cloud upload", "download", "exchange", "expand arrows alternate", "external alternate", "external square alternate", "hand point down", "hand point down outline", "hand point left", "hand point left outline", "hand point right", "hand point right outline", "hand point up", "hand point up outline", "hand pointer", "hand pointer outline", "history", "level down alternate", "level up alternate", "location arrow", "long arrow alternate down", "long arrow alternate left", "long arrow alternate right", "long arrow alternate up", "mouse pointer", "play", "random", "recycle", "redo", "redo alternate", "reply", "reply all", "retweet", "share", "share square", "share square outline", "sign-in", "sign-out", "sign-in alternate", "sign-out alternate", "sort", "sort alphabet down", "sort alphabet up", "sort amount down", "sort amount up", "sort down", "sort numeric down", "sort numeric up", "sort up", "sync", "sync alternate", "text height", "text width", "undo", "undo alternate", "upload", "zoom-in", "zoom-out"], AL = ["audio description", "backward", "circle", "circle outline", "closed captioning", "closed captioning outline", "compress", "eject", "expand", "expand arrows alternate", "fast backward", "fast forward", "file audio", "file audio outline", "file video", "file video outline", "film", "forward", "headphones", "microphone", "microphone slash", "music", "pause", "pause circle", "pause circle outline", "phone volume", "play", "play circle", "play circle outline", "podcast", "random", "redo", "redo alternate", "rss", "rss square", "step backward", "step forward", "stop", "stop circle", "stop circle outline", "sync", "sync alternate", "undo", "undo alternate", "video", "volume down", "volume off", "volume up"], RL = ["address book", "address book outline", "address card", "address card outline", "archive", "balance scale", "birthday cake", "book", "briefcase", "building", "building outline", "bullhorn", "bullseye", "calculator", "calendar", "calendar outline", "calendar alternate", "calendar alternate outline", "certificate", "chart area", "chart bar", "chart bar outline", "chart line", "chart pie", "clipboard", "clipboard outline", "coffee", "columns", "compass", "compass outline", "copy", "copy outline", "copyright", "copyright outline", "cut", "edit", "edit outline", "envelope", "envelope outline", "envelope open", "envelope open outline", "envelope square", "eraser", "fax", "file", "file outline", "file alternate", "file alternate outline", "folder", "folder outline", "folder open", "folder open outline", "globe", "industry", "paperclip", "paste", "pen square", "pencil alternate", "percent", "phone", "phone square", "phone volume", "registered", "registered outline", "save", "save outline", "sitemap", "sticky note", "sticky note outline", "suitcase", "table", "tag", "tags", "tasks", "thumbtack", "trademark"], ML = ["chess", "chess bishop", "chess board", "chess king", "chess knight", "chess pawn", "chess queen", "chess rook", "square full"], DL = ["archive", "barcode", "bath", "bug", "code", "code branch", "coffee", "file", "file outline", "file alternate", "file alternate outline", "file code", "file code outline", "filter", "fire extinguisher", "folder", "folder outline", "folder open", "folder open outline", "keyboard", "keyboard outline", "microchip", "qrcode", "shield alternate", "sitemap", "terminal", "user secret", "window close", "window close outline", "window maximize", "window maximize outline", "window minimize", "window minimize outline", "window restore", "window restore outline"], LL = ["address book", "address book outline", "address card", "address card outline", "american sign language interpreting", "assistive listening systems", "at", "bell", "bell outline", "bell slash", "bell slash outline", "bullhorn", "comment", "comment outline", "comment alternate", "comment alternate outline", "comments", "comments outline", "envelope", "envelope outline", "envelope open", "envelope open outline", "envelope square", "fax", "inbox", "language", "microphone", "microphone slash", "mobile", "mobile alternate", "paper plane", "paper plane outline", "phone", "phone square", "phone volume", "rss", "rss square", "tty", "wifi"], FL = ["desktop", "download", "hdd", "hdd outline", "headphones", "keyboard", "keyboard outline", "laptop", "microchip", "mobile", "mobile alternate", "plug", "power off", "print", "save", "save outline", "server", "tablet", "tablet alternate", "tv", "upload"], $L = ["dollar sign", "euro sign", "lira sign", "money bill alternate", "money bill alternate outline", "pound sign", "ruble sign", "rupee sign", "shekel sign", "won sign", "yen sign"], BL = ["bell", "bell outline", "bell slash", "bell slash outline", "calendar", "calendar outline", "calendar alternate", "calendar alternate outline", "calendar check", "calendar check outline", "calendar minus", "calendar minus outline", "calendar plus", "calendar plus outline", "calendar times", "calendar times outline", "clock", "clock outline", "hourglass", "hourglass outline", "hourglass end", "hourglass half", "hourglass start", "stopwatch"], jL = ["adjust", "clone", "clone outline", "copy", "copy outline", "crop", "crosshairs", "cut", "edit", "edit outline", "eraser", "eye", "eye dropper", "eye slash", "eye slash outline", "object group", "object group outline", "object ungroup", "object ungroup outline", "paint brush", "paste", "pencil alternate", "save", "save outline", "tint"], WL = ["align center", "align justify", "align left", "align right", "bold", "clipboard", "clipboard outline", "clone", "clone outline", "columns", "copy", "copy outline", "cut", "edit", "edit outline", "eraser", "file", "file outline", "file alternate", "file alternate outline", "font", "heading", "i cursor", "indent", "italic", "linkify", "list", "list alternate", "list alternate outline", "list ol", "list ul", "outdent", "paper plane", "paper plane outline", "paperclip", "paragraph", "paste", "pencil alternate", "print", "quote left", "quote right", "redo", "redo alternate", "reply", "reply all", "share", "strikethrough", "subscript", "superscript", "sync", "sync alternate", "table", "tasks", "text height", "text width", "th", "th large", "th list", "trash", "trash alternate", "trash alternate outline", "underline", "undo", "undo alternate", "unlink"], zL = ["archive", "clone", "clone outline", "copy", "copy outline", "cut", "file", "file outline", "file alternate", "file alternate outline", "file archive", "file archive outline", "file audio", "file audio outline", "file code", "file code outline", "file excel", "file excel outline", "file image", "file image outline", "file pdf", "file pdf outline", "file powerpoint", "file powerpoint outline", "file video", "file video outline", "file word", "file word outline", "folder", "folder outline", "folder open", "folder open outline", "paste", "save", "save outline", "sticky note", "sticky note outline"], UL = ["genderless", "mars", "mars double", "mars stroke", "mars stroke horizontal", "mars stroke vertical", "mercury", "neuter", "transgender", "transgender alternate", "venus", "venus double", "venus mars"], HL = ["hand lizard", "hand lizard outline", "hand paper", "hand paper outline", "hand peace", "hand peace outline", "hand point down", "hand point down outline", "hand point left", "hand point left outline", "hand point right", "hand point right outline", "hand point up", "hand point up outline", "hand pointer", "hand pointer outline", "hand rock", "hand rock outline", "hand scissors", "hand scissors outline", "hand spock", "hand spock outline", "handshake", "handshake outline", "thumbs down", "thumbs down outline", "thumbs up", "thumbs up outline"], YL = ["ambulance", "h square", "heart", "heart outline", "heartbeat", "hospital", "hospital outline", "medkit", "plus square", "plus square outline", "stethoscope", "user md", "wheelchair"], qL = ["adjust", "bolt", "camera", "camera retro", "clone", "clone outline", "compress", "expand", "eye", "eye dropper", "eye slash", "eye slash outline", "file image", "file image outline", "film", "id badge", "id badge outline", "id card", "id card outline", "image", "image outline", "images", "images outline", "sliders horizontal", "tint"], VL = ["ban", "barcode", "bars", "beer", "bell", "bell outline", "bell slash", "bell slash outline", "bug", "bullhorn", "bullseye", "calculator", "calendar", "calendar outline", "calendar alternate", "calendar alternate outline", "calendar check", "calendar check outline", "calendar minus", "calendar minus outline", "calendar plus", "calendar plus outline", "calendar times", "calendar times outline", "certificate", "check", "check circle", "check circle outline", "check square", "check square outline", "circle", "circle outline", "clipboard", "clipboard outline", "clone", "clone outline", "cloud", "cloud download", "cloud upload", "coffee", "cog", "cogs", "copy", "copy outline", "cut", "database", "dot circle", "dot circle outline", "download", "edit", "edit outline", "ellipsis horizontal", "ellipsis vertical", "envelope", "envelope outline", "envelope open", "envelope open outline", "eraser", "exclamation", "exclamation circle", "exclamation triangle", "external alternate", "external square alternate", "eye", "eye slash", "eye slash outline", "file", "file outline", "file alternate", "file alternate outline", "filter", "flag", "flag outline", "flag checkered", "folder", "folder outline", "folder open", "folder open outline", "frown", "frown outline", "hashtag", "heart", "heart outline", "history", "home", "i cursor", "info", "info circle", "language", "magic", "meh", "meh outline", "microphone", "microphone slash", "minus", "minus circle", "minus square", "minus square outline", "paste", "pencil alternate", "plus", "plus circle", "plus square", "plus square outline", "qrcode", "question", "question circle", "question circle outline", "quote left", "quote right", "redo", "redo alternate", "reply", "reply all", "rss", "rss square", "save", "save outline", "search", "search minus", "search plus", "share", "share alternate", "share alternate square", "share square", "share square outline", "shield alternate", "sign-in", "sign-out", "signal", "sitemap", "sliders horizontal", "smile", "smile outline", "sort", "sort alphabet down", "sort alphabet up", "sort amount down", "sort amount up", "sort down", "sort numeric down", "sort numeric up", "sort up", "star", "star outline", "star half", "star half outline", "sync", "sync alternate", "thumbs down", "thumbs down outline", "thumbs up", "thumbs up outline", "times", "times circle", "times circle outline", "toggle off", "toggle on", "trash", "trash alternate", "trash alternate outline", "trophy", "undo", "undo alternate", "upload", "user", "user outline", "user circle", "user circle outline", "wifi"], GL = ["box", "boxes", "clipboard check", "clipboard list", "dolly", "dolly flatbed", "pallet", "shipping fast", "truck", "warehouse"], KL = ["ambulance", "anchor", "balance scale", "bath", "bed", "beer", "bell", "bell outline", "bell slash", "bell slash outline", "bicycle", "binoculars", "birthday cake", "blind", "bomb", "book", "bookmark", "bookmark outline", "briefcase", "building", "building outline", "car", "coffee", "crosshairs", "dollar sign", "eye", "eye slash", "eye slash outline", "fighter jet", "fire", "fire extinguisher", "flag", "flag outline", "flag checkered", "flask", "gamepad", "gavel", "gift", "glass martini", "globe", "graduation cap", "h square", "heart", "heart outline", "heartbeat", "home", "hospital", "hospital outline", "image", "image outline", "images", "images outline", "industry", "info", "info circle", "key", "leaf", "lemon", "lemon outline", "life ring", "life ring outline", "lightbulb", "lightbulb outline", "location arrow", "low vision", "magnet", "male", "map", "map outline", "map marker", "map marker alternate", "map pin", "map signs", "medkit", "money bill alternate", "money bill alternate outline", "motorcycle", "music", "newspaper", "newspaper outline", "paw", "phone", "phone square", "phone volume", "plane", "plug", "plus", "plus square", "plus square outline", "print", "recycle", "road", "rocket", "search", "search minus", "search plus", "ship", "shopping bag", "shopping basket", "shopping cart", "shower", "street view", "subway", "suitcase", "tag", "tags", "taxi", "thumbtack", "ticket alternate", "tint", "train", "tree", "trophy", "truck", "tty", "umbrella", "university", "utensil spoon", "utensils", "wheelchair", "wifi", "wrench"], ZL = ["ambulance", "band aid", "dna", "first aid", "heart", "heart outline", "heartbeat", "hospital", "hospital outline", "hospital symbol", "pills", "plus", "stethoscope", "syringe", "thermometer", "user md", "weight"], XL = ["ambulance", "anchor", "archive", "balance scale", "bath", "bed", "beer", "bell", "bell outline", "bicycle", "binoculars", "birthday cake", "bomb", "book", "bookmark", "bookmark outline", "briefcase", "bug", "building", "building outline", "bullhorn", "bullseye", "bus", "calculator", "calendar", "calendar outline", "calendar alternate", "calendar alternate outline", "camera", "camera retro", "car", "clipboard", "clipboard outline", "cloud", "coffee", "cog", "cogs", "compass", "compass outline", "copy", "copy outline", "cube", "cubes", "cut", "envelope", "envelope outline", "envelope open", "envelope open outline", "eraser", "eye", "eye dropper", "fax", "fighter jet", "file", "file outline", "file alternate", "file alternate outline", "film", "fire", "fire extinguisher", "flag", "flag outline", "flag checkered", "flask", "futbol", "futbol outline", "gamepad", "gavel", "gem", "gem outline", "gift", "glass martini", "globe", "graduation cap", "hdd", "hdd outline", "headphones", "heart", "heart outline", "home", "hospital", "hospital outline", "hourglass", "hourglass outline", "image", "image outline", "images", "images outline", "industry", "key", "keyboard", "keyboard outline", "laptop", "leaf", "lemon", "lemon outline", "life ring", "life ring outline", "lightbulb", "lightbulb outline", "lock", "lock open", "magic", "magnet", "map", "map outline", "map marker", "map marker alternate", "map pin", "map signs", "medkit", "microchip", "microphone", "mobile", "mobile alternate", "money bill alternate", "money bill alternate outline", "moon", "moon outline", "motorcycle", "newspaper", "newspaper outline", "paint brush", "paper plane", "paper plane outline", "paperclip", "paste", "paw", "pencil alternate", "phone", "plane", "plug", "print", "puzzle piece", "road", "rocket", "save", "save outline", "search", "shield alternate", "shopping bag", "shopping basket", "shopping cart", "shower", "snowflake", "snowflake outline", "space shuttle", "star", "star outline", "sticky note", "sticky note outline", "stopwatch", "subway", "suitcase", "sun", "sun outline", "tablet", "tablet alternate", "tachometer alternate", "tag", "tags", "taxi", "thumbtack", "ticket alternate", "train", "trash", "trash alternate", "trash alternate outline", "tree", "trophy", "truck", "tv", "umbrella", "university", "unlock", "unlock alternate", "utensil spoon", "utensils", "wheelchair", "wrench"], QL = ["bell", "bell outline", "bookmark", "bookmark outline", "bullhorn", "camera", "camera retro", "cart arrow down", "cart plus", "certificate", "credit card", "credit card outline", "gem", "gem outline", "gift", "handshake", "handshake outline", "heart", "heart outline", "key", "shopping bag", "shopping basket", "shopping cart", "star", "star outline", "tag", "tags", "thumbs down", "thumbs down outline", "thumbs up", "thumbs up outline", "trophy"], JL = ["bookmark", "bookmark outline", "calendar", "calendar outline", "certificate", "circle", "circle outline", "cloud", "comment", "comment outline", "file", "file outline", "folder", "folder outline", "heart", "heart outline", "map marker", "play", "square", "square outline", "star", "star outline"], eF = ["asterisk", "certificate", "circle notch", "cog", "compass", "compass outline", "crosshairs", "life ring", "life ring outline", "snowflake", "snowflake outline", "spinner", "sun", "sun outline", "sync"], tF = ["baseball ball", "basketball ball", "bowling ball", "football ball", "futbol", "futbol outline", "golf ball", "hockey puck", "quidditch", "table tennis", "volleyball ball"], nF = ["ban", "battery empty", "battery full", "battery half", "battery quarter", "battery three quarters", "bell", "bell outline", "bell slash", "bell slash outline", "calendar", "calendar outline", "calendar alternate", "calendar alternate outline", "calendar check", "calendar check outline", "calendar minus", "calendar minus outline", "calendar plus", "calendar plus outline", "calendar times", "calendar times outline", "cart arrow down", "cart plus", "exclamation", "exclamation circle", "exclamation triangle", "eye", "eye slash", "eye slash outline", "file", "file outline", "file alternate", "file alternate outline", "folder", "folder outline", "folder open", "folder open outline", "info", "info circle", "lock", "lock open", "minus", "minus circle", "minus square", "minus square outline", "plus", "plus circle", "plus square", "plus square outline", "question", "question circle", "question circle outline", "shield alternate", "shopping cart", "sign in alternate", "sign out alternate", "thermometer empty", "thermometer full", "thermometer half", "thermometer quarter", "thermometer three quarters", "thumbs down", "thumbs down outline", "thumbs up", "thumbs up outline", "toggle off", "toggle on", "unlock", "unlock alternate"], rF = ["address book", "address book outline", "address card", "address card outline", "bed", "blind", "child", "female", "frown", "frown outline", "id badge", "id badge outline", "id card", "id card outline", "male", "meh", "meh outline", "power off", "smile", "smile outline", "street view", "user", "user outline", "user circle", "user circle outline", "user md", "user plus", "user secret", "user times", "users", "wheelchair"], aF = ["ambulance", "bicycle", "bus", "car", "fighter jet", "motorcycle", "paper plane", "paper plane outline", "plane", "rocket", "ship", "shopping cart", "space shuttle", "subway", "taxi", "train", "truck", "wheelchair"], oF = ["archive", "book", "bookmark", "bookmark outline", "edit", "edit outline", "envelope", "envelope outline", "envelope open", "envelope open outline", "eraser", "file", "file outline", "file alternate", "file alternate outline", "folder", "folder outline", "folder open", "folder open outline", "keyboard", "keyboard outline", "newspaper", "newspaper outline", "paper plane", "paper plane outline", "paperclip", "paragraph", "pen square", "pencil alternate", "quote left", "quote right", "sticky note", "sticky note outline", "thumbtack"], iF = ["500px", "accessible", "accusoft", "adn", "adversal", "affiliatetheme", "algolia", "amazon", "amazon pay", "amilia", "android", "angellist", "angrycreative", "angular", "app store", "app store ios", "apper", "apple", "apple pay", "asymmetrik", "audible", "autoprefixer", "avianex", "aviato", "aws", "bandcamp", "behance", "behance square", "bimobject", "bitbucket", "bitcoin", "bity", "black tie", "blackberry", "blogger", "blogger b", "bluetooth", "bluetooth b", "btc", "buromobelexperte", "buysellads", "cc amazon pay", "cc amex", "cc apple pay", "cc diners club", "cc discover", "cc jcb", "cc mastercard", "cc paypal", "cc stripe", "cc visa", "centercode", "chrome", "cloudscale", "cloudsmith", "cloudversify", "codepen", "codiepie", "connectdevelop", "contao", "cpanel", "creative commons", "css3", "css3 alternate", "cuttlefish", "d and d", "dashcube", "delicious", "deploydog", "deskpro", "deviantart", "digg", "digital ocean", "discord", "discourse", "dochub", "docker", "draft2digital", "dribbble", "dribbble square", "dropbox", "drupal", "dyalog", "earlybirds", "edge", "elementor", "ember", "empire", "envira", "erlang", "ethereum", "etsy", "expeditedssl", "facebook", "facebook f", "facebook messenger", "facebook square", "firefox", "first order", "firstdraft", "flickr", "flipboard", "fly", "font awesome", "font awesome alternate", "font awesome flag", "fonticons", "fonticons fi", "fort awesome", "fort awesome alternate", "forumbee", "foursquare", "free code camp", "freebsd", "get pocket", "gg", "gg circle", "git", "git square", "github", "github alternate", "github square", "gitkraken", "gitlab", "gitter", "glide", "glide g", "gofore", "goodreads", "goodreads g", "google", "google drive", "google play", "google plus", "google plus g", "google plus square", "google wallet", "gratipay", "grav", "gripfire", "grunt", "gulp", "hacker news", "hacker news square", "hips", "hire a helper", "hooli", "hotjar", "houzz", "html5", "hubspot", "imdb", "instagram", "internet explorer", "ioxhost", "itunes", "itunes note", "jenkins", "joget", "joomla", "js", "js square", "jsfiddle", "keycdn", "kickstarter", "kickstarter k", "korvue", "laravel", "lastfm", "lastfm square", "leanpub", "less", "linechat", "linkedin", "linkedin alternate", "linode", "linux", "lyft", "magento", "maxcdn", "medapps", "medium", "medium m", "medrt", "meetup", "microsoft", "mix", "mixcloud", "mizuni", "modx", "monero", "napster", "nintendo switch", "node", "node js", "npm", "ns8", "nutritionix", "odnoklassniki", "odnoklassniki square", "opencart", "openid", "opera", "optin monster", "osi", "page4", "pagelines", "palfed", "patreon", "paypal", "periscope", "phabricator", "phoenix framework", "php", "pied piper", "pied piper alternate", "pied piper pp", "pinterest", "pinterest p", "pinterest square", "playstation", "product hunt", "pushed", "python", "qq", "quinscape", "quora", "ravelry", "react", "rebel", "redriver", "reddit", "reddit alien", "reddit square", "rendact", "renren", "replyd", "resolving", "rocketchat", "rockrms", "safari", "sass", "schlix", "scribd", "searchengin", "sellcast", "sellsy", "servicestack", "shirtsinbulk", "simplybuilt", "sistrix", "skyatlas", "skype", "slack", "slack hash", "slideshare", "snapchat", "snapchat ghost", "snapchat square", "soundcloud", "speakap", "spotify", "stack exchange", "stack overflow", "staylinked", "steam", "steam square", "steam symbol", "sticker mule", "strava", "stripe", "stripe s", "studiovinari", "stumbleupon", "stumbleupon circle", "superpowers", "supple", "telegram", "telegram plane", "tencent weibo", "themeisle", "trello", "tripadvisor", "tumblr", "tumblr square", "twitch", "twitter", "twitter square", "typo3", "uber", "uikit", "uniregistry", "untappd", "usb", "ussunnah", "vaadin", "viacoin", "viadeo", "viadeo square", "viber", "vimeo", "vimeo square", "vimeo v", "vine", "vk", "vnv", "vuejs", "wechat", "weibo", "weixin", "whatsapp", "whatsapp square", "whmcs", "wikipedia w", "windows", "wordpress", "wordpress simple", "wpbeginner", "wpexplorer", "wpforms", "xbox", "xing", "xing square", "y combinator", "yahoo", "yandex", "yandex international", "yelp", "yoast", "youtube", "youtube square"], sF = kd([].concat(NL, IL, AL, RL, ML, DL, LL, FL, $L, BL, jL, WL, zL, UL, HL, YL, qL, VL, GL, KL, ZL, XL, QL, JL, eF, tF, nF, rF, aF, oF, iF)), lF = ["chess rock", "ordered list", "unordered list", "user doctor", "shield", "puzzle", "add circle", "add square", "add to calendar", "add to cart", "add user", "add", "alarm mute", "alarm", "ald", "als", "announcement", "area chart", "area graph", "arrow down cart", "asexual", "asl interpreting", "asl", "assistive listening devices", "attach", "attention", "balance", "bar", "bathtub", "battery four", "battery high", "battery low", "battery one", "battery three", "battery two", "battery zero", "birthday", "block layout", "bluetooth alternative", "broken chain", "browser", "call square", "call", "cancel", "cart", "cc", "chain", "chat", "checked calendar", "checkmark", "circle notched", "close", "cny", "cocktail", "commenting", "computer", "configure", "content", "deafness", "delete calendar", "delete", "detective", "discussions", "doctor", "dollar", "dont", "drivers license", "dropdown", "emergency", "envira gallery", "erase", "eur", "euro", "eyedropper", "factory", "favorite", "feed", "female homosexual", "file text", "file text outline", "find", "first aid", "fork", "game", "gay", "gbp", "google plus circle", "google plus official", "grab", "graduation", "grid layout", "group", "h", "hand victory", "handicap", "hard of hearing", "header", "help circle", "help", "heterosexual", "hide", "hotel", "hourglass four", "hourglass full", "hourglass one", "hourglass three", "hourglass two", "idea", "ils", "in cart", "inr", "intergender", "intersex", "jpy", "krw", "lab", "law", "legal", "lesbian", "lightning", "like", "line graph", "linkedin square", "linkify", "lira", "list layout", "magnify", "mail forward", "mail outline", "mail square", "mail", "male homosexual", "man", "marker", "mars alternate", "mars horizontal", "mars vertical", "microsoft edge", "military", "ms edge", "mute", "new pied piper", "non binary transgender", "numbered list", "options", "other gender horizontal", "other gender vertical", "other gender", "payment", "paypal card", "pencil square", "photo", "picture", "pie chart", "pie graph", "pied piper hat", "pin", "plus cart", "point", "pointing down", "pointing left", "pointing right", "pointing up", "pound", "power cord", "power", "privacy", "r circle", "rain", "record", "refresh", "remove circle", "remove from calendar", "remove user", "remove", "repeat", "rmb", "rouble", "rub", "ruble", "rupee", "s15", "selected radio", "send", "setting", "settings", "shekel", "sheqel", "shipping", "shop", "shuffle", "shutdown", "sidebar", "signing", "signup", "sliders", "soccer", "sort alphabet ascending", "sort alphabet descending", "sort ascending", "sort content ascending", "sort content descending", "sort descending", "sort numeric ascending", "sort numeric descending", "sound", "spy", "stripe card", "student", "talk", "target", "teletype", "television", "text cursor", "text telephone", "theme", "thermometer", "thumb tack", "time", "tm", "toggle down", "toggle left", "toggle right", "toggle up", "translate", "travel", "treatment", "triangle down", "triangle left", "triangle right", "triangle up", "try", "unhide", "unlinkify", "unmute", "usd", "user cancel", "user close", "user delete", "user x", "vcard", "video camera", "video play", "volume control phone", "wait", "warning circle", "warning sign", "warning", "wi-fi", "winner", "wizard", "woman", "won", "wordpress beginner", "wordpress forms", "world", "write square", "x", "yen", "zip", "zoom in", "zoom out", "zoom", "bitbucket square", "checkmark box", "circle thin", "cloud download", "cloud upload", "compose", "conversation", "credit card alternative", "currency", "dashboard", "diamond", "disk", "exchange", "external share", "external square", "external", "facebook official", "food", "hourglass zero", "level down", "level up", "log out", "meanpath", "money", "move", "pencil", "protect", "radio", "remove bookmark", "resize horizontal", "resize vertical", "sign in", "sign out", "spoon", "star half empty", "star half full", "ticket", "times rectangle", "write", "youtube play"], cF = kd([].concat(sF, lF)), uF = [
  "left dropdown"
  // nested dropdown menu direction icon
], dF = kd([].concat(cF, uF));
function fF(e, t) {
  return Cd(e, t);
}
var Zb = Ei() && process.env.NODE_ENV !== "test" ? ee.useLayoutEffect : ee.useEffect, pF = /\s+/;
function hF(e) {
  var t = [];
  return e ? (e.forEach(function(n) {
    if (typeof n.current == "string") {
      var r = n.current.split(pF);
      r.forEach(function(o) {
        t.push(o);
      });
    }
  }), t.filter(function(n, r, o) {
    return n.length > 0 && o.indexOf(n) === r;
  })) : [];
}
function mF(e, t) {
  return [t.filter(function(n) {
    return e.indexOf(n) === -1;
  }), e.filter(function(n) {
    return t.indexOf(n) === -1;
  })];
}
var Xb = /* @__PURE__ */ new Map(), Pp = function(t, n) {
  var r = hF(n), o = mF(Xb.get(t) || [], r), s = o[0], u = o[1];
  t && (s.forEach(function(c) {
    return t.classList.add(c);
  }), u.forEach(function(c) {
    return t.classList.remove(c);
  })), Xb.set(t, r);
}, gF = function() {
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
}, yl = new gF();
function vF(e, t) {
  var n = ee.useRef(), r = ee.useRef(!1);
  Zb(function() {
    if (n.current = t, r.current) {
      var o = Vu(e) ? e.current : e;
      yl.emit(o, Pp);
    }
    r.current = !0;
  }, [t]), Zb(function() {
    var o = Vu(e) ? e.current : e;
    return yl.add(o, n), yl.emit(o, Pp), function() {
      yl.del(o, n), yl.emit(o, Pp);
    };
  }, [e]);
}
var aa = zs(function(e, t) {
  return zl(e) ? C1(e, t) : [];
});
function ws(e) {
  var t = e.children, n = e.className, r = e.content, o = e.size, s = Ze(o, "icons", n), u = Ve(ws, e), c = Qe(ws, e);
  return /* @__PURE__ */ ee.createElement(c, pe({}, u, {
    className: s
  }), ht(t) ? r : t);
}
ws.handledProps = ["as", "children", "className", "content", "size"];
ws.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: Mt,
  /** Size of the icon group. */
  size: l.oneOf(aa(pr, "medium"))
} : {};
ws.defaultProps = {
  as: "i"
};
var We = /* @__PURE__ */ function(e) {
  rn(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handleClick = function(c) {
      var d = r.props.disabled;
      if (d) {
        c.preventDefault();
        return;
      }
      Be(r.props, "onClick", c, r.props);
    }, r;
  }
  var n = t.prototype;
  return n.getIconAriaOptions = function() {
    var o = {}, s = this.props, u = s["aria-label"], c = s["aria-hidden"];
    return It(u) ? o["aria-hidden"] = "true" : o["aria-label"] = u, It(c) || (o["aria-hidden"] = c), o;
  }, n.render = function() {
    var o = this.props, s = o.bordered, u = o.circular, c = o.className, d = o.color, p = o.corner, h = o.disabled, m = o.fitted, g = o.flipped, y = o.inverted, b = o.link, _ = o.loading, w = o.name, k = o.rotated, F = o.size, E = Ze(d, w, F, q(s, "bordered"), q(u, "circular"), q(h, "disabled"), q(m, "fitted"), q(y, "inverted"), q(b, "link"), q(_, "loading"), sn(p, "corner"), Qn(g, "flipped"), Qn(k, "rotated"), "icon", c), I = Ve(t, this.props), S = Qe(t, this.props), P = this.getIconAriaOptions();
    return /* @__PURE__ */ ee.createElement(S, pe({}, I, P, {
      className: E,
      onClick: this.handleClick
    }));
  }, t;
}(V_);
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
  color: l.oneOf(la),
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
  name: D1(dF),
  /** Icon can rotated. */
  rotated: l.oneOf(["clockwise", "counterclockwise"]),
  /** Size of the icon. */
  size: l.oneOf(aa(pr, "medium")),
  /** Icon can have an aria label. */
  "aria-hidden": l.string,
  /** Icon can have an aria label. */
  "aria-label": l.string
} : {};
We.defaultProps = {
  as: "i"
};
We.Group = ws;
We.create = Qt(We, function(e) {
  return {
    name: e
  };
});
var Qb = function(t) {
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
var je = {
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
    return Qb(t) ? t.keyCode || t.which || this[t.key] : this[t];
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
    var n = Qb(t);
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
je.Spacebar = je[" "];
je.Digit0 = je[0];
je.Digit1 = je[1];
je.Digit2 = je[2];
je.Digit3 = je[3];
je.Digit4 = je[4];
je.Digit5 = je[5];
je.Digit6 = je[6];
je.Digit7 = je[7];
je.Digit8 = je[8];
je.Digit9 = je[9];
je.Tilde = je["~"];
je.GraveAccent = je["`"];
je.ExclamationPoint = je["!"];
je.AtSign = je["@"];
je.PoundSign = je["#"];
je.PercentSign = je["%"];
je.Caret = je["^"];
je.Ampersand = je["&"];
je.PlusSign = je["+"];
je.MinusSign = je["-"];
je.EqualsSign = je["="];
je.DivisionSign = je["/"];
je.MultiplicationSign = je["*"];
je.Comma = je[","];
je.Decimal = je["."];
je.Colon = je[":"];
je.Semicolon = je[";"];
je.Pipe = je["|"];
je.BackSlash = je["\\"];
je.QuestionMark = je["?"];
je.SingleQuote = je["'"];
je.DoubleQuote = je['"'];
je.LeftCurlyBrace = je["{"];
je.RightCurlyBrace = je["}"];
je.LeftParenthesis = je["("];
je.RightParenthesis = je[")"];
je.LeftAngleBracket = je["<"];
je.RightAngleBracket = je[">"];
je.LeftSquareBracket = je["["];
je.RightSquareBracket = je["]"];
var yF = je;
const wn = /* @__PURE__ */ mc(yF);
var bh = { exports: {} }, qt = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jb;
function bF() {
  if (Jb) return qt;
  Jb = 1;
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
  return qt.ContextConsumer = u, qt.ContextProvider = s, qt.Element = e, qt.ForwardRef = d, qt.Fragment = n, qt.Lazy = g, qt.Memo = m, qt.Portal = t, qt.Profiler = o, qt.StrictMode = r, qt.Suspense = p, qt.SuspenseList = h, qt.isAsyncMode = function() {
    return !1;
  }, qt.isConcurrentMode = function() {
    return !1;
  }, qt.isContextConsumer = function(w) {
    return _(w) === u;
  }, qt.isContextProvider = function(w) {
    return _(w) === s;
  }, qt.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === e;
  }, qt.isForwardRef = function(w) {
    return _(w) === d;
  }, qt.isFragment = function(w) {
    return _(w) === n;
  }, qt.isLazy = function(w) {
    return _(w) === g;
  }, qt.isMemo = function(w) {
    return _(w) === m;
  }, qt.isPortal = function(w) {
    return _(w) === t;
  }, qt.isProfiler = function(w) {
    return _(w) === o;
  }, qt.isStrictMode = function(w) {
    return _(w) === r;
  }, qt.isSuspense = function(w) {
    return _(w) === p;
  }, qt.isSuspenseList = function(w) {
    return _(w) === h;
  }, qt.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === n || w === o || w === r || w === p || w === h || w === y || typeof w == "object" && w !== null && (w.$$typeof === g || w.$$typeof === m || w.$$typeof === s || w.$$typeof === u || w.$$typeof === d || w.$$typeof === b || w.getModuleId !== void 0);
  }, qt.typeOf = _, qt;
}
var Vt = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var e0;
function _F() {
  return e0 || (e0 = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), u = Symbol.for("react.context"), c = Symbol.for("react.server_context"), d = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), b = !1, _ = !1, w = !1, k = !1, F = !1, E;
    E = Symbol.for("react.module.reference");
    function I(G) {
      return !!(typeof G == "string" || typeof G == "function" || G === n || G === o || F || G === r || G === p || G === h || k || G === y || b || _ || w || typeof G == "object" && G !== null && (G.$$typeof === g || G.$$typeof === m || G.$$typeof === s || G.$$typeof === u || G.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      G.$$typeof === E || G.getModuleId !== void 0));
    }
    function S(G) {
      if (typeof G == "object" && G !== null) {
        var ie = G.$$typeof;
        switch (ie) {
          case e:
            var Pe = G.type;
            switch (Pe) {
              case n:
              case o:
              case r:
              case p:
              case h:
                return Pe;
              default:
                var Z = Pe && Pe.$$typeof;
                switch (Z) {
                  case c:
                  case u:
                  case d:
                  case g:
                  case m:
                  case s:
                    return Z;
                  default:
                    return ie;
                }
            }
          case t:
            return ie;
        }
      }
    }
    var P = u, C = s, T = e, A = d, B = n, U = g, ne = m, K = t, ae = o, he = r, ge = p, Ne = h, ce = !1, me = !1;
    function te(G) {
      return ce || (ce = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function re(G) {
      return me || (me = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function se(G) {
      return S(G) === u;
    }
    function be(G) {
      return S(G) === s;
    }
    function Oe(G) {
      return typeof G == "object" && G !== null && G.$$typeof === e;
    }
    function Ee(G) {
      return S(G) === d;
    }
    function fe(G) {
      return S(G) === n;
    }
    function Te(G) {
      return S(G) === g;
    }
    function De(G) {
      return S(G) === m;
    }
    function W(G) {
      return S(G) === t;
    }
    function z(G) {
      return S(G) === o;
    }
    function $(G) {
      return S(G) === r;
    }
    function M(G) {
      return S(G) === p;
    }
    function V(G) {
      return S(G) === h;
    }
    Vt.ContextConsumer = P, Vt.ContextProvider = C, Vt.Element = T, Vt.ForwardRef = A, Vt.Fragment = B, Vt.Lazy = U, Vt.Memo = ne, Vt.Portal = K, Vt.Profiler = ae, Vt.StrictMode = he, Vt.Suspense = ge, Vt.SuspenseList = Ne, Vt.isAsyncMode = te, Vt.isConcurrentMode = re, Vt.isContextConsumer = se, Vt.isContextProvider = be, Vt.isElement = Oe, Vt.isForwardRef = Ee, Vt.isFragment = fe, Vt.isLazy = Te, Vt.isMemo = De, Vt.isPortal = W, Vt.isProfiler = z, Vt.isStrictMode = $, Vt.isSuspense = M, Vt.isSuspenseList = V, Vt.isValidElementType = I, Vt.typeOf = S;
  }()), Vt;
}
process.env.NODE_ENV === "production" ? bh.exports = bF() : bh.exports = _F();
var wF = bh.exports;
function xF(e) {
  if (e && (ee.Children.only(e), wF.isFragment(e)))
    throw new Error('An "React.Fragment" cannot be used as a `trigger`.');
}
var Nd = /* @__PURE__ */ function(e) {
  rn(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handleRef = function(c) {
      ba(r.props.innerRef, c);
    }, r;
  }
  var n = t.prototype;
  return n.componentDidMount = function() {
    Be(this.props, "onMount", null, this.props);
  }, n.componentWillUnmount = function() {
    Be(this.props, "onUnmount", null, this.props);
  }, n.render = function() {
    if (!Ei()) return null;
    var o = this.props, s = o.children, u = o.mountNode, c = u === void 0 ? document.body : u;
    return /* @__PURE__ */ K_(/* @__PURE__ */ ee.createElement(dr, {
      innerRef: this.handleRef
    }, s), c);
  }, t;
}(er);
Nd.handledProps = ["children", "innerRef", "mountNode", "onMount", "onUnmount"];
Nd.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Primary content. */
  children: l.node.isRequired,
  /** Called with a ref to the inner node. */
  innerRef: F1,
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
var ra = /* @__PURE__ */ function(e) {
  rn(t, e);
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
      r.props.closeOnEscape && wn.getCode(c) === wn.Escape && r.close(c);
    }, r.handlePortalMouseLeave = function(c) {
      var d = r.props, p = d.closeOnPortalMouseLeave, h = d.mouseLeaveDelay;
      p && c.target === r.contentRef.current && (r.mouseLeaveTimer = r.closeWithTimeout(c, h));
    }, r.handlePortalMouseEnter = function() {
      var c = r.props.closeOnPortalMouseLeave;
      c && clearTimeout(r.mouseLeaveTimer);
    }, r.handleTriggerBlur = function(c) {
      for (var d = r.props, p = d.trigger, h = d.closeOnTriggerBlur, m = arguments.length, g = new Array(m > 1 ? m - 1 : 0), y = 1; y < m; y++)
        g[y - 1] = arguments[y];
      Be.apply(void 0, [p, "props.onBlur", c].concat(g));
      var b = c.relatedTarget || document.activeElement, _ = Be(r.contentRef.current, "contains", b);
      !h || _ || r.close(c);
    }, r.handleTriggerClick = function(c) {
      for (var d = r.props, p = d.trigger, h = d.closeOnTriggerClick, m = d.openOnTriggerClick, g = r.state.open, y = arguments.length, b = new Array(y > 1 ? y - 1 : 0), _ = 1; _ < y; _++)
        b[_ - 1] = arguments[_];
      Be.apply(void 0, [p, "props.onClick", c].concat(b)), g && h ? r.close(c) : !g && m && r.open(c);
    }, r.handleTriggerFocus = function(c) {
      for (var d = r.props, p = d.trigger, h = d.openOnTriggerFocus, m = arguments.length, g = new Array(m > 1 ? m - 1 : 0), y = 1; y < m; y++)
        g[y - 1] = arguments[y];
      Be.apply(void 0, [p, "props.onFocus", c].concat(g)), h && r.open(c);
    }, r.handleTriggerMouseLeave = function(c) {
      clearTimeout(r.mouseEnterTimer);
      for (var d = r.props, p = d.trigger, h = d.closeOnTriggerMouseLeave, m = d.mouseLeaveDelay, g = arguments.length, y = new Array(g > 1 ? g - 1 : 0), b = 1; b < g; b++)
        y[b - 1] = arguments[b];
      Be.apply(void 0, [p, "props.onMouseLeave", c].concat(y)), h && (r.mouseLeaveTimer = r.closeWithTimeout(c, m));
    }, r.handleTriggerMouseEnter = function(c) {
      clearTimeout(r.mouseLeaveTimer);
      for (var d = r.props, p = d.trigger, h = d.mouseEnterDelay, m = d.openOnTriggerMouseEnter, g = arguments.length, y = new Array(g > 1 ? g - 1 : 0), b = 1; b < g; b++)
        y[b - 1] = arguments[b];
      Be.apply(void 0, [p, "props.onMouseEnter", c].concat(y)), m && (r.mouseEnterTimer = r.openWithTimeout(c, h));
    }, r.open = function(c) {
      Be(r.props, "onOpen", c, pe({}, r.props, {
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
      }), Be(r.props, "onClose", c, pe({}, r.props, {
        open: !1
      }));
    }, r.closeWithTimeout = function(c, d) {
      var p = pe({}, c);
      return setTimeout(function() {
        return r.close(p);
      }, d || 0);
    }, r.handleMount = function() {
      Be(r.props, "onMount", null, r.props);
    }, r.handleUnmount = function() {
      Be(r.props, "onUnmount", null, r.props);
    }, r.handleTriggerRef = function(c) {
      r.triggerRef.current = c, ba(r.props.triggerRef, c);
    }, r;
  }
  var n = t.prototype;
  return n.componentWillUnmount = function() {
    clearTimeout(this.mouseEnterTimer), clearTimeout(this.mouseLeaveTimer);
  }, n.render = function() {
    var o = this.props, s = o.children, u = o.eventPool, c = o.mountNode, d = o.trigger, p = this.state.open;
    return process.env.NODE_ENV !== "production" && xF(d), /* @__PURE__ */ ee.createElement(ee.Fragment, null, p && /* @__PURE__ */ ee.createElement(ee.Fragment, null, /* @__PURE__ */ ee.createElement(Nd, {
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
    })), d && /* @__PURE__ */ ee.createElement(dr, {
      innerRef: this.handleTriggerRef
    }, /* @__PURE__ */ ee.cloneElement(d, {
      onBlur: this.handleTriggerBlur,
      onClick: this.handleTriggerClick,
      onFocus: this.handleTriggerFocus,
      onMouseLeave: this.handleTriggerMouseLeave,
      onMouseEnter: this.handleTriggerMouseEnter
    })));
  }, t;
}(Hs);
ra.handledProps = ["children", "closeOnDocumentClick", "closeOnEscape", "closeOnPortalMouseLeave", "closeOnTriggerBlur", "closeOnTriggerClick", "closeOnTriggerMouseLeave", "defaultOpen", "eventPool", "mountNode", "mouseEnterDelay", "mouseLeaveDelay", "onClose", "onMount", "onOpen", "onUnmount", "open", "openOnTriggerClick", "openOnTriggerFocus", "openOnTriggerMouseEnter", "trigger", "triggerRef"];
ra.propTypes = process.env.NODE_ENV !== "production" ? {
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
  triggerRef: F1
} : {};
ra.defaultProps = {
  closeOnDocumentClick: !0,
  closeOnEscape: !0,
  eventPool: "default",
  openOnTriggerClick: !0
};
ra.autoControlledProps = ["open"];
ra.Inner = Nd;
function Ul(e) {
  var t = e.blurring, n = e.className, r = e.children, o = e.content, s = e.dimmed, u = Ze(q(t, "blurring"), q(s, "dimmed"), "dimmable", n), c = Ve(Ul, e), d = Qe(Ul, e);
  return /* @__PURE__ */ ee.createElement(d, pe({}, c, {
    className: u
  }), ht(r) ? o : r);
}
Ul.handledProps = ["as", "blurring", "children", "className", "content", "dimmed"];
Ul.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** A dimmable element can blur its contents. */
  blurring: l.bool,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: Mt,
  /** Controls whether or not the dim is displayed. */
  dimmed: l.bool
} : {};
var Hl = /* @__PURE__ */ function(e) {
  rn(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.containerRef = /* @__PURE__ */ xr(), r.contentRef = /* @__PURE__ */ xr(), r.handleClick = function(c) {
      var d = r.contentRef.current;
      Be(r.props, "onClick", c, r.props), !(d && d !== c.target && Io(d, c)) && Be(r.props, "onClickOutside", c, r.props);
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
    var o = this.props, s = o.active, u = o.children, c = o.className, d = o.content, p = o.disabled, h = o.inverted, m = o.page, g = o.simple, y = o.verticalAlign, b = Ze("ui", q(s, "active transition visible"), q(p, "disabled"), q(h, "inverted"), q(m, "page"), q(g, "simple"), Jo(y), "dimmer", c), _ = Ve(t, this.props), w = Qe(t, this.props), k = ht(u) ? d : u;
    return /* @__PURE__ */ ee.createElement(dr, {
      innerRef: this.containerRef
    }, /* @__PURE__ */ ee.createElement(w, pe({}, _, {
      className: b,
      onClick: this.handleClick
    }), k && /* @__PURE__ */ ee.createElement("div", {
      className: "content",
      ref: this.contentRef
    }, k)));
  }, t;
}(er);
Hl.handledProps = ["active", "as", "children", "className", "content", "disabled", "inverted", "onClick", "onClickOutside", "page", "simple", "verticalAlign"];
Hl.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** An active dimmer will dim its parent container. */
  active: l.bool,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: Mt,
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
  rn(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handlePortalMount = function() {
      Ei() && (document.body.classList.add("dimmed"), document.body.classList.add("dimmable"));
    }, r.handlePortalUnmount = function() {
      Ei() && (document.body.classList.remove("dimmed"), document.body.classList.remove("dimmable"));
    }, r;
  }
  var n = t.prototype;
  return n.render = function() {
    var o = this.props, s = o.active, u = o.page, c = Ve(t, this.props);
    return u ? /* @__PURE__ */ ee.createElement(ra, {
      closeOnEscape: !1,
      closeOnDocumentClick: !1,
      onMount: this.handlePortalMount,
      onUnmount: this.handlePortalUnmount,
      open: s,
      openOnTriggerClick: !1
    }, /* @__PURE__ */ ee.createElement(Hl, pe({}, c, {
      active: s,
      page: u
    }))) : /* @__PURE__ */ ee.createElement(Hl, pe({}, c, {
      active: s,
      page: u
    }));
  }, t;
}(er);
Mo.handledProps = ["active", "page"];
Mo.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An active dimmer will dim its parent container. */
  active: l.bool,
  /** A dimmer can be formatted to be fixed to the page. */
  page: l.bool
} : {};
Mo.Dimmable = Ul;
Mo.Inner = Hl;
Mo.create = Qt(Mo, function(e) {
  return {
    content: e
  };
});
function Yl(e) {
  var t = e.children, n = e.className, r = e.content, o = e.size, s = Ze("ui", o, n, "images"), u = Ve(Yl, e), c = Qe(Yl, e);
  return /* @__PURE__ */ ee.createElement(c, pe({}, u, {
    className: s
  }), ht(t) ? r : t);
}
Yl.handledProps = ["as", "children", "className", "content", "size"];
Yl.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: Mt,
  /** A group of images can be formatted to have the same size. */
  size: l.oneOf(pr)
} : {};
function Er(e) {
  var t = e.avatar, n = e.bordered, r = e.centered, o = e.children, s = e.circular, u = e.className, c = e.content, d = e.dimmer, p = e.disabled, h = e.floated, m = e.fluid, g = e.hidden, y = e.href, b = e.inline, _ = e.label, w = e.rounded, k = e.size, F = e.spaced, E = e.verticalAlign, I = e.wrapped, S = e.ui, P = Ze(q(S, "ui"), k, q(t, "avatar"), q(n, "bordered"), q(s, "circular"), q(r, "centered"), q(p, "disabled"), q(m, "fluid"), q(g, "hidden"), q(b, "inline"), q(w, "rounded"), sn(F, "spaced"), Qn(h, "floated"), Jo(E), "image", u), C = Ve(Er, e), T = xm(C, {
    htmlProps: sL
  }), A = T[0], B = T[1], U = Qe(Er, e, function() {
    if (!It(d) || !It(_) || !It(I) || !ht(o))
      return "div";
  });
  return ht(o) ? ht(c) ? U === "img" ? /* @__PURE__ */ ee.createElement(U, pe({}, B, A, {
    className: P
  })) : /* @__PURE__ */ ee.createElement(U, pe({}, B, {
    className: P,
    href: y
  }), Mo.create(d, {
    autoGenerateKey: !1
  }), fr.create(_, {
    autoGenerateKey: !1
  }), /* @__PURE__ */ ee.createElement("img", A)) : /* @__PURE__ */ ee.createElement(U, pe({}, C, {
    className: P
  }), c) : /* @__PURE__ */ ee.createElement(U, pe({}, C, {
    className: P
  }), o);
}
Er.handledProps = ["as", "avatar", "bordered", "centered", "children", "circular", "className", "content", "dimmer", "disabled", "floated", "fluid", "hidden", "href", "inline", "label", "rounded", "size", "spaced", "ui", "verticalAlign", "wrapped"];
Er.Group = Yl;
Er.propTypes = process.env.NODE_ENV !== "production" ? {
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
  content: Mt,
  /** An image can show that it is disabled and cannot be selected. */
  disabled: l.bool,
  /** Shorthand for Dimmer. */
  dimmer: St,
  /** An image can sit to the left or right of other content. */
  floated: l.oneOf(wc),
  /** An image can take up the width of its container. */
  fluid: $t([l.bool, Kt(["size"])]),
  /** An image can be hidden. */
  hidden: l.bool,
  /** Renders the Image as an <a> tag with this href. */
  href: l.string,
  /** An image may appear inline. */
  inline: l.bool,
  /** Shorthand for Label. */
  label: St,
  /** An image may appear rounded. */
  rounded: l.bool,
  /** An image may appear at different sizes. */
  size: l.oneOf(pr),
  /** An image can specify that it needs an additional spacing to separate it from nearby content. */
  spaced: l.oneOfType([l.bool, l.oneOf(["left", "right"])]),
  /** Whether or not to add the ui className. */
  ui: l.bool,
  /** An image can specify its vertical alignment. */
  verticalAlign: l.oneOf(Ui),
  /** An image can render wrapped in a `div.ui.image` as alternative HTML markup. */
  wrapped: l.bool
} : {};
Er.defaultProps = {
  as: "img",
  ui: !0
};
Er.create = Qt(Er, function(e) {
  return {
    src: e
  };
});
function Do(e) {
  var t = e.children, n = e.className, r = e.content, o = Ze("detail", n), s = Ve(Do, e), u = Qe(Do, e);
  return /* @__PURE__ */ ee.createElement(u, pe({}, s, {
    className: o
  }), ht(t) ? r : t);
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
  content: Mt
} : {};
Do.create = Qt(Do, function(e) {
  return {
    content: e
  };
});
function ql(e) {
  var t = e.children, n = e.circular, r = e.className, o = e.color, s = e.content, u = e.size, c = e.tag, d = Ze("ui", o, u, q(n, "circular"), q(c, "tag"), "labels", r), p = Ve(ql, e), h = Qe(ql, e);
  return /* @__PURE__ */ ee.createElement(h, pe({}, p, {
    className: d
  }), ht(t) ? s : t);
}
ql.handledProps = ["as", "children", "circular", "className", "color", "content", "size", "tag"];
ql.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Labels can share shapes. */
  circular: l.bool,
  /** Additional classes. */
  className: l.string,
  /** Label group can share colors together. */
  color: l.oneOf(la),
  /** Shorthand for primary content. */
  content: Mt,
  /** Label group can share sizes together. */
  size: l.oneOf(pr),
  /** Label group can share tag formatting. */
  tag: l.bool
} : {};
var fr = /* @__PURE__ */ function(e) {
  rn(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handleClick = function(c) {
      var d = r.props.onClick;
      d && d(c, r.props);
    }, r.handleIconOverrides = function(c) {
      return {
        onClick: function(p) {
          Be(c, "onClick", p), Be(r.props, "onRemove", p, r.props);
        }
      };
    }, r;
  }
  var n = t.prototype;
  return n.render = function() {
    var o = this.props, s = o.active, u = o.attached, c = o.basic, d = o.children, p = o.circular, h = o.className, m = o.color, g = o.content, y = o.corner, b = o.detail, _ = o.empty, w = o.floating, k = o.horizontal, F = o.icon, E = o.image, I = o.onRemove, S = o.pointing, P = o.prompt, C = o.removeIcon, T = o.ribbon, A = o.size, B = o.tag, U = S === !0 && "pointing" || (S === "left" || S === "right") && S + " pointing" || (S === "above" || S === "below") && "pointing " + S, ne = Ze("ui", m, U, A, q(s, "active"), q(c, "basic"), q(p, "circular"), q(_, "empty"), q(w, "floating"), q(k, "horizontal"), q(E === !0, "image"), q(P, "prompt"), q(B, "tag"), sn(y, "corner"), sn(T, "ribbon"), Qn(u, "attached"), "label", h), K = Ve(t, this.props), ae = Qe(t, this.props);
    if (!ht(d))
      return /* @__PURE__ */ ee.createElement(ae, pe({}, K, {
        className: ne,
        onClick: this.handleClick
      }), d);
    var he = ps(C) ? "delete" : C;
    return /* @__PURE__ */ ee.createElement(ae, pe({
      className: ne,
      onClick: this.handleClick
    }, K), We.create(F, {
      autoGenerateKey: !1
    }), typeof E != "boolean" && Er.create(E, {
      autoGenerateKey: !1
    }), g, Do.create(b, {
      autoGenerateKey: !1
    }), I && We.create(he, {
      autoGenerateKey: !1,
      overrideProps: this.handleIconOverrides
    }));
  }, t;
}(er);
fr.handledProps = ["active", "as", "attached", "basic", "children", "circular", "className", "color", "content", "corner", "detail", "empty", "floating", "horizontal", "icon", "image", "onClick", "onRemove", "pointing", "prompt", "removeIcon", "ribbon", "size", "tag"];
fr.propTypes = process.env.NODE_ENV !== "production" ? {
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
  color: l.oneOf(la),
  /** Shorthand for primary content. */
  content: Mt,
  /** A label can position itself in the corner of an element. */
  corner: l.oneOfType([l.bool, l.oneOf(["left", "right"])]),
  /** Shorthand for LabelDetail. */
  detail: St,
  /** Formats the label as a dot. */
  empty: $t([l.bool, Po(["circular"])]),
  /** Float above another element in the upper right corner. */
  floating: l.bool,
  /** A horizontal label is formatted to label content along-side it horizontally. */
  horizontal: l.bool,
  /** Shorthand for Icon. */
  icon: St,
  /** A label can be formatted to emphasize an image or prop can be used as shorthand for Image. */
  image: l.oneOfType([l.bool, St]),
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
  removeIcon: St,
  /** A label can appear as a ribbon attaching itself to an element. */
  ribbon: l.oneOfType([l.bool, l.oneOf(["right"])]),
  /** A label can have different sizes. */
  size: l.oneOf(pr),
  /** A label can appear as a tag. */
  tag: l.bool
} : {};
fr.Detail = Do;
fr.Group = ql;
fr.create = Qt(fr, function(e) {
  return {
    content: e
  };
});
function Vl(e) {
  var t = e.children, n = e.className, r = e.content, o = e.hidden, s = e.visible, u = Ze(q(s, "visible"), q(o, "hidden"), "content", n), c = Ve(Vl, e), d = Qe(Vl, e);
  return /* @__PURE__ */ ee.createElement(d, pe({}, c, {
    className: u
  }), ht(t) ? r : t);
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
  content: Mt,
  /** Initially hidden, visible on hover. */
  hidden: l.bool,
  /** Initially visible, hidden on hover. */
  visible: l.bool
} : {};
function Gl(e) {
  var t = e.attached, n = e.basic, r = e.buttons, o = e.children, s = e.className, u = e.color, c = e.compact, d = e.content, p = e.floated, h = e.fluid, m = e.icon, g = e.inverted, y = e.labeled, b = e.negative, _ = e.positive, w = e.primary, k = e.secondary, F = e.size, E = e.toggle, I = e.vertical, S = e.widths, P = Ze("ui", u, F, q(n, "basic"), q(c, "compact"), q(h, "fluid"), q(m, "icon"), q(g, "inverted"), q(y, "labeled"), q(b, "negative"), q(_, "positive"), q(w, "primary"), q(k, "secondary"), q(E, "toggle"), q(I, "vertical"), sn(t, "attached"), Qn(p, "floated"), Zn(S), "buttons", s), C = Ve(Gl, e), T = Qe(Gl, e);
  return It(r) ? /* @__PURE__ */ ee.createElement(T, pe({}, C, {
    className: P
  }), ht(o) ? d : o) : /* @__PURE__ */ ee.createElement(T, pe({}, C, {
    className: P
  }), Sn(r, function(A) {
    return mt.create(A);
  }));
}
Gl.handledProps = ["as", "attached", "basic", "buttons", "children", "className", "color", "compact", "content", "floated", "fluid", "icon", "inverted", "labeled", "negative", "positive", "primary", "secondary", "size", "toggle", "vertical", "widths"];
Gl.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Groups can be attached to other content. */
  attached: l.oneOfType([l.bool, l.oneOf(["left", "right", "top", "bottom"])]),
  /** Groups can be less pronounced. */
  basic: l.bool,
  /** Array of shorthand Button values. */
  buttons: _c,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Groups can have a shared color. */
  color: l.oneOf(la),
  /** Groups can reduce their padding to fit into tighter spaces. */
  compact: l.bool,
  /** Shorthand for primary content. */
  content: Mt,
  /** Groups can be aligned to the left or right of its container. */
  floated: l.oneOf(wc),
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
  size: l.oneOf(pr),
  /** Groups can be formatted to toggle on and off. */
  toggle: l.bool,
  /** Groups can be formatted to appear vertically. */
  vertical: l.bool,
  /** Groups can have their widths divided evenly. */
  widths: l.oneOf(lr)
} : {};
function Kl(e) {
  var t = e.className, n = e.text, r = Ze("or", t), o = Ve(Kl, e), s = Qe(Kl, e);
  return /* @__PURE__ */ ee.createElement(s, pe({}, o, {
    className: r,
    "data-text": n
  }));
}
Kl.handledProps = ["as", "className", "text"];
Kl.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Additional classes. */
  className: l.string,
  /** Or buttons can have their text localized, or adjusted by using the text prop. */
  text: l.oneOfType([l.number, l.string])
} : {};
var mt = /* @__PURE__ */ function(e) {
  rn(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.ref = /* @__PURE__ */ xr(), r.computeElementType = function() {
      var c = r.props, d = c.attached, p = c.label;
      if (!It(d) || !It(p)) return "div";
    }, r.computeTabIndex = function(c) {
      var d = r.props, p = d.disabled, h = d.tabIndex;
      if (!It(h)) return h;
      if (p) return -1;
      if (c === "div") return 0;
    }, r.focus = function(c) {
      return Be(r.ref.current, "focus", c);
    }, r.handleClick = function(c) {
      var d = r.props.disabled;
      if (d) {
        c.preventDefault();
        return;
      }
      Be(r.props, "onClick", c, r.props);
    }, r.hasIconClass = function() {
      var c = r.props, d = c.labelPosition, p = c.children, h = c.content, m = c.icon;
      return m === !0 ? !0 : m && (d || ht(p) && It(h));
    }, r;
  }
  var n = t.prototype;
  return n.computeButtonAriaRole = function(o) {
    var s = this.props.role;
    if (!It(s)) return s;
    if (o !== "button") return "button";
  }, n.render = function() {
    var o = this.props, s = o.active, u = o.animated, c = o.attached, d = o.basic, p = o.children, h = o.circular, m = o.className, g = o.color, y = o.compact, b = o.content, _ = o.disabled, w = o.floated, k = o.fluid, F = o.icon, E = o.inverted, I = o.label, S = o.labelPosition, P = o.loading, C = o.negative, T = o.positive, A = o.primary, B = o.secondary, U = o.size, ne = o.toggle, K = o.type, ae = Ze(g, U, q(s, "active"), q(d, "basic"), q(h, "circular"), q(y, "compact"), q(k, "fluid"), q(this.hasIconClass(), "icon"), q(E, "inverted"), q(P, "loading"), q(C, "negative"), q(T, "positive"), q(A, "primary"), q(B, "secondary"), q(ne, "toggle"), sn(u, "animated"), sn(c, "attached")), he = Ze(sn(S || !!I, "labeled")), ge = Ze(q(_, "disabled"), Qn(w, "floated")), Ne = Ve(t, this.props), ce = Qe(t, this.props, this.computeElementType), me = this.computeTabIndex(ce);
    if (!It(I)) {
      var te = Ze("ui", ae, "button", m), re = Ze("ui", he, "button", m, ge), se = fr.create(I, {
        defaultProps: {
          basic: !0,
          pointing: S === "left" ? "right" : "left"
        },
        autoGenerateKey: !1
      });
      return /* @__PURE__ */ ee.createElement(ce, pe({}, Ne, {
        className: re,
        onClick: this.handleClick
      }), S === "left" && se, /* @__PURE__ */ ee.createElement(dr, {
        innerRef: this.ref
      }, /* @__PURE__ */ ee.createElement("button", {
        className: te,
        "aria-pressed": ne ? !!s : void 0,
        disabled: _,
        type: K,
        tabIndex: me
      }, We.create(F, {
        autoGenerateKey: !1
      }), " ", b)), (S === "right" || !S) && se);
    }
    var be = Ze("ui", ae, ge, he, "button", m), Oe = !ht(p), Ee = this.computeButtonAriaRole(ce);
    return /* @__PURE__ */ ee.createElement(dr, {
      innerRef: this.ref
    }, /* @__PURE__ */ ee.createElement(ce, pe({}, Ne, {
      className: be,
      "aria-pressed": ne ? !!s : void 0,
      disabled: _ && ce === "button" || void 0,
      onClick: this.handleClick,
      role: Ee,
      type: K,
      tabIndex: me
    }), Oe && p, !Oe && We.create(F, {
      autoGenerateKey: !1
    }), !Oe && b));
  }, t;
}(er);
mt.handledProps = ["active", "animated", "as", "attached", "basic", "children", "circular", "className", "color", "compact", "content", "disabled", "floated", "fluid", "icon", "inverted", "label", "labelPosition", "loading", "negative", "onClick", "positive", "primary", "role", "secondary", "size", "tabIndex", "toggle", "type"];
mt.propTypes = process.env.NODE_ENV !== "production" ? {
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
  children: $t([l.node, Kt(["label"]), L1({
    icon: l.oneOfType([l.string.isRequired, l.object.isRequired, l.element.isRequired])
  }, Kt(["icon"]))]),
  /** A button can be circular. */
  circular: l.bool,
  /** Additional classes. */
  className: l.string,
  /** A button can have different colors */
  color: l.oneOf([].concat(la, ["facebook", "google plus", "instagram", "linkedin", "twitter", "vk", "youtube"])),
  /** A button can reduce its padding to fit into tighter spaces. */
  compact: l.bool,
  /** Shorthand for primary content. */
  content: Mt,
  /** A button can show it is currently unable to be interacted with. */
  disabled: l.bool,
  /** A button can be aligned to the left or right of its container. */
  floated: l.oneOf(wc),
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
  size: l.oneOf(pr),
  /** A button can receive focus. */
  tabIndex: l.oneOfType([l.number, l.string]),
  /** A button can be formatted to toggle on and off. */
  toggle: l.bool,
  /** The type of the HTML element. */
  type: l.oneOf(["button", "submit", "reset"])
} : {};
mt.defaultProps = {
  as: "button"
};
mt.Content = Vl;
mt.Group = Gl;
mt.Or = Kl;
mt.create = Qt(mt, function(e) {
  return {
    content: e
  };
});
function q1(e, t, n, r) {
  var o = -1, s = e == null ? 0 : e.length;
  for (r && s && (n = e[++o]); ++o < s; )
    n = t(n, e[o], o, e);
  return n;
}
function EF(e, t, n, r, o) {
  return o(e, function(s, u, c) {
    n = r ? (r = !1, s) : t(n, s, u, c);
  }), n;
}
function Em(e, t, n) {
  var r = _n(e) ? q1 : EF, o = arguments.length < 3;
  return r(e, Qo(t), n, o, Us);
}
var CF = function(t, n, r, o) {
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
const Al = /* @__PURE__ */ mc(CF);
var xs = /* @__PURE__ */ function(e) {
  rn(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handleButtonOverrides = function(c) {
      return {
        onClick: function(p, h) {
          Be(c, "onClick", p, h), Be(r.props, "onActionClick", p, h);
        }
      };
    }, r;
  }
  var n = t.prototype;
  return n.render = function() {
    var o = this, s = this.props, u = s.actions, c = s.children, d = s.className, p = s.content, h = Ze("actions", d), m = Ve(t, this.props), g = Qe(t, this.props);
    return ht(c) ? ht(p) ? /* @__PURE__ */ ee.createElement(g, pe({}, m, {
      className: h
    }), Sn(u, function(y) {
      return mt.create(y, {
        overrideProps: o.handleButtonOverrides
      });
    })) : /* @__PURE__ */ ee.createElement(g, pe({}, m, {
      className: h
    }), p) : /* @__PURE__ */ ee.createElement(g, pe({}, m, {
      className: h
    }), c);
  }, t;
}(er);
xs.handledProps = ["actions", "as", "children", "className", "content", "onActionClick"];
xs.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Array of shorthand buttons. */
  actions: _c,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: Mt,
  /**
   * Action onClick handler when using shorthand `actions`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props from the clicked action.
   */
  onActionClick: $t([Kt(["children"]), l.func])
} : {};
xs.create = Qt(xs, function(e) {
  return {
    actions: e
  };
});
function Lo(e) {
  var t = e.children, n = e.className, r = e.content, o = e.image, s = e.scrolling, u = Ze(n, q(o, "image"), q(s, "scrolling"), "content"), c = Ve(Lo, e), d = Qe(Lo, e);
  return /* @__PURE__ */ ee.createElement(d, pe({}, c, {
    className: u
  }), ht(t) ? r : t);
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
  content: Mt,
  /** A modal can contain image content. */
  image: l.bool,
  /** A modal can use the entire size of the screen. */
  scrolling: l.bool
} : {};
Lo.create = Qt(Lo, function(e) {
  return {
    content: e
  };
});
function Zl(e) {
  var t = e.children, n = e.className, r = e.content, o = Ze("description", n), s = Ve(Zl, e), u = Qe(Zl, e);
  return /* @__PURE__ */ ee.createElement(u, pe({}, s, {
    className: o
  }), ht(t) ? r : t);
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
  content: Mt
} : {};
function Fo(e) {
  var t = e.blurring, n = e.children, r = e.className, o = e.centered, s = e.content, u = e.inverted, c = e.mountNode, d = e.scrolling, p = ee.useRef(), h = Ze("ui", q(u, "inverted"), q(!o, "top aligned"), "page modals dimmer transition visible active", r), m = Ze("dimmable dimmed", q(t, "blurring"), q(d, "scrolling")), g = Ve(Fo, e), y = Qe(Fo, e);
  return vF(c, m), ee.useEffect(function() {
    p.current && p.current.style && p.current.style.setProperty("display", "flex", "important");
  }, []), /* @__PURE__ */ ee.createElement(dr, {
    innerRef: p
  }, /* @__PURE__ */ ee.createElement(y, pe({}, g, {
    className: h
  }), ht(n) ? s : n));
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
  content: Mt,
  /** A dimmer can be inverted. */
  inverted: l.bool,
  /** The node where the modal should mount. Defaults to document.body. */
  mountNode: l.any,
  /** A dimmer can make body scrollable. */
  scrolling: l.bool
} : {};
Fo.create = Qt(Fo, function(e) {
  return {
    content: e
  };
});
function $o(e) {
  var t = e.children, n = e.className, r = e.content, o = Ze("header", n), s = Ve($o, e), u = Qe($o, e);
  return /* @__PURE__ */ ee.createElement(u, pe({}, s, {
    className: o
  }), ht(t) ? r : t);
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
  content: Mt
} : {};
$o.create = Qt($o, function(e) {
  return {
    content: e
  };
});
var t0 = 0, OF = 50, SF = function(t) {
  var n = t.height + t0, r = t.height + t0, o = window.innerHeight, s = o / 2, u = -(r / 2), c = OF, d = s + u;
  return d + n + c < o;
}, TF = function(t, n, r) {
  var o = n && t ? -(r.height / 2) : 0, s = -(r.width / 2);
  return {
    marginLeft: s,
    marginTop: o
  };
}, PF = function() {
  return !window.ActiveXObject && "ActiveXObject" in window;
}, pn = /* @__PURE__ */ function(e) {
  rn(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.legacy = Ei() && PF(), r.ref = /* @__PURE__ */ xr(), r.dimmerRef = /* @__PURE__ */ xr(), r.latestDocumentMouseDownEvent = null, r.getMountNode = function() {
      return Ei() ? r.props.mountNode || document.body : null;
    }, r.handleActionsOverrides = function(c) {
      return {
        onActionClick: function(p, h) {
          Be(c, "onActionClick", p, h), Be(r.props, "onActionClick", p, r.props), r.handleClose(p);
        }
      };
    }, r.handleClose = function(c) {
      r.setState({
        open: !1
      }), Be(r.props, "onClose", c, pe({}, r.props, {
        open: !1
      }));
    }, r.handleDocumentMouseDown = function(c) {
      r.latestDocumentMouseDownEvent = c;
    }, r.handleDocumentClick = function(c) {
      var d = r.props.closeOnDimmerClick, p = r.latestDocumentMouseDownEvent;
      r.latestDocumentMouseDownEvent = null, !(!d || Io(r.ref.current, p) || Io(r.ref.current, c)) && (r.setState({
        open: !1
      }), Be(r.props, "onClose", c, pe({}, r.props, {
        open: !1
      })));
    }, r.handleIconOverrides = function(c) {
      return {
        onClick: function(p) {
          Be(c, "onClick", p), r.handleClose(p);
        }
      };
    }, r.handleOpen = function(c) {
      Be(r.props, "onOpen", c, pe({}, r.props, {
        open: !0
      })), r.setState({
        open: !0
      });
    }, r.handlePortalMount = function(c) {
      var d = r.props.eventPool;
      r.setState({
        scrolling: !1
      }), r.setPositionAndClassNames(), Tl.sub("mousedown", r.handleDocumentMouseDown, {
        pool: d,
        target: r.dimmerRef.current
      }), Tl.sub("click", r.handleDocumentClick, {
        pool: d,
        target: r.dimmerRef.current
      }), Be(r.props, "onMount", c, r.props);
    }, r.handlePortalUnmount = function(c) {
      var d = r.props.eventPool;
      cancelAnimationFrame(r.animationRequestId), Tl.unsub("mousedown", r.handleDocumentMouseDown, {
        pool: d,
        target: r.dimmerRef.current
      }), Tl.unsub("click", r.handleDocumentClick, {
        pool: d,
        target: r.dimmerRef.current
      }), Be(r.props, "onUnmount", c, r.props);
    }, r.setPositionAndClassNames = function() {
      var c = r.props.centered, d, p = {};
      if (r.ref.current) {
        var h = r.ref.current.getBoundingClientRect(), m = SF(h);
        d = !m;
        var g = r.legacy ? TF(m, c, h) : {};
        Al(r.state.legacyStyles, g) || (p.legacyStyles = g), r.state.scrolling !== d && (p.scrolling = d);
      }
      bi(p) || r.setState(p), r.animationRequestId = requestAnimationFrame(r.setPositionAndClassNames);
    }, r.renderContent = function(c) {
      var d = r.props, p = d.actions, h = d.basic, m = d.children, g = d.className, y = d.closeIcon, b = d.content, _ = d.header, w = d.size, k = d.style, F = r.state, E = F.legacyStyles, I = F.scrolling, S = Ze("ui", w, q(h, "basic"), q(r.legacy, "legacy"), q(I, "scrolling"), "modal transition visible active", g), P = Qe(t, r.props), C = y === !0 ? "close" : y, T = We.create(C, {
        overrideProps: r.handleIconOverrides
      });
      return /* @__PURE__ */ ee.createElement(dr, {
        innerRef: r.ref
      }, /* @__PURE__ */ ee.createElement(P, pe({}, c, {
        className: S,
        style: pe({}, E, k)
      }), T, ht(m) ? /* @__PURE__ */ ee.createElement(ee.Fragment, null, $o.create(_, {
        autoGenerateKey: !1
      }), Lo.create(b, {
        autoGenerateKey: !1
      }), xs.create(p, {
        overrideProps: r.handleActionsOverrides
      })) : m));
    }, r;
  }
  var n = t.prototype;
  return n.componentWillUnmount = function() {
    this.handlePortalUnmount();
  }, n.render = function() {
    var o = this.props, s = o.centered, u = o.closeOnDocumentClick, c = o.dimmer, d = o.eventPool, p = o.trigger, h = this.state, m = h.open, g = h.scrolling, y = this.getMountNode();
    if (!Ei())
      return /* @__PURE__ */ UI(p) ? p : null;
    var b = Ve(t, this.props), _ = ra.handledProps, w = Em(b, function(F, E, I) {
      return wa(_, I) || (F[I] = E), F;
    }, {}), k = Td(b, _);
    return /* @__PURE__ */ ee.createElement(ra, pe({
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
    }), /* @__PURE__ */ ee.createElement(dr, {
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
}(Hs);
pn.handledProps = ["actions", "as", "basic", "centered", "children", "className", "closeIcon", "closeOnDimmerClick", "closeOnDocumentClick", "content", "defaultOpen", "dimmer", "eventPool", "header", "mountNode", "onActionClick", "onClose", "onMount", "onOpen", "onUnmount", "open", "size", "style", "trigger"];
pn.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Shorthand for Modal.Actions. Typically an array of button shorthand. */
  actions: St,
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
  content: St,
  /** Initial value of open. */
  defaultOpen: l.bool,
  /** A Modal can appear in a dimmer. */
  dimmer: l.oneOfType([l.bool, l.func, l.object, l.oneOf(["inverted", "blurring"])]),
  /** Event pool namespace that is used to handle component events */
  eventPool: l.string,
  /** Modal displayed above the content in bold. */
  header: St,
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
pn.defaultProps = {
  centered: !0,
  dimmer: !0,
  closeOnDimmerClick: !0,
  closeOnDocumentClick: !1,
  eventPool: "Modal"
};
pn.autoControlledProps = ["open"];
pn.Actions = xs;
pn.Content = Lo;
pn.Description = Zl;
pn.Dimmer = Fo;
pn.Header = $o;
function Xl(e) {
  var t = e.children, n = e.className, r = e.content, o = Ze("header", n), s = Ve(Xl, e), u = Qe(Xl, e);
  return /* @__PURE__ */ ee.createElement(u, pe({}, s, {
    className: o
  }), ht(t) ? r : t);
}
Xl.handledProps = ["as", "children", "className", "content"];
Xl.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: Mt
} : {};
function kF(e) {
  return function(t) {
    return e == null ? void 0 : e[t];
  };
}
var NF = {
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
}, IF = kF(NF), AF = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, RF = "\\u0300-\\u036f", MF = "\\ufe20-\\ufe2f", DF = "\\u20d0-\\u20ff", LF = RF + MF + DF, FF = "[" + LF + "]", $F = RegExp(FF, "g");
function _h(e) {
  return e = ji(e), e && e.replace(AF, IF).replace($F, "");
}
var BF = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function jF(e) {
  return e.match(BF) || [];
}
var WF = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function zF(e) {
  return WF.test(e);
}
var V1 = "\\ud800-\\udfff", UF = "\\u0300-\\u036f", HF = "\\ufe20-\\ufe2f", YF = "\\u20d0-\\u20ff", qF = UF + HF + YF, G1 = "\\u2700-\\u27bf", K1 = "a-z\\xdf-\\xf6\\xf8-\\xff", VF = "\\xac\\xb1\\xd7\\xf7", GF = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", KF = "\\u2000-\\u206f", ZF = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Z1 = "A-Z\\xc0-\\xd6\\xd8-\\xde", XF = "\\ufe0e\\ufe0f", X1 = VF + GF + KF + ZF, Q1 = "['’]", n0 = "[" + X1 + "]", QF = "[" + qF + "]", J1 = "\\d+", JF = "[" + G1 + "]", ew = "[" + K1 + "]", tw = "[^" + V1 + X1 + J1 + G1 + K1 + Z1 + "]", e3 = "\\ud83c[\\udffb-\\udfff]", t3 = "(?:" + QF + "|" + e3 + ")", n3 = "[^" + V1 + "]", nw = "(?:\\ud83c[\\udde6-\\uddff]){2}", rw = "[\\ud800-\\udbff][\\udc00-\\udfff]", ls = "[" + Z1 + "]", r3 = "\\u200d", r0 = "(?:" + ew + "|" + tw + ")", a3 = "(?:" + ls + "|" + tw + ")", a0 = "(?:" + Q1 + "(?:d|ll|m|re|s|t|ve))?", o0 = "(?:" + Q1 + "(?:D|LL|M|RE|S|T|VE))?", aw = t3 + "?", ow = "[" + XF + "]?", o3 = "(?:" + r3 + "(?:" + [n3, nw, rw].join("|") + ")" + ow + aw + ")*", i3 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", s3 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", l3 = ow + aw + o3, c3 = "(?:" + [JF, nw, rw].join("|") + ")" + l3, u3 = RegExp([
  ls + "?" + ew + "+" + a0 + "(?=" + [n0, ls, "$"].join("|") + ")",
  a3 + "+" + o0 + "(?=" + [n0, ls + r0, "$"].join("|") + ")",
  ls + "?" + r0 + "+" + a0,
  ls + "+" + o0,
  s3,
  i3,
  J1,
  c3
].join("|"), "g");
function d3(e) {
  return e.match(u3) || [];
}
function f3(e, t, n) {
  return e = ji(e), t = t, t === void 0 ? zF(e) ? d3(e) : jF(e) : e.match(t) || [];
}
var p3 = "['’]", h3 = RegExp(p3, "g");
function m3(e) {
  return function(t) {
    return q1(f3(_h(t).replace(h3, "")), e, "");
  };
}
function g3(e) {
  return function(t) {
    t = ji(t);
    var n = ym(t) ? mh(t) : void 0, r = n ? n[0] : t.charAt(0), o = n ? O1(n, 1).join("") : t.slice(1);
    return r[e]() + o;
  };
}
var v3 = g3("toUpperCase"), y3 = m3(function(e, t, n) {
  return e + (n ? " " : "") + v3(t);
}), ki = /* @__PURE__ */ function(e) {
  rn(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handleClick = function(c) {
      var d = r.props.disabled;
      d || Be(r.props, "onClick", c, r.props);
    }, r;
  }
  var n = t.prototype;
  return n.render = function() {
    var o = this.props, s = o.active, u = o.children, c = o.className, d = o.color, p = o.content, h = o.disabled, m = o.fitted, g = o.header, y = o.icon, b = o.link, _ = o.name, w = o.onClick, k = o.position, F = Ze(d, k, q(s, "active"), q(h, "disabled"), q(y === !0 || y && !(_ || p), "icon"), q(g, "header"), q(b, "link"), sn(m, "fitted"), "item", c), E = Qe(t, this.props, function() {
      if (w) return "a";
    }), I = Ve(t, this.props);
    return ht(u) ? /* @__PURE__ */ ee.createElement(E, pe({}, I, {
      className: F,
      onClick: this.handleClick
    }), We.create(y, {
      autoGenerateKey: !1
    }), ht(p) ? y3(_) : p) : /* @__PURE__ */ ee.createElement(E, pe({}, I, {
      className: F,
      onClick: this.handleClick
    }), u);
  }, t;
}(er);
ki.handledProps = ["active", "as", "children", "className", "color", "content", "disabled", "fitted", "header", "icon", "index", "link", "name", "onClick", "position"];
ki.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** A menu item can be active. */
  active: l.bool,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Additional colors can be specified. */
  color: l.oneOf(la),
  /** Shorthand for primary content. */
  content: Mt,
  /** A menu item can be disabled. */
  disabled: l.bool,
  /** A menu item or menu can remove element padding, vertically or horizontally. */
  fitted: l.oneOfType([l.bool, l.oneOf(["horizontally", "vertically"])]),
  /** A menu item may include a header or may itself be a header. */
  header: l.bool,
  /** MenuItem can be only icon. */
  icon: l.oneOfType([l.bool, St]),
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
ki.create = Qt(ki, function(e) {
  return {
    content: e,
    name: e
  };
});
function Ql(e) {
  var t = e.children, n = e.className, r = e.content, o = e.position, s = Ze(o, "menu", n), u = Ve(Ql, e), c = Qe(Ql, e);
  return /* @__PURE__ */ ee.createElement(c, pe({}, u, {
    className: s
  }), ht(t) ? r : t);
}
Ql.handledProps = ["as", "children", "className", "content", "position"];
Ql.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: Mt,
  /** A sub menu can take left or right position. */
  position: l.oneOf(["left", "right"])
} : {};
var Mn = /* @__PURE__ */ function(e) {
  rn(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handleItemOverrides = function(c) {
      return {
        onClick: function(p, h) {
          var m = h.index;
          r.setState({
            activeIndex: m
          }), Be(c, "onClick", p, h), Be(r.props, "onItemClick", p, h);
        }
      };
    }, r;
  }
  var n = t.prototype;
  return n.renderItems = function() {
    var o = this, s = this.props.items, u = this.state.activeIndex;
    return Sn(s, function(c, d) {
      return ki.create(c, {
        defaultProps: {
          active: parseInt(u, 10) === d,
          index: d
        },
        overrideProps: o.handleItemOverrides
      });
    });
  }, n.render = function() {
    var o = this.props, s = o.attached, u = o.borderless, c = o.children, d = o.className, p = o.color, h = o.compact, m = o.fixed, g = o.floated, y = o.fluid, b = o.icon, _ = o.inverted, w = o.pagination, k = o.pointing, F = o.secondary, E = o.size, I = o.stackable, S = o.tabular, P = o.text, C = o.vertical, T = o.widths, A = Ze("ui", p, E, q(u, "borderless"), q(h, "compact"), q(y, "fluid"), q(_, "inverted"), q(w, "pagination"), q(k, "pointing"), q(F, "secondary"), q(I, "stackable"), q(P, "text"), q(C, "vertical"), sn(s, "attached"), sn(g, "floated"), sn(b, "icon"), sn(S, "tabular"), Qn(m, "fixed"), Zn(T, "item"), d, "menu"), B = Ve(t, this.props), U = Qe(t, this.props);
    return /* @__PURE__ */ ee.createElement(U, pe({}, B, {
      className: A
    }), ht(c) ? this.renderItems() : c);
  }, t;
}(Hs);
Mn.handledProps = ["activeIndex", "as", "attached", "borderless", "children", "className", "color", "compact", "defaultActiveIndex", "fixed", "floated", "fluid", "icon", "inverted", "items", "onItemClick", "pagination", "pointing", "secondary", "size", "stackable", "tabular", "text", "vertical", "widths"];
Mn.propTypes = process.env.NODE_ENV !== "production" ? {
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
  color: l.oneOf(la),
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
  items: _c,
  /**
   * onClick handler for MenuItem. Mutually exclusive with children.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All item props.
   */
  onItemClick: $t([Kt(["children"]), l.func]),
  /** A pagination menu is specially formatted to present links to pages of content. */
  pagination: l.bool,
  /** A menu can point to show its relationship to nearby content. */
  pointing: l.bool,
  /** A menu can adjust its appearance to de-emphasize its contents. */
  secondary: l.bool,
  /** A menu can vary in size. */
  size: l.oneOf(aa(pr, "medium", "big")),
  /** A menu can stack at mobile resolutions. */
  stackable: l.bool,
  /** A menu can be formatted to show tabs of information. */
  tabular: l.oneOfType([l.bool, l.oneOf(["right"])]),
  /** A menu can be formatted for text content. */
  text: l.bool,
  /** A vertical menu displays elements vertically. */
  vertical: l.bool,
  /** A menu can have its items divided evenly. */
  widths: l.oneOf(lr)
} : {};
Mn.autoControlledProps = ["activeIndex"];
Mn.Header = Xl;
Mn.Item = ki;
Mn.Menu = Ql;
Mn.create = Qt(Mn, function(e) {
  return {
    items: e
  };
});
var Es = /* @__PURE__ */ function(e) {
  rn(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handleClick = function(c) {
      Be(r.props, "onClick", c, r.props);
    }, r.handleKeyDown = function(c) {
      Be(r.props, "onKeyDown", c, r.props), wn.getCode(c) === wn.Enter && Be(r.props, "onClick", c, r.props);
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
    return ki.create(this.props, {
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
}(er);
Es.handledProps = ["active", "disabled", "onClick", "onKeyDown", "type"];
Es.propTypes = process.env.NODE_ENV !== "production" ? {
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
Es.create = Qt(Es, function(e) {
  return {
    content: e
  };
});
var Ys = /* @__PURE__ */ function(e) {
  rn(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handleItemClick = function(c, d) {
      var p = d.value, h = r.state.activePage;
      +h != +p && (r.setState({
        activePage: p
      }), Be(r.props, "onPageChange", c, pe({}, r.props, {
        activePage: p
      })));
    }, r.handleItemOverrides = function(c, d, p) {
      return function(h) {
        return {
          active: c,
          type: d,
          key: d + "-" + p,
          onClick: function(g, y) {
            Be(h, "onClick", g, y), y.type !== "ellipsisItem" && r.handleItemClick(g, y);
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
    var o = this, s = this.props, u = s["aria-label"], c = s.boundaryRange, d = s.disabled, p = s.ellipsisItem, h = s.siblingRange, m = s.totalPages, g = this.state.activePage, y = kL({
      activePage: g,
      boundaryRange: c,
      hideEllipsis: It(p),
      siblingRange: h,
      totalPages: m
    }), b = Ve(t, this.props);
    return /* @__PURE__ */ ee.createElement(Mn, pe({}, b, {
      "aria-label": u,
      pagination: !0,
      role: "navigation"
    }), Sn(y, function(_) {
      var w = _.active, k = _.type, F = _.value;
      return Es.create(o.props[k], {
        defaultProps: {
          content: F,
          disabled: d,
          value: F
        },
        overrideProps: o.handleItemOverrides(w, k, F)
      });
    }));
  }, t;
}(Hs);
Ys.handledProps = ["activePage", "aria-label", "boundaryRange", "defaultActivePage", "disabled", "ellipsisItem", "firstItem", "lastItem", "nextItem", "onPageChange", "pageItem", "prevItem", "siblingRange", "totalPages"];
Ys.propTypes = process.env.NODE_ENV !== "production" ? {
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
  ellipsisItem: St,
  /** A shorthand for PaginationItem. */
  firstItem: St,
  /** A shorthand for PaginationItem. */
  lastItem: St,
  /** A shorthand for PaginationItem. */
  nextItem: St,
  /** A shorthand for PaginationItem. */
  pageItem: St,
  /** A shorthand for PaginationItem. */
  prevItem: St,
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
Ys.autoControlledProps = ["activePage"];
Ys.defaultProps = {
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
Ys.Item = Es;
function b3(e, t, n) {
  return e == null ? e : A1(e, t, n);
}
var Jn = /* @__PURE__ */ function(e) {
  rn(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.inputRef = /* @__PURE__ */ xr(), r.labelRef = /* @__PURE__ */ xr(), r.canToggle = function() {
      var c = r.props, d = c.disabled, p = c.radio, h = c.readOnly, m = r.state.checked;
      return !d && !h && !(p && m);
    }, r.computeTabIndex = function() {
      var c = r.props, d = c.disabled, p = c.tabIndex;
      return It(p) ? d ? -1 : 0 : p;
    }, r.handleClick = function(c) {
      var d = r.props.id, p = r.state, h = p.checked, m = p.indeterminate, g = Be(r.inputRef.current, "contains", c.target), y = Be(r.labelRef.current, "contains", c.target), b = !y && !g, _ = !It(d), w = y && _;
      w || Be(r.props, "onClick", c, pe({}, r.props, {
        checked: !h,
        indeterminate: !!m
      })), r.isClickFromMouse && (r.isClickFromMouse = !1, y && !_ && r.handleChange(c), b && r.handleChange(c), y && _ && c.stopPropagation());
    }, r.handleChange = function(c) {
      var d = r.state.checked;
      r.canToggle() && (Be(r.props, "onChange", c, pe({}, r.props, {
        checked: !d,
        indeterminate: !1
      })), r.setState({
        checked: !d,
        indeterminate: !1
      }));
    }, r.handleMouseDown = function(c) {
      var d = r.state, p = d.checked, h = d.indeterminate;
      Be(r.props, "onMouseDown", c, pe({}, r.props, {
        checked: !!p,
        indeterminate: !!h
      })), c.defaultPrevented || Be(r.inputRef.current, "focus"), c.preventDefault();
    }, r.handleMouseUp = function(c) {
      var d = r.state, p = d.checked, h = d.indeterminate;
      r.isClickFromMouse = !0, Be(r.props, "onMouseUp", c, pe({}, r.props, {
        checked: !!p,
        indeterminate: !!h
      }));
    }, r.setIndeterminate = function() {
      var c = r.state.indeterminate;
      b3(r.inputRef, "current.indeterminate", !!c);
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
      q(k, "checked"),
      q(u, "disabled"),
      q(F, "indeterminate"),
      // auto apply fitted class to compact white space when there is no label
      // https://semantic-ui.com/modules/checkbox.html#fitted
      q(It(c), "fitted"),
      q(h, "radio"),
      q(m, "read-only"),
      q(g, "slider"),
      q(y, "toggle"),
      "checkbox",
      s
    ), I = Ve(t, this.props), S = Qe(t, this.props), P = xm(I, {
      htmlProps: U1
    }), C = P[0], T = P[1], A = yh(c, {
      defaultProps: {
        htmlFor: d
      },
      autoGenerateKey: !1
    }) || /* @__PURE__ */ ee.createElement("label", {
      htmlFor: d
    });
    return /* @__PURE__ */ ee.createElement(S, pe({}, T, {
      className: E,
      onClick: this.handleClick,
      onChange: this.handleChange,
      onMouseDown: this.handleMouseDown,
      onMouseUp: this.handleMouseUp
    }), /* @__PURE__ */ ee.createElement(dr, {
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
    }))), /* @__PURE__ */ ee.createElement(dr, {
      innerRef: this.labelRef
    }, A));
  }, t;
}(Hs);
Jn.handledProps = ["as", "checked", "className", "defaultChecked", "defaultIndeterminate", "disabled", "fitted", "id", "indeterminate", "label", "name", "onChange", "onClick", "onMouseDown", "onMouseUp", "radio", "readOnly", "slider", "tabIndex", "toggle", "type", "value"];
Jn.propTypes = process.env.NODE_ENV !== "production" ? {
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
  label: St,
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
  radio: $t([l.bool, Kt(["slider", "toggle"])]),
  /** A checkbox can be read-only and unable to change states. */
  readOnly: l.bool,
  /** Format to emphasize the current selection state. */
  slider: $t([l.bool, Kt(["radio", "toggle"])]),
  /** A checkbox can receive focus. */
  tabIndex: l.oneOfType([l.number, l.string]),
  /** Format to show an on or off choice. */
  toggle: $t([l.bool, Kt(["radio", "slider"])]),
  /** HTML input type, either checkbox or radio. */
  type: l.oneOf(["checkbox", "radio"]),
  /** The HTML input value. */
  value: l.oneOfType([l.string, l.number])
} : {};
Jn.defaultProps = {
  type: "checkbox"
};
Jn.autoControlledProps = ["checked", "indeterminate"];
function Bo(e) {
  var t = e.slider, n = e.toggle, r = e.type, o = Ve(Bo, e), s = !(t || n) || void 0;
  return /* @__PURE__ */ ee.createElement(Jn, pe({}, o, {
    type: r,
    radio: s,
    slider: t,
    toggle: n
  }));
}
Bo.handledProps = ["slider", "toggle", "type"];
Bo.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Format to emphasize the current selection state. */
  slider: Jn.propTypes.slider,
  /** Format to show an on or off choice. */
  toggle: Jn.propTypes.toggle,
  /** HTML input type, either checkbox or radio. */
  type: Jn.propTypes.type
} : {};
Bo.defaultProps = {
  type: "radio"
};
function _3(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = 0, o = []; ++t < n; ) {
    var s = e[t];
    s && (o[r++] = s);
  }
  return o;
}
function w3(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (!t(e[n], n, e))
      return !1;
  return !0;
}
function x3(e, t) {
  var n = !0;
  return Us(e, function(r, o, s) {
    return n = !!t(r, o, s), n;
  }), n;
}
function E3(e, t, n) {
  var r = _n(e) ? w3 : x3;
  return r(e, Qo(t));
}
function C3(e, t, n) {
  var r = e == null ? 0 : e.length;
  return r ? (t = t === void 0 ? 1 : bc(t), t = r - t, Ed(e, 0, t < 0 ? 0 : t)) : [];
}
var O3 = _1("length"), iw = "\\ud800-\\udfff", S3 = "\\u0300-\\u036f", T3 = "\\ufe20-\\ufe2f", P3 = "\\u20d0-\\u20ff", k3 = S3 + T3 + P3, N3 = "\\ufe0e\\ufe0f", I3 = "[" + iw + "]", wh = "[" + k3 + "]", xh = "\\ud83c[\\udffb-\\udfff]", A3 = "(?:" + wh + "|" + xh + ")", sw = "[^" + iw + "]", lw = "(?:\\ud83c[\\udde6-\\uddff]){2}", cw = "[\\ud800-\\udbff][\\udc00-\\udfff]", R3 = "\\u200d", uw = A3 + "?", dw = "[" + N3 + "]?", M3 = "(?:" + R3 + "(?:" + [sw, lw, cw].join("|") + ")" + dw + uw + ")*", D3 = dw + uw + M3, L3 = "(?:" + [sw + wh + "?", wh, lw, cw, I3].join("|") + ")", i0 = RegExp(xh + "(?=" + xh + ")|" + L3 + D3, "g");
function F3(e) {
  for (var t = i0.lastIndex = 0; i0.test(e); )
    ++t;
  return t;
}
function $3(e) {
  return ym(e) ? F3(e) : O3(e);
}
var B3 = "[object Map]", j3 = "[object Set]";
function W3(e) {
  if (e == null)
    return 0;
  if (io(e))
    return wm(e) ? $3(e) : e.length;
  var t = ga(e);
  return t == B3 || t == j3 ? e.size : mm(e).length;
}
var s0 = zs(function(e) {
  return j1(Sd(e, 1, zl, !0));
}), z3 = ["ad", "andorra", "ae", "united arab emirates", "uae", "af", "afghanistan", "ag", "antigua", "ai", "anguilla", "al", "albania", "am", "armenia", "an", "netherlands antilles", "ao", "angola", "ar", "argentina", "as", "american samoa", "at", "austria", "au", "australia", "aw", "aruba", "ax", "aland islands", "az", "azerbaijan", "ba", "bosnia", "bb", "barbados", "bd", "bangladesh", "be", "belgium", "bf", "burkina faso", "bg", "bulgaria", "bh", "bahrain", "bi", "burundi", "bj", "benin", "bm", "bermuda", "bn", "brunei", "bo", "bolivia", "br", "brazil", "bs", "bahamas", "bt", "bhutan", "bv", "bouvet island", "bw", "botswana", "by", "belarus", "bz", "belize", "ca", "canada", "cc", "cocos islands", "cd", "congo", "cf", "central african republic", "cg", "congo brazzaville", "ch", "switzerland", "ci", "cote divoire", "ck", "cook islands", "cl", "chile", "cm", "cameroon", "cn", "china", "co", "colombia", "cr", "costa rica", "cs", "cu", "cuba", "cv", "cape verde", "cx", "christmas island", "cy", "cyprus", "cz", "czech republic", "de", "germany", "dj", "djibouti", "dk", "denmark", "dm", "dominica", "do", "dominican republic", "dz", "algeria", "ec", "ecuador", "england", "gb eng", "ee", "estonia", "eg", "egypt", "eh", "western sahara", "er", "eritrea", "es", "spain", "et", "ethiopia", "eu", "european union", "fi", "finland", "fj", "fiji", "fk", "falkland islands", "fm", "micronesia", "fo", "faroe islands", "fr", "france", "ga", "gabon", "gb", "uk", "united kingdom", "gd", "grenada", "ge", "georgia", "gf", "french guiana", "gh", "ghana", "gi", "gibraltar", "gl", "greenland", "gm", "gambia", "gn", "guinea", "gp", "guadeloupe", "gq", "equatorial guinea", "gr", "greece", "gs", "sandwich islands", "gt", "guatemala", "gu", "guam", "gw", "guinea-bissau", "gy", "guyana", "hk", "hong kong", "hm", "heard island", "hn", "honduras", "hr", "croatia", "ht", "haiti", "hu", "hungary", "id", "indonesia", "ie", "ireland", "il", "israel", "in", "india", "io", "indian ocean territory", "iq", "iraq", "ir", "iran", "is", "iceland", "it", "italy", "jm", "jamaica", "jo", "jordan", "jp", "japan", "ke", "kenya", "kg", "kyrgyzstan", "kh", "cambodia", "ki", "kiribati", "km", "comoros", "kn", "saint kitts and nevis", "kp", "north korea", "kr", "south korea", "kw", "kuwait", "ky", "cayman islands", "kz", "kazakhstan", "la", "laos", "lb", "lebanon", "lc", "saint lucia", "li", "liechtenstein", "lk", "sri lanka", "lr", "liberia", "ls", "lesotho", "lt", "lithuania", "lu", "luxembourg", "lv", "latvia", "ly", "libya", "ma", "morocco", "mc", "monaco", "md", "moldova", "me", "montenegro", "mg", "madagascar", "mh", "marshall islands", "mk", "macedonia", "ml", "mali", "mm", "myanmar", "burma", "mn", "mongolia", "mo", "macau", "mp", "northern mariana islands", "mq", "martinique", "mr", "mauritania", "ms", "montserrat", "mt", "malta", "mu", "mauritius", "mv", "maldives", "mw", "malawi", "mx", "mexico", "my", "malaysia", "mz", "mozambique", "na", "namibia", "nc", "new caledonia", "ne", "niger", "nf", "norfolk island", "ng", "nigeria", "ni", "nicaragua", "nl", "netherlands", "no", "norway", "np", "nepal", "nr", "nauru", "nu", "niue", "nz", "new zealand", "om", "oman", "pa", "panama", "pe", "peru", "pf", "french polynesia", "pg", "new guinea", "ph", "philippines", "pk", "pakistan", "pl", "poland", "pm", "saint pierre", "pn", "pitcairn islands", "pr", "puerto rico", "ps", "palestine", "pt", "portugal", "pw", "palau", "py", "paraguay", "qa", "qatar", "re", "reunion", "ro", "romania", "rs", "serbia", "ru", "russia", "rw", "rwanda", "sa", "saudi arabia", "sb", "solomon islands", "sc", "seychelles", "gb sct", "scotland", "sd", "sudan", "se", "sweden", "sg", "singapore", "sh", "saint helena", "si", "slovenia", "sj", "svalbard", "jan mayen", "sk", "slovakia", "sl", "sierra leone", "sm", "san marino", "sn", "senegal", "so", "somalia", "sr", "suriname", "st", "sao tome", "sv", "el salvador", "sy", "syria", "sz", "swaziland", "tc", "caicos islands", "td", "chad", "tf", "french territories", "tg", "togo", "th", "thailand", "tj", "tajikistan", "tk", "tokelau", "tl", "timorleste", "tm", "turkmenistan", "tn", "tunisia", "to", "tonga", "tr", "turkey", "tt", "trinidad", "tv", "tuvalu", "tw", "taiwan", "tz", "tanzania", "ua", "ukraine", "ug", "uganda", "um", "us minor islands", "us", "america", "united states", "uy", "uruguay", "uz", "uzbekistan", "va", "vatican city", "vc", "saint vincent", "ve", "venezuela", "vg", "british virgin islands", "vi", "us virgin islands", "vn", "vietnam", "vu", "vanuatu", "gb wls", "wales", "wf", "wallis and futuna", "ws", "samoa", "ye", "yemen", "yt", "mayotte", "za", "south africa", "zm", "zambia", "zw", "zimbabwe"], Ni = /* @__PURE__ */ function(e) {
  rn(t, e);
  function t() {
    return e.apply(this, arguments) || this;
  }
  var n = t.prototype;
  return n.render = function() {
    var o = this.props, s = o.className, u = o.name, c = Ze(u, "flag", s), d = Ve(t, this.props), p = Qe(t, this.props);
    return /* @__PURE__ */ ee.createElement(p, pe({}, d, {
      className: c
    }));
  }, t;
}(V_);
Ni.handledProps = ["as", "className", "name"];
Ni.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Additional classes. */
  className: l.string,
  /** Flag name, can use the two digit country code, the full name, or a common alias. */
  name: D1(z3)
} : {};
Ni.defaultProps = {
  as: "i"
};
Ni.create = Qt(Ni, function(e) {
  return {
    name: e
  };
});
function Jl(e) {
  var t = e.className, n = Ze("divider", t), r = Ve(Jl, e), o = Qe(Jl, e);
  return /* @__PURE__ */ ee.createElement(o, pe({}, r, {
    className: n
  }));
}
Jl.handledProps = ["as", "className"];
Jl.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Additional classes. */
  className: l.string
} : {};
var Ii = /* @__PURE__ */ function(e) {
  rn(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handleClick = function(c) {
      Be(r.props, "onClick", c, r.props);
    }, r;
  }
  var n = t.prototype;
  return n.render = function() {
    var o = this.props, s = o.active, u = o.children, c = o.className, d = o.content, p = o.disabled, h = o.description, m = o.flag, g = o.icon, y = o.image, b = o.label, _ = o.selected, w = o.text, k = Ze(q(s, "active"), q(p, "disabled"), q(_, "selected"), "item", c), F = It(g) ? YM(u, "DropdownMenu") && "dropdown" : g, E = Ve(t, this.props), I = Qe(t, this.props), S = {
      role: "option",
      "aria-disabled": p,
      "aria-checked": s,
      "aria-selected": _
    };
    if (!ht(u))
      return /* @__PURE__ */ ee.createElement(I, pe({}, E, S, {
        className: k,
        onClick: this.handleClick
      }), u);
    var P = Ni.create(m, {
      autoGenerateKey: !1
    }), C = We.create(F, {
      autoGenerateKey: !1
    }), T = Er.create(y, {
      autoGenerateKey: !1
    }), A = fr.create(b, {
      autoGenerateKey: !1
    }), B = vh("span", function(ne) {
      return {
        children: ne
      };
    }, h, {
      defaultProps: {
        className: "description"
      },
      autoGenerateKey: !1
    }), U = vh("span", function(ne) {
      return {
        children: ne
      };
    }, ht(d) ? w : d, {
      defaultProps: {
        className: "text"
      },
      autoGenerateKey: !1
    });
    return /* @__PURE__ */ ee.createElement(I, pe({}, E, S, {
      className: k,
      onClick: this.handleClick
    }), T, C, P, A, B, U);
  }, t;
}(er);
Ii.handledProps = ["active", "as", "children", "className", "content", "description", "disabled", "flag", "icon", "image", "label", "onClick", "selected", "text", "value"];
Ii.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Style as the currently chosen item. */
  active: l.bool,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: Mt,
  /** Additional text with less emphasis. */
  description: St,
  /** A dropdown item can be disabled. */
  disabled: l.bool,
  /** Shorthand for Flag. */
  flag: St,
  /** Shorthand for Icon. */
  icon: St,
  /** Shorthand for Image. */
  image: St,
  /** Shorthand for Label. */
  label: St,
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
  text: Mt,
  /** Stored value. */
  value: l.oneOfType([l.bool, l.number, l.string])
} : {};
Ii.create = Qt(Ii, function(e) {
  return e;
});
function jo(e) {
  var t = e.children, n = e.className, r = e.content, o = e.icon, s = Ze("header", n), u = Ve(jo, e), c = Qe(jo, e);
  return ht(t) ? /* @__PURE__ */ ee.createElement(c, pe({}, u, {
    className: s
  }), We.create(o, {
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
  content: Mt,
  /** Shorthand for Icon. */
  icon: St
} : {};
jo.create = Qt(jo, function(e) {
  return {
    content: e
  };
});
function Cs(e) {
  var t = e.children, n = e.className, r = e.content, o = e.direction, s = e.open, u = e.scrolling, c = Ze(o, q(s, "visible"), q(u, "scrolling"), "menu transition", n), d = Ve(Cs, e), p = Qe(Cs, e);
  return /* @__PURE__ */ ee.createElement(p, pe({}, d, {
    className: c
  }), ht(t) ? r : t);
}
Cs.handledProps = ["as", "children", "className", "content", "direction", "open", "scrolling"];
Cs.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: Mt,
  /** A dropdown menu can open to the left or to the right. */
  direction: l.oneOf(["left", "right"]),
  /** Whether or not the dropdown menu is displayed. */
  open: l.bool,
  /** A dropdown menu can scroll. */
  scrolling: l.bool
} : {};
var Ai = /* @__PURE__ */ function(e) {
  rn(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handleChange = function(c) {
      var d = _a(c, "target.value");
      Be(r.props, "onChange", c, pe({}, r.props, {
        value: d
      }));
    }, r;
  }
  var n = t.prototype;
  return n.render = function() {
    var o = this.props, s = o.autoComplete, u = o.className, c = o.tabIndex, d = o.type, p = o.value, h = Ze("search", u), m = Ve(t, this.props);
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
}(er);
Ai.handledProps = ["as", "autoComplete", "className", "tabIndex", "type", "value"];
Ai.propTypes = process.env.NODE_ENV !== "production" ? {
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
Ai.defaultProps = {
  autoComplete: "off",
  type: "text"
};
Ai.create = Qt(Ai, function(e) {
  return {
    type: e
  };
});
function Wo(e) {
  var t = e.children, n = e.className, r = e.content, o = Ze("divider", n), s = Ve(Wo, e), u = Qe(Wo, e);
  return /* @__PURE__ */ ee.createElement(u, pe({
    "aria-atomic": !0,
    "aria-live": "polite",
    role: "alert"
  }, s, {
    className: o
  }), ht(t) ? r : t);
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
  content: Mt
} : {};
Wo.create = Qt(Wo, function(e) {
  return {
    content: e
  };
});
var fw = /[\\^$.*+?()[\]{}|]/g, U3 = RegExp(fw.source);
function H3(e) {
  return e = ji(e), e && U3.test(e) ? e.replace(fw, "\\$&") : e;
}
function us(e) {
  var t = e.additionLabel, n = e.additionPosition, r = e.allowAdditions, o = e.deburr, s = e.multiple, u = e.options, c = e.search, d = e.searchQuery, p = e.value, h = u;
  if (s && (h = lh(h, function(_) {
    return !wa(p, _.value);
  })), c && d)
    if (_s(c))
      h = c(h, d);
    else {
      var m = o ? _h(d) : d, g = new RegExp(H3(m), "i");
      h = lh(h, function(_) {
        return g.test(o ? _h(_.text) : _.text);
      });
    }
  if (r && c && d && !Il(h, {
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
us.handledProps = [];
function l0(e) {
  var t = e.additionLabel, n = e.additionPosition, r = e.allowAdditions, o = e.deburr, s = e.multiple, u = e.options, c = e.search, d = e.searchQuery, p = e.selectedIndex, h = e.value, m = us({
    value: h,
    options: u,
    searchQuery: d,
    additionLabel: t,
    additionPosition: n,
    allowAdditions: r,
    deburr: o,
    multiple: s,
    search: c
  }), g = Em(m, function(w, k, F) {
    return k.disabled || w.push(F), w;
  }, []), y;
  if (!p || p < 0) {
    var b = g[0];
    y = s ? b : uh(m, ["value", h]) || g[0];
  } else if (s)
    y = E1(g, function(w) {
      return w >= p;
    }), p >= m.length - 1 && (y = g[g.length - 1]);
  else {
    var _ = uh(m, ["value", h]);
    y = wa(g, _) ? _ : void 0;
  }
  return (!y || y < 0) && (y = g[0]), y;
}
var c0 = function(t, n) {
  return It(t) ? n : t;
}, u0 = function(t) {
  return t && t.map(function(n) {
    return Td(n, ["key", "value"]);
  });
};
function pw(e) {
  var t = e.flag, n = e.image, r = e.text;
  return _s(r) ? r : {
    content: /* @__PURE__ */ ee.createElement(ee.Fragment, null, Ni.create(t), Er.create(n), r)
  };
}
var kn = /* @__PURE__ */ function(e) {
  rn(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.searchRef = /* @__PURE__ */ xr(), r.sizerRef = /* @__PURE__ */ xr(), r.ref = /* @__PURE__ */ xr(), r.handleChange = function(c, d) {
      Be(r.props, "onChange", c, pe({}, r.props, {
        value: d
      }));
    }, r.closeOnChange = function(c) {
      var d = r.props, p = d.closeOnChange, h = d.multiple, m = ps(p) ? !h : p;
      m && r.close(c, B1);
    }, r.closeOnEscape = function(c) {
      r.props.closeOnEscape && wn.getCode(c) === wn.Escape && (c.preventDefault(), r.close(c));
    }, r.moveSelectionOnKeyDown = function(c) {
      var d, p = r.props, h = p.multiple, m = p.selectOnNavigation, g = r.state.open;
      if (g) {
        var y = (d = {}, d[wn.ArrowDown] = 1, d[wn.ArrowUp] = -1, d), b = y[wn.getCode(c)];
        if (b !== void 0) {
          c.preventDefault();
          var _ = r.getSelectedIndexAfterMove(b);
          !h && m && r.makeSelectedItemActive(c, _), r.setState({
            selectedIndex: _
          });
        }
      }
    }, r.openOnSpace = function(c) {
      var d, p, h, m = r.state.focus && !r.state.open && wn.getCode(c) === wn.Spacebar, g = ((d = c.target) == null ? void 0 : d.tagName) !== "INPUT" && ((p = c.target) == null ? void 0 : p.tagName) !== "TEXTAREA" && ((h = c.target) == null ? void 0 : h.isContentEditable) !== !0;
      m && (g && c.preventDefault(), r.open(c));
    }, r.openOnArrow = function(c) {
      var d = r.state, p = d.focus, h = d.open;
      if (p && !h) {
        var m = wn.getCode(c);
        (m === wn.ArrowDown || m === wn.ArrowUp) && (c.preventDefault(), r.open(c));
      }
    }, r.makeSelectedItemActive = function(c, d) {
      var p = r.state, h = p.open, m = p.value, g = r.props.multiple, y = r.getSelectedItem(d), b = _a(y, "value"), _ = _a(y, "disabled");
      if (It(b) || !h || _)
        return m;
      var w = g ? s0(m, [b]) : b, k = g ? !!fh(w, m).length : w !== m;
      return k && (r.setState({
        value: w
      }), r.handleChange(c, w), y["data-additional"] && Be(r.props, "onAddItem", c, pe({}, r.props, {
        value: b
      }))), m;
    }, r.selectItemOnEnter = function(c) {
      var d = r.props.search, p = r.state, h = p.open, m = p.selectedIndex;
      if (h) {
        var g = wn.getCode(c) === wn.Enter || // https://github.com/Semantic-Org/Semantic-UI-React/pull/3766
        !d && wn.getCode(c) === wn.Spacebar;
        if (g) {
          c.preventDefault();
          var y = W3(us({
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
              selectedIndex: l0({
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
            }), r.closeOnChange(c), r.clearSearchQuery(), d && Be(r.searchRef.current, "focus");
          }
        }
      }
    }, r.removeItemOnBackspace = function(c) {
      var d = r.props, p = d.multiple, h = d.search, m = r.state, g = m.searchQuery, y = m.value;
      if (wn.getCode(c) === wn.Backspace && !(g || !h || !p || bi(y))) {
        c.preventDefault();
        var b = C3(y);
        r.setState({
          value: b
        }), r.handleChange(c, b);
      }
    }, r.closeOnDocumentClick = function(c) {
      r.props.closeOnBlur && (r.ref.current && Io(r.ref.current, c) || r.close());
    }, r.handleMouseDown = function(c) {
      r.isMouseDown = !0, Be(r.props, "onMouseDown", c, r.props), document.addEventListener("mouseup", r.handleDocumentMouseUp);
    }, r.handleDocumentMouseUp = function() {
      r.isMouseDown = !1, document.removeEventListener("mouseup", r.handleDocumentMouseUp);
    }, r.handleClick = function(c) {
      var d = r.props, p = d.minCharacters, h = d.search, m = r.state, g = m.open, y = m.searchQuery;
      if (Be(r.props, "onClick", c, r.props), c.stopPropagation(), !h) return r.toggle(c);
      if (g) {
        Be(r.searchRef.current, "focus");
        return;
      }
      if (y.length >= p || p === 1) {
        r.open(c);
        return;
      }
      Be(r.searchRef.current, "focus");
    }, r.handleIconClick = function(c) {
      var d = r.props.clearable, p = r.hasValue();
      Be(r.props, "onClick", c, r.props), c.stopPropagation(), d && p ? r.clearValue(c) : r.toggle(c);
    }, r.handleItemClick = function(c, d) {
      var p = r.props, h = p.multiple, m = p.search, g = r.state.value, y = d.value;
      if (c.stopPropagation(), (h || d.disabled) && c.nativeEvent.stopImmediatePropagation(), !d.disabled) {
        var b = d["data-additional"], _ = h ? s0(r.state.value, [y]) : y, w = h ? !!fh(_, g).length : _ !== g;
        w && (r.setState({
          value: _
        }), r.handleChange(c, _)), r.clearSearchQuery(), Be(m ? r.searchRef.current : r.ref.current, "focus"), r.closeOnChange(c), b && Be(r.props, "onAddItem", c, pe({}, r.props, {
          value: y
        }));
      }
    }, r.handleFocus = function(c) {
      var d = r.state.focus;
      d || (Be(r.props, "onFocus", c, r.props), r.setState({
        focus: !0
      }));
    }, r.handleBlur = function(c) {
      var d = _a(c, "currentTarget");
      if (!(d && d.contains(document.activeElement))) {
        var p = r.props, h = p.closeOnBlur, m = p.multiple, g = p.selectOnBlur;
        r.isMouseDown || (Be(r.props, "onBlur", c, r.props), g && !m && (r.makeSelectedItemActive(c, r.state.selectedIndex), h && r.close()), r.setState({
          focus: !1
        }), r.clearSearchQuery());
      }
    }, r.handleSearchChange = function(c, d) {
      var p = d.value;
      c.stopPropagation();
      var h = r.props.minCharacters, m = r.state.open, g = p;
      if (Be(r.props, "onSearchChange", c, pe({}, r.props, {
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
      r.moveSelectionOnKeyDown(c), r.openOnArrow(c), r.openOnSpace(c), r.selectItemOnEnter(c), Be(r.props, "onKeyDown", c);
    }, r.getSelectedItem = function(c) {
      var d = us({
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
      return _a(d, "[" + c + "]");
    }, r.getItemByValue = function(c) {
      var d = r.props.options;
      return E1(d, {
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
      }), Be(r.props, "onLabelClick", c, d);
    }, r.handleLabelRemove = function(c, d) {
      c.stopPropagation();
      var p = r.state.value, h = aa(p, d.value);
      r.setState({
        value: h
      }), r.handleChange(c, h);
    }, r.getSelectedIndexAfterMove = function(c, d) {
      d === void 0 && (d = r.state.selectedIndex);
      var p = us({
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
      if (!(p === void 0 || E3(p, "disabled"))) {
        var h = p.length - 1, m = r.props.wrapSelection, g = d + c;
        return !m && (g > h || g < 0) ? g = d : g > h ? g = 0 : g < 0 && (g = h), p[g].disabled ? r.getSelectedIndexAfterMove(c, g) : g;
      }
    }, r.handleIconOverrides = function(c) {
      var d = r.props.clearable, p = Ze(d && r.hasValue() && "clear", c.className);
      return {
        className: p,
        onClick: function(m) {
          Be(c, "onClick", m, c), r.handleIconClick(m);
        }
      };
    }, r.clearValue = function(c) {
      var d = r.props.multiple, p = d ? [] : "";
      r.setState({
        value: p
      }), r.handleChange(c, p);
    }, r.computeSearchInputTabIndex = function() {
      var c = r.props, d = c.disabled, p = c.tabIndex;
      return It(p) ? d ? -1 : 0 : p;
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
        return d ? -1 : It(h) ? 0 : h;
    }, r.handleSearchInputOverrides = function(c) {
      return {
        onChange: function(p, h) {
          Be(c, "onChange", p, h), r.handleSearchChange(p, h);
        }
      };
    }, r.hasValue = function() {
      var c = r.props.multiple, d = r.state.value;
      return c ? !bi(d) : !It(d) && d !== "";
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
      h || (m && Be(r.searchRef.current, "focus"), Be(r.props, "onOpen", c, r.props), d && r.setState({
        open: !0
      }), r.scrollSelectedItemIntoView());
    }, r.close = function(c, d) {
      d === void 0 && (d = r.handleClose), r.state.open && (Be(r.props, "onClose", c, r.props), r.setState({
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
      return m ? E = m : w && !d ? I = r.getSelectedItem(b) : k && (I = r.getItemByValue(_)), Wo.create(I ? pw(I) : E, {
        defaultProps: {
          className: F
        }
      });
    }, r.renderSearchInput = function() {
      var c = r.props, d = c.search, p = c.searchInput, h = r.state.searchQuery;
      return d && /* @__PURE__ */ ee.createElement(dr, {
        innerRef: r.searchRef
      }, Ai.create(p, {
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
      if (!(!d || bi(g))) {
        var y = Sn(g, r.getItemByValue);
        return Sn(_3(y), function(b, _) {
          var w = {
            active: b.value === m,
            as: "a",
            key: c0(b.key, b.value),
            onClick: r.handleLabelClick,
            onRemove: r.handleLabelRemove,
            value: b.value
          };
          return fr.create(p(b, _, w), {
            defaultProps: w
          });
        });
      }
    }, r.renderOptions = function() {
      var c = r.props, d = c.lazyLoad, p = c.multiple, h = c.search, m = c.noResultsMessage, g = r.state, y = g.open, b = g.selectedIndex, _ = g.value;
      if (d && !y) return null;
      var w = us({
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
      if (m !== null && h && bi(w))
        return /* @__PURE__ */ ee.createElement("div", {
          className: "message"
        }, m);
      var k = p ? function(F) {
        return wa(_, F);
      } : function(F) {
        return F === _;
      };
      return Sn(w, function(F, E) {
        return Ii.create(pe({
          active: k(F.value),
          selected: b === E
        }, F, {
          key: c0(F.key, F.value),
          // Needed for handling click events on disabled items
          style: pe({}, F.style, {
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
      if (!ht(d)) {
        var y = cm.only(d), b = Ze(p, q(m, "visible"), y.props.className);
        return /* @__PURE__ */ G_(y, pe({
          className: b
        }, g));
      }
      return /* @__PURE__ */ ee.createElement(Cs, pe({}, g, {
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
      !Al(u.__value, s.value) || // On option keys/values, we only check those properties to avoid recursive performance impacts.
      // https://github.com/Semantic-Org/Semantic-UI-React/issues/3000
      !fF(u0(o.options), u0(u.__options))
    );
    return d && (c.selectedIndex = l0({
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
    return !Al(o, this.props) || !Al(s, this.state);
  }, n.componentDidUpdate = function(o, s) {
    var u = this.props, c = u.closeOnBlur, d = u.minCharacters, p = u.openOnFocus, h = u.search;
    if (process.env.NODE_ENV !== "production") {
      var m = Array.isArray(this.props.value), g = ah(this.props, "value");
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
    var o = this.props, s = o.basic, u = o.button, c = o.className, d = o.compact, p = o.disabled, h = o.error, m = o.fluid, g = o.floating, y = o.icon, b = o.inline, _ = o.item, w = o.labeled, k = o.loading, F = o.multiple, E = o.pointing, I = o.search, S = o.selection, P = o.scrolling, C = o.simple, T = o.trigger, A = this.state, B = A.focus, U = A.open, ne = A.upward, K = Ze(
      "ui",
      q(U, "active visible"),
      q(p, "disabled"),
      q(h, "error"),
      q(k, "loading"),
      q(s, "basic"),
      q(u, "button"),
      q(d, "compact"),
      q(m, "fluid"),
      q(g, "floating"),
      q(b, "inline"),
      // TODO: consider augmentation to render Dropdowns as Button/Menu, solves icon/link item issues
      // https://github.com/Semantic-Org/Semantic-UI-React/issues/401#issuecomment-240487229
      // TODO: the icon class is only required when a dropdown is a button
      // useKeyOnly(icon, 'icon'),
      q(w, "labeled"),
      q(_, "item"),
      q(F, "multiple"),
      q(I, "search"),
      q(S, "selection"),
      q(C, "simple"),
      q(P, "scrolling"),
      q(ne, "upward"),
      sn(E, "pointing"),
      "dropdown",
      c
    ), ae = Ve(t, this.props), he = Qe(t, this.props), ge = this.getDropdownAriaOptions(he, this.props);
    return /* @__PURE__ */ ee.createElement(dr, {
      innerRef: this.ref
    }, /* @__PURE__ */ ee.createElement(he, pe({}, ae, ge, {
      className: K,
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
}(Hs);
kn.handledProps = ["additionLabel", "additionPosition", "allowAdditions", "as", "basic", "button", "children", "className", "clearable", "closeOnBlur", "closeOnChange", "closeOnEscape", "compact", "deburr", "defaultOpen", "defaultSearchQuery", "defaultSelectedLabel", "defaultUpward", "defaultValue", "direction", "disabled", "error", "floating", "fluid", "header", "icon", "inline", "item", "labeled", "lazyLoad", "loading", "minCharacters", "multiple", "noResultsMessage", "onAddItem", "onBlur", "onChange", "onClick", "onClose", "onFocus", "onLabelClick", "onMouseDown", "onOpen", "onSearchChange", "open", "openOnFocus", "options", "placeholder", "pointing", "renderLabel", "scrolling", "search", "searchInput", "searchQuery", "selectOnBlur", "selectOnNavigation", "selectedLabel", "selection", "simple", "tabIndex", "text", "trigger", "upward", "value", "wrapSelection"];
kn.propTypes = process.env.NODE_ENV !== "production" ? {
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
  allowAdditions: $t([Po(["options", "selection", "search"]), l.bool]),
  /** A Dropdown can reduce its complexity. */
  basic: l.bool,
  /** Format the Dropdown to appear as a button. */
  button: l.bool,
  /** Primary content. */
  children: $t([Kt(["options", "selection"]), L1({
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
  defaultSelectedLabel: $t([Po(["multiple"]), l.oneOfType([l.number, l.string])]),
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
  options: $t([Kt(["children"]), l.arrayOf(l.shape(Ii.propTypes))]),
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
  selectedLabel: $t([Po(["multiple"]), l.oneOfType([l.string, l.number])]),
  /** A dropdown can be used to select between choices in a form. */
  selection: $t([Kt(["children"]), Po(["options"]), l.bool]),
  /** A simple dropdown can open without Javascript. */
  simple: l.bool,
  /** A dropdown can receive focus. */
  tabIndex: l.oneOfType([l.number, l.string]),
  /** The text displayed in the dropdown, usually for the active item. */
  text: l.string,
  /** Custom element to trigger the menu to become visible. Takes place of 'text'. */
  trigger: $t([Kt(["selection", "text"]), l.node]),
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
kn.defaultProps = {
  additionLabel: "Add ",
  additionPosition: "top",
  closeOnBlur: !0,
  closeOnEscape: !0,
  deburr: !1,
  icon: "dropdown",
  minCharacters: 1,
  noResultsMessage: "No results found.",
  openOnFocus: !0,
  renderLabel: pw,
  searchInput: "text",
  selectOnBlur: !0,
  selectOnNavigation: !0,
  wrapSelection: !0
};
kn.autoControlledProps = ["open", "searchQuery", "selectedLabel", "value", "upward"];
kn.Divider = Jl;
kn.Header = jo;
kn.Item = Ii;
kn.Menu = Cs;
kn.SearchInput = Ai;
kn.Text = Wo;
function Hr(e) {
  return /* @__PURE__ */ ee.createElement(kn, pe({}, e, {
    selection: !0
  }));
}
Hr.handledProps = ["options"];
Hr.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Array of Dropdown.Item props e.g. `{ text: '', value: '' }` */
  options: l.arrayOf(l.shape(kn.Item.propTypes)).isRequired
} : {};
Hr.Divider = kn.Divider;
Hr.Header = kn.Header;
Hr.Item = kn.Item;
Hr.Menu = kn.Menu;
var Id = /* @__PURE__ */ function(e) {
  rn(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.ref = /* @__PURE__ */ xr(), r.focus = function() {
      return r.ref.current.focus();
    }, r.handleChange = function(c) {
      var d = _a(c, "target.value");
      Be(r.props, "onChange", c, pe({}, r.props, {
        value: d
      }));
    }, r.handleInput = function(c) {
      var d = _a(c, "target.value");
      Be(r.props, "onInput", c, pe({}, r.props, {
        value: d
      }));
    }, r;
  }
  var n = t.prototype;
  return n.render = function() {
    var o = this.props, s = o.rows, u = o.value, c = Ve(t, this.props), d = Qe(t, this.props);
    return /* @__PURE__ */ ee.createElement(dr, {
      innerRef: this.ref
    }, /* @__PURE__ */ ee.createElement(d, pe({}, c, {
      onChange: this.handleChange,
      onInput: this.handleInput,
      rows: s,
      value: u
    })));
  }, t;
}(er);
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
function Pn(e) {
  var t = e.children, n = e.className, r = e.content, o = e.control, s = e.disabled, u = e.error, c = e.inline, d = e.label, p = e.required, h = e.type, m = e.width, g = e.id, y = Ze(q(s, "disabled"), q(u, "error"), q(c, "inline"), q(p, "required"), Zn(m, "wide"), "field", n), b = Ve(Pn, e), _ = Qe(Pn, e), w = _a(u, "pointing", "above"), k = fr.create(u, {
    autoGenerateKey: !1,
    defaultProps: {
      prompt: !0,
      pointing: w,
      id: g ? g + "-error-message" : void 0,
      role: "alert",
      "aria-atomic": !0
    }
  }), F = (w === "below" || w === "right") && k, E = (w === "above" || w === "left") && k;
  if (It(o))
    return It(d) ? /* @__PURE__ */ ee.createElement(_, pe({}, b, {
      className: y,
      id: g
    }), ht(t) ? r : t) : /* @__PURE__ */ ee.createElement(_, pe({}, b, {
      className: y,
      id: g
    }), F, yh(d, {
      autoGenerateKey: !1
    }), E);
  var I = g && u ? g + "-error-message" : null, S = {
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
  }, /* @__PURE__ */ ee.createElement("label", null, F, /* @__PURE__ */ gp(o, pe({}, S, P)), " ", d, E)) : o === Jn || o === Bo ? /* @__PURE__ */ ee.createElement(_, {
    className: y
  }, F, /* @__PURE__ */ gp(o, pe({}, S, P, {
    label: d
  })), E) : /* @__PURE__ */ ee.createElement(_, {
    className: y
  }, yh(d, {
    defaultProps: {
      htmlFor: g
    },
    autoGenerateKey: !1
  }), F, /* @__PURE__ */ gp(o, pe({}, S, P)), E);
}
Pn.handledProps = ["as", "children", "className", "content", "control", "disabled", "error", "id", "inline", "label", "required", "type", "width"];
Pn.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: Mt,
  /**
   * A form control component (i.e. Dropdown) or HTML tagName (i.e. 'input').
   * Extra FormField props are passed to the control component.
   * Mutually exclusive with children.
   */
  control: l.oneOfType([l.elementType, l.oneOf(["button", "input", "select", "textarea"])]),
  /** Individual fields may be disabled. */
  disabled: l.bool,
  /** Individual fields may display an error state along with a message. */
  error: l.oneOfType([l.bool, St]),
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
  type: $t([
    Po(["control"])
    // don't strictly validate HTML types
    // a control might be passed that uses a `type` prop with unknown values
    // let the control validate if for us
  ]),
  /** A field can specify its width in grid columns */
  width: l.oneOf(lr)
} : {};
function Os(e) {
  var t = e.control, n = Ve(Os, e), r = Qe(Os, e);
  return /* @__PURE__ */ ee.createElement(r, pe({}, n, {
    control: t
  }));
}
Os.handledProps = ["as", "control"];
Os.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** A FormField control prop. */
  control: Pn.propTypes.control
} : {};
Os.defaultProps = {
  as: Pn,
  control: mt
};
function Ss(e) {
  var t = e.control, n = Ve(Ss, e), r = Qe(Ss, e);
  return /* @__PURE__ */ ee.createElement(r, pe({}, n, {
    control: t
  }));
}
Ss.handledProps = ["as", "control"];
Ss.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** A FormField control prop. */
  control: Pn.propTypes.control
} : {};
Ss.defaultProps = {
  as: Pn,
  control: Jn
};
function Ts(e) {
  var t = e.control, n = Ve(Ts, e), r = Qe(Ts, e);
  return /* @__PURE__ */ ee.createElement(r, pe({}, n, {
    control: t
  }));
}
Ts.handledProps = ["as", "control"];
Ts.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** A FormField control prop. */
  control: Pn.propTypes.control
} : {};
Ts.defaultProps = {
  as: Pn,
  control: kn
};
function ec(e) {
  var t = e.children, n = e.className, r = e.grouped, o = e.inline, s = e.unstackable, u = e.widths, c = Ze(q(r, "grouped"), q(o, "inline"), q(s, "unstackable"), Zn(u, null, !0), "fields", n), d = Ve(ec, e), p = Qe(ec, e);
  return /* @__PURE__ */ ee.createElement(p, pe({}, d, {
    className: c
  }), t);
}
ec.handledProps = ["as", "children", "className", "grouped", "inline", "unstackable", "widths"];
ec.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Fields can show related choices. */
  grouped: $t([Kt(["inline"]), l.bool]),
  /** Multiple fields may be inline in a row. */
  inline: $t([Kt(["grouped"]), l.bool]),
  /** A form group can prevent itself from stacking on mobile. */
  unstackable: l.bool,
  /** Fields Groups can specify their width in grid columns or automatically divide fields to be equal width. */
  widths: l.oneOf([].concat(lr, ["equal"]))
} : {};
var Ps = /* @__PURE__ */ function(e) {
  rn(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.inputRef = /* @__PURE__ */ xr(), r.computeIcon = function() {
      var c = r.props, d = c.loading, p = c.icon;
      if (!It(p)) return p;
      if (d) return "spinner";
    }, r.computeTabIndex = function() {
      var c = r.props, d = c.disabled, p = c.tabIndex;
      if (!It(p)) return p;
      if (d) return -1;
    }, r.focus = function(c) {
      return r.inputRef.current.focus(c);
    }, r.select = function() {
      return r.inputRef.current.select();
    }, r.handleChange = function(c) {
      var d = _a(c, "target.value");
      Be(r.props, "onChange", c, pe({}, r.props, {
        value: d
      }));
    }, r.handleChildOverrides = function(c, d) {
      return pe({}, d, c.props, {
        ref: function(h) {
          ba(c.ref, h), r.inputRef.current = h;
        }
      });
    }, r.partitionProps = function() {
      var c = r.props, d = c.disabled, p = c.type, h = r.computeTabIndex(), m = Ve(t, r.props), g = xm(m), y = g[0], b = g[1];
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
    var o = this, s = this.props, u = s.action, c = s.actionPosition, d = s.children, p = s.className, h = s.disabled, m = s.error, g = s.fluid, y = s.focus, b = s.icon, _ = s.iconPosition, w = s.input, k = s.inverted, F = s.label, E = s.labelPosition, I = s.loading, S = s.size, P = s.transparent, C = s.type, T = Ze("ui", S, q(h, "disabled"), q(m, "error"), q(g, "fluid"), q(y, "focus"), q(k, "inverted"), q(I, "loading"), q(P, "transparent"), Qn(c, "action") || q(u, "action"), Qn(_, "icon") || q(b || I, "icon"), Qn(E, "labeled") || q(F, "labeled"), "input", p), A = Qe(t, this.props), B = this.partitionProps(), U = B[0], ne = B[1];
    if (!ht(d)) {
      var K = Sn(cm.toArray(d), function(ge) {
        return ge.type !== "input" ? ge : /* @__PURE__ */ G_(ge, o.handleChildOverrides(ge, U));
      });
      return /* @__PURE__ */ ee.createElement(A, pe({}, ne, {
        className: T
      }), K);
    }
    var ae = mt.create(u, {
      autoGenerateKey: !1
    }), he = fr.create(F, {
      defaultProps: {
        className: Ze(
          "label",
          // add 'left|right corner'
          wa(E, "corner") && E
        )
      },
      autoGenerateKey: !1
    });
    return /* @__PURE__ */ ee.createElement(A, pe({}, ne, {
      className: T
    }), c === "left" && ae, E !== "right" && he, nL(w || C, {
      defaultProps: U,
      autoGenerateKey: !1
    }), We.create(this.computeIcon(), {
      autoGenerateKey: !1
    }), c !== "left" && ae, E === "right" && he);
  }, t;
}(er);
Ps.handledProps = ["action", "actionPosition", "as", "children", "className", "disabled", "error", "fluid", "focus", "icon", "iconPosition", "input", "inverted", "label", "labelPosition", "loading", "onChange", "size", "tabIndex", "transparent", "type"];
Ps.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** An Input can be formatted to alert the user to an action they may perform. */
  action: l.oneOfType([l.bool, St]),
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
  icon: l.oneOfType([l.bool, St]),
  /** An Icon can appear inside an Input on the left or right. */
  iconPosition: l.oneOf(["left"]),
  /** Shorthand for creating the HTML Input. */
  input: St,
  /** Format to appear on dark backgrounds. */
  inverted: l.bool,
  /** Optional Label to display along side the Input. */
  label: St,
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
Ps.defaultProps = {
  type: "text"
};
Ps.create = Qt(Ps, function(e) {
  return {
    type: e
  };
});
function ks(e) {
  var t = e.control, n = Ve(ks, e), r = Qe(ks, e);
  return /* @__PURE__ */ ee.createElement(r, pe({}, n, {
    control: t
  }));
}
ks.handledProps = ["as", "control"];
ks.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** A FormField control prop. */
  control: Pn.propTypes.control
} : {};
ks.defaultProps = {
  as: Pn,
  control: Ps
};
function Ns(e) {
  var t = e.control, n = Ve(Ns, e), r = Qe(Ns, e);
  return /* @__PURE__ */ ee.createElement(r, pe({}, n, {
    control: t
  }));
}
Ns.handledProps = ["as", "control"];
Ns.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** A FormField control prop. */
  control: Pn.propTypes.control
} : {};
Ns.defaultProps = {
  as: Pn,
  control: Bo
};
function Is(e) {
  var t = e.control, n = e.options, r = Ve(Is, e), o = Qe(Is, e);
  return /* @__PURE__ */ ee.createElement(o, pe({}, r, {
    control: t,
    options: n
  }));
}
Is.handledProps = ["as", "control", "options"];
Is.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** A FormField control prop. */
  control: Pn.propTypes.control,
  /** Array of Dropdown.Item props e.g. `{ text: '', value: '' }` */
  options: l.arrayOf(l.shape(kn.Item.propTypes)).isRequired
} : {};
Is.defaultProps = {
  as: Pn,
  control: Hr
};
function As(e) {
  var t = e.control, n = Ve(As, e), r = Qe(As, e);
  return /* @__PURE__ */ ee.createElement(r, pe({}, n, {
    control: t
  }));
}
As.handledProps = ["as", "control"];
As.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** A FormField control prop. */
  control: Pn.propTypes.control
} : {};
As.defaultProps = {
  as: Pn,
  control: Id
};
var $n = /* @__PURE__ */ function(e) {
  rn(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.handleSubmit = function(c) {
      var d = r.props.action;
      typeof d != "string" && Be(c, "preventDefault");
      for (var p = arguments.length, h = new Array(p > 1 ? p - 1 : 0), m = 1; m < p; m++)
        h[m - 1] = arguments[m];
      Be.apply(void 0, [r.props, "onSubmit", c, r.props].concat(h));
    }, r;
  }
  var n = t.prototype;
  return n.render = function() {
    var o = this.props, s = o.action, u = o.children, c = o.className, d = o.error, p = o.inverted, h = o.loading, m = o.reply, g = o.size, y = o.success, b = o.unstackable, _ = o.warning, w = o.widths, k = Ze("ui", g, q(d, "error"), q(p, "inverted"), q(h, "loading"), q(m, "reply"), q(y, "success"), q(b, "unstackable"), q(_, "warning"), Zn(w, null, !0), "form", c), F = Ve(t, this.props), E = Qe(t, this.props);
    return /* @__PURE__ */ ee.createElement(E, pe({}, F, {
      action: s,
      className: k,
      onSubmit: this.handleSubmit
    }), u);
  }, t;
}(er);
$n.handledProps = ["action", "as", "children", "className", "error", "inverted", "loading", "onSubmit", "reply", "size", "success", "unstackable", "warning", "widths"];
$n.propTypes = process.env.NODE_ENV !== "production" ? {
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
  size: l.oneOf(aa(pr, "medium")),
  /** Automatically show any success Message children. */
  success: l.bool,
  /** A form can prevent itself from stacking on mobile. */
  unstackable: l.bool,
  /** Automatically show any warning Message children. */
  warning: l.bool,
  /** Forms can automatically divide fields to be equal width. */
  widths: l.oneOf(["equal"])
} : {};
$n.defaultProps = {
  as: "form"
};
$n.Field = Pn;
$n.Button = Os;
$n.Checkbox = Ss;
$n.Dropdown = Ts;
$n.Group = ec;
$n.Input = ks;
$n.Radio = Ns;
$n.Select = Is;
$n.TextArea = As;
function Qa(e) {
  var t = e.children, n = e.className, r = e.computer, o = e.color, s = e.floated, u = e.largeScreen, c = e.mobile, d = e.only, p = e.stretched, h = e.tablet, m = e.textAlign, g = e.verticalAlign, y = e.widescreen, b = e.width, _ = Ze(o, q(p, "stretched"), Zu(d, "only"), Wi(m), Qn(s, "floated"), Jo(g), Zn(r, "wide computer"), Zn(u, "wide large screen"), Zn(c, "wide mobile"), Zn(h, "wide tablet"), Zn(y, "wide widescreen"), Zn(b, "wide"), "column", n), w = Ve(Qa, e), k = Qe(Qa, e);
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
  color: l.oneOf(la),
  /** A column can specify a width for a computer. */
  computer: $t([Kt(["width"]), l.oneOf(lr)]),
  /** A column can sit flush against the left or right edge of a row. */
  floated: l.oneOf(wc),
  /** A column can specify a width for a large screen device. */
  largeScreen: $t([Kt(["width"]), l.oneOf(lr)]),
  /** A column can specify a width for a mobile device. */
  mobile: $t([Kt(["width"]), l.oneOf(lr)]),
  /** A column can appear only for a specific device, or screen sizes. */
  only: Xu(Y1),
  /** A column can stretch its contents to take up the entire grid or row height. */
  stretched: l.bool,
  /** A column can specify a width for a tablet device. */
  tablet: $t([Kt(["width"]), l.oneOf(lr)]),
  /** A column can specify its text alignment. */
  textAlign: l.oneOf(zi),
  /** A column can specify its vertical alignment to have all its columns vertically centered. */
  verticalAlign: l.oneOf(Ui),
  /** A column can specify a width for a wide screen device. */
  widescreen: $t([Kt(["width"]), l.oneOf(lr)]),
  /** Represents width of column. */
  width: $t([Kt(["computer", "largeScreen", "mobile", "tablet", "widescreen"]), l.oneOf(lr)])
} : {};
Qa.create = Qt(Qa, function(e) {
  return {
    children: e
  };
});
function tc(e) {
  var t = e.centered, n = e.children, r = e.className, o = e.color, s = e.columns, u = e.divided, c = e.only, d = e.reversed, p = e.stretched, h = e.textAlign, m = e.verticalAlign, g = Ze(o, q(t, "centered"), q(u, "divided"), q(p, "stretched"), Zu(c, "only"), Zu(d, "reversed"), Wi(h), Jo(m), Zn(s, "column", !0), "row", r), y = Ve(tc, e), b = Qe(tc, e);
  return /* @__PURE__ */ ee.createElement(b, pe({}, y, {
    className: g
  }), n);
}
tc.handledProps = ["as", "centered", "children", "className", "color", "columns", "divided", "only", "reversed", "stretched", "textAlign", "verticalAlign"];
tc.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** A row can have its columns centered. */
  centered: l.bool,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** A grid row can be colored. */
  color: l.oneOf(la),
  /** Represents column count per line in Row. */
  columns: l.oneOf([].concat(lr, ["equal"])),
  /** A row can have dividers between its columns. */
  divided: l.bool,
  /** A row can appear only for a specific device, or screen sizes. */
  only: Xu(Y1),
  /** A row can specify that its columns should reverse order at different device sizes. */
  reversed: Xu(["computer", "computer vertically", "mobile", "mobile vertically", "tablet", "tablet vertically"]),
  /** A row can stretch its contents to take up the entire column height. */
  stretched: l.bool,
  /** A row can specify its text alignment. */
  textAlign: l.oneOf(zi),
  /** A row can specify its vertical alignment to have all its columns vertically centered. */
  verticalAlign: l.oneOf(Ui)
} : {};
function Ri(e) {
  var t = e.celled, n = e.centered, r = e.children, o = e.className, s = e.columns, u = e.container, c = e.divided, d = e.doubling, p = e.inverted, h = e.padded, m = e.relaxed, g = e.reversed, y = e.stackable, b = e.stretched, _ = e.textAlign, w = e.verticalAlign, k = Ze("ui", q(n, "centered"), q(u, "container"), q(d, "doubling"), q(p, "inverted"), q(y, "stackable"), q(b, "stretched"), sn(t, "celled"), sn(c, "divided"), sn(h, "padded"), sn(m, "relaxed"), Zu(g, "reversed"), Wi(_), Jo(w), Zn(s, "column", !0), "grid", o), F = Ve(Ri, e), E = Qe(Ri, e);
  return /* @__PURE__ */ ee.createElement(E, pe({}, F, {
    className: k
  }), r);
}
Ri.handledProps = ["as", "celled", "centered", "children", "className", "columns", "container", "divided", "doubling", "inverted", "padded", "relaxed", "reversed", "stackable", "stretched", "textAlign", "verticalAlign"];
Ri.Column = Qa;
Ri.Row = tc;
Ri.propTypes = process.env.NODE_ENV !== "production" ? {
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
  columns: l.oneOf([].concat(lr, ["equal"])),
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
  textAlign: l.oneOf(zi),
  /** A grid can specify its vertical alignment to have all its columns vertically centered. */
  verticalAlign: l.oneOf(Ui)
} : {};
function Mi(e) {
  var t = e.children, n = e.className, r = Ze(n), o = Ve(Mi, e), s = Qe(Mi, e);
  return /* @__PURE__ */ ee.createElement(s, pe({}, o, {
    className: r
  }), t);
}
Mi.handledProps = ["as", "children", "className"];
Mi.defaultProps = {
  as: "tbody"
};
Mi.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string
} : {};
function Sa(e) {
  var t = e.active, n = e.children, r = e.className, o = e.collapsing, s = e.content, u = e.disabled, c = e.error, d = e.icon, p = e.negative, h = e.positive, m = e.selectable, g = e.singleLine, y = e.textAlign, b = e.verticalAlign, _ = e.warning, w = e.width, k = Ze(q(t, "active"), q(o, "collapsing"), q(u, "disabled"), q(c, "error"), q(p, "negative"), q(h, "positive"), q(m, "selectable"), q(g, "single line"), q(_, "warning"), Wi(y), Jo(b), Zn(w, "wide"), r), F = Ve(Sa, e), E = Qe(Sa, e);
  return ht(n) ? /* @__PURE__ */ ee.createElement(E, pe({}, F, {
    className: k
  }), We.create(d), s) : /* @__PURE__ */ ee.createElement(E, pe({}, F, {
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
  content: Mt,
  /** A cell can be disabled. */
  disabled: l.bool,
  /** A cell may call attention to an error or a negative value. */
  error: l.bool,
  /** Add an Icon by name, props object, or pass an <Icon /> */
  icon: St,
  /** A cell may let a user know whether a value is bad. */
  negative: l.bool,
  /** A cell may let a user know whether a value is good. */
  positive: l.bool,
  /** A cell can be selectable. */
  selectable: l.bool,
  /** A cell can specify that its contents should remain on a single line and not wrap. */
  singleLine: l.bool,
  /** A table cell can adjust its text alignment. */
  textAlign: l.oneOf(aa(zi, "justified")),
  /** A table cell can adjust its text alignment. */
  verticalAlign: l.oneOf(Ui),
  /** A cell may warn a user. */
  warning: l.bool,
  /** A table can specify the width of individual columns independently. */
  width: l.oneOf(lr)
} : {};
Sa.create = Qt(Sa, function(e) {
  return {
    content: e
  };
});
function zo(e) {
  var t = e.children, n = e.className, r = e.content, o = e.fullWidth, s = Ze(q(o, "full-width"), n), u = Ve(zo, e), c = Qe(zo, e);
  return /* @__PURE__ */ ee.createElement(c, pe({}, u, {
    className: s
  }), ht(t) ? r : t);
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
  content: Mt,
  /** A definition table can have a full width header or footer, filling in the gap left by the first column. */
  fullWidth: l.bool
} : {};
function qs(e) {
  var t = e.as, n = Ve(qs, e);
  return /* @__PURE__ */ ee.createElement(zo, pe({}, n, {
    as: t
  }));
}
qs.handledProps = ["as"];
qs.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType
} : {};
qs.defaultProps = {
  as: "tfoot"
};
function xc(e) {
  var t = e.as, n = e.className, r = e.sorted, o = Ze(Qn(r, "sorted"), n), s = Ve(xc, e);
  return /* @__PURE__ */ ee.createElement(Sa, pe({}, s, {
    as: t,
    className: o
  }));
}
xc.handledProps = ["as", "className", "sorted"];
xc.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Additional classes. */
  className: l.string,
  /** A header cell can be sorted in ascending or descending order. */
  sorted: l.oneOf(["ascending", "descending"])
} : {};
xc.defaultProps = {
  as: "th"
};
function $r(e) {
  var t = e.active, n = e.cellAs, r = e.cells, o = e.children, s = e.className, u = e.disabled, c = e.error, d = e.negative, p = e.positive, h = e.textAlign, m = e.verticalAlign, g = e.warning, y = Ze(q(t, "active"), q(u, "disabled"), q(c, "error"), q(d, "negative"), q(p, "positive"), q(g, "warning"), Wi(h), Jo(m), s), b = Ve($r, e), _ = Qe($r, e);
  return ht(o) ? /* @__PURE__ */ ee.createElement(_, pe({}, b, {
    className: y
  }), Sn(r, function(w) {
    return Sa.create(w, {
      defaultProps: {
        as: n
      }
    });
  })) : /* @__PURE__ */ ee.createElement(_, pe({}, b, {
    className: y
  }), o);
}
$r.handledProps = ["active", "as", "cellAs", "cells", "children", "className", "disabled", "error", "negative", "positive", "textAlign", "verticalAlign", "warning"];
$r.defaultProps = {
  as: "tr",
  cellAs: "td"
};
$r.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** A row can be active or selected by a user. */
  active: l.bool,
  /** An element type to render as (string or function). */
  cellAs: l.elementType,
  /** Shorthand array of props for TableCell. */
  cells: _c,
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
  textAlign: l.oneOf(aa(zi, "justified")),
  /** A table row can adjust its vertical alignment. */
  verticalAlign: l.oneOf(Ui),
  /** A row may warn a user. */
  warning: l.bool
} : {};
$r.create = Qt($r, function(e) {
  return {
    cells: e
  };
});
function Ot(e) {
  var t = e.attached, n = e.basic, r = e.celled, o = e.children, s = e.className, u = e.collapsing, c = e.color, d = e.columns, p = e.compact, h = e.definition, m = e.fixed, g = e.footerRow, y = e.headerRow, b = e.headerRows, _ = e.inverted, w = e.padded, k = e.renderBodyRow, F = e.selectable, E = e.singleLine, I = e.size, S = e.sortable, P = e.stackable, C = e.striped, T = e.structured, A = e.tableData, B = e.textAlign, U = e.unstackable, ne = e.verticalAlign, K = Ze("ui", c, I, q(r, "celled"), q(u, "collapsing"), q(h, "definition"), q(m, "fixed"), q(_, "inverted"), q(F, "selectable"), q(E, "single line"), q(S, "sortable"), q(P, "stackable"), q(C, "striped"), q(T, "structured"), q(U, "unstackable"), sn(t, "attached"), sn(n, "basic"), sn(p, "compact"), sn(w, "padded"), Wi(B), Jo(ne), Zn(d, "column"), "table", s), ae = Ve(Ot, e), he = Qe(Ot, e);
  if (!ht(o))
    return /* @__PURE__ */ ee.createElement(he, pe({}, ae, {
      className: K
    }), o);
  var ge = y || b, Ne = {
    defaultProps: {
      cellAs: "th"
    }
  }, ce = ge && /* @__PURE__ */ ee.createElement(zo, null, $r.create(y, Ne), Sn(b, function(me) {
    return $r.create(me, Ne);
  }));
  return /* @__PURE__ */ ee.createElement(he, pe({}, ae, {
    className: K
  }), ce, /* @__PURE__ */ ee.createElement(Mi, null, k && Sn(A, function(me, te) {
    return $r.create(k(me, te));
  })), g && /* @__PURE__ */ ee.createElement(qs, null, $r.create(g)));
}
Ot.handledProps = ["as", "attached", "basic", "celled", "children", "className", "collapsing", "color", "columns", "compact", "definition", "fixed", "footerRow", "headerRow", "headerRows", "inverted", "padded", "renderBodyRow", "selectable", "singleLine", "size", "sortable", "stackable", "striped", "structured", "tableData", "textAlign", "unstackable", "verticalAlign"];
Ot.defaultProps = {
  as: "table"
};
Ot.propTypes = process.env.NODE_ENV !== "production" ? {
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
  color: l.oneOf(la),
  /** A table can specify its column count to divide its content evenly. */
  columns: l.oneOf(lr),
  /** A table may sometimes need to be more compact to make more rows visible at a time. */
  compact: l.oneOfType([l.bool, l.oneOf(["very"])]),
  /** A table may be formatted to emphasize a first column that defines a rows content. */
  definition: l.bool,
  /**
   * A table can use fixed a special faster form of table rendering that does not resize table cells based on content
   */
  fixed: l.bool,
  /** Shorthand for a TableRow to be placed within Table.Footer. */
  footerRow: St,
  /** Shorthand for a TableRow to be placed within Table.Header. */
  headerRow: $t([Kt(["headerRows"]), St]),
  /** Shorthand for multiple TableRows to be placed within Table.Header. */
  headerRows: $t([Kt(["headerRow"]), _c]),
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
  renderBodyRow: $t([Kt(["children"]), Po(["tableData"]), l.func]),
  /** A table can have its rows appear selectable. */
  selectable: l.bool,
  /** A table can specify that its cell contents should remain on a single line and not wrap. */
  singleLine: l.bool,
  /** A table can also be small or large. */
  size: l.oneOf(aa(pr, "mini", "tiny", "medium", "big", "huge", "massive")),
  /** A table may allow a user to sort contents by clicking on a table header. */
  sortable: l.bool,
  /** A table can specify how it stacks table content responsively. */
  stackable: l.bool,
  /** A table can stripe alternate rows of content with a darker color to increase contrast. */
  striped: l.bool,
  /** A table can be formatted to display complex structured data. */
  structured: l.bool,
  /** Data to be passed to the renderBodyRow function. */
  tableData: $t([Kt(["children"]), Po(["renderBodyRow"]), l.array]),
  /** A table can adjust its text alignment. */
  textAlign: l.oneOf(aa(zi, "justified")),
  /** A table can specify how it stacks table content responsively. */
  unstackable: l.bool,
  /** A table can adjust its text alignment. */
  verticalAlign: l.oneOf(Ui)
} : {};
Ot.Body = Mi;
Ot.Cell = Sa;
Ot.Footer = qs;
Ot.Header = zo;
Ot.HeaderCell = xc;
Ot.Row = $r;
function Uo(e) {
  var t = e.children, n = e.className, r = e.content, o = Ze("sub header", n), s = Ve(Uo, e), u = Qe(Uo, e);
  return /* @__PURE__ */ ee.createElement(u, pe({}, s, {
    className: o
  }), ht(t) ? r : t);
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
  content: Mt
} : {};
Uo.create = Qt(Uo, function(e) {
  return {
    content: e
  };
});
function Rs(e) {
  var t = e.children, n = e.className, r = e.content, o = Ze("content", n), s = Ve(Rs, e), u = Qe(Rs, e);
  return /* @__PURE__ */ ee.createElement(u, pe({}, s, {
    className: o
  }), ht(t) ? r : t);
}
Rs.handledProps = ["as", "children", "className", "content"];
Rs.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: Mt
} : {};
function Xn(e) {
  var t = e.attached, n = e.block, r = e.children, o = e.className, s = e.color, u = e.content, c = e.disabled, d = e.dividing, p = e.floated, h = e.icon, m = e.image, g = e.inverted, y = e.size, b = e.sub, _ = e.subheader, w = e.textAlign, k = Ze("ui", s, y, q(n, "block"), q(c, "disabled"), q(d, "dividing"), Qn(p, "floated"), q(h === !0, "icon"), q(m === !0, "image"), q(g, "inverted"), q(b, "sub"), sn(t, "attached"), Wi(w), "header", o), F = Ve(Xn, e), E = Qe(Xn, e);
  if (!ht(r))
    return /* @__PURE__ */ ee.createElement(E, pe({}, F, {
      className: k
    }), r);
  var I = We.create(h, {
    autoGenerateKey: !1
  }), S = Er.create(m, {
    autoGenerateKey: !1
  }), P = Uo.create(_, {
    autoGenerateKey: !1
  });
  return I || S ? /* @__PURE__ */ ee.createElement(E, pe({}, F, {
    className: k
  }), I || S, (u || P) && /* @__PURE__ */ ee.createElement(Rs, null, u, P)) : /* @__PURE__ */ ee.createElement(E, pe({}, F, {
    className: k
  }), u, P);
}
Xn.handledProps = ["as", "attached", "block", "children", "className", "color", "content", "disabled", "dividing", "floated", "icon", "image", "inverted", "size", "sub", "subheader", "textAlign"];
Xn.propTypes = process.env.NODE_ENV !== "production" ? {
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
  color: l.oneOf(la),
  /** Shorthand for primary content. */
  content: Mt,
  /** Show that the header is inactive. */
  disabled: l.bool,
  /** Divide header from the content below it. */
  dividing: l.bool,
  /** Header can sit to the left or right of other content. */
  floated: l.oneOf(wc),
  /** Add an icon by icon name or pass an Icon. */
  icon: $t([Kt(["image"]), l.oneOfType([l.bool, St])]),
  /** Add an image by img src or pass an Image. */
  image: $t([Kt(["icon"]), l.oneOfType([l.bool, St])]),
  /** Inverts the color of the header for dark backgrounds. */
  inverted: l.bool,
  /** Content headings are sized with em and are based on the font-size of their container. */
  size: l.oneOf(aa(pr, "big", "massive", "mini")),
  /** Headers may be formatted to label smaller or de-emphasized content. */
  sub: l.bool,
  /** Shorthand for Header.Subheader. */
  subheader: St,
  /** Align header content. */
  textAlign: l.oneOf(zi)
} : {};
Xn.Content = Rs;
Xn.Subheader = Uo;
function nc(e) {
  var t = e.active, n = e.children, r = e.className, o = e.content, s = e.disabled, u = e.indeterminate, c = e.inline, d = e.inverted, p = e.size, h = Ze("ui", p, q(t, "active"), q(s, "disabled"), q(u, "indeterminate"), q(d, "inverted"), q(n || o, "text"), sn(c, "inline"), "loader", r), m = Ve(nc, e), g = Qe(nc, e);
  return /* @__PURE__ */ ee.createElement(g, pe({}, m, {
    className: h
  }), ht(n) ? o : n);
}
nc.handledProps = ["active", "as", "children", "className", "content", "disabled", "indeterminate", "inline", "inverted", "size"];
nc.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** A loader can be active or visible. */
  active: l.bool,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: Mt,
  /** A loader can be disabled or hidden. */
  disabled: l.bool,
  /** A loader can show it's unsure of how long a task will take. */
  indeterminate: l.bool,
  /** Loaders can appear inline with content. */
  inline: l.oneOfType([l.bool, l.oneOf(["centered"])]),
  /** Loaders can have their colors inverted. */
  inverted: l.bool,
  /** Loaders can have different sizes. */
  size: l.oneOf(pr)
} : {};
function Y3(e) {
  return Ur(e) && e.nodeType === 1 && !Pd(e);
}
var q3 = L.createContext();
L.createContext();
var V3 = function(t) {
  return Array.isArray(t) ? t[0] : t;
}, G3 = function(t) {
  if (typeof t == "function") {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      r[o - 1] = arguments[o];
    return t.apply(void 0, r);
  }
}, K3 = function(t, n) {
  if (typeof t == "function")
    return G3(t, n);
  t != null && (t.current = n);
}, d0 = function(t) {
  return t.reduce(function(n, r) {
    var o = r[0], s = r[1];
    return n[o] = s, n;
  }, {});
}, f0 = typeof window < "u" && window.document && window.document.createElement ? L.useLayoutEffect : L.useEffect, cr = "top", Yr = "bottom", qr = "right", ur = "left", Cm = "auto", Ec = [cr, Yr, qr, ur], Ms = "start", rc = "end", Z3 = "clippingParents", hw = "viewport", bl = "popper", X3 = "reference", p0 = /* @__PURE__ */ Ec.reduce(function(e, t) {
  return e.concat([t + "-" + Ms, t + "-" + rc]);
}, []), mw = /* @__PURE__ */ [].concat(Ec, [Cm]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Ms, t + "-" + rc]);
}, []), Q3 = "beforeRead", J3 = "read", e$ = "afterRead", t$ = "beforeMain", n$ = "main", r$ = "afterMain", a$ = "beforeWrite", o$ = "write", i$ = "afterWrite", s$ = [Q3, J3, e$, t$, n$, r$, a$, o$, i$];
function Ta(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Cr(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Di(e) {
  var t = Cr(e).Element;
  return e instanceof t || e instanceof Element;
}
function jr(e) {
  var t = Cr(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Om(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Cr(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function l$(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, s = t.elements[n];
    !jr(s) || !Ta(s) || (Object.assign(s.style, r), Object.keys(o).forEach(function(u) {
      var c = o[u];
      c === !1 ? s.removeAttribute(u) : s.setAttribute(u, c === !0 ? "" : c);
    }));
  });
}
function c$(e) {
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
      !jr(o) || !Ta(o) || (Object.assign(o.style, c), Object.keys(s).forEach(function(d) {
        o.removeAttribute(d);
      }));
    });
  };
}
const u$ = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: l$,
  effect: c$,
  requires: ["computeStyles"]
};
function Ca(e) {
  return e.split("-")[0];
}
var Ci = Math.max, ed = Math.min, Ds = Math.round;
function Eh() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function gw() {
  return !/^((?!chrome|android).)*safari/i.test(Eh());
}
function Ls(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, s = 1;
  t && jr(e) && (o = e.offsetWidth > 0 && Ds(r.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && Ds(r.height) / e.offsetHeight || 1);
  var u = Di(e) ? Cr(e) : window, c = u.visualViewport, d = !gw() && n, p = (r.left + (d && c ? c.offsetLeft : 0)) / o, h = (r.top + (d && c ? c.offsetTop : 0)) / s, m = r.width / o, g = r.height / s;
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
function Sm(e) {
  var t = Ls(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function vw(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Om(n)) {
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
  return Cr(e).getComputedStyle(e);
}
function d$(e) {
  return ["table", "td", "th"].indexOf(Ta(e)) >= 0;
}
function ei(e) {
  return ((Di(e) ? e.ownerDocument : (
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
    (Om(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    ei(e)
  );
}
function h0(e) {
  return !jr(e) || // https://github.com/popperjs/popper-core/issues/837
  Ja(e).position === "fixed" ? null : e.offsetParent;
}
function f$(e) {
  var t = /firefox/i.test(Eh()), n = /Trident/i.test(Eh());
  if (n && jr(e)) {
    var r = Ja(e);
    if (r.position === "fixed")
      return null;
  }
  var o = Ad(e);
  for (Om(o) && (o = o.host); jr(o) && ["html", "body"].indexOf(Ta(o)) < 0; ) {
    var s = Ja(o);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Cc(e) {
  for (var t = Cr(e), n = h0(e); n && d$(n) && Ja(n).position === "static"; )
    n = h0(n);
  return n && (Ta(n) === "html" || Ta(n) === "body" && Ja(n).position === "static") ? t : n || f$(e) || t;
}
function Tm(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Rl(e, t, n) {
  return Ci(e, ed(t, n));
}
function p$(e, t, n) {
  var r = Rl(e, t, n);
  return r > n ? n : r;
}
function yw() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function bw(e) {
  return Object.assign({}, yw(), e);
}
function _w(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var h$ = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, bw(typeof t != "number" ? t : _w(t, Ec));
};
function m$(e) {
  var t, n = e.state, r = e.name, o = e.options, s = n.elements.arrow, u = n.modifiersData.popperOffsets, c = Ca(n.placement), d = Tm(c), p = [ur, qr].indexOf(c) >= 0, h = p ? "height" : "width";
  if (!(!s || !u)) {
    var m = h$(o.padding, n), g = Sm(s), y = d === "y" ? cr : ur, b = d === "y" ? Yr : qr, _ = n.rects.reference[h] + n.rects.reference[d] - u[d] - n.rects.popper[h], w = u[d] - n.rects.reference[d], k = Cc(s), F = k ? d === "y" ? k.clientHeight || 0 : k.clientWidth || 0 : 0, E = _ / 2 - w / 2, I = m[y], S = F - g[h] - m[b], P = F / 2 - g[h] / 2 + E, C = Rl(I, P, S), T = d;
    n.modifiersData[r] = (t = {}, t[T] = C, t.centerOffset = C - P, t);
  }
}
function g$(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || vw(t.elements.popper, o) && (t.elements.arrow = o));
}
const v$ = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: m$,
  effect: g$,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Fs(e) {
  return e.split("-")[1];
}
var y$ = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function b$(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return {
    x: Ds(n * o) / o || 0,
    y: Ds(r * o) / o || 0
  };
}
function m0(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, s = e.variation, u = e.offsets, c = e.position, d = e.gpuAcceleration, p = e.adaptive, h = e.roundOffsets, m = e.isFixed, g = u.x, y = g === void 0 ? 0 : g, b = u.y, _ = b === void 0 ? 0 : b, w = typeof h == "function" ? h({
    x: y,
    y: _
  }) : {
    x: y,
    y: _
  };
  y = w.x, _ = w.y;
  var k = u.hasOwnProperty("x"), F = u.hasOwnProperty("y"), E = ur, I = cr, S = window;
  if (p) {
    var P = Cc(n), C = "clientHeight", T = "clientWidth";
    if (P === Cr(n) && (P = ei(n), Ja(P).position !== "static" && c === "absolute" && (C = "scrollHeight", T = "scrollWidth")), P = P, o === cr || (o === ur || o === qr) && s === rc) {
      I = Yr;
      var A = m && P === S && S.visualViewport ? S.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        P[C]
      );
      _ -= A - r.height, _ *= d ? 1 : -1;
    }
    if (o === ur || (o === cr || o === Yr) && s === rc) {
      E = qr;
      var B = m && P === S && S.visualViewport ? S.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        P[T]
      );
      y -= B - r.width, y *= d ? 1 : -1;
    }
  }
  var U = Object.assign({
    position: c
  }, p && y$), ne = h === !0 ? b$({
    x: y,
    y: _
  }, Cr(n)) : {
    x: y,
    y: _
  };
  if (y = ne.x, _ = ne.y, d) {
    var K;
    return Object.assign({}, U, (K = {}, K[I] = F ? "0" : "", K[E] = k ? "0" : "", K.transform = (S.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + _ + "px)" : "translate3d(" + y + "px, " + _ + "px, 0)", K));
  }
  return Object.assign({}, U, (t = {}, t[I] = F ? _ + "px" : "", t[E] = k ? y + "px" : "", t.transform = "", t));
}
function _$(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, s = n.adaptive, u = s === void 0 ? !0 : s, c = n.roundOffsets, d = c === void 0 ? !0 : c, p = {
    placement: Ca(t.placement),
    variation: Fs(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, m0(Object.assign({}, p, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: u,
    roundOffsets: d
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, m0(Object.assign({}, p, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: d
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const w$ = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: _$,
  data: {}
};
var Cu = {
  passive: !0
};
function x$(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, s = o === void 0 ? !0 : o, u = r.resize, c = u === void 0 ? !0 : u, d = Cr(t.elements.popper), p = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && p.forEach(function(h) {
    h.addEventListener("scroll", n.update, Cu);
  }), c && d.addEventListener("resize", n.update, Cu), function() {
    s && p.forEach(function(h) {
      h.removeEventListener("scroll", n.update, Cu);
    }), c && d.removeEventListener("resize", n.update, Cu);
  };
}
const E$ = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: x$,
  data: {}
};
var C$ = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Du(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return C$[t];
  });
}
var O$ = {
  start: "end",
  end: "start"
};
function g0(e) {
  return e.replace(/start|end/g, function(t) {
    return O$[t];
  });
}
function Pm(e) {
  var t = Cr(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function km(e) {
  return Ls(ei(e)).left + Pm(e).scrollLeft;
}
function S$(e, t) {
  var n = Cr(e), r = ei(e), o = n.visualViewport, s = r.clientWidth, u = r.clientHeight, c = 0, d = 0;
  if (o) {
    s = o.width, u = o.height;
    var p = gw();
    (p || !p && t === "fixed") && (c = o.offsetLeft, d = o.offsetTop);
  }
  return {
    width: s,
    height: u,
    x: c + km(e),
    y: d
  };
}
function T$(e) {
  var t, n = ei(e), r = Pm(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, s = Ci(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), u = Ci(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), c = -r.scrollLeft + km(e), d = -r.scrollTop;
  return Ja(o || n).direction === "rtl" && (c += Ci(n.clientWidth, o ? o.clientWidth : 0) - s), {
    width: s,
    height: u,
    x: c,
    y: d
  };
}
function Nm(e) {
  var t = Ja(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function ww(e) {
  return ["html", "body", "#document"].indexOf(Ta(e)) >= 0 ? e.ownerDocument.body : jr(e) && Nm(e) ? e : ww(Ad(e));
}
function Ml(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = ww(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), s = Cr(r), u = o ? [s].concat(s.visualViewport || [], Nm(r) ? r : []) : r, c = t.concat(u);
  return o ? c : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    c.concat(Ml(Ad(u)))
  );
}
function Ch(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function P$(e, t) {
  var n = Ls(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function v0(e, t, n) {
  return t === hw ? Ch(S$(e, n)) : Di(t) ? P$(t, n) : Ch(T$(ei(e)));
}
function k$(e) {
  var t = Ml(Ad(e)), n = ["absolute", "fixed"].indexOf(Ja(e).position) >= 0, r = n && jr(e) ? Cc(e) : e;
  return Di(r) ? t.filter(function(o) {
    return Di(o) && vw(o, r) && Ta(o) !== "body";
  }) : [];
}
function N$(e, t, n, r) {
  var o = t === "clippingParents" ? k$(e) : [].concat(t), s = [].concat(o, [n]), u = s[0], c = s.reduce(function(d, p) {
    var h = v0(e, p, r);
    return d.top = Ci(h.top, d.top), d.right = ed(h.right, d.right), d.bottom = ed(h.bottom, d.bottom), d.left = Ci(h.left, d.left), d;
  }, v0(e, u, r));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function xw(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? Ca(r) : null, s = r ? Fs(r) : null, u = t.x + t.width / 2 - n.width / 2, c = t.y + t.height / 2 - n.height / 2, d;
  switch (o) {
    case cr:
      d = {
        x: u,
        y: t.y - n.height
      };
      break;
    case Yr:
      d = {
        x: u,
        y: t.y + t.height
      };
      break;
    case qr:
      d = {
        x: t.x + t.width,
        y: c
      };
      break;
    case ur:
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
  var p = o ? Tm(o) : null;
  if (p != null) {
    var h = p === "y" ? "height" : "width";
    switch (s) {
      case Ms:
        d[p] = d[p] - (t[h] / 2 - n[h] / 2);
        break;
      case rc:
        d[p] = d[p] + (t[h] / 2 - n[h] / 2);
        break;
    }
  }
  return d;
}
function ac(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, s = n.strategy, u = s === void 0 ? e.strategy : s, c = n.boundary, d = c === void 0 ? Z3 : c, p = n.rootBoundary, h = p === void 0 ? hw : p, m = n.elementContext, g = m === void 0 ? bl : m, y = n.altBoundary, b = y === void 0 ? !1 : y, _ = n.padding, w = _ === void 0 ? 0 : _, k = bw(typeof w != "number" ? w : _w(w, Ec)), F = g === bl ? X3 : bl, E = e.rects.popper, I = e.elements[b ? F : g], S = N$(Di(I) ? I : I.contextElement || ei(e.elements.popper), d, h, u), P = Ls(e.elements.reference), C = xw({
    reference: P,
    element: E,
    placement: o
  }), T = Ch(Object.assign({}, E, C)), A = g === bl ? T : P, B = {
    top: S.top - A.top + k.top,
    bottom: A.bottom - S.bottom + k.bottom,
    left: S.left - A.left + k.left,
    right: A.right - S.right + k.right
  }, U = e.modifiersData.offset;
  if (g === bl && U) {
    var ne = U[o];
    Object.keys(B).forEach(function(K) {
      var ae = [qr, Yr].indexOf(K) >= 0 ? 1 : -1, he = [cr, Yr].indexOf(K) >= 0 ? "y" : "x";
      B[K] += ne[he] * ae;
    });
  }
  return B;
}
function I$(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, s = n.rootBoundary, u = n.padding, c = n.flipVariations, d = n.allowedAutoPlacements, p = d === void 0 ? mw : d, h = Fs(r), m = h ? c ? p0 : p0.filter(function(b) {
    return Fs(b) === h;
  }) : Ec, g = m.filter(function(b) {
    return p.indexOf(b) >= 0;
  });
  g.length === 0 && (g = m);
  var y = g.reduce(function(b, _) {
    return b[_] = ac(e, {
      placement: _,
      boundary: o,
      rootBoundary: s,
      padding: u
    })[Ca(_)], b;
  }, {});
  return Object.keys(y).sort(function(b, _) {
    return y[b] - y[_];
  });
}
function A$(e) {
  if (Ca(e) === Cm)
    return [];
  var t = Du(e);
  return [g0(e), t, g0(t)];
}
function R$(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, s = o === void 0 ? !0 : o, u = n.altAxis, c = u === void 0 ? !0 : u, d = n.fallbackPlacements, p = n.padding, h = n.boundary, m = n.rootBoundary, g = n.altBoundary, y = n.flipVariations, b = y === void 0 ? !0 : y, _ = n.allowedAutoPlacements, w = t.options.placement, k = Ca(w), F = k === w, E = d || (F || !b ? [Du(w)] : A$(w)), I = [w].concat(E).reduce(function(Oe, Ee) {
      return Oe.concat(Ca(Ee) === Cm ? I$(t, {
        placement: Ee,
        boundary: h,
        rootBoundary: m,
        padding: p,
        flipVariations: b,
        allowedAutoPlacements: _
      }) : Ee);
    }, []), S = t.rects.reference, P = t.rects.popper, C = /* @__PURE__ */ new Map(), T = !0, A = I[0], B = 0; B < I.length; B++) {
      var U = I[B], ne = Ca(U), K = Fs(U) === Ms, ae = [cr, Yr].indexOf(ne) >= 0, he = ae ? "width" : "height", ge = ac(t, {
        placement: U,
        boundary: h,
        rootBoundary: m,
        altBoundary: g,
        padding: p
      }), Ne = ae ? K ? qr : ur : K ? Yr : cr;
      S[he] > P[he] && (Ne = Du(Ne));
      var ce = Du(Ne), me = [];
      if (s && me.push(ge[ne] <= 0), c && me.push(ge[Ne] <= 0, ge[ce] <= 0), me.every(function(Oe) {
        return Oe;
      })) {
        A = U, T = !1;
        break;
      }
      C.set(U, me);
    }
    if (T)
      for (var te = b ? 3 : 1, re = function(Ee) {
        var fe = I.find(function(Te) {
          var De = C.get(Te);
          if (De)
            return De.slice(0, Ee).every(function(W) {
              return W;
            });
        });
        if (fe)
          return A = fe, "break";
      }, se = te; se > 0; se--) {
        var be = re(se);
        if (be === "break") break;
      }
    t.placement !== A && (t.modifiersData[r]._skip = !0, t.placement = A, t.reset = !0);
  }
}
const M$ = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: R$,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function y0(e, t, n) {
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
function b0(e) {
  return [cr, qr, Yr, ur].some(function(t) {
    return e[t] >= 0;
  });
}
function D$(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, s = t.modifiersData.preventOverflow, u = ac(t, {
    elementContext: "reference"
  }), c = ac(t, {
    altBoundary: !0
  }), d = y0(u, r), p = y0(c, o, s), h = b0(d), m = b0(p);
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
const L$ = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: D$
};
function F$(e, t, n) {
  var r = Ca(e), o = [ur, cr].indexOf(r) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, u = s[0], c = s[1];
  return u = u || 0, c = (c || 0) * o, [ur, qr].indexOf(r) >= 0 ? {
    x: c,
    y: u
  } : {
    x: u,
    y: c
  };
}
function $$(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, s = o === void 0 ? [0, 0] : o, u = mw.reduce(function(h, m) {
    return h[m] = F$(m, t.rects, s), h;
  }, {}), c = u[t.placement], d = c.x, p = c.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += d, t.modifiersData.popperOffsets.y += p), t.modifiersData[r] = u;
}
const B$ = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: $$
};
function j$(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = xw({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const W$ = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: j$,
  data: {}
};
function z$(e) {
  return e === "x" ? "y" : "x";
}
function U$(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, s = o === void 0 ? !0 : o, u = n.altAxis, c = u === void 0 ? !1 : u, d = n.boundary, p = n.rootBoundary, h = n.altBoundary, m = n.padding, g = n.tether, y = g === void 0 ? !0 : g, b = n.tetherOffset, _ = b === void 0 ? 0 : b, w = ac(t, {
    boundary: d,
    rootBoundary: p,
    padding: m,
    altBoundary: h
  }), k = Ca(t.placement), F = Fs(t.placement), E = !F, I = Tm(k), S = z$(I), P = t.modifiersData.popperOffsets, C = t.rects.reference, T = t.rects.popper, A = typeof _ == "function" ? _(Object.assign({}, t.rects, {
    placement: t.placement
  })) : _, B = typeof A == "number" ? {
    mainAxis: A,
    altAxis: A
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, A), U = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, ne = {
    x: 0,
    y: 0
  };
  if (P) {
    if (s) {
      var K, ae = I === "y" ? cr : ur, he = I === "y" ? Yr : qr, ge = I === "y" ? "height" : "width", Ne = P[I], ce = Ne + w[ae], me = Ne - w[he], te = y ? -T[ge] / 2 : 0, re = F === Ms ? C[ge] : T[ge], se = F === Ms ? -T[ge] : -C[ge], be = t.elements.arrow, Oe = y && be ? Sm(be) : {
        width: 0,
        height: 0
      }, Ee = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : yw(), fe = Ee[ae], Te = Ee[he], De = Rl(0, C[ge], Oe[ge]), W = E ? C[ge] / 2 - te - De - fe - B.mainAxis : re - De - fe - B.mainAxis, z = E ? -C[ge] / 2 + te + De + Te + B.mainAxis : se + De + Te + B.mainAxis, $ = t.elements.arrow && Cc(t.elements.arrow), M = $ ? I === "y" ? $.clientTop || 0 : $.clientLeft || 0 : 0, V = (K = U == null ? void 0 : U[I]) != null ? K : 0, G = Ne + W - V - M, ie = Ne + z - V, Pe = Rl(y ? ed(ce, G) : ce, Ne, y ? Ci(me, ie) : me);
      P[I] = Pe, ne[I] = Pe - Ne;
    }
    if (c) {
      var Z, Se = I === "x" ? cr : ur, le = I === "x" ? Yr : qr, H = P[S], Q = S === "y" ? "height" : "width", _e = H + w[Se], Ie = H - w[le], Le = [cr, ur].indexOf(k) !== -1, Fe = (Z = U == null ? void 0 : U[S]) != null ? Z : 0, $e = Le ? _e : H - C[Q] - T[Q] - Fe + B.altAxis, tt = Le ? H + C[Q] + T[Q] - Fe - B.altAxis : Ie, Xe = y && Le ? p$($e, H, tt) : Rl(y ? $e : _e, H, y ? tt : Ie);
      P[S] = Xe, ne[S] = Xe - H;
    }
    t.modifiersData[r] = ne;
  }
}
const H$ = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: U$,
  requiresIfExists: ["offset"]
};
function Y$(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function q$(e) {
  return e === Cr(e) || !jr(e) ? Pm(e) : Y$(e);
}
function V$(e) {
  var t = e.getBoundingClientRect(), n = Ds(t.width) / e.offsetWidth || 1, r = Ds(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function G$(e, t, n) {
  n === void 0 && (n = !1);
  var r = jr(t), o = jr(t) && V$(t), s = ei(t), u = Ls(e, o, n), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Ta(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Nm(s)) && (c = q$(t)), jr(t) ? (d = Ls(t, !0), d.x += t.clientLeft, d.y += t.clientTop) : s && (d.x = km(s))), {
    x: u.left + c.scrollLeft - d.x,
    y: u.top + c.scrollTop - d.y,
    width: u.width,
    height: u.height
  };
}
function K$(e) {
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
function Z$(e) {
  var t = K$(e);
  return s$.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function X$(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Q$(e) {
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
var _0 = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function w0() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function J$(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, s = o === void 0 ? _0 : o;
  return function(c, d, p) {
    p === void 0 && (p = s);
    var h = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, _0, s),
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
          reference: Di(c) ? Ml(c) : c.contextElement ? Ml(c.contextElement) : [],
          popper: Ml(d)
        };
        var E = Z$(Q$([].concat(r, h.options.modifiers)));
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
          if (w0(F, E)) {
            h.rects = {
              reference: G$(F, Cc(E), h.options.strategy === "fixed"),
              popper: Sm(E)
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
      update: X$(function() {
        return new Promise(function(w) {
          y.forceUpdate(), w(h);
        });
      }),
      destroy: function() {
        _(), g = !0;
      }
    };
    if (!w0(c, d))
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
var e9 = [E$, W$, w$, u$, B$, M$, H$, v$, L$], t9 = /* @__PURE__ */ J$({
  defaultModifiers: e9
}), n9 = typeof Element < "u", r9 = typeof Map == "function", a9 = typeof Set == "function", o9 = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
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
    if (r9 && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (s = e.entries(); !(r = s.next()).done; )
        if (!t.has(r.value[0])) return !1;
      for (s = e.entries(); !(r = s.next()).done; )
        if (!Lu(r.value[1], t.get(r.value[0]))) return !1;
      return !0;
    }
    if (a9 && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (s = e.entries(); !(r = s.next()).done; )
        if (!t.has(r.value[0])) return !1;
      return !0;
    }
    if (o9 && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
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
    if (n9 && e instanceof Element) return !1;
    for (r = n; r-- !== 0; )
      if (!((o[r] === "_owner" || o[r] === "__v" || o[r] === "__o") && e.$$typeof) && !Lu(e[o[r]], t[o[r]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var i9 = function(t, n) {
  try {
    return Lu(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
};
const s9 = /* @__PURE__ */ mc(i9);
var l9 = [], c9 = function(t, n, r) {
  r === void 0 && (r = {});
  var o = L.useRef(null), s = {
    onFirstUpdate: r.onFirstUpdate,
    placement: r.placement || "bottom",
    strategy: r.strategy || "absolute",
    modifiers: r.modifiers || l9
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
        th.flushSync(function() {
          d({
            styles: d0(_.map(function(w) {
              return [w, b.styles[w] || {}];
            })),
            attributes: d0(_.map(function(w) {
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
    return s9(o.current, g) ? o.current || g : (o.current = g, g);
  }, [s.onFirstUpdate, s.placement, s.strategy, s.modifiers, p]), m = L.useRef();
  return f0(function() {
    m.current && m.current.setOptions(h);
  }, [h]), f0(function() {
    if (!(t == null || n == null)) {
      var g = r.createPopper || t9, y = g(t, n, h);
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
}, u9 = function() {
}, d9 = function() {
  return Promise.resolve(null);
}, f9 = [];
function p9(e) {
  var t = e.placement, n = t === void 0 ? "bottom" : t, r = e.strategy, o = r === void 0 ? "absolute" : r, s = e.modifiers, u = s === void 0 ? f9 : s, c = e.referenceElement, d = e.onFirstUpdate, p = e.innerRef, h = e.children, m = L.useContext(q3), g = L.useState(null), y = g[0], b = g[1], _ = L.useState(null), w = _[0], k = _[1];
  L.useEffect(function() {
    K3(p, y);
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
  }, [n, o, d, u, w]), E = c9(c || m, y, F), I = E.state, S = E.styles, P = E.forceUpdate, C = E.update, T = L.useMemo(function() {
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
      forceUpdate: P || u9,
      update: C || d9
    };
  }, [b, k, n, I, S, C, P]);
  return V3(h)(T);
}
function h9(e, t, n, r) {
  return p1(e, function(o, s, u) {
    t(r, n(o), s, u);
  }), r;
}
function m9(e, t) {
  return function(n, r) {
    return h9(n, e, t(r), {});
  };
}
var g9 = Object.prototype, v9 = g9.toString, y9 = m9(function(e, t, n) {
  t != null && typeof t.toString != "function" && (t = v9.call(t)), e[t] = n;
}, r1(Xo)), Im = {
  "top center": "top",
  "top left": "top-start",
  "top right": "top-end",
  "bottom center": "bottom",
  "bottom left": "bottom-start",
  "bottom right": "bottom-end",
  "right center": "right",
  "left center": "left"
}, b9 = Br(Im), _9 = y9(Im);
function oc(e) {
  "@babel/helpers - typeof";
  return oc = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, oc(e);
}
function w9(e, t) {
  if (oc(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (oc(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function x9(e) {
  var t = w9(e, "string");
  return oc(t) == "symbol" ? t : t + "";
}
function E9(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, x9(r.key), r);
  }
}
function C9(e, t, n) {
  return t && E9(e.prototype, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
var O9 = /* @__PURE__ */ function() {
  function e(n) {
    this.ref = n;
  }
  var t = e.prototype;
  return t.getBoundingClientRect = function() {
    return Be(this.ref.current, "getBoundingClientRect") || {};
  }, C9(e, [{
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
}(), S9 = gc(function(e) {
  return new O9(Vu(e) ? e : {
    current: e
  });
});
function Ho(e) {
  var t = e.children, n = e.className, r = e.content, o = Ze("content", n), s = Ve(Ho, e), u = Qe(Ho, e);
  return /* @__PURE__ */ ee.createElement(u, pe({}, s, {
    className: o
  }), ht(t) ? r : t);
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
  content: Mt
} : {};
Ho.create = Qt(Ho, function(e) {
  return {
    children: e
  };
});
function Yo(e) {
  var t = e.children, n = e.className, r = e.content, o = Ze("header", n), s = Ve(Yo, e), u = Qe(Yo, e);
  return /* @__PURE__ */ ee.createElement(u, pe({}, s, {
    className: o
  }), ht(t) ? r : t);
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
  content: Mt
} : {};
Yo.create = Qt(Yo, function(e) {
  return {
    children: e
  };
});
var Fn = /* @__PURE__ */ function(e) {
  rn(t, e);
  function t() {
    for (var r, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return r = e.call.apply(e, [this].concat(s)) || this, r.state = {}, r.open = !1, r.zIndexWasSynced = !1, r.triggerRef = /* @__PURE__ */ ee.createRef(), r.elementRef = /* @__PURE__ */ ee.createRef(), r.getPortalProps = function() {
      var c = {}, d = r.props, p = d.on, h = d.hoverable, m = _n(p) ? p : [p];
      return h && (c.closeOnPortalMouseLeave = !0, c.mouseLeaveDelay = 300), wa(m, "hover") && (c.openOnTriggerClick = !1, c.closeOnTriggerClick = !1, c.openOnTriggerMouseEnter = !0, c.closeOnTriggerMouseLeave = !0, c.mouseLeaveDelay = 70, c.mouseEnterDelay = 50), wa(m, "click") && (c.openOnTriggerClick = !0, c.closeOnTriggerClick = !0, c.closeOnDocumentClick = !0), wa(m, "focus") && (c.openOnTriggerFocus = !0, c.closeOnTriggerBlur = !0), c;
    }, r.hideOnScroll = function(c) {
      Y3(c.target) && r.elementRef.current.contains(c.target) || (r.setState({
        closed: !0
      }), Tl.unsub("scroll", r.hideOnScroll, {
        target: window
      }), r.timeoutId = setTimeout(function() {
        r.setState({
          closed: !1
        });
      }, 50), r.handleClose(c));
    }, r.handleClose = function(c) {
      Be(r.props, "onClose", c, pe({}, r.props, {
        open: !1
      }));
    }, r.handleOpen = function(c) {
      Be(r.props, "onOpen", c, pe({}, r.props, {
        open: !0
      }));
    }, r.handlePortalMount = function(c) {
      Be(r.props, "onMount", c, r.props);
    }, r.handlePortalUnmount = function(c) {
      r.positionUpdate = null, Be(r.props, "onUnmount", c, r.props);
    }, r.renderContent = function(c) {
      var d = c.placement, p = c.ref, h = c.update, m = c.style, g = r.props, y = g.basic, b = g.children, _ = g.className, w = g.content, k = g.hideOnScroll, F = g.flowing, E = g.header, I = g.inverted, S = g.popper, P = g.size, C = g.style, T = g.wide, A = r.state.contentRestProps;
      r.positionUpdate = h;
      var B = Ze("ui", _9[d], P, sn(T, "wide"), q(y, "basic"), q(F, "flowing"), q(I, "inverted"), "popup transition visible", _), U = Qe(t, r.props), ne = pe({
        // Heads up! We need default styles to get working correctly `flowing`
        left: "auto",
        right: "auto",
        // This is required to be properly positioned inside wrapping `div`
        position: "initial"
      }, C), K = /* @__PURE__ */ ee.createElement(U, pe({}, A, {
        className: B,
        style: ne,
        ref: r.elementRef
      }), ht(b) ? /* @__PURE__ */ ee.createElement(ee.Fragment, null, Yo.create(E, {
        autoGenerateKey: !1
      }), Ho.create(w, {
        autoGenerateKey: !1
      })) : b, k && /* @__PURE__ */ ee.createElement(Ya, {
        on: r.hideOnScroll,
        name: "scroll",
        target: "window"
      }));
      return tL(S || {}, {
        overrideProps: {
          children: K,
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
    var u = Ve(t, o), c = Em(u, function(p, h, m) {
      return wa(ra.handledProps, m) || (p[m] = h), p;
    }, {}), d = Td(u, ra.handledProps);
    return {
      contentRestProps: c,
      portalRestProps: d
    };
  };
  var n = t.prototype;
  return n.componentDidUpdate = function(o) {
    var s = Al(this.props.popperDependencies, o.popperDependencies);
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
            ps(B) && (A.elements.popper.style.zIndex = window.getComputedStyle(A.elements.popper.firstChild).zIndex), o.zIndexWasSynced = !0;
          }
        },
        effect: function() {
          return function() {
            o.zIndexWasSynced = !1;
          };
        }
      }
    ]), I = S9(It(u) ? this.triggerRef : u), S = pe({}, this.getPortalProps(), F);
    return /* @__PURE__ */ ee.createElement(ra, pe({}, S, {
      onClose: this.handleClose,
      onMount: this.handlePortalMount,
      onOpen: this.handleOpen,
      onUnmount: this.handlePortalUnmount,
      trigger: _,
      triggerRef: this.triggerRef
    }), /* @__PURE__ */ ee.createElement(p9, {
      modifiers: E,
      placement: Im[y],
      strategy: b ? "fixed" : null,
      referenceElement: I
    }, this.renderContent));
  }, t;
}(er);
Fn.handledProps = ["as", "basic", "children", "className", "content", "context", "disabled", "eventsEnabled", "flowing", "header", "hideOnScroll", "hoverable", "inverted", "offset", "on", "onClose", "onMount", "onOpen", "onUnmount", "pinned", "popper", "popperDependencies", "popperModifiers", "position", "positionFixed", "size", "style", "trigger", "wide"];
Fn.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Display the popup without the pointing arrow. */
  basic: l.bool,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Simple text content for the popover. */
  content: St,
  /** Existing element the pop-up should be bound to. */
  context: l.oneOfType([l.object, bm]),
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
  header: St,
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
  position: l.oneOf(b9),
  /** Tells `Popper.js` to use the `position: fixed` strategy to position the popover. */
  positionFixed: l.bool,
  /** A wrapping element for an actual content that will be used for positioning. */
  popper: St,
  /** An array containing custom settings for the Popper.js modifiers. */
  popperModifiers: l.array,
  /** A popup can have dependencies which update will schedule a position update. */
  popperDependencies: l.array,
  /** Popup size. */
  size: l.oneOf(aa(pr, "medium", "big", "massive")),
  /** Custom Popup style. */
  style: l.object,
  /** Element to be rendered in-place where the popup is defined. */
  trigger: l.node,
  /** Popup width. */
  wide: l.oneOfType([l.bool, l.oneOf(["very"])])
} : {};
Fn.defaultProps = {
  disabled: !1,
  eventsEnabled: !0,
  on: ["click", "hover"],
  pinned: !1,
  popperModifiers: [],
  position: "top left"
};
Fn.Content = Ho;
Fn.Header = Yo;
var T9 = function(t) {
  if (t) {
    var n, r, o;
    return typeof t.window == "object" && t.window === t ? t.event : (n = (r = t.ownerDocument) == null || (o = r.defaultView) == null ? void 0 : o.event) != null ? n : void 0;
  }
}, x0 = function(t, n) {
  return t ? !!t[n] : !1;
}, P9 = function(t) {
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
    var h = typeof u > "u" ? s : u.current, m = T9(window), g = function(b) {
      if (b === m) {
        m = void 0;
        return;
      }
      d(b);
    };
    if (x0(h, "addEventListener"))
      h.addEventListener(o, g, n);
    else if (process.env.NODE_ENV !== "production")
      throw new Error("@fluentui/react-component-event-listener: Passed `element` is not valid or does not support `addEventListener()` method.");
    return p.current = setTimeout(function() {
      m = void 0;
    }, 1), function() {
      if (clearTimeout(p.current), m = void 0, x0(h, "removeEventListener"))
        h.removeEventListener(o, g, n);
      else if (process.env.NODE_ENV !== "production")
        throw new Error("@fluentui/react-component-event-listener: Passed `element` is not valid or does not support `removeEventListener()` method.");
    };
  }, [n, d, s, u, o]);
}, k9 = /* @__PURE__ */ function() {
  function e(t) {
    return P9(t), null;
  }
  return e.defaultProps = {
    capture: !1
  }, e;
}(), N9 = {
  current: typeof document > "u" ? null : document
};
function ic(e) {
  var t = e.className, n = e.children, r = e.content, o = Ze("pushable", t), s = Ve(ic, e), u = Qe(ic, e);
  return /* @__PURE__ */ ee.createElement(u, pe({}, s, {
    className: o
  }), ht(n) ? r : n);
}
ic.handledProps = ["as", "children", "className", "content"];
ic.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: Mt
} : {};
function sc(e) {
  var t = e.className, n = e.dimmed, r = e.children, o = e.content, s = Ze("pusher", q(n, "dimmed"), t), u = Ve(sc, e), c = Qe(sc, e);
  return /* @__PURE__ */ ee.createElement(c, pe({}, u, {
    className: s
  }), ht(r) ? o : r);
}
sc.handledProps = ["as", "children", "className", "content", "dimmed"];
sc.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: l.elementType,
  /** Primary content. */
  children: l.node,
  /** Additional classes. */
  className: l.string,
  /** Shorthand for primary content. */
  content: Mt,
  /** Controls whether or not the dim is displayed. */
  dimmed: l.bool
} : {};
var ti = /* @__PURE__ */ function(e) {
  rn(t, e);
  function t(r) {
    var o;
    return o = e.call(this, r) || this, o.ref = /* @__PURE__ */ xr(), o.handleAnimationStart = function() {
      var s = o.props.visible, u = s ? "onVisible" : "onHide";
      if (clearTimeout(o.animationTimer), o.animationTimer = setTimeout(o.handleAnimationEnd, t.animationDuration), o.skipNextCallback) {
        o.skipNextCallback = !1;
        return;
      }
      Be(o.props, u, null, o.props);
    }, o.handleAnimationEnd = function() {
      var s = o.props.visible, u = s ? "onShow" : "onHidden";
      o.setState({
        animationTick: 0
      }), Be(o.props, u, null, o.props);
    }, o.handleDocumentClick = function(s) {
      Io(o.ref.current, s) || (o.skipNextCallback = !0, Be(o.props, "onHide", s, pe({}, o.props, {
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
    var o = this.props, s = o.animation, u = o.className, c = o.children, d = o.content, p = o.direction, h = o.target, m = o.visible, g = o.width, y = this.state.animationTick, b = Ze("ui", s, p, g, q(y > 0, "animating"), q(m, "visible"), "sidebar", u), _ = Ve(t, this.props), w = Qe(t, this.props), k = Vu(h) ? {
      targetRef: h
    } : {
      target: h
    };
    return /* @__PURE__ */ ee.createElement(ee.Fragment, null, /* @__PURE__ */ ee.createElement(dr, {
      innerRef: this.ref
    }, /* @__PURE__ */ ee.createElement(w, pe({}, _, {
      className: b
    }), ht(c) ? d : c)), m && /* @__PURE__ */ ee.createElement(k9, pe({
      listener: this.handleDocumentClick,
      type: "click"
    }, k)));
  }, t;
}(er);
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
  content: Mt,
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
  target: l.oneOfType([UD, bm]),
  /** Controls whether or not the sidebar is visible on the page. */
  visible: l.bool,
  /** Sidebar width. */
  width: l.oneOf(["very thin", "thin", "wide", "very wide"])
} : {};
ti.defaultProps = {
  direction: "left",
  target: N9,
  visible: !1
};
ti.animationDuration = 500;
ti.autoControlledProps = ["visible"];
ti.Pushable = ic;
ti.Pusher = sc;
const Ew = HI({
  collapsible: !1,
  isCollapsed: !1,
  toggleCollapse: () => {
  },
  collapseTrigger: "button"
}), I9 = () => YI(Ew), A9 = "_card_8pdnj_9", R9 = "_fluid_8pdnj_45", M9 = "_notFluid_8pdnj_53", D9 = "_elevated_8pdnj_71", L9 = "_outlined_8pdnj_81", F9 = "_flat_8pdnj_93", $9 = "_soft_8pdnj_107", B9 = "_glass_8pdnj_121", j9 = "_gradient_8pdnj_137", W9 = "_themePrimary_8pdnj_157", z9 = "_themeSecondary_8pdnj_179", U9 = "_themeSuccess_8pdnj_201", H9 = "_themeWarning_8pdnj_223", Y9 = "_themeDanger_8pdnj_245", q9 = "_themeInfo_8pdnj_267", V9 = "_themeDark_8pdnj_289", G9 = "_radiusNone_8pdnj_323", K9 = "_radiusSm_8pdnj_331", Z9 = "_radiusMd_8pdnj_339", X9 = "_radiusLg_8pdnj_347", Q9 = "_radiusXl_8pdnj_355", J9 = "_radiusFull_8pdnj_363", e5 = "_padNone_8pdnj_379", t5 = "_padSm_8pdnj_387", n5 = "_padMd_8pdnj_395", r5 = "_padLg_8pdnj_403", a5 = "_accentTop_8pdnj_419", o5 = "_accentLeft_8pdnj_429", i5 = "_accentBottom_8pdnj_439", s5 = "_accentRight_8pdnj_449", l5 = "_hoverable_8pdnj_467", c5 = "_hoverGlow_8pdnj_479", u5 = "_clickable_8pdnj_487", d5 = "_horizontal_8pdnj_523", f5 = "_vertical_8pdnj_533", p5 = "_responsiveHorizontal_8pdnj_543", h5 = "_mediaLeft_8pdnj_567", m5 = "_collapseGrid_8pdnj_587", g5 = "_collapseGridCollapsed_8pdnj_601", v5 = "_collapseContent_8pdnj_609", y5 = "_collapseButton_8pdnj_623", b5 = "_chevronIcon_8pdnj_657", _5 = "_chevronRotated_8pdnj_669", w5 = "_headerClickable_8pdnj_677", x5 = "_header_8pdnj_677", E5 = "_headerWithDivider_8pdnj_721", C5 = "_headerLeading_8pdnj_729", O5 = "_headerAvatar_8pdnj_745", S5 = "_headerTextGroup_8pdnj_759", T5 = "_title_8pdnj_771", P5 = "_subtitle_8pdnj_793", k5 = "_headerExtra_8pdnj_807", N5 = "_body_8pdnj_829", I5 = "_bodyPaddedSm_8pdnj_847", A5 = "_bodyPaddedMd_8pdnj_855", R5 = "_bodyPaddedLg_8pdnj_863", M5 = "_bodyPaddedNone_8pdnj_871", D5 = "_footer_8pdnj_887", L5 = "_footerWithDivider_8pdnj_903", F5 = "_alignLeft_8pdnj_913", $5 = "_alignCenter_8pdnj_921", B5 = "_alignRight_8pdnj_929", j5 = "_alignBetween_8pdnj_937", W5 = "_mediaContainer_8pdnj_953", z5 = "_mediaImg_8pdnj_973", U5 = "_mediaZoomOnHover_8pdnj_989", H5 = "_mediaOverlay_8pdnj_997", Y5 = "_mediaBadgeSlot_8pdnj_1027", q5 = "_ratio16x9_8pdnj_1043", V5 = "_ratio4x3_8pdnj_1051", G5 = "_ratio1x1_8pdnj_1059", K5 = "_ratio21x9_8pdnj_1067", Z5 = "_ratioAuto_8pdnj_1075", X5 = "_iconBadge_8pdnj_1115", Q5 = "_iconBadgeCircle_8pdnj_1153", J5 = "_iconBadgeSm_8pdnj_1161", eB = "_iconBadgeLg_8pdnj_1173", tB = "_badge_8pdnj_1193", nB = "_badgeDefault_8pdnj_1219", rB = "_badgePrimary_8pdnj_1229", aB = "_badgeSuccess_8pdnj_1239", oB = "_badgeWarning_8pdnj_1249", iB = "_badgeDanger_8pdnj_1259", sB = "_badgeGlass_8pdnj_1279", lB = "_divider_8pdnj_1315", cB = "_loadingOverlay_8pdnj_1339", uB = "_spinner_8pdnj_1377", ke = {
  card: A9,
  fluid: R9,
  notFluid: M9,
  elevated: D9,
  outlined: L9,
  flat: F9,
  soft: $9,
  glass: B9,
  gradient: j9,
  themePrimary: W9,
  themeSecondary: z9,
  themeSuccess: U9,
  themeWarning: H9,
  themeDanger: Y9,
  themeInfo: q9,
  themeDark: V9,
  radiusNone: G9,
  radiusSm: K9,
  radiusMd: Z9,
  radiusLg: X9,
  radiusXl: Q9,
  radiusFull: J9,
  padNone: e5,
  padSm: t5,
  padMd: n5,
  padLg: r5,
  accentTop: a5,
  accentLeft: o5,
  accentBottom: i5,
  accentRight: s5,
  hoverable: l5,
  hoverGlow: c5,
  clickable: u5,
  horizontal: d5,
  vertical: f5,
  responsiveHorizontal: p5,
  mediaLeft: h5,
  collapseGrid: m5,
  collapseGridCollapsed: g5,
  collapseContent: v5,
  collapseButton: y5,
  chevronIcon: b5,
  chevronRotated: _5,
  headerClickable: w5,
  header: x5,
  headerWithDivider: E5,
  headerLeading: C5,
  headerAvatar: O5,
  headerTextGroup: S5,
  title: T5,
  subtitle: P5,
  headerExtra: k5,
  body: N5,
  bodyPaddedSm: I5,
  bodyPaddedMd: A5,
  bodyPaddedLg: R5,
  bodyPaddedNone: M5,
  footer: D5,
  footerWithDivider: L5,
  alignLeft: F5,
  alignCenter: $5,
  alignRight: B5,
  alignBetween: j5,
  mediaContainer: W5,
  mediaImg: z5,
  mediaZoomOnHover: U5,
  mediaOverlay: H5,
  mediaBadgeSlot: Y5,
  ratio16x9: q5,
  ratio4x3: V5,
  ratio1x1: G5,
  ratio21x9: K5,
  ratioAuto: Z5,
  iconBadge: X5,
  iconBadgeCircle: Q5,
  iconBadgeSm: J5,
  iconBadgeLg: eB,
  badge: tB,
  badgeDefault: nB,
  badgePrimary: rB,
  badgeSuccess: aB,
  badgeWarning: oB,
  badgeDanger: iB,
  badgeGlass: sB,
  divider: lB,
  loadingOverlay: cB,
  spinner: uB
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
  const m = I9(), g = m.collapsible, { isCollapsed: y } = m, b = g && m.collapseTrigger === "header", _ = (E) => {
    p && p(E), b && m.toggleCollapse && m.toggleCollapse();
  }, w = (E) => {
    E.stopPropagation(), m.toggleCollapse && m.toggleCollapse();
  }, k = [ke.header, o ? ke.headerWithDivider : "", b ? ke.headerClickable : "", c].filter(Boolean).join(" "), F = () => !g || !s ? null : u ? /* @__PURE__ */ O(
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
      className: ke.collapseButton,
      onClick: w,
      "aria-label": y ? "Expandir tarjeta" : "Colapsar tarjeta",
      children: /* @__PURE__ */ O(We, { name: "chevron up", className: `${ke.chevronIcon} ${y ? ke.chevronRotated : ""}`, style: { margin: 0 } })
    }
  );
  return h ? /* @__PURE__ */ oe(
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
  ) : /* @__PURE__ */ oe(
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
        /* @__PURE__ */ oe("div", { className: ke.headerLeading, children: [
          n && /* @__PURE__ */ O("div", { className: ke.headerAvatar, children: n }),
          (e || t) && /* @__PURE__ */ oe("div", { className: ke.headerTextGroup, children: [
            e && (typeof e == "string" ? /* @__PURE__ */ O("h3", { className: ke.title, children: e }) : e),
            t && (typeof t == "string" ? /* @__PURE__ */ O("p", { className: ke.subtitle, children: t }) : t)
          ] })
        ] }),
        /* @__PURE__ */ oe("div", { className: ke.headerExtra, children: [
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
const dB = {
  none: ke.bodyPaddedNone,
  small: ke.bodyPaddedSm,
  medium: ke.bodyPaddedMd,
  large: ke.bodyPaddedLg
}, Cw = ({ children: e, padding: t = "medium", className: n = "", style: r = {} }) => {
  const o = [ke.body, dB[t] || ke.bodyPaddedMd, n].filter(Boolean).join(" ");
  return /* @__PURE__ */ O("div", { className: o, style: r, children: e });
};
Cw.propTypes = {
  children: l.node,
  padding: l.oneOf(["none", "small", "medium", "large"]),
  className: l.string,
  style: l.object
};
const fB = {
  left: ke.alignLeft,
  center: ke.alignCenter,
  right: ke.alignRight,
  between: ke.alignBetween
}, Ow = ({ children: e, align: t = "right", divider: n = !1, className: r = "", style: o = {} }) => {
  const s = [ke.footer, fB[t] || ke.alignRight, n ? ke.footerWithDivider : "", r].filter(Boolean).join(" ");
  return /* @__PURE__ */ O("footer", { className: s, style: o, children: e });
};
Ow.propTypes = {
  children: l.node,
  align: l.oneOf(["left", "center", "right", "between"]),
  divider: l.bool,
  className: l.string,
  style: l.object
};
const pB = {
  "16/9": ke.ratio16x9,
  "4/3": ke.ratio4x3,
  "1/1": ke.ratio1x1,
  "21/9": ke.ratio21x9,
  auto: ke.ratioAuto
}, Sw = ({
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
    ke.mediaContainer,
    r === "left" ? ke.mediaLeft : "",
    pB[n] || ke.ratio16x9,
    u ? ke.mediaZoomOnHover : "",
    c
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ oe("div", { className: h, style: d, children: [
    s && /* @__PURE__ */ O("div", { className: ke.mediaBadgeSlot, children: s }),
    p || e && /* @__PURE__ */ O("img", { src: e, alt: t, className: ke.mediaImg }),
    o && /* @__PURE__ */ O("div", { className: ke.mediaOverlay, children: typeof o == "boolean" ? null : o })
  ] });
};
Sw.propTypes = {
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
const hB = {
  default: ke.badgeDefault,
  primary: ke.badgePrimary,
  success: ke.badgeSuccess,
  warning: ke.badgeWarning,
  danger: ke.badgeDanger,
  glass: ke.badgeGlass
}, Tw = ({ children: e, variant: t = "default", color: n, textColor: r, icon: o, className: s = "", style: u = {} }) => {
  const c = [ke.badge, hB[t] || ke.badgeDefault, s].filter(Boolean).join(" "), d = {
    ...u,
    ...n ? { backgroundColor: n } : {},
    ...r ? { color: r } : {}
  };
  return /* @__PURE__ */ oe("span", { className: c, style: d, children: [
    o && /* @__PURE__ */ O("span", { style: { display: "inline-flex" }, children: o }),
    e
  ] });
};
Tw.propTypes = {
  children: l.node,
  variant: l.oneOf(["default", "primary", "success", "warning", "danger", "glass"]),
  color: l.string,
  textColor: l.string,
  icon: l.node,
  className: l.string,
  style: l.object
};
const Pw = ({ className: e = "", color: t, style: n = {} }) => {
  const r = [ke.divider, e].filter(Boolean).join(" "), o = {
    ...n,
    ...t ? { backgroundColor: t } : {}
  };
  return /* @__PURE__ */ O("hr", { className: r, style: o });
};
Pw.propTypes = {
  className: l.string,
  color: l.string,
  style: l.object
};
const Ip = {
  primary: ke.themePrimary,
  secondary: ke.themeSecondary,
  success: ke.themeSuccess,
  warning: ke.themeWarning,
  danger: ke.themeDanger,
  info: ke.themeInfo
}, mB = {
  small: ke.iconBadgeSm,
  medium: "",
  large: ke.iconBadgeLg
}, kw = ({ name: e, color: t, shape: n = "circle", size: r = "medium", bgColor: o, iconColor: s, className: u = "", style: c = {}, children: d }) => {
  const p = [
    ke.iconBadge,
    n === "circle" ? ke.iconBadgeCircle : "",
    mB[r] || "",
    t && Ip[t] ? Ip[t] : "",
    u
  ].filter(Boolean).join(" "), h = {
    ...c,
    ...o ? { "--ik-icon-bg": o } : {},
    ...s ? { "--ik-icon-color": s } : {}
  };
  return t && !Ip[t] && (h["--ik-icon-color"] || (h["--ik-icon-color"] = t)), /* @__PURE__ */ O("div", { className: p, style: h, children: d || e && /* @__PURE__ */ O(We, { name: e, style: { margin: 0 } }) });
};
kw.propTypes = {
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
  primary: ke.themePrimary,
  secondary: ke.themeSecondary,
  success: ke.themeSuccess,
  warning: ke.themeWarning,
  danger: ke.themeDanger,
  info: ke.themeInfo,
  dark: ke.themeDark
}, E0 = {
  none: ke.radiusNone,
  small: ke.radiusSm,
  sm: ke.radiusSm,
  medium: ke.radiusMd,
  md: ke.radiusMd,
  large: ke.radiusLg,
  lg: ke.radiusLg,
  xl: ke.radiusXl,
  full: ke.radiusFull
}, gB = {
  none: ke.padNone,
  small: ke.padSm,
  medium: ke.padMd,
  large: ke.padLg
}, Rp = {
  top: ke.accentTop,
  left: ke.accentLeft,
  bottom: ke.accentBottom,
  right: ke.accentRight
}, vB = (e) => {
  if (!e || e === "none")
    return [];
  if (Array.isArray(e))
    return e.map((t) => Rp[String(t).trim().toLowerCase()]).filter(Boolean);
  if (typeof e == "string") {
    const t = e.trim().toLowerCase();
    return t === "all" ? [ke.accentTop, ke.accentRight, ke.accentBottom, ke.accentLeft] : t.split(/[\s,+/|-]+/).map((r) => r.trim()).map((r) => Rp[r]).filter(Boolean);
  }
  return typeof e == "object" ? Object.keys(e).filter((t) => !!e[t]).map((t) => Rp[t.toLowerCase()]).filter(Boolean) : [];
}, yB = {
  elevated: ke.elevated,
  outlined: ke.outlined,
  flat: ke.flat,
  soft: ke.soft,
  glass: ke.glass,
  gradient: ke.gradient
}, so = hc((e, t) => {
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
    onClick: U,
    onKeyDown: ne,
    tabIndex: K,
    role: ae
  } = e, he = S !== void 0, [ge, Ne] = it(P), ce = he ? S : ge, me = () => {
    const W = !ce;
    he || Ne(W), C && C(W);
  }, te = qI(() => ({
    collapsible: I,
    isCollapsed: ce,
    toggleCollapse: me,
    collapseTrigger: T
  }), [I, ce, T]), re = o && Ap[o], se = o && !Ap[o], be = {
    ...B
  };
  s && (be["--ik-card-bg"] = s), u && (be["--ik-card-text"] = u), c && (be["--ik-card-border"] = c), d && (be["--ik-card-accent"] = d), p && (be["--ik-card-glow"] = p), se && (be["--ik-card-accent"] = o, p || (be["--ik-card-glow"] = o), r === "soft" && (be["--ik-card-border-soft"] = o)), k && !E0[k] && (be["--ik-card-radius"] = k);
  let Oe = ke.vertical;
  m === "horizontal" && (Oe = g ? ke.responsiveHorizontal : ke.horizontal);
  const Ee = _ || typeof U == "function" && !I, fe = [
    ke.card,
    yB[r] || ke.elevated,
    re ? Ap[o] : "",
    w ? ke.fluid : ke.notFluid,
    E0[k] || "",
    F ? gB[F] : "",
    ...vB(h),
    y ? ke.hoverable : "",
    b ? ke.hoverGlow : "",
    Ee ? ke.clickable : "",
    Oe,
    A
  ].filter(Boolean).join(" "), Te = (W) => {
    ne && ne(W), Ee && (W.key === "Enter" || W.key === " ") && (W.preventDefault(), U && U(W));
  }, De = () => {
    if (!I)
      return n;
    const W = ee.Children.toArray(n), z = W.findIndex((V) => {
      var G, ie;
      return ee.isValidElement(V) && (V.type === Rd || ((G = V.type) == null ? void 0 : G.displayName) === "CardHeader" || ((ie = V.props) == null ? void 0 : ie.displayName) === "CardHeader");
    });
    if (z === -1)
      return /* @__PURE__ */ O("div", { className: `${ke.collapseGrid} ${ce ? ke.collapseGridCollapsed : ""}`, children: /* @__PURE__ */ O("div", { className: ke.collapseContent, children: n }) });
    const $ = W[z], M = W.filter((V, G) => G !== z);
    return /* @__PURE__ */ oe(zr, { children: [
      $,
      /* @__PURE__ */ O("div", { className: `${ke.collapseGrid} ${ce ? ke.collapseGridCollapsed : ""}`, children: /* @__PURE__ */ O("div", { className: ke.collapseContent, children: M }) })
    ] });
  };
  return /* @__PURE__ */ O(Ew.Provider, { value: te, children: /* @__PURE__ */ oe(
    "div",
    {
      ref: t,
      className: fe,
      style: be,
      onClick: Ee ? U : void 0,
      onKeyDown: Ee ? Te : ne,
      role: ae || (Ee ? "button" : void 0),
      tabIndex: K !== void 0 ? K : Ee ? 0 : void 0,
      children: [
        De(),
        E && /* @__PURE__ */ oe("div", { className: ke.loadingOverlay, children: [
          /* @__PURE__ */ O("div", { className: ke.spinner }),
          /* @__PURE__ */ O("span", { children: "Cargando..." })
        ] })
      ]
    }
  ) });
});
so.displayName = "Card";
so.Header = Rd;
so.Body = Cw;
so.Footer = Ow;
so.Media = Sw;
so.Badge = Tw;
so.Divider = Pw;
so.Icon = kw;
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
const bB = "_container_yq5hj_9", _B = "_pos_left_yq5hj_23", wB = "_pos_right_yq5hj_35", xB = "_pos_top_yq5hj_47", EB = "_pos_bottom_yq5hj_59", CB = "_align_left_yq5hj_71", OB = "_align_center_yq5hj_81", SB = "_align_right_yq5hj_91", TB = "_titleGroup_yq5hj_101", PB = "_titleLabel_yq5hj_113", kB = "_descriptionLabel_yq5hj_127", NB = "_disabled_yq5hj_141", IB = "_semanticToggle_yq5hj_155", AB = "_small_yq5hj_321", RB = "_medium_yq5hj_331", MB = "_large_yq5hj_339", ea = {
  container: bB,
  pos_left: _B,
  pos_right: wB,
  pos_top: xB,
  pos_bottom: EB,
  align_left: CB,
  align_center: OB,
  align_right: SB,
  titleGroup: TB,
  titleLabel: PB,
  descriptionLabel: kB,
  disabled: NB,
  semanticToggle: IB,
  small: AB,
  medium: RB,
  large: MB
}, C0 = {
  primary: "var(--primary, #1e293b)",
  accent: "var(--accent, #3b82f6)",
  secondary: "var(--text-secondary, #64748b)",
  success: "#16a34a",
  warning: "#f59e0b",
  danger: "var(--red500, #ef4444)",
  info: "#0284c7",
  dark: "#0f172a"
}, O0 = (e) => {
  if (!e)
    return;
  const t = String(e).trim();
  return C0[t] ? C0[t] : t.startsWith("--") ? `var(${t})` : t;
}, Nw = hc((e, t) => {
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
    ...U
  } = e, ne = (Ee, fe) => {
    g || y || o && o(fe.checked, Ee, fe);
  }, K = O0(k || E || S || w || "primary"), ae = O0(F || I || P || "#cbd5e1"), he = {
    ...A,
    "--ik-toggle-true-color": K,
    "--ik-toggle-false-color": ae
  }, ge = ea[C] || ea.medium, Ne = g || y ? ea.disabled : "", ce = (p || d || h || "left").toLowerCase(), me = ce === "top" || ce === "left", te = ea[`pos_${ce}`] || ea.pos_left, re = ea[`align_${m}`] || "", be = !!(u || c) ? /* @__PURE__ */ oe("div", { className: `${ea.titleGroup} ${re}`.trim(), children: [
    u && /* @__PURE__ */ O("span", { className: ea.titleLabel, children: u }),
    c && /* @__PURE__ */ O("span", { className: ea.descriptionLabel, children: c })
  ] }) : null, Oe = /* @__PURE__ */ O(
    Jn,
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
      onChange: ne,
      className: ea.semanticToggle
    }
  );
  return /* @__PURE__ */ O("div", { className: `${ea.container} ${te} ${ge} ${Ne} ${T}`.trim(), style: he, children: me ? /* @__PURE__ */ oe(zr, { children: [
    be,
    Oe
  ] }) : /* @__PURE__ */ oe(zr, { children: [
    Oe,
    be
  ] }) });
});
Nw.displayName = "Toggle";
Nw.propTypes = {
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
const DB = "_container_194y6_9", LB = "_fluid_194y6_31", FB = "_labelRoot_194y6_49", $B = "_labelText_194y6_73", BB = "_labelRequired_194y6_81", jB = "_infoIcon_194y6_91", WB = "_controlBox_194y6_123", zB = "_controlBoxMultiple_194y6_163", UB = "_controlBoxOpen_194y6_189", HB = "_controlBoxFocused_194y6_191", YB = "_rounded_194y6_205", qB = "_size_small_194y6_215", VB = "_searchInputSingle_194y6_241", GB = "_placeholderSingle_194y6_257", KB = "_selectedSingle_194y6_259", ZB = "_size_medium_194y6_271", XB = "_size_large_194y6_297", QB = "_disabled_194y6_355", JB = "_error_194y6_375", e4 = "_errorMessage_194y6_395", t4 = "_contentAreaSingle_194y6_433", n4 = "_fadedText_194y6_545", r4 = "_hiddenText_194y6_553", a4 = "_tagsWrapper_194y6_571", o4 = "_tag_194y6_571", i4 = "_tagText_194y6_641", s4 = "_tagDeleteIcon_194y6_655", l4 = "_placeholderMultiple_194y6_681", c4 = "_searchInputMultiple_194y6_697", u4 = "_actionIconsGroup_194y6_735", d4 = "_clearButton_194y6_757", f4 = "_chevronIcon_194y6_793", p4 = "_chevronIconOpen_194y6_809", h4 = "_spinnerIcon_194y6_819", m4 = "_spin_194y6_819", g4 = "_dropdownMenu_194y6_859", v4 = "_menuItem_194y6_941", y4 = "_menuItemHover_194y6_979", b4 = "_menuItemActive_194y6_991", _4 = "_menuItemDisabled_194y6_1003", w4 = "_checkboxBox_194y6_1019", x4 = "_checkboxBoxChecked_194y6_1057", E4 = "_idBadge_194y6_1083", C4 = "_idBadgeMini_194y6_1121", O4 = "_optionIcon_194y6_1159", S4 = "_optionFlag_194y6_1207", T4 = "_optionText_194y6_1217", P4 = "_optionDescription_194y6_1235", k4 = "_noResults_194y6_1249", lt = {
  container: DB,
  fluid: LB,
  labelRoot: FB,
  labelText: $B,
  labelRequired: BB,
  infoIcon: jB,
  controlBox: WB,
  controlBoxMultiple: zB,
  controlBoxOpen: UB,
  controlBoxFocused: HB,
  rounded: YB,
  size_small: qB,
  searchInputSingle: VB,
  placeholderSingle: GB,
  selectedSingle: KB,
  size_medium: ZB,
  size_large: XB,
  disabled: QB,
  error: JB,
  errorMessage: e4,
  contentAreaSingle: t4,
  fadedText: n4,
  hiddenText: r4,
  tagsWrapper: a4,
  tag: o4,
  tagText: i4,
  tagDeleteIcon: s4,
  placeholderMultiple: l4,
  searchInputMultiple: c4,
  actionIconsGroup: u4,
  clearButton: d4,
  chevronIcon: f4,
  chevronIconOpen: p4,
  spinnerIcon: h4,
  spin: m4,
  dropdownMenu: g4,
  menuItem: v4,
  menuItemHover: y4,
  menuItemActive: b4,
  menuItemDisabled: _4,
  checkboxBox: w4,
  checkboxBoxChecked: x4,
  idBadge: E4,
  idBadgeMini: C4,
  optionIcon: O4,
  optionFlag: S4,
  optionText: T4,
  optionDescription: P4,
  noResults: k4
}, Iw = ({ children: e }) => e || null;
Iw.propTypes = {
  children: l.node
};
const Aw = ({ children: e }) => e || null;
Aw.propTypes = {
  children: l.node
};
const Rw = ({ children: e }) => e || null;
Rw.propTypes = {
  children: l.node
};
const N4 = () => null, I4 = {
  teal: "#00b5ad",
  blue: "#2185d0",
  green: "#21ba45",
  orange: "#f2711c",
  red: "#db2828",
  purple: "#a333c8",
  pink: "#e03997",
  yellow: "#fbbd08",
  olive: "#b5cc18",
  violet: "#6435c9",
  grey: "#767676",
  gray: "#767676",
  black: "#1b1c1d"
}, Mp = (e) => {
  if (!e)
    return { backgroundColor: "#00b5ad" };
  const t = typeof e == "string" ? e.toLowerCase() : "";
  return { backgroundColor: I4[t] || e };
}, Vs = hc((e, t) => {
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
    className: U = "",
    style: ne = {},
    id: K,
    name: ae,
    onOpen: he,
    onClose: ge,
    showId: Ne = !1,
    idKey: ce = "id",
    idBadgeColor: me = "teal",
    renderOption: te,
    renderSelected: re,
    ...se
  } = e, be = On(null), Oe = On(null);
  VI(t, () => be.current);
  const Ee = !!(g || y), fe = !!(m || Ee), Te = P !== void 0, [De, W] = it(() => C !== void 0 ? C : fe ? [] : ""), z = Te ? P : De, $ = fe ? Array.isArray(z) ? z : z != null && z !== "" ? [z] : [] : [], [M, V] = it(!1), [G, ie] = it(""), [Pe, Z] = it(-1), Se = K ? `${K}-menu` : "custom-dropdown-menu";
  Xt(() => {
    const de = (we) => {
      be.current && !be.current.contains(we.target) && (V(!1), ie(""), Z(-1), ge && ge(we, { ...e, value: z }));
    };
    return document.addEventListener("mousedown", de), () => {
      document.removeEventListener("mousedown", de);
    };
  }, [z, ge, e]);
  const le = (de) => {
    if (!de)
      return null;
    if (de.label !== void 0 && de.label !== null) {
      if (typeof de.label == "object") {
        const we = de.label.content !== void 0 ? de.label.content : de.label.text;
        if (we != null && we !== "")
          return {
            content: we,
            color: de.label.color || me || "teal"
          };
      } else if (typeof de.label == "string" || typeof de.label == "number")
        return {
          content: de.label,
          color: de.labelColor || me || "teal"
        };
    }
    if (de.id !== void 0 && de.id !== null && de.id !== "")
      return {
        content: de.id,
        color: de.idColor || me || "teal"
      };
    if (Ne) {
      const we = de[ce] !== void 0 ? de[ce] : de.key !== void 0 ? de.key : de.value;
      if (we != null && we !== "")
        return {
          content: we,
          color: me || "teal"
        };
    }
    return null;
  }, H = S.filter((de) => {
    if (fe && !Ee && $.includes(de.value))
      return !1;
    if (!b || !G.trim())
      return !0;
    const we = G.toLowerCase().trim(), nt = typeof de.text == "string" ? de.text : String(de.text || ""), Ye = le(de), Je = Ye && Ye.content !== void 0 ? String(Ye.content) : "", pt = String(de.value !== void 0 ? de.value : ""), Gt = typeof de.description == "string" ? de.description : "";
    return nt.toLowerCase().includes(we) || Je.toLowerCase().includes(we) || pt.toLowerCase().includes(we) || Gt.toLowerCase().includes(we);
  }), Q = (de) => {
    k || (V(!0), Z(-1), b && Oe.current && Oe.current.focus(), he && he(de, { ...e, value: z }));
  }, _e = (de) => {
    V(!1), ie(""), Z(-1), ge && ge(de, { ...e, value: z });
  }, Ie = (de) => {
    k || (M ? _e(de) : Q(de));
  }, Le = (de, we) => {
    if (!(k || we.disabled))
      if (fe) {
        let nt;
        Ee ? nt = $.includes(we.value) ? $.filter((Je) => Je !== we.value) : [...$, we.value] : (nt = [...$, we.value], ie("")), Te || W(nt), T && T(de, {
          ...e,
          value: nt,
          selectedOption: we
        }), Ee && Oe.current ? Oe.current.focus() : Ee || V(!1);
      } else
        Te || W(we.value), T && T(de, {
          ...e,
          value: we.value,
          selectedOption: we
        }), V(!1), ie("");
  }, Fe = (de, we) => {
    if (de.stopPropagation(), k)
      return;
    const nt = $.filter((Ye) => Ye !== we);
    Te || W(nt), T && T(de, {
      ...e,
      value: nt
    });
  }, $e = (de) => {
    if (de.stopPropagation(), k)
      return;
    const we = fe ? [] : "";
    Te || W(we), ie(""), T && T(de, {
      ...e,
      value: we
    });
  }, tt = (de) => {
    if (!k)
      if (de.key === "ArrowDown") {
        if (de.preventDefault(), !M) {
          Q(de);
          return;
        }
        Z((we) => {
          const nt = we + 1;
          return nt >= H.length ? 0 : nt;
        });
      } else if (de.key === "ArrowUp") {
        if (de.preventDefault(), !M) {
          Q(de);
          return;
        }
        Z((we) => {
          const nt = we - 1;
          return nt < 0 ? H.length - 1 : nt;
        });
      } else de.key === "Enter" ? (de.preventDefault(), M ? Pe >= 0 && Pe < H.length && Le(de, H[Pe]) : Q(de)) : de.key === "Escape" && (de.preventDefault(), _e(de));
  }, Xe = fe ? $.length > 0 : z != null && z !== "", Ke = _ && Xe && !k, Ue = fe ? null : S.find((de) => String(de.value) === String(z)), xt = () => {
    if (!n)
      return null;
    if (ee.isValidElement(n))
      return n;
    const de = r || o;
    return /* @__PURE__ */ oe("label", { htmlFor: K, className: `${lt.labelRoot} ${c}`.trim(), children: [
      /* @__PURE__ */ O("span", { className: lt.labelText, children: n }),
      d ? /* @__PURE__ */ O("span", { className: lt.labelRequired, children: " *" }) : null,
      de ? /* @__PURE__ */ O(
        Fn,
        {
          wide: s ? "very" : !0,
          hoverable: s,
          position: u,
          content: de,
          trigger: /* @__PURE__ */ O(We, { name: "info circle", className: lt.infoIcon })
        }
      ) : null
    ] });
  }, ve = () => h ? /* @__PURE__ */ oe("div", { className: lt.errorMessage, children: [
    /* @__PURE__ */ O(We, { name: "exclamation circle" }),
    /* @__PURE__ */ O("span", { children: h })
  ] }) : null, Tt = lt[`size_${I}`] || lt.size_medium, Pt = !!(p || h), dt = [
    lt.container,
    w ? lt.fluid : "",
    E ? lt.rounded : "",
    Tt,
    k ? lt.disabled : "",
    Pt ? lt.error : "",
    U
  ].filter(Boolean).join(" "), at = [lt.controlBox, fe ? lt.controlBoxMultiple : "", M ? lt.controlBoxOpen : ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ oe("div", { className: dt, style: ne, ref: be, onKeyDown: tt, ...se, children: [
    xt(),
    /* @__PURE__ */ oe(
      "div",
      {
        className: at,
        onClick: Ie,
        role: "combobox",
        "aria-expanded": M,
        "aria-controls": Se,
        "aria-haspopup": "listbox",
        tabIndex: k ? -1 : 0,
        children: [
          !fe && /* @__PURE__ */ oe("div", { className: lt.contentAreaSingle, children: [
            !Ue && /* @__PURE__ */ O("span", { className: `${lt.placeholderSingle} ${M && G ? lt.hiddenText : ""}`, children: A }),
            Ue && /* @__PURE__ */ O("span", { className: `${lt.selectedSingle} ${M && G ? lt.fadedText : ""}`, children: re ? re(Ue) : /* @__PURE__ */ oe(zr, { children: [
              (() => {
                const de = le(Ue);
                return de ? /* @__PURE__ */ O("span", { className: lt.idBadge, style: Mp(de.color), children: de.content }) : null;
              })(),
              Ue.icon && /* @__PURE__ */ O(We, { name: Ue.icon, className: lt.optionIcon }),
              Ue.flag && /* @__PURE__ */ O("i", { className: `${Ue.flag} flag ${lt.optionFlag}` }),
              /* @__PURE__ */ O("span", { className: lt.optionText, children: Ue.text })
            ] }) }),
            b && /* @__PURE__ */ O(
              "input",
              {
                ref: Oe,
                type: "text",
                name: ae,
                id: K,
                className: lt.searchInputSingle,
                value: M ? G : "",
                onChange: (de) => ie(de.target.value),
                onClick: (de) => {
                  de.stopPropagation(), M || Q(de);
                },
                disabled: k,
                autoComplete: "off",
                "aria-label": n ? String(n) : A
              }
            )
          ] }),
          fe && /* @__PURE__ */ oe("div", { className: lt.tagsWrapper, children: [
            $.map((de) => {
              const we = S.find((Ye) => Ye.value === de) || { text: de, value: de }, nt = le(we);
              return /* @__PURE__ */ oe("span", { className: lt.tag, children: [
                nt && /* @__PURE__ */ O("span", { className: lt.idBadgeMini, style: Mp(nt.color), children: nt.content }),
                we.icon && /* @__PURE__ */ O(We, { name: we.icon, className: lt.optionIcon }),
                we.flag && /* @__PURE__ */ O("i", { className: `${we.flag} flag ${lt.optionFlag}` }),
                /* @__PURE__ */ O("span", { className: lt.tagText, children: we.text }),
                !k && /* @__PURE__ */ O(
                  We,
                  {
                    name: "close",
                    className: lt.tagDeleteIcon,
                    onClick: (Ye) => Fe(Ye, de)
                  }
                )
              ] }, de);
            }),
            $.length === 0 && !G && /* @__PURE__ */ O("span", { className: lt.placeholderMultiple, children: A }),
            b && /* @__PURE__ */ O(
              "input",
              {
                ref: Oe,
                type: "text",
                name: ae,
                id: K,
                className: lt.searchInputMultiple,
                value: G,
                onChange: (de) => ie(de.target.value),
                onClick: (de) => {
                  de.stopPropagation(), M || Q(de);
                },
                disabled: k,
                autoComplete: "off",
                "aria-label": n ? String(n) : A
              }
            )
          ] }),
          /* @__PURE__ */ oe("div", { className: lt.actionIconsGroup, children: [
            F && /* @__PURE__ */ O(We, { name: "spinner", className: lt.spinnerIcon }),
            Ke && !F && /* @__PURE__ */ O("button", { type: "button", className: lt.clearButton, onClick: $e, title: "Limpiar selección", "aria-label": "Limpiar", children: /* @__PURE__ */ O(We, { name: "close" }) }),
            /* @__PURE__ */ O(We, { name: "dropdown", className: `${lt.chevronIcon} ${M ? lt.chevronIconOpen : ""}` })
          ] })
        ]
      }
    ),
    M && !k && /* @__PURE__ */ O("ul", { className: lt.dropdownMenu, id: Se, role: "listbox", children: H.length === 0 ? /* @__PURE__ */ O("li", { className: lt.noResults, children: B }) : H.map((de, we) => {
      const nt = fe ? $.includes(de.value) : String(z) === String(de.value), Ye = Pe === we, Je = le(de), pt = [
        lt.menuItem,
        nt ? lt.menuItemActive : "",
        Ye ? lt.menuItemHover : "",
        de.disabled ? lt.menuItemDisabled : ""
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ oe(
        "li",
        {
          className: pt,
          onClick: (Gt) => Le(Gt, de),
          role: "option",
          "aria-selected": nt,
          children: [
            Ee && /* @__PURE__ */ O("span", { className: `${lt.checkboxBox} ${nt ? lt.checkboxBoxChecked : ""}` }),
            te ? te(de, nt) : de.content ? de.content : /* @__PURE__ */ oe(zr, { children: [
              Je && /* @__PURE__ */ O("span", { className: lt.idBadge, style: Mp(Je.color), children: Je.content }),
              de.icon && /* @__PURE__ */ O(We, { name: de.icon, className: lt.optionIcon }),
              de.flag && /* @__PURE__ */ O("i", { className: `${de.flag} flag ${lt.optionFlag}` }),
              /* @__PURE__ */ O("span", { className: lt.optionText, children: de.text }),
              de.description && /* @__PURE__ */ O("span", { className: lt.optionDescription, children: de.description })
            ] })
          ]
        },
        de.key || de.value
      );
    }) }),
    ve()
  ] });
});
Vs.displayName = "Dropdown";
Vs.Item = Iw;
Vs.Menu = Aw;
Vs.Header = Rw;
Vs.Divider = N4;
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
      disabled: l.bool,
      id: l.oneOfType([l.string, l.number]),
      idColor: l.string,
      label: l.oneOfType([l.object, l.string, l.number]),
      content: l.node
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
  onClose: l.func,
  showId: l.bool,
  idKey: l.string,
  idBadgeColor: l.string,
  renderOption: l.func,
  renderSelected: l.func
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
    var n, r = "4.18.1", o = 200, s = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", u = "Expected a function", c = "Invalid `variable` option passed into `_.template`", d = "Invalid `imports` option passed into `_.template`", p = "__lodash_hash_undefined__", h = 500, m = "__lodash_placeholder__", g = 1, y = 2, b = 4, _ = 1, w = 2, k = 1, F = 2, E = 4, I = 8, S = 16, P = 32, C = 64, T = 128, A = 256, B = 512, U = 30, ne = "...", K = 800, ae = 16, he = 1, ge = 2, Ne = 3, ce = 1 / 0, me = 9007199254740991, te = 17976931348623157e292, re = NaN, se = 4294967295, be = se - 1, Oe = se >>> 1, Ee = [
      ["ary", T],
      ["bind", k],
      ["bindKey", F],
      ["curry", I],
      ["curryRight", S],
      ["flip", B],
      ["partial", P],
      ["partialRight", C],
      ["rearg", A]
    ], fe = "[object Arguments]", Te = "[object Array]", De = "[object AsyncFunction]", W = "[object Boolean]", z = "[object Date]", $ = "[object DOMException]", M = "[object Error]", V = "[object Function]", G = "[object GeneratorFunction]", ie = "[object Map]", Pe = "[object Number]", Z = "[object Null]", Se = "[object Object]", le = "[object Promise]", H = "[object Proxy]", Q = "[object RegExp]", _e = "[object Set]", Ie = "[object String]", Le = "[object Symbol]", Fe = "[object Undefined]", $e = "[object WeakMap]", tt = "[object WeakSet]", Xe = "[object ArrayBuffer]", Ke = "[object DataView]", Ue = "[object Float32Array]", xt = "[object Float64Array]", ve = "[object Int8Array]", Tt = "[object Int16Array]", Pt = "[object Int32Array]", dt = "[object Uint8Array]", at = "[object Uint8ClampedArray]", de = "[object Uint16Array]", we = "[object Uint32Array]", nt = /\b__p \+= '';/g, Ye = /\b(__p \+=) '' \+/g, Je = /(__e\(.*?\)|\b__t\)) \+\n'';/g, pt = /&(?:amp|lt|gt|quot|#39);/g, Gt = /[&<>"']/g, ri = RegExp(pt.source), Tr = RegExp(Gt.source), mC = /<%-([\s\S]+?)%>/g, gC = /<%([\s\S]+?)%>/g, Ig = /<%=([\s\S]+?)%>/g, vC = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, yC = /^\w*$/, bC = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, nf = /[\\^$.*+?()[\]{}|]/g, _C = RegExp(nf.source), rf = /^\s+/, wC = /\s/, xC = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, EC = /\{\n\/\* \[wrapped with (.+)\] \*/, CC = /,? & /, OC = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Ag = /[()=,{}\[\]\/\s]/, SC = /\\(\\)?/g, TC = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Rg = /\w*$/, PC = /^[-+]0x[0-9a-f]+$/i, kC = /^0b[01]+$/i, NC = /^\[object .+?Constructor\]$/, IC = /^0o[0-7]+$/i, AC = /^(?:0|[1-9]\d*)$/, RC = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Mc = /($^)/, MC = /['\n\r\u2028\u2029\\]/g, Dc = "\\ud800-\\udfff", DC = "\\u0300-\\u036f", LC = "\\ufe20-\\ufe2f", FC = "\\u20d0-\\u20ff", Mg = DC + LC + FC, Dg = "\\u2700-\\u27bf", Lg = "a-z\\xdf-\\xf6\\xf8-\\xff", $C = "\\xac\\xb1\\xd7\\xf7", BC = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", jC = "\\u2000-\\u206f", WC = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Fg = "A-Z\\xc0-\\xd6\\xd8-\\xde", $g = "\\ufe0e\\ufe0f", Bg = $C + BC + jC + WC, af = "['’]", zC = "[" + Dc + "]", jg = "[" + Bg + "]", Lc = "[" + Mg + "]", Wg = "\\d+", UC = "[" + Dg + "]", zg = "[" + Lg + "]", Ug = "[^" + Dc + Bg + Wg + Dg + Lg + Fg + "]", of = "\\ud83c[\\udffb-\\udfff]", HC = "(?:" + Lc + "|" + of + ")", Hg = "[^" + Dc + "]", sf = "(?:\\ud83c[\\udde6-\\uddff]){2}", lf = "[\\ud800-\\udbff][\\udc00-\\udfff]", Yi = "[" + Fg + "]", Yg = "\\u200d", qg = "(?:" + zg + "|" + Ug + ")", YC = "(?:" + Yi + "|" + Ug + ")", Vg = "(?:" + af + "(?:d|ll|m|re|s|t|ve))?", Gg = "(?:" + af + "(?:D|LL|M|RE|S|T|VE))?", Kg = HC + "?", Zg = "[" + $g + "]?", qC = "(?:" + Yg + "(?:" + [Hg, sf, lf].join("|") + ")" + Zg + Kg + ")*", VC = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", GC = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Xg = Zg + Kg + qC, KC = "(?:" + [UC, sf, lf].join("|") + ")" + Xg, ZC = "(?:" + [Hg + Lc + "?", Lc, sf, lf, zC].join("|") + ")", XC = RegExp(af, "g"), QC = RegExp(Lc, "g"), cf = RegExp(of + "(?=" + of + ")|" + ZC + Xg, "g"), JC = RegExp([
      Yi + "?" + zg + "+" + Vg + "(?=" + [jg, Yi, "$"].join("|") + ")",
      YC + "+" + Gg + "(?=" + [jg, Yi + qg, "$"].join("|") + ")",
      Yi + "?" + qg + "+" + Vg,
      Yi + "+" + Gg,
      GC,
      VC,
      Wg,
      KC
    ].join("|"), "g"), eO = RegExp("[" + Yg + Dc + Mg + $g + "]"), tO = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, nO = [
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
    ], rO = -1, an = {};
    an[Ue] = an[xt] = an[ve] = an[Tt] = an[Pt] = an[dt] = an[at] = an[de] = an[we] = !0, an[fe] = an[Te] = an[Xe] = an[W] = an[Ke] = an[z] = an[M] = an[V] = an[ie] = an[Pe] = an[Se] = an[Q] = an[_e] = an[Ie] = an[$e] = !1;
    var tn = {};
    tn[fe] = tn[Te] = tn[Xe] = tn[Ke] = tn[W] = tn[z] = tn[Ue] = tn[xt] = tn[ve] = tn[Tt] = tn[Pt] = tn[ie] = tn[Pe] = tn[Se] = tn[Q] = tn[_e] = tn[Ie] = tn[Le] = tn[dt] = tn[at] = tn[de] = tn[we] = !0, tn[M] = tn[V] = tn[$e] = !1;
    var aO = {
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
    }, oO = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, iO = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, sO = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, lO = parseFloat, cO = parseInt, Qg = typeof ss == "object" && ss && ss.Object === Object && ss, uO = typeof self == "object" && self && self.Object === Object && self, Dn = Qg || uO || Function("return this")(), uf = t && !t.nodeType && t, ai = uf && !0 && e && !e.nodeType && e, Jg = ai && ai.exports === uf, df = Jg && Qg.process, Pr = function() {
      try {
        var X = ai && ai.require && ai.require("util").types;
        return X || df && df.binding && df.binding("util");
      } catch {
      }
    }(), ev = Pr && Pr.isArrayBuffer, tv = Pr && Pr.isDate, nv = Pr && Pr.isMap, rv = Pr && Pr.isRegExp, av = Pr && Pr.isSet, ov = Pr && Pr.isTypedArray;
    function hr(X, ye, ue) {
      switch (ue.length) {
        case 0:
          return X.call(ye);
        case 1:
          return X.call(ye, ue[0]);
        case 2:
          return X.call(ye, ue[0], ue[1]);
        case 3:
          return X.call(ye, ue[0], ue[1], ue[2]);
      }
      return X.apply(ye, ue);
    }
    function dO(X, ye, ue, qe) {
      for (var gt = -1, Wt = X == null ? 0 : X.length; ++gt < Wt; ) {
        var xn = X[gt];
        ye(qe, xn, ue(xn), X);
      }
      return qe;
    }
    function mr(X, ye) {
      for (var ue = -1, qe = X == null ? 0 : X.length; ++ue < qe && ye(X[ue], ue, X) !== !1; )
        ;
      return X;
    }
    function fO(X, ye) {
      for (var ue = X == null ? 0 : X.length; ue-- && ye(X[ue], ue, X) !== !1; )
        ;
      return X;
    }
    function iv(X, ye) {
      for (var ue = -1, qe = X == null ? 0 : X.length; ++ue < qe; )
        if (!ye(X[ue], ue, X))
          return !1;
      return !0;
    }
    function mo(X, ye) {
      for (var ue = -1, qe = X == null ? 0 : X.length, gt = 0, Wt = []; ++ue < qe; ) {
        var xn = X[ue];
        ye(xn, ue, X) && (Wt[gt++] = xn);
      }
      return Wt;
    }
    function Fc(X, ye) {
      var ue = X == null ? 0 : X.length;
      return !!ue && qi(X, ye, 0) > -1;
    }
    function ff(X, ye, ue) {
      for (var qe = -1, gt = X == null ? 0 : X.length; ++qe < gt; )
        if (ue(ye, X[qe]))
          return !0;
      return !1;
    }
    function dn(X, ye) {
      for (var ue = -1, qe = X == null ? 0 : X.length, gt = Array(qe); ++ue < qe; )
        gt[ue] = ye(X[ue], ue, X);
      return gt;
    }
    function go(X, ye) {
      for (var ue = -1, qe = ye.length, gt = X.length; ++ue < qe; )
        X[gt + ue] = ye[ue];
      return X;
    }
    function pf(X, ye, ue, qe) {
      var gt = -1, Wt = X == null ? 0 : X.length;
      for (qe && Wt && (ue = X[++gt]); ++gt < Wt; )
        ue = ye(ue, X[gt], gt, X);
      return ue;
    }
    function pO(X, ye, ue, qe) {
      var gt = X == null ? 0 : X.length;
      for (qe && gt && (ue = X[--gt]); gt--; )
        ue = ye(ue, X[gt], gt, X);
      return ue;
    }
    function hf(X, ye) {
      for (var ue = -1, qe = X == null ? 0 : X.length; ++ue < qe; )
        if (ye(X[ue], ue, X))
          return !0;
      return !1;
    }
    var hO = mf("length");
    function mO(X) {
      return X.split("");
    }
    function gO(X) {
      return X.match(OC) || [];
    }
    function sv(X, ye, ue) {
      var qe;
      return ue(X, function(gt, Wt, xn) {
        if (ye(gt, Wt, xn))
          return qe = Wt, !1;
      }), qe;
    }
    function $c(X, ye, ue, qe) {
      for (var gt = X.length, Wt = ue + (qe ? 1 : -1); qe ? Wt-- : ++Wt < gt; )
        if (ye(X[Wt], Wt, X))
          return Wt;
      return -1;
    }
    function qi(X, ye, ue) {
      return ye === ye ? PO(X, ye, ue) : $c(X, lv, ue);
    }
    function vO(X, ye, ue, qe) {
      for (var gt = ue - 1, Wt = X.length; ++gt < Wt; )
        if (qe(X[gt], ye))
          return gt;
      return -1;
    }
    function lv(X) {
      return X !== X;
    }
    function cv(X, ye) {
      var ue = X == null ? 0 : X.length;
      return ue ? vf(X, ye) / ue : re;
    }
    function mf(X) {
      return function(ye) {
        return ye == null ? n : ye[X];
      };
    }
    function gf(X) {
      return function(ye) {
        return X == null ? n : X[ye];
      };
    }
    function uv(X, ye, ue, qe, gt) {
      return gt(X, function(Wt, xn, en) {
        ue = qe ? (qe = !1, Wt) : ye(ue, Wt, xn, en);
      }), ue;
    }
    function yO(X, ye) {
      var ue = X.length;
      for (X.sort(ye); ue--; )
        X[ue] = X[ue].value;
      return X;
    }
    function vf(X, ye) {
      for (var ue, qe = -1, gt = X.length; ++qe < gt; ) {
        var Wt = ye(X[qe]);
        Wt !== n && (ue = ue === n ? Wt : ue + Wt);
      }
      return ue;
    }
    function yf(X, ye) {
      for (var ue = -1, qe = Array(X); ++ue < X; )
        qe[ue] = ye(ue);
      return qe;
    }
    function bO(X, ye) {
      return dn(ye, function(ue) {
        return [ue, X[ue]];
      });
    }
    function dv(X) {
      return X && X.slice(0, mv(X) + 1).replace(rf, "");
    }
    function gr(X) {
      return function(ye) {
        return X(ye);
      };
    }
    function bf(X, ye) {
      return dn(ye, function(ue) {
        return X[ue];
      });
    }
    function Js(X, ye) {
      return X.has(ye);
    }
    function fv(X, ye) {
      for (var ue = -1, qe = X.length; ++ue < qe && qi(ye, X[ue], 0) > -1; )
        ;
      return ue;
    }
    function pv(X, ye) {
      for (var ue = X.length; ue-- && qi(ye, X[ue], 0) > -1; )
        ;
      return ue;
    }
    function _O(X, ye) {
      for (var ue = X.length, qe = 0; ue--; )
        X[ue] === ye && ++qe;
      return qe;
    }
    var wO = gf(aO), xO = gf(oO);
    function EO(X) {
      return "\\" + sO[X];
    }
    function CO(X, ye) {
      return X == null ? n : X[ye];
    }
    function Vi(X) {
      return eO.test(X);
    }
    function OO(X) {
      return tO.test(X);
    }
    function SO(X) {
      for (var ye, ue = []; !(ye = X.next()).done; )
        ue.push(ye.value);
      return ue;
    }
    function _f(X) {
      var ye = -1, ue = Array(X.size);
      return X.forEach(function(qe, gt) {
        ue[++ye] = [gt, qe];
      }), ue;
    }
    function hv(X, ye) {
      return function(ue) {
        return X(ye(ue));
      };
    }
    function vo(X, ye) {
      for (var ue = -1, qe = X.length, gt = 0, Wt = []; ++ue < qe; ) {
        var xn = X[ue];
        (xn === ye || xn === m) && (X[ue] = m, Wt[gt++] = ue);
      }
      return Wt;
    }
    function Bc(X) {
      var ye = -1, ue = Array(X.size);
      return X.forEach(function(qe) {
        ue[++ye] = qe;
      }), ue;
    }
    function TO(X) {
      var ye = -1, ue = Array(X.size);
      return X.forEach(function(qe) {
        ue[++ye] = [qe, qe];
      }), ue;
    }
    function PO(X, ye, ue) {
      for (var qe = ue - 1, gt = X.length; ++qe < gt; )
        if (X[qe] === ye)
          return qe;
      return -1;
    }
    function kO(X, ye, ue) {
      for (var qe = ue + 1; qe--; )
        if (X[qe] === ye)
          return qe;
      return qe;
    }
    function Gi(X) {
      return Vi(X) ? IO(X) : hO(X);
    }
    function Kr(X) {
      return Vi(X) ? AO(X) : mO(X);
    }
    function mv(X) {
      for (var ye = X.length; ye-- && wC.test(X.charAt(ye)); )
        ;
      return ye;
    }
    var NO = gf(iO);
    function IO(X) {
      for (var ye = cf.lastIndex = 0; cf.test(X); )
        ++ye;
      return ye;
    }
    function AO(X) {
      return X.match(cf) || [];
    }
    function RO(X) {
      return X.match(JC) || [];
    }
    var MO = function X(ye) {
      ye = ye == null ? Dn : Ki.defaults(Dn.Object(), ye, Ki.pick(Dn, nO));
      var ue = ye.Array, qe = ye.Date, gt = ye.Error, Wt = ye.Function, xn = ye.Math, en = ye.Object, wf = ye.RegExp, DO = ye.String, kr = ye.TypeError, jc = ue.prototype, LO = Wt.prototype, Zi = en.prototype, Wc = ye["__core-js_shared__"], zc = LO.toString, zt = Zi.hasOwnProperty, FO = 0, gv = function() {
        var a = /[^.]+$/.exec(Wc && Wc.keys && Wc.keys.IE_PROTO || "");
        return a ? "Symbol(src)_1." + a : "";
      }(), Uc = Zi.toString, $O = zc.call(en), BO = Dn._, jO = wf(
        "^" + zc.call(zt).replace(nf, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Hc = Jg ? ye.Buffer : n, yo = ye.Symbol, Yc = ye.Uint8Array, vv = Hc ? Hc.allocUnsafe : n, qc = hv(en.getPrototypeOf, en), yv = en.create, bv = Zi.propertyIsEnumerable, Vc = jc.splice, _v = yo ? yo.isConcatSpreadable : n, el = yo ? yo.iterator : n, oi = yo ? yo.toStringTag : n, Gc = function() {
        try {
          var a = ui(en, "defineProperty");
          return a({}, "", {}), a;
        } catch {
        }
      }(), WO = ye.clearTimeout !== Dn.clearTimeout && ye.clearTimeout, zO = qe && qe.now !== Dn.Date.now && qe.now, UO = ye.setTimeout !== Dn.setTimeout && ye.setTimeout, Kc = xn.ceil, Zc = xn.floor, xf = en.getOwnPropertySymbols, HO = Hc ? Hc.isBuffer : n, wv = ye.isFinite, YO = jc.join, qO = hv(en.keys, en), En = xn.max, Bn = xn.min, VO = qe.now, GO = ye.parseInt, xv = xn.random, KO = jc.reverse, Ef = ui(ye, "DataView"), tl = ui(ye, "Map"), Cf = ui(ye, "Promise"), Xi = ui(ye, "Set"), nl = ui(ye, "WeakMap"), rl = ui(en, "create"), Xc = nl && new nl(), Qi = {}, ZO = di(Ef), XO = di(tl), QO = di(Cf), JO = di(Xi), eS = di(nl), Qc = yo ? yo.prototype : n, al = Qc ? Qc.valueOf : n, Ev = Qc ? Qc.toString : n;
      function N(a) {
        if (mn(a) && !yt(a) && !(a instanceof At)) {
          if (a instanceof Nr)
            return a;
          if (zt.call(a, "__wrapped__"))
            return Cy(a);
        }
        return new Nr(a);
      }
      var Ji = /* @__PURE__ */ function() {
        function a() {
        }
        return function(i) {
          if (!hn(i))
            return {};
          if (yv)
            return yv(i);
          a.prototype = i;
          var f = new a();
          return a.prototype = n, f;
        };
      }();
      function Jc() {
      }
      function Nr(a, i) {
        this.__wrapped__ = a, this.__actions__ = [], this.__chain__ = !!i, this.__index__ = 0, this.__values__ = n;
      }
      N.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: mC,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: gC,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: Ig,
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
      }, N.prototype = Jc.prototype, N.prototype.constructor = N, Nr.prototype = Ji(Jc.prototype), Nr.prototype.constructor = Nr;
      function At(a) {
        this.__wrapped__ = a, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = se, this.__views__ = [];
      }
      function tS() {
        var a = new At(this.__wrapped__);
        return a.__actions__ = tr(this.__actions__), a.__dir__ = this.__dir__, a.__filtered__ = this.__filtered__, a.__iteratees__ = tr(this.__iteratees__), a.__takeCount__ = this.__takeCount__, a.__views__ = tr(this.__views__), a;
      }
      function nS() {
        if (this.__filtered__) {
          var a = new At(this);
          a.__dir__ = -1, a.__filtered__ = !0;
        } else
          a = this.clone(), a.__dir__ *= -1;
        return a;
      }
      function rS() {
        var a = this.__wrapped__.value(), i = this.__dir__, f = yt(a), v = i < 0, x = f ? a.length : 0, D = mT(0, x, this.__views__), j = D.start, Y = D.end, J = Y - j, xe = v ? Y : j - 1, Ce = this.__iteratees__, Ae = Ce.length, He = 0, et = Bn(J, this.__takeCount__);
        if (!f || !v && x == J && et == J)
          return Vv(a, this.__actions__);
        var ut = [];
        e:
          for (; J-- && He < et; ) {
            xe += i;
            for (var wt = -1, st = a[xe]; ++wt < Ae; ) {
              var kt = Ce[wt], Dt = kt.iteratee, br = kt.type, Vn = Dt(st);
              if (br == ge)
                st = Vn;
              else if (!Vn) {
                if (br == he)
                  continue e;
                break e;
              }
            }
            ut[He++] = st;
          }
        return ut;
      }
      At.prototype = Ji(Jc.prototype), At.prototype.constructor = At;
      function ii(a) {
        var i = -1, f = a == null ? 0 : a.length;
        for (this.clear(); ++i < f; ) {
          var v = a[i];
          this.set(v[0], v[1]);
        }
      }
      function aS() {
        this.__data__ = rl ? rl(null) : {}, this.size = 0;
      }
      function oS(a) {
        var i = this.has(a) && delete this.__data__[a];
        return this.size -= i ? 1 : 0, i;
      }
      function iS(a) {
        var i = this.__data__;
        if (rl) {
          var f = i[a];
          return f === p ? n : f;
        }
        return zt.call(i, a) ? i[a] : n;
      }
      function sS(a) {
        var i = this.__data__;
        return rl ? i[a] !== n : zt.call(i, a);
      }
      function lS(a, i) {
        var f = this.__data__;
        return this.size += this.has(a) ? 0 : 1, f[a] = rl && i === n ? p : i, this;
      }
      ii.prototype.clear = aS, ii.prototype.delete = oS, ii.prototype.get = iS, ii.prototype.has = sS, ii.prototype.set = lS;
      function Ra(a) {
        var i = -1, f = a == null ? 0 : a.length;
        for (this.clear(); ++i < f; ) {
          var v = a[i];
          this.set(v[0], v[1]);
        }
      }
      function cS() {
        this.__data__ = [], this.size = 0;
      }
      function uS(a) {
        var i = this.__data__, f = eu(i, a);
        if (f < 0)
          return !1;
        var v = i.length - 1;
        return f == v ? i.pop() : Vc.call(i, f, 1), --this.size, !0;
      }
      function dS(a) {
        var i = this.__data__, f = eu(i, a);
        return f < 0 ? n : i[f][1];
      }
      function fS(a) {
        return eu(this.__data__, a) > -1;
      }
      function pS(a, i) {
        var f = this.__data__, v = eu(f, a);
        return v < 0 ? (++this.size, f.push([a, i])) : f[v][1] = i, this;
      }
      Ra.prototype.clear = cS, Ra.prototype.delete = uS, Ra.prototype.get = dS, Ra.prototype.has = fS, Ra.prototype.set = pS;
      function Ma(a) {
        var i = -1, f = a == null ? 0 : a.length;
        for (this.clear(); ++i < f; ) {
          var v = a[i];
          this.set(v[0], v[1]);
        }
      }
      function hS() {
        this.size = 0, this.__data__ = {
          hash: new ii(),
          map: new (tl || Ra)(),
          string: new ii()
        };
      }
      function mS(a) {
        var i = fu(this, a).delete(a);
        return this.size -= i ? 1 : 0, i;
      }
      function gS(a) {
        return fu(this, a).get(a);
      }
      function vS(a) {
        return fu(this, a).has(a);
      }
      function yS(a, i) {
        var f = fu(this, a), v = f.size;
        return f.set(a, i), this.size += f.size == v ? 0 : 1, this;
      }
      Ma.prototype.clear = hS, Ma.prototype.delete = mS, Ma.prototype.get = gS, Ma.prototype.has = vS, Ma.prototype.set = yS;
      function si(a) {
        var i = -1, f = a == null ? 0 : a.length;
        for (this.__data__ = new Ma(); ++i < f; )
          this.add(a[i]);
      }
      function bS(a) {
        return this.__data__.set(a, p), this;
      }
      function _S(a) {
        return this.__data__.has(a);
      }
      si.prototype.add = si.prototype.push = bS, si.prototype.has = _S;
      function Zr(a) {
        var i = this.__data__ = new Ra(a);
        this.size = i.size;
      }
      function wS() {
        this.__data__ = new Ra(), this.size = 0;
      }
      function xS(a) {
        var i = this.__data__, f = i.delete(a);
        return this.size = i.size, f;
      }
      function ES(a) {
        return this.__data__.get(a);
      }
      function CS(a) {
        return this.__data__.has(a);
      }
      function OS(a, i) {
        var f = this.__data__;
        if (f instanceof Ra) {
          var v = f.__data__;
          if (!tl || v.length < o - 1)
            return v.push([a, i]), this.size = ++f.size, this;
          f = this.__data__ = new Ma(v);
        }
        return f.set(a, i), this.size = f.size, this;
      }
      Zr.prototype.clear = wS, Zr.prototype.delete = xS, Zr.prototype.get = ES, Zr.prototype.has = CS, Zr.prototype.set = OS;
      function Cv(a, i) {
        var f = yt(a), v = !f && fi(a), x = !f && !v && Eo(a), D = !f && !v && !x && rs(a), j = f || v || x || D, Y = j ? yf(a.length, DO) : [], J = Y.length;
        for (var xe in a)
          (i || zt.call(a, xe)) && !(j && // Safari 9 has enumerable `arguments.length` in strict mode.
          (xe == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          x && (xe == "offset" || xe == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          D && (xe == "buffer" || xe == "byteLength" || xe == "byteOffset") || // Skip index properties.
          Fa(xe, J))) && Y.push(xe);
        return Y;
      }
      function Ov(a) {
        var i = a.length;
        return i ? a[Df(0, i - 1)] : n;
      }
      function SS(a, i) {
        return pu(tr(a), li(i, 0, a.length));
      }
      function TS(a) {
        return pu(tr(a));
      }
      function Of(a, i, f) {
        (f !== n && !Qr(a[i], f) || f === n && !(i in a)) && da(a, i, f);
      }
      function ol(a, i, f) {
        var v = a[i];
        (!(zt.call(a, i) && Qr(v, f)) || f === n && !(i in a)) && da(a, i, f);
      }
      function eu(a, i) {
        for (var f = a.length; f--; )
          if (Qr(a[f][0], i))
            return f;
        return -1;
      }
      function PS(a, i, f, v) {
        return bo(a, function(x, D, j) {
          i(v, x, f(x), j);
        }), v;
      }
      function Sv(a, i) {
        return a && pa(i, Nn(i), a);
      }
      function kS(a, i) {
        return a && pa(i, rr(i), a);
      }
      function da(a, i, f) {
        i == "__proto__" && Gc ? Gc(a, i, {
          configurable: !0,
          enumerable: !0,
          value: f,
          writable: !0
        }) : a[i] = f;
      }
      function Sf(a, i) {
        for (var f = -1, v = i.length, x = ue(v), D = a == null; ++f < v; )
          x[f] = D ? n : sp(a, i[f]);
        return x;
      }
      function li(a, i, f) {
        return a === a && (f !== n && (a = a <= f ? a : f), i !== n && (a = a >= i ? a : i)), a;
      }
      function Ir(a, i, f, v, x, D) {
        var j, Y = i & g, J = i & y, xe = i & b;
        if (f && (j = x ? f(a, v, x, D) : f(a)), j !== n)
          return j;
        if (!hn(a))
          return a;
        var Ce = yt(a);
        if (Ce) {
          if (j = vT(a), !Y)
            return tr(a, j);
        } else {
          var Ae = jn(a), He = Ae == V || Ae == G;
          if (Eo(a))
            return Zv(a, Y);
          if (Ae == Se || Ae == fe || He && !x) {
            if (j = J || He ? {} : my(a), !Y)
              return J ? iT(a, kS(j, a)) : oT(a, Sv(j, a));
          } else {
            if (!tn[Ae])
              return x ? a : {};
            j = yT(a, Ae, Y);
          }
        }
        D || (D = new Zr());
        var et = D.get(a);
        if (et)
          return et;
        D.set(a, j), Hy(a) ? a.forEach(function(st) {
          j.add(Ir(st, i, f, st, a, D));
        }) : zy(a) && a.forEach(function(st, kt) {
          j.set(kt, Ir(st, i, f, kt, a, D));
        });
        var ut = xe ? J ? qf : Yf : J ? rr : Nn, wt = Ce ? n : ut(a);
        return mr(wt || a, function(st, kt) {
          wt && (kt = st, st = a[kt]), ol(j, kt, Ir(st, i, f, kt, a, D));
        }), j;
      }
      function NS(a) {
        var i = Nn(a);
        return function(f) {
          return Tv(f, a, i);
        };
      }
      function Tv(a, i, f) {
        var v = f.length;
        if (a == null)
          return !v;
        for (a = en(a); v--; ) {
          var x = f[v], D = i[x], j = a[x];
          if (j === n && !(x in a) || !D(j))
            return !1;
        }
        return !0;
      }
      function Pv(a, i, f) {
        if (typeof a != "function")
          throw new kr(u);
        return fl(function() {
          a.apply(n, f);
        }, i);
      }
      function il(a, i, f, v) {
        var x = -1, D = Fc, j = !0, Y = a.length, J = [], xe = i.length;
        if (!Y)
          return J;
        f && (i = dn(i, gr(f))), v ? (D = ff, j = !1) : i.length >= o && (D = Js, j = !1, i = new si(i));
        e:
          for (; ++x < Y; ) {
            var Ce = a[x], Ae = f == null ? Ce : f(Ce);
            if (Ce = v || Ce !== 0 ? Ce : 0, j && Ae === Ae) {
              for (var He = xe; He--; )
                if (i[He] === Ae)
                  continue e;
              J.push(Ce);
            } else D(i, Ae, v) || J.push(Ce);
          }
        return J;
      }
      var bo = ty(fa), kv = ty(Pf, !0);
      function IS(a, i) {
        var f = !0;
        return bo(a, function(v, x, D) {
          return f = !!i(v, x, D), f;
        }), f;
      }
      function tu(a, i, f) {
        for (var v = -1, x = a.length; ++v < x; ) {
          var D = a[v], j = i(D);
          if (j != null && (Y === n ? j === j && !yr(j) : f(j, Y)))
            var Y = j, J = D;
        }
        return J;
      }
      function AS(a, i, f, v) {
        var x = a.length;
        for (f = bt(f), f < 0 && (f = -f > x ? 0 : x + f), v = v === n || v > x ? x : bt(v), v < 0 && (v += x), v = f > v ? 0 : qy(v); f < v; )
          a[f++] = i;
        return a;
      }
      function Nv(a, i) {
        var f = [];
        return bo(a, function(v, x, D) {
          i(v, x, D) && f.push(v);
        }), f;
      }
      function Ln(a, i, f, v, x) {
        var D = -1, j = a.length;
        for (f || (f = _T), x || (x = []); ++D < j; ) {
          var Y = a[D];
          i > 0 && f(Y) ? i > 1 ? Ln(Y, i - 1, f, v, x) : go(x, Y) : v || (x[x.length] = Y);
        }
        return x;
      }
      var Tf = ny(), Iv = ny(!0);
      function fa(a, i) {
        return a && Tf(a, i, Nn);
      }
      function Pf(a, i) {
        return a && Iv(a, i, Nn);
      }
      function nu(a, i) {
        return mo(i, function(f) {
          return $a(a[f]);
        });
      }
      function ci(a, i) {
        i = wo(i, a);
        for (var f = 0, v = i.length; a != null && f < v; )
          a = a[Xr(i[f++])];
        return f && f == v ? a : n;
      }
      function Av(a, i, f) {
        var v = i(a);
        return yt(a) ? v : go(v, f(a));
      }
      function Yn(a) {
        return a == null ? a === n ? Fe : Z : oi && oi in en(a) ? hT(a) : TT(a);
      }
      function kf(a, i) {
        return a > i;
      }
      function RS(a, i) {
        return a != null && zt.call(a, i);
      }
      function MS(a, i) {
        return a != null && i in en(a);
      }
      function DS(a, i, f) {
        return a >= Bn(i, f) && a < En(i, f);
      }
      function Nf(a, i, f) {
        for (var v = f ? ff : Fc, x = a[0].length, D = a.length, j = D, Y = ue(D), J = 1 / 0, xe = []; j--; ) {
          var Ce = a[j];
          j && i && (Ce = dn(Ce, gr(i))), J = Bn(Ce.length, J), Y[j] = !f && (i || x >= 120 && Ce.length >= 120) ? new si(j && Ce) : n;
        }
        Ce = a[0];
        var Ae = -1, He = Y[0];
        e:
          for (; ++Ae < x && xe.length < J; ) {
            var et = Ce[Ae], ut = i ? i(et) : et;
            if (et = f || et !== 0 ? et : 0, !(He ? Js(He, ut) : v(xe, ut, f))) {
              for (j = D; --j; ) {
                var wt = Y[j];
                if (!(wt ? Js(wt, ut) : v(a[j], ut, f)))
                  continue e;
              }
              He && He.push(ut), xe.push(et);
            }
          }
        return xe;
      }
      function LS(a, i, f, v) {
        return fa(a, function(x, D, j) {
          i(v, f(x), D, j);
        }), v;
      }
      function sl(a, i, f) {
        i = wo(i, a), a = by(a, i);
        var v = a == null ? a : a[Xr(Rr(i))];
        return v == null ? n : hr(v, a, f);
      }
      function Rv(a) {
        return mn(a) && Yn(a) == fe;
      }
      function FS(a) {
        return mn(a) && Yn(a) == Xe;
      }
      function $S(a) {
        return mn(a) && Yn(a) == z;
      }
      function ll(a, i, f, v, x) {
        return a === i ? !0 : a == null || i == null || !mn(a) && !mn(i) ? a !== a && i !== i : BS(a, i, f, v, ll, x);
      }
      function BS(a, i, f, v, x, D) {
        var j = yt(a), Y = yt(i), J = j ? Te : jn(a), xe = Y ? Te : jn(i);
        J = J == fe ? Se : J, xe = xe == fe ? Se : xe;
        var Ce = J == Se, Ae = xe == Se, He = J == xe;
        if (He && Eo(a)) {
          if (!Eo(i))
            return !1;
          j = !0, Ce = !1;
        }
        if (He && !Ce)
          return D || (D = new Zr()), j || rs(a) ? fy(a, i, f, v, x, D) : fT(a, i, J, f, v, x, D);
        if (!(f & _)) {
          var et = Ce && zt.call(a, "__wrapped__"), ut = Ae && zt.call(i, "__wrapped__");
          if (et || ut) {
            var wt = et ? a.value() : a, st = ut ? i.value() : i;
            return D || (D = new Zr()), x(wt, st, f, v, D);
          }
        }
        return He ? (D || (D = new Zr()), pT(a, i, f, v, x, D)) : !1;
      }
      function jS(a) {
        return mn(a) && jn(a) == ie;
      }
      function If(a, i, f, v) {
        var x = f.length, D = x, j = !v;
        if (a == null)
          return !D;
        for (a = en(a); x--; ) {
          var Y = f[x];
          if (j && Y[2] ? Y[1] !== a[Y[0]] : !(Y[0] in a))
            return !1;
        }
        for (; ++x < D; ) {
          Y = f[x];
          var J = Y[0], xe = a[J], Ce = Y[1];
          if (j && Y[2]) {
            if (xe === n && !(J in a))
              return !1;
          } else {
            var Ae = new Zr();
            if (v)
              var He = v(xe, Ce, J, a, i, Ae);
            if (!(He === n ? ll(Ce, xe, _ | w, v, Ae) : He))
              return !1;
          }
        }
        return !0;
      }
      function Mv(a) {
        if (!hn(a) || xT(a))
          return !1;
        var i = $a(a) ? jO : NC;
        return i.test(di(a));
      }
      function WS(a) {
        return mn(a) && Yn(a) == Q;
      }
      function zS(a) {
        return mn(a) && jn(a) == _e;
      }
      function US(a) {
        return mn(a) && bu(a.length) && !!an[Yn(a)];
      }
      function Dv(a) {
        return typeof a == "function" ? a : a == null ? ar : typeof a == "object" ? yt(a) ? $v(a[0], a[1]) : Fv(a) : ab(a);
      }
      function Af(a) {
        if (!dl(a))
          return qO(a);
        var i = [];
        for (var f in en(a))
          zt.call(a, f) && f != "constructor" && i.push(f);
        return i;
      }
      function HS(a) {
        if (!hn(a))
          return ST(a);
        var i = dl(a), f = [];
        for (var v in a)
          v == "constructor" && (i || !zt.call(a, v)) || f.push(v);
        return f;
      }
      function Rf(a, i) {
        return a < i;
      }
      function Lv(a, i) {
        var f = -1, v = nr(a) ? ue(a.length) : [];
        return bo(a, function(x, D, j) {
          v[++f] = i(x, D, j);
        }), v;
      }
      function Fv(a) {
        var i = Gf(a);
        return i.length == 1 && i[0][2] ? vy(i[0][0], i[0][1]) : function(f) {
          return f === a || If(f, a, i);
        };
      }
      function $v(a, i) {
        return Zf(a) && gy(i) ? vy(Xr(a), i) : function(f) {
          var v = sp(f, a);
          return v === n && v === i ? lp(f, a) : ll(i, v, _ | w);
        };
      }
      function ru(a, i, f, v, x) {
        a !== i && Tf(i, function(D, j) {
          if (x || (x = new Zr()), hn(D))
            YS(a, i, j, f, ru, v, x);
          else {
            var Y = v ? v(Qf(a, j), D, j + "", a, i, x) : n;
            Y === n && (Y = D), Of(a, j, Y);
          }
        }, rr);
      }
      function YS(a, i, f, v, x, D, j) {
        var Y = Qf(a, f), J = Qf(i, f), xe = j.get(J);
        if (xe) {
          Of(a, f, xe);
          return;
        }
        var Ce = D ? D(Y, J, f + "", a, i, j) : n, Ae = Ce === n;
        if (Ae) {
          var He = yt(J), et = !He && Eo(J), ut = !He && !et && rs(J);
          Ce = J, He || et || ut ? yt(Y) ? Ce = Y : vn(Y) ? Ce = tr(Y) : et ? (Ae = !1, Ce = Zv(J, !0)) : ut ? (Ae = !1, Ce = Xv(J, !0)) : Ce = [] : pl(J) || fi(J) ? (Ce = Y, fi(Y) ? Ce = Vy(Y) : (!hn(Y) || $a(Y)) && (Ce = my(J))) : Ae = !1;
        }
        Ae && (j.set(J, Ce), x(Ce, J, v, D, j), j.delete(J)), Of(a, f, Ce);
      }
      function Bv(a, i) {
        var f = a.length;
        if (f)
          return i += i < 0 ? f : 0, Fa(i, f) ? a[i] : n;
      }
      function jv(a, i, f) {
        i.length ? i = dn(i, function(D) {
          return yt(D) ? function(j) {
            return ci(j, D.length === 1 ? D[0] : D);
          } : D;
        }) : i = [ar];
        var v = -1;
        i = dn(i, gr(ct()));
        var x = Lv(a, function(D, j, Y) {
          var J = dn(i, function(xe) {
            return xe(D);
          });
          return { criteria: J, index: ++v, value: D };
        });
        return yO(x, function(D, j) {
          return aT(D, j, f);
        });
      }
      function qS(a, i) {
        return Wv(a, i, function(f, v) {
          return lp(a, v);
        });
      }
      function Wv(a, i, f) {
        for (var v = -1, x = i.length, D = {}; ++v < x; ) {
          var j = i[v], Y = ci(a, j);
          f(Y, j) && cl(D, wo(j, a), Y);
        }
        return D;
      }
      function VS(a) {
        return function(i) {
          return ci(i, a);
        };
      }
      function Mf(a, i, f, v) {
        var x = v ? vO : qi, D = -1, j = i.length, Y = a;
        for (a === i && (i = tr(i)), f && (Y = dn(a, gr(f))); ++D < j; )
          for (var J = 0, xe = i[D], Ce = f ? f(xe) : xe; (J = x(Y, Ce, J, v)) > -1; )
            Y !== a && Vc.call(Y, J, 1), Vc.call(a, J, 1);
        return a;
      }
      function zv(a, i) {
        for (var f = a ? i.length : 0, v = f - 1; f--; ) {
          var x = i[f];
          if (f == v || x !== D) {
            var D = x;
            Fa(x) ? Vc.call(a, x, 1) : $f(a, x);
          }
        }
        return a;
      }
      function Df(a, i) {
        return a + Zc(xv() * (i - a + 1));
      }
      function GS(a, i, f, v) {
        for (var x = -1, D = En(Kc((i - a) / (f || 1)), 0), j = ue(D); D--; )
          j[v ? D : ++x] = a, a += f;
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
      function Et(a, i) {
        return Jf(yy(a, i, ar), a + "");
      }
      function KS(a) {
        return Ov(as(a));
      }
      function ZS(a, i) {
        var f = as(a);
        return pu(f, li(i, 0, f.length));
      }
      function cl(a, i, f, v) {
        if (!hn(a))
          return a;
        i = wo(i, a);
        for (var x = -1, D = i.length, j = D - 1, Y = a; Y != null && ++x < D; ) {
          var J = Xr(i[x]), xe = f;
          if (J === "__proto__" || J === "constructor" || J === "prototype")
            return a;
          if (x != j) {
            var Ce = Y[J];
            xe = v ? v(Ce, J, Y) : n, xe === n && (xe = hn(Ce) ? Ce : Fa(i[x + 1]) ? [] : {});
          }
          ol(Y, J, xe), Y = Y[J];
        }
        return a;
      }
      var Uv = Xc ? function(a, i) {
        return Xc.set(a, i), a;
      } : ar, XS = Gc ? function(a, i) {
        return Gc(a, "toString", {
          configurable: !0,
          enumerable: !1,
          value: up(i),
          writable: !0
        });
      } : ar;
      function QS(a) {
        return pu(as(a));
      }
      function Ar(a, i, f) {
        var v = -1, x = a.length;
        i < 0 && (i = -i > x ? 0 : x + i), f = f > x ? x : f, f < 0 && (f += x), x = i > f ? 0 : f - i >>> 0, i >>>= 0;
        for (var D = ue(x); ++v < x; )
          D[v] = a[v + i];
        return D;
      }
      function JS(a, i) {
        var f;
        return bo(a, function(v, x, D) {
          return f = i(v, x, D), !f;
        }), !!f;
      }
      function au(a, i, f) {
        var v = 0, x = a == null ? v : a.length;
        if (typeof i == "number" && i === i && x <= Oe) {
          for (; v < x; ) {
            var D = v + x >>> 1, j = a[D];
            j !== null && !yr(j) && (f ? j <= i : j < i) ? v = D + 1 : x = D;
          }
          return x;
        }
        return Ff(a, i, ar, f);
      }
      function Ff(a, i, f, v) {
        var x = 0, D = a == null ? 0 : a.length;
        if (D === 0)
          return 0;
        i = f(i);
        for (var j = i !== i, Y = i === null, J = yr(i), xe = i === n; x < D; ) {
          var Ce = Zc((x + D) / 2), Ae = f(a[Ce]), He = Ae !== n, et = Ae === null, ut = Ae === Ae, wt = yr(Ae);
          if (j)
            var st = v || ut;
          else xe ? st = ut && (v || He) : Y ? st = ut && He && (v || !et) : J ? st = ut && He && !et && (v || !wt) : et || wt ? st = !1 : st = v ? Ae <= i : Ae < i;
          st ? x = Ce + 1 : D = Ce;
        }
        return Bn(D, be);
      }
      function Hv(a, i) {
        for (var f = -1, v = a.length, x = 0, D = []; ++f < v; ) {
          var j = a[f], Y = i ? i(j) : j;
          if (!f || !Qr(Y, J)) {
            var J = Y;
            D[x++] = j === 0 ? 0 : j;
          }
        }
        return D;
      }
      function Yv(a) {
        return typeof a == "number" ? a : yr(a) ? re : +a;
      }
      function vr(a) {
        if (typeof a == "string")
          return a;
        if (yt(a))
          return dn(a, vr) + "";
        if (yr(a))
          return Ev ? Ev.call(a) : "";
        var i = a + "";
        return i == "0" && 1 / a == -ce ? "-0" : i;
      }
      function _o(a, i, f) {
        var v = -1, x = Fc, D = a.length, j = !0, Y = [], J = Y;
        if (f)
          j = !1, x = ff;
        else if (D >= o) {
          var xe = i ? null : uT(a);
          if (xe)
            return Bc(xe);
          j = !1, x = Js, J = new si();
        } else
          J = i ? [] : Y;
        e:
          for (; ++v < D; ) {
            var Ce = a[v], Ae = i ? i(Ce) : Ce;
            if (Ce = f || Ce !== 0 ? Ce : 0, j && Ae === Ae) {
              for (var He = J.length; He--; )
                if (J[He] === Ae)
                  continue e;
              i && J.push(Ae), Y.push(Ce);
            } else x(J, Ae, f) || (J !== Y && J.push(Ae), Y.push(Ce));
          }
        return Y;
      }
      function $f(a, i) {
        i = wo(i, a);
        var f = -1, v = i.length;
        if (!v)
          return !0;
        for (; ++f < v; ) {
          var x = Xr(i[f]);
          if (x === "__proto__" && !zt.call(a, "__proto__") || (x === "constructor" || x === "prototype") && f < v - 1)
            return !1;
        }
        var D = by(a, i);
        return D == null || delete D[Xr(Rr(i))];
      }
      function qv(a, i, f, v) {
        return cl(a, i, f(ci(a, i)), v);
      }
      function ou(a, i, f, v) {
        for (var x = a.length, D = v ? x : -1; (v ? D-- : ++D < x) && i(a[D], D, a); )
          ;
        return f ? Ar(a, v ? 0 : D, v ? D + 1 : x) : Ar(a, v ? D + 1 : 0, v ? x : D);
      }
      function Vv(a, i) {
        var f = a;
        return f instanceof At && (f = f.value()), pf(i, function(v, x) {
          return x.func.apply(x.thisArg, go([v], x.args));
        }, f);
      }
      function Bf(a, i, f) {
        var v = a.length;
        if (v < 2)
          return v ? _o(a[0]) : [];
        for (var x = -1, D = ue(v); ++x < v; )
          for (var j = a[x], Y = -1; ++Y < v; )
            Y != x && (D[x] = il(D[x] || j, a[Y], i, f));
        return _o(Ln(D, 1), i, f);
      }
      function Gv(a, i, f) {
        for (var v = -1, x = a.length, D = i.length, j = {}; ++v < x; ) {
          var Y = v < D ? i[v] : n;
          f(j, a[v], Y);
        }
        return j;
      }
      function jf(a) {
        return vn(a) ? a : [];
      }
      function Wf(a) {
        return typeof a == "function" ? a : ar;
      }
      function wo(a, i) {
        return yt(a) ? a : Zf(a, i) ? [a] : Ey(Ut(a));
      }
      var eT = Et;
      function xo(a, i, f) {
        var v = a.length;
        return f = f === n ? v : f, !i && f >= v ? a : Ar(a, i, f);
      }
      var Kv = WO || function(a) {
        return Dn.clearTimeout(a);
      };
      function Zv(a, i) {
        if (i)
          return a.slice();
        var f = a.length, v = vv ? vv(f) : new a.constructor(f);
        return a.copy(v), v;
      }
      function zf(a) {
        var i = new a.constructor(a.byteLength);
        return new Yc(i).set(new Yc(a)), i;
      }
      function tT(a, i) {
        var f = i ? zf(a.buffer) : a.buffer;
        return new a.constructor(f, a.byteOffset, a.byteLength);
      }
      function nT(a) {
        var i = new a.constructor(a.source, Rg.exec(a));
        return i.lastIndex = a.lastIndex, i;
      }
      function rT(a) {
        return al ? en(al.call(a)) : {};
      }
      function Xv(a, i) {
        var f = i ? zf(a.buffer) : a.buffer;
        return new a.constructor(f, a.byteOffset, a.length);
      }
      function Qv(a, i) {
        if (a !== i) {
          var f = a !== n, v = a === null, x = a === a, D = yr(a), j = i !== n, Y = i === null, J = i === i, xe = yr(i);
          if (!Y && !xe && !D && a > i || D && j && J && !Y && !xe || v && j && J || !f && J || !x)
            return 1;
          if (!v && !D && !xe && a < i || xe && f && x && !v && !D || Y && f && x || !j && x || !J)
            return -1;
        }
        return 0;
      }
      function aT(a, i, f) {
        for (var v = -1, x = a.criteria, D = i.criteria, j = x.length, Y = f.length; ++v < j; ) {
          var J = Qv(x[v], D[v]);
          if (J) {
            if (v >= Y)
              return J;
            var xe = f[v];
            return J * (xe == "desc" ? -1 : 1);
          }
        }
        return a.index - i.index;
      }
      function Jv(a, i, f, v) {
        for (var x = -1, D = a.length, j = f.length, Y = -1, J = i.length, xe = En(D - j, 0), Ce = ue(J + xe), Ae = !v; ++Y < J; )
          Ce[Y] = i[Y];
        for (; ++x < j; )
          (Ae || x < D) && (Ce[f[x]] = a[x]);
        for (; xe--; )
          Ce[Y++] = a[x++];
        return Ce;
      }
      function ey(a, i, f, v) {
        for (var x = -1, D = a.length, j = -1, Y = f.length, J = -1, xe = i.length, Ce = En(D - Y, 0), Ae = ue(Ce + xe), He = !v; ++x < Ce; )
          Ae[x] = a[x];
        for (var et = x; ++J < xe; )
          Ae[et + J] = i[J];
        for (; ++j < Y; )
          (He || x < D) && (Ae[et + f[j]] = a[x++]);
        return Ae;
      }
      function tr(a, i) {
        var f = -1, v = a.length;
        for (i || (i = ue(v)); ++f < v; )
          i[f] = a[f];
        return i;
      }
      function pa(a, i, f, v) {
        var x = !f;
        f || (f = {});
        for (var D = -1, j = i.length; ++D < j; ) {
          var Y = i[D], J = v ? v(f[Y], a[Y], Y, f, a) : n;
          J === n && (J = a[Y]), x ? da(f, Y, J) : ol(f, Y, J);
        }
        return f;
      }
      function oT(a, i) {
        return pa(a, Kf(a), i);
      }
      function iT(a, i) {
        return pa(a, py(a), i);
      }
      function iu(a, i) {
        return function(f, v) {
          var x = yt(f) ? dO : PS, D = i ? i() : {};
          return x(f, a, ct(v, 2), D);
        };
      }
      function es(a) {
        return Et(function(i, f) {
          var v = -1, x = f.length, D = x > 1 ? f[x - 1] : n, j = x > 2 ? f[2] : n;
          for (D = a.length > 3 && typeof D == "function" ? (x--, D) : n, j && qn(f[0], f[1], j) && (D = x < 3 ? n : D, x = 1), i = en(i); ++v < x; ) {
            var Y = f[v];
            Y && a(i, Y, v, D);
          }
          return i;
        });
      }
      function ty(a, i) {
        return function(f, v) {
          if (f == null)
            return f;
          if (!nr(f))
            return a(f, v);
          for (var x = f.length, D = i ? x : -1, j = en(f); (i ? D-- : ++D < x) && v(j[D], D, j) !== !1; )
            ;
          return f;
        };
      }
      function ny(a) {
        return function(i, f, v) {
          for (var x = -1, D = en(i), j = v(i), Y = j.length; Y--; ) {
            var J = j[a ? Y : ++x];
            if (f(D[J], J, D) === !1)
              break;
          }
          return i;
        };
      }
      function sT(a, i, f) {
        var v = i & k, x = ul(a);
        function D() {
          var j = this && this !== Dn && this instanceof D ? x : a;
          return j.apply(v ? f : this, arguments);
        }
        return D;
      }
      function ry(a) {
        return function(i) {
          i = Ut(i);
          var f = Vi(i) ? Kr(i) : n, v = f ? f[0] : i.charAt(0), x = f ? xo(f, 1).join("") : i.slice(1);
          return v[a]() + x;
        };
      }
      function ts(a) {
        return function(i) {
          return pf(nb(tb(i).replace(XC, "")), a, "");
        };
      }
      function ul(a) {
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
          var f = Ji(a.prototype), v = a.apply(f, i);
          return hn(v) ? v : f;
        };
      }
      function lT(a, i, f) {
        var v = ul(a);
        function x() {
          for (var D = arguments.length, j = ue(D), Y = D, J = ns(x); Y--; )
            j[Y] = arguments[Y];
          var xe = D < 3 && j[0] !== J && j[D - 1] !== J ? [] : vo(j, J);
          if (D -= xe.length, D < f)
            return ly(
              a,
              i,
              su,
              x.placeholder,
              n,
              j,
              xe,
              n,
              n,
              f - D
            );
          var Ce = this && this !== Dn && this instanceof x ? v : a;
          return hr(Ce, this, j);
        }
        return x;
      }
      function ay(a) {
        return function(i, f, v) {
          var x = en(i);
          if (!nr(i)) {
            var D = ct(f, 3);
            i = Nn(i), f = function(Y) {
              return D(x[Y], Y, x);
            };
          }
          var j = a(i, f, v);
          return j > -1 ? x[D ? i[j] : j] : n;
        };
      }
      function oy(a) {
        return La(function(i) {
          var f = i.length, v = f, x = Nr.prototype.thru;
          for (a && i.reverse(); v--; ) {
            var D = i[v];
            if (typeof D != "function")
              throw new kr(u);
            if (x && !j && du(D) == "wrapper")
              var j = new Nr([], !0);
          }
          for (v = j ? v : f; ++v < f; ) {
            D = i[v];
            var Y = du(D), J = Y == "wrapper" ? Vf(D) : n;
            J && Xf(J[0]) && J[1] == (T | I | P | A) && !J[4].length && J[9] == 1 ? j = j[du(J[0])].apply(j, J[3]) : j = D.length == 1 && Xf(D) ? j[Y]() : j.thru(D);
          }
          return function() {
            var xe = arguments, Ce = xe[0];
            if (j && xe.length == 1 && yt(Ce))
              return j.plant(Ce).value();
            for (var Ae = 0, He = f ? i[Ae].apply(this, xe) : Ce; ++Ae < f; )
              He = i[Ae].call(this, He);
            return He;
          };
        });
      }
      function su(a, i, f, v, x, D, j, Y, J, xe) {
        var Ce = i & T, Ae = i & k, He = i & F, et = i & (I | S), ut = i & B, wt = He ? n : ul(a);
        function st() {
          for (var kt = arguments.length, Dt = ue(kt), br = kt; br--; )
            Dt[br] = arguments[br];
          if (et)
            var Vn = ns(st), _r = _O(Dt, Vn);
          if (v && (Dt = Jv(Dt, v, x, et)), D && (Dt = ey(Dt, D, j, et)), kt -= _r, et && kt < xe) {
            var yn = vo(Dt, Vn);
            return ly(
              a,
              i,
              su,
              st.placeholder,
              f,
              Dt,
              yn,
              Y,
              J,
              xe - kt
            );
          }
          var Jr = Ae ? f : this, ja = He ? Jr[a] : a;
          return kt = Dt.length, Y ? Dt = PT(Dt, Y) : ut && kt > 1 && Dt.reverse(), Ce && J < kt && (Dt.length = J), this && this !== Dn && this instanceof st && (ja = wt || ul(ja)), ja.apply(Jr, Dt);
        }
        return st;
      }
      function iy(a, i) {
        return function(f, v) {
          return LS(f, a, i(v), {});
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
            typeof f == "string" || typeof v == "string" ? (f = vr(f), v = vr(v)) : (f = Yv(f), v = Yv(v)), x = a(f, v);
          }
          return x;
        };
      }
      function Uf(a) {
        return La(function(i) {
          return i = dn(i, gr(ct())), Et(function(f) {
            var v = this;
            return a(i, function(x) {
              return hr(x, v, f);
            });
          });
        });
      }
      function cu(a, i) {
        i = i === n ? " " : vr(i);
        var f = i.length;
        if (f < 2)
          return f ? Lf(i, a) : i;
        var v = Lf(i, Kc(a / Gi(i)));
        return Vi(i) ? xo(Kr(v), 0, a).join("") : v.slice(0, a);
      }
      function cT(a, i, f, v) {
        var x = i & k, D = ul(a);
        function j() {
          for (var Y = -1, J = arguments.length, xe = -1, Ce = v.length, Ae = ue(Ce + J), He = this && this !== Dn && this instanceof j ? D : a; ++xe < Ce; )
            Ae[xe] = v[xe];
          for (; J--; )
            Ae[xe++] = arguments[++Y];
          return hr(He, x ? f : this, Ae);
        }
        return j;
      }
      function sy(a) {
        return function(i, f, v) {
          return v && typeof v != "number" && qn(i, f, v) && (f = v = n), i = Ba(i), f === n ? (f = i, i = 0) : f = Ba(f), v = v === n ? i < f ? 1 : -1 : Ba(v), GS(i, f, v, a);
        };
      }
      function uu(a) {
        return function(i, f) {
          return typeof i == "string" && typeof f == "string" || (i = Mr(i), f = Mr(f)), a(i, f);
        };
      }
      function ly(a, i, f, v, x, D, j, Y, J, xe) {
        var Ce = i & I, Ae = Ce ? j : n, He = Ce ? n : j, et = Ce ? D : n, ut = Ce ? n : D;
        i |= Ce ? P : C, i &= ~(Ce ? C : P), i & E || (i &= -4);
        var wt = [
          a,
          i,
          x,
          et,
          Ae,
          ut,
          He,
          Y,
          J,
          xe
        ], st = f.apply(n, wt);
        return Xf(a) && _y(st, wt), st.placeholder = v, wy(st, a, i);
      }
      function Hf(a) {
        var i = xn[a];
        return function(f, v) {
          if (f = Mr(f), v = v == null ? 0 : Bn(bt(v), 292), v && wv(f)) {
            var x = (Ut(f) + "e").split("e"), D = i(x[0] + "e" + (+x[1] + v));
            return x = (Ut(D) + "e").split("e"), +(x[0] + "e" + (+x[1] - v));
          }
          return i(f);
        };
      }
      var uT = Xi && 1 / Bc(new Xi([, -0]))[1] == ce ? function(a) {
        return new Xi(a);
      } : pp;
      function cy(a) {
        return function(i) {
          var f = jn(i);
          return f == ie ? _f(i) : f == _e ? TO(i) : bO(i, a(i));
        };
      }
      function Da(a, i, f, v, x, D, j, Y) {
        var J = i & F;
        if (!J && typeof a != "function")
          throw new kr(u);
        var xe = v ? v.length : 0;
        if (xe || (i &= -97, v = x = n), j = j === n ? j : En(bt(j), 0), Y = Y === n ? Y : bt(Y), xe -= x ? x.length : 0, i & C) {
          var Ce = v, Ae = x;
          v = x = n;
        }
        var He = J ? n : Vf(a), et = [
          a,
          i,
          f,
          v,
          x,
          Ce,
          Ae,
          D,
          j,
          Y
        ];
        if (He && OT(et, He), a = et[0], i = et[1], f = et[2], v = et[3], x = et[4], Y = et[9] = et[9] === n ? J ? 0 : a.length : En(et[9] - xe, 0), !Y && i & (I | S) && (i &= -25), !i || i == k)
          var ut = sT(a, i, f);
        else i == I || i == S ? ut = lT(a, i, Y) : (i == P || i == (k | P)) && !x.length ? ut = cT(a, i, f, v) : ut = su.apply(n, et);
        var wt = He ? Uv : _y;
        return wy(wt(ut, et), a, i);
      }
      function uy(a, i, f, v) {
        return a === n || Qr(a, Zi[f]) && !zt.call(v, f) ? i : a;
      }
      function dy(a, i, f, v, x, D) {
        return hn(a) && hn(i) && (D.set(i, a), ru(a, i, n, dy, D), D.delete(i)), a;
      }
      function dT(a) {
        return pl(a) ? n : a;
      }
      function fy(a, i, f, v, x, D) {
        var j = f & _, Y = a.length, J = i.length;
        if (Y != J && !(j && J > Y))
          return !1;
        var xe = D.get(a), Ce = D.get(i);
        if (xe && Ce)
          return xe == i && Ce == a;
        var Ae = -1, He = !0, et = f & w ? new si() : n;
        for (D.set(a, i), D.set(i, a); ++Ae < Y; ) {
          var ut = a[Ae], wt = i[Ae];
          if (v)
            var st = j ? v(wt, ut, Ae, i, a, D) : v(ut, wt, Ae, a, i, D);
          if (st !== n) {
            if (st)
              continue;
            He = !1;
            break;
          }
          if (et) {
            if (!hf(i, function(kt, Dt) {
              if (!Js(et, Dt) && (ut === kt || x(ut, kt, f, v, D)))
                return et.push(Dt);
            })) {
              He = !1;
              break;
            }
          } else if (!(ut === wt || x(ut, wt, f, v, D))) {
            He = !1;
            break;
          }
        }
        return D.delete(a), D.delete(i), He;
      }
      function fT(a, i, f, v, x, D, j) {
        switch (f) {
          case Ke:
            if (a.byteLength != i.byteLength || a.byteOffset != i.byteOffset)
              return !1;
            a = a.buffer, i = i.buffer;
          case Xe:
            return !(a.byteLength != i.byteLength || !D(new Yc(a), new Yc(i)));
          case W:
          case z:
          case Pe:
            return Qr(+a, +i);
          case M:
            return a.name == i.name && a.message == i.message;
          case Q:
          case Ie:
            return a == i + "";
          case ie:
            var Y = _f;
          case _e:
            var J = v & _;
            if (Y || (Y = Bc), a.size != i.size && !J)
              return !1;
            var xe = j.get(a);
            if (xe)
              return xe == i;
            v |= w, j.set(a, i);
            var Ce = fy(Y(a), Y(i), v, x, D, j);
            return j.delete(a), Ce;
          case Le:
            if (al)
              return al.call(a) == al.call(i);
        }
        return !1;
      }
      function pT(a, i, f, v, x, D) {
        var j = f & _, Y = Yf(a), J = Y.length, xe = Yf(i), Ce = xe.length;
        if (J != Ce && !j)
          return !1;
        for (var Ae = J; Ae--; ) {
          var He = Y[Ae];
          if (!(j ? He in i : zt.call(i, He)))
            return !1;
        }
        var et = D.get(a), ut = D.get(i);
        if (et && ut)
          return et == i && ut == a;
        var wt = !0;
        D.set(a, i), D.set(i, a);
        for (var st = j; ++Ae < J; ) {
          He = Y[Ae];
          var kt = a[He], Dt = i[He];
          if (v)
            var br = j ? v(Dt, kt, He, i, a, D) : v(kt, Dt, He, a, i, D);
          if (!(br === n ? kt === Dt || x(kt, Dt, f, v, D) : br)) {
            wt = !1;
            break;
          }
          st || (st = He == "constructor");
        }
        if (wt && !st) {
          var Vn = a.constructor, _r = i.constructor;
          Vn != _r && "constructor" in a && "constructor" in i && !(typeof Vn == "function" && Vn instanceof Vn && typeof _r == "function" && _r instanceof _r) && (wt = !1);
        }
        return D.delete(a), D.delete(i), wt;
      }
      function La(a) {
        return Jf(yy(a, n, Ty), a + "");
      }
      function Yf(a) {
        return Av(a, Nn, Kf);
      }
      function qf(a) {
        return Av(a, rr, py);
      }
      var Vf = Xc ? function(a) {
        return Xc.get(a);
      } : pp;
      function du(a) {
        for (var i = a.name + "", f = Qi[i], v = zt.call(Qi, i) ? f.length : 0; v--; ) {
          var x = f[v], D = x.func;
          if (D == null || D == a)
            return x.name;
        }
        return i;
      }
      function ns(a) {
        var i = zt.call(N, "placeholder") ? N : a;
        return i.placeholder;
      }
      function ct() {
        var a = N.iteratee || dp;
        return a = a === dp ? Dv : a, arguments.length ? a(arguments[0], arguments[1]) : a;
      }
      function fu(a, i) {
        var f = a.__data__;
        return wT(i) ? f[typeof i == "string" ? "string" : "hash"] : f.map;
      }
      function Gf(a) {
        for (var i = Nn(a), f = i.length; f--; ) {
          var v = i[f], x = a[v];
          i[f] = [v, x, gy(x)];
        }
        return i;
      }
      function ui(a, i) {
        var f = CO(a, i);
        return Mv(f) ? f : n;
      }
      function hT(a) {
        var i = zt.call(a, oi), f = a[oi];
        try {
          a[oi] = n;
          var v = !0;
        } catch {
        }
        var x = Uc.call(a);
        return v && (i ? a[oi] = f : delete a[oi]), x;
      }
      var Kf = xf ? function(a) {
        return a == null ? [] : (a = en(a), mo(xf(a), function(i) {
          return bv.call(a, i);
        }));
      } : hp, py = xf ? function(a) {
        for (var i = []; a; )
          go(i, Kf(a)), a = qc(a);
        return i;
      } : hp, jn = Yn;
      (Ef && jn(new Ef(new ArrayBuffer(1))) != Ke || tl && jn(new tl()) != ie || Cf && jn(Cf.resolve()) != le || Xi && jn(new Xi()) != _e || nl && jn(new nl()) != $e) && (jn = function(a) {
        var i = Yn(a), f = i == Se ? a.constructor : n, v = f ? di(f) : "";
        if (v)
          switch (v) {
            case ZO:
              return Ke;
            case XO:
              return ie;
            case QO:
              return le;
            case JO:
              return _e;
            case eS:
              return $e;
          }
        return i;
      });
      function mT(a, i, f) {
        for (var v = -1, x = f.length; ++v < x; ) {
          var D = f[v], j = D.size;
          switch (D.type) {
            case "drop":
              a += j;
              break;
            case "dropRight":
              i -= j;
              break;
            case "take":
              i = Bn(i, a + j);
              break;
            case "takeRight":
              a = En(a, i - j);
              break;
          }
        }
        return { start: a, end: i };
      }
      function gT(a) {
        var i = a.match(EC);
        return i ? i[1].split(CC) : [];
      }
      function hy(a, i, f) {
        i = wo(i, a);
        for (var v = -1, x = i.length, D = !1; ++v < x; ) {
          var j = Xr(i[v]);
          if (!(D = a != null && f(a, j)))
            break;
          a = a[j];
        }
        return D || ++v != x ? D : (x = a == null ? 0 : a.length, !!x && bu(x) && Fa(j, x) && (yt(a) || fi(a)));
      }
      function vT(a) {
        var i = a.length, f = new a.constructor(i);
        return i && typeof a[0] == "string" && zt.call(a, "index") && (f.index = a.index, f.input = a.input), f;
      }
      function my(a) {
        return typeof a.constructor == "function" && !dl(a) ? Ji(qc(a)) : {};
      }
      function yT(a, i, f) {
        var v = a.constructor;
        switch (i) {
          case Xe:
            return zf(a);
          case W:
          case z:
            return new v(+a);
          case Ke:
            return tT(a, f);
          case Ue:
          case xt:
          case ve:
          case Tt:
          case Pt:
          case dt:
          case at:
          case de:
          case we:
            return Xv(a, f);
          case ie:
            return new v();
          case Pe:
          case Ie:
            return new v(a);
          case Q:
            return nT(a);
          case _e:
            return new v();
          case Le:
            return rT(a);
        }
      }
      function bT(a, i) {
        var f = i.length;
        if (!f)
          return a;
        var v = f - 1;
        return i[v] = (f > 1 ? "& " : "") + i[v], i = i.join(f > 2 ? ", " : " "), a.replace(xC, `{
/* [wrapped with ` + i + `] */
`);
      }
      function _T(a) {
        return yt(a) || fi(a) || !!(_v && a && a[_v]);
      }
      function Fa(a, i) {
        var f = typeof a;
        return i = i ?? me, !!i && (f == "number" || f != "symbol" && AC.test(a)) && a > -1 && a % 1 == 0 && a < i;
      }
      function qn(a, i, f) {
        if (!hn(f))
          return !1;
        var v = typeof i;
        return (v == "number" ? nr(f) && Fa(i, f.length) : v == "string" && i in f) ? Qr(f[i], a) : !1;
      }
      function Zf(a, i) {
        if (yt(a))
          return !1;
        var f = typeof a;
        return f == "number" || f == "symbol" || f == "boolean" || a == null || yr(a) ? !0 : yC.test(a) || !vC.test(a) || i != null && a in en(i);
      }
      function wT(a) {
        var i = typeof a;
        return i == "string" || i == "number" || i == "symbol" || i == "boolean" ? a !== "__proto__" : a === null;
      }
      function Xf(a) {
        var i = du(a), f = N[i];
        if (typeof f != "function" || !(i in At.prototype))
          return !1;
        if (a === f)
          return !0;
        var v = Vf(f);
        return !!v && a === v[0];
      }
      function xT(a) {
        return !!gv && gv in a;
      }
      var ET = Wc ? $a : mp;
      function dl(a) {
        var i = a && a.constructor, f = typeof i == "function" && i.prototype || Zi;
        return a === f;
      }
      function gy(a) {
        return a === a && !hn(a);
      }
      function vy(a, i) {
        return function(f) {
          return f == null ? !1 : f[a] === i && (i !== n || a in en(f));
        };
      }
      function CT(a) {
        var i = vu(a, function(v) {
          return f.size === h && f.clear(), v;
        }), f = i.cache;
        return i;
      }
      function OT(a, i) {
        var f = a[1], v = i[1], x = f | v, D = x < (k | F | T), j = v == T && f == I || v == T && f == A && a[7].length <= i[8] || v == (T | A) && i[7].length <= i[8] && f == I;
        if (!(D || j))
          return a;
        v & k && (a[2] = i[2], x |= f & k ? 0 : E);
        var Y = i[3];
        if (Y) {
          var J = a[3];
          a[3] = J ? Jv(J, Y, i[4]) : Y, a[4] = J ? vo(a[3], m) : i[4];
        }
        return Y = i[5], Y && (J = a[5], a[5] = J ? ey(J, Y, i[6]) : Y, a[6] = J ? vo(a[5], m) : i[6]), Y = i[7], Y && (a[7] = Y), v & T && (a[8] = a[8] == null ? i[8] : Bn(a[8], i[8])), a[9] == null && (a[9] = i[9]), a[0] = i[0], a[1] = x, a;
      }
      function ST(a) {
        var i = [];
        if (a != null)
          for (var f in en(a))
            i.push(f);
        return i;
      }
      function TT(a) {
        return Uc.call(a);
      }
      function yy(a, i, f) {
        return i = En(i === n ? a.length - 1 : i, 0), function() {
          for (var v = arguments, x = -1, D = En(v.length - i, 0), j = ue(D); ++x < D; )
            j[x] = v[i + x];
          x = -1;
          for (var Y = ue(i + 1); ++x < i; )
            Y[x] = v[x];
          return Y[i] = f(j), hr(a, this, Y);
        };
      }
      function by(a, i) {
        return i.length < 2 ? a : ci(a, Ar(i, 0, -1));
      }
      function PT(a, i) {
        for (var f = a.length, v = Bn(i.length, f), x = tr(a); v--; ) {
          var D = i[v];
          a[v] = Fa(D, f) ? x[D] : n;
        }
        return a;
      }
      function Qf(a, i) {
        if (!(i === "constructor" && typeof a[i] == "function") && i != "__proto__")
          return a[i];
      }
      var _y = xy(Uv), fl = UO || function(a, i) {
        return Dn.setTimeout(a, i);
      }, Jf = xy(XS);
      function wy(a, i, f) {
        var v = i + "";
        return Jf(a, bT(v, kT(gT(v), f)));
      }
      function xy(a) {
        var i = 0, f = 0;
        return function() {
          var v = VO(), x = ae - (v - f);
          if (f = v, x > 0) {
            if (++i >= K)
              return arguments[0];
          } else
            i = 0;
          return a.apply(n, arguments);
        };
      }
      function pu(a, i) {
        var f = -1, v = a.length, x = v - 1;
        for (i = i === n ? v : i; ++f < i; ) {
          var D = Df(f, x), j = a[D];
          a[D] = a[f], a[f] = j;
        }
        return a.length = i, a;
      }
      var Ey = CT(function(a) {
        var i = [];
        return a.charCodeAt(0) === 46 && i.push(""), a.replace(bC, function(f, v, x, D) {
          i.push(x ? D.replace(SC, "$1") : v || f);
        }), i;
      });
      function Xr(a) {
        if (typeof a == "string" || yr(a))
          return a;
        var i = a + "";
        return i == "0" && 1 / a == -ce ? "-0" : i;
      }
      function di(a) {
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
      function kT(a, i) {
        return mr(Ee, function(f) {
          var v = "_." + f[0];
          i & f[1] && !Fc(a, v) && a.push(v);
        }), a.sort();
      }
      function Cy(a) {
        if (a instanceof At)
          return a.clone();
        var i = new Nr(a.__wrapped__, a.__chain__);
        return i.__actions__ = tr(a.__actions__), i.__index__ = a.__index__, i.__values__ = a.__values__, i;
      }
      function NT(a, i, f) {
        (f ? qn(a, i, f) : i === n) ? i = 1 : i = En(bt(i), 0);
        var v = a == null ? 0 : a.length;
        if (!v || i < 1)
          return [];
        for (var x = 0, D = 0, j = ue(Kc(v / i)); x < v; )
          j[D++] = Ar(a, x, x += i);
        return j;
      }
      function IT(a) {
        for (var i = -1, f = a == null ? 0 : a.length, v = 0, x = []; ++i < f; ) {
          var D = a[i];
          D && (x[v++] = D);
        }
        return x;
      }
      function AT() {
        var a = arguments.length;
        if (!a)
          return [];
        for (var i = ue(a - 1), f = arguments[0], v = a; v--; )
          i[v - 1] = arguments[v];
        return go(yt(f) ? tr(f) : [f], Ln(i, 1));
      }
      var RT = Et(function(a, i) {
        return vn(a) ? il(a, Ln(i, 1, vn, !0)) : [];
      }), MT = Et(function(a, i) {
        var f = Rr(i);
        return vn(f) && (f = n), vn(a) ? il(a, Ln(i, 1, vn, !0), ct(f, 2)) : [];
      }), DT = Et(function(a, i) {
        var f = Rr(i);
        return vn(f) && (f = n), vn(a) ? il(a, Ln(i, 1, vn, !0), n, f) : [];
      });
      function LT(a, i, f) {
        var v = a == null ? 0 : a.length;
        return v ? (i = f || i === n ? 1 : bt(i), Ar(a, i < 0 ? 0 : i, v)) : [];
      }
      function FT(a, i, f) {
        var v = a == null ? 0 : a.length;
        return v ? (i = f || i === n ? 1 : bt(i), i = v - i, Ar(a, 0, i < 0 ? 0 : i)) : [];
      }
      function $T(a, i) {
        return a && a.length ? ou(a, ct(i, 3), !0, !0) : [];
      }
      function BT(a, i) {
        return a && a.length ? ou(a, ct(i, 3), !0) : [];
      }
      function jT(a, i, f, v) {
        var x = a == null ? 0 : a.length;
        return x ? (f && typeof f != "number" && qn(a, i, f) && (f = 0, v = x), AS(a, i, f, v)) : [];
      }
      function Oy(a, i, f) {
        var v = a == null ? 0 : a.length;
        if (!v)
          return -1;
        var x = f == null ? 0 : bt(f);
        return x < 0 && (x = En(v + x, 0)), $c(a, ct(i, 3), x);
      }
      function Sy(a, i, f) {
        var v = a == null ? 0 : a.length;
        if (!v)
          return -1;
        var x = v - 1;
        return f !== n && (x = bt(f), x = f < 0 ? En(v + x, 0) : Bn(x, v - 1)), $c(a, ct(i, 3), x, !0);
      }
      function Ty(a) {
        var i = a == null ? 0 : a.length;
        return i ? Ln(a, 1) : [];
      }
      function WT(a) {
        var i = a == null ? 0 : a.length;
        return i ? Ln(a, ce) : [];
      }
      function zT(a, i) {
        var f = a == null ? 0 : a.length;
        return f ? (i = i === n ? 1 : bt(i), Ln(a, i)) : [];
      }
      function UT(a) {
        for (var i = -1, f = a == null ? 0 : a.length, v = {}; ++i < f; ) {
          var x = a[i];
          da(v, x[0], x[1]);
        }
        return v;
      }
      function Py(a) {
        return a && a.length ? a[0] : n;
      }
      function HT(a, i, f) {
        var v = a == null ? 0 : a.length;
        if (!v)
          return -1;
        var x = f == null ? 0 : bt(f);
        return x < 0 && (x = En(v + x, 0)), qi(a, i, x);
      }
      function YT(a) {
        var i = a == null ? 0 : a.length;
        return i ? Ar(a, 0, -1) : [];
      }
      var qT = Et(function(a) {
        var i = dn(a, jf);
        return i.length && i[0] === a[0] ? Nf(i) : [];
      }), VT = Et(function(a) {
        var i = Rr(a), f = dn(a, jf);
        return i === Rr(f) ? i = n : f.pop(), f.length && f[0] === a[0] ? Nf(f, ct(i, 2)) : [];
      }), GT = Et(function(a) {
        var i = Rr(a), f = dn(a, jf);
        return i = typeof i == "function" ? i : n, i && f.pop(), f.length && f[0] === a[0] ? Nf(f, n, i) : [];
      });
      function KT(a, i) {
        return a == null ? "" : YO.call(a, i);
      }
      function Rr(a) {
        var i = a == null ? 0 : a.length;
        return i ? a[i - 1] : n;
      }
      function ZT(a, i, f) {
        var v = a == null ? 0 : a.length;
        if (!v)
          return -1;
        var x = v;
        return f !== n && (x = bt(f), x = x < 0 ? En(v + x, 0) : Bn(x, v - 1)), i === i ? kO(a, i, x) : $c(a, lv, x, !0);
      }
      function XT(a, i) {
        return a && a.length ? Bv(a, bt(i)) : n;
      }
      var QT = Et(ky);
      function ky(a, i) {
        return a && a.length && i && i.length ? Mf(a, i) : a;
      }
      function JT(a, i, f) {
        return a && a.length && i && i.length ? Mf(a, i, ct(f, 2)) : a;
      }
      function eP(a, i, f) {
        return a && a.length && i && i.length ? Mf(a, i, n, f) : a;
      }
      var tP = La(function(a, i) {
        var f = a == null ? 0 : a.length, v = Sf(a, i);
        return zv(a, dn(i, function(x) {
          return Fa(x, f) ? +x : x;
        }).sort(Qv)), v;
      });
      function nP(a, i) {
        var f = [];
        if (!(a && a.length))
          return f;
        var v = -1, x = [], D = a.length;
        for (i = ct(i, 3); ++v < D; ) {
          var j = a[v];
          i(j, v, a) && (f.push(j), x.push(v));
        }
        return zv(a, x), f;
      }
      function ep(a) {
        return a == null ? a : KO.call(a);
      }
      function rP(a, i, f) {
        var v = a == null ? 0 : a.length;
        return v ? (f && typeof f != "number" && qn(a, i, f) ? (i = 0, f = v) : (i = i == null ? 0 : bt(i), f = f === n ? v : bt(f)), Ar(a, i, f)) : [];
      }
      function aP(a, i) {
        return au(a, i);
      }
      function oP(a, i, f) {
        return Ff(a, i, ct(f, 2));
      }
      function iP(a, i) {
        var f = a == null ? 0 : a.length;
        if (f) {
          var v = au(a, i);
          if (v < f && Qr(a[v], i))
            return v;
        }
        return -1;
      }
      function sP(a, i) {
        return au(a, i, !0);
      }
      function lP(a, i, f) {
        return Ff(a, i, ct(f, 2), !0);
      }
      function cP(a, i) {
        var f = a == null ? 0 : a.length;
        if (f) {
          var v = au(a, i, !0) - 1;
          if (Qr(a[v], i))
            return v;
        }
        return -1;
      }
      function uP(a) {
        return a && a.length ? Hv(a) : [];
      }
      function dP(a, i) {
        return a && a.length ? Hv(a, ct(i, 2)) : [];
      }
      function fP(a) {
        var i = a == null ? 0 : a.length;
        return i ? Ar(a, 1, i) : [];
      }
      function pP(a, i, f) {
        return a && a.length ? (i = f || i === n ? 1 : bt(i), Ar(a, 0, i < 0 ? 0 : i)) : [];
      }
      function hP(a, i, f) {
        var v = a == null ? 0 : a.length;
        return v ? (i = f || i === n ? 1 : bt(i), i = v - i, Ar(a, i < 0 ? 0 : i, v)) : [];
      }
      function mP(a, i) {
        return a && a.length ? ou(a, ct(i, 3), !1, !0) : [];
      }
      function gP(a, i) {
        return a && a.length ? ou(a, ct(i, 3)) : [];
      }
      var vP = Et(function(a) {
        return _o(Ln(a, 1, vn, !0));
      }), yP = Et(function(a) {
        var i = Rr(a);
        return vn(i) && (i = n), _o(Ln(a, 1, vn, !0), ct(i, 2));
      }), bP = Et(function(a) {
        var i = Rr(a);
        return i = typeof i == "function" ? i : n, _o(Ln(a, 1, vn, !0), n, i);
      });
      function _P(a) {
        return a && a.length ? _o(a) : [];
      }
      function wP(a, i) {
        return a && a.length ? _o(a, ct(i, 2)) : [];
      }
      function xP(a, i) {
        return i = typeof i == "function" ? i : n, a && a.length ? _o(a, n, i) : [];
      }
      function tp(a) {
        if (!(a && a.length))
          return [];
        var i = 0;
        return a = mo(a, function(f) {
          if (vn(f))
            return i = En(f.length, i), !0;
        }), yf(i, function(f) {
          return dn(a, mf(f));
        });
      }
      function Ny(a, i) {
        if (!(a && a.length))
          return [];
        var f = tp(a);
        return i == null ? f : dn(f, function(v) {
          return hr(i, n, v);
        });
      }
      var EP = Et(function(a, i) {
        return vn(a) ? il(a, i) : [];
      }), CP = Et(function(a) {
        return Bf(mo(a, vn));
      }), OP = Et(function(a) {
        var i = Rr(a);
        return vn(i) && (i = n), Bf(mo(a, vn), ct(i, 2));
      }), SP = Et(function(a) {
        var i = Rr(a);
        return i = typeof i == "function" ? i : n, Bf(mo(a, vn), n, i);
      }), TP = Et(tp);
      function PP(a, i) {
        return Gv(a || [], i || [], ol);
      }
      function kP(a, i) {
        return Gv(a || [], i || [], cl);
      }
      var NP = Et(function(a) {
        var i = a.length, f = i > 1 ? a[i - 1] : n;
        return f = typeof f == "function" ? (a.pop(), f) : n, Ny(a, f);
      });
      function Iy(a) {
        var i = N(a);
        return i.__chain__ = !0, i;
      }
      function IP(a, i) {
        return i(a), a;
      }
      function hu(a, i) {
        return i(a);
      }
      var AP = La(function(a) {
        var i = a.length, f = i ? a[0] : 0, v = this.__wrapped__, x = function(D) {
          return Sf(D, a);
        };
        return i > 1 || this.__actions__.length || !(v instanceof At) || !Fa(f) ? this.thru(x) : (v = v.slice(f, +f + (i ? 1 : 0)), v.__actions__.push({
          func: hu,
          args: [x],
          thisArg: n
        }), new Nr(v, this.__chain__).thru(function(D) {
          return i && !D.length && D.push(n), D;
        }));
      });
      function RP() {
        return Iy(this);
      }
      function MP() {
        return new Nr(this.value(), this.__chain__);
      }
      function DP() {
        this.__values__ === n && (this.__values__ = Yy(this.value()));
        var a = this.__index__ >= this.__values__.length, i = a ? n : this.__values__[this.__index__++];
        return { done: a, value: i };
      }
      function LP() {
        return this;
      }
      function FP(a) {
        for (var i, f = this; f instanceof Jc; ) {
          var v = Cy(f);
          v.__index__ = 0, v.__values__ = n, i ? x.__wrapped__ = v : i = v;
          var x = v;
          f = f.__wrapped__;
        }
        return x.__wrapped__ = a, i;
      }
      function $P() {
        var a = this.__wrapped__;
        if (a instanceof At) {
          var i = a;
          return this.__actions__.length && (i = new At(this)), i = i.reverse(), i.__actions__.push({
            func: hu,
            args: [ep],
            thisArg: n
          }), new Nr(i, this.__chain__);
        }
        return this.thru(ep);
      }
      function BP() {
        return Vv(this.__wrapped__, this.__actions__);
      }
      var jP = iu(function(a, i, f) {
        zt.call(a, f) ? ++a[f] : da(a, f, 1);
      });
      function WP(a, i, f) {
        var v = yt(a) ? iv : IS;
        return f && qn(a, i, f) && (i = n), v(a, ct(i, 3));
      }
      function zP(a, i) {
        var f = yt(a) ? mo : Nv;
        return f(a, ct(i, 3));
      }
      var UP = ay(Oy), HP = ay(Sy);
      function YP(a, i) {
        return Ln(mu(a, i), 1);
      }
      function qP(a, i) {
        return Ln(mu(a, i), ce);
      }
      function VP(a, i, f) {
        return f = f === n ? 1 : bt(f), Ln(mu(a, i), f);
      }
      function Ay(a, i) {
        var f = yt(a) ? mr : bo;
        return f(a, ct(i, 3));
      }
      function Ry(a, i) {
        var f = yt(a) ? fO : kv;
        return f(a, ct(i, 3));
      }
      var GP = iu(function(a, i, f) {
        zt.call(a, f) ? a[f].push(i) : da(a, f, [i]);
      });
      function KP(a, i, f, v) {
        a = nr(a) ? a : as(a), f = f && !v ? bt(f) : 0;
        var x = a.length;
        return f < 0 && (f = En(x + f, 0)), _u(a) ? f <= x && a.indexOf(i, f) > -1 : !!x && qi(a, i, f) > -1;
      }
      var ZP = Et(function(a, i, f) {
        var v = -1, x = typeof i == "function", D = nr(a) ? ue(a.length) : [];
        return bo(a, function(j) {
          D[++v] = x ? hr(i, j, f) : sl(j, i, f);
        }), D;
      }), XP = iu(function(a, i, f) {
        da(a, f, i);
      });
      function mu(a, i) {
        var f = yt(a) ? dn : Lv;
        return f(a, ct(i, 3));
      }
      function QP(a, i, f, v) {
        return a == null ? [] : (yt(i) || (i = i == null ? [] : [i]), f = v ? n : f, yt(f) || (f = f == null ? [] : [f]), jv(a, i, f));
      }
      var JP = iu(function(a, i, f) {
        a[f ? 0 : 1].push(i);
      }, function() {
        return [[], []];
      });
      function ek(a, i, f) {
        var v = yt(a) ? pf : uv, x = arguments.length < 3;
        return v(a, ct(i, 4), f, x, bo);
      }
      function tk(a, i, f) {
        var v = yt(a) ? pO : uv, x = arguments.length < 3;
        return v(a, ct(i, 4), f, x, kv);
      }
      function nk(a, i) {
        var f = yt(a) ? mo : Nv;
        return f(a, yu(ct(i, 3)));
      }
      function rk(a) {
        var i = yt(a) ? Ov : KS;
        return i(a);
      }
      function ak(a, i, f) {
        (f ? qn(a, i, f) : i === n) ? i = 1 : i = bt(i);
        var v = yt(a) ? SS : ZS;
        return v(a, i);
      }
      function ok(a) {
        var i = yt(a) ? TS : QS;
        return i(a);
      }
      function ik(a) {
        if (a == null)
          return 0;
        if (nr(a))
          return _u(a) ? Gi(a) : a.length;
        var i = jn(a);
        return i == ie || i == _e ? a.size : Af(a).length;
      }
      function sk(a, i, f) {
        var v = yt(a) ? hf : JS;
        return f && qn(a, i, f) && (i = n), v(a, ct(i, 3));
      }
      var lk = Et(function(a, i) {
        if (a == null)
          return [];
        var f = i.length;
        return f > 1 && qn(a, i[0], i[1]) ? i = [] : f > 2 && qn(i[0], i[1], i[2]) && (i = [i[0]]), jv(a, Ln(i, 1), []);
      }), gu = zO || function() {
        return Dn.Date.now();
      };
      function ck(a, i) {
        if (typeof i != "function")
          throw new kr(u);
        return a = bt(a), function() {
          if (--a < 1)
            return i.apply(this, arguments);
        };
      }
      function My(a, i, f) {
        return i = f ? n : i, i = a && i == null ? a.length : i, Da(a, T, n, n, n, n, i);
      }
      function Dy(a, i) {
        var f;
        if (typeof i != "function")
          throw new kr(u);
        return a = bt(a), function() {
          return --a > 0 && (f = i.apply(this, arguments)), a <= 1 && (i = n), f;
        };
      }
      var np = Et(function(a, i, f) {
        var v = k;
        if (f.length) {
          var x = vo(f, ns(np));
          v |= P;
        }
        return Da(a, v, i, f, x);
      }), Ly = Et(function(a, i, f) {
        var v = k | F;
        if (f.length) {
          var x = vo(f, ns(Ly));
          v |= P;
        }
        return Da(i, v, a, f, x);
      });
      function Fy(a, i, f) {
        i = f ? n : i;
        var v = Da(a, I, n, n, n, n, n, i);
        return v.placeholder = Fy.placeholder, v;
      }
      function $y(a, i, f) {
        i = f ? n : i;
        var v = Da(a, S, n, n, n, n, n, i);
        return v.placeholder = $y.placeholder, v;
      }
      function By(a, i, f) {
        var v, x, D, j, Y, J, xe = 0, Ce = !1, Ae = !1, He = !0;
        if (typeof a != "function")
          throw new kr(u);
        i = Mr(i) || 0, hn(f) && (Ce = !!f.leading, Ae = "maxWait" in f, D = Ae ? En(Mr(f.maxWait) || 0, i) : D, He = "trailing" in f ? !!f.trailing : He);
        function et(yn) {
          var Jr = v, ja = x;
          return v = x = n, xe = yn, j = a.apply(ja, Jr), j;
        }
        function ut(yn) {
          return xe = yn, Y = fl(kt, i), Ce ? et(yn) : j;
        }
        function wt(yn) {
          var Jr = yn - J, ja = yn - xe, ob = i - Jr;
          return Ae ? Bn(ob, D - ja) : ob;
        }
        function st(yn) {
          var Jr = yn - J, ja = yn - xe;
          return J === n || Jr >= i || Jr < 0 || Ae && ja >= D;
        }
        function kt() {
          var yn = gu();
          if (st(yn))
            return Dt(yn);
          Y = fl(kt, wt(yn));
        }
        function Dt(yn) {
          return Y = n, He && v ? et(yn) : (v = x = n, j);
        }
        function br() {
          Y !== n && Kv(Y), xe = 0, v = J = x = Y = n;
        }
        function Vn() {
          return Y === n ? j : Dt(gu());
        }
        function _r() {
          var yn = gu(), Jr = st(yn);
          if (v = arguments, x = this, J = yn, Jr) {
            if (Y === n)
              return ut(J);
            if (Ae)
              return Kv(Y), Y = fl(kt, i), et(J);
          }
          return Y === n && (Y = fl(kt, i)), j;
        }
        return _r.cancel = br, _r.flush = Vn, _r;
      }
      var uk = Et(function(a, i) {
        return Pv(a, 1, i);
      }), dk = Et(function(a, i, f) {
        return Pv(a, Mr(i) || 0, f);
      });
      function fk(a) {
        return Da(a, B);
      }
      function vu(a, i) {
        if (typeof a != "function" || i != null && typeof i != "function")
          throw new kr(u);
        var f = function() {
          var v = arguments, x = i ? i.apply(this, v) : v[0], D = f.cache;
          if (D.has(x))
            return D.get(x);
          var j = a.apply(this, v);
          return f.cache = D.set(x, j) || D, j;
        };
        return f.cache = new (vu.Cache || Ma)(), f;
      }
      vu.Cache = Ma;
      function yu(a) {
        if (typeof a != "function")
          throw new kr(u);
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
      function pk(a) {
        return Dy(2, a);
      }
      var hk = eT(function(a, i) {
        i = i.length == 1 && yt(i[0]) ? dn(i[0], gr(ct())) : dn(Ln(i, 1), gr(ct()));
        var f = i.length;
        return Et(function(v) {
          for (var x = -1, D = Bn(v.length, f); ++x < D; )
            v[x] = i[x].call(this, v[x]);
          return hr(a, this, v);
        });
      }), rp = Et(function(a, i) {
        var f = vo(i, ns(rp));
        return Da(a, P, n, i, f);
      }), jy = Et(function(a, i) {
        var f = vo(i, ns(jy));
        return Da(a, C, n, i, f);
      }), mk = La(function(a, i) {
        return Da(a, A, n, n, n, i);
      });
      function gk(a, i) {
        if (typeof a != "function")
          throw new kr(u);
        return i = i === n ? i : bt(i), Et(a, i);
      }
      function vk(a, i) {
        if (typeof a != "function")
          throw new kr(u);
        return i = i == null ? 0 : En(bt(i), 0), Et(function(f) {
          var v = f[i], x = xo(f, 0, i);
          return v && go(x, v), hr(a, this, x);
        });
      }
      function yk(a, i, f) {
        var v = !0, x = !0;
        if (typeof a != "function")
          throw new kr(u);
        return hn(f) && (v = "leading" in f ? !!f.leading : v, x = "trailing" in f ? !!f.trailing : x), By(a, i, {
          leading: v,
          maxWait: i,
          trailing: x
        });
      }
      function bk(a) {
        return My(a, 1);
      }
      function _k(a, i) {
        return rp(Wf(i), a);
      }
      function wk() {
        if (!arguments.length)
          return [];
        var a = arguments[0];
        return yt(a) ? a : [a];
      }
      function xk(a) {
        return Ir(a, b);
      }
      function Ek(a, i) {
        return i = typeof i == "function" ? i : n, Ir(a, b, i);
      }
      function Ck(a) {
        return Ir(a, g | b);
      }
      function Ok(a, i) {
        return i = typeof i == "function" ? i : n, Ir(a, g | b, i);
      }
      function Sk(a, i) {
        return i == null || Tv(a, i, Nn(i));
      }
      function Qr(a, i) {
        return a === i || a !== a && i !== i;
      }
      var Tk = uu(kf), Pk = uu(function(a, i) {
        return a >= i;
      }), fi = Rv(/* @__PURE__ */ function() {
        return arguments;
      }()) ? Rv : function(a) {
        return mn(a) && zt.call(a, "callee") && !bv.call(a, "callee");
      }, yt = ue.isArray, kk = ev ? gr(ev) : FS;
      function nr(a) {
        return a != null && bu(a.length) && !$a(a);
      }
      function vn(a) {
        return mn(a) && nr(a);
      }
      function Nk(a) {
        return a === !0 || a === !1 || mn(a) && Yn(a) == W;
      }
      var Eo = HO || mp, Ik = tv ? gr(tv) : $S;
      function Ak(a) {
        return mn(a) && a.nodeType === 1 && !pl(a);
      }
      function Rk(a) {
        if (a == null)
          return !0;
        if (nr(a) && (yt(a) || typeof a == "string" || typeof a.splice == "function" || Eo(a) || rs(a) || fi(a)))
          return !a.length;
        var i = jn(a);
        if (i == ie || i == _e)
          return !a.size;
        if (dl(a))
          return !Af(a).length;
        for (var f in a)
          if (zt.call(a, f))
            return !1;
        return !0;
      }
      function Mk(a, i) {
        return ll(a, i);
      }
      function Dk(a, i, f) {
        f = typeof f == "function" ? f : n;
        var v = f ? f(a, i) : n;
        return v === n ? ll(a, i, n, f) : !!v;
      }
      function ap(a) {
        if (!mn(a))
          return !1;
        var i = Yn(a);
        return i == M || i == $ || typeof a.message == "string" && typeof a.name == "string" && !pl(a);
      }
      function Lk(a) {
        return typeof a == "number" && wv(a);
      }
      function $a(a) {
        if (!hn(a))
          return !1;
        var i = Yn(a);
        return i == V || i == G || i == De || i == H;
      }
      function Wy(a) {
        return typeof a == "number" && a == bt(a);
      }
      function bu(a) {
        return typeof a == "number" && a > -1 && a % 1 == 0 && a <= me;
      }
      function hn(a) {
        var i = typeof a;
        return a != null && (i == "object" || i == "function");
      }
      function mn(a) {
        return a != null && typeof a == "object";
      }
      var zy = nv ? gr(nv) : jS;
      function Fk(a, i) {
        return a === i || If(a, i, Gf(i));
      }
      function $k(a, i, f) {
        return f = typeof f == "function" ? f : n, If(a, i, Gf(i), f);
      }
      function Bk(a) {
        return Uy(a) && a != +a;
      }
      function jk(a) {
        if (ET(a))
          throw new gt(s);
        return Mv(a);
      }
      function Wk(a) {
        return a === null;
      }
      function zk(a) {
        return a == null;
      }
      function Uy(a) {
        return typeof a == "number" || mn(a) && Yn(a) == Pe;
      }
      function pl(a) {
        if (!mn(a) || Yn(a) != Se)
          return !1;
        var i = qc(a);
        if (i === null)
          return !0;
        var f = zt.call(i, "constructor") && i.constructor;
        return typeof f == "function" && f instanceof f && zc.call(f) == $O;
      }
      var op = rv ? gr(rv) : WS;
      function Uk(a) {
        return Wy(a) && a >= -me && a <= me;
      }
      var Hy = av ? gr(av) : zS;
      function _u(a) {
        return typeof a == "string" || !yt(a) && mn(a) && Yn(a) == Ie;
      }
      function yr(a) {
        return typeof a == "symbol" || mn(a) && Yn(a) == Le;
      }
      var rs = ov ? gr(ov) : US;
      function Hk(a) {
        return a === n;
      }
      function Yk(a) {
        return mn(a) && jn(a) == $e;
      }
      function qk(a) {
        return mn(a) && Yn(a) == tt;
      }
      var Vk = uu(Rf), Gk = uu(function(a, i) {
        return a <= i;
      });
      function Yy(a) {
        if (!a)
          return [];
        if (nr(a))
          return _u(a) ? Kr(a) : tr(a);
        if (el && a[el])
          return SO(a[el]());
        var i = jn(a), f = i == ie ? _f : i == _e ? Bc : as;
        return f(a);
      }
      function Ba(a) {
        if (!a)
          return a === 0 ? a : 0;
        if (a = Mr(a), a === ce || a === -ce) {
          var i = a < 0 ? -1 : 1;
          return i * te;
        }
        return a === a ? a : 0;
      }
      function bt(a) {
        var i = Ba(a), f = i % 1;
        return i === i ? f ? i - f : i : 0;
      }
      function qy(a) {
        return a ? li(bt(a), 0, se) : 0;
      }
      function Mr(a) {
        if (typeof a == "number")
          return a;
        if (yr(a))
          return re;
        if (hn(a)) {
          var i = typeof a.valueOf == "function" ? a.valueOf() : a;
          a = hn(i) ? i + "" : i;
        }
        if (typeof a != "string")
          return a === 0 ? a : +a;
        a = dv(a);
        var f = kC.test(a);
        return f || IC.test(a) ? cO(a.slice(2), f ? 2 : 8) : PC.test(a) ? re : +a;
      }
      function Vy(a) {
        return pa(a, rr(a));
      }
      function Kk(a) {
        return a ? li(bt(a), -me, me) : a === 0 ? a : 0;
      }
      function Ut(a) {
        return a == null ? "" : vr(a);
      }
      var Zk = es(function(a, i) {
        if (dl(i) || nr(i)) {
          pa(i, Nn(i), a);
          return;
        }
        for (var f in i)
          zt.call(i, f) && ol(a, f, i[f]);
      }), Gy = es(function(a, i) {
        pa(i, rr(i), a);
      }), Ky = es(function(a, i, f, v) {
        pa(i, rr(i), a, v);
      }), ip = es(function(a, i, f, v) {
        pa(i, Nn(i), a, v);
      }), Xk = La(Sf);
      function Qk(a, i) {
        var f = Ji(a);
        return i == null ? f : Sv(f, i);
      }
      var Jk = Et(function(a, i) {
        a = en(a);
        var f = -1, v = i.length, x = v > 2 ? i[2] : n;
        for (x && qn(i[0], i[1], x) && (v = 1); ++f < v; )
          for (var D = i[f], j = rr(D), Y = -1, J = j.length; ++Y < J; ) {
            var xe = j[Y], Ce = a[xe];
            (Ce === n || Qr(Ce, Zi[xe]) && !zt.call(a, xe)) && (a[xe] = D[xe]);
          }
        return a;
      }), eN = Et(function(a) {
        return a.push(n, dy), hr(Zy, n, a);
      });
      function tN(a, i) {
        return sv(a, ct(i, 3), fa);
      }
      function nN(a, i) {
        return sv(a, ct(i, 3), Pf);
      }
      function rN(a, i) {
        return a == null ? a : Tf(a, ct(i, 3), rr);
      }
      function aN(a, i) {
        return a == null ? a : Iv(a, ct(i, 3), rr);
      }
      function oN(a, i) {
        return a && fa(a, ct(i, 3));
      }
      function iN(a, i) {
        return a && Pf(a, ct(i, 3));
      }
      function sN(a) {
        return a == null ? [] : nu(a, Nn(a));
      }
      function lN(a) {
        return a == null ? [] : nu(a, rr(a));
      }
      function sp(a, i, f) {
        var v = a == null ? n : ci(a, i);
        return v === n ? f : v;
      }
      function cN(a, i) {
        return a != null && hy(a, i, RS);
      }
      function lp(a, i) {
        return a != null && hy(a, i, MS);
      }
      var uN = iy(function(a, i, f) {
        i != null && typeof i.toString != "function" && (i = Uc.call(i)), a[i] = f;
      }, up(ar)), dN = iy(function(a, i, f) {
        i != null && typeof i.toString != "function" && (i = Uc.call(i)), zt.call(a, i) ? a[i].push(f) : a[i] = [f];
      }, ct), fN = Et(sl);
      function Nn(a) {
        return nr(a) ? Cv(a) : Af(a);
      }
      function rr(a) {
        return nr(a) ? Cv(a, !0) : HS(a);
      }
      function pN(a, i) {
        var f = {};
        return i = ct(i, 3), fa(a, function(v, x, D) {
          da(f, i(v, x, D), v);
        }), f;
      }
      function hN(a, i) {
        var f = {};
        return i = ct(i, 3), fa(a, function(v, x, D) {
          da(f, x, i(v, x, D));
        }), f;
      }
      var mN = es(function(a, i, f) {
        ru(a, i, f);
      }), Zy = es(function(a, i, f, v) {
        ru(a, i, f, v);
      }), gN = La(function(a, i) {
        var f = {};
        if (a == null)
          return f;
        var v = !1;
        i = dn(i, function(D) {
          return D = wo(D, a), v || (v = D.length > 1), D;
        }), pa(a, qf(a), f), v && (f = Ir(f, g | y | b, dT));
        for (var x = i.length; x--; )
          $f(f, i[x]);
        return f;
      });
      function vN(a, i) {
        return Xy(a, yu(ct(i)));
      }
      var yN = La(function(a, i) {
        return a == null ? {} : qS(a, i);
      });
      function Xy(a, i) {
        if (a == null)
          return {};
        var f = dn(qf(a), function(v) {
          return [v];
        });
        return i = ct(i), Wv(a, f, function(v, x) {
          return i(v, x[0]);
        });
      }
      function bN(a, i, f) {
        i = wo(i, a);
        var v = -1, x = i.length;
        for (x || (x = 1, a = n); ++v < x; ) {
          var D = a == null ? n : a[Xr(i[v])];
          D === n && (v = x, D = f), a = $a(D) ? D.call(a) : D;
        }
        return a;
      }
      function _N(a, i, f) {
        return a == null ? a : cl(a, i, f);
      }
      function wN(a, i, f, v) {
        return v = typeof v == "function" ? v : n, a == null ? a : cl(a, i, f, v);
      }
      var Qy = cy(Nn), Jy = cy(rr);
      function xN(a, i, f) {
        var v = yt(a), x = v || Eo(a) || rs(a);
        if (i = ct(i, 4), f == null) {
          var D = a && a.constructor;
          x ? f = v ? new D() : [] : hn(a) ? f = $a(D) ? Ji(qc(a)) : {} : f = {};
        }
        return (x ? mr : fa)(a, function(j, Y, J) {
          return i(f, j, Y, J);
        }), f;
      }
      function EN(a, i) {
        return a == null ? !0 : $f(a, i);
      }
      function CN(a, i, f) {
        return a == null ? a : qv(a, i, Wf(f));
      }
      function ON(a, i, f, v) {
        return v = typeof v == "function" ? v : n, a == null ? a : qv(a, i, Wf(f), v);
      }
      function as(a) {
        return a == null ? [] : bf(a, Nn(a));
      }
      function SN(a) {
        return a == null ? [] : bf(a, rr(a));
      }
      function TN(a, i, f) {
        return f === n && (f = i, i = n), f !== n && (f = Mr(f), f = f === f ? f : 0), i !== n && (i = Mr(i), i = i === i ? i : 0), li(Mr(a), i, f);
      }
      function PN(a, i, f) {
        return i = Ba(i), f === n ? (f = i, i = 0) : f = Ba(f), a = Mr(a), DS(a, i, f);
      }
      function kN(a, i, f) {
        if (f && typeof f != "boolean" && qn(a, i, f) && (i = f = n), f === n && (typeof i == "boolean" ? (f = i, i = n) : typeof a == "boolean" && (f = a, a = n)), a === n && i === n ? (a = 0, i = 1) : (a = Ba(a), i === n ? (i = a, a = 0) : i = Ba(i)), a > i) {
          var v = a;
          a = i, i = v;
        }
        if (f || a % 1 || i % 1) {
          var x = xv();
          return Bn(a + x * (i - a + lO("1e-" + ((x + "").length - 1))), i);
        }
        return Df(a, i);
      }
      var NN = ts(function(a, i, f) {
        return i = i.toLowerCase(), a + (f ? eb(i) : i);
      });
      function eb(a) {
        return cp(Ut(a).toLowerCase());
      }
      function tb(a) {
        return a = Ut(a), a && a.replace(RC, wO).replace(QC, "");
      }
      function IN(a, i, f) {
        a = Ut(a), i = vr(i);
        var v = a.length;
        f = f === n ? v : li(bt(f), 0, v);
        var x = f;
        return f -= i.length, f >= 0 && a.slice(f, x) == i;
      }
      function AN(a) {
        return a = Ut(a), a && Tr.test(a) ? a.replace(Gt, xO) : a;
      }
      function RN(a) {
        return a = Ut(a), a && _C.test(a) ? a.replace(nf, "\\$&") : a;
      }
      var MN = ts(function(a, i, f) {
        return a + (f ? "-" : "") + i.toLowerCase();
      }), DN = ts(function(a, i, f) {
        return a + (f ? " " : "") + i.toLowerCase();
      }), LN = ry("toLowerCase");
      function FN(a, i, f) {
        a = Ut(a), i = bt(i);
        var v = i ? Gi(a) : 0;
        if (!i || v >= i)
          return a;
        var x = (i - v) / 2;
        return cu(Zc(x), f) + a + cu(Kc(x), f);
      }
      function $N(a, i, f) {
        a = Ut(a), i = bt(i);
        var v = i ? Gi(a) : 0;
        return i && v < i ? a + cu(i - v, f) : a;
      }
      function BN(a, i, f) {
        a = Ut(a), i = bt(i);
        var v = i ? Gi(a) : 0;
        return i && v < i ? cu(i - v, f) + a : a;
      }
      function jN(a, i, f) {
        return f || i == null ? i = 0 : i && (i = +i), GO(Ut(a).replace(rf, ""), i || 0);
      }
      function WN(a, i, f) {
        return (f ? qn(a, i, f) : i === n) ? i = 1 : i = bt(i), Lf(Ut(a), i);
      }
      function zN() {
        var a = arguments, i = Ut(a[0]);
        return a.length < 3 ? i : i.replace(a[1], a[2]);
      }
      var UN = ts(function(a, i, f) {
        return a + (f ? "_" : "") + i.toLowerCase();
      });
      function HN(a, i, f) {
        return f && typeof f != "number" && qn(a, i, f) && (i = f = n), f = f === n ? se : f >>> 0, f ? (a = Ut(a), a && (typeof i == "string" || i != null && !op(i)) && (i = vr(i), !i && Vi(a)) ? xo(Kr(a), 0, f) : a.split(i, f)) : [];
      }
      var YN = ts(function(a, i, f) {
        return a + (f ? " " : "") + cp(i);
      });
      function qN(a, i, f) {
        return a = Ut(a), f = f == null ? 0 : li(bt(f), 0, a.length), i = vr(i), a.slice(f, f + i.length) == i;
      }
      function VN(a, i, f) {
        var v = N.templateSettings;
        f && qn(a, i, f) && (i = n), a = Ut(a), i = ip({}, i, v, uy);
        var x = ip({}, i.imports, v.imports, uy), D = Nn(x), j = bf(x, D);
        mr(D, function(st) {
          if (Ag.test(st))
            throw new gt(d);
        });
        var Y, J, xe = 0, Ce = i.interpolate || Mc, Ae = "__p += '", He = wf(
          (i.escape || Mc).source + "|" + Ce.source + "|" + (Ce === Ig ? TC : Mc).source + "|" + (i.evaluate || Mc).source + "|$",
          "g"
        ), et = "//# sourceURL=" + (zt.call(i, "sourceURL") ? (i.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++rO + "]") + `
`;
        a.replace(He, function(st, kt, Dt, br, Vn, _r) {
          return Dt || (Dt = br), Ae += a.slice(xe, _r).replace(MC, EO), kt && (Y = !0, Ae += `' +
__e(` + kt + `) +
'`), Vn && (J = !0, Ae += `';
` + Vn + `;
__p += '`), Dt && (Ae += `' +
((__t = (` + Dt + `)) == null ? '' : __t) +
'`), xe = _r + st.length, st;
        }), Ae += `';
`;
        var ut = zt.call(i, "variable") && i.variable;
        if (!ut)
          Ae = `with (obj) {
` + Ae + `
}
`;
        else if (Ag.test(ut))
          throw new gt(c);
        Ae = (J ? Ae.replace(nt, "") : Ae).replace(Ye, "$1").replace(Je, "$1;"), Ae = "function(" + (ut || "obj") + `) {
` + (ut ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (Y ? ", __e = _.escape" : "") + (J ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + Ae + `return __p
}`;
        var wt = rb(function() {
          return Wt(D, et + "return " + Ae).apply(n, j);
        });
        if (wt.source = Ae, ap(wt))
          throw wt;
        return wt;
      }
      function GN(a) {
        return Ut(a).toLowerCase();
      }
      function KN(a) {
        return Ut(a).toUpperCase();
      }
      function ZN(a, i, f) {
        if (a = Ut(a), a && (f || i === n))
          return dv(a);
        if (!a || !(i = vr(i)))
          return a;
        var v = Kr(a), x = Kr(i), D = fv(v, x), j = pv(v, x) + 1;
        return xo(v, D, j).join("");
      }
      function XN(a, i, f) {
        if (a = Ut(a), a && (f || i === n))
          return a.slice(0, mv(a) + 1);
        if (!a || !(i = vr(i)))
          return a;
        var v = Kr(a), x = pv(v, Kr(i)) + 1;
        return xo(v, 0, x).join("");
      }
      function QN(a, i, f) {
        if (a = Ut(a), a && (f || i === n))
          return a.replace(rf, "");
        if (!a || !(i = vr(i)))
          return a;
        var v = Kr(a), x = fv(v, Kr(i));
        return xo(v, x).join("");
      }
      function JN(a, i) {
        var f = U, v = ne;
        if (hn(i)) {
          var x = "separator" in i ? i.separator : x;
          f = "length" in i ? bt(i.length) : f, v = "omission" in i ? vr(i.omission) : v;
        }
        a = Ut(a);
        var D = a.length;
        if (Vi(a)) {
          var j = Kr(a);
          D = j.length;
        }
        if (f >= D)
          return a;
        var Y = f - Gi(v);
        if (Y < 1)
          return v;
        var J = j ? xo(j, 0, Y).join("") : a.slice(0, Y);
        if (x === n)
          return J + v;
        if (j && (Y += J.length - Y), op(x)) {
          if (a.slice(Y).search(x)) {
            var xe, Ce = J;
            for (x.global || (x = wf(x.source, Ut(Rg.exec(x)) + "g")), x.lastIndex = 0; xe = x.exec(Ce); )
              var Ae = xe.index;
            J = J.slice(0, Ae === n ? Y : Ae);
          }
        } else if (a.indexOf(vr(x), Y) != Y) {
          var He = J.lastIndexOf(x);
          He > -1 && (J = J.slice(0, He));
        }
        return J + v;
      }
      function eI(a) {
        return a = Ut(a), a && ri.test(a) ? a.replace(pt, NO) : a;
      }
      var tI = ts(function(a, i, f) {
        return a + (f ? " " : "") + i.toUpperCase();
      }), cp = ry("toUpperCase");
      function nb(a, i, f) {
        return a = Ut(a), i = f ? n : i, i === n ? OO(a) ? RO(a) : gO(a) : a.match(i) || [];
      }
      var rb = Et(function(a, i) {
        try {
          return hr(a, n, i);
        } catch (f) {
          return ap(f) ? f : new gt(f);
        }
      }), nI = La(function(a, i) {
        return mr(i, function(f) {
          f = Xr(f), da(a, f, np(a[f], a));
        }), a;
      });
      function rI(a) {
        var i = a == null ? 0 : a.length, f = ct();
        return a = i ? dn(a, function(v) {
          if (typeof v[1] != "function")
            throw new kr(u);
          return [f(v[0]), v[1]];
        }) : [], Et(function(v) {
          for (var x = -1; ++x < i; ) {
            var D = a[x];
            if (hr(D[0], this, v))
              return hr(D[1], this, v);
          }
        });
      }
      function aI(a) {
        return NS(Ir(a, g));
      }
      function up(a) {
        return function() {
          return a;
        };
      }
      function oI(a, i) {
        return a == null || a !== a ? i : a;
      }
      var iI = oy(), sI = oy(!0);
      function ar(a) {
        return a;
      }
      function dp(a) {
        return Dv(typeof a == "function" ? a : Ir(a, g));
      }
      function lI(a) {
        return Fv(Ir(a, g));
      }
      function cI(a, i) {
        return $v(a, Ir(i, g));
      }
      var uI = Et(function(a, i) {
        return function(f) {
          return sl(f, a, i);
        };
      }), dI = Et(function(a, i) {
        return function(f) {
          return sl(a, f, i);
        };
      });
      function fp(a, i, f) {
        var v = Nn(i), x = nu(i, v);
        f == null && !(hn(i) && (x.length || !v.length)) && (f = i, i = a, a = this, x = nu(i, Nn(i)));
        var D = !(hn(f) && "chain" in f) || !!f.chain, j = $a(a);
        return mr(x, function(Y) {
          var J = i[Y];
          a[Y] = J, j && (a.prototype[Y] = function() {
            var xe = this.__chain__;
            if (D || xe) {
              var Ce = a(this.__wrapped__), Ae = Ce.__actions__ = tr(this.__actions__);
              return Ae.push({ func: J, args: arguments, thisArg: a }), Ce.__chain__ = xe, Ce;
            }
            return J.apply(a, go([this.value()], arguments));
          });
        }), a;
      }
      function fI() {
        return Dn._ === this && (Dn._ = BO), this;
      }
      function pp() {
      }
      function pI(a) {
        return a = bt(a), Et(function(i) {
          return Bv(i, a);
        });
      }
      var hI = Uf(dn), mI = Uf(iv), gI = Uf(hf);
      function ab(a) {
        return Zf(a) ? mf(Xr(a)) : VS(a);
      }
      function vI(a) {
        return function(i) {
          return a == null ? n : ci(a, i);
        };
      }
      var yI = sy(), bI = sy(!0);
      function hp() {
        return [];
      }
      function mp() {
        return !1;
      }
      function _I() {
        return {};
      }
      function wI() {
        return "";
      }
      function xI() {
        return !0;
      }
      function EI(a, i) {
        if (a = bt(a), a < 1 || a > me)
          return [];
        var f = se, v = Bn(a, se);
        i = ct(i), a -= se;
        for (var x = yf(v, i); ++f < a; )
          i(f);
        return x;
      }
      function CI(a) {
        return yt(a) ? dn(a, Xr) : yr(a) ? [a] : tr(Ey(Ut(a)));
      }
      function OI(a) {
        var i = ++FO;
        return Ut(a) + i;
      }
      var SI = lu(function(a, i) {
        return a + i;
      }, 0), TI = Hf("ceil"), PI = lu(function(a, i) {
        return a / i;
      }, 1), kI = Hf("floor");
      function NI(a) {
        return a && a.length ? tu(a, ar, kf) : n;
      }
      function II(a, i) {
        return a && a.length ? tu(a, ct(i, 2), kf) : n;
      }
      function AI(a) {
        return cv(a, ar);
      }
      function RI(a, i) {
        return cv(a, ct(i, 2));
      }
      function MI(a) {
        return a && a.length ? tu(a, ar, Rf) : n;
      }
      function DI(a, i) {
        return a && a.length ? tu(a, ct(i, 2), Rf) : n;
      }
      var LI = lu(function(a, i) {
        return a * i;
      }, 1), FI = Hf("round"), $I = lu(function(a, i) {
        return a - i;
      }, 0);
      function BI(a) {
        return a && a.length ? vf(a, ar) : 0;
      }
      function jI(a, i) {
        return a && a.length ? vf(a, ct(i, 2)) : 0;
      }
      return N.after = ck, N.ary = My, N.assign = Zk, N.assignIn = Gy, N.assignInWith = Ky, N.assignWith = ip, N.at = Xk, N.before = Dy, N.bind = np, N.bindAll = nI, N.bindKey = Ly, N.castArray = wk, N.chain = Iy, N.chunk = NT, N.compact = IT, N.concat = AT, N.cond = rI, N.conforms = aI, N.constant = up, N.countBy = jP, N.create = Qk, N.curry = Fy, N.curryRight = $y, N.debounce = By, N.defaults = Jk, N.defaultsDeep = eN, N.defer = uk, N.delay = dk, N.difference = RT, N.differenceBy = MT, N.differenceWith = DT, N.drop = LT, N.dropRight = FT, N.dropRightWhile = $T, N.dropWhile = BT, N.fill = jT, N.filter = zP, N.flatMap = YP, N.flatMapDeep = qP, N.flatMapDepth = VP, N.flatten = Ty, N.flattenDeep = WT, N.flattenDepth = zT, N.flip = fk, N.flow = iI, N.flowRight = sI, N.fromPairs = UT, N.functions = sN, N.functionsIn = lN, N.groupBy = GP, N.initial = YT, N.intersection = qT, N.intersectionBy = VT, N.intersectionWith = GT, N.invert = uN, N.invertBy = dN, N.invokeMap = ZP, N.iteratee = dp, N.keyBy = XP, N.keys = Nn, N.keysIn = rr, N.map = mu, N.mapKeys = pN, N.mapValues = hN, N.matches = lI, N.matchesProperty = cI, N.memoize = vu, N.merge = mN, N.mergeWith = Zy, N.method = uI, N.methodOf = dI, N.mixin = fp, N.negate = yu, N.nthArg = pI, N.omit = gN, N.omitBy = vN, N.once = pk, N.orderBy = QP, N.over = hI, N.overArgs = hk, N.overEvery = mI, N.overSome = gI, N.partial = rp, N.partialRight = jy, N.partition = JP, N.pick = yN, N.pickBy = Xy, N.property = ab, N.propertyOf = vI, N.pull = QT, N.pullAll = ky, N.pullAllBy = JT, N.pullAllWith = eP, N.pullAt = tP, N.range = yI, N.rangeRight = bI, N.rearg = mk, N.reject = nk, N.remove = nP, N.rest = gk, N.reverse = ep, N.sampleSize = ak, N.set = _N, N.setWith = wN, N.shuffle = ok, N.slice = rP, N.sortBy = lk, N.sortedUniq = uP, N.sortedUniqBy = dP, N.split = HN, N.spread = vk, N.tail = fP, N.take = pP, N.takeRight = hP, N.takeRightWhile = mP, N.takeWhile = gP, N.tap = IP, N.throttle = yk, N.thru = hu, N.toArray = Yy, N.toPairs = Qy, N.toPairsIn = Jy, N.toPath = CI, N.toPlainObject = Vy, N.transform = xN, N.unary = bk, N.union = vP, N.unionBy = yP, N.unionWith = bP, N.uniq = _P, N.uniqBy = wP, N.uniqWith = xP, N.unset = EN, N.unzip = tp, N.unzipWith = Ny, N.update = CN, N.updateWith = ON, N.values = as, N.valuesIn = SN, N.without = EP, N.words = nb, N.wrap = _k, N.xor = CP, N.xorBy = OP, N.xorWith = SP, N.zip = TP, N.zipObject = PP, N.zipObjectDeep = kP, N.zipWith = NP, N.entries = Qy, N.entriesIn = Jy, N.extend = Gy, N.extendWith = Ky, fp(N, N), N.add = SI, N.attempt = rb, N.camelCase = NN, N.capitalize = eb, N.ceil = TI, N.clamp = TN, N.clone = xk, N.cloneDeep = Ck, N.cloneDeepWith = Ok, N.cloneWith = Ek, N.conformsTo = Sk, N.deburr = tb, N.defaultTo = oI, N.divide = PI, N.endsWith = IN, N.eq = Qr, N.escape = AN, N.escapeRegExp = RN, N.every = WP, N.find = UP, N.findIndex = Oy, N.findKey = tN, N.findLast = HP, N.findLastIndex = Sy, N.findLastKey = nN, N.floor = kI, N.forEach = Ay, N.forEachRight = Ry, N.forIn = rN, N.forInRight = aN, N.forOwn = oN, N.forOwnRight = iN, N.get = sp, N.gt = Tk, N.gte = Pk, N.has = cN, N.hasIn = lp, N.head = Py, N.identity = ar, N.includes = KP, N.indexOf = HT, N.inRange = PN, N.invoke = fN, N.isArguments = fi, N.isArray = yt, N.isArrayBuffer = kk, N.isArrayLike = nr, N.isArrayLikeObject = vn, N.isBoolean = Nk, N.isBuffer = Eo, N.isDate = Ik, N.isElement = Ak, N.isEmpty = Rk, N.isEqual = Mk, N.isEqualWith = Dk, N.isError = ap, N.isFinite = Lk, N.isFunction = $a, N.isInteger = Wy, N.isLength = bu, N.isMap = zy, N.isMatch = Fk, N.isMatchWith = $k, N.isNaN = Bk, N.isNative = jk, N.isNil = zk, N.isNull = Wk, N.isNumber = Uy, N.isObject = hn, N.isObjectLike = mn, N.isPlainObject = pl, N.isRegExp = op, N.isSafeInteger = Uk, N.isSet = Hy, N.isString = _u, N.isSymbol = yr, N.isTypedArray = rs, N.isUndefined = Hk, N.isWeakMap = Yk, N.isWeakSet = qk, N.join = KT, N.kebabCase = MN, N.last = Rr, N.lastIndexOf = ZT, N.lowerCase = DN, N.lowerFirst = LN, N.lt = Vk, N.lte = Gk, N.max = NI, N.maxBy = II, N.mean = AI, N.meanBy = RI, N.min = MI, N.minBy = DI, N.stubArray = hp, N.stubFalse = mp, N.stubObject = _I, N.stubString = wI, N.stubTrue = xI, N.multiply = LI, N.nth = XT, N.noConflict = fI, N.noop = pp, N.now = gu, N.pad = FN, N.padEnd = $N, N.padStart = BN, N.parseInt = jN, N.random = kN, N.reduce = ek, N.reduceRight = tk, N.repeat = WN, N.replace = zN, N.result = bN, N.round = FI, N.runInContext = X, N.sample = rk, N.size = ik, N.snakeCase = UN, N.some = sk, N.sortedIndex = aP, N.sortedIndexBy = oP, N.sortedIndexOf = iP, N.sortedLastIndex = sP, N.sortedLastIndexBy = lP, N.sortedLastIndexOf = cP, N.startCase = YN, N.startsWith = qN, N.subtract = $I, N.sum = BI, N.sumBy = jI, N.template = VN, N.times = EI, N.toFinite = Ba, N.toInteger = bt, N.toLength = qy, N.toLower = GN, N.toNumber = Mr, N.toSafeInteger = Kk, N.toString = Ut, N.toUpper = KN, N.trim = ZN, N.trimEnd = XN, N.trimStart = QN, N.truncate = JN, N.unescape = eI, N.uniqueId = OI, N.upperCase = tI, N.upperFirst = cp, N.each = Ay, N.eachRight = Ry, N.first = Py, fp(N, function() {
        var a = {};
        return fa(N, function(i, f) {
          zt.call(N.prototype, f) || (a[f] = i);
        }), a;
      }(), { chain: !1 }), N.VERSION = r, mr(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(a) {
        N[a].placeholder = N;
      }), mr(["drop", "take"], function(a, i) {
        At.prototype[a] = function(f) {
          f = f === n ? 1 : En(bt(f), 0);
          var v = this.__filtered__ && !i ? new At(this) : this.clone();
          return v.__filtered__ ? v.__takeCount__ = Bn(f, v.__takeCount__) : v.__views__.push({
            size: Bn(f, se),
            type: a + (v.__dir__ < 0 ? "Right" : "")
          }), v;
        }, At.prototype[a + "Right"] = function(f) {
          return this.reverse()[a](f).reverse();
        };
      }), mr(["filter", "map", "takeWhile"], function(a, i) {
        var f = i + 1, v = f == he || f == Ne;
        At.prototype[a] = function(x) {
          var D = this.clone();
          return D.__iteratees__.push({
            iteratee: ct(x, 3),
            type: f
          }), D.__filtered__ = D.__filtered__ || v, D;
        };
      }), mr(["head", "last"], function(a, i) {
        var f = "take" + (i ? "Right" : "");
        At.prototype[a] = function() {
          return this[f](1).value()[0];
        };
      }), mr(["initial", "tail"], function(a, i) {
        var f = "drop" + (i ? "" : "Right");
        At.prototype[a] = function() {
          return this.__filtered__ ? new At(this) : this[f](1);
        };
      }), At.prototype.compact = function() {
        return this.filter(ar);
      }, At.prototype.find = function(a) {
        return this.filter(a).head();
      }, At.prototype.findLast = function(a) {
        return this.reverse().find(a);
      }, At.prototype.invokeMap = Et(function(a, i) {
        return typeof a == "function" ? new At(this) : this.map(function(f) {
          return sl(f, a, i);
        });
      }), At.prototype.reject = function(a) {
        return this.filter(yu(ct(a)));
      }, At.prototype.slice = function(a, i) {
        a = bt(a);
        var f = this;
        return f.__filtered__ && (a > 0 || i < 0) ? new At(f) : (a < 0 ? f = f.takeRight(-a) : a && (f = f.drop(a)), i !== n && (i = bt(i), f = i < 0 ? f.dropRight(-i) : f.take(i - a)), f);
      }, At.prototype.takeRightWhile = function(a) {
        return this.reverse().takeWhile(a).reverse();
      }, At.prototype.toArray = function() {
        return this.take(se);
      }, fa(At.prototype, function(a, i) {
        var f = /^(?:filter|find|map|reject)|While$/.test(i), v = /^(?:head|last)$/.test(i), x = N[v ? "take" + (i == "last" ? "Right" : "") : i], D = v || /^find/.test(i);
        x && (N.prototype[i] = function() {
          var j = this.__wrapped__, Y = v ? [1] : arguments, J = j instanceof At, xe = Y[0], Ce = J || yt(j), Ae = function(kt) {
            var Dt = x.apply(N, go([kt], Y));
            return v && He ? Dt[0] : Dt;
          };
          Ce && f && typeof xe == "function" && xe.length != 1 && (J = Ce = !1);
          var He = this.__chain__, et = !!this.__actions__.length, ut = D && !He, wt = J && !et;
          if (!D && Ce) {
            j = wt ? j : new At(this);
            var st = a.apply(j, Y);
            return st.__actions__.push({ func: hu, args: [Ae], thisArg: n }), new Nr(st, He);
          }
          return ut && wt ? a.apply(this, Y) : (st = this.thru(Ae), ut ? v ? st.value()[0] : st.value() : st);
        });
      }), mr(["pop", "push", "shift", "sort", "splice", "unshift"], function(a) {
        var i = jc[a], f = /^(?:push|sort|unshift)$/.test(a) ? "tap" : "thru", v = /^(?:pop|shift)$/.test(a);
        N.prototype[a] = function() {
          var x = arguments;
          if (v && !this.__chain__) {
            var D = this.value();
            return i.apply(yt(D) ? D : [], x);
          }
          return this[f](function(j) {
            return i.apply(yt(j) ? j : [], x);
          });
        };
      }), fa(At.prototype, function(a, i) {
        var f = N[i];
        if (f) {
          var v = f.name + "";
          zt.call(Qi, v) || (Qi[v] = []), Qi[v].push({ name: i, func: f });
        }
      }), Qi[su(n, F).name] = [{
        name: "wrapper",
        func: n
      }], At.prototype.clone = tS, At.prototype.reverse = nS, At.prototype.value = rS, N.prototype.at = AP, N.prototype.chain = RP, N.prototype.commit = MP, N.prototype.next = DP, N.prototype.plant = FP, N.prototype.reverse = $P, N.prototype.toJSON = N.prototype.valueOf = N.prototype.value = BP, N.prototype.first = N.prototype.head, el && (N.prototype[el] = LP), N;
    }, Ki = MO();
    ai ? ((ai.exports = Ki)._ = Ki, uf._ = Ki) : Dn._ = Ki;
  }).call(ss);
})(td, td.exports);
var R = td.exports;
//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Mw;
function ze() {
  return Mw.apply(null, arguments);
}
function A4(e) {
  Mw = e;
}
function oa(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function Oi(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function Bt(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Am(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (Bt(e, t))
      return !1;
  return !0;
}
function ir(e) {
  return e === void 0;
}
function eo(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function Oc(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function Dw(e, t) {
  var n = [], r, o = e.length;
  for (r = 0; r < o; ++r)
    n.push(t(e[r], r));
  return n;
}
function ko(e, t) {
  for (var n in t)
    Bt(t, n) && (e[n] = t[n]);
  return Bt(t, "toString") && (e.toString = t.toString), Bt(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function Na(e, t, n, r) {
  return ax(e, t, n, r, !0).utc();
}
function R4() {
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
function _t(e) {
  return e._pf == null && (e._pf = R4()), e._pf;
}
var Oh;
Array.prototype.some ? Oh = Array.prototype.some : Oh = function(e) {
  var t = Object(this), n = t.length >>> 0, r;
  for (r = 0; r < n; r++)
    if (r in t && e.call(this, t[r], r, t))
      return !0;
  return !1;
};
function Rm(e) {
  var t = null, n = !1, r = e._d && !isNaN(e._d.getTime());
  if (r && (t = _t(e), n = Oh.call(t.parsedDateParts, function(o) {
    return o != null;
  }), r = t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n), e._strict && (r = r && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(e))
    e._isValid = r;
  else
    return r;
  return e._isValid;
}
function Md(e) {
  var t = Na(NaN);
  return e != null ? ko(_t(t), e) : _t(t).userInvalidated = !0, t;
}
var S0 = ze.momentProperties = [], Dp = !1;
function Mm(e, t) {
  var n, r, o, s = S0.length;
  if (ir(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), ir(t._i) || (e._i = t._i), ir(t._f) || (e._f = t._f), ir(t._l) || (e._l = t._l), ir(t._strict) || (e._strict = t._strict), ir(t._tzm) || (e._tzm = t._tzm), ir(t._isUTC) || (e._isUTC = t._isUTC), ir(t._offset) || (e._offset = t._offset), ir(t._pf) || (e._pf = _t(t)), ir(t._locale) || (e._locale = t._locale), s > 0)
    for (n = 0; n < s; n++)
      r = S0[n], o = t[r], ir(o) || (e[r] = o);
  return e;
}
function Sc(e) {
  Mm(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), Dp === !1 && (Dp = !0, ze.updateOffset(this), Dp = !1);
}
function ia(e) {
  return e instanceof Sc || e != null && e._isAMomentObject != null;
}
function Lw(e) {
  ze.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function Vr(e, t) {
  var n = !0;
  return ko(function() {
    if (ze.deprecationHandler != null && ze.deprecationHandler(null, e), n) {
      var r = [], o, s, u, c = arguments.length;
      for (s = 0; s < c; s++) {
        if (o = "", typeof arguments[s] == "object") {
          o += `
[` + s + "] ";
          for (u in arguments[0])
            Bt(arguments[0], u) && (o += u + ": " + arguments[0][u] + ", ");
          o = o.slice(0, -2);
        } else
          o = arguments[s];
        r.push(o);
      }
      Lw(
        e + `
Arguments: ` + Array.prototype.slice.call(r).join("") + `
` + new Error().stack
      ), n = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var T0 = {};
function Fw(e, t) {
  ze.deprecationHandler != null && ze.deprecationHandler(e, t), T0[e] || (Lw(t), T0[e] = !0);
}
ze.suppressDeprecationWarnings = !1;
ze.deprecationHandler = null;
function Ia(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function M4(e) {
  var t, n;
  for (n in e)
    Bt(e, n) && (t = e[n], Ia(t) ? this[n] = t : this["_" + n] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function Sh(e, t) {
  var n = ko({}, e), r;
  for (r in t)
    Bt(t, r) && (Oi(e[r]) && Oi(t[r]) ? (n[r] = {}, ko(n[r], e[r]), ko(n[r], t[r])) : t[r] != null ? n[r] = t[r] : delete n[r]);
  for (r in e)
    Bt(e, r) && !Bt(t, r) && Oi(e[r]) && (n[r] = ko({}, n[r]));
  return n;
}
function Dm(e) {
  e != null && this.set(e);
}
var Th;
Object.keys ? Th = Object.keys : Th = function(e) {
  var t, n = [];
  for (t in e)
    Bt(e, t) && n.push(t);
  return n;
};
var D4 = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function L4(e, t, n) {
  var r = this._calendar[e] || this._calendar.sameElse;
  return Ia(r) ? r.call(t, n) : r;
}
function Pa(e, t, n) {
  var r = "" + Math.abs(e), o = t - r.length, s = e >= 0;
  return (s ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, o)).toString().substr(1) + r;
}
var Lm = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Ou = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Lp = {}, gs = {};
function ot(e, t, n, r) {
  var o = r;
  typeof r == "string" && (o = function() {
    return this[r]();
  }), e && (gs[e] = o), t && (gs[t[0]] = function() {
    return Pa(o.apply(this, arguments), t[1], t[2]);
  }), n && (gs[n] = function() {
    return this.localeData().ordinal(
      o.apply(this, arguments),
      e
    );
  });
}
function F4(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function $4(e) {
  var t = e.match(Lm), n, r;
  for (n = 0, r = t.length; n < r; n++)
    gs[t[n]] ? t[n] = gs[t[n]] : t[n] = F4(t[n]);
  return function(o) {
    var s = "", u;
    for (u = 0; u < r; u++)
      s += Ia(t[u]) ? t[u].call(o, e) : t[u];
    return s;
  };
}
function Fu(e, t) {
  return e.isValid() ? (t = $w(t, e.localeData()), Lp[t] = Lp[t] || $4(t), Lp[t](e)) : e.localeData().invalidDate();
}
function $w(e, t) {
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
var B4 = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function j4(e) {
  var t = this._longDateFormat[e], n = this._longDateFormat[e.toUpperCase()];
  return t || !n ? t : (this._longDateFormat[e] = n.match(Lm).map(function(r) {
    return r === "MMMM" || r === "MM" || r === "DD" || r === "dddd" ? r.slice(1) : r;
  }).join(""), this._longDateFormat[e]);
}
var W4 = "Invalid date";
function z4() {
  return this._invalidDate;
}
var U4 = "%d", H4 = /\d{1,2}/;
function Y4(e) {
  return this._ordinal.replace("%d", e);
}
var q4 = {
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
function V4(e, t, n, r) {
  var o = this._relativeTime[n];
  return Ia(o) ? o(e, t, n, r) : o.replace(/%d/i, e);
}
function G4(e, t) {
  var n = this._relativeTime[e > 0 ? "future" : "past"];
  return Ia(n) ? n(t) : n.replace(/%s/i, t);
}
var P0 = {
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
function Gr(e) {
  return typeof e == "string" ? P0[e] || P0[e.toLowerCase()] : void 0;
}
function Fm(e) {
  var t = {}, n, r;
  for (r in e)
    Bt(e, r) && (n = Gr(r), n && (t[n] = e[r]));
  return t;
}
var K4 = {
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
function Z4(e) {
  var t = [], n;
  for (n in e)
    Bt(e, n) && t.push({ unit: n, priority: K4[n] });
  return t.sort(function(r, o) {
    return r.priority - o.priority;
  }), t;
}
var Bw = /\d/, Or = /\d\d/, jw = /\d{3}/, $m = /\d{4}/, Dd = /[+-]?\d{6}/, un = /\d\d?/, Ww = /\d\d\d\d?/, zw = /\d\d\d\d\d\d?/, Ld = /\d{1,3}/, Bm = /\d{1,4}/, Fd = /[+-]?\d{1,6}/, Gs = /\d+/, $d = /[+-]?\d+/, X4 = /Z|[+-]\d\d:?\d\d/gi, Bd = /Z|[+-]\d\d(?::?\d\d)?/gi, Q4 = /[+-]?\d+(\.\d{1,3})?/, Tc = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, Ks = /^[1-9]\d?/, jm = /^([1-9]\d|\d)/, nd;
nd = {};
function Ge(e, t, n) {
  nd[e] = Ia(t) ? t : function(r, o) {
    return r && n ? n : t;
  };
}
function J4(e, t) {
  return Bt(nd, e) ? nd[e](t._strict, t._locale) : new RegExp(ej(e));
}
function ej(e) {
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
function Fr(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function Rt(e) {
  var t = +e, n = 0;
  return t !== 0 && isFinite(t) && (n = Fr(t)), n;
}
var Ph = {};
function Jt(e, t) {
  var n, r = t, o;
  for (typeof e == "string" && (e = [e]), eo(t) && (r = function(s, u) {
    u[t] = Rt(s);
  }), o = e.length, n = 0; n < o; n++)
    Ph[e[n]] = r;
}
function Pc(e, t) {
  Jt(e, function(n, r, o, s) {
    o._w = o._w || {}, t(n, o._w, o, s);
  });
}
function tj(e, t, n) {
  t != null && Bt(Ph, e) && Ph[e](t, n._a, n, e);
}
function jd(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
var zn = 0, qa = 1, ya = 2, Tn = 3, na = 4, Va = 5, _i = 6, nj = 7, rj = 8;
ot("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? Pa(e, 4) : "+" + e;
});
ot(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
ot(0, ["YYYY", 4], 0, "year");
ot(0, ["YYYYY", 5], 0, "year");
ot(0, ["YYYYYY", 6, !0], 0, "year");
Ge("Y", $d);
Ge("YY", un, Or);
Ge("YYYY", Bm, $m);
Ge("YYYYY", Fd, Dd);
Ge("YYYYYY", Fd, Dd);
Jt(["YYYYY", "YYYYYY"], zn);
Jt("YYYY", function(e, t) {
  t[zn] = e.length === 2 ? ze.parseTwoDigitYear(e) : Rt(e);
});
Jt("YY", function(e, t) {
  t[zn] = ze.parseTwoDigitYear(e);
});
Jt("Y", function(e, t) {
  t[zn] = parseInt(e, 10);
});
function Dl(e) {
  return jd(e) ? 366 : 365;
}
ze.parseTwoDigitYear = function(e) {
  return Rt(e) + (Rt(e) > 68 ? 1900 : 2e3);
};
var Uw = Zs("FullYear", !0);
function aj() {
  return jd(this.year());
}
function Zs(e, t) {
  return function(n) {
    return n != null ? (Hw(this, e, n), ze.updateOffset(this, t), this) : lc(this, e);
  };
}
function lc(e, t) {
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
function Hw(e, t, n) {
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
function oj(e) {
  return e = Gr(e), Ia(this[e]) ? this[e]() : this;
}
function ij(e, t) {
  if (typeof e == "object") {
    e = Fm(e);
    var n = Z4(e), r, o = n.length;
    for (r = 0; r < o; r++)
      this[n[r].unit](e[n[r].unit]);
  } else if (e = Gr(e), Ia(this[e]))
    return this[e](t);
  return this;
}
function sj(e, t) {
  return (e % t + t) % t;
}
var bn;
Array.prototype.indexOf ? bn = Array.prototype.indexOf : bn = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function Wm(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var n = sj(t, 12);
  return e += (t - n) / 12, n === 1 ? jd(e) ? 29 : 28 : 31 - n % 7 % 2;
}
ot("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
ot("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
ot("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
Ge("M", un, Ks);
Ge("MM", un, Or);
Ge("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
Ge("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
Jt(["M", "MM"], function(e, t) {
  t[qa] = Rt(e) - 1;
});
Jt(["MMM", "MMMM"], function(e, t, n, r) {
  var o = n._locale.monthsParse(e, r, n._strict);
  o != null ? t[qa] = o : _t(n).invalidMonth = e;
});
var lj = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), Yw = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), qw = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, cj = Tc, uj = Tc;
function dj(e, t) {
  return e ? oa(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || qw).test(t) ? "format" : "standalone"][e.month()] : oa(this._months) ? this._months : this._months.standalone;
}
function fj(e, t) {
  return e ? oa(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[qw.test(t) ? "format" : "standalone"][e.month()] : oa(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function pj(e, t, n) {
  var r, o, s, u = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r)
      s = Na([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(
        s,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[r] = this.months(s, "").toLocaleLowerCase();
  return n ? t === "MMM" ? (o = bn.call(this._shortMonthsParse, u), o !== -1 ? o : null) : (o = bn.call(this._longMonthsParse, u), o !== -1 ? o : null) : t === "MMM" ? (o = bn.call(this._shortMonthsParse, u), o !== -1 ? o : (o = bn.call(this._longMonthsParse, u), o !== -1 ? o : null)) : (o = bn.call(this._longMonthsParse, u), o !== -1 ? o : (o = bn.call(this._shortMonthsParse, u), o !== -1 ? o : null));
}
function hj(e, t, n) {
  var r, o, s;
  if (this._monthsParseExact)
    return pj.call(this, e, t, n);
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
      t = Rt(t);
    else if (t = e.localeData().monthsParse(t), !eo(t))
      return e;
  }
  var n = t, r = e.date();
  return r = r < 29 ? r : Math.min(r, Wm(e.year(), n)), e._isUTC ? e._d.setUTCMonth(n, r) : e._d.setMonth(n, r), e;
}
function Gw(e) {
  return e != null ? (Vw(this, e), ze.updateOffset(this, !0), this) : lc(this, "Month");
}
function mj() {
  return Wm(this.year(), this.month());
}
function gj(e) {
  return this._monthsParseExact ? (Bt(this, "_monthsRegex") || Kw.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (Bt(this, "_monthsShortRegex") || (this._monthsShortRegex = cj), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function vj(e) {
  return this._monthsParseExact ? (Bt(this, "_monthsRegex") || Kw.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (Bt(this, "_monthsRegex") || (this._monthsRegex = uj), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function Kw() {
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
function yj(e, t, n, r, o, s, u) {
  var c;
  return e < 100 && e >= 0 ? (c = new Date(e + 400, t, n, r, o, s, u), isFinite(c.getFullYear()) && c.setFullYear(e)) : c = new Date(e, t, n, r, o, s, u), c;
}
function cc(e) {
  var t, n;
  return e < 100 && e >= 0 ? (n = Array.prototype.slice.call(arguments), n[0] = e + 400, t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function rd(e, t, n) {
  var r = 7 + t - n, o = (7 + cc(e, 0, r).getUTCDay() - t) % 7;
  return -o + r - 1;
}
function Zw(e, t, n, r, o) {
  var s = (7 + n - r) % 7, u = rd(e, r, o), c = 1 + 7 * (t - 1) + s + u, d, p;
  return c <= 0 ? (d = e - 1, p = Dl(d) + c) : c > Dl(e) ? (d = e + 1, p = c - Dl(e)) : (d = e, p = c), {
    year: d,
    dayOfYear: p
  };
}
function uc(e, t, n) {
  var r = rd(e.year(), t, n), o = Math.floor((e.dayOfYear() - r - 1) / 7) + 1, s, u;
  return o < 1 ? (u = e.year() - 1, s = o + Za(u, t, n)) : o > Za(e.year(), t, n) ? (s = o - Za(e.year(), t, n), u = e.year() + 1) : (u = e.year(), s = o), {
    week: s,
    year: u
  };
}
function Za(e, t, n) {
  var r = rd(e, t, n), o = rd(e + 1, t, n);
  return (Dl(e) - r + o) / 7;
}
ot("w", ["ww", 2], "wo", "week");
ot("W", ["WW", 2], "Wo", "isoWeek");
Ge("w", un, Ks);
Ge("ww", un, Or);
Ge("W", un, Ks);
Ge("WW", un, Or);
Pc(
  ["w", "ww", "W", "WW"],
  function(e, t, n, r) {
    t[r.substr(0, 1)] = Rt(e);
  }
);
function bj(e) {
  return uc(e, this._week.dow, this._week.doy).week;
}
var _j = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function wj() {
  return this._week.dow;
}
function xj() {
  return this._week.doy;
}
function Ej(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function Cj(e) {
  var t = uc(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
ot("d", 0, "do", "day");
ot("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
ot("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
ot("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
ot("e", 0, 0, "weekday");
ot("E", 0, 0, "isoWeekday");
Ge("d", un);
Ge("e", un);
Ge("E", un);
Ge("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
Ge("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
Ge("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
Pc(["dd", "ddd", "dddd"], function(e, t, n, r) {
  var o = n._locale.weekdaysParse(e, r, n._strict);
  o != null ? t.d = o : _t(n).invalidWeekday = e;
});
Pc(["d", "e", "E"], function(e, t, n, r) {
  t[r] = Rt(e);
});
function Oj(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function Sj(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function zm(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var Tj = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Xw = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Pj = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), kj = Tc, Nj = Tc, Ij = Tc;
function Aj(e, t) {
  var n = oa(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? zm(n, this._week.dow) : e ? n[e.day()] : n;
}
function Rj(e) {
  return e === !0 ? zm(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function Mj(e) {
  return e === !0 ? zm(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function Dj(e, t, n) {
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
  return n ? t === "dddd" ? (o = bn.call(this._weekdaysParse, u), o !== -1 ? o : null) : t === "ddd" ? (o = bn.call(this._shortWeekdaysParse, u), o !== -1 ? o : null) : (o = bn.call(this._minWeekdaysParse, u), o !== -1 ? o : null) : t === "dddd" ? (o = bn.call(this._weekdaysParse, u), o !== -1 || (o = bn.call(this._shortWeekdaysParse, u), o !== -1) ? o : (o = bn.call(this._minWeekdaysParse, u), o !== -1 ? o : null)) : t === "ddd" ? (o = bn.call(this._shortWeekdaysParse, u), o !== -1 || (o = bn.call(this._weekdaysParse, u), o !== -1) ? o : (o = bn.call(this._minWeekdaysParse, u), o !== -1 ? o : null)) : (o = bn.call(this._minWeekdaysParse, u), o !== -1 || (o = bn.call(this._weekdaysParse, u), o !== -1) ? o : (o = bn.call(this._shortWeekdaysParse, u), o !== -1 ? o : null));
}
function Lj(e, t, n) {
  var r, o, s;
  if (this._weekdaysParseExact)
    return Dj.call(this, e, t, n);
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
function Fj(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = lc(this, "Day");
  return e != null ? (e = Oj(e, this.localeData()), this.add(e - t, "d")) : t;
}
function $j(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function Bj(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = Sj(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function jj(e) {
  return this._weekdaysParseExact ? (Bt(this, "_weekdaysRegex") || Um.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (Bt(this, "_weekdaysRegex") || (this._weekdaysRegex = kj), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function Wj(e) {
  return this._weekdaysParseExact ? (Bt(this, "_weekdaysRegex") || Um.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (Bt(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Nj), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function zj(e) {
  return this._weekdaysParseExact ? (Bt(this, "_weekdaysRegex") || Um.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (Bt(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ij), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function Um() {
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
function Hm() {
  return this.hours() % 12 || 12;
}
function Uj() {
  return this.hours() || 24;
}
ot("H", ["HH", 2], 0, "hour");
ot("h", ["hh", 2], 0, Hm);
ot("k", ["kk", 2], 0, Uj);
ot("hmm", 0, 0, function() {
  return "" + Hm.apply(this) + Pa(this.minutes(), 2);
});
ot("hmmss", 0, 0, function() {
  return "" + Hm.apply(this) + Pa(this.minutes(), 2) + Pa(this.seconds(), 2);
});
ot("Hmm", 0, 0, function() {
  return "" + this.hours() + Pa(this.minutes(), 2);
});
ot("Hmmss", 0, 0, function() {
  return "" + this.hours() + Pa(this.minutes(), 2) + Pa(this.seconds(), 2);
});
function Qw(e, t) {
  ot(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
Qw("a", !0);
Qw("A", !1);
function Jw(e, t) {
  return t._meridiemParse;
}
Ge("a", Jw);
Ge("A", Jw);
Ge("H", un, jm);
Ge("h", un, Ks);
Ge("k", un, Ks);
Ge("HH", un, Or);
Ge("hh", un, Or);
Ge("kk", un, Or);
Ge("hmm", Ww);
Ge("hmmss", zw);
Ge("Hmm", Ww);
Ge("Hmmss", zw);
Jt(["H", "HH"], Tn);
Jt(["k", "kk"], function(e, t, n) {
  var r = Rt(e);
  t[Tn] = r === 24 ? 0 : r;
});
Jt(["a", "A"], function(e, t, n) {
  n._isPm = n._locale.isPM(e), n._meridiem = e;
});
Jt(["h", "hh"], function(e, t, n) {
  t[Tn] = Rt(e), _t(n).bigHour = !0;
});
Jt("hmm", function(e, t, n) {
  var r = e.length - 2;
  t[Tn] = Rt(e.substr(0, r)), t[na] = Rt(e.substr(r)), _t(n).bigHour = !0;
});
Jt("hmmss", function(e, t, n) {
  var r = e.length - 4, o = e.length - 2;
  t[Tn] = Rt(e.substr(0, r)), t[na] = Rt(e.substr(r, 2)), t[Va] = Rt(e.substr(o)), _t(n).bigHour = !0;
});
Jt("Hmm", function(e, t, n) {
  var r = e.length - 2;
  t[Tn] = Rt(e.substr(0, r)), t[na] = Rt(e.substr(r));
});
Jt("Hmmss", function(e, t, n) {
  var r = e.length - 4, o = e.length - 2;
  t[Tn] = Rt(e.substr(0, r)), t[na] = Rt(e.substr(r, 2)), t[Va] = Rt(e.substr(o));
});
function Hj(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var Yj = /[ap]\.?m?\.?/i, qj = Zs("Hours", !0);
function Vj(e, t, n) {
  return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM";
}
var ex = {
  calendar: D4,
  longDateFormat: B4,
  invalidDate: W4,
  ordinal: U4,
  dayOfMonthOrdinalParse: H4,
  relativeTime: q4,
  months: lj,
  monthsShort: Yw,
  week: _j,
  weekdays: Tj,
  weekdaysMin: Pj,
  weekdaysShort: Xw,
  meridiemParse: Yj
}, fn = {}, _l = {}, dc;
function Gj(e, t) {
  var n, r = Math.min(e.length, t.length);
  for (n = 0; n < r; n += 1)
    if (e[n] !== t[n])
      return n;
  return r;
}
function k0(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function Kj(e) {
  for (var t = 0, n, r, o, s; t < e.length; ) {
    for (s = k0(e[t]).split("-"), n = s.length, r = k0(e[t + 1]), r = r ? r.split("-") : null; n > 0; ) {
      if (o = Wd(s.slice(0, n).join("-")), o)
        return o;
      if (r && r.length >= n && Gj(s, r) >= n - 1)
        break;
      n--;
    }
    t++;
  }
  return dc;
}
function Zj(e) {
  return !!(e && e.match("^[^/\\\\]*$"));
}
function Wd(e) {
  var t = null, n;
  if (fn[e] === void 0 && typeof module < "u" && module && module.exports && Zj(e))
    try {
      t = dc._abbr, n = require, n("./locale/" + e), Ao(t);
    } catch {
      fn[e] = null;
    }
  return fn[e];
}
function Ao(e, t) {
  var n;
  return e && (ir(t) ? n = lo(e) : n = Ym(e, t), n ? dc = n : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), dc._abbr;
}
function Ym(e, t) {
  if (t !== null) {
    var n, r = ex;
    if (t.abbr = e, fn[e] != null)
      Fw(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), r = fn[e]._config;
    else if (t.parentLocale != null)
      if (fn[t.parentLocale] != null)
        r = fn[t.parentLocale]._config;
      else if (n = Wd(t.parentLocale), n != null)
        r = n._config;
      else
        return _l[t.parentLocale] || (_l[t.parentLocale] = []), _l[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return fn[e] = new Dm(Sh(r, t)), _l[e] && _l[e].forEach(function(o) {
      Ym(o.name, o.config);
    }), Ao(e), fn[e];
  } else
    return delete fn[e], null;
}
function Xj(e, t) {
  if (t != null) {
    var n, r, o = ex;
    fn[e] != null && fn[e].parentLocale != null ? fn[e].set(Sh(fn[e]._config, t)) : (r = Wd(e), r != null && (o = r._config), t = Sh(o, t), r == null && (t.abbr = e), n = new Dm(t), n.parentLocale = fn[e], fn[e] = n), Ao(e);
  } else
    fn[e] != null && (fn[e].parentLocale != null ? (fn[e] = fn[e].parentLocale, e === Ao() && Ao(e)) : fn[e] != null && delete fn[e]);
  return fn[e];
}
function lo(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return dc;
  if (!oa(e)) {
    if (t = Wd(e), t)
      return t;
    e = [e];
  }
  return Kj(e);
}
function Qj() {
  return Th(fn);
}
function qm(e) {
  var t, n = e._a;
  return n && _t(e).overflow === -2 && (t = n[qa] < 0 || n[qa] > 11 ? qa : n[ya] < 1 || n[ya] > Wm(n[zn], n[qa]) ? ya : n[Tn] < 0 || n[Tn] > 24 || n[Tn] === 24 && (n[na] !== 0 || n[Va] !== 0 || n[_i] !== 0) ? Tn : n[na] < 0 || n[na] > 59 ? na : n[Va] < 0 || n[Va] > 59 ? Va : n[_i] < 0 || n[_i] > 999 ? _i : -1, _t(e)._overflowDayOfYear && (t < zn || t > ya) && (t = ya), _t(e)._overflowWeeks && t === -1 && (t = nj), _t(e)._overflowWeekday && t === -1 && (t = rj), _t(e).overflow = t), e;
}
var Jj = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, e6 = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, t6 = /Z|[+-]\d\d(?::?\d\d)?/, Su = [
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
], Fp = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], n6 = /^\/?Date\((-?\d+)/i, r6 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, a6 = {
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
function tx(e) {
  var t, n, r = e._i, o = Jj.exec(r) || e6.exec(r), s, u, c, d, p = Su.length, h = Fp.length;
  if (o) {
    for (_t(e).iso = !0, t = 0, n = p; t < n; t++)
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
        if (Fp[t][1].exec(o[3])) {
          c = (o[2] || " ") + Fp[t][0];
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
      if (t6.exec(o[4]))
        d = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = u + (c || "") + (d || ""), Gm(e);
  } else
    e._isValid = !1;
}
function o6(e, t, n, r, o, s) {
  var u = [
    i6(e),
    Yw.indexOf(t),
    parseInt(n, 10),
    parseInt(r, 10),
    parseInt(o, 10)
  ];
  return s && u.push(parseInt(s, 10)), u;
}
function i6(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function s6(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function l6(e, t, n) {
  if (e) {
    var r = Xw.indexOf(e), o = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (r !== o)
      return _t(n).weekdayMismatch = !0, n._isValid = !1, !1;
  }
  return !0;
}
function c6(e, t, n) {
  if (e)
    return a6[e];
  if (t)
    return 0;
  var r = parseInt(n, 10), o = r % 100, s = (r - o) / 100;
  return s * 60 + o;
}
function nx(e) {
  var t = r6.exec(s6(e._i)), n;
  if (t) {
    if (n = o6(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !l6(t[1], n, e))
      return;
    e._a = n, e._tzm = c6(t[8], t[9], t[10]), e._d = cc.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), _t(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function u6(e) {
  var t = n6.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (tx(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (nx(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : ze.createFromInputFallback(e);
}
ze.createFromInputFallback = Vr(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function cs(e, t, n) {
  return e ?? t ?? n;
}
function d6(e) {
  var t = new Date(ze.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function Vm(e) {
  var t, n, r = [], o, s, u;
  if (!e._d) {
    for (o = d6(e), e._w && e._a[ya] == null && e._a[qa] == null && f6(e), e._dayOfYear != null && (u = cs(e._a[zn], o[zn]), (e._dayOfYear > Dl(u) || e._dayOfYear === 0) && (_t(e)._overflowDayOfYear = !0), n = cc(u, 0, e._dayOfYear), e._a[qa] = n.getUTCMonth(), e._a[ya] = n.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = r[t] = o[t];
    for (; t < 7; t++)
      e._a[t] = r[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[Tn] === 24 && e._a[na] === 0 && e._a[Va] === 0 && e._a[_i] === 0 && (e._nextDay = !0, e._a[Tn] = 0), e._d = (e._useUTC ? cc : yj).apply(
      null,
      r
    ), s = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[Tn] = 24), e._w && typeof e._w.d < "u" && e._w.d !== s && (_t(e).weekdayMismatch = !0);
  }
}
function f6(e) {
  var t, n, r, o, s, u, c, d, p;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (s = 1, u = 4, n = cs(
    t.GG,
    e._a[zn],
    uc(cn(), 1, 4).year
  ), r = cs(t.W, 1), o = cs(t.E, 1), (o < 1 || o > 7) && (d = !0)) : (s = e._locale._week.dow, u = e._locale._week.doy, p = uc(cn(), s, u), n = cs(t.gg, e._a[zn], p.year), r = cs(t.w, p.week), t.d != null ? (o = t.d, (o < 0 || o > 6) && (d = !0)) : t.e != null ? (o = t.e + s, (t.e < 0 || t.e > 6) && (d = !0)) : o = s), r < 1 || r > Za(n, s, u) ? _t(e)._overflowWeeks = !0 : d != null ? _t(e)._overflowWeekday = !0 : (c = Zw(n, r, o, s, u), e._a[zn] = c.year, e._dayOfYear = c.dayOfYear);
}
ze.ISO_8601 = function() {
};
ze.RFC_2822 = function() {
};
function Gm(e) {
  if (e._f === ze.ISO_8601) {
    tx(e);
    return;
  }
  if (e._f === ze.RFC_2822) {
    nx(e);
    return;
  }
  e._a = [], _t(e).empty = !0;
  var t = "" + e._i, n, r, o, s, u, c = t.length, d = 0, p, h;
  for (o = $w(e._f, e._locale).match(Lm) || [], h = o.length, n = 0; n < h; n++)
    s = o[n], r = (t.match(J4(s, e)) || [])[0], r && (u = t.substr(0, t.indexOf(r)), u.length > 0 && _t(e).unusedInput.push(u), t = t.slice(
      t.indexOf(r) + r.length
    ), d += r.length), gs[s] ? (r ? _t(e).empty = !1 : _t(e).unusedTokens.push(s), tj(s, r, e)) : e._strict && !r && _t(e).unusedTokens.push(s);
  _t(e).charsLeftOver = c - d, t.length > 0 && _t(e).unusedInput.push(t), e._a[Tn] <= 12 && _t(e).bigHour === !0 && e._a[Tn] > 0 && (_t(e).bigHour = void 0), _t(e).parsedDateParts = e._a.slice(0), _t(e).meridiem = e._meridiem, e._a[Tn] = p6(
    e._locale,
    e._a[Tn],
    e._meridiem
  ), p = _t(e).era, p !== null && (e._a[zn] = e._locale.erasConvertYear(p, e._a[zn])), Vm(e), qm(e);
}
function p6(e, t, n) {
  var r;
  return n == null ? t : e.meridiemHour != null ? e.meridiemHour(t, n) : (e.isPM != null && (r = e.isPM(n), r && t < 12 && (t += 12), !r && t === 12 && (t = 0)), t);
}
function h6(e) {
  var t, n, r, o, s, u, c = !1, d = e._f.length;
  if (d === 0) {
    _t(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (o = 0; o < d; o++)
    s = 0, u = !1, t = Mm({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[o], Gm(t), Rm(t) && (u = !0), s += _t(t).charsLeftOver, s += _t(t).unusedTokens.length * 10, _t(t).score = s, c ? s < r && (r = s, n = t) : (r == null || s < r || u) && (r = s, n = t, u && (c = !0));
  ko(e, n || t);
}
function m6(e) {
  if (!e._d) {
    var t = Fm(e._i), n = t.day === void 0 ? t.date : t.day;
    e._a = Dw(
      [t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond],
      function(r) {
        return r && parseInt(r, 10);
      }
    ), Vm(e);
  }
}
function g6(e) {
  var t = new Sc(qm(rx(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function rx(e) {
  var t = e._i, n = e._f;
  return e._locale = e._locale || lo(e._l), t === null || n === void 0 && t === "" ? Md({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), ia(t) ? new Sc(qm(t)) : (Oc(t) ? e._d = t : oa(n) ? h6(e) : n ? Gm(e) : v6(e), Rm(e) || (e._d = null), e));
}
function v6(e) {
  var t = e._i;
  ir(t) ? e._d = new Date(ze.now()) : Oc(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? u6(e) : oa(t) ? (e._a = Dw(t.slice(0), function(n) {
    return parseInt(n, 10);
  }), Vm(e)) : Oi(t) ? m6(e) : eo(t) ? e._d = new Date(t) : ze.createFromInputFallback(e);
}
function ax(e, t, n, r, o) {
  var s = {};
  return (t === !0 || t === !1) && (r = t, t = void 0), (n === !0 || n === !1) && (r = n, n = void 0), (Oi(e) && Am(e) || oa(e) && e.length === 0) && (e = void 0), s._isAMomentObject = !0, s._useUTC = s._isUTC = o, s._l = n, s._i = e, s._f = t, s._strict = r, g6(s);
}
function cn(e, t, n, r) {
  return ax(e, t, n, r, !1);
}
var y6 = Vr(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = cn.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : Md();
  }
), b6 = Vr(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = cn.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : Md();
  }
);
function ox(e, t) {
  var n, r;
  if (t.length === 1 && oa(t[0]) && (t = t[0]), !t.length)
    return cn();
  for (n = t[0], r = 1; r < t.length; ++r)
    (!t[r].isValid() || t[r][e](n)) && (n = t[r]);
  return n;
}
function _6() {
  var e = [].slice.call(arguments, 0);
  return ox("isBefore", e);
}
function w6() {
  var e = [].slice.call(arguments, 0);
  return ox("isAfter", e);
}
var x6 = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, wl = [
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
function E6(e) {
  var t, n = !1, r, o = wl.length;
  for (t in e)
    if (Bt(e, t) && !(bn.call(wl, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (r = 0; r < o; ++r)
    if (e[wl[r]]) {
      if (n)
        return !1;
      parseFloat(e[wl[r]]) !== Rt(e[wl[r]]) && (n = !0);
    }
  return !0;
}
function C6() {
  return this._isValid;
}
function O6() {
  return ca(NaN);
}
function zd(e) {
  var t = Fm(e), n = t.year || 0, r = t.quarter || 0, o = t.month || 0, s = t.week || t.isoWeek || 0, u = t.day || 0, c = t.hour || 0, d = t.minute || 0, p = t.second || 0, h = t.millisecond || 0;
  this._isValid = E6(t), this._milliseconds = +h + p * 1e3 + // 1000
  d * 6e4 + // 1000 * 60
  c * 1e3 * 60 * 60, this._days = +u + s * 7, this._months = +o + r * 3 + n * 12, this._data = {}, this._locale = lo(), this._bubble();
}
function $u(e) {
  return e instanceof zd;
}
function kh(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function S6(e, t, n) {
  var r = Math.min(e.length, t.length), o = Math.abs(e.length - t.length), s = 0, u;
  for (u = 0; u < r; u++)
    Rt(e[u]) !== Rt(t[u]) && s++;
  return s + o;
}
function ix(e, t) {
  ot(e, 0, 0, function() {
    var n = this.utcOffset(), r = "+";
    return n < 0 && (n = -n, r = "-"), r + Pa(~~(n / 60), 2) + t + Pa(~~n % 60, 2);
  });
}
ix("Z", ":");
ix("ZZ", "");
Ge("Z", Bd);
Ge("ZZ", Bd);
Jt(["Z", "ZZ"], function(e, t, n) {
  n._useUTC = !0, n._tzm = Km(Bd, e);
});
var T6 = /([\+\-]|\d\d)/gi;
function Km(e, t) {
  var n = (t || "").match(e), r, o, s;
  return n === null ? null : (r = n[n.length - 1] || [], o = (r + "").match(T6) || ["-", 0, 0], s = +(o[1] * 60) + Rt(o[2]), s === 0 ? 0 : o[0] === "+" ? s : -s);
}
function Zm(e, t) {
  var n, r;
  return t._isUTC ? (n = t.clone(), r = (ia(e) || Oc(e) ? e.valueOf() : cn(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + r), ze.updateOffset(n, !1), n) : cn(e).local();
}
function Nh(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
ze.updateOffset = function() {
};
function P6(e, t, n) {
  var r = this._offset || 0, o;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = Km(Bd, e), e === null)
        return this;
    } else Math.abs(e) < 16 && !n && (e = e * 60);
    return !this._isUTC && t && (o = Nh(this)), this._offset = e, this._isUTC = !0, o != null && this.add(o, "m"), r !== e && (!t || this._changeInProgress ? cx(
      this,
      ca(e - r, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, ze.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? r : Nh(this);
}
function k6(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function N6(e) {
  return this.utcOffset(0, e);
}
function I6(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Nh(this), "m")), this;
}
function A6() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = Km(X4, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function R6(e) {
  return this.isValid() ? (e = e ? cn(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function M6() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function D6() {
  if (!ir(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return Mm(e, this), e = rx(e), e._a ? (t = e._isUTC ? Na(e._a) : cn(e._a), this._isDSTShifted = this.isValid() && S6(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function L6() {
  return this.isValid() ? !this._isUTC : !1;
}
function F6() {
  return this.isValid() ? this._isUTC : !1;
}
function sx() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var $6 = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, B6 = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function ca(e, t) {
  var n = e, r = null, o, s, u;
  return $u(e) ? n = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : eo(e) || !isNaN(+e) ? (n = {}, t ? n[t] = +e : n.milliseconds = +e) : (r = $6.exec(e)) ? (o = r[1] === "-" ? -1 : 1, n = {
    y: 0,
    d: Rt(r[ya]) * o,
    h: Rt(r[Tn]) * o,
    m: Rt(r[na]) * o,
    s: Rt(r[Va]) * o,
    ms: Rt(kh(r[_i] * 1e3)) * o
    // the millisecond decimal point is included in the match
  }) : (r = B6.exec(e)) ? (o = r[1] === "-" ? -1 : 1, n = {
    y: pi(r[2], o),
    M: pi(r[3], o),
    w: pi(r[4], o),
    d: pi(r[5], o),
    h: pi(r[6], o),
    m: pi(r[7], o),
    s: pi(r[8], o)
  }) : n == null ? n = {} : typeof n == "object" && ("from" in n || "to" in n) && (u = j6(
    cn(n.from),
    cn(n.to)
  ), n = {}, n.ms = u.milliseconds, n.M = u.months), s = new zd(n), $u(e) && Bt(e, "_locale") && (s._locale = e._locale), $u(e) && Bt(e, "_isValid") && (s._isValid = e._isValid), s;
}
ca.fn = zd.prototype;
ca.invalid = O6;
function pi(e, t) {
  var n = e && parseFloat(e.replace(",", "."));
  return (isNaN(n) ? 0 : n) * t;
}
function N0(e, t) {
  var n = {};
  return n.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n;
}
function j6(e, t) {
  var n;
  return e.isValid() && t.isValid() ? (t = Zm(t, e), e.isBefore(t) ? n = N0(e, t) : (n = N0(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : { milliseconds: 0, months: 0 };
}
function lx(e, t) {
  return function(n, r) {
    var o, s;
    return r !== null && !isNaN(+r) && (Fw(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), s = n, n = r, r = s), o = ca(n, r), cx(this, o, e), this;
  };
}
function cx(e, t, n, r) {
  var o = t._milliseconds, s = kh(t._days), u = kh(t._months);
  e.isValid() && (r = r ?? !0, u && Vw(e, lc(e, "Month") + u * n), s && Hw(e, "Date", lc(e, "Date") + s * n), o && e._d.setTime(e._d.valueOf() + o * n), r && ze.updateOffset(e, s || u));
}
var W6 = lx(1, "add"), z6 = lx(-1, "subtract");
function ux(e) {
  return typeof e == "string" || e instanceof String;
}
function U6(e) {
  return ia(e) || Oc(e) || ux(e) || eo(e) || Y6(e) || H6(e) || e === null || e === void 0;
}
function H6(e) {
  var t = Oi(e) && !Am(e), n = !1, r = [
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
    s = r[o], n = n || Bt(e, s);
  return t && n;
}
function Y6(e) {
  var t = oa(e), n = !1;
  return t && (n = e.filter(function(r) {
    return !eo(r) && ux(e);
  }).length === 0), t && n;
}
function q6(e) {
  var t = Oi(e) && !Am(e), n = !1, r = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], o, s;
  for (o = 0; o < r.length; o += 1)
    s = r[o], n = n || Bt(e, s);
  return t && n;
}
function V6(e, t) {
  var n = e.diff(t, "days", !0);
  return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
}
function G6(e, t) {
  arguments.length === 1 && (arguments[0] ? U6(arguments[0]) ? (e = arguments[0], t = void 0) : q6(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var n = e || cn(), r = Zm(n, this).startOf("day"), o = ze.calendarFormat(this, r) || "sameElse", s = t && (Ia(t[o]) ? t[o].call(this, n) : t[o]);
  return this.format(
    s || this.localeData().calendar(o, this, cn(n))
  );
}
function K6() {
  return new Sc(this);
}
function Z6(e, t) {
  var n = ia(e) ? e : cn(e);
  return this.isValid() && n.isValid() ? (t = Gr(t) || "millisecond", t === "millisecond" ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function X6(e, t) {
  var n = ia(e) ? e : cn(e);
  return this.isValid() && n.isValid() ? (t = Gr(t) || "millisecond", t === "millisecond" ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf()) : !1;
}
function Q6(e, t, n, r) {
  var o = ia(e) ? e : cn(e), s = ia(t) ? t : cn(t);
  return this.isValid() && o.isValid() && s.isValid() ? (r = r || "()", (r[0] === "(" ? this.isAfter(o, n) : !this.isBefore(o, n)) && (r[1] === ")" ? this.isBefore(s, n) : !this.isAfter(s, n))) : !1;
}
function J6(e, t) {
  var n = ia(e) ? e : cn(e), r;
  return this.isValid() && n.isValid() ? (t = Gr(t) || "millisecond", t === "millisecond" ? this.valueOf() === n.valueOf() : (r = n.valueOf(), this.clone().startOf(t).valueOf() <= r && r <= this.clone().endOf(t).valueOf())) : !1;
}
function eW(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function tW(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function nW(e, t, n) {
  var r, o, s;
  if (!this.isValid())
    return NaN;
  if (r = Zm(e, this), !r.isValid())
    return NaN;
  switch (o = (r.utcOffset() - this.utcOffset()) * 6e4, t = Gr(t), t) {
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
  return n ? s : Fr(s);
}
function Bu(e, t) {
  if (e.date() < t.date())
    return -Bu(t, e);
  var n = (t.year() - e.year()) * 12 + (t.month() - e.month()), r = e.clone().add(n, "months"), o, s;
  return t - r < 0 ? (o = e.clone().add(n - 1, "months"), s = (t - r) / (r - o)) : (o = e.clone().add(n + 1, "months"), s = (t - r) / (o - r)), -(n + s) || 0;
}
ze.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
ze.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function rW() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function aW(e) {
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
function oW() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", n, r, o, s;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), n = "[" + e + '("]', r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", o = "-MM-DD[T]HH:mm:ss.SSS", s = t + '[")]', this.format(n + r + o + s);
}
function iW(e) {
  e || (e = this.isUtc() ? ze.defaultFormatUtc : ze.defaultFormat);
  var t = Fu(this, e);
  return this.localeData().postformat(t);
}
function sW(e, t) {
  return this.isValid() && (ia(e) && e.isValid() || cn(e).isValid()) ? ca({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function lW(e) {
  return this.from(cn(), e);
}
function cW(e, t) {
  return this.isValid() && (ia(e) && e.isValid() || cn(e).isValid()) ? ca({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function uW(e) {
  return this.to(cn(), e);
}
function dx(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = lo(e), t != null && (this._locale = t), this);
}
var fx = Vr(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function px() {
  return this._locale;
}
var ad = 1e3, vs = 60 * ad, od = 60 * vs, hx = (365 * 400 + 97) * 24 * od;
function ys(e, t) {
  return (e % t + t) % t;
}
function mx(e, t, n) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, n) - hx : new Date(e, t, n).valueOf();
}
function gx(e, t, n) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - hx : Date.UTC(e, t, n);
}
function dW(e) {
  var t, n;
  if (e = Gr(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (n = this._isUTC ? gx : mx, e) {
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
      t = this._d.valueOf(), t -= ys(
        t + (this._isUTC ? 0 : this.utcOffset() * vs),
        od
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= ys(t, vs);
      break;
    case "second":
      t = this._d.valueOf(), t -= ys(t, ad);
      break;
  }
  return this._d.setTime(t), ze.updateOffset(this, !0), this;
}
function fW(e) {
  var t, n;
  if (e = Gr(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (n = this._isUTC ? gx : mx, e) {
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
      t = this._d.valueOf(), t += od - ys(
        t + (this._isUTC ? 0 : this.utcOffset() * vs),
        od
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += vs - ys(t, vs) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += ad - ys(t, ad) - 1;
      break;
  }
  return this._d.setTime(t), ze.updateOffset(this, !0), this;
}
function pW() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function hW() {
  return Math.floor(this.valueOf() / 1e3);
}
function mW() {
  return new Date(this.valueOf());
}
function gW() {
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
function vW() {
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
function yW() {
  return this.isValid() ? this.toISOString() : null;
}
function bW() {
  return Rm(this);
}
function _W() {
  return ko({}, _t(this));
}
function wW() {
  return _t(this).overflow;
}
function xW() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
ot("N", 0, 0, "eraAbbr");
ot("NN", 0, 0, "eraAbbr");
ot("NNN", 0, 0, "eraAbbr");
ot("NNNN", 0, 0, "eraName");
ot("NNNNN", 0, 0, "eraNarrow");
ot("y", ["y", 1], "yo", "eraYear");
ot("y", ["yy", 2], 0, "eraYear");
ot("y", ["yyy", 3], 0, "eraYear");
ot("y", ["yyyy", 4], 0, "eraYear");
Ge("N", Xm);
Ge("NN", Xm);
Ge("NNN", Xm);
Ge("NNNN", RW);
Ge("NNNNN", MW);
Jt(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, n, r) {
    var o = n._locale.erasParse(e, r, n._strict);
    o ? _t(n).era = o : _t(n).invalidEra = e;
  }
);
Ge("y", Gs);
Ge("yy", Gs);
Ge("yyy", Gs);
Ge("yyyy", Gs);
Ge("yo", DW);
Jt(["y", "yy", "yyy", "yyyy"], zn);
Jt(["yo"], function(e, t, n, r) {
  var o;
  n._locale._eraYearOrdinalRegex && (o = e.match(n._locale._eraYearOrdinalRegex)), n._locale.eraYearOrdinalParse ? t[zn] = n._locale.eraYearOrdinalParse(e, o) : t[zn] = parseInt(e, 10);
});
function EW(e, t) {
  var n, r, o, s = this._eras || lo("en")._eras;
  for (n = 0, r = s.length; n < r; ++n) {
    switch (typeof s[n].since) {
      case "string":
        o = ze(s[n].since).startOf("day"), s[n].since = o.valueOf();
        break;
    }
    switch (typeof s[n].until) {
      case "undefined":
        s[n].until = 1 / 0;
        break;
      case "string":
        o = ze(s[n].until).startOf("day").valueOf(), s[n].until = o.valueOf();
        break;
    }
  }
  return s;
}
function CW(e, t, n) {
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
function OW(e, t) {
  var n = e.since <= e.until ? 1 : -1;
  return t === void 0 ? ze(e.since).year() : ze(e.since).year() + (t - e.offset) * n;
}
function SW() {
  var e, t, n, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
      return r[e].name;
  return "";
}
function TW() {
  var e, t, n, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
      return r[e].narrow;
  return "";
}
function PW() {
  var e, t, n, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
      return r[e].abbr;
  return "";
}
function kW() {
  var e, t, n, r, o = this.localeData().eras();
  for (e = 0, t = o.length; e < t; ++e)
    if (n = o[e].since <= o[e].until ? 1 : -1, r = this.clone().startOf("day").valueOf(), o[e].since <= r && r <= o[e].until || o[e].until <= r && r <= o[e].since)
      return (this.year() - ze(o[e].since).year()) * n + o[e].offset;
  return this.year();
}
function NW(e) {
  return Bt(this, "_erasNameRegex") || Qm.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function IW(e) {
  return Bt(this, "_erasAbbrRegex") || Qm.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function AW(e) {
  return Bt(this, "_erasNarrowRegex") || Qm.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function Xm(e, t) {
  return t.erasAbbrRegex(e);
}
function RW(e, t) {
  return t.erasNameRegex(e);
}
function MW(e, t) {
  return t.erasNarrowRegex(e);
}
function DW(e, t) {
  return t._eraYearOrdinalRegex || Gs;
}
function Qm() {
  var e = [], t = [], n = [], r = [], o, s, u, c, d, p = this.eras();
  for (o = 0, s = p.length; o < s; ++o)
    u = Ka(p[o].name), c = Ka(p[o].abbr), d = Ka(p[o].narrow), t.push(u), e.push(c), n.push(d), r.push(u), r.push(c), r.push(d);
  this._erasRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  );
}
ot(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
ot(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function Ud(e, t) {
  ot(0, [e, e.length], 0, t);
}
Ud("gggg", "weekYear");
Ud("ggggg", "weekYear");
Ud("GGGG", "isoWeekYear");
Ud("GGGGG", "isoWeekYear");
Ge("G", $d);
Ge("g", $d);
Ge("GG", un, Or);
Ge("gg", un, Or);
Ge("GGGG", Bm, $m);
Ge("gggg", Bm, $m);
Ge("GGGGG", Fd, Dd);
Ge("ggggg", Fd, Dd);
Pc(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, n, r) {
    t[r.substr(0, 2)] = Rt(e);
  }
);
Pc(["gg", "GG"], function(e, t, n, r) {
  t[r] = ze.parseTwoDigitYear(e);
});
function LW(e) {
  return vx.call(
    this,
    e,
    this.week(),
    this.weekday() + this.localeData()._week.dow,
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function FW(e) {
  return vx.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function $W() {
  return Za(this.year(), 1, 4);
}
function BW() {
  return Za(this.isoWeekYear(), 1, 4);
}
function jW() {
  var e = this.localeData()._week;
  return Za(this.year(), e.dow, e.doy);
}
function WW() {
  var e = this.localeData()._week;
  return Za(this.weekYear(), e.dow, e.doy);
}
function vx(e, t, n, r, o) {
  var s;
  return e == null ? uc(this, r, o).year : (s = Za(e, r, o), t > s && (t = s), zW.call(this, e, t, n, r, o));
}
function zW(e, t, n, r, o) {
  var s = Zw(e, t, n, r, o), u = cc(s.year, 0, s.dayOfYear);
  return this.year(u.getUTCFullYear()), this.month(u.getUTCMonth()), this.date(u.getUTCDate()), this;
}
ot("Q", 0, "Qo", "quarter");
Ge("Q", Bw);
Jt("Q", function(e, t) {
  t[qa] = (Rt(e) - 1) * 3;
});
function UW(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
ot("D", ["DD", 2], "Do", "date");
Ge("D", un, Ks);
Ge("DD", un, Or);
Ge("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
Jt(["D", "DD"], ya);
Jt("Do", function(e, t) {
  t[ya] = Rt(e.match(un)[0]);
});
var yx = Zs("Date", !0);
ot("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
Ge("DDD", Ld);
Ge("DDDD", jw);
Jt(["DDD", "DDDD"], function(e, t, n) {
  n._dayOfYear = Rt(e);
});
function HW(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
ot("m", ["mm", 2], 0, "minute");
Ge("m", un, jm);
Ge("mm", un, Or);
Jt(["m", "mm"], na);
var YW = Zs("Minutes", !1);
ot("s", ["ss", 2], 0, "second");
Ge("s", un, jm);
Ge("ss", un, Or);
Jt(["s", "ss"], Va);
var qW = Zs("Seconds", !1);
ot("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
ot(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
ot(0, ["SSS", 3], 0, "millisecond");
ot(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
ot(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
ot(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
ot(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
ot(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
ot(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
Ge("S", Ld, Bw);
Ge("SS", Ld, Or);
Ge("SSS", Ld, jw);
var No, bx;
for (No = "SSSS"; No.length <= 9; No += "S")
  Ge(No, Gs);
function VW(e, t) {
  t[_i] = Rt(("0." + e) * 1e3);
}
for (No = "S"; No.length <= 9; No += "S")
  Jt(No, VW);
bx = Zs("Milliseconds", !1);
ot("z", 0, 0, "zoneAbbr");
ot("zz", 0, 0, "zoneName");
function GW() {
  return this._isUTC ? "UTC" : "";
}
function KW() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var Me = Sc.prototype;
Me.add = W6;
Me.calendar = G6;
Me.clone = K6;
Me.diff = nW;
Me.endOf = fW;
Me.format = iW;
Me.from = sW;
Me.fromNow = lW;
Me.to = cW;
Me.toNow = uW;
Me.get = oj;
Me.invalidAt = wW;
Me.isAfter = Z6;
Me.isBefore = X6;
Me.isBetween = Q6;
Me.isSame = J6;
Me.isSameOrAfter = eW;
Me.isSameOrBefore = tW;
Me.isValid = bW;
Me.lang = fx;
Me.locale = dx;
Me.localeData = px;
Me.max = b6;
Me.min = y6;
Me.parsingFlags = _W;
Me.set = ij;
Me.startOf = dW;
Me.subtract = z6;
Me.toArray = gW;
Me.toObject = vW;
Me.toDate = mW;
Me.toISOString = aW;
Me.inspect = oW;
typeof Symbol < "u" && Symbol.for != null && (Me[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
Me.toJSON = yW;
Me.toString = rW;
Me.unix = hW;
Me.valueOf = pW;
Me.creationData = xW;
Me.eraName = SW;
Me.eraNarrow = TW;
Me.eraAbbr = PW;
Me.eraYear = kW;
Me.year = Uw;
Me.isLeapYear = aj;
Me.weekYear = LW;
Me.isoWeekYear = FW;
Me.quarter = Me.quarters = UW;
Me.month = Gw;
Me.daysInMonth = mj;
Me.week = Me.weeks = Ej;
Me.isoWeek = Me.isoWeeks = Cj;
Me.weeksInYear = jW;
Me.weeksInWeekYear = WW;
Me.isoWeeksInYear = $W;
Me.isoWeeksInISOWeekYear = BW;
Me.date = yx;
Me.day = Me.days = Fj;
Me.weekday = $j;
Me.isoWeekday = Bj;
Me.dayOfYear = HW;
Me.hour = Me.hours = qj;
Me.minute = Me.minutes = YW;
Me.second = Me.seconds = qW;
Me.millisecond = Me.milliseconds = bx;
Me.utcOffset = P6;
Me.utc = N6;
Me.local = I6;
Me.parseZone = A6;
Me.hasAlignedHourOffset = R6;
Me.isDST = M6;
Me.isLocal = L6;
Me.isUtcOffset = F6;
Me.isUtc = sx;
Me.isUTC = sx;
Me.zoneAbbr = GW;
Me.zoneName = KW;
Me.dates = Vr(
  "dates accessor is deprecated. Use date instead.",
  yx
);
Me.months = Vr(
  "months accessor is deprecated. Use month instead",
  Gw
);
Me.years = Vr(
  "years accessor is deprecated. Use year instead",
  Uw
);
Me.zone = Vr(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  k6
);
Me.isDSTShifted = Vr(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  D6
);
function ZW(e) {
  return cn(e * 1e3);
}
function XW() {
  return cn.apply(null, arguments).parseZone();
}
function _x(e) {
  return e;
}
var jt = Dm.prototype;
jt.calendar = L4;
jt.longDateFormat = j4;
jt.invalidDate = z4;
jt.ordinal = Y4;
jt.preparse = _x;
jt.postformat = _x;
jt.relativeTime = V4;
jt.pastFuture = G4;
jt.set = M4;
jt.eras = EW;
jt.erasParse = CW;
jt.erasConvertYear = OW;
jt.erasAbbrRegex = IW;
jt.erasNameRegex = NW;
jt.erasNarrowRegex = AW;
jt.months = dj;
jt.monthsShort = fj;
jt.monthsParse = hj;
jt.monthsRegex = vj;
jt.monthsShortRegex = gj;
jt.week = bj;
jt.firstDayOfYear = xj;
jt.firstDayOfWeek = wj;
jt.weekdays = Aj;
jt.weekdaysMin = Mj;
jt.weekdaysShort = Rj;
jt.weekdaysParse = Lj;
jt.weekdaysRegex = jj;
jt.weekdaysShortRegex = Wj;
jt.weekdaysMinRegex = zj;
jt.isPM = Hj;
jt.meridiem = Vj;
function id(e, t, n, r) {
  var o = lo(), s = Na().set(r, t);
  return o[n](s, e);
}
function wx(e, t, n) {
  if (eo(e) && (t = e, e = void 0), e = e || "", t != null)
    return id(e, t, n, "month");
  var r, o = [];
  for (r = 0; r < 12; r++)
    o[r] = id(e, r, n, "month");
  return o;
}
function Jm(e, t, n, r) {
  typeof e == "boolean" ? (eo(t) && (n = t, t = void 0), t = t || "") : (t = e, n = t, e = !1, eo(t) && (n = t, t = void 0), t = t || "");
  var o = lo(), s = e ? o._week.dow : 0, u, c = [];
  if (n != null)
    return id(t, (n + s) % 7, r, "day");
  for (u = 0; u < 7; u++)
    c[u] = id(t, (u + s) % 7, r, "day");
  return c;
}
function QW(e, t) {
  return wx(e, t, "months");
}
function JW(e, t) {
  return wx(e, t, "monthsShort");
}
function ez(e, t, n) {
  return Jm(e, t, n, "weekdays");
}
function tz(e, t, n) {
  return Jm(e, t, n, "weekdaysShort");
}
function nz(e, t, n) {
  return Jm(e, t, n, "weekdaysMin");
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
    var t = e % 10, n = Rt(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + n;
  }
});
ze.lang = Vr(
  "moment.lang is deprecated. Use moment.locale instead.",
  Ao
);
ze.langData = Vr(
  "moment.langData is deprecated. Use moment.localeData instead.",
  lo
);
var Wa = Math.abs;
function rz() {
  var e = this._data;
  return this._milliseconds = Wa(this._milliseconds), this._days = Wa(this._days), this._months = Wa(this._months), e.milliseconds = Wa(e.milliseconds), e.seconds = Wa(e.seconds), e.minutes = Wa(e.minutes), e.hours = Wa(e.hours), e.months = Wa(e.months), e.years = Wa(e.years), this;
}
function xx(e, t, n, r) {
  var o = ca(t, n);
  return e._milliseconds += r * o._milliseconds, e._days += r * o._days, e._months += r * o._months, e._bubble();
}
function az(e, t) {
  return xx(this, e, t, 1);
}
function oz(e, t) {
  return xx(this, e, t, -1);
}
function I0(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function iz() {
  var e = this._milliseconds, t = this._days, n = this._months, r = this._data, o, s, u, c, d;
  return e >= 0 && t >= 0 && n >= 0 || e <= 0 && t <= 0 && n <= 0 || (e += I0(Ih(n) + t) * 864e5, t = 0, n = 0), r.milliseconds = e % 1e3, o = Fr(e / 1e3), r.seconds = o % 60, s = Fr(o / 60), r.minutes = s % 60, u = Fr(s / 60), r.hours = u % 24, t += Fr(u / 24), d = Fr(Ex(t)), n += d, t -= I0(Ih(d)), c = Fr(n / 12), n %= 12, r.days = t, r.months = n, r.years = c, this;
}
function Ex(e) {
  return e * 4800 / 146097;
}
function Ih(e) {
  return e * 146097 / 4800;
}
function sz(e) {
  if (!this.isValid())
    return NaN;
  var t, n, r = this._milliseconds;
  if (e = Gr(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + r / 864e5, n = this._months + Ex(t), e) {
      case "month":
        return n;
      case "quarter":
        return n / 3;
      case "year":
        return n / 12;
    }
  else
    switch (t = this._days + Math.round(Ih(this._months)), e) {
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
var Cx = co("ms"), lz = co("s"), cz = co("m"), uz = co("h"), dz = co("d"), fz = co("w"), pz = co("M"), hz = co("Q"), mz = co("y"), gz = Cx;
function vz() {
  return ca(this);
}
function yz(e) {
  return e = Gr(e), this.isValid() ? this[e + "s"]() : NaN;
}
function Hi(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var bz = Hi("milliseconds"), _z = Hi("seconds"), wz = Hi("minutes"), xz = Hi("hours"), Ez = Hi("days"), Cz = Hi("months"), Oz = Hi("years");
function Sz() {
  return Fr(this.days() / 7);
}
var Ha = Math.round, ds = {
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
function Tz(e, t, n, r, o) {
  return o.relativeTime(t || 1, !!n, e, r);
}
function Pz(e, t, n, r) {
  var o = ca(e).abs(), s = Ha(o.as("s")), u = Ha(o.as("m")), c = Ha(o.as("h")), d = Ha(o.as("d")), p = Ha(o.as("M")), h = Ha(o.as("w")), m = Ha(o.as("y")), g = s <= n.ss && ["s", s] || s < n.s && ["ss", s] || u <= 1 && ["m"] || u < n.m && ["mm", u] || c <= 1 && ["h"] || c < n.h && ["hh", c] || d <= 1 && ["d"] || d < n.d && ["dd", d];
  return n.w != null && (g = g || h <= 1 && ["w"] || h < n.w && ["ww", h]), g = g || p <= 1 && ["M"] || p < n.M && ["MM", p] || m <= 1 && ["y"] || ["yy", m], g[2] = t, g[3] = +e > 0, g[4] = r, Tz.apply(null, g);
}
function kz(e) {
  return e === void 0 ? Ha : typeof e == "function" ? (Ha = e, !0) : !1;
}
function Nz(e, t) {
  return ds[e] === void 0 ? !1 : t === void 0 ? ds[e] : (ds[e] = t, e === "s" && (ds.ss = t - 1), !0);
}
function Iz(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var n = !1, r = ds, o, s;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (n = e), typeof t == "object" && (r = Object.assign({}, ds, t), t.s != null && t.ss == null && (r.ss = t.s - 1)), o = this.localeData(), s = Pz(this, !n, r, o), n && (s = o.pastFuture(+this, s)), o.postformat(s);
}
var $p = Math.abs;
function os(e) {
  return (e > 0) - (e < 0) || +e;
}
function Hd() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = $p(this._milliseconds) / 1e3, t = $p(this._days), n = $p(this._months), r, o, s, u, c = this.asSeconds(), d, p, h, m;
  return c ? (r = Fr(e / 60), o = Fr(r / 60), e %= 60, r %= 60, s = Fr(n / 12), n %= 12, u = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", d = c < 0 ? "-" : "", p = os(this._months) !== os(c) ? "-" : "", h = os(this._days) !== os(c) ? "-" : "", m = os(this._milliseconds) !== os(c) ? "-" : "", d + "P" + (s ? p + s + "Y" : "") + (n ? p + n + "M" : "") + (t ? h + t + "D" : "") + (o || r || e ? "T" : "") + (o ? m + o + "H" : "") + (r ? m + r + "M" : "") + (e ? m + u + "S" : "")) : "P0D";
}
var Ft = zd.prototype;
Ft.isValid = C6;
Ft.abs = rz;
Ft.add = az;
Ft.subtract = oz;
Ft.as = sz;
Ft.asMilliseconds = Cx;
Ft.asSeconds = lz;
Ft.asMinutes = cz;
Ft.asHours = uz;
Ft.asDays = dz;
Ft.asWeeks = fz;
Ft.asMonths = pz;
Ft.asQuarters = hz;
Ft.asYears = mz;
Ft.valueOf = gz;
Ft._bubble = iz;
Ft.clone = vz;
Ft.get = yz;
Ft.milliseconds = bz;
Ft.seconds = _z;
Ft.minutes = wz;
Ft.hours = xz;
Ft.days = Ez;
Ft.weeks = Sz;
Ft.months = Cz;
Ft.years = Oz;
Ft.humanize = Iz;
Ft.toISOString = Hd;
Ft.toString = Hd;
Ft.toJSON = Hd;
Ft.locale = dx;
Ft.localeData = px;
Ft.toIsoString = Vr(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  Hd
);
Ft.lang = fx;
ot("X", 0, 0, "unix");
ot("x", 0, 0, "valueOf");
Ge("x", $d);
Ge("X", Q4);
Jt("X", function(e, t, n) {
  n._d = new Date(parseFloat(e) * 1e3);
});
Jt("x", function(e, t, n) {
  n._d = new Date(Rt(e));
});
//! moment.js
ze.version = "2.30.1";
A4(cn);
ze.fn = Me;
ze.min = _6;
ze.max = w6;
ze.now = x6;
ze.utc = Na;
ze.unix = ZW;
ze.months = QW;
ze.isDate = Oc;
ze.locale = Ao;
ze.invalid = Md;
ze.duration = ca;
ze.isMoment = ia;
ze.weekdays = ez;
ze.parseZone = XW;
ze.localeData = lo;
ze.isDuration = $u;
ze.monthsShort = JW;
ze.weekdaysMin = nz;
ze.defineLocale = Ym;
ze.updateLocale = Xj;
ze.locales = Qj;
ze.weekdaysShort = tz;
ze.normalizeUnits = Gr;
ze.relativeTimeRounding = kz;
ze.relativeTimeThreshold = Nz;
ze.calendarFormat = V6;
ze.prototype = Me;
ze.HTML5_FMT = {
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
function Az(e) {
  if (e != null) {
    const t = e.replace(/[^\d]/g, "");
    return t.length === 10 ? t.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3") : t.length === 11 ? t.replace(/(\d{1})(\d{3})(\d{3})(\d{4})/, "$1 ($2) $3-$4") : e;
  }
  return e;
}
function A0(e, t = !1, n = !1, r = !1) {
  const o = new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "dop"
  });
  if ([null, "", void 0].includes(e) && !r || !n && parseFloat(e || 0) === 0) return "";
  const s = o.format(e).replace("DOP", "");
  return t ? s.split(".")[0] : s;
}
function Rz(e, t = !1, n = !1) {
  const r = new Intl.NumberFormat("ja-JP", {
    maximumSignificantDigits: 14,
    style: "currency",
    currency: "dop"
  });
  return [null, "", void 0].includes(e) && !n || !t && parseFloat(e || 0) === 0 ? "" : r.format(e).replace("DOP", "");
}
function Ox(e, t) {
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
function Mz(e) {
  if (e) {
    const t = new Date(e).getTime(), r = (/* @__PURE__ */ new Date()).getTime() - t, o = parseInt(r / (1e3 * 60 * 60 * 24), 10);
    return o === 0 ? null : o;
  }
  return null;
}
function Lr(e, t = !1, n = !1, r = !1, o = !1, s = !1, u = !1) {
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
      return ze(e, "DD/MM/YYYY").format("DD/MM/YYYY");
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
    }) : ze(e).format("DD/MM/YYYY");
  }
  return e;
}
function Pl(e, t) {
  let n = e;
  return t && t.forEach((r) => {
    r.onName === e && (n = String(r.translate));
  }), n;
}
function Dz(e, t, n) {
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
function xl(e, t = 768, n = 55, r = 10, o = 10) {
  if (e >= t)
    return n;
  const s = t - e, u = Math.floor(s / r), c = n - u;
  return Math.max(c, o);
}
const Lz = "_headerTable_1sdq3_1", Fz = "_tableCellHeader_1sdq3_13", El = {
  headerTable: Lz,
  tableCellHeader: Fz
}, eg = ({
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
  const [p, h] = it([]), [m, g] = it([]), [y, b] = it(""), [_, w] = it("");
  Xt(() => {
    E(), b(t.orderDir === "desc" ? "descending" : "ascending"), w(t.orderKey);
  }, [t, y, _]), Xt(() => {
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
        label: U,
        width: ne,
        headerPosition: K,
        multipleColumns: ae = [],
        multiple: he = !1,
        action: ge = [],
        canSort: Ne = !0,
        twoLines: ce = !1,
        line1: me = {},
        line2: te = {},
        hidden: re = !1,
        color: se = "hsl(0, 0%, 80%)",
        style: be = {},
        orderKey: Oe
      }, Ee) => {
        let fe, Te;
        return R.isEmpty(B) || (fe = Ro(B)), Te = fe, R.isEmpty(Oe) || (Te = Ro(Oe)), re ? null : !R.isEmpty(ae) && R.isEmpty(I) ? (C = !0, T = [...T, ...ae], /* @__PURE__ */ O(
          Ot.HeaderCell,
          {
            style: { backgroundColor: se },
            className: El.tableCellHeader,
            colSpan: ae.length,
            textAlign: K || "center",
            children: U
          },
          Ee
        )) : he ? /* @__PURE__ */ O(
          Ot.HeaderCell,
          {
            style: { backgroundColor: se, ...be },
            className: El.tableCellHeader,
            textAlign: "center",
            onClick: F,
            children: /* @__PURE__ */ O(Jn, { checked: s })
          },
          Ee
        ) : ce ? /* @__PURE__ */ oe(
          Ot.HeaderCell,
          {
            rowSpan: !R.isEmpty(ae) && R.isEmpty(I) ? "1" : "2",
            style: { backgroundColor: se },
            className: El.tableCellHeader,
            textAlign: K || "center",
            sorted: Ne && Te === _ ? y : null,
            onClick: Ne ? () => {
              k(Te);
            } : null,
            width: ne || 1,
            children: [
              /* @__PURE__ */ oe("div", { children: [
                " ",
                R.get(me, "label", "")
              ] }),
              /* @__PURE__ */ oe("div", { children: [
                " ",
                R.get(te, "label", "")
              ] })
            ]
          },
          Ee
        ) : !R.isEmpty(ge) && o ? null : /* @__PURE__ */ O(
          Ot.HeaderCell,
          {
            rowSpan: !R.isEmpty(ae) && R.isEmpty(I) ? "1" : "2",
            style: { backgroundColor: se, ...be },
            className: El.tableCellHeader,
            textAlign: K || "center",
            sorted: Ne && Te === _ ? y : null,
            onClick: Ne ? () => {
              k(Te);
            } : null,
            width: d ? void 0 : ne || 1,
            children: U
          },
          Ee
        );
      }
    );
    S || h(/* @__PURE__ */ O(Ot.Row, { children: A })), S && g(/* @__PURE__ */ O(Ot.Row, { children: A })), C && E({
      subColumns: T,
      multStatus: C
    });
  };
  return /* @__PURE__ */ oe(Ot.Header, { className: El.headerTable, children: [
    p,
    m
  ] });
};
eg.propTypes = {
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
var Sx = {};
Object.defineProperty(Sx, "__esModule", { value: !0 });
var $z = ee;
function Bz(e) {
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
var Co = /* @__PURE__ */ Bz($z), Ah = function() {
  return Ah = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, Ah.apply(this, arguments);
};
function jz(e) {
  var t = e.bgColor, n = t === void 0 ? "#6a1b9a" : t, r = e.height, o = r === void 0 ? "20px" : r, s = e.width, u = s === void 0 ? "100%" : s, c = e.borderRadius, d = c === void 0 ? "50px" : c, p = e.labelAlignment, h = p === void 0 ? "right" : p, m = e.baseBgColor, g = m === void 0 ? "#e0e0de" : m, y = e.labelColor, b = y === void 0 ? "#fff" : y, _ = e.labelSize, w = _ === void 0 ? "15px" : _, k = e.isLabelVisible, F = k === void 0 ? !0 : k, E = e.dir, I = E === void 0 ? "ltr" : E, S = e.ariaValuemin, P = S === void 0 ? 0 : S, C = e.ariaValuemax, T = C === void 0 ? 100 : C, A = e.ariaValuetext, B = A === void 0 ? null : A, U = e.maxCompleted, ne = U === void 0 ? 100 : U, K = e.animateOnRender, ae = K === void 0 ? !1 : K, he = e.initCompletedOnAnimation, ge = he === void 0 ? 0 : he, Ne = e.isIndeterminate, ce = Ne === void 0 ? !1 : Ne, me = e.completed, te = e.margin, re = e.padding, se = e.customLabelStyles, be = e.transitionDuration, Oe = e.transitionTimingFunction, Ee = e.className, fe = e.customLabel, Te = e.barContainerClassName, De = e.completedClassName, W = e.labelClassName, z = function(Le) {
    return Le === "left" ? "flex-start" : Le === "center" ? "center" : Le === "right" ? "flex-end" : null;
  }, $ = z(h), M = typeof ge == "number" ? "".concat(ge, "%") : ge, V = function(Le, Fe) {
    if (Le) {
      var $e = Number(Fe) / Le;
      return $e > 1 ? "100%" : "".concat($e * 100, "%");
    }
    return M;
  }, G = V(ne, me), ie = Co.useState(M), Pe = ie[0], Z = ie[1], Se = {
    height: o,
    background: g,
    borderRadius: d,
    padding: re,
    width: u,
    margin: te,
    overflow: "hidden"
  }, le = {
    height: o,
    width: ce ? "100%" : ae ? Pe : G,
    background: n,
    transition: ce ? "none" : "width ".concat(be || "1s", " ").concat(Oe || "ease-in-out"),
    borderRadius: "inherit",
    display: "flex",
    alignItems: "center",
    justifyContent: h !== "outside" && $ ? $ : "normal",
    animation: ce ? "indeterminate 1.5s infinite linear" : "none"
  }, H = Ah({ padding: h === "outside" ? "0 0 0 5px" : "5px", color: b, fontWeight: "bold", fontSize: w, display: F ? "initial" : "none" }, se), Q = {
    display: h === "outside" ? "flex" : "initial",
    alignItems: h === "outside" ? "center" : "initial"
  }, _e = typeof me == "number" ? "".concat(me, "%") : "".concat(me), Ie = fe || _e;
  return Co.useEffect(function() {
    ae && !ce && requestAnimationFrame(function() {
      return Z(G);
    });
  }, [G, ae, ce]), Co.createElement(
    "div",
    { style: Ee ? void 0 : Q, className: Ee, dir: I, role: "progressbar", "aria-valuenow": ce ? void 0 : parseFloat(Ie), "aria-valuemin": P, "aria-valuemax": T, "aria-valuetext": "".concat(B === null ? Ie : B) },
    Co.createElement(
      "div",
      { style: Te ? void 0 : Se, className: Te },
      Co.createElement("div", { style: De ? void 0 : le, className: De }, h !== "outside" && Co.createElement("span", { style: W ? void 0 : H, className: W }, Ie))
    ),
    h === "outside" && Co.createElement("span", { style: W ? void 0 : H, className: W }, Ie),
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
var Wz = Sx.default = jz;
const ju = (e, t, n) => {
  if (R.isEmpty(n))
    return e[t];
  if (e[t]) {
    const r = R.takeRight(n, n.length - 1);
    return ju(e[t], n[0], r);
  }
  return "";
};
function Zt(e, t, n = !1, r) {
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
const zz = "_emptyChat_1ablf_3", Uz = "_emptyDataIcon_1ablf_13", Hz = "_groupHover_1ablf_29", Yz = "_sumRow_1ablf_39", qz = "_cell_1ablf_51", Vz = "_cellButton_1ablf_61", Gz = "_ButtonIcon_1ablf_75", Kz = "_ButtonLink_1ablf_95", Zz = "_towLineRow_1ablf_117", Xz = "_noWrap_1ablf_127", Qz = "_progressBarLabel_1ablf_137", Jz = "_cardsWrapper_1ablf_157", e8 = "_popupContent_1ablf_225", nn = {
  emptyChat: zz,
  emptyDataIcon: Uz,
  groupHover: Hz,
  sumRow: Yz,
  cell: qz,
  cellButton: Vz,
  ButtonIcon: Gz,
  ButtonLink: Kz,
  towLineRow: Zz,
  noWrap: Xz,
  progressBarLabel: Qz,
  cardsWrapper: Jz,
  popupContent: e8
}, t8 = (e, t, n = {}) => {
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
}, n8 = "_cardsContainer_d29bq_1", r8 = "_card_d29bq_1", a8 = "_cardHeader_d29bq_43", o8 = "_cardField_d29bq_61", i8 = "_cardLabel_d29bq_89", s8 = "_cardValue_d29bq_103", l8 = "_cardActionsMenu_d29bq_133", c8 = "_cardMenuIcon_d29bq_157", u8 = "_cardMenu_d29bq_157", d8 = "_cardMenuPopupContent_d29bq_287", f8 = "_cardMenuItem_d29bq_295", p8 = "_cardMenuIconItem_d29bq_315", h8 = "_cardMenuText_d29bq_335", m8 = "_cardActionsMenuPopup_d29bq_351", g8 = "_emptyState_d29bq_363", v8 = "_emptyIcon_d29bq_375", y8 = "_cardLine1_d29bq_387", b8 = "_cardLine2_d29bq_403", _8 = "_cardLine3_d29bq_419", w8 = "_cardLine4_d29bq_435", x8 = "_cardLine1Item_d29bq_451", E8 = "_cardLine2Item_d29bq_453", C8 = "_cardLine3Item_d29bq_455", O8 = "_cardLine4Item_d29bq_457", S8 = "_cardCheckbox_d29bq_467", T8 = "_cardInlineField_d29bq_479", P8 = "_cardInlineLabel_d29bq_491", k8 = "_cardInlineValue_d29bq_505", vt = {
  cardsContainer: n8,
  card: r8,
  cardHeader: a8,
  cardField: o8,
  cardLabel: i8,
  cardValue: s8,
  cardActionsMenu: l8,
  cardMenuIcon: c8,
  cardMenu: u8,
  cardMenuPopupContent: d8,
  cardMenuItem: f8,
  cardMenuIconItem: p8,
  cardMenuText: h8,
  cardActionsMenuPopup: m8,
  emptyState: g8,
  emptyIcon: v8,
  cardLine1: y8,
  cardLine2: b8,
  cardLine3: _8,
  cardLine4: w8,
  cardLine1Item: x8,
  cardLine2Item: E8,
  cardLine3Item: C8,
  cardLine4Item: O8,
  cardCheckbox: S8,
  cardInlineField: T8,
  cardInlineLabel: P8,
  cardInlineValue: k8
}, Tx = ({ rowData: e, columnsData: t, onHandlerTable: n, isPDF: r }) => {
  const [o, s] = it(!1), u = [];
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
  const c = R.map(u, (d) => /* @__PURE__ */ oe(
    Mn.Item,
    {
      className: vt.cardMenuItem,
      onClick: (p) => {
        p.stopPropagation(), d.onClick();
      },
      children: [
        d.icon && /* @__PURE__ */ O(
          We,
          {
            name: d.icon,
            className: vt.cardMenuIconItem,
            style: {
              color: d.color || "#6b7280"
            }
          }
        ),
        /* @__PURE__ */ O("span", { className: vt.cardMenuText, children: d.text })
      ]
    },
    d.key
  ));
  return /* @__PURE__ */ O(
    "div",
    {
      className: vt.cardActionsMenu,
      onDoubleClick: (d) => {
        d.stopPropagation();
      },
      children: /* @__PURE__ */ O(
        Fn,
        {
          className: vt.cardActionsMenuPopup,
          trigger: /* @__PURE__ */ O(
            We,
            {
              name: "ellipsis vertical",
              size: "large",
              className: vt.cardMenuIcon,
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
          children: /* @__PURE__ */ O(Fn.Content, { className: vt.cardMenuPopupContent, children: /* @__PURE__ */ O(Mn, { vertical: !0, className: vt.cardMenu, children: c }) })
        }
      )
    }
  );
};
Tx.propTypes = {
  rowData: l.object.isRequired,
  columnsData: l.array.isRequired,
  onHandlerTable: l.func.isRequired,
  isPDF: l.bool
};
const Px = ({
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
  const T = On(null), A = On(null), [B, U] = it(!1), [ne, K] = it(e), [ae, he] = it(1), [ge, Ne] = it(!0), ce = On(!1), me = On(S), te = On(!1), re = On(!1), se = On(0), [be, Oe] = it(window.innerWidth);
  Xt(() => {
    const Z = () => {
      Oe(window.innerWidth);
    };
    return window.addEventListener("resize", Z), () => {
      window.removeEventListener("resize", Z);
    };
  }, []), Xt(() => {
    JSON.stringify(me.current) !== JSON.stringify(S) ? (K(e), he(1), me.current = S, te.current = !1, se.current = 1, re.current = !1, Ne(!0)) : te.current && ae > se.current ? (e && e.length > 0 ? (K((Se) => {
      if (C)
        return t8(Se, e, C);
      const le = "id";
      if (Se.length > 0 && Se[0][le] !== void 0) {
        const H = new Set(
          Se.map((_e) => _e[le])
        ), Q = e.filter((_e) => !H.has(_e[le]));
        return [...Se, ...Q];
      }
      return [...Se, ...e];
    }), se.current = ae, re.current = !1) : (se.current = ae, re.current = !0), te.current = !1) : ae === 1 && !te.current && e && (K(e), se.current = 1);
  }, [e, S, C, ae]), Xt(() => {
    if (e !== void 0 && ge && !ce.current && !B && !te.current) {
      if (e.length > 0) {
        const Se = setTimeout(() => {
          Ne(!1);
        }, 1e3);
        return () => {
          clearTimeout(Se);
        };
      }
      const Z = setTimeout(() => {
        Ne(!1);
      }, 1500);
      return () => {
        clearTimeout(Z);
      };
    }
  }, [e, ge, B]), Xt(() => {
    if (ge) {
      const Z = setTimeout(() => {
        Ne(!1);
      }, 3e3);
      return () => {
        clearTimeout(Z);
      };
    }
  }, [ge]);
  const Ee = (Z, Se) => {
    if (R.isEmpty(Z))
      return null;
    const le = /* @__PURE__ */ O("span", { style: { marginLeft: "4px" }, children: /* @__PURE__ */ O(
      Fn,
      {
        position: "bottom right",
        content: /* @__PURE__ */ O("div", { children: Z }),
        trigger: /* @__PURE__ */ O(We, { name: "comment alternate outline", style: { color: "#286b92" } })
      }
    ) }, 1);
    return Se >= Z.length ? Z : /* @__PURE__ */ oe("span", { children: [
      `${Z.slice(0, Se)}...`,
      le
    ] });
  }, fe = (Z, Se, le = null) => {
    const {
      key: H,
      label: Q,
      format: _e,
      endDateKey: Ie = null,
      dataPosition: Le = "left",
      stringLength: Fe = 20,
      boolLabels: $e,
      translate: tt,
      colorLabel: Xe,
      textColor: Ke = "#000000",
      stopDateHandler: Ue = () => {
      },
      onClick: xt,
      render: ve
    } = Z;
    if (ve && typeof ve == "function")
      return ve(Se);
    const Tt = Zt(H, Se, !1), Pt = R.isEmpty(Ie) ? null : Zt(Ie, Se), dt = xl(be, 768, Fe, 10, 10), at = c({
      value: Tt,
      format: _e,
      endDate: Pt,
      stringLength: dt,
      key: H,
      translate: tt,
      colorLabel: Xe,
      onClick: xt,
      rowData: Se,
      textColor: Ke,
      boolLabels: $e,
      stopDateHandler: Ue
    });
    if (!(H === "id" || Q === "ID" || (H == null ? void 0 : H.toLowerCase().includes("id"))) && (R.isEmpty(at) || at === "-" || at === null || at === void 0))
      return null;
    const we = le !== null ? le : Q;
    return /* @__PURE__ */ oe("div", { className: vt.cardInlineField, children: [
      we && /* @__PURE__ */ oe("span", { className: vt.cardInlineLabel, children: [
        we,
        ":"
      ] }),
      /* @__PURE__ */ O("span", { className: vt.cardInlineValue, style: { textAlign: Le, color: Ke }, children: at })
    ] });
  }, Te = (Z, Se) => /* @__PURE__ */ O(Tx, { rowData: Z, columnsData: Se, onHandlerTable: s, isPDF: p }), De = (Z, Se) => {
    let le = {};
    typeof r == "function" && (le = r(Z) || {});
    const Q = d === Z ? { backgroundColor: o, ...le } : le;
    if (!R.isEmpty(h) || !R.isEmpty(m) || !R.isEmpty(g) || !R.isEmpty(y)) {
      const Le = R.find(t, { multiple: !0 }), Fe = Le == null ? void 0 : Le.key, $e = Fe ? R.includes(_, Z[Fe]) : !1, tt = [];
      Le && !R.isEmpty(h) && tt.push(
        /* @__PURE__ */ O("div", { className: vt.cardCheckbox, children: /* @__PURE__ */ O(
          Jn,
          {
            checked: $e,
            onChange: () => {
              b && b(Z, Fe);
            },
            onClick: (ve) => {
              ve.stopPropagation();
            }
          }
        ) }, "checkbox")
      ), R.map(h, (ve) => {
        const Tt = typeof ve == "string" ? ve : ve.key, Pt = typeof ve == "object" && ve.label !== void 0 ? ve.label : null, dt = typeof ve == "object" && ve.format !== void 0 ? ve.format : null, at = R.find(t, (de) => de.key === Tt && !de.multiple && !de.hidden);
        if (at && !at.hidden && !at.multiple) {
          const de = dt ? { ...at, format: dt } : at, we = fe(de, Z, Pt);
          we && tt.push(
            /* @__PURE__ */ O("div", { className: vt.cardLine1Item, children: we }, Tt)
          );
        }
      });
      const Xe = [];
      R.map(m, (ve) => {
        var de;
        if (typeof ve == "object" && typeof ve.render == "function") {
          const we = ve.render(Z), nt = typeof we == "object" && we.label !== void 0 ? we.label : ve.label || null;
          let Ye = typeof we == "object" && we.value !== void 0 ? we.value : we;
          const Je = typeof ve == "object" && ve.format !== void 0 ? ve.format : null, pt = typeof ve == "object" && ve.stringLength !== void 0 ? ve.stringLength : 20, Gt = typeof we == "object" && we.shouldTruncate === !0;
          if (Je && typeof Ye == "string")
            if (Je === "truncate" && Gt) {
              const Tr = xl(be, 480, pt, 1, 10);
              Ye = Ee(Ye, Tr);
            } else Je !== "truncate" && (Ye = c({
              value: Ye,
              format: Je,
              endDate: null,
              stringLength: pt,
              key: ve.key || "",
              translate: null,
              colorLabel: null,
              onClick: null,
              rowData: Z,
              textColor: "#000000",
              boolLabels: null,
              stopDateHandler: () => {
              }
            }));
          ((ve.key === "id" || ve.label === "ID" || ((de = ve.key) == null ? void 0 : de.toLowerCase().includes("id"))) && !R.isEmpty(Ye) && Ye !== "-" && Ye !== null && Ye !== void 0 || !R.isEmpty(Ye) && Ye !== "-" && Ye !== null && Ye !== void 0) && Xe.push(
            /* @__PURE__ */ O("div", { className: vt.cardLine2Item, children: /* @__PURE__ */ oe("div", { className: vt.cardInlineField, children: [
              nt && /* @__PURE__ */ oe("span", { className: vt.cardInlineLabel, children: [
                nt,
                ":"
              ] }),
              /* @__PURE__ */ O("span", { className: vt.cardInlineValue, children: Ye })
            ] }) }, ve.key || "render")
          );
          return;
        }
        const Tt = typeof ve == "string" ? ve : ve.key, Pt = typeof ve == "object" && ve.label !== void 0 ? ve.label : null, dt = typeof ve == "object" && ve.format !== void 0 ? ve.format : null, at = R.find(t, (we) => we.key === Tt && !we.multiple && !we.hidden);
        if (at && !at.hidden && !at.multiple) {
          const we = dt ? { ...at, format: dt } : at, nt = fe(we, Z, Pt);
          nt && Xe.push(
            /* @__PURE__ */ O("div", { className: vt.cardLine2Item, children: nt }, Tt)
          );
        }
      });
      const Ke = [];
      R.map(g, (ve) => {
        var de;
        if (typeof ve == "object" && typeof ve.render == "function") {
          const we = ve.render(Z), nt = typeof we == "object" && we.label !== void 0 ? we.label : ve.label || null;
          let Ye = typeof we == "object" && we.value !== void 0 ? we.value : we;
          const Je = typeof ve == "object" && ve.format !== void 0 ? ve.format : null, pt = typeof ve == "object" && ve.stringLength !== void 0 ? ve.stringLength : 20, Gt = typeof we == "object" && we.shouldTruncate === !0;
          if (Je && typeof Ye == "string")
            if (Je === "truncate" && Gt) {
              const Tr = xl(be, 480, pt, 1, 10);
              Ye = Ee(Ye, Tr);
            } else Je !== "truncate" && (Ye = c({
              value: Ye,
              format: Je,
              endDate: null,
              stringLength: pt,
              key: ve.key || "",
              translate: null,
              colorLabel: null,
              onClick: null,
              rowData: Z,
              textColor: "#000000",
              boolLabels: null,
              stopDateHandler: () => {
              }
            }));
          ((ve.key === "id" || ve.label === "ID" || ((de = ve.key) == null ? void 0 : de.toLowerCase().includes("id"))) && !R.isEmpty(Ye) && Ye !== "-" && Ye !== null && Ye !== void 0 || !R.isEmpty(Ye) && Ye !== "-" && Ye !== null && Ye !== void 0) && Ke.push(
            /* @__PURE__ */ O("div", { className: vt.cardLine3Item, children: /* @__PURE__ */ oe("div", { className: vt.cardInlineField, children: [
              nt && /* @__PURE__ */ oe("span", { className: vt.cardInlineLabel, children: [
                nt,
                ":"
              ] }),
              /* @__PURE__ */ O("span", { className: vt.cardInlineValue, children: Ye })
            ] }) }, ve.key || "render")
          );
          return;
        }
        const Tt = typeof ve == "string" ? ve : ve.key, Pt = typeof ve == "object" && ve.label !== void 0 ? ve.label : null, dt = typeof ve == "object" && ve.format !== void 0 ? ve.format : null, at = R.find(t, (we) => we.key === Tt && !we.multiple && !we.hidden);
        if (at && !at.hidden && !at.multiple) {
          const we = dt ? { ...at, format: dt } : at, nt = fe(we, Z, Pt);
          nt && Ke.push(
            /* @__PURE__ */ O("div", { className: vt.cardLine3Item, children: nt }, Tt)
          );
        }
      });
      const Ue = [];
      R.map(y, (ve) => {
        var de;
        if (typeof ve == "object" && typeof ve.render == "function") {
          const we = ve.render(Z), nt = typeof we == "object" && we.label !== void 0 ? we.label : ve.label || null;
          let Ye = typeof we == "object" && we.value !== void 0 ? we.value : we;
          const Je = typeof ve == "object" && ve.format !== void 0 ? ve.format : null, pt = typeof ve == "object" && ve.stringLength !== void 0 ? ve.stringLength : 20, Gt = typeof we == "object" && we.shouldTruncate === !0;
          if (Je && typeof Ye == "string")
            if (Je === "truncate" && Gt) {
              const Tr = xl(be, 480, pt, 1, 10);
              Ye = Ee(Ye, Tr);
            } else Je !== "truncate" && (Ye = c({
              value: Ye,
              format: Je,
              endDate: null,
              stringLength: pt,
              key: ve.key || "",
              translate: null,
              colorLabel: null,
              onClick: null,
              rowData: Z,
              textColor: "#000000",
              boolLabels: null,
              stopDateHandler: () => {
              }
            }));
          ((ve.key === "id" || ve.label === "ID" || ((de = ve.key) == null ? void 0 : de.toLowerCase().includes("id"))) && !R.isEmpty(Ye) && Ye !== "-" && Ye !== null && Ye !== void 0 || !R.isEmpty(Ye) && Ye !== "-" && Ye !== null && Ye !== void 0) && Ue.push(
            /* @__PURE__ */ O("div", { className: vt.cardLine4Item, children: /* @__PURE__ */ oe("div", { className: vt.cardInlineField, children: [
              nt && /* @__PURE__ */ oe("span", { className: vt.cardInlineLabel, children: [
                nt,
                ":"
              ] }),
              /* @__PURE__ */ O("span", { className: vt.cardInlineValue, children: Ye })
            ] }) }, ve.key || "render")
          );
          return;
        }
        const Tt = typeof ve == "string" ? ve : ve.key, Pt = typeof ve == "object" && ve.label !== void 0 ? ve.label : null, dt = typeof ve == "object" && ve.format !== void 0 ? ve.format : null, at = R.find(t, (we) => we.key === Tt && !we.multiple && !we.hidden);
        if (at && !at.hidden && !at.multiple) {
          const we = dt ? { ...at, format: dt } : at, nt = fe(we, Z, Pt);
          nt && Ue.push(
            /* @__PURE__ */ O("div", { className: vt.cardLine4Item, children: nt }, Tt)
          );
        }
      });
      const xt = Te(Z, t);
      return /* @__PURE__ */ oe(
        "div",
        {
          className: vt.card,
          style: Q,
          role: "button",
          tabIndex: 0,
          onClick: () => {
            u(Z);
          },
          onDoubleClick: () => {
            s("Watch", Z);
          },
          onKeyPress: (ve) => {
            (ve.key === "Enter" || ve.key === " ") && u(Z);
          },
          children: [
            xt,
            !R.isEmpty(tt) && /* @__PURE__ */ O("div", { className: vt.cardLine1, children: tt }),
            !R.isEmpty(Xe) && /* @__PURE__ */ O("div", { className: vt.cardLine2, children: Xe }),
            !R.isEmpty(Ke) && /* @__PURE__ */ O("div", { className: vt.cardLine3, children: Ke }),
            !R.isEmpty(Ue) && /* @__PURE__ */ O("div", { className: vt.cardLine4, children: Ue })
          ]
        },
        Se
      );
    }
    const _e = R.map(
      t,
      ({
        key: Le,
        label: Fe,
        format: $e,
        endDateKey: tt = null,
        dataPosition: Xe = "left",
        hidden: Ke = !1,
        stringLength: Ue = 20,
        boolLabels: xt,
        translate: ve,
        colorLabel: Tt,
        textColor: Pt = "#000000",
        stopDateHandler: dt = () => {
        },
        onClick: at,
        render: de,
        multiple: we = !1
      }) => {
        if (Ke || we) return null;
        if (de && typeof de == "function")
          return /* @__PURE__ */ O("div", { className: vt.cardField, children: de(Z) }, Le);
        const nt = Zt(Le, Z, !1), Ye = R.isEmpty(tt) ? null : Zt(tt, Z), Je = xl(be, 768, Ue, 10, 10), pt = c({
          value: nt,
          format: $e,
          endDate: Ye,
          stringLength: Je,
          key: Le,
          translate: ve,
          colorLabel: Tt,
          onClick: at,
          rowData: Z,
          textColor: Pt,
          boolLabels: xt,
          stopDateHandler: dt
        });
        return /* @__PURE__ */ oe("div", { className: vt.cardField, children: [
          /* @__PURE__ */ oe("div", { className: vt.cardLabel, children: [
            Fe,
            ":"
          ] }),
          /* @__PURE__ */ O("div", { className: vt.cardValue, style: { textAlign: Xe, color: Pt }, children: pt })
        ] }, Le);
      }
    ), Ie = Te(Z, t);
    return /* @__PURE__ */ oe(
      "div",
      {
        className: vt.card,
        style: Q,
        role: "button",
        tabIndex: 0,
        onClick: () => {
          u(Z);
        },
        onDoubleClick: () => {
          s("Watch", Z);
        },
        onKeyPress: (Le) => {
          (Le.key === "Enter" || Le.key === " ") && u(Z);
        },
        children: [
          Ie,
          _e
        ]
      },
      Se
    );
  }, W = I ? ne : e, $ = eh(() => {
    if (R.isEmpty(W))
      return [];
    const Z = [];
    return R.map(W, (Se, le) => {
      if (R.isEmpty(n)) {
        const H = (Se == null ? void 0 : Se.id) !== void 0 ? Se.id : le;
        Z.push({
          type: "card",
          key: `card-${H}`,
          data: Se
        });
      } else {
        const H = Zt(n.headerTitle, Se, !1), Q = Zt(n.dataDetail, Se, !1);
        Z.push({
          type: "header",
          key: `header-${le}`,
          title: H
        }), R.map(Q, (_e, Ie) => {
          const Le = (_e == null ? void 0 : _e.id) !== void 0 ? _e.id : `${le}-${Ie}`;
          Z.push({
            type: "card",
            key: `card-${Le}`,
            data: _e
          });
        });
      }
    }), Z;
  }, [W, n])(), M = eh(async () => {
    if (!I || !S || ce.current || B || re.current)
      return;
    const Z = ae + 1, Se = R.isEmpty(n) ? ne.length : R.sumBy(ne, (le) => {
      const H = Zt(n.dataDetail, le, !1);
      return (H == null ? void 0 : H.length) || 0;
    });
    if (P && Se >= P) {
      re.current = !0;
      return;
    }
    ce.current = !0, U(!0), te.current = !0;
    try {
      await I({ ...S, page: Z }, !1, !1), he(Z);
    } catch (le) {
      console.error("Error loading more data:", le), te.current = !1;
    } finally {
      U(!1), ce.current = !1;
    }
  }, [I, S, ae, ne, n, P, B]), V = I ? M : k, G = I ? B : F, ie = R.isEmpty(n) ? W.length : R.sumBy(W, (Z) => {
    const Se = Zt(n.dataDetail, Z, !1);
    return (Se == null ? void 0 : Se.length) || 0;
  }), Pe = re.current ? !1 : E ?? (P ? ie < P : !0);
  return Xt(() => {
    he(1), ce.current = !1;
  }, [S]), Xt(() => {
    if (!w || !V || !A.current)
      return;
    let Z = null, Se = null;
    const le = () => {
      let Q = T.current;
      for (; Q && Q !== document.body; ) {
        const _e = Q.className || "", Ie = window.getComputedStyle(Q);
        if (_e.includes("modalContent") || _e.includes("scrolling") || Ie.overflowY === "auto" || Ie.overflowY === "scroll")
          return Q;
        Q = Q.parentElement;
      }
      return null;
    };
    return Se = setTimeout(() => {
      const Q = le(), _e = A.current;
      !_e || Pe === !1 || $.length === 0 || "IntersectionObserver" in window && (Z = new IntersectionObserver(
        (Ie) => {
          const [Le] = Ie;
          Le.isIntersecting && Pe !== !1 && !G && !ce.current && $.length > 0 && !ge && V();
        },
        {
          root: Q,
          rootMargin: "200px",
          threshold: 0
        }
      ), Z.observe(_e));
    }, 300), () => {
      Se && clearTimeout(Se), Z && A.current && Z.unobserve(A.current);
    };
  }, [w, V, Pe, G, $.length, ge]), ge && R.isEmpty($) ? /* @__PURE__ */ O("div", { className: vt.cardsContainer, ref: T, children: /* @__PURE__ */ O("div", { className: vt.emptyState, children: /* @__PURE__ */ oe(
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
  ) }) }) : R.isEmpty($) ? /* @__PURE__ */ O("div", { className: vt.cardsContainer, ref: T, children: /* @__PURE__ */ O("div", { className: vt.emptyState, children: /* @__PURE__ */ oe(Xn, { as: "h3", color: "grey", children: [
    /* @__PURE__ */ O("div", { className: vt.emptyIcon, children: /* @__PURE__ */ oe(We.Group, { size: "large", children: [
      /* @__PURE__ */ O(We, { name: "list alternate outline" }),
      /* @__PURE__ */ O(We, { corner: !0, name: "close", color: "red" })
    ] }) }),
    "No se ha encontrado ningun dato"
  ] }) }) }) : /* @__PURE__ */ oe("div", { className: vt.cardsContainer, ref: T, children: [
    R.map($, (Z) => Z.type === "header" ? /* @__PURE__ */ O("div", { className: vt.cardHeader, children: Z.title }, Z.key) : De(Z.data, Z.key)),
    w && Pe !== !1 && /* @__PURE__ */ O("div", { ref: A, style: { height: "1px", width: "100%" } }),
    G && !ge && /* @__PURE__ */ oe(
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
Px.propTypes = {
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
function N8(e, t, n) {
  return (t = A8(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function R0(e, t) {
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
    t % 2 ? R0(Object(n), !0).forEach(function(r) {
      N8(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : R0(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function I8(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function A8(e) {
  var t = I8(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
const M0 = () => {
};
let tg = {}, kx = {}, Nx = null, Ix = {
  mark: M0,
  measure: M0
};
try {
  typeof window < "u" && (tg = window), typeof document < "u" && (kx = document), typeof MutationObserver < "u" && (Nx = MutationObserver), typeof performance < "u" && (Ix = performance);
} catch {
}
const {
  userAgent: D0 = ""
} = tg.navigator || {}, qo = tg, ln = kx, L0 = Nx, Tu = Ix;
qo.document;
const uo = !!ln.documentElement && !!ln.head && typeof ln.addEventListener == "function" && typeof ln.createElement == "function", Ax = ~D0.indexOf("MSIE") || ~D0.indexOf("Trident/");
var R8 = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, M8 = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, Rx = {
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
}, D8 = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Mx = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], Un = "classic", Yd = "duotone", L8 = "sharp", F8 = "sharp-duotone", Dx = [Un, Yd, L8, F8], $8 = {
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
}, B8 = {
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
}, j8 = /* @__PURE__ */ new Map([["classic", {
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
}]]), W8 = {
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
}, z8 = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], F0 = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, U8 = ["kit"], H8 = {
  kit: {
    "fa-kit": "fak"
  }
}, Y8 = ["fak", "fakd"], q8 = {
  kit: {
    fak: "fa-kit"
  }
}, $0 = {
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
}, V8 = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], G8 = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], K8 = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, Z8 = {
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
}, X8 = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
}, Rh = {
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
}, Q8 = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], Mh = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...V8, ...Q8], J8 = ["solid", "regular", "light", "thin", "duotone", "brands"], Lx = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], eU = Lx.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), tU = [...Object.keys(X8), ...J8, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Pu.GROUP, Pu.SWAP_OPACITY, Pu.PRIMARY, Pu.SECONDARY].concat(Lx.map((e) => "".concat(e, "x"))).concat(eU.map((e) => "w-".concat(e))), nU = {
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
const to = "___FONT_AWESOME___", Dh = 16, Fx = "fa", $x = "svg-inline--fa", Li = "data-fa-i2svg", Lh = "data-fa-pseudo-element", rU = "data-fa-pseudo-element-pending", ng = "data-prefix", rg = "data-icon", B0 = "fontawesome-i2svg", aU = "async", oU = ["HTML", "HEAD", "STYLE", "SCRIPT"], Bx = (() => {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})();
function kc(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[Un];
    }
  });
}
const jx = Re({}, Rx);
jx[Un] = Re(Re(Re(Re({}, {
  "fa-duotone": "duotone"
}), Rx[Un]), F0.kit), F0["kit-duotone"]);
const iU = kc(jx), Fh = Re({}, W8);
Fh[Un] = Re(Re(Re(Re({}, {
  duotone: "fad"
}), Fh[Un]), $0.kit), $0["kit-duotone"]);
const j0 = kc(Fh), $h = Re({}, Rh);
$h[Un] = Re(Re({}, $h[Un]), q8.kit);
const ag = kc($h), Bh = Re({}, Z8);
Bh[Un] = Re(Re({}, Bh[Un]), H8.kit);
kc(Bh);
const sU = R8, Wx = "fa-layers-text", lU = M8, cU = Re({}, $8);
kc(cU);
const uU = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Bp = D8, dU = [...U8, ...tU], Ll = qo.FontAwesomeConfig || {};
function fU(e) {
  var t = ln.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function pU(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
ln && typeof ln.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [n, r] = t;
  const o = pU(fU(n));
  o != null && (Ll[r] = o);
});
const zx = {
  styleDefault: "solid",
  familyDefault: Un,
  cssPrefix: Fx,
  replacementClass: $x,
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
Ll.familyPrefix && (Ll.cssPrefix = Ll.familyPrefix);
const $s = Re(Re({}, zx), Ll);
$s.autoReplaceSvg || ($s.observeMutations = !1);
const rt = {};
Object.keys(zx).forEach((e) => {
  Object.defineProperty(rt, e, {
    enumerable: !0,
    set: function(t) {
      $s[e] = t, Fl.forEach((n) => n(rt));
    },
    get: function() {
      return $s[e];
    }
  });
});
Object.defineProperty(rt, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    $s.cssPrefix = e, Fl.forEach((t) => t(rt));
  },
  get: function() {
    return $s.cssPrefix;
  }
});
qo.FontAwesomeConfig = rt;
const Fl = [];
function hU(e) {
  return Fl.push(e), () => {
    Fl.splice(Fl.indexOf(e), 1);
  };
}
const Oo = Dh, xa = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function mU(e) {
  if (!e || !uo)
    return;
  const t = ln.createElement("style");
  t.setAttribute("type", "text/css"), t.innerHTML = e;
  const n = ln.head.childNodes;
  let r = null;
  for (let o = n.length - 1; o > -1; o--) {
    const s = n[o], u = (s.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(u) > -1 && (r = s);
  }
  return ln.head.insertBefore(t, r), e;
}
const gU = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function fc() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += gU[Math.random() * 62 | 0];
  return t;
}
function Xs(e) {
  const t = [];
  for (let n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function og(e) {
  return e.classList ? Xs(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function Ux(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function vU(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(Ux(e[n]), '" '), "").trim();
}
function qd(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function ig(e) {
  return e.size !== xa.size || e.x !== xa.x || e.y !== xa.y || e.rotate !== xa.rotate || e.flipX || e.flipY;
}
function yU(e) {
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
function bU(e) {
  let {
    transform: t,
    width: n = Dh,
    height: r = Dh,
    startCentered: o = !1
  } = e, s = "";
  return o && Ax ? s += "translate(".concat(t.x / Oo - n / 2, "em, ").concat(t.y / Oo - r / 2, "em) ") : o ? s += "translate(calc(-50% + ".concat(t.x / Oo, "em), calc(-50% + ").concat(t.y / Oo, "em)) ") : s += "translate(".concat(t.x / Oo, "em, ").concat(t.y / Oo, "em) "), s += "scale(".concat(t.size / Oo * (t.flipX ? -1 : 1), ", ").concat(t.size / Oo * (t.flipY ? -1 : 1), ") "), s += "rotate(".concat(t.rotate, "deg) "), s;
}
var _U = `:root, :host {
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
function Hx() {
  const e = Fx, t = $x, n = rt.cssPrefix, r = rt.replacementClass;
  let o = _U;
  if (n !== e || r !== t) {
    const s = new RegExp("\\.".concat(e, "\\-"), "g"), u = new RegExp("\\--".concat(e, "\\-"), "g"), c = new RegExp("\\.".concat(t), "g");
    o = o.replace(s, ".".concat(n, "-")).replace(u, "--".concat(n, "-")).replace(c, ".".concat(r));
  }
  return o;
}
let W0 = !1;
function jp() {
  rt.autoAddCss && !W0 && (mU(Hx()), W0 = !0);
}
var wU = {
  mixout() {
    return {
      dom: {
        css: Hx,
        insertCss: jp
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        jp();
      },
      beforeI2svg() {
        jp();
      }
    };
  }
};
const no = qo || {};
no[to] || (no[to] = {});
no[to].styles || (no[to].styles = {});
no[to].hooks || (no[to].hooks = {});
no[to].shims || (no[to].shims = []);
var Ea = no[to];
const Yx = [], qx = function() {
  ln.removeEventListener("DOMContentLoaded", qx), sd = 1, Yx.map((e) => e());
};
let sd = !1;
uo && (sd = (ln.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(ln.readyState), sd || ln.addEventListener("DOMContentLoaded", qx));
function xU(e) {
  uo && (sd ? setTimeout(e, 0) : Yx.push(e));
}
function Nc(e) {
  const {
    tag: t,
    attributes: n = {},
    children: r = []
  } = e;
  return typeof e == "string" ? Ux(e) : "<".concat(t, " ").concat(vU(n), ">").concat(r.map(Nc).join(""), "</").concat(t, ">");
}
function z0(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var Wp = function(t, n, r, o) {
  var s = Object.keys(t), u = s.length, c = n, d, p, h;
  for (r === void 0 ? (d = 1, h = t[s[0]]) : (d = 0, h = r); d < u; d++)
    p = s[d], h = c(h, t[p], p, t);
  return h;
};
function EU(e) {
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
function jh(e) {
  const t = EU(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function CU(e, t) {
  const n = e.length;
  let r = e.charCodeAt(t), o;
  return r >= 55296 && r <= 56319 && n > t + 1 && (o = e.charCodeAt(t + 1), o >= 56320 && o <= 57343) ? (r - 55296) * 1024 + o - 56320 + 65536 : r;
}
function U0(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return !!r.icon ? t[r.iconName] = r.icon : t[n] = r, t;
  }, {});
}
function Wh(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: r = !1
  } = n, o = U0(t);
  typeof Ea.hooks.addPack == "function" && !r ? Ea.hooks.addPack(e, U0(t)) : Ea.styles[e] = Re(Re({}, Ea.styles[e] || {}), o), e === "fas" && Wh("fa", t);
}
const {
  styles: pc,
  shims: OU
} = Ea, Vx = Object.keys(ag), SU = Vx.reduce((e, t) => (e[t] = Object.keys(ag[t]), e), {});
let sg = null, Gx = {}, Kx = {}, Zx = {}, Xx = {}, Qx = {};
function TU(e) {
  return ~dU.indexOf(e);
}
function PU(e, t) {
  const n = t.split("-"), r = n[0], o = n.slice(1).join("-");
  return r === e && o !== "" && !TU(o) ? o : null;
}
const Jx = () => {
  const e = (r) => Wp(pc, (o, s, u) => (o[u] = Wp(s, r, {}), o), {});
  Gx = e((r, o, s) => (o[3] && (r[o[3]] = s), o[2] && o[2].filter((c) => typeof c == "number").forEach((c) => {
    r[c.toString(16)] = s;
  }), r)), Kx = e((r, o, s) => (r[s] = s, o[2] && o[2].filter((c) => typeof c == "string").forEach((c) => {
    r[c] = s;
  }), r)), Qx = e((r, o, s) => {
    const u = o[2];
    return r[s] = s, u.forEach((c) => {
      r[c] = s;
    }), r;
  });
  const t = "far" in pc || rt.autoFetchSvg, n = Wp(OU, (r, o) => {
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
  Zx = n.names, Xx = n.unicodes, sg = Vd(rt.styleDefault, {
    family: rt.familyDefault
  });
};
hU((e) => {
  sg = Vd(e.styleDefault, {
    family: rt.familyDefault
  });
});
Jx();
function lg(e, t) {
  return (Gx[e] || {})[t];
}
function kU(e, t) {
  return (Kx[e] || {})[t];
}
function wi(e, t) {
  return (Qx[e] || {})[t];
}
function eE(e) {
  return Zx[e] || {
    prefix: null,
    iconName: null
  };
}
function NU(e) {
  const t = Xx[e], n = lg("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function Vo() {
  return sg;
}
const tE = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function IU(e) {
  let t = Un;
  const n = Vx.reduce((r, o) => (r[o] = "".concat(rt.cssPrefix, "-").concat(o), r), {});
  return Dx.forEach((r) => {
    (e.includes(n[r]) || e.some((o) => SU[r].includes(o))) && (t = r);
  }), t;
}
function Vd(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = Un
  } = t, r = iU[n][e];
  if (n === Yd && !e)
    return "fad";
  const o = j0[n][e] || j0[n][r], s = e in Ea.styles ? e : null;
  return o || s || null;
}
function AU(e) {
  let t = [], n = null;
  return e.forEach((r) => {
    const o = PU(rt.cssPrefix, r);
    o ? n = o : r && t.push(r);
  }), {
    iconName: n,
    rest: t
  };
}
function H0(e) {
  return e.sort().filter((t, n, r) => r.indexOf(t) === n);
}
function Gd(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = t;
  let r = null;
  const o = Mh.concat(G8), s = H0(e.filter((m) => o.includes(m))), u = H0(e.filter((m) => !Mh.includes(m))), c = s.filter((m) => (r = m, !Mx.includes(m))), [d = null] = c, p = IU(s), h = Re(Re({}, AU(u)), {}, {
    prefix: Vd(d, {
      family: p
    })
  });
  return Re(Re(Re({}, h), LU({
    values: e,
    family: p,
    styles: pc,
    config: rt,
    canonical: h,
    givenPrefix: r
  })), RU(n, r, h));
}
function RU(e, t, n) {
  let {
    prefix: r,
    iconName: o
  } = n;
  if (e || !r || !o)
    return {
      prefix: r,
      iconName: o
    };
  const s = t === "fa" ? eE(o) : {}, u = wi(r, o);
  return o = s.iconName || u || o, r = s.prefix || r, r === "far" && !pc.far && pc.fas && !rt.autoFetchSvg && (r = "fas"), {
    prefix: r,
    iconName: o
  };
}
const MU = Dx.filter((e) => e !== Un || e !== Yd), DU = Object.keys(Rh).filter((e) => e !== Un).map((e) => Object.keys(Rh[e])).flat();
function LU(e) {
  const {
    values: t,
    family: n,
    canonical: r,
    givenPrefix: o = "",
    styles: s = {},
    config: u = {}
  } = e, c = n === Yd, d = t.includes("fa-duotone") || t.includes("fad"), p = u.familyDefault === "duotone", h = r.prefix === "fad" || r.prefix === "fa-duotone";
  if (!c && (d || p || h) && (r.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (r.prefix = "fab"), !r.prefix && MU.includes(n) && (Object.keys(s).find((g) => DU.includes(g)) || u.autoFetchSvg)) {
    const g = j8.get(n).defaultShortPrefixId;
    r.prefix = g, r.iconName = wi(r.prefix, r.iconName) || r.iconName;
  }
  return (r.prefix === "fa" || o === "fa") && (r.prefix = Vo() || "fas"), r;
}
class FU {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    const o = n.reduce(this._pullDefinitions, {});
    Object.keys(o).forEach((s) => {
      this.definitions[s] = Re(Re({}, this.definitions[s] || {}), o[s]), Wh(s, o[s]);
      const u = ag[Un][s];
      u && Wh(u, o[s]), Jx();
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
let Y0 = [], fs = {};
const bs = {}, $U = Object.keys(bs);
function BU(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return Y0 = e, fs = {}, Object.keys(bs).forEach((r) => {
    $U.indexOf(r) === -1 && delete bs[r];
  }), Y0.forEach((r) => {
    const o = r.mixout ? r.mixout() : {};
    if (Object.keys(o).forEach((s) => {
      typeof o[s] == "function" && (n[s] = o[s]), typeof o[s] == "object" && Object.keys(o[s]).forEach((u) => {
        n[s] || (n[s] = {}), n[s][u] = o[s][u];
      });
    }), r.hooks) {
      const s = r.hooks();
      Object.keys(s).forEach((u) => {
        fs[u] || (fs[u] = []), fs[u].push(s[u]);
      });
    }
    r.provides && r.provides(bs);
  }), n;
}
function zh(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
    r[o - 2] = arguments[o];
  return (fs[e] || []).forEach((u) => {
    t = u.apply(null, [t, ...r]);
  }), t;
}
function Fi(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  (fs[e] || []).forEach((s) => {
    s.apply(null, n);
  });
}
function Go() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return bs[e] ? bs[e].apply(null, t) : void 0;
}
function Uh(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || Vo();
  if (t)
    return t = wi(n, t) || t, z0(nE.definitions, n, t) || z0(Ea.styles, n, t);
}
const nE = new FU(), jU = () => {
  rt.autoReplaceSvg = !1, rt.observeMutations = !1, Fi("noAuto");
}, WU = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return uo ? (Fi("beforeI2svg", e), Go("pseudoElements2svg", e), Go("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    rt.autoReplaceSvg === !1 && (rt.autoReplaceSvg = !0), rt.observeMutations = !0, xU(() => {
      UU({
        autoReplaceSvgRoot: t
      }), Fi("watch", e);
    });
  }
}, zU = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: wi(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = Vd(e[0]);
      return {
        prefix: n,
        iconName: wi(n, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(rt.cssPrefix, "-")) > -1 || e.match(sU))) {
      const t = Gd(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || Vo(),
        iconName: wi(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = Vo();
      return {
        prefix: t,
        iconName: wi(t, e) || e
      };
    }
  }
}, Sr = {
  noAuto: jU,
  config: rt,
  dom: WU,
  parse: zU,
  library: nE,
  findIconDefinition: Uh,
  toHtml: Nc
}, UU = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = ln
  } = e;
  (Object.keys(Ea.styles).length > 0 || rt.autoFetchSvg) && uo && rt.autoReplaceSvg && Sr.dom.i2svg({
    node: t
  });
};
function Kd(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((n) => Nc(n));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!uo) return;
      const n = ln.createElement("div");
      return n.innerHTML = e.html, n.children;
    }
  }), e;
}
function HU(e) {
  let {
    children: t,
    main: n,
    mask: r,
    attributes: o,
    styles: s,
    transform: u
  } = e;
  if (ig(u) && n.found && !r.found) {
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
function YU(e) {
  let {
    prefix: t,
    iconName: n,
    children: r,
    attributes: o,
    symbol: s
  } = e;
  const u = s === !0 ? "".concat(t, "-").concat(rt.cssPrefix, "-").concat(n) : s;
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
function cg(e) {
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
  } = n.found ? n : t, b = Y8.includes(r), _ = [rt.replacementClass, o ? "".concat(rt.cssPrefix, "-").concat(o) : ""].filter((S) => h.classes.indexOf(S) === -1).filter((S) => S !== "" || !!S).concat(h.classes).join(" ");
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
  m && (w.attributes[Li] = ""), c && (w.children.push({
    tag: "title",
    attributes: {
      id: w.attributes["aria-labelledby"] || "title-".concat(p || fc())
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
  return F.children = E, F.attributes = I, u ? YU(F) : HU(F);
}
function q0(e) {
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
  c && (d[Li] = "");
  const p = Re({}, u.styles);
  ig(o) && (p.transform = bU({
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
function qU(e) {
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
  styles: zp
} = Ea;
function Hh(e) {
  const t = e[0], n = e[1], [r] = e.slice(4);
  let o = null;
  return Array.isArray(r) ? o = {
    tag: "g",
    attributes: {
      class: "".concat(rt.cssPrefix, "-").concat(Bp.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(rt.cssPrefix, "-").concat(Bp.SECONDARY),
        fill: "currentColor",
        d: r[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(rt.cssPrefix, "-").concat(Bp.PRIMARY),
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
const VU = {
  found: !1,
  width: 512,
  height: 512
};
function GU(e, t) {
  !Bx && !rt.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function Yh(e, t) {
  let n = t;
  return t === "fa" && rt.styleDefault !== null && (t = Vo()), new Promise((r, o) => {
    if (n === "fa") {
      const s = eE(e) || {};
      e = s.iconName || e, t = s.prefix || t;
    }
    if (e && t && zp[t] && zp[t][e]) {
      const s = zp[t][e];
      return r(Hh(s));
    }
    GU(e, t), r(Re(Re({}, VU), {}, {
      icon: rt.showMissingIcons && e ? Go("missingIconAbstract") || {} : {}
    }));
  });
}
const V0 = () => {
}, qh = rt.measurePerformance && Tu && Tu.mark && Tu.measure ? Tu : {
  mark: V0,
  measure: V0
}, kl = 'FA "6.7.2"', KU = (e) => (qh.mark("".concat(kl, " ").concat(e, " begins")), () => rE(e)), rE = (e) => {
  qh.mark("".concat(kl, " ").concat(e, " ends")), qh.measure("".concat(kl, " ").concat(e), "".concat(kl, " ").concat(e, " begins"), "".concat(kl, " ").concat(e, " ends"));
};
var ug = {
  begin: KU,
  end: rE
};
const Wu = () => {
};
function G0(e) {
  return typeof (e.getAttribute ? e.getAttribute(Li) : null) == "string";
}
function ZU(e) {
  const t = e.getAttribute ? e.getAttribute(ng) : null, n = e.getAttribute ? e.getAttribute(rg) : null;
  return t && n;
}
function XU(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(rt.replacementClass);
}
function QU() {
  return rt.autoReplaceSvg === !0 ? zu.replace : zu[rt.autoReplaceSvg] || zu.replace;
}
function JU(e) {
  return ln.createElementNS("http://www.w3.org/2000/svg", e);
}
function e7(e) {
  return ln.createElement(e);
}
function aE(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? JU : e7
  } = t;
  if (typeof e == "string")
    return ln.createTextNode(e);
  const r = n(e.tag);
  return Object.keys(e.attributes || []).forEach(function(s) {
    r.setAttribute(s, e.attributes[s]);
  }), (e.children || []).forEach(function(s) {
    r.appendChild(aE(s, {
      ceFn: n
    }));
  }), r;
}
function t7(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const zu = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((n) => {
        t.parentNode.insertBefore(aE(n), t);
      }), t.getAttribute(Li) === null && rt.keepOriginalSource) {
        let n = ln.createComment(t7(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], n = e[1];
    if (~og(t).indexOf(rt.replacementClass))
      return zu.replace(e);
    const r = new RegExp("".concat(rt.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const s = n[0].attributes.class.split(" ").reduce((u, c) => (c === rt.replacementClass || c.match(r) ? u.toSvg.push(c) : u.toNode.push(c), u), {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = s.toSvg.join(" "), s.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", s.toNode.join(" "));
    }
    const o = n.map((s) => Nc(s)).join(`
`);
    t.setAttribute(Li, ""), t.innerHTML = o;
  }
};
function K0(e) {
  e();
}
function oE(e, t) {
  const n = typeof t == "function" ? t : Wu;
  if (e.length === 0)
    n();
  else {
    let r = K0;
    rt.mutateApproach === aU && (r = qo.requestAnimationFrame || K0), r(() => {
      const o = QU(), s = ug.begin("mutate");
      e.map(o), s(), n();
    });
  }
}
let dg = !1;
function iE() {
  dg = !0;
}
function Vh() {
  dg = !1;
}
let ld = null;
function Z0(e) {
  if (!L0 || !rt.observeMutations)
    return;
  const {
    treeCallback: t = Wu,
    nodeCallback: n = Wu,
    pseudoElementsCallback: r = Wu,
    observeMutationsRoot: o = ln
  } = e;
  ld = new L0((s) => {
    if (dg) return;
    const u = Vo();
    Xs(s).forEach((c) => {
      if (c.type === "childList" && c.addedNodes.length > 0 && !G0(c.addedNodes[0]) && (rt.searchPseudoElements && r(c.target), t(c.target)), c.type === "attributes" && c.target.parentNode && rt.searchPseudoElements && r(c.target.parentNode), c.type === "attributes" && G0(c.target) && ~uU.indexOf(c.attributeName))
        if (c.attributeName === "class" && ZU(c.target)) {
          const {
            prefix: d,
            iconName: p
          } = Gd(og(c.target));
          c.target.setAttribute(ng, d || u), p && c.target.setAttribute(rg, p);
        } else XU(c.target) && n(c.target);
    });
  }), uo && ld.observe(o, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function n7() {
  ld && ld.disconnect();
}
function r7(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce((r, o) => {
    const s = o.split(":"), u = s[0], c = s.slice(1);
    return u && c.length > 0 && (r[u] = c.join(":").trim()), r;
  }, {})), n;
}
function a7(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "";
  let o = Gd(og(e));
  return o.prefix || (o.prefix = Vo()), t && n && (o.prefix = t, o.iconName = n), o.iconName && o.prefix || (o.prefix && r.length > 0 && (o.iconName = kU(o.prefix, e.innerText) || lg(o.prefix, jh(e.innerText))), !o.iconName && rt.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (o.iconName = e.firstChild.data)), o;
}
function o7(e) {
  const t = Xs(e.attributes).reduce((o, s) => (o.name !== "class" && o.name !== "style" && (o[s.name] = s.value), o), {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return rt.autoA11y && (n ? t["aria-labelledby"] = "".concat(rt.replacementClass, "-title-").concat(r || fc()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function i7() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: xa,
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
function X0(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: n,
    prefix: r,
    rest: o
  } = a7(e), s = o7(e), u = zh("parseNodeAttributes", {}, e);
  let c = t.styleParser ? r7(e) : [];
  return Re({
    iconName: n,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: r,
    transform: xa,
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
  styles: s7
} = Ea;
function sE(e) {
  const t = rt.autoReplaceSvg === "nest" ? X0(e, {
    styleParser: !1
  }) : X0(e);
  return ~t.extra.classes.indexOf(Wx) ? Go("generateLayersText", e, t) : Go("generateSvgReplacementMutation", e, t);
}
function l7() {
  return [...z8, ...Mh];
}
function Q0(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!uo) return Promise.resolve();
  const n = ln.documentElement.classList, r = (h) => n.add("".concat(B0, "-").concat(h)), o = (h) => n.remove("".concat(B0, "-").concat(h)), s = rt.autoFetchSvg ? l7() : Mx.concat(Object.keys(s7));
  s.includes("fa") || s.push("fa");
  const u = [".".concat(Wx, ":not([").concat(Li, "])")].concat(s.map((h) => ".".concat(h, ":not([").concat(Li, "])"))).join(", ");
  if (u.length === 0)
    return Promise.resolve();
  let c = [];
  try {
    c = Xs(e.querySelectorAll(u));
  } catch {
  }
  if (c.length > 0)
    r("pending"), o("complete");
  else
    return Promise.resolve();
  const d = ug.begin("onTree"), p = c.reduce((h, m) => {
    try {
      const g = sE(m);
      g && h.push(g);
    } catch (g) {
      Bx || g.name === "MissingIcon" && console.error(g);
    }
    return h;
  }, []);
  return new Promise((h, m) => {
    Promise.all(p).then((g) => {
      oE(g, () => {
        r("active"), r("complete"), o("pending"), typeof t == "function" && t(), d(), h();
      });
    }).catch((g) => {
      d(), m(g);
    });
  });
}
function c7(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  sE(e).then((n) => {
    n && oE([n], t);
  });
}
function u7(e) {
  return function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = (t || {}).icon ? t : Uh(t || {});
    let {
      mask: o
    } = n;
    return o && (o = (o || {}).icon ? o : Uh(o || {})), e(r, Re(Re({}, n), {}, {
      mask: o
    }));
  };
}
const d7 = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = xa,
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
  }, e), () => (Fi("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), rt.autoA11y && (u ? p["aria-labelledby"] = "".concat(rt.replacementClass, "-title-").concat(c || fc()) : (p["aria-hidden"] = "true", p.focusable = "false")), cg({
    icons: {
      main: Hh(y),
      mask: o ? Hh(o.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: m,
    iconName: g,
    transform: Re(Re({}, xa), n),
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
var f7 = {
  mixout() {
    return {
      icon: u7(d7)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = Q0, e.nodeCallback = c7, e;
      }
    };
  },
  provides(e) {
    e.i2svg = function(t) {
      const {
        node: n = ln,
        callback: r = () => {
        }
      } = t;
      return Q0(n, r);
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
        Promise.all([Yh(r, u), p.iconName ? Yh(p.iconName, p.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((b) => {
          let [_, w] = b;
          g([t, cg({
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
      return ig(s) && (d = Go("generateAbstractTransformGrouping", {
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
}, p7 = {
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
          Fi("beforeDOMElementCreation", {
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
              class: ["".concat(rt.cssPrefix, "-layers"), ...n].join(" ")
            },
            children: r
          }];
        });
      }
    };
  }
}, h7 = {
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
        }, () => (Fi("beforeDOMElementCreation", {
          content: e,
          params: t
        }), qU({
          content: e.toString(),
          title: n,
          extra: {
            attributes: o,
            styles: s,
            classes: ["".concat(rt.cssPrefix, "-layers-counter"), ...r]
          }
        })));
      }
    };
  }
}, m7 = {
  mixout() {
    return {
      text(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: n = xa,
          title: r = null,
          classes: o = [],
          attributes: s = {},
          styles: u = {}
        } = t;
        return Kd({
          type: "text",
          content: e
        }, () => (Fi("beforeDOMElementCreation", {
          content: e,
          params: t
        }), q0({
          content: e,
          transform: Re(Re({}, xa), n),
          title: r,
          extra: {
            attributes: s,
            styles: u,
            classes: ["".concat(rt.cssPrefix, "-layers-text"), ...o]
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
      if (Ax) {
        const d = parseInt(getComputedStyle(t).fontSize, 10), p = t.getBoundingClientRect();
        u = p.width / d, c = p.height / d;
      }
      return rt.autoA11y && !r && (s.attributes["aria-hidden"] = "true"), Promise.resolve([t, q0({
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
const g7 = new RegExp('"', "ug"), J0 = [1105920, 1112319], e_ = Re(Re(Re(Re({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), B8), nU), K8), Gh = Object.keys(e_).reduce((e, t) => (e[t.toLowerCase()] = e_[t], e), {}), v7 = Object.keys(Gh).reduce((e, t) => {
  const n = Gh[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function y7(e) {
  const t = e.replace(g7, ""), n = CU(t, 0), r = n >= J0[0] && n <= J0[1], o = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: jh(o ? t[0] : t),
    isSecondary: r || o
  };
}
function b7(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(t), o = isNaN(r) ? "normal" : r;
  return (Gh[n] || {})[o] || v7[n];
}
function t_(e, t) {
  const n = "".concat(rU).concat(t.replace(":", "-"));
  return new Promise((r, o) => {
    if (e.getAttribute(n) !== null)
      return r();
    const u = Xs(e.children).filter((g) => g.getAttribute(Lh) === t)[0], c = qo.getComputedStyle(e, t), d = c.getPropertyValue("font-family"), p = d.match(lU), h = c.getPropertyValue("font-weight"), m = c.getPropertyValue("content");
    if (u && !p)
      return e.removeChild(u), r();
    if (p && m !== "none" && m !== "") {
      const g = c.getPropertyValue("content");
      let y = b7(d, h);
      const {
        value: b,
        isSecondary: _
      } = y7(g), w = p[0].startsWith("FontAwesome");
      let k = lg(y, b), F = k;
      if (w) {
        const E = NU(b);
        E.iconName && E.prefix && (k = E.iconName, y = E.prefix);
      }
      if (k && !_ && (!u || u.getAttribute(ng) !== y || u.getAttribute(rg) !== F)) {
        e.setAttribute(n, F), u && e.removeChild(u);
        const E = i7(), {
          extra: I
        } = E;
        I.attributes[Lh] = t, Yh(k, y).then((S) => {
          const P = cg(Re(Re({}, E), {}, {
            icons: {
              main: S,
              mask: tE()
            },
            prefix: y,
            iconName: F,
            extra: I,
            watchable: !0
          })), C = ln.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(C, e.firstChild) : e.appendChild(C), C.outerHTML = P.map((T) => Nc(T)).join(`
`), e.removeAttribute(n), r();
        }).catch(o);
      } else
        r();
    } else
      r();
  });
}
function _7(e) {
  return Promise.all([t_(e, "::before"), t_(e, "::after")]);
}
function w7(e) {
  return e.parentNode !== document.head && !~oU.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(Lh) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function n_(e) {
  if (uo)
    return new Promise((t, n) => {
      const r = Xs(e.querySelectorAll("*")).filter(w7).map(_7), o = ug.begin("searchPseudoElements");
      iE(), Promise.all(r).then(() => {
        o(), Vh(), t();
      }).catch(() => {
        o(), Vh(), n();
      });
    });
}
var x7 = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = n_, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: n = ln
      } = t;
      rt.searchPseudoElements && n_(n);
    };
  }
};
let r_ = !1;
var E7 = {
  mixout() {
    return {
      dom: {
        unwatch() {
          iE(), r_ = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        Z0(zh("mutationObserverCallbacks", {}));
      },
      noAuto() {
        n7();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        r_ ? Vh() : Z0(zh("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const a_ = (e) => {
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
var C7 = {
  mixout() {
    return {
      parse: {
        transform: (e) => a_(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-transform");
        return n && (e.transform = a_(n)), e;
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
const Up = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function o_(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function O7(e) {
  return e.tag === "g" ? e.children : [e];
}
var S7 = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-mask"), r = n ? Gd(n.split(" ").map((o) => o.trim())) : tE();
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
      } = s, g = yU({
        transform: c,
        containerWidth: h,
        iconWidth: d
      }), y = {
        tag: "rect",
        attributes: Re(Re({}, Up), {}, {
          fill: "white"
        })
      }, b = p.children ? {
        children: p.children.map(o_)
      } : {}, _ = {
        tag: "g",
        attributes: Re({}, g.inner),
        children: [o_(Re({
          tag: p.tag,
          attributes: Re(Re({}, p.attributes), g.path)
        }, b))]
      }, w = {
        tag: "g",
        attributes: Re({}, g.outer),
        children: [_]
      }, k = "mask-".concat(u || fc()), F = "clip-".concat(u || fc()), E = {
        tag: "mask",
        attributes: Re(Re({}, Up), {}, {
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
          children: O7(m)
        }, E]
      };
      return n.push(I, {
        tag: "rect",
        attributes: Re({
          fill: "currentColor",
          "clip-path": "url(#".concat(F, ")"),
          mask: "url(#".concat(k, ")")
        }, Up)
      }), {
        children: n,
        attributes: r
      };
    };
  }
}, T7 = {
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
}, P7 = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), r = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = r, e;
      }
    };
  }
}, k7 = [wU, f7, p7, h7, m7, x7, E7, C7, S7, T7, P7];
BU(k7, {
  mixoutsTo: Sr
});
Sr.noAuto;
Sr.config;
Sr.library;
Sr.dom;
const Kh = Sr.parse;
Sr.findIconDefinition;
Sr.toHtml;
const N7 = Sr.icon;
Sr.layer;
Sr.text;
Sr.counter;
function Zh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function I7(e) {
  if (Array.isArray(e)) return e;
}
function A7(e) {
  if (Array.isArray(e)) return Zh(e);
}
function To(e, t, n) {
  return (t = j7(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function R7(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function M7(e, t) {
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
function D7() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function L7() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function i_(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function va(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? i_(Object(n), !0).forEach(function(r) {
      To(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i_(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function F7(e, t) {
  if (e == null) return {};
  var n, r, o = $7(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}
function $7(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function s_(e, t) {
  return I7(e) || M7(e, t) || lE(e, t) || D7();
}
function Xh(e) {
  return A7(e) || R7(e) || lE(e) || L7();
}
function B7(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function j7(e) {
  var t = B7(e, "string");
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
function lE(e, t) {
  if (e) {
    if (typeof e == "string") return Zh(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Zh(e, t) : void 0;
  }
}
var W7 = "7.0.0", Qh;
try {
  var z7 = require("@fortawesome/fontawesome-svg-core/package.json");
  Qh = z7.version;
} catch {
  Qh = typeof process < "u" && process.env.FA_VERSION || "7.0.0";
}
function U7(e) {
  var t = e.beat, n = e.fade, r = e.beatFade, o = e.bounce, s = e.shake, u = e.flash, c = e.spin, d = e.spinPulse, p = e.spinReverse, h = e.pulse, m = e.fixedWidth, g = e.inverse, y = e.border, b = e.listItem, _ = e.flip, w = e.size, k = e.rotation, F = e.pull, E = e.swapOpacity, I = e.rotateBy, S = e.widthAuto, P = H7(Qh, W7), C = To(To(To(To(To(To({
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
function H7(e, t) {
  for (var n = e.split("-"), r = s_(n, 2), o = r[0], s = r[1], u = t.split("-"), c = s_(u, 2), d = c[0], p = c[1], h = o.split("."), m = d.split("."), g = 0; g < Math.max(h.length, m.length); g++) {
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
function Y7(e) {
  return e = e - 0, e === e;
}
function cE(e) {
  return Y7(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var q7 = ["style"];
function V7(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function G7(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), o = cE(n.slice(0, r)), s = n.slice(r + 1).trim();
    return o.startsWith("webkit") ? t[V7(o)] = s : t[o] = s, t;
  }, {});
}
function uE(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var r = (t.children || []).map(function(d) {
    return uE(e, d);
  }), o = Object.keys(t.attributes || {}).reduce(function(d, p) {
    var h = t.attributes[p];
    switch (p) {
      case "class":
        d.attrs.className = h, delete t.attributes.class;
        break;
      case "style":
        d.attrs.style = G7(h);
        break;
      default:
        p.indexOf("aria-") === 0 || p.indexOf("data-") === 0 ? d.attrs[p.toLowerCase()] = h : d.attrs[cE(p)] = h;
    }
    return d;
  }, {
    attrs: {}
  }), s = n.style, u = s === void 0 ? {} : s, c = F7(n, q7);
  return o.attrs.style = va(va({}, o.attrs.style), u), e.apply(void 0, [t.tag, va(va({}, o.attrs), c)].concat(Xh(r)));
}
var dE = !1;
try {
  dE = process.env.NODE_ENV === "production";
} catch {
}
function K7() {
  if (!dE && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function l_(e) {
  if (e && cd(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (Kh.icon)
    return Kh.icon(e);
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
function Hp(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? To({}, e, t) : {};
}
var c_ = {
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
  var n = va(va({}, c_), e), r = n.icon, o = n.mask, s = n.symbol, u = n.className, c = n.title, d = n.titleId, p = n.maskId, h = l_(r), m = Hp("classes", [].concat(Xh(U7(n)), Xh((u || "").split(" ")))), g = Hp("transform", typeof n.transform == "string" ? Kh.transform(n.transform) : n.transform), y = Hp("mask", l_(o)), b = N7(h, va(va(va(va({}, m), g), y), {}, {
    symbol: s,
    title: c,
    titleId: d,
    maskId: p
  }));
  if (!b)
    return K7("Could not find icon", h), null;
  var _ = b.abstract, w = {
    ref: t
  };
  return Object.keys(n).forEach(function(k) {
    c_.hasOwnProperty(k) || (w[k] = n[k]);
  }), Z7(_[0], w);
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
var Z7 = uE.bind(null, ee.createElement);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const X7 = {
  prefix: "fas",
  iconName: "rotate-left",
  icon: [512, 512, ["rotate-back", "rotate-backward", "undo-alt"], "f2ea", "M48.5 224L40 224c-13.3 0-24-10.7-24-24L16 72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8L48.5 224z"]
}, Q7 = {
  prefix: "fas",
  iconName: "rotate-right",
  icon: [512, 512, ["redo-alt", "rotate-forward"], "f2f9", "M463.5 224l8.5 0c13.3 0 24-10.7 24-24l0-128c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8l119.5 0z"]
}, fE = "carousel", fg = "controller", J7 = "navigation", eH = "no-scroll", pg = "portal", tH = "root", pE = "toolbar", nH = "download", Jh = "fullscreen", u_ = "thumbnails", d_ = "zoom", Uu = "loading", rH = "playing", Yp = "error", Hu = "complete", aH = "placeholder", Zd = (e) => `active-slide-${e}`, oH = Zd(Uu), iH = Zd(rH), sH = Zd(Hu), hE = "fullsize", Xd = "flex_center", lH = "no_scroll", mE = "no_scroll_padding", hg = "slide", mg = "slide_wrapper", cH = "slide_wrapper_interactive", vi = "prev", yi = "next", f_ = "swipe", Bs = "close", gE = "onPointerDown", vE = "onPointerMove", yE = "onPointerUp", bE = "onPointerLeave", _E = "onPointerCancel", gg = "onKeyDown", uH = "onKeyUp", vg = "onWheel", dH = "Escape", fH = "ArrowLeft", pH = "ArrowRight", hH = "button", em = "icon", wE = "contain", p_ = "cover", xE = "Unknown action type", EE = "yarl__";
function Wr(...e) {
  return e.filter(Boolean).join(" ");
}
function Ct(e) {
  return `${EE}${e}`;
}
function sr(e) {
  return `--${EE}${e}`;
}
function Ic(e, t) {
  return `${e}${t ? `_${t}` : ""}`;
}
function yg(e) {
  return (t) => Ic(e, t);
}
function js(e, t) {
  var n;
  return (n = e == null ? void 0 : e[t]) !== null && n !== void 0 ? n : t;
}
function mH(e, t, n) {
  return js(e, "{index} of {total}").replace(/\{index}/g, `${xg(n, t.length) + 1}`).replace(/\{total}/g, `${t.length}`);
}
function Qd(...e) {
  return () => {
    e.forEach((t) => {
      t();
    });
  };
}
function ua(e, t, n) {
  return () => {
    const r = L.useContext(n);
    if (!r)
      throw new Error(`${e} must be used within a ${t}.Provider`);
    return r;
  };
}
function bg() {
  return typeof window < "u";
}
function _g(e, t = 0) {
  const n = 10 ** t;
  return Math.round((e + Number.EPSILON) * n) / n;
}
function Ko(e) {
  return e.type === void 0 || e.type === "image";
}
function wg(e, t) {
  return e.imageFit === p_ || e.imageFit !== wE && t === p_;
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
function gH(e, t) {
  const n = dd(t), r = n.percent !== void 0 ? e.width / 100 * n.percent : n.pixel;
  return {
    width: Math.max(e.width - 2 * r, 0),
    height: Math.max(e.height - 2 * r, 0)
  };
}
function vH() {
  return (bg() ? window == null ? void 0 : window.devicePixelRatio : void 0) || 1;
}
function xg(e, t) {
  return t > 0 ? (e % t + t) % t : 0;
}
function CE(e) {
  return e.length > 0;
}
function OE(e, t) {
  return e[xg(t, e.length)];
}
function tm(e, t) {
  return CE(e) ? OE(e, t) : void 0;
}
function yH(e) {
  return Ko(e) ? e.src : void 0;
}
function Eg(e, t, n) {
  if (!n)
    return e;
  const { buttons: r, ...o } = e, s = r.findIndex((c) => c === t), u = L.isValidElement(n) ? L.cloneElement(n, { key: t }, null) : n;
  if (s >= 0) {
    const c = [...r];
    return c.splice(s, 1, u), { buttons: c, ...o };
  }
  return { buttons: [u, ...r], ...o };
}
function bH(e, t, n = 0) {
  return Math.min(e.preload, Math.max(e.finite ? t.length - 1 : Math.floor(t.length / 2), n));
}
const _H = Number(L.version.split(".")[0]) >= 19;
function wH(e) {
  return { inert: _H ? e : e ? "" : void 0 };
}
function SE(e) {
  e.scrollTop;
}
const nm = {
  open: !1,
  close: () => {
  },
  index: 0,
  slides: [],
  render: {},
  plugins: [],
  toolbar: { buttons: [Bs] },
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
    imageFit: wE,
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
function Rn(e, t) {
  return { module: e, children: t };
}
function TE(e, t, n) {
  return e.module.name === t ? n(e) : e.children ? [
    Rn(e.module, e.children.flatMap((r) => {
      var o;
      return (o = TE(r, t, n)) !== null && o !== void 0 ? o : [];
    }))
  ] : [e];
}
function is(e, t, n) {
  return e.flatMap((r) => {
    var o;
    return (o = TE(r, t, n)) !== null && o !== void 0 ? o : [];
  });
}
function xH(e, t = [], n = []) {
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
      r = [Rn(b, r)];
      return;
    }
    r = is(r, y, (_) => [Rn(b, [_])]);
  }, u = (y, b) => {
    r = is(r, y, (_) => [Rn(_.module, [Rn(b, _.children)])]);
  }, c = (y, b, _) => {
    r = is(r, y, (w) => {
      var k;
      return [
        Rn(w.module, [
          ..._ ? [Rn(b)] : [],
          ...(k = w.children) !== null && k !== void 0 ? k : [],
          ..._ ? [] : [Rn(b)]
        ])
      ];
    });
  }, d = (y, b, _) => {
    r = is(r, y, (w) => [
      ..._ ? [Rn(b)] : [],
      w,
      ..._ ? [] : [Rn(b)]
    ]);
  }, p = (y) => {
    u(fg, y);
  }, h = (y, b) => {
    r = is(r, y, (_) => [Rn(b, _.children)]);
  }, m = (y) => {
    r = is(r, y, (b) => b.children);
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
const PE = L.createContext(null), kE = ua("useA11yContext", "A11yContext", PE);
function EH({ children: e }) {
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
  return L.createElement(PE.Provider, { value: s }, e);
}
const NE = L.createContext(null), Qs = ua("useDocument", "DocumentContext", NE);
function CH({ nodeRef: e, children: t }) {
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
  return L.createElement(NE.Provider, { value: n }, t);
}
const IE = L.createContext(null), Ac = ua("useEvents", "EventsContext", IE);
function OH({ children: e }) {
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
  return L.createElement(IE.Provider, { value: n }, e);
}
const AE = L.createContext(null), Hn = ua("useLightboxProps", "LightboxPropsContext", AE);
function SH({ children: e, ...t }) {
  return L.createElement(AE.Provider, { value: t }, e);
}
const RE = L.createContext(null), po = ua("useLightboxState", "LightboxStateContext", RE), ME = L.createContext(null), TH = ua("useLightboxDispatch", "LightboxDispatchContext", ME);
function PH(e, t) {
  switch (t.type) {
    case "swipe": {
      const { slides: n } = e, r = (t == null ? void 0 : t.increment) || 0, o = e.globalIndex + r, s = xg(o, n.length), u = tm(n, s), c = r || t.duration !== void 0 ? {
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
        currentSlide: tm(t.slides, t.index)
      } : e;
    default:
      throw new Error(xE);
  }
}
function kH({ slides: e, index: t, children: n }) {
  const [r, o] = L.useReducer(PH, {
    slides: e,
    currentIndex: t,
    globalIndex: t,
    currentSlide: tm(e, t)
  }), [s, u] = L.useState(e), [c, d] = L.useState(t);
  (e !== s || t !== c) && (u(e), d(t), o({ type: "update", slides: e, index: t }));
  const p = L.useMemo(() => ({ ...r, state: r, dispatch: o }), [r, o]);
  return L.createElement(
    ME.Provider,
    { value: o },
    L.createElement(RE.Provider, { value: p }, n)
  );
}
const DE = L.createContext(null), NH = ua("useRTLContext", "RTLContext", DE);
function IH({ isRTL: e, children: t }) {
  const n = L.useMemo(() => ({ isRTL: e }), [e]);
  return L.createElement(DE.Provider, { value: n }, t);
}
const LE = L.createContext(null), ef = ua("useTimeouts", "TimeoutsContext", LE);
function AH({ children: e }) {
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
  return L.createElement(LE.Provider, { value: n }, e);
}
const Rc = L.forwardRef(function({ label: t, className: n, icon: r, renderIcon: o, onClick: s, style: u, ...c }, d) {
  const { styles: p, labels: h } = Hn(), m = js(h, t);
  return L.createElement("button", { ref: d, type: "button", title: m, "aria-label": m, className: Wr(Ct(hH), n), onClick: s, style: { ...u, ...p.button }, ...c }, o ? o() : L.createElement(r, { className: Ct(em), style: p.icon }));
});
function RH(e, t) {
  const n = (r) => L.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", "aria-hidden": "true", focusable: "false", ...r }, t);
  return n.displayName = e, n;
}
function Aa(e, t) {
  return RH(e, L.createElement(
    "g",
    { fill: "currentColor" },
    L.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
    t
  ));
}
const MH = Aa("Close", L.createElement("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })), DH = Aa("Previous", L.createElement("path", { d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" })), LH = Aa("Next", L.createElement("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" })), FH = Aa("Loading", L.createElement(L.Fragment, null, Array.from({ length: 8 }).map((e, t, n) => L.createElement("line", { key: t, x1: "12", y1: "6.5", x2: "12", y2: "1.8", strokeLinecap: "round", strokeWidth: "2.6", stroke: "currentColor", strokeOpacity: 1 / n.length * (t + 1), transform: `rotate(${360 / n.length * t}, 12, 12)` })))), $H = Aa("Error", L.createElement("path", { d: "M21.9,21.9l-8.49-8.49l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31L21.9,21.9z M5,18 l3.5-4.5l2.5,3.01L12.17,15l3,3H5z M21,18.17L5.83,3H19c1.1,0,2,0.9,2,2V18.17z" })), sa = bg() ? L.useLayoutEffect : L.useEffect;
function Cg() {
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
function BH(e) {
  let t = 0, n = 0, r = 0;
  const s = window.getComputedStyle(e).transform.match(/matrix.*\((.+)\)/);
  if (s) {
    const u = s[1].split(",").map(Jd);
    u.length === 6 ? (t = u[4], n = u[5]) : u.length === 16 && (t = u[12], n = u[13], r = u[14]);
  }
  return { x: t, y: n, z: r };
}
function h_(e, t) {
  const n = L.useRef(void 0), r = L.useRef(void 0), o = Cg();
  return sa(() => {
    var s, u, c;
    if (e.current && n.current !== void 0 && !o) {
      const { keyframes: d, duration: p, easing: h, onfinish: m } = t(n.current, e.current.getBoundingClientRect(), BH(e.current)) || {};
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
function Og() {
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
function Lt(e) {
  const t = L.useRef(e);
  return sa(() => {
    t.current = e;
  }), L.useCallback((...n) => {
    var r;
    return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
  }, []);
}
function m_(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function rm(e, t) {
  return L.useMemo(() => e == null && t == null ? null : (n) => {
    m_(e, n), m_(t, n);
  }, [e, t]);
}
function jH(e, t = !1) {
  const n = L.useRef(!1);
  sa(() => {
    t && n.current && (n.current = !1, e());
  }, [t, e]);
  const r = L.useCallback(() => {
    n.current = !0;
  }, []), o = L.useCallback(() => {
    n.current = !1;
  }, []);
  return { onFocus: r, onBlur: o };
}
function Sg() {
  return NH().isRTL;
}
function WH() {
  const [e] = L.useState({}), t = L.useCallback((o, s) => {
    var u;
    (u = e[o]) === null || u === void 0 || u.forEach((c) => {
      s.isPropagationStopped() || c(s);
    });
  }, [e]), n = L.useMemo(() => ({
    onPointerDown: (o) => t(gE, o),
    onPointerMove: (o) => t(vE, o),
    onPointerUp: (o) => t(yE, o),
    onPointerLeave: (o) => t(bE, o),
    onPointerCancel: (o) => t(_E, o),
    onKeyDown: (o) => t(gg, o),
    onKeyUp: (o) => t(uH, o),
    onWheel: (o) => t(vg, o)
  }), [t]), r = L.useCallback((o, s) => (e[o] || (e[o] = []), e[o].unshift(s), () => {
    const u = e[o];
    u && u.splice(0, u.length, ...u.filter((c) => c !== s));
  }), [e]);
  return { registerSensors: n, subscribeSensors: r };
}
function g_(e, t) {
  const n = L.useRef(0), r = Yu(), o = Lt((...s) => {
    n.current = Date.now(), e(...s);
  });
  return L.useCallback((...s) => {
    r(() => {
      o(...s);
    }, t - (Date.now() - n.current));
  }, [t, o, r]);
}
const qp = yg("slide"), Vp = yg("slide_image");
function fd({ slide: e, offset: t, render: n, rect: r, imageFit: o, imageProps: s, onClick: u, onLoad: c, onError: d, style: p }) {
  var h, m, g, y, b, _, w, k;
  const [F, E] = L.useState(Uu), { publish: I } = Ac(), { setTimeout: S } = ef(), P = L.useRef(null);
  L.useEffect(() => {
    t === 0 && I(Zd(F));
  }, [t, F, I]);
  const C = Lt((se) => {
    ("decode" in se ? se.decode() : Promise.resolve()).catch(() => {
    }).then(() => {
      se.parentNode && (E(Hu), S(() => {
        c == null || c(se);
      }, 0));
    });
  }), T = L.useCallback((se) => {
    P.current = se, se != null && se.complete && C(se);
  }, [C]), A = L.useCallback((se) => {
    C(se.currentTarget);
  }, [C]), B = Lt(() => {
    E(Yp), d == null || d();
  }), U = wg(e, o), ne = (se, be) => Number.isFinite(se) ? se : be, K = ne(Math.max(...((m = (h = e.srcSet) === null || h === void 0 ? void 0 : h.map((se) => se.width)) !== null && m !== void 0 ? m : []).concat(e.width ? [e.width] : []).filter(Boolean)), ((g = P.current) === null || g === void 0 ? void 0 : g.naturalWidth) || 0), ae = ne(Math.max(...((b = (y = e.srcSet) === null || y === void 0 ? void 0 : y.map((se) => se.height)) !== null && b !== void 0 ? b : []).concat(e.height ? [e.height] : []).filter(Boolean)), ((_ = P.current) === null || _ === void 0 ? void 0 : _.naturalHeight) || 0), he = K && ae ? {
    maxWidth: `min(${K}px, 100%)`,
    maxHeight: `min(${ae}px, 100%)`
  } : {
    maxWidth: "100%",
    maxHeight: "100%"
  }, ge = (w = e.srcSet) === null || w === void 0 ? void 0 : w.slice().sort((se, be) => se.width - be.width).map((se) => `${se.src} ${se.width}w`).join(", "), Ne = () => r && !U && e.width && e.height ? r.height / e.height * e.width : Number.MAX_VALUE, ce = ge && r && bg() ? `${Math.round(Math.min(Ne(), r.width))}px` : void 0, { style: me, className: te, ...re } = (typeof s == "function" ? s(e) : s) || {};
  return L.createElement(
    L.Fragment,
    null,
    L.createElement("img", { ref: T, onLoad: A, onError: B, onClick: u, draggable: !1, className: Wr(Ct(Vp()), U && Ct(Vp("cover")), F !== Hu && Ct(Vp("loading")), te), style: { ...he, ...p, ...me }, ...re, alt: (k = e.alt) !== null && k !== void 0 ? k : "", sizes: ce, srcSet: ge, src: e.src }),
    F !== Hu && L.createElement(
      "div",
      { className: Ct(qp(aH)) },
      F === Uu && (n != null && n.iconLoading ? n.iconLoading() : L.createElement(FH, { className: Wr(Ct(em), Ct(qp(Uu))) })),
      F === Yp && (n != null && n.iconError ? n.iconError() : L.createElement($H, { className: Wr(Ct(em), Ct(qp(Yp))) }))
    )
  );
}
const zH = L.forwardRef(function({ className: t, children: n, onFocus: r, onBlur: o, ...s }, u) {
  const c = L.useRef(null), [d, p] = L.useState(!1), { trackFocusWithin: h } = kE(), m = Lt(() => {
    if (c.current) {
      const g = window.getComputedStyle(c.current).direction === "rtl";
      g !== d && p(g);
    }
  });
  return L.useEffect(m), L.createElement(
    CH,
    { nodeRef: c },
    L.createElement(
      IH,
      { isRTL: d },
      L.createElement("div", { ref: rm(u, c), className: Wr(Ct("root"), t), ...h(r, o), ...s }, n)
    )
  );
});
var Wn;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.SWIPE = 1] = "SWIPE", e[e.PULL = 2] = "PULL", e[e.ANIMATION = 3] = "ANIMATION";
})(Wn || (Wn = {}));
function FE(e, t, n, r, o) {
  L.useEffect(() => o ? () => {
  } : Qd(e(gE, t), e(vE, n), e(yE, r), e(bE, r), e(_E, r)), [e, t, n, r, o]);
}
var ta;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.SWIPE = 1] = "SWIPE", e[e.PULL = 2] = "PULL";
})(ta || (ta = {}));
const Gp = 30;
function UH({ disableSwipeNavigation: e, closeOnBackdropClick: t }, n, r, o, s, u, c, d, p, h, m, g, y, b, _, w) {
  const k = L.useRef(0), F = L.useRef([]), E = L.useRef(void 0), I = L.useRef(0), S = L.useRef(ta.NONE), P = L.useCallback((K) => {
    E.current === K.pointerId && (E.current = void 0, S.current = ta.NONE);
    const ae = F.current;
    ae.splice(0, ae.length, ...ae.filter((he) => he.pointerId !== K.pointerId));
  }, []), C = L.useCallback((K) => {
    P(K), K.persist(), F.current.push(K);
  }, [P]), T = L.useCallback((K) => F.current.find(({ pointerId: ae }) => K.pointerId === ae), []), A = Lt((K) => {
    C(K);
  }), B = (K, ae) => m && K > ae || h && K < -ae, U = Lt((K) => {
    const ae = T(K);
    if (ae)
      if (E.current === K.pointerId) {
        const he = Date.now() - I.current, ge = k.current;
        S.current === ta.SWIPE ? Math.abs(ge) > 0.3 * o || Math.abs(ge) > 5 && he < s ? d(ge, he) : p(ge) : S.current === ta.PULL && (B(ge, 2 * Gp) ? b(ge, he) : _(ge)), k.current = 0, S.current = ta.NONE;
      } else {
        const { target: he } = K;
        t && he instanceof HTMLElement && he === ae.target && (he.classList.contains(Ct(hg)) || he.classList.contains(Ct(mg))) && w();
      }
    P(K);
  }), ne = Lt((K) => {
    const ae = T(K);
    if (ae) {
      const he = E.current === K.pointerId;
      if (K.buttons === 0) {
        he && k.current !== 0 ? U(K) : P(ae);
        return;
      }
      const ge = K.clientX - ae.clientX, Ne = K.clientY - ae.clientY;
      if (E.current === void 0) {
        const ce = (me) => {
          C(K), E.current = K.pointerId, I.current = Date.now(), S.current = me;
        };
        Math.abs(ge) > Math.abs(Ne) && Math.abs(ge) > Gp && r(ge) ? e || (ce(ta.SWIPE), u()) : Math.abs(Ne) > Math.abs(ge) && B(Ne, Gp) && (ce(ta.PULL), g());
      } else he && (S.current === ta.SWIPE ? (k.current = ge, c(ge)) : S.current === ta.PULL && (k.current = Ne, y(Ne)));
    }
  });
  FE(n, A, ne, U);
}
function HH({ preventDefaultWheelX: e, preventDefaultWheelY: t }) {
  const n = L.useRef(null), r = Lt((o) => {
    const s = Math.abs(o.deltaX) > Math.abs(o.deltaY);
    (s && e || !s && t || o.ctrlKey) && o.preventDefault();
  });
  return L.useCallback((o) => {
    var s;
    o ? o.addEventListener("wheel", r, { passive: !1 }) : (s = n.current) === null || s === void 0 || s.removeEventListener("wheel", r), n.current = o;
  }, [r]);
}
function YH(e, t, n, r, o, s, u, c, d) {
  const p = L.useRef(0), h = L.useRef(0), m = L.useRef(void 0), g = L.useRef(void 0), y = L.useRef(0), b = L.useRef(void 0), _ = L.useRef(0), { setTimeout: w, clearTimeout: k } = ef(), F = L.useCallback(() => {
    m.current && (k(m.current), m.current = void 0);
  }, [k]), E = L.useCallback(() => {
    g.current && (k(g.current), g.current = void 0);
  }, [k]), I = Lt(() => {
    e !== Wn.SWIPE && (p.current = 0, _.current = 0, F(), E());
  });
  L.useEffect(I, [e, I]);
  const S = Lt((C) => {
    g.current = void 0, p.current === C && d(p.current);
  }), P = Lt((C) => {
    if (C.ctrlKey || Math.abs(C.deltaY) > Math.abs(C.deltaX))
      return;
    const T = (A) => {
      y.current = A, k(b.current), b.current = A > 0 ? w(() => {
        y.current = 0, b.current = void 0;
      }, 300) : void 0;
    };
    if (e === Wn.NONE) {
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
    } else if (e === Wn.SWIPE) {
      let A = p.current - C.deltaX;
      if (A = Math.min(Math.abs(A), r) * Math.sign(A), p.current = A, u(A), E(), Math.abs(A) > 0.2 * r) {
        T(C.deltaX), c(A, Date.now() - _.current);
        return;
      }
      g.current = w(() => S(A), 2 * o);
    } else
      T(C.deltaX);
  });
  L.useEffect(() => t(vg, P), [t, P]);
}
const v_ = yg("container"), $E = L.createContext(null), ho = ua("useController", "ControllerContext", $E);
function qH({ children: e, ...t }) {
  var n;
  const { carousel: r, animation: o, controller: s, on: u, styles: c, render: d } = t, { closeOnPullUp: p, closeOnPullDown: h, preventDefaultWheelX: m, preventDefaultWheelY: g } = s, [y, b] = L.useState(), _ = po(), w = TH(), [k, F] = L.useState(Wn.NONE), E = L.useRef(0), I = L.useRef(0), S = L.useRef(1), { registerSensors: P, subscribeSensors: C } = WH(), { subscribe: T, publish: A } = Ac(), B = Yu(), U = Yu(), ne = Yu(), { containerRef: K, setContainerRef: ae, containerRect: he } = Og(), ge = rm(HH({ preventDefaultWheelX: m, preventDefaultWheelY: g }), ae), Ne = L.useRef(null), ce = rm(Ne, void 0), { getOwnerDocument: me } = Qs(), te = Sg(), re = (Q) => (te ? -1 : 1) * (typeof Q == "number" ? Q : 1), se = Lt(() => {
    var Q;
    return (Q = K.current) === null || Q === void 0 ? void 0 : Q.focus();
  }), be = Lt(() => t), Oe = Lt(() => _), Ee = L.useCallback((Q) => A(vi, Q), [A]), fe = L.useCallback((Q) => A(yi, Q), [A]), Te = L.useCallback(() => A(Bs), [A]), De = (Q) => !(r.finite && (re(Q) > 0 && _.currentIndex === 0 || re(Q) < 0 && _.currentIndex === _.slides.length - 1)), W = (Q) => {
    var _e;
    E.current = Q, (_e = K.current) === null || _e === void 0 || _e.style.setProperty(sr("swipe_offset"), `${Math.round(Q)}px`);
  }, z = (Q) => {
    var _e, Ie;
    I.current = Q, S.current = (() => {
      const $e = h && Q > 0 ? Q : p && Q < 0 ? -Q : 0;
      return Math.min(Math.max(_g(1 - $e / 60 * (1 - 0.5), 2), 0.5), 1);
    })(), (_e = K.current) === null || _e === void 0 || _e.style.setProperty(sr("pull_offset"), `${Math.round(Q)}px`), (Ie = K.current) === null || Ie === void 0 || Ie.style.setProperty(sr("pull_opacity"), `${S.current}`);
  }, { prepareAnimation: $ } = h_(Ne, (Q, _e, Ie) => {
    if (Ne.current && he)
      return {
        keyframes: [
          {
            transform: `translate(0, ${Q.rect.y - _e.y + Ie.y}px)`,
            opacity: Q.opacity
          },
          { transform: "translate(0, 0)", opacity: 1 }
        ],
        duration: Q.duration,
        easing: o.easing.fade
      };
  }), M = (Q, _e) => {
    if (p || h) {
      z(Q);
      let Ie = 0;
      Ne.current && (Ie = o.fade * (_e ? 2 : 1), $({
        rect: Ne.current.getBoundingClientRect(),
        opacity: S.current,
        duration: Ie
      })), ne(() => {
        z(0), F(Wn.NONE);
      }, Ie), F(Wn.ANIMATION), _e || Te();
    }
  }, { prepareAnimation: V, isAnimationPlaying: G } = h_(Ne, (Q, _e, Ie) => {
    var Le;
    if (Ne.current && he && (!((Le = _.animation) === null || Le === void 0) && Le.duration)) {
      const Fe = dd(r.spacing), $e = (Fe.percent ? Fe.percent * he.width / 100 : Fe.pixel) || 0;
      return {
        keyframes: [
          {
            transform: `translate(${re(_.globalIndex - Q.index) * (he.width + $e) + Q.rect.x - _e.x + Ie.x}px, 0)`
          },
          { transform: "translate(0, 0)" }
        ],
        duration: _.animation.duration,
        easing: _.animation.easing
      };
    }
  }), ie = Lt((Q) => {
    var _e, Ie;
    const Le = Q.offset || 0, Fe = Le ? o.swipe : (_e = o.navigation) !== null && _e !== void 0 ? _e : o.swipe, $e = !Le && !G() ? o.easing.navigation : o.easing.swipe;
    let { direction: tt } = Q;
    const Xe = (Ie = Q.count) !== null && Ie !== void 0 ? Ie : 1;
    let Ke = Wn.ANIMATION, Ue = Fe * Xe;
    if (!tt) {
      const ve = he == null ? void 0 : he.width, Tt = Q.duration || 0, Pt = ve ? Fe / ve * Math.abs(Le) : Fe;
      Xe !== 0 ? (Tt < Pt ? Ue = Ue / Pt * Math.max(Tt, Pt / 5) : ve && (Ue = Fe / ve * (ve - Math.abs(Le))), tt = re(Le) > 0 ? vi : yi) : Ue = Fe / 2;
    }
    let xt = 0;
    tt === vi ? De(re(1)) ? xt = -Xe : (Ke = Wn.NONE, Ue = Fe) : tt === yi && (De(re(-1)) ? xt = Xe : (Ke = Wn.NONE, Ue = Fe)), Ue = Math.round(Ue), U(() => {
      W(0), F(Wn.NONE);
    }, Ue), Ne.current && V({
      rect: Ne.current.getBoundingClientRect(),
      index: _.globalIndex
    }), F(Ke), A(f_, {
      type: "swipe",
      increment: xt,
      duration: Ue,
      easing: $e
    });
  });
  L.useEffect(() => {
    var Q, _e;
    !((Q = _.animation) === null || Q === void 0) && Q.increment && (!((_e = _.animation) === null || _e === void 0) && _e.duration) && B(() => w({ type: "swipe", increment: 0 }), _.animation.duration);
  }, [_.animation, w, B]);
  const Pe = [
    C,
    De,
    (he == null ? void 0 : he.width) || 0,
    o.swipe,
    () => F(Wn.SWIPE),
    (Q) => W(Q),
    (Q, _e) => ie({ offset: Q, duration: _e, count: 1 }),
    (Q) => ie({ offset: Q, count: 0 })
  ], Z = [
    () => {
      h && F(Wn.PULL);
    },
    (Q) => z(Q),
    (Q) => M(Q),
    (Q) => M(Q, !0)
  ];
  UH(s, ...Pe, p, h, ...Z, Te), YH(k, ...Pe);
  const Se = Lt(() => {
    s.focus && me().querySelector(`.${Ct(pg)} .${Ct(v_())}`) && se();
  });
  L.useEffect(Se, [Se]);
  const le = Lt(() => {
    var Q;
    (Q = u.view) === null || Q === void 0 || Q.call(u, { index: _.currentIndex });
  });
  L.useEffect(le, [_.globalIndex, le]), L.useEffect(() => Qd(T(vi, (Q) => ie({ direction: vi, ...Q })), T(yi, (Q) => ie({ direction: yi, ...Q })), T(f_, (Q) => w(Q))), [T, ie, w]);
  const H = L.useMemo(() => ({
    prev: Ee,
    next: fe,
    close: Te,
    focus: se,
    slideRect: he ? gH(he, r.padding) : { width: 0, height: 0 },
    containerRect: he || { width: 0, height: 0 },
    subscribeSensors: C,
    containerRef: K,
    setCarouselRef: ce,
    toolbarWidth: y,
    setToolbarWidth: b
  }), [
    Ee,
    fe,
    Te,
    se,
    C,
    he,
    K,
    ce,
    y,
    b,
    r.padding
  ]);
  return L.useImperativeHandle(s.ref, () => ({
    prev: Ee,
    next: fe,
    close: Te,
    focus: se,
    getLightboxProps: be,
    getLightboxState: Oe
  }), [Ee, fe, Te, se, be, Oe]), L.createElement("div", { ref: ge, className: Wr(Ct(v_()), Ct(Xd)), style: {
    ...k === Wn.SWIPE ? { [sr("swipe_offset")]: `${Math.round(E.current)}px` } : null,
    ...k === Wn.PULL ? {
      [sr("pull_offset")]: `${Math.round(I.current)}px`,
      [sr("pull_opacity")]: `${S.current}`
    } : null,
    ...s.touchAction !== "none" ? { [sr("controller_touch_action")]: s.touchAction } : null,
    ...c.container
  }, tabIndex: -1, ...P }, he && L.createElement(
    $E.Provider,
    { value: H },
    e,
    (n = d.controls) === null || n === void 0 ? void 0 : n.call(d)
  ));
}
const VH = fo(fg, qH);
function hi(e) {
  return Ic(fE, e);
}
function y_(e) {
  return Ic(hg, e);
}
function GH({ slide: e, offset: t }) {
  const n = L.useRef(null), { currentIndex: r, slides: o } = po(), { slideRect: s, focus: u } = ho(), { render: c, carousel: { imageFit: d, imageProps: p }, on: { click: h }, styles: { slide: m }, labels: g } = Hn(), { getOwnerDocument: y } = Qs(), b = t !== 0;
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
  return L.createElement("div", { ref: n, className: Wr(Ct(y_()), !b && Ct(y_("current")), Ct(Xd)), ...wH(b), style: m, role: "group", "aria-roledescription": js(g, "Slide"), "aria-label": mH(g, o, r + t) }, _());
}
function KH() {
  const e = Hn().styles.slide;
  return L.createElement("div", { className: Ct(hg), style: e });
}
function ZH({ carousel: e, labels: t }) {
  const { slides: n, currentIndex: r, globalIndex: o } = po(), { setCarouselRef: s } = ho(), { autoPlaying: u, focusWithin: c } = kE(), d = dd(e.spacing), p = dd(e.padding), h = bH(e, n, 1), m = [];
  if (CE(n))
    for (let g = r - h; g <= r + h; g += 1) {
      const y = OE(n, g), b = o - r + g, _ = e.finite && (g < 0 || g > n.length - 1);
      m.push(_ ? { key: b } : {
        key: [`${b}`, yH(y)].filter(Boolean).join("|"),
        offset: g - r,
        slide: y
      });
    }
  return L.createElement("div", { ref: s, className: Wr(Ct(hi()), m.length > 0 && Ct(hi("with_slides"))), style: {
    [`${sr(hi("slides_count"))}`]: m.length,
    [`${sr(hi("spacing_px"))}`]: d.pixel || 0,
    [`${sr(hi("spacing_percent"))}`]: d.percent || 0,
    [`${sr(hi("padding_px"))}`]: p.pixel || 0,
    [`${sr(hi("padding_percent"))}`]: p.percent || 0
  }, role: "region", "aria-live": u && !c ? "off" : "polite", "aria-roledescription": js(t, "Carousel"), "aria-label": js(t, "Photo gallery") }, m.map(({ key: g, slide: y, offset: b }) => y ? L.createElement(GH, { key: g, slide: y, offset: b }) : L.createElement(KH, { key: g })));
}
const XH = fo(fE, ZH);
function BE() {
  const { carousel: e } = Hn(), { slides: t, currentIndex: n } = po(), r = t.length === 0 || e.finite && n === 0, o = t.length === 0 || e.finite && n === t.length - 1;
  return { prevDisabled: r, nextDisabled: o };
}
function QH(e) {
  var t;
  const n = Sg(), { publish: r } = Ac(), { animation: o, controller: s } = Hn(), { prevDisabled: u, nextDisabled: c } = BE(), d = ((t = o.navigation) !== null && t !== void 0 ? t : o.swipe) / 2, p = g_(() => r(vi), d), h = g_(() => r(yi), d), m = Lt((g) => {
    switch (g.key) {
      case dH:
        if (!s.closeOnEscape)
          return;
        r(Bs);
        break;
      case fH:
        (n ? c : u) || (n ? h : p)();
        break;
      case pH:
        (n ? u : c) || (n ? p : h)();
        break;
      default:
        return;
    }
    g.stopPropagation();
  });
  L.useEffect(() => e(gg, m), [e, m]);
}
function b_({ label: e, icon: t, renderIcon: n, action: r, onClick: o, disabled: s, style: u }) {
  return L.createElement(Rc, { label: e, icon: t, renderIcon: n, className: Ct(`navigation_${r}`), disabled: s, onClick: o, style: u, ...jH(ho().focus, s) });
}
function JH({ render: { buttonPrev: e, buttonNext: t, iconPrev: n, iconNext: r }, styles: o }) {
  const { prev: s, next: u, subscribeSensors: c } = ho(), { prevDisabled: d, nextDisabled: p } = BE();
  return QH(c), L.createElement(
    L.Fragment,
    null,
    e ? e() : L.createElement(b_, { label: "Previous", action: vi, icon: DH, renderIcon: n, style: o.navigationPrev, disabled: d, onClick: s }),
    t ? t() : L.createElement(b_, { label: "Next", action: yi, icon: LH, renderIcon: r, style: o.navigationNext, disabled: p, onClick: u })
  );
}
const eY = fo(J7, JH), __ = Ct(lH), tY = Ct(mE);
function nY(e) {
  return "style" in e;
}
function w_(e, t, n) {
  const r = window.getComputedStyle(e), o = n ? "padding-left" : "padding-right", s = n ? r.paddingLeft : r.paddingRight, u = e.style.getPropertyValue(o);
  return e.style.setProperty(o, `${(Jd(s) || 0) + t}px`), () => {
    u ? e.style.setProperty(o, u) : e.style.removeProperty(o);
  };
}
function rY({ noScroll: { disabled: e }, children: t }) {
  const n = Sg(), { getOwnerDocument: r, getOwnerWindow: o } = Qs();
  return L.useEffect(() => {
    if (e)
      return () => {
      };
    const s = [], u = o(), { body: c, documentElement: d } = r(), p = Math.round(u.innerWidth - d.clientWidth);
    if (p > 0) {
      s.push(w_(c, p, n));
      const h = c.getElementsByTagName("*");
      for (let m = 0; m < h.length; m += 1) {
        const g = h[m];
        nY(g) && u.getComputedStyle(g).getPropertyValue("position") === "fixed" && !g.classList.contains(tY) && s.push(w_(g, p, n));
      }
    }
    return c.classList.add(__), () => {
      c.classList.remove(__), s.forEach((h) => h());
    };
  }, [n, e, r, o]), L.createElement(L.Fragment, null, t);
}
const aY = fo(eH, rY);
function x_(e) {
  return Ic(pg, e);
}
function E_(e, t, n) {
  const r = e.getAttribute(t);
  return e.setAttribute(t, n), () => {
    r ? e.setAttribute(t, r) : e.removeAttribute(t);
  };
}
function oY({ portal: { root: e, container: { className: t, style: n, ...r } = {} }, animation: o, styles: s, className: u, on: c, close: d, labels: p, children: h }) {
  const [m, g] = L.useState(!1), [y, b] = L.useState(!1), _ = L.useRef([]), w = L.useRef(null), { setTimeout: k } = ef(), { subscribe: F } = Ac(), I = Cg() ? 0 : o.fade;
  L.useEffect(() => (g(!0), () => {
    g(!1), b(!1);
  }), []);
  const S = Lt(() => {
    _.current.forEach((A) => A()), _.current = [];
  }), P = Lt(() => {
    var A;
    b(!1), S(), (A = c.exiting) === null || A === void 0 || A.call(c), k(() => {
      var B;
      (B = c.exited) === null || B === void 0 || B.call(c), d();
    }, I);
  });
  L.useEffect(() => F(Bs, P), [F, P]);
  const C = Lt((A) => {
    var B, U, ne;
    SE(A), b(!0), (B = c.entering) === null || B === void 0 || B.call(c);
    const K = (ne = (U = A.parentNode) === null || U === void 0 ? void 0 : U.children) !== null && ne !== void 0 ? ne : [];
    for (let ae = 0; ae < K.length; ae += 1) {
      const he = K[ae];
      ["TEMPLATE", "SCRIPT", "STYLE"].indexOf(he.tagName) === -1 && he !== A && (_.current.push(E_(he, "inert", "")), _.current.push(E_(he, "aria-hidden", "true")));
    }
    _.current.push(() => {
      var ae, he;
      (he = (ae = w.current) === null || ae === void 0 ? void 0 : ae.focus) === null || he === void 0 || he.call(ae);
    }), k(() => {
      var ae;
      (ae = c.entered) === null || ae === void 0 || ae.call(c);
    }, I);
  }), T = L.useCallback((A) => {
    A ? C(A) : S();
  }, [C, S]);
  return m ? K_(L.createElement(zH, { ref: T, className: Wr(u, t, Ct(x_()), Ct(mE), y && Ct(x_("open"))), "aria-modal": !0, role: "dialog", "aria-label": js(p, "Lightbox"), style: {
    ...o.fade !== nm.animation.fade ? { [sr("fade_animation_duration")]: `${I}ms` } : null,
    ...o.easing.fade !== nm.animation.easing.fade ? { [sr("fade_animation_timing_function")]: o.easing.fade } : null,
    ...s.root,
    ...n
  }, onFocus: (A) => {
    w.current || (w.current = A.relatedTarget);
  }, ...r }, h), (typeof e == "function" ? e() : e) || document.body) : null;
}
const iY = fo(pg, oY);
function sY({ children: e }) {
  return L.createElement(L.Fragment, null, e);
}
const lY = fo(tH, sY);
function cY(e) {
  return Ic(pE, e);
}
function uY({ toolbar: { buttons: e }, render: { buttonClose: t, iconClose: n }, styles: r }) {
  const { close: o, setToolbarWidth: s } = ho(), { setContainerRef: u, containerRect: c } = Og();
  sa(() => {
    s(c == null ? void 0 : c.width);
  }, [s, c == null ? void 0 : c.width]);
  const d = () => t ? t() : L.createElement(Rc, { key: Bs, label: "Close", icon: MH, renderIcon: n, onClick: o });
  return L.createElement("div", { ref: u, style: r.toolbar, className: Ct(cY()) }, e == null ? void 0 : e.map((p) => p === Bs ? d() : p));
}
const dY = fo(pE, uY);
function jE(e, t) {
  var n;
  return L.createElement(e.module.component, { key: e.module.name, ...t }, (n = e.children) === null || n === void 0 ? void 0 : n.map((r) => jE(r, t)));
}
function fY(e, t = {}) {
  const { easing: n, ...r } = e, { easing: o, ...s } = t;
  return {
    easing: { ...n, ...o },
    ...r,
    ...s
  };
}
function WE({ carousel: e, animation: t, render: n, toolbar: r, controller: o, noScroll: s, on: u, plugins: c, slides: d, index: p, ...h }) {
  const { animation: m, carousel: g, render: y, toolbar: b, controller: _, noScroll: w, on: k, slides: F, index: E, plugins: I, ...S } = nm, { config: P, augmentation: C } = xH([
    Rn(iY, [
      Rn(aY, [
        Rn(VH, [
          Rn(XH),
          Rn(dY),
          Rn(eY)
        ])
      ])
    ])
  ], c || I), T = C({
    animation: fY(m, t),
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
    SH,
    { ...T },
    L.createElement(
      kH,
      { slides: d || F, index: Jd(p || E) },
      L.createElement(
        AH,
        null,
        L.createElement(
          OH,
          null,
          L.createElement(EH, null, jE(Rn(lY, P), T))
        )
      )
    )
  ) : null;
}
const pY = {
  download: void 0
}, zE = (e) => ({
  ...pY,
  ...e
});
function hY(e) {
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
function mY(e) {
  var t, n;
  return (n = (t = /^content-disposition:(.*)$/im.exec(e.getAllResponseHeaders())) === null || t === void 0 ? void 0 : t[1]) !== null && n !== void 0 ? n : null;
}
function gY(e, t) {
  const n = new XMLHttpRequest();
  n.open("GET", e), n.responseType = "blob", n.onload = () => {
    am(n.response, t || hY(mY(n)));
  }, n.onerror = () => {
    console.error("Failed to download file");
  }, n.send();
}
function vY(e) {
  const t = new XMLHttpRequest();
  t.open("HEAD", e, !1);
  try {
    t.send();
  } catch {
  }
  return t.status >= 200 && t.status <= 299;
}
function Kp(e) {
  try {
    e.dispatchEvent(new MouseEvent("click"));
  } catch {
    const n = document.createEvent("MouseEvents");
    n.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), e.dispatchEvent(n);
  }
}
function am(e, t) {
  const n = document.createElement("a");
  n.rel = "noopener", n.download = t || "", n.download || (n.target = "_blank"), typeof e == "string" ? (n.href = e, n.origin !== window.location.origin ? vY(n.href) ? gY(e, t) : (n.target = "_blank", Kp(n)) : Kp(n)) : (n.href = URL.createObjectURL(e), setTimeout(() => URL.revokeObjectURL(n.href), 3e4), setTimeout(() => Kp(n), 0));
}
const yY = Aa("DownloadIcon", L.createElement("path", { d: "M18 15v3H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2zm-1-4-1.41-1.41L13 12.17V4h-2v8.17L8.41 9.59 7 11l5 5 5-5z" }));
function bY() {
  const { render: e, on: t, download: n } = Hn(), { download: r } = zE(n), { currentSlide: o, currentIndex: s } = po();
  if (e.buttonDownload)
    return L.createElement(L.Fragment, null, e.buttonDownload());
  const u = o && (o.downloadUrl || typeof o.download == "string" && o.download || typeof o.download == "object" && o.download.url || Ko(o) && o.src) || void 0, c = r ? (o == null ? void 0 : o.download) !== !1 : !!u, d = () => {
    if (o && u) {
      const h = o.downloadFilename || typeof o.download == "object" && o.download.filename || void 0;
      am(u, h);
    }
  }, p = () => {
    var h;
    o && ((r || d)({ slide: o, saveAs: am }), (h = t.download) === null || h === void 0 || h.call(t, { index: s }));
  };
  return L.createElement(Rc, { label: "Download", icon: yY, renderIcon: e.iconDownload, disabled: !c, onClick: p });
}
function om({ augment: e }) {
  e(({ toolbar: t, download: n, ...r }) => ({
    toolbar: Eg(t, nH, L.createElement(bY, null)),
    download: zE(n),
    ...r
  }));
}
const _Y = {
  auto: !1,
  ref: null
}, UE = (e) => ({
  ..._Y,
  ...e
}), HE = L.createContext(null), wY = ua("useFullscreen", "FullscreenContext", HE);
function xY({ fullscreen: e, on: t, children: n }) {
  const { auto: r, ref: o } = UE(e), s = L.useRef(null), [u, c] = L.useState(), [d, p] = L.useState(!1), h = L.useRef(!1), { getOwnerDocument: m } = Qs();
  sa(() => {
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
  const _ = Lt(() => {
    var E;
    return (E = t.enterFullscreen) === null || E === void 0 ? void 0 : E.call(t);
  }), w = Lt(() => {
    var E;
    return (E = t.exitFullscreen) === null || E === void 0 ? void 0 : E.call(t);
  });
  L.useEffect(() => {
    d && (h.current = !0), h.current && (d ? _ : w)();
  }, [d, _, w]);
  const k = Lt(() => {
    var E;
    return (E = r ? y : null) === null || E === void 0 || E(), b;
  });
  L.useEffect(k, [k]);
  const F = L.useMemo(() => ({ fullscreen: d, disabled: u, enter: y, exit: b }), [d, u, y, b]);
  return L.useImperativeHandle(o, () => F, [F]), L.createElement(
    "div",
    { ref: s, className: Wr(Ct(Jh), Ct(hE)) },
    L.createElement(HE.Provider, { value: F }, n)
  );
}
const EY = Aa("EnterFullscreen", L.createElement("path", { d: "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" })), CY = Aa("ExitFullscreen", L.createElement("path", { d: "M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" }));
function OY() {
  var e;
  const { fullscreen: t, disabled: n, enter: r, exit: o } = wY(), { render: s } = Hn();
  return n ? null : s.buttonFullscreen ? L.createElement(L.Fragment, null, (e = s.buttonFullscreen) === null || e === void 0 ? void 0 : e.call(s, { fullscreen: t, disabled: n, enter: r, exit: o })) : L.createElement(Rc, { disabled: n, label: t ? "Exit Fullscreen" : "Enter Fullscreen", icon: t ? CY : EY, renderIcon: t ? s.iconExitFullscreen : s.iconEnterFullscreen, onClick: t ? o : r });
}
function YE({ augment: e, contains: t, addParent: n }) {
  e(({ fullscreen: r, toolbar: o, ...s }) => ({
    toolbar: Eg(o, Jh, L.createElement(OY, null)),
    fullscreen: UE(r),
    ...s
  })), n(t(u_) ? u_ : fg, fo(Jh, xY));
}
const SY = {
  controls: !0,
  playsInline: !0
}, qE = (e) => ({
  ...SY,
  ...e
});
function TY() {
  const { video: e } = Hn();
  return qE(e);
}
function PY() {
  var e;
  return ((e = navigator.userAgentData) === null || e === void 0 ? void 0 : e.brands.some(({ brand: t }) => t === "Chromium")) || !!window.chrome;
}
function kY() {
  return /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent);
}
function NY({ slide: e, offset: t }) {
  const n = TY(), { publish: r } = Ac(), { setContainerRef: o, containerRect: s, containerRef: u } = Og(), { getOwnerDocument: c } = Qs(), { animation: d } = Hn(), p = L.useRef(null), h = L.useRef(!1);
  L.useEffect(() => {
    t !== 0 && p.current && !p.current.paused && p.current.pause();
  }, [t]), L.useEffect(() => {
    t === 0 && p.current && (e.autoPlay || n.autoPlay) && (r(oH), p.current.play().catch(() => {
    }));
  }, [t, n.autoPlay, e.autoPlay, r]);
  const m = Lt(() => {
    const P = setTimeout(() => {
      if (u.current) {
        const C = u.current.style.border;
        u.current.style.border = "1px solid transparent", SE(u.current), u.current.style.border = C;
      }
    }, Math.max(d.swipe, d.navigation || 0) + 50);
    return () => clearTimeout(P);
  });
  L.useEffect(() => {
    if (PY() && t === 0)
      return m();
  }, [t, m]);
  const g = Lt((P) => {
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
  }, className: Wr(Ct("video_container"), Ct(Xd), Ct(mg)) }, s && L.createElement("video", { ref: y, poster: w, ...F(), ...E("controls"), ...E("playsInline"), ...E("loop"), ...E("muted"), ...E("playsInline"), ...E("disablePictureInPicture"), ...E("disableRemotePlayback"), ...I("controlsList"), ...I("crossOrigin"), ...I("preload"), onPlay: () => {
    var P;
    if (t !== 0) {
      (P = p.current) === null || P === void 0 || P.pause();
      return;
    }
    r(iH);
  }, onEnded: () => {
    r(sH);
  }, onWheel: S, onKeyDown: S, onPointerDown: (P) => {
    S(P), kY() && p.current && p.current.getBoundingClientRect().bottom - P.clientY < 40 && P.stopPropagation();
  } }, k.map(({ src: P, type: C, media: T }) => L.createElement("source", { key: [P, C, T].filter(Boolean).join("|"), src: P, type: C, media: T })))));
}
function IY(e) {
  return e.type === "video";
}
function C_({ augment: e }) {
  e(({ render: { slide: t, ...n }, video: r, ...o }) => ({
    render: {
      slide: ({ slide: s, offset: u, rect: c }) => {
        var d;
        return IY(s) ? L.createElement(NY, { key: (d = s.sources) === null || d === void 0 ? void 0 : d.map((p) => p.src).join("|"), slide: s, offset: u }) : t == null ? void 0 : t({ slide: s, offset: u, rect: c });
      },
      ...n
    },
    video: qE(r),
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
function AY(e) {
  return Math.min(Math.max(e, Number.EPSILON), 1);
}
function GE(e) {
  const { minZoom: t, ...n } = { ...VE, ...e };
  return { minZoom: AY(t), ...n };
}
function RY(e, t, n, r) {
  const o = L.useRef(void 0), s = L.useRef(void 0), { zoom: u } = Hn().animation, c = Cg(), d = Lt(() => {
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
  return sa(d, [e, t, n, d]), L.useCallback(() => {
    s.current = r != null && r.current ? window.getComputedStyle(r.current).transform : void 0;
  }, [r]);
}
function MY(e, t) {
  const { on: n } = Hn(), r = Lt(() => {
    var o;
    t || (o = n.zoom) === null || o === void 0 || o.call(n, { zoom: e });
  });
  L.useEffect(r, [e, r]);
}
function tf() {
  const { zoom: e } = Hn();
  return GE(e);
}
function DY(e, t) {
  var n;
  const r = typeof e == "function" ? (n = e(t)) !== null && n !== void 0 ? n : VE.maxZoom : e;
  return Math.max(r, 1);
}
function LY(e, t) {
  var n, r;
  let o = { width: 0, height: 0 }, s = { width: 0, height: 0 };
  const { currentSlide: u } = po(), { imageFit: c } = Hn().carousel, { maxZoomPixelRatio: d, maxZoom: p } = tf();
  if (e && u) {
    const m = { ...u, ...t };
    if (Ko(m)) {
      const g = wg(m, c), y = Math.max(...(((n = m.srcSet) === null || n === void 0 ? void 0 : n.map((_) => _.width)) || []).concat(m.width ? [m.width] : [])), b = Math.max(...(((r = m.srcSet) === null || r === void 0 ? void 0 : r.map((_) => _.height)) || []).concat(m.height ? [m.height] : []));
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
  const h = u && o.width ? Ko(u) ? Math.max(_g(s.width / o.width, 5), 1) : DY(p, u) : 1;
  return { imageRect: o, maxZoom: h };
}
function O_(e, t) {
  return Math.hypot(e.clientX - t.clientX, e.clientY - t.clientY);
}
function S_(e, t, n = 100, r = 2) {
  return e * Math.min(1 + Math.abs(t / n), r) ** Math.sign(t);
}
function FY(e, t, n, r, o, s, u, c, d) {
  const p = L.useRef([]), h = L.useRef(0), m = L.useRef(void 0), { globalIndex: g } = po(), { getOwnerWindow: y } = Qs(), { containerRef: b, subscribeSensors: _ } = ho(), { keyboardMoveDistance: w, zoomInMultiplier: k, wheelZoomDistanceFactor: F, scrollToZoom: E, doubleTapDelay: I, doubleClickDelay: S, doubleClickMaxStops: P, pinchZoomDistanceFactor: C, pinchZoomV4: T } = tf(), A = L.useCallback((ce) => {
    if (b.current) {
      const { pageX: me, pageY: te } = ce, { scrollX: re, scrollY: se } = y(), { left: be, top: Oe, width: Ee, height: fe } = b.current.getBoundingClientRect();
      return [me - be - re - Ee / 2, te - Oe - se - fe / 2];
    }
    return [];
  }, [b, y]), B = Lt((ce) => {
    const { key: me, metaKey: te, ctrlKey: re } = ce, se = te || re, be = () => {
      ce.preventDefault(), ce.stopPropagation();
    };
    if (e > 1) {
      const Oe = (Ee, fe) => {
        be(), c(Ee, fe);
      };
      me === "ArrowDown" ? Oe(0, w) : me === "ArrowUp" ? Oe(0, -w) : me === "ArrowLeft" ? Oe(-w, 0) : me === "ArrowRight" && Oe(w, 0);
    }
    me === "+" || se && me === "=" ? (be(), o()) : me === "-" || se && me === "_" ? (be(), s()) : se && me === "0" && (be(), u(1));
  }), U = Lt((ce) => {
    if ((ce.ctrlKey || E) && Math.abs(ce.deltaY) > Math.abs(ce.deltaX)) {
      ce.stopPropagation(), u(S_(e, -ce.deltaY, F), !0, ...A(ce));
      return;
    }
    e > 1 && (ce.stopPropagation(), E || c(ce.deltaX, ce.deltaY));
  }), ne = L.useCallback((ce) => {
    const me = p.current;
    me.splice(0, me.length, ...me.filter((te) => te.pointerId !== ce.pointerId));
  }, []), K = L.useCallback((ce) => {
    ne(ce), ce.persist(), p.current.push(ce);
  }, [ne]), ae = Lt((ce) => {
    var me;
    const te = p.current;
    if (ce.pointerType === "mouse" && ce.buttons > 1 || !(!((me = d == null ? void 0 : d.current) === null || me === void 0) && me.contains(ce.target)))
      return;
    e > 1 && ce.stopPropagation();
    const { timeStamp: re } = ce;
    if (te.length === 0 && re - h.current < (ce.pointerType === "touch" ? I : S)) {
      h.current = 0;
      const se = e >= 1 ? e !== n ? e * Math.max(n ** (1 / P), k) : 1 : e !== t ? e / Math.max(t ** (-1 / P), k) : 1;
      u(se, !1, ...A(ce));
    } else
      h.current = re;
    if (K(ce), te.length === 2) {
      const se = O_(te[0], te[1]);
      m.current = {
        previousDistance: se,
        initialDistance: Math.max(se, 1),
        initialZoom: e
      };
    }
  }), he = Lt((ce) => {
    const me = p.current, te = me.find((re) => re.pointerId === ce.pointerId);
    if (me.length === 2 && m.current) {
      ce.stopPropagation(), K(ce);
      const re = O_(me[0], me[1]), se = T ? m.current.initialZoom / m.current.initialDistance * re : S_(e, re - m.current.previousDistance, C);
      u(se, !0, ...me.map((be) => A(be)).reduce((be, Oe) => Oe.map((Ee, fe) => be[fe] + Ee / 2))), m.current.previousDistance = re;
      return;
    }
    e > 1 && (ce.stopPropagation(), te && (me.length === 1 && c((te.clientX - ce.clientX) / e, (te.clientY - ce.clientY) / e), K(ce)));
  }), ge = L.useCallback((ce) => {
    const me = p.current;
    me.length === 2 && me.find((te) => te.pointerId === ce.pointerId) && (m.current = void 0), ne(ce);
  }, [ne]), Ne = L.useCallback(() => {
    const ce = p.current;
    ce.splice(0, ce.length), h.current = 0, m.current = void 0;
  }, []);
  FE(_, ae, he, ge, r), L.useEffect(Ne, [g, Ne]), L.useEffect(() => r ? () => {
  } : Qd(Ne, _(gg, B), _(vg, U)), [r, _, Ne, B, U]);
}
function $Y(e, t, n) {
  const [r, o] = L.useState(1), [s, u] = L.useState(0), [c, d] = L.useState(0), p = RY(r, s, c, n), { currentSlide: h, globalIndex: m } = po(), { containerRect: g, slideRect: y } = ho(), { minZoom: b, zoomInMultiplier: _ } = tf(), w = h && Ko(h) ? h.src : void 0, k = !(n != null && n.current);
  sa(() => {
    o(1), u(0), d(0);
  }, [m, w]);
  const F = L.useCallback((C, T, A) => {
    const B = A || r, U = s - (C || 0), ne = c - (T || 0), K = (e.width * B - y.width) / 2 / B, ae = (e.height * B - y.height) / 2 / B;
    u(Math.min(Math.abs(U), Math.max(K, 0)) * Math.sign(U)), d(Math.min(Math.abs(ne), Math.max(ae, 0)) * Math.sign(ne));
  }, [r, s, c, y, e.width, e.height]), E = L.useCallback((C, T, A, B) => {
    const U = _g(C + 0.01 < t ? C - 0.01 > b ? C : b : t, 5);
    T || p(), F(A ? A * (1 / r - 1 / U) : 0, B ? B * (1 / r - 1 / U) : 0, U), o(U);
  }, [r, b, t, F, p]), I = Lt(() => {
    r > 1 && (r > t && E(t, !0), F());
  });
  sa(I, [g.width, g.height, I]);
  const S = L.useCallback(() => {
    const C = r * _;
    E(r < 1 && C > 1 ? 1 : C);
  }, [r, _, E]), P = L.useCallback(() => {
    const C = r / _;
    E(r > 1 && C < 1 ? 1 : C);
  }, [r, _, E]);
  return { zoom: r, offsetX: s, offsetY: c, disabled: k, changeOffsets: F, changeZoom: E, zoomIn: S, zoomOut: P };
}
const KE = L.createContext(null), Tg = ua("useZoom", "ZoomControllerContext", KE);
function BY({ children: e }) {
  const [t, n] = L.useState(), { slideRect: r } = ho(), { ref: o, minZoom: s } = tf(), { imageRect: u, maxZoom: c } = LY(r, t == null ? void 0 : t.imageDimensions), { zoom: d, offsetX: p, offsetY: h, disabled: m, changeZoom: g, changeOffsets: y, zoomIn: b, zoomOut: _ } = $Y(u, c, t == null ? void 0 : t.zoomWrapperRef);
  MY(d, m), FY(d, s, c, m, b, _, g, y, t == null ? void 0 : t.zoomWrapperRef);
  const w = L.useMemo(() => ({ zoom: d, minZoom: s, maxZoom: c, offsetX: p, offsetY: h, disabled: m, zoomIn: b, zoomOut: _, changeZoom: g }), [d, s, c, p, h, m, b, _, g]);
  L.useImperativeHandle(o, () => w, [w]);
  const k = L.useMemo(() => ({ ...w, setZoomWrapper: n }), [w, n]);
  return L.createElement(KE.Provider, { value: k }, e);
}
const jY = Aa("ZoomIn", L.createElement(
  L.Fragment,
  null,
  L.createElement("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" }),
  L.createElement("path", { d: "M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" })
)), WY = Aa("ZoomOut", L.createElement("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z" })), T_ = L.forwardRef(function({ zoomIn: t, onLoseFocus: n }, r) {
  const o = L.useRef(!1), s = L.useRef(!1), { zoom: u, minZoom: c, maxZoom: d, zoomIn: p, zoomOut: h, disabled: m } = Tg(), { render: g } = Hn(), y = m || (t ? u >= d : u <= c);
  return L.useEffect(() => {
    y && o.current && s.current && n(), y || (o.current = !0);
  }, [y, n]), L.createElement(Rc, { ref: r, disabled: y, label: t ? "Zoom in" : "Zoom out", icon: t ? jY : WY, renderIcon: t ? g.iconZoomIn : g.iconZoomOut, onClick: t ? p : h, onFocus: () => {
    s.current = !0;
  }, onBlur: () => {
    s.current = !1;
  } });
});
function zY() {
  const e = L.useRef(null), t = L.useRef(null), { focus: n } = ho(), r = L.useCallback((u) => {
    var c, d;
    !((c = u.current) === null || c === void 0) && c.disabled ? n() : (d = u.current) === null || d === void 0 || d.focus();
  }, [n]), o = L.useCallback(() => r(e), [r]), s = L.useCallback(() => r(t), [r]);
  return L.createElement(
    L.Fragment,
    null,
    L.createElement(T_, { zoomIn: !0, ref: e, onLoseFocus: s }),
    L.createElement(T_, { ref: t, onLoseFocus: o })
  );
}
function UY() {
  const { render: e } = Hn(), t = Tg();
  return e.buttonZoom ? L.createElement(L.Fragment, null, e.buttonZoom(t)) : L.createElement(zY, null);
}
function HY(e) {
  var t;
  return (((t = e.srcSet) === null || t === void 0 ? void 0 : t.length) || 0) > 0;
}
function YY({ current: e, preload: t }, { type: n, source: r }) {
  switch (n) {
    case "fetch":
      return e ? { current: e, preload: r } : { current: r };
    case "done":
      return r === t ? { current: r } : { current: e, preload: t };
    default:
      throw new Error(xE);
  }
}
function qY(e) {
  var t, n;
  const [{ current: r, preload: o }, s] = L.useReducer(YY, {}), { slide: u, rect: c, imageFit: d, render: p, interactive: h } = e, m = u.srcSet.sort((S, P) => S.width - P.width), g = (t = u.width) !== null && t !== void 0 ? t : m[m.length - 1].width, y = (n = u.height) !== null && n !== void 0 ? n : m[m.length - 1].height, b = wg(u, d), _ = Math.max(...m.map((S) => S.width)), w = Math.min((b ? Math.max : Math.min)(c.width, g * (c.height / y)), _), k = vH(), F = Lt(() => {
    var S;
    const P = (S = m.find((C) => C.width >= w * k)) !== null && S !== void 0 ? S : m[m.length - 1];
    (!r || m.findIndex((C) => C.src === r) < m.findIndex((C) => C === P)) && s({ type: "fetch", source: P.src });
  });
  sa(F, [c.width, c.height, k, F]);
  const E = Lt((S) => s({ type: "done", source: S })), I = {
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
function VY({ render: e, slide: t, offset: n, rect: r }) {
  var o;
  const [s, u] = L.useState(), c = L.useRef(null), d = Ko(t), { zoom: p, maxZoom: h, offsetX: m, offsetY: g, setZoomWrapper: y } = Tg(), b = p > 1, { carousel: _, on: w } = Hn(), { currentIndex: k } = po();
  sa(() => {
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
  }, [n, d, r]), sa(() => n === 0 ? (y({ zoomWrapperRef: c, imageDimensions: s }), () => y(void 0)) : () => {
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
    F = HY(t) ? L.createElement(qY, { ...E, slide: t, interactive: b, rect: n === 0 ? { width: r.width * p, height: r.height * p } : r }) : L.createElement(fd, { onLoad: (I) => u({ width: I.naturalWidth, height: I.naturalHeight }), ...E });
  }
  return F ? L.createElement("div", { ref: c, className: Wr(Ct(hE), Ct(Xd), Ct(mg), b && Ct(cH)), style: n === 0 ? { transform: `scale(${p}) translateX(${m}px) translateY(${g}px)` } : void 0 }, F) : null;
}
const ZE = ({ augment: e, addModule: t }) => {
  e(({ zoom: n, toolbar: r, render: o, controller: s, ...u }) => {
    const c = GE(n);
    return {
      zoom: c,
      toolbar: Eg(r, d_, L.createElement(UY, null)),
      render: {
        ...o,
        slide: (d) => {
          var p, h;
          return Ko(d.slide) || d.slide.type != null && (!((p = c.supports) === null || p === void 0) && p.includes(d.slide.type)) ? L.createElement(VY, { render: o, ...d }) : (h = o.slide) === null || h === void 0 ? void 0 : h.call(o, d);
        }
      },
      controller: { ...s, preventDefaultWheelY: c.scrollToZoom },
      ...u
    };
  }), t(fo(d_, BY));
}, im = ({ imageUrl: e, isOpen: t = !1, onClose: n = () => {
}, downloadFileFetcher: r }) => {
  const [o, s] = it(null), [u, c] = it(0);
  Xt(() => {
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
    WE,
    {
      open: t,
      plugins: [YE, om, ZE],
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
          /* @__PURE__ */ O("button", { type: "button", className: "yarl__button", onClick: d, children: /* @__PURE__ */ O(ud, { icon: X7, size: "xl" }) }, "rotate-left"),
          /* @__PURE__ */ O("button", { type: "button", className: "yarl__button", onClick: p, children: /* @__PURE__ */ O(ud, { icon: Q7, size: "xl" }) }, "rotate-right"),
          "zoom",
          "download",
          "fullscreen",
          "close"
        ]
      }
    }
  );
};
im.propTypes = {
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
  mergeConfig: U = null,
  downloadFileFetcher: ne
}) => {
  const [K, ae] = it({}), [he, ge] = it({ isOpen: !1, src: null });
  Xt(() => {
    ae({}), p([]), m([]);
  }, [u]), Xt(() => {
    const $ = R.map(g, (M) => M[t[0].key]);
    c(g), p(g), m($);
  }, [g]);
  const Ne = ($, M) => {
    o && o($, M);
  }, ce = ($, M) => {
    let V = [], G = [];
    R.includes(h, $[M]) ? (V = R.reject(d, (ie) => R.isEqual(ie[M], $[M])), G = R.reject(h, (ie) => R.isEqual(ie, $[M]))) : (V = [...d, $], G = [...h, $[M]]), m(G), p(V), c(V), y(V.length === w);
  }, me = ($) => {
    Ne("onClick", $), ae($);
  }, te = ($, M) => {
    if (R.isEmpty($))
      return null;
    if (e) {
      const G = $.match(/.{1,60}/g) || [$];
      return R.map(G, (ie, Pe) => /* @__PURE__ */ O("div", { children: ie }, Pe));
    }
    const V = /* @__PURE__ */ O("span", { className: nn.icon, children: /* @__PURE__ */ O(
      Fn,
      {
        position: "bottom right",
        content: /* @__PURE__ */ O("div", { className: nn.popupContent, children: $ }),
        trigger: /* @__PURE__ */ O(We, { name: "comment alternate outline", style: { color: "#286b92" } })
      }
    ) }, 1);
    return M >= $.length ? $ : /* @__PURE__ */ O("div", { className: nn.noWrap, children: [`${$.slice(0, M)}...`, V] });
  }, re = ($, M) => {
    if (R.isEmpty($)) return null;
    let V = $;
    if (typeof $[0] == "object" && (V = R.map($, (Pe) => Pe[M.split(",")[1]])), e)
      return V.join(", ");
    const G = R.map(V, (Pe, Z) => /* @__PURE__ */ O("div", { className: nn.arrayCell, children: Pe }, Z)), ie = /* @__PURE__ */ O("span", { className: nn.icon, children: /* @__PURE__ */ O(
      Fn,
      {
        position: "bottom right",
        content: /* @__PURE__ */ O("div", { className: nn.popupContent, children: G }),
        trigger: /* @__PURE__ */ O(We, { name: "comment alternate outline", style: { color: "#286b92" } })
      }
    ) }, 1);
    return V.length === 1 ? V : [`${V[0]}...`, ie];
  }, se = ($, M, V = "") => {
    const G = new Date($), ie = new Date(M);
    let Pe = /* @__PURE__ */ new Date();
    R.isEmpty(V) || (Pe = new Date(V));
    const Z = ie - G, Se = Pe - G;
    if (Z <= 0 || Se >= Z)
      return 100;
    const le = Se / Z * 100;
    return parseInt(le.toFixed(0), 10);
  }, be = ($, M, V, G, ie, Pe) => {
    let Z = "#2483bb";
    if (M) {
      const Se = M[0];
      if (Se)
        if (Se.colorKey)
          G && (Z = Zt(Se.colorKey, G));
        else
          for (const le of M)
            le.onName === $ ? Z = le.color : le.default && (Z = le.default);
    }
    return V ? /* @__PURE__ */ O(
      mt,
      {
        style: { backgroundColor: Z },
        className: nn.ButtonLabel,
        onClick: () => typeof V == "function" ? V(G) : Ne(V, G),
        fluid: !0,
        children: R.isEmpty(ie) ? String($) : Pl($, ie)
      }
    ) : $ ? /* @__PURE__ */ O(mt, { style: { backgroundColor: Z, color: Pe }, className: nn.ButtonLabel, fluid: !0, children: R.isEmpty(ie) ? String($) : Pl($, ie) }) : null;
  }, Oe = ($, M, V, G) => {
    let ie = se($, M);
    V(G) !== void 0 && (ie = se($, M, V(G)));
    let Pe = "#01C875";
    return ie >= 90 && (Pe = "#FDAB3D"), ie === 100 && (Pe = "#E2445B"), /* @__PURE__ */ oe("div", { children: [
      /* @__PURE__ */ O("div", { className: nn.progressBarLabel, children: `${Lr(M, !1, !1, !0)} ${ie}%` }),
      /* @__PURE__ */ O(
        Wz,
        {
          isLabelVisible: !1,
          animateOnRender: !0,
          width: "11rem",
          completed: ie,
          maxCompleted: 100,
          baseBgColor: "silver",
          bgColor: Pe
        }
      )
    ] });
  }, Ee = ($, M) => {
    if (!R.includes($, "[]?")) return R.get(M, $);
    const [V, G] = $.replace("[]?", "").split("."), ie = R.get(M, V, []);
    return R.isArray(ie) ? R.filter(
      R.map(ie, (Pe) => R.get(Pe, G)),
      Boolean
    ) : [];
  }, fe = ({
    format: $,
    value: M,
    key: V,
    endDate: G,
    boolLabels: ie,
    /* 	colorLabel, */
    translate: Pe,
    /* onClick,
    labelData, */
    /* 	onKeyEndDate, */
    sum: Z,
    colorLabel: Se,
    onClick: le,
    widthZero: H,
    nullToZero: Q,
    stringLength: _e,
    rowData: Ie,
    textColor: Le,
    stopDateHandler: Fe
  }) => {
    switch ($) {
      case "timeBetween":
        return Ox(M, G);
      case "date":
        return Lr(M, !1, !1, !1);
      case "dateM":
        return Lr(M, !1, !1, !1);
      case "dateDMY":
        return Lr(M, !1, !1, !1, !1, !1, !0);
      case "time":
        return Lr(M, !1, !0, !1);
      case "dateTime":
        return Lr(M, !1, !1, !0);
      case "dateTimeBar":
        return Oe(M, G, Fe, Ie);
      case "dateTimeDay":
        return Lr(M, !1, !1, !1, !0);
      case "dateMonthYear":
        return Lr(M, !1, !1, !1, !1, !0);
      case "pastDays":
        return Mz(M);
      case "phone":
        return Az(M);
      case "currency":
        return A0(M, !1, H, Q);
      case "decimal":
        return Rz(M, H, Q);
      case "integerCurrency":
        return A0(M, !0, H, Q);
      case "number":
        return Number.isNaN(M) || M === null ? "" : Number(M).toLocaleString("en-US");
      case "blankZero": {
        if (R.isArray(M) || typeof M == "string") {
          const $e = M ? M.length : 0;
          return $e === 0 ? "" : $e;
        }
        return M === 0 ? "" : M;
      }
      case "count":
        return M ? M.length : 0;
      case "boolean":
        return Z ? M : ie ? M ? ie.true || "si" : ie.false || "no" : M ? "si" : "no";
      case "translate":
        return Pl(M, Pe);
      case "truncate":
        return te(M, _e);
      case "array":
        return R.map(M, (tt) => /* @__PURE__ */ O("div", { children: Zt(V.split(",")[1], tt) }));
      case "colorLabel":
        return Te(M, Le);
      case "arrayTruncate": {
        const $e = V.includes("[]?") ? Ee(V, Ie) : M;
        return re($e, V);
      }
      case "label":
        return be(M, Se, le, Ie, Pe, Le);
      case "coloredText": {
        let $e = "inherit";
        if (Se)
          for (const Xe of Se)
            Xe.onName === M ? $e = Xe.color : Xe.default && $e === "inherit" && ($e = Xe.default);
        const tt = R.isEmpty(Pe) ? String(M) : Pl(M, Pe);
        return /* @__PURE__ */ O("span", { style: { color: $e, fontWeight: 500 }, children: tt });
      }
      case "longText":
        return te(M, _e);
      case "image":
        return M ? /* @__PURE__ */ O(
          We,
          {
            name: "image",
            size: "small",
            style: { maxWidth: "50px", maxHeight: "50px", cursor: "pointer" },
            onClick: () => {
              ge({
                isOpen: !0,
                src: M
              });
            }
          }
        ) : null;
      default:
        return M;
    }
  }, Te = ($, M) => $ === "En Línea" && M !== "string" ? /* @__PURE__ */ O("div", { style: { color: "hsl(130, 92.00%, 34.10%)" }, children: $ }) : /* @__PURE__ */ O("div", { className: nn.labelColor, style: { color: "#000000" }, children: $ }), De = ($, M) => R.map($, ({ content: G, hidden: ie, type: Pe, color: Z = "hsl(0, 0 %, 95 %)", onClick: Se, visible: le }, H) => {
    if (ie || typeof le == "function" && le(M) === !1)
      return null;
    switch (Pe) {
      case "icon":
        return /* @__PURE__ */ O(
          mt,
          {
            disabled: !1,
            className: nn.ButtonIcon,
            style: {
              color: Z,
              border: `2px solid ${Z}`
            },
            onClick: () => Ne(Se, M),
            children: /* @__PURE__ */ O(We, { name: G })
          },
          H
        );
      case "link":
        return /* @__PURE__ */ O(
          fr,
          {
            style: { color: Z },
            className: nn.ButtonLink,
            onClick: () => Ne(Se, M),
            children: G
          },
          H
        );
      default:
        return null;
    }
  }), W = ($, M = !1) => R.map(
    t,
    ({
      key: G,
      format: ie,
      endDateKey: Pe = null,
      action: Z = [],
      multipleColumns: Se = [],
      dataPosition: le = "left",
      twoLines: H = !1,
      multiple: Q = !1,
      line1: _e = {},
      line2: Ie = {},
      stringLength: Le = 20,
      hidden: Fe = !1,
      translate: $e = {},
      colorLabel: tt,
      textColor: Xe = "#000000",
      style: Ke = {},
      stopDateHandler: Ue = () => {
      },
      render: xt = null,
      valueGetter: ve = null,
      boolLabels: Tt = null
    }, Pt) => {
      let dt = {};
      _ !== void 0 && (dt = _($));
      const at = ve && typeof ve == "function" ? ve($) : Zt(G, $, !1, M), de = R.isEmpty(Pe) ? null : Zt(Pe, $);
      if (Fe)
        return null;
      if (xt && typeof xt == "function") {
        const we = xt($, { setOpentImagePreview: ge });
        return /* @__PURE__ */ O(Ot.Cell, { verticalAlign: "middle", textAlign: le, style: dt, className: nn.cell, children: we }, Pt);
      }
      if (!R.isEmpty(Z) && !e && !M)
        return /* @__PURE__ */ O(
          Ot.Cell,
          {
            verticalAlign: "middle",
            textAlign: le,
            style: { ...dt, ...Ke },
            className: nn.cellButton,
            children: De(Z, $)
          },
          Pt
        );
      if (!R.isEmpty(Z) && e)
        return null;
      if (Q)
        return /* @__PURE__ */ O(
          Ot.Cell,
          {
            verticalAlign: "middle",
            textAlign: "center",
            style: { ...dt, ...Ke },
            className: nn.cellButton,
            onClick: () => {
              ce($, G);
            },
            children: /* @__PURE__ */ O(Jn, { checked: R.includes(h, $[G]) }, Pt)
          },
          Pt
        );
      if (H) {
        const we = Zt(R.get(_e, "key", null), $), nt = Zt(R.get(Ie, "key", null), $), Ye = Zt(R.get(_e, "endDateKey", null), $), Je = Zt(R.get(Ie, "endDateKey", null), $);
        return /* @__PURE__ */ oe(
          Ot.Cell,
          {
            verticalAlign: "middle",
            style: dt,
            onClick: () => me($),
            children: [
              /* @__PURE__ */ O("div", { className: nn.towLineRow, style: { justifyContent: R.get(_e, "dataPosition", "left"), ...dt }, children: fe({
                value: we,
                format: ie,
                endDate: Ye,
                stringLength: Le,
                key: G,
                translate: $e,
                colorLabel: tt,
                boolLabels: Tt,
                rowData: $
              }) }),
              /* @__PURE__ */ O("div", { className: nn.towLineRow, style: { justifyContent: R.get(Ie, "dataPosition", "left"), ...dt }, children: fe({
                value: nt,
                format: ie,
                endDate: Je,
                stringLength: Le,
                key: G,
                translate: $e,
                colorLabel: tt,
                boolLabels: Tt,
                rowData: $
              }) })
            ]
          },
          Pt
        );
      }
      return R.isEmpty(Se) ? /* @__PURE__ */ O(
        Ot.Cell,
        {
          verticalAlign: "middle",
          className: nn.cell,
          textAlign: le,
          style: { color: Xe, ...dt },
          onClick: () => me($),
          children: fe({
            value: at,
            format: ie,
            endDate: de,
            stringLength: Le,
            key: G,
            sum: M,
            translate: $e,
            colorLabel: tt,
            boolLabels: Tt,
            rowData: $,
            textColor: Xe,
            stopDateHandler: Ue
          })
        },
        Pt
      ) : R.map(Se, (nt, Ye) => {
        const Je = Pt + Ye;
        return /* @__PURE__ */ O(
          Ot.Cell,
          {
            verticalAlign: "middle",
            style: dt,
            textAlign: R.get(nt, "dataPosition", "left"),
            onClick: () => me($),
            children: fe({
              value: Zt(R.get(nt, "key", null), $),
              format: R.get(nt, "format", ""),
              endDate: R.get(nt, "endDate", null),
              stringLength: Le,
              key: G,
              translate: $e,
              colorLabel: tt,
              boolLabels: Tt,
              rowData: $
            })
          },
          Je
        );
      });
    }
  ), z = () => {
    if (!R.isEmpty(n)) {
      const $ = R.map(n, (V, G) => {
        if (!R.isEmpty(b)) {
          const ie = Zt(b.headerTitle, V, !1), Pe = Zt(b.dataDetail, V, !1);
          return [
            /* @__PURE__ */ O(Ot.Row, { className: nn.sumRow, as: "tr", children: /* @__PURE__ */ O(
              Ot.Cell,
              {
                verticalAlign: "middle",
                className: nn.cell,
                style: { backgroundColor: "#dddddd", color: "black" },
                colSpan: 16,
                children: ie
              }
            ) }, `sumRow-${G}`),
            R.map(Pe, (Z, Se) => /* @__PURE__ */ O(
              Ot.Row,
              {
                className: nn.groupHover,
                style: K === Z ? { backgroundColor: s } : {},
                onDoubleClick: () => {
                  Ne("Watch", Z);
                },
                children: W(Z)
              },
              `detail-${G}-${Se}`
            ))
          ];
        }
        return /* @__PURE__ */ O(
          Ot.Row,
          {
            className: nn.groupHover,
            style: K === V ? { backgroundColor: s } : {},
            onDoubleClick: () => {
              Ne("Watch", V);
            },
            children: W(V)
          },
          G
        );
      });
      let M = [];
      return R.isEmpty(r) || (M = [
        /* @__PURE__ */ O(Ot.Row, { className: nn.sumRow, children: W(r, !0) }, "sumRow")
      ]), [...$, ...M];
    }
    return /* @__PURE__ */ O(Ot.Row, { children: /* @__PURE__ */ O(Ot.Cell, { colSpan: 34, children: /* @__PURE__ */ O("div", { className: nn.emptyChat, children: /* @__PURE__ */ oe(Xn, { as: "h3", color: "grey", children: [
      /* @__PURE__ */ O("div", { className: nn.emptyDataIcon, children: /* @__PURE__ */ oe(We.Group, { size: "large", children: [
        /* @__PURE__ */ O(We, { name: "list alternate outline" }),
        /* @__PURE__ */ O(We, { corner: !0, name: "close", color: "red" })
      ] }) }),
      "No se ha encontrado ningun dato"
    ] }) }) }) });
  };
  if (k) {
    const $ = P ? async (M, V = !1, G = !1, ie = !1) => P(M, V, G, ie, { withLoading: !(!V && !G && !ie) }) : null;
    return /* @__PURE__ */ oe("div", { className: nn.cardsWrapper, children: [
      /* @__PURE__ */ O(
        Px,
        {
          data: n,
          columns: t,
          headerDetail: b,
          setRowStyle: _,
          clickedRowColors: s,
          onHandlerTable: Ne,
          handlerClick: me,
          formatData: fe,
          clikedData: K,
          isPDF: e,
          cardLine1: F,
          enableInfiniteScroll: !!T || !!P,
          onLoadMore: T,
          isLoadingMore: A,
          hasMore: B,
          cardLine2: E,
          cardLine3: I,
          cardLine4: S,
          multipleHandler: ce,
          concatKeys: h,
          dataHandler: $,
          searchParams: C,
          totalRows: w,
          mergeConfig: U
        }
      ),
      /* @__PURE__ */ O(
        im,
        {
          imageUrl: he.src,
          onClose: () => ge({ isOpen: !1, src: null }),
          isOpen: he.isOpen,
          downloadFileFetcher: ne
        }
      )
    ] });
  }
  return /* @__PURE__ */ oe(Ot.Body, { children: [
    z(),
    /* @__PURE__ */ O(
      im,
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
const GY = "_paginationCell_1jms9_1", KY = "_rowSelector_1jms9_9", ZY = "_rowSelectorContainer_1jms9_17", XY = "_paginationContainer_1jms9_29", QY = "_content_1jms9_43", JY = "_pagination_1jms9_1", eq = "_itemCount_1jms9_67", tq = "_span_1jms9_75", ha = {
  paginationCell: GY,
  rowSelector: KY,
  rowSelectorContainer: ZY,
  paginationContainer: XY,
  content: QY,
  pagination: JY,
  itemCount: eq,
  span: tq
}, XE = ({ searchParams: e, setSearchParams: t, dataHandler: n, totalRows: r, visiblePagination: o }) => {
  const s = (p) => {
    const h = { ...e, rows: p };
    t(h), n(h);
  }, u = (p, { activePage: h }) => {
    p.preventDefault();
    const m = { ...e, page: h };
    t(m), n(m);
  }, c = () => {
    if (r <= 1)
      return /* @__PURE__ */ oe("span", { className: ha.itemCount, children: [
        "Elementos: 1-1 / ",
        r
      ] });
    const p = e.rows * e.page - e.rows + 1;
    let h = e.rows * e.page;
    return e.page === d() && (h = r), /* @__PURE__ */ O("span", { className: ha.itemCount, children: `Elementos: ${p}-${h}/ ${r}` }, 1);
  }, d = () => {
    const p = parseInt(r / e.rows, 10), h = r % e.rows;
    return p < 1 ? 1 : h > 0 ? p + 1 : p;
  };
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    /* @__PURE__ */ O(zr, { children: o && /* @__PURE__ */ O(Ot.Footer, { className: ha.footerContainer, children: /* @__PURE__ */ O(Ot.Row, { children: /* @__PURE__ */ O(Ot.HeaderCell, { colSpan: "34", className: ha.paginationCell, children: /* @__PURE__ */ oe("div", { className: ha.content, children: [
      /* @__PURE__ */ oe("div", { className: ha.paginationContainer, children: [
        /* @__PURE__ */ O(
          Ys,
          {
            className: ha.pagination,
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
      /* @__PURE__ */ oe("div", { className: ha.rowSelectorContainer, children: [
        /* @__PURE__ */ O("span", { className: ha.span, children: "Filas:" }),
        /* @__PURE__ */ O(
          Hr,
          {
            className: ha.rowSelector,
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
XE.propTypes = {
  searchParams: l.object,
  setSearchParams: l.func,
  dataHandler: l.func,
  totalRows: l.number,
  visiblePagination: l.bool
};
var QE = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r(ee, KI);
  })(typeof self < "u" ? self : ss, function(n, r) {
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
                var B, U;
                if (I.contentWindow) if (I.contentWindow.focus(), T) T(I).then(function() {
                  return P == null ? void 0 : P();
                }).then(function() {
                  return E.handleRemoveIframe();
                }).catch(function(ae) {
                  C ? C("print", ae) : E.logMessages(["An error was thrown by the specified `print` function"]);
                });
                else {
                  if (I.contentWindow.print) {
                    var ne = (U = (B = I.contentDocument) === null || B === void 0 ? void 0 : B.title) !== null && U !== void 0 ? U : "", K = I.ownerDocument.title;
                    A && (I.ownerDocument.title = A, I.contentDocument && (I.contentDocument.title = A)), I.contentWindow.print(), A && (I.ownerDocument.title = K, I.contentDocument && (I.contentDocument.title = ne));
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
              var S = E.props, P = S.bodyClass, C = S.content, T = S.copyStyles, A = S.fonts, B = S.pageStyle, U = S.nonce, ne = typeof I == "function" ? I() : null;
              if (ne && typeof C == "function" && E.logMessages(['"react-to-print" received a `content` prop and a content param passed the callback return by `useReactToPrint. The `content` prop will be ignored.'], "warning"), ne || typeof C != "function" || (ne = C()), ne !== void 0) if (ne !== null) {
                var K = document.createElement("iframe");
                K.width = "".concat(document.documentElement.clientWidth, "px"), K.height = "".concat(document.documentElement.clientHeight, "px"), K.style.position = "absolute", K.style.top = "-".concat(document.documentElement.clientHeight + 100, "px"), K.style.left = "-".concat(document.documentElement.clientWidth + 100, "px"), K.id = "printWindow", K.srcdoc = "<!DOCTYPE html>";
                var ae = (0, y.findDOMNode)(ne);
                if (ae) {
                  var he = ae.cloneNode(!0), ge = he instanceof Text, Ne = document.querySelectorAll("link[rel~='stylesheet'], link[as='style']"), ce = ge ? [] : he.querySelectorAll("img"), me = ge ? [] : he.querySelectorAll("video"), te = A ? A.length : 0;
                  E.numResourcesToLoad = Ne.length + ce.length + me.length + te, E.resourcesLoaded = [], E.resourcesErrored = [];
                  var re = function(se, be) {
                    E.resourcesLoaded.includes(se) ? E.logMessages(["Tried to mark a resource that has already been handled", se], "debug") : (be ? (E.logMessages(m.__spreadArray(['"react-to-print" was unable to load a resource but will continue attempting to print the page'], m.__read(be), !1)), E.resourcesErrored.push(se)) : E.resourcesLoaded.push(se), E.resourcesLoaded.length + E.resourcesErrored.length === E.numResourcesToLoad && E.triggerPrint(K));
                  };
                  K.onload = function() {
                    var se, be, Oe, Ee;
                    K.onload = null;
                    var fe = K.contentDocument || ((be = K.contentWindow) === null || be === void 0 ? void 0 : be.document);
                    if (fe) {
                      fe.body.appendChild(he), A && (!((Oe = K.contentDocument) === null || Oe === void 0) && Oe.fonts && (!((Ee = K.contentWindow) === null || Ee === void 0) && Ee.FontFace) ? A.forEach(function(Xe) {
                        var Ke = new FontFace(Xe.family, Xe.source, { weight: Xe.weight, style: Xe.style });
                        K.contentDocument.fonts.add(Ke), Ke.loaded.then(function() {
                          re(Ke);
                        }).catch(function(Ue) {
                          re(Ke, ["Failed loading the font:", Ke, "Load error:", Ue]);
                        });
                      }) : (A.forEach(function(Xe) {
                        return re(Xe);
                      }), E.logMessages(['"react-to-print" is not able to load custom fonts because the browser does not support the FontFace API but will continue attempting to print the page'])));
                      var Te = typeof B == "function" ? B() : B;
                      if (typeof Te != "string") E.logMessages(['"react-to-print" expected a "string" from `pageStyle` but received "'.concat(typeof Te, '". Styles from `pageStyle` will not be applied.')]);
                      else {
                        var De = fe.createElement("style");
                        U && (De.setAttribute("nonce", U), fe.head.setAttribute("nonce", U)), De.appendChild(fe.createTextNode(Te)), fe.head.appendChild(De);
                      }
                      if (P && (se = fe.body.classList).add.apply(se, m.__spreadArray([], m.__read(P.split(" ")), !1)), !ge) {
                        for (var W = ge ? [] : ae.querySelectorAll("canvas"), z = fe.querySelectorAll("canvas"), $ = 0; $ < W.length; ++$) {
                          var M = W[$], V = z[$].getContext("2d");
                          V && V.drawImage(M, 0, 0);
                        }
                        var G = function(Xe) {
                          var Ke = ce[Xe], Ue = Ke.getAttribute("src");
                          if (Ue) {
                            var xt = new Image();
                            xt.onload = function() {
                              return re(Ke);
                            }, xt.onerror = function(ve, Tt, Pt, dt, at) {
                              return re(Ke, ["Error loading <img>", Ke, "Error", at]);
                            }, xt.src = Ue;
                          } else re(Ke, ['Found an <img> tag with an empty "src" attribute. This prevents pre-loading it. The <img> is:', Ke]);
                        };
                        for ($ = 0; $ < ce.length; $++) G($);
                        var ie = function(Xe) {
                          var Ke = me[Xe];
                          Ke.preload = "auto";
                          var Ue = Ke.getAttribute("poster");
                          if (Ue) {
                            var xt = new Image();
                            xt.onload = function() {
                              return re(Ke);
                            }, xt.onerror = function(ve, Tt, Pt, dt, at) {
                              return re(Ke, ["Error loading video poster", Ue, "for video", Ke, "Error:", at]);
                            }, xt.src = Ue;
                          } else Ke.readyState >= 2 ? re(Ke) : (Ke.onloadeddata = function() {
                            return re(Ke);
                          }, Ke.onerror = function(ve, Tt, Pt, dt, at) {
                            return re(Ke, ["Error loading video", Ke, "Error", at]);
                          }, Ke.onstalled = function() {
                            return re(Ke, ["Loading video stalled, skipping", Ke]);
                          });
                        };
                        for ($ = 0; $ < me.length; $++) ie($);
                        var Pe = "input", Z = ae.querySelectorAll(Pe), Se = fe.querySelectorAll(Pe);
                        for ($ = 0; $ < Z.length; $++) Se[$].value = Z[$].value;
                        var le = "input[type=checkbox],input[type=radio]", H = ae.querySelectorAll(le), Q = fe.querySelectorAll(le);
                        for ($ = 0; $ < H.length; $++) Q[$].checked = H[$].checked;
                        var _e = "select", Ie = ae.querySelectorAll(_e), Le = fe.querySelectorAll(_e);
                        for ($ = 0; $ < Ie.length; $++) Le[$].value = Ie[$].value;
                      }
                      if (T) for (var Fe = document.querySelectorAll("style, link[rel~='stylesheet'], link[as='style']"), $e = function(Xe, Ke) {
                        var Ue = Fe[Xe];
                        if (Ue.tagName.toLowerCase() === "style") {
                          var xt = fe.createElement(Ue.tagName), ve = Ue.sheet;
                          if (ve) {
                            var Tt = "";
                            try {
                              for (var Pt = ve.cssRules.length, dt = 0; dt < Pt; ++dt) typeof ve.cssRules[dt].cssText == "string" && (Tt += "".concat(ve.cssRules[dt].cssText, `\r
`));
                            } catch {
                              E.logMessages(["A stylesheet could not be accessed. This is likely due to the stylesheet having cross-origin imports, and many browsers block script access to cross-origin stylesheets. See https://github.com/gregnb/react-to-print/issues/429 for details. You may be able to load the sheet by both marking the stylesheet with the cross `crossorigin` attribute, and setting the `Access-Control-Allow-Origin` header on the server serving the stylesheet. Alternatively, host the stylesheet on your domain to avoid this issue entirely.", Ue], "warning");
                            }
                            xt.setAttribute("id", "react-to-print-".concat(Xe)), U && xt.setAttribute("nonce", U), xt.appendChild(fe.createTextNode(Tt)), fe.head.appendChild(xt);
                          }
                        } else if (Ue.getAttribute("href")) if (Ue.hasAttribute("disabled")) E.logMessages(["`react-to-print` encountered a <link> tag with a `disabled` attribute and will ignore it. Note that the `disabled` attribute is deprecated, and some browsers ignore it. You should stop using it. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link#attr-disabled. The <link> is:", Ue], "warning"), re(Ue);
                        else {
                          for (var at = fe.createElement(Ue.tagName), de = (dt = 0, Ue.attributes.length); dt < de; ++dt) {
                            var we = Ue.attributes[dt];
                            we && at.setAttribute(we.nodeName, we.nodeValue || "");
                          }
                          at.onload = function() {
                            return re(at);
                          }, at.onerror = function(nt, Ye, Je, pt, Gt) {
                            return re(at, ["Failed to load", at, "Error:", Gt]);
                          }, U && at.setAttribute("nonce", U), fe.head.appendChild(at);
                        }
                        else E.logMessages(["`react-to-print` encountered a <link> tag with an empty `href` attribute. In addition to being invalid HTML, this can cause problems in many browsers, and so the <link> was not loaded. The <link> is:", Ue], "warning"), re(Ue);
                      }, tt = ($ = 0, Fe.length); $ < tt; ++$) $e($);
                    }
                    E.numResourcesToLoad !== 0 && T || E.triggerPrint(K);
                  }, E.handleRemoveIframe(!0), document.body.appendChild(K);
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
          return ce;
        }, __await: function() {
          return he;
        }, __awaiter: function() {
          return P;
        }, __classPrivateFieldGet: function() {
          return be;
        }, __classPrivateFieldIn: function() {
          return Ee;
        }, __classPrivateFieldSet: function() {
          return Oe;
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
          return se;
        }, __importStar: function() {
          return re;
        }, __makeTemplateObject: function() {
          return me;
        }, __metadata: function() {
          return S;
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
          return ne;
        }, __spreadArray: function() {
          return ae;
        }, __spreadArrays: function() {
          return K;
        }, __values: function() {
          return B;
        } });
        var m = function(W, z) {
          return m = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function($, M) {
            $.__proto__ = M;
          } || function($, M) {
            for (var V in M) Object.prototype.hasOwnProperty.call(M, V) && ($[V] = M[V]);
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
            for (var z, $ = 1, M = arguments.length; $ < M; $++) for (var V in z = arguments[$]) Object.prototype.hasOwnProperty.call(z, V) && (W[V] = z[V]);
            return W;
          }, y.apply(this, arguments);
        };
        function b(W, z) {
          var $ = {};
          for (var M in W) Object.prototype.hasOwnProperty.call(W, M) && z.indexOf(M) < 0 && ($[M] = W[M]);
          if (W != null && typeof Object.getOwnPropertySymbols == "function") {
            var V = 0;
            for (M = Object.getOwnPropertySymbols(W); V < M.length; V++) z.indexOf(M[V]) < 0 && Object.prototype.propertyIsEnumerable.call(W, M[V]) && ($[M[V]] = W[M[V]]);
          }
          return $;
        }
        function _(W, z, $, M) {
          var V, G = arguments.length, ie = G < 3 ? z : M === null ? M = Object.getOwnPropertyDescriptor(z, $) : M;
          if (typeof Reflect == "object" && typeof Reflect.decorate == "function") ie = Reflect.decorate(W, z, $, M);
          else for (var Pe = W.length - 1; Pe >= 0; Pe--) (V = W[Pe]) && (ie = (G < 3 ? V(ie) : G > 3 ? V(z, $, ie) : V(z, $)) || ie);
          return G > 3 && ie && Object.defineProperty(z, $, ie), ie;
        }
        function w(W, z) {
          return function($, M) {
            z($, M, W);
          };
        }
        function k(W, z, $, M, V, G) {
          function ie($e) {
            if ($e !== void 0 && typeof $e != "function") throw new TypeError("Function expected");
            return $e;
          }
          for (var Pe, Z = M.kind, Se = Z === "getter" ? "get" : Z === "setter" ? "set" : "value", le = !z && W ? M.static ? W : W.prototype : null, H = z || (le ? Object.getOwnPropertyDescriptor(le, M.name) : {}), Q = !1, _e = $.length - 1; _e >= 0; _e--) {
            var Ie = {};
            for (var Le in M) Ie[Le] = Le === "access" ? {} : M[Le];
            for (var Le in M.access) Ie.access[Le] = M.access[Le];
            Ie.addInitializer = function($e) {
              if (Q) throw new TypeError("Cannot add initializers after decoration has completed");
              G.push(ie($e || null));
            };
            var Fe = (0, $[_e])(Z === "accessor" ? { get: H.get, set: H.set } : H[Se], Ie);
            if (Z === "accessor") {
              if (Fe === void 0) continue;
              if (Fe === null || typeof Fe != "object") throw new TypeError("Object expected");
              (Pe = ie(Fe.get)) && (H.get = Pe), (Pe = ie(Fe.set)) && (H.set = Pe), (Pe = ie(Fe.init)) && V.unshift(Pe);
            } else (Pe = ie(Fe)) && (Z === "field" ? V.unshift(Pe) : H[Se] = Pe);
          }
          le && Object.defineProperty(le, M.name, H), Q = !0;
        }
        function F(W, z, $) {
          for (var M = arguments.length > 2, V = 0; V < z.length; V++) $ = M ? z[V].call(W, $) : z[V].call(W);
          return M ? $ : void 0;
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
        function P(W, z, $, M) {
          return new ($ || ($ = Promise))(function(V, G) {
            function ie(Se) {
              try {
                Z(M.next(Se));
              } catch (le) {
                G(le);
              }
            }
            function Pe(Se) {
              try {
                Z(M.throw(Se));
              } catch (le) {
                G(le);
              }
            }
            function Z(Se) {
              var le;
              Se.done ? V(Se.value) : (le = Se.value, le instanceof $ ? le : new $(function(H) {
                H(le);
              })).then(ie, Pe);
            }
            Z((M = M.apply(W, z || [])).next());
          });
        }
        function C(W, z) {
          var $, M, V, G, ie = { label: 0, sent: function() {
            if (1 & V[0]) throw V[1];
            return V[1];
          }, trys: [], ops: [] };
          return G = { next: Pe(0), throw: Pe(1), return: Pe(2) }, typeof Symbol == "function" && (G[Symbol.iterator] = function() {
            return this;
          }), G;
          function Pe(Z) {
            return function(Se) {
              return function(le) {
                if ($) throw new TypeError("Generator is already executing.");
                for (; G && (G = 0, le[0] && (ie = 0)), ie; ) try {
                  if ($ = 1, M && (V = 2 & le[0] ? M.return : le[0] ? M.throw || ((V = M.return) && V.call(M), 0) : M.next) && !(V = V.call(M, le[1])).done) return V;
                  switch (M = 0, V && (le = [2 & le[0], V.value]), le[0]) {
                    case 0:
                    case 1:
                      V = le;
                      break;
                    case 4:
                      return ie.label++, { value: le[1], done: !1 };
                    case 5:
                      ie.label++, M = le[1], le = [0];
                      continue;
                    case 7:
                      le = ie.ops.pop(), ie.trys.pop();
                      continue;
                    default:
                      if (!((V = (V = ie.trys).length > 0 && V[V.length - 1]) || le[0] !== 6 && le[0] !== 2)) {
                        ie = 0;
                        continue;
                      }
                      if (le[0] === 3 && (!V || le[1] > V[0] && le[1] < V[3])) {
                        ie.label = le[1];
                        break;
                      }
                      if (le[0] === 6 && ie.label < V[1]) {
                        ie.label = V[1], V = le;
                        break;
                      }
                      if (V && ie.label < V[2]) {
                        ie.label = V[2], ie.ops.push(le);
                        break;
                      }
                      V[2] && ie.ops.pop(), ie.trys.pop();
                      continue;
                  }
                  le = z.call(W, ie);
                } catch (H) {
                  le = [6, H], M = 0;
                } finally {
                  $ = V = 0;
                }
                if (5 & le[0]) throw le[1];
                return { value: le[0] ? le[1] : void 0, done: !0 };
              }([Z, Se]);
            };
          }
        }
        var T = Object.create ? function(W, z, $, M) {
          M === void 0 && (M = $);
          var V = Object.getOwnPropertyDescriptor(z, $);
          V && !("get" in V ? !z.__esModule : V.writable || V.configurable) || (V = { enumerable: !0, get: function() {
            return z[$];
          } }), Object.defineProperty(W, M, V);
        } : function(W, z, $, M) {
          M === void 0 && (M = $), W[M] = z[$];
        };
        function A(W, z) {
          for (var $ in W) $ === "default" || Object.prototype.hasOwnProperty.call(z, $) || T(z, W, $);
        }
        function B(W) {
          var z = typeof Symbol == "function" && Symbol.iterator, $ = z && W[z], M = 0;
          if ($) return $.call(W);
          if (W && typeof W.length == "number") return { next: function() {
            return W && M >= W.length && (W = void 0), { value: W && W[M++], done: !W };
          } };
          throw new TypeError(z ? "Object is not iterable." : "Symbol.iterator is not defined.");
        }
        function U(W, z) {
          var $ = typeof Symbol == "function" && W[Symbol.iterator];
          if (!$) return W;
          var M, V, G = $.call(W), ie = [];
          try {
            for (; (z === void 0 || z-- > 0) && !(M = G.next()).done; ) ie.push(M.value);
          } catch (Pe) {
            V = { error: Pe };
          } finally {
            try {
              M && !M.done && ($ = G.return) && $.call(G);
            } finally {
              if (V) throw V.error;
            }
          }
          return ie;
        }
        function ne() {
          for (var W = [], z = 0; z < arguments.length; z++) W = W.concat(U(arguments[z]));
          return W;
        }
        function K() {
          for (var W = 0, z = 0, $ = arguments.length; z < $; z++) W += arguments[z].length;
          var M = Array(W), V = 0;
          for (z = 0; z < $; z++) for (var G = arguments[z], ie = 0, Pe = G.length; ie < Pe; ie++, V++) M[V] = G[ie];
          return M;
        }
        function ae(W, z, $) {
          if ($ || arguments.length === 2) for (var M, V = 0, G = z.length; V < G; V++) !M && V in z || (M || (M = Array.prototype.slice.call(z, 0, V)), M[V] = z[V]);
          return W.concat(M || Array.prototype.slice.call(z));
        }
        function he(W) {
          return this instanceof he ? (this.v = W, this) : new he(W);
        }
        function ge(W, z, $) {
          if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
          var M, V = $.apply(W, z || []), G = [];
          return M = {}, ie("next"), ie("throw"), ie("return"), M[Symbol.asyncIterator] = function() {
            return this;
          }, M;
          function ie(H) {
            V[H] && (M[H] = function(Q) {
              return new Promise(function(_e, Ie) {
                G.push([H, Q, _e, Ie]) > 1 || Pe(H, Q);
              });
            });
          }
          function Pe(H, Q) {
            try {
              (_e = V[H](Q)).value instanceof he ? Promise.resolve(_e.value.v).then(Z, Se) : le(G[0][2], _e);
            } catch (Ie) {
              le(G[0][3], Ie);
            }
            var _e;
          }
          function Z(H) {
            Pe("next", H);
          }
          function Se(H) {
            Pe("throw", H);
          }
          function le(H, Q) {
            H(Q), G.shift(), G.length && Pe(G[0][0], G[0][1]);
          }
        }
        function Ne(W) {
          var z, $;
          return z = {}, M("next"), M("throw", function(V) {
            throw V;
          }), M("return"), z[Symbol.iterator] = function() {
            return this;
          }, z;
          function M(V, G) {
            z[V] = W[V] ? function(ie) {
              return ($ = !$) ? { value: he(W[V](ie)), done: !1 } : G ? G(ie) : ie;
            } : G;
          }
        }
        function ce(W) {
          if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
          var z, $ = W[Symbol.asyncIterator];
          return $ ? $.call(W) : (W = B(W), z = {}, M("next"), M("throw"), M("return"), z[Symbol.asyncIterator] = function() {
            return this;
          }, z);
          function M(V) {
            z[V] = W[V] && function(G) {
              return new Promise(function(ie, Pe) {
                (function(Z, Se, le, H) {
                  Promise.resolve(H).then(function(Q) {
                    Z({ value: Q, done: le });
                  }, Se);
                })(ie, Pe, (G = W[V](G)).done, G.value);
              });
            };
          }
        }
        function me(W, z) {
          return Object.defineProperty ? Object.defineProperty(W, "raw", { value: z }) : W.raw = z, W;
        }
        var te = Object.create ? function(W, z) {
          Object.defineProperty(W, "default", { enumerable: !0, value: z });
        } : function(W, z) {
          W.default = z;
        };
        function re(W) {
          if (W && W.__esModule) return W;
          var z = {};
          if (W != null) for (var $ in W) $ !== "default" && Object.prototype.hasOwnProperty.call(W, $) && T(z, W, $);
          return te(z, W), z;
        }
        function se(W) {
          return W && W.__esModule ? W : { default: W };
        }
        function be(W, z, $, M) {
          if ($ === "a" && !M) throw new TypeError("Private accessor was defined without a getter");
          if (typeof z == "function" ? W !== z || !M : !z.has(W)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return $ === "m" ? M : $ === "a" ? M.call(W) : M ? M.value : z.get(W);
        }
        function Oe(W, z, $, M, V) {
          if (M === "m") throw new TypeError("Private method is not writable");
          if (M === "a" && !V) throw new TypeError("Private accessor was defined without a setter");
          if (typeof z == "function" ? W !== z || !V : !z.has(W)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
          return M === "a" ? V.call(W, $) : V ? V.value = $ : z.set(W, $), $;
        }
        function Ee(W, z) {
          if (z === null || typeof z != "object" && typeof z != "function") throw new TypeError("Cannot use 'in' operator on non-object");
          return typeof W == "function" ? z === W : W.has(z);
        }
        function fe(W, z, $) {
          if (z != null) {
            if (typeof z != "object" && typeof z != "function") throw new TypeError("Object expected.");
            var M;
            if ($) {
              if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
              M = z[Symbol.asyncDispose];
            }
            if (M === void 0) {
              if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
              M = z[Symbol.dispose];
            }
            if (typeof M != "function") throw new TypeError("Object not disposable.");
            W.stack.push({ value: z, dispose: M, async: $ });
          } else $ && W.stack.push({ async: !0 });
          return z;
        }
        var Te = typeof SuppressedError == "function" ? SuppressedError : function(W, z, $) {
          var M = new Error($);
          return M.name = "SuppressedError", M.error = W, M.suppressed = z, M;
        };
        function De(W) {
          function z($) {
            W.error = W.hasError ? new Te($, W.error, "An error was suppressed during disposal.") : $, W.hasError = !0;
          }
          return function $() {
            for (; W.stack.length; ) {
              var M = W.stack.pop();
              try {
                var V = M.dispose && M.dispose.call(M.value);
                if (M.async) return Promise.resolve(V).then($, function(G) {
                  return z(G), $();
                });
              } catch (G) {
                z(G);
              }
            }
            if (W.hasError) throw W.error;
          }();
        }
        p.default = { __extends: g, __assign: y, __rest: b, __decorate: _, __param: w, __metadata: S, __awaiter: P, __generator: C, __createBinding: T, __exportStar: A, __values: B, __read: U, __spread: ne, __spreadArrays: K, __spreadArray: ae, __await: he, __asyncGenerator: ge, __asyncDelegator: Ne, __asyncValues: ce, __makeTemplateObject: me, __importStar: re, __importDefault: se, __classPrivateFieldGet: be, __classPrivateFieldSet: Oe, __classPrivateFieldIn: Ee, __addDisposableResource: fe, __disposeResources: De };
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
})(QE);
var Pg = QE.exports;
const nq = () => /^((?!chrome|android).)*safari/i.test(navigator.userAgent), JE = (e) => Array.isArray(e) && e.every(
  (t) => typeof t == "object" && !(t instanceof Array)
), rq = (e) => Array.isArray(e) && e.every(
  (t) => Array.isArray(t)
), aq = (e) => Array.from(
  e.map((t) => Object.keys(t)).reduce((t, n) => /* @__PURE__ */ new Set([...t, ...n]), [])
), oq = (e, t) => {
  t = t || aq(e);
  let n = t, r = t;
  JE(t) && (n = t.map((s) => s.label), r = t.map((s) => s.key));
  const o = e.map((s) => r.map((u) => iq(u, s)));
  return [n, ...o];
}, iq = (e, t) => {
  const n = e.replace(/\[([^\]]+)]/g, ".$1").split(".").reduce(function(r, o, s, u) {
    const c = r[o];
    if (c == null)
      u.splice(1);
    else
      return c;
  }, t);
  return n === void 0 ? e in t ? t[e] : "" : n;
}, sq = (e) => typeof e > "u" || e === null ? "" : e, eC = (e, t = ",", n = '"') => e.filter((r) => r).map(
  (r) => r.map((o) => sq(o)).map((o) => `${n}${o}${n}`).join(t)
).join(`
`), lq = (e, t, n, r) => eC(t ? [t, ...e] : e, n, r), cq = (e, t, n, r) => eC(oq(e, t), n, r), uq = (e, t, n, r) => t ? `${t.join(n)}
${e}` : e.replace(/"/g, '""'), tC = (e, t, n, r) => {
  if (JE(e)) return cq(e, t, n, r);
  if (rq(e)) return lq(e, t, n, r);
  if (typeof e == "string") return uq(e, t, n);
  throw new TypeError('Data should be a "String", "Array of arrays" OR "Array of objects" ');
}, nC = (e, t, n, r, o) => {
  const s = tC(e, n, r, o), u = nq() ? "application/csv" : "text/csv", c = new Blob([t ? "\uFEFF" : "", s], { type: u }), d = `data:${u};charset=utf-8,${t ? "\uFEFF" : ""}${s}`, p = window.URL || window.webkitURL;
  return typeof p.createObjectURL > "u" ? d : p.createObjectURL(c);
}, rC = {
  data: or.oneOfType([or.string, or.array, or.func]).isRequired,
  headers: or.array,
  target: or.string,
  separator: or.string,
  filename: or.string,
  uFEFF: or.bool,
  onClick: or.func,
  asyncOnClick: or.bool,
  enclosingCharacter: or.string
}, aC = {
  separator: ",",
  filename: "generatedBy_react-csv.csv",
  uFEFF: !0,
  asyncOnClick: !1,
  enclosingCharacter: '"'
}, dq = {
  target: "_blank"
};
class P_ extends ee.Component {
  constructor(t) {
    super(t), this.state = {};
  }
  buildURI() {
    return nC(...arguments);
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
hl(P_, "defaultProps", Object.assign(
  aC,
  dq
)), hl(P_, "propTypes", rC);
var Au;
let fq = (Au = class extends ee.Component {
  constructor(t) {
    super(t), this.buildURI = this.buildURI.bind(this);
  }
  buildURI() {
    return nC(...arguments);
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
      let h = new Blob([d ? "\uFEFF" : "", tC(p, o, s, c)]);
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
}, hl(Au, "defaultProps", aC), hl(Au, "propTypes", rC), Au);
const pq = fq, hq = "_input_1q0yw_1", mq = "_clearIcon_1q0yw_9", gq = "_clearIconFocused_1q0yw_21", vq = "_clearIconLast_1q0yw_33", yq = "_clearIconLastFocused_1q0yw_47", bq = "_clearRoundedIconLast_1q0yw_61", _q = "_clearRoundedIconLastFocused_1q0yw_79", za = {
  input: hq,
  clearIcon: mq,
  clearIconFocused: gq,
  clearIconLast: vq,
  clearIconLastFocused: yq,
  clearRoundedIconLast: bq,
  clearRoundedIconLastFocused: _q
}, hd = hc((e, t) => {
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
  } = e, E = On(null), [I, S] = it(!1), [P, C] = it(n ? "password" : "text"), [T, A] = it("eye slash");
  Xt(() => {
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
      const te = { name: r, value: o.trim() };
      m({ ...me, target: te }, te);
    }
  }, U = (me) => {
    const { key: te } = me;
    te === "Enter" && (me.preventDefault(), B(me), g && g(me));
  }, ne = () => {
    const me = P === "password", te = me ? "text" : "password", re = me ? "eye" : "eye slash";
    C(te), A(re);
  }, K = (me) => {
    const te = { name: r, value: "" };
    e.fieldIndex !== void 0 && (te.fieldIndex = e.fieldIndex), e.id !== void 0 && (te.id = e.id), m({ ...me, target: te }, te), y && y();
  }, ae = () => {
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
  ]), ce = n || !R.isEmpty(u);
  return /* @__PURE__ */ oe(
    $n.Input,
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
      ...ce ? { iconPosition: "left" } : {},
      autoComplete: "off",
      fluid: k,
      onFocus: ae,
      onBlur: he,
      onKeyPress: U,
      action: !0,
      children: [
        _ === "left" && !R.isEmpty(b) && /* @__PURE__ */ O(Hr, { labeled: !0, ...b }),
        ce && /* @__PURE__ */ O(We, { name: n ? "lock" : u }),
        /* @__PURE__ */ O("input", { ref: t || E }),
        _ === "right" ? /* @__PURE__ */ oe(zr, { children: [
          !R.isEmpty(o) && !p && /* @__PURE__ */ O(mt, { className: ge(), icon: "cancel", onClick: K, tabIndex: -1 }),
          !R.isEmpty(b) && /* @__PURE__ */ O(Hr, { labeled: !0, ...b })
        ] }) : !R.isEmpty(o) && !p && /* @__PURE__ */ O(mt, { className: ge(), icon: "cancel", onClick: K, tabIndex: -1 }),
        n && /* @__PURE__ */ O(
          mt,
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
const wq = "_container_1uh18_1", xq = "_containerUser_1uh18_11", Eq = "_containerLeft_1uh18_19", Cq = "_containerRight_1uh18_25", Oq = "_headerTitle_1uh18_39", Sq = "_containerCenter_1uh18_49", Tq = "_tableContainer_1uh18_61", Ua = {
  container: wq,
  containerUser: xq,
  containerLeft: Eq,
  containerRight: Cq,
  headerTitle: Oq,
  containerCenter: Sq,
  tableContainer: Tq
}, oC = ({
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
    /* @__PURE__ */ O("style", { children: m() }),
    /* @__PURE__ */ O("div", { className: Ua.containerCenter, children: R.isEmpty(h) ? /* @__PURE__ */ oe(Xn, { as: "h2", icon: !0, children: [
      /* @__PURE__ */ O("span", { children: o.company }),
      /* @__PURE__ */ O(Xn.Subheader, { children: o.title })
    ] }) : h }),
    /* @__PURE__ */ oe("div", { className: Ua.containerUser, children: [
      /* @__PURE__ */ oe("div", { className: Ua.containerLeft, children: [
        /* @__PURE__ */ oe("div", { children: [
          /* @__PURE__ */ O("span", { className: Ua.headerTitle, children: "Usuario:" }),
          o.user
        ] }),
        /* @__PURE__ */ oe("div", { children: [
          /* @__PURE__ */ O("span", { className: Ua.headerTitle, children: "Fecha:" }),
          Lr(String(/* @__PURE__ */ new Date()), !1, !1, !0)
        ] })
      ] }),
      /* @__PURE__ */ oe("div", { className: Ua.containerRight, children: [
        /* @__PURE__ */ O("span", { className: Ua.headerTitle, children: "Total de filas:" }),
        !R.isEmpty(e) && e.length
      ] })
    ] }),
    /* @__PURE__ */ O("div", { className: Ua.tableContainer, children: /* @__PURE__ */ oe(Ot, { sortable: !0, celled: !0, striped: !0, children: [
      /* @__PURE__ */ O(eg, { isPDF: !0, columns: t, searchParams: s, setSearchParams: u, dataHandler: c }),
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
oC.propTypes = {
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
const Pq = "_container_17awp_1", kq = "_input1_17awp_9", Nq = "_input2_17awp_15", Zp = {
  container: Pq,
  input1: kq,
  input2: Nq
}, iC = ({ label: e, value: t, onChange: n }) => {
  const [r, o] = it(""), [s, u] = it("");
  Xt(() => {
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
  return /* @__PURE__ */ oe("div", { className: Zp.container, children: [
    /* @__PURE__ */ O("div", { className: Zp.input1, children: /* @__PURE__ */ O(
      $n.Input,
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
    /* @__PURE__ */ O("div", { className: Zp.input2, children: /* @__PURE__ */ O(
      $n.Input,
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
iC.propTypes = {
  label: l.string,
  value: l.string,
  /* 	className: PropTypes.string, */
  onChange: l.func
};
const Iq = "_modal_16365_1", Aq = "_modalHeader_16365_45", Rq = "_modalFooter_16365_59", Mq = "_inputChannel_16365_77", Dq = "_positiveButton_16365_111", Lq = "_negativeButton_16365_141", Fq = "_gridColumnLeft_16365_183", $q = "_gridColumnRight_16365_195", ma = {
  modal: Iq,
  modalHeader: Aq,
  modalFooter: Rq,
  inputChannel: Mq,
  positiveButton: Dq,
  negativeButton: Lq,
  gridColumnLeft: Fq,
  gridColumnRight: $q
}, sC = ({
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
          iC,
          {
            label: w,
            value: R.get(s, `${F}`, ""),
            className: ma.inputChannel,
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
            className: ma.inputChannel,
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
    }), /* @__PURE__ */ oe(Ri, { columns: 2, children: [
      /* @__PURE__ */ O(Qa, { className: ma.gridColumnLeft, children: w }),
      /* @__PURE__ */ O(Qa, { className: ma.gridColumnRight, children: k })
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
  return /* @__PURE__ */ oe(pn, { className: ma.modal, open: !0, closeIcon: !0, onClose: e, children: [
    /* @__PURE__ */ O(pn.Header, { className: ma.modalHeader, children: /* @__PURE__ */ oe("div", { children: [
      /* @__PURE__ */ O(We, { name: "filter" }),
      "Filtro Avanzado"
    ] }) }),
    /* @__PURE__ */ O(pn.Content, { scrolling: !0, children: y() }),
    /* @__PURE__ */ oe(pn.Actions, { className: ma.modalFooter, children: [
      /* @__PURE__ */ oe(mt, { className: ma.negativeButton, onClick: d, children: [
        /* @__PURE__ */ O(We, { name: "filter" }),
        "Limpiar"
      ] }),
      /* @__PURE__ */ oe("div", { children: [
        /* @__PURE__ */ O(mt, { className: ma.negativeButton, onClick: e, children: "Atrás" }),
        /* @__PURE__ */ O(mt, { className: ma.positiveButton, onClick: b, children: "Filtrar" })
      ] })
    ] })
  ] });
};
sC.propTypes = {
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
const Xp = (e, t, n, r, o, s, u, c) => {
  switch (e) {
    case "timeBetween":
      return Ox(t, r);
    case "date":
      return Lr(t, !1, !1, !1);
    case "time":
      return Lr(t, !1, !0, !1);
    case "dateTimeBar":
    case "dateTime":
      return Lr(t, !1, !1, !0);
    case "count":
      return t ? t.length : 0;
    case "boolean":
      return u ? t ? u.true : u.false : t ? "si" : "no";
    case "translate":
      return Pl(t, s);
    case "arrayTruncate":
      if (c && typeof c.key == "string" && R.includes(c.key, "[]?")) {
        const [d, p] = R.replace(c.key, "[]?", "").split("."), h = Array.isArray(n[d]) ? n[d] : [], m = R.map(h, (g) => g && g[p]);
        return R.join(R.filter(m, Boolean), ", ");
      }
      return Array.isArray(t) ? R.join(R.filter(t, Boolean), ", ") : t;
    default:
      return t;
  }
}, k_ = (e) => e && e.key ? `${e.key.split(".").join("")}_${e.format || ""}_${e.label || ""}` : null;
function Bq(e, t, n) {
  let r = e, o = t;
  if (!R.isEmpty(n)) {
    const d = R.map(e, (p) => {
      const h = { [n.headerTitle]: Zt(n.headerTitle, p) };
      return R.map(Zt(n.dataDetail, p), (g) => ({ ...h, ...g }));
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
        h.format === "timeBetween" && h.endDateKey ? m = Zt(h.endDateKey, d) : m && typeof m == "string" && (m = Zt(m, d));
        let g = "";
        const y = k_(h), b = h.key.split(",");
        if (b.length === 1)
          g = Zt(h.key, d), h.format === "dateTimeBar" && (g = Zt(h.endDateKey, d)), g = Xp(
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
          const _ = Zt(b[0], d);
          for (const w of _)
            if (g === "")
              g = Zt(b[1], w), g = Xp(
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
              let k = Zt(b[1], w);
              k = Xp(
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
  return u = R.map(u, (d) => ({ label: d.label, key: k_(d) })), { dataExel: s, columnExel: u };
}
const jq = "_mainContainer_4n1za_1", Wq = "_searchContainer_4n1za_19", zq = "_searchInput_4n1za_89", Uq = "_searchWrapper_4n1za_99", Hq = "_filterButton_4n1za_129", Yq = "_addButton_4n1za_159", qq = "_defaultTopButton_4n1za_191", Vq = "_printButton_4n1za_205", Gq = "_exelButton_4n1za_219", Kq = "_clearButton_4n1za_241", Zq = "_defaultTopInputContainerStyle_4n1za_255", Xq = "_defaultTopDropdownContainerStyle_4n1za_267", Qq = "_defaultLabelContainerStyle_4n1za_277", Jq = "_topInputLabel_4n1za_287", eV = "_renderTopButtonsContainer_4n1za_299", tV = "_inputLabelCheck_4n1za_313", nV = "_labelCheck_4n1za_321", rV = "_addButtonContainer_4n1za_331", aV = "_addButtonsContainer_4n1za_343", oV = "_topButtonsDesktop_4n1za_359", iV = "_secondLine_4n1za_373", sV = "_hidePrintButtonsMobile_4n1za_389", lV = "_addButtonIcon_4n1za_553", cV = "_hideOnMobile_4n1za_595", Nt = {
  mainContainer: jq,
  searchContainer: Wq,
  searchInput: zq,
  searchWrapper: Uq,
  filterButton: Hq,
  addButton: Yq,
  defaultTopButton: qq,
  printButton: Vq,
  exelButton: Gq,
  clearButton: Kq,
  defaultTopInputContainerStyle: Zq,
  defaultTopDropdownContainerStyle: Xq,
  defaultLabelContainerStyle: Qq,
  topInputLabel: Jq,
  renderTopButtonsContainer: eV,
  inputLabelCheck: tV,
  labelCheck: nV,
  addButtonContainer: rV,
  addButtonsContainer: aV,
  topButtonsDesktop: oV,
  secondLine: iV,
  hidePrintButtonsMobile: sV,
  addButtonIcon: lV,
  hideOnMobile: cV
}, lC = ({
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
  const [P, C] = it(""), [T, A] = it([]), [B, U] = it("all"), [ne, K] = it(!1), [ae, he] = it([]), [ge, Ne] = it([]), [ce, me] = it(!1), [te, re] = it(!1), [se, be] = it({}), [Oe, Ee] = it(!1), fe = On(), Te = On();
  Xt(() => {
    if (te) {
      const le = Bq(m, n, F);
      he(le.dataExel), Ne(le.columnExel);
    }
    ce && setTimeout(() => {
      De(), me(!1);
    });
  }, [m]), Xt(() => {
    !R.isEmpty(ae) && !R.isEmpty(ge) && Te.current && Te.current.link && te && setTimeout(() => {
      Te.current.link.click(), re(!1);
    });
  }, [ae, ge]), Xt(() => {
    const le = M();
    Ee([...le, ...y]);
    let H = Dz([...le, ...y], "label", "key");
    t.allEnabled && (H = [{ key: 0, text: "Todos", value: "all" }, ...H]), A(H), R.isEmpty(t.searchString) || (C(t.searchString), $({
      newField: t.field || "all",
      searchableI: le,
      newSearchQuery: t.searchString
    })), R.isEmpty(t.field) || U(t.field);
  }, [n, y]), Xt(() => {
    C(R.isEmpty(t.searchString) ? "" : t.searchString), U(R.isEmpty(t.field) ? "all" : t.field);
  }, [E]);
  const De = Pg.useReactToPrint({
    content: () => fe.current
  }), W = () => {
    if (typeof R.get(e, "onPrint", null) == "function")
      return e.onPrint();
    h({ ...d, rows: g, page: 1 }, !0), me(!0);
  }, z = () => {
    h({ ...d, rows: g, page: 1 }, !0), re(!0);
  }, $ = ({ value: le = d, newField: H = B, searchableI: Q = !1, newSearchQuery: _e = P }) => {
    let Ie = Oe;
    Q && (Ie = Q);
    const Le = R.pick(d, ["rows", "orderKey", "orderDir"]), Fe = Ro(H);
    let $e = Ie.map((Xe) => {
      let Ke = [], Ue = "";
      return R.get(Xe, "multipleColumns", !1) ? (Xe.multipleColumns.forEach((xt) => {
        Ue = Ro(xt.fieldKey || xt.key), Ke = [...Ke, Ue];
      }), Ke) : (Ue = Ro(Xe.fieldKey || Xe.key), Ue);
    });
    $e = R.flatten($e);
    let tt = {
      ...Le,
      page: 1,
      fields: $e
    };
    R.isEmpty(_e) || (tt = {
      ...tt,
      [Fe]: _e
    }), R.isEmpty(le) && (tt = { ...Le, page: 1, fields: $e }), p(tt), h(tt);
  }, M = () => {
    let le = [];
    return n.forEach((H) => {
      !H.hidden && !H.action && !H.multiple && (H.twoLines ? (R.get(H.line1, "canFilter", !0) && (le = [...le, H.line1]), R.get(H.line2, "canFilter", !0) && (le = [...le, H.line2])) : R.get(H, "canFilter", !0) && (le = [...le, H]));
    }), le;
  }, V = () => {
    $({});
  }, G = eh(R.debounce(V, 1e3), [P]), ie = () => {
    let le = null;
    return R.isEmpty(u) || (le = R.map(u, (H, Q) => {
      switch (H.componentType) {
        case "input":
          return /* @__PURE__ */ oe(
            "div",
            {
              className: R.isEmpty(H.inputContainerStyle) ? Nt.defaultTopInputContainerStyle : H.inputContainerStyle,
              children: [
                /* @__PURE__ */ O("span", { className: Nt.topInputLabel, children: H.label }),
                /* @__PURE__ */ O(
                  hd,
                  {
                    className: H.className,
                    type: H.type,
                    value: H.value,
                    icon: H.icon,
                    disabled: H.disabled,
                    fluid: H.fluid,
                    onChange: H.onChange
                  }
                )
              ]
            },
            Q
          );
        case "inputMonth":
          return /* @__PURE__ */ oe(
            "div",
            {
              className: R.isEmpty(H.inputContainerStyle) ? Nt.defaultTopInputContainerStyle : H.inputContainerStyle,
              children: [
                /* @__PURE__ */ O("span", { className: Nt.topInputLabel, children: H.label }),
                /* @__PURE__ */ O(
                  $n.Input,
                  {
                    className: H.className,
                    type: H.type,
                    value: H.value,
                    icon: H.icon,
                    disabled: H.disabled,
                    fluid: H.fluid,
                    onChange: H.onChange
                  }
                )
              ]
            },
            Q
          );
        case "check":
          return /* @__PURE__ */ oe(
            "div",
            {
              className: R.isEmpty(H.checkContainerStyle) ? Nt.defaultTopInputContainerStyle : H.checkContainerStyle,
              children: [
                /* @__PURE__ */ O("span", { className: Nt.labelCheck, children: H.leftLabel }),
                /* @__PURE__ */ O(Jn, { toggle: H.toggle !== !1, checked: H.checked, disabled: H.disabled, onChange: H.onChange }),
                /* @__PURE__ */ O("span", { className: Nt.inputLabelCheck, children: H.rightLabel })
              ]
            },
            Q
          );
        case "radio":
          return /* @__PURE__ */ oe(
            "div",
            {
              className: R.isEmpty(H.checkContainerStyle) ? Nt.defaultTopInputContainerStyle : H.checkContainerStyle,
              children: [
                /* @__PURE__ */ oe("div", { children: [
                  /* @__PURE__ */ O(
                    Bo,
                    {
                      checked: H.checkedR,
                      disabled: H.disabled,
                      onChange: H.onChange
                    }
                  ),
                  /* @__PURE__ */ O("span", { className: Nt.inputLabelCheck, children: H.rightLabel })
                ] }),
                /* @__PURE__ */ oe("div", { children: [
                  /* @__PURE__ */ O(
                    Bo,
                    {
                      checked: H.checkedL,
                      disabled: H.disabled,
                      onChange: H.onChange
                    }
                  ),
                  /* @__PURE__ */ O("span", { className: Nt.inputLabelCheck, children: H.leftLabel })
                ] })
              ]
            },
            Q
          );
        case "DropDown":
          return !H.hidden && /* @__PURE__ */ oe(
            "div",
            {
              className: R.isEmpty(H.inputContainerStyle) ? Nt.defaultTopDropdownContainerStyle : H.inputContainerStyle,
              children: [
                /* @__PURE__ */ O("span", { className: Nt.topInputLabel, children: H.label }),
                /* @__PURE__ */ O(
                  kn,
                  {
                    className: H.className,
                    selection: !0,
                    fluid: !0,
                    value: H.value,
                    multiple: H.multiple,
                    disabled: H.disabled,
                    onChange: H.onChange,
                    required: H.required,
                    search: H.search,
                    clearable: H.clearable,
                    placeholder: H.placeholder,
                    options: H.options
                  }
                )
              ]
            },
            Q
          );
        case "Label":
          return /* @__PURE__ */ oe(
            "div",
            {
              className: R.isEmpty(H.inputContainerStyle) ? Nt.defaultLabelContainerStyle : H.inputContainerStyle,
              children: [
                /* @__PURE__ */ O("span", { className: Nt.labelTitle, children: H.title }),
                /* @__PURE__ */ O("span", { className: Nt.labelValue, children: H.value })
              ]
            },
            Q
          );
        case "custom":
          return /* @__PURE__ */ O("div", { children: H.content }, Q);
        default:
          return /* @__PURE__ */ O(
            "div",
            {
              className: R.isEmpty(H.buttonContainerStyle) ? Nt.defaultLabelContainerStyle : H.buttonContainerStyle,
              children: /* @__PURE__ */ oe(
                mt,
                {
                  className: R.isEmpty(H.className) ? Nt.defaultTopButton : H.className,
                  disabled: R.get(H, "disabled", !1),
                  onClick: H.onClick,
                  children: [
                    !R.isEmpty(H.icon) && /* @__PURE__ */ O(We, { className: Nt.addButtonIcon, name: H.icon }),
                    R.get(H, "content", "")
                  ]
                },
                Q
              )
            },
            Q
          );
      }
    })), /* @__PURE__ */ O("div", { className: Nt.renderTopButtonsContainer, children: le });
  }, Pe = () => {
    V(), be({}), k(!1);
  }, Z = () => {
    $({ value: {} });
  }, Se = (le) => {
    G.cancel(), C(le);
  };
  return /* @__PURE__ */ oe(zr, { children: [
    /* @__PURE__ */ oe("div", { className: I ? `${Nt.mainContainer} ${I}` : Nt.mainContainer, children: [
      R.get(t, "searchable", !0) && /* @__PURE__ */ O(
        "div",
        {
          className: Nt.searchContainer,
          style: {
            justifyContent: R.get(t, "searchPosition", "flex-start"),
            width: R.get(t, "width", "100%")
          },
          children: /* @__PURE__ */ oe("div", { className: Nt.searchWrapper, children: [
            !w && /* @__PURE__ */ O(
              hd,
              {
                className: Nt.searchInput,
                name: "searchString",
                disabled: R.get(t, "searchDisabled", !1),
                onKeyUp: G,
                onChange: (le) => {
                  Se(le.target.value);
                },
                placeholder: "Buscar",
                value: P,
                onClear: Z,
                dropdown: {
                  disabled: R.get(t, "searchDisabled", !1),
                  options: T,
                  name: "searchField",
                  onChange: (le, { value: H }) => {
                    U(H), R.isEmpty(P) || $({ newField: H });
                  },
                  value: B
                }
              }
            ),
            R.get(t, "filterButton", !0) && /* @__PURE__ */ O(
              mt,
              {
                disabled: R.get(t, "searchDisabled", !1),
                className: `${Nt.filterButton} ${R.get(t, "hideOnMobile", !1) ? Nt.hideOnMobile : ""}`,
                onClick: () => {
                  K(!0);
                },
                children: /* @__PURE__ */ O(We, { className: Nt.addButtonIcon, name: "filter" })
              }
            ),
            w && /* @__PURE__ */ oe(mt, { className: Nt.clearButton, onClick: Pe, children: [
              /* @__PURE__ */ O(We, { name: "filter" }),
              "Limpiar"
            ] })
          ] })
        }
      ),
      !R.isEmpty(u) && /* @__PURE__ */ O("div", { className: Nt.topButtonsDesktop, children: ie() }),
      /* @__PURE__ */ oe("div", { className: Nt.addButtonsContainer, children: [
        !R.isEmpty(r) && /* @__PURE__ */ O("div", { className: Nt.addButtonContainer, children: /* @__PURE__ */ oe(
          mt,
          {
            className: Nt.addButton,
            disabled: R.get(r, "disabled", !1),
            onClick: s || (() => c("Add", null)),
            children: [
              /* @__PURE__ */ O(We, { className: Nt.addButtonIcon, name: R.get(r, "icon", "plus") }),
              R.get(r, "label", "")
            ]
          }
        ) }),
        o,
        R.get(e, "printable", !0) && /* @__PURE__ */ oe("div", { className: S ? Nt.hidePrintButtonsMobile : "", children: [
          R.get(e, "visiblePDF", !0) && /* @__PURE__ */ O(mt, { onClick: W, className: Nt.printButton, primary: !0, icon: "print" }),
          R.get(e, "visibleExcel", !0) && /* @__PURE__ */ O(mt, { className: Nt.exelButton, icon: "file excel", onClick: z })
        ] })
      ] })
    ] }),
    !R.isEmpty(u) && /* @__PURE__ */ O("div", { className: Nt.secondLine, children: ie() }),
    ce ? /* @__PURE__ */ O("div", { style: { display: "none" }, children: /* @__PURE__ */ O("div", { ref: fe, children: /* @__PURE__ */ O(
      oC,
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
    te ? /* @__PURE__ */ O(pq, { data: ae, headers: ge, filename: R.get(e, "printHeader.title", "Título"), ref: Te }) : void 0,
    ne && /* @__PURE__ */ O(
      sC,
      {
        onClose: () => {
          K(!1);
        },
        customSearchKeys: y,
        searchableItems: Oe,
        searchParams: d,
        setSearchParams: p,
        dataHandler: h,
        formData: se,
        setFormData: be,
        setIsClearButton: k,
        clearFilter: Pe
      }
    )
  ] });
};
lC.propTypes = {
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
const uV = "_tableDesktopOnly_11faq_1", dV = "_cardsContainerMobile_11faq_21", fV = "_tableScroll_11faq_85", pV = "_tableScrollWrapper_11faq_97", hV = "_tableWidthAuto_11faq_107", mV = "_stickyFooterTable_11faq_117", mi = {
  tableDesktopOnly: uV,
  cardsContainerMobile: dV,
  tableScroll: fV,
  tableScrollWrapper: pV,
  tableWidthAuto: hV,
  stickyFooterTable: mV
}, gV = ({
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
  widthAuto: U = !1,
  mobileCardView: ne = !1,
  cardLine1: K = [],
  cardLine2: ae = [],
  cardLine3: he = [],
  cardLine4: ge = [],
  onLoadMore: Ne = null,
  // Handler personalizado para scroll infinito
  isLoadingMore: ce = !1,
  // Estado de carga para scroll infinito
  hasMore: me = null,
  // Si hay más datos (si es null, se calcula automáticamente)
  mergeConfig: te = null,
  // Configuración para merge automático en scroll infinito
  topPlaceClassName: re = "",
  // Clase CSS personalizada para TopPlace
  hidePrintButtons: se = !1,
  // Oculta los botones de imprimir PDF y Excel
  scrollBody: be = !1,
  // Envuelve la tabla en un contenedor con scroll para que solo el body haga scroll
  downloadFileFetcher: Oe
}) => {
  const [Ee, fe] = it({ rows: 10, page: 1 }), [Te, De] = it(!1), [W, z] = it([]), [$, M] = it([]), [V, G] = it(!1), ie = {
    searchable: !0,
    searchPosition: "flex-start",
    searchDisabled: !1,
    filterButton: !0,
    searchString: "",
    field: "",
    allEnabled: !0,
    width: "100%"
  };
  return Xt(() => {
    fe({ ...Ee, ...m });
  }, []), Xt(() => {
    G(B);
  }, [B]), Xt(() => {
    R.isEmpty(A) || R.isEqual(Ee, A) || fe(A);
  }, [A]), /* @__PURE__ */ oe(zr, { children: [
    p && /* @__PURE__ */ O(
      lC,
      {
        data: e,
        columns: t,
        topButtons: n,
        searcher: { ...ie, ...u },
        searchRefresh: c,
        addButton: w ? b : null,
        extraAddButtons: _,
        onAddButtonClick: k,
        searchParams: Ee,
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
        isClearButton: V,
        setIsClearButton: G,
        topPlaceClassName: re,
        hidePrintButtons: se
      }
    ),
    ne && /* @__PURE__ */ O("div", { className: mi.cardsContainerMobile, children: /* @__PURE__ */ O(
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
        setConcatKeys: M,
        concatAll: Te,
        setConcatAll: De,
        checkAllData: E,
        setRowStyle: y,
        totalRows: g,
        mobileCardView: ne,
        cardLine1: K,
        cardLine2: ae,
        cardLine3: he,
        cardLine4: ge,
        dataHandler: C,
        searchParams: Ee,
        setSearchParams: fe,
        onLoadMore: Ne,
        isLoadingMoreProp: ce,
        hasMore: me,
        mergeConfig: te,
        downloadFileFetcher: Oe
      }
    ) }),
    /* @__PURE__ */ O("div", { className: `${be ? mi.tableScroll : ""} ${mi.tableScrollWrapper}`, children: /* @__PURE__ */ oe(
      Ot,
      {
        sortable: !0,
        celled: !0,
        striped: !0,
        compact: "very",
        className: `${ne ? mi.tableDesktopOnly : ""} ${U ? mi.tableWidthAuto : ""}`,
        children: [
          /* @__PURE__ */ O(
            eg,
            {
              columns: t,
              searchParams: Ee,
              setSearchParams: fe,
              totalRows: g,
              dataHandler: C,
              concatValue: W,
              setConcatValue: z,
              concatKeys: $,
              setConcatKeys: M,
              concatAll: Te,
              setConcatAll: De,
              widthAuto: U
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
              setConcatKeys: M,
              concatAll: Te,
              setConcatAll: De,
              checkAllData: E,
              setRowStyle: y,
              totalRows: g,
              mobileCardView: !1,
              cardLine1: K,
              cardLine2: ae,
              cardLine3: he,
              cardLine4: ge,
              downloadFileFetcher: Oe
            }
          )
        ]
      }
    ) }),
    h && /* @__PURE__ */ O(Ot, { className: `${ne ? mi.tableDesktopOnly : ""} ${mi.stickyFooterTable}`, children: /* @__PURE__ */ O(
      XE,
      {
        visiblePagination: h,
        searchParams: Ee,
        setSearchParams: fe,
        dataHandler: C,
        totalRows: g
      }
    ) })
  ] });
};
gV.propTypes = {
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
function vV(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function N_(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, cC(r.key), r);
  }
}
function yV(e, t, n) {
  return t && N_(e.prototype, t), n && N_(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function bV(e, t, n) {
  return (t = cC(t)) in e ? Object.defineProperty(e, t, {
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
function I_(e, t) {
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
    t % 2 ? I_(Object(n), !0).forEach(function(r) {
      bV(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : I_(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function _V(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function cC(e) {
  var t = _V(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
var uC = { exports: {} };
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
})(uC);
var A_ = uC.exports, wV = function(t) {
  return typeof Blob > "u" ? !1 : t instanceof Blob || Object.prototype.toString.call(t) === "[object Blob]";
}, R_ = {
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
}, xV = typeof window < "u" && typeof window.document < "u", Zo = xV ? window : {}, gd = function(t) {
  return t > 0 && t < 1 / 0;
}, EV = Array.prototype.slice;
function kg(e) {
  return Array.from ? Array.from(e) : EV.call(e);
}
var CV = /^image\/.+$/;
function sm(e) {
  return CV.test(e);
}
function OV(e) {
  var t = sm(e) ? e.substr(6) : "";
  return t === "jpeg" && (t = "jpg"), ".".concat(t);
}
var dC = String.fromCharCode;
function SV(e, t, n) {
  var r = "", o;
  for (n += t, o = t; o < n; o += 1)
    r += dC(e.getUint8(o));
  return r;
}
function TV() {
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
var PV = Zo.btoa;
function M_(e, t) {
  for (var n = [], r = 8192, o = new Uint8Array(e); o.length > 0; )
    n.push(dC.apply(null, kg(o.subarray(0, r)))), o = o.subarray(r);
  return "data:".concat(t, ";base64,").concat(PV(n.join("")));
}
function kV(e) {
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
      if (SV(t, d, 4) === "Exif") {
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
function NV(e) {
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
var IV = /\.\d*(?:0|9){12}\d*$/;
function D_(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
  return IV.test(e) ? Math.round(e * t) / t : e;
}
function Cl(e) {
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
function AV(e) {
  for (var t = kg(new Uint8Array(e)), n = t.length, r = [], o = 0; o + 3 < n; ) {
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
function RV(e, t) {
  var n = kg(new Uint8Array(e));
  if (n[2] !== 255 || n[3] !== 224)
    return e;
  var r = n[4] * 256 + n[5], o = [255, 216].concat(t, n.slice(4 + r));
  return new Uint8Array(o);
}
var MV = Zo.ArrayBuffer, Qp = Zo.FileReader, gi = Zo.URL || Zo.webkitURL, DV = /\.\w+$/, LV = Zo.Compressor, FV = /* @__PURE__ */ function() {
  function e(t, n) {
    vV(this, e), this.file = t, this.exif = [], this.image = new Image(), this.options = ku(ku({}, R_), n), this.aborted = !1, this.result = null, this.init();
  }
  return yV(e, [{
    key: "init",
    value: function() {
      var n = this, r = this.file, o = this.options;
      if (!wV(r)) {
        this.fail(new Error("The first argument must be a File or Blob object."));
        return;
      }
      var s = r.type;
      if (!sm(s)) {
        this.fail(new Error("The first argument must be an image File or Blob object."));
        return;
      }
      if (!gi || !Qp) {
        this.fail(new Error("The current browser does not support image compression."));
        return;
      }
      MV || (o.checkOrientation = !1, o.retainExif = !1);
      var u = s === "image/jpeg", c = u && o.checkOrientation, d = u && o.retainExif;
      if (gi && !c && !d)
        this.load({
          url: gi.createObjectURL(r)
        });
      else {
        var p = new Qp();
        this.reader = p, p.onload = function(h) {
          var m = h.target, g = m.result, y = {}, b = 1;
          c && (b = kV(g), b > 1 && md(y, NV(b))), d && (n.exif = AV(g)), c || d ? !gi || b > 1 ? y.url = M_(g, s) : y.url = gi.createObjectURL(r) : y.url = g, n.load(y);
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
        TV() ? r.draw(ku(ku({}, n), {}, {
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
        var U = [P, S];
        S = U[0], P = U[1];
        var ne = [A, T];
        T = ne[0], A = ne[1];
      }
      F && (C = T / A);
      var K = Cl({
        aspectRatio: C,
        width: E,
        height: I
      }, "contain");
      E = K.width, I = K.height;
      var ae = Cl({
        aspectRatio: C,
        width: S,
        height: P
      }, "cover");
      if (S = ae.width, P = ae.height, F) {
        var he = Cl({
          aspectRatio: C,
          width: T,
          height: A
        }, b.resize);
        T = he.width, A = he.height;
      } else {
        var ge = Cl({
          aspectRatio: C,
          width: T,
          height: A
        }), Ne = ge.width;
        T = Ne === void 0 ? o : Ne;
        var ce = ge.height;
        A = ce === void 0 ? s : ce;
      }
      T = Math.floor(D_(Math.min(Math.max(T, S), E))), A = Math.floor(D_(Math.min(Math.max(A, P), I)));
      var me = -T / 2, te = -A / 2, re = T, se = A, be = [];
      if (F) {
        var Oe = 0, Ee = 0, fe = o, Te = s, De = Cl({
          aspectRatio: C,
          width: o,
          height: s
        }, {
          contain: "cover",
          cover: "contain"
        }[b.resize]);
        fe = De.width, Te = De.height, Oe = (o - fe) / 2, Ee = (s - Te) / 2, be.push(Oe, Ee, fe, Te);
      }
      if (be.push(me, te, re, se), k) {
        var W = [A, T];
        T = W[0], A = W[1];
      }
      _.width = T, _.height = A, sm(b.mimeType) || (b.mimeType = g.type);
      var z = "transparent";
      g.size > b.convertSize && b.convertTypes.indexOf(b.mimeType) >= 0 && (b.mimeType = "image/jpeg");
      var $ = b.mimeType === "image/jpeg";
      if ($ && (z = "#fff"), w.fillStyle = z, w.fillRect(0, 0, T, A), b.beforeDraw && b.beforeDraw.call(this, w, _), !this.aborted && (w.save(), w.translate(T / 2, A / 2), w.rotate(c * Math.PI / 180), w.scale(p, m), w.drawImage.apply(w, [y].concat(be)), w.restore(), b.drew && b.drew.call(this, w, _), !this.aborted)) {
        var M = function(G) {
          if (!r.aborted) {
            var ie = function(le) {
              return r.done({
                naturalWidth: o,
                naturalHeight: s,
                result: le
              });
            };
            if (G && $ && b.retainExif && r.exif && r.exif.length > 0) {
              var Pe = function(le) {
                return ie(A_(M_(RV(le, r.exif), b.mimeType)));
              };
              if (G.arrayBuffer)
                G.arrayBuffer().then(Pe).catch(function() {
                  r.fail(new Error("Failed to read the compressed image with Blob.arrayBuffer()."));
                });
              else {
                var Z = new Qp();
                r.reader = Z, Z.onload = function(Se) {
                  var le = Se.target;
                  Pe(le.result);
                }, Z.onabort = function() {
                  r.fail(new Error("Aborted to read the compressed image with FileReader."));
                }, Z.onerror = function() {
                  r.fail(new Error("Failed to read the compressed image with FileReader."));
                }, Z.onloadend = function() {
                  r.reader = null;
                }, Z.readAsArrayBuffer(G);
              }
            } else
              ie(G);
          }
        };
        _.toBlob ? _.toBlob(M, b.mimeType, b.quality) : M(A_(_.toDataURL(b.mimeType, b.quality)));
      }
    }
  }, {
    key: "done",
    value: function(n) {
      var r = n.naturalWidth, o = n.naturalHeight, s = n.result, u = this.file, c = this.image, d = this.options;
      if (gi && c.src.indexOf("blob:") === 0 && gi.revokeObjectURL(c.src), s)
        if (d.strict && !d.retainExif && s.size > u.size && d.mimeType === u.type && !(d.width > r || d.height > o || d.minWidth > r || d.minHeight > o || d.maxWidth < r || d.maxHeight < o))
          s = u;
        else {
          var p = u.name;
          p && s.type !== u.type && (p = p.replace(DV, OV(s.type)));
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
      return window.Compressor = LV, e;
    }
    /**
     * Change the default options.
     * @param {Object} options - The new default options.
     */
  }, {
    key: "setDefaults",
    value: function(n) {
      md(R_, n);
    }
  }]);
}();
//! moment.js locale configuration
//! locale : Spanish [es]
//! author : Julio Napurí : https://github.com/julionc
var L_ = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split(
  "_"
), $V = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), Jp = [
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
], F_ = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
ze.defineLocale("es", {
  months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
    "_"
  ),
  monthsShort: function(e, t) {
    return e ? /-MMM-/.test(t) ? $V[e.month()] : L_[e.month()] : L_;
  },
  monthsRegex: F_,
  monthsShortRegex: F_,
  monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
  monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
  monthsParse: Jp,
  longMonthsParse: Jp,
  shortMonthsParse: Jp,
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
ze.locale("es");
const BV = (e) => new Promise((t, n) => {
  new FV(e, {
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
}), jV = (e = "") => {
  const t = R.split(e, ".");
  return R.toLower(t.length > 1 ? t.pop() : "");
}, WV = (e = "") => {
  const t = String(e).match(/^data:([^;]+);base64,/i), n = t ? R.toLower(t[1]) : "";
  return R.startsWith(n, "image/") ? "image" : R.startsWith(n, "audio/") ? "audio" : R.startsWith(n, "video/") ? "video" : n === "application/pdf" || R.includes(n, "pdf") ? "pdf" : R.includes(n, "word") || R.includes(n, "officedocument.wordprocessingml") ? "doc" : R.includes(n, "excel") || R.includes(n, "spreadsheetml") ? "xls" : R.includes(n, "powerpoint") || R.includes(n, "presentationml") ? "ppt" : R.includes(n, "zip") || R.includes(n, "x-7z-compressed") || R.includes(n, "x-rar-compressed") || R.includes(n, "tar") || R.includes(n, "gzip") ? "zip" : R.includes(n, "text/") || R.includes(n, "json") || R.includes(n, "xml") ? "txt" : "file";
}, ni = (e = []) => ` ${R.join(e, " ")} `, So = (e, t) => {
  const n = ` ${R.trim(R.toLower(t))} `;
  return R.includes(e, n);
}, zV = ni(["doc", "docx", "odt"]), UV = ni(["xls", "xlsx", "csv", "ods"]), HV = ni(["ppt", "pptx", "odp"]), YV = ni(["zip", "rar", "7z", "tar", "gz", "bz2"]), qV = ni(["txt", "md", "rtf", "json", "xml", "log", "yaml", "yml"]), VV = ni(["jpg", "jpeg", "png", "webp", "apng", "avif", "gif", "svg", "bmp", "ico", "tiff"]), GV = ni(["mp4", "webm", "ogg", "mov", "m4v", "mkv", "avi", "wmv", "flv"]), KV = ni(["mp3", "wav", "ogg", "m4a", "aac", "flac", "wma", "opus", "weba"]), $_ = (e = "", t = "") => {
  const n = R.toLower(t);
  if (n && R.startsWith(n, "image/")) return "image";
  if (n && R.startsWith(n, "audio/")) return "audio";
  if (n && R.startsWith(n, "video/")) return "video";
  const r = jV(e);
  return r === "pdf" ? "pdf" : So(VV, r) ? "image" : So(GV, r) ? "video" : So(KV, r) ? "audio" : So(zV, r) ? "doc" : So(UV, r) ? "xls" : So(HV, r) ? "ppt" : So(YV, r) ? "zip" : So(qV, r) ? "txt" : "file";
}, Nu = (e, t) => {
  if (!e)
    return "-";
  const n = ze(e);
  return n.isValid() ? n.format(t) : "-";
};
function ZV(e) {
  if (Number.isNaN(Number(e))) return "";
  const t = Math.floor(e / 60), n = Math.floor(t / 60), r = Math.floor(n / 24), o = n - r * 24, s = t - o * 60 - r * 24 * 60;
  return o < 1 ? `${s}m` : r < 1 ? `${o}h ${s}m` : `${r}d ${o}h ${s}m`;
}
const XV = "_header_19o3d_3", QV = "_inputSearch_19o3d_17", JV = "_totalTime_19o3d_31", eG = "_spaceClass_19o3d_43", tG = "_nuevo_19o3d_51", nG = "_atender_19o3d_61", rG = "_cliente_19o3d_71", aG = "_alertBadge_19o3d_81", oG = "_icon_19o3d_99", iG = "_headerTable_19o3d_107", sG = "_headerFooter_19o3d_119", lG = "_cell_19o3d_129", cG = "_container_19o3d_143", uG = "_containerCenter_19o3d_155", dG = "_containerLeft_19o3d_167", fG = "_containerUs_19o3d_181", pG = "_containerPrincipa_19o3d_195", hG = "_fixedUserInfo_19o3d_207", mG = "_containerRightUserRow_19o3d_217", gG = "_containerTell_19o3d_229", vG = "_containerRightUserRowContainer_19o3d_245", yG = "_headerLabel_19o3d_257", bG = "_pDate_19o3d_269", _G = "_headerTitlesss_19o3d_289", wG = "_headerTitlesssDate_19o3d_299", xG = "_containerTelu_19o3d_311", EG = "_containerRight_19o3d_217", CG = "_containerBottom_19o3d_335", OG = "_containerLeftUser_19o3d_343", SG = "_containerLeftGroups_19o3d_357", TG = "_containerRightUser_19o3d_217", PG = "_headerTitle_19o3d_289", kG = "_tableContainer_19o3d_391", NG = "_containerCont_19o3d_401", IG = "_arrayCellContainer_19o3d_409", AG = "_arrayCell_19o3d_409", RG = "_DesConectadoText_19o3d_445", MG = "_conectadoText_19o3d_455", DG = "_cellButton_19o3d_465", LG = "_cellArrayButton_19o3d_479", FG = "_tableCell_19o3d_497", $G = "_headerMenu_19o3d_509", BG = "_headerMenuItem_19o3d_517", jG = "_tableCellHeader_19o3d_525", WG = "_tableCellHeaderCheck_19o3d_537", zG = "_tableCellHeaderIcon_19o3d_545", UG = "_tableCellPag_19o3d_553", HG = "_ColorActive_19o3d_561", YG = "_groupHover_19o3d_569", qG = "_emptyChat_19o3d_579", VG = "_ButtonEraser_19o3d_589", GG = "_ButtonRoute_19o3d_603", KG = "_ButtonEdit_19o3d_617", ZG = "_ButtonIcon_19o3d_631", XG = "_ButtonLabel_19o3d_643", QG = "_ButtonLink_19o3d_651", JG = "_ButtonPedidos_19o3d_667", eK = "_ButtonResend_19o3d_691", tK = "_linkMap_19o3d_705", nK = "_ButtonMap_19o3d_731", rK = "_weightText_19o3d_787", aK = "_positiveButton_19o3d_795", oK = "_multipleActions_19o3d_811", iK = "_positiveAddButton_19o3d_821", sK = "_positiveDesButton_19o3d_837", lK = "_negativeButton_19o3d_855", cK = "_menuTable_19o3d_879", uK = "_iconTable_19o3d_887", dK = "_detalleLabel_19o3d_911", fK = "_modalHeader_19o3d_921", pK = "_codeMap_19o3d_933", hK = "_paginationLabel_19o3d_941", mK = "_paginationCell_19o3d_949", gK = "_pagination_19o3d_941", vK = "_itemCount_19o3d_971", yK = "_labelColor_19o3d_979", bK = "_blockString_19o3d_993", _K = "_emptyDataIcon_19o3d_1009", wK = "_IconDataBase_19o3d_1025", xK = "_labelDropdown_19o3d_1033", EK = "_searchContainer_19o3d_1055", CK = "_rowMiddle_19o3d_1065", OK = "_printButton_19o3d_1081", SK = "_exelButton_19o3d_1091", TK = "_printableButtons_19o3d_1099", PK = "_searchInputStyle_19o3d_1109", ft = {
  header: XV,
  inputSearch: QV,
  totalTime: JV,
  spaceClass: eG,
  nuevo: tG,
  atender: nG,
  cliente: rG,
  alertBadge: aG,
  icon: oG,
  headerTable: iG,
  headerFooter: sG,
  cell: lG,
  container: cG,
  containerCenter: uG,
  containerLeft: dG,
  containerUs: fG,
  containerPrincipa: pG,
  fixedUserInfo: hG,
  containerRightUserRow: mG,
  containerTell: gG,
  containerRightUserRowContainer: vG,
  headerLabel: yG,
  pDate: bG,
  headerTitlesss: _G,
  headerTitlesssDate: wG,
  containerTelu: xG,
  containerRight: EG,
  containerBottom: CG,
  containerLeftUser: OG,
  containerLeftGroups: SG,
  containerRightUser: TG,
  headerTitle: PG,
  tableContainer: kG,
  containerCont: NG,
  arrayCellContainer: IG,
  arrayCell: AG,
  DesConectadoText: RG,
  conectadoText: MG,
  cellButton: DG,
  cellArrayButton: LG,
  tableCell: FG,
  headerMenu: $G,
  headerMenuItem: BG,
  tableCellHeader: jG,
  tableCellHeaderCheck: WG,
  tableCellHeaderIcon: zG,
  tableCellPag: UG,
  ColorActive: HG,
  groupHover: YG,
  emptyChat: qG,
  ButtonEraser: VG,
  ButtonRoute: GG,
  ButtonEdit: KG,
  ButtonIcon: ZG,
  ButtonLabel: XG,
  ButtonLink: QG,
  ButtonPedidos: JG,
  ButtonResend: eK,
  linkMap: tK,
  ButtonMap: nK,
  weightText: rK,
  positiveButton: aK,
  multipleActions: oK,
  positiveAddButton: iK,
  positiveDesButton: sK,
  negativeButton: lK,
  menuTable: cK,
  iconTable: uK,
  detalleLabel: dK,
  modalHeader: fK,
  codeMap: pK,
  paginationLabel: hK,
  paginationCell: mK,
  pagination: gK,
  itemCount: vK,
  labelColor: yK,
  blockString: bK,
  emptyDataIcon: _K,
  IconDataBase: wK,
  labelDropdown: xK,
  searchContainer: EK,
  rowMiddle: CK,
  printButton: OK,
  exelButton: SK,
  printableButtons: TK,
  searchInputStyle: PK
}, fC = ({
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
  const k = On(null), [F, E] = it(0), I = F === 0 ? null : ZV(F), S = w || R.isEmpty(s) && R.isEmpty(u) && R.isEmpty(d) && R.isEmpty(p);
  Xt(() => {
    n && P();
  }, [n]);
  const P = Pg.useReactToPrint({
    content: () => {
      if (!k.current || !e.current) return null;
      const C = document.createElement("div"), T = k.current.cloneNode(!0), A = e.current.cloneNode(!0), B = document.createElement("div");
      B.classList.add(ft.tableContainer);
      const U = document.createElement("div");
      return U.classList.add(ft.containerCont), B.appendChild(U).appendChild(A), C.appendChild(T).appendChild(B), C;
    },
    onBeforeGetContent: async () => {
      if (_) {
        const C = Math.floor(ze.duration(ze().diff(ze(b))).asSeconds());
        E(C);
      }
      await new Promise((C) => setTimeout(C, 100));
    },
    onAfterPrint: () => {
      r();
    }
  });
  return /* @__PURE__ */ oe("div", { children: [
    !o && /* @__PURE__ */ O(mt, { onClick: P, className: ft.printButton, primary: !0, icon: "print" }),
    /* @__PURE__ */ O("div", { style: { display: "none" }, children: /* @__PURE__ */ oe("div", { className: ft.container, ref: k, children: [
      /* @__PURE__ */ O("div", { className: ft.containerCenter, children: /* @__PURE__ */ oe(Xn, { as: "h2", icon: !0, children: [
        /* @__PURE__ */ O("span", { className: ft.titleText, children: t.company }),
        /* @__PURE__ */ O(Xn.Subheader, { children: t.title }),
        (I || h || g) && /* @__PURE__ */ oe(Xn.Subheader, { className: ft.totalInfoRow, children: [
          /* @__PURE__ */ O("span", { className: `${ft.tag} ${ft[h.toLowerCase().replace(/\s+/g, "")]}`, children: "Tab " }),
          h && /* @__PURE__ */ O("span", { className: `${ft.tag} ${ft[h.toLowerCase().replace(/\s+/g, "")]}`, children: h }),
          I && /* @__PURE__ */ O("span", { className: ft.spaceClass, children: I }),
          g && /* @__PURE__ */ O("span", { className: ft.alertBadge, style: { backgroundColor: m }, children: g })
        ] }),
        !R.isEmpty(t.subTitle) && /* @__PURE__ */ O(Xn.Subheader, { children: t.subTitle })
      ] }) }),
      !y && /* @__PURE__ */ oe("div", { className: ft.containerBottom, children: [
        /* @__PURE__ */ oe("div", { className: ft.containerLeft, children: [
          /* @__PURE__ */ oe("div", { children: [
            /* @__PURE__ */ O("span", { className: ft.headerTitle, children: "Cliente:" }),
            " ",
            s
          ] }),
          R.isEmpty(d) && R.isEmpty(u) && /* @__PURE__ */ oe("div", { className: ft.pDate, children: [
            /* @__PURE__ */ O("span", { className: ft.headerTitlesss, children: "Usuario:" }),
            /* @__PURE__ */ O("span", { children: t.user })
          ] })
        ] }),
        /* @__PURE__ */ oe("div", { className: ft.containerLeftUser, children: [
          /* @__PURE__ */ oe("div", { children: [
            /* @__PURE__ */ O("span", { className: ft.headerTitle, children: "Canal:" }),
            " ",
            c
          ] }),
          !R.isEmpty(d) && R.isEmpty(u) && R.isEmpty(p) && /* @__PURE__ */ oe("div", { className: ft.pDate, children: [
            /* @__PURE__ */ O("span", { className: ft.headerTitlesss, children: "Usuario:" }),
            /* @__PURE__ */ O("span", { children: t.user })
          ] }),
          R.isEmpty(d) && !R.isEmpty(u) && R.isEmpty(p) && /* @__PURE__ */ oe("div", { className: ft.pDate, children: [
            /* @__PURE__ */ O("span", { className: ft.headerTitlesss, children: "Usuario:" }),
            /* @__PURE__ */ O("span", { children: t.user })
          ] }),
          R.isEmpty(d) && R.isEmpty(u) && R.isEmpty(p) && /* @__PURE__ */ oe("div", { className: ft.pDate, children: [
            /* @__PURE__ */ O("span", { className: ft.headerTitlesssDate, children: "Fecha:" }),
            /* @__PURE__ */ O("span", { children: Nu(/* @__PURE__ */ new Date(), "DD/MM/YYYY, hh:mm A") })
          ] })
        ] }),
        !R.isEmpty(u) && /* @__PURE__ */ oe("div", { className: ft.containerTelu, children: [
          /* @__PURE__ */ oe("div", { children: [
            /* @__PURE__ */ O("span", { className: ft.headerTitle, children: "Teléfono:" }),
            " ",
            u
          ] }),
          R.isEmpty(d) && !R.isEmpty(p) ? /* @__PURE__ */ oe("div", { className: ft.pDate, children: [
            /* @__PURE__ */ O("span", { className: ft.headerTitlesss, children: "Usuario:" }),
            /* @__PURE__ */ O("span", { children: t.user })
          ] }) : R.isEmpty(d) && R.isEmpty(p) ? /* @__PURE__ */ oe("div", { className: ft.pDate, children: [
            /* @__PURE__ */ O("span", { className: ft.headerTitlesssDate, children: "Fecha:" }),
            /* @__PURE__ */ O("span", { children: Nu(/* @__PURE__ */ new Date(), "DD/MM/YYYY, hh:mm A") })
          ] }) : null
        ] }),
        !R.isEmpty(d) && /* @__PURE__ */ oe("div", { className: ft.containerLeftUser, children: [
          /* @__PURE__ */ oe("div", { children: [
            /* @__PURE__ */ O("span", { className: ft.headerTitle, children: "Etiquetas:" }),
            R.map(d, (C, T) => /* @__PURE__ */ oe("span", { className: ft.tag, children: [
              C.name,
              T < d.length - 1 && /* @__PURE__ */ O("span", { children: ", " })
            ] }, T))
          ] }),
          !R.isEmpty(p) && /* @__PURE__ */ oe("div", { className: ft.pDate, children: [
            /* @__PURE__ */ O("span", { className: ft.headerTitlesss, children: "Usuario:" }),
            /* @__PURE__ */ O("span", { children: t.user })
          ] })
        ] }),
        !R.isEmpty(p) && /* @__PURE__ */ oe("div", { className: ft.containerLeftUser, children: [
          /* @__PURE__ */ oe("div", { className: ft.containerLeftGroups, children: [
            /* @__PURE__ */ O("span", { className: ft.headerTitle, children: "Grupo:" }),
            " ",
            p
          ] }),
          /* @__PURE__ */ oe("div", { className: ft.pDate, children: [
            /* @__PURE__ */ O("span", { className: ft.headerTitlesssDate, children: "Fecha:" }),
            /* @__PURE__ */ O("span", { children: Nu(/* @__PURE__ */ new Date(), "DD/MM/YYYY, hh:mm A") })
          ] })
        ] })
      ] }),
      y && /* @__PURE__ */ O("div", { className: `${ft.fixedUserInfo} ${S ? ft.containerLeftUser : ""}`, children: /* @__PURE__ */ oe("div", { className: ft.containerRightUserRowContainer, children: [
        /* @__PURE__ */ oe("div", { className: ft.containerRightUserRow, children: [
          /* @__PURE__ */ O("span", { className: ft.headerLabel, children: "Usuario:" }),
          " ",
          /* @__PURE__ */ O("span", { children: t.user })
        ] }),
        /* @__PURE__ */ oe("div", { className: ft.containerRightUserRow, children: [
          /* @__PURE__ */ O("span", { className: ft.headerLabel, children: "Fecha:" }),
          " ",
          /* @__PURE__ */ O("span", { children: Nu(/* @__PURE__ */ new Date(), "DD/MM/YYYY, hh:mm A") })
        ] })
      ] }) })
    ] }) })
  ] });
};
fC.propTypes = {
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
const kK = "_attachmentsContainer_4kv5c_1", NK = "_attachment_4kv5c_1", IK = "_noShowInput_4kv5c_71", AK = "_image_4kv5c_79", RK = "_icon_4kv5c_93", MK = "_fileButton_4kv5c_111", DK = "_fileButtonLabel_4kv5c_159", LK = "_fixedIcon_4kv5c_183", FK = "_stateIndicator_4kv5c_199", $K = "_rounded_4kv5c_245", BK = "_roundedImage_4kv5c_253", jK = "_printImageWrapper_4kv5c_263", WK = "_printImageOnly_4kv5c_287", In = {
  attachmentsContainer: kK,
  attachment: NK,
  noShowInput: IK,
  image: AK,
  icon: RK,
  fileButton: MK,
  fileButtonLabel: DK,
  fixedIcon: LK,
  stateIndicator: FK,
  rounded: $K,
  roundedImage: BK,
  printImageWrapper: jK,
  printImageOnly: WK
}, B_ = {
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
}, j_ = {
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
}, zK = "image/*,video/*,audio/*,.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.zip,.rar,.7z,.tar,.gz,.csv", UK = (e, t) => e || (t === "image" ? "image/*" : t === "video" ? "video/*" : t === "audio" ? "audio/*" : t === "media" ? "image/*,video/*,audio/*" : t === "file" ? "*/*" : zK), Iu = (e) => e == null || e === "" ? [] : R.isArray(e) ? e : [e], HK = ({
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
  const [U, ne] = it([]), [K, ae] = it({ open: !1, selectedImage: null }), [he, ge] = it(0), [Ne, ce] = it(!1), me = On(null), te = On([]), re = On(null), se = e !== void 0 ? e : n, be = (H) => {
    t && t(H), r && r(H);
  };
  Xt(() => {
    const H = Iu(se);
    !R.isEmpty(H) && !R.isEqual(te.current, H) ? (async () => {
      const Q = await Promise.all(
        R.map(H, async (_e, Ie) => {
          const Le = String(_e).startsWith("data:") || String(_e).startsWith("blob:"), Fe = String(_e).match(/^(http(?!s?:image)|image)/gi) === null && !Le;
          let $e = _e;
          Fe && u && ($e = await u({ uri: _e }));
          let tt = "file", Xe = "archivo";
          if (Le)
            tt = WV(String(_e)), U[Ie] && U[Ie].name && U[Ie].name !== "archivo" && (Xe = U[Ie].name);
          else if (typeof _e == "string") {
            const Ke = String(_e).split(/[?#]/)[0];
            tt = $_(Ke);
            try {
              const Ue = decodeURIComponent(Ke);
              Ue.includes("/") ? Xe = Ue.substring(Ue.lastIndexOf("/") + 1) : Xe = Ue;
            } catch {
              Xe = "archivo";
            }
          }
          return {
            link: $e,
            type: tt,
            isLocal: Le,
            name: Xe || "archivo",
            mime: ""
          };
        })
      );
      ne(Q), te.current = H;
    })() : R.isEmpty(H) && (ne([]), te.current = []);
  }, [se, u]);
  const Oe = () => {
    me.current && me.current.click();
  }, Ee = (H) => new Promise((Q) => {
    const _e = new FileReader();
    _e.onloadend = () => Q(_e.result), _e.readAsDataURL(H);
  }), fe = async (H) => {
    H.preventDefault();
    const Q = Array.from(H.target.files || []);
    if (Q.length === 0) return;
    const _e = Iu(se);
    let Ie = c ? [..._e] : [], Le = c ? [...U] : [];
    for (const tt of Q) {
      const Xe = tt.type.startsWith("image/"), Ke = Xe && (k === "image" || k === "all" || k === "file");
      let Ue;
      if (Ke)
        try {
          const ve = await BV(tt);
          Ue = await Ee(ve);
        } catch {
          Ue = await Ee(tt);
        }
      else
        Ue = await Ee(tt);
      const xt = Xe ? "image" : $_(tt.name, tt.type);
      Ie = [...Ie, Ue], Le = [
        ...Le,
        {
          link: URL.createObjectURL(tt),
          type: xt,
          isLocal: !0,
          name: tt.name,
          mime: tt.type
        }
      ];
    }
    const Fe = c ? Ie : Ie.slice(-1), $e = c ? Le : Le.slice(-1);
    ne($e), be(Fe), me.current && (me.current.value = null);
  }, Te = (H) => {
    const Q = R.reject(U, ($e) => U.indexOf($e) === H), _e = Iu(se), Ie = R.find(_e, ($e) => _e.indexOf($e) === H), Le = R.reject(_e, ($e) => _e.indexOf($e) === H);
    let Fe = [];
    c ? Ie && typeof Ie == "string" && Ie.length > 100 ? Fe = [...o] : Ie && (Fe = [...o, Ie]) : Ie && typeof Ie == "string" && Ie.length > 100 ? Fe = [...o] : Fe = Ie ? [Ie] : [], ne(Q), be(Le), s(Fe);
  }, De = (H, Q, _e = "archivo") => {
    if (Q === "video" || Q === "audio") {
      ae({ selectedImage: H, open: !0 });
      return;
    }
    if (Q === "pdf") {
      if (typeof H == "string" && H.startsWith("data:")) {
        const Le = window.open("", "_blank");
        Le ? fetch(H).then((Fe) => Fe.blob()).then((Fe) => {
          const $e = URL.createObjectURL(Fe);
          Le.location.href = $e, setTimeout(() => {
            Le.document && (Le.document.title = _e);
          }, 100);
        }) : window.open(H, "_blank");
      } else
        window.open(H, "_blank");
      return;
    }
    const Ie = document.createElement("a");
    Ie.href = H, Ie.download = _e, Ie.target = "_blank", document.body.appendChild(Ie), Ie.click(), document.body.removeChild(Ie);
  }, W = () => {
    ae({ open: !1, selectedImage: null }), ge(0);
  }, z = () => ge((H) => H <= 0 ? 270 : H - 90), $ = () => ge((H) => H >= 270 ? 0 : H + 90), M = Pg.useReactToPrint({
    content: () => re.current,
    onAfterPrint: () => {
      ce(!1);
    }
  });
  Xt(() => {
    Ne && M();
  }, [Ne]);
  const V = () => {
    ce(!0);
  }, G = (H) => {
    if (!w || w.length === 0) return null;
    const Q = w.find((Ie) => H.includes(Ie.path));
    return Q && { present: "#a6d7b0", late: "#f4b988" }[Q.markedAs] || null;
  }, ie = (H) => {
    const Q = R.find(U, { link: H }), _e = (Q == null ? void 0 : Q.type) === "video", Ie = (Q == null ? void 0 : Q.type) === "audio";
    let Le;
    _e || Ie ? Le = {
      type: "video",
      width: 1280,
      height: 720,
      autoPlay: !0,
      sources: [
        {
          src: H,
          type: (Q == null ? void 0 : Q.mime) || (Ie ? "audio/mp3" : "video/mp4")
        }
      ],
      downloadUrl: H,
      downloadFilename: Q != null && Q.name && (Q == null ? void 0 : Q.name) !== "archivo" ? Q.name : Ie ? "audio.mp3" : "video.mp4"
    } : Le = {
      src: H,
      downloadFilename: Q && Q.name !== "archivo" ? Q.name : "imagen.png"
    };
    const Fe = R.filter(U, ($e) => $e.type === "image" && $e.link !== H);
    return [
      Le,
      ...R.map(Fe, ($e) => ({
        src: $e.link,
        downloadFilename: $e.name && $e.name !== "archivo" ? $e.name : "imagen.png"
      }))
    ];
  }, Pe = (H) => {
    const Q = Iu(se), _e = R.map(H, (Fe, $e) => {
      const tt = G(Q[$e] || Fe.link), Xe = !d && !(_ && !Fe.isLocal);
      return /* @__PURE__ */ oe(
        "div",
        {
          className: `${In.attachment} ${y ? In.rounded : ""}`,
          style: { width: `${p}rem`, height: `${h}rem` },
          children: [
            Xe && /* @__PURE__ */ O(
              We,
              {
                className: In.fixedIcon,
                name: "close",
                onClick: () => Te($e)
              }
            ),
            tt && /* @__PURE__ */ O("div", { className: In.stateIndicator, style: { backgroundColor: tt } }),
            Fe.type === "image" ? /* @__PURE__ */ O(
              Er,
              {
                className: `${In.image} ${y ? In.roundedImage : ""}`,
                src: Fe.link,
                alt: Fe.name || "",
                onClick: () => ae({ selectedImage: Fe.link, open: !0 })
              }
            ) : /* @__PURE__ */ oe(
              "button",
              {
                type: "button",
                className: In.fileButton,
                onClick: () => De(Fe.link, Fe.type, Fe.name),
                "aria-label": `Vista previa ${Fe.name || "archivo"}`,
                children: [
                  /* @__PURE__ */ O(
                    We,
                    {
                      className: In.icon,
                      name: B_[Fe.type] || B_.file,
                      color: j_[Fe.type] || j_.file,
                      size: g
                    }
                  ),
                  !!Fe.name && /* @__PURE__ */ O("div", { className: In.fileButtonLabel, title: Fe.name, children: Fe.name })
                ]
              }
            )
          ]
        },
        $e + 1
      );
    }), Ie = /* @__PURE__ */ oe(
      mt,
      {
        className: `${In.attachment} ${y ? In.rounded : ""}`,
        icon: !0,
        primary: !0,
        disabled: d,
        onClick: Oe,
        style: { width: `${p}rem`, height: `${h}rem` },
        children: [
          /* @__PURE__ */ O(We, { name: m, size: g }),
          /* @__PURE__ */ O(
            "input",
            {
              className: In.noShowInput,
              ref: me,
              type: "file",
              accept: UK(F, k),
              multiple: c,
              disabled: d,
              onChange: fe
            }
          )
        ]
      },
      0
    );
    return [(b || d ? !1 : !(!c && !R.isEmpty(H))) && Ie, ..._e];
  }, Z = d && R.isEmpty(U), Se = R.find(U, { link: K.selectedImage }), le = (Se == null ? void 0 : Se.type) === "video" || (Se == null ? void 0 : Se.type) === "audio";
  return /* @__PURE__ */ oe("div", { className: In.attachmentsContainer, style: { height: `${h}rem` }, children: [
    /* @__PURE__ */ O(
      WE,
      {
        open: K.open,
        plugins: le ? [om, C_] : [om, YE, ZE, C_],
        close: W,
        slides: ie(K.selectedImage),
        zoom: le ? void 0 : { maxScale: 50, maxZoomPixelRatio: 10 },
        className: `rotated${he}`,
        controller: { closeOnBackdropClick: !0 },
        render: {
          buttonPrev: () => null,
          buttonNext: () => null
        },
        toolbar: {
          buttons: le ? ["download", "close"] : [
            /* @__PURE__ */ O("button", { type: "button", className: "yarl__button", onClick: z, children: /* @__PURE__ */ O(We, { name: "undo", size: "large" }) }, "rotate-left"),
            /* @__PURE__ */ O("button", { type: "button", className: "yarl__button", onClick: $, children: /* @__PURE__ */ O(We, { name: "redo", size: "large" }) }, "rotate-right"),
            /* @__PURE__ */ O("button", { type: "button", className: "yarl__button", onClick: V, children: /* @__PURE__ */ O(We, { name: "print", size: "large" }) }, "print"),
            "zoom",
            "download",
            "fullscreen",
            "close"
          ]
        }
      }
    ),
    Z ? /* @__PURE__ */ O("div", { className: `${In.attachment} ${y ? In.rounded : ""}`, style: { width: `${p}rem`, height: `${h}rem` }, children: /* @__PURE__ */ O(We, { className: In.icon, name: E, size: g, color: "grey" }) }) : Pe(U),
    /* @__PURE__ */ O("div", { ref: re, className: In.printImageWrapper, children: !le && K.selectedImage && /* @__PURE__ */ O(
      "img",
      {
        src: K.selectedImage,
        alt: "Imagen para imprimir",
        className: In.printImageOnly,
        style: { transform: `rotate(${he}deg)` }
      }
    ) }),
    /* @__PURE__ */ O(
      fC,
      {
        hiddenButon: !0,
        printAction: Ne,
        printActionRetry: () => {
          ce(!1);
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
        renderData: re,
        hideClientInfo: !1
      }
    )
  ] });
};
HK.propTypes = {
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
const YK = "_text_vzm0k_1", qK = {
  text: YK
}, $l = ({ children: e = "", className: t, as: n, href: r, disabled: o = !1, style: s, withMarkdown: u = !1, onClick: c = () => {
} }) => {
  const d = (h) => {
    const m = /(\*[^*]+\*|_[^_]+_|~[^~]+~|`[^`]+`)/g;
    return h.split(m).map((y, b) => y.startsWith("*") && y.endsWith("*") ? /* @__PURE__ */ O("strong", { style: { fontWeight: "bolder" }, children: y.slice(1, -1) }, b) : y.startsWith("_") && y.endsWith("_") ? /* @__PURE__ */ O("em", { style: { fontStyle: "italic" }, children: y.slice(1, -1) }, b) : y.startsWith("~") && y.endsWith("~") ? /* @__PURE__ */ O("del", { style: { textDecoration: "line-through" }, children: y.slice(1, -1) }, b) : /* @__PURE__ */ O("span", { children: y }, b));
  }, p = () => typeof e == "string" && u ? d(e) : e;
  return /* @__PURE__ */ O(
    Xn,
    {
      as: n || "p",
      className: `${qK.text} ${t || ""}`.trim(),
      href: r,
      disabled: o,
      style: s,
      onClick: c,
      children: p()
    }
  );
};
$l.propTypes = {
  children: l.oneOfType([l.node, l.string]),
  className: l.oneOfType([l.string, l.array]),
  as: l.string,
  href: l.string,
  disabled: l.bool,
  withMarkdown: l.bool,
  onClick: l.func,
  style: l.oneOfType([l.string, l.object])
};
function lm() {
  return lm = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, lm.apply(null, arguments);
}
function VK(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
var GK = GI, KK = function(t) {
  var n = ee.useRef(t);
  return GK(function() {
    n.current = t;
  }), n;
}, W_ = function(t, n) {
  if (typeof t == "function") {
    t(n);
    return;
  }
  t.current = n;
}, ZK = function(t, n) {
  var r = ee.useRef();
  return ee.useCallback(function(o) {
    t.current = o, r.current && W_(r.current, null), r.current = n, n && W_(n, o);
  }, [n]);
}, z_ = {
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
}, XK = function(t) {
  Object.keys(z_).forEach(function(n) {
    t.style.setProperty(n, z_[n], "important");
  });
}, U_ = XK, Gn = null, H_ = function(t, n) {
  var r = t.scrollHeight;
  return n.sizingStyle.boxSizing === "border-box" ? r + n.borderSize : r - n.paddingSize;
};
function QK(e, t, n, r) {
  n === void 0 && (n = 1), r === void 0 && (r = 1 / 0), Gn || (Gn = document.createElement("textarea"), Gn.setAttribute("tabindex", "-1"), Gn.setAttribute("aria-hidden", "true"), U_(Gn)), Gn.parentNode === null && document.body.appendChild(Gn);
  var o = e.paddingSize, s = e.borderSize, u = e.sizingStyle, c = u.boxSizing;
  Object.keys(u).forEach(function(g) {
    var y = g;
    Gn.style[y] = u[y];
  }), U_(Gn), Gn.value = t;
  var d = H_(Gn, e);
  Gn.value = t, d = H_(Gn, e), Gn.value = "x";
  var p = Gn.scrollHeight - o, h = p * n;
  c === "border-box" && (h = h + o + s), d = Math.max(h, d);
  var m = p * r;
  return c === "border-box" && (m = m + o + s), d = Math.min(m, d), [d, p];
}
var Y_ = function() {
}, JK = function(t, n) {
  return t.reduce(function(r, o) {
    return r[o] = n[o], r;
  }, {});
}, eZ = [
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
], tZ = !!document.documentElement.currentStyle, nZ = function(t) {
  var n = window.getComputedStyle(t);
  if (n === null)
    return null;
  var r = JK(eZ, n), o = r.boxSizing;
  if (o === "")
    return null;
  tZ && o === "border-box" && (r.width = parseFloat(r.width) + parseFloat(r.borderRightWidth) + parseFloat(r.borderLeftWidth) + parseFloat(r.paddingRight) + parseFloat(r.paddingLeft) + "px");
  var s = parseFloat(r.paddingBottom) + parseFloat(r.paddingTop), u = parseFloat(r.borderBottomWidth) + parseFloat(r.borderTopWidth);
  return {
    sizingStyle: r,
    paddingSize: s,
    borderSize: u
  };
}, rZ = nZ;
function Ng(e, t, n) {
  var r = KK(n);
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
var aZ = function(t, n) {
  Ng(document.body, "reset", function(r) {
    t.current.form === r.target && n(r);
  });
}, oZ = function(t) {
  Ng(window, "resize", t);
}, iZ = function(t) {
  Ng(document.fonts, "loadingdone", t);
}, sZ = ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"], lZ = function(t, n) {
  var r = t.cacheMeasurements, o = t.maxRows, s = t.minRows, u = t.onChange, c = u === void 0 ? Y_ : u, d = t.onHeightChange, p = d === void 0 ? Y_ : d, h = VK(t, sZ), m = h.value !== void 0, g = L.useRef(null), y = ZK(g, n), b = L.useRef(0), _ = L.useRef(), w = function() {
    var E = g.current, I = r && _.current ? _.current : rZ(E);
    if (I) {
      _.current = I;
      var S = QK(I, E.value || E.placeholder || "x", s, o), P = S[0], C = S[1];
      b.current !== P && (b.current = P, E.style.setProperty("height", P + "px", "important"), p(P, {
        rowHeight: C
      }));
    }
  }, k = function(E) {
    m || w(), c(E);
  };
  return L.useLayoutEffect(w), aZ(g, function() {
    if (!m) {
      var F = g.current.value;
      requestAnimationFrame(function() {
        var E = g.current;
        E && F !== E.value && w();
      });
    }
  }), oZ(w), iZ(w), /* @__PURE__ */ L.createElement("textarea", lm({}, h, {
    onChange: k,
    ref: y
  }));
}, cZ = /* @__PURE__ */ L.forwardRef(lZ);
const uZ = "_wrapper_1pssv_1", dZ = "_label_1pssv_11", fZ = "_required_1pssv_23", pZ = "_inputWrapper_1pssv_33", hZ = "_textarea_1pssv_43", mZ = "_iconsContainer_1pssv_73", gZ = "_icon_1pssv_73", vZ = "_labelActions_1pssv_111", yZ = "_labelIcon_1pssv_123", bZ = "_error_1pssv_147", _Z = "_errorLabel_1pssv_157", wZ = "_labelRow_1pssv_169", xZ = "_charCount_1pssv_181", wr = {
  wrapper: uZ,
  label: dZ,
  required: fZ,
  inputWrapper: pZ,
  textarea: hZ,
  iconsContainer: mZ,
  icon: gZ,
  labelActions: vZ,
  labelIcon: yZ,
  error: bZ,
  errorLabel: _Z,
  labelRow: wZ,
  charCount: xZ
}, EZ = ({
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
  const [b, _] = it(!1), w = R.defaultTo(e, ""), k = !!(u && !b && o && w), F = k ? String(w).replace(/[^\n]/g, "•") : w, E = u && !b && !k ? { WebkitTextSecurity: "disc" } : void 0;
  return /* @__PURE__ */ oe("div", { className: wr.wrapper, children: [
    n && /* @__PURE__ */ oe("div", { className: wr.labelRow, children: [
      /* @__PURE__ */ oe("span", { className: wr.label, children: [
        /* @__PURE__ */ O("span", { children: n }),
        p ? /* @__PURE__ */ O("span", { className: wr.required, children: " *" }) : null,
        u && /* @__PURE__ */ O(
          We,
          {
            name: b ? "eye slash" : "eye",
            className: wr.labelIcon,
            link: !0,
            title: b ? "Ocultar token" : "Ver token",
            "aria-label": b ? "Ocultar token" : "Ver token",
            onClick: () => _(!b)
          }
        )
      ] }),
      /* @__PURE__ */ O("div", { className: wr.labelActions, children: m && g && /* @__PURE__ */ oe("span", { className: wr.charCount, children: [
        R.size(e),
        "/",
        g
      ] }) })
    ] }),
    /* @__PURE__ */ oe("div", { className: wr.inputWrapper, children: [
      /* @__PURE__ */ O(
        cZ,
        {
          minRows: c,
          maxRows: d,
          name: t,
          className: R.join(R.compact([wr.textarea, s && wr.error, y]), " "),
          value: F,
          onChange: r,
          disabled: o,
          placeholder: h,
          style: E
        }
      ),
      /* @__PURE__ */ O("div", { className: wr.iconsContainer, children: e && !o && /* @__PURE__ */ O(
        We,
        {
          name: "close",
          className: wr.icon,
          onClick: () => r({ target: { name: t, value: "" } })
        }
      ) })
    ] }),
    s && /* @__PURE__ */ O(fr, { basic: !0, color: "red", className: wr.errorLabel, children: s })
  ] });
};
EZ.propTypes = {
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
const CZ = "_input_hl8et_1", OZ = "_actionMiddle_hl8et_105", SZ = "_actionMiddleFocused_hl8et_143", TZ = "_actionLast_hl8et_181", PZ = "_actionLastFocused_hl8et_221", kZ = "_actionRoundedLast_hl8et_261", NZ = "_actionRoundedLastFocused_hl8et_301", IZ = "_actionIconOnly_hl8et_371", AZ = "_copiedButton_hl8et_391", RZ = "_inlineLabelBox_hl8et_427", MZ = "_inlineLabelBoxFocused_hl8et_471", DZ = "_inlineLabelBoxRounded_hl8et_479", LZ = "_inlineLabelBoxError_hl8et_489", FZ = "_labelRoot_hl8et_521", $Z = "_labelRequired_hl8et_533", BZ = "_infoIcon_hl8et_543", Cn = {
  input: CZ,
  actionMiddle: OZ,
  actionMiddleFocused: SZ,
  actionLast: TZ,
  actionLastFocused: PZ,
  actionRoundedLast: kZ,
  actionRoundedLastFocused: NZ,
  actionIconOnly: IZ,
  copiedButton: AZ,
  inlineLabelBox: RZ,
  inlineLabelBoxFocused: MZ,
  inlineLabelBoxRounded: DZ,
  inlineLabelBoxError: LZ,
  labelRoot: FZ,
  labelRequired: $Z,
  infoIcon: BZ
}, pC = hc((e, t) => {
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
    popupPosition: S = "top center",
    labelClassName: P = "",
    placeholder: C,
    disabled: T,
    rounded: A,
    onChange: B,
    onKeyPress: U,
    onClear: ne,
    dropdown: K,
    dropdownPosition: ae = "left",
    required: he = !1,
    fluid: ge = !0,
    type: Ne = "text",
    hideClear: ce = !1,
    hideDropdown: me = !1,
    hideGenerate: te = !1,
    readOnly: re = !1,
    watch: se = !1,
    isWatch: be = !1,
    mode: Oe,
    modalOption: Ee,
    customBorderRadius: fe,
    error: Te
  } = e, De = !!(T || se || be || re || Oe === "Watch" || Oe === "watch" || Ee === "Watch" || Ee === "watch"), W = Ne === "link" || !!r, z = Ne === "pin" || !!o, $ = n || Ne === "password" || z, M = z && !te && !De, V = !ce && !R.isEmpty(g) && !De, G = !!($ || M || W), ie = fe || (A ? "1rem" : "0.25rem"), Pe = fe || "1rem", Z = On(null), Se = On(null), [le, H] = it(!1), [Q, _e] = it($ ? "password" : Ne === "link" ? "text" : Ne), [Ie, Le] = it("eye slash"), [Fe, $e] = it(!1);
  Xt(() => {
    De ? ((t || Z).current.style.setProperty("background-color", "hsl(0, 0%, 90%)", "important"), (t || Z).current.style.setProperty("color", "hsl(0, 0%, 0%)", "important"), (t || Z).current.style.setProperty("cursor", "not-allowed", "important")) : ((t || Z).current.style.removeProperty("background-color"), (t || Z).current.style.removeProperty("cursor"));
    const pt = !!(Te && (typeof Te == "object" ? Te.content : Te)) ? "#e0b4b4" : le ? "var(--inputFocus)" : "var(--inputShader)";
    A ? R.isEmpty(g) || De ? ((t || Z).current.style.removeProperty("border-top-left-radius"), (t || Z).current.style.removeProperty("border-bottom-left-radius"), (t || Z).current.style.removeProperty("border-top-right-radius"), (t || Z).current.style.removeProperty("border-bottom-right-radius"), (t || Z).current.style.removeProperty("border-right"), G ? ((t || Z).current.style.setProperty("border-top-left-radius", Pe, "important"), (t || Z).current.style.setProperty("border-bottom-left-radius", Pe, "important"), (t || Z).current.style.setProperty("border-right", "0", "important"), (t || Z).current.style.setProperty("border-top-right-radius", "0", "important"), (t || Z).current.style.setProperty("border-bottom-right-radius", "0", "important")) : ((t || Z).current.style.setProperty("border-radius", Pe, "important"), (t || Z).current.style.setProperty("border-right", `1px solid ${pt}`, "important"))) : ce && !G ? ((t || Z).current.style.setProperty("border-radius", Pe, "important"), (t || Z).current.style.setProperty("border-right", `1px solid ${pt}`, "important")) : ((t || Z).current.style.removeProperty("border-radius"), (t || Z).current.style.setProperty("border-top-left-radius", Pe, "important"), (t || Z).current.style.setProperty("border-bottom-left-radius", Pe, "important"), (t || Z).current.style.setProperty("border-top-right-radius", "0", "important"), (t || Z).current.style.setProperty("border-bottom-right-radius", "0", "important"), (t || Z).current.style.setProperty("border-right", "0", "important")) : R.isEmpty(g) || De ? ((t || Z).current.style.setProperty("border-radius", ie, "important"), G ? ((t || Z).current.style.setProperty("border-right", "0", "important"), (t || Z).current.style.setProperty("border-top-right-radius", "0", "important"), (t || Z).current.style.setProperty("border-bottom-right-radius", "0", "important")) : (t || Z).current.style.setProperty("border-right", `1px solid ${pt}`, "important")) : ce && !G ? ((t || Z).current.style.setProperty("border-radius", ie, "important"), (t || Z).current.style.setProperty("border-right", `1px solid ${pt}`, "important"), (t || Z).current.style.setProperty("border-top-right-radius", ie, "important"), (t || Z).current.style.setProperty("border-bottom-right-radius", ie, "important")) : ((t || Z).current.style.setProperty("border-right", "0", "important"), (t || Z).current.style.setProperty("border-top-right-radius", "0", "important"), (t || Z).current.style.setProperty("border-bottom-right-radius", "0", "important")), R.isEmpty(K) || (ae === "left" ? ((t || Z).current.style.setProperty("border-top-left-radius", "0", "important"), (t || Z).current.style.setProperty("border-bottom-left-radius", "0", "important"), (t || Z).current.style.setProperty("border-left-color", "transparent", "important")) : ae === "right" && ((t || Z).current.style.setProperty("border-top-right-radius", "0", "important"), (t || Z).current.style.setProperty("border-bottom-right-radius", "0", "important"), (t || Z).current.style.setProperty("border-right-color", "transparent", "important"))), s && ((t || Z).current.style.setProperty("border-top-left-radius", "0", "important"), (t || Z).current.style.setProperty("border-bottom-left-radius", "0", "important"), (t || Z).current.style.setProperty("border-left-color", "transparent", "important"));
  }, [
    g,
    le,
    K,
    ae,
    s,
    G,
    De,
    A,
    ce,
    fe,
    ie,
    Pe,
    t,
    Z,
    Te
  ]);
  const tt = (Je) => {
    if (!R.isEmpty(g)) {
      const pt = { name: m, value: typeof g == "string" ? g.trim() : g };
      B && B({ ...Je, target: pt }, pt);
    }
  }, Xe = (Je) => {
    const { key: pt } = Je;
    pt === "Enter" && (Je.preventDefault(), tt(Je), U && U(Je));
  }, Ke = () => {
    const Je = Q === "password", pt = Je ? "text" : "password", Gt = Je ? "eye" : "eye slash";
    _e(pt), Le(Gt);
  }, Ue = (Je) => {
    if (Je.preventDefault(), R.isEmpty(g))
      return;
    const pt = String(g);
    if (navigator.clipboard && navigator.clipboard.writeText)
      navigator.clipboard.writeText(pt);
    else {
      const Gt = document.createElement("textarea");
      Gt.value = pt, document.body.appendChild(Gt), Gt.select(), document.execCommand("copy"), document.body.removeChild(Gt);
    }
    $e(!0), h && h(pt, Je), setTimeout(() => {
      $e(!1);
    }, 2e3);
  }, xt = async (Je) => {
    if (Je.preventDefault(), De)
      return;
    let pt;
    if (typeof p == "function")
      pt = await p(Je);
    else {
      const Gt = d || 4, ri = 10 ** (Gt - 1), Tr = 10 ** Gt - 1;
      pt = String(Math.floor(ri + Math.random() * (Tr - ri + 1)));
    }
    if (pt != null && pt !== "") {
      const Gt = { name: m, value: String(pt) };
      e.fieldIndex !== void 0 && (Gt.fieldIndex = e.fieldIndex), e.id !== void 0 && (Gt.id = e.id), B && B({ ...Je, target: Gt }, Gt);
    }
  }, ve = (Je) => {
    if (De)
      return;
    const pt = { name: m, value: "" };
    e.fieldIndex !== void 0 && (pt.fieldIndex = e.fieldIndex), e.id !== void 0 && (pt.id = e.id), B && B({ ...Je, target: pt }, pt), ne && ne();
  }, Tt = () => {
    H(!0);
  }, Pt = (Je) => {
    tt(Je), H(!1);
  }, dt = (Je) => Je ? A ? le ? Cn.actionRoundedLastFocused : Cn.actionRoundedLast : le ? Cn.actionLastFocused : Cn.actionLast : le ? Cn.actionMiddleFocused : Cn.actionMiddle, at = () => {
    if (!_) return;
    if (ee.isValidElement(_)) return _;
    const Je = w || k || F || E;
    return /* @__PURE__ */ oe("span", { className: `${Cn.labelRoot} ${P}`.trim(), children: [
      /* @__PURE__ */ O("span", { children: _ }),
      he ? /* @__PURE__ */ O("span", { className: Cn.labelRequired, children: " *" }) : null,
      Je ? /* @__PURE__ */ O(
        Fn,
        {
          wide: I ? "very" : !0,
          hoverable: I,
          position: S,
          content: Je,
          trigger: /* @__PURE__ */ O(We, { name: "info circle", className: Cn.infoIcon })
        }
      ) : null
    ] });
  }, de = R.omit(e, [
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
    "hideGenerate",
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
    "error",
    "watch",
    "isWatch",
    "mode",
    "modalOption",
    "readOnly"
  ]), we = b || (n ? "lock" : z ? "key" : W ? "linkify" : void 0), nt = !s && ($ || !R.isEmpty(we)), Ye = () => {
    if (!s) return null;
    const Je = !!(Te && (typeof Te == "object" ? Te.content : Te)), pt = [
      Cn.inlineLabelBox,
      le ? Cn.inlineLabelBoxFocused : "",
      A ? Cn.inlineLabelBoxRounded : "",
      Je ? Cn.inlineLabelBoxError : ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ O(mt, { ref: Se, className: pt, type: "button", tabIndex: -1, children: s });
  };
  return /* @__PURE__ */ oe(
    $n.Input,
    {
      ...de,
      className: `${Cn.input} ${De ? Cn.disabled : ""} ${y || ""}`,
      disabled: De,
      onChange: B,
      name: m,
      label: at(),
      placeholder: C === "" ? "" : R.isEmpty(C) ? typeof _ == "string" ? _ : "" : C,
      value: g,
      type: $ ? Q : Ne === "link" ? "text" : Ne,
      ...nt ? { iconPosition: "left" } : {},
      autoComplete: "off",
      fluid: ge,
      onFocus: Tt,
      onBlur: Pt,
      onKeyPress: Xe,
      actionPosition: s ? "left" : "right",
      action: !0,
      error: Te,
      children: [
        s && Ye(),
        ae === "left" && !R.isEmpty(K) && !me && /* @__PURE__ */ O(Hr, { labeled: !0, ...K, disabled: De }),
        nt && /* @__PURE__ */ O(We, { name: we }),
        /* @__PURE__ */ O(
          "input",
          {
            ref: t || Z,
            required: he,
            readOnly: !!(re || se || be || Oe === "Watch" || Oe === "watch"),
            disabled: De
          }
        ),
        ae === "right" ? /* @__PURE__ */ oe(zr, { children: [
          V && /* @__PURE__ */ O(mt, { className: dt(!G), icon: "cancel", onClick: ve, tabIndex: -1, title: "Limpiar" }),
          !me && /* @__PURE__ */ O(Hr, { labeled: !0, ...K, disabled: De })
        ] }) : V && /* @__PURE__ */ O(mt, { className: dt(!G), icon: "cancel", onClick: ve, tabIndex: -1, title: "Limpiar" }),
        (n || z) && /* @__PURE__ */ O(
          Fn,
          {
            size: "mini",
            inverted: !0,
            position: "top center",
            content: Q === "password" ? "Mostrar" : "Ocultar",
            trigger: /* @__PURE__ */ O(
              mt,
              {
                className: `${dt(!M)} ${Cn.actionIconOnly}`,
                icon: Ie,
                onClick: Ke,
                tabIndex: -1,
                "aria-label": Q === "password" ? "Mostrar" : "Ocultar"
              }
            )
          }
        ),
        M && /* @__PURE__ */ O(
          Fn,
          {
            size: "mini",
            inverted: !0,
            position: "top center",
            content: c || "Generar",
            trigger: /* @__PURE__ */ O(
              mt,
              {
                className: `${dt(!0)} ${Cn.actionIconOnly}`,
                onClick: xt,
                tabIndex: -1,
                "aria-label": c || "Generar",
                children: /* @__PURE__ */ O(We, { name: "exchange" })
              }
            )
          }
        ),
        W && /* @__PURE__ */ O(
          Fn,
          {
            size: "mini",
            inverted: !0,
            position: "top center",
            open: Fe ? !0 : void 0,
            content: Fe ? "¡Copiado!" : u || "Copiar",
            trigger: /* @__PURE__ */ O(
              mt,
              {
                className: `${dt(!0)} ${Cn.actionIconOnly} ${Fe ? Cn.copiedButton : ""}`,
                onClick: Ue,
                tabIndex: -1,
                "aria-label": Fe ? "¡Copiado!" : u || "Copiar",
                children: /* @__PURE__ */ O(We, { name: Fe ? "check" : "copy" })
              }
            )
          }
        )
      ]
    }
  );
});
pC.displayName = "Input";
pC.propTypes = {
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
  hideGenerate: l.bool,
  readOnly: l.bool,
  watch: l.bool,
  isWatch: l.bool,
  mode: l.string,
  modalOption: l.string,
  customBorderRadius: l.string,
  error: l.oneOfType([l.bool, l.object, l.string])
};
const q_ = 49, jZ = "_activeItem_1ays7_1", WZ = "_item_1ays7_15", zZ = "_itemMultiple_1ays7_39", UZ = "_itemSelect_1ays7_49", HZ = "_itemSelectMultiple_1ays7_73", YZ = "_menu_1ays7_85", qZ = "_titleMenuItem_1ays7_99", VZ = "_titleMenu_1ays7_99", GZ = "_activeMenuItem_1ays7_133", KZ = "_menuItem_1ays7_163", ZZ = "_titleText_1ays7_183", XZ = "_text_1ays7_197", QZ = "_subText_1ays7_211", JZ = "_icon_1ays7_225", eX = "_subIcon_1ays7_235", gn = {
  activeItem: jZ,
  item: WZ,
  itemMultiple: zZ,
  itemSelect: UZ,
  itemSelectMultiple: HZ,
  menu: YZ,
  titleMenuItem: qZ,
  titleMenu: VZ,
  activeMenuItem: GZ,
  menuItem: KZ,
  titleText: ZZ,
  text: XZ,
  subText: QZ,
  icon: JZ,
  subIcon: eX
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
  const [p, h] = it(u), m = R.isEmpty(s) ? r : `${r}${s[0].path}`, g = (F, E) => {
    c ? d(F, E) : d && d();
  }, y = () => {
    R.isEmpty(s) ? g(m, o) : h((F) => !F);
  }, b = ({ placement: F, popper: E, reference: I }) => {
    if (R.isEmpty(s))
      return [];
    if (F === "right") {
      const S = E.height - q_, P = S / 2, C = I.y + S;
      let T = P - (e ? 0 : q_);
      return typeof window < "u" && C > window.innerHeight && (T -= window.innerHeight - C), [T, 0];
    }
    return [];
  }, _ = () => {
    if (R.isEmpty(s)) return null;
    const F = typeof window < "u" ? window.location.pathname : "";
    return R.map(s, (I) => {
      const S = `${r}${I.path}`, P = F === S;
      return /* @__PURE__ */ oe(
        Mn.Item,
        {
          className: P ? gn.activeMenuItem : gn.menuItem,
          onClick: () => g(S, o),
          children: [
            !R.isEmpty(I.icon) && /* @__PURE__ */ O(We, { className: gn.subIcon, name: I.icon }),
            /* @__PURE__ */ O("span", { className: gn.subText, children: I.name })
          ]
        },
        I.id
      );
    });
  }, w = () => e ? p ? /* @__PURE__ */ oe("div", { className: gn.itemSelectMultiple, children: [
    /* @__PURE__ */ O(Mn.Item, { className: gn.itemMultiple, onClick: y, children: /* @__PURE__ */ oe("div", { className: gn.activeItem, children: [
      !R.isEmpty(n) && /* @__PURE__ */ O(We, { className: gn.icon, name: n }),
      /* @__PURE__ */ O($l, { className: gn.text, children: t })
    ] }) }),
    _()
  ] }) : /* @__PURE__ */ O(Mn.Item, { className: u ? gn.itemSelect : gn.item, onClick: y, children: /* @__PURE__ */ oe("div", { className: gn.activeItem, children: [
    !R.isEmpty(n) && /* @__PURE__ */ O(We, { className: gn.icon, name: n }),
    /* @__PURE__ */ O($l, { className: gn.text, children: t })
  ] }) }) : /* @__PURE__ */ O(
    Mn.Item,
    {
      className: u ? gn.itemSelect : gn.item,
      onClick: () => g(m, o),
      children: /* @__PURE__ */ O("div", { className: gn.activeItem, children: !R.isEmpty(n) && /* @__PURE__ */ O(We, { className: gn.icon, name: n }) })
    }
  ), k = () => {
    R.isEmpty(s) && g(r, o);
  };
  return /* @__PURE__ */ O(
    Fn,
    {
      className: gn.menu,
      on: "hover",
      hoverable: !0,
      position: "right center",
      pinned: !0,
      basic: !0,
      disabled: e,
      offset: b,
      trigger: w(),
      children: /* @__PURE__ */ O(Fn.Content, { children: /* @__PURE__ */ oe(Mn, { vertical: !0, children: [
        !e && /* @__PURE__ */ O(Mn.Item, { className: R.isEmpty(s) ? gn.titleMenu : gn.titleMenuItem, onClick: k, children: /* @__PURE__ */ O($l, { className: gn.titleText, children: t }) }),
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
const tX = "_sideBar_wxxzs_1", nX = "_collapsedSidebar_wxxzs_13", rX = "_menuItems_wxxzs_25", aX = "_mobileItems_wxxzs_37", oX = "_divider_wxxzs_49", Ol = {
  sideBar: tX,
  collapsedSidebar: nX,
  menuItems: rX,
  mobileItems: aX,
  divider: oX
}, iX = ({
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
      if (y.type === "divider") return /* @__PURE__ */ O("div", { className: Ol.divider }, y.id);
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
  return /* @__PURE__ */ oe(
    ti,
    {
      className: t ? Ol.sideBar : Ol.collapsedSidebar,
      as: Mn,
      direction: "left",
      animation: r ? "overlay" : "push",
      visible: o,
      vertical: !0,
      icon: !0,
      width: "wide",
      children: [
        d && s && /* @__PURE__ */ O(qu, { isExtended: r ? !0 : t, allowNavigation: !1, path: null, name: s }),
        /* @__PURE__ */ O("div", { className: r ? Ol.mobileItems : Ol.menuItems, children: h() }),
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
iX.propTypes = {
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
const sX = "_fullScreen_1chi0_3", lX = "_large_1chi0_11", cX = "_small_1chi0_19", uX = "_tiny_1chi0_27", dX = "_mini_1chi0_35", fX = "_modalHeader_1chi0_43", pX = "_tabsContainer_1chi0_63", hX = "_modalContent_1chi0_73", mX = "_modalContentNoFlex_1chi0_91", gX = "_modalFooter_1chi0_131", vX = "_iconHeader_1chi0_145", yX = "_topEditButton_1chi0_153", bX = "_topWatchButton_1chi0_171", _X = "_topPrintButton_1chi0_189", wX = "_positiveButton_1chi0_221", xX = "_negativeButton_1chi0_251", EX = "_disabled_1chi0_281", CX = "_rowButton_1chi0_295", OX = "_modal_1chi0_43", SX = "_modalHeaderTitle_1chi0_401", TX = "_modalCloseInside_1chi0_595", An = {
  fullScreen: sX,
  large: lX,
  small: cX,
  tiny: uX,
  mini: dX,
  modalHeader: fX,
  tabsContainer: pX,
  modalContent: hX,
  modalContentNoFlex: mX,
  modalFooter: gX,
  iconHeader: vX,
  topEditButton: yX,
  topWatchButton: bX,
  topPrintButton: _X,
  positiveButton: wX,
  negativeButton: xX,
  disabled: EX,
  rowButton: CX,
  modal: OX,
  modalHeaderTitle: SX,
  modalCloseInside: TX
}, PX = "_divHeaderNav_7mcz0_1", kX = "_navButton_7mcz0_23", NX = "_errorsButon_7mcz0_49", IX = "_volatileError_7mcz0_93", AX = "_buttonContainer_7mcz0_181", RX = "_redButton_7mcz0_195", MX = "_active_7mcz0_233", DX = "_moreWrapper_7mcz0_263", LX = "_moreButton_7mcz0_275", FX = "_moreDropdown_7mcz0_293", Dr = {
  divHeaderNav: PX,
  navButton: kX,
  errorsButon: NX,
  volatileError: IX,
  buttonContainer: AX,
  redButton: RX,
  active: MX,
  moreWrapper: DX,
  moreButton: LX,
  moreDropdown: FX
}, hC = ({ handleStateHeader: e, stateHeader: t, buttons: n }) => {
  const [r, o] = it([]), [s, u] = it([]), [c, d] = it(!1), p = On(null), h = (y, b = !1) => {
    if (!p.current) return 0;
    const _ = document.createElement("button");
    _.className = b ? Dr.moreButton : Dr.navButton, _.style.cssText = "visibility: hidden; position: absolute; font-size: 16px; padding: 12px 20px; white-space: nowrap;", _.innerHTML = y, p.current.appendChild(_);
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
  Xt(() => {
    const y = new ResizeObserver(m);
    return p.current && y.observe(p.current), () => y.disconnect();
  }, [n]), Xt(() => {
    const y = (b) => {
      p.current && !p.current.contains(b.target) && d(!1);
    };
    return document.addEventListener("mousedown", y), () => document.removeEventListener("mousedown", y);
  }, []);
  const g = (y, b = !1) => {
    const _ = R.filter([
      Dr.navButton,
      t === y.state && Dr.active,
      y.errors && Dr.errorsButon,
      y.color === "red" && Dr.redButton
    ]).join(" ");
    return /* @__PURE__ */ oe("div", { className: Dr.buttonContainer, children: [
      /* @__PURE__ */ oe(
        mt,
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
      !R.isEmpty(y.error) && /* @__PURE__ */ O("div", { className: Dr.volatileError, children: "Campos Requeridos" })
    ] }, y.key);
  };
  return /* @__PURE__ */ oe("div", { className: Dr.divHeaderNav, ref: p, children: [
    R.map(r, (y) => g(y)),
    !R.isEmpty(s) && /* @__PURE__ */ oe("div", { className: Dr.moreWrapper, children: [
      /* @__PURE__ */ O(
        mt,
        {
          className: Dr.moreButton,
          onClick: () => d(!c),
          children: "..."
        }
      ),
      c && /* @__PURE__ */ O("div", { className: Dr.moreDropdown, children: R.map(s, (y) => g(y, !0)) })
    ] })
  ] });
};
hC.propTypes = {
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
const $X = ({
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
  closeInside: U = !1,
  closeIconInside: ne = !1,
  closeIcon: K = !0
}) => {
  const [ae, he] = it("list"), ge = U || ne;
  Xt(() => {
    Ne();
  }, [n]);
  const Ne = () => {
    let re = t;
    if (R.isEmpty(t))
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
    he(re);
  }, ce = () => {
    u();
  }, me = () => {
    c();
  }, te = h ? {
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
    pn,
    {
      className: `${R.isEmpty(p) ? "" : An[p]} ${F} ${An.modal} ${ge ? An.modalCloseInside : ""}`,
      style: te,
      open: !0,
      closeIcon: K,
      closeOnDimmerClick: A,
      onClose: ce,
      children: [
        /* @__PURE__ */ oe(pn.Header, { className: An.modalHeader, children: [
          /* @__PURE__ */ oe("div", { className: An.modalHeaderTitle, children: [
            /* @__PURE__ */ O(We, { name: ae, className: An.iconHeader }),
            o,
            s && ` - Id: ${s}`
          ] }),
          !R.isEmpty(b) && b,
          /* @__PURE__ */ oe("div", { className: An.rowButton, children: [
            n === "Watch" && !I && /* @__PURE__ */ O(
              mt,
              {
                onClick: () => {
                  r("Edit");
                },
                className: An.topEditButton,
                children: /* @__PURE__ */ O(We, { name: "edit" })
              }
            ),
            n === "Edit" && /* @__PURE__ */ O(
              mt,
              {
                onClick: () => {
                  r("Watch");
                },
                className: An.topWatchButton,
                children: /* @__PURE__ */ O(We, { name: "eye" })
              }
            ),
            w && /* @__PURE__ */ O(
              mt,
              {
                onClick: () => {
                  typeof w == "function" && w();
                },
                className: An.topPrintButton,
                title: "Imprimir",
                children: /* @__PURE__ */ O(We, { name: "print" })
              }
            )
          ] })
        ] }),
        !R.isEmpty(S) && /* @__PURE__ */ O("div", { className: An.tabsContainer, children: /* @__PURE__ */ O(hC, { buttons: S, stateHeader: P, handleStateHeader: C }) }),
        /* @__PURE__ */ O(
          pn.Content,
          {
            className: E ? An.modalContentNoFlex : An.modalContent,
            style: h ? { minHeight: "calc(95vh - 8rem)", ...B } : T ? { height: T, minHeight: T, ...B } : { ...B },
            scrolling: !0,
            children: e
          }
        ),
        /* @__PURE__ */ oe(pn.Actions, { className: An.modalFooter, children: [
          !R.isEmpty(_) && _,
          n === "Watch" ? /* @__PURE__ */ O(mt, { className: An.negativeButton, onClick: ce, children: "Cerrar" }) : /* @__PURE__ */ O(mt, { className: An.negativeButton, onClick: ce, children: y }),
          n !== "Watch" && c && /* @__PURE__ */ O(
            mt,
            {
              className: `${An.positiveButton} ${k ? An.disabled : ""}`,
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
$X.propTypes = {
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
const BX = "_modal_3j9dd_1", jX = "_header_3j9dd_11", WX = "_actions_3j9dd_25", zX = "_leftActions_3j9dd_39", UX = "_rightActions_3j9dd_51", HX = "_positiveButton_3j9dd_63", YX = "_negativeButton_3j9dd_91", qX = "_content_3j9dd_121", VX = "_focus_3j9dd_129", GX = "_contactHeader_3j9dd_139", KX = "_contactPositiveButton_3j9dd_149", ZX = "_centerModal_3j9dd_169", Kn = {
  modal: BX,
  header: jX,
  actions: WX,
  leftActions: zX,
  rightActions: UX,
  positiveButton: HX,
  negativeButton: YX,
  content: qX,
  focus: VX,
  contactHeader: GX,
  contactPositiveButton: KX,
  centerModal: ZX
}, XX = ({
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
  pn,
  {
    open: e,
    size: "tiny",
    closeOnDimmerClick: !1,
    dimmer: "blurring",
    className: `${Kn.modal} ${g} ${y ? Kn.contact : ""} ${b ? Kn.centerModal : ""}`,
    style: m,
    children: [
      /* @__PURE__ */ oe(
        pn.Header,
        {
          className: `${Kn.header} ${y ? Kn.contactHeader : ""}`,
          style: _ ? { "--custom-header-color": _ } : {},
          children: [
            !R.isEmpty(p) && /* @__PURE__ */ O(We, { name: p }),
            ` ${r}`
          ]
        }
      ),
      /* @__PURE__ */ O(pn.Content, { className: Kn.contentContainer, children: /* @__PURE__ */ O($l, { className: Kn.content, children: n || /* @__PURE__ */ oe(zr, { children: [
        `¿${t}`,
        u ? /* @__PURE__ */ oe(zr, { children: [
          /* @__PURE__ */ O("span", { className: Kn.focus, children: u }),
          "?"
        ] }) : "?"
      ] }) }) }),
      /* @__PURE__ */ oe(pn.Actions, { className: Kn.actions, children: [
        /* @__PURE__ */ O("div", { className: Kn.leftActions, children: h }),
        /* @__PURE__ */ oe("div", { className: Kn.rightActions, children: [
          /* @__PURE__ */ O(mt, { className: `${Kn.negativeButton} ${y ? Kn.contactNegativeButton : ""}`, onClick: d, children: s }),
          !w && /* @__PURE__ */ O(mt, { className: `${Kn.positiveButton} ${y ? Kn.contactPositiveButton : ""}`, onClick: c, children: o })
        ] })
      ] })
    ]
  }
);
XX.propTypes = {
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
const QX = "_modal_s72ln_1", JX = "_content_s72ln_13", eQ = "_messageBody_s72ln_33", tQ = "_actions_s72ln_73", nQ = "_button_s72ln_81", Sl = {
  modal: QX,
  content: JX,
  messageBody: eQ,
  actions: tQ,
  button: nQ
}, rQ = (e) => {
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
}, aQ = ({ text: e = "", isVisible: t = !1, isError: n = !1, onDismiss: r }) => {
  const o = rQ(e);
  return /* @__PURE__ */ oe(pn, { open: t, closeOnDimmerClick: !1, className: Sl.modal, size: "small", children: [
    /* @__PURE__ */ oe(pn.Content, { className: Sl.content, children: [
      /* @__PURE__ */ O(We, { name: n ? "warning sign" : "check circle", size: "big", color: n ? "red" : "green" }),
      /* @__PURE__ */ O("pre", { className: Sl.messageBody, children: o })
    ] }),
    /* @__PURE__ */ O(pn.Actions, { className: Sl.actions, children: /* @__PURE__ */ O(mt, { className: Sl.button, onClick: r, color: n ? "red" : "green", fluid: !0, children: "Cerrar" }) })
  ] });
};
aQ.propTypes = {
  text: l.oneOfType([l.string, l.object]),
  isVisible: l.bool,
  isError: l.bool,
  onDismiss: l.func
};
const oQ = "_loading_5559w_1", iQ = {
  loading: oQ
}, sQ = ({ isFetching: e }) => /* @__PURE__ */ O(Mo, { page: !0, active: e, children: /* @__PURE__ */ O(nc, { className: iQ.loading, size: "large", children: "Loading..." }) });
sQ.propTypes = {
  isFetching: l.bool.isRequired
};
export {
  so as Card,
  XX as ConfirmModal,
  Vs as Dropdown,
  HK as FileManager,
  $X as IkModal,
  gV as IkTable,
  pC as Input,
  sQ as Loading,
  aQ as NotificationDialog,
  iX as SideBar,
  qu as SideBarMenu,
  $l as Text,
  EZ as TextArea,
  Nw as Toggle
};
