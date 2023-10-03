import * as te from "react";
import we, { useRef as Ze, useContext as it, createElement as Nt, createContext as sn, forwardRef as Ba, Fragment as Mn, useLayoutEffect as lf, Children as Hh, isValidElement as Hr, cloneElement as qr, useState as vr, useEffect as dt, useMemo as jt, useReducer as qh, createRef as Kh, useCallback as Yu } from "react";
import * as Gh from "react-dom";
import Br, { createPortal as Jh } from "react-dom";
function Xh(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i && Object.defineProperty(e, o, i.get ? i : {
            enumerable: !0,
            get: () => r[o]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
var Ft = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function vi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function To(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var o = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
var Ps = { exports: {} }, _e = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fu;
function Zh() {
  if (Fu)
    return _e;
  Fu = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), M;
  M = Symbol.for("react.module.reference");
  function y(m) {
    if (typeof m == "object" && m !== null) {
      var w = m.$$typeof;
      switch (w) {
        case e:
          switch (m = m.type, m) {
            case n:
            case o:
            case r:
            case u:
            case l:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case a:
                case s:
                case c:
                case d:
                case f:
                case i:
                  return m;
                default:
                  return w;
              }
          }
        case t:
          return w;
      }
    }
  }
  return _e.ContextConsumer = s, _e.ContextProvider = i, _e.Element = e, _e.ForwardRef = c, _e.Fragment = n, _e.Lazy = d, _e.Memo = f, _e.Portal = t, _e.Profiler = o, _e.StrictMode = r, _e.Suspense = u, _e.SuspenseList = l, _e.isAsyncMode = function() {
    return !1;
  }, _e.isConcurrentMode = function() {
    return !1;
  }, _e.isContextConsumer = function(m) {
    return y(m) === s;
  }, _e.isContextProvider = function(m) {
    return y(m) === i;
  }, _e.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, _e.isForwardRef = function(m) {
    return y(m) === c;
  }, _e.isFragment = function(m) {
    return y(m) === n;
  }, _e.isLazy = function(m) {
    return y(m) === d;
  }, _e.isMemo = function(m) {
    return y(m) === f;
  }, _e.isPortal = function(m) {
    return y(m) === t;
  }, _e.isProfiler = function(m) {
    return y(m) === o;
  }, _e.isStrictMode = function(m) {
    return y(m) === r;
  }, _e.isSuspense = function(m) {
    return y(m) === u;
  }, _e.isSuspenseList = function(m) {
    return y(m) === l;
  }, _e.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === n || m === o || m === r || m === u || m === l || m === p || typeof m == "object" && m !== null && (m.$$typeof === d || m.$$typeof === f || m.$$typeof === i || m.$$typeof === s || m.$$typeof === c || m.$$typeof === M || m.getModuleId !== void 0);
  }, _e.typeOf = y, _e;
}
var ke = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qu;
function eg() {
  return Qu || (Qu = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), M = !1, y = !1, m = !1, w = !1, D = !1, N;
    N = Symbol.for("react.module.reference");
    function E(X) {
      return !!(typeof X == "string" || typeof X == "function" || X === n || X === o || D || X === r || X === u || X === l || w || X === p || M || y || m || typeof X == "object" && X !== null && (X.$$typeof === d || X.$$typeof === f || X.$$typeof === i || X.$$typeof === s || X.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      X.$$typeof === N || X.getModuleId !== void 0));
    }
    function T(X) {
      if (typeof X == "object" && X !== null) {
        var ue = X.$$typeof;
        switch (ue) {
          case e:
            var he = X.type;
            switch (he) {
              case n:
              case o:
              case r:
              case u:
              case l:
                return he;
              default:
                var le = he && he.$$typeof;
                switch (le) {
                  case a:
                  case s:
                  case c:
                  case d:
                  case f:
                  case i:
                    return le;
                  default:
                    return ue;
                }
            }
          case t:
            return ue;
        }
      }
    }
    var F = s, _ = i, G = e, Q = c, K = n, Z = d, re = f, U = t, j = o, C = r, V = u, S = l, q = !1, ae = !1;
    function O(X) {
      return q || (q = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function z(X) {
      return ae || (ae = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Y(X) {
      return T(X) === s;
    }
    function W(X) {
      return T(X) === i;
    }
    function B(X) {
      return typeof X == "object" && X !== null && X.$$typeof === e;
    }
    function ee(X) {
      return T(X) === c;
    }
    function b(X) {
      return T(X) === n;
    }
    function ne(X) {
      return T(X) === d;
    }
    function $(X) {
      return T(X) === f;
    }
    function ie(X) {
      return T(X) === t;
    }
    function P(X) {
      return T(X) === o;
    }
    function L(X) {
      return T(X) === r;
    }
    function R(X) {
      return T(X) === u;
    }
    function ce(X) {
      return T(X) === l;
    }
    ke.ContextConsumer = F, ke.ContextProvider = _, ke.Element = G, ke.ForwardRef = Q, ke.Fragment = K, ke.Lazy = Z, ke.Memo = re, ke.Portal = U, ke.Profiler = j, ke.StrictMode = C, ke.Suspense = V, ke.SuspenseList = S, ke.isAsyncMode = O, ke.isConcurrentMode = z, ke.isContextConsumer = Y, ke.isContextProvider = W, ke.isElement = B, ke.isForwardRef = ee, ke.isFragment = b, ke.isLazy = ne, ke.isMemo = $, ke.isPortal = ie, ke.isProfiler = P, ke.isStrictMode = L, ke.isSuspense = R, ke.isSuspenseList = ce, ke.isValidElementType = E, ke.typeOf = T;
  }()), ke;
}
process.env.NODE_ENV === "production" ? Ps.exports = Zh() : Ps.exports = eg();
var ti = Ps.exports;
function tg(e) {
  function t(Y, W, B, ee, b) {
    for (var ne = 0, $ = 0, ie = 0, P = 0, L, R, ce = 0, X = 0, ue, he = ue = L = 0, le = 0, A = 0, g = 0, h = 0, I = B.length, k = I - 1, J, H = "", Me = "", Ee = "", Ie = "", Le; le < I; ) {
      if (R = B.charCodeAt(le), le === k && $ + P + ie + ne !== 0 && ($ !== 0 && (R = $ === 47 ? 10 : 47), P = ie = ne = 0, I++, k++), $ + P + ie + ne === 0) {
        if (le === k && (0 < A && (H = H.replace(d, "")), 0 < H.trim().length)) {
          switch (R) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              H += B.charAt(le);
          }
          R = 59;
        }
        switch (R) {
          case 123:
            for (H = H.trim(), L = H.charCodeAt(0), ue = 1, h = ++le; le < I; ) {
              switch (R = B.charCodeAt(le)) {
                case 123:
                  ue++;
                  break;
                case 125:
                  ue--;
                  break;
                case 47:
                  switch (R = B.charCodeAt(le + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (he = le + 1; he < k; ++he)
                          switch (B.charCodeAt(he)) {
                            case 47:
                              if (R === 42 && B.charCodeAt(he - 1) === 42 && le + 2 !== he) {
                                le = he + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (R === 47) {
                                le = he + 1;
                                break e;
                              }
                          }
                        le = he;
                      }
                  }
                  break;
                case 91:
                  R++;
                case 40:
                  R++;
                case 34:
                case 39:
                  for (; le++ < k && B.charCodeAt(le) !== R; )
                    ;
              }
              if (ue === 0)
                break;
              le++;
            }
            switch (ue = B.substring(h, le), L === 0 && (L = (H = H.replace(f, "").trim()).charCodeAt(0)), L) {
              case 64:
                switch (0 < A && (H = H.replace(d, "")), R = H.charCodeAt(1), R) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    A = W;
                    break;
                  default:
                    A = V;
                }
                if (ue = t(W, A, ue, R, b + 1), h = ue.length, 0 < q && (A = n(V, H, g), Le = a(3, ue, A, W, U, re, h, R, b, ee), H = A.join(""), Le !== void 0 && (h = (ue = Le.trim()).length) === 0 && (R = 0, ue = "")), 0 < h)
                  switch (R) {
                    case 115:
                      H = H.replace(F, s);
                    case 100:
                    case 109:
                    case 45:
                      ue = H + "{" + ue + "}";
                      break;
                    case 107:
                      H = H.replace(D, "$1 $2"), ue = H + "{" + ue + "}", ue = C === 1 || C === 2 && i("@" + ue, 3) ? "@-webkit-" + ue + "@" + ue : "@" + ue;
                      break;
                    default:
                      ue = H + ue, ee === 112 && (ue = (Me += ue, ""));
                  }
                else
                  ue = "";
                break;
              default:
                ue = t(W, n(W, H, g), ue, ee, b + 1);
            }
            Ee += ue, ue = g = A = he = L = 0, H = "", R = B.charCodeAt(++le);
            break;
          case 125:
          case 59:
            if (H = (0 < A ? H.replace(d, "") : H).trim(), 1 < (h = H.length))
              switch (he === 0 && (L = H.charCodeAt(0), L === 45 || 96 < L && 123 > L) && (h = (H = H.replace(" ", ":")).length), 0 < q && (Le = a(1, H, W, Y, U, re, Me.length, ee, b, ee)) !== void 0 && (h = (H = Le.trim()).length) === 0 && (H = "\0\0"), L = H.charCodeAt(0), R = H.charCodeAt(1), L) {
                case 0:
                  break;
                case 64:
                  if (R === 105 || R === 99) {
                    Ie += H + B.charAt(le);
                    break;
                  }
                default:
                  H.charCodeAt(h - 1) !== 58 && (Me += o(H, L, R, H.charCodeAt(2)));
              }
            g = A = he = L = 0, H = "", R = B.charCodeAt(++le);
        }
      }
      switch (R) {
        case 13:
        case 10:
          $ === 47 ? $ = 0 : 1 + L === 0 && ee !== 107 && 0 < H.length && (A = 1, H += "\0"), 0 < q * O && a(0, H, W, Y, U, re, Me.length, ee, b, ee), re = 1, U++;
          break;
        case 59:
        case 125:
          if ($ + P + ie + ne === 0) {
            re++;
            break;
          }
        default:
          switch (re++, J = B.charAt(le), R) {
            case 9:
            case 32:
              if (P + ne + $ === 0)
                switch (ce) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    J = "";
                    break;
                  default:
                    R !== 32 && (J = " ");
                }
              break;
            case 0:
              J = "\\0";
              break;
            case 12:
              J = "\\f";
              break;
            case 11:
              J = "\\v";
              break;
            case 38:
              P + $ + ne === 0 && (A = g = 1, J = "\f" + J);
              break;
            case 108:
              if (P + $ + ne + j === 0 && 0 < he)
                switch (le - he) {
                  case 2:
                    ce === 112 && B.charCodeAt(le - 3) === 58 && (j = ce);
                  case 8:
                    X === 111 && (j = X);
                }
              break;
            case 58:
              P + $ + ne === 0 && (he = le);
              break;
            case 44:
              $ + ie + P + ne === 0 && (A = 1, J += "\r");
              break;
            case 34:
            case 39:
              $ === 0 && (P = P === R ? 0 : P === 0 ? R : P);
              break;
            case 91:
              P + $ + ie === 0 && ne++;
              break;
            case 93:
              P + $ + ie === 0 && ne--;
              break;
            case 41:
              P + $ + ne === 0 && ie--;
              break;
            case 40:
              if (P + $ + ne === 0) {
                if (L === 0)
                  switch (2 * ce + 3 * X) {
                    case 533:
                      break;
                    default:
                      L = 1;
                  }
                ie++;
              }
              break;
            case 64:
              $ + ie + P + ne + he + ue === 0 && (ue = 1);
              break;
            case 42:
            case 47:
              if (!(0 < P + ne + ie))
                switch ($) {
                  case 0:
                    switch (2 * R + 3 * B.charCodeAt(le + 1)) {
                      case 235:
                        $ = 47;
                        break;
                      case 220:
                        h = le, $ = 42;
                    }
                    break;
                  case 42:
                    R === 47 && ce === 42 && h + 2 !== le && (B.charCodeAt(h + 2) === 33 && (Me += B.substring(h, le + 1)), J = "", $ = 0);
                }
          }
          $ === 0 && (H += J);
      }
      X = ce, ce = R, le++;
    }
    if (h = Me.length, 0 < h) {
      if (A = W, 0 < q && (Le = a(2, Me, A, Y, U, re, h, ee, b, ee), Le !== void 0 && (Me = Le).length === 0))
        return Ie + Me + Ee;
      if (Me = A.join(",") + "{" + Me + "}", C * j !== 0) {
        switch (C !== 2 || i(Me, 2) || (j = 0), j) {
          case 111:
            Me = Me.replace(E, ":-moz-$1") + Me;
            break;
          case 112:
            Me = Me.replace(N, "::-webkit-input-$1") + Me.replace(N, "::-moz-$1") + Me.replace(N, ":-ms-input-$1") + Me;
        }
        j = 0;
      }
    }
    return Ie + Me + Ee;
  }
  function n(Y, W, B) {
    var ee = W.trim().split(m);
    W = ee;
    var b = ee.length, ne = Y.length;
    switch (ne) {
      case 0:
      case 1:
        var $ = 0;
        for (Y = ne === 0 ? "" : Y[0] + " "; $ < b; ++$)
          W[$] = r(Y, W[$], B).trim();
        break;
      default:
        var ie = $ = 0;
        for (W = []; $ < b; ++$)
          for (var P = 0; P < ne; ++P)
            W[ie++] = r(Y[P] + " ", ee[$], B).trim();
    }
    return W;
  }
  function r(Y, W, B) {
    var ee = W.charCodeAt(0);
    switch (33 > ee && (ee = (W = W.trim()).charCodeAt(0)), ee) {
      case 38:
        return W.replace(w, "$1" + Y.trim());
      case 58:
        return Y.trim() + W.replace(w, "$1" + Y.trim());
      default:
        if (0 < 1 * B && 0 < W.indexOf("\f"))
          return W.replace(w, (Y.charCodeAt(0) === 58 ? "" : "$1") + Y.trim());
    }
    return Y + W;
  }
  function o(Y, W, B, ee) {
    var b = Y + ";", ne = 2 * W + 3 * B + 4 * ee;
    if (ne === 944) {
      Y = b.indexOf(":", 9) + 1;
      var $ = b.substring(Y, b.length - 1).trim();
      return $ = b.substring(0, Y).trim() + $ + ";", C === 1 || C === 2 && i($, 1) ? "-webkit-" + $ + $ : $;
    }
    if (C === 0 || C === 2 && !i(b, 1))
      return b;
    switch (ne) {
      case 1015:
        return b.charCodeAt(10) === 97 ? "-webkit-" + b + b : b;
      case 951:
        return b.charCodeAt(3) === 116 ? "-webkit-" + b + b : b;
      case 963:
        return b.charCodeAt(5) === 110 ? "-webkit-" + b + b : b;
      case 1009:
        if (b.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + b + b;
      case 978:
        return "-webkit-" + b + "-moz-" + b + b;
      case 1019:
      case 983:
        return "-webkit-" + b + "-moz-" + b + "-ms-" + b + b;
      case 883:
        if (b.charCodeAt(8) === 45)
          return "-webkit-" + b + b;
        if (0 < b.indexOf("image-set(", 11))
          return b.replace(Z, "$1-webkit-$2") + b;
        break;
      case 932:
        if (b.charCodeAt(4) === 45)
          switch (b.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + b.replace("-grow", "") + "-webkit-" + b + "-ms-" + b.replace("grow", "positive") + b;
            case 115:
              return "-webkit-" + b + "-ms-" + b.replace("shrink", "negative") + b;
            case 98:
              return "-webkit-" + b + "-ms-" + b.replace("basis", "preferred-size") + b;
          }
        return "-webkit-" + b + "-ms-" + b + b;
      case 964:
        return "-webkit-" + b + "-ms-flex-" + b + b;
      case 1023:
        if (b.charCodeAt(8) !== 99)
          break;
        return $ = b.substring(b.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + $ + "-webkit-" + b + "-ms-flex-pack" + $ + b;
      case 1005:
        return M.test(b) ? b.replace(p, ":-webkit-") + b.replace(p, ":-moz-") + b : b;
      case 1e3:
        switch ($ = b.substring(13).trim(), W = $.indexOf("-") + 1, $.charCodeAt(0) + $.charCodeAt(W)) {
          case 226:
            $ = b.replace(T, "tb");
            break;
          case 232:
            $ = b.replace(T, "tb-rl");
            break;
          case 220:
            $ = b.replace(T, "lr");
            break;
          default:
            return b;
        }
        return "-webkit-" + b + "-ms-" + $ + b;
      case 1017:
        if (b.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (W = (b = Y).length - 10, $ = (b.charCodeAt(W) === 33 ? b.substring(0, W) : b).substring(Y.indexOf(":", 7) + 1).trim(), ne = $.charCodeAt(0) + ($.charCodeAt(7) | 0)) {
          case 203:
            if (111 > $.charCodeAt(8))
              break;
          case 115:
            b = b.replace($, "-webkit-" + $) + ";" + b;
            break;
          case 207:
          case 102:
            b = b.replace($, "-webkit-" + (102 < ne ? "inline-" : "") + "box") + ";" + b.replace($, "-webkit-" + $) + ";" + b.replace($, "-ms-" + $ + "box") + ";" + b;
        }
        return b + ";";
      case 938:
        if (b.charCodeAt(5) === 45)
          switch (b.charCodeAt(6)) {
            case 105:
              return $ = b.replace("-items", ""), "-webkit-" + b + "-webkit-box-" + $ + "-ms-flex-" + $ + b;
            case 115:
              return "-webkit-" + b + "-ms-flex-item-" + b.replace(G, "") + b;
            default:
              return "-webkit-" + b + "-ms-flex-line-pack" + b.replace("align-content", "").replace(G, "") + b;
          }
        break;
      case 973:
      case 989:
        if (b.charCodeAt(3) !== 45 || b.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (K.test(Y) === !0)
          return ($ = Y.substring(Y.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(Y.replace("stretch", "fill-available"), W, B, ee).replace(":fill-available", ":stretch") : b.replace($, "-webkit-" + $) + b.replace($, "-moz-" + $.replace("fill-", "")) + b;
        break;
      case 962:
        if (b = "-webkit-" + b + (b.charCodeAt(5) === 102 ? "-ms-" + b : "") + b, B + ee === 211 && b.charCodeAt(13) === 105 && 0 < b.indexOf("transform", 10))
          return b.substring(0, b.indexOf(";", 27) + 1).replace(y, "$1-webkit-$2") + b;
    }
    return b;
  }
  function i(Y, W) {
    var B = Y.indexOf(W === 1 ? ":" : "{"), ee = Y.substring(0, W !== 3 ? B : 10);
    return B = Y.substring(B + 1, Y.length - 1), ae(W !== 2 ? ee : ee.replace(Q, "$1"), B, W);
  }
  function s(Y, W) {
    var B = o(W, W.charCodeAt(0), W.charCodeAt(1), W.charCodeAt(2));
    return B !== W + ";" ? B.replace(_, " or ($1)").substring(4) : "(" + W + ")";
  }
  function a(Y, W, B, ee, b, ne, $, ie, P, L) {
    for (var R = 0, ce = W, X; R < q; ++R)
      switch (X = S[R].call(l, Y, ce, B, ee, b, ne, $, ie, P, L)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ce = X;
      }
    if (ce !== W)
      return ce;
  }
  function c(Y) {
    switch (Y) {
      case void 0:
      case null:
        q = S.length = 0;
        break;
      default:
        if (typeof Y == "function")
          S[q++] = Y;
        else if (typeof Y == "object")
          for (var W = 0, B = Y.length; W < B; ++W)
            c(Y[W]);
        else
          O = !!Y | 0;
    }
    return c;
  }
  function u(Y) {
    return Y = Y.prefix, Y !== void 0 && (ae = null, Y ? typeof Y != "function" ? C = 1 : (C = 2, ae = Y) : C = 0), u;
  }
  function l(Y, W) {
    var B = Y;
    if (33 > B.charCodeAt(0) && (B = B.trim()), z = B, B = [z], 0 < q) {
      var ee = a(-1, W, B, B, U, re, 0, 0, 0, 0);
      ee !== void 0 && typeof ee == "string" && (W = ee);
    }
    var b = t(V, B, W, 0, 0);
    return 0 < q && (ee = a(-2, b, B, B, U, re, b.length, 0, 0, 0), ee !== void 0 && (b = ee)), z = "", j = 0, re = U = 1, b;
  }
  var f = /^\0+/g, d = /[\0\r\f]/g, p = /: */g, M = /zoo|gra/, y = /([,: ])(transform)/g, m = /,\r+?/g, w = /([\t\r\n ])*\f?&/g, D = /@(k\w+)\s*(\S*)\s*/, N = /::(place)/g, E = /:(read-only)/g, T = /[svh]\w+-[tblr]{2}/, F = /\(\s*(.*)\s*\)/g, _ = /([\s\S]*?);/g, G = /-self|flex-/g, Q = /[^]*?(:[rp][el]a[\w-]+)[^]*/, K = /stretch|:\s*\w+\-(?:conte|avail)/, Z = /([^-])(image-set\()/, re = 1, U = 1, j = 0, C = 1, V = [], S = [], q = 0, ae = null, O = 0, z = "";
  return l.use = c, l.set = u, e !== void 0 && u(e), l;
}
var ng = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function ff(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var rg = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Rs = /* @__PURE__ */ ff(
  function(e) {
    return rg.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Ys = { exports: {} }, ze = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bu;
function ig() {
  if (Bu)
    return ze;
  Bu = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, M = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, D = e ? Symbol.for("react.scope") : 60119;
  function N(T) {
    if (typeof T == "object" && T !== null) {
      var F = T.$$typeof;
      switch (F) {
        case t:
          switch (T = T.type, T) {
            case c:
            case u:
            case r:
            case i:
            case o:
            case f:
              return T;
            default:
              switch (T = T && T.$$typeof, T) {
                case a:
                case l:
                case M:
                case p:
                case s:
                  return T;
                default:
                  return F;
              }
          }
        case n:
          return F;
      }
    }
  }
  function E(T) {
    return N(T) === u;
  }
  return ze.AsyncMode = c, ze.ConcurrentMode = u, ze.ContextConsumer = a, ze.ContextProvider = s, ze.Element = t, ze.ForwardRef = l, ze.Fragment = r, ze.Lazy = M, ze.Memo = p, ze.Portal = n, ze.Profiler = i, ze.StrictMode = o, ze.Suspense = f, ze.isAsyncMode = function(T) {
    return E(T) || N(T) === c;
  }, ze.isConcurrentMode = E, ze.isContextConsumer = function(T) {
    return N(T) === a;
  }, ze.isContextProvider = function(T) {
    return N(T) === s;
  }, ze.isElement = function(T) {
    return typeof T == "object" && T !== null && T.$$typeof === t;
  }, ze.isForwardRef = function(T) {
    return N(T) === l;
  }, ze.isFragment = function(T) {
    return N(T) === r;
  }, ze.isLazy = function(T) {
    return N(T) === M;
  }, ze.isMemo = function(T) {
    return N(T) === p;
  }, ze.isPortal = function(T) {
    return N(T) === n;
  }, ze.isProfiler = function(T) {
    return N(T) === i;
  }, ze.isStrictMode = function(T) {
    return N(T) === o;
  }, ze.isSuspense = function(T) {
    return N(T) === f;
  }, ze.isValidElementType = function(T) {
    return typeof T == "string" || typeof T == "function" || T === r || T === u || T === i || T === o || T === f || T === d || typeof T == "object" && T !== null && (T.$$typeof === M || T.$$typeof === p || T.$$typeof === s || T.$$typeof === a || T.$$typeof === l || T.$$typeof === m || T.$$typeof === w || T.$$typeof === D || T.$$typeof === y);
  }, ze.typeOf = N, ze;
}
var Ue = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $u;
function og() {
  return $u || ($u = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, M = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, D = e ? Symbol.for("react.scope") : 60119;
    function N(R) {
      return typeof R == "string" || typeof R == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      R === r || R === u || R === i || R === o || R === f || R === d || typeof R == "object" && R !== null && (R.$$typeof === M || R.$$typeof === p || R.$$typeof === s || R.$$typeof === a || R.$$typeof === l || R.$$typeof === m || R.$$typeof === w || R.$$typeof === D || R.$$typeof === y);
    }
    function E(R) {
      if (typeof R == "object" && R !== null) {
        var ce = R.$$typeof;
        switch (ce) {
          case t:
            var X = R.type;
            switch (X) {
              case c:
              case u:
              case r:
              case i:
              case o:
              case f:
                return X;
              default:
                var ue = X && X.$$typeof;
                switch (ue) {
                  case a:
                  case l:
                  case M:
                  case p:
                  case s:
                    return ue;
                  default:
                    return ce;
                }
            }
          case n:
            return ce;
        }
      }
    }
    var T = c, F = u, _ = a, G = s, Q = t, K = l, Z = r, re = M, U = p, j = n, C = i, V = o, S = f, q = !1;
    function ae(R) {
      return q || (q = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), O(R) || E(R) === c;
    }
    function O(R) {
      return E(R) === u;
    }
    function z(R) {
      return E(R) === a;
    }
    function Y(R) {
      return E(R) === s;
    }
    function W(R) {
      return typeof R == "object" && R !== null && R.$$typeof === t;
    }
    function B(R) {
      return E(R) === l;
    }
    function ee(R) {
      return E(R) === r;
    }
    function b(R) {
      return E(R) === M;
    }
    function ne(R) {
      return E(R) === p;
    }
    function $(R) {
      return E(R) === n;
    }
    function ie(R) {
      return E(R) === i;
    }
    function P(R) {
      return E(R) === o;
    }
    function L(R) {
      return E(R) === f;
    }
    Ue.AsyncMode = T, Ue.ConcurrentMode = F, Ue.ContextConsumer = _, Ue.ContextProvider = G, Ue.Element = Q, Ue.ForwardRef = K, Ue.Fragment = Z, Ue.Lazy = re, Ue.Memo = U, Ue.Portal = j, Ue.Profiler = C, Ue.StrictMode = V, Ue.Suspense = S, Ue.isAsyncMode = ae, Ue.isConcurrentMode = O, Ue.isContextConsumer = z, Ue.isContextProvider = Y, Ue.isElement = W, Ue.isForwardRef = B, Ue.isFragment = ee, Ue.isLazy = b, Ue.isMemo = ne, Ue.isPortal = $, Ue.isProfiler = ie, Ue.isStrictMode = P, Ue.isSuspense = L, Ue.isValidElementType = N, Ue.typeOf = E;
  }()), Ue;
}
process.env.NODE_ENV === "production" ? Ys.exports = ig() : Ys.exports = og();
var $a = Ys.exports, Wa = $a, sg = {
  childContextTypes: !0,
  contextType: !0,
  contextTypes: !0,
  defaultProps: !0,
  displayName: !0,
  getDefaultProps: !0,
  getDerivedStateFromError: !0,
  getDerivedStateFromProps: !0,
  mixins: !0,
  propTypes: !0,
  type: !0
}, ag = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, ug = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, df = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Va = {};
Va[Wa.ForwardRef] = ug;
Va[Wa.Memo] = df;
function Wu(e) {
  return Wa.isMemo(e) ? df : Va[e.$$typeof] || sg;
}
var cg = Object.defineProperty, lg = Object.getOwnPropertyNames, Vu = Object.getOwnPropertySymbols, fg = Object.getOwnPropertyDescriptor, dg = Object.getPrototypeOf, Hu = Object.prototype;
function hf(e, t, n) {
  if (typeof t != "string") {
    if (Hu) {
      var r = dg(t);
      r && r !== Hu && hf(e, r, n);
    }
    var o = lg(t);
    Vu && (o = o.concat(Vu(t)));
    for (var i = Wu(e), s = Wu(t), a = 0; a < o.length; ++a) {
      var c = o[a];
      if (!ag[c] && !(n && n[c]) && !(s && s[c]) && !(i && i[c])) {
        var u = fg(t, c);
        try {
          cg(e, c, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var hg = hf;
const gg = /* @__PURE__ */ vi(hg);
function Jt() {
  return (Jt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
var qu = function(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1)
    n.push(t[r], e[r + 1]);
  return n;
}, Fs = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !ti.typeOf(e);
}, Xi = Object.freeze([]), yn = Object.freeze({});
function ni(e) {
  return typeof e == "function";
}
function Qs(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Ha(e) {
  return e && typeof e.styledComponentId == "string";
}
var gr = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", qa = typeof window < "u" && "HTMLElement" in window, pg = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production")), Mg = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
` } : {};
function yg() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], t = [], n = 1, r = arguments.length; n < r; n += 1)
    t.push(n < 0 || arguments.length <= n ? void 0 : arguments[n]);
  return t.forEach(function(o) {
    e = e.replace(/%[a-z]/, o);
  }), e;
}
function wr(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (n.length > 0 ? " Args: " + n.join(", ") : "")) : new Error(yg.apply(void 0, [Mg[e]].concat(n)).trim());
}
var mg = function() {
  function e(n) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = n;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(n) {
    for (var r = 0, o = 0; o < n; o++)
      r += this.groupSizes[o];
    return r;
  }, t.insertRules = function(n, r) {
    if (n >= this.groupSizes.length) {
      for (var o = this.groupSizes, i = o.length, s = i; n >= s; )
        (s <<= 1) < 0 && wr(16, "" + n);
      this.groupSizes = new Uint32Array(s), this.groupSizes.set(o), this.length = s;
      for (var a = i; a < s; a++)
        this.groupSizes[a] = 0;
    }
    for (var c = this.indexOfGroup(n + 1), u = 0, l = r.length; u < l; u++)
      this.tag.insertRule(c, r[u]) && (this.groupSizes[n]++, c++);
  }, t.clearGroup = function(n) {
    if (n < this.length) {
      var r = this.groupSizes[n], o = this.indexOfGroup(n), i = o + r;
      this.groupSizes[n] = 0;
      for (var s = o; s < i; s++)
        this.tag.deleteRule(o);
    }
  }, t.getGroup = function(n) {
    var r = "";
    if (n >= this.length || this.groupSizes[n] === 0)
      return r;
    for (var o = this.groupSizes[n], i = this.indexOfGroup(n), s = i + o, a = i; a < s; a++)
      r += this.tag.getRule(a) + `/*!sc*/
`;
    return r;
  }, e;
}(), Bi = /* @__PURE__ */ new Map(), Zi = /* @__PURE__ */ new Map(), Kr = 1, Si = function(e) {
  if (Bi.has(e))
    return Bi.get(e);
  for (; Zi.has(Kr); )
    Kr++;
  var t = Kr++;
  return process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1 << 30) && wr(16, "" + t), Bi.set(e, t), Zi.set(t, e), t;
}, vg = function(e) {
  return Zi.get(e);
}, wg = function(e, t) {
  t >= Kr && (Kr = t + 1), Bi.set(e, t), Zi.set(t, e);
}, Dg = "style[" + gr + '][data-styled-version="5.3.11"]', Ig = new RegExp("^" + gr + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Ag = function(e, t, n) {
  for (var r, o = n.split(","), i = 0, s = o.length; i < s; i++)
    (r = o[i]) && e.registerName(t, r);
}, Eg = function(e, t) {
  for (var n = (t.textContent || "").split(`/*!sc*/
`), r = [], o = 0, i = n.length; o < i; o++) {
    var s = n[o].trim();
    if (s) {
      var a = s.match(Ig);
      if (a) {
        var c = 0 | parseInt(a[1], 10), u = a[2];
        c !== 0 && (wg(u, c), Ag(e, u, a[3]), e.getTag().insertRules(c, r)), r.length = 0;
      } else
        r.push(s);
    }
  }
}, Tg = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, gf = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = function(a) {
    for (var c = a.childNodes, u = c.length; u >= 0; u--) {
      var l = c[u];
      if (l && l.nodeType === 1 && l.hasAttribute(gr))
        return l;
    }
  }(n), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(gr, "active"), r.setAttribute("data-styled-version", "5.3.11");
  var s = Tg();
  return s && r.setAttribute("nonce", s), n.insertBefore(r, i), r;
}, Ng = function() {
  function e(n) {
    var r = this.element = gf(n);
    r.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet)
        return o.sheet;
      for (var i = document.styleSheets, s = 0, a = i.length; s < a; s++) {
        var c = i[s];
        if (c.ownerNode === o)
          return c;
      }
      wr(17);
    }(r), this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(n, r) {
    try {
      return this.sheet.insertRule(r, n), this.length++, !0;
    } catch {
      return !1;
    }
  }, t.deleteRule = function(n) {
    this.sheet.deleteRule(n), this.length--;
  }, t.getRule = function(n) {
    var r = this.sheet.cssRules[n];
    return r !== void 0 && typeof r.cssText == "string" ? r.cssText : "";
  }, e;
}(), jg = function() {
  function e(n) {
    var r = this.element = gf(n);
    this.nodes = r.childNodes, this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(n, r) {
    if (n <= this.length && n >= 0) {
      var o = document.createTextNode(r), i = this.nodes[n];
      return this.element.insertBefore(o, i || null), this.length++, !0;
    }
    return !1;
  }, t.deleteRule = function(n) {
    this.element.removeChild(this.nodes[n]), this.length--;
  }, t.getRule = function(n) {
    return n < this.length ? this.nodes[n].textContent : "";
  }, e;
}(), bg = function() {
  function e(n) {
    this.rules = [], this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(n, r) {
    return n <= this.length && (this.rules.splice(n, 0, r), this.length++, !0);
  }, t.deleteRule = function(n) {
    this.rules.splice(n, 1), this.length--;
  }, t.getRule = function(n) {
    return n < this.length ? this.rules[n] : "";
  }, e;
}(), Ku = qa, Sg = { isServer: !qa, useCSSOMInjection: !pg }, pf = function() {
  function e(n, r, o) {
    n === void 0 && (n = yn), r === void 0 && (r = {}), this.options = Jt({}, Sg, {}, n), this.gs = r, this.names = new Map(o), this.server = !!n.isServer, !this.server && qa && Ku && (Ku = !1, function(i) {
      for (var s = document.querySelectorAll(Dg), a = 0, c = s.length; a < c; a++) {
        var u = s[a];
        u && u.getAttribute(gr) !== "active" && (Eg(i, u), u.parentNode && u.parentNode.removeChild(u));
      }
    }(this));
  }
  e.registerId = function(n) {
    return Si(n);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(n, r) {
    return r === void 0 && (r = !0), new e(Jt({}, this.options, {}, n), this.gs, r && this.names || void 0);
  }, t.allocateGSInstance = function(n) {
    return this.gs[n] = (this.gs[n] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (o = (r = this.options).isServer, i = r.useCSSOMInjection, s = r.target, n = o ? new bg(s) : i ? new Ng(s) : new jg(s), new mg(n)));
    var n, r, o, i, s;
  }, t.hasNameForId = function(n, r) {
    return this.names.has(n) && this.names.get(n).has(r);
  }, t.registerName = function(n, r) {
    if (Si(n), this.names.has(n))
      this.names.get(n).add(r);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(r), this.names.set(n, o);
    }
  }, t.insertRules = function(n, r, o) {
    this.registerName(n, r), this.getTag().insertRules(Si(n), o);
  }, t.clearNames = function(n) {
    this.names.has(n) && this.names.get(n).clear();
  }, t.clearRules = function(n) {
    this.getTag().clearGroup(Si(n)), this.clearNames(n);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(n) {
      for (var r = n.getTag(), o = r.length, i = "", s = 0; s < o; s++) {
        var a = vg(s);
        if (a !== void 0) {
          var c = n.names.get(a), u = r.getGroup(s);
          if (c && u && c.size) {
            var l = gr + ".g" + s + '[id="' + a + '"]', f = "";
            c !== void 0 && c.forEach(function(d) {
              d.length > 0 && (f += d + ",");
            }), i += "" + u + l + '{content:"' + f + `"}/*!sc*/
`;
          }
        }
      }
      return i;
    }(this);
  }, e;
}(), xg = /(a)(d)/gi, Gu = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Bs(e) {
  var t, n = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0)
    n = Gu(t % 52) + n;
  return (Gu(t % 52) + n).replace(xg, "$1-$2");
}
var bn = function(e, t) {
  for (var n = t.length; n; )
    e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, Mf = function(e) {
  return bn(5381, e);
};
function Cg(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (ni(n) && !Ha(n))
      return !1;
  }
  return !0;
}
var Og = Mf("5.3.11"), Lg = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && Cg(t), this.componentId = n, this.baseHash = bn(Og, n), this.baseStyle = r, pf.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.componentId, i = [];
    if (this.baseStyle && i.push(this.baseStyle.generateAndInjectStyles(t, n, r)), this.isStatic && !r.hash)
      if (this.staticRulesId && n.hasNameForId(o, this.staticRulesId))
        i.push(this.staticRulesId);
      else {
        var s = pr(this.rules, t, n, r).join(""), a = Bs(bn(this.baseHash, s) >>> 0);
        if (!n.hasNameForId(o, a)) {
          var c = r(s, "." + a, void 0, o);
          n.insertRules(o, a, c);
        }
        i.push(a), this.staticRulesId = a;
      }
    else {
      for (var u = this.rules.length, l = bn(this.baseHash, r.hash), f = "", d = 0; d < u; d++) {
        var p = this.rules[d];
        if (typeof p == "string")
          f += p, process.env.NODE_ENV !== "production" && (l = bn(l, p + d));
        else if (p) {
          var M = pr(p, t, n, r), y = Array.isArray(M) ? M.join("") : M;
          l = bn(l, y + d), f += y;
        }
      }
      if (f) {
        var m = Bs(l >>> 0);
        if (!n.hasNameForId(o, m)) {
          var w = r(f, "." + m, void 0, o);
          n.insertRules(o, m, w);
        }
        i.push(m);
      }
    }
    return i.join(" ");
  }, e;
}(), _g = /^\s*\/\/.*$/gm, kg = [":", "[", ".", "#"];
function zg(e) {
  var t, n, r, o, i = e === void 0 ? yn : e, s = i.options, a = s === void 0 ? yn : s, c = i.plugins, u = c === void 0 ? Xi : c, l = new tg(a), f = [], d = function(y) {
    function m(w) {
      if (w)
        try {
          y(w + "}");
        } catch {
        }
    }
    return function(w, D, N, E, T, F, _, G, Q, K) {
      switch (w) {
        case 1:
          if (Q === 0 && D.charCodeAt(0) === 64)
            return y(D + ";"), "";
          break;
        case 2:
          if (G === 0)
            return D + "/*|*/";
          break;
        case 3:
          switch (G) {
            case 102:
            case 112:
              return y(N[0] + D), "";
            default:
              return D + (K === 0 ? "/*|*/" : "");
          }
        case -2:
          D.split("/*|*/}").forEach(m);
      }
    };
  }(function(y) {
    f.push(y);
  }), p = function(y, m, w) {
    return m === 0 && kg.indexOf(w[n.length]) !== -1 || w.match(o) ? y : "." + t;
  };
  function M(y, m, w, D) {
    D === void 0 && (D = "&");
    var N = y.replace(_g, ""), E = m && w ? w + " " + m + " { " + N + " }" : N;
    return t = D, n = m, r = new RegExp("\\" + n + "\\b", "g"), o = new RegExp("(\\" + n + "\\b){2,}"), l(w || !m ? "" : m, E);
  }
  return l.use([].concat(u, [function(y, m, w) {
    y === 2 && w.length && w[0].lastIndexOf(n) > 0 && (w[0] = w[0].replace(r, p));
  }, d, function(y) {
    if (y === -2) {
      var m = f;
      return f = [], m;
    }
  }])), M.hash = u.length ? u.reduce(function(y, m) {
    return m.name || wr(15), bn(y, m.name);
  }, 5381).toString() : "", M;
}
var yf = we.createContext();
yf.Consumer;
var mf = we.createContext(), Ug = (mf.Consumer, new pf()), $s = zg();
function Pg() {
  return it(yf) || Ug;
}
function Rg() {
  return it(mf) || $s;
}
var Yg = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = $s);
      var s = r.name + i.hash;
      o.hasNameForId(r.id, s) || o.insertRules(r.id, s, i(r.rules, s, "@keyframes"));
    }, this.toString = function() {
      return wr(12, String(r.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = n;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = $s), this.name + t.hash;
  }, e;
}(), Fg = /([A-Z])/, Qg = /([A-Z])/g, Bg = /^ms-/, $g = function(e) {
  return "-" + e.toLowerCase();
};
function Ju(e) {
  return Fg.test(e) ? e.replace(Qg, $g).replace(Bg, "-ms-") : e;
}
var Xu = function(e) {
  return e == null || e === !1 || e === "";
};
function pr(e, t, n, r) {
  if (Array.isArray(e)) {
    for (var o, i = [], s = 0, a = e.length; s < a; s += 1)
      (o = pr(e[s], t, n, r)) !== "" && (Array.isArray(o) ? i.push.apply(i, o) : i.push(o));
    return i;
  }
  if (Xu(e))
    return "";
  if (Ha(e))
    return "." + e.styledComponentId;
  if (ni(e)) {
    if (typeof (u = e) != "function" || u.prototype && u.prototype.isReactComponent || !t)
      return e;
    var c = e(t);
    return process.env.NODE_ENV !== "production" && ti.isElement(c) && console.warn(Qs(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), pr(c, t, n, r);
  }
  var u;
  return e instanceof Yg ? n ? (e.inject(n, r), e.getName(r)) : e : Fs(e) ? function l(f, d) {
    var p, M, y = [];
    for (var m in f)
      f.hasOwnProperty(m) && !Xu(f[m]) && (Array.isArray(f[m]) && f[m].isCss || ni(f[m]) ? y.push(Ju(m) + ":", f[m], ";") : Fs(f[m]) ? y.push.apply(y, l(f[m], m)) : y.push(Ju(m) + ": " + (p = m, (M = f[m]) == null || typeof M == "boolean" || M === "" ? "" : typeof M != "number" || M === 0 || p in ng || p.startsWith("--") ? String(M).trim() : M + "px") + ";"));
    return d ? [d + " {"].concat(y, ["}"]) : y;
  }(e) : e.toString();
}
var Zu = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Wg(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  return ni(e) || Fs(e) ? Zu(pr(qu(Xi, [e].concat(n)))) : n.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Zu(pr(qu(e, n)));
}
var ec = /invalid hook call/i, xi = /* @__PURE__ */ new Set(), Vg = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var n = "The component " + e + (t ? ' with the id of "' + t + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, r = console.error;
    try {
      var o = !0;
      console.error = function(i) {
        if (ec.test(i))
          o = !1, xi.delete(n);
        else {
          for (var s = arguments.length, a = new Array(s > 1 ? s - 1 : 0), c = 1; c < s; c++)
            a[c - 1] = arguments[c];
          r.apply(void 0, [i].concat(a));
        }
      }, Ze(), o && !xi.has(n) && (console.warn(n), xi.add(n));
    } catch (i) {
      ec.test(i.message) && xi.delete(n);
    } finally {
      console.error = r;
    }
  }
}, Hg = function(e, t, n) {
  return n === void 0 && (n = yn), e.theme !== n.theme && e.theme || t || n.theme;
}, qg = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Kg = /(^-|-$)/g;
function cs(e) {
  return e.replace(qg, "-").replace(Kg, "");
}
var Gg = function(e) {
  return Bs(Mf(e) >>> 0);
};
function Ci(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Ws = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Jg = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Xg(e, t, n) {
  var r = e[n];
  Ws(t) && Ws(r) ? vf(r, t) : e[n] = t;
}
function vf(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  for (var o = 0, i = n; o < i.length; o++) {
    var s = i[o];
    if (Ws(s))
      for (var a in s)
        Jg(a) && Xg(e, s[a], a);
  }
  return e;
}
var wf = we.createContext();
wf.Consumer;
var ls = {};
function Df(e, t, n) {
  var r = Ha(e), o = !Ci(e), i = t.attrs, s = i === void 0 ? Xi : i, a = t.componentId, c = a === void 0 ? function(D, N) {
    var E = typeof D != "string" ? "sc" : cs(D);
    ls[E] = (ls[E] || 0) + 1;
    var T = E + "-" + Gg("5.3.11" + E + ls[E]);
    return N ? N + "-" + T : T;
  }(t.displayName, t.parentComponentId) : a, u = t.displayName, l = u === void 0 ? function(D) {
    return Ci(D) ? "styled." + D : "Styled(" + Qs(D) + ")";
  }(e) : u, f = t.displayName && t.componentId ? cs(t.displayName) + "-" + t.componentId : t.componentId || c, d = r && e.attrs ? Array.prototype.concat(e.attrs, s).filter(Boolean) : s, p = t.shouldForwardProp;
  r && e.shouldForwardProp && (p = t.shouldForwardProp ? function(D, N, E) {
    return e.shouldForwardProp(D, N, E) && t.shouldForwardProp(D, N, E);
  } : e.shouldForwardProp);
  var M, y = new Lg(n, f, r ? e.componentStyle : void 0), m = y.isStatic && s.length === 0, w = function(D, N) {
    return function(E, T, F, _) {
      var G = E.attrs, Q = E.componentStyle, K = E.defaultProps, Z = E.foldedComponentIds, re = E.shouldForwardProp, U = E.styledComponentId, j = E.target, C = function(ee, b, ne) {
        ee === void 0 && (ee = yn);
        var $ = Jt({}, b, { theme: ee }), ie = {};
        return ne.forEach(function(P) {
          var L, R, ce, X = P;
          for (L in ni(X) && (X = X($)), X)
            $[L] = ie[L] = L === "className" ? (R = ie[L], ce = X[L], R && ce ? R + " " + ce : R || ce) : X[L];
        }), [$, ie];
      }(Hg(T, it(wf), K) || yn, T, G), V = C[0], S = C[1], q = function(ee, b, ne, $) {
        var ie = Pg(), P = Rg(), L = b ? ee.generateAndInjectStyles(yn, ie, P) : ee.generateAndInjectStyles(ne, ie, P);
        return process.env.NODE_ENV !== "production" && !b && $ && $(L), L;
      }(Q, _, V, process.env.NODE_ENV !== "production" ? E.warnTooManyClasses : void 0), ae = F, O = S.$as || T.$as || S.as || T.as || j, z = Ci(O), Y = S !== T ? Jt({}, T, {}, S) : T, W = {};
      for (var B in Y)
        B[0] !== "$" && B !== "as" && (B === "forwardedAs" ? W.as = Y[B] : (re ? re(B, Rs, O) : !z || Rs(B)) && (W[B] = Y[B]));
      return T.style && S.style !== T.style && (W.style = Jt({}, T.style, {}, S.style)), W.className = Array.prototype.concat(Z, U, q !== U ? q : null, T.className, S.className).filter(Boolean).join(" "), W.ref = ae, Nt(O, W);
    }(M, D, N, m);
  };
  return w.displayName = l, (M = we.forwardRef(w)).attrs = d, M.componentStyle = y, M.displayName = l, M.shouldForwardProp = p, M.foldedComponentIds = r ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Xi, M.styledComponentId = f, M.target = r ? e.target : e, M.withComponent = function(D) {
    var N = t.componentId, E = function(F, _) {
      if (F == null)
        return {};
      var G, Q, K = {}, Z = Object.keys(F);
      for (Q = 0; Q < Z.length; Q++)
        G = Z[Q], _.indexOf(G) >= 0 || (K[G] = F[G]);
      return K;
    }(t, ["componentId"]), T = N && N + "-" + (Ci(D) ? D : cs(Qs(D)));
    return Df(D, Jt({}, E, { attrs: d, componentId: T }), n);
  }, Object.defineProperty(M, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(D) {
    this._foldedDefaultProps = r ? vf({}, e.defaultProps, D) : D;
  } }), process.env.NODE_ENV !== "production" && (Vg(l, f), M.warnTooManyClasses = function(D, N) {
    var E = {}, T = !1;
    return function(F) {
      if (!T && (E[F] = !0, Object.keys(E).length >= 200)) {
        var _ = N ? ' with the id of "' + N + '"' : "";
        console.warn("Over 200 classes were generated for component " + D + _ + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), T = !0, E = {};
      }
    };
  }(l, f)), Object.defineProperty(M, "toString", { value: function() {
    return "." + M.styledComponentId;
  } }), o && gg(M, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), M;
}
var Vs = function(e) {
  return function t(n, r, o) {
    if (o === void 0 && (o = yn), !ti.isValidElementType(r))
      return wr(1, String(r));
    var i = function() {
      return n(r, o, Wg.apply(void 0, arguments));
    };
    return i.withConfig = function(s) {
      return t(n, r, Jt({}, o, {}, s));
    }, i.attrs = function(s) {
      return t(n, r, Jt({}, o, { attrs: Array.prototype.concat(o.attrs, s).filter(Boolean) }));
    }, i;
  }(Df, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Vs[e] = Vs(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const No = Vs, If = No("div")`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`, oS = No("div")`
  display: flex;
  flex-direction: row;
  flex: 1 0 auto;
`, sS = No(If)`
  background-image: url(${(e) => e.background});
  background-position: center, center;
  background-size: cover;
  background-repeat: no-repeat;
`, Zg = No("div")`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`;
var Hs = { exports: {} }, xr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tc;
function ep() {
  if (tc)
    return xr;
  tc = 1;
  var e = we, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(a, c, u) {
    var l, f = {}, d = null, p = null;
    u !== void 0 && (d = "" + u), c.key !== void 0 && (d = "" + c.key), c.ref !== void 0 && (p = c.ref);
    for (l in c)
      r.call(c, l) && !i.hasOwnProperty(l) && (f[l] = c[l]);
    if (a && a.defaultProps)
      for (l in c = a.defaultProps, c)
        f[l] === void 0 && (f[l] = c[l]);
    return { $$typeof: t, type: a, key: d, ref: p, props: f, _owner: o.current };
  }
  return xr.Fragment = n, xr.jsx = s, xr.jsxs = s, xr;
}
var Cr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nc;
function tp() {
  return nc || (nc = 1, process.env.NODE_ENV !== "production" && function() {
    var e = we, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), M = Symbol.iterator, y = "@@iterator";
    function m(x) {
      if (x === null || typeof x != "object")
        return null;
      var se = M && x[M] || x[y];
      return typeof se == "function" ? se : null;
    }
    var w = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function D(x) {
      {
        for (var se = arguments.length, ge = new Array(se > 1 ? se - 1 : 0), me = 1; me < se; me++)
          ge[me - 1] = arguments[me];
        N("error", x, ge);
      }
    }
    function N(x, se, ge) {
      {
        var me = w.ReactDebugCurrentFrame, Se = me.getStackAddendum();
        Se !== "" && (se += "%s", ge = ge.concat([Se]));
        var Qe = ge.map(function(Ne) {
          return String(Ne);
        });
        Qe.unshift("Warning: " + se), Function.prototype.apply.call(console[x], console, Qe);
      }
    }
    var E = !1, T = !1, F = !1, _ = !1, G = !1, Q;
    Q = Symbol.for("react.module.reference");
    function K(x) {
      return !!(typeof x == "string" || typeof x == "function" || x === r || x === i || G || x === o || x === u || x === l || _ || x === p || E || T || F || typeof x == "object" && x !== null && (x.$$typeof === d || x.$$typeof === f || x.$$typeof === s || x.$$typeof === a || x.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      x.$$typeof === Q || x.getModuleId !== void 0));
    }
    function Z(x, se, ge) {
      var me = x.displayName;
      if (me)
        return me;
      var Se = se.displayName || se.name || "";
      return Se !== "" ? ge + "(" + Se + ")" : ge;
    }
    function re(x) {
      return x.displayName || "Context";
    }
    function U(x) {
      if (x == null)
        return null;
      if (typeof x.tag == "number" && D("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof x == "function")
        return x.displayName || x.name || null;
      if (typeof x == "string")
        return x;
      switch (x) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case u:
          return "Suspense";
        case l:
          return "SuspenseList";
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case a:
            var se = x;
            return re(se) + ".Consumer";
          case s:
            var ge = x;
            return re(ge._context) + ".Provider";
          case c:
            return Z(x, x.render, "ForwardRef");
          case f:
            var me = x.displayName || null;
            return me !== null ? me : U(x.type) || "Memo";
          case d: {
            var Se = x, Qe = Se._payload, Ne = Se._init;
            try {
              return U(Ne(Qe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var j = Object.assign, C = 0, V, S, q, ae, O, z, Y;
    function W() {
    }
    W.__reactDisabledLog = !0;
    function B() {
      {
        if (C === 0) {
          V = console.log, S = console.info, q = console.warn, ae = console.error, O = console.group, z = console.groupCollapsed, Y = console.groupEnd;
          var x = {
            configurable: !0,
            enumerable: !0,
            value: W,
            writable: !0
          };
          Object.defineProperties(console, {
            info: x,
            log: x,
            warn: x,
            error: x,
            group: x,
            groupCollapsed: x,
            groupEnd: x
          });
        }
        C++;
      }
    }
    function ee() {
      {
        if (C--, C === 0) {
          var x = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: j({}, x, {
              value: V
            }),
            info: j({}, x, {
              value: S
            }),
            warn: j({}, x, {
              value: q
            }),
            error: j({}, x, {
              value: ae
            }),
            group: j({}, x, {
              value: O
            }),
            groupCollapsed: j({}, x, {
              value: z
            }),
            groupEnd: j({}, x, {
              value: Y
            })
          });
        }
        C < 0 && D("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var b = w.ReactCurrentDispatcher, ne;
    function $(x, se, ge) {
      {
        if (ne === void 0)
          try {
            throw Error();
          } catch (Se) {
            var me = Se.stack.trim().match(/\n( *(at )?)/);
            ne = me && me[1] || "";
          }
        return `
` + ne + x;
      }
    }
    var ie = !1, P;
    {
      var L = typeof WeakMap == "function" ? WeakMap : Map;
      P = new L();
    }
    function R(x, se) {
      if (!x || ie)
        return "";
      {
        var ge = P.get(x);
        if (ge !== void 0)
          return ge;
      }
      var me;
      ie = !0;
      var Se = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Qe;
      Qe = b.current, b.current = null, B();
      try {
        if (se) {
          var Ne = function() {
            throw Error();
          };
          if (Object.defineProperty(Ne.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ne, []);
            } catch (Ht) {
              me = Ht;
            }
            Reflect.construct(x, [], Ne);
          } else {
            try {
              Ne.call();
            } catch (Ht) {
              me = Ht;
            }
            x.call(Ne.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ht) {
            me = Ht;
          }
          x();
        }
      } catch (Ht) {
        if (Ht && me && typeof Ht.stack == "string") {
          for (var Ae = Ht.stack.split(`
`), lt = me.stack.split(`
`), Ge = Ae.length - 1, Je = lt.length - 1; Ge >= 1 && Je >= 0 && Ae[Ge] !== lt[Je]; )
            Je--;
          for (; Ge >= 1 && Je >= 0; Ge--, Je--)
            if (Ae[Ge] !== lt[Je]) {
              if (Ge !== 1 || Je !== 1)
                do
                  if (Ge--, Je--, Je < 0 || Ae[Ge] !== lt[Je]) {
                    var wt = `
` + Ae[Ge].replace(" at new ", " at ");
                    return x.displayName && wt.includes("<anonymous>") && (wt = wt.replace("<anonymous>", x.displayName)), typeof x == "function" && P.set(x, wt), wt;
                  }
                while (Ge >= 1 && Je >= 0);
              break;
            }
        }
      } finally {
        ie = !1, b.current = Qe, ee(), Error.prepareStackTrace = Se;
      }
      var Vn = x ? x.displayName || x.name : "", Ru = Vn ? $(Vn) : "";
      return typeof x == "function" && P.set(x, Ru), Ru;
    }
    function ce(x, se, ge) {
      return R(x, !1);
    }
    function X(x) {
      var se = x.prototype;
      return !!(se && se.isReactComponent);
    }
    function ue(x, se, ge) {
      if (x == null)
        return "";
      if (typeof x == "function")
        return R(x, X(x));
      if (typeof x == "string")
        return $(x);
      switch (x) {
        case u:
          return $("Suspense");
        case l:
          return $("SuspenseList");
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case c:
            return ce(x.render);
          case f:
            return ue(x.type, se, ge);
          case d: {
            var me = x, Se = me._payload, Qe = me._init;
            try {
              return ue(Qe(Se), se, ge);
            } catch {
            }
          }
        }
      return "";
    }
    var he = Object.prototype.hasOwnProperty, le = {}, A = w.ReactDebugCurrentFrame;
    function g(x) {
      if (x) {
        var se = x._owner, ge = ue(x.type, x._source, se ? se.type : null);
        A.setExtraStackFrame(ge);
      } else
        A.setExtraStackFrame(null);
    }
    function h(x, se, ge, me, Se) {
      {
        var Qe = Function.call.bind(he);
        for (var Ne in x)
          if (Qe(x, Ne)) {
            var Ae = void 0;
            try {
              if (typeof x[Ne] != "function") {
                var lt = Error((me || "React class") + ": " + ge + " type `" + Ne + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof x[Ne] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw lt.name = "Invariant Violation", lt;
              }
              Ae = x[Ne](se, Ne, me, ge, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ge) {
              Ae = Ge;
            }
            Ae && !(Ae instanceof Error) && (g(Se), D("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", me || "React class", ge, Ne, typeof Ae), g(null)), Ae instanceof Error && !(Ae.message in le) && (le[Ae.message] = !0, g(Se), D("Failed %s type: %s", ge, Ae.message), g(null));
          }
      }
    }
    var I = Array.isArray;
    function k(x) {
      return I(x);
    }
    function J(x) {
      {
        var se = typeof Symbol == "function" && Symbol.toStringTag, ge = se && x[Symbol.toStringTag] || x.constructor.name || "Object";
        return ge;
      }
    }
    function H(x) {
      try {
        return Me(x), !1;
      } catch {
        return !0;
      }
    }
    function Me(x) {
      return "" + x;
    }
    function Ee(x) {
      if (H(x))
        return D("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", J(x)), Me(x);
    }
    var Ie = w.ReactCurrentOwner, Le = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Fe, ye, Vt;
    Vt = {};
    function $n(x) {
      if (he.call(x, "ref")) {
        var se = Object.getOwnPropertyDescriptor(x, "ref").get;
        if (se && se.isReactWarning)
          return !1;
      }
      return x.ref !== void 0;
    }
    function bi(x) {
      if (he.call(x, "key")) {
        var se = Object.getOwnPropertyDescriptor(x, "key").get;
        if (se && se.isReactWarning)
          return !1;
      }
      return x.key !== void 0;
    }
    function Ou(x, se) {
      if (typeof x.ref == "string" && Ie.current && se && Ie.current.stateNode !== se) {
        var ge = U(Ie.current.type);
        Vt[ge] || (D('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', U(Ie.current.type), x.ref), Vt[ge] = !0);
      }
    }
    function kh(x, se) {
      {
        var ge = function() {
          Fe || (Fe = !0, D("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", se));
        };
        ge.isReactWarning = !0, Object.defineProperty(x, "key", {
          get: ge,
          configurable: !0
        });
      }
    }
    function zh(x, se) {
      {
        var ge = function() {
          ye || (ye = !0, D("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", se));
        };
        ge.isReactWarning = !0, Object.defineProperty(x, "ref", {
          get: ge,
          configurable: !0
        });
      }
    }
    var Uh = function(x, se, ge, me, Se, Qe, Ne) {
      var Ae = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: x,
        key: se,
        ref: ge,
        props: Ne,
        // Record the component responsible for creating this element.
        _owner: Qe
      };
      return Ae._store = {}, Object.defineProperty(Ae._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ae, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: me
      }), Object.defineProperty(Ae, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Se
      }), Object.freeze && (Object.freeze(Ae.props), Object.freeze(Ae)), Ae;
    };
    function Ph(x, se, ge, me, Se) {
      {
        var Qe, Ne = {}, Ae = null, lt = null;
        ge !== void 0 && (Ee(ge), Ae = "" + ge), bi(se) && (Ee(se.key), Ae = "" + se.key), $n(se) && (lt = se.ref, Ou(se, Se));
        for (Qe in se)
          he.call(se, Qe) && !Le.hasOwnProperty(Qe) && (Ne[Qe] = se[Qe]);
        if (x && x.defaultProps) {
          var Ge = x.defaultProps;
          for (Qe in Ge)
            Ne[Qe] === void 0 && (Ne[Qe] = Ge[Qe]);
        }
        if (Ae || lt) {
          var Je = typeof x == "function" ? x.displayName || x.name || "Unknown" : x;
          Ae && kh(Ne, Je), lt && zh(Ne, Je);
        }
        return Uh(x, Ae, lt, Se, me, Ie.current, Ne);
      }
    }
    var ss = w.ReactCurrentOwner, Lu = w.ReactDebugCurrentFrame;
    function Wn(x) {
      if (x) {
        var se = x._owner, ge = ue(x.type, x._source, se ? se.type : null);
        Lu.setExtraStackFrame(ge);
      } else
        Lu.setExtraStackFrame(null);
    }
    var as;
    as = !1;
    function us(x) {
      return typeof x == "object" && x !== null && x.$$typeof === t;
    }
    function _u() {
      {
        if (ss.current) {
          var x = U(ss.current.type);
          if (x)
            return `

Check the render method of \`` + x + "`.";
        }
        return "";
      }
    }
    function Rh(x) {
      {
        if (x !== void 0) {
          var se = x.fileName.replace(/^.*[\\\/]/, ""), ge = x.lineNumber;
          return `

Check your code at ` + se + ":" + ge + ".";
        }
        return "";
      }
    }
    var ku = {};
    function Yh(x) {
      {
        var se = _u();
        if (!se) {
          var ge = typeof x == "string" ? x : x.displayName || x.name;
          ge && (se = `

Check the top-level render call using <` + ge + ">.");
        }
        return se;
      }
    }
    function zu(x, se) {
      {
        if (!x._store || x._store.validated || x.key != null)
          return;
        x._store.validated = !0;
        var ge = Yh(se);
        if (ku[ge])
          return;
        ku[ge] = !0;
        var me = "";
        x && x._owner && x._owner !== ss.current && (me = " It was passed a child from " + U(x._owner.type) + "."), Wn(x), D('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ge, me), Wn(null);
      }
    }
    function Uu(x, se) {
      {
        if (typeof x != "object")
          return;
        if (k(x))
          for (var ge = 0; ge < x.length; ge++) {
            var me = x[ge];
            us(me) && zu(me, se);
          }
        else if (us(x))
          x._store && (x._store.validated = !0);
        else if (x) {
          var Se = m(x);
          if (typeof Se == "function" && Se !== x.entries)
            for (var Qe = Se.call(x), Ne; !(Ne = Qe.next()).done; )
              us(Ne.value) && zu(Ne.value, se);
        }
      }
    }
    function Fh(x) {
      {
        var se = x.type;
        if (se == null || typeof se == "string")
          return;
        var ge;
        if (typeof se == "function")
          ge = se.propTypes;
        else if (typeof se == "object" && (se.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        se.$$typeof === f))
          ge = se.propTypes;
        else
          return;
        if (ge) {
          var me = U(se);
          h(ge, x.props, "prop", me, x);
        } else if (se.PropTypes !== void 0 && !as) {
          as = !0;
          var Se = U(se);
          D("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Se || "Unknown");
        }
        typeof se.getDefaultProps == "function" && !se.getDefaultProps.isReactClassApproved && D("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Qh(x) {
      {
        for (var se = Object.keys(x.props), ge = 0; ge < se.length; ge++) {
          var me = se[ge];
          if (me !== "children" && me !== "key") {
            Wn(x), D("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", me), Wn(null);
            break;
          }
        }
        x.ref !== null && (Wn(x), D("Invalid attribute `ref` supplied to `React.Fragment`."), Wn(null));
      }
    }
    function Pu(x, se, ge, me, Se, Qe) {
      {
        var Ne = K(x);
        if (!Ne) {
          var Ae = "";
          (x === void 0 || typeof x == "object" && x !== null && Object.keys(x).length === 0) && (Ae += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var lt = Rh(Se);
          lt ? Ae += lt : Ae += _u();
          var Ge;
          x === null ? Ge = "null" : k(x) ? Ge = "array" : x !== void 0 && x.$$typeof === t ? (Ge = "<" + (U(x.type) || "Unknown") + " />", Ae = " Did you accidentally export a JSX literal instead of a component?") : Ge = typeof x, D("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ge, Ae);
        }
        var Je = Ph(x, se, ge, Se, Qe);
        if (Je == null)
          return Je;
        if (Ne) {
          var wt = se.children;
          if (wt !== void 0)
            if (me)
              if (k(wt)) {
                for (var Vn = 0; Vn < wt.length; Vn++)
                  Uu(wt[Vn], x);
                Object.freeze && Object.freeze(wt);
              } else
                D("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Uu(wt, x);
        }
        return x === r ? Qh(Je) : Fh(Je), Je;
      }
    }
    function Bh(x, se, ge) {
      return Pu(x, se, ge, !0);
    }
    function $h(x, se, ge) {
      return Pu(x, se, ge, !1);
    }
    var Wh = $h, Vh = Bh;
    Cr.Fragment = r, Cr.jsx = Wh, Cr.jsxs = Vh;
  }()), Cr;
}
process.env.NODE_ENV === "production" ? Hs.exports = ep() : Hs.exports = tp();
var fe = Hs.exports, qs = { exports: {} }, Fn = {}, Ks = { exports: {} };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var fs, rc;
function np() {
  if (rc)
    return fs;
  rc = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var s = {}, a = 0; a < 10; a++)
        s["_" + String.fromCharCode(a)] = a;
      var c = Object.getOwnPropertyNames(s).map(function(l) {
        return s[l];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(l) {
        u[l] = l;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return fs = o() ? Object.assign : function(i, s) {
    for (var a, c = r(i), u, l = 1; l < arguments.length; l++) {
      a = Object(arguments[l]);
      for (var f in a)
        t.call(a, f) && (c[f] = a[f]);
      if (e) {
        u = e(a);
        for (var d = 0; d < u.length; d++)
          n.call(a, u[d]) && (c[u[d]] = a[u[d]]);
      }
    }
    return c;
  }, fs;
}
var ds, ic;
function Ka() {
  if (ic)
    return ds;
  ic = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ds = e, ds;
}
var hs, oc;
function Af() {
  return oc || (oc = 1, hs = Function.call.bind(Object.prototype.hasOwnProperty)), hs;
}
var gs, sc;
function rp() {
  if (sc)
    return gs;
  sc = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Ka(), n = {}, r = Af();
    e = function(i) {
      var s = "Warning: " + i;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function o(i, s, a, c, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var l in i)
        if (r(i, l)) {
          var f;
          try {
            if (typeof i[l] != "function") {
              var d = Error(
                (c || "React class") + ": " + a + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw d.name = "Invariant Violation", d;
            }
            f = i[l](s, l, c, a, null, t);
          } catch (M) {
            f = M;
          }
          if (f && !(f instanceof Error) && e(
            (c || "React class") + ": type specification of " + a + " `" + l + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in n)) {
            n[f.message] = !0;
            var p = u ? u() : "";
            e(
              "Failed " + a + " type: " + f.message + (p ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, gs = o, gs;
}
var ps, ac;
function ip() {
  if (ac)
    return ps;
  ac = 1;
  var e = $a, t = np(), n = Ka(), r = Af(), o = rp(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(a) {
    var c = "Warning: " + a;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return ps = function(a, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, l = "@@iterator";
    function f(O) {
      var z = O && (u && O[u] || O[l]);
      if (typeof z == "function")
        return z;
    }
    var d = "<<anonymous>>", p = {
      array: w("array"),
      bigint: w("bigint"),
      bool: w("boolean"),
      func: w("function"),
      number: w("number"),
      object: w("object"),
      string: w("string"),
      symbol: w("symbol"),
      any: D(),
      arrayOf: N,
      element: E(),
      elementType: T(),
      instanceOf: F,
      node: K(),
      objectOf: G,
      oneOf: _,
      oneOfType: Q,
      shape: re,
      exact: U
    };
    function M(O, z) {
      return O === z ? O !== 0 || 1 / O === 1 / z : O !== O && z !== z;
    }
    function y(O, z) {
      this.message = O, this.data = z && typeof z == "object" ? z : {}, this.stack = "";
    }
    y.prototype = Error.prototype;
    function m(O) {
      if (process.env.NODE_ENV !== "production")
        var z = {}, Y = 0;
      function W(ee, b, ne, $, ie, P, L) {
        if ($ = $ || d, P = P || ne, L !== n) {
          if (c) {
            var R = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw R.name = "Invariant Violation", R;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ce = $ + ":" + ne;
            !z[ce] && // Avoid spamming the console because they are often not actionable except for lib authors
            Y < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + P + "` prop on `" + $ + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), z[ce] = !0, Y++);
          }
        }
        return b[ne] == null ? ee ? b[ne] === null ? new y("The " + ie + " `" + P + "` is marked as required " + ("in `" + $ + "`, but its value is `null`.")) : new y("The " + ie + " `" + P + "` is marked as required in " + ("`" + $ + "`, but its value is `undefined`.")) : null : O(b, ne, $, ie, P);
      }
      var B = W.bind(null, !1);
      return B.isRequired = W.bind(null, !0), B;
    }
    function w(O) {
      function z(Y, W, B, ee, b, ne) {
        var $ = Y[W], ie = V($);
        if (ie !== O) {
          var P = S($);
          return new y(
            "Invalid " + ee + " `" + b + "` of type " + ("`" + P + "` supplied to `" + B + "`, expected ") + ("`" + O + "`."),
            { expectedType: O }
          );
        }
        return null;
      }
      return m(z);
    }
    function D() {
      return m(s);
    }
    function N(O) {
      function z(Y, W, B, ee, b) {
        if (typeof O != "function")
          return new y("Property `" + b + "` of component `" + B + "` has invalid PropType notation inside arrayOf.");
        var ne = Y[W];
        if (!Array.isArray(ne)) {
          var $ = V(ne);
          return new y("Invalid " + ee + " `" + b + "` of type " + ("`" + $ + "` supplied to `" + B + "`, expected an array."));
        }
        for (var ie = 0; ie < ne.length; ie++) {
          var P = O(ne, ie, B, ee, b + "[" + ie + "]", n);
          if (P instanceof Error)
            return P;
        }
        return null;
      }
      return m(z);
    }
    function E() {
      function O(z, Y, W, B, ee) {
        var b = z[Y];
        if (!a(b)) {
          var ne = V(b);
          return new y("Invalid " + B + " `" + ee + "` of type " + ("`" + ne + "` supplied to `" + W + "`, expected a single ReactElement."));
        }
        return null;
      }
      return m(O);
    }
    function T() {
      function O(z, Y, W, B, ee) {
        var b = z[Y];
        if (!e.isValidElementType(b)) {
          var ne = V(b);
          return new y("Invalid " + B + " `" + ee + "` of type " + ("`" + ne + "` supplied to `" + W + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return m(O);
    }
    function F(O) {
      function z(Y, W, B, ee, b) {
        if (!(Y[W] instanceof O)) {
          var ne = O.name || d, $ = ae(Y[W]);
          return new y("Invalid " + ee + " `" + b + "` of type " + ("`" + $ + "` supplied to `" + B + "`, expected ") + ("instance of `" + ne + "`."));
        }
        return null;
      }
      return m(z);
    }
    function _(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), s;
      function z(Y, W, B, ee, b) {
        for (var ne = Y[W], $ = 0; $ < O.length; $++)
          if (M(ne, O[$]))
            return null;
        var ie = JSON.stringify(O, function(L, R) {
          var ce = S(R);
          return ce === "symbol" ? String(R) : R;
        });
        return new y("Invalid " + ee + " `" + b + "` of value `" + String(ne) + "` " + ("supplied to `" + B + "`, expected one of " + ie + "."));
      }
      return m(z);
    }
    function G(O) {
      function z(Y, W, B, ee, b) {
        if (typeof O != "function")
          return new y("Property `" + b + "` of component `" + B + "` has invalid PropType notation inside objectOf.");
        var ne = Y[W], $ = V(ne);
        if ($ !== "object")
          return new y("Invalid " + ee + " `" + b + "` of type " + ("`" + $ + "` supplied to `" + B + "`, expected an object."));
        for (var ie in ne)
          if (r(ne, ie)) {
            var P = O(ne, ie, B, ee, b + "." + ie, n);
            if (P instanceof Error)
              return P;
          }
        return null;
      }
      return m(z);
    }
    function Q(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var z = 0; z < O.length; z++) {
        var Y = O[z];
        if (typeof Y != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + q(Y) + " at index " + z + "."
          ), s;
      }
      function W(B, ee, b, ne, $) {
        for (var ie = [], P = 0; P < O.length; P++) {
          var L = O[P], R = L(B, ee, b, ne, $, n);
          if (R == null)
            return null;
          R.data && r(R.data, "expectedType") && ie.push(R.data.expectedType);
        }
        var ce = ie.length > 0 ? ", expected one of type [" + ie.join(", ") + "]" : "";
        return new y("Invalid " + ne + " `" + $ + "` supplied to " + ("`" + b + "`" + ce + "."));
      }
      return m(W);
    }
    function K() {
      function O(z, Y, W, B, ee) {
        return j(z[Y]) ? null : new y("Invalid " + B + " `" + ee + "` supplied to " + ("`" + W + "`, expected a ReactNode."));
      }
      return m(O);
    }
    function Z(O, z, Y, W, B) {
      return new y(
        (O || "React class") + ": " + z + " type `" + Y + "." + W + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + B + "`."
      );
    }
    function re(O) {
      function z(Y, W, B, ee, b) {
        var ne = Y[W], $ = V(ne);
        if ($ !== "object")
          return new y("Invalid " + ee + " `" + b + "` of type `" + $ + "` " + ("supplied to `" + B + "`, expected `object`."));
        for (var ie in O) {
          var P = O[ie];
          if (typeof P != "function")
            return Z(B, ee, b, ie, S(P));
          var L = P(ne, ie, B, ee, b + "." + ie, n);
          if (L)
            return L;
        }
        return null;
      }
      return m(z);
    }
    function U(O) {
      function z(Y, W, B, ee, b) {
        var ne = Y[W], $ = V(ne);
        if ($ !== "object")
          return new y("Invalid " + ee + " `" + b + "` of type `" + $ + "` " + ("supplied to `" + B + "`, expected `object`."));
        var ie = t({}, Y[W], O);
        for (var P in ie) {
          var L = O[P];
          if (r(O, P) && typeof L != "function")
            return Z(B, ee, b, P, S(L));
          if (!L)
            return new y(
              "Invalid " + ee + " `" + b + "` key `" + P + "` supplied to `" + B + "`.\nBad object: " + JSON.stringify(Y[W], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(O), null, "  ")
            );
          var R = L(ne, P, B, ee, b + "." + P, n);
          if (R)
            return R;
        }
        return null;
      }
      return m(z);
    }
    function j(O) {
      switch (typeof O) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !O;
        case "object":
          if (Array.isArray(O))
            return O.every(j);
          if (O === null || a(O))
            return !0;
          var z = f(O);
          if (z) {
            var Y = z.call(O), W;
            if (z !== O.entries) {
              for (; !(W = Y.next()).done; )
                if (!j(W.value))
                  return !1;
            } else
              for (; !(W = Y.next()).done; ) {
                var B = W.value;
                if (B && !j(B[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function C(O, z) {
      return O === "symbol" ? !0 : z ? z["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && z instanceof Symbol : !1;
    }
    function V(O) {
      var z = typeof O;
      return Array.isArray(O) ? "array" : O instanceof RegExp ? "object" : C(z, O) ? "symbol" : z;
    }
    function S(O) {
      if (typeof O > "u" || O === null)
        return "" + O;
      var z = V(O);
      if (z === "object") {
        if (O instanceof Date)
          return "date";
        if (O instanceof RegExp)
          return "regexp";
      }
      return z;
    }
    function q(O) {
      var z = S(O);
      switch (z) {
        case "array":
        case "object":
          return "an " + z;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + z;
        default:
          return z;
      }
    }
    function ae(O) {
      return !O.constructor || !O.constructor.name ? d : O.constructor.name;
    }
    return p.checkPropTypes = o, p.resetWarningCache = o.resetWarningCache, p.PropTypes = p, p;
  }, ps;
}
var Ms, uc;
function op() {
  if (uc)
    return Ms;
  uc = 1;
  var e = Ka();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Ms = function() {
    function r(s, a, c, u, l, f) {
      if (f !== e) {
        var d = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw d.name = "Invariant Violation", d;
      }
    }
    r.isRequired = r;
    function o() {
      return r;
    }
    var i = {
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
    return i.PropTypes = i, i;
  }, Ms;
}
if (process.env.NODE_ENV !== "production") {
  var sp = $a, ap = !0;
  Ks.exports = ip()(sp.isElement, ap);
} else
  Ks.exports = op()();
var Ga = Ks.exports;
const v = /* @__PURE__ */ vi(Ga);
var Gs = { exports: {} }, kt = {}, Js = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = l;
  /*!
   * Adapted from jQuery UI core
   *
   * http://jqueryui.com
   *
   * Copyright 2014 jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   *
   * http://api.jqueryui.com/category/ui-core/
   */
  var n = "none", r = "contents", o = /input|select|textarea|button|object|iframe/;
  function i(f, d) {
    return d.getPropertyValue("overflow") !== "visible" || // if 'overflow: visible' set, check if there is actually any overflow
    f.scrollWidth <= 0 && f.scrollHeight <= 0;
  }
  function s(f) {
    var d = f.offsetWidth <= 0 && f.offsetHeight <= 0;
    if (d && !f.innerHTML)
      return !0;
    try {
      var p = window.getComputedStyle(f), M = p.getPropertyValue("display");
      return d ? M !== r && i(f, p) : M === n;
    } catch {
      return console.warn("Failed to inspect element style"), !1;
    }
  }
  function a(f) {
    for (var d = f, p = f.getRootNode && f.getRootNode(); d && d !== document.body; ) {
      if (p && d === p && (d = p.host.parentNode), s(d))
        return !1;
      d = d.parentNode;
    }
    return !0;
  }
  function c(f, d) {
    var p = f.nodeName.toLowerCase(), M = o.test(p) && !f.disabled || p === "a" && f.href || d;
    return M && a(f);
  }
  function u(f) {
    var d = f.getAttribute("tabindex");
    d === null && (d = void 0);
    var p = isNaN(d);
    return (p || d >= 0) && c(f, !p);
  }
  function l(f) {
    var d = [].slice.call(f.querySelectorAll("*"), 0).reduce(function(p, M) {
      return p.concat(M.shadowRoot ? l(M.shadowRoot) : [M]);
    }, []);
    return d.filter(u);
  }
  e.exports = t.default;
})(Js, Js.exports);
var Ef = Js.exports;
Object.defineProperty(kt, "__esModule", {
  value: !0
});
kt.resetState = fp;
kt.log = dp;
kt.handleBlur = ri;
kt.handleFocus = ii;
kt.markForFocusLater = hp;
kt.returnFocus = gp;
kt.popWithoutFocus = pp;
kt.setupScopedFocus = Mp;
kt.teardownScopedFocus = yp;
var up = Ef, cp = lp(up);
function lp(e) {
  return e && e.__esModule ? e : { default: e };
}
var Qn = [], ar = null, Xs = !1;
function fp() {
  Qn = [];
}
function dp() {
  process.env.NODE_ENV !== "production" && (console.log("focusManager ----------"), Qn.forEach(function(e) {
    var t = e || {};
    console.log(t.nodeName, t.className, t.id);
  }), console.log("end focusManager ----------"));
}
function ri() {
  Xs = !0;
}
function ii() {
  if (Xs) {
    if (Xs = !1, !ar)
      return;
    setTimeout(function() {
      if (!ar.contains(document.activeElement)) {
        var e = (0, cp.default)(ar)[0] || ar;
        e.focus();
      }
    }, 0);
  }
}
function hp() {
  Qn.push(document.activeElement);
}
function gp() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, t = null;
  try {
    Qn.length !== 0 && (t = Qn.pop(), t.focus({ preventScroll: e }));
    return;
  } catch {
    console.warn(["You tried to return focus to", t, "but it is not in the DOM anymore"].join(" "));
  }
}
function pp() {
  Qn.length > 0 && Qn.pop();
}
function Mp(e) {
  ar = e, window.addEventListener ? (window.addEventListener("blur", ri, !1), document.addEventListener("focus", ii, !0)) : (window.attachEvent("onBlur", ri), document.attachEvent("onFocus", ii));
}
function yp() {
  ar = null, window.addEventListener ? (window.removeEventListener("blur", ri), document.removeEventListener("focus", ii)) : (window.detachEvent("onBlur", ri), document.detachEvent("onFocus", ii));
}
var Zs = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = s;
  var n = Ef, r = o(n);
  function o(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i() {
    var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    return a.activeElement.shadowRoot ? i(a.activeElement.shadowRoot) : a.activeElement;
  }
  function s(a, c) {
    var u = (0, r.default)(a);
    if (!u.length) {
      c.preventDefault();
      return;
    }
    var l = void 0, f = c.shiftKey, d = u[0], p = u[u.length - 1], M = i();
    if (a === M) {
      if (!f)
        return;
      l = p;
    }
    if (p === M && !f && (l = d), d === M && f && (l = p), l) {
      c.preventDefault(), l.focus();
      return;
    }
    var y = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent), m = y != null && y[1] != "Chrome" && /\biPod\b|\biPad\b/g.exec(navigator.userAgent) == null;
    if (m) {
      var w = u.indexOf(M);
      if (w > -1 && (w += f ? -1 : 1), l = u[w], typeof l > "u") {
        c.preventDefault(), l = f ? p : d, l.focus();
        return;
      }
      c.preventDefault(), l.focus();
    }
  }
  e.exports = t.default;
})(Zs, Zs.exports);
var mp = Zs.exports, zt = {}, vp = process.env.NODE_ENV !== "production", Tf = function() {
};
if (vp) {
  var wp = function(t, n) {
    var r = arguments.length;
    n = new Array(r > 1 ? r - 1 : 0);
    for (var o = 1; o < r; o++)
      n[o - 1] = arguments[o];
    var i = 0, s = "Warning: " + t.replace(/%s/g, function() {
      return n[i++];
    });
    typeof console < "u" && console.error(s);
    try {
      throw new Error(s);
    } catch {
    }
  };
  Tf = function(e, t, n) {
    var r = arguments.length;
    n = new Array(r > 2 ? r - 2 : 0);
    for (var o = 2; o < r; o++)
      n[o - 2] = arguments[o];
    if (t === void 0)
      throw new Error(
        "`warning(condition, format, ...args)` requires a warning message argument"
      );
    e || wp.apply(null, [t].concat(n));
  };
}
var Dp = Tf, Lt = {}, Nf = { exports: {} };
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
(function(e) {
  (function() {
    var t = !!(typeof window < "u" && window.document && window.document.createElement), n = {
      canUseDOM: t,
      canUseWorkers: typeof Worker < "u",
      canUseEventListeners: t && !!(window.addEventListener || window.attachEvent),
      canUseViewport: t && !!window.screen
    };
    e.exports ? e.exports = n : window.ExecutionEnvironment = n;
  })();
})(Nf);
var Ip = Nf.exports;
Object.defineProperty(Lt, "__esModule", {
  value: !0
});
Lt.canUseDOM = Lt.SafeNodeList = Lt.SafeHTMLCollection = void 0;
var Ap = Ip, Ep = Tp(Ap);
function Tp(e) {
  return e && e.__esModule ? e : { default: e };
}
var jo = Ep.default, Np = jo.canUseDOM ? window.HTMLElement : {};
Lt.SafeHTMLCollection = jo.canUseDOM ? window.HTMLCollection : {};
Lt.SafeNodeList = jo.canUseDOM ? window.NodeList : {};
Lt.canUseDOM = jo.canUseDOM;
Lt.default = Np;
Object.defineProperty(zt, "__esModule", {
  value: !0
});
zt.resetState = Cp;
zt.log = Op;
zt.assertNodeList = jf;
zt.setElement = Lp;
zt.validateElement = Ja;
zt.hide = _p;
zt.show = kp;
zt.documentNotReadyOrSSRTesting = zp;
var jp = Dp, bp = xp(jp), Sp = Lt;
function xp(e) {
  return e && e.__esModule ? e : { default: e };
}
var pt = null;
function Cp() {
  pt && (pt.removeAttribute ? pt.removeAttribute("aria-hidden") : pt.length != null ? pt.forEach(function(e) {
    return e.removeAttribute("aria-hidden");
  }) : document.querySelectorAll(pt).forEach(function(e) {
    return e.removeAttribute("aria-hidden");
  })), pt = null;
}
function Op() {
  if (process.env.NODE_ENV !== "production") {
    var e = pt || {};
    console.log("ariaAppHider ----------"), console.log(e.nodeName, e.className, e.id), console.log("end ariaAppHider ----------");
  }
}
function jf(e, t) {
  if (!e || !e.length)
    throw new Error("react-modal: No elements were found for selector " + t + ".");
}
function Lp(e) {
  var t = e;
  if (typeof t == "string" && Sp.canUseDOM) {
    var n = document.querySelectorAll(t);
    jf(n, t), t = n;
  }
  return pt = t || pt, pt;
}
function Ja(e) {
  var t = e || pt;
  return t ? Array.isArray(t) || t instanceof HTMLCollection || t instanceof NodeList ? t : [t] : ((0, bp.default)(!1, ["react-modal: App element is not defined.", "Please use `Modal.setAppElement(el)` or set `appElement={el}`.", "This is needed so screen readers don't see main content", "when modal is opened. It is not recommended, but you can opt-out", "by setting `ariaHideApp={false}`."].join(" ")), []);
}
function _p(e) {
  var t = !0, n = !1, r = void 0;
  try {
    for (var o = Ja(e)[Symbol.iterator](), i; !(t = (i = o.next()).done); t = !0) {
      var s = i.value;
      s.setAttribute("aria-hidden", "true");
    }
  } catch (a) {
    n = !0, r = a;
  } finally {
    try {
      !t && o.return && o.return();
    } finally {
      if (n)
        throw r;
    }
  }
}
function kp(e) {
  var t = !0, n = !1, r = void 0;
  try {
    for (var o = Ja(e)[Symbol.iterator](), i; !(t = (i = o.next()).done); t = !0) {
      var s = i.value;
      s.removeAttribute("aria-hidden");
    }
  } catch (a) {
    n = !0, r = a;
  } finally {
    try {
      !t && o.return && o.return();
    } finally {
      if (n)
        throw r;
    }
  }
}
function zp() {
  pt = null;
}
var Dr = {};
Object.defineProperty(Dr, "__esModule", {
  value: !0
});
Dr.resetState = Up;
Dr.log = Pp;
var zn = {}, Un = {};
function cc(e, t) {
  e.classList.remove(t);
}
function Up() {
  var e = document.getElementsByTagName("html")[0];
  for (var t in zn)
    cc(e, zn[t]);
  var n = document.body;
  for (var r in Un)
    cc(n, Un[r]);
  zn = {}, Un = {};
}
function Pp() {
  if (process.env.NODE_ENV !== "production") {
    var e = document.getElementsByTagName("html")[0].className, t = `Show tracked classes:

`;
    t += "<html /> (" + e + `):
  `;
    for (var n in zn)
      t += "  " + n + " " + zn[n] + `
  `;
    e = document.body.className, t += `

doc.body (` + e + `):
  `;
    for (var r in Un)
      t += "  " + r + " " + Un[r] + `
  `;
    t += `
`, console.log(t);
  }
}
var Rp = function(t, n) {
  return t[n] || (t[n] = 0), t[n] += 1, n;
}, Yp = function(t, n) {
  return t[n] && (t[n] -= 1), n;
}, Fp = function(t, n, r) {
  r.forEach(function(o) {
    Rp(n, o), t.add(o);
  });
}, Qp = function(t, n, r) {
  r.forEach(function(o) {
    Yp(n, o), n[o] === 0 && t.remove(o);
  });
};
Dr.add = function(t, n) {
  return Fp(t.classList, t.nodeName.toLowerCase() == "html" ? zn : Un, n.split(" "));
};
Dr.remove = function(t, n) {
  return Qp(t.classList, t.nodeName.toLowerCase() == "html" ? zn : Un, n.split(" "));
};
var Ir = {};
Object.defineProperty(Ir, "__esModule", {
  value: !0
});
Ir.log = $p;
Ir.resetState = Wp;
function Bp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
var bf = function e() {
  var t = this;
  Bp(this, e), this.register = function(n) {
    if (t.openInstances.indexOf(n) !== -1) {
      process.env.NODE_ENV !== "production" && console.warn("React-Modal: Cannot register modal instance that's already open");
      return;
    }
    t.openInstances.push(n), t.emit("register");
  }, this.deregister = function(n) {
    var r = t.openInstances.indexOf(n);
    if (r === -1) {
      process.env.NODE_ENV !== "production" && console.warn("React-Modal: Unable to deregister " + n + " as it was never registered");
      return;
    }
    t.openInstances.splice(r, 1), t.emit("deregister");
  }, this.subscribe = function(n) {
    t.subscribers.push(n);
  }, this.emit = function(n) {
    t.subscribers.forEach(function(r) {
      return r(
        n,
        // shallow copy to avoid accidental mutation
        t.openInstances.slice()
      );
    });
  }, this.openInstances = [], this.subscribers = [];
}, eo = new bf();
function $p() {
  console.log("portalOpenInstances ----------"), console.log(eo.openInstances.length), eo.openInstances.forEach(function(e) {
    return console.log(e);
  }), console.log("end portalOpenInstances ----------");
}
function Wp() {
  eo = new bf();
}
Ir.default = eo;
var Xa = {};
Object.defineProperty(Xa, "__esModule", {
  value: !0
});
Xa.resetState = Kp;
Xa.log = Gp;
var Vp = Ir, Hp = qp(Vp);
function qp(e) {
  return e && e.__esModule ? e : { default: e };
}
var ut = void 0, xt = void 0, Pn = [];
function Kp() {
  for (var e = [ut, xt], t = 0; t < e.length; t++) {
    var n = e[t];
    n && n.parentNode && n.parentNode.removeChild(n);
  }
  ut = xt = null, Pn = [];
}
function Gp() {
  console.log("bodyTrap ----------"), console.log(Pn.length);
  for (var e = [ut, xt], t = 0; t < e.length; t++) {
    var n = e[t], r = n || {};
    console.log(r.nodeName, r.className, r.id);
  }
  console.log("edn bodyTrap ----------");
}
function lc() {
  if (Pn.length === 0) {
    process.env.NODE_ENV !== "production" && console.warn("React-Modal: Open instances > 0 expected");
    return;
  }
  Pn[Pn.length - 1].focusContent();
}
function Jp(e, t) {
  !ut && !xt && (ut = document.createElement("div"), ut.setAttribute("data-react-modal-body-trap", ""), ut.style.position = "absolute", ut.style.opacity = "0", ut.setAttribute("tabindex", "0"), ut.addEventListener("focus", lc), xt = ut.cloneNode(), xt.addEventListener("focus", lc)), Pn = t, Pn.length > 0 ? (document.body.firstChild !== ut && document.body.insertBefore(ut, document.body.firstChild), document.body.lastChild !== xt && document.body.appendChild(xt)) : (ut.parentElement && ut.parentElement.removeChild(ut), xt.parentElement && xt.parentElement.removeChild(xt));
}
Hp.default.subscribe(Jp);
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n = Object.assign || function(j) {
    for (var C = 1; C < arguments.length; C++) {
      var V = arguments[C];
      for (var S in V)
        Object.prototype.hasOwnProperty.call(V, S) && (j[S] = V[S]);
    }
    return j;
  }, r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(j) {
    return typeof j;
  } : function(j) {
    return j && typeof Symbol == "function" && j.constructor === Symbol && j !== Symbol.prototype ? "symbol" : typeof j;
  }, o = function() {
    function j(C, V) {
      for (var S = 0; S < V.length; S++) {
        var q = V[S];
        q.enumerable = q.enumerable || !1, q.configurable = !0, "value" in q && (q.writable = !0), Object.defineProperty(C, q.key, q);
      }
    }
    return function(C, V, S) {
      return V && j(C.prototype, V), S && j(C, S), C;
    };
  }(), i = we, s = Ga, a = T(s), c = kt, u = E(c), l = mp, f = T(l), d = zt, p = E(d), M = Dr, y = E(M), m = Lt, w = T(m), D = Ir, N = T(D);
  function E(j) {
    if (j && j.__esModule)
      return j;
    var C = {};
    if (j != null)
      for (var V in j)
        Object.prototype.hasOwnProperty.call(j, V) && (C[V] = j[V]);
    return C.default = j, C;
  }
  function T(j) {
    return j && j.__esModule ? j : { default: j };
  }
  function F(j, C) {
    if (!(j instanceof C))
      throw new TypeError("Cannot call a class as a function");
  }
  function _(j, C) {
    if (!j)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return C && (typeof C == "object" || typeof C == "function") ? C : j;
  }
  function G(j, C) {
    if (typeof C != "function" && C !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof C);
    j.prototype = Object.create(C && C.prototype, { constructor: { value: j, enumerable: !1, writable: !0, configurable: !0 } }), C && (Object.setPrototypeOf ? Object.setPrototypeOf(j, C) : j.__proto__ = C);
  }
  var Q = {
    overlay: "ReactModal__Overlay",
    content: "ReactModal__Content"
  }, K = function(C) {
    return C.code === "Tab" || C.keyCode === 9;
  }, Z = function(C) {
    return C.code === "Escape" || C.keyCode === 27;
  }, re = 0, U = function(j) {
    G(C, j);
    function C(V) {
      F(this, C);
      var S = _(this, (C.__proto__ || Object.getPrototypeOf(C)).call(this, V));
      return S.setOverlayRef = function(q) {
        S.overlay = q, S.props.overlayRef && S.props.overlayRef(q);
      }, S.setContentRef = function(q) {
        S.content = q, S.props.contentRef && S.props.contentRef(q);
      }, S.afterClose = function() {
        var q = S.props, ae = q.appElement, O = q.ariaHideApp, z = q.htmlOpenClassName, Y = q.bodyOpenClassName, W = q.parentSelector, B = W && W().ownerDocument || document;
        Y && y.remove(B.body, Y), z && y.remove(B.getElementsByTagName("html")[0], z), O && re > 0 && (re -= 1, re === 0 && p.show(ae)), S.props.shouldFocusAfterRender && (S.props.shouldReturnFocusAfterClose ? (u.returnFocus(S.props.preventScroll), u.teardownScopedFocus()) : u.popWithoutFocus()), S.props.onAfterClose && S.props.onAfterClose(), N.default.deregister(S);
      }, S.open = function() {
        S.beforeOpen(), S.state.afterOpen && S.state.beforeClose ? (clearTimeout(S.closeTimer), S.setState({ beforeClose: !1 })) : (S.props.shouldFocusAfterRender && (u.setupScopedFocus(S.node), u.markForFocusLater()), S.setState({ isOpen: !0 }, function() {
          S.openAnimationFrame = requestAnimationFrame(function() {
            S.setState({ afterOpen: !0 }), S.props.isOpen && S.props.onAfterOpen && S.props.onAfterOpen({
              overlayEl: S.overlay,
              contentEl: S.content
            });
          });
        }));
      }, S.close = function() {
        S.props.closeTimeoutMS > 0 ? S.closeWithTimeout() : S.closeWithoutTimeout();
      }, S.focusContent = function() {
        return S.content && !S.contentHasFocus() && S.content.focus({ preventScroll: !0 });
      }, S.closeWithTimeout = function() {
        var q = Date.now() + S.props.closeTimeoutMS;
        S.setState({ beforeClose: !0, closesAt: q }, function() {
          S.closeTimer = setTimeout(S.closeWithoutTimeout, S.state.closesAt - Date.now());
        });
      }, S.closeWithoutTimeout = function() {
        S.setState({
          beforeClose: !1,
          isOpen: !1,
          afterOpen: !1,
          closesAt: null
        }, S.afterClose);
      }, S.handleKeyDown = function(q) {
        K(q) && (0, f.default)(S.content, q), S.props.shouldCloseOnEsc && Z(q) && (q.stopPropagation(), S.requestClose(q));
      }, S.handleOverlayOnClick = function(q) {
        S.shouldClose === null && (S.shouldClose = !0), S.shouldClose && S.props.shouldCloseOnOverlayClick && (S.ownerHandlesClose() ? S.requestClose(q) : S.focusContent()), S.shouldClose = null;
      }, S.handleContentOnMouseUp = function() {
        S.shouldClose = !1;
      }, S.handleOverlayOnMouseDown = function(q) {
        !S.props.shouldCloseOnOverlayClick && q.target == S.overlay && q.preventDefault();
      }, S.handleContentOnClick = function() {
        S.shouldClose = !1;
      }, S.handleContentOnMouseDown = function() {
        S.shouldClose = !1;
      }, S.requestClose = function(q) {
        return S.ownerHandlesClose() && S.props.onRequestClose(q);
      }, S.ownerHandlesClose = function() {
        return S.props.onRequestClose;
      }, S.shouldBeClosed = function() {
        return !S.state.isOpen && !S.state.beforeClose;
      }, S.contentHasFocus = function() {
        return document.activeElement === S.content || S.content.contains(document.activeElement);
      }, S.buildClassName = function(q, ae) {
        var O = (typeof ae > "u" ? "undefined" : r(ae)) === "object" ? ae : {
          base: Q[q],
          afterOpen: Q[q] + "--after-open",
          beforeClose: Q[q] + "--before-close"
        }, z = O.base;
        return S.state.afterOpen && (z = z + " " + O.afterOpen), S.state.beforeClose && (z = z + " " + O.beforeClose), typeof ae == "string" && ae ? z + " " + ae : z;
      }, S.attributesFromObject = function(q, ae) {
        return Object.keys(ae).reduce(function(O, z) {
          return O[q + "-" + z] = ae[z], O;
        }, {});
      }, S.state = {
        afterOpen: !1,
        beforeClose: !1
      }, S.shouldClose = null, S.moveFromContentToOverlay = null, S;
    }
    return o(C, [{
      key: "componentDidMount",
      value: function() {
        this.props.isOpen && this.open();
      }
    }, {
      key: "componentDidUpdate",
      value: function(S, q) {
        process.env.NODE_ENV !== "production" && (S.bodyOpenClassName !== this.props.bodyOpenClassName && console.warn('React-Modal: "bodyOpenClassName" prop has been modified. This may cause unexpected behavior when multiple modals are open.'), S.htmlOpenClassName !== this.props.htmlOpenClassName && console.warn('React-Modal: "htmlOpenClassName" prop has been modified. This may cause unexpected behavior when multiple modals are open.')), this.props.isOpen && !S.isOpen ? this.open() : !this.props.isOpen && S.isOpen && this.close(), this.props.shouldFocusAfterRender && this.state.isOpen && !q.isOpen && this.focusContent();
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.state.isOpen && this.afterClose(), clearTimeout(this.closeTimer), cancelAnimationFrame(this.openAnimationFrame);
      }
    }, {
      key: "beforeOpen",
      value: function() {
        var S = this.props, q = S.appElement, ae = S.ariaHideApp, O = S.htmlOpenClassName, z = S.bodyOpenClassName, Y = S.parentSelector, W = Y && Y().ownerDocument || document;
        z && y.add(W.body, z), O && y.add(W.getElementsByTagName("html")[0], O), ae && (re += 1, p.hide(q)), N.default.register(this);
      }
      // Don't steal focus from inner elements
    }, {
      key: "render",
      value: function() {
        var S = this.props, q = S.id, ae = S.className, O = S.overlayClassName, z = S.defaultStyles, Y = S.children, W = ae ? {} : z.content, B = O ? {} : z.overlay;
        if (this.shouldBeClosed())
          return null;
        var ee = {
          ref: this.setOverlayRef,
          className: this.buildClassName("overlay", O),
          style: n({}, B, this.props.style.overlay),
          onClick: this.handleOverlayOnClick,
          onMouseDown: this.handleOverlayOnMouseDown
        }, b = n({
          id: q,
          ref: this.setContentRef,
          style: n({}, W, this.props.style.content),
          className: this.buildClassName("content", ae),
          tabIndex: "-1",
          onKeyDown: this.handleKeyDown,
          onMouseDown: this.handleContentOnMouseDown,
          onMouseUp: this.handleContentOnMouseUp,
          onClick: this.handleContentOnClick,
          role: this.props.role,
          "aria-label": this.props.contentLabel
        }, this.attributesFromObject("aria", n({ modal: !0 }, this.props.aria)), this.attributesFromObject("data", this.props.data || {}), {
          "data-testid": this.props.testId
        }), ne = this.props.contentElement(b, Y);
        return this.props.overlayElement(ee, ne);
      }
    }]), C;
  }(i.Component);
  U.defaultProps = {
    style: {
      overlay: {},
      content: {}
    },
    defaultStyles: {}
  }, U.propTypes = {
    isOpen: a.default.bool.isRequired,
    defaultStyles: a.default.shape({
      content: a.default.object,
      overlay: a.default.object
    }),
    style: a.default.shape({
      content: a.default.object,
      overlay: a.default.object
    }),
    className: a.default.oneOfType([a.default.string, a.default.object]),
    overlayClassName: a.default.oneOfType([a.default.string, a.default.object]),
    parentSelector: a.default.func,
    bodyOpenClassName: a.default.string,
    htmlOpenClassName: a.default.string,
    ariaHideApp: a.default.bool,
    appElement: a.default.oneOfType([a.default.instanceOf(w.default), a.default.instanceOf(m.SafeHTMLCollection), a.default.instanceOf(m.SafeNodeList), a.default.arrayOf(a.default.instanceOf(w.default))]),
    onAfterOpen: a.default.func,
    onAfterClose: a.default.func,
    onRequestClose: a.default.func,
    closeTimeoutMS: a.default.number,
    shouldFocusAfterRender: a.default.bool,
    shouldCloseOnOverlayClick: a.default.bool,
    shouldReturnFocusAfterClose: a.default.bool,
    preventScroll: a.default.bool,
    role: a.default.string,
    contentLabel: a.default.string,
    aria: a.default.object,
    data: a.default.object,
    children: a.default.node,
    shouldCloseOnEsc: a.default.bool,
    overlayRef: a.default.func,
    contentRef: a.default.func,
    id: a.default.string,
    overlayElement: a.default.func,
    contentElement: a.default.func,
    testId: a.default.string
  }, t.default = U, e.exports = t.default;
})(Gs, Gs.exports);
var Xp = Gs.exports;
function Sf() {
  var e = this.constructor.getDerivedStateFromProps(this.props, this.state);
  e != null && this.setState(e);
}
function xf(e) {
  function t(n) {
    var r = this.constructor.getDerivedStateFromProps(e, n);
    return r ?? null;
  }
  this.setState(t.bind(this));
}
function Cf(e, t) {
  try {
    var n = this.props, r = this.state;
    this.props = e, this.state = t, this.__reactInternalSnapshotFlag = !0, this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      n,
      r
    );
  } finally {
    this.props = n, this.state = r;
  }
}
Sf.__suppressDeprecationWarning = !0;
xf.__suppressDeprecationWarning = !0;
Cf.__suppressDeprecationWarning = !0;
function Zp(e) {
  var t = e.prototype;
  if (!t || !t.isReactComponent)
    throw new Error("Can only polyfill class components");
  if (typeof e.getDerivedStateFromProps != "function" && typeof t.getSnapshotBeforeUpdate != "function")
    return e;
  var n = null, r = null, o = null;
  if (typeof t.componentWillMount == "function" ? n = "componentWillMount" : typeof t.UNSAFE_componentWillMount == "function" && (n = "UNSAFE_componentWillMount"), typeof t.componentWillReceiveProps == "function" ? r = "componentWillReceiveProps" : typeof t.UNSAFE_componentWillReceiveProps == "function" && (r = "UNSAFE_componentWillReceiveProps"), typeof t.componentWillUpdate == "function" ? o = "componentWillUpdate" : typeof t.UNSAFE_componentWillUpdate == "function" && (o = "UNSAFE_componentWillUpdate"), n !== null || r !== null || o !== null) {
    var i = e.displayName || e.name, s = typeof e.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
    throw Error(
      `Unsafe legacy lifecycles will not be called for components using new component APIs.

` + i + " uses " + s + " but also contains the following legacy lifecycles:" + (n !== null ? `
  ` + n : "") + (r !== null ? `
  ` + r : "") + (o !== null ? `
  ` + o : "") + `

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`
    );
  }
  if (typeof e.getDerivedStateFromProps == "function" && (t.componentWillMount = Sf, t.componentWillReceiveProps = xf), typeof t.getSnapshotBeforeUpdate == "function") {
    if (typeof t.componentDidUpdate != "function")
      throw new Error(
        "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype"
      );
    t.componentWillUpdate = Cf;
    var a = t.componentDidUpdate;
    t.componentDidUpdate = function(u, l, f) {
      var d = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : f;
      a.call(this, u, l, d);
    };
  }
  return e;
}
const eM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  polyfill: Zp
}, Symbol.toStringTag, { value: "Module" })), tM = /* @__PURE__ */ To(eM);
Object.defineProperty(Fn, "__esModule", {
  value: !0
});
Fn.bodyOpenClassName = Fn.portalClassName = void 0;
var fc = Object.assign || function(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n)
      Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
  }
  return e;
}, nM = function() {
  function e(t, n) {
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
    }
  }
  return function(t, n, r) {
    return n && e(t.prototype, n), r && e(t, r), t;
  };
}(), Of = we, to = wi(Of), rM = Br, no = wi(rM), iM = Ga, ve = wi(iM), oM = Xp, dc = wi(oM), sM = zt, aM = cM(sM), pn = Lt, hc = wi(pn), uM = tM;
function cM(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
  return t.default = e, t;
}
function wi(e) {
  return e && e.__esModule ? e : { default: e };
}
function lM(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function gc(e, t) {
  if (!e)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function fM(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}
var dM = Fn.portalClassName = "ReactModalPortal", hM = Fn.bodyOpenClassName = "ReactModal__Body--open", Tn = pn.canUseDOM && no.default.createPortal !== void 0, ea = function(t) {
  return document.createElement(t);
}, pc = function() {
  return Tn ? no.default.createPortal : no.default.unstable_renderSubtreeIntoContainer;
};
function Oi(e) {
  return e();
}
var Ar = function(e) {
  fM(t, e);
  function t() {
    var n, r, o, i;
    lM(this, t);
    for (var s = arguments.length, a = Array(s), c = 0; c < s; c++)
      a[c] = arguments[c];
    return i = (r = (o = gc(this, (n = t.__proto__ || Object.getPrototypeOf(t)).call.apply(n, [this].concat(a))), o), o.removePortal = function() {
      !Tn && no.default.unmountComponentAtNode(o.node);
      var u = Oi(o.props.parentSelector);
      u && u.contains(o.node) ? u.removeChild(o.node) : console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.');
    }, o.portalRef = function(u) {
      o.portal = u;
    }, o.renderPortal = function(u) {
      var l = pc(), f = l(o, to.default.createElement(dc.default, fc({ defaultStyles: t.defaultStyles }, u)), o.node);
      o.portalRef(f);
    }, r), gc(o, i);
  }
  return nM(t, [{
    key: "componentDidMount",
    value: function() {
      if (pn.canUseDOM) {
        Tn || (this.node = ea("div")), this.node.className = this.props.portalClassName;
        var r = Oi(this.props.parentSelector);
        r.appendChild(this.node), !Tn && this.renderPortal(this.props);
      }
    }
  }, {
    key: "getSnapshotBeforeUpdate",
    value: function(r) {
      var o = Oi(r.parentSelector), i = Oi(this.props.parentSelector);
      return { prevParent: o, nextParent: i };
    }
  }, {
    key: "componentDidUpdate",
    value: function(r, o, i) {
      if (pn.canUseDOM) {
        var s = this.props, a = s.isOpen, c = s.portalClassName;
        r.portalClassName !== c && (this.node.className = c);
        var u = i.prevParent, l = i.nextParent;
        l !== u && (u.removeChild(this.node), l.appendChild(this.node)), !(!r.isOpen && !a) && !Tn && this.renderPortal(this.props);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      if (!(!pn.canUseDOM || !this.node || !this.portal)) {
        var r = this.portal.state, o = Date.now(), i = r.isOpen && this.props.closeTimeoutMS && (r.closesAt || o + this.props.closeTimeoutMS);
        i ? (r.beforeClose || this.portal.closeWithTimeout(), setTimeout(this.removePortal, i - o)) : this.removePortal();
      }
    }
  }, {
    key: "render",
    value: function() {
      if (!pn.canUseDOM || !Tn)
        return null;
      !this.node && Tn && (this.node = ea("div"));
      var r = pc();
      return r(to.default.createElement(dc.default, fc({
        ref: this.portalRef,
        defaultStyles: t.defaultStyles
      }, this.props)), this.node);
    }
  }], [{
    key: "setAppElement",
    value: function(r) {
      aM.setElement(r);
    }
    /* eslint-disable react/no-unused-prop-types */
    /* eslint-enable react/no-unused-prop-types */
  }]), t;
}(Of.Component);
Ar.propTypes = {
  isOpen: ve.default.bool.isRequired,
  style: ve.default.shape({
    content: ve.default.object,
    overlay: ve.default.object
  }),
  portalClassName: ve.default.string,
  bodyOpenClassName: ve.default.string,
  htmlOpenClassName: ve.default.string,
  className: ve.default.oneOfType([ve.default.string, ve.default.shape({
    base: ve.default.string.isRequired,
    afterOpen: ve.default.string.isRequired,
    beforeClose: ve.default.string.isRequired
  })]),
  overlayClassName: ve.default.oneOfType([ve.default.string, ve.default.shape({
    base: ve.default.string.isRequired,
    afterOpen: ve.default.string.isRequired,
    beforeClose: ve.default.string.isRequired
  })]),
  appElement: ve.default.oneOfType([ve.default.instanceOf(hc.default), ve.default.instanceOf(pn.SafeHTMLCollection), ve.default.instanceOf(pn.SafeNodeList), ve.default.arrayOf(ve.default.instanceOf(hc.default))]),
  onAfterOpen: ve.default.func,
  onRequestClose: ve.default.func,
  closeTimeoutMS: ve.default.number,
  ariaHideApp: ve.default.bool,
  shouldFocusAfterRender: ve.default.bool,
  shouldCloseOnOverlayClick: ve.default.bool,
  shouldReturnFocusAfterClose: ve.default.bool,
  preventScroll: ve.default.bool,
  parentSelector: ve.default.func,
  aria: ve.default.object,
  data: ve.default.object,
  role: ve.default.string,
  contentLabel: ve.default.string,
  shouldCloseOnEsc: ve.default.bool,
  overlayRef: ve.default.func,
  contentRef: ve.default.func,
  id: ve.default.string,
  overlayElement: ve.default.func,
  contentElement: ve.default.func
};
Ar.defaultProps = {
  isOpen: !1,
  portalClassName: dM,
  bodyOpenClassName: hM,
  role: "dialog",
  ariaHideApp: !0,
  closeTimeoutMS: 0,
  shouldFocusAfterRender: !0,
  shouldCloseOnEsc: !0,
  shouldCloseOnOverlayClick: !0,
  shouldReturnFocusAfterClose: !0,
  preventScroll: !1,
  parentSelector: function() {
    return document.body;
  },
  overlayElement: function(t, n) {
    return to.default.createElement(
      "div",
      t,
      n
    );
  },
  contentElement: function(t, n) {
    return to.default.createElement(
      "div",
      t,
      n
    );
  }
};
Ar.defaultStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)"
  },
  content: {
    position: "absolute",
    top: "40px",
    left: "40px",
    right: "40px",
    bottom: "40px",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px"
  }
};
(0, uM.polyfill)(Ar);
process.env.NODE_ENV !== "production" && (Ar.setCreateHTMLElement = function(e) {
  return ea = e;
});
Fn.default = Ar;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n = Fn, r = o(n);
  function o(i) {
    return i && i.__esModule ? i : { default: i };
  }
  t.default = r.default, e.exports = t.default;
})(qs, qs.exports);
var gM = qs.exports;
const Lf = /* @__PURE__ */ vi(gM), Mc = document, pM = () => {
  const e = Ze(!1), t = Mc.documentElement, { body: n } = Mc;
  return [() => {
    if (!n || !n.style || e.current || document == null)
      return;
    const i = window.innerWidth - t.clientWidth, s = parseInt(
      window.getComputedStyle(n).getPropertyValue("padding-right")
    ) || 0;
    t.style.position = "relative", t.style.overflow = "hidden", n.style.position = "relative", n.style.overflow = "hidden", n.style.paddingRight = `${s + i}px`, e.current = !0;
  }, () => {
    !n || !n.style || !e.current || (t.style.position = "", t.style.overflow = "", n.style.position = "", n.style.overflow = "", n.style.paddingRight = "", e.current = !1);
  }];
};
Lf.setAppElement("body");
const aS = ({
  isOpen: e,
  children: t,
  closeTimeoutMS: n,
  style: r,
  overlayClassName: o,
  className: i,
  onRequestClose: s
}) => {
  const [a, c] = pM();
  return e ? a() : c(), /* @__PURE__ */ fe.jsx(
    Lf,
    {
      isOpen: e,
      closeTimeoutMS: n,
      style: r,
      overlayClassName: o,
      className: i,
      onRequestClose: s || (() => {
      }),
      shouldCloseOnOverlayClick: !0,
      children: t
    }
  );
}, uS = {
  headerHeight: "67px",
  searchBarHeight: "32px",
  switchHeight: "32px"
}, cS = {
  title: "36px",
  subtitle: "24px",
  content: "14px",
  small: "12px"
};
var _f = /* @__PURE__ */ ((e) => (e.EN = "en", e.JA = "ja", e))(_f || {});
const MM = ["desktop", "tablet", "phone", "phoneMini"], lS = (e) => MM.includes(e), yM = ["light", "dark"], fS = (e) => yM.includes(e), mM = {
  courseChange: "Course change detected. If you added/deleted courses in another tab, please ",
  RefreshLink: "click here to refresh to see the changes"
}, vM = {
  mon: "Mon",
  tue: "Tue",
  wed: "Wed",
  thu: "Thu",
  fri: "Fri",
  sat: "Sat",
  sun: "Sun"
}, wM = {
  welcome: "Welcome to WasedaTime!",
  newFeature: "New feature",
  userLogin: "User login",
  writeReviews: "Write Reviews",
  timetableSync: "Timetable sync",
  loginExplain1: "Click on the ",
  loginExplain2: " icon to login.",
  useWasedaGmail1: "We only allow login with ",
  useWasedaGmail2: "",
  "Waseda Gmail": "Waseda Gmail account",
  writeReviewsExplain1: "After login, you can write / edit / delete your reviews to any course, in any language!",
  writeReviewsExplain2: "(Will be automatically translated into English, Japanese, Chinese and Korean)",
  timetableSyncExplain: "Your timetable is synchronized across devices as you login!",
  timetableDisplayCredits: "Also, we made it to sum up and display credits of courses in your timetable!",
  returningUsers: "For returning users, your added courses are preserved.",
  next: "next",
  back: "back",
  done: "done",
  "Meet our developers!": "Meet our developers!",
  Founder: "Founder",
  Frontendtranslation: "Frontend & translation",
  Frontend: "Frontend",
  "May WasedaTime be with you": "May WasedaTime be with you",
  "We also received help from": "We also received help from",
  "these contributors": "these contributors",
  a: ".",
  notice: "Notice",
  "Schools not imported initially": "To keep the high performance of our app, syllabus of all schools are not imported initially.",
  "Import schools request": "Please import the syllabus of schools you are interested when you first access the Syllabus page.",
  allSchoolsAdded: "All undergraduate & graduate schools are supported in Syllabus now!"
}, DM = {
  timetable: "Timetable",
  syllabus: "Syllabus",
  "course info": "Course",
  roomfinder: "Rooms",
  joinus: "Join Us",
  bus: "Bus",
  language: "Language",
  career: "Career",
  "corona-info": "COVID19"
}, IM = {
  licensed: " Code Licensed ",
  syllabus: "Syllabus correct as at",
  update: ""
}, AM = {
  title: "WasedaTime",
  description: "Non-profit, student-run, open-source app aiming to support and improve the campus lives of Waseda University students."
}, EM = {
  welcome: "Welcome to WasedaTime!",
  "You haven't added any courses": "Hi! You haven't added any courses.",
  "Go to": "Go to ",
  Syllabus: "Syllabus",
  "and try adding one!": "and try adding one!",
  SaveSpace: "Period 6, 7 and Saturday are hidden by default to save space. They will appear once the corresponding course is selected.",
  "Sort by": "Sort by",
  courses: "courses",
  credits: "credits",
  "courses added": "courses added",
  "Spring Semester": "Spring Semester",
  "Fall Semester": "Fall Semester",
  undecided: "undecided"
}, TM = {
  "Spring Semester": "Spring Semester",
  "Fall Semester": "Fall Semester",
  "Added courses are displayed here": "Added courses are displayed here.",
  "To add a course": "To add a course:",
  "Search with keywords": "Search with keywords",
  "With course or instructor's name": "With course or instructor's name",
  "English & Japanese supported": "English & Japanese supported",
  "Click on": "Click on",
  "to add": "to add",
  "To remove": "To remove: ",
  "to remove suffix": "",
  "Pro Tip!": "Pro Tip!",
  Use: "Use",
  "Filter by": "Filter",
  "Clear filter": "Clear filter",
  "to narrow down your search": "to narrow down your search.",
  Semesters: "Semesters",
  Schools: "Schools",
  Languages: "Languages",
  Special: "Special",
  day: "Day",
  period: {
    1: "1st",
    2: "2nd",
    3: "3rd",
    4: "4th",
    5: "5th",
    6: "6th",
    7: "7th",
    Period: "Period"
  },
  minYear: "Eligible Year",
  credit: "Credit",
  eval: {
    title: "Evaluation",
    typeDefault: "Not selected",
    Exam: "Exams",
    Papers: "Papers",
    "Class Participation": "Class Participation",
    Others: "Others",
    "No exam": "No exam",
    "No paper": "No paper",
    "No class participation": "No class participation"
  },
  type: "Type",
  level: "Level",
  "School Filter": {
    title: "School Filter",
    "Choose Schools": "Choose your Schools",
    "Remove Schools": "Remove Schools",
    Undergraduate: "Undergraduate",
    Graduate: "Graduate",
    Special: "Special",
    "No imported": "No syllabus imported yet",
    "Import request": "Please import the syllabus for at least 1 school.",
    "Loaded schools limit message": "You can load the syllabus of up to 10 schools",
    "Schools up to limit warning title": "You can only load the syllabus of up to 10 schools",
    "Schools up to limit warning text": ' To import more syllabus from other schools, please click the "Remove syllabus" button and remove at least 1 syllabus.'
  },
  displayedSpringSemester: "Spring Semester",
  displayedFallSemester: "Fall Semester",
  searchBarPlaceholder: "Search course, instructor in EN / JP",
  "Spring / Summer": "Spring / Summer",
  "Fall / Winter": "Fall / Winter",
  SILS: "SILS",
  PSE: "PSE",
  SSS: "SSS",
  FSE: "FSE",
  CSE: "CSE",
  ASE: "ASE",
  CMS: "CMS",
  HSS: "HSS",
  LAW: "LAW",
  EDU: "EDU",
  SOC: "SOC",
  HUM: "HUM",
  SPS: "SPS",
  CJL: "CJL",
  GEC: "GEC (Global)",
  CIE: "CIE",
  IPSE: "IPSE",
  "EN-based Undergrad Program": "EN-based Undergrad Program",
  "IPSE/EN-based Undergrad Program": "IPSE / EN-based Undergrad Program",
  semesterMap: {
    Spring: "Spring",
    Summer: "Summer",
    Fall: "Fall",
    Winter: "Winter",
    Semester: " Semester",
    Quarter: " Quarter",
    Intensive: " Intensive",
    "Full-Year": "Full-Year",
    Term: " Term",
    "/": " / ",
    "&": " & ",
    undecided: "Undecided"
  },
  languageKeys: {
    0: "JP",
    1: "EN",
    2: "DE",
    3: "FR",
    4: "ZH",
    5: "ES",
    6: "KR",
    7: "RU",
    8: "IT",
    9: "Others",
    "-1": "N/A"
  },
  languages: {
    0: "Japanese",
    1: "English",
    2: "German",
    3: "French",
    4: "Chinese",
    5: "Spanish",
    6: "Korean",
    7: "Russian",
    8: "Italian",
    9: "Others",
    "-1": "N/A"
  },
  location: {
    undecided: "undecided"
  },
  "Added order": "Added order",
  "Course title": "Course title",
  "Course time": "Course time",
  langParam: "&pLng=en",
  Share: "Share",
  "Share!": "Share!",
  "Share popup message": "Does this course look good? Share with classmates!",
  "Share text": "Wanna search for good courses? Try WasedaTime!"
}, NM = {
  Details: {
    title: "Details",
    "Min Year": "Eligible Year",
    Credit: "Credit",
    Category: "Category",
    Type: {
      title: "Type",
      Lecture: "Lecture",
      Seminar: "Seminar",
      Work: "Work",
      "Foreign Language": "Foreign Language",
      "On-demand": "On-demand",
      Thesis: "Thesis",
      "Graduate Research": "Graduate Research",
      Practice: "Practice",
      Blended: "Blended"
    },
    Level: {
      title: "Level",
      Beginner: "Beginner",
      Intermediate: "Intermediate",
      Advanced: "Advanced",
      "Final-stage": "Final-stage",
      Master: "Master",
      Doctor: "Doctor"
    },
    Evaluation: {
      title: "Evaluation",
      Exam: "Exams",
      Papers: "Papers",
      "Class Participation": "Class Participation",
      Others: "Others"
    }
  },
  Reviews: "Reviews",
  Review: "Review",
  "Write your Review": "Write your Review",
  Scales: "Scales",
  Satisfaction: "Satisfaction",
  Difficulty: "Easiness",
  Benefit: "Benefit",
  "Related courses": "Related courses",
  Disclaimer: "The reviews do not represent the official position or opinion of WasedaTime.",
  "Thank WTSA 1": "We appreciate",
  WTSA: "Waseda Taiwanese Student Association (WTSA)",
  "Thank WTSA 2": "'s help for providing the reviews!",
  "Related courses explanation": "Top 10 courses having the same course code and similar title",
  "Add review to this course": "Your new review",
  "Review placeholder": "Please share your experiences, feelings, and even advices about the course!",
  Submit: "Submit",
  Close: "Close",
  "Review sent": "Review sent",
  "Review updated": "Review updated",
  "Review deleted": "Review deleted",
  "Review failed to send": "Review failed to send",
  "Fill in all fields before sending": "Please fill in all fields before sending your review",
  "delete review confirmation": "Are you sure to delete the review?",
  "delete review yes": "Yes, I'm sure",
  "delete review no": "No"
}, jM = {
  "Under Construction": "Under Construction",
  "Want to help?": "Wanna build an amazing app with us?",
  "Check out our": "Check out our",
  facebook: " Facebook ",
  twitter: "Twitter",
  or: " or ",
  "!": "!",
  "We sincerely welcome any contributors!": "We sincerely welcome any contributors!"
}, bM = {
  busStatus: "Bus Status",
  Waseda: "Waseda",
  NishiWaseda: "NishiWaseda",
  "Add to home screen": "Add to home screen",
  "and never miss a bus again!": "and never miss a bus again!",
  "Official Link": "Official Link",
  "The Latest Waseda-NishiWaseda Bus Schedule": "The Latest Waseda-NishiWaseda Bus Schedule",
  "Departs in": "Departs in",
  mins: "mins",
  "Out of service": "Out of service",
  "Special Schedule": "Special Schedule",
  "Tap on the top-right icon": "Tap on the top-right icon",
  "and select Add to Home screen": "and select 'Add to Home screen'",
  "Tap on the bottom-middle icon": "Tap on the bottom-middle icon",
  "Assign a date / time to check the next bus": "Assign a date / time to check the next bus"
}, SM = {
  header: "Updates on the issue with the 2020 syllabus",
  main: "Hi! Thanks for clicking in.",
  main2: "We apologize that the 2020 syllabus is not supported yet. Due to a updated policy from Waseda University, we are not able to obtain the 2020 syllabus data at this moment.",
  main3: "We are actively negotiating with the university and will provide any updates as soon as possible. We have received many inquiries and are very sorry for not being able to respond in time.",
  main4: "Thank you so much again, and we will do our best to ensure that the mission of WasedaTime continues.",
  main5: "Please stay safe and healthy!"
}, xM = {
  Intern: "Intern",
  Articles: "Articles",
  viewMore: "View More",
  Entry: "Entry"
}, CM = {
  title: "COVID-19 Statistics",
  attribution: "Data fetched from Johns Hopkins University CSSE",
  "New Cases": "New Cases",
  "Total Cases": "Total Cases",
  "New Deaths": "New Deaths",
  "Total Deaths": "Total Deaths",
  "New Recovered": "New Recovered",
  "Total Recovered": "Total Recovered",
  Tokyo: "Tokyo",
  "Loading Statistics": "Loading Statistics",
  "No data": "No data"
}, OM = {
  "Sign in": "Sign in",
  "Sign Out": "Sign Out",
  "Sign in with WasedaMail": "Sign in with WasedaMail",
  "session expired warning": "Your session is expired. Please sign in again.",
  "sign in description": "Write your comment on a course and view your timetable on different devices by joining WasedaTime!",
  "agreement on privacy policy 1": "By continuing, you agree to WasedaTime’s ",
  "agreement on privacy policy 2": " and ",
  "agreement on privacy policy 3": ".",
  "Privacy Policy": "Privacy Policy",
  "Terms of Service": "Terms of Service",
  "Keep using without sign in": "Keep using without sign in"
}, LM = {
  app: mM,
  common: vM,
  welcome: wM,
  navigation: DM,
  footer: IM,
  about: AM,
  timetable: EM,
  syllabus: TM,
  courseInfo: NM,
  room: jM,
  bus: bM,
  updates: SM,
  career: xM,
  coronaInfo: CM,
  user: OM
}, _M = {
  courseChange: "科目の変更が検出されました。別のタブで科目を登録/取り消した場合は、変更を反映するために",
  RefreshLink: "こちらにクリックして再読み込みしてください"
}, kM = {
  mon: "月",
  tue: "火",
  wed: "水",
  thu: "木",
  fri: "金",
  sat: "土",
  sun: "日"
}, zM = {
  welcome: "WasedaTime へようこそ!",
  newFeature: "新機能",
  userLogin: "ユーザーログイン",
  writeReviews: "授業レビュー作成",
  timetableSync: "時間割の保存",
  loginExplain1: "",
  loginExplain2: "アイコンを押すとログインできます！",
  useWasedaGmail1: "",
  useWasedaGmail2: "でのログインのみ承認します。",
  "Waseda Gmail": "早稲田Gメールアカウント",
  writeReviewsExplain1: "ログインすると、あらゆる言語で授業レビューを作成・編集・削除することができます！",
  writeReviewsExplain2: "（英語、日本語、中国語、韓国語に自動翻訳されます。）",
  timetableSyncExplain: "ログインすると、複数のデバイスで時間割が同期されます！",
  timetableDisplayCredits: "なお、時間割に追加された授業の単位合計も表示されるようになりました！",
  returningUsers: "以前からご利用頂いている場合、既に登録した科目は保持されています。",
  next: "次へ",
  back: "前へ",
  done: "完了",
  "Meet our developers!": "開発者たち",
  Founder: "創設者",
  Frontendtranslation: "フロントエンド &  翻訳",
  Frontend: "フロントエンド",
  "May WasedaTime be with you": "WasedaTimeと共にあらんことを",
  "We also received help from": "それ以外の",
  "these contributors": "貢献者たち",
  a: "",
  notice: "お知らせ",
  "Schools not imported initially": "アプリのパフォーマンスを維持するため、全学部のシラバスは先に入れておいてありません。",
  "Import schools request": "お手数ですが、シラバス画面に最初に入る際、好きな学部のシラバスを選択してインポートしてください。",
  allSchoolsAdded: "全学部・研究科のシラバス検索ができるようになりました！"
}, UM = {
  timetable: "時間割",
  syllabus: "シラバス",
  "course info": "授業詳細",
  roomfinder: "空き教室",
  joinus: "募集中！",
  bus: "バス",
  language: "言語",
  career: "キャリア",
  "corona-info": "コロナ"
}, PM = {
  licensed: " ソースコードライセンス ",
  syllabus: "シラバスは",
  update: "に更新されました"
}, RM = {
  title: "早稲田タイム",
  description: "早稲田大学の学生のキャンパスライフを支え、向上させることを目的とした非営利・学生運営・オープンソースのアプリ"
}, YM = {
  welcome: "WasedaTime へようこそ！",
  "You haven't added any courses": "授業がありません。",
  "Go to": "",
  Syllabus: "シラバス",
  "and try adding one!": "から授業の登録ができます。",
  SaveSpace: "6、7限および土曜日対応する授業を登録すると表示されます。",
  "Sort by": "並べ替え",
  courses: "コマ",
  credits: "単位",
  "courses added": "個の授業が登録済",
  "Spring Semester": "春学期",
  "Fall Semester": "秋学期",
  undecided: "未定"
}, FM = {
  "Spring Semester": "春学期",
  "Fall Semester": "秋学期",
  "Added courses are displayed here": "登録された授業はここに表示されます。",
  "To add a course": "授業を登録する：",
  "Search with keywords": "キーワード検索",
  "With course or instructor's name": "授業名もしくは教師名で検索",
  "English & Japanese supported": "英語/日本語対応",
  "Click on": "",
  "to add": "を押すと登録される",
  "To remove": "授業を削除：",
  "to remove suffix": "をクリック",
  "Pro Tip!": "おすすめ！",
  Use: "",
  "Filter by": "フィルター",
  "Clear filter": "リセット",
  "to narrow down your search": "を利用して検索を絞り込んでください",
  Semesters: "学期",
  Schools: "学部",
  Languages: "言語",
  Special: "ほか",
  day: "曜日",
  period: {
    1: "1限",
    2: "2限",
    3: "3限",
    4: "4限",
    5: "5限",
    6: "6限",
    7: "7限",
    Period: "時限"
  },
  minYear: "配当年次",
  credit: "単位",
  eval: {
    title: "成績評価",
    typeDefault: "未選択",
    Exam: "試験",
    Papers: "レポート",
    "Class Participation": "平常点評価",
    Others: "その他",
    "No exam": "試験なし",
    "No paper": "レポートなし",
    "No class participation": "平常点評価なし"
  },
  type: "授業形態",
  level: "レベル",
  "School Filter": {
    title: "学部/研究科フィルター",
    "Choose Schools": "学部を選択",
    "Remove Schools": "学部を削除",
    Undergraduate: "学部",
    Graduate: "大学院",
    Special: "ほか",
    "No imported": "シラバスがインポートされていません",
    "Import request": "学部/研究科一つ以上のシラバスをインポートしてください。",
    "Loaded schools limit message": "10学部/研究科までのシラバスをインポートできる",
    "Schools up to limit warning title": "シラバスのインポートは10学部/研究科まで",
    "Schools up to limit warning text": " 他の学部のシラバスを入手するには、まず「シラバスを削除」ボタンを押し、学部1つ以上を選択して削除してください。"
  },
  displayedSpringSemester: "春学期",
  displayedFallSemester: "秋学期",
  searchBarPlaceholder: "科目、教師を日本語・英語で検索",
  "Spring / Summer": "春 / 夏",
  "Fall / Winter": "秋 / 冬",
  SILS: "国教",
  PSE: "政経",
  SSS: "社学",
  FSE: "基幹",
  CSE: "創造",
  ASE: "先進",
  CMS: "文構",
  HSS: "文学",
  LAW: "法学",
  EDU: "教育",
  SOC: "商学",
  HUM: "人科",
  SPS: "スポ科",
  CJL: "日本語教育",
  GEC: "グローバル",
  CIE: "CIE",
  IPSE: "理工国際プログラム",
  "EN-based Undergrad Program": "英語による学位取得",
  "IPSE/EN-based Undergrad Program": "理工国際プログラム / 英語による学位取得",
  semesterMap: {
    Spring: "春",
    Summer: "夏",
    Fall: "秋",
    Winter: "冬",
    Semester: "学期",
    Quarter: "クオーター",
    Intensive: "集中",
    "Full-Year": "通年",
    Term: "期",
    "/": " / ",
    "&": " & ",
    undecided: "未定"
  },
  languageCodes: {
    0: "日",
    1: "英",
    2: "独",
    3: "仏",
    4: "中",
    5: "西",
    6: "韓",
    7: "露",
    8: "伊",
    9: "Others",
    "-1": "N/A"
  },
  languages: {
    0: "日本語",
    1: "英語",
    2: "ドイツ語",
    3: "フランス語",
    4: "中国語",
    5: "スペイン語",
    6: "韓国語",
    7: "ロシア語",
    8: "イタリア語",
    9: "ほか",
    "-1": "N/A"
  },
  location: {
    undecided: "未定"
  },
  "Added order": "追加時間",
  "Course title": "科目名",
  "Course time": "科目時間",
  langParam: "",
  Share: "シェア",
  "Share!": "シェア！",
  "Share popup message": "良い授業を発見した？クラスメイトにシェアしよう！",
  "Share text": "良い授業、なかなか見つからない？早稲田タイムで検索しましょう！"
}, QM = {
  Details: {
    title: "詳細",
    "Min Year": "配当年次",
    Credit: "単位",
    Category: "科目区分",
    Type: {
      title: "授業形態",
      Lecture: "講義",
      Seminar: "演習／ゼミ",
      Work: "実習／実験／実技",
      "Foreign Language": "外国語",
      "On-demand": "オンデマンド",
      Thesis: "論文",
      "Graduate Research": "研究指導",
      Practice: "実践／フィールドワーク／インターンシップ／ボランティア",
      Blended: "対面／オンデマンド"
    },
    Level: {
      title: "レベル",
      Beginner: "初級レベル（入門・導入）",
      Intermediate: "中級レベル（発展・応用）",
      Advanced: "上級レベル",
      "Final-stage": "総仕上げ",
      Master: "修士レベル",
      Doctor: "博士レベル"
    },
    Evaluation: {
      title: "成績評価",
      Exam: "試験",
      Papers: "レポート",
      "Class Participation": "平常点評価",
      Others: "その他"
    }
  },
  Reviews: "レビュー",
  Review: "レビュー",
  "Write your Review": "レビュー新規作成",
  Scales: "レベル",
  Satisfaction: "満足度",
  Difficulty: "容易さ",
  Benefit: "有益さ",
  "Related courses": "関連科目",
  Disclaimer: "レビューの内容はWasedaTimeの立場、意見を代表するものではありません",
  "Thank WTSA 1": "",
  WTSA: "早稲田大学台湾留学生会（WTSA）",
  "Thank WTSA 2": "の評価のご提供に感謝を申し上げます。",
  "Related courses explanation": "同じコード及び似たタイトルを持つ授業の中の前10位",
  "Add review to this course": "レビュー投稿",
  "Review placeholder": "この授業についての経験や感想を共有しましょう！アドバイスまでいただけたら嬉しい！",
  "Agree to share": "WTSAに評価をシェアすることを同意します",
  Submit: "提出する",
  Close: "閉じる",
  "Review sent": "レビューが提出されました",
  "Review updated": "レビューが更新されました",
  "Review deleted": "レビューが削除されました",
  "Review failed to send": "評価の提出が失敗しました",
  "Fill in all fields before sending": "提出する前にすべてのフィールドに記入してください",
  "delete review confirmation": "レビューを削除してよろしいですか？",
  "delete review yes": "はい、削除します",
  "delete review no": "いいえ"
}, BM = {
  "Under Construction": "作成中",
  "Want to help?": "一緒に楽しく開発しませんか？",
  "Check out our": "興味のある方は ",
  facebook: " Facebook ",
  twitter: " Twitter ",
  or: "または",
  "!": "から！",
  "We sincerely welcome any contributors!": ""
}, $M = {
  busStatus: "バス運行情報",
  Waseda: "早稲田",
  NishiWaseda: "西早稲田",
  "Add to home screen": "ホーム画面に追加して",
  "and never miss a bus again!": "、バスの情報をいつでもチェック！",
  "Official Link": "公式リンク",
  "The Latest Waseda-NishiWaseda Bus Schedule": "早稲田ー西早稲田バスの最新スケジュール",
  "Departs in": "あと",
  mins: "分",
  "Out of service": "利用時間外",
  "Special Schedule": "特別なスケジュール",
  "Tap on the top-right icon": "右上のアイコン",
  "and select Add to Home screen": "をクリックして、'ホーム画面に追加' を選択する",
  "Tap on the bottom-middle icon": "底部中央のアイコン",
  "Assign a date / time to check the next bus": "日時を指定し、次のバスを検索しましょう"
}, WM = {
  header: "2020のシラバスについて",
  main: "こんにちは！クリックしていただきありがとうございます。",
  main2: "申し訳ありませんが、2020年のシラバスはまだサポートされていません。早稲田大学のポリシーが更新されたため、現時点では2020のシラバスデータを取得できません。",
  main3: "私たちは積極的に大学と相談しており、新しい情報をできるだけ早く提供します。多くのお問い合わせをいただきましたが、時間内にご返答できず大変申し訳ございません。",
  main4: "改めて、あなたに感謝申し上げます。早稲田タイムの使命が継続するように最善を尽くします。",
  main5: "どうぞ、安全と健康にお気をつけくださいませ。"
}, VM = {
  Intern: "インターン",
  Articles: "記事",
  viewMore: "インターン内容をもっと見る",
  Entry: "エントリー"
}, HM = {
  title: "新型コロナウイルス感染症情報",
  attribution: "Johns Hopkins University CSSE より引用",
  "New Cases": "新規感染数",
  "Total Cases": "総感染数",
  "New Deaths": "新規死亡数",
  "Total Deaths": "総死亡数",
  "New Recovered": "新規回復数",
  "Total Recovered": "総回復数",
  Tokyo: "東京",
  "Loading Statistics": "読み込み中",
  "No data": "データなし"
}, qM = {
  "Sign in": "ログイン",
  "Sign Out": "ログアウト",
  "Sign in with WasedaMail": "早稲田メールでログイン",
  "session expired warning": "セッションが切れました。お手数ですが、再ログインをお願い致します。",
  "sign in description": "早稲田タイムの会員に加入することにより、授業にレビューを書くこと、及び異なる端末で同じ時間割を利用することが可能になります！",
  "agreement on privacy policy 1": "会員に加入した時点で、早稲田タイムの",
  "agreement on privacy policy 2": "及び",
  "agreement on privacy policy 3": "に同意したものとみなします。",
  "Privacy Policy": "プライバシーポリシー",
  "Terms of Service": "利用規約",
  "Keep using without sign in": "ログインせずに使用し続ける"
}, KM = {
  app: _M,
  common: kM,
  welcome: zM,
  navigation: UM,
  footer: PM,
  about: RM,
  timetable: YM,
  syllabus: FM,
  courseInfo: QM,
  room: BM,
  bus: $M,
  updates: WM,
  career: VM,
  coronaInfo: HM,
  user: qM
}, GM = () => /* @__PURE__ */ fe.jsx("svg", { viewBox: "0 0 50 50", width: "50px", height: "50px", color: "white", children: /* @__PURE__ */ fe.jsx("path", { d: "M 26 2 C 13.308594 2 3 12.308594 3 25 C 3 37.691406 13.308594 48 26 48 C 35.917969 48 41.972656 43.4375 45.125 37.78125 C 48.277344 32.125 48.675781 25.480469 47.71875 20.9375 L 47.53125 20.15625 L 46.75 20.15625 L 26 20.125 L 25 20.125 L 25 30.53125 L 36.4375 30.53125 C 34.710938 34.53125 31.195313 37.28125 26 37.28125 C 19.210938 37.28125 13.71875 31.789063 13.71875 25 C 13.71875 18.210938 19.210938 12.71875 26 12.71875 C 29.050781 12.71875 31.820313 13.847656 33.96875 15.6875 L 34.6875 16.28125 L 41.53125 9.4375 L 42.25 8.6875 L 41.5 8 C 37.414063 4.277344 31.960938 2 26 2 Z M 26 4 C 31.074219 4 35.652344 5.855469 39.28125 8.84375 L 34.46875 13.65625 C 32.089844 11.878906 29.199219 10.71875 26 10.71875 C 18.128906 10.71875 11.71875 17.128906 11.71875 25 C 11.71875 32.871094 18.128906 39.28125 26 39.28125 C 32.550781 39.28125 37.261719 35.265625 38.9375 29.8125 L 39.34375 28.53125 L 27 28.53125 L 27 22.125 L 45.84375 22.15625 C 46.507813 26.191406 46.066406 31.984375 43.375 36.8125 C 40.515625 41.9375 35.320313 46 26 46 C 14.386719 46 5 36.609375 5 25 C 5 13.390625 14.386719 4 26 4 Z" }) }), JM = () => /* @__PURE__ */ fe.jsxs("svg", { viewBox: "0 0 30 30", width: "30px", height: "30px", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
  /* @__PURE__ */ fe.jsx("line", { x1: "24", y1: "6", x2: "6", y2: "24" }),
  "  ",
  /* @__PURE__ */ fe.jsx("line", { x1: "6", y1: "6", x2: "24", y2: "24" })
] });
var kf = { exports: {} };
(function(e, t) {
  (function(r, o) {
    e.exports = o(we);
  })(Ft, (n) => (
    /******/
    (() => {
      var r = {
        /***/
        "./node_modules/css-mediaquery/index.js": (
          /*!**********************************************!*\
            !*** ./node_modules/css-mediaquery/index.js ***!
            \**********************************************/
          /***/
          (a, c) => {
            c.match = M, c.parse = y;
            var u = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i, l = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/, f = /^(?:(min|max)-)?(.+)/, d = /(em|rem|px|cm|mm|in|pt|pc)?$/, p = /(dpi|dpcm|dppx)?$/;
            function M(N, E) {
              return y(N).some(function(T) {
                var F = T.inverse, _ = T.type === "all" || E.type === T.type;
                if (_ && F || !(_ || F))
                  return !1;
                var G = T.expressions.every(function(Q) {
                  var K = Q.feature, Z = Q.modifier, re = Q.value, U = E[K];
                  if (!U)
                    return !1;
                  switch (K) {
                    case "orientation":
                    case "scan":
                      return U.toLowerCase() === re.toLowerCase();
                    case "width":
                    case "height":
                    case "device-width":
                    case "device-height":
                      re = D(re), U = D(U);
                      break;
                    case "resolution":
                      re = w(re), U = w(U);
                      break;
                    case "aspect-ratio":
                    case "device-aspect-ratio":
                    case /* Deprecated */
                    "device-pixel-ratio":
                      re = m(re), U = m(U);
                      break;
                    case "grid":
                    case "color":
                    case "color-index":
                    case "monochrome":
                      re = parseInt(re, 10) || 1, U = parseInt(U, 10) || 0;
                      break;
                  }
                  switch (Z) {
                    case "min":
                      return U >= re;
                    case "max":
                      return U <= re;
                    default:
                      return U === re;
                  }
                });
                return G && !F || !G && F;
              });
            }
            function y(N) {
              return N.split(",").map(function(E) {
                E = E.trim();
                var T = E.match(u), F = T[1], _ = T[2], G = T[3] || "", Q = {};
                return Q.inverse = !!F && F.toLowerCase() === "not", Q.type = _ ? _.toLowerCase() : "all", G = G.match(/\([^\)]+\)/g) || [], Q.expressions = G.map(function(K) {
                  var Z = K.match(l), re = Z[1].toLowerCase().match(f);
                  return {
                    modifier: re[1],
                    feature: re[2],
                    value: Z[2]
                  };
                }), Q;
              });
            }
            function m(N) {
              var E = Number(N), T;
              return E || (T = N.match(/^(\d+)\s*\/\s*(\d+)$/), E = T[1] / T[2]), E;
            }
            function w(N) {
              var E = parseFloat(N), T = String(N).match(p)[1];
              switch (T) {
                case "dpcm":
                  return E / 2.54;
                case "dppx":
                  return E * 96;
                default:
                  return E;
              }
            }
            function D(N) {
              var E = parseFloat(N), T = String(N).match(d)[1];
              switch (T) {
                case "em":
                  return E * 16;
                case "rem":
                  return E * 16;
                case "cm":
                  return E * 96 / 2.54;
                case "mm":
                  return E * 96 / 2.54 / 10;
                case "in":
                  return E * 96;
                case "pt":
                  return E * 72;
                case "pc":
                  return E * 72 / 12;
                default:
                  return E;
              }
            }
          }
        ),
        /***/
        "./node_modules/hyphenate-style-name/index.js": (
          /*!****************************************************!*\
            !*** ./node_modules/hyphenate-style-name/index.js ***!
            \****************************************************/
          /***/
          (a, c, u) => {
            u.r(c), u.d(c, {
              /* harmony export */
              default: () => y
              /* harmony export */
            });
            var l = /[A-Z]/g, f = /^ms-/, d = {};
            function p(m) {
              return "-" + m.toLowerCase();
            }
            function M(m) {
              if (d.hasOwnProperty(m))
                return d[m];
              var w = m.replace(l, p);
              return d[m] = f.test(w) ? "-" + w : w;
            }
            const y = M;
          }
        ),
        /***/
        "./node_modules/matchmediaquery/index.js": (
          /*!***********************************************!*\
            !*** ./node_modules/matchmediaquery/index.js ***!
            \***********************************************/
          /***/
          (a, c, u) => {
            var l = u(
              /*! css-mediaquery */
              "./node_modules/css-mediaquery/index.js"
            ).match, f = typeof window < "u" ? window.matchMedia : null;
            function d(M, y, m) {
              var w = this;
              if (f && !m) {
                var D = f.call(window, M);
                this.matches = D.matches, this.media = D.media, D.addListener(T);
              } else
                this.matches = l(M, y), this.media = M;
              this.addListener = N, this.removeListener = E, this.dispose = F;
              function N(_) {
                D && D.addListener(_);
              }
              function E(_) {
                D && D.removeListener(_);
              }
              function T(_) {
                w.matches = _.matches, w.media = _.media;
              }
              function F() {
                D && D.removeListener(T);
              }
            }
            function p(M, y, m) {
              return new d(M, y, m);
            }
            a.exports = p;
          }
        ),
        /***/
        "./node_modules/object-assign/index.js": (
          /*!*********************************************!*\
            !*** ./node_modules/object-assign/index.js ***!
            \*********************************************/
          /***/
          (a) => {
            /*
            object-assign
            (c) Sindre Sorhus
            @license MIT
            */
            var c = Object.getOwnPropertySymbols, u = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
            function f(p) {
              if (p == null)
                throw new TypeError("Object.assign cannot be called with null or undefined");
              return Object(p);
            }
            function d() {
              try {
                if (!Object.assign)
                  return !1;
                var p = new String("abc");
                if (p[5] = "de", Object.getOwnPropertyNames(p)[0] === "5")
                  return !1;
                for (var M = {}, y = 0; y < 10; y++)
                  M["_" + String.fromCharCode(y)] = y;
                var m = Object.getOwnPropertyNames(M).map(function(D) {
                  return M[D];
                });
                if (m.join("") !== "0123456789")
                  return !1;
                var w = {};
                return "abcdefghijklmnopqrst".split("").forEach(function(D) {
                  w[D] = D;
                }), Object.keys(Object.assign({}, w)).join("") === "abcdefghijklmnopqrst";
              } catch {
                return !1;
              }
            }
            a.exports = d() ? Object.assign : function(p, M) {
              for (var y, m = f(p), w, D = 1; D < arguments.length; D++) {
                y = Object(arguments[D]);
                for (var N in y)
                  u.call(y, N) && (m[N] = y[N]);
                if (c) {
                  w = c(y);
                  for (var E = 0; E < w.length; E++)
                    l.call(y, w[E]) && (m[w[E]] = y[w[E]]);
                }
              }
              return m;
            };
          }
        ),
        /***/
        "./node_modules/prop-types/checkPropTypes.js": (
          /*!***************************************************!*\
            !*** ./node_modules/prop-types/checkPropTypes.js ***!
            \***************************************************/
          /***/
          (a, c, u) => {
            var l = function() {
            };
            {
              var f = u(
                /*! ./lib/ReactPropTypesSecret */
                "./node_modules/prop-types/lib/ReactPropTypesSecret.js"
              ), d = {}, p = u(
                /*! ./lib/has */
                "./node_modules/prop-types/lib/has.js"
              );
              l = function(y) {
                var m = "Warning: " + y;
                typeof console < "u" && console.error(m);
                try {
                  throw new Error(m);
                } catch {
                }
              };
            }
            function M(y, m, w, D, N) {
              for (var E in y)
                if (p(y, E)) {
                  var T;
                  try {
                    if (typeof y[E] != "function") {
                      var F = Error(
                        (D || "React class") + ": " + w + " type `" + E + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof y[E] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                      );
                      throw F.name = "Invariant Violation", F;
                    }
                    T = y[E](m, E, D, w, null, f);
                  } catch (G) {
                    T = G;
                  }
                  if (T && !(T instanceof Error) && l(
                    (D || "React class") + ": type specification of " + w + " `" + E + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof T + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
                  ), T instanceof Error && !(T.message in d)) {
                    d[T.message] = !0;
                    var _ = N ? N() : "";
                    l(
                      "Failed " + w + " type: " + T.message + (_ ?? "")
                    );
                  }
                }
            }
            M.resetWarningCache = function() {
              d = {};
            }, a.exports = M;
          }
        ),
        /***/
        "./node_modules/prop-types/factoryWithTypeCheckers.js": (
          /*!************************************************************!*\
            !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
            \************************************************************/
          /***/
          (a, c, u) => {
            var l = u(
              /*! react-is */
              "./node_modules/react-is/index.js"
            ), f = u(
              /*! object-assign */
              "./node_modules/object-assign/index.js"
            ), d = u(
              /*! ./lib/ReactPropTypesSecret */
              "./node_modules/prop-types/lib/ReactPropTypesSecret.js"
            ), p = u(
              /*! ./lib/has */
              "./node_modules/prop-types/lib/has.js"
            ), M = u(
              /*! ./checkPropTypes */
              "./node_modules/prop-types/checkPropTypes.js"
            ), y = function() {
            };
            y = function(w) {
              var D = "Warning: " + w;
              typeof console < "u" && console.error(D);
              try {
                throw new Error(D);
              } catch {
              }
            };
            function m() {
              return null;
            }
            a.exports = function(w, D) {
              var N = typeof Symbol == "function" && Symbol.iterator, E = "@@iterator";
              function T(P) {
                var L = P && (N && P[N] || P[E]);
                if (typeof L == "function")
                  return L;
              }
              var F = "<<anonymous>>", _ = {
                array: Z("array"),
                bigint: Z("bigint"),
                bool: Z("boolean"),
                func: Z("function"),
                number: Z("number"),
                object: Z("object"),
                string: Z("string"),
                symbol: Z("symbol"),
                any: re(),
                arrayOf: U,
                element: j(),
                elementType: C(),
                instanceOf: V,
                node: O(),
                objectOf: q,
                oneOf: S,
                oneOfType: ae,
                shape: Y,
                exact: W
              };
              function G(P, L) {
                return P === L ? P !== 0 || 1 / P === 1 / L : P !== P && L !== L;
              }
              function Q(P, L) {
                this.message = P, this.data = L && typeof L == "object" ? L : {}, this.stack = "";
              }
              Q.prototype = Error.prototype;
              function K(P) {
                var L = {}, R = 0;
                function ce(ue, he, le, A, g, h, I) {
                  if (A = A || F, h = h || le, I !== d) {
                    if (D) {
                      var k = new Error(
                        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
                      );
                      throw k.name = "Invariant Violation", k;
                    } else if (typeof console < "u") {
                      var J = A + ":" + le;
                      !L[J] && // Avoid spamming the console because they are often not actionable except for lib authors
                      R < 3 && (y(
                        "You are manually calling a React.PropTypes validation function for the `" + h + "` prop on `" + A + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                      ), L[J] = !0, R++);
                    }
                  }
                  return he[le] == null ? ue ? he[le] === null ? new Q("The " + g + " `" + h + "` is marked as required " + ("in `" + A + "`, but its value is `null`.")) : new Q("The " + g + " `" + h + "` is marked as required in " + ("`" + A + "`, but its value is `undefined`.")) : null : P(he, le, A, g, h);
                }
                var X = ce.bind(null, !1);
                return X.isRequired = ce.bind(null, !0), X;
              }
              function Z(P) {
                function L(R, ce, X, ue, he, le) {
                  var A = R[ce], g = b(A);
                  if (g !== P) {
                    var h = ne(A);
                    return new Q(
                      "Invalid " + ue + " `" + he + "` of type " + ("`" + h + "` supplied to `" + X + "`, expected ") + ("`" + P + "`."),
                      { expectedType: P }
                    );
                  }
                  return null;
                }
                return K(L);
              }
              function re() {
                return K(m);
              }
              function U(P) {
                function L(R, ce, X, ue, he) {
                  if (typeof P != "function")
                    return new Q("Property `" + he + "` of component `" + X + "` has invalid PropType notation inside arrayOf.");
                  var le = R[ce];
                  if (!Array.isArray(le)) {
                    var A = b(le);
                    return new Q("Invalid " + ue + " `" + he + "` of type " + ("`" + A + "` supplied to `" + X + "`, expected an array."));
                  }
                  for (var g = 0; g < le.length; g++) {
                    var h = P(le, g, X, ue, he + "[" + g + "]", d);
                    if (h instanceof Error)
                      return h;
                  }
                  return null;
                }
                return K(L);
              }
              function j() {
                function P(L, R, ce, X, ue) {
                  var he = L[R];
                  if (!w(he)) {
                    var le = b(he);
                    return new Q("Invalid " + X + " `" + ue + "` of type " + ("`" + le + "` supplied to `" + ce + "`, expected a single ReactElement."));
                  }
                  return null;
                }
                return K(P);
              }
              function C() {
                function P(L, R, ce, X, ue) {
                  var he = L[R];
                  if (!l.isValidElementType(he)) {
                    var le = b(he);
                    return new Q("Invalid " + X + " `" + ue + "` of type " + ("`" + le + "` supplied to `" + ce + "`, expected a single ReactElement type."));
                  }
                  return null;
                }
                return K(P);
              }
              function V(P) {
                function L(R, ce, X, ue, he) {
                  if (!(R[ce] instanceof P)) {
                    var le = P.name || F, A = ie(R[ce]);
                    return new Q("Invalid " + ue + " `" + he + "` of type " + ("`" + A + "` supplied to `" + X + "`, expected ") + ("instance of `" + le + "`."));
                  }
                  return null;
                }
                return K(L);
              }
              function S(P) {
                if (!Array.isArray(P))
                  return arguments.length > 1 ? y(
                    "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
                  ) : y("Invalid argument supplied to oneOf, expected an array."), m;
                function L(R, ce, X, ue, he) {
                  for (var le = R[ce], A = 0; A < P.length; A++)
                    if (G(le, P[A]))
                      return null;
                  var g = JSON.stringify(P, function(I, k) {
                    var J = ne(k);
                    return J === "symbol" ? String(k) : k;
                  });
                  return new Q("Invalid " + ue + " `" + he + "` of value `" + String(le) + "` " + ("supplied to `" + X + "`, expected one of " + g + "."));
                }
                return K(L);
              }
              function q(P) {
                function L(R, ce, X, ue, he) {
                  if (typeof P != "function")
                    return new Q("Property `" + he + "` of component `" + X + "` has invalid PropType notation inside objectOf.");
                  var le = R[ce], A = b(le);
                  if (A !== "object")
                    return new Q("Invalid " + ue + " `" + he + "` of type " + ("`" + A + "` supplied to `" + X + "`, expected an object."));
                  for (var g in le)
                    if (p(le, g)) {
                      var h = P(le, g, X, ue, he + "." + g, d);
                      if (h instanceof Error)
                        return h;
                    }
                  return null;
                }
                return K(L);
              }
              function ae(P) {
                if (!Array.isArray(P))
                  return y("Invalid argument supplied to oneOfType, expected an instance of array."), m;
                for (var L = 0; L < P.length; L++) {
                  var R = P[L];
                  if (typeof R != "function")
                    return y(
                      "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + $(R) + " at index " + L + "."
                    ), m;
                }
                function ce(X, ue, he, le, A) {
                  for (var g = [], h = 0; h < P.length; h++) {
                    var I = P[h], k = I(X, ue, he, le, A, d);
                    if (k == null)
                      return null;
                    k.data && p(k.data, "expectedType") && g.push(k.data.expectedType);
                  }
                  var J = g.length > 0 ? ", expected one of type [" + g.join(", ") + "]" : "";
                  return new Q("Invalid " + le + " `" + A + "` supplied to " + ("`" + he + "`" + J + "."));
                }
                return K(ce);
              }
              function O() {
                function P(L, R, ce, X, ue) {
                  return B(L[R]) ? null : new Q("Invalid " + X + " `" + ue + "` supplied to " + ("`" + ce + "`, expected a ReactNode."));
                }
                return K(P);
              }
              function z(P, L, R, ce, X) {
                return new Q(
                  (P || "React class") + ": " + L + " type `" + R + "." + ce + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + X + "`."
                );
              }
              function Y(P) {
                function L(R, ce, X, ue, he) {
                  var le = R[ce], A = b(le);
                  if (A !== "object")
                    return new Q("Invalid " + ue + " `" + he + "` of type `" + A + "` " + ("supplied to `" + X + "`, expected `object`."));
                  for (var g in P) {
                    var h = P[g];
                    if (typeof h != "function")
                      return z(X, ue, he, g, ne(h));
                    var I = h(le, g, X, ue, he + "." + g, d);
                    if (I)
                      return I;
                  }
                  return null;
                }
                return K(L);
              }
              function W(P) {
                function L(R, ce, X, ue, he) {
                  var le = R[ce], A = b(le);
                  if (A !== "object")
                    return new Q("Invalid " + ue + " `" + he + "` of type `" + A + "` " + ("supplied to `" + X + "`, expected `object`."));
                  var g = f({}, R[ce], P);
                  for (var h in g) {
                    var I = P[h];
                    if (p(P, h) && typeof I != "function")
                      return z(X, ue, he, h, ne(I));
                    if (!I)
                      return new Q(
                        "Invalid " + ue + " `" + he + "` key `" + h + "` supplied to `" + X + "`.\nBad object: " + JSON.stringify(R[ce], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(P), null, "  ")
                      );
                    var k = I(le, h, X, ue, he + "." + h, d);
                    if (k)
                      return k;
                  }
                  return null;
                }
                return K(L);
              }
              function B(P) {
                switch (typeof P) {
                  case "number":
                  case "string":
                  case "undefined":
                    return !0;
                  case "boolean":
                    return !P;
                  case "object":
                    if (Array.isArray(P))
                      return P.every(B);
                    if (P === null || w(P))
                      return !0;
                    var L = T(P);
                    if (L) {
                      var R = L.call(P), ce;
                      if (L !== P.entries) {
                        for (; !(ce = R.next()).done; )
                          if (!B(ce.value))
                            return !1;
                      } else
                        for (; !(ce = R.next()).done; ) {
                          var X = ce.value;
                          if (X && !B(X[1]))
                            return !1;
                        }
                    } else
                      return !1;
                    return !0;
                  default:
                    return !1;
                }
              }
              function ee(P, L) {
                return P === "symbol" ? !0 : L ? L["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && L instanceof Symbol : !1;
              }
              function b(P) {
                var L = typeof P;
                return Array.isArray(P) ? "array" : P instanceof RegExp ? "object" : ee(L, P) ? "symbol" : L;
              }
              function ne(P) {
                if (typeof P > "u" || P === null)
                  return "" + P;
                var L = b(P);
                if (L === "object") {
                  if (P instanceof Date)
                    return "date";
                  if (P instanceof RegExp)
                    return "regexp";
                }
                return L;
              }
              function $(P) {
                var L = ne(P);
                switch (L) {
                  case "array":
                  case "object":
                    return "an " + L;
                  case "boolean":
                  case "date":
                  case "regexp":
                    return "a " + L;
                  default:
                    return L;
                }
              }
              function ie(P) {
                return !P.constructor || !P.constructor.name ? F : P.constructor.name;
              }
              return _.checkPropTypes = M, _.resetWarningCache = M.resetWarningCache, _.PropTypes = _, _;
            };
          }
        ),
        /***/
        "./node_modules/prop-types/index.js": (
          /*!******************************************!*\
            !*** ./node_modules/prop-types/index.js ***!
            \******************************************/
          /***/
          (a, c, u) => {
            {
              var l = u(
                /*! react-is */
                "./node_modules/react-is/index.js"
              ), f = !0;
              a.exports = u(
                /*! ./factoryWithTypeCheckers */
                "./node_modules/prop-types/factoryWithTypeCheckers.js"
              )(l.isElement, f);
            }
          }
        ),
        /***/
        "./node_modules/prop-types/lib/ReactPropTypesSecret.js": (
          /*!*************************************************************!*\
            !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
            \*************************************************************/
          /***/
          (a) => {
            var c = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
            a.exports = c;
          }
        ),
        /***/
        "./node_modules/prop-types/lib/has.js": (
          /*!********************************************!*\
            !*** ./node_modules/prop-types/lib/has.js ***!
            \********************************************/
          /***/
          (a) => {
            a.exports = Function.call.bind(Object.prototype.hasOwnProperty);
          }
        ),
        /***/
        "./node_modules/react-is/cjs/react-is.development.js": (
          /*!***********************************************************!*\
            !*** ./node_modules/react-is/cjs/react-is.development.js ***!
            \***********************************************************/
          /***/
          (a, c) => {
            /** @license React v16.13.1
             * react-is.development.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            (function() {
              var u = typeof Symbol == "function" && Symbol.for, l = u ? Symbol.for("react.element") : 60103, f = u ? Symbol.for("react.portal") : 60106, d = u ? Symbol.for("react.fragment") : 60107, p = u ? Symbol.for("react.strict_mode") : 60108, M = u ? Symbol.for("react.profiler") : 60114, y = u ? Symbol.for("react.provider") : 60109, m = u ? Symbol.for("react.context") : 60110, w = u ? Symbol.for("react.async_mode") : 60111, D = u ? Symbol.for("react.concurrent_mode") : 60111, N = u ? Symbol.for("react.forward_ref") : 60112, E = u ? Symbol.for("react.suspense") : 60113, T = u ? Symbol.for("react.suspense_list") : 60120, F = u ? Symbol.for("react.memo") : 60115, _ = u ? Symbol.for("react.lazy") : 60116, G = u ? Symbol.for("react.block") : 60121, Q = u ? Symbol.for("react.fundamental") : 60117, K = u ? Symbol.for("react.responder") : 60118, Z = u ? Symbol.for("react.scope") : 60119;
              function re(I) {
                return typeof I == "string" || typeof I == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
                I === d || I === D || I === M || I === p || I === E || I === T || typeof I == "object" && I !== null && (I.$$typeof === _ || I.$$typeof === F || I.$$typeof === y || I.$$typeof === m || I.$$typeof === N || I.$$typeof === Q || I.$$typeof === K || I.$$typeof === Z || I.$$typeof === G);
              }
              function U(I) {
                if (typeof I == "object" && I !== null) {
                  var k = I.$$typeof;
                  switch (k) {
                    case l:
                      var J = I.type;
                      switch (J) {
                        case w:
                        case D:
                        case d:
                        case M:
                        case p:
                        case E:
                          return J;
                        default:
                          var H = J && J.$$typeof;
                          switch (H) {
                            case m:
                            case N:
                            case _:
                            case F:
                            case y:
                              return H;
                            default:
                              return k;
                          }
                      }
                    case f:
                      return k;
                  }
                }
              }
              var j = w, C = D, V = m, S = y, q = l, ae = N, O = d, z = _, Y = F, W = f, B = M, ee = p, b = E, ne = !1;
              function $(I) {
                return ne || (ne = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), ie(I) || U(I) === w;
              }
              function ie(I) {
                return U(I) === D;
              }
              function P(I) {
                return U(I) === m;
              }
              function L(I) {
                return U(I) === y;
              }
              function R(I) {
                return typeof I == "object" && I !== null && I.$$typeof === l;
              }
              function ce(I) {
                return U(I) === N;
              }
              function X(I) {
                return U(I) === d;
              }
              function ue(I) {
                return U(I) === _;
              }
              function he(I) {
                return U(I) === F;
              }
              function le(I) {
                return U(I) === f;
              }
              function A(I) {
                return U(I) === M;
              }
              function g(I) {
                return U(I) === p;
              }
              function h(I) {
                return U(I) === E;
              }
              c.AsyncMode = j, c.ConcurrentMode = C, c.ContextConsumer = V, c.ContextProvider = S, c.Element = q, c.ForwardRef = ae, c.Fragment = O, c.Lazy = z, c.Memo = Y, c.Portal = W, c.Profiler = B, c.StrictMode = ee, c.Suspense = b, c.isAsyncMode = $, c.isConcurrentMode = ie, c.isContextConsumer = P, c.isContextProvider = L, c.isElement = R, c.isForwardRef = ce, c.isFragment = X, c.isLazy = ue, c.isMemo = he, c.isPortal = le, c.isProfiler = A, c.isStrictMode = g, c.isSuspense = h, c.isValidElementType = re, c.typeOf = U;
            })();
          }
        ),
        /***/
        "./node_modules/react-is/index.js": (
          /*!****************************************!*\
            !*** ./node_modules/react-is/index.js ***!
            \****************************************/
          /***/
          (a, c, u) => {
            a.exports = u(
              /*! ./cjs/react-is.development.js */
              "./node_modules/react-is/cjs/react-is.development.js"
            );
          }
        ),
        /***/
        "./node_modules/shallow-equal/dist/index.esm.js": (
          /*!******************************************************!*\
            !*** ./node_modules/shallow-equal/dist/index.esm.js ***!
            \******************************************************/
          /***/
          (a, c, u) => {
            u.r(c), u.d(c, {
              /* harmony export */
              shallowEqualArrays: () => (
                /* binding */
                f
              ),
              /* harmony export */
              shallowEqualObjects: () => (
                /* binding */
                l
              )
              /* harmony export */
            });
            function l(d, p) {
              if (d === p)
                return !0;
              if (!d || !p)
                return !1;
              var M = Object.keys(d), y = Object.keys(p), m = M.length;
              if (y.length !== m)
                return !1;
              for (var w = 0; w < m; w++) {
                var D = M[w];
                if (d[D] !== p[D] || !Object.prototype.hasOwnProperty.call(p, D))
                  return !1;
              }
              return !0;
            }
            function f(d, p) {
              if (d === p)
                return !0;
              if (!d || !p)
                return !1;
              var M = d.length;
              if (p.length !== M)
                return !1;
              for (var y = 0; y < M; y++)
                if (d[y] !== p[y])
                  return !1;
              return !0;
            }
          }
        ),
        /***/
        "./src/Component.ts": (
          /*!**************************!*\
            !*** ./src/Component.ts ***!
            \**************************/
          /***/
          function(a, c, u) {
            var l = this && this.__rest || function(M, y) {
              var m = {};
              for (var w in M)
                Object.prototype.hasOwnProperty.call(M, w) && y.indexOf(w) < 0 && (m[w] = M[w]);
              if (M != null && typeof Object.getOwnPropertySymbols == "function")
                for (var D = 0, w = Object.getOwnPropertySymbols(M); D < w.length; D++)
                  y.indexOf(w[D]) < 0 && Object.prototype.propertyIsEnumerable.call(M, w[D]) && (m[w[D]] = M[w[D]]);
              return m;
            }, f = this && this.__importDefault || function(M) {
              return M && M.__esModule ? M : { default: M };
            };
            Object.defineProperty(c, "__esModule", { value: !0 });
            var d = f(u(
              /*! ./useMediaQuery */
              "./src/useMediaQuery.ts"
            )), p = function(M) {
              var y = M.children, m = M.device, w = M.onChange, D = l(M, ["children", "device", "onChange"]), N = (0, d.default)(D, m, w);
              return typeof y == "function" ? y(N) : N ? y : null;
            };
            c.default = p;
          }
        ),
        /***/
        "./src/Context.ts": (
          /*!************************!*\
            !*** ./src/Context.ts ***!
            \************************/
          /***/
          (a, c, u) => {
            Object.defineProperty(c, "__esModule", { value: !0 });
            var l = u(
              /*! react */
              "react"
            ), f = (0, l.createContext)(void 0);
            c.default = f;
          }
        ),
        /***/
        "./src/index.ts": (
          /*!**********************!*\
            !*** ./src/index.ts ***!
            \**********************/
          /***/
          function(a, c, u) {
            var l = this && this.__importDefault || function(y) {
              return y && y.__esModule ? y : { default: y };
            };
            Object.defineProperty(c, "__esModule", { value: !0 }), c.Context = c.toQuery = c.useMediaQuery = c.default = void 0;
            var f = l(u(
              /*! ./useMediaQuery */
              "./src/useMediaQuery.ts"
            ));
            c.useMediaQuery = f.default;
            var d = l(u(
              /*! ./Component */
              "./src/Component.ts"
            ));
            c.default = d.default;
            var p = l(u(
              /*! ./toQuery */
              "./src/toQuery.ts"
            ));
            c.toQuery = p.default;
            var M = l(u(
              /*! ./Context */
              "./src/Context.ts"
            ));
            c.Context = M.default;
          }
        ),
        /***/
        "./src/mediaQuery.ts": (
          /*!***************************!*\
            !*** ./src/mediaQuery.ts ***!
            \***************************/
          /***/
          function(a, c, u) {
            var l = this && this.__assign || function() {
              return l = Object.assign || function(E) {
                for (var T, F = 1, _ = arguments.length; F < _; F++) {
                  T = arguments[F];
                  for (var G in T)
                    Object.prototype.hasOwnProperty.call(T, G) && (E[G] = T[G]);
                }
                return E;
              }, l.apply(this, arguments);
            }, f = this && this.__rest || function(E, T) {
              var F = {};
              for (var _ in E)
                Object.prototype.hasOwnProperty.call(E, _) && T.indexOf(_) < 0 && (F[_] = E[_]);
              if (E != null && typeof Object.getOwnPropertySymbols == "function")
                for (var G = 0, _ = Object.getOwnPropertySymbols(E); G < _.length; G++)
                  T.indexOf(_[G]) < 0 && Object.prototype.propertyIsEnumerable.call(E, _[G]) && (F[_[G]] = E[_[G]]);
              return F;
            }, d = this && this.__importDefault || function(E) {
              return E && E.__esModule ? E : { default: E };
            };
            Object.defineProperty(c, "__esModule", { value: !0 });
            var p = d(u(
              /*! prop-types */
              "./node_modules/prop-types/index.js"
            )), M = p.default.oneOfType([
              p.default.string,
              p.default.number
            ]), y = {
              all: p.default.bool,
              grid: p.default.bool,
              aural: p.default.bool,
              braille: p.default.bool,
              handheld: p.default.bool,
              print: p.default.bool,
              projection: p.default.bool,
              screen: p.default.bool,
              tty: p.default.bool,
              tv: p.default.bool,
              embossed: p.default.bool
            }, m = {
              orientation: p.default.oneOf([
                "portrait",
                "landscape"
              ]),
              scan: p.default.oneOf([
                "progressive",
                "interlace"
              ]),
              aspectRatio: p.default.string,
              deviceAspectRatio: p.default.string,
              height: M,
              deviceHeight: M,
              width: M,
              deviceWidth: M,
              color: p.default.bool,
              colorIndex: p.default.bool,
              monochrome: p.default.bool,
              resolution: M,
              type: Object.keys(y)
            };
            m.type;
            var w = f(
              m,
              ["type"]
            ), D = l({ minAspectRatio: p.default.string, maxAspectRatio: p.default.string, minDeviceAspectRatio: p.default.string, maxDeviceAspectRatio: p.default.string, minHeight: M, maxHeight: M, minDeviceHeight: M, maxDeviceHeight: M, minWidth: M, maxWidth: M, minDeviceWidth: M, maxDeviceWidth: M, minColor: p.default.number, maxColor: p.default.number, minColorIndex: p.default.number, maxColorIndex: p.default.number, minMonochrome: p.default.number, maxMonochrome: p.default.number, minResolution: M, maxResolution: M }, w), N = l(l({}, y), D);
            c.default = {
              all: N,
              types: y,
              matchers: m,
              features: D
            };
          }
        ),
        /***/
        "./src/toQuery.ts": (
          /*!************************!*\
            !*** ./src/toQuery.ts ***!
            \************************/
          /***/
          function(a, c, u) {
            var l = this && this.__importDefault || function(w) {
              return w && w.__esModule ? w : { default: w };
            };
            Object.defineProperty(c, "__esModule", { value: !0 });
            var f = l(u(
              /*! hyphenate-style-name */
              "./node_modules/hyphenate-style-name/index.js"
            )), d = l(u(
              /*! ./mediaQuery */
              "./src/mediaQuery.ts"
            )), p = function(w) {
              return "not ".concat(w);
            }, M = function(w, D) {
              var N = (0, f.default)(w);
              return typeof D == "number" && (D = "".concat(D, "px")), D === !0 ? N : D === !1 ? p(N) : "(".concat(N, ": ").concat(D, ")");
            }, y = function(w) {
              return w.join(" and ");
            }, m = function(w) {
              var D = [];
              return Object.keys(d.default.all).forEach(function(N) {
                var E = w[N];
                E != null && D.push(M(N, E));
              }), y(D);
            };
            c.default = m;
          }
        ),
        /***/
        "./src/useMediaQuery.ts": (
          /*!******************************!*\
            !*** ./src/useMediaQuery.ts ***!
            \******************************/
          /***/
          function(a, c, u) {
            var l = this && this.__importDefault || function(Q) {
              return Q && Q.__esModule ? Q : { default: Q };
            };
            Object.defineProperty(c, "__esModule", { value: !0 });
            var f = u(
              /*! react */
              "react"
            ), d = l(u(
              /*! matchmediaquery */
              "./node_modules/matchmediaquery/index.js"
            )), p = l(u(
              /*! hyphenate-style-name */
              "./node_modules/hyphenate-style-name/index.js"
            )), M = u(
              /*! shallow-equal */
              "./node_modules/shallow-equal/dist/index.esm.js"
            ), y = l(u(
              /*! ./toQuery */
              "./src/toQuery.ts"
            )), m = l(u(
              /*! ./Context */
              "./src/Context.ts"
            )), w = function(Q) {
              return Q.query || (0, y.default)(Q);
            }, D = function(Q) {
              if (Q) {
                var K = Object.keys(Q);
                return K.reduce(function(Z, re) {
                  return Z[(0, p.default)(re)] = Q[re], Z;
                }, {});
              }
            }, N = function() {
              var Q = (0, f.useRef)(!1);
              return (0, f.useEffect)(function() {
                Q.current = !0;
              }, []), Q.current;
            }, E = function(Q) {
              var K = (0, f.useContext)(m.default), Z = function() {
                return D(Q) || D(K);
              }, re = (0, f.useState)(Z), U = re[0], j = re[1];
              return (0, f.useEffect)(function() {
                var C = Z();
                (0, M.shallowEqualObjects)(U, C) || j(C);
              }, [Q, K]), U;
            }, T = function(Q) {
              var K = function() {
                return w(Q);
              }, Z = (0, f.useState)(K), re = Z[0], U = Z[1];
              return (0, f.useEffect)(function() {
                var j = K();
                re !== j && U(j);
              }, [Q]), re;
            }, F = function(Q, K) {
              var Z = function() {
                return (0, d.default)(Q, K || {}, !!K);
              }, re = (0, f.useState)(Z), U = re[0], j = re[1], C = N();
              return (0, f.useEffect)(function() {
                if (C) {
                  var V = Z();
                  return j(V), function() {
                    V && V.dispose();
                  };
                }
              }, [Q, K]), U;
            }, _ = function(Q) {
              var K = (0, f.useState)(Q.matches), Z = K[0], re = K[1];
              return (0, f.useEffect)(function() {
                var U = function(j) {
                  re(j.matches);
                };
                return Q.addListener(U), re(Q.matches), function() {
                  Q.removeListener(U);
                };
              }, [Q]), Z;
            }, G = function(Q, K, Z) {
              var re = E(K), U = T(Q);
              if (!U)
                throw new Error("Invalid or missing MediaQuery!");
              var j = F(U, re), C = _(j), V = N();
              return (0, f.useEffect)(function() {
                V && Z && Z(C);
              }, [C]), (0, f.useEffect)(function() {
                return function() {
                  j && j.dispose();
                };
              }, []), C;
            };
            c.default = G;
          }
        ),
        /***/
        react: (
          /*!**************************************************************************************!*\
            !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
            \**************************************************************************************/
          /***/
          (a) => {
            a.exports = n;
          }
        )
        /******/
      }, o = {};
      function i(a) {
        var c = o[a];
        if (c !== void 0)
          return c.exports;
        var u = o[a] = {
          /******/
          // no module.id needed
          /******/
          // no module.loaded needed
          /******/
          exports: {}
          /******/
        };
        return r[a].call(u.exports, u, u.exports, i), u.exports;
      }
      i.d = (a, c) => {
        for (var u in c)
          i.o(c, u) && !i.o(a, u) && Object.defineProperty(a, u, { enumerable: !0, get: c[u] });
      }, i.o = (a, c) => Object.prototype.hasOwnProperty.call(a, c), i.r = (a) => {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(a, "__esModule", { value: !0 });
      };
      var s = i("./src/index.ts");
      return s;
    })()
  ));
})(kf);
var XM = kf.exports;
const yc = /* @__PURE__ */ vi(XM), ZM = {
  main: "#9E1E32",
  lighter: "#AB2339",
  darker: "#8E1729",
  secondary: "#F57C00",
  bgMain: "#FFFFFF",
  bgSide: "#FAFAFA",
  text1: "#333333",
  text2: "#606060",
  text3: "#B4B4B4",
  card1: "#FFFFFF",
  card2: "#EEEEEE",
  card3: "#E5E5E5"
}, ey = {
  main: "#CB3243",
  lighter: "#D5919A",
  darker: "#1E1315",
  secondary: "#FFCB80",
  bgMain: "#1F2022",
  bgSide: "#242527",
  text1: "#D7D7D7",
  text2: "#A1A1A1",
  text3: "#585858",
  card1: "#2C2C2C",
  card2: "#353535",
  card3: "#232323"
}, ty = {
  sun: "#FFC000",
  moon: "#F7E7CE"
}, ny = {
  dark: {
    fall: "#9A5306",
    winter: "#0073A9",
    spring: "#8F0066",
    summer: "#CB5E00"
  },
  light: {
    fall: "#C16808",
    winter: "#3AC0FF",
    spring: "#FF65D3",
    summer: "#FF7701"
  }
}, $e = {
  light: ZM,
  dark: ey,
  icon: ty,
  quarter: ny
};
function de() {
  return de = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, de.apply(this, arguments);
}
function We(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var ta = { exports: {} }, Re = {};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mc;
function ry() {
  if (mc)
    return Re;
  mc = 1;
  var e = 60103, t = 60106, n = 60107, r = 60108, o = 60114, i = 60109, s = 60110, a = 60112, c = 60113, u = 60120, l = 60115, f = 60116, d = 60121, p = 60122, M = 60117, y = 60129, m = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var w = Symbol.for;
    e = w("react.element"), t = w("react.portal"), n = w("react.fragment"), r = w("react.strict_mode"), o = w("react.profiler"), i = w("react.provider"), s = w("react.context"), a = w("react.forward_ref"), c = w("react.suspense"), u = w("react.suspense_list"), l = w("react.memo"), f = w("react.lazy"), d = w("react.block"), p = w("react.server.block"), M = w("react.fundamental"), y = w("react.debug_trace_mode"), m = w("react.legacy_hidden");
  }
  function D(U) {
    if (typeof U == "object" && U !== null) {
      var j = U.$$typeof;
      switch (j) {
        case e:
          switch (U = U.type, U) {
            case n:
            case o:
            case r:
            case c:
            case u:
              return U;
            default:
              switch (U = U && U.$$typeof, U) {
                case s:
                case a:
                case f:
                case l:
                case i:
                  return U;
                default:
                  return j;
              }
          }
        case t:
          return j;
      }
    }
  }
  var N = i, E = e, T = a, F = n, _ = f, G = l, Q = t, K = o, Z = r, re = c;
  return Re.ContextConsumer = s, Re.ContextProvider = N, Re.Element = E, Re.ForwardRef = T, Re.Fragment = F, Re.Lazy = _, Re.Memo = G, Re.Portal = Q, Re.Profiler = K, Re.StrictMode = Z, Re.Suspense = re, Re.isAsyncMode = function() {
    return !1;
  }, Re.isConcurrentMode = function() {
    return !1;
  }, Re.isContextConsumer = function(U) {
    return D(U) === s;
  }, Re.isContextProvider = function(U) {
    return D(U) === i;
  }, Re.isElement = function(U) {
    return typeof U == "object" && U !== null && U.$$typeof === e;
  }, Re.isForwardRef = function(U) {
    return D(U) === a;
  }, Re.isFragment = function(U) {
    return D(U) === n;
  }, Re.isLazy = function(U) {
    return D(U) === f;
  }, Re.isMemo = function(U) {
    return D(U) === l;
  }, Re.isPortal = function(U) {
    return D(U) === t;
  }, Re.isProfiler = function(U) {
    return D(U) === o;
  }, Re.isStrictMode = function(U) {
    return D(U) === r;
  }, Re.isSuspense = function(U) {
    return D(U) === c;
  }, Re.isValidElementType = function(U) {
    return typeof U == "string" || typeof U == "function" || U === n || U === o || U === y || U === r || U === c || U === u || U === m || typeof U == "object" && U !== null && (U.$$typeof === f || U.$$typeof === l || U.$$typeof === i || U.$$typeof === s || U.$$typeof === a || U.$$typeof === M || U.$$typeof === d || U[0] === p);
  }, Re.typeOf = D, Re;
}
var Ye = {};
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vc;
function iy() {
  return vc || (vc = 1, process.env.NODE_ENV !== "production" && function() {
    var e = 60103, t = 60106, n = 60107, r = 60108, o = 60114, i = 60109, s = 60110, a = 60112, c = 60113, u = 60120, l = 60115, f = 60116, d = 60121, p = 60122, M = 60117, y = 60129, m = 60131;
    if (typeof Symbol == "function" && Symbol.for) {
      var w = Symbol.for;
      e = w("react.element"), t = w("react.portal"), n = w("react.fragment"), r = w("react.strict_mode"), o = w("react.profiler"), i = w("react.provider"), s = w("react.context"), a = w("react.forward_ref"), c = w("react.suspense"), u = w("react.suspense_list"), l = w("react.memo"), f = w("react.lazy"), d = w("react.block"), p = w("react.server.block"), M = w("react.fundamental"), w("react.scope"), w("react.opaque.id"), y = w("react.debug_trace_mode"), w("react.offscreen"), m = w("react.legacy_hidden");
    }
    var D = !1;
    function N(L) {
      return !!(typeof L == "string" || typeof L == "function" || L === n || L === o || L === y || L === r || L === c || L === u || L === m || D || typeof L == "object" && L !== null && (L.$$typeof === f || L.$$typeof === l || L.$$typeof === i || L.$$typeof === s || L.$$typeof === a || L.$$typeof === M || L.$$typeof === d || L[0] === p));
    }
    function E(L) {
      if (typeof L == "object" && L !== null) {
        var R = L.$$typeof;
        switch (R) {
          case e:
            var ce = L.type;
            switch (ce) {
              case n:
              case o:
              case r:
              case c:
              case u:
                return ce;
              default:
                var X = ce && ce.$$typeof;
                switch (X) {
                  case s:
                  case a:
                  case f:
                  case l:
                  case i:
                    return X;
                  default:
                    return R;
                }
            }
          case t:
            return R;
        }
      }
    }
    var T = s, F = i, _ = e, G = a, Q = n, K = f, Z = l, re = t, U = o, j = r, C = c, V = !1, S = !1;
    function q(L) {
      return V || (V = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ae(L) {
      return S || (S = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function O(L) {
      return E(L) === s;
    }
    function z(L) {
      return E(L) === i;
    }
    function Y(L) {
      return typeof L == "object" && L !== null && L.$$typeof === e;
    }
    function W(L) {
      return E(L) === a;
    }
    function B(L) {
      return E(L) === n;
    }
    function ee(L) {
      return E(L) === f;
    }
    function b(L) {
      return E(L) === l;
    }
    function ne(L) {
      return E(L) === t;
    }
    function $(L) {
      return E(L) === o;
    }
    function ie(L) {
      return E(L) === r;
    }
    function P(L) {
      return E(L) === c;
    }
    Ye.ContextConsumer = T, Ye.ContextProvider = F, Ye.Element = _, Ye.ForwardRef = G, Ye.Fragment = Q, Ye.Lazy = K, Ye.Memo = Z, Ye.Portal = re, Ye.Profiler = U, Ye.StrictMode = j, Ye.Suspense = C, Ye.isAsyncMode = q, Ye.isConcurrentMode = ae, Ye.isContextConsumer = O, Ye.isContextProvider = z, Ye.isElement = Y, Ye.isForwardRef = W, Ye.isFragment = B, Ye.isLazy = ee, Ye.isMemo = b, Ye.isPortal = ne, Ye.isProfiler = $, Ye.isStrictMode = ie, Ye.isSuspense = P, Ye.isValidElementType = N, Ye.typeOf = E;
  }()), Ye;
}
process.env.NODE_ENV === "production" ? ta.exports = ry() : ta.exports = iy();
var zf = ta.exports;
function Uf(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Uf(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function tt() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Uf(e)) && (r && (r += " "), r += t);
  return r;
}
function Pf(e) {
  return typeof e == "string";
}
function Di(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...r) {
    return e(...r) || t(...r);
  };
}
function ir(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function Rf(e) {
  if (!ir(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Rf(e[n]);
  }), t;
}
function Xt(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? de({}, e) : e;
  return ir(e) && ir(t) && Object.keys(t).forEach((o) => {
    o !== "__proto__" && (ir(t[o]) && o in e && ir(e[o]) ? r[o] = Xt(e[o], t[o], n) : n.clone ? r[o] = ir(t[o]) ? Rf(t[o]) : t[o] : r[o] = t[o]);
  }), r;
}
function oy(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Yf(e, t, n, r, o) {
  const i = e[t], s = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let a;
  const c = i.type;
  return typeof c == "function" && !oy(c) && (a = "Did you accidentally use a plain function component for an element instead?"), a !== void 0 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${a} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Ff = Di(v.element, Yf);
Ff.isRequired = Di(v.element.isRequired, Yf);
const Ii = Ff;
function sy(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function ay(e, t, n, r, o) {
  const i = e[t], s = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let a;
  return typeof i == "function" && !sy(i) && (a = "Did you accidentally provide a plain function component instead?"), a !== void 0 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${a} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Qf = Di(v.elementType, ay), uy = "exact-prop: ​";
function Bf(e) {
  return process.env.NODE_ENV === "production" ? e : de({}, e, {
    [uy]: (t) => {
      const n = Object.keys(t).filter((r) => !e.hasOwnProperty(r));
      return n.length > 0 ? new Error(`The following props are not supported: ${n.map((r) => `\`${r}\``).join(", ")}. Please remove them.`) : null;
    }
  });
}
function oi(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const cy = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function ly(e) {
  const t = `${e}`.match(cy);
  return t && t[1] || "";
}
function $f(e, t = "") {
  return e.displayName || e.name || ly(e) || t;
}
function wc(e, t, n) {
  const r = $f(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function fy(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return $f(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case ti.ForwardRef:
          return wc(e, e.render, "ForwardRef");
        case ti.Memo:
          return wc(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Mr(e, t, n, r, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = e[t], s = o || t;
  return i == null ? null : i && i.nodeType !== 1 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an HTMLElement.`) : null;
}
const dy = v.oneOfType([v.func, v.object]), Wf = dy;
function lr(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : oi(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Dc(...e) {
  return e.reduce((t, n) => n == null ? t : function(...o) {
    t.apply(this, o), n.apply(this, o);
  }, () => {
  });
}
function hy(e, t = 166) {
  let n;
  function r(...o) {
    const i = () => {
      e.apply(this, o);
    };
    clearTimeout(n), n = setTimeout(i, t);
  }
  return r.clear = () => {
    clearTimeout(n);
  }, r;
}
function _t(e) {
  return e && e.ownerDocument || document;
}
function si(e) {
  return _t(e).defaultView || window;
}
function na(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const gy = typeof window < "u" ? te.useLayoutEffect : te.useEffect, ai = gy;
function ur(e) {
  const t = te.useRef(e);
  return ai(() => {
    t.current = e;
  }), te.useCallback((...n) => (
    // @ts-expect-error hide `this`
    // tslint:disable-next-line:ban-comma-operator
    (0, t.current)(...n)
  ), []);
}
function mt(...e) {
  return te.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      na(n, t);
    });
  }, e);
}
let bo = !0, ra = !1, Ic;
const py = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0
};
function My(e) {
  const {
    type: t,
    tagName: n
  } = e;
  return !!(n === "INPUT" && py[t] && !e.readOnly || n === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function yy(e) {
  e.metaKey || e.altKey || e.ctrlKey || (bo = !0);
}
function ys() {
  bo = !1;
}
function my() {
  this.visibilityState === "hidden" && ra && (bo = !0);
}
function vy(e) {
  e.addEventListener("keydown", yy, !0), e.addEventListener("mousedown", ys, !0), e.addEventListener("pointerdown", ys, !0), e.addEventListener("touchstart", ys, !0), e.addEventListener("visibilitychange", my, !0);
}
function wy(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return bo || My(t);
}
function Dy() {
  const e = te.useCallback((o) => {
    o != null && vy(o.ownerDocument);
  }, []), t = te.useRef(!1);
  function n() {
    return t.current ? (ra = !0, window.clearTimeout(Ic), Ic = window.setTimeout(() => {
      ra = !1;
    }, 100), t.current = !1, !0) : !1;
  }
  function r(o) {
    return wy(o) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: r,
    onBlur: n,
    ref: e
  };
}
function Vf(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
function Iy(e) {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "NaN" : Number.isFinite(e) ? e !== Math.floor(e) ? "float" : "number" : "Infinity";
    case "object":
      return e === null ? "null" : e.constructor.name;
    default:
      return t;
  }
}
function Ay(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}
const Ey = Number.isInteger || Ay;
function Hf(e, t, n, r) {
  const o = e[t];
  if (o == null || !Ey(o)) {
    const i = Iy(o);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${i}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function qf(e, t, ...n) {
  return e[t] === void 0 ? null : Hf(e, t, ...n);
}
function ia() {
  return null;
}
qf.isRequired = Hf;
ia.isRequired = ia;
const Kf = process.env.NODE_ENV === "production" ? ia : qf;
function Gf(e, t) {
  const n = de({}, t);
  return Object.keys(e).forEach((r) => {
    if (r.toString().match(/^(components|slots)$/))
      n[r] = de({}, e[r], n[r]);
    else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
      const o = e[r] || {}, i = t[r];
      n[r] = {}, !i || !Object.keys(i) ? n[r] = o : !o || !Object.keys(o) ? n[r] = i : (n[r] = de({}, i), Object.keys(o).forEach((s) => {
        n[r][s] = Gf(o[s], i[s]);
      }));
    } else
      n[r] === void 0 && (n[r] = e[r]);
  }), n;
}
function wn(e, t, n = void 0) {
  const r = {};
  return Object.keys(e).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (o) => {
      r[o] = e[o].reduce((i, s) => {
        if (s) {
          const a = t(s);
          a !== "" && i.push(a), n && n[s] && i.push(n[s]);
        }
        return i;
      }, []).join(" ");
    }
  ), r;
}
const Ac = (e) => e, Ty = () => {
  let e = Ac;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Ac;
    }
  };
}, Ny = Ty(), jy = Ny, by = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function Bt(e, t, n = "Mui") {
  const r = by[t];
  return r ? `${n}-${r}` : `${jy.generate(e)}-${t}`;
}
function bt(e, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = Bt(e, o, n);
  }), r;
}
function Sy(e) {
  return typeof e == "function" ? e() : e;
}
const ro = /* @__PURE__ */ te.forwardRef(function(t, n) {
  const {
    children: r,
    container: o,
    disablePortal: i = !1
  } = t, [s, a] = te.useState(null), c = mt(/* @__PURE__ */ te.isValidElement(r) ? r.ref : null, n);
  return ai(() => {
    i || a(Sy(o) || document.body);
  }, [o, i]), ai(() => {
    if (s && !i)
      return na(n, s), () => {
        na(n, null);
      };
  }, [n, s, i]), i ? /* @__PURE__ */ te.isValidElement(r) ? /* @__PURE__ */ te.cloneElement(r, {
    ref: c
  }) : r : s && /* @__PURE__ */ Gh.createPortal(r, s);
});
process.env.NODE_ENV !== "production" && (ro.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The children to render into the `container`.
   */
  children: v.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: v.oneOfType([Mr, v.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: v.bool
});
process.env.NODE_ENV !== "production" && (ro["propTypes"] = Bf(ro.propTypes));
const xy = ro;
function Cy(e) {
  const t = _t(e);
  return t.body === e ? si(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Gr(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Ec(e) {
  return parseInt(si(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function Tc(e, t, n, r = [], o) {
  const i = [t, n, ...r], s = ["TEMPLATE", "SCRIPT", "STYLE"];
  [].forEach.call(e.children, (a) => {
    i.indexOf(a) === -1 && s.indexOf(a.tagName) === -1 && Gr(a, o);
  });
}
function ms(e, t) {
  let n = -1;
  return e.some((r, o) => t(r) ? (n = o, !0) : !1), n;
}
function Oy(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    if (Cy(r)) {
      const c = Vf(_t(r));
      n.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${Ec(r) + c}px`;
      const u = _t(r).querySelectorAll(".mui-fixed");
      [].forEach.call(u, (l) => {
        n.push({
          value: l.style.paddingRight,
          property: "padding-right",
          el: l
        }), l.style.paddingRight = `${Ec(l) + c}px`;
      });
    }
    const i = r.parentElement, s = si(r), a = (i == null ? void 0 : i.nodeName) === "HTML" && s.getComputedStyle(i).overflowY === "scroll" ? i : r;
    n.push({
      value: a.style.overflow,
      property: "overflow",
      el: a
    }, {
      value: a.style.overflowX,
      property: "overflow-x",
      el: a
    }, {
      value: a.style.overflowY,
      property: "overflow-y",
      el: a
    }), a.style.overflow = "hidden";
  }
  return () => {
    n.forEach(({
      value: i,
      el: s,
      property: a
    }) => {
      i ? s.style.setProperty(a, i) : s.style.removeProperty(a);
    });
  };
}
function Ly(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class _y {
  constructor() {
    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && Gr(t.modalRef, !1);
    const o = Ly(n);
    Tc(n, t.mount, t.modalRef, o, !0);
    const i = ms(this.containers, (s) => s.container === n);
    return i !== -1 ? (this.containers[i].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: o
    }), r);
  }
  mount(t, n) {
    const r = ms(this.containers, (i) => i.modals.indexOf(t) !== -1), o = this.containers[r];
    o.restore || (o.restore = Oy(o, n));
  }
  remove(t) {
    const n = this.modals.indexOf(t);
    if (n === -1)
      return n;
    const r = ms(this.containers, (i) => i.modals.indexOf(t) !== -1), o = this.containers[r];
    if (o.modals.splice(o.modals.indexOf(t), 1), this.modals.splice(n, 1), o.modals.length === 0)
      o.restore && o.restore(), t.modalRef && Gr(t.modalRef, !0), Tc(o.container, t.mount, t.modalRef, o.hiddenSiblings, !1), this.containers.splice(r, 1);
    else {
      const i = o.modals[o.modals.length - 1];
      i.modalRef && Gr(i.modalRef, !1);
    }
    return n;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const ky = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function zy(e) {
  const t = parseInt(e.getAttribute("tabindex"), 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function Uy(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function Py(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || Uy(e));
}
function Ry(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(ky)).forEach((r, o) => {
    const i = zy(r);
    i === -1 || !Py(r) || (i === 0 ? t.push(r) : n.push({
      documentOrder: o,
      tabIndex: i,
      node: r
    }));
  }), n.sort((r, o) => r.tabIndex === o.tabIndex ? r.documentOrder - o.documentOrder : r.tabIndex - o.tabIndex).map((r) => r.node).concat(t);
}
function Yy() {
  return !0;
}
function io(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: o = !1,
    getTabbable: i = Ry,
    isEnabled: s = Yy,
    open: a
  } = e, c = te.useRef(), u = te.useRef(null), l = te.useRef(null), f = te.useRef(null), d = te.useRef(null), p = te.useRef(!1), M = te.useRef(null), y = mt(t.ref, M), m = te.useRef(null);
  te.useEffect(() => {
    !a || !M.current || (p.current = !n);
  }, [n, a]), te.useEffect(() => {
    if (!a || !M.current)
      return;
    const N = _t(M.current);
    return M.current.contains(N.activeElement) || (M.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), M.current.setAttribute("tabIndex", -1)), p.current && M.current.focus()), () => {
      o || (f.current && f.current.focus && (c.current = !0, f.current.focus()), f.current = null);
    };
  }, [a]), te.useEffect(() => {
    if (!a || !M.current)
      return;
    const N = _t(M.current), E = (_) => {
      const {
        current: G
      } = M;
      if (G !== null) {
        if (!N.hasFocus() || r || !s() || c.current) {
          c.current = !1;
          return;
        }
        if (!G.contains(N.activeElement)) {
          if (_ && d.current !== _.target || N.activeElement !== d.current)
            d.current = null;
          else if (d.current !== null)
            return;
          if (!p.current)
            return;
          let Z = [];
          if ((N.activeElement === u.current || N.activeElement === l.current) && (Z = i(M.current)), Z.length > 0) {
            var Q, K;
            const re = !!((Q = m.current) != null && Q.shiftKey && ((K = m.current) == null ? void 0 : K.key) === "Tab"), U = Z[0], j = Z[Z.length - 1];
            re ? j.focus() : U.focus();
          } else
            G.focus();
        }
      }
    }, T = (_) => {
      m.current = _, !(r || !s() || _.key !== "Tab") && N.activeElement === M.current && _.shiftKey && (c.current = !0, l.current.focus());
    };
    N.addEventListener("focusin", E), N.addEventListener("keydown", T, !0);
    const F = setInterval(() => {
      N.activeElement.tagName === "BODY" && E();
    }, 50);
    return () => {
      clearInterval(F), N.removeEventListener("focusin", E), N.removeEventListener("keydown", T, !0);
    };
  }, [n, r, o, s, a, i]);
  const w = (N) => {
    f.current === null && (f.current = N.relatedTarget), p.current = !0, d.current = N.target;
    const E = t.props.onFocus;
    E && E(N);
  }, D = (N) => {
    f.current === null && (f.current = N.relatedTarget), p.current = !0;
  };
  return /* @__PURE__ */ fe.jsxs(te.Fragment, {
    children: [/* @__PURE__ */ fe.jsx("div", {
      tabIndex: 0,
      onFocus: D,
      ref: u,
      "data-test": "sentinelStart"
    }), /* @__PURE__ */ te.cloneElement(t, {
      ref: y,
      onFocus: w
    }), /* @__PURE__ */ fe.jsx("div", {
      tabIndex: 0,
      onFocus: D,
      ref: l,
      "data-test": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (io.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A single child content element.
   */
  children: Ii,
  /**
   * If `true`, the trap focus will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any trap focus children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the trap focus less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: v.bool,
  /**
   * If `true`, the trap focus will not prevent focus from leaving the trap focus while open.
   *
   * Generally this should never be set to `true` as it makes the trap focus less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: v.bool,
  /**
   * If `true`, the trap focus will not restore focus to previously focused element once
   * trap focus is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: v.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: v.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple trap focus mounted at the same time.
   * @default function defaultIsEnabled() {
   *   return true;
   * }
   */
  isEnabled: v.func,
  /**
   * If `true`, focus is locked.
   */
  open: v.bool.isRequired
});
process.env.NODE_ENV !== "production" && (io["propTypes"] = Bf(io.propTypes));
function Fy(e) {
  return Bt("MuiModal", e);
}
bt("MuiModal", ["root", "hidden"]);
const Qy = ["BackdropComponent", "BackdropProps", "children", "classes", "className", "closeAfterTransition", "component", "components", "componentsProps", "container", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onKeyDown", "open", "theme", "onTransitionEnter", "onTransitionExited"], By = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return wn({
    root: ["root", !t && n && "hidden"]
  }, Fy, r);
};
function $y(e) {
  return typeof e == "function" ? e() : e;
}
function Wy(e) {
  return e.children ? e.children.props.hasOwnProperty("in") : !1;
}
const Vy = new _y(), Jf = /* @__PURE__ */ te.forwardRef(function(t, n) {
  const {
    BackdropComponent: r,
    BackdropProps: o,
    children: i,
    classes: s,
    className: a,
    closeAfterTransition: c = !1,
    component: u = "div",
    components: l = {},
    componentsProps: f = {},
    container: d,
    disableAutoFocus: p = !1,
    disableEnforceFocus: M = !1,
    disableEscapeKeyDown: y = !1,
    disablePortal: m = !1,
    disableRestoreFocus: w = !1,
    disableScrollLock: D = !1,
    hideBackdrop: N = !1,
    keepMounted: E = !1,
    // private
    // eslint-disable-next-line react/prop-types
    manager: T = Vy,
    onBackdropClick: F,
    onClose: _,
    onKeyDown: G,
    open: Q,
    /* eslint-disable react/prop-types */
    theme: K,
    onTransitionEnter: Z,
    onTransitionExited: re
  } = t, U = We(t, Qy), [j, C] = te.useState(!0), V = te.useRef({}), S = te.useRef(null), q = te.useRef(null), ae = mt(q, n), O = Wy(t), z = () => _t(S.current), Y = () => (V.current.modalRef = q.current, V.current.mountNode = S.current, V.current), W = () => {
    T.mount(Y(), {
      disableScrollLock: D
    }), q.current.scrollTop = 0;
  }, B = ur(() => {
    const le = $y(d) || z().body;
    T.add(Y(), le), q.current && W();
  }), ee = te.useCallback(() => T.isTopModal(Y()), [T]), b = ur((le) => {
    S.current = le, le && (Q && ee() ? W() : Gr(q.current, !0));
  }), ne = te.useCallback(() => {
    T.remove(Y());
  }, [T]);
  te.useEffect(() => () => {
    ne();
  }, [ne]), te.useEffect(() => {
    Q ? B() : (!O || !c) && ne();
  }, [Q, ne, O, c, B]);
  const $ = de({}, t, {
    classes: s,
    closeAfterTransition: c,
    disableAutoFocus: p,
    disableEnforceFocus: M,
    disableEscapeKeyDown: y,
    disablePortal: m,
    disableRestoreFocus: w,
    disableScrollLock: D,
    exited: j,
    hideBackdrop: N,
    keepMounted: E
  }), ie = By($);
  if (!E && !Q && (!O || j))
    return null;
  const P = () => {
    C(!1), Z && Z();
  }, L = () => {
    C(!0), re && re(), c && ne();
  }, R = (le) => {
    le.target === le.currentTarget && (F && F(le), _ && _(le, "backdropClick"));
  }, ce = (le) => {
    G && G(le), !(le.key !== "Escape" || !ee()) && (y || (le.stopPropagation(), _ && _(le, "escapeKeyDown")));
  }, X = {};
  i.props.tabIndex === void 0 && (X.tabIndex = "-1"), O && (X.onEnter = Dc(P, i.props.onEnter), X.onExited = Dc(L, i.props.onExited));
  const ue = l.Root || u, he = f.root || {};
  return /* @__PURE__ */ fe.jsx(xy, {
    ref: b,
    container: d,
    disablePortal: m,
    children: /* @__PURE__ */ fe.jsxs(ue, de({
      role: "presentation"
    }, he, !Pf(ue) && {
      as: u,
      ownerState: de({}, $, he.ownerState),
      theme: K
    }, U, {
      ref: ae,
      onKeyDown: ce,
      className: tt(ie.root, he.className, a),
      children: [!N && r ? /* @__PURE__ */ fe.jsx(r, de({
        "aria-hidden": !0,
        open: Q,
        onClick: R
      }, o)) : null, /* @__PURE__ */ fe.jsx(io, {
        disableEnforceFocus: M,
        disableAutoFocus: p,
        disableRestoreFocus: w,
        isEnabled: ee,
        open: Q,
        children: /* @__PURE__ */ te.cloneElement(i, X)
      })]
    }))
  });
});
process.env.NODE_ENV !== "production" && (Jf.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   */
  BackdropComponent: v.elementType,
  /**
   * Props applied to the backdrop element.
   */
  BackdropProps: v.object,
  /**
   * A single child content element.
   */
  children: Ii.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: v.object,
  /**
   * @ignore
   */
  className: v.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: v.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: v.elementType,
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: v.shape({
    Root: v.elementType
  }),
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  componentsProps: v.shape({
    root: v.object
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: v.oneOfType([Mr, v.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: v.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: v.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: v.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: v.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: v.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: v.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: v.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: v.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: v.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: v.func,
  /**
   * @ignore
   */
  onKeyDown: v.func,
  /**
   * If `true`, the component is shown.
   */
  open: v.bool.isRequired
});
const Hy = Jf;
function qy(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Ky(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Gy = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(o) {
      var i;
      r.tags.length === 0 ? r.insertionPoint ? i = r.insertionPoint.nextSibling : r.prepend ? i = r.container.firstChild : i = r.before : i = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(o, i), r.tags.push(o);
    }, this.isSpeedy = n.speedy === void 0 ? process.env.NODE_ENV === "production" : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Ky(this));
    var o = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var i = r.charCodeAt(0) === 64 && r.charCodeAt(1) === 105;
      i && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + r + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !i;
    }
    if (this.isSpeedy) {
      var s = qy(o);
      try {
        s.insertRule(r, s.cssRules.length);
      } catch (a) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(r) && console.error('There was a problem inserting the following rule: "' + r + '"', a);
      }
    } else
      o.appendChild(document.createTextNode(r));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(r) {
      return r.parentNode && r.parentNode.removeChild(r);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, e;
}(), at = "-ms-", oo = "-moz-", xe = "-webkit-", Za = "comm", eu = "rule", tu = "decl", Jy = "@import", Xf = "@keyframes", Xy = "@layer", Zy = Math.abs, So = String.fromCharCode, em = Object.assign;
function tm(e, t) {
  return rt(e, 0) ^ 45 ? (((t << 2 ^ rt(e, 0)) << 2 ^ rt(e, 1)) << 2 ^ rt(e, 2)) << 2 ^ rt(e, 3) : 0;
}
function Zf(e) {
  return e.trim();
}
function nm(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Oe(e, t, n) {
  return e.replace(t, n);
}
function oa(e, t) {
  return e.indexOf(t);
}
function rt(e, t) {
  return e.charCodeAt(t) | 0;
}
function ui(e, t, n) {
  return e.slice(t, n);
}
function Pt(e) {
  return e.length;
}
function nu(e) {
  return e.length;
}
function Li(e, t) {
  return t.push(e), e;
}
function rm(e, t) {
  return e.map(t).join("");
}
var xo = 1, yr = 1, ed = 0, ht = 0, Xe = 0, Er = "";
function Co(e, t, n, r, o, i, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: xo, column: yr, length: s, return: "" };
}
function Or(e, t) {
  return em(Co("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function im() {
  return Xe;
}
function om() {
  return Xe = ht > 0 ? rt(Er, --ht) : 0, yr--, Xe === 10 && (yr = 1, xo--), Xe;
}
function vt() {
  return Xe = ht < ed ? rt(Er, ht++) : 0, yr++, Xe === 10 && (yr = 1, xo++), Xe;
}
function Qt() {
  return rt(Er, ht);
}
function $i() {
  return ht;
}
function Ai(e, t) {
  return ui(Er, e, t);
}
function ci(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function td(e) {
  return xo = yr = 1, ed = Pt(Er = e), ht = 0, [];
}
function nd(e) {
  return Er = "", e;
}
function Wi(e) {
  return Zf(Ai(ht - 1, sa(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function sm(e) {
  for (; (Xe = Qt()) && Xe < 33; )
    vt();
  return ci(e) > 2 || ci(Xe) > 3 ? "" : " ";
}
function am(e, t) {
  for (; --t && vt() && !(Xe < 48 || Xe > 102 || Xe > 57 && Xe < 65 || Xe > 70 && Xe < 97); )
    ;
  return Ai(e, $i() + (t < 6 && Qt() == 32 && vt() == 32));
}
function sa(e) {
  for (; vt(); )
    switch (Xe) {
      case e:
        return ht;
      case 34:
      case 39:
        e !== 34 && e !== 39 && sa(Xe);
        break;
      case 40:
        e === 41 && sa(e);
        break;
      case 92:
        vt();
        break;
    }
  return ht;
}
function um(e, t) {
  for (; vt() && e + Xe !== 47 + 10; )
    if (e + Xe === 42 + 42 && Qt() === 47)
      break;
  return "/*" + Ai(t, ht - 1) + "*" + So(e === 47 ? e : vt());
}
function cm(e) {
  for (; !ci(Qt()); )
    vt();
  return Ai(e, ht);
}
function lm(e) {
  return nd(Vi("", null, null, null, [""], e = td(e), 0, [0], e));
}
function Vi(e, t, n, r, o, i, s, a, c) {
  for (var u = 0, l = 0, f = s, d = 0, p = 0, M = 0, y = 1, m = 1, w = 1, D = 0, N = "", E = o, T = i, F = r, _ = N; m; )
    switch (M = D, D = vt()) {
      case 40:
        if (M != 108 && rt(_, f - 1) == 58) {
          oa(_ += Oe(Wi(D), "&", "&\f"), "&\f") != -1 && (w = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        _ += Wi(D);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        _ += sm(M);
        break;
      case 92:
        _ += am($i() - 1, 7);
        continue;
      case 47:
        switch (Qt()) {
          case 42:
          case 47:
            Li(fm(um(vt(), $i()), t, n), c);
            break;
          default:
            _ += "/";
        }
        break;
      case 123 * y:
        a[u++] = Pt(_) * w;
      case 125 * y:
      case 59:
      case 0:
        switch (D) {
          case 0:
          case 125:
            m = 0;
          case 59 + l:
            w == -1 && (_ = Oe(_, /\f/g, "")), p > 0 && Pt(_) - f && Li(p > 32 ? jc(_ + ";", r, n, f - 1) : jc(Oe(_, " ", "") + ";", r, n, f - 2), c);
            break;
          case 59:
            _ += ";";
          default:
            if (Li(F = Nc(_, t, n, u, l, o, a, N, E = [], T = [], f), i), D === 123)
              if (l === 0)
                Vi(_, t, F, F, E, i, f, a, T);
              else
                switch (d === 99 && rt(_, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Vi(e, F, F, r && Li(Nc(e, F, F, 0, 0, o, a, N, o, E = [], f), T), o, T, f, a, r ? E : T);
                    break;
                  default:
                    Vi(_, F, F, F, [""], T, 0, a, T);
                }
        }
        u = l = p = 0, y = w = 1, N = _ = "", f = s;
        break;
      case 58:
        f = 1 + Pt(_), p = M;
      default:
        if (y < 1) {
          if (D == 123)
            --y;
          else if (D == 125 && y++ == 0 && om() == 125)
            continue;
        }
        switch (_ += So(D), D * y) {
          case 38:
            w = l > 0 ? 1 : (_ += "\f", -1);
            break;
          case 44:
            a[u++] = (Pt(_) - 1) * w, w = 1;
            break;
          case 64:
            Qt() === 45 && (_ += Wi(vt())), d = Qt(), l = f = Pt(N = _ += cm($i())), D++;
            break;
          case 45:
            M === 45 && Pt(_) == 2 && (y = 0);
        }
    }
  return i;
}
function Nc(e, t, n, r, o, i, s, a, c, u, l) {
  for (var f = o - 1, d = o === 0 ? i : [""], p = nu(d), M = 0, y = 0, m = 0; M < r; ++M)
    for (var w = 0, D = ui(e, f + 1, f = Zy(y = s[M])), N = e; w < p; ++w)
      (N = Zf(y > 0 ? d[w] + " " + D : Oe(D, /&\f/g, d[w]))) && (c[m++] = N);
  return Co(e, t, n, o === 0 ? eu : a, c, u, l);
}
function fm(e, t, n) {
  return Co(e, t, n, Za, So(im()), ui(e, 2, -2), 0);
}
function jc(e, t, n, r) {
  return Co(e, t, n, tu, ui(e, 0, r), ui(e, r + 1, -1), r);
}
function fr(e, t) {
  for (var n = "", r = nu(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function dm(e, t, n, r) {
  switch (e.type) {
    case Xy:
      if (e.children.length)
        break;
    case Jy:
    case tu:
      return e.return = e.return || e.value;
    case Za:
      return "";
    case Xf:
      return e.return = e.value + "{" + fr(e.children, r) + "}";
    case eu:
      e.value = e.props.join(",");
  }
  return Pt(n = fr(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function hm(e) {
  var t = nu(e);
  return function(n, r, o, i) {
    for (var s = "", a = 0; a < t; a++)
      s += e[a](n, r, o, i) || "";
    return s;
  };
}
function gm(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var pm = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = Qt(), o === 38 && i === 12 && (n[r] = 1), !ci(i); )
    vt();
  return Ai(t, ht);
}, Mm = function(t, n) {
  var r = -1, o = 44;
  do
    switch (ci(o)) {
      case 0:
        o === 38 && Qt() === 12 && (n[r] = 1), t[r] += pm(ht - 1, n, r);
        break;
      case 2:
        t[r] += Wi(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = Qt() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += So(o);
    }
  while (o = vt());
  return t;
}, ym = function(t, n) {
  return nd(Mm(td(t), n));
}, bc = /* @__PURE__ */ new WeakMap(), mm = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !bc.get(r)) && !o) {
      bc.set(t, !0);
      for (var i = [], s = ym(n, i), a = r.props, c = 0, u = 0; c < s.length; c++)
        for (var l = 0; l < a.length; l++, u++)
          t.props[u] = i[c] ? s[c].replace(/&\f/g, a[l]) : a[l] + " " + s[c];
    }
  }
}, vm = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
}, wm = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", Dm = function(t) {
  return t.type === "comm" && t.children.indexOf(wm) > -1;
}, Im = function(t) {
  return function(n, r, o) {
    if (!(n.type !== "rule" || t.compat)) {
      var i = n.value.match(/(:first|:nth|:nth-last)-child/g);
      if (i) {
        for (var s = !!n.parent, a = s ? n.parent.children : (
          // global rule at the root level
          o
        ), c = a.length - 1; c >= 0; c--) {
          var u = a[c];
          if (u.line < n.line)
            break;
          if (u.column < n.column) {
            if (Dm(u))
              return;
            break;
          }
        }
        i.forEach(function(l) {
          console.error('The pseudo class "' + l + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + l.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, rd = function(t) {
  return t.type.charCodeAt(1) === 105 && t.type.charCodeAt(0) === 64;
}, Am = function(t, n) {
  for (var r = t - 1; r >= 0; r--)
    if (!rd(n[r]))
      return !0;
  return !1;
}, Sc = function(t) {
  t.type = "", t.value = "", t.return = "", t.children = "", t.props = "";
}, Em = function(t, n, r) {
  rd(t) && (t.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), Sc(t)) : Am(n, r) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), Sc(t)));
};
function id(e, t) {
  switch (tm(e, t)) {
    case 5103:
      return xe + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return xe + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return xe + e + oo + e + at + e + e;
    case 6828:
    case 4268:
      return xe + e + at + e + e;
    case 6165:
      return xe + e + at + "flex-" + e + e;
    case 5187:
      return xe + e + Oe(e, /(\w+).+(:[^]+)/, xe + "box-$1$2" + at + "flex-$1$2") + e;
    case 5443:
      return xe + e + at + "flex-item-" + Oe(e, /flex-|-self/, "") + e;
    case 4675:
      return xe + e + at + "flex-line-pack" + Oe(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return xe + e + at + Oe(e, "shrink", "negative") + e;
    case 5292:
      return xe + e + at + Oe(e, "basis", "preferred-size") + e;
    case 6060:
      return xe + "box-" + Oe(e, "-grow", "") + xe + e + at + Oe(e, "grow", "positive") + e;
    case 4554:
      return xe + Oe(e, /([^-])(transform)/g, "$1" + xe + "$2") + e;
    case 6187:
      return Oe(Oe(Oe(e, /(zoom-|grab)/, xe + "$1"), /(image-set)/, xe + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return Oe(e, /(image-set\([^]*)/, xe + "$1$`$1");
    case 4968:
      return Oe(Oe(e, /(.+:)(flex-)?(.*)/, xe + "box-pack:$3" + at + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + xe + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Oe(e, /(.+)-inline(.+)/, xe + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Pt(e) - 1 - t > 6)
        switch (rt(e, t + 1)) {
          case 109:
            if (rt(e, t + 4) !== 45)
              break;
          case 102:
            return Oe(e, /(.+:)(.+)-([^]+)/, "$1" + xe + "$2-$3$1" + oo + (rt(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~oa(e, "stretch") ? id(Oe(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (rt(e, t + 1) !== 115)
        break;
    case 6444:
      switch (rt(e, Pt(e) - 3 - (~oa(e, "!important") && 10))) {
        case 107:
          return Oe(e, ":", ":" + xe) + e;
        case 101:
          return Oe(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + xe + (rt(e, 14) === 45 ? "inline-" : "") + "box$3$1" + xe + "$2$3$1" + at + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (rt(e, t + 11)) {
        case 114:
          return xe + e + at + Oe(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return xe + e + at + Oe(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return xe + e + at + Oe(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return xe + e + at + e + e;
  }
  return e;
}
var Tm = function(t, n, r, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case tu:
        t.return = id(t.value, t.length);
        break;
      case Xf:
        return fr([Or(t, {
          value: Oe(t.value, "@", "@" + xe)
        })], o);
      case eu:
        if (t.length)
          return rm(t.props, function(i) {
            switch (nm(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return fr([Or(t, {
                  props: [Oe(i, /:(read-\w+)/, ":" + oo + "$1")]
                })], o);
              case "::placeholder":
                return fr([Or(t, {
                  props: [Oe(i, /:(plac\w+)/, ":" + xe + "input-$1")]
                }), Or(t, {
                  props: [Oe(i, /:(plac\w+)/, ":" + oo + "$1")]
                }), Or(t, {
                  props: [Oe(i, /:(plac\w+)/, at + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, Nm = [Tm], jm = function(t) {
  var n = t.key;
  if (process.env.NODE_ENV !== "production" && !n)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(y) {
      var m = y.getAttribute("data-emotion");
      m.indexOf(" ") !== -1 && (document.head.appendChild(y), y.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || Nm;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(n))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + n + '" was passed');
  var i = {}, s, a = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(y) {
      for (var m = y.getAttribute("data-emotion").split(" "), w = 1; w < m.length; w++)
        i[m[w]] = !0;
      a.push(y);
    }
  );
  var c, u = [mm, vm];
  process.env.NODE_ENV !== "production" && u.push(Im({
    get compat() {
      return M.compat;
    }
  }), Em);
  {
    var l, f = [dm, process.env.NODE_ENV !== "production" ? function(y) {
      y.root || (y.return ? l.insert(y.return) : y.value && y.type !== Za && l.insert(y.value + "{}"));
    } : gm(function(y) {
      l.insert(y);
    })], d = hm(u.concat(o, f)), p = function(m) {
      return fr(lm(m), d);
    };
    c = function(m, w, D, N) {
      l = D, process.env.NODE_ENV !== "production" && w.map !== void 0 && (l = {
        insert: function(T) {
          D.insert(T + w.map);
        }
      }), p(m ? m + "{" + w.styles + "}" : w.styles), N && (M.inserted[w.name] = !0);
    };
  }
  var M = {
    key: n,
    sheet: new Gy({
      key: n,
      container: s,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: c
  };
  return M.sheet.hydrate(a), M;
}, bm = !0;
function ru(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : r += o + " ";
  }), r;
}
var Oo = function(t, n, r) {
  var o = t.key + "-" + n.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (r === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  bm === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, Lo = function(t, n, r) {
  Oo(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function Sm(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var xm = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, xc = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Cm = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", Om = /[A-Z]|^ms/g, od = /_EMO_([^_]+?)_([^]*?)_EMO_/g, iu = function(t) {
  return t.charCodeAt(1) === 45;
}, Cc = function(t) {
  return t != null && typeof t != "boolean";
}, vs = /* @__PURE__ */ ff(function(e) {
  return iu(e) ? e : e.replace(Om, "-$&").toLowerCase();
}), so = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(od, function(r, o, i) {
          return Ot = {
            name: o,
            styles: i,
            next: Ot
          }, o;
        });
  }
  return xm[t] !== 1 && !iu(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
if (process.env.NODE_ENV !== "production") {
  var Lm = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, _m = ["normal", "none", "initial", "inherit", "unset"], km = so, zm = /^-ms-/, Um = /-(.)/g, Oc = {};
  so = function(t, n) {
    if (t === "content" && (typeof n != "string" || _m.indexOf(n) === -1 && !Lm.test(n) && (n.charAt(0) !== n.charAt(n.length - 1) || n.charAt(0) !== '"' && n.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + n + "\"'`");
    var r = km(t, n);
    return r !== "" && !iu(t) && t.indexOf("-") !== -1 && Oc[t] === void 0 && (Oc[t] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + t.replace(zm, "ms-").replace(Um, function(o, i) {
      return i.toUpperCase();
    }) + "?")), r;
  };
}
var sd = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function li(e, t, n) {
  if (n == null)
    return "";
  if (n.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && n.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(sd);
    return n;
  }
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return Ot = {
          name: n.name,
          styles: n.styles,
          next: Ot
        }, n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            Ot = {
              name: r.name,
              styles: r.styles,
              next: Ot
            }, r = r.next;
        var o = n.styles + ";";
        return process.env.NODE_ENV !== "production" && n.map !== void 0 && (o += n.map), o;
      }
      return Pm(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var i = Ot, s = n(e);
        return Ot = i, li(e, t, s);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var a = [], c = n.replace(od, function(l, f, d) {
          var p = "animation" + a.length;
          return a.push("const " + p + " = keyframes`" + d.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + p + "}";
        });
        a.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(a, ["`" + c + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + c + "`"));
      }
      break;
  }
  if (t == null)
    return n;
  var u = t[n];
  return u !== void 0 ? u : n;
}
function Pm(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += li(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object")
        t != null && t[s] !== void 0 ? r += i + "{" + t[s] + "}" : Cc(s) && (r += vs(i) + ":" + so(i, s) + ";");
      else {
        if (i === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(sd);
        if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
          for (var a = 0; a < s.length; a++)
            Cc(s[a]) && (r += vs(i) + ":" + so(i, s[a]) + ";");
        else {
          var c = li(e, t, s);
          switch (i) {
            case "animation":
            case "animationName": {
              r += vs(i) + ":" + c + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && i === "undefined" && console.error(Cm), r += i + "{" + c + "}";
          }
        }
      }
    }
  return r;
}
var Lc = /label:\s*([^\s;\n{]+)\s*(;|$)/g, ad;
process.env.NODE_ENV !== "production" && (ad = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var Ot, mr = function(t, n, r) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, i = "";
  Ot = void 0;
  var s = t[0];
  s == null || s.raw === void 0 ? (o = !1, i += li(r, n, s)) : (process.env.NODE_ENV !== "production" && s[0] === void 0 && console.error(xc), i += s[0]);
  for (var a = 1; a < t.length; a++)
    i += li(r, n, t[a]), o && (process.env.NODE_ENV !== "production" && s[a] === void 0 && console.error(xc), i += s[a]);
  var c;
  process.env.NODE_ENV !== "production" && (i = i.replace(ad, function(d) {
    return c = d, "";
  })), Lc.lastIndex = 0;
  for (var u = "", l; (l = Lc.exec(i)) !== null; )
    u += "-" + // $FlowFixMe we know it's not null
    l[1];
  var f = Sm(i) + u;
  return process.env.NODE_ENV !== "production" ? {
    name: f,
    styles: i,
    map: c,
    next: Ot,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: f,
    styles: i,
    next: Ot
  };
}, Rm = {}.hasOwnProperty, ou = /* @__PURE__ */ sn(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ jm({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (ou.displayName = "EmotionCacheContext");
ou.Provider;
var _o = function(t) {
  return /* @__PURE__ */ Ba(function(n, r) {
    var o = it(ou);
    return t(n, o, r);
  });
}, Tr = /* @__PURE__ */ sn({});
process.env.NODE_ENV !== "production" && (Tr.displayName = "EmotionThemeContext");
var Ym = te["useInsertionEffect"] ? te["useInsertionEffect"] : function(t) {
  t();
};
function ud(e) {
  Ym(e);
}
var _c = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", kc = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", Fm = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Oo(n, r, o), ud(function() {
    return Lo(n, r, o);
  }), null;
}, Qm = /* @__PURE__ */ _o(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[_c], i = [r], s = "";
  typeof e.className == "string" ? s = ru(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var a = mr(i, void 0, it(Tr));
  if (process.env.NODE_ENV !== "production" && a.name.indexOf("-") === -1) {
    var c = e[kc];
    c && (a = mr([a, "label:" + c + ";"]));
  }
  s += t.key + "-" + a.name;
  var u = {};
  for (var l in e)
    Rm.call(e, l) && l !== "css" && l !== _c && (process.env.NODE_ENV === "production" || l !== kc) && (u[l] = e[l]);
  return u.ref = n, u.className = s, /* @__PURE__ */ Nt(Mn, null, /* @__PURE__ */ Nt(Fm, {
    cache: t,
    serialized: a,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ Nt(o, u));
});
process.env.NODE_ENV !== "production" && (Qm.displayName = "EmotionCssPropInternal");
var Bm = {
  name: "@emotion/react",
  version: "11.9.0",
  main: "dist/emotion-react.cjs.js",
  module: "dist/emotion-react.esm.js",
  browser: {
    "./dist/emotion-react.cjs.js": "./dist/emotion-react.browser.cjs.js",
    "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
  },
  types: "types/index.d.ts",
  files: [
    "src",
    "dist",
    "jsx-runtime",
    "jsx-dev-runtime",
    "_isolated-hnrs",
    "types/*.d.ts",
    "macro.js",
    "macro.d.ts",
    "macro.js.flow"
  ],
  sideEffects: !1,
  author: "Emotion Contributors",
  license: "MIT",
  scripts: {
    "test:typescript": "dtslint types"
  },
  dependencies: {
    "@babel/runtime": "^7.13.10",
    "@emotion/babel-plugin": "^11.7.1",
    "@emotion/cache": "^11.7.1",
    "@emotion/serialize": "^1.0.3",
    "@emotion/utils": "^1.1.0",
    "@emotion/weak-memoize": "^0.2.5",
    "hoist-non-react-statics": "^3.3.1"
  },
  peerDependencies: {
    "@babel/core": "^7.0.0",
    react: ">=16.8.0"
  },
  peerDependenciesMeta: {
    "@babel/core": {
      optional: !0
    },
    "@types/react": {
      optional: !0
    }
  },
  devDependencies: {
    "@babel/core": "^7.13.10",
    "@emotion/css": "11.9.0",
    "@emotion/css-prettifier": "1.0.1",
    "@emotion/server": "11.4.0",
    "@emotion/styled": "11.8.1",
    "@types/react": "^16.9.11",
    dtslint: "^4.2.1",
    "html-tag-names": "^1.1.2",
    react: "16.14.0",
    "svg-tag-names": "^1.1.1",
    typescript: "^4.5.5"
  },
  repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
  publishConfig: {
    access: "public"
  },
  "umd:main": "dist/emotion-react.umd.min.js",
  preconstruct: {
    entrypoints: [
      "./index.js",
      "./jsx-runtime.js",
      "./jsx-dev-runtime.js",
      "./_isolated-hnrs.js"
    ],
    umdName: "emotionReact"
  }
}, zc = te["useInsertionEffect"] ? te["useInsertionEffect"] : lf, Uc = !1, $m = /* @__PURE__ */ _o(function(e, t) {
  process.env.NODE_ENV !== "production" && !Uc && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (e.className || e.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), Uc = !0);
  var n = e.styles, r = mr([n], void 0, it(Tr)), o = Ze();
  return zc(function() {
    var i = t.key + "-global", s = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), a = !1, c = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), c !== null && (a = !0, c.setAttribute("data-emotion", i), s.hydrate([c])), o.current = [s, a], function() {
      s.flush();
    };
  }, [t]), zc(function() {
    var i = o.current, s = i[0], a = i[1];
    if (a) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && Lo(t, r.next, !0), s.tags.length) {
      var c = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = c, s.flush();
    }
    t.insert("", r, s, !1);
  }, [t, r.name]), null;
});
process.env.NODE_ENV !== "production" && ($m.displayName = "EmotionGlobal");
function Wm() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return mr(t);
}
var su = function() {
  var t = Wm.apply(void 0, arguments), n = "animation-" + t.name;
  return {
    name: n,
    styles: "@keyframes " + n + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, Vm = function e(t) {
  for (var n = t.length, r = 0, o = ""; r < n; r++) {
    var i = t[r];
    if (i != null) {
      var s = void 0;
      switch (typeof i) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(i))
            s = e(i);
          else {
            process.env.NODE_ENV !== "production" && i.styles !== void 0 && i.name !== void 0 && console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."), s = "";
            for (var a in i)
              i[a] && a && (s && (s += " "), s += a);
          }
          break;
        }
        default:
          s = i;
      }
      s && (o && (o += " "), o += s);
    }
  }
  return o;
};
function Hm(e, t, n) {
  var r = [], o = ru(e, r, n);
  return r.length < 2 ? n : o + t(r);
}
var qm = function(t) {
  var n = t.cache, r = t.serializedArr;
  return ud(function() {
    for (var o = 0; o < r.length; o++)
      Lo(n, r[o], !1);
  }), null;
}, Km = /* @__PURE__ */ _o(function(e, t) {
  var n = !1, r = [], o = function() {
    if (n && process.env.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var u = arguments.length, l = new Array(u), f = 0; f < u; f++)
      l[f] = arguments[f];
    var d = mr(l, t.registered);
    return r.push(d), Oo(t, d, !1), t.key + "-" + d.name;
  }, i = function() {
    if (n && process.env.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var u = arguments.length, l = new Array(u), f = 0; f < u; f++)
      l[f] = arguments[f];
    return Hm(t.registered, o, Vm(l));
  }, s = {
    css: o,
    cx: i,
    theme: it(Tr)
  }, a = e.children(s);
  return n = !0, /* @__PURE__ */ Nt(Mn, null, /* @__PURE__ */ Nt(qm, {
    cache: t,
    serializedArr: r
  }), a);
});
process.env.NODE_ENV !== "production" && (Km.displayName = "EmotionClassNames");
if (process.env.NODE_ENV !== "production") {
  var Pc = !0, Gm = typeof jest < "u";
  if (Pc && !Gm) {
    var Rc = (
      // $FlowIgnore
      typeof globalThis < "u" ? globalThis : Pc ? window : global
    ), Yc = "__EMOTION_REACT_" + Bm.version.split(".")[0] + "__";
    Rc[Yc] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), Rc[Yc] = !0;
  }
}
var Jm = Rs, Xm = function(t) {
  return t !== "theme";
}, Fc = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Jm : Xm;
}, Qc = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, Zm = te["useInsertionEffect"] ? te["useInsertionEffect"] : function(t) {
  t();
};
function ev(e) {
  Zm(e);
}
var Bc = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, tv = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Oo(n, r, o), ev(function() {
    return Lo(n, r, o);
  }), null;
}, nv = function e(t, n) {
  if (process.env.NODE_ENV !== "production" && t === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, s;
  n !== void 0 && (i = n.label, s = n.target);
  var a = Qc(t, n, r), c = a || Fc(o), u = !c("as");
  return function() {
    var l = arguments, f = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && f.push("label:" + i + ";"), l[0] == null || l[0].raw === void 0)
      f.push.apply(f, l);
    else {
      process.env.NODE_ENV !== "production" && l[0][0] === void 0 && console.error(Bc), f.push(l[0][0]);
      for (var d = l.length, p = 1; p < d; p++)
        process.env.NODE_ENV !== "production" && l[0][p] === void 0 && console.error(Bc), f.push(l[p], l[0][p]);
    }
    var M = _o(function(y, m, w) {
      var D = u && y.as || o, N = "", E = [], T = y;
      if (y.theme == null) {
        T = {};
        for (var F in y)
          T[F] = y[F];
        T.theme = it(Tr);
      }
      typeof y.className == "string" ? N = ru(m.registered, E, y.className) : y.className != null && (N = y.className + " ");
      var _ = mr(f.concat(E), m.registered, T);
      N += m.key + "-" + _.name, s !== void 0 && (N += " " + s);
      var G = u && a === void 0 ? Fc(D) : c, Q = {};
      for (var K in y)
        u && K === "as" || // $FlowFixMe
        G(K) && (Q[K] = y[K]);
      return Q.className = N, Q.ref = w, /* @__PURE__ */ Nt(Mn, null, /* @__PURE__ */ Nt(tv, {
        cache: m,
        serialized: _,
        isStringTag: typeof D == "string"
      }), /* @__PURE__ */ Nt(D, Q));
    });
    return M.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", M.defaultProps = t.defaultProps, M.__emotion_real = M, M.__emotion_base = o, M.__emotion_styles = f, M.__emotion_forwardProp = a, Object.defineProperty(M, "toString", {
      value: function() {
        return s === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + s;
      }
    }), M.withComponent = function(y, m) {
      return e(y, de({}, n, m, {
        shouldForwardProp: Qc(M, m, !0)
      })).apply(void 0, f);
    }, M;
  };
};
const rv = nv;
var iv = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], aa = rv.bind();
iv.forEach(function(e) {
  aa[e] = aa(e);
});
const ov = aa;
/**
 * @mui/styled-engine v5.14.9
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function sv(e, t) {
  const n = ov(e, t);
  return process.env.NODE_ENV !== "production" ? (...r) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), n(...r);
  } : n;
}
const av = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, uv = ["values", "unit", "step"], cv = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => de({}, n, {
    [r.key]: r.val
  }), {});
};
function lv(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: n = "px",
    step: r = 5
  } = e, o = We(e, uv), i = cv(t), s = Object.keys(i);
  function a(d) {
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${n})`;
  }
  function c(d) {
    return `@media (max-width:${(typeof t[d] == "number" ? t[d] : d) - r / 100}${n})`;
  }
  function u(d, p) {
    const M = s.indexOf(p);
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${n}) and (max-width:${(M !== -1 && typeof t[s[M]] == "number" ? t[s[M]] : p) - r / 100}${n})`;
  }
  function l(d) {
    return s.indexOf(d) + 1 < s.length ? u(d, s[s.indexOf(d) + 1]) : a(d);
  }
  function f(d) {
    const p = s.indexOf(d);
    return p === 0 ? a(s[1]) : p === s.length - 1 ? c(s[p]) : u(d, s[s.indexOf(d) + 1]).replace("@media", "@media not all and");
  }
  return de({
    keys: s,
    values: i,
    up: a,
    down: c,
    between: u,
    only: l,
    not: f,
    unit: n
  }, o);
}
const fv = {
  borderRadius: 4
}, dv = fv, hv = process.env.NODE_ENV !== "production" ? v.oneOfType([v.number, v.string, v.object, v.array]) : {}, Dn = hv;
function Jr(e, t) {
  return t ? Xt(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const au = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, $c = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${au[e]}px)`
};
function nn(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || $c;
    return t.reduce((s, a, c) => (s[i.up(i.keys[c])] = n(t[c]), s), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || $c;
    return Object.keys(t).reduce((s, a) => {
      if (Object.keys(i.values || au).indexOf(a) !== -1) {
        const c = i.up(a);
        s[c] = n(t[a], a);
      } else {
        const c = a;
        s[c] = t[c];
      }
      return s;
    }, {});
  }
  return n(t);
}
function gv(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, o) => {
    const i = e.up(o);
    return r[i] = {}, r;
  }, {})) || {};
}
function pv(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function ko(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e);
}
function ao(e, t, n, r = n) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || r : o = ko(e, n) || r, t && (o = t(o, r, e)), o;
}
function Pe(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const a = s[t], c = s.theme, u = ko(c, r) || {};
    return nn(s, a, (f) => {
      let d = ao(u, o, f);
      return f === d && typeof f == "string" && (d = ao(u, o, `${t}${f === "default" ? "" : lr(f)}`, f)), n === !1 ? d : {
        [n]: d
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Dn
  } : {}, i.filterProps = [t], i;
}
function Mv(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const yv = {
  m: "margin",
  p: "padding"
}, mv = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Wc = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, vv = Mv((e) => {
  if (e.length > 2)
    if (Wc[e])
      e = Wc[e];
    else
      return [e];
  const [t, n] = e.split(""), r = yv[t], o = mv[n] || "";
  return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
}), zo = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Uo = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], wv = [...zo, ...Uo];
function Ei(e, t, n, r) {
  var o;
  const i = (o = ko(e, t, !1)) != null ? o : n;
  return typeof i == "number" ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && typeof s != "number" && console.error(`MUI: Expected ${r} argument to be a number or a string, got ${s}.`), i * s) : Array.isArray(i) ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > i.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${s} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), i[s]) : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function cd(e) {
  return Ei(e, "spacing", 8, "spacing");
}
function Ti(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function Dv(e, t) {
  return (n) => e.reduce((r, o) => (r[o] = Ti(t, n), r), {});
}
function Iv(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const o = vv(n), i = Dv(o, r), s = e[n];
  return nn(e, s, i);
}
function ld(e, t) {
  const n = cd(e.theme);
  return Object.keys(e).map((r) => Iv(e, t, r, n)).reduce(Jr, {});
}
function He(e) {
  return ld(e, zo);
}
He.propTypes = process.env.NODE_ENV !== "production" ? zo.reduce((e, t) => (e[t] = Dn, e), {}) : {};
He.filterProps = zo;
function qe(e) {
  return ld(e, Uo);
}
qe.propTypes = process.env.NODE_ENV !== "production" ? Uo.reduce((e, t) => (e[t] = Dn, e), {}) : {};
qe.filterProps = Uo;
process.env.NODE_ENV !== "production" && wv.reduce((e, t) => (e[t] = Dn, e), {});
function Av(e = 8) {
  if (e.mui)
    return e;
  const t = cd({
    spacing: e
  }), n = (...r) => (process.env.NODE_ENV !== "production" && (r.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${r.length}`)), (r.length === 0 ? [1] : r).map((i) => {
    const s = t(i);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" "));
  return n.mui = !0, n;
}
function Po(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((i) => {
    r[i] = o;
  }), r), {}), n = (r) => Object.keys(r).reduce((o, i) => t[i] ? Jr(o, t[i](r)) : o, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((r, o) => Object.assign(r, o.propTypes), {}) : {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function Rt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
const Ev = Pe({
  prop: "border",
  themeKey: "borders",
  transform: Rt
}), Tv = Pe({
  prop: "borderTop",
  themeKey: "borders",
  transform: Rt
}), Nv = Pe({
  prop: "borderRight",
  themeKey: "borders",
  transform: Rt
}), jv = Pe({
  prop: "borderBottom",
  themeKey: "borders",
  transform: Rt
}), bv = Pe({
  prop: "borderLeft",
  themeKey: "borders",
  transform: Rt
}), Sv = Pe({
  prop: "borderColor",
  themeKey: "palette"
}), xv = Pe({
  prop: "borderTopColor",
  themeKey: "palette"
}), Cv = Pe({
  prop: "borderRightColor",
  themeKey: "palette"
}), Ov = Pe({
  prop: "borderBottomColor",
  themeKey: "palette"
}), Lv = Pe({
  prop: "borderLeftColor",
  themeKey: "palette"
}), Ro = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Ei(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (r) => ({
      borderRadius: Ti(t, r)
    });
    return nn(e, e.borderRadius, n);
  }
  return null;
};
Ro.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Dn
} : {};
Ro.filterProps = ["borderRadius"];
Po(Ev, Tv, Nv, jv, bv, Sv, xv, Cv, Ov, Lv, Ro);
const Yo = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Ei(e.theme, "spacing", 8, "gap"), n = (r) => ({
      gap: Ti(t, r)
    });
    return nn(e, e.gap, n);
  }
  return null;
};
Yo.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Dn
} : {};
Yo.filterProps = ["gap"];
const Fo = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Ei(e.theme, "spacing", 8, "columnGap"), n = (r) => ({
      columnGap: Ti(t, r)
    });
    return nn(e, e.columnGap, n);
  }
  return null;
};
Fo.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Dn
} : {};
Fo.filterProps = ["columnGap"];
const Qo = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Ei(e.theme, "spacing", 8, "rowGap"), n = (r) => ({
      rowGap: Ti(t, r)
    });
    return nn(e, e.rowGap, n);
  }
  return null;
};
Qo.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Dn
} : {};
Qo.filterProps = ["rowGap"];
const _v = Pe({
  prop: "gridColumn"
}), kv = Pe({
  prop: "gridRow"
}), zv = Pe({
  prop: "gridAutoFlow"
}), Uv = Pe({
  prop: "gridAutoColumns"
}), Pv = Pe({
  prop: "gridAutoRows"
}), Rv = Pe({
  prop: "gridTemplateColumns"
}), Yv = Pe({
  prop: "gridTemplateRows"
}), Fv = Pe({
  prop: "gridTemplateAreas"
}), Qv = Pe({
  prop: "gridArea"
});
Po(Yo, Fo, Qo, _v, kv, zv, Uv, Pv, Rv, Yv, Fv, Qv);
function dr(e, t) {
  return t === "grey" ? t : e;
}
const Bv = Pe({
  prop: "color",
  themeKey: "palette",
  transform: dr
}), $v = Pe({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: dr
}), Wv = Pe({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: dr
});
Po(Bv, $v, Wv);
function Mt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Vv = Pe({
  prop: "width",
  transform: Mt
}), uu = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, o;
      const i = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || au[n];
      return i ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: Mt(n)
      };
    };
    return nn(e, e.maxWidth, t);
  }
  return null;
};
uu.filterProps = ["maxWidth"];
const Hv = Pe({
  prop: "minWidth",
  transform: Mt
}), qv = Pe({
  prop: "height",
  transform: Mt
}), Kv = Pe({
  prop: "maxHeight",
  transform: Mt
}), Gv = Pe({
  prop: "minHeight",
  transform: Mt
});
Pe({
  prop: "size",
  cssProperty: "width",
  transform: Mt
});
Pe({
  prop: "size",
  cssProperty: "height",
  transform: Mt
});
const Jv = Pe({
  prop: "boxSizing"
});
Po(Vv, uu, Hv, qv, Kv, Gv, Jv);
const Xv = {
  // borders
  border: {
    themeKey: "borders",
    transform: Rt
  },
  borderTop: {
    themeKey: "borders",
    transform: Rt
  },
  borderRight: {
    themeKey: "borders",
    transform: Rt
  },
  borderBottom: {
    themeKey: "borders",
    transform: Rt
  },
  borderLeft: {
    themeKey: "borders",
    transform: Rt
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Ro
  },
  // palette
  color: {
    themeKey: "palette",
    transform: dr
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: dr
  },
  backgroundColor: {
    themeKey: "palette",
    transform: dr
  },
  // spacing
  p: {
    style: qe
  },
  pt: {
    style: qe
  },
  pr: {
    style: qe
  },
  pb: {
    style: qe
  },
  pl: {
    style: qe
  },
  px: {
    style: qe
  },
  py: {
    style: qe
  },
  padding: {
    style: qe
  },
  paddingTop: {
    style: qe
  },
  paddingRight: {
    style: qe
  },
  paddingBottom: {
    style: qe
  },
  paddingLeft: {
    style: qe
  },
  paddingX: {
    style: qe
  },
  paddingY: {
    style: qe
  },
  paddingInline: {
    style: qe
  },
  paddingInlineStart: {
    style: qe
  },
  paddingInlineEnd: {
    style: qe
  },
  paddingBlock: {
    style: qe
  },
  paddingBlockStart: {
    style: qe
  },
  paddingBlockEnd: {
    style: qe
  },
  m: {
    style: He
  },
  mt: {
    style: He
  },
  mr: {
    style: He
  },
  mb: {
    style: He
  },
  ml: {
    style: He
  },
  mx: {
    style: He
  },
  my: {
    style: He
  },
  margin: {
    style: He
  },
  marginTop: {
    style: He
  },
  marginRight: {
    style: He
  },
  marginBottom: {
    style: He
  },
  marginLeft: {
    style: He
  },
  marginX: {
    style: He
  },
  marginY: {
    style: He
  },
  marginInline: {
    style: He
  },
  marginInlineStart: {
    style: He
  },
  marginInlineEnd: {
    style: He
  },
  marginBlock: {
    style: He
  },
  marginBlockStart: {
    style: He
  },
  marginBlockEnd: {
    style: He
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Yo
  },
  rowGap: {
    style: Qo
  },
  columnGap: {
    style: Fo
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: Mt
  },
  maxWidth: {
    style: uu
  },
  minWidth: {
    transform: Mt
  },
  height: {
    transform: Mt
  },
  maxHeight: {
    transform: Mt
  },
  minHeight: {
    transform: Mt
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
}, fd = Xv;
function Zv(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function ew(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function tw() {
  function e(n, r, o, i) {
    const s = {
      [n]: r,
      theme: o
    }, a = i[n];
    if (!a)
      return {
        [n]: r
      };
    const {
      cssProperty: c = n,
      themeKey: u,
      transform: l,
      style: f
    } = a;
    if (r == null)
      return null;
    if (u === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const d = ko(o, u) || {};
    return f ? f(s) : nn(s, r, (M) => {
      let y = ao(d, l, M);
      return M === y && typeof M == "string" && (y = ao(d, l, `${n}${M === "default" ? "" : lr(M)}`, M)), c === !1 ? y : {
        [c]: y
      };
    });
  }
  function t(n) {
    var r;
    const {
      sx: o,
      theme: i = {}
    } = n || {};
    if (!o)
      return null;
    const s = (r = i.unstable_sxConfig) != null ? r : fd;
    function a(c) {
      let u = c;
      if (typeof c == "function")
        u = c(i);
      else if (typeof c != "object")
        return c;
      if (!u)
        return null;
      const l = gv(i.breakpoints), f = Object.keys(l);
      let d = l;
      return Object.keys(u).forEach((p) => {
        const M = ew(u[p], i);
        if (M != null)
          if (typeof M == "object")
            if (s[p])
              d = Jr(d, e(p, M, i, s));
            else {
              const y = nn({
                theme: i
              }, M, (m) => ({
                [p]: m
              }));
              Zv(y, M) ? d[p] = t({
                sx: M,
                theme: i
              }) : d = Jr(d, y);
            }
          else
            d = Jr(d, e(p, M, i, s));
      }), pv(f, d);
    }
    return Array.isArray(o) ? o.map(a) : a(o);
  }
  return t;
}
const dd = tw();
dd.filterProps = ["sx"];
const hd = dd, nw = ["breakpoints", "palette", "spacing", "shape"];
function cu(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {}
  } = e, s = We(e, nw), a = lv(n), c = Av(o);
  let u = Xt({
    breakpoints: a,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: de({
      mode: "light"
    }, r),
    spacing: c,
    shape: de({}, dv, i)
  }, s);
  return u = t.reduce((l, f) => Xt(l, f), u), u.unstable_sxConfig = de({}, fd, s == null ? void 0 : s.unstable_sxConfig), u.unstable_sx = function(f) {
    return hd({
      sx: f,
      theme: this
    });
  }, u;
}
function rw(e) {
  return Object.keys(e).length === 0;
}
function iw(e = null) {
  const t = te.useContext(Tr);
  return !t || rw(t) ? e : t;
}
const ow = cu();
function gd(e = ow) {
  return iw(e);
}
const sw = ["variant"];
function Vc(e) {
  return e.length === 0;
}
function pd(e) {
  const {
    variant: t
  } = e, n = We(e, sw);
  let r = t || "";
  return Object.keys(n).sort().forEach((o) => {
    o === "color" ? r += Vc(r) ? e[o] : lr(e[o]) : r += `${Vc(r) ? o : lr(o)}${lr(e[o].toString())}`;
  }), r;
}
const aw = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function uw(e) {
  return Object.keys(e).length === 0;
}
function cw(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
const lw = (e, t) => t.components && t.components[e] && t.components[e].styleOverrides ? t.components[e].styleOverrides : null, fw = (e, t) => {
  let n = [];
  t && t.components && t.components[e] && t.components[e].variants && (n = t.components[e].variants);
  const r = {};
  return n.forEach((o) => {
    const i = pd(o.props);
    r[i] = o.style;
  }), r;
}, dw = (e, t, n, r) => {
  var o;
  const {
    ownerState: i = {}
  } = e, s = [], a = n == null || (o = n.components) == null || (o = o[r]) == null ? void 0 : o.variants;
  return a && a.forEach((c) => {
    let u = !0;
    Object.keys(c.props).forEach((l) => {
      i[l] !== c.props[l] && e[l] !== c.props[l] && (u = !1);
    }), u && s.push(t[pd(c.props)]);
  }), s;
};
function Hi(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const hw = cu(), Hc = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Lr({
  defaultTheme: e,
  theme: t,
  themeId: n
}) {
  return uw(t) ? e : t[n] || t;
}
function gw(e) {
  return e ? (t, n) => n[e] : null;
}
function pw(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = hw,
    rootShouldForwardProp: r = Hi,
    slotShouldForwardProp: o = Hi
  } = e, i = (s) => hd(de({}, s, {
    theme: Lr(de({}, s, {
      defaultTheme: n,
      themeId: t
    }))
  }));
  return i.__mui_systemSx = !0, (s, a = {}) => {
    av(s, (E) => E.filter((T) => !(T != null && T.__mui_systemSx)));
    const {
      name: c,
      slot: u,
      skipVariantsResolver: l,
      skipSx: f,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: d = gw(Hc(u))
    } = a, p = We(a, aw), M = l !== void 0 ? l : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), y = f || !1;
    let m;
    process.env.NODE_ENV !== "production" && c && (m = `${c}-${Hc(u || "Root")}`);
    let w = Hi;
    u === "Root" || u === "root" ? w = r : u ? w = o : cw(s) && (w = void 0);
    const D = sv(s, de({
      shouldForwardProp: w,
      label: m
    }, p)), N = (E, ...T) => {
      const F = T ? T.map((K) => typeof K == "function" && K.__emotion_real !== K ? (Z) => K(de({}, Z, {
        theme: Lr(de({}, Z, {
          defaultTheme: n,
          themeId: t
        }))
      })) : K) : [];
      let _ = E;
      c && d && F.push((K) => {
        const Z = Lr(de({}, K, {
          defaultTheme: n,
          themeId: t
        })), re = lw(c, Z);
        if (re) {
          const U = {};
          return Object.entries(re).forEach(([j, C]) => {
            U[j] = typeof C == "function" ? C(de({}, K, {
              theme: Z
            })) : C;
          }), d(K, U);
        }
        return null;
      }), c && !M && F.push((K) => {
        const Z = Lr(de({}, K, {
          defaultTheme: n,
          themeId: t
        }));
        return dw(K, fw(c, Z), Z, c);
      }), y || F.push(i);
      const G = F.length - T.length;
      if (Array.isArray(E) && G > 0) {
        const K = new Array(G).fill("");
        _ = [...E, ...K], _.raw = [...E.raw, ...K];
      } else
        typeof E == "function" && // On the server Emotion doesn't use React.forwardRef for creating components, so the created
        // component stays as a function. This condition makes sure that we do not interpolate functions
        // which are basically components used as a selectors.
        E.__emotion_real !== E && (_ = (K) => E(de({}, K, {
          theme: Lr(de({}, K, {
            defaultTheme: n,
            themeId: t
          }))
        })));
      const Q = D(_, ...F);
      if (process.env.NODE_ENV !== "production") {
        let K;
        c && (K = `${c}${lr(u || "")}`), K === void 0 && (K = `Styled(${fy(s)})`), Q.displayName = K;
      }
      return s.muiName && (Q.muiName = s.muiName), Q;
    };
    return D.withConfig && (N.withConfig = D.withConfig), N;
  };
}
function Mw(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : Gf(t.components[n].defaultProps, r);
}
function yw({
  props: e,
  name: t,
  defaultTheme: n,
  themeId: r
}) {
  let o = gd(n);
  return r && (o = o[r] || o), Mw({
    theme: o,
    name: t,
    props: e
  });
}
function lu(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), Math.min(Math.max(t, e), n);
}
function mw(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Bn(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Bn(mw(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : oi(9, e));
  let r = e.substring(t + 1, e.length - 1), o;
  if (n === "color") {
    if (r = r.split(" "), o = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : oi(10, o));
  } else
    r = r.split(",");
  return r = r.map((i) => parseFloat(i)), {
    type: n,
    values: r,
    colorSpace: o
  };
}
function Bo(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.indexOf("rgb") !== -1 ? r = r.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.indexOf("hsl") !== -1 && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.indexOf("color") !== -1 ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function vw(e) {
  e = Bn(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, o = t[2] / 100, i = r * Math.min(o, 1 - o), s = (u, l = (u + n / 30) % 12) => o - i * Math.max(Math.min(l - 3, 9 - l, 1), -1);
  let a = "rgb";
  const c = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (a += "a", c.push(t[3])), Bo({
    type: a,
    values: c
  });
}
function qc(e) {
  e = Bn(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Bn(vw(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Kc(e, t) {
  const n = qc(e), r = qc(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function cr(e, t) {
  return e = Bn(e), t = lu(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Bo(e);
}
function ww(e, t) {
  if (e = Bn(e), t = lu(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return Bo(e);
}
function Dw(e, t) {
  if (e = Bn(e), t = lu(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return Bo(e);
}
function Iw(e, t) {
  return de({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, t);
}
const Aw = {
  black: "#000",
  white: "#fff"
}, fi = Aw, Ew = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, Tw = Ew, Nw = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, Hn = Nw, jw = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, qn = jw, bw = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, _r = bw, Sw = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, Kn = Sw, xw = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, Gn = xw, Cw = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, Jn = Cw, Ow = ["mode", "contrastThreshold", "tonalOffset"], Gc = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: fi.white,
    default: fi.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, ws = {
  text: {
    primary: fi.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: fi.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function Jc(e, t, n, r) {
  const o = r.light || r, i = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = Dw(e.main, o) : t === "dark" && (e.dark = ww(e.main, i)));
}
function Lw(e = "light") {
  return e === "dark" ? {
    main: Kn[200],
    light: Kn[50],
    dark: Kn[400]
  } : {
    main: Kn[700],
    light: Kn[400],
    dark: Kn[800]
  };
}
function _w(e = "light") {
  return e === "dark" ? {
    main: Hn[200],
    light: Hn[50],
    dark: Hn[400]
  } : {
    main: Hn[500],
    light: Hn[300],
    dark: Hn[700]
  };
}
function kw(e = "light") {
  return e === "dark" ? {
    main: qn[500],
    light: qn[300],
    dark: qn[700]
  } : {
    main: qn[700],
    light: qn[400],
    dark: qn[800]
  };
}
function zw(e = "light") {
  return e === "dark" ? {
    main: Gn[400],
    light: Gn[300],
    dark: Gn[700]
  } : {
    main: Gn[700],
    light: Gn[500],
    dark: Gn[900]
  };
}
function Uw(e = "light") {
  return e === "dark" ? {
    main: Jn[400],
    light: Jn[300],
    dark: Jn[700]
  } : {
    main: Jn[800],
    light: Jn[500],
    dark: Jn[900]
  };
}
function Pw(e = "light") {
  return e === "dark" ? {
    main: _r[400],
    light: _r[300],
    dark: _r[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: _r[500],
    dark: _r[900]
  };
}
function Rw(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2
  } = e, o = We(e, Ow), i = e.primary || Lw(t), s = e.secondary || _w(t), a = e.error || kw(t), c = e.info || zw(t), u = e.success || Uw(t), l = e.warning || Pw(t);
  function f(y) {
    const m = Kc(y, ws.text.primary) >= n ? ws.text.primary : Gc.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const w = Kc(y, m);
      w < 3 && console.error([`MUI: The contrast ratio of ${w}:1 for ${m} on ${y}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return m;
  }
  const d = ({
    color: y,
    name: m,
    mainShade: w = 500,
    lightShade: D = 300,
    darkShade: N = 700
  }) => {
    if (y = de({}, y), !y.main && y[w] && (y.main = y[w]), !y.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${m ? ` (${m})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${w}\` property.` : oi(11, m ? ` (${m})` : "", w));
    if (typeof y.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${m ? ` (${m})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(y.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : oi(12, m ? ` (${m})` : "", JSON.stringify(y.main)));
    return Jc(y, "light", D, r), Jc(y, "dark", N, r), y.contrastText || (y.contrastText = f(y.main)), y;
  }, p = {
    dark: ws,
    light: Gc
  };
  return process.env.NODE_ENV !== "production" && (p[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Xt(de({
    // A collection of common colors.
    common: de({}, fi),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: d({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: d({
      color: s,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: d({
      color: a,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: d({
      color: l,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: d({
      color: c,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: d({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: Tw,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: f,
    // Generate a rich color object.
    augmentColor: d,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r
  }, p[t]), o);
}
const Yw = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function Fw(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Xc = {
  textTransform: "uppercase"
}, Zc = '"Roboto", "Helvetica", "Arial", sans-serif';
function Qw(e, t) {
  const n = typeof t == "function" ? t(e) : t, {
    fontFamily: r = Zc,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: s = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: c = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: u = 16,
    // Apply the CSS properties to all the variants.
    allVariants: l,
    pxToRem: f
  } = n, d = We(n, Yw);
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof u != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const p = o / 14, M = f || ((w) => `${w / u * p}rem`), y = (w, D, N, E, T) => de({
    fontFamily: r,
    fontWeight: w,
    fontSize: M(D),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: N
  }, r === Zc ? {
    letterSpacing: `${Fw(E / D)}em`
  } : {}, T, l), m = {
    h1: y(i, 96, 1.167, -1.5),
    h2: y(i, 60, 1.2, -0.5),
    h3: y(s, 48, 1.167, 0),
    h4: y(s, 34, 1.235, 0.25),
    h5: y(s, 24, 1.334, 0),
    h6: y(a, 20, 1.6, 0.15),
    subtitle1: y(s, 16, 1.75, 0.15),
    subtitle2: y(a, 14, 1.57, 0.1),
    body1: y(s, 16, 1.5, 0.15),
    body2: y(s, 14, 1.43, 0.15),
    button: y(a, 14, 1.75, 0.4, Xc),
    caption: y(s, 12, 1.66, 0.4),
    overline: y(s, 12, 2.66, 1, Xc)
  };
  return Xt(de({
    htmlFontSize: u,
    pxToRem: M,
    fontFamily: r,
    fontSize: o,
    fontWeightLight: i,
    fontWeightRegular: s,
    fontWeightMedium: a,
    fontWeightBold: c
  }, m), d, {
    clone: !1
    // No need to clone deep
  });
}
const Bw = 0.2, $w = 0.14, Ww = 0.12;
function Ve(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Bw})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${$w})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Ww})`].join(",");
}
const Vw = ["none", Ve(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Ve(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Ve(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Ve(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Ve(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Ve(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Ve(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Ve(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Ve(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Ve(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Ve(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Ve(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Ve(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Ve(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Ve(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Ve(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Ve(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Ve(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Ve(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Ve(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Ve(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Ve(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Ve(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Ve(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Hw = Vw, qw = ["duration", "easing", "delay"], Kw = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Gw = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function el(e) {
  return `${Math.round(e)}ms`;
}
function Jw(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function Xw(e) {
  const t = de({}, Kw, e.easing), n = de({}, Gw, e.duration);
  return de({
    getAutoHeightDuration: Jw,
    create: (o = ["all"], i = {}) => {
      const {
        duration: s = n.standard,
        easing: a = t.easeInOut,
        delay: c = 0
      } = i, u = We(i, qw);
      if (process.env.NODE_ENV !== "production") {
        const l = (d) => typeof d == "string", f = (d) => !isNaN(parseFloat(d));
        !l(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !f(s) && !l(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), l(a) || console.error('MUI: Argument "easing" must be a string.'), !f(c) && !l(c) && console.error('MUI: Argument "delay" must be a number or a string.'), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((l) => `${l} ${typeof s == "string" ? s : el(s)} ${a} ${typeof c == "string" ? c : el(c)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: n
  });
}
const Zw = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, e0 = Zw, t0 = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function n0(e = {}, ...t) {
  const {
    mixins: n = {},
    palette: r = {},
    transitions: o = {},
    typography: i = {}
  } = e, s = We(e, t0), a = Rw(r), c = cu(e);
  let u = Xt(c, {
    mixins: Iw(c.breakpoints, n),
    palette: a,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Hw.slice(),
    typography: Qw(a, i),
    transitions: Xw(o),
    zIndex: de({}, e0)
  });
  if (u = Xt(u, s), u = t.reduce((l, f) => Xt(l, f), u), process.env.NODE_ENV !== "production") {
    const l = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], f = (d, p) => {
      let M;
      for (M in d) {
        const y = d[M];
        if (l.indexOf(M) !== -1 && Object.keys(y).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const m = Bt("", M);
            console.error([`MUI: The \`${p}\` component increases the CSS specificity of the \`${M}\` internal state.`, "You can not override it like this: ", JSON.stringify(d, null, 2), "", `Instead, you need to use the '&.${m}' syntax:`, JSON.stringify({
              root: {
                [`&.${m}`]: y
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          d[M] = {};
        }
      }
    };
    Object.keys(u.components).forEach((d) => {
      const p = u.components[d].styleOverrides;
      p && d.indexOf("Mui") === 0 && f(p, d);
    });
  }
  return u;
}
const r0 = n0(), fu = r0, du = (e) => Hi(e) && e !== "classes", i0 = pw({
  defaultTheme: fu,
  rootShouldForwardProp: du
}), gt = i0;
function an({
  props: e,
  name: t
}) {
  return yw({
    props: e,
    name: t,
    defaultTheme: fu
  });
}
const Md = /* @__PURE__ */ te.createContext({});
process.env.NODE_ENV !== "production" && (Md.displayName = "ListContext");
const ua = Md;
function o0(e) {
  return Bt("MuiList", e);
}
bt("MuiList", ["root", "padding", "dense", "subheader"]);
const s0 = ["children", "className", "component", "dense", "disablePadding", "subheader"], a0 = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: r,
    subheader: o
  } = e;
  return wn({
    root: ["root", !n && "padding", r && "dense", o && "subheader"]
  }, o0, t);
}, u0 = gt("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.disablePadding && t.padding, n.dense && t.dense, n.subheader && t.subheader];
  }
})(({
  ownerState: e
}) => de({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative"
}, !e.disablePadding && {
  paddingTop: 8,
  paddingBottom: 8
}, e.subheader && {
  paddingTop: 0
})), yd = /* @__PURE__ */ te.forwardRef(function(t, n) {
  const r = an({
    props: t,
    name: "MuiList"
  }), {
    children: o,
    className: i,
    component: s = "ul",
    dense: a = !1,
    disablePadding: c = !1,
    subheader: u
  } = r, l = We(r, s0), f = te.useMemo(() => ({
    dense: a
  }), [a]), d = de({}, r, {
    component: s,
    dense: a,
    disablePadding: c
  }), p = a0(d);
  return /* @__PURE__ */ fe.jsx(ua.Provider, {
    value: f,
    children: /* @__PURE__ */ fe.jsxs(u0, de({
      as: s,
      className: tt(p.root, i),
      ref: n,
      ownerState: d
    }, l, {
      children: [u, o]
    }))
  });
});
process.env.NODE_ENV !== "production" && (yd.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: v.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: v.object,
  /**
   * @ignore
   */
  className: v.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: v.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: v.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: v.bool,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: v.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: v.oneOfType([v.arrayOf(v.oneOfType([v.func, v.object, v.bool])), v.func, v.object])
});
const c0 = yd, l0 = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];
function Ds(e, t, n) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild;
}
function tl(e, t, n) {
  return e === t ? n ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e.lastChild;
}
function md(e, t) {
  if (t === void 0)
    return !0;
  let n = e.innerText;
  return n === void 0 && (n = e.textContent), n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.indexOf(t.keys.join("")) === 0;
}
function kr(e, t, n, r, o, i) {
  let s = !1, a = o(e, t, t ? n : !1);
  for (; a; ) {
    if (a === e.firstChild) {
      if (s)
        return !1;
      s = !0;
    }
    const c = r ? !1 : a.disabled || a.getAttribute("aria-disabled") === "true";
    if (!a.hasAttribute("tabindex") || !md(a, i) || c)
      a = o(e, a, n);
    else
      return a.focus(), !0;
  }
  return !1;
}
const vd = /* @__PURE__ */ te.forwardRef(function(t, n) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: r,
    autoFocus: o = !1,
    autoFocusItem: i = !1,
    children: s,
    className: a,
    disabledItemsFocusable: c = !1,
    disableListWrap: u = !1,
    onKeyDown: l,
    variant: f = "selectedMenu"
  } = t, d = We(t, l0), p = te.useRef(null), M = te.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  ai(() => {
    o && p.current.focus();
  }, [o]), te.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (N, E) => {
      const T = !p.current.style.width;
      if (N.clientHeight < p.current.clientHeight && T) {
        const F = `${Vf(_t(N))}px`;
        p.current.style[E.direction === "rtl" ? "paddingLeft" : "paddingRight"] = F, p.current.style.width = `calc(100% + ${F})`;
      }
      return p.current;
    }
  }), []);
  const y = (N) => {
    const E = p.current, T = N.key, F = _t(E).activeElement;
    if (T === "ArrowDown")
      N.preventDefault(), kr(E, F, u, c, Ds);
    else if (T === "ArrowUp")
      N.preventDefault(), kr(E, F, u, c, tl);
    else if (T === "Home")
      N.preventDefault(), kr(E, null, u, c, Ds);
    else if (T === "End")
      N.preventDefault(), kr(E, null, u, c, tl);
    else if (T.length === 1) {
      const _ = M.current, G = T.toLowerCase(), Q = performance.now();
      _.keys.length > 0 && (Q - _.lastTime > 500 ? (_.keys = [], _.repeating = !0, _.previousKeyMatched = !0) : _.repeating && G !== _.keys[0] && (_.repeating = !1)), _.lastTime = Q, _.keys.push(G);
      const K = F && !_.repeating && md(F, _);
      _.previousKeyMatched && (K || kr(E, F, !1, c, Ds, _)) ? N.preventDefault() : _.previousKeyMatched = !1;
    }
    l && l(N);
  }, m = mt(p, n);
  let w = -1;
  te.Children.forEach(s, (N, E) => {
    /* @__PURE__ */ te.isValidElement(N) && (process.env.NODE_ENV !== "production" && zf.isFragment(N) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), N.props.disabled || (f === "selectedMenu" && N.props.selected || w === -1) && (w = E));
  });
  const D = te.Children.map(s, (N, E) => {
    if (E === w) {
      const T = {};
      return i && (T.autoFocus = !0), N.props.tabIndex === void 0 && f === "selectedMenu" && (T.tabIndex = 0), /* @__PURE__ */ te.cloneElement(N, T);
    }
    return N;
  });
  return /* @__PURE__ */ fe.jsx(c0, de({
    role: "menu",
    ref: m,
    className: a,
    onKeyDown: y,
    tabIndex: o ? 0 : -1
  }, d, {
    children: D
  }));
});
process.env.NODE_ENV !== "production" && (vd.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   * @default false
   */
  autoFocus: v.bool,
  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   * @default false
   */
  autoFocusItem: v.bool,
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: v.node,
  /**
   * @ignore
   */
  className: v.string,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: v.bool,
  /**
   * If `true`, the menu items will not wrap focus.
   * @default false
   */
  disableListWrap: v.bool,
  /**
   * @ignore
   */
  onKeyDown: v.func,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   * @default 'selectedMenu'
   */
  variant: v.oneOf(["menu", "selectedMenu"])
});
const f0 = vd;
function $o() {
  const e = gd(fu);
  return process.env.NODE_ENV !== "production" && te.useDebugValue(e), e;
}
function d0(e) {
  return Bt("MuiPaper", e);
}
bt("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const h0 = ["className", "component", "elevation", "square", "variant"], nl = (e) => {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2);
}, g0 = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: o
  } = e, i = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return wn(i, d0, o);
}, p0 = gt("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n;
  return de({
    backgroundColor: (e.vars || e).palette.background.paper,
    color: (e.vars || e).palette.text.primary,
    transition: e.transitions.create("box-shadow")
  }, !t.square && {
    borderRadius: e.shape.borderRadius
  }, t.variant === "outlined" && {
    border: `1px solid ${(e.vars || e).palette.divider}`
  }, t.variant === "elevation" && de({
    boxShadow: (e.vars || e).shadows[t.elevation]
  }, !e.vars && e.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${cr("#fff", nl(t.elevation))}, ${cr("#fff", nl(t.elevation))})`
  }, e.vars && {
    backgroundImage: (n = e.vars.overlays) == null ? void 0 : n[t.elevation]
  }));
}), wd = /* @__PURE__ */ te.forwardRef(function(t, n) {
  const r = an({
    props: t,
    name: "MuiPaper"
  }), {
    className: o,
    component: i = "div",
    elevation: s = 1,
    square: a = !1,
    variant: c = "elevation"
  } = r, u = We(r, h0), l = de({}, r, {
    component: i,
    elevation: s,
    square: a,
    variant: c
  }), f = g0(l);
  return process.env.NODE_ENV !== "production" && $o().shadows[s] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${s}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${s}]\` is defined.`].join(`
`)), /* @__PURE__ */ fe.jsx(p0, de({
    as: i,
    ownerState: l,
    className: tt(f.root, o),
    ref: n
  }, u));
});
process.env.NODE_ENV !== "production" && (wd.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: v.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: v.object,
  /**
   * @ignore
   */
  className: v.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: v.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: Di(Kf, (e) => {
    const {
      elevation: t,
      variant: n
    } = e;
    return t > 0 && n === "outlined" ? new Error(`MUI: Combining \`elevation={${t}}\` with \`variant="${n}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: v.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: v.oneOfType([v.arrayOf(v.oneOfType([v.func, v.object, v.bool])), v.func, v.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: v.oneOfType([v.oneOf(["elevation", "outlined"]), v.string])
});
const Dd = wd;
function ca(e, t) {
  return ca = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, ca(e, t);
}
function Id(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ca(e, t);
}
const rl = {
  disabled: !1
};
var M0 = process.env.NODE_ENV !== "production" ? v.oneOfType([v.number, v.shape({
  enter: v.number,
  exit: v.number,
  appear: v.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && v.oneOfType([v.string, v.shape({
  enter: v.string,
  exit: v.string,
  active: v.string
}), v.shape({
  enter: v.string,
  enterDone: v.string,
  enterActive: v.string,
  exit: v.string,
  exitDone: v.string,
  exitActive: v.string
})]);
const uo = we.createContext(null);
var y0 = function(t) {
  return t.scrollTop;
}, $r = "unmounted", Nn = "exited", jn = "entering", or = "entered", la = "exiting", un = /* @__PURE__ */ function(e) {
  Id(t, e);
  function t(r, o) {
    var i;
    i = e.call(this, r, o) || this;
    var s = o, a = s && !s.isMounting ? r.enter : r.appear, c;
    return i.appearStatus = null, r.in ? a ? (c = Nn, i.appearStatus = jn) : c = or : r.unmountOnExit || r.mountOnEnter ? c = $r : c = Nn, i.state = {
      status: c
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(o, i) {
    var s = o.in;
    return s && i.status === $r ? {
      status: Nn
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(o) {
    var i = null;
    if (o !== this.props) {
      var s = this.state.status;
      this.props.in ? s !== jn && s !== or && (i = jn) : (s === jn || s === or) && (i = la);
    }
    this.updateStatus(!1, i);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var o = this.props.timeout, i, s, a;
    return i = s = a = o, o != null && typeof o != "number" && (i = o.exit, s = o.enter, a = o.appear !== void 0 ? o.appear : s), {
      exit: i,
      enter: s,
      appear: a
    };
  }, n.updateStatus = function(o, i) {
    if (o === void 0 && (o = !1), i !== null)
      if (this.cancelNextCallback(), i === jn) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var s = this.props.nodeRef ? this.props.nodeRef.current : Br.findDOMNode(this);
          s && y0(s);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === Nn && this.setState({
        status: $r
      });
  }, n.performEnter = function(o) {
    var i = this, s = this.props.enter, a = this.context ? this.context.isMounting : o, c = this.props.nodeRef ? [a] : [Br.findDOMNode(this), a], u = c[0], l = c[1], f = this.getTimeouts(), d = a ? f.appear : f.enter;
    if (!o && !s || rl.disabled) {
      this.safeSetState({
        status: or
      }, function() {
        i.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, l), this.safeSetState({
      status: jn
    }, function() {
      i.props.onEntering(u, l), i.onTransitionEnd(d, function() {
        i.safeSetState({
          status: or
        }, function() {
          i.props.onEntered(u, l);
        });
      });
    });
  }, n.performExit = function() {
    var o = this, i = this.props.exit, s = this.getTimeouts(), a = this.props.nodeRef ? void 0 : Br.findDOMNode(this);
    if (!i || rl.disabled) {
      this.safeSetState({
        status: Nn
      }, function() {
        o.props.onExited(a);
      });
      return;
    }
    this.props.onExit(a), this.safeSetState({
      status: la
    }, function() {
      o.props.onExiting(a), o.onTransitionEnd(s.exit, function() {
        o.safeSetState({
          status: Nn
        }, function() {
          o.props.onExited(a);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(o, i) {
    i = this.setNextCallback(i), this.setState(o, i);
  }, n.setNextCallback = function(o) {
    var i = this, s = !0;
    return this.nextCallback = function(a) {
      s && (s = !1, i.nextCallback = null, o(a));
    }, this.nextCallback.cancel = function() {
      s = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(o, i) {
    this.setNextCallback(i);
    var s = this.props.nodeRef ? this.props.nodeRef.current : Br.findDOMNode(this), a = o == null && !this.props.addEndListener;
    if (!s || a) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var c = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback], u = c[0], l = c[1];
      this.props.addEndListener(u, l);
    }
    o != null && setTimeout(this.nextCallback, o);
  }, n.render = function() {
    var o = this.state.status;
    if (o === $r)
      return null;
    var i = this.props, s = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var a = We(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ we.createElement(uo.Provider, {
        value: null
      }, typeof s == "function" ? s(o, a) : we.cloneElement(we.Children.only(s), a))
    );
  }, t;
}(we.Component);
un.contextType = uo;
un.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: v.shape({
    current: typeof Element > "u" ? v.any : function(e, t, n, r, o, i) {
      var s = e[t];
      return v.instanceOf(s && "ownerDocument" in s ? s.ownerDocument.defaultView.Element : Element)(e, t, n, r, o, i);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: v.oneOfType([v.func.isRequired, v.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: v.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: v.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: v.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: v.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: v.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: v.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(t) {
    var n = M0;
    t.addEndListener || (n = n.isRequired);
    for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      o[i - 1] = arguments[i];
    return n.apply(void 0, [t].concat(o));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: v.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: v.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: v.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: v.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: v.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: v.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: v.func
} : {};
function Xn() {
}
un.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Xn,
  onEntering: Xn,
  onEntered: Xn,
  onExit: Xn,
  onExiting: Xn,
  onExited: Xn
};
un.UNMOUNTED = $r;
un.EXITED = Nn;
un.ENTERING = jn;
un.ENTERED = or;
un.EXITING = la;
const Ad = un;
function m0(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function hu(e, t) {
  var n = function(i) {
    return t && Hr(i) ? t(i) : i;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && Hh.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    r[o.key] = n(o);
  }), r;
}
function v0(e, t) {
  e = e || {}, t = t || {};
  function n(l) {
    return l in t ? t[l] : e[l];
  }
  var r = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in t ? o.length && (r[i] = o, o = []) : o.push(i);
  var s, a = {};
  for (var c in t) {
    if (r[c])
      for (s = 0; s < r[c].length; s++) {
        var u = r[c][s];
        a[r[c][s]] = n(u);
      }
    a[c] = n(c);
  }
  for (s = 0; s < o.length; s++)
    a[o[s]] = n(o[s]);
  return a;
}
function On(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function w0(e, t) {
  return hu(e.children, function(n) {
    return qr(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: On(n, "appear", e),
      enter: On(n, "enter", e),
      exit: On(n, "exit", e)
    });
  });
}
function D0(e, t, n) {
  var r = hu(e.children), o = v0(t, r);
  return Object.keys(o).forEach(function(i) {
    var s = o[i];
    if (Hr(s)) {
      var a = i in t, c = i in r, u = t[i], l = Hr(u) && !u.props.in;
      c && (!a || l) ? o[i] = qr(s, {
        onExited: n.bind(null, s),
        in: !0,
        exit: On(s, "exit", e),
        enter: On(s, "enter", e)
      }) : !c && a && !l ? o[i] = qr(s, {
        in: !1
      }) : c && a && Hr(u) && (o[i] = qr(s, {
        onExited: n.bind(null, s),
        in: u.props.in,
        exit: On(s, "exit", e),
        enter: On(s, "enter", e)
      }));
    }
  }), o;
}
var I0 = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, A0 = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, gu = /* @__PURE__ */ function(e) {
  Id(t, e);
  function t(r, o) {
    var i;
    i = e.call(this, r, o) || this;
    var s = i.handleExited.bind(m0(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: s,
      firstRender: !0
    }, i;
  }
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, n.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(o, i) {
    var s = i.children, a = i.handleExited, c = i.firstRender;
    return {
      children: c ? w0(o, a) : D0(o, s, a),
      firstRender: !1
    };
  }, n.handleExited = function(o, i) {
    var s = hu(this.props.children);
    o.key in s || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(a) {
      var c = de({}, a.children);
      return delete c[o.key], {
        children: c
      };
    }));
  }, n.render = function() {
    var o = this.props, i = o.component, s = o.childFactory, a = We(o, ["component", "childFactory"]), c = this.state.contextValue, u = I0(this.state.children).map(s);
    return delete a.appear, delete a.enter, delete a.exit, i === null ? /* @__PURE__ */ we.createElement(uo.Provider, {
      value: c
    }, u) : /* @__PURE__ */ we.createElement(uo.Provider, {
      value: c
    }, /* @__PURE__ */ we.createElement(i, a, u));
  }, t;
}(we.Component);
gu.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: v.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: v.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: v.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: v.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: v.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: v.func
} : {};
gu.defaultProps = A0;
const E0 = gu, Ed = (e) => e.scrollTop;
function co(e, t) {
  var n, r;
  const {
    timeout: o,
    easing: i,
    style: s = {}
  } = e;
  return {
    duration: (n = s.transitionDuration) != null ? n : typeof o == "number" ? o : o[t.mode] || 0,
    easing: (r = s.transitionTimingFunction) != null ? r : typeof i == "object" ? i[t.mode] : i,
    delay: s.transitionDelay
  };
}
const T0 = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function fa(e) {
  return `scale(${e}, ${e ** 2})`;
}
const N0 = {
  entering: {
    opacity: 1,
    transform: fa(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, Is = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)[4-9]/i.test(navigator.userAgent), pu = /* @__PURE__ */ te.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: o = !0,
    children: i,
    easing: s,
    in: a,
    onEnter: c,
    onEntered: u,
    onEntering: l,
    onExit: f,
    onExited: d,
    onExiting: p,
    style: M,
    timeout: y = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: m = Ad
  } = t, w = We(t, T0), D = te.useRef(), N = te.useRef(), E = $o(), T = te.useRef(null), F = mt(i.ref, n), _ = mt(T, F), G = (V) => (S) => {
    if (V) {
      const q = T.current;
      S === void 0 ? V(q) : V(q, S);
    }
  }, Q = G(l), K = G((V, S) => {
    Ed(V);
    const {
      duration: q,
      delay: ae,
      easing: O
    } = co({
      style: M,
      timeout: y,
      easing: s
    }, {
      mode: "enter"
    });
    let z;
    y === "auto" ? (z = E.transitions.getAutoHeightDuration(V.clientHeight), N.current = z) : z = q, V.style.transition = [E.transitions.create("opacity", {
      duration: z,
      delay: ae
    }), E.transitions.create("transform", {
      duration: Is ? z : z * 0.666,
      delay: ae,
      easing: O
    })].join(","), c && c(V, S);
  }), Z = G(u), re = G(p), U = G((V) => {
    const {
      duration: S,
      delay: q,
      easing: ae
    } = co({
      style: M,
      timeout: y,
      easing: s
    }, {
      mode: "exit"
    });
    let O;
    y === "auto" ? (O = E.transitions.getAutoHeightDuration(V.clientHeight), N.current = O) : O = S, V.style.transition = [E.transitions.create("opacity", {
      duration: O,
      delay: q
    }), E.transitions.create("transform", {
      duration: Is ? O : O * 0.666,
      delay: Is ? q : q || O * 0.333,
      easing: ae
    })].join(","), V.style.opacity = 0, V.style.transform = fa(0.75), f && f(V);
  }), j = G(d), C = (V) => {
    y === "auto" && (D.current = setTimeout(V, N.current || 0)), r && r(T.current, V);
  };
  return te.useEffect(() => () => {
    clearTimeout(D.current);
  }, []), /* @__PURE__ */ fe.jsx(m, de({
    appear: o,
    in: a,
    nodeRef: T,
    onEnter: K,
    onEntered: Z,
    onEntering: Q,
    onExit: U,
    onExited: j,
    onExiting: re,
    addEndListener: C,
    timeout: y === "auto" ? null : y
  }, w, {
    children: (V, S) => /* @__PURE__ */ te.cloneElement(i, de({
      style: de({
        opacity: 0,
        transform: fa(0.75),
        visibility: V === "exited" && !a ? "hidden" : void 0
      }, N0[V], M, i.props.style),
      ref: _
    }, S))
  }));
});
process.env.NODE_ENV !== "production" && (pu.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: v.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: v.bool,
  /**
   * A single child content element.
   */
  children: Ii.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: v.oneOfType([v.shape({
    enter: v.string,
    exit: v.string
  }), v.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: v.bool,
  /**
   * @ignore
   */
  onEnter: v.func,
  /**
   * @ignore
   */
  onEntered: v.func,
  /**
   * @ignore
   */
  onEntering: v.func,
  /**
   * @ignore
   */
  onExit: v.func,
  /**
   * @ignore
   */
  onExited: v.func,
  /**
   * @ignore
   */
  onExiting: v.func,
  /**
   * @ignore
   */
  style: v.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: v.oneOfType([v.oneOf(["auto"]), v.number, v.shape({
    appear: v.number,
    enter: v.number,
    exit: v.number
  })])
});
pu.muiSupportAuto = !0;
const j0 = pu, b0 = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], S0 = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Td = /* @__PURE__ */ te.forwardRef(function(t, n) {
  const r = $o(), o = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: i,
    appear: s = !0,
    children: a,
    easing: c,
    in: u,
    onEnter: l,
    onEntered: f,
    onEntering: d,
    onExit: p,
    onExited: M,
    onExiting: y,
    style: m,
    timeout: w = o,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: D = Ad
  } = t, N = We(t, b0), E = te.useRef(null), T = mt(a.ref, n), F = mt(E, T), _ = (C) => (V) => {
    if (C) {
      const S = E.current;
      V === void 0 ? C(S) : C(S, V);
    }
  }, G = _(d), Q = _((C, V) => {
    Ed(C);
    const S = co({
      style: m,
      timeout: w,
      easing: c
    }, {
      mode: "enter"
    });
    C.style.webkitTransition = r.transitions.create("opacity", S), C.style.transition = r.transitions.create("opacity", S), l && l(C, V);
  }), K = _(f), Z = _(y), re = _((C) => {
    const V = co({
      style: m,
      timeout: w,
      easing: c
    }, {
      mode: "exit"
    });
    C.style.webkitTransition = r.transitions.create("opacity", V), C.style.transition = r.transitions.create("opacity", V), p && p(C);
  }), U = _(M), j = (C) => {
    i && i(E.current, C);
  };
  return /* @__PURE__ */ fe.jsx(D, de({
    appear: s,
    in: u,
    nodeRef: E,
    onEnter: Q,
    onEntered: K,
    onEntering: G,
    onExit: re,
    onExited: U,
    onExiting: Z,
    addEndListener: j,
    timeout: w
  }, N, {
    children: (C, V) => /* @__PURE__ */ te.cloneElement(a, de({
      style: de({
        opacity: 0,
        visibility: C === "exited" && !u ? "hidden" : void 0
      }, S0[C], m, a.props.style),
      ref: F
    }, V))
  }));
});
process.env.NODE_ENV !== "production" && (Td.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: v.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: v.bool,
  /**
   * A single child content element.
   */
  children: Ii.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: v.oneOfType([v.shape({
    enter: v.string,
    exit: v.string
  }), v.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: v.bool,
  /**
   * @ignore
   */
  onEnter: v.func,
  /**
   * @ignore
   */
  onEntered: v.func,
  /**
   * @ignore
   */
  onEntering: v.func,
  /**
   * @ignore
   */
  onExit: v.func,
  /**
   * @ignore
   */
  onExited: v.func,
  /**
   * @ignore
   */
  onExiting: v.func,
  /**
   * @ignore
   */
  style: v.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: v.oneOfType([v.number, v.shape({
    appear: v.number,
    enter: v.number,
    exit: v.number
  })])
});
const x0 = Td;
function C0(e) {
  return Bt("MuiBackdrop", e);
}
bt("MuiBackdrop", ["root", "invisible"]);
const O0 = ["children", "component", "components", "componentsProps", "className", "invisible", "open", "transitionDuration", "TransitionComponent"], L0 = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return wn({
    root: ["root", n && "invisible"]
  }, C0, t);
}, _0 = gt("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.invisible && t.invisible];
  }
})(({
  ownerState: e
}) => de({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent"
}, e.invisible && {
  backgroundColor: "transparent"
})), Nd = /* @__PURE__ */ te.forwardRef(function(t, n) {
  var r, o;
  const i = an({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: s,
    component: a = "div",
    components: c = {},
    componentsProps: u = {},
    className: l,
    invisible: f = !1,
    open: d,
    transitionDuration: p,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: M = x0
  } = i, y = We(i, O0), m = de({}, i, {
    component: a,
    invisible: f
  }), w = L0(m);
  return /* @__PURE__ */ fe.jsx(M, de({
    in: d,
    timeout: p
  }, y, {
    children: /* @__PURE__ */ fe.jsx(_0, {
      "aria-hidden": !0,
      as: (r = c.Root) != null ? r : a,
      className: tt(w.root, l),
      ownerState: de({}, m, (o = u.root) == null ? void 0 : o.ownerState),
      classes: w,
      ref: n,
      children: s
    })
  }));
});
process.env.NODE_ENV !== "production" && (Nd.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: v.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: v.object,
  /**
   * @ignore
   */
  className: v.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: v.elementType,
  /**
   * The components used for each slot inside the Backdrop.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: v.shape({
    Root: v.elementType
  }),
  /**
   * The props used for each slot inside the Backdrop.
   * @default {}
   */
  componentsProps: v.shape({
    root: v.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: v.bool,
  /**
   * If `true`, the component is shown.
   */
  open: v.bool.isRequired,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: v.oneOfType([v.arrayOf(v.oneOfType([v.func, v.object, v.bool])), v.func, v.object]),
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: v.oneOfType([v.number, v.shape({
    appear: v.number,
    enter: v.number,
    exit: v.number
  })])
});
const k0 = Nd, z0 = ["BackdropComponent", "closeAfterTransition", "children", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted"], U0 = (e) => e.classes, P0 = gt("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(({
  theme: e,
  ownerState: t
}) => de({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !t.open && t.exited && {
  visibility: "hidden"
})), R0 = gt(k0, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), jd = /* @__PURE__ */ te.forwardRef(function(t, n) {
  var r;
  const o = an({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: i = R0,
    closeAfterTransition: s = !1,
    children: a,
    components: c = {},
    componentsProps: u = {},
    disableAutoFocus: l = !1,
    disableEnforceFocus: f = !1,
    disableEscapeKeyDown: d = !1,
    disablePortal: p = !1,
    disableRestoreFocus: M = !1,
    disableScrollLock: y = !1,
    hideBackdrop: m = !1,
    keepMounted: w = !1
  } = o, D = We(o, z0), [N, E] = te.useState(!0), T = {
    closeAfterTransition: s,
    disableAutoFocus: l,
    disableEnforceFocus: f,
    disableEscapeKeyDown: d,
    disablePortal: p,
    disableRestoreFocus: M,
    disableScrollLock: y,
    hideBackdrop: m,
    keepMounted: w
  }, F = de({}, o, T, {
    exited: N
  }), _ = U0(F);
  return /* @__PURE__ */ fe.jsx(Hy, de({
    components: de({
      Root: P0
    }, c),
    componentsProps: {
      root: de({}, u.root, (!c.Root || !Pf(c.Root)) && {
        ownerState: de({}, (r = u.root) == null ? void 0 : r.ownerState)
      })
    },
    BackdropComponent: i,
    onTransitionEnter: () => E(!1),
    onTransitionExited: () => E(!0),
    ref: n
  }, D, {
    classes: _
  }, T, {
    children: a
  }));
});
process.env.NODE_ENV !== "production" && (jd.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: v.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   */
  BackdropProps: v.object,
  /**
   * A single child content element.
   */
  children: Ii.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: v.object,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: v.bool,
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: v.shape({
    Root: v.elementType
  }),
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  componentsProps: v.shape({
    root: v.object
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: v.oneOfType([Mr, v.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: v.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: v.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: v.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: v.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: v.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: v.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: v.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: v.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: v.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: v.func,
  /**
   * If `true`, the component is shown.
   */
  open: v.bool.isRequired,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: v.oneOfType([v.arrayOf(v.oneOfType([v.func, v.object, v.bool])), v.func, v.object])
});
const Y0 = jd;
function F0(e) {
  return Bt("MuiPopover", e);
}
bt("MuiPopover", ["root", "paper"]);
const Q0 = ["onEntering"], B0 = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps"];
function il(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function ol(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function sl(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function qi(e) {
  return typeof e == "function" ? e() : e;
}
const $0 = (e) => {
  const {
    classes: t
  } = e;
  return wn({
    root: ["root"],
    paper: ["paper"]
  }, F0, t);
}, W0 = gt(Y0, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), V0 = gt(Dd, {
  name: "MuiPopover",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), bd = /* @__PURE__ */ te.forwardRef(function(t, n) {
  const r = an({
    props: t,
    name: "MuiPopover"
  }), {
    action: o,
    anchorEl: i,
    anchorOrigin: s = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: a,
    anchorReference: c = "anchorEl",
    children: u,
    className: l,
    container: f,
    elevation: d = 8,
    marginThreshold: p = 16,
    open: M,
    PaperProps: y = {},
    transformOrigin: m = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: w = j0,
    transitionDuration: D = "auto",
    TransitionProps: {
      onEntering: N
    } = {}
  } = r, E = We(r.TransitionProps, Q0), T = We(r, B0), F = te.useRef(), _ = mt(F, y.ref), G = de({}, r, {
    anchorOrigin: s,
    anchorReference: c,
    elevation: d,
    marginThreshold: p,
    PaperProps: y,
    transformOrigin: m,
    TransitionComponent: w,
    transitionDuration: D,
    TransitionProps: E
  }), Q = $0(G), K = te.useCallback(() => {
    if (c === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (a || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), a;
    const S = qi(i), q = S && S.nodeType === 1 ? S : _t(F.current).body, ae = q.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const O = q.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && O.top === 0 && O.left === 0 && O.right === 0 && O.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: ae.top + il(ae, s.vertical),
      left: ae.left + ol(ae, s.horizontal)
    };
  }, [i, s.horizontal, s.vertical, a, c]), Z = te.useCallback((S) => ({
    vertical: il(S, m.vertical),
    horizontal: ol(S, m.horizontal)
  }), [m.horizontal, m.vertical]), re = te.useCallback((S) => {
    const q = {
      width: S.offsetWidth,
      height: S.offsetHeight
    }, ae = Z(q);
    if (c === "none")
      return {
        top: null,
        left: null,
        transformOrigin: sl(ae)
      };
    const O = K();
    let z = O.top - ae.vertical, Y = O.left - ae.horizontal;
    const W = z + q.height, B = Y + q.width, ee = si(qi(i)), b = ee.innerHeight - p, ne = ee.innerWidth - p;
    if (z < p) {
      const $ = z - p;
      z -= $, ae.vertical += $;
    } else if (W > b) {
      const $ = W - b;
      z -= $, ae.vertical += $;
    }
    if (process.env.NODE_ENV !== "production" && q.height > b && q.height && b && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${q.height - b}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), Y < p) {
      const $ = Y - p;
      Y -= $, ae.horizontal += $;
    } else if (B > ne) {
      const $ = B - ne;
      Y -= $, ae.horizontal += $;
    }
    return {
      top: `${Math.round(z)}px`,
      left: `${Math.round(Y)}px`,
      transformOrigin: sl(ae)
    };
  }, [i, c, K, Z, p]), U = te.useCallback(() => {
    const S = F.current;
    if (!S)
      return;
    const q = re(S);
    q.top !== null && (S.style.top = q.top), q.left !== null && (S.style.left = q.left), S.style.transformOrigin = q.transformOrigin;
  }, [re]), j = (S, q) => {
    N && N(S, q), U();
  };
  te.useEffect(() => {
    M && U();
  }), te.useImperativeHandle(o, () => M ? {
    updatePosition: () => {
      U();
    }
  } : null, [M, U]), te.useEffect(() => {
    if (!M)
      return;
    const S = hy(() => {
      U();
    }), q = si(i);
    return q.addEventListener("resize", S), () => {
      S.clear(), q.removeEventListener("resize", S);
    };
  }, [i, M, U]);
  let C = D;
  D === "auto" && !w.muiSupportAuto && (C = void 0);
  const V = f || (i ? _t(qi(i)).body : void 0);
  return /* @__PURE__ */ fe.jsx(W0, de({
    BackdropProps: {
      invisible: !0
    },
    className: tt(Q.root, l),
    container: V,
    open: M,
    ref: n,
    ownerState: G
  }, T, {
    children: /* @__PURE__ */ fe.jsx(w, de({
      appear: !0,
      in: M,
      onEntering: j,
      timeout: C
    }, E, {
      children: /* @__PURE__ */ fe.jsx(V0, de({
        elevation: d
      }, y, {
        ref: _,
        className: tt(Q.paper, y.className),
        children: u
      }))
    }))
  }));
});
process.env.NODE_ENV !== "production" && (bd.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: Wf,
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the popover.
   */
  anchorEl: Di(v.oneOfType([Mr, v.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = qi(e.anchorEl);
      if (t && t.nodeType === 1) {
        const n = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", `It should be an Element instance but it's \`${t}\` instead.`].join(`
`));
    }
    return null;
  }),
  /**
   * This is the point on the anchor where the popover's
   * `anchorEl` will attach to. This is not used when the
   * anchorReference is 'anchorPosition'.
   *
   * Options:
   * vertical: [top, center, bottom];
   * horizontal: [left, center, right].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  anchorOrigin: v.shape({
    horizontal: v.oneOfType([v.oneOf(["center", "left", "right"]), v.number]).isRequired,
    vertical: v.oneOfType([v.oneOf(["bottom", "center", "top"]), v.number]).isRequired
  }),
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition: v.shape({
    left: v.number.isRequired,
    top: v.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to when setting
   * the position of the popover.
   * @default 'anchorEl'
   */
  anchorReference: v.oneOf(["anchorEl", "anchorPosition", "none"]),
  /**
   * The content of the component.
   */
  children: v.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: v.object,
  /**
   * @ignore
   */
  className: v.string,
  /**
   * An HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: v.oneOfType([Mr, v.func]),
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: Kf,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   * @default 16
   */
  marginThreshold: v.number,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   */
  onClose: v.func,
  /**
   * If `true`, the component is shown.
   */
  open: v.bool.isRequired,
  /**
   * Props applied to the [`Paper`](/material-ui/api/paper/) element.
   * @default {}
   */
  PaperProps: v.shape({
    component: Qf
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: v.oneOfType([v.arrayOf(v.oneOfType([v.func, v.object, v.bool])), v.func, v.object]),
  /**
   * This is the point on the popover which
   * will attach to the anchor's origin.
   *
   * Options:
   * vertical: [top, center, bottom, x(px)];
   * horizontal: [left, center, right, x(px)].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  transformOrigin: v.shape({
    horizontal: v.oneOfType([v.oneOf(["center", "left", "right"]), v.number]).isRequired,
    vertical: v.oneOfType([v.oneOf(["bottom", "center", "top"]), v.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Grow
   */
  TransitionComponent: v.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration: v.oneOfType([v.oneOf(["auto"]), v.number, v.shape({
    appear: v.number,
    enter: v.number,
    exit: v.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: v.object
});
const H0 = bd;
function q0(e) {
  return Bt("MuiMenu", e);
}
bt("MuiMenu", ["root", "paper", "list"]);
const K0 = ["onEntering"], G0 = ["autoFocus", "children", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant"], J0 = {
  vertical: "top",
  horizontal: "right"
}, X0 = {
  vertical: "top",
  horizontal: "left"
}, Z0 = (e) => {
  const {
    classes: t
  } = e;
  return wn({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, q0, t);
}, eD = gt(H0, {
  shouldForwardProp: (e) => du(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), tD = gt(Dd, {
  name: "MuiMenu",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tapable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), nD = gt(f0, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), Sd = /* @__PURE__ */ te.forwardRef(function(t, n) {
  const r = an({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: o = !0,
    children: i,
    disableAutoFocusItem: s = !1,
    MenuListProps: a = {},
    onClose: c,
    open: u,
    PaperProps: l = {},
    PopoverClasses: f,
    transitionDuration: d = "auto",
    TransitionProps: {
      onEntering: p
    } = {},
    variant: M = "selectedMenu"
  } = r, y = We(r.TransitionProps, K0), m = We(r, G0), w = $o(), D = w.direction === "rtl", N = de({}, r, {
    autoFocus: o,
    disableAutoFocusItem: s,
    MenuListProps: a,
    onEntering: p,
    PaperProps: l,
    transitionDuration: d,
    TransitionProps: y,
    variant: M
  }), E = Z0(N), T = o && !s && u, F = te.useRef(null), _ = (K, Z) => {
    F.current && F.current.adjustStyleForScrollbar(K, w), p && p(K, Z);
  }, G = (K) => {
    K.key === "Tab" && (K.preventDefault(), c && c(K, "tabKeyDown"));
  };
  let Q = -1;
  return te.Children.map(i, (K, Z) => {
    /* @__PURE__ */ te.isValidElement(K) && (process.env.NODE_ENV !== "production" && zf.isFragment(K) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), K.props.disabled || (M === "selectedMenu" && K.props.selected || Q === -1) && (Q = Z));
  }), /* @__PURE__ */ fe.jsx(eD, de({
    classes: f,
    onClose: c,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: D ? "right" : "left"
    },
    transformOrigin: D ? J0 : X0,
    PaperProps: de({
      component: tD
    }, l, {
      classes: de({}, l.classes, {
        root: E.paper
      })
    }),
    className: E.root,
    open: u,
    ref: n,
    transitionDuration: d,
    TransitionProps: de({
      onEntering: _
    }, y),
    ownerState: N
  }, m, {
    children: /* @__PURE__ */ fe.jsx(nD, de({
      onKeyDown: G,
      actions: F,
      autoFocus: o && (Q === -1 || s),
      autoFocusItem: T,
      variant: M
    }, a, {
      className: tt(E.list, a.className),
      children: i
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Sd.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: v.oneOfType([Mr, v.func]),
  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   * @default true
   */
  autoFocus: v.bool,
  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: v.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: v.object,
  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   * @default false
   */
  disableAutoFocusItem: v.bool,
  /**
   * Props applied to the [`MenuList`](/material-ui/api/menu-list/) element.
   * @default {}
   */
  MenuListProps: v.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: v.func,
  /**
   * If `true`, the component is shown.
   */
  open: v.bool.isRequired,
  /**
   * @ignore
   */
  PaperProps: v.object,
  /**
   * `classes` prop applied to the [`Popover`](/material-ui/api/popover/) element.
   */
  PopoverClasses: v.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: v.oneOfType([v.arrayOf(v.oneOfType([v.func, v.object, v.bool])), v.func, v.object]),
  /**
   * The length of the transition in `ms`, or 'auto'
   * @default 'auto'
   */
  transitionDuration: v.oneOfType([v.oneOf(["auto"]), v.number, v.shape({
    appear: v.number,
    enter: v.number,
    exit: v.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: v.object,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus.
   * @default 'selectedMenu'
   */
  variant: v.oneOf(["menu", "selectedMenu"])
});
const rD = Sd;
function xd(e) {
  const {
    className: t,
    classes: n,
    pulsate: r = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: s,
    in: a,
    onExited: c,
    timeout: u
  } = e, [l, f] = te.useState(!1), d = tt(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), p = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + o
  }, M = tt(n.child, l && n.childLeaving, r && n.childPulsate);
  return !a && !l && f(!0), te.useEffect(() => {
    if (!a && c != null) {
      const y = setTimeout(c, u);
      return () => {
        clearTimeout(y);
      };
    }
  }, [c, a, u]), /* @__PURE__ */ fe.jsx("span", {
    className: d,
    style: p,
    children: /* @__PURE__ */ fe.jsx("span", {
      className: M
    })
  });
}
process.env.NODE_ENV !== "production" && (xd.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: v.object.isRequired,
  className: v.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: v.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: v.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: v.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: v.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: v.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: v.number,
  /**
   * exit delay
   */
  timeout: v.number.isRequired
});
const iD = bt("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), At = iD, oD = ["center", "classes", "className"];
let Wo = (e) => e, al, ul, cl, ll;
const da = 550, sD = 80, aD = su(al || (al = Wo`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), uD = su(ul || (ul = Wo`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), cD = su(cl || (cl = Wo`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), lD = gt("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), fD = gt(xd, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(ll || (ll = Wo`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), At.rippleVisible, aD, da, ({
  theme: e
}) => e.transitions.easing.easeInOut, At.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, At.child, At.childLeaving, uD, da, ({
  theme: e
}) => e.transitions.easing.easeInOut, At.childPulsate, cD, ({
  theme: e
}) => e.transitions.easing.easeInOut), Cd = /* @__PURE__ */ te.forwardRef(function(t, n) {
  const r = an({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: s
  } = r, a = We(r, oD), [c, u] = te.useState([]), l = te.useRef(0), f = te.useRef(null);
  te.useEffect(() => {
    f.current && (f.current(), f.current = null);
  }, [c]);
  const d = te.useRef(!1), p = te.useRef(null), M = te.useRef(null), y = te.useRef(null);
  te.useEffect(() => () => {
    clearTimeout(p.current);
  }, []);
  const m = te.useCallback((E) => {
    const {
      pulsate: T,
      rippleX: F,
      rippleY: _,
      rippleSize: G,
      cb: Q
    } = E;
    u((K) => [...K, /* @__PURE__ */ fe.jsx(fD, {
      classes: {
        ripple: tt(i.ripple, At.ripple),
        rippleVisible: tt(i.rippleVisible, At.rippleVisible),
        ripplePulsate: tt(i.ripplePulsate, At.ripplePulsate),
        child: tt(i.child, At.child),
        childLeaving: tt(i.childLeaving, At.childLeaving),
        childPulsate: tt(i.childPulsate, At.childPulsate)
      },
      timeout: da,
      pulsate: T,
      rippleX: F,
      rippleY: _,
      rippleSize: G
    }, l.current)]), l.current += 1, f.current = Q;
  }, [i]), w = te.useCallback((E = {}, T = {}, F) => {
    const {
      pulsate: _ = !1,
      center: G = o || T.pulsate,
      fakeElement: Q = !1
      // For test purposes
    } = T;
    if ((E == null ? void 0 : E.type) === "mousedown" && d.current) {
      d.current = !1;
      return;
    }
    (E == null ? void 0 : E.type) === "touchstart" && (d.current = !0);
    const K = Q ? null : y.current, Z = K ? K.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let re, U, j;
    if (G || E === void 0 || E.clientX === 0 && E.clientY === 0 || !E.clientX && !E.touches)
      re = Math.round(Z.width / 2), U = Math.round(Z.height / 2);
    else {
      const {
        clientX: C,
        clientY: V
      } = E.touches ? E.touches[0] : E;
      re = Math.round(C - Z.left), U = Math.round(V - Z.top);
    }
    if (G)
      j = Math.sqrt((2 * Z.width ** 2 + Z.height ** 2) / 3), j % 2 === 0 && (j += 1);
    else {
      const C = Math.max(Math.abs((K ? K.clientWidth : 0) - re), re) * 2 + 2, V = Math.max(Math.abs((K ? K.clientHeight : 0) - U), U) * 2 + 2;
      j = Math.sqrt(C ** 2 + V ** 2);
    }
    E != null && E.touches ? M.current === null && (M.current = () => {
      m({
        pulsate: _,
        rippleX: re,
        rippleY: U,
        rippleSize: j,
        cb: F
      });
    }, p.current = setTimeout(() => {
      M.current && (M.current(), M.current = null);
    }, sD)) : m({
      pulsate: _,
      rippleX: re,
      rippleY: U,
      rippleSize: j,
      cb: F
    });
  }, [o, m]), D = te.useCallback(() => {
    w({}, {
      pulsate: !0
    });
  }, [w]), N = te.useCallback((E, T) => {
    if (clearTimeout(p.current), (E == null ? void 0 : E.type) === "touchend" && M.current) {
      M.current(), M.current = null, p.current = setTimeout(() => {
        N(E, T);
      });
      return;
    }
    M.current = null, u((F) => F.length > 0 ? F.slice(1) : F), f.current = T;
  }, []);
  return te.useImperativeHandle(n, () => ({
    pulsate: D,
    start: w,
    stop: N
  }), [D, w, N]), /* @__PURE__ */ fe.jsx(lD, de({
    className: tt(i.root, At.root, s),
    ref: y
  }, a, {
    children: /* @__PURE__ */ fe.jsx(E0, {
      component: null,
      exit: !0,
      children: c
    })
  }));
});
process.env.NODE_ENV !== "production" && (Cd.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: v.bool,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: v.object,
  /**
   * @ignore
   */
  className: v.string
});
const dD = Cd;
function hD(e) {
  return Bt("MuiButtonBase", e);
}
const gD = bt("MuiButtonBase", ["root", "disabled", "focusVisible"]), pD = gD, MD = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], yD = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    classes: o
  } = e, s = wn({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, hD, o);
  return n && r && (s.root += ` ${r}`), s;
}, mD = gt("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${pD.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Od = /* @__PURE__ */ te.forwardRef(function(t, n) {
  const r = an({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: s,
    className: a,
    component: c = "button",
    disabled: u = !1,
    disableRipple: l = !1,
    disableTouchRipple: f = !1,
    focusRipple: d = !1,
    LinkComponent: p = "a",
    onBlur: M,
    onClick: y,
    onContextMenu: m,
    onDragLeave: w,
    onFocus: D,
    onFocusVisible: N,
    onKeyDown: E,
    onKeyUp: T,
    onMouseDown: F,
    onMouseLeave: _,
    onMouseUp: G,
    onTouchEnd: Q,
    onTouchMove: K,
    onTouchStart: Z,
    tabIndex: re = 0,
    TouchRippleProps: U,
    touchRippleRef: j,
    type: C
  } = r, V = We(r, MD), S = te.useRef(null), q = te.useRef(null), ae = mt(q, j), {
    isFocusVisibleRef: O,
    onFocus: z,
    onBlur: Y,
    ref: W
  } = Dy(), [B, ee] = te.useState(!1);
  u && B && ee(!1), te.useImperativeHandle(o, () => ({
    focusVisible: () => {
      ee(!0), S.current.focus();
    }
  }), []);
  const [b, ne] = te.useState(!1);
  te.useEffect(() => {
    ne(!0);
  }, []);
  const $ = b && !l && !u;
  te.useEffect(() => {
    B && d && !l && b && q.current.pulsate();
  }, [l, d, B, b]);
  function ie(ye, Vt, $n = f) {
    return ur((bi) => (Vt && Vt(bi), !$n && q.current && q.current[ye](bi), !0));
  }
  const P = ie("start", F), L = ie("stop", m), R = ie("stop", w), ce = ie("stop", G), X = ie("stop", (ye) => {
    B && ye.preventDefault(), _ && _(ye);
  }), ue = ie("start", Z), he = ie("stop", Q), le = ie("stop", K), A = ie("stop", (ye) => {
    Y(ye), O.current === !1 && ee(!1), M && M(ye);
  }, !1), g = ur((ye) => {
    S.current || (S.current = ye.currentTarget), z(ye), O.current === !0 && (ee(!0), N && N(ye)), D && D(ye);
  }), h = () => {
    const ye = S.current;
    return c && c !== "button" && !(ye.tagName === "A" && ye.href);
  }, I = te.useRef(!1), k = ur((ye) => {
    d && !I.current && B && q.current && ye.key === " " && (I.current = !0, q.current.stop(ye, () => {
      q.current.start(ye);
    })), ye.target === ye.currentTarget && h() && ye.key === " " && ye.preventDefault(), E && E(ye), ye.target === ye.currentTarget && h() && ye.key === "Enter" && !u && (ye.preventDefault(), y && y(ye));
  }), J = ur((ye) => {
    d && ye.key === " " && q.current && B && !ye.defaultPrevented && (I.current = !1, q.current.stop(ye, () => {
      q.current.pulsate(ye);
    })), T && T(ye), y && ye.target === ye.currentTarget && h() && ye.key === " " && !ye.defaultPrevented && y(ye);
  });
  let H = c;
  H === "button" && (V.href || V.to) && (H = p);
  const Me = {};
  H === "button" ? (Me.type = C === void 0 ? "button" : C, Me.disabled = u) : (!V.href && !V.to && (Me.role = "button"), u && (Me["aria-disabled"] = u));
  const Ee = mt(W, S), Ie = mt(n, Ee);
  process.env.NODE_ENV !== "production" && te.useEffect(() => {
    $ && !q.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [$]);
  const Le = de({}, r, {
    centerRipple: i,
    component: c,
    disabled: u,
    disableRipple: l,
    disableTouchRipple: f,
    focusRipple: d,
    tabIndex: re,
    focusVisible: B
  }), Fe = yD(Le);
  return /* @__PURE__ */ fe.jsxs(mD, de({
    as: H,
    className: tt(Fe.root, a),
    ownerState: Le,
    onBlur: A,
    onClick: y,
    onContextMenu: L,
    onFocus: g,
    onKeyDown: k,
    onKeyUp: J,
    onMouseDown: P,
    onMouseLeave: X,
    onMouseUp: ce,
    onDragLeave: R,
    onTouchEnd: he,
    onTouchMove: le,
    onTouchStart: ue,
    ref: Ie,
    tabIndex: u ? -1 : re,
    type: C
  }, Me, V, {
    children: [s, $ ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ fe.jsx(dD, de({
        ref: ae,
        center: i
      }, U))
    ) : null]
  }));
});
process.env.NODE_ENV !== "production" && (Od.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: Wf,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: v.bool,
  /**
   * The content of the component.
   */
  children: v.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: v.object,
  /**
   * @ignore
   */
  className: v.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: Qf,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: v.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: v.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: v.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: v.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: v.string,
  /**
   * @ignore
   */
  href: v.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: v.elementType,
  /**
   * @ignore
   */
  onBlur: v.func,
  /**
   * @ignore
   */
  onClick: v.func,
  /**
   * @ignore
   */
  onContextMenu: v.func,
  /**
   * @ignore
   */
  onDragLeave: v.func,
  /**
   * @ignore
   */
  onFocus: v.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: v.func,
  /**
   * @ignore
   */
  onKeyDown: v.func,
  /**
   * @ignore
   */
  onKeyUp: v.func,
  /**
   * @ignore
   */
  onMouseDown: v.func,
  /**
   * @ignore
   */
  onMouseLeave: v.func,
  /**
   * @ignore
   */
  onMouseUp: v.func,
  /**
   * @ignore
   */
  onTouchEnd: v.func,
  /**
   * @ignore
   */
  onTouchMove: v.func,
  /**
   * @ignore
   */
  onTouchStart: v.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: v.oneOfType([v.arrayOf(v.oneOfType([v.func, v.object, v.bool])), v.func, v.object]),
  /**
   * @default 0
   */
  tabIndex: v.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: v.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: v.oneOfType([v.func, v.shape({
    current: v.shape({
      pulsate: v.func.isRequired,
      start: v.func.isRequired,
      stop: v.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: v.oneOfType([v.oneOf(["button", "reset", "submit"]), v.string])
});
const vD = Od, wD = bt("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), fl = wD, DD = bt("MuiListItemIcon", ["root", "alignItemsFlexStart"]), dl = DD, ID = bt("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), hl = ID;
function AD(e) {
  return Bt("MuiMenuItem", e);
}
const ED = bt("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), zr = ED, TD = ["autoFocus", "component", "dense", "divider", "disableGutters", "focusVisibleClassName", "role", "tabIndex"], ND = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.divider && t.divider, !n.disableGutters && t.gutters];
}, jD = (e) => {
  const {
    disabled: t,
    dense: n,
    divider: r,
    disableGutters: o,
    selected: i,
    classes: s
  } = e, c = wn({
    root: ["root", n && "dense", t && "disabled", !o && "gutters", r && "divider", i && "selected"]
  }, AD, s);
  return de({}, s, c);
}, bD = gt(vD, {
  shouldForwardProp: (e) => du(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: ND
})(({
  theme: e,
  ownerState: t
}) => de({}, e.typography.body1, {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  minHeight: 48,
  paddingTop: 6,
  paddingBottom: 6,
  boxSizing: "border-box",
  whiteSpace: "nowrap"
}, !t.disableGutters && {
  paddingLeft: 16,
  paddingRight: 16
}, t.divider && {
  borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
  backgroundClip: "padding-box"
}, {
  "&:hover": {
    textDecoration: "none",
    backgroundColor: (e.vars || e).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${zr.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : cr(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${zr.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : cr(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${zr.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : cr(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : cr(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  },
  [`&.${zr.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${zr.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${fl.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${fl.inset}`]: {
    marginLeft: 52
  },
  [`& .${hl.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${hl.inset}`]: {
    paddingLeft: 36
  },
  [`& .${dl.root}`]: {
    minWidth: 36
  }
}, !t.dense && {
  [e.breakpoints.up("sm")]: {
    minHeight: "auto"
  }
}, t.dense && de({
  minHeight: 32,
  // https://material.io/components/menus#specs > Dense
  paddingTop: 4,
  paddingBottom: 4
}, e.typography.body2, {
  [`& .${dl.root} svg`]: {
    fontSize: "1.25rem"
  }
}))), Ld = /* @__PURE__ */ te.forwardRef(function(t, n) {
  const r = an({
    props: t,
    name: "MuiMenuItem"
  }), {
    autoFocus: o = !1,
    component: i = "li",
    dense: s = !1,
    divider: a = !1,
    disableGutters: c = !1,
    focusVisibleClassName: u,
    role: l = "menuitem",
    tabIndex: f
  } = r, d = We(r, TD), p = te.useContext(ua), M = {
    dense: s || p.dense || !1,
    disableGutters: c
  }, y = te.useRef(null);
  ai(() => {
    o && (y.current ? y.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a MenuItem whose component has not been rendered."));
  }, [o]);
  const m = de({}, r, {
    dense: M.dense,
    divider: a,
    disableGutters: c
  }), w = jD(r), D = mt(y, n);
  let N;
  return r.disabled || (N = f !== void 0 ? f : -1), /* @__PURE__ */ fe.jsx(ua.Provider, {
    value: M,
    children: /* @__PURE__ */ fe.jsx(bD, de({
      ref: D,
      role: l,
      tabIndex: N,
      component: i,
      focusVisibleClassName: tt(w.focusVisible, u)
    }, d, {
      ownerState: m,
      classes: w
    }))
  });
});
process.env.NODE_ENV !== "production" && (Ld.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   */
  autoFocus: v.bool,
  /**
   * The content of the component.
   */
  children: v.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: v.object,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: v.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent Menu component.
   * @default false
   */
  dense: v.bool,
  /**
   * @ignore
   */
  disabled: v.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: v.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the menu item.
   * @default false
   */
  divider: v.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: v.string,
  /**
   * @ignore
   */
  role: v.string,
  /**
   * @ignore
   */
  selected: v.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: v.oneOfType([v.arrayOf(v.oneOfType([v.func, v.object, v.bool])), v.func, v.object]),
  /**
   * @default 0
   */
  tabIndex: v.number
});
const gl = Ld;
var SD = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const xD = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Mu = (e, t) => {
  const n = Ba(
    ({ color: r = "currentColor", size: o = 24, strokeWidth: i = 2, absoluteStrokeWidth: s, children: a, ...c }, u) => Nt(
      "svg",
      {
        ref: u,
        ...SD,
        width: o,
        height: o,
        stroke: r,
        strokeWidth: s ? Number(i) * 24 / Number(o) : i,
        className: `lucide lucide-${xD(e)}`,
        ...c
      },
      [
        ...t.map(([l, f]) => Nt(l, f)),
        ...(Array.isArray(a) ? a : [a]) || []
      ]
    )
  );
  return n.displayName = `${e}`, n;
}, CD = Mu("Languages", [
  ["path", { d: "m5 8 6 6", key: "1wu5hv" }],
  ["path", { d: "m4 14 6-6 2-3", key: "1k1g8d" }],
  ["path", { d: "M2 5h12", key: "or177f" }],
  ["path", { d: "M7 2h1", key: "1t2jsx" }],
  ["path", { d: "m22 22-5-10-5 10", key: "don7ne" }],
  ["path", { d: "M14 18h6", key: "1m8k6r" }]
]), OD = Mu("Moon", [
  ["path", { d: "M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "1rit1i" }]
]), LD = Mu("Sun", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
]), _D = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  border: "none",
  outline: "none",
  padding: "0px",
  margin: "0px 1rem",
  backgroundColor: "inherit"
}, kD = ({ theme: e, changeLang: t }) => {
  const [n, r] = we.useState(null), o = (a) => {
    a.preventDefault(), r(a.currentTarget);
  }, i = () => {
    r(null);
  }, s = (a, c) => {
    a.preventDefault(), t(c), window.dispatchEvent(new Event("storage")), i();
  };
  return /* @__PURE__ */ fe.jsxs("div", { style: { float: "right" }, children: [
    /* @__PURE__ */ fe.jsx(
      "button",
      {
        style: {
          ..._D,
          color: e === "light" ? $e.light.main : $e.dark.text2
        },
        onClick: o,
        "aria-label": "Language toggle",
        children: /* @__PURE__ */ fe.jsx(CD, { size: 32 })
      }
    ),
    /* @__PURE__ */ fe.jsxs(
      rD,
      {
        id: "language-menu",
        anchorEl: n,
        open: !!n,
        onClose: i,
        disableAutoFocusItem: !0,
        classes: {
          paper: e === "light" ? $e.light.bgSide : $e.dark.bgSide
        },
        children: [
          /* @__PURE__ */ fe.jsx(
            gl,
            {
              style: {
                fontSize: "0.8em",
                padding: "5px 12px",
                color: e === "light" ? $e.light.text2 : $e.dark.text2
              },
              onClick: (a) => s(a, "ja"),
              children: "日本語"
            }
          ),
          /* @__PURE__ */ fe.jsx(
            gl,
            {
              style: {
                fontSize: "0.8em",
                padding: "5px 12px",
                color: e === "light" ? $e.light.text2 : $e.dark.text2
              },
              onClick: (a) => s(a, "en"),
              children: "English"
            }
          )
        ]
      }
    )
  ] });
}, ha = {
  desktop: 992,
  tablet: 768,
  phone: 480,
  phoneMini: 375
}, dS = (e, t) => `
      @media screen and (max-width: ${ha[e] / 16}em) {
        ${t};
      }
    `, _d = "data:image/svg+xml;base64,PHN2ZyBpZD0ic3ZnIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwLCAwLCA0MDAsNDAwIj48ZyBpZD0ic3ZnZyI+PHBhdGggaWQ9InBhdGgwIiBkPSJNMzAxLjYwMCAxNDAuMzM0IEMgMzAxLjMzMiAxNDAuNDIzLDMwMS4yODYgMTQ1LjMzNCwzMDEuNDYyIDE1NC45NzEgQyAzMDEuNzU5IDE3MS4xOTQsMzAxLjc4NCAxNzEuMDUwLDI5OS4xNjIgMTY4LjIwNSBDIDI5NS40MzkgMTY0LjE2NywyODcuNTg1IDE2Mi41MDksMjgxLjgwMCAxNjQuNTQyIEMgMjY0LjM3OSAxNzAuNjYyLDI2NC43NjcgMjAyLjA2NywyODIuMzIwIDIwNi42NDcgQyAyODguODE1IDIwOC4zNDIsMjk5LjAxMiAyMDQuOTAxLDMwMC40NDYgMjAwLjUzMCBDIDMwMS4wNTQgMTk4LjY3NSwzMDEuNzcxIDE5OS45OTcsMzAxLjc4NSAyMDMuMDAwIEwgMzAxLjgwMCAyMDYuMjAwIDMwNS40NzEgMjA2LjI2NCBDIDMwNy45NjQgMjA2LjMwOCwzMDkuMTgzIDIwNi4xNzksMzA5LjI3MSAyMDUuODY0IEMgMzA5LjM0MiAyMDUuNjA5LDMwOS4zMTAgMTkwLjc0MSwzMDkuMjAwIDE3Mi44MjUgTCAzMDkuMDAwIDE0MC4yNTAgMzA1LjUwMiAxNDAuMjI1IEMgMzAzLjU3OCAxNDAuMjExLDMwMS44MjIgMTQwLjI2MCwzMDEuNjAwIDE0MC4zMzQgTTYzLjYwMCAxNDYuNjczIEMgNjMuNjAwIDE0Ny4wNDQsNjMuOTQ3IDE0OC4zNDksNjQuMzcxIDE0OS41NzMgQyA2NC43OTUgMTUwLjc5OCw2Ni4yNTEgMTU1LjMxMCw2Ny42MDUgMTU5LjYwMCBDIDY4Ljk2MCAxNjMuODkwLDcwLjM5NyAxNjguMzkwLDcwLjc5OSAxNjkuNjAwIEMgNzEuODA0IDE3Mi42MjcsNzMuNzM1IDE3OC43OTMsNzQuODA2IDE4Mi40MDAgQyA3NS4yOTcgMTg0LjA1MCw3Ni4wMjEgMTg2LjM5MCw3Ni40MTUgMTg3LjYwMCBDIDc2LjgxMCAxODguODEwLDc3LjcwNyAxOTEuNjkwLDc4LjQwOSAxOTQuMDAwIEMgNzkuMTEwIDE5Ni4zMTAsODAuMDQwIDE5OS4zNzAsODAuNDc1IDIwMC44MDAgQyA4MC45MTAgMjAyLjIzMCw4MS41MDEgMjA0LjAzMCw4MS43ODggMjA0LjgwMCBMIDgyLjMxMSAyMDYuMjAwIDg1LjY1MyAyMDYuMjAwIEwgODguOTk2IDIwNi4yMDAgOTYuNzk4IDE4Mi43MDkgQyAxMDMuMzQwIDE2My4wMTIsMTA1LjYwMCAxNTcuMDAzLDEwNS42MDAgMTU5LjMwOSBDIDEwNS42MDAgMTU5LjM2OSwxMDYuMzI4IDE2MS40ODQsMTA3LjIxOSAxNjQuMDA5IEMgMTEwLjQxOCAxNzMuMDgyLDExNS45NzIgMTg5Ljk3MywxMTguODU2IDE5OS40MDAgQyAxMTkuMzI3IDIwMC45NDAsMTIwLjAwOSAyMDMuMTAwLDEyMC4zNzEgMjA0LjIwMCBMIDEyMS4wMzEgMjA2LjIwMCAxMjQuNDA1IDIwNi4yMDAgTCAxMjcuNzc5IDIwNi4yMDAgMTM3LjUzMCAxNzcuMjAwIEMgMTQyLjg5MyAxNjEuMjUwLDE0Ny4zNzMgMTQ3LjcwNSwxNDcuNDg2IDE0Ny4xMDAgTCAxNDcuNjkxIDE0Ni4wMDAgMTQ0LjUzOCAxNDYuMDAwIEwgMTQxLjM4NSAxNDYuMDAwIDE0MC40NDcgMTQ5LjUwMCBDIDEzOS42MzYgMTUyLjUyNSwxMzguMTM5IDE1Ny45ODUsMTM2LjgwMCAxNjIuODAwIEMgMTMyLjk0MyAxNzYuNjY4LDEyNi43MjcgMTk1LjY4NiwxMjYuMjI2IDE5NS4xNTAgQyAxMjUuOTM2IDE5NC44MzgsMTE2LjAxOCAxNjUuMzgzLDExMy42NTAgMTU3LjgwMCBDIDExMi45NjMgMTU1LjYwMCwxMTEuODMwIDE1Mi4wNDUsMTExLjEzMyAxNDkuOTAwIEwgMTA5Ljg2NCAxNDYuMDAwIDEwNi43ODEgMTQ2LjAwMCBDIDEwMy4yNTEgMTQ2LjAwMCwxMDMuNDI0IDE0NS43OTEsMTAxLjY1MCAxNTIuMjAwIEMgMTAxLjQwNiAxNTMuMDgwLDEwMC44NDUgMTU1LjAxNSwxMDAuNDAzIDE1Ni41MDAgQyA5OS45NjIgMTU3Ljk4NSw5OS4yNjYgMTYwLjMyNSw5OC44NTcgMTYxLjcwMCBDIDk2LjgyNSAxNjguNTM5LDk2LjExOSAxNzAuNzczLDkzLjc3MCAxNzcuODAwIEMgODcuODEwIDE5NS42MjIsODcuNDAyIDE5Ni42NzcsODYuOTcyIDE5NS4zNTcgQyA4Ni44MzYgMTk0Ljk0MSw4Ni41NzQgMTk0LjE1MCw4Ni4zODggMTkzLjYwMCBDIDg2LjIwMyAxOTMuMDUwLDg1LjQ4MSAxOTAuNzEwLDg0Ljc4NCAxODguNDAwIEMgODIuNDcyIDE4MC43NDEsODEuOTQxIDE3OS4wMDksODEuNTk1IDE3OC4wMDAgQyA4MS4yMTIgMTc2Ljg4Niw3OS4wMTggMTY5LjQ4NCw3OC4zMzMgMTY3LjAwMCBDIDc3LjgzNCAxNjUuMTkxLDc3LjIzMSAxNjMuMDc5LDc2Ljc5MSAxNjEuNjAwIEMgNzYuNjI3IDE2MS4wNTAsNzYuMjk2IDE1OS44ODAsNzYuMDU1IDE1OS4wMDAgQyA3NS4xNTIgMTU1LjcwNSw3My45MTUgMTUxLjMxMyw3My4xNTMgMTQ4LjcwMCBMIDcyLjM2NiAxNDYuMDAwIDY3Ljk4MyAxNDYuMDAwIEMgNjQuMTQxIDE0Ni4wMDAsNjMuNjAwIDE0Ni4wODMsNjMuNjAwIDE0Ni42NzMgTTE2Ni4yMDAgMTYzLjg1OSBDIDE2My40MzQgMTY0LjE2MywxNTkuNDg0IDE2NS41OTcsMTU3LjIwMCAxNjcuMTI3IEwgMTU1LjAwMCAxNjguNjAwIDE1NC44ODEgMTcxLjEwMCBDIDE1NC43MzAgMTc0LjI2MywxNTUuMjIxIDE3NC4zNDEsMTU3Ljk3MiAxNzEuNTg5IEMgMTYwLjgyMCAxNjguNzQyLDE2Mi45ODMgMTY3Ljg2NCwxNjcuMjAwIDE2Ny44NDQgQyAxNzMuNDMxIDE2Ny44MTUsMTc2LjAzMiAxNzAuNTI1LDE3Ni4xNDMgMTc3LjE2MyBMIDE3Ni4yMDAgMTgwLjYwMCAxNzQuNzU1IDE4MS4zMDYgQyAxNzMuOTYxIDE4MS42OTUsMTcwLjE4MSAxODIuNjU3LDE2Ni4zNTUgMTgzLjQ0MyBDIDE1NC4wMjkgMTg1Ljk3OCwxNTAuODM4IDE4OC44MjUsMTUxLjI4MCAxOTYuODkwIEMgMTUxLjg1MCAyMDcuMjc3LDE2NS4yMTYgMjExLjA2NywxNzQuMzA0IDIwMy40MTkgQyAxNzUuNzQzIDIwMi4yMDksMTc2LjgwMCAyMDIuMDk4LDE3Ni44MDAgMjAzLjE1OSBDIDE3Ni44MDAgMjA0LjYzOCwxNzkuNDA2IDIwNi40MDAsMTgxLjU5NCAyMDYuNDAwIEMgMTg3LjQzNiAyMDYuNDAwLDE5MS40MjggMjAzLjU1MiwxODYuNzk3IDIwMi42ODkgQyAxODUuNjc2IDIwMi40ODEsMTg0LjY1MyAyMDEuOTY5LDE4NC4wNzkgMjAxLjMzMSBMIDE4My4xNTggMjAwLjMwNiAxODMuMjQ3IDE4Ny4yNTMgQyAxODMuMzQ2IDE3Mi44MDAsMTgzLjE1NiAxNzEuMzE2LDE4MC43OTAgMTY4LjA0OSBDIDE3OC40MTMgMTY0Ljc2OCwxNzIuNzQ1IDE2My4xNDEsMTY2LjIwMCAxNjMuODU5IE0yMDIuNjg3IDE2NC4wMzcgQyAxOTYuNzMyIDE2NS40MzksMTkzLjM4NiAxNjkuNzU4LDE5My40MzQgMTc1Ljk4MSBDIDE5My40ODQgMTgyLjU5OCwxOTYuMjQ1IDE4NS44OTgsMjAzLjI5MyAxODcuNzY1IEMgMjExLjMxMiAxODkuODg4LDIxMy45NzYgMTkyLjE2OCwyMTMuNDY2IDE5Ni40NzIgQyAyMTIuNDUwIDIwNS4wNDksMjAyLjQyNCAyMDUuNzI0LDE5NS42MzkgMTk3LjY3MSBMIDE5NC44NTYgMTk2Ljc0MiAxOTQuMjgzIDE5Ny42NzEgQyAxOTMuOTY3IDE5OC4xODIsMTkzLjM5NSAxOTkuNzYyLDE5My4wMTEgMjAxLjE4MyBMIDE5Mi4zMTIgMjAzLjc2NSAxOTMuMzUxIDIwNC41OTQgQyAxOTMuOTIzIDIwNS4wNTAsMTk1LjI0OCAyMDUuNjU4LDE5Ni4yOTUgMjA1Ljk0NyBDIDE5Ny4zNDMgMjA2LjIzNSwxOTguNzIyIDIwNi42MzUsMTk5LjM2MCAyMDYuODM1IEMgMjExLjI4OSAyMTAuNTg3LDIyMy44NDggMTk4LjM4MiwyMTguNTM2IDE4OC4yMDAgQyAyMTYuOTI2IDE4NS4xMTMsMjE0LjMyMyAxODMuNjUyLDIwNi4wMDAgMTgxLjE2NCBDIDIwMS4wNjAgMTc5LjY4NywxOTkuMDAwIDE3Ny41MjksMTk5LjAwMSAxNzMuODMxIEMgMTk5LjAwMyAxNjYuMzcxLDIwNy4wMjggMTY0LjYxNCwyMTMuODQ4IDE3MC41ODAgQyAyMTUuOTY4IDE3Mi40MzQsMjE2LjgwMCAxNzIuNDQwLDIxNi44MDAgMTcwLjYwMCBDIDIxNi44MDAgMTcwLjEzOCwyMTYuOTYxIDE2OS41ODksMjE3LjE1OCAxNjkuMzgwIEMgMjE3LjM1NSAxNjkuMTcxLDIxNy42NDAgMTY4LjQxMiwyMTcuNzkxIDE2Ny42OTMgQyAyMTguMzc2IDE2NC45MTYsMjA4Ljc5OSAxNjIuNTk3LDIwMi42ODcgMTY0LjAzNyBNMjQwLjQwMCAxNjMuODg1IEMgMjI3LjI3MSAxNjYuMTg5LDIyMC4zOTYgMTgyLjc3NCwyMjYuOTI1IDE5Ni4zOTEgQyAyMzEuOTg4IDIwNi45NDgsMjQ2LjM5MSAyMTAuNDA3LDI1OC4wMDAgMjAzLjg1MyBDIDI2MC40OTYgMjAyLjQ0NCwyNjAuODAwIDIwMi4wMjIsMjYwLjgwMCAxOTkuOTYyIEMgMjYwLjgwMCAxOTcuNDMxLDI2MC40MDQgMTk3LjI5NiwyNTguMTE5IDE5OS4wNDkgQyAyNDYuNTkwIDIwNy44OTQsMjMyLjgwMCAyMDEuNjUxLDIzMi44MDAgMTg3LjU4NSBMIDIzMi44MDAgMTg1LjIxMCAyNDcuNzAwIDE4NS4xMDUgTCAyNjIuNjAwIDE4NS4wMDAgMjYyLjcyMiAxODIuNjE4IEMgMjYzLjM5MSAxNjkuNjA2LDI1My43NzYgMTYxLjUzNiwyNDAuNDAwIDE2My44ODUgTTMzMy44MDAgMTYzLjg0NyBDIDMyNi45NDIgMTY0LjUzNywzMjIuMDAwIDE2Ny42OTMsMzIyLjAwMCAxNzEuMzgxIEMgMzIyLjAwMCAxNzQuMjQwLDMyMi42OTMgMTc0LjMwNywzMjUuMTkxIDE3MS42ODggQyAzMzAuOTQ1IDE2NS42NTUsMzQwLjg2MSAxNjYuNDk2LDM0Mi45NjYgMTczLjE5NSBDIDM0NS4yMTMgMTgwLjM0OCwzNDQuNDU0IDE4MS4yNzcsMzM0LjgwMCAxODMuMTg2IEMgMzIxLjU2MyAxODUuODAzLDMxOC41OTYgMTg4LjIzMiwzMTguNjYwIDE5Ni40MDAgQyAzMTguNzQzIDIwNi44NjgsMzMwLjYwNyAyMTAuOTIyLDM0MC44MzUgMjAzLjk3NiBDIDM0My42MjMgMjAyLjA4MywzNDMuNzY2IDIwMi4wNjgsMzQ0LjQwNCAyMDMuNjEwIEMgMzQ1LjEyNyAyMDUuMzU0LDM0Ni43OTcgMjA2LjQwMCwzNDguODYyIDIwNi40MDEgQyAzNTQuNzE1IDIwNi40MDUsMzU4LjYzOCAyMDMuNTYyLDM1NC4wMDAgMjAyLjY3OCBDIDM1MC40NTkgMjAyLjAwNCwzNTAuNjAwIDIwMi42NDgsMzUwLjYwMCAxODcuMDg4IEMgMzUwLjYwMCAxNzEuNTk0LDM1MC40NjkgMTcwLjc1NCwzNDcuNTIwIDE2Ny40MDQgQyAzNDUuMDYwIDE2NC42MTAsMzM5Ljc5MSAxNjMuMjQ0LDMzMy44MDAgMTYzLjg0NyBNMjQ3Ljg5NiAxNjcuNDA2IEMgMjUyLjAwMyAxNjguNjI2LDI1NS40NDcgMTc0LjM2NSwyNTUuMTI0IDE3OS40NTEgTCAyNTUuMDAwIDE4MS40MDAgMjQzLjkwMCAxODEuNTA2IEwgMjMyLjgwMCAxODEuNjEzIDIzMi44MDAgMTgwLjYyNiBDIDIzMi44MDAgMTcxLjkwMiwyNDAuNDU3IDE2NS4xOTcsMjQ3Ljg5NiAxNjcuNDA2IE0yOTQuMjk1IDE2OC41NDMgQyAzMDEuNTMzIDE3Mi4zMDAsMzA0LjAxNiAxODYuMjUzLDI5OS4yNTcgMTk2LjQyNyBDIDI5NS4zNDQgMjA0Ljc5MywyODQuMDQ0IDIwNS42MjcsMjc5LjU5OSAxOTcuODc4IEMgMjc0LjMzNiAxODguNzAyLDI3Ni44NjggMTcyLjc0OSwyODQuMTk3IDE2OC45MDYgQyAyODcuMDEyIDE2Ny40MzEsMjkxLjgxOSAxNjcuMjU4LDI5NC4yOTUgMTY4LjU0MyBNMTc2LjE5NyAxOTEuMjA4IEMgMTc2LjE5NCAxOTguMzI0LDE3Ni4wNTcgMTk4LjcxMCwxNzIuNzgyIDIwMC44MTEgQyAxNjYuMjM1IDIwNS4wMTMsMTU5Ljk5OSAyMDIuOTk5LDE1OS4wMDMgMTk2LjM2MiBDIDE1OC4xNDIgMTkwLjYxNSwxNjEuMzg0IDE4Ny44NTEsMTcxLjYwMCAxODUuNjI0IEMgMTc2LjYwMSAxODQuNTM0LDE3Ni4yMDAgMTg0LjA0NywxNzYuMTk3IDE5MS4yMDggTTM0My41MDQgMTkxLjAwNSBDIDM0My42MjYgMTk4LjAyOCwzNDMuNDI1IDE5OC41ODYsMzM5Ljk1MCAyMDAuODY3IEMgMzM0LjAwMiAyMDQuNzcxLDMyNy42NDQgMjAyLjk5NCwzMjYuNDE4IDE5Ny4wODUgQyAzMjUuMjYzIDE5MS41MjEsMzI4LjAyMiAxODguMzM0LDMzNS42MDAgMTg2LjQ4MCBDIDM0NC4zNzUgMTg0LjMzNCwzNDMuMzc4IDE4My43NjMsMzQzLjUwNCAxOTEuMDA1IE0xNTcuNjc5IDIxOS40NTAgQyAxNTMuMzc1IDIyMS42MzQsMTU1LjA0OSAyMjguMDAwLDE1OS45MjcgMjI4LjAwMCBDIDE2NS43MzMgMjI4LjAwMCwxNjYuMzM0IDIxOS44MzcsMTYwLjU5MCAyMTkuMDA5IEMgMTU5LjUwOSAyMTguODUzLDE1OC41NzcgMjE4Ljk5NSwxNTcuNjc5IDIxOS40NTAgTTEwMi44ODIgMjIyLjY5NyBMIDEwMy4wMDAgMjI1LjQwMCAxMDQuNDAwIDIyNS4zMDAgQyAxMDUuMTcwIDIyNS4yNDYsMTA5LjI4MiAyMjUuMDg5LDExMy41MzggMjI0Ljk1MiBMIDEyMS4yNzYgMjI0LjcwNCAxMjEuMTUyIDI1Mi40NTIgTCAxMjEuMDI5IDI4MC4yMDAgMTI1LjExNCAyODAuMzE0IEMgMTI4LjIyMyAyODAuNDAxLDEyOS4yMDcgMjgwLjMwNSwxMjkuMjMwIDI3OS45MTQgQyAxMjkuMjQ2IDI3OS42MzEsMTI5LjIzMyAyNjcuNzY3LDEyOS4yMDIgMjUzLjU0OSBDIDEyOS4xNzEgMjM5LjMzMSwxMjkuMjcyIDIyNy4wMjUsMTI5LjQyNiAyMjYuMjAyIEwgMTI5LjcwNyAyMjQuNzA2IDEzNy4xNTMgMjI0Ljk1NSBDIDE0MS4yNDkgMjI1LjA5MSwxNDUuMjMwIDIyNS4yNDcsMTQ2LjAwMCAyMjUuMzAyIEwgMTQ3LjQwMCAyMjUuNDAwIDE0Ny40MDAgMjIyLjgwMCBMIDE0Ny40MDAgMjIwLjIwMCAxMjUuMDgyIDIyMC4wOTcgTCAxMDIuNzYzIDIxOS45OTMgMTAyLjg4MiAyMjIuNjk3IE0xOTQuNDAwIDIzOC4xMjQgQyAxOTEuNDc4IDIzOC45NzAsMTg5LjgxOSAyMzkuOTI2LDE4Ny4yNzUgMjQyLjIyOCBDIDE4NC4zMDcgMjQ0LjkxMywxODQuNDAxIDI0NC45MjQsMTg0LjM5NCAyNDEuOTAwIEMgMTg0LjM4NiAyMzguNjMxLDE4NC4zMzAgMjM4LjU4MiwxODAuNjU1IDIzOC41OTYgTCAxNzcuNTExIDIzOC42MDggMTc3LjQ1NSAyNTkuNTA0IEwgMTc3LjQwMCAyODAuNDAwIDE4MS4wODUgMjgwLjQwMCBMIDE4NC43NjkgMjgwLjQwMCAxODQuNzEwIDI2Ny4zMDAgQyAxODQuNjIwIDI0Ny4zNTcsMTg2LjQwMCAyNDMuMjAwLDE5NS4wMzIgMjQzLjIwMCBDIDIwMi43NTggMjQzLjIwMCwyMDQuNTMzIDI0Ny45MDQsMjAzLjY1OSAyNjYuMDY0IEMgMjAzLjQwMiAyNzEuNDE5LDIwMy4xOTMgMjc2LjgzNSwyMDMuMTk2IDI3OC4xMDAgTCAyMDMuMjAwIDI4MC40MDAgMjA2LjgwMCAyODAuNDAwIEMgMjA5LjM4NyAyODAuNDAwLDIxMC40MTQgMjgwLjI1OSwyMTAuNDUwIDI3OS45MDAgQyAyMTAuNDc4IDI3OS42MjUsMjEwLjQ2MSAyNzUuMjYwLDIxMC40MTIgMjcwLjIwMCBDIDIxMC4yMDkgMjQ4Ljk0NiwyMTIuNDA1IDI0My4wOTYsMjIwLjYwMCAyNDMuMDYwIEMgMjIzLjg4MiAyNDMuMDQ1LDIyNi4xODAgMjQ0LjAyNCwyMjcuNzI3IDI0Ni4wOTYgQyAyMjkuNzMzIDI0OC43ODIsMjI5LjgwNiAyNDkuNDk1LDIyOS43MTQgMjY1LjUxNSBMIDIyOS42MjkgMjgwLjQzMCAyMzMuMjU3IDI4MC4zMTUgTCAyMzYuODg2IDI4MC4yMDAgMjM2LjkxMiAyNjQuMDAwIEMgMjM2LjkzNyAyNDguMTkyLDIzNi45MTYgMjQ3Ljc0NSwyMzYuMDUyIDI0NS41MzAgQyAyMzIuMjc5IDIzNS44NzEsMjE4LjA1MCAyMzQuOTYzLDIxMS40MDAgMjQzLjk1OCBDIDIwOS45NDAgMjQ1LjkzMywyMDkuODU0IDI0NS45NDQsMjA5LjA1MCAyNDQuMjQ5IEMgMjA2LjcwOSAyMzkuMzE1LDE5OS45OTEgMjM2LjUwNiwxOTQuNDAwIDIzOC4xMjQgTTI2MS4yODMgMjM4LjIxMCBDIDI0MS4yNTIgMjQyLjU2MCwyNDAuNjgyIDI3NC40MDYsMjYwLjUyNyAyODAuNDQyIEMgMjY4Ljg2NCAyODIuOTc3LDI4MS41MzMgMjc5LjQwMSwyODIuMTMyIDI3NC4zNDQgQyAyODIuNDY3IDI3MS41MTcsMjgyLjAwNyAyNzEuMTg5LDI4MC4wNTIgMjcyLjg2MiBDIDI2OS4yMjAgMjgyLjEzNCwyNTUuNjg0IDI3Ni42NDcsMjU0LjI0NCAyNjIuNDAwIEMgMjUzLjkwMCAyNTguOTk1LDI1Mi44NDkgMjU5LjIyMywyNjkuNDIxIDI1OS4xMDUgTCAyODQuMjAwIDI1OS4wMDAgMjg0LjMzNiAyNTcuMDAwIEMgMjg1LjIzMSAyNDMuODI4LDI3NC43NTEgMjM1LjI4NiwyNjEuMjgzIDIzOC4yMTAgTTE1Ni4zODAgMjM4Ljc5MyBDIDE1Ni4zNjkgMjM4LjkwNywxNTYuMzQzIDI0OC4yNzAsMTU2LjMyMiAyNTkuNjAwIEwgMTU2LjI4NSAyODAuMjAwIDE1OS44NzYgMjgwLjMxNCBMIDE2My40NjcgMjgwLjQyOCAxNjMuNDM0IDI1OS41MzEgTCAxNjMuNDAwIDIzOC42MzMgMTU5LjkwMCAyMzguNjA5IEMgMTU3Ljk3NSAyMzguNTk2LDE1Ni4zOTEgMjM4LjY3OCwxNTYuMzgwIDIzOC43OTMgTTI2OS4xNjQgMjQxLjQyNiBDIDI3My40MDggMjQyLjY4NywyNzYuMjYzIDI0Ny4wNzcsMjc2LjQ5MCAyNTIuNjg5IEwgMjc2LjYwMCAyNTUuNDAwIDI2NS41MDAgMjU1LjUwNiBMIDI1NC40MDAgMjU1LjYxMyAyNTQuNDA1IDI1NC41MDYgQyAyNTQuNDQxIDI0NS45NzUsMjYxLjk4MSAyMzkuMjkzLDI2OS4xNjQgMjQxLjQyNiAiIHN0cm9rZT0ibm9uZSIgZmlsbD0iI2Y4ZjVmNSIgZmlsbC1ydWxlPSJldmVub2RkIj48L3BhdGg+PHBhdGggaWQ9InBhdGgxIiBkPSJNMTc2LjIwMCAyMi43MDAgQyAxNjMuNzg2IDM1LjE4NSwxNTEuODIzIDQ3LjIwMCwxNDkuNjE2IDQ5LjQwMCBDIDE0NC4zMzggNTQuNjYxLDU0LjM1MCAxNDQuNjUzLDQ5LjMwNCAxNDkuNzE3IEMgNDcuMTU3IDE1MS44NzIsMzUuMTg1IDE2My43ODksMjIuNzAwIDE3Ni4yMDEgQyAyLjU3OCAxOTYuMjA0LDAuMDAwIDE5OC45MDYsMC4wMDAgMTk5Ljk4OSBDIDAuMDAwIDIwMS4wNzAsMi4xNTMgMjAzLjM0MiwxOC42ODAgMjE5LjcwNiBDIDI4Ljk1NCAyMjkuODc4LDQ3LjgwOSAyNDguNzEyLDYwLjU4MCAyNjEuNTYwIEMgODkuODg4IDI5MS4wNDUsMTA4Ljk1NSAzMTAuMTEyLDEzOC40NDAgMzM5LjQyMCBDIDE1MS4yODggMzUyLjE5MSwxNzAuMTIyIDM3MS4wNDYsMTgwLjI5NCAzODEuMzIwIEMgMTk2LjU0MyAzOTcuNzMyLDE5OC45MzUgNDAwLjAwMCwxOTkuOTk0IDQwMC4wMDAgQyAyMDEuMDU0IDQwMC4wMDAsMjA0LjEzMiAzOTcuMDU3LDIyNS43NTkgMzc1LjM2MCBDIDIzOS4yNjcgMzYxLjgwOCwyNTAuNTAwIDM1MC41NDAsMjUwLjcyMCAzNTAuMzIwIEMgMjUxLjI0MyAzNDkuNzk3LDM0OS42NTkgMjUxLjM4MSwzNTAuMjYwIDI1MC43ODAgQyAzNTAuNTEzIDI1MC41MjcsMzYxLjgwOCAyMzkuMjY3LDM3NS4zNjAgMjI1Ljc1OSBDIDM5Ny4wMjcgMjA0LjE2Miw0MDAuMDAwIDIwMS4wNTMsNDAwLjAwMCAxOTkuOTk3IEMgNDAwLjAwMCAxOTguOTQwLDM5Ny4xMTMgMTk1LjkyMCwzNzYuMTAwIDE3NC45OTQgQyAzNjIuOTU1IDE2MS45MDMsMzUxLjY2MCAxNTAuNjUwLDM1MS4wMDAgMTQ5Ljk4OCBDIDM1MC4zNDAgMTQ5LjMyNSwzMjcuNzUwIDEyNi43MzMsMzAwLjgwMCA5OS43ODIgQyAyNzMuODUwIDcyLjgzMiwyNTEuNDY1IDUwLjQ0NiwyNTEuMDU1IDUwLjAzNSBDIDI1MC42NDYgNDkuNjI1LDIzOS4yNjAgMzguMTk5LDIyNS43NTUgMjQuNjQ1IEMgMjA0LjA1NSAyLjg2NywyMDEuMDU3IDAuMDAwLDE5OS45ODUgMC4wMDAgQyAxOTguOTE0IDAuMDAwLDE5Ni4xMzYgMi42NTEsMTc2LjIwMCAyMi43MDAgTTMwOS4yMDAgMTcyLjgyNSBDIDMwOS4zMTAgMTkwLjc0MSwzMDkuMzQyIDIwNS42MDksMzA5LjI3MSAyMDUuODY0IEMgMzA5LjE4MyAyMDYuMTc5LDMwNy45NjQgMjA2LjMwOCwzMDUuNDcxIDIwNi4yNjQgTCAzMDEuODAwIDIwNi4yMDAgMzAxLjc4NSAyMDMuMDAwIEMgMzAxLjc3MSAxOTkuOTk3LDMwMS4wNTQgMTk4LjY3NSwzMDAuNDQ2IDIwMC41MzAgQyAyOTkuMDEyIDIwNC45MDEsMjg4LjgxNSAyMDguMzQyLDI4Mi4zMjAgMjA2LjY0NyBDIDI2NC43NjcgMjAyLjA2NywyNjQuMzc5IDE3MC42NjIsMjgxLjgwMCAxNjQuNTQyIEMgMjg3LjU4NSAxNjIuNTA5LDI5NS40MzkgMTY0LjE2NywyOTkuMTYyIDE2OC4yMDUgQyAzMDEuNzg0IDE3MS4wNTAsMzAxLjc1OSAxNzEuMTk0LDMwMS40NjIgMTU0Ljk3MSBDIDMwMS4yODYgMTQ1LjMzNCwzMDEuMzMyIDE0MC40MjMsMzAxLjYwMCAxNDAuMzM0IEMgMzAxLjgyMiAxNDAuMjYwLDMwMy41NzggMTQwLjIxMSwzMDUuNTAyIDE0MC4yMjUgTCAzMDkuMDAwIDE0MC4yNTAgMzA5LjIwMCAxNzIuODI1IE03My4xNTMgMTQ4LjcwMCBDIDczLjkxNSAxNTEuMzEzLDc1LjE1MiAxNTUuNzA1LDc2LjA1NSAxNTkuMDAwIEMgNzYuMjk2IDE1OS44ODAsNzYuNjI3IDE2MS4wNTAsNzYuNzkxIDE2MS42MDAgQyA3Ny4yMzEgMTYzLjA3OSw3Ny44MzQgMTY1LjE5MSw3OC4zMzMgMTY3LjAwMCBDIDc5LjAxOCAxNjkuNDg0LDgxLjIxMiAxNzYuODg2LDgxLjU5NSAxNzguMDAwIEMgODEuOTQxIDE3OS4wMDksODIuNDcyIDE4MC43NDEsODQuNzg0IDE4OC40MDAgQyA4NS40ODEgMTkwLjcxMCw4Ni4yMDMgMTkzLjA1MCw4Ni4zODggMTkzLjYwMCBDIDg2LjU3NCAxOTQuMTUwLDg2LjgzNiAxOTQuOTQxLDg2Ljk3MiAxOTUuMzU3IEMgODcuNDAyIDE5Ni42NzcsODcuODEwIDE5NS42MjIsOTMuNzcwIDE3Ny44MDAgQyA5Ni4xMTkgMTcwLjc3Myw5Ni44MjUgMTY4LjUzOSw5OC44NTcgMTYxLjcwMCBDIDk5LjI2NiAxNjAuMzI1LDk5Ljk2MiAxNTcuOTg1LDEwMC40MDMgMTU2LjUwMCBDIDEwMC44NDUgMTU1LjAxNSwxMDEuNDA2IDE1My4wODAsMTAxLjY1MCAxNTIuMjAwIEMgMTAzLjQyNCAxNDUuNzkxLDEwMy4yNTEgMTQ2LjAwMCwxMDYuNzgxIDE0Ni4wMDAgTCAxMDkuODY0IDE0Ni4wMDAgMTExLjEzMyAxNDkuOTAwIEMgMTExLjgzMCAxNTIuMDQ1LDExMi45NjMgMTU1LjYwMCwxMTMuNjUwIDE1Ny44MDAgQyAxMTYuMDE4IDE2NS4zODMsMTI1LjkzNiAxOTQuODM4LDEyNi4yMjYgMTk1LjE1MCBDIDEyNi41MDYgMTk1LjQ0OSwxMjcuNjE5IDE5Mi40MDAsMTMwLjczNyAxODIuODAwIEMgMTMzLjQ3MCAxNzQuMzg1LDEzNC43NzYgMTcwLjA3NiwxMzYuODAwIDE2Mi44MDAgQyAxMzguMTM5IDE1Ny45ODUsMTM5LjYzNiAxNTIuNTI1LDE0MC40NDcgMTQ5LjUwMCBMIDE0MS4zODUgMTQ2LjAwMCAxNDQuNTM4IDE0Ni4wMDAgTCAxNDcuNjkxIDE0Ni4wMDAgMTQ3LjQ4NiAxNDcuMTAwIEMgMTQ3LjM3MyAxNDcuNzA1LDE0Mi44OTMgMTYxLjI1MCwxMzcuNTMwIDE3Ny4yMDAgTCAxMjcuNzc5IDIwNi4yMDAgMTI0LjQwNSAyMDYuMjAwIEwgMTIxLjAzMSAyMDYuMjAwIDEyMC4zNzEgMjA0LjIwMCBDIDEyMC4wMDkgMjAzLjEwMCwxMTkuMzI3IDIwMC45NDAsMTE4Ljg1NiAxOTkuNDAwIEMgMTE1Ljk3MiAxODkuOTczLDExMC40MTggMTczLjA4MiwxMDcuMjE5IDE2NC4wMDkgQyAxMDYuMzI4IDE2MS40ODQsMTA1LjYwMCAxNTkuMzY5LDEwNS42MDAgMTU5LjMwOSBDIDEwNS42MDAgMTU3LjAwMywxMDMuMzQwIDE2My4wMTIsOTYuNzk4IDE4Mi43MDkgTCA4OC45OTYgMjA2LjIwMCA4NS42NTMgMjA2LjIwMCBMIDgyLjMxMSAyMDYuMjAwIDgxLjc4OCAyMDQuODAwIEMgODEuNTAxIDIwNC4wMzAsODAuOTEwIDIwMi4yMzAsODAuNDc1IDIwMC44MDAgQyA4MC4wNDAgMTk5LjM3MCw3OS4xMTAgMTk2LjMxMCw3OC40MDkgMTk0LjAwMCBDIDc3LjcwNyAxOTEuNjkwLDc2LjgxMCAxODguODEwLDc2LjQxNSAxODcuNjAwIEMgNzYuMDIxIDE4Ni4zOTAsNzUuMjk3IDE4NC4wNTAsNzQuODA2IDE4Mi40MDAgQyA3My43MzUgMTc4Ljc5Myw3MS44MDQgMTcyLjYyNyw3MC43OTkgMTY5LjYwMCBDIDcwLjM5NyAxNjguMzkwLDY4Ljk2MCAxNjMuODkwLDY3LjYwNSAxNTkuNjAwIEMgNjYuMjUxIDE1NS4zMTAsNjQuNzk1IDE1MC43OTgsNjQuMzcxIDE0OS41NzMgQyA2My4wOTEgMTQ1Ljg3Niw2Mi45NjYgMTQ2LjAwMCw2Ny45ODMgMTQ2LjAwMCBMIDcyLjM2NiAxNDYuMDAwIDczLjE1MyAxNDguNzAwIE0xNzUuNjAwIDE2NC41MTggQyAxODIuNTkwIDE2Ny4wNzIsMTgzLjM2OSAxNjkuMzg4LDE4My4yNDcgMTg3LjI1MyBMIDE4My4xNTggMjAwLjMwNiAxODQuMDc5IDIwMS4zMzEgQyAxODQuNjUzIDIwMS45NjksMTg1LjY3NiAyMDIuNDgxLDE4Ni43OTcgMjAyLjY4OSBDIDE5MS40MjggMjAzLjU1MiwxODcuNDM2IDIwNi40MDAsMTgxLjU5NCAyMDYuNDAwIEMgMTc5LjQwNiAyMDYuNDAwLDE3Ni44MDAgMjA0LjYzOCwxNzYuODAwIDIwMy4xNTkgQyAxNzYuODAwIDIwMi4wOTgsMTc1Ljc0MyAyMDIuMjA5LDE3NC4zMDQgMjAzLjQxOSBDIDE2NS4yMTYgMjExLjA2NywxNTEuODUwIDIwNy4yNzcsMTUxLjI4MCAxOTYuODkwIEMgMTUwLjgzOCAxODguODI1LDE1NC4wMjkgMTg1Ljk3OCwxNjYuMzU1IDE4My40NDMgQyAxNzAuMTgxIDE4Mi42NTcsMTczLjk2MSAxODEuNjk1LDE3NC43NTUgMTgxLjMwNiBMIDE3Ni4yMDAgMTgwLjYwMCAxNzYuMTQzIDE3Ny4xNjMgQyAxNzYuMDMyIDE3MC41MjUsMTczLjQzMSAxNjcuODE1LDE2Ny4yMDAgMTY3Ljg0NCBDIDE2Mi45ODMgMTY3Ljg2NCwxNjAuODIwIDE2OC43NDIsMTU3Ljk3MiAxNzEuNTg5IEMgMTU1LjIyMSAxNzQuMzQxLDE1NC43MzAgMTc0LjI2MywxNTQuODgxIDE3MS4xMDAgTCAxNTUuMDAwIDE2OC42MDAgMTU3LjIwMCAxNjcuMTI3IEMgMTYxLjkwNyAxNjMuOTc0LDE3MC42OTkgMTYyLjcyOCwxNzUuNjAwIDE2NC41MTggTTIxMS4zMjggMTYzLjk4NiBDIDIxNi44MDAgMTY0Ljg4MiwyMTkuMjU1IDE2Ny4xNTQsMjE3LjE1OCAxNjkuMzgwIEMgMjE2Ljk2MSAxNjkuNTg5LDIxNi44MDAgMTcwLjEzOCwyMTYuODAwIDE3MC42MDAgQyAyMTYuODAwIDE3Mi40NDAsMjE1Ljk2OCAxNzIuNDM0LDIxMy44NDggMTcwLjU4MCBDIDIwNy4wMjggMTY0LjYxNCwxOTkuMDAzIDE2Ni4zNzEsMTk5LjAwMSAxNzMuODMxIEMgMTk5LjAwMCAxNzcuNTI5LDIwMS4wNjAgMTc5LjY4NywyMDYuMDAwIDE4MS4xNjQgQyAyMTQuMzIzIDE4My42NTIsMjE2LjkyNiAxODUuMTEzLDIxOC41MzYgMTg4LjIwMCBDIDIyMy44NDggMTk4LjM4MiwyMTEuMjg5IDIxMC41ODcsMTk5LjM2MCAyMDYuODM1IEMgMTk4LjcyMiAyMDYuNjM1LDE5Ny4zNDMgMjA2LjIzNSwxOTYuMjk1IDIwNS45NDcgQyAxOTUuMjQ4IDIwNS42NTgsMTkzLjkyMyAyMDUuMDUwLDE5My4zNTEgMjA0LjU5NCBMIDE5Mi4zMTIgMjAzLjc2NSAxOTMuMDExIDIwMS4xODMgQyAxOTMuMzk1IDE5OS43NjIsMTkzLjk2NyAxOTguMTgyLDE5NC4yODMgMTk3LjY3MSBMIDE5NC44NTYgMTk2Ljc0MiAxOTUuNjM5IDE5Ny42NzEgQyAyMDIuNDI0IDIwNS43MjQsMjEyLjQ1MCAyMDUuMDQ5LDIxMy40NjYgMTk2LjQ3MiBDIDIxMy45NzYgMTkyLjE2OCwyMTEuMzEyIDE4OS44ODgsMjAzLjI5MyAxODcuNzY1IEMgMTk2LjI0NSAxODUuODk4LDE5My40ODQgMTgyLjU5OCwxOTMuNDM0IDE3NS45ODEgQyAxOTMuMzY1IDE2Ni45NDAsMjAwLjQzMyAxNjIuMjAyLDIxMS4zMjggMTYzLjk4NiBNMjUwLjUyOCAxNjQuMTk4IEMgMjU4LjUzMyAxNjYuMjgzLDI2My4yMDAgMTczLjMzMiwyNjIuNzIyIDE4Mi42MTggTCAyNjIuNjAwIDE4NS4wMDAgMjQ3LjcwMCAxODUuMTA1IEwgMjMyLjgwMCAxODUuMjEwIDIzMi44MDAgMTg3LjU4NSBDIDIzMi44MDAgMjAxLjY1MSwyNDYuNTkwIDIwNy44OTQsMjU4LjExOSAxOTkuMDQ5IEMgMjYwLjQwNCAxOTcuMjk2LDI2MC44MDAgMTk3LjQzMSwyNjAuODAwIDE5OS45NjIgQyAyNjAuODAwIDIwMi4zNjMsMjU5LjYyNiAyMDMuNDIxLDI1NC44MDAgMjA1LjM3MCBDIDIzNi42NzAgMjEyLjY5MiwyMjAuMTg3IDE5Ny42MTIsMjI1LjMyMiAxNzguNDAwIEMgMjI4LjI4MyAxNjcuMzE5LDIzOS4xMDQgMTYxLjIyMiwyNTAuNTI4IDE2NC4xOTggTTM0My44MDAgMTY0LjgzNCBDIDM0OS44MDAgMTY3LjA3OSwzNTAuNjAwIDE2OS42OTgsMzUwLjYwMCAxODcuMDg4IEMgMzUwLjYwMCAyMDIuNjQ4LDM1MC40NTkgMjAyLjAwNCwzNTQuMDAwIDIwMi42NzggQyAzNTguNjM4IDIwMy41NjIsMzU0LjcxNSAyMDYuNDA1LDM0OC44NjIgMjA2LjQwMSBDIDM0Ni43OTcgMjA2LjQwMCwzNDUuMTI3IDIwNS4zNTQsMzQ0LjQwNCAyMDMuNjEwIEMgMzQzLjc2NiAyMDIuMDY4LDM0My42MjMgMjAyLjA4MywzNDAuODM1IDIwMy45NzYgQyAzMzAuNjA3IDIxMC45MjIsMzE4Ljc0MyAyMDYuODY4LDMxOC42NjAgMTk2LjQwMCBDIDMxOC41OTYgMTg4LjIzMiwzMjEuNTYzIDE4NS44MDMsMzM0LjgwMCAxODMuMTg2IEMgMzQ0LjQ1NCAxODEuMjc3LDM0NS4yMTMgMTgwLjM0OCwzNDIuOTY2IDE3My4xOTUgQyAzNDAuODYxIDE2Ni40OTYsMzMwLjk0NSAxNjUuNjU1LDMyNS4xOTEgMTcxLjY4OCBDIDMyMi42OTMgMTc0LjMwNywzMjIuMDAwIDE3NC4yNDAsMzIyLjAwMCAxNzEuMzgxIEMgMzIyLjAwMCAxNjUuNTI2LDMzNS4xMjAgMTYxLjU4NywzNDMuODAwIDE2NC44MzQgTTI0MS45OTcgMTY3LjE3NCBDIDIzNy4xNTcgMTY4LjY0NiwyMzIuODAwIDE3NS4wMTgsMjMyLjgwMCAxODAuNjI2IEwgMjMyLjgwMCAxODEuNjEzIDI0My45MDAgMTgxLjUwNiBMIDI1NS4wMDAgMTgxLjQwMCAyNTUuMTI0IDE3OS40NTEgQyAyNTUuNjIxIDE3MS42MzQsMjQ4LjY3OSAxNjUuMTQxLDI0MS45OTcgMTY3LjE3NCBNMjg2LjM5NyAxNjcuOTUwIEMgMjc0LjAyNSAxNzIuMDA3LDI3My4yMzQgMTk3LjUwNCwyODUuMzE5IDIwMi43MTcgQyAyODguODE0IDIwNC4yMjUsMjk0LjM0NyAyMDIuNzA5LDI5Ny4zMTQgMTk5LjQzMSBDIDMwMy4xMTAgMTkzLjAyNiwzMDIuOTMzIDE3NS42NjMsMjk3LjAxOCAxNzAuNDcwIEMgMjk0LjI1MiAxNjguMDQxLDI4OS41MzQgMTY2LjkyMSwyODYuMzk3IDE2Ny45NTAgTTE3MS42MDAgMTg1LjYyNCBDIDE2MS4zODQgMTg3Ljg1MSwxNTguMTQyIDE5MC42MTUsMTU5LjAwMyAxOTYuMzYyIEMgMTU5Ljk5OSAyMDIuOTk5LDE2Ni4yMzUgMjA1LjAxMywxNzIuNzgyIDIwMC44MTEgQyAxNzYuMDU3IDE5OC43MTAsMTc2LjE5NCAxOTguMzI0LDE3Ni4xOTcgMTkxLjIwOCBDIDE3Ni4yMDAgMTg0LjA0NywxNzYuNjAxIDE4NC41MzQsMTcxLjYwMCAxODUuNjI0IE0zNDAuNjAwIDE4NS4yNjEgQyAzMzMuNjAyIDE4Ni45NTUsMzMyLjAyMSAxODcuNDAyLDMzMC43MjQgMTg4LjA1MiBDIDMyMi4xNTEgMTkyLjM0OSwzMjYuNjM0IDIwNS4wMjAsMzM1LjkyMSAyMDIuNzM5IEMgMzQyLjAxNiAyMDEuMjQzLDM0My42MzkgMTk4LjczMiwzNDMuNTA0IDE5MS4wMDUgQyAzNDMuMzg5IDE4NC4zNDksMzQzLjQ5NSAxODQuNTYxLDM0MC42MDAgMTg1LjI2MSBNMTYyLjk0NSAyMTkuOTE5IEMgMTY2LjI1OCAyMjIuODY2LDE2NC4zNDEgMjI4LjAwMCwxNTkuOTI3IDIyOC4wMDAgQyAxNTUuMDQ5IDIyOC4wMDAsMTUzLjM3NSAyMjEuNjM0LDE1Ny42NzkgMjE5LjQ1MCBDIDE1OS4yNDMgMjE4LjY1NywxNjEuNzc5IDIxOC44ODMsMTYyLjk0NSAyMTkuOTE5IE0xNDcuNDAwIDIyMi44MDAgTCAxNDcuNDAwIDIyNS40MDAgMTQ2LjAwMCAyMjUuMzAyIEMgMTQ1LjIzMCAyMjUuMjQ3LDE0MS4yNDkgMjI1LjA5MSwxMzcuMTUzIDIyNC45NTUgTCAxMjkuNzA3IDIyNC43MDYgMTI5LjQyNiAyMjYuMjAyIEMgMTI5LjI3MiAyMjcuMDI1LDEyOS4xNzEgMjM5LjMzMSwxMjkuMjAyIDI1My41NDkgQyAxMjkuMjMzIDI2Ny43NjcsMTI5LjI0NiAyNzkuNjMxLDEyOS4yMzAgMjc5LjkxNCBDIDEyOS4yMDcgMjgwLjMwNSwxMjguMjIzIDI4MC40MDEsMTI1LjExNCAyODAuMzE0IEwgMTIxLjAyOSAyODAuMjAwIDEyMS4xNTIgMjUyLjQ1MiBMIDEyMS4yNzYgMjI0LjcwNCAxMTMuNTM4IDIyNC45NTIgQyAxMDkuMjgyIDIyNS4wODksMTA1LjE3MCAyMjUuMjQ2LDEwNC40MDAgMjI1LjMwMCBMIDEwMy4wMDAgMjI1LjQwMCAxMDIuODgyIDIyMi42OTcgTCAxMDIuNzYzIDIxOS45OTMgMTI1LjA4MiAyMjAuMDk3IEwgMTQ3LjQwMCAyMjAuMjAwIDE0Ny40MDAgMjIyLjgwMCBNMjAzLjc0MiAyMzkuMDEwIEMgMjA2LjAyOCAyNDAuMTc2LDIwOC4wNzcgMjQyLjE5OSwyMDkuMDUwIDI0NC4yNDkgQyAyMDkuODU0IDI0NS45NDQsMjA5Ljk0MCAyNDUuOTMzLDIxMS40MDAgMjQzLjk1OCBDIDIxOC4wNTAgMjM0Ljk2MywyMzIuMjc5IDIzNS44NzEsMjM2LjA1MiAyNDUuNTMwIEMgMjM2LjkxNiAyNDcuNzQ1LDIzNi45MzcgMjQ4LjE5MiwyMzYuOTEyIDI2NC4wMDAgTCAyMzYuODg2IDI4MC4yMDAgMjMzLjI1NyAyODAuMzE1IEwgMjI5LjYyOSAyODAuNDMwIDIyOS43MTQgMjY1LjUxNSBDIDIyOS44MDYgMjQ5LjQ5NSwyMjkuNzMzIDI0OC43ODIsMjI3LjcyNyAyNDYuMDk2IEMgMjI2LjE4MCAyNDQuMDI0LDIyMy44ODIgMjQzLjA0NSwyMjAuNjAwIDI0My4wNjAgQyAyMTIuNDA1IDI0My4wOTYsMjEwLjIwOSAyNDguOTQ2LDIxMC40MTIgMjcwLjIwMCBDIDIxMC40NjEgMjc1LjI2MCwyMTAuNDc4IDI3OS42MjUsMjEwLjQ1MCAyNzkuOTAwIEMgMjEwLjQxNCAyODAuMjU5LDIwOS4zODcgMjgwLjQwMCwyMDYuODAwIDI4MC40MDAgTCAyMDMuMjAwIDI4MC40MDAgMjAzLjE5NiAyNzguMTAwIEMgMjAzLjE5MyAyNzYuODM1LDIwMy40MDIgMjcxLjQxOSwyMDMuNjU5IDI2Ni4wNjQgQyAyMDQuNTMzIDI0Ny45MDQsMjAyLjc1OCAyNDMuMjAwLDE5NS4wMzIgMjQzLjIwMCBDIDE4Ni40MDAgMjQzLjIwMCwxODQuNjIwIDI0Ny4zNTcsMTg0LjcxMCAyNjcuMzAwIEwgMTg0Ljc2OSAyODAuNDAwIDE4MS4wODUgMjgwLjQwMCBMIDE3Ny40MDAgMjgwLjQwMCAxNzcuNDU1IDI1OS41MDQgTCAxNzcuNTExIDIzOC42MDggMTgwLjY1NSAyMzguNTk2IEMgMTg0LjMzMCAyMzguNTgyLDE4NC4zODYgMjM4LjYzMSwxODQuMzk0IDI0MS45MDAgQyAxODQuNDAxIDI0NC45MjQsMTg0LjMwNyAyNDQuOTEzLDE4Ny4yNzUgMjQyLjIyOCBDIDE5Mi4zNzggMjM3LjYwOSwxOTguNjEwIDIzNi4zOTIsMjAzLjc0MiAyMzkuMDEwIE0yNzEuNTY1IDIzOC4yMTcgQyAyNzkuNzA5IDI0MC4xMzYsMjg0Ljk1OCAyNDcuODU1LDI4NC4zMzYgMjU3LjAwMCBMIDI4NC4yMDAgMjU5LjAwMCAyNjkuNDIxIDI1OS4xMDUgQyAyNTIuODQ5IDI1OS4yMjMsMjUzLjkwMCAyNTguOTk1LDI1NC4yNDQgMjYyLjQwMCBDIDI1NS42ODQgMjc2LjY0NywyNjkuMjIwIDI4Mi4xMzQsMjgwLjA1MiAyNzIuODYyIEMgMjgyLjAwNyAyNzEuMTg5LDI4Mi40NjcgMjcxLjUxNywyODIuMTMyIDI3NC4zNDQgQyAyODEuNTMzIDI3OS40MDEsMjY4Ljg2NCAyODIuOTc3LDI2MC41MjcgMjgwLjQ0MiBDIDI1MS4yNjkgMjc3LjYyNiwyNDYuMjE5IDI3MC4yNzYsMjQ2LjIwOCAyNTkuNjAwIEMgMjQ2LjE5MyAyNDQuMjE0LDI1Ny4yOTUgMjM0Ljg1MywyNzEuNTY1IDIzOC4yMTcgTTE2My40MzQgMjU5LjUzMSBMIDE2My40NjcgMjgwLjQyOCAxNTkuODc2IDI4MC4zMTQgTCAxNTYuMjg1IDI4MC4yMDAgMTU2LjMyMiAyNTkuNjAwIEMgMTU2LjM0MyAyNDguMjcwLDE1Ni4zNjkgMjM4LjkwNywxNTYuMzgwIDIzOC43OTMgQyAxNTYuMzkxIDIzOC42NzgsMTU3Ljk3NSAyMzguNTk2LDE1OS45MDAgMjM4LjYwOSBMIDE2My40MDAgMjM4LjYzMyAxNjMuNDM0IDI1OS41MzEgTTI2Mi44NjYgMjQxLjU2MyBDIDI1OC4zOTEgMjQzLjEwOSwyNTQuNDI4IDI0OS4xNzEsMjU0LjQwNSAyNTQuNTA2IEwgMjU0LjQwMCAyNTUuNjEzIDI2NS41MDAgMjU1LjUwNiBMIDI3Ni42MDAgMjU1LjQwMCAyNzYuNDkwIDI1Mi42ODkgQyAyNzYuMTQ2IDI0NC4xNzYsMjY5Ljk1MCAyMzkuMTE3LDI2Mi44NjYgMjQxLjU2MyAiIHN0cm9rZT0ibm9uZSIgZmlsbD0iIzhjMTQyNCIgZmlsbC1ydWxlPSJldmVub2RkIj48L3BhdGg+PC9nPjwvc3ZnPg==", kd = "data:image/svg+xml;base64,PHN2ZyBpZD0ic3ZnIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwLCAwLCA0MDAsNDAwIj48ZyBpZD0ic3ZnZyI+PHBhdGggaWQ9InBhdGgwIiBkPSJNMTg1LjAwMCAxMjcuMDY1IEMgMTgwLjY3MSAxMjkuNzQzLDE3Mi4zNjcgMTMzLjMzNSwxNjYuMjAwIDEzNS4xOTYgQyAxNjAuNzIwIDEzNi44NTAsMTU5LjQ1MiAxMzcuNTUwLDE2MC45MTkgMTM4LjExNCBDIDE2MS43NzEgMTM4LjQ0MSwxNjcuNDgwIDEzNy43MDIsMTcwLjYwMCAxMzYuODYxIEMgMTcyLjE0MCAxMzYuNDQ2LDE3My42NzAgMTM2LjAzNywxNzQuMDAwIDEzNS45NTMgQyAxNzQuNTE1IDEzNS44MjIsMTc0LjYwMCAxMzYuNzEwLDE3NC42MDAgMTQyLjIwMCBMIDE3NC42MDAgMTQ4LjYwMCAxNjguNjAwIDE0OC44MDAgTCAxNjIuNjAwIDE0OS4wMDAgMTYyLjYwMCAxNTAuMDAwIEwgMTYyLjYwMCAxNTEuMDAwIDE2OC41MDAgMTUxLjExMSBDIDE3Mi44NTYgMTUxLjE5MiwxNzQuNDAwIDE1MS4zNTEsMTc0LjQwMCAxNTEuNzE2IEMgMTc0LjQwMCAxNTQuNzY4LDE2OC4yNjEgMTY4Ljc4NCwxNjMuNDQ0IDE3Ni43MjcgQyAxNjEuMzE3IDE4MC4yMzYsMTYxLjA1MiAxODAuODM0LDE2MS4xNTMgMTgxLjkwMCBDIDE2MS4zOTYgMTg0LjQ3MiwxNjguMTQzIDE3Ni42MTEsMTcyLjIzMyAxNjguOTg5IEMgMTczLjM1MiAxNjYuOTA1LDE3NC4zODcgMTY1LjMyMCwxNzQuNTMzIDE2NS40NjcgQyAxNzQuNjgwIDE2NS42MTMsMTc0LjgwMCAxNzMuNTg5LDE3NC44MDAgMTgzLjE5MCBDIDE3NC44MDAgMjAzLjQyNCwxNzQuOTg3IDIwNC4yNjcsMTc4LjcwOCAyMDAuODAwIEwgMTc5LjYwMCAxOTkuOTY5IDE3OS42MDAgMTgyLjU4NCBDIDE3OS42MDAgMTY4LjY0NCwxNzkuNzAyIDE2NS4yMDAsMTgwLjExNyAxNjUuMjAwIEMgMTgwLjc5MiAxNjUuMjAwLDE4My41NDYgMTY4LjA5MywxODUuMTYzIDE3MC41MDAgQyAxODcuMTIyIDE3My40MTcsMTg5LjcxNiAxNzMuMTQwLDE4OS42NzIgMTcwLjAxNyBDIDE4OS42MzEgMTY3LjA0NCwxODYuNzY1IDE2NC42NDAsMTgxLjA4OSAxNjIuODE2IEwgMTc5LjU3OCAxNjIuMzMxIDE3OS42ODkgMTU2Ljg2NSBMIDE3OS44MDAgMTUxLjQwMCAxODcuMDYxIDE1MS4yOTEgQyAxOTYuMjk5IDE1MS4xNTMsMTk2Ljc1OCAxNTAuNzA0LDE5MS42MDEgMTQ2Ljg1NyBDIDE4OC4yMjIgMTQ0LjMzNiwxODguMjI3IDE0NC4zMzYsMTg1LjgwMCAxNDYuODAwIEMgMTgzLjkyOSAxNDguNjk5LDE4My43MjQgMTQ4LjgwMCwxODEuNzE1IDE0OC44MDAgTCAxNzkuNjAwIDE0OC44MDAgMTc5LjYwMCAxNDEuNDYxIEwgMTc5LjYwMCAxMzQuMTIyIDE4MS41MDAgMTMzLjQ5MiBDIDE4Mi41NDUgMTMzLjE0NiwxODQuNjYwIDEzMi4zOTYsMTg2LjIwMCAxMzEuODI2IEMgMTg3Ljc4NSAxMzEuMjM5LDE4OS40MzQgMTMwLjg3OCwxOTAuMDAwIDEzMC45OTQgQyAxOTIuNjQ4IDEzMS41MzYsMTkyLjM5MCAxMjkuODcxLDE4OS40NTQgMTI3LjQ2NSBDIDE4Ny4zNzkgMTI1Ljc2NSwxODcuMTM3IDEyNS43NDMsMTg1LjAwMCAxMjcuMDY1IE0yMjAuMDAwIDEyOC40NTIgQyAyMTYuMzM5IDEyOS45ODAsMjA5LjA4NiAxMzIuNTU4LDIwNi42MDAgMTMzLjIxNCBDIDIwNS45NDAgMTMzLjM4OCwyMDQuNDEwIDEzMy44MDMsMjAzLjIwMCAxMzQuMTM1IEMgMTk4Ljg4MSAxMzUuMzIzLDE5NC45NjEgMTM2LjMxMSwxOTIuNDc2IDEzNi44MzkgQyAxODkuODkwIDEzNy4zODksMTg4LjkxNiAxMzguMDE4LDE4OS40MTEgMTM4LjgxOCBDIDE4OS43MTkgMTM5LjMxNiwxOTIuNzU3IDEzOS4xMTcsMTk5LjAwMCAxMzguMTkwIEMgMjAwLjk4MCAxMzcuODk2LDIwMy40MTAgMTM3LjUzOCwyMDQuNDAwIDEzNy4zOTQgQyAyMDkuMTU5IDEzNi43MDIsMjE2LjgwOCAxMzUuMDM2LDIyMS43OTkgMTMzLjYwMyBDIDIyMy4zMzggMTMzLjE2MiwyMjUuNjIxIDEzMi44MDAsMjI2Ljg3MyAxMzIuODAwIEMgMjMyLjAxMCAxMzIuODAwLDIzMi4yMzQgMTMxLjg2NywyMjcuODA3IDEyOC45MDAgQyAyMjQuMTIwIDEyNi40MjksMjI0Ljc1OSAxMjYuNDY2LDIyMC4wMDAgMTI4LjQ1MiBNOTQuODAwIDE0OS43NTEgQyA5NC44MDAgMTcwLjMzMyw5NC43OTIgMTcwLjI1NSw5Ni44NzQgMTY5LjE3NiBDIDk4LjU4NSAxNjguMjkxLDk5LjIwMCAxNjcuNDk2LDk5LjIwMCAxNjYuMTcxIEMgOTkuMjAwIDE2My41MTIsOTguOTI0IDE2My42MDAsMTA3LjI0MyAxNjMuNjAwIEwgMTE0LjgwMCAxNjMuNjAwIDExNC44MDAgMTY5LjgwMCBMIDExNC44MDAgMTc2LjAwMCA5Ny44MjQgMTc2LjAwMCBDIDgwLjM5NiAxNzYuMDAwLDgwLjEwMSAxNzYuMDI3LDgwLjYwMCAxNzcuNTk5IEMgODAuODQ0IDE3OC4zNzAsODEuMzA2IDE3OC4zOTQsOTcuNzI2IDE3OC40OTYgTCAxMTQuNjAwIDE3OC42MDAgMTE0LjgxNyAxODkuMjAwIEMgMTE0LjkzNiAxOTUuMDMwLDExNS4wNzEgMTk5Ljg0NSwxMTUuMTE3IDE5OS45MDAgQyAxMTUuNDQ4IDIwMC4yOTcsMTE3LjQ4MSAxOTkuODU0LDExOC40MzEgMTk5LjE3OCBMIDExOS41ODYgMTk4LjM1NSAxMTkuNjkzIDE4OC40NzggTCAxMTkuODAwIDE3OC42MDAgMTM3LjgwMCAxNzguNDAwIEwgMTU1LjgwMCAxNzguMjAwIDE1NS45MDggMTc3LjIwMCBDIDE1Ni4wMDQgMTc2LjMxMSwxNTEuMTEzIDE3Mi4wNDMsMTQ5LjA5MyAxNzEuMjUzIEMgMTQ4Ljg4NiAxNzEuMTcyLDE0Ny42MDMgMTcyLjIxMCwxNDYuMjQxIDE3My41NTkgTCAxNDMuNzY2IDE3Ni4wMTIgMTMxLjc4MyAxNzUuOTA2IEwgMTE5LjgwMCAxNzUuODAwIDExOS42OTAgMTY5LjY5MiBMIDExOS41NzkgMTYzLjU4NCAxMjcuODkwIDE2My42OTIgTCAxMzYuMjAwIDE2My44MDAgMTM2LjMzMCAxNjUuMzk1IEMgMTM2LjU1NiAxNjguMTY4LDEzNy45NjUgMTY4LjQ5MSwxNDAuMzAwIDE2Ni4zMDQgTCAxNDEuMjAwIDE2NS40NjEgMTQxLjIwMCAxNTAuOTMwIEMgMTQxLjIwMCAxMzguNTQ2LDE0MS4yODUgMTM2LjQwMCwxNDEuNzc2IDEzNi40MDAgQyAxNDMuNjQwIDEzNi40MDAsMTQyLjg2NCAxMzQuNDQ2LDE0MC4yMDIgMTMyLjQzNiBDIDEzNy42MTEgMTMwLjQ4MCwxMzcuNDkyIDEzMC40NjcsMTM2LjQwMCAxMzIuMDAwIEwgMTM1LjU0NiAxMzMuMjAwIDExNy42NTEgMTMzLjIwMCBMIDk5Ljc1NyAxMzMuMjAwIDk3Ljg2NCAxMzIuMDAwIEMgOTQuNTU1IDEyOS45MDEsOTQuODAwIDEyOC40NzksOTQuODAwIDE0OS43NTEgTTI1NS44MDQgMTM0LjA2NSBDIDI1NS4yMTggMTM2LjQ1OSwyNTUuNzg4IDE5OC44MjIsMjU2LjQwMCAxOTkuMjA2IEMgMjU4LjU2NSAyMDAuNTYzLDI2MC40MDAgMTk4LjE1OCwyNjAuNDAwIDE5My45NjMgQyAyNjAuNDAwIDE5Mi4wMzksMjYwLjUwOSAxOTAuMTgxLDI2MC42NDMgMTg5LjgzMyBDIDI2MC44NjAgMTg5LjI2NiwyNjMuMjc4IDE4OS4yMDAsMjgzLjg0MyAxODkuMjAwIEwgMzA2LjgwMCAxODkuMjAwIDMwNi44MDAgMTkyLjE3MSBDIDMwNi44MDAgMTk2LjMzOCwzMDguMTc0IDE5Ny4zNjEsMzEwLjcwMCAxOTUuMDc1IEwgMzExLjYwMCAxOTQuMjYxIDMxMS42MDAgMTY3LjY3NiBMIDMxMS42MDAgMTQxLjA5MiAzMTIuNTk2IDE0MC4xNjkgQyAzMTMuODc1IDEzOC45ODQsMzEzLjYzMyAxMzguNDIzLDMxMC45ODMgMTM2LjQyMiBDIDMwOC40MTQgMTM0LjQ4MiwzMDcuOTE2IDEzNC40MzIsMzA2LjgwMCAxMzYuMDAwIEwgMzA1Ljk0NiAxMzcuMjAwIDI4My41MjggMTM3LjIwMCBMIDI2MS4xMTEgMTM3LjIwMCAyNTkuMjU2IDEzNS42ODkgQyAyNTUuODU5IDEzMi45MjQsMjU2LjA2MCAxMzMuMDE5LDI1NS44MDQgMTM0LjA2NSBNMTM2LjIwMCAxNDEuMjAwIEwgMTM2LjIwMCAxNDYuNjAwIDExNy44MDAgMTQ2LjYwMCBMIDk5LjQwMCAxNDYuNjAwIDk5LjI4NyAxNDEuNjU2IEMgOTkuMTMzIDEzNC44ODEsOTYuOTM5IDEzNS41NzQsMTE4LjE1MiAxMzUuNjk2IEwgMTM2LjIwMCAxMzUuODAwIDEzNi4yMDAgMTQxLjIwMCBNMjI3LjQ3NCAxNDAuNTAwIEMgMjI1LjQyOCAxNDYuMjg1LDIyNC4yNjIgMTQ5LjA5OSwyMjIuMjU2IDE1My4wOTMgQyAyMTkuMjczIDE1OS4wMzUsMjE5LjQ2NyAxNjEuMjk3LDIyMi42NjggMTU3LjkwMCBDIDIyNC41MjEgMTU1LjkzNCwyMzEuMjAwIDE0NS42NTEsMjMxLjIwMCAxNDQuNzY1IEMgMjMxLjIwMCAxNDQuNTcxLDIzMi4wMDUgMTQ0LjIwOSwyMzIuOTg4IDE0My45NjEgQyAyMzYuNDk3IDE0My4wNzgsMjM2LjM1NCAxNDIuMTkxLDIzMi4zODAgMTQwLjE5MCBDIDIyOC43MzMgMTM4LjM1MywyMjguMjIyIDEzOC4zODUsMjI3LjQ3NCAxNDAuNTAwIE0yODAuOTU3IDE0MC4yMzMgQyAyODEuMDkxIDE0MC41ODEsMjgxLjIwMCAxNDUuMzQ3LDI4MS4yMDAgMTUwLjgyNSBMIDI4MS4yMDAgMTYwLjc4NSAyODAuMzAwIDE2MS4wMDUgQyAyNzkuODA1IDE2MS4xMjYsMjc1LjE3MCAxNjEuMTc1LDI3MC4wMDAgMTYxLjExMyBMIDI2MC42MDAgMTYxLjAwMCAyNjAuNDg3IDE1MS4yMDAgQyAyNjAuNDI1IDE0NS44MTAsMjYwLjQ3NCAxNDAuOTk1LDI2MC41OTUgMTQwLjUwMCBMIDI2MC44MTUgMTM5LjYwMCAyNzAuNzY1IDEzOS42MDAgQyAyNzkuNDY5IDEzOS42MDAsMjgwLjc0NSAxMzkuNjc5LDI4MC45NTcgMTQwLjIzMyBNMzA2LjcwNyAxNTAuMzAwIEwgMzA2LjYwMCAxNjEuMDAwIDI5Ni40MDAgMTYxLjAwMCBMIDI4Ni4yMDAgMTYxLjAwMCAyODYuMDkzIDE1MC4zMDAgTCAyODUuOTg3IDEzOS42MDAgMjk2LjQwMCAxMzkuNjAwIEwgMzA2LjgxMyAxMzkuNjAwIDMwNi43MDcgMTUwLjMwMCBNMjA2Ljk4NiAxNDEuMjIzIEMgMjA2Ljg0MiAxNDEuNDU2LDIwNy41NDkgMTQyLjg3NSwyMDguNTU3IDE0NC4zNzcgQyAyMTAuNDMwIDE0Ny4xNjksMjExLjY0NSAxNDkuNjY2LDIxMi4xNjggMTUxLjgwMCBDIDIxMy4wNTAgMTU1LjM5OCwyMTYuODAwIDE1NS4xNjksMjE2LjgwMCAxNTEuNTE3IEMgMjE2LjgwMCAxNDcuMzgxLDIwOC41MzcgMTM4LjcxMywyMDYuOTg2IDE0MS4yMjMgTTE5NS4zMDAgMTQzLjQ4MyBDIDE5NC40NzggMTQzLjc4NSwxOTQuNzIyIDE0NC41ODksMTk2LjE5NiAxNDYuNDQ0IEMgMTk2Ljk2NCAxNDcuNDEwLDE5Ny41OTQgMTQ4LjMzNywxOTcuNTk2IDE0OC41MDQgQyAxOTcuNTk4IDE0OC42NzIsMTk3LjkzOSAxNDkuNTcyLDE5OC4zNTMgMTUwLjUwNCBDIDE5OC43NjcgMTUxLjQzNywxOTkuMzM3IDE1Mi44MzAsMTk5LjYyMCAxNTMuNjAwIEMgMjAxLjAxNyAxNTcuNDAyLDIwNC4wMDAgMTU2Ljk3MCwyMDQuMDAwIDE1Mi45NjYgQyAyMDQuMDAwIDE0OS4xMTcsMTk3Ljk0MSAxNDIuNTEyLDE5NS4zMDAgMTQzLjQ4MyBNMTM2LjIwOCAxNTAuMTAwIEMgMTM2LjMzMSAxNTAuNTk1LDEzNi4zNzkgMTUzLjI1MCwxMzYuMzE2IDE1Ni4wMDAgTCAxMzYuMjAwIDE2MS4wMDAgMTE4LjYwMCAxNjEuMTExIEMgMTA4LjkyMCAxNjEuMTcyLDEwMC41OTUgMTYxLjEyNCwxMDAuMTAwIDE2MS4wMDMgQyA5OS4wNDQgMTYwLjc0Nyw5OC42NzEgMTUwLjY4OSw5OS42ODAgMTQ5LjY4MCBDIDEwMC4wMzkgMTQ5LjMyMSwxMDQuNjc0IDE0OS4yMDAsMTE4LjA3MiAxNDkuMjAwIEwgMTM1Ljk4NSAxNDkuMjAwIDEzNi4yMDggMTUwLjEwMCBNMjA2LjU4MiAxNTkuNzA0IEMgMjA2LjQ3NyAxNTkuOTc3LDIwNi40MzkgMTY5LjIwMCwyMDYuNDk2IDE4MC4yMDAgTCAyMDYuNjAwIDIwMC4yMDAgMjA3Ljk1NCAyMDAuMTM1IEMgMjA5LjgzMCAyMDAuMDQ1LDIxMC45MTQgMTk4LjgyNiwyMTEuMTgxIDE5Ni41MDggTCAyMTEuNDAwIDE5NC42MDAgMjIwLjAwMCAxOTQuNjAwIEwgMjI4LjYwMCAxOTQuNjAwIDIyOC43MTIgMTk1LjYwMCBDIDIyOS4wNTggMTk4LjY5MiwyMzAuMDk2IDE5OS4yNDEsMjMyLjQzOCAxOTcuNTczIEwgMjMzLjYwMCAxOTYuNzQ2IDIzMy42MDAgMTgxLjE2NCBMIDIzMy42MDAgMTY1LjU4MyAyMzQuNjE1IDE2NS4xMjAgQyAyMzUuMjMyIDE2NC44MzksMjM1LjU0NiAxNjQuNDM3LDIzNS40MTUgMTY0LjA5NiBDIDIzNS4yOTcgMTYzLjc4NywyMzUuMjAwIDE2My40MDUsMjM1LjIwMCAxNjMuMjQ2IEMgMjM1LjIwMCAxNjIuODk3LDIzMC41ODMgMTU5LjYwMCwyMzAuMDk1IDE1OS42MDAgQyAyMjkuOTA1IDE1OS42MDAsMjI5LjM1MSAxNjAuMTQwLDIyOC44NjMgMTYwLjgwMCBMIDIyNy45NzYgMTYyLjAwMCAyMTkuNjg4IDE2MS45OTkgTCAyMTEuNDAwIDE2MS45OTggMjA5LjA4NiAxNjAuNjAzIEMgMjA3LjQ4NiAxNTkuNjM4LDIwNi43MTMgMTU5LjM2MCwyMDYuNTgyIDE1OS43MDQgTTE5Mi44MDAgMTgwLjE0OCBMIDE5Mi44MDAgMjAwLjAwMCAxOTMuOTY5IDIwMC4wMDAgQyAxOTQuNjQ0IDIwMC4wMDAsMTk1LjY2MCAxOTkuNTYyLDE5Ni4zNjkgMTk4Ljk2NCBMIDE5Ny42MDAgMTk3LjkyOSAxOTcuNjAwIDE4MC45NTYgTCAxOTcuNjAwIDE2My45ODMgMTk4LjU1MiAxNjMuNTQ5IEMgMjAwLjY4MyAxNjIuNTc4LDE5OC45MTcgMTYwLjk4OSwxOTUuMjQ1IDE2MC41NzMgTCAxOTIuODAwIDE2MC4yOTcgMTkyLjgwMCAxODAuMTQ4IE0yODAuOTU3IDE2NC4yMzMgQyAyODEuNTc0IDE2NS44MzksMjgxLjIxNiAxODYuMzA4LDI4MC41NjcgMTg2LjU1NyBDIDI3OC45NjkgMTg3LjE3MCwyNjAuODkyIDE4Ni44MTcsMjYwLjY0MyAxODYuMTY3IEMgMjYwLjUwOSAxODUuODE5LDI2MC40MDAgMTgwLjg4NCwyNjAuNDAwIDE3NS4yMDAgQyAyNjAuNDAwIDE2OS41MTYsMjYwLjUwOSAxNjQuNTgxLDI2MC42NDMgMTY0LjIzMyBDIDI2MS4wMTAgMTYzLjI3NSwyODAuNTkwIDE2My4yNzUsMjgwLjk1NyAxNjQuMjMzIE0zMDYuNzA2IDE3NS4xMDAgTCAzMDYuNjAwIDE4Ni42MDAgMjk2LjQwMCAxODYuNjAwIEwgMjg2LjIwMCAxODYuNjAwIDI4Ni4wOTQgMTc1LjEwMCBMIDI4NS45ODggMTYzLjYwMCAyOTYuNDAwIDE2My42MDAgTCAzMDYuODEyIDE2My42MDAgMzA2LjcwNiAxNzUuMTAwIE0yMjguNzEwIDE3MC43MDAgTCAyMjguODIxIDE3Ni44MDAgMjIwLjAxMCAxNzYuODAwIEwgMjExLjIwMCAxNzYuODAwIDIxMS4yMDAgMTcwLjg2NyBDIDIxMS4yMDAgMTY3LjYwMywyMTEuMzIzIDE2NC44MTAsMjExLjQ3NCAxNjQuNjU5IEMgMjExLjYyNSAxNjQuNTA4LDIxNS41NDAgMTY0LjQzMywyMjAuMTc0IDE2NC40OTIgTCAyMjguNjAwIDE2NC42MDAgMjI4LjcxMCAxNzAuNzAwIE0yMjguNzEwIDE4NS43MDAgTCAyMjguODIwIDE5Mi4wMDAgMjIwLjAxMCAxOTIuMDAwIEwgMjExLjIwMCAxOTIuMDAwIDIxMS4yMDAgMTg1Ljg2NyBDIDIxMS4yMDAgMTgyLjQ5MywyMTEuMzIzIDE3OS42MTAsMjExLjQ3NCAxNzkuNDU5IEMgMjExLjYyNSAxNzkuMzA4LDIxNS41NDAgMTc5LjIzMywyMjAuMTc0IDE3OS4yOTIgTCAyMjguNjAwIDE3OS40MDAgMjI4LjcxMCAxODUuNzAwIE0yMTEuMzIwIDIxMS40NjMgQyAyMTEuMTY3IDIxMS44NjQsMjExLjM2NSAyMTIuMzI4LDIxMS44MzUgMjEyLjY2NSBDIDIxNS4zNjQgMjE1LjIwMiwyMTQuODYyIDIxNi4yNDAsMjA1LjQyMCAyMjUuOTQyIEMgMTk2LjE5NSAyMzUuNDIwLDE4NC40MzEgMjQ0LjIxNiwxNjkuMjcxIDI1Mi45NzIgQyAxNjMuMjgwIDI1Ni40MzIsMTYyLjA2OSAyNTcuNTkxLDE2My43NjQgMjU4LjI0MiBDIDE2NS45ODEgMjU5LjA5MiwxODUuOTQxIDI0Ny45OTksMTk2LjY2NCAyMzkuOTU3IEMgMTk3LjU4MCAyMzkuMjcwLDE5OC41MjUgMjM4LjgzMCwxOTguNzY0IDIzOC45NzggQyAxOTkuNTI5IDIzOS40NTEsMTk5LjM0NiAyNjQuMTMwLDE5OC41NDAgMjY5LjIxNyBDIDE5Ny42MzggMjc0LjkwOSwxOTguOTUzIDI3OC40MDAsMjAxLjk5OSAyNzguNDAwIEMgMjAzLjYyOSAyNzguNDAwLDIwMy41OTkgMjc4Ljc3MCwyMDMuNjA2IDI1OC4yNjcgQyAyMDMuNjA5IDI0Ny44OTAsMjAzLjc0NCAyMzkuMjIwLDIwMy45MDYgMjM4Ljk5OSBDIDIwNC4wNjggMjM4Ljc3OSwyMDQuNjk1IDIzOC4zNDQsMjA1LjMwMCAyMzguMDMyIEMgMjA2LjgwMiAyMzcuMjU4LDIwNi42OTAgMjM2LjIyOSwyMDUuMDE3IDIzNS40MzUgQyAyMDMuMzQ1IDIzNC42NDIsMjAzLjQ2NiAyMzQuMjI1LDIwNS45MDEgMjMyLjQwMCBDIDIwNi45MjggMjMxLjYzMCwyMTAuMTA3IDIyOC42OTIsMjEyLjk2NSAyMjUuODcxIEMgMjE4LjYyOCAyMjAuMjgyLDIxOC45OTkgMjIwLjAwMCwyMjAuNjk0IDIyMC4wMDAgQyAyMjUuOTk1IDIyMC4wMDAsMjE5LjQxMyAyMTEuODQwLDIxMy40ODUgMjExLjA2MiBDIDIxMS45MzEgMjEwLjg1OSwyMTEuNTIzIDIxMC45MzQsMjExLjMyMCAyMTEuNDYzIE0xMDYuMjgzIDIxMS43MjggQyAxMDYuMDUwIDIxMi4zMzYsMTA2LjYwMyAyMTIuODEzLDEwOC44NzAgMjEzLjk2MSBDIDExMC40NDcgMjE0Ljc2MCwxMTAuNjQ3IDIxNi4wMjcsMTA5LjYwMyAyMTguNjAwIEMgMTA5LjQyNCAyMTkuMDQwLDEwOC44NjUgMjIwLjQ4MCwxMDguMzYwIDIyMS44MDAgQyAxMDYuODAxIDIyNS44NzQsMTAwLjgwNCAyMzYuMjU2LDk5LjIzNCAyMzcuNjAwIEMgOTkuMTA1IDIzNy43MTAsOTguMDI0IDIzOC45NzAsOTYuODMyIDI0MC40MDAgQyA5NS42MzkgMjQxLjgzMCw5Mi43NzggMjQ0LjgyNyw5MC40NzMgMjQ3LjA1OSBDIDg2LjUwNSAyNTAuOTA0LDg1LjYwMiAyNTIuNDAwLDg3LjI1MCAyNTIuNDAwIEMgODguMjQ5IDI1Mi40MDAsOTUuMjg4IDI0Ni43NDYsOTkuODcyIDI0Mi4yNjMgTCAxMDMuNTQ0IDIzOC42NzEgMTA2LjE0NyAyMzkuMzE0IEMgMTExLjIwNiAyNDAuNTYyLDExNy41NjkgMjQzLjczMywxMjAuMzA1IDI0Ni4zNjkgTCAxMjEuMjEwIDI0Ny4yNDEgMTE5Ljk0MSAyNDkuMTIwIEMgMTE0LjgyOCAyNTYuNjg5LDEwNS40MjkgMjY1LjQxNiw5NS40MDAgMjcxLjkwNSBDIDg5Ljc4NSAyNzUuNTM4LDg5LjIwMCAyNzUuOTgwLDg5LjIwMCAyNzYuNTk2IEMgODkuMjAwIDI4MC45MTAsMTEyLjQ0NCAyNjUuMjkzLDEyMC44OTcgMjU1LjMwMSBDIDEyMi4zMzkgMjUzLjU5NSwxMjMuOTg5IDI1MS43NjIsMTI0LjU2MyAyNTEuMjI4IEwgMTI1LjYwNSAyNTAuMjU1IDEyNi43MDMgMjUxLjMwMiBDIDEzMS4wODcgMjU1LjQ4NSwxMzQuNTYwIDI1MS4yNTQsMTMwLjM5OSAyNDYuNzk5IEMgMTI4Ljg4OCAyNDUuMTgxLDEyOC44ODQgMjQ1LjIyMSwxMzAuODAwIDI0Mi40MDAgQyAxMzEuNjgwIDI0MS4xMDQsMTMyLjQwMCAyMzkuOTMxLDEzMi40MDAgMjM5Ljc5NCBDIDEzMi40MDAgMjM5LjY1NywxMzIuOTQwIDIzOC43NTksMTMzLjYwMCAyMzcuODAwIEMgMTM0LjI2MCAyMzYuODQwLDEzNS44OTggMjMzLjg4MCwxMzcuMjM4IDIzMS4yMjEgQyAxMzkuMzAwIDIyNy4xMzMsMTM5Ljk1MSAyMjYuMTk3LDE0MS40NTUgMjI1LjE2MiBDIDE0NC4wMTEgMjIzLjQwNCwxNDMuMTQxIDIyMS42MDgsMTM4LjUzNyAyMTkuMTM0IEwgMTM2Ljg3NCAyMTguMjQwIDEzNS4yNjggMjE5LjY5MSBDIDEzMy41MjYgMjIxLjI2NSwxMzMuMTAyIDIyMS4zNjYsMTI2LjQwMCAyMjEuODE5IEMgMTE0Ljg1OSAyMjIuNTk5LDExNC4zMDIgMjIyLjYxMSwxMTQuMDk4IDIyMi4wNzggQyAxMTMuNzc2IDIyMS4yMzksMTE1LjY0MyAyMTguMDIzLDExNi43NjQgMjE3LjQ4NiBDIDExOC44NjMgMjE2LjQ4MCwxMTcuNzcxIDIxNC41MzIsMTE0LjAwNCAyMTIuNTYzIEMgMTExLjM1MiAyMTEuMTc4LDEwNi42ODggMjEwLjY3MywxMDYuMjgzIDIxMS43MjggTTI3NS43MjAgMjE0LjY2NSBDIDI3NS41NDQgMjE1LjEyMiwyNzUuNzcwIDIxNS41NDcsMjc2LjQxMyAyMTUuOTcxIEMgMjgxLjM3OSAyMTkuMjQ2LDI4MS4zODEgMjIwLjAwMCwyNzYuNDU5IDIzMy44MDAgQyAyNzIuMzU5IDI0NS4yOTMsMjY4LjUwNCAyNTQuNjI1LDI2Ni4wNzkgMjU4LjkyNiBDIDI2My45OTIgMjYyLjYyNiwyNTQuMzkwIDI2Mi43OTcsMjUyLjMwOSAyNTkuMTcwIEMgMjUwLjU0OCAyNTYuMTAyLDI0OS43MTUgMjU5LjkxMiwyNTEuMzcwIDI2My40NjYgQyAyNTMuNTY5IDI2OC4xOTAsMjU3LjMwNCAyNzAuNjk0LDI1OS4wODkgMjY4LjY0MiBDIDI1OS43MTMgMjY3LjkyNCwyNjAuODYwIDI2Ny40NzcsMjYzLjY2MSAyNjYuODYyIEMgMjgyLjA2MiAyNjIuODIyLDI4OC42NzYgMjYxLjI4NiwyOTYuNTc0IDI1OS4yMjMgQyAzMDAuNzM5IDI1OC4xMzUsMzA0LjI5NyAyNTcuMzM2LDMwNC40ODAgMjU3LjQ0OSBDIDMwNS4zMTcgMjU3Ljk2NywzMDYuODk3IDI2MS42MzAsMzA4LjA0OSAyNjUuNzI3IEMgMzA5LjQ5NyAyNzAuODc2LDMxMy42MDAgMjcwLjQzMiwzMTMuNjAwIDI2NS4xMjUgQyAzMTMuNjAwIDI1OC4yNjcsMzA1LjU1NyAyNDguMTU4LDI5My4wMzUgMjM5LjI3NyBDIDI4OC4yNzkgMjM1LjkwNCwyODcuODEzIDIzNy42NzksMjkyLjMyMCAyNDIuMDAwIEMgMjk3LjIyOCAyNDYuNzA2LDMwMi40MDAgMjUyLjk3OSwzMDIuNDAwIDI1NC4yMjcgQyAzMDIuNDAwIDI1NS4xNzUsMjY5Ljc0MyAyNjEuMDc3LDI2OC45NDEgMjYwLjI3NCBDIDI2OC44MTIgMjYwLjE0NSwyNjkuNjA0IDI1OC41NDYsMjcwLjcwMCAyNTYuNzIwIEMgMjczLjk2MyAyNTEuMjg3LDI3OS40NjIgMjQwLjEzMiwyODEuOTk5IDIzMy44MDAgQyAyODQuNjQ0IDIyNy4xOTYsMjg1Ljg5NiAyMjQuODc0LDI4Ny4xNjQgMjI0LjIxOSBDIDI4OS4yMDQgMjIzLjE2NCwyODguNTcwIDIyMS4zMzIsMjg1LjA1MyAyMTguMTE4IEMgMjgxLjYzMSAyMTQuOTkxLDI3Ni4zNDUgMjEzLjAzNSwyNzUuNzIwIDIxNC42NjUgTTEzMy44NDggMjI0LjU4MCBDIDEzNC4yNjggMjI1LjY3NywxMjcuODk3IDIzNy44ODMsMTI1LjEwOSAyNDEuMzIxIEwgMTI0LjIwMCAyNDIuNDQyIDEyMS42MDAgMjQxLjI2MyBDIDExNy45NzEgMjM5LjYxOCwxMTMuNTk1IDIzOC4yMTIsMTA5LjYwMCAyMzcuNDA3IEMgMTA3LjczMCAyMzcuMDMwLDEwNS45NjggMjM2LjY1MiwxMDUuNjg0IDIzNi41NjcgQyAxMDUuMzQwIDIzNi40NjQsMTA1Ljg2MCAyMzUuMzg3LDEwNy4yMzEgMjMzLjM1NCBDIDEwOC4zNjYgMjMxLjY3MywxMDkuOTcyIDIyOS4xMjksMTEwLjc5OSAyMjcuNzAyIEwgMTEyLjMwNCAyMjUuMTA4IDExOC4yNTIgMjI0LjkzMyBDIDEyMS41MjMgMjI0LjgzNywxMjUuNDYwIDIyNC42MTEsMTI3LjAwMCAyMjQuNDMyIEMgMTMxLjY1NiAyMjMuODg5LDEzMy41OTkgMjIzLjkzMSwxMzMuODQ4IDIyNC41ODAgIiBzdHJva2U9Im5vbmUiIGZpbGw9IiNmOGY0ZjUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PC9wYXRoPjxwYXRoIGlkPSJwYXRoMSIgZD0iTTE3Ny44NzYgMjEuMDQ1IEMgMTY2LjM5NCAzMi42MjAsMTUxLjcxMSA0Ny4zMzUsMTQ1LjI0NiA1My43NDUgQyAxMzAuMDQ0IDY4LjgxOSw2OC44MTkgMTMwLjA0NCw1My43NDUgMTQ1LjI0NiBDIDQ3LjMzNSAxNTEuNzExLDMyLjYyMCAxNjYuMzk0LDIxLjA0NSAxNzcuODc2IEMgMi4zOTEgMTk2LjM4MSwwLjAwMCAxOTguODkxLDAuMDAwIDE5OS45NzUgQyAwLjAwMCAyMDEuMDYxLDIuNzc4IDIwMy45NjYsMjQuNjQ1IDIyNS43NTUgQyAzOC4xOTkgMjM5LjI2MCw0OS42MjUgMjUwLjY0Niw1MC4wMzUgMjUxLjA1NSBDIDUwLjQ0NiAyNTEuNDY1LDcyLjgzMiAyNzMuODUwLDk5Ljc4MiAzMDAuODAwIEMgMTI2LjczMyAzMjcuNzUwLDE0OS4zMjUgMzUwLjM0MCwxNDkuOTg4IDM1MS4wMDAgQyAxNTAuNjUwIDM1MS42NjAsMTYxLjkwMyAzNjIuOTU1LDE3NC45OTQgMzc2LjEwMCBDIDE5NS45MjAgMzk3LjExMywxOTguOTQwIDQwMC4wMDAsMTk5Ljk5NyA0MDAuMDAwIEMgMjAxLjA1MyA0MDAuMDAwLDIwNC4xNjIgMzk3LjAyNywyMjUuNzU5IDM3NS4zNjAgQyAyMzkuMjY3IDM2MS44MDgsMjUwLjUwMCAzNTAuNTQwLDI1MC43MjAgMzUwLjMyMCBDIDI1MS4yNDMgMzQ5Ljc5NywzNDkuNjU5IDI1MS4zODEsMzUwLjI2MCAyNTAuNzgwIEMgMzUwLjUxMyAyNTAuNTI3LDM2MS44MDggMjM5LjI2NywzNzUuMzYwIDIyNS43NTkgQyAzOTYuMDU3IDIwNS4xMjgsMzk5Ljk5OSAyMDEuMDIzLDM5OS45OTYgMjAwLjA5OSBDIDM5OS45OTIgMTk5LjE3MiwzODcuMjk3IDE4Ni4zMTIsMzE5LjA5NiAxMTguMTQ0IEMgMjc0LjYwMyA3My42NzMsMjI5Ljg3OCAyOC44OTgsMjE5LjcwNiAxOC42NDQgQyAyMDMuMzAwIDIuMTA2LDIwMS4wNzIgMC4wMDAsMTk5Ljk4MiAwLjAwMCBDIDE5OC44ODkgMC4wMDAsMTk2LjQyOCAyLjM0MywxNzcuODc2IDIxLjA0NSBNMTg5LjQ1NCAxMjcuNDY1IEMgMTkyLjM5MCAxMjkuODcxLDE5Mi42NDggMTMxLjUzNiwxOTAuMDAwIDEzMC45OTQgQyAxODkuNDM0IDEzMC44NzgsMTg3Ljc4NSAxMzEuMjM5LDE4Ni4yMDAgMTMxLjgyNiBDIDE4NC42NjAgMTMyLjM5NiwxODIuNTQ1IDEzMy4xNDYsMTgxLjUwMCAxMzMuNDkyIEwgMTc5LjYwMCAxMzQuMTIyIDE3OS42MDAgMTQxLjQ2MSBMIDE3OS42MDAgMTQ4LjgwMCAxODEuNzE1IDE0OC44MDAgQyAxODMuNzI0IDE0OC44MDAsMTgzLjkyOSAxNDguNjk5LDE4NS44MDAgMTQ2LjgwMCBDIDE4OC4yMjcgMTQ0LjMzNiwxODguMjIyIDE0NC4zMzYsMTkxLjYwMSAxNDYuODU3IEMgMTk2Ljc1OCAxNTAuNzA0LDE5Ni4yOTkgMTUxLjE1MywxODcuMDYxIDE1MS4yOTEgTCAxNzkuODAwIDE1MS40MDAgMTc5LjY4OSAxNTYuODY1IEwgMTc5LjU3OCAxNjIuMzMxIDE4MS4wODkgMTYyLjgxNiBDIDE4Ni43NjUgMTY0LjY0MCwxODkuNjMxIDE2Ny4wNDQsMTg5LjY3MiAxNzAuMDE3IEMgMTg5LjcxNiAxNzMuMTQwLDE4Ny4xMjIgMTczLjQxNywxODUuMTYzIDE3MC41MDAgQyAxODMuNTQ2IDE2OC4wOTMsMTgwLjc5MiAxNjUuMjAwLDE4MC4xMTcgMTY1LjIwMCBDIDE3OS43MDIgMTY1LjIwMCwxNzkuNjAwIDE2OC42NDQsMTc5LjYwMCAxODIuNTg0IEwgMTc5LjYwMCAxOTkuOTY5IDE3OC43MDggMjAwLjgwMCBDIDE3NC45ODcgMjA0LjI2NywxNzQuODAwIDIwMy40MjQsMTc0LjgwMCAxODMuMTkwIEMgMTc0LjgwMCAxNzMuNTg5LDE3NC42ODAgMTY1LjYxMywxNzQuNTMzIDE2NS40NjcgQyAxNzQuMzg3IDE2NS4zMjAsMTczLjM1MiAxNjYuOTA1LDE3Mi4yMzMgMTY4Ljk4OSBDIDE2OC4xNDMgMTc2LjYxMSwxNjEuMzk2IDE4NC40NzIsMTYxLjE1MyAxODEuOTAwIEMgMTYxLjA1MiAxODAuODM0LDE2MS4zMTcgMTgwLjIzNiwxNjMuNDQ0IDE3Ni43MjcgQyAxNjguMjYxIDE2OC43ODQsMTc0LjQwMCAxNTQuNzY4LDE3NC40MDAgMTUxLjcxNiBDIDE3NC40MDAgMTUxLjM1MSwxNzIuODU2IDE1MS4xOTIsMTY4LjUwMCAxNTEuMTExIEwgMTYyLjYwMCAxNTEuMDAwIDE2Mi42MDAgMTUwLjAwMCBMIDE2Mi42MDAgMTQ5LjAwMCAxNjguNjAwIDE0OC44MDAgTCAxNzQuNjAwIDE0OC42MDAgMTc0LjYwMCAxNDIuMjAwIEMgMTc0LjYwMCAxMzYuNzEwLDE3NC41MTUgMTM1LjgyMiwxNzQuMDAwIDEzNS45NTMgQyAxNzMuNjcwIDEzNi4wMzcsMTcyLjE0MCAxMzYuNDQ2LDE3MC42MDAgMTM2Ljg2MSBDIDE2Ny40ODAgMTM3LjcwMiwxNjEuNzcxIDEzOC40NDEsMTYwLjkxOSAxMzguMTE0IEMgMTU5LjQ1MiAxMzcuNTUwLDE2MC43MjAgMTM2Ljg1MCwxNjYuMjAwIDEzNS4xOTYgQyAxNzIuMzY3IDEzMy4zMzUsMTgwLjY3MSAxMjkuNzQzLDE4NS4wMDAgMTI3LjA2NSBDIDE4Ny4xMzcgMTI1Ljc0MywxODcuMzc5IDEyNS43NjUsMTg5LjQ1NCAxMjcuNDY1IE0yMjcuODA3IDEyOC45MDAgQyAyMzIuMjM0IDEzMS44NjcsMjMyLjAxMCAxMzIuODAwLDIyNi44NzMgMTMyLjgwMCBDIDIyNS42MjEgMTMyLjgwMCwyMjMuMzM4IDEzMy4xNjIsMjIxLjc5OSAxMzMuNjAzIEMgMjE2LjgwOCAxMzUuMDM2LDIwOS4xNTkgMTM2LjcwMiwyMDQuNDAwIDEzNy4zOTQgQyAyMDMuNDEwIDEzNy41MzgsMjAwLjk4MCAxMzcuODk2LDE5OS4wMDAgMTM4LjE5MCBDIDE5Mi43NTcgMTM5LjExNywxODkuNzE5IDEzOS4zMTYsMTg5LjQxMSAxMzguODE4IEMgMTg4LjkxNiAxMzguMDE4LDE4OS44OTAgMTM3LjM4OSwxOTIuNDc2IDEzNi44MzkgQyAxOTQuOTYxIDEzNi4zMTEsMTk4Ljg4MSAxMzUuMzIzLDIwMy4yMDAgMTM0LjEzNSBDIDIwNC40MTAgMTMzLjgwMywyMDUuOTQwIDEzMy4zODgsMjA2LjYwMCAxMzMuMjE0IEMgMjA5LjA4NiAxMzIuNTU4LDIxNi4zMzkgMTI5Ljk4MCwyMjAuMDAwIDEyOC40NTIgQyAyMjQuNzU5IDEyNi40NjYsMjI0LjEyMCAxMjYuNDI5LDIyNy44MDcgMTI4LjkwMCBNOTcuODY0IDEzMi4wMDAgTCA5OS43NTcgMTMzLjIwMCAxMTcuNjUxIDEzMy4yMDAgTCAxMzUuNTQ2IDEzMy4yMDAgMTM2LjQwMCAxMzIuMDAwIEMgMTM3LjQ5MiAxMzAuNDY3LDEzNy42MTEgMTMwLjQ4MCwxNDAuMjAyIDEzMi40MzYgQyAxNDIuODY0IDEzNC40NDYsMTQzLjY0MCAxMzYuNDAwLDE0MS43NzYgMTM2LjQwMCBDIDE0MS4yODUgMTM2LjQwMCwxNDEuMjAwIDEzOC41NDYsMTQxLjIwMCAxNTAuOTMwIEwgMTQxLjIwMCAxNjUuNDYxIDE0MC4zMDAgMTY2LjMwNCBDIDEzNy45NjUgMTY4LjQ5MSwxMzYuNTU2IDE2OC4xNjgsMTM2LjMzMCAxNjUuMzk1IEwgMTM2LjIwMCAxNjMuODAwIDEyNy44OTAgMTYzLjY5MiBMIDExOS41NzkgMTYzLjU4NCAxMTkuNjkwIDE2OS42OTIgTCAxMTkuODAwIDE3NS44MDAgMTMxLjc4MyAxNzUuOTA2IEwgMTQzLjc2NiAxNzYuMDEyIDE0Ni4yNDEgMTczLjU1OSBDIDE0Ny42MDMgMTcyLjIxMCwxNDguODg2IDE3MS4xNzIsMTQ5LjA5MyAxNzEuMjUzIEMgMTUxLjExMyAxNzIuMDQzLDE1Ni4wMDQgMTc2LjMxMSwxNTUuOTA4IDE3Ny4yMDAgTCAxNTUuODAwIDE3OC4yMDAgMTM3LjgwMCAxNzguNDAwIEwgMTE5LjgwMCAxNzguNjAwIDExOS42OTMgMTg4LjQ3OCBMIDExOS41ODYgMTk4LjM1NSAxMTguNDMxIDE5OS4xNzggQyAxMTcuNDgxIDE5OS44NTQsMTE1LjQ0OCAyMDAuMjk3LDExNS4xMTcgMTk5LjkwMCBDIDExNS4wNzEgMTk5Ljg0NSwxMTQuOTM2IDE5NS4wMzAsMTE0LjgxNyAxODkuMjAwIEwgMTE0LjYwMCAxNzguNjAwIDk3LjcyNiAxNzguNDk2IEMgODEuMzA2IDE3OC4zOTQsODAuODQ0IDE3OC4zNzAsODAuNjAwIDE3Ny41OTkgQyA4MC4xMDEgMTc2LjAyNyw4MC4zOTYgMTc2LjAwMCw5Ny44MjQgMTc2LjAwMCBMIDExNC44MDAgMTc2LjAwMCAxMTQuODAwIDE2OS44MDAgTCAxMTQuODAwIDE2My42MDAgMTA3LjI0MyAxNjMuNjAwIEMgOTguOTI0IDE2My42MDAsOTkuMjAwIDE2My41MTIsOTkuMjAwIDE2Ni4xNzEgQyA5OS4yMDAgMTY3LjQ5Niw5OC41ODUgMTY4LjI5MSw5Ni44NzQgMTY5LjE3NiBDIDk0Ljc5MiAxNzAuMjU1LDk0LjgwMCAxNzAuMzMzLDk0LjgwMCAxNDkuNzUxIEMgOTQuODAwIDEyOC40NzksOTQuNTU1IDEyOS45MDEsOTcuODY0IDEzMi4wMDAgTTI1OS4yNTYgMTM1LjY4OSBMIDI2MS4xMTEgMTM3LjIwMCAyODMuNTI4IDEzNy4yMDAgTCAzMDUuOTQ2IDEzNy4yMDAgMzA2LjgwMCAxMzYuMDAwIEMgMzA3LjkxNiAxMzQuNDMyLDMwOC40MTQgMTM0LjQ4MiwzMTAuOTgzIDEzNi40MjIgQyAzMTMuNjMzIDEzOC40MjMsMzEzLjg3NSAxMzguOTg0LDMxMi41OTYgMTQwLjE2OSBMIDMxMS42MDAgMTQxLjA5MiAzMTEuNjAwIDE2Ny42NzYgTCAzMTEuNjAwIDE5NC4yNjEgMzEwLjcwMCAxOTUuMDc1IEMgMzA4LjE3NCAxOTcuMzYxLDMwNi44MDAgMTk2LjMzOCwzMDYuODAwIDE5Mi4xNzEgTCAzMDYuODAwIDE4OS4yMDAgMjgzLjg0MyAxODkuMjAwIEMgMjYzLjI3OCAxODkuMjAwLDI2MC44NjAgMTg5LjI2NiwyNjAuNjQzIDE4OS44MzMgQyAyNjAuNTA5IDE5MC4xODEsMjYwLjQwMCAxOTIuMDM5LDI2MC40MDAgMTkzLjk2MyBDIDI2MC40MDAgMTk4LjE1OCwyNTguNTY1IDIwMC41NjMsMjU2LjQwMCAxOTkuMjA2IEMgMjU1Ljc4OCAxOTguODIyLDI1NS4yMTggMTM2LjQ1OSwyNTUuODA0IDEzNC4wNjUgQyAyNTYuMDYwIDEzMy4wMTksMjU1Ljg1OSAxMzIuOTI0LDI1OS4yNTYgMTM1LjY4OSBNOTkuNjQwIDEzNi4xNTIgQyA5OS4zMjcgMTM2LjUyOSw5OS4yMTIgMTM4LjMzMyw5OS4yODcgMTQxLjY1NiBMIDk5LjQwMCAxNDYuNjAwIDExNy44MDAgMTQ2LjYwMCBMIDEzNi4yMDAgMTQ2LjYwMCAxMzYuMjAwIDE0MS4yMDAgTCAxMzYuMjAwIDEzNS44MDAgMTE4LjE1MiAxMzUuNjk2IEMgMTAzLjA3NCAxMzUuNjA5LDEwMC4wMjggMTM1LjY4NCw5OS42NDAgMTM2LjE1MiBNMjMyLjM4MCAxNDAuMTkwIEMgMjM2LjM1NCAxNDIuMTkxLDIzNi40OTcgMTQzLjA3OCwyMzIuOTg4IDE0My45NjEgQyAyMzIuMDA1IDE0NC4yMDksMjMxLjIwMCAxNDQuNTcxLDIzMS4yMDAgMTQ0Ljc2NSBDIDIzMS4yMDAgMTQ1LjY1MSwyMjQuNTIxIDE1NS45MzQsMjIyLjY2OCAxNTcuOTAwIEMgMjE5LjQ2NyAxNjEuMjk3LDIxOS4yNzMgMTU5LjAzNSwyMjIuMjU2IDE1My4wOTMgQyAyMjQuMjYyIDE0OS4wOTksMjI1LjQyOCAxNDYuMjg1LDIyNy40NzQgMTQwLjUwMCBDIDIyOC4yMjIgMTM4LjM4NSwyMjguNzMzIDEzOC4zNTMsMjMyLjM4MCAxNDAuMTkwIE0yNjAuNTk1IDE0MC41MDAgQyAyNjAuNDc0IDE0MC45OTUsMjYwLjQyNSAxNDUuODEwLDI2MC40ODcgMTUxLjIwMCBMIDI2MC42MDAgMTYxLjAwMCAyNzAuMDAwIDE2MS4xMTMgQyAyNzUuMTcwIDE2MS4xNzUsMjc5LjgwNSAxNjEuMTI2LDI4MC4zMDAgMTYxLjAwNSBMIDI4MS4yMDAgMTYwLjc4NSAyODEuMjAwIDE1MC44MjUgQyAyODEuMjAwIDE0NS4zNDcsMjgxLjA5MSAxNDAuNTgxLDI4MC45NTcgMTQwLjIzMyBDIDI4MC43NDUgMTM5LjY3OSwyNzkuNDY5IDEzOS42MDAsMjcwLjc2NSAxMzkuNjAwIEwgMjYwLjgxNSAxMzkuNjAwIDI2MC41OTUgMTQwLjUwMCBNMjg2LjA5MyAxNTAuMzAwIEwgMjg2LjIwMCAxNjEuMDAwIDI5Ni40MDAgMTYxLjAwMCBMIDMwNi42MDAgMTYxLjAwMCAzMDYuNzA3IDE1MC4zMDAgTCAzMDYuODEzIDEzOS42MDAgMjk2LjQwMCAxMzkuNjAwIEwgMjg1Ljk4NyAxMzkuNjAwIDI4Ni4wOTMgMTUwLjMwMCBNMjEwLjAyNiAxNDIuMDE2IEMgMjE0LjAxMiAxNDQuNTc1LDIxNi44MDAgMTQ4LjQ4NCwyMTYuODAwIDE1MS41MTcgQyAyMTYuODAwIDE1NS4xNjksMjEzLjA1MCAxNTUuMzk4LDIxMi4xNjggMTUxLjgwMCBDIDIxMS42NDUgMTQ5LjY2NiwyMTAuNDMwIDE0Ny4xNjksMjA4LjU1NyAxNDQuMzc3IEMgMjA2LjA2MCAxNDAuNjU2LDIwNi41ODcgMTM5LjgxMCwyMTAuMDI2IDE0Mi4wMTYgTTIwMS4yMDMgMTQ2Ljk2MSBDIDIwNC43ODQgMTUwLjYwMiwyMDUuMjQxIDE1Ni4wMDAsMjAxLjk2OSAxNTYuMDAwIEMgMjAwLjc1NCAxNTYuMDAwLDIwMC4zNTAgMTU1LjU4NywxOTkuNjIwIDE1My42MDAgQyAxOTkuMzM3IDE1Mi44MzAsMTk4Ljc2NyAxNTEuNDM3LDE5OC4zNTMgMTUwLjUwNCBDIDE5Ny45MzkgMTQ5LjU3MiwxOTcuNTk4IDE0OC42NzIsMTk3LjU5NiAxNDguNTA0IEMgMTk3LjU5NCAxNDguMzM3LDE5Ni45NjQgMTQ3LjQxMCwxOTYuMTk2IDE0Ni40NDQgQyAxOTIuOTEzIDE0Mi4zMTQsMTk3LjA1MiAxNDIuNzQyLDIwMS4yMDMgMTQ2Ljk2MSBNOTkuNjgwIDE0OS42ODAgQyA5OC42NzEgMTUwLjY4OSw5OS4wNDQgMTYwLjc0NywxMDAuMTAwIDE2MS4wMDMgQyAxMDAuNTk1IDE2MS4xMjQsMTA4LjkyMCAxNjEuMTcyLDExOC42MDAgMTYxLjExMSBMIDEzNi4yMDAgMTYxLjAwMCAxMzYuMzE2IDE1Ni4wMDAgQyAxMzYuMzc5IDE1My4yNTAsMTM2LjMzMSAxNTAuNTk1LDEzNi4yMDggMTUwLjEwMCBMIDEzNS45ODUgMTQ5LjIwMCAxMTguMDcyIDE0OS4yMDAgQyAxMDQuNjc0IDE0OS4yMDAsMTAwLjAzOSAxNDkuMzIxLDk5LjY4MCAxNDkuNjgwIE0yMTkuNjg4IDE2MS45OTkgTCAyMjcuOTc2IDE2Mi4wMDAgMjI4Ljg2MyAxNjAuODAwIEMgMjI5LjM1MSAxNjAuMTQwLDIyOS45MDUgMTU5LjYwMCwyMzAuMDk1IDE1OS42MDAgQyAyMzAuNTgzIDE1OS42MDAsMjM1LjIwMCAxNjIuODk3LDIzNS4yMDAgMTYzLjI0NiBDIDIzNS4yMDAgMTYzLjQwNSwyMzUuMjk3IDE2My43ODcsMjM1LjQxNSAxNjQuMDk2IEMgMjM1LjU0NiAxNjQuNDM3LDIzNS4yMzIgMTY0LjgzOSwyMzQuNjE1IDE2NS4xMjAgTCAyMzMuNjAwIDE2NS41ODMgMjMzLjYwMCAxODEuMTY0IEwgMjMzLjYwMCAxOTYuNzQ2IDIzMi40MzggMTk3LjU3MyBDIDIzMC4wOTYgMTk5LjI0MSwyMjkuMDU4IDE5OC42OTIsMjI4LjcxMiAxOTUuNjAwIEwgMjI4LjYwMCAxOTQuNjAwIDIyMC4wMDAgMTk0LjYwMCBMIDIxMS40MDAgMTk0LjYwMCAyMTEuMTgxIDE5Ni41MDggQyAyMTAuOTE0IDE5OC44MjYsMjA5LjgzMCAyMDAuMDQ1LDIwNy45NTQgMjAwLjEzNSBMIDIwNi42MDAgMjAwLjIwMCAyMDYuNDk2IDE4MC4yMDAgQyAyMDYuMzc1IDE1Ni45MzMsMjA2LjEyNiAxNTguODE4LDIwOS4wODYgMTYwLjYwMyBMIDIxMS40MDAgMTYxLjk5OCAyMTkuNjg4IDE2MS45OTkgTTE5OC40MjAgMTYxLjMwNSBDIDE5OS41NzEgMTYyLjAyNCwxOTkuNjMxIDE2My4wNTcsMTk4LjU1MiAxNjMuNTQ5IEwgMTk3LjYwMCAxNjMuOTgzIDE5Ny42MDAgMTgwLjk1NiBMIDE5Ny42MDAgMTk3LjkyOSAxOTYuMzY5IDE5OC45NjQgQyAxOTUuNjYwIDE5OS41NjIsMTk0LjY0NCAyMDAuMDAwLDE5My45NjkgMjAwLjAwMCBMIDE5Mi44MDAgMjAwLjAwMCAxOTIuODAwIDE4MC4xNDggTCAxOTIuODAwIDE2MC4yOTcgMTk1LjI0NSAxNjAuNTczIEMgMTk2LjU5MCAxNjAuNzI2LDE5OC4wMTkgMTYxLjA1NSwxOTguNDIwIDE2MS4zMDUgTTI2MC42NDMgMTY0LjIzMyBDIDI2MC41MDkgMTY0LjU4MSwyNjAuNDAwIDE2OS41MTYsMjYwLjQwMCAxNzUuMjAwIEMgMjYwLjQwMCAxODAuODg0LDI2MC41MDkgMTg1LjgxOSwyNjAuNjQzIDE4Ni4xNjcgQyAyNjAuODkyIDE4Ni44MTcsMjc4Ljk2OSAxODcuMTcwLDI4MC41NjcgMTg2LjU1NyBDIDI4MS4yMTYgMTg2LjMwOCwyODEuNTc0IDE2NS44MzksMjgwLjk1NyAxNjQuMjMzIEMgMjgwLjU5MCAxNjMuMjc1LDI2MS4wMTAgMTYzLjI3NSwyNjAuNjQzIDE2NC4yMzMgTTI4Ni4wOTQgMTc1LjEwMCBMIDI4Ni4yMDAgMTg2LjYwMCAyOTYuNDAwIDE4Ni42MDAgTCAzMDYuNjAwIDE4Ni42MDAgMzA2LjcwNiAxNzUuMTAwIEwgMzA2LjgxMiAxNjMuNjAwIDI5Ni40MDAgMTYzLjYwMCBMIDI4NS45ODggMTYzLjYwMCAyODYuMDk0IDE3NS4xMDAgTTIxMS40NzQgMTY0LjY1OSBDIDIxMS4zMjMgMTY0LjgxMCwyMTEuMjAwIDE2Ny42MDMsMjExLjIwMCAxNzAuODY3IEwgMjExLjIwMCAxNzYuODAwIDIyMC4wMTAgMTc2LjgwMCBMIDIyOC44MjEgMTc2LjgwMCAyMjguNzEwIDE3MC43MDAgTCAyMjguNjAwIDE2NC42MDAgMjIwLjE3NCAxNjQuNDkyIEMgMjE1LjU0MCAxNjQuNDMzLDIxMS42MjUgMTY0LjUwOCwyMTEuNDc0IDE2NC42NTkgTTIxMS40NzQgMTc5LjQ1OSBDIDIxMS4zMjMgMTc5LjYxMCwyMTEuMjAwIDE4Mi40OTMsMjExLjIwMCAxODUuODY3IEwgMjExLjIwMCAxOTIuMDAwIDIyMC4wMTAgMTkyLjAwMCBMIDIyOC44MjAgMTkyLjAwMCAyMjguNzEwIDE4NS43MDAgTCAyMjguNjAwIDE3OS40MDAgMjIwLjE3NCAxNzkuMjkyIEMgMjE1LjU0MCAxNzkuMjMzLDIxMS42MjUgMTc5LjMwOCwyMTEuNDc0IDE3OS40NTkgTTIxNi44MDAgMjEyLjAxNSBDIDIxOC41OTcgMjEyLjkxNCwyMjIuODAwIDIxNy4zMTEsMjIyLjgwMCAyMTguMjkwIEMgMjIyLjgwMCAyMTkuMzY0LDIyMi4wMTYgMjIwLjAwMCwyMjAuNjk0IDIyMC4wMDAgQyAyMTguOTk5IDIyMC4wMDAsMjE4LjYyOCAyMjAuMjgyLDIxMi45NjUgMjI1Ljg3MSBDIDIxMC4xMDcgMjI4LjY5MiwyMDYuOTI4IDIzMS42MzAsMjA1LjkwMSAyMzIuNDAwIEMgMjAzLjQ2NiAyMzQuMjI1LDIwMy4zNDUgMjM0LjY0MiwyMDUuMDE3IDIzNS40MzUgQyAyMDYuNjkwIDIzNi4yMjksMjA2LjgwMiAyMzcuMjU4LDIwNS4zMDAgMjM4LjAzMiBDIDIwNC42OTUgMjM4LjM0NCwyMDQuMDY4IDIzOC43NzksMjAzLjkwNiAyMzguOTk5IEMgMjAzLjc0NCAyMzkuMjIwLDIwMy42MDkgMjQ3Ljg5MCwyMDMuNjA2IDI1OC4yNjcgQyAyMDMuNTk5IDI3OC43NzAsMjAzLjYyOSAyNzguNDAwLDIwMS45OTkgMjc4LjQwMCBDIDE5OC45NTMgMjc4LjQwMCwxOTcuNjM4IDI3NC45MDksMTk4LjU0MCAyNjkuMjE3IEMgMTk5LjM0NiAyNjQuMTMwLDE5OS41MjkgMjM5LjQ1MSwxOTguNzY0IDIzOC45NzggQyAxOTguNTI1IDIzOC44MzAsMTk3LjU4MCAyMzkuMjcwLDE5Ni42NjQgMjM5Ljk1NyBDIDE4NS45NDEgMjQ3Ljk5OSwxNjUuOTgxIDI1OS4wOTIsMTYzLjc2NCAyNTguMjQyIEMgMTYyLjA2OSAyNTcuNTkxLDE2My4yODAgMjU2LjQzMiwxNjkuMjcxIDI1Mi45NzIgQyAxODQuNDMxIDI0NC4yMTYsMTk2LjE5NSAyMzUuNDIwLDIwNS40MjAgMjI1Ljk0MiBDIDIxNC44NjIgMjE2LjI0MCwyMTUuMzY0IDIxNS4yMDIsMjExLjgzNSAyMTIuNjY1IEMgMjA5LjQyOSAyMTAuOTM2LDIxMy41NjQgMjEwLjM5NCwyMTYuODAwIDIxMi4wMTUgTTExNC4wMDQgMjEyLjU2MyBDIDExNy43NzEgMjE0LjUzMiwxMTguODYzIDIxNi40ODAsMTE2Ljc2NCAyMTcuNDg2IEMgMTE1LjY0MyAyMTguMDIzLDExMy43NzYgMjIxLjIzOSwxMTQuMDk4IDIyMi4wNzggQyAxMTQuMzAyIDIyMi42MTEsMTE0Ljg1OSAyMjIuNTk5LDEyNi40MDAgMjIxLjgxOSBDIDEzMy4xMDIgMjIxLjM2NiwxMzMuNTI2IDIyMS4yNjUsMTM1LjI2OCAyMTkuNjkxIEwgMTM2Ljg3NCAyMTguMjQwIDEzOC41MzcgMjE5LjEzNCBDIDE0My4xNDEgMjIxLjYwOCwxNDQuMDExIDIyMy40MDQsMTQxLjQ1NSAyMjUuMTYyIEMgMTM5Ljk1MSAyMjYuMTk3LDEzOS4zMDAgMjI3LjEzMywxMzcuMjM4IDIzMS4yMjEgQyAxMzUuODk4IDIzMy44ODAsMTM0LjI2MCAyMzYuODQwLDEzMy42MDAgMjM3LjgwMCBDIDEzMi45NDAgMjM4Ljc1OSwxMzIuNDAwIDIzOS42NTcsMTMyLjQwMCAyMzkuNzk0IEMgMTMyLjQwMCAyMzkuOTMxLDEzMS42ODAgMjQxLjEwNCwxMzAuODAwIDI0Mi40MDAgQyAxMjguODg0IDI0NS4yMjEsMTI4Ljg4OCAyNDUuMTgxLDEzMC4zOTkgMjQ2Ljc5OSBDIDEzNC41NjAgMjUxLjI1NCwxMzEuMDg3IDI1NS40ODUsMTI2LjcwMyAyNTEuMzAyIEwgMTI1LjYwNSAyNTAuMjU1IDEyNC41NjMgMjUxLjIyOCBDIDEyMy45ODkgMjUxLjc2MiwxMjIuMzM5IDI1My41OTUsMTIwLjg5NyAyNTUuMzAxIEMgMTEyLjQ0NCAyNjUuMjkzLDg5LjIwMCAyODAuOTEwLDg5LjIwMCAyNzYuNTk2IEMgODkuMjAwIDI3NS45ODAsODkuNzg1IDI3NS41MzgsOTUuNDAwIDI3MS45MDUgQyAxMDUuNDI5IDI2NS40MTYsMTE0LjgyOCAyNTYuNjg5LDExOS45NDEgMjQ5LjEyMCBMIDEyMS4yMTAgMjQ3LjI0MSAxMjAuMzA1IDI0Ni4zNjkgQyAxMTcuNTY5IDI0My43MzMsMTExLjIwNiAyNDAuNTYyLDEwNi4xNDcgMjM5LjMxNCBMIDEwMy41NDQgMjM4LjY3MSA5OS44NzIgMjQyLjI2MyBDIDk1LjI4OCAyNDYuNzQ2LDg4LjI0OSAyNTIuNDAwLDg3LjI1MCAyNTIuNDAwIEMgODUuNjAyIDI1Mi40MDAsODYuNTA1IDI1MC45MDQsOTAuNDczIDI0Ny4wNTkgQyA5Mi43NzggMjQ0LjgyNyw5NS42MzkgMjQxLjgzMCw5Ni44MzIgMjQwLjQwMCBDIDk4LjAyNCAyMzguOTcwLDk5LjEwNSAyMzcuNzEwLDk5LjIzNCAyMzcuNjAwIEMgMTAwLjgwNCAyMzYuMjU2LDEwNi44MDEgMjI1Ljg3NCwxMDguMzYwIDIyMS44MDAgQyAxMDguODY1IDIyMC40ODAsMTA5LjQyNCAyMTkuMDQwLDEwOS42MDMgMjE4LjYwMCBDIDExMC42NDcgMjE2LjAyNywxMTAuNDQ3IDIxNC43NjAsMTA4Ljg3MCAyMTMuOTYxIEMgMTA2LjYwMyAyMTIuODEzLDEwNi4wNTAgMjEyLjMzNiwxMDYuMjgzIDIxMS43MjggQyAxMDYuNjg4IDIxMC42NzMsMTExLjM1MiAyMTEuMTc4LDExNC4wMDQgMjEyLjU2MyBNMjgxLjEzMyAyMTUuMzE2IEMgMjg2LjIzMiAyMTcuNjc4LDI4OS43NTYgMjIyLjg3OCwyODcuMTY0IDIyNC4yMTkgQyAyODUuODk2IDIyNC44NzQsMjg0LjY0NCAyMjcuMTk2LDI4MS45OTkgMjMzLjgwMCBDIDI3OS40NjIgMjQwLjEzMiwyNzMuOTYzIDI1MS4yODcsMjcwLjcwMCAyNTYuNzIwIEMgMjY5LjYwNCAyNTguNTQ2LDI2OC44MTIgMjYwLjE0NSwyNjguOTQxIDI2MC4yNzQgQyAyNjkuNzQzIDI2MS4wNzcsMzAyLjQwMCAyNTUuMTc1LDMwMi40MDAgMjU0LjIyNyBDIDMwMi40MDAgMjUyLjk3OSwyOTcuMjI4IDI0Ni43MDYsMjkyLjMyMCAyNDIuMDAwIEMgMjg3LjgxMyAyMzcuNjc5LDI4OC4yNzkgMjM1LjkwNCwyOTMuMDM1IDIzOS4yNzcgQyAzMDUuNTU3IDI0OC4xNTgsMzEzLjYwMCAyNTguMjY3LDMxMy42MDAgMjY1LjEyNSBDIDMxMy42MDAgMjcwLjQzMiwzMDkuNDk3IDI3MC44NzYsMzA4LjA0OSAyNjUuNzI3IEMgMzA2Ljg5NyAyNjEuNjMwLDMwNS4zMTcgMjU3Ljk2NywzMDQuNDgwIDI1Ny40NDkgQyAzMDQuMjk3IDI1Ny4zMzYsMzAwLjczOSAyNTguMTM1LDI5Ni41NzQgMjU5LjIyMyBDIDI4OC42NzYgMjYxLjI4NiwyODIuMDYyIDI2Mi44MjIsMjYzLjY2MSAyNjYuODYyIEMgMjYwLjg2MCAyNjcuNDc3LDI1OS43MTMgMjY3LjkyNCwyNTkuMDg5IDI2OC42NDIgQyAyNTcuMzA0IDI3MC42OTQsMjUzLjU2OSAyNjguMTkwLDI1MS4zNzAgMjYzLjQ2NiBDIDI0OS43MTUgMjU5LjkxMiwyNTAuNTQ4IDI1Ni4xMDIsMjUyLjMwOSAyNTkuMTcwIEMgMjUzLjY2NCAyNjEuNTMxLDI1NS44ODYgMjYxLjk4MywyNjIuNTU0IDI2MS4yNTcgQyAyNjQuODkyIDI2MS4wMDIsMjY0LjkxNyAyNjAuOTg1LDI2Ni4wNzkgMjU4LjkyNiBDIDI2OC41MDQgMjU0LjYyNSwyNzIuMzU5IDI0NS4yOTMsMjc2LjQ1OSAyMzMuODAwIEMgMjgxLjM4MSAyMjAuMDAwLDI4MS4zNzkgMjE5LjI0NiwyNzYuNDEzIDIxNS45NzEgQyAyNzMuNTg0IDIxNC4xMDUsMjc3LjM3OSAyMTMuNTc4LDI4MS4xMzMgMjE1LjMxNiBNMTI3LjAwMCAyMjQuNDMyIEMgMTI1LjQ2MCAyMjQuNjExLDEyMS41MjMgMjI0LjgzNywxMTguMjUyIDIyNC45MzMgTCAxMTIuMzA0IDIyNS4xMDggMTEwLjc5OSAyMjcuNzAyIEMgMTA5Ljk3MiAyMjkuMTI5LDEwOC4zNjYgMjMxLjY3MywxMDcuMjMxIDIzMy4zNTQgQyAxMDUuODYwIDIzNS4zODcsMTA1LjM0MCAyMzYuNDY0LDEwNS42ODQgMjM2LjU2NyBDIDEwNS45NjggMjM2LjY1MiwxMDcuNzMwIDIzNy4wMzAsMTA5LjYwMCAyMzcuNDA3IEMgMTEzLjU5NSAyMzguMjEyLDExNy45NzEgMjM5LjYxOCwxMjEuNjAwIDI0MS4yNjMgTCAxMjQuMjAwIDI0Mi40NDIgMTI1LjEwOSAyNDEuMzIxIEMgMTI3Ljg5NyAyMzcuODgzLDEzNC4yNjggMjI1LjY3NywxMzMuODQ4IDIyNC41ODAgQyAxMzMuNTk5IDIyMy45MzEsMTMxLjY1NiAyMjMuODg5LDEyNy4wMDAgMjI0LjQzMiAiIHN0cm9rZT0ibm9uZSIgZmlsbD0iIzhjMWMyYyIgZmlsbC1ydWxlPSJldmVub2RkIj48L3BhdGg+PC9nPjwvc3ZnPg==", zD = () => /* @__PURE__ */ fe.jsx(
  "img",
  {
    src: _d,
    alt: "WasedaTime English Logo",
    style: { width: 120, height: 120 }
  }
), hS = () => /* @__PURE__ */ fe.jsx(
  "img",
  {
    src: kd,
    alt: "WasedaTime Japanese Logo",
    style: { width: 120, height: 120 }
  }
), UD = () => /* @__PURE__ */ fe.jsx(
  "img",
  {
    src: _d,
    alt: "WasedaTime English Small Logo",
    style: { width: 50, height: 50 }
  }
), gS = () => /* @__PURE__ */ fe.jsx("img", { src: kd, style: { width: 50, height: 50 } }), PD = ({ theme: e, setTheme: t }) => {
  const n = {
    light: /* @__PURE__ */ fe.jsx(LD, { color: $e.icon.sun }),
    dark: /* @__PURE__ */ fe.jsx(OD, { color: $e.icon.moon })
  };
  return /* @__PURE__ */ fe.jsx(
    "div",
    {
      className: "cursor-pointer transition duration-500 ease-in-out p-2 text-center flex items-center justify-center text-icon-sun dark:text-icon-moon",
      onClick: () => t(e === "dark" ? "light" : "dark"),
      children: n[e]
    }
  );
}, RD = (e, t) => {
  const n = e ? "#FAFAFA30" : $e.light.bgSide, r = e ? "#24252770" : $e.dark.bgSide;
  return {
    height: "67px",
    width: "100%",
    padding: "8px 0px",
    borderWidth: 0,
    borderBottomWidth: 2,
    borderStyle: "solid",
    borderColor: t === "light" ? $e.light.bgSide : $e.dark.bgSide,
    background: t === "light" ? n : r,
    backdropFilter: e ? "blur(5px)" : "none",
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: 90,
    gridRow: "1 / 2",
    display: "flex",
    flexDirection: "row"
  };
}, YD = {
  flex: "5",
  paddingRight: "0px"
}, FD = {
  flex: "3",
  padding: "0px 0px 0px 1em"
}, QD = {
  flex: "8",
  margin: "auto 0px"
}, BD = {
  flex: "10",
  margin: "auto 0px"
}, $D = {
  flex: "3",
  margin: "auto 0px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end"
}, WD = (e) => ({
  width: "100%",
  borderRadius: "25px",
  height: "40px",
  padding: "0px 1em",
  outline: "none",
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: e === "light" ? $e.light.bgSide : $e.dark.text3,
  backgroundColor: e === "light" ? $e.light.bgMain : $e.dark.text3,
  color: e === "light" ? $e.light.text1 : $e.dark.text1
}), VD = (e) => ({
  fontWeight: 500,
  paddingLeft: "100px",
  fontSize: "32px",
  color: e === "light" ? $e.light.text1 : $e.dark.text1
}), pS = ({
  title: e,
  onInputChange: t,
  placeholder: n,
  inputText: r,
  disabled: o,
  isBlur: i,
  changeLang: s,
  theme: a = "light",
  setTheme: c
}) => {
  const u = /* @__PURE__ */ fe.jsx("label", { style: { marginLeft: "0" }, children: /* @__PURE__ */ fe.jsx(
    "input",
    {
      style: WD(a),
      placeholder: n || "Search...",
      onChange: t ? (l) => t(l.target.value) : () => {
      },
      value: r || "",
      disabled: o,
      autoFocus: !0
    }
  ) });
  return /* @__PURE__ */ fe.jsxs("header", { style: RD(i, a), children: [
    /* @__PURE__ */ fe.jsx(yc, { maxWidth: ha.tablet, children: (l) => l ? /* @__PURE__ */ fe.jsx("div", { style: FD, onClick: () => {
      location.href = "/home";
    }, children: /* @__PURE__ */ fe.jsx(UD, {}) }) : /* @__PURE__ */ fe.jsx("header", { style: YD, children: /* @__PURE__ */ fe.jsx("h2", { style: VD(a), children: e }) }) }),
    /* @__PURE__ */ fe.jsx(yc, { maxWidth: ha.tablet, children: (l) => l ? /* @__PURE__ */ fe.jsx("div", { style: BD, children: u }) : /* @__PURE__ */ fe.jsx("div", { style: QD, children: u }) }),
    /* @__PURE__ */ fe.jsxs("div", { style: $D, children: [
      /* @__PURE__ */ fe.jsx(PD, { theme: a, setTheme: c }),
      /* @__PURE__ */ fe.jsx(kD, { theme: a, changeLang: s })
    ] })
  ] });
}, HD = /* @__PURE__ */ fe.jsx("style", { children: `
      @keyframes loadingSpinnerSpin {
        from {
          transform: rotate(0deg);
        }
        50% {
          transform: rotate(360deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    ` }), qD = {
  display: "block",
  width: "100px",
  height: "100px",
  transition: "transform(0, 12vh)",
  animation: "loadingSpinnerSpin 3s linear infinite"
}, MS = ({ message: e, theme: t }) => {
  const [n, r] = vr("");
  return dt(() => {
    setTimeout(() => {
      r(
        "Slow network is detected. Please wait we're almost done 💪"
      );
    }, 4e3);
  }), /* @__PURE__ */ fe.jsx(If, { style: { flex: "1 0 0" }, children: /* @__PURE__ */ fe.jsxs(
    Zg,
    {
      style: {
        alignItems: "center",
        justifyContent: "center",
        padding: "25px"
      },
      children: [
        HD,
        /* @__PURE__ */ fe.jsx("div", { style: qD, children: /* @__PURE__ */ fe.jsx(zD, {}) }),
        /* @__PURE__ */ fe.jsx(
          "p",
          {
            style: {
              fontSize: "2rem",
              textAlign: "center",
              color: t === "light" ? $e.light.text2 : $e.dark.text2
            },
            children: e || "Loading..."
          }
        ),
        /* @__PURE__ */ fe.jsx(
          "p",
          {
            style: {
              fontSize: "2rem",
              textAlign: "center",
              color: t === "light" ? $e.light.text2 : $e.dark.text2
            },
            children: n
          }
        )
      ]
    }
  ) });
};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var ga = function(e, t) {
  return ga = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var o in r)
      r.hasOwnProperty(o) && (n[o] = r[o]);
  }, ga(e, t);
};
function yu(e, t) {
  ga(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var et = function() {
  return et = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, et.apply(this, arguments);
};
function KD(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function GD(e, t, n, r) {
  var o = arguments.length, i = o < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(e, t, n, r);
  else
    for (var a = e.length - 1; a >= 0; a--)
      (s = e[a]) && (i = (o < 3 ? s(i) : o > 3 ? s(t, n, i) : s(t, n)) || i);
  return o > 3 && i && Object.defineProperty(t, n, i), i;
}
function JD(e, t) {
  return function(n, r) {
    t(n, r, e);
  };
}
function XD(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function je(e, t, n, r) {
  function o(i) {
    return i instanceof n ? i : new n(function(s) {
      s(i);
    });
  }
  return new (n || (n = Promise))(function(i, s) {
    function a(l) {
      try {
        u(r.next(l));
      } catch (f) {
        s(f);
      }
    }
    function c(l) {
      try {
        u(r.throw(l));
      } catch (f) {
        s(f);
      }
    }
    function u(l) {
      l.done ? i(l.value) : o(l.value).then(a, c);
    }
    u((r = r.apply(e, t || [])).next());
  });
}
function be(e, t) {
  var n = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, r, o, i, s;
  return s = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function a(u) {
    return function(l) {
      return c([u, l]);
    };
  }
  function c(u) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; n; )
      try {
        if (r = 1, o && (i = u[0] & 2 ? o.return : u[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, u[1])).done)
          return i;
        switch (o = 0, i && (u = [u[0] & 2, i.value]), u[0]) {
          case 0:
          case 1:
            i = u;
            break;
          case 4:
            return n.label++, { value: u[1], done: !1 };
          case 5:
            n.label++, o = u[1], u = [0];
            continue;
          case 7:
            u = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (i = n.trys, !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              n = 0;
              continue;
            }
            if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
              n.label = u[1];
              break;
            }
            if (u[0] === 6 && n.label < i[1]) {
              n.label = i[1], i = u;
              break;
            }
            if (i && n.label < i[2]) {
              n.label = i[2], n.ops.push(u);
              break;
            }
            i[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        u = t.call(e, n);
      } catch (l) {
        u = [6, l], o = 0;
      } finally {
        r = i = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function ZD(e, t, n, r) {
  r === void 0 && (r = n), e[r] = t[n];
}
function eI(e, t) {
  for (var n in e)
    n !== "default" && !t.hasOwnProperty(n) && (t[n] = e[n]);
}
function pa(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
  if (n)
    return n.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
      }
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Ct(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n)
    return e;
  var r = n.call(e), o, i = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = r.next()).done; )
      i.push(o.value);
  } catch (a) {
    s = { error: a };
  } finally {
    try {
      o && !o.done && (n = r.return) && n.call(r);
    } finally {
      if (s)
        throw s.error;
    }
  }
  return i;
}
function tI() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e = e.concat(Ct(arguments[t]));
  return e;
}
function nI() {
  for (var e = 0, t = 0, n = arguments.length; t < n; t++)
    e += arguments[t].length;
  for (var r = Array(e), o = 0, t = 0; t < n; t++)
    for (var i = arguments[t], s = 0, a = i.length; s < a; s++, o++)
      r[o] = i[s];
  return r;
}
function di(e) {
  return this instanceof di ? (this.v = e, this) : new di(e);
}
function rI(e, t, n) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(e, t || []), o, i = [];
  return o = {}, s("next"), s("throw"), s("return"), o[Symbol.asyncIterator] = function() {
    return this;
  }, o;
  function s(d) {
    r[d] && (o[d] = function(p) {
      return new Promise(function(M, y) {
        i.push([d, p, M, y]) > 1 || a(d, p);
      });
    });
  }
  function a(d, p) {
    try {
      c(r[d](p));
    } catch (M) {
      f(i[0][3], M);
    }
  }
  function c(d) {
    d.value instanceof di ? Promise.resolve(d.value.v).then(u, l) : f(i[0][2], d);
  }
  function u(d) {
    a("next", d);
  }
  function l(d) {
    a("throw", d);
  }
  function f(d, p) {
    d(p), i.shift(), i.length && a(i[0][0], i[0][1]);
  }
}
function iI(e) {
  var t, n;
  return t = {}, r("next"), r("throw", function(o) {
    throw o;
  }), r("return"), t[Symbol.iterator] = function() {
    return this;
  }, t;
  function r(o, i) {
    t[o] = e[o] ? function(s) {
      return (n = !n) ? { value: di(e[o](s)), done: o === "return" } : i ? i(s) : s;
    } : i;
  }
}
function oI(e) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator], n;
  return t ? t.call(e) : (e = typeof pa == "function" ? pa(e) : e[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
    return this;
  }, n);
  function r(i) {
    n[i] = e[i] && function(s) {
      return new Promise(function(a, c) {
        s = e[i](s), o(a, c, s.done, s.value);
      });
    };
  }
  function o(i, s, a, c) {
    Promise.resolve(c).then(function(u) {
      i({ value: u, done: a });
    }, s);
  }
}
function sI(e, t) {
  return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : e.raw = t, e;
}
function aI(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var n in e)
      Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
  return t.default = e, t;
}
function uI(e) {
  return e && e.__esModule ? e : { default: e };
}
function cI(e, t) {
  if (!t.has(e))
    throw new TypeError("attempted to get private field on non-instance");
  return t.get(e);
}
function lI(e, t, n) {
  if (!t.has(e))
    throw new TypeError("attempted to set private field on non-instance");
  return t.set(e, n), n;
}
const fI = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return et;
  },
  __asyncDelegator: iI,
  __asyncGenerator: rI,
  __asyncValues: oI,
  __await: di,
  __awaiter: je,
  __classPrivateFieldGet: cI,
  __classPrivateFieldSet: lI,
  __createBinding: ZD,
  __decorate: GD,
  __exportStar: eI,
  __extends: yu,
  __generator: be,
  __importDefault: uI,
  __importStar: aI,
  __makeTemplateObject: sI,
  __metadata: XD,
  __param: JD,
  __read: Ct,
  __rest: KD,
  __spread: tI,
  __spreadArrays: nI,
  __values: pa
}, Symbol.toStringTag, { value: "Module" }));
var lo;
(function(e) {
  e.Cognito = "COGNITO", e.Google = "Google", e.Facebook = "Facebook", e.Amazon = "LoginWithAmazon", e.Apple = "SignInWithApple";
})(lo || (lo = {}));
function As(e) {
  var t = ["provider"];
  return e && !!t.find(function(n) {
    return e.hasOwnProperty(n);
  });
}
function dI(e) {
  var t = ["customProvider"];
  return e && !!t.find(function(n) {
    return e.hasOwnProperty(n);
  });
}
function hI(e) {
  var t = ["customState"];
  return e && !!t.find(function(n) {
    return e.hasOwnProperty(n);
  });
}
function Ln(e) {
  return e.redirectSignIn !== void 0;
}
var Ce;
(function(e) {
  e.NoConfig = "noConfig", e.MissingAuthConfig = "missingAuthConfig", e.EmptyUsername = "emptyUsername", e.InvalidUsername = "invalidUsername", e.EmptyPassword = "emptyPassword", e.EmptyCode = "emptyCode", e.SignUpError = "signUpError", e.NoMFA = "noMFA", e.InvalidMFA = "invalidMFA", e.EmptyChallengeResponse = "emptyChallengeResponse", e.NoUserSession = "noUserSession", e.Default = "default", e.DeviceConfig = "deviceConfig", e.NetworkError = "networkError", e.AutoSignInError = "autoSignInError";
})(Ce || (Ce = {}));
function gI(e) {
  return !!e.username;
}
var pl;
(function(e) {
  e.API_KEY = "API_KEY", e.AWS_IAM = "AWS_IAM", e.OPENID_CONNECT = "OPENID_CONNECT", e.AMAZON_COGNITO_USER_POOLS = "AMAZON_COGNITO_USER_POOLS", e.AWS_LAMBDA = "AWS_LAMBDA";
})(pl || (pl = {}));
var pI = "Logging", MI = globalThis && globalThis.__values || function(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
  if (n)
    return n.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
      }
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Zn = globalThis && globalThis.__read || function(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n)
    return e;
  var r = n.call(e), o, i = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = r.next()).done; )
      i.push(o.value);
  } catch (a) {
    s = { error: a };
  } finally {
    try {
      o && !o.done && (n = r.return) && n.call(r);
    } finally {
      if (s)
        throw s.error;
    }
  }
  return i;
}, er = globalThis && globalThis.__spreadArray || function(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}, Ml = {
  VERBOSE: 1,
  DEBUG: 2,
  INFO: 3,
  WARN: 4,
  ERROR: 5
}, St;
(function(e) {
  e.DEBUG = "DEBUG", e.ERROR = "ERROR", e.INFO = "INFO", e.WARN = "WARN", e.VERBOSE = "VERBOSE";
})(St || (St = {}));
var Ut = (
  /** @class */
  function() {
    function e(t, n) {
      n === void 0 && (n = St.WARN), this.name = t, this.level = n, this._pluggables = [];
    }
    return e.prototype._padding = function(t) {
      return t < 10 ? "0" + t : "" + t;
    }, e.prototype._ts = function() {
      var t = /* @__PURE__ */ new Date();
      return [this._padding(t.getMinutes()), this._padding(t.getSeconds())].join(":") + "." + t.getMilliseconds();
    }, e.prototype.configure = function(t) {
      return t ? (this._config = t, this._config) : this._config;
    }, e.prototype._log = function(t) {
      for (var n, r, o = [], i = 1; i < arguments.length; i++)
        o[i - 1] = arguments[i];
      var s = this.level;
      e.LOG_LEVEL && (s = e.LOG_LEVEL), typeof window < "u" && window.LOG_LEVEL && (s = window.LOG_LEVEL);
      var a = Ml[s], c = Ml[t];
      if (c >= a) {
        var u = console.log.bind(console);
        t === St.ERROR && console.error && (u = console.error.bind(console)), t === St.WARN && console.warn && (u = console.warn.bind(console));
        var l = "[".concat(t, "] ").concat(this._ts(), " ").concat(this.name), f = "";
        if (o.length === 1 && typeof o[0] == "string")
          f = "".concat(l, " - ").concat(o[0]), u(f);
        else if (o.length === 1)
          f = "".concat(l, " ").concat(o[0]), u(l, o[0]);
        else if (typeof o[0] == "string") {
          var d = o.slice(1);
          d.length === 1 && (d = d[0]), f = "".concat(l, " - ").concat(o[0], " ").concat(d), u("".concat(l, " - ").concat(o[0]), d);
        } else
          f = "".concat(l, " ").concat(o), u(l, o);
        try {
          for (var p = MI(this._pluggables), M = p.next(); !M.done; M = p.next()) {
            var y = M.value, m = { message: f, timestamp: Date.now() };
            y.pushLogs([m]);
          }
        } catch (w) {
          n = { error: w };
        } finally {
          try {
            M && !M.done && (r = p.return) && r.call(p);
          } finally {
            if (n)
              throw n.error;
          }
        }
      }
    }, e.prototype.log = function() {
      for (var t = [], n = 0; n < arguments.length; n++)
        t[n] = arguments[n];
      this._log.apply(this, er([St.INFO], Zn(t), !1));
    }, e.prototype.info = function() {
      for (var t = [], n = 0; n < arguments.length; n++)
        t[n] = arguments[n];
      this._log.apply(this, er([St.INFO], Zn(t), !1));
    }, e.prototype.warn = function() {
      for (var t = [], n = 0; n < arguments.length; n++)
        t[n] = arguments[n];
      this._log.apply(this, er([St.WARN], Zn(t), !1));
    }, e.prototype.error = function() {
      for (var t = [], n = 0; n < arguments.length; n++)
        t[n] = arguments[n];
      this._log.apply(this, er([St.ERROR], Zn(t), !1));
    }, e.prototype.debug = function() {
      for (var t = [], n = 0; n < arguments.length; n++)
        t[n] = arguments[n];
      this._log.apply(this, er([St.DEBUG], Zn(t), !1));
    }, e.prototype.verbose = function() {
      for (var t = [], n = 0; n < arguments.length; n++)
        t[n] = arguments[n];
      this._log.apply(this, er([St.VERBOSE], Zn(t), !1));
    }, e.prototype.addPluggable = function(t) {
      t && t.getCategoryName() === pI && (this._pluggables.push(t), t.configure(this._config));
    }, e.prototype.listPluggables = function() {
      return this._pluggables;
    }, e.LOG_LEVEL = null, e;
  }()
), yI = globalThis && globalThis.__read || function(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n)
    return e;
  var r = n.call(e), o, i = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = r.next()).done; )
      i.push(o.value);
  } catch (a) {
    s = { error: a };
  } finally {
    try {
      o && !o.done && (n = r.return) && n.call(r);
    } finally {
      if (s)
        throw s.error;
    }
  }
  return i;
}, Es = new Ut("Amplify"), mI = (
  /** @class */
  function() {
    function e() {
      this._components = [], this._config = {}, this._modules = {}, this.Auth = null, this.Analytics = null, this.API = null, this.Credentials = null, this.Storage = null, this.I18n = null, this.Cache = null, this.PubSub = null, this.Interactions = null, this.Pushnotification = null, this.UI = null, this.XR = null, this.Predictions = null, this.DataStore = null, this.Geo = null, this.Notifications = null, this.Logger = Ut, this.ServiceWorker = null;
    }
    return e.prototype.register = function(t) {
      Es.debug("component registered in amplify", t), this._components.push(t), typeof t.getModuleName == "function" ? (this._modules[t.getModuleName()] = t, this[t.getModuleName()] = t) : Es.debug("no getModuleName method for component", t), t.configure(this._config);
    }, e.prototype.configure = function(t) {
      var n = this;
      return t ? (this._config = Object.assign(this._config, t), Es.debug("amplify config", this._config), Object.entries(this._modules).forEach(function(r) {
        var o = yI(r, 2);
        o[0];
        var i = o[1];
        Object.keys(i).forEach(function(s) {
          n._modules[s] && (i[s] = n._modules[s]);
        });
      }), this._components.map(function(r) {
        r.configure(n._config);
      }), this._config) : this._config;
    }, e.prototype.addPluggable = function(t) {
      t && t.getCategory && typeof t.getCategory == "function" && this._components.map(function(n) {
        n.addPluggable && typeof n.addPluggable == "function" && n.addPluggable(t);
      });
    }, e;
  }()
), mu = new mI(), Ke;
(function(e) {
  e.WebUnknown = "0", e.React = "1", e.NextJs = "2", e.Angular = "3", e.VueJs = "4", e.Nuxt = "5", e.Svelte = "6", e.ServerSideUnknown = "100", e.ReactSSR = "101", e.NextJsSSR = "102", e.AngularSSR = "103", e.VueJsSSR = "104", e.NuxtSSR = "105", e.SvelteSSR = "106", e.ReactNative = "201", e.Expo = "202";
})(Ke || (Ke = {}));
var Ma;
(function(e) {
  e.API = "api", e.Auth = "auth", e.Analytics = "analytics", e.DataStore = "datastore", e.Geo = "geo", e.InAppMessaging = "inappmessaging", e.Interactions = "interactions", e.Predictions = "predictions", e.PubSub = "pubsub", e.PushNotification = "pushnotification", e.Storage = "storage";
})(Ma || (Ma = {}));
var yl;
(function(e) {
  e.Record = "1", e.UpdateEndpoint = "2";
})(yl || (yl = {}));
var ml;
(function(e) {
  e.GraphQl = "1", e.Get = "2", e.Post = "3", e.Put = "4", e.Patch = "5", e.Del = "6", e.Head = "7";
})(ml || (ml = {}));
var ya;
(function(e) {
  e.FederatedSignIn = "30";
})(ya || (ya = {}));
var vl;
(function(e) {
  e.Subscribe = "1", e.GraphQl = "2";
})(vl || (vl = {}));
var wl;
(function(e) {
  e.None = "0";
})(wl || (wl = {}));
var Dl;
(function(e) {
  e.None = "0";
})(Dl || (Dl = {}));
var Il;
(function(e) {
  e.None = "0";
})(Il || (Il = {}));
var Al;
(function(e) {
  e.Convert = "1", e.Identify = "2", e.Interpret = "3";
})(Al || (Al = {}));
var El;
(function(e) {
  e.Subscribe = "1";
})(El || (El = {}));
var Tl;
(function(e) {
  e.None = "0";
})(Tl || (Tl = {}));
var Nl;
(function(e) {
  e.Put = "1", e.Get = "2", e.List = "3", e.Copy = "4", e.Remove = "5", e.GetProperties = "6";
})(Nl || (Nl = {}));
var zd = "5.3.11", Vo = function() {
  return typeof global < "u";
}, Nr = function() {
  return typeof window < "u";
}, Ud = function() {
  return typeof document < "u";
}, vu = function() {
  return typeof process < "u";
}, hi = function(e, t) {
  return !!Object.keys(e).find(function(n) {
    return n.startsWith(t);
  });
};
function vI() {
  var e = function(r) {
    return r.startsWith("_react") || r.startsWith("__react");
  }, t = function(r) {
    return Object.keys(r).find(e);
  }, n = function() {
    return Array.from(document.querySelectorAll("[id]"));
  };
  return Ud() && n().some(t);
}
function wI() {
  return vu() && typeof process.env < "u" && !!Object.keys(process.env).find(function(e) {
    return e.includes("react");
  });
}
function DI() {
  return Nr() && hi(window, "__VUE");
}
function II() {
  return Vo() && hi(global, "__VUE");
}
function AI() {
  return Nr() && hi(window, "__SVELTE");
}
function EI() {
  return vu() && typeof process.env < "u" && !!Object.keys(process.env).find(function(e) {
    return e.includes("svelte");
  });
}
function TI() {
  return Nr() && window.next && typeof window.next == "object";
}
function NI() {
  return Vo() && (hi(global, "__next") || hi(global, "__NEXT"));
}
function jI() {
  return Nr() && // @ts-ignore
  (window.__NUXT__ !== void 0 || window.$nuxt !== void 0);
}
function bI() {
  return Vo() && typeof global.__NUXT_PATHS__ < "u";
}
function SI() {
  var e = !!(Ud() && document.querySelector("[ng-version]")), t = !!// @ts-ignore
  (Nr() && typeof window.ng < "u");
  return e || t;
}
function xI() {
  var e;
  return vu() && typeof process.env == "object" && ((e = process.env.npm_lifecycle_script) === null || e === void 0 ? void 0 : e.startsWith("ng ")) || !1;
}
function CI() {
  return typeof navigator < "u" && typeof navigator.product < "u" && navigator.product === "ReactNative";
}
function OI() {
  return Vo() && typeof global.expo < "u";
}
function LI() {
  return Nr();
}
var _I = [
  // First, detect mobile
  { platform: Ke.Expo, detectionMethod: OI },
  { platform: Ke.ReactNative, detectionMethod: CI },
  // Next, detect web frameworks
  { platform: Ke.NextJs, detectionMethod: TI },
  { platform: Ke.Nuxt, detectionMethod: jI },
  { platform: Ke.Angular, detectionMethod: SI },
  { platform: Ke.React, detectionMethod: vI },
  { platform: Ke.VueJs, detectionMethod: DI },
  { platform: Ke.Svelte, detectionMethod: AI },
  { platform: Ke.WebUnknown, detectionMethod: LI },
  // Last, detect ssr frameworks
  { platform: Ke.NextJsSSR, detectionMethod: NI },
  { platform: Ke.NuxtSSR, detectionMethod: bI },
  { platform: Ke.ReactSSR, detectionMethod: wI },
  { platform: Ke.VueJsSSR, detectionMethod: II },
  { platform: Ke.AngularSSR, detectionMethod: xI },
  { platform: Ke.SvelteSSR, detectionMethod: EI }
];
function kI() {
  var e;
  return ((e = _I.find(function(t) {
    return t.detectionMethod();
  })) === null || e === void 0 ? void 0 : e.platform) || Ke.ServerSideUnknown;
}
var Xr, Ki = [], fo = !1, zI = 10, UI = 10, PI = 1e3, wu = function() {
  if (!Xr) {
    if (Xr = kI(), fo)
      for (; Ki.length; )
        Ki.pop()();
    else
      Ki.forEach(function(e) {
        return e();
      });
    jl(Ke.ServerSideUnknown, zI), jl(Ke.WebUnknown, UI);
  }
  return Xr;
}, Pd = function(e) {
  fo || Ki.push(e);
};
function RI() {
  Xr = void 0;
}
function jl(e, t) {
  Xr === e && !fo && setTimeout(function() {
    RI(), fo = !0, setTimeout(wu, PI);
  }, t);
}
var YI = globalThis && globalThis.__read || function(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n)
    return e;
  var r = n.call(e), o, i = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = r.next()).done; )
      i.push(o.value);
  } catch (a) {
    s = { error: a };
  } finally {
    try {
      o && !o.done && (n = r.return) && n.call(r);
    } finally {
      if (s)
        throw s.error;
    }
  }
  return i;
}, Rd = "aws-amplify", FI = (
  /** @class */
  function() {
    function e() {
      this.userAgent = "".concat(Rd, "/").concat(zd);
    }
    return Object.defineProperty(e.prototype, "framework", {
      get: function() {
        return wu();
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "isReactNative", {
      get: function() {
        return this.framework === Ke.ReactNative || this.framework === Ke.Expo;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.observeFrameworkChanges = function(t) {
      Pd(t);
    }, e;
  }()
), Ts = new FI(), QI = function(e) {
  var t = e === void 0 ? {} : e, n = t.category, r = t.action;
  t.framework;
  var o = [[Rd, zd]];
  return n && o.push([n, r]), o.push(["framework", wu()]), o;
}, Du = function(e) {
  var t = QI(e), n = t.map(function(r) {
    var o = YI(r, 2), i = o[0], s = o[1];
    return "".concat(i, "/").concat(s);
  }).join(" ");
  return n;
}, Zr = globalThis && globalThis.__assign || function() {
  return Zr = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, Zr.apply(this, arguments);
}, Ns = globalThis && globalThis.__read || function(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n)
    return e;
  var r = n.call(e), o, i = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = r.next()).done; )
      i.push(o.value);
  } catch (a) {
    s = { error: a };
  } finally {
    try {
      o && !o.done && (n = r.return) && n.call(r);
    } finally {
      if (s)
        throw s.error;
    }
  }
  return i;
}, bl = globalThis && globalThis.__spreadArray || function(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}, qt = new Ut("Hub"), BI = typeof Symbol < "u" && typeof Symbol.for == "function" ? Symbol.for("amplify_default") : "@@amplify_default";
function $I(e) {
  return e.onHubCapsule !== void 0;
}
var WI = (
  /** @class */
  function() {
    function e(t) {
      this.listeners = [], this.patterns = [], this.protectedChannels = [
        "core",
        "auth",
        "api",
        "analytics",
        "interactions",
        "pubsub",
        "storage",
        "ui",
        "xr"
      ], this.name = t;
    }
    return e.prototype._remove = function(t, n) {
      if (t instanceof RegExp) {
        var r = this.patterns.find(function(i) {
          var s = i.pattern;
          return s.source === t.source;
        });
        if (!r) {
          qt.warn("No listeners for ".concat(t));
          return;
        }
        this.patterns = bl([], Ns(this.patterns.filter(function(i) {
          return i !== r;
        })), !1);
      } else {
        var o = this.listeners[t];
        if (!o) {
          qt.warn("No listeners for ".concat(t));
          return;
        }
        this.listeners[t] = bl([], Ns(o.filter(function(i) {
          var s = i.callback;
          return s !== n;
        })), !1);
      }
    }, e.prototype.remove = function(t, n) {
      this._remove(t, n);
    }, e.prototype.dispatch = function(t, n, r, o) {
      if (r === void 0 && (r = ""), this.protectedChannels.indexOf(t) > -1) {
        var i = o === BI;
        i || qt.warn("WARNING: ".concat(t, " is protected and dispatching on it can have unintended consequences"));
      }
      var s = {
        channel: t,
        payload: Zr({}, n),
        source: r,
        patternInfo: []
      };
      try {
        this._toListeners(s);
      } catch (a) {
        qt.error(a);
      }
    }, e.prototype.listen = function(t, n, r) {
      var o = this;
      r === void 0 && (r = "noname");
      var i;
      if ($I(n))
        qt.warn("WARNING onHubCapsule is Deprecated. Please pass in a callback."), i = n.onHubCapsule.bind(n);
      else {
        if (typeof n != "function")
          throw new Error("No callback supplied to Hub");
        i = n;
      }
      if (t instanceof RegExp)
        this.patterns.push({
          pattern: t,
          callback: i
        });
      else {
        var s = this.listeners[t];
        s || (s = [], this.listeners[t] = s), s.push({
          name: r,
          callback: i
        });
      }
      return function() {
        o._remove(t, i);
      };
    }, e.prototype._toListeners = function(t) {
      var n = t.channel, r = t.payload, o = this.listeners[n];
      if (o && o.forEach(function(s) {
        qt.debug("Dispatching to ".concat(n, " with "), r);
        try {
          s.callback(t);
        } catch (a) {
          qt.error(a);
        }
      }), this.patterns.length > 0) {
        if (!r.message) {
          qt.warn("Cannot perform pattern matching without a message key");
          return;
        }
        var i = r.message;
        this.patterns.forEach(function(s) {
          var a = i.match(s.pattern);
          if (a) {
            var c = Ns(a), u = c.slice(1), l = Zr(Zr({}, t), { patternInfo: u });
            try {
              s.callback(l);
            } catch (f) {
              qt.error(f);
            }
          }
        });
      }
    }, e;
  }()
), Kt = new WI("__default__"), VI = function(e) {
  if (e.isResolved)
    return e;
  var t = !0, n = !1, r = !1, o = e.then(function(i) {
    return r = !0, t = !1, i;
  }, function(i) {
    throw n = !0, t = !1, i;
  });
  return o.isFullfilled = function() {
    return r;
  }, o.isPending = function() {
    return t;
  }, o.isRejected = function() {
    return n;
  }, o;
}, rn = function() {
  var e = typeof window < "u" && typeof window.document < "u", t = typeof process < "u" && process.versions != null && process.versions.node != null;
  return {
    isBrowser: e,
    isNode: t
  };
}, HI = globalThis && globalThis.__extends || function() {
  var e = function(t, n) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, o) {
      r.__proto__ = o;
    } || function(r, o) {
      for (var i in o)
        Object.prototype.hasOwnProperty.call(o, i) && (r[i] = o[i]);
    }, e(t, n);
  };
  return function(t, n) {
    if (typeof n != "function" && n !== null)
      throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
    e(t, n);
    function r() {
      this.constructor = t;
    }
    t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}(), Sl = globalThis && globalThis.__awaiter || function(e, t, n, r) {
  function o(i) {
    return i instanceof n ? i : new n(function(s) {
      s(i);
    });
  }
  return new (n || (n = Promise))(function(i, s) {
    function a(l) {
      try {
        u(r.next(l));
      } catch (f) {
        s(f);
      }
    }
    function c(l) {
      try {
        u(r.throw(l));
      } catch (f) {
        s(f);
      }
    }
    function u(l) {
      l.done ? i(l.value) : o(l.value).then(a, c);
    }
    u((r = r.apply(e, t || [])).next());
  });
}, js = globalThis && globalThis.__generator || function(e, t) {
  var n = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, r, o, i, s;
  return s = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function a(u) {
    return function(l) {
      return c([u, l]);
    };
  }
  function c(u) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; s && (s = 0, u[0] && (n = 0)), n; )
      try {
        if (r = 1, o && (i = u[0] & 2 ? o.return : u[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, u[1])).done)
          return i;
        switch (o = 0, i && (u = [u[0] & 2, i.value]), u[0]) {
          case 0:
          case 1:
            i = u;
            break;
          case 4:
            return n.label++, { value: u[1], done: !1 };
          case 5:
            n.label++, o = u[1], u = [0];
            continue;
          case 7:
            u = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (i = n.trys, !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              n = 0;
              continue;
            }
            if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
              n.label = u[1];
              break;
            }
            if (u[0] === 6 && n.label < i[1]) {
              n.label = i[1], i = u;
              break;
            }
            if (i && n.label < i[2]) {
              n.label = i[2], n.ops.push(u);
              break;
            }
            i[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        u = t.call(e, n);
      } catch (l) {
        u = [6, l], o = 0;
      } finally {
        r = i = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}, qI = globalThis && globalThis.__read || function(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n)
    return e;
  var r = n.call(e), o, i = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = r.next()).done; )
      i.push(o.value);
  } catch (a) {
    s = { error: a };
  } finally {
    try {
      o && !o.done && (n = r.return) && n.call(r);
    } finally {
      if (s)
        throw s.error;
    }
  }
  return i;
}, KI = globalThis && globalThis.__spreadArray || function(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}, _i = new Ut("Util"), _n = (
  /** @class */
  function(e) {
    HI(t, e);
    function t(n) {
      var r = e.call(this, n) || this;
      return r.nonRetryable = !0, r;
    }
    return t;
  }(Error)
), GI = function(e) {
  var t = "nonRetryable";
  return e && e[t];
};
function JI(e, t, n, r) {
  return Sl(this, void 0, void 0, function() {
    var o = this;
    return js(this, function(i) {
      if (typeof e != "function")
        throw Error("functionToRetry must be a function");
      return [2, new Promise(function(s, a) {
        return Sl(o, void 0, void 0, function() {
          var c, u, l, f, d, p, M;
          return js(this, function(y) {
            switch (y.label) {
              case 0:
                c = 0, u = !1, f = function() {
                }, r && r.then(function() {
                  u = !0, clearTimeout(l), f();
                }), p = function() {
                  var m, w, D, N;
                  return js(this, function(E) {
                    switch (E.label) {
                      case 0:
                        c++, _i.debug("".concat(e.name, " attempt #").concat(c, " with this vars: ").concat(JSON.stringify(t))), E.label = 1;
                      case 1:
                        return E.trys.push([1, 3, , 7]), m = {}, w = s, [4, e.apply(void 0, KI([], qI(t), !1))];
                      case 2:
                        return [2, (m.value = w.apply(void 0, [E.sent()]), m)];
                      case 3:
                        return D = E.sent(), d = D, _i.debug("error on ".concat(e.name), D), GI(D) ? (_i.debug("".concat(e.name, " non retryable error"), D), [2, { value: a(D) }]) : (N = n(c, t, D), _i.debug("".concat(e.name, " retrying in ").concat(N, " ms")), N === !1 || u ? [2, { value: a(D) }] : [3, 4]);
                      case 4:
                        return [4, new Promise(function(T) {
                          f = T, l = setTimeout(f, N);
                        })];
                      case 5:
                        E.sent(), E.label = 6;
                      case 6:
                        return [3, 7];
                      case 7:
                        return [
                          2
                          /*return*/
                        ];
                    }
                  });
                }, y.label = 1;
              case 1:
                return u ? [3, 3] : [5, p()];
              case 2:
                return M = y.sent(), typeof M == "object" ? [2, M.value] : [3, 1];
              case 3:
                return a(d), [
                  2
                  /*return*/
                ];
            }
          });
        });
      })];
    });
  });
}
var Yd = 5 * 60 * 1e3;
function Fd(e) {
  e === void 0 && (e = Yd);
  var t = 100, n = 100;
  return function(r) {
    var o = Math.pow(2, r) * t + n * Math.random();
    return o > e ? !1 : o;
  };
}
var XI = function(e, t, n, r) {
  return n === void 0 && (n = Yd), JI(e, t, Fd(n), r);
};
function ZI(e) {
  return e.split("").map(function(t) {
    return t.charCodeAt(0).toString(16).padStart(2, "0");
  }).join("");
}
function eA(e) {
  return e.match(/.{2}/g).map(function(t) {
    return String.fromCharCode(parseInt(t, 16));
  }).join("");
}
var Rn = {};
const Iu = /* @__PURE__ */ To(fI);
var Ho = {}, yt = {};
Object.defineProperty(yt, "__esModule", { value: !0 });
yt.MAX_HASHABLE_LENGTH = yt.INIT = yt.KEY = yt.DIGEST_LENGTH = yt.BLOCK_SIZE = void 0;
yt.BLOCK_SIZE = 64;
yt.DIGEST_LENGTH = 32;
yt.KEY = new Uint32Array([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]);
yt.INIT = [
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
];
yt.MAX_HASHABLE_LENGTH = Math.pow(2, 53) - 1;
var qo = {};
Object.defineProperty(qo, "__esModule", { value: !0 });
qo.RawSha256 = void 0;
var Dt = yt, tA = (
  /** @class */
  function() {
    function e() {
      this.state = Int32Array.from(Dt.INIT), this.temp = new Int32Array(64), this.buffer = new Uint8Array(64), this.bufferLength = 0, this.bytesHashed = 0, this.finished = !1;
    }
    return e.prototype.update = function(t) {
      if (this.finished)
        throw new Error("Attempted to update an already finished hash.");
      var n = 0, r = t.byteLength;
      if (this.bytesHashed += r, this.bytesHashed * 8 > Dt.MAX_HASHABLE_LENGTH)
        throw new Error("Cannot hash more than 2^53 - 1 bits");
      for (; r > 0; )
        this.buffer[this.bufferLength++] = t[n++], r--, this.bufferLength === Dt.BLOCK_SIZE && (this.hashBuffer(), this.bufferLength = 0);
    }, e.prototype.digest = function() {
      if (!this.finished) {
        var t = this.bytesHashed * 8, n = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength), r = this.bufferLength;
        if (n.setUint8(this.bufferLength++, 128), r % Dt.BLOCK_SIZE >= Dt.BLOCK_SIZE - 8) {
          for (var o = this.bufferLength; o < Dt.BLOCK_SIZE; o++)
            n.setUint8(o, 0);
          this.hashBuffer(), this.bufferLength = 0;
        }
        for (var o = this.bufferLength; o < Dt.BLOCK_SIZE - 8; o++)
          n.setUint8(o, 0);
        n.setUint32(Dt.BLOCK_SIZE - 8, Math.floor(t / 4294967296), !0), n.setUint32(Dt.BLOCK_SIZE - 4, t), this.hashBuffer(), this.finished = !0;
      }
      for (var i = new Uint8Array(Dt.DIGEST_LENGTH), o = 0; o < 8; o++)
        i[o * 4] = this.state[o] >>> 24 & 255, i[o * 4 + 1] = this.state[o] >>> 16 & 255, i[o * 4 + 2] = this.state[o] >>> 8 & 255, i[o * 4 + 3] = this.state[o] >>> 0 & 255;
      return i;
    }, e.prototype.hashBuffer = function() {
      for (var t = this, n = t.buffer, r = t.state, o = r[0], i = r[1], s = r[2], a = r[3], c = r[4], u = r[5], l = r[6], f = r[7], d = 0; d < Dt.BLOCK_SIZE; d++) {
        if (d < 16)
          this.temp[d] = (n[d * 4] & 255) << 24 | (n[d * 4 + 1] & 255) << 16 | (n[d * 4 + 2] & 255) << 8 | n[d * 4 + 3] & 255;
        else {
          var p = this.temp[d - 2], M = (p >>> 17 | p << 15) ^ (p >>> 19 | p << 13) ^ p >>> 10;
          p = this.temp[d - 15];
          var y = (p >>> 7 | p << 25) ^ (p >>> 18 | p << 14) ^ p >>> 3;
          this.temp[d] = (M + this.temp[d - 7] | 0) + (y + this.temp[d - 16] | 0);
        }
        var m = (((c >>> 6 | c << 26) ^ (c >>> 11 | c << 21) ^ (c >>> 25 | c << 7)) + (c & u ^ ~c & l) | 0) + (f + (Dt.KEY[d] + this.temp[d] | 0) | 0) | 0, w = ((o >>> 2 | o << 30) ^ (o >>> 13 | o << 19) ^ (o >>> 22 | o << 10)) + (o & i ^ o & s ^ i & s) | 0;
        f = l, l = u, u = c, c = a + m | 0, a = s, s = i, i = o, o = m + w | 0;
      }
      r[0] += o, r[1] += i, r[2] += s, r[3] += a, r[4] += c, r[5] += u, r[6] += l, r[7] += f;
    }, e;
  }()
);
qo.RawSha256 = tA;
var Qd = {}, Ko = {};
const nA = (e) => {
  const t = [];
  for (let n = 0, r = e.length; n < r; n++) {
    const o = e.charCodeAt(n);
    if (o < 128)
      t.push(o);
    else if (o < 2048)
      t.push(o >> 6 | 192, o & 63 | 128);
    else if (n + 1 < e.length && (o & 64512) === 55296 && (e.charCodeAt(n + 1) & 64512) === 56320) {
      const i = 65536 + ((o & 1023) << 10) + (e.charCodeAt(++n) & 1023);
      t.push(i >> 18 | 240, i >> 12 & 63 | 128, i >> 6 & 63 | 128, i & 63 | 128);
    } else
      t.push(o >> 12 | 224, o >> 6 & 63 | 128, o & 63 | 128);
  }
  return Uint8Array.from(t);
}, rA = (e) => {
  let t = "";
  for (let n = 0, r = e.length; n < r; n++) {
    const o = e[n];
    if (o < 128)
      t += String.fromCharCode(o);
    else if (192 <= o && o < 224) {
      const i = e[++n];
      t += String.fromCharCode((o & 31) << 6 | i & 63);
    } else if (240 <= o && o < 365) {
      const s = "%" + [o, e[++n], e[++n], e[++n]].map((a) => a.toString(16)).join("%");
      t += decodeURIComponent(s);
    } else
      t += String.fromCharCode((o & 15) << 12 | (e[++n] & 63) << 6 | e[++n] & 63);
  }
  return t;
};
function iA(e) {
  return new TextEncoder().encode(e);
}
function oA(e) {
  return new TextDecoder("utf-8").decode(e);
}
const sA = (e) => typeof TextEncoder == "function" ? iA(e) : nA(e), aA = (e) => typeof TextDecoder == "function" ? oA(e) : rA(e), uA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  fromUtf8: sA,
  toUtf8: aA
}, Symbol.toStringTag, { value: "Module" })), cA = /* @__PURE__ */ To(uA);
Object.defineProperty(Ko, "__esModule", { value: !0 });
Ko.convertToBuffer = void 0;
var lA = cA, fA = typeof Buffer < "u" && Buffer.from ? function(e) {
  return Buffer.from(e, "utf8");
} : lA.fromUtf8;
function dA(e) {
  return e instanceof Uint8Array ? e : typeof e == "string" ? fA(e) : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(e);
}
Ko.convertToBuffer = dA;
var Go = {};
Object.defineProperty(Go, "__esModule", { value: !0 });
Go.isEmptyData = void 0;
function hA(e) {
  return typeof e == "string" ? e.length === 0 : e.byteLength === 0;
}
Go.isEmptyData = hA;
var Jo = {};
Object.defineProperty(Jo, "__esModule", { value: !0 });
Jo.numToUint8 = void 0;
function gA(e) {
  return new Uint8Array([
    (e & 4278190080) >> 24,
    (e & 16711680) >> 16,
    (e & 65280) >> 8,
    e & 255
  ]);
}
Jo.numToUint8 = gA;
var Xo = {};
Object.defineProperty(Xo, "__esModule", { value: !0 });
Xo.uint32ArrayFrom = void 0;
function pA(e) {
  if (!Array.from) {
    for (var t = new Uint32Array(e.length), n = 0; n < e.length; )
      t[n] = e[n];
    return t;
  }
  return Uint32Array.from(e);
}
Xo.uint32ArrayFrom = pA;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.uint32ArrayFrom = e.numToUint8 = e.isEmptyData = e.convertToBuffer = void 0;
  var t = Ko;
  Object.defineProperty(e, "convertToBuffer", { enumerable: !0, get: function() {
    return t.convertToBuffer;
  } });
  var n = Go;
  Object.defineProperty(e, "isEmptyData", { enumerable: !0, get: function() {
    return n.isEmptyData;
  } });
  var r = Jo;
  Object.defineProperty(e, "numToUint8", { enumerable: !0, get: function() {
    return r.numToUint8;
  } });
  var o = Xo;
  Object.defineProperty(e, "uint32ArrayFrom", { enumerable: !0, get: function() {
    return o.uint32ArrayFrom;
  } });
})(Qd);
Object.defineProperty(Ho, "__esModule", { value: !0 });
Ho.Sha256 = void 0;
var xl = Iu, ho = yt, ma = qo, va = Qd, MA = (
  /** @class */
  function() {
    function e(t) {
      if (this.hash = new ma.RawSha256(), t) {
        this.outer = new ma.RawSha256();
        var n = yA(t), r = new Uint8Array(ho.BLOCK_SIZE);
        r.set(n);
        for (var o = 0; o < ho.BLOCK_SIZE; o++)
          n[o] ^= 54, r[o] ^= 92;
        this.hash.update(n), this.outer.update(r);
        for (var o = 0; o < n.byteLength; o++)
          n[o] = 0;
      }
    }
    return e.prototype.update = function(t) {
      if (!((0, va.isEmptyData)(t) || this.error))
        try {
          this.hash.update((0, va.convertToBuffer)(t));
        } catch (n) {
          this.error = n;
        }
    }, e.prototype.digestSync = function() {
      if (this.error)
        throw this.error;
      return this.outer ? (this.outer.finished || this.outer.update(this.hash.digest()), this.outer.digest()) : this.hash.digest();
    }, e.prototype.digest = function() {
      return (0, xl.__awaiter)(this, void 0, void 0, function() {
        return (0, xl.__generator)(this, function(t) {
          return [2, this.digestSync()];
        });
      });
    }, e;
  }()
);
Ho.Sha256 = MA;
function yA(e) {
  var t = (0, va.convertToBuffer)(e);
  if (t.byteLength > ho.BLOCK_SIZE) {
    var n = new ma.RawSha256();
    n.update(t), t = n.digest();
  }
  var r = new Uint8Array(ho.BLOCK_SIZE);
  return r.set(t), r;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = Iu;
  (0, t.__exportStar)(Ho, e);
})(Rn);
var go = globalThis && globalThis.__assign || function() {
  return go = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, go.apply(this, arguments);
}, mA = new Ut("Parser"), Bd = function(e) {
  var t = {};
  if (e.aws_mobile_analytics_app_id) {
    var n = {
      AWSPinpoint: {
        appId: e.aws_mobile_analytics_app_id,
        region: e.aws_mobile_analytics_app_region
      }
    };
    t.Analytics = n;
  }
  (e.aws_cognito_identity_pool_id || e.aws_user_pools_id) && (t.Auth = {
    userPoolId: e.aws_user_pools_id,
    userPoolWebClientId: e.aws_user_pools_web_client_id,
    region: e.aws_cognito_region,
    identityPoolId: e.aws_cognito_identity_pool_id,
    identityPoolRegion: e.aws_cognito_region,
    mandatorySignIn: e.aws_mandatory_sign_in === "enable",
    signUpVerificationMethod: e.aws_cognito_sign_up_verification_method || "code"
  });
  var r;
  return e.aws_user_files_s3_bucket ? r = {
    AWSS3: {
      bucket: e.aws_user_files_s3_bucket,
      region: e.aws_user_files_s3_bucket_region,
      dangerouslyConnectToHttpEndpointForTesting: e.aws_user_files_s3_dangerously_connect_to_http_endpoint_for_testing
    }
  } : r = e ? e.Storage || e : {}, e.Logging && (t.Logging = go(go({}, e.Logging), { region: e.aws_project_region })), e.geo && (t.Geo = Object.assign({}, e.geo), e.geo.amazon_location_service && (t.Geo = {
    AmazonLocationService: e.geo.amazon_location_service
  })), t.Analytics = Object.assign({}, t.Analytics, e.Analytics), t.Auth = Object.assign({}, t.Auth, e.Auth), t.Storage = Object.assign({}, r), t.Logging = Object.assign({}, t.Logging, e.Logging), mA.debug("parse config", e, "to amplifyconfig", t), t;
}, vA = globalThis && globalThis.__awaiter || function(e, t, n, r) {
  function o(i) {
    return i instanceof n ? i : new n(function(s) {
      s(i);
    });
  }
  return new (n || (n = Promise))(function(i, s) {
    function a(l) {
      try {
        u(r.next(l));
      } catch (f) {
        s(f);
      }
    }
    function c(l) {
      try {
        u(r.throw(l));
      } catch (f) {
        s(f);
      }
    }
    function u(l) {
      l.done ? i(l.value) : o(l.value).then(a, c);
    }
    u((r = r.apply(e, t || [])).next());
  });
}, wA = globalThis && globalThis.__generator || function(e, t) {
  var n = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, r, o, i, s;
  return s = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function a(u) {
    return function(l) {
      return c([u, l]);
    };
  }
  function c(u) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; s && (s = 0, u[0] && (n = 0)), n; )
      try {
        if (r = 1, o && (i = u[0] & 2 ? o.return : u[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, u[1])).done)
          return i;
        switch (o = 0, i && (u = [u[0] & 2, i.value]), u[0]) {
          case 0:
          case 1:
            i = u;
            break;
          case 4:
            return n.label++, { value: u[1], done: !1 };
          case 5:
            n.label++, o = u[1], u = [0];
            continue;
          case 7:
            u = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (i = n.trys, !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              n = 0;
              continue;
            }
            if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
              n.label = u[1];
              break;
            }
            if (u[0] === 6 && n.label < i[1]) {
              n.label = i[1], i = u;
              break;
            }
            if (i && n.label < i[2]) {
              n.label = i[2], n.ops.push(u);
              break;
            }
            i[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        u = t.call(e, n);
      } catch (l) {
        u = [6, l], o = 0;
      } finally {
        r = i = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}, fn = new Ut("CognitoCredentials"), DA = new Promise(function(e, t) {
  if (!rn().isBrowser)
    return fn.debug("not in the browser, directly resolved"), e();
  var n = window.gapi && window.gapi.auth2 ? window.gapi.auth2 : null;
  if (n)
    return fn.debug("google api already loaded"), e();
  setTimeout(function() {
    return e();
  }, 2e3);
}), IA = (
  /** @class */
  function() {
    function e() {
      this.initialized = !1, this.refreshGoogleToken = this.refreshGoogleToken.bind(this), this._refreshGoogleTokenImpl = this._refreshGoogleTokenImpl.bind(this);
    }
    return e.prototype.refreshGoogleToken = function() {
      return vA(this, void 0, void 0, function() {
        return wA(this, function(t) {
          switch (t.label) {
            case 0:
              return this.initialized ? [3, 2] : (fn.debug("need to wait for the Google SDK loaded"), [4, DA]);
            case 1:
              t.sent(), this.initialized = !0, fn.debug("finish waiting"), t.label = 2;
            case 2:
              return [2, this._refreshGoogleTokenImpl()];
          }
        });
      });
    }, e.prototype._refreshGoogleTokenImpl = function() {
      var t = null;
      return rn().isBrowser && (t = window.gapi && window.gapi.auth2 ? window.gapi.auth2 : null), t ? new Promise(function(n, r) {
        t.getAuthInstance().then(function(o) {
          o || (fn.debug("google Auth undefined"), r(new _n("google Auth undefined")));
          var i = o.currentUser.get();
          i.isSignedIn() ? (fn.debug("refreshing the google access token"), i.reloadAuthResponse().then(function(s) {
            var a = s.id_token, c = s.expires_at;
            n({ token: a, expires_at: c });
          }).catch(function(s) {
            s && s.error === "network_error" ? r("Network error reloading google auth response") : r(new _n("Failed to reload google auth response"));
          })) : r(new _n("User is not signed in with Google"));
        }).catch(function(o) {
          fn.debug("Failed to refresh google token", o), r(new _n("Failed to refresh google token"));
        });
      }) : (fn.debug("no gapi auth2 available"), Promise.reject("no gapi auth2 available"));
    }, e;
  }()
), AA = globalThis && globalThis.__awaiter || function(e, t, n, r) {
  function o(i) {
    return i instanceof n ? i : new n(function(s) {
      s(i);
    });
  }
  return new (n || (n = Promise))(function(i, s) {
    function a(l) {
      try {
        u(r.next(l));
      } catch (f) {
        s(f);
      }
    }
    function c(l) {
      try {
        u(r.throw(l));
      } catch (f) {
        s(f);
      }
    }
    function u(l) {
      l.done ? i(l.value) : o(l.value).then(a, c);
    }
    u((r = r.apply(e, t || [])).next());
  });
}, EA = globalThis && globalThis.__generator || function(e, t) {
  var n = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, r, o, i, s;
  return s = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function a(u) {
    return function(l) {
      return c([u, l]);
    };
  }
  function c(u) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; s && (s = 0, u[0] && (n = 0)), n; )
      try {
        if (r = 1, o && (i = u[0] & 2 ? o.return : u[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, u[1])).done)
          return i;
        switch (o = 0, i && (u = [u[0] & 2, i.value]), u[0]) {
          case 0:
          case 1:
            i = u;
            break;
          case 4:
            return n.label++, { value: u[1], done: !1 };
          case 5:
            n.label++, o = u[1], u = [0];
            continue;
          case 7:
            u = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (i = n.trys, !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              n = 0;
              continue;
            }
            if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
              n.label = u[1];
              break;
            }
            if (u[0] === 6 && n.label < i[1]) {
              n.label = i[1], i = u;
              break;
            }
            if (i && n.label < i[2]) {
              n.label = i[2], n.ops.push(u);
              break;
            }
            i[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        u = t.call(e, n);
      } catch (l) {
        u = [6, l], o = 0;
      } finally {
        r = i = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}, Sn = new Ut("CognitoCredentials"), TA = new Promise(function(e, t) {
  if (!rn().isBrowser)
    return Sn.debug("not in the browser, directly resolved"), e();
  var n = window.FB;
  if (n)
    return Sn.debug("FB SDK already loaded"), e();
  setTimeout(function() {
    return e();
  }, 2e3);
}), NA = (
  /** @class */
  function() {
    function e() {
      this.initialized = !1, this.refreshFacebookToken = this.refreshFacebookToken.bind(this), this._refreshFacebookTokenImpl = this._refreshFacebookTokenImpl.bind(this);
    }
    return e.prototype.refreshFacebookToken = function() {
      return AA(this, void 0, void 0, function() {
        return EA(this, function(t) {
          switch (t.label) {
            case 0:
              return this.initialized ? [3, 2] : (Sn.debug("need to wait for the Facebook SDK loaded"), [4, TA]);
            case 1:
              t.sent(), this.initialized = !0, Sn.debug("finish waiting"), t.label = 2;
            case 2:
              return [2, this._refreshFacebookTokenImpl()];
          }
        });
      });
    }, e.prototype._refreshFacebookTokenImpl = function() {
      var t = null;
      if (rn().isBrowser && (t = window.FB), !t) {
        var n = "no fb sdk available";
        return Sn.debug(n), Promise.reject(new _n(n));
      }
      return new Promise(function(r, o) {
        t.getLoginStatus(function(i) {
          if (!i || !i.authResponse) {
            var s = "no response from facebook when refreshing the jwt token";
            Sn.debug(s), o(new _n(s));
          } else {
            var a = i.authResponse, c = a.accessToken, u = a.expiresIn, l = /* @__PURE__ */ new Date(), f = u * 1e3 + l.getTime();
            if (!c) {
              var s = "the jwtToken is undefined";
              Sn.debug(s), o(new _n(s));
            }
            r({
              token: c,
              expires_at: f
            });
          }
        }, { scope: "public_profile,email" });
      });
    }, e;
  }()
), jA = new IA(), bA = new NA(), An = {}, SA = (
  /** @class */
  function() {
    function e() {
    }
    return e.setItem = function(t, n) {
      return An[t] = n, An[t];
    }, e.getItem = function(t) {
      return Object.prototype.hasOwnProperty.call(An, t) ? An[t] : void 0;
    }, e.removeItem = function(t) {
      return delete An[t];
    }, e.clear = function() {
      return An = {}, An;
    }, e;
  }()
), $d = (
  /** @class */
  function() {
    function e() {
      try {
        this.storageWindow = window.localStorage, this.storageWindow.setItem("aws.amplify.test-ls", 1), this.storageWindow.removeItem("aws.amplify.test-ls");
      } catch {
        this.storageWindow = SA;
      }
    }
    return e.prototype.getStorage = function() {
      return this.storageWindow;
    }, e;
  }()
), Wd = {
  id: "aws",
  outputs: {
    dnsSuffix: "amazonaws.com"
  },
  regionRegex: "^(us|eu|ap|sa|ca|me|af)\\-\\w+\\-\\d+$",
  regions: ["aws-global"]
}, xA = {
  partitions: [
    Wd,
    {
      id: "aws-cn",
      outputs: {
        dnsSuffix: "amazonaws.com.cn"
      },
      regionRegex: "^cn\\-\\w+\\-\\d+$",
      regions: ["aws-cn-global"]
    }
  ]
}, CA = globalThis && globalThis.__values || function(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
  if (n)
    return n.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
      }
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, OA = function(e) {
  var t, n, r = xA.partitions;
  try {
    for (var o = CA(r), i = o.next(); !i.done; i = o.next()) {
      var s = i.value, a = s.regions, c = s.outputs, u = s.regionRegex, l = new RegExp(u);
      if (a.includes(e) || l.test(e))
        return c.dnsSuffix;
    }
  } catch (f) {
    t = { error: f };
  } finally {
    try {
      i && !i.done && (n = o.return) && n.call(o);
    } finally {
      if (t)
        throw t.error;
    }
  }
  return Wd.outputs.dnsSuffix;
};
function LA(e, t) {
  return t = t || {}, new Promise(function(n, r) {
    var o = new XMLHttpRequest(), i = [], s = [], a = {}, c = function() {
      return { ok: (o.status / 100 | 0) == 2, statusText: o.statusText, status: o.status, url: o.responseURL, text: function() {
        return Promise.resolve(o.responseText);
      }, json: function() {
        return Promise.resolve(o.responseText).then(JSON.parse);
      }, blob: function() {
        return Promise.resolve(new Blob([o.response]));
      }, clone: c, headers: { keys: function() {
        return i;
      }, entries: function() {
        return s;
      }, get: function(l) {
        return a[l.toLowerCase()];
      }, has: function(l) {
        return l.toLowerCase() in a;
      } } };
    };
    for (var u in o.open(t.method || "get", e, !0), o.onload = function() {
      o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(l, f, d) {
        i.push(f = f.toLowerCase()), s.push([f, d]), a[f] = a[f] ? a[f] + "," + d : d;
      }), n(c());
    }, o.onerror = r, o.withCredentials = t.credentials == "include", t.headers)
      o.setRequestHeader(u, t.headers[u]);
    o.send(t.body || null);
  });
}
const _A = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: LA
}, Symbol.toStringTag, { value: "Module" })), Cl = /* @__PURE__ */ To(_A);
self.fetch || (self.fetch = Cl.default || Cl);
var bs = function(e) {
  var t;
  return function() {
    return t || (t = e()), t;
  };
}, po = globalThis && globalThis.__assign || function() {
  return po = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, po.apply(this, arguments);
}, kA = globalThis && globalThis.__awaiter || function(e, t, n, r) {
  function o(i) {
    return i instanceof n ? i : new n(function(s) {
      s(i);
    });
  }
  return new (n || (n = Promise))(function(i, s) {
    function a(l) {
      try {
        u(r.next(l));
      } catch (f) {
        s(f);
      }
    }
    function c(l) {
      try {
        u(r.throw(l));
      } catch (f) {
        s(f);
      }
    }
    function u(l) {
      l.done ? i(l.value) : o(l.value).then(a, c);
    }
    u((r = r.apply(e, t || [])).next());
  });
}, zA = globalThis && globalThis.__generator || function(e, t) {
  var n = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, r, o, i, s;
  return s = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function a(u) {
    return function(l) {
      return c([u, l]);
    };
  }
  function c(u) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; s && (s = 0, u[0] && (n = 0)), n; )
      try {
        if (r = 1, o && (i = u[0] & 2 ? o.return : u[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, u[1])).done)
          return i;
        switch (o = 0, i && (u = [u[0] & 2, i.value]), u[0]) {
          case 0:
          case 1:
            i = u;
            break;
          case 4:
            return n.label++, { value: u[1], done: !1 };
          case 5:
            n.label++, o = u[1], u = [0];
            continue;
          case 7:
            u = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (i = n.trys, !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              n = 0;
              continue;
            }
            if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
              n.label = u[1];
              break;
            }
            if (u[0] === 6 && n.label < i[1]) {
              n.label = i[1], i = u;
              break;
            }
            if (i && n.label < i[2]) {
              n.label = i[2], n.ops.push(u);
              break;
            }
            i[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        u = t.call(e, n);
      } catch (l) {
        u = [6, l], o = 0;
      } finally {
        r = i = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}, UA = function(e) {
  return !["HEAD", "GET", "DELETE"].includes(e.toUpperCase());
}, PA = function(e, t) {
  var n = e.url, r = e.method, o = e.headers, i = e.body, s = t.abortSignal;
  return kA(void 0, void 0, void 0, function() {
    var a, c, u, l, f, d, p;
    return zA(this, function(M) {
      switch (M.label) {
        case 0:
          return M.trys.push([0, 2, , 3]), [4, fetch(n, {
            method: r,
            headers: o,
            body: UA(r) ? i : void 0,
            signal: s
          })];
        case 1:
          return a = M.sent(), [3, 3];
        case 2:
          throw c = M.sent(), c instanceof TypeError ? new Error("Network error") : c;
        case 3:
          return u = {}, (d = a.headers) === null || d === void 0 || d.forEach(function(y, m) {
            u[m.toLowerCase()] = y;
          }), l = {
            statusCode: a.status,
            headers: u,
            body: null
          }, f = Object.assign((p = a.body) !== null && p !== void 0 ? p : {}, {
            text: bs(function() {
              return a.text();
            }),
            blob: bs(function() {
              return a.blob();
            }),
            json: bs(function() {
              return a.json();
            })
          }), [2, po(po({}, l), { body: f })];
      }
    });
  });
}, Mo = globalThis && globalThis.__assign || function() {
  return Mo = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, Mo.apply(this, arguments);
}, RA = globalThis && globalThis.__awaiter || function(e, t, n, r) {
  function o(i) {
    return i instanceof n ? i : new n(function(s) {
      s(i);
    });
  }
  return new (n || (n = Promise))(function(i, s) {
    function a(l) {
      try {
        u(r.next(l));
      } catch (f) {
        s(f);
      }
    }
    function c(l) {
      try {
        u(r.throw(l));
      } catch (f) {
        s(f);
      }
    }
    function u(l) {
      l.done ? i(l.value) : o(l.value).then(a, c);
    }
    u((r = r.apply(e, t || [])).next());
  });
}, YA = globalThis && globalThis.__generator || function(e, t) {
  var n = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, r, o, i, s;
  return s = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function a(u) {
    return function(l) {
      return c([u, l]);
    };
  }
  function c(u) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; s && (s = 0, u[0] && (n = 0)), n; )
      try {
        if (r = 1, o && (i = u[0] & 2 ? o.return : u[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, u[1])).done)
          return i;
        switch (o = 0, i && (u = [u[0] & 2, i.value]), u[0]) {
          case 0:
          case 1:
            i = u;
            break;
          case 4:
            return n.label++, { value: u[1], done: !1 };
          case 5:
            n.label++, o = u[1], u = [0];
            continue;
          case 7:
            u = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (i = n.trys, !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              n = 0;
              continue;
            }
            if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
              n.label = u[1];
              break;
            }
            if (u[0] === 6 && n.label < i[1]) {
              n.label = i[1], i = u;
              break;
            }
            if (i && n.label < i[2]) {
              n.label = i[2], n.ops.push(u);
              break;
            }
            i[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        u = t.call(e, n);
      } catch (l) {
        u = [6, l], o = 0;
      } finally {
        r = i = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}, FA = 3, QA = function(e) {
  var t = e.maxAttempts, n = t === void 0 ? FA : t, r = e.retryDecider, o = e.computeDelay, i = e.abortSignal;
  if (n < 1)
    throw new Error("maxAttempts must be greater than 0");
  return function(s, a) {
    return function(u) {
      var l;
      return RA(this, void 0, void 0, function() {
        var f, d, p, M, y, m;
        return YA(this, function(w) {
          switch (w.label) {
            case 0:
              d = (l = a.attemptsCount) !== null && l !== void 0 ? l : 0, M = function() {
                if (p)
                  return Ol(p, d), p;
                throw Ol(f, d), f;
              }, w.label = 1;
            case 1:
              if (!(!(i != null && i.aborted) && d < n))
                return [3, 11];
              w.label = 2;
            case 2:
              return w.trys.push([2, 4, , 5]), [4, s(u)];
            case 3:
              return p = w.sent(), f = void 0, [3, 5];
            case 4:
              return y = w.sent(), f = y, p = void 0, [3, 5];
            case 5:
              return d = a.attemptsCount > d ? a.attemptsCount : d + 1, a.attemptsCount = d, [4, r(p, f)];
            case 6:
              return w.sent() ? !(i != null && i.aborted) && d < n ? (m = o(d), [4, BA(m, i)]) : [3, 8] : [3, 9];
            case 7:
              w.sent(), w.label = 8;
            case 8:
              return [3, 1];
            case 9:
              return [2, M()];
            case 10:
              return [3, 1];
            case 11:
              if (i != null && i.aborted)
                throw new Error("Request aborted.");
              return [2, M()];
          }
        });
      });
    };
  };
}, BA = function(e, t) {
  if (t != null && t.aborted)
    return Promise.resolve();
  var n, r, o = new Promise(function(i) {
    r = i, n = setTimeout(i, e);
  });
  return t == null || t.addEventListener("abort", function i(s) {
    clearTimeout(n), t == null || t.removeEventListener("abort", i), r();
  }), o;
}, Ol = function(e, t) {
  var n;
  Object.prototype.toString.call(e) === "[object Object]" && (e.$metadata = Mo(Mo({}, (n = e.$metadata) !== null && n !== void 0 ? n : {}), { attempts: t }));
}, Ll = 5 * 60 * 1e3, $A = function(e) {
  var t = Fd(Ll), n = t(e);
  return n === !1 ? Ll : n;
}, WA = [
  "AuthFailure",
  "InvalidSignatureException",
  "RequestExpired",
  "RequestInTheFuture",
  "RequestTimeTooSkewed",
  "SignatureDoesNotMatch",
  "BadRequestException"
  // API Gateway
], VA = function(e) {
  return WA.includes(e);
}, HA = globalThis && globalThis.__awaiter || function(e, t, n, r) {
  function o(i) {
    return i instanceof n ? i : new n(function(s) {
      s(i);
    });
  }
  return new (n || (n = Promise))(function(i, s) {
    function a(l) {
      try {
        u(r.next(l));
      } catch (f) {
        s(f);
      }
    }
    function c(l) {
      try {
        u(r.throw(l));
      } catch (f) {
        s(f);
      }
    }
    function u(l) {
      l.done ? i(l.value) : o(l.value).then(a, c);
    }
    u((r = r.apply(e, t || [])).next());
  });
}, qA = globalThis && globalThis.__generator || function(e, t) {
  var n = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, r, o, i, s;
  return s = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function a(u) {
    return function(l) {
      return c([u, l]);
    };
  }
  function c(u) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; s && (s = 0, u[0] && (n = 0)), n; )
      try {
        if (r = 1, o && (i = u[0] & 2 ? o.return : u[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, u[1])).done)
          return i;
        switch (o = 0, i && (u = [u[0] & 2, i.value]), u[0]) {
          case 0:
          case 1:
            i = u;
            break;
          case 4:
            return n.label++, { value: u[1], done: !1 };
          case 5:
            n.label++, o = u[1], u = [0];
            continue;
          case 7:
            u = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (i = n.trys, !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              n = 0;
              continue;
            }
            if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
              n.label = u[1];
              break;
            }
            if (u[0] === 6 && n.label < i[1]) {
              n.label = i[1], i = u;
              break;
            }
            if (i && n.label < i[2]) {
              n.label = i[2], n.ops.push(u);
              break;
            }
            i[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        u = t.call(e, n);
      } catch (l) {
        u = [6, l], o = 0;
      } finally {
        r = i = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}, KA = function(e) {
  return function(t, n) {
    return HA(void 0, void 0, void 0, function() {
      var r, o, i, s;
      return qA(this, function(a) {
        switch (a.label) {
          case 0:
            return n == null ? [3, 1] : (o = n, [3, 3]);
          case 1:
            return [4, e(t)];
          case 2:
            o = a.sent(), a.label = 3;
          case 3:
            return r = ((s = o) !== null && s !== void 0 ? s : {}).name, i = t == null ? void 0 : t.statusCode, [2, ZA(n) || XA(i, r) || VA(r) || eE(i, r)];
        }
      });
    });
  };
}, GA = [
  "BandwidthLimitExceeded",
  "EC2ThrottledException",
  "LimitExceededException",
  "PriorRequestNotComplete",
  "ProvisionedThroughputExceededException",
  "RequestLimitExceeded",
  "RequestThrottled",
  "RequestThrottledException",
  "SlowDown",
  "ThrottledException",
  "Throttling",
  "ThrottlingException",
  "TooManyRequestsException"
], JA = [
  "TimeoutError",
  "RequestTimeout",
  "RequestTimeoutException"
], XA = function(e, t) {
  return e === 429 || GA.includes(t);
}, ZA = function(e) {
  return (e == null ? void 0 : e.name) === "Network error";
}, eE = function(e, t) {
  return [500, 502, 503, 504].includes(e) || JA.includes(t);
}, tE = globalThis && globalThis.__awaiter || function(e, t, n, r) {
  function o(i) {
    return i instanceof n ? i : new n(function(s) {
      s(i);
    });
  }
  return new (n || (n = Promise))(function(i, s) {
    function a(l) {
      try {
        u(r.next(l));
      } catch (f) {
        s(f);
      }
    }
    function c(l) {
      try {
        u(r.throw(l));
      } catch (f) {
        s(f);
      }
    }
    function u(l) {
      l.done ? i(l.value) : o(l.value).then(a, c);
    }
    u((r = r.apply(e, t || [])).next());
  });
}, nE = globalThis && globalThis.__generator || function(e, t) {
  var n = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, r, o, i, s;
  return s = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function a(u) {
    return function(l) {
      return c([u, l]);
    };
  }
  function c(u) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; s && (s = 0, u[0] && (n = 0)), n; )
      try {
        if (r = 1, o && (i = u[0] & 2 ? o.return : u[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, u[1])).done)
          return i;
        switch (o = 0, i && (u = [u[0] & 2, i.value]), u[0]) {
          case 0:
          case 1:
            i = u;
            break;
          case 4:
            return n.label++, { value: u[1], done: !1 };
          case 5:
            n.label++, o = u[1], u = [0];
            continue;
          case 7:
            u = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (i = n.trys, !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              n = 0;
              continue;
            }
            if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
              n.label = u[1];
              break;
            }
            if (u[0] === 6 && n.label < i[1]) {
              n.label = i[1], i = u;
              break;
            }
            if (i && n.label < i[2]) {
              n.label = i[2], n.ops.push(u);
              break;
            }
            i[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        u = t.call(e, n);
      } catch (l) {
        u = [6, l], o = 0;
      } finally {
        r = i = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}, rE = function(e) {
  var t = e.userAgentHeader, n = t === void 0 ? "x-amz-user-agent" : t, r = e.userAgentValue, o = r === void 0 ? "" : r;
  return function(i) {
    return function(a) {
      return tE(this, void 0, void 0, function() {
        var c, u, l;
        return nE(this, function(f) {
          switch (f.label) {
            case 0:
              return o.trim().length !== 0 ? [3, 2] : [4, i(a)];
            case 1:
              return c = f.sent(), [2, c];
            case 2:
              return u = n.toLowerCase(), a.headers[u] = a.headers[u] ? "".concat(a.headers[u], " ").concat(o) : o, [4, i(a)];
            case 3:
              return l = f.sent(), [2, l];
          }
        });
      });
    };
  };
}, Vd = function(e, t) {
  return function(n, r) {
    for (var o = {}, i = function(u) {
      return e(u, r);
    }, s = t.length - 1; s >= 0; s--) {
      var a = t[s], c = a(r);
      i = c(i, o);
    }
    return i(n);
  };
}, iE = Vd(PA, [rE, QA]), yo = globalThis && globalThis.__assign || function() {
  return yo = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, yo.apply(this, arguments);
}, Zo = function(e) {
  var t, n, r = e.headers, o = e.statusCode;
  return yo(yo({}, oE(e) ? e.$metadata : {}), { httpStatusCode: o, requestId: (n = (t = r["x-amzn-requestid"]) !== null && t !== void 0 ? t : r["x-amzn-request-id"]) !== null && n !== void 0 ? n : r["x-amz-request-id"], extendedRequestId: r["x-amz-id-2"], cfId: r["x-amz-cf-id"] });
}, oE = function(e) {
  return typeof (e == null ? void 0 : e.$metadata) == "object";
}, Hd = globalThis && globalThis.__awaiter || function(e, t, n, r) {
  function o(i) {
    return i instanceof n ? i : new n(function(s) {
      s(i);
    });
  }
  return new (n || (n = Promise))(function(i, s) {
    function a(l) {
      try {
        u(r.next(l));
      } catch (f) {
        s(f);
      }
    }
    function c(l) {
      try {
        u(r.throw(l));
      } catch (f) {
        s(f);
      }
    }
    function u(l) {
      l.done ? i(l.value) : o(l.value).then(a, c);
    }
    u((r = r.apply(e, t || [])).next());
  });
}, qd = globalThis && globalThis.__generator || function(e, t) {
  var n = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, r, o, i, s;
  return s = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function a(u) {
    return function(l) {
      return c([u, l]);
    };
  }
  function c(u) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; s && (s = 0, u[0] && (n = 0)), n; )
      try {
        if (r = 1, o && (i = u[0] & 2 ? o.return : u[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, u[1])).done)
          return i;
        switch (o = 0, i && (u = [u[0] & 2, i.value]), u[0]) {
          case 0:
          case 1:
            i = u;
            break;
          case 4:
            return n.label++, { value: u[1], done: !1 };
          case 5:
            n.label++, o = u[1], u = [0];
            continue;
          case 7:
            u = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (i = n.trys, !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              n = 0;
              continue;
            }
            if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
              n.label = u[1];
              break;
            }
            if (u[0] === 6 && n.label < i[1]) {
              n.label = i[1], i = u;
              break;
            }
            if (i && n.label < i[2]) {
              n.label = i[2], n.ops.push(u);
              break;
            }
            i[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        u = t.call(e, n);
      } catch (l) {
        u = [6, l], o = 0;
      } finally {
        r = i = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}, sE = globalThis && globalThis.__read || function(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n)
    return e;
  var r = n.call(e), o, i = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = r.next()).done; )
      i.push(o.value);
  } catch (a) {
    s = { error: a };
  } finally {
    try {
      o && !o.done && (n = r.return) && n.call(r);
    } finally {
      if (s)
        throw s.error;
    }
  }
  return i;
}, Au = function(e) {
  return Hd(void 0, void 0, void 0, function() {
    var t, n, r, o, i, s, a, c, u, l;
    return qd(this, function(f) {
      switch (f.label) {
        case 0:
          return !e || e.statusCode < 300 ? [
            2
            /*return*/
          ] : [4, Eu(e)];
        case 1:
          return t = f.sent(), n = function(d) {
            var p = sE(d.toString().split(/[\,\:]+/), 1), M = p[0];
            return M.includes("#") ? M.split("#")[1] : M;
          }, r = n((c = (a = (s = e.headers["x-amzn-errortype"]) !== null && s !== void 0 ? s : t.code) !== null && a !== void 0 ? a : t.__type) !== null && c !== void 0 ? c : "UnknownError"), o = (l = (u = t.message) !== null && u !== void 0 ? u : t.Message) !== null && l !== void 0 ? l : "Unknown error", i = new Error(o), [2, Object.assign(i, {
            name: r,
            $metadata: Zo(e)
          })];
      }
    });
  });
}, Eu = function(e) {
  return Hd(void 0, void 0, void 0, function() {
    var t;
    return qd(this, function(n) {
      switch (n.label) {
        case 0:
          if (!e.body)
            throw new Error("Missing response payload");
          return [4, e.body.json()];
        case 1:
          return t = n.sent(), [2, Object.assign(t, {
            $metadata: Zo(e)
          })];
      }
    });
  });
}, aE = globalThis && globalThis.__awaiter || function(e, t, n, r) {
  function o(i) {
    return i instanceof n ? i : new n(function(s) {
      s(i);
    });
  }
  return new (n || (n = Promise))(function(i, s) {
    function a(l) {
      try {
        u(r.next(l));
      } catch (f) {
        s(f);
      }
    }
    function c(l) {
      try {
        u(r.throw(l));
      } catch (f) {
        s(f);
      }
    }
    function u(l) {
      l.done ? i(l.value) : o(l.value).then(a, c);
    }
    u((r = r.apply(e, t || [])).next());
  });
}, uE = globalThis && globalThis.__generator || function(e, t) {
  var n = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, r, o, i, s;
  return s = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function a(u) {
    return function(l) {
      return c([u, l]);
    };
  }
  function c(u) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; s && (s = 0, u[0] && (n = 0)), n; )
      try {
        if (r = 1, o && (i = u[0] & 2 ? o.return : u[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, u[1])).done)
          return i;
        switch (o = 0, i && (u = [u[0] & 2, i.value]), u[0]) {
          case 0:
          case 1:
            i = u;
            break;
          case 4:
            return n.label++, { value: u[1], done: !1 };
          case 5:
            n.label++, o = u[1], u = [0];
            continue;
          case 7:
            u = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (i = n.trys, !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              n = 0;
              continue;
            }
            if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
              n.label = u[1];
              break;
            }
            if (u[0] === 6 && n.label < i[1]) {
              n.label = i[1], i = u;
              break;
            }
            if (i && n.label < i[2]) {
              n.label = i[2], n.ops.push(u);
              break;
            }
            i[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        u = t.call(e, n);
      } catch (l) {
        u = [6, l], o = 0;
      } finally {
        r = i = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}, cE = "cognito-identity", lE = function(e) {
  var t = e.region;
  return {
    url: new URL("https://cognito-identity.".concat(t, ".").concat(OA(t)))
  };
}, fE = function() {
  return function(e, t) {
    return function(r) {
      return aE(this, void 0, void 0, function() {
        return uE(this, function(o) {
          return r.headers["cache-control"] = "no-store", [2, e(r)];
        });
      });
    };
  };
}, Kd = Vd(iE, [fE]), Tu = {
  service: cE,
  endpointResolver: lE,
  retryDecider: KA(Au),
  computeDelay: $A,
  userAgentValue: Du()
};
Pd(function() {
  Tu.userAgentValue = Du();
});
var Gd = function(e) {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityService.".concat(e)
  };
}, Jd = function(e, t, n) {
  var r = e.url;
  return {
    headers: t,
    url: r,
    body: n,
    method: "POST"
  };
}, ei = globalThis && globalThis.__assign || function() {
  return ei = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, ei.apply(this, arguments);
}, dE = globalThis && globalThis.__awaiter || function(e, t, n, r) {
  function o(i) {
    return i instanceof n ? i : new n(function(s) {
      s(i);
    });
  }
  return new (n || (n = Promise))(function(i, s) {
    function a(l) {
      try {
        u(r.next(l));
      } catch (f) {
        s(f);
      }
    }
    function c(l) {
      try {
        u(r.throw(l));
      } catch (f) {
        s(f);
      }
    }
    function u(l) {
      l.done ? i(l.value) : o(l.value).then(a, c);
    }
    u((r = r.apply(e, t || [])).next());
  });
}, hE = globalThis && globalThis.__generator || function(e, t) {
  var n = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, r, o, i, s;
  return s = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function a(u) {
    return function(l) {
      return c([u, l]);
    };
  }
  function c(u) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; s && (s = 0, u[0] && (n = 0)), n; )
      try {
        if (r = 1, o && (i = u[0] & 2 ? o.return : u[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, u[1])).done)
          return i;
        switch (o = 0, i && (u = [u[0] & 2, i.value]), u[0]) {
          case 0:
          case 1:
            i = u;
            break;
          case 4:
            return n.label++, { value: u[1], done: !1 };
          case 5:
            n.label++, o = u[1], u = [0];
            continue;
          case 7:
            u = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (i = n.trys, !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              n = 0;
              continue;
            }
            if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
              n.label = u[1];
              break;
            }
            if (u[0] === 6 && n.label < i[1]) {
              n.label = i[1], i = u;
              break;
            }
            if (i && n.label < i[2]) {
              n.label = i[2], n.ops.push(u);
              break;
            }
            i[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        u = t.call(e, n);
      } catch (l) {
        u = [6, l], o = 0;
      } finally {
        r = i = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}, Xd = function(e, t, n, r) {
  return function(o, i) {
    return dE(void 0, void 0, void 0, function() {
      var s, a, c, u;
      return hE(this, function(l) {
        switch (l.label) {
          case 0:
            return s = ei(ei({}, r), o), [4, s.endpointResolver(s, i)];
          case 1:
            return a = l.sent(), [4, t(i, a)];
          case 2:
            return c = l.sent(), [4, e(c, ei({}, s))];
          case 3:
            return u = l.sent(), [4, n(u)];
          case 4:
            return [2, l.sent()];
        }
      });
    });
  };
}, gE = globalThis && globalThis.__awaiter || function(e, t, n, r) {
  function o(i) {
    return i instanceof n ? i : new n(function(s) {
      s(i);
    });
  }
  return new (n || (n = Promise))(function(i, s) {
    function a(l) {
      try {
        u(r.next(l));
      } catch (f) {
        s(f);
      }
    }
    function c(l) {
      try {
        u(r.throw(l));
      } catch (f) {
        s(f);
      }
    }
    function u(l) {
      l.done ? i(l.value) : o(l.value).then(a, c);
    }
    u((r = r.apply(e, t || [])).next());
  });
}, pE = globalThis && globalThis.__generator || function(e, t) {
  var n = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, r, o, i, s;
  return s = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function a(u) {
    return function(l) {
      return c([u, l]);
    };
  }
  function c(u) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; s && (s = 0, u[0] && (n = 0)), n; )
      try {
        if (r = 1, o && (i = u[0] & 2 ? o.return : u[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, u[1])).done)
          return i;
        switch (o = 0, i && (u = [u[0] & 2, i.value]), u[0]) {
          case 0:
          case 1:
            i = u;
            break;
          case 4:
            return n.label++, { value: u[1], done: !1 };
          case 5:
            n.label++, o = u[1], u = [0];
            continue;
          case 7:
            u = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (i = n.trys, !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              n = 0;
              continue;
            }
            if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
              n.label = u[1];
              break;
            }
            if (u[0] === 6 && n.label < i[1]) {
              n.label = i[1], i = u;
              break;
            }
            if (i && n.label < i[2]) {
              n.label = i[2], n.ops.push(u);
              break;
            }
            i[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        u = t.call(e, n);
      } catch (l) {
        u = [6, l], o = 0;
      } finally {
        r = i = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}, ME = function(e, t) {
  var n = Gd("GetId"), r = JSON.stringify(e);
  return Jd(t, n, r);
}, yE = function(e) {
  return gE(void 0, void 0, void 0, function() {
    var t, n;
    return pE(this, function(r) {
      switch (r.label) {
        case 0:
          return e.statusCode >= 300 ? [4, Au(e)] : [3, 2];
        case 1:
          throw t = r.sent(), t;
        case 2:
          return [4, Eu(e)];
        case 3:
          return n = r.sent(), [2, {
            IdentityId: n.IdentityId,
            $metadata: Zo(e)
          }];
      }
    });
  });
}, ki = Xd(Kd, ME, yE, Tu), mE = globalThis && globalThis.__awaiter || function(e, t, n, r) {
  function o(i) {
    return i instanceof n ? i : new n(function(s) {
      s(i);
    });
  }
  return new (n || (n = Promise))(function(i, s) {
    function a(l) {
      try {
        u(r.next(l));
      } catch (f) {
        s(f);
      }
    }
    function c(l) {
      try {
        u(r.throw(l));
      } catch (f) {
        s(f);
      }
    }
    function u(l) {
      l.done ? i(l.value) : o(l.value).then(a, c);
    }
    u((r = r.apply(e, t || [])).next());
  });
}, vE = globalThis && globalThis.__generator || function(e, t) {
  var n = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, r, o, i, s;
  return s = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function a(u) {
    return function(l) {
      return c([u, l]);
    };
  }
  function c(u) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; s && (s = 0, u[0] && (n = 0)), n; )
      try {
        if (r = 1, o && (i = u[0] & 2 ? o.return : u[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, u[1])).done)
          return i;
        switch (o = 0, i && (u = [u[0] & 2, i.value]), u[0]) {
          case 0:
          case 1:
            i = u;
            break;
          case 4:
            return n.label++, { value: u[1], done: !1 };
          case 5:
            n.label++, o = u[1], u = [0];
            continue;
          case 7:
            u = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (i = n.trys, !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              n = 0;
              continue;
            }
            if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
              n.label = u[1];
              break;
            }
            if (u[0] === 6 && n.label < i[1]) {
              n.label = i[1], i = u;
              break;
            }
            if (i && n.label < i[2]) {
              n.label = i[2], n.ops.push(u);
              break;
            }
            i[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        u = t.call(e, n);
      } catch (l) {
        u = [6, l], o = 0;
      } finally {
        r = i = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}, wE = function(e, t) {
  var n = Gd("GetCredentialsForIdentity"), r = JSON.stringify(e);
  return Jd(t, n, r);
}, DE = function(e) {
  return mE(void 0, void 0, void 0, function() {
    var t, n;
    return vE(this, function(r) {
      switch (r.label) {
        case 0:
          return e.statusCode >= 300 ? [4, Au(e)] : [3, 2];
        case 1:
          throw t = r.sent(), t;
        case 2:
          return [4, Eu(e)];
        case 3:
          return n = r.sent(), [2, {
            IdentityId: n.IdentityId,
            Credentials: IE(n.Credentials),
            $metadata: Zo(e)
          }];
      }
    });
  });
}, IE = function(e) {
  return e === void 0 && (e = {}), {
    AccessKeyId: e.AccessKeyId,
    SecretKey: e.SecretKey,
    SessionToken: e.SessionToken,
    Expiration: new Date(e.Expiration * 1e3)
  };
}, zi = Xd(Kd, wE, DE, Tu), mo = globalThis && globalThis.__assign || function() {
  return mo = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, mo.apply(this, arguments);
}, ot = globalThis && globalThis.__awaiter || function(e, t, n, r) {
  function o(i) {
    return i instanceof n ? i : new n(function(s) {
      s(i);
    });
  }
  return new (n || (n = Promise))(function(i, s) {
    function a(l) {
      try {
        u(r.next(l));
      } catch (f) {
        s(f);
      }
    }
    function c(l) {
      try {
        u(r.throw(l));
      } catch (f) {
        s(f);
      }
    }
    function u(l) {
      l.done ? i(l.value) : o(l.value).then(a, c);
    }
    u((r = r.apply(e, t || [])).next());
  });
}, st = globalThis && globalThis.__generator || function(e, t) {
  var n = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, r, o, i, s;
  return s = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function a(u) {
    return function(l) {
      return c([u, l]);
    };
  }
  function c(u) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; s && (s = 0, u[0] && (n = 0)), n; )
      try {
        if (r = 1, o && (i = u[0] & 2 ? o.return : u[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, u[1])).done)
          return i;
        switch (o = 0, i && (u = [u[0] & 2, i.value]), u[0]) {
          case 0:
          case 1:
            i = u;
            break;
          case 4:
            return n.label++, { value: u[1], done: !1 };
          case 5:
            n.label++, o = u[1], u = [0];
            continue;
          case 7:
            u = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (i = n.trys, !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              n = 0;
              continue;
            }
            if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
              n.label = u[1];
              break;
            }
            if (u[0] === 6 && n.label < i[1]) {
              n.label = i[1], i = u;
              break;
            }
            if (i && n.label < i[2]) {
              n.label = i[2], n.ops.push(u);
              break;
            }
            i[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        u = t.call(e, n);
      } catch (l) {
        u = [6, l], o = 0;
      } finally {
        r = i = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}, De = new Ut("Credentials"), AE = 50 * 60 * 1e3, EE = "CognitoIdentityId-", TE = typeof Symbol < "u" && typeof Symbol.for == "function" ? Symbol.for("amplify_default") : "@@amplify_default", NE = function(e, t, n) {
  Kt.dispatch("core", { event: e, data: t, message: n }, "Credentials", TE);
}, jE = (
  /** @class */
  function() {
    function e(t) {
      this._gettingCredPromise = null, this._refreshHandlers = {}, this.Auth = void 0, this.configure(t), this._refreshHandlers.google = jA.refreshGoogleToken, this._refreshHandlers.facebook = bA.refreshFacebookToken;
    }
    return e.prototype.getModuleName = function() {
      return "Credentials";
    }, e.prototype.getCredSource = function() {
      return this._credentials_source;
    }, e.prototype.configure = function(t) {
      if (!t)
        return this._config || {};
      this._config = Object.assign({}, this._config, t);
      var n = this._config.refreshHandlers;
      return n && (this._refreshHandlers = mo(mo({}, this._refreshHandlers), n)), this._storage = this._config.storage, this._storage || (this._storage = new $d().getStorage()), this._storageSync = Promise.resolve(), typeof this._storage.sync == "function" && (this._storageSync = this._storage.sync()), NE("credentials_configured", null, "Credentials has been configured successfully"), this._config;
    }, e.prototype.get = function() {
      return De.debug("getting credentials"), this._pickupCredentials();
    }, e.prototype._getCognitoIdentityIdStorageKey = function(t) {
      return "".concat(EE).concat(t);
    }, e.prototype._pickupCredentials = function() {
      return De.debug("picking up credentials"), !this._gettingCredPromise || !this._gettingCredPromise.isPending() ? (De.debug("getting new cred promise"), this._gettingCredPromise = VI(this._keepAlive())) : De.debug("getting old cred promise"), this._gettingCredPromise;
    }, e.prototype._keepAlive = function() {
      return ot(this, void 0, void 0, function() {
        var t, n, r, o, i, s, a, c;
        return st(this, function(u) {
          switch (u.label) {
            case 0:
              if (De.debug("checking if credentials exists and not expired"), t = this._credentials, t && !this._isExpired(t) && !this._isPastTTL())
                return De.debug("credentials not changed and not expired, directly return"), [2, Promise.resolve(t)];
              if (De.debug("need to get a new credential or refresh the existing one"), n = this.Auth, r = n === void 0 ? mu.Auth : n, !r || typeof r.currentUserCredentials != "function")
                return [2, this._setCredentialsForGuest()];
              if (!(!this._isExpired(t) && this._isPastTTL()))
                return [3, 6];
              De.debug("ttl has passed but token is not yet expired"), u.label = 1;
            case 1:
              return u.trys.push([1, 5, , 6]), [4, r.currentUserPoolUser()];
            case 2:
              return o = u.sent(), [4, r.currentSession()];
            case 3:
              return i = u.sent(), s = i.refreshToken, a = new Promise(function(l, f) {
                o.refreshSession(s, function(d, p) {
                  return d ? f(d) : l(p);
                });
              }), [4, a];
            case 4:
              return u.sent(), [3, 6];
            case 5:
              return c = u.sent(), De.debug("Error attempting to refreshing the session", c), [3, 6];
            case 6:
              return [2, r.currentUserCredentials()];
          }
        });
      });
    }, e.prototype.refreshFederatedToken = function(t) {
      De.debug("Getting federated credentials");
      var n = t.provider, r = t.user, o = t.token, i = t.identity_id, s = t.expires_at;
      s = new Date(s).getFullYear() === 1970 ? s * 1e3 : s;
      var a = this;
      return De.debug("checking if federated jwt token expired"), s > (/* @__PURE__ */ new Date()).getTime() ? (De.debug("token not expired"), this._setCredentialsFromFederation({
        provider: n,
        token: o,
        user: r,
        identity_id: i,
        expires_at: s
      })) : a._refreshHandlers[n] && typeof a._refreshHandlers[n] == "function" ? (De.debug("getting refreshed jwt token from federation provider"), this._providerRefreshWithRetry({
        refreshHandler: a._refreshHandlers[n],
        provider: n,
        user: r
      })) : (De.debug("no refresh handler for provider:", n), this.clear(), Promise.reject("no refresh handler for provider"));
    }, e.prototype._providerRefreshWithRetry = function(t) {
      var n = this, r = t.refreshHandler, o = t.provider, i = t.user, s = 10 * 1e3;
      return XI(r, [], s).then(function(a) {
        return De.debug("refresh federated token sucessfully", a), n._setCredentialsFromFederation({
          provider: o,
          token: a.token,
          user: i,
          identity_id: a.identity_id,
          expires_at: a.expires_at
        });
      }).catch(function(a) {
        var c = typeof a == "string" && a.toLowerCase().lastIndexOf("network error", a.length) === 0;
        return c || n.clear(), De.debug("refresh federated token failed", a), Promise.reject("refreshing federation token failed: " + a);
      });
    }, e.prototype._isExpired = function(t) {
      if (!t)
        return De.debug("no credentials for expiration check"), !0;
      De.debug("are these credentials expired?", t);
      var n = Date.now(), r = t.expiration;
      return r.getTime() <= n;
    }, e.prototype._isPastTTL = function() {
      return this._nextCredentialsRefresh <= Date.now();
    }, e.prototype._setCredentialsForGuest = function() {
      var t;
      return ot(this, void 0, void 0, function() {
        var n, r, o, i, s, a, c, u, l, f, d = this;
        return st(this, function(p) {
          switch (p.label) {
            case 0:
              return De.debug("setting credentials for guest"), !((t = this._config) === null || t === void 0) && t.identityPoolId || (this._config = Object.assign({}, this._config, Bd(this._config || {}).Auth)), n = this._config, r = n.identityPoolId, o = n.region, i = n.mandatorySignIn, s = n.identityPoolRegion, i ? [2, Promise.reject("cannot get guest credentials when mandatory signin enabled")] : r ? !s && !o ? (De.debug("region is not configured for getting the credentials"), [2, Promise.reject("region is not configured for getting the credentials")]) : (c = this, [4, this._getGuestIdentityId()]) : (De.debug("No Cognito Identity pool provided for unauthenticated access"), [2, Promise.reject("No Cognito Identity pool provided for unauthenticated access")]);
            case 1:
              return a = c._identityId = p.sent(), u = { region: s ?? o }, l = function() {
                return ot(d, void 0, void 0, function() {
                  var M, y;
                  return st(this, function(m) {
                    switch (m.label) {
                      case 0:
                        return a ? [3, 2] : [4, ki(u, {
                          IdentityPoolId: r
                        })];
                      case 1:
                        M = m.sent().IdentityId, this._identityId = M, m.label = 2;
                      case 2:
                        return [4, zi(u, {
                          IdentityId: this._identityId
                        })];
                      case 3:
                        return y = m.sent().Credentials, [2, {
                          identityId: this._identityId,
                          accessKeyId: y.AccessKeyId,
                          secretAccessKey: y.SecretKey,
                          sessionToken: y.SessionToken,
                          expiration: y.Expiration
                        }];
                    }
                  });
                });
              }, f = l().catch(function(M) {
                return ot(d, void 0, void 0, function() {
                  return st(this, function(y) {
                    throw M;
                  });
                });
              }), [2, this._loadCredentials(f, "guest", !1, null).then(function(M) {
                return M;
              }).catch(function(M) {
                return ot(d, void 0, void 0, function() {
                  var y, m = this;
                  return st(this, function(w) {
                    switch (w.label) {
                      case 0:
                        return M.name === "ResourceNotFoundException" && M.message === "Identity '".concat(a, "' not found.") ? (De.debug("Failed to load guest credentials"), [4, this._removeGuestIdentityId()]) : [3, 2];
                      case 1:
                        return w.sent(), y = function() {
                          return ot(m, void 0, void 0, function() {
                            var D, N;
                            return st(this, function(E) {
                              switch (E.label) {
                                case 0:
                                  return [4, ki(u, {
                                    IdentityPoolId: r
                                  })];
                                case 1:
                                  return D = E.sent().IdentityId, this._identityId = D, [4, zi(u, {
                                    IdentityId: D
                                  })];
                                case 2:
                                  return N = E.sent().Credentials, [2, {
                                    identityId: D,
                                    accessKeyId: N.AccessKeyId,
                                    secretAccessKey: N.SecretKey,
                                    sessionToken: N.SessionToken,
                                    expiration: N.Expiration
                                  }];
                              }
                            });
                          });
                        }, f = y().catch(function(D) {
                          return ot(m, void 0, void 0, function() {
                            return st(this, function(N) {
                              throw D;
                            });
                          });
                        }), [2, this._loadCredentials(f, "guest", !1, null)];
                      case 2:
                        return [2, M];
                    }
                  });
                });
              })];
          }
        });
      });
    }, e.prototype._setCredentialsFromFederation = function(t) {
      var n = this, r = t.provider, o = t.token, i = t.identity_id, s = {
        google: "accounts.google.com",
        facebook: "graph.facebook.com",
        amazon: "www.amazon.com",
        developer: "cognito-identity.amazonaws.com"
      }, a = s[r] || r;
      if (!a)
        return Promise.reject("You must specify a federated provider");
      var c = {};
      c[a] = o;
      var u = this._config, l = u.identityPoolId, f = u.region, d = u.identityPoolRegion;
      if (!l)
        return De.debug("No Cognito Federated Identity pool provided"), Promise.reject("No Cognito Federated Identity pool provided");
      if (!d && !f)
        return De.debug("region is not configured for getting the credentials"), Promise.reject("region is not configured for getting the credentials");
      var p = { region: d ?? f }, M = function() {
        return ot(n, void 0, void 0, function() {
          var m, w;
          return st(this, function(D) {
            switch (D.label) {
              case 0:
                return i ? [3, 2] : [4, ki(p, {
                  IdentityPoolId: l,
                  Logins: c
                })];
              case 1:
                m = D.sent().IdentityId, i = m, D.label = 2;
              case 2:
                return [4, zi(p, {
                  IdentityId: i,
                  Logins: c
                })];
              case 3:
                return w = D.sent().Credentials, [2, {
                  identityId: i,
                  accessKeyId: w.AccessKeyId,
                  secretAccessKey: w.SecretKey,
                  sessionToken: w.SessionToken,
                  expiration: w.Expiration
                }];
            }
          });
        });
      }, y = M().catch(function(m) {
        return ot(n, void 0, void 0, function() {
          return st(this, function(w) {
            throw m;
          });
        });
      });
      return this._loadCredentials(y, "federated", !0, t);
    }, e.prototype._setCredentialsFromSession = function(t) {
      var n = this;
      De.debug("set credentials from session");
      var r = t.getIdToken().getJwtToken(), o = this._config, i = o.region, s = o.userPoolId, a = o.identityPoolId, c = o.identityPoolRegion;
      if (!a)
        return De.debug("No Cognito Federated Identity pool provided"), Promise.reject("No Cognito Federated Identity pool provided");
      if (!c && !i)
        return De.debug("region is not configured for getting the credentials"), Promise.reject("region is not configured for getting the credentials");
      var u = "cognito-idp." + i + ".amazonaws.com/" + s, l = {};
      l[u] = r;
      var f = { region: c ?? i }, d = function() {
        return ot(n, void 0, void 0, function() {
          var M, y, m, w, D, N, E, T, F, _;
          return st(this, function(G) {
            switch (G.label) {
              case 0:
                return [4, this._getGuestIdentityId()];
              case 1:
                return M = G.sent(), M ? [3, 3] : [4, ki(f, {
                  IdentityPoolId: a,
                  Logins: l
                })];
              case 2:
                m = G.sent().IdentityId, y = m, G.label = 3;
              case 3:
                return [4, zi(f, {
                  IdentityId: M || y,
                  Logins: l
                })];
              case 4:
                return w = G.sent(), D = w.Credentials, N = D.AccessKeyId, E = D.Expiration, T = D.SecretKey, F = D.SessionToken, _ = w.IdentityId, this._identityId = _, M ? (De.debug("The guest identity ".concat(M, " has been successfully linked to the logins")), M === _ && De.debug("The guest identity ".concat(M, " has become the primary identity")), [4, this._removeGuestIdentityId()]) : [3, 6];
              case 5:
                G.sent(), G.label = 6;
              case 6:
                return [2, {
                  accessKeyId: N,
                  secretAccessKey: T,
                  sessionToken: F,
                  expiration: E,
                  identityId: _
                }];
            }
          });
        });
      }, p = d().catch(function(M) {
        return ot(n, void 0, void 0, function() {
          return st(this, function(y) {
            throw M;
          });
        });
      });
      return this._loadCredentials(p, "userPool", !0, null);
    }, e.prototype._loadCredentials = function(t, n, r, o) {
      var i = this, s = this;
      return new Promise(function(a, c) {
        t.then(function(u) {
          return ot(i, void 0, void 0, function() {
            var l, f, d, p, M;
            return st(this, function(y) {
              switch (y.label) {
                case 0:
                  if (De.debug("Load credentials successfully", u), this._identityId && !u.identityId && (u.identityId = this._identityId), s._credentials = u, s._credentials.authenticated = r, s._credentials_source = n, s._nextCredentialsRefresh = (/* @__PURE__ */ new Date()).getTime() + AE, n === "federated") {
                    l = Object.assign({ id: this._credentials.identityId }, o.user), f = o.provider, d = o.token, p = o.expires_at, M = o.identity_id;
                    try {
                      this._storage.setItem("aws-amplify-federatedInfo", JSON.stringify({
                        provider: f,
                        token: d,
                        user: l,
                        expires_at: p,
                        identity_id: M
                      }));
                    } catch (m) {
                      De.debug("Failed to put federated info into auth storage", m);
                    }
                  }
                  return n !== "guest" ? [3, 2] : [4, this._setGuestIdentityId(u.identityId)];
                case 1:
                  y.sent(), y.label = 2;
                case 2:
                  return a(s._credentials), [
                    2
                    /*return*/
                  ];
              }
            });
          });
        }).catch(function(u) {
          if (u) {
            De.debug("Failed to load credentials", t), De.debug("Error loading credentials", u), c(u);
            return;
          }
        });
      });
    }, e.prototype.set = function(t, n) {
      return n === "session" ? this._setCredentialsFromSession(t) : n === "federation" ? this._setCredentialsFromFederation(t) : n === "guest" ? this._setCredentialsForGuest() : (De.debug("no source specified for setting credentials"), Promise.reject("invalid source"));
    }, e.prototype.clear = function() {
      return ot(this, void 0, void 0, function() {
        return st(this, function(t) {
          return this._credentials = null, this._credentials_source = null, De.debug("removing aws-amplify-federatedInfo from storage"), this._storage.removeItem("aws-amplify-federatedInfo"), [
            2
            /*return*/
          ];
        });
      });
    }, e.prototype._getGuestIdentityId = function() {
      return ot(this, void 0, void 0, function() {
        var t, n;
        return st(this, function(r) {
          switch (r.label) {
            case 0:
              t = this._config.identityPoolId, r.label = 1;
            case 1:
              return r.trys.push([1, 3, , 4]), [4, this._storageSync];
            case 2:
              return r.sent(), [2, this._storage.getItem(this._getCognitoIdentityIdStorageKey(t))];
            case 3:
              return n = r.sent(), De.debug("Failed to get the cached guest identityId", n), [3, 4];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype._setGuestIdentityId = function(t) {
      return ot(this, void 0, void 0, function() {
        var n, r;
        return st(this, function(o) {
          switch (o.label) {
            case 0:
              n = this._config.identityPoolId, o.label = 1;
            case 1:
              return o.trys.push([1, 3, , 4]), [4, this._storageSync];
            case 2:
              return o.sent(), this._storage.setItem(this._getCognitoIdentityIdStorageKey(n), t), [3, 4];
            case 3:
              return r = o.sent(), De.debug("Failed to cache guest identityId", r), [3, 4];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype._removeGuestIdentityId = function() {
      return ot(this, void 0, void 0, function() {
        var t;
        return st(this, function(n) {
          return t = this._config.identityPoolId, De.debug("removing ".concat(this._getCognitoIdentityIdStorageKey(t), " from storage")), this._storage.removeItem(this._getCognitoIdentityIdStorageKey(t)), [
            2
            /*return*/
          ];
        });
      });
    }, e.prototype.shear = function(t) {
      return {
        accessKeyId: t.accessKeyId,
        sessionToken: t.sessionToken,
        secretAccessKey: t.secretAccessKey,
        identityId: t.identityId,
        authenticated: t.authenticated
      };
    }, e;
  }()
), Zd = new jE(null);
mu.register(Zd);
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
var eh = xE, _l = CE, bE = decodeURIComponent, SE = encodeURIComponent, Ui = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function xE(e, t) {
  if (typeof e != "string")
    throw new TypeError("argument str must be a string");
  for (var n = {}, r = t || {}, o = e.split(";"), i = r.decode || bE, s = 0; s < o.length; s++) {
    var a = o[s], c = a.indexOf("=");
    if (!(c < 0)) {
      var u = a.substring(0, c).trim();
      if (n[u] == null) {
        var l = a.substring(c + 1, a.length).trim();
        l[0] === '"' && (l = l.slice(1, -1)), n[u] = OE(l, i);
      }
    }
  }
  return n;
}
function CE(e, t, n) {
  var r = n || {}, o = r.encode || SE;
  if (typeof o != "function")
    throw new TypeError("option encode is invalid");
  if (!Ui.test(e))
    throw new TypeError("argument name is invalid");
  var i = o(t);
  if (i && !Ui.test(i))
    throw new TypeError("argument val is invalid");
  var s = e + "=" + i;
  if (r.maxAge != null) {
    var a = r.maxAge - 0;
    if (isNaN(a) || !isFinite(a))
      throw new TypeError("option maxAge is invalid");
    s += "; Max-Age=" + Math.floor(a);
  }
  if (r.domain) {
    if (!Ui.test(r.domain))
      throw new TypeError("option domain is invalid");
    s += "; Domain=" + r.domain;
  }
  if (r.path) {
    if (!Ui.test(r.path))
      throw new TypeError("option path is invalid");
    s += "; Path=" + r.path;
  }
  if (r.expires) {
    if (typeof r.expires.toUTCString != "function")
      throw new TypeError("option expires is invalid");
    s += "; Expires=" + r.expires.toUTCString();
  }
  if (r.httpOnly && (s += "; HttpOnly"), r.secure && (s += "; Secure"), r.sameSite) {
    var c = typeof r.sameSite == "string" ? r.sameSite.toLowerCase() : r.sameSite;
    switch (c) {
      case !0:
        s += "; SameSite=Strict";
        break;
      case "lax":
        s += "; SameSite=Lax";
        break;
      case "strict":
        s += "; SameSite=Strict";
        break;
      case "none":
        s += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return s;
}
function OE(e, t) {
  try {
    return t(e);
  } catch {
    return e;
  }
}
function LE() {
  return typeof document == "object" && typeof document.cookie == "string";
}
function _E(e, t) {
  return typeof e == "string" ? eh(e, t) : typeof e == "object" && e !== null ? e : {};
}
function kE(e, t) {
  return typeof t > "u" && (t = !e || e[0] !== "{" && e[0] !== "[" && e[0] !== '"'), !t;
}
function kl(e, t) {
  t === void 0 && (t = {});
  var n = zE(e);
  if (kE(n, t.doNotParse))
    try {
      return JSON.parse(n);
    } catch {
    }
  return e;
}
function zE(e) {
  return e && e[0] === "j" && e[1] === ":" ? e.substr(2) : e;
}
var xn = globalThis && globalThis.__assign || function() {
  return xn = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, xn.apply(this, arguments);
}, UE = (
  /** @class */
  function() {
    function e(t, n) {
      var r = this;
      this.changeListeners = [], this.HAS_DOCUMENT_COOKIE = !1, this.cookies = _E(t, n), new Promise(function() {
        r.HAS_DOCUMENT_COOKIE = LE();
      }).catch(function() {
      });
    }
    return e.prototype._updateBrowserValues = function(t) {
      this.HAS_DOCUMENT_COOKIE && (this.cookies = eh(document.cookie, t));
    }, e.prototype._emitChange = function(t) {
      for (var n = 0; n < this.changeListeners.length; ++n)
        this.changeListeners[n](t);
    }, e.prototype.get = function(t, n, r) {
      return n === void 0 && (n = {}), this._updateBrowserValues(r), kl(this.cookies[t], n);
    }, e.prototype.getAll = function(t, n) {
      t === void 0 && (t = {}), this._updateBrowserValues(n);
      var r = {};
      for (var o in this.cookies)
        r[o] = kl(this.cookies[o], t);
      return r;
    }, e.prototype.set = function(t, n, r) {
      var o;
      typeof n == "object" && (n = JSON.stringify(n)), this.cookies = xn(xn({}, this.cookies), (o = {}, o[t] = n, o)), this.HAS_DOCUMENT_COOKIE && (document.cookie = _l(t, n, r)), this._emitChange({ name: t, value: n, options: r });
    }, e.prototype.remove = function(t, n) {
      var r = n = xn(xn({}, n), { expires: new Date(1970, 1, 1, 0, 0, 1), maxAge: 0 });
      this.cookies = xn({}, this.cookies), delete this.cookies[t], this.HAS_DOCUMENT_COOKIE && (document.cookie = _l(t, "", r)), this._emitChange({ name: t, value: void 0, options: n });
    }, e.prototype.addChangeListener = function(t) {
      this.changeListeners.push(t);
    }, e.prototype.removeChangeListener = function(t) {
      var n = this.changeListeners.indexOf(t);
      n >= 0 && this.changeListeners.splice(n, 1);
    }, e;
  }()
);
const Ss = UE;
var vo = globalThis && globalThis.__assign || function() {
  return vo = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, vo.apply(this, arguments);
}, zl = rn().isBrowser, PE = 365 * 24 * 60 * 60 * 1e3, RE = (
  /** @class */
  function() {
    function e(t) {
      t === void 0 && (t = {}), this.cookies = new Ss(), this.store = zl ? window.localStorage : /* @__PURE__ */ Object.create(null), this.cookies = t.req ? new Ss(decodeURIComponent(t.req.headers.cookie)) : new Ss(), Object.assign(this.store, this.cookies.getAll());
    }
    return Object.defineProperty(e.prototype, "length", {
      get: function() {
        return Object.entries(this.store).length;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.clear = function() {
      var t = this;
      Array.from(new Array(this.length)).map(function(n, r) {
        return t.key(r);
      }).forEach(function(n) {
        return t.removeItem(n);
      });
    }, e.prototype.getItem = function(t) {
      return this.getLocalItem(t);
    }, e.prototype.getLocalItem = function(t) {
      return Object.prototype.hasOwnProperty.call(this.store, t) ? this.store[t] : null;
    }, e.prototype.getUniversalItem = function(t) {
      return this.cookies.get(t);
    }, e.prototype.key = function(t) {
      return Object.keys(this.store)[t];
    }, e.prototype.removeItem = function(t) {
      this.removeLocalItem(t), this.removeUniversalItem(t);
    }, e.prototype.removeLocalItem = function(t) {
      delete this.store[t];
    }, e.prototype.removeUniversalItem = function(t) {
      this.cookies.remove(t, {
        path: "/"
      });
    }, e.prototype.setItem = function(t, n) {
      this.setLocalItem(t, n);
      var r = t.split(".").pop(), o = [
        "LastAuthUser",
        "accessToken",
        // refreshToken originates on the client, but SSR pages won't fail when this expires
        // Note: the new `accessToken` will also be refreshed on the client (since Amplify doesn't set server-side cookies)
        "refreshToken",
        // Required for CognitoUserSession
        "idToken"
        // userData is used when `Auth.currentAuthenticatedUser({ bypassCache: false })`.
        // Can be persisted to speed up calls to `Auth.currentAuthenticatedUser()`
        // 'userData',
        // Ignoring clockDrift on the server for now, but needs testing
        // 'clockDrift',
      ];
      o.includes(r ?? "") && this.setUniversalItem(t, n, {
        expires: new Date(Date.now() + PE)
      });
    }, e.prototype.setLocalItem = function(t, n) {
      this.store[t] = n;
    }, e.prototype.setUniversalItem = function(t, n, r) {
      r === void 0 && (r = {}), this.cookies.set(t, n, vo(vo({}, r), {
        path: "/",
        // `httpOnly` cannot be set via JavaScript: https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#JavaScript_access_using_Document.cookie
        sameSite: !0,
        // Allow unsecure requests to http://localhost:3000/ when in development.
        secure: !(zl && window.location.hostname === "localhost")
      }));
    }, e;
  }()
), YE = "x-amz-user-agent";
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
var Ul = /* @__PURE__ */ function() {
  function e(n) {
    var r = n || {}, o = r.ValidationData, i = r.Username, s = r.Password, a = r.AuthParameters, c = r.ClientMetadata;
    this.validationData = o || {}, this.authParameters = a || {}, this.clientMetadata = c || {}, this.username = i, this.password = s;
  }
  var t = e.prototype;
  return t.getUsername = function() {
    return this.username;
  }, t.getPassword = function() {
    return this.password;
  }, t.getValidationData = function() {
    return this.validationData;
  }, t.getAuthParameters = function() {
    return this.authParameters;
  }, t.getClientMetadata = function() {
    return this.clientMetadata;
  }, e;
}(), Be = {}, es = {};
es.byteLength = BE;
es.toByteArray = WE;
es.fromByteArray = qE;
var Yt = [], It = [], FE = typeof Uint8Array < "u" ? Uint8Array : Array, xs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var tr = 0, QE = xs.length; tr < QE; ++tr)
  Yt[tr] = xs[tr], It[xs.charCodeAt(tr)] = tr;
It["-".charCodeAt(0)] = 62;
It["_".charCodeAt(0)] = 63;
function th(e) {
  var t = e.length;
  if (t % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var n = e.indexOf("=");
  n === -1 && (n = t);
  var r = n === t ? 0 : 4 - n % 4;
  return [n, r];
}
function BE(e) {
  var t = th(e), n = t[0], r = t[1];
  return (n + r) * 3 / 4 - r;
}
function $E(e, t, n) {
  return (t + n) * 3 / 4 - n;
}
function WE(e) {
  var t, n = th(e), r = n[0], o = n[1], i = new FE($E(e, r, o)), s = 0, a = o > 0 ? r - 4 : r, c;
  for (c = 0; c < a; c += 4)
    t = It[e.charCodeAt(c)] << 18 | It[e.charCodeAt(c + 1)] << 12 | It[e.charCodeAt(c + 2)] << 6 | It[e.charCodeAt(c + 3)], i[s++] = t >> 16 & 255, i[s++] = t >> 8 & 255, i[s++] = t & 255;
  return o === 2 && (t = It[e.charCodeAt(c)] << 2 | It[e.charCodeAt(c + 1)] >> 4, i[s++] = t & 255), o === 1 && (t = It[e.charCodeAt(c)] << 10 | It[e.charCodeAt(c + 1)] << 4 | It[e.charCodeAt(c + 2)] >> 2, i[s++] = t >> 8 & 255, i[s++] = t & 255), i;
}
function VE(e) {
  return Yt[e >> 18 & 63] + Yt[e >> 12 & 63] + Yt[e >> 6 & 63] + Yt[e & 63];
}
function HE(e, t, n) {
  for (var r, o = [], i = t; i < n; i += 3)
    r = (e[i] << 16 & 16711680) + (e[i + 1] << 8 & 65280) + (e[i + 2] & 255), o.push(VE(r));
  return o.join("");
}
function qE(e) {
  for (var t, n = e.length, r = n % 3, o = [], i = 16383, s = 0, a = n - r; s < a; s += i)
    o.push(HE(e, s, s + i > a ? a : s + i));
  return r === 1 ? (t = e[n - 1], o.push(
    Yt[t >> 2] + Yt[t << 4 & 63] + "=="
  )) : r === 2 && (t = (e[n - 2] << 8) + e[n - 1], o.push(
    Yt[t >> 10] + Yt[t >> 4 & 63] + Yt[t << 2 & 63] + "="
  )), o.join("");
}
var Nu = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
Nu.read = function(e, t, n, r, o) {
  var i, s, a = o * 8 - r - 1, c = (1 << a) - 1, u = c >> 1, l = -7, f = n ? o - 1 : 0, d = n ? -1 : 1, p = e[t + f];
  for (f += d, i = p & (1 << -l) - 1, p >>= -l, l += a; l > 0; i = i * 256 + e[t + f], f += d, l -= 8)
    ;
  for (s = i & (1 << -l) - 1, i >>= -l, l += r; l > 0; s = s * 256 + e[t + f], f += d, l -= 8)
    ;
  if (i === 0)
    i = 1 - u;
  else {
    if (i === c)
      return s ? NaN : (p ? -1 : 1) * (1 / 0);
    s = s + Math.pow(2, r), i = i - u;
  }
  return (p ? -1 : 1) * s * Math.pow(2, i - r);
};
Nu.write = function(e, t, n, r, o, i) {
  var s, a, c, u = i * 8 - o - 1, l = (1 << u) - 1, f = l >> 1, d = o === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, p = r ? 0 : i - 1, M = r ? 1 : -1, y = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
  for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, s = l) : (s = Math.floor(Math.log(t) / Math.LN2), t * (c = Math.pow(2, -s)) < 1 && (s--, c *= 2), s + f >= 1 ? t += d / c : t += d * Math.pow(2, 1 - f), t * c >= 2 && (s++, c /= 2), s + f >= l ? (a = 0, s = l) : s + f >= 1 ? (a = (t * c - 1) * Math.pow(2, o), s = s + f) : (a = t * Math.pow(2, f - 1) * Math.pow(2, o), s = 0)); o >= 8; e[n + p] = a & 255, p += M, a /= 256, o -= 8)
    ;
  for (s = s << o | a, u += o; u > 0; e[n + p] = s & 255, p += M, s /= 256, u -= 8)
    ;
  e[n + p - M] |= y * 128;
};
var KE = {}.toString, GE = Array.isArray || function(e) {
  return KE.call(e) == "[object Array]";
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
(function(e) {
  var t = es, n = Nu, r = GE;
  e.Buffer = a, e.SlowBuffer = w, e.INSPECT_MAX_BYTES = 50, a.TYPED_ARRAY_SUPPORT = Ft.TYPED_ARRAY_SUPPORT !== void 0 ? Ft.TYPED_ARRAY_SUPPORT : o(), e.kMaxLength = i();
  function o() {
    try {
      var A = new Uint8Array(1);
      return A.__proto__ = { __proto__: Uint8Array.prototype, foo: function() {
        return 42;
      } }, A.foo() === 42 && // typed array instances can be augmented
      typeof A.subarray == "function" && // chrome 9-10 lack `subarray`
      A.subarray(1, 1).byteLength === 0;
    } catch {
      return !1;
    }
  }
  function i() {
    return a.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
  }
  function s(A, g) {
    if (i() < g)
      throw new RangeError("Invalid typed array length");
    return a.TYPED_ARRAY_SUPPORT ? (A = new Uint8Array(g), A.__proto__ = a.prototype) : (A === null && (A = new a(g)), A.length = g), A;
  }
  function a(A, g, h) {
    if (!a.TYPED_ARRAY_SUPPORT && !(this instanceof a))
      return new a(A, g, h);
    if (typeof A == "number") {
      if (typeof g == "string")
        throw new Error(
          "If encoding is specified then the first argument must be a string"
        );
      return f(this, A);
    }
    return c(this, A, g, h);
  }
  a.poolSize = 8192, a._augment = function(A) {
    return A.__proto__ = a.prototype, A;
  };
  function c(A, g, h, I) {
    if (typeof g == "number")
      throw new TypeError('"value" argument must not be a number');
    return typeof ArrayBuffer < "u" && g instanceof ArrayBuffer ? M(A, g, h, I) : typeof g == "string" ? d(A, g, h) : y(A, g);
  }
  a.from = function(A, g, h) {
    return c(null, A, g, h);
  }, a.TYPED_ARRAY_SUPPORT && (a.prototype.__proto__ = Uint8Array.prototype, a.__proto__ = Uint8Array, typeof Symbol < "u" && Symbol.species && a[Symbol.species] === a && Object.defineProperty(a, Symbol.species, {
    value: null,
    configurable: !0
  }));
  function u(A) {
    if (typeof A != "number")
      throw new TypeError('"size" argument must be a number');
    if (A < 0)
      throw new RangeError('"size" argument must not be negative');
  }
  function l(A, g, h, I) {
    return u(g), g <= 0 ? s(A, g) : h !== void 0 ? typeof I == "string" ? s(A, g).fill(h, I) : s(A, g).fill(h) : s(A, g);
  }
  a.alloc = function(A, g, h) {
    return l(null, A, g, h);
  };
  function f(A, g) {
    if (u(g), A = s(A, g < 0 ? 0 : m(g) | 0), !a.TYPED_ARRAY_SUPPORT)
      for (var h = 0; h < g; ++h)
        A[h] = 0;
    return A;
  }
  a.allocUnsafe = function(A) {
    return f(null, A);
  }, a.allocUnsafeSlow = function(A) {
    return f(null, A);
  };
  function d(A, g, h) {
    if ((typeof h != "string" || h === "") && (h = "utf8"), !a.isEncoding(h))
      throw new TypeError('"encoding" must be a valid string encoding');
    var I = D(g, h) | 0;
    A = s(A, I);
    var k = A.write(g, h);
    return k !== I && (A = A.slice(0, k)), A;
  }
  function p(A, g) {
    var h = g.length < 0 ? 0 : m(g.length) | 0;
    A = s(A, h);
    for (var I = 0; I < h; I += 1)
      A[I] = g[I] & 255;
    return A;
  }
  function M(A, g, h, I) {
    if (g.byteLength, h < 0 || g.byteLength < h)
      throw new RangeError("'offset' is out of bounds");
    if (g.byteLength < h + (I || 0))
      throw new RangeError("'length' is out of bounds");
    return h === void 0 && I === void 0 ? g = new Uint8Array(g) : I === void 0 ? g = new Uint8Array(g, h) : g = new Uint8Array(g, h, I), a.TYPED_ARRAY_SUPPORT ? (A = g, A.__proto__ = a.prototype) : A = p(A, g), A;
  }
  function y(A, g) {
    if (a.isBuffer(g)) {
      var h = m(g.length) | 0;
      return A = s(A, h), A.length === 0 || g.copy(A, 0, 0, h), A;
    }
    if (g) {
      if (typeof ArrayBuffer < "u" && g.buffer instanceof ArrayBuffer || "length" in g)
        return typeof g.length != "number" || le(g.length) ? s(A, 0) : p(A, g);
      if (g.type === "Buffer" && r(g.data))
        return p(A, g.data);
    }
    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
  }
  function m(A) {
    if (A >= i())
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i().toString(16) + " bytes");
    return A | 0;
  }
  function w(A) {
    return +A != A && (A = 0), a.alloc(+A);
  }
  a.isBuffer = function(g) {
    return !!(g != null && g._isBuffer);
  }, a.compare = function(g, h) {
    if (!a.isBuffer(g) || !a.isBuffer(h))
      throw new TypeError("Arguments must be Buffers");
    if (g === h)
      return 0;
    for (var I = g.length, k = h.length, J = 0, H = Math.min(I, k); J < H; ++J)
      if (g[J] !== h[J]) {
        I = g[J], k = h[J];
        break;
      }
    return I < k ? -1 : k < I ? 1 : 0;
  }, a.isEncoding = function(g) {
    switch (String(g).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }, a.concat = function(g, h) {
    if (!r(g))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (g.length === 0)
      return a.alloc(0);
    var I;
    if (h === void 0)
      for (h = 0, I = 0; I < g.length; ++I)
        h += g[I].length;
    var k = a.allocUnsafe(h), J = 0;
    for (I = 0; I < g.length; ++I) {
      var H = g[I];
      if (!a.isBuffer(H))
        throw new TypeError('"list" argument must be an Array of Buffers');
      H.copy(k, J), J += H.length;
    }
    return k;
  };
  function D(A, g) {
    if (a.isBuffer(A))
      return A.length;
    if (typeof ArrayBuffer < "u" && typeof ArrayBuffer.isView == "function" && (ArrayBuffer.isView(A) || A instanceof ArrayBuffer))
      return A.byteLength;
    typeof A != "string" && (A = "" + A);
    var h = A.length;
    if (h === 0)
      return 0;
    for (var I = !1; ; )
      switch (g) {
        case "ascii":
        case "latin1":
        case "binary":
          return h;
        case "utf8":
        case "utf-8":
        case void 0:
          return R(A).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return h * 2;
        case "hex":
          return h >>> 1;
        case "base64":
          return ue(A).length;
        default:
          if (I)
            return R(A).length;
          g = ("" + g).toLowerCase(), I = !0;
      }
  }
  a.byteLength = D;
  function N(A, g, h) {
    var I = !1;
    if ((g === void 0 || g < 0) && (g = 0), g > this.length || ((h === void 0 || h > this.length) && (h = this.length), h <= 0) || (h >>>= 0, g >>>= 0, h <= g))
      return "";
    for (A || (A = "utf8"); ; )
      switch (A) {
        case "hex":
          return ae(this, g, h);
        case "utf8":
        case "utf-8":
          return j(this, g, h);
        case "ascii":
          return S(this, g, h);
        case "latin1":
        case "binary":
          return q(this, g, h);
        case "base64":
          return U(this, g, h);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return O(this, g, h);
        default:
          if (I)
            throw new TypeError("Unknown encoding: " + A);
          A = (A + "").toLowerCase(), I = !0;
      }
  }
  a.prototype._isBuffer = !0;
  function E(A, g, h) {
    var I = A[g];
    A[g] = A[h], A[h] = I;
  }
  a.prototype.swap16 = function() {
    var g = this.length;
    if (g % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (var h = 0; h < g; h += 2)
      E(this, h, h + 1);
    return this;
  }, a.prototype.swap32 = function() {
    var g = this.length;
    if (g % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (var h = 0; h < g; h += 4)
      E(this, h, h + 3), E(this, h + 1, h + 2);
    return this;
  }, a.prototype.swap64 = function() {
    var g = this.length;
    if (g % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (var h = 0; h < g; h += 8)
      E(this, h, h + 7), E(this, h + 1, h + 6), E(this, h + 2, h + 5), E(this, h + 3, h + 4);
    return this;
  }, a.prototype.toString = function() {
    var g = this.length | 0;
    return g === 0 ? "" : arguments.length === 0 ? j(this, 0, g) : N.apply(this, arguments);
  }, a.prototype.equals = function(g) {
    if (!a.isBuffer(g))
      throw new TypeError("Argument must be a Buffer");
    return this === g ? !0 : a.compare(this, g) === 0;
  }, a.prototype.inspect = function() {
    var g = "", h = e.INSPECT_MAX_BYTES;
    return this.length > 0 && (g = this.toString("hex", 0, h).match(/.{2}/g).join(" "), this.length > h && (g += " ... ")), "<Buffer " + g + ">";
  }, a.prototype.compare = function(g, h, I, k, J) {
    if (!a.isBuffer(g))
      throw new TypeError("Argument must be a Buffer");
    if (h === void 0 && (h = 0), I === void 0 && (I = g ? g.length : 0), k === void 0 && (k = 0), J === void 0 && (J = this.length), h < 0 || I > g.length || k < 0 || J > this.length)
      throw new RangeError("out of range index");
    if (k >= J && h >= I)
      return 0;
    if (k >= J)
      return -1;
    if (h >= I)
      return 1;
    if (h >>>= 0, I >>>= 0, k >>>= 0, J >>>= 0, this === g)
      return 0;
    for (var H = J - k, Me = I - h, Ee = Math.min(H, Me), Ie = this.slice(k, J), Le = g.slice(h, I), Fe = 0; Fe < Ee; ++Fe)
      if (Ie[Fe] !== Le[Fe]) {
        H = Ie[Fe], Me = Le[Fe];
        break;
      }
    return H < Me ? -1 : Me < H ? 1 : 0;
  };
  function T(A, g, h, I, k) {
    if (A.length === 0)
      return -1;
    if (typeof h == "string" ? (I = h, h = 0) : h > 2147483647 ? h = 2147483647 : h < -2147483648 && (h = -2147483648), h = +h, isNaN(h) && (h = k ? 0 : A.length - 1), h < 0 && (h = A.length + h), h >= A.length) {
      if (k)
        return -1;
      h = A.length - 1;
    } else if (h < 0)
      if (k)
        h = 0;
      else
        return -1;
    if (typeof g == "string" && (g = a.from(g, I)), a.isBuffer(g))
      return g.length === 0 ? -1 : F(A, g, h, I, k);
    if (typeof g == "number")
      return g = g & 255, a.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf == "function" ? k ? Uint8Array.prototype.indexOf.call(A, g, h) : Uint8Array.prototype.lastIndexOf.call(A, g, h) : F(A, [g], h, I, k);
    throw new TypeError("val must be string, number or Buffer");
  }
  function F(A, g, h, I, k) {
    var J = 1, H = A.length, Me = g.length;
    if (I !== void 0 && (I = String(I).toLowerCase(), I === "ucs2" || I === "ucs-2" || I === "utf16le" || I === "utf-16le")) {
      if (A.length < 2 || g.length < 2)
        return -1;
      J = 2, H /= 2, Me /= 2, h /= 2;
    }
    function Ee(Vt, $n) {
      return J === 1 ? Vt[$n] : Vt.readUInt16BE($n * J);
    }
    var Ie;
    if (k) {
      var Le = -1;
      for (Ie = h; Ie < H; Ie++)
        if (Ee(A, Ie) === Ee(g, Le === -1 ? 0 : Ie - Le)) {
          if (Le === -1 && (Le = Ie), Ie - Le + 1 === Me)
            return Le * J;
        } else
          Le !== -1 && (Ie -= Ie - Le), Le = -1;
    } else
      for (h + Me > H && (h = H - Me), Ie = h; Ie >= 0; Ie--) {
        for (var Fe = !0, ye = 0; ye < Me; ye++)
          if (Ee(A, Ie + ye) !== Ee(g, ye)) {
            Fe = !1;
            break;
          }
        if (Fe)
          return Ie;
      }
    return -1;
  }
  a.prototype.includes = function(g, h, I) {
    return this.indexOf(g, h, I) !== -1;
  }, a.prototype.indexOf = function(g, h, I) {
    return T(this, g, h, I, !0);
  }, a.prototype.lastIndexOf = function(g, h, I) {
    return T(this, g, h, I, !1);
  };
  function _(A, g, h, I) {
    h = Number(h) || 0;
    var k = A.length - h;
    I ? (I = Number(I), I > k && (I = k)) : I = k;
    var J = g.length;
    if (J % 2 !== 0)
      throw new TypeError("Invalid hex string");
    I > J / 2 && (I = J / 2);
    for (var H = 0; H < I; ++H) {
      var Me = parseInt(g.substr(H * 2, 2), 16);
      if (isNaN(Me))
        return H;
      A[h + H] = Me;
    }
    return H;
  }
  function G(A, g, h, I) {
    return he(R(g, A.length - h), A, h, I);
  }
  function Q(A, g, h, I) {
    return he(ce(g), A, h, I);
  }
  function K(A, g, h, I) {
    return Q(A, g, h, I);
  }
  function Z(A, g, h, I) {
    return he(ue(g), A, h, I);
  }
  function re(A, g, h, I) {
    return he(X(g, A.length - h), A, h, I);
  }
  a.prototype.write = function(g, h, I, k) {
    if (h === void 0)
      k = "utf8", I = this.length, h = 0;
    else if (I === void 0 && typeof h == "string")
      k = h, I = this.length, h = 0;
    else if (isFinite(h))
      h = h | 0, isFinite(I) ? (I = I | 0, k === void 0 && (k = "utf8")) : (k = I, I = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    var J = this.length - h;
    if ((I === void 0 || I > J) && (I = J), g.length > 0 && (I < 0 || h < 0) || h > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    k || (k = "utf8");
    for (var H = !1; ; )
      switch (k) {
        case "hex":
          return _(this, g, h, I);
        case "utf8":
        case "utf-8":
          return G(this, g, h, I);
        case "ascii":
          return Q(this, g, h, I);
        case "latin1":
        case "binary":
          return K(this, g, h, I);
        case "base64":
          return Z(this, g, h, I);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return re(this, g, h, I);
        default:
          if (H)
            throw new TypeError("Unknown encoding: " + k);
          k = ("" + k).toLowerCase(), H = !0;
      }
  }, a.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function U(A, g, h) {
    return g === 0 && h === A.length ? t.fromByteArray(A) : t.fromByteArray(A.slice(g, h));
  }
  function j(A, g, h) {
    h = Math.min(A.length, h);
    for (var I = [], k = g; k < h; ) {
      var J = A[k], H = null, Me = J > 239 ? 4 : J > 223 ? 3 : J > 191 ? 2 : 1;
      if (k + Me <= h) {
        var Ee, Ie, Le, Fe;
        switch (Me) {
          case 1:
            J < 128 && (H = J);
            break;
          case 2:
            Ee = A[k + 1], (Ee & 192) === 128 && (Fe = (J & 31) << 6 | Ee & 63, Fe > 127 && (H = Fe));
            break;
          case 3:
            Ee = A[k + 1], Ie = A[k + 2], (Ee & 192) === 128 && (Ie & 192) === 128 && (Fe = (J & 15) << 12 | (Ee & 63) << 6 | Ie & 63, Fe > 2047 && (Fe < 55296 || Fe > 57343) && (H = Fe));
            break;
          case 4:
            Ee = A[k + 1], Ie = A[k + 2], Le = A[k + 3], (Ee & 192) === 128 && (Ie & 192) === 128 && (Le & 192) === 128 && (Fe = (J & 15) << 18 | (Ee & 63) << 12 | (Ie & 63) << 6 | Le & 63, Fe > 65535 && Fe < 1114112 && (H = Fe));
        }
      }
      H === null ? (H = 65533, Me = 1) : H > 65535 && (H -= 65536, I.push(H >>> 10 & 1023 | 55296), H = 56320 | H & 1023), I.push(H), k += Me;
    }
    return V(I);
  }
  var C = 4096;
  function V(A) {
    var g = A.length;
    if (g <= C)
      return String.fromCharCode.apply(String, A);
    for (var h = "", I = 0; I < g; )
      h += String.fromCharCode.apply(
        String,
        A.slice(I, I += C)
      );
    return h;
  }
  function S(A, g, h) {
    var I = "";
    h = Math.min(A.length, h);
    for (var k = g; k < h; ++k)
      I += String.fromCharCode(A[k] & 127);
    return I;
  }
  function q(A, g, h) {
    var I = "";
    h = Math.min(A.length, h);
    for (var k = g; k < h; ++k)
      I += String.fromCharCode(A[k]);
    return I;
  }
  function ae(A, g, h) {
    var I = A.length;
    (!g || g < 0) && (g = 0), (!h || h < 0 || h > I) && (h = I);
    for (var k = "", J = g; J < h; ++J)
      k += L(A[J]);
    return k;
  }
  function O(A, g, h) {
    for (var I = A.slice(g, h), k = "", J = 0; J < I.length; J += 2)
      k += String.fromCharCode(I[J] + I[J + 1] * 256);
    return k;
  }
  a.prototype.slice = function(g, h) {
    var I = this.length;
    g = ~~g, h = h === void 0 ? I : ~~h, g < 0 ? (g += I, g < 0 && (g = 0)) : g > I && (g = I), h < 0 ? (h += I, h < 0 && (h = 0)) : h > I && (h = I), h < g && (h = g);
    var k;
    if (a.TYPED_ARRAY_SUPPORT)
      k = this.subarray(g, h), k.__proto__ = a.prototype;
    else {
      var J = h - g;
      k = new a(J, void 0);
      for (var H = 0; H < J; ++H)
        k[H] = this[H + g];
    }
    return k;
  };
  function z(A, g, h) {
    if (A % 1 !== 0 || A < 0)
      throw new RangeError("offset is not uint");
    if (A + g > h)
      throw new RangeError("Trying to access beyond buffer length");
  }
  a.prototype.readUIntLE = function(g, h, I) {
    g = g | 0, h = h | 0, I || z(g, h, this.length);
    for (var k = this[g], J = 1, H = 0; ++H < h && (J *= 256); )
      k += this[g + H] * J;
    return k;
  }, a.prototype.readUIntBE = function(g, h, I) {
    g = g | 0, h = h | 0, I || z(g, h, this.length);
    for (var k = this[g + --h], J = 1; h > 0 && (J *= 256); )
      k += this[g + --h] * J;
    return k;
  }, a.prototype.readUInt8 = function(g, h) {
    return h || z(g, 1, this.length), this[g];
  }, a.prototype.readUInt16LE = function(g, h) {
    return h || z(g, 2, this.length), this[g] | this[g + 1] << 8;
  }, a.prototype.readUInt16BE = function(g, h) {
    return h || z(g, 2, this.length), this[g] << 8 | this[g + 1];
  }, a.prototype.readUInt32LE = function(g, h) {
    return h || z(g, 4, this.length), (this[g] | this[g + 1] << 8 | this[g + 2] << 16) + this[g + 3] * 16777216;
  }, a.prototype.readUInt32BE = function(g, h) {
    return h || z(g, 4, this.length), this[g] * 16777216 + (this[g + 1] << 16 | this[g + 2] << 8 | this[g + 3]);
  }, a.prototype.readIntLE = function(g, h, I) {
    g = g | 0, h = h | 0, I || z(g, h, this.length);
    for (var k = this[g], J = 1, H = 0; ++H < h && (J *= 256); )
      k += this[g + H] * J;
    return J *= 128, k >= J && (k -= Math.pow(2, 8 * h)), k;
  }, a.prototype.readIntBE = function(g, h, I) {
    g = g | 0, h = h | 0, I || z(g, h, this.length);
    for (var k = h, J = 1, H = this[g + --k]; k > 0 && (J *= 256); )
      H += this[g + --k] * J;
    return J *= 128, H >= J && (H -= Math.pow(2, 8 * h)), H;
  }, a.prototype.readInt8 = function(g, h) {
    return h || z(g, 1, this.length), this[g] & 128 ? (255 - this[g] + 1) * -1 : this[g];
  }, a.prototype.readInt16LE = function(g, h) {
    h || z(g, 2, this.length);
    var I = this[g] | this[g + 1] << 8;
    return I & 32768 ? I | 4294901760 : I;
  }, a.prototype.readInt16BE = function(g, h) {
    h || z(g, 2, this.length);
    var I = this[g + 1] | this[g] << 8;
    return I & 32768 ? I | 4294901760 : I;
  }, a.prototype.readInt32LE = function(g, h) {
    return h || z(g, 4, this.length), this[g] | this[g + 1] << 8 | this[g + 2] << 16 | this[g + 3] << 24;
  }, a.prototype.readInt32BE = function(g, h) {
    return h || z(g, 4, this.length), this[g] << 24 | this[g + 1] << 16 | this[g + 2] << 8 | this[g + 3];
  }, a.prototype.readFloatLE = function(g, h) {
    return h || z(g, 4, this.length), n.read(this, g, !0, 23, 4);
  }, a.prototype.readFloatBE = function(g, h) {
    return h || z(g, 4, this.length), n.read(this, g, !1, 23, 4);
  }, a.prototype.readDoubleLE = function(g, h) {
    return h || z(g, 8, this.length), n.read(this, g, !0, 52, 8);
  }, a.prototype.readDoubleBE = function(g, h) {
    return h || z(g, 8, this.length), n.read(this, g, !1, 52, 8);
  };
  function Y(A, g, h, I, k, J) {
    if (!a.isBuffer(A))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (g > k || g < J)
      throw new RangeError('"value" argument is out of bounds');
    if (h + I > A.length)
      throw new RangeError("Index out of range");
  }
  a.prototype.writeUIntLE = function(g, h, I, k) {
    if (g = +g, h = h | 0, I = I | 0, !k) {
      var J = Math.pow(2, 8 * I) - 1;
      Y(this, g, h, I, J, 0);
    }
    var H = 1, Me = 0;
    for (this[h] = g & 255; ++Me < I && (H *= 256); )
      this[h + Me] = g / H & 255;
    return h + I;
  }, a.prototype.writeUIntBE = function(g, h, I, k) {
    if (g = +g, h = h | 0, I = I | 0, !k) {
      var J = Math.pow(2, 8 * I) - 1;
      Y(this, g, h, I, J, 0);
    }
    var H = I - 1, Me = 1;
    for (this[h + H] = g & 255; --H >= 0 && (Me *= 256); )
      this[h + H] = g / Me & 255;
    return h + I;
  }, a.prototype.writeUInt8 = function(g, h, I) {
    return g = +g, h = h | 0, I || Y(this, g, h, 1, 255, 0), a.TYPED_ARRAY_SUPPORT || (g = Math.floor(g)), this[h] = g & 255, h + 1;
  };
  function W(A, g, h, I) {
    g < 0 && (g = 65535 + g + 1);
    for (var k = 0, J = Math.min(A.length - h, 2); k < J; ++k)
      A[h + k] = (g & 255 << 8 * (I ? k : 1 - k)) >>> (I ? k : 1 - k) * 8;
  }
  a.prototype.writeUInt16LE = function(g, h, I) {
    return g = +g, h = h | 0, I || Y(this, g, h, 2, 65535, 0), a.TYPED_ARRAY_SUPPORT ? (this[h] = g & 255, this[h + 1] = g >>> 8) : W(this, g, h, !0), h + 2;
  }, a.prototype.writeUInt16BE = function(g, h, I) {
    return g = +g, h = h | 0, I || Y(this, g, h, 2, 65535, 0), a.TYPED_ARRAY_SUPPORT ? (this[h] = g >>> 8, this[h + 1] = g & 255) : W(this, g, h, !1), h + 2;
  };
  function B(A, g, h, I) {
    g < 0 && (g = 4294967295 + g + 1);
    for (var k = 0, J = Math.min(A.length - h, 4); k < J; ++k)
      A[h + k] = g >>> (I ? k : 3 - k) * 8 & 255;
  }
  a.prototype.writeUInt32LE = function(g, h, I) {
    return g = +g, h = h | 0, I || Y(this, g, h, 4, 4294967295, 0), a.TYPED_ARRAY_SUPPORT ? (this[h + 3] = g >>> 24, this[h + 2] = g >>> 16, this[h + 1] = g >>> 8, this[h] = g & 255) : B(this, g, h, !0), h + 4;
  }, a.prototype.writeUInt32BE = function(g, h, I) {
    return g = +g, h = h | 0, I || Y(this, g, h, 4, 4294967295, 0), a.TYPED_ARRAY_SUPPORT ? (this[h] = g >>> 24, this[h + 1] = g >>> 16, this[h + 2] = g >>> 8, this[h + 3] = g & 255) : B(this, g, h, !1), h + 4;
  }, a.prototype.writeIntLE = function(g, h, I, k) {
    if (g = +g, h = h | 0, !k) {
      var J = Math.pow(2, 8 * I - 1);
      Y(this, g, h, I, J - 1, -J);
    }
    var H = 0, Me = 1, Ee = 0;
    for (this[h] = g & 255; ++H < I && (Me *= 256); )
      g < 0 && Ee === 0 && this[h + H - 1] !== 0 && (Ee = 1), this[h + H] = (g / Me >> 0) - Ee & 255;
    return h + I;
  }, a.prototype.writeIntBE = function(g, h, I, k) {
    if (g = +g, h = h | 0, !k) {
      var J = Math.pow(2, 8 * I - 1);
      Y(this, g, h, I, J - 1, -J);
    }
    var H = I - 1, Me = 1, Ee = 0;
    for (this[h + H] = g & 255; --H >= 0 && (Me *= 256); )
      g < 0 && Ee === 0 && this[h + H + 1] !== 0 && (Ee = 1), this[h + H] = (g / Me >> 0) - Ee & 255;
    return h + I;
  }, a.prototype.writeInt8 = function(g, h, I) {
    return g = +g, h = h | 0, I || Y(this, g, h, 1, 127, -128), a.TYPED_ARRAY_SUPPORT || (g = Math.floor(g)), g < 0 && (g = 255 + g + 1), this[h] = g & 255, h + 1;
  }, a.prototype.writeInt16LE = function(g, h, I) {
    return g = +g, h = h | 0, I || Y(this, g, h, 2, 32767, -32768), a.TYPED_ARRAY_SUPPORT ? (this[h] = g & 255, this[h + 1] = g >>> 8) : W(this, g, h, !0), h + 2;
  }, a.prototype.writeInt16BE = function(g, h, I) {
    return g = +g, h = h | 0, I || Y(this, g, h, 2, 32767, -32768), a.TYPED_ARRAY_SUPPORT ? (this[h] = g >>> 8, this[h + 1] = g & 255) : W(this, g, h, !1), h + 2;
  }, a.prototype.writeInt32LE = function(g, h, I) {
    return g = +g, h = h | 0, I || Y(this, g, h, 4, 2147483647, -2147483648), a.TYPED_ARRAY_SUPPORT ? (this[h] = g & 255, this[h + 1] = g >>> 8, this[h + 2] = g >>> 16, this[h + 3] = g >>> 24) : B(this, g, h, !0), h + 4;
  }, a.prototype.writeInt32BE = function(g, h, I) {
    return g = +g, h = h | 0, I || Y(this, g, h, 4, 2147483647, -2147483648), g < 0 && (g = 4294967295 + g + 1), a.TYPED_ARRAY_SUPPORT ? (this[h] = g >>> 24, this[h + 1] = g >>> 16, this[h + 2] = g >>> 8, this[h + 3] = g & 255) : B(this, g, h, !1), h + 4;
  };
  function ee(A, g, h, I, k, J) {
    if (h + I > A.length)
      throw new RangeError("Index out of range");
    if (h < 0)
      throw new RangeError("Index out of range");
  }
  function b(A, g, h, I, k) {
    return k || ee(A, g, h, 4), n.write(A, g, h, I, 23, 4), h + 4;
  }
  a.prototype.writeFloatLE = function(g, h, I) {
    return b(this, g, h, !0, I);
  }, a.prototype.writeFloatBE = function(g, h, I) {
    return b(this, g, h, !1, I);
  };
  function ne(A, g, h, I, k) {
    return k || ee(A, g, h, 8), n.write(A, g, h, I, 52, 8), h + 8;
  }
  a.prototype.writeDoubleLE = function(g, h, I) {
    return ne(this, g, h, !0, I);
  }, a.prototype.writeDoubleBE = function(g, h, I) {
    return ne(this, g, h, !1, I);
  }, a.prototype.copy = function(g, h, I, k) {
    if (I || (I = 0), !k && k !== 0 && (k = this.length), h >= g.length && (h = g.length), h || (h = 0), k > 0 && k < I && (k = I), k === I || g.length === 0 || this.length === 0)
      return 0;
    if (h < 0)
      throw new RangeError("targetStart out of bounds");
    if (I < 0 || I >= this.length)
      throw new RangeError("sourceStart out of bounds");
    if (k < 0)
      throw new RangeError("sourceEnd out of bounds");
    k > this.length && (k = this.length), g.length - h < k - I && (k = g.length - h + I);
    var J = k - I, H;
    if (this === g && I < h && h < k)
      for (H = J - 1; H >= 0; --H)
        g[H + h] = this[H + I];
    else if (J < 1e3 || !a.TYPED_ARRAY_SUPPORT)
      for (H = 0; H < J; ++H)
        g[H + h] = this[H + I];
    else
      Uint8Array.prototype.set.call(
        g,
        this.subarray(I, I + J),
        h
      );
    return J;
  }, a.prototype.fill = function(g, h, I, k) {
    if (typeof g == "string") {
      if (typeof h == "string" ? (k = h, h = 0, I = this.length) : typeof I == "string" && (k = I, I = this.length), g.length === 1) {
        var J = g.charCodeAt(0);
        J < 256 && (g = J);
      }
      if (k !== void 0 && typeof k != "string")
        throw new TypeError("encoding must be a string");
      if (typeof k == "string" && !a.isEncoding(k))
        throw new TypeError("Unknown encoding: " + k);
    } else
      typeof g == "number" && (g = g & 255);
    if (h < 0 || this.length < h || this.length < I)
      throw new RangeError("Out of range index");
    if (I <= h)
      return this;
    h = h >>> 0, I = I === void 0 ? this.length : I >>> 0, g || (g = 0);
    var H;
    if (typeof g == "number")
      for (H = h; H < I; ++H)
        this[H] = g;
    else {
      var Me = a.isBuffer(g) ? g : R(new a(g, k).toString()), Ee = Me.length;
      for (H = 0; H < I - h; ++H)
        this[H + h] = Me[H % Ee];
    }
    return this;
  };
  var $ = /[^+\/0-9A-Za-z-_]/g;
  function ie(A) {
    if (A = P(A).replace($, ""), A.length < 2)
      return "";
    for (; A.length % 4 !== 0; )
      A = A + "=";
    return A;
  }
  function P(A) {
    return A.trim ? A.trim() : A.replace(/^\s+|\s+$/g, "");
  }
  function L(A) {
    return A < 16 ? "0" + A.toString(16) : A.toString(16);
  }
  function R(A, g) {
    g = g || 1 / 0;
    for (var h, I = A.length, k = null, J = [], H = 0; H < I; ++H) {
      if (h = A.charCodeAt(H), h > 55295 && h < 57344) {
        if (!k) {
          if (h > 56319) {
            (g -= 3) > -1 && J.push(239, 191, 189);
            continue;
          } else if (H + 1 === I) {
            (g -= 3) > -1 && J.push(239, 191, 189);
            continue;
          }
          k = h;
          continue;
        }
        if (h < 56320) {
          (g -= 3) > -1 && J.push(239, 191, 189), k = h;
          continue;
        }
        h = (k - 55296 << 10 | h - 56320) + 65536;
      } else
        k && (g -= 3) > -1 && J.push(239, 191, 189);
      if (k = null, h < 128) {
        if ((g -= 1) < 0)
          break;
        J.push(h);
      } else if (h < 2048) {
        if ((g -= 2) < 0)
          break;
        J.push(
          h >> 6 | 192,
          h & 63 | 128
        );
      } else if (h < 65536) {
        if ((g -= 3) < 0)
          break;
        J.push(
          h >> 12 | 224,
          h >> 6 & 63 | 128,
          h & 63 | 128
        );
      } else if (h < 1114112) {
        if ((g -= 4) < 0)
          break;
        J.push(
          h >> 18 | 240,
          h >> 12 & 63 | 128,
          h >> 6 & 63 | 128,
          h & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return J;
  }
  function ce(A) {
    for (var g = [], h = 0; h < A.length; ++h)
      g.push(A.charCodeAt(h) & 255);
    return g;
  }
  function X(A, g) {
    for (var h, I, k, J = [], H = 0; H < A.length && !((g -= 2) < 0); ++H)
      h = A.charCodeAt(H), I = h >> 8, k = h % 256, J.push(k), J.push(I);
    return J;
  }
  function ue(A) {
    return t.toByteArray(ie(A));
  }
  function he(A, g, h, I) {
    for (var k = 0; k < I && !(k + h >= g.length || k >= A.length); ++k)
      g[k + h] = A[k];
    return k;
  }
  function le(A) {
    return A !== A;
  }
})(Be);
var Et;
typeof window < "u" && window.crypto && (Et = window.crypto);
!Et && typeof window < "u" && window.msCrypto && (Et = window.msCrypto);
!Et && typeof global < "u" && global.crypto && (Et = global.crypto);
if (!Et && typeof require == "function")
  try {
    Et = require("crypto");
  } catch {
  }
function JE() {
  if (Et) {
    if (typeof Et.getRandomValues == "function")
      try {
        return Et.getRandomValues(new Uint32Array(1))[0];
      } catch {
      }
    if (typeof Et.randomBytes == "function")
      try {
        return Et.randomBytes(4).readInt32LE();
      } catch {
      }
  }
  throw new Error("Native crypto module could not be used to get secure random number.");
}
function XE(e) {
  for (var t = e.words, n = e.sigBytes, r = [], o = 0; o < n; o++) {
    var i = t[o >>> 2] >>> 24 - o % 4 * 8 & 255;
    r.push((i >>> 4).toString(16)), r.push((i & 15).toString(16));
  }
  return r.join("");
}
var ZE = /* @__PURE__ */ function() {
  function e(n, r) {
    n = this.words = n || [], r != null ? this.sigBytes = r : this.sigBytes = n.length * 4;
  }
  var t = e.prototype;
  return t.random = function(r) {
    for (var o = [], i = 0; i < r; i += 4)
      o.push(JE());
    return new e(o, r);
  }, t.toString = function() {
    return XE(this);
  }, e;
}();
function pe(e, t) {
  e != null && this.fromString(e, t);
}
function ft() {
  return new pe(null);
}
var mn, eT = 244837814094590, Pl = (eT & 16777215) == 15715070;
function tT(e, t, n, r, o, i) {
  for (; --i >= 0; ) {
    var s = t * this[e++] + n[r] + o;
    o = Math.floor(s / 67108864), n[r++] = s & 67108863;
  }
  return o;
}
function nT(e, t, n, r, o, i) {
  for (var s = t & 32767, a = t >> 15; --i >= 0; ) {
    var c = this[e] & 32767, u = this[e++] >> 15, l = a * c + u * s;
    c = s * c + ((l & 32767) << 15) + n[r] + (o & 1073741823), o = (c >>> 30) + (l >>> 15) + a * u + (o >>> 30), n[r++] = c & 1073741823;
  }
  return o;
}
function rT(e, t, n, r, o, i) {
  for (var s = t & 16383, a = t >> 14; --i >= 0; ) {
    var c = this[e] & 16383, u = this[e++] >> 14, l = a * c + u * s;
    c = s * c + ((l & 16383) << 14) + n[r] + o, o = (c >> 28) + (l >> 14) + a * u, n[r++] = c & 268435455;
  }
  return o;
}
var Rl = typeof navigator < "u";
Rl && Pl && navigator.appName == "Microsoft Internet Explorer" ? (pe.prototype.am = nT, mn = 30) : Rl && Pl && navigator.appName != "Netscape" ? (pe.prototype.am = tT, mn = 26) : (pe.prototype.am = rT, mn = 28);
pe.prototype.DB = mn;
pe.prototype.DM = (1 << mn) - 1;
pe.prototype.DV = 1 << mn;
var ju = 52;
pe.prototype.FV = Math.pow(2, ju);
pe.prototype.F1 = ju - mn;
pe.prototype.F2 = 2 * mn - ju;
var iT = "0123456789abcdefghijklmnopqrstuvwxyz", ts = new Array(), jr, Tt;
jr = "0".charCodeAt(0);
for (Tt = 0; Tt <= 9; ++Tt)
  ts[jr++] = Tt;
jr = "a".charCodeAt(0);
for (Tt = 10; Tt < 36; ++Tt)
  ts[jr++] = Tt;
jr = "A".charCodeAt(0);
for (Tt = 10; Tt < 36; ++Tt)
  ts[jr++] = Tt;
function Yl(e) {
  return iT.charAt(e);
}
function oT(e, t) {
  var n = ts[e.charCodeAt(t)];
  return n ?? -1;
}
function sT(e) {
  for (var t = this.t - 1; t >= 0; --t)
    e[t] = this[t];
  e.t = this.t, e.s = this.s;
}
function aT(e) {
  this.t = 1, this.s = e < 0 ? -1 : 0, e > 0 ? this[0] = e : e < -1 ? this[0] = e + this.DV : this.t = 0;
}
function bu(e) {
  var t = ft();
  return t.fromInt(e), t;
}
function uT(e, t) {
  var n;
  if (t == 16)
    n = 4;
  else if (t == 8)
    n = 3;
  else if (t == 2)
    n = 1;
  else if (t == 32)
    n = 5;
  else if (t == 4)
    n = 2;
  else
    throw new Error("Only radix 2, 4, 8, 16, 32 are supported");
  this.t = 0, this.s = 0;
  for (var r = e.length, o = !1, i = 0; --r >= 0; ) {
    var s = oT(e, r);
    if (s < 0) {
      e.charAt(r) == "-" && (o = !0);
      continue;
    }
    o = !1, i == 0 ? this[this.t++] = s : i + n > this.DB ? (this[this.t - 1] |= (s & (1 << this.DB - i) - 1) << i, this[this.t++] = s >> this.DB - i) : this[this.t - 1] |= s << i, i += n, i >= this.DB && (i -= this.DB);
  }
  this.clamp(), o && pe.ZERO.subTo(this, this);
}
function cT() {
  for (var e = this.s & this.DM; this.t > 0 && this[this.t - 1] == e; )
    --this.t;
}
function lT(e) {
  if (this.s < 0)
    return "-" + this.negate().toString(e);
  var t;
  if (e == 16)
    t = 4;
  else if (e == 8)
    t = 3;
  else if (e == 2)
    t = 1;
  else if (e == 32)
    t = 5;
  else if (e == 4)
    t = 2;
  else
    throw new Error("Only radix 2, 4, 8, 16, 32 are supported");
  var n = (1 << t) - 1, r, o = !1, i = "", s = this.t, a = this.DB - s * this.DB % t;
  if (s-- > 0)
    for (a < this.DB && (r = this[s] >> a) > 0 && (o = !0, i = Yl(r)); s >= 0; )
      a < t ? (r = (this[s] & (1 << a) - 1) << t - a, r |= this[--s] >> (a += this.DB - t)) : (r = this[s] >> (a -= t) & n, a <= 0 && (a += this.DB, --s)), r > 0 && (o = !0), o && (i += Yl(r));
  return o ? i : "0";
}
function fT() {
  var e = ft();
  return pe.ZERO.subTo(this, e), e;
}
function dT() {
  return this.s < 0 ? this.negate() : this;
}
function hT(e) {
  var t = this.s - e.s;
  if (t != 0)
    return t;
  var n = this.t;
  if (t = n - e.t, t != 0)
    return this.s < 0 ? -t : t;
  for (; --n >= 0; )
    if ((t = this[n] - e[n]) != 0)
      return t;
  return 0;
}
function Su(e) {
  var t = 1, n;
  return (n = e >>> 16) != 0 && (e = n, t += 16), (n = e >> 8) != 0 && (e = n, t += 8), (n = e >> 4) != 0 && (e = n, t += 4), (n = e >> 2) != 0 && (e = n, t += 2), (n = e >> 1) != 0 && (e = n, t += 1), t;
}
function gT() {
  return this.t <= 0 ? 0 : this.DB * (this.t - 1) + Su(this[this.t - 1] ^ this.s & this.DM);
}
function pT(e, t) {
  var n;
  for (n = this.t - 1; n >= 0; --n)
    t[n + e] = this[n];
  for (n = e - 1; n >= 0; --n)
    t[n] = 0;
  t.t = this.t + e, t.s = this.s;
}
function MT(e, t) {
  for (var n = e; n < this.t; ++n)
    t[n - e] = this[n];
  t.t = Math.max(this.t - e, 0), t.s = this.s;
}
function yT(e, t) {
  var n = e % this.DB, r = this.DB - n, o = (1 << r) - 1, i = Math.floor(e / this.DB), s = this.s << n & this.DM, a;
  for (a = this.t - 1; a >= 0; --a)
    t[a + i + 1] = this[a] >> r | s, s = (this[a] & o) << n;
  for (a = i - 1; a >= 0; --a)
    t[a] = 0;
  t[i] = s, t.t = this.t + i + 1, t.s = this.s, t.clamp();
}
function mT(e, t) {
  t.s = this.s;
  var n = Math.floor(e / this.DB);
  if (n >= this.t) {
    t.t = 0;
    return;
  }
  var r = e % this.DB, o = this.DB - r, i = (1 << r) - 1;
  t[0] = this[n] >> r;
  for (var s = n + 1; s < this.t; ++s)
    t[s - n - 1] |= (this[s] & i) << o, t[s - n] = this[s] >> r;
  r > 0 && (t[this.t - n - 1] |= (this.s & i) << o), t.t = this.t - n, t.clamp();
}
function vT(e, t) {
  for (var n = 0, r = 0, o = Math.min(e.t, this.t); n < o; )
    r += this[n] - e[n], t[n++] = r & this.DM, r >>= this.DB;
  if (e.t < this.t) {
    for (r -= e.s; n < this.t; )
      r += this[n], t[n++] = r & this.DM, r >>= this.DB;
    r += this.s;
  } else {
    for (r += this.s; n < e.t; )
      r -= e[n], t[n++] = r & this.DM, r >>= this.DB;
    r -= e.s;
  }
  t.s = r < 0 ? -1 : 0, r < -1 ? t[n++] = this.DV + r : r > 0 && (t[n++] = r), t.t = n, t.clamp();
}
function wT(e, t) {
  var n = this.abs(), r = e.abs(), o = n.t;
  for (t.t = o + r.t; --o >= 0; )
    t[o] = 0;
  for (o = 0; o < r.t; ++o)
    t[o + n.t] = n.am(0, r[o], t, o, 0, n.t);
  t.s = 0, t.clamp(), this.s != e.s && pe.ZERO.subTo(t, t);
}
function DT(e) {
  for (var t = this.abs(), n = e.t = 2 * t.t; --n >= 0; )
    e[n] = 0;
  for (n = 0; n < t.t - 1; ++n) {
    var r = t.am(n, t[n], e, 2 * n, 0, 1);
    (e[n + t.t] += t.am(n + 1, 2 * t[n], e, 2 * n + 1, r, t.t - n - 1)) >= t.DV && (e[n + t.t] -= t.DV, e[n + t.t + 1] = 1);
  }
  e.t > 0 && (e[e.t - 1] += t.am(n, t[n], e, 2 * n, 0, 1)), e.s = 0, e.clamp();
}
function IT(e, t, n) {
  var r = e.abs();
  if (!(r.t <= 0)) {
    var o = this.abs();
    if (o.t < r.t) {
      t != null && t.fromInt(0), n != null && this.copyTo(n);
      return;
    }
    n == null && (n = ft());
    var i = ft(), s = this.s, a = e.s, c = this.DB - Su(r[r.t - 1]);
    c > 0 ? (r.lShiftTo(c, i), o.lShiftTo(c, n)) : (r.copyTo(i), o.copyTo(n));
    var u = i.t, l = i[u - 1];
    if (l != 0) {
      var f = l * (1 << this.F1) + (u > 1 ? i[u - 2] >> this.F2 : 0), d = this.FV / f, p = (1 << this.F1) / f, M = 1 << this.F2, y = n.t, m = y - u, w = t ?? ft();
      for (i.dlShiftTo(m, w), n.compareTo(w) >= 0 && (n[n.t++] = 1, n.subTo(w, n)), pe.ONE.dlShiftTo(u, w), w.subTo(i, i); i.t < u; )
        i[i.t++] = 0;
      for (; --m >= 0; ) {
        var D = n[--y] == l ? this.DM : Math.floor(n[y] * d + (n[y - 1] + M) * p);
        if ((n[y] += i.am(0, D, n, m, 0, u)) < D)
          for (i.dlShiftTo(m, w), n.subTo(w, n); n[y] < --D; )
            n.subTo(w, n);
      }
      t != null && (n.drShiftTo(u, t), s != a && pe.ZERO.subTo(t, t)), n.t = u, n.clamp(), c > 0 && n.rShiftTo(c, n), s < 0 && pe.ZERO.subTo(n, n);
    }
  }
}
function AT(e) {
  var t = ft();
  return this.abs().divRemTo(e, null, t), this.s < 0 && t.compareTo(pe.ZERO) > 0 && e.subTo(t, t), t;
}
function ET() {
  if (this.t < 1)
    return 0;
  var e = this[0];
  if (!(e & 1))
    return 0;
  var t = e & 3;
  return t = t * (2 - (e & 15) * t) & 15, t = t * (2 - (e & 255) * t) & 255, t = t * (2 - ((e & 65535) * t & 65535)) & 65535, t = t * (2 - e * t % this.DV) % this.DV, t > 0 ? this.DV - t : -t;
}
function TT(e) {
  return this.compareTo(e) == 0;
}
function NT(e, t) {
  for (var n = 0, r = 0, o = Math.min(e.t, this.t); n < o; )
    r += this[n] + e[n], t[n++] = r & this.DM, r >>= this.DB;
  if (e.t < this.t) {
    for (r += e.s; n < this.t; )
      r += this[n], t[n++] = r & this.DM, r >>= this.DB;
    r += this.s;
  } else {
    for (r += this.s; n < e.t; )
      r += e[n], t[n++] = r & this.DM, r >>= this.DB;
    r += e.s;
  }
  t.s = r < 0 ? -1 : 0, r > 0 ? t[n++] = r : r < -1 && (t[n++] = this.DV + r), t.t = n, t.clamp();
}
function jT(e) {
  var t = ft();
  return this.addTo(e, t), t;
}
function bT(e) {
  var t = ft();
  return this.subTo(e, t), t;
}
function ST(e) {
  var t = ft();
  return this.multiplyTo(e, t), t;
}
function xT(e) {
  var t = ft();
  return this.divRemTo(e, t, null), t;
}
function br(e) {
  this.m = e, this.mp = e.invDigit(), this.mpl = this.mp & 32767, this.mph = this.mp >> 15, this.um = (1 << e.DB - 15) - 1, this.mt2 = 2 * e.t;
}
function CT(e) {
  var t = ft();
  return e.abs().dlShiftTo(this.m.t, t), t.divRemTo(this.m, null, t), e.s < 0 && t.compareTo(pe.ZERO) > 0 && this.m.subTo(t, t), t;
}
function OT(e) {
  var t = ft();
  return e.copyTo(t), this.reduce(t), t;
}
function LT(e) {
  for (; e.t <= this.mt2; )
    e[e.t++] = 0;
  for (var t = 0; t < this.m.t; ++t) {
    var n = e[t] & 32767, r = n * this.mpl + ((n * this.mph + (e[t] >> 15) * this.mpl & this.um) << 15) & e.DM;
    for (n = t + this.m.t, e[n] += this.m.am(0, r, e, t, 0, this.m.t); e[n] >= e.DV; )
      e[n] -= e.DV, e[++n]++;
  }
  e.clamp(), e.drShiftTo(this.m.t, e), e.compareTo(this.m) >= 0 && e.subTo(this.m, e);
}
function _T(e, t) {
  e.squareTo(t), this.reduce(t);
}
function kT(e, t, n) {
  e.multiplyTo(t, n), this.reduce(n);
}
br.prototype.convert = CT;
br.prototype.revert = OT;
br.prototype.reduce = LT;
br.prototype.mulTo = kT;
br.prototype.sqrTo = _T;
function zT(e, t, n) {
  var r = e.bitLength(), o, i = bu(1), s = new br(t);
  if (r <= 0)
    return i;
  r < 18 ? o = 1 : r < 48 ? o = 3 : r < 144 ? o = 4 : r < 768 ? o = 5 : o = 6;
  var a = new Array(), c = 3, u = o - 1, l = (1 << o) - 1;
  if (a[1] = s.convert(this), o > 1) {
    var f = ft();
    for (s.sqrTo(a[1], f); c <= l; )
      a[c] = ft(), s.mulTo(f, a[c - 2], a[c]), c += 2;
  }
  var d = e.t - 1, p, M = !0, y = ft(), m;
  for (r = Su(e[d]) - 1; d >= 0; ) {
    for (r >= u ? p = e[d] >> r - u & l : (p = (e[d] & (1 << r + 1) - 1) << u - r, d > 0 && (p |= e[d - 1] >> this.DB + r - u)), c = o; !(p & 1); )
      p >>= 1, --c;
    if ((r -= c) < 0 && (r += this.DB, --d), M)
      a[p].copyTo(i), M = !1;
    else {
      for (; c > 1; )
        s.sqrTo(i, y), s.sqrTo(y, i), c -= 2;
      c > 0 ? s.sqrTo(i, y) : (m = i, i = y, y = m), s.mulTo(y, a[p], i);
    }
    for (; d >= 0 && !(e[d] & 1 << r); )
      s.sqrTo(i, y), m = i, i = y, y = m, --r < 0 && (r = this.DB - 1, --d);
  }
  var w = s.revert(i);
  return n(null, w), w;
}
pe.prototype.copyTo = sT;
pe.prototype.fromInt = aT;
pe.prototype.fromString = uT;
pe.prototype.clamp = cT;
pe.prototype.dlShiftTo = pT;
pe.prototype.drShiftTo = MT;
pe.prototype.lShiftTo = yT;
pe.prototype.rShiftTo = mT;
pe.prototype.subTo = vT;
pe.prototype.multiplyTo = wT;
pe.prototype.squareTo = DT;
pe.prototype.divRemTo = IT;
pe.prototype.invDigit = ET;
pe.prototype.addTo = NT;
pe.prototype.toString = lT;
pe.prototype.negate = fT;
pe.prototype.abs = dT;
pe.prototype.compareTo = hT;
pe.prototype.bitLength = gT;
pe.prototype.mod = AT;
pe.prototype.equals = TT;
pe.prototype.add = jT;
pe.prototype.subtract = bT;
pe.prototype.multiply = ST;
pe.prototype.divide = xT;
pe.prototype.modPow = zT;
pe.ZERO = bu(0);
pe.ONE = bu(1);
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
function Cs(e) {
  return Be.Buffer.from(new ZE().random(e).toString(), "hex");
}
var UT = /^[89a-f]/i, PT = "FFFFFFFFFFFFFFFFC90FDAA22168C234C4C6628B80DC1CD129024E088A67CC74020BBEA63B139B22514A08798E3404DDEF9519B3CD3A431B302B0A6DF25F14374FE1356D6D51C245E485B576625E7EC6F44C42E9A637ED6B0BFF5CB6F406B7EDEE386BFB5A899FA5AE9F24117C4B1FE649286651ECE45B3DC2007CB8A163BF0598DA48361C55D39A69163FA8FD24CF5F83655D23DCA3AD961C62F356208552BB9ED529077096966D670C354E4ABC9804F1746C08CA18217C32905E462E36CE3BE39E772C180E86039B2783A2EC07A28FB5C55DF06F4C52C9DE2BCBF6955817183995497CEA956AE515D2261898FA051015728E5A8AAAC42DAD33170D04507A33A85521ABDF1CBA64ECFB850458DBEF0A8AEA71575D060C7DB3970F85A6E1E4C7ABF5AE8CDB0933D71E8C94E04A25619DCEE3D2261AD2EE6BF12FFA06D98A0864D87602733EC86A64521F2B18177B200CBBE117577A615D6C770988C0BAD946E208E24FA074E5AB3143DB5BFCE0FD108E4B82D120A93AD2CAFFFFFFFFFFFFFFFF", RT = "userAttributes.", nr = /* @__PURE__ */ function() {
  function e(n) {
    this.N = new pe(PT, 16), this.g = new pe("2", 16), this.k = new pe(this.hexHash("" + this.padHex(this.N) + this.padHex(this.g)), 16), this.smallAValue = this.generateRandomSmallA(), this.getLargeAValue(function() {
    }), this.infoBits = Be.Buffer.from("Caldera Derived Key", "utf8"), this.poolName = n;
  }
  var t = e.prototype;
  return t.getSmallAValue = function() {
    return this.smallAValue;
  }, t.getLargeAValue = function(r) {
    var o = this;
    this.largeAValue ? r(null, this.largeAValue) : this.calculateA(this.smallAValue, function(i, s) {
      i && r(i, null), o.largeAValue = s, r(null, o.largeAValue);
    });
  }, t.generateRandomSmallA = function() {
    var r = Cs(128).toString("hex"), o = new pe(r, 16);
    return o;
  }, t.generateRandomString = function() {
    return Cs(40).toString("base64");
  }, t.getRandomPassword = function() {
    return this.randomPassword;
  }, t.getSaltDevices = function() {
    return this.SaltToHashDevices;
  }, t.getVerifierDevices = function() {
    return this.verifierDevices;
  }, t.generateHashDevice = function(r, o, i) {
    var s = this;
    this.randomPassword = this.generateRandomString();
    var a = "" + r + o + ":" + this.randomPassword, c = this.hash(a), u = Cs(16).toString("hex");
    this.SaltToHashDevices = this.padHex(new pe(u, 16)), this.g.modPow(new pe(this.hexHash(this.SaltToHashDevices + c), 16), this.N, function(l, f) {
      l && i(l, null), s.verifierDevices = s.padHex(f), i(null, null);
    });
  }, t.calculateA = function(r, o) {
    var i = this;
    this.g.modPow(r, this.N, function(s, a) {
      s && o(s, null), a.mod(i.N).equals(pe.ZERO) && o(new Error("Illegal paramater. A mod N cannot be 0."), null), o(null, a);
    });
  }, t.calculateU = function(r, o) {
    this.UHexHash = this.hexHash(this.padHex(r) + this.padHex(o));
    var i = new pe(this.UHexHash, 16);
    return i;
  }, t.hash = function(r) {
    var o = new Rn.Sha256();
    o.update(r);
    var i = o.digestSync(), s = Be.Buffer.from(i).toString("hex");
    return new Array(64 - s.length).join("0") + s;
  }, t.hexHash = function(r) {
    return this.hash(Be.Buffer.from(r, "hex"));
  }, t.computehkdf = function(r, o) {
    var i = Be.Buffer.concat([this.infoBits, Be.Buffer.from(String.fromCharCode(1), "utf8")]), s = new Rn.Sha256(o);
    s.update(r);
    var a = s.digestSync(), c = new Rn.Sha256(a);
    c.update(i);
    var u = c.digestSync(), l = u, f = l.slice(0, 16);
    return f;
  }, t.getPasswordAuthenticationKey = function(r, o, i, s, a) {
    var c = this;
    if (i.mod(this.N).equals(pe.ZERO))
      throw new Error("B cannot be zero.");
    if (this.UValue = this.calculateU(this.largeAValue, i), this.UValue.equals(pe.ZERO))
      throw new Error("U cannot be zero.");
    var u = "" + this.poolName + r + ":" + o, l = this.hash(u), f = new pe(this.hexHash(this.padHex(s) + l), 16);
    this.calculateS(f, i, function(d, p) {
      d && a(d, null);
      var M = c.computehkdf(Be.Buffer.from(c.padHex(p), "hex"), Be.Buffer.from(c.padHex(c.UValue), "hex"));
      a(null, M);
    });
  }, t.calculateS = function(r, o, i) {
    var s = this;
    this.g.modPow(r, this.N, function(a, c) {
      a && i(a, null);
      var u = o.subtract(s.k.multiply(c));
      u.modPow(s.smallAValue.add(s.UValue.multiply(r)), s.N, function(l, f) {
        l && i(l, null), i(null, f.mod(s.N));
      });
    });
  }, t.getNewPasswordRequiredChallengeUserAttributePrefix = function() {
    return RT;
  }, t.padHex = function(r) {
    if (!(r instanceof pe))
      throw new Error("Not a BigInteger");
    var o = r.compareTo(pe.ZERO) < 0, i = r.abs().toString(16);
    if (i = i.length % 2 !== 0 ? "0" + i : i, i = UT.test(i) ? "00" + i : i, o) {
      var s = i.split("").map(function(c) {
        var u = ~parseInt(c, 16) & 15;
        return "0123456789ABCDEF".charAt(u);
      }).join(""), a = new pe(s, 16).add(pe.ONE);
      i = a.toString(16), i.toUpperCase().startsWith("FF8") && (i = i.substring(2));
    }
    return i;
  }, e;
}();
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
var nh = /* @__PURE__ */ function() {
  function e(n) {
    this.jwtToken = n || "", this.payload = this.decodePayload();
  }
  var t = e.prototype;
  return t.getJwtToken = function() {
    return this.jwtToken;
  }, t.getExpiration = function() {
    return this.payload.exp;
  }, t.getIssuedAt = function() {
    return this.payload.iat;
  }, t.decodePayload = function() {
    var r = this.jwtToken.split(".")[1];
    try {
      return JSON.parse(Be.Buffer.from(r, "base64").toString("utf8"));
    } catch {
      return {};
    }
  }, e;
}();
function YT(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, wa(e, t);
}
function wa(e, t) {
  return wa = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, wa(e, t);
}
var Da = /* @__PURE__ */ function(e) {
  YT(t, e);
  function t(n) {
    var r = n === void 0 ? {} : n, o = r.AccessToken;
    return e.call(this, o || "") || this;
  }
  return t;
}(nh);
function FT(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Ia(e, t);
}
function Ia(e, t) {
  return Ia = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Ia(e, t);
}
var Aa = /* @__PURE__ */ function(e) {
  FT(t, e);
  function t(n) {
    var r = n === void 0 ? {} : n, o = r.IdToken;
    return e.call(this, o || "") || this;
  }
  return t;
}(nh);
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
var Ea = /* @__PURE__ */ function() {
  function e(n) {
    var r = n === void 0 ? {} : n, o = r.RefreshToken;
    this.token = o || "";
  }
  var t = e.prototype;
  return t.getToken = function() {
    return this.token;
  }, e;
}(), QT = "5.0.4";
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
var BT = "aws-amplify/" + QT, rh = {
  userAgent: BT,
  isReactNative: typeof navigator < "u" && navigator.product === "ReactNative"
}, $T = function() {
  return rh.userAgent;
};
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
var Ta = /* @__PURE__ */ function() {
  function e(n) {
    var r = n === void 0 ? {} : n, o = r.IdToken, i = r.RefreshToken, s = r.AccessToken, a = r.ClockDrift;
    if (s == null || o == null)
      throw new Error("Id token and Access Token must be present.");
    this.idToken = o, this.refreshToken = i, this.accessToken = s, this.clockDrift = a === void 0 ? this.calculateClockDrift() : a;
  }
  var t = e.prototype;
  return t.getIdToken = function() {
    return this.idToken;
  }, t.getRefreshToken = function() {
    return this.refreshToken;
  }, t.getAccessToken = function() {
    return this.accessToken;
  }, t.getClockDrift = function() {
    return this.clockDrift;
  }, t.calculateClockDrift = function() {
    var r = Math.floor(/* @__PURE__ */ new Date() / 1e3), o = Math.min(this.accessToken.getIssuedAt(), this.idToken.getIssuedAt());
    return r - o;
  }, t.isValid = function() {
    var r = Math.floor(/* @__PURE__ */ new Date() / 1e3), o = r - this.clockDrift;
    return o < this.accessToken.getExpiration() && o < this.idToken.getExpiration();
  }, e;
}();
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
var WT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], VT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], Fl = /* @__PURE__ */ function() {
  function e() {
  }
  var t = e.prototype;
  return t.getNowString = function() {
    var r = /* @__PURE__ */ new Date(), o = VT[r.getUTCDay()], i = WT[r.getUTCMonth()], s = r.getUTCDate(), a = r.getUTCHours();
    a < 10 && (a = "0" + a);
    var c = r.getUTCMinutes();
    c < 10 && (c = "0" + c);
    var u = r.getUTCSeconds();
    u < 10 && (u = "0" + u);
    var l = r.getUTCFullYear(), f = o + " " + i + " " + s + " " + a + ":" + c + ":" + u + " UTC " + l;
    return f;
  }, e;
}();
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
var sr = /* @__PURE__ */ function() {
  function e(n) {
    var r = n === void 0 ? {} : n, o = r.Name, i = r.Value;
    this.Name = o || "", this.Value = i || "";
  }
  var t = e.prototype;
  return t.getValue = function() {
    return this.Value;
  }, t.setValue = function(r) {
    return this.Value = r, this;
  }, t.getName = function() {
    return this.Name;
  }, t.setName = function(r) {
    return this.Name = r, this;
  }, t.toString = function() {
    return JSON.stringify(this);
  }, t.toJSON = function() {
    return {
      Name: this.Name,
      Value: this.Value
    };
  }, e;
}();
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
var En = {}, HT = /* @__PURE__ */ function() {
  function e() {
  }
  return e.setItem = function(n, r) {
    return En[n] = r, En[n];
  }, e.getItem = function(n) {
    return Object.prototype.hasOwnProperty.call(En, n) ? En[n] : void 0;
  }, e.removeItem = function(n) {
    return delete En[n];
  }, e.clear = function() {
    return En = {}, En;
  }, e;
}(), ih = /* @__PURE__ */ function() {
  function e() {
    try {
      this.storageWindow = window.localStorage, this.storageWindow.setItem("aws.cognito.test-ls", 1), this.storageWindow.removeItem("aws.cognito.test-ls");
    } catch {
      this.storageWindow = HT;
    }
  }
  var t = e.prototype;
  return t.getStorage = function() {
    return this.storageWindow;
  }, e;
}();
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
var qT = typeof navigator < "u", Ql = qT ? rh.isReactNative ? "react-native" : navigator.userAgent : "nodejs", Na = /* @__PURE__ */ function() {
  function e(n) {
    if (n == null || n.Username == null || n.Pool == null)
      throw new Error("Username and Pool information are required.");
    this.username = n.Username || "", this.pool = n.Pool, this.Session = null, this.client = n.Pool.client, this.signInUserSession = null, this.authenticationFlowType = "USER_SRP_AUTH", this.storage = n.Storage || new ih().getStorage(), this.keyPrefix = "CognitoIdentityServiceProvider." + this.pool.getClientId(), this.userDataKey = this.keyPrefix + "." + this.username + ".userData";
  }
  var t = e.prototype;
  return t.setSignInUserSession = function(r) {
    this.clearCachedUserData(), this.signInUserSession = r, this.cacheTokens();
  }, t.getSignInUserSession = function() {
    return this.signInUserSession;
  }, t.getUsername = function() {
    return this.username;
  }, t.getAuthenticationFlowType = function() {
    return this.authenticationFlowType;
  }, t.setAuthenticationFlowType = function(r) {
    this.authenticationFlowType = r;
  }, t.initiateAuth = function(r, o) {
    var i = this, s = r.getAuthParameters();
    s.USERNAME = this.username;
    var a = Object.keys(r.getValidationData()).length !== 0 ? r.getValidationData() : r.getClientMetadata(), c = {
      AuthFlow: "CUSTOM_AUTH",
      ClientId: this.pool.getClientId(),
      AuthParameters: s,
      ClientMetadata: a
    };
    this.getUserContextData() && (c.UserContextData = this.getUserContextData()), this.client.request("InitiateAuth", c, function(u, l) {
      if (u)
        return o.onFailure(u);
      var f = l.ChallengeName, d = l.ChallengeParameters;
      return f === "CUSTOM_CHALLENGE" ? (i.Session = l.Session, o.customChallenge(d)) : (i.signInUserSession = i.getCognitoUserSession(l.AuthenticationResult), i.cacheTokens(), o.onSuccess(i.signInUserSession));
    });
  }, t.authenticateUser = function(r, o) {
    return this.authenticationFlowType === "USER_PASSWORD_AUTH" ? this.authenticateUserPlainUsernamePassword(r, o) : this.authenticationFlowType === "USER_SRP_AUTH" || this.authenticationFlowType === "CUSTOM_AUTH" ? this.authenticateUserDefaultAuth(r, o) : o.onFailure(new Error("Authentication flow type is invalid."));
  }, t.authenticateUserDefaultAuth = function(r, o) {
    var i = this, s = new nr(this.pool.getUserPoolName()), a = new Fl(), c, u, l = {};
    this.deviceKey != null && (l.DEVICE_KEY = this.deviceKey), l.USERNAME = this.username, s.getLargeAValue(function(f, d) {
      f && o.onFailure(f), l.SRP_A = d.toString(16), i.authenticationFlowType === "CUSTOM_AUTH" && (l.CHALLENGE_NAME = "SRP_A");
      var p = Object.keys(r.getValidationData()).length !== 0 ? r.getValidationData() : r.getClientMetadata(), M = {
        AuthFlow: i.authenticationFlowType,
        ClientId: i.pool.getClientId(),
        AuthParameters: l,
        ClientMetadata: p
      };
      i.getUserContextData(i.username) && (M.UserContextData = i.getUserContextData(i.username)), i.client.request("InitiateAuth", M, function(y, m) {
        if (y)
          return o.onFailure(y);
        var w = m.ChallengeParameters;
        i.username = w.USER_ID_FOR_SRP, i.userDataKey = i.keyPrefix + "." + i.username + ".userData", c = new pe(w.SRP_B, 16), u = new pe(w.SALT, 16), i.getCachedDeviceKeyAndPassword(), s.getPasswordAuthenticationKey(i.username, r.getPassword(), c, u, function(D, N) {
          D && o.onFailure(D);
          var E = a.getNowString(), T = Be.Buffer.concat([Be.Buffer.from(i.pool.getUserPoolName(), "utf8"), Be.Buffer.from(i.username, "utf8"), Be.Buffer.from(w.SECRET_BLOCK, "base64"), Be.Buffer.from(E, "utf8")]), F = new Rn.Sha256(N);
          F.update(T);
          var _ = F.digestSync(), G = Be.Buffer.from(_).toString("base64"), Q = {};
          Q.USERNAME = i.username, Q.PASSWORD_CLAIM_SECRET_BLOCK = w.SECRET_BLOCK, Q.TIMESTAMP = E, Q.PASSWORD_CLAIM_SIGNATURE = G, i.deviceKey != null && (Q.DEVICE_KEY = i.deviceKey);
          var K = function re(U, j) {
            return i.client.request("RespondToAuthChallenge", U, function(C, V) {
              return C && C.code === "ResourceNotFoundException" && C.message.toLowerCase().indexOf("device") !== -1 ? (Q.DEVICE_KEY = null, i.deviceKey = null, i.randomPassword = null, i.deviceGroupKey = null, i.clearCachedDeviceKeyAndPassword(), re(U, j)) : j(C, V);
            });
          }, Z = {
            ChallengeName: "PASSWORD_VERIFIER",
            ClientId: i.pool.getClientId(),
            ChallengeResponses: Q,
            Session: m.Session,
            ClientMetadata: p
          };
          i.getUserContextData() && (Z.UserContextData = i.getUserContextData()), K(Z, function(re, U) {
            return re ? o.onFailure(re) : i.authenticateUserInternal(U, s, o);
          });
        });
      });
    });
  }, t.authenticateUserPlainUsernamePassword = function(r, o) {
    var i = this, s = {};
    if (s.USERNAME = this.username, s.PASSWORD = r.getPassword(), !s.PASSWORD) {
      o.onFailure(new Error("PASSWORD parameter is required"));
      return;
    }
    var a = new nr(this.pool.getUserPoolName());
    this.getCachedDeviceKeyAndPassword(), this.deviceKey != null && (s.DEVICE_KEY = this.deviceKey);
    var c = Object.keys(r.getValidationData()).length !== 0 ? r.getValidationData() : r.getClientMetadata(), u = {
      AuthFlow: "USER_PASSWORD_AUTH",
      ClientId: this.pool.getClientId(),
      AuthParameters: s,
      ClientMetadata: c
    };
    this.getUserContextData(this.username) && (u.UserContextData = this.getUserContextData(this.username)), this.client.request("InitiateAuth", u, function(l, f) {
      return l ? o.onFailure(l) : i.authenticateUserInternal(f, a, o);
    });
  }, t.authenticateUserInternal = function(r, o, i) {
    var s = this, a = r.ChallengeName, c = r.ChallengeParameters;
    if (a === "SMS_MFA")
      return this.Session = r.Session, i.mfaRequired(a, c);
    if (a === "SELECT_MFA_TYPE")
      return this.Session = r.Session, i.selectMFAType(a, c);
    if (a === "MFA_SETUP")
      return this.Session = r.Session, i.mfaSetup(a, c);
    if (a === "SOFTWARE_TOKEN_MFA")
      return this.Session = r.Session, i.totpRequired(a, c);
    if (a === "CUSTOM_CHALLENGE")
      return this.Session = r.Session, i.customChallenge(c);
    if (a === "NEW_PASSWORD_REQUIRED") {
      this.Session = r.Session;
      var u = null, l = null, f = [], d = o.getNewPasswordRequiredChallengeUserAttributePrefix();
      if (c && (u = JSON.parse(r.ChallengeParameters.userAttributes), l = JSON.parse(r.ChallengeParameters.requiredAttributes)), l)
        for (var p = 0; p < l.length; p++)
          f[p] = l[p].substr(d.length);
      return i.newPasswordRequired(u, f);
    }
    if (a === "DEVICE_SRP_AUTH") {
      this.Session = r.Session, this.getDeviceResponse(i);
      return;
    }
    this.signInUserSession = this.getCognitoUserSession(r.AuthenticationResult), this.challengeName = a, this.cacheTokens();
    var M = r.AuthenticationResult.NewDeviceMetadata;
    if (M == null)
      return i.onSuccess(this.signInUserSession);
    o.generateHashDevice(r.AuthenticationResult.NewDeviceMetadata.DeviceGroupKey, r.AuthenticationResult.NewDeviceMetadata.DeviceKey, function(y) {
      if (y)
        return i.onFailure(y);
      var m = {
        Salt: Be.Buffer.from(o.getSaltDevices(), "hex").toString("base64"),
        PasswordVerifier: Be.Buffer.from(o.getVerifierDevices(), "hex").toString("base64")
      };
      s.verifierDevices = m.PasswordVerifier, s.deviceGroupKey = M.DeviceGroupKey, s.randomPassword = o.getRandomPassword(), s.client.request("ConfirmDevice", {
        DeviceKey: M.DeviceKey,
        AccessToken: s.signInUserSession.getAccessToken().getJwtToken(),
        DeviceSecretVerifierConfig: m,
        DeviceName: Ql
      }, function(w, D) {
        return w ? i.onFailure(w) : (s.deviceKey = r.AuthenticationResult.NewDeviceMetadata.DeviceKey, s.cacheDeviceKeyAndPassword(), D.UserConfirmationNecessary === !0 ? i.onSuccess(s.signInUserSession, D.UserConfirmationNecessary) : i.onSuccess(s.signInUserSession));
      });
    });
  }, t.completeNewPasswordChallenge = function(r, o, i, s) {
    var a = this;
    if (!r)
      return i.onFailure(new Error("New password is required."));
    var c = new nr(this.pool.getUserPoolName()), u = c.getNewPasswordRequiredChallengeUserAttributePrefix(), l = {};
    o && Object.keys(o).forEach(function(d) {
      l[u + d] = o[d];
    }), l.NEW_PASSWORD = r, l.USERNAME = this.username;
    var f = {
      ChallengeName: "NEW_PASSWORD_REQUIRED",
      ClientId: this.pool.getClientId(),
      ChallengeResponses: l,
      Session: this.Session,
      ClientMetadata: s
    };
    this.getUserContextData() && (f.UserContextData = this.getUserContextData()), this.client.request("RespondToAuthChallenge", f, function(d, p) {
      return d ? i.onFailure(d) : a.authenticateUserInternal(p, c, i);
    });
  }, t.getDeviceResponse = function(r, o) {
    var i = this, s = new nr(this.deviceGroupKey), a = new Fl(), c = {};
    c.USERNAME = this.username, c.DEVICE_KEY = this.deviceKey, s.getLargeAValue(function(u, l) {
      u && r.onFailure(u), c.SRP_A = l.toString(16);
      var f = {
        ChallengeName: "DEVICE_SRP_AUTH",
        ClientId: i.pool.getClientId(),
        ChallengeResponses: c,
        ClientMetadata: o,
        Session: i.Session
      };
      i.getUserContextData() && (f.UserContextData = i.getUserContextData()), i.client.request("RespondToAuthChallenge", f, function(d, p) {
        if (d)
          return r.onFailure(d);
        var M = p.ChallengeParameters, y = new pe(M.SRP_B, 16), m = new pe(M.SALT, 16);
        s.getPasswordAuthenticationKey(i.deviceKey, i.randomPassword, y, m, function(w, D) {
          if (w)
            return r.onFailure(w);
          var N = a.getNowString(), E = Be.Buffer.concat([Be.Buffer.from(i.deviceGroupKey, "utf8"), Be.Buffer.from(i.deviceKey, "utf8"), Be.Buffer.from(M.SECRET_BLOCK, "base64"), Be.Buffer.from(N, "utf8")]), T = new Rn.Sha256(D);
          T.update(E);
          var F = T.digestSync(), _ = Be.Buffer.from(F).toString("base64"), G = {};
          G.USERNAME = i.username, G.PASSWORD_CLAIM_SECRET_BLOCK = M.SECRET_BLOCK, G.TIMESTAMP = N, G.PASSWORD_CLAIM_SIGNATURE = _, G.DEVICE_KEY = i.deviceKey;
          var Q = {
            ChallengeName: "DEVICE_PASSWORD_VERIFIER",
            ClientId: i.pool.getClientId(),
            ChallengeResponses: G,
            Session: p.Session
          };
          i.getUserContextData() && (Q.UserContextData = i.getUserContextData()), i.client.request("RespondToAuthChallenge", Q, function(K, Z) {
            return K ? r.onFailure(K) : (i.signInUserSession = i.getCognitoUserSession(Z.AuthenticationResult), i.cacheTokens(), r.onSuccess(i.signInUserSession));
          });
        });
      });
    });
  }, t.confirmRegistration = function(r, o, i, s) {
    var a = {
      ClientId: this.pool.getClientId(),
      ConfirmationCode: r,
      Username: this.username,
      ForceAliasCreation: o,
      ClientMetadata: s
    };
    this.getUserContextData() && (a.UserContextData = this.getUserContextData()), this.client.request("ConfirmSignUp", a, function(c) {
      return c ? i(c, null) : i(null, "SUCCESS");
    });
  }, t.sendCustomChallengeAnswer = function(r, o, i) {
    var s = this, a = {};
    a.USERNAME = this.username, a.ANSWER = r;
    var c = new nr(this.pool.getUserPoolName());
    this.getCachedDeviceKeyAndPassword(), this.deviceKey != null && (a.DEVICE_KEY = this.deviceKey);
    var u = {
      ChallengeName: "CUSTOM_CHALLENGE",
      ChallengeResponses: a,
      ClientId: this.pool.getClientId(),
      Session: this.Session,
      ClientMetadata: i
    };
    this.getUserContextData() && (u.UserContextData = this.getUserContextData()), this.client.request("RespondToAuthChallenge", u, function(l, f) {
      return l ? o.onFailure(l) : s.authenticateUserInternal(f, c, o);
    });
  }, t.sendMFACode = function(r, o, i, s) {
    var a = this, c = {};
    c.USERNAME = this.username, c.SMS_MFA_CODE = r;
    var u = i || "SMS_MFA";
    u === "SOFTWARE_TOKEN_MFA" && (c.SOFTWARE_TOKEN_MFA_CODE = r), this.deviceKey != null && (c.DEVICE_KEY = this.deviceKey);
    var l = {
      ChallengeName: u,
      ChallengeResponses: c,
      ClientId: this.pool.getClientId(),
      Session: this.Session,
      ClientMetadata: s
    };
    this.getUserContextData() && (l.UserContextData = this.getUserContextData()), this.client.request("RespondToAuthChallenge", l, function(f, d) {
      if (f)
        return o.onFailure(f);
      var p = d.ChallengeName;
      if (p === "DEVICE_SRP_AUTH") {
        a.getDeviceResponse(o);
        return;
      }
      if (a.signInUserSession = a.getCognitoUserSession(d.AuthenticationResult), a.cacheTokens(), d.AuthenticationResult.NewDeviceMetadata == null)
        return o.onSuccess(a.signInUserSession);
      var M = new nr(a.pool.getUserPoolName());
      M.generateHashDevice(d.AuthenticationResult.NewDeviceMetadata.DeviceGroupKey, d.AuthenticationResult.NewDeviceMetadata.DeviceKey, function(y) {
        if (y)
          return o.onFailure(y);
        var m = {
          Salt: Be.Buffer.from(M.getSaltDevices(), "hex").toString("base64"),
          PasswordVerifier: Be.Buffer.from(M.getVerifierDevices(), "hex").toString("base64")
        };
        a.verifierDevices = m.PasswordVerifier, a.deviceGroupKey = d.AuthenticationResult.NewDeviceMetadata.DeviceGroupKey, a.randomPassword = M.getRandomPassword(), a.client.request("ConfirmDevice", {
          DeviceKey: d.AuthenticationResult.NewDeviceMetadata.DeviceKey,
          AccessToken: a.signInUserSession.getAccessToken().getJwtToken(),
          DeviceSecretVerifierConfig: m,
          DeviceName: Ql
        }, function(w, D) {
          return w ? o.onFailure(w) : (a.deviceKey = d.AuthenticationResult.NewDeviceMetadata.DeviceKey, a.cacheDeviceKeyAndPassword(), D.UserConfirmationNecessary === !0 ? o.onSuccess(a.signInUserSession, D.UserConfirmationNecessary) : o.onSuccess(a.signInUserSession));
        });
      });
    });
  }, t.changePassword = function(r, o, i, s) {
    if (!(this.signInUserSession != null && this.signInUserSession.isValid()))
      return i(new Error("User is not authenticated"), null);
    this.client.request("ChangePassword", {
      PreviousPassword: r,
      ProposedPassword: o,
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
      ClientMetadata: s
    }, function(a) {
      return a ? i(a, null) : i(null, "SUCCESS");
    });
  }, t.enableMFA = function(r) {
    if (this.signInUserSession == null || !this.signInUserSession.isValid())
      return r(new Error("User is not authenticated"), null);
    var o = [], i = {
      DeliveryMedium: "SMS",
      AttributeName: "phone_number"
    };
    o.push(i), this.client.request("SetUserSettings", {
      MFAOptions: o,
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
    }, function(s) {
      return s ? r(s, null) : r(null, "SUCCESS");
    });
  }, t.setUserMfaPreference = function(r, o, i) {
    if (this.signInUserSession == null || !this.signInUserSession.isValid())
      return i(new Error("User is not authenticated"), null);
    this.client.request("SetUserMFAPreference", {
      SMSMfaSettings: r,
      SoftwareTokenMfaSettings: o,
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
    }, function(s) {
      return s ? i(s, null) : i(null, "SUCCESS");
    });
  }, t.disableMFA = function(r) {
    if (this.signInUserSession == null || !this.signInUserSession.isValid())
      return r(new Error("User is not authenticated"), null);
    var o = [];
    this.client.request("SetUserSettings", {
      MFAOptions: o,
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
    }, function(i) {
      return i ? r(i, null) : r(null, "SUCCESS");
    });
  }, t.deleteUser = function(r, o) {
    var i = this;
    if (this.signInUserSession == null || !this.signInUserSession.isValid())
      return r(new Error("User is not authenticated"), null);
    this.client.request("DeleteUser", {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
      ClientMetadata: o
    }, function(s) {
      return s ? r(s, null) : (i.clearCachedUser(), r(null, "SUCCESS"));
    });
  }, t.updateAttributes = function(r, o, i) {
    var s = this;
    if (this.signInUserSession == null || !this.signInUserSession.isValid())
      return o(new Error("User is not authenticated"), null);
    this.client.request("UpdateUserAttributes", {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
      UserAttributes: r,
      ClientMetadata: i
    }, function(a, c) {
      return a ? o(a, null) : s.getUserData(function() {
        return o(null, "SUCCESS", c);
      }, {
        bypassCache: !0
      });
    });
  }, t.getUserAttributes = function(r) {
    if (!(this.signInUserSession != null && this.signInUserSession.isValid()))
      return r(new Error("User is not authenticated"), null);
    this.client.request("GetUser", {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
    }, function(o, i) {
      if (o)
        return r(o, null);
      for (var s = [], a = 0; a < i.UserAttributes.length; a++) {
        var c = {
          Name: i.UserAttributes[a].Name,
          Value: i.UserAttributes[a].Value
        }, u = new sr(c);
        s.push(u);
      }
      return r(null, s);
    });
  }, t.getMFAOptions = function(r) {
    if (!(this.signInUserSession != null && this.signInUserSession.isValid()))
      return r(new Error("User is not authenticated"), null);
    this.client.request("GetUser", {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
    }, function(o, i) {
      return o ? r(o, null) : r(null, i.MFAOptions);
    });
  }, t.createGetUserRequest = function() {
    return this.client.promisifyRequest("GetUser", {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
    });
  }, t.refreshSessionIfPossible = function(r) {
    var o = this;
    return r === void 0 && (r = {}), new Promise(function(i) {
      var s = o.signInUserSession.getRefreshToken();
      s && s.getToken() ? o.refreshSession(s, i, r.clientMetadata) : i();
    });
  }, t.getUserData = function(r, o) {
    var i = this;
    if (!(this.signInUserSession != null && this.signInUserSession.isValid()))
      return this.clearCachedUserData(), r(new Error("User is not authenticated"), null);
    var s = this.getUserDataFromCache();
    if (!s) {
      this.fetchUserData().then(function(a) {
        r(null, a);
      }).catch(r);
      return;
    }
    if (this.isFetchUserDataAndTokenRequired(o)) {
      this.fetchUserData().then(function(a) {
        return i.refreshSessionIfPossible(o).then(function() {
          return a;
        });
      }).then(function(a) {
        return r(null, a);
      }).catch(r);
      return;
    }
    try {
      r(null, JSON.parse(s));
      return;
    } catch (a) {
      this.clearCachedUserData(), r(a, null);
      return;
    }
  }, t.getUserDataFromCache = function() {
    var r = this.storage.getItem(this.userDataKey);
    return r;
  }, t.isFetchUserDataAndTokenRequired = function(r) {
    var o = r || {}, i = o.bypassCache, s = i === void 0 ? !1 : i;
    return s;
  }, t.fetchUserData = function() {
    var r = this;
    return this.createGetUserRequest().then(function(o) {
      return r.cacheUserData(o), o;
    });
  }, t.deleteAttributes = function(r, o) {
    var i = this;
    if (!(this.signInUserSession != null && this.signInUserSession.isValid()))
      return o(new Error("User is not authenticated"), null);
    this.client.request("DeleteUserAttributes", {
      UserAttributeNames: r,
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
    }, function(s) {
      return s ? o(s, null) : i.getUserData(function() {
        return o(null, "SUCCESS");
      }, {
        bypassCache: !0
      });
    });
  }, t.resendConfirmationCode = function(r, o) {
    var i = {
      ClientId: this.pool.getClientId(),
      Username: this.username,
      ClientMetadata: o
    };
    this.client.request("ResendConfirmationCode", i, function(s, a) {
      return s ? r(s, null) : r(null, a);
    });
  }, t.getSession = function(r, o) {
    if (o === void 0 && (o = {}), this.username == null)
      return r(new Error("Username is null. Cannot retrieve a new session"), null);
    if (this.signInUserSession != null && this.signInUserSession.isValid())
      return r(null, this.signInUserSession);
    var i = "CognitoIdentityServiceProvider." + this.pool.getClientId() + "." + this.username, s = i + ".idToken", a = i + ".accessToken", c = i + ".refreshToken", u = i + ".clockDrift";
    if (this.storage.getItem(s)) {
      var l = new Aa({
        IdToken: this.storage.getItem(s)
      }), f = new Da({
        AccessToken: this.storage.getItem(a)
      }), d = new Ea({
        RefreshToken: this.storage.getItem(c)
      }), p = parseInt(this.storage.getItem(u), 0) || 0, M = {
        IdToken: l,
        AccessToken: f,
        RefreshToken: d,
        ClockDrift: p
      }, y = new Ta(M);
      if (y.isValid())
        return this.signInUserSession = y, r(null, this.signInUserSession);
      if (!d.getToken())
        return r(new Error("Cannot retrieve a new session. Please authenticate."), null);
      this.refreshSession(d, r, o.clientMetadata);
    } else
      r(new Error("Local storage is missing an ID Token, Please authenticate"), null);
  }, t.refreshSession = function(r, o, i) {
    var s = this, a = this.pool.wrapRefreshSessionCallback ? this.pool.wrapRefreshSessionCallback(o) : o, c = {};
    c.REFRESH_TOKEN = r.getToken();
    var u = "CognitoIdentityServiceProvider." + this.pool.getClientId(), l = u + ".LastAuthUser";
    if (this.storage.getItem(l)) {
      this.username = this.storage.getItem(l);
      var f = u + "." + this.username + ".deviceKey";
      this.deviceKey = this.storage.getItem(f), c.DEVICE_KEY = this.deviceKey;
    }
    var d = {
      ClientId: this.pool.getClientId(),
      AuthFlow: "REFRESH_TOKEN_AUTH",
      AuthParameters: c,
      ClientMetadata: i
    };
    this.getUserContextData() && (d.UserContextData = this.getUserContextData()), this.client.request("InitiateAuth", d, function(p, M) {
      if (p)
        return p.code === "NotAuthorizedException" && s.clearCachedUser(), a(p, null);
      if (M) {
        var y = M.AuthenticationResult;
        return Object.prototype.hasOwnProperty.call(y, "RefreshToken") || (y.RefreshToken = r.getToken()), s.signInUserSession = s.getCognitoUserSession(y), s.cacheTokens(), a(null, s.signInUserSession);
      }
    });
  }, t.cacheTokens = function() {
    var r = "CognitoIdentityServiceProvider." + this.pool.getClientId(), o = r + "." + this.username + ".idToken", i = r + "." + this.username + ".accessToken", s = r + "." + this.username + ".refreshToken", a = r + "." + this.username + ".clockDrift", c = r + ".LastAuthUser";
    this.storage.setItem(o, this.signInUserSession.getIdToken().getJwtToken()), this.storage.setItem(i, this.signInUserSession.getAccessToken().getJwtToken()), this.storage.setItem(s, this.signInUserSession.getRefreshToken().getToken()), this.storage.setItem(a, "" + this.signInUserSession.getClockDrift()), this.storage.setItem(c, this.username);
  }, t.cacheUserData = function(r) {
    this.storage.setItem(this.userDataKey, JSON.stringify(r));
  }, t.clearCachedUserData = function() {
    this.storage.removeItem(this.userDataKey);
  }, t.clearCachedUser = function() {
    this.clearCachedTokens(), this.clearCachedUserData();
  }, t.cacheDeviceKeyAndPassword = function() {
    var r = "CognitoIdentityServiceProvider." + this.pool.getClientId() + "." + this.username, o = r + ".deviceKey", i = r + ".randomPasswordKey", s = r + ".deviceGroupKey";
    this.storage.setItem(o, this.deviceKey), this.storage.setItem(i, this.randomPassword), this.storage.setItem(s, this.deviceGroupKey);
  }, t.getCachedDeviceKeyAndPassword = function() {
    var r = "CognitoIdentityServiceProvider." + this.pool.getClientId() + "." + this.username, o = r + ".deviceKey", i = r + ".randomPasswordKey", s = r + ".deviceGroupKey";
    this.storage.getItem(o) && (this.deviceKey = this.storage.getItem(o), this.randomPassword = this.storage.getItem(i), this.deviceGroupKey = this.storage.getItem(s));
  }, t.clearCachedDeviceKeyAndPassword = function() {
    var r = "CognitoIdentityServiceProvider." + this.pool.getClientId() + "." + this.username, o = r + ".deviceKey", i = r + ".randomPasswordKey", s = r + ".deviceGroupKey";
    this.storage.removeItem(o), this.storage.removeItem(i), this.storage.removeItem(s);
  }, t.clearCachedTokens = function() {
    var r = "CognitoIdentityServiceProvider." + this.pool.getClientId(), o = r + "." + this.username + ".idToken", i = r + "." + this.username + ".accessToken", s = r + "." + this.username + ".refreshToken", a = r + ".LastAuthUser", c = r + "." + this.username + ".clockDrift";
    this.storage.removeItem(o), this.storage.removeItem(i), this.storage.removeItem(s), this.storage.removeItem(a), this.storage.removeItem(c);
  }, t.getCognitoUserSession = function(r) {
    var o = new Aa(r), i = new Da(r), s = new Ea(r), a = {
      IdToken: o,
      AccessToken: i,
      RefreshToken: s
    };
    return new Ta(a);
  }, t.forgotPassword = function(r, o) {
    var i = {
      ClientId: this.pool.getClientId(),
      Username: this.username,
      ClientMetadata: o
    };
    this.getUserContextData() && (i.UserContextData = this.getUserContextData()), this.client.request("ForgotPassword", i, function(s, a) {
      return s ? r.onFailure(s) : typeof r.inputVerificationCode == "function" ? r.inputVerificationCode(a) : r.onSuccess(a);
    });
  }, t.confirmPassword = function(r, o, i, s) {
    var a = {
      ClientId: this.pool.getClientId(),
      Username: this.username,
      ConfirmationCode: r,
      Password: o,
      ClientMetadata: s
    };
    this.getUserContextData() && (a.UserContextData = this.getUserContextData()), this.client.request("ConfirmForgotPassword", a, function(c) {
      return c ? i.onFailure(c) : i.onSuccess("SUCCESS");
    });
  }, t.getAttributeVerificationCode = function(r, o, i) {
    if (this.signInUserSession == null || !this.signInUserSession.isValid())
      return o.onFailure(new Error("User is not authenticated"));
    this.client.request("GetUserAttributeVerificationCode", {
      AttributeName: r,
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
      ClientMetadata: i
    }, function(s, a) {
      return s ? o.onFailure(s) : typeof o.inputVerificationCode == "function" ? o.inputVerificationCode(a) : o.onSuccess("SUCCESS");
    });
  }, t.verifyAttribute = function(r, o, i) {
    if (this.signInUserSession == null || !this.signInUserSession.isValid())
      return i.onFailure(new Error("User is not authenticated"));
    this.client.request("VerifyUserAttribute", {
      AttributeName: r,
      Code: o,
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
    }, function(s) {
      return s ? i.onFailure(s) : i.onSuccess("SUCCESS");
    });
  }, t.getDevice = function(r) {
    if (this.signInUserSession == null || !this.signInUserSession.isValid())
      return r.onFailure(new Error("User is not authenticated"));
    this.client.request("GetDevice", {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
      DeviceKey: this.deviceKey
    }, function(o, i) {
      return o ? r.onFailure(o) : r.onSuccess(i);
    });
  }, t.forgetSpecificDevice = function(r, o) {
    if (this.signInUserSession == null || !this.signInUserSession.isValid())
      return o.onFailure(new Error("User is not authenticated"));
    this.client.request("ForgetDevice", {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
      DeviceKey: r
    }, function(i) {
      return i ? o.onFailure(i) : o.onSuccess("SUCCESS");
    });
  }, t.forgetDevice = function(r) {
    var o = this;
    this.forgetSpecificDevice(this.deviceKey, {
      onFailure: r.onFailure,
      onSuccess: function(s) {
        return o.deviceKey = null, o.deviceGroupKey = null, o.randomPassword = null, o.clearCachedDeviceKeyAndPassword(), r.onSuccess(s);
      }
    });
  }, t.setDeviceStatusRemembered = function(r) {
    if (this.signInUserSession == null || !this.signInUserSession.isValid())
      return r.onFailure(new Error("User is not authenticated"));
    this.client.request("UpdateDeviceStatus", {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
      DeviceKey: this.deviceKey,
      DeviceRememberedStatus: "remembered"
    }, function(o) {
      return o ? r.onFailure(o) : r.onSuccess("SUCCESS");
    });
  }, t.setDeviceStatusNotRemembered = function(r) {
    if (this.signInUserSession == null || !this.signInUserSession.isValid())
      return r.onFailure(new Error("User is not authenticated"));
    this.client.request("UpdateDeviceStatus", {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
      DeviceKey: this.deviceKey,
      DeviceRememberedStatus: "not_remembered"
    }, function(o) {
      return o ? r.onFailure(o) : r.onSuccess("SUCCESS");
    });
  }, t.listDevices = function(r, o, i) {
    if (this.signInUserSession == null || !this.signInUserSession.isValid())
      return i.onFailure(new Error("User is not authenticated"));
    var s = {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
      Limit: r
    };
    o && (s.PaginationToken = o), this.client.request("ListDevices", s, function(a, c) {
      return a ? i.onFailure(a) : i.onSuccess(c);
    });
  }, t.globalSignOut = function(r) {
    var o = this;
    if (this.signInUserSession == null || !this.signInUserSession.isValid())
      return r.onFailure(new Error("User is not authenticated"));
    this.client.request("GlobalSignOut", {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
    }, function(i) {
      return i ? r.onFailure(i) : (o.clearCachedUser(), r.onSuccess("SUCCESS"));
    });
  }, t.signOut = function(r) {
    var o = this;
    if (!r || typeof r != "function") {
      this.cleanClientData();
      return;
    }
    this.getSession(function(i, s) {
      if (i)
        return r(i);
      o.revokeTokens(function(a) {
        o.cleanClientData(), r(a);
      });
    });
  }, t.revokeTokens = function(r) {
    if (r === void 0 && (r = function() {
    }), typeof r != "function")
      throw new Error("Invalid revokeTokenCallback. It should be a function.");
    if (!this.signInUserSession) {
      var o = new Error("User is not authenticated");
      return r(o);
    }
    if (!this.signInUserSession.getAccessToken()) {
      var i = new Error("No Access token available");
      return r(i);
    }
    var s = this.signInUserSession.getRefreshToken().getToken(), a = this.signInUserSession.getAccessToken();
    if (this.isSessionRevocable(a) && s)
      return this.revokeToken({
        token: s,
        callback: r
      });
    r();
  }, t.isSessionRevocable = function(r) {
    if (r && typeof r.decodePayload == "function")
      try {
        var o = r.decodePayload(), i = o.origin_jti;
        return !!i;
      } catch {
      }
    return !1;
  }, t.cleanClientData = function() {
    this.signInUserSession = null, this.clearCachedUser();
  }, t.revokeToken = function(r) {
    var o = r.token, i = r.callback;
    this.client.requestWithRetry("RevokeToken", {
      Token: o,
      ClientId: this.pool.getClientId()
    }, function(s) {
      if (s)
        return i(s);
      i();
    });
  }, t.sendMFASelectionAnswer = function(r, o) {
    var i = this, s = {};
    s.USERNAME = this.username, s.ANSWER = r;
    var a = {
      ChallengeName: "SELECT_MFA_TYPE",
      ChallengeResponses: s,
      ClientId: this.pool.getClientId(),
      Session: this.Session
    };
    this.getUserContextData() && (a.UserContextData = this.getUserContextData()), this.client.request("RespondToAuthChallenge", a, function(c, u) {
      if (c)
        return o.onFailure(c);
      if (i.Session = u.Session, r === "SMS_MFA")
        return o.mfaRequired(u.ChallengeName, u.ChallengeParameters);
      if (r === "SOFTWARE_TOKEN_MFA")
        return o.totpRequired(u.ChallengeName, u.ChallengeParameters);
    });
  }, t.getUserContextData = function() {
    var r = this.pool;
    return r.getUserContextData(this.username);
  }, t.associateSoftwareToken = function(r) {
    var o = this;
    this.signInUserSession != null && this.signInUserSession.isValid() ? this.client.request("AssociateSoftwareToken", {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken()
    }, function(i, s) {
      return i ? r.onFailure(i) : r.associateSecretCode(s.SecretCode);
    }) : this.client.request("AssociateSoftwareToken", {
      Session: this.Session
    }, function(i, s) {
      return i ? r.onFailure(i) : (o.Session = s.Session, r.associateSecretCode(s.SecretCode));
    });
  }, t.verifySoftwareToken = function(r, o, i) {
    var s = this;
    this.signInUserSession != null && this.signInUserSession.isValid() ? this.client.request("VerifySoftwareToken", {
      AccessToken: this.signInUserSession.getAccessToken().getJwtToken(),
      UserCode: r,
      FriendlyDeviceName: o
    }, function(a, c) {
      return a ? i.onFailure(a) : i.onSuccess(c);
    }) : this.client.request("VerifySoftwareToken", {
      Session: this.Session,
      UserCode: r,
      FriendlyDeviceName: o
    }, function(a, c) {
      if (a)
        return i.onFailure(a);
      s.Session = c.Session;
      var u = {};
      u.USERNAME = s.username;
      var l = {
        ChallengeName: "MFA_SETUP",
        ClientId: s.pool.getClientId(),
        ChallengeResponses: u,
        Session: s.Session
      };
      s.getUserContextData() && (l.UserContextData = s.getUserContextData()), s.client.request("RespondToAuthChallenge", l, function(f, d) {
        return f ? i.onFailure(f) : (s.signInUserSession = s.getCognitoUserSession(d.AuthenticationResult), s.cacheTokens(), i.onSuccess(s.signInUserSession));
      });
    });
  }, e;
}(), KT = "auth";
function hn() {
}
hn.prototype.userAgent = $T();
var GT = function() {
  hn.category = KT;
}, Bl = function(t) {
  hn.framework = t;
}, JT = function(t) {
  var n = hn.category ? " " + hn.category : "", r = hn.framework ? " framework/" + hn.framework : "", o = "" + hn.prototype.userAgent + n + r;
  return o;
};
function XT(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, gi(e, t);
}
function ja(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return ja = function(r) {
    if (r === null || !eN(r))
      return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(r))
        return t.get(r);
      t.set(r, o);
    }
    function o() {
      return Gi(r, arguments, ba(this).constructor);
    }
    return o.prototype = Object.create(r.prototype, { constructor: { value: o, enumerable: !1, writable: !0, configurable: !0 } }), gi(o, r);
  }, ja(e);
}
function Gi(e, t, n) {
  return ZT() ? Gi = Reflect.construct.bind() : Gi = function(o, i, s) {
    var a = [null];
    a.push.apply(a, i);
    var c = Function.bind.apply(o, a), u = new c();
    return s && gi(u, s.prototype), u;
  }, Gi.apply(null, arguments);
}
function ZT() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function eN(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function gi(e, t) {
  return gi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, gi(e, t);
}
function ba(e) {
  return ba = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ba(e);
}
var tN = /* @__PURE__ */ function(e) {
  XT(t, e);
  function t(n, r, o, i) {
    var s;
    return s = e.call(this, n) || this, s.code = r, s.name = o, s.statusCode = i, s;
  }
  return t;
}(/* @__PURE__ */ ja(Error)), nN = /* @__PURE__ */ function() {
  function e(n, r, o) {
    this.endpoint = r || "https://cognito-idp." + n + ".amazonaws.com/";
    var i = o || {}, s = i.credentials;
    this.fetchOptions = s ? {
      credentials: s
    } : {};
  }
  var t = e.prototype;
  return t.promisifyRequest = function(r, o) {
    var i = this;
    return new Promise(function(s, a) {
      i.request(r, o, function(c, u) {
        c ? a(new tN(c.message, c.code, c.name, c.statusCode)) : s(u);
      });
    });
  }, t.requestWithRetry = function(r, o, i) {
    var s = this, a = 5 * 1e3;
    sN(function(c) {
      return new Promise(function(u, l) {
        s.request(r, c, function(f, d) {
          f ? l(f) : u(d);
        });
      });
    }, [o], a).then(function(c) {
      return i(null, c);
    }).catch(function(c) {
      return i(c);
    });
  }, t.request = function(r, o, i) {
    var s = {
      "Content-Type": "application/x-amz-json-1.1",
      "X-Amz-Target": "AWSCognitoIdentityProviderService." + r,
      "X-Amz-User-Agent": JT(),
      "Cache-Control": "no-store"
    }, a = Object.assign({}, this.fetchOptions, {
      headers: s,
      method: "POST",
      mode: "cors",
      body: JSON.stringify(o)
    }), c;
    fetch(this.endpoint, a).then(function(u) {
      return c = u, u;
    }, function(u) {
      throw u instanceof TypeError ? new Error("Network error") : u;
    }).then(function(u) {
      return u.json().catch(function() {
        return {};
      });
    }).then(function(u) {
      if (c.ok)
        return i(null, u);
      var l = (u.__type || u.code).split("#").pop(), f = new Error(u.message || u.Message || null);
      return f.name = l, f.code = l, i(f);
    }).catch(function(u) {
      if (c && c.headers && c.headers.get("x-amzn-errortype"))
        try {
          var l = c.headers.get("x-amzn-errortype").split(":")[0], f = new Error(c.status ? c.status.toString() : null);
          return f.code = l, f.name = l, f.statusCode = c.status, i(f);
        } catch {
          return i(u);
        }
      else
        u instanceof Error && u.message === "Network error" && (u.code = "NetworkError");
      return i(u);
    });
  }, e;
}(), Pi = {
  debug: function() {
  }
}, rN = function(t) {
  var n = "nonRetryable";
  return t && t[n];
};
function oh(e, t, n, r) {
  if (r === void 0 && (r = 1), typeof e != "function")
    throw Error("functionToRetry must be a function");
  return Pi.debug(e.name + " attempt #" + r + " with args: " + JSON.stringify(t)), e.apply(void 0, t).catch(function(o) {
    if (Pi.debug("error on " + e.name, o), rN(o))
      throw Pi.debug(e.name + " non retryable error", o), o;
    var i = n(r, t, o);
    if (Pi.debug(e.name + " retrying in " + i + " ms"), i !== !1)
      return new Promise(function(s) {
        return setTimeout(s, i);
      }).then(function() {
        return oh(e, t, n, r + 1);
      });
    throw o;
  });
}
function iN(e) {
  var t = 100, n = 100;
  return function(r) {
    var o = Math.pow(2, r) * t + n * Math.random();
    return o > e ? !1 : o;
  };
}
var oN = 5 * 60 * 1e3;
function sN(e, t, n) {
  return n === void 0 && (n = oN), oh(e, t, iN(n));
}
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
var aN = 55, uN = /* @__PURE__ */ function() {
  function e(n, r) {
    var o = n || {}, i = o.UserPoolId, s = o.ClientId, a = o.endpoint, c = o.fetchOptions, u = o.AdvancedSecurityDataCollectionFlag;
    if (!i || !s)
      throw new Error("Both UserPoolId and ClientId are required.");
    if (i.length > aN || !/^[\w-]+_[0-9a-zA-Z]+$/.test(i))
      throw new Error("Invalid UserPoolId format.");
    var l = i.split("_")[0];
    this.userPoolId = i, this.clientId = s, this.client = new nN(l, a, c), this.advancedSecurityDataCollectionFlag = u !== !1, this.storage = n.Storage || new ih().getStorage(), r && (this.wrapRefreshSessionCallback = r);
  }
  var t = e.prototype;
  return t.getUserPoolId = function() {
    return this.userPoolId;
  }, t.getUserPoolName = function() {
    return this.getUserPoolId().split("_")[1];
  }, t.getClientId = function() {
    return this.clientId;
  }, t.signUp = function(r, o, i, s, a, c) {
    var u = this, l = {
      ClientId: this.clientId,
      Username: r,
      Password: o,
      UserAttributes: i,
      ValidationData: s,
      ClientMetadata: c
    };
    this.getUserContextData(r) && (l.UserContextData = this.getUserContextData(r)), this.client.request("SignUp", l, function(f, d) {
      if (f)
        return a(f, null);
      var p = {
        Username: r,
        Pool: u,
        Storage: u.storage
      }, M = {
        user: new Na(p),
        userConfirmed: d.UserConfirmed,
        userSub: d.UserSub,
        codeDeliveryDetails: d.CodeDeliveryDetails
      };
      return a(null, M);
    });
  }, t.getCurrentUser = function() {
    var r = "CognitoIdentityServiceProvider." + this.clientId + ".LastAuthUser", o = this.storage.getItem(r);
    if (o) {
      var i = {
        Username: o,
        Pool: this,
        Storage: this.storage
      };
      return new Na(i);
    }
    return null;
  }, t.getUserContextData = function(r) {
    if (!(typeof AmazonCognitoAdvancedSecurityData > "u")) {
      var o = AmazonCognitoAdvancedSecurityData;
      if (this.advancedSecurityDataCollectionFlag) {
        var i = o.getData(r, this.userPoolId, this.clientId);
        if (i) {
          var s = {
            EncodedData: i
          };
          return s;
        }
      }
      return {};
    }
  }, e;
}(), sh = { exports: {} };
/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
(function(e, t) {
  (function(n) {
    var r;
    if (e.exports = n(), r = !0, !r) {
      var o = window.Cookies, i = window.Cookies = n();
      i.noConflict = function() {
        return window.Cookies = o, i;
      };
    }
  })(function() {
    function n() {
      for (var i = 0, s = {}; i < arguments.length; i++) {
        var a = arguments[i];
        for (var c in a)
          s[c] = a[c];
      }
      return s;
    }
    function r(i) {
      return i.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
    }
    function o(i) {
      function s() {
      }
      function a(u, l, f) {
        if (!(typeof document > "u")) {
          f = n({
            path: "/"
          }, s.defaults, f), typeof f.expires == "number" && (f.expires = new Date(/* @__PURE__ */ new Date() * 1 + f.expires * 864e5)), f.expires = f.expires ? f.expires.toUTCString() : "";
          try {
            var d = JSON.stringify(l);
            /^[\{\[]/.test(d) && (l = d);
          } catch {
          }
          l = i.write ? i.write(l, u) : encodeURIComponent(String(l)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), u = encodeURIComponent(String(u)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
          var p = "";
          for (var M in f)
            f[M] && (p += "; " + M, f[M] !== !0 && (p += "=" + f[M].split(";")[0]));
          return document.cookie = u + "=" + l + p;
        }
      }
      function c(u, l) {
        if (!(typeof document > "u")) {
          for (var f = {}, d = document.cookie ? document.cookie.split("; ") : [], p = 0; p < d.length; p++) {
            var M = d[p].split("="), y = M.slice(1).join("=");
            !l && y.charAt(0) === '"' && (y = y.slice(1, -1));
            try {
              var m = r(M[0]);
              if (y = (i.read || i)(y, m) || r(y), l)
                try {
                  y = JSON.parse(y);
                } catch {
                }
              if (f[m] = y, u === m)
                break;
            } catch {
            }
          }
          return u ? f[u] : f;
        }
      }
      return s.set = a, s.get = function(u) {
        return c(
          u,
          !1
          /* read as raw */
        );
      }, s.getJSON = function(u) {
        return c(
          u,
          !0
          /* read as json */
        );
      }, s.remove = function(u, l) {
        a(u, "", n(l, {
          expires: -1
        }));
      }, s.defaults = {}, s.withConverter = o, s;
    }
    return o(function() {
    });
  });
})(sh);
var Ur = sh.exports, cN = /* @__PURE__ */ function() {
  function e(n) {
    if (n === void 0 && (n = {}), n.domain && (this.domain = n.domain), n.path ? this.path = n.path : this.path = "/", Object.prototype.hasOwnProperty.call(n, "expires") ? this.expires = n.expires : this.expires = 365, Object.prototype.hasOwnProperty.call(n, "secure") ? this.secure = n.secure : this.secure = !0, Object.prototype.hasOwnProperty.call(n, "sameSite")) {
      if (!["strict", "lax", "none"].includes(n.sameSite))
        throw new Error('The sameSite value of cookieStorage must be "lax", "strict" or "none".');
      if (n.sameSite === "none" && !this.secure)
        throw new Error("sameSite = None requires the Secure attribute in latest browser versions.");
      this.sameSite = n.sameSite;
    } else
      this.sameSite = null;
  }
  var t = e.prototype;
  return t.setItem = function(r, o) {
    var i = {
      path: this.path,
      expires: this.expires,
      domain: this.domain,
      secure: this.secure
    };
    return this.sameSite && (i.sameSite = this.sameSite), Ur.set(r, o, i), Ur.get(r);
  }, t.getItem = function(r) {
    return Ur.get(r);
  }, t.removeItem = function(r) {
    var o = {
      path: this.path,
      expires: this.expires,
      domain: this.domain,
      secure: this.secure
    };
    return this.sameSite && (o.sameSite = this.sameSite), Ur.remove(r, o);
  }, t.clear = function() {
    for (var r = Ur.get(), o = Object.keys(r).length, i = 0; i < o; ++i)
      this.removeItem(Object.keys(r)[i]);
    return {};
  }, e;
}(), wo = { exports: {} };
/*! https://mths.be/punycode v1.3.2 by @mathias */
wo.exports;
(function(e, t) {
  (function(n) {
    var r = t && !t.nodeType && t, o = e && !e.nodeType && e, i = typeof Ft == "object" && Ft;
    (i.global === i || i.window === i || i.self === i) && (n = i);
    var s, a = 2147483647, c = 36, u = 1, l = 26, f = 38, d = 700, p = 72, M = 128, y = "-", m = /^xn--/, w = /[^\x20-\x7E]/, D = /[\x2E\u3002\uFF0E\uFF61]/g, N = {
      overflow: "Overflow: input needs wider integers to process",
      "not-basic": "Illegal input >= 0x80 (not a basic code point)",
      "invalid-input": "Invalid input"
    }, E = c - u, T = Math.floor, F = String.fromCharCode, _;
    function G(O) {
      throw RangeError(N[O]);
    }
    function Q(O, z) {
      for (var Y = O.length, W = []; Y--; )
        W[Y] = z(O[Y]);
      return W;
    }
    function K(O, z) {
      var Y = O.split("@"), W = "";
      Y.length > 1 && (W = Y[0] + "@", O = Y[1]), O = O.replace(D, ".");
      var B = O.split("."), ee = Q(B, z).join(".");
      return W + ee;
    }
    function Z(O) {
      for (var z = [], Y = 0, W = O.length, B, ee; Y < W; )
        B = O.charCodeAt(Y++), B >= 55296 && B <= 56319 && Y < W ? (ee = O.charCodeAt(Y++), (ee & 64512) == 56320 ? z.push(((B & 1023) << 10) + (ee & 1023) + 65536) : (z.push(B), Y--)) : z.push(B);
      return z;
    }
    function re(O) {
      return Q(O, function(z) {
        var Y = "";
        return z > 65535 && (z -= 65536, Y += F(z >>> 10 & 1023 | 55296), z = 56320 | z & 1023), Y += F(z), Y;
      }).join("");
    }
    function U(O) {
      return O - 48 < 10 ? O - 22 : O - 65 < 26 ? O - 65 : O - 97 < 26 ? O - 97 : c;
    }
    function j(O, z) {
      return O + 22 + 75 * (O < 26) - ((z != 0) << 5);
    }
    function C(O, z, Y) {
      var W = 0;
      for (O = Y ? T(O / d) : O >> 1, O += T(O / z); O > E * l >> 1; W += c)
        O = T(O / E);
      return T(W + (E + 1) * O / (O + f));
    }
    function V(O) {
      var z = [], Y = O.length, W, B = 0, ee = M, b = p, ne, $, ie, P, L, R, ce, X, ue;
      for (ne = O.lastIndexOf(y), ne < 0 && (ne = 0), $ = 0; $ < ne; ++$)
        O.charCodeAt($) >= 128 && G("not-basic"), z.push(O.charCodeAt($));
      for (ie = ne > 0 ? ne + 1 : 0; ie < Y; ) {
        for (P = B, L = 1, R = c; ie >= Y && G("invalid-input"), ce = U(O.charCodeAt(ie++)), (ce >= c || ce > T((a - B) / L)) && G("overflow"), B += ce * L, X = R <= b ? u : R >= b + l ? l : R - b, !(ce < X); R += c)
          ue = c - X, L > T(a / ue) && G("overflow"), L *= ue;
        W = z.length + 1, b = C(B - P, W, P == 0), T(B / W) > a - ee && G("overflow"), ee += T(B / W), B %= W, z.splice(B++, 0, ee);
      }
      return re(z);
    }
    function S(O) {
      var z, Y, W, B, ee, b, ne, $, ie, P, L, R = [], ce, X, ue, he;
      for (O = Z(O), ce = O.length, z = M, Y = 0, ee = p, b = 0; b < ce; ++b)
        L = O[b], L < 128 && R.push(F(L));
      for (W = B = R.length, B && R.push(y); W < ce; ) {
        for (ne = a, b = 0; b < ce; ++b)
          L = O[b], L >= z && L < ne && (ne = L);
        for (X = W + 1, ne - z > T((a - Y) / X) && G("overflow"), Y += (ne - z) * X, z = ne, b = 0; b < ce; ++b)
          if (L = O[b], L < z && ++Y > a && G("overflow"), L == z) {
            for ($ = Y, ie = c; P = ie <= ee ? u : ie >= ee + l ? l : ie - ee, !($ < P); ie += c)
              he = $ - P, ue = c - P, R.push(
                F(j(P + he % ue, 0))
              ), $ = T(he / ue);
            R.push(F(j($, 0))), ee = C(Y, X, W == B), Y = 0, ++W;
          }
        ++Y, ++z;
      }
      return R.join("");
    }
    function q(O) {
      return K(O, function(z) {
        return m.test(z) ? V(z.slice(4).toLowerCase()) : z;
      });
    }
    function ae(O) {
      return K(O, function(z) {
        return w.test(z) ? "xn--" + S(z) : z;
      });
    }
    if (s = {
      /**
       * A string representing the current Punycode.js version number.
       * @memberOf punycode
       * @type String
       */
      version: "1.3.2",
      /**
       * An object of methods to convert from JavaScript's internal character
       * representation (UCS-2) to Unicode code points, and back.
       * @see <https://mathiasbynens.be/notes/javascript-encoding>
       * @memberOf punycode
       * @type Object
       */
      ucs2: {
        decode: Z,
        encode: re
      },
      decode: V,
      encode: S,
      toASCII: ae,
      toUnicode: q
    }, r && o)
      if (e.exports == r)
        o.exports = s;
      else
        for (_ in s)
          s.hasOwnProperty(_) && (r[_] = s[_]);
    else
      n.punycode = s;
  })(Ft);
})(wo, wo.exports);
var lN = wo.exports, fN = {
  isString: function(e) {
    return typeof e == "string";
  },
  isObject: function(e) {
    return typeof e == "object" && e !== null;
  },
  isNull: function(e) {
    return e === null;
  },
  isNullOrUndefined: function(e) {
    return e == null;
  }
}, pi = {};
function dN(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
var hN = function(e, t, n, r) {
  t = t || "&", n = n || "=";
  var o = {};
  if (typeof e != "string" || e.length === 0)
    return o;
  var i = /\+/g;
  e = e.split(t);
  var s = 1e3;
  r && typeof r.maxKeys == "number" && (s = r.maxKeys);
  var a = e.length;
  s > 0 && a > s && (a = s);
  for (var c = 0; c < a; ++c) {
    var u = e[c].replace(i, "%20"), l = u.indexOf(n), f, d, p, M;
    l >= 0 ? (f = u.substr(0, l), d = u.substr(l + 1)) : (f = u, d = ""), p = decodeURIComponent(f), M = decodeURIComponent(d), dN(o, p) ? Array.isArray(o[p]) ? o[p].push(M) : o[p] = [o[p], M] : o[p] = M;
  }
  return o;
}, Pr = function(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "boolean":
      return e ? "true" : "false";
    case "number":
      return isFinite(e) ? e : "";
    default:
      return "";
  }
}, gN = function(e, t, n, r) {
  return t = t || "&", n = n || "=", e === null && (e = void 0), typeof e == "object" ? Object.keys(e).map(function(o) {
    var i = encodeURIComponent(Pr(o)) + n;
    return Array.isArray(e[o]) ? e[o].map(function(s) {
      return i + encodeURIComponent(Pr(s));
    }).join(t) : i + encodeURIComponent(Pr(e[o]));
  }).join(t) : r ? encodeURIComponent(Pr(r)) + n + encodeURIComponent(Pr(e)) : "";
};
pi.decode = pi.parse = hN;
pi.encode = pi.stringify = gN;
var pN = lN, Gt = fN, dn = ah;
function Zt() {
  this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null;
}
var MN = /^([a-z0-9.+-]+:)/i, yN = /:[0-9]*$/, mN = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, vN = ["<", ">", '"', "`", " ", "\r", `
`, "	"], wN = ["{", "}", "|", "\\", "^", "`"].concat(vN), Sa = ["'"].concat(wN), $l = ["%", "/", "?", ";", "#"].concat(Sa), Wl = ["/", "?", "#"], DN = 255, Vl = /^[+a-z0-9A-Z_-]{0,63}$/, IN = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, AN = {
  javascript: !0,
  "javascript:": !0
}, xa = {
  javascript: !0,
  "javascript:": !0
}, hr = {
  http: !0,
  https: !0,
  ftp: !0,
  gopher: !0,
  file: !0,
  "http:": !0,
  "https:": !0,
  "ftp:": !0,
  "gopher:": !0,
  "file:": !0
}, Ca = pi;
function ah(e, t, n) {
  if (e && Gt.isObject(e) && e instanceof Zt)
    return e;
  var r = new Zt();
  return r.parse(e, t, n), r;
}
Zt.prototype.parse = function(e, t, n) {
  if (!Gt.isString(e))
    throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
  var r = e.indexOf("?"), o = r !== -1 && r < e.indexOf("#") ? "?" : "#", i = e.split(o), s = /\\/g;
  i[0] = i[0].replace(s, "/"), e = i.join(o);
  var a = e;
  if (a = a.trim(), !n && e.split("#").length === 1) {
    var c = mN.exec(a);
    if (c)
      return this.path = a, this.href = a, this.pathname = c[1], c[2] ? (this.search = c[2], t ? this.query = Ca.parse(this.search.substr(1)) : this.query = this.search.substr(1)) : t && (this.search = "", this.query = {}), this;
  }
  var u = MN.exec(a);
  if (u) {
    u = u[0];
    var l = u.toLowerCase();
    this.protocol = l, a = a.substr(u.length);
  }
  if (n || u || a.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var f = a.substr(0, 2) === "//";
    f && !(u && xa[u]) && (a = a.substr(2), this.slashes = !0);
  }
  if (!xa[u] && (f || u && !hr[u])) {
    for (var d = -1, p = 0; p < Wl.length; p++) {
      var M = a.indexOf(Wl[p]);
      M !== -1 && (d === -1 || M < d) && (d = M);
    }
    var y, m;
    d === -1 ? m = a.lastIndexOf("@") : m = a.lastIndexOf("@", d), m !== -1 && (y = a.slice(0, m), a = a.slice(m + 1), this.auth = decodeURIComponent(y)), d = -1;
    for (var p = 0; p < $l.length; p++) {
      var M = a.indexOf($l[p]);
      M !== -1 && (d === -1 || M < d) && (d = M);
    }
    d === -1 && (d = a.length), this.host = a.slice(0, d), a = a.slice(d), this.parseHost(), this.hostname = this.hostname || "";
    var w = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!w)
      for (var D = this.hostname.split(/\./), p = 0, N = D.length; p < N; p++) {
        var E = D[p];
        if (E && !E.match(Vl)) {
          for (var T = "", F = 0, _ = E.length; F < _; F++)
            E.charCodeAt(F) > 127 ? T += "x" : T += E[F];
          if (!T.match(Vl)) {
            var G = D.slice(0, p), Q = D.slice(p + 1), K = E.match(IN);
            K && (G.push(K[1]), Q.unshift(K[2])), Q.length && (a = "/" + Q.join(".") + a), this.hostname = G.join(".");
            break;
          }
        }
      }
    this.hostname.length > DN ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), w || (this.hostname = pN.toASCII(this.hostname));
    var Z = this.port ? ":" + this.port : "", re = this.hostname || "";
    this.host = re + Z, this.href += this.host, w && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), a[0] !== "/" && (a = "/" + a));
  }
  if (!AN[l])
    for (var p = 0, N = Sa.length; p < N; p++) {
      var U = Sa[p];
      if (a.indexOf(U) !== -1) {
        var j = encodeURIComponent(U);
        j === U && (j = escape(U)), a = a.split(U).join(j);
      }
    }
  var C = a.indexOf("#");
  C !== -1 && (this.hash = a.substr(C), a = a.slice(0, C));
  var V = a.indexOf("?");
  if (V !== -1 ? (this.search = a.substr(V), this.query = a.substr(V + 1), t && (this.query = Ca.parse(this.query)), a = a.slice(0, V)) : t && (this.search = "", this.query = {}), a && (this.pathname = a), hr[l] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
    var Z = this.pathname || "", S = this.search || "";
    this.path = Z + S;
  }
  return this.href = this.format(), this;
};
Zt.prototype.format = function() {
  var e = this.auth || "";
  e && (e = encodeURIComponent(e), e = e.replace(/%3A/i, ":"), e += "@");
  var t = this.protocol || "", n = this.pathname || "", r = this.hash || "", o = !1, i = "";
  this.host ? o = e + this.host : this.hostname && (o = e + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]"), this.port && (o += ":" + this.port)), this.query && Gt.isObject(this.query) && Object.keys(this.query).length && (i = Ca.stringify(this.query));
  var s = this.search || i && "?" + i || "";
  return t && t.substr(-1) !== ":" && (t += ":"), this.slashes || (!t || hr[t]) && o !== !1 ? (o = "//" + (o || ""), n && n.charAt(0) !== "/" && (n = "/" + n)) : o || (o = ""), r && r.charAt(0) !== "#" && (r = "#" + r), s && s.charAt(0) !== "?" && (s = "?" + s), n = n.replace(/[?#]/g, function(a) {
    return encodeURIComponent(a);
  }), s = s.replace("#", "%23"), t + o + n + s + r;
};
Zt.prototype.resolve = function(e) {
  return this.resolveObject(ah(e, !1, !0)).format();
};
Zt.prototype.resolveObject = function(e) {
  if (Gt.isString(e)) {
    var t = new Zt();
    t.parse(e, !1, !0), e = t;
  }
  for (var n = new Zt(), r = Object.keys(this), o = 0; o < r.length; o++) {
    var i = r[o];
    n[i] = this[i];
  }
  if (n.hash = e.hash, e.href === "")
    return n.href = n.format(), n;
  if (e.slashes && !e.protocol) {
    for (var s = Object.keys(e), a = 0; a < s.length; a++) {
      var c = s[a];
      c !== "protocol" && (n[c] = e[c]);
    }
    return hr[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = "/"), n.href = n.format(), n;
  }
  if (e.protocol && e.protocol !== n.protocol) {
    if (!hr[e.protocol]) {
      for (var u = Object.keys(e), l = 0; l < u.length; l++) {
        var f = u[l];
        n[f] = e[f];
      }
      return n.href = n.format(), n;
    }
    if (n.protocol = e.protocol, !e.host && !xa[e.protocol]) {
      for (var N = (e.pathname || "").split("/"); N.length && !(e.host = N.shift()); )
        ;
      e.host || (e.host = ""), e.hostname || (e.hostname = ""), N[0] !== "" && N.unshift(""), N.length < 2 && N.unshift(""), n.pathname = N.join("/");
    } else
      n.pathname = e.pathname;
    if (n.search = e.search, n.query = e.query, n.host = e.host || "", n.auth = e.auth, n.hostname = e.hostname || e.host, n.port = e.port, n.pathname || n.search) {
      var d = n.pathname || "", p = n.search || "";
      n.path = d + p;
    }
    return n.slashes = n.slashes || e.slashes, n.href = n.format(), n;
  }
  var M = n.pathname && n.pathname.charAt(0) === "/", y = e.host || e.pathname && e.pathname.charAt(0) === "/", m = y || M || n.host && e.pathname, w = m, D = n.pathname && n.pathname.split("/") || [], N = e.pathname && e.pathname.split("/") || [], E = n.protocol && !hr[n.protocol];
  if (E && (n.hostname = "", n.port = null, n.host && (D[0] === "" ? D[0] = n.host : D.unshift(n.host)), n.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && (N[0] === "" ? N[0] = e.host : N.unshift(e.host)), e.host = null), m = m && (N[0] === "" || D[0] === "")), y)
    n.host = e.host || e.host === "" ? e.host : n.host, n.hostname = e.hostname || e.hostname === "" ? e.hostname : n.hostname, n.search = e.search, n.query = e.query, D = N;
  else if (N.length)
    D || (D = []), D.pop(), D = D.concat(N), n.search = e.search, n.query = e.query;
  else if (!Gt.isNullOrUndefined(e.search)) {
    if (E) {
      n.hostname = n.host = D.shift();
      var T = n.host && n.host.indexOf("@") > 0 ? n.host.split("@") : !1;
      T && (n.auth = T.shift(), n.host = n.hostname = T.shift());
    }
    return n.search = e.search, n.query = e.query, (!Gt.isNull(n.pathname) || !Gt.isNull(n.search)) && (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.href = n.format(), n;
  }
  if (!D.length)
    return n.pathname = null, n.search ? n.path = "/" + n.search : n.path = null, n.href = n.format(), n;
  for (var F = D.slice(-1)[0], _ = (n.host || e.host || D.length > 1) && (F === "." || F === "..") || F === "", G = 0, Q = D.length; Q >= 0; Q--)
    F = D[Q], F === "." ? D.splice(Q, 1) : F === ".." ? (D.splice(Q, 1), G++) : G && (D.splice(Q, 1), G--);
  if (!m && !w)
    for (; G--; G)
      D.unshift("..");
  m && D[0] !== "" && (!D[0] || D[0].charAt(0) !== "/") && D.unshift(""), _ && D.join("/").substr(-1) !== "/" && D.push("");
  var K = D[0] === "" || D[0] && D[0].charAt(0) === "/";
  if (E) {
    n.hostname = n.host = K ? "" : D.length ? D.shift() : "";
    var T = n.host && n.host.indexOf("@") > 0 ? n.host.split("@") : !1;
    T && (n.auth = T.shift(), n.host = n.hostname = T.shift());
  }
  return m = m || n.host && D.length, m && !K && D.unshift(""), D.length ? n.pathname = D.join("/") : (n.pathname = null, n.path = null), (!Gt.isNull(n.pathname) || !Gt.isNull(n.search)) && (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.auth = e.auth || n.auth, n.slashes = n.slashes || e.slashes, n.href = n.format(), n;
};
Zt.prototype.parseHost = function() {
  var e = this.host, t = yN.exec(e);
  t && (t = t[0], t !== ":" && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e);
};
var EN = "_self", TN = function(e) {
  var t = window.open(e, EN);
  return t ? Promise.resolve(t) : Promise.reject();
}, NN = function(e) {
  window.sessionStorage.setItem("oauth_state", e);
}, jN = function() {
  var e = window.sessionStorage.getItem("oauth_state");
  return window.sessionStorage.removeItem("oauth_state"), e;
}, bN = function(e) {
  window.sessionStorage.setItem("ouath_pkce_key", e);
}, SN = function() {
  var e = window.sessionStorage.getItem("ouath_pkce_key");
  return window.sessionStorage.removeItem("ouath_pkce_key"), e;
}, xN = typeof Symbol < "u" && typeof Symbol.for == "function" ? Symbol.for("amplify_default") : "@@amplify_default", Os = function(e, t, n) {
  Kt.dispatch("auth", { event: e, data: t, message: n }, "Auth", xN);
}, rr = new Ut("OAuth"), CN = (
  /** @class */
  function() {
    function e(t) {
      var n = t.config, r = t.cognitoClientId, o = t.scopes, i = o === void 0 ? [] : o;
      if (this._urlOpener = n.urlOpener || TN, this._config = n, this._cognitoClientId = r, !this.isValidScopes(i))
        throw Error("scopes must be a String Array");
      this._scopes = i;
    }
    return e.prototype.isValidScopes = function(t) {
      return Array.isArray(t) && t.every(function(n) {
        return typeof n == "string";
      });
    }, e.prototype.oauthSignIn = function(t, n, r, o, i, s) {
      t === void 0 && (t = "code"), i === void 0 && (i = lo.Cognito);
      var a = this._generateState(32), c = s ? a + "-" + ZI(s) : a;
      NN(c);
      var u = this._generateRandom(128);
      bN(u);
      var l = this._generateChallenge(u), f = "S256", d = this._scopes.join(" "), p = Object.entries(et(et({ redirect_uri: r, response_type: t, client_id: o, identity_provider: i, scope: d, state: c }, t === "code" ? { code_challenge: l } : {}), t === "code" ? { code_challenge_method: f } : {})).map(function(y) {
        var m = Ct(y, 2), w = m[0], D = m[1];
        return encodeURIComponent(w) + "=" + encodeURIComponent(D);
      }).join("&"), M = "https://" + n + "/oauth2/authorize?" + p;
      rr.debug("Redirecting to " + M), this._urlOpener(M, r);
    }, e.prototype._handleCodeFlow = function(t) {
      return je(this, void 0, void 0, function() {
        var n, r, o, i, s, a, c, u, l, f, d, p, M, y, m, w;
        return be(this, function(D) {
          switch (D.label) {
            case 0:
              return n = (dn(t).query || "").split("&").map(function(N) {
                return N.split("=");
              }).reduce(function(N, E) {
                var T, F = Ct(E, 2), _ = F[0], G = F[1];
                return et(et({}, N), (T = {}, T[_] = G, T));
              }, { code: void 0 }).code, r = dn(t).pathname || "/", o = dn(this._config.redirectSignIn).pathname || "/", !n || r !== o ? [
                2
                /*return*/
              ] : (i = "https://" + this._config.domain + "/oauth2/token", Os("codeFlow", {}, "Retrieving tokens from " + i), s = Ln(this._config) ? this._cognitoClientId : this._config.clientID, a = Ln(this._config) ? this._config.redirectSignIn : this._config.redirectUri, c = SN(), u = et({
                grant_type: "authorization_code",
                code: n,
                client_id: s,
                redirect_uri: a
              }, c ? { code_verifier: c } : {}), rr.debug("Calling token endpoint: " + i + " with", u), l = Object.entries(u).map(function(N) {
                var E = Ct(N, 2), T = E[0], F = E[1];
                return encodeURIComponent(T) + "=" + encodeURIComponent(F);
              }).join("&"), f = {
                category: Ma.Auth,
                action: ya.FederatedSignIn
              }, [4, fetch(i, {
                method: "POST",
                headers: (w = {
                  "Content-Type": "application/x-www-form-urlencoded"
                }, w[YE] = Du(f), w),
                body: l
              })]);
            case 1:
              return [4, D.sent().json()];
            case 2:
              if (d = D.sent(), p = d.access_token, M = d.refresh_token, y = d.id_token, m = d.error, m)
                throw new Error(m);
              return [2, {
                accessToken: p,
                refreshToken: M,
                idToken: y
              }];
          }
        });
      });
    }, e.prototype._handleImplicitFlow = function(t) {
      return je(this, void 0, void 0, function() {
        var n, r, o;
        return be(this, function(i) {
          return n = (dn(t).hash || "#").substr(1).split("&").map(function(s) {
            return s.split("=");
          }).reduce(function(s, a) {
            var c, u = Ct(a, 2), l = u[0], f = u[1];
            return et(et({}, s), (c = {}, c[l] = f, c));
          }, {
            id_token: void 0,
            access_token: void 0
          }), r = n.id_token, o = n.access_token, Os("implicitFlow", {}, "Got tokens from " + t), rr.debug("Retrieving implicit tokens from " + t + " with"), [2, {
            accessToken: o,
            idToken: r,
            refreshToken: null
          }];
        });
      });
    }, e.prototype.handleAuthResponse = function(t) {
      return je(this, void 0, void 0, function() {
        var n, r, o, i, s, a, c;
        return be(this, function(u) {
          switch (u.label) {
            case 0:
              if (u.trys.push([0, 5, , 6]), n = t ? et(et({}, (dn(t).hash || "#").substr(1).split("&").map(function(l) {
                return l.split("=");
              }).reduce(function(l, f) {
                var d = Ct(f, 2), p = d[0], M = d[1];
                return l[p] = M, l;
              }, {})), (dn(t).query || "").split("&").map(function(l) {
                return l.split("=");
              }).reduce(function(l, f) {
                var d = Ct(f, 2), p = d[0], M = d[1];
                return l[p] = M, l;
              }, {})) : {}, r = n.error, o = n.error_description, r)
                throw new Error(o);
              return i = this._validateState(n), rr.debug("Starting " + this._config.responseType + " flow with " + t), this._config.responseType !== "code" ? [3, 2] : (s = [{}], [4, this._handleCodeFlow(t)]);
            case 1:
              return [2, et.apply(void 0, [et.apply(void 0, s.concat([u.sent()])), { state: i }])];
            case 2:
              return a = [{}], [4, this._handleImplicitFlow(t)];
            case 3:
              return [2, et.apply(void 0, [et.apply(void 0, a.concat([u.sent()])), { state: i }])];
            case 4:
              return [3, 6];
            case 5:
              throw c = u.sent(), rr.debug("Error handling auth response.", c), c;
            case 6:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype._validateState = function(t) {
      if (t) {
        var n = jN(), r = t.state;
        if (n && n !== r)
          throw new Error("Invalid state in OAuth flow");
        return r;
      }
    }, e.prototype.signOut = function() {
      return je(this, void 0, void 0, function() {
        var t, n, r;
        return be(this, function(o) {
          return t = "https://" + this._config.domain + "/logout?", n = Ln(this._config) ? this._cognitoClientId : this._config.oauth.clientID, r = Ln(this._config) ? this._config.redirectSignOut : this._config.returnTo, t += Object.entries({
            client_id: n,
            logout_uri: encodeURIComponent(r)
          }).map(function(i) {
            var s = Ct(i, 2), a = s[0], c = s[1];
            return a + "=" + c;
          }).join("&"), Os("oAuthSignOut", { oAuth: "signOut" }, "Signing out from " + t), rr.debug("Signing out from " + t), [2, this._urlOpener(t, r)];
        });
      });
    }, e.prototype._generateState = function(t) {
      for (var n = "", r = t, o = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; r > 0; --r)
        n += o[Math.round(Math.random() * (o.length - 1))];
      return n;
    }, e.prototype._generateChallenge = function(t) {
      var n = new Rn.Sha256();
      n.update(t);
      var r = n.digestSync(), o = Be.Buffer.from(r).toString("base64"), i = this._base64URL(o);
      return i;
    }, e.prototype._base64URL = function(t) {
      return t.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    }, e.prototype._generateRandom = function(t) {
      var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~", r = new Uint8Array(t);
      if (typeof window < "u" && window.crypto)
        window.crypto.getRandomValues(r);
      else
        for (var o = 0; o < t; o += 1)
          r[o] = Math.random() * n.length | 0;
      return this._bufferToString(r);
    }, e.prototype._bufferToString = function(t) {
      for (var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", r = [], o = 0; o < t.byteLength; o += 1) {
        var i = t[o] % n.length;
        r.push(n[i]);
      }
      return r.join("");
    }, e;
  }()
);
const ON = CN, LN = function(e) {
  if (rn().isBrowser && window.location) {
    var t = window.location.href;
    e({ url: t });
  } else if (!rn().isNode)
    throw new Error("Not supported");
};
var nt;
(function(e) {
  e.DEFAULT_MSG = "Authentication Error", e.EMPTY_EMAIL = "Email cannot be empty", e.EMPTY_PHONE = "Phone number cannot be empty", e.EMPTY_USERNAME = "Username cannot be empty", e.INVALID_USERNAME = "The username should either be a string or one of the sign in types", e.EMPTY_PASSWORD = "Password cannot be empty", e.EMPTY_CODE = "Confirmation code cannot be empty", e.SIGN_UP_ERROR = "Error creating account", e.NO_MFA = "No valid MFA method provided", e.INVALID_MFA = "Invalid MFA type", e.EMPTY_CHALLENGE = "Challenge response cannot be empty", e.NO_USER_SESSION = "Failed to get the session because the user is empty", e.NETWORK_ERROR = "Network Error", e.DEVICE_CONFIG = "Device tracking has not been configured in this User Pool", e.AUTOSIGNIN_ERROR = "Please use your credentials to sign in";
})(nt || (nt = {}));
var _N = new Ut("AuthError"), ln = (
  /** @class */
  function(e) {
    yu(t, e);
    function t(n) {
      var r = this, o = zN[n], i = o.message, s = o.log;
      return r = e.call(this, i) || this, r.constructor = t, Object.setPrototypeOf(r, t.prototype), r.name = "AuthError", r.log = s || i, _N.error(r.log), r;
    }
    return t;
  }(Error)
), kN = (
  /** @class */
  function(e) {
    yu(t, e);
    function t(n) {
      var r = e.call(this, n) || this;
      return r.constructor = t, Object.setPrototypeOf(r, t.prototype), r.name = "NoUserPoolError", r;
    }
    return t;
  }(ln)
), zN = {
  noConfig: {
    message: nt.DEFAULT_MSG,
    log: `
            Error: Amplify has not been configured correctly.
            This error is typically caused by one of the following scenarios:

            1. Make sure you're passing the awsconfig object to Amplify.configure() in your app's entry point
                See https://aws-amplify.github.io/docs/js/authentication#configure-your-app for more information
            
            2. There might be multiple conflicting versions of amplify packages in your node_modules.
				Refer to our docs site for help upgrading Amplify packages (https://docs.amplify.aws/lib/troubleshooting/upgrading/q/platform/js)
        `
  },
  missingAuthConfig: {
    message: nt.DEFAULT_MSG,
    log: `
            Error: Amplify has not been configured correctly. 
            The configuration object is missing required auth properties.
            This error is typically caused by one of the following scenarios:

            1. Did you run \`amplify push\` after adding auth via \`amplify add auth\`?
                See https://aws-amplify.github.io/docs/js/authentication#amplify-project-setup for more information

            2. This could also be caused by multiple conflicting versions of amplify packages, see (https://docs.amplify.aws/lib/troubleshooting/upgrading/q/platform/js) for help upgrading Amplify packages.
        `
  },
  emptyUsername: {
    message: nt.EMPTY_USERNAME
  },
  // TODO: should include a list of valid sign-in types
  invalidUsername: {
    message: nt.INVALID_USERNAME
  },
  emptyPassword: {
    message: nt.EMPTY_PASSWORD
  },
  emptyCode: {
    message: nt.EMPTY_CODE
  },
  signUpError: {
    message: nt.SIGN_UP_ERROR,
    log: "The first parameter should either be non-null string or object"
  },
  noMFA: {
    message: nt.NO_MFA
  },
  invalidMFA: {
    message: nt.INVALID_MFA
  },
  emptyChallengeResponse: {
    message: nt.EMPTY_CHALLENGE
  },
  noUserSession: {
    message: nt.NO_USER_SESSION
  },
  deviceConfig: {
    message: nt.DEVICE_CONFIG
  },
  networkError: {
    message: nt.NETWORK_ERROR
  },
  autoSignInError: {
    message: nt.AUTOSIGNIN_ERROR
  },
  default: {
    message: nt.DEFAULT_MSG
  }
}, oe = new Ut("AuthClass"), Hl = "aws.cognito.signin.user.admin", UN = 10 * 1e3, PN = typeof Symbol < "u" && typeof Symbol.for == "function" ? Symbol.for("amplify_default") : "@@amplify_default", Te = function(e, t, n) {
  Kt.dispatch("auth", { event: e, data: t, message: n }, "Auth", PN);
}, RN = 60, YN = 3 * 60 * 1e3, FN = (
  /** @class */
  function() {
    function e(t) {
      var n = this;
      this.userPool = null, this.user = null, this.oAuthFlowInProgress = !1, this.autoSignInInitiated = !1, this.inflightSessionPromise = null, this.inflightSessionPromiseCounter = 0, this.Credentials = Zd, this.wrapRefreshSessionCallback = function(r) {
        var o = function(i, s) {
          return s ? Te("tokenRefresh", void 0, "New token retrieved") : Te("tokenRefresh_failure", i, "Failed to retrieve new token"), r(i, s);
        };
        return o;
      }, this.configure(t), this.currentCredentials = this.currentCredentials.bind(this), this.currentUserCredentials = this.currentUserCredentials.bind(this), Kt.listen("auth", function(r) {
        var o = r.payload, i = o.event;
        switch (i) {
          case "verify":
          case "signIn":
            n._storage.setItem("amplify-signin-with-hostedUI", "false");
            break;
          case "signOut":
            n._storage.removeItem("amplify-signin-with-hostedUI");
            break;
          case "cognitoHostedUI":
            n._storage.setItem("amplify-signin-with-hostedUI", "true");
            break;
        }
      }), GT(), Bl(Ts.framework), Ts.observeFrameworkChanges(function() {
        Bl(Ts.framework);
      });
    }
    return e.prototype.getModuleName = function() {
      return "Auth";
    }, e.prototype.configure = function(t) {
      var n = this;
      if (!t)
        return this._config || {};
      oe.debug("configure Auth");
      var r = Object.assign({}, this._config, Bd(t).Auth, t);
      this._config = r;
      var o = this._config, i = o.userPoolId, s = o.userPoolWebClientId, a = o.cookieStorage, c = o.oauth, u = o.region, l = o.identityPoolId, f = o.mandatorySignIn, d = o.refreshHandlers, p = o.identityPoolRegion, M = o.clientMetadata, y = o.endpoint, m = o.storage;
      if (!m)
        a ? this._storage = new cN(a) : this._storage = t.ssr ? new RE() : new $d().getStorage();
      else {
        if (!this._isValidAuthStorage(m))
          throw oe.error("The storage in the Auth config is not valid!"), new Error("Empty storage object");
        this._storage = m;
      }
      if (this._storageSync = Promise.resolve(), typeof this._storage.sync == "function" && (this._storageSync = this._storage.sync()), i) {
        var w = {
          UserPoolId: i,
          ClientId: s,
          endpoint: y
        };
        w.Storage = this._storage, this.userPool = new uN(w, this.wrapRefreshSessionCallback);
      }
      this.Credentials.configure({
        mandatorySignIn: f,
        region: u,
        userPoolId: i,
        identityPoolId: l,
        refreshHandlers: d,
        storage: this._storage,
        identityPoolRegion: p
      });
      var D = c ? Ln(this._config.oauth) ? c : c.awsCognito : void 0;
      if (D) {
        var N = Object.assign({
          cognitoClientId: s,
          UserPoolId: i,
          domain: D.domain,
          scopes: D.scope,
          redirectSignIn: D.redirectSignIn,
          redirectSignOut: D.redirectSignOut,
          responseType: D.responseType,
          Storage: this._storage,
          urlOpener: D.urlOpener,
          clientMetadata: M
        }, D.options);
        this._oAuthHandler = new ON({
          scopes: N.scopes,
          config: N,
          cognitoClientId: N.cognitoClientId
        });
        var E = {};
        LN(function(F) {
          var _ = F.url;
          E[_] || (E[_] = !0, n._handleAuthResponse(_));
        });
      }
      if (Te("configured", null, "The Auth category has been configured successfully"), !this.autoSignInInitiated && typeof this._storage.getItem == "function") {
        var T = this.isTrueStorageValue("amplify-polling-started");
        T && (Te("autoSignIn_failure", null, Ce.AutoSignInError), this._storage.removeItem("amplify-auto-sign-in")), this._storage.removeItem("amplify-polling-started");
      }
      return this._config;
    }, e.prototype.signUp = function(t) {
      for (var n = this, r = [], o = 1; o < arguments.length; o++)
        r[o - 1] = arguments[o];
      var i, s, a;
      if (!this.userPool)
        return this.rejectNoUserPool();
      var c = null, u = null, l = [], f = null, d, p = { enabled: !1 }, M = {}, y = {};
      if (t && typeof t == "string") {
        c = t, u = r ? r[0] : null;
        var m = r ? r[1] : null, w = r ? r[2] : null;
        m && l.push(new sr({ Name: "email", Value: m })), w && l.push(new sr({
          Name: "phone_number",
          Value: w
        }));
      } else if (t && typeof t == "object") {
        c = t.username, u = t.password, t && t.clientMetadata ? d = t.clientMetadata : this._config.clientMetadata && (d = this._config.clientMetadata);
        var D = t.attributes;
        D && Object.keys(D).map(function(E) {
          l.push(new sr({ Name: E, Value: D[E] }));
        });
        var N = t.validationData;
        N && (f = [], Object.keys(N).map(function(E) {
          f.push(new sr({
            Name: E,
            Value: N[E]
          }));
        })), p = (i = t.autoSignIn) !== null && i !== void 0 ? i : { enabled: !1 }, p.enabled && (this._storage.setItem("amplify-auto-sign-in", "true"), M = (s = p.validationData) !== null && s !== void 0 ? s : {}, y = (a = p.clientMetaData) !== null && a !== void 0 ? a : {});
      } else
        return this.rejectAuthError(Ce.SignUpError);
      return c ? u ? (oe.debug("signUp attrs:", l), oe.debug("signUp validation data:", f), new Promise(function(E, T) {
        n.userPool.signUp(c, u, l, f, function(F, _) {
          F ? (Te("signUp_failure", F, c + " failed to signup"), T(F)) : (Te("signUp", _, c + " has signed up successfully"), p.enabled && n.handleAutoSignIn(c, u, M, y, _), E(_));
        }, d);
      })) : this.rejectAuthError(Ce.EmptyPassword) : this.rejectAuthError(Ce.EmptyUsername);
    }, e.prototype.handleAutoSignIn = function(t, n, r, o, i) {
      this.autoSignInInitiated = !0;
      var s = new Ul({
        Username: t,
        Password: n,
        ValidationData: r,
        ClientMetadata: o
      });
      i.userConfirmed ? this.signInAfterUserConfirmed(s) : this._config.signUpVerificationMethod === "link" ? this.handleLinkAutoSignIn(s) : this.handleCodeAutoSignIn(s);
    }, e.prototype.handleCodeAutoSignIn = function(t) {
      var n = this, r = function(o) {
        var i = o.payload;
        i.event === "confirmSignUp" && n.signInAfterUserConfirmed(t, r);
      };
      Kt.listen("auth", r);
    }, e.prototype.handleLinkAutoSignIn = function(t) {
      var n = this;
      this._storage.setItem("amplify-polling-started", "true");
      var r = Date.now(), o = setInterval(function() {
        Date.now() - r > YN ? (clearInterval(o), Te("autoSignIn_failure", null, "Please confirm your account and use your credentials to sign in."), n._storage.removeItem("amplify-auto-sign-in")) : n.signInAfterUserConfirmed(t, null, o);
      }, 5e3);
    }, e.prototype.signInAfterUserConfirmed = function(t, n, r) {
      return je(this, void 0, void 0, function() {
        var o, i, s = this;
        return be(this, function(a) {
          switch (a.label) {
            case 0:
              o = this.createCognitoUser(t.getUsername()), a.label = 1;
            case 1:
              return a.trys.push([1, 3, , 4]), [4, o.authenticateUser(t, this.authCallbacks(o, function(c) {
                Te("autoSignIn", c, t.getUsername() + " has signed in successfully"), n && Kt.remove("auth", n), r && (clearInterval(r), s._storage.removeItem("amplify-polling-started")), s._storage.removeItem("amplify-auto-sign-in");
              }, function(c) {
                oe.error(c), s._storage.removeItem("amplify-auto-sign-in");
              }))];
            case 2:
              return a.sent(), [3, 4];
            case 3:
              return i = a.sent(), oe.error(i), [3, 4];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.confirmSignUp = function(t, n, r) {
      var o = this;
      if (!this.userPool)
        return this.rejectNoUserPool();
      if (!t)
        return this.rejectAuthError(Ce.EmptyUsername);
      if (!n)
        return this.rejectAuthError(Ce.EmptyCode);
      var i = this.createCognitoUser(t), s = r && typeof r.forceAliasCreation == "boolean" ? r.forceAliasCreation : !0, a;
      return r && r.clientMetadata ? a = r.clientMetadata : this._config.clientMetadata && (a = this._config.clientMetadata), new Promise(function(c, u) {
        i.confirmRegistration(n, s, function(l, f) {
          if (l)
            u(l);
          else {
            Te("confirmSignUp", f, t + " has been confirmed successfully");
            var d = o.isTrueStorageValue("amplify-auto-sign-in");
            d && !o.autoSignInInitiated && (Te("autoSignIn_failure", null, Ce.AutoSignInError), o._storage.removeItem("amplify-auto-sign-in")), c(f);
          }
        }, a);
      });
    }, e.prototype.isTrueStorageValue = function(t) {
      var n = this._storage.getItem(t);
      return n ? n === "true" : !1;
    }, e.prototype.resendSignUp = function(t, n) {
      if (n === void 0 && (n = this._config.clientMetadata), !this.userPool)
        return this.rejectNoUserPool();
      if (!t)
        return this.rejectAuthError(Ce.EmptyUsername);
      var r = this.createCognitoUser(t);
      return new Promise(function(o, i) {
        r.resendConfirmationCode(function(s, a) {
          s ? i(s) : o(a);
        }, n);
      });
    }, e.prototype.signIn = function(t, n, r) {
      if (r === void 0 && (r = this._config.clientMetadata), !this.userPool)
        return this.rejectNoUserPool();
      var o = null, i = null, s = {};
      if (typeof t == "string")
        o = t, i = n;
      else if (gI(t))
        typeof n < "u" && oe.warn("The password should be defined under the first parameter object!"), o = t.username, i = t.password, s = t.validationData;
      else
        return this.rejectAuthError(Ce.InvalidUsername);
      if (!o)
        return this.rejectAuthError(Ce.EmptyUsername);
      var a = new Ul({
        Username: o,
        Password: i,
        ValidationData: s,
        ClientMetadata: r
      });
      return i ? this.signInWithPassword(a) : this.signInWithoutPassword(a);
    }, e.prototype.authCallbacks = function(t, n, r) {
      var o = this, i = this;
      return {
        onSuccess: function(s) {
          return je(o, void 0, void 0, function() {
            var a, c, u, l;
            return be(this, function(f) {
              switch (f.label) {
                case 0:
                  oe.debug(s), delete t.challengeName, delete t.challengeParam, f.label = 1;
                case 1:
                  return f.trys.push([1, 4, 5, 9]), [4, this.Credentials.clear()];
                case 2:
                  return f.sent(), [4, this.Credentials.set(s, "session")];
                case 3:
                  return a = f.sent(), oe.debug("succeed to get cognito credentials", a), [3, 9];
                case 4:
                  return c = f.sent(), oe.debug("cannot get cognito credentials", c), [3, 9];
                case 5:
                  return f.trys.push([5, 7, , 8]), [4, this.currentUserPoolUser()];
                case 6:
                  return u = f.sent(), i.user = u, Te("signIn", u, "A user " + t.getUsername() + " has been signed in"), n(u), [3, 8];
                case 7:
                  return l = f.sent(), oe.error("Failed to get the signed in user", l), r(l), [3, 8];
                case 8:
                  return [
                    7
                    /*endfinally*/
                  ];
                case 9:
                  return [
                    2
                    /*return*/
                  ];
              }
            });
          });
        },
        onFailure: function(s) {
          oe.debug("signIn failure", s), Te("signIn_failure", s, t.getUsername() + " failed to signin"), r(s);
        },
        customChallenge: function(s) {
          oe.debug("signIn custom challenge answer required"), t.challengeName = "CUSTOM_CHALLENGE", t.challengeParam = s, n(t);
        },
        mfaRequired: function(s, a) {
          oe.debug("signIn MFA required"), t.challengeName = s, t.challengeParam = a, n(t);
        },
        mfaSetup: function(s, a) {
          oe.debug("signIn mfa setup", s), t.challengeName = s, t.challengeParam = a, n(t);
        },
        newPasswordRequired: function(s, a) {
          oe.debug("signIn new password"), t.challengeName = "NEW_PASSWORD_REQUIRED", t.challengeParam = {
            userAttributes: s,
            requiredAttributes: a
          }, n(t);
        },
        totpRequired: function(s, a) {
          oe.debug("signIn totpRequired"), t.challengeName = s, t.challengeParam = a, n(t);
        },
        selectMFAType: function(s, a) {
          oe.debug("signIn selectMFAType", s), t.challengeName = s, t.challengeParam = a, n(t);
        }
      };
    }, e.prototype.signInWithPassword = function(t) {
      var n = this;
      if (this.pendingSignIn)
        throw new Error("Pending sign-in attempt already in progress");
      var r = this.createCognitoUser(t.getUsername());
      return this.pendingSignIn = new Promise(function(o, i) {
        r.authenticateUser(t, n.authCallbacks(r, function(s) {
          n.pendingSignIn = null, o(s);
        }, function(s) {
          n.pendingSignIn = null, i(s);
        }));
      }), this.pendingSignIn;
    }, e.prototype.signInWithoutPassword = function(t) {
      var n = this, r = this.createCognitoUser(t.getUsername());
      return r.setAuthenticationFlowType("CUSTOM_AUTH"), new Promise(function(o, i) {
        r.initiateAuth(t, n.authCallbacks(r, o, i));
      });
    }, e.prototype.getMFAOptions = function(t) {
      return new Promise(function(n, r) {
        t.getMFAOptions(function(o, i) {
          if (o) {
            oe.debug("get MFA Options failed", o), r(o);
            return;
          }
          oe.debug("get MFA options success", i), n(i);
        });
      });
    }, e.prototype.getPreferredMFA = function(t, n) {
      var r = this, o = this;
      return new Promise(function(i, s) {
        var a = r._config.clientMetadata, c = n ? n.bypassCache : !1;
        t.getUserData(function(u, l) {
          return je(r, void 0, void 0, function() {
            var f, d;
            return be(this, function(p) {
              switch (p.label) {
                case 0:
                  if (!u)
                    return [3, 5];
                  if (oe.debug("getting preferred mfa failed", u), !this.isSessionInvalid(u))
                    return [3, 4];
                  p.label = 1;
                case 1:
                  return p.trys.push([1, 3, , 4]), [4, this.cleanUpInvalidSession(t)];
                case 2:
                  return p.sent(), [3, 4];
                case 3:
                  return f = p.sent(), s(new Error("Session is invalid due to: " + u.message + " and failed to clean up invalid session: " + f.message)), [
                    2
                    /*return*/
                  ];
                case 4:
                  return s(u), [
                    2
                    /*return*/
                  ];
                case 5:
                  return d = o._getMfaTypeFromUserData(l), d ? (i(d), [
                    2
                    /*return*/
                  ]) : (s("invalid MFA Type"), [
                    2
                    /*return*/
                  ]);
              }
            });
          });
        }, { bypassCache: c, clientMetadata: a });
      });
    }, e.prototype._getMfaTypeFromUserData = function(t) {
      var n = null, r = t.PreferredMfaSetting;
      if (r)
        n = r;
      else {
        var o = t.UserMFASettingList;
        if (o)
          o.length === 0 ? n = "NOMFA" : oe.debug("invalid case for getPreferredMFA", t);
        else {
          var i = t.MFAOptions;
          i ? n = "SMS_MFA" : n = "NOMFA";
        }
      }
      return n;
    }, e.prototype._getUserData = function(t, n) {
      var r = this;
      return new Promise(function(o, i) {
        t.getUserData(function(s, a) {
          return je(r, void 0, void 0, function() {
            var c;
            return be(this, function(u) {
              switch (u.label) {
                case 0:
                  if (!s)
                    return [3, 5];
                  if (oe.debug("getting user data failed", s), !this.isSessionInvalid(s))
                    return [3, 4];
                  u.label = 1;
                case 1:
                  return u.trys.push([1, 3, , 4]), [4, this.cleanUpInvalidSession(t)];
                case 2:
                  return u.sent(), [3, 4];
                case 3:
                  return c = u.sent(), i(new Error("Session is invalid due to: " + s.message + " and failed to clean up invalid session: " + c.message)), [
                    2
                    /*return*/
                  ];
                case 4:
                  return i(s), [
                    2
                    /*return*/
                  ];
                case 5:
                  o(a), u.label = 6;
                case 6:
                  return [
                    2
                    /*return*/
                  ];
              }
            });
          });
        }, n);
      });
    }, e.prototype.setPreferredMFA = function(t, n) {
      return je(this, void 0, void 0, function() {
        var r, o, i, s, a, c, u, l = this;
        return be(this, function(f) {
          switch (f.label) {
            case 0:
              return r = this._config.clientMetadata, [4, this._getUserData(t, {
                bypassCache: !0,
                clientMetadata: r
              })];
            case 1:
              switch (o = f.sent(), i = null, s = null, a = n, a) {
                case "TOTP":
                  return [3, 2];
                case "SOFTWARE_TOKEN_MFA":
                  return [3, 2];
                case "SMS":
                  return [3, 3];
                case "SMS_MFA":
                  return [3, 3];
                case "NOMFA":
                  return [3, 4];
              }
              return [3, 6];
            case 2:
              return s = {
                PreferredMfa: !0,
                Enabled: !0
              }, [3, 7];
            case 3:
              return i = {
                PreferredMfa: !0,
                Enabled: !0
              }, [3, 7];
            case 4:
              return c = o.UserMFASettingList, [4, this._getMfaTypeFromUserData(o)];
            case 5:
              if (u = f.sent(), u === "NOMFA")
                return [2, Promise.resolve("No change for mfa type")];
              if (u === "SMS_MFA")
                i = {
                  PreferredMfa: !1,
                  Enabled: !1
                };
              else if (u === "SOFTWARE_TOKEN_MFA")
                s = {
                  PreferredMfa: !1,
                  Enabled: !1
                };
              else
                return [2, this.rejectAuthError(Ce.InvalidMFA)];
              return c && c.length !== 0 && c.forEach(function(d) {
                d === "SMS_MFA" ? i = {
                  PreferredMfa: !1,
                  Enabled: !1
                } : d === "SOFTWARE_TOKEN_MFA" && (s = {
                  PreferredMfa: !1,
                  Enabled: !1
                });
              }), [3, 7];
            case 6:
              return oe.debug("no validmfa method provided"), [2, this.rejectAuthError(Ce.NoMFA)];
            case 7:
              return [2, new Promise(function(d, p) {
                t.setUserMfaPreference(i, s, function(M, y) {
                  if (M)
                    return oe.debug("Set user mfa preference error", M), p(M);
                  oe.debug("Set user mfa success", y), oe.debug("Caching the latest user data into local"), t.getUserData(function(m, w) {
                    return je(l, void 0, void 0, function() {
                      var D;
                      return be(this, function(N) {
                        switch (N.label) {
                          case 0:
                            if (!m)
                              return [3, 5];
                            if (oe.debug("getting user data failed", m), !this.isSessionInvalid(m))
                              return [3, 4];
                            N.label = 1;
                          case 1:
                            return N.trys.push([1, 3, , 4]), [4, this.cleanUpInvalidSession(t)];
                          case 2:
                            return N.sent(), [3, 4];
                          case 3:
                            return D = N.sent(), p(new Error("Session is invalid due to: " + m.message + " and failed to clean up invalid session: " + D.message)), [
                              2
                              /*return*/
                            ];
                          case 4:
                            return [2, p(m)];
                          case 5:
                            return [2, d(y)];
                        }
                      });
                    });
                  }, {
                    bypassCache: !0,
                    clientMetadata: r
                  });
                });
              })];
          }
        });
      });
    }, e.prototype.disableSMS = function(t) {
      return new Promise(function(n, r) {
        t.disableMFA(function(o, i) {
          if (o) {
            oe.debug("disable mfa failed", o), r(o);
            return;
          }
          oe.debug("disable mfa succeed", i), n(i);
        });
      });
    }, e.prototype.enableSMS = function(t) {
      return new Promise(function(n, r) {
        t.enableMFA(function(o, i) {
          if (o) {
            oe.debug("enable mfa failed", o), r(o);
            return;
          }
          oe.debug("enable mfa succeed", i), n(i);
        });
      });
    }, e.prototype.setupTOTP = function(t) {
      return new Promise(function(n, r) {
        t.associateSoftwareToken({
          onFailure: function(o) {
            oe.debug("associateSoftwareToken failed", o), r(o);
          },
          associateSecretCode: function(o) {
            oe.debug("associateSoftwareToken success", o), n(o);
          }
        });
      });
    }, e.prototype.verifyTotpToken = function(t, n) {
      oe.debug("verification totp token", t, n);
      var r;
      t && typeof t.getSignInUserSession == "function" && (r = t.getSignInUserSession());
      var o = r == null ? void 0 : r.isValid();
      return new Promise(function(i, s) {
        t.verifySoftwareToken(n, "My TOTP device", {
          onFailure: function(a) {
            oe.debug("verifyTotpToken failed", a), s(a);
          },
          onSuccess: function(a) {
            o || Te("signIn", t, "A user " + t.getUsername() + " has been signed in"), Te("verify", t, "A user " + t.getUsername() + " has been verified"), oe.debug("verifyTotpToken success", a), i(a);
          }
        });
      });
    }, e.prototype.confirmSignIn = function(t, n, r, o) {
      var i = this;
      if (o === void 0 && (o = this._config.clientMetadata), !n)
        return this.rejectAuthError(Ce.EmptyCode);
      var s = this;
      return new Promise(function(a, c) {
        t.sendMFACode(n, {
          onSuccess: function(u) {
            return je(i, void 0, void 0, function() {
              var l, f, d, p;
              return be(this, function(M) {
                switch (M.label) {
                  case 0:
                    oe.debug(u), M.label = 1;
                  case 1:
                    return M.trys.push([1, 4, 5, 10]), [4, this.Credentials.clear()];
                  case 2:
                    return M.sent(), [4, this.Credentials.set(u, "session")];
                  case 3:
                    return l = M.sent(), oe.debug("succeed to get cognito credentials", l), [3, 10];
                  case 4:
                    return f = M.sent(), oe.debug("cannot get cognito credentials", f), [3, 10];
                  case 5:
                    s.user = t, M.label = 6;
                  case 6:
                    return M.trys.push([6, 8, , 9]), [4, this.currentUserPoolUser()];
                  case 7:
                    return d = M.sent(), t.attributes = d.attributes, [3, 9];
                  case 8:
                    return p = M.sent(), oe.debug("cannot get updated Cognito User", p), [3, 9];
                  case 9:
                    return Te("signIn", t, "A user " + t.getUsername() + " has been signed in"), a(t), [
                      7
                      /*endfinally*/
                    ];
                  case 10:
                    return [
                      2
                      /*return*/
                    ];
                }
              });
            });
          },
          onFailure: function(u) {
            oe.debug("confirm signIn failure", u), c(u);
          }
        }, r, o);
      });
    }, e.prototype.completeNewPassword = function(t, n, r, o) {
      var i = this;
      if (r === void 0 && (r = {}), o === void 0 && (o = this._config.clientMetadata), !n)
        return this.rejectAuthError(Ce.EmptyPassword);
      var s = this;
      return new Promise(function(a, c) {
        t.completeNewPasswordChallenge(n, r, {
          onSuccess: function(u) {
            return je(i, void 0, void 0, function() {
              var l, f;
              return be(this, function(d) {
                switch (d.label) {
                  case 0:
                    oe.debug(u), d.label = 1;
                  case 1:
                    return d.trys.push([1, 4, 5, 6]), [4, this.Credentials.clear()];
                  case 2:
                    return d.sent(), [4, this.Credentials.set(u, "session")];
                  case 3:
                    return l = d.sent(), oe.debug("succeed to get cognito credentials", l), [3, 6];
                  case 4:
                    return f = d.sent(), oe.debug("cannot get cognito credentials", f), [3, 6];
                  case 5:
                    return s.user = t, Te("signIn", t, "A user " + t.getUsername() + " has been signed in"), a(t), [
                      7
                      /*endfinally*/
                    ];
                  case 6:
                    return [
                      2
                      /*return*/
                    ];
                }
              });
            });
          },
          onFailure: function(u) {
            oe.debug("completeNewPassword failure", u), Te("completeNewPassword_failure", u, i.user + " failed to complete the new password flow"), c(u);
          },
          mfaRequired: function(u, l) {
            oe.debug("signIn MFA required"), t.challengeName = u, t.challengeParam = l, a(t);
          },
          mfaSetup: function(u, l) {
            oe.debug("signIn mfa setup", u), t.challengeName = u, t.challengeParam = l, a(t);
          },
          totpRequired: function(u, l) {
            oe.debug("signIn mfa setup", u), t.challengeName = u, t.challengeParam = l, a(t);
          }
        }, o);
      });
    }, e.prototype.sendCustomChallengeAnswer = function(t, n, r) {
      var o = this;
      return r === void 0 && (r = this._config.clientMetadata), this.userPool ? n ? new Promise(function(i, s) {
        t.sendCustomChallengeAnswer(n, o.authCallbacks(t, i, s), r);
      }) : this.rejectAuthError(Ce.EmptyChallengeResponse) : this.rejectNoUserPool();
    }, e.prototype.deleteUserAttributes = function(t, n) {
      var r = this;
      return new Promise(function(o, i) {
        r.userSession(t).then(function(s) {
          t.deleteAttributes(n, function(a, c) {
            return a ? i(a) : o(c);
          });
        });
      });
    }, e.prototype.deleteUser = function() {
      return je(this, void 0, void 0, function() {
        var t, n, r = this;
        return be(this, function(o) {
          switch (o.label) {
            case 0:
              return o.trys.push([0, 2, , 3]), [4, this._storageSync];
            case 1:
              return o.sent(), [3, 3];
            case 2:
              throw t = o.sent(), oe.debug("Failed to sync cache info into memory", t), new Error(t);
            case 3:
              return n = this._oAuthHandler && this._storage.getItem("amplify-signin-with-hostedUI") === "true", [2, new Promise(function(i, s) {
                return je(r, void 0, void 0, function() {
                  var a, c = this;
                  return be(this, function(u) {
                    if (this.userPool)
                      if (a = this.userPool.getCurrentUser(), a)
                        a.getSession(function(l, f) {
                          return je(c, void 0, void 0, function() {
                            var d, p = this;
                            return be(this, function(M) {
                              switch (M.label) {
                                case 0:
                                  if (!l)
                                    return [3, 5];
                                  if (oe.debug("Failed to get the user session", l), !this.isSessionInvalid(l))
                                    return [3, 4];
                                  M.label = 1;
                                case 1:
                                  return M.trys.push([1, 3, , 4]), [4, this.cleanUpInvalidSession(a)];
                                case 2:
                                  return M.sent(), [3, 4];
                                case 3:
                                  return d = M.sent(), s(new Error("Session is invalid due to: " + l.message + " and failed to clean up invalid session: " + d.message)), [
                                    2
                                    /*return*/
                                  ];
                                case 4:
                                  return [2, s(l)];
                                case 5:
                                  a.deleteUser(function(y, m) {
                                    if (y)
                                      s(y);
                                    else {
                                      Te("userDeleted", m, "The authenticated user has been deleted."), a.signOut(), p.user = null;
                                      try {
                                        p.cleanCachedItems();
                                      } catch {
                                        oe.debug("failed to clear cached items");
                                      }
                                      n ? p.oAuthSignOutRedirect(i, s) : (Te("signOut", p.user, "A user has been signed out"), i(m));
                                    }
                                  }), M.label = 6;
                                case 6:
                                  return [
                                    2
                                    /*return*/
                                  ];
                              }
                            });
                          });
                        });
                      else
                        return oe.debug("Failed to get user from user pool"), [2, s(new Error("No current user."))];
                    else
                      oe.debug("no Congito User pool"), s(new Error("Cognito User pool does not exist"));
                    return [
                      2
                      /*return*/
                    ];
                  });
                });
              })];
          }
        });
      });
    }, e.prototype.updateUserAttributes = function(t, n, r) {
      var o = this;
      r === void 0 && (r = this._config.clientMetadata);
      var i = [], s = this;
      return new Promise(function(a, c) {
        s.userSession(t).then(function(u) {
          for (var l in n)
            if (l !== "sub" && l.indexOf("_verified") < 0) {
              var f = {
                Name: l,
                Value: n[l]
              };
              i.push(f);
            }
          t.updateAttributes(i, function(d, p, M) {
            if (d)
              return Te("updateUserAttributes_failure", d, "Failed to update attributes"), c(d);
            var y = o.createUpdateAttributesResultList(n, M == null ? void 0 : M.CodeDeliveryDetailsList);
            return Te("updateUserAttributes", y, "Attributes successfully updated"), a(p);
          }, r);
        });
      });
    }, e.prototype.createUpdateAttributesResultList = function(t, n) {
      var r = {};
      return Object.keys(t).forEach(function(o) {
        r[o] = {
          isUpdated: !0
        };
        var i = n == null ? void 0 : n.find(function(s) {
          return s.AttributeName === o;
        });
        i && (r[o].isUpdated = !1, r[o].codeDeliveryDetails = i);
      }), r;
    }, e.prototype.userAttributes = function(t) {
      var n = this;
      return new Promise(function(r, o) {
        n.userSession(t).then(function(i) {
          t.getUserAttributes(function(s, a) {
            s ? o(s) : r(a);
          });
        });
      });
    }, e.prototype.verifiedContact = function(t) {
      var n = this;
      return this.userAttributes(t).then(function(r) {
        var o = n.attributesToObject(r), i = {}, s = {};
        return o.email && (o.email_verified ? s.email = o.email : i.email = o.email), o.phone_number && (o.phone_number_verified ? s.phone_number = o.phone_number : i.phone_number = o.phone_number), {
          verified: s,
          unverified: i
        };
      });
    }, e.prototype.isErrorWithMessage = function(t) {
      return typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "message");
    }, e.prototype.isTokenRevokedError = function(t) {
      return this.isErrorWithMessage(t) && t.message === "Access Token has been revoked";
    }, e.prototype.isRefreshTokenRevokedError = function(t) {
      return this.isErrorWithMessage(t) && t.message === "Refresh Token has been revoked";
    }, e.prototype.isUserDisabledError = function(t) {
      return this.isErrorWithMessage(t) && t.message === "User is disabled.";
    }, e.prototype.isUserDoesNotExistError = function(t) {
      return this.isErrorWithMessage(t) && t.message === "User does not exist.";
    }, e.prototype.isRefreshTokenExpiredError = function(t) {
      return this.isErrorWithMessage(t) && t.message === "Refresh Token has expired";
    }, e.prototype.isPasswordResetRequiredError = function(t) {
      return this.isErrorWithMessage(t) && t.message === "Password reset required for the user";
    }, e.prototype.isSignedInHostedUI = function() {
      return this._oAuthHandler && this._storage.getItem("amplify-signin-with-hostedUI") === "true";
    }, e.prototype.isSessionInvalid = function(t) {
      return this.isUserDisabledError(t) || this.isUserDoesNotExistError(t) || this.isTokenRevokedError(t) || this.isRefreshTokenRevokedError(t) || this.isRefreshTokenExpiredError(t) || this.isPasswordResetRequiredError(t);
    }, e.prototype.cleanUpInvalidSession = function(t) {
      return je(this, void 0, void 0, function() {
        var n = this;
        return be(this, function(r) {
          switch (r.label) {
            case 0:
              t.signOut(), this.user = null, r.label = 1;
            case 1:
              return r.trys.push([1, 3, , 4]), [4, this.cleanCachedItems()];
            case 2:
              return r.sent(), [3, 4];
            case 3:
              return r.sent(), oe.debug("failed to clear cached items"), [3, 4];
            case 4:
              return this.isSignedInHostedUI() ? [2, new Promise(function(o, i) {
                n.oAuthSignOutRedirect(o, i);
              })] : (Te("signOut", this.user, "A user has been signed out"), [
                2
                /*return*/
              ]);
          }
        });
      });
    }, e.prototype.currentUserPoolUser = function(t) {
      var n = this;
      return this.userPool ? new Promise(function(r, o) {
        n._storageSync.then(function() {
          return je(n, void 0, void 0, function() {
            var i, s, a, c, u, l, f, d = this;
            return be(this, function(p) {
              switch (p.label) {
                case 0:
                  return this.isOAuthInProgress() ? (oe.debug("OAuth signIn in progress, waiting for resolution..."), [4, new Promise(function(M) {
                    var y = setTimeout(function() {
                      oe.debug("OAuth signIn in progress timeout"), Kt.remove("auth", m), M();
                    }, UN);
                    Kt.listen("auth", m);
                    function m(w) {
                      var D = w.payload, N = D.event;
                      (N === "cognitoHostedUI" || N === "cognitoHostedUI_failure") && (oe.debug("OAuth signIn resolved: " + N), clearTimeout(y), Kt.remove("auth", m), M());
                    }
                  })]) : [3, 2];
                case 1:
                  p.sent(), p.label = 2;
                case 2:
                  if (i = this.userPool.getCurrentUser(), !i)
                    return oe.debug("Failed to get user from user pool"), o("No current user"), [
                      2
                      /*return*/
                    ];
                  p.label = 3;
                case 3:
                  return p.trys.push([3, 7, , 8]), [4, this._userSession(i)];
                case 4:
                  return s = p.sent(), a = t ? t.bypassCache : !1, a ? [4, this.Credentials.clear()] : [3, 6];
                case 5:
                  p.sent(), p.label = 6;
                case 6:
                  if (c = this._config.clientMetadata, u = s.getAccessToken().decodePayload().scope, l = u === void 0 ? "" : u, l.split(" ").includes(Hl))
                    i.getUserData(function(M, y) {
                      return je(d, void 0, void 0, function() {
                        var m, w, D, N, E, T, F;
                        return be(this, function(_) {
                          switch (_.label) {
                            case 0:
                              if (!M)
                                return [3, 7];
                              if (oe.debug("getting user data failed", M), !this.isSessionInvalid(M))
                                return [3, 5];
                              _.label = 1;
                            case 1:
                              return _.trys.push([1, 3, , 4]), [4, this.cleanUpInvalidSession(i)];
                            case 2:
                              return _.sent(), [3, 4];
                            case 3:
                              return m = _.sent(), o(new Error("Session is invalid due to: " + M.message + " and failed to clean up invalid session: " + m.message)), [
                                2
                                /*return*/
                              ];
                            case 4:
                              return o(M), [3, 6];
                            case 5:
                              r(i), _.label = 6;
                            case 6:
                              return [
                                2
                                /*return*/
                              ];
                            case 7:
                              for (w = y.PreferredMfaSetting || "NOMFA", D = [], N = 0; N < y.UserAttributes.length; N++)
                                E = {
                                  Name: y.UserAttributes[N].Name,
                                  Value: y.UserAttributes[N].Value
                                }, T = new sr(E), D.push(T);
                              return F = this.attributesToObject(D), Object.assign(i, { attributes: F, preferredMFA: w }), [2, r(i)];
                          }
                        });
                      });
                    }, { bypassCache: a, clientMetadata: c });
                  else
                    return oe.debug("Unable to get the user data because the " + Hl + " is not in the scopes of the access token"), [2, r(i)];
                  return [3, 8];
                case 7:
                  return f = p.sent(), o(f), [3, 8];
                case 8:
                  return [
                    2
                    /*return*/
                  ];
              }
            });
          });
        }).catch(function(i) {
          return oe.debug("Failed to sync cache info into memory", i), o(i);
        });
      }) : this.rejectNoUserPool();
    }, e.prototype.isOAuthInProgress = function() {
      return this.oAuthFlowInProgress;
    }, e.prototype.currentAuthenticatedUser = function(t) {
      return je(this, void 0, void 0, function() {
        var n, r, o, i, s;
        return be(this, function(a) {
          switch (a.label) {
            case 0:
              oe.debug("getting current authenticated user"), n = null, a.label = 1;
            case 1:
              return a.trys.push([1, 3, , 4]), [4, this._storageSync];
            case 2:
              return a.sent(), [3, 4];
            case 3:
              throw r = a.sent(), oe.debug("Failed to sync cache info into memory", r), r;
            case 4:
              try {
                o = JSON.parse(this._storage.getItem("aws-amplify-federatedInfo")), o && (n = et(et({}, o.user), { token: o.token }));
              } catch {
                oe.debug("cannot load federated user from auth storage");
              }
              return n ? (this.user = n, oe.debug("get current authenticated federated user", this.user), [2, this.user]) : [3, 5];
            case 5:
              oe.debug("get current authenticated userpool user"), i = null, a.label = 6;
            case 6:
              return a.trys.push([6, 8, , 9]), [4, this.currentUserPoolUser(t)];
            case 7:
              return i = a.sent(), [3, 9];
            case 8:
              return s = a.sent(), s === "No userPool" && oe.error("Cannot get the current user because the user pool is missing. Please make sure the Auth module is configured with a valid Cognito User Pool ID"), oe.debug("The user is not authenticated by the error", s), [2, Promise.reject("The user is not authenticated")];
            case 9:
              return this.user = i, [2, this.user];
          }
        });
      });
    }, e.prototype.currentSession = function() {
      var t = this;
      return oe.debug("Getting current session"), this.userPool ? new Promise(function(n, r) {
        t.currentUserPoolUser().then(function(o) {
          t.userSession(o).then(function(i) {
            n(i);
          }).catch(function(i) {
            oe.debug("Failed to get the current session", i), r(i);
          });
        }).catch(function(o) {
          oe.debug("Failed to get the current user", o), r(o);
        });
      }) : Promise.reject(new Error("No User Pool in the configuration."));
    }, e.prototype._userSession = function(t) {
      return je(this, void 0, void 0, function() {
        var n, r, o = this;
        return be(this, function(i) {
          switch (i.label) {
            case 0:
              if (!t)
                return oe.debug("the user is null"), [2, this.rejectAuthError(Ce.NoUserSession)];
              n = this._config.clientMetadata, this.inflightSessionPromiseCounter === 0 && (this.inflightSessionPromise = new Promise(function(s, a) {
                t.getSession(function(c, u) {
                  return je(o, void 0, void 0, function() {
                    var l;
                    return be(this, function(f) {
                      switch (f.label) {
                        case 0:
                          if (!c)
                            return [3, 5];
                          if (oe.debug("Failed to get the session from user", t), !this.isSessionInvalid(c))
                            return [3, 4];
                          f.label = 1;
                        case 1:
                          return f.trys.push([1, 3, , 4]), [4, this.cleanUpInvalidSession(t)];
                        case 2:
                          return f.sent(), [3, 4];
                        case 3:
                          return l = f.sent(), a(new Error("Session is invalid due to: " + c.message + " and failed to clean up invalid session: " + l.message)), [
                            2
                            /*return*/
                          ];
                        case 4:
                          return a(c), [
                            2
                            /*return*/
                          ];
                        case 5:
                          return oe.debug("Succeed to get the user session", u), s(u), [
                            2
                            /*return*/
                          ];
                      }
                    });
                  });
                }, { clientMetadata: n });
              })), this.inflightSessionPromiseCounter++, i.label = 1;
            case 1:
              return i.trys.push([1, , 3, 4]), [4, this.inflightSessionPromise];
            case 2:
              return r = i.sent(), t.signInUserSession = r, [2, r];
            case 3:
              return this.inflightSessionPromiseCounter--, [
                7
                /*endfinally*/
              ];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.userSession = function(t) {
      return this._userSession(t);
    }, e.prototype.currentUserCredentials = function() {
      return je(this, void 0, void 0, function() {
        var t, n, r = this;
        return be(this, function(o) {
          switch (o.label) {
            case 0:
              oe.debug("Getting current user credentials"), o.label = 1;
            case 1:
              return o.trys.push([1, 3, , 4]), [4, this._storageSync];
            case 2:
              return o.sent(), [3, 4];
            case 3:
              throw t = o.sent(), oe.debug("Failed to sync cache info into memory", t), t;
            case 4:
              n = null;
              try {
                n = JSON.parse(this._storage.getItem("aws-amplify-federatedInfo"));
              } catch (i) {
                oe.debug("failed to get or parse item aws-amplify-federatedInfo", i);
              }
              return n ? [2, this.Credentials.refreshFederatedToken(n)] : [2, this.currentSession().then(function(i) {
                return oe.debug("getting session success", i), r.Credentials.set(i, "session");
              }).catch(function() {
                return oe.debug("getting guest credentials"), r.Credentials.set(null, "guest");
              })];
          }
        });
      });
    }, e.prototype.currentCredentials = function() {
      return oe.debug("getting current credentials"), this.Credentials.get();
    }, e.prototype.verifyUserAttribute = function(t, n, r) {
      return r === void 0 && (r = this._config.clientMetadata), new Promise(function(o, i) {
        t.getAttributeVerificationCode(n, {
          onSuccess: function(s) {
            return o(s);
          },
          onFailure: function(s) {
            return i(s);
          }
        }, r);
      });
    }, e.prototype.verifyUserAttributeSubmit = function(t, n, r) {
      return r ? new Promise(function(o, i) {
        t.verifyAttribute(n, r, {
          onSuccess: function(s) {
            o(s);
          },
          onFailure: function(s) {
            i(s);
          }
        });
      }) : this.rejectAuthError(Ce.EmptyCode);
    }, e.prototype.verifyCurrentUserAttribute = function(t) {
      var n = this;
      return n.currentUserPoolUser().then(function(r) {
        return n.verifyUserAttribute(r, t);
      });
    }, e.prototype.verifyCurrentUserAttributeSubmit = function(t, n) {
      var r = this;
      return r.currentUserPoolUser().then(function(o) {
        return r.verifyUserAttributeSubmit(o, t, n);
      });
    }, e.prototype.cognitoIdentitySignOut = function(t, n) {
      return je(this, void 0, void 0, function() {
        var r, o, i = this;
        return be(this, function(s) {
          switch (s.label) {
            case 0:
              return s.trys.push([0, 2, , 3]), [4, this._storageSync];
            case 1:
              return s.sent(), [3, 3];
            case 2:
              throw r = s.sent(), oe.debug("Failed to sync cache info into memory", r), r;
            case 3:
              return o = this._oAuthHandler && this._storage.getItem("amplify-signin-with-hostedUI") === "true", [2, new Promise(function(a, c) {
                if (t && t.global) {
                  oe.debug("user global sign out", n);
                  var u = i._config.clientMetadata;
                  n.getSession(function(l, f) {
                    return je(i, void 0, void 0, function() {
                      var d, p = this;
                      return be(this, function(M) {
                        switch (M.label) {
                          case 0:
                            if (!l)
                              return [3, 5];
                            if (oe.debug("failed to get the user session", l), !this.isSessionInvalid(l))
                              return [3, 4];
                            M.label = 1;
                          case 1:
                            return M.trys.push([1, 3, , 4]), [4, this.cleanUpInvalidSession(n)];
                          case 2:
                            return M.sent(), [3, 4];
                          case 3:
                            return d = M.sent(), c(new Error("Session is invalid due to: " + l.message + " and failed to clean up invalid session: " + d.message)), [
                              2
                              /*return*/
                            ];
                          case 4:
                            return [2, c(l)];
                          case 5:
                            return n.globalSignOut({
                              onSuccess: function(y) {
                                if (oe.debug("global sign out success"), o)
                                  p.oAuthSignOutRedirect(a, c);
                                else
                                  return a();
                              },
                              onFailure: function(y) {
                                return oe.debug("global sign out failed", y), c(y);
                              }
                            }), [
                              2
                              /*return*/
                            ];
                        }
                      });
                    });
                  }, { clientMetadata: u });
                } else
                  oe.debug("user sign out", n), n.signOut(function() {
                    if (o)
                      i.oAuthSignOutRedirect(a, c);
                    else
                      return a();
                  });
              })];
          }
        });
      });
    }, e.prototype.oAuthSignOutRedirect = function(t, n) {
      var r = rn().isBrowser;
      r ? this.oAuthSignOutRedirectOrReject(n) : this.oAuthSignOutAndResolve(t);
    }, e.prototype.oAuthSignOutAndResolve = function(t) {
      this._oAuthHandler.signOut(), t();
    }, e.prototype.oAuthSignOutRedirectOrReject = function(t) {
      this._oAuthHandler.signOut(), setTimeout(function() {
        return t(Error("Signout timeout fail"));
      }, 3e3);
    }, e.prototype.signOut = function(t) {
      return je(this, void 0, void 0, function() {
        var n;
        return be(this, function(r) {
          switch (r.label) {
            case 0:
              return r.trys.push([0, 2, , 3]), [4, this.cleanCachedItems()];
            case 1:
              return r.sent(), [3, 3];
            case 2:
              return r.sent(), oe.debug("failed to clear cached items"), [3, 3];
            case 3:
              return this.userPool ? (n = this.userPool.getCurrentUser(), n ? [4, this.cognitoIdentitySignOut(t, n)] : [3, 5]) : [3, 7];
            case 4:
              return r.sent(), [3, 6];
            case 5:
              oe.debug("no current Cognito user"), r.label = 6;
            case 6:
              return [3, 8];
            case 7:
              oe.debug("no Cognito User pool"), r.label = 8;
            case 8:
              return Te("signOut", this.user, "A user has been signed out"), this.user = null, [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.cleanCachedItems = function() {
      return je(this, void 0, void 0, function() {
        return be(this, function(t) {
          switch (t.label) {
            case 0:
              return [4, this.Credentials.clear()];
            case 1:
              return t.sent(), [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.changePassword = function(t, n, r, o) {
      var i = this;
      return o === void 0 && (o = this._config.clientMetadata), new Promise(function(s, a) {
        i.userSession(t).then(function(c) {
          t.changePassword(n, r, function(u, l) {
            return u ? (oe.debug("change password failure", u), a(u)) : s(l);
          }, o);
        });
      });
    }, e.prototype.forgotPassword = function(t, n) {
      if (n === void 0 && (n = this._config.clientMetadata), !this.userPool)
        return this.rejectNoUserPool();
      if (!t)
        return this.rejectAuthError(Ce.EmptyUsername);
      var r = this.createCognitoUser(t);
      return new Promise(function(o, i) {
        r.forgotPassword({
          onSuccess: function() {
            o();
          },
          onFailure: function(s) {
            oe.debug("forgot password failure", s), Te("forgotPassword_failure", s, t + " forgotPassword failed"), i(s);
          },
          inputVerificationCode: function(s) {
            Te("forgotPassword", r, t + " has initiated forgot password flow"), o(s);
          }
        }, n);
      });
    }, e.prototype.forgotPasswordSubmit = function(t, n, r, o) {
      if (o === void 0 && (o = this._config.clientMetadata), !this.userPool)
        return this.rejectNoUserPool();
      if (!t)
        return this.rejectAuthError(Ce.EmptyUsername);
      if (!n)
        return this.rejectAuthError(Ce.EmptyCode);
      if (!r)
        return this.rejectAuthError(Ce.EmptyPassword);
      var i = this.createCognitoUser(t);
      return new Promise(function(s, a) {
        i.confirmPassword(n, r, {
          onSuccess: function(c) {
            Te("forgotPasswordSubmit", i, t + " forgotPasswordSubmit successful"), s(c);
          },
          onFailure: function(c) {
            Te("forgotPasswordSubmit_failure", c, t + " forgotPasswordSubmit failed"), a(c);
          }
        }, o);
      });
    }, e.prototype.currentUserInfo = function() {
      return je(this, void 0, void 0, function() {
        var t, c, n, r, o, i, s, a, c;
        return be(this, function(u) {
          switch (u.label) {
            case 0:
              return t = this.Credentials.getCredSource(), !t || t === "aws" || t === "userPool" ? [4, this.currentUserPoolUser().catch(function(l) {
                return oe.error(l);
              })] : [3, 9];
            case 1:
              if (c = u.sent(), !c)
                return [2, null];
              u.label = 2;
            case 2:
              return u.trys.push([2, 8, , 9]), [4, this.userAttributes(c)];
            case 3:
              n = u.sent(), r = this.attributesToObject(n), o = null, u.label = 4;
            case 4:
              return u.trys.push([4, 6, , 7]), [4, this.currentCredentials()];
            case 5:
              return o = u.sent(), [3, 7];
            case 6:
              return i = u.sent(), oe.debug("Failed to retrieve credentials while getting current user info", i), [3, 7];
            case 7:
              return s = {
                id: o ? o.identityId : void 0,
                username: c.getUsername(),
                attributes: r
              }, [2, s];
            case 8:
              return a = u.sent(), oe.error("currentUserInfo error", a), [2, {}];
            case 9:
              return t === "federated" ? (c = this.user, [2, c || {}]) : [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.federatedSignIn = function(t, n, r) {
      return je(this, void 0, void 0, function() {
        var o, c, i, s, a, c, u, l, f, d, p, M;
        return be(this, function(y) {
          switch (y.label) {
            case 0:
              if (!this._config.identityPoolId && !this._config.userPoolId)
                throw new Error("Federation requires either a User Pool or Identity Pool in config");
              if (typeof t > "u" && this._config.identityPoolId && !this._config.userPoolId)
                throw new Error("Federation with Identity Pools requires tokens passed as arguments");
              return As(t) || dI(t) || hI(t) || typeof t > "u" ? (o = t || {
                provider: lo.Cognito
              }, c = As(o) ? o.provider : o.customProvider, i = (As(o), o.customState), this._config.userPoolId && (s = Ln(this._config.oauth) ? this._config.userPoolWebClientId : this._config.oauth.clientID, a = Ln(this._config.oauth) ? this._config.oauth.redirectSignIn : this._config.oauth.redirectUri, this._oAuthHandler.oauthSignIn(this._config.oauth.responseType, this._config.oauth.domain, a, s, c, i)), [3, 4]) : [3, 1];
            case 1:
              c = t;
              try {
                u = JSON.stringify(JSON.parse(this._storage.getItem("aws-amplify-federatedInfo")).user), u && oe.warn("There is already a signed in user: " + u + ` in your app.
																	You should not call Auth.federatedSignIn method again as it may cause unexpected behavior.`);
              } catch {
              }
              return l = n.token, f = n.identity_id, d = n.expires_at, [4, this.Credentials.set({ provider: c, token: l, identity_id: f, user: r, expires_at: d }, "federation")];
            case 2:
              return p = y.sent(), [4, this.currentAuthenticatedUser()];
            case 3:
              return M = y.sent(), Te("signIn", M, "A user " + M.username + " has been signed in"), oe.debug("federated sign in credentials", p), [2, p];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype._handleAuthResponse = function(t) {
      return je(this, void 0, void 0, function() {
        var n, r, o, i, s, a, c, u, l, f, d, p, M, y;
        return be(this, function(m) {
          switch (m.label) {
            case 0:
              if (this.oAuthFlowInProgress)
                return oe.debug("Skipping URL " + t + " current flow in progress"), [
                  2
                  /*return*/
                ];
              m.label = 1;
            case 1:
              if (m.trys.push([1, , 8, 9]), this.oAuthFlowInProgress = !0, !this._config.userPoolId)
                throw new Error("OAuth responses require a User Pool defined in config");
              if (Te("parsingCallbackUrl", { url: t }, "The callback url is being parsed"), n = t || (rn().isBrowser ? window.location.href : ""), r = !!(dn(n).query || "").split("&").map(function(w) {
                return w.split("=");
              }).find(function(w) {
                var D = Ct(w, 1), N = D[0];
                return N === "code" || N === "error";
              }), o = !!(dn(n).hash || "#").substr(1).split("&").map(function(w) {
                return w.split("=");
              }).find(function(w) {
                var D = Ct(w, 1), N = D[0];
                return N === "access_token" || N === "error";
              }), !(r || o))
                return [3, 7];
              this._storage.setItem("amplify-redirected-from-hosted-ui", "true"), m.label = 2;
            case 2:
              return m.trys.push([2, 6, , 7]), [4, this._oAuthHandler.handleAuthResponse(n)];
            case 3:
              return i = m.sent(), s = i.accessToken, a = i.idToken, c = i.refreshToken, u = i.state, l = new Ta({
                IdToken: new Aa({ IdToken: a }),
                RefreshToken: new Ea({
                  RefreshToken: c
                }),
                AccessToken: new Da({
                  AccessToken: s
                })
              }), f = void 0, this._config.identityPoolId ? [4, this.Credentials.set(l, "session")] : [3, 5];
            case 4:
              f = m.sent(), oe.debug("AWS credentials", f), m.label = 5;
            case 5:
              return d = /-/.test(u), p = this.createCognitoUser(l.getIdToken().decodePayload()["cognito:username"]), p.setSignInUserSession(l), window && typeof window.history < "u" && window.history.replaceState({}, null, this._config.oauth.redirectSignIn), Te("signIn", p, "A user " + p.getUsername() + " has been signed in"), Te("cognitoHostedUI", p, "A user " + p.getUsername() + " has been signed in via Cognito Hosted UI"), d && (M = u.split("-").splice(1).join("-"), Te("customOAuthState", eA(M), "State for user " + p.getUsername())), [2, f];
            case 6:
              return y = m.sent(), oe.debug("Error in cognito hosted auth response", y), window && typeof window.history < "u" && window.history.replaceState({}, null, this._config.oauth.redirectSignIn), Te("signIn_failure", y, "The OAuth response flow failed"), Te("cognitoHostedUI_failure", y, "A failure occurred when returning to the Cognito Hosted UI"), Te("customState_failure", y, "A failure occurred when returning state"), [3, 7];
            case 7:
              return [3, 9];
            case 8:
              return this.oAuthFlowInProgress = !1, [
                7
                /*endfinally*/
              ];
            case 9:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.essentialCredentials = function(t) {
      return {
        accessKeyId: t.accessKeyId,
        sessionToken: t.sessionToken,
        secretAccessKey: t.secretAccessKey,
        identityId: t.identityId,
        authenticated: t.authenticated
      };
    }, e.prototype.attributesToObject = function(t) {
      var n = this, r = {};
      return t && t.map(function(o) {
        o.Name === "email_verified" || o.Name === "phone_number_verified" ? r[o.Name] = n.isTruthyString(o.Value) || o.Value === !0 : r[o.Name] = o.Value;
      }), r;
    }, e.prototype.isTruthyString = function(t) {
      return typeof t.toLowerCase == "function" && t.toLowerCase() === "true";
    }, e.prototype.createCognitoUser = function(t) {
      var n = {
        Username: t,
        Pool: this.userPool
      };
      n.Storage = this._storage;
      var r = this._config.authenticationFlowType, o = new Na(n);
      return r && o.setAuthenticationFlowType(r), o;
    }, e.prototype._isValidAuthStorage = function(t) {
      return !!t && typeof t.getItem == "function" && typeof t.setItem == "function" && typeof t.removeItem == "function" && typeof t.clear == "function";
    }, e.prototype.noUserPoolErrorHandler = function(t) {
      return t && (!t.userPoolId || !t.identityPoolId) ? Ce.MissingAuthConfig : Ce.NoConfig;
    }, e.prototype.rejectAuthError = function(t) {
      return Promise.reject(new ln(t));
    }, e.prototype.rejectNoUserPool = function() {
      var t = this.noUserPoolErrorHandler(this._config);
      return Promise.reject(new kN(t));
    }, e.prototype.rememberDevice = function() {
      return je(this, void 0, void 0, function() {
        var t, n;
        return be(this, function(r) {
          switch (r.label) {
            case 0:
              return r.trys.push([0, 2, , 3]), [4, this.currentUserPoolUser()];
            case 1:
              return t = r.sent(), [3, 3];
            case 2:
              return n = r.sent(), oe.debug("The user is not authenticated by the error", n), [2, Promise.reject("The user is not authenticated")];
            case 3:
              return t.getCachedDeviceKeyAndPassword(), [2, new Promise(function(o, i) {
                t.setDeviceStatusRemembered({
                  onSuccess: function(s) {
                    o(s);
                  },
                  onFailure: function(s) {
                    s.code === "InvalidParameterException" ? i(new ln(Ce.DeviceConfig)) : s.code === "NetworkError" ? i(new ln(Ce.NetworkError)) : i(s);
                  }
                });
              })];
          }
        });
      });
    }, e.prototype.forgetDevice = function() {
      return je(this, void 0, void 0, function() {
        var t, n;
        return be(this, function(r) {
          switch (r.label) {
            case 0:
              return r.trys.push([0, 2, , 3]), [4, this.currentUserPoolUser()];
            case 1:
              return t = r.sent(), [3, 3];
            case 2:
              return n = r.sent(), oe.debug("The user is not authenticated by the error", n), [2, Promise.reject("The user is not authenticated")];
            case 3:
              return t.getCachedDeviceKeyAndPassword(), [2, new Promise(function(o, i) {
                t.forgetDevice({
                  onSuccess: function(s) {
                    o(s);
                  },
                  onFailure: function(s) {
                    s.code === "InvalidParameterException" ? i(new ln(Ce.DeviceConfig)) : s.code === "NetworkError" ? i(new ln(Ce.NetworkError)) : i(s);
                  }
                });
              })];
          }
        });
      });
    }, e.prototype.fetchDevices = function() {
      return je(this, void 0, void 0, function() {
        var t, n;
        return be(this, function(r) {
          switch (r.label) {
            case 0:
              return r.trys.push([0, 2, , 3]), [4, this.currentUserPoolUser()];
            case 1:
              return t = r.sent(), [3, 3];
            case 2:
              throw n = r.sent(), oe.debug("The user is not authenticated by the error", n), new Error("The user is not authenticated");
            case 3:
              return t.getCachedDeviceKeyAndPassword(), [2, new Promise(function(o, i) {
                var s = {
                  onSuccess: function(a) {
                    var c = a.Devices.map(function(u) {
                      var l = u.DeviceAttributes.find(function(d) {
                        var p = d.Name;
                        return p === "device_name";
                      }) || {}, f = {
                        id: u.DeviceKey,
                        name: l.Value
                      };
                      return f;
                    });
                    o(c);
                  },
                  onFailure: function(a) {
                    a.code === "InvalidParameterException" ? i(new ln(Ce.DeviceConfig)) : a.code === "NetworkError" ? i(new ln(Ce.NetworkError)) : i(a);
                  }
                };
                t.listDevices(RN, null, s);
              })];
          }
        });
      });
    }, e;
  }()
), In = new FN(null);
mu.register(In);
var uh = {}, Ls = {}, ql;
function QN() {
  return ql || (ql = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), function(s) {
      s.Cognito = "COGNITO", s.Google = "Google", s.Facebook = "Facebook", s.Amazon = "LoginWithAmazon", s.Apple = "SignInWithApple";
    }(e.CognitoHostedUIIdentityProvider || (e.CognitoHostedUIIdentityProvider = {}));
    function t(s) {
      var a = ["provider"];
      return s && !!a.find(function(c) {
        return s.hasOwnProperty(c);
      });
    }
    e.isFederatedSignInOptions = t;
    function n(s) {
      var a = ["customProvider"];
      return s && !!a.find(function(c) {
        return s.hasOwnProperty(c);
      });
    }
    e.isFederatedSignInOptionsCustom = n;
    function r(s) {
      var a = ["customState"];
      return s && !!a.find(function(c) {
        return s.hasOwnProperty(c);
      });
    }
    e.hasCustomState = r;
    function o(s) {
      return s.redirectSignIn !== void 0;
    }
    e.isCognitoHostedOpts = o, function(s) {
      s.NoConfig = "noConfig", s.MissingAuthConfig = "missingAuthConfig", s.EmptyUsername = "emptyUsername", s.InvalidUsername = "invalidUsername", s.EmptyPassword = "emptyPassword", s.EmptyCode = "emptyCode", s.SignUpError = "signUpError", s.NoMFA = "noMFA", s.InvalidMFA = "invalidMFA", s.EmptyChallengeResponse = "emptyChallengeResponse", s.NoUserSession = "noUserSession", s.Default = "default", s.DeviceConfig = "deviceConfig", s.NetworkError = "networkError", s.AutoSignInError = "autoSignInError";
    }(e.AuthErrorTypes || (e.AuthErrorTypes = {}));
    function i(s) {
      return !!s.username;
    }
    e.isUsernamePasswordOpts = i, function(s) {
      s.API_KEY = "API_KEY", s.AWS_IAM = "AWS_IAM", s.OPENID_CONNECT = "OPENID_CONNECT", s.AMAZON_COGNITO_USER_POOLS = "AMAZON_COGNITO_USER_POOLS", s.AWS_LAMBDA = "AWS_LAMBDA";
    }(e.GRAPHQL_AUTH_MODE || (e.GRAPHQL_AUTH_MODE = {}));
  }(Ls)), Ls;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = Iu;
  t.__exportStar(QN(), e);
})(uh);
const BN = () => {
  const e = window.location.search;
  let t = window.location.protocol + "//" + window.location.host + "/verify";
  window.location.search.includes("error_description") && (t = window.location.protocol + "//" + window.location.host + "/verify" + e);
  const n = window.location.protocol + "//" + window.location.host + "/", r = {
    Auth: {
      // REQUIRED - Amazon Cognito Region
      region: "ap-northeast-1",
      // OPTIONAL - Amazon Cognito User Pool ID
      userPoolId: "ap-northeast-1_dKhj1aZQy",
      // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
      userPoolWebClientId: "4i0q5hl5u27mili6fnpvjap8fc",
      // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
      mandatorySignIn: !0,
      oauth: {
        domain: "auth.wasedatime.com",
        scope: ["email", "profile", "openid", "aws.cognito.signin.user.admin"],
        redirectSignIn: t,
        redirectSignOut: n,
        responseType: "code"
        // or 'token', note that REFRESH token will only be generated when the responseType is code
      }
    }
  };
  In.configure(r);
}, yS = async () => {
  try {
    const e = await In.currentSession();
    if (e)
      return e.getIdToken().getJwtToken();
  } catch {
    return "";
  }
}, mS = async () => {
  try {
    const e = await In.currentSession();
    if (e)
      return e.getAccessToken().getJwtToken();
  } catch {
    return "";
  }
}, vS = async () => {
  try {
    const e = await In.currentSession();
    if (e)
      return e.getRefreshToken().getToken();
  } catch {
    return "";
  }
}, wS = async () => {
  try {
    const e = await In.currentUserInfo();
    if (e && e.attributes)
      return {
        id: e.attributes.sub,
        name: e.attributes.preferred_username,
        picture: e.attributes.picture
      };
  } catch {
    return null;
  }
}, $N = () => {
  BN();
  try {
    In.federatedSignIn({
      provider: uh.CognitoHostedUIIdentityProvider.Google,
      customState: window.location.pathname + window.location.search
    });
  } catch (e) {
    console.log(e);
  }
}, DS = () => {
  In.signOut();
};
var WN = Object.defineProperty, VN = (e, t, n) => t in e ? WN(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, _s = (e, t, n) => (VN(e, typeof t != "symbol" ? t + "" : t, n), n);
let HN = class {
  constructor() {
    _s(this, "current", this.detect()), _s(this, "handoffState", "pending"), _s(this, "currentId", 0);
  }
  set(t) {
    this.current !== t && (this.handoffState = "pending", this.currentId = 0, this.current = t);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
}, en = new HN(), on = (e, t) => {
  en.isServer ? dt(e, t) : lf(e, t);
};
function ns(e) {
  let t = Ze(e);
  return on(() => {
    t.current = e;
  }, [e]), t;
}
function rs(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function is() {
  let e = [], t = { addEventListener(n, r, o, i) {
    return n.addEventListener(r, o, i), t.add(() => n.removeEventListener(r, o, i));
  }, requestAnimationFrame(...n) {
    let r = requestAnimationFrame(...n);
    return t.add(() => cancelAnimationFrame(r));
  }, nextFrame(...n) {
    return t.requestAnimationFrame(() => t.requestAnimationFrame(...n));
  }, setTimeout(...n) {
    let r = setTimeout(...n);
    return t.add(() => clearTimeout(r));
  }, microTask(...n) {
    let r = { current: !0 };
    return rs(() => {
      r.current && n[0]();
    }), t.add(() => {
      r.current = !1;
    });
  }, style(n, r, o) {
    let i = n.style.getPropertyValue(r);
    return Object.assign(n.style, { [r]: o }), this.add(() => {
      Object.assign(n.style, { [r]: i });
    });
  }, group(n) {
    let r = is();
    return n(r), this.add(() => r.dispose());
  }, add(n) {
    return e.push(n), () => {
      let r = e.indexOf(n);
      if (r >= 0)
        for (let o of e.splice(r, 1))
          o();
    };
  }, dispose() {
    for (let n of e.splice(0))
      n();
  } };
  return t;
}
function qN() {
  let [e] = vr(is);
  return dt(() => () => e.dispose(), [e]), e;
}
let ct = function(e) {
  let t = ns(e);
  return we.useCallback((...n) => t.current(...n), [t]);
};
function KN() {
  let e = typeof document > "u";
  return "useSyncExternalStore" in te ? ((t) => t.useSyncExternalStore)(te)(() => () => {
  }, () => !1, () => !e) : !1;
}
function os() {
  let e = KN(), [t, n] = te.useState(en.isHandoffComplete);
  return t && en.isHandoffComplete === !1 && n(!1), te.useEffect(() => {
    t !== !0 && n(!0);
  }, [t]), te.useEffect(() => en.handoff(), []), e ? !1 : t;
}
var Kl;
let Sr = (Kl = we.useId) != null ? Kl : function() {
  let e = os(), [t, n] = we.useState(e ? () => en.nextId() : null);
  return on(() => {
    t === null && n(en.nextId());
  }, [t]), t != null ? "" + t : void 0;
};
function vn(e, t, ...n) {
  if (e in t) {
    let o = t[e];
    return typeof o == "function" ? o(...n) : o;
  }
  let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((o) => `"${o}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(r, vn), r;
}
function ch(e) {
  return en.isServer ? null : e instanceof Node ? e.ownerDocument : e != null && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document;
}
let Oa = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var Cn = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(Cn || {}), lh = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(lh || {}), GN = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(GN || {});
function JN(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Oa)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var fh = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(fh || {});
function XN(e, t = 0) {
  var n;
  return e === ((n = ch(e)) == null ? void 0 : n.body) ? !1 : vn(t, { 0() {
    return e.matches(Oa);
  }, 1() {
    let r = e;
    for (; r !== null; ) {
      if (r.matches(Oa))
        return !0;
      r = r.parentElement;
    }
    return !1;
  } });
}
var ZN = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(ZN || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function Yn(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let ej = ["textarea", "input"].join(",");
function tj(e) {
  var t, n;
  return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, ej)) != null ? n : !1;
}
function nj(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let o = t(n), i = t(r);
    if (o === null || i === null)
      return 0;
    let s = o.compareDocumentPosition(i);
    return s & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : s & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Ji(e, t, { sorted: n = !0, relativeTo: r = null, skipElements: o = [] } = {}) {
  let i = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument, s = Array.isArray(e) ? n ? nj(e) : e : JN(e);
  o.length > 0 && s.length > 1 && (s = s.filter((p) => !o.includes(p))), r = r ?? i.activeElement;
  let a = (() => {
    if (t & 5)
      return 1;
    if (t & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), c = (() => {
    if (t & 1)
      return 0;
    if (t & 2)
      return Math.max(0, s.indexOf(r)) - 1;
    if (t & 4)
      return Math.max(0, s.indexOf(r)) + 1;
    if (t & 8)
      return s.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), u = t & 32 ? { preventScroll: !0 } : {}, l = 0, f = s.length, d;
  do {
    if (l >= f || l + f <= 0)
      return 0;
    let p = c + l;
    if (t & 16)
      p = (p + f) % f;
    else {
      if (p < 0)
        return 3;
      if (p >= f)
        return 1;
    }
    d = s[p], d == null || d.focus(u), l += a;
  } while (d !== i.activeElement);
  return t & 6 && tj(d) && d.select(), 2;
}
function Ri(e, t, n) {
  let r = ns(t);
  dt(() => {
    function o(i) {
      r.current(i);
    }
    return document.addEventListener(e, o, n), () => document.removeEventListener(e, o, n);
  }, [e, n]);
}
function dh(e, t, n) {
  let r = ns(t);
  dt(() => {
    function o(i) {
      r.current(i);
    }
    return window.addEventListener(e, o, n), () => window.removeEventListener(e, o, n);
  }, [e, n]);
}
function rj(e, t, n = !0) {
  let r = Ze(!1);
  dt(() => {
    requestAnimationFrame(() => {
      r.current = n;
    });
  }, [n]);
  function o(s, a) {
    if (!r.current || s.defaultPrevented)
      return;
    let c = a(s);
    if (c === null || !c.getRootNode().contains(c) || !c.isConnected)
      return;
    let u = function l(f) {
      return typeof f == "function" ? l(f()) : Array.isArray(f) || f instanceof Set ? f : [f];
    }(e);
    for (let l of u) {
      if (l === null)
        continue;
      let f = l instanceof HTMLElement ? l : l.current;
      if (f != null && f.contains(c) || s.composed && s.composedPath().includes(f))
        return;
    }
    return !XN(c, fh.Loose) && c.tabIndex !== -1 && s.preventDefault(), t(s, c);
  }
  let i = Ze(null);
  Ri("pointerdown", (s) => {
    var a, c;
    r.current && (i.current = ((c = (a = s.composedPath) == null ? void 0 : a.call(s)) == null ? void 0 : c[0]) || s.target);
  }, !0), Ri("mousedown", (s) => {
    var a, c;
    r.current && (i.current = ((c = (a = s.composedPath) == null ? void 0 : a.call(s)) == null ? void 0 : c[0]) || s.target);
  }, !0), Ri("click", (s) => {
    i.current && (o(s, () => i.current), i.current = null);
  }, !0), Ri("touchend", (s) => o(s, () => s.target instanceof HTMLElement ? s.target : null), !0), dh("blur", (s) => o(s, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
let hh = Symbol();
function ij(e, t = !0) {
  return Object.assign(e, { [hh]: t });
}
function cn(...e) {
  let t = Ze(e);
  dt(() => {
    t.current = e;
  }, [e]);
  let n = ct((r) => {
    for (let o of t.current)
      o != null && (typeof o == "function" ? o(r) : o.current = r);
  });
  return e.every((r) => r == null || (r == null ? void 0 : r[hh])) ? void 0 : n;
}
function Gl(...e) {
  return Array.from(new Set(e.flatMap((t) => typeof t == "string" ? t.split(" ") : []))).filter(Boolean).join(" ");
}
var La = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(La || {}), oj = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(oj || {});
function $t({ ourProps: e, theirProps: t, slot: n, defaultTag: r, features: o, visible: i = !0, name: s }) {
  let a = gh(t, e);
  if (i)
    return Yi(a, n, r, s);
  let c = o ?? 0;
  if (c & 2) {
    let { static: u = !1, ...l } = a;
    if (u)
      return Yi(l, n, r, s);
  }
  if (c & 1) {
    let { unmount: u = !0, ...l } = a;
    return vn(u ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return Yi({ ...l, hidden: !0, style: { display: "none" } }, n, r, s);
    } });
  }
  return Yi(a, n, r, s);
}
function Yi(e, t = {}, n, r) {
  let { as: o = n, children: i, refName: s = "ref", ...a } = ks(e, ["unmount", "static"]), c = e.ref !== void 0 ? { [s]: e.ref } : {}, u = typeof i == "function" ? i(t) : i;
  "className" in a && a.className && typeof a.className == "function" && (a.className = a.className(t));
  let l = {};
  if (t) {
    let f = !1, d = [];
    for (let [p, M] of Object.entries(t))
      typeof M == "boolean" && (f = !0), M === !0 && d.push(p);
    f && (l["data-headlessui-state"] = d.join(" "));
  }
  if (o === Mn && Object.keys(Jl(a)).length > 0) {
    if (!Hr(u) || Array.isArray(u) && u.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(a).map((M) => `  - ${M}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((M) => `  - ${M}`).join(`
`)].join(`
`));
    let f = u.props, d = typeof (f == null ? void 0 : f.className) == "function" ? (...M) => Gl(f == null ? void 0 : f.className(...M), a.className) : Gl(f == null ? void 0 : f.className, a.className), p = d ? { className: d } : {};
    return qr(u, Object.assign({}, gh(u.props, Jl(ks(a, ["ref"]))), l, c, sj(u.ref, c.ref), p));
  }
  return Nt(o, Object.assign({}, ks(a, ["ref"]), o !== Mn && c, o !== Mn && l), u);
}
function sj(...e) {
  return { ref: e.every((t) => t == null) ? void 0 : (t) => {
    for (let n of e)
      n != null && (typeof n == "function" ? n(t) : n.current = t);
  } };
}
function gh(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let t = {}, n = {};
  for (let r of e)
    for (let o in r)
      o.startsWith("on") && typeof r[o] == "function" ? (n[o] != null || (n[o] = []), n[o].push(r[o])) : t[o] = r[o];
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(n).map((r) => [r, void 0])));
  for (let r in n)
    Object.assign(t, { [r](o, ...i) {
      let s = n[r];
      for (let a of s) {
        if ((o instanceof Event || (o == null ? void 0 : o.nativeEvent) instanceof Event) && o.defaultPrevented)
          return;
        a(o, ...i);
      }
    } });
  return t;
}
function Wt(e) {
  var t;
  return Object.assign(Ba(e), { displayName: (t = e.displayName) != null ? t : e.name });
}
function Jl(e) {
  let t = Object.assign({}, e);
  for (let n in t)
    t[n] === void 0 && delete t[n];
  return t;
}
function ks(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t)
    r in n && delete n[r];
  return n;
}
function aj(e) {
  let t = e.parentElement, n = null;
  for (; t && !(t instanceof HTMLFieldSetElement); )
    t instanceof HTMLLegendElement && (n = t), t = t.parentElement;
  let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return r && uj(n) ? !1 : r;
}
function uj(e) {
  if (!e)
    return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement)
      return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
let cj = "div";
var Do = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Do || {});
function lj(e, t) {
  let { features: n = 1, ...r } = e, o = { ref: t, "aria-hidden": (n & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
  return $t({ ourProps: o, theirProps: r, slot: {}, defaultTag: cj, name: "Hidden" });
}
let _a = Wt(lj), ph = sn(null);
ph.displayName = "OpenClosedContext";
var Wr = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(Wr || {});
function fj() {
  return it(ph);
}
var Mh = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Mh || {});
function xu(e, t) {
  let n = Ze([]), r = ct(e);
  dt(() => {
    let o = [...n.current];
    for (let [i, s] of t.entries())
      if (n.current[i] !== s) {
        let a = r(t, o);
        return n.current = t, a;
      }
  }, [r, ...t]);
}
function dj() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function Ni(...e) {
  return jt(() => ch(...e), [...e]);
}
var Vr = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(Vr || {});
function hj() {
  let e = Ze(0);
  return dh("keydown", (t) => {
    t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0);
  }, !0), e;
}
function yh() {
  let e = Ze(!1);
  return on(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function mh(e, t, n, r) {
  let o = ns(n);
  dt(() => {
    e = e ?? window;
    function i(s) {
      o.current(s);
    }
    return e.addEventListener(t, i, r), () => e.removeEventListener(t, i, r);
  }, [e, t, r]);
}
function gj(e) {
  function t() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", t), t());
}
function vh(e) {
  let t = ct(e), n = Ze(!1);
  dt(() => (n.current = !1, () => {
    n.current = !0, rs(() => {
      n.current && t();
    });
  }), [t]);
}
function wh(e) {
  if (!e)
    return /* @__PURE__ */ new Set();
  if (typeof e == "function")
    return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let n of e.current)
    n.current instanceof HTMLElement && t.add(n.current);
  return t;
}
let pj = "div";
var Dh = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Dh || {});
function Mj(e, t) {
  let n = Ze(null), r = cn(n, t), { initialFocus: o, containers: i, features: s = 30, ...a } = e;
  os() || (s = 1);
  let c = Ni(n);
  vj({ ownerDocument: c }, !!(s & 16));
  let u = wj({ ownerDocument: c, container: n, initialFocus: o }, !!(s & 2));
  Dj({ ownerDocument: c, container: n, containers: i, previousActiveElement: u }, !!(s & 8));
  let l = hj(), f = ct((y) => {
    let m = n.current;
    m && ((w) => w())(() => {
      vn(l.current, { [Vr.Forwards]: () => {
        Ji(m, Cn.First, { skipElements: [y.relatedTarget] });
      }, [Vr.Backwards]: () => {
        Ji(m, Cn.Last, { skipElements: [y.relatedTarget] });
      } });
    });
  }), d = qN(), p = Ze(!1), M = { ref: r, onKeyDown(y) {
    y.key == "Tab" && (p.current = !0, d.requestAnimationFrame(() => {
      p.current = !1;
    }));
  }, onBlur(y) {
    let m = wh(i);
    n.current instanceof HTMLElement && m.add(n.current);
    let w = y.relatedTarget;
    w instanceof HTMLElement && w.dataset.headlessuiFocusGuard !== "true" && (Ih(m, w) || (p.current ? Ji(n.current, vn(l.current, { [Vr.Forwards]: () => Cn.Next, [Vr.Backwards]: () => Cn.Previous }) | Cn.WrapAround, { relativeTo: y.target }) : y.target instanceof HTMLElement && Yn(y.target)));
  } };
  return we.createElement(we.Fragment, null, !!(s & 4) && we.createElement(_a, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: f, features: Do.Focusable }), $t({ ourProps: M, theirProps: a, defaultTag: pj, name: "FocusTrap" }), !!(s & 4) && we.createElement(_a, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: f, features: Do.Focusable }));
}
let yj = Wt(Mj), Rr = Object.assign(yj, { features: Dh }), gn = [];
gj(() => {
  function e(t) {
    t.target instanceof HTMLElement && t.target !== document.body && gn[0] !== t.target && (gn.unshift(t.target), gn = gn.filter((n) => n != null && n.isConnected), gn.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function mj(e = !0) {
  let t = Ze(gn.slice());
  return xu(([n], [r]) => {
    r === !0 && n === !1 && rs(() => {
      t.current.splice(0);
    }), r === !1 && n === !0 && (t.current = gn.slice());
  }, [e, gn, t]), ct(() => {
    var n;
    return (n = t.current.find((r) => r != null && r.isConnected)) != null ? n : null;
  });
}
function vj({ ownerDocument: e }, t) {
  let n = mj(t);
  xu(() => {
    t || (e == null ? void 0 : e.activeElement) === (e == null ? void 0 : e.body) && Yn(n());
  }, [t]), vh(() => {
    t && Yn(n());
  });
}
function wj({ ownerDocument: e, container: t, initialFocus: n }, r) {
  let o = Ze(null), i = yh();
  return xu(() => {
    if (!r)
      return;
    let s = t.current;
    s && rs(() => {
      if (!i.current)
        return;
      let a = e == null ? void 0 : e.activeElement;
      if (n != null && n.current) {
        if ((n == null ? void 0 : n.current) === a) {
          o.current = a;
          return;
        }
      } else if (s.contains(a)) {
        o.current = a;
        return;
      }
      n != null && n.current ? Yn(n.current) : Ji(s, Cn.First) === lh.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), o.current = e == null ? void 0 : e.activeElement;
    });
  }, [r]), o;
}
function Dj({ ownerDocument: e, container: t, containers: n, previousActiveElement: r }, o) {
  let i = yh();
  mh(e == null ? void 0 : e.defaultView, "focus", (s) => {
    if (!o || !i.current)
      return;
    let a = wh(n);
    t.current instanceof HTMLElement && a.add(t.current);
    let c = r.current;
    if (!c)
      return;
    let u = s.target;
    u && u instanceof HTMLElement ? Ih(a, u) ? (r.current = u, Yn(u)) : (s.preventDefault(), s.stopPropagation(), Yn(c)) : Yn(r.current);
  }, !0);
}
function Ih(e, t) {
  for (let n of e)
    if (n.contains(t))
      return !0;
  return !1;
}
let Ah = sn(!1);
function Ij() {
  return it(Ah);
}
function ka(e) {
  return we.createElement(Ah.Provider, { value: e.force }, e.children);
}
function Aj(e) {
  let t = Ij(), n = it(Eh), r = Ni(e), [o, i] = vr(() => {
    if (!t && n !== null || en.isServer)
      return null;
    let s = r == null ? void 0 : r.getElementById("headlessui-portal-root");
    if (s)
      return s;
    if (r === null)
      return null;
    let a = r.createElement("div");
    return a.setAttribute("id", "headlessui-portal-root"), r.body.appendChild(a);
  });
  return dt(() => {
    o !== null && (r != null && r.body.contains(o) || r == null || r.body.appendChild(o));
  }, [o, r]), dt(() => {
    t || n !== null && i(n.current);
  }, [n, i, t]), o;
}
let Ej = Mn;
function Tj(e, t) {
  let n = e, r = Ze(null), o = cn(ij((l) => {
    r.current = l;
  }), t), i = Ni(r), s = Aj(r), [a] = vr(() => {
    var l;
    return en.isServer ? null : (l = i == null ? void 0 : i.createElement("div")) != null ? l : null;
  }), c = it(za), u = os();
  return on(() => {
    !s || !a || s.contains(a) || (a.setAttribute("data-headlessui-portal", ""), s.appendChild(a));
  }, [s, a]), on(() => {
    if (a && c)
      return c.register(a);
  }, [c, a]), vh(() => {
    var l;
    !s || !a || (a instanceof Node && s.contains(a) && s.removeChild(a), s.childNodes.length <= 0 && ((l = s.parentElement) == null || l.removeChild(s)));
  }), u ? !s || !a ? null : Jh($t({ ourProps: { ref: o }, theirProps: n, defaultTag: Ej, name: "Portal" }), a) : null;
}
let Nj = Mn, Eh = sn(null);
function jj(e, t) {
  let { target: n, ...r } = e, o = { ref: cn(t) };
  return we.createElement(Eh.Provider, { value: n }, $t({ ourProps: o, theirProps: r, defaultTag: Nj, name: "Popover.Group" }));
}
let za = sn(null);
function bj() {
  let e = it(za), t = Ze([]), n = ct((i) => (t.current.push(i), e && e.register(i), () => r(i))), r = ct((i) => {
    let s = t.current.indexOf(i);
    s !== -1 && t.current.splice(s, 1), e && e.unregister(i);
  }), o = jt(() => ({ register: n, unregister: r, portals: t }), [n, r, t]);
  return [t, jt(() => function({ children: i }) {
    return we.createElement(za.Provider, { value: o }, i);
  }, [o])];
}
let Sj = Wt(Tj), xj = Wt(jj), Ua = Object.assign(Sj, { Group: xj }), Th = sn(null);
function Nh() {
  let e = it(Th);
  if (e === null) {
    let t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, Nh), t;
  }
  return e;
}
function Cj() {
  let [e, t] = vr([]);
  return [e.length > 0 ? e.join(" ") : void 0, jt(() => function(n) {
    let r = ct((i) => (t((s) => [...s, i]), () => t((s) => {
      let a = s.slice(), c = a.indexOf(i);
      return c !== -1 && a.splice(c, 1), a;
    }))), o = jt(() => ({ register: r, slot: n.slot, name: n.name, props: n.props }), [r, n.slot, n.name, n.props]);
    return we.createElement(Th.Provider, { value: o }, n.children);
  }, [t])];
}
let Oj = "p";
function Lj(e, t) {
  let n = Sr(), { id: r = `headlessui-description-${n}`, ...o } = e, i = Nh(), s = cn(t);
  on(() => i.register(r), [r, i.register]);
  let a = { ref: s, ...i.props, id: r };
  return $t({ ourProps: a, theirProps: o, slot: i.slot || {}, defaultTag: Oj, name: i.name || "Description" });
}
let _j = Wt(Lj), kj = Object.assign(_j, {}), Cu = sn(() => {
});
Cu.displayName = "StackContext";
var Pa = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(Pa || {});
function zj() {
  return it(Cu);
}
function Uj({ children: e, onUpdate: t, type: n, element: r, enabled: o }) {
  let i = zj(), s = ct((...a) => {
    t == null || t(...a), i(...a);
  });
  return on(() => {
    let a = o === void 0 || o === !0;
    return a && s(0, n, r), () => {
      a && s(1, n, r);
    };
  }, [s, n, r, o]), we.createElement(Cu.Provider, { value: s }, e);
}
function Pj(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
const Rj = typeof Object.is == "function" ? Object.is : Pj, { useState: Yj, useEffect: Fj, useLayoutEffect: Qj, useDebugValue: Bj } = te;
function $j(e, t, n) {
  const r = t(), [{ inst: o }, i] = Yj({ inst: { value: r, getSnapshot: t } });
  return Qj(() => {
    o.value = r, o.getSnapshot = t, zs(o) && i({ inst: o });
  }, [e, r, t]), Fj(() => (zs(o) && i({ inst: o }), e(() => {
    zs(o) && i({ inst: o });
  })), [e]), Bj(r), r;
}
function zs(e) {
  const t = e.getSnapshot, n = e.value;
  try {
    const r = t();
    return !Rj(n, r);
  } catch {
    return !0;
  }
}
function Wj(e, t, n) {
  return t();
}
const Vj = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Hj = !Vj, qj = Hj ? Wj : $j, Kj = "useSyncExternalStore" in te ? ((e) => e.useSyncExternalStore)(te) : qj;
function Gj(e) {
  return Kj(e.subscribe, e.getSnapshot, e.getSnapshot);
}
function Jj(e, t) {
  let n = e(), r = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return n;
  }, subscribe(o) {
    return r.add(o), () => r.delete(o);
  }, dispatch(o, ...i) {
    let s = t[o].call(n, ...i);
    s && (n = s, r.forEach((a) => a()));
  } };
}
function Xj() {
  let e;
  return { before({ doc: t }) {
    var n;
    let r = t.documentElement;
    e = ((n = t.defaultView) != null ? n : window).innerWidth - r.clientWidth;
  }, after({ doc: t, d: n }) {
    let r = t.documentElement, o = r.clientWidth - r.offsetWidth, i = e - o;
    n.style(r, "paddingRight", `${i}px`);
  } };
}
function Zj() {
  if (!dj())
    return {};
  let e;
  return { before() {
    e = window.pageYOffset;
  }, after({ doc: t, d: n, meta: r }) {
    function o(i) {
      return r.containers.flatMap((s) => s()).some((s) => s.contains(i));
    }
    n.microTask(() => {
      if (window.getComputedStyle(t.documentElement).scrollBehavior !== "auto") {
        let s = is();
        s.style(t.documentElement, "scroll-behavior", "auto"), n.add(() => n.microTask(() => s.dispose()));
      }
      n.style(t.body, "marginTop", `-${e}px`), window.scrollTo(0, 0);
      let i = null;
      n.addEventListener(t, "click", (s) => {
        if (s.target instanceof HTMLElement)
          try {
            let a = s.target.closest("a");
            if (!a)
              return;
            let { hash: c } = new URL(a.href), u = t.querySelector(c);
            u && !o(u) && (i = u);
          } catch {
          }
      }, !0), n.addEventListener(t, "touchmove", (s) => {
        s.target instanceof HTMLElement && !o(s.target) && s.preventDefault();
      }, { passive: !1 }), n.add(() => {
        window.scrollTo(0, window.pageYOffset + e), i && i.isConnected && (i.scrollIntoView({ block: "nearest" }), i = null);
      });
    });
  } };
}
function eb() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function tb(e) {
  let t = {};
  for (let n of e)
    Object.assign(t, n(t));
  return t;
}
let kn = Jj(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var n;
  let r = (n = this.get(e)) != null ? n : { doc: e, count: 0, d: is(), meta: /* @__PURE__ */ new Set() };
  return r.count++, r.meta.add(t), this.set(e, r), this;
}, POP(e, t) {
  let n = this.get(e);
  return n && (n.count--, n.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
  let r = { doc: e, d: t, meta: tb(n) }, o = [Zj(), Xj(), eb()];
  o.forEach(({ before: i }) => i == null ? void 0 : i(r)), o.forEach(({ after: i }) => i == null ? void 0 : i(r));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
kn.subscribe(() => {
  let e = kn.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [n] of e)
    t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let r = t.get(n.doc) === "hidden", o = n.count !== 0;
    (o && !r || !o && r) && kn.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), n.count === 0 && kn.dispatch("TEARDOWN", n);
  }
});
function nb(e, t, n) {
  let r = Gj(kn), o = e ? r.get(e) : void 0, i = o ? o.count > 0 : !1;
  return on(() => {
    if (!(!e || !t))
      return kn.dispatch("PUSH", e, n), () => kn.dispatch("POP", e, n);
  }, [t, e]), i;
}
let Us = /* @__PURE__ */ new Map(), Yr = /* @__PURE__ */ new Map();
function Xl(e, t = !0) {
  on(() => {
    var n;
    if (!t)
      return;
    let r = typeof e == "function" ? e() : e.current;
    if (!r)
      return;
    function o() {
      var s;
      if (!r)
        return;
      let a = (s = Yr.get(r)) != null ? s : 1;
      if (a === 1 ? Yr.delete(r) : Yr.set(r, a - 1), a !== 1)
        return;
      let c = Us.get(r);
      c && (c["aria-hidden"] === null ? r.removeAttribute("aria-hidden") : r.setAttribute("aria-hidden", c["aria-hidden"]), r.inert = c.inert, Us.delete(r));
    }
    let i = (n = Yr.get(r)) != null ? n : 0;
    return Yr.set(r, i + 1), i !== 0 || (Us.set(r, { "aria-hidden": r.getAttribute("aria-hidden"), inert: r.inert }), r.setAttribute("aria-hidden", "true"), r.inert = !0), o;
  }, [e, t]);
}
function rb({ defaultContainers: e = [], portals: t, mainTreeNodeRef: n } = {}) {
  var r;
  let o = Ze((r = n == null ? void 0 : n.current) != null ? r : null), i = Ni(o), s = ct(() => {
    var a;
    let c = [];
    for (let u of e)
      u !== null && (u instanceof HTMLElement ? c.push(u) : "current" in u && u.current instanceof HTMLElement && c.push(u.current));
    if (t != null && t.current)
      for (let u of t.current)
        c.push(u);
    for (let u of (a = i == null ? void 0 : i.querySelectorAll("html > *, body > *")) != null ? a : [])
      u !== document.body && u !== document.head && u instanceof HTMLElement && u.id !== "headlessui-portal-root" && (u.contains(o.current) || c.some((l) => u.contains(l)) || c.push(u));
    return c;
  });
  return { resolveContainers: s, contains: ct((a) => s().some((c) => c.contains(a))), mainTreeNodeRef: o, MainTreeNode: jt(() => function() {
    return n != null ? null : we.createElement(_a, { features: Do.Hidden, ref: o });
  }, [o, n]) };
}
var ib = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(ib || {}), ob = ((e) => (e[e.SetTitleId = 0] = "SetTitleId", e))(ob || {});
let sb = { 0(e, t) {
  return e.titleId === t.id ? e : { ...e, titleId: t.id };
} }, Io = sn(null);
Io.displayName = "DialogContext";
function ji(e) {
  let t = it(Io);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, ji), n;
  }
  return t;
}
function ab(e, t, n = () => [document.body]) {
  nb(e, t, (r) => {
    var o;
    return { containers: [...(o = r.containers) != null ? o : [], n] };
  });
}
function ub(e, t) {
  return vn(t.type, sb, e, t);
}
let cb = "div", lb = La.RenderStrategy | La.Static;
function fb(e, t) {
  var n;
  let r = Sr(), { id: o = `headlessui-dialog-${r}`, open: i, onClose: s, initialFocus: a, __demoMode: c = !1, ...u } = e, [l, f] = vr(0), d = fj();
  i === void 0 && d !== null && (i = (d & Wr.Open) === Wr.Open);
  let p = Ze(null), M = cn(p, t), y = Ni(p), m = e.hasOwnProperty("open") || d !== null, w = e.hasOwnProperty("onClose");
  if (!m && !w)
    throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!m)
    throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!w)
    throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (typeof i != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${i}`);
  if (typeof s != "function")
    throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${s}`);
  let D = i ? 0 : 1, [N, E] = qh(ub, { titleId: null, descriptionId: null, panelRef: Kh() }), T = ct(() => s(!1)), F = ct((ie) => E({ type: 0, id: ie })), _ = os() ? c ? !1 : D === 0 : !1, G = l > 1, Q = it(Io) !== null, [K, Z] = bj(), { resolveContainers: re, mainTreeNodeRef: U, MainTreeNode: j } = rb({ portals: K, defaultContainers: [(n = N.panelRef.current) != null ? n : p.current] }), C = G ? "parent" : "leaf", V = d !== null ? (d & Wr.Closing) === Wr.Closing : !1, S = (() => Q || V ? !1 : _)(), q = Yu(() => {
    var ie, P;
    return (P = Array.from((ie = y == null ? void 0 : y.querySelectorAll("body > *")) != null ? ie : []).find((L) => L.id === "headlessui-portal-root" ? !1 : L.contains(U.current) && L instanceof HTMLElement)) != null ? P : null;
  }, [U]);
  Xl(q, S);
  let ae = (() => G ? !0 : _)(), O = Yu(() => {
    var ie, P;
    return (P = Array.from((ie = y == null ? void 0 : y.querySelectorAll("[data-headlessui-portal]")) != null ? ie : []).find((L) => L.contains(U.current) && L instanceof HTMLElement)) != null ? P : null;
  }, [U]);
  Xl(O, ae);
  let z = (() => !(!_ || G))();
  rj(re, T, z);
  let Y = (() => !(G || D !== 0))();
  mh(y == null ? void 0 : y.defaultView, "keydown", (ie) => {
    Y && (ie.defaultPrevented || ie.key === Mh.Escape && (ie.preventDefault(), ie.stopPropagation(), T()));
  });
  let W = (() => !(V || D !== 0 || Q))();
  ab(y, W, re), dt(() => {
    if (D !== 0 || !p.current)
      return;
    let ie = new ResizeObserver((P) => {
      for (let L of P) {
        let R = L.target.getBoundingClientRect();
        R.x === 0 && R.y === 0 && R.width === 0 && R.height === 0 && T();
      }
    });
    return ie.observe(p.current), () => ie.disconnect();
  }, [D, p, T]);
  let [B, ee] = Cj(), b = jt(() => [{ dialogState: D, close: T, setTitleId: F }, N], [D, N, T, F]), ne = jt(() => ({ open: D === 0 }), [D]), $ = { ref: M, id: o, role: "dialog", "aria-modal": D === 0 ? !0 : void 0, "aria-labelledby": N.titleId, "aria-describedby": B };
  return we.createElement(Uj, { type: "Dialog", enabled: D === 0, element: p, onUpdate: ct((ie, P) => {
    P === "Dialog" && vn(ie, { [Pa.Add]: () => f((L) => L + 1), [Pa.Remove]: () => f((L) => L - 1) });
  }) }, we.createElement(ka, { force: !0 }, we.createElement(Ua, null, we.createElement(Io.Provider, { value: b }, we.createElement(Ua.Group, { target: p }, we.createElement(ka, { force: !1 }, we.createElement(ee, { slot: ne, name: "Dialog.Description" }, we.createElement(Rr, { initialFocus: a, containers: re, features: _ ? vn(C, { parent: Rr.features.RestoreFocus, leaf: Rr.features.All & ~Rr.features.FocusLock }) : Rr.features.None }, we.createElement(Z, null, $t({ ourProps: $, theirProps: u, slot: ne, defaultTag: cb, features: lb, visible: D === 0, name: "Dialog" }))))))))), we.createElement(j, null));
}
let db = "div";
function hb(e, t) {
  let n = Sr(), { id: r = `headlessui-dialog-overlay-${n}`, ...o } = e, [{ dialogState: i, close: s }] = ji("Dialog.Overlay"), a = cn(t), c = ct((l) => {
    if (l.target === l.currentTarget) {
      if (aj(l.currentTarget))
        return l.preventDefault();
      l.preventDefault(), l.stopPropagation(), s();
    }
  }), u = jt(() => ({ open: i === 0 }), [i]);
  return $t({ ourProps: { ref: a, id: r, "aria-hidden": !0, onClick: c }, theirProps: o, slot: u, defaultTag: db, name: "Dialog.Overlay" });
}
let gb = "div";
function pb(e, t) {
  let n = Sr(), { id: r = `headlessui-dialog-backdrop-${n}`, ...o } = e, [{ dialogState: i }, s] = ji("Dialog.Backdrop"), a = cn(t);
  dt(() => {
    if (s.panelRef.current === null)
      throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.");
  }, [s.panelRef]);
  let c = jt(() => ({ open: i === 0 }), [i]);
  return we.createElement(ka, { force: !0 }, we.createElement(Ua, null, $t({ ourProps: { ref: a, id: r, "aria-hidden": !0 }, theirProps: o, slot: c, defaultTag: gb, name: "Dialog.Backdrop" })));
}
let Mb = "div";
function yb(e, t) {
  let n = Sr(), { id: r = `headlessui-dialog-panel-${n}`, ...o } = e, [{ dialogState: i }, s] = ji("Dialog.Panel"), a = cn(t, s.panelRef), c = jt(() => ({ open: i === 0 }), [i]), u = ct((l) => {
    l.stopPropagation();
  });
  return $t({ ourProps: { ref: a, id: r, onClick: u }, theirProps: o, slot: c, defaultTag: Mb, name: "Dialog.Panel" });
}
let mb = "h2";
function vb(e, t) {
  let n = Sr(), { id: r = `headlessui-dialog-title-${n}`, ...o } = e, [{ dialogState: i, setTitleId: s }] = ji("Dialog.Title"), a = cn(t);
  dt(() => (s(r), () => s(null)), [r, s]);
  let c = jt(() => ({ open: i === 0 }), [i]);
  return $t({ ourProps: { ref: a, id: r }, theirProps: o, slot: c, defaultTag: mb, name: "Dialog.Title" });
}
let wb = Wt(fb), Db = Wt(pb), Ib = Wt(yb), Ab = Wt(hb), Eb = Wt(vb), Fi = Object.assign(wb, { Backdrop: Db, Panel: Ib, Overlay: Ab, Title: Eb, Description: kj });
const Tb = {
  width: "70%",
  fontSize: "1.6em",
  padding: "0.5em",
  margin: "0.5em",
  background: "#b51e36",
  borderRadius: "30px",
  color: "#fff",
  border: "2px solid #b51e36",
  ":hover": {
    background: "#fff",
    color: "#b51e36"
  },
  ":focus": {
    outline: "none"
  }
}, AS = ({ isModalOpen: e, closeModal: t, t: n }) => /* @__PURE__ */ fe.jsx(Fi, { open: e, onClose: () => t, children: /* @__PURE__ */ fe.jsxs(
  Fi.Panel,
  {
    className: "bg-light-bgMain text-light-text1 dark:bg-dark-bgMain dark:text-dark-text1 dark:border-2 dark:border-dark-text3 rounded-lg p-4 fixed top-1/3 z-50 shadow-xl border-4 border-gray-100",
    style: { top: "25vh", left: "20vw", width: "60vw", borderRadius: "20px", boxShadow: "0px 0px 10px gray" },
    children: [
      /* @__PURE__ */ fe.jsxs(Fi.Title, { style: { fontSize: "24px", position: "relative" }, className: "text-center", children: [
        /* @__PURE__ */ fe.jsx("button", { style: { position: "absolute", top: 0, right: 0, fontSize: 50 }, onClick: t, children: /* @__PURE__ */ fe.jsx(JM, {}) }),
        n("user.Sign in"),
        /* @__PURE__ */ fe.jsx("hr", { style: { backgroundColor: "#585858", borderColor: "#585858" } })
      ] }),
      /* @__PURE__ */ fe.jsxs(Fi.Description, { children: [
        /* @__PURE__ */ fe.jsxs("div", { className: "px-4 py-4 lg:px-16 text-center", children: [
          /* @__PURE__ */ fe.jsx("p", { children: n("user.sign in description") }),
          /* @__PURE__ */ fe.jsxs("button", { style: Tb, onClick: $N, children: [
            /* @__PURE__ */ fe.jsx("span", { style: { float: "left", color: "#fff" }, children: /* @__PURE__ */ fe.jsx(GM, {}) }),
            n("user.Sign in with WasedaMail")
          ] })
        ] }),
        /* @__PURE__ */ fe.jsx("hr", { style: { backgroundColor: "#585858", borderColor: "#585858" } }),
        /* @__PURE__ */ fe.jsxs("p", { className: "text-center", children: [
          n("user.agreement on privacy policy 1"),
          /* @__PURE__ */ fe.jsx("a", { href: "/privacy-policy", children: /* @__PURE__ */ fe.jsx("b", { children: n("user.Privacy Policy") }) }),
          n("user.agreement on privacy policy 2"),
          /* @__PURE__ */ fe.jsx("a", { href: "/terms-of-service", children: /* @__PURE__ */ fe.jsx("b", { children: n("user.Terms of Service") }) }),
          n("user.agreement on privacy policy 3")
        ] })
      ] })
    ]
  }
) });
function Nb(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Mi(e) {
  "@babel/helpers - typeof";
  return Mi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Mi(e);
}
function jb(e, t) {
  if (Mi(e) !== "object" || e === null)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Mi(r) !== "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function bb(e) {
  var t = jb(e, "string");
  return Mi(t) === "symbol" ? t : String(t);
}
function Zl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, bb(r.key), r);
  }
}
function Sb(e, t, n) {
  return t && Zl(e.prototype, t), n && Zl(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
var jh = [], xb = jh.forEach, Cb = jh.slice;
function Ob(e) {
  return xb.call(Cb.call(arguments, 1), function(t) {
    if (t)
      for (var n in t)
        e[n] === void 0 && (e[n] = t[n]);
  }), e;
}
var ef = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/, Lb = function(t, n, r) {
  var o = r || {};
  o.path = o.path || "/";
  var i = encodeURIComponent(n), s = t + "=" + i;
  if (o.maxAge > 0) {
    var a = o.maxAge - 0;
    if (isNaN(a))
      throw new Error("maxAge should be a Number");
    s += "; Max-Age=" + Math.floor(a);
  }
  if (o.domain) {
    if (!ef.test(o.domain))
      throw new TypeError("option domain is invalid");
    s += "; Domain=" + o.domain;
  }
  if (o.path) {
    if (!ef.test(o.path))
      throw new TypeError("option path is invalid");
    s += "; Path=" + o.path;
  }
  if (o.expires) {
    if (typeof o.expires.toUTCString != "function")
      throw new TypeError("option expires is invalid");
    s += "; Expires=" + o.expires.toUTCString();
  }
  if (o.httpOnly && (s += "; HttpOnly"), o.secure && (s += "; Secure"), o.sameSite) {
    var c = typeof o.sameSite == "string" ? o.sameSite.toLowerCase() : o.sameSite;
    switch (c) {
      case !0:
        s += "; SameSite=Strict";
        break;
      case "lax":
        s += "; SameSite=Lax";
        break;
      case "strict":
        s += "; SameSite=Strict";
        break;
      case "none":
        s += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return s;
}, tf = {
  create: function(t, n, r, o) {
    var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      path: "/",
      sameSite: "strict"
    };
    r && (i.expires = /* @__PURE__ */ new Date(), i.expires.setTime(i.expires.getTime() + r * 60 * 1e3)), o && (i.domain = o), document.cookie = Lb(t, encodeURIComponent(n), i);
  },
  read: function(t) {
    for (var n = t + "=", r = document.cookie.split(";"), o = 0; o < r.length; o++) {
      for (var i = r[o]; i.charAt(0) === " "; )
        i = i.substring(1, i.length);
      if (i.indexOf(n) === 0)
        return i.substring(n.length, i.length);
    }
    return null;
  },
  remove: function(t) {
    this.create(t, "", -1);
  }
}, _b = {
  name: "cookie",
  lookup: function(t) {
    var n;
    if (t.lookupCookie && typeof document < "u") {
      var r = tf.read(t.lookupCookie);
      r && (n = r);
    }
    return n;
  },
  cacheUserLanguage: function(t, n) {
    n.lookupCookie && typeof document < "u" && tf.create(n.lookupCookie, t, n.cookieMinutes, n.cookieDomain, n.cookieOptions);
  }
}, kb = {
  name: "querystring",
  lookup: function(t) {
    var n;
    if (typeof window < "u") {
      var r = window.location.search;
      !window.location.search && window.location.hash && window.location.hash.indexOf("?") > -1 && (r = window.location.hash.substring(window.location.hash.indexOf("?")));
      for (var o = r.substring(1), i = o.split("&"), s = 0; s < i.length; s++) {
        var a = i[s].indexOf("=");
        if (a > 0) {
          var c = i[s].substring(0, a);
          c === t.lookupQuerystring && (n = i[s].substring(a + 1));
        }
      }
    }
    return n;
  }
}, Fr = null, nf = function() {
  if (Fr !== null)
    return Fr;
  try {
    Fr = window !== "undefined" && window.localStorage !== null;
    var t = "i18next.translate.boo";
    window.localStorage.setItem(t, "foo"), window.localStorage.removeItem(t);
  } catch {
    Fr = !1;
  }
  return Fr;
}, zb = {
  name: "localStorage",
  lookup: function(t) {
    var n;
    if (t.lookupLocalStorage && nf()) {
      var r = window.localStorage.getItem(t.lookupLocalStorage);
      r && (n = r);
    }
    return n;
  },
  cacheUserLanguage: function(t, n) {
    n.lookupLocalStorage && nf() && window.localStorage.setItem(n.lookupLocalStorage, t);
  }
}, Qr = null, rf = function() {
  if (Qr !== null)
    return Qr;
  try {
    Qr = window !== "undefined" && window.sessionStorage !== null;
    var t = "i18next.translate.boo";
    window.sessionStorage.setItem(t, "foo"), window.sessionStorage.removeItem(t);
  } catch {
    Qr = !1;
  }
  return Qr;
}, Ub = {
  name: "sessionStorage",
  lookup: function(t) {
    var n;
    if (t.lookupSessionStorage && rf()) {
      var r = window.sessionStorage.getItem(t.lookupSessionStorage);
      r && (n = r);
    }
    return n;
  },
  cacheUserLanguage: function(t, n) {
    n.lookupSessionStorage && rf() && window.sessionStorage.setItem(n.lookupSessionStorage, t);
  }
}, Pb = {
  name: "navigator",
  lookup: function(t) {
    var n = [];
    if (typeof navigator < "u") {
      if (navigator.languages)
        for (var r = 0; r < navigator.languages.length; r++)
          n.push(navigator.languages[r]);
      navigator.userLanguage && n.push(navigator.userLanguage), navigator.language && n.push(navigator.language);
    }
    return n.length > 0 ? n : void 0;
  }
}, Rb = {
  name: "htmlTag",
  lookup: function(t) {
    var n, r = t.htmlTag || (typeof document < "u" ? document.documentElement : null);
    return r && typeof r.getAttribute == "function" && (n = r.getAttribute("lang")), n;
  }
}, Yb = {
  name: "path",
  lookup: function(t) {
    var n;
    if (typeof window < "u") {
      var r = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
      if (r instanceof Array)
        if (typeof t.lookupFromPathIndex == "number") {
          if (typeof r[t.lookupFromPathIndex] != "string")
            return;
          n = r[t.lookupFromPathIndex].replace("/", "");
        } else
          n = r[0].replace("/", "");
    }
    return n;
  }
}, Fb = {
  name: "subdomain",
  lookup: function(t) {
    var n;
    if (typeof window < "u") {
      var r = window.location.href.match(/(?:http[s]*\:\/\/)*(.*?)\.(?=[^\/]*\..{2,5})/gi);
      r instanceof Array && (typeof t.lookupFromSubdomainIndex == "number" ? n = r[t.lookupFromSubdomainIndex].replace("http://", "").replace("https://", "").replace(".", "") : n = r[0].replace("http://", "").replace("https://", "").replace(".", ""));
    }
    return n;
  }
};
function Qb() {
  return {
    order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"],
    lookupQuerystring: "lng",
    lookupCookie: "i18next",
    lookupLocalStorage: "i18nextLng",
    lookupSessionStorage: "i18nextLng",
    // cache user language
    caches: ["localStorage"],
    excludeCacheFor: ["cimode"]
    //cookieMinutes: 10,
    //cookieDomain: 'myDomain'
  };
}
var bh = /* @__PURE__ */ function() {
  function e(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    Nb(this, e), this.type = "languageDetector", this.detectors = {}, this.init(t, n);
  }
  return Sb(e, [{
    key: "init",
    value: function(n) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      this.services = n, this.options = Ob(r, this.options || {}, Qb()), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = o, this.addDetector(_b), this.addDetector(kb), this.addDetector(zb), this.addDetector(Ub), this.addDetector(Pb), this.addDetector(Rb), this.addDetector(Yb), this.addDetector(Fb);
    }
  }, {
    key: "addDetector",
    value: function(n) {
      this.detectors[n.name] = n;
    }
  }, {
    key: "detect",
    value: function(n) {
      var r = this;
      n || (n = this.options.order);
      var o = [];
      return n.forEach(function(i) {
        if (r.detectors[i]) {
          var s = r.detectors[i].lookup(r.options);
          s && typeof s == "string" && (s = [s]), s && (o = o.concat(s));
        }
      }), this.services.languageUtils.getBestMatchFromCodes ? o : o.length > 0 ? o[0] : null;
    }
  }, {
    key: "cacheUserLanguage",
    value: function(n, r) {
      var o = this;
      r || (r = this.options.caches), r && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(n) > -1 || r.forEach(function(i) {
        o.detectors[i] && o.detectors[i].cacheUserLanguage(n, o.options);
      }));
    }
  }]), e;
}();
bh.type = "languageDetector";
function Ra(e) {
  "@babel/helpers - typeof";
  return Ra = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ra(e);
}
var Sh = [], Bb = Sh.forEach, $b = Sh.slice;
function Ya(e) {
  return Bb.call($b.call(arguments, 1), function(t) {
    if (t)
      for (var n in t)
        e[n] === void 0 && (e[n] = t[n]);
  }), e;
}
function xh() {
  return typeof XMLHttpRequest == "function" || (typeof XMLHttpRequest > "u" ? "undefined" : Ra(XMLHttpRequest)) === "object";
}
function Wb(e) {
  return !!e && typeof e.then == "function";
}
function Vb(e) {
  return Wb(e) ? e : Promise.resolve(e);
}
function Hb(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Fa = { exports: {} }, Qi = { exports: {} }, of;
function qb() {
  return of || (of = 1, function(e, t) {
    var n = typeof self < "u" ? self : Ft, r = function() {
      function i() {
        this.fetch = !1, this.DOMException = n.DOMException;
      }
      return i.prototype = n, new i();
    }();
    (function(i) {
      (function(s) {
        var a = {
          searchParams: "URLSearchParams" in i,
          iterable: "Symbol" in i && "iterator" in Symbol,
          blob: "FileReader" in i && "Blob" in i && function() {
            try {
              return new Blob(), !0;
            } catch {
              return !1;
            }
          }(),
          formData: "FormData" in i,
          arrayBuffer: "ArrayBuffer" in i
        };
        function c(j) {
          return j && DataView.prototype.isPrototypeOf(j);
        }
        if (a.arrayBuffer)
          var u = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]"
          ], l = ArrayBuffer.isView || function(j) {
            return j && u.indexOf(Object.prototype.toString.call(j)) > -1;
          };
        function f(j) {
          if (typeof j != "string" && (j = String(j)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(j))
            throw new TypeError("Invalid character in header field name");
          return j.toLowerCase();
        }
        function d(j) {
          return typeof j != "string" && (j = String(j)), j;
        }
        function p(j) {
          var C = {
            next: function() {
              var V = j.shift();
              return { done: V === void 0, value: V };
            }
          };
          return a.iterable && (C[Symbol.iterator] = function() {
            return C;
          }), C;
        }
        function M(j) {
          this.map = {}, j instanceof M ? j.forEach(function(C, V) {
            this.append(V, C);
          }, this) : Array.isArray(j) ? j.forEach(function(C) {
            this.append(C[0], C[1]);
          }, this) : j && Object.getOwnPropertyNames(j).forEach(function(C) {
            this.append(C, j[C]);
          }, this);
        }
        M.prototype.append = function(j, C) {
          j = f(j), C = d(C);
          var V = this.map[j];
          this.map[j] = V ? V + ", " + C : C;
        }, M.prototype.delete = function(j) {
          delete this.map[f(j)];
        }, M.prototype.get = function(j) {
          return j = f(j), this.has(j) ? this.map[j] : null;
        }, M.prototype.has = function(j) {
          return this.map.hasOwnProperty(f(j));
        }, M.prototype.set = function(j, C) {
          this.map[f(j)] = d(C);
        }, M.prototype.forEach = function(j, C) {
          for (var V in this.map)
            this.map.hasOwnProperty(V) && j.call(C, this.map[V], V, this);
        }, M.prototype.keys = function() {
          var j = [];
          return this.forEach(function(C, V) {
            j.push(V);
          }), p(j);
        }, M.prototype.values = function() {
          var j = [];
          return this.forEach(function(C) {
            j.push(C);
          }), p(j);
        }, M.prototype.entries = function() {
          var j = [];
          return this.forEach(function(C, V) {
            j.push([V, C]);
          }), p(j);
        }, a.iterable && (M.prototype[Symbol.iterator] = M.prototype.entries);
        function y(j) {
          if (j.bodyUsed)
            return Promise.reject(new TypeError("Already read"));
          j.bodyUsed = !0;
        }
        function m(j) {
          return new Promise(function(C, V) {
            j.onload = function() {
              C(j.result);
            }, j.onerror = function() {
              V(j.error);
            };
          });
        }
        function w(j) {
          var C = new FileReader(), V = m(C);
          return C.readAsArrayBuffer(j), V;
        }
        function D(j) {
          var C = new FileReader(), V = m(C);
          return C.readAsText(j), V;
        }
        function N(j) {
          for (var C = new Uint8Array(j), V = new Array(C.length), S = 0; S < C.length; S++)
            V[S] = String.fromCharCode(C[S]);
          return V.join("");
        }
        function E(j) {
          if (j.slice)
            return j.slice(0);
          var C = new Uint8Array(j.byteLength);
          return C.set(new Uint8Array(j)), C.buffer;
        }
        function T() {
          return this.bodyUsed = !1, this._initBody = function(j) {
            this._bodyInit = j, j ? typeof j == "string" ? this._bodyText = j : a.blob && Blob.prototype.isPrototypeOf(j) ? this._bodyBlob = j : a.formData && FormData.prototype.isPrototypeOf(j) ? this._bodyFormData = j : a.searchParams && URLSearchParams.prototype.isPrototypeOf(j) ? this._bodyText = j.toString() : a.arrayBuffer && a.blob && c(j) ? (this._bodyArrayBuffer = E(j.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : a.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(j) || l(j)) ? this._bodyArrayBuffer = E(j) : this._bodyText = j = Object.prototype.toString.call(j) : this._bodyText = "", this.headers.get("content-type") || (typeof j == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : a.searchParams && URLSearchParams.prototype.isPrototypeOf(j) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
          }, a.blob && (this.blob = function() {
            var j = y(this);
            if (j)
              return j;
            if (this._bodyBlob)
              return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            if (this._bodyFormData)
              throw new Error("could not read FormData body as blob");
            return Promise.resolve(new Blob([this._bodyText]));
          }, this.arrayBuffer = function() {
            return this._bodyArrayBuffer ? y(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(w);
          }), this.text = function() {
            var j = y(this);
            if (j)
              return j;
            if (this._bodyBlob)
              return D(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return Promise.resolve(N(this._bodyArrayBuffer));
            if (this._bodyFormData)
              throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText);
          }, a.formData && (this.formData = function() {
            return this.text().then(Q);
          }), this.json = function() {
            return this.text().then(JSON.parse);
          }, this;
        }
        var F = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
        function _(j) {
          var C = j.toUpperCase();
          return F.indexOf(C) > -1 ? C : j;
        }
        function G(j, C) {
          C = C || {};
          var V = C.body;
          if (j instanceof G) {
            if (j.bodyUsed)
              throw new TypeError("Already read");
            this.url = j.url, this.credentials = j.credentials, C.headers || (this.headers = new M(j.headers)), this.method = j.method, this.mode = j.mode, this.signal = j.signal, !V && j._bodyInit != null && (V = j._bodyInit, j.bodyUsed = !0);
          } else
            this.url = String(j);
          if (this.credentials = C.credentials || this.credentials || "same-origin", (C.headers || !this.headers) && (this.headers = new M(C.headers)), this.method = _(C.method || this.method || "GET"), this.mode = C.mode || this.mode || null, this.signal = C.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && V)
            throw new TypeError("Body not allowed for GET or HEAD requests");
          this._initBody(V);
        }
        G.prototype.clone = function() {
          return new G(this, { body: this._bodyInit });
        };
        function Q(j) {
          var C = new FormData();
          return j.trim().split("&").forEach(function(V) {
            if (V) {
              var S = V.split("="), q = S.shift().replace(/\+/g, " "), ae = S.join("=").replace(/\+/g, " ");
              C.append(decodeURIComponent(q), decodeURIComponent(ae));
            }
          }), C;
        }
        function K(j) {
          var C = new M(), V = j.replace(/\r?\n[\t ]+/g, " ");
          return V.split(/\r?\n/).forEach(function(S) {
            var q = S.split(":"), ae = q.shift().trim();
            if (ae) {
              var O = q.join(":").trim();
              C.append(ae, O);
            }
          }), C;
        }
        T.call(G.prototype);
        function Z(j, C) {
          C || (C = {}), this.type = "default", this.status = C.status === void 0 ? 200 : C.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in C ? C.statusText : "OK", this.headers = new M(C.headers), this.url = C.url || "", this._initBody(j);
        }
        T.call(Z.prototype), Z.prototype.clone = function() {
          return new Z(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new M(this.headers),
            url: this.url
          });
        }, Z.error = function() {
          var j = new Z(null, { status: 0, statusText: "" });
          return j.type = "error", j;
        };
        var re = [301, 302, 303, 307, 308];
        Z.redirect = function(j, C) {
          if (re.indexOf(C) === -1)
            throw new RangeError("Invalid status code");
          return new Z(null, { status: C, headers: { location: j } });
        }, s.DOMException = i.DOMException;
        try {
          new s.DOMException();
        } catch {
          s.DOMException = function(C, V) {
            this.message = C, this.name = V;
            var S = Error(C);
            this.stack = S.stack;
          }, s.DOMException.prototype = Object.create(Error.prototype), s.DOMException.prototype.constructor = s.DOMException;
        }
        function U(j, C) {
          return new Promise(function(V, S) {
            var q = new G(j, C);
            if (q.signal && q.signal.aborted)
              return S(new s.DOMException("Aborted", "AbortError"));
            var ae = new XMLHttpRequest();
            function O() {
              ae.abort();
            }
            ae.onload = function() {
              var z = {
                status: ae.status,
                statusText: ae.statusText,
                headers: K(ae.getAllResponseHeaders() || "")
              };
              z.url = "responseURL" in ae ? ae.responseURL : z.headers.get("X-Request-URL");
              var Y = "response" in ae ? ae.response : ae.responseText;
              V(new Z(Y, z));
            }, ae.onerror = function() {
              S(new TypeError("Network request failed"));
            }, ae.ontimeout = function() {
              S(new TypeError("Network request failed"));
            }, ae.onabort = function() {
              S(new s.DOMException("Aborted", "AbortError"));
            }, ae.open(q.method, q.url, !0), q.credentials === "include" ? ae.withCredentials = !0 : q.credentials === "omit" && (ae.withCredentials = !1), "responseType" in ae && a.blob && (ae.responseType = "blob"), q.headers.forEach(function(z, Y) {
              ae.setRequestHeader(Y, z);
            }), q.signal && (q.signal.addEventListener("abort", O), ae.onreadystatechange = function() {
              ae.readyState === 4 && q.signal.removeEventListener("abort", O);
            }), ae.send(typeof q._bodyInit > "u" ? null : q._bodyInit);
          });
        }
        return U.polyfill = !0, i.fetch || (i.fetch = U, i.Headers = M, i.Request = G, i.Response = Z), s.Headers = M, s.Request = G, s.Response = Z, s.fetch = U, Object.defineProperty(s, "__esModule", { value: !0 }), s;
      })({});
    })(r), r.fetch.ponyfill = !0, delete r.fetch.polyfill;
    var o = r;
    t = o.fetch, t.default = o.fetch, t.fetch = o.fetch, t.Headers = o.Headers, t.Request = o.Request, t.Response = o.Response, e.exports = t;
  }(Qi, Qi.exports)), Qi.exports;
}
(function(e, t) {
  var n;
  if (typeof fetch == "function" && (typeof Ft < "u" && Ft.fetch ? n = Ft.fetch : typeof window < "u" && window.fetch ? n = window.fetch : n = fetch), typeof Hb < "u" && (typeof window > "u" || typeof window.document > "u")) {
    var r = n || qb();
    r.default && (r = r.default), t.default = r, e.exports = t.default;
  }
})(Fa, Fa.exports);
var Ch = Fa.exports;
const Oh = /* @__PURE__ */ vi(Ch), sf = /* @__PURE__ */ Xh({
  __proto__: null,
  default: Oh
}, [Ch]);
function Ao(e) {
  "@babel/helpers - typeof";
  return Ao = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ao(e);
}
var tn;
typeof fetch == "function" && (typeof global < "u" && global.fetch ? tn = global.fetch : typeof window < "u" && window.fetch ? tn = window.fetch : tn = fetch);
var yi;
xh() && (typeof global < "u" && global.XMLHttpRequest ? yi = global.XMLHttpRequest : typeof window < "u" && window.XMLHttpRequest && (yi = window.XMLHttpRequest));
var Eo;
typeof ActiveXObject == "function" && (typeof global < "u" && global.ActiveXObject ? Eo = global.ActiveXObject : typeof window < "u" && window.ActiveXObject && (Eo = window.ActiveXObject));
!tn && sf && !yi && !Eo && (tn = Oh || sf);
typeof tn != "function" && (tn = void 0);
var Qa = function(t, n) {
  if (n && Ao(n) === "object") {
    var r = "";
    for (var o in n)
      r += "&" + encodeURIComponent(o) + "=" + encodeURIComponent(n[o]);
    if (!r)
      return t;
    t = t + (t.indexOf("?") !== -1 ? "&" : "?") + r.slice(1);
  }
  return t;
}, af = function(t, n, r) {
  var o = function(s) {
    if (!s.ok)
      return r(s.statusText || "Error", {
        status: s.status
      });
    s.text().then(function(a) {
      r(null, {
        status: s.status,
        data: a
      });
    }).catch(r);
  };
  typeof fetch == "function" ? fetch(t, n).then(o).catch(r) : tn(t, n).then(o).catch(r);
}, uf = !1, Kb = function(t, n, r, o) {
  t.queryStringParams && (n = Qa(n, t.queryStringParams));
  var i = Ya({}, typeof t.customHeaders == "function" ? t.customHeaders() : t.customHeaders);
  r && (i["Content-Type"] = "application/json");
  var s = typeof t.requestOptions == "function" ? t.requestOptions(r) : t.requestOptions, a = Ya({
    method: r ? "POST" : "GET",
    body: r ? t.stringify(r) : void 0,
    headers: i
  }, uf ? {} : s);
  try {
    af(n, a, o);
  } catch (c) {
    if (!s || Object.keys(s).length === 0 || !c.message || c.message.indexOf("not implemented") < 0)
      return o(c);
    try {
      Object.keys(s).forEach(function(u) {
        delete a[u];
      }), af(n, a, o), uf = !0;
    } catch (u) {
      o(u);
    }
  }
}, Gb = function(t, n, r, o) {
  r && Ao(r) === "object" && (r = Qa("", r).slice(1)), t.queryStringParams && (n = Qa(n, t.queryStringParams));
  try {
    var i;
    yi ? i = new yi() : i = new Eo("MSXML2.XMLHTTP.3.0"), i.open(r ? "POST" : "GET", n, 1), t.crossDomain || i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), i.withCredentials = !!t.withCredentials, r && i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), i.overrideMimeType && i.overrideMimeType("application/json");
    var s = t.customHeaders;
    if (s = typeof s == "function" ? s() : s, s)
      for (var a in s)
        i.setRequestHeader(a, s[a]);
    i.onreadystatechange = function() {
      i.readyState > 3 && o(i.status >= 400 ? i.statusText : null, {
        status: i.status,
        data: i.responseText
      });
    }, i.send(r);
  } catch (c) {
    console && console.log(c);
  }
}, Jb = function(t, n, r, o) {
  if (typeof r == "function" && (o = r, r = void 0), o = o || function() {
  }, tn && n.indexOf("file:") !== 0)
    return Kb(t, n, r, o);
  if (xh() || typeof ActiveXObject == "function")
    return Gb(t, n, r, o);
  o(new Error("No fetch and no xhr implementation found!"));
};
function mi(e) {
  "@babel/helpers - typeof";
  return mi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, mi(e);
}
function Xb(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function cf(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Lh(r.key), r);
  }
}
function Zb(e, t, n) {
  return t && cf(e.prototype, t), n && cf(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function eS(e, t, n) {
  return t = Lh(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Lh(e) {
  var t = tS(e, "string");
  return mi(t) === "symbol" ? t : String(t);
}
function tS(e, t) {
  if (mi(e) !== "object" || e === null)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (mi(r) !== "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var nS = function() {
  return {
    loadPath: "/locales/{{lng}}/{{ns}}.json",
    addPath: "/locales/add/{{lng}}/{{ns}}",
    parse: function(n) {
      return JSON.parse(n);
    },
    stringify: JSON.stringify,
    parsePayload: function(n, r, o) {
      return eS({}, r, o || "");
    },
    parseLoadPayload: function(n, r) {
    },
    request: Jb,
    reloadInterval: typeof window < "u" ? !1 : 60 * 60 * 1e3,
    customHeaders: {},
    queryStringParams: {},
    crossDomain: !1,
    withCredentials: !1,
    overrideMimeType: !1,
    requestOptions: {
      mode: "cors",
      credentials: "same-origin",
      cache: "default"
    }
  };
}, _h = function() {
  function e(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    Xb(this, e), this.services = t, this.options = n, this.allOptions = r, this.type = "backend", this.init(t, n, r);
  }
  return Zb(e, [{
    key: "init",
    value: function(n) {
      var r = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      this.services = n, this.options = Ya(o, this.options || {}, nS()), this.allOptions = i, this.services && this.options.reloadInterval && setInterval(function() {
        return r.reload();
      }, this.options.reloadInterval);
    }
  }, {
    key: "readMulti",
    value: function(n, r, o) {
      this._readAny(n, n, r, r, o);
    }
  }, {
    key: "read",
    value: function(n, r, o) {
      this._readAny([n], n, [r], r, o);
    }
  }, {
    key: "_readAny",
    value: function(n, r, o, i, s) {
      var a = this, c = this.options.loadPath;
      typeof this.options.loadPath == "function" && (c = this.options.loadPath(n, o)), c = Vb(c), c.then(function(u) {
        if (!u)
          return s(null, {});
        var l = a.services.interpolator.interpolate(u, {
          lng: n.join("+"),
          ns: o.join("+")
        });
        a.loadUrl(l, s, r, i);
      });
    }
  }, {
    key: "loadUrl",
    value: function(n, r, o, i) {
      var s = this, a = typeof o == "string" ? [o] : o, c = typeof i == "string" ? [i] : i, u = this.options.parseLoadPayload(a, c);
      this.options.request(this.options, n, u, function(l, f) {
        if (f && (f.status >= 500 && f.status < 600 || !f.status))
          return r("failed loading " + n + "; status code: " + f.status, !0);
        if (f && f.status >= 400 && f.status < 500)
          return r("failed loading " + n + "; status code: " + f.status, !1);
        if (!f && l && l.message && l.message.indexOf("Failed to fetch") > -1)
          return r("failed loading " + n + ": " + l.message, !0);
        if (l)
          return r(l, !1);
        var d, p;
        try {
          typeof f.data == "string" ? d = s.options.parse(f.data, o, i) : d = f.data;
        } catch {
          p = "failed parsing " + n + " to json";
        }
        if (p)
          return r(p, !1);
        r(null, d);
      });
    }
  }, {
    key: "create",
    value: function(n, r, o, i, s) {
      var a = this;
      if (this.options.addPath) {
        typeof n == "string" && (n = [n]);
        var c = this.options.parsePayload(r, o, i), u = 0, l = [], f = [];
        n.forEach(function(d) {
          var p = a.options.addPath;
          typeof a.options.addPath == "function" && (p = a.options.addPath(d, r));
          var M = a.services.interpolator.interpolate(p, {
            lng: d,
            ns: r
          });
          a.options.request(a.options, M, c, function(y, m) {
            u += 1, l.push(y), f.push(m), u === n.length && typeof s == "function" && s(l, f);
          });
        });
      }
    }
  }, {
    key: "reload",
    value: function() {
      var n = this, r = this.services, o = r.backendConnector, i = r.languageUtils, s = r.logger, a = o.language;
      if (!(a && a.toLowerCase() === "cimode")) {
        var c = [], u = function(f) {
          var d = i.toResolveHierarchy(f);
          d.forEach(function(p) {
            c.indexOf(p) < 0 && c.push(p);
          });
        };
        u(a), this.allOptions.preload && this.allOptions.preload.forEach(function(l) {
          return u(l);
        }), c.forEach(function(l) {
          n.allOptions.ns.forEach(function(f) {
            o.read(l, f, "read", null, null, function(d, p) {
              d && s.warn("loading namespace ".concat(f, " for language ").concat(l, " failed"), d), !d && p && s.log("loaded namespace ".concat(f, " for language ").concat(l), p), o.loaded("".concat(l, "|").concat(f), d, p);
            });
          });
        });
      }
    }
  }]), e;
}();
_h.type = "backend";
const ES = (e) => e === _f.EN ? LM : KM, TS = () => bh, NS = () => _h;
export {
  $e as Colors,
  JM as CrossIcon,
  GM as GoogleIcon,
  pS as Header,
  _f as Lang,
  kD as LanguageMenu,
  MS as LoadingSpinner,
  zD as Logo,
  hS as LogoJp,
  aS as Modal,
  Zg as Overlay,
  oS as RowWrapper,
  AS as SignInModal,
  UD as SmallLogo,
  gS as SmallLogoJp,
  PD as ThemeToggle,
  If as Wrapper,
  sS as WrapperWithBackground,
  BN as configAuth,
  LM as en,
  cS as fontSize,
  mS as getAccessToken,
  ES as getCoreTranslation,
  NS as getI18nHttpBackend,
  TS as getI18nLanguageDetector,
  yS as getIdToken,
  vS as getRefreshToken,
  wS as getUserAttr,
  uS as height,
  lS as isScreenType,
  fS as isThemeType,
  KM as ja,
  dS as media,
  $N as signIn,
  DS as signOut,
  ha as sizes,
  pM as useScrollBlock
};
